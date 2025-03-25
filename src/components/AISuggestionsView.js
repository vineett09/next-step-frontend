import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Loader from "./Loader";
import "../styles/AISuggestionsView.css"; // New CSS file

const SuggestionView = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [suggestion, setSuggestion] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const token = localStorage.getItem("token");

  useEffect(() => {
    const fetchSuggestion = async () => {
      if (!token) return;
      try {
        const response = await axios.get(`/api/suggestions/${id}`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        if (response.data && response.data.suggestion) {
          setSuggestion(response.data.suggestion);
        } else {
          setError("Suggestion not found");
        }
      } catch (error) {
        console.error("Error fetching suggestion:", error);
        setError("Error loading suggestion. Please try again.");
      } finally {
        setLoading(false);
      }
    };
    fetchSuggestion();
  }, [id, token, navigate]);

  const downloadSuggestionAsPDF = async (roadmapHtml) => {
    try {
      const html2pdf = (await import("html2pdf.js")).default;
      const tempDiv = document.createElement("div");
      tempDiv.innerHTML = roadmapHtml;
      tempDiv.className = "suggestion-display-content"; // Matches new CSS
      document.body.appendChild(tempDiv);
      const opt = {
        margin: [10, 10, 10, 10],
        filename: `Learning-Roadmap-${new Date()
          .toLocaleDateString()
          .replace(/\//g, "-")}.pdf`,
        image: { type: "jpeg", quality: 0.98 },
        html2canvas: { scale: 2, useCORS: true, logging: false },
        jsPDF: { unit: "mm", format: "a4", orientation: "portrait" },
      };
      await html2pdf().set(opt).from(tempDiv).save();
      document.body.removeChild(tempDiv);
    } catch (err) {
      console.error("Error generating PDF:", err);
      alert("There was an error generating your PDF. Please try again.");
    }
  };

  if (loading) {
    return (
      <div className="suggestion-display-page">
        <Navbar />
        <Loader loading={loading} />
        <Footer />
      </div>
    );
  }

  if (error) {
    return (
      <div className="suggestion-display-page">
        <Navbar />
        <div className="suggestion-display-wrapper">
          <div className="suggestion-display-error">
            <h2>Error</h2>
            <p>{error}</p>
            <button
              className="suggestion-back-btn"
              onClick={() => navigate("/profile")}
            >
              Back to Profile
            </button>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="suggestion-display-page">
      <Navbar />
      <div className="suggestion-display-wrapper">
        <div className="suggestion-display-header">
          <button
            className="suggestion-back-btn"
            onClick={() => navigate("/profile")}
          >
            ← Back to Profile
          </button>
          <div className="suggestion-info">
            <div className="suggestion-meta">
              <p>
                <strong>Career Goal:</strong> {suggestion.answers.careerGoals}
              </p>
              <p>
                <strong>Experience Level:</strong>{" "}
                {suggestion.answers.experience}
              </p>
              <p>
                <strong>Learning Preference:</strong>{" "}
                {suggestion.answers.preference}
              </p>
              <p>
                <strong>Created:</strong>{" "}
                {new Date(suggestion.createdAt).toLocaleDateString()}
              </p>
            </div>
          </div>
          <button
            className="suggestion-download-btn"
            onClick={() => downloadSuggestionAsPDF(suggestion.roadmap)}
          >
            Download as PDF
          </button>
        </div>
        <div className="suggestion-display-content-wrapper">
          <div
            className="suggestion-display-content"
            dangerouslySetInnerHTML={{ __html: suggestion.roadmap }}
          ></div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default SuggestionView;
