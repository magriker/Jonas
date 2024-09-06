import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import "./styleForChallenge.css";
import CreateCards from "./firstAssignment";

const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

const Header = () => {
  // const style = { color: " red", fontSize: "48px", textTransform: "uppercase" };
  return (
    <header className="header">
      <h1>Fast React Pizza Co.</h1>
    </header>
  );
};

const Menu = () => {
  const pizzas = pizzaData;
  // const pizzas = [];
  const numPizzas = pizzas.length;

  return (
    <main className="menu">
      <h2>Our menu</h2>

      {numPizzas > 0 ? (
        <>
          <p>
            Authentic Italian cuisine. 6 creative dishes to choose from. All
            from our stone oven, all organic, all delicious.
          </p>
          <ul className="pizzas">
            {pizzas.map((pizza) => (
              <Pizza pizzaObj={pizza} key={pizza.name}></Pizza>
            ))}
          </ul>
        </>
      ) : (
        <p>We are still working on our menu. Please come back later :)</p>
      )}

      {/* <Pizza
        name="Pizza Spinaci"
        ingredients="Tomato, mozarella, spinach, and ricotta cheese"
        photoName="pizzas/spinaci.jpg"
        price={10}
      ></Pizza>
      <Pizza
        name="Pizza Fungi"
        ingredients="Tomato, Mushrooms "
        price={12}
        photoName="pizzas/funghi.jpg"
      ></Pizza> */}
    </main>
  );
};

const Pizza = ({ pizzaObj }) => {
  // if (pizzaObj.soldOut) return null;

  return (
    <li className={`pizza ${pizzaObj.soldOut ? "sold-out" : ""}`}>
      <img src={pizzaObj.photoName} alt="Pizza Spinaci"></img>
      <div>
        <h3>{pizzaObj.name}</h3>
        <p>{pizzaObj.ingredients}</p>
        <span>
          {pizzaObj.soldOut ? "SOLD OUT" : Math.floor(pizzaObj.price * 1.1)}
        </span>
      </div>
    </li>
  );
};

const Footer = () => {
  const hour = new Date().getHours();
  const openHour = 12;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour <= closeHour;
  console.log(isOpen);

  // if (hour >= openHour && hour <= closeHour) alert("We are currently open!");
  // else alert("sorry wr are closed");

  return (
    <footer className="footer">
      {isOpen ? (
        <Oder closeHour={closeHour} openHour={openHour}></Oder>
      ) : (
        <p>
          We are happy to welcom you between {openHour}:00 and {closeHour}:00
        </p>
      )}
    </footer>
  );
};

const Oder = ({ closeHour, openHour }) => {
  return (
    <div className="order">
      <p>
        We are open from {openHour}:00 until {closeHour}:00. Come visit us or
        order online
      </p>
      <button className="btn">Order</button>
    </div>
  );
};

function App() {
  return (
    <div className="container">
      <Header></Header>
      <Menu></Menu>
      <Footer></Footer>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <CreateCards></CreateCards>
    {/* <App></App> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
