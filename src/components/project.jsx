import React, { useState } from 'react';
import project1 from '../assests/media/schedule-manager.png';
import project2 from '../assests/media/paying-guest.png';

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
            category: 'frontend'
        },
        {
            id: 2,
            title: 'Paying Guest',
            description: 'This Hostel Management System allows you to easily manage room allocations, tenant details, and update or delete user data in real time.',
            tags: ['HTML5', 'CSS', 'React', 'JavaScirpt', 'Node', 'MongoDB'],
            image: project2,
            demoLink: 'https://paying-guest-smoky.vercel.app',
            codeLink: 'https://github.com/AU-Teams/paying-guest',
            category: 'frontend'
        },
        {
            id: 3,
            title: 'Social Media Analytics',
            description: 'A dashboard that aggregates and visualizes social media metrics across multiple platforms with customizable reports.',
            tags: ['Next.js', 'Python', 'D3.js', 'AWS'],
            image: 'https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1064&q=80',
            demoLink: '#',
            codeLink: '#',
            category: 'backend'
        }
    ];

    const categories = ['all', 'frontend', 'backend', 'fullstack'];

    const handleFilterChange = (category) => {
        setFilter(category);
    };

    const filteredProjects = filter === 'all' ? projects : projects.filter(project => project.category === filter);

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
