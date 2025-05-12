import React, { useState, useEffect, useRef } from "react";
import * as d3 from "d3";
import axios from "axios";
import "../styles/CareerTracker.css";
import Navbar from "./Navbar";
import Footer from "./Footer";
import ScrollToTop from "./ScrollToTop";
import { useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;

const ViewCareerTracker = () => {
  const [careerPath, setCareerPath] = useState(null);
  const [inputs, setInputs] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const svgRef = useRef(null);
  const navigate = useNavigate();
  const { id } = useParams();
  const { token } = useSelector((state) => state.auth);
  const isAuthenticated = !!token;

  useEffect(() => {
    if (!isAuthenticated) {
      setError("You must be logged in to view this career path");
      setLoading(false);
      return;
    }

    const fetchCareerPath = async () => {
      try {
        const response = await axios.get(
          `${BACKEND_URL}/api/career-track/${id}`,
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setCareerPath(response.data.careerPath.careerPath);
        setInputs(response.data.careerPath.inputs);
        setLoading(false);
      } catch (err) {
        console.error("API Error:", err);
        setError(err.response?.data?.error || "Failed to fetch career path");
        setLoading(false);
      }
    };

    fetchCareerPath();
  }, [id, token, isAuthenticated]);

  useEffect(() => {
    if (careerPath) {
      renderCareerPathVisualization();
    }
  }, [careerPath]);

  const handleGenerateRoadmapClick = () => {
    navigate("/generate-roadmap");
  };

  const renderCareerPathVisualization = () => {
    if (!svgRef.current || !careerPath) return;

    const svg = d3.select(svgRef.current);
    svg.selectAll("*").remove();

    // Set fixed width and dimensions
    const width = 1200;
    const nodeRadius = 60;
    const basePadding = 150;
    const extraLabelPadding = 30;
    const rowHeight = 245;

    // Fixed number of nodes per row
    const maxNodesPerRow = 5;
    const numRows = Math.ceil(careerPath.length / maxNodesPerRow);
    const tooltipExtraSpace = 120;

    const height =
      numRows * rowHeight - (numRows > 1 ? 30 : 0) + tooltipExtraSpace;

    svg
      .attr("width", width)
      .attr("height", height)
      .attr("viewBox", `0 0 ${width} ${height}`)
      .attr("class", "career-track-svg")
      .attr("preserveAspectRatio", "xMidYMid meet");

    // Step 1: Calculate label sizes for spacing requirements
    const labelTexts = careerPath
      .slice(0, -1)
      .map((step) => `${step.timeToAchieve} months`);
    const dummyText = svg.append("text").attr("visibility", "hidden");
    const labelWidths = labelTexts.map((text) => {
      dummyText.text(text);
      return dummyText.node().getComputedTextLength() + extraLabelPadding;
    });
    dummyText.remove();

    // Step 2: Position the nodes with multi-row support
    const nodesWithPositions = [];
    let cumulativeTime = 0;

    careerPath.forEach((step, index) => {
      const prevTime = cumulativeTime;
      cumulativeTime += step.timeToAchieve;

      // Calculate which row and position within row
      const rowIndex = Math.floor(index / maxNodesPerRow);
      const positionInRow = index % maxNodesPerRow;

      // Calculate available width for nodes in this row
      const nodesInThisRow = Math.min(
        maxNodesPerRow,
        careerPath.length - rowIndex * maxNodesPerRow
      );
      const availableWidth = width - 2 * basePadding;
      const nodeSpacing = availableWidth / (nodesInThisRow - 1 || 1);

      // Calculate x position
      let x;
      if (nodesInThisRow === 1) {
        x = width / 2; // Center if only one node in row
      } else {
        x = basePadding + positionInRow * nodeSpacing;
      }

      // Calculate y position based on row
      const y = tooltipExtraSpace / 2 + rowHeight / 2 + rowIndex * rowHeight;

      nodesWithPositions.push({
        ...step,
        startTime: prevTime,
        endTime: cumulativeTime,
        x,
        y,
        progress: index / (careerPath.length - 1),
        rowIndex,
        positionInRow,
        monthLabel: `Month ${prevTime}`,
      });
    });

    const colorScale = d3
      .scaleLinear()
      .domain([0, 0.5, 1])
      .range(["#3498db", "#9b59b6", "#2ecc71"]);

    const pathGroup = svg.append("g").attr("class", "career-path-group");

    const defs = svg.append("defs");

    defs
      .append("marker")
      .attr("id", "static-arrow")
      .attr("viewBox", "0 0 10 10")
      .attr("refX", 10)
      .attr("refY", 5)
      .attr("markerWidth", 10)
      .attr("markerHeight", 10)
      .attr("orient", "auto")
      .attr("markerUnits", "userSpaceOnUse")
      .append("path")
      .attr("d", "M 0 0 L 10 5 L 0 10 z")
      .attr("fill", "#fff");

    const paths = [];
    for (let i = 0; i < nodesWithPositions.length - 1; i++) {
      const start = nodesWithPositions[i];
      const end = nodesWithPositions[i + 1];

      let pathData;

      if (start.rowIndex === end.rowIndex) {
        pathGroup
          .append("line")
          .attr("x1", start.x + nodeRadius)
          .attr("y1", start.y)
          .attr("x2", end.x - nodeRadius)
          .attr("y2", end.y)
          .attr("stroke", "#fff")
          .attr("stroke-width", 3)
          .attr("marker-end", "url(#static-arrow)")
          .attr("class", "career-path-line");

        pathData = {
          type: "horizontal",
          x1: start.x + nodeRadius,
          y1: start.y,
          x2: end.x - nodeRadius,
          y2: end.y,
          midX: (start.x + nodeRadius + end.x - nodeRadius) / 2,
          midY: start.y - 18,
        };
      } else {
        const horizontalExtension = 40;
        const verticalGap = rowHeight / 2;

        const pathElement = pathGroup
          .append("path")
          .attr(
            "d",
            `M ${start.x + nodeRadius} ${start.y} 
             L ${start.x + nodeRadius + horizontalExtension} ${start.y}
             L ${start.x + nodeRadius + horizontalExtension} ${
              start.y + verticalGap
            }
             L ${end.x} ${start.y + verticalGap}
             L ${end.x} ${end.y - nodeRadius}`
          )
          .attr("fill", "none")
          .attr("stroke", "#fff")
          .attr("stroke-width", 3)
          .attr("marker-end", "url(#static-arrow)")
          .attr("class", "career-path-line between-rows");

        pathData = {
          type: "between-rows",
          startX: start.x + nodeRadius,
          startY: start.y,
          horizontalSegmentX: start.x + nodeRadius + horizontalExtension,
          horizontalSegmentY: start.y + verticalGap,
          endX: end.x,
          endY: end.y - nodeRadius,
          midX: (start.x + nodeRadius + horizontalExtension + end.x) / 2,
          midY: start.y + verticalGap,
        };
      }

      paths.push({
        start,
        end,
        pathData,
      });
    }

    paths.forEach((path, i) => {
      const { start, end, pathData } = path;
      const labelText = `${end.timeToAchieve} months`;

      const tempText = svg
        .append("text")
        .text(labelText)
        .attr("visibility", "hidden");
      const actualLabelWidth = tempText.node().getComputedTextLength() + 20;
      tempText.remove();

      let labelX, labelY;

      if (pathData.type === "horizontal") {
        labelX = pathData.midX;
        labelY = pathData.midY;
      } else {
        labelX = pathData.endX + 40;
        labelY = pathData.midY - 15;
      }

      pathGroup
        .append("rect")
        .attr("x", labelX - actualLabelWidth / 2)
        .attr("y", labelY - 17)
        .attr("width", actualLabelWidth)
        .attr("height", 24)
        .attr("rx", 12)
        .attr("ry", 12)
        .attr("fill", "#000")
        .attr("stroke", colorScale((start.progress + end.progress) / 2))
        .attr("stroke-width", 1)
        .attr("class", "timeline-label-bg");

      pathGroup
        .append("text")
        .attr("x", labelX)
        .attr("y", labelY)
        .text(labelText)
        .attr("text-anchor", "middle")
        .attr("class", "timeline-label");
    });

    const nodeGroups = pathGroup
      .selectAll(".career-node")
      .data(nodesWithPositions)
      .enter()
      .append("g")
      .attr("class", "career-node")
      .attr("transform", (d) => `translate(${d.x}, ${d.y})`)
      .attr("data-month", (d) => d.startTime);

    const firstNode = nodesWithPositions[0];
    pathGroup
      .append("line")
      .attr("x1", firstNode.x)
      .attr("y1", firstNode.y - nodeRadius - 100)
      .attr("x2", firstNode.x)
      .attr("y2", firstNode.y - nodeRadius)
      .attr("stroke", "#fff")
      .attr("stroke-width", 3)
      .attr("opacity", 0.7)
      .attr("stroke-dasharray", "5,5");

    pathGroup
      .append("text")
      .attr("x", firstNode.x)
      .attr("y", firstNode.y - nodeRadius - 110)
      .text("Start")
      .attr("text-anchor", "middle")
      .attr("class", "path-endpoint-label")
      .attr("font-weight", "bold");

    const firstNodeTime = firstNode.timeToAchieve;
    const firstTimeLabelText = `${firstNodeTime} months`;

    const tempFirstText = svg
      .append("text")
      .text(firstTimeLabelText)
      .attr("visibility", "hidden");
    const firstLabelWidth = tempFirstText.node().getComputedTextLength() + 20;
    tempFirstText.remove();

    const firstLabelX = firstNode.x;
    const firstLabelY = firstNode.y - nodeRadius - 50;

    pathGroup
      .append("rect")
      .attr("x", firstLabelX - firstLabelWidth / 2)
      .attr("y", firstLabelY - 17)
      .attr("width", firstLabelWidth)
      .attr("height", 24)
      .attr("rx", 12)
      .attr("ry", 12)
      .attr("fill", "#000")
      .attr("stroke", colorScale(0))
      .attr("stroke-width", 1)
      .attr("class", "timeline-label-bg");

    pathGroup
      .append("text")
      .attr("x", firstLabelX)
      .attr("y", firstLabelY)
      .text(firstTimeLabelText)
      .attr("text-anchor", "middle")
      .attr("class", "timeline-label");

    const lastNode = nodesWithPositions[nodesWithPositions.length - 1];
    pathGroup
      .append("line")
      .attr("x1", lastNode.x)
      .attr("y1", lastNode.y + nodeRadius)
      .attr("x2", lastNode.x)
      .attr("y2", lastNode.y + nodeRadius + 60)
      .attr("stroke", "#fff")
      .attr("stroke-width", 3)
      .attr("opacity", 0.7)
      .attr("stroke-dasharray", "5,5");

    pathGroup
      .append("text")
      .attr("x", lastNode.x)
      .attr("y", lastNode.y + nodeRadius + 75)
      .text("Keep Growing!")
      .attr("text-anchor", "middle")
      .attr("class", "path-endpoint-label")
      .attr("font-weight", "bold");

    nodeGroups.each(function (d, i) {
      const node = d3.select(this);
      const gradientId = `node-gradient-${i}`;
      const nodeColor = colorScale(d.progress);
      const darkerNodeColor = d3.color(nodeColor).darker(0.5);

      const radialGradient = defs
        .append("radialGradient")
        .attr("id", gradientId)
        .attr("cx", "50%")
        .attr("cy", "50%")
        .attr("r", "50%");

      radialGradient
        .append("stop")
        .attr("offset", "0%")
        .attr("stop-color", nodeColor);

      radialGradient
        .append("stop")
        .attr("offset", "100%")
        .attr("stop-color", darkerNodeColor);

      node
        .append("circle")
        .attr("r", nodeRadius)
        .attr("fill", "rgba(0,0,0,0.2)")
        .attr("cx", 3)
        .attr("cy", 3)
        .attr("filter", "blur(3px)");

      node
        .append("circle")
        .attr("r", nodeRadius)
        .attr("fill", `url(#${gradientId})`)
        .attr("stroke", darkerNodeColor)
        .attr("stroke-width", 2)
        .attr("class", "career-node-circle timeline-marker-point")
        .attr("data-index", i);
    });

    nodeGroups.each(function (d) {
      const node = d3.select(this);
      const words = d.title.split(" ");
      let lines = [],
        currentLine = "";

      words.forEach((word) => {
        const testLine = currentLine ? `${currentLine} ${word}` : word;
        if (testLine.length > 15 && currentLine) {
          lines.push(currentLine);
          currentLine = word;
        } else {
          currentLine = testLine;
        }
      });
      if (currentLine) lines.push(currentLine);

      lines.forEach((line, i) => {
        const lineHeight = 16;
        const yPos = (i - (lines.length - 1) / 2) * lineHeight;

        node
          .append("text")
          .text(line)
          .attr("text-anchor", "middle")
          .attr("y", yPos)
          .attr("class", "career-node-title")
          .attr("font-size", "12px")
          .attr("fill", "white");
      });

      const tooltip = node
        .append("g")
        .attr("class", "node-tooltip")
        .style("opacity", 0)
        .attr("pointer-events", "none");

      const tooltipY = -nodeRadius - 20;
      const tooltipText = d.description || "No description available";

      const tempText = svg
        .append("text")
        .text(tooltipText)
        .attr("class", "tooltip-text-measure")
        .style("visibility", "hidden");

      const textWidth = Math.min(300, Math.max(200, tooltipText.length * 6));
      const textHeight = Math.ceil(tooltipText.length / 40) * 20 + 15;
      tempText.remove();

      tooltip
        .append("rect")
        .attr("x", -textWidth / 2)
        .attr("y", tooltipY - textHeight)
        .attr("width", textWidth)
        .attr("height", textHeight)
        .attr("rx", 8)
        .attr("ry", 8)
        .attr("class", "tooltip-bg");

      const tooltipTextElement = tooltip
        .append("text")
        .attr("x", 0)
        .attr("y", tooltipY - textHeight + 20)
        .attr("text-anchor", "middle")
        .attr("class", "tooltip-text");

      const tooltipLines = [];
      let tooltipCurrentLine = "";
      const maxCharsPerLine = 40;

      tooltipText.split(" ").forEach((word) => {
        if ((tooltipCurrentLine + " " + word).length > maxCharsPerLine) {
          tooltipLines.push(tooltipCurrentLine);
          tooltipCurrentLine = word;
        } else {
          tooltipCurrentLine = tooltipCurrentLine
            ? tooltipCurrentLine + " " + word
            : word;
        }
      });

      if (tooltipCurrentLine) {
        tooltipLines.push(tooltipCurrentLine);
      }

      tooltipLines.forEach((line, i) => {
        tooltipTextElement
          .append("tspan")
          .text(line)
          .attr("x", 0)
          .attr("dy", i === 0 ? 0 : "1.2em");
      });

      tooltip
        .append("path")
        .attr("d", `M -10 ${tooltipY} L 0 ${tooltipY + 10} L 10 ${tooltipY}`)
        .attr("class", "tooltip-arrow");
    });

    setupNodeInteractions(nodeGroups);
  };

  const setupNodeInteractions = (nodeGroups) => {
    if (!nodeGroups) return;

    const nodeRadius = 60;

    nodeGroups.each(function () {
      const node = d3.select(this);
      const tooltip = node.select(".node-tooltip");

      node.on("mouseenter", function () {
        tooltip.transition().duration(200).style("opacity", 1);
        node
          .select(".career-node-circle")
          .transition()
          .duration(200)
          .attr("stroke-width", 4)
          .attr("r", nodeRadius * 1.1);
      });

      node.on("mouseleave", function () {
        tooltip.transition().duration(200).style("opacity", 0);
        node
          .select(".career-node-circle")
          .transition()
          .duration(200)
          .attr("stroke-width", 2)
          .attr("r", nodeRadius);
      });

      node.on("click", function () {
        const index = parseInt(
          node.select(".career-node-circle").attr("data-index"),
          10
        );

        const stepCards = document.querySelectorAll(".simulator-step-card");
        if (stepCards[index]) {
          stepCards[index].scrollIntoView({
            behavior: "smooth",
            block: "center",
          });

          stepCards[index].classList.add("highlighted-step");
          setTimeout(() => {
            stepCards[index].classList.remove("highlighted-step");
          }, 1500);
        }
      });
    });
  };

  const renderCareerSummary = () => {
    if (!careerPath) return null;

    const totalMonths = careerPath.reduce(
      (sum, step) => sum + step.timeToAchieve,
      0
    );

    const years = Math.floor(totalMonths / 12);
    const months = totalMonths % 12;

    const startPosition = careerPath[0].title;
    const endPosition = careerPath[careerPath.length - 1].title;

    const allSkills = new Set();
    careerPath.forEach((step) => {
      step.requiredSkills.forEach((skill) => allSkills.add(skill));
    });

    const currentSkillsSet = new Set(
      inputs.currentSkills?.map((skill) => skill.toLowerCase()) || []
    );
    const skillsToLearn = [...allSkills].filter(
      (skill) =>
        !Array.from(currentSkillsSet).some(
          (userSkill) =>
            skill.toLowerCase().includes(userSkill) ||
            userSkill.includes(skill.toLowerCase())
        )
    );

    const timelineSegments = [];
    let cumulativeTime = 0;
    careerPath.forEach((step, index) => {
      cumulativeTime += step.timeToAchieve;
      timelineSegments.push({
        title: step.title,
        startMonth: cumulativeTime,
        endMonth: cumulativeTime,
        duration: step.timeToAchieve,
      });
    });

    return (
      <div className="career-summary-container">
        <h3>Career Journey Summary</h3>
        <div className="career-summary-stats">
          <div className="summary-stat">
            <span className="stat-label">Total Time to Goal</span>
            <span className="stat-value">
              {years > 0 ? `${years} year${years > 1 ? "s" : ""}` : ""}
              {months > 0
                ? `${years > 0 ? " and " : ""}${months} month${
                    months > 1 ? "s" : ""
                  }`
                : ""}
            </span>
          </div>
          <div className="summary-stat">
            <span className="stat-label">Journey</span>
            <span className="stat-value">
              {startPosition} → {endPosition}
            </span>
          </div>
          <div className="summary-stat">
            <span className="stat-label">Career Milestones</span>
            <span className="stat-value">{careerPath.length} steps</span>
          </div>
          <div className="summary-stat">
            <span className="stat-label">New Skills to Learn</span>
            <span className="stat-value">{skillsToLearn.length}</span>
          </div>
        </div>
        <div className="timeline-summary">
          <div className="timeline-milestones">
            {timelineSegments.map((segment, index) => (
              <div
                key={index}
                className="timeline-milestone-compact"
                onClick={() => scrollToStepCard(index)}
              >
                <div className="milestone-month">
                  Month {segment.startMonth}
                </div>
                <div className="milestone-marker"></div>
                <div className="milestone-title">{segment.title}</div>
              </div>
            ))}
            <div className="timeline-milestone-compact final-milestone">
              <div className="milestone-month">Month {totalMonths}</div>
              <div className="milestone-marker"></div>
              <div className="milestone-title">Goal Reached</div>
            </div>
          </div>
        </div>
        <div className="career-advice-notes">
          <p>
            <strong>Notes:</strong> This career path is tailored for a{" "}
            {inputs.careerStage?.toLowerCase() || "user"} with{" "}
            {inputs.educationLevel || "unspecified"} education, committing{" "}
            {inputs.hoursPerWeek || "unspecified"} weekly to skill development.
            The plan focuses on progression toward becoming a{" "}
            {inputs.careerGoal || "professional"}.
          </p>
        </div>
      </div>
    );
  };

  const scrollToStepCard = (index) => {
    const stepCards = document.querySelectorAll(".simulator-step-card");
    if (stepCards[index]) {
      stepCards[index].scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
      stepCards[index].classList.add("highlighted-step");
      setTimeout(() => {
        stepCards[index].classList.remove("highlighted-step");
      }, 1500);
    }
  };

  const renderContent = () => {
    if (loading) {
      return (
        <div className="simulator-loading">
          <div className="simulator-loading-spinner"></div>
          <p>Loading your career path...</p>
        </div>
      );
    }

    if (error) {
      return (
        <div className="simulator-error">
          <h3>{error}</h3>
          <button
            className="simulator-btn primary"
            onClick={() => navigate("/career-tracker")}
          >
            Back to Career Tracker
          </button>
        </div>
      );
    }

    if (!isAuthenticated) {
      return (
        <div className="simulator-container simulator-auth-required">
          <h2>Authentication Required</h2>
          <p>You need to log in to view this career path.</p>
        </div>
      );
    }

    if (careerPath) {
      return (
        <div className="simulator-results">
          <h2>Your Career Path to {inputs.careerGoal || "Your Goal"}</h2>
          <p className="simulator-subtitle">
            Personalized plan based on your profile and goals
          </p>
          {renderCareerSummary()}
          <div className="simulator-visualization-container">
            <svg ref={svgRef} className="career-path-visualization"></svg>
          </div>
          {careerPath.length > 0 && careerPath[0].aiFeedback && (
            <div className="simulator-ai-feedback">
              <h3>AI Career Coach Feedback</h3>
              <div className="simulator-ai-feedback-card">
                <div className="simulator-ai-icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    width="24"
                    height="24"
                  >
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z" />
                  </svg>
                </div>
                <div className="simulator-ai-feedback-content">
                  <p>{careerPath[0].aiFeedback}</p>
                </div>
              </div>
            </div>
          )}
          <div className="simulator-career-steps">
            <h3>Career Steps Breakdown</h3>
            <div className="simulator-steps-list">
              {careerPath.map((step, index) => {
                const prevStepTime =
                  index > 0
                    ? careerPath
                        .slice(0, index)
                        .reduce((sum, s) => sum + s.timeToAchieve, 0)
                    : 0;

                return (
                  <div key={index} className="simulator-step-card">
                    <div className="simulator-step-header">
                      <h4>{step.title}</h4>
                      <span className="simulator-timeframe">
                        {index === 0 ? "Start" : `+${prevStepTime} months`} →
                        {index === careerPath.length - 1
                          ? " Goal Reached!"
                          : ` +${prevStepTime + step.timeToAchieve} months`}
                      </span>
                    </div>
                    <p>{step.description}</p>
                    <div className="simulator-skills-required">
                      <h5>Required Skills:</h5>
                      <div className="simulator-skills-tags">
                        {step.requiredSkills.map((skill, i) => (
                          <span key={i} className="simulator-skill-badge">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                    {step.learningResources &&
                      step.learningResources.length > 0 && (
                        <div className="simulator-learning-resources">
                          <h5>Recommended Learning Resources:</h5>
                          <ul className="simulator-resources-list">
                            {step.learningResources.map((resource, i) => (
                              <li key={i}>{resource}</li>
                            ))}
                          </ul>
                        </div>
                      )}
                  </div>
                );
              })}
            </div>
          </div>
          <div className="simulator-action-buttons">
            <div className="ai-roadmap-wrapper">
              <p className="ai-roadmap-heading">
                Want to create AI roadmaps too?
              </p>
              <button
                className="simulator-btn secondary"
                onClick={handleGenerateRoadmapClick}
              >
                Generate AI Roadmap✨
              </button>
            </div>
            <button
              className="simulator-btn primary"
              onClick={() => navigate("/career-tracker")}
            >
              Back to Career Tracker
            </button>
          </div>
        </div>
      );
    }

    return null;
  };

  return (
    <div className="career-simulator-page full-page-layout">
      <Navbar />
      <div className="career-simulator-content">
        <div className="notifications-container">
          <div className="alert">
            <div className="flex">
              <div className="flex-shrink-0">
                <svg
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 alert-svg"
                >
                  <path
                    clipRule="evenodd"
                    d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
                    fillRule="evenodd"
                  ></path>
                </svg>
              </div>
              <div className="alert-prompt-wrap">
                <p className="text-sm text-yellow-700">
                  This career path advice is AI-generated and has not been
                  reviewed for accuracy. Use it as a reference and verify
                  information from reliable sources.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="career-simulator-container">{renderContent()}</div>
      </div>
      <ScrollToTop />
      <Footer />
    </div>
  );
};

export default ViewCareerTracker;
