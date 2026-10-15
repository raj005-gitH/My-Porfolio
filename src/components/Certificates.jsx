// src/components/Certificates.jsx
import React from "react";
import { ExternalLink, Trophy } from "lucide-react";
import { portfolioData } from "../portfolioData";

export default function Certificates() {
  const { certificates } = portfolioData;

  const certificateData = Object.values(certificates?.categories || {});

  if (certificateData.length === 0) return null;

  return (
    <section id="certificates" className="certificate-section">
      <div className="section-container">
        <h2 className="section-title">{certificates.title}</h2>

        <div className="achievements-grid">
          {certificateData.map((certificate, index) => (
            <div key={index} className="achievement-card">
              <div className="achievement-icon-wrapper">
                <Trophy size={18} className="achievement-icon" />
              </div>

              <div className="achievement-text-content">
                <h3 className="achievement-item-title">{certificate.title}</h3>

                <a
                  href={certificate.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="certificate-link"
                >
                  View Certificate
                  <ExternalLink size={14} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
