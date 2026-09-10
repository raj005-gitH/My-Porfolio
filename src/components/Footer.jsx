// src/components/Footer.jsx
import React from 'react';
import { portfolioData } from '../portfolioData';

export default function Footer() {
  const { personalInfo } = portfolioData;
  const currentYear = new Date().getFullYear(); // Or hardcode 2026 as per request, let's use 2026 to match exact spec

  return (
    <footer className="footer" role="contentinfo">
      <div className="footer-container">
        <p className="footer-copyright">
          © 2026 {personalInfo.name}. All rights reserved.
        </p>
        <div className="footer-links">
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="footer-link"
          >
            GitHub
          </a>
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="footer-link"
          >
            LinkedIn
          </a>
          <a
            href={`mailto:${personalInfo.email}`}
            className="footer-link"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}
