import React, { useRef, useState } from "react";
import Tooltip from "./Tooltip";

function Contact() {
    const { tooltipRef, handleMouseMove, handleMouseLeave } = Tooltip();
    const [showThankYou, setShowThankYou] = useState(false);
    const formRef = useRef(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData(formRef.current);
        await fetch("https://formspree.io/f/mqalozon", {
            method: "POST",
            body: formData,
            headers: {
                Accept: "application/json",
            },
        });
        setShowThankYou(true);
        formRef.current.reset();
        setTimeout(() => setShowThankYou(false), 4000);
    };

    return (
        <section className="section" id="contact">
            <h2 className="section-title">Get In Touch</h2>
            <div className="contact-container">
                <div className="contact-info">
                    <div className="contact-card">
                        <div className="contact-icon"><i className="fas fa-envelope"></i></div>
                        <h3 className="contact-title">Email</h3>
                        <p className="contact-text">anilkumar.dev7894@email.com</p>
                    </div>
                    <div className="contact-card">
                        <div className="contact-icon"><i className="fas fa-phone"></i></div>
                        <h3 className="contact-title">Phone</h3>
                        <p className="contact-text">+91 637-834-6576</p>
                    </div>
                    <div className="contact-card">
                        <div className="contact-icon"><i className="fas fa-map-marker-alt"></i></div>
                        <h3 className="contact-title">Location</h3>
                        <p className="contact-text">India, Jaipur</p>
                    </div>
                    <div className="social-links">
                        <a
                            href="https://github.com/aniljasel"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="social-link"
                            aria-label="GitHub"
                            onMouseMove={(e) => handleMouseMove(e, "GitHub")}
                            onMouseLeave={handleMouseLeave}
                        >
                            <i className="fab fa-github"></i>
                        </a>
                        <a
                            href="https://www.linkedin.com/in/-anil-kumar"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="social-link"
                            aria-label="LinkedIn"
                            onMouseMove={(e) => handleMouseMove(e, "LinkedIn")}
                            onMouseLeave={handleMouseLeave}
                        >
                            <i className="fab fa-linkedin-in"></i>
                        </a>
                        <a
                            href="https://wa.me/916378346576"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="social-link"
                            aria-label="WhatsApp"
                            onMouseMove={(e) => handleMouseMove(e, "WhatsApp")}
                            onMouseLeave={handleMouseLeave}
                        >
                            <i className="fab fa-whatsapp"></i>
                        </a>
                        <a
                            href="https://www.instagram.com/mr._.anil_kumar"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="social-link"
                            aria-label="Instagram"
                            onMouseMove={(e) => handleMouseMove(e, "Instagram")}
                            onMouseLeave={handleMouseLeave}
                        >
                            <i className="fab fa-instagram"></i>
                        </a>
                        <span ref={tooltipRef} className="hover-info"></span>
                    </div>
                </div>
                <form ref={formRef} className="contact-form" onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="name" className="form-label">Your Name</label>
                        <input type="text" id="name" name="name" placeholder="Enter Your Name" className="form-input" required></input>
                    </div>
                    <div className="form-group">
                        <label htmlFor="email" className="form-label">Your Email</label>
                        <input type="email" id="email" name="email" placeholder="Enter Your Email Address" className="form-input" required></input>
                    </div>
                    <div className="form-group">
                        <label htmlFor="subject" className="form-label">Subject</label>
                        <input type="text" id="subject" name="subject" placeholder="Enter Your Subject" className="form-input" required></input>
                    </div>
                    <div className="form-group">
                        <label htmlFor="message" className="form-label">Your Message</label>
                        <textarea id="message" name="message" placeholder="Write a Message. . ." className="form-textarea"></textarea>
                    </div>
                    <button type="submit" className="submit-button">Send Message</button>
                </form>
                {showThankYou && (
                    <>
                        <div className="thankyou-overlay"></div>
                        <div className="thankyou-popup">
                            <span>Thank you! Your message has been sent.</span>
                        </div>
                    </>
                )}
            </div>
        </section>
    );
}

export default Contact;