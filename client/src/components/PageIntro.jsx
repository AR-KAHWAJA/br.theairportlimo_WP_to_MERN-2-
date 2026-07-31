import './PageIntro.css'

export default function PageIntro({ title, highlight, description }) {
  return (
    <section className="page-intro-section">
      <div className="page-intro-content">
        <h2>
          {title} <span>{highlight}</span>
        </h2>

        <p>{description}</p>
      </div>
    </section>
  )
}
