export default function ProjectCard({ project, index, onVideoClick }) {
  const isWhatsApp = project.id === 'whatsapp'

  return (
    <>
      <style>{`
        .pcard {
          background: var(--surface);
          border: 1px solid var(--border);
          border-radius: var(--radius);
          padding: 32px;
          position: relative; overflow: hidden;
          transition: all 0.35s ease;
          display: flex; flex-direction: column;
          height: 100%;
          opacity: 0; transform: translateY(24px);
          animation: fadeUp 0.6s ease forwards;
        }
        .pcard:hover {
          border-color: rgba(0, 210, 255, 0.3);
          box-shadow: var(--glow-cyan), 0 20px 60px rgba(0,0,0,0.3);
          transform: translateY(-6px);
        }
        .pcard::before {
          content: '';
          position: absolute; top: 0; left: 0; right: 0; height: 2px;
          background: var(--grad, linear-gradient(90deg, var(--cyan), var(--teal)));
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 0.4s ease;
        }
        .pcard:hover::before { transform: scaleX(1); }
        .pcard-level {
          font-family: var(--font-display);
          font-size: 10px; font-weight: 700;
          letter-spacing: 0.15em; text-transform: uppercase;
          padding: 4px 12px; border-radius: 99px;
          display: inline-flex; align-items: center; gap: 6px;
          margin-bottom: 20px; align-self: flex-start;
        }
        .level-beginner { background: rgba(0,255,204,0.1); color: var(--teal); border: 1px solid rgba(0,255,204,0.2); }
        .level-intermediate { background: rgba(0,210,255,0.1); color: var(--cyan); border: 1px solid rgba(0,210,255,0.2); }
        .level-advanced { background: rgba(123,94,167,0.15); color: #b39ddb; border: 1px solid rgba(123,94,167,0.3); }

        .pcard-icon {
          font-size: 36px; margin-bottom: 16px;
          display: block;
          filter: drop-shadow(0 0 12px rgba(0,210,255,0.3));
        }
        .pcard-title {
          font-family: var(--font-display);
          font-size: 20px; font-weight: 700;
          color: var(--text); margin-bottom: 10px;
          letter-spacing: -0.01em;
        }
        .pcard-desc {
          font-size: 14px; color: var(--text-muted);
          line-height: 1.75; margin-bottom: 20px;
          flex: 1;
        }
        .pcard-features {
          display: flex; flex-wrap: wrap; gap: 8px;
          margin-bottom: 24px;
        }
        .pcard-feat {
          font-size: 11px; padding: 4px 10px;
          background: var(--surface2);
          border: 1px solid var(--border);
          border-radius: 4px;
          color: var(--text-muted);
          font-family: var(--font-display);
          letter-spacing: 0.04em;
          transition: all 0.2s;
        }
        .pcard:hover .pcard-feat { border-color: rgba(0,210,255,0.2); color: var(--text); }

        .pcard-actions {
          display: flex; gap: 10px; flex-wrap: wrap;
          margin-top: auto;
        }
        .pcard-btn {
          flex: 1; min-width: 110px;
          display: inline-flex; align-items: center; justify-content: center; gap: 7px;
          padding: 11px 16px;
          font-family: var(--font-display);
          font-size: 12px; font-weight: 700;
          letter-spacing: 0.08em; text-transform: uppercase;
          border-radius: var(--radius-sm);
          text-decoration: none; cursor: pointer; border: none;
          transition: all 0.25s;
        }
        .pcard-btn-primary {
          background: linear-gradient(135deg, var(--cyan), var(--teal));
          color: var(--bg);
        }
        .pcard-btn-primary:hover { box-shadow: 0 0 20px rgba(0,210,255,0.4); transform: translateY(-2px); }
        .pcard-btn-secondary {
          background: var(--surface2);
          border: 1px solid var(--border);
          color: var(--text-muted);
        }
        .pcard-btn-secondary:hover { border-color: var(--cyan); color: var(--cyan); transform: translateY(-2px); }

        .pcard-no-deploy {
          font-size: 11px; color: var(--text-dim);
          text-align: center; margin-top: 10px;
          font-style: italic;
        }
        .pcard-index {
          position: absolute; top: 24px; right: 24px;
          font-family: var(--font-display);
          font-size: 48px; font-weight: 800;
          color: rgba(0,210,255,0.05);
          line-height: 1; user-select: none;
        }
      `}</style>

      <div
        className="pcard"
        style={{
          animationDelay: `${index * 100}ms`,
          '--grad': project.gradient,
        }}
      >
        <div className="pcard-index">0{index + 1}</div>
        <span className={`pcard-level level-${project.level.toLowerCase()}`}>
          {project.levelDot} {project.level}
        </span>
        <span className="pcard-icon">{project.icon}</span>
        <h3 className="pcard-title">{project.title}</h3>
        <p className="pcard-desc">{project.desc}</p>
        <div className="pcard-features">
          {project.features.map(f => <span key={f} className="pcard-feat">{f}</span>)}
        </div>

        <div className="pcard-actions">
          {isWhatsApp ? (
            <button className="pcard-btn pcard-btn-primary" onClick={onVideoClick}>
              ▶ Watch Demo
            </button>
          ) : (
            <a href={project.url} target="_blank" rel="noopener noreferrer" className="pcard-btn pcard-btn-primary">
              <svg width="13" height="13" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3"/>
              </svg>
              Live Demo
            </a>
          )}
        </div>
        {isWhatsApp && (
          <p className="pcard-no-deploy">* Deployment not required — demo video provided</p>
        )}
      </div>
    </>
  )
}
