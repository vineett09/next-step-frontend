import React, { useState, useEffect } from "react";
import ReactFlow, { Controls, Background, MiniMap } from "reactflow";
import "reactflow/dist/style.css";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { useSelector } from "react-redux";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Loader from "./Loader";
import "../styles/CustomRoadmapViewer.css";
import { nodeTypes } from "./CustomRoadmaps";

const CustomRoadmapViewer = () => {
  const { id } = useParams();
  const { token } = useSelector((state) => state.auth);
  const [roadmap, setRoadmap] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

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
    return (
      <div className="roadmap-viewer__loading">
        <Loader loading={true} />
        <p>Loading roadmap...</p>
      </div>
    );
  }

  if (error) {
    return <div className="roadmap-viewer__error">{error}</div>;
  }

  if (!roadmap) {
    return <div className="roadmap-viewer__error">Roadmap not found</div>;
  }

  const { title, description, structure = {}, settings = {} } = roadmap;
  const { nodes = [], edges = [] } = structure || {};
  const {
    background = { variant: "dots", color: "#aaaaaa", gap: 16, size: 1 },
  } = settings;

  return (
    <div className="roadmap-viewer">
      <Navbar />

      <div className="roadmap-viewer__container">
        <div className="roadmap-viewer__header">
          <button className="goBack-button" onClick={() => navigate(-1)}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
              <path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z" />
            </svg>
            <span>Back</span>
          </button>
          <h2 className="roadmap-viewer__title">{title}</h2>
          <p className="roadmap-viewer__description">{description}</p>
        </div>

        <div className="roadmap-viewer__body">
          <div
            className="roadmap-viewer__canvas"
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
