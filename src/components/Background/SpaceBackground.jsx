import React, { useEffect, useRef } from 'react';
import './SpaceBackground.css';

export default function SpaceBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // Check reduced motion
    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;

    // Create stars
    const starCount = Math.min(100, Math.floor((width * height) / 12000));
    const stars = Array.from({ length: starCount }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      radius: Math.random() * 1.3 + 0.4,
      baseAlpha: Math.random() * 0.7 + 0.2,
      alpha: Math.random() * 0.7 + 0.2,
      twinkleSpeed: (Math.random() * 0.02 + 0.005) * (Math.random() > 0.5 ? 1 : -1),
      color:
        Math.random() > 0.75
          ? '#ffb3d9' // subtle pink tint
          : Math.random() > 0.5
          ? '#d8c2ff' // subtle lavender tint
          : '#ffffff',
    }));

    // Shooting stars / comets
    const shootingStars = [];
    let lastShootingStarTime = Date.now();

    function addShootingStar() {
      if (prefersReducedMotion) return;
      shootingStars.push({
        x: Math.random() * width * 0.8 + width * 0.1,
        y: Math.random() * height * 0.3,
        length: Math.random() * 90 + 70,
        speed: Math.random() * 6 + 7,
        angle: (Math.PI / 4) * (Math.random() * 0.2 + 0.9), // ~45 deg
        opacity: 1,
        fadeSpeed: 0.02,
      });
    }

    let isVisible = !document.hidden;
    const handleVisibilityChange = () => {
      isVisible = !document.hidden;
    };
    document.addEventListener('visibilitychange', handleVisibilityChange);

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    const render = () => {
      if (isVisible) {
        ctx.clearRect(0, 0, width, height);

        // Draw and update stars
        for (let i = 0; i < stars.length; i++) {
          const s = stars[i];
          if (!prefersReducedMotion) {
            s.alpha += s.twinkleSpeed;
            if (s.alpha > 0.95 || s.alpha < 0.2) {
              s.twinkleSpeed = -s.twinkleSpeed;
            }
          }

          ctx.beginPath();
          ctx.arc(s.x, s.y, s.radius, 0, Math.PI * 2);
          ctx.fillStyle = s.color;
          ctx.globalAlpha = Math.max(0.1, Math.min(1, s.alpha));
          ctx.fill();
        }

        // Periodically spawn shooting stars
        const now = Date.now();
        if (now - lastShootingStarTime > 6500) {
          addShootingStar();
          lastShootingStarTime = now;
        }

        // Draw shooting stars
        for (let i = shootingStars.length - 1; i >= 0; i--) {
          const comet = shootingStars[i];
          const headX = comet.x;
          const headY = comet.y;
          const tailX = headX - Math.cos(comet.angle) * comet.length;
          const tailY = headY - Math.sin(comet.angle) * comet.length;

          const grad = ctx.createLinearGradient(tailX, tailY, headX, headY);
          grad.addColorStop(0, 'rgba(255, 120, 180, 0)');
          grad.addColorStop(0.7, 'rgba(192, 154, 255, 0.4)');
          grad.addColorStop(1, `rgba(255, 255, 255, ${comet.opacity})`);

          ctx.beginPath();
          ctx.moveTo(tailX, tailY);
          ctx.lineTo(headX, headY);
          ctx.strokeStyle = grad;
          ctx.lineWidth = 1.8;
          ctx.stroke();

          // Comet head glow
          ctx.beginPath();
          ctx.arc(headX, headY, 1.5, 0, Math.PI * 2);
          ctx.fillStyle = '#ffffff';
          ctx.globalAlpha = comet.opacity;
          ctx.fill();

          comet.x += Math.cos(comet.angle) * comet.speed;
          comet.y += Math.sin(comet.angle) * comet.speed;
          comet.opacity -= comet.fadeSpeed;

          if (comet.opacity <= 0) {
            shootingStars.splice(i, 1);
          }
        }
        ctx.globalAlpha = 1;
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, []);

  return (
    <div className="space-background-container" aria-hidden="true">
      <canvas ref={canvasRef} className="space-canvas" />
      <div className="nebula-glow nebula-pink" />
      <div className="nebula-glow nebula-lavender" />
      <div className="nebula-glow nebula-center" />
    </div>
  );
}
