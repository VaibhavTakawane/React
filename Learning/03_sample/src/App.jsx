import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Comp_1 from "./components/comp_1"

function App() {
  return (
    <>
      <h1 className='bg-red-500 text-white text-lg  p-3 rounded-xl mb-3'>i am vaibhav</h1>
      <h2 className='bg-red-500 text-white text-lg  p-3 rounded-xl  hover-white mb-3'>this is headind 2 </h2>

      <Comp_1 />
      <Comp_1 btn='press me' />
    </>
  )

}
export default App