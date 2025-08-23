// import { Link } from 'react-router-dom'


export default function MainContent() {
  return (
    <div className="main-content">
      <div className="greeting-card">
        <h1 className="greeting-title">Welcome to my Curriculum Vitae</h1>
        {/* <p className="subtitle">
          Welcome to my digital space where creativity meets functionality.
          I craft exceptional experiences through design and innovation.
        </p> */}

        <div className="cv-preview">
          <embed
            src="/Cvku.pdf"
            width="100%"
            height="600px"
            style={{ border: "none" }}
            title="CV Preview" />
        </div>
      </div>
    </div>
  )
}


// <Link to="/Latestwork" className="work-btn">
//             <span>✦</span> View Latest Work
//           </Link>