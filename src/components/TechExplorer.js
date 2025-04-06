import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { techFields, techSkills } from "../data/TechFieldsData";
import Navbar from "./Navbar";
import Footer from "./Footer";
import "../styles/TechExplorer.css";

const TechExplorer = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");

  const handleItemClick = (item) => {
    navigate(item.link, {
      state: { title: item.title, description: item.description },
    });
  };

  const filteredFields = techFields.filter((field) =>
    field.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const filteredSkills = techSkills.filter((skill) =>
    skill.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="te-explorer">
      <Navbar />
      <div className="te-explorer-container">
        <section className="te-explorer-header">
          <h1>All Roadmaps</h1>
          <p>Discover all tech roles and skills to build your career roadmap</p>

          <div className="te-search-container">
            <input
              type="text"
              placeholder="Search fields and skills..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="te-search-input"
            />
          </div>

          <div className="te-tab-navigation">
            <button
              className={`te-tab-btn ${activeTab === "all" ? "active" : ""}`}
              onClick={() => setActiveTab("all")}
            >
              All
            </button>
            <button
              className={`te-tab-btn ${activeTab === "fields" ? "active" : ""}`}
              onClick={() => setActiveTab("fields")}
            >
              Tech Roles
            </button>
            <button
              className={`te-tab-btn ${activeTab === "skills" ? "active" : ""}`}
              onClick={() => setActiveTab("skills")}
            >
              Tech Skills
            </button>
          </div>
        </section>

        {(activeTab === "all" || activeTab === "fields") && (
          <section className="te-section">
            <h2>Tech Roles</h2>
            <div className="te-grid">
              {filteredFields.map((field) => (
                <div
                  key={field.id}
                  className="te-card"
                  onClick={() => handleItemClick(field)}
                >
                  <div className="te-icon">{field.icon}</div>
                  <h3>{field.title}</h3>
                  <p className="te-preview">
                    {field.description.substring(0, 70)}...
                  </p>
                </div>
              ))}
            </div>
          </section>
        )}

        {(activeTab === "all" || activeTab === "skills") && (
          <section className="te-section">
            <h2>Tech Skills</h2>
            <div className="te-grid">
              {filteredSkills.map((skill) => (
                <div
                  key={skill.id}
                  className="te-card"
                  onClick={() => handleItemClick(skill)}
                >
                  <div className="te-icon">{skill.icon}</div>
                  <h3>{skill.title}</h3>
                  <p className="te-preview">
                    {skill.description.substring(0, 70)}...
                  </p>
                </div>
              ))}
            </div>
          </section>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default TechExplorer;
