import React from 'react';
import { motion } from 'framer-motion';
import { getYearsOfExperience } from '../data/portfolioData';

const Hero = () => {
    return (
        <section className="hero" id="home">
            <div className="hero-content">
                <motion.h1
                    initial={{ opacity: 0, y: 60 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                >
                    JEREMIAH ERINOLA
                </motion.h1>
                <motion.p
                    className="subtitle"
                    initial={{ opacity: 0, y: 60 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
                >
                    Senior Fullstack Mobile Engineer
                </motion.p>
                <motion.p
                    className="description"
                    initial={{ opacity: 0, y: 60 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
                >
                    {`${getYearsOfExperience()} years crafting scalable Flutter & Node.js applications that connect millions of users worldwide`}
                </motion.p>
                <motion.a
                    href="#contact"
                    className="cta-button"
                    initial={{ opacity: 0, y: 60 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: "easeOut", delay: 0.6 }}
                    whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(100, 255, 218, 0.3)" }}
                >
                    {"Let's Build Something Amazing"}
                </motion.a>
            </div>
        </section>
    );
};

export default Hero;
