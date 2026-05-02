import { useState } from 'react';
import './Contact.css';

const contactLinks = [
  { icon: '✉', label: 'E-posta', value: 'cansuokemen@gmail.com', href: 'mailto:cansuokemen@gmail.com' },
  { icon: '📞', label: 'Telefon', value: '+90 545 122 25 07', href: 'tel:+905451222507' },
  { icon: 'in', label: 'LinkedIn', value: 'linkedin.com/cansuokemen', href: 'https://linkedin.com/in/cansuokemen' },
  { icon: '⌥', label: 'GitHub', value: 'github.com/cansuokemen', href: 'https://github.com/cansuokemen' },
];

const references = [
  {
    name: 'Emrah Yıldız',
    role: 'Head of IT · MAN Türkiye A.Ş.',
    initials: 'EY',
    email: 'emrah.yildiz@man.eu',
    phone: null,
  },
  {
    name: 'Emre Kunduroğlu',
    role: 'IT Business Application Group Leader · MAN Türkiye A.Ş.',
    initials: 'EK',
    email: null,
    phone: '0538 736 51 55',
  },
  {
    name: 'Dr. Aytun Onay',
    role: 'Head of Software Engineering Dept. · UTAA',
    initials: 'AO',
    email: 'aonay@thk.edu.tr',
    phone: '0312 589 6054',
  },
  {
    name: 'Res. Asst. Sinem Seyrek Ceyran',
    role: 'Research Assistant, Software Eng. · UTAA',
    initials: 'SC',
    email: 'ssceran@ythk.edu.tr',
    phone: '0312 589 6052',
  },
];

export default function Contact() {
  const [openRef, setOpenRef] = useState(null);

  return (
    <section className="contact" id="contact">
      <div className="contact-inner">
        <div className="section-header">
          <h2>İletişim</h2>
          <div className="section-line" />
          <p>Bana ulaşmak için aşağıdaki kanalları kullanabilirsin</p>
        </div>

        <div className="contact-grid">
          {contactLinks.map(link => (
            <a className="contact-link-card" href={link.href} target={link.href.startsWith('http') ? '_blank' : undefined} rel="noreferrer" key={link.label}>
              <div className="contact-card-icon">{link.icon}</div>
              <div>
                <div className="contact-card-label">{link.label}</div>
                <div className="contact-card-value">{link.value}</div>
              </div>
            </a>
          ))}
        </div>

        <p className="references-title">Referanslar</p>
        <div className="ref-cards">
          {references.map((ref, i) => (
            <div
              className={`ref-card${openRef === i ? ' open' : ''}`}
              key={i}
              onClick={() => setOpenRef(prev => prev === i ? null : i)}
            >
              <div className="ref-card-header">
                <div className="ref-card-left">
                  <div className="ref-avatar">{ref.initials}</div>
                  <div>
                    <div className="ref-name">{ref.name}</div>
                    <div className="ref-role">{ref.role}</div>
                  </div>
                </div>
                <span className="ref-toggle">▼</span>
              </div>

              <div className="ref-details">
                <div className="ref-details-inner">
                  {ref.email && (
                    <div className="ref-detail-row">
                      ✉ <a href={`mailto:${ref.email}`}>{ref.email}</a>
                    </div>
                  )}
                  {ref.phone && (
                    <div className="ref-detail-row">
                      📞 <a href={`tel:${ref.phone.replace(/\s/g, '')}`}>{ref.phone}</a>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        <p className="footer-note">
          Made with <span>♥</span> by Cansu Ökemen · {new Date().getFullYear()}
        </p>
      </div>
    </section>
  );
}
