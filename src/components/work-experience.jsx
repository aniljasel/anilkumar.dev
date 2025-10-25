import React, { useEffect } from 'react';
import ElectricBorder from './ElectricBorder';

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
                    <ElectricBorder>
                        <div className="timeline-content">
                            <div className="timeline-date">May 2025 - Aug 2025</div>
                            <h3 className="timeline-title">(MERN) Full Stack Developer</h3>
                            <p className="timeline-desc">
                                AU IGNITE - Future Skills Centre - Lead a team of 7 developers to build a React-based web application 'Schedule Manager'.
                            </p>
                            <p className="timeline-desc">
                                Learn more Technologies: MongoDB, ExpressJs, ReactJs, NodeJs, JavaScript.
                            </p>
                        </div>
                    </ElectricBorder>
                </div>
                <div className="timeline-item">
                    <ElectricBorder>
                    <div className="timeline-content">
                        <div className="timeline-date">---- - ----</div>
                        <h3 className="timeline-title">------------------</h3>
                        <p className="timeline-desc">
                            ------------------------------------------------------------------------------------
                        </p>
                    </div>
                    </ElectricBorder>
                </div>
                <div className="timeline-item">
                    <ElectricBorder>
                    <div className="timeline-content">
                        <div className="timeline-date">---- - ----</div>
                        <h3 className="timeline-title">------------------</h3>
                        <p className="timeline-desc">
                            ------------------------------------------------------------------------------------
                        </p>
                    </div>
                    </ElectricBorder>
                </div>
                <div className="timeline-item">
                    <ElectricBorder>
                    <div className="timeline-content">
                        <div className="timeline-date">---- - ----</div>
                        <h3 className="timeline-title">------------------</h3>
                        <p className="timeline-desc">
                            ------------------------------------------------------------------------------------
                        </p>
                    </div>
                    </ElectricBorder>
                </div>
            </div>
        </section>
    );
};

export default WorkExperience;

