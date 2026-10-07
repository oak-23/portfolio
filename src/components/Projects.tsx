import React from 'react';
import styles from './Projects.module.css';

interface ProjectListProps {
    activeProject: string | null;
    setActiveProject: (id: string | null) => void;
}

interface ProjectItem {
    id: string;
    title: string;
    desc: string;
    date?: string;
}

const Projects: React.FC<ProjectListProps> = ({ activeProject, setActiveProject }) => {
    const categories: { title: string; items: ProjectItem[] }[] = [
        {
            title: "Quantitative & Backend Systems",
            items: [
                { id: 'backtest', title: 'Smart-Beta Strategy Pipeline', desc: 'Design systems and database architecture, and build and operate an automated Python pipeline taking smart-beta index strategies from creation through backtesting to deployment (Rivermap).' },
                { id: 'internal-ops', title: 'Internal Management System', desc: 'Deployed a full-stack system with a FastAPI backend and relational database, replacing spreadsheet workflows; used daily by 18 staff firm-wide.' },
                { id: 'auth', title: 'Centralised Auth Service', desc: 'Authentication and authorization across 4+ internal and external applications at Rivermap.' },
            ]
        },
        {
            title: "AI, ML & Data",
            items: [
                { id: 'humanities-nlp', title: 'NLP Thematic Analysis Pipeline', desc: 'Developing NLP pipelines and custom LLM frameworks to analyze large-scale qualitative datasets and extract thematic insights from historical and social archives. Developing end-to-end data analytics workflows that transform unstructured humanities research into quantitative visualizations, enabling multidisciplinary teams to validate hypotheses through statistical modeling (HKUST Humanities).' },
                { id: 'igem-ml', title: 'Genome Mining', desc: 'Lead a 9-member dry-lab team training and fine-tuning transformers, foundational models and CNNs to mine a non-model bacterium genome under data constraints. Selected from 100+ competitors; presented the project at the Grand Jamboree in Paris 2026 (iGEM).' },
            ]
        },
        {
            title: "Hardware & Hackathons",
            items: [
                { id: 'exposai', title: 'ExposAI', date: 'Mar 2026', desc: '24-hour hackathon team project. Developed a dual-layer verification system combining cryptographic hashing on the Abelian (QDay) Blockchain with multimodal AI forensics via AWS Bedrock to differentiate between authentic and synthetic media. Implemented a smart contract on the QDay Testnet to create a permanent, tamper-proof registry mapping unique image hashes to on-chain certificates.' },
                { id: 'cops', title: 'COPS — IoT Water-Filtration Prototype', date: 'Oct 2025 – Jan 2026', desc: 'Built an Arduino-based prototype using IoT sensors and actuators to adjust filtration to measured water conditions. Won 2nd Prize at the Global Sustainability Challenge Regional Finals; presented at Hong Kong Techathon+.' },
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
                                    {item.date && <p className={styles.cardDate}>{item.date}</p>}
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
