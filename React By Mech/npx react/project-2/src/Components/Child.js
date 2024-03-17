import react from "react";

const child = (props) => {
    return (
        <div>
            <h1>Hello {props.name}</h1>
            <h1>Hello {props.name2[0]}</h1> 
            <h1>Hello {props.name3.a}</h1> 
            <h1>Hello {props.name4}</h1> 
            <h1>Hello {props.name5}</h1> 
        </div>
    )
}

export default child