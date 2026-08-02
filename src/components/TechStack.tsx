import React from 'react';
import styles from './TechStack.module.css';
import {
  SiPython, SiCplusplus, SiTypescript, SiJavascript, SiHtml5, SiReact, SiFastapi, SiNodedotjs,
  SiFlask, SiNumpy, SiPostgresql, SiMysql,
  SiDocker, SiGithubactions
} from 'react-icons/si';
import { FaGitAlt, FaAws, FaBrain } from 'react-icons/fa';
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
                                    <SiPython color="#3776AB" className={styles.techIcon} /> Python
                                </li>
                                <li className={styles.techItem}>
                                    <SiCplusplus color="#00599C" className={styles.techIcon} /> C++
                                </li>
                                <li className={styles.techItem}>
                                    <TbSql color="#336791" className={styles.techIcon} /> SQL
                                </li>
                                <li className={styles.techItem}>
                                    <SiTypescript color="#3178C6" className={styles.techIcon} /> TypeScript
                                </li>
                                <li className={styles.techItem}>
                                    <SiJavascript color="#F7DF1E" className={styles.techIcon} /> JavaScript
                                </li>
                                <li className={styles.techItem}>
                                    <SiHtml5 color="#E34F26" className={styles.techIcon} /> HTML/CSS
                                </li>
                            </ul>
                        </div>

                        {/* Frameworks/Libs Section */}
                        <div className={styles.categoryColumn}>
                            <h3 className={styles.categoryTitle}>Frameworks/Libs</h3>
                            <ul className={styles.techList}>
                                <li className={styles.techItem}>
                                    <SiReact color="#61DAFB" className={styles.techIcon} /> React / Native
                                </li>
                                <li className={styles.techItem}>
                                    <SiFastapi color="#009688" className={styles.techIcon} /> FastAPI
                                </li>
                                <li className={styles.techItem}>
                                    <SiNodedotjs color="#339933" className={styles.techIcon} /> Node.js
                                </li>
                                <li className={styles.techItem}>
                                    <SiFlask color="#FFFFFF" className={styles.techIcon} /> Flask
                                </li>
                                <li className={styles.techItem}>
                                    <SiNumpy color="#4DABCF" className={styles.techIcon} /> NumPy
                                </li>
                                <li className={styles.techItem}>
                                    <FaBrain color="#B8FF00" className={styles.techIcon} /> Transformers / CNNs
                                </li>
                            </ul>
                        </div>

                        {/* Databases Section */}
                        <div className={styles.categoryColumn}>
                            <h3 className={styles.categoryTitle}>Databases</h3>
                            <ul className={styles.techList}>
                                <li className={styles.techItem}>
                                    <SiPostgresql color="#336791" className={styles.techIcon} /> PostgreSQL
                                </li>
                                <li className={styles.techItem}>
                                    <SiMysql color="#4479A1" className={styles.techIcon} /> MySQL
                                </li>
                            </ul>
                        </div>

                        {/* Tools & Cloud Section */}
                        <div className={styles.categoryColumn}>
                            <h3 className={styles.categoryTitle}>Tools & Cloud</h3>
                            <ul className={styles.techList}>
                                <li className={styles.techItem}>
                                    <FaGitAlt color="#F05032" className={styles.techIcon} /> Git
                                </li>
                                <li className={styles.techItem}>
                                    <SiDocker color="#2496ED" className={styles.techIcon} /> Docker
                                </li>
                                <li className={styles.techItem}>
                                    <FaAws color="#FF9900" className={styles.techIcon} /> AWS (incl. Bedrock)
                                </li>
                                <li className={styles.techItem}>
                                    <SiGithubactions color="#2088FF" className={styles.techIcon} /> CI/CD
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
