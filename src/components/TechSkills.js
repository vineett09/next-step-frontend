import React from "react";
import "../styles/roadmaps/TechSkills.css";
import { useNavigate } from "react-router-dom";
import { techSkills } from "../data/TechFieldsData";

const skills = [
  "Rust",
  "Golang",
  "Python",
  "Java",
  "Kotlin",
  "JavaScript",
  "SQL",
  "C++",
  "TypeScript",
];

const TechSkills = () => {
  const navigate = useNavigate();

  const handleSkillClick = (skillName) => {
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
    <div className="tech-cards skills-card">
      <h2 className="card-title">Trending Languages in 2025 🔥</h2>
      <div className="skills-list">
        {skills.map((skill, index) => (
          <button
            key={index}
            className="skills-badge"
            onClick={() => handleSkillClick(skill)}
          >
            {skill}
          </button>
        ))}
      </div>
    </div>
  );
};

export default TechSkills;
