import './Testimonials.css'

function Stars({ rating = 5 }) {
  return (
    <div className="testimonials__stars" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }, (_, i) => (
        <span key={i} className={i < rating ? 'is-filled' : ''}>
          &#9733;
        </span>
      ))}
    </div>
  )
}

export default function Testimonials({ title, subtitle, items }) {
  return (
    <section className="section testimonials">
      <div className="section-heading">
        <span className="pill-badge">Testimonials</span>
        <h2>{title}</h2>
        {subtitle && <p>{subtitle}</p>}
      </div>
      <div className="container testimonials__grid">
        {items.map((item) => (
          <div className="testimonials__card" key={item.name}>
            <Stars rating={item.rating} />
            <p className="testimonials__quote">&ldquo;{item.quote}&rdquo;</p>
            <strong className="testimonials__author">{item.name}</strong>
          </div>
        ))}
      </div>
    </section>
  )
}
