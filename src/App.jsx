import { useEffect, useRef } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Footer from './components/Footer'

export default function App() {
  const cursorRef = useRef(null)
  const ringRef = useRef(null)
  const canvasRef = useRef(null)

  useEffect(() => {
    const move = (e) => {
      if (cursorRef.current) {
        cursorRef.current.style.left = e.clientX + 'px'
        cursorRef.current.style.top  = e.clientY + 'px'
      }
      if (ringRef.current) {
        ringRef.current.style.left = e.clientX + 'px'
        ringRef.current.style.top  = e.clientY + 'px'
      }
    }
    window.addEventListener('mousemove', move)
    return () => window.removeEventListener('mousemove', move)
  }, [])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    let W = canvas.width  = window.innerWidth
    let H = canvas.height = window.innerHeight
    let raf

    const resize = () => {
      W = canvas.width  = window.innerWidth
      H = canvas.height = window.innerHeight
    }
    window.addEventListener('resize', resize)

    /* Electric mint + muted slate particles — no warm colors competing */
    const COLORS = ['0,229,180', '0,196,154', '100,210,200', '0,229,180']
    const N = 70
    const particles = Array.from({ length: N }, () => ({
      x: Math.random() * W,
      y: Math.random() * H,
      r: Math.random() * 1.8 + 0.4,
      vx: (Math.random() - 0.5) * 0.35,
      vy: (Math.random() - 0.5) * 0.35,
      color: COLORS[Math.floor(Math.random() * COLORS.length)],
      alpha: Math.random() * 0.45 + 0.15,
    }))

    const LINES = 4
    const lines = Array.from({ length: LINES }, (_, i) => ({
      color: COLORS[i % COLORS.length],
      offset: (i / LINES) * Math.PI * 2,
    }))

    let t = 0

    const draw = () => {
      ctx.clearRect(0, 0, W, H)
      t += 0.008

      for (let i = 0; i < N; i++) {
        for (let j = i + 1; j < N; j++) {
          const dx = particles[i].x - particles[j].x
          const dy = particles[i].y - particles[j].y
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist < 120) {
            ctx.beginPath()
            ctx.moveTo(particles[i].x, particles[i].y)
            ctx.lineTo(particles[j].x, particles[j].y)
            ctx.strokeStyle = `rgba(0,229,180,${0.055 * (1 - dist / 120)})`
            ctx.lineWidth = 0.6
            ctx.stroke()
          }
        }
      }

      particles.forEach(p => {
        p.x += p.vx; p.y += p.vy
        if (p.x < 0) p.x = W
        if (p.x > W) p.x = 0
        if (p.y < 0) p.y = H
        if (p.y > H) p.y = 0
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(${p.color},${p.alpha})`
        ctx.fill()
      })

      lines.forEach((line, li) => {
        ctx.beginPath()
        const amp  = 60 + li * 20
        const freq = 0.004 + li * 0.001
        const spd  = t * (0.4 + li * 0.15) + line.offset
        for (let x = 0; x <= W; x += 4) {
          const y = H * (0.25 + li * 0.18) +
                    Math.sin(x * freq + spd) * amp +
                    Math.sin(x * freq * 2.3 + spd * 0.7) * (amp * 0.4)
          x === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y)
        }
        ctx.strokeStyle = `rgba(${line.color},0.055)`
        ctx.lineWidth = 1.5
        ctx.stroke()
      })

      const cx = W * 0.75, cy = H * 0.3
      const angle = t * 0.3
      for (let ring = 0; ring < 3; ring++) {
        const rad = 180 + ring * 80
        ctx.beginPath()
        ctx.ellipse(cx, cy, rad, rad * 0.45, angle + ring * 0.5, 0, Math.PI * 2)
        ctx.strokeStyle = `rgba(0,229,180,${0.04 - ring * 0.008})`
        ctx.lineWidth = 1
        ctx.stroke()
      }

      raf = requestAnimationFrame(draw)
    }

    draw()
    return () => { cancelAnimationFrame(raf); window.removeEventListener('resize', resize) }
  }, [])

  return (
    <>
      <canvas id="bg-canvas" ref={canvasRef} />
      <div className="cursor" ref={cursorRef} />
      <div className="cursor-ring" ref={ringRef} />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
      </main>
      <Footer />
    </>
  )
}