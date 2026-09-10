// src/components/Hero.jsx
import React from 'react';
import { Mail, ArrowRight, Download } from 'lucide-react';
import { Github, Linkedin } from './CustomIcons';
import { portfolioData } from '../portfolioData';

export default function Hero() {
  const { personalInfo } = portfolioData;

  const handleProjectsClick = (e) => {
    e.preventDefault();
    const targetElement = document.querySelector('#projects');
    if (targetElement) {
      const navbarHeight = 60;
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navbarHeight;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="home" className="hero-section">
      <div className="hero-content">
        <p className="hero-greeting">Hi, my name is</p>
        <h1 className="hero-name">{personalInfo.name}</h1>
        <h2 className="hero-headline">{personalInfo.title}</h2>
        <p className="hero-subtitle">{personalInfo.subTitle}</p>

        <div className="hero-ctas">
          <a
            href="#projects"
            onClick={handleProjectsClick}
            className="btn btn-primary"
            aria-label="View Projects"
          >
            View Projects
            <ArrowRight size={18} style={{ marginLeft: '8px' }} />
          </a>
          <a
            href={personalInfo.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-secondary"
            aria-label="Download Resume"
          >
            <Download size={18} style={{ marginRight: '8px' }} />
            Download Resume
          </a>
        </div>

        <div className="hero-socials">
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon-link"
            aria-label="GitHub Profile"
          >
            <Github size={22} />
          </a>
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon-link"
            aria-label="LinkedIn Profile"
          >
            <Linkedin size={22} />
          </a>
          <a
            href={`mailto:${personalInfo.email}`}
            className="social-icon-link"
            aria-label="Send Email"
          >
            <Mail size={22} />
          </a>
        </div>
      </div>
    </section>
  );
}
