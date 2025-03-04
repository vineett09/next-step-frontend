import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../features/authslice";
import "../styles/Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const user = useSelector((state) => state.auth.user);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLogout = () => {
    dispatch(logout());
    navigate("/login");
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo" onClick={() => navigate("/")}>
        NextStep
      </div>
      <div className={`navbar-links ${isOpen ? "active" : ""}`}>
        {user ? (
          <>
            <span className="nav-user">Hello, {user.username}</span>
            <button className="nav-link" onClick={handleLogout}>
              Logout
            </button>
          </>
        ) : (
          <>
            <button className="nav-link" onClick={() => navigate("/login")}>
              Login
            </button>
            <button className="nav-link" onClick={() => navigate("/register")}>
              Sign Up
            </button>
          </>
        )}
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
