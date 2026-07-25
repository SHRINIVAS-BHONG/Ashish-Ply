import React from 'react';

export default function Gallery() {
    const openLightbox = (src) => {
        const lightbox = document.getElementById('lightbox');
        const img = document.getElementById('lightbox-img');
        if(img && lightbox) {
            img.src = src;
            lightbox.classList.add('active');
        }
    };

    const closeLightbox = () => {
        const lightbox = document.getElementById('lightbox');
        if(lightbox) lightbox.classList.remove('active');
    };

    return (
        <>
            <section id="gallery" className="gallery section-padding bg-light">
                <div className="container">
                    <div className="section-header reveal">
                        <span className="section-label">Inspiration</span>
                        <h2>Transform Your Space</h2>
                        <p>See what's possible when you use the right materials.</p>
                    </div>

                    <div className="bento-gallery">
                        <button className="gallery-item frame-large reveal" onClick={() => openLightbox('/images/gallery/gallery_plywood_interior_1784961103797.png')} aria-label="View larger image of Premium Plywood">
                            <img src="/images/gallery/gallery_plywood_interior_1784961103797.png"
                                alt="Premium Plywood Wall Paneling" loading="lazy" decoding="async" />
                        </button>

                        <button className="gallery-item frame-tall reveal" onClick={() => openLightbox('/images/gallery/gallery_wardrobe_1784960890463.png')} aria-label="View larger image of Premium Wardrobe">
                            <img src="/images/gallery/gallery_wardrobe_1784960890463.png"
                                alt="Luxury Wardrobe Design" loading="lazy" decoding="async" />
                        </button>

                        <button className="gallery-item frame-square reveal" onClick={() => openLightbox('/images/gallery/gallery_kitchen_1784960866293.png')} aria-label="View larger image of Modular Kitchen">
                            <img src="/images/gallery/gallery_kitchen_1784960866293.png"
                                alt="Modular Kitchen Setup" loading="lazy" decoding="async" />
                        </button>

                        <button className="gallery-item frame-square reveal" onClick={() => openLightbox('https://images.unsplash.com/photo-1599696848652-f0ff23bc911f?auto=format&fit=crop&w=1200&q=80')} aria-label="View larger image of Architectural Hardware">
                            <img src="https://images.unsplash.com/photo-1599696848652-f0ff23bc911f?auto=format&fit=crop&w=600&q=80"
                                alt="Premium Architectural Hardware Installed" loading="lazy" decoding="async" />
                        </button>

                        <button className="gallery-item frame-square reveal" onClick={() => openLightbox('/images/gallery/gallery_laminates_1784960854973.png')} aria-label="View larger image of High-Gloss Laminates">
                            <img src="/images/gallery/gallery_laminates_1784960854973.png"
                                alt="High-Gloss Laminate Sheets" loading="lazy" decoding="async" />
                        </button>

                        <button className="gallery-item frame-wide reveal" onClick={() => openLightbox('/images/gallery/gallery_panels_1784960910596.png')} aria-label="View larger image of Wood Paneled Living Room">
                            <img src="/images/gallery/gallery_panels_1784960910596.png"
                                alt="Wood Paneled Living Room" loading="lazy" decoding="async" />
                        </button>

                        <button className="gallery-item frame-square reveal" onClick={() => openLightbox('/images/gallery/gallery_marine_interior_1784961183707.png')} aria-label="View larger image of Marine Grade Plywood Vanity">
                            <img src="/images/gallery/gallery_marine_interior_1784961183707.png"
                                alt="Marine Grade Plywood Bathroom Vanity" loading="lazy" decoding="async" />
                        </button>
                    </div>
                </div>
            </section>

            <div id="lightbox" className="lightbox" onClick={closeLightbox}>
                <span className="close-lightbox" onClick={closeLightbox}>&times;</span>
                <img className="lightbox-content" id="lightbox-img" alt="Enlarged gallery view" onClick={e => e.stopPropagation()} />
                <div className="lightbox-controls">
                    <span className="prev-lightbox">&#10094;</span>
                    <span className="next-lightbox">&#10095;</span>
                </div>
            </div>
        </>
    );
}
