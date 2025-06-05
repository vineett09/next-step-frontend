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

// Lazy load components
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
  const [hoveredNodeId, setHoveredNodeId] = useState(null);
  const chatbotRef = useRef(null);
  const [lastTapTime, setLastTapTime] = useState(0);
  const [lastTappedNodeId, setLastTappedNodeId] = useState(null);
  const isSmallScreen = () => window.innerWidth <= 768;

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
    if (nodes?.children) {
      // Added optional chaining for safety
      countRecursive(nodes.children);
    }
    return count;
  }, []);

  useEffect(() => {
    if (data) {
      const nodeCount = countTotalNodes(data);
      setTotalNodes(nodeCount);
      setIsLoading(false);
    }
  }, [data, countTotalNodes]);

  useEffect(() => {
    if (user && token && roadmapId) {
      fetchUserProgress();
      fetchBookmarkStatus();
    }
  }, [user, token, roadmapId]);

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

  const processDataWithParentReferences = useCallback((node, parent = null) => {
    if (!node) return null; // Safety check
    // Ensure nodeId is always a string, even if name/id are numbers. Default to a unique string if all else fails.
    const rawNodeId = node.id ?? node.name;
    const nodeId =
      rawNodeId !== undefined
        ? String(rawNodeId)
        : `unknown-node-${Math.random().toString(36).substring(7)}`;

    const processedNode = { ...node, parent, nodeId };
    if (node.children) {
      processedNode.children = node.children
        .map((child) => processDataWithParentReferences(child, processedNode))
        .filter(Boolean); // Filter out nulls
    }
    return processedNode;
  }, []);

  const processedChartData = useMemo(() => {
    if (!data) return null;
    return processDataWithParentReferences(data);
  }, [data, processDataWithParentReferences]);

  const processNodeMetrics = useCallback(
    (processedData, svgElement) => {
      if (!processedData || !processedData.children) return { parents: [] };
      const measureSvg = svgElement.append("g").style("visibility", "hidden");
      const metrics = {
        parents: processedData.children.map((parent) => ({
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
        { headers: { Authorization: `Bearer ${token}` } }
      );
      const progressMap = response.data.reduce((acc, item) => {
        acc[item.nodeId] = { completed: true, timestamp: item.timestamp };
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
        { headers: { Authorization: `Bearer ${token}` } }
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
        { roadmapId, nodeId, totalNodes },
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

        // Find the actual node data to pass to getNodeColor for preferred status
        let nodeToColor = { nodeId: nodeId, preferred: false }; // Default
        function findNode(searchNode, id) {
          if (!searchNode) return null;
          if (searchNode.nodeId === id) return searchNode;
          if (searchNode.children) {
            for (const child of searchNode.children) {
              const found = findNode(child, id);
              if (found) return found;
            }
          }
          return null;
        }
        const actualNode = findNode(processedChartData, nodeId);
        if (actualNode) nodeToColor = actualNode;

        d3.selectAll(`.node-group[data-id="${nodeId}"] rect`)
          .transition()
          .duration(150)
          .attr("fill", getNodeColor(nodeToColor, "#FFE700", true))
          .transition()
          .duration(300)
          .attr("fill", getNodeColor(nodeToColor, "#FFE700"));
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
        { headers: { Authorization: `Bearer ${token}` } }
      );
      if (response.data.success) {
        setIsBookmarked(response.data.bookmarked);
      }
    } catch (error) {
      console.error("Error toggling bookmark:", error);
    }
  };

  const getNodeColor = useCallback(
    (node, defaultColor, isHighlight = false) => {
      const nodeId = node?.nodeId; // Use optional chaining and nodeId
      if (!nodeId) return defaultColor; // Safety for undefined node or nodeId

      if (isHighlight && completedNodes[nodeId]) return "#66BB6A";
      if (completedNodes[nodeId]) return "#4CAF50";
      if (isHighlight && node.preferred) return "#FFB74D";
      if (node.preferred) return "#FF8C00";

      return defaultColor;
    },
    [completedNodes]
  );

  const getLinkStyle = useCallback(
    (sourceNode, targetNode) => {
      const sourceId = sourceNode?.nodeId;
      const targetId = targetNode?.nodeId;
      let stroke = "#fff";
      let strokeWidth = 2;
      let opacity = 0.7;

      if (!sourceId || !targetId) return { stroke, strokeWidth, opacity }; // Safety

      if (completedNodes[sourceId] && completedNodes[targetId]) {
        stroke = "#4CAF50";
        opacity = 1;
        strokeWidth = 2.5;
      } else if (completedNodes[sourceId] || completedNodes[targetId]) {
        stroke = "#FFD54F";
        opacity = 0.85;
      }

      if (hoveredNodeId) {
        const isSourceHovered = sourceId === hoveredNodeId;
        const isTargetHovered = targetId === hoveredNodeId;

        // Check if the link is directly connected to the hovered node
        let linkPartOfPath = false;
        if (isSourceHovered && targetNode?.parent?.nodeId === sourceId) {
          // target is child of hovered source
          linkPartOfPath = true;
        } else if (isTargetHovered && sourceNode?.parent?.nodeId === targetId) {
          // source is child of hovered target
          linkPartOfPath = true;
        }
        // Add checks for parent relationships if needed (source is parent of hovered target, etc.)
        // This means sourceNode is parent of targetNode
        else if (isTargetHovered && targetNode?.parent?.nodeId === sourceId) {
          // source is parent of hovered target
          linkPartOfPath = true;
        } else if (isSourceHovered && sourceNode?.parent?.nodeId === targetId) {
          // target is parent of hovered source
          linkPartOfPath = true;
        }

        if (linkPartOfPath) {
          stroke = "#03A9F4";
          strokeWidth = 3;
          opacity = 1;
        } else {
          opacity = 0.2;
        }
      }
      return { stroke, strokeWidth, opacity };
    },
    [completedNodes, hoveredNodeId]
  );

  const showAskAIButtonAtPosition = (x, y, node) => {
    // Don't show button on small screens
    if (isSmallScreen()) return;

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
      .style("font-size", "12px")
      .style("cursor", "pointer")
      .style("box-shadow", "0 4px 8px rgba(0,0,0,0.2)")
      .style("z-index", "100")
      .style("transform", "translate(-50%, 30px)")
      .text(`Ask AI about ${node.name}`)
      .on("click", () => {
        openChatbotWithNodeQuery(node);
        button.remove();
      });
    setTimeout(() => button.remove(), 5000);
  };

  // Add this helper function for handling clicks
  const handleNodeClick = (event, node) => {
    if (!node) return;
    event.stopPropagation();

    if (isSmallScreen()) {
      const currentTime = Date.now();
      const timeDiff = currentTime - lastTapTime;

      // Double tap detection (within 300ms and same node)
      if (timeDiff < 300 && lastTappedNodeId === node.nodeId) {
        openChatbotWithNodeQuery(node);
        setLastTapTime(0);
        setLastTappedNodeId(null);
      } else {
        setSelectedNode(node);
        setLastTapTime(currentTime);
        setLastTappedNodeId(node.nodeId);
      }
    } else {
      // Desktop behavior - show button
      setSelectedNode(node);
      const coords = d3.pointer(event, d3Container.current);
      showAskAIButtonAtPosition(coords[0], coords[1], node);
    }
  };
  const openChatbotWithNodeQuery = (node) => {
    if (chatbotRef.current) {
      chatbotRef.current.openWithNodeQuery(node);
    }
  };

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

  const renderRoadmap = useCallback(() => {
    if (!processedChartData || !d3Container.current || isLoading) return;

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

    const nodeMetrics = processNodeMetrics(processedChartData, svgElement);

    const childVerticalGap = 20;
    const minNestedGroupGap = 0;

    const svg = svgElement
      .append("g")
      .attr("transform", `translate(${margin.left},${margin.top})`);

    const defs = svg.append("defs");
    const nodeGradient = defs
      .append("linearGradient")
      .attr("id", "nodeGradient")
      .attr("x1", "0%")
      .attr("y1", "0%")
      .attr("x2", "100%")
      .attr("y2", "100%");
    nodeGradient
      .append("stop")
      .attr("offset", "0%")
      .style("stop-color", "#fff1a0");
    nodeGradient
      .append("stop")
      .attr("offset", "100%")
      .style("stop-color", "#FFD700");

    const titleText = roadmapTitle;
    const measureSvg = svgElement.append("g").style("visibility", "hidden");
    const titleDimensions = calculateNodeDimensions(titleText, measureSvg);
    measureSvg.remove();
    const titleY = 50;

    const titleGroup = svg
      .append("g")
      .datum(processedChartData)
      .attr("class", "title-node node-group")
      .attr("data-id", processedChartData.nodeId)
      .attr("transform", `translate(${width / 2}, ${titleY})`);

    titleGroup
      .append("rect")
      .attr("width", titleDimensions.width)
      .attr("height", titleDimensions.height)
      .attr("x", -titleDimensions.width / 2)
      .attr("y", -titleDimensions.height / 2)
      .attr("rx", 15)
      .attr("ry", 15)
      .attr("fill", getNodeColor(processedChartData, "#FFE700"))
      .attr("stroke", "black")
      .attr("stroke-width", 2)
      .style("filter", "drop-shadow(3px 5px 4px rgba(0,0,0,0.15))");

    titleGroup
      .append("text")
      .attr("dy", "0.35em")
      .attr("text-anchor", "middle")
      .attr("font-size", "15px")
      .attr("font-family", "Arial, sans-serif")
      .attr("fill", "black")
      .text(titleText);

    titleGroup
      .on("mouseover", function (event, d) {
        if (d && d.nodeId) {
          setHoveredNodeId(d.nodeId);
          d3.select(this)
            .select("rect")
            .transition()
            .duration(150)
            .style("transform", "scale(1.05)")
            .attr("fill", getNodeColor(d, "#FFE700", true));
        }
      })
      .on("mouseout", function (event, d) {
        setHoveredNodeId(null);
        if (d) {
          d3.select(this)
            .select("rect")
            .transition()
            .duration(150)
            .style("transform", "scale(1)")
            .attr("fill", getNodeColor(d, "#FFE700"));
        }
      })
      .on("click", (event, d) => {
        handleNodeClick(event, d);
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
      const dividerY = parent.dividerText ? currentY - dividerSpace / 2 : null;
      return { node: parent, y: position, blockHeight, dividerY };
    });

    const lineEndY =
      parentPositions[0]?.y - parentPositions[0]?.node.dimensions.height / 2 ||
      lineStartY + 50;

    svg
      .append("line")
      .attr("class", "main-spine")
      .attr("x1", width / 2)
      .attr("y1", lineStartY)
      .attr("x2", width / 2)
      .attr("y2", lineEndY)
      .attr("stroke", "#607D8B")
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
        const spineLinkClass = `spine-link spine-link-${prevPosition.node.nodeId}-${position.node.nodeId}`;

        if (prevPosition.node.dividerText) {
          svg
            .append("line")
            .attr("class", `parent-spine ${spineLinkClass}`)
            .attr("x1", width / 2)
            .attr("y1", startY)
            .attr("x2", width / 2)
            .attr("y2", prevPosition.dividerY - DIVIDER_PADDING)
            .attr("stroke", "#607D8B")
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
            .attr("fill", "#B0BEC5")
            .text(prevPosition.node.dividerText);
          svg
            .append("line")
            .attr("class", `parent-spine ${spineLinkClass}`)
            .attr("x1", width / 2)
            .attr("y1", prevPosition.dividerY + DIVIDER_PADDING)
            .attr("x2", width / 2)
            .attr("y2", endY)
            .attr("stroke", "#607D8B")
            .attr("stroke-width", 3)
            .attr("opacity", 0.7);
        } else {
          svg
            .append("line")
            .attr("class", `parent-spine ${spineLinkClass}`)
            .attr("x1", width / 2)
            .attr("y1", startY)
            .attr("x2", width / 2)
            .attr("y2", endY)
            .attr("stroke", "#607D8B")
            .attr("stroke-width", 3)
            .attr("opacity", 0.7);
        }
      }
    });

    const createNode = (
      group, // This is the D3 selection of the <g> element
      node, // This is the data object for the node
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

      const currentDrawingNodeId = node.nodeId;
      let isNodeDimmed = false;

      if (hoveredNodeId && currentDrawingNodeId !== hoveredNodeId) {
        // Attempt to get the hovered node's data object.
        // Note: d3.select().datum() gets data from the FIRST selected element.
        const hoveredNodeSelection = d3.select(
          `.node-group[data-id="${hoveredNodeId}"]`
        );
        const hoveredNodeObject = hoveredNodeSelection.empty()
          ? null
          : hoveredNodeSelection.datum();

        let partOfPath = false;
        if (hoveredNodeObject) {
          // 1. Is currentDrawingNode an ancestor of hoveredNodeObject?
          let tempParentOfHovered = hoveredNodeObject.parent;
          while (tempParentOfHovered) {
            if (tempParentOfHovered.nodeId === currentDrawingNodeId) {
              partOfPath = true;
              break;
            }
            tempParentOfHovered = tempParentOfHovered.parent;
          }

          // 2. Is currentDrawingNode a child of hoveredNodeObject?
          if (!partOfPath) {
            if (
              hoveredNodeObject.children?.some(
                (child) => child.nodeId === currentDrawingNodeId
              )
            ) {
              partOfPath = true;
            }
          }

          // 3. Is currentDrawingNode a grandchild of hoveredNodeObject?
          if (!partOfPath && hoveredNodeObject.children) {
            for (const child of hoveredNodeObject.children) {
              if (
                child.children?.some(
                  (grandchild) => grandchild.nodeId === currentDrawingNodeId
                )
              ) {
                partOfPath = true;
                break;
              }
            }
          }

          if (!partOfPath) {
            isNodeDimmed = true;
          }
        }
      }

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
        .attr("stroke-width", 2)
        .style("filter", "drop-shadow(2px 3px 3px rgba(0,0,0,0.1))")
        .style(
          "transition",
          "opacity 0.3s, transform 0.2s ease-out, fill 0.3s ease"
        );

      group
        .append("text")
        .attr("dy", "0.35em")
        .attr("text-anchor", "middle")
        .attr("font-size", "15px")
        .attr("font-family", "Arial, sans-serif")
        .attr("x", xOffset)
        .text(node.name)
        .style("pointer-events", "none")
        .style("transition", "opacity 0.3s ease-out");

      group // The group itself is the clickable/hoverable area
        .attr("cursor", "pointer")
        .on("click", (event, d) => {
          handleNodeClick(event, d);
        })
        .on("mouseover", function (event, d) {
          // d here is 'node'
          if (!d || !d.nodeId) return; // FIX: Safety check for d and d.nodeId
          setHoveredNodeId(d.nodeId); // FIX: Use d.nodeId
          d3.select(this)
            .select("rect") // Select the rect within this group
            .transition()
            .duration(150)
            .style("transform", "scale(1.05)")
            .attr("fill", getNodeColor(d, defaultFillColor, true));
        })
        .on("mouseout", function (event, d) {
          // d here is 'node'
          if (!d) return; // Safety check
          setHoveredNodeId(null);
          d3.select(this)
            .select("rect") // Select the rect within this group
            .transition()
            .duration(150)
            .style("transform", "scale(1)")
            .attr("fill", getNodeColor(d, defaultFillColor));
        });
      return { boxWidth, xOffset };
    };

    parentPositions.forEach(({ node: parent, y }, parentIndex) => {
      const parentX = width / 2;
      const parentGroup = svg
        .append("g")
        .datum(parent)
        .attr("class", "node node-group")
        .attr("data-id", parent.nodeId)
        .attr("transform", `translate(${parentX},${y})`)
        .on("contextmenu", (event) => {
          // d is implicitly parent here
          event.preventDefault();
          toggleNodeCompletion(parent.nodeId);
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
        const drawChildren = (children, isLeftSide, parentNodeData) => {
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
              .attr("class", "node node-group")
              .attr("data-id", child.nodeId)
              .attr("transform", `translate(${baseChildX},${currentChildY})`)
              .on("contextmenu", (event) => {
                // d is implicitly child
                event.preventDefault();
                toggleNodeCompletion(child.nodeId);
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

            const linkStyles = getLinkStyle(parentNodeData, child);
            const linkClass = `child-link link-${parentNodeData.nodeId}-${child.nodeId}`;

            svg
              .append("path")
              .attr("class", linkClass)
              .attr("d", path.toString())
              .attr("stroke", linkStyles.stroke)
              .attr("stroke-width", linkStyles.strokeWidth)
              .attr("fill", "none")
              .attr("opacity", linkStyles.opacity)
              .attr("stroke-dasharray", "5,5")
              .style("transition", "stroke 0.3s, opacity 0.3s");

            if (child.children?.length > 0) {
              const drawNestedChildren = (
                nestedChildren,
                parentChildY,
                currentChildNodeData
              ) => {
                const nestedTotalHeight =
                  nestedChildren.reduce(
                    (total, nestedChild) =>
                      total + nestedChild.dimensions.height + minNestedGroupGap,
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
                    .attr("class", "node node-group")
                    .attr("data-id", nestedChild.nodeId)
                    .attr(
                      "transform",
                      `translate(${nestedX},${currentNestedY})`
                    )
                    .on("contextmenu", (event) => {
                      // d is implicitly nestedChild
                      event.preventDefault();
                      toggleNodeCompletion(nestedChild.nodeId);
                    });
                  createNode(
                    nestedGroup,
                    nestedChild,
                    nestedChild.dimensions,
                    "#FFFFDD",
                    "black",
                    isLeftSide
                  );

                  const childConnectXInner =
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
                    (nestedConnectX + childConnectXInner) / 2,
                    currentNestedY,
                    (nestedConnectX + childConnectXInner) / 2,
                    parentChildY,
                    childConnectXInner,
                    parentChildY
                  );

                  const nestedLinkStyles = getLinkStyle(
                    currentChildNodeData,
                    nestedChild
                  );
                  const nestedLinkClass = `nested-link link-${currentChildNodeData.nodeId}-${nestedChild.nodeId}`;

                  svg
                    .append("path")
                    .attr("class", nestedLinkClass)
                    .attr("d", nestedPath.toString())
                    .attr("stroke", nestedLinkStyles.stroke)
                    .attr("stroke-width", nestedLinkStyles.strokeWidth)
                    .attr("fill", "none")
                    .attr("opacity", nestedLinkStyles.opacity)
                    .attr("stroke-dasharray", "5,5")
                    .style("transition", "stroke 0.3s, opacity 0.3s");

                  currentNestedY +=
                    nestedChild.dimensions.height + minNestedGroupGap;
                });
              };
              drawNestedChildren(child.children, currentChildY, child);
            }
            currentChildY += childSpacings[childIndex] + childVerticalGap;
          });
        };
        drawChildren(parent.children, isLeft, parent);
      }
    });
  }, [
    processedChartData,
    isLoading,
    roadmapTitle,
    calculateNodeDimensions,
    getNodeColor,
    getLinkStyle,
    processNodeMetrics,
    hoveredNodeId,
    toggleNodeCompletion,
    showAskAIButtonAtPosition,
    openChatbotWithNodeQuery,
  ]);

  useEffect(() => {
    if (processedChartData && !isLoading) {
      renderRoadmap();
    }
  }, [
    processedChartData,
    completedNodes,
    isLoading,
    windowSize,
    renderRoadmap,
    hoveredNodeId,
  ]);

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
              <Chatbot
                ref={chatbotRef}
                roadmapTitle={roadmapTitle}
                data={data}
              />
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
