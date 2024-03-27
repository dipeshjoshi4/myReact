import { React, useEffect, useState } from "react";
import "./Temp.css";
import mobile from "./assests/last.png"


const Temp = () => {

    const [temp, setTemp] = useState(12);

    const [color, setColor] = useState("#31485e");

    const [word, setWord] = useState("COLD");

    function handlePlus() {

        setTemp((prevTemp) => {
            const newTemp = prevTemp + 1;
            if (newTemp >= 19) {
                setColor("red")
                setWord("HOT")
            }
            return newTemp;
        });

    };

    function handleMinus() {
        setTemp(temp - 1);
        if (temp <= 19) {
            setColor("#31485e")
            setWord("COLD")

        }
    };

    useEffect(() => {
        console.log("temp first" + temp)
    }, [])

    return (
        <div className="temp">

            <div className="temp-img">
                <img src={mobile} alt="mobile" />
            </div>

            <div className="Temp-display">
                <div className="degree" style={{ backgroundColor: color }}>{temp}°C<br />
                    {word}
                </div>
                <div className="Temp-btns">
                    <button onClick={handlePlus} className="plus">+</button>
                    <button onClick={handleMinus} className="minus">-</button>
                </div>
            </div>


        </div>
    )
}

export default Temp;