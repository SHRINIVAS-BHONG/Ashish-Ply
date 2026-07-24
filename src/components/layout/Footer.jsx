import React from 'react';

export default function Footer() {
    return (
        <footer className="footer">
                <div className="container footer-grid">
                    <div className="footer-brand">
                        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '1.5rem' }}>
                            <img src="/logo.png" alt="Aashish Ply Logo" className="footer-logo-img" style={{ maxHeight: '55px' }} />
                            <div className="footer-logo-text" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                                <div style={{ letterSpacing: '0.5px', color: '#ffffff', lineHeight: '1', fontFamily: 'sans-serif', display: 'flex', alignItems: 'baseline' }}>
                                    <span style={{ color: '#c02638', fontWeight: '900', fontSize: 'clamp(1.8rem, 6vw, 2.8rem)' }}>A</span>
                                    <span style={{ textTransform: 'lowercase', fontWeight: '900', fontSize: 'clamp(1.8rem, 6vw, 2.8rem)' }}>ashish</span>
                                </div>
                                <span style={{ fontWeight: 'bold', fontSize: 'clamp(0.55rem, 1.5vw, 0.75rem)', letterSpacing: '1px', color: '#cccccc', textTransform: 'uppercase', marginTop: '2px', fontFamily: 'sans-serif' }}>
                                    PLY & INTERIOR FITTINGS
                                </span>
                            </div>
                        </div>
                        <p>Nanded’s trusted supplier of premium interior materials, plywood, and architectural hardware.</p>
                    </div>

                    <div className="footer-links">
                        <h4>Quick Links</h4>
                        <ul>
                            <li><a href="/about">About Us</a></li>
                            
                            <li><a href="#gallery">Gallery</a></li>
                        </ul>
                    </div>

                    <div className="footer-contact">
                        <h4>Contact Us</h4>
                        <p><a href="tel:02462230003">02462-230003</a></p>
                        <p><a href="https://wa.me/918888030786">+91 8888030786</a></p>
                        <p>2nd Floor, Kothari Complex, Shivaji Nagar, Nanded</p>
                    </div>

                    <div className="footer-map">
                        <h4>Our Location</h4>
                        <iframe
                            src="https://maps.google.com/maps?q=Kothari%20Complex,%20Shivaji%20Nagar,%20Nanded&t=&z=15&ie=UTF8&iwloc=&output=embed"
                            width="100%"
                            height="150"
                            style={{ border: 0, borderRadius: '4px' }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Aashish Ply Google Maps Location"
                        ></iframe>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>&copy; 2026 Aashish Ply & Interior Fittings. All rights reserved.</p>
                </div>
            </footer>
    );
}
