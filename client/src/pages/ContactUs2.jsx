import { Link } from 'react-router-dom'
import Hero from '../components/Hero.jsx'
import ServiceCard from '../components/ServiceCard.jsx'
import FeatureGrid from '../components/FeatureGrid.jsx'
import { siteConfig } from '../config/site.js'

export default function ContactUs2() {
  return (
    <div>
      <Hero
        title="Discover Seamless Transportation Solutions for Everyone"
        subtitle="Streamlined solutions for every journey you take — your journey starts with reliable transportation options."
        image="images/customer-page-hero-section-image.webp"
      />

      <section className="section">
        <div className="container grid grid--3">
          <ServiceCard
            image="images/regular_car_iamge-1-1.webp"
            title="Ride Services"
            description="On-demand and scheduled rides with verified drivers, wherever you need to go."
          />
          <ServiceCard
            image="images/food-delivery-1.webp"
            title="Pizza Delivery"
            description="Fast, reliable food delivery from your favorite local restaurants."
          />
          <ServiceCard
            image="images/corporate-transfer.webp"
            title="Corporate Transport Solutions"
            description="Dependable transportation for teams, clients, and business events."
          />
        </div>
      </section>

      <FeatureGrid
        tone="accent"
        title="Why Choose Us?"
        features={[
          { title: 'Verified Drivers', image: 'images/driver-app.webp' },
          { title: 'Easy Booking', image: 'images/iamge-customer-app-mobile-screen.webp' },
          { title: 'On-Time Pickup', image: 'images/customer-page-hero-section-image.webp' },
          { title: 'Comfortable Rides', image: 'images/regular_car_iamge-1-1.webp' }
        ]}
      />

      <section className="section section--dark text-center">
        <div className="container">
          <h2>Book Your Ride Today</h2>
          <p>
            {siteConfig.contact.address} &middot; {siteConfig.contact.email} &middot; {siteConfig.contact.phoneDisplay} &middot;{' '}
            {siteConfig.contact.hours}
          </p>
          <Link to="/" className="btn btn--on-dark">
            Book Your Ride
          </Link>
        </div>
      </section>
    </div>
  )
}
