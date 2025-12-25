// import { useState } from "react";

// const UserFormUpdate05 = () => {
//     const [user, setUser] = useState([]);
//     const [form, setForm] = useState({ name: "", sal: "", email: "" });
//     console.log(form)

//     const handleChange = (e) => {
//         setForm({ ...form, [e.target.name]: e.target.value });
//     };

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         setUser([
//             ...user,
//             {
//                 id: user.length + 1,
//                 name: form.name,
//                 sal: form.sal,
//                 email: form.email
//             }
//         ]);
//         setForm({ name: "", sal: "", email: "" }); // Reset form after adding
//     };

//     return (
//         <>
//             <div className=" mt-3">
//                 <h1 className="text-2xl">User Form update</h1>
//                 <div className="">
//                     <form className="flex flex-col gap-3 " onSubmit={handleSubmit}>
//                         <label>
//                             userName:
//                             <input
//                                 className="bg-white text-black"
//                                 name="name"
//                                 value={form.name}
//                                 required
//                                 onChange={handleChange}
//                             />
//                         </label>
//                         <label>
//                             sal:
//                             <input
//                                 className="bg-white text-black"
//                                 name="sal"
//                                 value={form.sal}
//                                 required
//                                 onChange={handleChange}
//                             />
//                         </label>
//                         <label>
//                             email:
//                             <input
//                                 className="bg-white text-black"
//                                 name="email"
//                                 value={form.email}
//                                 required
//                                 onChange={handleChange}
//                             />
//                         </label>
//                         <button className="bg-amber-400 w-20 ml-20 h-auto" type="submit">Add User</button>
//                     </form>
//                 </div>
//                 <h1 className="mt-4 text-xl">{JSON.stringify(user)}</h1>
//             </div>
//         </>
//     );
// };

// export default UserFormUpdate05;
// ---------------------------------------------------------------------------------------------------------------------------

import { useState } from "react"

const UserFormUpdate05 = () => {
    const [form, setForm] = useState([])
    const [user, setUser] = useState(
        {
            userName: "",
            password: "",
        }
    )
    const handleForm = (e) => {
        e.preventDefault()
        setForm(
            [...form,
            {
                id: form.length + 1,
                userName: user.userName,
                password: user.password,
            }
            ]
        )
        setUser({ userName: "", password: "", })
    }
    const handleChange = (e) => {
        setUser(
            {
                ...user, [e.target.name]: e.target.value
            }
        )
    }
    return (
        <>
            <div>
                <form className="flex flex-col" onSubmit={handleForm}>
                    <label >user Name:<input
                        className="bg-white text-black"
                        type="text"
                        name="userName"
                        value={user.userName}
                        onChange={handleChange}
                        required
                    />
                    </label><br />
                    <label >Password:<input
                        className="bg-white text-black"
                        type="text"
                        name="password"
                        value={user.password}
                        onChange={handleChange}
                        required
                    />
                    </label>
                    <button type="submit">submit</button>
                </form>
                <h1 className="text-xl">{JSON.stringify(user)}</h1>
                <h1 className="text-xl">{JSON.stringify(form)}</h1>
            </div>
        </>
    )
}
export default UserFormUpdate05