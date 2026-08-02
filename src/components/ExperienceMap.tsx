import React, { useState } from 'react';
import Projects from './Projects';
import Skills from './Skills';
import CircuitOverlay from './CircuitOverlay';
import styles from './ExperienceMap.module.css';

const ExperienceMap: React.FC = () => {
    const [activeProject, setActiveProject] = useState<string | null>(null);

    // Mapping projects to the skills they use
    const projectSkillsMap: Record<string, string[]> = {
        'backtest': ['python', 'cpp', 'sql', 'numpy', 'backtest', 'stats', 'docker', 'cicd'],
        'internal-ops': ['python', 'sql', 'ts', 'react', 'fastapi', 'docker', 'product', 'process', 'collaboration'],
        'auth': ['python', 'sql', 'fastapi', 'docker', 'cicd', 'process'],
        'humanities-nlp': ['python', 'nlp', 'llm', 'numpy', 'stats', 'report', 'collaboration'],
        'igem-ml': ['python', 'dl', 'nlp', 'numpy', 'ts', 'react', 'collaboration'],
        'exposai': ['python', 'ts', 'react', 'llm', 'docker', 'product', 'collaboration'],
        'cops': ['cpp', 'process', 'product', 'report', 'collaboration', 'public'],
        'pwc': ['process', 'pitching', 'report', 'product', 'public'],
        'hkgcc': ['process', 'pitching', 'product', 'report', 'public']
    };

    const activeSkills = activeProject ? projectSkillsMap[activeProject] || [] : [];

    return (
        <section className={`section ${styles.experienceMap}`}>
            <CircuitOverlay activeProject={activeProject} activeSkills={activeSkills} />

            <div className={`container ${styles.mapContainer}`}>
                <div className={styles.columnProjects}>
                    <h2 className={styles.sectionTitle}>Selected Work</h2>
                    <Projects activeProject={activeProject} setActiveProject={setActiveProject} />
                </div>

                <div id="skills" className={styles.columnSkills}>
                    <h2 className={styles.sectionTitle}>Skills Engine</h2>
                    <Skills activeSkills={activeSkills} />
                </div>
            </div>
        </section>
    );
};

export default ExperienceMap;
