import React, { useState, useEffect } from 'react';
import { portfolioData } from '../../data/portfolioData';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import './Navbar.css';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);

      const sections = ['about', 'skills', 'experience', 'projects', 'education', 'contact'];
      const scrollPos = window.scrollY + 120;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPos) {
          setActiveSection(sections[i]);
          return;
        }
      }
      if (window.scrollY < 200) {
        setActiveSection('hero');
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMobileMenu = () => setMobileMenuOpen(false);

  return (
    <>
      <header className={`navbar-header ${scrolled ? 'scrolled' : ''}`}>
        <div className="navbar-container">
          {/* Zone 1: Brand Wordmark */}
          <a href="#" className="navbar-brand" aria-label="Lakshmi Kameswari Home">
            <div className="navbar-brand-badge">{portfolioData.personal.initials}</div>
            <span className="navbar-brand-text">{portfolioData.personal.lastName}</span>
          </a>

          {/* Zone 2: Navigation Links */}
          <nav aria-label="Main Navigation">
            <ul className="navbar-links">
              {portfolioData.navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className={`nav-link ${
                      activeSection === link.href.substring(1) ? 'active' : ''
                    }`}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Zone 3: Actions */}
          <div className="navbar-actions">
            <a
              href="#contact"
              className="btn btn-primary text-xs py-2 px-3.5 desktop-only"
            >
              <span>Let's Talk</span>
              <ArrowUpRight size={14} />
            </a>

            <button
              className="mobile-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <div
        className={`mobile-menu-backdrop ${mobileMenuOpen ? 'open' : ''}`}
        onClick={closeMobileMenu}
        aria-hidden="true"
      />
      <div className={`mobile-menu-drawer ${mobileMenuOpen ? 'open' : ''}`}>
        <div className="space-y-6">
          <div className="flex items-center gap-3 pb-4 border-b border-white/10">
            <div className="navbar-brand-badge">{portfolioData.personal.initials}</div>
            <div>
              <div className="font-semibold text-white text-sm">
                {portfolioData.personal.fullName}
              </div>
              <div className="text-xs text-pink-300">
                {portfolioData.personal.degree}
              </div>
            </div>
          </div>

          <ul className="mobile-nav-list">
            {portfolioData.navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={`mobile-nav-link ${
                    activeSection === link.href.substring(1) ? 'active' : ''
                  }`}
                  onClick={closeMobileMenu}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="pt-6 border-t border-white/10 space-y-3">
          <a
            href={portfolioData.personal.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-secondary w-full text-center text-sm"
            onClick={closeMobileMenu}
          >
            Download Resume
          </a>
          <a
            href="#contact"
            className="btn btn-primary w-full text-center text-sm"
            onClick={closeMobileMenu}
          >
            Get In Touch
          </a>
        </div>
      </div>
    </>
  );
}
