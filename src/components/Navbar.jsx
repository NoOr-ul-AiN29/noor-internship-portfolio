import { useState, useEffect } from 'react'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const links = ['About', 'Projects', 'Contact']

  return (
    <>
      <style>{`
        .navbar {
          position: fixed; top: 0; left: 0; right: 0;
          z-index: 100; padding: 20px 0;
          transition: all 0.4s ease;
        }
        .navbar.scrolled {
          background: rgba(8, 11, 17, 0.88);
          backdrop-filter: blur(20px);
          border-bottom: 1px solid rgba(0, 229, 180, 0.09);
          padding: 14px 0;
          box-shadow: 0 4px 40px rgba(0,0,0,0.5);
        }
        .nav-inner {
          display: flex; align-items: center; justify-content: space-between;
        }
        .nav-logo {
          font-family: var(--font-hero);
          font-size: 26px; font-weight: 400; letter-spacing: 0.08em;
          color: var(--cyan);
          text-decoration: none;
        }
        .nav-logo span {
          color: var(--text-muted);
          font-family: var(--font-display);
          font-weight: 500; font-size: 11px;
          margin-left: 10px; letter-spacing: 0.14em; text-transform: uppercase;
        }
        .nav-links {
          display: flex; align-items: center; gap: 8px; list-style: none;
        }
        .nav-links a {
          font-family: var(--font-display);
          font-size: 13px; font-weight: 600; letter-spacing: 0.08em;
          text-transform: uppercase;
          color: var(--text-muted); text-decoration: none;
          padding: 8px 16px; border-radius: 6px;
          transition: all 0.2s; position: relative;
        }
        .nav-links a::after {
          content: ''; position: absolute; bottom: 4px; left: 50%; right: 50%;
          height: 1.5px; background: var(--cyan); transition: all 0.3s ease;
        }
        .nav-links a:hover { color: var(--text); }
        .nav-links a:hover::after { left: 16px; right: 16px; }
        .nav-cta {
          font-family: var(--font-display);
          font-size: 12px; font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase;
          color: #080b11;
          background: var(--cyan);
          border: none; border-radius: 6px;
          padding: 9px 20px; cursor: pointer; text-decoration: none;
          transition: all 0.25s;
        }
        .nav-cta:hover { box-shadow: var(--glow-cyan); transform: translateY(-1px); }
        .hamburger {
          display: none; flex-direction: column; gap: 5px;
          background: none; border: none; cursor: pointer; padding: 4px;
        }
        .hamburger span {
          display: block; width: 24px; height: 2px;
          background: var(--cyan); border-radius: 2px; transition: all 0.3s;
        }
        .mobile-menu {
          position: fixed; inset: 0; top: 64px;
          background: rgba(8, 11, 17, 0.97);
          backdrop-filter: blur(20px); z-index: 99;
          display: flex; flex-direction: column;
          align-items: center; justify-content: center; gap: 32px;
          animation: fadeIn 0.25s ease;
        }
        .mobile-menu a {
          font-family: var(--font-display);
          font-size: 28px; font-weight: 700;
          color: var(--text); text-decoration: none; transition: color 0.2s;
        }
        .mobile-menu a:hover { color: var(--cyan); }
        @media (max-width: 768px) {
          .nav-links, .nav-cta { display: none; }
          .hamburger { display: flex; }
        }
      `}</style>

      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="container">
          <div className="nav-inner">
            <a href="#" className="nav-logo">
              Noor Ul Ain
              <span>AI INTERN</span>
            </a>
            <ul className="nav-links">
              {links.map(l => (
                <li key={l}><a href={`#${l.toLowerCase()}`}>{l}</a></li>
              ))}
            </ul>
            <a href="#contact" className="nav-cta">Hire Me</a>
            <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)} aria-label="menu">
              <span style={menuOpen ? { transform: 'rotate(45deg) translate(5px, 5px)' } : {}} />
              <span style={menuOpen ? { opacity: 0 } : {}} />
              <span style={menuOpen ? { transform: 'rotate(-45deg) translate(5px, -5px)' } : {}} />
            </button>
          </div>
        </div>
      </nav>

      {menuOpen && (
        <div className="mobile-menu" onClick={() => setMenuOpen(false)}>
          {links.map(l => <a key={l} href={`#${l.toLowerCase()}`}>{l}</a>)}
          <a href="#contact" className="nav-cta">Hire Me</a>
        </div>
      )}
    </>
  )
}