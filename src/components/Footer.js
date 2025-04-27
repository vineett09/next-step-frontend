import React from "react";
import { FaEnvelope } from "react-icons/fa";
import "../styles/Footer.css";

const Footer = () => {
  return (
    <footer className="footer simple-footer">
      <div className="footer-bottom">
        <p className="copyright">
          &copy; {new Date().getFullYear()} My Personal Project. All rights
          reserved.
        </p>
        <div className="contact-email">
          <FaEnvelope className="email-icon" />
          <a href="mailto:nextstep3738@gmail.com" className="email-link">
            nextstep3738@gmail.com
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
