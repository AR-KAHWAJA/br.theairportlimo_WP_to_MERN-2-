import { NavLink } from 'react-router-dom'
import './MobileNav.css'

const NAV_LINKS = [
  { label: 'Home', to: '/' },
  { label: 'Services', to: '/services' },
  { label: 'Customers', to: '/customers' },
  { label: 'Drivers', to: '/drivers' },
  { label: 'Affiliates', to: '/affiliates' },
  { label: 'About Us', to: '/about-us' },
  { label: 'Fleet', to: '/fleet' },
  { label: 'Contact Us', to: '/contact-us' }
]

export default function MobileNav({ open, onClose }) {
  return (
    <div className={`mobile-nav ${open ? 'is-open' : ''}`}>
      <button className="mobile-nav__backdrop" aria-label="Close menu" onClick={onClose} />
      <div className="mobile-nav__panel">
        <button className="mobile-nav__close" aria-label="Close menu" onClick={onClose}>
          &#10005;
        </button>
        <nav className="mobile-nav__list">
          {NAV_LINKS.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) => (isActive ? 'is-active' : '')}
              onClick={onClose}
            >
              {link.label}
            </NavLink>
          ))}

          <NavLink to="/get-the-app" className="mobile-nav__app-link" onClick={onClose}>
            Get the App
          </NavLink>
        </nav>
      </div>
    </div>
  )
}
