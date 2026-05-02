import { useState } from 'react';
import './Skills.css';

const categories = [
  {
    icon: '💻',
    title: 'Programlama Dilleri',
    items: ['C#', 'Python', 'Kotlin', 'SQL', 'JavaScript'],
  },
  {
    icon: '⚙️',
    title: 'Framework & Kütüphaneler',
    items: ['.NET Core', 'ASP.NET Core Web API', 'ASP.NET MVC', 'Entity Framework Core', 'LINQ', 'NumPy', 'Pandas'],
  },
  {
    icon: '🗄️',
    title: 'Veritabanları',
    items: ['SQL Server', 'PostgreSQL', 'MySQL', 'Oracle Database', 'MongoDB', 'Code First', 'ORM'],
  },
  {
    icon: '🏗️',
    title: 'Mimari & Desenler',
    items: ['Clean Architecture', 'DDD', 'Microservices', 'CQRS', 'Dependency Injection', 'UML Diagrams', 'RESTful API'],
  },
  {
    icon: '🛠️',
    title: 'Araçlar & DevOps',
    items: ['Git', 'GitHub', 'Azure Repository', 'Visual Studio', 'Postman', 'Swagger', 'Selenium', 'Android Studio'],
  },
  {
    icon: '🤖',
    title: 'AI & Modern Geliştirme',
    items: ['Claude', 'ChatGPT', 'Codex', 'Gemini', 'Prompt Engineering', 'MCP Server', 'AI Pipelines'],
  },
];

export default function Skills() {
  const [openIdx, setOpenIdx] = useState(null);

  const toggle = (i) => setOpenIdx(prev => prev === i ? null : i);

  return (
    <section className="skills" id="skills">
      <div className="skills-inner">
        <div className="section-header">
          <h2>Teknik Yetenekler</h2>
          <div className="section-line" />
          <p>Kategoriye tıkla, detayları gör</p>
        </div>

        <div className="skills-grid">
          {categories.map((cat, i) => (
            <div
              className={`skill-category${openIdx === i ? ' open' : ''}`}
              key={i}
              onClick={() => toggle(i)}
            >
              <div className="skill-category-header">
                <div className="skill-category-left">
                  <div className="skill-cat-icon">{cat.icon}</div>
                  <div>
                    <div className="skill-cat-title">{cat.title}</div>
                    <div className="skill-cat-count">{cat.items.length} teknoloji</div>
                  </div>
                </div>
                <span className="skill-cat-arrow">▼</span>
              </div>

              <div className="skill-category-body">
                <div className="skill-tags">
                  {cat.items.map(item => (
                    <span className="skill-tag" key={item}>{item}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
