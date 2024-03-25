import React, { FC } from 'react';
import { Button, Typography, Select, Space, Input } from 'antd';
import styles from './Filters.module.less';
import { Collapse } from 'components/Collapse';
import { IBeerFilter } from 'types/beerFilter.type';
import { useFilters } from './hooks/useFilters';

const { Text } = Typography;

interface IFiltersProps {
    countries: string[];
    handleFilters: (filters: IBeerFilter) => void;
}

export const Filters: FC<IFiltersProps> = ({ countries, handleFilters }) => {    
    const {
        options,
        minAlcohol,
        maxAlcohol,
        onSearchTitle,
        onChangeMinAlcohol,
        onChangeMaxAlcohol,
        handleChangeCountry
    } = useFilters(countries, handleFilters);
      
    return (
        <div className={styles.container}>
            <Collapse title='Filters' collapsed>
                <div className={styles.filterPanel}>
                    <div className={styles.lineGroup}>
                        <div className={styles.columnGroup}>
                            <Text className={styles.label}>Title</Text>
                            <div className={styles.buttonsWrapper}>
                                <Input
                                    placeholder="Enter the title of the beer"
                                    onChange={(e) => onSearchTitle(e.target.value)}
                                    style={{ width: 304 }}
                                    allowClear
                                />
                            </div>
                        </div>
                        <div className={styles.columnGroup}>
                            <Text className={styles.label}>Alcohol</Text>
                            <div className={styles.buttonsWrapper}>
                                <Space direction="horizontal">
                                    <Input
                                        ref={minAlcohol}
                                        placeholder="3"
                                        allowClear
                                        addonAfter={'%'}
                                        style={{ width: 100 }}
                                        onChange={(e) => onChangeMinAlcohol(e.target.value)}
                                    />
                                    <Input
                                        ref={maxAlcohol}
                                        placeholder="8"
                                        allowClear
                                        addonAfter={'%'}
                                        style={{ width: 100 }}
                                        onChange={(e) => onChangeMaxAlcohol(e.target.value)}
                                    />
                                </Space>
                            </div>
                        </div>
                        <div className={styles.columnGroup}>
                            <Text className={styles.label}>Country</Text>
                            <div className={styles.buttonsWrapper}>
                                <Select
                                    mode="multiple"
                                    style={{ width: '300px' }}
                                    placeholder="Select country"
                                    onChange={handleChangeCountry}
                                    optionLabelProp="label"
                                    options={options}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </Collapse>
        </div>
    );
};