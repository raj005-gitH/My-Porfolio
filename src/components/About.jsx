// src/components/About.jsx
import React from 'react';
import { portfolioData } from '../portfolioData';

export default function About() {
  const { about } = portfolioData;

  return (
    <section id="about" className="about-section">
      <div className="section-container">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <p className="about-text">{about.description}</p>
          
          <div className="about-tech-focus">
            <h3 className="about-subheading">Primary Stack & Focus</h3>
            <div className="tech-tags-container">
              {about.primaryTechnologies.map((tech) => (
                <span key={tech} className="tech-tag tech-tag-featured">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
