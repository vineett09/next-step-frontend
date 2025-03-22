import React, { useState, useEffect } from "react";
import ReactFlow, { Controls, Background, MiniMap } from "reactflow";
import "reactflow/dist/style.css";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { useSelector } from "react-redux";
import Navbar from "./Navbar";
import Footer from "./Footer";
import "../styles/SharedRoadmapViewer.css";
import { nodeTypes } from "./CustomRoadmaps";
import Loader from "./Loader";
import FollowButton from "./FollowButton"; // Import the new component

const StarRating = ({
  value,
  onChange,
  interactive = false,
  size = "medium",
}) => {
  const [hoverRating, setHoverRating] = useState(0);

  const roundedValue = Math.round(value * 2) / 2;

  const handleMouseEnter = (rating) => {
    if (interactive) {
      setHoverRating(rating);
    }
  };

  const handleMouseLeave = () => {
    if (interactive) {
      setHoverRating(0);
    }
  };

  const handleClick = (rating) => {
    if (interactive && onChange) {
      onChange(rating);
    }
  };

  const displayValue = hoverRating > 0 ? hoverRating : roundedValue;

  return (
    <div
      className={`star-rating star-rating-${size} ${
        interactive ? "interactive" : ""
      }`}
    >
      {[1, 2, 3, 4, 5].map((star) => {
        const isFull = star <= displayValue;
        const isHalf = !isFull && star - 0.5 === displayValue;

        return (
          <span
            key={star}
            className={`star ${
              isFull ? "full-star" : isHalf ? "half-star" : "empty-star"
            }`}
            onMouseEnter={() => handleMouseEnter(star)}
            onMouseLeave={handleMouseLeave}
            onClick={() => handleClick(star)}
          >
            {isFull ? "★" : "☆"}
          </span>
        );
      })}
    </div>
  );
};

const RatingSection = ({ roadmapId, creatorId }) => {
  const [userRating, setUserRating] = useState(0);
  const [averageRating, setAverageRating] = useState(0);
  const [ratingCount, setRatingCount] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const { user } = useSelector((state) => state.auth);
  const isLoggedIn = !!user;
  const isCreator = user && user.id === creatorId;

  useEffect(() => {
    // Fetch ratings data for everyone - logged in, not logged in, or creator
    fetchRatingsData();

    // If user is logged in and not the creator, also fetch their personal rating
    if (isLoggedIn && !isCreator) {
      fetchUserRating();
    }
  }, [roadmapId, isLoggedIn, isCreator]);

  const fetchRatingsData = async () => {
    try {
      // Public endpoint to get average rating and count (no auth required)
      const response = await axios.get(
        `/api/roadmaps/${roadmapId}/public-rating`
      );

      if (response.data.success) {
        setAverageRating(response.data.averageRating);
        setRatingCount(response.data.ratingCount);
      }
    } catch (err) {
      console.error("Error fetching public rating data:", err);
    }
  };

  const fetchUserRating = async () => {
    try {
      const token = localStorage.getItem("token");

      const response = await axios.get(`/api/roadmaps/${roadmapId}/rating`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.data.success) {
        setUserRating(response.data.userRating || 0);
      }
    } catch (err) {
      console.error("Error fetching user rating:", err);
    }
  };

  const handleRatingChange = async (newRating) => {
    if (!isLoggedIn) {
      setError("Please log in to rate this roadmap");
      return;
    }

    if (isCreator) {
      setError("You cannot rate your own roadmap");
      return;
    }

    try {
      setIsSubmitting(true);
      setError(null);
      setSuccess(null);

      const token = localStorage.getItem("token");

      const response = await axios.post(
        `/api/roadmaps/${roadmapId}/rating`,
        { rating: newRating },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (response.data.success) {
        setUserRating(newRating);
        setAverageRating(response.data.averageRating);
        setRatingCount(response.data.ratingCount);
        setSuccess("Your rating has been submitted");
      }
    } catch (err) {
      setError(err.response?.data?.message || "Error submitting rating");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="roadmap-rating-section">
      <div className="rating-header">
        <h3>Roadmap Rating</h3>
        {averageRating > 0 && (
          <div className="average-rating">
            <StarRating value={averageRating} />
            <span>
              {averageRating.toFixed(1)} ({ratingCount}{" "}
              {ratingCount === 1 ? "rating" : "ratings"})
            </span>
          </div>
        )}
      </div>

      {!isLoggedIn ? (
        <div className="rating-login-prompt">
          <p>Please log in to rate this roadmap</p>
        </div>
      ) : isCreator ? (
        <div className="rating-creator-view">
          <p>You cannot rate your own roadmap</p>
          {averageRating > 0 ? (
            <div className="rating-details">
              <p>
                Your roadmap has been rated by {ratingCount}{" "}
                {ratingCount === 1 ? "user" : "users"}
              </p>
            </div>
          ) : (
            <p>Your roadmap has not been rated yet</p>
          )}
        </div>
      ) : (
        <div className="user-rating-container">
          <div className="user-rating-prompt">
            {userRating > 0 ? "Your rating:" : "Rate this roadmap:"}
          </div>
          <StarRating
            value={userRating}
            onChange={handleRatingChange}
            interactive={true}
            size="large"
          />
          {isSubmitting && <div className="rating-status">Submitting...</div>}
          {error && <div className="rating-error">{error}</div>}
          {success && <div className="rating-success">{success}</div>}
        </div>
      )}
    </div>
  );
};

const SharedRoadmapViewer = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [roadmap, setRoadmap] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPublicRoadmap = async () => {
      try {
        setLoading(true);
        const response = await axios.get(`/api/roadmaps/public/${id}`);

        if (response.data.success) {
          setRoadmap(response.data.roadmap);
        } else {
          setError(response.data.message || "Failed to load roadmap");
        }
      } catch (err) {
        console.error("Error fetching public roadmap:", err);
        setError("Failed to load roadmap. It might be private or not exist.");
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchPublicRoadmap();
    }
  }, [id]);

  if (loading) {
    return (
      <div className="roadmap-viewer-loading">
        <Loader loading={true} />
      </div>
    );
  }

  if (error) {
    return <div className="roadmap-viewer-error">{error}</div>;
  }

  if (!roadmap) {
    return <div className="roadmap-viewer-error">Roadmap not found</div>;
  }

  const { title, description, structure = {}, settings = {} } = roadmap;
  const { nodes = [], edges = [] } = structure || {};
  const {
    background = { variant: "dots", color: "#aaaaaa", gap: 16, size: 1 },
  } = settings;

  return (
    <div className="public-roadmap-viewer">
      <Navbar />
      <div className="viewer-container">
        <div className="viewer-header">
          <div className="header-content">
            <button className="previous-button" onClick={() => navigate(-1)}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                <path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z" />
              </svg>
              <span>Back</span>
            </button>
            <h2>{title}</h2>
            <p className="roadmap-description">{description}</p>

            <div className="roadmap-creator-info">
              <h1>Created by: {roadmap.createdBy?.username || "Unknown"}</h1>

              {/* Add the Follow Button component here */}
              <FollowButton roadmapId={id} creatorId={roadmap.createdBy?._id} />
            </div>

            {/* Rating Section */}
            <RatingSection roadmapId={id} creatorId={roadmap.createdBy?._id} />
          </div>
        </div>

        <div className="viewer-body">
          <div
            className="canvas-box"
            style={{ height: 800, width: "100%", overflow: "hidden" }}
          >
            <ReactFlow
              nodes={nodes}
              edges={edges}
              nodeTypes={nodeTypes}
              fitView
              fitViewOptions={{ padding: 0.2 }}
              defaultViewport={{ x: 0, y: 0, zoom: 1 }}
              zoomOnScroll={true}
              panOnScroll={true}
              nodesDraggable={false}
              nodesConnectable={false}
              elementsSelectable={false}
            >
              <Controls showInteractive={false} />
              <MiniMap />
              <Background
                variant={background.variant}
                color="transparent"
                gap={background.gap}
                size={background.size}
              />
            </ReactFlow>
          </div>
          <div className="roadmap-details-section"></div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default SharedRoadmapViewer;
