export default function Firstcard() {
    return (
        <div className="project-card">
                <div className="project-image">
                    E-Commerce Platform
                </div>
                <div className="project-content">
                    <div className="project-category">Web Development</div>
                    <h3 className="project-title">Modern E-Commerce Platform</h3>
                    <p className="project-description">
                        A full-stack e-commerce solution with advanced features including real-time inventory management, secure payment processing, and responsive design.
                    </p>
                    <div className="project-technologies">
                        <span className="tech-tag">React</span>
                        <span className="tech-tag">Node.js</span>
                        <span className="tech-tag">MongoDB</span>
                        <span className="tech-tag">Stripe</span>
                    </div>
                    <div className="project-links">
                        <a href="#" className="project-link primary">Live Demo</a>
                        <a href="#" className="project-link">View Code</a>
                    </div>
                </div>
            </div>
    )
}