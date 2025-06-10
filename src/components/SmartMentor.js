import React, { useState, useRef, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { refreshToken } from "../features/authslice";
import "../styles/SmartMentor.css";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { FaRobot, FaUserCircle } from "react-icons/fa";

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const SmartMentor = () => {
  const dispatch = useDispatch();
  const {
    user,
    token,
    loading: authLoading,
  } = useSelector((state) => state.auth);
  // Utility function to parse markdown-like text into HTML
  const parseAIResponse = (text) => {
    if (!text) return "<p>No content</p>";

    // Split the text into lines
    let lines = text.split("\n").filter((line) => line.trim() !== "");

    // Initialize output
    let htmlContent = [];
    let currentList = null;

    lines.forEach((line, index) => {
      line = line.trim();

      // Handle headings (lines starting with ===== or ending with =====)
      if (line.startsWith("=====") && line.endsWith("=====")) {
        if (currentList) {
          htmlContent.push(`</ul>`);
          currentList = null;
        }
        const headingText = line.replace(/=====/g, "").trim();
        htmlContent.push(`<h4 class="ai-response-heading">${headingText}</h4>`);
      }
      // Handle bullet points (lines starting with •)
      else if (line.startsWith("•")) {
        if (!currentList) {
          currentList = true;
          htmlContent.push(`<ul class="ai-response-list">`);
        }
        const listItem = line.replace(/^•\s*/, "").trim();
        // Handle sub-bullets or nested content (e.g., indented lines)
        if (line.match(/^\s{2,}/)) {
          htmlContent.push(`<li class="ai-response-subitem">${listItem}</li>`);
        } else {
          htmlContent.push(`<li class="ai-response-item">${listItem}</li>`);
        }
      }
      // Handle bold text (e.g., **text** or *text*)
      else if (line.match(/\*\*?.+?\*\*?/)) {
        if (currentList) {
          htmlContent.push(`</ul>`);
          currentList = null;
        }
        const formattedLine = line
          .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
          .replace(/\*(.*?)\*/g, "<em>$1</em>");
        htmlContent.push(
          `<p class="ai-response-paragraph">${formattedLine}</p>`
        );
      }
      // Treat other lines as paragraphs
      else {
        if (currentList) {
          htmlContent.push(`</ul>`);
          currentList = null;
        }
        htmlContent.push(`<p class="ai-response-paragraph">${line}</p>`);
      }
    });

    // Close any open list
    if (currentList) {
      htmlContent.push(`</ul>`);
    }

    return htmlContent.join("");
  };
  // Chat state
  const [messages, setMessages] = useState([
    {
      id: 1,
      type: "ai",
      content:
        "Hello! I'm your Smart Mentor. I can help you with questions about your learning journey, roadmaps, and career guidance. What would you like to know?",
      timestamp: new Date(),
    },
  ]);
  const [inputMessage, setInputMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);

  // New state for additional features
  const [userUsage, setUserUsage] = useState(null);
  const [insights, setInsights] = useState(null);
  const [suggestions, setSuggestions] = useState([]);
  const [activeTab, setActiveTab] = useState("chat"); // chat, insights, suggestions
  const [loadingInsights, setLoadingInsights] = useState(false);
  const [loadingSuggestions, setLoadingSuggestions] = useState(false);
  const [healthStatus, setHealthStatus] = useState(null);

  const quickQuestions = [
    "What should I learn after React?",
    "How to prepare for an SDE-1 role?",
    "What's the best way to explain OAuth in interviews?",
    "Show me my progress on JavaScript roadmap",
    "What roadmaps should I focus on next?",
  ];

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (user && token) {
      initializeData();
    }
  }, [user, token]);

  // Initialize all data when component mounts
  const initializeData = async () => {
    await Promise.all([
      fetchUserUsage(),
      fetchHealthStatus(),
      fetchInsights(),
      fetchSuggestions(),
    ]);
  };

  // Helper function for authenticated requests
  const makeAuthenticatedRequest = async (url, options = {}) => {
    const makeRequest = async (currentToken) => {
      return fetch(url, {
        ...options,
        headers: {
          ...options.headers,
          Authorization: `Bearer ${currentToken}`,
          "Content-Type": "application/json",
        },
      });
    };

    try {
      let response = await makeRequest(token);

      if (response.status === 401) {
        const refreshResult = await dispatch(refreshToken()).unwrap();
        if (refreshResult.token) {
          response = await makeRequest(refreshResult.token);
        }
      }

      return response;
    } catch (error) {
      console.error("Authenticated request failed:", error);
      throw error;
    }
  };

  // Fetch user usage (existing)
  const fetchUserUsage = async () => {
    try {
      const response = await makeAuthenticatedRequest(
        `${BACKEND_URL}/api/smart-mentor/usage`
      );
      if (response.ok) {
        const data = await response.json();
        setUserUsage(data);
      }
    } catch (error) {
      console.error("Error fetching usage:", error);
    }
  };

  // Fetch learning insights (new)
  const fetchInsights = async () => {
    setLoadingInsights(true);
    try {
      const response = await makeAuthenticatedRequest(
        `${BACKEND_URL}/api/smart-mentor/insights`
      );
      if (response.ok) {
        const data = await response.json();
        setInsights(data.insights);
      }
    } catch (error) {
      console.error("Error fetching insights:", error);
    } finally {
      setLoadingInsights(false);
    }
  };

  // Fetch suggestions (new)
  const fetchSuggestions = async () => {
    setLoadingSuggestions(true);
    try {
      const response = await makeAuthenticatedRequest(
        `${BACKEND_URL}/api/smart-mentor/suggestions`
      );
      if (response.ok) {
        const data = await response.json();
        setSuggestions(data.suggestions);
      }
    } catch (error) {
      console.error("Error fetching suggestions:", error);
    } finally {
      setLoadingSuggestions(false);
    }
  };

  // Fetch health status (new)
  const fetchHealthStatus = async () => {
    try {
      const response = await fetch(`${BACKEND_URL}/api/smart-mentor/health`);
      if (response.ok) {
        const data = await response.json();
        setHealthStatus(data);
      }
    } catch (error) {
      console.error("Error fetching health status:", error);
    }
  };

  // Send message (existing)
  const sendMessage = async (messageText = inputMessage) => {
    if (!messageText.trim() || isLoading || !user || !token) return;

    if (userUsage && !userUsage.canUse) {
      setMessages((prev) => [
        ...prev,
        {
          id: Date.now(),
          type: "system",
          content: `You've reached your daily limit of ${userUsage.usageCount} Smart Mentor queries. Please try again tomorrow.`,
          timestamp: new Date(),
        },
      ]);
      return;
    }

    const userMessage = {
      id: Date.now(),
      type: "user",
      content: messageText,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputMessage("");
    setIsLoading(true);

    try {
      const response = await makeAuthenticatedRequest(
        `${BACKEND_URL}/api/smart-mentor/chat`,
        {
          method: "POST",
          body: JSON.stringify({
            message: messageText,
            conversationHistory: messages.slice(-5),
          }),
        }
      );

      if (response.ok) {
        const data = await response.json();
        const aiMessage = {
          id: Date.now() + 1,
          type: "ai",
          content: data.response,
          timestamp: new Date(),
        };
        setMessages((prev) => [...prev, aiMessage]);

        if (data.usage) {
          setUserUsage(data.usage);
        }
      } else {
        const errorData = await response.json();
        throw new Error(errorData.error || "Failed to get AI response");
      }
    } catch (error) {
      console.error("Error sending message:", error);
      const errorMessage = {
        id: Date.now() + 1,
        type: "system",
        content: "Sorry, I encountered an error. Please try again later.",
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    sendMessage();
  };

  const handleQuickQuestion = (question) => {
    sendMessage(question);
  };

  const clearChat = () => {
    setMessages([
      {
        id: 1,
        type: "ai",
        content:
          "Hello! I'm your Smart Mentor. I can help you with questions about your learning journey, roadmaps, and career guidance. What would you like to know?",
        timestamp: new Date(),
      },
    ]);
  };

  const refreshInsights = async () => {
    await fetchInsights();
  };

  const refreshSuggestions = async () => {
    await fetchSuggestions();
  };

  // Enhanced priority color function
  const getPriorityColor = (priority) => {
    switch (priority) {
      case "urgent":
        return "#d32f2f"; // Darker red for urgent
      case "high":
        return "#ff6b6b"; // Bright red
      case "medium":
        return "#ffa726"; // Orange
      case "low":
        return "#66bb6a"; // Green
      default:
        return "#64b5f6"; // Blue
    }
  };

  // Updated renderInsights function in AIMentor.js
  const renderInsights = () => {
    if (loadingInsights) {
      return <div className="loading">Loading insights...</div>;
    }

    if (!insights) {
      return <div className="no-data">No insights available</div>;
    }

    return (
      <div className="insights-container">
        <div className="insights-header">
          <h4>Your Learning Insights</h4>
          <button onClick={refreshInsights} className="refresh-btn">
            🔄
          </button>
        </div>

        <div className="insights-grid">
          {/* Overall Progress Overview */}
          <div className="insight-card">
            <h5>📊 Overall Progress</h5>
            <div className="progress-stats">
              <div className="stat">
                <span className="stat-value">
                  {insights.totalProgress.completed}
                </span>
                <span className="stat-label">Total Completed</span>
              </div>
              <div className="stat">
                <span className="stat-value">
                  {insights.totalProgress.total}
                </span>
                <span className="stat-label">Total Nodes</span>
              </div>
              <div className="stat">
                <span className="stat-value">
                  {insights.totalProgress.percentage}%
                </span>
                <span className="stat-label">Overall Rate</span>
              </div>
              <div className="stat">
                <span className="stat-value">
                  {insights.roadmaps.activeRoadmaps}
                </span>
                <span className="stat-label">Active Roadmaps</span>
              </div>
            </div>
          </div>

          {/* Learning Streak */}
          <div className="insight-card">
            <h5>🔥 Learning Streak</h5>
            <div className="streak-info">
              <div className="streak-number">{insights.streak.current}</div>
              <div className="streak-label">Days</div>
              {insights.streak.lastActivity && (
                <div className="last-activity">
                  Last:{" "}
                  {new Date(insights.streak.lastActivity).toLocaleDateString()}
                </div>
              )}
            </div>
          </div>

          {/* Overall Activity Summary */}
          <div className="insight-card">
            <h5>📈 Recent Activity</h5>
            <div className="activity-stats">
              <div className="activity-item">
                <span>This Week:</span>
                <span>{insights.activity.thisWeek} nodes</span>
              </div>
              <div className="activity-item">
                <span>This Month:</span>
                <span>{insights.activity.thisMonth} nodes</span>
              </div>
              {insights.activity.mostActiveRoadmap && (
                <div className="activity-item">
                  <span>Most Active:</span>
                  <span>{insights.activity.mostActiveRoadmap.title}</span>
                </div>
              )}
            </div>
          </div>

          {/* Roadmaps Summary */}
          <div className="insight-card">
            <h5>🗺️ Roadmap Collection</h5>
            <div className="roadmap-stats">
              <div className="roadmap-item">
                <span>📑 Bookmarked:</span>
                <span>{insights.roadmaps.bookmarked}</span>
              </div>
              <div className="roadmap-item">
                <span>👥 Following:</span>
                <span>{insights.roadmaps.following}</span>
              </div>
              <div className="roadmap-item">
                <span>✨ AI Generated:</span>
                <span>{insights.roadmaps.aiGenerated}</span>
              </div>
              <div className="roadmap-item">
                <span>⚡ Active:</span>
                <span>{insights.roadmaps.activeRoadmaps}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Roadmap-Specific Progress */}
        {insights.roadmapProgress && insights.roadmapProgress.length > 0 && (
          <div className="roadmap-progress-section">
            <h5>📋 Individual Roadmap Progress</h5>
            <div className="roadmap-progress-grid">
              {insights.roadmapProgress.map((roadmap, index) => (
                <div key={index} className="roadmap-progress-card">
                  <div className="roadmap-header-content">
                    <div className="roadmap-title-content">
                      🗺️ {roadmap.title}
                    </div>
                    <div className="roadmap-completion-content">
                      {roadmap.completionRate}%
                    </div>
                  </div>

                  <div className="roadmap-progress-bar">
                    <div
                      className="progress-fill"
                      style={{
                        width: `${roadmap.completionRate}%`,
                        backgroundColor:
                          parseFloat(roadmap.completionRate) === 100
                            ? "#4caf50"
                            : parseFloat(roadmap.completionRate) >= 75
                            ? "#2196f3"
                            : parseFloat(roadmap.completionRate) >= 50
                            ? "#ff9800"
                            : "#f44336",
                      }}
                    ></div>
                  </div>

                  <div className="roadmap-stats">
                    <div className="roadmap-stat">
                      <span className="stat-label">Completed:</span>
                      <span className="stat-value">
                        {roadmap.completed}/{roadmap.total}
                      </span>
                    </div>

                    <div className="roadmap-recent-activity">
                      <div className="activity-row">
                        <span>📅 This Week:</span>
                        <span
                          className={
                            roadmap.recentActivity.thisWeek > 0
                              ? "active"
                              : "inactive"
                          }
                        >
                          {roadmap.recentActivity.thisWeek} nodes
                        </span>
                      </div>
                      <div className="activity-row">
                        <span>📆 This Month:</span>
                        <span
                          className={
                            roadmap.recentActivity.thisMonth > 0
                              ? "active"
                              : "inactive"
                          }
                        >
                          {roadmap.recentActivity.thisMonth} nodes
                        </span>
                      </div>
                    </div>

                    {roadmap.lastUpdated && (
                      <div className="last-updated">
                        Last updated:{" "}
                        {new Date(roadmap.lastUpdated).toLocaleDateString()}
                      </div>
                    )}
                  </div>

                  {/* Progress status indicator */}
                  <div className="progress-status">
                    {parseFloat(roadmap.completionRate) === 100 ? (
                      <span className="status-badge completed">
                        ✅ Completed
                      </span>
                    ) : parseFloat(roadmap.completionRate) >= 75 ? (
                      <span className="status-badge nearly-done">
                        🎯 Almost Done
                      </span>
                    ) : parseFloat(roadmap.completionRate) >= 25 ? (
                      <span className="status-badge in-progress">
                        🚀 In Progress
                      </span>
                    ) : parseFloat(roadmap.completionRate) > 0 ? (
                      <span className="status-badge started">🌱 Started</span>
                    ) : (
                      <span className="status-badge not-started">
                        ⏳ Not Started
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Activity by Roadmap */}
        {insights.activity.roadmapActivity &&
          insights.activity.roadmapActivity.length > 0 && (
            <div className="roadmap-activity-section">
              <h5>📊 Activity Breakdown by Roadmap</h5>
              <div className="activity-breakdown">
                {insights.activity.roadmapActivity
                  .filter(
                    (roadmap) => roadmap.thisWeek > 0 || roadmap.thisMonth > 0
                  )
                  .sort((a, b) => b.thisMonth - a.thisMonth)
                  .map((roadmap, index) => (
                    <div key={index} className="activity-breakdown-item">
                      <div className="roadmap-name">{roadmap.title}</div>
                      <div className="activity-metrics">
                        <div className="metric">
                          <span className="metric-label">Week:</span>
                          <span className="metric-value">
                            {roadmap.thisWeek}
                          </span>
                        </div>
                        <div className="metric">
                          <span className="metric-label">Month:</span>
                          <span className="metric-value">
                            {roadmap.thisMonth}
                          </span>
                        </div>
                        <div className="metric">
                          <span className="metric-label">Progress:</span>
                          <span className="metric-value">
                            {roadmap.completionRate}%
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
              </div>

              {insights.activity.roadmapActivity.filter(
                (roadmap) => roadmap.thisWeek === 0 && roadmap.thisMonth === 0
              ).length > 0 && (
                <div className="inactive-roadmaps">
                  <h6>💤 Inactive Roadmaps</h6>
                  <div className="inactive-list">
                    {insights.activity.roadmapActivity
                      .filter(
                        (roadmap) =>
                          roadmap.thisWeek === 0 && roadmap.thisMonth === 0
                      )
                      .map((roadmap, index) => (
                        <span key={index} className="inactive-roadmap">
                          {roadmap.title} ({roadmap.completionRate}%)
                        </span>
                      ))}
                  </div>
                </div>
              )}
            </div>
          )}

        {/* Recommendations */}
        {insights.recommendations.length > 0 && (
          <div className="recommendations">
            <h5>💡 Personalized Recommendations</h5>
            {insights.recommendations.map((rec, index) => (
              <div key={index} className="recommendation-item">
                {rec}
              </div>
            ))}
          </div>
        )}
      </div>
    );
  };

  const renderSuggestions = () => {
    if (loadingSuggestions) {
      return (
        <div className="loading-container">
          <div className="loading-spinner">⏳</div>
          <div className="loading-text">
            Analyzing your learning patterns and generating personalized
            suggestions...
          </div>
        </div>
      );
    }

    if (!suggestions || suggestions.length === 0) {
      return (
        <div className="no-data-container">
          <div className="no-data-icon">🎯</div>
          <div className="no-data-title">No suggestions available</div>
          <div className="no-data-description">
            Start learning on some roadmaps to get personalized recommendations!
          </div>
        </div>
      );
    }

    // Group suggestions by type for better organization
    const groupedSuggestions = suggestions.reduce((groups, suggestion) => {
      const category = getSuggestionCategory(suggestion.type);
      if (!groups[category]) {
        groups[category] = [];
      }
      groups[category].push(suggestion);
      return groups;
    }, {});

    // Helper function to categorize suggestions
    function getSuggestionCategory(type) {
      const categoryMap = {
        finish_roadmap: "High Priority",
        maintain_streak: "High Priority",
        build_momentum: "High Priority",
        career_aligned: "Career Growth",
        skill_gap: "Career Growth",
        create_career_path: "Career Growth",
        continue_active: "Active Learning",
        restart_streak: "Active Learning",
        revive_roadmap: "Resume Learning",
        bookmarked_low_progress: "Resume Learning",
        start_bookmarked: "New Opportunities",
        use_ai_roadmap: "New Opportunities",
        use_ai_suggestions: "Available Features",
      };
      return categoryMap[type] || "General";
    }

    // Helper function to get suggestion icon
    function getSuggestionIcon(type) {
      const iconMap = {
        finish_roadmap: "🏁",
        continue_active: "🚀",
        revive_roadmap: "🔄",
        start_bookmarked: "📖",
        bookmarked_low_progress: "📚",
        career_aligned: "🎯",
        skill_gap: "🔧",
        restart_streak: "🔥",
        maintain_streak: "⚡",
        use_ai_roadmap: "✨",
        use_ai_suggestions: "💡",
        create_career_path: "🗺️",
        build_momentum: "📈",
      };
      return iconMap[type] || "💡";
    }

    // Helper function to get urgency indicator
    function getUrgencyIndicator(suggestion) {
      if (suggestion.urgency === "urgent") {
        return <span className="urgency-badge urgent">🚨 URGENT</span>;
      }
      return null;
    }

    return (
      <div className="suggestions-container enhanced">
        <div className="suggestions-header">
          <div className="header-main">
            <h4> Personalized Learning Suggestions</h4>
            <div className="header-meta">
              {suggestions.metadata && (
                <div className="suggestions-stats">
                  <span className="stat-item">
                    <strong>{suggestions.metadata.totalSuggestions}</strong>{" "}
                    total suggestions
                  </span>
                  <span className="stat-item">
                    <strong>
                      {suggestions.metadata.userStats?.totalRoadmaps || 0}
                    </strong>{" "}
                    active roadmaps
                  </span>
                  <span className="stat-item">
                    <strong>
                      {suggestions.metadata.userStats?.overallCompletionRate ||
                        0}
                      %
                    </strong>{" "}
                    overall progress
                  </span>
                </div>
              )}
            </div>
          </div>
          <button
            onClick={refreshSuggestions}
            className="refresh-btn"
            disabled={loadingSuggestions}
          >
            {loadingSuggestions ? "⏳" : "🔄"}
          </button>
        </div>

        {/* Priority Breakdown */}
        {suggestions.metadata?.priorityBreakdown && (
          <div className="priority-breakdown">
            <div className="breakdown-title">Priority Overview:</div>
            <div className="priority-indicators">
              {suggestions.metadata.priorityBreakdown.urgent > 0 && (
                <span className="priority-indicator urgent">
                  🚨 {suggestions.metadata.priorityBreakdown.urgent} Urgent
                </span>
              )}
              {suggestions.metadata.priorityBreakdown.high > 0 && (
                <span className="priority-indicator high">
                  🔴 {suggestions.metadata.priorityBreakdown.high} High
                </span>
              )}
              {suggestions.metadata.priorityBreakdown.medium > 0 && (
                <span className="priority-indicator medium">
                  🟡 {suggestions.metadata.priorityBreakdown.medium} Medium
                </span>
              )}
              {suggestions.metadata.priorityBreakdown.low > 0 && (
                <span className="priority-indicator low">
                  🟢 {suggestions.metadata.priorityBreakdown.low} Low
                </span>
              )}
            </div>
          </div>
        )}

        {/* User Learning Overview */}
        {suggestions.metadata?.userStats && (
          <div className="user-overview-card">
            <h5>📊 Your Learning Overview</h5>
            <div className="overview-grid">
              <div className="overview-stat">
                <div className="stat-icon">🗺️</div>
                <div className="stat-info">
                  <div className="stat-value">
                    {suggestions.metadata.userStats.totalRoadmaps}
                  </div>
                  <div className="stat-label">Active Roadmaps</div>
                </div>
              </div>
              <div className="overview-stat">
                <div className="stat-icon">✅</div>
                <div className="stat-info">
                  <div className="stat-value">
                    {suggestions.metadata.userStats.totalCompletedNodes}
                  </div>
                  <div className="stat-label">Nodes Completed</div>
                </div>
              </div>
              <div className="overview-stat">
                <div className="stat-icon">📈</div>
                <div className="stat-info">
                  <div className="stat-value">
                    {suggestions.metadata.userStats.overallCompletionRate}%
                  </div>
                  <div className="stat-label">Overall Progress</div>
                </div>
              </div>
              <div className="overview-stat">
                <div className="stat-icon">🔥</div>
                <div className="stat-info">
                  <div className="stat-value">
                    {suggestions.metadata.userStats.currentStreak}
                  </div>
                  <div className="stat-label">Day Streak</div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Grouped Suggestions */}
        <div className="suggestions-groups">
          {Object.entries(groupedSuggestions).map(
            ([category, categorySuggestions]) => (
              <div key={category} className="suggestion-group">
                <div className="group-header">
                  <h5 className="group-title">{category}</h5>
                  <span className="group-count">
                    {categorySuggestions.length}
                  </span>
                </div>

                <div className="suggestions-list">
                  {categorySuggestions.map((suggestion, index) => (
                    <div
                      key={index}
                      className={`suggestion-card enhanced ${
                        suggestion.urgency || suggestion.priority
                      }`}
                    >
                      {/* Suggestion Header */}
                      <div className="suggestion-header">
                        <div className="suggestion-title-row">
                          <span className="suggestion-icon">
                            {getSuggestionIcon(suggestion.type)}
                          </span>
                          <div className="suggestion-title">
                            {suggestion.title}
                          </div>
                          {getUrgencyIndicator(suggestion)}
                        </div>
                        <div className="suggestion-priority-badge">
                          <span
                            className={`priority-tag ${
                              suggestion.urgency || suggestion.priority
                            }`}
                            style={{
                              backgroundColor: getPriorityColor(
                                suggestion.urgency || suggestion.priority
                              ),
                              color: "white",
                              padding: "2px 8px",
                              borderRadius: "12px",
                              fontSize: "0.8em",
                              fontWeight: "bold",
                            }}
                          >
                            {(
                              suggestion.urgency || suggestion.priority
                            ).toUpperCase()}
                          </span>
                        </div>
                      </div>

                      {/* Suggestion Content */}
                      <div className="suggestion-content">
                        <div className="suggestion-description">
                          {suggestion.description}
                        </div>

                        {/* Roadmap Info */}
                        {suggestion.roadmapTitle && (
                          <div className="suggestion-roadmap-info">
                            <span className="roadmap-badge">
                              📍 {suggestion.roadmapTitle}
                            </span>
                          </div>
                        )}

                        {/* Stats Display */}
                        {suggestion.stats && (
                          <div className="suggestion-stats">
                            {suggestion.stats.completed !== undefined &&
                              suggestion.stats.total !== undefined && (
                                <div className="progress-stat">
                                  <span className="stat-label">Progress:</span>
                                  <div className="mini-progress-bar">
                                    <div
                                      className="mini-progress-fill"
                                      style={{
                                        width: `${
                                          (suggestion.stats.completed /
                                            suggestion.stats.total) *
                                          100
                                        }%`,
                                        backgroundColor: getPriorityColor(
                                          suggestion.priority
                                        ),
                                      }}
                                    ></div>
                                  </div>
                                  <span className="stat-text">
                                    {suggestion.stats.completed}/
                                    {suggestion.stats.total}
                                    {suggestion.stats.completionRate &&
                                      ` (${suggestion.stats.completionRate}%)`}
                                  </span>
                                </div>
                              )}

                            {suggestion.stats.remaining && (
                              <div className="stat-item">
                                <span className="stat-label">Remaining:</span>
                                <span className="stat-value">
                                  {suggestion.stats.remaining} nodes
                                </span>
                              </div>
                            )}

                            {suggestion.stats.recentProgress && (
                              <div className="stat-item">
                                <span className="stat-label">This month:</span>
                                <span className="stat-value">
                                  {suggestion.stats.recentProgress} nodes
                                </span>
                              </div>
                            )}

                            {suggestion.stats.daysSinceUpdate && (
                              <div className="stat-item">
                                <span className="stat-label">Last update:</span>
                                <span className="stat-value">
                                  {suggestion.stats.daysSinceUpdate} days ago
                                </span>
                              </div>
                            )}
                          </div>
                        )}

                        {/* Career Info */}
                        {suggestion.careerInfo && (
                          <div className="career-info">
                            {suggestion.careerInfo.goal && (
                              <div className="career-goal">
                                <strong>🎯 Goal:</strong>{" "}
                                {suggestion.careerInfo.goal}
                              </div>
                            )}
                            {suggestion.careerInfo.stage && (
                              <div className="career-stage">
                                <strong>📊 Stage:</strong>{" "}
                                {suggestion.careerInfo.stage}
                              </div>
                            )}
                            {suggestion.careerInfo.timeframe && (
                              <div className="career-timeframe">
                                <strong>⏰ Timeframe:</strong>{" "}
                                {suggestion.careerInfo.timeframe}
                              </div>
                            )}
                            {suggestion.careerInfo.currentSkills && (
                              <div className="current-skills">
                                <strong>💪 Current Skills:</strong>
                                <div className="skills-tags">
                                  {suggestion.careerInfo.currentSkills
                                    .slice(0, 3)
                                    .map((skill, idx) => (
                                      <span key={idx} className="skill-tag">
                                        {skill}
                                      </span>
                                    ))}
                                  {suggestion.careerInfo.currentSkills.length >
                                    3 && (
                                    <span className="skill-tag more">
                                      +
                                      {suggestion.careerInfo.currentSkills
                                        .length - 3}{" "}
                                      more
                                    </span>
                                  )}
                                </div>
                              </div>
                            )}
                          </div>
                        )}

                        {/* Streak Info */}
                        {suggestion.streakInfo && (
                          <div className="streak-info">
                            {suggestion.streakInfo.currentStreak !==
                              undefined && (
                              <div className="streak-stat">
                                <span className="streak-icon">🔥</span>
                                <span className="streak-text">
                                  {suggestion.streakInfo.currentStreak > 0
                                    ? `${suggestion.streakInfo.currentStreak} days`
                                    : "No active streak"}
                                </span>
                                {suggestion.streakInfo.encouragement && (
                                  <span className="encouragement">
                                    {suggestion.streakInfo.encouragement}
                                  </span>
                                )}
                              </div>
                            )}
                            {suggestion.streakInfo.daysSinceActivity && (
                              <div className="activity-gap">
                                <span>
                                  Last activity:{" "}
                                  {suggestion.streakInfo.daysSinceActivity} days
                                  ago
                                </span>
                                {suggestion.streakInfo.lastRoadmap && (
                                  <span>
                                    {" "}
                                    on {suggestion.streakInfo.lastRoadmap}
                                  </span>
                                )}
                              </div>
                            )}
                          </div>
                        )}

                        {/* AI Info */}
                        {suggestion.aiInfo && (
                          <div className="ai-info">
                            <div className="ai-roadmap-info">
                              <span className="ai-icon">✨</span>
                              <span>
                                Created:{" "}
                                {new Date(
                                  suggestion.aiInfo.createdAt
                                ).toLocaleDateString()}
                              </span>
                            </div>
                          </div>
                        )}

                        {/* Usage Info */}
                        {suggestion.usageInfo && (
                          <div className="usage-info">
                            <div className="usage-remaining">
                              <span className="usage-icon">🎯</span>
                              <span>
                                {suggestion.usageInfo.remaining}/
                                {suggestion.usageInfo.total} uses remaining
                                today
                              </span>
                            </div>
                          </div>
                        )}

                        {/* Progress Info */}
                        {suggestion.progressInfo && (
                          <div className="progress-info">
                            <div className="progress-summary">
                              <div className="progress-item">
                                <span>📚 Roadmaps:</span>
                                <span>
                                  {suggestion.progressInfo.totalRoadmaps}
                                </span>
                              </div>
                              <div className="progress-item">
                                <span>✅ Completed:</span>
                                <span>
                                  {suggestion.progressInfo.totalNodes} nodes
                                </span>
                              </div>
                              <div className="progress-item">
                                <span>📊 Overall:</span>
                                <span>
                                  {suggestion.progressInfo.overallCompletion}%
                                </span>
                              </div>
                            </div>
                          </div>
                        )}
                      </div>

                      {/* Action Button */}
                      <div className="suggestion-footer">
                        <div className="suggestion-meta">
                          <span className="suggestion-type-tag">
                            {suggestion.type.replace(/_/g, " ").toUpperCase()}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )
          )}
        </div>

        {/* Available Features Section */}
        {suggestions.metadata?.usageLimits && (
          <div className="available-features">
            <h5>🎯 Available AI Features Today</h5>
            <div className="features-grid">
              {Object.entries(suggestions.metadata.usageLimits).map(
                ([feature, limit]) => (
                  <div key={feature} className="feature-card">
                    <div className="feature-name">
                      {feature
                        .replace(/([A-Z])/g, " $1")
                        .replace(/^./, (str) => str.toUpperCase())}
                    </div>
                    <div className="feature-usage">
                      <div className="usage-bar">
                        <div
                          className="usage-fill"
                          style={{
                            width: `${
                              ((limit.totalCount - limit.remainingCount) /
                                limit.totalCount) *
                              100
                            }%`,
                            backgroundColor:
                              limit.remainingCount > 0 ? "#4caf50" : "#f44336",
                          }}
                        ></div>
                      </div>
                      <div className="usage-text">
                        {limit.remainingCount}/{limit.totalCount} remaining
                      </div>
                    </div>
                  </div>
                )
              )}
            </div>
          </div>
        )}

        {/* Last Updated */}
        {suggestions.metadata?.lastUpdated && (
          <div className="suggestions-footer">
            <div className="last-updated">
              Last updated:{" "}
              {new Date(suggestions.metadata.lastUpdated).toLocaleString()}
            </div>
          </div>
        )}
      </div>
    );
  };

  // Render chat tab content
  const renderChat = () => (
    <>
      <div className="messages-container">
        {messages.map((message) => (
          <div key={message.id} className={`message ${message.type}-message`}>
            <div className="message-avatar">
              {message.type === "ai" ? (
                <FaRobot />
              ) : message.type === "user" ? (
                <FaUserCircle />
              ) : null}
            </div>
            <div className="message-content">
              {message.type === "ai" ? (
                <div
                  className="message-text"
                  dangerouslySetInnerHTML={{
                    __html: parseAIResponse(message.content),
                  }}
                />
              ) : (
                <div className="message-text">{message.content}</div>
              )}
              <div className="message-time">
                {message.timestamp.toLocaleTimeString([], {
                  hour: "2-digit",
                  minute: "2-digit",
                })}
              </div>
            </div>
          </div>
        ))}

        {isLoading && (
          <div className="message ai-message">
            <div className="message-avatar">
              <FaRobot />
            </div>
            <div className="message-content">
              <div className="typing-indicator">
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {messages.length === 1 && (
        <div className="quick-questions">
          <p>Try asking:</p>
          <div className="quick-questions-grid">
            {quickQuestions.map((question, index) => (
              <button
                key={index}
                className="quick-question-btn"
                onClick={() => handleQuickQuestion(question)}
              >
                {question}
              </button>
            ))}
          </div>
        </div>
      )}

      <form onSubmit={handleSubmit} className="input-form">
        <div className="input-container">
          <input
            type="text"
            value={inputMessage}
            onChange={(e) => setInputMessage(e.target.value)}
            placeholder="Ask me about your learning journey..."
            disabled={isLoading || (userUsage && !userUsage.canUse)}
            className="message-input"
          />
          <button
            type="submit"
            disabled={
              !inputMessage.trim() ||
              isLoading ||
              (userUsage && !userUsage.canUse)
            }
            className="send-btn"
          >
            {isLoading ? "⏳" : "➤"}
          </button>
        </div>
        {userUsage && !userUsage.canUse && (
          <div className="usage-warning">
            Daily limit reached. Resets at midnight.
          </div>
        )}
      </form>
    </>
  );
  // Loading state
  if (authLoading) {
    return (
      <div className="ai-mentor-container">
        <div className="ai-mentor-header">
          <div className="header-left">
            <div className="ai-avatar">{<FaRobot />}</div>
            <div className="header-info">
              <h3>Smart Mentor</h3>
              <span className="usage-indicator">Loading...</span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Authentication required
  if (!user || !token) {
    return (
      <div className="ai-mentor-container">
        <div className="ai-mentor-header">
          <div className="header-left">
            <div className="ai-avatar">{<FaRobot />}</div>
            <div className="header-info">
              <h3>Smart Mentor</h3>
              <span className="usage-indicator">Please log in</span>
            </div>
          </div>
        </div>
        <div className="messages-container">
          <div className="message system-message">
            <div className="message-avatar">⚠️</div>
            <div className="message-content">
              <div className="message-text">
                Please log in to use the Smart Mentor feature.
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="ai-mentor-wrapper">
      <Navbar />
      <div className={`ai-mentor-container `}>
        <div className="ai-mentor-header">
          <div className="header-left">
            <div className="ai-avatar">{<FaRobot />}</div>
            <div className="header-info">
              <h3>Smart Mentor</h3>
              <div className="header-status">
                {userUsage && (
                  <span className="usage-indicator">
                    {userUsage.remainingCount} queries left today
                  </span>
                )}
                {healthStatus && (
                  <span className="health-status" title={healthStatus.status}>
                    {healthStatus.success ? "🟢" : "🔴"}
                  </span>
                )}
              </div>
            </div>
          </div>
          <div className="header-actions">
            {activeTab === "chat" && (
              <button
                className="action-btn clear-btn"
                onClick={clearChat}
                title="Clear chat"
              >
                🗑️
              </button>
            )}
          </div>
        </div>

        <>
          {/* Tab Navigation */}
          <div className="tab-navigation">
            <button
              className={`tab-btn ${activeTab === "chat" ? "active" : ""}`}
              onClick={() => setActiveTab("chat")}
            >
              💬 Chat
            </button>
            <button
              className={`tab-btn ${activeTab === "insights" ? "active" : ""}`}
              onClick={() => setActiveTab("insights")}
            >
              📊 Insights
            </button>
            <button
              className={`tab-btn ${
                activeTab === "suggestions" ? "active" : ""
              }`}
              onClick={() => setActiveTab("suggestions")}
            >
              💡 Suggestions
            </button>
          </div>

          {/* Tab Content */}
          <div className="tab-content">
            {activeTab === "chat" && renderChat()}
            {activeTab === "insights" && renderInsights()}
            {activeTab === "suggestions" && renderSuggestions()}
          </div>
        </>
      </div>
      <Footer />
    </div>
  );
};

export default SmartMentor;
