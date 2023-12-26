import { UploadFile } from "antd/es/upload/interface";

export interface IFileRecord extends UploadFile {
    name: string;
    presentation: string;
}

export interface IRecord {
    requestGuid: string;
    documentDate: Date;
    documentNumber: string;
    documentPresentation: string;
    documentPresentationGuid: string;
    documentType: number;
    recordDate: Date;
    recordStatus: number;
    recordStatusComment: string;
    recordComment: string;
    organizationName: string;
    organizationGuid: string;
    taxPeriod: number;
    taxPeriodEndDate: Date;
    files: IFileRecord[];
}