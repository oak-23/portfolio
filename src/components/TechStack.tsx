import React from 'react';
import styles from './TechStack.module.css';
import { 
  SiPython, SiJavascript, SiHtml5, SiReact, SiFastapi, SiNodedotjs, 
  SiFlask, SiTailwindcss, SiNumpy, SiPostgresql, SiMysql, 
  SiDocker, SiNginx, SiGithubactions
} from 'react-icons/si';
import { FaJava, FaGitAlt, FaAws } from 'react-icons/fa';
import { TbSql } from 'react-icons/tb';

const TechStack: React.FC = () => {
    return (
        <section id="tech-stack" className={`section ${styles.techStackSection}`} style={{ backgroundColor: 'var(--bg-edu)' }}>
            <div className={`container`}>
                <div className={styles.innerGlow}>
                    <h2 className={styles.sectionTitle}>Technology Stack</h2>
                    
                    <div className={styles.grid}>
                        {/* Languages Section */}
                        <div className={styles.categoryColumn}>
                            <h3 className={styles.categoryTitle}>Languages</h3>
                            <ul className={styles.techList}>
                                <li className={styles.techItem}>
                                    <SiPython className={styles.techIcon} /> Python
                                </li>
                                <li className={styles.techItem}>
                                    <SiJavascript className={styles.techIcon} /> JavaScript
                                </li>
                                <li className={styles.techItem}>
                                    <TbSql className={styles.techIcon} /> SQL
                                </li>
                                <li className={styles.techItem}>
                                    <FaJava className={styles.techIcon} /> Java
                                </li>
                                <li className={styles.techItem}>
                                    <SiHtml5 className={styles.techIcon} /> HTML/CSS
                                </li>
                            </ul>
                        </div>

                        {/* Frameworks/Libs Section */}
                        <div className={styles.categoryColumn}>
                            <h3 className={styles.categoryTitle}>Frameworks/Libs</h3>
                            <ul className={styles.techList}>
                                <li className={styles.techItem}>
                                    <SiReact className={styles.techIcon} /> React / Native
                                </li>
                                <li className={styles.techItem}>
                                    <SiFastapi className={styles.techIcon} /> FastAPI
                                </li>
                                <li className={styles.techItem}>
                                    <SiNodedotjs className={styles.techIcon} /> Node.js
                                </li>
                                <li className={styles.techItem}>
                                    <SiFlask className={styles.techIcon} /> Flask
                                </li>
                                <li className={styles.techItem}>
                                    <SiTailwindcss className={styles.techIcon} /> Tailwind CSS
                                </li>
                                <li className={styles.techItem}>
                                    <SiNumpy className={styles.techIcon} /> NumPy
                                </li>
                            </ul>
                        </div>

                        {/* Databases Section */}
                        <div className={styles.categoryColumn}>
                            <h3 className={styles.categoryTitle}>Databases</h3>
                            <ul className={styles.techList}>
                                <li className={styles.techItem}>
                                    <SiPostgresql className={styles.techIcon} /> PostgreSQL
                                </li>
                                <li className={styles.techItem}>
                                    <SiMysql className={styles.techIcon} /> MySQL
                                </li>
                            </ul>
                        </div>

                        {/* Tools & Cloud Section */}
                        <div className={styles.categoryColumn}>
                            <h3 className={styles.categoryTitle}>Tools & Cloud</h3>
                            <ul className={styles.techList}>
                                <li className={styles.techItem}>
                                    <FaGitAlt className={styles.techIcon} /> Git
                                </li>
                                <li className={styles.techItem}>
                                    <SiDocker className={styles.techIcon} /> Docker
                                </li>
                                <li className={styles.techItem}>
                                    <FaAws className={styles.techIcon} /> AWS
                                </li>
                                <li className={styles.techItem}>
                                    <SiNginx className={styles.techIcon} /> Nginx
                                </li>
                                <li className={styles.techItem}>
                                    <SiGithubactions className={styles.techIcon} /> CI/CD
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TechStack;
