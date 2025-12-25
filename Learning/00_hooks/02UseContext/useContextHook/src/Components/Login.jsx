import { useState, useContext } from "react"
import UserContext from "../Context/UserContext";

function Login() {
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');

    const { setUser } = useContext(UserContext)

    const handleSubmit = (e) => {
        e.preventDefault();
        setUser({ userName, password })
    }
    return (
        <>
            <h1> <u>Login</u> </h1>
            <input
                type="text"
                placeholder="enter user name"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
            /> <br />
            <input
                type="text"
                placeholder="enter password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <br />
            <button
                onClick={handleSubmit}
            >Submit</button>

        </>
    )
}
export default Login
