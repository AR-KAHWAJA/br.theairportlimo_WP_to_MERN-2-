import Hero from '../components/Hero.jsx'
import ContactForm from '../components/ContactForm.jsx'
import ContactFaqSection from '../components/ContactFaqSection.jsx'
import ContactDetailsMap from '../components/ContactDetailsMap.jsx'
import './ContactUs.css'

export default function ContactUs() {
  return (
    <div>
      <Hero
        className="hero--standard"
        title={
          <>
            Get in
            <br />
            Touch
          </>
        }
        highlight="We're Here to Help"
        image="/images/contact-us-page-hero-section-1.webp"
      />

      <ContactDetailsMap />

      <section className="cus-section cus-section--alt contact-reach-out" id="contact">
        <div className="cus-heading">
          <span className="cus-label">Reach Out</span>
          <h2>Let&rsquo;s Start the Conversation</h2>
          <p>Have a question, partnership request, or support concern? Send us a message and our team will be ready to help.</p>
        </div>

        <div className="cus-container contact-card">
          <div className="contact-form-side">
            <h3>Get in Touch</h3>
            <p>Complete the form below and share how we can assist you.</p>
            <ContactForm />
          </div>
          <div className="contact-image">
            <img src="/images/Contact-Us-page-1.webp" alt="BlinkRide support" />
          </div>
        </div>
      </section>

      <ContactFaqSection id="faq" />
    </div>
  )
}
