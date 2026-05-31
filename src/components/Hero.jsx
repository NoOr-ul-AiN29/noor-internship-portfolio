import { useEffect, useState, useRef } from 'react'

const ROLES = ['AI Developer', 'Automation Engineer', 'Problem Solver', 'Python Developer']

export default function Hero() {
  const [roleIdx, setRoleIdx] = useState(0)
  const [displayed, setDisplayed] = useState('')
  const [typing, setTyping] = useState(true)
  const [visible, setVisible] = useState(false)
  const timeoutRef = useRef(null)

  useEffect(() => { setTimeout(() => setVisible(true), 100) }, [])

  useEffect(() => {
    const target = ROLES[roleIdx]
    if (typing) {
      if (displayed.length < target.length) {
        timeoutRef.current = setTimeout(() => setDisplayed(target.slice(0, displayed.length + 1)), 60)
      } else {
        timeoutRef.current = setTimeout(() => setTyping(false), 1800)
      }
    } else {
      if (displayed.length > 0) {
        timeoutRef.current = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 35)
      } else {
        setRoleIdx((roleIdx + 1) % ROLES.length)
        setTyping(true)
      }
    }
    return () => clearTimeout(timeoutRef.current)
  }, [displayed, typing, roleIdx])

  return (
    <>
      <style>{`
        .hero {
          min-height: 100vh;
          display: flex; align-items: center;
          position: relative; overflow: hidden;
          padding: 120px 0 80px;
        }
        /* Cool-toned orbs — no warm colors */
        .hero-orb1 {
          width: 600px; height: 600px;
          background: radial-gradient(circle, rgba(0, 229, 180, 0.09) 0%, transparent 70%);
          top: -100px; right: -150px;
          animation: float 8s ease-in-out infinite;
        }
        .hero-orb2 {
          width: 400px; height: 400px;
          background: radial-gradient(circle, rgba(0, 150, 255, 0.07) 0%, transparent 70%);
          bottom: 50px; left: -100px;
          animation: float 10s ease-in-out infinite reverse;
        }
        .hero-orb3 {
          width: 200px; height: 200px;
          background: radial-gradient(circle, rgba(255, 107, 138, 0.10) 0%, transparent 70%);
          top: 40%; left: 40%;
          animation: float 6s ease-in-out infinite;
        }
        .hero-content {
          position: relative; z-index: 2;
          opacity: 0; transform: translateY(30px);
          transition: all 0.9s ease;
        }
        .hero-content.visible { opacity: 1; transform: translateY(0); }
        .hero-eyebrow {
          display: flex; align-items: center; gap: 12px;
          margin-bottom: 28px;
        }
        .eyebrow-line {
          width: 40px; height: 1px;
          background: linear-gradient(90deg, var(--cyan), transparent);
        }
        .hero-name {
          font-family: var(--font-hero);
          font-size: clamp(72px, 12vw, 148px);
          font-weight: 400;
          line-height: 0.92;
          letter-spacing: 0.04em;
          margin-bottom: 24px;
          white-space: nowrap;
        }
        /* Clean white name — no gradient clashing with accent colors */
        .hero-name .full-name {
          display: block;
          color: var(--text);
          /* Subtle shimmer on hover via background-clip */
          background: linear-gradient(135deg, #eef2ff 0%, #ffffff 40%, var(--cyan) 55%, #eef2ff 70%);
          background-size: 300% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: gradientShift 6s linear infinite;
        }
        .hero-role {
          font-family: var(--font-display);
          font-size: clamp(15px, 2.2vw, 20px);
          font-weight: 500;
          color: var(--text-muted);
          margin-bottom: 28px;
          min-height: 36px;
          letter-spacing: 0.02em;
        }
        .hero-role .typed { color: var(--cyan); font-weight: 600; }
        .cursor-blink {
          display: inline-block; width: 2px; height: 1em;
          background: var(--cyan); margin-left: 2px;
          vertical-align: text-bottom;
          animation: blink 0.8s step-end infinite;
        }
        .hero-desc {
          max-width: 520px;
          font-size: 15.5px; color: var(--text-muted);
          line-height: 1.85; margin-bottom: 40px; font-weight: 400;
        }
        .hero-btns { display: flex; flex-wrap: wrap; gap: 14px; margin-bottom: 56px; }
        .hero-stats {
          display: flex; flex-wrap: wrap; gap: 0;
          border: 1px solid var(--border);
          border-radius: var(--radius); overflow: hidden;
          background: var(--surface); backdrop-filter: blur(10px);
          max-width: 560px;
        }
        .stat-item {
          flex: 1; min-width: 100px;
          padding: 20px 24px;
          border-right: 1px solid var(--border);
          position: relative; overflow: hidden;
          transition: background 0.3s;
        }
        .stat-item:last-child { border-right: none; }
        .stat-item:hover { background: var(--surface2); }
        .stat-item::before {
          content: ''; position: absolute; top: 0; left: 0; right: 0; height: 2px;
          background: var(--cyan);
          transform: scaleX(0); transition: transform 0.3s;
        }
        .stat-item:hover::before { transform: scaleX(1); }
        .stat-num {
          font-family: var(--font-display);
          font-size: 28px; font-weight: 800;
          color: var(--cyan);
          display: block;
        }
        .stat-label {
          font-size: 11px; letter-spacing: 0.1em;
          text-transform: uppercase; color: var(--text-muted); margin-top: 2px;
        }
        .hero-scroll {
          position: absolute; bottom: 32px; left: 50%;
          transform: translateX(-50%);
          display: flex; flex-direction: column; align-items: center; gap: 8px;
          animation: fadeIn 1s ease 1.5s both;
        }
        .scroll-line {
          width: 1px; height: 50px;
          background: linear-gradient(to bottom, var(--cyan), transparent);
          animation: float 2s ease-in-out infinite;
        }
        .scroll-text {
          font-size: 10px; letter-spacing: 0.2em; text-transform: uppercase;
          color: var(--text-dim);
        }
        .hero-badge {
          display: inline-flex; align-items: center; gap: 8px;
          background: var(--surface);
          border: 1px solid var(--border); border-radius: 99px;
          padding: 8px 16px; font-size: 12px; color: var(--text-muted);
          margin-bottom: 24px;
        }
        .badge-dot {
          width: 7px; height: 7px; border-radius: 50%;
          background: var(--cyan);
          animation: pulse-ring 2s infinite;
        }
        @media (max-width: 768px) {
          .hero-stats { max-width: 100%; }
          .stat-item { padding: 16px; }
          .stat-num { font-size: 22px; }
          .hero-name { font-size: clamp(52px, 14vw, 96px); white-space: nowrap; }
        }
        @media (max-width: 420px) {
          .hero-name { font-size: 13vw; letter-spacing: 0.02em; }
        }
      `}</style>

      <section className="hero" id="home">
        <div className="grid-bg" />
        <div className="orb hero-orb1" />
        <div className="orb hero-orb2" />
        <div className="orb hero-orb3" />

        <div className="container">
          <div className={`hero-content ${visible ? 'visible' : ''}`}>
            <div className="hero-badge">
              <span className="badge-dot" />
              Available for Opportunities
            </div>

            <div className="hero-eyebrow">
              <div className="eyebrow-line" />
              <span className="tag">AI & Automation Intern @ Nexe-Agent</span>
            </div>

            <h1 className="hero-name">
              <span className="full-name">Noor Ul Ain</span>
            </h1>

            <div className="hero-role">
              <span className="typed">{displayed}</span>
              <span className="cursor-blink" />
            </div>

            <p className="hero-desc">
              Building intelligent AI systems and automation tools that solve real problems.
              From chatbots to RAG pipelines — I craft solutions that work.
            </p>

            <div className="hero-btns">
              <a href="#projects" className="btn btn-primary">
                <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path d="M9 3H5a2 2 0 00-2 2v4m6-6h10a2 2 0 012 2v4M9 3v18m0 0h10a2 2 0 002-2V9M9 21H5a2 2 0 01-2-2V9m0 0h18"/>
                </svg>
                View Projects
              </a>
              <a href="#contact" className="btn btn-outline">
                Get In Touch
                <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path d="M17 8l4 4m0 0l-4 4m4-4H3"/>
                </svg>
              </a>
            </div>

            <div className="hero-stats">
              {[
                { num: '5', label: 'Projects Deployed' },
                { num: '3', label: 'Complexity Levels' },
                { num: '1', label: 'Live Demo Video' },
                { num: '100%', label: 'Tasks Complete' },
              ].map(s => (
                <div className="stat-item" key={s.label}>
                  <span className="stat-num">{s.num}</span>
                  <span className="stat-label">{s.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="hero-scroll">
          <span className="scroll-text">Scroll</span>
          <div className="scroll-line" />
        </div>
      </section>
    </>
  )
}