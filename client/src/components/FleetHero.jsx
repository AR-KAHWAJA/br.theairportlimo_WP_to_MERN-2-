import StatCounter from './StatCounter.jsx'
import './FleetHero.css'

export default function FleetHero() {
  return (
    <section className="fleet-hero">
      <div className="fleet-shell">
        <div className="hero-copy">
          <h1 className="hero-title">
            Experience Our
            <br />
            Premium
          </h1>

          <div className="hero-highlight">Fleet Services</div>
        </div>

        <div className="stats-grid">
          <article className="stat-card">
            <StatCounter to={120} suffix="+" label="10,000 Happy Rides" />
          </article>

          <article className="stat-card">
            <StatCounter to={832} label="98% Customer Satisfaction" />
          </article>

          <article className="stat-card">
            <StatCounter to={48} label="500+ Vehicles Available" />
          </article>

          <article className="stat-card">
            <StatCounter to={24} label="24/7 Support Team" />
          </article>
        </div>
      </div>
    </section>
  )
}
