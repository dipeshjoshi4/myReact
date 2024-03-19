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

  const data = [
    { title: "Unisex Sneakers", price: 2000, img: shoes },
    { title: "MEN Sneakers", price: 4000, img: shoes1 },
    { title: "WOMEN Sneakers", price: 5000, img: shoes2 },
    { title: "CHILDREAN Sneakers", price: 6000, img: shoes3 }
  ]

  return (
    <div>
      <Header />
      <div>
        <h2>Recommand For You</h2>
      </div>
      <div style={{ display: "flex", justifyContent: "space-between", padding: "30px" }}>


        {
          data.map((el) => {
            return (
              <Hero title={el.title} price={el.price} img={el.img} />
            )
          })
        }
        {/* <Hero title={data[0].title} price={data[0].price} img={data[0].img} />
        <Hero title={data[1].title} price={data[1].price} img={data[1].img} />
        <Hero title={data[2].title} price={data[2].price} img={data[2].img} />
        <Hero title={data[3].title} price={data[3].price} img={data[3].img} /> */}
      </div>
      <Footer />
    </div>
  )
}

export default App;

