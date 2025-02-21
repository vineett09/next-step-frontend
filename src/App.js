// src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Roadmap from "./components/Roadmap";
import webDevelopmentRoadmap from "./data/WebDevelopement";
import Navbar from "./components/Navbar";
import Maincontent from "./components/Maincontent";
import dataScienceRoadmap from "./data/DataScience";
import artificialIntelligenceRoadmap from "./data/ArtificialIntelligence";
import cybersecurityRoadmap from "./data/CyberSecurity";
import mobileDevelopmentRoadmap from "./data/MobileDevelopement";
import machineLearningRoadmap from "./data/MachineLearning";
import cloudComputingRoadmap from "./data/CloudComputing";
import blockchainDeveloperRoadmap from "./data/Blockchain";
import Footer from "./components/Footer";
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
          <Route
            path="/machine-learning"
            element={<Roadmap data={machineLearningRoadmap} />}
          />
          <Route
            path="/data-science"
            element={<Roadmap data={dataScienceRoadmap} />}
          />
          <Route
            path="/artificial-intelligence"
            element={<Roadmap data={artificialIntelligenceRoadmap} />}
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
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
