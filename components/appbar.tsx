import styles from '../styles/appbar.module.css';

export function AppBar() {
  return (
    <div className={styles.appbar}>
      <div className={styles.container}>
        <span className={styles.title}>Guvenkemal.dev</span>
        <div className={styles.iconContainer}>
          <img src="/github-icon.png" className={styles.icon} />
          <img src="/linkedin-icon.png" className={styles.icon} />
        </div>
      </div>
    </div>
  );
}
