import React, { useState } from 'react';
import { portfolioData } from '../../data/portfolioData';
import { Mail, Linkedin, Github, FileText, MapPin, Copy, Check, Send } from 'lucide-react';
import './Contact.css';

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(portfolioData.contact.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="contact" className="contact-section">
      <div className="section-container">
        <div className="contact-card-main">
          <div className="contact-layout">
            {/* Left Column: Direct Info & Channels */}
            <div>
              <div className="section-tag">Direct Inquiries</div>
              <h2 className="section-heading" style={{ fontSize: 'clamp(2rem, 3.5vw, 2.75rem)' }}>
                {portfolioData.contact.heading}
              </h2>
              <p className="text-secondary text-sm md:text-base leading-relaxed mb-6">
                {portfolioData.contact.subheading}
              </p>

              <div className="contact-channels-list">
                {/* Email item with copy button */}
                <div className="contact-channel-item justify-between">
                  <a
                    href={`mailto:${portfolioData.contact.email}`}
                    className="flex items-center gap-4 text-inherit no-underline"
                  >
                    <div className="contact-channel-icon">
                      <Mail size={18} />
                    </div>
                    <div className="contact-channel-details">
                      <span className="contact-channel-label">Email Address</span>
                      <span className="contact-channel-value">
                        {portfolioData.contact.email}
                      </span>
                    </div>
                  </a>

                  <button
                    onClick={handleCopyEmail}
                    className="btn-icon"
                    title={copied ? "Email copied!" : "Copy email address"}
                    aria-label="Copy email address"
                  >
                    {copied ? <Check size={16} className="text-emerald-400" /> : <Copy size={16} />}
                  </button>
                </div>

                {/* Location item */}
                <div className="contact-channel-item">
                  <div className="contact-channel-icon">
                    <MapPin size={18} />
                  </div>
                  <div className="contact-channel-details">
                    <span className="contact-channel-label">Based In</span>
                    <span className="contact-channel-value">
                      {portfolioData.contact.location}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Quick Action Hub & Socials */}
            <div className="contact-actions-panel">
              <h3 className="contact-actions-heading">Connect & Profiles</h3>
              <p className="contact-actions-desc">
                Review verified profiles, inspect source code repositories, or download a formal curriculum vitae.
              </p>

              <div className="contact-btn-grid">
                <a
                  href={`mailto:${portfolioData.contact.email}`}
                  className="btn btn-primary w-full"
                >
                  <Send size={16} />
                  <span>Send Direct Email</span>
                </a>

                <a
                  href={portfolioData.contact.linkedIn}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-secondary w-full"
                >
                  <Linkedin size={16} />
                  <span>LinkedIn Profile</span>
                </a>

                <a
                  href={portfolioData.contact.gitHub}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-secondary w-full"
                >
                  <Github size={16} />
                  <span>GitHub Repositories</span>
                </a>

                <a
                  href={portfolioData.personal.resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-secondary w-full"
                >
                  <FileText size={16} />
                  <span>Download Curriculum Vitae (PDF)</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
