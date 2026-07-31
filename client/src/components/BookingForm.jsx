import { useEffect, useRef, useState } from 'react'
import { submitBooking } from '../api.js'
import LocationAutocomplete from './LocationAutocomplete.jsx'
import './BookingForm.css'

const MONTH_NAMES = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December'
]
const WEEKDAY_LABELS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
const MINUTE_OPTIONS = ['00', '15', '30', '45']

function startOfDay(date) {
  return new Date(date.getFullYear(), date.getMonth(), date.getDate())
}

function formatDateLabel(date) {
  return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })
}

const INITIAL_STATE = {
  date: '',
  time: '',
  pickup: '',
  pickupLatitude: '',
  pickupLongitude: '',
  dropoff: '',
  dropoffLatitude: '',
  dropoffLongitude: '',
  name: '',
  phone: '',
  email: ''
}

const CLOCK_FORMATTER = new Intl.DateTimeFormat('en-US', {
  month: 'short',
  day: 'numeric',
  hour: 'numeric',
  minute: '2-digit',
  hour12: true
})

function formatDateForInput(date) {
  const year = date.getFullYear()
  const month = String(date.getMonth() + 1).padStart(2, '0')
  const day = String(date.getDate()).padStart(2, '0')
  return `${year}-${month}-${day}`
}

const BENEFITS = [
  {
    icon: 'fa-regular fa-calendar-days',
    title: 'Book in advance',
    description: 'Choose your exact pickup time up to 90 days in advance.'
  },
  {
    icon: 'fa-regular fa-clock',
    title: 'Extra wait time',
    description: 'Extra wait time is included so you can comfortably meet your ride.'
  },
  {
    icon: 'fa-solid fa-ban',
    title: 'Free cancellation',
    description: 'Cancel at no charge up to 60 minutes before your pickup.'
  }
]

export default function BookingForm() {
  const [form, setForm] = useState(INITIAL_STATE)
  const [status, setStatus] = useState('idle')
  const [error, setError] = useState('')
  const [now, setNow] = useState(() => new Date())

  const [calendarOpen, setCalendarOpen] = useState(false)
  const [timeOpen, setTimeOpen] = useState(false)
  const [viewDate, setViewDate] = useState(() => {
    const today = new Date()
    return new Date(today.getFullYear(), today.getMonth(), 1)
  })
  const [selectedDate, setSelectedDate] = useState(null)
  const [pendingHour, setPendingHour] = useState('9')
  const [pendingMinute, setPendingMinute] = useState('00')
  const [pendingPeriod, setPendingPeriod] = useState('AM')

  const dateFieldRef = useRef(null)
  const timeFieldRef = useRef(null)
  const pickerHistoryPushed = useRef(false)

  useEffect(() => {
    const timer = setInterval(() => setNow(new Date()), 60000)
    return () => clearInterval(timer)
  }, [])

  // Lets the mobile hardware/software back button close an open picker instead of navigating away.
  useEffect(() => {
    function handlePopState() {
      pickerHistoryPushed.current = false
      setCalendarOpen(false)
      setTimeOpen(false)
    }

    window.addEventListener('popstate', handlePopState)
    return () => window.removeEventListener('popstate', handlePopState)
  }, [])

  useEffect(() => {
    function handleOutsideClick(event) {
      if (calendarOpen && dateFieldRef.current && !dateFieldRef.current.contains(event.target)) {
        closeCalendar()
      }
      if (timeOpen && timeFieldRef.current && !timeFieldRef.current.contains(event.target)) {
        closeTime()
      }
    }

    document.addEventListener('mousedown', handleOutsideClick)
    return () => document.removeEventListener('mousedown', handleOutsideClick)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [calendarOpen, timeOpen])

  function pushPickerHistory() {
    if (!pickerHistoryPushed.current) {
      window.history.pushState({ picker: true }, '')
      pickerHistoryPushed.current = true
    }
  }

  function popPickerHistory() {
    if (pickerHistoryPushed.current) {
      pickerHistoryPushed.current = false
      window.history.back()
    }
  }

  function closeCalendar() {
    setCalendarOpen(false)
    popPickerHistory()
  }

  function closeTime() {
    setTimeOpen(false)
    popPickerHistory()
  }

  function handleChange(event) {
    const { name, value } = event.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  function goToPrevMonth() {
    setViewDate((prev) => new Date(prev.getFullYear(), prev.getMonth() - 1, 1))
  }

  function goToNextMonth() {
    setViewDate((prev) => new Date(prev.getFullYear(), prev.getMonth() + 1, 1))
  }

  function selectDay(date) {
    setSelectedDate(date)
    setForm((prev) => ({ ...prev, date: formatDateForInput(date) }))
    closeCalendar()
  }

  function toggleCalendar() {
    setTimeOpen(false)
    setCalendarOpen((open) => {
      const next = !open
      if (next) {
        pushPickerHistory()
      } else {
        popPickerHistory()
      }
      return next
    })
  }

  function toggleTime() {
    setCalendarOpen(false)
    setTimeOpen((open) => {
      const next = !open
      if (next) {
        pushPickerHistory()
      } else {
        popPickerHistory()
      }
      return next
    })
  }

  function applyTime() {
    const value = `${String(pendingHour).padStart(2, '0')}:${pendingMinute} ${pendingPeriod}`
    setForm((prev) => ({ ...prev, time: value }))
    closeTime()
  }

  function renderCalendarDays() {
    const year = viewDate.getFullYear()
    const month = viewDate.getMonth()
    const firstWeekday = new Date(year, month, 1).getDay()
    const daysInMonth = new Date(year, month + 1, 0).getDate()
    const today = startOfDay(new Date())
    const maxDate = startOfDay(new Date(today.getFullYear(), today.getMonth(), today.getDate() + 90))

    const cells = []
    for (let i = 0; i < firstWeekday; i += 1) {
      cells.push(<span key={`pad-${i}`} />)
    }

    for (let day = 1; day <= daysInMonth; day += 1) {
      const current = new Date(year, month, day)
      const isToday = current.getTime() === today.getTime()
      const isSelected = selectedDate && current.getTime() === startOfDay(selectedDate).getTime()
      const isOutOfRange = current < today || current > maxDate

      cells.push(
        <button
          key={day}
          type="button"
          className={`calendar-day ${isToday ? 'today' : ''} ${isSelected ? 'selected' : ''} ${
            isOutOfRange ? 'muted' : ''
          }`}
          disabled={isOutOfRange}
          onClick={() => selectDay(current)}
        >
          {day}
        </button>
      )
    }

    return cells
  }

  function handlePickupChange({ address, latitude, longitude }) {
    setForm((prev) => ({ ...prev, pickup: address, pickupLatitude: latitude, pickupLongitude: longitude }))
  }

  function handleDropoffChange({ address, latitude, longitude }) {
    setForm((prev) => ({ ...prev, dropoff: address, dropoffLatitude: latitude, dropoffLongitude: longitude }))
  }

  async function handleSubmit(event) {
    event.preventDefault()
    setError('')

    if (!form.date || !form.time) {
      setStatus('error')
      setError('Please select your preferred date and time.')
      return
    }

    if (!form.pickupLatitude || !form.dropoffLatitude) {
      setStatus('error')
      setError('Please select both pickup and drop-off locations from the suggestions.')
      return
    }

    setStatus('submitting')

    try {
      await submitBooking(form)
      setStatus('success')
      setForm(INITIAL_STATE)
      setSelectedDate(null)
    } catch (err) {
      setStatus('error')
      setError(err.message)
    }
  }

  return (
    <section className="section booking">
      <div className="section-heading">
        <span className="pill-badge">Book Now!</span>
        <h2>Plan for later</h2>
      </div>

      <div className="container">
        <main className="reservation-card">
          <section
            className="reservation-form-side"
            style={{
              backgroundImage:
                'linear-gradient(rgba(67, 220, 214, 0.04), rgba(67, 220, 214, 0.04)), url(/images/try-image.webp)'
            }}
          >
            <div className="form-content">
              <h1 className="reservation-heading">
                Fast, Easy
                <br />
                Reservations Request
              </h1>

              <div className="live-date">
                <i className="fa-solid fa-clock" />
                <span>{CLOCK_FORMATTER.format(now)}</span>
              </div>

              <form className="reservation-form" onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="field-group" ref={dateFieldRef}>
                    <button
                      type="button"
                      className={`form-control picker-trigger ${selectedDate ? '' : 'placeholder'}`}
                      aria-label="Preferred date"
                      onClick={toggleCalendar}
                    >
                      {selectedDate ? formatDateLabel(selectedDate) : 'Preferred Date'}
                    </button>

                    {calendarOpen && (
                      <div className="picker-panel open">
                        <div className="calendar-head">
                          <button type="button" aria-label="Previous month" onClick={goToPrevMonth}>
                            &#8249;
                          </button>
                          <div className="calendar-title">
                            {MONTH_NAMES[viewDate.getMonth()]} {viewDate.getFullYear()}
                          </div>
                          <button type="button" aria-label="Next month" onClick={goToNextMonth}>
                            &#8250;
                          </button>
                        </div>
                        <div className="calendar-weekdays">
                          {WEEKDAY_LABELS.map((label) => (
                            <span key={label}>{label}</span>
                          ))}
                        </div>
                        <div className="calendar-days">{renderCalendarDays()}</div>
                      </div>
                    )}
                  </div>

                  <div className="field-group" ref={timeFieldRef}>
                    <button
                      type="button"
                      className={`form-control picker-trigger ${form.time ? '' : 'placeholder'}`}
                      aria-label="Preferred time"
                      onClick={toggleTime}
                    >
                      {form.time || 'Preferred Time'}
                    </button>

                    {timeOpen && (
                      <div className="picker-panel time-panel open">
                        <div className="time-grid">
                          <select
                            className="time-select"
                            aria-label="Hour"
                            value={pendingHour}
                            onChange={(event) => setPendingHour(event.target.value)}
                          >
                            {Array.from({ length: 12 }, (_, i) => i + 1).map((hour) => (
                              <option key={hour} value={hour}>
                                {String(hour).padStart(2, '0')}
                              </option>
                            ))}
                          </select>
                          <div className="time-separator">:</div>
                          <select
                            className="time-select"
                            aria-label="Minute"
                            value={pendingMinute}
                            onChange={(event) => setPendingMinute(event.target.value)}
                          >
                            {MINUTE_OPTIONS.map((minute) => (
                              <option key={minute} value={minute}>
                                {minute}
                              </option>
                            ))}
                          </select>
                          <select
                            className="time-select"
                            aria-label="AM or PM"
                            value={pendingPeriod}
                            onChange={(event) => setPendingPeriod(event.target.value)}
                          >
                            <option>AM</option>
                            <option>PM</option>
                          </select>
                        </div>
                        <div className="time-actions">
                          <button type="button" className="cancel-time" onClick={closeTime}>
                            Cancel
                          </button>
                          <button type="button" className="apply-time" onClick={applyTime}>
                            Apply
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                {(calendarOpen || timeOpen) && (
                  <div
                    className="picker-backdrop"
                    onClick={() => {
                      if (calendarOpen) closeCalendar()
                      if (timeOpen) closeTime()
                    }}
                  />
                )}

                <LocationAutocomplete
                  icon="fa-solid fa-location-dot"
                  placeholder="Enter pickup location"
                  name="pickup"
                  value={form.pickup}
                  onChange={handlePickupChange}
                  required
                />

                <LocationAutocomplete
                  icon="fa-solid fa-location-arrow"
                  placeholder="Enter drop-off location"
                  name="dropoff"
                  value={form.dropoff}
                  onChange={handleDropoffChange}
                  required
                />

                <input
                  className="form-control"
                  type="text"
                  name="name"
                  placeholder="Name"
                  aria-label="Name"
                  value={form.name}
                  onChange={handleChange}
                  required
                />

                <div className="form-row">
                  <input
                    className="form-control"
                    type="tel"
                    name="phone"
                    placeholder="Phone"
                    aria-label="Phone"
                    value={form.phone}
                    onChange={handleChange}
                    required
                  />
                  <input
                    className="form-control"
                    type="email"
                    name="email"
                    placeholder="Email"
                    aria-label="Email"
                    value={form.email}
                    onChange={handleChange}
                    required
                  />
                </div>

                <button className="submit-button" type="submit" disabled={status === 'submitting'}>
                  {status === 'submitting' ? 'Sending...' : 'Send'}
                </button>

                {status === 'success' && (
                  <p className="reservation-message reservation-message--success">
                    Thanks! We&rsquo;ll be in touch shortly to confirm your ride.
                  </p>
                )}
                {status === 'error' && <p className="reservation-message reservation-message--error">{error}</p>}
              </form>
            </div>
          </section>

          <aside className="benefits-side">
            <div className="benefits-content">
              <span className="benefits-label">Why choose us</span>
              <h2 className="benefits-heading">Benefits</h2>
              <p className="benefits-intro">Reserve your ride with more flexibility, convenience, and peace of mind.</p>

              <ul className="benefits-list">
                {BENEFITS.map((benefit) => (
                  <li className="benefit-item" key={benefit.title}>
                    <div className="benefit-icon">
                      <i className={benefit.icon} />
                    </div>
                    <div className="benefit-text">
                      <h3>{benefit.title}</h3>
                      <p>{benefit.description}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </main>
      </div>
    </section>
  )
}
