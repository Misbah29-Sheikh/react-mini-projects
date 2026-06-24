import { createContext,useContext } from "react";

export const NotesContext = createContext({
  notes : [
    {
      id : 1,
      title : "Note Title",
      note : "Note"
    }
  ],
  addNote : (note) => {},
  deleteNote : (id) => {}
})

export const NoteProvider = NotesContext.Provider;

export const useNote = () => {
  return useContext(NotesContext)
}