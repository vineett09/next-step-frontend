import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useTokenRefresh } from "./services/authservice";
import ScrollToTop from "./ScrollToTop";
import Login from "./components/Login";
import ProtectedRoute from "./components/ProtectedRoute";
import Register from "./components/Register";
import Roadmap from "./components/Roadmap";
import Profile from "./components/Profile";
import CareerTracker from "./components/CareerTracker";
import SmartMentor from "./components/SmartMentor";
import ExploreNextStep from "./components/ExploreNextStep";
import Maincontent from "./components/Maincontent";
import ForgotPassword from "./components/ForgotPassword";
import ResetPassword from "./components/ResetPassword";
import TechExplorer from "./components/TechExplorer";
import AIRoadmap from "./components/AI Roadmap";
import CustomRoadmaps from "./components/CustomRoadmaps";
import CustomRoadmapEditor from "./components/CustomRoadmapEditor";
import SharedRoadmaps from "./components/SharedRoadmaps";
import CustomRoadmapViewer from "./components/CustomRoadmapViewer";
import SharedRoadmapViewer from "./components/SharedRoadmapViewer";
import AISuggestions from "./components/AISuggestions";
import SuggestionView from "./components/AISuggestionsView";
import ViewAIRoadmap from "./components/ViewAIRoadmap";
import SmartFeedContent from "./components/SmartFeedContent";
import ViewCareerTracker from "./components/ViewCareerTracker";

function App() {
  useTokenRefresh();

  return (
    <Router>
      <ScrollToTop />
      <div className="App">
        <Routes>
          {/* Main application routes */}
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
          <Route path="/ai-roadmap/view/:id" element={<ViewAIRoadmap />} />
          <Route path="/explore" element={<TechExplorer />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/reset-password/:token" element={<ResetPassword />} />
          <Route path="/smart-feed" element={<SmartFeedContent />} />
          <Route path="/career-tracker" element={<CareerTracker />} />
          <Route path="/career-tracker/:id" element={<ViewCareerTracker />} />
          <Route path="/smart-mentor" element={<SmartMentor />} />
          <Route path="/explore-features" element={<ExploreNextStep />} />

          {/* Catch-all route for all roadmap paths - handles both tech fields and skills */}
          <Route path="/:roadmapId" element={<Roadmap />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
