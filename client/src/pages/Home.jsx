import { Link } from 'react-router-dom'
import HomeHero from '../components/HomeHero.jsx'
import PageIntro from '../components/PageIntro.jsx'
import Opportunities from '../components/Opportunities.jsx'
import ServiceTile from '../components/ServiceTile.jsx'
import FeaturePanel from '../components/FeaturePanel.jsx'
import BookingForm from '../components/BookingForm.jsx'
import StatCounter from '../components/StatCounter.jsx'
import './Home.css'

const SERVICES = [
  {
    title: 'One-Way Trips',
    image: 'images/One-Way-trip-image.webp',
    description: 'Enjoy a smooth and dependable ride to your destination. Perfect for the airport transfers, business travel, or daily trips. Travel comfortably with professional service from pickup to drop-off.'
  },
  {
    title: 'Round Trips',
    image: 'images/Round-trip-image.webp',
    description: 'Book your outgoing and return journey in one simple reservation. Ideal for meetings, events, appointments, and airport travel. Enjoy reliable pickups, flexible scheduling, and a stress-free return.'
  },
  {
    title: 'Hourly Trips',
    image: 'images/hourly-car-image.webp',
    description: 'Keep a premium vehicle and professional driver available by the hour. Perfect for the errands, meetings, shopping, events, or multiple stops. Travel at your own pace with maximum comfort and flexibility.'
  },
  {
    title: 'Airport Pickups',
    image: 'images/airport-transfer-1-1.webp',
    description: 'Choose from economy, premium, or luxury vehicles for your journey. Enjoy timely pickups, professional drivers, and comfortable airport transfers. Travel smoothly from the terminal directly to your destination.'
  },
  {
    title: 'Package',
    image: 'images/Delivery-parcel.webp',
    description: 'Send your packages safely with dependable and fast delivery service. Every item is handled carefully from collection to final drop-off. Track your delivery and enjoy complete peace of mind.'
  },
  {
    title: 'Food',
    image: 'images/food-deliver-2.webp',
    description: 'Order the fresh meals from your favorite restaurants with ease. Enjoy the quick, reliable delivery while your food stays secure and fresh. Get your order delivered directly to your doorstep on time.'
  }
]

export default function Home() {
  return (
    <div>
      <HomeHero />

      <PageIntro
        title="One platform,"
        highlight="endless possibilities."
        description="From everyday rides to food and package deliveries, flexible driving opportunities, and trusted affiliate partnerships, BlinkRide brings every part of modern transportation together in one reliable app."
      />

      <section className="section section--dark">
        <div className="section-heading">
          <span className="pill-badge">Services</span>
          <h2>One app, All your transportation needs</h2>
        </div>
        <div className="container services-tile-grid">
          {SERVICES.map((service) => (
            <ServiceTile key={service.title} {...service} />
          ))}
        </div>
      </section>

      <FeaturePanel
        eyebrow="Customer"
        panelTitle="Where Safety Leads."
        subheading="Experience Unmatched Safety"
        title="Ride with Confidence and Peace of Mind"
        bullets={[
          'Verified drivers with strict background checks.',
          'Real-time trip tracking and live ride monitoring.',
          '24/7 emergency support for your safety at every step.'
        ]}
        paragraph="Safety is non-negotiable. Your safety is our top priority — every ride, every time."
        image="images/Customer-Security.webp"
      >
        <Link to="/get-the-app" className="btn">
          Get the App
        </Link>
      </FeaturePanel>

      <BookingForm />

      <section className="section section--dark stats">
        <div className="section-heading">
          <h2>Complete Transportation Solutions</h2>
          <p>
            We provide reliable rides, multiple vehicle options, excellent customer service, and 24/7 support to
            ensure a smooth, safe, comfortable, and stress-free travel experience for every passenger, anytime and
            anywhere.
          </p>
        </div>
        <div className="container stats__grid">
          <StatCounter to={10000} label="Happy Rides" />
          <StatCounter to={95} suffix="%" label="Customer Satisfaction" />
          <StatCounter to={5000} suffix="+" label="Vehicles Available" />
          <StatCounter to={365} label="24/7 Support Team" />
        </div>
      </section>

      <Opportunities />
    </div>
  )
}
