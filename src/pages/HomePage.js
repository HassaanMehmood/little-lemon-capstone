import React from "react";
import Hero from "../components/Hero";
import Highlights from "../components/Highlights";
import Testimonials from "../components/Testimonials";
import About from "../components/About";

function HomePage() {
  return (
    <>
      <Hero /> {/* (CallToAction) */}
      <Highlights /> {/* (Specials) */}
      <Testimonials /> {/* (CustomersSay) */}
      <About /> {/* (Chicago) */}
    </>
  );
}

export default HomePage;
