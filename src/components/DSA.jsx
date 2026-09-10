// src/components/DSA.jsx
import React from 'react';
import { ExternalLink, Code2, GitBranch } from 'lucide-react';
import { portfolioData } from '../portfolioData';

export default function DSA() {
  const { dsa, personalInfo } = portfolioData;

  return (
    <section id="dsa" className="dsa-section">
      <div className="section-container">
        <h2 className="section-title">{dsa.title}</h2>
        <div className="dsa-layout">
          
          {/* DSA Copy and Stats */}
          <div className="dsa-info">
            <p className="dsa-text">{dsa.content}</p>
            
            {/* Configurable Statistics Row */}
            {dsa.stats && dsa.stats.length > 0 && (
              <div className="dsa-stats-grid">
                {dsa.stats.map((stat, idx) => (
                  <div key={idx} className="dsa-stat-card">
                    <span className="dsa-stat-value">{stat.value}</span>
                    <span className="dsa-stat-label">{stat.label}</span>
                  </div>
                ))}
              </div>
            )}

            <div className="dsa-actions">
              <a
                href={personalInfo.leetcode}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary btn-sm"
                aria-label="Visit LeetCode profile"
              >
                <Code2 size={16} style={{ marginRight: '6px' }} />
                LeetCode Profile
                <ExternalLink size={12} style={{ marginLeft: '4px' }} />
              </a>
              <a
                href={personalInfo.dsaRepo}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary btn-sm"
                aria-label="Visit Data Structures and Algorithms practice GitHub repository"
              >
                <GitBranch size={16} style={{ marginRight: '6px' }} />
                GitHub DSA Repo
                <ExternalLink size={12} style={{ marginLeft: '4px' }} />
              </a>
            </div>
          </div>

          {/* Algorithmic Topics Badges Panel */}
          <div className="dsa-topics-panel">
            <h3 className="dsa-subheading">Core Areas of Focus</h3>
            <div className="dsa-topics-grid">
              {dsa.topics.map((topic) => (
                <span key={topic} className="dsa-topic-badge">
                  {topic}
                </span>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
