import React, { useState, useEffect, useRef } from 'react';
import { portfolioData } from '../../data/portfolioData';
import { ArrowDown, Mail, Camera, RotateCcw } from 'lucide-react';
import './Hero.css';

export default function Hero() {
  const [profileSrc, setProfileSrc] = useState(portfolioData.personal.profileImage);
  const [imgError, setImgError] = useState(false);
  const fileInputRef = useRef(null);

  // Check if user uploaded a custom profile picture locally
  useEffect(() => {
    const savedPic = localStorage.getItem('custom_portfolio_profile_pic');
    if (savedPic) {
      setProfileSrc(savedPic);
    }
  }, []);

  const handleFileChange = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        if (typeof reader.result === 'string') {
          setProfileSrc(reader.result);
          setImgError(false);
          try {
            localStorage.setItem('custom_portfolio_profile_pic', reader.result);
          } catch {
            // LocalStorage might be full for large images; preview still works
          }
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleResetPhoto = (e) => {
    e.stopPropagation();
    localStorage.removeItem('custom_portfolio_profile_pic');
    setProfileSrc(portfolioData.personal.profileImage);
    setImgError(false);
  };

  return (
    <section id="hero" className="hero-section">
      <div className="section-container">
        <div className="hero-grid">
          {/* Left Column: Typography & CTAs */}
          <div className="hero-content">
            <div className="hero-status-pill animate-fade-in">
              <span className="hero-status-indicator" />
              <span>{portfolioData.personal.statusBadge}</span>
            </div>

            <h1 className="hero-heading animate-fade-up">
              <span>{portfolioData.personal.heroHeadingPrefix}</span>
              <br />
              <span className="gradient-text">
                {portfolioData.personal.heroHeadingGradient}
              </span>
            </h1>

            <p className="hero-subtitle animate-fade-up">
              {portfolioData.personal.role}
            </p>

            <p className="hero-description animate-fade-up">
              {portfolioData.personal.heroDescription}
            </p>

            <div className="hero-actions animate-fade-up">
              <a href="#projects" className="btn btn-primary">
                <span>Explore My Work</span>
                <ArrowDown size={16} />
              </a>

              <a href="#contact" className="btn btn-secondary">
                <span>Let's Connect</span>
                <Mail size={16} />
              </a>
            </div>

            {/* Quick Metrics */}
            <div className="hero-quick-stats animate-fade-in">
              <div className="quick-stat-item">
                <span className="quick-stat-label">CGPA</span>
                <span className="quick-stat-val">{portfolioData.personal.cgpa}</span>
              </div>
              <div className="quick-stat-item">
                <span className="quick-stat-label">Degree</span>
                <span className="quick-stat-val">{portfolioData.personal.degree}</span>
              </div>
              <div className="quick-stat-item">
                <span className="quick-stat-label">Batch</span>
                <span className="quick-stat-val">{portfolioData.personal.batch}</span>
              </div>
            </div>
          </div>

          {/* Right Column: Cosmic Portrait Frame & Floating Badges */}
          <div className="hero-visual">
            {/* Orbital Rings */}
            <div className="hero-orbit-ring">
              <div className="hero-orbit-satellite" />
            </div>
            <div className="hero-orbit-ring-outer" />

            {/* Futuristic Portrait Frame */}
            <div className="hero-portrait-frame">
              <div className="hero-portrait-inner">
                {!imgError ? (
                  <img
                    src={profileSrc}
                    alt={portfolioData.personal.fullName}
                    className="hero-portrait-img"
                    onError={() => setImgError(true)}
                  />
                ) : (
                  <div className="hero-portrait-fallback">
                    <span className="fallback-initials">
                      {portfolioData.personal.initials}
                    </span>
                    <span className="text-xs text-white/60">Lakshmi Kameswari</span>
                  </div>
                )}
              </div>

              {/* Photo customization trigger */}
              <button
                type="button"
                className="photo-upload-badge"
                onClick={() => fileInputRef.current?.click()}
                title="Upload or change profile picture"
                aria-label="Upload profile picture"
              >
                <Camera size={13} />
                <span>Add / Change Photo</span>
                {profileSrc !== portfolioData.personal.profileImage && (
                  <span
                    onClick={handleResetPhoto}
                    title="Reset to default photo"
                    className="hover:text-white ml-1"
                  >
                    <RotateCcw size={12} />
                  </span>
                )}
              </button>

              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                className="hidden"
                onChange={handleFileChange}
              />
            </div>

            {/* Floating Information Cards */}
            {portfolioData.heroFloatingCards.map((card, idx) => (
              <div
                key={card.label}
                className={`floating-hero-card ${card.position}`}
                style={{ animationDelay: `${idx * 0.45}s` }}
              >
                <span className="floating-card-label">{card.label}</span>
                <span className="floating-card-val">{card.value}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile floating cards fallback row */}
        <div className="floating-hero-mobile-row">
          {portfolioData.heroFloatingCards.map((card) => (
            <div key={card.label} className="tech-tag">
              <span className="text-pink-400 font-semibold mr-1.5">{card.label}:</span>
              <span>{card.value}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
