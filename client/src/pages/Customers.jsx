import Hero from '../components/Hero.jsx'
import PageIntro from '../components/PageIntro.jsx'
import RidesFoodDeliveries from '../components/RidesFoodDeliveries.jsx'
import BookingSteps from '../components/BookingSteps.jsx'
import ImageTextSection from '../components/Image_Text_section.jsx'
import TextImageSection from '../components/Text_Image_section.jsx'
import OfferingsSection from '../components/OfferingsSection.jsx'
import BusinessServices from '../components/BusinessServices.jsx'
import TrackingSection from '../components/TrackingSection.jsx'

export default function Customers() {
  return (
    <div>
      <Hero
        className="hero--standard"
        title= {
          <>
          Exceptional 
          <br/>
          Services
          </>
          } 
        highlight="Every Customer, Every Ride"
        image="/images/customer-page-hero-section-1-1.webp"
      />

      <PageIntro
        title="Every ride,"
        highlight="an exceptional experience."
        description="From verified drivers to real-time tracking and round-the-clock support, BlinkRide is built to make every trip safe, comfortable, and reliable, wherever you're headed."
      />

      <TextImageSection
        tone="dark"
        badge="Trust & Safety"
        title="Safe Journeys Start Here"
        heading="Built on Safety, Transparency & Reliability"
        paragraph="Customer trust is at the center of everything we do. Driver verification, transparent pricing, real-time tracking, and secure communication ensure safe, dependable service on every trip."
        image="/images/Customer-Security.webp"
        imageAlt="Safe journeys start here"
      />

      

      <RidesFoodDeliveries />

      <TextImageSection />

      <ImageTextSection />

      <TextImageSection
        badge="Airport Pickup"
        title="Airport Travel Perfected"
        heading="Professional Airport Pickup & Drop Services"
        paragraph="Travel stress-free with BlinkRide's reliable airport pickup and drop-off services. Our professional drivers, premium vehicles, flight tracking, and punctual service ensure every airport journey is smooth, comfortable, and on time."
        image="/images/Airport-transfer.webp"
        imageAlt="Airport Pickup"
      />

      <BookingSteps />

      <OfferingsSection />

      <BusinessServices />

      <TrackingSection />
    </div>
  )
}
