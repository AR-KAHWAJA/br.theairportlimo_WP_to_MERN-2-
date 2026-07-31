import './ServiceCard.css'

export default function ServiceCard({ image, title, description }) {
  return (
    <div className="service-card">
      {image && (
        <div className="service-card__image">
          <img src={image} alt={title} loading="lazy" />
        </div>
      )}
      <div className="service-card__content">
        <h3 className="service-card__title">{title}</h3>
        <p className="service-card__description">{description}</p>
      </div>
    </div>
  )
}
