export default function AboutCard() {
    return (
        
        <div className="about-card">
                <div className="about-header">About Me</div>
                
                <div className="profile-section">
                    <div className="profile-image"></div>
                    
                    <div className="name-section">
                        <div className="greeting">Hello, I'm</div>
                        <div className="name">Muhammad<br />Farel Firdaus</div>
                    </div>
                </div>
                
                <div className="connect-section">
                    <div className="bio">
                        <p>
                            I am an informatics student with a strong interest in web development, Web3, and Blockchain technologies. 
                            I enjoy building projects that combine modern web frameworks with decentralized solutions, 
                            and I am eager to keep learning about how these technologies can shape the future of the internet.
                        </p>

                    </div>
                    
                    <div className="email">farelfrr09@gmail.com</div>
                    {/* <div className="availability">🟢 Available for projects</div> */}
                    
                    <div className="social-links">
                        <a href="https://www.linkedin.com/in/muhammad-farel-firdaus-b7234530a/" className="social-link" target="_blank">
                            <i className="fab fa-linkedin"></i>
                        </a>
                        <a href="https://www.instagram.com/farellfrs/" className="social-link" target="_blank">
                            <i className="fab fa-instagram"></i>
                        </a>
                        <a href="https://github.com/Solthera" className="social-link" target="_blank">
                            <i className="fab fa-github"></i>
                        </a>
                        <a href="https://x.com/username" className="social-link" target="_blank">
                            <i className="fab fa-x-twitter"></i>
                        </a>
                    </div>

                </div>
            </div>

    )
}