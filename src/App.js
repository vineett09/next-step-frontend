// src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Roadmap from "./components/Roadmap";
import fullStackDeveloperRoadmap from "./data/FullStackDeveloper";
import Navbar from "./components/Navbar";
import Maincontent from "./components/Maincontent";
import dataScienceRoadmap from "./data/DataScience";
import aiEngineerRoadmap from "./data/ArtificialIntelligence";
import cybersecurityRoadmap from "./data/CyberSecurity";
import androidDeveloperRoadmap from "./data/AndroidDeveloper";
import mlOpsRoadmap from "./data/MLOps";
import cloudComputingRoadmap from "./data/CloudComputing";
import gameDevelopmentRoadmap from "./data/GameDevelopment";
import blockchainDeveloperRoadmap from "./data/Blockchain";
import devOpsRoadmap from "./data/Devops";
import Footer from "./components/Footer";
import roboticsRoadmap from "./data/Robotics";
import uiUxRoadmap from "./data/UI-UXDesigner";
import dataAnalystRoadmap from "./data/DataAnalyst";
import embeddedIotDeveloperRoadmap from "./data/EmbeddedIoTDeveloper";
import iotApplicationDeveloperRoadmap from "./data/IoTApplicationDeveloper";
import iosDeveloperRoadmap from "./data/IosDeveloper";
import frontendDeveloperRoadmap from "./data/FrontentDeveloper";
import backendDeveloperRoadmap from "./data/BackendDeveloper";
import quantumComputingRoadmap from "./data/QuantumComputing";
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
            path="/full-stack-developer"
            element={<Roadmap data={fullStackDeveloperRoadmap} />}
          />
          <Route
            path="/frontend-developer"
            element={<Roadmap data={frontendDeveloperRoadmap} />}
          />
          <Route
            path="/backend-developer"
            element={<Roadmap data={backendDeveloperRoadmap} />}
          />
          <Route
            path="/quantum-computing"
            element={<Roadmap data={quantumComputingRoadmap} />}
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
            path="/android-developer"
            element={<Roadmap data={androidDeveloperRoadmap} />}
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
          <Route
            path="/ui-ux-design"
            element={<Roadmap data={uiUxRoadmap} />}
          />
          <Route
            path="/data-analyst"
            element={<Roadmap data={dataAnalystRoadmap} />}
          />
          <Route
            path="/embedded-iot-developer"
            element={<Roadmap data={embeddedIotDeveloperRoadmap} />}
          />
          <Route
            path="/iot-application-developer"
            element={<Roadmap data={iotApplicationDeveloperRoadmap} />}
          />
          <Route
            path="/ios-developer"
            element={<Roadmap data={iosDeveloperRoadmap} />}
          />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
