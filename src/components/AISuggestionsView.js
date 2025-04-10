import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Loader from "./Loader";
import "../styles/AISuggestionsView.css";
const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;

const SuggestionView = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [suggestion, setSuggestion] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  // Check authentication status
  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsAuthenticated(!!token);
  }, []);

  // Handle window resize for responsive design
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const fetchSuggestion = async () => {
      const token = localStorage.getItem("token");
      if (!token) {
        setLoading(false);
        return;
      }

      try {
        const response = await axios.get(
          `${BACKEND_URL}/api/suggestions/${id}`,
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );

        if (response.data && response.data.suggestion) {
          setSuggestion(response.data.suggestion);
        } else {
          setError("Suggestion not found");
        }
      } catch (error) {
        console.error("Error fetching suggestion:", error);
        setError(
          error.response?.status === 401
            ? "Authentication error. Please log in again."
            : "Error loading suggestion. Please try again."
        );
      } finally {
        setLoading(false);
      }
    };

    fetchSuggestion();
  }, [id, navigate]);

  const downloadSuggestionAsPDF = async (roadmapHtml) => {
    try {
      const html2pdf = (await import("html2pdf.js")).default;

      const tempDiv = document.createElement("div");
      tempDiv.innerHTML = roadmapHtml;
      tempDiv.className = "suggestion-display-content";

      tempDiv.style.margin = "20px";
      tempDiv.style.padding = "30px";
      tempDiv.style.maxWidth = "none";

      document.body.appendChild(tempDiv);

      const opt = {
        margin: [15, 15, 15, 15],
        filename: `Learning-Roadmap-${
          suggestion.answers.careerGoals
        }-${new Date().toLocaleDateString().replace(/\//g, "-")}.pdf`,
        image: { type: "jpeg", quality: 0.98 },
        html2canvas: {
          scale: 2,
          useCORS: true,
          logging: false,
          width: Math.min(800, window.innerWidth - 40),
        },
        jsPDF: { unit: "mm", format: "a4", orientation: "portrait" },
      };

      await html2pdf().set(opt).from(tempDiv).save();
      document.body.removeChild(tempDiv);
    } catch (err) {
      console.error("Error generating PDF:", err);
      alert("There was an error generating your PDF. Please try again.");
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="suggestion-display-page">
        <Navbar />
        <div className="suggestion-auth-required">
          <h2>Authentication Required</h2>
          <p>You need to log in to view the AI Suggestion page.</p>
        </div>
        <Footer />
      </div>
    );
  }

  // Loading view
  if (loading) {
    return (
      <div className="suggestion-display-page">
        <Navbar />
        <Loader loading={loading} />
        <Footer />
      </div>
    );
  }

  // Error view
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

  // Format date nicely
  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  return (
    <div className="suggestion-display-page">
      <Navbar />
      <div className="suggestion-display-wrapper">
        <div className="suggestion-display-header">
          <div className="suggestion-info">
            <div className="suggestion-meta">
              <p>
                <strong>Career Goal:</strong> {suggestion.answers.careerGoals}
              </p>
              <p>
                <strong>Experience:</strong> {suggestion.answers.experience}
              </p>
              <p>
                <strong>Learning Style:</strong> {suggestion.answers.preference}
              </p>
              <p>
                <strong>Created:</strong> {formatDate(suggestion.createdAt)}
              </p>
            </div>
          </div>

          <button
            className="suggestion-back-btn"
            onClick={() => navigate("/profile")}
          >
            ← Back to Profile
          </button>

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
