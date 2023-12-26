import React, { useState, useMemo, useEffect, FC } from 'react';
import {  DatePickerProps, DatePicker, Button, Typography } from 'antd';
import styles from './Filters.module.less';
import { Collapse } from 'components/Collapse';
import { IApplicationFilter } from 'types/applicationFilter.type';
import { ApplicationFilterText } from 'enums/ApplicationFilterText';

const {  Text } = Typography;

interface IFiltersProps {
    handleFilters: (filters: IApplicationFilter) => void;
}

export const Filters: FC<IFiltersProps> = ({ handleFilters }) => {    
    const [startDateFilter, setStartDateFilter] = useState<Date | null>(null);
    const [endDateFilter, setEndDateFilter] = useState<Date | null>(null);

    const filters = useMemo<IApplicationFilter>(() => {
        return {
            startDate: startDateFilter,
            endDate: endDateFilter,
            sort: {
                ascending: true,
                descending: false
            }
        }
    }, [startDateFilter, endDateFilter]);

    useEffect(() => {
        handleFilters(filters);
    }, [filters]);

    const onChangeStartDate: DatePickerProps['onChange'] = (date) => {
        date ? setStartDateFilter(new Date(date.year(), date.month() + 1, date.date())) : setStartDateFilter(null);
    };

    const onChangeEndDate: DatePickerProps['onChange'] = (date) => {
        date ? setEndDateFilter(new Date(date.year(), date.month() + 1, date.date())) : setEndDateFilter(null);
    };
      
    return (
        <div className={styles.container}>
            <Collapse
                title={ApplicationFilterText.CollapseTitle}
            >
                <div className={styles.filterPanel}>
                    <Text className={styles.label}>{ApplicationFilterText.DateCreationLabel}</Text>
                    <div className={styles.datePickerContainer}>
                        <Text className={styles.label}>{ApplicationFilterText.StartDateLabel}</Text>
                        <DatePicker
                            className={styles.datePicker}
                            placeholder={ApplicationFilterText.DatePickerPlaceholder}
                            onChange={onChangeStartDate}
                        />
                        <Text className={styles.label}>{ApplicationFilterText.EndDateLabel}</Text>
                        <DatePicker
                            className={styles.datePicker}
                            placeholder={ApplicationFilterText.DatePickerPlaceholder}
                            onChange={onChangeEndDate}
                        />
                    </div>
                </div>
            </Collapse>
        </div>
    );
};