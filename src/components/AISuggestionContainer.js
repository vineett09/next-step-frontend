// src/components/AISuggestionContainer.jsx
import React from "react";
import "../styles/AISuggestionContainer.css";
import { useNavigate } from "react-router-dom";

const AISuggestionContainer = () => {
  const navigate = useNavigate();

  const handleAISuggestionButton = () => {
    navigate("/ai-suggestion");
  };

  return (
    <div className="ai-suggestion-container">
      <p className="ai-suggestion-text">Don't Know What To Do?</p>
      <button
        className="ai-suggestion-button"
        onClick={handleAISuggestionButton}
      >
        Get Suggestions ✨
      </button>
    </div>
  );
};

export default AISuggestionContainer;
