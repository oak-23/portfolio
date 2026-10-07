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
                                <h4 className={styles.title}>HKSAR Government Belt and Road Scholarship</h4>
                                <p className={styles.subtitle}>Highly selective full scholarship awarded to outstanding international students.</p>
                                <p className={styles.highlight}>Value: HK$925,000</p>
                            </div>
                        </div>
                        <div className={styles.card}>
                            <div className={styles.content}>
                                <h4 className={styles.title}>Entrance Admission Scholarship</h4>
                                <p className={styles.subtitle}>Merit-based full-ride scholarship awarded by HKUST.</p>
                                <p className={styles.highlight}>Value: HK$1,225,000</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={styles.categorySection}>
                    <h3 className={styles.categoryHeader}>Mathematics Olympiads</h3>
                    <div className={styles.grid}>
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
