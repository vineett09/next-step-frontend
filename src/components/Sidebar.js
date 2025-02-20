// src/components/Sidebar.js
import React from "react";

const Sidebar = ({ isOpen, onClose, name, description }) => {
  return (
    <div className={`sidebar ${isOpen ? "open" : ""}`}>
      <div className="sidebar-content">
        <button onClick={onClose} className="close-button">
          ✕
        </button>
        <h3>{name}</h3>
        <p className="sidebar-text">{description}</p>
      </div>
    </div>
  );
};

export default Sidebar;
