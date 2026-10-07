import React, { useEffect, useRef, useState } from 'react';
import { portfolioData } from '../../data/portfolioData';
import './Skills.css';

export default function Skills() {
  const [animated, setAnimated] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimated(true);
        }
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" className="skills-section" ref={sectionRef}>
      <div className="section-container">
        <div className="section-tag">Core Competencies</div>
        <h2 className="section-heading">
          Technical tools & <br />
          <span className="gradient-text">Engineering depth.</span>
        </h2>
        <p className="section-lead">
          A continuous pursuit of foundational computer science principles, intelligent data modeling, and modern web application craftsmanship.
        </p>

        <div className="skills-grid">
          {portfolioData.skills.map((skill) => (
            <div key={skill.name} className="skill-card">
              <div className="skill-card-top">
                <span className="skill-name">{skill.name}</span>
                <span className="skill-percent">{skill.level}%</span>
              </div>
              <div className="skill-category">{skill.category}</div>
              <p className="skill-description">{skill.description}</p>
              <div className="skill-bar-track">
                <div
                  className="skill-bar-fill"
                  style={{
                    width: animated ? `${skill.level}%` : '0%',
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
