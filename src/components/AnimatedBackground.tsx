'use client'

import { useEffect, useRef } from 'react'

export function AnimatedBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const isTouch = window.matchMedia('(hover: none)').matches
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (isTouch || prefersReducedMotion) return

    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let animationId: number
    let time = 0
    let started = false

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resize()
    window.addEventListener('resize', resize)

    const blobs = [
      { x: 0.2, y: 0.3, rx: 0.15, ry: 0.12, color: '0, 212, 170', speed: 0.3 },
      { x: 0.7, y: 0.2, rx: 0.12, ry: 0.18, color: '139, 92, 246', speed: 0.25 },
      { x: 0.5, y: 0.7, rx: 0.2, ry: 0.1, color: '255, 107, 53', speed: 0.2 },
      { x: 0.85, y: 0.6, rx: 0.1, ry: 0.15, color: '0, 212, 170', speed: 0.35 },
      { x: 0.3, y: 0.8, rx: 0.18, ry: 0.14, color: '139, 92, 246', speed: 0.28 },
    ]

    const draw = () => {
      time += 0.005
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      blobs.forEach((blob) => {
        const cx = canvas.width * (blob.x + Math.sin(time * blob.speed + blob.rx) * 0.04)
        const cy = canvas.height * (blob.y + Math.cos(time * blob.speed * 0.7 + blob.ry) * 0.04)
        const rx = canvas.width * blob.rx
        const ry = canvas.height * blob.ry
        const rotation = time * blob.speed * 0.5

        ctx.save()
        ctx.translate(cx, cy)
        ctx.rotate(rotation)
        ctx.beginPath()
        ctx.ellipse(0, 0, rx, ry, 0, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(${blob.color}, 0.15)`
        ctx.filter = 'blur(100px)'
        ctx.fill()
        ctx.restore()
      })

      animationId = requestAnimationFrame(draw)
    }

    const startAnimation = () => {
      if (started) return
      started = true
      draw()
    }

    if ('requestIdleCallback' in window) {
      ;(window as any).requestIdleCallback(startAnimation, { timeout: 2000 })
    } else {
      setTimeout(startAnimation, 100)
    }

    return () => {
      cancelAnimationFrame(animationId)
      window.removeEventListener('resize', resize)
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
