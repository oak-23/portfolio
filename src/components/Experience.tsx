import React from 'react';
import styles from './Sections.module.css';

const roles = [
    {
        org: 'Rivermap Company Limited (Hong Kong)',
        role: 'Research Analyst Intern',
        date: 'Jun 2026 – Sep 2026',
        points: [
            'Design systems and database architecture, and build and operate an automated Python pipeline taking smart-beta index strategies from creation through backtesting to deployment.',
            'Designed and deployed a full-stack internal management system (FastAPI backend, relational database) that replaced spreadsheet workflows; in production, used daily by 18 staff firm-wide.',
            "Built a centralised authentication and authorization system for use across the firm's 4+ internal and external applications.",
        ],
    },
    {
        org: 'HKUST School of Humanities',
        role: 'Research Assistant',
        date: 'Feb 2026 – Present',
        points: [
            'Developing NLP pipelines and custom LLM frameworks to automate the analysis of large-scale qualitative datasets, streamlining the extraction of thematic insights from historical and social archives.',
            'Developing end-to-end data analytics workflows to transform unstructured humanities research into quantitative visualizations, enabling multidisciplinary teams to validate hypotheses through statistical modeling.',
        ],
    },
    {
        org: 'International Genetically Engineered Machine (iGEM), HKUST',
        role: 'Dry Lab Team Lead',
        date: 'Feb 2026 – Present',
        points: [
            'Lead a 9-member dry-lab team; apply machine learning to genetic engineering by training and fine-tuning transformer models, foundational models and CNNs to mine a non-model bacterium genome with data constraints.',
            'Selected from 100+ competitors; presented the project at the Grand Jamboree in Paris 2026.',
        ],
    },
    {
        org: 'Shun Lei Shwe Yi Co., Ltd. (Myanmar)',
        role: 'Engineering Intern (Part-time)',
        date: 'Jan 2022 – Jun 2025',
        points: [
            'Built and maintained document and data-management systems for 3 construction projects.',
            'Prepared tender proposals for 3 winning contract bids.',
        ],
    },
];

const Experience: React.FC = () => {
    return (
        <section id="experience" className={`section ${styles.sectionBase}`} style={{ backgroundColor: 'var(--bg-exp)' }}>
            <div className={`container ${styles.container}`}>
                <h2 className={styles.sectionTitle}>Experience</h2>

                <div className={styles.grid} style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(min(420px, 100%), 1fr))' }}>
                    {roles.map((r) => (
                        <div key={r.org} className={styles.card}>
                            <div>
                                <h4 className={styles.title}>{r.role}</h4>
                                <p className={styles.subtitle}>{r.org}</p>
                                <p className={styles.subtitle} style={{ marginTop: '0.8rem', color: 'var(--color-accent)' }}>{r.date}</p>
                            </div>
                            <ul className={styles.subtitle} style={{ paddingLeft: '1.2rem', display: 'grid', gap: '0.6rem' }}>
                                {r.points.map((p, i) => <li key={i}>{p}</li>)}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
export default Experience;
