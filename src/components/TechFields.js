// src/components/TechFields.js
import React from "react";
import "../styles/TechFields.css";
import { useNavigate } from "react-router-dom";
import { techFields, techSkills } from "../data/TechFieldsData"; // Adjust path as needed

const TechFields = () => {
  const navigate = useNavigate();

  const handleFieldClick = (field) => {
    navigate(field.link, {
      state: { title: field.title, description: field.description },
    });
  };

  return (
    <section className="tech-fields">
      <h2>Explore Tech Roles</h2>
      <div className="tech-grid">
        {techFields.map((field) => (
          <div
            key={field.id}
            className="tech-card"
            onClick={() => handleFieldClick(field)}
          >
            <div className="tech-icon">{field.icon}</div>
            <h3>{field.title}</h3>
          </div>
        ))}
      </div>

      <h2>Explore Tech Skills</h2>
      <div className="tech-grid">
        {techSkills.map((skill) => (
          <div
            key={skill.id}
            className="tech-card"
            onClick={() => handleFieldClick(skill)}
          >
            <div className="tech-icon">{skill.icon}</div>
            <h3>{skill.title}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TechFields;
