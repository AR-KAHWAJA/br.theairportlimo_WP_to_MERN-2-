import './TrackingSection.css'

const FEATURES = [
  {
    number: '01',
    title: 'Stay Informed',
    text: 'Receive live updates on your vehicle’s location and estimated arrival time, so you are never left guessing.'
  },
  {
    number: '02',
    title: 'Feel Secure',
    text: 'View your service in real time and stay in control with clear, reliable location updates whenever you need them.'
  },
  {
    number: '03',
    title: 'Easy Access',
    text: 'Track your journey from our user-friendly app with everything you need only a click away.'
  }
]

export default function TrackingSection() {
  return (
    <section className="tracking-section">
      <div className="tracking-container">
        <div className="tracking-intro">
          <div className="tracking-eyebrow">Live Tracking</div>

          <h2 className="tracking-title">
            Real-Time Tracking for <span>Peace of Mind</span>
          </h2>

          <p className="tracking-description">
            Enjoy our real-time tracking feature that keeps you informed at every step. Follow your ride, delivery,
            or service with just a glance. Our tracking system is transparent, intuitive, and designed to give you a
            seamless experience from start to finish.
          </p>
        </div>

        <div className="tracking-features">
          {FEATURES.map((feature) => (
            <article className="tracking-feature" key={feature.number}>
              <div className="tracking-feature__number">{feature.number}</div>
              <h3 className="tracking-feature__title">{feature.title}</h3>
              <p className="tracking-feature__text">{feature.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
