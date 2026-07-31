import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import './HomeHero.css'

const SLIDES = [
  {
    tag: null,
    line1: 'Start Your Journey',
    line2: 'with BlinkRide',
    highlightLine: 1,
    image: 'images/welcome_image_BR.webp'
  },
  {
    tag: 'Business',
    line1: 'Smart Solutions',
    line2: 'for Business',
    image: 'images/bussiness-hero-sction-iamge-1.webp'
  },
  {
    tag: 'Family',
    line1: 'Safe Rides for',
    line2: 'Your Family',
    image: 'images/family_gift_ride_iamge__3_-2.webp'
  },
  {
    tag: 'Package',
    line1: 'Fast & Reliable',
    line2: 'Deliveries',
    image: 'images/Parcel-delivery-BR-1.webp'
  },
  {
    tag: 'Food',
    line1: 'Groceries at',
    line2: 'Your Doorstep',
    image: 'images/food-delivery-1.webp'
  },
  {
    tag: 'Kids',
    line1: 'Safe Rides',
    line2: 'for Kids',
    image: 'images/kids-hero-section-iamge-1.webp'
  }
]

const SLIDE_COUNT = SLIDES.length
const TRANSITION_MS = 700
const DRAG_THRESHOLD_PX = 60

// Extended track: [lastClone, ...SLIDES, firstClone] so next/prev can always
// animate straight through the boundary; we snap back invisibly afterwards.
const EXTENDED = [SLIDES[SLIDE_COUNT - 1], ...SLIDES, SLIDES[0]]

function SlideContent({ slide }) {
  return (
    <div className="container home-hero__inner">
      <div className="home-hero__content">
        {slide.tag && <span className="home-hero__tag">{slide.tag}</span>}
        {slide.highlightLine === 1 ? (
          <>
            <div className="home-hero__highlight-line">{slide.line1}</div>
            <h1>{slide.line2}</h1>
          </>
        ) : (
          <h1>
            {slide.line1}
            <br />
            {slide.line2}
          </h1>
        )}
        <Link to="/services" className="btn hero__cta home-hero__cta">
          Learn more
        </Link>
      </div>
    </div>
  )
}

export default function HomeHero() {
  const [trackIndex, setTrackIndex] = useState(1)
  const [withTransition, setWithTransition] = useState(true)
  const [dotIndex, setDotIndex] = useState(0)
  const [dragPx, setDragPx] = useState(0)
  const [isDragging, setIsDragging] = useState(false)
  const snapTimer = useRef(null)
  const nextRef = useRef(null)
  const drag = useRef(null)
  const isAnimating = useRef(false)

  function goToTrack(updater, dotUpdater) {
    if (isAnimating.current) return
    isAnimating.current = true
    setWithTransition(true)
    setTrackIndex(updater)
    setDotIndex(dotUpdater)
  }

  function prev() {
    goToTrack(
      (i) => i - 1,
      (i) => (i - 1 + SLIDE_COUNT) % SLIDE_COUNT
    )
  }

  function next() {
    goToTrack(
      (i) => i + 1,
      (i) => (i + 1) % SLIDE_COUNT
    )
  }

  function goTo(i) {
    goToTrack(() => i + 1, () => i)
  }

  nextRef.current = next

  // Auto-advance on a stable interval (doesn't reset on manual navigation).
  useEffect(() => {
    const timer = setInterval(() => nextRef.current(), 6000)
    return () => clearInterval(timer)
  }, [])

  // After each slide animates into place, if we've landed on a clone at
  // either end of the track, snap invisibly (no transition) to the matching
  // real slide so the loop continues seamlessly.
  useEffect(() => {
    if (!withTransition) return undefined

    snapTimer.current = setTimeout(() => {
      if (trackIndex === EXTENDED.length - 1) {
        setWithTransition(false)
        setTrackIndex(1)
      } else if (trackIndex === 0) {
        setWithTransition(false)
        setTrackIndex(SLIDE_COUNT)
      }
      isAnimating.current = false
    }, TRANSITION_MS)

    return () => clearTimeout(snapTimer.current)
  }, [trackIndex, withTransition])

  // Drag-to-slide, via window-level listeners so the drag keeps tracking
  // even if the pointer leaves the track element mid-gesture.
  useEffect(() => {
    function handleMove(clientX) {
      if (!drag.current) return
      const delta = clientX - drag.current.startX
      drag.current.deltaX = delta
      setDragPx(delta)
    }

    function finish() {
      if (!drag.current) return
      const delta = drag.current.deltaX
      drag.current = null
      setIsDragging(false)
      setDragPx(0)

      if (delta <= -DRAG_THRESHOLD_PX) {
        next()
      } else if (delta >= DRAG_THRESHOLD_PX) {
        prev()
      } else {
        setWithTransition(true)
      }
    }

    function onMouseMove(event) {
      handleMove(event.clientX)
    }

    function onTouchMove(event) {
      handleMove(event.touches[0].clientX)
    }

    window.addEventListener('mousemove', onMouseMove)
    window.addEventListener('mouseup', finish)
    window.addEventListener('touchmove', onTouchMove, { passive: true })
    window.addEventListener('touchend', finish)

    return () => {
      window.removeEventListener('mousemove', onMouseMove)
      window.removeEventListener('mouseup', finish)
      window.removeEventListener('touchmove', onTouchMove)
      window.removeEventListener('touchend', finish)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  function startDrag(clientX, target) {
    if (target.closest('a, button')) return
    drag.current = { startX: clientX, deltaX: 0 }
    isAnimating.current = false
    setIsDragging(true)
    setWithTransition(false)
    setDragPx(0)
  }

  function handleMouseDown(event) {
    startDrag(event.clientX, event.target)
  }

  function handleTouchStart(event) {
    startDrag(event.touches[0].clientX, event.target)
  }

  return (
    <section className="home-hero">
      <div
        className="home-hero__track"
        onMouseDown={handleMouseDown}
        onTouchStart={handleTouchStart}
        style={{
          transform: `translateX(calc(-${trackIndex * 100}% + ${isDragging ? dragPx : 0}px))`,
          transition: withTransition ? `transform ${TRANSITION_MS}ms cubic-bezier(0.65, 0, 0.35, 1)` : 'none',
          cursor: isDragging ? 'grabbing' : 'grab'
        }}
      >
        {EXTENDED.map((slide, i) => (
          <div className="home-hero__slide" key={i} style={{ backgroundImage: `url(${slide.image})` }}>
            <div className="home-hero__overlay" />
            <SlideContent slide={slide} />
          </div>
        ))}
      </div>

      <button className="home-hero__arrow home-hero__arrow--prev" aria-label="Previous slide" onClick={prev}>
        &#10094;
      </button>
      <button className="home-hero__arrow home-hero__arrow--next" aria-label="Next slide" onClick={next}>
        &#10095;
      </button>

      <div className="home-hero__dots">
        {SLIDES.map((s, i) => (
          <button
            key={`${s.tag}-${i}`}
            className={i === dotIndex ? 'is-active' : ''}
            aria-label={`Go to slide ${i + 1}`}
            onClick={() => goTo(i)}
          />
        ))}
      </div>
    </section>
  )
}
