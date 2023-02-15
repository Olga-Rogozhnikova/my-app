import React from "react";
import Food from "../images/restauranfood.jpg";

const shopHeader = "Little Lemon";
const shopSubHeader = "Chicago";
const shopDescription =
  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.";
const reserveATable = "Reserve a table";

function Nav() {
  return (
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
  );
}

export default Nav;
