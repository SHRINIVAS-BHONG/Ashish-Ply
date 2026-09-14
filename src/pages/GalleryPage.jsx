import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { useSearchParams } from 'react-router-dom';
import OptimizedImage from '../components/common/OptimizedImage';
import { prefetchImages, prefetchScheduler } from '../utils/imageOptimization';
import { catalogCategories, catalogProducts } from '../data/catalogData';

export default function GalleryPage() {
    const [searchParams, setSearchParams] = useSearchParams();
    const initialCategory = searchParams.get('category') || 'all';
    
    const [selectedCategory, setSelectedCategory] = useState(initialCategory);
    const [searchQuery, setSearchQuery] = useState('');
    const [visibleCount, setVisibleCount] = useState(24);
    const [activeIndex, setActiveIndex] = useState(null);
    const [lightboxViewMode, setLightboxViewMode] = useState('full'); // 'full' | 'scene' | 'spec'

    // Synchronize category state with URL params
    useEffect(() => {
        const cat = searchParams.get('category');
        if (cat) {
            setSelectedCategory(cat);
        }
    }, [searchParams]);

    const handleCategoryChange = (catId) => {
        setSelectedCategory(catId);
        setVisibleCount(24);
        if (catId === 'all') {
            searchParams.delete('category');
            setSearchParams(searchParams);
        } else {
            setSearchParams({ category: catId });
        }
    };

    // Filter items based on Category & Search
    const filteredProducts = useMemo(() => {
        return catalogProducts.filter(item => {
            const matchesCategory = selectedCategory === 'all' || item.categorySlug === selectedCategory;
            const query = searchQuery.toLowerCase().trim();
            const matchesSearch = !query || 
                item.title.toLowerCase().includes(query) ||
                item.category.toLowerCase().includes(query) ||
                item.description.toLowerCase().includes(query) ||
                `page ${item.pageNumber}`.includes(query) ||
                `plate ${item.pageNumber}`.includes(query);
            return matchesCategory && matchesSearch;
        });
    }, [selectedCategory, searchQuery]);

    const displayedProducts = useMemo(() => {
        return filteredProducts.slice(0, visibleCount);
    }, [filteredProducts, visibleCount]);

    // Initial prefetch of visible thumbnails
    useEffect(() => {
        if (displayedProducts.length > 0) {
            prefetchImages(displayedProducts.map(item => item.thumbSrc), false);
        }
    }, [displayedProducts]);

    // Preload next/prev when lightbox is open
    useEffect(() => {
        if (activeIndex !== null && filteredProducts[activeIndex]) {
            const nextIdx = (activeIndex + 1) % filteredProducts.length;
            const prevIdx = (activeIndex - 1 + filteredProducts.length) % filteredProducts.length;
            prefetchScheduler.enqueue(filteredProducts[nextIdx].src, true);
            prefetchScheduler.enqueue(filteredProducts[prevIdx].src, true);
        }
    }, [activeIndex, filteredProducts]);

    // Keyboard navigation in lightbox
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (activeIndex === null) return;
            if (e.key === 'Escape') setActiveIndex(null);
            if (e.key === 'ArrowRight') showNext();
            if (e.key === 'ArrowLeft') showPrev();
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [activeIndex, filteredProducts]);

    const openLightbox = (product) => {
        const idx = filteredProducts.findIndex(p => p.id === product.id);
        if (idx !== -1) {
            setActiveIndex(idx);
            setLightboxViewMode('full');
        }
    };

    const closeLightbox = () => {
        setActiveIndex(null);
    };

    const showPrev = (e) => {
        if (e) e.stopPropagation();
        setActiveIndex((prev) => (prev === 0 ? filteredProducts.length - 1 : prev - 1));
    };

    const showNext = (e) => {
        if (e) e.stopPropagation();
        setActiveIndex((prev) => (prev === filteredProducts.length - 1 ? 0 : prev + 1));
    };

    const loadMore = () => {
        setVisibleCount(prev => prev + 24);
    };

    const activeProduct = activeIndex !== null ? filteredProducts[activeIndex] : null;

    const getWhatsAppLink = (product) => {
        const waNumber = "918888030786";
        const message = encodeURIComponent(
            `Hello Aashish Ply, I am interested in:\n` +
            `• Design: ${product.title}\n` +
            `• Category: ${product.category}\n` +
            `• Code: ${product.code || 'AP-' + product.pageNumber}\n` +
            `Please share availability and pricing.`
        );
        return `https://wa.me/${waNumber}?text=${message}`;
    };

    const getActiveImageSrc = () => {
        if (!activeProduct) return '';
        if (lightboxViewMode === 'scene') return activeProduct.sceneSrc;
        if (lightboxViewMode === 'spec') return activeProduct.specSrc;
        return activeProduct.src;
    };

    return (
        <div className="gallery-page-container bg-light" style={{ paddingTop: '110px', paddingBottom: '80px', minHeight: '90vh' }}>
            <div className="container">
                {/* Header */}
                <div className="gallery-page-header text-center reveal active">
                    <span className="section-label">Aashish Ply Collections</span>
                    <h1>Architectural Hardware &amp; Fitting Gallery</h1>
                    <p className="lead-text">
                        Explore our complete collection of 75+ luxury wooden handles, solid brass mortise locksets, cabinet pulls, and designer fittings.
                    </p>
                </div>

                {/* Filter Toolbar */}
                <div className="gallery-toolbar mt-5 reveal active">
                    {/* Category Filter Pills */}
                    <div className="category-pills">
                        {catalogCategories.map(cat => (
                            <button
                                key={cat.id}
                                className={`category-pill ${selectedCategory === cat.id ? 'active' : ''}`}
                                onClick={() => handleCategoryChange(cat.id)}
                            >
                                {cat.label}
                                <span className="pill-count">({cat.count})</span>
                            </button>
                        ))}
                    </div>

                    {/* Search Input */}
                    <div className="gallery-search-box">
                        <svg className="search-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                            <circle cx="11" cy="11" r="8"></circle>
                            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                        </svg>
                        <input 
                            type="text"
                            placeholder="Search by series, handle name, product code..."
                            value={searchQuery}
                            onChange={(e) => {
                                setSearchQuery(e.target.value);
                                setVisibleCount(24);
                            }}
                            className="gallery-search-input"
                        />
                        {searchQuery && (
                            <button className="clear-search" onClick={() => setSearchQuery('')} aria-label="Clear search">
                                &times;
                            </button>
                        )}
                    </div>
                </div>

                {/* Results count */}
                <div className="gallery-results-info mt-4">
                    <span>Showing <strong>{displayedProducts.length}</strong> of <strong>{filteredProducts.length}</strong> items</span>
                </div>

                {/* Products Grid */}
                {displayedProducts.length > 0 ? (
                    <div className="catalog-grid mt-4">
                        {displayedProducts.map((item, idx) => (
                            <div 
                                key={item.id} 
                                className="catalog-card reveal active"
                                onClick={() => openLightbox(item)}
                            >
                                <div className="catalog-card-media">
                                    <OptimizedImage
                                        src={item.cardSrc || item.src}
                                        webpSrc={item.cardSrc || item.src}
                                        thumbSrc={item.thumbSrc}
                                        alt={item.title}
                                        loading={idx < 8 ? "eager" : "lazy"}
                                    />
                                    <div className="catalog-card-badge">{item.code || `AP-${idx + 1}`}</div>
                                    <div className="catalog-card-overlay">
                                        <span className="view-btn">
                                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                <circle cx="11" cy="11" r="8"></circle>
                                                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                                                <line x1="11" y1="8" x2="11" y2="14"></line>
                                                <line x1="8" y1="11" x2="14" y2="11"></line>
                                            </svg>
                                            View Details
                                        </span>
                                    </div>
                                </div>
                                <div className="catalog-card-body">
                                    <span className="catalog-category-tag">{item.category}</span>
                                    <h3 className="catalog-card-title">{item.title}</h3>
                                    <p className="catalog-card-desc">{item.description}</p>
                                    
                                    <div className="catalog-card-footer" onClick={(e) => e.stopPropagation()}>
                                        <a 
                                            href={getWhatsAppLink(item)} 
                                            target="_blank" 
                                            rel="noreferrer" 
                                            className="catalog-wa-btn"
                                            title="Enquire on WhatsApp"
                                        >
                                            <svg width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                                <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z" />
                                            </svg>
                                            Quick Enquiry
                                        </a>
                                        <button 
                                            className="catalog-view-plate-btn"
                                            onClick={() => openLightbox(item)}
                                        >
                                            View Details →
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="gallery-empty-state text-center mt-5">
                        <h3>No items matched your search</h3>
                        <p>Try resetting the category filter or searching with different keywords.</p>
                        <button 
                            className="btn btn-outline mt-3"
                            onClick={() => {
                                setSelectedCategory('all');
                                setSearchQuery('');
                            }}
                        >
                            Reset Filters
                        </button>
                    </div>
                )}

                {/* Load More Button */}
                {visibleCount < filteredProducts.length && (
                    <div className="text-center mt-5">
                        <button className="btn-royal" onClick={loadMore}>
                            Load More Designs ({filteredProducts.length - visibleCount} Remaining)
                        </button>
                    </div>
                )}
            </div>

            {/* Lightbox Modal */}
            {activeProduct && (
                <div className="catalog-lightbox" onClick={closeLightbox}>
                    <div className="lightbox-modal-content" onClick={(e) => e.stopPropagation()}>
                        {/* Modal Header */}
                        <div className="lightbox-modal-header">
                            <div className="lightbox-title-group">
                                <span className="lightbox-cat-badge">{activeProduct.category} ({activeProduct.code || `Code: AP-${activeProduct.pageNumber}`})</span>
                                <h2>{activeProduct.title}</h2>
                            </div>
                            
                            <div className="lightbox-header-actions">
                                {/* View Mode Switcher */}
                                <div className="lightbox-view-tabs">
                                    <button 
                                        className={`tab-btn ${lightboxViewMode === 'full' ? 'active' : ''}`}
                                        onClick={() => setLightboxViewMode('full')}
                                    >
                                        Full Showcase
                                    </button>
                                    <button 
                                        className={`tab-btn ${lightboxViewMode === 'scene' ? 'active' : ''}`}
                                        onClick={() => setLightboxViewMode('scene')}
                                    >
                                        Lifestyle View
                                    </button>
                                    <button 
                                        className={`tab-btn ${lightboxViewMode === 'spec' ? 'active' : ''}`}
                                        onClick={() => setLightboxViewMode('spec')}
                                    >
                                        Specs &amp; Finishes
                                    </button>
                                </div>

                                <button className="lightbox-close-btn" onClick={closeLightbox} aria-label="Close modal">
                                    &times;
                                </button>
                            </div>
                        </div>

                        {/* Image Viewer Area */}
                        <div className="lightbox-image-stage">
                            <img 
                                key={getActiveImageSrc()}
                                src={getActiveImageSrc()} 
                                alt={activeProduct.title}
                                className="lightbox-main-img"
                                decoding="async"
                            />

                            {/* Arrow Controls */}
                            <button className="lightbox-nav-btn prev" onClick={showPrev} aria-label="Previous item">
                                &#10094;
                            </button>
                            <button className="lightbox-nav-btn next" onClick={showNext} aria-label="Next item">
                                &#10095;
                            </button>
                        </div>

                        {/* Modal Footer */}
                        <div className="lightbox-modal-footer">
                            <div className="lightbox-footer-info">
                                <p>{activeProduct.description}</p>
                                <span className="plate-index">Design {activeIndex + 1} of {filteredProducts.length}</span>
                            </div>

                            <div className="lightbox-footer-actions">
                                <a 
                                    href={getWhatsAppLink(activeProduct)} 
                                    target="_blank" 
                                    rel="noreferrer" 
                                    className="btn-royal"
                                    style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}
                                >
                                    <svg width="18" height="18" fill="currentColor" viewBox="0 0 16 16">
                                        <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z" />
                                    </svg>
                                    Enquire on WhatsApp
                                </a>

                                <a 
                                    href={activeProduct.src} 
                                    target="_blank" 
                                    rel="noreferrer" 
                                    className="btn btn-outline"
                                    style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}
                                >
                                    Open Full View
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

