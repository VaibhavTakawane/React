import { useState } from 'react'
import './App.css'
import AddTodo from './Components/AddTodo'
import Todos from './Components/Todos'

function App() {
  return (
    <>
      <h1
      className='text-2xl underline'
      >this is redux toolkit</h1>
      <AddTodo />
      <Todos />
    </>
  )
}
export default App
