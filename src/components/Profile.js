import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Loader from "./Loader";
import "../styles/Profile.css";
import { techFields, techSkills } from "../data/TechFieldsData";
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

const Profile = () => {
  const { user, token } = useSelector((state) => state.auth);
  const [userRoadmaps, setUserRoadmaps] = useState([]);
  const [bookmarkedRoadmaps, setBookmarkedRoadmaps] = useState([]);
  const [followedRoadmaps, setFollowedRoadmaps] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeSection, setActiveSection] = useState("profile");
  const [roadmapsCurrentPage, setRoadmapsCurrentPage] = useState(1);
  const [bookmarksCurrentPage, setBookmarksCurrentPage] = useState(1);
  const [followedCurrentPage, setFollowedCurrentPage] = useState(1);
  const [followersCount, setFollowersCount] = useState({});
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [savedSuggestions, setSavedSuggestions] = useState([]);
  const [suggestionsCurrentPage, setSuggestionsCurrentPage] = useState(1);
  const [aiGeneratedRoadmaps, setAIGeneratedRoadmaps] = useState([]);
  const [aiRoadmapsCurrentPage, setAIRoadmapsCurrentPage] = useState(1);
  const itemsPerPage = 3;
  const navigate = useNavigate();

  useEffect(() => {
    if (token && user) {
      fetchUserRoadmaps();
      fetchBookmarkedRoadmaps();
      fetchFollowedRoadmaps();
      fetchSavedSuggestions();
      fetchAIGeneratedRoadmaps();
    }
  }, [token, user]);

  useEffect(() => {
    const token = localStorage.getItem("token");
    setLoading(false);
    setIsAuthenticated(!!token);
  }, [token]);

  const roadmapsLastIndex = roadmapsCurrentPage * itemsPerPage;
  const roadmapsFirstIndex = roadmapsLastIndex - itemsPerPage;
  const currentRoadmaps = userRoadmaps.slice(
    roadmapsFirstIndex,
    roadmapsLastIndex
  );
  const totalRoadmapsPages = Math.ceil(userRoadmaps.length / itemsPerPage);

  const bookmarksLastIndex = bookmarksCurrentPage * itemsPerPage;
  const bookmarksFirstIndex = bookmarksLastIndex - itemsPerPage;
  const currentBookmarks = bookmarkedRoadmaps.slice(
    bookmarksFirstIndex,
    bookmarksLastIndex
  );
  const totalBookmarksPages = Math.ceil(
    bookmarkedRoadmaps.length / itemsPerPage
  );

  const followedLastIndex = followedCurrentPage * itemsPerPage;
  const followedFirstIndex = followedLastIndex - itemsPerPage;
  const currentFollowed = followedRoadmaps.slice(
    followedFirstIndex,
    followedLastIndex
  );
  const totalFollowedPages = Math.ceil(followedRoadmaps.length / itemsPerPage);

  const suggestionsLastIndex = suggestionsCurrentPage * itemsPerPage;
  const suggestionsFirstIndex = suggestionsLastIndex - itemsPerPage;
  const currentSuggestions = savedSuggestions.slice(
    suggestionsFirstIndex,
    suggestionsLastIndex
  );
  const totalSuggestionsPages = Math.ceil(
    savedSuggestions.length / itemsPerPage
  );
  const aiRoadmapsLastIndex = aiRoadmapsCurrentPage * itemsPerPage;
  const aiRoadmapsFirstIndex = aiRoadmapsLastIndex - itemsPerPage;
  const currentAIRoadmaps = aiGeneratedRoadmaps.slice(
    aiRoadmapsFirstIndex,
    aiRoadmapsLastIndex
  );
  const totalAIRoadmapsPages = Math.ceil(
    aiGeneratedRoadmaps.length / itemsPerPage
  );
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
          aria-label="Previous page"
        >
          &lt;
        </button>

        <span className="pagination-info">
          {totalPages > 0
            ? `Page ${currentPage} of ${totalPages}`
            : "No pages available"}
        </span>

        <button
          className="pagination-button"
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages || totalPages === 0}
          aria-label="Next page"
        >
          &gt;
        </button>
      </div>
    );
  };

  const fetchUserRoadmaps = async () => {
    try {
      const response = await axios.get(`${BACKEND_URL}/api/roadmaps/user`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.data.success) {
        const roadmapsWithRatings = await Promise.all(
          response.data.roadmaps.map(async (roadmap) => {
            const roadmapWithData = { ...roadmap };

            if (!roadmap.isPrivate) {
              try {
                // Fetch ratings
                const ratingResponse = await axios.get(
                  `${BACKEND_URL}/api/roadmaps/${roadmap._id}/rating`,
                  {
                    headers: {
                      Authorization: `Bearer ${token}`,
                    },
                  }
                );

                roadmapWithData.ratingStats = {
                  averageRating: ratingResponse.data.averageRating,
                  ratingCount: ratingResponse.data.ratingCount,
                };

                // Fetch followers count
                const followersResponse = await axios.get(
                  `${BACKEND_URL}/api/roadmaps/${roadmap._id}/followers-count`,
                  {
                    headers: {
                      Authorization: `Bearer ${token}`,
                    },
                  }
                );

                if (followersResponse.data.success) {
                  // Store followers count in the state
                  setFollowersCount((prevState) => ({
                    ...prevState,
                    [roadmap._id]: followersResponse.data.followersCount,
                  }));
                }
              } catch (error) {
                console.error(
                  `Error fetching data for roadmap ${roadmap._id}:`,
                  error
                );
              }
            }
            return roadmapWithData;
          })
        );
        setUserRoadmaps(roadmapsWithRatings);
      }
    } catch (error) {
      console.error("Error fetching user roadmaps:", error);
    } finally {
      setLoading(false);
    }
  };

  const fetchBookmarkedRoadmaps = async () => {
    try {
      const response = await axios.get(
        `${BACKEND_URL}/api/bookmark/bookmarks`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const bookmarks = Array.isArray(response.data)
        ? response.data.map((id) => ({ id }))
        : response.data;

      setBookmarkedRoadmaps(bookmarks);
    } catch (error) {
      console.error("Error fetching bookmarked roadmaps:", error);
    }
  };

  const fetchFollowedRoadmaps = async () => {
    try {
      const response = await axios.get(
        `${BACKEND_URL}/api/roadmaps/user/followed-roadmaps`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (response.data.success) {
        // Fetch detailed information for each followed roadmap
        const followedRoadmapsDetails = await Promise.all(
          response.data.followedRoadmaps.map(async (roadmapId) => {
            try {
              const roadmapResponse = await axios.get(
                `${BACKEND_URL}/api/roadmaps/public/${roadmapId}`,
                {
                  headers: {
                    Authorization: `Bearer ${token}`,
                  },
                }
              );

              if (roadmapResponse.data.success) {
                return roadmapResponse.data.roadmap;
              }
              return null;
            } catch (error) {
              console.error(`Error fetching roadmap ${roadmapId}:`, error);
              return null;
            }
          })
        );

        // Filter out any null values (roadmaps that couldn't be fetched)
        const validRoadmaps = followedRoadmapsDetails.filter(
          (roadmap) => roadmap !== null
        );
        setFollowedRoadmaps(validRoadmaps);
      }
    } catch (error) {
      console.error("Error fetching followed roadmaps:", error);
    }
  };

  const unfollowRoadmap = async (roadmapId) => {
    try {
      const response = await axios.post(
        `${BACKEND_URL}/api/roadmaps/${roadmapId}/follow`,
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (response.data.success && !response.data.following) {
        // If successfully unfollowed, remove from the followed roadmaps list
        setFollowedRoadmaps(
          followedRoadmaps.filter((roadmap) => roadmap._id !== roadmapId)
        );
      }
    } catch (error) {
      console.error("Error unfollowing roadmap:", error);
    }
  };

  const deleteRoadmap = async (roadmapId) => {
    if (window.confirm("Are you sure you want to delete this roadmap?")) {
      try {
        const response = await axios.delete(
          `${BACKEND_URL}/api/roadmaps/${roadmapId}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        if (response.data.success) {
          setUserRoadmaps(
            userRoadmaps.filter((roadmap) => roadmap._id !== roadmapId)
          );
        }
      } catch (error) {
        console.error("Error deleting roadmap:", error);
      }
    }
  };

  const toggleRoadmapVisibility = async (roadmapId, currentVisibility) => {
    try {
      const response = await axios.put(
        `${BACKEND_URL}/api/roadmaps/${roadmapId}/visibility`,
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (response.data.success) {
        setUserRoadmaps(
          userRoadmaps.map((roadmap) => {
            if (roadmap._id === roadmapId) {
              return { ...roadmap, isPrivate: response.data.isPrivate };
            }
            return roadmap;
          })
        );
      }
    } catch (error) {
      console.error("Error toggling roadmap visibility:", error);
    }
  };
  const fetchSavedSuggestions = async () => {
    try {
      const response = await axios.get(
        `${BACKEND_URL}/api/suggestions/saved-suggestions`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (response.data && response.data.savedSuggestions) {
        setSavedSuggestions(response.data.savedSuggestions);
      }
    } catch (error) {
      console.error("Error fetching saved AI suggestions:", error);
    }
  };
  const deleteAISuggestion = async (suggestionId) => {
    if (!window.confirm("Are you sure you want to delete this suggestion?"))
      return;

    try {
      await axios.delete(
        `${BACKEND_URL}/api/suggestions/ai-suggestions/${suggestionId}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      // Remove the deleted suggestion from state
      setSavedSuggestions(
        savedSuggestions.filter((suggestion) => suggestion._id !== suggestionId)
      );
    } catch (error) {
      console.error("Error deleting AI suggestion:", error);
    }
  };
  const fetchAIGeneratedRoadmaps = async () => {
    try {
      const response = await axios.get(
        `${BACKEND_URL}/api/ai/generated-roadmaps`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setAIGeneratedRoadmaps(response.data.aiGeneratedRoadmaps);
    } catch (error) {
      console.error("Error fetching AI-generated roadmaps:", error);
    }
  };
  const deleteAIGeneratedRoadmap = async (id) => {
    if (!window.confirm("Are you sure you want to delete this roadmap?"))
      return;

    try {
      await axios.delete(`${BACKEND_URL}/api/ai/generated-roadmaps/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });

      setAIGeneratedRoadmaps(
        aiGeneratedRoadmaps.filter((roadmap) => roadmap._id !== id)
      );
    } catch (error) {
      console.error("Error deleting roadmap:", error);
    }
  };
  const findTechFieldTitle = (id) => {
    const cleanId = id.startsWith("/") ? id.substring(1) : id;
    const field = [...techFields, ...techSkills].find(
      (item) =>
        item.link === `/${cleanId}` ||
        item.link === cleanId ||
        item.link.substring(1) === cleanId
    );
    return field ? field.title : cleanId;
  };

  if (loading) {
    return (
      <div className="profile-page">
        <Navbar />
        <Loader loading={loading} />
        <Footer />
      </div>
    );
  }
  if (!isAuthenticated) {
    return (
      <div className="profile-page">
        <Navbar />

        <div className="profile-auth-required">
          <h2>Authentication Required</h2>
          <p>You need to log in to view your profile.</p>
        </div>
        <Footer />
      </div>
    );
  }
  return (
    <div className="profile-page">
      <Navbar />
      <div className="profile-container">
        <div className="profile-layout">
          {/* Sidebar */}
          <div className="profile-sidebar">
            <button
              className={`sidebar-item ${
                activeSection === "profile" ? "active" : ""
              }`}
              onClick={() => setActiveSection("profile")}
            >
              Profile
            </button>
            <button
              className={`sidebar-item ${
                activeSection === "roadmaps" ? "active" : ""
              }`}
              onClick={() => setActiveSection("roadmaps")}
            >
              My Roadmaps
            </button>
            <button
              className={`sidebar-item ${
                activeSection === "bookmarked" ? "active" : ""
              }`}
              onClick={() => setActiveSection("bookmarked")}
            >
              Bookmarked
            </button>
            <button
              className={`sidebar-item ${
                activeSection === "followed" ? "active" : ""
              }`}
              onClick={() => setActiveSection("followed")}
            >
              Followed Roadmaps
            </button>
            <button
              className={`sidebar-item ${
                activeSection === "aisuggestions" ? "active" : ""
              }`}
              onClick={() => {
                setActiveSection("aisuggestions");
              }}
            >
              AI Suggestions
            </button>
            <button
              className={`sidebar-item ${
                activeSection === "airoadmaps" ? "active" : ""
              }`}
              onClick={() => setActiveSection("airoadmaps")}
            >
              AI Generated Roadmaps
            </button>
          </div>

          {/* Main Content */}
          <div className="profile-main-content">
            {activeSection === "profile" && (
              <div className="profile-header-section">
                <h1 className="profile-title">My Profile</h1>
                <div className="profile-user-info">
                  <p className="profile-user-detail">
                    <strong>Username:</strong> {user?.username}
                  </p>
                  <p className="profile-user-detail">
                    <strong>Email:</strong> {user?.email}
                  </p>
                </div>
              </div>
            )}

            {activeSection === "roadmaps" && (
              <div className="profile-roadmaps-section">
                <div className="roadmaps-header">
                  <h2 className="roadmaps-title">My Roadmaps</h2>
                  <Link to="/create-roadmap" className="roadmap-create-btn">
                    Create New Roadmap
                  </Link>
                </div>
                {userRoadmaps.length === 0 ? (
                  <div className="roadmaps-empty-state">
                    <p className="empty-state-message">
                      You haven't created any roadmaps yet.
                    </p>
                    <Link
                      to="/create-roadmap"
                      className="empty-state-action-btn"
                    >
                      Create Your First Roadmap
                    </Link>
                  </div>
                ) : (
                  <>
                    <div className="roadmaps-list-container">
                      {currentRoadmaps.map((roadmap) => (
                        <div key={roadmap._id} className="roadmap-list-item">
                          <div className="roadmap-list-content">
                            <h3 className="roadmap-item-title">
                              {roadmap.title}
                            </h3>
                            <p className="roadmap-item-description">
                              {roadmap.description}
                            </p>
                            <div className="roadmap-item-metadata">
                              <span className="roadmap-update-date">
                                Last updated:{" "}
                                {new Date(
                                  roadmap.lastUpdated
                                ).toLocaleDateString()}
                              </span>
                              <span
                                className={`visibility-status ${
                                  roadmap.isPrivate
                                    ? "status-private"
                                    : "status-public"
                                }`}
                              >
                                {roadmap.isPrivate ? "Private" : "Public"}
                              </span>
                            </div>

                            {/* Stats Container */}
                            <div className="roadmap-stats-container">
                              {/* Rating Display */}
                              {!roadmap.isPrivate && roadmap.ratingStats && (
                                <div className="rating-container">
                                  {roadmap.ratingStats.ratingCount > 0 ? (
                                    <>
                                      <StarRating
                                        value={
                                          roadmap.ratingStats.averageRating
                                        }
                                      />
                                      <span className="rating-count">
                                        {roadmap.ratingStats.averageRating.toFixed(
                                          1
                                        )}{" "}
                                        ({roadmap.ratingStats.ratingCount}{" "}
                                        {roadmap.ratingStats.ratingCount === 1
                                          ? "rating"
                                          : "ratings"}
                                        )
                                      </span>
                                    </>
                                  ) : (
                                    <span className="no-ratings">
                                      No ratings yet
                                    </span>
                                  )}
                                </div>
                              )}

                              {/* Followers Count Display */}
                              {!roadmap.isPrivate && (
                                <div className="followers-container">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 640 512"
                                    className="followers-icon"
                                  >
                                    <path d="M96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM0 482.3C0 383.8 79.8 304 178.3 304h91.4C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7H29.7C13.3 512 0 498.7 0 482.3zM609.3 512H471.4c5.4-9.4 8.6-20.3 8.6-32v-8c0-60.7-27.1-115.2-69.8-151.8c2.4-.1 4.7-.2 7.1-.2h61.4C567.8 320 640 392.2 640 481.3c0 17-13.8 30.7-30.7 30.7zM432 256c-31 0-59-12.6-79.3-32.9C372.4 196.5 384 163.6 384 128c0-26.8-6.6-52.1-18.3-74.3C384.3 40.1 407.2 32 432 32c61.9 0 112 50.1 112 112s-50.1 112-112 112z" />
                                  </svg>
                                  <span className="followers-count-number">
                                    {followersCount[roadmap._id] || 0}
                                  </span>
                                </div>
                              )}
                            </div>
                          </div>

                          <div className="roadmap-list-actions">
                            <div className="dropdown">
                              <button className="dropdown-toggle">⋮</button>
                              <div className="dropdown-menu">
                                <Link
                                  to={`/view-roadmap/${roadmap._id}`}
                                  className="dropdown-item"
                                >
                                  View
                                </Link>
                                <Link
                                  to={`/roadmap/edit/${roadmap._id}`}
                                  className="dropdown-item"
                                >
                                  Edit
                                </Link>
                                <button
                                  className="dropdown-item toggle-visibility"
                                  onClick={() =>
                                    toggleRoadmapVisibility(
                                      roadmap._id,
                                      roadmap.isPrivate
                                    )
                                  }
                                >
                                  Make{" "}
                                  {roadmap.isPrivate ? "Public" : "Private"}
                                </button>
                                <button
                                  className="dropdown-item delete-option"
                                  onClick={() => deleteRoadmap(roadmap._id)}
                                >
                                  Delete
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Pagination for roadmaps */}
                    {totalRoadmapsPages > 1 && (
                      <Pagination
                        currentPage={roadmapsCurrentPage}
                        totalPages={totalRoadmapsPages}
                        setCurrentPage={setRoadmapsCurrentPage}
                      />
                    )}
                  </>
                )}
              </div>
            )}

            {activeSection === "bookmarked" && (
              <div className="profile-bookmarks-section">
                <h2 className="bookmarks-title">Bookmarked Roadmaps</h2>
                {bookmarkedRoadmaps.length === 0 ? (
                  <div className="bookmarks-empty-state">
                    <p className="empty-state-message">
                      You haven't bookmarked any roadmaps yet.
                    </p>
                    <Link to="/explore" className="empty-state-explore-btn">
                      Explore Roadmaps
                    </Link>
                  </div>
                ) : (
                  <>
                    <div className="bookmarks-list-container">
                      {currentBookmarks.map((bookmark) => {
                        const bookmarkId =
                          typeof bookmark === "string" ? bookmark : bookmark.id;
                        const title = findTechFieldTitle(bookmarkId);

                        return (
                          <div key={bookmarkId} className="bookmark-list-item">
                            <div className="bookmark-content">
                              <h3 className="bookmark-item-title">{title}</h3>
                              <a
                                href={`/${bookmarkId}`}
                                className="bookmark-view-link"
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                View Roadmap
                              </a>
                            </div>
                          </div>
                        );
                      })}
                    </div>

                    {/* Pagination for bookmarks */}
                    {totalBookmarksPages > 1 && (
                      <Pagination
                        currentPage={bookmarksCurrentPage}
                        totalPages={totalBookmarksPages}
                        setCurrentPage={setBookmarksCurrentPage}
                      />
                    )}
                  </>
                )}
              </div>
            )}

            {/* New Followed Roadmaps Section */}
            {activeSection === "followed" && (
              <div className="profile-followed-section">
                <h2 className="followed-title">Followed Roadmaps</h2>
                {followedRoadmaps.length === 0 ? (
                  <div className="followed-empty-state">
                    <p className="empty-state-message">
                      You haven't followed any roadmaps yet.
                    </p>
                    <Link
                      to="/shared-roadmaps"
                      className="empty-state-explore-btn"
                    >
                      Explore Shared Roadmaps
                    </Link>
                  </div>
                ) : (
                  <>
                    <div className="followed-list-container">
                      {currentFollowed.map((roadmap) => (
                        <div key={roadmap._id} className="followed-list-item">
                          <div className="followed-list-content">
                            <h3 className="followed-item-title">
                              {roadmap.title}
                            </h3>
                            <p className="followed-item-description">
                              {roadmap.description}
                            </p>
                            <div className="followed-item-metadata">
                              <span className="followed-author">
                                Created by:{" "}
                                {roadmap.createdBy?.username || "Unknown"}
                              </span>
                              <span className="followed-update-date">
                                Last updated:{" "}
                                {new Date(
                                  roadmap.lastUpdated
                                ).toLocaleDateString()}
                              </span>
                            </div>

                            {/* Rating Display for followed roadmaps */}
                            {roadmap.ratingStats && (
                              <div className="rating-container">
                                {roadmap.ratingStats.ratingCount > 0 ? (
                                  <>
                                    <StarRating
                                      value={roadmap.ratingStats.averageRating}
                                    />
                                    <span className="rating-count">
                                      {roadmap.ratingStats.averageRating.toFixed(
                                        1
                                      )}{" "}
                                      ({roadmap.ratingStats.ratingCount}{" "}
                                      {roadmap.ratingStats.ratingCount === 1
                                        ? "rating"
                                        : "ratings"}
                                      )
                                    </span>
                                  </>
                                ) : (
                                  <span className="no-ratings">
                                    No ratings yet
                                  </span>
                                )}
                              </div>
                            )}
                          </div>

                          <div className="followed-list-actions">
                            <div className="followed-action-buttons">
                              <Link
                                to={`/public-roadmap/${roadmap._id}`}
                                className="view-followed-btn"
                              >
                                View
                              </Link>
                              <button
                                className="unfollow-btn"
                                onClick={() => unfollowRoadmap(roadmap._id)}
                              >
                                Unfollow
                              </button>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Pagination for followed roadmaps */}
                    {totalFollowedPages > 1 && (
                      <Pagination
                        currentPage={followedCurrentPage}
                        totalPages={totalFollowedPages}
                        setCurrentPage={setFollowedCurrentPage}
                      />
                    )}
                  </>
                )}
              </div>
            )}
            {activeSection === "aisuggestions" && (
              <div className="profile-suggestions-section">
                <div className="suggestions-header">
                  <h2 className="suggestions-title">
                    Generated AI Suggestions
                  </h2>
                  <Link to="/ai-suggestion" className="create-suggestion-btn">
                    Get New Suggestion
                  </Link>
                </div>

                {savedSuggestions.length === 0 ? (
                  <div className="suggestions-empty-state">
                    <p className="empty-state-message">
                      You haven't generated any AI suggestions yet.
                    </p>
                    <Link
                      to="/ai-suggestion"
                      className="empty-state-action-btn"
                    >
                      Generate Your First Suggestion
                    </Link>
                  </div>
                ) : (
                  <>
                    <div className="suggestions-list-container">
                      {currentSuggestions.map((suggestion, index) => (
                        <div key={index} className="suggestion-list-item">
                          <div className="suggestion-list-content">
                            <h3 className="suggestion-item-title">
                              {suggestion.answers.careerGoals}
                            </h3>
                            <p className="suggestion-item-details">
                              Experience: {suggestion.answers.experience}
                            </p>
                            <p className="suggestion-item-details">
                              Preference: {suggestion.answers.preference}
                            </p>
                            <div className="suggestion-item-metadata">
                              <span className="suggestion-date">
                                Created:{" "}
                                {new Date(
                                  suggestion.createdAt
                                ).toLocaleDateString()}
                              </span>
                            </div>
                          </div>
                          <div className="suggestion-list-actions">
                            <button
                              className="view-suggestion-btn"
                              onClick={() =>
                                navigate(`/suggestion/${suggestion._id}`)
                              }
                            >
                              View
                            </button>
                            <button
                              className="delete-button"
                              onClick={() => deleteAISuggestion(suggestion._id)}
                            >
                              Delete
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Pagination for suggestions */}
                    {totalSuggestionsPages > 1 && (
                      <Pagination
                        currentPage={suggestionsCurrentPage}
                        totalPages={totalSuggestionsPages}
                        setCurrentPage={setSuggestionsCurrentPage}
                      />
                    )}
                  </>
                )}
              </div>
            )}
            {activeSection === "airoadmaps" && (
              <div className="profile-airoadmaps-section">
                <div className="airoadmaps-header">
                  <h2 className="airoadmaps-title">AI Generated Roadmaps</h2>
                  <Link to="/generate-roadmap" className="airoadmap-create-btn">
                    Generate New Roadmap
                  </Link>
                </div>
                {aiGeneratedRoadmaps.length === 0 ? (
                  <div className="airoadmaps-empty-state">
                    <p className="empty-state-message">
                      You haven't generated any AI roadmaps yet.
                    </p>
                    <Link
                      to="/generate-roadmap"
                      className="empty-state-action-btn"
                    >
                      Generate Your First Roadmap
                    </Link>
                  </div>
                ) : (
                  <>
                    <div className="airoadmaps-list-container">
                      {currentAIRoadmaps.map((roadmap) => (
                        <div key={roadmap._id} className="airoadmap-list-item">
                          <div className="airoadmap-list-content">
                            <h3 className="airoadmap-item-title">
                              {roadmap.title}
                            </h3>
                            <div className="airoadmap-item-metadata">
                              <span className="airoadmap-date">
                                Created:{" "}
                                {new Date(
                                  roadmap.createdAt
                                ).toLocaleDateString()}
                              </span>
                            </div>
                          </div>
                          <div className="airoadmap-list-actions">
                            <Link
                              to={`/ai-roadmap/view/${roadmap._id}`}
                              className="view-airoadmap-btn"
                            >
                              View
                            </Link>
                            <button
                              className="delete-button"
                              onClick={() =>
                                deleteAIGeneratedRoadmap(roadmap._id)
                              }
                            >
                              Delete
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>

                    {totalAIRoadmapsPages > 1 && (
                      <Pagination
                        currentPage={aiRoadmapsCurrentPage}
                        totalPages={totalAIRoadmapsPages}
                        setCurrentPage={setAIRoadmapsCurrentPage}
                      />
                    )}
                  </>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Profile;
