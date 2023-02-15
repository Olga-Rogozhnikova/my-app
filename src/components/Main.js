import React from "react";
import Bruschetta from "../images/bruschetta.jpg";
import LemonDesert from "../images/lemonDessert.jpg";
import GreekSalad from "../images/greekSalad.jpg";
import DeliveryIcon from "../images/deliveryIcon.png";

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

function Main() {
  return (
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
  );
}

export default Main;
