import React from "react";
import { Link } from "react-router-dom";
import "../styles/Header.css";

const Header = ({ title }) => {
  return (
    <div>
      <section className="roadmap-header">
        <div className="roadmap-content">
          <Link to="/" className="back-button">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="feather feather-arrow-left"
            >
              <line x1="19" y1="12" x2="5" y2="12" />
              <polyline points="12 19 5 12 12 5" />
            </svg>
            <span>All Roadmaps</span>
          </Link>
          <h1>
            {" "}
            {`A comprehensive roadmap to achieve ${title} field in 2025.` ||
              "Explore Your Path to Tech Excellence"}
          </h1>
        </div>
      </section>
    </div>
  );
};

export default Header;
