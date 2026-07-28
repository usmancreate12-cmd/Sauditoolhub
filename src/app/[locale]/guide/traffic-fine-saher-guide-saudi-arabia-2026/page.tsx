import type { Metadata } from 'next'
import Link from 'next/link'
import { TrafficCone, Car, Gavel, FileText, Shield, AlertTriangle, CheckCircle, Search, CreditCard, DollarSign, Users, Briefcase, Percent, Clock, Award, ArrowUpRight, BookOpen, Smartphone, Globe, Info, MapPin, BadgeAlert, Camera, Ban, Zap, Eye, ShieldAlert } from 'lucide-react'

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
  const isTl = locale === 'tl'
  const isBn = locale === 'bn'

  const title = isAr
    ? 'الدليل الكامل للمخالفات المرورية ونظام ساهر في السعودية 2026 | Sauditoolhub'
    : isUr
    ? 'سعودی عرب میں ٹریفک فائن اور ساہر کیمرہ کے بارے میں مکمل گائیڈ 2026 | Sauditoolhub'
    : isTl
    ? 'Kumpletong Gabay sa Traffic Violations at Saher Fines sa Saudi Arabia 2026 | Sauditoolhub'
    : isBn
    ? 'সৌদি আরবে ট্রাফিক জরিমানা ও সেহের ক্যামেরার সম্পূর্ণ গাইড ২০২৬ | Sauditoolhub'
    : 'The Complete Guide to Traffic Violations & Saher Fines in Saudi Arabia 2026 | Sauditoolhub'

  const description = isAr
    ? 'دليل كامل للمخالفات المرورية وغرامات ساهر في السعودية 2026. تعرف على قائمة المخالفات الجديدة، نظام النقاط السوداء، كيفية الاعتراض على المخالفة، وخطوات السداد عبر أبشر.'
    : isUr
    ? 'سعودی عرب میں ٹریفک فائن اور ساہر کیمرہ کے بارے میں مکمل گائیڈ 2026۔ جانیے نئے جرمانوں کی فہرست، بلیک پوائنٹ سسٹم، اعتراض کرنے کا طریقہ، اور أبشر کے ذریعے ادائیگی۔'
    : isTl
    ? 'Kumpletong gabay sa traffic violations at Saher fines sa Saudi Arabia 2026. Alamin ang listahan ng mga bagong multa, black points system, paano tumutol sa violation, at pagbabayad sa Absher.'
    : isBn
    ? 'সৌদি আরবে ট্রাফিক জরিমানা ও সেহের ফাইন সম্পর্কে সম্পূর্ণ গাইড ২০২৬। জানুন নতুন জরিমানার তালিকা, ব্ল্যাক পয়েন্ট সিস্টেম, আপত্তি করার প্রক্রিয়া এবং আবশেরে পরিশোধ।'
    : 'Complete guide to traffic violations and Saher fines in Saudi Arabia 2026. Learn the complete fine list, black points system, how to object to a ticket, and step-by-step payment via Absher, Najm, and SADAD.'

  return {
    title,
    description,
    alternates: {
      canonical: isDefault ? '/guide/traffic-fine-saher-guide-saudi-arabia-2026' : `/${locale}/guide/traffic-fine-saher-guide-saudi-arabia-2026`,
      languages: {
        en: '/guide/traffic-fine-saher-guide-saudi-arabia-2026',
        ar: '/ar/guide/traffic-fine-saher-guide-saudi-arabia-2026',
        ur: '/ur/guide/traffic-fine-saher-guide-saudi-arabia-2026',
        tl: '/tl/guide/traffic-fine-saher-guide-saudi-arabia-2026',
        bn: '/bn/guide/traffic-fine-saher-guide-saudi-arabia-2026',
      },
    },
    openGraph: {
      title,
      description,
      url: isDefault ? '/guide/traffic-fine-saher-guide-saudi-arabia-2026' : `/${locale}/guide/traffic-fine-saher-guide-saudi-arabia-2026`,
      siteName: 'Sauditoolhub',
      locale: isAr ? 'ar_SA' : isUr ? 'ur_PK' : isTl ? 'tl_PH' : isBn ? 'bn_BD' : 'en_US',
      type: 'article',
      publishedTime: '2026-04-05',
      modifiedTime: '2026-07-01',
    },
    twitter: { card: 'summary_large_image', title, description },
    robots: { index: true, follow: true },
  }
}

const articleSchemaEn = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'The Complete Guide to Traffic Violations & Saher Fines in Saudi Arabia 2026',
  description: 'Complete guide to traffic violations and Saher fines in Saudi Arabia. Learn about all fine amounts, black points, how to check and pay via Absher, the objection process, and penalty impacts on Iqama renewal and travel.',
  author: { '@type': 'Person', name: 'Sauditoolhub Team' },
  publisher: { '@type': 'Organization', name: 'Sauditoolhub', logo: { '@type': 'ImageObject', url: '/logo.png' } },
  datePublished: '2026-04-05',
  dateModified: '2026-07-01',
}

const schemaAr = { ...articleSchemaEn, headline: 'الدليل الكامل للمخالفات المرورية ونظام ساهر في السعودية 2026', description: 'دليل كامل للمخالفات المرورية وغرامات ساهر في السعودية. تعرف على قائمة المخالفات الجديدة، نظام النقاط السوداء، طريقة السداد والاعتراض عبر أبشر، وتأثير الغرامات على تجديد الإقامة والسفر.' }
const schemaUr = { ...articleSchemaEn, headline: 'سعودی عرب میں ٹریفک فائن اور ساہر کیمرہ کے بارے میں مکمل گائیڈ 2026', description: 'سعودی عرب میں ٹریفک فائن اور ساہر کیمرہ کے بارے میں مکمل گائیڈ۔ جانیے جرمانوں کی فہرست، بلیک پوائنٹ سسٹم، أبشر کے ذریعے ادائیگی اور اعتراض کا طریقہ۔' }
const schemaTl = { ...articleSchemaEn, headline: 'Kumpletong Gabay sa Traffic Violations at Saher Fines sa Saudi Arabia 2026', description: 'Kumpletong gabay sa traffic violations at Saher fines sa Saudi Arabia. Alamin ang listahan ng multa, black points system, pagbabayad at pagtutol sa Absher.' }
const schemaBn = { ...articleSchemaEn, headline: 'সৌদি আরবে ট্রাফিক জরিমানা ও সেহের ক্যামেরার সম্পূর্ণ গাইড ২০২৬', description: 'সৌদি আরবে ট্রাফিক জরিমানা ও সেহের ফাইন সম্পর্কে সম্পূর্ণ গাইড। জরিমানার তালিকা, ব্ল্যাক পয়েন্ট সিস্টেম, আবশেরে পরিশোধ ও আপত্তি প্রক্রিয়া।' }

const faqsEn = [
  { question: 'How much is the fine for running a red light in Saudi Arabia?', answer: 'Running a red light (cutting a red signal) is one of the most expensive traffic violations in Saudi Arabia. The fine ranges from 3,000 to 6,000 SAR. In addition to the financial penalty, you receive 12 black points on your license. If the violation is captured by a Saher camera, the fine is typically 5,000 SAR. Repeat offenses within a year can result in vehicle impoundment for up to 30 days.' },
  { question: 'How does the Saher camera system work in Saudi Arabia?', answer: 'Saher is the automated traffic enforcement system operated by the Ministry of Interior (MOI). It uses a network of cameras installed at intersections, highways, and key roads across Saudi Arabia. These cameras detect violations including speeding, running red lights, and wrong-way driving. When a violation is detected, the system captures an image of the vehicle\'s license plate, cross-references it with the registered owner\'s data in Absher, and automatically issues a fine notification via SMS and the Absher app.' },
  { question: 'How many black points are issued for speeding violations?', answer: 'Black points vary by severity: Speeding 30-40 km/h over the limit: 0 black points (fine only). Speeding 40+ km/h over the limit: Up to 6 black points. Running a red light: 12 black points. Driving against traffic: 24 black points. Using a mobile phone while driving: 5 black points. Not wearing a seatbelt: 0 black points (fine only). The total black points on your license cannot exceed 24 before suspension.' },
  { question: 'What happens when you accumulate 24 black points in Saudi Arabia?', answer: 'When you reach 24 black points, your driving license is immediately suspended. First suspension: 1 month. Second suspension (if you reach 24 points again within a year): 3 months. Third suspension: 6 months. After each suspension, all points are reset to zero. You can reduce black points by attending traffic safety courses (up to 5 points reduction) or by having a clean driving record for 12 consecutive months.' },
  { question: 'How can I check and pay my traffic fines in Saudi Arabia?', answer: 'You can check and pay traffic fines through: (1) Absher platform — My Services > Traffic Services > Traffic Fines Inquiry. (2) Najm app — for accident-related violations and insurance claims. (3) SADAD payment system through your bank app (Al Rajhi, SNB, Riyad Bank, etc.). (4) Ministry of Interior website — E-Nabs portal. Payment can be made in installments for fines exceeding a certain amount. Our Traffic Fine Calculator can help estimate total penalties.' },
  { question: 'How do I object to a traffic fine in Saudi Arabia?', answer: 'You must file an objection within 30 days of receiving the violation notice. The process is done entirely through Absher: Log in > My Services > Traffic Services > Object to a Traffic Violation. Select the violation and provide your reason along with supporting evidence (dashcam footage is most effective). You will be notified of the result within 5-10 working days. Common grounds for objection include: incorrect license plate, vehicle was stolen at the time, or the violation was committed by a different driver. Dashcam footage is the strongest form of evidence.' },
  { question: 'Can unpaid traffic fines affect my Iqama renewal?', answer: 'Yes, unpaid traffic fines can block your Iqama (residence permit) renewal. The Ministry of Interior has linked the traffic fine system with the Jawazat (Passports Department) database. If you have any outstanding fines, the Absher system will prevent you from renewing your Iqama until all fines are cleared. Additionally, unpaid fines exceeding 50,000 SAR can trigger a travel ban preventing you from leaving Saudi Arabia.' },
  { question: 'What is the fine for using a mobile phone while driving in Saudi Arabia?', answer: 'Using a mobile phone while driving (including texting, calling without hands-free, or browsing) carries a fine of 500 SAR in addition to 5 black points. This applies at traffic lights and in traffic jams as well — if the engine is running and you are in the driver\'s seat, the law applies. Using a phone for navigation is permitted only if the phone is mounted on a dashboard holder and you are not handling it while the vehicle is moving.' },
  { question: 'What is the penalty for driving without a seatbelt in Saudi Arabia?', answer: 'The fine for not wearing a seatbelt is 150 SAR. Both the driver and all passengers are required to wear seatbelts at all times. If a passenger, including children in the front seat, is not wearing a seatbelt, the driver receives the fine. Children under 10 years of age are not permitted to sit in the front seat. The seatbelt law is strictly enforced by both police patrols and Saher cameras on highways.' },
  { question: 'Does Sauditoolhub have a traffic fine calculator?', answer: 'Yes, Sauditoolhub provides a free Traffic Fine Calculator at /traffic-fine-calculator. You can enter the violation type and number of offenses to see the total fine amount, black points impact, and payment options. The calculator covers all major violation categories including speeding, red lights, mobile phone use, seatbelt, wrong-way driving, illegal U-turns, and parking violations. It is updated with the latest 2026 fine amounts.' }
]

const faqsAr = [
  { question: 'كم غرامة قطع الإشارة الحمراء في السعودية؟', answer: 'تتراوح غرامة قطع الإشارة الحمراء بين 3,000 و6,000 ريال. بالإضافة إلى الغرامة المالية، يتم تسجيل 12 نقطة سوداء في رخصة القيادة. إذا تم رصد المخالفة بواسطة كاميرا ساهر، تكون الغرامة عادة 5,000 ريال. المخالفات المتكررة خلال عام قد تؤدي إلى حجز المركبة لمدة تصل إلى 30 يوماً.' },
  { question: 'كيف يعمل نظام ساهر في السعودية؟', answer: 'ساهر هو نظام المراقبة الآلي للمخالفات المرورية الذي تديره وزارة الداخلية. يستخدم شبكة من الكاميرات المثبتة عند التقاطعات والطرق السريعة والطرق الرئيسية. عند رصد مخالفة، يلتقط النظام صورة للوحة السيارة ويصدر مخالفة تلقائياً عبر رسالة نصية وتطبيق أبشر.' },
  { question: 'كم عدد النقاط السوداء لمخالفات السرعة؟', answer: 'تختلف النقاط حسب المخالفة: تجاوز السرعة بفارق 30-40 كم/س: لا نقاط (غرامة فقط). تجاوز السرعة بأكثر من 40 كم/س: حتى 6 نقاط. قطع الإشارة الحمراء: 12 نقطة. القيادة عكس الاتجاه: 24 نقطة. استخدام الجوال أثناء القيادة: 5 نقاط. عدم ربط حزام الأمان: لا نقاط.' },
  { question: 'ماذا يحدث عند وصول النقاط السوداء إلى 24 نقطة؟', answer: 'عند وصولك إلى 24 نقطة سوداء، يتم تعليق رخصة القيادة فوراً. التعليق الأول: شهر. التعليق الثاني: 3 أشهر. التعليق الثالث: 6 أشهر. بعد كل تعليق، يتم إعادة ضبط جميع النقاط إلى الصفر. يمكنك تقليل النقاط بحضور دورات السلامة المرورية.' },
  { question: 'كيف أتحقق من المخالفات المرورية وأسددها؟', answer: 'يمكنك التحقق والدفع عبر: (1) أبشر — خدماتي > خدمات المرور > الاستعلام عن المخالفات المرورية. (2) تطبيق نجم. (3) نظام سداد عبر تطبيق البنك. (4) موقع وزارة الداخلية. استخدم حاسبة المخالفات من Sauditoolhub لتقدير إجمالي الغرامات.' },
  { question: 'كيف اعترض على مخالفة مرورية في السعودية؟', answer: 'يجب تقديم الاعتراض خلال 30 يوماً من تاريخ المخالفة عبر أبشر: تسجيل الدخول > خدماتي > خدمات المرور > الاعتراض على مخالفة مرورية. اختر المخالفة وقدم سبب الاعتراض مع الأدلة. أفضل دليل هو تسجيل كاميرا السيارة (داش كام). تبلغ النتيجة خلال 5-10 أيام عمل.' },
  { question: 'هل تؤثر المخالفات المرورية غير المسددة على تجديد الإقامة؟', answer: 'نعم، المخالفات غير المسددة تمنع تجديد الإقامة. إذا كان لديك مخالفات غير مدفوعة، سيمنعك نظام أبشر من تجديد الإقامة حتى تسديدها. المخالفات التي تتجاوز 50,000 ريال قد تؤدي إلى منع السفر.' },
  { question: 'ما هي غرامة استخدام الجوال أثناء القيادة في السعودية؟', answer: 'استخدام الجوال أثناء القيادة (بما في ذلك الرسائل والمكالمات بدون سماعة) غرامته 500 ريال و5 نقاط سوداء. ينطبق هذا حتى عند الإشارات المرورية وفي الزحام. استخدام الجوال للملاحة مسموح فقط إذا كان مثبتاً على حامل.' },
  { question: 'ما هي غرامة عدم ربط حزام الأمان في السعودية؟', answer: 'غرامة عدم ربط حزام الأمان 150 ريال. يجب على السائق وجميع الركاب ربط الحزام. إذا كان الراكب في المقعد الأمامي بدون حزام، يتحمل السائق الغرامة. الأطفال دون 10 سنوات غير مسموح لهم بالجلوس في المقعد الأمامي.' },
  { question: 'هل تقدم Sauditoolhub حاسبة المخالفات المرورية؟', answer: 'نعم، تقدم Sauditoolhub حاسبة مجانية للمخالفات المرورية. أدخل نوع المخالفة وعددها لترى إجمالي الغرامات وتأثير النقاط السوداء. الحاسبة تغطي جميع أنواع المخالفات الرئيسية.' }
]

function EnContent() {
  return (
    <article className="prose prose-invert max-w-none prose-headings:text-desert-primary prose-a:text-desert-primary prose-strong:text-white prose-li:text-gray-300">
      <h1>The Complete Guide to Traffic Violations & Saher Fines in Saudi Arabia 2026</h1>

      <div className="not-prose glass p-6 rounded-xl mb-8">
        <p className="text-gray-300 text-lg leading-relaxed">
          It starts with a sudden SMS notification: "A traffic violation has been registered against your vehicle." Your heart sinks as you open the Absher app to see the amount. For thousands of drivers across Saudi Arabia, this scene plays out daily — whether it is a speeding ticket caught by a Saher camera on the highway, a red-light violation at an intersection, or a seatbelt fine from a police patrol.
        </p>
        <p className="text-gray-300 text-lg leading-relaxed mt-4">
          The traffic fine system in Saudi Arabia has evolved significantly with the introduction of the <strong>Saher</strong> automated enforcement network, the <strong>black points</strong> system, and the integration of fines with Absher for payment and objection. In 2026, the penalties for traffic violations remain strict, with fines ranging from 150 SAR for minor infractions to 10,000 SAR for dangerous driving behaviors — plus the risk of license suspension through accumulated black points.
        </p>
        <p className="text-gray-300 text-lg leading-relaxed mt-4">
          This guide covers everything you need to know about traffic fines and the Saher system in Saudi Arabia: the complete list of violation amounts for 2026, how the black points system works and what happens when you reach the limit, step-by-step instructions for checking and paying fines through Absher and SADAD, how to file an objection, the consequences of unpaid fines on Iqama renewal and travel, and real-life cost examples. Use our free{' '}
          <Link href="/traffic-fine-calculator" className="text-desert-primary font-bold underline">Traffic Fine Calculator</Link>{' '}
          to estimate your total penalties instantly.
        </p>
      </div>

      <h2>What is the Saher System &amp; Muroor (Traffic Police)?</h2>
      <p>
        <strong>Saher</strong> is an Arabic acronym for "automated monitoring system." It is a comprehensive traffic enforcement network operated by the Ministry of Interior (MOI) through the General Directorate of Traffic (<strong>Muroor</strong>). Saher uses a network of fixed and mobile cameras installed at intersections, along highways, and on major roads throughout the Kingdom to automatically detect and record traffic violations.
      </p>
      <p>
        When the system detects a violation, it captures a high-resolution image of the vehicles license plate, uses optical character recognition (OCR) to read the plate number, cross-references it against the vehicle registration database, identifies the registered owner through Absher, and automatically issues a fine notification via SMS to the registered mobile number. The entire process takes seconds.
      </p>

      <h2>Complete List of Common Traffic Fines in Saudi Arabia (2026 Rules)</h2>

      <div className="not-prose glass p-5 rounded-xl mb-6">
        <div className="bg-[#0A0E1A] p-4 rounded-lg text-gray-300 text-sm">
          <table className="w-full">
            <thead>
              <tr className="text-white border-b border-gray-700">
                <th className="text-left py-2">Violation Type</th>
                <th className="text-left py-2">Fine (SAR)</th>
                <th className="text-left py-2">Black Points</th>
                <th className="text-left py-2">Additional Penalty</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-gray-700/50"><td className="py-2">Running a Red Light</td><td className="py-2 text-desert-gold">3,000 - 6,000</td><td className="py-2 text-red-400">12</td><td className="py-2 text-gray-400">Vehicle impoundment up to 30 days on repeat</td></tr>
              <tr className="border-b border-gray-700/50"><td className="py-2">Speeding (30-40 km/h over limit)</td><td className="py-2 text-desert-gold">300 - 500</td><td className="py-2 text-gray-400">0</td><td className="py-2 text-gray-400">Fine only</td></tr>
              <tr className="border-b border-gray-700/50"><td className="py-2">Speeding (40+ km/h over limit)</td><td className="py-2 text-desert-gold">500 - 900</td><td className="py-2 text-yellow-400">Up to 6</td><td className="py-2 text-gray-400">Higher fines near schools</td></tr>
              <tr className="border-b border-gray-700/50"><td className="py-2">Using Mobile Phone While Driving</td><td className="py-2 text-desert-gold">500</td><td className="py-2 text-yellow-400">5</td><td className="py-2 text-gray-400">Applies even at traffic lights</td></tr>
              <tr className="border-b border-gray-700/50"><td className="py-2">Not Wearing Seatbelt</td><td className="py-2 text-desert-gold">150</td><td className="py-2 text-gray-400">0</td><td className="py-2 text-gray-400">Driver pays for passengers</td></tr>
              <tr className="border-b border-gray-700/50"><td className="py-2">Driving Against Traffic (Wrong Way)</td><td className="py-2 text-desert-gold">5,000 - 10,000</td><td className="py-2 text-red-400">24</td><td className="py-2 text-red-400">Immediate license suspension</td></tr>
              <tr className="border-b border-gray-700/50"><td className="py-2">Illegal U-Turn</td><td className="py-2 text-desert-gold">150 - 300</td><td className="py-2 text-gray-400">0</td><td className="py-2 text-gray-400">Fine only</td></tr>
              <tr className="border-b border-gray-700/50"><td className="py-2">Parking in Disabled Space</td><td className="py-2 text-desert-gold">500</td><td className="py-2 text-gray-400">0</td><td className="py-2 text-gray-400">Vehicle may be towed</td></tr>
              <tr className="border-b border-gray-700/50"><td className="py-2">Driving Without License</td><td className="py-2 text-desert-gold">500</td><td className="py-2 text-yellow-400">3</td><td className="py-2 text-gray-400">Possible arrest</td></tr>
              <tr><td className="py-2">Expired Istimara (Registration)</td><td className="py-2 text-desert-gold">100 - 200</td><td className="py-2 text-gray-400">0</td><td className="py-2 text-gray-400">Per year of delay</td></tr>
            </tbody>
          </table>
        </div>
      </div>

      <h2>The Black Points System Explained</h2>
      <p>
        The black points (nuqat sawdaa) system is a demerit point system designed to penalize repeat offenders and dangerous drivers. Every traffic violation carries a certain number of black points, which are added to your driving record. The system serves as a progressive disciplinary mechanism:
      </p>

      <div className="not-prose glass p-5 rounded-xl mb-6">
        <h3 className="text-desert-primary font-semibold mb-3">Point Accumulation &amp; License Suspension Thresholds</h3>
        <div className="bg-[#0A0E1A] p-4 rounded-lg text-gray-300 text-sm">
          <table className="w-full">
            <thead>
              <tr className="text-white border-b border-gray-700">
                <th className="text-left py-2">Total Points</th>
                <th className="text-left py-2">Consequence</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-gray-700/50"><td className="py-2">12 Points</td><td className="py-2 text-yellow-400">Warning notification sent via Absher</td></tr>
              <tr className="border-b border-gray-700/50"><td className="py-2">16 Points</td><td className="py-2 text-yellow-400">Mandatory attendance at traffic safety course</td></tr>
              <tr className="border-b border-gray-700/50"><td className="py-2">24 Points (First Time)</td><td className="py-2 text-red-400">License suspended for 1 month, all points reset</td></tr>
              <tr className="border-b border-gray-700/50"><td className="py-2">24 Points (Second Time in 1 Year)</td><td className="py-2 text-red-400">License suspended for 3 months</td></tr>
              <tr><td className="py-2">24 Points (Third+ Time in 1 Year)</td><td className="py-2 text-red-400">License suspended for 6 months</td></tr>
            </tbody>
          </table>
        </div>
        <p className="text-gray-400 text-xs mt-2">Note: Points are reduced by 2 for every 3 months of clean driving, or up to 5 points can be reduced by attending an approved traffic safety course.</p>
      </div>

      <h2>Step-by-Step: How to Check and Pay Traffic Fines</h2>

      <div className="not-prose glass p-5 rounded-xl mb-6">
        <div className="space-y-4">
          <div className="bg-[#0A0E1A] p-4 rounded-lg">
            <p className="text-white font-semibold mb-2">Method 1: Via Absher (Recommended)</p>
            <p className="text-gray-300 text-sm">Log in to Absher with your registered mobile number and password. Go to My Services {'>'} Traffic Services {'>'} Traffic Fines Inquiry. Select your vehicle or enter your license number. All unpaid fines are displayed with amounts. To pay, click the payment button, confirm the amount, and choose your payment method (Mada, Visa, Mastercard, or SADAD). Payment is processed instantly and the fine is marked as settled in the system.</p>
          </div>
          <div className="bg-[#0A0E1A] p-4 rounded-lg">
            <p className="text-white font-semibold mb-2">Method 2: Via Bank Apps (SADAD)</p>
            <p className="text-gray-300 text-sm">Most Saudi banks offer traffic fine payment through the SADAD payment system. In your bank app (Al Rajhi, SNB, Riyad Bank, Alinma, etc.), go to SADAD {'>'} Traffic Fines. Your outstanding fines will appear automatically. You can pay all or selected fines. SADAD payments are processed immediately and the funds are transferred directly to the Ministry of Interior.</p>
          </div>
          <div className="bg-[#0A0E1A] p-4 rounded-lg">
            <p className="text-white font-semibold mb-2">Method 3: Via Najm App</p>
            <p className="text-gray-300 text-sm">If your violation involves an accident, the Najm app can be used to check and pay related fines. Najm is the insurance claim and accident management system. It also provides accident reports needed for vehicle repair claims.</p>
          </div>
        </div>
      </div>

      <h2>How to Object to a Traffic Fine</h2>
      <p>
        If you believe a traffic fine was issued in error, you have the right to file an objection. The process is straightforward but has strict time limits:
      </p>

      <div className="not-prose glass p-5 rounded-xl mb-6">
        <div className="space-y-4">
          <div className="bg-[#0A0E1A] p-4 rounded-lg">
            <p className="text-white font-semibold mb-2">Step 1: Log in to Absher</p>
            <p className="text-gray-300 text-sm">Access your Absher account using your credentials.</p>
          </div>
          <div className="bg-[#0A0E1A] p-4 rounded-lg">
            <p className="text-white font-semibold mb-2">Step 2: Navigate to the Objection Service</p>
            <p className="text-gray-300 text-sm">Go to My Services {'>'} Traffic Services {'>'} Object to a Traffic Violation.</p>
          </div>
          <div className="bg-[#0A0E1A] p-4 rounded-lg">
            <p className="text-white font-semibold mb-2">Step 3: Submit Your Objection</p>
            <p className="text-gray-300 text-sm">Select the specific violation you want to challenge. Provide a detailed explanation of why you believe the fine is incorrect. Upload supporting evidence — dashcam footage is the most effective form of proof.</p>
          </div>
          <div className="bg-[#0A0E1A] p-4 rounded-lg">
            <p className="text-white font-semibold mb-2">Step 4: Wait for Review</p>
            <p className="text-gray-300 text-sm">Your objection is reviewed by the Traffic Department. You will receive a result within 5-10 working days via Absher notification. If accepted, the fine is cancelled. If rejected, you may appeal through the Traffic Complaints Committee.</p>
          </div>
        </div>
        <p className="text-gray-400 text-xs mt-3">Important: You must file your objection within 30 days of receiving the violation notification. Late objections are automatically rejected.</p>
      </div>

      <h2>Real-Life Scenarios &amp; Cost Examples</h2>

      <div className="not-prose glass p-5 rounded-xl mb-6">
        <h3 className="text-desert-primary font-semibold mb-3">Scenario 1: Speeding 35 km/h Over the Limit</h3>
        <div className="bg-[#0A0E1A] p-4 rounded-lg text-gray-300 text-sm">
          <p>You are driving on the Riyadh-Jeddah highway and a Saher camera catches you at 155 km/h in a 120 km/h zone. The fine is 400 SAR (within the 300-500 range for 30-40 km/h over). No black points are added for this specific range. However, your black point total is updated in the system and if you have other violations, the combined total may trigger a warning.</p>
        </div>
      </div>

      <div className="not-prose glass p-5 rounded-xl mb-6">
        <h3 className="text-desert-primary font-semibold mb-3">Scenario 2: Running a Red Light</h3>
        <div className="bg-[#0A0E1A] p-4 rounded-lg text-gray-300 text-sm">
          <p>You accidentally run a red light at an intersection in central Riyadh. The Saher camera captures the violation. You receive a 5,000 SAR fine plus 12 black points. If this is your first time reaching 12 points, you receive a warning. If you accumulate another 12 points within the tracking period, your license will be suspended for 1 month. Our{' '}
            <Link href="/traffic-fine-calculator" className="text-desert-primary underline">Traffic Fine Calculator</Link> shows the exact financial impact.</p>
        </div>
      </div>

      <h2>The Danger of Unpaid Fines</h2>
      <p>
        Unpaid traffic fines can have serious consequences beyond the financial penalty. The Ministry of Interior has integrated the traffic fine system with several government services:
      </p>

      <div className="not-prose glass p-5 rounded-xl mb-6">
        <ul className="space-y-2 text-gray-300 text-sm">
          <li><strong className="text-red-400">Iqama Renewal Blocked:</strong> If you have any outstanding fines, Absher will block your Iqama renewal application. You must clear all fines before the system allows renewal.</li>
          <li><strong className="text-red-400">Travel Ban:</strong> Unpaid fines exceeding 50,000 SAR can result in a travel ban (manaa safar). You will not be allowed to leave Saudi Arabia until the fines are settled or a payment plan is arranged.</li>
          <li><strong className="text-red-400">Vehicle Impoundment:</strong> For repeat serious violations (red light running, excessive speeding), the police can impound your vehicle for up to 30 days.</li>
          <li><strong className="text-red-400">Increased Insurance Premiums:</strong> Multiple violations on your record can increase your car insurance premium by 20-50%.</li>
        </ul>
      </div>

      <h2>How to Use the Sauditoolhub Traffic Fine Calculator</h2>
      <p>
        Our free{' '}
        <Link href="/traffic-fine-calculator" className="text-desert-primary font-bold underline">Traffic Fine Calculator</Link>{' '}
        helps you estimate your total penalties instantly. Select the violation type, enter the number of offenses, and the calculator shows the total fine amount, black points impact, and additional penalties. Use it alongside our{' '}
        <Link href="/used-car-calculator" className="text-desert-primary underline">Used Car Cost Calculator</Link>{' '}
        and{' '}
        <Link href="/fuel-cost-calculator" className="text-desert-primary underline">Fuel Cost Calculator</Link>{' '}
        for a complete picture of your driving costs.
      </p>

      <div className="not-prose glass p-6 rounded-xl mb-8 mt-8 text-center">
        <h3 className="text-desert-gold font-semibold mb-3">Drive Safely and Stay Fine-Free</h3>
        <p className="text-gray-300 mb-4">
          Use the{' '}
          <Link href="/traffic-fine-calculator" className="text-desert-primary font-bold underline">Sauditoolhub Traffic Fine Calculator</Link>{' '}
          to stay informed about your penalties and avoid surprises at Iqama renewal time.
        </p>
        <p className="text-gray-400 text-sm">
          Visit our <Link href="/blog" className="text-desert-primary underline">blog</Link> for more guides on traffic rules and safe driving in Saudi Arabia.
        </p>
      </div>

      <h2>Frequently Asked Questions</h2>
      {faqsEn.map((faq, i) => (
        <div key={i} className="not-prose glass p-4 rounded-xl mb-4">
          <h3 className="text-desert-primary font-semibold mb-2">{faq.question}</h3>
          <p className="text-gray-300 text-sm leading-relaxed">{faq.answer}</p>
        </div>
      ))}

      <h2>Conclusion</h2>
      <p>
        The traffic fine system in Saudi Arabia is designed to promote road safety through strict enforcement of traffic laws. Understanding the complete list of fines, the black points system, and the consequences of unpaid violations is essential for every driver in the Kingdom. Whether you are a Saudi national or an expatriate resident, staying informed about traffic rules and paying your fines promptly can save you from license suspension, travel bans, and vehicle impoundment.
      </p>
      <p>
        Always check your Absher account regularly for any new violations, object within 30 days if you believe a fine is incorrect, and never ignore unpaid fines. Use our{' '}
        <Link href="/traffic-fine-calculator" className="text-desert-primary font-bold underline">Traffic Fine Calculator</Link>{' '}
        to estimate your penalties and plan your payments. Drive safely and stay fine-free in Saudi Arabia!
      </p>
    </article>
  )
}
const faqsUr = [
  { question: 'سعودی عرب میں ریڈ لائٹ کاٹنے پر کتنا جرمانہ ہے؟', answer: 'ریڈ لائٹ کاٹنے پر جرمانہ 3,000 سے 6,000 SAR تک ہے۔ اس کے علاوہ 12 بلیک پوائنٹس لگتے ہیں۔ ساہر کیمرہ کی صورت میں عام طور پر 5,000 SAR جرمانہ ہوتا ہے۔ بار بار خلاف ورزی پر گاڑی 30 دن تک ضبط کی جا سکتی ہے۔' },
  { question: 'سعودی عرب میں ساہر کیمرہ سسٹم کیسے کام کرتا ہے؟', answer: 'ساہر وزارت داخلہ کا خودکار ٹریفک نگرانی نظام ہے۔ یہ چوراہوں، شاہراہوں اور اہم سڑکوں پر نصب کیمروں کا نیٹ ورک استعمال کرتا ہے۔ خلاف ورزی پر تصویر لے کر خود بخود جرمانہ جاری کرتا ہے۔' },
  { question: 'سعودی عرب میں بلیک پوائنٹ سسٹم کیسے کام کرتا ہے؟', answer: 'بلیک پوائنٹس مختلف خلاف ورزیوں پر لگتے ہیں: ریڈ لائٹ: 12 پوائنٹس، غلط سمت میں ڈرائیونگ: 24 پوائنٹس، موبائل فون استعمال: 5 پوائنٹس۔ 24 پوائنٹس پر لائسنس معطل ہو جاتا ہے۔' },
  { question: '24 بلیک پوائنٹس ہونے پر کیا ہوتا ہے؟', answer: '24 پوائنٹس پر لائسنس فوراً معطل ہو جاتا ہے۔ پہلی بار: 1 ماہ، دوسری بار: 3 ماہ، تیسری بار: 6 ماہ۔ ہر معطلی کے بعد پوائنٹس صفر ہو جاتے ہیں۔' },
  { question: 'ٹریفک فائن کیسے چیک اور ادا کریں؟', answer: 'آپ أبشر، بینک ایپ (سداد)، نجم ایپ، یا وزارت داخلہ کی ویب سائٹ کے ذریعے جرمانے چیک اور ادا کر سکتے ہیں۔' },
  { question: 'ٹریفک فائن پر اعتراض کیسے کریں؟', answer: 'اعتراض 30 دن کے اندر أبشر کے ذریعے کریں۔ ڈیش کیم فوٹیج بہترین ثبوت ہے۔ نتیجہ 5-10 کام کے دنوں میں آتا ہے۔' },
  { question: 'کیا ٹریفک فائن اقامہ کی تجدید کو متاثر کرتا ہے؟', answer: 'ہاں، بقایا جرمانے اقامہ کی تجدید کو روک دیتے ہیں۔ 50,000 SAR سے زائد جرمانے پر سفری پابندی لگ سکتی ہے۔' },
  { question: 'ڈرائیونگ کے دوران موبائل فون استعمال کرنے پر کیا جرمانہ ہے؟', answer: '500 SAR جرمانہ اور 5 بلیک پوائنٹس۔ یہ ٹریفک لائٹ پر بھی لاگو ہوتا ہے۔' },
  { question: 'سیٹ بیلٹ نہ پہننے پر کیا جرمانہ ہے؟', answer: '150 SAR جرمانہ۔ ڈرائیور مسافروں کے لیے بھی ذمہ دار ہے۔ 10 سال سے کم بچے آگے والی سیٹ پر نہیں بیٹھ سکتے۔' }
]

const faqsTl = [
  { question: 'Magkano ang multa sa pagtakbo sa pulang ilaw sa Saudi Arabia?', answer: 'Ang multa sa pagtakbo sa pulang ilaw ay 3,000 hanggang 6,000 SAR. Bukod dito, makakatanggap ka ng 12 black points. Kung nahuli ng Saher camera, ang karaniwang multa ay 5,000 SAR.' },
  { question: 'Paano gumagana ang Saher camera system sa Saudi Arabia?', answer: 'Ang Saher ay ang automated traffic enforcement system ng Ministry of Interior. Gumagamit ito ng network ng mga camera sa intersections at highway para awtomatikong makita at mag-isyu ng traffic violations.' },
  { question: 'Paano gumagana ang black points system sa Saudi Arabia?', answer: 'Ang bawat violation ay may katumbas na black points: pulang ilaw: 12 points, maling direksyon: 24 points, cellphone habang nagmamaneho: 5 points. Sa 24 points, suspended ang lisensya.' },
  { question: 'Ano ang mangyayari kapag umabot ng 24 black points?', answer: 'Unang suspensyon: 1 buwan, pangalawa: 3 buwan, pangatlo: 6 na buwan. Pagkatapos ng suspensyon, nirerest ang points sa zero.' },
  { question: 'Paano ko masusuri at mababayaran ang aking traffic fines?', answer: 'Maaari mong suriin at bayaran ang fines sa pamamagitan ng Absher, bank apps (SADAD), Najm app, at Ministry of Interior website.' },
  { question: 'Paano tumutol sa isang traffic fine?', answer: 'Mag-file ng objection sa loob ng 30 araw sa pamamagitan ng Absher. Ang dashcam footage ay pinakamabisang ebidensya.' },
  { question: 'Makakaapekto ba ang unpaid fines sa Iqama renewal?', answer: 'Oo, haharangin ng Absher ang Iqama renewal kung may unpaid fines. Ang fines na lampas 50,000 SAR ay maaaring mag-trigger ng travel ban.' },
  { question: 'Magkano ang multa sa paggamit ng cellphone habang nagmamaneho?', answer: '500 SAR multa at 5 black points. Nalalapat ito kahit sa traffic lights.' },
  { question: 'Magkano ang multa sa hindi pagsuot ng seatbelt?', answer: '150 SAR multa. Ang driver ang mananagot para sa mga pasahero.' }
]

const faqsBn = [
  { question: 'সৌদি আরবে লাল বাতি অমান্য করার জরিমানা কত?', answer: 'লাল বাতি অমান্য করার জরিমানা ৩,০০০ থেকে ৬,০০০ SAR। এর সাথে ১২টি ব্ল্যাক পয়েন্ট যুক্ত হয়। সেহের ক্যামেরায় ধরা পড়লে সাধারণত ৫,০০০ SAR জরিমানা হয়।' },
  { question: 'সৌদি আরবে সেহের ক্যামেরা সিস্টেম কীভাবে কাজ করে?', answer: 'সেহার স্বরাষ্ট্র মন্ত্রণালয়ের স্বয়ংক্রিয় ট্রাফিক নজরদারি ব্যবস্থা। এটি মোড়ে, মহাসড়কে এবং প্রধান সড়কে ক্যামেরা নেটওয়ার্ক ব্যবহার করে লঙ্ঘন সনাক্ত ও জরিমানা ইস্যু করে।' },
  { question: 'সৌদি আরবে ব্ল্যাক পয়েন্ট সিস্টেম কীভাবে কাজ করে?', answer: 'প্রতিটি লঙ্ঘনের জন্য নির্দিষ্ট ব্ল্যাক পয়েন্ট রয়েছে: লাল বাতি: ১২ পয়েন্ট, ভুল পথে ড্রাইভিং: ২৪ পয়েন্ট, মোবাইল ফোন ব্যবহার: ৫ পয়েন্ট। ২৪ পয়েন্টে লাইসেন্স স্থগিত।' },
  { question: '২৪ ব্ল্যাক পয়েন্ট হলে কী হয়?', answer: 'প্রথম স্থগিতাদেশ: ১ মাস, দ্বিতীয়: ৩ মাস, তৃতীয়: ৬ মাস। প্রতিটি স্থগিতাদেশের পর পয়েন্ট শূন্য হয়।' },
  { question: 'কীভাবে ট্রাফিক জরিমানা চেক ও পরিশোধ করবেন?', answer: 'আবশের, ব্যাংক অ্যাপ (সাদাদ), নাজম অ্যাপ বা স্বরাষ্ট্র মন্ত্রণালয়ের ওয়েবসাইটের মাধ্যমে জরিমানা চেক ও পরিশোধ করতে পারেন।' },
  { question: 'ট্রাফিক জরিমানায় আপত্তি কীভাবে করবেন?', answer: '৩০ দিনের মধ্যে আবশেরের মাধ্যমে আপত্তি করুন। ড্যাশক্যাম ফুটেজ সবচেয়ে কার্যকর প্রমাণ।' }
]


function ArContent() {
  return (
    <article className="prose prose-invert max-w-none prose-headings:text-desert-primary prose-a:text-desert-primary prose-strong:text-white prose-li:text-gray-300" dir="rtl">
      <h1>الدليل الكامل للمخالفات المرورية ونظام ساهر في السعودية 2026</h1>

      <div className="not-prose glass p-6 rounded-xl mb-8">
        <p className="text-gray-300 text-lg leading-relaxed">
          تبدأ بإشعار مفاجئ عبر الرسائل النصية: "تم تسجيل مخالفة مرورية على مركبتك". يغرق قلبك وأنت تفتح تطبيق أبشر لترى المبلغ. لآلاف السائقين في جميع أنحاء المملكة العربية السعودية، يتكرر هذا المشهد يومياً — سواء كانت مخالفة سرعة من كاميرا ساهر على الطريق السريع، أو مخالفة إشارة حمراء عند تقاطع، أو غرامة حزام أمان من دورية مرور.
        </p>
        <p className="text-gray-300 text-lg leading-relaxed mt-4">
          يغطي هذا الدليل كل ما تحتاج معرفته عن المخالفات المرورية ونظام ساهر في المملكة العربية السعودية لعام 2026: قائمة كاملة بقيم المخالفات، كيفية عمل نظام النقاط السوداء، خطوات الاستعلام والدفع عبر أبشر وسداد، طريقة الاعتراض على المخالفة، وعواقب المخالفات غير المسددة على تجديد الإقامة والسفر. استخدم{' '}
          <Link href="/traffic-fine-calculator" className="text-desert-primary font-bold underline">حاسبة المخالفات المرورية</Link>{' '}
          المجانية من Sauditoolhub لتقدير إجمالي غراماتك فوراً.
        </p>
      </div>

      <h2>ما هو نظام ساهر والمرور السعودي؟</h2>
      <p>
        <strong>ساهر</strong> هو اختصار لـ "نظام المراقبة الآلي". وهو شبكة مراقبة مرورية شاملة تديرها وزارة الداخلية عبر الإدارة العامة للمرور. يستخدم ساهر شبكة من الكاميرات الثابتة والمتحركة المثبتة عند التقاطعات وعلى الطرق السريعة والطرق الرئيسية في جميع أنحاء المملكة للكشف التلقائي عن المخالفات المرورية.
      </p>

      <h2>قائمة المخالفات المرورية الشائعة في السعودية (2026)</h2>

      <div className="not-prose glass p-5 rounded-xl mb-6">
        <div className="bg-[#0A0E1A] p-4 rounded-lg text-gray-300 text-sm">
          <table className="w-full">
            <thead><tr className="text-white border-b border-gray-700"><th className="text-right py-2">نوع المخالفة</th><th className="text-right py-2">الغرامة</th><th className="text-right py-2">النقاط السوداء</th></tr></thead>
            <tbody>
              <tr className="border-b border-gray-700/50"><td className="py-2 text-right">قطع الإشارة الحمراء</td><td className="py-2 text-right text-desert-gold">3,000 - 6,000</td><td className="py-2 text-right text-red-400">12</td></tr>
              <tr className="border-b border-gray-700/50"><td className="py-2 text-right">السرعة (30-40 كم/س)</td><td className="py-2 text-right text-desert-gold">300 - 500</td><td className="py-2 text-right text-gray-400">0</td></tr>
              <tr className="border-b border-gray-700/50"><td className="py-2 text-right">السرعة (40+ كم/س)</td><td className="py-2 text-right text-desert-gold">500 - 900</td><td className="py-2 text-right text-yellow-400">حتى 6</td></tr>
              <tr className="border-b border-gray-700/50"><td className="py-2 text-right">استخدام الجوال أثناء القيادة</td><td className="py-2 text-right text-desert-gold">500</td><td className="py-2 text-right text-yellow-400">5</td></tr>
              <tr className="border-b border-gray-700/50"><td className="py-2 text-right">عدم ربط حزام الأمان</td><td className="py-2 text-right text-desert-gold">150</td><td className="py-2 text-right text-gray-400">0</td></tr>
              <tr className="border-b border-gray-700/50"><td className="py-2 text-right">القيادة عكس الاتجاه</td><td className="py-2 text-right text-desert-gold">5,000 - 10,000</td><td className="py-2 text-right text-red-400">24</td></tr>
              <tr><td className="py-2 text-right">الدوران غير القانوني</td><td className="py-2 text-right text-desert-gold">150 - 300</td><td className="py-2 text-right text-gray-400">0</td></tr>
            </tbody>
          </table>
        </div>
      </div>

      <h2>نظام النقاط السوداء</h2>
      <p>
        نظام النقاط السوداء هو نظام استقطاع نقاط مصمم لمعاقبة المخالفين المتكررين. كل مخالفة مرورية تحمل عدداً معيناً من النقاط السوداء التي تضاف إلى سجل القيادة الخاص بك.
      </p>

      <div className="not-prose glass p-5 rounded-xl mb-6">
        <div className="bg-[#0A0E1A] p-4 rounded-lg text-gray-300 text-sm">
          <p>12 نقطة: إنذار عبر أبشر</p>
          <p>16 نقطة: حضور دورة سلامة مرورية إلزامية</p>
          <p>24 نقطة (أول مرة): تعليق الرخصة شهر</p>
          <p>24 نقطة (ثاني مرة): تعليق 3 أشهر</p>
          <p>24 نقطة (ثالث مرة): تعليق 6 أشهر</p>
        </div>
        <p className="text-gray-400 text-xs mt-2">تنخفض النقاط بنقطتين كل 3 أشهر من القيادة بدون مخالفات، أو يمكن خفض حتى 5 نقاط بحضور دورة سلامة مرورية معتمدة.</p>
      </div>

      <h2>خطوات الاستعلام والدفع</h2>
      <p>يمكنك الاستعلام والدفع عبر أبشر (خدماتي {'>'} خدمات المرور {'>'} الاستعلام عن المخالفات) أو عبر تطبيقات البنوك (سداد) أو تطبيق نجم.</p>

      <h2>كيفية الاعتراض على مخالفة مرورية</h2>
      <p>يجب تقديم الاعتراض خلال 30 يوماً عبر أبشر. أفضل دليل هو تسجيل كاميرا السيارة (داش كام). النتيجة خلال 5-10 أيام عمل.</p>

      <h2>سيناريوهات واقعية</h2>

      <div className="not-prose glass p-5 rounded-xl mb-6">
        <h3 className="text-desert-primary font-semibold mb-3">السيناريو 1: تجاوز السرعة بـ 35 كم/س</h3>
        <p className="text-gray-300 text-sm">الغرامة: 400 ريال. لا نقاط سوداء. لكن النقاط الإجمالية في السجل يتم تحديثها.</p>
      </div>

      <div className="not-prose glass p-5 rounded-xl mb-6">
        <h3 className="text-desert-primary font-semibold mb-3">السيناريو 2: قطع الإشارة الحمراء</h3>
        <p className="text-gray-300 text-sm">الغرامة: 5,000 ريال + 12 نقطة سوداء. استخدم{' '} <Link href="/traffic-fine-calculator" className="text-desert-primary underline">حاسبة المخالفات</Link>.</p>
      </div>

      <h2>خطر المخالفات غير المسددة</h2>
      <p>المخالفات غير المسددة تمنع تجديد الإقامة. أكثر من 50,000 ريال قد يؤدي إلى منع السفر. المخالفات المتكررة قد تؤدي إلى حجز المركبة.</p>

      <h2>كيفية استخدام حاسبة المخالفات من Sauditoolhub</h2>
      <p>استخدم{' '}<Link href="/traffic-fine-calculator" className="text-desert-primary font-bold underline">حاسبة المخالفات المرورية</Link> لتقدير الغرامات. استخدم أيضاً{' '}<Link href="/used-car-calculator" className="text-desert-primary underline">حاسبة السيارة المستعملة</Link> و{' '}<Link href="/fuel-cost-calculator" className="text-desert-primary underline">حاسبة الوقود</Link>.</p>

      <div className="not-prose glass p-6 rounded-xl mb-8 mt-8 text-center">
        <h3 className="text-desert-gold font-semibold mb-3">قد بسلامة وابقَ بدون مخالفات</h3>
        <p className="text-gray-400 text-sm">زوروا <Link href="/blog" className="text-desert-primary underline">مدونتنا</Link> للمزيد.</p>
      </div>

      <h2>الأسئلة الشائعة</h2>
      {faqsAr.map((faq, i) => (
        <div key={i} className="not-prose glass p-4 rounded-xl mb-4">
          <h3 className="text-desert-primary font-semibold mb-2">{faq.question}</h3>
          <p className="text-gray-300 text-sm leading-relaxed">{faq.answer}</p>
        </div>
      ))}

      <h2>الخاتمة</h2>
      <p>
        نظام المخالفات المرورية في السعودية مصمم لتعزيز السلامة على الطرق. فهم قائمة المخالفات ونظام النقاط السوداء ضروري لكل سائق. استخدم{' '}
        <Link href="/traffic-fine-calculator" className="text-desert-primary font-bold underline">حاسبة المخالفات</Link> لتقدير غراماتك.
      </p>
    </article>
  )
}

function UrContent() {
  return (
    <article className="prose prose-invert max-w-none prose-headings:text-desert-primary prose-a:text-desert-primary prose-strong:text-white prose-li:text-gray-300" dir="rtl">
      <h1>سعودی عرب میں ٹریفک فائن اور ساہر کیمرہ کے بارے میں مکمل گائیڈ 2026</h1>

      <div className="not-prose glass p-6 rounded-xl mb-8">
        <p className="text-gray-300 text-lg leading-relaxed">
          یہ اچانک ایس ایم ایس اطلاع سے شروع ہوتا ہے: "آپ کی گاڑی کے خلاف ٹریفک خلاف ورزی درج کی گئی ہے۔" جیسے ہی آپ أبشر ایپ کھولتے ہیں، آپ کا دل دھڑکتا ہے۔ سعودی عرب میں ہزاروں ڈرائیوروں کے ساتھ یہ منظر روزانہ ہوتا ہے۔
        </p>
        <p className="text-gray-300 text-lg leading-relaxed mt-4">
          یہ گائیڈ سعودی عرب 2026 میں ٹریفک فائن اور ساہر سسٹم کے بارے میں ہر وہ چیز بتاتا ہے جس کی آپ کو ضرورت ہے: جرمانوں کی مکمل فہرست، بلیک پوائنٹ سسٹم، أبشر اور سداد کے ذریعے ادائیگی کے مراحل، اعتراض کرنے کا طریقہ، اور بقایا جرمانوں کے نتائج۔{' '}
          <Link href="/traffic-fine-calculator" className="text-desert-primary font-bold underline">ٹریفک فائن کیلکولیٹر</Link> استعمال کریں۔
        </p>
      </div>

      <h2>ساہر سسٹم اور ٹریفک پولیس کیا ہے؟</h2>
      <p><strong>ساہر</strong> وزارت داخلہ کا خودکار ٹریفک نگرانی نظام ہے جو کیمروں کے نیٹ ورک کے ذریعے خلاف ورزیاں ریکارڈ کرتا ہے۔</p>

      <h2>عام ٹریفک جرمانے (2026)</h2>

      <div className="not-prose glass p-5 rounded-xl mb-6">
        <div className="bg-[#0A0E1A] p-4 rounded-lg text-gray-300 text-sm">
          <p>ریڈ لائٹ: 3,000 - 6,000 SAR — 12 پوائنٹس</p>
          <p>تیز رفتاری (30-40): 300 - 500 SAR — 0 پوائنٹس</p>
          <p>تیز رفتاری (40+): 500 - 900 SAR — 6 پوائنٹس</p>
          <p>موبائل فون: 500 SAR — 5 پوائنٹس</p>
          <p>سیٹ بیلٹ نہیں: 150 SAR — 0 پوائنٹس</p>
          <p>غلط سمت: 5,000 - 10,000 SAR — 24 پوائنٹس</p>
        </div>
      </div>

      <h2>بلیک پوائنٹ سسٹم</h2>
      <p>24 پوائنٹس پر لائسنس معطل: پہلی بار 1 ماہ، دوسری بار 3 ماہ، تیسری بار 6 ماہ۔ پوائنٹس کم کرنے کے لیے ٹریفک سیفٹی کورس کریں۔</p>

      <h2>جرمانے چیک اور ادا کرنے کے طریقے</h2>
      <p>أبشر، بینک ایپ (سداد)، نجم ایپ، یا وزارت داخلہ کی ویب سائٹ۔</p>

      <h2>اعتراض کیسے کریں</h2>
      <p>30 دن کے اندر أبشر پر اعتراض کریں۔ ڈیش کیم فوٹیج بہترین ثبوت ہے۔</p>

      <h2>مثالیں</h2>
      <p>ریڈ لائٹ: 5,000 SAR + 12 پوائنٹس۔ تیز رفتاری 35 کلومیٹر/گھنٹہ: 400 SAR۔</p>

      <h2>بقایا جرمانوں کے خطرات</h2>
      <p>اقامہ کی تجدید رک جاتی ہے۔ 50,000 SAR سے زائد پر سفری پابندی۔</p>

      <h2>کیلکولیٹر کا استعمال</h2>
      <p><Link href="/traffic-fine-calculator" className="text-desert-primary font-bold underline">ٹریفک فائن کیلکولیٹر</Link> استعمال کریں۔{' '}
      <Link href="/used-car-calculator" className="text-desert-primary underline">گاڑی کیلکولیٹر</Link> اور{' '}
      <Link href="/fuel-cost-calculator" className="text-desert-primary underline">ایندھن کیلکولیٹر</Link> بھی دیکھیں۔</p>

      <div className="not-prose glass p-6 rounded-xl mb-8 mt-8 text-center">
        <p className="text-gray-400 text-sm"><Link href="/blog" className="text-desert-primary underline">بلاگ</Link> ملاحظہ کریں۔</p>
      </div>

      <h2>اکثر پوچھے گئے سوالات</h2>
      {faqsUr.map((faq, i) => (
        <div key={i} className="not-prose glass p-4 rounded-xl mb-4">
          <h3 className="text-desert-primary font-semibold mb-2">{faq.question}</h3>
          <p className="text-gray-300 text-sm leading-relaxed">{faq.answer}</p>
        </div>
      ))}

      <h2>نتیجہ</h2>
      <p>محفوظ ڈرائیو کریں اور جرمانوں سے بچیں۔{' '}<Link href="/traffic-fine-calculator" className="text-desert-primary font-bold underline">ٹریفک فائن کیلکولیٹر</Link> استعمال کریں۔</p>
    </article>
  )
}

function TlContent() {
  return (
    <article className="prose prose-invert max-w-none prose-headings:text-desert-primary prose-a:text-desert-primary prose-strong:text-white prose-li:text-gray-300">
      <h1>Kumpletong Gabay sa Traffic Violations at Saher Fines sa Saudi Arabia 2026</h1>

      <div className="not-prose glass p-6 rounded-xl mb-8">
        <p className="text-gray-300 text-lg leading-relaxed">
          Nagsisimula ito sa isang biglaang SMS notification: "Isang traffic violation ang naitala laban sa iyong sasakyan." Para sa libu-libong drivers sa Saudi Arabia, ang eksenang ito ay nangyayari araw-araw — ito man ay speeding ticket mula sa Saher camera, red light violation, o seatbelt fine.
        </p>
        <p className="text-gray-300 text-lg leading-relaxed mt-4">
          Saklaw ng gabay na ito ang lahat ng kailangan mong malaman tungkol sa traffic fines at Saher system sa Saudi Arabia 2026: kumpletong listahan ng multa, black points system, pagbabayad sa Absher at SADAD, pagtutol sa violation, at mga kahihinatnan ng hindi pagbabayad. Gamitin ang{' '}
          <Link href="/traffic-fine-calculator" className="text-desert-primary font-bold underline">Traffic Fine Calculator</Link>.
        </p>
      </div>

      <h2>Ano ang Saher System at Muroor?</h2>
      <p>Ang <strong>Saher</strong> ay ang automated traffic enforcement system ng Ministry of Interior. Gumagamit ito ng mga camera sa intersections at highway para awtomatikong makita ang mga traffic violations.</p>

      <h2>Listahan ng Karaniwang Multa (2026)</h2>
      <div className="not-prose glass p-5 rounded-xl mb-6">
        <div className="bg-[#0A0E1A] p-4 rounded-lg text-gray-300 text-sm">
          <p>Pulang Ilaw: 3,000 - 6,000 SAR — 12 points</p>
          <p>Speeding (30-40): 300 - 500 SAR — 0 points</p>
          <p>Speeding (40+): 500 - 900 SAR — hanggang 6 points</p>
          <p>Cellphone: 500 SAR — 5 points</p>
          <p>Seatbelt: 150 SAR — 0 points</p>
          <p>Maling Direksyon: 5,000 - 10,000 SAR — 24 points</p>
        </div>
      </div>

      <h2>Black Points System</h2>
      <p>24 points: unang suspension 1 buwan, pangalawa 3 buwan, pangatlo 6 buwan. Bawasan ang points sa pamamagitan ng traffic safety course.</p>

      <h2>Paano Suriin at Bayaran ang Fines</h2>
      <p>Sa pamamagitan ng Absher, bank apps (SADAD), Najm app, at MOI website.</p>

      <h2>Paano Tumutol</h2>
      <p>Mag-file ng objection sa loob ng 30 araw sa Absher. Dashcam footage ang pinakamabisang ebidensya.</p>

      <h2>Mga Halimbawa</h2>
      <p>Pulang ilaw: 5,000 SAR + 12 points. Speeding (35 km/h over): 400 SAR.</p>

      <h2>Panganib ng Hindi Pagbabayad</h2>
      <p>Haharangin ang Iqama renewal. Lampas 50,000 SAR ay maaaring mag-trigger ng travel ban.</p>

      <h2>Gamitin ang Calculator</h2>
      <p><Link href="/traffic-fine-calculator" className="text-desert-primary font-bold underline">Traffic Fine Calculator</Link>. Tingnan din ang{' '}
      <Link href="/used-car-calculator" className="text-desert-primary underline">Used Car Calculator</Link> at{' '}
      <Link href="/fuel-cost-calculator" className="text-desert-primary underline">Fuel Cost Calculator</Link>.</p>

      <div className="not-prose glass p-6 rounded-xl mb-8 mt-8 text-center">
        <p className="text-gray-400 text-sm">Bisitahin ang aming <Link href="/blog" className="text-desert-primary underline">blog</Link>.</p>
      </div>

      <h2>Mga Madalas Itanong</h2>
      {faqsTl.map((faq, i) => (
        <div key={i} className="not-prose glass p-4 rounded-xl mb-4">
          <h3 className="text-desert-primary font-semibold mb-2">{faq.question}</h3>
          <p className="text-gray-300 text-sm leading-relaxed">{faq.answer}</p>
        </div>
      ))}

      <h2>Konklusyon</h2>
      <p>Magmaneho nang ligtas at iwasan ang multa. Gamitin ang{' '}<Link href="/traffic-fine-calculator" className="text-desert-primary font-bold underline">Traffic Fine Calculator</Link>.</p>
    </article>
  )
}

function BnContent() {
  return (
    <article className="prose prose-invert max-w-none prose-headings:text-desert-primary prose-a:text-desert-primary prose-strong:text-white prose-li:text-gray-300">
      <h1>সৌদি আরবে ট্রাফিক জরিমানা ও সেহের ক্যামেরার সম্পূর্ণ গাইড ২০২৬</h1>

      <div className="not-prose glass p-6 rounded-xl mb-8">
        <p className="text-gray-300 text-lg leading-relaxed">
          এটি হঠাৎ একটি এসএমএস নোটিফিকেশন দিয়ে শুরু হয়: "আপনার গাড়ির বিরুদ্ধে একটি ট্রাফিক লঙ্ঘন নথিভুক্ত করা হয়েছে।" সৌদি আরবের হাজার হাজার চালকের জন্য এই দৃশ্যটি প্রতিদিন ঘটে। এই গাইডটি ২০২৬ সালে ট্রাফিক জরিমানা ও সেহের সিস্টেম সম্পর্কে আপনার যা কিছু জানা দরকার তা কভার করে।
        </p>
      </div>

      <h2>সেহের সিস্টেম ও মুরুর কী?</h2>
      <p><strong>সেহের</strong> স্বরাষ্ট্র মন্ত্রণালয়ের স্বয়ংক্রিয় ট্রাফিক নজরদারি ব্যবস্থা। এটি মোড়ে ও মহাসড়কে ক্যামেরা নেটওয়ার্ক ব্যবহার করে লঙ্ঘন সনাক্ত করে।</p>

      <h2>সাধারণ জরিমানার তালিকা (২০২৬)</h2>
      <div className="not-prose glass p-5 rounded-xl mb-6">
        <div className="bg-[#0A0E1A] p-4 rounded-lg text-gray-300 text-sm">
          <p>লাল বাতি: ৩,০০০-৬,০০০ SAR — ১২ পয়েন্ট</p>
          <p>গতিসীমা (৩০-৪০): ৩০০-৫০০ SAR — ০ পয়েন্ট</p>
          <p>গতিসীমা (৪০+): ৫০০-৯০০ SAR — ৬ পয়েন্ট</p>
          <p>মোবাইল ফোন: ৫০০ SAR — ৫ পয়েন্ট</p>
          <p>সিটবেল্ট না: ১৫০ SAR — ০ পয়েন্ট</p>
          <p>ভুল পথে: ৫,০০০-১০,০০০ SAR — ২৪ পয়েন্ট</p>
        </div>
      </div>

      <h2>ব্ল্যাক পয়েন্ট সিস্টেম</h2>
      <p>২৪ পয়েন্ট: প্রথম স্থগিত ১ মাস, দ্বিতীয় ৩ মাস, তৃতীয় ৬ মাস। ট্রাফিক সেফটি কোর্সে পয়েন্ট কমান।</p>

      <h2>জরিমানা চেক ও পরিশোধ</h2>
      <p>আবশের, ব্যাংক অ্যাপ (সাদাদ), নাজম অ্যাপ, বা স্বরাষ্ট্র মন্ত্রণালয়ের ওয়েবসাইট।</p>

      <h2>আপত্তি প্রক্রিয়া</h2>
      <p>৩০ দিনের মধ্যে আবশেরে আপত্তি। ড্যাশক্যাম ফুটেজ সেরা প্রমাণ।</p>

      <h2>পরিশোধ না করার ঝুঁকি</h2>
      <p>ইকামা নবীকরণ বন্ধ। ৫০,০০০ SAR-এর বেশি জরিমানায় ভ্রমণ নিষেধাজ্ঞা।</p>

      <h2>ক্যালকুলেটর ব্যবহার</h2>
      <p><Link href="/traffic-fine-calculator" className="text-desert-primary font-bold underline">ট্রাফিক ফাইন ক্যালকুলেটর</Link>।{' '}
      <Link href="/used-car-calculator" className="text-desert-primary underline">গাড়ির খরচ ক্যালকুলেটর</Link> ও{' '}
      <Link href="/fuel-cost-calculator" className="text-desert-primary underline">জ্বালানি খরচ ক্যালকুলেটর</Link> দেখুন।</p>

      <div className="not-prose glass p-6 rounded-xl mb-8 mt-8 text-center">
        <p className="text-gray-400 text-sm">আমাদের <Link href="/blog" className="text-desert-primary underline">ব্লগ</Link> দেখুন।</p>
      </div>

      <h2>প্রায়শই জিজ্ঞাসিত প্রশ্ন</h2>
      {faqsBn.map((faq, i) => (
        <div key={i} className="not-prose glass p-4 rounded-xl mb-4">
          <h3 className="text-desert-primary font-semibold mb-2">{faq.question}</h3>
          <p className="text-gray-300 text-sm leading-relaxed">{faq.answer}</p>
        </div>
      ))}

      <h2>উপসংহার</h2>
      <p>নিরাপদে গাড়ি চালান এবং জরিমানা এড়িয়ে চলুন।{' '}<Link href="/traffic-fine-calculator" className="text-desert-primary font-bold underline">ট্রাফিক ফাইন ক্যালকুলেটর</Link> ব্যবহার করুন।</p>
    </article>
  )
}

export default async function TrafficGuidePage({ params }: Props) {
  const { locale } = await params
  const isAr = locale === 'ar'
  const isUr = locale === 'ur'
  const isTl = locale === 'tl'
  const isBn = locale === 'bn'
  const isDefault = locale === 'en'
  const pageUrl = isDefault
    ? `${baseUrl}/guide/traffic-fine-saher-guide-saudi-arabia-2026`
    : `${baseUrl}/${locale}/guide/traffic-fine-saher-guide-saudi-arabia-2026`

  const schema = isAr ? schemaAr : isUr ? schemaUr : isTl ? schemaTl : isBn ? schemaBn : articleSchemaEn
  const faqItems = isAr ? faqsAr : isUr ? faqsUr : isTl ? faqsTl : isBn ? faqsBn : faqsEn

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: faqItems.map((faq) => ({
              '@type': 'Question',
              name: faq.question,
              acceptedAnswer: { '@type': 'Answer', text: faq.answer },
            })),
          }),
        }}
      />
      <article
        itemScope
        itemType="https://schema.org/Article"
        className="relative z-10"
      >
        <section className="px-4 py-20">
          <div className="mx-auto max-w-6xl">
            {isAr ? <ArContent /> : isUr ? <UrContent /> : isTl ? <TlContent /> : isBn ? <BnContent /> : <EnContent />}
          </div>
        </section>
      </article>
    </>
  )
}
