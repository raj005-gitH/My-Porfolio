// src/components/Experience.jsx
import React from 'react';
import { Calendar, Users } from 'lucide-react';
import { portfolioData } from '../portfolioData';

export default function Experience() {
  const { experience } = portfolioData;

  return (
    <section id="experience" className="experience-section">
      <div className="section-container">
        <h2 className="section-title">{experience.title}</h2>
        <div className="timeline-container">
          {experience.items.map((item, index) => (
            <div key={index} className="timeline-item">
              <div className="timeline-dot"></div>
              
              <div className="timeline-content">
                <div className="timeline-header">
                  <div>
                    <h3 className="experience-job-title">{item.title}</h3>
                    <div className="experience-role-container">
                      <Users size={14} className="experience-role-icon" />
                      <span className="experience-role">{item.role}</span>
                    </div>
                  </div>
                  <div className="experience-duration-container">
                    <Calendar size={14} className="experience-duration-icon" />
                    <span className="experience-duration">{item.duration}</span>
                  </div>
                </div>

                <ul className="experience-highlights">
                  {item.highlights.map((highlight, hIdx) => (
                    <li key={hIdx} className="experience-highlight-item">
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
