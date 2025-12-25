// import { useEffect, useState } from "react"

// const UseEffect06 = () => {
//     let [count, setCount] = useState(0)
//     let [table, setTable] = useState(2)


//     const DBCall = useEffect(() => {
//         console.log("Database called......")
//     }, [count])

//     return (
//         <>
//             <div>
//                 <div className="flex flex-col items-center">
//                     <h1 className="text-xl">  This is useEffect() hook</h1>
//                     <h1>count is : {count}</h1>
//                     <button
//                         onClick={() => setCount(count = count + 1)}
//                         className="bg-amber-200 rounded-2xl p-2 hover:bg-amber-800 hover:transform-border m-2"
//                     >increment</button>
//                     <button
//                         onClick={() => setCount(count = count - 1)}
//                         className="bg-amber-200 rounded-2xl p-2 hover:bg-amber-800 hover:transform-border m-2"
//                     >decrement</button>

//                     <div>
//                         <button
//                             className="bg-blue-500 rounded-2xl p-2 hover:bg-amber-800 hover:transform-border m-2"
//                             onClick={() => setTable(table = table * 2)}
//                         >table of 2 :

//                         </button>
//                         <h1>table of 2 is : {table}</h1>
//                     </div>
//                 </div>
//             </div>
//         </>
//     )
// }
// export default UseEffect06

//--------------------------------------------------------------------------

// import { useEffect, useState } from "react"

// const UseEffect06 = () => {
//     let [count, setCount] = useState(0)

//     function connect() { console.log("database is open") }
//     function disconnect() { console.log("database is closed") }


//     useEffect(() => {
//         connect();
//         return () => {
//             disconnect();
//         }
//     },[count])

//     return (
//         <>
//             <div className="flex flex-col items-center">
//                 <h1 className="text-xl">  This is useEffect() hook</h1>
//                 <h1>count is : {count}</h1>
//                 <button
//                     onClick={() => setCount(count = count + 1)}
//                     className="bg-amber-200 rounded-2xl p-2 hover:bg-amber-800 hover:transform-border m-2"
//                 >increment</button>
//                 <button
//                     onClick={() => setCount(count = count - 1)}
//                     className="bg-amber-200 rounded-2xl p-2 hover:bg-amber-800 hover:transform-border m-2"
//                 >decrement</button >
//             </div>
//         </>
//     )
// }
// export default UseEffect06
//--------------------------------------------------------------------------

import { useEffect, useState } from "react"

const UseEffect06 = () => {
    let [count, setCount] = useState(0)
    let [refresh, setRefresh] = useState(false)
    let [users, setUsers] = useState([])


    async function usersName() {
        const res = await fetch("https://jsonplaceholder.typicode.com/users")
        return await res.json()
    }

    useEffect(() => {
        usersName()
            .then(result => setUsers(result))
            console.log("User data fetched");
    }, [refresh])

    return (
        <>
            <div className="flex flex-col items-center">
                <h1 className="text-xl">  This is useEffect() hook</h1>
                <h1>count is : {count}</h1>
                <button
                    onClick={() => setCount(count = count + 1)}
                    className="bg-amber-200 rounded-2xl p-2 hover:bg-amber-800 hover:transform-border m-2"
                >increment</button>
                <button
                    onClick={() => setCount(count = count - 1)}
                    className="bg-amber-200 rounded-2xl p-2 hover:bg-amber-800 hover:transform-border m-2"
                >decrement</button >
                <button
                    onClick={() => setRefresh(prev => !prev)}
                    className="bg-amber-200 rounded-2xl p-2 hover:bg-amber-800 hover:transform-border m-10"
                >Refresh</button >

                {users.map(user => (
                    <li key={user.id}>{user.name}</li>
                ))}
            </div >
        </>
    )
}
export default UseEffect06