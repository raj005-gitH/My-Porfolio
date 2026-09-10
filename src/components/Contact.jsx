// src/components/Contact.jsx
import React from 'react';
import { Mail, ExternalLink } from 'lucide-react';
import { Github, Linkedin } from './CustomIcons';
import { portfolioData } from '../portfolioData';

export default function Contact() {
  const { personalInfo } = portfolioData;

  return (
    <section id="contact" className="contact-section">
      <div className="section-container">
        <div className="contact-box">
          <h2 className="contact-title">Let's build something.</h2>
          <p className="contact-subtitle">
            I'm always interested in opportunities to build, learn, and solve meaningful technical problems. Whether you have a question, want to discuss a project, or just want to connect, feel free to reach out.
          </p>
          
          <div className="contact-ctas">
            <a
              href={`mailto:${personalInfo.email}`}
              className="btn btn-primary"
              aria-label="Send an Email to Raj"
            >
              <Mail size={18} style={{ marginRight: '8px' }} />
              Say Hello
            </a>
          </div>

          <div className="contact-links-grid">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="contact-link-item"
              aria-label="GitHub Profile"
            >
              <Github size={20} />
              <span>GitHub</span>
              <ExternalLink size={12} className="link-arrow" />
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="contact-link-item"
              aria-label="LinkedIn Profile"
            >
              <Linkedin size={20} />
              <span>LinkedIn</span>
              <ExternalLink size={12} className="link-arrow" />
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              className="contact-link-item"
              aria-label="Email Raj Thakur"
            >
              <Mail size={20} />
              <span>Email</span>
              <ExternalLink size={12} className="link-arrow" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
