import './WhyChooseUs.css'

const FEATURES = [
  {
    icon: 'fa-solid fa-user-shield',
    title: 'Verified Drivers',
    text: 'Travel with trained and trusted drivers.'
  },
  {
    icon: 'fa-solid fa-mobile-screen-button',
    title: 'Easy Booking',
    text: 'Book your trip in just a few seconds.'
  },
  {
    icon: 'fa-regular fa-hourglass-half',
    title: 'On-Time Pickup',
    text: 'We arrive on time, every time.'
  },
  {
    icon: 'fa-solid fa-chair',
    title: 'Comfortable Rides',
    text: 'A clean, smooth, and relaxing journey.'
  }
]

export default function WhyChooseUs() {
  return (
    <section className="why-choose-us">
      <div className="why-choose-us__container">
        <h2 className="why-choose-us__title">Why Choose Us?</h2>

        <div className="why-choose-us__grid">
          {FEATURES.map((feature) => (
            <article className="feature-card" key={feature.title}>
              <div className="feature-card__icon">
                <i className={feature.icon} aria-hidden="true" />
              </div>
              <h3 className="feature-card__title">{feature.title}</h3>
              <p className="feature-card__text">{feature.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
