import React, { useState } from "react";
import "../styles/roadmaps/TipBox.css";
import nodeDeveloperRoadmap from "./../data/techskills/Nodejs";

const TipBox = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="tipbox-wrapper"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onTouchStart={() => setIsHovered(true)} // For mobile touch
      onTouchEnd={() => setIsHovered(false)} // For mobile touch
    >
      <button className="tipbox-btn">TIP💡</button>

      <div className={`tipbox-container ${isHovered ? "show" : ""}`}>
        <div className="tipbox-arrow"></div>
        <div className="legend-item">
          <div
            className="color-box"
            style={{ backgroundColor: "#FF8C00" }}
          ></div>
          <span className="tipbox-text">Recommended</span>
        </div>
        <div className="legend-item">
          <div
            className="color-box"
            style={{ backgroundColor: "#4CAF50" }}
          ></div>
          <span className="tipbox-text">Completed</span>
        </div>
        <span className="instruction-text">
          Right click to mark as completed and double tap on a node to start
          Chatbot in mobile.
        </span>
      </div>
    </div>
  );
};

export default TipBox;
