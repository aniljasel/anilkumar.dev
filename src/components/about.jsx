import React, { Suspense, useRef, useState, useEffect } from "react";
import RevealOnScroll from './RevealOnScroll';
const Spline = React.lazy(() => import('@splinetool/react-spline'));

export default function About() {
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
        <section className="section" id="about" ref={ref}>
            <h2 className="section-title">About Me</h2>
            <div className="about-grid">
                <div className="about-text">
                    <RevealOnScroll>
                        <p>
                            I am a motivated <strong>Full Stack Web Developer</strong> based in <strong>Jaipur, Rajasthan</strong>.
                            With a strong foundation in the <strong>MERN stack</strong> (MongoDB, Express.js, React.js, Node.js),
                            I specialize in building responsive, user-friendly web applications that seamlessly blend functionality with modern aesthetics.
                        </p>
                    </RevealOnScroll>
                    <RevealOnScroll delay={0.2}>
                        <p>
                            Beyond the code, I have a keen eye for <strong>UI/UX design</strong> (Figma, Spline), allowing me to transform creative concepts into interactive digital experiences.
                            I recently completed an intensive 12-week Full Stack training at <strong>AU Ignite Future Skill Academy</strong>, where I led a team to build complex web solutions.
                        </p>
                    </RevealOnScroll>
                    <RevealOnScroll delay={0.4}>
                        <p>
                            Currently pursuing my <strong>BCA at Poornima University</strong>, I am passionate about solving real-world problems through clean code and continuous learning.
                        </p>
                    </RevealOnScroll>
                    <RevealOnScroll delay={0.6}>
                        <div className="skills-container">
                            <div className="skill-card">
                                <div className="skill-icon"><i className="fas fa-code"></i></div>
                                <div className="skill-name">MERN Stack</div>
                            </div>
                            <div className="skill-card">
                                <div className="skill-icon"><i className="fas fa-layer-group"></i></div>
                                <div className="skill-name">UI/UX Design</div>
                            </div>
                            <div className="skill-card">
                                <div className="skill-icon"><i className="fas fa-users"></i></div>
                                <div className="skill-name">Leadership</div>
                            </div>
                        </div>
                    </RevealOnScroll>

                    <RevealOnScroll delay={0.8}>
                        <div className="edu-exp-grid">
                            <div className="edu-card">
                                <h3>Education</h3>
                                <ul>
                                    <li>
                                        <strong>BCA (2023 - 2026)</strong>
                                        <p>Poornima University, Jaipur</p>
                                    </li>
                                    <li>
                                        <strong>Class XII (2021-2022)</strong>
                                        <p>Board of Secondary Education, Rajasthan</p>
                                    </li>
                                </ul>
                            </div>
                            <div className="edu-card">
                                <h3>Experience</h3>
                                <ul>
                                    <li>
                                        <strong>Full Stack Trainee (May - July 2025)</strong>
                                        <p>AU Ignite Future Skill Academy</p>
                                        <p className="description">Built 4+ MERN apps, led UI team.</p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </RevealOnScroll>
                </div>
                <div className="about-3d">
                    <div className="spline-wrapper scale-lg">
                        {visible && (
                            <Suspense fallback={<div style={{ color: 'white', textAlign: 'center', marginTop: '20%' }}>Loading 3D Model...</div>}>
                                <Spline
                                    scene="https://prod.spline.design/cb0LAzJreyf8vODd/scene.splinecode"
                                    className="spline-canvas"
                                    onLoad={() => setLoaded(true)}
                                />
                            </Suspense>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}
