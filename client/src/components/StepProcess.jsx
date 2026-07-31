import './StepProcess.css'

export default function StepProcess({ eyebrow, title, subtitle, steps, image }) {
  return (
    <section className="section step-process">
      <div className="container">
        <div className="section-heading">
          {eyebrow && <span className="pill-badge">{eyebrow}</span>}
          <h2>{title}</h2>
          {subtitle && <p className="step-process__subtitle">{subtitle}</p>}
        </div>

        <div className="step-process__body">
          <div className="step-process__steps">
            {steps.map((step, index) => (
              <div className="step-process__step" key={step.title}>
                <div className="step-process__number">{String(index + 1).padStart(2, '0')}</div>
                <div>
                  <h4>{step.title}</h4>
                  <p>{step.description}</p>
                </div>
              </div>
            ))}
          </div>
          {image && (
            <div className="step-process__image">
              <img src={image} alt={title} loading="lazy" />
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
