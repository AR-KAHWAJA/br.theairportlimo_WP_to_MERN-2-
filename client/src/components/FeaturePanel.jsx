import './FeaturePanel.css'

export default function FeaturePanel({
  eyebrow,
  panelTitle,
  subheading,
  title,
  paragraph,
  bullets,
  image,
  reverse = false,
  tone = 'light',
  children
}) {
  return (
    <section className={`section feature-panel-section feature-panel-section--${tone}`}>
      <div className="container">
        <div className="section-heading">
          {eyebrow && <span className="pill-badge">{eyebrow}</span>}
          {panelTitle && <h2>{panelTitle}</h2>}
        </div>

        <div className={`feature-panel feature-panel--${tone}`}>
          <div className="feature-panel__image">
            <img src={image} alt={title || panelTitle || ''} loading="lazy" />
          </div>
          <div className={`feature-panel__content ${reverse ? 'feature-panel__content--reverse' : ''}`}>
            {subheading && <span className="intro-section__subheading">{subheading}</span>}
            {title && <h3>{title}</h3>}
            {bullets && bullets.length > 0 && (
              <ul className="dot-list">
                {bullets.map((item) => (
                  <li key={item}>
                    <span className="dot" />
                    {item}
                  </li>
                ))}
              </ul>
            )}
            {paragraph && <p>{paragraph}</p>}
            {children}
          </div>
        </div>
      </div>
    </section>
  )
}
