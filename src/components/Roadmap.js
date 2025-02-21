import React, { useRef, useEffect, useState } from "react";
import * as d3 from "d3";
import { useLocation } from "react-router-dom";
import "../styles/roadmaps/Roadmap.css";
import Sidebar from "./Sidebar";
import Header from "./Header";
import FieldCard from "./FieldCard";
const Roadmap = ({ data }) => {
  const d3Container = useRef(null);
  const [selectedNode, setSelectedNode] = useState({
    name: "",
    description: "",
  });
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const location = useLocation();
  const roadmapTitle =
    location.state?.title || "Explore Your Path to Tech Excellence";
  const roadmapDescription =
    location.state?.description || "Select a field to learn more.";

  useEffect(() => {
    if (data && d3Container.current) {
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
        .attr("height", 1000);

      const measureSvg = svgElement.append("g").style("visibility", "hidden");

      const measureText = (text) => {
        const textElement = measureSvg
          .append("text")
          .attr("font-size", "14px")
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
            })) || [],
        })),
      };

      const minParentSpacing = 100;
      const childVerticalGap = 30;
      const childrenSpaceFactor = 0.5;

      const svg = svgElement
        .append("g")
        .attr("transform", `translate(${margin.left},${margin.top})`);
      // Title node dimensions
      const titleText = roadmapTitle; // Use the title from state
      const titleDimensions = calculateNodeDimensions(titleText);
      const titleY = 0; // Positioning title above roadmap

      // Draw the title node
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
        .attr("fill", "#FFD700") // Gold color to highlight title
        .attr("stroke", "black")
        .attr("stroke-width", 2);

      titleGroup
        .append("text")
        .attr("dy", "0.35em")
        .attr("text-anchor", "middle")
        .attr("font-size", "16px")
        .attr("font-family", "Arial, sans-serif")
        .attr("fill", "black")
        .text(titleText);

      // Connect the title to the first node
      const TITLE_LINE_LENGTH = 150;
      const lineStartY = titleY + titleDimensions.height / 2;
      const lineEndY = lineStartY + TITLE_LINE_LENGTH;

      svg
        .append("line")
        .attr("x1", width / 2)
        .attr("y1", lineStartY)
        .attr("x2", width / 2)
        .attr("y2", lineEndY)
        .attr("stroke", "#1565C0")
        .attr("stroke-width", 3)
        .attr("opacity", 0.7)
        .attr("stroke-dasharray", "5,5");

      // Calculate positions with divider consideration
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

      // Draw main spine with gaps for divider text
      parentPositions.forEach((position, index) => {
        if (index > 0) {
          const prevPosition = parentPositions[index - 1];
          const startY =
            prevPosition.y + prevPosition.node.dimensions.height / 2;
          const endY = position.y - position.node.dimensions.height / 2;

          if (prevPosition.node.dividerText) {
            // Line above divider
            svg
              .append("line")
              .attr("class", "parent-spine")
              .attr("x1", width / 2)
              .attr("y1", startY)
              .attr("x2", width / 2)
              .attr("y2", prevPosition.dividerY - DIVIDER_PADDING)
              .attr("stroke", "#1565C0")
              .attr("stroke-width", 3)
              .attr("opacity", 0.7);

            // Divider text
            svg
              .append("text")
              .attr("x", width / 2)
              .attr("y", prevPosition.dividerY)
              .attr("text-anchor", "middle")
              .attr("dominant-baseline", "middle")
              .attr("font-size", "14px")
              .attr("font-family", "Arial, sans-serif")
              .attr("fill", "#666")
              .text(prevPosition.node.dividerText);

            // Line below divider
            svg
              .append("line")
              .attr("class", "parent-spine")
              .attr("x1", width / 2)
              .attr("y1", prevPosition.dividerY + DIVIDER_PADDING)
              .attr("x2", width / 2)
              .attr("y2", endY)
              .attr("stroke", "#1565C0")
              .attr("stroke-width", 3)
              .attr("opacity", 0.7);
          } else {
            // Continuous line if no divider
            svg
              .append("line")
              .attr("class", "parent-spine")
              .attr("x1", width / 2)
              .attr("y1", startY)
              .attr("x2", width / 2)
              .attr("y2", endY)
              .attr("stroke", "#1565C0")
              .attr("stroke-width", 3)
              .attr("opacity", 0.7);
          }
        }
      });

      const createNode = (
        group,
        text,
        dimensions,
        fillColor,
        strokeColor,
        isLeft = null
      ) => {
        let xOffset = 0;
        const boxWidth = dimensions.width;

        if (isLeft !== null) {
          const growthOffset = Math.max(0, (boxWidth - BASE_BOX_WIDTH) / 2);
          xOffset = isLeft ? -growthOffset : growthOffset;
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
          .attr("stroke-width", 2);

        group
          .append("text")
          .attr("dy", "0.35em")
          .attr("text-anchor", "middle")
          .attr("font-size", "14px")
          .attr("font-family", "Arial, sans-serif")
          .attr("x", xOffset)
          .text(text);

        return { boxWidth, xOffset };
      };

      // Draw parent and child nodes
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
          });

        const parentBox = createNode(
          parentGroup,
          parent.name,
          parent.dimensions,
          "#64B5F6",
          "black"
        );

        if (parent.children?.length > 0) {
          const mid = Math.ceil(parent.children.length / 2);
          const leftChildren = parent.children.slice(0, mid);
          const rightChildren = parent.children.slice(mid);

          const getChildrenTotalHeight = (children) =>
            children.reduce(
              (total, child) =>
                total + child.dimensions.height + childVerticalGap,
              0
            ) - childVerticalGap;

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
                });

              createNode(
                childGroup,
                child.name,
                child.dimensions,
                "#81C784",
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
                .attr("stroke", "#4CAF50")
                .attr("stroke-width", 2)
                .attr("fill", "none")
                .attr("opacity", 0.7)
                .attr("stroke-dasharray", "5,5");

              currentChildY += child.dimensions.height + childVerticalGap;
            });
          };

          drawChildren(leftChildren, true);
          drawChildren(rightChildren, false);
        }
      });

      measureSvg.remove();
    }
  }, [data]);

  const closeDescription = () => {
    setSelectedNode({ name: "", description: "" });
    setIsSidebarOpen(false);
  };

  return (
    <div className="roadmap-container">
      <Header title={roadmapTitle} />
      <FieldCard title={roadmapTitle} description={roadmapDescription} />{" "}
      <div ref={d3Container} />
      <Sidebar
        isOpen={isSidebarOpen}
        onClose={closeDescription}
        name={selectedNode.name}
        description={selectedNode.description}
      />
    </div>
  );
};

export default Roadmap;
