import "./App.css";
import Logo from "./images/Logo.jpg";
import React, { Component } from "react";
import CallToAction from "./components/CallToAction";
import Chicago from "./components/Chicago";
import CustomersSay from "./components/CustomersSay";
import Specials from "./components/Specials";
import { Routes, Route, Link, Switch } from "react-router-dom";
import HomePage from "./components/HomePage";
import AboutLittleLemon from "./components/AboutLittleLemon";
import BookingPage from "./components/BookingPage";

function App() {

  return (
    <div className="App">
      <a href="https://littlelemon.com" className="App-link"></a>
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
              <Route path="/about" element={<AboutLittleLemon />}/>
              <Route path="/book" element={<BookingPage />}/>
            </Routes>
        </div>
      </header>
      <Routes>
      <Route path="/" element={<HomePage />}/>
              <Route path="/home" element={<HomePage />}/>
      </Routes>
    </div>
  );
}

export default App;
