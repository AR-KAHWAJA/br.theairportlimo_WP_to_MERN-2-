import Hero from '../components/Hero.jsx'
import AppShowcase from '../components/AppShowcase.jsx'
import { getAppLink } from '../config/site.js'
import './GetTheApp.css'

export default function GetTheApp() {
  return (
    <div>
      <Hero
        className="hero--get-app"
        title={
          <>
            Ride Smart
            <br />
            Drive Better
          </>
        }
        highlight="with BlinkRide"
        image="/images/GET_THE_APP_HERO_IMAGE.webp"
      >
        <div className="app-store-buttons">
          <a className="btn btn--dark" href={getAppLink('customer')} target="_blank" rel="noopener noreferrer">
            Get the Customer App
          </a>
          <a className="btn btn--dark" href={getAppLink('driver')} target="_blank" rel="noopener noreferrer">
            Get the Driver App
          </a>
        </div>
      </Hero>

      <AppShowcase />
    </div>
  )
}
