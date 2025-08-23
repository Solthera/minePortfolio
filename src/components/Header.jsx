import logo from "../assets/img/logo2.png";
import { Link } from "react-router-dom";

export default function Header() {
    return (
        <div>
            <header className="header">
                <div className="logo"><img src={logo} alt="Logo Farel" /></div>
                <nav className="nav">
                    <Link to="/home">Home</Link>
                    <Link to="/Latestwork">Porfolio</Link>
                    <a href="#blog">Blog</a>
                    <a href="#contact">Contact</a>
                </nav>
            </header>
        </div>
    )
}
