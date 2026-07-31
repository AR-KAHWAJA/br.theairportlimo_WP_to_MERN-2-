import './BusinessServices.css'

const CARDS = [
  {
    image: '/images/corporate-transfer.webp',
    title: 'Corporate Transfers',
    text: 'Seamless transportation for employees, ensuring they arrive on time. Our dedicated fleet is customized for corporate needs.'
  },
  {
    image: '/images/Airport-transfer.webp',
    title: 'Airport Services',
    text: 'Reliable airport pickups and drop-offs, ensuring a hassle-free travel experience for your team and clients.'
  },
  {
    image: '/images/special-events.webp',
    title: 'Special Events',
    text: 'Host events with confidence. Our transport solutions cater to conferences, meetings, and corporate gatherings.'
  }
]

export default function BusinessServices() {
  return (
    <section className="business-services">
      <div className="business-services__container">
        <span className="pill-badge">Corporate Ride Solutions</span>
        <h2 className="business-services__title">Efficient and Reliable Transport for Businesses</h2>

        <div className="business-services__grid">
          {CARDS.map((card) => (
            <article className="business-card" key={card.title}>
              <div className="business-card__image">
                <img src={card.image} alt={card.title} loading="lazy" />
              </div>
              <div className="business-card__content">
                <h3 className="business-card__title">{card.title}</h3>
                <p className="business-card__text">{card.text}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
