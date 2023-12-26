import { IRecord } from "types/record.type";
import { IRecordFilter } from "types/recordFilter.type";
import { ISort } from "types/sort.type";
import { records } from "constants/records";

export const RecordService = () => {
    let getRecords = (pageNumber: number, pageSize: number, filters: IRecordFilter, sort: ISort) => {
        const skip = (pageNumber - 1) * pageSize;
        let resultRecords = records;

        if (filters.taxPeriod) {
            resultRecords = resultRecords.filter(r => r.taxPeriod === filters.taxPeriod);
        }

        if (filters.documentType) {
            resultRecords = resultRecords.filter(r => r.documentType === filters.documentType);
        }

        if (filters.statuses.length) {
            resultRecords = resultRecords.filter(r => filters.statuses.includes(r.recordStatus));
        }

        if (filters.startDate) {
            resultRecords = resultRecords.filter(r => r.recordDate >= filters.startDate!);
        }

        if (filters.endDate) {
            resultRecords = resultRecords.filter(r => r.recordDate <= filters.endDate!);
        }

        if (sort.ascending) {
            resultRecords = resultRecords.sort((a, b) => {
                if (a.recordDate > b.recordDate) {
                    return 1;
                }
                if (a.recordDate < b.recordDate) {
                    return -1;
                }
    
                return 0;
            });
        }

        if (sort.descending) {
            resultRecords = resultRecords.sort((a, b) => {
                if (a.recordDate < b.recordDate) {
                    return 1;
                }
                if (a.recordDate > b.recordDate) {
                    return -1;
                }
    
                return 0;
            });
        }

        return resultRecords.slice(skip, skip + pageSize); // Skip (pageNumber - 1) * pageSize; Take: pageSize
    };
    return { getRecords, totalCount: records.length };
}

