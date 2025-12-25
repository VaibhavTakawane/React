import UsersDetails07_2 from "./UsersDetails07_2"

import UserContext from "./context07/UserContext"

const Users07_1 = () => {

    const users = { userName: "Vaibhav" }
    return (
        <>
            {/* IMPLEMENTING PROVIDER */}
            <UserContext.Provider value={users}>
                <div className="flex justify-center text-2xl font-medium">
                    <div >
                        <h1 className="underline my-3">User context hook </h1>
                        <hr />
                        <UsersDetails07_2 />
                    </div>
                </div>
            </UserContext.Provider>
        </>
    )
}
export default Users07_1