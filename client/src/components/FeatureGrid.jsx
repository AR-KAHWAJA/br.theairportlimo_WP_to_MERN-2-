import './FeatureGrid.css'

export default function FeatureGrid({ eyebrow, title, subtitle, features = [], columns = 4, tone = 'light' }) {
  return (
    <section className={`section feature-grid feature-grid--${tone}`}>
      <div className="container">
        {title && (
          <div className="section-heading">
            {eyebrow && <span className="pill-badge">{eyebrow}</span>}
            <h2>{title}</h2>
            {subtitle && <p>{subtitle}</p>}
          </div>
        )}
        <div className="feature-grid__grid" style={{ '--cols': columns }}>
          {features.map((feature) => (
            <div className="feature-grid__item" key={feature.title}>
              {feature.icon && <span className="feature-grid__icon">{feature.icon}</span>}
              {feature.image && <img src={feature.image} alt={feature.title} loading="lazy" />}
              <h4>{feature.title}</h4>
              {feature.description && <p>{feature.description}</p>}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
