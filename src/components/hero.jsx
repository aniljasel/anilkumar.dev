import { Link } from "react-router-dom";
import React, { useEffect, useState } from 'react';
import Loader from "./loader";

function Hero() {
    const [typedText, setTypedText] = useState('');
    const fullText = "Hi, I'm Anil Kumar";

    useEffect(() => {
        let i = 0;
        const typeWriter = () => {
            if (i < fullText.length) {
                setTypedText(fullText.substring(0, i + 1));
                i++;
                setTimeout(typeWriter, Math.random() * 100 + 50);
            }
        };

        const timer = setTimeout(typeWriter, 1000);
        
        return () => clearTimeout(timer);
    }, []);

    return (
        <section className="hero" id="home">
            <div className="hero-content">
                <h1 className="fade-in">{typedText}</h1>
                <h2 className="fade-in delay-1">Full Stack Web Developer</h2>
                <p className="fade-in delay-2">
                    I build exceptional digital experiences with modern technologies and innovative solutions.
                </p>
                <Link to="contact" className="cta-button fade-in delay-3">Get In Touch</Link>
            </div>
            <div className="floating-icons">
                <i className="fab fa-html5 floating-icon" style={{ top: '20%', left: '10%', animationDelay: '0s' }}></i>
                <i className="fab fa-css3-alt floating-icon" style={{ top: '30%', left: '80%', animationDelay: '1s' }}></i>
                <i className="fab fa-js floating-icon" style={{ top: '70%', left: '15%', animationDelay: '2s' }}></i>
                <i className="fab fa-react floating-icon" style={{ top: '60%', left: '70%', animationDelay: '3s' }}></i>
                <i className="fab fa-node-js floating-icon" style={{ top: '80%', left: '85%', animationDelay: '4s' }}></i>
            </div>
            <div className="svg-frame">
                <Loader />
            </div>
        </section>
    );
}

export default Hero;
