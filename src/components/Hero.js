import React from "react";
import "./Hero.css";
import heroImage from "../assets/Hero.png"; // adjust path if needed

function Hero() {
  return (
    <section className="hero">
      <div className="hero-container">
        <div className="hero-left">
          <h1>Little Lemon</h1>
          <h2>Chicago</h2>
          <p>
            Enjoy the best Mediterranean flavors in a cozy, local setting. Enjoy
            the best Mediterranean flavors in a cozy, local setting. Enjoy the
            best Mediterranean flavors in a cozy, local setting.
          </p>
          <a href="/reserve" className="reserve-button">
            Book a Table
          </a>
        </div>
        <div className="hero-right">
          <img
            src={heroImage}
            alt="Little Lemon Restaurant"
            className="hero-image"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
