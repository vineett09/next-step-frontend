import React, { useState } from "react";
import "../styles/roadmaps/TipBox.css";

const TipBox = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="tipbox-wrapper"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <button className="tipbox-btn">TIP💡</button>

      <div className={`tipbox-container ${isHovered ? "show" : ""}`}>
        <div className="tipbox-arrow"></div>
        <div className="legend-item">
          <div
            className="color-box"
            style={{ backgroundColor: "#FF8C00" }}
          ></div>
          <span className="tipbox-text">Recommended/Required</span>
        </div>
        <div className="legend-item">
          <div
            className="color-box"
            style={{ backgroundColor: "#4CAF50" }}
          ></div>
          <span className="tipbox-text">Completed</span>
        </div>
        <span className="instruction-text">
          Right click to mark as completed
        </span>
      </div>
    </div>
  );
};

export default TipBox;
