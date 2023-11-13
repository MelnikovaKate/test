import React, { useState, PropsWithChildren, ReactNode, FC } from 'react';
import { Menu } from '@headlessui/react';
import styles from './Dropdown.module.less';
import search from '../../asserts/search.svg';
import cn from 'classnames';

interface IDropdown extends PropsWithChildren {
    buttonText: string;
    buttonContent: ReactNode;
}

export const Dropdown: FC<IDropdown> = ({ buttonText, buttonContent, children}) => {
    const [isOpen, setIsOpen] = useState(false);
      
    return (
        <div className={styles.container}>
            <Menu>
                <>
                    <Menu.Button
                        className={cn(styles.button, isOpen && styles.active)}
                        onClick={() => setIsOpen(prev => !prev)}
                    >
                        <div className={styles.group}>
                            <img src={search} alt='search' />
                            {buttonText}
                        </div>
                        {buttonContent}
                    </Menu.Button>
                    {isOpen && (
                        <div>
                            <Menu.Items static>
                                <Menu.Item>
                                    <div className={styles.menu}>
                                        {children}
                                    </div>
                                </Menu.Item>
                            </Menu.Items>
                        </div>
                    )}
                </>
            </Menu>
        </div>
    );
};