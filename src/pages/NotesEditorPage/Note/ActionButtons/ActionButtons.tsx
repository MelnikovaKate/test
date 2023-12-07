import React, { FC } from 'react';
import styles from './ActionButtons.module.less';
import { Button } from 'antd';
import { DeleteOutlined, EditOutlined, SaveOutlined, CloseOutlined } from '@ant-design/icons';
import { NoteType } from 'types/note.type';
import cn from 'classnames';

interface IActionButtons {
    note: NoteType;
    isEditMode: boolean;
    handleSave: () => void;
    handleEdit: (note: NoteType) => void;
    handleDelete: (noteId: string) => void;
    handleClose: () => void;
}

export const ActionButtons: FC<IActionButtons> = ({
    note,
    isEditMode,
    handleSave,
    handleEdit,
    handleDelete,
    handleClose
}) => {
    return (
        <div className={styles.container}>
            {isEditMode ? (
                <div className={styles.editMode}>
                    <Button
                        type="default"
                        icon={<SaveOutlined />}
                        onClick={handleSave}
                    >
                        Edit
                    </Button>
                    <Button
                        type="default"
                        icon={<CloseOutlined />}
                        onClick={handleClose}
                    />
                </div>
            ) : (
                <div className={styles.notEditMode}>
                    <Button
                        type="default"
                        icon={<EditOutlined />}
                        onClick={() => handleEdit(note)}
                    />
                    <Button
                        type="default"
                        icon={<DeleteOutlined />}
                        onClick={() => handleDelete(note.id)}
                    />
                </div>
            )}
        </div>
    );
};