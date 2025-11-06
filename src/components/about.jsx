import React from "react";
import Spline from "@splinetool/react-spline";

export default function About() {
    return (
        <section className="section" id="about">
            <h2 className="section-title">About Me</h2>
            <div className="about-grid">
                <div className="about-text">
                    <p>I'm a passionate full-stack developer with 2+ years of experience building web applications. I specialize in JavaScript technologies across the whole stack (React, HTML5, CSS3, MySQL).</p>
                    <p>My approach combines technical expertise with creative problem-solving to deliver high-quality, scalable solutions that meet both business and user needs.</p>
                    <p>When I'm not coding, you can find me contributing to open-source projects and exploring new technologies.</p>
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
                <div className="about-3d">
                    <div className="spline-wrapper scale-lg">
                        <Spline
                        scene="https://prod.spline.design/cb0LAzJreyf8vODd/scene.splinecode"
                        className="spline-canvas"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
