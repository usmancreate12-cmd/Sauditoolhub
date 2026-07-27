'use client'

import { useRef, useState, useCallback } from 'react'
import { cn } from '@/lib/utils'

interface MagneticButtonProps {
  children: React.ReactNode
  onClick?: () => void
  className?: string
  variant?: 'primary' | 'secondary' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  disabled?: boolean
  type?: 'button' | 'submit'
}

export function MagneticButton({
  children,
  onClick,
  className,
  variant = 'primary',
  size = 'md',
  disabled = false,
  type = 'button',
}: MagneticButtonProps) {
  const ref = useRef<HTMLButtonElement>(null)
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [isHovered, setIsHovered] = useState(false)
  const [ripples, setRipples] = useState<{ id: number; x: number; y: number }[]>([])

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    if (!ref.current || disabled) return
    const rect = ref.current.getBoundingClientRect()
    const x = e.clientX - rect.left - rect.width / 2
    const y = e.clientY - rect.top - rect.height / 2
    const distance = Math.sqrt(x * x + y * y)
    const maxDist = 60
    const scale = distance > maxDist ? maxDist / distance : 1
    setPosition({ x: x * scale * 0.3, y: y * scale * 0.3 })
  }, [disabled])

  const handleMouseLeave = useCallback(() => {
    setPosition({ x: 0, y: 0 })
    setIsHovered(false)
  }, [])

  const handleMouseEnter = useCallback(() => {
    setIsHovered(true)
  }, [])

  const handleClick = useCallback((e: React.MouseEvent<HTMLButtonElement>) => {
    if (disabled) return
    const rect = ref.current?.getBoundingClientRect()
    if (rect) {
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top
      const id = Date.now()
      setRipples((prev) => [...prev, { id, x, y }])
      setTimeout(() => {
        setRipples((prev) => prev.filter((r) => r.id !== id))
      }, 600)
    }
    onClick?.()
  }, [disabled, onClick])

  const baseVariants: Record<string, string> = {
    primary:
      'bg-desert-primary text-white font-semibold border-none hover:bg-desert-primary-dim',
    secondary:
      'border border-[rgba(255,255,255,0.2)] text-gray-300 bg-[rgba(19,24,39,0.4)] backdrop-blur-[10px] hover:bg-[rgba(255,255,255,0.2)]',
    ghost:
      'text-gray-400 hover:text-gray-200 hover:bg-gray-800 border-none',
  }

  const sizes: Record<string, string> = {
    sm: 'px-3 py-1.5 text-sm rounded-lg',
    md: 'px-5 py-2.5 text-sm rounded-xl',
    lg: 'px-6 py-3 text-base rounded-xl',
  }

  return (
    <button
      ref={ref}
      type={type}
      onClick={handleClick}
      disabled={disabled}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={cn(
        'magnetic-btn relative inline-flex items-center justify-center gap-2 overflow-hidden',
        'transition-colors duration-200 select-none',
        'disabled:opacity-50 disabled:cursor-not-allowed',
        'group',
        baseVariants[variant],
        sizes[size],
        className
      )}
      style={{
        transform: isHovered && !disabled
          ? `translate(${position.x}px, ${position.y}px)`
          : 'translate(0, 0)',
      }}
    >
      {/* Liquid fill overlay */}
      <span
        className={cn(
          'absolute inset-0 transition-all duration-[400ms] ease-[cubic-bezier(0.34,1.56,0.64,1)]',
          variant === 'primary' && (isHovered ? 'bg-desert-primary-dim' : 'bg-desert-primary')
        )}
      />

      {/* Ripple effects */}
      {ripples.map((r) => (
        <span
          key={r.id}
          className="absolute pointer-events-none rounded-full animate-ripple"
          style={{
            left: r.x - 8,
            top: r.y - 8,
            width: 16,
            height: 16,
            background: 'rgba(255, 107, 53, 0.5)',
          }}
        />
      ))}

      {/* Content */}
      <span className="relative z-10 flex items-center gap-2 transition-transform duration-200 group-hover:scale-105">
        {children}
      </span>

      {/* Hover glow */}
      {isHovered && !disabled && (
        <span
          className="absolute inset-0 rounded-inherit"
          style={{
            background:
              'radial-gradient(circle at 50% 50%, rgba(255,255,255,0.08) 0%, transparent 60%)',
          }}
        />
      )}
    </button>
  )
}
