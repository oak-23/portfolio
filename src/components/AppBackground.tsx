import React from 'react';
import styles from './AppBackground.module.css';

const AppBackground: React.FC = () => {
    return (
        <div className={styles.appBg}>
            <svg className={styles.svgBg} preserveAspectRatio="none" viewBox="0 0 1000 1000">
                <defs>
                    <linearGradient id="globalGlow" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="rgba(0, 240, 255, 0.1)" />
                        <stop offset="50%" stopColor="rgba(0, 240, 255, 0.4)" />
                        <stop offset="100%" stopColor="rgba(184, 255, 0, 0.4)" />
                    </linearGradient>
                </defs>

                {/* High-tech dotted grid pattern */}
                <pattern id="dotGrid" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                    <circle cx="20" cy="20" r="1.5" fill="var(--color-trace)" opacity="0.4" />
                </pattern>
                <rect x="0" y="0" width="100%" height="100%" fill="url(#dotGrid)" />

                {/* Diagonal and orthogonal aesthetic circuit paths wrapping the screen */}
                <path d="M 0 150 L 150 150 L 250 250 L 1000 250" className={styles.traceLine} />
                <path d="M 0 350 L 50 350 L 150 450 L 1000 450" className={styles.traceLine} />
                <path d="M 0 650 L 250 650 L 350 750 L 1000 750" className={styles.traceLine} />
                <path d="M 0 850 L 750 850 L 850 950 L 1000 950" className={styles.traceLine} />

                <path d="M 150 0 L 150 150 L 250 250 L 250 1000" className={styles.traceLine} />
                <path d="M 750 0 L 750 850 L 850 950 L 850 1000" className={styles.traceLine} />

                {/* Global glowing tracing paths */}
                <path d="M 0 550 L 100 550 L 200 650 L 1000 650" className={styles.traceLineActive} />
                <path d="M 850 0 L 850 400 L 600 650 L 600 1000" className={styles.traceLineActiveAlt} />

                {/* Circuit nodes (components) layout visualizers */}
                <circle cx="150" cy="150" r="6" className={styles.node} />
                <circle cx="250" cy="250" r="4" className={styles.node} />
                <circle cx="750" cy="850" r="6" className={styles.node} />
                <circle cx="850" cy="950" r="4" className={styles.node} />
                <circle cx="200" cy="650" r="5" className={styles.nodeGlow} />
                <circle cx="600" cy="650" r="5" className={styles.nodeGlowAlt} />
            </svg>
        </div>
    );
};

export default AppBackground;
