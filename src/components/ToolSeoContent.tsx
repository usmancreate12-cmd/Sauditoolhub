'use client'

import { useTranslations } from 'next-intl'
import { ChevronDown } from 'lucide-react'
import { GlassCard } from '@/components/GlassCard'
import { MagneticButton } from '@/components/MagneticButton'
import Link from 'next/link'

interface ToolSeoContentProps {
  namespace: string
  locale: string
}

export function ToolSeoContent({ namespace, locale }: ToolSeoContentProps) {
  const t = useTranslations(namespace)
  const isRtl = locale === 'ar' || locale === 'ur'
  const dir = isRtl ? 'rtl' : 'ltr'

  return (
    <div className="mx-auto mt-12 max-w-4xl space-y-12 px-4 sm:px-6 lg:px-8" dir={dir}>
      <GlassCard className="p-6 md:p-8">
        <h2 className="mb-6 text-2xl font-bold text-white">{t('seo.howToUse.title')}</h2>
        <div className="space-y-6">
          {[1, 2, 3, 4, 5].map((i) => (
            <div key={i} className="flex items-start gap-4">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-desert-primary/20 text-sm font-bold text-desert-primary">
                {i}
              </span>
              <div>
                <h3 className="font-semibold text-white">{t(`seo.howToUse.step${i}Title`)}</h3>
                <p className="mt-1 text-sm text-gray-400">{t(`seo.howToUse.step${i}Desc`)}</p>
              </div>
            </div>
          ))}
        </div>
      </GlassCard>

      <GlassCard className="p-6 md:p-8">
        <h2 className="mb-6 text-2xl font-bold text-white">{t('seo.understandingResults.title')}</h2>
        <p className="text-gray-400 leading-relaxed">{t('seo.understandingResults.content')}</p>
        <div className="mt-6 rounded-lg bg-desert-primary/5 border border-desert-primary/10 p-4 md:p-6">
          <h3 className="font-semibold text-desert-primary mb-2">{t('seo.understandingResults.exampleTitle')}</h3>
          <p className="text-gray-400 leading-relaxed">{t('seo.understandingResults.example')}</p>
        </div>
      </GlassCard>

      <GlassCard className="p-6 md:p-8">
        <h2 className="mb-6 text-2xl font-bold text-white">{t('seo.faq.title')}</h2>
        <div className="space-y-3">
          {[1, 2, 3, 4, 5, 6, 7].map((i) => (
            <details key={i} className="group rounded-lg border border-[rgba(255,255,255,0.06)] transition-colors [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex cursor-pointer items-center justify-between rounded-lg p-4 transition-colors hover:bg-desert-primary/5">
                <span className="font-medium text-white">{t(`seo.faq.q${i}`)}</span>
                <ChevronDown className="h-5 w-5 shrink-0 text-gray-400 transition-transform duration-200 group-open:rotate-180" />
              </summary>
              <div className="border-t border-[rgba(255,255,255,0.06)] px-4 py-4 text-gray-400 leading-relaxed">
                {t(`seo.faq.a${i}`)}
              </div>
            </details>
          ))}
        </div>
      </GlassCard>

      <GlassCard className="p-6 md:p-8">
        <h2 className="mb-6 text-2xl font-bold text-white">{t('seo.relatedTools.title')}</h2>
        <div className="grid gap-4 sm:grid-cols-2">
          {[1, 2, 3, 4].map((i) => {
            const href = t(`seo.relatedTools.tool${i}Href`)
            return (
              <Link key={i} href={href}>
                <div className="rounded-lg border border-desert-primary/10 bg-desert-primary/5 p-4 transition-all duration-300 hover:border-desert-primary/30 hover:bg-desert-primary/10">
                  <h3 className="font-semibold text-desert-primary">{t(`seo.relatedTools.tool${i}Name`)}</h3>
                  <p className="mt-1 text-sm text-gray-400">{t(`seo.relatedTools.tool${i}Desc`)}</p>
                </div>
              </Link>
            )
          })}
        </div>
      </GlassCard>

      <p className="text-xs text-gray-500 leading-relaxed">{t('seo.disclaimer')}</p>
    </div>
  )
}
