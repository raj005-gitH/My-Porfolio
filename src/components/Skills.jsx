// src/components/Skills.jsx
import React from 'react';
import { Code, Layout, Server, Database, Wrench, Compass } from 'lucide-react';
import { portfolioData } from '../portfolioData';

export default function Skills() {
  const { skills } = portfolioData;

  // Map category title to appropriate Lucide icon for premium visual cue
  const getIcon = (categoryTitle) => {
    switch (categoryTitle.toLowerCase()) {
      case 'languages':
        return <Code size={20} className="skill-category-icon" />;
      case 'frontend':
        return <Layout size={20} className="skill-category-icon" />;
      case 'backend':
        return <Server size={20} className="skill-category-icon" />;
      case 'databases':
        return <Database size={20} className="skill-category-icon" />;
      case 'tools & platforms':
        return <Wrench size={20} className="skill-category-icon" />;
      case 'currently exploring':
        return <Compass size={20} className="skill-category-icon" />;
      default:
        return <Code size={20} className="skill-category-icon" />;
    }
  };

  return (
    <section id="skills" className="skills-section">
      <div className="section-container">
        <h2 className="section-title">Technical Skills</h2>
        <div className="skills-grid">
          {skills.categories.map((category) => (
            <div key={category.title} className="skill-card">
              <div className="skill-card-header">
                {getIcon(category.title)}
                <h3 className="skill-card-title">{category.title}</h3>
              </div>
              <ul className="skill-list">
                {category.items.map((skill) => (
                  <li key={skill} className="skill-item">
                    <span className="skill-bullet"></span>
                    <span className="skill-name">{skill}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
