import './Intro_About_Us_Page.css'

export default function IntroAboutUsPage({
  badge = "BlinkRide's Story",
  title = 'Explore Our Journey',
  description = `From a simple idea to a growing mobility platform, our journey is driven by innovation and reliability. We continue to evolve, improving our services to deliver a seamless & trusted experience every day.`,
  divider = true
}) {
  return (
    <section className="story-section">
      <div className="story-container">
        <div className="story-badge">{badge}</div>

        <h2 className="story-title">{title}</h2>

        <p className="story-description">{description}</p>

        {divider && <hr className="story-divider" />}
      </div>
    </section>
  )
}
