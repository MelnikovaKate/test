import React, { FC } from 'react';
import styles from './NoteInfo.module.less';
import TextArea from 'antd/es/input/TextArea';
import { NoteType } from 'types/note.type';

interface INoteInfo {
    note: NoteType;
    isEditMode: boolean;
    sharedProps: {
        defaultValue: string | undefined;
    };
    setEditText: (value: React.SetStateAction<string>) => void
}

export const NoteInfo: FC<INoteInfo> = ({
    note,
    isEditMode,
    sharedProps,
    setEditText
}) => {

    return (
        <div className={styles.noteInfo}>
            {isEditMode ? (
                <TextArea
                    {...sharedProps}
                    bordered={false}
                    rows={6}
                    style={{ resize: 'none' }}
                    onChange={(e) => setEditText(e.target.value)}
                />
            ) : (
                <p className={styles.noteText}>
                    {note.text}
                </p>
            )}
            <div className={styles.noteTagsList}>
                {note.tags.map(tag => (
                    <span className={styles.noteTag} key={tag}>
                        {tag}
                    </span>
                ))}
            </div>
        </div>
    );
};