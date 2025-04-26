import React from "react";
import "../styles/SmartFeed.css";
const SmartFeedSkeleton = () => {
  return (
    <li className="weekly-digest-item skeleton-item">
      <div className="digest-image-wrapper skeleton-image"></div>
      <div className="digest-content">
        <div className="skeleton-title"></div>
        <div className="skeleton-description"></div>
        <div className="digest-details">
          <div className="digest-details-primary">
            <div className="skeleton-meta"></div>
            <div className="skeleton-author"></div>
          </div>
          <div className="skeleton-tag"></div>
        </div>
      </div>
    </li>
  );
};

export default SmartFeedSkeleton;
