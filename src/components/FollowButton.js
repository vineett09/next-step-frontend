import React, { useState, useEffect } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;

const FollowButton = ({ roadmapId, creatorId }) => {
  const [following, setFollowing] = useState(false);
  const [followersCount, setFollowersCount] = useState(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const { user } = useSelector((state) => state.auth);
  const isLoggedIn = !!user;
  const isCreator = user && user.id === creatorId;

  // Fetch followers count for all users (logged in or not)
  useEffect(() => {
    fetchFollowersCount();
  }, [roadmapId]);

  // Fetch follow status only for logged-in users
  useEffect(() => {
    if (isLoggedIn) {
      fetchFollowStatus();
    }
  }, [roadmapId, isLoggedIn]);

  const fetchFollowersCount = async () => {
    try {
      const response = await axios.get(
        `${BACKEND_URL}/api/roadmaps/${roadmapId}/followers-count`
      );

      if (response.data.success) {
        setFollowersCount(response.data.followersCount);
      }
    } catch (err) {
      console.error("Error fetching followers count:", err);
      // Don't set error here to avoid displaying error to non-logged-in users
    }
  };

  const fetchFollowStatus = async () => {
    try {
      setLoading(true);
      const token = localStorage.getItem("token");

      const response = await axios.get(
        `${BACKEND_URL}/api/roadmaps/${roadmapId}/follow-status`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (response.data.success) {
        setFollowing(response.data.following);
        // We can also update followers count from here for logged-in users
        setFollowersCount(response.data.followersCount);
      }
    } catch (err) {
      console.error("Error fetching follow status:", err);
      setError("Failed to load follow status");
    } finally {
      setLoading(false);
    }
  };

  const handleFollowToggle = async () => {
    if (!isLoggedIn) {
      setError("Please log in to follow this roadmap");
      return;
    }

    if (isCreator) {
      setError("You cannot follow your own roadmap");
      return;
    }

    try {
      setLoading(true);
      setError(null);

      const token = localStorage.getItem("token");

      const response = await axios.post(
        `${BACKEND_URL}/api/roadmaps/${roadmapId}/follow`,
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (response.data.success) {
        setFollowing(response.data.following);
        setFollowersCount(response.data.followersCount);
      }
    } catch (err) {
      console.error("Error toggling follow status:", err);
      setError(err.response?.data?.message || "Failed to update follow status");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="roadmap-follow-section">
      <div className="followers-count">
        <span>{followersCount}</span>{" "}
        {followersCount === 1 ? "follower" : "followers"}
      </div>

      {!isLoggedIn ? (
        <div className="follow-login-prompt">Login to follow this roadmap</div>
      ) : isCreator ? (
        <div className="follow-creator-note">
          You cannot follow your own roadmap
        </div>
      ) : (
        <button
          className={`follow-button ${following ? "following" : ""}`}
          onClick={handleFollowToggle}
          disabled={loading}
        >
          {loading ? "Processing..." : following ? "Unfollow" : "Follow"}
        </button>
      )}

      {error && <div className="follow-error">{error}</div>}
    </div>
  );
};

export default FollowButton;
