import React from 'react';
import { motion } from 'framer-motion';
import { contactLinks } from '../data/portfolioData';

const Contact = () => {
    return (
        <section className="contact" id="contact">
            <div className="contact-container">
                <motion.h2
                    className="section-title"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true, amount: 0.3 }}
                >
                    Get In Touch
                </motion.h2>
                <motion.p
                    style={{ fontSize: '1.2rem', color: '#b0b0b0', marginBottom: '40px' }}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    viewport={{ once: true, amount: 0.3 }}
                >
                    Have a project in mind or just want to say hi? Feel free to reach out!
                </motion.p>

                <div className="contact-links">
                    {contactLinks.map((link, index) => (
                        <motion.a
                            href={link.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="contact-link"
                            key={link.name}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.1 * index }}
                            viewport={{ once: true, amount: 0.3 }}
                            whileHover={{ translateY: -5, boxShadow: '0 15px 30px rgba(100, 255, 218, 0.2)', background: 'rgba(100, 255, 218, 0.1)' }}
                        >
                            <i className={link.icon}></i> {link.name}
                        </motion.a>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Contact;