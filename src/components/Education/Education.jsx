import { useState } from 'react';
import useScrollReveal from '../../hooks/useScrollReveal';
import './Education.css';

const courses = [
  'Software Requirements Analysis — Visual Paradigm, UML Diagrams',
  'Software Design — OOP, Rational Unified Process, UML',
  'Data and Game Structures — Linked Lists, Trees, Graphs, Heaps',
  'Algorithms — Sorting, Graph Algorithms, Dynamic Programming',
  'Data Analysis with Python — Cleaning, Transformation, Modeling',
  'Software Testing & QA — TDD, Selenium, IEEE/ISO Standards',
  'Concurrent Programming — MPI, OpenMP, POSIX Threads',
  'Software Project Management — Agile, Daily Scrum',
  'AI in Game Programming — Minimax, Alpha-Beta Pruning',
  'Introduction to Game Design & Development',
];

const certs = [
  {
    icon: '🐍',
    title: 'Python Data Structures',
    provider: 'University of Michigan',
    platform: 'Coursera',
  },
  {
    icon: '👩‍💻',
    title: 'Programming for Everybody',
    provider: 'University of Michigan',
    platform: 'Coursera',
  },
  {
    icon: '🗄️',
    title: 'Uygulamalarla SQL',
    provider: 'BTK Akademi',
    platform: 'BTK',
  },
];

export default function Education() {
  const [open, setOpen] = useState(false);
  const headerRef = useScrollReveal();
  const mainRef = useScrollReveal();
  const certRef = useScrollReveal();

  return (
    <section className="education" id="education">
      <div className="education-inner">
        <div className="section-header scroll-reveal" ref={headerRef}>
          <h2>Eğitim</h2>
          <div className="section-line" />
          <p>Akademik geçmişim ve sertifikalarım</p>
        </div>

        <div className="edu-grid">
          <div className={`edu-main-card scroll-reveal-left${open ? ' open' : ''}`} ref={mainRef} onClick={() => setOpen(o => !o)}>
            <div className="edu-card-top">
              <div className="edu-card-left">
                <span className="edu-degree-badge">B.Sc. · İngilizce</span>
                <h3>Yazılım Mühendisliği</h3>
                <p>Türk Hava Kurumu Üniversitesi (UTAA), Ankara</p>
                <p>Odak: Back-End Engineering, Algorithm Solutions</p>
              </div>
              <span className="edu-year-badge">2021 – 2026</span>
            </div>

            <div className="edu-expand-hint">
              <span className="edu-arrow">▼</span>
              {open ? 'Dersleri gizle' : 'Aldığım dersleri gör'}
            </div>

            <div className="edu-coursework">
              <div className="edu-coursework-inner">
                <h4>İlgili Dersler</h4>
                <div className="course-list">
                  {courses.map(c => (
                    <div className="course-item" key={c}>
                      <span className="course-dot" />
                      <span>{c}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="cert-cards scroll-reveal-right" ref={certRef}>
            <p style={{ fontSize: '0.8rem', color: '#999', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.8px', marginBottom: '4px' }}>
              Sertifikalar
            </p>
            {certs.map(cert => (
              <div className="cert-card" key={cert.title}>
                <span className="cert-icon">{cert.icon}</span>
                <div>
                  <h4>{cert.title}</h4>
                  <p>{cert.provider}</p>
                  <span className="cert-platform">{cert.platform}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
