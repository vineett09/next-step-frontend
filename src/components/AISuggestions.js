// src/components/Questionnaire.jsx
import React, { useState, useEffect } from "react";
import "../styles/AISuggestions.css";
import Navbar from "./Navbar";
import Footer from "./Footer";
import AIRelatedRoadmaps from "./AI RelatedRoadmaps";
import axios from "axios";
import { useSelector } from "react-redux";
const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;

const AISuggestions = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState({});
  const [loading, setLoading] = useState(false);
  const [roadmap, setRoadmap] = useState(null);
  const [error, setError] = useState(null);
  const [pdfLoading, setPdfLoading] = useState(false);
  const [usageInfo, setUsageInfo] = useState(null);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  // Get token from Redux store
  const { token } = useSelector((state) => state.auth);
  const isAuthenticated = !!token;

  // Check authentication status and fetch usage info when component mounts
  useEffect(() => {
    if (token) {
      fetchUsageInfo();
    }

    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [token]);

  // Function to fetch current usage info using Axios
  const fetchUsageInfo = async () => {
    try {
      const response = await axios.get(
        `${BACKEND_URL}/api/suggestions/ai-suggestions-usage`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setUsageInfo(response.data);
    } catch (err) {
      console.error("Error fetching usage info:", err);
    }
  };

  const questions = [
    {
      id: "preference",
      question: "Do you prefer frontend or backend development?",
      options: [
        "Frontend",
        "Backend",
        "Both/Full-stack",
        "Not sure yet",
        "Other",
      ],
    },
    {
      id: "experience",
      question: "Do you have prior experience in coding?",
      options: ["No experience", "Some basics", "Intermediate", "Advanced"],
    },
    {
      id: "careerGoals",
      question: "What are your career aspirations?",
      options: [
        "Web Developer",
        "Android Developer",
        "iOS Developer",
        "Data Analyst",
        "Data Scientist",
        "DevOps Engineer",
        "AI/ML Engineer",
        "Blockchain Developer",
        "Game Developer",
        "Cybersecurity Specialist",
        "Cloud Computing Specialist",
        "IoT Developer",
        "UI/UX Designer",
        "Embedded Systems Engineer",
        "Robotics Engineer",
        "Not sure yet",
      ],
    },
    {
      id: "timeCommitment",
      question: "How much time can you commit to learning per week?",
      options: ["Less than 5 hours", "5-10 hours", "10-20 hours", "20+ hours"],
    },
    {
      id: "learningStyle",
      question: "How do you prefer to learn?",
      options: [
        "Video tutorials",
        "Reading documentation",
        "Hands-on projects",
        "Interactive courses",
        "A mix of everything",
      ],
    },
    {
      id: "currentKnowledge",
      question: "Which technologies are you already familiar with?",
      type: "multiselect",
      options: [
        "HTML/CSS",
        "JavaScript",
        "TypeScript",
        "Python",
        "Java",
        "C",
        "C++",
        "C#",
        "Swift",
        "Kotlin",
        "Go",
        "Rust",
        "Ruby",
        "PHP",
        "R",
        "Dart",
        "Scala",
        "Perl",
        "Haskell",
        "Lua",
        "Shell Scripting",
        "SQL",
        "MySQL",
        "PostgreSQL",
        "MongoDB",
        "Cassandra",
        "Redis",
        "Firebase",
        "Neo4j",
        "Oracle DB",
        "GraphQL",
        "RESTful APIs",
        "WebSockets",
        "React",
        "Vue.js",
        "Angular",
        "Svelte",
        "Next.js",
        "Nuxt.js",
        "Node.js",
        "Express.js",
        "NestJS",
        "Django",
        "Flask",
        "FastAPI",
        "Spring Boot",
        "ASP.NET",
        "Laravel",
        "Ruby on Rails",
        "TensorFlow",
        "PyTorch",
        "Keras",
        "Scikit-Learn",
        "Pandas",
        "NumPy",
        "Matplotlib",
        "OpenCV",
        "NLTK",
        "Hugging Face Transformers",
        "AWS",
        "Azure",
        "Google Cloud Platform (GCP)",
        "Docker",
        "Kubernetes",
        "Terraform",
        "Ansible",
        "Jenkins",
        "Git/GitHub",
        "Bitbucket",
        "GitLab",
        "CI/CD Pipelines",
        "Linux",
        "Bash",
        "PowerShell",
        "Blockchain",
        "Solidity",
        "Web3.js",
        "Hardhat",
        "Truffle",
        "Flutter",
        "React Native",
        "Unity",
        "Unreal Engine",
        "Blender",
        "TensorFlow.js",
        "Three.js",
        "Electron.js",
        "Qt",
        "Godot",
        "Arduino",
        "Raspberry Pi",
        "Embedded Systems",
        "Cybersecurity",
        "Penetration Testing",
        "Ethical Hacking",
        "Cryptography",
        "IoT (Internet of Things)",
        "Computer Vision",
        "Natural Language Processing (NLP)",
        "Data Science",
        "Big Data",
        "Hadoop",
        "Spark",
        "Kafka",
        "Elasticsearch",
        "Figma",
        "Adobe XD",
        "Other",
      ],
    },
  ];

  const handleOptionSelect = (questionId, answer) => {
    setAnswers((prev) => ({
      ...prev,
      [questionId]: answer,
    }));
  };

  const handleMultiSelect = (questionId, option) => {
    setAnswers((prev) => {
      const currentSelections = prev[questionId] || [];
      if (currentSelections.includes(option)) {
        return {
          ...prev,
          [questionId]: currentSelections.filter((item) => item !== option),
        };
      } else {
        return {
          ...prev,
          [questionId]: [...currentSelections, option],
        };
      }
    });
  };

  const isMultiSelectQuestion = (question) => {
    return question.type === "multiselect";
  };

  const handleNext = () => {
    if (currentStep < questions.length - 1) {
      setCurrentStep((prev) => prev + 1);
      window.scrollTo(0, 0);
    } else {
      handleSubmit();
    }
  };

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep((prev) => prev - 1);
      window.scrollTo(0, 0);
    }
  };

  // Updated handleSubmit using Axios
  const handleSubmit = async () => {
    setLoading(true);
    setError(null);

    try {
      if (!isAuthenticated) {
        throw new Error("You must be logged in to use this feature");
      }

      const response = await axios.post(
        `${BACKEND_URL}/api/suggestions/suggest`,
        { answers },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setRoadmap(response.data.roadmap);
      if (response.data.usageInfo) {
        setUsageInfo(response.data.usageInfo);
      }
      window.scrollTo(0, 0);
    } catch (err) {
      setError(
        err.response?.data?.message ||
          err.message ||
          "Failed to generate roadmap"
      );
    } finally {
      setLoading(false);
    }
  };

  const resetForm = () => {
    setCurrentStep(0);
    setAnswers({});
    setRoadmap(null);
    setError(null);
    window.scrollTo(0, 0);
  };

  const handleDownloadPDF = async () => {
    setPdfLoading(true);
    try {
      const html2pdf = (await import("html2pdf.js")).default;
      const element = document.querySelector(".questionnaire-roadmap-content");

      const opt = {
        margin: [10, 10, 10, 10],
        filename: `Learning-Roadmap-${new Date()
          .toLocaleDateString()
          .replace(/\//g, "-")}.pdf`,
        image: { type: "jpeg", quality: 0.98 },
        html2canvas: { scale: 2, useCORS: true, logging: false },
        jsPDF: { unit: "mm", format: "a4", orientation: "portrait" },
      };

      await html2pdf().set(opt).from(element).save();
    } catch (err) {
      console.error("Error generating PDF:", err);
      alert("There was an error generating your PDF. Please try again.");
    } finally {
      setPdfLoading(false);
    }
  };

  const currentQuestion = questions[currentStep];
  const isQuestionAnswered = () => {
    if (!currentQuestion) return false;
    if (isMultiSelectQuestion(currentQuestion)) {
      return (
        answers[currentQuestion.id] && answers[currentQuestion.id].length > 0
      );
    }
    return !!answers[currentQuestion.id];
  };

  const renderUsageInfo = () => {
    if (!isAuthenticated) {
      return (
        <div className="questionnaire-usage-info">
          <p>Please log in to use the AI suggestion feature.</p>
        </div>
      );
    }

    if (!usageInfo) return null;

    return (
      <div className="questionnaire-usage-info">
        <p>
          Daily usage: {usageInfo.usageCount}/3
          {usageInfo.remainingCount === 0 && (
            <span className="questionnaire-usage-limit-reached">
              {" "}
              (Daily limit reached)
            </span>
          )}
        </p>
      </div>
    );
  };

  // [renderContent and rest of the component remains structurally the same]
  const renderContent = () => {
    if (!isAuthenticated) {
      return (
        <div className="questionnaire-container questionnaire-auth-required">
          <h2>Authentication Required</h2>
          <p>You need to log in to use the AI Suggestion feature.</p>
        </div>
      );
    }

    if (usageInfo && usageInfo.remainingCount === 0 && !roadmap) {
      return (
        <div className="questionnaire-container questionnaire-limit-reached">
          <h2>Daily Limit Reached</h2>
          <p>
            You have used all 3 of your daily AI suggestions. Please come back
            tomorrow for more!
          </p>
          <p className="questionnaire-limit-reset-info">
            The limit resets at midnight.
          </p>
        </div>
      );
    }

    if (loading) {
      return (
        <div className="questionnaire-container">
          <div className="questionnaire-loading">
            <div className="questionnaire-loading-spinner"></div>
            <p>Generating your personalized learning roadmap...</p>
          </div>
        </div>
      );
    }

    if (error) {
      return (
        <div className="questionnaire-container questionnaire-error">
          <h2>Something went wrong</h2>
          <p>{error}</p>
          <button className="questionnaire-primary-btn" onClick={resetForm}>
            Try Again
          </button>
        </div>
      );
    }

    if (roadmap) {
      return (
        <div className="questionnaire-roadmap-wrapper">
          <div className="questionnaire-container questionnaire-roadmap">
            {renderUsageInfo()}
            <div
              className="questionnaire-roadmap-content"
              dangerouslySetInnerHTML={{ __html: roadmap }}
            ></div>
            <div className="questionnaire-action-buttons">
              <button
                className={`questionnaire-primary-btn ${
                  pdfLoading ? "questionnaire-loading-btn" : ""
                }`}
                onClick={handleDownloadPDF}
                disabled={pdfLoading}
              >
                {pdfLoading ? (
                  <>
                    <span className="questionnaire-btn-spinner"></span>
                    Generating PDF...
                  </>
                ) : (
                  "Download as PDF"
                )}
              </button>
              <button
                className="questionnaire-secondary-btn"
                onClick={resetForm}
              >
                Start Again
              </button>
            </div>
            <AIRelatedRoadmaps userAnswers={answers} />
          </div>
        </div>
      );
    }

    return (
      <div className="questionnaire-container">
        {renderUsageInfo()}
        <div className="questionnaire-progress-bar">
          <div
            className="questionnaire-progress-fill"
            style={{
              width: `${((currentStep + 1) / questions.length) * 100}%`,
            }}
          ></div>
        </div>

        <div className="questionnaire-step-indicator">
          Question {currentStep + 1} of {questions.length}
        </div>

        <h2>{currentQuestion.question}</h2>

        <div className="questionnaire-options-wrapper">
          {isMultiSelectQuestion(currentQuestion)
            ? currentQuestion.options.map((option) => (
                <div
                  key={option}
                  className={`questionnaire-option questionnaire-multi-option ${
                    answers[currentQuestion.id]?.includes(option)
                      ? "questionnaire-selected"
                      : ""
                  }`}
                  onClick={() => handleMultiSelect(currentQuestion.id, option)}
                >
                  <span className="questionnaire-check-indicator">
                    {answers[currentQuestion.id]?.includes(option) ? "✓" : ""}
                  </span>
                  {option}
                </div>
              ))
            : currentQuestion.options.map((option) => (
                <div
                  key={option}
                  className={`questionnaire-option ${
                    answers[currentQuestion.id] === option
                      ? "questionnaire-selected"
                      : ""
                  }`}
                  onClick={() => handleOptionSelect(currentQuestion.id, option)}
                >
                  {option}
                </div>
              ))}
        </div>

        <div className="questionnaire-navigation">
          {currentStep > 0 && (
            <button
              className="questionnaire-secondary-btn"
              onClick={handlePrevious}
            >
              Previous
            </button>
          )}

          <button
            className="questionnaire-primary-btn"
            onClick={handleNext}
            disabled={
              !isQuestionAnswered() ||
              (usageInfo && usageInfo.remainingCount === 0)
            }
          >
            {currentStep < questions.length - 1 ? "Next" : "Submit"}
          </button>
        </div>
      </div>
    );
  };

  return (
    <div className="questionnaire-page">
      <Navbar />
      <div className="questionnaire-content">{renderContent()}</div>
      <Footer />
    </div>
  );
};

export default AISuggestions;
