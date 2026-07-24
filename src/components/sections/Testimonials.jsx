import React from 'react';

export default function Testimonials() {
    return (
        <section id="testimonials" className="testimonials section-padding bg-warm">
            <div className="container">
                <div className="section-header text-center reveal">
                    <span className="section-label">Client Reviews</span>
                    <h2>What Our Customers Say</h2>
                </div>

                <div className="testimonial-grid reveal">
                    <div className="review-card">
                        <div className="stars">★★★★★</div>
                        <p>"Excellent quality plywood and very helpful staff. Aashish guided me perfectly on which materials to use for my modular kitchen. Highly recommend!"</p>
                        <p className="reviewer">- Rohan Deshmukh, Nanded</p>
                    </div>
                    <div className="review-card">
                        <div className="stars">★★★★★</div>
                        <p>"The range of laminates and hardware they have is fantastic. We sourced all the materials for our new office from here, and the result is premium."</p>
                        <p className="reviewer">- Priya Sharma, Interior Designer</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
