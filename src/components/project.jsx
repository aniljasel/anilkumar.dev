import React, { useState } from 'react';
import project1 from '../assests/media/schedule-manager.png';
import project2 from '../assests/media/paying-guest.png';
import project3 from '../assests/media/DPDigitalAgency.png';
import project4 from '../assests/media/Personal-Desktop.png';
import project5 from '../assests/media/Music-Player.png';
import project6 from '../assests/media/Snapzy.png';

const Project = () => {
    const [filter, setFilter] = useState('all');

    const projects = [
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
            title: 'Paying Guest',
            description: 'This Hostel Management System allows you to easily manage room allocations, tenant details, and update or delete user data in real time.',
            tags: ['HTML5', 'CSS', 'React', 'JavaScirpt', 'Node', 'MongoDB'],
            image: project2,
            demoLink: 'https://paying-guest-smoky.vercel.app',
            codeLink: 'https://github.com/AU-Teams/paying-guest',
            category: ['fullstack', 'backend']
        },
        {
            id: 3,
            title: 'DPDigitalAgency',
            description: 'Developed a responsive website for DP Creatives showcasing their digital marketing, SEO, and web development services with a focus on enhancing brand presence and client engagement.',
            tags: ['HTML5', 'CSS', 'JavaScirpt'],
            image: project3,
            demoLink: 'https://aniljasel.github.io/DPDigitalAgency',
            codeLink: 'https://github.com/aniljasel/DPDigitalAgency',
            category: ['frontend']
        },
        {
            id: 4,
            title: 'Personal Desktop',
            description: 'This project is a unique and interactive portfolio website designed to look and function like a desktop operating system. It showcases my technical skills and projects within a creative and engaging user interface.',
            tags: ['HTML5', 'CSS', 'React', 'JavaScirpt', 'API', 'Tailwind CSS'],
            image: project4,
            demoLink: 'https://personal-desktop.vercel.app/',
            codeLink: 'https://github.com/aniljasel/Personal-Desktop',
            category: ['frontend']
        },
        {
            id: 5,
            title: 'Music Player',
            description: 'Developed a responsive web-based music player that allows users to listen to their favorite songs, play playlist songs, and control playback with an intuitive interface. Incorporated features such as play, pause, skip, and volume control to enhance user experience.',
            tags: ['HTML5', 'CSS', 'JavaScirpt', 'API'],
            image: project5,
            demoLink: 'https://aniljasel.github.io/Music_Player/',
            codeLink: 'https://github.com/aniljasel/Music_Player',
            category: ['frontend']
        },
        {
            id: 6,
            title: 'Snapzy',
            description: 'Snapzy is a modern, neon-themed YouTube-style video streaming web application built with a focus on UI aesthetics, responsiveness, and real-time video playback. The platform replicates the core features of YouTube including video search, playback controls.',
            tags: ['HTML5', 'CSS', 'JavaScirpt', 'API'],
            image: project6,
            demoLink: 'https://aniljasel.github.io/Snapzy',
            codeLink: 'https://github.com/aniljasel/Snapzy',
            category: ['frontend']
        }
    ];

    const categories = ['all', 'frontend', 'backend', 'fullstack'];

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
                                {project.tags.map((tag, index) => (
                                    <span className="project-tag" key={index}>{tag}</span>
                                ))}
                            </div>
                            <div className="project-links">
                                <a href={project.demoLink} className="project-link" target='blank'><i className="fas fa-external-link-alt"></i> Live Demo</a>
                                <a href={project.codeLink} className="project-link" target='blank'><i className="fab fa-github"></i> View Code</a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Project;
