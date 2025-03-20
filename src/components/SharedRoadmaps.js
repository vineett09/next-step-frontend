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

// Pagination component
const Pagination = ({ currentPage, totalPages, setCurrentPage }) => {
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo(0, 0);
  };

  return (
    <div className="pagination-container">
      <button
        className="pagination-button"
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        &lt;
      </button>

      <span className="pagination-info">
        Page {currentPage} of {totalPages}
      </span>

      <button
        className="pagination-button"
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        &gt;
      </button>
    </div>
  );
};

const SharedRoadmaps = () => {
  const [sharedRoadmaps, setSharedRoadmaps] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;

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

  const lastIndex = currentPage * itemsPerPage;
  const firstIndex = lastIndex - itemsPerPage;
  const currentRoadmaps = sharedRoadmaps.slice(firstIndex, lastIndex);
  const totalPages = Math.ceil(sharedRoadmaps.length / itemsPerPage);

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
            <>
              <div className="roadmaps-grid">
                {currentRoadmaps.map((roadmap) => (
                  <div key={roadmap._id} className="roadmap-card">
                    <div className="roadmap-card-header">
                      <span className="creator">
                        Created by: {roadmap.createdBy?.username || "Unknown"}
                      </span>
                      <h3>{roadmap.title}</h3>
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

              {totalPages > 1 && (
                <Pagination
                  currentPage={currentPage}
                  totalPages={totalPages}
                  setCurrentPage={setCurrentPage}
                />
              )}
            </>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default SharedRoadmaps;
