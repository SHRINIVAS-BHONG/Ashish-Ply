import React from 'react';

export default function About() {
    return (
        <section id="about" className="about section-padding bg-light">
            <div className="container split-layout">
                <div className="about-image reveal">
                    <img src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=800&q=80"
                        alt="Premium Interior Space" loading="lazy" decoding="async" />
                    <div className="image-accent">Quality • Trust • Excellence</div>
                </div>
                <div className="about-text reveal">
                    <span className="section-label">Our Story</span>
                    <h2>Crafting Spaces with Integrity</h2>
                    <p>Located in the heart of Nanded at Shivaji Nagar, Aashish Ply & Interior Fittings is your dedicated partner in interior design. We believe that a beautiful home starts with uncompromising material quality.</p>
                    <p>Whether you are an architect designing a luxury villa, a carpenter building custom furniture, or a homeowner renovating your kitchen, our curated selection of premium plywood, laminates, and hardware ensures your vision is built to last.</p>

                    <div className="founder-block mt-3">
                        <p className="founder-name">Aashish Jajoo</p>
                        <p className="founder-title">Proprietor</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
