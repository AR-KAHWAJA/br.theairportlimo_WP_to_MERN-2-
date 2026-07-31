import { Link } from 'react-router-dom'
import Hero from '../components/Hero.jsx'
import PageIntro from '../components/PageIntro.jsx'
import ImageTextSection from '../components/Image_Text_section.jsx'
import TextImageSection from '../components/Text_Image_section.jsx'
import FaqAccordion from '../components/FaqAccordion.jsx'
import './Affiliates.css'

const GLOBAL_BLOCKS = [
  'images/Globel_2.webp',
  'images/Globel_3.webp',
  'images/Globel_4.webp',
  'images/iamge_affilate_3.webp'
]

const FAQS = [
  {
    question: 'What is the BlinkRide Affiliate Program?',
    answer:
      'The BlinkRide Affiliate Program allows transportation companies and fleet owners to partner with BlinkRide and receive ride and delivery requests through our platform.'
  },
  {
    question: 'Who can join the affiliate program?',
    answer:
      'Licensed fleet operators and transportation companies with roadworthy vehicles, valid permits, and drivers who meet BlinkRide\'s safety and background-check standards are eligible to apply.'
  },
  {
    question: 'What are the benefits of becoming an affiliate?',
    answer:
      'Affiliates gain access to a steady stream of ride and delivery requests, transparent revenue sharing, dedicated support, and tools for fleet tracking and performance reporting.'
  },
  {
    question: 'Does BlinkRide provide ride requests to affiliates?',
    answer:
      'Yes. Ride and delivery requests are routed to affiliates in real time through the BlinkRide platform based on location, vehicle availability, and service type.'
  },
  {
    question: 'Are there any hidden fees?',
    answer:
      'No. BlinkRide operates on an upfront, transparent commission structure with detailed trip and payment summaries so affiliates always know exactly what they earn.'
  },
  {
    question: 'Disclaimer',
    answer:
      'Program terms, coverage areas, and eligibility requirements may vary by region and are subject to change as the BlinkRide affiliate network grows.'
  }
]

export default function Affiliates() {
  return (
    <div>
      <Hero
              className="hero--standard"
              title={
                <>
                  Join Our                  
                </>
              }
              highlight="Affiliate Program"
              image="images/affilate-page-hero-section.webp"
            />

      <PageIntro
        title="Stronger partnerships,"
        highlight="greater opportunities."
        description="Join BlinkRide's trusted affiliate network and connect your transportation business with more customers, reliable ride opportunities, and a platform built for long-term growth."
      />

      <TextImageSection
        tone="dark"
        badge="Global Expansion"
        title="Global Coverage"
        heading="Expanding Global Mobility & Delivery"
        paragraph="BlinkRide is expanding its worldwide service footprint through a trusted network of affiliate partners, bringing reliable rides and deliveries to more cities every year."
        bullets={[
                  <>
                    <strong>Affiliate Partnerships:</strong>{' '}
                    We collaborate with trusted affiliates across the globe to extend our
                    services to regions where BlinkRide does not have direct drivers.
                  </>,
                  <>
                    <strong>Seamless Rides Everywhere:</strong>{' '}
                    Through our affiliate network, customers enjoy uninterrupted rides and
                    deliveries, even in areas without direct BlinkRide operations.
                  </>
                ]}
        image="images/image_affialte s1.webp"
        imageAlt="Global coverage"
      />

      <ImageTextSection
        tone="accent"
        badge="Service Excellence"
        title="Deliver Exceptional Service"
        heading="Set New Standards for Excellence"
        paragraph="Every affiliate partner aligns with BlinkRide's commitment to quality, ensuring passengers and customers receive the same trusted experience everywhere."
        bullets={[
          'Strict compliance with BlinkRide quality standards',
          'Enhanced customer satisfaction through seamless operations',
          'Dedicated support for affiliates to achieve shared success'
        ]}
        image="images/iamge_21-1.webp"
        imageAlt="Deliver exceptional service"
      />

      <TextImageSection
        badge="Trusted Platform"
        title="Trust & Accountability at Every Step"
        heading="Built on Trust"
        paragraph="Our platform is designed for transparency at every touchpoint of the affiliate relationship."
        bullets={[
          'Upfront pricing with no hidden charges',
          'Real-time ride and delivery tracking',
          'Detailed trip and payment summaries'
        ]}
        image="images/iamge_affilate_3.webp"
        imageAlt="Trust and accountability at every step"
      />

      <ImageTextSection
        tone="accent"
        badge="Global Network"
        title="Partner with BlinkRide"
        heading="Expand Your Business with BlinkRide's Global Network"
        paragraph="Connect your fleet to a platform built for growth and reach new customers across every region BlinkRide operates in."
        bullets={[
                  <>
                    <strong>Global Reach:</strong>{' '}
                    Access customers across regions where BlinkRide operates
                  </>,
                  <>
                    <strong>Seamless Integration:</strong>{' '}
                    Easily connect your fleet to BlinkRide's platform
                  </>,
                  <>
                    <strong>Increased Demand:</strong>{' '}
                    Tap into a steady stream of ride and delivery requests
                  </>
                ]}
         
        image="images/iamge_affilate_4.webp"
        imageAlt="Expand your business with BlinkRide's global network"
      />

      <TextImageSection
        badge="Fleet Management"
        title="Advanced Tools for Fleet Management"
        heading="Streamline Operations with Innovative Solutions"
        paragraph="Manage your entire fleet from one place with tools built for efficiency and transparency."
        bullets={[
          'Real-time driver and fleet tracking',
          'Automated billing and transparent revenue sharing',
          'Comprehensive reporting and performance analytics'
        ]}
        image="images/tools-in-affilates.webp"
        imageAlt="Advanced tools for fleet management"
      />

      <section className="global-section">
        <div className="global-container">
          <header className="global-header">
            <span className="global-badge">Global Opportunities</span>
            <h2 className="global-title">Explore Global Opportunities</h2>
            <p className="global-text">
              Join a dynamic affiliate network that spans across continents. Our platform offers extensive reach and
              countless opportunities for partners looking to grow in the global market. Collaborate with us to
              maximize your potential and tap into new markets effortlessly.
            </p>
          </header>

          <div className="global-gallery">
            {GLOBAL_BLOCKS.map((image) => (
              <article className="gallery-card" key={image}>
                <img src={image} alt="BlinkRide global affiliate network" loading="lazy" />
              </article>
            ))}
          </div>

          <hr className="bottom-divider" />
        </div>
      </section>

      <FaqAccordion eyebrow="FAQs" title="Common Questions" items={FAQS} />

      <section className="section section--dark text-center">
        <div className="container">
          <h2>Partner with Us for a Brighter Future</h2>
          <p>Join a growing network of affiliates helping transform transportation, one ride at a time.</p>
          <Link to="/contact-us" className="btn btn--on-dark">
            Join Us
          </Link>
        </div>
      </section>
    </div>
  )
}
