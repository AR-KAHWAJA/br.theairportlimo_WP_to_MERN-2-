import { Link } from 'react-router-dom'
import './Hero.css'

export default function Hero({ tag, title, highlight, subtitle, image, ctaLabel, ctaTo, children, footer, className }) {
  return (
    <section
      className={`hero ${footer ? 'hero--with-footer' : ''} ${className || ''}`}
      style={{ backgroundImage: `url(${image})` }}
    >
      <div className="hero__overlay" />
      <div className="hero__inner">
        <div className="hero__content">
          {tag && <span className="hero__tag">{tag}</span>}
          <h1>{title}</h1>
          {highlight && <div className="hero__highlight">{highlight}</div>}
          {subtitle && <p className="hero__subtitle">{subtitle}</p>}
          {children}
          {ctaLabel && (
            <Link to={ctaTo || '/get-the-app'} className="btn btn--on-dark hero__cta">
              {ctaLabel}
            </Link>
          )}
        </div>
      </div>
      {footer && <div className="container hero__footer">{footer}</div>}
    </section>
  )
}
