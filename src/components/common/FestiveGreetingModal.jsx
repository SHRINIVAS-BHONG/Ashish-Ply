import React, { useState, useEffect } from 'react';
import '../../styles/FestiveGreetingModal.css';

export default function FestiveGreetingModal() {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        // Show once per session
        const dismissed = sessionStorage.getItem('festive_ad_dismissed_dussehra');
        if (!dismissed) {
            const timer = setTimeout(() => {
                setIsOpen(true);
            }, 400);
            return () => clearTimeout(timer);
        }
    }, []);

    // Handle ESC key press and scroll locking
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === 'Escape' && isOpen) {
                closeModal();
            }
        };

        if (isOpen) {
            document.body.style.overflow = 'hidden';
            window.addEventListener('keydown', handleKeyDown);
        } else {
            document.body.style.overflow = '';
        }

        return () => {
            document.body.style.overflow = '';
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [isOpen]);

    const closeModal = () => {
        setIsOpen(false);
        sessionStorage.setItem('festive_ad_dismissed_dussehra', 'true');
    };

    if (!isOpen) return null;

    return (
        <div 
            className="festive-ad-overlay"
            onClick={closeModal}
            role="dialog"
            aria-modal="true"
            aria-label="Festive Announcement"
        >
            <div 
                className="festive-ad-container" 
                onClick={(e) => e.stopPropagation()}
            >
                {/* Top close button bar - sits outside image so logo is NEVER covered */}
                <div className="festive-ad-top-action">
                    <button 
                        className="festive-ad-close-btn" 
                        onClick={closeModal} 
                        aria-label="Close Advertisement"
                        title="Close (Esc)"
                    >
                        <span className="close-text">Close</span>
                        <span className="close-icon">&times;</span>
                    </button>
                </div>

                {/* Ad Poster Image */}
                <div className="festive-ad-image-box">
                    <img 
                        src="/images/dusserha_kitchen_kumfurt.jpeg" 
                        alt="Aashish Ply & Kitchen Kumfurt Vijayadashami Festive Greeting" 
                        className="festive-ad-image"
                        loading="eager"
                        decoding="async"
                    />
                </div>

                {/* Mobile-friendly tap to dismiss hint */}
                <button 
                    className="festive-ad-dismiss-hint"
                    onClick={closeModal}
                    type="button"
                >
                    Tap anywhere to continue &rarr;
                </button>
            </div>
        </div>
    );
}
