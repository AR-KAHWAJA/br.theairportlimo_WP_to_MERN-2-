import './ServiceTile.css'

export default function ServiceTile({ image, title, description }) {
  return (
    <article className="service-tile">
      <div className="service-tile__image">
        <img src={image} alt={title} loading="lazy" />
      </div>

      <div className="service-tile__content">
        <h3 className="service-tile__title">{title}</h3>
        <p className="service-tile__text">{description}</p>
      </div>
    </article>
  )
}
