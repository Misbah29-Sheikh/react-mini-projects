import { useEffect, useState } from 'react'
import './App.css'
import { NoteProvider } from './context/NotesContext'
import NoteForm from './components/NoteForm'
import NoteCards from './components/NoteCards'

function App() {
  const [notes, setNotes] = useState([])

  const addNote = (title, note) => {
    setNotes((prev) => [{ id: Date.now(), ...title, ...note }, ...prev])
  }

  const deleteNote = (id) => {
    setNotes((prev) => prev.filter((note) => note.id !== id))
  }

  useEffect(() => {
    const notes = JSON.parse(localStorage.getItem("notes"));
    if(notes && notes.length > 0) {
      setNotes(notes)
    }
  },[])

  useEffect(() => {
    localStorage.setItem("notes",JSON.stringify(notes))
  },[notes])

  return (
    <NoteProvider value={{ notes, addNote, deleteNote }}>
      <div className="min-h-screen flex justify-center bg-slate-900 px-4 py-10">
        <div className="w-full max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold text-center text-white mb-8">
            My Notes
          </h1>

          <div className="max-w-xl mx-auto mb-8">
            <NoteForm />
          </div>

          <div className="columns-1 sm:columns-2 lg:columns-3 gap-6">
            {notes.map((note) => (
              <div key={note.id} className="mb-6 break-inside-avoid">
                <NoteCards note={note} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </NoteProvider>
  )
}

export default App
