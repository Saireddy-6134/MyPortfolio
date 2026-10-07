import React, { useState, useEffect, useRef } from 'react';
import { portfolioData } from '../../data/portfolioData';
import { ChevronLeft, ChevronRight, Github, ExternalLink, Terminal, Code2, Globe } from 'lucide-react';
import './Projects.css';

export default function Projects() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const totalProjects = portfolioData.projects.length;

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % totalProjects);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + totalProjects) % totalProjects);
  };

  // Autoplay functionality
  useEffect(() => {
    if (isHovered) return;

    const timer = setInterval(() => {
      nextSlide();
    }, 6000);

    return () => clearInterval(timer);
  }, [isHovered, currentIndex]);

  // Touch Swipe Handlers
  const handleTouchStart = (e) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (touchStartX.current - touchEndX.current > 60) {
      nextSlide();
    }
    if (touchEndX.current - touchStartX.current > 60) {
      prevSlide();
    }
  };

  const currentProject = portfolioData.projects[currentIndex];

  const getVisualIcon = (idx) => {
    if (idx % 3 === 0) return <Terminal size={28} />;
    if (idx % 3 === 1) return <Code2 size={28} />;
    return <Globe size={28} />;
  };

  return (
    <section id="projects" className="projects-section">
      <div className="section-container">
        {/* Header Row */}
        <div className="projects-header-row">
          <div>
            <div className="section-tag">Featured Works</div>
            <h2 className="section-heading">
              Selected projects & <br />
              <span className="gradient-text">Software systems.</span>
            </h2>
            <p className="section-lead" style={{ marginBottom: 0 }}>
              Practical implementations spanning socket networking, desktop GUI utilities, and responsive web development.
            </p>
          </div>

          {/* Slider Arrows */}
          <div className="projects-slider-controls">
            <button
              onClick={prevSlide}
              className="slider-btn"
              aria-label="Previous project"
              title="Previous project"
            >
              <ChevronLeft size={20} />
            </button>
            <span className="font-mono text-sm text-pink-300">
              {currentIndex + 1} / {totalProjects}
            </span>
            <button
              onClick={nextSlide}
              className="slider-btn"
              aria-label="Next project"
              title="Next project"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        {/* Carousel Container */}
        <div
          className="project-carousel-container"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <div className="project-card-outer">
            <div className="project-card-grid">
              {/* Left Column: Project Details */}
              <div className="project-info-col">
                <div className="project-number-row">
                  <span className="project-num-badge">PROJECT {currentProject.number}</span>
                  <span className="project-category">{currentProject.category}</span>
                </div>

                <h3 className="project-title">{currentProject.title}</h3>
                <p className="project-description">{currentProject.description}</p>

                {/* Features list */}
                {currentProject.features && (
                  <ul className="project-features-list">
                    {currentProject.features.map((feat, i) => (
                      <li key={i} className="project-feature-item">
                        <span className="project-feature-bullet">◆</span>
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                )}

                {/* Tech tags */}
                <div className="project-tech-row">
                  {currentProject.technologies.map((tech) => (
                    <span key={tech} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Actions */}
                <div className="project-card-footer">
                  {currentProject.githubUrl && (
                    <a
                      href={currentProject.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-primary"
                    >
                      <Github size={16} />
                      <span>View Source Code</span>
                    </a>
                  )}

                  {currentProject.liveUrl && (
                    <a
                      href={currentProject.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-secondary"
                    >
                      <ExternalLink size={16} />
                      <span>Live Demonstration</span>
                    </a>
                  )}
                </div>
              </div>

              {/* Right Column: High-End Mockup Viewport */}
              <div className="project-visual-col">
                <div className="app-window-header">
                  <span className="window-dot red" />
                  <span className="window-dot yellow" />
                  <span className="window-dot green" />
                  <span className="text-[11px] text-white/40 font-mono ml-2">
                    {currentProject.title.toLowerCase().replace(/[^a-z0-9]/g, '-')}.app
                  </span>
                </div>

                <div className="app-window-body">
                  <div className="project-visual-watermark">
                    {currentProject.number}
                  </div>
                  <div className="project-visual-icon">
                    {getVisualIcon(currentIndex)}
                  </div>
                  <h4 className="project-visual-title">{currentProject.title}</h4>
                  <p className="project-visual-sub">
                    {currentProject.technologies.slice(0, 3).join(' • ')}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Dots Pagination */}
        <div className="projects-dots-nav">
          {portfolioData.projects.map((proj, idx) => (
            <button
              key={proj.id}
              onClick={() => setCurrentIndex(idx)}
              className={`project-dot ${currentIndex === idx ? 'active' : ''}`}
              aria-label={`Go to project ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
