import React, { useState, useEffect } from "react";
import ReactFlow, { Controls, Background, MiniMap } from "reactflow";
import "reactflow/dist/style.css";
import { useParams, useNavigate } from "react-router-dom"; // Added useNavigate
import axios from "axios";
import Navbar from "./Navbar";
import Footer from "./Footer";
import "../styles/SharedRoadmapViewer.css";
import { nodeTypes } from "./CustomRoadmaps";

const SharedRoadmapViewer = () => {
  const { id } = useParams();
  const navigate = useNavigate(); // Added for navigation
  const [roadmap, setRoadmap] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPublicRoadmap = async () => {
      try {
        setLoading(true);
        const response = await axios.get(`/api/roadmaps/public/${id}`);

        if (response.data.success) {
          setRoadmap(response.data.roadmap);
        } else {
          setError(response.data.message || "Failed to load roadmap");
        }
      } catch (err) {
        console.error("Error fetching public roadmap:", err);
        setError("Failed to load roadmap. It might be private or not exist.");
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchPublicRoadmap();
    }
  }, [id]);

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
    <div className="public-roadmap-viewer">
      <Navbar />
      <div className="viewer-container">
        <div className="viewer-header">
          <div className="header-content">
            {" "}
            <button
              className="previous-button"
              onClick={() => navigate(-1)} // Goes back to previous page
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                <path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z" />
              </svg>
              <span>Back</span>
            </button>
            <h2>{title}</h2>
            <p className="roadmap-description">{description}</p>
            <h1>Created by {roadmap.createdBy?.username || "Unknown"}</h1>
          </div>
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

export default SharedRoadmapViewer;
