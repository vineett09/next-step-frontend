import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../features/authslice";
import "../styles/Navbar.css";

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);

  const handleLogout = () => {
    dispatch(logout());
    navigate("/login");
  };

  const handleCreateClick = () => {
    navigate("/create-roadmap");
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo" onClick={() => navigate("/")}>
        NextStep
      </div>

      <div className={`navbar-links ${mobileMenuOpen ? "active" : ""}`}>
        {/* Shared Roadmaps button always visible */}
        <button
          className="shared-roadmaps-button"
          onClick={() => navigate("/shared-roadmaps")}
        >
          Shared Roadmaps
        </button>

        {user ? (
          <div
            className="nav-user-container"
            onMouseEnter={() => setDropdownOpen(true)}
            onMouseLeave={() => setDropdownOpen(false)}
          >
            <span className="nav-user">Hello, {user.username}</span>
            {dropdownOpen && (
              <div className="dropdown-user-menu">
                <button onClick={() => navigate("/profile")}>Profile</button>
                <button className="create-button" onClick={handleCreateClick}>
                  Create Roadmap
                </button>
                <button onClick={handleLogout}>Logout</button>
              </div>
            )}
          </div>
        ) : (
          <>
            <button className="nav-link" onClick={() => navigate("/login")}>
              Login
            </button>
            <button
              className="signup-button"
              onClick={() => navigate("/register")}
            >
              Sign Up
            </button>
          </>
        )}
      </div>

      <div className="navbar-toggle" onClick={toggleMobileMenu}>
        <span className={`bar ${mobileMenuOpen ? "change" : ""}`}></span>
        <span className={`bar ${mobileMenuOpen ? "change" : ""}`}></span>
        <span className={`bar ${mobileMenuOpen ? "change" : ""}`}></span>
      </div>
    </nav>
  );
};

export default Navbar;
