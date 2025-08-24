export default function Firstcard() {
    return (
        <div className="project-card">
                <div className="project-image1">
                     
                </div>
                <div className="project-content">
                    <div className="project-category">IoT and Blockchain Technology</div>
                    <h3 className="project-title">Smart Lock</h3>
                    <p className="project-description">
                        Smartlock is an IoT-blockchain integration project aimed at creating a secure, decentralized,
                        and remotely accessible smart door lock system powered by IoT hardware and blockchain-based smart contracts
                    </p>
                    <div className="project-technologies">
                        <span className="tech-tag">Solidity</span>
                        <span className="tech-tag">Express.js</span>
                        <span className="tech-tag">React</span>   
                        <span className="tech-tag">C++</span>
                    </div>
                    <div className="project-links">
                        <a href="#" className="project-link primary">Live Demo</a>
                        <a href="https://github.com/Itsjustrell/Smartlock.git" className="project-link" target="blank">View Code</a>
                    </div>
                </div>
            </div>
    )
}