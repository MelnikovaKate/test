import React, { useState, PropsWithChildren, FC } from 'react';
import {  Button } from 'antd';
import styles from './Collapse.module.less';
import { UpOutlined, DownOutlined } from '@ant-design/icons';

interface ICollapseProps extends PropsWithChildren {
    title: string;
    collapsed?: boolean;
}

export const Collapse: FC<ICollapseProps> = ({title, collapsed = false, children}) => {
    const [isCollapsed, setIsCollapsed] = useState(collapsed);
      
    return (
        <div className={styles.container}>
            <Button
                className={styles.button}
                onClick={() => setIsCollapsed(prev => !prev)}
            >
                {title}
                {isCollapsed ? <UpOutlined /> : <DownOutlined />}
            </Button>
            {isCollapsed && <div>{children}</div>}
        </div>
    );
};