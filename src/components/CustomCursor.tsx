import React, { useEffect, useState } from 'react';
import styles from './CustomCursor.module.css';

const CustomCursor: React.FC = () => {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const isTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    if (isTouch) return;

    const onMove = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
      setVisible(true);
    };

    const onLeave = () => setVisible(false);

    window.addEventListener('mousemove', onMove);
    document.body.addEventListener('mouseleave', onLeave);

    return () => {
      window.removeEventListener('mousemove', onMove);
      document.body.removeEventListener('mouseleave', onLeave);
    };
  }, []);

  if (!visible) return null;

  return (
    <>
      <div
        className={styles.dot}
        style={{ left: pos.x, top: pos.y }}
      />
      <div
        className={styles.squareRing}
        style={{ left: pos.x, top: pos.y }}
      />
    </>
  );
};

export default CustomCursor;
