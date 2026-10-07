import React from 'react';
import { portfolioData } from '../../data/portfolioData';
import { ArrowUp } from 'lucide-react';
import './Footer.css';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer-container">
      <div className="footer-inner">
        {/* Brand & Copyright */}
        <div className="footer-brand-lockup">
          <div className="navbar-brand-badge" style={{ width: 32, height: 32, fontSize: '0.85rem' }}>
            {portfolioData.personal.initials}
          </div>
          <span className="footer-copyright">
            © {currentYear} {portfolioData.personal.fullName}. Built with precision & clarity.
          </span>
        </div>

        {/* Quick Nav Anchors */}
        <ul className="footer-nav">
          {portfolioData.navLinks.slice(0, 5).map((link) => (
            <li key={link.href}>
              <a href={link.href} className="footer-link">
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Back To Top Button */}
        <button
          onClick={scrollToTop}
          className="back-to-top-btn"
          aria-label="Scroll back to top"
        >
          <span>Back to Top</span>
          <ArrowUp size={14} />
        </button>
      </div>
    </footer>
  );
}
