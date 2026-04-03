import React from 'react';
import styles from './Sections.module.css';

const Languages: React.FC = () => {
    return (
        <section id="languages" className={`section ${styles.sectionBase}`} style={{ backgroundColor: 'var(--bg-extra)' }}>
            <div className={`container ${styles.container}`}>
                <h2 className={styles.sectionTitle}>Language Proficiency</h2>

                <div className={styles.grid}>
                    <div className={styles.card}>
                        <div className={styles.content}>
                            <h4 className={styles.title}>Burmese</h4>
                            <p className={styles.subtitle}>Native</p>
                        </div>
                    </div>
                    <div className={styles.card}>
                        <div className={styles.content}>
                            <h4 className={styles.title}>English</h4>
                            <p className={styles.subtitle}>Fluent</p>
                        </div>
                    </div>
                    <div className={styles.card}>
                        <div className={styles.content}>
                            <h4 className={styles.title}>Japanese</h4>
                            <p className={styles.subtitle}>Conversational</p>
                        </div>
                    </div>
                    <div className={styles.card}>
                        <div className={styles.content}>
                            <h4 className={styles.title}>Korean</h4>
                            <p className={styles.subtitle}>Conversational</p>
                        </div>
                    </div>
                    <div className={styles.card}>
                        <div className={styles.content}>
                            <h4 className={styles.title}>Mandarin</h4>
                            <p className={styles.subtitle}>Basic</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
export default Languages;
