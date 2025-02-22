// src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Roadmap from "./components/Roadmap";
import webDevelopmentRoadmap from "./data/WebDevelopement";
import Navbar from "./components/Navbar";
import Maincontent from "./components/Maincontent";
import dataScienceRoadmap from "./data/DataScience";
import aiEngineerRoadmap from "./data/ArtificialIntelligence";
import cybersecurityRoadmap from "./data/CyberSecurity";
import mobileDevelopmentRoadmap from "./data/MobileDevelopement";
import mlOpsRoadmap from "./data/MLOps";
import cloudComputingRoadmap from "./data/CloudComputing";
import gameDevelopmentRoadmap from "./data/GameDevelopment";
import blockchainDeveloperRoadmap from "./data/Blockchain";
import devOpsRoadmap from "./data/Devops";
import Footer from "./components/Footer";
import roboticsRoadmap from "./data/Robotics";
function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          {/* Homepage */}
          <Route path="/" element={<Maincontent />} />

          {/* Tech Fields */}
          <Route
            path="/web-development"
            element={<Roadmap data={webDevelopmentRoadmap} />}
          />
          <Route path="/mLOps" element={<Roadmap data={mlOpsRoadmap} />} />
          <Route
            path="/data-science"
            element={<Roadmap data={dataScienceRoadmap} />}
          />
          <Route
            path="/artificial-intelligence"
            element={<Roadmap data={aiEngineerRoadmap} />}
          />
          <Route
            path="/cybersecurity"
            element={<Roadmap data={cybersecurityRoadmap} />}
          />
          <Route
            path="/mobile-development"
            element={<Roadmap data={mobileDevelopmentRoadmap} />}
          />
          <Route
            path="/cloud-computing"
            element={<Roadmap data={cloudComputingRoadmap} />}
          />
          <Route
            path="/blockchain"
            element={<Roadmap data={blockchainDeveloperRoadmap} />}
          />
          <Route path="/devops" element={<Roadmap data={devOpsRoadmap} />} />
          <Route
            path="/game-development"
            element={<Roadmap data={gameDevelopmentRoadmap} />}
          />
          <Route
            path="/robotics"
            element={<Roadmap data={roboticsRoadmap} />}
          />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
