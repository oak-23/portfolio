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
                                    <SiPython color="#3776AB" className={styles.techIcon} /> Python
                                </li>
                                <li className={styles.techItem}>
                                    <SiJavascript color="#F7DF1E" className={styles.techIcon} /> JavaScript
                                </li>
                                <li className={styles.techItem}>
                                    <TbSql color="#336791" className={styles.techIcon} /> SQL
                                </li>
                                <li className={styles.techItem}>
                                    <FaJava color="#ED8B00" className={styles.techIcon} /> Java
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
                                    <SiTailwindcss color="#06B6D4" className={styles.techIcon} /> Tailwind CSS
                                </li>
                                <li className={styles.techItem}>
                                    <SiNumpy color="#4DABCF" className={styles.techIcon} /> NumPy
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
                                    <FaAws color="#FF9900" className={styles.techIcon} /> AWS
                                </li>
                                <li className={styles.techItem}>
                                    <SiNginx color="#009639" className={styles.techIcon} /> Nginx
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
