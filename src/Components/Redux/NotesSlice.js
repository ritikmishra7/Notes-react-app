import { createSlice } from '@reduxjs/toolkit'

const notesSlice = createSlice({
    name: 'notesSlice',
    initialState: {
        notes: []
    },
    reducers: {
        setNote: (state, action) => {
            state.notes.push(action.payload);
        },
        deleteNote: (state, action) => {
            const newarr = state.notes.filter((note) => note.id != action.payload.id);
            state.notes = newarr;
        },
        updateNote: (state, action) => {
            const newarr = state.notes.map((note) => {
                if (note.id === action.payload.id) {
                    return { id: action.payload.id, Title: action.payload.Title, Date: action.payload.Date };
                }
                return note;
            })
            state.notes = newarr;
        }
    }
})

export default notesSlice.reducer;

export const { setNote, deleteNote, updateNote } = notesSlice.actions;
