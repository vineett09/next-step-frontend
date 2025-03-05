import React from "react";
import "../styles/Maincontent.css";
import TechFields from "./TechFields.js";
import Footer from "./Footer.js";
import Navbar from "./Navbar.js";
import { useNavigate } from "react-router-dom";
const Maincontent = () => {
  const navigate = useNavigate();
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
        </div>
      </section>
      <TechFields />
      <section className="cta">
        <h2>Ready to Start Your Journey?</h2>
        <p>
          Join thousands of learners who are achieving their goals with our
          roadmaps.
        </p>
        <button className="btn-primary" onClick={() => navigate("/register")}>
          Sign Up Now
        </button>
      </section>
      <Footer />
    </div>
  );
};

export default Maincontent;
