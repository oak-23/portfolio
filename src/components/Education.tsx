import React from 'react';
import styles from './Sections.module.css';

const Education: React.FC = () => {
    return (
        <section id="education" className={`section ${styles.sectionBase}`} style={{ backgroundColor: 'var(--bg-edu)' }}>
            <div className={`container ${styles.container}`}>
                <h2 className={styles.sectionTitle}>Education</h2>

                <div className={styles.grid} style={{ gridTemplateColumns: '1fr', maxWidth: '800px', margin: '0 auto' }}>
                    <div className={`${styles.card} ${styles.educationCardLayout}`}>
                        <div className={styles.educationImage}>
                            <img src={`${import.meta.env.BASE_URL}hkust.png`} alt="HKUST Logo" className={styles.educationImgElement} />
                        </div>
                        <div className={styles.educationContent}>
                            <h4 className={styles.title}>BEng in Computer Engineering &amp; BBA</h4>
                            <p className={styles.subtitle}>
                                Hong Kong University of Science and Technology (HKUST) &mdash; Dual Degree Program in Technology and Management
                            </p>
                            <p className={styles.subtitle} style={{ marginTop: '0.8rem', color: 'var(--color-accent)' }}>Sep 2025 &ndash; Jun 2030 (expected)</p>
                        </div>
                    </div>

                    <div className={styles.card}>
                        <div>
                            <h4 className={styles.title}>GCE International A-Levels</h4>
                            <p className={styles.subtitle}>Self-studied &mdash; 5 A* and 1 A, completing 5 A-Levels in 8 months.</p>
                            <p className={styles.subtitle} style={{ marginTop: '0.8rem', color: 'var(--color-accent)' }}>2023 &ndash; 2024</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
export default Education;
