import React, { useState, PropsWithChildren, ReactNode, FC } from 'react';
import { Menu } from '@headlessui/react';
import styles from './Dropdown.module.less';
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
                        {/* <img src='../../../public/asserts/search.svg' /> */}
                        {buttonText}
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