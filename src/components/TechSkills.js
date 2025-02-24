import React from "react";
import "../styles/roadmaps/TechSkills.css";

const skills = [
  " Rust",
  "Golang",
  "Python",
  "Java",
  "Kotlin",
  "JavaScript",
  "SQL",
];

const TechSkills = () => {
  return (
    <div className="skills-card">
      <h2 className="card-title">Trending Languages in 2025</h2>
      <div className="skills-list">
        {skills.map((skill, index) => (
          <span key={index} className="skill-badge">
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
};

export default TechSkills;
