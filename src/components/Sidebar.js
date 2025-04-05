import React, { useState, useEffect } from "react";
import Loader from "./Loader";
import "../styles/roadmaps/Sidebar.css";
const Sidebar = ({ isOpen, onClose, name, description }) => {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setIsLoading(true);

      setIsLoading(false);
    }
  }, [isOpen]);

  return (
    <div className={`sidebar ${isOpen ? "open" : ""}`}>
      <div className="sidebar-content">
        <button onClick={onClose} className="close-button">
          ✕
        </button>
        {isLoading ? (
          <Loader loading={true} />
        ) : (
          <>
            <h3>{name}</h3>
            <p className="sidebar-text">{description}</p>
          </>
        )}
      </div>
    </div>
  );
};

export default Sidebar;
