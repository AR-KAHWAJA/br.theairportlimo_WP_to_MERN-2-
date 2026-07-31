import { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import MobileNav from './MobileNav.jsx'
import { siteConfig } from '../config/site.js'
import './Header.css'

export default function Header() {
  const [navOpen, setNavOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    function handleScroll() {
      setScrolled(window.scrollY > 80)
    }
    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <header className={`site-header ${scrolled ? 'is-scrolled' : ''}`}>
        <div className="site-header__inner">
          <NavLink to="/" className="site-header__logo">
            <img src={siteConfig.brand.logo} alt={siteConfig.brand.logoAlt} />
          </NavLink>

          <div className="site-header__actions">
            <button className="site-header__toggle" aria-label="Open menu" onClick={() => setNavOpen(true)}>
              <span />
              <span />
              <span />
            </button>
            <NavLink to="/get-the-app" className="site-header__cta">
              Get the App
            </NavLink>
          </div>
        </div>
      </header>

      <MobileNav open={navOpen} onClose={() => setNavOpen(false)} />
    </>
  )
}
