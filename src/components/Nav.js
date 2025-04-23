import React from "react";
import "./Nav.css";

function Nav() {
  return (
    <nav className="nav-bar">
      <div className="logo-container">
        <img
          src="/logo.png"
          alt="Little Lemon logo"
          className="logo-placeholder"
        />
      </div>
      <ul className="nav-links">
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
    </nav>
  );
}

export default Nav;
