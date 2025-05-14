import React, { useState, useRef, useEffect } from "react";
import * as d3 from "d3";
import axios from "axios";
import "../styles/roadmaps/Roadmap.css";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Loader from "./Loader";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import { useSelector } from "react-redux";
import Chatbot from "./Chatbot";
import AISuggestionContainer from "./AISuggestionContainer";

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;

const AIRoadmap = () => {
  const [input, setInput] = useState("");
  const [timeframe, setTimeframe] = useState("As Required");
  const [level, setLevel] = useState("Beginner-Intermediate");
  const [contextInfo, setContextInfo] = useState("");
  const [aiFeedback, setAiFeedback] = useState("");
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const chatbotRef = useRef(null);
  const [selectedNode, setSelectedNode] = useState(null);
  const [usageInfo, setUsageInfo] = useState({
    usageCount: 0,
    remainingCount: 10,
  });
  const d3Container = useRef(null);
  const { token } = useSelector((state) => state.auth);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  // New state for regeneration
  const [modificationInput, setModificationInput] = useState("");
  const [regenerating, setRegenerating] = useState(false);
  const [currentTopic, setCurrentTopic] = useState("");

  // Fetch usage info when component mounts
  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsAuthenticated(!!token);
    if (token) {
      fetchUsageInfo();
    }
  }, [token]);

  const fetchUsageInfo = async () => {
    try {
      const response = await axios.get(` ${BACKEND_URL}/api/ai/usage`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setUsageInfo(response.data);
    } catch (err) {
      console.error("Failed to fetch usage info:", err);
    }
  };

  // Clear the D3 container
  const clearRoadmap = () => {
    if (d3Container.current) {
      d3.select(d3Container.current).selectAll("*").remove();
    }
  };

  const handleSubmit = async () => {
    if (!input.trim()) return;
    if (usageInfo.usageCount >= 10) {
      setError("You've reached your daily limit of 10 roadmaps");
      return;
    }

    setLoading(true);
    setError(null);

    // Clear previous roadmap data AND clear the DOM
    setData(null);
    setAiFeedback("");
    clearRoadmap();

    try {
      const response = await axios.post(
        `${BACKEND_URL}/api/ai/generate`,
        { input, timeframe, level, contextInfo },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setData(response.data.roadmap);
      setAiFeedback(response.data.aiFeedback);
      setCurrentTopic(input); // Save the original topic as current

      setUsageInfo(response.data.usageInfo);
    } catch (err) {
      if (err.response?.data?.error === "Daily limit reached") {
        setError("You've reached your daily limit of 10 roadmaps");
        setUsageInfo({
          usageCount: 10,
          remainingCount: 0,
        });
      } else {
        setError("Failed to generate roadmap. Please try again.");
      }
    } finally {
      setLoading(false);
    }
  };

  // New function to handle roadmap regeneration
  const handleRegenerate = async () => {
    if (!modificationInput.trim()) {
      setError("Please enter modification details");
      return;
    }
    if (usageInfo.usageCount >= 10) {
      setError("You've reached your daily limit of 10 roadmaps");
      return;
    }

    setRegenerating(true);
    setAiFeedback("");

    setError(null);
    clearRoadmap();

    try {
      const response = await axios.post(
        `${BACKEND_URL}/api/ai/regenerate`,
        {
          originalTopic: currentTopic,
          timeframe,
          level,
          contextInfo,
          modifications: modificationInput,
          originalRoadmap: data,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setCurrentTopic(response.data.roadmap.name); // Use the updated title from new roadmap
      setData(response.data.roadmap);
      setAiFeedback(response.data.aiFeedback);
      setUsageInfo(response.data.usageInfo);
    } catch (err) {
      if (err.response?.data?.error === "Daily limit reached") {
        setError("You've reached your daily limit of 10 roadmaps");
        setUsageInfo({
          usageCount: 10,
          remainingCount: 0,
        });
      } else {
        setError("Failed to regenerate roadmap. Please try again.");
      }
    } finally {
      setRegenerating(false);
    }
  };

  const openChatbotWithNodeQuery = (node) => {
    if (chatbotRef.current) {
      chatbotRef.current.openWithNodeQuery(node);
    }
  };

  const showAskAIButtonAtPosition = (x, y, node) => {
    // Remove existing button
    d3.select(d3Container.current).select(".ask-ai-button").remove();

    const button = d3
      .select(d3Container.current)
      .append("div")
      .attr("class", "ask-ai-button")
      .style("position", "absolute")
      .style("left", `${x}px`)
      .style("top", `${y}px`)
      .style("background-color", "#4285f4")
      .style("color", "white")
      .style("padding", "8px 16px")
      .style("border-radius", "20px")
      .style("font-size", "10px")
      .style("cursor", "pointer")
      .style("box-shadow", "0 2px 5px rgba(0,0,0,0.2)")
      .style("z-index", "100")
      .style("transform", "translate(-50%, 30px)")
      .text("Ask AI")
      .on("click", () => {
        openChatbotWithNodeQuery(node);
        button.remove();
      });

    setTimeout(() => button.remove(), 5000);
  };
  function debounce(fn, delay) {
    let timer;
    return function (...args) {
      clearTimeout(timer);
      timer = setTimeout(() => fn.apply(this, args), delay);
    };
  }

  // Modified renderRoadmap function with animations
  const renderRoadmap = (withAnimation) => {
    if (data && d3Container.current && !loading) {
      d3.select(d3Container.current).selectAll("*").remove();

      const width = 1200;
      const margin = { top: 100, right: 200, bottom: 50, left: 200 };
      const FIXED_LINE_LENGTH = 100;
      const BASE_BOX_WIDTH = 120;
      const DIVIDER_PADDING = 30;

      const TITLE_ANIMATION_DURATION = withAnimation ? 800 : 0;
      const NODE_ANIMATION_DURATION = withAnimation ? 600 : 0;
      const LINE_ANIMATION_DURATION = withAnimation ? 800 : 0;
      const STAGGER_DELAY = withAnimation ? 100 : 0;

      const svgElement = d3
        .select(d3Container.current)
        .append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", 1000)
        .attr("class", "roadmap-svg")
        .attr("preserveAspectRatio", "xMidYMid meet")
        .attr("viewBox", `0 -50 ${width + margin.left + margin.right} 1000`);

      const measureSvg = svgElement.append("g").style("visibility", "hidden");

      const measureText = (text) => {
        const textElement = measureSvg
          .append("text")
          .attr("font-size", "15px")
          .attr("font-family", "Arial, sans-serif")
          .text(text);
        const bbox = textElement.node().getBBox();
        textElement.remove();
        return bbox;
      };

      const calculateNodeDimensions = (text) => {
        const paddingX = 20;
        const paddingY = 10;
        const bbox = measureText(text);
        return {
          width: Math.max(bbox.width + paddingX * 2, BASE_BOX_WIDTH),
          height: bbox.height + paddingY * 2,
        };
      };

      const nodeMetrics = {
        parents: data.children.map((parent) => ({
          ...parent,
          dimensions: calculateNodeDimensions(parent.name),
          children:
            parent.children?.map((child) => ({
              ...child,
              dimensions: calculateNodeDimensions(child.name),
              children:
                child.children?.map((nestedChild) => ({
                  ...nestedChild,
                  dimensions: calculateNodeDimensions(nestedChild.name),
                })) || [],
            })) || [],
        })),
      };

      const childVerticalGap = 20;
      const minNestedGroupGap = 0;

      const svg = svgElement
        .append("g")
        .attr("transform", `translate(${margin.left},${margin.top})`);

      const titleText = data.name;
      const titleDimensions = calculateNodeDimensions(titleText);
      const titleY = 50;

      const titleGroup = svg
        .append("g")
        .attr("class", "title-node")
        .attr("transform", `translate(${width / 2}, ${titleY})`)
        .style("opacity", 0); // Start invisible for animation

      const titleRect = titleGroup
        .append("rect")
        .attr("width", 0) // Start with zero width
        .attr("height", 0) // Start with zero height
        .attr("x", 0)
        .attr("y", 0)
        .attr("rx", 10)
        .attr("ry", 10)
        .attr("fill", "#FFE700")
        .attr("stroke", "black")
        .attr("stroke-width", 2);

      const titleTextElement = titleGroup
        .append("text")
        .attr("dy", "0.35em")
        .attr("text-anchor", "middle")
        .attr("font-size", "15px")
        .attr("font-family", "Arial, sans-serif")
        .attr("fill", "black")
        .style("opacity", 0) // Text starts invisible
        .text(titleText);

      // Animate the title appearing
      titleGroup
        .transition()
        .duration(TITLE_ANIMATION_DURATION)
        .style("opacity", 1);

      titleRect
        .transition()
        .duration(TITLE_ANIMATION_DURATION)
        .attr("width", titleDimensions.width)
        .attr("height", titleDimensions.height)
        .attr("x", -titleDimensions.width / 2)
        .attr("y", -titleDimensions.height / 2);

      titleTextElement
        .transition()
        .delay(TITLE_ANIMATION_DURATION * 0.5)
        .duration(TITLE_ANIMATION_DURATION * 0.5)
        .style("opacity", 1);

      const lineStartY = titleY + titleDimensions.height / 2;

      // Calculate space needed for a parent and all its descendants
      const calculateParentSpan = (parent) => {
        const children = parent.children || [];
        if (children.length === 0) {
          return {
            min_y: -parent.dimensions.height / 2,
            max_y: parent.dimensions.height / 2,
          };
        }

        // Calculate space needed for each child including its nested children
        const childSpans = children.map((child) => {
          // Start with the child's own dimensions
          let minY = -child.dimensions.height / 2;
          let maxY = child.dimensions.height / 2;

          // If this child has nested children, calculate their required space
          if (child.children && child.children.length > 0) {
            const nestedTotalHeight =
              child.children.reduce(
                (sum, nested) => sum + nested.dimensions.height,
                0
              ) +
              (child.children.length - 1) * minNestedGroupGap;

            // The nested children group should be centered around the child
            minY = Math.min(minY, -nestedTotalHeight / 2);
            maxY = Math.max(maxY, nestedTotalHeight / 2);
          }

          return { minY, maxY, height: maxY - minY };
        });

        // Now calculate the total span needed for all children with proper spacing
        let totalSpan = 0;
        childSpans.forEach((span, idx) => {
          totalSpan += span.height;
          if (idx < childSpans.length - 1) {
            totalSpan += childVerticalGap;
          }
        });

        let min_y = Math.min(-parent.dimensions.height / 2, -totalSpan / 2);
        let max_y = Math.max(parent.dimensions.height / 2, totalSpan / 2);

        return { min_y, max_y };
      };

      let currentY = lineStartY;
      const parentPositions = nodeMetrics.parents.map((parent) => {
        const span = calculateParentSpan(parent);
        const spanHeight = span.max_y - span.min_y;
        const blockHeight = spanHeight + 50;
        const dividerSpace = parent.dividerText ? DIVIDER_PADDING * 2 : 0;
        const position = currentY + blockHeight / 2;
        currentY += blockHeight + dividerSpace;
        const dividerY = parent.dividerText
          ? currentY - dividerSpace / 2
          : null;

        return {
          node: parent,
          y: position,
          blockHeight,
          dividerY,
        };
      });

      const lineEndY =
        parentPositions[0].y - parentPositions[0].node.dimensions.height / 2;

      // Main spine from title to first parent - initially with 0 length then animate
      const mainSpine = svg
        .append("line")
        .attr("x1", width / 2)
        .attr("y1", lineStartY)
        .attr("x2", width / 2)
        .attr("y2", lineStartY) // Start with 0 length
        .attr("stroke", "#fff")
        .attr("stroke-width", 3)
        .attr("opacity", 0.7)
        .attr("stroke-dasharray", "5,5");

      // Animate the main spine growing downward
      mainSpine
        .transition()
        .delay(TITLE_ANIMATION_DURATION)
        .duration(LINE_ANIMATION_DURATION)
        .attr("y2", lineEndY);

      const totalHeight = currentY + margin.top + margin.bottom;
      svgElement.attr("height", totalHeight);
      svgElement.attr(
        "viewBox",
        `0 -50 ${width + margin.left + margin.right} ${totalHeight + 50}`
      );

      // Create parent spines with animations
      parentPositions.forEach((position, index) => {
        if (index > 0) {
          const prevPosition = parentPositions[index - 1];
          const startY =
            prevPosition.y + prevPosition.node.dimensions.height / 2;
          const endY = position.y - position.node.dimensions.height / 2;

          if (prevPosition.node.dividerText) {
            // First part of spine
            const firstSpine = svg
              .append("line")
              .attr("class", "parent-spine")
              .attr("x1", width / 2)
              .attr("y1", startY)
              .attr("x2", width / 2)
              .attr("y2", startY) // Start at same point
              .attr("stroke", "#fff")
              .attr("stroke-width", 3)
              .attr("opacity", 0);

            // Animate first spine
            firstSpine
              .transition()
              .delay(
                TITLE_ANIMATION_DURATION +
                  LINE_ANIMATION_DURATION +
                  index * STAGGER_DELAY
              )
              .duration(LINE_ANIMATION_DURATION / 2)
              .attr("y2", prevPosition.dividerY - DIVIDER_PADDING)
              .attr("opacity", 0.7);

            // Add divider text with fade-in
            const dividerText = svg
              .append("text")
              .attr("x", width / 2)
              .attr("y", prevPosition.dividerY)
              .attr("text-anchor", "middle")
              .attr("dominant-baseline", "middle")
              .attr("font-size", "14px")
              .attr("font-family", "Arial, sans-serif")
              .attr("fill", "#fff")
              .style("opacity", 0)
              .text(prevPosition.node.dividerText);

            // Animate divider text
            dividerText
              .transition()
              .delay(
                TITLE_ANIMATION_DURATION +
                  LINE_ANIMATION_DURATION +
                  LINE_ANIMATION_DURATION / 2 +
                  index * STAGGER_DELAY
              )
              .duration(NODE_ANIMATION_DURATION)
              .style("opacity", 1);

            // Second part of spine
            const secondSpine = svg
              .append("line")
              .attr("class", "parent-spine")
              .attr("x1", width / 2)
              .attr("y1", prevPosition.dividerY + DIVIDER_PADDING)
              .attr("x2", width / 2)
              .attr("y2", prevPosition.dividerY + DIVIDER_PADDING) // Start at same point
              .attr("stroke", "#fff")
              .attr("stroke-width", 3)
              .attr("opacity", 0);

            // Animate second spine
            secondSpine
              .transition()
              .delay(
                TITLE_ANIMATION_DURATION +
                  LINE_ANIMATION_DURATION +
                  LINE_ANIMATION_DURATION / 2 +
                  NODE_ANIMATION_DURATION +
                  index * STAGGER_DELAY
              )
              .duration(LINE_ANIMATION_DURATION / 2)
              .attr("y2", endY)
              .attr("opacity", 0.7);
          } else {
            // Regular spine without divider
            const spine = svg
              .append("line")
              .attr("class", "parent-spine")
              .attr("x1", width / 2)
              .attr("y1", startY)
              .attr("x2", width / 2)
              .attr("y2", startY) // Start with 0 length
              .attr("stroke", "#fff")
              .attr("stroke-width", 3)
              .attr("opacity", 0);

            // Animate spine growing
            spine
              .transition()
              .delay(
                TITLE_ANIMATION_DURATION +
                  LINE_ANIMATION_DURATION +
                  index * STAGGER_DELAY
              )
              .duration(LINE_ANIMATION_DURATION)
              .attr("y2", endY)
              .attr("opacity", 0.7);
          }
        }
      });

      const createNode = (
        group,
        node,
        dimensions,
        defaultFillColor,
        strokeColor,
        isLeft = null,
        animationDelay = 0
      ) => {
        let xOffset = 0;
        const boxWidth = dimensions.width;

        if (isLeft !== null) {
          const growthOffset = Math.max(0, (boxWidth - BASE_BOX_WIDTH) / 2);
          xOffset = isLeft ? -growthOffset : growthOffset;
        }

        const fillColor = defaultFillColor;

        // Create the node rect with starting dimensions of 0
        const rect = group
          .append("rect")
          .attr("width", 0)
          .attr("height", 0)
          .attr("x", 0) // Start from center
          .attr("y", 0) // Start from center
          .attr("rx", 10)
          .attr("ry", 10)
          .attr("fill", fillColor)
          .attr("stroke", strokeColor)
          .attr("stroke-width", 2)
          .style("opacity", 0);

        // Animate the rect expanding
        rect
          .transition()
          .delay(animationDelay)
          .duration(NODE_ANIMATION_DURATION)
          .attr("width", boxWidth)
          .attr("height", dimensions.height)
          .attr("x", -boxWidth / 2 + xOffset)
          .attr("y", -dimensions.height / 2)
          .style("opacity", 1);

        // Add text with fade-in animation
        const text = group
          .append("text")
          .attr("dy", "0.35em")
          .attr("text-anchor", "middle")
          .attr("font-size", "15px")
          .attr("font-family", "Arial, sans-serif")
          .attr("x", xOffset)
          .style("opacity", 0)
          .text(node.name);

        text
          .transition()
          .delay(animationDelay + NODE_ANIMATION_DURATION * 0.5)
          .duration(NODE_ANIMATION_DURATION * 0.5)
          .style("opacity", 1);

        const boxGroup = group.append("g");

        // Interactive overlay rectangle (invisible initially)
        const interactiveRect = boxGroup
          .append("rect")
          .attr("width", boxWidth)
          .attr("height", dimensions.height)
          .attr("x", -boxWidth / 2 + xOffset)
          .attr("y", -dimensions.height / 2)
          .attr("rx", 10)
          .attr("ry", 10)
          .attr("fill", "transparent") // Transparent fill
          .attr("stroke", "transparent") // Transparent stroke
          .attr("stroke-width", 0)
          .style("cursor", "pointer")
          .style("opacity", 0)
          .on("click", (event) => {
            event.stopPropagation();
            setSelectedNode(node);
            // Calculate position for the button
            const coords = d3.pointer(event, d3Container.current);
            showAskAIButtonAtPosition(coords[0], coords[1], node);
          });

        // Animate the interactive part after the visual part
        interactiveRect
          .transition()
          .delay(animationDelay + NODE_ANIMATION_DURATION)
          .duration(100)
          .style("opacity", 1);

        return { boxWidth, xOffset };
      };

      // Create and animate parent nodes
      parentPositions.forEach(({ node: parent, y }, parentIndex) => {
        const parentX = width / 2;
        const parentAnimationDelay =
          TITLE_ANIMATION_DURATION +
          LINE_ANIMATION_DURATION +
          parentIndex * STAGGER_DELAY;

        const parentGroup = svg
          .append("g")
          .attr("class", "node")
          .attr("transform", `translate(${parentX},${y})`)
          .style("opacity", 0);

        // Fade in the parent group
        parentGroup
          .transition()
          .delay(parentAnimationDelay)
          .duration(50)
          .style("opacity", 1);

        const parentBox = createNode(
          parentGroup,
          parent,
          parent.dimensions,
          "#FFE700",
          "black",
          null,
          0 // No additional delay within the group
        );

        if (parent.timeframe) {
          // Create clock icon with animation
          const iconGroup = parentGroup
            .append("g")
            .attr("class", "timeframe-icon")
            .attr("cursor", "pointer")
            .style("opacity", 0);

          // Position slightly inside the top-left corner of parent node
          const iconX = -parent.dimensions.width / 2 + 5;
          const iconY = -parent.dimensions.height / 2 + 5;

          // Animate icon appearance
          iconGroup
            .transition()
            .delay(parentAnimationDelay + NODE_ANIMATION_DURATION * 0.8)
            .duration(NODE_ANIMATION_DURATION * 0.5)
            .style("opacity", 1);

          // Draw clock circle
          iconGroup
            .append("circle")
            .attr("cx", iconX)
            .attr("cy", iconY)
            .attr("r", 8)
            .attr("fill", "#87CEEB")
            .attr("stroke", "#000")
            .attr("stroke-width", 1);

          // Draw clock hands
          iconGroup
            .append("line")
            .attr("x1", iconX)
            .attr("y1", iconY)
            .attr("x2", iconX)
            .attr("y2", iconY - 4)
            .attr("stroke", "#000")
            .attr("stroke-width", 1.5);

          iconGroup
            .append("line")
            .attr("x1", iconX)
            .attr("y1", iconY)
            .attr("x2", iconX + 3)
            .attr("y2", iconY)
            .attr("stroke", "#000")
            .attr("stroke-width", 1.5);

          // Add tooltip on hover
          // First create a hidden tooltip
          const tooltip = iconGroup
            .append("g")
            .attr("class", "tooltip")
            .style("visibility", "hidden")
            .attr("transform", `translate(${iconX - 20}, ${iconY})`);

          const tooltipPadding = {
            x: 8,
            y: 5,
          };

          const tooltipText = tooltip
            .append("text")
            .text(parent.timeframe)
            .attr("text-anchor", "end")
            .attr("dy", "0.35em")
            .attr("font-size", "12px")
            .attr("font-weight", "bold")
            .attr("font-family", "Arial, sans-serif")
            .attr("fill", "#000");

          // Get text dimensions for background
          const textBBox = tooltipText.node().getBBox();

          // Draw tooltip background with improved styling
          tooltip
            .insert("rect", "text")
            .attr("x", -textBBox.width - tooltipPadding.x)
            .attr("y", -textBBox.height / 2 - tooltipPadding.y)
            .attr("width", textBBox.width + tooltipPadding.x * 2)
            .attr("height", textBBox.height + tooltipPadding.y * 2)
            .attr("rx", 5)
            .attr("ry", 5)
            .attr("fill", "rgba(255, 255, 255, 0.95)")
            .attr("stroke", "#87CEEB")
            .attr("stroke-width", 1.5);

          // Add small triangle pointing to the icon
          const arrowPoints = [
            { x: 0, y: 0 },
            { x: -10, y: -5 },
            { x: -10, y: 5 },
          ];

          tooltip
            .insert("polygon", "rect")
            .attr("points", arrowPoints.map((p) => `${p.x},${p.y}`).join(" "))
            .attr("fill", "rgba(255, 255, 255, 0.95)")
            .attr("stroke", "#87CEEB")
            .attr("stroke-width", 1.5);

          // Add hover events with fade in/out effect
          iconGroup
            .on("mouseover", function () {
              tooltip
                .style("visibility", "visible")
                .style("opacity", 0)
                .transition()
                .duration(200)
                .style("opacity", 1);
            })
            .on("mouseout", function () {
              tooltip
                .transition()
                .duration(200)
                .style("opacity", 0)
                .on("end", function () {
                  tooltip.style("visibility", "hidden");
                });
            });
        }

        // Animate children after parent appears
        if (parent.children?.length > 0) {
          const isLeft = parentIndex % 2 === 0;
          const totalNodeCount = parent.children.length;

          const drawChildren = (children, isLeftSide, parentDelay) => {
            // First, calculate required spacing for each child based on its nested children
            const childSpacings = children.map((child) => {
              // Base height is the child's own height
              let requiredSpace = child.dimensions.height;

              // If this child has nested children, calculate their total space requirements
              if (child.children?.length > 0) {
                const nestedChildrenHeight =
                  child.children.reduce(
                    (total, nestedChild) =>
                      total + nestedChild.dimensions.height + minNestedGroupGap,
                    0
                  ) - minNestedGroupGap;

                // Use the larger of the two: either the child's height or its nested children's total height
                // Add extra padding to ensure enough space
                requiredSpace =
                  Math.max(requiredSpace, nestedChildrenHeight) + 20;
              }

              return requiredSpace;
            });

            // Calculate total height needed with proper spacing
            const totalHeight =
              childSpacings.reduce(
                (total, space) => total + space + childVerticalGap,
                0
              ) - childVerticalGap;

            let currentChildY = y - totalHeight / 2;

            children.forEach((child, childIndex) => {
              const childXOffset = isLeftSide
                ? -Math.max(0, (child.dimensions.width - BASE_BOX_WIDTH) / 2)
                : Math.max(0, (child.dimensions.width - BASE_BOX_WIDTH) / 2);

              const baseChildX = isLeftSide
                ? parentX -
                  parentBox.boxWidth / 2 -
                  FIXED_LINE_LENGTH -
                  (child.dimensions.width / 2 + childXOffset)
                : parentX +
                  parentBox.boxWidth / 2 +
                  FIXED_LINE_LENGTH +
                  child.dimensions.width / 2 -
                  childXOffset;

              // Calculate child's animation delay: staggered based on index
              const childAnimationDelay =
                parentDelay +
                NODE_ANIMATION_DURATION +
                childIndex * (STAGGER_DELAY / 2);

              // Create but initially hide the child group
              const childGroup = svg
                .append("g")
                .attr("class", "node")
                .attr("transform", `translate(${baseChildX},${currentChildY})`)
                .style("opacity", 0);

              // Fade in the child group
              childGroup
                .transition()
                .delay(childAnimationDelay)
                .duration(50)
                .style("opacity", 1);

              // Create and animate the child node
              createNode(
                childGroup,
                child,
                child.dimensions,
                "#FEEE91",
                "black",
                isLeftSide,
                0 // No additional delay within the group
              );

              const parentConnectX =
                parentX +
                (isLeftSide ? -parentBox.boxWidth / 2 : parentBox.boxWidth / 2);
              const childConnectX = isLeftSide
                ? baseChildX + child.dimensions.width / 2 + childXOffset
                : baseChildX - child.dimensions.width / 2 + childXOffset;

              // Create and animate connection path
              const path = d3.path();
              path.moveTo(childConnectX, currentChildY);
              path.bezierCurveTo(
                (childConnectX + parentConnectX) / 2,
                currentChildY,
                (childConnectX + parentConnectX) / 2,
                y,
                parentConnectX,
                y
              );

              const pathElement = svg
                .append("path")
                .attr("class", "child-link")
                .attr("d", path.toString())
                .attr("stroke", "#fff")
                .attr("stroke-width", 2)
                .attr("fill", "none")
                .attr("opacity", 0)
                .attr("stroke-dasharray", "5,5")
                .attr("stroke-dashoffset", 500); // For dashed line animation

              // Animate the path
              pathElement
                .transition()
                .delay(childAnimationDelay - STAGGER_DELAY / 4)
                .duration(LINE_ANIMATION_DURATION)
                .attr("opacity", 0.7)
                .attr("stroke-dashoffset", 0); // Animate dashes

              // Handle nested children if any
              if (child.children?.length > 0) {
                const drawNestedChildren = (
                  nestedChildren,
                  parentChildY,
                  parentChildDelay
                ) => {
                  const nestedTotalHeight =
                    nestedChildren.reduce(
                      (total, nestedChild) =>
                        total +
                        nestedChild.dimensions.height +
                        minNestedGroupGap,
                      0
                    ) - minNestedGroupGap;

                  // Center the nested children group around the parent child's Y position
                  let currentNestedY = parentChildY - nestedTotalHeight / 2;

                  nestedChildren.forEach((nestedChild, nestedIndex) => {
                    const nestedXOffset = isLeftSide
                      ? -Math.max(
                          0,
                          (nestedChild.dimensions.width - BASE_BOX_WIDTH) / 2
                        )
                      : Math.max(
                          0,
                          (nestedChild.dimensions.width - BASE_BOX_WIDTH) / 2
                        );

                    const nestedX = isLeftSide
                      ? baseChildX -
                        child.dimensions.width / 2 -
                        FIXED_LINE_LENGTH -
                        (nestedChild.dimensions.width / 2 + nestedXOffset)
                      : baseChildX +
                        child.dimensions.width / 2 +
                        FIXED_LINE_LENGTH +
                        nestedChild.dimensions.width / 2 -
                        nestedXOffset;

                    // Calculate nested child's animation delay
                    const nestedAnimationDelay =
                      parentChildDelay +
                      NODE_ANIMATION_DURATION +
                      nestedIndex * (STAGGER_DELAY / 3);

                    // Create and initially hide nested child group
                    const nestedGroup = svg
                      .append("g")
                      .attr("class", "node")
                      .attr(
                        "transform",
                        `translate(${nestedX},${currentNestedY})`
                      )
                      .style("opacity", 0);

                    // Fade in the nested group
                    nestedGroup
                      .transition()
                      .delay(nestedAnimationDelay)
                      .duration(50)
                      .style("opacity", 1);

                    // Create and animate the nested child node
                    createNode(
                      nestedGroup,
                      nestedChild,
                      nestedChild.dimensions,
                      "#FFFFDD",
                      "black",
                      isLeftSide,
                      0 // No additional delay within the group
                    );

                    // Create and animate connection to parent child
                    const childConnectX =
                      baseChildX +
                      (isLeftSide
                        ? -child.dimensions.width / 2 + childXOffset
                        : child.dimensions.width / 2 + childXOffset);
                    const nestedConnectX = isLeftSide
                      ? nestedX +
                        nestedChild.dimensions.width / 2 +
                        nestedXOffset
                      : nestedX -
                        nestedChild.dimensions.width / 2 +
                        nestedXOffset;

                    const nestedPath = d3.path();
                    nestedPath.moveTo(nestedConnectX, currentNestedY);
                    nestedPath.bezierCurveTo(
                      (nestedConnectX + childConnectX) / 2,
                      currentNestedY,
                      (nestedConnectX + childConnectX) / 2,
                      parentChildY,
                      childConnectX,
                      parentChildY
                    );

                    const nestedPathElement = svg
                      .append("path")
                      .attr("class", "nested-link")
                      .attr("d", nestedPath.toString())
                      .attr("stroke", "#fff")
                      .attr("stroke-width", 2)
                      .attr("fill", "none")
                      .attr("opacity", 0)
                      .attr("stroke-dasharray", "5,5")
                      .attr("stroke-dashoffset", 500); // For dashed line animation

                    // Animate the nested path
                    nestedPathElement
                      .transition()
                      .delay(nestedAnimationDelay - STAGGER_DELAY / 4)
                      .duration(LINE_ANIMATION_DURATION)
                      .attr("opacity", 0.7)
                      .attr("stroke-dashoffset", 0); // Animate dashes

                    currentNestedY +=
                      nestedChild.dimensions.height + minNestedGroupGap;
                  });
                };

                // Pass the current child's Y position and delay to properly center and time the nested children
                drawNestedChildren(
                  child.children,
                  currentChildY,
                  childAnimationDelay
                );
              }

              // Advance by the required space for this child rather than just its height
              currentChildY += childSpacings[childIndex] + childVerticalGap;
            });
          };

          // Start child animations after parent is fully visible
          drawChildren(parent.children, isLeft, parentAnimationDelay);
        }
      });
      measureSvg.remove(); // Clean up the measure SVG after use
    }
  };

  const downloadRoadmapPDF = () => {
    if (!data) return;

    const container = document.querySelector(".d3-container");
    if (!container) {
      alert("Roadmap not found!");
      return;
    }

    const tempDiv = document.createElement("div");
    tempDiv.style.position = "absolute";
    tempDiv.style.left = "-9999px";
    tempDiv.style.backgroundColor = "#0d1117";
    tempDiv.style.width = container.scrollWidth + "px";
    tempDiv.style.height = container.scrollHeight + "px";
    tempDiv.style.padding = "20px";

    const containerClone = container.cloneNode(true);
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

      const filename = `${
        input.trim() ? input.replace(/\s+/g, "-").toLowerCase() : "ai-roadmap"
      }.pdf`;
      pdf.save(filename);

      document.body.removeChild(tempDiv);
    });
  };

  useEffect(() => {
    if (data) {
      renderRoadmap(true); // initial render with animation

      const handleResize = debounce(() => {
        renderRoadmap(false); // re-render on resize without animation
      }, 300);

      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }
  }, [data]);

  if (!isAuthenticated) {
    return (
      <div className="roadmap">
        <Navbar />
        <div className="auth-required">
          <h2>Authentication Required</h2>
          <p>You need to log in to generate an AI roadmap.</p>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="roadmap">
      <Navbar />
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
                These roadmap is AI-generated and has not been reviewed for
                accuracy. Use it as a reference and verify information from
                reliable sources.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="roadmap-container">
        <div className="input-section">
          <h2>Create AI Generated Learning Roadmap✨</h2>
          <div className="input-group">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Enter roadmap topic "
              disabled={loading || usageInfo.usageCount >= 10}
            />

            <div className="ai-dropdown-group">
              <label htmlFor="timeframe">Timeframe:</label>
              <select
                id="timeframe"
                className="ai-dropdown"
                value={timeframe}
                onChange={(e) => setTimeframe(e.target.value)}
                disabled={loading}
              >
                <option value="As Required">As Required</option>
                <option value="1 Week">1 Week</option>
                <option value="2 Weeks">2 Weeks</option>
                <option value="1 Month">1 Month</option>
                <option value="2 Months">2 Months</option>
                <option value="3 Months">3 Months</option>
                <option value="6 Months">6 Months</option>
                <option value="1 Year">1 Year</option>
              </select>

              <label htmlFor="level">Level:</label>
              <select
                id="level"
                className="ai-dropdown"
                value={level}
                onChange={(e) => setLevel(e.target.value)}
                disabled={loading}
              >
                <option value="Beginner-Intermediate">
                  Beginner-Intermediate
                </option>
                <option value="Intermediate-Advanced">
                  Intermediate-Advanced
                </option>
                <option value="Beginner-Advanced">Beginner-Advanced</option>
              </select>
            </div>
            <div className="custom-context-box">
              <label htmlFor="contextInfo">
                Optional: Tell AI more about your background or goals to improve
                your roadmap 👇
              </label>
              <textarea
                id="contextInfo"
                value={contextInfo}
                onChange={(e) => setContextInfo(e.target.value)}
                placeholder="e.g. I already know JavaScript basics like functions and loops, but want to go deep into backend frameworks and testing."
                rows={4}
                disabled={loading}
              />
            </div>

            <div className="button-group">
              <button
                onClick={handleSubmit}
                disabled={loading || usageInfo.usageCount >= 10}
                className="generate-btn"
              >
                Generate✨
              </button>

              <button
                className="download-ai-roadmap-pdf"
                disabled={loading || !data}
                onClick={downloadRoadmapPDF}
                aria-label="Download roadmap as PDF"
                title="Download PDF"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="20"
                  height="20"
                  fill="#fff"
                >
                  <path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z" />
                </svg>
              </button>
            </div>
          </div>
          <div className="usage-info">
            <p>Daily usage: {usageInfo.usageCount}/10 roadmaps generated</p>
            <div className="usage-bar">
              <div
                className="usage-fill"
                style={{ width: `${(usageInfo.usageCount / 10) * 100}%` }}
              ></div>
            </div>
          </div>
          {error && <p className="error-message">{error}</p>}
        </div>

        <div className="roadmap-wrapper">
          {loading || regenerating ? (
            <div className="loader-wrapper">
              <Loader loading={true} />
            </div>
          ) : data ? (
            <div ref={d3Container} className="d3-container" />
          ) : null}
        </div>

        {aiFeedback && (
          <div className="ai-feedback-box">
            <h3>Additional feedback from AI🚀</h3>
            <p>{aiFeedback}</p>
          </div>
        )}
      </div>

      {/* New Regenerate section */}
      {data && !loading && !regenerating && (
        <div className="regenerate-section">
          <h3>Want to improve this roadmap?</h3>
          <div className="regenerate-input-container">
            <textarea
              value={modificationInput}
              onChange={(e) => setModificationInput(e.target.value)}
              placeholder="Describe modifications you'd like to see in the roadmap (e.g., 'Include more about mobile development', 'Add DevOps practices', 'Focus more on practical projects')"
              rows={3}
              disabled={regenerating || usageInfo.usageCount >= 10}
            />
            <button
              onClick={handleRegenerate}
              disabled={
                regenerating ||
                !modificationInput.trim() ||
                usageInfo.usageCount >= 10
              }
              className="regenerate-btn"
            >
              Regenerate Roadmap
            </button>
          </div>
        </div>
      )}
      <AISuggestionContainer />
      {data && !loading && !regenerating && (
        <Chatbot
          ref={chatbotRef}
          roadmapTitle={data?.name || input}
          data={data}
        />
      )}

      <Footer />
    </div>
  );
};

export default AIRoadmap;
