import React, { useState } from 'react';

const galleryItems = [
    {
        type: 'image',
        src: '/images/gallery/gallery_plywood_interior_1784961103797.png',
        alt: 'Premium Plywood Wall Paneling',
        frameClass: 'frame-large'
    },
    {
        type: 'image',
        src: '/images/gallery/gallery_wardrobe_1784960890463.png',
        alt: 'Luxury Wardrobe Design',
        frameClass: 'frame-tall'
    },
    {
        type: 'image',
        src: '/images/gallery/gallery_kitchen_1784960866293.png',
        alt: 'Modular Kitchen Setup',
        frameClass: 'frame-square'
    },
    {
        type: 'image',
        src: 'https://images.unsplash.com/photo-1599696848652-f0ff23bc911f?auto=format&fit=crop&w=1200&q=80',
        thumbSrc: 'https://images.unsplash.com/photo-1599696848652-f0ff23bc911f?auto=format&fit=crop&w=600&q=80',
        alt: 'Premium Architectural Hardware Installed',
        frameClass: 'frame-square'
    },
    {
        type: 'image',
        src: '/images/gallery/gallery_laminates_1784960854973.png',
        alt: 'High-Gloss Laminate Sheets',
        frameClass: 'frame-square'
    },
    {
        type: 'image',
        src: '/images/gallery/gallery_panels_1784960910596.png',
        alt: 'Wood Paneled Living Room',
        frameClass: 'frame-wide'
    },
    {
        type: 'image',
        src: '/images/gallery/gallery_marine_interior_1784961183707.png',
        alt: 'Marine Grade Plywood Bathroom Vanity',
        frameClass: 'frame-square'
    },
    {
        type: 'image',
        src: '/images/gallery/mortise_lock.png',
        alt: 'Premium Mortise Door Lock Installation',
        frameClass: 'frame-square'
    },
    {
        type: 'image',
        src: '/images/gallery/light_latches.jpg',
        alt: 'Sleek Modern Brass Light Window Latch',
        frameClass: 'frame-square'
    },
    {
        type: 'image',
        src: '/images/gallery/normal_handle.jpg',
        alt: 'Sleek Modern Satin Chrome Door Lever Handle',
        frameClass: 'frame-square'
    },
    {
        type: 'image',
        src: '/images/gallery/cabinet_handle.jpg',
        alt: 'Elegant Modern Brushed Brass Cabinet Pull Handle',
        frameClass: 'frame-square'
    },
    {
        type: 'image',
        src: '/images/gallery/bed_fittings.jpg',
        alt: 'Heavy-Duty Hydraulic Gas Lift Bed Fittings',
        frameClass: 'frame-wide'
    },
    {
        type: 'image',
        src: '/images/gallery/wall_louvers.jpg',
        alt: 'Premium Fluted Wood Wall Louver Paneling',
        frameClass: 'frame-wide'
    }
];

// Extract just the image items to map index properly in lightbox
const imageItems = galleryItems.filter(item => item.type === 'image');

export default function GalleryPage() {
    const [activeIndex, setActiveIndex] = useState(null);

    const openLightbox = (imgSrc) => {
        const idx = imageItems.findIndex(item => item.src === imgSrc);
        if (idx !== -1) {
            setActiveIndex(idx);
        }
    };

    const closeLightbox = () => {
        setActiveIndex(null);
    };

    const showPrev = (e) => {
        e.stopPropagation();
        setActiveIndex((prev) => (prev === 0 ? imageItems.length - 1 : prev - 1));
    };

    const showNext = (e) => {
        e.stopPropagation();
        setActiveIndex((prev) => (prev === imageItems.length - 1 ? 0 : prev + 1));
    };

    return (
        <div style={{ paddingTop: '120px', paddingBottom: '80px', minHeight: '85vh' }} className="bg-light">
            <div className="container">
                <div className="section-header text-center reveal active">
                    <span className="section-label">Portfolio & Inspirations</span>
                    <h2>Transform Your Space</h2>
                    <p>Explore our premium collections of plywood, veneers, laminates, and hardware styling.</p>
                </div>

                <div className="bento-gallery mt-5">
                    {galleryItems.map((item, idx) => {
                        if (item.type === 'image') {
                            return (
                                <button 
                                    key={idx}
                                    className={`gallery-item ${item.frameClass} reveal active`} 
                                    onClick={() => openLightbox(item.src)} 
                                    aria-label={`View larger image of ${item.alt}`}
                                >
                                    <img 
                                        src={item.thumbSrc || item.src} 
                                        alt={item.alt} 
                                        loading="lazy" 
                                        decoding="async" 
                                    />
                                </button>
                            );
                        } else {
                            return (
                                <div 
                                    key={idx}
                                    className={`gallery-item vacant-slot ${item.frameClass} reveal active`}
                                    aria-label={`${item.title} - ${item.badge}`}
                                >
                                    <div className="vacant-content">
                                        <div className="vacant-icon">{item.icon}</div>
                                        <div className="vacant-title">{item.title}</div>
                                        <div className="vacant-badge">{item.badge}</div>
                                    </div>
                                </div>
                            );
                        }
                    })}
                </div>
            </div>

            {/* Lightbox Modal */}
            {activeIndex !== null && (
                <div id="lightbox" className="lightbox" style={{ display: 'block' }} onClick={closeLightbox}>
                    <span className="close-lightbox" onClick={closeLightbox}>&times;</span>
                    <img 
                        className="lightbox-content" 
                        src={imageItems[activeIndex].src} 
                        alt={imageItems[activeIndex].alt} 
                        onClick={e => e.stopPropagation()} 
                    />
                    <div className="lightbox-controls">
                        <span className="prev-lightbox" onClick={showPrev}>&#10094;</span>
                        <span className="next-lightbox" onClick={showNext}>&#10095;</span>
                    </div>
                </div>
            )}
        </div>
    );
}
