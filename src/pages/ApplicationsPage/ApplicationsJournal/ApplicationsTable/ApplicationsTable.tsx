import React, { useState, FC, useMemo, useEffect } from 'react';
import styles from './ApplicationsTable.module.less';
import { Pagination, Button } from 'antd';
import { RecordForm } from 'components/RecordForm';
import { IApplication } from 'types/application.type';
import { IViewModel } from '../../../../types/viewModel.type';
import { convertFormatDate } from 'helpers/convertFormatDate';
import { SortAscendingOutlined, SortDescendingOutlined } from '@ant-design/icons';
import { Status } from 'enums/status.enum';
import { IPagination } from 'types/pagination.type';
import { StatusImageResolver } from 'components/StatusImageResolver';
import { ISort } from 'types/sort.type';
import cn from 'classnames';
import { columnApplicationNames } from 'constants/columnApplicationNames';

interface IApplicationsTableProps {
    applications: IApplication[];
    totalCount: number;
    handlePagination: (pagination: IPagination) => void;
    handleSort: (sort: ISort) => void;
}

export const ApplicationsTable: FC<IApplicationsTableProps> = ({ applications, totalCount, handlePagination, handleSort }) => {
    const [isOpenRecordForm, setIsOpenRecordForm] = useState(false);
    const [ascending, setAscending] = useState<boolean | null>(null);
    const [isSort, setIsSort] = useState(false);

    const sort = useMemo<ISort>(() => {
        return {
            ascending: ascending !== null && ascending,
            descending: ascending !== null && !ascending,
        }
    }, [ascending]);

    useEffect(() => {
        handleSort(sort);
    }, [sort, ascending]);

    const initViewModel: IViewModel = {
        status: 0,
        date: convertFormatDate(new Date()),
        files: [],
        comment: ''
    }
    const [viewModel, setViewModel] = useState<IViewModel>(initViewModel);

    const createViewModel = (application: IApplication) => {
        setViewModel({
            status: application.isProcessed ? Status.Finished : Status.InProcess,
            date: convertFormatDate(application.date),
            files: application.files,
            comment: application.comment 
        });
    }

    const handleOpenViewForm = (application: IApplication) => {
        setIsOpenRecordForm(prev => !prev);
        createViewModel(application);
    }

    const onChangePagination = (page: number, pageSize: number) => {
        handlePagination({
            pageNumber: page,
            pageSize: pageSize
        });
    }

    const onSort = () => {
        setIsSort(true);
        setAscending(prev => !prev);
    }

    return (
        <div className={styles.container}>
            <table className={styles.table}>
                <thead className={styles.thead}>
                    {columnApplicationNames.map((columnName, index) => (
                        <th className={styles.th} key={columnName}>
                            {columnName}
                            {index === 0 && (
                                <Button
                                    icon={ascending ? <SortAscendingOutlined /> : <SortDescendingOutlined />} 
                                    className={cn(styles.sort, isSort && styles.active)} 
                                    onClick={onSort}
                                />
                            )}
                        </th>
                    ))}
                </thead>
                <tbody>
                    {applications.map(application => (
                        <tr onClick={() => handleOpenViewForm(application)} key={application.guid}>
                            <td className={styles.td}>{convertFormatDate(application.date)}</td>
                            <td className={styles.td}>
                                <StatusImageResolver status={application.isProcessed ? Status.Finished : Status.InProcess}/>
                            </td>
                            <td className={styles.td}>{application.comment}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <Pagination
                onChange={onChangePagination}
                defaultCurrent={1}
                total={totalCount}
                pageSizeOptions={[10, 20, 30, 50, 100]}
                defaultPageSize={30}
            />
            {isOpenRecordForm && (
                <RecordForm
                    viewModel={viewModel}
                    isEdit={true}
                    isOpen={isOpenRecordForm}
                    onClose={() => setIsOpenRecordForm(false)}
                />
            )}
        </div>
    );
};