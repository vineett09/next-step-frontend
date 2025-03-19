// src/components/projects/ProjectsModal.js
import React, { useState, useEffect } from "react";
import "../../styles/projects/ProjectsModal.css";
import ProjectDetailsModal from "./ProjectDetailsModal";

const ProjectsModal = ({ roadmapId, onClose }) => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    const loadProjects = async () => {
      try {
        let module;
        switch (roadmapId) {
          case "full-stack-developer":
            module = await import("../../data/projects/FullStackProjects.js");
            break;
          case "data-scientist":
            module = await import("../../data/projects/DataScienceProjects.js");
            break;
          case "android-developer":
            module = await import("../../data/projects/AndroidProjects.js");
            break;
          case "devops-engineer":
            module = await import("../../data/projects/DevopsProjects.js");
            break;
          case "artificial-intelligence":
            module = await import("../../data/projects/AIEngineerProjects.js");
            break;
          default:
            module = { default: [] };
        }
        setProjects(module.default);
      } catch (error) {
        console.error("Error loading projects:", error);
      } finally {
        setLoading(false);
      }
    };

    loadProjects();
  }, [roadmapId]);

  const handleViewProject = (project) => {
    setSelectedProject(project);
  };

  const handleCloseDetails = () => {
    setSelectedProject(null);
  };

  return (
    <>
      <div className="modal-overlay-view">
        <div className="modal-content-view">
          <button className="close-button" onClick={onClose}>
            ✖
          </button>
          <h2>
            Practice Projects for {roadmapId.replace("-", " ").toUpperCase()}
          </h2>

          {loading ? (
            <p className="loading-text">Loading projects...</p>
          ) : projects.length > 0 ? (
            <div className="projects-grid">
              {projects.map((project, index) => (
                <div key={index} className="project-card">
                  <div className={`badge ${project.level.toLowerCase()}`}>
                    {project.level}
                  </div>
                  <h3 className="project-name">{project.name}</h3>
                  <p>{project.description}</p>
                  <button
                    onClick={() => handleViewProject(project)}
                    className="view-project-btn"
                  >
                    View Guide
                  </button>
                </div>
              ))}
            </div>
          ) : (
            <p className="no-projects-text">
              No projects found for this roadmap.
            </p>
          )}
        </div>
      </div>

      {selectedProject && (
        <ProjectDetailsModal
          project={selectedProject}
          roadmapId={roadmapId}
          onClose={handleCloseDetails}
        />
      )}
    </>
  );
};

export default ProjectsModal;
