import { useEffect, useRef, useState } from 'react';
import './CareerTimeline.css';

const timelineData = [
  {
    company: 'UTAA',
    role: 'Yazılım Müh.',
    description: 'Yolculuk başlıyor! İlk kodlar, ilk algoritmalar, temeller atılıyor.',
    year: '2021',
    tags: [],
    height: 'low',
    hasChick: true,
  },
  {
    company: 'Edutes',
    role: 'Python Developer',
    description: 'İlk profesyonel deneyim. NumPy, Pandas ile eğitim teknolojileri geliştirme.',
    year: '2023',
    tags: ['Python', 'NumPy', 'Pandas'],
    height: 'high',
    hasChick: false,
  },
  {
    company: 'Zironsoft',
    role: 'Back-End Intern',
    description: '.NET Core dünyasına giriş. Code review, testing, takım çalışması.',
    year: '2024',
    tags: ['.NET Core', 'SQL', 'EF Core'],
    height: 'medium',
    hasChick: false,
  },
  {
    company: 'MAN Türkiye',
    role: 'IT Operations Intern',
    description: 'Global otomotiv devi. Enterprise yazılım sistemleri ve IT operasyonları.',
    year: '2025',
    tags: ['Enterprise', 'IT Ops', 'SAP'],
    height: 'low',
    hasChick: false,
  },
  {
    company: 'Mezuniyet',
    role: 'Software Engineer',
    description: 'Clean Architecture, DDD, CQRS, Microservices. Hazır!',
    year: '2026',
    tags: ['Full Stack', 'AI', 'Cloud'],
    height: 'high',
    hasChick: false,
  },
];

export default function CareerTimeline() {
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.15 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="timeline-section" id="timeline" ref={sectionRef}>
      <div className="section-header">
        <h2>Kariyer Yolculuğum</h2>
        <div className="section-line" />
        <p>İlk satır koddan bugüne profesyonel gelişimim</p>
      </div>

      <div className="timeline-container">
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
            {item.hasChick && (
              <div className="chick-wrapper">
                <span className="chick-emoji">🐣</span>
                <span className="chick-text">yumurtadan çıktı!</span>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
