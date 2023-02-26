import "./App.css";
import Logo from "./images/Logo.jpg";
import Food from "./images/restauranfood.jpg";
import Bruschetta from "./images/bruschetta.jpg";
import LemonDesert from "./images/lemonDessert.jpg";
import GreekSalad from "./images/greekSalad.jpg";
import DeliveryIcon from "./images/deliveryIcon.png";
import React, { Component } from "react";
import Footer from "./components/Footer";
import CallToAction from "./components/CallToAction";
import Chicago from "./components/Chicago";
import CustomersSay from "./components/CustomersSay";
import Specials from "./components/Specials";
import { Routes, Route, Link, Switch } from "react-router-dom";
import HomePage from "./components/HomePage";
import AboutLittleLemon from "./components/AboutLittleLemon";
import BookingForm from "./components/BookingForm";

const shopHeader = "Little Lemon";
const shopSubHeader = "Chicago";
const shopDescription =
  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.";
const reserveATable = "Reserve a table";
const specials = "This week specials!";
const orderOnline = "Order online";
const delivery = "Order a delivery";
const greekSalad = "Greek salad";
const greekSaladPrice = "$12.99";
const greekSaladDescription =
  "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garniched with crunchy garlic and rosemary croutons.";
const bruschetta = "Bruschetta";
const bruschettaPrice = "$5.99";
const bruschettaDescription =
  " Our Bruschetta is made from grilled bread that has bee smeared with garlic and seasoned with salt ad olive oil.";
const lemonDessert = "Lemon dessert";
const lemonDesserPrice = "$5.00";
const lemonDessertDescription =
  "This comes straignnt from grandma's recipe book, every last ingredient has been sourced and is as authentic as can be imagined.";

function App() {
  return (
    <div className="App">
      <header className="container">
        <img src={Logo} alt="Logo"></img>
        <div className="headerMenu header">
          <h2><Link to="/home" className="header">Home</Link></h2>
          <h2><Link to="/about" className="header">About</Link></h2>
          <h2><Link to="/home" className="header">Menu</Link></h2>
          <h2><Link to="/book" className="header">Reservations</Link></h2>
          <h2><Link className="header">Order Online</Link></h2>
          <h2><Link className="header">Login</Link></h2>
            <Routes>
              <Route path="/home" element={<HomePage />}/>
              <Route path="/about" element={<AboutLittleLemon />}/>
              <Route path="/book" element={<BookingForm />}/>
            </Routes>
        </div>
      </header>

      <nav>
        <div>
          <div className="container">
            <h1 className="mainHeader">
              {shopHeader}
              <img src={Food} alt="Little Lemon"></img>
            </h1>
            <h2 className="subHeader">{shopSubHeader}</h2>
            <p>{shopDescription}</p>
            <button className="buttons">{reserveATable}</button>
          </div>
        </div>
      </nav>
      <main className="container">
        <div className="orderOnline">
          <h1 subHeader>{specials}</h1>
          <button className="buttons">{orderOnline}</button>
        </div>
        <div className="dishList">
          <div className="articleBlock roundedTopCorners">
            <article>
              <img
                src={GreekSalad}
                alt="greekSalad"
                className="roundedTopCorners"
              ></img>
              <div className="productLine">
                <h1 className="productName">{greekSalad}</h1>
                <h1 className="productPrice">{greekSaladPrice}</h1>
              </div>
              <p className="productDescription">{greekSaladDescription}</p>
              <div className="deliveryLine">
                <h2 className="delivery header">{delivery}</h2>
                <img
                  className="deliveryIcon"
                  alt="deliveryIcon"
                  src={DeliveryIcon}
                ></img>
              </div>
            </article>
          </div>
          <div className="articleBlock roundedTopCorners">
            <article>
              <img
                src={Bruschetta}
                alt="bruschetta"
                className="roundedTopCorners"
              ></img>
              <div className="productLine">
                <h1 className="productName">{bruschetta}</h1>
                <h1 className="productPrice">{bruschettaPrice}</h1>
              </div>
              <p className="productDescription">{bruschettaDescription}</p>
              <div className="deliveryLine">
                <h2 className="delivery header">{delivery}</h2>
                <img
                  className="deliveryIcon"
                  alt="deliveryIcon"
                  src={DeliveryIcon}
                ></img>
              </div>
            </article>
          </div>
          <div className="articleBlock roundedTopCorners">
            <article>
              <img
                src={LemonDesert}
                alt="lemonDessert"
                className="roundedTopCorners"
              ></img>
              <div className="productLine">
                <h1 className="productName">{lemonDessert}</h1>
                <h1 className="productPrice">{lemonDesserPrice}</h1>
              </div>
              <p className="productDescription">{lemonDessertDescription}</p>
              <div className="deliveryLine">
                <h2 className="delivery header">{delivery}</h2>
                <img
                  className="deliveryIcon"
                  alt="deliveryIcon"
                  src={DeliveryIcon}
                ></img>
              </div>
            </article>
          </div>
        </div>
      </main>

      <Footer />

    </div>
  );
}

export default App;
