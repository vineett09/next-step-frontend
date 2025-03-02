// src/components/TechRoles.js
import React from "react";
import "../styles/roadmaps/TechRoles.css";
import { useNavigate } from "react-router-dom";
import { techFields } from "../data/TechFieldsData"; // Adjust path based on your structure

const roles = [
  "AI Engineer",
  "MLOps",
  "Cybersecurity",
  "DevOps Engineer",
  "Data Scientist",
  "Data Analyst",
  "Cloud Computing",
  "Blockchain Developer",
  "Full Stack Developer",
];

const TechRoles = () => {
  const navigate = useNavigate();

  const handleRoleClick = (role) => {
    // Find the corresponding tech field by title
    const field = techFields.find((f) => f.title === role);
    if (field) {
      navigate(field.link, {
        state: { title: field.title, description: field.description },
      });
    } else {
      console.warn(`No matching tech field found for role: ${role}`);
    }
  };

  return (
    <div className="role-card">
      <h2 className="card-title">Trending Tech Roles in 2025</h2>
      <div className="role-list">
        {roles.map((role, index) => (
          <span
            key={index}
            className="role-badge"
            onClick={() => handleRoleClick(role)}
            style={{ cursor: "pointer" }} // Visual cue for clickability
          >
            {role}
          </span>
        ))}
      </div>
    </div>
  );
};

export default TechRoles;
