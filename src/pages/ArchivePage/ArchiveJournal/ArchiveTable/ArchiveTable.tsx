import React, { useState, FC, useMemo, useEffect } from 'react';
import styles from './ArchiveTable.module.less';
import { Pagination, Button } from 'antd';
import { RecordForm } from 'components/RecordForm';
import { IViewModel } from 'types/viewModel.type';
import { IRecord } from 'types/record.type';
import { convertFormatDate } from 'helpers/convertFormatDate';
import { getTaxPeriod } from 'helpers/getTaxPeriod';
import { getDocumentType } from 'helpers/getDocumentType';
import { IPagination } from 'types/pagination.type';
import { StatusImageResolver } from 'components/StatusImageResolver';
import { SortAscendingOutlined, SortDescendingOutlined } from '@ant-design/icons';
import cn from 'classnames';
import { ISort } from 'types/sort.type';
import { columnRecordNames } from 'constants/columnRecordNames';

interface IArchiveTableProps {
    records: IRecord[];
    totalCount: number;
    handlePagination: (pagination: IPagination) => void;
    handleSort: (sort: ISort) => void;
}

export const ArchiveTable: FC<IArchiveTableProps> = ({ records, totalCount, handlePagination, handleSort }) => {
    const [isOpenRecordForm, setIsOpenRecordForm] = useState(false);

    const initViewModel: IViewModel = {
        status: 0,
        date: convertFormatDate(new Date()),
        files: [],
        comment: ''
    }

    const [viewModel, setViewModel] = useState<IViewModel>(initViewModel); 

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

    const createViewModel = (record: IRecord) => {
        setViewModel({
            status: record.recordStatus,
            date: convertFormatDate(record.recordDate),
            files: record.files,
            comment: record.recordComment 
        });
    }

    const handleOpenViewForm = (record: IRecord) => {
        setIsOpenRecordForm(prev => !prev);
        createViewModel(record);
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
                    {columnRecordNames.map((columnName, index) => (
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
                    {records.map(record => (
                        <tr onClick={() => handleOpenViewForm(record)} key={record.requestGuid}>
                            <td className={styles.td}>{convertFormatDate(record.recordDate)}</td>
                            <td className={styles.td}><StatusImageResolver status={record.recordStatus}/></td>
                            <td className={styles.td}>№ {record.documentNumber}</td>
                            <td className={styles.td}>{getDocumentType(+record.documentType)}</td>
                            <td className={styles.td}>{getTaxPeriod(record.taxPeriod)}</td>
                            <td className={styles.td}>{record.organizationName}</td>
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
                    isEdit={false}
                    isOpen={isOpenRecordForm}
                    onClose={() => setIsOpenRecordForm(false)}
                />
            )}
        </div>
    );
};