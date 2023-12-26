import React, { useState, useMemo, FC, useEffect } from 'react';
import {  DatePickerProps, DatePicker, Button, Typography, Select } from 'antd';
import styles from './Filters.module.less';
import { Collapse } from 'components/Collapse';
import { useTaxPeriodOptions } from 'hooks/useTaxPeriodOptions';
import { useDocumentTypeOptions } from 'hooks/useDocumentTypeOptions';
import { TaxPeriod } from 'enums/taxPeriod.enum';
import { IRecordFilter } from 'types/recordFilter.type';
import { DocumentType } from 'enums/documentType.enum';
import { Status } from 'enums/status.enum';
import cn from 'classnames';
import { RecordFilterText } from 'enums/RecordFilterText';

const { Text } = Typography;

interface IFiltersProps {
    handleFilters: (filters: IRecordFilter) => void;
}

export const Filters: FC<IFiltersProps> = ({ handleFilters }) => {    
    const [taxPeriodFilter, setTaxPeriodFilter] = useState<TaxPeriod | null>(null);
    const [documentTypeFilter, setDocumentTypeFilter] = useState<DocumentType | null>(null);
    const [inProcessFilter, setInProcessFilter] = useState<Status | null>(null);
    const [finishedFilter, setFinishedFilter] = useState<Status | null>(null);
    const [rejectedFilter, setRejectedFilter] = useState<Status | null>(null);
    const [startDateFilter, setStartDateFilter] = useState<Date | null>(null);
    const [endDateFilter, setEndDateFilter] = useState<Date | null>(null);

    const statusesFilter = useMemo(() => {
        let result: Status[] = [];

        if (inProcessFilter) {
            result = [...result, inProcessFilter]
        }

        if (finishedFilter) {
            result = [...result, finishedFilter]
        }

        if (rejectedFilter) {
            result = [...result, rejectedFilter]
        }

        return result;

    }, [inProcessFilter, finishedFilter, rejectedFilter]);

    const filters = useMemo<IRecordFilter>(() => {
        return {
            taxPeriod: taxPeriodFilter,
            documentType: documentTypeFilter,
            statuses: statusesFilter,
            startDate: startDateFilter,
            endDate: endDateFilter
        }
    }, [taxPeriodFilter, documentTypeFilter, statusesFilter, startDateFilter, endDateFilter]);

    useEffect(() => {
        handleFilters(filters);
    }, [filters]);

    const onChangeStartDate: DatePickerProps['onChange'] = (date, dateString) => {
        date ? setStartDateFilter(new Date(date.year(), date.month() + 1, date.day())) : setStartDateFilter(null);
    };

    const onChangeEndDate: DatePickerProps['onChange'] = (date, dateString) => {
        date ? setEndDateFilter(new Date(date.year(), date.month() + 1, date.day())) : setEndDateFilter(null);
    };

    const handleTaxPeriod = (value: string) => {
        setTaxPeriodFilter(+value as TaxPeriod);
    };

    const handleDocumentType = (value: string) => {
        setDocumentTypeFilter(+value as DocumentType);
    };

    const handleStatus = (value: number) => {
        switch (value) {
            case Status.InProcess:
                inProcessFilter ? setInProcessFilter(null) : setInProcessFilter(Status.InProcess);
                break;
            case Status.Finished:
                finishedFilter ? setFinishedFilter(null) : setFinishedFilter(Status.Finished);
                break;
            case Status.Rejected:
                rejectedFilter ? setRejectedFilter(null) : setRejectedFilter(Status.Rejected);
                break;
        
            default:
                break;
        }
    }
      
    return (
        <div className={styles.container}>
            <Collapse
                title={RecordFilterText.CollapseTitle}
            >
                <div className={styles.filterPanel}>
                    <div className={styles.lineGroup}>
                        <div className={styles.columnGroup}>
                            <Text className={styles.label}>{RecordFilterText.StatusLabel}</Text>
                            <div className={styles.buttonsWrapper}>
                                <Button
                                    className={cn(styles.button, inProcessFilter && styles.active)}
                                    onClick={() => handleStatus(Status.InProcess)}
                                >
                                    {RecordFilterText.InProcess}
                                </Button>
                                <Button
                                    className={cn(styles.button, finishedFilter && styles.active)}
                                    onClick={() => handleStatus(Status.Finished)}
                                >
                                    {RecordFilterText.Finished}
                                </Button>
                                <Button
                                    className={cn(styles.button, rejectedFilter && styles.active)}
                                    onClick={() => handleStatus(Status.Rejected)}
                                >
                                    {RecordFilterText.Rejected}
                                </Button>
                            </div>
                        </div>
                        <div className={styles.selectsContainer}>
                            <div className={styles.columnGroup}>
                                <Text className={styles.label}>{RecordFilterText.TaxPeriodLabel}</Text>
                                <Select
                                    placeholder={RecordFilterText.TaxPeriodPlaceholder}
                                    allowClear
                                    style={{ width: 170 }}
                                    onChange={handleTaxPeriod}
                                    options={useTaxPeriodOptions()}
                                    className={styles.select}
                                />
                            </div>
                            <div className={styles.columnGroup}>
                                <Text className={styles.label}>{RecordFilterText.DocumentTypeLabel}</Text>
                                <Select
                                    placeholder={RecordFilterText.DocumentTypePlaceholder}
                                    allowClear
                                    style={{ width: 220 }}
                                    onChange={handleDocumentType}
                                    options={useDocumentTypeOptions()}
                                    className={styles.select}
                                />
                            </div>
                        </div>
                    </div>
                    <div className={styles.lineGroup}>
                        <div className={styles.columnGroup}>
                            <Text className={styles.label}>{RecordFilterText.PeriodLabel}</Text>
                            <div className={styles.datePickerContainer}>
                                <Text className={styles.label}>{RecordFilterText.StartDateLabel}</Text>
                                <DatePicker
                                    className={styles.datePicker}
                                    placeholder={RecordFilterText.DatePickerPlaceholder}
                                    onChange={onChangeStartDate}
                                />
                                <Text className={styles.label}>{RecordFilterText.EndDateLabel}</Text>
                                <DatePicker
                                    className={styles.datePicker}
                                    placeholder={RecordFilterText.DatePickerPlaceholder}
                                    onChange={onChangeEndDate}
                                />
                            </div>
                        </div>
                        <div className={styles.columnGroup}>
                            <Text className={styles.label}>{RecordFilterText.FastTransitionLabel}</Text>
                            <div className={styles.buttonsWrapper}>
                                <Button className={styles.buttonTransition}>{RecordFilterText.Today}</Button>
                                <Button className={styles.buttonTransition}>{RecordFilterText.Week}</Button>
                                <Button className={styles.buttonTransition}>{RecordFilterText.Month}</Button>
                            </div>
                        </div>
                    </div>
                </div>
            </Collapse>
        </div>
    );
};