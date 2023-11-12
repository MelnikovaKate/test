import React, { Fragment, FC, PropsWithChildren } from 'react';
import { Tab } from '@headlessui/react';
import styles from './Tabs.module.less';
import cn from 'classnames';

interface ITabs extends PropsWithChildren {
    tabsData: string[];
}

export const Tabs: FC<ITabs> = ({ tabsData, children }) => {
    return (
        <div className={styles.container}>
            <Tab.Group>
                <Tab.List className={styles.tabList}>
                    {tabsData.map((tab) => (
                        <Tab key={tab} as={Fragment}>
                        {({ selected }) => (
                            <div className={styles.tabWrapper}>
                                <div className={cn(styles.tab, selected && styles.active)}>
                                    {tab}
                                </div>
                            </div>
                        )}
                        </Tab>
                    ))}
                </Tab.List>
                <Tab.Panels>
                    {React.Children.map(children, (child) => (
                        <Tab.Panel key={children?.toString()}>
                            {child}
                        </Tab.Panel>
                    ))}
                </Tab.Panels>
            </Tab.Group>  
        </div>
    );
};