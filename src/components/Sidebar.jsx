import { Link } from "react-router-dom"

export default function Sidebar() { 
    return (
        <div className="sidebar">
                <div className="stat-card orange">
                    <div className="stat-number">20+</div>
                    <div className="stat-label">Premium Projects</div>
                </div>
                
                <div className="stat-card purple">
                    <div className="stat-number">4+</div>
                    <div className="stat-label">Years of<br />Excellence</div>
                </div>
                
                <div className="cv-card">
                    <Link to="/Mycv" className="cv-link">
                        <div className="cv-icon">📄</div>
                        <div className="cv-text">See My CV</div>
                    </Link>
                </div>
            </div>
    )
}



// onClick={() => window.location.href = '/Mycv'}