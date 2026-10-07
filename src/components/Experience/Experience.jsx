import React from 'react';
import { portfolioData } from '../../data/portfolioData';
import { Briefcase, Sparkles } from 'lucide-react';
import './Experience.css';

export default function Experience() {
  return (
    <section id="experience" className="experience-section">
      <div className="section-container">
        <div className="section-tag">Career Milestones</div>
        <h2 className="section-heading">
          Where I&apos;ve learned <br />
          <span className="gradient-text">by doing.</span>
        </h2>
        <p className="section-lead">
          Practical exposure to responsive interfaces, frontend implementation, design thinking, and problem-solving.
        </p>

        <div className="timeline-container">
          {portfolioData.experience.map((item) => (
            <div
              key={item.id}
              className={`timeline-item ${item.isPlaceholder ? 'placeholder' : ''}`}
            >
              <div className="timeline-node">
                <div className="timeline-node-inner" />
              </div>

              <div
                className={`timeline-card ${
                  item.isPlaceholder ? 'is-placeholder' : ''
                }`}
              >
                {item.isPlaceholder && (
                  <div className="placeholder-badge">
                    <Sparkles size={12} />
                    <span>Editable Entry (portfolioData.js)</span>
                  </div>
                )}

                <div className="timeline-meta">
                  <span className="timeline-date">{item.date}</span>
                  <span className="timeline-type">{item.type}</span>
                </div>

                <h3 className="timeline-role">{item.role}</h3>
                <span className="timeline-org">{item.organization}</span>

                <p className="timeline-desc">{item.description}</p>

                <div className="timeline-tags">
                  {item.tags.map((tag) => (
                    <span key={tag} className="tech-tag">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
