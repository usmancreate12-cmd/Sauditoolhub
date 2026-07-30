'use client'

import { useEffect, useRef } from 'react'

interface Particle {
  x: number
  y: number
  vx: number
  vy: number
  size: number
  alpha: number
}

export function ParticleBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const mouseRef = useRef({ x: -1000, y: -1000 })
  const particlesRef = useRef<Particle[]>([])
  const rafRef = useRef(0)

  useEffect(() => {
    const isTouch = window.matchMedia('(hover: none)').matches
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (isTouch || prefersReducedMotion) return

    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resize()
    window.addEventListener('resize', resize)

    const isMobile = canvas.width < 768
    const particleCount = isMobile ? 20 : Math.min(80, Math.floor((canvas.width * canvas.height) / 15000))
    particlesRef.current = Array.from({ length: particleCount }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.3,
      vy: (Math.random() - 0.5) * 0.3,
      size: Math.random() * 2 + 0.5,
      alpha: Math.random() * 0.4 + 0.1,
    }))

    const handleMouse = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY }
    }
    window.addEventListener('mousemove', handleMouse)

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      const particles = particlesRef.current
      const mouse = mouseRef.current
      const connectionDist = 120

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i]
        p.x += p.vx
        p.y += p.vy

        if (p.x < 0 || p.x > canvas.width) p.vx *= -1
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1

        ctx.beginPath()
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(0, 212, 170, ${p.alpha})`
        ctx.fill()

        const dx = mouse.x - p.x
        const dy = mouse.y - p.y
        const distToMouse = Math.sqrt(dx * dx + dy * dy)

        if (distToMouse < connectionDist) {
          ctx.beginPath()
          ctx.moveTo(p.x, p.y)
          ctx.lineTo(mouse.x, mouse.y)
          ctx.strokeStyle = `rgba(0, 212, 170, ${(1 - distToMouse / connectionDist) * 0.15})`
          ctx.lineWidth = 0.5
          ctx.stroke()
        }

        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j]
          const pdx = p.x - p2.x
          const pdy = p.y - p2.y
          const dist = Math.sqrt(pdx * pdx + pdy * pdy)
          if (dist < connectionDist) {
            ctx.beginPath()
            ctx.moveTo(p.x, p.y)
            ctx.lineTo(p2.x, p2.y)
            ctx.strokeStyle = `rgba(139, 92, 246, ${(1 - dist / connectionDist) * 0.08})`
            ctx.lineWidth = 0.5
            ctx.stroke()
          }
        }
      }

      rafRef.current = requestAnimationFrame(animate)
    }

    const startAnimation = () => {
      rafRef.current = requestAnimationFrame(animate)
    }

    if ('requestIdleCallback' in window) {
      ;(window as any).requestIdleCallback(startAnimation, { timeout: 2000 })
    } else {
      setTimeout(startAnimation, 100)
    }

    return () => {
      cancelAnimationFrame(rafRef.current)
      window.removeEventListener('resize', resize)
      window.removeEventListener('mousemove', handleMouse)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0 z-0"
      style={{ willChange: 'transform' }}
    />
  )
}
