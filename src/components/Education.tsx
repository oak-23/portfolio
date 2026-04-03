import React from 'react';
import styles from './Sections.module.css';

const Education: React.FC = () => {
    return (
        <section id="education" className={`section ${styles.sectionBase}`} style={{ backgroundColor: 'var(--bg-edu)' }}>
            <div className={`container ${styles.container}`}>
                <h2 className={styles.sectionTitle}>Education</h2>

                <div className={styles.grid} style={{ gridTemplateColumns: '1fr', maxWidth: '800px', margin: '0 auto' }}>
                    <div className={styles.card} style={{ flexDirection: 'row', alignItems: 'center', flexWrap: 'wrap', gap: '2rem' }}>
                        <div style={{ flex: '0 0 220px' }}>
                            {/* Make sure to place an image creatively named hkust.png perfectly flat inside your 'public' folder! */}
                            <img src={`${import.meta.env.BASE_URL}hkust.png`} alt="HKUST Logo" style={{ width: '100%', height: 'auto', objectFit: 'contain', background: 'white', padding: '10px', borderRadius: '8px' }} />
                        </div>
                        <div className={styles.content} style={{ flex: 1, minWidth: '250px' }}>
                            <h4 className={styles.title}>BEng in Computer Engineering</h4>
                            <p className={styles.subtitle}>Hong Kong University of Science and Technology (HKUST)</p>
                            <p className={styles.subtitle} style={{ marginTop: '0.8rem', color: 'var(--color-accent)' }}>Sep 2025 &ndash; Present</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
export default Education;
