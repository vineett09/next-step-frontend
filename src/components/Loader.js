import React from "react";
import "../styles/Loader.css";

const Loader = ({
  loading,
  primaryColor = "#6366f1",
  secondaryColor = "#c4b5fd",
}) => {
  return (
    <div className={`styled-spinner-container ${loading ? "loading" : ""}`}>
      <div
        className="styled-spinner"
        style={{
          "--primary-color": primaryColor,
          "--secondary-color": secondaryColor,
        }}
      >
        <div className="spinner-ring outer-ring"></div>
        <div className="spinner-ring inner-ring"></div>
        <div className="spinner-core"></div>
      </div>
    </div>
  );
};

export default Loader;
