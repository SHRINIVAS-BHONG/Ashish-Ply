import React from 'react';

export default function Hero() {
    return (
        <header id="hero" className="hero">
            <div className="hero-overlay"></div>
            <div className="container hero-container">
                <div className="hero-content fade-in-up reveal">
                    <h1>Premium Materials for Timeless Interiors.</h1>
                    <p>Nanded’s trusted supplier of high-quality plywood, laminates, and architectural hardware. We help homeowners and designers craft exceptional spaces.</p>
                    <div className="hero-badges">
                        <span className="badge">Years of Experience</span>
                        <span className="badge">Trusted Brands</span>
                        <span className="badge">Large Selection</span>
                    </div>
                    <div className="hero-buttons">
                        <a href="tel:02462230003" className="btn btn-primary">Call Now</a>
                        <a href="https://wa.me/918888030786" className="btn btn-outline-light">WhatsApp Us</a>
                    </div>
                </div>
            </div>
        </header>
    );
}
