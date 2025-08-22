import { Link } from 'react-router-dom'

export default function MainContent() {
  return (
    <div className="main-content">
      <div className="greeting-card">
        <h1 className="greeting-title">Greetings!</h1>
        <p className="subtitle">
          Welcome to my digital space where creativity meets functionality.
          I craft exceptional experiences through design and innovation.
        </p>

        <div className="work-preview">
          <Link to="/Latestwork" className="work-btn">
            <span>✦</span> View Latest Work
          </Link>
        </div>
      </div>

      <div className="platforms-card">
        <a href="#" className="platforms-btn">
          <span>🌐</span> Connect Across Platforms
        </a>
      </div>
    </div>
  )
}
