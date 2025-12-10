import React, { useState } from 'react';
import project1 from '../assests/media/schedule-manager.png';
import project2 from '../assests/media/Personal-Desktop.png';
import project3 from '../assests/media/cyberfication-3d-site.png';
import project4 from '../assests/media/paying-guest.png';
import project5 from '../assests/media/DPDigitalAgency.png';
import project6 from '../assests/media/Music-Player.png';
import project7 from '../assests/media/Snapzy.png';
import project8 from '../assests/media/load-project.png';
import project9 from '../assests/media/PoornimaBackbenchers.png'

import projectF1 from '../assests/media/Portfolio-F.png'

const Project = () => {
    const [filter, setFilter] = useState('all');

    const projects = [
        {
            id: 9,
            title: 'poornima-backbenchers',
            description: '',
            tags: ['HTML5', 'CSS', 'React', 'JavaScript', 'Supabase'],
            image: project9,
            demoLink: 'https://poornima-backbenchers.vercel.app/',
            codeLink: 'https://github.com/aniljasel/poornima-backbenchers',
            category: ['fullstack', 'backend']
        },
        {
            id: 1,
            title: 'Schedule Manager',
            description: 'Schedule Manager is the ultimate solution for individuals and teams looking to optimize their time management. Empower yourself with this essential tool for success!',
            tags: ['HTML5', 'CSS', 'React', 'JavaScript', 'Firebase'],
            image: project1,
            demoLink: 'https://schedule-manager-psi.vercel.app',
            codeLink: 'https://github.com/aniljasel/Schedule-Manager',
            category: ['fullstack', 'backend']
        },
        {
            id: 2,
            title: 'Personal Desktop',
            description: 'This project is a unique and interactive portfolio website designed to look and function like a desktop operating system. It showcases my technical skills and projects within a creative and engaging user interface.',
            tags: ['HTML5', 'CSS', 'React', 'JavaScript', 'API', 'Tailwind CSS'],
            image: project2,
            demoLink: 'https://personal-desktop.vercel.app/',
            codeLink: 'https://github.com/aniljasel/Personal-Desktop',
            category: ['frontend']
        },
        {
            id: 3,
            title: 'Cyberfication 3D Site',
            description: 'This is an interactive website that showcases a unique 3D scroll animation experience built with modern web technologies. Here are the key features:',
            tags: ['HTML5', 'CSS', 'JavaScript', 'Three.js', 'Canvas'],
            image: project3,
            demoLink: 'https://aniljasel.github.io/cyberfication-3d-site/',
            codeLink: 'https://github.com/aniljasel/cyberfication-3d-site',
            category: ['3D Website', 'frontend']
        },
        {
            id: 4,
            title: 'Paying Guest',
            description: 'This Hostel Management System allows you to easily manage room allocations, tenant details, and update or delete user data in real time.',
            tags: ['HTML5', 'CSS', 'React', 'JavaScript', 'Node', 'MongoDB'],
            image: project4,
            demoLink: 'https://paying-guest-smoky.vercel.app',
            codeLink: 'https://github.com/AU-Teams/paying-guest',
            category: ['fullstack', 'backend']
        },
        {
            id: 5,
            title: 'DPDigitalAgency',
            description: 'Developed a responsive website for DP Creatives showcasing their digital marketing, SEO, and web development services with a focus on enhancing brand presence and client engagement.',
            tags: ['HTML5', 'CSS', 'JavaScript'],
            image: project5,
            demoLink: 'https://aniljasel.github.io/DPDigitalAgency',
            codeLink: 'https://github.com/aniljasel/DPDigitalAgency',
            category: ['frontend']
        },
        {
            id: 6,
            title: 'Music Player',
            description: 'Developed a responsive web-based music player that allows users to listen to their favorite songs, play playlist songs, and control playback with an intuitive interface. Incorporated features such as play, pause, skip, and volume control to enhance user experience.',
            tags: ['HTML5', 'CSS', 'JavaScript', 'API'],
            image: project6,
            demoLink: 'https://aniljasel.github.io/Music_Player/',
            codeLink: 'https://github.com/aniljasel/Music_Player',
            category: ['frontend']
        },
        {
            id: 7,
            title: 'Snapzy',
            description: 'Snapzy is a modern, neon-themed YouTube-style video streaming web application built with a focus on UI aesthetics, responsiveness, and real-time video playback. The platform replicates the core features of YouTube including video search, playback controls.',
            tags: ['HTML5', 'CSS', 'JavaScript', 'API'],
            image: project7,
            demoLink: 'https://aniljasel.github.io/Snapzy',
            codeLink: 'https://github.com/aniljasel/Snapzy',
            category: ['frontend']
        },
        // Figma Projects
        {
            id: 8,
            title: 'DevPortfolio',
            description: 'DevPortfolio is a sleek and modern portfolio design created using Figma and Spline. It features a clean layout, interactive 3D elements, and a user-friendly interface to showcase projects and skills effectively.',
            tags: ['Figma', 'Spline'],
            image: projectF1,
            demoLink: 'https://small-rain-3369.animaapp.io',
            codeLink: 'https://www.figma.com/design/pDvu0s8PeauIAAmEWtZDxZ/DevPortfolio?node-id=0-1&t=3YTrbZd73GH1qLGJ-1',
            category: ['figma']
        },
        {
            id: 9,
            title: 'Upcoming Project',
            description: <><div className="skeleton long"></div><br /><div className="skeleton long"></div><br /><div className="skeleton long"></div><br /><div className="skeleton short"></div></>,
            tags: <div className="skeleton long"></div>,
            image: project8,
            demoLink: '#',
            codeLink: '#',
            category: []
        }
    ];

    const categories = ['all', 'frontend', 'backend', 'fullstack', '3D Website', 'figma'];

    const handleFilterChange = (category) => {
        setFilter(category);
    };

    const filteredProjects = filter === 'all'
        ? projects
        : projects.filter(project => project.category.includes(filter));

    return (
        <section className="section" id="projects">
            <h2 className="section-title">My Projects</h2>
            {/* Project Filter Buttons */}
            <div className="project-filter">
                {categories.map((category) => (
                    <button
                        key={category}
                        className={`filter-btn ${filter === category ? 'active' : ''}`}
                        onClick={() => handleFilterChange(category)} >
                        {category.charAt(0).toUpperCase() + category.slice(1)}
                    </button>
                ))}
            </div>
            <div className="projects-container">
                {filteredProjects.map(project => (
                    <div className="project-card" key={project.id}>
                        <div className="project-image">
                            <img src={project.image} alt={project.title} />
                        </div>
                        <div className="project-info">
                            <h3 className="project-title">{project.title}</h3>
                            <p className="project-description">{project.description}</p>
                            <div className="project-tags">
                                {Array.isArray(project.tags) && project.tags.map((tag, index) => (
                                    <span className="project-tag" key={`${project.id}-tag-${index}`}>{tag}</span>
                                ))}
                            </div>
                            <div className="project-links">
                                {project.demoLink && typeof project.demoLink === 'string' && (
                                    <a href={project.demoLink} className="project-link" target="_blank" rel="noopener noreferrer">
                                        <i className="fas fa-external-link-alt"></i> Live Demo
                                    </a>
                                )}
                                {project.codeLink && typeof project.codeLink === 'string' && (
                                    <a href={project.codeLink} className="project-link" target="_blank" rel="noopener noreferrer">
                                        <i className="fab fa-github"></i> View Code
                                    </a>
                                )}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Project;
