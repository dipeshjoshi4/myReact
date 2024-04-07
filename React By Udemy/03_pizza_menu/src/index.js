import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

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
    <header className='header footer'>
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

      {
        lengthpizzas > 0 ? (
          <ul className="pizzas">
            {
              pizzaData.map((pizza) => (<Pizza pizzaObj={pizza} key={pizza.name} />))
            }
          </ul>
        ) : <p> we are working on this.thanks for visiting .come back latter </p>
      }

      {/* <ul className="pizzas">
        {
          pizzaData.map((pizza) => (<Pizza pizzaObj={pizza} key={pizza.name} />))
        }
      </ul> */}
    </main>
  );
}

function Pizza(props) {
  console.log(props)

  if (props.pizzaObj.soldOut) return null;

  return (
    <li className="pizza">
      <img src={props.pizzaObj.photoName} alt={props.pizzaObj.name} />
      <div>
        <h3>{props.pizzaObj.name}</h3>
        <p>{props.pizzaObj.ingredients}</p>
        <span>{props.pizzaObj.price}</span>
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
        isOpen ? (
          <div className="order">
            <p> We're Open Untill {closeHour}:00 come visit us or ordeonline.</p>
            <button className="btn">Order</button>
          </div>
        ) : <p> we're happy to serve you between {openHour}:00 and {closeHour}:00</p>
      }
    </footer>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
