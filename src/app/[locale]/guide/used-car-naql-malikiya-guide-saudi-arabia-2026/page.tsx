import type { Metadata } from 'next'
import Link from 'next/link'
import { Calculator, Car, FileText, Shield, AlertTriangle, CheckCircle, Search, CreditCard, Building2, DollarSign, Users, Briefcase, Percent, Clock, Award, ArrowUpRight, BookOpen, Smartphone, Globe, Info, MapPin, Gavel, BadgeAlert, Wrench, Fuel } from 'lucide-react'

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
    ? 'الدليل الكامل لشراء سيارة مستعملة ورسوم نقل الملكية في السعودية 2026 | Sauditoolhub'
    : isUr
    ? 'سعودی عرب میں استعمال شدہ گاڑی خریدنے اور نقل ملکیت کے اخراجات کا مکمل گائیڈ 2026 | Sauditoolhub'
    : isTl
    ? 'Kumpletong Gabay sa Pagbili ng Used Car at Naql Malikiya Fees sa Saudi Arabia 2026 | Sauditoolhub'
    : isBn
    ? 'সৌদি আরবে ব্যবহৃত গাড়ি কেনা ও নাকল মালিকিয়া ফি-র সম্পূর্ণ গাইড ২০২৬ | Sauditoolhub'
    : 'The Complete Guide to Buying a Used Car & Naql Malikiya Fees in Saudi Arabia 2026 | Sauditoolhub'

  const description = isAr
    ? 'دليل كامل لشراء سيارة مستعملة في السعودية 2026. تعرف على رسوم نقل الملكية حسب سعة المحرك، تكاليف الاستمارة، التأمين الإلزامي، فحص دوري، والرسوم الخفية. استخدم حاسبة تكلفة السيارة المستعملة من Sauditoolhub.'
    : isUr
    ? 'سعودی عرب میں استعمال شدہ گاڑی خریدنے کا مکمل گائیڈ 2026۔ جانیے نقل ملکیت کی فیس، استمارہ کی تجدید، انشورنس، فحس دوری، اور پوشیدہ اخراجات کے بارے میں۔'
    : isTl
    ? 'Kumpletong gabay sa pagbili ng used car sa Saudi Arabia 2026. Alamin ang Naql Malikiya fees, Istimara renewal, insurance, periodic inspection fees, at mga nakatagong gastos.'
    : isBn
    ? 'সৌদি আরবে ব্যবহৃত গাড়ি কেনার সম্পূর্ণ গাইড ২০২৬। জানুন নাকল মালিকিয়া ফি, ইসতিমারা নবীকরণ, ইন্সুরেন্স, পর্যায়ক্রমিক পরিদর্শন ফি এবং গোপন খরচ সম্পর্কে।'
    : 'Complete guide to buying a used car in Saudi Arabia 2026. Learn Naql Malikiya fees by engine size, Istimara renewal costs, mandatory insurance, periodic inspection (Fahas), and hidden costs to avoid. Use our free Used Car Cost Calculator.'

  return {
    title,
    description,
    alternates: {
      canonical: isDefault ? '/guide/used-car-naql-malikiya-guide-saudi-arabia-2026' : `/${locale}/guide/used-car-naql-malikiya-guide-saudi-arabia-2026`,
      languages: {
        en: '/guide/used-car-naql-malikiya-guide-saudi-arabia-2026',
        ar: '/ar/guide/used-car-naql-malikiya-guide-saudi-arabia-2026',
        ur: '/ur/guide/used-car-naql-malikiya-guide-saudi-arabia-2026',
        tl: '/tl/guide/used-car-naql-malikiya-guide-saudi-arabia-2026',
        bn: '/bn/guide/used-car-naql-malikiya-guide-saudi-arabia-2026',
      },
    },
    openGraph: {
      title,
      description,
      url: isDefault ? '/guide/used-car-naql-malikiya-guide-saudi-arabia-2026' : `/${locale}/guide/used-car-naql-malikiya-guide-saudi-arabia-2026`,
      siteName: 'Sauditoolhub',
      locale: isAr ? 'ar_SA' : isUr ? 'ur_PK' : isTl ? 'tl_PH' : isBn ? 'bn_BD' : 'en_US',
      type: 'article',
      publishedTime: '2026-04-01',
      modifiedTime: '2026-07-01',
    },
    twitter: { card: 'summary_large_image', title, description },
    robots: { index: true, follow: true },
  }
}

const articleSchemaEn = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'The Complete Guide to Buying a Used Car & Naql Malikiya Fees in Saudi Arabia 2026',
  description: 'Complete guide to buying a used car in Saudi Arabia. Learn Naql Malikiya fees, Istimara renewal, mandatory insurance, Fahas inspection costs, hidden fees to avoid, and step-by-step Absher transfer process.',
  author: { '@type': 'Person', name: 'Sauditoolhub Team' },
  publisher: { '@type': 'Organization', name: 'Sauditoolhub', logo: { '@type': 'ImageObject', url: '/logo.png' } },
  datePublished: '2026-04-01',
  dateModified: '2026-07-01',
}

const schemaAr = { ...articleSchemaEn, headline: 'الدليل الكامل لشراء سيارة مستعملة ورسوم نقل الملكية في السعودية 2026', description: 'دليل كامل لشراء سيارة مستعملة في السعودية. تعرف على رسوم نقل الملكية، تجديد الاستمارة، التأمين الإلزامي، فحص دوري، والرسوم الخفية التي يجب تجنبها مع خطوات النقل عبر أبشر.' }
const schemaUr = { ...articleSchemaEn, headline: 'سعودی عرب میں استعمال شدہ گاڑی خریدنے اور نقل ملکیت کے اخراجات کا مکمل گائیڈ 2026', description: 'سعودی عرب میں استعمال شدہ گاڑی خریدنے کا مکمل گائیڈ۔ جانیے نقل ملکیت کی فیس، استمارہ کی تجدید، انشورنس، فحس دوری، اور أبشر کے ذریعے منتقلی کے مراحل۔' }
const schemaTl = { ...articleSchemaEn, headline: 'Kumpletong Gabay sa Pagbili ng Used Car at Naql Malikiya Fees sa Saudi Arabia 2026', description: 'Kumpletong gabay sa pagbili ng used car sa Saudi Arabia. Alamin ang Naql Malikiya fees, Istimara renewal, insurance, Fahas inspection costs, at step-by-step Absher transfer process.' }
const schemaBn = { ...articleSchemaEn, headline: 'সৌদি আরবে ব্যবহৃত গাড়ি কেনা ও নাকল মালিকিয়া ফি-র সম্পূর্ণ গাইড ২০২৬', description: 'সৌদি আরবে ব্যবহৃত গাড়ি কেনার সম্পূর্ণ গাইড। জানুন নাকল মালিকিয়া ফি, ইসতিমারা নবীকরণ, ইন্সুরেন্স, ফাহাস পরিদর্শন খরচ এবং আবশরের মাধ্যমে স্থানান্তর প্রক্রিয়া।' }

const faqsEn = [
  { question: 'What is Naql Malikiya and how much does it cost in Saudi Arabia?', answer: 'Naql Malikiya (ownership transfer) is the legal process of transferring car ownership from the seller to the buyer through the Absher platform. The fee depends on engine size: 150 SAR for engines under 1600cc, 300 SAR for 1601-2000cc, and 500 SAR for engines over 2000cc. These fees are set by the Saudi Traffic Department (Moroor) and are paid online during the Absher transfer process.' },
  { question: 'What documents do I need to buy a used car in Saudi Arabia?', answer: 'You need: (1) Valid Saudi Iqama (for expats) or National ID (for Saudis). (2) Absher account with active registration. (3) Valid driving license. (4) Car insurance policy (third-party or comprehensive). (5) Bank transfer receipt or cash payment proof. (6) The seller must provide the original Istimara (vehicle registration card) and their Absher account to initiate the transfer.' },
  { question: 'How much does Istimara renewal cost in Saudi Arabia?', answer: 'Istimara (vehicle registration) renewal costs 300 SAR for one year and 600 SAR for two years. This fee is paid through Absher, the Saudi Post (Sabil), or bank ATMs. You must have valid insurance and a passing periodic inspection (Fahas) before you can renew the Istimara. Late renewal incurs a penalty of 100 SAR for the first year and 200 SAR for subsequent years.' },
  { question: 'What is the periodic inspection (Fahas) and how much does it cost?', answer: 'Periodic inspection (Fahas Doury) is a mandatory technical inspection that all vehicles in Saudi Arabia must pass. The inspection checks brakes, tires, lights, suspension, emissions, and overall roadworthiness. Costs range from 70-150 SAR depending on the inspection center. Major centers include Al-Fahhas, Al-Mani, and Al-Majal in Riyadh, Jeddah, and Dammam. The inspection is valid for 1 year for private cars and 6 months for commercial vehicles.' },
  { question: 'How much does car insurance cost for a used car in Saudi Arabia?', answer: 'Car insurance costs vary. Third-party insurance (Tamin Al-Ghair) is mandatory and costs 600-1,000 SAR per year for most vehicles. Comprehensive insurance costs 2-3% of the car\'s value annually — for a 40,000 SAR car, that is 800-1,200 SAR per year. Your driving history, age, and the car\'s make/model also affect the premium. New drivers and younger drivers typically pay higher premiums.' },
  { question: 'How do I transfer car ownership using Absher?', answer: 'The seller initiates the transfer through Absher. Steps: (1) Seller logs into Absher > My Services &gt; Traffic Services &gt; Vehicle Ownership Transfer. (2) Seller enters the buyer\'s ID/Iqama number and selects the vehicle. (3) Seller agrees to the terms and pays the transfer fee. (4) Buyer logs into Absher and accepts the transfer from the pending requests. (5) Buyer prints the temporary Istimara from Absher. The entire process takes 10-15 minutes if both parties have active Absher accounts.' },
  { question: 'Can I transfer a car if there are unpaid traffic fines?', answer: 'No, the seller must clear all unpaid traffic fines (Saher violations) before transferring ownership. The Absher system automatically blocks the transfer if there are any outstanding fines tied to the vehicle\'s Istimara. Always check for unpaid fines before buying. You can check using Absher, the Tawakkalna app, or the Ministry of Interior\'s \'E-Nabs\' portal. Our Traffic Fine Calculator can help estimate Saher violation costs.' },
  { question: 'What are common scams when buying a used car in Saudi Arabia?', answer: 'Common scams include: (1) Odometer tampering — mileage rolled back to increase value. (2) Accident history concealment — cars declared total loss by Najm being sold as clean. (3) Unpaid fines — seller promises to pay but never does. (4) Export-only vehicles — cars imported temporarily and not eligible for Saudi registration. (5) VIN tampering — fake chassis numbers on stolen vehicles. Always run a Najm accident report and verify the VIN physically.' },
  { question: 'Is a test drive mandatory before buying a used car?', answer: 'While not legally mandatory, a test drive is highly recommended. Take the car to a trusted mechanic for a pre-purchase inspection. Check for: unusual engine noises, transmission smoothness, brake responsiveness, air conditioning performance (critical in Saudi summers), suspension condition, and electronic systems. Many buyers also use services like Fahas Mobile which offers on-site inspection reports including a comprehensive vehicle health check.' },
  { question: 'Does Sauditoolhub have a used car cost calculator?', answer: 'Yes, Sauditoolhub provides a free Used Car Cost Calculator at /used-car-calculator. Enter the car price, engine size, and your details to see the complete breakdown including Naql Malikiya transfer fee, Istimara registration cost, mandatory insurance premium, Fahas inspection fee, and any applicable traffic fines. The calculator gives you the exact total cost so you can negotiate with confidence.' }
]

const faqsAr = [
  { question: 'ما هي رسوم نقل الملكية في السعودية حسب سعة المحرك؟', answer: 'رسوم نقل ملكية السيارة تعتمد على سعة المحرك: 150 ريال للمحركات أقل من 1600 سي سي، 300 ريال للمحركات من 1601 إلى 2000 سي سي، و500 ريال للمحركات أكثر من 2000 سي سي. تدفع هذه الرسوم إلكترونياً عبر منصة أبشر أثناء عملية نقل الملكية.' },
  { question: 'ما هي المستندات المطلوبة لشراء سيارة مستعملة في السعودية؟', answer: 'تحتاج إلى: (1) هوية وطنية أو إقامة سارية. (2) حساب أبشر نشط. (3) رخصة قيادة سارية. (4) وثيقة تأمين (طرف ثالث أو شامل). (5) إثبات تحويل بنكي. (6) الاستمارة الأصلية من البائع.' },
  { question: 'كم تكلفة تجديد الاستمارة في السعودية؟', answer: 'تكلفة تجديد استمارة السيارة 300 ريال لسنة واحدة و600 ريال لسنتين. تدفع عبر أبشر أو سبل أو أجهزة الصراف الآلي. يجب أن يكون لديك تأمين ساري وفحص دوري ساري المفعول. غرامة التأخير 100 ريال للسنة الأولى و200 ريال للسنوات التالية.' },
  { question: 'ما هي تكلفة الفحص الدوري للسيارة في السعودية؟', answer: 'تتراوح تكلفة الفحص الدوري للسيارة بين 70 و150 ريالاً حسب مركز الفحص. تشمل المراكز الرئيسية: الفحص، المعني، والمجال في الرياض وجدة والدمام. الفحص صالح لمدة سنة للسيارات الخاصة و6 أشهر للسيارات التجارية.' },
  { question: 'كم سعر التأمين على السيارة المستعملة في السعودية؟', answer: 'تأمين الطرف الثالث إلزامي ويكلف 600-1,000 ريال سنوياً. التأمين الشامل يكلف 2-3% من قيمة السيارة سنوياً. لسيارة بقيمة 40,000 ريال، التأمين الشامل 800-1,200 ريال سنوياً.' },
  { question: 'كيف يتم نقل ملكية السيارة عبر أبشر؟', answer: 'يبدأ البائع عملية النقل عبر أبشر بالخطوات: (1) تسجيل الدخول > خدماتي > خدمات المرور > نقل ملكية مركبة. (2) إدخال رقم هوية المشتري. (3) الموافقة على الشروط ودفع الرسوم. (4) يقوم المشتري بقبول النقل من طلباته المعلقة. (5) طباعة الاستمارة المؤقتة.' },
  { question: 'هل يمكن نقل ملكية السيارة إذا كانت عليها مخالفات مرورية؟', answer: 'لا، يجب على البائع سداد جميع المخالفات المرورية قبل نقل الملكية. نظام أبشر يمنع النقل تلقائياً إذا كانت هناك مخالفات معلقة. تحقق من المخالفات قبل الشراء عبر أبشر أو تطبيق توكلنا.' },
  { question: 'ما هي أشهر عمليات الاحتيال عند شراء سيارة مستعملة في السعودية؟', answer: 'تشمل: (1) العبث بعداد المسافة (الأودوميتر). (2) إخفاء تاريخ الحوادث — سيارات تم إعلانها خسارة كاملة من نجم. (3) المخالفات غير المدفوعة. (4) سيارات التصدير فقط. (5) التلاعب برقم الشاصي. استخدم تقرير نجم وتحقق من رقم الهيكل.' },
  { question: 'هل فحص السيارة قبل الشراء إلزامي؟', answer: 'غير إلزامي قانونياً لكنه موصى به بشدة. اصطحب السيارة لميكانيكي موثوق للفحص قبل الشراء. تحقق من: المحرك، ناقل الحركة، المكيف (حيوي في الصيف السعودي)، المكابح، والأنظمة الإلكترونية.' },
  { question: 'هل تقدم Sauditoolhub حاسبة تكلفة السيارة المستعملة؟', answer: 'نعم، تقدم Sauditoolhub حاسبة مجانية لتكلفة السيارة المستعملة. أدخل سعر السيارة وسعة المحرك لترى تفصيل كامل يشمل رسوم نقل الملكية، تكلفة الاستمارة، قسط التأمين، ورسوم الفحص الدوري.' }
]

function EnContent() {
  return (
    <article className="prose prose-invert max-w-none prose-headings:text-desert-primary prose-a:text-desert-primary prose-strong:text-white prose-li:text-gray-300">
      <h1>The Complete Guide to Buying a Used Car & Naql Malikiya Fees in Saudi Arabia 2026</h1>

      <div className="not-prose glass p-6 rounded-xl mb-8">
        <p className="text-gray-300 text-lg leading-relaxed">
          You have found the perfect used car on Haraj or Sayyala. The price is right, the mileage seems reasonable, and the photos look clean. But before you hand over any money, there is a maze of hidden costs lurking beneath the surface — Naql Malikiya transfer fees that vary by engine size, mandatory insurance premiums that can surprise first-time buyers, Fahas inspection costs, Istimara renewal fees, and the ever-present risk of unpaid traffic fines tied to the car.
        </p>
        <p className="text-gray-300 text-lg leading-relaxed mt-4">
          The used car market in Saudi Arabia is booming, with hundreds of thousands of vehicles changing hands every year through platforms like Haraj, Sayyala, and OpenSooq. But for every legitimate sale, there are stories of buyers who discovered after the purchase that the odometer had been tampered with, the car had been declared a total loss by Najm, or the seller had accumulated thousands of riyals in unpaid Saher fines that became the new owners problem.
        </p>
        <p className="text-gray-300 text-lg leading-relaxed mt-4">
          This guide covers everything you need to know about buying a used car in Saudi Arabia in 2026: Naql Malikiya fees for every engine category, Istimara renewal costs, mandatory insurance requirements, Fahas periodic inspection fees, the step-by-step Absher transfer process, real-life cost examples, and the most common scams to avoid. Use our free{' '}
          <Link href="/used-car-calculator" className="text-desert-primary font-bold underline">Used Car Cost Calculator</Link>{' '}
          to calculate the exact final price before you negotiate.
        </p>
      </div>

      <h2>What is Naql Malikiya (Ownership Transfer)?</h2>
      <p>
        Naql Malikiya, literally translating to "ownership transfer," is the official legal process of changing a vehicles registered owner from the seller to the buyer in Saudi Arabia. This process is managed entirely through the{' '}
        <strong>Absher</strong> platform, the Ministry of Interior's digital services portal. Without completing Naql Malikiya, the buyer has no legal ownership of the vehicle regardless of how much money changed hands.
      </p>
      <p>
        The transfer process requires both the seller and the buyer to have active Absher accounts. The seller initiates the transfer, enters the buyers ID or Iqama number, selects the vehicle, agrees to the terms, and pays the transfer fee. The buyer then logs into Absher, reviews the pending transfer request, and accepts it. Once accepted, the new owner can immediately download a temporary Istimara (vehicle registration card) from Absher.
      </p>

      <div className="not-prose glass p-5 rounded-xl mb-6">
        <h3 className="text-desert-primary font-semibold mb-3">Buyer vs. Seller Responsibilities</h3>
        <div className="bg-[#0A0E1A] p-4 rounded-lg text-gray-300 text-sm">
          <table className="w-full">
            <thead>
              <tr className="text-white border-b border-gray-700">
                <th className="text-left py-2">Aspect</th>
                <th className="text-left py-2">Seller Responsibility</th>
                <th className="text-left py-2">Buyer Responsibility</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-gray-700/50"><td className="py-2">Naql Malikiya Fee</td><td className="py-2 text-yellow-400">Pays the transfer fee</td><td className="py-2 text-green-400">None (free to accept)</td></tr>
              <tr className="border-b border-gray-700/50"><td className="py-2">Traffic Fines</td><td className="py-2 text-yellow-400">Must clear all outstanding fines</td><td className="py-2 text-green-400">Verify via Absher before payment</td></tr>
              <tr className="border-b border-gray-700/50"><td className="py-2">Istimara</td><td className="py-2 text-yellow-400">Must provide valid Istimara</td><td className="py-2 text-yellow-400">Renew after transfer if needed</td></tr>
              <tr className="border-b border-gray-700/50"><td className="py-2">Insurance</td><td className="py-2 text-gray-400">Can cancel their policy</td><td className="py-2 text-yellow-400">Must obtain new policy before transfer</td></tr>
              <tr><td className="py-2">Fahas Inspection</td><td className="py-2 text-gray-400">Valid inspection can transfer</td><td className="py-2 text-yellow-400">Renew if expired</td></tr>
            </tbody>
          </table>
        </div>
      </div>

      <h2>Detailed Breakdown of Used Car Costs in KSA (2026 Rules)</h2>
      <p>
        When budgeting for a used car, the sticker price is just the beginning. Here is every cost you need to account for:
      </p>

      <div className="not-prose glass p-5 rounded-xl mb-6">
        <h3 className="text-desert-primary font-semibold mb-3">1. Naql Malikiya (Transfer Fee) — Payable by the Seller</h3>
        <div className="bg-[#0A0E1A] p-4 rounded-lg text-gray-300 text-sm">
          <table className="w-full">
            <thead>
              <tr className="text-white border-b border-gray-700">
                <th className="text-left py-2">Engine Capacity</th>
                <th className="text-left py-2">Transfer Fee</th>
                <th className="text-left py-2">Typical Cars</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-gray-700/50"><td className="py-2">Under 1600cc</td><td className="py-2 text-desert-gold">150 SAR</td><td className="py-2 text-gray-400">Toyota Yaris, Honda City, Nissan Sunny, Kia Picanto</td></tr>
              <tr className="border-b border-gray-700/50"><td className="py-2">1601cc - 2000cc</td><td className="py-2 text-desert-gold">300 SAR</td><td className="py-2 text-gray-400">Toyota Corolla, Honda Civic, Mazda 6, Kia Cerato</td></tr>
              <tr><td className="py-2">Over 2000cc</td><td className="py-2 text-desert-gold">500 SAR</td><td className="py-2 text-gray-400">Toyota Camry V6, Ford Explorer, Nissan Patrol, Lexus</td></tr>
            </tbody>
          </table>
        </div>
        <p className="text-gray-400 text-xs mt-2">Note: While the seller pays the fee, it is common practice for the seller to include this cost in the negotiated price. Use our calculator to see the impact.</p>
      </div>

      <div className="not-prose glass p-5 rounded-xl mb-6">
        <h3 className="text-desert-primary font-semibold mb-3">2. Istimara (Vehicle Registration) Renewal</h3>
        <p className="text-gray-300 text-sm mb-3">
          The Istimara is the official vehicle registration card. If the current Istimara is expiring soon, factor in renewal costs:
        </p>
        <div className="bg-[#0A0E1A] p-4 rounded-lg text-gray-300 text-sm">
          <table className="w-full">
            <thead>
              <tr className="text-white border-b border-gray-700">
                <th className="text-left py-2">Duration</th>
                <th className="text-left py-2">Fee</th>
                <th className="text-left py-2">Notes</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-gray-700/50"><td className="py-2">1 Year</td><td className="py-2 text-desert-gold">300 SAR</td><td className="py-2 text-gray-400">Standard renewal period</td></tr>
              <tr className="border-b border-gray-700/50"><td className="py-2">2 Years</td><td className="py-2 text-desert-gold">600 SAR</td><td className="py-2 text-gray-400">Saves time (recommended)</td></tr>
              <tr><td className="py-2">Late Renewal Penalty</td><td className="py-2 text-red-400">100-200 SAR</td><td className="py-2 text-gray-400">After expiry date</td></tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="not-prose glass p-5 rounded-xl mb-6">
        <h3 className="text-desert-primary font-semibold mb-3">3. Mandatory Insurance (Third-Party vs. Comprehensive)</h3>
        <p className="text-gray-300 text-sm mb-3">
          All vehicles in Saudi Arabia must have valid insurance before the Naql Malikiya transfer can proceed. You have two options:
        </p>
        <div className="bg-[#0A0E1A] p-4 rounded-lg text-gray-300 text-sm">
          <table className="w-full">
            <thead>
              <tr className="text-white border-b border-gray-700">
                <th className="text-left py-2">Insurance Type</th>
                <th className="text-left py-2">Annual Cost</th>
                <th className="text-left py-2">Coverage</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-gray-700/50"><td className="py-2">Third-Party (Mandatory)</td><td className="py-2">600 - 1,000 SAR</td><td className="py-2 text-gray-400">Covers damage to other vehicles/property</td></tr>
              <tr><td className="py-2">Comprehensive</td><td className="py-2">2-3% of car value per year</td><td className="py-2 text-gray-400">Covers your vehicle too, including theft, fire, and accidents</td></tr>
            </tbody>
          </table>
        </div>
        <p className="text-gray-300 text-sm mt-2">
          For a car worth 40,000 SAR, comprehensive insurance costs 800-1,200 SAR per year. Comparing rates on platforms like Taminy, Careem Insurance, or Amana Insurance can save you 10-20%.
        </p>
      </div>

      <div className="not-prose glass p-5 rounded-xl mb-6">
        <h3 className="text-desert-primary font-semibold mb-3">4. Periodic Inspection (Fahas Doury)</h3>
        <p className="text-gray-300 text-sm mb-3">
          All vehicles in Saudi Arabia must pass a mandatory periodic inspection (Fahas Doury) every year (private cars) or every 6 months (commercial and older vehicles). If the car you are buying has an expired Fahas, you will need to get it inspected before renewing the Istimara.
        </p>
        <div className="bg-[#0A0E1A] p-4 rounded-lg text-gray-300 text-sm">
          <table className="w-full">
            <thead>
              <tr className="text-white border-b border-gray-700">
                <th className="text-left py-2">Inspection Center</th>
                <th className="text-left py-2">Approximate Fee</th>
                <th className="text-left py-2">Locations</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-gray-700/50"><td className="py-2">Al-Fahhas</td><td className="py-2">80 - 100 SAR</td><td className="py-2 text-gray-400">Riyadh, Jeddah, Dammam, Makkah</td></tr>
              <tr className="border-b border-gray-700/50"><td className="py-2">Al-Mani</td><td className="py-2">75 - 95 SAR</td><td className="py-2 text-gray-400">Riyadh, Jeddah, Medina, Buraydah</td></tr>
              <tr className="border-b border-gray-700/50"><td className="py-2">Al-Majal</td><td className="py-2">80 - 100 SAR</td><td className="py-2 text-gray-400">Riyadh, Jeddah, Dammam</td></tr>
              <tr><td className="py-2">Other Centers</td><td className="py-2">70 - 150 SAR</td><td className="py-2 text-gray-400">Various cities across KSA</td></tr>
            </tbody>
          </table>
        </div>
      </div>

      <h2>Step-by-Step Guide to Buying a Used Car</h2>

      <div className="not-prose glass p-5 rounded-xl mb-6">
        <div className="space-y-4">
          <div className="bg-[#0A0E1A] p-4 rounded-lg">
            <p className="text-white font-semibold mb-2">Step 1: Physical &amp; Mechanical Inspection (Fahas)</p>
            <p className="text-gray-300 text-sm">Before any money changes hands, inspect the car thoroughly. Check the exterior for mismatched paint (sign of repair), the undercarriage for rust or structural damage, the engine bay for leaks or tampering, and the interior for excessive wear. Take the car to a trusted mechanic for a professional pre-purchase inspection. Services like Fahas Mobile offer on-site comprehensive inspections including computer diagnostics.</p>
          </div>
          <div className="bg-[#0A0E1A] p-4 rounded-lg">
            <p className="text-white font-semibold mb-2">Step 2: Check Accident History (Najm) &amp; Unpaid Fines (Saher)</p>
            <p className="text-gray-300 text-sm">Use the Najm app or website to run an accident history report using the chassis number (VIN). This will reveal if the car was ever declared a total loss. Then check for unpaid Saher traffic fines using Absher or the Ministry of Interior portal. Any outstanding fines will block the transfer. Our{' '}
              <Link href="/traffic-fine-calculator" className="text-desert-primary underline">Traffic Fine Calculator</Link> can help you estimate potential costs.</p>
          </div>
          <div className="bg-[#0A0E1A] p-4 rounded-lg">
            <p className="text-white font-semibold mb-2">Step 3: Agree on Price &amp; Payment Method</p>
            <p className="text-gray-300 text-sm">Once inspection is complete and history is clean, negotiate the final price. Bank transfer is recommended for amounts over 10,000 SAR as it provides a clear paper trail. Use our{' '}
              <Link href="/used-car-calculator" className="text-desert-primary underline">Used Car Cost Calculator</Link> to determine the true all-in cost before making your final offer.</p>
          </div>
          <div className="bg-[#0A0E1A] p-4 rounded-lg">
            <p className="text-white font-semibold mb-2">Step 4: Execute the Transfer on Absher</p>
            <p className="text-gray-300 text-sm">The seller initiates the transfer on Absher (My Services &gt; Traffic Services &gt; Vehicle Ownership Transfer), enters your ID number, and pays the fee. You log into your Absher, go to Pending Requests, and accept the transfer. Download the temporary Istimara immediately. The physical Istimara card will be delivered by Saudi Post to your registered address within 7-14 days.</p>
          </div>
        </div>
      </div>

      <h2>Real-Life Cost Examples</h2>

      <div className="not-prose glass p-5 rounded-xl mb-6">
        <h3 className="text-desert-primary font-semibold mb-3">Example 1: Toyota Corolla (1600cc) — Price: 40,000 SAR</h3>
        <div className="bg-[#0A0E1A] p-4 rounded-lg text-gray-300 text-sm">
          <table className="w-full">
            <thead>
              <tr className="text-white border-b border-gray-700">
                <th className="text-left py-2">Cost Item</th>
                <th className="text-right py-2">Amount (SAR)</th>
                <th className="text-right py-2">Paid By</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-gray-700/50"><td className="py-2">Negotiated Car Price</td><td className="py-2 text-right">40,000</td><td className="py-2 text-right text-yellow-400">Buyer</td></tr>
              <tr className="border-b border-gray-700/50"><td className="py-2">Naql Malikiya (1600cc = 150 SAR)</td><td className="py-2 text-right">150</td><td className="py-2 text-right text-yellow-400">Seller</td></tr>
              <tr className="border-b border-gray-700/50"><td className="py-2">Istimara Renewal (1 year)</td><td className="py-2 text-right">300</td><td className="py-2 text-right text-yellow-400">Buyer</td></tr>
              <tr className="border-b border-gray-700/50"><td className="py-2">Insurance (Third-Party, estimated)</td><td className="py-2 text-right">800</td><td className="py-2 text-right text-yellow-400">Buyer</td></tr>
              <tr className="border-b border-gray-700/50"><td className="py-2">Fahas Inspection (if expired)</td><td className="py-2 text-right">90</td><td className="py-2 text-right text-yellow-400">Buyer</td></tr>
              <tr className="font-bold"><td className="py-2 text-white">Total Cost for Buyer</td><td className="py-2 text-right text-desert-gold">41,190</td><td className="py-2 text-right text-green-400">+1,190 above price</td></tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="not-prose glass p-5 rounded-xl mb-6">
        <h3 className="text-desert-primary font-semibold mb-3">Example 2: Ford Explorer V6 (&gt;2000cc) — Price: 80,000 SAR</h3>
        <div className="bg-[#0A0E1A] p-4 rounded-lg text-gray-300 text-sm">
          <table className="w-full">
            <thead>
              <tr className="text-white border-b border-gray-700">
                <th className="text-left py-2">Cost Item</th>
                <th className="text-right py-2">Amount (SAR)</th>
                <th className="text-right py-2">Paid By</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-gray-700/50"><td className="py-2">Negotiated Car Price</td><td className="py-2 text-right">80,000</td><td className="py-2 text-right text-yellow-400">Buyer</td></tr>
              <tr className="border-b border-gray-700/50"><td className="py-2">Naql Malikiya (&gt;2000cc = 500 SAR)</td><td className="py-2 text-right">500</td><td className="py-2 text-right text-yellow-400">Seller</td></tr>
              <tr className="border-b border-gray-700/50"><td className="py-2">Istimara Renewal (2 years)</td><td className="py-2 text-right">600</td><td className="py-2 text-right text-yellow-400">Buyer</td></tr>
              <tr className="border-b border-gray-700/50"><td className="py-2">Insurance (Comprehensive, 2.5% of value)</td><td className="py-2 text-right">2,000</td><td className="py-2 text-right text-yellow-400">Buyer</td></tr>
              <tr className="border-b border-gray-700/50"><td className="py-2">Fahas Inspection</td><td className="py-2 text-right">100</td><td className="py-2 text-right text-yellow-400">Buyer</td></tr>
              <tr className="font-bold"><td className="py-2 text-white">Total Cost for Buyer</td><td className="py-2 text-right text-desert-gold">82,700</td><td className="py-2 text-right text-green-400">+2,700 above price</td></tr>
            </tbody>
          </table>
        </div>
      </div>

      <h2>Hidden Costs &amp; Common Scams to Avoid</h2>

      <div className="not-prose glass p-5 rounded-xl mb-6">
        <div className="space-y-4">
          <div className="bg-[#0A0E1A] p-4 rounded-lg">
            <h4 className="text-red-400 font-semibold mb-2">Total Loss / Accident History Concealment</h4>
            <p className="text-gray-300 text-sm">Some sellers conceal the fact that their car was declared a total loss by Najm. Such cars have severe structural damage and are unsafe to drive. Always run a Najm accident report using the VIN before paying. A Najm report costs approximately 50-120 SAR and reveals all registered accident claims.</p>
          </div>
          <div className="bg-[#0A0E1A] p-4 rounded-lg">
            <h4 className="text-red-400 font-semibold mb-2">Odometer (Mileage) Tampering</h4>
            <p className="text-gray-300 text-sm">Odometer rollback is one of the most common scams in the Saudi used car market. A car with 200,000 km can be rolled back to 80,000 km, increasing its value by thousands of riyals. Signs of tampering include: loose or crooked digits on the odometer, wear on pedals and steering wheel that does not match the displayed mileage, and service records that contradict the mileage.</p>
          </div>
          <div className="bg-[#0A0E1A] p-4 rounded-lg">
            <h4 className="text-red-400 font-semibold mb-2">Unpaid Traffic Fines (Saher Violations)</h4>
            <p className="text-gray-300 text-sm">The seller may have accumulated thousands of riyals in Saher traffic fines that are tied to the vehicles Istimara. If not cleared before the transfer, these fines can become the buyers responsibility. Always check for outstanding fines on Absher before completing the purchase. Our{' '}
              <Link href="/traffic-fine-calculator" className="text-desert-primary underline">Traffic Fine Calculator</Link> can help you understand the cost of common violations.</p>
          </div>
          <div className="bg-[#0A0E1A] p-4 rounded-lg">
            <h4 className="text-red-400 font-semibold mb-2">Export-Only Vehicles</h4>
            <p className="text-gray-300 text-sm">Some cars are imported to Saudi Arabia temporarily (transit plates) and are not eligible for Saudi registration. These cars have non-Saudi specifications and may not pass the Fahas inspection. Verify that the car has a valid Saudi Istimara and was originally registered in the Kingdom.</p>
          </div>
        </div>
      </div>

      <h2>How to Use the Sauditoolhub Used Car Cost Calculator</h2>
      <p>
        Our free{' '}
        <Link href="/used-car-calculator" className="text-desert-primary font-bold underline">Used Car Cost Calculator</Link>{' '}
        helps you calculate the exact final price before you negotiate. Here is how it works:
      </p>

      <div className="not-prose glass p-5 rounded-xl mb-6">
        <div className="space-y-4">
          <div className="bg-[#0A0E1A] p-4 rounded-lg">
            <p className="text-white font-semibold mb-2">Step 1: Enter the Asking Price</p>
            <p className="text-gray-300 text-sm">Input the negotiated car price you expect to pay the seller.</p>
          </div>
          <div className="bg-[#0A0E1A] p-4 rounded-lg">
            <p className="text-white font-semibold mb-2">Step 2: Select Engine Size</p>
            <p className="text-gray-300 text-sm">Choose the engine capacity category to calculate the Naql Malikiya fee.</p>
          </div>
          <div className="bg-[#0A0E1A] p-4 rounded-lg">
            <p className="text-white font-semibold mb-2">Step 3: Choose Insurance &amp; Istimara Preferences</p>
            <p className="text-gray-300 text-sm">Select third-party or comprehensive insurance and choose 1-year or 2-year Istimara renewal.</p>
          </div>
          <div className="bg-[#0A0E1A] p-4 rounded-lg">
            <p className="text-white font-semibold mb-2">Step 4: Get Your All-In Cost</p>
            <p className="text-gray-300 text-sm">The calculator displays a complete breakdown with the total cost, allowing you to negotiate with full knowledge of all fees involved.</p>
          </div>
        </div>
      </div>

      <div className="not-prose glass p-6 rounded-xl mb-8 mt-8 text-center">
        <h3 className="text-desert-gold font-semibold mb-3">Never Overpay for a Used Car Again</h3>
        <p className="text-gray-300 mb-4">
          Use the{' '}
          <Link href="/used-car-calculator" className="text-desert-primary font-bold underline">Sauditoolhub Used Car Cost Calculator</Link>{' '}
          to calculate the complete cost before you negotiate. Also check our{' '}
          <Link href="/traffic-fine-calculator" className="text-desert-primary underline">Traffic Fine Calculator</Link>{' '}
          for Saher violations and{' '}
          <Link href="/fuel-cost-calculator" className="text-desert-primary underline">Fuel Cost Calculator</Link>{' '}
          to estimate your monthly running costs.
        </p>
        <p className="text-gray-400 text-sm">
          Visit our <Link href="/blog" className="text-desert-primary underline">blog</Link> for more guides on car ownership and personal finance in Saudi Arabia.
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
        Buying a used car in Saudi Arabia can be a rewarding experience if you go in prepared. Understanding the full cost structure — from Naql Malikiya fees and Istimara renewal to mandatory insurance and Fahas inspection — is essential to making an informed decision. Always inspect the car thoroughly, run a Najm accident report, check for unpaid Saher fines, and never complete the purchase outside the official Absher transfer system.
      </p>
      <p>
        Remember, the cheapest car is not always the best deal. A car with a clean accident history, verified mileage, and clear fines is worth paying a premium for. Use our{' '}
        <Link href="/used-car-calculator" className="text-desert-primary font-bold underline">Used Car Cost Calculator</Link>{' '}
        to calculate your all-in cost and negotiate with confidence. Happy car hunting in Saudi Arabia!
      </p>
    </article>
  )
}
const faqsUr = [
  { question: 'نقل ملکیت کیا ہے اور سعودی عرب میں اس کی فیس کتنی ہے؟', answer: 'نقل ملکیت گاڑی کی ملکیت بیچنے والے سے خریدار کو منتقل کرنے کا قانونی عمل ہے جو أبشر پلیٹ فارم کے ذریعے کیا جاتا ہے۔ فیس انجن کے سائز پر منحصر ہے: 150 ریال 1600cc سے کم کے لیے، 300 ریال 1601-2000cc کے لیے، اور 500 ریال 2000cc سے زائد کے لیے۔' },
  { question: 'سعودی عرب میں استعمال شدہ گاڑی خریدنے کے لیے کون سی دستاویزات درکار ہیں؟', answer: 'آپ کو چاہیے: (1) سعودی قومی شناخت یا اقامہ۔ (2) فعال أبشر اکاؤنٹ۔ (3) ڈرائیونگ لائسنس۔ (4) انشورنس پالیسی۔ (5) بینک ٹرانسفر کی رسید۔ (6) بیچنے والے سے اصل استمارہ۔' },
  { question: 'سعودی عرب میں استمارہ تجدید کی قیمت کتنی ہے؟', answer: 'استمارہ تجدید کی فیس 300 ریال ایک سال کے لیے اور 600 ریال دو سال کے لیے ہے۔ یہ أبشر، سبل، یا اے ٹی ایم کے ذریعے ادا کی جاتی ہے۔ تاخیر پر جرمانہ 100 ریال پہلے سال اور 200 ریال اگلے سالوں کے لیے ہے۔' },
  { question: 'دوری معائنہ (فحص) کیا ہے اور اس کی قیمت کتنی ہے؟', answer: 'دوری معائنہ ایک لازمی تکنیکی معائنہ ہے جو سعودی عرب میں تمام گاڑیوں کو پاس کرنا ہوتا ہے۔ قیمت 70 سے 150 ریال تک ہوتی ہے۔ اہم مراکز میں الفحص، المعنی، اور المجال شامل ہیں۔ یہ پرائیویٹ کاروں کے لیے ایک سال اور کمرشل گاڑیوں کے لیے 6 ماہ کے لیے درست ہے۔' },
  { question: 'استعمال شدہ گاڑی کے لیے انشورنس کی قیمت کتنی ہے؟', answer: 'تیسرے فریق کا انشورنس لازمی ہے اور اس کی قیمت 600-1,000 ریال سالانہ ہے۔ جامع انشورنس کی قیمت گاڑی کی قیمت کا 2-3% سالانہ ہے — 40,000 ریال کی گاڑی کے لیے 800-1,200 ریال سالانہ۔' },
  { question: 'أبشر کے ذریعے گاڑی کی ملکیت کیسے منتقل کریں؟', answer: 'بیچنے والا أبشر میں لاگ ان کرکے ٹرانسفر شروع کرتا ہے: میری خدمات > ٹریفک سروسز > گاڑی کی ملکیت کی منتقلی۔ خریدار کا ID نمبر درج کرتا ہے، شرائط سے اتفاق کرتا ہے، اور فیس ادا کرتا ہے۔ خریدار أبشر میں لاگ ان کرکے درخواست قبول کرتا ہے۔' },
  { question: 'کیا ٹریفک جرمانے کی صورت میں گاڑی کی ملکیت منتقل ہو سکتی ہے؟', answer: 'نہیں، بیچنے والے کو تمام جرمانے ادا کرنے ہوں گے۔ أبشر خود بخود ٹرانسفر کو روک دیتا ہے اگر جرمانے باقی ہوں۔ خریداری سے پہلے ہمارے ٹریفک فائن کیلکولیٹر سے جرمانے چیک کریں۔' },
  { question: 'استعمال شدہ گاڑی خریدنے میں عام فراڈ کون سے ہیں؟', answer: 'عام فراڈ میں شامل ہیں: (1) اوڈومیٹر سے چھیڑ چھاڑ۔ (2) حادثے کی تاریخ چھپانا۔ (3) نامعلوم ٹریفک جرمانے۔ (4) ایکسپورٹ والی گاڑیاں۔ (5) VIN نمبر سے چھیڑ چھاڑ۔ ہمیشہ نجم رپورٹ چیک کریں۔' },
  { question: 'خریداری سے پہلے ٹیسٹ ڈرائیو لینا ضروری ہے؟', answer: 'قانونی طور پر لازمی نہیں لیکن سختی سے سفارش کی جاتی ہے۔ گاڑی کو کسی قابل اعتماد مکینک کے پاس لے جائیں۔ انجن، ٹرانسمیشن، اے سی (سعودی گرمیوں میں ضروری)، بریک اور سسپنشن چیک کریں۔' },
  { question: 'کیا Sauditoolhub استعمال شدہ گاڑی کے اخراجات کا کیلکولیٹر پیش کرتا ہے؟', answer: 'ہاں، Sauditoolhub مفت استعمال شدہ گاڑی کے اخراجات کا کیلکولیٹر پیش کرتا ہے۔ گاڑی کی قیمت اور انجن کا سائز درج کریں تاکہ نقل ملکیت، استمارہ، انشورنس اور فحص کی مکمل تفصیل دیکھ سکیں۔' }
]

const faqsTl = [
  { question: 'Ano ang Naql Malikiya at magkano ang halaga nito sa Saudi Arabia?', answer: 'Ang Naql Malikiya ay ang legal na proseso ng paglilipat ng pagmamay-ari ng sasakyan mula sa seller patungo sa buyer sa pamamagitan ng Absher platform. Ang bayad ay depende sa laki ng makina: 150 SAR para sa ilalim ng 1600cc, 300 SAR para sa 1601-2000cc, at 500 SAR para sa higit sa 2000cc.' },
  { question: 'Anong mga dokumento ang kailangan para bumili ng used car sa Saudi Arabia?', answer: 'Kailangan mo: (1) Saudi National ID o Iqama. (2) Aktibong Absher account. (3) Lisensya sa pagmamaneho. (4) Insurance policy. (5) Bank transfer receipt. (6) Orihinal na Istimara mula sa seller.' },
  { question: 'Magkano ang Istimara renewal sa Saudi Arabia?', answer: 'Ang Istimara renewal ay nagkakahalaga ng 300 SAR para sa isang taon at 600 SAR para sa dalawang taon. Maaaring bayaran sa pamamagitan ng Absher, Sabil, o ATM. Ang penalty para sa huling pag-renew ay 100 SAR para sa unang taon at 200 SAR para sa mga susunod na taon.' },
  { question: 'Ano ang periodic inspection (Fahas) at magkano ito?', answer: 'Ang periodic inspection ay isang mandatoryong teknikal na inspeksyon na dapat ipasa ng lahat ng sasakyan. Nagkakahalaga ito ng 70-150 SAR depende sa inspection center. Kabilang sa mga pangunahing sentro ang Al-Fahhas, Al-Mani, at Al-Majal.' },
  { question: 'Magkano ang insurance para sa used car sa Saudi Arabia?', answer: 'Ang third-party insurance ay nagkakahalaga ng 600-1,000 SAR bawat taon. Ang comprehensive insurance ay 2-3% ng halaga ng sasakyan taun-taon. Para sa 40,000 SAR na sasakyan, ang comprehensive ay 800-1,200 SAR bawat taon.' },
  { question: 'Paano ilipat ang pagmamay-ari ng sasakyan gamit ang Absher?', answer: 'Sinimulan ng seller ang transfer sa Absher: My Services &gt; Traffic Services &gt; Vehicle Ownership Transfer. Inilalagay ang ID number ng buyer at binabayaran ang fee. Tatanggapin ng buyer ang transfer sa pamamagitan ng pag-log in sa Absher.' },
  { question: 'Maaari bang ilipat ang sasakyan kung may hindi pa bayad na traffic fines?', answer: 'Hindi, dapat bayaran ng seller ang lahat ng traffic fines bago ang transfer. Awtomatikong haharangin ng Absher ang transfer kung may outstanding fines. Gamitin ang Traffic Fine Calculator para sa pagtantiya.' },
  { question: 'Ano ang mga karaniwang scam sa pagbili ng used car?', answer: 'Kabilang sa mga scam: (1) Odometer tampering. (2) Pagtatago ng accident history. (3) Hindi nabayarang traffic fines. (4) Export-only na sasakyan. (5) VIN tampering. Palaging kumuha ng Najm report bago bumili.' },
  { question: 'Kailangan ba ng test drive bago bumili ng used car?', answer: 'Hindi legal na kinakailangan ngunit lubos na inirerekomenda. Dalhin ang sasakyan sa isang pinagkakatiwalaang mekaniko para sa inspeksyon bago bumili. Suriin ang makina, transmission, air conditioning, preno, at suspension.' },
  { question: 'May used car cost calculator ba ang Sauditoolhub?', answer: 'Oo, nag-aalok ang Sauditoolhub ng libreng Used Car Cost Calculator. Ilagay ang presyo ng sasakyan at laki ng makina para makita ang kumpletong breakdown ng Naql Malikiya, Istimara, insurance, at inspection fees.' }
]

const faqsBn = [
  { question: 'নাকল মালিকিয়া কী এবং সৌদি আরবে এর খরচ কত?', answer: 'নাকল মালিকিয়া হলো গাড়ির মালিকানা বিক্রেতা থেকে ক্রেতার কাছে হস্তান্তরের আইনি প্রক্রিয়া যা আবশের প্ল্যাটফর্মের মাধ্যমে সম্পন্ন হয়। ফি ইঞ্জিনের আকারের উপর নির্ভর করে: ১৫০ SAR ১৬০০cc-এর নিচে, ৩০০ SAR ১৬০১-২০০০cc, এবং ৫০০ SAR ২০০০cc-এর উপরে।' },
  { question: 'সৌদি আরবে ব্যবহৃত গাড়ি কিনতে কী কী ডকুমেন্ট দরকার?', answer: 'আপনার প্রয়োজন: (১) সৌদি ন্যাশনাল আইডি বা ইকামা। (২) সক্রিয় আবশের অ্যাকাউন্ট। (৩) ড্রাইভিং লাইসেন্স। (৪) ইন্সুরেন্স পলিসি। (৫) ব্যাংক ট্রান্সফার রশিদ। (৬) বিক্রেতার কাছ থেকে মূল ইসতিমারা।' },
  { question: 'সৌদি আরবে ইসতিমারা নবীকরণের খরচ কত?', answer: 'ইসতিমারা নবীকরণের ফি ৩০০ SAR এক বছরের জন্য এবং ৬০০ SAR দুই বছরের জন্য। এটি আবশের, সাবিল বা এটিএম-এর মাধ্যমে দেওয়া যায়। বিলম্বের জরিমানা ১০০ SAR প্রথম বছরের জন্য এবং ২০০ SAR পরবর্তী বছরের জন্য।' },
  { question: 'পর্যায়ক্রমিক পরিদর্শন (ফাহাস) কী এবং এর খরচ কত?', answer: 'পর্যায়ক্রমিক পরিদর্শন একটি বাধ্যতামূলক প্রযুক্তিগত পরীক্ষা যা সৌদি আরবের সব গাড়িকে পাস করতে হয়। খরচ ৭০-১৫০ SAR পর্যন্ত হয়। প্রধান কেন্দ্রগুলির মধ্যে আল-ফাহাস, আল-মানি এবং আল-মাজাল অন্তর্ভুক্ত।' },
  { question: 'ব্যবহৃত গাড়ির জন্য ইন্সুরেন্সের খরচ কত?', answer: 'থার্ড-পার্টি ইন্সুরেন্স বাধ্যতামূলক এবং এর খরচ ৬০০-১,০০০ SAR বার্ষিক। কম্প্রিহেনসিভ ইন্সুরেন্সের খরচ গাড়ির মূল্যের ২-৩% বার্ষিক — ৪০,০০০ SAR গাড়ির জন্য ৮০০-১,২০০ SAR বার্ষিক।' },
  { question: 'আবশের ব্যবহার করে কীভাবে গাড়ির মালিকানা হস্তান্তর করবেন?', answer: 'বিক্রেতা আবশেরে ট্রান্সফার শুরু করেন: মাই সার্ভিসেস > ট্রাফিক সার্ভিসেস > ভেহিকেল ওনারশিপ ট্রান্সফার। ক্রেতার আইডি নম্বর দেন এবং ফি দেন। ক্রেতা আবশেরে লগ ইন করে অনুরোধ গ্রহণ করেন।' },
  { question: 'বকেয়া ট্রাফিক জরিমানা থাকলে কি গাড়ি হস্তান্তর সম্ভব?', answer: 'না, হস্তান্তরের আগে বিক্রেতাকে সমস্ত ট্রাফিক জরিমানা পরিশোধ করতে হবে। বকেয়া জরিমানা থাকলে আবশের স্বয়ংক্রিয়ভাবে স্থানান্তর বন্ধ করে দেয়। কেনার আগে ট্রাফিক ফাইন ক্যালকুলেটর ব্যবহার করে জরিমানা চেক করুন।' }
]


function ArContent() {
  return (
    <article className="prose prose-invert max-w-none prose-headings:text-desert-primary prose-a:text-desert-primary prose-strong:text-white prose-li:text-gray-300" dir="rtl">
      <h1>الدليل الكامل لشراء سيارة مستعملة ورسوم نقل الملكية في السعودية 2026</h1>

      <div className="not-prose glass p-6 rounded-xl mb-8">
        <p className="text-gray-300 text-lg leading-relaxed">
          لقد وجدت السيارة المستعملة المثالية على حراج أو سيالة. السعر مناسب، عدد الكيلومترات معقول، والصور تبدو نظيفة. ولكن قبل أن تدفع أي مبلغ، هناك متاهة من التكاليف الخفية تنتظرك — رسوم نقل الملكية التي تختلف حسب سعة المحرك، أقساط التأمين الإلزامي التي قد تفاجئ المشترين الجدد، تكاليف الفحص الدوري، رسوم تجديد الاستمارة، وخطر المخالفات المرورية غير المسددة المرتبطة بالسيارة.
        </p>
        <p className="text-gray-300 text-lg leading-relaxed mt-4">
          سوق السيارات المستعملة في السعودية يشهد ازدهاراً كبيراً، حيث يتم تداول مئات الآلاف من المركبات سنوياً عبر منصات مثل حراج وسيالة وأوبن سوق. ولكن مقابل كل صفقة شرعية، هناك قصص لمشترين اكتشفوا بعد الشراء أن عداد المسافة قد تم العبث به، أو أن السيارة أعلنت خسارة كاملة من نجم، أو أن البائع تراكمت عليه آلاف الريالات من مخالفات ساهر غير المسددة.
        </p>
        <p className="text-gray-300 text-lg leading-relaxed mt-4">
          يغطي هذا الدليل كل ما تحتاج معرفته عن شراء سيارة مستعملة في المملكة العربية السعودية 2026: رسوم نقل الملكية لكل فئة محرك، تكاليف تجديد الاستمارة، متطلبات التأمين الإلزامي، رسوم الفحص الدوري، خطوات النقل عبر أبشر، أمثلة واقعية للتكاليف، وأكثر عمليات الاحتيال شيوعاً التي يجب تجنبها. استخدم{' '}
          <Link href="/used-car-calculator" className="text-desert-primary font-bold underline">حاسبة تكلفة السيارة المستعملة</Link>{' '}
          المجانية من Sauditoolhub لحساب السعر النهائي قبل التفاوض.
        </p>
      </div>

      <h2>ما هي رسوم نقل الملكية في السعودية؟</h2>
      <p>
        نقل الملكية هو العملية القانونية الرسمية لنقل ملكية المركبة من البائع إلى المشتري. تتم العملية بالكامل عبر منصة <strong>أبشر</strong> الإلكترونية التابعة لوزارة الداخلية. بدون إتمام نقل الملكية، لا يملك المشتري أي حق قانوني في السيارة بغض النظر عن المبلغ الذي دفع.
      </p>
      <p>
        تتطلب عملية النقل أن يكون لدى كل من البائع والمشتري حسابات أبشر نشطة. يبدأ البائع عملية النقل، ويدخل رقم هوية أو إقامة المشتري، ويختار المركبة، ويوافق على الشروط، ويدفع رسوم النقل. ثم يقوم المشتري بتسجيل الدخول إلى أبشر، ومراجعة طلب النقل المعلق، وقبوله. بعد القبول، يمكن للمالك الجديد تنزيل استمارة مؤقتة فوراً من أبشر.
      </p>

      <div className="not-prose glass p-5 rounded-xl mb-6">
        <h3 className="text-desert-primary font-semibold mb-3">رسوم نقل الملكية حسب سعة المحرك</h3>
        <div className="bg-[#0A0E1A] p-4 rounded-lg text-gray-300 text-sm">
          <table className="w-full">
            <thead>
              <tr className="text-white border-b border-gray-700">
                <th className="text-right py-2">سعة المحرك</th>
                <th className="text-right py-2">رسوم النقل</th>
                <th className="text-right py-2">سيارات نموذجية</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-gray-700/50"><td className="py-2 text-right">أقل من 1600 سي سي</td><td className="py-2 text-right text-desert-gold">150 ريال</td><td className="py-2 text-right text-gray-400">تويوتا يارس، هوندا سيتي</td></tr>
              <tr className="border-b border-gray-700/50"><td className="py-2 text-right">1601 - 2000 سي سي</td><td className="py-2 text-right text-desert-gold">300 ريال</td><td className="py-2 text-right text-gray-400">تويوتا كورولا، هوندا سيفيك</td></tr>
              <tr><td className="py-2 text-right">أكثر من 2000 سي سي</td><td className="py-2 text-right text-desert-gold">500 ريال</td><td className="py-2 text-right text-gray-400">فورد إكسبلورر، نيسان باترول</td></tr>
            </tbody>
          </table>
        </div>
      </div>

      <h2>شرح تفصيلي لتكاليف السيارة المستعملة في السعودية</h2>

      <div className="not-prose glass p-5 rounded-xl mb-6">
        <h3 className="text-desert-primary font-semibold mb-3">1. تجديد الاستمارة</h3>
        <p className="text-gray-300 text-sm">تكلفة تجديد استمارة السيارة 300 ريال لسنة واحدة أو 600 ريال لسنتين. تدفع عبر أبشر أو سبل أو أجهزة الصراف الآلي. غرامة التأخير 100 ريال للسنة الأولى و200 ريال للسنوات التالية.</p>
      </div>

      <div className="not-prose glass p-5 rounded-xl mb-6">
        <h3 className="text-desert-primary font-semibold mb-3">2. التأمين الإلزامي (طرف ثالث مقابل شامل)</h3>
        <p className="text-gray-300 text-sm mb-3">جميع المركبات في السعودية يجب أن يكون لديها تأمين ساري المفعول قبل إتمام نقل الملكية:</p>
        <div className="bg-[#0A0E1A] p-4 rounded-lg text-gray-300 text-sm">
          <table className="w-full">
            <thead><tr className="text-white border-b border-gray-700"><th className="text-right py-2">النوع</th><th className="text-right py-2">التكلفة السنوية</th></tr></thead>
            <tbody>
              <tr className="border-b border-gray-700/50"><td className="py-2 text-right">طرف ثالث (إلزامي)</td><td className="py-2 text-right">600 - 1,000 ريال</td></tr>
              <tr><td className="py-2 text-right">شامل</td><td className="py-2 text-right">2-3% من قيمة السيارة</td></tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="not-prose glass p-5 rounded-xl mb-6">
        <h3 className="text-desert-primary font-semibold mb-3">3. الفحص الدوري</h3>
        <p className="text-gray-300 text-sm">جميع المركبات يجب أن تجتاز الفحص الدوري السنوي. التكلفة 70-150 ريالاً حسب المركز. المراكز الرئيسية: الفحص، المعني، والمجال في الرياض وجدة والدمام.</p>
      </div>

      <h2>دليل شراء سيارة مستعملة خطوة بخطوة</h2>

      <div className="not-prose glass p-5 rounded-xl mb-6">
        <div className="space-y-4">
          <div className="bg-[#0A0E1A] p-4 rounded-lg">
            <p className="text-white font-semibold mb-2">الخطوة 1: الفحص المادي والميكانيكي</p>
            <p className="text-gray-300 text-sm">افحص الهيكل، المحرك، وناقل الحركة. خذ السيارة لميكانيكي موثوق للفحص الاحترافي قبل الشراء.</p>
          </div>
          <div className="bg-[#0A0E1A] p-4 rounded-lg">
            <p className="text-white font-semibold mb-2">الخطوة 2: التحقق من تاريخ الحوادث (نجم) والمخالفات (ساهر)</p>
            <p className="text-gray-300 text-sm">استخدم تطبيق نجم للتحقق من تاريخ الحوادث. تحقق من المخالفات عبر أبشر. استخدم{' '}
              <Link href="/traffic-fine-calculator" className="text-desert-primary underline">حاسبة المخالفات</Link>.</p>
          </div>
          <div className="bg-[#0A0E1A] p-4 rounded-lg">
            <p className="text-white font-semibold mb-2">الخطوة 3: الاتفاق على السعر وطريقة الدفع</p>
            <p className="text-gray-300 text-sm">استخدم{' '}
              <Link href="/used-car-calculator" className="text-desert-primary underline">حاسبة تكلفة السيارة</Link>{' '}
              لمعرفة التكلفة الحقيقية قبل تقديم عرضك النهائي.</p>
          </div>
          <div className="bg-[#0A0E1A] p-4 rounded-lg">
            <p className="text-white font-semibold mb-2">الخطوة 4: إتمام النقل عبر أبشر</p>
            <p className="text-gray-300 text-sm">يبدأ البائع النقل عبر أبشر ويدفع الرسوم. يقبل المشتري النقل عبر حسابه في أبشر ويحصل على الاستمارة المؤقتة فوراً.</p>
          </div>
        </div>
      </div>

      <h2>أمثلة حسابية واقعية</h2>

      <div className="not-prose glass p-5 rounded-xl mb-6">
        <h3 className="text-desert-primary font-semibold mb-3">مثال 1: تويوتا كورولا (1600 سي سي) — السعر: 40,000 ريال</h3>
        <div className="bg-[#0A0E1A] p-4 rounded-lg text-gray-300 text-sm">
          <p>نقل ملكية (1600 سي سي = 150 ريال) — يدفعها البائع</p>
          <p>تجديد استمارة (سنة) — 300 ريال</p>
          <p>تأمين طرف ثالث — 800 ريال</p>
          <p>فحص دوري — 90 ريال</p>
          <p className="text-desert-gold font-bold mt-2">التكلفة الإجمالية للمشتري: 41,190 ريال</p>
        </div>
      </div>

      <div className="not-prose glass p-5 rounded-xl mb-6">
        <h3 className="text-desert-primary font-semibold mb-3">مثال 2: فورد إكسبلورر V6 (&gt;2000 سي سي) — السعر: 80,000 ريال</h3>
        <div className="bg-[#0A0E1A] p-4 rounded-lg text-gray-300 text-sm">
          <p>نقل ملكية (&gt;2000 سي سي = 500 ريال) — يدفعها البائع</p>
          <p>تجديد استمارة (سنتان) — 600 ريال</p>
          <p>تأمين شامل (2.5% من القيمة) — 2,000 ريال</p>
          <p>فحص دوري — 100 ريال</p>
          <p className="text-desert-gold font-bold mt-2">التكلفة الإجمالية للمشتري: 82,700 ريال</p>
        </div>
      </div>

      <h2>المخاطر الخفية وطرق الاحتيال الشائعة</h2>
      <p>
        احذر من: إخفاء تاريخ الحوادث (سيارات خسارة كاملة من نجم)، العبث بعداد المسافة، المخالفات غير المدفوعة، سيارات التصدير غير المؤهلة للتسجيل المحلي، والتلاعب برقم الشاصي. استخدم تقرير نجم دائماً وتحقق من رقم الهيكل بنفسك.
      </p>

      <h2>كيفية استخدام حاسبة السيارة المستعملة من Sauditoolhub</h2>
      <p>
        استخدم{' '}
        <Link href="/used-car-calculator" className="text-desert-primary font-bold underline">حاسبة تكلفة السيارة المستعملة</Link>{' '}
        لحساب السعر النهائي الدقيق قبل التفاوض.
      </p>

      <div className="not-prose glass p-6 rounded-xl mb-8 mt-8 text-center">
        <h3 className="text-desert-gold font-semibold mb-3">لا تدفع أكثر من سعر السيارة المستعملة أبداً</h3>
        <p className="text-gray-300 mb-4">
          استخدم <Link href="/used-car-calculator" className="text-desert-primary font-bold underline">حاسبة السيارة</Link>،{' '}
          <Link href="/traffic-fine-calculator" className="text-desert-primary underline">حاسبة المخالفات</Link>، و{' '}
          <Link href="/fuel-cost-calculator" className="text-desert-primary underline">حاسبة الوقود</Link>.
        </p>
        <p className="text-gray-400 text-sm">
          زوروا <Link href="/blog" className="text-desert-primary underline">مدونتنا</Link> للمزيد.
        </p>
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
        شراء سيارة مستعملة في السعودية يمكن أن يكون تجربة مجزية إذا كنت مستعداً. فهم هيكل التكاليف الكامل — من رسوم نقل الملكية وتجديد الاستمارة إلى التأمين الإلزامي والفحص الدوري — أمر ضروري لاتخاذ قرار مستنير. استخدم{' '}
        <Link href="/used-car-calculator" className="text-desert-primary font-bold underline">حاسبة السيارة المستعملة</Link>{' '}
        لحساب التكلفة الإجمالية والتفاوض بثقة.
      </p>
    </article>
  )
}

function UrContent() {
  return (
    <article className="prose prose-invert max-w-none prose-headings:text-desert-primary prose-a:text-desert-primary prose-strong:text-white prose-li:text-gray-300" dir="rtl">
      <h1>سعودی عرب میں استعمال شدہ گاڑی خریدنے اور نقل ملکیت کے اخراجات کا مکمل گائیڈ 2026</h1>

      <div className="not-prose glass p-6 rounded-xl mb-8">
        <p className="text-gray-300 text-lg leading-relaxed">
          آپ نے حراج یا سیالہ پر بہترین استعمال شدہ گاڑی ڈھونڈ لی ہے۔ قیمت مناسب ہے، مائلیج معقول لگتا ہے، اور تصویریں صاف دکھائی دیتی ہیں۔ لیکن پیسے دینے سے پہلے، بہت سے پوشیدہ اخراجات ہیں — نقل ملکیت کی فیس جو انجن کے سائز پر منحصر ہے، لازمی انشورنس پریمیم، فحس دوری کے اخراجات، استمارہ کی تجدید، اور ٹریفک جرمانے جو گاڑی کے ساتھ منسلک ہو سکتے ہیں۔
        </p>
        <p className="text-gray-300 text-lg leading-relaxed mt-4">
          سعودی عرب میں استعمال شدہ گاڑیوں کی مارکیٹ عروج پر ہے۔ حراج، سیالہ، اور اوپن سوق جیسے پلیٹ فارمز کے ذریعے ہر سال لاکھوں گاڑیاں فروخت ہوتی ہیں۔ یہ گائیڈ آپ کو 2026 میں استعمال شدہ گاڑی خریدنے کے بارے میں ہر وہ چیز بتاتا ہے جس کی آپ کو ضرورت ہے۔
        </p>
      </div>

      <h2>نقل ملکیت کیا ہے؟</h2>
      <p>
        نقل ملکیت گاڑی کی ملکیت بیچنے والے سے خریدار کو منتقل کرنے کا قانونی عمل ہے۔ یہ <strong>أبشر</strong> پلیٹ فارم کے ذریعے مکمل کیا جاتا ہے۔ بیچنے والا أبشر میں لاگ ان کرکے ٹرانسفر شروع کرتا ہے اور خریدار اسے قبول کرتا ہے۔
      </p>

      <div className="not-prose glass p-5 rounded-xl mb-6">
        <h3 className="text-desert-primary font-semibold mb-3">نقل ملکیت کی فیس (انجن کے سائز کے مطابق)</h3>
        <div className="bg-[#0A0E1A] p-4 rounded-lg text-gray-300 text-sm">
          <table className="w-full">
            <thead><tr className="text-white border-b border-gray-700"><th className="text-right py-2">انجن کی گنجائش</th><th className="text-right py-2">فیس</th></tr></thead>
            <tbody>
              <tr className="border-b border-gray-700/50"><td className="py-2 text-right">1600cc سے کم</td><td className="py-2 text-right text-desert-gold">150 SAR</td></tr>
              <tr className="border-b border-gray-700/50"><td className="py-2 text-right">1601 - 2000cc</td><td className="py-2 text-right text-desert-gold">300 SAR</td></tr>
              <tr><td className="py-2 text-right">2000cc سے زائد</td><td className="py-2 text-right text-desert-gold">500 SAR</td></tr>
            </tbody>
          </table>
        </div>
      </div>

      <h2>استعمال شدہ گاڑی کے اخراجات کی تفصیل</h2>

      <div className="not-prose glass p-5 rounded-xl mb-6">
        <h3 className="text-desert-primary font-semibold mb-3">استمارہ کی تجدید</h3>
        <p className="text-gray-300 text-sm">300 SAR ایک سال، 600 SAR دو سال۔ دیر سے تجدید پر 100-200 SAR جرمانہ۔</p>
      </div>

      <div className="not-prose glass p-5 rounded-xl mb-6">
        <h3 className="text-desert-primary font-semibold mb-3">انشورنس (تیسرا فریق بمقابلہ جامع)</h3>
        <p className="text-gray-300 text-sm">تیسرے فریق کا انشورنس: 600-1,000 SAR سالانہ۔ جامع انشورنس: گاڑی کی قیمت کا 2-3% سالانہ۔</p>
      </div>

      <div className="not-prose glass p-5 rounded-xl mb-6">
        <h3 className="text-desert-primary font-semibold mb-3">دوری معائنہ (فحص)</h3>
        <p className="text-gray-300 text-sm">70-150 SAR، مرکز کے لحاظ سے۔ اہم مراکز: الفحص، المعنی، المجال۔</p>
      </div>

      <h2>گاڑی خریدنے کے مرحلہ وار مراحل</h2>

      <div className="not-prose glass p-5 rounded-xl mb-6">
        <div className="space-y-4">
          <div className="bg-[#0A0E1A] p-4 rounded-lg">
            <p className="text-white font-semibold mb-2">مرحلہ 1: مکینیکل معائنہ</p>
            <p className="text-gray-300 text-sm">گاڑی کو کسی قابل اعتماد مکینک کو دکھائیں۔ انجن، ٹرانسمیشن، بریک، اور اے سی چیک کروائیں۔</p>
          </div>
          <div className="bg-[#0A0E1A] p-4 rounded-lg">
            <p className="text-white font-semibold mb-2">مرحلہ 2: حادثات (نجم) اور جرمانے (ساہر) چیک کریں</p>
            <p className="text-gray-300 text-sm">نجم رپورٹ اور أبشر پر جرمانے چیک کریں۔{' '}
              <Link href="/traffic-fine-calculator" className="text-desert-primary underline">ٹریفک فائن کیلکولیٹر</Link> استعمال کریں۔</p>
          </div>
          <div className="bg-[#0A0E1A] p-4 rounded-lg">
            <p className="text-white font-semibold mb-2">مرحلہ 3: قیمت اور ادائیگی کا طریقہ طے کریں</p>
            <p className="text-gray-300 text-sm"><Link href="/used-car-calculator" className="text-desert-primary underline">گاڑی کے اخراجات کا کیلکولیٹر</Link> استعمال کریں۔</p>
          </div>
          <div className="bg-[#0A0E1A] p-4 rounded-lg">
            <p className="text-white font-semibold mb-2">مرحلہ 4: أبشر پر منتقلی مکمل کریں</p>
            <p className="text-gray-300 text-sm">بیچنے والا ٹرانسفر شروع کرے، خریدار قبول کرے۔ عارضی استمارہ فوراً ڈاؤن لوڈ کریں۔</p>
          </div>
        </div>
      </div>

      <h2>مثالیں</h2>

      <div className="not-prose glass p-5 rounded-xl mb-6">
        <h3 className="text-desert-primary font-semibold mb-3">مثال 1: ٹویوٹا کرولا (1600cc) — 40,000 SAR</h3>
        <div className="bg-[#0A0E1A] p-4 rounded-lg text-gray-300 text-sm">
          <p>نقل ملکیت: 150 SAR (بیچنے والا ادا کرے)</p>
          <p>استمارہ (1 سال): 300 SAR</p>
          <p>انشورنس (تیسرا فریق): 800 SAR</p>
          <p>فحص: 90 SAR</p>
          <p className="text-desert-gold font-bold">کل خریدار لاگت: 41,190 SAR</p>
        </div>
      </div>

      <div className="not-prose glass p-5 rounded-xl mb-6">
        <h3 className="text-desert-primary font-semibold mb-3">مثال 2: فورڈ ایکسپلورر V6 (&gt;2000cc) — 80,000 SAR</h3>
        <div className="bg-[#0A0E1A] p-4 rounded-lg text-gray-300 text-sm">
          <p>نقل ملکیت: 500 SAR (بیچنے والا ادا کرے)</p>
          <p>استمارہ (2 سال): 600 SAR</p>
          <p>انشورنس (جامع): 2,000 SAR</p>
          <p>فحص: 100 SAR</p>
          <p className="text-desert-gold font-bold">کل خریدار لاگت: 82,700 SAR</p>
        </div>
      </div>

      <h2>پوشیدہ اخراجات اور فراڈ</h2>
      <p>
        اوڈومیٹر سے چھیڑ چھاڑ، حادثے کی تاریخ چھپانا، نامعلوم جرمانے، اور ایکسپورٹ والی گاڑیوں سے بچیں۔ نجم رپورٹ اور أبشر پر جرمانے چیک کریں۔
      </p>

      <h2>Sauditoolhub کیلکولیٹر کا استعمال</h2>
      <p>
        <Link href="/used-car-calculator" className="text-desert-primary font-bold underline">گاڑی کے اخراجات کا کیلکولیٹر</Link> استعمال کریں۔{' '}
        <Link href="/traffic-fine-calculator" className="text-desert-primary underline">ٹریفک فائن کیلکولیٹر</Link> اور{' '}
        <Link href="/fuel-cost-calculator" className="text-desert-primary underline">ایندھن کیلکولیٹر</Link> بھی دیکھیں۔
      </p>

      <div className="not-prose glass p-6 rounded-xl mb-8 mt-8 text-center">
        <h3 className="text-desert-gold font-semibold mb-3">آج ہی شروع کریں</h3>
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
      <p>
        سعودی عرب میں استعمال شدہ گاڑی خریدنا ایک فائدہ مند تجربہ ہو سکتا ہے اگر آپ تیار ہوں۔ ہمیشہ گاڑی کا معائنہ کروائیں، نجم رپورٹ چیک کریں، جرمانے دیکھیں، اور أبشر کے بغیر خریداری مکمل نہ کریں۔{' '}
        <Link href="/used-car-calculator" className="text-desert-primary font-bold underline">گاڑی کے اخراجات کا کیلکولیٹر</Link> استعمال کریں۔
      </p>
    </article>
  )
}

function TlContent() {
  return (
    <article className="prose prose-invert max-w-none prose-headings:text-desert-primary prose-a:text-desert-primary prose-strong:text-white prose-li:text-gray-300">
      <h1>Kumpletong Gabay sa Pagbili ng Used Car at Naql Malikiya Fees sa Saudi Arabia 2026</h1>

      <div className="not-prose glass p-6 rounded-xl mb-8">
        <p className="text-gray-300 text-lg leading-relaxed">
          Nakakita ka na ng perpektong used car sa Haraj o Sayyala. Tama ang presyo, mukhang reasonable ang mileage, at malinis ang mga larawan. Ngunit bago ka maglabas ng pera, maraming nakatagong gastos — Naql Malikiya transfer fees na nag-iiba ayon sa laki ng makina, mandatory insurance premiums, Fahas inspection costs, Istimara renewal fees, at ang panganib ng hindi pa bayad na traffic fines na nakatali sa sasakyan.
        </p>
        <p className="text-gray-300 text-lg leading-relaxed mt-4">
          Ang used car market sa Saudi Arabia ay sumasabog, na may daan-daang libong sasakyan na nagpapalit ng may-ari bawat taon sa pamamagitan ng Haraj, Sayyala, at OpenSooq. Saklaw ng gabay na ito ang lahat ng kailangan mong malaman tungkol sa pagbili ng used car sa Saudi Arabia 2026.
        </p>
      </div>

      <h2>Ano ang Naql Malikiya?</h2>
      <p>
        Ang Naql Malikiya ay ang legal na proseso ng paglilipat ng pagmamay-ari ng sasakyan mula sa seller patungo sa buyer. Ito ay ginagawa sa pamamagitan ng <strong>Absher</strong> platform ng Ministry of Interior. Sinimulan ng seller ang transfer at tinatanggap ito ng buyer sa kanilang Absher account.
      </p>

      <div className="not-prose glass p-5 rounded-xl mb-6">
        <h3 className="text-desert-primary font-semibold mb-3">Naql Malikiya Fees ayon sa Laki ng Makina</h3>
        <div className="bg-[#0A0E1A] p-4 rounded-lg text-gray-300 text-sm">
          <table className="w-full">
            <thead><tr className="text-white border-b border-gray-700"><th className="text-left py-2">Engine Size</th><th className="text-left py-2">Fee</th></tr></thead>
            <tbody>
              <tr className="border-b border-gray-700/50"><td className="py-2">Below 1600cc</td><td className="py-2 text-desert-gold">150 SAR</td></tr>
              <tr className="border-b border-gray-700/50"><td className="py-2">1601 - 2000cc</td><td className="py-2 text-desert-gold">300 SAR</td></tr>
              <tr><td className="py-2">Over 2000cc</td><td className="py-2 text-desert-gold">500 SAR</td></tr>
            </tbody>
          </table>
        </div>
      </div>

      <h2>Breakdown ng Lahat ng Gastos</h2>

      <div className="not-prose glass p-5 rounded-xl mb-6">
        <h3 className="text-desert-primary font-semibold mb-3">Istimara Renewal</h3>
        <p className="text-gray-300 text-sm">300 SAR para sa 1 taon, 600 SAR para sa 2 taon. Penalty para sa late renewal: 100-200 SAR.</p>
      </div>

      <div className="not-prose glass p-5 rounded-xl mb-6">
        <h3 className="text-desert-primary font-semibold mb-3">Insurance (Third-Party vs Comprehensive)</h3>
        <p className="text-gray-300 text-sm">Third-party: 600-1,000 SAR taun-taon. Comprehensive: 2-3% ng halaga ng sasakyan taun-taon.</p>
      </div>

      <div className="not-prose glass p-5 rounded-xl mb-6">
        <h3 className="text-desert-primary font-semibold mb-3">Fahas Periodic Inspection</h3>
        <p className="text-gray-300 text-sm">70-150 SAR depende sa inspection center. Pangunahing centers: Al-Fahhas, Al-Mani, Al-Majal.</p>
      </div>

      <h2>Step-by-Step na Gabay</h2>

      <div className="not-prose glass p-5 rounded-xl mb-6">
        <div className="space-y-4">
          <div className="bg-[#0A0E1A] p-4 rounded-lg">
            <p className="text-white font-semibold mb-2">Step 1: Mechanical Inspection</p>
            <p className="text-gray-300 text-sm">Dalhin ang sasakyan sa isang pinagkakatiwalaang mekaniko. Suriin ang makina, transmission, preno, at air conditioning.</p>
          </div>
          <div className="bg-[#0A0E1A] p-4 rounded-lg">
            <p className="text-white font-semibold mb-2">Step 2: Suriin ang Accident History (Najm) at Fines (Saher)</p>
            <p className="text-gray-300 text-sm">Gamitin ang{' '}
              <Link href="/traffic-fine-calculator" className="text-desert-primary underline">Traffic Fine Calculator</Link>.</p>
          </div>
          <div className="bg-[#0A0E1A] p-4 rounded-lg">
            <p className="text-white font-semibold mb-2">Step 3: Sumang-ayon sa Presyo</p>
            <p className="text-gray-300 text-sm">Gamitin ang{' '}
              <Link href="/used-car-calculator" className="text-desert-primary underline">Used Car Cost Calculator</Link>.</p>
          </div>
          <div className="bg-[#0A0E1A] p-4 rounded-lg">
            <p className="text-white font-semibold mb-2">Step 4: Absher Transfer</p>
            <p className="text-gray-300 text-sm">Simulan ng seller ang transfer, tanggapin ng buyer. I-download agad ang temporary Istimara.</p>
          </div>
        </div>
      </div>

      <h2>Mga Halimbawa</h2>

      <div className="not-prose glass p-5 rounded-xl mb-6">
        <h3 className="text-desert-primary font-semibold mb-3">Example 1: Toyota Corolla (1600cc) — 40,000 SAR</h3>
        <div className="bg-[#0A0E1A] p-4 rounded-lg text-gray-300 text-sm">
          <p>Naql Malikiya: 150 SAR (seller ang magbabayad)</p>
          <p>Istimara (1 year): 300 SAR</p>
          <p>Insurance (Third-Party): 800 SAR</p>
          <p>Fahas: 90 SAR</p>
          <p className="text-desert-gold font-bold">Total Buyer Cost: 41,190 SAR</p>
        </div>
      </div>

      <div className="not-prose glass p-5 rounded-xl mb-6">
        <h3 className="text-desert-primary font-semibold mb-3">Example 2: Ford Explorer V6 (&gt;2000cc) — 80,000 SAR</h3>
        <div className="bg-[#0A0E1A] p-4 rounded-lg text-gray-300 text-sm">
          <p>Naql Malikiya: 500 SAR (seller)</p>
          <p>Istimara (2 years): 600 SAR</p>
          <p>Insurance (Comprehensive): 2,000 SAR</p>
          <p>Fahas: 100 SAR</p>
          <p className="text-desert-gold font-bold">Total Buyer Cost: 82,700 SAR</p>
        </div>
      </div>

      <h2>Mga Nakatagong Gastos at Scam</h2>
      <p>
        Iwasan ang: odometer tampering, pagtatago ng accident history, hindi bayad na fines, export-only na sasakyan, at VIN tampering. Kumuha ng Najm report at suriin ang Absher bago bumili.
      </p>

      <h2>Paano Gamitin ang Sauditoolhub Used Car Calculator</h2>
      <p>
        Gamitin ang{' '}
        <Link href="/used-car-calculator" className="text-desert-primary font-bold underline">Used Car Cost Calculator</Link>.
        Tingnan din ang{' '}
        <Link href="/traffic-fine-calculator" className="text-desert-primary underline">Traffic Fine Calculator</Link> at{' '}
        <Link href="/fuel-cost-calculator" className="text-desert-primary underline">Fuel Cost Calculator</Link>.
      </p>

      <div className="not-prose glass p-6 rounded-xl mb-8 mt-8 text-center">
        <h3 className="text-desert-gold font-semibold mb-3">Maging Matalinong Buyer</h3>
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
      <p>
        Ang pagbili ng used car sa Saudi Arabia ay maaaring maging magandang karanasan kung handa ka. Suriin ang sasakyan, kumuha ng Najm report, tingnan ang mga fines, at huwag kailanman kumpletuhin ang pagbili sa labas ng opisyal na Absher transfer system. Gamitin ang{' '}
        <Link href="/used-car-calculator" className="text-desert-primary font-bold underline">Used Car Cost Calculator</Link>.
      </p>
    </article>
  )
}

function BnContent() {
  return (
    <article className="prose prose-invert max-w-none prose-headings:text-desert-primary prose-a:text-desert-primary prose-strong:text-white prose-li:text-gray-300">
      <h1>সৌদি আরবে ব্যবহৃত গাড়ি কেনা ও নাকল মালিকিয়া ফি-র সম্পূর্ণ গাইড ২০২৬</h1>

      <div className="not-prose glass p-6 rounded-xl mb-8">
        <p className="text-gray-300 text-lg leading-relaxed">
          আপনি হারাজ বা সায়ালায় উপযুক্ত ব্যবহৃত গাড়ি খুঁজে পেয়েছেন। দাম ঠিক আছে, মাইলেজ যুক্তিসঙ্গত মনে হচ্ছে, এবং ছবিগুলো পরিষ্কার। কিন্তু টাকা দেওয়ার আগে, অনেক লুকানো খরচ আছে — নাকল মালিকিয়া ট্রান্সফার ফি যা ইঞ্জিনের আকারের উপর নির্ভর করে, বাধ্যতামূলক ইন্সুরেন্স প্রিমিয়াম, ফাহাস পরিদর্শন খরচ, ইসতিমারা নবীকরণ ফি, এবং গাড়ির সাথে যুক্ত অপরিশোধিত ট্রাফিক জরিমানার ঝুঁকি।
        </p>
        <p className="text-gray-300 text-lg leading-relaxed mt-4">
          সৌদি আরবে ব্যবহৃত গাড়ির বাজার জমজমাট। এই গাইডটি ২০২৬ সালে ব্যবহৃত গাড়ি কেনার বিষয়ে আপনার যা কিছু জানা দরকার তা কভার করে।
        </p>
      </div>

      <h2>নাকল মালিকিয়া কী?</h2>
      <p>
        নাকল মালিকিয়া হল বিক্রেতা থেকে ক্রেতার কাছে গাড়ির মালিকানা হস্তান্তরের আইনি প্রক্রিয়া। এটি <strong>আবশের</strong> প্ল্যাটফর্মের মাধ্যমে সম্পন্ন হয়। বিক্রেতা ট্রান্সফার শুরু করে এবং ক্রেতা এটি গ্রহণ করে।
      </p>

      <div className="not-prose glass p-5 rounded-xl mb-6">
        <h3 className="text-desert-primary font-semibold mb-3">ইঞ্জিনের আকার অনুযায়ী ফি</h3>
        <div className="bg-[#0A0E1A] p-4 rounded-lg text-gray-300 text-sm">
          <p>১৬০০cc-এর নিচে: ১৫০ SAR</p>
          <p>১৬০১-২০০০cc: ৩০০ SAR</p>
          <p>২০০০cc-এর উপরে: ৫০০ SAR</p>
        </div>
      </div>

      <h2>সমস্ত খরচের বিবরণ</h2>

      <div className="not-prose glass p-5 rounded-xl mb-6">
        <p className="text-gray-300 text-sm"><strong>ইসতিমারা নবীকরণ:</strong> ৩০০ SAR (১ বছর), ৬০০ SAR (২ বছর)</p>
        <p className="text-gray-300 text-sm mt-2"><strong>ইন্সুরেন্স:</strong> থার্ড-পার্টি ৬০০-১,০০০ SAR/বছর, কম্প্রিহেনসিভ ২-৩% গাড়ির মূল্যের</p>
        <p className="text-gray-300 text-sm mt-2"><strong>ফাহাস পরিদর্শন:</strong> ৭০-১৫০ SAR</p>
      </div>

      <h2>ধাপে ধাপে গাইড</h2>

      <div className="not-prose glass p-5 rounded-xl mb-6">
        <div className="space-y-4">
          <div className="bg-[#0A0E1A] p-4 rounded-lg">
            <p className="text-white font-semibold mb-2">ধাপ ১: মেকানিক্যাল পরিদর্শন</p>
            <p className="text-gray-300 text-sm">গাড়ি একজন বিশ্বস্ত মেকানিককে দেখান। ইঞ্জিন, ট্রান্সমিশন, ব্রেক এবং এসি চেক করুন।</p>
          </div>
          <div className="bg-[#0A0E1A] p-4 rounded-lg">
            <p className="text-white font-semibold mb-2">ধাপ ২: দুর্ঘটনার ইতিহাস ও জরিমানা চেক করুন</p>
            <p className="text-gray-300 text-sm">নাজম রিপোর্ট ও আবশেরে জরিমানা চেক করুন।{' '}
              <Link href="/traffic-fine-calculator" className="text-desert-primary underline">ট্রাফিক ফাইন ক্যালকুলেটর</Link> ব্যবহার করুন।</p>
          </div>
          <div className="bg-[#0A0E1A] p-4 rounded-lg">
            <p className="text-white font-semibold mb-2">ধাপ ৩: দাম নির্ধারণ</p>
            <p className="text-gray-300 text-sm"><Link href="/used-car-calculator" className="text-desert-primary underline">গাড়ির খরচ ক্যালকুলেটর</Link> ব্যবহার করুন।</p>
          </div>
          <div className="bg-[#0A0E1A] p-4 rounded-lg">
            <p className="text-white font-semibold mb-2">ধাপ ৪: আবশেরে স্থানান্তর</p>
            <p className="text-gray-300 text-sm">বিক্রেতা ট্রান্সফার শুরু করুক, ক্রেতা গ্রহণ করুক। অস্থায়ী ইসতিমারা ডাউনলোড করুন।</p>
          </div>
        </div>
      </div>

      <h2>উদাহরণ</h2>

      <div className="not-prose glass p-5 rounded-xl mb-6">
        <h3 className="text-desert-primary font-semibold mb-3">উদাহরণ ১: টয়োটা করোলা (১৬০০cc) — ৪০,০০০ SAR</h3>
        <div className="bg-[#0A0E1A] p-4 rounded-lg text-gray-300 text-sm">
          <p className="text-desert-gold font-bold">ক্রেতার মোট খরচ: ৪১,১৯০ SAR</p>
        </div>
      </div>

      <div className="not-prose glass p-5 rounded-xl mb-6">
        <h3 className="text-desert-primary font-semibold mb-3">উদাহরণ ২: ফোর্ড এক্সপ্লোরার V6 (&gt;২০০০cc) — ৮০,০০০ SAR</h3>
        <div className="bg-[#0A0E1A] p-4 rounded-lg text-gray-300 text-sm">
          <p className="text-desert-gold font-bold">ক্রেতার মোট খরচ: ৮২,৭০০ SAR</p>
        </div>
      </div>

      <h2>লুকানো খরচ ও প্রতারণা</h2>
      <p>
              ওডোমিটার টেমপারিং, দুর্ঘটনার ইতিহাস গোপন করা, অপরিশোধিত জরিমানা, এবং এক্সপোর্ট-অনলি গাড়ি থেকে সাবধান। নাজম রিপোর্ট ও আবশের চেক করুন।
      </p>

      <h2>Sauditoolhub ক্যালকুলেটর ব্যবহার</h2>
      <p>
        <Link href="/used-car-calculator" className="text-desert-primary font-bold underline">গাড়ির খরচ ক্যালকুলেটর</Link> ব্যবহার করুন।{' '}
        <Link href="/traffic-fine-calculator" className="text-desert-primary underline">ট্রাফিক ফাইন ক্যালকুলেটর</Link> ও{' '}
        <Link href="/fuel-cost-calculator" className="text-desert-primary underline">জ্বালানি খরচ ক্যালকুলেটর</Link> দেখুন।
      </p>

      <div className="not-prose glass p-6 rounded-xl mb-8 mt-8 text-center">
        <h3 className="text-desert-gold font-semibold mb-3">বুদ্ধিমানের মতো কিনুন</h3>
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
      <p>
        সৌদি আরবে ব্যবহৃত গাড়ি কেনা একটি পুরস্কৃত অভিজ্ঞতা হতে পারে যদি আপনি প্রস্তুত থাকেন। গাড়ি পরিদর্শন করুন, নাজম রিপোর্ট নিন, জরিমানা চেক করুন, এবং আবশেরের বাইরে কখনও কেনা সম্পূর্ণ করবেন না।{' '}
        <Link href="/used-car-calculator" className="text-desert-primary font-bold underline">গাড়ির খরচ ক্যালকুলেটর</Link> ব্যবহার করুন।
      </p>
    </article>
  )
}

export default async function CarGuidePage({ params }: Props) {
  const { locale } = await params
  const isAr = locale === 'ar'
  const isUr = locale === 'ur'
  const isTl = locale === 'tl'
  const isBn = locale === 'bn'
  const isDefault = locale === 'en'
  const pageUrl = isDefault
    ? `${baseUrl}/guide/used-car-naql-malikiya-guide-saudi-arabia-2026`
    : `${baseUrl}/${locale}/guide/used-car-naql-malikiya-guide-saudi-arabia-2026`

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
