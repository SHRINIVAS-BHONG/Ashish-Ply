import React from 'react';

export default function Contact() {
    const handleFormSubmit = (e) => {
        e.preventDefault();
        const name = document.getElementById('name').value;
        const phone = document.getElementById('phone').value;
        const req = document.getElementById('requirement').value;
        const msg = document.getElementById('message').value;

        const waNumber = "918888030786";
        let text = `Hello Aashish Ply,%0A%0A*Name:* ${name}%0A*Phone:* ${phone}%0A*Requirement:* ${req}%0A`;
        if (msg) text += `*Message:* ${msg}%0A`;

        window.open(`https://wa.me/${waNumber}?text=${text}`, '_blank');
    };

    return (
        <section id="contact" className="contact section-padding bg-warm">
            <div className="container">
                <div className="contact-wrapper">
                    <div className="contact-info reveal">
                        <h2>Start Your Interior Project Today.</h2>
                        <p>Visit our showroom or send us your material list for a quick quotation.</p>

                        <div className="info-block mt-4">
                            <h3>Visit Our Showroom</h3>
                            <p>2nd Floor, Kothari Complex,<br />Shivaji Nagar, Nanded-2<br />Maharashtra</p>
                            <a href="https://maps.google.com/?q=Kothari+Complex,Shivaji+Nagar,Nanded" target="_blank" rel="noreferrer" className="btn-link">Get Directions →</a>
                        </div>

                        <div className="info-block">
                            <h3>Connect With Us</h3>
                            <p><strong>Phone:</strong> <a href="tel:02462230003" className="text-link">02462-230003</a></p>
                            <p><strong>WhatsApp:</strong> <a href="https://wa.me/918888030786" className="text-link">+91 8888030786</a></p>
                            <p><strong>Email:</strong> <a href="mailto:jajoo.aashish1801@gmail.com" className="text-link">jajoo.aashish1801@gmail.com</a></p>
                        </div>
                    </div>

                    <div className="contact-form-container reveal">
                        <h3>Quick Enquiry</h3>
                        <form id="enquiryForm" className="contact-form" onSubmit={handleFormSubmit}>
                            <div className="form-group">
                                <label htmlFor="name">Your Name</label>
                                <input type="text" id="name" required placeholder="Enter your name" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="phone">Phone Number</label>
                                <input type="tel" id="phone" required placeholder="Enter your mobile number" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="requirement">I am looking for...</label>
                                <select id="requirement" required defaultValue="">
                                    <option value="" disabled>Select an option</option>
                                    <option value="Plywood & Laminates">Plywood & Laminates</option>
                                    <option value="Kitchen Hardware">Kitchen Hardware</option>
                                    <option value="Wardrobe Accessories">Wardrobe Accessories</option>
                                    <option value="Project Quotation">Full Project Quotation</option>
                                    <option value="General Enquiry">General Enquiry</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <label htmlFor="message">Message (Optional)</label>
                                <textarea id="message" rows="3" placeholder="Tell us about your requirement..."></textarea>
                            </div>
                            <button type="submit" className="btn-royal btn-full">
                                <svg width="24" height="24" fill="currentColor" viewBox="0 0 16 16" aria-hidden="true" style={{ marginRight: '8px' }}><path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z" /></svg>
                                Send via WhatsApp
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}
