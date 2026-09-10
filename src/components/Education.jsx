// src/components/Education.jsx
import React from 'react';
import { GraduationCap, Award, Building2 } from 'lucide-react';
import { portfolioData } from '../portfolioData';

export default function Education() {
  const { education } = portfolioData;

  return (
    <section id="education" className="education-section">
      <div className="section-container">
        <h2 className="section-title">Education</h2>
        <div className="education-card">
          <div className="education-icon-container">
            <GraduationCap size={32} className="education-main-icon" />
          </div>
          
          <div className="education-details">
            <h3 className="education-degree">{education.degree}</h3>
            
            <div className="education-metadata">
              <div className="education-meta-item">
                <Building2 size={16} className="education-meta-icon" />
                <span className="education-institution">{education.institution}</span>
              </div>
              
              <div className="education-meta-item">
                <Award size={16} className="education-meta-icon" />
                <span className="education-cgpa">CGPA: {education.cgpa}</span>
              </div>
            </div>
          </div>
          
          <div className="education-year-badge">
            Class of {education.graduationYear}
          </div>
        </div>
      </div>
    </section>
  );
}
