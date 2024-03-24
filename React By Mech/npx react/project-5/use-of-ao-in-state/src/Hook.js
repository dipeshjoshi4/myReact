

import React from 'react'
import { useState } from 'react';
import "./Hook.css";

const Hook = () => {
    const [Number, setNumber] = useState([2, 5, 6, 4]); //1,3,7

    const [data, setData] = useState({ name: 'dipesh', age: 23 })

    const [attribute, setAttribute] = useState(false)


    function handleAdd() {
        setNumber([...Number, 1, 3, 7])
    }

    function addChnage() {
        setData({ ...data, name: "param", age: 26 })
    }

    function Bool() {
        setAttribute(!attribute);
    }

    return (
        <div>

            {/* Array WITH HOOKS */}
            <div>
                <p>Number {Number}</p>
                <button onClick={handleAdd}>Add</button>
            </div>

            {/* OBJECT WITH HOOKS */}
            <div>
                <p>my name is {data.name} and my age is {data.age} </p>
                <button onClick={addChnage}>Add</button>
            </div>

            {/* true or false */}
            <div>
                <p>{attribute ? "dipesh" : "pppp"} </p>
                <button onClick={Bool}>Add</button>
            </div>

        </div>
    )
}

export default Hook