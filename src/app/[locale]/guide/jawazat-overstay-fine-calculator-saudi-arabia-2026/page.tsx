import type { Metadata } from 'next'
import Link from 'next/link'
import { BreadcrumbJsonLd, FAQJsonLd, ArticleJsonLd } from '@/components/JsonLd'
import { Calculator } from 'lucide-react'

type Props = { params: Promise<{ locale: string }> }

const locales = ['en', 'ar', 'ur', 'tl', 'bn'] as const
const baseUrl = 'https://sauditoolhub.com'

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params
  const isDefault = locale === 'en'
  const isAr = locale === 'ar'
  const isUr = locale === 'ur'
  const isTl = locale === 'tl'
  const isBn = locale === 'bn'

  const title = isAr
    ? 'دليل غرامات الجوازات الكامل 2026 - حاسبة غرامة التأخير | Sauditoolhub'
    : isUr
    ? 'جاوزات اوور سٹے فائن کا مکمل گائیڈ 2026 - جرمانہ کیلکولیٹر | Sauditoolhub'
    : isTl
    ? 'Kumpletong Gabay sa Jawazat Overstay Fines 2026 - Saudi Arabia | Sauditoolhub'
    : isBn
    ? 'জাওয়াজাত ওভারস্টে ফাইন গাইড 2026 - সৌদি আরব | Sauditoolhub'
    : 'Jawazat Overstay Fine Calculator Saudi Arabia 2026: Complete Guide'

  const description = isAr
    ? 'احسب غرامة تأخير تجديد الإقامة والجوازات instantly. دليل كامل 2026 لغرامات التأخير بأنواعها مع حاسبة مجانية.'
    : isUr
    ? 'اپنے جاوزات اوور سٹے فائن کا فوری حساب لگائیں۔ اقامہ، ایگزٹ/ری انٹری اور وزٹ ویزہ کے جرمانوں کا 2026 کا مکمل گائیڈ۔'
    : isTl
    ? 'Kalkulahin ang iyong Jawazat overstay fine instantly. Kompletong 2026 guide sa Iqama, Exit/Re-Entry, at Visit Visa overstay penalties sa Saudi Arabia.'
    : isBn
    ? 'আপনি ওভারস্টে ফাইন ক্যালকুলেট করুন instantly. 2026 সালের সম্পূর্ণ গাইড সৌদি আরবের Iqama, Exit/Re-Entry, এবং Visit Visa ওভারস্টে জরিমের জন্য।'
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
      locale: isAr ? 'ar_SA' : isUr ? 'ur_PK' : isTl ? 'tl_PH' : isBn ? 'bn_BD' : 'en_US',
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

const schemaTl = {
  ...articleSchemaEn,
  headline: 'Kumpletong Gabay sa Jawazat Overstay Fines & Penalties sa Saudi Arabia 2026',
  description: 'Kalkulahin ang iyong Jawazat overstay fine instantly. Kompletong 2026 guide sa Iqama, Exit/Re-Entry, at Visit Visa penalties.',
}

const schemaBn = {
  ...articleSchemaEn,
  headline: 'সৌদি আরবে জাওয়াজাত ওভারস্টে ফাইন ও জরিমের সম্পূর্ণ গাইড 2026',
  description: 'আপনার ওভারস্টে ফাইন ক্যালকুলেট করুন instantly। 2026 সালের Iqama, Exit/Re-Entry, এবং Visit Visa ওভারস্টে জরিমের সম্পূর্ণ গাইড।',
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

const faqsTl = [
  { question: 'Magkano ang Iqama overstay fine sa Saudi Arabia 2026?', answer: 'Unang violation: SAR 15,000 flat. Ikalawang violation: SAR 30,000. Ikatlo at susunod: SAR 50,000 bawat isa.' },
  { question: 'May grace period ba para sa Exit/Re-Entry visa overstay?', answer: 'Wala. Ang fines (SAR 100/araw) ay nagsisimula sa araw pagkatapos ng visa expiry.' },
  { question: 'Pwede ba akong umalis ng Saudi Arabia nang hindi nagbabayad ng overstay fine?', answer: 'Hindi. I-che-check ng immigration officers ang iyong visa status bago i-stamp ang exit. Dapat bayaran ang lahat ng fines bago umalis.' },
  { question: 'Sino ang magbabayad ng overstay fine - empleyado o sponsor?', answer: 'Parehong partido ay maaaring responsable. Kung ang sponsor ang nag-delay sa renewal, siya ang magbabayad. Subalit, ang empleyado ay nananagot pa rin sa kanyang legal status.' },
  { question: 'Paano ko i-check ang aking overstay fine sa Absher?', answer: 'Mag-log in sa iyong Absher account, pumunta sa Jawazat services, piliin ang inquiry about violations.' },
  { question: 'Ano ang mangyayari kung mag-overstay ako sa family visit visa?', answer: 'SAR 100 per araw na fine, hanggang SAR 50,000. Maaaring kasama ang imprisonment, deportation, at re-entry ban hanggang 10 taon.' },
  { question: 'Pwede ba ma-waive o ma-reduce ang overstay fines?', answer: 'Sa mga espesyal na kaso at may aprubasyon mula sa mga kinauukulan, ang fines ay maaaring ma-reduce.' },
]

const faqsBn = [
  { question: 'সৌদি আরবে 2026 সালে Iqama ওভারস্টে ফাইন কত?', answer: 'প্রথম লঙ্ঘন: ১৫,০০০ SAR ফ্ল্যাট। দ্বিতীয় লঙ্ঘন: ৩০,০০০ SAR। তৃতীয় ও পরবর্তী: ৫০,০০০ SAR প্রতি লঙ্ঘন।' },
  { question: 'Exit/Re-Entry visa ওভারস্টের জন্য ক্যাচ পিরিয়ড আছে?', answer: 'না। ভিসা এক্সপাইরের পরের দিন থেকে ফাইন (১০০ SAR/দিন) শুরু হয়।' },
  { question: 'ওভারস্ট ফাইন পরিশোধ না করেই সৌদি আরব ছেড়ে যেতে পারি?', answer: 'না। ইমিগ্রেশন অফিসাররা এক্সিট স্ট্যাম্প করার আগে আপনার ভিসার স্ট্যাটাস চেক করবেন। ছেড়ে যাওয়ার আগে সব ফাইন পরিশোধ করতে হবে।' },
  { question: 'ওভারস্ট ফাইন কে পরিশোধ করবে - কর্মচারী নাকি স্পন্সর?', answer: 'দুই পক্ষই দায়ী হতে পারে। স্পন্সর রিনিউয়াল দিতে দিলে স্পন্সর ফাইন দেবে। তবে কর্মচারী তার আইনি স্ট্যাটাসের জন্য দায়ী থাকে।' },
  { question: 'Absher এ ওভারস্ট ফাইন কীভাবে চেক করব?', answer: 'Absher একাউন্টে লগ ইন করুন, Jawazat services এ যান, violations inquiry সিলেক্ট করুন।' },
  { question: 'ফ্যামিলি ভিজিট ভিসা ওভারস্ট করলে কী হবে?', answer: 'প্রতিদিন ১০০ SAR ফাইন, সর্বোচ্চ ৫০,০০০ SAR। অতিরিক্ত শাস্তিতে কারাদণ্ড, ডিপোর্টেশন, এবং ১০ বছর পর্যন্ত রিইন্ট্রি ব্যান থাকতে পারে।' },
  { question: 'ওভারস্ট ফাইন কি মাটি বা কমান possible?', answer: 'বিশেষ ক্ষেত্রে এবংcompetent authorities এর অনুমোদন সহ, ফাইন কমানোর আলোচনা করা হতে পারে।' },
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

function TlContent() {
  return (
    <article className="prose prose-invert max-w-none prose-headings:text-desert-primary prose-a:text-desert-primary prose-strong:text-white prose-li:text-gray-300">
      <h1>Kumpletong Gabay sa Jawazat Overstay Fines at Penalties sa Saudi Arabia 2026</h1>

      <div className="not-prose glass p-6 rounded-xl mb-8">
        <p className="text-gray-300 text-lg leading-relaxed">
          Stressed tungkol sa expired na Iqama o visa mo? Hindi ka nag-iisa. Libu-libong expats sa Saudi Arabia ang nahihirapang maintindihan ang overstay fines at ang iba't ibang uri ng parusa. Kung ikaw ay may Iqama, Exit/Re-Entry visa, o Visit visa, ang Jawazat fines ay maaaring mabilis na umabot sa libu-libong Riyals.
        </p>
        <p className="text-gray-300 text-lg leading-relaxed mt-4">
          Dito papasok ang{' '}
          <Link href="/jawazat-fine-calculator" className="text-desert-primary font-bold underline">
            Sauditoolhub Jawazat Fine Calculator
          </Link>{' '}
          — aming libreng tool para matulungan kang matantiya ang eksaktong halaga sa ilang segundo. Sa kumpletong gabay na ito, ipapaliwanag namin ang lahat ng kailangan mong malaman tungkol sa overstay fines sa Saudi Arabia para sa 2026.
        </p>
        <div className="mt-4">
          <Link href="/jawazat-fine-calculator" className="inline-flex items-center gap-2 rounded-xl bg-desert-primary px-6 py-3 text-sm font-bold text-white transition-all hover:bg-desert-primary-dim">
            <Calculator className="h-4 w-4" />
            Kalkulahin ang Iyong Fine Ngayon — Libre
          </Link>
        </div>
      </div>

      <h2>Ano ang Jawazat Overstay Fines?</h2>
      <p>Ang Jawazat overstay fines ay mga financial penalty na ipinapataw ng General Directorate of Passports ng Saudi Arabia sa mga indibidwal na lumalabag sa residency at visa regulations. Ang mga fines na ito ay nakabatay sa Article 39 ng Saudi Residency System at naglalayong tiyakin ang pagsunod sa immigration rules para sa lahat ng residente at bisita.</p>

      <h2>Detalyadong Overstay Fine Breakdown (2026 Rules)</h2>

      <h3>Iqama Overstay Fines</h3>
      <div className="not-prose glass p-4 rounded-xl mb-6">
        <ul className="space-y-3 text-gray-300">
          <li><strong className="text-red-400">Unang paglabag:</strong> Flat fine na SAR 15,000.</li>
          <li><strong className="text-red-400">Ikalawang paglabag:</strong> Flat fine na SAR 30,000.</li>
          <li><strong className="text-red-400">Ikatlo at sumunod na paglabag:</strong> Flat fine na SAR 50,000 bawat paglabag.</li>
          <li><strong>Maximum:</strong> Hanggang SAR 100,000 bawat paglabag sa ilang kaso.</li>
          <li><strong>Deportation:</strong> Ang paulit-ulit na paglabag ay maaaring humantong sa deportation at re-entry ban.</li>
        </ul>
      </div>

      <h3>Exit/Re-Entry Visa Overstay Fines</h3>
      <div className="not-prose glass p-4 rounded-xl mb-6">
        <ul className="space-y-3 text-gray-300">
          <li><strong>Araw-araw na multa:</strong> SAR 100 para sa bawat araw pagkatapos ng visa expiry.</li>
          <li><strong>Non-cancellation fine:</strong> Kung ang hindi nagamit na visa ay hindi nakansela sa loob ng 90 araw, may karagdagang SAR 1,000 fine.</li>
          <li>Ang mga multa ay nagsisimula sa araw pagkatapos ng visa expiry.</li>
        </ul>
      </div>

      <h3>Visit Visa Overstay Fines</h3>
      <div className="not-prose glass p-4 rounded-xl mb-6">
        <ul className="space-y-3 text-gray-300">
          <li><strong>Araw-araw na multa:</strong> SAR 100 bawat araw mula sa expiry date.</li>
          <li><strong>Maximum na multa:</strong> Hanggang SAR 50,000.</li>
          <li><strong>Mga karagdagang parusa:</strong> Maaaring kabilang ang pagkabilanggo hanggang 6 na buwan, deportation, at re-entry ban hanggang 10 taon.</li>
        </ul>
      </div>

      <h2>Sino ang Apektado ng mga Fine na Ito?</h2>
      <ul>
        <li><strong>Expat workers:</strong> Lahat ng may hawak ng Iqama na nagpapabaya sa pag-renew ng kanilang residency.</li>
        <li><strong>Mga dependent:</strong> Mga miyembro ng pamilya na nagpapabaya sa pag-renew ng kanilang mga visa.</li>
        <li><strong>Mga turista at may visa:</strong> Mga may hawak ng tourist at family visit visa.</li>
        <li><strong>Employers (sponsors):</strong> Ang mga sponsor ay responsable para sa napapanahong pag-renew ng Iqama.</li>
      </ul>

      <h2>Paano Kalkulahin ang Overstay Fines - Step by Step</h2>
      <div className="not-prose glass p-6 rounded-xl mb-8">
        <ol className="space-y-4 text-gray-300 list-decimal list-inside">
          <li><strong>Step 1:</strong> Tukuyin ang uri ng iyong visa: Iqama, Exit/Re-Entry, o Visit visa.</li>
          <li><strong>Step 2:</strong> Tandaan ang expiry date ng iyong visa at ang kasalukuyang calculation date.</li>
          <li><strong>Step 3:</strong> Bilangin ang kabuuang bilang ng overstay days.</li>
          <li><strong>Step 4:</strong> Ilapat ang tamang formula: flat penalty vs daily calculation.</li>
          <li><strong>Step 5:</strong> Suriin ang mga nakaraang paglabag (cumulative fines).</li>
        </ol>
      </div>

      <h3>Mga Halimbawa ng Pagkalkula</h3>
      <div className="not-prose glass p-4 rounded-xl mb-4">
        <p className="text-gray-300"><strong>Halimbawa 1 - Iqama:</strong> Isang expat na nagpabaya sa pag-renew ng Iqama sa unang pagkakataon. Unang paglabag: SAR 15,000 flat fine.</p>
      </div>
      <div className="not-prose glass p-4 rounded-xl mb-4">
        <p className="text-gray-300"><strong>Halimbawa 2 - Exit/Re-Entry:</strong> Isang dependent na nag-overstay ng 15 araw. Pagkalkula: 15 x SAR 100 = SAR 1,500.</p>
      </div>
      <div className="not-prose glass p-4 rounded-xl mb-4">
        <p className="text-gray-300"><strong>Halimbawa 3 - Visit:</strong> Isang bisita na nag-overstay ng 60 araw. Pagkalkula: 60 x SAR 100 = SAR 6,000. (naka-cap sa SAR 50,000).</p>
      </div>

      <h2>Mga Espesyal na Kaso at Pagbubukod</h2>
      <ul>
        <li><strong>Pagkaantala na dulot ng sponsor:</strong> Kung ang sponsor ang responsable sa pagkaantala, ang sponsor ang magbabayad. Gayunpaman, ang expat ay nananatiling responsable para sa kanilang legal na katayuan.</li>
        <li><strong>Grace period:</strong> Walang opisyal na grace period. Ang mga multa ay nagsisimula sa araw pagkatapos ng expiry.</li>
        <li><strong>Mga pampublikong pista opisyal:</strong> Ang mga opisyal na holiday ay hindi nakakaapekto sa pagkalkula ng multa. Mag-renew bago ang expiry.</li>
        <li><strong>Pagsusuri ng mga paglabag:</strong> Maaari mong suriin sa pamamagitan ng Absher o Muqeem portal.</li>
      </ul>

      <h2>Mga Karaniwang Pagkakamali Kapag Nakikitungo sa mga Fine</h2>
      <div className="not-prose glass p-4 rounded-xl mb-6">
        <ul className="space-y-3 text-gray-300">
          <li><strong>Pagkakamali 1:</strong> Paniniwalang may grace period pagkatapos ng visa expiry. Walang opisyal na grace period.</li>
          <li><strong>Pagkakamali 2:</strong> Hindi pagkansela ng hindi nagamit na Exit/Re-Entry visa sa loob ng 90 araw.</li>
          <li><strong>Pagkakamali 3:</strong> Pagpapabaya sa mga multa, na humahantong sa deportation (huroob) at re-entry bans.</li>
        </ul>
      </div>

      <h2>Paano Magbayad ng Overstay Fines</h2>
      <ol>
        <li><strong>Sa pamamagitan ng Absher:</strong> Mag-log in, pumunta sa Jawazat services, piliin ang pay violations.</li>
        <li><strong>Sa pamamagitan ng SADAD:</strong> Magbayad sa pamamagitan ng bank apps tulad ng Al Rajhi o SNB gamit ang invoice number.</li>
        <li><strong>Sa mga Jawazat offices:</strong> Bisitahin ang iyong lokal na Jawazat office para sa personal na tulong.</li>
      </ol>

      <h2>Pinakabagong Update para sa 2026</h2>
      <ul>
        <li><strong>Digital integration:</strong> Pinahusay na integration sa pagitan ng Tawakkalna at Absher para sa pagsubaybay ng paglabag.</li>
        <li><strong>Mas mahigpit na pagpapatupad:</strong> Mas mahigpit na aplikasyon ng mga multa para sa visit visa overstays.</li>
      </ul>

      <h2>Gamitin ang Sauditoolhub Calculator</h2>
      <p>Nag-aalok ang Sauditoolhub ng libreng{' '}
        <Link href="/jawazat-fine-calculator" className="text-desert-primary font-bold underline">
          Jawazat Fine Calculator
        </Link>{' '}
        na tumutulong sa iyo na matantiya ang eksaktong halaga sa ilang segundo. Piliin ang iyong uri ng visa, ilagay ang mga petsa, at makakuha ng agarang resulta.
      </p>

      <div className="not-prose glass p-6 rounded-xl mt-8 text-center">
        <Calculator className="h-10 w-10 text-desert-primary mx-auto mb-3" />
        <h3 className="text-white text-lg font-bold mb-2">Kalkulahin ang Iyong Fine Ngayon</h3>
        <p className="text-gray-400 text-sm mb-4">Libreng instant estimate — walang registration na kinakailangan</p>
        <Link href="/jawazat-fine-calculator" className="inline-flex items-center gap-2 rounded-xl bg-desert-primary px-8 py-3 text-sm font-bold text-white transition-all hover:bg-desert-primary-dim">
          <Calculator className="h-4 w-4" />
          Gamitin ang Libreng Calculator
        </Link>
      </div>

      <h2>Mga Madalas Itanong</h2>
      {faqsTl.map((faq, i) => (
        <div key={i} className="not-prose glass p-4 rounded-xl mb-4">
          <h3 className="text-white font-semibold mb-2">{faq.question}</h3>
          <p className="text-gray-400 text-sm">{faq.answer}</p>
        </div>
      ))}

      <h2>Konklusyon</h2>
      <p>Ang Jawazat overstay fines sa Saudi Arabia ay maaaring maging malaking pinansiyal na pasanin kung hindi papansinin. Kung ikaw ay expat, employer, o bisita, ang pag-unawa sa sistema at pagsunod dito ay ang pinakamahusay na paraan upang maiwasan ang mabibigat na multa at legal na parusa.</p>
      <p>Huwag hulaan ang halaga ng iyong multa. Gamitin ang{' '}
        <Link href="/jawazat-fine-calculator" className="text-desert-primary font-bold underline">
          Sauditoolhub Jawazat Fine Calculator
        </Link>{' '}
        ngayon para sa tumpak na instant estimate. Libre, mabilis, at ganap na pribado.
      </p>

      <div className="not-prose glass p-6 rounded-xl mt-8 text-center">
        <p className="text-gray-400 text-sm">Huling na-update: Hulyo 2026 · Batay sa Saudi Jawazat regulations at Article 39 ng Residency System</p>
      </div>
    </article>
  )
}

function BnContent() {
  return (
    <article className="prose prose-invert max-w-none prose-headings:text-desert-primary prose-a:text-desert-primary prose-strong:text-white prose-li:text-gray-300">
      <h1>সৌদি আরবে জাওয়াজাত ওভারস্টে ফাইন ও জরিমানের সম্পূর্ণ গাইড 2026</h1>

      <div className="not-prose glass p-6 rounded-xl mb-8">
        <p className="text-gray-300 text-lg leading-relaxed">
          আপনার মেয়াদোত্তীর্ণ ইকামা বা ভিসা নিয়ে চিন্তিত? আপনি একা নন। সৌদি আরবের হাজার হাজার প্রবাসী ওভারস্টে ফাইন এবং বিভিন্ন ধরনের জরিমানা বুঝতে সংগ্রাম করে। আপনি ইকামা, এক্সিট/রি-এন্ট্রি ভিসা, বা ভিজিট ভিসা যাই ধারণ করুন না কেন, জাওয়াজাত জরিমানা দ্রুত হাজার হাজার রিয়ালে পৌঁছাতে পারে।
        </p>
        <p className="text-gray-300 text-lg leading-relaxed mt-4">
          এখানেই{' '}
          <Link href="/jawazat-fine-calculator" className="text-desert-primary font-bold underline">
            Sauditoolhub জাওয়াজাত ফাইন ক্যালকুলেটর
          </Link>{' '}
          কাজ করে। আমরা এই বিনামূল্যের টুল তৈরি করেছি যাতে আপনি সেকেন্ডের মধ্যে সঠিক পরিমাণ অনুমান করতে পারেন। এই সম্পূর্ণ গাইডে, আমরা 2026 সালের জন্য সৌদি আরবে ওভারস্টে ফাইন সম্পর্কে আপনার যা জানা দরকার তা ব্যাখ্যা করি।
        </p>
        <div className="mt-4">
          <Link href="/jawazat-fine-calculator" className="inline-flex items-center gap-2 rounded-xl bg-desert-primary px-6 py-3 text-sm font-bold text-white transition-all hover:bg-desert-primary-dim">
            <Calculator className="h-4 w-4" />
            এখনই আপনার জরিমানা গণনা করুন — বিনামূল্যে
          </Link>
        </div>
      </div>

      <h2>জাওয়াজাত ওভারস্টে ফাইন কী?</h2>
      <p>জাওয়াজাত ওভারস্টে ফাইন হল আর্থিক জরিমানা যা সৌদি আরবের জেনারেল ডিরেক্টরেট অব পাসপোর্টস (জাওয়াজাত) দ্বারা বসবাস ও ভিসা নিয়ম লঙ্ঘনকারী ব্যক্তিদের উপর আরোপ করা হয়। এই জরিমানাগুলি সৌদি রেসিডেন্সি সিস্টেমের আর্টিকেল 39-এর উপর ভিত্তি করে তৈরি।</p>

      <h2>বিস্তারিত ওভারস্টে ফাইন ব্রেকডাউন (2026 নিয়ম)</h2>

      <h3>ইকামা ওভারস্টে জরিমানা</h3>
      <div className="not-prose glass p-4 rounded-xl mb-6">
        <ul className="space-y-3 text-gray-300">
          <li><strong className="text-red-400">প্রথম লঙ্ঘন:</strong> ফ্ল্যাট জরিমানা SAR ১৫,০০০।</li>
          <li><strong className="text-red-400">দ্বিতীয় লঙ্ঘন:</strong> ফ্ল্যাট জরিমানা SAR ৩০,০০০।</li>
          <li><strong className="text-red-400">তৃতীয় ও পরবর্তী লঙ্ঘন:</strong> ফ্ল্যাট জরিমানা SAR ৫০,০০০ প্রতি লঙ্ঘন।</li>
          <li><strong>সর্বোচ্চ:</strong> কিছু ক্ষেত্রে প্রতি লঙ্ঘনে SAR ১,০০,০০০ পর্যন্ত।</li>
          <li><strong>নির্বাসন:</strong> বারবার লঙ্ঘনের ফলে নির্বাসন ও পুনরায় প্রবেশে নিষেধাজ্ঞা হতে পারে।</li>
        </ul>
      </div>

      <h3>এক্সিট/রি-এন্ট্রি ভিসা ওভারস্টে জরিমানা</h3>
      <div className="not-prose glass p-4 rounded-xl mb-6">
        <ul className="space-y-3 text-gray-300">
          <li><strong>দৈনিক জরিমানা:</strong> ভিসার মেয়াদ শেষ হওয়ার পর প্রতিদিন SAR ১০০।</li>
          <li><strong>অবাতিল জরিমানা:</strong> যদি একটি অব্যবহৃত ভিসা ৯০ দিনের মধ্যে বাতিল না করা হয়, অতিরিক্ত SAR ১,০০০ জরিমানা প্রযোজ্য।</li>
          <li>ভিসার মেয়াদ শেষ হওয়ার পরের দিন থেকে জরিমানা গণনা শুরু হয়।</li>
        </ul>
      </div>

      <h3>ভিজিট ভিসা ওভারস্টে জরিমানা</h3>
      <div className="not-prose glass p-4 rounded-xl mb-6">
        <ul className="space-y-3 text-gray-300">
          <li><strong>দৈনিক জরিমানা:</strong> মেয়াদ শেষ হওয়ার তারিখ থেকে প্রতিদিন SAR ১০০।</li>
          <li><strong>সর্বোচ্চ জরিমানা:</strong> SAR ৫০,০০০ পর্যন্ত।</li>
          <li><strong>অতিরিক্ত শাস্তি:</strong> ৬ মাস পর্যন্ত কারাদণ্ড, নির্বাসন, এবং ১০ বছর পর্যন্ত পুনরায় প্রবেশে নিষেধাজ্ঞা অন্তর্ভুক্ত থাকতে পারে।</li>
        </ul>
      </div>

      <h2>কে এই জরিমানা দ্বারা প্রভাবিত?</h2>
      <ul>
        <li><strong>প্রবাসী কর্মী:</strong> সমস্ত ইকামা ধারক যারা তাদের রেসিডেন্সি নবায়নে দেরি করে।</li>
        <li><strong>নির্ভরশীল:</strong> পরিবারের সদস্য যারা তাদের ভিসা নবায়নে দেরি করে।</li>
        <li><strong>পর্যটক ও ভিসাধারী:</strong> পর্যটক ও পারিবারিক ভিজিট ভিসাধারীরা।</li>
        <li><strong>নিয়োগকর্তা (স্পন্সর):</strong> স্পন্সররা সময়মত ইকামা নবায়নের জন্য দায়ী।</li>
      </ul>

      <h2>কীভাবে ওভারস্টে জরিমানা গণনা করবেন - ধাপে ধাপে</h2>
      <div className="not-prose glass p-6 rounded-xl mb-8">
        <ol className="space-y-4 text-gray-300 list-decimal list-inside">
          <li><strong>ধাপ ১:</strong> আপনার ভিসার ধরন চিহ্নিত করুন: ইকামা, এক্সিট/রি-এন্ট্রি, বা ভিজিট ভিসা।</li>
          <li><strong>ধাপ ২:</strong> আপনার ভিসার মেয়াদ শেষ হওয়ার তারিখ এবং বর্তমান গণনার তারিখ নোট করুন।</li>
          <li><strong>ধাপ ৩:</strong> মোট ওভারস্টে দিনের সংখ্যা গণনা করুন।</li>
          <li><strong>ধাপ ৪:</strong> সঠিক সূত্র প্রয়োগ করুন: ফ্ল্যাট পেনাল্টি বনাম দৈনিক গণনা।</li>
          <li><strong>ধাপ ৫:</strong> পূর্ববর্তী লঙ্ঘনের জন্য পরীক্ষা করুন (ক্রমবর্ধমান জরিমানা)।</li>
        </ol>
      </div>

      <h3>বাস্তব গণনার উদাহরণ</h3>
      <div className="not-prose glass p-4 rounded-xl mb-4">
        <p className="text-gray-300"><strong>উদাহরণ ১ - ইকামা:</strong> একজন প্রবাসী প্রথমবার ইকামা নবায়নে দেরি করছেন। প্রথম লঙ্ঘন: SAR ১৫,০০০ ফ্ল্যাট জরিমানা।</p>
      </div>
      <div className="not-prose glass p-4 rounded-xl mb-4">
        <p className="text-gray-300"><strong>উদাহরণ ২ - এক্সিট/রি-এন্ট্রি:</strong> একজন নির্ভরশীল ১৫ দিন ওভারস্টে করেছেন। গণনা: ১৫ x SAR ১০০ = SAR ১,৫০০।</p>
      </div>
      <div className="not-prose glass p-4 rounded-xl mb-4">
        <p className="text-gray-300"><strong>উদাহরণ ৩ - ভিজিট:</strong> একজন দর্শনার্থী ৬০ দিন ওভারস্টে করেছেন। গণনা: ৬০ x SAR ১০০ = SAR ৬,০০০। (সর্বোচ্চ SAR ৫০,০০০)।</p>
      </div>

      <h2>বিশেষ ক্ষেত্রে এবং ব্যতিক্রম</h2>
      <ul>
        <li><strong>স্পন্সর-ঘটিত বিলম্ব:</strong> যদি স্পন্সর বিলম্বের জন্য দায়ী হয়, স্পন্সর জরিমানা পরিশোধ করবেন। তবে, প্রবাসী তাদের আইনি অবস্থার জন্য দায়ী থাকে।</li>
        <li><strong>গ্রেস পিরিয়ড:</strong> কোন অফিসিয়াল গ্রেস পিরিয়ড নেই। মেয়াদ শেষ হওয়ার পরের দিন থেকে জরিমানা শুরু হয়।</li>
        <li><strong>পাবলিক ছুটি:</strong> অফিসিয়াল ছুটির দিন জরিমানা গণনাকে প্রভাবিত করে না। মেয়াদ শেষ হওয়ার আগে নবায়ন করুন।</li>
      </ul>

      <h2>জরিমানা মোকাবেলায় সাধারণ ভুল</h2>
      <div className="not-prose glass p-4 rounded-xl mb-6">
        <ul className="space-y-3 text-gray-300">
          <li><strong>ভুল ১:</strong> ভিসার মেয়াদ শেষ হওয়ার পর গ্রেস পিরিয়ড আছে বলে বিশ্বাস করা। কোন অফিসিয়াল গ্রেস পিরিয়ড নেই।</li>
          <li><strong>ভুল ২:</strong> ৯০ দিনের মধ্যে অব্যবহৃত এক্সিট/রি-এন্ট্রি ভিসা বাতিল না করা।</li>
          <li><strong>ভুল ৩:</strong> জরিমানা উপেক্ষা করা, যা নির্বাসন ও পুনরায় প্রবেশে নিষেধাজ্ঞার দিকে নিয়ে যেতে পারে।</li>
        </ul>
      </div>

      <h2>কীভাবে ওভারস্টে জরিমানা পরিশোধ করবেন</h2>
      <ol>
        <li><strong>Absher এর মাধ্যমে:</strong> লগ ইন করুন, জাওয়াজাত সার্ভিসে যান, পে ভায়োলেশনস নির্বাচন করুন।</li>
        <li><strong>SADAD এর মাধ্যমে:</strong> ইনভয়েস নম্বর ব্যবহার করে আল রাজিহি বা SNB-এর মতো ব্যাংক অ্যাপের মাধ্যমে পরিশোধ করুন।</li>
        <li><strong>জাওয়াজাত অফিসে:</strong> ব্যক্তিগত সহায়তার জন্য স্থানীয় জাওয়াজাত অফিসে যান।</li>
      </ol>

      <h2>2026-এর জন্য সর্বশেষ আপডেট</h2>
      <ul>
        <li><strong>ডিজিটাল ইন্টিগ্রেশন:</strong> লঙ্ঘন ট্র্যাকিংয়ের জন্য তাওয়াক্কালনা এবং আবশিরের মধ্যে উন্নত ইন্টিগ্রেশন।</li>
        <li><strong>কঠোর প্রয়োগ:</strong> ভিজিট ভিসা ওভারস্টের জন্য জরিমানার কঠোর প্রয়োগ।</li>
      </ul>

      <h2>Sauditoolhub ক্যালকুলেটর ব্যবহার করুন</h2>
      <p>Sauditoolhub একটি বিনামূল্যের{' '}
        <Link href="/jawazat-fine-calculator" className="text-desert-primary font-bold underline">
          জাওয়াজাত ফাইন ক্যালকুলেটর
        </Link>{' '}
        অফার করে যা আপনাকে সেকেন্ডের মধ্যে সঠিক পরিমাণ অনুমান করতে সাহায্য করে। আপনার ভিসার ধরন নির্বাচন করুন, তারিখ লিখুন, এবং তাৎক্ষণিক ফলাফল পান।
      </p>

      <div className="not-prose glass p-6 rounded-xl mt-8 text-center">
        <Calculator className="h-10 w-10 text-desert-primary mx-auto mb-3" />
        <h3 className="text-white text-lg font-bold mb-2">এখনই আপনার জরিমানা গণনা করুন</h3>
        <p className="text-gray-400 text-sm mb-4">বিনামূল্যে তাৎক্ষণিক অনুমান — কোন রেজিস্ট্রেশনের প্রয়োজন নেই</p>
        <Link href="/jawazat-fine-calculator" className="inline-flex items-center gap-2 rounded-xl bg-desert-primary px-8 py-3 text-sm font-bold text-white transition-all hover:bg-desert-primary-dim">
          <Calculator className="h-4 w-4" />
          বিনামূল্যের ক্যালকুলেটর ব্যবহার করুন
        </Link>
      </div>

      <h2>সচরাচর জিজ্ঞাসিত প্রশ্ন</h2>
      {faqsBn.map((faq, i) => (
        <div key={i} className="not-prose glass p-4 rounded-xl mb-4">
          <h3 className="text-white font-semibold mb-2">{faq.question}</h3>
          <p className="text-gray-400 text-sm">{faq.answer}</p>
        </div>
      ))}

      <h2>উপসংহার</h2>
      <p>সৌদি আরবে জাওয়াজাত ওভারস্টে জরিমানা উপেক্ষা করলে বড় আর্থিক বোঝা হয়ে দাঁড়াতে পারে। আপনি প্রবাসী, নিয়োগকর্তা বা দর্শনার্থী যাই হোন না কেন, সিস্টেম বোঝা এবং মেনে চলাই ভারী জরিমানা ও আইনি শাস্তি এড়ানোর সর্বোত্তম উপায়।</p>
      <p>আপনার জরিমানার পরিমাণ অনুমান করবেন না। আজই{' '}
        <Link href="/jawazat-fine-calculator" className="text-desert-primary font-bold underline">
          Sauditoolhub জাওয়াজাত ফাইন ক্যালকুলেটর
        </Link>{' '}
        ব্যবহার করুন সঠিক তাৎক্ষণিক অনুমানের জন্য। বিনামূল্যে, দ্রুত, এবং সম্পূর্ণ ব্যক্তিগত।
      </p>

      <div className="not-prose glass p-6 rounded-xl mt-8 text-center">
        <p className="text-gray-400 text-sm">সর্বশেষ আপডেট: জুলাই ২০২৬ · সৌদি জাওয়াজাত নিয়ম এবং রেসিডেন্সি সিস্টেমের আর্টিকেল ৩৯-এর ভিত্তিতে</p>
      </div>
    </article>
  )
}

export default async function GuidePage({ params }: Props) {
  const { locale } = await params
  const isAr = locale === 'ar'
  const isUr = locale === 'ur'
  const isTl = locale === 'tl'
  const isBn = locale === 'bn'
  const isDefault = locale === 'en'
  const pageUrl = `${baseUrl}/${isDefault ? '' : locale + '/'}guide/jawazat-overstay-fine-calculator-saudi-arabia-2026`

  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: isAr ? 'الرئيسية' : isUr ? 'ہوم' : isTl ? 'Bahay' : isBn ? 'হোম' : 'Home', url: baseUrl },
          { name: isAr ? 'أدلة' : isUr ? 'گائیڈز' : isTl ? 'Mga Gabay' : isBn ? 'গাইড' : 'Guides', url: `${baseUrl}/${isDefault ? '' : locale + '/'}guides` },
          { name: isAr ? 'دليل غرامات الجوازات' : isUr ? 'جاوزات جرمانہ گائیڈ' : isTl ? 'Gabay sa Jawazat Fine' : isBn ? 'জাওয়াজাত জরিমানা গাইড' : 'Jawazat Overstay Guide', url: pageUrl },
        ]}
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(isAr ? schemaAr : isUr ? schemaUr : isTl ? schemaTl : isBn ? schemaBn : articleSchemaEn) }} />
      <FAQJsonLd items={isAr ? faqsAr : isUr ? faqsUr : isTl ? faqsTl : isBn ? faqsBn : faqsEn} />

      <div className="mx-auto max-w-4xl px-4 py-8">
        <Link href={`/${isDefault ? '' : locale}`} className="inline-flex items-center gap-2 text-sm text-desert-primary hover:text-desert-primary-dim mb-6 transition-colors">
          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>
          {isAr ? 'العودة إلى الرئيسية' : isUr ? 'ہوم پیج پر واپس جائیں' : isTl ? 'Bumalik sa Bahay' : isBn ? 'হোম পেজে ফিরে যান' : 'Back to Home'}
        </Link>

         {isAr ? <ArContent /> : isUr ? <UrContent /> : isTl ? <TlContent /> : isBn ? <BnContent /> : <EnContent />}

        <div className="mt-12 not-prose glass p-6 rounded-xl">
          <h3 className="text-white font-bold text-lg mb-4">
            {isAr ? 'روابط ذات صلة' : isUr ? 'متعلقہ لنکس' : isTl ? 'Mga Kaugnay na Link' : isBn ? 'সম্পর্কিত লিংক' : 'Related Links'}
          </h3>
          <div className="grid gap-3 sm:grid-cols-2">
            <Link href="/jawazat-fine-calculator" className="flex items-center gap-2 text-sm text-desert-primary hover:text-desert-primary-dim transition-colors">
              <Calculator className="h-4 w-4 shrink-0" />
              {isAr ? 'حاسبة غرامات الجوازات' : isUr ? 'جاوزات جرمانہ کیلکولیٹر' : isTl ? 'Jawazat Fine Calculator' : isBn ? 'জাওয়াজাত ফাইন ক্যালকুলেটর' : 'Jawazat Fine Calculator'}
            </Link>
            <Link href="/eosb-calculator" className="flex items-center gap-2 text-sm text-desert-primary hover:text-desert-primary-dim transition-colors">
              <Calculator className="h-4 w-4 shrink-0" />
              {isAr ? 'حاسبة مكافأة نهاية الخدمة' : isUr ? 'EOSB کیلکولیٹر' : isTl ? 'EOSB Calculator' : isBn ? 'EOSB ক্যালকুলেটর' : 'EOSB Calculator'}
            </Link>
            <Link href="/family-visa-optimizer" className="flex items-center gap-2 text-sm text-desert-primary hover:text-desert-primary-dim transition-colors">
              <Calculator className="h-4 w-4 shrink-0" />
              {isAr ? 'محسن تأشيرة العائلة' : isUr ? 'فیملی ویزا آپٹیمائزر' : isTl ? 'Family Visa Optimizer' : isBn ? 'ফ্যামিলি ভিসা অপটিমাইজার' : 'Family Visa Optimizer'}
            </Link>
            <Link href="/final-settlement-calculator" className="flex items-center gap-2 text-sm text-desert-primary hover:text-desert-primary-dim transition-colors">
              <Calculator className="h-4 w-4 shrink-0" />
              {isAr ? 'حاسبة التسوية النهائية' : isUr ? 'فائنل سیٹلمنٹ کیلکولیٹر' : isTl ? 'Final Settlement Calculator' : isBn ? 'চূড়ান্ত নিষ্পত্তি ক্যালকুলেটর' : 'Final Settlement Calculator'}
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}