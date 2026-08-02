import React from 'react';
import styles from './Skills.module.css';

interface SkillsProps {
    activeSkills: string[];
}

const Skills: React.FC<SkillsProps> = ({ activeSkills }) => {
    const categories = [
        {
            title: "Programming",
            items: [
                { id: 'python', name: 'Python' },
                { id: 'cpp', name: 'C++' },
                { id: 'sql', name: 'SQL' },
                { id: 'ts', name: 'TypeScript / JavaScript' },
                { id: 'react', name: 'React / React Native' },
                { id: 'fastapi', name: 'FastAPI / Flask / Node.js' },
            ]
        },
        {
            title: "Data & ML",
            items: [
                { id: 'nlp', name: 'NLP' },
                { id: 'llm', name: 'LLM Tooling' },
                { id: 'dl', name: 'Deep Learning (Transformers, CNNs)' },
                { id: 'numpy', name: 'NumPy' },
                { id: 'backtest', name: 'Backtesting' },
                { id: 'stats', name: 'Statistical Analysis' },
            ]
        },
        {
            title: "Engineering & Professional",
            items: [
                { id: 'docker', name: 'Docker / AWS' },
                { id: 'cicd', name: 'Git & CI/CD' },
                { id: 'product', name: 'Product Ideation & Development' },
                { id: 'process', name: 'System & Process Design' },
                { id: 'collaboration', name: 'Cross-functional Collaboration' },
                { id: 'report', name: 'Technical Report Writing' },
                { id: 'public', name: 'Public Speaking' },
                { id: 'pitching', name: 'Business Pitching' },
            ]
        }
    ];

    return (
        <div className={styles.skillsMatrix}>
            {categories.map((cat, i) => (
                <div key={i} className={styles.skillCategory}>
                    <h3 className={styles.categoryTitle}>{cat.title}</h3>
                    <ul className={styles.skillList}>
                        {cat.items.map(item => (
                            <li
                                key={item.id}
                                id={`skill-${item.id}`}
                                className={`${styles.skillItem} ${activeSkills.includes(item.id) ? styles.active : ''}`}
                            >
                                <span className={styles.traceLine}></span>
                                <span className={styles.skillName}>{item.name}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    )
}
export default Skills;
