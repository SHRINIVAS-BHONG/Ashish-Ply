import React from 'react';
import { Link } from 'react-router-dom';

export default function AboutPage() {
    return (
        <div style={{ paddingTop: '110px', paddingBottom: '90px', minHeight: '85vh' }} className="bg-light">
            <div className="container">
                {/* Header */}
                <div className="section-header text-center reveal active">
                    <span className="section-label">Our Story &amp; Expertise</span>
                    <h1>About Aashish Ply &amp; Interior Fittings</h1>
                    <p>The vision, craftsmanship, and comprehensive material solutions behind Nanded’s leading interior partner.</p>
                </div>

                {/* Legacy & Story Split Layout */}
                <div className="split-layout" style={{ marginTop: '50px' }}>
                    <div className="about-image reveal active">
                        <img 
                            src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1000&q=80"
                            alt="Aashish Ply - Premium Interior & Architectural Materials" 
                            loading="lazy"
                            decoding="async"
                            style={{ borderRadius: '16px', width: '100%', height: '100%', minHeight: '380px', objectFit: 'cover' }} 
                        />
                        <div className="image-accent">Quality • Trust • Excellence</div>
                    </div>
                    
                    <div className="about-text reveal active">
                        <h2 className="royal-heading" style={{ fontSize: '2.2rem', marginBottom: '16px' }}>A Legacy of Quality &amp; Trust</h2>
                        <p style={{ fontSize: '1.05rem', lineHeight: '1.8', marginBottom: '18px', color: 'var(--clr-text-light)' }}>
                            With years of deep-rooted experience in the interior materials industry, <strong>Aashish Ply &amp; Interior Fittings</strong> was established to bridge the gap between premium international quality and accessible local pricing in Nanded and surrounding regions.
                        </p>
                        <p style={{ fontSize: '1.05rem', lineHeight: '1.8', marginBottom: '20px', color: 'var(--clr-text-light)' }}>
                            We partner with top architects, interior designers, contractors, and discerning homeowners, supplying authenticated marine-grade plywood, architectural hardware, luxury veneers, and complete turnkey material packages for modern living and working spaces.
                        </p>

                        <div className="founder-block mt-4" style={{ borderLeft: '4px solid #A07C5A', paddingLeft: '20px', background: '#FCFAF7', padding: '16px 20px', borderRadius: '0 12px 12px 0' }}>
                            <p style={{ fontSize: '1.15rem', fontStyle: 'italic', color: 'var(--clr-text-main)', margin: 0 }}>
                                "Our commitment is not merely to sell materials, but to ensure that every space crafted with our products stands the test of time."
                            </p>
                            <p className="mt-2" style={{ color: '#A07C5A', fontWeight: '700', fontSize: '0.9rem', margin: '8px 0 0 0' }}>
                                — Aashish Ply &amp; Interior Fittings
                            </p>
                        </div>
                    </div>
                </div>

                {/* Comprehensive Solutions Section */}
                <div className="about-solutions-section reveal active">
                    <div className="text-center">
                        <span className="section-label">End-To-End Material Solutions</span>
                        <h2 style={{ fontSize: '2.2rem', marginTop: '6px' }}>Complete Solutions For Every Space</h2>
                        <p style={{ maxWidth: '680px', margin: '10px auto 0 auto', color: 'var(--clr-text-light)' }}>
                            From customized modular kitchens to total corporate office fit-outs and full residential interiors, we provide end-to-end material excellence.
                        </p>
                    </div>

                    <div className="solutions-grid">
                        {/* 1. Modular Kitchen Solutions */}
                        <div className="solution-card reveal active">
                            <div className="solution-icon-wrap">
                                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                                    <polyline points="9 22 9 12 15 12 15 22"></polyline>
                                </svg>
                            </div>
                            <h3>Modular Kitchen Solutions</h3>
                            <p>
                                Engineered for high moisture and heat resistance. We provide complete material ecosystems for durable, aesthetic, and functional modular kitchens.
                            </p>
                            <ul className="solution-features">
                                <li>
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>
                                    100% Waterproof BWP Marine Ply
                                </li>
                                <li>
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>
                                    High-Gloss Acrylic &amp; PU Laminates
                                </li>
                                <li>
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>
                                    Soft-Close Tandem Boxes &amp; Channels
                                </li>
                                <li>
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>
                                    Sleek Edge Pulls &amp; Profile Handles
                                </li>
                            </ul>
                        </div>

                        {/* 2. Total Home Solutions */}
                        <div className="solution-card reveal active">
                            <div className="solution-icon-wrap">
                                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                                    <line x1="3" y1="9" x2="21" y2="9"></line>
                                    <line x1="9" y1="21" x2="9" y2="9"></line>
                                </svg>
                            </div>
                            <h3>Total Home Solutions</h3>
                            <p>
                                Transform every room with cohesive interior materials — from grand main entrance doors to luxury wardrobes, bedroom furnishings, and designer living spaces.
                            </p>
                            <ul className="solution-features">
                                <li>
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>
                                    Custom Wardrobes &amp; Hydraulic Beds
                                </li>
                                <li>
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>
                                    Royal Wood &amp; Brass Main Door Handles
                                </li>
                                <li>
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>
                                    Fluted Wall Louvers &amp; TV Wall Panels
                                </li>
                                <li>
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>
                                    Natural Wood Veneers &amp; Texture Sheets
                                </li>
                            </ul>
                        </div>

                        {/* 3. Total Office & Commercial Solutions */}
                        <div className="solution-card reveal active">
                            <div className="solution-icon-wrap">
                                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
                                    <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
                                </svg>
                            </div>
                            <h3>Total Office Solutions</h3>
                            <p>
                                Heavy-duty, high-performance materials designed for commercial environments, corporate offices, clinics, retail showrooms, and hospitality projects.
                            </p>
                            <ul className="solution-features">
                                <li>
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>
                                    Workstations &amp; Executive Desks
                                </li>
                                <li>
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>
                                    Conference Table Boards &amp; Hardware
                                </li>
                                <li>
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>
                                    High-Traffic Scratch-Resistant Laminates
                                </li>
                                <li>
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>
                                    Commercial Mortise Locks &amp; Latches
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Call to Action Banner */}
                <div className="about-cta-box reveal active">
                    <div className="about-cta-text">
                        <h3>Planning a Residential or Commercial Project?</h3>
                        <p>
                            Visit our showroom at Kothari Complex, Shivaji Nagar, Nanded or share your material estimate for instant quotation &amp; expert guidance.
                        </p>
                    </div>
                    <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
                        <Link to="/gallery" className="btn-royal">
                            Browse Products
                        </Link>
                        <Link to="/#contact" className="btn btn-outline-light">
                            Get in Touch
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
