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
                        <button className="gallery-item frame-large reveal" onClick={() => openLightbox('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80')} aria-label="View larger image of Modern Living Room">
                            <img src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80"
                                alt="Modern Living Room Wooden Accents" loading="lazy" decoding="async" />
                        </button>

                        <button className="gallery-item frame-tall reveal" onClick={() => openLightbox('https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?auto=format&fit=crop&w=1200&q=80')} aria-label="View larger image of Luxury Bath">
                            <img src="https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?auto=format&fit=crop&w=600&q=80"
                                alt="Luxury Bathroom Interior" loading="lazy" decoding="async" />
                        </button>

                        <button className="gallery-item frame-square reveal" onClick={() => openLightbox('https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=1200&q=80')} aria-label="View larger image of Modular Kitchen">
                            <img src="https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=600&q=80"
                                alt="Modular Kitchen Setup" loading="lazy" decoding="async" />
                        </button>

                        <button className="gallery-item frame-square reveal" onClick={() => openLightbox('https://images.unsplash.com/photo-1599696848652-f0ff23bc911f?auto=format&fit=crop&w=1200&q=80')} aria-label="View larger image of Premium Details">
                            <img src="https://images.unsplash.com/photo-1599696848652-f0ff23bc911f?auto=format&fit=crop&w=600&q=80"
                                alt="Premium Interior Details" loading="lazy" decoding="async" />
                        </button>

                        <button className="gallery-item frame-square reveal" onClick={() => openLightbox('https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80')} aria-label="View larger image of Wardrobe Design">
                            <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=600&q=80"
                                alt="Wardrobe and Storage Design" loading="lazy" decoding="async" />
                        </button>

                        <button className="gallery-item frame-wide reveal" onClick={() => openLightbox('https://images.unsplash.com/photo-1600210491892-03d54c0aaf87?auto=format&fit=crop&w=1200&q=80')} aria-label="View larger image of Exterior Deck">
                            <img src="https://images.unsplash.com/photo-1600210491892-03d54c0aaf87?auto=format&fit=crop&w=800&q=80"
                                alt="Exterior Deck and Cladding" loading="lazy" decoding="async" />
                        </button>

                        <button className="gallery-item frame-square reveal" onClick={() => openLightbox('https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80')} aria-label="View larger image of Minimalist Kitchen">
                            <img src="https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=600&q=80"
                                alt="Minimalist Kitchen Surface" loading="lazy" decoding="async" />
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
