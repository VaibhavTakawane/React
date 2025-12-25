import { useEffect, useState } from "react";

//useState hook:
// 1.
// const Theme = () => {
//     const [color, setColor] = useState("black")
//     return (
//         <>
//             <h1 style={{ backgroundColor: color }}>The color is :  {color}!</h1>
//             <button
//                 onClick={() => { setColor("red") }}
//             >red</button>
//             <button
//                 onClick={() => { setColor("blue") }}
//             >blue</button>
//             <button
//                 onClick={() => { setColor("orange") }}
//             >orange</button>
//         </>
//     )
// }
// export default Theme

//-------------------------------------------------------------------------------------
// 2.
// const Theme = () => {
//     const [dark, setDark] = useState(false)
//     let theme = {
//         dark: "text-amber-600 p-10 underline bg-black text-sky-500",
//         white: "text-amber-600 p-10 underline bg-white text-red-600",
//     }
//     return (
//         <>
//             <div className="flex flex-row gap-2">
//                 <h2>Enable Dark Theme</h2>
//                 <input
//                     className="h-4 w-4 mt-1 cursor-pointer"
//                     type="checkbox"
//                     onChange={() => setDark((prev) => !prev)}
//                 />
//             </div>
//             <div className={dark ? theme.dark : theme.white}> USESTATE HOOK IN REACT</div>
//         </>
//     )
// }
// export default Theme
//-------------------------------------------------------------------------------------

//COMPONENT:

const Theme = () => {
    return (
        <>
            <h1 className="text-2xl font-extrabold"> this is Theme - first component </h1>
        </>
    )
}

export default Theme