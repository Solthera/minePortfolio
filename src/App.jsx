import './App.css'
import Header from './components/Header.jsx'
import AboutCard from './components/AboutCard.jsx'
import MainContent from './components/MainContent.jsx'
import Sidebar from './components/Sidebar.jsx'
import { Outlet } from 'react-router-dom'

function App() {
  // Enhanced interactions
        document.querySelectorAll('.connect-btn, .work-btn, .platforms-btn').forEach(btn => {
            btn.addEventListener('mouseenter', function() {
                this.style.transform = 'translateY(-4px) scale(1.02)';
            });
            
            btn.addEventListener('mouseleave', function() {
                this.style.transform = 'translateY(0) scale(1)';
            });
        });

        // Floating animation for sidebar cards
        document.querySelectorAll('.stat-card, .cv-card').forEach((card, index) => {
            card.style.animation = `float ${4 + index * 0.7}s ease-in-out infinite`;
        });

        // Smooth scroll reveal animation
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, observerOptions);

        document.querySelectorAll('.stat-card, .cv-card, .greeting-card, .platforms-card').forEach(el => {
            el.style.opacity = '0';
            el.style.transform = 'translateY(30px)';
            el.style.transition = 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)';
            observer.observe(el);
        });

        // Staggered animation reveal
        setTimeout(() => {
            document.querySelectorAll('.stat-card, .cv-card, .greeting-card, .platforms-card').forEach((el, index) => {
                setTimeout(() => {
                    el.style.opacity = '1';
                    el.style.transform = 'translateY(0)';
                }, index * 150);
            });
        }, 300);
    
    return (
        <div className="container">
            <Header />
            <div className="main-grid">
                <AboutCard />
                <MainContent />
                <Sidebar />
            </div>
        </div>
    )
    
}

export default App
