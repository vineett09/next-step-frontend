import React from "react";
import "../styles/Loader.css";

const Loader = ({ loading }) => {
  return (
    <div className={`loader-container ${loading ? "loading" : ""}`}>
      <div className="loader"></div>
    </div>
  );
};

export default Loader;
