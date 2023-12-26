import React, { useState, FC } from 'react';
import { PopupWindow } from 'components/PopupWindow';
import { Button, Divider, Typography, UploadProps, Upload, Modal } from 'antd';
import { UploadOutlined, DeleteOutlined, PlusOutlined, DownloadOutlined} from '@ant-design/icons';
import styles from './RecordForm.module.less';
import cn from 'classnames';
import { IViewModel } from 'types/viewModel.type';
import RecordStatus from 'components/RecordStatus/RecordStatus';
import { RcFile } from 'antd/es/upload';
import { getBase64 } from 'helpers/getBase64';
import type { UploadFile } from 'antd/es/upload/interface';
import { maxCountFile } from 'constants/maxCountFile';
import { generateFileLabel } from 'helpers/generateFileLabel';
import { RecordFormText } from 'enums/RecordFormText';

const { Paragraph, Text } = Typography;

interface IRecordFormProps {
    viewModel: IViewModel;
    isEdit: boolean;
    isOpen: boolean;
    onClose?: () => void;
}

export const RecordForm: FC<IRecordFormProps> = ({
    viewModel,
    isEdit,
    isOpen,
    onClose = () => {}
}) => {
    const [editableComment, setEditableComment] = useState(viewModel.comment);
    const [editMode, setEditMode] = useState(false);
    const [previewOpen, setPreviewOpen] = useState(false);
    const [previewImage, setPreviewImage] = useState('');
    const [previewTitle, setPreviewTitle] = useState('');

    const [fileList, setFileList] = useState<UploadFile[]>(viewModel.files);

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


    const handleDownload = async (file: UploadFile) => {
        fetch(file.url as RequestInfo)
        .then(response => response.blob())
        .then(blob => {
            const url = window.URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = file.name;
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
            window.URL.revokeObjectURL(url);
        });
    };
    
    return (
        <PopupWindow
            isOpen={isOpen}
            isMainButton={false}
            viewButtons={isEdit}
            onClose={onClose}
        >
            <div className={styles.container}>
                <div className={styles.header}>
                    <div className={styles.infoContainer}>
                        <Text className={styles.recordTitle}>{RecordFormText.Title}</Text>
                        {isEdit && (
                            <Button
                                className={cn(styles.buttonEdit, editMode && styles.active)}
                                onClick={() => setEditMode(prev => !prev)}
                            >
                                {RecordFormText.EditButtonText}
                            </Button>
                        )}
                    </div>
                    <div className={styles.recordInfo}>
                        <RecordStatus status={viewModel.status} />
                        <Text className={styles.recordDate}>{viewModel.date}</Text>
                    </div>
                </div>
                <div className={styles.recordFilesContainer}>
                    <div className={styles.dividerContainer}>
                        <Text className={styles.filesInfoText}>{fileList.length}</Text>
                        <Text className={styles.filesInfoText}>{generateFileLabel(fileList.length)}</Text>
                        <Button icon={<UploadOutlined className={styles.icon} />} className={styles.buttonUpload} />
                        <Divider className={styles.divider}/>
                    </div>
                    <div className={styles.recordFilesWrapper}>
                    <Upload
                            listType="picture-card"
                            fileList={fileList}
                            showUploadList = {{
                                showRemoveIcon: editMode,
                                removeIcon: <DeleteOutlined />,
                                showDownloadIcon: true,
                                downloadIcon: <DownloadOutlined />,
                            }}
                            maxCount={maxCountFile}
                            onPreview={handlePreview}
                            onChange={handleChange}
                            onDownload={handleDownload}
                        >
                            {fileList.length < maxCountFile && editMode && <PlusOutlined />}
                    </Upload>
                    <Modal open={previewOpen} title={previewTitle} footer={null} onCancel={handleCancel}>
                        <img alt="example" style={{ width: '100%' }} src={previewImage} />
                    </Modal>
                    </div>
                </div>
                <div className={styles.recordCommentContainer}>
                    <Text className={styles.recordCommentLabel}>{RecordFormText.CommentLabel}</Text>
                    <Paragraph
                        editable={editMode && {
                            tooltip: RecordFormText.CommentTooltip,
                            onChange: setEditableComment,
                            maxLength: 500,
                            autoSize: { maxRows: 5, minRows: 3 },
                        }}
                        className={styles.recordCommentText}
                    >
                        {editableComment}
                    </Paragraph>
                </div>
            </div>
        </PopupWindow>
    );
};