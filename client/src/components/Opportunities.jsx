import { Link } from 'react-router-dom'
import './Opportunities.css'

export default function Opportunities() {
  return (
    <section className="opportunities-section">
      <div className="opportunities-wrap">
        <div className="opportunities-heading">
          <span className="opportunities-tag">BlinkRide Opportunities</span>
          <h2>Two Ways to Grow With BlinkRide</h2>
          <p>
            Partner with our transportation network or drive on your own schedule. Choose the opportunity that fits
            your goals.
          </p>
        </div>

        <div className="opportunities-grid">
          <article className="opportunity-card opportunity-card--driver">
            <div className="opportunity-card__media">
              <img src="images/Driver-section.webp" alt="Professional BlinkRide driver" />
              <span className="opportunity-card__label">Driver</span>
              <p className="opportunity-card__caption">Drive with flexibility, earn more, and stay in control.</p>
            </div>

            <div className="opportunity-card__content">
              <p className="opportunity-card__eyebrow">Drive Smart. Earn Big.</p>

              <h3>Drive on Your Schedule and Earn Without Limits</h3>

              <p className="opportunity-card__description">
                Choose when you drive, select suitable rides, receive fast payouts, and get dedicated support
                throughout your journey.
              </p>

              <ul className="opportunity-card__benefits">
                <li>Flexible driving opportunities</li>
                <li>Choose rides that fit your schedule</li>
                <li>Fast payouts and driver support</li>
              </ul>

              <div className="opportunity-card__footer">
                <span className="opportunity-card__note">Designed for flexible earning</span>
                <Link to="/get-the-app" className="opportunity-card__btn">
                  Get the App
                </Link>
              </div>
            </div>
          </article>


          <article className="opportunity-card opportunity-card--affiliate">
            <div className="opportunity-card__media">
              <img src="images/affialte-imgae.webp" alt="BlinkRide affiliate partnership" />
              <span className="opportunity-card__label">Affiliate</span>
              <p className="opportunity-card__caption">
                Build stronger partnerships and grow your transportation business.
              </p>
            </div>

            <div className="opportunity-card__content">
              <p className="opportunity-card__eyebrow">Partner With BlinkRide</p>

              <h3>Join Our Trusted Affiliate Network</h3>

              <p className="opportunity-card__description">
                Connect your transportation business with more customers through a trusted platform focused on
                quality, safety, reliability, and long-term growth.
              </p>

              <ul className="opportunity-card__benefits">
                <li>Expand your business reach</li>
                <li>Connect with more customers</li>
                <li>Access reliable ride opportunities</li>
              </ul>

              <div className="opportunity-card__footer">
                <span className="opportunity-card__note">Built for transportation partners</span>
                <Link to="/affiliates" className="opportunity-card__btn">
                  Discover More
                </Link>
              </div>
            </div>
          </article>

          
        </div>
      </div>
    </section>
  )
}
