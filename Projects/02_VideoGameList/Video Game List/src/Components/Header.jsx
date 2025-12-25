import { useState } from 'react'
import { IoIosSearch, IoMoonSharp, IoSunnyOutline } from '../Icons/icons'
import game_logo from '../assets/Images/game_logo.jpg'
function Header() {
    const [toggle, setToggle] = useState(true)
    return (
        <div>
            <ul className='bg-gray-200 flex flex-wrap items-center p-4 justify-between'>
                <li><img className='w-10 h-10 rounded-full' src={game_logo} alt="Game Logo" /></li>
                <div className='flex items-center bg-blue-300 rounded-2xl'> < IoIosSearch className='w-6 h-6' />
                    <input
                        type="text"
                        placeholder='Search...'
                        className='p-2 outline-none bg-transparent '
                    /></div>
                <li>
                    {toggle ?
                        <IoSunnyOutline
                            className='w-6 h-6 cursor-pointer'
                            onClick={() => setToggle(!toggle)}
                        /> :
                        <IoMoonSharp className='w-6 h-6 cursor-pointer'
                            onClick={() => setToggle(!toggle)}
                        />}
                </li>
            </ul>
        </div>
    )
}

export default Header