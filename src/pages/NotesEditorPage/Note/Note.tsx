import React, { useState, FC } from 'react';
import styles from './Note.module.less';
import { NoteType } from 'types/note.type';
import cn from 'classnames';
import { ActionButtons } from './ActionButtons';
import { NoteInfo } from './NoteInfo';

interface INote {
    note: NoteType;
    handleSaveEdit: (noteId: string, editText: string) => void;
    handleDelete: (noteId: string) => void;
}

export const Note: FC<INote> = ({
    note,
    handleSaveEdit,
    handleDelete
}) => {
    const [editText, setEditText] = useState('');
    const [isEditMode, setIsEditMode] = useState(false);
    const [editValue, setEditValue] = useState<NoteType | null>();

    const sharedProps = {
        defaultValue: editValue?.textWithTags,
    };

    const handleEdit = (note: NoteType) => {
        setEditValue(note);
        setEditText(note.textWithTags);
        setIsEditMode(prev => !prev);
    }

    const handleSave = () => {
        handleSaveEdit(note.id, editText)
        setIsEditMode(false);
    }

    return (
        <div className={cn(
                styles.wrapper,
                isEditMode && note.id === editValue?.id && styles.edit
            )}
        >
            <NoteInfo
                note={note}
                isEditMode={isEditMode && note.id === editValue?.id}
                sharedProps={sharedProps}
                setEditText={setEditText}
            />
            <ActionButtons
                note={note}
                isEditMode={isEditMode && editValue?.id === note.id}
                handleSave={handleSave}
                handleEdit={handleEdit}
                handleDelete={handleDelete}
                handleClose={() => setIsEditMode(false)}
            />
        </div>
    );
};