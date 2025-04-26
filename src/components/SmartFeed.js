import React, { useState } from "react";
import "../styles/SmartFeed.css";
import placeholderImage from "../assets/noimagefound.jpg";
import SmartFeedSkeleton from "./SmartFeedSkeleton";

const SmartFeed = ({ articles = [], onLoadMore, loading, hasMoreContent }) => {
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
