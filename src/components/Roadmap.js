import React, { useRef, useEffect, useState } from "react";
import * as d3 from "d3";
import { useLocation } from "react-router-dom";
import "../styles/roadmaps/Roadmap.css";
import Sidebar from "./Sidebar";
import Header from "./Header";
import TechSkills from "./TechSkills";
import TechRoles from "./TechRoles";
import axios from "axios";
import { useSelector } from "react-redux";
import TipBox from "./TipBox";
import Chatbot from "./Chatbot";
import Footer from "./Footer";
import Navbar from "./Navbar";
import AuthModal from "./AuthModal";
import RelatedRoadmaps from "./RelatedRoadmaps";
import { techFields, techSkills } from "../data/TechFieldsData";
import Loader from "./Loader";
import AISuggestionContainer from "./AISuggestionContainer";

const Roadmap = ({ data }) => {
  const d3Container = useRef(null);
  const [selectedNode, setSelectedNode] = useState({
    name: "",
    description: "",
  });
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [completedNodes, setCompletedNodes] = useState({});
  const [showAuthModal, setShowAuthModal] = useState(false);
  const { user, token } = useSelector((state) => state.auth);
  const [isBookmarked, setIsBookmarked] = useState(false);
  const location = useLocation();
  const roadmapId = location.pathname.split("/").pop();
  const [isLoading, setIsLoading] = useState(true);

  const findFieldOrSkill = (id) => {
    const field = techFields.find((field) => field.link === `/${id}`);
    if (field) return field;

    const skill = techSkills.find((skill) => skill.link === `/${id}`);
    if (skill) return skill;

    return null;
  };

  const fieldOrSkill = findFieldOrSkill(roadmapId);

  const roadmapTitle = fieldOrSkill
    ? fieldOrSkill.title
    : "Explore Your Path to Tech Excellence";
  const roadmapDescription = fieldOrSkill
    ? fieldOrSkill.description
    : "Select a field to learn more.";

  const [totalNodes, setTotalNodes] = useState(0);

  const countTotalNodes = (nodes) => {
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
  };

  useEffect(() => {
    if (user && token && roadmapId) {
      fetchUserProgress();
      fetchBookmarkStatus();
    }
  }, [user, token, roadmapId]);
  useEffect(() => {
    if (data) {
      const nodeCount = countTotalNodes(data);
      setTotalNodes(nodeCount);
      setIsLoading(false);
    }
  }, [data]);

  const fetchUserProgress = async () => {
    try {
      const response = await axios.get(`/api/progress/${roadmapId}`, {
        headers: {
          "x-auth-token": token,
          Authorization: `Bearer ${token}`,
        },
      });

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
      const response = await axios.get("/api/bookmark/bookmarks", {
        headers: {
          "x-auth-token": token,
          Authorization: `Bearer ${token}`,
        },
      });
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
        "/api/progress/toggle",
        { roadmapId, nodeId },
        {
          headers: {
            "x-auth-token": token,
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
        "/api/bookmark/bookmark-toggle",
        { roadmapId },
        {
          headers: {
            "x-auth-token": token,
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

  const getNodeColor = (node, defaultColor) => {
    const nodeId = node.id || node.name;

    if (completedNodes[nodeId]) {
      return "#4CAF50";
    }

    return node.preferred ? "#FF8C00" : defaultColor;
  };

  const renderRoadmap = () => {
    if (data && d3Container.current && !isLoading) {
      d3.select(d3Container.current).selectAll("*").remove();

      const width = 1200;
      const margin = { top: 50, right: 200, bottom: 50, left: 200 };
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
        .attr("viewBox", `0 0 ${width + margin.left + margin.right} 1000`);

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

      const minParentSpacing = 100;
      const childVerticalGap = 120;
      const childrenSpaceFactor = 0.5;
      const minNestedGroupGap = 0;

      const svg = svgElement
        .append("g")
        .attr("transform", `translate(${margin.left},${margin.top})`);

      const titleText = roadmapTitle;
      const titleDimensions = calculateNodeDimensions(titleText);
      const titleY = 0;

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

      titleGroup.on("click", () => {
        setSelectedNode({
          name: titleText,
          description: roadmapDescription,
        });
        setIsSidebarOpen(true);
      });

      const TITLE_LINE_LENGTH = 150;
      const lineStartY = titleY + titleDimensions.height / 2;
      const lineEndY = lineStartY + TITLE_LINE_LENGTH;

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

      let currentY = lineEndY;
      const parentPositions = nodeMetrics.parents.map((parent, index) => {
        let childSpace = 0;
        if (parent.children?.length > 0) {
          childSpace = parent.children.reduce(
            (total, child) =>
              total + child.dimensions.height + childVerticalGap,
            0
          );
        }

        const blockHeight = Math.max(
          minParentSpacing,
          parent.dimensions.height + childrenSpaceFactor * childSpace
        );

        const dividerSpace = parent.dividerText ? DIVIDER_PADDING * 2 : 0;
        const position = currentY + blockHeight / 2;
        currentY += blockHeight + dividerSpace;

        return {
          node: parent,
          y: position,
          blockHeight,
          dividerY: currentY - dividerSpace / 2,
        };
      });

      const totalHeight = currentY + margin.top + margin.bottom;
      svgElement.attr("height", totalHeight);
      svgElement.attr(
        "viewBox",
        `0 0 ${width + margin.left + margin.right} ${totalHeight}`
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

        return { boxWidth, xOffset };
      };

      parentPositions.forEach(({ node: parent, y }) => {
        const parentX = width / 2;

        const parentGroup = svg
          .append("g")
          .attr("class", "node")
          .attr("transform", `translate(${parentX},${y})`)
          .on("click", () => {
            setSelectedNode({
              name: parent.name,
              description: parent.description,
            });
            setIsSidebarOpen(true);
          })
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
          const mid = Math.ceil(parent.children.length / 2);
          const leftChildren = parent.children.slice(0, mid);
          const rightChildren = parent.children.slice(mid);

          const getChildrenTotalHeight = (children, gap = childVerticalGap) =>
            children.reduce(
              (total, child) => total + child.dimensions.height + gap,
              0
            ) - gap;

          const drawChildren = (children, isLeft) => {
            const totalHeight = getChildrenTotalHeight(children);
            let currentChildY = y - totalHeight / 2;

            children.forEach((child) => {
              const childXOffset = isLeft
                ? -Math.max(0, (child.dimensions.width - BASE_BOX_WIDTH) / 2)
                : Math.max(0, (child.dimensions.width - BASE_BOX_WIDTH) / 2);

              const baseChildX = isLeft
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
                .on("click", () => {
                  setSelectedNode({
                    name: child.name,
                    description: child.description,
                  });
                  setIsSidebarOpen(true);
                })
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
                isLeft
              );

              const parentConnectX =
                parentX +
                (isLeft ? -parentBox.boxWidth / 2 : parentBox.boxWidth / 2);
              const childConnectX = isLeft
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
                const nestedMid = Math.ceil(child.children.length / 2);
                const nestedLeftChildren = child.children.slice(0, nestedMid);
                const nestedRightChildren = child.children.slice(nestedMid);

                const drawNestedChildren = (nestedChildren, isNestedLeft) => {
                  const nestedTotalHeight = getChildrenTotalHeight(
                    nestedChildren,
                    minNestedGroupGap
                  );
                  let currentNestedY = currentChildY - nestedTotalHeight / 2;
                  nestedChildren.forEach((nestedChild) => {
                    const nestedXOffset = isNestedLeft
                      ? -Math.max(
                          0,
                          (nestedChild.dimensions.width - BASE_BOX_WIDTH) / 2
                        )
                      : Math.max(
                          0,
                          (nestedChild.dimensions.width - BASE_BOX_WIDTH) / 2
                        );

                    const nestedX = isNestedLeft
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
                      .on("click", () => {
                        setSelectedNode({
                          name: nestedChild.name,
                          description: nestedChild.description,
                        });
                        setIsSidebarOpen(true);
                      })
                      .on("contextmenu", (event) => {
                        event.preventDefault();
                        toggleNodeCompletion(
                          nestedChild.id || nestedChild.name
                        );
                      });

                    createNode(
                      nestedGroup,
                      nestedChild,
                      nestedChild.dimensions,
                      "#FFFFDD",
                      "black",
                      isNestedLeft
                    );

                    const childConnectX =
                      baseChildX +
                      (isNestedLeft
                        ? -child.dimensions.width / 2 + childXOffset
                        : child.dimensions.width / 2 + childXOffset);
                    const nestedConnectX = isNestedLeft
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
                      currentChildY,
                      childConnectX,
                      currentChildY
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

                if (isLeft) {
                  drawNestedChildren(child.children, true);
                } else {
                  drawNestedChildren(child.children, false);
                }
                currentChildY += minNestedGroupGap;
              }

              currentChildY += child.dimensions.height + childVerticalGap;
            });
          };

          drawChildren(leftChildren, true);
          drawChildren(rightChildren, false);
        }
      });

      measureSvg.remove();
    }
  };

  useEffect(() => {
    renderRoadmap();
    window.addEventListener("resize", renderRoadmap);
    return () => window.removeEventListener("resize", renderRoadmap);
  }, [data, completedNodes, isLoading]);

  const closeDescription = () => {
    setSelectedNode({ name: "", description: "" });
    setIsSidebarOpen(false);
  };

  return (
    <div className="roadmap">
      <Navbar />
      <div className="roadmap-container">
        <TechRoles />
        <TechSkills />
        <AISuggestionContainer />

        <Header
          title={roadmapTitle}
          toggleBookmark={toggleBookmark}
          isBookmarked={isBookmarked}
          completedNodes={completedNodes}
          totalNodes={totalNodes}
          roadmapId={roadmapId} // Pass roadmapId
        />

        {isLoading ? (
          <div className="loading-container">
            <Loader loading={isLoading} />
            <p className="loading-text">Creating your roadmap...</p>
          </div>
        ) : (
          <div className="roadmap-wrapper">
            <div ref={d3Container} className="d3-container" />
            <Chatbot roadmapTitle={roadmapTitle} data={data} />
            <div className="cards-container"></div>
          </div>
        )}

        <TipBox />
        <Sidebar
          isOpen={isSidebarOpen}
          onClose={closeDescription}
          name={selectedNode.name}
          description={selectedNode.description}
        />
      </div>
      <RelatedRoadmaps />
      <Footer />
      {showAuthModal && (
        <AuthModal
          isOpen={showAuthModal}
          onClose={() => setShowAuthModal(false)}
        />
      )}
    </div>
  );
};

export default Roadmap;
