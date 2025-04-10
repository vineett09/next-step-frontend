import React from "react";
import "../styles/Footer.css";

const Footer = () => {
  return (
    <footer className="footer simple-footer">
      <div className="footer-bottom">
        <p className="copyright">
          &copy; {new Date().getFullYear()} My Personal Project. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
