import React, { useState, FC, Dispatch, SetStateAction } from 'react';
import { Listbox } from '@headlessui/react';
import styles from './Select.module.less';
import cn from 'classnames';
import { Tag } from 'components/Tag';

interface ISelect {
    options: string[];
    selectedValues: string[];
    dataId: string;
    handleSelect: (dataId: string, data: string[]) => void;
    handleDelete: (dataId: string, deletedItem: string) => void;
}

export const Select: FC<ISelect> = ({ options, selectedValues, dataId, handleSelect, handleDelete }) => {
    const [values, setValues] = useState<string[]>(selectedValues);

    const onSelect = (dataId: string, values: string[]) => {
        setValues(values);
        handleSelect(dataId, values)
    }

    const onDelete = (dataId: string, value: string) => {
        setValues((prev) => prev?.filter(i => i !== value));
        handleDelete(dataId, value);
    }
    
    return (
        <div className={styles.container}>
            <Tag values={values} handleDelete={(value) => onDelete(dataId, value)} />
            <div className={styles.wrapper}>
                <Listbox value={values} onChange={(values) => onSelect(dataId, values)} multiple>
                <Listbox.Options static>
                    {options.map((option) => (
                        <Listbox.Option key={option} value={option} className={styles.option}>
                            {({ selected }) => (
                                <div className={styles.optionsGroup}>
                                    <span>{option}</span>
                                    <span className={cn(styles.selectOption, selected && styles.selected)}>
                                        {/* {checked && <img src='../../../public/asserts/Tick.svg' />} */}
                                    </span>
                                </div>
                            )}
                        </Listbox.Option>
                    ))}
                </Listbox.Options>
                </Listbox>
            </div>
        </div>
    );
};