import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <section className="section text-center">
      <div className="container">
        <h1>404</h1>
        <p>We couldn't find the page you're looking for.</p>
        <Link to="/" className="btn">
          Back to Home
        </Link>
      </div>
    </section>
  )
}
