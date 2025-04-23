import React from "react";
import "./About.css";
import image1 from "../assets/greeksalad.png"; // adjust path if needed
import image2 from "../assets/lemondessert.png"; // adjust path if needed

function About() {
  return (
    <section className="about">
      <div className="about-container">
        {/* Left side for content */}
        <div className="about-left">
          <div className="text-placeholder">
            <h1>Little Lemon</h1>
            <h2>Chicago</h2>
            <p>
              Enjoy the best Mediterranean flavors in a cozy, local setting.
              Enjoy the best Mediterranean flavors in a cozy, local setting.
              Enjoy the best Mediterranean flavors in a cozy, local setting.
            </p>{" "}
          </div>
        </div>

        {/* Right side for images */}
        <div className="about-right">
          <div className="image-container">
            <img src={image1} alt="Image_1" className="image1" />
            <img src={image2} alt="Image_2" className="image2" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
