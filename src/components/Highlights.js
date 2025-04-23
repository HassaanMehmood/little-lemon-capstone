import React from "react";
import "./Highlights.css";
import mediterraneanPlatterImg from "../assets/greeksalad.png";
import grilledLambImg from "../assets/bruchetta.png";
import hummusImg from "../assets/lemondessert.png";

const specials = [
  {
    id: 1,
    name: "Grrek Salad",
    description:
      "A delicious combo of falafel, hummus, grape leaves, and fresh pita.",
    price: "$14.99",
    image: mediterraneanPlatterImg,
  },
  {
    id: 2,
    name: "Bruchetta",
    description: "Tender lamb skewers served with tzatziki and couscous.",
    price: "$18.50",
    image: grilledLambImg,
  },
  {
    id: 3,
    name: "Lemon Dessert",
    description: "Creamy hummus topped with olive oil, paprika, and parsley.",
    price: "$8.99",
    image: hummusImg,
  },
];

function Highlights() {
  return (
    <section className="highlights">
      <div className="center-wrapper">
        <div className="content-container">
          <div className="highlights-header">
            <h2>This Week Specials</h2>
            <a href="/order" className="main-order-btn">
              Order Online
            </a>
          </div>
        </div>
      </div>

      <div className="center-wrapper">
        <div className="content-container">
          <div className="specials-container">
            {specials.map((item) => (
              <div className="special-card" key={item.id}>
                <img src={item.image} alt={item.name} />
                <div className="special-details">
                  <h3>{item.name}</h3>
                  <span className="price">{item.price}</span>
                </div>
                <p>{item.description}</p>
                <a href="/order" className="btn">
                  Order Now
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Highlights;
