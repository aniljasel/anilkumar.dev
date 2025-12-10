import React from 'react';
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";

const ParticleBackground = () => {
    const particlesInit = async (engine) => {
        await loadSlim(engine);
    };

    const particlesLoaded = async (container) => {
        console.log("Particles loaded", container);
    };

    return (
        <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', zIndex: -1 }}>
            <Particles
                id="tsparticles"
                init={particlesInit}
                loaded={particlesLoaded}
                options={{
                    background: {
                        color: {
                            value: "var(--dark)",
                        },
                    },
                    fpsLimit: 120,
                    interactivity: {
                        events: {
                            onClick: {
                                enable: true,
                                mode: "push",
                            },
                            onHover: {
                                enable: true,
                                mode: "grab",
                            },
                            resize: true,
                        },
                        modes: {
                            push: {
                                quantity: 4,
                            },
                            // Disabled grab for performance
                            grab: {
                                distance: 100, // Reduced distance
                                line_linked: {
                                    opacity: 1,
                                },
                            },
                        },
                    },
                    particles: {
                        color: {
                            value: "#00f7ff",
                        },
                        links: {
                            color: "#00f7ff",
                            distance: 120, // Reduced distance
                            enable: true,
                            opacity: 0.2,
                            width: 1,
                        },
                        move: {
                            direction: "none",
                            enable: true,
                            outModes: {
                                default: "out",
                            },
                            random: true,
                            speed: 0.6, // Slightly slower
                            straight: false,
                        },
                        number: {
                            density: {
                                enable: true,
                                area: 1000, // Increased area (fewer particles per pixel)
                            },
                            value: 40, // Reduced from 80
                        },
                        opacity: {
                            value: 0.3,
                            random: true,
                        },
                        shape: {
                            type: "circle",
                        },
                        size: {
                            value: 3,
                            random: true,
                        },
                    },
                    detectRetina: true,
                }}
            />
        </div>
    );
};

export default ParticleBackground;
