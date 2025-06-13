import React from "react";
import "../styles/Loader.css";

const Loader = ({ loading }) => {
  return (
    <div className={`styled-spinner-container ${loading ? "loading" : ""}`}>
      <div style={{ width: "80px", height: "80px" }}>
        <svg viewBox="0 0 120 100" xmlns="http://www.w3.org/2000/svg">
          {/* Updated Main Path */}
          <path
            d="M 10 75 L 45 30 L 65 75 L 90 45"
            fill="none"
            stroke="#3b82f6 "
            strokeWidth="10"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeDasharray="215"
            style={{ animation: "draw-line-infinite 3s ease-in-out infinite" }}
          />

          {/* Diamond repositioned (up by 10 units) */}
          <path
            d="M 40 51 L 49 60 L 40 69 L 31 60 Z"
            fill="#3b82f6 "
            style={{
              animation: "fade-elements-infinite 3s ease-in-out infinite",
              transformOrigin: "40px 60px",
            }}
          />

          {/* Line Tail — aligned with new final Y point (45) */}
          <line
            x1="75"
            y1="45"
            x2="100"
            y2="45"
            stroke="#3b82f6 "
            strokeWidth="10"
            strokeLinecap="round"
            style={{
              animation: "fade-arrow-infinite 3s ease-in-out infinite",
            }}
          />

          {/* Arrowhead — also lifted to match new line Y */}
          <polygon
            points="100,35 110,45 100,55"
            fill="#3b82f6 "
            style={{
              animation: "fade-arrow-infinite 3s ease-in-out infinite",
            }}
          />
        </svg>
      </div>
    </div>
  );
};

export default Loader;
