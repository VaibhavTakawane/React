import React, { useState } from 'react'
import { useTodo } from '../contexts/TodoContext'

function TodoItem({ todo }) {
  const [isTodoEditable, setIsTodoEditable] = useState(false)
  const [todoMsg, setTodoMsg] = useState(todo.todo)
  const { updateTodo, deleteTodo, toggleComplete } = useTodo()

  const editTodo = () => {
    updateTodo(todo.id, { ...todo, todo: todoMsg })
    setIsTodoEditable(false)
  }

  return (
    <div
      className={`flex items-center justify-between gap-3 rounded-xl px-4 py-3 shadow-lg transition-all duration-300 backdrop-blur-sm border border-white/20 ${
        todo.completed
          ? 'bg-green-500/20 text-green-200 line-through'
          : 'bg-white/10 text-white hover:bg-white/20'
      }`}
    >
      <input
        type="checkbox"
        className="cursor-pointer accent-cyan-500 scale-150"
        checked={todo.completed}
        onChange={() => toggleComplete(todo.id)}
      />

      <input
        type="text"
        className={`flex-1 bg-transparent text-lg outline-none ${
          isTodoEditable ? 'border-b border-cyan-400' : ''
        }`}
        value={todoMsg}
        onChange={(e) => setTodoMsg(e.target.value)}
        readOnly={!isTodoEditable}
      />

      <div className="flex gap-2">
        <button
          className={`px-3 py-2 rounded-lg text-sm transition-all duration-300 ${
            isTodoEditable
              ? 'bg-cyan-500 hover:bg-cyan-600 text-white'
              : 'bg-blue-500 hover:bg-blue-600 text-white'
          }`}
          onClick={() => {
            if (todo.completed) return
            if (isTodoEditable) editTodo()
            else setIsTodoEditable((prev) => !prev)
          }}
          disabled={todo.completed}
        >
          {isTodoEditable ? '💾' : '✏️'}
        </button>

        <button
          className="px-3 py-2 rounded-lg bg-red-500 hover:bg-red-600 text-white transition-all duration-300"
          onClick={() => deleteTodo(todo.id)}
        >
          ❌
        </button>
      </div>
    </div>
  )
}

export default TodoItem
