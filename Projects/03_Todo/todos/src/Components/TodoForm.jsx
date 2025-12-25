import React, { useState } from 'react'
import { useTodo } from '../contexts/TodoContext'

function TodoForm() {
  const [todo, setTodo] = useState('')
  const { addTodo } = useTodo()

  const add = (e) => {
    e.preventDefault()
    if (!todo) return
    addTodo({ todo, completed: false })
    setTodo('')
  }

  return (
    <form onSubmit={add} className="flex items-center w-full">
      <input
        type="text"
        placeholder="✨ Write your next big task..."
        className="w-full rounded-l-xl px-4 py-2.5 bg-white/10 border border-white/20 focus:border-cyan-400 text-white placeholder-gray-400 outline-none transition-all duration-300"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
      <button
        type="submit"
        className="rounded-r-xl px-5 py-2.5 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold hover:scale-105 hover:shadow-[0_0_15px_rgba(0,255,255,0.5)] transition-all duration-300"
      >
        Add
      </button>
    </form>
  )
}

export default TodoForm
