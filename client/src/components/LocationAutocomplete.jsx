import { useEffect, useRef, useState } from 'react'
import './LocationAutocomplete.css'

const PHOTON_ENDPOINT = 'https://photon.komoot.io/api/'
const PHOTON_LIMIT = 6
const DEBOUNCE_MS = 350
const MIN_QUERY_LENGTH = 3

function uniqueParts(parts) {
  return parts.filter((part, index, array) => part && array.indexOf(part) === index)
}

function formatPhotonFeature(feature) {
  const properties = feature.properties || {}
  const coordinates = feature.geometry?.coordinates || []

  const title =
    properties.name || properties.street || properties.city || properties.locality || properties.county || 'Selected location'

  const streetLine = uniqueParts([properties.housenumber, properties.street]).join(' ')

  const addressParts = uniqueParts([
    streetLine && streetLine !== title ? streetLine : '',
    properties.district,
    properties.locality,
    properties.city,
    properties.county,
    properties.state,
    properties.postcode,
    properties.country
  ])

  const address = addressParts.join(', ')
  const fullAddress = uniqueParts([title, address]).join(', ')

  return {
    title,
    address,
    fullAddress,
    longitude: coordinates[0] ?? '',
    latitude: coordinates[1] ?? ''
  }
}

export default function LocationAutocomplete({ icon, placeholder, value, onChange, name, required }) {
  const [results, setResults] = useState([])
  const [open, setOpen] = useState(false)
  const [loading, setLoading] = useState(false)
  const [activeIndex, setActiveIndex] = useState(-1)
  const [message, setMessage] = useState('')

  const fieldRef = useRef(null)
  const debounceTimer = useRef(null)
  const abortController = useRef(null)

  useEffect(() => {
    function handleClickOutside(event) {
      if (fieldRef.current && !fieldRef.current.contains(event.target)) {
        setOpen(false)
      }
    }
    document.addEventListener('click', handleClickOutside)
    return () => document.removeEventListener('click', handleClickOutside)
  }, [])

  async function searchLocations(query) {
    if (abortController.current) {
      abortController.current.abort()
    }
    abortController.current = new AbortController()
    setLoading(true)
    setMessage('')

    try {
      const params = new URLSearchParams({
        q: query,
        limit: String(PHOTON_LIMIT),
        lang: 'en',
        lat: '30.3753',
        lon: '69.3451'
      })

      const response = await fetch(`${PHOTON_ENDPOINT}?${params.toString()}`, {
        signal: abortController.current.signal,
        headers: { Accept: 'application/json' }
      })

      if (!response.ok) {
        throw new Error(`Photon request failed: ${response.status}`)
      }

      const data = await response.json()
      const features = Array.isArray(data.features) ? data.features : []
      const formatted = features.map(formatPhotonFeature)

      setResults(formatted)
      setMessage(formatted.length === 0 ? 'No matching locations found.' : '')
      setActiveIndex(-1)
      setOpen(true)
    } catch (err) {
      if (err.name !== 'AbortError') {
        setMessage('Location search is temporarily unavailable. Please try again.')
        setOpen(true)
      }
    } finally {
      setLoading(false)
    }
  }

  function handleInputChange(event) {
    const text = event.target.value
    onChange({ address: text, latitude: '', longitude: '' })
    clearTimeout(debounceTimer.current)

    const query = text.trim()
    if (query.length < MIN_QUERY_LENGTH) {
      setResults([])
      setOpen(false)
      setMessage('')
      return
    }

    debounceTimer.current = setTimeout(() => searchLocations(query), DEBOUNCE_MS)
  }

  function chooseResult(index) {
    const result = results[index]
    if (!result) return
    onChange({ address: result.fullAddress, latitude: result.latitude, longitude: result.longitude })
    setOpen(false)
    setActiveIndex(-1)
  }

  function handleKeyDown(event) {
    if (!open) return

    if (event.key === 'ArrowDown') {
      event.preventDefault()
      setActiveIndex((i) => Math.min(i + 1, results.length - 1))
    } else if (event.key === 'ArrowUp') {
      event.preventDefault()
      setActiveIndex((i) => Math.max(i - 1, 0))
    } else if (event.key === 'Enter' && activeIndex >= 0) {
      event.preventDefault()
      chooseResult(activeIndex)
    } else if (event.key === 'Escape') {
      setOpen(false)
    }
  }

  function handleFocus() {
    if (results.length > 0 && value.trim().length >= MIN_QUERY_LENGTH) {
      setOpen(true)
    }
  }

  return (
    <div className={`location-field ${open ? 'is-open' : ''} ${loading ? 'is-loading' : ''}`} ref={fieldRef}>
      <i className={icon} />
      <input
        className="form-control location-input"
        type="text"
        name={name}
        placeholder={placeholder}
        autoComplete="off"
        aria-autocomplete="list"
        aria-expanded={open}
        value={value}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
        onFocus={handleFocus}
        required={required}
      />
      <span className="location-loading" aria-hidden="true" />

      {open && (
        <div className="location-suggestions show" role="listbox">
          {message ? (
            <div className="location-message">{message}</div>
          ) : (
            results.map((result, index) => (
              <button
                key={`${result.fullAddress}-${index}`}
                type="button"
                className={`location-option ${index === activeIndex ? 'active' : ''}`}
                role="option"
                aria-selected={index === activeIndex}
                onMouseDown={(e) => e.preventDefault()}
                onClick={() => chooseResult(index)}
              >
                <span className="location-option-icon">
                  <i className="fa-solid fa-location-dot" />
                </span>
                <span className="location-option-text">
                  <span className="location-option-title">{result.title}</span>
                  <span className="location-option-address">{result.address || result.fullAddress}</span>
                </span>
              </button>
            ))
          )}
          <div className="location-attribution">Photon &middot; OpenStreetMap contributors</div>
        </div>
      )}
    </div>
  )
}
