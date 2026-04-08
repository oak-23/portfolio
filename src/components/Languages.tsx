import React, { useEffect, useState, useRef } from 'react';
import sectionStyles from './Sections.module.css';
import styles from './Languages.module.css';

interface LanguageData {
    name: string;
    level: string;
    fill: number;
}

const languagesData: LanguageData[] = [
    { name: 'Burmese', level: 'Native', fill: 100 },
    { name: 'English', level: 'Fluent', fill: 100 },
    { name: 'Japanese', level: 'Conversational', fill: 55 },
    { name: 'Korean', level: 'Conversational', fill: 45 },
    { name: 'Mandarin', level: 'Basic', fill: 20 },
];

const Languages: React.FC = () => {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.1 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <section
            id="languages"
            className={`section ${sectionStyles.sectionBase}`}
            style={{ backgroundColor: 'var(--bg-extra)' }}
            ref={sectionRef}
        >
            <div className={`container ${sectionStyles.container}`}>
                <h2 className={sectionStyles.sectionTitle}>Language Proficiency</h2>

                <div className={styles.grid}>
                    {languagesData.map((lang, idx) => (
                        <div key={idx} className={styles.card}>
                            <div className={styles.header}>
                                <h4 className={styles.title}>{lang.name}</h4>
                                <span className={styles.level}>{lang.level}</span>
                            </div>
                            <div className={styles.progressTrack}>
                                <div
                                    className={styles.progressFill}
                                    style={{
                                        width: isVisible ? `${lang.fill}%` : '0%',
                                        transitionDelay: `${idx * 100}ms`
                                    }}
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Languages;
