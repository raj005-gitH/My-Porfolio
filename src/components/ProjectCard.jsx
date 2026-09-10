// src/components/ProjectCard.jsx
import React from "react";
import { ExternalLink, BookOpen, Star, Cpu } from "lucide-react";
import { Github } from "./CustomIcons";

export default function ProjectCard({ project }) {
  const {
    name,
    type,
    description,
    techStack,
    highlights,
    githubUrl,
    liveUrl,
    caseStudyUrl,
    image,
    imagePlaceholder,
  } = project;

  // Decide badge icon based on project type
  const renderBadge = () => {
    if (!type) return null;
    const isFeatured = type.toLowerCase().includes("featured");
    const isAi = type.toLowerCase().includes("ai");

    return (
      <div
        className={`project-badge ${isFeatured ? "badge-featured" : isAi ? "badge-ai" : "badge-general"}`}
      >
        {isFeatured ? (
          <Star size={12} className="badge-icon" />
        ) : isAi ? (
          <Cpu size={12} className="badge-icon" />
        ) : null}
        <span>{type}</span>
      </div>
    );
  };

  return (
    <article className="project-card">
      {/* Project Image Placeholder - designed to look like a clean technical blueprint */}
      <div className="project-image-container">
        {image ? (
          <img
            src={image}
            alt={`${name} project preview`}
            className="project-image"
          />
        ) : (
          <div className="project-image-placeholder">
            <div className="placeholder-grid-lines"></div>

            <div className="placeholder-terminal-header">
              <span className="terminal-dot red"></span>
              <span className="terminal-dot yellow"></span>
              <span className="terminal-dot green"></span>
              <span className="terminal-filename">
                {name.toLowerCase()}.config
              </span>
            </div>

            <div className="placeholder-content">
              <code className="placeholder-code">// {imagePlaceholder}</code>

              <div className="placeholder-accent-box">
                <span className="placeholder-tech-label">
                  {techStack.slice(0, 3).join(" | ")}
                </span>
              </div>
            </div>
          </div>
        )}

        {renderBadge()}
      </div>

      <div className="project-details">
        <h3 className="project-name">{name}</h3>
        <p className="project-description">{description}</p>

        <div className="project-tech-stack">
          {techStack.map((tech) => (
            <span key={tech} className="tech-tag tech-tag-sm">
              {tech}
            </span>
          ))}
        </div>

        <div className="project-features-container">
          <h4 className="features-title">Key Highlights</h4>
          <ul className="project-features">
            {highlights.map((highlight, index) => (
              <li key={index} className="feature-item">
                {highlight}
              </li>
            ))}
          </ul>
        </div>

        <div className="project-actions">
          {githubUrl && githubUrl !== "#" && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary btn-sm"
              aria-label={`View ${name} source code on GitHub`}
            >
              <Github size={16} style={{ marginRight: "6px" }} />
              GitHub
            </a>
          )}
          {liveUrl && liveUrl !== "#" && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary btn-sm"
              aria-label={`View Live Demo of ${name}`}
            >
              <ExternalLink size={16} style={{ marginRight: "6px" }} />
              Live Demo
            </a>
          )}
          {caseStudyUrl && caseStudyUrl !== "#" && (
            <a
              href={caseStudyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-tertiary btn-sm"
              aria-label={`View Case Study of ${name}`}
            >
              <BookOpen size={16} style={{ marginRight: "6px" }} />
              Case Study
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
