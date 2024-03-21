import React from "react";
import "./App.css";
import Hero from './componenets/Hero';
import Header from './componenets/Header';
import Trigger from "./Assests/Trigger.avif";
import Ferrari from "./Assests/Ferrari.avif";
import Flair2 from "./Assests/Flair-2-Unisex.avif";
import Flair22 from "./Assests/Flair-2.avif";
import SOFTRIDEEnzo from "./Assests/SOFTRIDE-Enzo.avif";
import Incinerate from "./Assests/Incinerate.avif";
import Redon from "./Assests/Redon.avif";
import SOFTRIDE from "./Assests/SOFTRIDE.avif";



const App = () => {

  const data = [
    { heading: "Men Sneakers", img: Trigger, descreption: "Trigger for Men", price: "500$" },
    { heading: "women Sneakers", img: Ferrari, descreption: "Ferrari for Women", price: "600$" },
    { heading: "kids Sneakers", img: Flair2, descreption: "Flair2 for Men", price: "700$" },
    { heading: "Boys Sneakers", img: Flair22, descreption: "Flair22 for Men", price: "800$" },
    { heading: "Unisex Sneakers", img: Incinerate, descreption: "Incinerate for Men", price: "900$" },
    { heading: "Oldest Sneakers", img: Redon, descreption: "Redon for Men", price: "1000$" },
    { heading: "Streetwwar Sneakers", img: SOFTRIDEEnzo, descreption: "SOFTRIDEEnzo for Men", price: "1100$" },
    { heading: "Causual Sneakers", img: SOFTRIDE, descreption: "SOFTRIDE for Men", price: "1500$" }
  ]

  return (
    <div className="App">
      <Header />
      <div className="Hero-Combine">
        {
          data.map((el) => {
            return (
              <Hero heading={el.heading} img={el.img} descreption={el.descreption} price={el.price} />
            )
          })
        }
      </div>
    </div>
  )
}

//Second Way

// return (
// <div className="App">
//   <Header />
//   <div className="Hero-Combine">
//     <Hero heading={data[0].heading} img={data[0].img} descreption={data[0].descreption} price={data[0].price} />
//     <Hero heading={data[1].heading} img={data[1].img} descreption={data[1].descreption} price={data[1].price} />
//     <Hero heading={data[2].heading} img={data[2].img} descreption={data[2].descreption} price={data[2].price} />
//     <Hero heading={data[3].heading} img={data[3].img} descreption={data[3].descreption} price={data[3].price} />
//     <Hero heading={data[4].heading} img={data[4].img} descreption={data[4].descreption} price={data[4].price} />
//     <Hero heading={data[5].heading} img={data[5].img} descreption={data[5].descreption} price={data[5].price} />
//     <Hero heading={data[6].heading} img={data[6].img} descreption={data[6].descreption} price={data[6].price} />
//     <Hero heading={data[7].heading} img={data[7].img} descreption={data[7].descreption} price={data[7].price} />
//   </div>
// </div>
//   )
// }

///ONE WAY

//   return (
//     <div className="App">
//       <Header />
//       <div className="Hero-Combine">
//         <Hero heading="Men Sneakers" img={Trigger} descreption="Trigger for Men" price="500$" />
//         <Hero heading="women Sneakers" img={Ferrari} descreption="Ferrari for Women" price="600$" />
//         <Hero heading="kids Sneakers" img={Flair2} descreption="Flair2 for Men" price="700$" />
//         <Hero heading="Boys Sneakers" img={Flair22} descreption="Flair22 for Men" price="800$" />
//         <Hero heading="Unisex Sneakers" img={Incinerate} descreption="Incinerate for Men" price="900$" />
//         <Hero heading="Oldest Sneakers" img={Redon} descreption="Redon for Men" price="1000$" />
//         <Hero heading="Streetwwar Sneakers" img={SOFTRIDEEnzo} descreption="SOFTRIDEEnzo for Men" price="1100$" />
//         <Hero heading="Causual Sneakers" img={SOFTRIDE} descreption="SOFTRIDE for Men" price="1500$" />
//       </div>
//     </div>
//   )
// }

export default App;
