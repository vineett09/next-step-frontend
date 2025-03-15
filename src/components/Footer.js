import React from "react";
import "../styles/Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section links-section">
          <h3 className="footer-title">Navigation</h3>
          <div className="footer-links">
            <a href="/about" className="footer-link">
              About Us
            </a>
            <a href="/contact" className="footer-link">
              Contact
            </a>
            <a href="/privacy" className="footer-link">
              Privacy Policy
            </a>
            <a href="/terms" className="footer-link">
              Terms of Service
            </a>
          </div>
        </div>

        <div className="footer-section social-section">
          <h3 className="footer-title">Connect With Us</h3>
          <div className="social-media">
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link twitter"
            >
              <i className="fab fa-twitter"></i> Twitter
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link linkedin"
            >
              <i className="fab fa-linkedin"></i> LinkedIn
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link github"
            >
              <i className="fab fa-github"></i> GitHub
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p className="copyright">
          &copy; {new Date().getFullYear()} Roadmap Website. All rights
          reserved.
        </p>
        <div className="footer-accent" />
      </div>
    </footer>
  );
};

export default Footer;
