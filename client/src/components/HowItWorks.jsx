import { Link } from 'react-router-dom'
import './HowItWorks.css'

export default function HowItWorks({ eyebrow, title, subtitle, steps, image, imageAlt }) {
  return (
    <section className="how-it-works-section">
      <div className="container">
        {title && (
          <div className="section-heading">
            {eyebrow && <span className="pill-badge">{eyebrow}</span>}
            <h2>{title}</h2>
            {subtitle && <p>{subtitle}</p>}
          </div>
        )}

        <div className="how-it-works">
          <div className="how-it-works__image">
            <img src={image} alt={imageAlt || ''} loading="lazy" />
          </div>

          <div className="how-it-works__content">
            <div className="steps">
              {steps.map((step, index) => (
                <article className="step" key={step.title}>
                  <div className="step__number">{index + 1}</div>
                  <div>
                    <h2 className="step__title">{step.title}</h2>
                    <p className="step__text">{step.description}</p>
                  </div>
                </article>
              ))}
            </div>

            <Link to="/get-the-app" className="get-app-button">
              Get App
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
