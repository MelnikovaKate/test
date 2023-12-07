import React, { FC } from 'react';
import styles from './CustomTag.module.less';

interface ICustomTag {
    values: string[];
    handleDelete: (value: string) => void;
}

export const CustomTag: FC<ICustomTag> = ({ values, handleDelete }) => {  
    return (
        <div>
            {values && values.length > 0 && (
                <div className={styles.tagContainer}>
                    {values.map((item: any) => (
                        <div className={styles.tag} key={item}>
                            {item}
                            <button className={styles.deleteButton} onClick={() => handleDelete(item)}>x</button>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};