export default function Secondcard() { 
    return (
        <div className="project-card">
                <div className="project-image2">
                     
                </div>
                <div className="project-content">
                    <div className="project-category">Website</div>
                    <h3 className="project-title">Web Ethereum Wallet Check</h3>
                    <p className="project-description">
                        A simple and elegant web application for checking Ethereum wallet balances. Connect your wallet or lookup any address quickly and easily.
                    </p>
                    <div className="project-technologies">
                        <span className="tech-tag">Ethers.js</span>
                        <span className="tech-tag">React</span>
                        <span className="tech-tag">Vite</span>
                        <span className="tech-tag">Javascript</span>
                    </div>
                    <div className="project-links">
                        <a href="https://ethereum-wallet-check.vercel.app/" target="blank" className="project-link primary">Live Demo</a>
                        <a href="https://github.com/Solthera/Ethereum-wallet-check.git" target="blank" className="project-link">View Code</a>
                    </div>
                </div>
            </div>
    )
}