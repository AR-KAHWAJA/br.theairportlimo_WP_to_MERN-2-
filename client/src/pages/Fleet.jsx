import { Link } from 'react-router-dom'
import FleetHero from '../components/FleetHero.jsx'
import PageIntro from '../components/PageIntro.jsx'
import ImageTextSection from '../components/Image_Text_section.jsx'
import TextImageSection from '../components/Text_Image_section.jsx'
import ServiceCardsGrid from '../components/ServiceCardsGrid.jsx'
import './Fleet.css'

const VEHICLES = [
  {
    title: 'Executive Sedan',
    image: '/images/Executive_Sedan.webp',
    description:
      'Reliable and comfortable transportation designed for everyday travel. Perfect for city rides, business meetings, airport transfers, and professional commuting with a smooth and efficient travel experience.',
    tags: ['Standard', 'Reliable', 'Secure']
  },
  {
    title: 'Luxury Sedan',
    image: '/images/Luxury_Sedan.webp',
    description:
      'Travel in style with our premium luxury sedans, featuring elegant interiors, exceptional comfort, and first-class service. Ideal for executive travel, corporate events, VIP transportation, and special occasions.',
    tags: ['Reliable', 'Luxury', 'Secure']
  },
  {
    title: 'Executive SUV',
    image: '/images/Executive_SUV.webp',
    description:
      'Spacious and sophisticated transportation tailored for corporate groups, airport transfers, families, and business travelers. Enjoy premium comfort, extra luggage capacity, and a smooth ride for every journey.',
    tags: ['Business', 'Transport', 'Convenience']
  },
  {
    title: 'Luxury SUV',
    image: '/images/Luxury_SUV.webp',
    description:
      'Experience premium travel in our luxury SUVs with spacious seating, modern features, and exceptional comfort. Perfect for executive transportation, airport transfers, VIP guests, and family travel.',
    tags: ['Premium', 'VIP', 'Comfort']
  },
  {
    title: 'Corporate Shuttle',
    image: '/images/Corporate_Shuttle.webp',
    description:
      'Reliable transportation designed for businesses and organizations. Our corporate shuttle service provides safe, efficient, and comfortable travel for employees, executives, meetings, and events.',
    tags: ['Business', 'Employee', 'Reliability']
  }
]

export default function Fleet() {
  return (
    <div>
      <FleetHero />

      <PageIntro
        title="Premium vehicles,"
        highlight="exceptional journeys."
        description="Explore BlinkRide's diverse fleet of sedans, SUVs, and corporate shuttles, each maintained to the highest standard to deliver comfort, reliability, and style on every trip."
      />

      <TextImageSection
        tone="dark"
        badge="Our Fleet"
        title="Our Fleet Services"
        heading="Explore Our Fleet Services"
        paragraph="Discover our wide range of fleet services tailored to meet your transportation needs. From personal rides and food delivery to corporate solutions, our vehicles are equipped for every situation. Our team is committed to ensuring a smooth and reliable experience for all users."
        image="/images/SERVICES-MOBILE-HERO-1.webp"
        imageAlt="Our fleet services"
      />

      <ImageTextSection
        tone="accent"
        badge="Our Vehicles"
        title="Explore Our Vehicle Options"
        heading="Vehicle Options"
        paragraph={[
          'Explore our diverse range of vehicles tailored to meet various needs. This section highlights the different types of vehicles available in our fleet, ensuring you find the right fit for your journey.',
          'From compact cars for urban commuting to spacious SUVs for family trips, we provide options that cater to every preference. Our vehicles are well-maintained and equipped to offer a safe and comfortable experience. Trust us to deliver both reliability and convenience tailored to your specific requirements.'
        ]}
        image="/images/image_hero_section.webp"
        imageAlt="Explore our vehicle options"
      />

      <section className="fleet-section">
        <div className="fleet-container">
          <header className="fleet-header">
            <span className="fleet-badge">Our Fleet</span>
            <h2 className="fleet-title">Explore Our Vehicle Collection</h2>
            <p className="fleet-subtitle">Discover our range of vehicles designed for comfort and efficiency.</p>
          </header>

          <div className="fleet-grid">
            {VEHICLES.map((vehicle) => (
              <article className="vehicle-card" key={vehicle.title}>
                <div className="vehicle-image">
                  <img src={vehicle.image} alt={vehicle.title} loading="lazy" />
                </div>

                <div className="vehicle-content">
                  <h3>{vehicle.title}</h3>
                  <p>{vehicle.description}</p>
                  <div className="vehicle-tags">
                    {vehicle.tags.map((tag) => (
                      <span className="vehicle-tag" key={tag}>
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            ))}

            <Link to="/get-the-app" className="fleet-cta get-app-card">
              <span className="get-app-card__content">
                Get the App <span className="arrow">&rarr;</span>
              </span>
            </Link>
          </div>
        </div>
      </section>

      <ServiceCardsGrid />
    </div>
  )
}
