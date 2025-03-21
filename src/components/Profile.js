import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import axios from "axios";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Loader from "./Loader";
import "../styles/Profile.css";
import { techFields, techSkills } from "../data/TechFieldsData";

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
  const [loading, setLoading] = useState(true);
  const [activeSection, setActiveSection] = useState("profile");
  const [roadmapsCurrentPage, setRoadmapsCurrentPage] = useState(1);
  const [bookmarksCurrentPage, setBookmarksCurrentPage] = useState(1);
  const [followersCount, setFollowersCount] = useState({});
  const itemsPerPage = 3;

  useEffect(() => {
    if (token && user) {
      fetchUserRoadmaps();
      fetchBookmarkedRoadmaps();
    }
  }, [token, user]);

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

  const fetchUserRoadmaps = async () => {
    try {
      const response = await axios.get("/api/roadmaps/user", {
        headers: {
          "x-auth-token": token,
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
                  `/api/roadmaps/${roadmap._id}/rating`,
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
                  `/api/roadmaps/${roadmap._id}/followers-count`,
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
      const response = await axios.get("/api/bookmark/bookmarks", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log("Bookmarked roadmaps:", response.data);

      const bookmarks = Array.isArray(response.data)
        ? response.data.map((id) => ({ id }))
        : response.data;

      setBookmarkedRoadmaps(bookmarks);
    } catch (error) {
      console.error("Error fetching bookmarked roadmaps:", error);
    }
  };

  const deleteRoadmap = async (roadmapId) => {
    if (window.confirm("Are you sure you want to delete this roadmap?")) {
      try {
        const response = await axios.delete(`/api/roadmaps/${roadmapId}`, {
          headers: {
            "x-auth-token": token,
            Authorization: `Bearer ${token}`,
          },
        });

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
        `/api/roadmaps/${roadmapId}/visibility`,
        {},
        {
          headers: {
            "x-auth-token": token,
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
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Profile;
