import React, { useEffect, useState } from 'react';
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

            {/* {!isChatOpen && (
            <div className="chatbot-toggle" onClick={toggleChat} aria-label="Toggle Chatbot" onMouseMove={(e) => handleMouseMove(e, "Chatbot")} onMouseLeave={handleMouseLeave} >
                <i className="fas fa-robot"></i>
            </div>
            )} */}
            {isChatOpen && (
                <div className="chatbot-wrapper">
                    <Chatbot onClose={() => setIsChatOpen(false)} />
                </div>
            )}

            <div className="theme-toggle" onClick={toggleTheme} aria-label="Toggle theme" onMouseMove={(e) => handleMouseMove(e, "Theme")} onMouseLeave={handleMouseLeave}>
                {isLightTheme ? (
                    <i className="fas fa-sun"></i>
                ) : (
                    <i className="fas fa-moon"></i>
                )}
            </div>
            <span 
                ref={tooltipRef} 
                className="tooltip-footer" 
                style={{ display: isChatOpen && activeTooltip === "Chatbot"
                    ? "none"
                    : activeTooltip
                    ? "flex"
                    : "none" }}
            >
                {activeTooltip}
            </span>
        </>
    );
}

export default Footer;