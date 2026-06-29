import { useEffect, useRef, useState, useCallback } from 'react';
import './CareerTimeline.css';

const timelineData = [
  {
    company: 'UTAA',
    role: 'Yazılım Müh.',
    description: 'Yolculuk başlıyor! İlk kodlar, ilk algoritmalar, temeller atılıyor.',
    year: '2021',
    tags: [],
    height: 'low',
  },
  {
    company: 'Edutes',
    role: 'Python Developer',
    description: 'İlk profesyonel deneyim. NumPy, Pandas ile eğitim teknolojileri geliştirme.',
    year: '2023',
    tags: ['Python', 'NumPy', 'Pandas'],
    height: 'high',
  },
  {
    company: 'Zironsoft',
    role: 'Back-End Intern',
    description: '.NET Core dünyasına giriş. Code review, testing, takım çalışması.',
    year: '2024',
    tags: ['.NET Core', 'SQL', 'EF Core'],
    height: 'medium',
  },
  {
    company: 'MAN Türkiye',
    role: 'IT Operations Intern',
    description: 'Global otomotiv devi. Enterprise yazılım sistemleri ve IT operasyonları.',
    year: '2025',
    tags: ['Enterprise', 'IT Ops', 'SAP'],
    height: 'low',
  },
  {
    company: 'Mezuniyet',
    role: 'Software Engineer',
    description: 'Clean Architecture, DDD, CQRS, Microservices. Hazır!',
    year: '2026',
    tags: ['Full Stack', 'AI', 'Cloud'],
    height: 'high',
  },
];

function Fireworks() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    canvas.width = 200;
    canvas.height = 200;

    const particles = [];
    const colors = ['#6C63FF', '#F59E0B', '#A78BFA', '#EC4899', '#10B981', '#F43F5E'];

    for (let i = 0; i < 40; i++) {
      const angle = (Math.PI * 2 * i) / 40;
      const speed = 1.5 + Math.random() * 2.5;
      particles.push({
        x: 100, y: 100,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        life: 1,
        color: colors[Math.floor(Math.random() * colors.length)],
        size: 2 + Math.random() * 3,
      });
    }

    let frame;
    const animate = () => {
      ctx.clearRect(0, 0, 200, 200);
      let alive = false;
      particles.forEach(p => {
        if (p.life <= 0) return;
        alive = true;
        p.x += p.vx;
        p.y += p.vy;
        p.vy += 0.04;
        p.life -= 0.015;
        ctx.globalAlpha = p.life;
        ctx.fillStyle = p.color;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size * p.life, 0, Math.PI * 2);
        ctx.fill();
      });
      if (alive) frame = requestAnimationFrame(animate);
    };
    animate();
    return () => cancelAnimationFrame(frame);
  }, []);

  return <canvas ref={canvasRef} className="fireworks-canvas" />;
}

export default function CareerTimeline() {
  const [visible, setVisible] = useState(false);
  const [chickDone, setChickDone] = useState(false);
  const sectionRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.15 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const handleChickEnd = useCallback(() => {
    setChickDone(true);
  }, []);

  return (
    <section className="timeline-section" id="timeline" ref={sectionRef}>
      <div className="section-header">
        <h2>Kariyer Yolculuğum</h2>
        <div className="section-line" />
        <p>İlk satır koddan bugüne profesyonel gelişimim</p>
      </div>

      <div className="timeline-container" ref={containerRef}>
        <div className="timeline-line">
          <div className="timeline-line-progress" />
        </div>

        {timelineData.map((item, index) => (
          <div className="timeline-stop" data-height={item.height} key={index}>
            <div className={`timeline-card${visible ? ' visible' : ''}`}>
              <p className="card-company">{item.company}</p>
              <p className="card-role">{item.role}</p>
              <p className="card-description">{item.description}</p>
              {item.tags.length > 0 && (
                <div className="card-tags">
                  {item.tags.map(tag => (
                    <span className="tag" key={tag}>{tag}</span>
                  ))}
                </div>
              )}
            </div>
            <div className="connector-line" />
            <div className="timeline-dot" />
            <span className="timeline-year">{item.year}</span>
          </div>
        ))}

        {visible && (
          <div
            className={`walking-chick${chickDone ? ' arrived' : ''}`}
            onAnimationEnd={handleChickEnd}
          >
            <span className="chick-emoji">🐥</span>
            {chickDone && <Fireworks />}
          </div>
        )}
      </div>
    </section>
  );
}
