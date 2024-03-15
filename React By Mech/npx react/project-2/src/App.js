import React from "react";
import "./App.css"
import Header from "./Components/Header"
import Hero from "./Components/Hero"
import Footer from "./Components/Footer"




const App = () => {
    return (
        <div className="app">
            <Header/>
            <Hero />
            <Footer/>
        </div>
    )
}

export default App;

