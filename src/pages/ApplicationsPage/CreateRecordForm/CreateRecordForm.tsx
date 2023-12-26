import React, { useState } from 'react';
import { PopupWindow } from 'components/PopupWindow';
import { Divider, Typography, Upload, UploadFile, UploadProps, Modal , message} from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import styles from './CreateRecordForm.module.less';
import TextArea from 'antd/es/input/TextArea';
import { convertFormatDate } from 'helpers/convertFormatDate';
import { RcFile } from 'antd/es/upload';
import { getBase64 } from 'helpers/getBase64';
import { maxCountFile } from 'constants/maxCountFile';
import { generateFileLabel } from 'helpers/generateFileLabel';
import { CreateRecordFormText } from 'enums/CreateRecordFormText';

const { Text } = Typography;

export const CreateRecordForm = ({
}) => {
    const [previewOpen, setPreviewOpen] = useState(false);
    const [previewImage, setPreviewImage] = useState('');
    const [previewTitle, setPreviewTitle] = useState('');
    const [fileList, setFileList] = useState<UploadFile[]>([]);

    const handleCancel = () => setPreviewOpen(false);

    const handlePreview = async (file: UploadFile) => {
        if (!file.url && !file.preview) {
            file.preview = await getBase64(file.originFileObj as RcFile);
        }

        setPreviewImage(file.url || (file.preview as string));
        setPreviewOpen(true);
        setPreviewTitle(file.name || file.url!.substring(file.url!.lastIndexOf('/') + 1));
    };

    const handleChange: UploadProps['onChange'] = ({ fileList: newFileList }) =>
        setFileList(newFileList);

    const beforeUpload = (file: RcFile) => {
        const fileSizeInMB = file.size / (1024 * 1024);

        if (fileSizeInMB > 3) {
            message.error(CreateRecordFormText.ErrorSize);
        }
          
        return !!fileSizeInMB;
      };

    return (
        <PopupWindow
            buttonText={CreateRecordFormText.ButtonText}
            buttonSubmitText={CreateRecordFormText.ButtonText}
        >
            <div className={styles.container}>
                <div className={styles.header}>
                    <div className={styles.recordInfo}>
                        <Text className={styles.recordTitle}>{CreateRecordFormText.Title}</Text>
                        <Text className={styles.recordDate}>{convertFormatDate(new Date())}</Text>
                    </div>
                </div>
                <div className={styles.recordFilesContainer}>
                    <div className={styles.dividerContainer}>
                        <Text className={styles.filesInfoText}>{fileList.length}</Text>
                        <Text className={styles.filesInfoText}>{generateFileLabel(fileList.length)}</Text>
                        <Divider className={styles.divider}/>
                    </div>
                    <div className={styles.recordFilesWrapper}>
                        <Upload
                            listType="picture-card"
                            fileList={fileList}
                            maxCount={maxCountFile}
                            beforeUpload={beforeUpload}
                            onPreview={handlePreview}
                            onChange={handleChange}
                        >
                            {fileList.length >= maxCountFile ? null : <PlusOutlined />}
                        </Upload>
                        <Modal open={previewOpen} title={previewTitle} footer={null} onCancel={handleCancel}>
                            <img alt="example" style={{ width: '100%' }} src={previewImage} />
                        </Modal>
                    </div>
                </div>
                <div className={styles.recordCommentContainer}>
                    <Text className={styles.recordCommentText}>{CreateRecordFormText.CommentLabel}</Text>
                    <TextArea rows={4} placeholder={CreateRecordFormText.CommentPlaceholder} maxLength={6} />
                </div>
            </div>
        </PopupWindow>
    );
};