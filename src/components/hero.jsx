import { Link, useNavigate } from "react-router-dom";
import React, { Suspense, lazy, useEffect, useState } from 'react';
const Loader = lazy(() => import('./loader.jsx'));
import CardSwap, { Card } from './CardSwap';
import About from "./about.jsx";
import UIUX from '../assests/media/UI-UX.png';
import Frontend from '../assests/media/Frontend.png';
import Backend from '../assests/media/Backend.png';

function Hero() {
    const navigate = useNavigate();
    const [typedText, setTypedText] = useState('');
    const fullText = "Hi, I'm Anil Kumar";

    const [flipText, setFlipText] = useState('Full Stack Web Developer');
    const [isFlipping, setIsFlipping] = useState(false);
    const flipOptions = ['UI/UX Designer'];
    useEffect(() => {
        let index = 0;
        const flipInterval = setInterval(() => {
            setIsFlipping(true);
            setFlipText("");
            setTimeout(() => {
                index = (index + 1) % (flipOptions.length + 1);
                setFlipText(index === 0 ? 'Full Stack Web Developer' : flipOptions[index - 1]);
                setIsFlipping(false);
            }, 300);
        }, 3000);
        return () => clearInterval(flipInterval);
    }, []);

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

    // logic for resume button
    const scrollToResume = (e) => {
        e.preventDefault();
        const el = document.getElementById('resume');
        if (el) {
            el.scrollIntoView({ behavior: 'smooth', block: 'start' });
            window.history.replaceState(null, '', '#resume');
            return;
        }
        navigate('/skills', { state: { scrollTo: 'resume' } });
    };

    return (
        <section className="hero" id="home">
            <section className="hero-container">
                <div className="hero-content">
                    <h1 className="fade-in">{typedText}</h1>
                    <h2 className="fade-in delay-1">
                        <span className={`flip-box${isFlipping ? ' flipping' : ''}`}>
                            <span className="flip-box-inner">{flipText}</span>
                        </span>
                    </h2>
                    <p className="fade-in delay-2">
                        I build exceptional digital experiences with modern technologies and innovative solutions.
                    </p>
                    <div className="hero-cta delay-3">
                        <Link to="contact" className="cta-button fade-in delay-3">Get In Touch</Link>
                        <a href="#resume" className="cta-button fade-in delay-3" onClick={scrollToResume}><i className="fas fa-download"></i>Resume</a>
                    </div>
                </div>
                <div className="floating-icons">
                    <i className="fab fa-html5 floating-icon" style={{ top: '20%', left: '10%', animationDelay: '0s' }}></i>
                    <i className="fab fa-css3-alt floating-icon" style={{ top: '30%', left: '80%', animationDelay: '1s' }}></i>
                    <i className="fab fa-js floating-icon" style={{ top: '70%', left: '15%', animationDelay: '2s' }}></i>
                    <i className="fab fa-react floating-icon" style={{ top: '60%', left: '70%', animationDelay: '3s' }}></i>
                    <i className="fab fa-node-js floating-icon" style={{ top: '80%', left: '85%', animationDelay: '4s' }}></i>
                </div>
                <Suspense fallback={<div style={{ width: 200, height: 200 }} aria-hidden />}>
                    <div className="svg-frame">
                        <Loader />
                    </div>
                </Suspense>
            </section>
            <About />
            <section className="section">
                <h2 className="section-title"> Stacked Interface </h2>
                <div className="card-section">
                    <div className="info-section">
                        <h2>Building that experiences are engineered to feel beautiful.</h2>
                        <p>From concept to code - I design and develop full-stack applications that feel modem, intħultive, and delightful.</p>
                        <p>Each layer tells a story - design, interaction, and performance.</p>
                    </div>
                    <CardSwap className='card-section'>
                        <Card>
                            <div className="card-header">
                                <i className="fas fa-laptop-code"><span>UI/UX</span></i>
                            </div>
                            <img src={UIUX} alt="" />
                        </Card>
                        <Card>
                            <div className="card-header">
                                <i className="fas fa-desktop"><span>Frontend</span></i>
                            </div>
                            <img src={Frontend} alt="" />
                        </Card>
                        <Card>
                            <div className="card-header">
                                <i className="fas fa-database"><span>Backend</span></i>
                            </div>
                            <img src={Backend} alt="" />
                        </Card>
                    </CardSwap>
                </div>
            </section>
        </section>
    );
}

export default Hero;
