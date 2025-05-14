import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../features/authslice";
import "../styles/Navbar.css";
import logo from "../assets/NextStep.png"; // Adjust path as needed

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);
  const dropdownRef = useRef(null);

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

  const toggleDropdown = (e) => {
    e.stopPropagation();
    setDropdownOpen(!dropdownOpen);
  };

  // Handle clicks outside the dropdown to close it
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    }

    // Add event listener when dropdown is open
    if (dropdownOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    // Clean up the event listener
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownOpen]);

  return (
    <nav className="navbar">
      <div className="navbar-logo" onClick={() => navigate("/")}>
        <img src={logo} alt="Logo" className="navbar-logo-image" />
        <span>NextStep</span>
      </div>

      <div className={`navbar-links ${mobileMenuOpen ? "active" : ""}`}>
        {/* Shared Roadmaps button always visible */}
        <button
          className="shared-roadmaps-button"
          onClick={() => navigate("/shared-roadmaps")}
        >
          Shared Roadmaps
        </button>
        <button onClick={() => navigate("/smart-feed")}>Smart Feed</button>
        {user ? (
          <div className="nav-user-container" ref={dropdownRef}>
            <span className="nav-user" onClick={toggleDropdown}>
              Hello, {user.username}
            </span>
            {dropdownOpen && (
              <div className="dropdown-user-menu">
                <button onClick={() => navigate("/profile")}>Profile</button>
                <button onClick={() => navigate("/explore")}>Explore </button>
                <button onClick={handleCreateClick}>Create Roadmap</button>
                <button onClick={() => navigate("/generate-roadmap")}>
                  AI Roadmaps
                </button>
                <button onClick={() => navigate("/ai-suggestion")}>
                  AI Suggestions
                </button>
                <button onClick={() => navigate("/career-tracker")}>
                  Career Path Advisor
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
