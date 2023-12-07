import { AppDispatch } from "store";
import { useDispatch, useSelector } from "react-redux";
import { getNotes, getTags, setNote, editNote, deleteAllNotes, deleteNote } from "store/notes.slice";
import { useState, useEffect } from "react";
import { distinct } from "helpers/distinct";

export const useNotesEditorPage = () => {
    const dispatch: AppDispatch = useDispatch();

    const notes = useSelector(getNotes);
    const tags = useSelector(getTags).map(tag => ({ value: tag }));
    
    const [notesData, setNotesData] = useState(notes);

    const handleCreateNote = (noteText: string) => {
        const tags = distinct(foundTags(noteText));

        if (!!noteText) {
            dispatch(setNote({
                id: Date.now().toString(),
                text: noteText.replace(/#/g, ""),
                textWithTags: noteText,
                tags: tags
            }));
        }
    }
    const foundTags = (value: string) => {
        const regexp = /#[a-zA-Z0-9_]+/g;
        return Array.from(value.matchAll(regexp)).map(item => item[0]).map(item => item.replace(/#/g, ""));
    }

    const handleSaveEdit = (id: string, editText: string) => {
        const tags = foundTags(editText);
        dispatch(editNote({id, text: editText.replace(/#/g, ""), textWithTag: editText, tags: tags}));
    }

    const handleDeleteAll = () => {
        dispatch(deleteAllNotes());
    }

    const handleFilter = (values: string[]) => { 
        if (values.length) {
            setNotesData(notes.filter(note => values.every(tag => note.tags.includes(tag))));
        } else {
            setNotesData(notes);
        }
    }

    const handleDeleteNote = (noteId: string) => {
        dispatch(deleteNote(noteId));
    }

    useEffect(() => {
        setNotesData(notes);
    }, [notes]);

    return {
        notesData,
        tags,
        handleCreateNote,
        handleSaveEdit,
        handleDeleteAll,
        handleDeleteNote,
        handleFilter
    }
}