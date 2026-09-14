import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
    return (
        <footer className="footer">
            <div className="container footer-grid">
                <div className="footer-brand">
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '1.5rem' }}>
                        <picture>
                            <source srcSet="/logo.webp" type="image/webp" />
                            <img src="/logo.png" alt="Aashish Ply Logo" className="footer-logo-img" style={{ maxHeight: '55px', width: 'auto' }} width="55" height="55" loading="lazy" decoding="async" />
                        </picture>
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
                    <p>Nanded’s trusted destination for modular kitchen solutions, total home &amp; office interior solutions, and architectural fittings.</p>
                </div>

                <div className="footer-links">
                    <h4>Quick Links</h4>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about">About Us</Link></li>
                        <li><Link to="/#why-us">Why Us</Link></li>
                        <li><Link to="/gallery">Products</Link></li>
                        <li><Link to="/#contact">Contact & Enquiry</Link></li>
                    </ul>
                </div>

                <div className="footer-contact">
                    <h4>Contact Us</h4>
                    <ul className="footer-contact-list">
                        <li className="footer-contact-item">
                            <span className="contact-icon" aria-hidden="true">
                                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                                </svg>
                            </span>
                            <div>
                                <span className="contact-label">Phone: </span>
                                <a href="tel:+918888030786">+91 8888030786</a>
                            </div>
                        </li>
                        <li className="footer-contact-item">
                            <span className="contact-icon contact-icon-wa" aria-hidden="true">
                                <svg width="15" height="15" fill="currentColor" viewBox="0 0 16 16">
                                    <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z" />
                                </svg>
                            </span>
                            <div>
                                <span className="contact-label">WhatsApp: </span>
                                <a href="https://wa.me/918888030786" target="_blank" rel="noreferrer">Chat on WhatsApp</a>
                            </div>
                        </li>
                        <li className="footer-contact-item">
                            <span className="contact-icon" aria-hidden="true">
                                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                                    <polyline points="22,6 12,13 2,6"></polyline>
                                </svg>
                            </span>
                            <div>
                                <span className="contact-label">Email: </span>
                                <a href="mailto:jajoo.aashish1801@gmail.com">jajoo.aashish1801@gmail.com</a>
                            </div>
                        </li>
                        <li className="footer-contact-item">
                            <span className="contact-icon" aria-hidden="true">
                                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                                    <circle cx="12" cy="10" r="3"></circle>
                                </svg>
                            </span>
                            <div>
                                <a href="https://maps.google.com/?q=Kothari+Complex,Shivaji+Nagar,Nanded" target="_blank" rel="noreferrer">
                                    2nd Floor, Kothari Complex, Shivaji Nagar, Nanded
                                </a>
                            </div>
                        </li>
                    </ul>
                </div>

                <div className="footer-map">
                    <h4>Our Location</h4>
                    <iframe
                        src="https://maps.google.com/maps?q=Kothari%20Complex,%20Shivaji%20Nagar,%20Nanded&t=&z=15&ie=UTF8&iwloc=&output=embed"
                        width="100%"
                        height="150"
                        style={{ border: 0, borderRadius: '8px' }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Aashish Ply Google Maps Location"
                    ></iframe>
                </div>
            </div>

            <div className="footer-bottom">
                <p>&copy; 2026 Aashish Ply &amp; Interior Fittings. All rights reserved.</p>
            </div>
        </footer>
    );
}
