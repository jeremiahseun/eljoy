import React from 'react';
import { motion } from 'framer-motion';

const Stats = () => {
    return (
        <section className="stats" id="about">
            <div className="stats-container">
                <motion.div
                    className="stat-item"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    viewport={{ once: true, amount: 0.3 }}
                >
                    <div className="stat-number">150K+</div>
                    <div className="stat-label">App Downloads</div>
                </motion.div>
                <motion.div
                    className="stat-item"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    viewport={{ once: true, amount: 0.3 }}
                >
                    <div className="stat-number">4.8★</div>
                    <div className="stat-label">Average Rating</div>
                </motion.div>
                <motion.div
                    className="stat-item"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    viewport={{ once: true, amount: 0.3 }}
                >
                    <div className="stat-number">35%</div>
                    <div className="stat-label">Crash Rate Reduction</div>
                </motion.div>
                <motion.div
                    className="stat-item"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    viewport={{ once: true, amount: 0.3 }}
                >
                    <div className="stat-number">5+</div>
                    <div className="stat-label">Years Experience</div>
                </motion.div>
            </div>
        </section>
    );
};

export default Stats;