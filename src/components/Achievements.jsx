// src/components/Achievements.jsx
import React from 'react';
import { Trophy } from 'lucide-react';
import { portfolioData } from '../portfolioData';

export default function Achievements() {
  const { achievements } = portfolioData;

  if (!achievements || achievements.length === 0) return null;

  return (
    <section id="achievements" className="achievements-section">
      <div className="section-container">
        <h2 className="section-title">Achievements</h2>
        <div className="achievements-grid">
          {achievements.map((achievement, index) => (
            <div key={index} className="achievement-card">
              <div className="achievement-icon-wrapper">
                <Trophy size={18} className="achievement-icon" />
              </div>
              <div className="achievement-text-content">
                <h3 className="achievement-item-title">{achievement.title}</h3>
                <p className="achievement-item-desc">{achievement.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
