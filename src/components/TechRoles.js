import React from "react";
import "../styles/roadmaps/TechRoles.css";

const roles = [
  "AI Engineer",
  "MLOps",
  "Cybersecurity ",
  "DevOps Engineer",
  "Data Scientist",
  "Data Analyst",
  "Cloud Engineer",
  "Blockchain Developer",
  "Full Stack Developer",
];

const TechRoles = () => {
  return (
    <div className="role-card">
      <h2 className="card-title">Trending Tech Roles in 2025</h2>
      <div className="role-list">
        {roles.map((skill, index) => (
          <span key={index} className="role-badge">
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
};

export default TechRoles;
