import React, { useEffect, useRef } from "react";
import * as d3 from "d3";
import "../styles/roadmaps/Roadmap.css";

const Roadmap = ({ data }) => {
  const d3Container = useRef(null);

  useEffect(() => {
    if (data && d3Container.current) {
      // Clear previous content
      d3.select(d3Container.current).selectAll("*").remove();

      // Set up the dimensions
      const width = 1200;
      const height = 1000;
      const margin = { top: 50, right: 200, bottom: 50, left: 200 };
      const nodeWidth = 120;
      const nodeHeight = 50;
      const minParentSpacing = 120;
      const childSpacing = 80;
      const horizontalGap = 250;

      const svg = d3
        .select(d3Container.current)
        .append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
        .append("g")
        .attr("transform", `translate(${margin.left},${margin.top})`);

      // First create the parent line that connects all parent nodes
      const parentSpine = svg
        .append("line")
        .attr("class", "parent-spine")
        .attr("x1", width / 2)
        .attr("y1", 0)
        .attr("x2", width / 2)
        .attr("y2", height)
        .attr("stroke", "#1565C0") // Matching parent node border color
        .attr("stroke-width", 2)
        .attr("opacity", 0.7);

      const nodes = data.children;

      // Calculate required space for nodes
      const calculateNodeSpace = (node) => {
        if (!node.children || node.children.length === 0) {
          return minParentSpacing;
        }
        const maxChildrenOnOneSide = Math.ceil(node.children.length / 2);
        return Math.max(minParentSpacing, maxChildrenOnOneSide * childSpacing);
      };

      // Calculate positions
      let currentY = 0;
      const parentPositions = nodes.map((node, i) => {
        const currentSpace = calculateNodeSpace(node);
        const nextNode = nodes[i + 1];
        const nextSpace = nextNode ? calculateNodeSpace(nextNode) : 0;
        const spacing = Math.max(currentSpace, nextSpace);
        const position = currentY;
        currentY += spacing;
        return { node, y: position, spacing };
      });

      // Function to distribute children
      const distributeChildren = (children) => {
        if (!children) return { left: [], right: [] };
        const mid = Math.ceil(children.length / 2);
        return {
          left: children.slice(0, mid),
          right: children.slice(mid),
        };
      };

      // Draw nodes
      parentPositions.forEach((parentPos, i) => {
        const { node, y } = parentPos;
        const x = width / 2;

        // Parent node
        const parentGroup = svg
          .append("g")
          .attr("class", "node")
          .attr("transform", `translate(${x},${y})`);

        parentGroup
          .append("rect")
          .attr("width", nodeWidth)
          .attr("height", nodeHeight)
          .attr("x", -nodeWidth / 2)
          .attr("y", -nodeHeight / 2)
          .attr("rx", 10)
          .attr("ry", 10)
          .attr("fill", "#1976D2")
          .attr("stroke", "#1565C0")
          .attr("stroke-width", 2);

        parentGroup
          .append("text")
          .attr("dy", "0.31em")
          .attr("text-anchor", "middle")
          .text(node.name)
          .attr("fill", "#fff")
          .attr("font-size", "14px")
          .attr("font-family", "Arial, sans-serif");

        // Draw children
        if (node.children) {
          const { left, right } = distributeChildren(node.children);
          const leftOffset = ((left.length - 1) * childSpacing) / 2;
          const rightOffset = ((right.length - 1) * childSpacing) / 2;

          // Draw left children
          left.forEach((child, j) => {
            const childX = x - horizontalGap;
            const childY = y - leftOffset + j * childSpacing;
            drawChildNode(
              svg,
              child,
              childX,
              childY,
              x,
              y,
              nodeWidth,
              nodeHeight
            );
          });

          // Draw right children
          right.forEach((child, j) => {
            const childX = x + horizontalGap;
            const childY = y - rightOffset + j * childSpacing;
            drawChildNode(
              svg,
              child,
              childX,
              childY,
              x,
              y,
              nodeWidth,
              nodeHeight
            );
          });
        }
      });
    }
  }, [data]);

  const drawChildNode = (
    svg,
    child,
    x,
    y,
    parentX,
    parentY,
    nodeWidth,
    nodeHeight
  ) => {
    const childGroup = svg
      .append("g")
      .attr("class", "node")
      .attr("transform", `translate(${x},${y})`);

    childGroup
      .append("rect")
      .attr("width", nodeWidth)
      .attr("height", nodeHeight)
      .attr("x", -nodeWidth / 2)
      .attr("y", -nodeHeight / 2)
      .attr("rx", 10)
      .attr("ry", 10)
      .attr("fill", "#81C784")
      .attr("stroke", "#4CAF50")
      .attr("stroke-width", 2);

    childGroup
      .append("text")
      .attr("dy", "0.31em")
      .attr("text-anchor", "middle")
      .text(child.name)
      .attr("fill", "#fff")
      .attr("font-size", "14px")
      .attr("font-family", "Arial, sans-serif");

    // Calculate connection points
    const isLeft = x < parentX;
    const childConnectX = x + (isLeft ? nodeWidth / 2 : -nodeWidth / 2);
    const parentConnectX = parentX + (isLeft ? -nodeWidth / 2 : nodeWidth / 2);

    // Draw dotted connection for children
    const path = d3.path();
    path.moveTo(childConnectX, y);
    path.bezierCurveTo(
      (childConnectX + parentConnectX) / 2,
      y,
      (childConnectX + parentConnectX) / 2,
      parentY,
      parentConnectX,
      parentY
    );

    svg
      .append("path")
      .attr("class", "child-link")
      .attr("d", path.toString())
      .attr("stroke", "#4CAF50") // Matching child node border color
      .attr("stroke-width", 2)
      .attr("fill", "none")
      .attr("opacity", 0.7)
      .attr("stroke-dasharray", "5,5"); // Dotted line for child connections
  };

  return <div ref={d3Container} className="roadmap-container"></div>;
};

export default Roadmap;
