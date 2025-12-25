import { useState } from "react"


const UserFormObj = () => {

    const [user, setUser] = useState({
        name: "",
        userName: "",
        password: "",
    });

    const handleChange = (e) => {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        });
    }

    return (
        <>
            <div className="flex justify-center text-center">
                <div className="flex flex-col flex-wrap ">

                    <h2 className="text-2xl font-bold underline mb-4"> User Form Using Objects : </h2>
                    <form className="flex flex-col">
                        <label className="m-3">Name: <input
                            className="bg-white text-black rounded-2xl p-1"
                            type="text"
                            name="name"
                            placeholder="Enter the name"
                            onChange={handleChange}

                        />
                        </label>
                        <label className="m-3">UserName: <input
                            className="bg-white text-black rounded-2xl p-1"
                            type="text"
                            name="userName"
                            placeholder="Enter the userName"
                            onChange={handleChange}

                        />
                        </label>
                        <label className="m-3"> Password: <input
                            className="bg-white text-black rounded-2xl p-1"
                            type="text"
                            name="password"
                            placeholder="Enter the password"
                            onChange={handleChange}

                        /></label>
                    </form>
                </div>
            </div>
            <h1 className="text-xl mt-3"> {JSON.stringify(user)} </h1>
        </>
    )
}
export default UserFormObj

// ---------------------------------------------------------------------------------------------------------------------------
