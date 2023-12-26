import React, { useState } from 'react';
import { Filters } from './Filters';
import { ArchiveTable } from './ArchiveTable';
import styles from './ArchiveJournal.module.less';
import { RecordService } from 'services';
import { IRecordFilter } from 'types/recordFilter.type';
import { IPagination } from 'types/pagination.type';
import { ISort } from 'types/sort.type';

export const ArchiveJournal = () => {
    const [filters, setFilters] = useState<IRecordFilter>({
        taxPeriod: null,
        documentType: null,
        statuses: [],
        startDate: null,
        endDate: null
    });

    const [sort, setSort] = useState<ISort>({
        ascending: false,
        descending: false
    });

    const [pagination, setPagination] = useState<IPagination>({
        pageNumber: 1,
        pageSize: 30
    });

    const { getRecords, totalCount } = RecordService();
    const records = getRecords(pagination.pageNumber, pagination.pageSize, filters, sort);
    
    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <Filters handleFilters={setFilters}/>
            </div>
            <ArchiveTable records={records} totalCount={totalCount} handlePagination={setPagination} handleSort={setSort} />
        </div>
    );
};