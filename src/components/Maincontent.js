import React from "react";
import "../styles/Maincontent.css";
import TechFields from "../components/TechFileds.js";
const Maincontent = () => {
  return (
    <div>
      <section className="hero">
        <div className="hero-content">
          <h1>Your Path to Success Starts Here</h1>
          <p>
            Discover personalized roadmaps to master new skills, advance your
            career, and achieve your goals.
          </p>
          <div className="hero-buttons">
            <a href="/signup" className="btn-primary">
              Get Started
            </a>
            <a href="/explore" className="btn-secondary">
              Explore Roadmaps
            </a>
          </div>
        </div>
        <div className="hero-image">
          <img src="roadmap-hero.png" alt="Roadmap Illustration" />
        </div>
      </section>
      <TechFields />
      <section className="cta">
        <h2>Ready to Start Your Journey?</h2>
        <p>
          Join thousands of learners who are achieving their goals with our
          roadmaps.
        </p>
        <a href="/signup" className="btn-primary">
          Sign Up Now
        </a>
      </section>

      <footer className="footer">
        <div className="footer-links">
          <a href="/about">About Us</a>
          <a href="/contact">Contact</a>
          <a href="/privacy">Privacy Policy</a>
          <a href="/terms">Terms of Service</a>
        </div>
        <div className="social-media">
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Twitter
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
        </div>
        <p>&copy; 2023 Roadmap Website. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Maincontent;
