import React from 'react';
import { motion } from 'framer-motion';
import { projectsData } from '../data/portfolioData';

const Projects = () => {
    return (
        <section className="projects" id="projects">
            <div className="projects-container">
                <motion.h2
                    className="section-title"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true, amount: 0.3 }}
                >
                    My Work
                </motion.h2>

                <div className="projects-grid">
                    {projectsData.map((project, index) => (
                        <motion.div
                            className="project-card"
                            key={project.title}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.1 * index }}
                            viewport={{ once: true, amount: 0.3 }}
                            whileHover={{ translateY: -10, boxShadow: '0 30px 60px rgba(100, 255, 218, 0.1)', background: 'rgba(255, 255, 255, 0.08)' }}
                        >
                            <h3 className="project-title">{project.title}</h3>
                            <p className="project-description">{project.description}</p>
                            <div className="project-tech">
                                {project.technologies.map((tech) => (
                                    <span key={tech} className="tech-tag">{tech}</span>
                                ))}
                            </div>
                            <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">
                                View Project &rarr;
                            </a>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;