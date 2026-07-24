import React, { useEffect, Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Layout
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';

// Pages
import Home from './pages/Home';
import AboutPage from './pages/AboutPage';
import ToolsPage from './pages/ToolsPage';

// Scroll to top helper on route change
function ScrollToTop() {
  const { pathname } = window.location;
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
    useEffect(() => {
        // Preloader
        const preloader = document.getElementById('preloader');
        if (preloader) {
            const timer = setTimeout(() => {
                preloader.classList.add('hidden');
            }, 1000);
            return () => clearTimeout(timer);
        }
    }, []);

    useEffect(() => {
        // Sticky Navbar & Active Links
        const handleScroll = () => {
            const navbar = document.getElementById('navbar');
            if(navbar) {
                if (window.scrollY > 50) {
                    navbar.classList.add('nav-scrolled');
                    navbar.classList.remove('nav-transparent');
                } else {
                    navbar.classList.remove('nav-scrolled');
                    navbar.classList.add('nav-transparent');
                }
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        // Intersection Observer for scroll animations
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                }
            });
        }, { threshold: 0.1 });

        // Observe new elements added via Routing/Suspense
        const mutationObserver = new MutationObserver(() => {
            document.querySelectorAll('.reveal:not(.active)').forEach(el => observer.observe(el));
        });
        
        mutationObserver.observe(document.body, { childList: true, subtree: true });
        
        // Initial observe
        document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

        return () => {
            observer.disconnect();
            mutationObserver.disconnect();
        };
    }, []);

    const toggleQuickActions = (e) => {
        e.currentTarget.classList.toggle('active');
        const menu = document.getElementById('qa-menu');
        if(menu) menu.classList.toggle('active');
    };

    return (
        <BrowserRouter>
            <ScrollToTop />
            
            <div id="preloader" className="preloader">
                <div className="preloader-content" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '15px' }}>
                    <img src="/logo.png" alt="Aashish Ply Logo" className="logo-img" style={{ maxHeight: '80px' }} />
                    <div className="logo-text" style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <div style={{ letterSpacing: '0.5px', color: '#636363', lineHeight: '1', fontFamily: 'sans-serif', display: 'flex', alignItems: 'baseline' }}>
                            <span style={{ color: '#c02638', fontWeight: '900', fontSize: 'clamp(2rem, 8vw, 4rem)' }}>A</span>
                            <span style={{ textTransform: 'lowercase', fontWeight: '900', fontSize: 'clamp(2rem, 8vw, 4rem)' }}>ashish</span>
                        </div>
                        <span style={{ fontWeight: '700', fontSize: 'clamp(0.6rem, 2vw, 0.9rem)', letterSpacing: '1.5px', color: '#636363', textTransform: 'uppercase', marginTop: '4px', fontFamily: 'sans-serif' }}>
                            PLY & INTERIOR FITTINGS
                        </span>
                    </div>
                </div>
            </div>

            <div className="quick-actions" id="quick-actions">
                <button className="qa-toggle" id="qa-toggle" aria-label="Toggle Quick Actions" onClick={toggleQuickActions} aria-expanded="false" title="Quick Actions">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="M12 5v14M5 12h14"></path></svg>
                </button>
                <div className="qa-menu" id="qa-menu" role="menu">
                    <a href="tel:02462230003" className="qa-item qa-call" title="Call Us" role="menuitem" aria-label="Call Us"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg></a>
                    <a href="https://maps.google.com/?q=Kothari+Complex,Shivaji+Nagar,Nanded" target="_blank" rel="noreferrer" className="qa-item qa-map" title="Location" role="menuitem" aria-label="Location"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg></a>
                    <a href="https://wa.me/918888030786" target="_blank" rel="noreferrer" className="qa-item qa-wa" title="WhatsApp" role="menuitem" aria-label="WhatsApp"><svg width="20" height="20" fill="currentColor" viewBox="0 0 16 16" aria-hidden="true"><path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z" /></svg></a>
                </div>
            </div>

            <Navbar />
            
            <Suspense fallback={<div style={{height: "50vh", display: "flex", justifyContent: "center", alignItems: "center"}}>Loading...</div>}>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<AboutPage />} />
                    <Route path="/tools" element={<ToolsPage />} />
                </Routes>
            </Suspense>

            <Footer />
        </BrowserRouter>
    );
}
