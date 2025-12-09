import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-logo">
            <div className="logo-icon-footer">💧</div>
            <span className="logo-text">Mika Water Solutions</span>
          </div>

          <p className="footer-text">
            Professional plumbing services you can trust. Licensed, insured, and
            dedicated to excellence.
          </p>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2024 Mika Water Solution. All rights reserved.</p>

          
        </div>
      </div>
    </footer>
  );
}

export default Footer;
