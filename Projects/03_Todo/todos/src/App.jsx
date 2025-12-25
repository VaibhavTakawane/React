import { useState, useEffect } from 'react'
import { TodoProvider } from './contexts/TodoContext.js'
import './App.css'
import TodoForm from './Components/TodoForm.jsx'
import TodoItem from './Components/TodoItem.jsx'

function App() {
  const [todos, setTodos] = useState([])

  const addTodo = (todo) => {
    setTodos((prev) => [{ id: Date.now(), ...todo }, ...prev])
  }

  const updateTodo = (id, todo) => {
    setTodos((prev) => prev.map((prevTodo) => (prevTodo.id === id ? todo : prevTodo)))
  }

  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id))
  }

  const toggleComplete = (id) => {
    setTodos((prev) =>
      prev.map((prevTodo) =>
        prevTodo.id === id
          ? { ...prevTodo, completed: !prevTodo.completed }
          : prevTodo
      )
    )
  }

  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem('todos'))
    if (todos && todos.length > 0) setTodos(todos)
  }, [])

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])

  return (
    <TodoProvider value={{ todos, addTodo, updateTodo, deleteTodo, toggleComplete }}>
      <div className="min-h-screen bg-gradient-to-br from-[#0a0f1f] via-[#1c2541] to-[#3a506b] text-white py-10 px-3">
        <div className="w-full max-w-2xl mx-auto bg-white/10 backdrop-blur-md rounded-2xl shadow-[0_0_20px_rgba(255,255,255,0.1)] p-6 border border-white/20">
          <h1 className="text-3xl font-bold text-center mb-8 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
            Manage Your Todos
          </h1>

          <TodoForm />

          <div className="mt-6 flex flex-col gap-4">
            {todos.map((todo) => (
              <TodoItem key={todo.id} todo={todo} />
            ))}
          </div>
        </div>
      </div>
    </TodoProvider>
  )
}

export default App
