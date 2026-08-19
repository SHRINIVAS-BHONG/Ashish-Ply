import React from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
    const openMobileMenu = () => {
        document.getElementById('mobile-drawer').classList.add('active');
        document.body.style.overflow = 'hidden';
    };

    const closeMobileMenu = () => {
        document.getElementById('mobile-drawer').classList.remove('active');
        document.body.style.overflow = '';
    };

    return (
        <>
            <nav id="navbar" className="nav-transparent">
                <div className="nav-container">
                    <Link to="/" className="logo" style={{ display: 'flex', alignItems: 'center', gap: '12px', textDecoration: 'none' }}>
                        <img src="/logo.png" alt="Aashish Ply Logo" className="logo-img" style={{ maxHeight: '45px' }} />
                        <div className="logo-text" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                            <div style={{ letterSpacing: '0.5px', color: '#636363', lineHeight: '1', fontFamily: 'sans-serif', display: 'flex', alignItems: 'baseline' }}>
                                <span style={{ color: '#c02638', fontWeight: '900', fontSize: 'clamp(1.8rem, 6vw, 2.8rem)' }}>A</span>
                                <span style={{ textTransform: 'lowercase', fontWeight: '900', fontSize: 'clamp(1.8rem, 6vw, 2.8rem)' }}>ashish</span>
                            </div>
                            <span style={{ fontWeight: 'bold', fontSize: 'clamp(0.55rem, 1.5vw, 0.75rem)', letterSpacing: '1px', color: '#636363', textTransform: 'uppercase', marginTop: '2px', fontFamily: 'sans-serif' }}>
                                PLY & INTERIOR FITTINGS
                            </span>
                        </div>
                    </Link>

                    <button className="menu-toggle" id="mobile-menu" aria-label="Toggle mobile menu" aria-expanded="false" onClick={openMobileMenu}>
                        <span className="bar" aria-hidden="true"></span>
                        <span className="bar" aria-hidden="true"></span>
                        <span className="bar" aria-hidden="true"></span>
                    </button>

                    <ul className="nav-links">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/#why-us">Why Us</Link></li>
                        <li><Link to="/gallery">Gallery</Link></li>

                    </ul>
                    <Link to="/#contact" className="btn-royal nav-cta">Get Quote</Link>
                </div>
            </nav>

            <div className="mobile-drawer-overlay" id="mobile-drawer" onClick={closeMobileMenu}>
                <div className="mobile-drawer-content" onClick={e => e.stopPropagation()}>
                    <button className="close-drawer" id="close-drawer" onClick={closeMobileMenu}>&times;</button>
                    <ul className="mobile-links" onClick={closeMobileMenu}>
                        <li><Link to="/" onClick={closeMobileMenu}>Home</Link></li>
                        <li><Link to="/about" onClick={closeMobileMenu}>About</Link></li>
                        <li><Link to="/#why-us" onClick={closeMobileMenu}>Why Us</Link></li>
                        <li><Link to="/gallery" onClick={closeMobileMenu}>Gallery</Link></li>

                        <li><Link to="/#contact" onClick={closeMobileMenu}>Contact</Link></li>
                    </ul>
                    <div className="mobile-drawer-actions">
                        <a href="tel:02462230003" className="btn btn-outline btn-full">Call Now</a>
                        <a href="https://wa.me/918888030786" className="btn btn-primary btn-full">WhatsApp Us</a>
                    </div>
                </div>
            </div>
        </>
    );
}
