import { configureStore } from "@reduxjs/toolkit";
import notesReducer from "./NotesSlice";
export default configureStore({
  reducer: {
    notesReducer
  }
});