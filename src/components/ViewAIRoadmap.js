import React, { useEffect, useState, useRef } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import * as d3 from "d3";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import "../styles/ViewAIRoadmap.css"; // Import your CSS file for styling
import Navbar from "./Navbar";
import Loader from "./Loader";
import Footer from "./Footer";

const ViewAIRoadmap = () => {
  const { id } = useParams();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const navigate = useNavigate();
  const d3Container = useRef(null);
  const token = localStorage.getItem("token");

  useEffect(() => {
    const fetchRoadmap = async () => {
      try {
        const response = await axios.get(`/api/ai/generated-roadmaps/${id}`, {
          headers: { Authorization: `Bearer ${token}` },
        });

        if (response.data && response.data.roadmap) {
          setData(response.data.roadmap.roadmap);
        } else {
          setError("Roadmap not found");
          setTimeout(() => navigate("/profile"), 3000);
        }
      } catch (error) {
        console.error("Error fetching roadmap:", error);
        setError("Failed to load roadmap");
        setTimeout(() => navigate("/profile"), 3000);
      } finally {
        setLoading(false);
      }
    };

    fetchRoadmap();
  }, [id, token, navigate]);

  const renderRoadmap = () => {
    if (data && d3Container.current && !loading) {
      // Clear any existing content first
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
        .attr("transform", `translate(${width / 2}, ${titleY})`);

      titleGroup
        .append("rect")
        .attr("width", titleDimensions.width)
        .attr("height", titleDimensions.height)
        .attr("x", -titleDimensions.width / 2)
        .attr("y", -titleDimensions.height / 2)
        .attr("rx", 10)
        .attr("ry", 10)
        .attr("fill", "#FFE700")
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

        const fillColor = defaultFillColor;

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

      parentPositions.forEach(({ node: parent, y }, parentIndex) => {
        const parentX = width / 2;

        const parentGroup = svg
          .append("g")
          .attr("class", "node")
          .attr("transform", `translate(${parentX},${y})`);
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

      measureSvg.remove();
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

    html2canvas(tempDiv, {
      scale: 1.5,
      height: tempDiv.scrollHeight,
      width: tempDiv.scrollWidth,
      backgroundColor: "#0d1117",
      logging: false,
      imageTimeout: 0,
      useCORS: true,
      allowTaint: true,
    }).then((canvas) => {
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

      const filename = `${data.name
        .replace(/\s+/g, "-")
        .toLowerCase()}-roadmap.pdf`;
      pdf.save(filename);

      document.body.removeChild(tempDiv);
    });
  };

  useEffect(() => {
    if (data) {
      const timer = setTimeout(() => {
        renderRoadmap();
      }, 100);

      window.addEventListener("resize", renderRoadmap);

      return () => {
        clearTimeout(timer);
        window.removeEventListener("resize", renderRoadmap);
      };
    }
  }, [data]);

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
      <div className="roadmap-pure-container">
        <div className="roadmap-actions">
          <button
            className="download-roadmap-btn"
            onClick={downloadRoadmapPDF}
            title="Download as PDF"
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
          </button>
        </div>
        <div ref={d3Container} className="d3-container" />
      </div>
      <Footer />
    </div>
  );
};

export default ViewAIRoadmap;
