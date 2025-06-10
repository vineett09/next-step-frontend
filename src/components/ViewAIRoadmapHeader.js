import "../styles/ViewAIRoadmapHeader.css";

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

const ViewAIRoadmapHeader = ({
  onBack,
  title,
  completedNodes,
  totalNodes,
  onDownload,
}) => {
  const completionPercentage =
    totalNodes > 0 ? Math.round((completedNodes / totalNodes) * 100) : 0;

  /**
   * Handles the download functionality for the D3 tree.
   * It finds the SVG element, serializes it, and triggers a download.
   */
  const downloadSvg = () => {
    const svgElement = document.querySelector(".roadmap-svg");
    if (!svgElement) {
      console.error("SVG element with class .roadmap-svg not found.");
      return;
    }

    const clonedSvg = svgElement.cloneNode(true);
    clonedSvg.setAttribute("xmlns", "http://www.w3.org/2000/svg");
    clonedSvg.setAttribute("xmlns:xlink", "http://www.w3.org/1999/xlink");
    clonedSvg.style.backgroundColor = "#0f0f23";

    const serializer = new XMLSerializer();
    let svgString = serializer.serializeToString(clonedSvg);

    const styles = `
        .node text { font-family: 'Inter', sans-serif; fill: #e2e8f0; }
        .node rect { stroke: #475569; }
        .title-node text { fill: #1e293b; }
        .child-link, .nested-link, .parent-spine { stroke: #64748b; }
    `;
    svgString = svgString.replace("</svg>", `<style>${styles}</style></svg>`);

    const blob = new Blob([svgString], { type: "image/svg+xml;charset=utf-8" });
    const url = URL.createObjectURL(blob);

    const link = document.createElement("a");
    link.href = url;
    const safeTitle = title.replace(/[^a-z0-9]/gi, "_").toLowerCase();
    link.download = `${safeTitle}_roadmap.svg`;

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    URL.revokeObjectURL(url);

    if (onDownload) {
      onDownload();
    }
  };

  return (
    <div className="rm-container">
      {/* Back button */}
      <button onClick={onBack} className="rm-btn rm-back-btn-container">
        <ArrowLeftIcon size={20} />
        <span>Back</span>
      </button>

      {/* Download button */}
      <button
        onClick={downloadSvg}
        className="rm-btn rm-download-btn-container"
        title="Download Roadmap as SVG"
      >
        <DownloadIcon size={18} />
        <span>Download</span>
      </button>

      {/* Main content */}
      <div className="rm-content">
        {/* Title section */}
        <div className="rm-title-container">
          <h1 className="rm-title">{title}</h1>
          <p className="rm-subtitle">AI generated Learning Roadmap</p>
        </div>

        {/* Stats section */}
        <div className="rm-stats-container">
          <div className="rm-stat">
            <span className="rm-stat-value">{completedNodes}</span>
            <span className="rm-stat-label">Completed</span>
          </div>
          <div className="rm-stat-divider">•</div>
          <div className="rm-stat">
            <span className="rm-stat-value">{totalNodes}</span>
            <span className="rm-stat-label">Total</span>
          </div>
          <div className="rm-stat-divider">•</div>
          <div className="rm-stat">
            <span className="rm-stat-value">{completionPercentage}%</span>
            <span className="rm-stat-label">Progress</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewAIRoadmapHeader;
