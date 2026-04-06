import React from 'react';
import styles from './Hero.module.css';

const Hero: React.FC = () => {
  return (
    <section id="hero" className={`section ${styles.hero}`}>
      <div className={`container ${styles.heroContainer}`}>
        <div className={styles.visual}>
          <div className={styles.geometry}>
            <div className={styles.circle}></div>
            <div className={styles.line1}></div>
            <div className={styles.line2}></div>
            <div className={styles.node1}></div>
            <div className={styles.node2}></div>
          </div>

          <div className={styles.pictureWrapper}>
            {/* Glowing Solder Dots branching OUTSIDE the wrapper */}
            <div className={styles.frameNode1}></div>
            <div className={styles.frameNode2}></div>
            <div className={styles.frameNode3}></div>
            <div className={styles.frameNode4}></div>

            {/* Traces routing OUTSIDE the wrapper */}
            <div className={styles.traceTopLine}></div>
            <div className={styles.traceRightLine}></div>
            <div className={styles.traceBottomLine}></div>
            <div className={styles.traceLeftLine}></div>

            {/* Circuit Corner Bracket Decals */}
            <div className={styles.frameCornerTopLeft}></div>
            <div className={styles.frameCornerBottomRight}></div>
            <div className={styles.frameCornerTopRight}></div>
            <div className={styles.frameCornerBottomLeft}></div>

            <div className={styles.innerPlate}>
              <img src={`${import.meta.env.BASE_URL}profile.jpg`} alt="Oak Soe Oo" className={styles.profilePic} />
              <div className={styles.circuitCircuitry1}></div>
              <div className={styles.circuitCircuitry2}></div>
            </div>
          </div>
        </div>

        <div className={styles.content}>
          <h1 className={styles.title}>
            Oak Soe Oo
          </h1>
          <div className={styles.subtitleBox}>
            <p className={styles.subtitle}>
              Multidisciplinary engineer bridging the gap between cutting-edge technology,
              strategic business development, and deep sustainability.
            </p>
          </div>
          <div className={styles.actions}>
            <a href="https://linkedin.com/in/oaksoeoo" target="_blank" rel="noopener noreferrer" className={styles.primaryBtn}>LinkedIn</a>
            <a href="https://github.com/oak-23" target="_blank" rel="noopener noreferrer" className={styles.secondaryBtn}>GitHub</a>
            <a href="mailto:oaksoeoo1023@gmail.com" className={styles.secondaryBtn}>Connect with me</a>
          </div>
        </div>
      </div>

      <div className={styles.scrollIndicator}>
        <span className={styles.scrollText}>Initialise sequence</span>
        <div className={styles.scrollArrow}></div>
      </div>
    </section>
  );
};

export default Hero;
