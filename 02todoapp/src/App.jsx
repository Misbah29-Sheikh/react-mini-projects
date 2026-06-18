import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [todos, setTodos] = useState([])
  const [text, setText] = useState("")
  const [editText, setEditText] = useState("")
  const [editId, setEditId] = useState(null)
  const [filter, setFilter] = useState("all")

  const addTodo = () => {
    if (!text.trim()) return;
    const todo = {
      id: Date.now(),
      text: text,
      completed: false
    }
    setTodos((prev) => [...prev, todo])
    setText("")
  }

  const deleteTodo = (id) => {
    setTodos(prev => prev.filter(todo => todo.id !== id))
  }

  const toggleCompleted = (id) => {
    setTodos((prev) =>
      prev.map((prevTodo) =>
        prevTodo.id === id ? { ...prevTodo, completed: !prevTodo.completed } : prevTodo
      ))
  }

  const saveTodo = () => {
    setTodos((prev) =>
      prev.map((prevTodo) =>
        prevTodo.id === editId ? { ...prevTodo, text: editText } : prevTodo)
    )
    setEditId(null)
    setEditText("")
  }

  const filteredTodos = todos.filter(todo => {
    if (filter === "completed") return todo.completed
    if (filter === "pending") return !todo.completed
    return true
  })

  return (
    <div className='flex flex-col items-center gap-3.5 min-h-screen bg-gray-800'>
      <div className='bg-gray-400 mt-2.5 p-3 flex flex-col rounded-lg gap-4 max-w-md'>
        <input
          type="text"
          className="px-4 py-2 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
          placeholder='Enter a task..'
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button
          className="px-4 py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 active:scale-95 transition"
          onClick={() => addTodo()}
        >
          Add Task
        </button>
      </div>
      <div className="flex gap-3">
        <button className="px-4 py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 active:scale-95 transition"
        onClick={() => setFilter("all")}>
          All
        </button>
        <button className="px-4 py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 active:scale-95 transition"
        onClick={() => setFilter("completed")}>
          Completed
        </button>
        <button className="px-4 py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 active:scale-95 transition"
        onClick={() => setFilter("pending")}>
          Pending
        </button>
      </div>
      {filteredTodos.map((todo) => (
        <div className="flex items-center justify-between p-3 bg-white rounded-xl shadow-md border border-gray-200 gap-4 w-full max-w-md"
          key={todo.id}>
          <input
            type="checkbox"
            className='cursor-pointer'
            checked={todo.completed}
            onChange={() => toggleCompleted(todo.id)}
          />

          {editId === todo.id ? <input type="text"
            className='p-2'
            value={editText}
            onChange={(e) => setEditText(e.target.value)} /> :
            < p className={`text-gray-800 font-medium ${todo.completed ? "line-through" : ""}`} >
              {todo.text}
            </p >}

          <div className="flex gap-2 ">
            <button className="px-3 py-1 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
              onClick={() => {
                if (todo.completed) return
                if (editId === todo.id) {
                  saveTodo()
                } else {
                  setEditId(todo.id)
                  setEditText(todo.text)
                }
              }}

              disabled={todo.completed}
            >
              {editId === todo.id ? "Save" : "Edit"}
            </button>

            <button className="px-3 py-1 bg-red-500 text-white rounded-lg hover:bg-red-600"
              onClick={() => deleteTodo(todo.id)}>
              Delete
            </button>
          </div>
        </div>
      ))}

    </div>
  )
}

export default App
