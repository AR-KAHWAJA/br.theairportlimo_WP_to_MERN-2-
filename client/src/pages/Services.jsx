import Hero from '../components/Hero.jsx'
import PageIntro from '../components/PageIntro.jsx'
import ServiceTile from '../components/ServiceTile.jsx'
import HowItWorks from '../components/HowItWorks.jsx'
import WhyChooseUs from '../components/WhyChooseUs.jsx'

const SERVICES = [
  {
    title: 'One-Way Trips',
    image: 'images/One-Way-trip-image.webp',
    description: 'Enjoy a smooth and dependable ride to your destination. Perfect for the airport transfers, business travel, or daily trips. Travel comfortably with professional service from pickup to drop-off.'
  },
  {
    title: 'Round Trips',
    image: 'images/round-trips.webp',
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
    title: 'Package Delivery',
    image: 'images/package-delivery-1.webp',
    description: 'Send your packages safely with dependable and fast delivery service. Every item is handled carefully from collection to final drop-off. Track your delivery and enjoy complete peace of mind.'
  },
  {
    title: 'Food Delivery',
    image: 'images/food-deliver-2.webp',
    description: 'Order the fresh meals from your favorite restaurants with ease. Enjoy the quick, reliable delivery while your food stays secure and fresh. Get your order delivered directly to your doorstep on time.'
  }
]

export default function Services() {
  return (
    <div>
      <Hero className="hero--standard" title="One App," highlight="All travel needs" image="images/SERVICES-HERO-1.webp" />

      <PageIntro
        title="Every journey,"
        highlight="one smart solution."
        description="Whether you need a one-way ride, a round trip, an hourly booking, an airport pickup, package delivery, or food delivery, BlinkRide brings every service together in one simple and reliable app."
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

      

      <HowItWorks
        eyebrow="Get started"
        title="How to get started"
        subtitle="A simple four-step process to get you moving."
        image="images/Customer-Security.webp"
        imageAlt="How to get started with BlinkRide"
        steps={[
          { title: 'Download Our App', description: 'Get the BlinkRide app from the App Store or Google Play.' },
          { title: 'Choose a Service', description: 'Select rides, food delivery, or package delivery.' },
          { title: 'Book Your Ride', description: 'Enter your pickup and drop-off details and confirm instantly.' },
          { title: 'Enjoy Your Trip', description: 'Track your driver in real time and travel with peace of mind.' }
        ]}
      />

      <WhyChooseUs />
    </div>
  )
}
