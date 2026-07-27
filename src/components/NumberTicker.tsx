'use client'

import { useEffect, useState } from 'react'
import { animate, type ValueAnimationTransition } from 'framer-motion'
import { cn } from '@/lib/utils'

interface NumberTickerProps {
  value: number
  duration?: number
  delay?: number
  formatter?: (value: number) => string
  className?: string
  suffix?: string
}

export function NumberTicker({
  value,
  duration = 1500,
  delay = 200,
  formatter,
  className,
  suffix = '',
}: NumberTickerProps) {
  const [displayValue, setDisplayValue] = useState(0)
  const [hasAnimated, setHasAnimated] = useState(false)

  useEffect(() => {
    if (hasAnimated) return
    const timeout = setTimeout(() => {
      setHasAnimated(true)
      const controls = animate(0, value, {
        duration: duration / 1000,
        ease: [0.4, 0, 0.2, 1],
        onUpdate: (latest) => setDisplayValue(latest),
      } as ValueAnimationTransition)
      return () => controls.stop()
    }, delay)
    return () => clearTimeout(timeout)
  }, [value, duration, delay, hasAnimated])

  const display = formatter ? formatter(displayValue) : displayValue.toLocaleString('en-SA', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })

  return (
    <span className={cn('tabular-nums', className)}>
      {display}
      {suffix}
    </span>
  )
}
