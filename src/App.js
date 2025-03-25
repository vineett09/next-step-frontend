import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import ProtectedRoute from "./components/ProtectedRoute";
import Register from "./components/Register";
import Roadmap from "./components/Roadmap";
import Profile from "./components/Profile";
import fullStackDeveloperRoadmap from "./data/techroles/FullStackDeveloper";
import Maincontent from "./components/Maincontent";
import dataScienceRoadmap from "./data/techroles/DataScience";
import aiEngineerRoadmap from "./data/techroles/ArtificialIntelligence";
import cybersecurityRoadmap from "./data/techroles/CyberSecurity";
import androidDeveloperRoadmap from "./data/techroles/AndroidDeveloper";
import mlOpsRoadmap from "./data/techroles/MLOps";
import cloudComputingRoadmap from "./data/techroles/CloudComputing";
import gameDevelopmentRoadmap from "./data/techroles/GameDevelopment";
import blockchainDeveloperRoadmap from "./data/techroles/Blockchain";
import devOpsRoadmap from "./data/techroles/Devops";
import roboticsRoadmap from "./data/techroles/Robotics";
import uiUxRoadmap from "./data/techroles/UI-UXDesigner";
import dataAnalystRoadmap from "./data/techroles/DataAnalyst";
import embeddedIotDeveloperRoadmap from "./data/techroles/EmbeddedIoTDeveloper";
import iotApplicationDeveloperRoadmap from "./data/techroles/IoTApplicationDeveloper";
import iosDeveloperRoadmap from "./data/techroles/IosDeveloper";
import frontendDeveloperRoadmap from "./data/techroles/FrontentDeveloper";
import backendDeveloperRoadmap from "./data/techroles/BackendDeveloper";
import reactDeveloperRoadmap from "./data/techskills/React";
import javascriptDeveloperRoadmap from "./data/techskills/Javascript";
import pythonDeveloperRoadmap from "./data/techskills/Python";
import nodejsDeveloperRoadmap from "./data/techskills/Nodejs";
import sqldeveloperRoadmap from "./data/techskills/SQL";
import dockerRoadmap from "./data/techskills/Docker";
import kubernetesRoadmap from "./data/techskills/Kubernetes";
import tensorflowRoadmap from "./data/techskills/Tensorflow";
import gitandGithubRoadmap from "./data/techskills/GitandGithub";
import awsRoadmap from "./data/techskills/AWS";
import microsoftAzureRoadmap from "./data/techskills/MicrosoftAzure";
import linuxRoadmap from "./data/techskills/Linux";
import JavaDeveloper from "./data/techskills/Java";
import cppRoadmap from "./data/techskills/Cpp";
import rustRoadmap from "./data/techskills/Rust";
import golangRoadmap from "./data/techskills/Golang";
import rubyRoadmap from "./data/techskills/Ruby";
import phpRoadmap from "./data/techskills/Php";
import kotlinRoadmap from "./data/techskills/Kotlin";
import monogodbRoadmap from "./data/techskills/MongoDB";
import typescriptRoadmap from "./data/techskills/Typescript";
import angularRoadmap from "./data/techskills/Angular";
import VueRoadmap from "./data/techskills/Vue";
import flutterRoadmap from "./data/techskills/Flutter";
import terraformRoadmap from "./data/techskills/Terraform";
import redisRoadmap from "./data/techskills/Redis";
import springbootRoadmap from "./data/techskills/SpringBoot";
import grapgqlRoadmap from "./data/techskills/GraphQL";
import AIRoadmap from "./components/AI Roadmap";
import CustomRoadmaps from "./components/CustomRoadmaps";
import CustomRoadmapEditor from "./components/CustomRoadmapEditor";
import SharedRoadmaps from "./components/SharedRoadmaps";
import CustomRoadmapViewer from "./components/CustomRoadmapViewer";
import SharedRoadmapViewer from "./components/SharedRoadmapViewer";
import AISuggestions from "./components/AISuggestions";
import SuggestionView from "./components/AISuggestionsView";
function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Maincontent />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={<ProtectedRoute />} />
          <Route path="/generate-roadmap" element={<AIRoadmap />} />
          <Route path="/create-roadmap" element={<CustomRoadmaps />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/roadmap/edit/:id" element={<CustomRoadmapEditor />} />
          <Route path="/shared-roadmaps" element={<SharedRoadmaps />} />
          <Route path="view-roadmap/:id" element={<CustomRoadmapViewer />} />
          <Route path="public-roadmap/:id" element={<SharedRoadmapViewer />} />
          <Route path="/ai-suggestion" element={<AISuggestions />} />
          <Route path="/suggestion/:id" element={<SuggestionView />} />

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

          <Route path="/mLOps" element={<Roadmap data={mlOpsRoadmap} />} />
          <Route
            path="/data-scientist"
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
            path="/blockchain-developer"
            element={<Roadmap data={blockchainDeveloperRoadmap} />}
          />
          <Route
            path="/devops-engineer"
            element={<Roadmap data={devOpsRoadmap} />}
          />
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
          {/* Tech Skills */}
          <Route
            path="/react"
            element={<Roadmap data={reactDeveloperRoadmap} />}
          />
          <Route
            path="/javascript"
            element={<Roadmap data={javascriptDeveloperRoadmap} />}
          />
          <Route
            path="/python"
            element={<Roadmap data={pythonDeveloperRoadmap} />}
          />
          <Route
            path="/nodejs"
            element={<Roadmap data={nodejsDeveloperRoadmap} />}
          />
          <Route path="/sql" element={<Roadmap data={sqldeveloperRoadmap} />} />
          <Route path="/docker" element={<Roadmap data={dockerRoadmap} />} />
          <Route
            path="/kubernetes"
            element={<Roadmap data={kubernetesRoadmap} />}
          />
          <Route
            path="/tensorflow"
            element={<Roadmap data={tensorflowRoadmap} />}
          />
          <Route
            path="/gitandgithub"
            element={<Roadmap data={gitandGithubRoadmap} />}
          />
          <Route path="/aws" element={<Roadmap data={awsRoadmap} />} />
          <Route
            path="/microsoft-azure"
            element={<Roadmap data={microsoftAzureRoadmap} />}
          />
          <Route path="/linux" element={<Roadmap data={linuxRoadmap} />} />
          <Route path="/java" element={<Roadmap data={JavaDeveloper} />} />
          <Route path="/cpp" element={<Roadmap data={cppRoadmap} />} />
          <Route path="/rust" element={<Roadmap data={rustRoadmap} />} />
          <Route path="/golang" element={<Roadmap data={golangRoadmap} />} />
          <Route path="/ruby" element={<Roadmap data={rubyRoadmap} />} />
          <Route path="/php" element={<Roadmap data={phpRoadmap} />} />
          <Route path="/kotlin" element={<Roadmap data={kotlinRoadmap} />} />
          <Route path="/mongodb" element={<Roadmap data={monogodbRoadmap} />} />
          <Route
            path="/typescript"
            element={<Roadmap data={typescriptRoadmap} />}
          />
          <Route path="/angular" element={<Roadmap data={angularRoadmap} />} />
          <Route path="/vuejs" element={<Roadmap data={VueRoadmap} />} />
          <Route path="/flutter" element={<Roadmap data={flutterRoadmap} />} />
          <Route
            path="/terraform"
            element={<Roadmap data={terraformRoadmap} />}
          />
          <Route path="/redis" element={<Roadmap data={redisRoadmap} />} />
          <Route
            path="/springboot"
            element={<Roadmap data={springbootRoadmap} />}
          />
          <Route path="/graphql" element={<Roadmap data={grapgqlRoadmap} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
