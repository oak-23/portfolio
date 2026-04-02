import React, { useEffect, useState } from 'react';
import styles from './Navbar.module.css';

const Navbar: React.FC = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}>
            <div className={`container ${styles.navContainer}`}>
                <div className={styles.logo}>
                    <a href="#hero" style={{ color: 'inherit', display: 'flex', alignItems: 'center', gap: '0.5rem', textDecoration: 'none' }}>
                        <span className={styles.trace}>&#x2514;</span> OSO
                    </a>
                </div>
                <div className={styles.links}>
                    <a href="#hero">Profile</a>
                    <a href="#education">Education</a>
                    <a href="#experience">Integrated Experience</a>
                    <a href="#extracurriculars">Extracurriculars</a>
                    <a href="#languages">Languages</a>
                    <a href="#accolades">Accolades</a>
                    <a href="#competitions">Competition Awards</a>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
