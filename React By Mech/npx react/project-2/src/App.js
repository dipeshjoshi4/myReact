import React from "react";
import "./App.css"
import Header from "./Components/Header"
import Hero from "./Components/Hero"
import Footer from "./Components/Footer"
import Child from "./Components/Child" 





const App = () => {

    const name = "rahul"
    const arr = ["vikki", "manku"]
    const obj = {
        a: "sonal",
        b:"monal"
    }
    const boo = "true"
    const int = 5

    return (
      <div className="app">
            <Child name={name} name2={arr} name3={obj} name4 = {boo} name5 = {int} />
            

          {/* <Header />
              <div>
                <h2>Recommand For You</h2>
              </div>
              <div style={{display:"flex",justifyContent:"space-between",padding:"30px"}}>
                 <Hero />
                 <Hero />
                 <Hero />
                 <Hero />
              </div>
           <Footer/> */}
      </div>
    )
}

export default App;

