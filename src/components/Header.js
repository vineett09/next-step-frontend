import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Header.css";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import AuthModal from "./AuthModal";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";

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

      // Get PDF dimensions
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = pdf.internal.pageSize.getHeight();

      // Calculate scaling to fit the entire tree on one page
      const widthRatio = pdfWidth / canvas.width;
      const heightRatio = pdfHeight / canvas.height;
      const ratio = Math.min(widthRatio, heightRatio) * 0.95; // 95% of available space for margins

      // Calculate centered position
      const xPos = (pdfWidth - canvas.width * ratio) / 2;
      const yPos = (pdfHeight - canvas.height * ratio) / 2;

      // Add image to PDF scaled to fit
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
      <section className="roadmap-header">
        <div className="header-top-row">
          <Link to="/" className="back-button">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
              <path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z" />
            </svg>
            <span className="back-text">Go Home</span>
          </Link>

          <div className="action-buttons">
            <button
              onClick={toggleBookmark}
              className={`bookmark-button ${isBookmarked ? "bookmarked" : ""}`}
              aria-label={
                isBookmarked ? "Unbookmark roadmap" : "Bookmark roadmap"
              }
              title={isBookmarked ? "Unbookmark roadmap" : "Bookmark roadmap"}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="24"
                height="24"
                fill={isBookmarked ? "#000" : "#fff"}
              >
                <path d="M17 3H7c-1.1 0-2 .9-2 2v16l7-3 7 3V5c0-1.1-.9-2-2-2zm0 15l-5-2.18L7 18V5h10v13z" />
              </svg>
              <span className="button-text">Bookmark</span>
            </button>

            <button
              className="download-pdf"
              onClick={handleDownloadPDF}
              aria-label="Download roadmap as PDF"
              title="Download roadmap as PDF"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="24"
                height="24"
                fill="#fff"
              >
                <path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z" />
              </svg>
              <span className="button-text">PDF</span>
            </button>

            <button
              className="generate-roadmap"
              aria-label="Generate AI Roadmap"
              onClick={handleGenerateRoadmapClick}
              title="Generate AI Roadmap"
            >
              <span>Generate AI Roadmap</span>
              <span className="sparkle">✨</span>
            </button>
          </div>
        </div>

        <div className="roadmap-content">
          <h1>
            {`A comprehensive roadmap to achieve ${title} field in 2025.` ||
              "Explore Your Path to Tech Excellence"}
          </h1>

          <div className="progress-wrapper">
            <span className="progress-text">
              {completedNodesCount} / {totalNodes} Completed (
              {progressPercentage}%)
            </span>
          </div>
        </div>
      </section>

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
