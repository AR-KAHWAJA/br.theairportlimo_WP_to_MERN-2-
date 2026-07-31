import { useState } from 'react'
import './ContactFaqSection.css'

const FAQS = [
  {
    question: 'How do I book a ride?',
    answer:
      'Open the BlinkRide app, enter your pickup and destination, choose the ride that suits you, and confirm your booking.'
  },
  {
    question: 'What payment methods do you accept?',
    answer: 'Available payment options are shown inside the app before confirmation so you can choose the method that works best.'
  },
  {
    question: 'Is your service available in my area?',
    answer: 'Enter your pickup address in the app to instantly see which BlinkRide services are available near you.'
  },
  {
    question: 'What if I need to cancel my ride?',
    answer: 'Open your active booking and select cancel. Any applicable cancellation details will be shown before you confirm.'
  },
  {
    question: 'How do you support rider safety?',
    answer: 'BlinkRide uses driver verification, ride tracking, secure communication, and support tools to help create safer trips.'
  }
]

export default function ContactFaqSection({ id }) {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <section className="cus-section contact-faq" id={id}>
      <div className="cus-heading">
        <span className="cus-label">FAQs</span>
        <h2>Answers That Keep You Moving</h2>
        <p>Find quick answers about booking, payments, availability, cancellations, and safety before your next BlinkRide journey.</p>
      </div>

      <div className="cus-container cfaq-shell">
        <div className="cfaq-visual">
          <img src="/images/get_app_mobile_screen_1.webp" alt="Customer using the BlinkRide app" />
          <div className="cfaq-visual-note">
            <strong>Everything you need, in one app.</strong>
            <span>Book rides, manage trips, and access support with ease.</span>
          </div>
        </div>

        <div className="cfaq-panel">
          {FAQS.map((item, index) => {
            const isOpen = openIndex === index
            return (
              <div className={`cfaq-item ${isOpen ? 'active' : ''}`} key={item.question}>
                <button
                  className="cfaq-question"
                  type="button"
                  aria-expanded={isOpen}
                  onClick={() => setOpenIndex(isOpen ? -1 : index)}
                >
                  <span className="cfaq-question-text">
                    <span className="cfaq-number">{String(index + 1).padStart(2, '0')}</span>
                    <span>{item.question}</span>
                  </span>
                  <span className="cfaq-toggle" />
                </button>

                <div className="cfaq-answer" style={{ maxHeight: isOpen ? '200px' : '0px' }}>
                  <p>{item.answer}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
