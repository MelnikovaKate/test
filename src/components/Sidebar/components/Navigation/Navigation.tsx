import React from 'react';


import styles from './Navigation.module.less';
import { MenuLink } from './MenuItem';
import { Path } from 'enums/path.enum';

declare global {
  interface Window {
    showCollectorDialog: () => void;
  }
}

interface IProps {
  active: boolean;
}

export const Navigation = ({ active }: IProps) => {

  return (
    <nav className={styles.groupsNavigation}>
      <div className={styles.groupNavigation}>
        <ul className={styles.navigation}>
          <li className={styles.groupNavigation}>
              <>
                <MenuLink
                  text='Notes editor'
                  path={Path.NotesEditor}
                />
              </>
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
