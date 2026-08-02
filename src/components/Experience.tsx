import React from 'react';
import styles from './Sections.module.css';

const roles = [
    {
        org: 'Rivermap Company Limited',
        role: 'Quantitative Developer',
        date: 'Jun 2026 – Present',
        points: [
            'Build and operate an automated pipeline taking smart-beta index strategies from creation through backtesting to deployment.',
            'Designed and deployed an internal management system replacing spreadsheet-and-email workflows; in production, used daily by 18 staff firm-wide.',
            "Built a centralized authentication and authorization system used across the firm's 4+ internal applications.",
        ],
    },
    {
        org: 'HKUST School of Humanities',
        role: 'Research Assistant',
        date: 'Feb 2026 – Present',
        points: [
            'Develop NLP pipelines and LLM-based tooling that automate thematic analysis of qualitative and historical archives totalling hundreds of documents.',
            'Build data pipelines that turn unstructured research data into visualizations the team uses to test statistical hypotheses.',
        ],
    },
    {
        org: 'iGEM, HKUST',
        role: 'Dry Lab Team Lead',
        date: 'Feb 2026 – Present',
        points: [
            'Lead a 9-member dry-lab team; train and fine-tune transformer models and CNNs to mine a non-model bacterium genome under data constraints, producing a genetic engineering toolkit.',
            'Selected from 100+ applicants; build and maintain the team wiki in React and TypeScript.',
        ],
    },
    {
        org: 'Shun Lei Shwe Yi Co., Ltd.',
        role: 'Engineering Intern (Part-time)',
        date: 'Jan 2022 – Jun 2025',
        points: [
            'Built and maintained data-management systems for 3 construction projects.',
            'Prepared tender proposals for 3 winning contract bids.',
        ],
    },
];

const Experience: React.FC = () => {
    return (
        <section id="experience" className={`section ${styles.sectionBase}`} style={{ backgroundColor: 'var(--bg-exp)' }}>
            <div className={`container ${styles.container}`}>
                <h2 className={styles.sectionTitle}>Experience</h2>

                <div className={styles.grid} style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(420px, 1fr))' }}>
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
