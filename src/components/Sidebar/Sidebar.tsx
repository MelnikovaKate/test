import { Layout } from 'antd';
import { useRef } from 'react';
import { useLocation } from 'react-router-dom';

import { Navigation } from './components/Navigation';
import styles from './Sidebar.module.less';
import React from 'react';

const { Sider } = Layout;

export const Sidebar = () => {
  const location = useLocation();

  const ref = useRef(null);

  return (
    <Sider
      ref={ref}
      className={styles.sideBar}
      width={220}
    >
      <div className={styles.wrapChildren}>
        <div className={styles.navigation}>
          <Navigation active={true} />
        </div>
      </div>
    </Sider>
  );
};
