import React, { useEffect } from 'react';
import ElectricBorderCard from './ElectricBorderCard';
import { Link } from 'react-router-dom';

const WorkExperience = () => {
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                        observer.unobserve(entry.target);
                    }
                });
            },
            {
                threshold: 0.2,
                rootMargin: "0px 0px -50px 0px"
            }
        );

        const items = document.querySelectorAll('.timeline-item');
        items.forEach(item => observer.observe(item));

        return () => observer.disconnect();
    }, []);

    return (
        <section className="section" id="experience">
            <h2 className="section-title">Work Experience</h2>
            <div className="timeline">
                <div className="timeline-item">
                    <div className="timeline-content">
                    <ElectricBorderCard>
                        <div className="timeline-date">May 2025 - Aug 2025</div>
                        <h3 className="timeline-title">(MERN) Full Stack Developer</h3>
                        <p className="timeline-desc">
                            AU IGNITE - Future Skills Centre - Lead a team of 7 developers to build a React-based web application 'Schedule Manager'.
                        </p>
                        <p className="timeline-desc">
                            Learn more Technologies: MongoDB, ExpressJs, ReactJs, NodeJs, JavaScript.
                        </p>
                        {/* <Link to="project" className="Source-link">Live Demo</Link> */}
                    </ElectricBorderCard>
                    </div>
                </div>
                <div className="timeline-item">
                    <div className="timeline-content">
                        <ElectricBorderCard>
                        <div className="skeleton short"></div>
                        <div className="skeleton medium"></div>
                        <div className="skeleton long"></div>
                        <div className="skeleton long"></div>
                        </ElectricBorderCard>
                    </div>
                </div>
                <div className="timeline-item">
                    <div className="timeline-content">
                        <ElectricBorderCard>
                        <div className="skeleton short"></div>
                        <div className="skeleton medium"></div>
                        <div className="skeleton long"></div>
                        <div className="skeleton long"></div>
                        </ElectricBorderCard>
                    </div>
                </div>
                <div className="timeline-item">
                    <div className="timeline-content">
                        <ElectricBorderCard>
                        <div className="skeleton short"></div>
                        <div className="skeleton medium"></div>
                        <div className="skeleton long"></div>
                        <div className="skeleton long"></div>
                        </ElectricBorderCard>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WorkExperience;

