import { IFileApplication } from 'types/application.type';
import { IFileRecord } from './record.type';
import type { UploadFile } from 'antd/es/upload/interface';

export interface IViewModel {
    status: number;
    date: string;
    files: UploadFile[];
    comment: string;
}
