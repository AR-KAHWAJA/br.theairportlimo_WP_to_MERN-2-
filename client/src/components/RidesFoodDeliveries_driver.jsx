import './RidesFoodDeliveries.css'

const CARDS = [
  {
    number: '01',
    image: '/images/Driver_one-way_trip.webp',
    title: 'Customer Ride',
    text: 'Enjoy convenient one-way rides customized for your daily travel needs, with professional drivers, comfortable vehicles, and dependable service.'
  },
  {
    number: '02',
    image: '/images/food_deliveries.webp',
    title: 'Food Delivery',
    text: 'Get your favorite meals delivered quickly and safely with fresh handling, live tracking, and reliable service from one simple app.'
  },
  {
    number: '03',
    image: '/images/box_deliveries.webp',
    title: 'Parcel Delivery',
    text: 'Send and receive parcels confidently with secure handling, dependable delivery times, and real-time tracking throughout the journey.'
  }
]

export default function RidesFoodDeliveries() {
  return (
    <section className="oneway-section">
      <div className="oneway-container">
        <header className="section-header">
          <div className="section-badge">One Way Trips for</div>

          <h2 className="section-title">
            Rides, Food &amp; <span>Deliveries</span>
          </h2>

          <p className="section-subtitle">
            One trusted platform for comfortable rides, quick food delivery, and secure parcel transportation.
          </p>
        </header>

        <div className="services-grid">
          {CARDS.map((card) => (
            <article className="oneway-card" key={card.title}>
              <div className="oneway-card__image-wrap">
                <img src={card.image} alt={card.title} loading="lazy" />
              </div>

              <div className="oneway-card__content">
                <div className="oneway-card__number">{card.number}</div>

                <h3>{card.title}</h3>

                <p>{card.text}</p>

                
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
