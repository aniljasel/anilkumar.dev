import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";

function Header() {
    const [isLightTheme, setIsLightTheme] = useState(false);
        const toggleTheme = () => {
            setIsLightTheme(prev => !prev);
        };
        useEffect(() => {
            document.body.classList.toggle('light-theme', isLightTheme);
        }, [isLightTheme]);
    return (
        <>
            <header className="header">
                <Link to='/' className="logo">DEV<span>PORTFOLIO</span></Link>
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

            {/* Mobile Bottom Navigation */}
            <nav className="mobile-bottom-nav">
                <Link to="/" className="nav-icon">
                    <i className="fas fa-home"></i>
                    <span className="nav-text">Home</span>
                </Link>
                <Link to="about" className="nav-icon">
                    <i className="fas fa-user"></i>
                    <span className="nav-text">About</span>
                </Link>
                <Link to="skills" className="nav-icon">
                    <i className="fas fa-cogs"></i>
                    <span className="nav-text">Skills</span>
                </Link>
                <Link to="project" className="nav-icon">
                    <i className="fas fa-briefcase"></i>
                    <span className="nav-text">Projects</span>
                </Link>
                <Link to="experience" className="nav-icon">
                    <i className="fa-solid fa-award"></i>
                    <span className="nav-text">Experience</span>
                </Link>
                <Link to="contact" className="nav-icon">
                    <i className="fas fa-envelope"></i>
                    <span className="nav-text">Contact</span>
                </Link>
            </nav>
        </>
    );
}

export default Header;
