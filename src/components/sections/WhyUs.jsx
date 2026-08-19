import React from 'react';

export default function WhyUs() {
    return (
        <section id="why-us" className="why-us section-padding bg-stone">
            <div className="container">
                <div className="section-header text-center reveal">
                    <h2>Why Choose us?</h2>
                    <p>Building long-term relationships through trust and quality.</p>
                </div>

                <div className="features-grid">
                    <div className="feature-card reveal">
                        <div className="feature-icon">🛡️</div>
                        <h3>Original Products</h3>
                        <p>We guarantee 100% authentic products from top brands. No compromises on material integrity.</p>
                    </div>

                    <div className="feature-card reveal">
                        <div className="feature-icon">🏷️</div>
                        <h3>Competitive Pricing</h3>
                        <p>Premium quality doesn't have to break the bank. We offer transparent, fair pricing on all our ranges.</p>
                    </div>
                    <div className="feature-card reveal">
                        <div className="feature-icon">🚚</div>
                        <h3>Fast Service</h3>
                        <p>Timely delivery and efficient service to ensure your interior projects stay on schedule.</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
