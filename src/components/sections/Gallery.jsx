import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import OptimizedImage from '../common/OptimizedImage';
import { prefetchImages } from '../../utils/imageOptimization';

const previewItems = [
    {
        src: '/images/catalog/scene/page_5_scene.webp',
        webpSrc: '/images/catalog/scene/page_5_scene.webp',
        thumbSrc: '/images/catalog/thumbs/page_5_thumb.webp',
        category: 'Wooden Series',
        title: 'Taj Arka Royal Pull',
        description: 'Semi-circular brass & solid wood main door handle inspired by royal Jharokhas.'
    },
    {
        src: '/images/catalog/scene/page_6_scene.webp',
        webpSrc: '/images/catalog/scene/page_6_scene.webp',
        thumbSrc: '/images/catalog/thumbs/page_6_thumb.webp',
        category: 'Wooden Series',
        title: 'Taj Tarang Wooden Pull',
        description: 'Organic leaf wave brass inlay across fine crafted hardwoods.'
    },
    {
        src: '/images/catalog/scene/page_28_scene.webp',
        webpSrc: '/images/catalog/scene/page_28_scene.webp',
        thumbSrc: '/images/catalog/thumbs/page_28_thumb.webp',
        category: 'Mortise Handles',
        title: 'Orbit Knurled Lever Handles',
        description: 'High-precision solid brass knurled lever handles in luxury satin & matte finishes.'
    },
    {
        src: '/images/catalog/scene/page_37_scene.webp',
        webpSrc: '/images/catalog/scene/page_37_scene.webp',
        thumbSrc: '/images/catalog/thumbs/page_37_thumb.webp',
        category: 'Cabinet Handles',
        title: 'Linea Luxury Cabinet Pulls',
        description: 'Sleek linear profile handles and matching knobs in Gold, Rose Gold, and Matt Black.'
    },
    {
        src: '/images/catalog/scene/page_76_scene.webp',
        webpSrc: '/images/catalog/scene/page_76_scene.webp',
        thumbSrc: '/images/catalog/thumbs/page_76_thumb.webp',
        category: 'Bathroom Accessories',
        title: 'Luxury Brass Bath Hardware',
        description: 'Corrosion-resistant luxury brass fixtures and bathroom hardware collections.'
    },
    {
        src: '/images/catalog/scene/page_39_scene.webp',
        webpSrc: '/images/catalog/scene/page_39_scene.webp',
        thumbSrc: '/images/catalog/thumbs/page_39_thumb.webp',
        category: 'Cabinet Handles',
        title: 'Cathay Sunburst Fluted Pulls',
        description: 'Art-deco inspired fluted rosette brass handles crafted for luxury wardrobes.'
    }
];

export default function Gallery() {
    useEffect(() => {
        prefetchImages(previewItems.map(item => item.webpSrc), true);
    }, []);

    return (
        <section id="gallery" className="gallery section-padding bg-light">
            <div className="container">
                <div className="section-header reveal active text-center">
                    <span className="section-label">Signature Collection</span>
                    <h2>Exclusive Hardware &amp; Architectural Designs</h2>
                    <p>Explore handcrafted wooden handles, solid brass mortise locksets, and designer fittings.</p>
                </div>

                <div className="preview-gallery-grid mt-5">
                    {previewItems.map((item, idx) => (
                        <Link 
                            to={`/gallery?category=${item.category === 'Wooden Series' ? 'wooden' : item.category === 'Mortise Handles' ? 'mortise' : item.category === 'Cabinet Handles' ? 'cabinet' : 'bathroom'}`}
                            key={idx} 
                            className="preview-item reveal active"
                            style={{ textDecoration: 'none' }}
                        >
                            <OptimizedImage
                                src={item.src}
                                webpSrc={item.webpSrc}
                                thumbSrc={item.thumbSrc}
                                alt={item.title}
                                loading="lazy"
                            />
                            <div className="preview-overlay">
                                <span className="preview-badge">{item.category}</span>
                                <h4>{item.title}</h4>
                                <p>{item.description}</p>
                            </div>
                        </Link>
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
                        Explore All 75+ Designs
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

