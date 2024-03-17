import React from "react";
import "../src/App.css"
import Header from "./Components/Header"
import Hero from "./Components/Hero"
import Footer from "./Components/Footer"
import shoes from "./Assests/shoes.avif"
import shoes1 from "./Assests/Shoes1.avif"
import shoes2 from "./Assests/Shoes2.avif"
import shoes3 from "./Assests/Shoes3.avif"


const App = () => {
    return (
      <div>
        <Header />
              <div>
                <h2>Recommand For You</h2>
              </div>
        <div  style={{  display: "flex" ,justifyContent: "space-between", padding: "30px"   }}>
            <Hero title="Unisex Sneakers" price="2000" img={shoes} />
            <Hero title="MEN Sneakers" price="4000"  img={shoes1} />
            <Hero title="WOMEN Sneakers" price="5000" img={shoes2}/>
            <Hero title="CHILDREAN Sneakers" price="6000" img={shoes3}/>
        </div>
        <Footer /> 
      </div>
    )
}

export default App;

