export default function WhatsAppModal({ onClose }) {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-box" onClick={e => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>✕</button>
        <div style={{ marginBottom: 20 }}>
          <span className="tag" style={{ marginBottom: 12, display: 'inline-flex' }}>
            📱 WhatsApp Automation — Demo
          </span>
          <h3 style={{
            fontFamily: 'var(--font-display)', fontSize: 22, fontWeight: 700,
            color: 'var(--text)', marginTop: 12
          }}>
            Live Working Demo
          </h3>
          <p style={{ color: 'var(--text-muted)', fontSize: 14, marginTop: 8 }}>
            Deployment was not required for this project. Below is a working demo video
            showcasing the auto-reply system, FAQ bot, and conversation logging in action.
          </p>
        </div>

        {/* ── Video Player ── */}
        <div style={{
          background: 'var(--bg)',
          border: '1px solid var(--border)',
          borderRadius: 12,
          overflow: 'hidden',
          position: 'relative',
          aspectRatio: '16/9',
        }}>
          <video
            controls
            style={{ width: '100%', height: '100%', display: 'block' }}
            src="/whatsapp-demo.mp4"
          >
            Your browser does not support the video tag.
          </video>
        </div>

        <div style={{
          marginTop: 20,
          background: 'var(--surface2)',
          borderRadius: 10,
          padding: '16px 20px',
          border: '1px solid var(--border)',
        }}>
          <p style={{ fontSize: 13, color: 'var(--text-muted)', margin: 0 }}>
            <span style={{ color: 'var(--cyan)', fontWeight: 600 }}>Note: </span>
            This project was built and tested locally. Deployment was not required per internship guidelines.
            The demo video demonstrates all required features: Auto-Reply, FAQ Bot, and Conversation Logging.
          </p>
        </div>

        <div style={{ marginTop: 20, display: 'flex', gap: 12, flexWrap: 'wrap' }}>
          {['Auto-Reply System', 'FAQ-based Bot', 'Conversation Logging'].map(f => (
            <span key={f} style={{
              fontSize: 12, padding: '6px 14px',
              background: 'rgba(0,255,204,0.08)',
              border: '1px solid rgba(0,255,204,0.2)',
              borderRadius: 99, color: 'var(--teal)',
              fontFamily: 'var(--font-display)', letterSpacing: '0.06em'
            }}>{f}</span>
          ))}
        </div>
      </div>
    </div>
  )
}
