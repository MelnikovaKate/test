import React, { useState } from 'react';
import { Filters } from './Filters';
import { ApplicationsTable } from './ApplicationsTable';
import styles from './ApplicationsJournal.module.less';
import { CreateRecordForm } from '../CreateRecordForm';
import { IApplicationFilter } from 'types/applicationFilter.type';
import { IPagination } from 'types/pagination.type';
import { ApplicationService } from 'services';
import { ISort } from 'types/sort.type';

export const ApplicationsJournal = () => {
    const [filters, setFilters] = useState<IApplicationFilter>({
        startDate: null,
        endDate: null,
    });

    const [sort, setSort] = useState<ISort>({
        ascending: false,
        descending: false
    });

    const [pagination, setPagination] = useState<IPagination>({
        pageNumber: 1,
        pageSize: 30
    });

    const { getApplications, totalCount } = ApplicationService();
    const applications = getApplications(pagination.pageNumber, pagination.pageSize, filters, sort);

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <Filters handleFilters={setFilters} />
                <CreateRecordForm />
            </div>
            <ApplicationsTable applications={applications} totalCount={totalCount} handlePagination={setPagination} handleSort={setSort} />
        </div>
    );
};