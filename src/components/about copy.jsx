import React, { Suspense, useRef, useState, useEffect } from "react";
import about from "../assests/media/about.jpg";
const Spline = React.lazy(() => import("@splinetool/react-spline"));

function About() {
    const [loaded, setLoaded] = useState(false);
    const ref = useRef(null);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;
        const io = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setVisible(true);
                    io.disconnect();
                }
            },
            { threshold: 0.2 }
        );
        io.observe(el);
        return () => io.disconnect();
    }, []);

    return (
        <section className="about-section" id="about" ref={ref}>
            <h2 className="section-title">About Me</h2>
            <div className="about-grid">
                <div className="about-text">
                    <p>
                        I'm a passionate full-stack developer with 2+ years of experience building web applications. I specialize in JavaScript technologies across the whole stack (React, HTML5, CSS3, MYSQL).
                    </p>
                    <p>
                        My approach combines technical expertise with creative problem-solving to deliver high-quality, scalable solutions that meet both business and user needs.
                    </p>
                    <p>
                        When I'm not coding, you can find me contributing to open-source projects, exploring new technologies.
                    </p>
                    <div className="skills-container">
                        <div className="skill-card">
                            <div className="skill-icon"><i className="fas fa-code"></i></div>
                            <div className="skill-name">Clean Code</div>
                        </div>
                        <div className="skill-card">
                            <div className="skill-icon"><i className="fas fa-lightbulb"></i></div>
                            <div className="skill-name">Problem Solving</div>
                        </div>
                        <div className="skill-card">
                            <div className="skill-icon"><i className="fas fa-users"></i></div>
                            <div className="skill-name">Teamwork</div>
                        </div>
                    </div>
                </div>
                <div className="about-image">
                    {!loaded && <img src={about} alt="developer placeholder" className="about-fallback" loading="lazy" />}
                    {visible && (
                        <Suspense fallback={<div className="spline-fallback">Loading 3D…</div>}>
                            <Spline
                                scene="https://prod.spline.design/cb0LAzJreyf8vODd/scene.splinecode"
                                onLoad={() => setLoaded(true)}
                                className="spline-canvas"
                            />
                        </Suspense>
                    )}
                </div>
            </div>
            <div className="floating-icons">
                <i className="fab fa-html5 floating-icon icon1"></i>
                <i className="fab fa-css3-alt floating-icon icon2"></i>
                <i className="fab fa-js floating-icon icon3"></i>
                <i className="fab fa-react floating-icon icon4"></i>
                <i className="fab fa-node-js floating-icon icon5"></i>
            </div>
        </section>
    );
}

export default About;




.section {
    padding: 100px 5%;
    position: relative;
}

.section-title {
    font-size: 2.5rem;
    margin-bottom: 50px;
    text-align: center;
    position: relative;
    display: inline-block;
    left: 50%;
    transform: translateX(-50%);
}

.section-title::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 0;
    width: 100%;
    height: 3px;
    background: linear-gradient(90deg, var(--primary), var(--accent));
}

.about-content {
    display: flex;
    align-items: center;
    gap: 50px;
    margin-top: 50px;
}

.about-text {
    flex: 1;
}

.about-text p {
    margin-bottom: 20px;
    line-height: 1.6;
}

.about-image {
    flex: 1;
    position: relative;
    height: 400px;
    border-radius: 10px;
    overflow: hidden;
    box-shadow: 0 20px 30px rgba(0, 0, 0, 0.3);
}

.about-image::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
}

.about-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s ease;
    border-radius: 10px;
    border: 1.5px solid var(--glass-border);
}

.about-fallback {
  position: absolute;
  right: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transform-origin: center;
  transition: opacity 300ms ease;
}

.spline-canvas {
  width: 100%;
  height: 100%;
  display: block;
}

.spline-fallback {
  width: 100%;
  height: 100%;
  display: grid;
  place-items: center;
  color: var(--light);
  font-weight: 600;
}