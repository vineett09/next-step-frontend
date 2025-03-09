import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { techFields, techSkills } from "../data/TechFieldsData";
import "../styles/RelatedRoadmaps.css";
const RelatedRoadmaps = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const currentPath = location.pathname;

  const findCurrentRoadmap = () => {
    const allRoadmaps = [...techFields, ...techSkills];
    return allRoadmaps.find((item) => item.link === currentPath);
  };

  const getRelatedRoadmaps = () => {
    const currentRoadmap = findCurrentRoadmap();
    if (!currentRoadmap) return [];

    const allRoadmaps = [...techFields, ...techSkills];

    // Create relevance scores for each roadmap
    const scoredRoadmaps = allRoadmaps
      .filter((roadmap) => roadmap.id !== currentRoadmap.id)
      .map((roadmap) => {
        // Extract meaningful terms from descriptions
        const currentTerms = extractTerms(currentRoadmap.description);
        const roadmapTerms = extractTerms(roadmap.description);

        // Calculate technology relationship score
        let score = calculateRelevanceScore(currentTerms, roadmapTerms);

        // Boost score if titles are in the same domain
        if (areInSameDomain(currentRoadmap.title, roadmap.title)) {
          score += 30;
        }

        // Check if they're complementary technologies
        if (areComplementaryTechnologies(currentRoadmap, roadmap)) {
          score += 25;
        }

        return { roadmap, score };
      });

    // Sort by score and take top 4 with some randomization for variety
    return diversifyResults(scoredRoadmaps);
  };

  // Extract meaningful terms from description
  const extractTerms = (description) => {
    return description
      .toLowerCase()
      .replace(/[^\w\s]/g, "") // Remove punctuation
      .split(/\s+/) // Split by whitespace
      .filter(
        (term) =>
          term.length > 3 && // Only meaningful words
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
  };

  // Calculate relevance score based on shared terms
  const calculateRelevanceScore = (terms1, terms2) => {
    const sharedTerms = terms1.filter((term) => terms2.includes(term));
    const uniqueSharedTerms = [...new Set(sharedTerms)];

    // Weight by technology specificity
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
  };

  // Check if two technologies are in the same domain
  const areInSameDomain = (title1, title2) => {
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
  };

  // Check if technologies commonly work together
  const areComplementaryTechnologies = (tech1, tech2) => {
    const complementaryPairs = [
      // Frontend + Backend pairs
      ["React", "Node.js"],
      ["Angular", "Spring Boot"],
      ["Vue.js", "PHP"],
      // Mobile dev pairs
      ["Android", "Kotlin"],
      ["iOS", "Swift"],
      ["Mobile", "Flutter"],
      // Data science ecosystem
      ["Python", "TensorFlow"],
      ["Data Scientist", "SQL"],
      ["Machine Learning", "Data Analyst"],
      // DevOps toolchain
      ["Docker", "Kubernetes"],
      ["AWS", "Terraform"],
      ["DevOps", "Git"],
      // Full stack combinations
      ["Frontend", "Backend"],
      ["JavaScript", "Node.js"],
      ["Full Stack", "React"],
      // Cloud services
      ["Cloud Computing", "AWS"],
      ["Azure", "DevOps"],
      ["Kubernetes", "Cloud"],
      // Security related
      ["Cybersecurity", "Blockchain"],
      ["Security", "Linux"],
      // IoT ecosystem
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
  };

  // Ensure diverse results by combining high scores with some randomness
  const diversifyResults = (scoredRoadmaps) => {
    // Sort by score descending
    scoredRoadmaps.sort((a, b) => b.score - a.score);

    // Take top 2 highest scoring roadmaps
    const topRoadmaps = scoredRoadmaps.slice(0, 2).map((item) => item.roadmap);

    // For the other 2, use weighted random selection from the rest
    const remainingRoadmaps = scoredRoadmaps.slice(2);

    // Create weighted probabilities based on scores
    const totalRemaining = remainingRoadmaps.reduce(
      (sum, item) => sum + item.score,
      0
    );
    let selectedRoadmaps = [];

    // Select 2 more using weighted randomness
    for (let i = 0; i < 2 && remainingRoadmaps.length > 0; i++) {
      const randomValue = Math.random() * totalRemaining;
      let accumulator = 0;

      for (let j = 0; j < remainingRoadmaps.length; j++) {
        accumulator += remainingRoadmaps[j].score;

        if (accumulator >= randomValue) {
          selectedRoadmaps.push(remainingRoadmaps[j].roadmap);
          remainingRoadmaps.splice(j, 1); // Remove the selected roadmap
          break;
        }
      }
    }

    // If we somehow don't have enough, just take from the top scores
    if (selectedRoadmaps.length < 2 && scoredRoadmaps.length > 2) {
      selectedRoadmaps = scoredRoadmaps.slice(2, 4).map((item) => item.roadmap);
    }

    return [...topRoadmaps, ...selectedRoadmaps];
  };

  const relatedRoadmaps = getRelatedRoadmaps();

  const handleRoadmapClick = (roadmap) => {
    navigate(roadmap.link, {
      state: { title: roadmap.title, description: roadmap.description },
    });
  };

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

export default RelatedRoadmaps;
