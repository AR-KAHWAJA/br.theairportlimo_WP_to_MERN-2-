import { Link } from 'react-router-dom'
import Hero from '../components/Hero.jsx'
import IntroAboutUsPage from '../components/Intro_About_Us_Page.jsx'
import ImageTextSection from '../components/Image_Text_section.jsx'
import TextImageSection from '../components/Text_Image_section.jsx'
import './AboutUs.css'

export default function AboutUs() {
  return (
    <div>
      <Hero
        className="hero--standard"
        title="Smart Travel Companion at"
        highlight="Your Fingertips"
        image="/images/about-hero-section-image.webp"
      />

      <IntroAboutUsPage />

      <TextImageSection 
        badge="Mission"
        title="Our Mission"
        heading="Mission That Moves Us"
        paragraph="At BlinkRide, our mission is to transform everyday transportation into a fast, reliable, and seamless experience. We aim to make mobility simple, safe, and accessible for everyone through smart technology and dependable service."
        bullets={[
          'Deliver fast and reliable transportation solutions',
          'Ensure safety and security in every ride',
          'Maintain transparent and fair pricing',
          'Provide consistent, high-quality customer experience',
          'Continuously innovate to improve convenience and efficiency'
        ]}
        image="/images/our-mission.webp"
        imageAlt="Our mission"
      />

      <ImageTextSection
        badge="Vision"
        title="Our Vision"
        heading="Our Vision for the Future"
        paragraph="Our vision is to become a leading name in smart mobility by setting new standards in convenience, reliability, and innovation. We aim to build a future where transportation is effortless, connected, and accessible to everyone."
        bullets={[
          'Become a trusted leader in modern transportation solutions',
          'Expand services to meet evolving customer needs',
          'Leverage technology to create smarter mobility experiences',
          'Maintain excellence in service quality and reliability',
          'Build long-term value for customers, partners, and communities'
        ]}
        image="/images/Globel_3.webp"
        imageAlt="Our vision for the future"
      />

      <TextImageSection
        tone="accent"
        badge="Why us?"
        title="Why BlinkRide?"
        heading="Why choose BlinkRide?"
        paragraph="BlinkRide stands out with its reliable and innovative services that cater to your every transportation need. Here's what makes us the best choice:"
        bullets={[
          'Convenient app-based platform for easy bookings.',
          'Real-time tracking ensures your ride is just a tap away.',
          'Safety measures that prioritize your well-being.',
          'Transparent pricing with no hidden fees.',
          'Reliable service that you can count on, day or night.',
          'Options for every need: rides, food delivery, and more.'
        ]}
        image="/images/About-us-3.webp"
        imageAlt="Why choose BlinkRide"
      />

      <section className="cta-section">
        <div className="container">
          <div className="cta-card">
            <h2>Join BlinkRide for Comfortable Journeys</h2>
            <p>
              Experience seamless travel with BlinkRide. Our services offer reliability and safety at your
              fingertips, whether you need a ride, food delivery, or package transport. Join our community and
              discover the convenience today.
            </p>
            <Link to="/get-the-app" className="cta-btn">
              Get the App
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
