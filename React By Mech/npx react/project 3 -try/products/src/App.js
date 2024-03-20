import React from "react";
import "./App.css";
import Hero from './componenets/Hero';
import Header from './componenets/Header';
import Trigger from "../Assests/Trigger.avif"
import Ferrari from "../Assests/Ferrari.avif"


const App = () => {
  return (
    <div className="App">
      <Header />
      <div className="Hero-Combine">
        <Hero />
        <Hero />
        <Hero />
        <Hero />
        <Hero />
        <Hero />
        <Hero />
        <Hero />
      </div>
    </div>
  )
}

export default App;
