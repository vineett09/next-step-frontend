// src/components/AISuggestionContainer.jsx
import React, { useState } from "react";
import "../styles/AISuggestionContainer.css";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import AuthModal from "./AuthModal"; // Make sure the path is correct

const AISuggestionContainer = () => {
  const navigate = useNavigate();
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const { user } = useSelector((state) => state.auth);

  const handleAISuggestionButton = () => {
    if (user) {
      navigate("/ai-suggestion");
    } else {
      setIsAuthModalOpen(true);
    }
  };

  const handleCloseAuthModal = () => {
    setIsAuthModalOpen(false);
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
      <AuthModal isOpen={isAuthModalOpen} onClose={handleCloseAuthModal} />
    </div>
  );
};

export default AISuggestionContainer;
