import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import AuthModal from "./AuthModal";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import "../styles/Header.css";
// Custom SVG Icons
const ArrowLeftIcon = ({ size = 20 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="m12 19-7-7 7-7" />
    <path d="M19 12H5" />
  </svg>
);

const BookmarkIcon = ({ size = 18, filled = false }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill={filled ? "currentColor" : "none"}
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z" />
  </svg>
);

const DownloadIcon = ({ size = 18 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
    <polyline points="7,10 12,15 17,10" />
    <line x1="12" y1="15" x2="12" y2="3" />
  </svg>
);

const SparkleIcon = () => <span style={{ fontSize: "16px" }}>✨</span>;

const Header = ({
  title,
  toggleBookmark,
  isBookmarked,
  completedNodes = {},
  totalNodes = 0,
  roadmapId,
}) => {
  const navigate = useNavigate();
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const user = useSelector((state) => state.auth.user);

  const completedNodesCount = Object.keys(completedNodes).length;
  const progressPercentage =
    totalNodes > 0 ? Math.round((completedNodesCount / totalNodes) * 100) : 0;

  const handleDownloadPDF = () => {
    const d3Container = document.querySelector(".d3-container");
    if (!d3Container) {
      alert("Roadmap not found!");
      return;
    }

    const containerClone = d3Container.cloneNode(true);

    const tempDiv = document.createElement("div");
    tempDiv.style.position = "absolute";
    tempDiv.style.left = "-9999px";
    tempDiv.style.backgroundColor = "#0d1117";
    tempDiv.style.width = d3Container.scrollWidth + "px";
    tempDiv.style.height = d3Container.scrollHeight + "px";
    tempDiv.style.padding = "20px";

    tempDiv.appendChild(containerClone);
    document.body.appendChild(tempDiv);

    const html2canvasOptions = {
      scale: 1.5,
      height: tempDiv.scrollHeight,
      width: tempDiv.scrollWidth,
      backgroundColor: "#0d1117",
      logging: false,
      imageTimeout: 0,
      useCORS: true,
      allowTaint: true,
    };

    html2canvas(tempDiv, html2canvasOptions).then((canvas) => {
      const imgData = canvas.toDataURL("image/jpeg", 0.9);

      const pdf = new jsPDF({
        orientation: "landscape",
        unit: "mm",
        format: "a4",
        compress: true,
      });

      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = pdf.internal.pageSize.getHeight();

      const widthRatio = pdfWidth / canvas.width;
      const heightRatio = pdfHeight / canvas.height;
      const ratio = Math.min(widthRatio, heightRatio) * 0.95;

      const xPos = (pdfWidth - canvas.width * ratio) / 2;
      const yPos = (pdfHeight - canvas.height * ratio) / 2;

      pdf.addImage(
        imgData,
        "JPEG",
        xPos,
        yPos,
        canvas.width * ratio,
        canvas.height * ratio
      );

      pdf.save("roadmap.pdf");
      document.body.removeChild(tempDiv);
    });
  };

  const handleGenerateRoadmapClick = () => {
    if (!user) {
      setIsAuthModalOpen(true);
    } else {
      navigate("/generate-roadmap");
    }
  };

  return (
    <div>
      <div className="roadmap-main-container">
        {/* Back button */}
        <Link to="/explore" className="roadmap-nav-back-container">
          <ArrowLeftIcon size={20} />
          <span>Explore All</span>
        </Link>

        {/* Action buttons */}
        <div className="roadmap-action-controls">
          <button
            onClick={toggleBookmark}
            className={`roadmap-btn roadmap-bookmark-control ${
              isBookmarked ? "active-bookmark" : ""
            }`}
            aria-label={
              isBookmarked ? "Unbookmark roadmap" : "Bookmark roadmap"
            }
            title={isBookmarked ? "Unbookmark roadmap" : "Bookmark roadmap"}
          >
            <BookmarkIcon size={18} filled={isBookmarked} />
            <span>Bookmark</span>
          </button>

          <button
            className="roadmap-btn roadmap-download-control"
            onClick={handleDownloadPDF}
            aria-label="Download roadmap as PDF"
            title="Download roadmap as PDF"
          >
            <DownloadIcon size={18} />
            <span>PDF</span>
          </button>

          <button
            className="roadmap-btn roadmap-generate-control"
            aria-label="Generate AI Roadmap"
            onClick={handleGenerateRoadmapClick}
            title="Generate AI Roadmap"
          >
            <span>Generate AI Roadmap</span>
            <SparkleIcon />
          </button>
        </div>

        {/* Main content */}
        <div className="roadmap-content-section">
          {/* Title section */}
          <div className="roadmap-title-section">
            <h1 className="roadmap-main-title">
              {title
                ? `A comprehensive roadmap to achieve ${title} field in 2025.`
                : "Explore Your Path to Tech Excellence"}
            </h1>
            <p className="roadmap-subtitle-text">Learning Roadmap</p>
            {/* Stats section */}
            <div className="roadmap-stats-section">
              <div className="roadmap-stat-item">
                <span className="roadmap-stat-value">
                  {completedNodesCount}
                </span>
                <span className="roadmap-stat-label">Completed</span>
              </div>
              <div className="roadmap-stat-divider">•</div>
              <div className="roadmap-stat-item">
                <span className="roadmap-stat-value">{totalNodes}</span>
                <span className="roadmap-stat-label">Total</span>
              </div>
              <div className="roadmap-stat-divider">•</div>
              <div className="roadmap-stat-item">
                <span className="roadmap-stat-value">
                  {progressPercentage}%
                </span>
                <span className="roadmap-stat-label">Progress</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {!user && (
        <AuthModal
          isOpen={isAuthModalOpen}
          onClose={() => setIsAuthModalOpen(false)}
        />
      )}
    </div>
  );
};

export default Header;
