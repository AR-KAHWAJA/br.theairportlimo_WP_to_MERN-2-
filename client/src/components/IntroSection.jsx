import './IntroSection.css'

export default function IntroSection({
  eyebrow,
  sectionTitle,
  sectionSubtitle,
  subheading,
  title,
  paragraphs,
  bullets,
  image,
  reverse = false,
  tone = 'light',
  children
}) {
  const paragraphList = Array.isArray(paragraphs) ? paragraphs : paragraphs ? [paragraphs] : []

  return (
    <section className={`section intro-section intro-section--${tone}`}>
      {(eyebrow || sectionTitle) && (
        <div className="section-heading">
          {eyebrow && <span className="pill-badge">{eyebrow}</span>}
          {sectionTitle && <h2>{sectionTitle}</h2>}
          {sectionSubtitle && <p>{sectionSubtitle}</p>}
        </div>
      )}
      <div className={`container two-col ${reverse ? 'two-col--reverse' : ''}`}>
        <div>
          {subheading && <span className="intro-section__subheading">{subheading}</span>}
          {title && <h2>{title}</h2>}
          {paragraphList.map((p) => (
            <p className="intro-section__paragraph" key={p}>
              {p}
            </p>
          ))}
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
          {children}
        </div>
        {image && (
          <div className="intro-section__image">
            <img src={image} alt={title || subheading || ''} loading="lazy" />
          </div>
        )}
      </div>
    </section>
  )
}
