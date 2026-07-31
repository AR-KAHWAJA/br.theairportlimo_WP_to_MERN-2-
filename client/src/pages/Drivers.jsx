import { Link } from 'react-router-dom'
import Hero from '../components/Hero.jsx'
import PageIntro from '../components/PageIntro.jsx'
import ImageTextSection from '../components/Image_Text_section.jsx'
import TextImageSection from '../components/Text_Image_section.jsx'
import RidesFoodDeliveries_driver from '../components/RidesFoodDeliveries_driver.jsx'
import BookingSteps from '../components/BookingSteps.jsx'
import Testimonials from '../components/Testimonials.jsx'
import './Drivers.css'

const TESTIMONIALS = [
  { name: 'Alex J., Driver', quote: "I've had the best experiences driving with this platform. It feels great to be part of a team that prioritizes safety and support.", rating: 5 },
  { name: 'Maria K., Driver', quote: 'Being a part of this service has changed my outlook on ride-sharing. I can always count on support and respect on the job.', rating: 4 },
  { name: 'James R., Driver', quote: 'I love driving for this company! The flexibility and support I receive have made driving a truly enjoyable job.', rating: 5 },
  { name: 'Linda T., Driver', quote: 'This platform truly values its drivers. I feel safe and appreciated, which keeps me motivated every day.', rating: 5 }
]

const BENEFITS = [
  {
    icon: (
      <svg viewBox="0 0 64 64">
        <path d="M32 12C17 12 6 24 3 31c-1 2-1 4 0 6 3 7 14 19 29 19s26-12 29-19c1-2 1-4 0-6-3-7-14-19-29-19zm0 38c-12 0-21-9-24-16 3-7 12-16 24-16s21 9 24 16c-3 7-12 16-24 16zm0-26a10 10 0 1 0 0 20 10 10 0 0 0 0-20z" />
      </svg>
    ),
    title: 'Transparent Pricing',
    description: 'Know exactly what you earn with no hidden fees. Our clear pricing model puts you in control of your income.'
  },
  {
    icon: (
      <svg viewBox="0 0 64 64">
        <path d="M25 8a10 10 0 1 0 0 20 10 10 0 0 0 0-20zm0 25C13 33 5 39 5 48v5h25a17 17 0 0 1-1-5c0-5 2-10 6-13-3-1-6-2-10-2zm22 0a14 14 0 1 0 0 28 14 14 0 0 0 0-28zm1 8v7l5 3-2 3-7-4v-9h4z" />
      </svg>
    ),
    title: 'Flexible Hours',
    description: 'Work on your schedule. Whether part-time or full-time, you decide when to drive and earn.'
  },
  {
    icon: (
      <svg viewBox="0 0 640 512">
        <path d="M96 224c35.3 0 64-28.7 64-64s-28.7-64-64-64-64 28.7-64 64 28.7 64 64 64zm448 0c35.3 0 64-28.7 64-64s-28.7-64-64-64-64 28.7-64 64 28.7 64 64 64zm32 32h-64c-17.6 0-33.5 7.1-45.1 18.6 40.3 22.1 68.9 62 75.1 109.4h66c17.7 0 32-14.3 32-32v-32c0-35.3-28.7-64-64-64zm-256 0c61.9 0 112-50.1 112-112S381.9 32 320 32 208 82.1 208 144s50.1 112 112 112zm76.8 32h-8.3c-20.8 10-43.9 16-68.5 16s-47.6-6-68.5-16h-8.3C179.6 288 128 339.6 128 403.2V432c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48v-28.8c0-63.6-51.6-115.2-115.2-115.2zm-223.7-13.4C161.5 263.1 145.6 256 128 256H64c-35.3 0-64 28.7-64 64v32c0 17.7 14.3 32 32 32h65.9c6.3-47.4 34.9-87.3 75.2-109.4z" />
      </svg>
    ),
    title: 'Supportive Community',
    description: 'Join a network of drivers who support each other. Share experiences and tips to improve your journey.'
  },
  {
    icon: (
      <svg viewBox="0 0 64 64">
        <path d="M8 46h7v10H8V46zm12-10h7v20h-7V36zm12-9h7v29h-7V27zm12-8h7v37h-7V19zm12-9h7v46h-7V10z" />
      </svg>
    ),
    title: 'Empowerment and Growth',
    description: 'Gain skills and experience on the road. Your journey with us offers growth and learning opportunities.'
  }
]

export default function Drivers() {
  return (
    <div>
      <Hero
        className="hero--standard"
        title={
          <>
            Experience
            <br />
            Seamless
          </>
        }
        highlight="Driving with us"
        image="/images/drvier-page-hero-2.webp"
      />

      <PageIntro
        title="Flexible driving,"
        highlight="unlimited earning potential."
        description="Join BlinkRide's driver network and take control of your schedule. Earn through rides, food delivery, parcel services, and airport transfers, all while enjoying transparent pricing and dedicated support."
      />

      <TextImageSection
        tone="dark"
        badge="Driver"
        title="Drive Beyond Limits with BlinkRide"
        heading="Flexible Driving Opportunities with Unlimited Potential"
        paragraph="Join BlinkRide and become part of a professional driver network built for success. Earn through rides, food delivery, parcel services, and airport transfers while enjoying flexible schedules, transparent earnings, reliable support, and advanced technology designed to help drivers grow confidently and maximize daily earning opportunities."
        image="/images/felixible.webp"
        imageAlt="BlinkRide driver in a vehicle"
      />

      <RidesFoodDeliveries_driver/>

      <ImageTextSection
        badge="Round Trips"
        title="Round Trip Opportunities"
        heading="Double the Journey, Double the Earnings"
        paragraph="Profitable round-trip bookings with scheduled pickups, optimized routes, and professional customer management."
        image="/images/driver-page-round-trip.webp"
        imageAlt="Round trip opportunities for BlinkRide drivers"
      />

      <TextImageSection
        badge="Drive on Your Time"
        title="Flexible Hourly Ride Opportunities"
        heading="Your Schedule, Your Bookings"
        paragraph="Multiple-stop bookings with extended reservations, flexible scheduling, and transparent trip management."
        image="/images/drvie-page-flexable-hourly-trip.webp"
        imageAlt="Flexible hourly ride opportunities for BlinkRide drivers"
      />

      <ImageTextSection
        badge="Airport Transfers"
        title="Airport Pickup & Drop Opportunities"
        heading="Professional Airport Rides That Reward Drivers"
        paragraph="Benefit from flight tracking, scheduled bookings, higher-value trips, and reliable income with every airport transfer."
        image="/images/AIRPORT-PIC-UP-AND-DROP-OFF.webp"
        imageAlt="Airport pickup and drop off opportunities for BlinkRide drivers"
      />

      <BookingSteps
        badge="Driver App"
        title="One App, Multiple Services"
        subtitle="Get started driving in three simple steps."
        steps={[
          { title: 'Register', text: 'Complete a simple registration form with your personal details and document uploads.' },
          { title: 'Self Training', text: 'Complete comprehensive training on safety, navigation, and customer service.' },
          { title: 'Drive', text: 'Start accepting rides once your training is complete.' }
        ]}
        image="/images/driver-app-mobile.webp"
        imageAlt="BlinkRide driver app"
      />

      <section className="driver-benefits">
        <div className="driver-benefits__container">
          <div className="driver-benefits__layout">
            <div className="driver-benefits__intro">
              <div className="driver-benefits__visual">
                <img src="/images/Driver-section.webp" alt="Professional BlinkRide driver" />
              </div>
              <h2 className="driver-benefits__heading">Transparent Pricing for Peace of Mind</h2>
            </div>

            <div className="driver-benefits__grid">
              {BENEFITS.map((benefit) => (
                <article className="driver-benefits__card" key={benefit.title}>
                  <div className="driver-benefits__icon" aria-hidden="true">
                    {benefit.icon}
                  </div>
                  <h3>{benefit.title}</h3>
                  <p>{benefit.description}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Testimonials title="Rated by Our Valued Customers" items={TESTIMONIALS} />

      <section className="section section--dark text-center">
        <div className="container">
          <h2>Start Your Driving Journey Today</h2>
          <p>Join for part-time or full-time opportunities with reliable platform support.</p>
          <Link to="/get-the-app" className="btn btn--on-dark">
            Get the App
          </Link>
        </div>
      </section>
    </div>
  )
}
