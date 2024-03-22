import React from "react";
import "./App.css"

//Function component

const name = "var";

function App() {
    return (
       <div className="app">
           <h1>Hello From App Component</h1>
            <p>dipesh</p>
            <h2>{ name}</h2>
            <p>{5+5}</p>
       </div>
        )     
}

export default App;

