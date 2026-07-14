import styles from './Header.module.css';

export function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <div className={styles.logoGlow}>
          <span className={styles.logoIcon}>☁</span>
        </div>
        <span className={styles.logoText}>如意管理系统</span>
      </div>
      <nav className={styles.nav}>
        <span className={`${styles.navItem} ${styles.active}`}>首页</span>
        <span className={styles.navItem}>消息</span>
        <span className={styles.navItem}>设置</span>
      </nav>
      <div className={styles.user}>
        <span className={styles.avatar}>管</span>
        <span className={styles.userName}>管理员</span>
      </div>
    </header>
  );
}
