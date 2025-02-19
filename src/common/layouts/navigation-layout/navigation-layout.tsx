import { Outlet } from 'react-router-dom';

import { CommonHeader } from '@/common/components/common-header';

import styles from './navigation-layout.module.css';

export const NavigationLayout = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.headerWrapper}>
        <CommonHeader />
      </div>
      <div className={styles.contentWrapper}>
        <Outlet />
      </div>
    </div>
  );
};
