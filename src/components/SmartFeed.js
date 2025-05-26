import React, { useState } from "react";
import "../styles/SmartFeed.css";
import placeholderImage from "../assets/noimagefound.jpg";
import SmartFeedSkeleton from "./SmartFeedSkeleton";

const SmartFeed = ({
  articles = [],
  onLoadMore,
  loading,
  hasMoreContent,
  onRefresh,
  isDataFromCache = false,
}) => {
  const [filter, setFilter] = useState("all");
  const [sortOrder, setSortOrder] = useState("newest");

  // Get unique tags from all articles, even when empty (we'll use defaults)
  const uniqueTags = [
    "all",
    ...new Set(articles.map((article) => article.tag)),
  ];

  // Filter articles based on selected tag
  const filteredArticles = articles.filter((article) => {
    // Apply tag filter
    return filter === "all" || article.tag === filter;
  });

  // Sort articles based on selected sort order
  const sortedArticles = [...filteredArticles].sort((a, b) => {
    if (sortOrder === "newest") {
      return new Date(b.published_at) - new Date(a.published_at);
    } else if (sortOrder === "oldest") {
      return new Date(a.published_at) - new Date(b.published_at);
    } else if (
      sortOrder === "popularity" &&
      a.points !== undefined &&
      b.points !== undefined
    ) {
      // For sources like Hacker News that have points/upvotes
      return b.points - a.points;
    }

    return new Date(b.published_at) - new Date(a.published_at);
  });

  // Format the date for display
  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "short", day: "numeric" };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  // Handle load more button click
  const handleLoadMore = () => {
    onLoadMore(filter, sortOrder);
  };

  // Generate skeleton placeholders when loading with no articles
  const renderSkeletons = () => {
    return Array(6)
      .fill()
      .map((_, index) => <SmartFeedSkeleton key={index} />);
  };

  return (
    <div className="weekly-digest-container">
      <div className="weekly-digest-header">
        <h2 className="weekly-digest-title">📰 Smart Feed</h2>

        <div className="weekly-digest-controls">
          {isDataFromCache && (
            <div
              className="refresh-icon"
              onClick={onRefresh}
              title="Refresh Feed"
            >
              <svg
                fill="#000000"
                width="30px"
                height="30px"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g data-name="Layer 2" fill="#0077b6">
                  <g data-name="refresh" fill="#0077b6">
                    <rect
                      width="30"
                      height="30"
                      opacity="0"
                      fill="#0077b6"
                    ></rect>

                    <path
                      d="M20.3 13.43a1 1 0 0 0-1.25.65A7.14 7.14 0 0 1 12.18 19 7.1 7.1 0 0 1 5 12a7.1 7.1 0 0 1 7.18-7 7.26 7.26 0 0 1 4.65 1.67l-2.17-.36a1 1 0 0 0-1.15.83 1 1 0 0 0 .83 1.15l4.24.7h.17a1 1 0 0 0 .34-.06.33.33 0 0 0 .1-.06.78.78 0 0 0 .2-.11l.09-.11c0-.05.09-.09.13-.15s0-.1.05-.14a1.34 1.34 0 0 0 .07-.18l.75-4a1 1 0 0 0-2-.38l-.27 1.45A9.21 9.21 0 0 0 12.18 3 9.1 9.1 0 0 0 3 12a9.1 9.1 0 0 0 9.18 9A9.12 9.12 0 0 0 21 14.68a1 1 0 0 0-.7-1.25z"
                      fill="#0077b6"
                    ></path>
                  </g>
                </g>
              </svg>
            </div>
          )}
          <div className="filter-control">
            <label htmlFor="tag-filter">Topic:</label>
            <select
              id="tag-filter"
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
              className="digest-select"
              disabled={loading && articles.length === 0}
            >
              {uniqueTags.map((tag) => (
                <option key={tag} value={tag}>
                  {tag === "all"
                    ? "All Topics"
                    : tag.charAt(0).toUpperCase() + tag.slice(1)}
                </option>
              ))}
            </select>
          </div>

          <div className="sort-control">
            <label htmlFor="sort-order">Sort:</label>
            <select
              id="sort-order"
              value={sortOrder}
              onChange={(e) => setSortOrder(e.target.value)}
              className="digest-select"
              disabled={loading && articles.length === 0}
            >
              <option value="newest">Newest First</option>
              <option value="oldest">Oldest First</option>
              <option value="popularity">Most Popular</option>
            </select>
          </div>
        </div>
      </div>

      {loading && articles.length === 0 ? (
        // Show skeleton placeholders when initially loading
        <ul className="weekly-digest-list">{renderSkeletons()}</ul>
      ) : sortedArticles.length === 0 ? (
        // Show message when filtered articles are empty
        <p className="no-articles-message">
          No articles found for this filter.
        </p>
      ) : (
        // Show actual articles
        <ul className="weekly-digest-list">
          {sortedArticles.map((item) => (
            <li key={item.url} className="weekly-digest-item">
              <div className="digest-image-wrapper">
                <img
                  src={item.image || placeholderImage}
                  alt={`Cover for ${item.title}`}
                  className="digest-image"
                  loading="lazy"
                  onError={(e) => {
                    e.target.src = placeholderImage;
                  }}
                />
                <div
                  className="source-badge"
                  data-source={item.source.toLowerCase().replace(/\s+/g, "-")}
                >
                  {item.source}
                </div>
              </div>
              <div className="digest-content">
                <a
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="digest-title"
                >
                  {item.title}
                </a>

                {item.description && (
                  <p className="digest-description">{item.description}</p>
                )}

                <div className="digest-details">
                  <div className="digest-details-primary">
                    <span className="weekly-digest-meta">
                      {formatDate(item.published_at)}
                      {item.readTime && ` • ${item.readTime}`}
                      {item.points !== undefined && ` • ${item.points} points`}
                    </span>
                    {item.author && (
                      <span className="article-author">By {item.author}</span>
                    )}
                  </div>
                  <span className="article-tag">{item.tag}</span>
                </div>
              </div>
            </li>
          ))}
        </ul>
      )}

      {/* Pagination controls */}
      <div className="pagination-controls">
        {hasMoreContent && (
          <button
            className="load-more-button"
            onClick={handleLoadMore}
            disabled={loading}
          >
            {loading ? "Loading..." : "Load More Articles"}
          </button>
        )}
        {!hasMoreContent && articles.length > 0 && (
          <p className="end-of-content-message">
            You've reached the end of available articles
          </p>
        )}
      </div>
    </div>
  );
};

export default SmartFeed;
