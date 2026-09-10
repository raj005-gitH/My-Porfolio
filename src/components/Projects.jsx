// src/components/Projects.jsx
import React from 'react';
import ProjectCard from './ProjectCard';
import { portfolioData } from '../portfolioData';

export default function Projects() {
  const { projects } = portfolioData;

  return (
    <section id="projects" className="projects-section">
      <div className="section-container">
        <div className="section-header">
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-subtitle-text">
            A selection of full-stack products, mobile apps, and tools I have built.
          </p>
        </div>
        <div className="projects-grid">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
