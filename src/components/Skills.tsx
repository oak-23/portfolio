import React from 'react';
import styles from './Skills.module.css';

interface SkillsProps {
    activeSkills: string[];
}

const Skills: React.FC<SkillsProps> = ({ activeSkills }) => {
    const categories = [
        {
            title: "Coding",
            items: [
                { id: 'cpp', name: 'C++' },
                { id: 'python', name: 'Python' },
                { id: 'html', name: 'HTML/CSS/JS' },
                { id: 'sql', name: 'SQL' },
                { id: 'aws', name: 'AWS Bedrock' },
                { id: 'fastapi', name: 'FastAPI' },
            ]
        },
        {
            title: "Technical",
            items: [
                { id: 'product', name: 'Product Ideation & Development' },
                { id: 'process', name: 'Process Design' },
                { id: '3d', name: '3D Design & Printing' },
                { id: 'office', name: 'Office/Database' },
                { id: 'digital', name: 'Digital Design' },
                { id: 'video', name: 'Video Editing' },
            ]
        },
        {
            title: "Marketing & Professional",
            items: [
                { id: 'social', name: 'Social Media Strategy' },
                { id: 'content', name: 'Content Creation' },
                { id: 'public', name: 'Public Speaking' },
                { id: 'pitching', name: 'Business Pitching' },
                { id: 'negotiation', name: 'Business Negotiation' },
                { id: 'collaboration', name: 'Cross-functional Collaboration' },
                { id: 'report', name: 'Technical Report Writing' },
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
