import React from "react"
class User extends React.Component {

    // CONSTRUCTOR.
    constructor(props){
        super(props)
        console.log("props from constructor:",props);
        
    }
    render() {
        //YOU CAN WRITE VALID JS CODE INSIDE RENDER.
        const { name ,sal} = this.props
        console.log("props from render:",this.props);

        
        return (
            <>
                <h1 className="text-5xl">This is Class Component</h1>
                <h1 className="text-2xl">welcome {name} and your salary is : {sal}</h1>
                
            </>
        )
    }
}

export default User