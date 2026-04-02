import React from 'react';
import styles from './Hero.module.css';

const Hero: React.FC = () => {
  return (
    <section id="hero" className={`section ${styles.hero}`}>
      <div className={`container ${styles.heroContainer}`}>
        <div className={styles.content}>
          <h1 className={styles.title}>
            Oak Soe Oo
          </h1>
          <div className={styles.subtitleBox}>
            <p className={styles.subtitle}>
              Spanning engineering, science, business, and the humanities, I integrate multiple disciplines to innovate strategies and solutions that create tangible impact.
            </p>
          </div>
          <div className={styles.actions}>
            <a href="https://linkedin.com/in/osoo" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
              LinkedIn
            </a>
            <a href="https://github.com/oak-23" target="_blank" rel="noopener noreferrer" className="btn btn-outline">
              GitHub
            </a>
            <a href="mailto:oaksoeoo1023@gmail.com" className="btn btn-outline">
              Connect with me
            </a>
          </div>
        </div>

        <div className={styles.visual}>
          <div className={styles.geometry}>
            <div className={styles.circle}></div>
            <div className={styles.line1}></div>
            <div className={styles.line2}></div>
            <div className={styles.node1}></div>
            <div className={styles.node2}></div>
          </div>
        </div>
      </div>

      <div className={styles.scrollIndicator}>
        <span className={styles.scrollText}>Scroll to Explore</span>
        <div className={styles.scrollArrow}></div>
      </div>
    </section>
  );
};
export default Hero;
