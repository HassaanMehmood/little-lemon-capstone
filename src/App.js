import React from "react";

import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Highlights from "./components/Highlights";
import Testimonials from "./components/Testimonials";
import About from "./components/About";
import Footer from "./components/Footer";

import "./App.css";

function App() {
  return (
    <>
      <nav className="nav">
        <Nav />
      </nav>

      <main className="main">
        {/* Hero Section */}
        <Hero />
        {/* Highlights Section */}
        <Highlights />
        {/* Testimonials Section */}
        <Testimonials />
        {/* About Section */}
        <About />
      </main>

      <footer className="footer">
        <Footer />
      </footer>
    </>
  );
}

export default App;
