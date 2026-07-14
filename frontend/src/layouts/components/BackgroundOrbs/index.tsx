import styles from './BackgroundOrbs.module.css';

export function BackgroundOrbs() {
  return (
    <div className={styles.orbs}>
      <div className={`${styles.orb} ${styles.orb1}`}></div>
      <div className={`${styles.orb} ${styles.orb2}`}></div>
      <div className={`${styles.orb} ${styles.orb3}`}></div>
      <div className={`${styles.orb} ${styles.orb4}`}></div>
    </div>
  );
}
