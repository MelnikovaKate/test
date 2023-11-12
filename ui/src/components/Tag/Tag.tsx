import React, { Fragment, useState, FC, ReactNode, PropsWithChildren } from 'react';
import { Menu, Tab, Listbox } from '@headlessui/react';
import { filterData } from 'constants/filterData';
import styles from './Tag.module.less';
import cn from 'classnames';
import { TabType } from 'types/filterData.type';

interface ITag {
    values: string[];
    handleDelete: (value: string) => void;
}

export const Tag: FC<ITag> = ({ values, handleDelete }) => {  
    return (
        <div>
            {values && values.length > 0 && (
                <div className={styles.tagContainer}>
                    {values.map((item: any) => (
                        <div className={styles.tag}>
                            {item}
                            <button className={styles.deleteButton} onClick={() => handleDelete(item)}>x</button>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};