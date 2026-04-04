import React, { useState } from 'react';
import Projects from './Projects';
import Skills from './Skills';
import CircuitOverlay from './CircuitOverlay';
import styles from './ExperienceMap.module.css';

const ExperienceMap: React.FC = () => {
    const [activeProject, setActiveProject] = useState<string | null>(null);

    // Mapping projects to the skills they use
    const projectSkillsMap: Record<string, string[]> = {
        'exposai': ['cpp', 'python', 'sql', 'aws', 'product', 'collaboration', 'public'],
        'igem': ['html', 'python', 'digital', 'collaboration', 'public'],
        'iot': ['cpp', '3d', 'process', 'report', 'collaboration', 'public', 'product'],
        'hkust-humanities': ['cpp', 'python', 'sql', 'aws', 'product', 'collaboration', 'office', 'report', 'collaboration'],
        'just-b': ['product', 'pitching', 'social', 'public'],
        'tedx': ['public', 'collaboration', 'social'],
        'pwc': ['process', 'pitching', 'report', 'product', 'public'],
        'hkgcc': ['process', 'pitching', 'product', 'report', 'public']
    };

    const activeSkills = activeProject ? projectSkillsMap[activeProject] || [] : [];

    return (
        <section className={`section ${styles.experienceMap}`}>
            <CircuitOverlay activeProject={activeProject} activeSkills={activeSkills} />

            <div className={`container ${styles.mapContainer}`}>
                <div className={styles.columnProjects}>
                    <h2 className={styles.sectionTitle}>Integrated Experience</h2>
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
