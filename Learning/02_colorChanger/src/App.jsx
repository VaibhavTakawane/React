import { useState } from 'react'
import './App.css'

function App() {
    let [color, setcolor] = useState("black")
    return (
        <div className='h-screen content-end ' style={{ backgroundColor: color }}>
            <div className='flex flex-wrap justify-center bg-[#cdc9c9] rounded-2xl p-2 mb-5 w-auto'>
                <div className='text-black'>
                    <button
                        className='underline rounded-full p-3 px-4 cursor-pointer mx-3'
                        style={{ backgroundColor: "red" }}
                        onClick={() => { setcolor(color = "red") }}>
                        red
                    </button>

                    <button
                        className='underline rounded-full p-3 px-4 cursor-pointer mx-3'
                        style={{ backgroundColor: "orange" }}
                        onClick={() => { setcolor(color = "orange") }}>
                        orange
                    </button>

                    <button
                        className='underline rounded-full p-3 px-4 cursor-pointer mx-3'
                        style={{ backgroundColor: "yellow" }}
                        onClick={() => { setcolor(color = "yellow") }}>
                        yellow
                    </button>

                    <button
                        className='underline rounded-full p-3 px-4 cursor-pointer mx-3'
                        style={{ backgroundColor: "blue" }}
                        onClick={() => { setcolor(color = "blue") }}>
                        blue
                    </button>

                    <button
                        className='underline rounded-full p-3 px-4 cursor-pointer mx-3'
                        style={{ backgroundColor: "lavender" }}
                        onClick={() => { setcolor(color = "lavender") }}>
                        lavender
                    </button>

                    <button
                        className='underline rounded-full p-3 px-4 cursor-pointer mx-3'
                        style={{ backgroundColor: "cyan" }}
                        onClick={() => { setcolor(color = "cyan") }}>
                        cyan
                    </button>

                    <button
                        className='underline rounded-full p-3 px-4 cursor-pointer mx-3'
                        style={{ backgroundColor: "purple" }}
                        onClick={() => { setcolor(color = "purple") }}>
                        purple
                    </button>

                    <button
                        className='underline rounded-full p-3 px-4 cursor-pointer mx-3'
                        style={{ backgroundColor: "olive" }}
                        onClick={() => { setcolor(color = "olive") }}>
                        olive
                    </button>

                    <button
                        className='underline rounded-full p-3 px-4 cursor-pointer mx-3'
                        style={{ backgroundColor: "gray" }}
                        onClick={() => { setcolor(color = "gray") }}>
                        gray
                    </button>
                </div>
            </div>
        </div>
    )
}
export default App













