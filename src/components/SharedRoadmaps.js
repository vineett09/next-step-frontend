import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Loader from "./Loader";
import "../styles/SharedRoadmap.css";

const StarRating = ({ value }) => {
  const roundedValue = Math.round(value * 2) / 2;

  return (
    <div className="star-rating">
      {[1, 2, 3, 4, 5].map((star) => {
        if (star <= roundedValue) {
          return (
            <span key={star} className="star full-star">
              ★
            </span>
          );
        } else if (star - 0.5 === roundedValue) {
          return (
            <span key={star} className="star half-star">
              ☆
            </span>
          );
        } else {
          return (
            <span key={star} className="star empty-star">
              ☆
            </span>
          );
        }
      })}
    </div>
  );
};

const SharedRoadmaps = () => {
  const [sharedRoadmaps, setSharedRoadmaps] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchSharedRoadmaps();
  }, []);

  const fetchSharedRoadmaps = async () => {
    try {
      const response = await axios.get("/api/roadmaps/shared-roadmaps");

      if (response.data.success) {
        setSharedRoadmaps(response.data.roadmaps);
      } else {
        setError("Failed to load public roadmaps");
      }
    } catch (err) {
      console.error(
        "Error fetching public roadmaps:",
        err.response?.data || err.message
      );
      setError("Error fetching public roadmaps: " + err.message);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="shared-roadmaps-page">
        <Navbar />
        <Loader loading={loading} />
        <Footer />
      </div>
    );
  }

  if (error) {
    return (
      <div className="error">
        <Navbar />
        <div className="error-message">{error}</div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="public-roadmaps-page">
      <Navbar />
      <div className="public-roadmaps-container">
        <div className="public-roadmaps-header">
          <h1>Shared Roadmaps</h1>
          <p>Explore roadmaps shared by the other people</p>
        </div>

        <div className="roadmaps-section">
          {sharedRoadmaps.length === 0 ? (
            <div className="empty-state">
              <p>No roadmaps are shared yet.</p>
            </div>
          ) : (
            <div className="roadmaps-grid">
              {sharedRoadmaps.map((roadmap) => (
                <div key={roadmap._id} className="roadmap-card">
                  <div className="roadmap-card-header">
                    <h3>{roadmap.title}</h3>
                    <span className="creator">
                      Created by: {roadmap.createdBy?.username || "Unknown"}
                    </span>
                  </div>
                  <p className="roadmap-description">{roadmap.description}</p>
                  <div className="roadmap-meta">
                    <span>
                      Last updated:{" "}
                      {new Date(roadmap.lastUpdated).toLocaleDateString()}
                    </span>
                    <div className="rating-container">
                      {roadmap.ratingStats?.ratingCount > 0 ? (
                        <>
                          <StarRating
                            value={roadmap.ratingStats.averageRating}
                          />
                          <span className="rating-count">
                            {roadmap.ratingStats.averageRating.toFixed(1)} (
                            {roadmap.ratingStats.ratingCount}{" "}
                            {roadmap.ratingStats.ratingCount === 1
                              ? "rating"
                              : "ratings"}
                            )
                          </span>
                        </>
                      ) : (
                        <span className="no-ratings">No ratings yet</span>
                      )}
                    </div>
                  </div>
                  <div className="roadmap-actions">
                    <Link
                      to={`/public-roadmap/${roadmap._id}`}
                      className="view-btn"
                    >
                      View
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default SharedRoadmaps;
