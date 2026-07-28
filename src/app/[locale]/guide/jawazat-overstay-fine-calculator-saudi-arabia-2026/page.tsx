import type { Metadata } from 'next'
import Link from 'next/link'
import { BreadcrumbJsonLd, FAQJsonLd, ArticleJsonLd } from '@/components/JsonLd'
import { Calculator } from 'lucide-react'

type Props = { params: Promise<{ locale: string }> }

const locales = ['en', 'ar', 'ur', 'tl', 'bn'] as const
const baseUrl = 'https://Sauditoolhub.com'

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params
  const isDefault = locale === 'en'
  const isAr = locale === 'ar'
  const isUr = locale === 'ur'

  const title = isAr
    ? 'دليل غرامات الجوازات الكامل 2026 - حاسبة غرامة التأخير | Sauditoolhub'
    : isUr
    ? 'جاوزات اوور سٹے فائن کا مکمل گائیڈ 2026 - جرمانہ کیلکولیٹر | Sauditoolhub'
    : 'Jawazat Overstay Fine Calculator Saudi Arabia 2026: Complete Guide'

  const description = isAr
    ? 'احسب غرامة تأخير تجديد الإقامة والجوازات instantly. دليل كامل 2026 لغرامات التأخير بأنواعها مع حاسبة مجانية.'
    : isUr
    ? 'اپنے جاوزات اوور سٹے فائن کا فوری حساب لگائیں۔ اقامہ، ایگزٹ/ری انٹری اور وزٹ ویزہ کے جرمانوں کا 2026 کا مکمل گائیڈ۔'
    : 'Calculate your Jawazat overstay fine instantly. Complete 2026 guide to Iqama, Exit/Re-Entry, and Visit Visa overstay penalties in Saudi Arabia.'

  return {
    title,
    description,
    alternates: {
      canonical: isDefault ? `${baseUrl}/guide/jawazat-overstay-fine-calculator-saudi-arabia-2026` : `${baseUrl}/${locale}/guide/jawazat-overstay-fine-calculator-saudi-arabia-2026`,
      languages: {
        en: `${baseUrl}/guide/jawazat-overstay-fine-calculator-saudi-arabia-2026`,
        ar: `${baseUrl}/ar/guide/jawazat-overstay-fine-calculator-saudi-arabia-2026`,
        ur: `${baseUrl}/ur/guide/jawazat-overstay-fine-calculator-saudi-arabia-2026`,
        tl: `${baseUrl}/tl/guide/jawazat-overstay-fine-calculator-saudi-arabia-2026`,
        bn: `${baseUrl}/bn/guide/jawazat-overstay-fine-calculator-saudi-arabia-2026`,
      },
    },
    openGraph: {
      title,
      description,
      url: isDefault ? `${baseUrl}/guide/jawazat-overstay-fine-calculator-saudi-arabia-2026` : `${baseUrl}/${locale}/guide/jawazat-overstay-fine-calculator-saudi-arabia-2026`,
      siteName: 'Sauditoolhub',
      locale: isAr ? 'ar_SA' : isUr ? 'ur_PK' : 'en_US',
      type: 'article',
      publishedTime: '2026-01-01',
      modifiedTime: '2026-07-01',
    },
    twitter: { card: 'summary_large_image', title, description },
    robots: { index: true, follow: true },
  }
}

const articleSchemaEn = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'The Complete Guide to Jawazat Overstay Fines & Penalties in Saudi Arabia 2026',
  description: 'Calculate your Jawazat overstay fine instantly. Complete 2026 guide to Iqama, Exit/Re-Entry, and Visit Visa overstay penalties in Saudi Arabia.',
  author: { '@type': 'Person', name: 'Sauditoolhub Team' },
  publisher: { '@type': 'Organization', name: 'Sauditoolhub', logo: { '@type': 'ImageObject', url: `${baseUrl}/logo.png` } },
  datePublished: '2026-01-01',
  dateModified: '2026-07-01',
}

const schemaAr = {
  ...articleSchemaEn,
  headline: 'الدليل الشامل لغرامات الجوازات للتأخير والغرامات في المملكة العربية السعودية 2026',
  description: 'احسب غرامة تأخير تجديد الإقامة والجوازات instantly. دليل كامل 2026 لغرامات التأخير بأنواعها مع حاسبة مجانية.',
}

const schemaUr = {
  ...articleSchemaEn,
  headline: 'جاوزات اوور سٹے فائن اور جرمانوں کا مکمل گائیڈ 2026',
  description: 'اپنے جاوزات اوور سٹے فائن کا فوری حساب لگائیں۔ اقامہ، ایگزٹ/ری انٹری اور وزٹ ویزہ کے جرمانوں کا 2026 کا مکمل گائیڈ۔',
}

const faqsAr = [
  { question: 'كم تبلغ غرامة تأخير الإقامة في السعودية 2026؟', answer: 'المخالفة الأولى: 15,000 ريال سعودي. المخالفة الثانية: 30,000 ريال سعودي. المخالفة الثالثة فأكثر: 50,000 ريال سعودي لكل مخالفة.' },
  { question: 'هل توجد فترة سماح لتأخير تأشيرة الخروج والعودة؟', answer: 'لا توجد فترة سماح رسمية. تبدأ الغرامات (100 ريال/يوم) من اليوم التالي لتاريخ انتهاء التأشيرة.' },
  { question: 'هل يمكنني مغادرة السعودية دون دفع غرامة التأخير؟', answer: 'لا. سيتحقق موظفو الجوازات من حالة تأشيرتك قبل ختم الخروج. يجب دفع جميع الغرامات قبل المغادرة.' },
  { question: 'من المسؤول عن دفع غرامة التأخير - الموظف أم الكفيل؟', answer: 'كلا الطرفين قد يتحمل المسؤولية. إذا تأخر الكفيل في تجديد الإقامة، يتحمل الكفيل الغرامة.' },
  { question: 'كيف أتحقق من غرامة التأخير عبر أبشر؟', answer: 'سجل الدخول إلى حسابك في أبشر، انتقل إلى خدمات الجوازات، ثم اختر الاستعلام عن المخالفات.' },
  { question: 'ماذا يحدث إذا تأخرت في تأشيرة الزيارة العائلية؟', answer: 'غرامة 100 ريال عن كل يوم تأخير، بحد أقصى 50,000 ريال. قد تشمل العقوبات السجن والترحيل ومنع العودة.' },
  { question: 'هل يمكن إلغاء أو تخفيض غرامة التأخير؟', answer: 'في حالات استثنائية وبموافقة الجهات المختصة، قد يتم النظر في تخفيض الغرامة.' },
]

const faqsUr = [
  { question: '2026 میں سعودی عرب میں اقامہ اوور سٹے کا جرمانہ کتنا ہے؟', answer: 'پہلی خلاف ورزی: 15,000 ریال۔ دوسری خلاف ورزی: 30,000 ریال۔ تیسری اور اس سے زیادہ: 50,000 ریال فی خلاف ورزی۔' },
  { question: 'کیا ایگزٹ/ری انٹری ویزہ اوور سٹے کے لیے گریس پیریڈ ہے؟', answer: 'نہیں، کوئی سرکاری گریس پیریڈ نہیں ہے۔ جرمانے (100 ریال/دن) ویزہ ختم ہونے کے اگلے دن سے شروع ہوتے ہیں۔' },
  { question: 'کیا میں جرمانہ ادا کیے بغیر سعودی عرب چھوڑ سکتا ہوں؟', answer: 'نہیں۔ امیگریشن افسران ایگزٹ سٹیمپ لگانے سے پہلے آپ کے ویزہ کی حیثیت چیک کریں گے۔' },
  { question: 'اوور سٹے جرمانہ کون ادا کرے گا، ملازم یا کفیل؟', answer: 'دونوں فریق ذمہ دار ہو سکتے ہیں۔ اگر کفیل تجدید میں تاخیر کرتا ہے تو کفیل جرمانہ ادا کرے گا۔' },
  { question: 'ابشر پر جاوزات اوور سٹے فائن کیسے چیک کروں؟', answer: 'ابشر میں لاگ ان کریں، جاوزات سروسز پر جائیں، پھر خلاف ورزیوں کی استعلام منتخب کریں۔' },
  { question: 'خاندانی وزٹ ویزہ اوور سٹے کرنے پر کیا ہوتا ہے؟', answer: '100 ریال فی دن جرمانہ، زیادہ سے زیادہ 50,000 ریال۔ اضافی سزاؤں میں قید، ملک بدری، اور واپسی پر پابندی شامل ہے۔' },
  { question: 'کیا اوور سٹے جرمانہ معاف یا کم کیا جا سکتا ہے؟', answer: 'غیر معمولی صورتوں میں اور متعلقہ حکام کی منظوری سے، جرمانہ کم کرنے پر غور کیا جا سکتا ہے۔' },
]

const faqsEn = [
  { question: 'How much is the Iqama overstay fine in Saudi Arabia 2026?', answer: 'First violation: SAR 15,000 flat. Second violation: SAR 30,000. Third and subsequent violations: SAR 50,000 each.' },
  { question: 'Is there a grace period for Exit/Re-Entry visa overstay?', answer: 'No official grace period. Fines (SAR 100/day) start from the day after visa expiry.' },
  { question: 'Can I leave Saudi Arabia without paying the overstay fine?', answer: 'No. Immigration officers will check your visa status before stamping exit. All fines must be paid before departure.' },
  { question: 'Who pays the overstay fine - employee or sponsor?', answer: 'Both parties may be responsible. If the sponsor delays renewal, the sponsor pays the fine. However, the employee remains responsible for their legal status.' },
  { question: 'How do I check my overstay fine on Absher?', answer: 'Log into your Absher account, go to Jawazat services, then select inquiry about violations.' },
  { question: 'What happens if I overstay my family visit visa?', answer: 'SAR 100 per day fine, up to SAR 50,000. Additional penalties may include imprisonment, deportation, and re-entry ban up to 10 years.' },
  { question: 'Can overstay fines be waived or reduced?', answer: 'In exceptional cases and with approval from relevant authorities, fines may be reduced.' },
]

function EnContent() {
  return (
    <article className="prose prose-invert max-w-none prose-headings:text-desert-primary prose-a:text-desert-primary prose-strong:text-white prose-li:text-gray-300">
      <h1>Complete Guide to Jawazat Overstay Fines & Penalties in Saudi Arabia 2026</h1>

      <div className="not-prose glass p-6 rounded-xl mb-8">
        <p className="text-gray-300 text-lg leading-relaxed">
          Stressed about your expired Iqama or visa? You are not alone. Thousands of expats in Saudi Arabia struggle to understand overstay fines and the different types of penalties. Whether you hold an Iqama, Exit/Re-Entry visa, or Visit visa, Jawazat fines can add up quickly to thousands of Riyals.
        </p>
        <p className="text-gray-300 text-lg leading-relaxed mt-4">
          That is where{' '}
          <Link href="/jawazat-fine-calculator" className="text-desert-primary font-bold underline">
            Sauditoolhub Jawazat Fine Calculator
          </Link>{' '}
          comes in. We built this free tool to help you estimate the exact amount owed in seconds. In this complete guide, we explain everything you need to know about overstay fines in Saudi Arabia for 2026.
        </p>
        <div className="mt-4">
          <Link href="/jawazat-fine-calculator" className="inline-flex items-center gap-2 rounded-xl bg-desert-primary px-6 py-3 text-sm font-bold text-white transition-all hover:bg-desert-primary-dim">
            <Calculator className="h-4 w-4" />
            Calculate Your Fine Now — Free
          </Link>
        </div>
      </div>

      <h2>What Are Jawazat Overstay Fines?</h2>
      <p>Jawazat overstay fines are financial penalties imposed by Saudi Arabia's General Directorate of Passports on individuals who violate residency and visa regulations. These fines are based on Article 39 of the Saudi Residency System and aim to ensure compliance with immigration rules for all residents and visitors.</p>
      <p>The Jawazat, under the Ministry of Interior (MOI), plays a central role in regulating and enforcing these penalties. It oversees all residency and visa affairs and ensures fair application of rules to all violators.</p>
      <ul>
        <li><strong>Regulate the labor market</strong> and ensure companies comply with residency rules.</li>
        <li><strong>Protect worker rights</strong> by documenting legal status.</li>
        <li><strong>Encourage voluntary compliance</strong> with residency and visa systems.</li>
        <li><strong>Generate government revenue</strong> that benefits public services.</li>
      </ul>

      <h2>Detailed Overstay Fine Breakdown (2026 Rules)</h2>

      <h3>Iqama Overstay Fines</h3>
      <div className="not-prose glass p-4 rounded-xl mb-6">
        <ul className="space-y-3 text-gray-300">
          <li><strong className="text-red-400">First violation:</strong> Flat fine of SAR 15,000.</li>
          <li><strong className="text-red-400">Second violation:</strong> Flat fine of SAR 30,000.</li>
          <li><strong className="text-red-400">Third and subsequent violations:</strong> Flat fine of SAR 50,000 per violation.</li>
          <li><strong>Maximum:</strong> Up to SAR 100,000 per violation in some cases.</li>
          <li><strong>Deportation:</strong> Repeated violations may lead to deportation and re-entry ban.</li>
        </ul>
      </div>

      <h3>Exit/Re-Entry Visa Overstay Fines</h3>
      <div className="not-prose glass p-4 rounded-xl mb-6">
        <ul className="space-y-3 text-gray-300">
          <li><strong>Daily fine:</strong> SAR 100 for each day after visa expiry.</li>
          <li><strong>Non-cancellation fine:</strong> If an unused visa is not canceled within 90 days, an additional SAR 1,000 fine applies.</li>
          <li>Fines start counting from the day after visa expiry.</li>
        </ul>
      </div>

      <h3>Visit Visa Overstay Fines</h3>
      <div className="not-prose glass p-4 rounded-xl mb-6">
        <ul className="space-y-3 text-gray-300">
          <li><strong>Daily fine:</strong> SAR 100 per day from the expiry date.</li>
          <li><strong>Maximum fine:</strong> Up to SAR 50,000.</li>
          <li><strong>Additional penalties:</strong> May include imprisonment up to 6 months, deportation, and re-entry ban up to 10 years.</li>
        </ul>
      </div>

      <h2>Who Is Affected by These Fines?</h2>
      <ul>
        <li><strong>Expat workers:</strong> All Iqama holders who delay renewing their residency.</li>
        <li><strong>Dependents:</strong> Family members who delay renewing their visas.</li>
        <li><strong>Tourists and visa holders:</strong> Holders of tourist and family visit visas.</li>
        <li><strong>Employers (sponsors):</strong> Sponsors are responsible for timely Iqama renewal.</li>
      </ul>

      <h2>How to Calculate Overstay Fines - Step by Step</h2>
      <div className="not-prose glass p-6 rounded-xl mb-8">
        <ol className="space-y-4 text-gray-300 list-decimal list-inside">
          <li><strong>Step 1:</strong> Identify your visa type: Iqama, Exit/Re-Entry, or Visit visa.</li>
          <li><strong>Step 2:</strong> Note your visa expiry date and the current calculation date.</li>
          <li><strong>Step 3:</strong> Count the total number of overstay days.</li>
          <li><strong>Step 4:</strong> Apply the correct formula: flat penalty vs daily calculation.</li>
          <li><strong>Step 5:</strong> Check for previous violations (cumulative fines).</li>
        </ol>
      </div>

      <h3>Real Calculation Examples</h3>
      <div className="not-prose glass p-4 rounded-xl mb-4">
        <p className="text-gray-300"><strong>Example 1 - Iqama:</strong> An expat delays renewing Iqama for the first time. First violation: SAR 15,000 flat fine.</p>
      </div>
      <div className="not-prose glass p-4 rounded-xl mb-4">
        <p className="text-gray-300"><strong>Example 2 - Exit/Re-Entry:</strong> A dependent overstays by 15 days. Calculation: 15 x SAR 100 = SAR 1,500.</p>
      </div>
      <div className="not-prose glass p-4 rounded-xl mb-4">
        <p className="text-gray-300"><strong>Example 3 - Visit:</strong> A visitor overstays by 60 days. Calculation: 60 x SAR 100 = SAR 6,000. (Capped at SAR 50,000).</p>
      </div>

      <h2>Special Cases and Exceptions</h2>
      <ul>
        <li><strong>Sponsor-caused delay:</strong> If the sponsor is responsible for the delay, the sponsor pays. However, the expat remains responsible for their legal status.</li>
        <li><strong>Grace period:</strong> There is no official grace period. Fines start from the day after expiry.</li>
        <li><strong>Public holidays:</strong> Official holidays do not affect fine calculations. Renew before expiry.</li>
        <li><strong>Checking violations:</strong> You can check via Absher or the Muqeem portal.</li>
      </ul>

      <h2>Common Mistakes When Dealing with Fines</h2>
      <div className="not-prose glass p-4 rounded-xl mb-6">
        <ul className="space-y-3 text-gray-300">
          <li><strong>Mistake 1:</strong> Believing there is a grace period after visa expiry. There is no official grace period.</li>
          <li><strong>Mistake 2:</strong> Failing to cancel an unused Exit/Re-Entry visa within 90 days.</li>
          <li><strong>Mistake 3:</strong> Ignoring fines, leading to deportation (huroob) and re-entry bans.</li>
        </ul>
      </div>

      <h2>How to Pay Overstay Fines</h2>
      <ol>
        <li><strong>Via Absher:</strong> Log in, go to Jawazat services, select pay violations.</li>
        <li><strong>Via SADAD:</strong> Pay through bank apps like Al Rajhi or SNB using the invoice number.</li>
        <li><strong>At Jawazat offices:</strong> Visit your local Jawazat office for in-person assistance.</li>
      </ol>

      <h2>Latest Updates for 2026</h2>
      <ul>
        <li><strong>Digital integration:</strong> Improved integration between Tawakkalna and Absher for violation tracking.</li>
        <li><strong>Stricter enforcement:</strong> Tighter application of fines for visit visa overstays.</li>
        <li><strong>Future reforms:</strong> Developing a more flexible residency system while maintaining compliance.</li>
      </ul>

      <h2>Use the Sauditoolhub Calculator</h2>
      <p>Sauditoolhub offers a free{' '}
        <Link href="/jawazat-fine-calculator" className="text-desert-primary font-bold underline">
          Jawazat Fine Calculator
        </Link>{' '}
        that helps you estimate the exact amount owed in seconds. Choose your visa type, enter dates, and get an instant result. Save time and avoid calculation errors.
      </p>

      <div className="not-prose glass p-6 rounded-xl mt-8 text-center">
        <Calculator className="h-10 w-10 text-desert-primary mx-auto mb-3" />
        <h3 className="text-white text-lg font-bold mb-2">Calculate Your Fine Now</h3>
        <p className="text-gray-400 text-sm mb-4">Free instant estimate — no registration required</p>
        <Link href="/jawazat-fine-calculator" className="inline-flex items-center gap-2 rounded-xl bg-desert-primary px-8 py-3 text-sm font-bold text-white transition-all hover:bg-desert-primary-dim">
          <Calculator className="h-4 w-4" />
          Use the Free Calculator
        </Link>
      </div>

      <h2>Frequently Asked Questions</h2>
      {faqsEn.map((faq, i) => (
        <div key={i} className="not-prose glass p-4 rounded-xl mb-4">
          <h3 className="text-white font-semibold mb-2">{faq.question}</h3>
          <p className="text-gray-400 text-sm">{faq.answer}</p>
        </div>
      ))}

      <h2>Conclusion</h2>
      <p>Jawazat overstay fines in Saudi Arabia can become a major financial burden if ignored. Whether you are an expat, employer, or visitor, understanding the system and complying with it is the best way to avoid hefty fines and legal penalties.</p>
      <p>Do not guess your fine amount. Use the{' '}
        <Link href="/jawazat-fine-calculator" className="text-desert-primary font-bold underline">
          Sauditoolhub Jawazat Fine Calculator
        </Link>{' '}
        today for an accurate instant estimate. Free, fast, and fully private.
      </p>

      <div className="not-prose glass p-6 rounded-xl mt-8 text-center">
        <p className="text-gray-400 text-sm">Last updated: July 2026 · Based on Saudi Jawazat regulations and Article 39 of the Residency System</p>
      </div>
    </article>
  )
}

function ArContent() {
  return (
    <article className="prose prose-invert max-w-none prose-headings:text-desert-primary prose-a:text-desert-primary prose-strong:text-white prose-li:text-gray-300" dir="rtl">
      <h1>الدليل الشامل لغرامات الجوازات للتأخير والغرامات في المملكة العربية السعودية 2026</h1>

      <div className="not-prose glass p-6 rounded-xl mb-8">
        <p className="text-gray-300 text-lg leading-relaxed">
          هل توترت بسبب انتهاء إقامتك أو تأشيرتك؟ لست وحدك. يعاني الآلاف من المغتربين في المملكة العربية السعودية من الارتباك حول غرامات التأخير وأنواعها المختلفة. سواء كنت حامل إقامة أو تأشيرة خروج وعودة أو تأشيرة زيارة، فإن غرامات الجوازات يمكن أن تتراكم بسرعة وتصل إلى آلاف الريالات.
        </p>
        <p className="text-gray-300 text-lg leading-relaxed mt-4">
          هنا يأتي دور{' '}
          <Link href="/jawazat-fine-calculator" className="text-desert-primary font-bold underline">
            حاسبة غرامات الجوازات من Sauditoolhub
          </Link>
          . لقد صممنا هذه الأداة المجانية لمساعدتك في حساب المبلغ الدقيق المستحق عليك في ثوانٍ. في هذا الدليل الشامل، سنشرح كل ما تحتاج معرفته عن غرامات التأخير في السعودية لعام 2026.
        </p>
        <div className="mt-4">
          <Link href="/jawazat-fine-calculator" className="inline-flex items-center gap-2 rounded-xl bg-desert-primary px-6 py-3 text-sm font-bold text-white transition-all hover:bg-desert-primary-dim">
            <Calculator className="h-4 w-4" />
            احسب غرامتك الآن مجاناً
          </Link>
        </div>
      </div>

      <h2>ما هي غرامات التأخير في الجوازات؟</h2>
      <p>غرامات التأخير في الجوازات هي عقوبات مالية تفرضها المديرية العامة للجوازات (الجوازات) في المملكة العربية السعودية على المخالفين لأنظمة الإقامة والتأشيرات. تستند هذه الغرامات إلى المادة 39 من نظام الإقامة السعودي، وتهدف إلى ضمان امتثال جميع المقيمين والزوار لأنظمة الإقامة والتأشيرات.</p>
      <p>تقوم الجوازات، التابعة لوزارة الداخلية (MOI)، بدور رئيسي في تنظيم وتنفيذ هذه العقوبات. تشرف الجوازات على جميع شؤون الإقامة والتأشيرات، وتضمن تطبيق الأنظمة بشكل عادل على جميع المخالفين.</p>
      <ul>
        <li><strong>تنظيم سوق العمل</strong> وضمان التزام الشركات والمؤسسات بأنظمة الإقامة.</li>
        <li><strong>حماية حقوق العمال</strong> والمقيمين من خلال توثيق أوضاعهم القانونية.</li>
        <li><strong>تشجيع الامتثال الطوعي</strong> لأنظمة الإقامة والتأشيرات.</li>
        <li><strong>توليد إيرادات حكومية</strong> تعود بالنفع على الخدمات العامة.</li>
      </ul>

      <h2>تفصيل دقيق لغرامات التأخير (قواعد 2026)</h2>

      <h3>غرامات تأخير الإقامة</h3>
      <div className="not-prose glass p-4 rounded-xl mb-6">
        <ul className="space-y-3 text-gray-300">
          <li><strong className="text-red-400">المخالفة الأولى:</strong> غرامة مقطوعة بقيمة 15,000 ريال سعودي.</li>
          <li><strong className="text-red-400">المخالفة الثانية:</strong> غرامة مقطوعة بقيمة 30,000 ريال سعودي.</li>
          <li><strong className="text-red-400">المخالفة الثالثة فأكثر:</strong> غرامة مقطوعة بقيمة 50,000 ريال سعودي لكل مخالفة.</li>
          <li><strong>الحد الأقصى:</strong> يصل إلى 100,000 ريال سعودي للمخالفة الواحدة في بعض الحالات.</li>
          <li><strong>الترحيل:</strong> في حالة المخالفات المتكررة، قد يصل الأمر إلى الترحيل ومنع العودة.</li>
        </ul>
      </div>

      <h3>غرامات تأخير تأشيرة الخروج والعودة</h3>
      <div className="not-prose glass p-4 rounded-xl mb-6">
        <ul className="space-y-3 text-gray-300">
          <li><strong>الغرامة اليومية:</strong> 100 ريال سعودي عن كل يوم تأخير بعد تاريخ انتهاء التأشيرة.</li>
          <li><strong>غرامة عدم الإلغاء:</strong> إذا لم يتم إلغاء التأشيرة غير المستخدمة خلال 90 يوماً، غرامة إضافية قدرها 1,000 ريال سعودي.</li>
          <li>يبدأ احتساب الغرامة من اليوم التالي لتاريخ انتهاء التأشيرة.</li>
        </ul>
      </div>

      <h3>غرامات تأخير تأشيرة الزيارة</h3>
      <div className="not-prose glass p-4 rounded-xl mb-6">
        <ul className="space-y-3 text-gray-300">
          <li><strong>الغرامة اليومية:</strong> 100 ريال سعودي عن كل يوم تأخير من تاريخ انتهاء التأشيرة.</li>
          <li><strong>الحد الأقصى للغرامة:</strong> يصل إلى 50,000 ريال سعودي.</li>
          <li><strong>عقوبات إضافية:</strong> تشمل السجن لمدة تصل إلى 6 أشهر، والترحيل، ومنع العودة لمدة تصل إلى 10 سنوات.</li>
        </ul>
      </div>

      <h2>من المتأثر بهذه الغرامات؟</h2>
      <ul>
        <li><strong>العمالة الوافدة:</strong> جميع حاملي الإقامة الذين يتأخرون في تجديد إقاماتهم.</li>
        <li><strong>التابعين:</strong> أفراد عائلات المقيمين الذين يتأخرون في تجديد تأشيراتهم العائلية.</li>
        <li><strong>السياح وزوار التأشيرات:</strong> حاملو تأشيرات الزيارة السياحية والعائلية.</li>
        <li><strong>أصحاب العمل (الكفلاء):</strong> يتحمل الكفيل مسؤولية تجديد إقامة العمال في الوقت المحدد.</li>
      </ul>

      <h2>كيفية حساب غرامة التأخير - خطوة بخطوة</h2>
      <div className="not-prose glass p-6 rounded-xl mb-8">
        <ol className="space-y-4 text-gray-300 list-decimal list-inside">
          <li><strong>الخطوة 1:</strong> حدد نوع التأشيرة (إقامة، خروج وعودة، أو زيارة).</li>
          <li><strong>الخطوة 2:</strong> حدد تاريخ انتهاء التأشيرة وتاريخ اليوم الحالي.</li>
          <li><strong>الخطوة 3:</strong> احسب العدد الإجمالي لأيام التأخير.</li>
          <li><strong>الخطوة 4:</strong> طبق المعادلة الصحيحة (غرامة مقطوعة vs حساب يومي).</li>
          <li><strong>الخطوة 5:</strong> تحقق من وجود مخالفات سابقة (الغرامات التراكمية).</li>
        </ol>
      </div>

      <h3>أمثلة حقيقية للحساب</h3>
      <div className="not-prose glass p-4 rounded-xl mb-4">
        <p className="text-gray-300"><strong>مثال 1 - غرامة الإقامة:</strong> وافد تأخر في تجديد إقامته لأول مرة. المخالفة الأولى: غرامة مقطوعة 15,000 ريال سعودي.</p>
      </div>
      <div className="not-prose glass p-4 rounded-xl mb-4">
        <p className="text-gray-300"><strong>مثال 2 - خروج وعودة:</strong> تابع تأخر 15 يوماً. الحساب: 15 × 100 = 1,500 ريال سعودي.</p>
      </div>
      <div className="not-prose glass p-4 rounded-xl mb-4">
        <p className="text-gray-300"><strong>مثال 3 - زيارة:</strong> زائر تأخر 60 يوماً. الحساب: 60 × 100 = 6,000 ريال سعودي. (الحد الأقصى 50,000 ريال).</p>
      </div>

      <h2>حالات خاصة وسيناريوهات استثنائية</h2>
      <ul>
        <li><strong>تأخير بسبب الكفيل:</strong> إذا كان الكفيل مسؤولاً عن التأخير، يتحمل الكفيل الغرامة. لكن الوافد يظل مسؤولاً عن وضعه القانوني.</li>
        <li><strong>فترة السماح:</strong> لا توجد فترة سماح رسمية. تبدأ الغرامات من اليوم التالي لتاريخ الانتهاء.</li>
        <li><strong>العطلات الرسمية:</strong> لا تؤثر العطلات الرسمية على احتساب الغرامات. يجب التجديد قبل الانتهاء.</li>
        <li><strong>التحقق من المخالفات:</strong> يمكنك التحقق عبر منصة أبشر أو نظام مقيم.</li>
      </ul>

      <h2>الأخطاء الشائعة عند التعامل مع الغرامات</h2>
      <div className="not-prose glass p-4 rounded-xl mb-6">
        <ul className="space-y-3 text-gray-300">
          <li><strong>الخطأ 1:</strong> الاعتقاد بوجود فترة سماح بعد انتهاء التأشيرة. لا توجد فترة سماح رسمية.</li>
          <li><strong>الخطأ 2:</strong> عدم إلغاء تأشيرة الخروج والعودة غير المستخدمة خلال 90 يوماً.</li>
          <li><strong>الخطأ 3:</strong> تجاهل الغرامة مما يؤدي إلى الترحيل (هروب) ومنع العودة.</li>
        </ul>
      </div>

      <h2>كيفية دفع غرامة التأخير</h2>
      <ol>
        <li><strong>عبر أبشر:</strong> سجل الدخول، انتقل إلى خدمات الجوازات، اختر دفع المخالفات.</li>
        <li><strong>عبر سداد:</strong> ادفع عبر تطبيقات البنوك مثل الراجحي أو SNB باستخدام رقم الفاتورة.</li>
        <li><strong>في مكاتب الجوازات:</strong> قم بزيارة مكتب الجوازات في منطقتك للمساعدة الشخصية.</li>
      </ol>

      <h2>آخر التحديثات لعام 2026</h2>
      <ul>
        <li><strong>التكامل الرقمي:</strong> تحسين التكامل بين توكلنا وأبشر لمتابعة المخالفات.</li>
        <li><strong>تشديد الرقابة:</strong> تشديد تطبيق الغرامات على تأخير تأشيرات الزيارة.</li>
        <li><strong>الإصلاحات المستقبلية:</strong> تطوير نظام الإقامة ليكون أكثر مرونة مع الحفاظ على الامتثال.</li>
      </ul>

      <h2>استخدم حاسبة Sauditoolhub</h2>
      <p>يقدم <strong>Sauditoolhub</strong> <Link href="/jawazat-fine-calculator" className="text-desert-primary font-bold underline">حاسبة غرامات الجوازات المجانية</Link> التي تساعدك في تقدير المبلغ المستحق بدقة في ثوانٍ. اختر نوع التأشيرة، أدخل التواريخ، واحصل على النتيجة الفورية. وفر وقتك وتجنب الأخطاء الحسابية.</p>

      <div className="not-prose glass p-6 rounded-xl mt-6 mb-8 text-center">
        <Calculator className="h-10 w-10 text-desert-primary mx-auto mb-3" />
        <h3 className="text-white text-lg font-bold mb-2">احسب غرامتك الآن</h3>
        <p className="text-gray-400 text-sm mb-4">تقدير دقيق فوري مجاني — بدون تسجيل</p>
        <Link href="/jawazat-fine-calculator" className="inline-flex items-center gap-2 rounded-xl bg-desert-primary px-8 py-3 text-sm font-bold text-white transition-all hover:bg-desert-primary-dim">
          <Calculator className="h-4 w-4" />
          استخدم الحاسبة المجانية
        </Link>
      </div>

      <h2>الأسئلة الشائعة</h2>
      {faqsAr.map((faq, i) => (
        <div key={i} className="not-prose glass p-4 rounded-xl mb-4">
          <h3 className="text-white font-semibold mb-2">{faq.question}</h3>
          <p className="text-gray-400 text-sm">{faq.answer}</p>
        </div>
      ))}

      <h2>الخاتمة</h2>
      <p>غرامات التأخير في الجوازات السعودية يمكن أن تكون عبئاً مادياً كبيراً إذا تم تجاهلها. سواء كنت وافداً أو صاحب عمل أو زائراً، فإن فهم النظام والامتثال له هو أفضل طريقة لتجنب الغرامات الباهظة والعقوبات القانونية.</p>
      <p>لا تخمن قيمة غرامتك. استخدم <Link href="/jawazat-fine-calculator" className="text-desert-primary font-bold underline">حاسبة غرامات الجوازات من Sauditoolhub</Link> اليوم للحصول على تقدير دقيق فوري. مجاني، سريع، وخصوصية تامة.</p>

      <div className="not-prose glass p-6 rounded-xl mt-8 text-center">
        <p className="text-gray-400 text-sm">آخر تحديث: يوليو 2026 · بناءً على أنظمة الجوازات السعودية والمادة 39 من نظام الإقامة</p>
      </div>
    </article>
  )
}

function UrContent() {
  return (
    <article className="prose prose-invert max-w-none prose-headings:text-desert-primary prose-a:text-desert-primary prose-strong:text-white prose-li:text-gray-300" dir="rtl">
      <h1>جاوزات اوور سٹے فائن اور جرمانوں کا مکمل گائیڈ 2026</h1>

      <div className="not-prose glass p-6 rounded-xl mb-8">
        <p className="text-gray-300 text-lg leading-relaxed">
          کیا آپ کی اقامہ یا ویزہ ختم ہونے کی وجہ سے پریشانی ہو رہی ہے؟ آپ اکیلے نہیں ہیں۔ سعودی عرب میں ہزاروں تارکین وطن مختلف قسم کے اوور سٹے جرمانوں کے بارے میں الجھن کا شکار ہیں۔ چاہے آپ اقامہ ہولڈر ہوں، ایگزٹ/ری انٹری ویزہ ہولڈر ہوں، یا وزٹ ویزہ پر ہوں، جاوزات کے جرمانے تیزی سے جمع ہو سکتے ہیں اور ہزاروں ریال تک پہنچ سکتے ہیں۔
        </p>
        <p className="text-gray-300 text-lg leading-relaxed mt-4">
          یہاں{' '}
          <Link href="/jawazat-fine-calculator" className="text-desert-primary font-bold underline">
            Sauditoolhub کا جاوزات جرمانہ کیلکولیٹر
          </Link>
          {' '}آپ کی مدد کرتا ہے۔ ہم نے یہ مفت ٹول ڈیزائن کیا ہے تاکہ آپ سیکنڈوں میں اپنے جرمانے کا صحیح حساب لگا سکیں۔ اس مکمل گائیڈ میں، ہم وہ سب کچھ بیان کریں گے جو آپ کو 2026 میں سعودی عرب میں اوور سٹے جرمانوں کے بارے میں جاننے کی ضرورت ہے۔
        </p>
        <div className="mt-4">
          <Link href="/jawazat-fine-calculator" className="inline-flex items-center gap-2 rounded-xl bg-desert-primary px-6 py-3 text-sm font-bold text-white transition-all hover:bg-desert-primary-dim">
            <Calculator className="h-4 w-4" />
            اپنا جرمانہ ابھی مفت میں لگائیں
          </Link>
        </div>
      </div>

      <h2>جاوزات اوور سٹے فائن کیا ہیں؟</h2>
      <p>جاوزات اوور سٹے فائن وہ مالی جرمانے ہیں جو سعودی عرب کی جنرل ڈائریکٹوریٹ آف پاسپورٹس (جاوزات) اقامہ اور ویزہ قوانین کی خلاف ورزی کرنے والوں پر عائد کرتی ہے۔ یہ جرمانے سعودی اقامہ ریگولیشن کے آرٹیکل 39 پر مبنی ہیں۔</p>
      <p>جاوزات، جو وزارت داخلہ (MOI) کے تحت کام کرتی ہے، ان جرمانوں کو منظم اور نافذ کرنے میں اہم کردار ادا کرتی ہے۔</p>

      <h2>سعودی عرب میں اوور سٹے جرمانوں کی تفصیل (2026)</h2>

      <h3>اقامہ (ریذیڈنسی) اوور سٹے</h3>
      <div className="not-prose glass p-4 rounded-xl mb-6">
        <ul className="space-y-3 text-gray-300">
          <li><strong className="text-red-400">پہلی خلاف ورزی:</strong> 15,000 ریال فلیٹ جرمانہ۔</li>
          <li><strong className="text-red-400">دوسری خلاف ورزی:</strong> 30,000 ریال فلیٹ جرمانہ۔</li>
          <li><strong className="text-red-400">تیسری اور اس سے زیادہ:</strong> 50,000 ریال فلیٹ جرمانہ فی خلاف ورزی۔</li>
          <li><strong>زیادہ سے زیادہ حد:</strong> بعض صورتوں میں 100,000 ریال فی خلاف ورزی۔</li>
          <li><strong>ملک بدری:</strong> بار بار خلاف ورزیوں پر ملک بدری اور واپسی پر پابندی۔</li>
        </ul>
      </div>

      <h3>ایگزٹ/ری انٹری ویزہ اوور سٹے</h3>
      <div className="not-prose glass p-4 rounded-xl mb-6">
        <ul className="space-y-3 text-gray-300">
          <li><strong>یومیہ جرمانہ:</strong> 100 ریال فی دن میعاد ختم ہونے کے بعد۔</li>
          <li><strong>منسوخ نہ کرنے کا جرمانہ:</strong> اگر غیر استعمال شدہ ویزہ 90 دنوں میں منسوخ نہ کیا جائے تو 1,000 ریال اضافی۔</li>
        </ul>
      </div>

      <h3>وزٹ ویزہ اوور سٹے</h3>
      <div className="not-prose glass p-4 rounded-xl mb-6">
        <ul className="space-y-3 text-gray-300">
          <li><strong>یومیہ جرمانہ:</strong> 100 ریال فی دن۔</li>
          <li><strong>زیادہ سے زیادہ:</strong> 50,000 ریال تک۔</li>
          <li><strong>اضافی سزائیں:</strong> 6 ماہ تک قید، ملک بدری، 10 سال تک واپسی پر پابندی۔</li>
        </ul>
      </div>

      <h2>یہ جرمانے کن کو متاثر کرتے ہیں؟</h2>
      <ul>
        <li><strong>تارکین وطن کارکنان:</strong> تمام اقامہ ہولڈر جو تجدید میں تاخیر کرتے ہیں۔</li>
        <li><strong>زیر کفالت افراد:</strong> خاندان کے افراد جو خاندانی ویزہ کی تجدید میں تاخیر کرتے ہیں۔</li>
        <li><strong>سیاح:</strong> سیاحتی اور خاندانی وزٹ ویزہ کے حاملین۔</li>
        <li><strong>آجر (کفیل):</strong> کفیل کارکنوں کی اقامہ کی بروقت تجدید کا ذمہ دار ہے۔</li>
      </ul>

      <h2>اوور سٹے جرمانے کا حساب کیسے لگائیں</h2>
      <div className="not-prose glass p-6 rounded-xl mb-8">
        <ol className="space-y-4 text-gray-300 list-decimal list-inside">
          <li><strong>مرحلہ 1:</strong> ویزہ کی قسم کی شناخت کریں (اقامہ، ایگزٹ/ری انٹری، یا وزٹ)۔</li>
          <li><strong>مرحلہ 2:</strong> میعاد ختم ہونے کی تاریخ اور موجودہ تاریخ کا تعین کریں۔</li>
          <li><strong>مرحلہ 3:</strong> اوور سٹے دنوں کی کل تعداد گنیں۔</li>
          <li><strong>مرحلہ 4:</strong> صحیح فارمولا لگائیں (فلیٹ فیس بمقابلہ یومیہ حساب)۔</li>
          <li><strong>مرحلہ 5:</strong> پچھلی خلاف ورزیوں کی جانچ کریں۔</li>
        </ol>
      </div>

      <h3>مثالیں</h3>
      <div className="not-prose glass p-4 rounded-xl mb-4">
        <p className="text-gray-300"><strong>مثال 1:</strong> پہلی بار اقامہ 45 دن اوور سٹے۔ نتیجہ: 15,000 ریال فلیٹ جرمانہ۔</p>
      </div>
      <div className="not-prose glass p-4 rounded-xl mb-4">
        <p className="text-gray-300"><strong>مثال 2:</strong> ایگزٹ/ری انٹری 15 دن اوور سٹے۔ حساب: 15 × 100 = 1,500 ریال۔</p>
      </div>
      <div className="not-prose glass p-4 rounded-xl mb-4">
        <p className="text-gray-300"><strong>مثال 3:</strong> وزٹ ویزہ 60 دن اوور سٹے۔ حساب: 60 × 100 = 6,000 ریال۔</p>
      </div>

      <h2>خاص کیسز</h2>
      <ul>
        <li><strong>کفیل کی وجہ سے تاخیر:</strong> اگر کفیل ذمہ دار ہے تو وہ جرمانہ ادا کرے گا۔</li>
        <li><strong>گریس پیریڈ:</strong> کوئی سرکاری گریس پیریڈ نہیں۔ جرمانے اگلے دن سے شروع۔</li>
        <li><strong>خلاف ورزی کی جانچ:</strong> ابشر یا مقیم کے ذریعے چیک کریں۔</li>
      </ul>

      <h2>عام غلطیاں</h2>
      <div className="not-prose glass p-4 rounded-xl mb-6">
        <ul className="space-y-3 text-gray-300">
          <li><strong>غلطی 1:</strong> گریس پیریڈ کا غلط مفروضہ۔ کوئی گریس پیریڈ نہیں۔</li>
          <li><strong>غلطی 2:</strong> غیر استعمال شدہ ایگزٹ/ری انٹری ویزہ منسوخ نہ کرنا۔</li>
          <li><strong>غلطی 3:</strong> جرمانے کو نظر انداز کرنا، جس سے ملک بدری ہو سکتی ہے۔</li>
        </ul>
      </div>

      <h2>ادائیگی کے طریقے</h2>
      <ol>
        <li><strong>ابشر:</strong> لاگ ان کریں، جاوزات سروسز، خلاف ورزیوں کی ادائیگی۔</li>
        <li><strong>سداد:</strong> بینک ایپس جیسے الراجحی یا SNB کے ذریعے۔</li>
        <li><strong>جاوزات دفتر:</strong> ذاتی مدد کے لیے دفتر جائیں۔</li>
      </ol>

      <h2>2026 میں تازہ ترین تبدیلیاں</h2>
      <ul>
        <li><strong>ڈیجیٹل انضمام:</strong> توکلنا اور ابشر کے درمیان بہتر انضمام۔</li>
        <li><strong>سخت نفاذ:</strong> وزٹ ویزہ اوور سٹے پر سخت کارروائی۔</li>
        <li><strong>مستقبل کی اصلاحات:</strong> اقامہ نظام میں لچک پیدا کرنے پر کام۔</li>
      </ul>

      <h2>Sauditoolhub کیلکولیٹر استعمال کریں</h2>
      <p><strong>Sauditoolhub</strong> ایک <Link href="/jawazat-fine-calculator" className="text-desert-primary font-bold underline">مفت جاوزات جرمانہ کیلکولیٹر</Link> پیش کرتا ہے۔ ویزہ کی قسم منتخب کریں، تاریخیں درج کریں، اور فوری نتیجہ حاصل کریں۔</p>

      <div className="not-prose glass p-6 rounded-xl mt-6 mb-8 text-center">
        <Calculator className="h-10 w-10 text-desert-primary mx-auto mb-3" />
        <h3 className="text-white text-lg font-bold mb-2">اپنا جرمانہ ابھی لگائیں</h3>
        <p className="text-gray-400 text-sm mb-4">مفت فوری درست تخمینہ — کوئی سائن اپ نہیں</p>
        <Link href="/jawazat-fine-calculator" className="inline-flex items-center gap-2 rounded-xl bg-desert-primary px-8 py-3 text-sm font-bold text-white transition-all hover:bg-desert-primary-dim">
          <Calculator className="h-4 w-4" />
          مفت کیلکولیٹر استعمال کریں
        </Link>
      </div>

      <h2>اکثر پوچھے گئے سوالات</h2>
      {faqsUr.map((faq, i) => (
        <div key={i} className="not-prose glass p-4 rounded-xl mb-4">
          <h3 className="text-white font-semibold mb-2">{faq.question}</h3>
          <p className="text-gray-400 text-sm">{faq.answer}</p>
        </div>
      ))}

      <h2>نتیجہ</h2>
      <p>سعودی جاوزات کے اوور سٹے جرمانے اگر نظر انداز کیے جائیں تو بڑا مالی بوجھ بن سکتے ہیں۔ نظام کو سمجھنا اور اس کی تعمیل کرنا بھاری جرمانوں سے بچنے کا بہترین طریقہ ہے۔</p>
      <p>آج ہی <Link href="/jawazat-fine-calculator" className="text-desert-primary font-bold underline">Sauditoolhub کا جاوزات جرمانہ کیلکولیٹر</Link> استعمال کریں۔ مفت، تیز، اور مکمل پرائیویٹ۔</p>

      <div className="not-prose glass p-6 rounded-xl mt-8 text-center">
        <p className="text-gray-400 text-sm">آخری اپ ڈیٹ: جولائی 2026 · سعودی جاوزات قواعد اور آرٹیکل 39 پر مبنی</p>
      </div>
    </article>
  )
}

export default async function GuidePage({ params }: Props) {
  const { locale } = await params
  const isAr = locale === 'ar'
  const isUr = locale === 'ur'
  const isDefault = locale === 'en'
  const pageUrl = `${baseUrl}/${isDefault ? '' : locale + '/'}guide/jawazat-overstay-fine-calculator-saudi-arabia-2026`

  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: isAr ? 'الرئيسية' : isUr ? 'ہوم' : 'Home', url: baseUrl },
          { name: isAr ? 'أدلة' : isUr ? 'گائیڈز' : 'Guides', url: `${baseUrl}/${isDefault ? '' : locale + '/'}guides` },
          { name: isAr ? 'دليل غرامات الجوازات' : isUr ? 'جاوزات جرمانہ گائیڈ' : 'Jawazat Overstay Guide', url: pageUrl },
        ]}
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(isAr ? schemaAr : isUr ? schemaUr : articleSchemaEn) }} />
      <FAQJsonLd items={isAr ? faqsAr : isUr ? faqsUr : faqsEn} />

      <div className="mx-auto max-w-4xl px-4 py-8">
        <Link href={`/${isDefault ? '' : locale}`} className="inline-flex items-center gap-2 text-sm text-desert-primary hover:text-desert-primary-dim mb-6 transition-colors">
          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>
          {isAr ? 'العودة إلى الرئيسية' : isUr ? 'ہوم پیج پر واپس جائیں' : 'Back to Home'}
        </Link>

         {isAr ? <ArContent /> : isUr ? <UrContent /> : <EnContent />}

        <div className="mt-12 not-prose glass p-6 rounded-xl">
          <h3 className="text-white font-bold text-lg mb-4">
            {isAr ? 'روابط ذات صلة' : isUr ? 'متعلقہ لنکس' : 'Related Links'}
          </h3>
          <div className="grid gap-3 sm:grid-cols-2">
            <Link href="/jawazat-fine-calculator" className="flex items-center gap-2 text-sm text-desert-primary hover:text-desert-primary-dim transition-colors">
              <Calculator className="h-4 w-4 shrink-0" />
              {isAr ? 'حاسبة غرامات الجوازات' : isUr ? 'جاوزات جرمانہ کیلکولیٹر' : 'Jawazat Fine Calculator'}
            </Link>
            <Link href="/eosb-calculator" className="flex items-center gap-2 text-sm text-desert-primary hover:text-desert-primary-dim transition-colors">
              <Calculator className="h-4 w-4 shrink-0" />
              {isAr ? 'حاسبة مكافأة نهاية الخدمة' : isUr ? 'EOSB کیلکولیٹر' : 'EOSB Calculator'}
            </Link>
            <Link href="/family-visa-optimizer" className="flex items-center gap-2 text-sm text-desert-primary hover:text-desert-primary-dim transition-colors">
              <Calculator className="h-4 w-4 shrink-0" />
              {isAr ? 'محسن تأشيرة العائلة' : isUr ? 'فیملی ویزا آپٹیمائزر' : 'Family Visa Optimizer'}
            </Link>
            <Link href="/final-settlement-calculator" className="flex items-center gap-2 text-sm text-desert-primary hover:text-desert-primary-dim transition-colors">
              <Calculator className="h-4 w-4 shrink-0" />
              {isAr ? 'حاسبة التسوية النهائية' : isUr ? 'فائنل سیٹلمنٹ کیلکولیٹر' : 'Final Settlement Calculator'}
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}