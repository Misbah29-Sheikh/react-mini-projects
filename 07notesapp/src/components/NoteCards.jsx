import React from 'react'
import { useNote } from '../context/NotesContext'

function NoteCards({ note }) {
  const { deleteNote } = useNote()
  console.log(note)

  return (
    <div className="bg-white rounded-2xl p-5 shadow-lg hover:shadow-xl transition flex flex-col">
      <div className="flex justify-between items-start">
        <h2 className="text-xl font-bold text-gray-800 mb-3">
          {note.title}
        </h2>

        <button className="w-9 h-9 rounded-lg bg-red-100 hover:bg-red-200 transition flex items-center justify-center"
         onClick={() => deleteNote(note.id)}>
          ❌
        </button>
      </div>

      <p className="text-gray-600 leading-relaxed break-words whitespace-pre-wrap">
        {note.note}
      </p>
    </div>


  )
}

export default NoteCards
