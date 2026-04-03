import React, { useEffect, useState } from 'react';
import styles from './Navbar.module.css';

const Navbar: React.FC = () => {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMenu = () => setMenuOpen(!menuOpen);
    const closeMenu = () => setMenuOpen(false);

    return (
        <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}>
            <div className={styles.navContainer}>
                <div className={styles.logo}>
                    <a href="#hero" style={{ color: 'inherit', display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
                        OSO
                    </a>
                </div>

                <div className={`${styles.hamburger} ${menuOpen ? styles.open : ''}`} onClick={toggleMenu}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>

                <div className={`${styles.links} ${menuOpen ? styles.linksOpen : ''}`}>
                    <a href="#hero" onClick={closeMenu}>Profile</a>
                    <a href="#education" onClick={closeMenu}>Education</a>
                    <a href="#experience" onClick={closeMenu}>Integrated Experience</a>
                    <a href="#extracurriculars" onClick={closeMenu}>Extracurriculars</a>
                    <a href="#languages" onClick={closeMenu}>Languages</a>
                    <a href="#accolades" onClick={closeMenu}>Accolades</a>
                    <a href="#competitions" onClick={closeMenu}>Competition Awards</a>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
