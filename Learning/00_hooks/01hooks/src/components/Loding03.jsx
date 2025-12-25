import { useState } from "react"

function Loading() {

    const [isLoading, setLoading] = useState(false)
    return (
        <>
            <button type="button" className="p-2 m-10 bg-amber-200 rounded-4xl hover:to-95% hover:bg-amber-400 " onClick={()=>{setLoading(prev=>!prev)}}> Toaggle Loading </button>
            {isLoading ?<p> Loading........</p> : <p> this is the data Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui, ut eum nihil magni repudiandae voluptate assumenda dolorem explicabo quo sed.</p>}

        </>
    )
}

export default Loading