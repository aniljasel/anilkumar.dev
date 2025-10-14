import React, { useEffect } from 'react';

const WorkExperience = () => {
    useEffect(() => {
        // Animate timeline items when they come into view
        const timelineItems = document.querySelectorAll('.timeline-item');

        const isInViewport = (element) => {
            const rect = element.getBoundingClientRect();
            return (
                rect.top >= 0 &&
                rect.left >= 0 &&
                rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
                rect.right <= (window.innerWidth || document.documentElement.clientWidth)
            );
        };

        const animateOnScroll = () => {
            timelineItems.forEach(item => {
                if (isInViewport(item) && !item.classList.contains('visible')) {
                    item.classList.add('visible');
                }
            });
        };

        // Run animation check on scroll
        window.addEventListener('scroll', animateOnScroll);
        // Initial check on load
        animateOnScroll();

        // Cleanup event listener on unmount
        return () => {
            window.removeEventListener('scroll', animateOnScroll);
        };
    }, []);

    return (
        <section className="section" id="experience">
            <h2 className="section-title">Work Experience</h2>
            <div className="timeline">
                <div className="timeline-item">
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
                </div>
                <div className="timeline-item">
                    <div className="timeline-content">
                        <div className="timeline-date">---- - ----</div>
                        <h3 className="timeline-title">------------------</h3>
                        <p className="timeline-desc">
                            ------------------------------------------------------------------------------------
                        </p>
                    </div>
                </div>
                <div className="timeline-item">
                    <div className="timeline-content">
                        <div className="timeline-date">---- - ----</div>
                        <h3 className="timeline-title">------------------</h3>
                        <p className="timeline-desc">
                            ------------------------------------------------------------------------------------
                        </p>
                    </div>
                </div>
                <div className="timeline-item">
                    <div className="timeline-content">
                        <div className="timeline-date">---- - ----</div>
                        <h3 className="timeline-title">------------------</h3>
                        <p className="timeline-desc">
                            ------------------------------------------------------------------------------------
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WorkExperience;
