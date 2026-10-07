import React from 'react';
import { portfolioData } from '../../data/portfolioData';
import { GraduationCap } from 'lucide-react';
import './Education.css';

export default function Education() {
  return (
    <section id="education" className="education-section">
      <div className="section-container">
        <div className="section-tag">Academic Background</div>
        <h2 className="section-heading">
          Education & <br />
          <span className="gradient-text">Foundations.</span>
        </h2>
        <p className="section-lead">
          A consistent track record of academic dedication and rigorous foundational study in computer science.
        </p>

        <div className="education-grid">
          {portfolioData.education.map((item) => (
            <div
              key={item.degree}
              className={`education-card ${item.highlight ? 'highlight' : ''}`}
            >
              <div>
                <div className="education-card-top">
                  <span className="education-period">{item.period}</span>
                  <span className="education-score-badge">{item.score}</span>
                </div>

                <h3 className="education-degree">{item.degree}</h3>
                <span className="education-institution">{item.institution}</span>
              </div>

              <p className="education-description">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
