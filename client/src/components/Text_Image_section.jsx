import './Text_Image_section.css'

export default function TextImageSection({
  badge = 'Round Trips',
  title = 'Round Trips Made Effortless',
  heading = 'Comfortable Rides with Guaranteed Return',
  paragraph = `Enjoy reliable round-trip transportation designed for convenience, comfort, and flexibility. BlinkRide offers scheduled pickups, dependable return rides, professional drivers, and comfortable vehicles for shopping trips, business meetings, family visits, and special occasions. Our round-trip services ensure smooth travel experiences with secure transportation, transparent pricing, and stress-free journeys from beginning to return.`,
  image = '/images/Round-trip-image.webp',
  imageAlt = 'Round Trips',
  bullets,
  tone = 'light',
  divider = true
}) {
  const paragraphList = Array.isArray(paragraph) ? paragraph : paragraph ? [paragraph] : []

  return (
    <section className={`text-image-section text-image-section--${tone}`}>
      <div className="text-image-container">
        <div className="text-image-header">
          <span className="text-image-badge">{badge}</span>
          <h2 className="text-image-title">{title}</h2>
        </div>

        <div className="text-image-layout">
          <div className="text-image-content">
            <h3>{heading}</h3>

            {paragraphList.map((p) => (
              <p key={p}>{p}</p>
            ))}

            {bullets && bullets.length > 0 && (
              <ul className="dot-list">
                {bullets.map((item, index) => (
                  <li key={index}>
                    <span className="dot" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>

          <div className="text-image-image-card">
            <img src={image} alt={imageAlt} loading="lazy" />
          </div>
        </div>

        {divider && <hr className="text-image-divider" />}
      </div>
    </section>
  )
}
