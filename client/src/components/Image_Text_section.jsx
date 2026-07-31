import './Image_Text_section.css'

export default function ImageTextSection({
  badge = 'Hourly Trips',
  title = 'Your Time. Your Ride. Your Schedule.',
  heading = 'Flexible Hourly Transportation Services',
  paragraph = `BlinkRide's hourly ride services provide complete travel flexibility for meetings, errands, shopping, events, and multiple destinations throughout the day. Customers enjoy professional drivers, comfortable vehicles, and personalized transportation experiences without repeatedly booking separate rides. Our flexible hourly services are designed to save time while delivering reliable, secure, smooth, and convenient travel experiences every hour.`,
  image = 'images/hourly-car-image.webp',
  imageAlt = 'Hourly ride transportation service',
  bullets,
  tone = 'light',
  divider = true
}) {
  const paragraphList = Array.isArray(paragraph) ? paragraph : paragraph ? [paragraph] : []

  return (
    <section className={`image-text-section image-text-section--${tone}`}>
      <div className="image-text-container">
        <div className="image-text-header">
          <span className="image-text-badge">{badge}</span>
          <h2 className="image-text-title">{title}</h2>
        </div>

        <div className="image-text-layout">
          <div className="image-text-image-card">
            <img src={image} alt={imageAlt} loading="lazy" />
          </div>

          <div className="image-text-content">
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
        </div>

        {divider && <hr className="image-text-divider" />}
      </div>
    </section>
  )
}
