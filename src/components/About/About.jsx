import React from 'react';
import { portfolioData } from '../../data/portfolioData';
import { Quote, Sparkles, Zap, Target, MapPin } from 'lucide-react';
import './About.css';

export default function About() {
  const getPillarIcon = (iconType) => {
    switch (iconType) {
      case 'sparkle':
        return <Sparkles size={16} />;
      case 'zap':
        return <Zap size={16} />;
      case 'target':
        return <Target size={16} />;
      case 'mapPin':
        return <MapPin size={16} />;
      default:
        return <Sparkles size={16} />;
    }
  };

  return (
    <section id="about" className="about-section">
      <div className="section-container">
        <div className="section-tag">{portfolioData.about.tag}</div>
        <h2 className="section-heading">
          Classic clarity. <br />
          <span className="gradient-text">Modern energy.</span>
        </h2>
        <p className="section-lead">{portfolioData.about.lead}</p>

        {/* Bento Grid */}
        <div className="about-bento-grid">
          {/* Quote Card (Spans 2 columns) */}
          <div className="glass-card about-card about-quote-card">
            <Quote size={28} className="about-quote-icon" />
            <p className="about-quote-text">
              &ldquo;{portfolioData.about.quote}&rdquo;
            </p>
            <div className="about-quote-author">
              {portfolioData.personal.fullName}
            </div>
          </div>

          {/* Key Metrics / Stats Card */}
          <div className="glass-card about-card about-stats-card">
            {portfolioData.about.stats.map((stat) => (
              <div key={stat.label} className="about-stat-row">
                <span className="about-stat-title">{stat.label}</span>
                <span
                  className={`about-stat-number ${
                    stat.highlight ? 'highlight' : ''
                  }`}
                >
                  {stat.value}
                </span>
              </div>
            ))}
          </div>

          {/* 4 Pillars in Bento Box */}
          {portfolioData.about.pillars.map((pillar) => (
            <div key={pillar.title} className="pillar-card">
              <div className="pillar-header">
                <span className="pillar-title">{pillar.title}</span>
                <div className="pillar-icon-box">
                  {getPillarIcon(pillar.icon)}
                </div>
              </div>
              <p className="pillar-text">{pillar.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
