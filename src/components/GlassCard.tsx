'use client'

import { useRef, useState, useCallback, type ReactNode } from 'react'
import { cn } from '@/lib/utils'

interface GlassCardProps {
  children: ReactNode
  className?: string
  hover?: boolean
  glow?: boolean
  tilt?: boolean
}

export function GlassCard({ children, className, hover = false, glow = false, tilt = true }: GlassCardProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [rotate, setRotate] = useState({ x: 0, y: 0 })
  const [isHovered, setIsHovered] = useState(false)

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    if (!ref.current || !tilt) return
    const rect = ref.current.getBoundingClientRect()
    const cx = rect.left + rect.width / 2
    const cy = rect.top + rect.height / 2
    const dx = e.clientX - cx
    const dy = e.clientY - cy
    const maxAngle = 5
    setRotate({
      x: (-dy / (rect.height / 2)) * maxAngle,
      y: (dx / (rect.width / 2)) * maxAngle,
    })
  }, [tilt])

  const handleMouseLeave = useCallback(() => {
    setRotate({ x: 0, y: 0 })
    setIsHovered(false)
  }, [])

  const handleMouseEnter = useCallback(() => {
    setIsHovered(true)
  }, [])

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={cn(
        'glass',
        isHovered ? 'border-desert-primary/20' : 'border-[rgba(255,255,255,0.06)]',
        tilt && 'transition-transform duration-200 ease-out',
        hover && 'transition-all duration-300 hover:border-desert-primary/20',
        glow && 'animate-pulse-glow',
        className
      )}
      style={{
        transform: tilt && isHovered ? `perspective(800px) rotateX(${rotate.x}deg) rotateY(${rotate.y}deg)` : 'perspective(800px) rotateX(0deg) rotateY(0deg)',
        willChange: tilt ? 'transform' : 'auto',
      }}
    >
      {children}
    </div>
  )
}
