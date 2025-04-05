import React, { useState, useEffect, useMemo } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { techFields, techSkills } from "../data/TechFieldsData";
import "../styles/RelatedRoadmaps.css";
import Loader from "./Loader";

const RelatedRoadmaps = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const currentPath = location.pathname;
  const [isLoading, setIsLoading] = useState(true);
  const [relatedRoadmaps, setRelatedRoadmaps] = useState([]);

  // Extract terms from description - memoized to avoid recalculation
  const extractTerms = useMemo(
    () => (description) => {
      return description
        .toLowerCase()
        .replace(/[^\w\s]/g, "")
        .split(/\s+/)
        .filter(
          (term) =>
            term.length > 3 &&
            ![
              "with",
              "that",
              "this",
              "from",
              "they",
              "have",
              "their",
              "using",
            ].includes(term)
        );
    },
    []
  );

  // Calculate relevance score - memoized to avoid recalculation
  const calculateRelevanceScore = useMemo(
    () => (terms1, terms2) => {
      const sharedTerms = terms1.filter((term) => terms2.includes(term));
      const uniqueSharedTerms = [...new Set(sharedTerms)];

      const techTerms = uniqueSharedTerms.filter((term) =>
        [
          "data",
          "web",
          "cloud",
          "mobile",
          "development",
          "design",
          "security",
          "machine",
          "learning",
          "api",
          "backend",
          "frontend",
          "full",
          "stack",
          "javascript",
          "python",
          "java",
          "react",
          "node",
          "angular",
          "vue",
        ].includes(term)
      );

      return uniqueSharedTerms.length * 5 + techTerms.length * 10;
    },
    []
  );

  // Check if technologies are in the same domain - memoized
  const areInSameDomain = useMemo(
    () => (title1, title2) => {
      const domains = [
        ["Frontend", "React", "Angular", "Vue", "UI/UX"],
        ["Backend", "Node.js", "Python", "Java", "PHP", "Ruby", "Spring"],
        ["Mobile", "Android", "iOS", "Flutter", "Kotlin"],
        [
          "Data",
          "Data Science",
          "Data Analyst",
          "Machine Learning",
          "TensorFlow",
        ],
        ["DevOps", "Docker", "Kubernetes", "AWS", "Azure", "Cloud"],
        ["Security", "Cybersecurity", "Blockchain"],
        ["Game", "Unity", "Unreal"],
        ["IoT", "Embedded", "Robotics"],
      ];

      title1 = title1.toLowerCase();
      title2 = title2.toLowerCase();

      return domains.some(
        (domain) =>
          domain.some((term) => title1.includes(term.toLowerCase())) &&
          domain.some((term) => title2.includes(term.toLowerCase()))
      );
    },
    []
  );

  // Check if technologies are complementary - memoized
  const areComplementaryTechnologies = useMemo(
    () => (tech1, tech2) => {
      const complementaryPairs = [
        ["React", "Node.js"],
        ["Angular", "Spring Boot"],
        ["Vue.js", "PHP"],
        ["Android", "Kotlin"],
        ["iOS", "Swift"],
        ["Mobile", "Flutter"],
        ["Python", "TensorFlow"],
        ["Data Scientist", "SQL"],
        ["Machine Learning", "Data Analyst"],
        ["Docker", "Kubernetes"],
        ["AWS", "Terraform"],
        ["DevOps", "Git"],
        ["Frontend", "Backend"],
        ["JavaScript", "Node.js"],
        ["Full Stack", "React"],
        ["Cloud Computing", "AWS"],
        ["Azure", "DevOps"],
        ["Kubernetes", "Cloud"],
        ["Cybersecurity", "Blockchain"],
        ["Security", "Linux"],
        ["IoT", "Embedded"],
        ["Robotics", "C++"],
        ["IoT", "Cloud"],
      ];

      const title1 = tech1.title.toLowerCase();
      const title2 = tech2.title.toLowerCase();

      return complementaryPairs.some(
        ([a, b]) =>
          (title1.includes(a.toLowerCase()) &&
            title2.includes(b.toLowerCase())) ||
          (title1.includes(b.toLowerCase()) && title2.includes(a.toLowerCase()))
      );
    },
    []
  );

  // Diversify the results - memoized
  const diversifyResults = useMemo(
    () => (scoredRoadmaps) => {
      const sortedRoadmaps = [...scoredRoadmaps].sort(
        (a, b) => b.score - a.score
      );
      const topRoadmaps = sortedRoadmaps
        .slice(0, 2)
        .map((item) => item.roadmap);
      const remainingRoadmaps = sortedRoadmaps.slice(2);

      const totalRemaining = remainingRoadmaps.reduce(
        (sum, item) => sum + item.score,
        0
      );
      let selectedRoadmaps = [];

      for (let i = 0; i < 2 && remainingRoadmaps.length > 0; i++) {
        const randomValue = Math.random() * totalRemaining;
        let accumulator = 0;

        for (let j = 0; j < remainingRoadmaps.length; j++) {
          accumulator += remainingRoadmaps[j].score;

          if (accumulator >= randomValue) {
            selectedRoadmaps.push(remainingRoadmaps[j].roadmap);
            remainingRoadmaps.splice(j, 1);
            break;
          }
        }
      }

      if (selectedRoadmaps.length < 2 && scoredRoadmaps.length > 2) {
        selectedRoadmaps = scoredRoadmaps
          .slice(2, 4)
          .map((item) => item.roadmap);
      }

      return [...topRoadmaps, ...selectedRoadmaps];
    },
    []
  );

  // Find current roadmap - memoized based on the current path
  const currentRoadmap = useMemo(() => {
    const allRoadmaps = [...techFields, ...techSkills];
    return allRoadmaps.find((item) => item.link === currentPath);
  }, [currentPath]);

  // Calculate related roadmaps - only when currentRoadmap changes
  useEffect(() => {
    const calculateRelatedRoadmaps = () => {
      if (!currentRoadmap) {
        setRelatedRoadmaps([]);
        return;
      }

      const allRoadmaps = [...techFields, ...techSkills];

      const scoredRoadmaps = allRoadmaps
        .filter((roadmap) => roadmap.id !== currentRoadmap.id)
        .map((roadmap) => {
          const currentTerms = extractTerms(currentRoadmap.description);
          const roadmapTerms = extractTerms(roadmap.description);

          let score = calculateRelevanceScore(currentTerms, roadmapTerms);

          if (areInSameDomain(currentRoadmap.title, roadmap.title)) {
            score += 30;
          }

          if (areComplementaryTechnologies(currentRoadmap, roadmap)) {
            score += 25;
          }

          return { roadmap, score };
        });

      setRelatedRoadmaps(diversifyResults(scoredRoadmaps));
    };

    calculateRelatedRoadmaps();
    setIsLoading(false);
  }, [
    currentRoadmap,
    extractTerms,
    calculateRelevanceScore,
    areInSameDomain,
    areComplementaryTechnologies,
    diversifyResults,
  ]);

  const handleRoadmapClick = (roadmap) => {
    navigate(roadmap.link, {
      state: { title: roadmap.title, description: roadmap.description },
    });
  };

  if (isLoading) {
    return <Loader loading={true} />;
  }

  if (relatedRoadmaps.length === 0) return null;

  return (
    <div className="related-roadmaps">
      <h2>
        <span className="line"></span> Explore Related Roadmaps 🚀{" "}
        <span className="line"></span>
      </h2>

      <div className="tech-grid-container-outer">
        <div className="tech-grid-container">
          {relatedRoadmaps.map((roadmap) => (
            <div
              key={roadmap.id}
              className="tech-card-container"
              onClick={() => handleRoadmapClick(roadmap)}
            >
              <div className="tech-title-group">
                <div className="tech-icon-container">{roadmap.icon}</div>
                <h3>{roadmap.title}</h3>
              </div>
              <div className="roadmap-description">
                <p>{`A comprehensive roadmap to achieve ${roadmap.title} field in 2025.`}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default React.memo(RelatedRoadmaps);
