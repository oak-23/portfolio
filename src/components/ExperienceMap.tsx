import React, { useState } from 'react';
import Projects from './Projects';
import Skills from './Skills';
import CircuitOverlay from './CircuitOverlay';
import styles from './ExperienceMap.module.css';

const ExperienceMap: React.FC = () => {
    const [activeProject, setActiveProject] = useState<string | null>(null);

    // Mapping projects to the skills they use
    const projectSkillsMap: Record<string, string[]> = {
        'exposai': ['cpp', 'python', 'aws', 'product'],
        'igem': ['html', 'python', 'digital', 'collaboration'],
        'iot': ['cpp', '3d', 'process', 'report'],
        'hkust-humanities': ['python', 'sql', 'office', 'report'],
        'just-b': ['product', 'pitching', 'social'],
        'tedx': ['public', 'collaboration', 'social'],
        'pwc': ['process', 'pitching', 'report', 'product'],
        'hkgcc': ['process', 'pitching', 'product', 'report']
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
