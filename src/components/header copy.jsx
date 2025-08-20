import { Link } from "react-router-dom";
import React from 'react';

function Header() {
  return (
    <>
      {/* Desktop Header */}
      <header className="desktop-header">
        <Link to='/' className="logo">DEV<span>PORTFOLIO</span></Link>
        <nav className="desktop-nav">
          <Link to="/">Home</Link>
          <Link to="about">About</Link>
          <Link to="skills">Skills</Link>
          <Link to="project">Projects</Link>
          <Link to="resume">Experience</Link>
          <Link to="contact">Contact</Link>
        </nav>
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
        <Link to="contact" className="nav-icon">
          <i className="fas fa-envelope"></i>
          <span className="nav-text">Contact</span>
        </Link>
      </nav>
    </>
  );
}

export default Header;
