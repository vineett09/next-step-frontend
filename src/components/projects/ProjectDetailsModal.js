import React, { useState, useEffect } from "react";
import "../../styles/projects/ProjectDetailsModal.css";

const ProjectDetailsModal = ({ project, roadmapId, onClose }) => {
  const [steps, setSteps] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Dynamically import the ProjectSteps file based on roadmapId
    const loadSteps = async () => {
      setLoading(true);
      try {
        let stepsModule;
        switch (roadmapId) {
          case "full-stack-developer":
            stepsModule = await import(
              "../../data/projects/guides/FullStackProjectSteps.js"
            );
            break;
          case "data-scientist":
            stepsModule = await import(
              "../../data/projects/guides/DataScienceProjectSteps.js"
            );
            break;
          case "android-developer":
            stepsModule = await import(
              "../../data/projects/guides/AndroidProjectSteps.js"
            );
          case "devops-engineer":
            stepsModule = await import(
              "../../data/projects/guides/DevopsProjectSteps.js"
            );
          case "artificial-intelligence":
            stepsModule = await import(
              "../../data/projects/guides/AIEngineerProjectSteps.js"
            );
            break;
          default:
            stepsModule = { default: {} };
        }
        setSteps(stepsModule.default[project.name] || []);
      } catch (error) {
        console.error("Error loading project steps:", error);
        setSteps([]);
      } finally {
        setLoading(false);
      }
    };

    loadSteps();
  }, [project.name, roadmapId]);

  return (
    <div className="modal-overlay-view">
      <div className="modal-content-view project-details-modal">
        <button className="close-button" onClick={onClose}>
          ✖
        </button>
        <h2>{project.name} - Step by Step Guide</h2>
        <p className="project-details-description">{project.description}</p>

        {loading ? (
          <p className="loading-message">Loading project details...</p>
        ) : steps.length > 0 ? (
          <div className="steps-container">
            {steps.map((step, index) => (
              <div key={index} className="step-card">
                <h3 className="step-title">
                  <span className="step-number">{index + 1}</span> {step.title}
                </h3>
                <div className="step-description">
                  {step.description.split("\n").map((paragraph, i) => (
                    <p key={i}>{paragraph}</p>
                  ))}
                </div>
                {step.code && (
                  <div className="code-block">
                    <pre>{step.code}</pre>
                  </div>
                )}
                {step.resources && (
                  <div className="step-resources">
                    <h4>Helpful Resources:</h4>
                    <ul>
                      {step.resources.map((resource, i) => (
                        <li key={i}>
                          <a
                            href={resource.url}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            {resource.title}
                          </a>
                          {resource.description && (
                            <p>{resource.description}</p>
                          )}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ))}
          </div>
        ) : (
          <div className="no-steps-message">
            <p>No detailed steps available for this project yet.</p>
            <p>
              Check back soon as we're continually adding new project guides!
            </p>
          </div>
        )}

        <div className="github-link-container">
          <p>You can also view this project on GitHub for reference:</p>
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="github-link"
          >
            View on GitHub
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetailsModal;
