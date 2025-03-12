import React, { useState, useEffect } from "react";
import ReactFlow, { Controls, Background, MiniMap } from "reactflow";
import "reactflow/dist/style.css";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useSelector } from "react-redux";
import Navbar from "./Navbar";
import Footer from "./Footer";
import "../styles/CustomRoadmapViewer.css";
import { nodeTypes } from "./CustomRoadmaps"; // Import the node types from your existing component

const CustomRoadmapViewer = () => {
  const { id } = useParams();
  const { token } = useSelector((state) => state.auth);
  const [roadmap, setRoadmap] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRoadmap = async () => {
      try {
        setLoading(true);
        const response = await axios.get(`/api/roadmaps/${id}`, {
          headers: {
            "x-auth-token": token,
            Authorization: `Bearer ${token}`,
          },
        });

        if (response.data) {
          console.log("Roadmap data:", response.data);
          console.log("Nodes:", response.data.structure?.nodes);
          console.log("Edges:", response.data.structure?.edges);
          setRoadmap(response.data.roadmap);
        } else {
          setError("Failed to load roadmap");
        }
      } catch (err) {
        console.error("Error fetching roadmap:", err);
        setError("Failed to load roadmap. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchRoadmap();
    }
  }, [id, token]);

  if (loading) {
    return <div className="roadmap-viewer-loading">Loading roadmap...</div>;
  }

  if (error) {
    return <div className="roadmap-viewer-error">{error}</div>;
  }

  if (!roadmap) {
    return <div className="roadmap-viewer-error">Roadmap not found</div>;
  }

  const { title, description, structure = {}, settings = {} } = roadmap;
  const { nodes = [], edges = [] } = structure || {};
  const {
    background = { variant: "dots", color: "#aaaaaa", gap: 16, size: 1 },
  } = settings;

  return (
    <div className="roadmap-viewer">
      <Navbar />

      <div className="viewer-container">
        <div className="viewer-header">
          <h1>Created by {roadmap.createdBy?.username}</h1>
          <h2>{title}</h2>
          <p className="roadmap-description">{description}</p>
        </div>

        <div className="viewer-body">
          <div
            className="canvas-container"
            style={{ height: 800, width: "100%" }}
          >
            <ReactFlow
              nodes={nodes}
              edges={edges}
              nodeTypes={nodeTypes}
              fitView
              fitViewOptions={{ padding: 0.2 }}
              defaultViewport={{ x: 0, y: 0, zoom: 1 }}
              zoomOnScroll={true}
              panOnScroll={true}
              nodesDraggable={false}
              nodesConnectable={false}
              elementsSelectable={false}
            >
              <Controls showInteractive={false} />
              <MiniMap />
              <Background
                variant={background.variant}
                color={background.color}
                gap={background.gap}
                size={background.size}
              />
            </ReactFlow>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default CustomRoadmapViewer;
