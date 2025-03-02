// src/components/TechSkills.js
import React from "react";
import "../styles/roadmaps/TechSkills.css";
import { useNavigate } from "react-router-dom";
import { techSkills } from "../data/TechFieldsData"; // Adjust path based on your structure

const skills = [
  "Rust",
  "Golang",
  "Python",
  "Java",
  "Kotlin",
  "JavaScript",
  "SQL",
];

const TechSkills = () => {
  const navigate = useNavigate();

  const handleSkillClick = (skillName) => {
    // Find the corresponding tech skill by title
    const skill = techSkills.find((s) => s.title === skillName.trim());
    if (skill) {
      navigate(skill.link, {
        state: { title: skill.title, description: skill.description },
      });
    } else {
      console.warn(`No matching tech skill found for: ${skillName}`);
    }
  };

  return (
    <div className="skills-card">
      <h2 className="card-title">Trending Languages in 2025</h2>
      <div className="skills-list">
        {skills.map((skill, index) => (
          <span
            key={index}
            className="skills-badge"
            onClick={() => handleSkillClick(skill)}
            style={{ cursor: "pointer" }} // Visual cue for clickability
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
};

export default TechSkills;
