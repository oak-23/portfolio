import React from 'react';
import styles from './Projects.module.css';

interface ProjectListProps {
    activeProject: string | null;
    setActiveProject: (id: string | null) => void;
}

const Projects: React.FC<ProjectListProps> = ({ activeProject, setActiveProject }) => {
    const categories = [
        {
            title: "Engineering & Innovation",
            items: [
                { id: 'exposai', title: 'ExposAI', desc: 'Blockchain & AI image authenticator' },
                { id: 'igem', title: 'iGEM HKUST 2026', desc: 'Genetic circuit modeling & wiki dev' },
                { id: 'iot', title: 'IoT Water Purifier (COPS)', desc: 'Global Sustainability Regional Finalist' },
            ]
        },
        {
            title: "Data & Humanities",
            items: [
                { id: 'hkust-humanities', title: 'AI & Data Analytics Engineer', desc: 'HKUST Humanities. Automated qualitative analysis & quantitative visualizations.' }
            ]
        },
        {
            title: "Entrepreneurship & Leadership",
            items: [
                { id: 'just-b', title: 'Just B!', desc: 'Hyper-local discovery application development & business pitches' },
                { id: 'tedx', title: 'TEDx & Fundraiser Organizer', desc: 'Event coordination and outreach' }
            ]
        },
        {
            title: "Strategic Problem Solving",
            items: [
                { id: 'pwc', title: 'PwC ESG Case Competition', desc: 'Developed strategies for Giordano' },
                { id: 'hkgcc', title: 'HKGCC Business Case Competition', desc: 'Developed strategies for Ocean Park' }
            ]
        }
    ];

    return (
        <div className={styles.projectsList}>
            {categories.map((cat, i) => (
                <div key={i} className={styles.category}>
                    <h3 className={styles.categoryTitle}>{cat.title}</h3>
                    <div className={styles.cards}>
                        {cat.items.map(item => (
                            <div
                                key={item.id}
                                id={`project-${item.id}`}
                                className={`${styles.card} ${activeProject === item.id ? styles.active : ''}`}
                                onMouseEnter={() => setActiveProject(item.id)}
                                onMouseLeave={() => setActiveProject(null)}
                            >
                                <div className={styles.nodeIcon}></div>
                                <div className={styles.cardContent}>
                                    <h4 className={styles.cardTitle}>{item.title}</h4>
                                    <p className={styles.cardDesc}>{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
};
export default Projects;
