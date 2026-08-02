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
                                <p className={styles.subtitle}>Highly selective full scholarship awarded to outstanding international students.</p>
                                <p className={styles.highlight}>Value: 925,000 HKD</p>
                            </div>
                        </div>
                        <div className={styles.card}>
                            <div className={styles.content}>
                                <h4 className={styles.title}>Entrance Admission Scholarship</h4>
                                <p className={styles.subtitle}>Full-ride scholarship awarded by HKUST for outstanding academic merit.</p>
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
                                <h4 className={styles.title}>GCE International A-Levels</h4>
                                <p className={styles.subtitle}>Answered 6 and earned 5 A* and 1 A; self-studied 5 A-Levels in 8 months</p>
                                <p className={styles.highlight}>Achieved by fewer than 0.01% of candidates worldwide</p>
                            </div>
                        </div>
                        <div className={styles.card}>
                            <div className={styles.content}>
                                <h4 className={styles.title}>International Youth Maths Olympiad</h4>
                                <p className={styles.subtitle}>Highest score in Myanmar, Dec 2021.</p>
                            </div>
                        </div>
                        <div className={styles.card}>
                            <div className={styles.content}>
                                <h4 className={styles.title}>Online Myanmar Mathematics Olympiad</h4>
                                <p className={styles.subtitle}>Gold Medal, Dec 2021.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
export default Accolades;
