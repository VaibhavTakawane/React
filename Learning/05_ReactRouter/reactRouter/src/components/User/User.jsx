import { useEffect, useState } from "react"
import { data, useParams } from "react-router-dom"
export default function User() {
    const { userid } = useParams()

    const [data, setData] = useState([])

    return (
        <>
            <div className="flex text-white bg-gray-800 text-2xl p-4 justify-center">
                <div className="">
                    User id : {userid}
                </div>
            </div>
        </>
    )
}