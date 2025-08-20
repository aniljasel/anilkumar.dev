import about from "../assests/media/about.jpg"

function About() {
    return (
        <section className="section" id="about">
            <h2 className="section-title">About Me</h2>
            <div className="about-content">
                <div className="about-text">
                    <p>I'm a passionate full-stack developer with 2+ years of experience building web applications. I
                        specialize in JavaScript technologies across the whole stack (React, HTML5, CSS3, MYSQL).</p>
                    <p>My approach combines technical expertise with creative problem-solving to deliver high-quality,
                        scalable solutions that meet both business and user needs.</p>
                    <p>When I'm not coding, you can find me contributing to open-source projects, exploring new
                        technologies.</p>
                    <div className="skills-container" style={{marginTop: '30px'}}>
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
                    <img src={about} alt="Developer working"></img>
                </div>
            </div>
            <div className="floating-icons">
                <i className="fab fa-html5 floating-icon" style={{ top: '20%', left: '10%', animationDelay: '0s' }}></i>
                <i className="fab fa-css3-alt floating-icon" style={{ top: '30%', left: '80%', animationDelay: '1s' }}></i>
                <i className="fab fa-js floating-icon" style={{ top: '70%', left: '15%', animationDelay: '2s' }}></i>
                <i className="fab fa-react floating-icon" style={{ top: '60%', left: '70%', animationDelay: '3s' }}></i>
                <i className="fab fa-node-js floating-icon" style={{ top: '80%', left: '85%', animationDelay: '4s' }}></i>
            </div>
        </section>
    )
}

export default About;
