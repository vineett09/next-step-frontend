// src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Roadmap from "./components/Roadmap";
import webDevelopmentRoadmap from "./data/WebDevelopement";
import Navbar from "./components/Navbar";
import Maincontent from "./components/Maincontent";

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
        </Routes>
      </div>
    </Router>
  );
}

export default App;
