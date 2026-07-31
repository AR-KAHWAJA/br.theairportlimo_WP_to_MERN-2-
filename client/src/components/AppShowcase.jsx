import { getAppLink } from '../config/site.js'
import './AppShowcase.css'

const CARDS = [
  {
    variant: 'customer',
    eyebrow: 'Ride with BlinkRide',
    title: (
      <>
        Download the
        <br />
        Customer App
      </>
    ),
    description:
      'Book premium rides, track your driver in real time, manage reservations, and enjoy a smooth travel experience from pickup to destination.',
    features: [
      'Quick and simple ride booking',
      'Real-time driver and trip updates',
      'Flexible ride and payment options'
    ],
    image: '/images/iamge-customer-app-mobile-screen.webp',
    imageAlt: 'BlinkRide Customer App shown on a smartphone',
    labelTop: { icon: '✓', text: 'Easy booking' },
    labelBottom: { icon: '⌁', text: 'Live tracking' }
  },
  {
    variant: 'driver',
    eyebrow: 'Drive with BlinkRide',
    title: (
      <>
        Download the
        <br />
        Driver App
      </>
    ),
    description:
      'Accept ride requests, manage trips, track earnings, and stay connected with passengers through a reliable driver experience.',
    features: [
      'Instant ride request notifications',
      'Simple trip and earnings management',
      'Better control over your workday'
    ],
    image: '/images/driver-app-mobile.webp',
    imageAlt: 'BlinkRide Driver App shown on a smartphone',
    labelTop: { icon: '✓', text: 'Trip control' },
    labelBottom: { icon: '$', text: 'Track earnings' }
  }
]

function AppCard({ card }) {
  return (
    <article className={`app-card app-card--${card.variant}`}>
      <div className="app-card__visual">
        <span className="visual-glow visual-glow--one" aria-hidden="true" />
        <span className="visual-glow visual-glow--two" aria-hidden="true" />

        <div className="phone-frame">
          <img src={card.image} alt={card.imageAlt} loading="lazy" />
        </div>

        <div className="floating-label floating-label--top">
          <span className="floating-label__icon" aria-hidden="true">
            {card.labelTop.icon}
          </span>
          {card.labelTop.text}
        </div>

        <div className="floating-label floating-label--bottom">
          <span className="floating-label__icon" aria-hidden="true">
            {card.labelBottom.icon}
          </span>
          {card.labelBottom.text}
        </div>
      </div>

      <div className="app-card__content">
        <div className="app-card__eyebrow">
          <span aria-hidden="true" />
          {card.eyebrow}
        </div>

        <h3>{card.title}</h3>

        <p className="app-card__description">{card.description}</p>

        <ul className="app-card__features">
          {card.features.map((feature) => (
            <li key={feature}>{feature}</li>
          ))}
        </ul>

        <div className="app-card__actions">
          <a
            className="showcase-btn showcase-btn--primary"
            href={getAppLink(card.variant)}
            target="_blank"
            rel="noopener noreferrer"
          >
            Get the App
            <span aria-hidden="true">→</span>
          </a>

          <a className="showcase-btn showcase-btn--text" href="#" onClick={(event) => event.preventDefault()}>
            Learn more
          </a>
        </div>
      </div>
    </article>
  )
}

export default function AppShowcase() {
  return (
    <section className="app-showcase" aria-labelledby="app-showcase-title">
      <div className="app-showcase__container">
        <header className="app-showcase__header">
          <div className="section-badge">
            <span className="section-badge__dot" aria-hidden="true" />
            Get the App
          </div>

          <h2 id="app-showcase-title">Ride or drive with BlinkRide anytime.</h2>

          <p>One smart platform for effortless rides, simple bookings, real-time updates, and better earning opportunities.</p>
        </header>

        {CARDS.map((card) => (
          <AppCard card={card} key={card.variant} />
        ))}
      </div>
    </section>
  )
}
