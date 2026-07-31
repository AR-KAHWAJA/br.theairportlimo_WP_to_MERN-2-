import { useEffect, useRef, useState } from 'react'
import './StatCounter.css'

export default function StatCounter({ to, duration = 2000, prefix = '', suffix = '', label, title }) {
  const [value, setValue] = useState(0)
  const ref = useRef(null)
  const started = useRef(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return undefined

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true
          const start = performance.now()

          const tick = (now) => {
            const progress = Math.min((now - start) / duration, 1)
            setValue(Math.floor(progress * to))
            if (progress < 1) {
              requestAnimationFrame(tick)
            } else {
              setValue(to)
            }
          }

          requestAnimationFrame(tick)
        }
      },
      { threshold: 0.4 }
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [to, duration])

  return (
    <div className="stat-counter" ref={ref}>
      {title && <div className="stat-counter__title">{title}</div>}
      <div className="stat-counter__value">
        {prefix}
        {value.toLocaleString()}
        {suffix}
      </div>
      {label && <div className="stat-counter__label">{label}</div>}
    </div>
  )
}
