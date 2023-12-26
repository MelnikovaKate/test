import React, { useState, FC } from 'react';
import styles from './Header.module.less';
import { SizeType } from 'antd/es/config-provider/SizeContext';
import { Button } from 'antd';
import { FormOutlined, DeleteOutlined} from '@ant-design/icons';
import { ModalWindow } from 'components/ModalWindow';
import TextArea from 'antd/es/input/TextArea';
import { TagSelect } from 'components/TagSelect';

interface IHeader {
    options: { value: string}[];
    handleFilter: (values: string[]) => void;
    handleDeleteAll: () => void;
    handleCreate: (noteText: string) => void
}

export const Header: FC<IHeader> = ({
    options,
    handleFilter,
    handleDeleteAll,
    handleCreate
}) => {
    const [size] = useState<SizeType>('large');
    const [noteText, setNoteText] = useState<string>('');

    const handleOpenCreate = () => {
        setNoteText('');
    }

    const handleCreateNote = () => {
        handleCreate(noteText);
    }

    return (
        <div className={styles.container}>
            <div className={styles.actionButtons}>
                <div className={styles.selectWrapper}>
                    <TagSelect
                        size={size}
                        placeholder="Filter by tags"
                        options={options}
                        handleChange={handleFilter}
                    />
                </div>
                <Button
                    type="default"
                    icon={<DeleteOutlined />}
                    size={size}
                    onClick={handleDeleteAll}
                >
                    Delete all
                </Button>
            </div>
            <ModalWindow
                title='Create note'
                buttonText='Create new note'
                buttonIcon={<FormOutlined />}
                handleOpen={handleOpenCreate}
                handleSubmit={handleCreateNote}
            >
                <TextArea
                    rows={4}
                    allowClear
                    defaultValue=''
                    value={noteText}
                    placeholder='Enter a note. If you want to add a tag, write the symbol # before the tag value. For example: #tag'
                    onChange={(e) => setNoteText(e.target.value)}
                />
            </ModalWindow>
        </div>
    );
};