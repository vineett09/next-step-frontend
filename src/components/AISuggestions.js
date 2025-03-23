// src/components/Questionnaire.jsx
import React, { useState } from "react";
import "../styles/AISuggestions.css";
import Navbar from "./Navbar";
import Footer from "./Footer";

const AISuggestions = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState({});
  const [loading, setLoading] = useState(false);
  const [roadmap, setRoadmap] = useState(null);
  const [error, setError] = useState(null);
  const [pdfLoading, setPdfLoading] = useState(false);

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
        "Mobile App Developer",
        "Data Scientist",
        "DevOps Engineer",
        "AI/ML Engineer",
        "Blockchain Developer",
        "Game Developer",
        "Cybersecurity Specialist",
        "Cloud Computing Specialist",
        "IoT Developer",
        "UI/UX Designer",
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
        "Python",
        "Java",
        "SQL",
        "React",
        "Node.js",
        "None",
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
    } else {
      handleSubmit();
    }
  };

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep((prev) => prev - 1);
    }
  };

  const handleSubmit = async () => {
    setLoading(true);
    try {
      const response = await fetch("/api/suggestions/suggest", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ answers }),
      });

      if (!response.ok) {
        throw new Error("Failed to generate roadmap");
      }

      const data = await response.json();
      setRoadmap(data.roadmap);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const resetForm = () => {
    setCurrentStep(0);
    setAnswers({});
    setRoadmap(null);
    setError(null);
  };

  const handleDownloadPDF = async () => {
    setPdfLoading(true);
    try {
      const html2pdf = (await import("html2pdf.js")).default;

      // Get the roadmap content container
      const element = document.querySelector(".questionnaire-roadmap-content");

      // Configure PDF options
      const opt = {
        margin: [10, 10, 10, 10],
        filename: `Learning-Roadmap-${new Date()
          .toLocaleDateString()
          .replace(/\//g, "-")}.pdf`,
        image: { type: "jpeg", quality: 0.98 },
        html2canvas: { scale: 2, useCORS: true, logging: false },
        jsPDF: { unit: "mm", format: "a4", orientation: "portrait" },
      };

      // Generate and download PDF
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

  const renderContent = () => {
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
          </div>
        </div>
      );
    }

    return (
      <div className="questionnaire-container">
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
            disabled={!isQuestionAnswered()}
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
