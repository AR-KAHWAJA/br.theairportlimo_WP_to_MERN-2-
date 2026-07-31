import './ServiceCardsGrid.css'

const CARDS = [
  {
    number: '01',
    title: 'Compact Car Rentals',
    description:
      'Ideal for everyday travel, our compact vehicles deliver excellent fuel efficiency, smooth handling, and dependable comfort.',
    icon: (
      <svg viewBox="0 0 24 24">
        <circle cx="8" cy="15" r="4.5" />
        <path d="M11.2 11.8 20 3" />
        <path d="m16.2 6.8 2.8 2.8" />
        <path d="m18.5 4.5 2.5 2.5" />
      </svg>
    )
  },
  {
    number: '02',
    title: 'Luxury Executive Cars',
    description:
      'Premium vehicles for business professionals who value refined comfort, polished style, and dependable service.',
    icon: (
      <svg viewBox="0 0 24 24">
        <path d="M3 8 6.5 3h11L21 8l-9 13L3 8Z" />
        <path d="m6.5 3 2.7 5L12 3l2.8 5 2.7-5" />
        <path d="M3 8h18" />
      </svg>
    )
  },
  {
    number: '03',
    title: 'Flexible Delivery Options',
    description:
      'From packages to food, our delivery services are prompt, secure, and carefully coordinated from pickup to destination.',
    icon: (
      <svg viewBox="0 0 24 24">
        <path d="M4 7h16" />
        <path d="M6 4v6" />
        <path d="M18 4v6" />
        <rect x="3" y="5" width="18" height="16" rx="2" />
        <path d="M7 14h3" />
        <path d="M14 14h3" />
      </svg>
    )
  },
  {
    number: '04',
    title: 'Family Van Services',
    description:
      'Spacious vehicles, thoughtful safety features, and comfortable seating for relaxed family travel on every journey.',
    icon: (
      <svg viewBox="0 0 24 24">
        <path d="M3 7h11v9H3z" />
        <path d="M14 10h3.8l3.2 3v3h-7" />
        <circle cx="7" cy="18" r="2" />
        <circle cx="18" cy="18" r="2" />
        <path d="M5 10h5" />
      </svg>
    )
  }
]

export default function ServiceCardsGrid() {
  return (
    <section className="premium-services-showcase" aria-labelledby="premium-services-title">
      <div className="premium-services-showcase__container">
        <div className="premium-services-grid">
          {CARDS.map((card) => (
            <article className="premium-service-card" key={card.title}>
              <div className="premium-service-card__top">
                <div className="premium-service-card__icon" aria-hidden="true">
                  {card.icon}
                </div>

                <span className="premium-service-card__number">{card.number}</span>
              </div>

              <h3>{card.title}</h3>

              <p>{card.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
