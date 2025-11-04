import Resume from './resume';
import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function Skills() {
    const location = useLocation();

    useEffect(() => {
        const targetFromState = location.state && location.state.scrollTo;
        const targetFromHash = location.hash ? location.hash.replace('#', '') : null;
        const target = targetFromState || targetFromHash;
        if (!target) return;
        const tryScroll = () => {
            const el = document.getElementById(target);
            if (el) {
                el.scrollIntoView({ behavior: 'smooth', block: 'start' });
                window.history.replaceState(null, '', '/skills');
            } else {
                requestAnimationFrame(tryScroll);
            }
        };
        setTimeout(tryScroll, 60);
    }, [location]);


    return (
        <>
            <section className="section" id="skills">
                <h2 className="section-title">My Skills</h2>
                <div className="skills-container">
                    <div className="skill-card">
                        <div className="skill-icon"><i className="fab fa-html5"></i></div>
                        <div className="skill-name">HTML5</div>
                        <div className="skill-level">
                            <div className="skill-progress" style={{ width: '95%' }}></div>
                        </div>
                    </div>
                    <div className="skill-card">
                        <div className="skill-icon"><i className="fab fa-css3-alt"></i></div>
                        <div className="skill-name">CSS3</div>
                        <div className="skill-level">
                            <div className="skill-progress" style={{ width: '90%' }}></div>
                        </div>
                    </div>
                    <div className="skill-card">
                        <div className="skill-icon"><i className="fab fa-js"></i></div>
                        <div className="skill-name">JavaScript</div>
                        <div className="skill-level">
                            <div className="skill-progress" style={{ width: '90%' }}></div>
                        </div>
                    </div>
                    <div className="skill-card">
                        <div className="skill-icon"><i className="fa-solid fa-database"></i></div>
                        <div className="skill-name">MongoDB</div>
                        <div className="skill-level">
                            <div className="skill-progress" style={{ width: '85%' }}></div>
                        </div>
                    </div>
                    <div className="skill-card">
                        <div className="skill-icon"><i className="fa-brands fa-node-js"></i></div>
                        <div className="skill-name">ExpressJs</div>
                        <div className="skill-level">
                            <div className="skill-progress" style={{ width: '88%' }}></div>
                        </div>
                    </div>
                    <div className="skill-card">
                        <div className="skill-icon"><i className="fa-brands fa-node-js"></i></div>
                        <div className="skill-name">NodeJs</div>
                        <div className="skill-level">
                            <div className="skill-progress" style={{ width: '88%' }}></div>
                        </div>
                    </div>
                    <div className="skill-card">
                        <div className="skill-icon"><i className="fab fa-react"></i></div>
                        <div className="skill-name">ReactJs</div>
                        <div className="skill-level">
                            <div className="skill-progress" style={{ width: '80%' }}></div>
                        </div>
                    </div>
                    <div className="skill-card">
                        <div className="skill-icon"><i className="fas fa-database"></i></div>
                        <div className="skill-name">MySQL</div>
                        <div className="skill-level">
                            <div className="skill-progress" style={{ width: '85%' }}></div>
                        </div>
                    </div>
                    <div className="skill-card">
                        <div className="skill-icon"><i className="fas fa-server"></i></div>
                        <div className="skill-name">REST APIs</div>
                        <div className="skill-level">
                            <div className="skill-progress" style={{ width: '88%' }}></div>
                        </div>
                    </div>
                    <div className="skill-card">
                        <div className="skill-icon"><i className="fab fa-figma"></i></div>
                        <div className="skill-name">Figma</div>
                        <div className="skill-level">
                            <div className="skill-progress" style={{ width: '88%' }}></div>
                        </div>
                    </div>
                    <div className="skill-card">
                        <div className="skill-icon"><i className="fas fa-paint-brush"></i></div>
                        <div className="skill-name">Canva</div>
                        <div className="skill-level">
                            <div className="skill-progress" style={{ width: '88%' }}></div>
                        </div>
                    </div>
                    <div className="skill-card">
                        <div className="skill-icon"><i className="fa-brands fa-microsoft"></i></div>
                        <div className="skill-name">Ms-Office</div>
                        <div className="skill-level">
                            <div className="skill-progress" style={{ width: '88%' }}></div>
                        </div>
                    </div>
                </div>
            </section>
            <Resume />
        </>
    )
}

export default Skills;