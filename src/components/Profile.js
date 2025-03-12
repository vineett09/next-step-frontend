import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import axios from "axios";
import Navbar from "./Navbar";
import Footer from "./Footer";
import "../styles/Profile.css";
import { techFields, techSkills } from "../data/TechFieldsData"; // Import the tech fields data

const Profile = () => {
  const { user, token } = useSelector((state) => state.auth);
  const [userRoadmaps, setUserRoadmaps] = useState([]);
  const [bookmarkedRoadmaps, setBookmarkedRoadmaps] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeSection, setActiveSection] = useState("profile"); // State to track active section

  useEffect(() => {
    if (token && user) {
      fetchUserRoadmaps();
      fetchBookmarkedRoadmaps();
    }
  }, [token, user]);

  const fetchUserRoadmaps = async () => {
    try {
      const response = await axios.get("/api/roadmaps/user", {
        headers: {
          "x-auth-token": token,
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.data.success) {
        setUserRoadmaps(response.data.roadmaps);
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

      // If response.data is just an array of IDs, convert to objects
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

  // Helper function to find tech field title from ID
  const findTechFieldTitle = (id) => {
    // Remove leading slash if present
    const cleanId = id.startsWith("/") ? id.substring(1) : id;

    // Check in both techFields and techSkills arrays
    const field = [...techFields, ...techSkills].find(
      (item) =>
        item.link === `/${cleanId}` ||
        item.link === cleanId ||
        item.link.substring(1) === cleanId
    );

    return field ? field.title : cleanId;
  };

  if (loading) {
    return <div className="profile-loading">Loading profile data...</div>;
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
                  <div className="roadmaps-list-container">
                    {userRoadmaps.map((roadmap) => (
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
                                Make {roadmap.isPrivate ? "Public" : "Private"}
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
                  <div className="bookmarks-list-container">
                    {bookmarkedRoadmaps.map((bookmark) => {
                      // Get bookmark ID based on data structure
                      const bookmarkId =
                        typeof bookmark === "string" ? bookmark : bookmark.id;
                      // Find the title from tech fields data
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
