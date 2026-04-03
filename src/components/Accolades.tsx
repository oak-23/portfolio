import React from 'react';
import styles from './Accolades.module.css';

const Accolades: React.FC = () => {
    return (
        <section className={`section ${styles.accolades}`}>
            <div className={`container ${styles.container}`}>
                <h2 className={styles.sectionTitle}>Accolades</h2>

                <div className={styles.categorySection}>
                    <h3 className={styles.categoryHeader}>Scholarships</h3>
                    <div className={styles.grid}>
                        <div className={styles.card}>
                            <div className={styles.content}>
                                <h4 className={styles.title}>HKSAR Government Belt & Road Scholarship</h4>
                                <p className={styles.subtitle}>Full scholarship awarded to outstanding international students.</p>
                                <p className={styles.highlight}>Value: 925,000 HKD</p>
                            </div>
                        </div>
                        <div className={styles.card}>
                            <div className={styles.content}>
                                <h4 className={styles.title}>Entrance Admission Scholarship</h4>
                                <p className={styles.subtitle}>Full scholarship awarded by HKUST for outstanding academic merit.</p>
                                <p className={styles.highlight}>Value: 1,225,000 HKD</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={styles.categorySection}>
                    <h3 className={styles.categoryHeader}>Academic Excellence</h3>
                    <div className={styles.grid}>
                        <div className={styles.card}>
                            <div className={styles.content}>
                                <h4 className={styles.title}>Myanmar Academic Accolades</h4>
                                <p className={styles.subtitle}>Top performance in A-levels nationally.</p>
                            </div>
                        </div>
                        <div className={styles.card}>
                            <div className={styles.content}>
                                <h4 className={styles.title}>International Youth Maths Olympiad</h4>
                                <p className={styles.subtitle}>Recognized excellence in competitive mathematics.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
export default Accolades;
