import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import Tooltip from './Tooltip';

function Footer() {
    // Hover effect text
    const { tooltipRef, handleMouseMove, handleMouseLeave } = Tooltip();
    // Theme Button
    const [isLightTheme, setIsLightTheme] = useState(false);
    const toggleTheme = () => setIsLightTheme(prev => !prev);

    useEffect(() => {
        document.body.classList.toggle('light-theme', isLightTheme);
    }, [isLightTheme]);

    return (
        <>
            <footer>
                <div className="social-links">
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
            </footer>
            <div className="theme-toggle" onClick={toggleTheme} aria-label="Toggle theme" onMouseMove={(e) => handleMouseMove(e, "Theme")} onMouseLeave={handleMouseLeave}>
                {isLightTheme ? (
                    <i className="fas fa-sun"></i>
                ) : (
                    <i className="fas fa-moon"></i>
                )}
            </div>
            <span ref={tooltipRef} className="tooltip-footer"></span>
        </>
    );
}

export default Footer;