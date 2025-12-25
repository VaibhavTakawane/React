import { useEffect, useState } from "react"
import { useLoaderData } from "react-router-dom"
export default function GitHub() {

    //WITH LOADER:
    const data = useLoaderData();

    //WITHOUT LOADER:
    // const [data, setData] = useState([])
    // useEffect(() => {
    //     fetch("https://api.github.com/users/vaibhavTakawane")
    //         .then((res) => res.json())
    //         .then(data => {
    //             console.log(data)
    //             setData(data)
    //         })
    //         .catch((err) => console.log(err))
    // }, [])
    
    return (
        <>
            <div className="flex flex-col text-3xl items-center text-amber-50">
                <h2>UserName : {data.login}</h2>
                <img className="w-50 h-50 rounded-4xl my-3" src={data.avatar_url} alt="profile picture" />
            </div>
        </>
    )
}


export const githubInfoLoader = async () => {
    const response = await fetch("https://api.github.com/users/vaibhavTakawane")
    return response.json()
}