import { useState } from 'react'
import ProjectCard from './ProjectCard'
import WhatsAppModal from './WhatsAppModal'

const PROJECTS = [
  {
    id: 'chatbot',
    level: 'Beginner',
    levelDot: '🟢',
    icon: '🤖',
    title: 'Basic AI Chatbot',
    desc: 'A conversational AI chatbot powered by the OpenAI API. Accepts user input, sends it to GPT, displays the response in real-time, and handles errors gracefully.',
    features: ['OpenAI API', 'User Input Handling', 'Response Display', 'Error Handling'],
    url: 'https://basic-ai-chatbot-3pa1-git-main-httpteaamname.vercel.app/',
    gradient: 'linear-gradient(90deg, #00ffcc, #00d2ff)',
  },
  {
    id: 'email',
    level: 'Beginner',
    levelDot: '🟢',
    icon: '📧',
    title: 'Email Automation Script',
    desc: 'Automates email workflows using the Gmail API. Sends scheduled emails and maintains a complete log of email history for tracking and auditing.',
    features: ['Gmail API', 'Scheduled Emails', 'Email History Log', 'Python Backend'],
    url: 'https://email-automation-system-yjtr.vercel.app/',
    gradient: 'linear-gradient(90deg, #00d2ff, #0077ff)',
  },
  {
    id: 'resume',
    level: 'Intermediate',
    levelDot: '🔵',
    icon: '📄',
    title: 'Resume Screener AI',
    desc: 'Intelligent resume screening tool that uploads resumes, extracts key skills using NLP, matches them against a job description, and outputs a percentage match score.',
    features: ['PDF Upload', 'Skill Extraction', 'Job Description Match', 'Match % Score'],
    url: 'https://resume-screener-ai-3lgb.vercel.app/',
    gradient: 'linear-gradient(90deg, #00d2ff, #7b5ea7)',
  },
  {
    id: 'whatsapp',
    level: 'Intermediate',
    levelDot: '🔵',
    icon: '💬',
    title: 'WhatsApp Automation',
    desc: 'A WhatsApp automation system featuring an intelligent auto-reply engine, an FAQ-based bot for common queries, and full conversation logging. Deployment not required — demo video provided.',
    features: ['Auto-Reply System', 'FAQ-based Bot', 'Conversation Logging', 'Demo Video'],
    url: null,
    gradient: 'linear-gradient(90deg, #25d366, #00d2ff)',
  },
  {
    id: 'agent',
    level: 'Advanced',
    levelDot: '🔴',
    icon: '🧠',
    title: 'Multi-Tool AI Agent',
    desc: 'A powerful autonomous AI agent that can search the web, save notes, send emails, and use multiple function tools — all orchestrated in a single intelligent pipeline.',
    features: ['Web Search', 'Note Saving', 'Email Sending', 'Function Tools', 'Agent Loop'],
    url: 'https://multi-tool-ai-agent-production-ecf2.up.railway.app',
    gradient: 'linear-gradient(90deg, #7b5ea7, #e040fb)',
  },
  {
    id: 'rag',
    level: 'Advanced',
    levelDot: '🔴',
    icon: '📚',
    title: 'RAG Knowledge Assistant',
    desc: 'A Retrieval-Augmented Generation system that ingests company documents, stores them as vector embeddings, and answers contextual queries with high accuracy from the knowledge base.',
    features: ['Document Upload', 'Vector Embeddings', 'Query System', 'Contextual Answers'],
    url: 'https://rag-production-70b9.up.railway.app',
    gradient: 'linear-gradient(90deg, #e040fb, #ff6b6b)',
  },
]

const FILTERS = ['All', 'Beginner', 'Intermediate', 'Advanced']

export default function Projects() {
  const [filter, setFilter] = useState('All')
  const [showModal, setShowModal] = useState(false)

  const filtered = filter === 'All' ? PROJECTS : PROJECTS.filter(p => p.level === filter)

  return (
    <>
      <style>{`
        .projects {
          padding: 120px 0;
          position: relative; overflow: hidden;
        }
        .projects-orb {
          width: 500px; height: 500px;
          background: radial-gradient(circle, rgba(0,210,255,0.08) 0%, transparent 70%);
          top: 100px; right: -100px;
        }
        .projects-header {
          display: flex; flex-wrap: wrap;
          align-items: flex-end; justify-content: space-between;
          gap: 24px; margin-bottom: 48px;
        }
        .filter-tabs {
          display: flex; gap: 8px; flex-wrap: wrap;
        }
        .filter-btn {
          font-family: var(--font-display);
          font-size: 12px; font-weight: 700;
          letter-spacing: 0.1em; text-transform: uppercase;
          padding: 9px 18px; border-radius: 6px;
          background: var(--surface);
          border: 1px solid var(--border);
          color: var(--text-muted);
          cursor: pointer;
          transition: all 0.2s;
        }
        .filter-btn:hover { border-color: var(--cyan); color: var(--text); }
        .filter-btn.active {
          background: var(--cyan-dim);
          border-color: var(--cyan);
          color: var(--cyan);
        }
        .projects-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
          gap: 24px;
        }
        .projects-note {
          margin-top: 48px;
          background: var(--surface);
          border: 1px solid var(--border);
          border-radius: var(--radius);
          padding: 24px 32px;
          display: flex; align-items: center; gap: 20px;
          position: relative; overflow: hidden;
        }
        .projects-note::before {
          content: '';
          position: absolute; left: 0; top: 0; bottom: 0; width: 3px;
          background: linear-gradient(to bottom, var(--cyan), var(--teal));
        }
        .note-icon { font-size: 28px; flex-shrink: 0; }
        .note-text { font-size: 14px; color: var(--text-muted); line-height: 1.7; }
        .note-text strong { color: var(--text); }

        @media (max-width: 768px) {
          .projects-grid { grid-template-columns: 1fr; }
          .projects-header { flex-direction: column; align-items: flex-start; }
        }
      `}</style>

      <section className="projects" id="projects">
        <div className="grid-bg" />
        <div className="orb projects-orb" />

        <div className="container">
          <div className="section-header">
            <div className="section-tag tag">Internship Projects</div>
            <h2 className="section-title" style={{marginTop: 16}}>
              All <span className="accent">6 Tasks</span> Completed
            </h2>
          </div>

          <div className="projects-header">
            <p style={{ color: 'var(--text-muted)', fontSize: 15, maxWidth: 480 }}>
              From beginner to advanced — every project built, tested, and delivered.
            </p>
            <div className="filter-tabs">
              {FILTERS.map(f => (
                <button
                  key={f}
                  className={`filter-btn ${filter === f ? 'active' : ''}`}
                  onClick={() => setFilter(f)}
                >
                  {f}
                </button>
              ))}
            </div>
          </div>

          <div className="projects-grid">
            {filtered.map((p, i) => (
              <ProjectCard
                key={p.id}
                project={p}
                index={i}
                onVideoClick={() => setShowModal(true)}
              />
            ))}
          </div>

          <div className="projects-note">
            <span className="note-icon">💡</span>
            <p className="note-text">
              <strong>WhatsApp Automation</strong> — Deployment was not required for this project per internship guidelines.
              A full working demo video has been provided showcasing all features: Auto-Reply, FAQ Bot, and Conversation Logging.
              All other 5 projects are fully deployed and live.
            </p>
          </div>
        </div>
      </section>

      {showModal && <WhatsAppModal onClose={() => setShowModal(false)} />}
    </>
  )
}
