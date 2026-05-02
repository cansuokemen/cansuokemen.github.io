import { useState, useEffect } from 'react';
import './Navbar.css';

const links = [
  { label: 'Hakkımda', href: '#about' },
  { label: 'Deneyim', href: '#timeline' },
  { label: 'Yetenekler', href: '#skills' },
  { label: 'Eğitim', href: '#education' },
  { label: 'İletişim', href: '#contact', cta: true },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleLink = () => setOpen(false);

  return (
    <nav className={`navbar${scrolled ? ' scrolled' : ''}`}>
      <a href="#hero" className="nav-logo">CO<span>.</span></a>

      <button
        className={`hamburger${open ? ' open' : ''}`}
        onClick={() => setOpen(o => !o)}
        aria-label="Menü"
      >
        <span /><span /><span />
      </button>

      <ul className={`nav-links${open ? ' open' : ''}`}>
        {links.map(l => (
          <li key={l.href}>
            <a
              href={l.href}
              className={l.cta ? 'nav-cta' : ''}
              onClick={handleLink}
            >
              {l.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
