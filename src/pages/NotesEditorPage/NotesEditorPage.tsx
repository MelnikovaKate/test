import React, { useState, useEffect, useMemo } from 'react';
import styles from './NotesEditorPage.module.less';
import { SizeType } from 'antd/es/config-provider/SizeContext';
import { Button, MenuProps, Dropdown, Space, Select, Tag } from 'antd';
import { FormOutlined, FilterOutlined, DeleteOutlined, UserOutlined, EditOutlined, SaveOutlined } from '@ant-design/icons';
import { ModalWindow } from 'components/ModalWindow';
import TextArea from 'antd/es/input/TextArea';
import { Note } from 'types/note.type';
import { useSelector, useDispatch } from "react-redux";
import { getNotes, setNote, deleteAllNotes, deleteNote, editNote, getTags } from 'store/notes.slice';
import { AppDispatch } from 'store';
import cn from 'classnames';
import type { CustomTagProps } from 'rc-select/lib/BaseSelect';

const tagRender = (props: CustomTagProps) => {
    const { label, value, closable, onClose } = props;
    const onPreventMouseDown = (event: React.MouseEvent<HTMLSpanElement>) => {
      event.preventDefault();
      event.stopPropagation();
    };
    return (
      <Tag
        color={'gold'}
        onMouseDown={onPreventMouseDown}
        closable={closable}
        onClose={onClose}
        style={{ marginRight: 3 }}
      >
        {label}
      </Tag>
    );
  };

export const NotesEditorPage = () => {
    const [size, setSize] = useState<SizeType>('large');
    const notesList: Note[] = [
        {
            id: '1',
            text: 'Note 1 with tag cat',
            textWithTags: 'Note 1 with tag #cat',
            tags: ['cat']
        },
        {
            id: '2',
            text: 'Note 2 with tag cat and dog',
            textWithTags: 'Note 2 with tag #cat and #dog',
            tags: ['cat', 'dog']
        },
        {
            id: '3',
            text: 'Note 3 with tag products',
            textWithTags: 'Note 3 with tag #products',
            tags: ['products']
        },
        {
            id: '4',
            text: 'Note 4 with tag presents',
            textWithTags: 'Note 4 with tag #presents',
            tags: ['presents']
        },
        {
            id: '5',
            text: 'Note 5 with tag dog',
            textWithTags: 'Note 5 with tag #dog',
            tags: ['dog']
        },
    ];

    const dispatch: AppDispatch = useDispatch();

    const notes = useSelector(getNotes);

    const tags = useSelector(getTags).map(tag => ({ value: tag }));

    const [noteValue, setNoteValue] = useState<string>('');

    const distinct = (array: string[]) => {
        return Array.from(new Set(array));
    }

    const createNote = () => {
        const tags = distinct(foundTags(noteValue));

        if (!!noteValue) {
            dispatch(setNote({
                id: Date.now().toString(),
                text: noteValue.replace(/#/g, ""),
                textWithTags: noteValue,
                tags: tags
            }));
        }
    }
    const foundTags = (value: string) => {
        const regexp = /#[a-zA-Z0-9_]+/g;
        return Array.from(value.matchAll(regexp)).map(item => item[0]).map(item => item.replace(/#/g, ""));
    }

    const [isEdit, setIsEdit] = useState(false);
    const [editValue, setEditValue] = useState<Note | null>();

    const sharedProps = {
        defaultValue: editValue?.textWithTags,
    };

    const handleEdit = (note: Note) => {
        setEditValue(note);
        setEditText(note.textWithTags);
        setIsEdit(prev => !prev);
    }

    const [editText, setEditText] = useState('');

    const handleSaveEdit = (id: string) => {
        const tags = foundTags(editText);
        dispatch(editNote({id, text: editText.replace(/#/g, ""), textWithTag: editText, tags: tags}));
        setIsEdit(false);
    }

    const handleDeleteAll = () => {
        dispatch(deleteAllNotes());
    }

    const [notesData, setNotesData] = useState(notes);

    const handleFilter = (values: string[]) => { 
        if (values.length) {
            setNotesData(notes.filter(note => values.every(tag => note.tags.includes(tag))));
        } else {
            setNotesData(notes);
        }
    }

    useEffect(() => {
        setNotesData(notes);
    }, [notes]);

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <div className={styles.actionButtons}>
                    <div className={styles.selectWrapper}>
                        <Select
                            mode="multiple"
                            size={size}
                            placeholder="Filter by tags"
                            tagRender={tagRender}
                            style={{ width: '100%' }}
                            allowClear
                            options={tags}
                            onChange={handleFilter}
                        />
                    </div>
                    <Button type="default" icon={<DeleteOutlined />} size={size} onClick={() => handleDeleteAll()}>
                        Delete all
                    </Button>
                </div>
                <ModalWindow
                    title='Create note'
                    buttonText='Create new note'
                    buttonIcon={<FormOutlined />}
                    handleSubmit={createNote}
                >
                    <TextArea
                        rows={4}
                        allowClear
                        defaultValue=''
                        onChange={(e) => setNoteValue(e.target.value)}
                    />
                </ModalWindow>
            </div>
            <div className={styles.notesList}>
                {notesData.map(note => (
                    <div className={cn(styles.noteWrapper, isEdit && note.id === editValue?.id && styles.edit)} key={note.id}>
                        <div className={styles.noteInfo}>
                            {isEdit && note.id === editValue?.id ? (
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
                        {(isEdit && editValue?.id === note.id) ? (
                            <Button type="default" icon={<SaveOutlined />} onClick={() => handleSaveEdit(note.id)} />                       
                        ) : (
                            <Button type="default" icon={<EditOutlined />} onClick={() => handleEdit(note)} />
                        )}
                        <Button type="default" icon={<DeleteOutlined />} onClick={() => dispatch(deleteNote(note.id))} />
                    </div>
                ))}
            </div>
        </div>
    );
};