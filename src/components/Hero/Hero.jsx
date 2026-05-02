import { useState, useEffect } from 'react';
import './Hero.css';

const roles = [
  'Software Engineer',
  'Back-End Developer',
  'Clean Architecture Fan',
  'AI-Powered Developer',
];

export default function Hero() {
  const [roleIdx, setRoleIdx] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const target = roles[roleIdx];
    let timeout;

    if (!deleting && displayed.length < target.length) {
      timeout = setTimeout(() => setDisplayed(target.slice(0, displayed.length + 1)), 80);
    } else if (!deleting && displayed.length === target.length) {
      timeout = setTimeout(() => setDeleting(true), 2200);
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 45);
    } else if (deleting && displayed.length === 0) {
      setDeleting(false);
      setRoleIdx(i => (i + 1) % roles.length);
    }

    return () => clearTimeout(timeout);
  }, [displayed, deleting, roleIdx]);

  return (
    <section className="hero" id="hero">
      <div className="hero-bg-circle one" />
      <div className="hero-bg-circle two" />

      <div className="hero-content">
        <div className="hero-badge">
          <span className="hero-badge-dot" />
          Ankara, Turkey · Open to Opportunities
        </div>

        <h1 className="hero-name">
          Cansu <span>Ökemen</span>
        </h1>

        <div className="hero-role">
          <span className="hero-role-text">{displayed}</span>
          <span className="cursor" />
        </div>

        <p className="hero-description">
          Fourth-year Software Engineering student with hands-on experience in back-end development,
          IT operations, and AI-assisted workflows. Building scalable, clean-architecture applications
          with C#, .NET Core, and Python.
        </p>

        <div className="hero-actions">
          <a href="#timeline" className="btn-primary">Deneyimlerimi Gör</a>
          <a href="#contact" className="btn-secondary">İletişime Geç</a>
        </div>

        <div className="hero-socials">
          <a href="mailto:cansuokemen@gmail.com" className="hero-social-link">
            ✉ cansuokemen@gmail.com
          </a>
          <a href="https://linkedin.com/in/cansuokemen" target="_blank" rel="noreferrer" className="hero-social-link">
            in LinkedIn
          </a>
          <a href="https://github.com/cansuokemen" target="_blank" rel="noreferrer" className="hero-social-link">
            ⌥ GitHub
          </a>
        </div>
      </div>

      <div className="hero-scroll">
        <div className="hero-scroll-line" />
        scroll
      </div>
    </section>
  );
}
