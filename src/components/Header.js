import React from "react";
import Logo from "../images/Logo.jpg";

function Header() {
  return (
    <header className="container">
      <img src={Logo} alt="Logo"></img>
      <div className="headerMenu header">
        <a>Home</a>
        <a>About</a>
        <a>Menu</a>
        <a>Reservations</a>
        <a>Order Online</a>
        <a>Login</a>
      </div>
    </header>
  );
}

export default Header;
