import { IconMail, IconPhone, IconPin } from './Icons.jsx'
import { siteConfig, getMailtoLink, getTelLink, getMapsLink } from '../config/site.js'
import './ContactDetailsMap.css'

const CONTACT_ITEMS = [
  {
    icon: <IconMail />,
    title: 'Email Us',
    description: "Send us your questions and we'll respond as soon as possible.",
    value: siteConfig.contact.email,
    href: getMailtoLink()
  },
  {
    icon: <IconPhone />,
    title: 'Call Us',
    description: 'Speak directly with our support team during service hours.',
    value: siteConfig.contact.phoneDisplay,
    href: getTelLink()
  },
  {
    icon: <IconPin />,
    title: 'Our Office',
    description: siteConfig.contact.address,
    value: 'Get directions',
    href: getMapsLink(),
    external: true
  }
]

export default function ContactDetailsMap() {
  return (
    <section className="cus-section contact-details">
      <div className="cus-heading">
        <span className="cus-label">Contact Us</span>
        <h2>Here When You Need Us</h2>
        <p>Reach our team by email or phone, or use the map to find our office.</p>
      </div>

      <div className="cus-container info-map-card">
        <div className="contact-details-info">
          {CONTACT_ITEMS.map((item) => (
            <a
              className="info-item"
              href={item.href}
              key={item.title}
              {...(item.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
            >
              <span className="info-icon">{item.icon}</span>
              <div className="info-copy">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                {item.value && <span className="info-link">{item.value}</span>}
              </div>
            </a>
          ))}
        </div>

        <div className="map-wrap">
          <iframe
            src={`https://www.google.com/maps?q=${encodeURIComponent(siteConfig.contact.address)}&output=embed`}
            title="BlinkRide office location"
            loading="lazy"
            allowFullScreen
          />
        </div>
      </div>
    </section>
  )
}
