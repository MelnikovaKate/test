import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { Note } from 'types/note.type';
import { AppState } from './store';

interface INotesState {
  notes: Note[];
}

interface IEditNote {
  id: string;
  text: string;
  textWithTag: string;
  tags: string[];
}

const initialState: INotesState = {
  notes: [],
};

const notesSlice = createSlice({
  name: 'notes',
  initialState,
  reducers: {
    setNote(state, { payload }: PayloadAction<Note>) {
      state.notes.push(payload);
    },

    editNote(state, { payload }: PayloadAction<IEditNote>) {
      const { id, text, textWithTag, tags } = payload;
    
      return {
        ...state,
        notes: state.notes.map(item => {
          if (item.id === id) {
            return { ...item, text: text, textWithTags: textWithTag, tags: tags };
          }
          return item;
        })
      }
    },
    deleteNote(state, { payload }: PayloadAction<string>) {
      return {
        ...state,
        notes: state.notes.filter(note => note.id !== payload)
      }
    },
    // deleteTag(state, { payload }: PayloadAction<Note[]>) {
    //   state.notes
    // },
    deleteAllNotes(state) {
      state.notes = initialState.notes
    }
  },
});

const distinct = (array: string[]) => {
  return Array.from(new Set(array));
}


export const {
    setNote,
    editNote,
    deleteNote,
    deleteAllNotes,
} = notesSlice.actions;

export default notesSlice.reducer;

export const getNotes = (state: AppState) => state.notes.notes;
export const getTags = (state: AppState) => distinct(state.notes.notes.map(n => n.tags).flat())
