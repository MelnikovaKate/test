import { IApplication } from "types/application.type";
import { IApplicationFilter } from "types/applicationFilter.type";
import { ISort } from "types/sort.type";
import { applications } from "constants/applications";

export const ApplicationService = () => {
    let getApplications = (pageNumber: number, pageSize: number, filters: IApplicationFilter, sort: ISort) => {
        const skip = (pageNumber - 1) * pageSize;
        let resultApplications = applications;

        if (filters.startDate) {
            resultApplications = resultApplications.filter(r => r.date >= filters.startDate!);
        }

        if (filters.endDate) {
            resultApplications = resultApplications.filter(r => r.date <= filters.endDate!);
        }

        if (sort.ascending) {
            resultApplications = resultApplications.sort((a, b) => {
                if (a.date > b.date) {
                    return 1;
                }
                if (a.date < b.date) {
                    return -1;
                }
    
                return 0;
            });
        }

        if (sort.descending) {
            resultApplications = resultApplications.sort((a, b) => {
                if (a.date < b.date) {
                    return 1;
                }
                if (a.date > b.date) {
                    return -1;
                }
    
                return 0;
            });
        }

        return resultApplications.slice(skip, skip + pageSize); // Skip (pageNumber - 1) * pageSize; Take: pageSize
    };

    return { getApplications, totalCount: applications.length };
}