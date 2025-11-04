import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";

function Header() {
    // Theme Toggle State
    const [isLightTheme, setIsLightTheme] = useState(false);
    const toggleTheme = () => {
        setIsLightTheme(prev => !prev);
    };
    useEffect(() => {
        document.body.classList.toggle('light-theme', isLightTheme);
    }, [isLightTheme]);
    return (
        <header className="header">
            <Link to='/' className="logo"><span>DEV</span>PORTFOLIO</Link>
            <nav className='nav-links'>
                <Link to="/">Home</Link>
                <Link to="about">About</Link>
                <Link to="skills">Skills</Link>
                <Link to="project">Projects</Link>
                <Link to="experience">Experience</Link>
                <Link to="contact">Contact</Link>
            </nav>
            {/* Mobile Theme-Button */}
            <div className="mobile-theme-toggle" onClick={toggleTheme} aria-label="Toggle theme">
                {isLightTheme ? (
                    <i className="fas fa-sun"></i>
                ) : (
                    <i className="fas fa-moon"></i>
                )}
            </div>
        </header>
    );
}

export default Header;
