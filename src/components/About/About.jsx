import { useState } from 'react';
import './About.css';

const softSkills = [
  'Analytical Thinking', 'Communication', 'Adaptability',
  'Innovation', 'Team Working', 'Leadership', 'Time Management', 'Self-Motivation',
];

export default function About() {
  const [expanded, setExpanded] = useState(false);

  return (
    <section className="about" id="about">
      <div className="about-inner">
        <div className="section-header">
          <h2>Hakkımda</h2>
          <div className="section-line" />
          <p>Yazılım dünyasındaki yolculuğum ve kim olduğum</p>
        </div>

        <div className="about-grid">
          <div className="about-text">
            <h3>Profil</h3>
            <p>
              Dördüncü yıl Yazılım Mühendisliği öğrencisiyim; back-end geliştirme ve IT operasyonlarında
              profesyonel deneyimim var. C# (.NET Core), Python ve Kotlin'de yetkinim; clean architecture,
              domain-driven design ve microservices konularında güçlü bir temele sahibim.
            </p>
            <p>
              İlişkisel ve NoSQL veritabanı yönetimi konusunda deneyimliyim. Ölçeklenebilir,
              iyi mimarili uygulamalar geliştirmeye ve yenilikçi mühendislik ekiplerine katkı
              sağlamaya tutkuyla bağlıyım.
            </p>

            <div className={`about-extra${expanded ? ' open' : ''}`}>
              <p style={{ marginTop: '16px' }}>
                MAN Türkiye ve Zironsoft'ta edindiğim sektör deneyimleriyle teorik bilgimi
                pratiğe döktüm. Bunun yanı sıra yapay zeka destekli geliştirme araçlarını
                (Claude, Codex, ChatGPT) etkin biçimde kullanan bir yazılımcıyım.
              </p>
            </div>

            <button className="about-expand-btn" onClick={() => setExpanded(e => !e)}>
              {expanded ? 'Daha az gör ↑' : 'Devamını oku →'}
            </button>

            <div className="soft-skills">
              {softSkills.map(s => <span className="soft-tag" key={s}>{s}</span>)}
            </div>
          </div>

          <div className="about-stats">
            {[
              { icon: '🎓', num: '4+', label: 'Yıl Eğitim · UTAA Software Engineering' },
              { icon: '💼', num: '3', label: 'Profesyonel Deneyim (Edutes, Zironsoft, MAN)' },
              { icon: '⚙️', num: '10+', label: 'Framework & Teknoloji' },
              { icon: '🌍', num: '3', label: 'Dil · Türkçe, İngilizce, Almanca' },
            ].map(s => (
              <div className="stat-card" key={s.label}>
                <span className="stat-icon">{s.icon}</span>
                <div className="stat-info">
                  <strong>{s.num}</strong>
                  <span>{s.label}</span>
                </div>
              </div>
            ))}

            <div className="ai-badge">
              <span className="ai-badge-icon">🤖</span>
              <div>
                <h4>AI-Assisted Development</h4>
                <p>Claude, Codex, ChatGPT, Gemini · Prompt Engineering · MCP Server Integration · AI-Powered Pipelines</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
