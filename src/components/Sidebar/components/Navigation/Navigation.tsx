import React from 'react';

import styles from './Navigation.module.less';
import { MenuLink } from './MenuItem';
import { Path } from 'enums/path.enum';
import Avatar from 'antd/es/avatar/avatar';
import { UserOutlined } from '@ant-design/icons';
import { useAppSelector } from 'store';
import { getCurrentAuth } from 'store/auth.slice';

declare global {
  interface Window {
    showCollectorDialog: () => void;
  }
}

interface IProps {
  active: boolean;
}

export const Navigation = ({ active }: IProps) => {
  const { username } = useAppSelector(getCurrentAuth);
 
  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('username');
  }

  return (
    <nav className={styles.groupsNavigation}>
      <div className={styles.groupNavigation}>
        <ul className={styles.navigation}>
          <li className={styles.groupNavigation}>
              <>
                <div className={styles.username}>
                  <Avatar icon={<UserOutlined />} className={styles.userIcon}/>
                  {username}
                </div>
                <MenuLink
                  text='Logout'
                  path={Path.SignIn}
                  handleClick={handleLogout}
                />
                <MenuLink
                  text='Photos gallery'
                  path={Path.PhotoGallery}
                />
              </>
              <br />
              <br />
              <>
                <MenuLink
                  text='Notes editor'
                  path={Path.NotesEditor}
                />
              </>
              <br />
              <br />
              <>
                <MenuLink
                  text='Dropdown'
                  path={Path.Dropdown}
                />
              </>
          </li>
        </ul>
      </div>
    </nav>
  );
};
