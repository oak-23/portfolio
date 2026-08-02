import React from 'react';
import styles from './Projects.module.css';

interface ProjectListProps {
    activeProject: string | null;
    setActiveProject: (id: string | null) => void;
}

const Projects: React.FC<ProjectListProps> = ({ activeProject, setActiveProject }) => {
    const categories = [
        {
            title: "Quantitative & Backend Systems",
            items: [
                { id: 'backtest', title: 'Smart-Beta Strategy Pipeline', desc: 'Automated index strategies from creation through backtesting to deployment (Rivermap)' },
                { id: 'internal-ops', title: 'Internal Management System', desc: 'Replaced spreadsheet-and-email workflows; used daily by 18 staff firm-wide' },
                { id: 'auth', title: 'Centralized Auth Service', desc: 'Single authentication & authorization layer across 4+ internal applications' },
            ]
        },
        {
            title: "AI, ML & Data",
            items: [
                { id: 'humanities-nlp', title: 'NLP Thematic Analysis Pipeline', desc: 'LLM tooling over hundreds of qualitative and historical documents (HKUST Humanities)' },
                { id: 'igem-ml', title: 'Genome Mining Toolkit', desc: 'Transformers and CNNs mining a non-model bacterium genome under data constraints (iGEM)' },
            ]
        },
        {
            title: "Hardware & Hackathons",
            items: [
                { id: 'exposai', title: 'ExposAI', desc: 'On-chain image authenticity registry with multimodal synthetic-media detection on AWS Bedrock' },
                { id: 'cops', title: 'COPS', desc: 'Arduino IoT prototype adjusting filtration to measured water conditions; 2nd Prize, Global Sustainability Challenge' },
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
