import React, { useEffect } from 'react';

const Particles = () => {
    useEffect(() => {
        const particlesContainer = document.getElementById('particles');
        if (!particlesContainer) return;

        const createParticle = () => {
            const particle = document.createElement('div');
            particle.className = 'particle';
            particlesContainer.appendChild(particle);

            const size = Math.random() * 3 + 1; // 1 to 4px
            const x = Math.random() * window.innerWidth;
            const y = Math.random() * window.innerHeight;
            const duration = Math.random() * 10 + 10; // 10 to 20 seconds
            const delay = Math.random() * 5; // 0 to 5 seconds

            particle.style.width = `${size}px`;
            particle.style.height = `${size}px`;
            particle.style.left = `${x}px`;
            particle.style.top = `${y}px`;
            particle.style.animationDuration = `${duration}s`;
            particle.style.animationDelay = `${delay}s`;

            particle.addEventListener('animationend', () => {
                particle.remove();
            });
        };

        const numParticles = 50;
        for (let i = 0; i < numParticles; i++) {
            createParticle();
        }

        const interval = setInterval(createParticle, 500); // Create a new particle every 0.5 seconds

        return () => {
            clearInterval(interval);
            // Clean up particles if component unmounts
            while (particlesContainer.firstChild) {
                particlesContainer.removeChild(particlesContainer.firstChild);
            }
        };
    }, []);

    return <div className="particles" id="particles"></div>;
};

export default Particles;