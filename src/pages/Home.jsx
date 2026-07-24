import React, { Suspense, lazy } from 'react';

// Eagerly loaded for above-the-fold performance
import Hero from '../components/sections/Hero';

// Lazy loaded components for below-the-fold content
const WhyUs = lazy(() => import('../components/sections/WhyUs'));
const Gallery = lazy(() => import('../components/sections/Gallery'));
const Testimonials = lazy(() => import('../components/sections/Testimonials'));
const Contact = lazy(() => import('../components/sections/Contact'));

export default function Home() {
    return (
        <>
            <Hero />
            <Suspense fallback={<div style={{height: "50vh", display: "flex", justifyContent: "center", alignItems: "center"}}>Loading...</div>}>
                <WhyUs />
                <Gallery />
                <Testimonials />
                <Contact />
            </Suspense>
        </>
    );
}
