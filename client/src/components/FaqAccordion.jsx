import { useState } from 'react'
import './FaqAccordion.css'

export default function FaqAccordion({ eyebrow, title, subtitle, items }) {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <section className="faq-section">
      <div className="faq-container">
        <header className="faq-header">
          <span className="faq-badge">{eyebrow || 'FAQs'}</span>
          <h2 className="faq-title">{title}</h2>
          {subtitle && <p className="faq-subtitle">{subtitle}</p>}
        </header>

        <div className="faq-list">
          {items.map((item, index) => {
            const isOpen = openIndex === index
            return (
              <article className={`faq-item ${isOpen ? 'active' : ''}`} key={item.question}>
                <button
                  className="faq-question"
                  type="button"
                  aria-expanded={isOpen}
                  onClick={() => setOpenIndex(isOpen ? -1 : index)}
                >
                  <span className="faq-icon" aria-hidden="true" />
                  <span className="faq-question-text">{item.question}</span>
                </button>

                <div className="faq-answer">
                  <div className="faq-answer-inner">
                    <p>{item.answer}</p>
                  </div>
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
