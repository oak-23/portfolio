import React from 'react';
import styles from './CircuitOverlay.module.css';

interface CircuitProps {
    activeProject: string | null;
    activeSkills: string[];
}

const CircuitOverlay: React.FC<CircuitProps> = ({ activeProject }) => {
    return (
        <div className={styles.overlay}>
            <svg className={styles.svg} preserveAspectRatio="none" viewBox="0 0 1000 1000">
                <defs>
                    <linearGradient id="glowGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="rgba(0, 240, 255, 0)" />
                        <stop offset="50%" stopColor="rgba(0, 240, 255, 0.8)" />
                        <stop offset="100%" stopColor="rgba(184, 255, 0, 0.8)" />
                    </linearGradient>
                </defs>

                {/* Background Trace Lines */}
                <path d="M 0 100 L 300 100 L 350 150 L 1000 150" className={styles.trace} />
                <path d="M 0 300 L 200 300 L 250 250 L 1000 250" className={styles.trace} />
                <path d="M 0 500 L 400 500 L 450 600 L 1000 600" className={styles.trace} />
                <path d="M 0 700 L 150 700 L 200 800 L 1000 800" className={styles.trace} />
                <path d="M 0 900 L 500 900 L 550 850 L 1000 850" className={styles.trace} />

                <path d="M 100 0 L 100 250 L 150 300 L 150 1000" className={styles.trace} />
                <path d="M 400 0 L 400 450 L 500 550 L 500 1000" className={styles.trace} />
                <path d="M 800 0 L 800 650 L 700 750 L 700 1000" className={styles.trace} />

                {/* Active Overlays - Render glowing paths if a project is active */}
                {activeProject && (
                    <>
                        <path d="M 0 300 L 200 300 L 250 250 L 1000 250" className={styles.activeGlow1} />
                        <path d="M 0 500 L 400 500 L 450 600 L 1000 600" className={styles.activeGlow2} />

                        {/* Pulsing nodes on intersections */}
                        <circle cx="200" cy="300" r="4" className={styles.nodeActive} />
                        <circle cx="450" cy="600" r="4" className={styles.nodeActive} />
                        <circle cx="250" cy="250" r="4" className={styles.nodeActive} />
                        <circle cx="400" cy="500" r="4" className={styles.nodeActive} />
                    </>
                )}
            </svg>
        </div>
    );
};
export default CircuitOverlay;
