import React from 'react';
import styles from './Sections.module.css';

const Extracurriculars: React.FC = () => {
    return (
        <section id="extracurriculars" className={`section ${styles.sectionBase}`} style={{ backgroundColor: 'var(--bg-lang)' }}>
            <div className={`container ${styles.container}`}>
                <h2 className={styles.sectionTitle}>Extracurriculars</h2>

                <div className={styles.grid}>
                    <div className={styles.card}>
                        <div className={styles.content}>
                            <h4 className={styles.title}>Executive Director (Probationary)</h4>
                            <p className={styles.subtitle}>ECE MakerSpace (UG Electronics Lab)</p>
                        </div>
                    </div>
                    <div className={styles.card}>
                        <div className={styles.content}>
                            <h4 className={styles.title}>Student Ambassador</h4>
                            <p className={styles.subtitle}>Representing the core values and student initiatives at HKUST.</p>
                        </div>
                    </div>
                    <div className={styles.card}>
                        <div className={styles.content}>
                            <h4 className={styles.title}>Microsoft Ambassador</h4>
                            <p className={styles.subtitle}>Advocating and educating peers on cutting-edge Microsoft technologies.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
export default Extracurriculars;
