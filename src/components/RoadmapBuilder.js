import React, { useState, useEffect } from "react";
import ReactFlow, {
  Controls,
  Background,
  useNodesState,
  useEdgesState,
  addEdge,
  MiniMap,
  Handle,
} from "reactflow";
import "reactflow/dist/style.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useSelector } from "react-redux";
import Navbar from "./Navbar";
import Footer from "./Footer";
import AuthModal from "./AuthModal";
import "../styles/RoadmapBuilder.css";

// Define custom node types
const CustomNode = ({ data, isConnectable, selected }) => {
  return (
    <>
      <Handle
        type="target"
        position="top"
        id="top"
        isConnectable={isConnectable}
        style={{ background: "#555" }}
        className="connection-handle"
      />
      <Handle
        type="target"
        position="left"
        id="left"
        isConnectable={isConnectable}
        style={{ background: "#555" }}
        className="connection-handle"
      />
      <div style={{ padding: "10px", color: "#000" }}>
        <div style={{ fontWeight: "bold" }}>{data.label}</div>
      </div>
      <Handle
        type="source"
        position="right"
        id="right"
        isConnectable={isConnectable}
        style={{ background: "#555" }}
        className="connection-handle"
      />
      <Handle
        type="source"
        position="bottom"
        id="bottom"
        isConnectable={isConnectable}
        style={{ background: "#555" }}
        className="connection-handle"
      />
    </>
  );
};

const LineNode = ({ data, isConnectable, selected }) => {
  const isHorizontal = data.orientation === "horizontal";

  return (
    <>
      <Handle
        type="target"
        position={isHorizontal ? "left" : "top"}
        id={isHorizontal ? "left" : "top"}
        isConnectable={isConnectable}
        style={{ background: "#555" }}
        className="connection-handle"
      />
      <div style={{ color: "#000" }}></div>
      <Handle
        type="source"
        position={isHorizontal ? "right" : "bottom"}
        id={isHorizontal ? "right" : "bottom"}
        isConnectable={isConnectable}
        style={{ background: "#555" }}
        className="connection-handle"
      />
    </>
  );
};

// Register custom node types
const nodeTypes = {
  customNode: CustomNode,
  lineNode: LineNode,
};

const RoadmapBuilder = () => {
  const navigate = useNavigate();
  const { user, token } = useSelector((state) => state.auth);
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [roadmapTitle, setRoadmapTitle] = useState("My Custom Roadmap");
  const [roadmapDescription, setRoadmapDescription] = useState(
    "A personalized learning path"
  );

  // React Flow state
  const [nodes, setNodes, onNodesChange] = useNodesState([]);
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);
  const [selectedElement, setSelectedElement] = useState(null);
  const [selectedElementType, setSelectedElementType] = useState(null);

  // Background settings
  const [backgroundSettings, setBackgroundSettings] = useState({
    variant: "dots", // dots, lines, cross
    color: "#aaaaaa",
    gap: 16,
    size: 1,
  });

  // Color palette
  const [palette, setPalette] = useState({
    primary: "#FFD93D",
    secondary: "#FFE69A",
    connection: "#FFD93D",
    text: "#000000",
  });

  useEffect(() => {
    if (!token && !user) {
      setShowAuthModal(true);
    }
  }, [token, user]);

  // Handle connecting nodes
  const onConnect = (params) => {
    // Ensure we have valid source and target
    if (!params.source || !params.target) return;

    const newEdge = {
      ...params,
      id: `edge-${params.source}-${params.target}-${Date.now()}`,
      type: "smoothstep",
      animated: false,
      style: { stroke: palette.connection, strokeWidth: 3 },
    };
    setEdges((eds) => addEdge(newEdge, eds));
  };

  // Add a new node to the canvas
  const addNode = (type) => {
    const newNode = {
      id: `node-${Date.now()}`,
      type: "customNode", // Use our custom node type
      position: { x: 250, y: 250 },
      data: {
        label: "New Node",
        description: "Click to edit description",
        type: type,
      },
      style: {
        background: type === "primary" ? palette.primary : palette.secondary,
        borderRadius: "10px",
        border: "1px solid black",
        padding: "10px",
        width: 150,
      },
    };

    setNodes((nds) => [...nds, newNode]);
    setSelectedElement(newNode);
    setSelectedElementType("node");
  };

  // Add a line node (horizontal or vertical)
  const addLine = (orientation) => {
    const isHorizontal = orientation === "horizontal";
    const lineNode = {
      id: `line-${Date.now()}`,
      type: "lineNode", // Use our custom line node type
      position: { x: 250, y: 250 },
      data: {
        label: isHorizontal ? "Horizontal Line" : "Vertical Line",
        orientation: orientation,
      },
      style: {
        background: "transparent",
        border: "none",
        width: isHorizontal ? 200 : 5,
        height: isHorizontal ? 5 : 200,
        padding: 0,
        backgroundColor: palette.connection,
      },
    };

    setNodes((nds) => [...nds, lineNode]);
    setSelectedElement(lineNode);
    setSelectedElementType("node");
  };

  // Delete the selected element
  const deleteSelected = () => {
    if (!selectedElement) return;

    if (selectedElementType === "node") {
      setNodes((nds) => nds.filter((node) => node.id !== selectedElement.id));
      // Remove connected edges
      setEdges((eds) =>
        eds.filter(
          (edge) =>
            edge.source !== selectedElement.id &&
            edge.target !== selectedElement.id
        )
      );
    } else if (selectedElementType === "edge") {
      setEdges((eds) => eds.filter((edge) => edge.id !== selectedElement.id));
    }

    setSelectedElement(null);
    setSelectedElementType(null);
  };

  // Handle property changes for selected element
  const handlePropertyChange = (property, value) => {
    if (!selectedElement) return;

    if (selectedElementType === "node") {
      setNodes((nds) =>
        nds.map((node) => {
          if (node.id === selectedElement.id) {
            // Update node data or styles based on property
            if (property === "label" || property === "description") {
              return {
                ...node,
                data: { ...node.data, [property]: value },
              };
            } else if (property === "color") {
              return {
                ...node,
                style: {
                  ...node.style,
                  background: value,
                  backgroundColor: value,
                },
              };
            } else if (property === "width" || property === "height") {
              return {
                ...node,
                style: { ...node.style, [property]: parseInt(value) },
              };
            }
          }
          return node;
        })
      );

      // Update the selected element reference
      if (property === "label" || property === "description") {
        setSelectedElement((prev) => ({
          ...prev,
          data: { ...prev.data, [property]: value },
        }));
      } else if (
        property === "color" ||
        property === "width" ||
        property === "height"
      ) {
        setSelectedElement((prev) => ({
          ...prev,
          style: {
            ...prev.style,
            [property === "color" ? "background" : property]:
              property === "color" ? value : parseInt(value),
            ...(property === "color" ? { backgroundColor: value } : {}),
          },
        }));
      }
    } else if (selectedElementType === "edge") {
      setEdges((eds) =>
        eds.map((edge) => {
          if (edge.id === selectedElement.id) {
            if (property === "animated") {
              return { ...edge, animated: value };
            } else if (property === "type") {
              return { ...edge, type: value };
            } else if (property === "color") {
              return {
                ...edge,
                style: { ...edge.style, stroke: value },
              };
            }
          }
          return edge;
        })
      );

      // Update the selected element reference
      if (property === "animated" || property === "type") {
        setSelectedElement((prev) => ({ ...prev, [property]: value }));
      } else if (property === "color") {
        setSelectedElement((prev) => ({
          ...prev,
          style: { ...prev.style, stroke: value },
        }));
      }
    }
  };

  // Handle background setting changes
  const handleBackgroundChange = (property, value) => {
    setBackgroundSettings((prev) => ({
      ...prev,
      [property]: value,
    }));
  };

  // Element selection handler
  const onElementClick = (event, element) => {
    setSelectedElement(element);
    setSelectedElementType(element.source ? "edge" : "node");
  };

  // Save the roadmap
  const saveRoadmap = async () => {
    if (!user || !token) {
      setShowAuthModal(true);
      return;
    }

    try {
      const roadmapData = {
        title: roadmapTitle,
        description: roadmapDescription,
        structure: {
          nodes,
          edges,
        },
        settings: {
          palette,
          background: backgroundSettings,
        },
      };

      const response = await axios.post("/api/roadmaps/custom", roadmapData, {
        headers: {
          "x-auth-token": token,
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.data.success) {
        navigate(`/roadmap/${response.data.roadmapId}`, {
          state: { title: roadmapTitle, description: roadmapDescription },
        });
      }
    } catch (error) {
      console.error("Error saving roadmap:", error);
      alert("Failed to save roadmap. Please try again.");
    }
  };

  // Export the roadmap as JSON
  const exportRoadmap = () => {
    const roadmapData = {
      title: roadmapTitle,
      description: roadmapDescription,
      structure: {
        nodes,
        edges,
      },
      settings: {
        palette,
        background: backgroundSettings,
      },
    };

    const dataStr =
      "data:text/json;charset=utf-8," +
      encodeURIComponent(JSON.stringify(roadmapData, null, 2));

    const downloadAnchorNode = document.createElement("a");
    downloadAnchorNode.setAttribute("href", dataStr);
    downloadAnchorNode.setAttribute(
      "download",
      `${roadmapTitle.replace(/\s+/g, "-")}.json`
    );
    document.body.appendChild(downloadAnchorNode);
    downloadAnchorNode.click();
    downloadAnchorNode.remove();
  };

  // Import a roadmap from JSON
  const importRoadmap = (event) => {
    const file = event.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (e) => {
      try {
        const data = JSON.parse(e.target.result);
        if (data.title && data.description && data.structure) {
          setRoadmapTitle(data.title);
          setRoadmapDescription(data.description);
          setNodes(data.structure.nodes || []);
          setEdges(data.structure.edges || []);

          // Import settings if available
          if (data.settings) {
            if (data.settings.palette) {
              setPalette(data.settings.palette);
            }
            if (data.settings.background) {
              setBackgroundSettings(data.settings.background);
            }
          }
        } else {
          alert("Invalid roadmap file format");
        }
      } catch (error) {
        console.error("Error parsing roadmap file:", error);
        alert("Failed to import roadmap. Invalid file format.");
      }
    };
    reader.readAsText(file);
  };

  return (
    <div className="roadmap-builder">
      <Navbar />

      <div className="builder-container">
        <div className="builder-header">
          <h2>Create Your Custom Roadmap</h2>
          <div className="roadmap-meta">
            <input
              type="text"
              value={roadmapTitle}
              onChange={(e) => setRoadmapTitle(e.target.value)}
              className="title-input"
              placeholder="Roadmap Title"
            />
            <textarea
              value={roadmapDescription}
              onChange={(e) => setRoadmapDescription(e.target.value)}
              className="description-input"
              placeholder="Roadmap Description"
            />
          </div>
        </div>

        <div className="builder-body">
          <div className="toolbar">
            <div className="tool-section">
              <h3>Add Elements</h3>
              <button onClick={() => addNode("primary")} className="tool-btn">
                Add Primary Node
              </button>
              <button onClick={() => addNode("secondary")} className="tool-btn">
                Add Secondary Node
              </button>
              <button
                onClick={() => addLine("horizontal")}
                className="tool-btn"
              >
                Add Horizontal Line
              </button>
              <button onClick={() => addLine("vertical")} className="tool-btn">
                Add Vertical Line
              </button>
            </div>

            <div className="tool-section">
              <h3>Actions</h3>
              <button
                onClick={deleteSelected}
                className="tool-btn danger"
                disabled={!selectedElement}
              >
                Delete Selected
              </button>
            </div>

            <div className="tool-section">
              <h3>Colors</h3>
              <div className="color-picker">
                <label>Primary Node:</label>
                <input
                  type="color"
                  value={palette.primary}
                  onChange={(e) =>
                    setPalette({ ...palette, primary: e.target.value })
                  }
                />
              </div>
              <div className="color-picker">
                <label>Secondary Node:</label>
                <input
                  type="color"
                  value={palette.secondary}
                  onChange={(e) =>
                    setPalette({ ...palette, secondary: e.target.value })
                  }
                />
              </div>
              <div className="color-picker">
                <label>Connection:</label>
                <input
                  type="color"
                  value={palette.connection}
                  onChange={(e) =>
                    setPalette({ ...palette, connection: e.target.value })
                  }
                />
              </div>
            </div>

            <div className="tool-section">
              <h3>Background</h3>
              <div className="background-settings">
                <div className="property-group">
                  <label>Pattern:</label>
                  <select
                    value={backgroundSettings.variant}
                    onChange={(e) =>
                      handleBackgroundChange("variant", e.target.value)
                    }
                    className="select-input"
                  >
                    <option value="dots">Dots</option>
                    <option value="lines">Lines</option>
                    <option value="cross">Cross</option>
                  </select>
                </div>
                <div className="property-group">
                  <label>Color:</label>
                  <input
                    type="color"
                    value={backgroundSettings.color}
                    onChange={(e) =>
                      handleBackgroundChange("color", e.target.value)
                    }
                  />
                </div>
                <div className="property-group">
                  <label>Gap Size:</label>
                  <input
                    type="range"
                    min="8"
                    max="50"
                    value={backgroundSettings.gap}
                    onChange={(e) =>
                      handleBackgroundChange("gap", parseInt(e.target.value))
                    }
                  />
                  <span>{backgroundSettings.gap}px</span>
                </div>
                <div className="property-group">
                  <label>Pattern Size:</label>
                  <input
                    type="range"
                    min="0.5"
                    max="3"
                    step="0.1"
                    value={backgroundSettings.size}
                    onChange={(e) =>
                      handleBackgroundChange("size", parseFloat(e.target.value))
                    }
                  />
                  <span>{backgroundSettings.size}x</span>
                </div>
              </div>
            </div>

            <div className="tool-section">
              <h3>Roadmap</h3>
              <button onClick={saveRoadmap} className="tool-btn primary">
                Save Roadmap
              </button>
              <button onClick={exportRoadmap} className="tool-btn">
                Export Roadmap
              </button>
              <label className="file-input-btn">
                Import Roadmap
                <input
                  type="file"
                  accept=".json"
                  onChange={importRoadmap}
                  style={{ display: "none" }}
                />
              </label>
            </div>
          </div>

          <div
            className="canvas-container"
            style={{ height: 800, width: "100%" }}
          >
            <ReactFlow
              nodes={nodes}
              edges={edges}
              onNodesChange={onNodesChange}
              onEdgesChange={onEdgesChange}
              onConnect={onConnect}
              onNodeClick={onElementClick}
              onEdgeClick={onElementClick}
              nodeTypes={nodeTypes}
              fitView
              snapToGrid={true}
              snapGrid={[15, 15]}
              defaultEdgeOptions={{
                type: "smoothstep",
                style: { stroke: palette.connection, strokeWidth: 3 },
              }}
              connectionLineStyle={{
                stroke: palette.connection,
                strokeWidth: 3,
              }}
              connectionLineType="smoothstep"
            >
              <Controls />
              <MiniMap />
              <Background
                variant={backgroundSettings.variant}
                color={backgroundSettings.color}
                gap={backgroundSettings.gap}
                size={backgroundSettings.size}
              />
            </ReactFlow>
          </div>

          <div className="properties-panel">
            <h3>Properties</h3>
            {selectedElement ? (
              <div className="properties-form">
                {selectedElementType === "node" && (
                  <>
                    <div className="property-group">
                      <label>Name:</label>
                      <input
                        type="text"
                        value={selectedElement.data?.label || ""}
                        onChange={(e) =>
                          handlePropertyChange("label", e.target.value)
                        }
                      />
                    </div>

                    <div className="property-group">
                      <label>Width:</label>
                      <input
                        type="number"
                        value={selectedElement.style?.width || 150}
                        onChange={(e) =>
                          handlePropertyChange("width", e.target.value)
                        }
                        min="5"
                        max="500"
                      />
                    </div>
                    <div className="property-group">
                      <label>Height:</label>
                      <input
                        type="number"
                        value={selectedElement.style?.height || 40}
                        onChange={(e) =>
                          handlePropertyChange("height", e.target.value)
                        }
                        min="5"
                        max="500"
                      />
                    </div>
                    <div className="property-group">
                      <label>Color:</label>
                      <input
                        type="color"
                        value={
                          selectedElement.style?.background ||
                          selectedElement.style?.backgroundColor ||
                          palette.primary
                        }
                        onChange={(e) =>
                          handlePropertyChange("color", e.target.value)
                        }
                      />
                    </div>
                  </>
                )}

                {selectedElementType === "edge" && (
                  <>
                    <div className="property-group">
                      <label>Type:</label>
                      <select
                        value={selectedElement.type || "smoothstep"}
                        onChange={(e) =>
                          handlePropertyChange("type", e.target.value)
                        }
                      >
                        <option value="smoothstep">Curved</option>
                        <option value="straight">Straight</option>
                        <option value="step">Stepped</option>
                      </select>
                    </div>
                    <div className="property-group">
                      <label>Animated:</label>
                      <input
                        type="checkbox"
                        checked={selectedElement.animated || false}
                        onChange={(e) =>
                          handlePropertyChange("animated", e.target.checked)
                        }
                      />
                    </div>
                    <div className="property-group">
                      <label>Color:</label>
                      <input
                        type="color"
                        value={
                          selectedElement.style?.stroke || palette.connection
                        }
                        onChange={(e) =>
                          handlePropertyChange("color", e.target.value)
                        }
                      />
                    </div>
                  </>
                )}
              </div>
            ) : (
              <p>Select an element to edit its properties</p>
            )}
          </div>
        </div>
      </div>

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

export default RoadmapBuilder;
