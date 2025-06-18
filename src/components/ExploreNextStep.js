import React, { useState, useEffect, Suspense } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import "../styles/ExploreNextStep.css";
import Navbar from "./Navbar";
import Footer from "./Footer";
const AuthModal = React.lazy(() => import("./AuthModal"));

const ExploreNextStep = () => {
  const [activeFeature, setActiveFeature] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const navigate = useNavigate();
  const { user, token } = useSelector((state) => state.auth);
  const [showAuthModal, setShowAuthModal] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % features.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const features = [
    {
      id: 1,
      title: "AI Integrated Chatbot",
      subtitle: "Roadmap-Specific Intelligence",
      description:
        "Get instant answers and guidance tailored to your current roadmap. Our AI understands every detail of your learning path and provides contextual support.",
      icon: "🤖",
      color: "from-blue-500 to-cyan-400",
      bgPattern:
        "radial-gradient(circle at 20% 50%, rgba(59, 130, 246, 0.1) 0%, transparent 50%)",
      path: "/explore",
    },
    {
      id: 2,
      title: "AI Generated Roadmaps",
      subtitle: "Personalized Learning Paths",
      description:
        "Create custom roadmaps based on your topic, skill level, and timeline. Watch as AI crafts your perfect learning journey with beautiful D3.js visualizations.",
      icon: "✨",
      color: "from-purple-500 to-pink-400",
      bgPattern:
        "radial-gradient(circle at 80% 20%, rgba(168, 85, 247, 0.1) 0%, transparent 50%)",
      path: "/generate-roadmap",
    },
    {
      id: 3,
      title: "AI Career Suggestions",
      subtitle: "Smart Role Recommendations",
      description:
        "Share your interests and experience, and receive comprehensive guides tailored to your dream tech role with actionable steps and insights.",
      icon: "💡",
      color: "from-emerald-500 to-teal-400",
      bgPattern:
        "radial-gradient(circle at 60% 80%, rgba(16, 185, 129, 0.1) 0%, transparent 50%)",
      path: "/ai-suggestion",
    },
    {
      id: 4,
      title: "AI Career Path Advisor",
      subtitle: "Strategic Career Planning",
      description:
        "Map your journey from where you are to where you want to be. Get personalized career roadmaps with visualizations and step-by-step guidance.",
      icon: "🚀",
      color: "from-orange-500 to-red-400",
      bgPattern:
        "radial-gradient(circle at 40% 30%, rgba(249, 115, 22, 0.1) 0%, transparent 50%)",
      path: "/career-tracker",
    },
    {
      id: 5,
      title: "Smart Mentor",
      subtitle: "Personalized Learning Companion",
      description:
        "Your AI mentor knows your progress, preferences, and goals. Get insights, suggestions, and guidance based on your entire learning journey.",
      icon: "🧠",
      color: "from-indigo-500 to-purple-400",
      bgPattern:
        "radial-gradient(circle at 70% 60%, rgba(99, 102, 241, 0.1) 0%, transparent 50%)",
      path: "/smart-mentor",
    },
    {
      id: 6,
      title: "Custom Roadmap Builder",
      subtitle: "Create & Share Your Vision",
      description:
        "Design unique roadmaps easily, share them publicly, or keep them private. Let others follow your expertise and contribute to the community.",
      icon: "🛠️",
      color: "from-teal-500 to-green-400",
      bgPattern:
        "radial-gradient(circle at 90% 40%, rgba(20, 184, 166, 0.1) 0%, transparent 50%)",
      path: "/create-roadmap",
    },
  ];

  const coreFeatures = [
    { name: "Bookmark Roadmaps", icon: "📚" },
    { name: "Progress Tracking", icon: "📊" },
    { name: "Community Sharing", icon: "🌐" },
    { name: "Visualizations", icon: "📈" },
  ];

  const handleExploreClick = () => {
    navigate("/explore");
  };

  const handleFeatureExplore = (feature) => {
    if (!user || !token) {
      setShowAuthModal(true);
    } else {
      navigate(feature.path);
    }
  };

  return (
    <div className="explore-next-step">
      <Navbar />
      <div className={`features-container ${isVisible ? "visible" : ""}`}>
        {/* Hero Section */}
        <div className="hero-section">
          <div className="hero-content">
            <div className="hero-badge">
              <span className="badge-text">🚀 Powered by AI</span>
            </div>
            <h1 className="hero-title">
              Revolutionize Your
              <span className="gradient-text"> Learning Journey</span>
            </h1>
            <p className="hero-description">
              Experience the future of skill development with AI-powered
              roadmaps, personalized mentoring, and stunning visualizations that
              adapt to your unique path.
            </p>
          </div>

          <div className="floating-elements">
            <div className="float-item item-1">AI</div>
            <div className="float-item item-2">Development</div>
            <div className="float-item item-3">React</div>
            <div className="float-item item-4">ML</div>
          </div>
        </div>

        {/* Main Features Grid */}
        <div className="features-grid">
          {features.map((feature, index) => (
            <div
              key={feature.id}
              className={`feature-card ${
                activeFeature === index ? "active" : ""
              }`}
              style={{
                background: feature.bgPattern,
                animationDelay: `${index * 0.1}s`,
              }}
              onMouseEnter={() => setActiveFeature(index)}
            >
              <div className="feature-header">
                <div
                  className={`feature-icon bg-gradient-to-r ${feature.color}`}
                >
                  <span>{feature.icon}</span>
                </div>
                <div className="feature-number">0{feature.id}</div>
              </div>

              <div className="feature-content">
                <h3 className="feature-title">{feature.title}</h3>
                <p className="feature-subtitle">{feature.subtitle}</p>
                <p className="feature-description">{feature.description}</p>
                <button
                  className="feature-button"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleFeatureExplore(feature);
                  }}
                >
                  Try Now ➔
                </button>
              </div>

              <div
                className={`feature-glow bg-gradient-to-r ${feature.color}`}
              ></div>
            </div>
          ))}
        </div>

        {/* Core Features */}
        <div className="core-features-section">
          <h2 className="section-title">Essential Features</h2>
          <div className="core-features-grid">
            {coreFeatures.map((feature, index) => (
              <div
                key={index}
                className="core-feature-item"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <span className="core-feature-icon">{feature.icon}</span>
                <span className="core-feature-name">{feature.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div className="stats-section">
          <div className="stats-grid">
            <div className="stat-item">
              <div className="stat-number">50+</div>
              <div className="stat-label">Pre-built Roadmaps</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">∞</div>
              <div className="stat-label">AI-Generated Paths</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">24/7</div>
              <div className="stat-label">AI Mentoring</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">100%</div>
              <div className="stat-label">Personalized</div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="cta-section">
          <div className="cta-content">
            <h2 className="cta-title">Ready to Transform Your Career?</h2>

            <div className="cta-buttons">
              <button className="button-secondary" onClick={handleExploreClick}>
                Explore Roadmaps
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
      {showAuthModal && (
        <Suspense fallback={<div>Loading...</div>}>
          <AuthModal
            isOpen={showAuthModal}
            onClose={() => setShowAuthModal(false)}
          />
        </Suspense>
      )}
    </div>
  );
};

export default ExploreNextStep;
