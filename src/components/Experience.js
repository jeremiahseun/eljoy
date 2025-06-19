import React from 'react';
import { motion } from 'framer-motion';
import { experienceData } from '../data/portfolioData';

const Experience = () => {
    return (
        <section className="experience" id="experience">
            <div className="skills-container">
                <motion.h2
                    className="section-title"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true, amount: 0.3 }}
                >
                    Work Experience
                </motion.h2>

                <div className="timeline">
                    {experienceData.map((item, index) => (
                        <motion.div
                            className="timeline-item"
                            key={item.company}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.1 * index }}
                            viewport={{ once: true, amount: 0.3 }}
                        >
                            <motion.div
                                className="timeline-content"
                                whileHover={{ translateY: -5, boxShadow: '0 20px 40px rgba(100, 255, 218, 0.1)' }}
                            >
                                <div className="timeline-date">{item.date}</div>
                                <h3 className="timeline-title">{item.title}</h3>
                                <p className="timeline-company">{item.company}</p>
                                <p className="timeline-description">{item.description}</p>
                            </motion.div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;