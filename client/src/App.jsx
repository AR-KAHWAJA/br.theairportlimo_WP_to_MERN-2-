import { Routes, Route } from 'react-router-dom'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import ScrollToTop from './components/ScrollToTop.jsx'
import Home from './pages/Home.jsx'
import Services from './pages/Services.jsx'
import Customers from './pages/Customers.jsx'
import Drivers from './pages/Drivers.jsx'
import Affiliates from './pages/Affiliates.jsx'
import AboutUs from './pages/AboutUs.jsx'
import Fleet from './pages/Fleet.jsx'
import ContactUs from './pages/ContactUs.jsx'
import ContactUs2 from './pages/ContactUs2.jsx'
import GetTheApp from './pages/GetTheApp.jsx'
import NotFound from './pages/NotFound.jsx'

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/customers" element={<Customers />} />
          <Route path="/drivers" element={<Drivers />} />
          <Route path="/affiliates" element={<Affiliates />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/fleet" element={<Fleet />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/contact-us-2" element={<ContactUs2 />} />
          <Route path="/get-the-app" element={<GetTheApp />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}
