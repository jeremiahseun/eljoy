import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import styles from '../styles/Navbar.module.css';
import { navLinks } from '../data/portfolioData';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <motion.nav
            className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <div className={styles.navContainer}>
                <Link href="/" className={styles.logo}>EL-Joy</Link>
                <ul className={styles.navLinks}>
                    {navLinks.map((link) => (
                        <li key={link.name}>
                            <Link href={link.href}><motion.span style={{ color: 'lightgrey' }} whileHover={{ color: '#64ffda' }}>{link.name}</motion.span></Link>
                        </li>
                    ))}
                </ul>
            </div>
        </motion.nav>
    );
};

export default Navbar;
