import React, {
  useRef,
  useEffect,
  useState,
  useMemo,
  useCallback,
} from "react";
import * as d3 from "d3";
import { useLocation } from "react-router-dom";
import "../styles/roadmaps/Roadmap.css";
import axios from "axios";
import { useSelector } from "react-redux";
import { techFields, techSkills } from "../data/TechFieldsData";
const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;

// Lazy load components that aren't immediately needed
const Header = React.lazy(() => import("./Header"));
const TechSkills = React.lazy(() => import("./TechSkills"));
const TechRoles = React.lazy(() => import("./TechRoles"));
const TipBox = React.lazy(() => import("./TipBox"));
const Chatbot = React.lazy(() => import("./Chatbot"));
const Footer = React.lazy(() => import("./Footer"));
const Navbar = React.lazy(() => import("./Navbar"));
const AuthModal = React.lazy(() => import("./AuthModal"));
const RelatedRoadmaps = React.lazy(() => import("./RelatedRoadmaps"));
const Loader = React.lazy(() => import("./Loader"));
const AISuggestionContainer = React.lazy(() =>
  import("./AISuggestionContainer")
);

// Utility function to debounce function calls
const debounce = (fn, delay) => {
  let timeoutId;
  return (...args) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      fn(...args);
    }, delay);
  };
};

const Roadmap = ({ data }) => {
  const d3Container = useRef(null);
  const svgRef = useRef(null);

  const [completedNodes, setCompletedNodes] = useState({});
  const [showAuthModal, setShowAuthModal] = useState(false);
  const { user, token } = useSelector((state) => state.auth);
  const [isBookmarked, setIsBookmarked] = useState(false);
  const location = useLocation();
  const roadmapId = location.pathname.split("/").pop();
  const [isLoading, setIsLoading] = useState(true);
  const [totalNodes, setTotalNodes] = useState(0);
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });
  const [selectedNode, setSelectedNode] = useState(null);
  const chatbotRef = useRef(null);
  // Memoize expensive lookups
  const fieldOrSkill = useMemo(() => {
    const field = techFields.find((field) => field.link === `/${roadmapId}`);
    if (field) return field;

    const skill = techSkills.find((skill) => skill.link === `/${roadmapId}`);
    if (skill) return skill;

    return null;
  }, [roadmapId]);

  const roadmapTitle = useMemo(
    () =>
      fieldOrSkill
        ? fieldOrSkill.title
        : "Explore Your Path to Tech Excellence",
    [fieldOrSkill]
  );

  // Memoize node counting
  const countTotalNodes = useCallback((nodes) => {
    let count = 0;
    const countRecursive = (nodeList) => {
      nodeList.forEach((node) => {
        count++;
        if (node.children) {
          countRecursive(node.children);
        }
      });
    };

    if (nodes.children) {
      countRecursive(nodes.children);
    }

    return count;
  }, []);

  // Calculate total nodes once when data changes
  useEffect(() => {
    if (data) {
      const nodeCount = countTotalNodes(data);
      setTotalNodes(nodeCount);
      setIsLoading(false);
    }
  }, [data, countTotalNodes]);

  // Fetch data only when dependencies change
  useEffect(() => {
    if (user && token && roadmapId) {
      fetchUserProgress();
      fetchBookmarkStatus();
    }
  }, [user, token, roadmapId]);

  // Memoize metrics calculation functions
  const calculateNodeDimensions = useCallback((text, measureSvg) => {
    const paddingX = 20;
    const paddingY = 10;
    const BASE_BOX_WIDTH = 120;

    const textElement = measureSvg
      .append("text")
      .attr("font-size", "15px")
      .attr("font-family", "Arial, sans-serif")
      .text(text);
    const bbox = textElement.node().getBBox();
    textElement.remove();

    return {
      width: Math.max(bbox.width + paddingX * 2, BASE_BOX_WIDTH),
      height: bbox.height + paddingY * 2,
    };
  }, []);

  // Process node metrics once when data changes
  const processNodeMetrics = useCallback(
    (data, svgElement) => {
      if (!data || !data.children) return { parents: [] };

      const measureSvg = svgElement.append("g").style("visibility", "hidden");

      const metrics = {
        parents: data.children.map((parent) => ({
          ...parent,
          dimensions: calculateNodeDimensions(parent.name, measureSvg),
          children:
            parent.children?.map((child) => ({
              ...child,
              dimensions: calculateNodeDimensions(child.name, measureSvg),
              children:
                child.children?.map((nestedChild) => ({
                  ...nestedChild,
                  dimensions: calculateNodeDimensions(
                    nestedChild.name,
                    measureSvg
                  ),
                })) || [],
            })) || [],
        })),
      };

      measureSvg.remove();
      return metrics;
    },
    [calculateNodeDimensions]
  );

  const fetchUserProgress = async () => {
    try {
      const response = await axios.get(
        `${BACKEND_URL}/api/progress/${roadmapId}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const progressMap = response.data.reduce((acc, item) => {
        acc[item.nodeId] = {
          completed: true,
          timestamp: item.timestamp,
        };
        return acc;
      }, {});

      setCompletedNodes(progressMap);
    } catch (error) {
      console.error("Error fetching user progress:", error);
    }
  };

  const fetchBookmarkStatus = async () => {
    try {
      const response = await axios.get(
        `${BACKEND_URL}/api/bookmark/bookmarks`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setIsBookmarked(response.data.includes(roadmapId));
    } catch (error) {
      console.error("Error fetching bookmark status:", error);
    }
  };

  const toggleNodeCompletion = async (nodeId) => {
    if (!user || !token) {
      setShowAuthModal(true);
      return;
    }

    try {
      const response = await axios.post(
        `${BACKEND_URL}/api/progress/toggle`,
        { roadmapId, nodeId },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
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
  };

  const toggleBookmark = async () => {
    if (!user || !token) {
      setShowAuthModal(true);
      return;
    }
    try {
      const response = await axios.post(
        `${BACKEND_URL}/api/bookmark/bookmark-toggle`,
        { roadmapId },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (response.data.success) {
        setIsBookmarked(response.data.bookmarked);
      }
    } catch (error) {
      console.error("Error toggling bookmark:", error);
    }
  };

  const getNodeColor = useCallback(
    (node, defaultColor) => {
      const nodeId = node.id || node.name;

      if (completedNodes[nodeId]) {
        return "#4CAF50";
      }

      return node.preferred ? "#FF8C00" : defaultColor;
    },
    [completedNodes]
  );
  const showAskAIButtonAtPosition = (x, y, node) => {
    // Remove any existing button first
    d3.select(d3Container.current).select(".ask-ai-button").remove();

    // Create a button element
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
      .style("font-size", "14px")
      .style("cursor", "pointer")
      .style("box-shadow", "0 2px 5px rgba(0,0,0,0.2)")
      .style("z-index", "100")
      .style("transform", "translate(-50%, 30px)")
      .text("Ask AI")
      .on("click", () => {
        openChatbotWithNodeQuery(node);
        // Remove the button after clicking
        button.remove();
      });

    // Auto-hide the button after 5 seconds
    setTimeout(() => {
      button.remove();
    }, 5000);
  };

  const openChatbotWithNodeQuery = (node) => {
    if (chatbotRef.current) {
      chatbotRef.current.openWithNodeQuery(node);
    }
  };
  // Handle resize with debounce
  useEffect(() => {
    const handleResize = debounce(() => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }, 250);

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Main rendering function - optimized with useCallback to prevent recreation on every render
  const renderRoadmap = useCallback(() => {
    if (!data || !d3Container.current || isLoading) return;

    // Clear previous SVG
    if (svgRef.current) {
      d3.select(svgRef.current).remove();
    }

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

    svgRef.current = svgElement.node();

    // Process node metrics once
    const nodeMetrics = processNodeMetrics(data, svgElement);

    const childVerticalGap = 20;
    const minNestedGroupGap = 0;

    const svg = svgElement
      .append("g")
      .attr("transform", `translate(${margin.left},${margin.top})`);

    const titleText = roadmapTitle;
    const measureSvg = svgElement.append("g").style("visibility", "hidden");
    const titleDimensions = calculateNodeDimensions(titleText, measureSvg);
    measureSvg.remove();

    const titleY = 50;

    const titleGroup = svg
      .append("g")
      .attr("class", "title-node")
      .attr("transform", `translate(${width / 2}, ${titleY})`);

    titleGroup
      .append("rect")
      .attr("width", titleDimensions.width)
      .attr("height", titleDimensions.height)
      .attr("x", -titleDimensions.width / 2)
      .attr("y", -titleDimensions.height / 2)
      .attr("rx", 10)
      .attr("ry", 10)
      .attr("fill", getNodeColor(data, "#FFE700"))
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
      const dividerY = parent.dividerText ? currentY - dividerSpace / 2 : null;

      return {
        node: parent,
        y: position,
        blockHeight,
        dividerY,
      };
    });

    const lineEndY =
      parentPositions[0]?.y - parentPositions[0]?.node.dimensions.height / 2 ||
      lineStartY + 50;

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
        const startY = prevPosition.y + prevPosition.node.dimensions.height / 2;
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
      const boxGroup = group.append("g");

      boxGroup
        .append("rect")
        .attr("width", boxWidth)
        .attr("height", dimensions.height)
        .attr("x", -boxWidth / 2 + xOffset)
        .attr("y", -dimensions.height / 2)
        .attr("rx", 10)
        .attr("ry", 10)
        .attr("fill", fillColor)
        .attr("stroke", strokeColor)
        .attr("stroke-width", 2)
        .style("cursor", "pointer")
        .on("click", (event) => {
          event.stopPropagation();
          setSelectedNode(node);
          // Calculate position for the button
          const coords = d3.pointer(event, d3Container.current);
          showAskAIButtonAtPosition(coords[0], coords[1], node);
        });

      boxGroup
        .append("text")
        .attr("dy", "0.35em")
        .attr("text-anchor", "middle")
        .attr("font-size", "15px")
        .attr("font-family", "Arial, sans-serif")
        .attr("x", xOffset)
        .text(node.name)
        .style("pointer-events", "none"); // Prevent text from capturing clicks

      return { boxWidth, xOffset };
    };
    parentPositions.forEach(({ node: parent, y }, parentIndex) => {
      const parentX = width / 2;

      const parentGroup = svg
        .append("g")
        .attr("class", "node")
        .attr("transform", `translate(${parentX},${y})`)

        .on("contextmenu", (event) => {
          event.preventDefault();
          toggleNodeCompletion(parent.id || parent.name);
        });

      const parentBox = createNode(
        parentGroup,
        parent,
        parent.dimensions,
        "#FFE700",
        "black"
      );

      if (parent.children?.length > 0) {
        const isLeft = parentIndex % 2 === 0;

        const drawChildren = (children, isLeftSide) => {
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

            const childGroup = svg
              .append("g")
              .attr("class", "node")
              .attr("transform", `translate(${baseChildX},${currentChildY})`)

              .on("contextmenu", (event) => {
                event.preventDefault();
                toggleNodeCompletion(child.id || child.name);
              });

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
                      total + nestedChild.dimensions.height + minNestedGroupGap,
                    0
                  ) - minNestedGroupGap;

                // Center the nested children group around the parent child's Y position
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
                    .attr("class", "node")
                    .attr(
                      "transform",
                      `translate(${nestedX},${currentNestedY})`
                    )

                    .on("contextmenu", (event) => {
                      event.preventDefault();
                      toggleNodeCompletion(nestedChild.id || nestedChild.name);
                    });

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
                    ? nestedX + nestedChild.dimensions.width / 2 + nestedXOffset
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

              // Pass the current child's Y position to properly center the nested children
              drawNestedChildren(child.children, currentChildY);
            }

            // Advance by the required space for this child rather than just its height
            currentChildY += childSpacings[childIndex] + childVerticalGap;
          });
        };

        drawChildren(parent.children, isLeft);
      }
    });
  }, [
    data,
    isLoading,
    roadmapTitle,
    calculateNodeDimensions,
    getNodeColor,
    processNodeMetrics,
  ]);

  // Render roadmap when dependencies change
  useEffect(() => {
    if (data && !isLoading) {
      renderRoadmap();
    }
  }, [data, completedNodes, isLoading, windowSize, renderRoadmap]);

  return (
    <div className="roadmap">
      <React.Suspense fallback={<div>Loading navigation...</div>}>
        <Navbar />
      </React.Suspense>
      <div className="roadmap-container">
        <React.Suspense fallback={<div>Loading components...</div>}>
          <Header
            title={roadmapTitle}
            toggleBookmark={toggleBookmark}
            isBookmarked={isBookmarked}
            completedNodes={completedNodes}
            totalNodes={totalNodes}
            roadmapId={roadmapId}
          />
        </React.Suspense>

        {isLoading ? (
          <div className="loading-container">
            <React.Suspense fallback={<div>Loading...</div>}>
              <Loader loading={isLoading} />
            </React.Suspense>
            <p className="loading-text">Creating your roadmap...</p>
          </div>
        ) : (
          <div className="roadmap-wrapper">
            <div ref={d3Container} className="d3-container" />
            <React.Suspense fallback={<div>Loading chatbot...</div>}>
              <React.Suspense fallback={<div>Loading chatbot...</div>}>
                <Chatbot
                  ref={chatbotRef}
                  roadmapTitle={roadmapTitle}
                  data={data}
                />
              </React.Suspense>{" "}
            </React.Suspense>
            <div className="cards-container"></div>
          </div>
        )}

        <React.Suspense fallback={<div>Loading tip box...</div>}>
          <TipBox />
        </React.Suspense>
        <AISuggestionContainer />
      </div>

      <React.Suspense fallback={<div>Loading related roadmaps...</div>}>
        <RelatedRoadmaps />
      </React.Suspense>
      <TechRoles />
      <TechSkills />
      <React.Suspense fallback={<div>Loading footer...</div>}>
        <Footer />
      </React.Suspense>
      {showAuthModal && (
        <React.Suspense fallback={<div>Loading authentication...</div>}>
          <AuthModal
            isOpen={showAuthModal}
            onClose={() => setShowAuthModal(false)}
          />
        </React.Suspense>
      )}
    </div>
  );
};

export default React.memo(Roadmap);
