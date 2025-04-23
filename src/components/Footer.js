import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer-container">
      {/* Logo Section */}
      <div className="footer-logo">
        <img
          src={"/logo.png"}
          alt="Little Lemon Logo"
          className="footer-logo-img"
        />
      </div>

      {/* Doormat Navigation */}
      <div className="footer-nav">
        <h4>Doormat Navigation</h4>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/menu">Menu</a>
          </li>
          <li>
            <a href="/reservations">Reservations</a>
          </li>
          <li>
            <a href="/order">Order Online</a>
          </li>
          <li>
            <a href="/login">Login</a>
          </li>
        </ul>
      </div>

      {/* Contact Information */}
      <div className="footer-contact">
        <h4>Contact</h4>
        <p>123 Citrus Street</p>
        <p>Chicago, IL</p>
        <p>(123) 456-7890</p>
        <p>contact@littlelemon.com</p>
      </div>

      {/* Social Media Links */}
      <div className="footer-social">
        <h4>Follow Us</h4>
        <ul>
          <li>
            <a href="/">Facebook</a>
          </li>
          <li>
            <a href="/">Instagram</a>
          </li>
          <li>
            <a href="/">Twitter</a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
