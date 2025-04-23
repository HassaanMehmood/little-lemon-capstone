import React from "react";
import "./Testimonials.css";

// Import images for the testimonials
import sarahImg from "../assets/lemondessert.png";
import johnImg from "../assets/greeksalad.png";
import alexImg from "../assets/bruchetta.png";
import kateImg from "../assets/Hero.png";

function Testimonials() {
  return (
    <section className="testimonials">
      <h2>Customer Testimonials</h2>
      <div className="testimonial-cards-container">
        <div className="testimonial-card">
          <div className="testimonial-header">
            <img src={sarahImg} alt="Sarah" className="testimonial-img" />
            <span className="testimonial-name">Sarah</span>
          </div>
          <p>"Amazing food and service! A must-visit."</p>
          <div className="rating">⭐⭐⭐⭐⭐</div>
        </div>
        <div className="testimonial-card">
          <div className="testimonial-header">
            <img src={johnImg} alt="John" className="testimonial-img" />
            <span className="testimonial-name">John</span>
          </div>
          <p>"The best Mediterranean food I've had in Chicago!"</p>
          <div className="rating">⭐⭐⭐⭐⭐</div>
        </div>
        <div className="testimonial-card">
          <div className="testimonial-header">
            <img src={alexImg} alt="Alex" className="testimonial-img" />
            <span className="testimonial-name">Alex</span>
          </div>
          <p>"Delicious and authentic dishes every time."</p>
          <div className="rating">⭐⭐⭐⭐⭐</div>
        </div>
        <div className="testimonial-card">
          <div className="testimonial-header">
            <img src={kateImg} alt="Kate" className="testimonial-img" />
            <span className="testimonial-name">Kate</span>
          </div>
          <p>"A wonderful dining experience every time!"</p>
          <div className="rating">⭐⭐⭐⭐⭐</div>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
