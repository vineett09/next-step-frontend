// src/components/Roadmap.js
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
      const width = 1200; // Increased width to accommodate side children
      const height = 600; // Height of the container
      const margin = { top: 50, right: 50, bottom: 50, left: 50 };

      const svg = d3
        .select(d3Container.current)
        .append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
        .append("g")
        .attr("transform", `translate(${margin.left},${margin.top})`);

      // Create a flat array of nodes
      const nodes = data.children;

      // Calculate the spacing between parent nodes
      const nodeSpacing = height / (nodes.length - 1);

      // Function to draw nodes and their children
      const drawNodes = (parentNode, nodes, xOffset, yOffset) => {
        nodes.forEach((node, i) => {
          const nodeGroup = parentNode
            .append("g")
            .attr("class", "node")
            .attr(
              "transform",
              `translate(${xOffset},${yOffset + i * nodeSpacing})`
            );

          // Add rectangles for nodes
          nodeGroup
            .append("rect")
            .attr("width", 100) // Width of the box
            .attr("height", 50) // Height of the box
            .attr("x", -50) // Center the box horizontally
            .attr("y", -25) // Center the box vertically
            .attr("rx", 10) // Rounded corners
            .attr("ry", 10) // Rounded corners
            .attr("fill", "#4CAF50") // Green color for nodes
            .attr("stroke", "#388E3C") // Darker green border
            .attr("stroke-width", 2);

          // Add text for nodes
          nodeGroup
            .append("text")
            .attr("dy", "0.31em")
            .attr("x", 0) // Center text horizontally
            .attr("y", 0) // Center text vertically
            .attr("text-anchor", "middle") // Center text
            .text((d) => node.name)
            .attr("fill", "#fff") // White text color
            .attr("font-size", "14px")
            .attr("font-family", "Arial, sans-serif");

          // Draw children nodes if they exist
          if (node.children) {
            drawNodes(
              parentNode,
              node.children,
              xOffset + 200,
              yOffset + i * nodeSpacing
            ); // Move children to the right of the parent node
          }
        });
      };

      // Function to draw curved links between parent nodes (main roadmap)
      const drawParentLinks = (parentNode, nodes, xOffset, yOffset) => {
        const linkGenerator = d3
          .linkVertical()
          .x((d) => d.x)
          .y((d) => d.y);

        nodes.slice(1).forEach((node, i) => {
          const source = { x: xOffset, y: yOffset + i * nodeSpacing };
          const target = { x: xOffset, y: yOffset + (i + 1) * nodeSpacing };

          parentNode
            .append("path")
            .attr("class", "link")
            .attr("d", linkGenerator({ source, target }))
            .attr("stroke", "#888")
            .attr("stroke-width", 2)
            .attr("fill", "none")
            .attr("opacity", 0.7);
        });
      };

      // Function to draw curved links between parent and child nodes
      const drawChildLinks = (parentNode, nodes, xOffset, yOffset) => {
        const linkGenerator = d3
          .linkHorizontal()
          .x((d) => d.x)
          .y((d) => d.y);

        nodes.forEach((node, i) => {
          if (node.children) {
            node.children.forEach((child, j) => {
              const source = { x: xOffset + 50, y: yOffset + i * nodeSpacing }; // End of parent node
              const target = {
                x: xOffset + 200,
                y: yOffset + i * nodeSpacing + j * 60,
              }; // Start of child node

              // Draw the curved link only once between parent and child
              parentNode
                .append("path")
                .attr("class", "link")
                .attr("d", linkGenerator({ source, target }))
                .attr("stroke", "#888")
                .attr("stroke-width", 2)
                .attr("fill", "none")
                .attr("opacity", 0.7);
            });
          }
        });
      };

      // Draw nodes and their children
      drawNodes(svg, nodes, width / 2, 0);

      // Draw parent links (main roadmap)
      drawParentLinks(svg, nodes, width / 2, 0);

      // Draw child links (parent to children)
      drawChildLinks(svg, nodes, width / 2, 0);
    }
  }, [data]);

  return <div ref={d3Container} className="roadmap-container"></div>;
};

export default Roadmap;
