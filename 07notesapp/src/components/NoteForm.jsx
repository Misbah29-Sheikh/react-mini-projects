import React, { useState } from 'react'
import { useNote } from '../context/NotesContext'

function NoteForm() {
  const [title, setTitle] = useState("");
  const [note, setNote] = useState("");
  const { addNote } = useNote();

  const add = (e) => {
    e.preventDefault();
    if (!note) return;
    addNote({ title, note });
    setNote("");
    setTitle("");
  }

  return (
    <form onSubmit={add} className="w-full">
      <div className="w-full bg-white/10 backdrop-blur-md rounded-2xl p-5 shadow-xl border border-white/10">
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Note title..."
          className="w-full mb-3 rounded-xl px-4 py-3 bg-white/20 text-white placeholder-gray-300 outline-none border border-white/10 focus:border-blue-400" />

        <textarea
          placeholder="Write your note..."
          className="w-full h-32 resize-none rounded-xl px-4 py-3 bg-white/20 text-white placeholder-gray-300 outline-none border border-white/10 focus:border-blue-400"
          value={note}
          onChange={(e) => setNote(e.target.value)} />

        <button type="submit" className="mt-4 w-full rounded-xl bg-blue-600 py-3 font-semibold hover:bg-blue-700 transition">Add</button>
      </div>
    </form>
  )
}

export default NoteForm