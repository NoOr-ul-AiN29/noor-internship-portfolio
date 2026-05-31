import { useEffect, useRef } from 'react'

const SKILLS = [
  { name: 'Python', level: 90 },
  { name: 'OpenAI API', level: 88 },
  { name: 'LangChain / RAG', level: 82 },
  { name: 'React / Vite', level: 78 },
  { name: 'Gmail API', level: 80 },
  { name: 'WhatsApp API', level: 75 },
  { name: 'Vector Databases', level: 78 },
  { name: 'FastAPI / Flask', level: 83 },
]

export default function About() {
  const sectionRef = useRef(null)
  const barsRef = useRef([])

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view')
          }
        })
      },
      { threshold: 0.15 }
    )
    if (sectionRef.current) obs.observe(sectionRef.current)
    barsRef.current.forEach(b => b && obs.observe(b))
    return () => obs.disconnect()
  }, [])

  return (
    <>
      <style>{`
        .about {
          padding: 120px 0;
          position: relative; overflow: hidden;
        }
        .about-orb {
          width: 500px; height: 500px;
          background: radial-gradient(circle, rgba(123,94,167,0.1) 0%, transparent 70%);
          top: 0; left: -200px;
        }
        .section-header {
          margin-bottom: 72px;
        }
        .section-tag { margin-bottom: 16px; }
        .section-title {
          font-family: var(--font-display);
          font-size: clamp(32px, 5vw, 52px);
          font-weight: 700;
          letter-spacing: -0.02em;
          line-height: 1.15;
          color: var(--text);
        }
        .section-title .accent {
          background: linear-gradient(135deg, var(--cyan), var(--teal));
          -webkit-background-clip: text; -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .about-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 64px;
          align-items: start;
        }
        .about-text p {
          color: var(--text-muted);
          font-size: 15px; line-height: 1.9;
          margin-bottom: 20px;
        }
        .about-text p:last-child { margin-bottom: 0; }
        .internship-card {
          background: var(--surface);
          border: 1px solid var(--border);
          border-radius: var(--radius);
          padding: 28px;
          margin-top: 32px;
          position: relative; overflow: hidden;
        }
        .internship-card::before {
          content: '';
          position: absolute; top: 0; left: 0; right: 0; height: 2px;
          background: linear-gradient(90deg, var(--cyan), var(--teal), var(--accent));
        }
        .internship-card-title {
          font-family: var(--font-display);
          font-size: 13px; font-weight: 700;
          letter-spacing: 0.1em; text-transform: uppercase;
          color: var(--cyan); margin-bottom: 16px;
        }
        .internship-meta {
          display: flex; flex-direction: column; gap: 10px;
        }
        .meta-row {
          display: flex; align-items: center; gap: 12px;
          font-size: 14px;
        }
        .meta-icon {
          width: 32px; height: 32px;
          background: var(--cyan-dim);
          border-radius: 8px;
          display: flex; align-items: center; justify-content: center;
          flex-shrink: 0;
        }
        .meta-label { color: var(--text-muted); }
        .meta-value { color: var(--text); font-weight: 500; }

        /* Skills */
        .skills-col { }
        .skills-title {
          font-family: var(--font-display);
          font-size: 13px; font-weight: 700;
          letter-spacing: 0.12em; text-transform: uppercase;
          color: var(--text-muted); margin-bottom: 28px;
        }
        .skill-item {
          margin-bottom: 20px;
          opacity: 0; transform: translateX(20px);
          transition: opacity 0.5s ease, transform 0.5s ease;
        }
        .skill-item.in-view { opacity: 1; transform: translateX(0); }
        .skill-row {
          display: flex; justify-content: space-between; align-items: center;
          margin-bottom: 8px;
        }
        .skill-name {
          font-size: 14px; font-weight: 500; color: var(--text);
        }
        .skill-pct {
          font-family: var(--font-display);
          font-size: 12px; font-weight: 700; color: var(--cyan);
        }
        .skill-bar-bg {
          height: 4px;
          background: var(--surface2);
          border-radius: 2px; overflow: hidden;
        }
        .skill-bar-fill {
          height: 100%;
          background: linear-gradient(90deg, var(--cyan), var(--teal));
          border-radius: 2px;
          width: 0;
          transition: width 1s ease;
        }
        .skill-item.in-view .skill-bar-fill { width: var(--w); }

        @media (max-width: 768px) {
          .about-grid { grid-template-columns: 1fr; gap: 48px; }
        }
      `}</style>

      <section className="about" id="about" ref={sectionRef}>
        <div className="orb about-orb" />
        <div className="grid-bg" />
        <div className="container">
          <div className="section-header">
            <div className="section-tag tag">About Me</div>
            <h2 className="section-title" style={{marginTop: 16}}>
              Turning Ideas Into <span className="accent">Intelligent Systems</span>
            </h2>
          </div>

          <div className="about-grid">
            <div className="about-text">
              <p>
                I'm <strong style={{color: 'var(--text)'}}>Noor Ul Ain</strong>, an AI & Automation intern at
                Nexe-Agent. During this internship I built and deployed a full spectrum of AI-powered
                applications — from a simple chatbot to a production-grade RAG knowledge assistant.
              </p>
              <p>
                I believe automation should be purposeful. Each project I built solves a real problem:
                screening resumes at scale, automating email workflows, enabling conversational AI on WhatsApp,
                and powering intelligent document search.
              </p>
              <p>
                I completed all Beginner, Intermediate, and Advanced tasks, deploying 5 out of 6 projects
                on Vercel and Railway. The WhatsApp Automation project was demonstrated via a working demo video.
              </p>

              <div className="internship-card">
                <div className="internship-card-title">Internship Details</div>
                <div className="internship-meta">
                  {[
                    { icon: '🏢', label: 'Company', value: 'Nexe-Agent' },
                    { icon: '🎯', label: 'Role', value: 'AI & Automation Intern' },
                    { icon: '✅', label: 'Status', value: 'All Tasks Completed' },
                    { icon: '🚀', label: 'Deployed', value: '5 Live Projects + 1 Demo' },
                  ].map(m => (
                    <div className="meta-row" key={m.label}>
                      <div className="meta-icon">{m.icon}</div>
                      <span className="meta-label">{m.label}:</span>
                      <span className="meta-value">{m.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="skills-col">
              <div className="skills-title">Technical Skills</div>
              {SKILLS.map((sk, i) => (
                <div
                  className="skill-item"
                  key={sk.name}
                  ref={el => barsRef.current[i] = el}
                  style={{ '--w': `${sk.level}%`, transitionDelay: `${i * 80}ms` }}
                >
                  <div className="skill-row">
                    <span className="skill-name">{sk.name}</span>
                    <span className="skill-pct">{sk.level}%</span>
                  </div>
                  <div className="skill-bar-bg">
                    <div className="skill-bar-fill" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
