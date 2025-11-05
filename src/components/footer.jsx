import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Chatbot from './chatbot';
import Tooltip from './Tooltip';

function Footer() {
    // Hover effect text
    const { tooltipRef } = Tooltip();
    const [activeTooltip, setActiveTooltip] = useState(null);

    const handleMouseMove = (e, label) => {
        setActiveTooltip(label);
        if (tooltipRef.current) {
            tooltipRef.current.style.left = `${e.clientX + 10}px`;
            tooltipRef.current.style.top = `${e.clientY - 30}px`;
            tooltipRef.current.textContent = label;
            tooltipRef.current.style.opacity = 1;
        }
    };

    const handleMouseLeave = () => {
        setActiveTooltip(null);
        if (tooltipRef.current) {
            tooltipRef.current.style.opacity = 0;
        }
    };

    // Theme Button
    const [isLightTheme, setIsLightTheme] = useState(false);
    const toggleTheme = () => setIsLightTheme(prev => !prev);

    // Chatbot Toggle
    const [isChatOpen, setIsChatOpen] = useState(false);
    const toggleChat = () => {
        setIsChatOpen(prev => !prev);
    };

    useEffect(() => {
        document.body.classList.toggle('light-theme', isLightTheme);
    }, [isLightTheme]);

    return (
        <>
            <footer>
                <div className='footer-container'>
                    <div className='footer-left'>
                        <Link to='/' className="logo"><span>DEV</span>PORTFOLIO</Link>
                        <div className="footer-social-links">
                            <a
                                href="https://github.com/aniljasel"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="social-link"
                                aria-label="GitHub"
                                onMouseMove={e => handleMouseMove(e, "GitHub")}
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
                                onMouseMove={e => handleMouseMove(e, "LinkedIn")}
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
                                onMouseMove={e => handleMouseMove(e, "WhatsApp")}
                                onMouseLeave={handleMouseLeave}
                            >
                                <i className="fab fa-whatsapp"></i>
                            </a>
                            <a
                                href="https://codepen.io/aniljasel"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="social-link"
                                aria-label="Codepen"
                                onMouseMove={e => handleMouseMove(e, "Codepen")}
                                onMouseLeave={handleMouseLeave}
                            >
                                <i className="fab fa-codepen"></i>
                            </a>
                            {/* <a 
                                    href="https://medium.com/@aniljasel" 
                                    target='_blank' 
                                    rel="noopener noreferrer"
                                    className="social-link" 
                                    aria-label="Medium"
                                    onMouseMove={(e) => handleMouseMove(e, "Medium")}
                                    onMouseLeave={handleMouseLeave}
                                >
                                    <i className="fab fa-medium-m"></i>
                                </a> */}
                        </div>
                        <p className="copyright">© 2025 Anil Developer. All rights reserved.</p>
                    </div>
                    <div className='footer-right'>
                        <div className='footer-links'>
                            <h3>Site Map</h3>
                            <nav className='nav-links'>
                                <Link to="/">Home</Link>
                                <Link to="about">About</Link>
                                <Link to="skills">Resume</Link>
                            </nav>
                        </div>
                        <div className='footer-links'>
                            <h3>Site Map</h3>
                            <nav className='nav-links'>
                                <Link to="project">Projects</Link>
                                <Link to="experience">Experience</Link>
                                <Link to="contact">Contact</Link>
                            </nav>
                        </div>
                        <div className='footer-links'>
                            <h3>Get in touch</h3>
                            <div className="contact-row">
                                <i className="fas fa-envelope"></i>
                                <a href="mailto:anilkumar.dev7834@gmail.com" className='email-link' onMouseMove={e => handleMouseMove(e, "Email")} onMouseLeave={handleMouseLeave}>anilkumar.dev7834@gmail.com</a>
                            </div>
                            <div className="contact-row">
                                <i className="fas fa-map-marker-alt"></i>
                                <span className="location-text" onMouseMove={e => handleMouseMove(e, "Location")} onMouseLeave={handleMouseLeave}>Jaipur, Rajasthan, India</span>
                            </div>
                            <div className='contact-row'>
                                <i className='fas fa-phone-alt'></i>
                                <a href="tel:+916378346576" className='phone-link' onMouseMove={e => handleMouseMove(e, "Phone")} onMouseLeave={handleMouseLeave}>+91 637-834-6576</a>
                            </div>
                        </div>
                    </div>    
                </div>
            </footer >

            {/* {!isChatOpen && (
                <div className="chatbot-toggle" onClick={toggleChat} aria-label="Toggle Chatbot" onMouseMove={(e) => handleMouseMove(e, "Chatbot")} onMouseLeave={handleMouseLeave} >
                    <i className="fas fa-robot"></i>
                </div>
            )
            }
            {
                isChatOpen && (
                    <div className="chatbot-wrapper">
                        <Chatbot onClose={() => setIsChatOpen(false)} />
                    </div>
                )
            } */}

            <div className="Whatsapp-toggle" aria-label="Toggle whatsapp">
                <a href="https://wa.me/916378346576" target="_blank"><i className="fab fa-whatsapp"></i></a>
            </div>

            <div className="theme-toggle" onClick={toggleTheme} aria-label="Toggle theme">
                {isLightTheme ? (
                    <i className="fas fa-sun"></i>
                ) : (
                    <i className="fas fa-moon"></i>
                )}
            </div>
            <span
                ref={tooltipRef}
                className="tooltip-footer"
                style={{
                    display: isChatOpen && activeTooltip === "Chatbot"
                        ? "none"
                        : activeTooltip
                            ? "flex"
                            : "none"
                }}
            >
                {activeTooltip}
            </span>
        </>
    );
}

export default Footer;