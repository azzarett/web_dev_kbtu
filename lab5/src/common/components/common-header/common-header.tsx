/* eslint-disable arrow-body-style */
import styles from './common-header.module.css';

export const CommonHeader = () => {
  return (
    <header className={styles.wrapper}>
      <div className={styles.content}>
        <div className={styles.logo}>
          <h1>Logo</h1>
        </div>
      </div>
    </header>
  );
};
