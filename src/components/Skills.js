import React from 'react';
import { motion } from 'framer-motion';
import { skillsData } from '../data/portfolioData';

const Skills = () => {
    return (
        <section className="skills" id="skills">
            <div className="skills-container">
                <motion.h2
                    className="section-title"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true, amount: 0.3 }}
                >
                    Technical Arsenal
                </motion.h2>
                <motion.p
                    style={{ fontSize: '1.2rem', color: '#b0b0b0', marginBottom: '20px' }}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    viewport={{ once: true, amount: 0.3 }}
                >
                    Also known as <strong style={{ color: '#64ffda' }}>EL-Joy</strong> in the Slack-verse
                </motion.p>

                <div className="skills-categories">
                    {skillsData.map((category, index) => (
                        <motion.div
                            className="skill-category"
                            key={category.category}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.1 * index }}
                            viewport={{ once: true, amount: 0.3 }}
                        >
                            <h3 className="category-title">{category.category}</h3>
                            <div className="skills-grid">
                                {category.skills.map((skill) => (
                                    <motion.div
                                        className="skill-item"
                                        key={skill.name}
                                        whileHover={{ translateY: -5, scale: 1.05, boxShadow: '0 15px 30px rgba(100, 255, 218, 0.2)' }}
                                    >
                                        <img src={skill.icon} alt={skill.name} className="skill-icon" />
                                        <div className="skill-name">{skill.name}</div>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
