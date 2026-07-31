import { Link } from 'react-router-dom'
import { siteConfig, getMailtoLink, getTelLink, getMapsLink, getWhatsAppLink } from '../config/site.js'
import './Footer.css'

const OFFERINGS = [{ label: 'One-Way Trips' }, { label: 'Round Trips' }, { label: 'Hourly Trips' }, { label: 'Airport Pickups' }, { label: 'Package Deliveries' }]

const QUICK_LINKS = [
  { label: 'About us', to: '/about-us' },
  { label: 'Services', to: '/services' },
  { label: 'Customers', to: '/customers' },
  { label: 'Drivers', to: '/drivers' },
  { label: 'Affiliates', to: '/affiliates' }
]

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="footer-container">
        <section className="brand-column">
          <Link to="/" className="brand-logo" aria-label={`${siteConfig.brand.name} home`}>
            <img src={siteConfig.brand.logo} alt={siteConfig.brand.logoAlt} />
          </Link>

          <p className="brand-description">
            BlinkRide delivers reliable, safe, and modern ride-hailing solutions customized to your everyday needs.
            From quick trips to seamless transfers, we ensure comfort, convenience, and transparency every step of
            the way.
          </p>

          <Link to="/get-the-app" className="app-button">
            Get the App
          </Link>

          <div className="social-links">
            <a href={siteConfig.social.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <i className="fa-brands fa-facebook-f" />
            </a>
            <a href={siteConfig.social.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <i className="fa-brands fa-instagram" />
            </a>
            <a href={getWhatsAppLink()} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
              <i className="fa-brands fa-whatsapp" />
            </a>
          </div>
        </section>

        <section className="footer-column">
          <h2 className="footer-title">Our Offerings</h2>
          <ul className="footer-list">
            {OFFERINGS.map((item) => (
              <li key={item.label}>
                <Link to="/services">{item.label}</Link>
              </li>
            ))}
          </ul>
        </section>

        <section className="footer-column">
          <h2 className="footer-title">Quick Links</h2>
          <ul className="footer-list">
            {QUICK_LINKS.map((link) => (
              <li key={link.to}>
                <Link to={link.to}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </section>

        <section className="footer-column contact-column">
          <h2 className="footer-title">Contact Us</h2>
          <ul className="contact-list">
            <li>
              <a className="contact-link" href={getMapsLink()} target="_blank" rel="noopener noreferrer">
                <i className="fa-solid fa-location-dot" />
                <span>{siteConfig.contact.address}</span>
              </a>
            </li>
            <li>
              <a className="contact-link" href={getMailtoLink()}>
                <i className="fa-solid fa-envelope" />
                <span>{siteConfig.contact.email}</span>
              </a>
            </li>
            <li>
              <a className="contact-link" href={getTelLink()}>
                <i className="fa-solid fa-square-phone" />
                <span>{siteConfig.contact.phoneDisplay}</span>
              </a>
            </li>
            <li>
              <Link className="contact-link" to="/contact-us">
                <i className="fa-solid fa-clock" />
                <span>{siteConfig.contact.hours}</span>
              </Link>
            </li>
          </ul>
        </section>
      </div>

      <div className="copyright">&copy; {year} All Rights Reserved.</div>
    </footer>
  )
}
