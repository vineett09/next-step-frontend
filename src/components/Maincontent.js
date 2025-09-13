import React, { useEffect } from "react";
import "../styles/Maincontent.css";
import TechFields from "./TechFields.js";
import Footer from "./Footer.js";
import Navbar from "./Navbar.js";
import { useNavigate } from "react-router-dom";

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;

const Maincontent = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const checkHealth = async () => {
      try {
        const response = await fetch(`${BACKEND_URL}/api/health`); // 🔹 replace with your backend health endpoint
        if (!response.ok) {
          throw new Error("Health check failed");
        }
        const data = await response.json();
        console.log("✅ Backend Health:", data);
      } catch (error) {
        console.error("❌ Health check error:", error);
      }
    };

    checkHealth();
  }, []); // runs once when component mounts

  return (
    <div>
      <Navbar />
      <section className="hero">
        <div className="hero-content">
          <h1>Your Path to Success Starts Here</h1>
          <p>
            Discover personalized roadmaps to master new skills, advance your
            career, and achieve your goals.
          </p>
          <button
            className="btn-primary"
            onClick={() => navigate("/explore-features")}
          >
            Explore Features
          </button>
        </div>
      </section>
      <TechFields />
      <section className="cta">
        <h2>Ready to Start Your Journey?</h2>
        <p>
          Join thousands of learners who are achieving their goals with our
          roadmaps.
        </p>
        <button className="btn-primary" onClick={() => navigate("/explore")}>
          Explore Roadmaps
        </button>
      </section>
      <Footer />
    </div>
  );
};

export default Maincontent;
