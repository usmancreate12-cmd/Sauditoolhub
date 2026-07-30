'use client'

import { useEffect, useRef, useState, useCallback } from 'react'
import { motion, useAnimationFrame, useMotionValue, useSpring } from 'framer-motion'
import {
  Shield,
  Zap,
  Lock,
  Globe,
  Calculator,
  ChevronDown,
  ArrowRight,
  Sparkles,
} from 'lucide-react'
import { useTranslations } from 'next-intl'
import { useRouter } from 'next/navigation'
import { cn } from '@/lib/utils'

function useMousePosition() {
  const x = useMotionValue(0.5)
  const y = useMotionValue(0.5)
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      x.set(e.clientX / window.innerWidth)
      y.set(e.clientY / window.innerHeight)
    }
    window.addEventListener('mousemove', handler)
    return () => window.removeEventListener('mousemove', handler)
  }, [x, y])
  return { x, y }
}

function FloatingIcon({
  Icon,
  x,
  y,
  delay,
  size = 24,
  rotate = true,
}: {
  Icon: React.ElementType
  x: number
  y: number
  delay: number
  size?: number
  rotate?: boolean
}) {
  const mouse = useMousePosition()
  const parallaxX = useMotionValue(0)
  const parallaxY = useMotionValue(0)
  const springX = useSpring(parallaxX, { stiffness: 50, damping: 30 })
  const springY = useSpring(parallaxY, { stiffness: 50, damping: 30 })

  useAnimationFrame(() => {
    parallaxX.set((mouse.x.get() - 0.5) * (x > 0.5 ? 20 : -20))
    parallaxY.set((mouse.y.get() - 0.5) * (y > 0.5 ? 20 : -20))
  })

  return (
    <motion.div
      className="pointer-events-none absolute z-10 text-teal-400/30"
      style={{ left: `${x * 100}%`, top: `${y * 100}%`, x: springX, y: springY }}
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, delay, ease: 'easeOut' }}
    >
      <motion.div
        animate={{
          y: [0, -12, 0],
          rotate: rotate ? [0, 8, -8, 0] : 0,
        }}
        transition={{ duration: 4 + delay, repeat: Infinity, ease: 'easeInOut' }}
      >
        <Icon size={size} />
      </motion.div>
    </motion.div>
  )
}

function GeometricShape({
  shape,
  x,
  y,
  delay,
  size = 40,
}: {
  shape: 'circle' | 'square' | 'hex'
  x: number
  y: number
  delay: number
  size?: number
}) {
  const mouse = useMousePosition()
  const parallaxX = useMotionValue(0)
  const parallaxY = useMotionValue(0)
  const springX = useSpring(parallaxX, { stiffness: 40, damping: 25 })
  const springY = useSpring(parallaxY, { stiffness: 40, damping: 25 })

  useAnimationFrame(() => {
    parallaxX.set((mouse.x.get() - 0.5) * (x > 0.5 ? 30 : -30))
    parallaxY.set((mouse.y.get() - 0.5) * (y > 0.5 ? 30 : -30))
  })

  const ShapeComponent =
    shape === 'circle' ? (
      <circle cx={size / 2} cy={size / 2} r={size / 2} />
    ) : shape === 'square' ? (
      <rect x={0} y={0} width={size} height={size} rx={4} />
    ) : (
      <polygon points={`${size / 2},0 ${size},${size * 0.25} ${size},${size * 0.75} ${size / 2},${size} 0,${size * 0.75} 0,${size * 0.25}`} />
    )

  return (
    <motion.div
      className="pointer-events-none absolute z-10 opacity-20"
      style={{ left: `${x * 100}%`, top: `${y * 100}%`, x: springX, y: springY }}
      initial={{ opacity: 0, rotate: -30 }}
      animate={{ opacity: 0.2, rotate: 0 }}
      transition={{ duration: 1, delay, ease: 'easeOut' }}
    >
      <motion.svg
        width={size}
        height={size}
        viewBox={`0 0 ${size} ${size}`}
        className="text-teal-400/30"
        animate={{ rotate: [0, 360] }}
        transition={{ duration: 20 + delay * 5, repeat: Infinity, ease: 'linear' }}
      >
        {ShapeComponent}
      </motion.svg>
    </motion.div>
  )
}

const trustItems = [
  { key: 'privacy', icon: Shield },
  { key: 'instant', icon: Zap },
  { key: 'nodata', icon: Lock },
  { key: 'languages', icon: Globe },
]

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
}

const trustVariants = {
  hidden: { opacity: 0, y: 10, scale: 0.9 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5 } },
}

function RippleButton({
  children,
  className,
  isPrimary = false,
  href,
}: {
  children: React.ReactNode
  className?: string
  isPrimary?: boolean
  href?: string
}) {
  const router = useRouter()
  const buttonRef = useRef<HTMLButtonElement>(null)
  const [ripples, setRipples] = useState<{ x: number; y: number; id: number }[]>([])

  const handleClick = useCallback((e: React.MouseEvent) => {
    const rect = buttonRef.current?.getBoundingClientRect()
    if (!rect) return
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    const id = Date.now()
    setRipples((prev) => [...prev, { x, y, id }])
    setTimeout(() => setRipples((prev) => prev.filter((r) => r.id !== id)), 800)
    if (href) {
      setTimeout(() => router.push(href), 250)
    }
  }, [href, router])

  return (
    <button
      ref={buttonRef}
      onClick={handleClick}
      className={cn(
        'group relative overflow-hidden rounded-xl px-8 py-4 text-lg font-semibold transition-all duration-300',
        isPrimary
          ? 'bg-gradient-to-r from-teal-500 to-emerald-500 text-white shadow-lg shadow-teal-500/25 hover:shadow-teal-500/40 hover:scale-[1.02]'
          : 'border border-white/10 bg-white/5 text-gray-200 backdrop-blur-sm hover:bg-white/10',
        className
      )}
    >
      {ripples.map((ripple) => (
        <span
          key={ripple.id}
          className="pointer-events-none absolute animate-ripple rounded-full bg-white/30"
          style={{
            left: ripple.x - 12,
            top: ripple.y - 12,
            width: 24,
            height: 24,
          }}
        />
      ))}
      {isPrimary && (
        <span className="absolute inset-0 -z-10 animate-gradient-rotate rounded-xl bg-[conic-gradient(from_var(--angle),#00D4AA,#FF6B35,#FFD700,#00D4AA)] opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-40" />
      )}
      {children}
    </button>
  )
}

export function HeroSection() {
  const t = useTranslations('Hero')

  return (
    <section className="relative flex min-h-[90vh] flex-col items-center justify-center overflow-hidden px-4 pt-20">
      <motion.div
        className="flex flex-col items-center text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Badge */}
        <motion.div variants={itemVariants} className="mb-6">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-teal-500/20 bg-teal-500/10 px-4 py-1.5 text-xs font-medium text-teal-400">
            <Sparkles size={14} />
            {t('badge') || 'Saudi Arabia\'s Smart Calculator Hub'}
          </span>
        </motion.div>

        {/* Title */}
        <motion.h1
          variants={itemVariants}
          className="mx-auto max-w-5xl bg-gradient-to-r from-teal-400 via-amber-400 to-teal-400 bg-[length:200%_auto] bg-clip-text text-5xl font-extrabold leading-tight text-transparent animate-gradient-shift sm:text-6xl md:text-7xl lg:text-8xl"
        >
          {t('title') || "Saudi Arabia's #1 Free Expat & Business Calculator Hub 2026"}
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-6 max-w-2xl text-lg text-gray-400 md:text-xl"
        >
          {t('subtitle') || 'Calculate your EOSB, Jawazat fines, and more with real-time accuracy'}
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          variants={itemVariants}
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
        >
          <RippleButton isPrimary href="/eosb-calculator">
            <span className="flex items-center gap-2">
              {t('ctaPrimary') || 'Explore Calculators'}
              <ArrowRight size={20} />
            </span>
          </RippleButton>
          <RippleButton href="#categories">
            {t('ctaSecondary') || 'How It Works'}
          </RippleButton>
        </motion.div>

        {/* Trust Badges */}
        <motion.div
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.08, delayChildren: 0.3 } },
          }}
          initial="hidden"
          animate="visible"
          className="mt-16 flex flex-wrap items-center justify-center gap-6 sm:gap-10"
        >
          {trustItems.map((item) => {
            const Icon = item.icon
            return (
              <motion.div
                key={item.key}
                variants={trustVariants}
                className="flex items-center gap-2 text-xs text-gray-500 sm:text-sm"
              >
                <motion.div
                  animate={{ scale: [1, 1.15, 1] }}
                  transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                >
                  <Icon size={18} className="text-teal-400/70" />
                </motion.div>
                <span>{t(`trust.${item.key}`) || item.key}</span>
              </motion.div>
            )
          })}
        </motion.div>
      </motion.div>

      {/* Floating Elements */}
      <FloatingIcon Icon={Calculator} x={0.08} y={0.25} delay={0.4} size={28} />
      <FloatingIcon Icon={Calculator} x={0.92} y={0.2} delay={0.8} size={22} />
      <FloatingIcon Icon={Globe} x={0.05} y={0.65} delay={1} size={20} />
      <FloatingIcon Icon={Zap} x={0.94} y={0.7} delay={0.5} size={24} rotate={false} />

      {/* Geometric Shapes */}
      <GeometricShape shape="hex" x={0.15} y={0.75} delay={0.6} size={32} />
      <GeometricShape shape="circle" x={0.85} y={0.35} delay={0.9} size={28} />
      <GeometricShape shape="square" x={0.03} y={0.45} delay={1.1} size={24} />
      <GeometricShape shape="circle" x={0.97} y={0.55} delay={0.7} size={36} />

      {/* SAR symbols */}
      <motion.div
        className="pointer-events-none absolute z-10 text-2xl font-bold text-amber-400/15"
        style={{ left: '20%', top: '35%' }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1.2 }}
      >
        <motion.span
          animate={{ y: [0, -15, 0], rotate: [0, 5, -5, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
        >
          ﷼
        </motion.span>
      </motion.div>
      <motion.div
        className="pointer-events-none absolute z-10 text-3xl font-bold text-teal-400/15"
        style={{ left: '78%', top: '60%' }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1.5 }}
      >
        <motion.span
          animate={{ y: [0, -12, 0], rotate: [0, -5, 5, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        >
          ﷼
        </motion.span>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 2 }}
      >
        <motion.span
          className="text-xs text-gray-600"
          animate={{ opacity: [0.3, 0.8, 0.3] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
        >
          {t('scroll') || 'Scroll to explore'}
        </motion.span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ChevronDown size={20} className="text-gray-600" />
        </motion.div>
      </motion.div>
    </section>
  )
}
