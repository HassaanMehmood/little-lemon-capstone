// src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import BookingPage from "./pages/BookingPage";
import MainPage from "./Main";
import ConfirmedBooking from "./components/ConfirmedBooking";

import "./App.css";

function App() {
  return (
    <Router>
      <nav className="nav">
        <Nav />
      </nav>

      <main className="main">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/booking" element={<BookingPage />} />
          <Route path="/main" element={<MainPage />} />
          <Route path="/confirmed-booking" element={<ConfirmedBooking />} />
        </Routes>
      </main>

      <footer className="footer">
        <Footer />
      </footer>
    </Router>
  );
}

export default App;
