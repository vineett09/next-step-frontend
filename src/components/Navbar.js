// src/components/Navbar.js
import React, { useState } from "react";
import "../styles/Navbar.css"; // We'll update the CSS file next

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">NextStep</div>
      <div className={`navbar-links ${isOpen ? "active" : ""}`}>
        <a href="/" className="nav-link">
          Home
        </a>
        <a href="/about" className="nav-link">
          About
        </a>
        <a href="/services" className="nav-link">
          Services
        </a>
        <a href="/contact" className="nav-link">
          Contact
        </a>
      </div>
      <div className="navbar-toggle" onClick={toggleMenu}>
        <span className={`bar ${isOpen ? "change" : ""}`}></span>
        <span className={`bar ${isOpen ? "change" : ""}`}></span>
        <span className={`bar ${isOpen ? "change" : ""}`}></span>
      </div>
    </nav>
  );
};

export default Navbar;
