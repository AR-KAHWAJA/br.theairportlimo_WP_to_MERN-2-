import { Link } from 'react-router-dom'
import './BookingSteps.css'

const DEFAULT_STEPS = [
  { title: 'Enter your trip', text: 'Add your pickup and drop-off location.' },
  { title: 'Choose a driver', text: 'Select your preferred driver with confidence.' },
  { title: 'Confirm your ride', text: 'Book instantly and enjoy a smooth premium journey.' },
  { title: 'Enjoy Your Trip', text: 'Travel safely and comfortably with our trusted drivers.' }
]

export default function BookingSteps({
  badge = 'Book a Ride',
  title = 'How to Book a Ride',
  subtitle = 'Book your ride in four simple steps.',
  steps = DEFAULT_STEPS,
  image = 'images/iamge-customer-app-mobile-screen.webp',
  imageAlt = 'Book a Ride',
  ctaLabel = 'Get App',
  ctaTo = '/get-the-app'
}) {
  return (
    <section className="book-ride-section">
      <div className="book-ride-container">
        <div className="book-ride-header">
          <span className="book-ride-badge">{badge}</span>
          <h2>{title}</h2>
          <p>{subtitle}</p>
        </div>

        <div className="book-ride-card">
          <div className="book-ride-left">
            <div className="book-ride-steps">
              {steps.map((step, index) => (
                <div className="book-ride-step" key={step.title}>
                  <div className="book-ride-step__number">{index + 1}</div>
                  <div>
                    <h3 className="book-ride-step__title">{step.title}</h3>
                    <p className="book-ride-step__text">{step.text}</p>
                  </div>
                </div>
              ))}
            </div>

            <Link to={ctaTo} className="book-ride-cta">
              {ctaLabel}
            </Link>
          </div>

          <div className="book-ride-right">
            <img src={image} alt={imageAlt} />
          </div>
        </div>
      </div>
    </section>
  )
}
