import React from 'react';
import { Link } from 'react-router-dom';

const previewItems = [
    {
        src: '/images/gallery/gallery_plywood_interior_1784961103797.png',
        title: 'Luxury Paneling',
        description: 'Premium hardwood veneers & designer wall treatments.'
    },
    {
        src: '/images/gallery/gallery_wardrobe_1784960890463.png',
        title: 'Sleek Wardrobes',
        description: 'Custom built with BWR ply and acrylic laminates.'
    },
    {
        src: '/images/gallery/gallery_kitchen_1784960866293.png',
        title: 'Modular Kitchens',
        description: 'Water-resistant BWP marine plywood configurations.'
    }
];

export default function Gallery() {
    return (
        <section id="gallery" className="gallery section-padding bg-light">
            <div className="container">
                <div className="section-header reveal active">
                    <span className="section-label">Inspiration</span>
                    <h2>Transform Your Space</h2>
                    <p>See what's possible when you use the right materials.</p>
                </div>

                <div className="preview-gallery-grid mt-5">
                    {previewItems.map((item, idx) => (
                        <div key={idx} className="preview-item reveal active">
                            <img src={item.src} alt={item.title} loading="lazy" />
                            <div className="preview-overlay">
                                <h4>{item.title}</h4>
                                <p>{item.description}</p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="text-center mt-5 reveal active">
                    <Link 
                        to="/gallery" 
                        className="btn-royal" 
                        style={{ 
                            textDecoration: 'none', 
                            display: 'inline-flex', 
                            alignItems: 'center', 
                            gap: '8px',
                            fontWeight: '600'
                        }}
                    >
                        Explore Full Gallery
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                            <line x1="5" y1="12" x2="19" y2="12"></line>
                            <polyline points="12 5 19 12 12 19"></polyline>
                        </svg>
                    </Link>
                </div>
            </div>
        </section>
    );
}
