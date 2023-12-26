import { PropsWithChildren, ReactNode } from 'react';
import { NavLink } from 'react-router-dom';
import classNames from 'classnames';
import { Tooltip } from 'antd';

import styles from './MenuItem.module.less';
import React from 'react';

interface IProps {
  readonly text: string;
  readonly path?: string;
  readonly active?: boolean;
  readonly navigationLink?: boolean;
  readonly handleClick?: () => void;
}

export const MenuLink = ({
  text,
  path,
  children,
  active,
  navigationLink,
  handleClick
}: PropsWithChildren<IProps>) => {
  const getNavLinkClassName = ({ isActive }: { isActive?: boolean }) =>
    classNames(styles.navigationItem, { [styles.active]: isActive, [styles.navigationLink]: navigationLink });

  return (
    <Tooltip placement="right">
      <div>
        {path ? (
          <NavLink to={path} className={getNavLinkClassName} onClick={handleClick}>
            <span className={styles.text}>{text}</span>
            {children}
          </NavLink>
        ) : (
          <div className={getNavLinkClassName({ isActive: active })}>
            {children}
          </div>
        )}
      </div>
    </Tooltip>
  );
};
