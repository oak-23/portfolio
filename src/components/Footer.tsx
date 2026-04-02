import React from 'react';
import styles from './Footer.module.css';

const Footer: React.FC = () => {
    return (
        <footer className={styles.footer}>
            <div className={`container ${styles.container}`}>
                <div className={styles.circuitLine}></div>
                <div className={styles.content}>
                    <div className={styles.brand}>
                        <h2 className={styles.name}>Oak Soe Oo</h2>
                        <p className={styles.desc}>Multidisciplinary problem solver bridging engineering, business, and humanity.</p>
                    </div>

                    <div className={styles.contact}>
                        <div className={styles.contactItem}>
                            <a href="mailto:oaksoeoo1023@gmail.com" className={styles.link}>
                                oaksoeoo1023@gmail.com
                            </a>
                        </div>
                        <div className={styles.contactItem}>
                            <a href="tel:+85290533352" className={styles.link}>
                                +(852) 9053 3352
                            </a>
                        </div>
                        <div className={styles.socials}>
                            {/* Make sure we instruct to test these links as per user requirements */}
                            <a href="https://linkedin.com/in/osoo" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>LinkedIn</a>
                            <span className={styles.dot}>&bull;</span>
                            <a href="https://github.com/oak-23" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>GitHub</a>
                        </div>
                    </div>
                </div>
                <div className={styles.bottomBar}>
                    <p>&copy; {new Date().getFullYear()} Oak Soe Oo. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
