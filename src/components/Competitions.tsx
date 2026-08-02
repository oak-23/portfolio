import React from 'react';
import styles from './Competitions.module.css';

const Competitions: React.FC = () => {
    return (
        <section id="competitions" className={`section ${styles.competitions}`}>
            <div className={`container ${styles.container}`}>
                <h2 className={styles.sectionTitle}>Competition Awards</h2>

                <div className={styles.categorySection}>
                    <div className={styles.grid}>
                        <div className={styles.card}>
                            <div className={styles.content}>
                                <h4 className={styles.title}>Global Sustainability Challenge</h4>
                                <p className={styles.subtitle}>2nd Prize at the Regional Finals (Stanford&ndash;HKUST&ndash;IIT Bombay partnership) for COPS.</p>
                            </div>
                        </div>
                        <div className={styles.card}>
                            <div className={styles.content}>
                                <h4 className={styles.title}>Hong Kong Techathon+</h4>
                                <p className={styles.subtitle}>Presented COPS, the IoT water-filtration prototype, at the finals.</p>
                            </div>
                        </div>
                        <div className={styles.card}>
                            <div className={styles.content}>
                                <h4 className={styles.title}>HKGCC Business Case Competition</h4>
                                <p className={styles.subtitle}>Advanced to Top 5 finals for innovative strategies presented to Ocean Park.</p>
                            </div>
                        </div>
                        <div className={styles.card}>
                            <div className={styles.content}>
                                <h4 className={styles.title}>PwC ESG Competition</h4>
                                <p className={styles.subtitle}>Top 8 finalist; developed comprehensive ESG strategies for Giordano.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
export default Competitions;
