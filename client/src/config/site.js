// Central site configuration.
// Edit the values below to update contact info, branding, and app links everywhere on the site at once.

export const siteConfig = {
  brand: {
    name: 'BlinkRide',
    // Logo shown in the header and footer.
    logo: 'images/LOGO-BR-WEBSITE-scaled.webp',
    logoAlt: 'BlinkRide',
    // Browser tab icon. Point this at a new file in client/public to change it.
    favicon: 'images/LOGO-BR-WEBSITE-scaled.webp'
  },

  contact: {
    email: 'support@blinkride.com',
    // Extra recipients cc'd on every mailto link, e.g. ['sales@blinkride.com', 'ops@blinkride.com'].
    emailCc: [],
    phoneDisplay: '(987) 654-3210',
    // Used for tel: and WhatsApp links; keep in E.164 format (+countrycode...).
    phoneDial: '+19876543210',
    address: '123 Transport Ave, Citytown, Countryland',
    hours: 'Mon-Fri 9:00AM - 5:00PM'
  },

  social: {
    facebook: 'https://www.facebook.com/',
    instagram: 'https://www.instagram.com/'
  },

  // Store links for each app. getAppLink() below picks the right one based on the visitor's device.
  apps: {
    customer: {
      ios: 'https://apps.apple.com/app/idXXXXXXXXX',
      android: 'https://play.google.com/store/apps/details?id=com.blinkride.customer'
    },
    driver: {
      ios: 'https://apps.apple.com/app/idYYYYYYYYY',
      android: 'https://play.google.com/store/apps/details?id=com.blinkride.driver'
    }
  }
}

// Helpers built from the config above. Components should use these instead of hardcoding links.

export function getMailtoLink({ subject, body } = {}) {
  const params = new URLSearchParams()
  if (siteConfig.contact.emailCc.length > 0) {
    params.set('cc', siteConfig.contact.emailCc.join(','))
  }
  if (subject) params.set('subject', subject)
  if (body) params.set('body', body)
  const query = params.toString()
  return `mailto:${siteConfig.contact.email}${query ? `?${query}` : ''}`
}

export function getTelLink() {
  return `tel:${siteConfig.contact.phoneDial}`
}

export function getWhatsAppLink() {
  return `https://wa.me/${siteConfig.contact.phoneDial.replace(/[^\d]/g, '')}`
}

export function getMapsLink(address = siteConfig.contact.address) {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`
}

// 'ios' | 'android' | 'desktop'
export function detectDevice() {
  if (typeof navigator === 'undefined') return 'desktop'
  const ua = navigator.userAgent || navigator.vendor || ''
  if (/iPad|iPhone|iPod/.test(ua) && !window.MSStream) return 'ios'
  if (/android/i.test(ua)) return 'android'
  return 'desktop'
}

// app: 'customer' | 'driver' - returns the App Store link on iOS, the Play Store link on Android,
// and falls back to the Play Store link on desktop because it is viewable in any browser.
export function getAppLink(app) {
  const links = siteConfig.apps[app]
  const device = detectDevice()
  if (device === 'ios') return links.ios
  return links.android
}

// Applies the configured favicon/title to the document. Call once on app startup.
export function applySiteMeta() {
  if (typeof document === 'undefined') return

  let iconLink = document.querySelector("link[rel='icon']")
  if (!iconLink) {
    iconLink = document.createElement('link')
    iconLink.rel = 'icon'
    document.head.appendChild(iconLink)
  }
  iconLink.href = siteConfig.brand.favicon
}
