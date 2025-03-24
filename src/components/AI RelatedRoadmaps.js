// src/components/AIRelatedRoadmaps.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import { techFields, techSkills } from "../data/TechFieldsData";
import "../styles/RelatedRoadmaps.css"; // Reuse the same styles

const AIRelatedRoadmaps = ({ userAnswers }) => {
  const navigate = useNavigate();

  const getRelatedRoadmaps = () => {
    if (!userAnswers || !userAnswers.careerGoals) return [];

    const allRoadmaps = [...techFields, ...techSkills];

    // Find relevant roadmaps based on career goals and preferences
    const scoredRoadmaps = allRoadmaps.map((roadmap) => {
      let score = 0;

      // Match with career goals
      if (
        roadmap.title
          .toLowerCase()
          .includes(userAnswers.careerGoals.toLowerCase())
      ) {
        score += 40;
      }

      // Match with preference (frontend/backend)
      if (
        userAnswers.preference &&
        roadmap.title
          .toLowerCase()
          .includes(userAnswers.preference.toLowerCase())
      ) {
        score += 30;
      }

      // Match with current knowledge
      if (Array.isArray(userAnswers.currentKnowledge)) {
        userAnswers.currentKnowledge.forEach((skill) => {
          if (
            roadmap.title.toLowerCase().includes(skill.toLowerCase()) ||
            roadmap.description.toLowerCase().includes(skill.toLowerCase())
          ) {
            score += 20;
          }
        });
      }

      // Score based on complementary technologies
      if (
        areComplementaryTechnologies(userAnswers.careerGoals, roadmap.title)
      ) {
        score += 25;
      }

      return { roadmap, score };
    });

    // Sort by score and take top 4
    scoredRoadmaps.sort((a, b) => b.score - a.score);
    return scoredRoadmaps.slice(0, 4).map((item) => item.roadmap);
  };

  const areComplementaryTechnologies = (tech1, tech2) => {
    const complementaryPairs = [
      ["React", "Node.js"],
      ["Angular", "Spring Boot"],
      ["Vue.js", "PHP"],
      ["Android", "Kotlin"],
      ["iOS", "Swift"],
      ["Mobile", "Flutter"],
      ["Python", "TensorFlow"],
      ["Data Scientist", "SQL"],
      ["Machine Learning", "Data Analyst"],
      ["Docker", "Kubernetes"],
      ["AWS", "Terraform"],
      ["DevOps", "Git"],
      ["Frontend", "Backend"],
      ["JavaScript", "Node.js"],
      ["Full Stack", "React"],
      ["Cloud Computing", "AWS"],
      ["Azure", "DevOps"],
      ["Kubernetes", "Cloud"],
      ["Cybersecurity", "Blockchain"],
      ["Security", "Linux"],
      ["IoT", "Embedded"],
      ["Robotics", "C++"],
      ["IoT", "Cloud"],
      ["Web Developer", "JavaScript"],
      ["Web Developer", "React"],
      ["Web Developer", "Node.js"],
      ["Mobile App Developer", "Flutter"],
      ["Mobile App Developer", "React Native"],
      ["Data Scientist", "Python"],
      ["AI/ML Engineer", "TensorFlow"],
      ["DevOps Engineer", "Docker"],
      ["Cloud Computing Specialist", "AWS"],
      ["Blockchain Developer", "Solidity"],
      ["Game Developer", "Unity"],
      ["UI/UX Designer", "Figma"],
    ];

    tech1 = tech1.toLowerCase();
    tech2 = tech2.toLowerCase();

    return complementaryPairs.some(
      ([a, b]) =>
        (tech1.includes(a.toLowerCase()) && tech2.includes(b.toLowerCase())) ||
        (tech1.includes(b.toLowerCase()) && tech2.includes(a.toLowerCase()))
    );
  };

  const handleRoadmapClick = (roadmap) => {
    navigate(roadmap.link, {
      state: { title: roadmap.title, description: roadmap.description },
    });
  };

  const relatedRoadmaps = getRelatedRoadmaps();

  if (relatedRoadmaps.length === 0) return null;

  return (
    <div className="related-roadmaps">
      <h2>
        <span className="line"></span> Related Learning Paths You Might Like 🚀{" "}
        <span className="line"></span>
      </h2>

      <div className="tech-grid-container-outer">
        <div className="tech-grid-container">
          {relatedRoadmaps.map((roadmap) => (
            <div
              key={roadmap.id}
              className="tech-card-container"
              onClick={() => handleRoadmapClick(roadmap)}
            >
              <div className="tech-title-group">
                <div className="tech-icon-container">{roadmap.icon}</div>
                <h3>{roadmap.title}</h3>
              </div>
              <div className="roadmap-description">
                <p>{`A comprehensive roadmap to achieve ${roadmap.title} field in 2025.`}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AIRelatedRoadmaps;
