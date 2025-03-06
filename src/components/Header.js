// components/Header.js
import React from "react";
import { Link } from "react-router-dom";
import "../styles/Header.css";
import { useNavigate } from "react-router-dom";
const Header = ({
  title,
  toggleBookmark,
  isBookmarked,
  completedNodes = {},
  totalNodes = 0,
}) => {
  const navigate = useNavigate();
  const completedNodesCount = Object.keys(completedNodes).length;
  const progressPercentage =
    totalNodes > 0 ? Math.round((completedNodesCount / totalNodes) * 100) : 0;

  return (
    <div>
      <section className="roadmap-header">
        <div className="roadmap-content">
          <Link to="/" className="back-button">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
              <path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z" />
            </svg>
            <span>Go Home</span>
          </Link>
          <h1>
            {`A comprehensive roadmap to achieve ${title} field in 2025.` ||
              "Explore Your Path to Tech Excellence"}
          </h1>
          <div className="progress-wrapper">
            <span className="progress-text">
              {completedNodesCount} / {totalNodes} Completed (
              {progressPercentage}%)
            </span>
          </div>

          <button
            className="generate-roadmap"
            aria-label="Show information"
            onClick={() => navigate("/generate-roadmap")}
          >
            Generate AI Roadmap ✨
          </button>

          <button
            onClick={toggleBookmark}
            className={`bookmark-button ${isBookmarked ? "bookmarked" : ""}`}
            aria-label={
              isBookmarked ? "Unbookmark roadmap" : "Bookmark roadmap"
            }
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="24"
              height="24"
              fill={isBookmarked ? "#000" : "#fff"}
            >
              <path d="M17 3H7c-1.1 0-2 .9-2 2v16l7-3 7 3V5c0-1.1-.9-2-2-2zm0 15l-5-2.18L7 18V5h10v13z" />
            </svg>
          </button>
        </div>
      </section>
    </div>
  );
};

export default Header;
