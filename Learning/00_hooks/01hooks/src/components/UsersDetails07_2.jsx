import { useContext } from "react"
import UserContext from "./context07/UserContext"

const UsersDetails07_2 = () => {
    const data = useContext(UserContext)
    return (
        <>
            <h1>this is Users details </h1>
            <h1>users: {data.userName}</h1>
        </>
    )
}
export default UsersDetails07_2