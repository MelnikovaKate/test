import { UploadFile } from "antd/es/upload/interface";

export interface IFileApplication extends UploadFile {
    name: string;
    data: string;
}

export interface IApplication {
    guid: string;
    date: Date;
    comment: string;
    isProcessed: boolean;
    files: IFileApplication[];
}