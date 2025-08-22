export default function Header() {
    return (
        <div>
            <header className="header">
                <div className="logo"><img src="./src/assets/img/logo2.png" alt="Logo Farel" /></div>
                <nav className="nav">
                    <a href="#home">Home</a>
                    <a href="#portfolio">Portfolio</a>
                    <a href="#blog">Blog</a>
                    <a href="#contact">Contact</a>
                </nav>
            </header>
        </div>
    )
}