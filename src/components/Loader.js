import React from "react";
import "../styles/Loader.css"; // Ensure this CSS file is included

const Loader = ({ loading }) => {
  return (
    <div className={`loader-container ${loading ? "loading" : ""}`}>
      <div className="loader">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default Loader;
