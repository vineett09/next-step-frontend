import React, { useEffect, useState, useRef, useCallback } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import * as d3 from "d3";
import "../styles/ViewAIRoadmap.css";
import Navbar from "./Navbar";
import Loader from "./Loader";
import Footer from "./Footer";
import Chatbot from "./Chatbot";
import { useSelector } from "react-redux";
import ViewAIRoadmapHeader from "./ViewAIRoadmapHeader";

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;

const ViewAIRoadmap = () => {
  const { id } = useParams(); // This is the AI Roadmap ID
  const [data, setData] = useState(null);
  const [processedData, setProcessedData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [completedNodes, setCompletedNodes] = useState({});
  const [totalNodes, setTotalNodes] = useState(0);
  const [currentTopic, setCurrentTopic] = useState("");
  const chatbotRef = useRef(null);
  const [selectedNode, setSelectedNode] = useState(null);

  const navigate = useNavigate();
  const d3Container = useRef(null);
  const { user, token } = useSelector((state) => state.auth);

  // --- Utility Functions (countTotalNodes, processDataWithParentReferences) ---
  const countTotalNodes = useCallback((node) => {
    if (!node) return 0;
    let count = 1; // Count the node itself
    if (node.children) {
      count += node.children.reduce(
        (sum, child) => sum + countTotalNodes(child),
        0
      );
    }
    return count;
  }, []);

  const processDataWithParentReferences = useCallback((node, parent = null) => {
    if (!node) return null;
    const rawNodeId = node.id ?? node.name;
    const nodeId =
      rawNodeId !== undefined
        ? String(rawNodeId)
        : `unknown-node-${Math.random().toString(36).substring(7)}`;

    const processedNode = { ...node, parent, nodeId };
    if (node.children) {
      processedNode.children = node.children
        .map((child) => processDataWithParentReferences(child, processedNode))
        .filter(Boolean);
    }
    return processedNode;
  }, []);
  const openChatbotWithNodeQuery = (node) => {
    if (chatbotRef.current) {
      chatbotRef.current.openWithNodeQuery(node);
    }
  };

  const showAskAIButtonAtPosition = (x, y, node) => {
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
      .text(`Ask AI about ${node.name}`)
      .on("click", () => {
        openChatbotWithNodeQuery(node);
        button.remove();
      });

    setTimeout(() => button.remove(), 5000);
  };

  const fetchUserProgress = useCallback(async () => {
    if (!token || !id) return;
    try {
      const response = await axios.get(`${BACKEND_URL}/api/progress/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      const progressMap = response.data.reduce((acc, item) => {
        acc[item.nodeId] = { completed: true, timestamp: item.timestamp };
        return acc;
      }, {});
      setCompletedNodes(progressMap);
    } catch (error) {
      console.error("Error fetching user progress:", error);
    }
  }, [id, token]);

  useEffect(() => {
    const fetchRoadmap = async () => {
      if (!token || !id) {
        setLoading(false);
        setError("Authentication is required to view this page.");
        return;
      }
      try {
        const response = await axios.get(
          `${BACKEND_URL}/api/ai/generated-roadmaps/${id}`,
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );

        if (
          response.data &&
          response.data.roadmap &&
          response.data.roadmap.roadmap
        ) {
          const roadmapData = response.data.roadmap.roadmap;
          setData(response.data.roadmap.roadmap);
          setCurrentTopic(response.data.roadmap.roadmap.name);

          const processed = processDataWithParentReferences(roadmapData);
          setProcessedData(processed);

          const nodeCount = countTotalNodes(processed);
          setTotalNodes(nodeCount);

          fetchUserProgress();
        } else {
          setError("Roadmap not found");
          setTimeout(() => navigate("/profile"), 3000);
        }
      } catch (error) {
        console.error("Error fetching roadmap:", error);
        setError(
          "Failed to load roadmap. You may not have access or it may not exist."
        );
      } finally {
        setLoading(false);
      }
    };

    fetchRoadmap();
  }, [
    id,
    token,
    navigate,
    countTotalNodes,
    processDataWithParentReferences,
    fetchUserProgress,
  ]);

  const getNodeColor = useCallback(
    (node, defaultColor) => {
      const nodeId = node?.nodeId;
      if (!nodeId) return defaultColor;

      if (completedNodes[nodeId]) return "#4CAF50"; // Completed color
      if (node.preferred) return "#FF8C00"; // Preferred color

      return defaultColor;
    },
    [completedNodes]
  );

  const toggleNodeCompletion = useCallback(
    async (nodeId) => {
      if (!token) {
        alert("Please log in to save your progress.");
        return;
      }
      try {
        const response = await axios.post(
          `${BACKEND_URL}/api/progress/toggle`,
          { roadmapId: id, nodeId, totalNodes },
          { headers: { Authorization: `Bearer ${token}` } }
        );
        if (response.data.success) {
          setCompletedNodes((prev) => {
            const newState = { ...prev };
            if (response.data.completed) {
              newState[nodeId] = {
                completed: true,
                timestamp: response.data.timestamp,
              };
            } else {
              delete newState[nodeId];
            }
            return newState;
          });
        }
      } catch (error) {
        console.error("Error updating progress:", error);
      }
    },
    [id, token, totalNodes]
  );

  const renderRoadmap = useCallback(() => {
    if (processedData && d3Container.current && !loading) {
      d3.select(d3Container.current).selectAll("*").remove();

      const width = 1200;
      const margin = { top: 100, right: 200, bottom: 50, left: 200 };
      const FIXED_LINE_LENGTH = 100;
      const BASE_BOX_WIDTH = 120;
      const DIVIDER_PADDING = 30;

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
        parents: processedData.children.map((parent) => ({
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

      const titleText = processedData.name;
      const titleDimensions = calculateNodeDimensions(titleText);
      const titleY = 50;

      const titleGroup = svg
        .append("g")
        .datum(processedData)
        .attr("class", "title-node node")
        .attr("transform", `translate(${width / 2}, ${titleY})`);

      titleGroup
        .append("rect")
        .attr("width", titleDimensions.width)
        .attr("height", titleDimensions.height)
        .attr("x", -titleDimensions.width / 2)
        .attr("y", -titleDimensions.height / 2)
        .attr("rx", 10)
        .attr("ry", 10)
        .attr("fill", getNodeColor(processedData, "#FFE700"))
        .attr("stroke", "black")
        .attr("stroke-width", 2);

      titleGroup
        .append("text")
        .attr("dy", "0.35em")
        .attr("text-anchor", "middle")
        .attr("font-size", "15px")
        .attr("font-family", "Arial, sans-serif")
        .attr("fill", "black")
        .text(titleText);

      titleGroup.on("contextmenu", (event, d) => {
        event.preventDefault();
        toggleNodeCompletion(d.nodeId);
      });

      const lineStartY = titleY + titleDimensions.height / 2;

      const calculateParentSpan = (parent) => {
        const children = parent.children || [];
        if (children.length === 0) {
          return {
            min_y: -parent.dimensions.height / 2,
            max_y: parent.dimensions.height / 2,
          };
        }

        const childSpans = children.map((child) => {
          let minY = -child.dimensions.height / 2;
          let maxY = child.dimensions.height / 2;

          if (child.children && child.children.length > 0) {
            const nestedTotalHeight =
              child.children.reduce(
                (sum, nested) => sum + nested.dimensions.height,
                0
              ) +
              (child.children.length - 1) * minNestedGroupGap;

            minY = Math.min(minY, -nestedTotalHeight / 2);
            maxY = Math.max(maxY, nestedTotalHeight / 2);
          }

          return { minY, maxY, height: maxY - minY };
        });

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

      svg
        .append("line")
        .attr("x1", width / 2)
        .attr("y1", lineStartY)
        .attr("x2", width / 2)
        .attr("y2", lineEndY)
        .attr("stroke", "#fff")
        .attr("stroke-width", 3)
        .attr("opacity", 0.7)
        .attr("stroke-dasharray", "5,5");

      const totalHeight = currentY + margin.top + margin.bottom;
      svgElement.attr("height", totalHeight);
      svgElement.attr(
        "viewBox",
        `0 -50 ${width + margin.left + margin.right} ${totalHeight + 50}`
      );

      parentPositions.forEach((position, index) => {
        if (index > 0) {
          const prevPosition = parentPositions[index - 1];
          const startY =
            prevPosition.y + prevPosition.node.dimensions.height / 2;
          const endY = position.y - position.node.dimensions.height / 2;

          if (prevPosition.node.dividerText) {
            svg
              .append("line")
              .attr("class", "parent-spine")
              .attr("x1", width / 2)
              .attr("y1", startY)
              .attr("x2", width / 2)
              .attr("y2", prevPosition.dividerY - DIVIDER_PADDING)
              .attr("stroke", "#fff")
              .attr("stroke-width", 3)
              .attr("opacity", 0.7);

            svg
              .append("text")
              .attr("x", width / 2)
              .attr("y", prevPosition.dividerY)
              .attr("text-anchor", "middle")
              .attr("dominant-baseline", "middle")
              .attr("font-size", "14px")
              .attr("font-family", "Arial, sans-serif")
              .attr("fill", "#fff")
              .text(prevPosition.node.dividerText);

            svg
              .append("line")
              .attr("class", "parent-spine")
              .attr("x1", width / 2)
              .attr("y1", prevPosition.dividerY + DIVIDER_PADDING)
              .attr("x2", width / 2)
              .attr("y2", endY)
              .attr("stroke", "#fff")
              .attr("stroke-width", 3)
              .attr("opacity", 0.7);
          } else {
            svg
              .append("line")
              .attr("class", "parent-spine")
              .attr("x1", width / 2)
              .attr("y1", startY)
              .attr("x2", width / 2)
              .attr("y2", endY)
              .attr("stroke", "#fff")
              .attr("stroke-width", 3)
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
        isLeft = null
      ) => {
        let xOffset = 0;
        const boxWidth = dimensions.width;

        if (isLeft !== null) {
          const growthOffset = Math.max(0, (boxWidth - BASE_BOX_WIDTH) / 2);
          xOffset = isLeft ? -growthOffset : growthOffset;
        }

        const fillColor = getNodeColor(node, defaultFillColor);

        group
          .append("rect")
          .attr("width", boxWidth)
          .attr("height", dimensions.height)
          .attr("x", -boxWidth / 2 + xOffset)
          .attr("y", -dimensions.height / 2)
          .attr("rx", 10)
          .attr("ry", 10)
          .attr("fill", fillColor)
          .attr("stroke", strokeColor)
          .attr("stroke-width", 2);

        group
          .append("text")
          .attr("dy", "0.35em")
          .attr("text-anchor", "middle")
          .attr("font-size", "15px")
          .attr("font-family", "Arial, sans-serif")
          .attr("x", xOffset)
          .text(node.name);
        group
          .append("rect")
          .attr("width", dimensions.width)
          .attr("height", dimensions.height)
          .attr("x", -dimensions.width / 2 + xOffset)
          .attr("y", -dimensions.height / 2)
          .attr("rx", 10)
          .attr("ry", 10)
          .attr("fill", "transparent")
          .style("cursor", "pointer")
          .on("click", (event) => {
            event.stopPropagation();
            setSelectedNode(node);
            const coords = d3.pointer(event, d3Container.current);
            showAskAIButtonAtPosition(coords[0], coords[1], node);
          });

        group.on("contextmenu", (event, d) => {
          event.preventDefault();
          toggleNodeCompletion(d.nodeId);
        });

        return { boxWidth, xOffset };
      };

      parentPositions.forEach(({ node: parent, y }, parentIndex) => {
        const parentX = width / 2;

        const parentGroup = svg
          .append("g")
          .datum(parent)
          .attr("class", "node")
          .attr("transform", `translate(${parentX},${y})`);

        const parentBox = createNode(
          parentGroup,
          parent,
          parent.dimensions,
          "#FFE700",
          "black"
        );
        if (parent.timeframe) {
          const iconGroup = parentGroup
            .append("g")
            .attr("class", "timeframe-icon")
            .attr("cursor", "pointer");

          const iconX = -parent.dimensions.width / 2 + 5;
          const iconY = -parent.dimensions.height / 2 + 5;

          iconGroup
            .append("circle")
            .attr("cx", iconX)
            .attr("cy", iconY)
            .attr("r", 8)
            .attr("fill", "#87CEEB")
            .attr("stroke", "#000")
            .attr("stroke-width", 1);

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

          const textBBox = tooltipText.node().getBBox();

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

        if (parent.children?.length > 0) {
          const isLeft = parentIndex % 2 === 0;

          const drawChildren = (children, isLeftSide) => {
            const childSpacings = children.map((child) => {
              let requiredSpace = child.dimensions.height;
              if (child.children?.length > 0) {
                const nestedChildrenHeight =
                  child.children.reduce(
                    (total, nestedChild) =>
                      total + nestedChild.dimensions.height + minNestedGroupGap,
                    0
                  ) - minNestedGroupGap;
                requiredSpace =
                  Math.max(requiredSpace, nestedChildrenHeight) + 20;
              }
              return requiredSpace;
            });

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

              const childGroup = svg
                .append("g")
                .datum(child)
                .attr("class", "node")
                .attr("transform", `translate(${baseChildX},${currentChildY})`);

              createNode(
                childGroup,
                child,
                child.dimensions,
                "#FEEE91",
                "black",
                isLeftSide
              );

              const parentConnectX =
                parentX +
                (isLeftSide ? -parentBox.boxWidth / 2 : parentBox.boxWidth / 2);
              const childConnectX = isLeftSide
                ? baseChildX + child.dimensions.width / 2 + childXOffset
                : baseChildX - child.dimensions.width / 2 + childXOffset;

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

              svg
                .append("path")
                .attr("class", "child-link")
                .attr("d", path.toString())
                .attr("stroke", "#fff")
                .attr("stroke-width", 2)
                .attr("fill", "none")
                .attr("opacity", 0.7)
                .attr("stroke-dasharray", "5,5");

              if (child.children?.length > 0) {
                const drawNestedChildren = (nestedChildren, parentChildY) => {
                  const nestedTotalHeight =
                    nestedChildren.reduce(
                      (total, nestedChild) =>
                        total +
                        nestedChild.dimensions.height +
                        minNestedGroupGap,
                      0
                    ) - minNestedGroupGap;
                  let currentNestedY = parentChildY - nestedTotalHeight / 2;

                  nestedChildren.forEach((nestedChild) => {
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

                    const nestedGroup = svg
                      .append("g")
                      .datum(nestedChild)
                      .attr("class", "node")
                      .attr(
                        "transform",
                        `translate(${nestedX},${currentNestedY})`
                      );

                    createNode(
                      nestedGroup,
                      nestedChild,
                      nestedChild.dimensions,
                      "#FFFFDD",
                      "black",
                      isLeftSide
                    );

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

                    svg
                      .append("path")
                      .attr("class", "nested-link")
                      .attr("d", nestedPath.toString())
                      .attr("stroke", "#fff")
                      .attr("stroke-width", 2)
                      .attr("fill", "none")
                      .attr("opacity", 0.7)
                      .attr("stroke-dasharray", "5,5");

                    currentNestedY +=
                      nestedChild.dimensions.height + minNestedGroupGap;
                  });
                };
                drawNestedChildren(child.children, currentChildY);
              }
              currentChildY += childSpacings[childIndex] + childVerticalGap;
            });
          };

          drawChildren(parent.children, isLeft);
        }
      });

      measureSvg.remove();
    }
  }, [loading, processedData, getNodeColor, toggleNodeCompletion]);

  useEffect(() => {
    if (processedData) {
      renderRoadmap();
      window.addEventListener("resize", renderRoadmap);

      return () => {
        window.removeEventListener("resize", renderRoadmap);
      };
    }
  }, [processedData, completedNodes, renderRoadmap]);

  if (loading) {
    return (
      <div className="profile-page">
        <Navbar />
        <Loader loading={loading} />
        <Footer />
      </div>
    );
  }

  if (error) return <div className="error-container">{error}</div>;

  if (!data)
    return (
      <div className="error-container">Roadmap not found. Redirecting...</div>
    );

  return (
    <div className="view-ai-roadmap">
      <Navbar />
      <ViewAIRoadmapHeader
        onBack={() => navigate(-1)}
        title={currentTopic}
        completedNodes={Object.keys(completedNodes).length}
        totalNodes={totalNodes}
      />
      <div className="roadmap-content"></div>
      <div className="roadmap-pure-container">
        <div ref={d3Container} className="d3-container" />
      </div>
      <Chatbot ref={chatbotRef} roadmapTitle={currentTopic} data={data} />

      <Footer />
    </div>
  );
};

export default ViewAIRoadmap;
