import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

// const pizzaData = [
//   {
//     name: "Focaccia",
//     ingredients:
//       "Bread with italian olive oil and rosemary",
//     price: 6,
//     photoName:
//       "pizzas/focaccia.jpg",
//     soldOut: false,
//   },
//   {
//     name: "Pizza Margherita",
//     ingredients:
//       "Tomato and mozarella",
//     price: 10,
//     photoName:
//       "pizzas/margherita.jpg",
//     soldOut: false,
//   },
//   {
//     name: "Pizza Spinaci",
//     ingredients:
//       "Tomato, mozarella, spinach, and ricotta cheese",
//     price: 12,
//     photoName:
//       "pizzas/spinaci.jpg",
//     soldOut: false,
//   },
//   {
//     name: "Pizza Funghi",
//     ingredients:
//       "Tomato, mozarella, mushrooms, and onion",
//     price: 12,
//     photoName:
//       "pizzas/funghi.jpg",
//     soldOut: false,
//   },
//   {
//     name: "Pizza Salamino",
//     ingredients:
//       "Tomato, mozarella, and pepperoni",
//     price: 15,
//     photoName:
//       "pizzas/salamino.jpg",
//     soldOut: true,
//   },
//   {
//     name: "Pizza Prosciutto",
//     ingredients:
//       "Tomato, mozarella, ham, aragula, and burrata cheese",
//     price: 18,
//     photoName:
//       "pizzas/prosciutto.jpg",
//     soldOut: false,
//   },
// ];

// function App() {
//   return (
//     <div>
//       <Pizza />
//     </div>
//   )
// }

// function Pizza() {
//   return (
//     <div>
//       <img src='pizzas/spinaci.jpg' alt='pizza spinacci'/>
//       <h2>Pizza Spinaci</h2>
//       <p>Tomato, mozarella, spinach, and ricotta cheese</p>
//       <p></p>
//     </div>
//   )
// }


 
const pizzaData = [
  {
    name: "Focaccia",
    ingredients:
      "Bread with italian olive oil and rosemary",
    price: 6,
    photoName:
      "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients:
      "Tomato and mozarella",
    price: 10,
    photoName:
      "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients:
      "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName:
      "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients:
      "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName:
      "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients:
      "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName:
      "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients:
      "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName:
      "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

function App() {
  return (
    <div className='container'>
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

function Header() {
  const style = {};
  return (
    <header className='header'>
      <h1 style={style}>Fast React Pizza Co. </h1>
    </header>
  );
}

function Menu() {
  const pizzas = pizzaData
  // const pizzas = [];
  const lengthpizzas = pizzas.length;

  return (
    <main className='menu'>
      <h2>Our Menu</h2>
      {lengthpizzas > 0 ?
        (
          <>
            <p>Authentic  Italian Cuisine. 6 Creatives dishes to choose from. all from our store oven, all oraganic ,all delicious</p>

            <ul className="pizzas">
              {pizzaData.map((pizza) => (<Pizza pizzaObj={pizza} key={pizza.name} />))}
            </ul>

          </>
        ) : <p> we are working on this.thanks for visiting .come back latter </p>
      }
    </main>
  );
}

function Pizza({ pizzaObj }) {
  console.log(pizzaObj)

  // if (pizzaObj.soldOut) return null;

  return (
    <li className={`pizza ${pizzaObj.soldOut ? 'sold-out': ''}`}>
      <img src={pizzaObj.photoName} alt={pizzaObj.name} />
      <div>
        <h3>{pizzaObj.name}</h3>
        <p>{pizzaObj.ingredients}</p>
        <span>{pizzaObj.soldOut ? 'SOLD OUT' : pizzaObj.price}</span>
      </div>
    </li>
  );
}

function Footer() {
  const hour = new Date().getHours();
  const openHour = 12;
  const closeHour = 23;
  const isOpen = hour >= openHour && hour <= closeHour;
  console.log(isOpen);
  return (
    <footer className='footer'>
      {
        isOpen ? (<order closeHour={closeHour} />) : (<p> we're happy to serve you between {openHour}:00 and {closeHour}:00</p>)
      }
    </footer>
  );
}

function order({ closeHour }) {
  return (
    <div className="order">
      <p>we're Open Untill {closeHour}:00 happy to welcoming You or You can Order Online</p>
      <button className="btn">Order</button>
    </div>
  )
}


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
