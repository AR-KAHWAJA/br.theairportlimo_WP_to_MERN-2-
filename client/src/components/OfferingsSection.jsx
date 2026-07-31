import './OfferingsSection.css'

const CARDS = [
  {
    image: '/images/Family_Trips_HAPPY.webp',
    title: 'Family Rides',
    text: 'Enjoy a comfortable and spacious ride designed for families, creating a pleasant journey for passengers of every age.'
  },
  {
    image: '/images/GROUP_TRAVEL.webp',
    title: 'Group Outings',
    text: 'Make every group outing memorable with spacious and dependable transport for friends, families, and larger gatherings.'
  },
  {
    image: '/images/Bussiness-Class-Ride.webp',
    title: 'Corporate Transport',
    text: 'Ensure timely arrivals with professional transport solutions designed for meetings, events, and corporate travel.'
  }
]

export default function OfferingsSection() {
  return (
    <section className="offerings-section">
      <div className="offerings-container">
        <div className="offerings-header">
          <span className="offerings-badge">Our Offers</span>

          <h2 className="offerings-title">
            Discover Our <span>Offerings</span>
          </h2>

          <p className="offerings-subtitle">
            Explore reliable and comfortable services designed for families, groups, and professional travel.
          </p>
        </div>

        <div className="offerings-grid">
          {CARDS.map((card) => (
            <article className="offering-card" key={card.title}>
              <div className="offering-card__image">
                <img src={card.image} alt={card.title} loading="lazy" />
              </div>

              <div className="offering-card__content">
                <h3 className="offering-card__title">{card.title}</h3>
                <p className="offering-card__text">{card.text}</p>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  )
}
