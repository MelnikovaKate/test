import React from 'react';
import styles from './NotesEditorPage.module.less';
import { Header } from './Header';
import { Note } from './Note/Note';
import { useNotesEditorPage } from './hooks/useNotesEditorPage';
import { Empty } from 'antd';

export const NotesEditorPage = () => {
    const {
        notesData,
        tags,
        handleCreateNote,
        handleSaveEdit,
        handleDeleteAll,
        handleDeleteNote,
        handleFilter
    } = useNotesEditorPage();

    return (
        <div className={styles.container}>
            <Header
                options={tags}
                handleFilter={handleFilter}
                handleDeleteAll={handleDeleteAll}
                handleCreate={handleCreateNote}
            />
            <div className={styles.notesList}>
                {notesData.length ? (
                    notesData.map(note => (
                        <Note
                            note={note}
                            handleSaveEdit={handleSaveEdit}
                            handleDelete={handleDeleteNote}
                        />
                    ))
                ) : (
                    <Empty description='No data. Start to create notes'/>
                )}
            </div>
        </div>
    );
};