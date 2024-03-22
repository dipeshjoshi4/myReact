
import { useState, React } from "react";
import "./Hooks.css";

const Hooks = () => {

    const [counter, setCounter] = useState(5)

    const [name, setName] = useState("Mech Code")

    function handleAdd() {
        setCounter(counter + 1)
    }

    function handleMinus() {
        setCounter(counter - 1)
        if (counter - 1 == -1) {
            setCounter(5)
        }
    }

    function handleChnage() {
        setName("webdevdj")
        if (name === "webdevdj") {
            setName("Mech Code")
        }
    }

    return (
        <div className="Hooks">
            <h1>{name}</h1>
            <p>Number {counter}</p>
            <div className="btns">
                <button onClick={handleAdd}>ADD</button>
                <button onClick={handleMinus}>Minus</button>
                <button onClick={handleChnage}>NameChnage</button>
            </div>
        </div>
    )

}
export default Hooks