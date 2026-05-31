export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <>
      <style>{`
        .contact-section {
          padding: 120px 0 0;
          position: relative; overflow: hidden;
        }
        .contact-orb {
          width: 600px; height: 400px;
          background: radial-gradient(ellipse, rgba(168,85,247,0.1) 0%, transparent 70%);
          bottom: 0; left: 50%; transform: translateX(-50%);
        }
        .contact-card {
          background: var(--surface);
          border: 1px solid var(--border);
          border-radius: 24px;
          padding: 72px;
          text-align: center;
          position: relative; overflow: hidden;
        }
        .contact-card::before {
          content: '';
          position: absolute; inset: 0;
          background: radial-gradient(ellipse at 50% 0%, rgba(168,85,247,0.07) 0%, transparent 60%);
          pointer-events: none;
        }
        .contact-card::after {
          content: '';
          position: absolute; top: 0; left: 10%; right: 10%; height: 1px;
          background: linear-gradient(90deg, transparent, var(--cyan), var(--teal), transparent);
        }
        .contact-title {
          font-family: var(--font-display);
          font-size: clamp(32px, 5vw, 56px);
          font-weight: 700;
          letter-spacing: -0.02em;
          color: var(--text); margin: 20px 0 16px;
        }
        .contact-title .accent {
          background: linear-gradient(135deg, var(--cyan), var(--teal));
          -webkit-background-clip: text; -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .contact-desc {
          font-size: 16px; color: var(--text-muted);
          max-width: 480px; margin: 0 auto 40px; line-height: 1.8;
        }

        /* email display row */
        .email-display {
          display: inline-flex; align-items: center; gap: 12px;
          background: var(--surface2);
          border: 1px solid var(--border);
          border-radius: 10px;
          padding: 14px 24px;
          margin-bottom: 24px;
          font-family: var(--font-display);
          font-size: 15px; font-weight: 500;
          color: var(--text);
          letter-spacing: 0.01em;
          transition: border-color 0.2s, box-shadow 0.2s;
        }
        .email-display:hover {
          border-color: var(--cyan);
          box-shadow: 0 0 20px rgba(168,85,247,0.15);
        }
        .email-icon {
          width: 34px; height: 34px;
          background: var(--cyan-dim);
          border-radius: 8px;
          display: flex; align-items: center; justify-content: center;
          flex-shrink: 0;
        }
        .email-text { color: var(--cyan); }

        .contact-links {
          display: flex; flex-wrap: wrap;
          align-items: center; justify-content: center;
          gap: 14px;
        }
        .contact-link {
          display: inline-flex; align-items: center; gap: 10px;
          padding: 13px 26px;
          border-radius: var(--radius-sm);
          font-family: var(--font-display);
          font-size: 13px; font-weight: 700;
          letter-spacing: 0.08em; text-transform: uppercase;
          text-decoration: none;
          transition: all 0.25s;
        }
        .contact-link-email {
          background: linear-gradient(135deg, var(--cyan), var(--teal));
          color: #fff;
        }
        .contact-link-email:hover { box-shadow: var(--glow-cyan); transform: translateY(-2px); }
        .contact-link-linkedin {
          background: var(--surface2);
          border: 1px solid var(--border);
          color: var(--text-muted);
        }
        .contact-link-linkedin:hover { border-color: var(--cyan); color: var(--cyan); transform: translateY(-2px); }

        footer {
          background: var(--bg2);
          border-top: 1px solid var(--border);
          padding: 28px 0;
          position: relative; z-index: 2;
          margin-top: 0;
        }
        .footer-inner {
          display: flex; align-items: center; justify-content: space-between;
          flex-wrap: wrap; gap: 12px;
        }
        .footer-copy { font-size: 13px; color: var(--text-dim); }
        .footer-copy span { color: var(--cyan); }
        .footer-brand {
          font-family: var(--font-display);
          font-size: 13px; font-weight: 600; color: var(--text-muted);
        }
        .footer-brand a { color: var(--cyan); text-decoration: none; }
        .footer-brand a:hover { text-decoration: underline; }

        @media (max-width: 768px) {
          .contact-card { padding: 40px 24px; }
          .footer-inner { justify-content: center; text-align: center; }
          .email-display { font-size: 13px; padding: 12px 16px; }
        }
      `}</style>

      <section className="contact-section" id="contact">
        <div className="orb contact-orb" />
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div className="contact-card">
            <span className="tag">Let's Connect</span>
            <h2 className="contact-title">
              Ready to <span className="accent">Collaborate?</span>
            </h2>
            <p className="contact-desc">
              I'm actively looking for AI and automation opportunities.
              Whether it's a full-time role, freelance project, or just a conversation — reach out!
            </p>

            {/* Email displayed as text, not a link */}
            <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 28 }}>
              <div className="email-display">
                <div className="email-icon">
                  <svg width="15" height="15" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" style={{color:'var(--cyan)'}}>
                    <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                  </svg>
                </div>
                <span className="email-text">noorulain.29fatima@gmail.com</span>
              </div>
            </div>

            <div className="contact-links">
              <a
                href="mailto:noorulain.29fatima@gmail.com"
                className="contact-link contact-link-email"
              >
                <svg width="15" height="15" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                </svg>
                Send Email
              </a>
              <a
                href="https://www.linkedin.com/in/noor-ul-ain29999999"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-link contact-link-linkedin"
              >
                <svg width="15" height="15" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer>
        <div className="container">
          <div className="footer-inner">
            <p className="footer-copy">
              © {year} <span>Noor Ul Ain</span> — AI & Automation Portfolio
            </p>
            <p className="footer-brand">
              Internship at{' '}
              <a href="https://linkedin.com/company/nexe-agent" target="_blank" rel="noopener noreferrer">
                Nexe-Agent
              </a>
            </p>
          </div>
        </div>
      </footer>
    </>
  )
}
