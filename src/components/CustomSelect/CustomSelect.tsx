import React, { useState, FC, Dispatch, SetStateAction, useRef, useEffect } from 'react';
import { Listbox } from '@headlessui/react';
import styles from './CustomSelect.module.less';
import cn from 'classnames';
import { CustomTag } from 'components/CustomTag';
import tick from '../../asserts/tick.svg';

interface ICustomSelect {
    options: string[];
    selectedValues: string[];
    dataId: string;
    handleSelect: (dataId: string, data: string[]) => void;
    handleDelete: (dataId: string, deletedItem: string) => void;
}

export const CustomSelect: FC<ICustomSelect> = ({ options, selectedValues, dataId, handleSelect, handleDelete }) => {
    const [values, setValues] = useState<string[]>(selectedValues);
    const listRef = useRef<HTMLDivElement>(null);
    const [isScrolledToBottom, setIsScrolledToBottom] = useState(false);
  
    useEffect(() => {
        const handleScroll = () => {
          if (listRef.current) {
            const { scrollTop, scrollHeight, clientHeight } = listRef.current;
            setIsScrolledToBottom(scrollHeight - scrollTop === clientHeight);
          }
        };
    
        if (listRef.current) {
          listRef.current.addEventListener('scroll', handleScroll);
        }
    
        return () => {
          if (listRef.current) {
            listRef.current.removeEventListener('scroll', handleScroll);
          }
        };
      }, []);

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
            <CustomTag values={values} handleDelete={(value) => onDelete(dataId, value)} />
            <div className={cn(styles.wrapper, isScrolledToBottom ? styles.listShadowHidden : '')} ref={listRef}>
                <Listbox value={values} onChange={(values) => onSelect(dataId, values)} multiple>
                    <Listbox.Options static>
                        {options.map((option) => (
                            <Listbox.Option key={option} value={option} className={styles.option}>
                                {({ selected }) => (
                                    <div className={styles.optionsGroup}>
                                        <span>{option}</span>
                                        <span className={cn(styles.selectOption, selected && styles.selected)}>
                                            {selected && <img src={tick} alt='tick'/>}
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