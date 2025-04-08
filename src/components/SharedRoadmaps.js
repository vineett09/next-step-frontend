import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Loader from "./Loader";
import "../styles/SharedRoadmap.css";
const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;

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
  const [followersCount, setFollowersCount] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;

  useEffect(() => {
    fetchSharedRoadmaps();
  }, []);

  const fetchSharedRoadmaps = async () => {
    try {
      const response = await axios.get(
        `${BACKEND_URL}/api/roadmaps/shared-roadmaps`
      );

      if (response.data.success) {
        setSharedRoadmaps(response.data.roadmaps);

        // Fetch followers count for each roadmap
        const roadmapIds = response.data.roadmaps.map((roadmap) => roadmap._id);
        fetchFollowersCounts(roadmapIds);
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

  const fetchFollowersCounts = async (roadmapIds) => {
    try {
      // Create an object to store the counts
      const countsObj = {};

      // Fetch counts for each roadmap (could be optimized with a batch API endpoint)
      await Promise.all(
        roadmapIds.map(async (id) => {
          const response = await axios.get(
            `${BACKEND_URL}/api/roadmaps/${id}/followers-count`
          );

          if (response.data.success) {
            countsObj[id] = response.data.followersCount;
          }
        })
      );

      setFollowersCount(countsObj);
    } catch (err) {
      console.error("Error fetching followers counts:", err);
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
                      <div className="meta-left">
                        <span className="update-date">
                          Last updated:{" "}
                          {new Date(roadmap.lastUpdated).toLocaleDateString()}
                        </span>
                        <span className="followers-count">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 640 512"
                            className="followers-icon"
                          >
                            <path d="M96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM0 482.3C0 383.8 79.8 304 178.3 304h91.4C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7H29.7C13.3 512 0 498.7 0 482.3zM609.3 512H471.4c5.4-9.4 8.6-20.3 8.6-32v-8c0-60.7-27.1-115.2-69.8-151.8c2.4-.1 4.7-.2 7.1-.2h61.4C567.8 320 640 392.2 640 481.3c0 17-13.8 30.7-30.7 30.7zM432 256c-31 0-59-12.6-79.3-32.9C372.4 196.5 384 163.6 384 128c0-26.8-6.6-52.1-18.3-74.3C384.3 40.1 407.2 32 432 32c61.9 0 112 50.1 112 112s-50.1 112-112 112z" />
                          </svg>
                          {followersCount[roadmap._id] || 0}
                        </span>
                      </div>
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
                    <div className="roadmap-actions-btn">
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
