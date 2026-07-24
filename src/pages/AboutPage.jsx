import React from 'react';

export default function AboutPage() {
    return (
        <div style={{ paddingTop: '100px', minHeight: '80vh' }} className="bg-light">
            <div className="container">
                <div className="section-header text-center reveal active">
                    <span className="section-label">Our Story</span>
                    <h2>About Aashish Jajoo</h2>
                    <p>The vision and experience behind Aashish Ply.</p>
                </div>

                <div className="split-layout" style={{ marginTop: '40px' }}>
                    <div className="about-image reveal active">
                        {/* Placeholder for owner photo */}
                        <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=800&q=80"
                            alt="Aashish Jajoo - Proprietor" style={{ borderRadius: '20px', boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }} />
                        <div className="image-accent">Proprietor</div>
                    </div>
                    
                    <div className="about-text reveal active">
                        <h3 className="royal-heading" style={{ fontSize: '2rem' }}>A Legacy of Quality & Trust</h3>
                        <p style={{ fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '20px', color: 'var(--clr-text-light)' }}>
                            With years of deep-rooted experience in the interior materials industry, Aashish Jajoo established Aashish Ply & Interior Fittings to bridge the gap between premium quality and accessible pricing in Nanded.
                        </p>
                        <p style={{ fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '20px', color: 'var(--clr-text-light)' }}>
                            His relentless focus on sourcing only the most authentic, durable, and aesthetically pleasing materials—ranging from Marine Grade Plywood to High-Gloss Laminates and architectural hardware—has made Aashish Ply a trusted name among top architects, interior designers, and homeowners.
                        </p>

                        <div className="founder-block mt-4" style={{ borderLeft: '4px solid #8A6A4B', paddingLeft: '20px' }}>
                            <p className="founder-name" style={{ fontSize: '1.3rem', fontWeight: 'bold' }}>"Our commitment is not just to sell materials, but to ensure that every home built with our products stands the test of time."</p>
                            <p className="founder-title mt-2" style={{ color: '#8A6A4B', fontWeight: '600' }}>— Aashish Jajoo</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
