'use client'

import { useEffect, useRef } from 'react'

const trailColors = ['#00D4AA', '#8B5CF6', '#FF6B35', '#FFD700', '#00D4AA']

interface TrailDot {
  x: number
  y: number
  color: string
}

export function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null)
  const labelRef = useRef<HTMLSpanElement>(null)
  const trailRef = useRef<HTMLDivElement>(null)
  const posRef = useRef({ x: 0, y: 0 })
  const targetRef = useRef({ x: 0, y: 0 })
  const rafRef = useRef(0)
  const trailPositions = useRef<TrailDot[]>([])
  const hoverRef = useRef<'button' | 'link' | 'input' | 'card' | 'default'>('default')

  useEffect(() => {
    const isTouch = window.matchMedia('(hover: none)').matches
    if (isTouch) return

    const cursor = cursorRef.current
    const label = labelRef.current
    const trail = trailRef.current
    if (!cursor || !trail) return

    // Initialize trail dots
    trailPositions.current = trailColors.map((color) => ({ x: 0, y: 0, color }))

    const handleMouseMove = (e: MouseEvent) => {
      targetRef.current = { x: e.clientX, y: e.clientY }
    }

    const detectHover = () => {
      const el = document.elementFromPoint(targetRef.current.x, targetRef.current.y)
      if (!el) return 'default' as const
      const tag = (el as HTMLElement).tagName
      const role = (el as HTMLElement).getAttribute('role')
      const type = (el as HTMLElement).getAttribute('type')
      if (tag === 'BUTTON' || role === 'button' || (el as HTMLElement).closest('button')) return 'button' as const
      if (tag === 'A' || (el as HTMLElement).closest('a')) return 'link' as const
      if (tag === 'INPUT' || tag === 'TEXTAREA' || tag === 'SELECT' || type === 'text' || type === 'number' || type === 'date') return 'input' as const
      if ((el as HTMLElement).closest('[class*="result"]') || (el as HTMLElement).closest('[class*="glass"]')) return 'card' as const
      return 'default' as const
    }

    const animate = () => {
      const px = targetRef.current.x
      const py = targetRef.current.y

      posRef.current.x += (px - posRef.current.x) * 0.08
      posRef.current.y += (py - posRef.current.y) * 0.08

      const currentHover = detectHover()
      hoverRef.current = currentHover

      cursor.style.transform = `translate3d(${posRef.current.x}px, ${posRef.current.y}px, 0)`

      if (currentHover === 'button') {
        cursor.style.width = '40px'
        cursor.style.height = '40px'
        cursor.style.background = 'rgba(0, 212, 170, 0.9)'
        cursor.style.mixBlendMode = 'normal'
        if (label) {
          label.textContent = 'CLICK'
          label.style.opacity = '1'
        }
      } else if (currentHover === 'link') {
        cursor.style.width = '28px'
        cursor.style.height = '28px'
        cursor.style.background = 'rgba(0, 212, 170, 0.8)'
        cursor.style.mixBlendMode = 'difference'
        if (label) label.style.opacity = '0'
      } else if (currentHover === 'input') {
        cursor.style.width = '3px'
        cursor.style.height = '24px'
        cursor.style.background = '#00D4AA'
        cursor.style.borderRadius = '2px'
        cursor.style.mixBlendMode = 'normal'
        if (label) label.style.opacity = '0'
      } else if (currentHover === 'card') {
        cursor.style.width = '24px'
        cursor.style.height = '24px'
        cursor.style.background = 'rgba(255, 215, 0, 0.9)'
        cursor.style.mixBlendMode = 'normal'
        if (label) {
          label.textContent = '✨'
          label.style.opacity = '1'
        }
      } else {
        cursor.style.width = '8px'
        cursor.style.height = '8px'
        cursor.style.background = 'rgba(0, 212, 170, 0.7)'
        cursor.style.borderRadius = '50%'
        cursor.style.mixBlendMode = 'difference'
        if (label) label.style.opacity = '0'
      }

      // Trail
      trailPositions.current.unshift({ x: posRef.current.x, y: posRef.current.y, color: '' })
      trailPositions.current = trailPositions.current.slice(0, trailColors.length)

      const dots = trail.querySelectorAll('span')
      dots.forEach((dot, i) => {
        const tp = trailPositions.current[i]
        if (tp) {
          dot.style.transform = `translate3d(${tp.x}px, ${tp.y}px, 0)`
        }
      })

      rafRef.current = requestAnimationFrame(animate)
    }

    document.addEventListener('mousemove', handleMouseMove)
    posRef.current = { x: window.innerWidth / 2, y: window.innerHeight / 2 }

    const startAnimation = () => {
      rafRef.current = requestAnimationFrame(animate)
    }

    if ('requestIdleCallback' in window) {
      ;(window as any).requestIdleCallback(startAnimation, { timeout: 2000 })
    } else {
      setTimeout(startAnimation, 100)
    }

    return () => {
      document.removeEventListener('mousemove', handleMouseMove)
      cancelAnimationFrame(rafRef.current)
    }
  }, [])

  return (
    <>
      <div
        ref={cursorRef}
        className="pointer-events-none fixed z-[9999] flex items-center justify-center rounded-full"
        style={{
          background: 'rgba(0, 212, 170, 0.7)',
          width: '8px',
          height: '8px',
          left: 0,
          top: 0,
          mixBlendMode: 'difference',
          transition: 'width 0.2s, height 0.2s, background 0.2s, border-radius 0.2s',
          willChange: 'transform',
        }}
      >
        <span
          ref={labelRef}
          className="text-[10px] font-bold tracking-wider opacity-0 transition-opacity duration-200"
          style={{ color: '#0A0E1A' }}
        />
      </div>
      <div ref={trailRef} className="pointer-events-none fixed inset-0 z-[9998]">
        {trailColors.map((color, i) => (
          <span
            key={i}
            className="pointer-events-none fixed h-1.5 w-1.5 rounded-full opacity-0"
            style={{
              background: color,
              left: 0,
              top: 0,
              opacity: 0.5 - i * 0.1,
              transition: 'opacity 0.3s',
              willChange: 'transform',
            }}
          />
        ))}
      </div>
      <style>{`
        * { cursor: none !important; }
        @media (hover: none) { * { cursor: auto !important; } }
        @media (prefers-reduced-motion: reduce) { * { cursor: auto !important; } }
      `}</style>
    </>
  )
}
