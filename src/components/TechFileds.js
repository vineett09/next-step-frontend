// src/components/TechFields.js
import React, { useState } from "react";
import "../styles/TechFields.css";
import { useNavigate } from "react-router-dom";
const techFields = [
  {
    id: 1,
    title: "Web Development",
    icon: "💻",
    link: "/web-development",
  },
  {
    id: 2,
    title: "Data Science",
    icon: "📊",
    link: "/data-science",
  },
  {
    id: 3,
    title: "Artificial Intelligence",
    icon: "🤖",
    link: "/artificial-intelligence",
  },
  {
    id: 4,
    title: "Cybersecurity",
    icon: "🔒",
    link: "/cybersecurity",
  },
  {
    id: 5,
    title: "Cloud Computing",
    icon: "☁️",
    link: "/cloud-computing",
  },
  {
    id: 6,
    title: "Mobile Development",
    icon: "📱",
    link: "/mobile-development",
  },
  {
    id: 7,
    title: "Blockchain",
    icon: "🔑",
    link: "/blockchain",
  },
  {
    id: 8,
    title: "Game Development",
    icon: "🎮",
    link: "/game-development",
  },
  {
    id: 9,
    title: "Machine Learning",
    icon: "🧠",
    link: "/machine-learning",
  },
  {
    id: 10,
    title: "Robotics",
    icon: "🤖",
    link: "/robotics",
  },
  {
    id: 11,
    title: "IoT",
    icon: "📱",
    link: "/iot",
  },
  {
    id: 12,
    title: "Virtual Reality",
    icon: "🎮",
    link: "/virtual-reality",
  },
  {
    id: 13,
    title: "Augmented Reality",
    icon: "🎮",
    link: "/augmented-reality",
  },
  {
    id: 14,
    title: "Quantum Computing",
    icon: "🔑",
    link: "/quantum-computing",
  },
  {
    id: 15,
    title: "Database",
    icon: "💻",
    link: "/database",
  },
  {
    id: 16,
    title: "Computer Vision",
    icon: "🔍",
    link: "/computer-vision",
  },
  {
    id: 17,
    title: "Natural Language Processing",
    icon: "💻",
    link: "/natural-language-processing",
  },
  {
    id: 18,
    title: "DevOps",
    icon: "🔄",
    link: "/devops",
  },
  {
    id: 19,
    title: "UI/UX Design	",
    icon: "🎨",
    link: "/ui-ux-design",
  },
  {
    id: 20,
    title: "Embedded Systems",
    icon: "🔧",
    link: "/embedded-systems",
  },
];

const techSkills = [
  {
    id: 1,
    title: "JavaScript",
    icon: "🟨",
    link: "/javascript",
  },
  {
    id: 2,
    title: "Python",
    icon: "🐍",
    link: "/python",
  },
  {
    id: 3,
    title: "React",
    icon: "⚛️",
    link: "/react",
  },
  {
    id: 4,
    title: "Node.js",
    icon: "🟩",
    link: "/nodejs",
  },
  {
    id: 5,
    title: "SQL",
    icon: "🗃️",
    link: "/sql",
  },
  {
    id: 6,
    title: "Docker",
    icon: "🐳",
    link: "/docker",
  },
  {
    id: 7,
    title: "Kubernetes",
    icon: "☸️",
    link: "/kubernetes",
  },
  {
    id: 8,
    title: "TensorFlow",
    icon: "🧠",
    link: "/tensorflow",
  },
  {
    id: 9,
    title: "Git",
    icon: "🐙",
    link: "/git",
  },
  {
    id: 10,
    title: "AWS",
    icon: "☁️",
    link: "/aws",
  },
  {
    id: 11,
    title: "Azure",
    icon: "🔷",
    link: "/azure",
  },
  {
    id: 12,
    title: "Linux",
    icon: "🐧",
    link: "/linux",
  },
  {
    id: 13,
    title: "Java",
    icon: "☕",
    link: "/java",
  },
  {
    id: 14,
    title: "C++",
    icon: "➕",
    link: "/cpp",
  },
  {
    id: 15,
    title: "Rust",
    icon: "🦀",
    link: "/rust",
  },
  {
    id: 16,
    title: "Go",
    icon: "🐹",
    link: "/go",
  },
  {
    id: 17,
    title: "Ruby",
    icon: "💎",
    link: "/ruby",
  },
  {
    id: 18,
    title: "Swift",
    icon: "🐦",
    link: "/swift",
  },
  {
    id: 19,
    title: "Kotlin",
    icon: "🟪",
    link: "/kotlin",
  },
  {
    id: 20,
    title: "PHP",
    icon: "🐘",
    link: "/php",
  },
  {
    id: 21,
    title: "C",
    icon: "🟩",
    link: "/c",
  },
  {
    id: 22,
    title: "TypeScript",
    icon: "🟦",
    link: "/typescript",
  },
  {
    id: 23,
    title: "Angular",
    icon: "🅰️",
    link: "/angular",
  },
  {
    id: 24,
    title: "Vue.js",
    icon: "🟩",
    link: "/vuejs",
  },
  {
    id: 25,
    title: "Django",
    icon: "🌐",
    link: "/django",
  },
  {
    id: 26,
    title: "Flask",
    icon: "✨",
    link: "/flask",
  },
  {
    id: 27,
    title: "Python",
    icon: "🐍",
    link: "/python",
  },
  {
    id: 28,
    title: "MongoDB",
    icon: "🍃",
    link: "/mongodb",
  },
  {
    id: 29,
    title: "PostgreSQL",
    icon: "🐘",
    link: "/postgresql",
  },
  {
    id: 30,
    title: "Firebase",
    icon: "🔥",
    link: "/firebase",
  },
  {
    id: 31,
    title: "GraphQL",
    icon: "🔗",
    link: "/graphql",
  },
  {
    id: 32,
    title: "REST APIs",
    icon: "🔌",
    link: "/rest-apis",
  },
  {
    id: 33,
    title: "Selenium",
    icon: "🔍",
    link: "/selenium",
  },
];
const TechFields = () => {
  const navigate = useNavigate();

  const handleFieldClick = (field) => {
    navigate(field.link, { state: { title: field.title } }); // Send the title to Roadmap.js
  };

  return (
    <section className="tech-fields">
      {/* Tech Fields Section */}
      <h2>Explore Tech Fields</h2>
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

      {/* Tech Skills Section */}
      <h2>Explore Tech Skills</h2>
      <div className="tech-grid">
        {techSkills.map((skill) => (
          <div
            key={skill.id}
            className="tech-card"
            onClick={() => handleFieldClick(skill.link)}
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
