import { TaxPeriod } from "enums/taxPeriod.enum";
import { DocumentType } from "enums/documentType.enum";

export interface IRecordFilter {
    taxPeriod: TaxPeriod | null;
    documentType: DocumentType | null;
    statuses: number[];
    startDate: Date | null;
    endDate: Date | null;
}