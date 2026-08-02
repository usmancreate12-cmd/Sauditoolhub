import type { Metadata } from 'next'
import Link from 'next/link'
import { GlassCard } from '@/components/GlassCard'

type Props = { params: Promise<{ locale: string }> }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params
  const base = '/guide/property-valuation-white-deed-guide-saudi-arabia-2026'
  const titles: Record<string, string> = {
    en: 'The Complete Guide to Property Valuation & White Deed (Sak Abyad) in Saudi Arabia 2026',
    ar: 'الدليل الشامل لتقييم العقارات والصك الأبيض في السعودية 2026',
    ur: 'سعودی عرب 2026 میں پراپرٹی ویلیوایشن اور وائٹ ڈیڈ (سفید دستاویز) کا مکمل گائیڈ',
    tl: 'Gabay sa Property Valuation at White Deed (Sak Abyad) sa Saudi Arabia 2026',
    bn: 'সৌদি আরব ২০২৬-এ সম্পত্তি মূল্যায়ন ও হোয়াইট ডিড (সক আবিয়াজ) গাইড',
  }
  return {
    title: titles[locale] || titles.en,
    description: titles[locale] || titles.en,
    alternates: {
      canonical: `https://sauditoolhub.com${base}`,
      languages: {
        en: `https://sauditoolhub.com/en${base}`,
        ar: `https://sauditoolhub.com/ar${base}`,
        ur: `https://sauditoolhub.com/ur${base}`,
        tl: `https://sauditoolhub.com/tl${base}`,
        bn: `https://sauditoolhub.com/bn${base}`,
      },
    },
  }
}

const articleSchemaEn = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": 'The Complete Guide to Property Valuation & White Deed in Saudi Arabia 2026',
  "description": 'Learn how property valuation works in Saudi Arabia 2026. Understand the White Deed (Sak Abyad), White Land Tax, Taqeem platform, and how to estimate property value.',
  "author": { "@type": "Organization", "name": "Sauditoolhub" },
  "datePublished": "2026-07-01",
  "dateModified": "2026-07-28"
}

const articleSchemaAr = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": 'الدليل الشامل لتقييم العقارات والصك الأبيض في السعودية 2026',
  "description": 'تعرف على تقييم العقارات في السعودية 2026. فهم الصك الأبيض، ضريبة الأراضي البيضاء، منصة تقييم، وكيفية تقدير قيمة العقار.',
  "author": { "@type": "Organization", "name": "Sauditoolhub" },
  "datePublished": "2026-07-01",
  "dateModified": "2026-07-28"
}

const articleSchemaUr = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": 'سعودی عرب 2026 میں پراپرٹی ویلیوایشن اور وائٹ ڈیڈ کا مکمل گائیڈ',
  "description": 'سعودی عرب 2026 میں پراپرٹی ویلیوایشن کے بارے میں جانیں۔ وائٹ ڈیڈ، وائٹ لینڈ ٹیکس، تقییم پلیٹ فارم، اور پراپرٹی کی قیمت کا اندازہ لگانا سیکھیں۔',
  "author": { "@type": "Organization", "name": "Sauditoolhub" },
  "datePublished": "2026-07-01",
  "dateModified": "2026-07-28"
}

const articleSchemaTl = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": 'Gabay sa Property Valuation at White Deed sa Saudi Arabia 2026',
  "description": 'Alamin kung paano gumagana ang property valuation sa Saudi Arabia 2026. Unawain ang White Deed, White Land Tax, Taqeem platform, at paano tantyahin ang halaga ng property.',
  "author": { "@type": "Organization", "name": "Sauditoolhub" },
  "datePublished": "2026-07-01",
  "dateModified": "2026-07-28"
}

const articleSchemaBn = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": 'সৌদি আরব ২০২৬-এ সম্পত্তি মূল্যায়ন ও হোয়াইট ডিড গাইড',
  "description": 'সৌদি আরব ২০২৬-এ সম্পত্তি মূল্যায়ন কীভাবে কাজ করে তা জানুন। হোয়াইট ডিড, হোয়াইট ল্যান্ড ট্যাক্স, তাকমিম প্ল্যাটফর্ম এবং সম্পত্তির মূল্য estimating বুঝুন।',
  "author": { "@type": "Organization", "name": "Sauditoolhub" },
  "datePublished": "2026-07-01",
  "dateModified": "2026-07-28"
}

const faqsEn = [
  { question: 'What is a White Deed (Sak Abyad) in Saudi Arabia?', answer: 'A White Deed (Sak Abyad) refers to the title deed for undeveloped vacant land held by investors or individuals in Saudi Arabia. These are plots that have not been developed with buildings or infrastructure. The government introduced the White Land Tax to encourage owners to develop these plots or sell them, increasing housing supply and lowering prices for homebuyers.' },
  { question: 'What is the White Land Tax (WLT) in Saudi Arabia?', answer: 'The White Land Tax (WLT) is a levy imposed on undeveloped land within urban boundaries. It is 2.5% of the land\'s market value per year. The tax applies to land owned by both individuals and companies, with certain exemptions. The goal is to discourage land hoarding and increase the supply of developed properties, ultimately making housing more affordable for Saudi citizens.' },
  { question: 'How do I get an official property valuation in Saudi Arabia?', answer: 'You can get an official valuation through the Taqeem platform (the General Authority for Real Estate Appraisal - GAREA). Licensed private appraisers also provide valuation reports. The process involves a site visit, comparative market analysis, and a detailed report. Costs typically range from 2,000 to 10,000 SAR depending on the property type and location. Banks require this report before approving a mortgage.' },
  { question: 'What factors affect property value most in Saudi Arabia?', answer: 'The most important factor is location — proximity to schools, hospitals, mosques, main roads, and commercial centers. In Riyadh, properties in Al Malqa, Al Narjis, and Al Olaya command premium prices. Other factors: property age and condition, number of rooms and bathrooms, amenities (central AC, smart home features, landscaping), legal status (clear title deed vs. disputed land), and neighborhood development stage.' },
  { question: 'How is the White Land Tax calculated?', answer: 'The White Land Tax is calculated as 2.5% of the land\'s market value annually. For example, a vacant plot valued at 1,000,000 SAR would incur a tax of 25,000 SAR per year. The valuation is determined by the General Authority for Real Estate Appraisal. Owners must register their land and pay the tax through the designated government portal. Non-compliance can result in fines and restrictions on selling the land.' },
  { question: 'Does the White Land Tax apply to all vacant land?', answer: 'No, there are exemptions. Exempt land includes: agricultural land outside urban boundaries, industrial land, land owned by government entities, land used for charitable or religious purposes, and land owned by real estate developers with approved development plans. However, individual owners of vacant residential plots within city limits are generally subject to the tax.' },
  { question: 'Why do banks require a property valuation report for mortgages?', answer: 'Banks require an official valuation report to ensure the property is worth the loan amount. The report protects both the bank and the borrower. If the borrower defaults, the bank must recover its money by selling the property. The valuation ensures the property can be sold for at least the loan balance. The report also confirms there are no legal disputes or encumbrances on the property.' },
  { question: 'How often do property valuations change in Saudi Arabia?', answer: 'Property values in Saudi Arabia can change significantly year over year due to market conditions, infrastructure development, and government policies. In prime Riyadh areas, values have appreciated 5-10% annually. However, during economic downturns or when new supply enters the market, values can stabilize or decline. It is recommended to get a fresh valuation every 2-3 years or whenever you plan to buy, sell, or refinance.' },
  { question: 'What is the difference between Sak Abyad (White Deed) and Sak Ahmar (Red Deed)?', answer: 'A Sak Abyad (White Deed) is the title for undeveloped vacant land. A Sak Ahmar (Red Deed) is the title for developed property — land with buildings or structures. Red Deeds are issued after construction is completed and the property is registered with the Ministry of Justice. Red Deeds are not subject to the White Land Tax, while White Deeds are, unless exempted.' },
  { question: 'Can I use the Sauditoolhub Property Valuation Estimator for official purposes?', answer: 'The Sauditoolhub Property Valuation Estimator at /property-valuation provides a free, quick baseline estimate based on public data and market trends. It is an excellent starting point to understand a property\'s approximate value range. However, for official purposes — mortgage applications, legal disputes, or tax assessments — you must obtain a certified valuation report from a licensed appraiser registered with GAREA (Taqeem).' },
]

const faqsAr = [
  { question: 'ما هو الصك الأبيض في السعودية؟', answer: 'الصك الأبيض هو صك ملكية الأراضي الفضاء غير المطورة. فرضت الحكومة ضريبة الأراضي البيضاء لتشجيع المالكين على تطوير هذه الأراضي أو بيعها لزيادة المعروض من المساكن.' },
  { question: 'ما هي ضريبة الأراضي البيضاء؟', answer: 'ضريبة الأراضي البيضاء 2.5% من القيمة السوقية للأرض سنوياً للأراضي غير المطورة داخل النطاق العمراني. الهدف هو منع احتكار الأراضي وزيادة المعروض من العقارات المطورة.' },
  { question: 'كيف أحصل على تقييم عقاري رسمي في السعودية؟', answer: 'من خلال منصة تقييم (الهيئة العامة لتقييم العقارات) أو مثمن خاص مرخص. التكلفة 2,000-10,000 ريال. البنوك تطلب هذا التقرير قبل الموافقة على التمويل العقاري.' },
  { question: 'ما العوامل الأكثر تأثيراً على قيمة العقار في السعودية؟', answer: 'الموقع هو الأهم — القرب من المدارس والمستشفيات والمساجد والطرق الرئيسية. في الرياض، العقارات في الملقا والنرجس والعليا بأسعار ممتازة. تشمل العوامل الأخرى: عمر العقار وحالته، العدد من الغرف والحمامات، والوضع القانوني.' },
  { question: 'كيف تحسب ضريبة الأراضي البيضاء؟', answer: 'تحسب بنسبة 2.5% من القيمة السوقية للأرض سنوياً. أرض بقيمة 1,000,000 ريال تتحمل ضريبة 25,000 ريال سنوياً.' },
  { question: 'هل تنطبق ضريبة الأراضي البيضاء على جميع الأراضي؟', answer: 'لا، هناك إعفاءات للأراضي الزراعية خارج النطاق العمراني، الأراضي الصناعية، أراضي الجهات الحكومية، والأراضي المملوكة لمطورين عقاريين بخطط تطوير معتمدة.' },
  { question: 'لماذا تطلب البنوك تقرير تقييم عقاري للتمويل؟', answer: 'للتأكد من أن قيمة العقار تغطي مبلغ القرض. التقرير يحمي البنك والمقترض ويؤكد عدم وجود نزاعات قانونية على العقار.' },
  { question: 'ما الفرق بين الصك الأبيض والصك الأحمر؟', answer: 'الصك الأبيض للأراضي غير المطورة. الصك الأحمر للعقارات المطورة التي بنيت عليها مباني. الصك الأحمر لا يخضع لضريبة الأراضي البيضاء.' },
  { question: 'هل يمكن استخدام أداة تقييم Sauditoolhub للأغراض الرسمية؟', answer: 'توفر الأداة في /property-valuation تقديراً أساسياً مجانياً. للأغراض الرسمية، يجب الحصول على تقرير تقييم معتمد من مثمن مرخص.' },
  { question: 'كم مرة يجب تحديث تقييم العقار؟', answer: 'ينصح بتحديث التقييم كل 2-3 سنوات أو عند التخطيط للبيع أو الشراء أو إعادة التمويل.' },
]

const faqsUr = [
  { question: 'سعودی عرب میں وائٹ ڈیڈ (سفید دستاویز) کیا ہے؟', answer: 'وائٹ ڈیڈ غیر ترقی یافتہ خالی زمین کی ملکیتی دستاویز ہے۔ حکومت نے وائٹ لینڈ ٹیکس متعارف کرایا تاکہ مالکان کو زمین ترقی دینے یا بیچنے کی ترغیب دی جا سکے۔' },
  { question: 'وائٹ لینڈ ٹیکس کیا ہے؟', answer: 'وائٹ لینڈ ٹیکس شہری حدود میں غیر ترقی یافتہ زمین پر 2.5% سالانہ ہے۔ مقصد زمین پر قبضہ روکنا اور ترقی یافتہ جائیدادوں کی فراہمی بڑھانا ہے۔' },
  { question: 'سعودی عرب میں سرکاری پراپرٹی ویلیوایشن کیسے حاصل کریں؟', answer: 'تقییم پلیٹ فارم (GAREA) یا لائسنس یافتہ پرائیویٹ ایپریزر کے ذریعے۔ لاگت 2,000-10,000 ریال۔ بینک مارگیج سے پہلے یہ رپورٹ مانگتے ہیں۔' },
  { question: 'پراپرٹی کی قیمت کو سب سے زیادہ کون سے عوامل متاثر کرتے ہیں؟', answer: 'مقام سب سے اہم ہے — اسکول، ہسپتال، مسجد اور سڑکوں سے قربت۔ دیگر عوامل: جائیداد کی عمر، کمرے اور باتھ روم کی تعداد، اور قانونی حیثیت۔' },
  { question: 'وائٹ لینڈ ٹیکس کا حساب کیسے لگایا جاتا ہے؟', answer: 'زمین کی مارکیٹ ویلیو کا 2.5% سالانہ۔ 1,000,000 ریال کی زمین پر 25,000 ریال سالانہ ٹیکس۔' },
  { question: 'سفید اور سرخ دستاویز میں کیا فرق ہے؟', answer: 'سفید دستاویز غیر ترقی یافتہ زمین کے لیے، سرخ دستاویز ترقی یافتہ جائیداد کے لیے جس پر عمارت بنی ہو۔' },
]

const faqsTl = [
  { question: 'Ano ang White Deed (Sak Abyad) sa Saudi Arabia?', answer: 'Ang White Deed ay ang titulo para sa hindi pa nauunlad na bakanteng lupa. Ipinakilala ng gobyerno ang White Land Tax upang hikayatin ang pagpapaunlad o pagbebenta ng mga lupaing ito.' },
  { question: 'Ano ang White Land Tax (WLT)?', answer: 'Ang WLT ay 2.5% ng market value ng lupa bawat taon para sa hindi pa nauunlad na lupa sa loob ng urban boundaries. Layunin nitong pigilan ang pag-iimbak ng lupa.' },
  { question: 'Paano makakuha ng opisyal na property valuation sa Saudi Arabia?', answer: 'Sa pamamagitan ng Taqeem platform (GAREA) o lisensyadong private appraiser. Nagkakahalaga ng 2,000-10,000 SAR. Kinakailangan ito ng mga bangko para sa mortgage.' },
  { question: 'Anu-anong salik ang pinaka-nakakapekto sa halaga ng property?', answer: 'Ang lokasyon ang pinakamahalaga — lapit sa paaralan, ospital, moske, at pangunahing kalsada. Kasama rin ang edad ng property, bilang ng kuwarto, at legal na katayuan.' },
  { question: 'Ano ang pagkakaiba ng White Deed at Red Deed?', answer: 'Ang White Deed ay para sa hindi pa nauunlad na lupa. Ang Red Deed ay para sa nauunlad na property na may gusali.' },
]

const faqsBn = [
  { question: 'সৌদি আরবে হোয়াইট ডিড (সক আবিয়াজ) কী?', answer: 'হোয়াইট ডিড হল অনুন্নত ফাঁকা জমির দলিল। সরকার হোয়াইট ল্যান্ড ট্যাক্স চালু করেছে মালিকদের জমি উন্নয়ন বা বিক্রয় করতে উৎসাহিত করতে।' },
  { question: 'হোয়াইট ল্যান্ড ট্যাক্স কী?', answer: 'শহুরে সীমানার মধ্যে অনুন্নত জমির উপর বার্ষিক ২.৫% কর। উদ্দেশ্য জমি আটকে রাখা বন্ধ করা এবং উন্নত সম্পত্তির সরবরাহ বাড়ানো।' },
  { question: 'সৌদি আরবে সরকারি সম্পত্তি মূল্যায়ন কীভাবে পাবেন?', answer: 'তাকমিম প্ল্যাটফর্ম (GAREA) বা লাইসেন্সপ্রাপ্ত প্রাইভেট অ্যাপ্রেইজারের মাধ্যমে। খরচ ২,০০০-১০,০০০ SAR। মর্টগেজের জন্য ব্যাংকগুলি এই রিপোর্ট চায়।' },
  { question: 'সম্পত্তির মূল্যকে সবচেয়ে বেশি কী কী কারণ প্রভাবিত করে?', answer: 'অবস্থান সবচেয়ে গুরুত্বপূর্ণ — স্কুল, হাসপাতাল, মসজিদ এবং প্রধান সড়কের নিকটবর্তীতা। অন্যান্য কারণ: সম্পত্তির বয়স, কক্ষ ও বাথরুমের সংখ্যা, এবং আইনি অবস্থা।' },
  { question: 'হোয়াইট ডিড এবং রেড ডিডের মধ্যে পার্থক্য কী?', answer: 'হোয়াইট ডিড অনুন্নত জমির জন্য, রেড ডিড উন্নত সম্পত্তির জন্য যাতে ভবন রয়েছে।' },
]

function EnContent() {
  return (
    <article>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchemaEn) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": faqsEn.map(f => ({ "@type": "Question", "name": f.question, "acceptedAnswer": { "@type": "Answer", "text": f.answer } })) }) }} />

      <div className="text-center mb-8">
        <p className="text-desert-primary text-sm font-medium tracking-widest uppercase">Real Estate Valuation Guide</p>
        <h1 className="text-3xl md:text-4xl font-bold text-white mt-2">The Complete Guide to Property Valuation &amp; White Deed (Sak Abyad) in Saudi Arabia 2026</h1>
        <p className="text-gray-400 mt-3 max-w-2xl mx-auto">
          Whether you are buying, selling, or getting a mortgage, knowing the true value of a property is the foundation of any smart real estate decision. This guide explains valuation methods, the White Deed issue, and how to avoid overpaying.
        </p>
      </div>

      <GlassCard>
        <h2>Introduction</h2>
        <p>
          Imagine walking into a real estate office in Riyadh. The agent shows you a villa in Al Olaya. The asking price is 3,200,000 SAR. Is that a fair price? How do you know if you are overpaying by 200,000 SAR or getting a deal of a lifetime? Without a proper property valuation, you are essentially guessing with hundreds of thousands of riyals on the line.
        </p>
        <p>
          Property valuation in Saudi Arabia has become more structured and transparent in recent years. The establishment of GAREA (General Authority for Real Estate Appraisal), known as Taqeem (تقويم), has brought professional standards to the industry. Licensed appraisers now follow standardized methodologies. Banks require official valuation reports before approving mortgages. And the government uses valuations to calculate taxes like the famous White Land Tax on undeveloped plots.
        </p>
        <p>
          But for the average buyer or seller, navigating the valuation landscape can be confusing. What is a White Deed? Why does undeveloped land have a special tax? How do you estimate a property's value yourself? This guide answers all these questions and more. Use our free <Link href="/property-valuation" className="text-desert-primary underline">Property Valuation Estimator</Link> to get a quick baseline estimate for any property in Saudi Arabia.
        </p>
      </GlassCard>

      <GlassCard>
        <h2>What is Property Valuation in Saudi Arabia?</h2>
        <p>
          Property valuation is the process of determining the current market value of a real estate property. In Saudi Arabia, this process is regulated by the General Authority for Real Estate Appraisal (GAREA / Taqeem), established in 2017 under the Ministry of Justice. GAREA sets standards, licenses appraisers, and operates the Taqeem platform for digital valuations.
        </p>
        <p>
          <strong>Why Valuation Matters:</strong> If you are buying a home, valuation tells you if the asking price is fair. If you are selling, it helps you set a realistic price. If you are getting a mortgage, the bank requires a valuation to ensure the property covers the loan. If you own undeveloped land, the government values your land to calculate the White Land Tax. In legal disputes over inheritance or divorce, valuation determines the fair division of property.
        </p>
        <p>
          <strong>The Three Main Valuation Methods Used in Saudi Arabia:</strong>
        </p>
        <div className="space-y-3">
          <div className="bg-[#0A0E1A] p-3 rounded-lg">
            <p className="text-white font-medium">Sales Comparison Approach</p>
            <p className="text-gray-400 text-sm">The most common method. The appraiser compares the property to similar properties that have recently sold in the same area. Adjustments are made for differences in size, age, condition, and amenities. This method works best when there are enough recent comparable sales in the neighborhood.</p>
          </div>
          <div className="bg-[#0A0E1A] p-3 rounded-lg">
            <p className="text-white font-medium">Cost Approach</p>
            <p className="text-gray-400 text-sm">Used for new buildings or unique properties. The appraiser estimates the cost of rebuilding the property from scratch (land value + construction cost minus depreciation). This is useful for insurance purposes and for properties where comparables are limited.</p>
          </div>
          <div className="bg-[#0A0E1A] p-3 rounded-lg">
            <p className="text-white font-medium">Income Approach</p>
            <p className="text-gray-400 text-sm">Used for income-generating properties like rental apartments or commercial buildings. The value is based on the income the property can generate, using a capitalization rate. This is less common for residential purchases but important for investors.</p>
          </div>
        </div>
      </GlassCard>

      <GlassCard>
        <h2>The White Deed (Sak Abyad) Issue</h2>
        <p>
          One of the most unique and highly searched topics in Saudi real estate is the "White Deed" (Sak Abyad). Understanding this is crucial for anyone dealing with land or property in the kingdom.
        </p>
        <p>
          <strong>What is a White Deed?</strong> A White Deed (صك أبيض) is the official title deed for a piece of undeveloped land — a plot that has no buildings, no infrastructure, and has not been developed. These are typically vacant plots held by individuals or companies as investments. The deed itself is a legal document proving ownership, but the land remains in its natural state.
        </p>
        <p>
          <strong>The Problem of Undeveloped Land:</strong> For many years, investors bought large tracts of land within city limits and held them without developing. This practice, known as "land banking," drove up housing prices by restricting the supply of developable land. As Saudi cities expanded, these undeveloped plots sat in prime locations, surrounded by growing neighborhoods, yet empty.
        </p>
        <p>
          <strong>The White Land Tax (WLT) Solution:</strong> To combat land banking and increase housing supply, the government introduced the White Land Tax in 2016. Under this law, undeveloped land within urban boundaries is subject to an annual tax of 2.5% of the land's market value. The tax applies to land owned by both individuals and companies, with certain exemptions.
        </p>
        <div className="bg-[#0A0E1A] p-4 rounded-xl mb-4">
          <p className="text-white font-semibold">White Land Tax Calculation Example</p>
          <p className="text-gray-400 text-sm mt-2">A 1,000 sqm plot in a prime Riyadh district valued at 2,000 SAR per sqm has a total value of 2,000,000 SAR.</p>
          <p className="text-gray-400 text-sm">Annual White Land Tax: 2,000,000 × 2.5% = <strong>50,000 SAR per year</strong></p>
          <p className="text-gray-400 text-sm mt-1">This tax creates a strong incentive for owners to either develop the land or sell it to someone who will.</p>
        </div>
        <p>
          <strong>Exemptions:</strong> Agricultural land outside urban boundaries, industrial land, government-owned land, land used for charitable or religious purposes, and land owned by developers with approved development plans are exempt from the White Land Tax. If you own a White Deed plot, check with GAREA to see if your land qualifies for an exemption.
        </p>
      </GlassCard>

      <GlassCard>
        <h2>Key Factors That Affect Property Value in KSA</h2>
        <div className="space-y-3">
          <div className="bg-[#0A0E1A] p-3 rounded-lg">
            <p className="text-white font-medium">1. Location (The Most Important Factor)</p>
            <p className="text-gray-400 text-sm">Proximity to schools (especially international schools), hospitals, mosques, shopping centers, main roads, and highways. In Riyadh, neighborhoods like Al Malqa, Al Narjis, Al Olaya, and Hittin command premium prices. In Jeddah, the Corniche area and districts like Al Shati and Al Rawdah are highly valued. In Dammam, areas near the coast and close to key business districts are most sought after.</p>
          </div>
          <div className="bg-[#0A0E1A] p-3 rounded-lg">
            <p className="text-white font-medium">2. Property Age and Condition</p>
            <p className="text-gray-400 text-sm">New builds (0-5 years old) typically sell at a premium. Properties 10-20 years old require discounts of 10-25% compared to new builds. Condition is critical — a well-maintained 15-year-old villa can be worth more than a neglected 5-year-old one. Factor in the cost of AC replacement (15,000-30,000 SAR per unit), kitchen renovation, and bathroom upgrades.</p>
          </div>
          <div className="bg-[#0A0E1A] p-3 rounded-lg">
            <p className="text-white font-medium">3. Amenities and Features</p>
            <p className="text-gray-400 text-sm">Number of bedrooms and bathrooms (master bedroom with attached bathroom adds value), central AC vs. window units, smart home features, parking availability (dedicated garage vs. street parking), landscaping and garden, security features (24/7 security building vs. standalone villa), and swimming pool or gym access.</p>
          </div>
          <div className="bg-[#0A0E1A] p-3 rounded-lg">
            <p className="text-white font-medium">4. Legal Status</p>
            <p className="text-gray-400 text-sm">A clear title deed (Sak) is essential. Properties with disputed ownership, inheritance complications, or outstanding mortgages are worth less and harder to sell. For White Deed land, the tax status matters — a plot with significant unpaid WLT liability will be valued lower due to the accrued tax debt.</p>
          </div>
          <div className="bg-[#0A0E1A] p-3 rounded-lg">
            <p className="text-white font-medium">5. Neighborhood Development Stage</p>
            <p className="text-gray-400 text-sm">Early-stage neighborhoods (newly developed districts with ongoing construction) offer lower prices but higher risk. Established neighborhoods with completed infrastructure, schools, and commercial centers command higher values. Upcoming metro stations, new hospitals, or major commercial developments in an area can significantly boost property values.</p>
          </div>
        </div>
      </GlassCard>

      <GlassCard>
        <h2>How to Get an Official Property Valuation</h2>
        <p>
          If you need a valuation for a mortgage, legal dispute, or tax assessment, you must use an official channel. Here is the process:
        </p>
        <div className="space-y-3">
          <div className="bg-[#0A0E1A] p-3 rounded-lg">
            <p className="text-white font-medium">Option 1: The Taqeem Platform</p>
            <p className="text-gray-400 text-sm">GAREA's Taqeem platform (taqeem.sa) is the government's digital valuation system. You can submit property details and receive an automated valuation based on GAREA's database of comparable sales. This is the fastest and most affordable option, typically costing 500-2,000 SAR. The report is accepted by most banks for mortgage applications.</p>
          </div>
          <div className="bg-[#0A0E1A] p-3 rounded-lg">
            <p className="text-white font-medium">Option 2: Licensed Private Appraiser</p>
            <p className="text-gray-400 text-sm">For complex properties (large commercial buildings, unique residential properties, or disputed valuations), hiring a licensed private appraiser is recommended. Appraisers registered with GAREA conduct a full site visit, take measurements, assess condition, and produce a comprehensive report. Costs range from 3,000 to 10,000 SAR. This is the preferred option for legal disputes and high-value transactions.</p>
          </div>
          <div className="bg-[#0A0E1A] p-3 rounded-lg">
            <p className="text-white font-medium">Documents Required for Valuation</p>
            <p className="text-gray-400 text-sm">Title deed (Sak) copy, property address and coordinates, floor plan or building dimensions (if available), and any existing valuation reports. For White Deed land, the plot number, district, and area in sqm are required.</p>
          </div>
        </div>
      </GlassCard>

      <GlassCard>
        <h2>How to Estimate Property Value Manually (The Formula)</h2>
        <p>
          While nothing replaces a professional valuation, you can get a reasonable estimate using this formula:
        </p>
        <div className="bg-[#0A0E1A] p-4 rounded-xl mb-4 font-mono text-sm text-gray-300">
          <p>Estimated Value = Area (sqm) × Base Price per sqm × Adjustment Factors</p>
        </div>
        <p>
          <strong>Step 1: Find the Base Price per sqm.</strong> Look at recent sales in the same neighborhood. For example, apartments in Al Malqa, Riyadh might sell for 4,000-5,500 SAR per sqm, while similar properties in a less central district might be 2,500-3,500 SAR per sqm.
        </p>
        <p>
          <strong>Step 2: Apply Adjustment Factors.</strong>
        </p>
        <ul className="list-disc list-inside space-y-1 text-gray-300 text-sm mb-4">
          <li>Property Age: -1% to -2% per year for properties over 10 years old</li>
          <li>Condition: Excellent (+5-10%), Good (0%), Fair (-5-15%), Poor (-15-30%)</li>
          <li>Amenities: Extra bathroom (+5%), Central AC (+5-10%), Parking (+5-10%)</li>
          <li>Floor Level: Ground floor apartments -5%, High floor apartments +5-10%</li>
          <li>View: Sea view or landmark view +10-25%</li>
        </ul>
        <p>
          <strong>Step 3: For White Deed Land.</strong> Adjust for the White Land Tax liability. A plot with 3 years of unpaid WLT (50,000 SAR per year = 150,000 SAR total liability) should be valued lower by approximately this amount. Also consider the development potential — land zoned for multi-story buildings is worth more than land zoned for single-family villas.
        </p>
      </GlassCard>

      <GlassCard>
        <h2>Real-Life Valuation Examples</h2>

        <h3>Example 1: Valuing an Apartment in Riyadh</h3>
        <div className="bg-[#0A0E1A] p-4 rounded-xl mb-4">
          <p className="text-white font-semibold">300 sqm Apartment in Al Malqa, Riyadh</p>
          <p className="text-gray-400 text-sm mt-2">Base price per sqm: 5,000 SAR (from recent comparable sales)</p>
          <p className="text-gray-400 text-sm">Base value: 300 × 5,000 = 1,500,000 SAR</p>
          <p className="text-gray-400 text-sm">Adjustments: -10% for 12-year-old building, +5% for central AC, 0% for good condition</p>
          <p className="text-gray-400 text-sm">Total adjustment: -5%</p>
          <p className="text-gray-400 text-sm text-desert-primary mt-1">Estimated Value: 1,500,000 × 0.95 = 1,425,000 SAR</p>
          <p className="text-gray-500 text-xs mt-1">Compare with the seller's asking price of 1,550,000 SAR — appears overpriced by ~125,000 SAR</p>
        </div>

        <h3>Example 2: Valuing a White Deed Plot in Jeddah</h3>
        <div className="bg-[#0A0E1A] p-4 rounded-xl">
          <p className="text-white font-semibold">1,000 sqm Vacant Plot in Al Shati, Jeddah</p>
          <p className="text-gray-400 text-sm mt-2">Base price per sqm: 3,500 SAR (vacant land in the area)</p>
          <p className="text-gray-400 text-sm">Base value: 1,000 × 3,500 = 3,500,000 SAR</p>
          <p className="text-gray-400 text-sm">White Land Tax liability: 3,500,000 × 2.5% = 87,500 SAR/year.</p>
          <p className="text-gray-400 text-sm">Assuming the seller has not paid WLT for 2 years: 175,000 SAR liability</p>
          <p className="text-gray-400 text-sm">Adjustments: -5% for WTL liability, +10% for prime beach proximity</p>
          <p className="text-gray-400 text-sm text-desert-primary mt-1">Estimated Value: 3,500,000 × 1.05 = 3,675,000 SAR, minus 175,000 SAR WLT debt ≈ 3,500,000 SAR</p>
        </div>
      </GlassCard>

      <GlassCard>
        <h2>Common Mistakes in Property Valuation</h2>
        <div className="space-y-3">
          <div className="bg-[#0A0E1A] p-3 rounded-lg">
            <p className="text-white font-medium">1. Relying Only on the Seller's Asking Price</p>
            <p className="text-gray-400 text-sm">The asking price is not the market value. Sellers often price 10-20% above fair value expecting negotiation. Always get an independent assessment before making an offer.</p>
          </div>
          <div className="bg-[#0A0E1A] p-3 rounded-lg">
            <p className="text-white font-medium">2. Ignoring Renovation Costs</p>
            <p className="text-gray-400 text-sm">A 20-year-old villa might look fine, but the AC system, plumbing, electrical wiring, and kitchen may need replacement. Get a contractor's estimate for necessary renovations and subtract this from the valuation.</p>
          </div>
          <div className="bg-[#0A0E1A] p-3 rounded-lg">
            <p className="text-white font-medium">3. Not Checking Municipal Zoning (Baladiya Laws)</p>
            <p className="text-gray-400 text-sm">The municipal zoning laws determine what you can build on the land. A plot zoned for a 2-story villa is worth less than one zoned for a 10-story apartment building. Check with the local Baladiya office before making an offer.</p>
          </div>
          <div className="bg-[#0A0E1A] p-3 rounded-lg">
            <p className="text-white font-medium">4. Overlooking White Land Tax for Undeveloped Plots</p>
            <p className="text-gray-400 text-sm">Many buyers of White Deed land forget to check the WLT payment status. Unpaid taxes become a liability that transfers with the land. Always request a WLT clearance certificate from the seller.</p>
          </div>
        </div>
      </GlassCard>

      <GlassCard>
        <h2>How to Use the Sauditoolhub Property Valuation Estimator</h2>
        <p>
          Our <Link href="/property-valuation" className="text-desert-primary font-bold underline">Property Valuation Estimator</Link> provides a free, instant baseline estimate. Enter the property location, type, size, age, and key features. The tool uses market data and comparable sales to generate an estimated value range.
        </p>
        <p>
          Also explore our <Link href="/rett-tax-calculator" className="text-desert-primary underline">RETT Calculator</Link> to understand the 5% property tax, the <Link href="/mortgage-vs-rent" className="text-desert-primary underline">Mortgage vs. Rent Calculator</Link> for home buying decisions, and <Link href="/blog" className="text-desert-primary underline">our blog</Link> for more guides on Saudi real estate. Buying as an expat? Plan your funding with the <Link href="/eosb-calculator" className="text-desert-primary underline">EOSB Calculator</Link> and the <Link href="/final-settlement-calculator" className="text-desert-primary underline">Final Settlement Calculator</Link>.
        </p>
      </GlassCard>

      <GlassCard>
        <h2>Conclusion</h2>
        <p>
          Property valuation is the foundation of smart real estate decisions in Saudi Arabia. Whether you are buying a family home in Riyadh, selling a villa in Jeddah, or evaluating a White Deed plot in Dammam, knowing the true market value protects you from overpaying and helps you negotiate with confidence.
        </p>
        <p>
          The Saudi government has made significant progress in professionalizing the valuation industry through GAREA and the Taqeem platform. The White Land Tax has created a strong incentive for land development, which is gradually increasing housing supply and making homeownership more accessible.
        </p>
        <p>
          Start with the <Link href="/property-valuation" className="text-desert-primary underline">Sauditoolhub Property Valuation Estimator</Link> for a quick estimate, then consult a licensed appraiser for official purposes. Knowledge is power in real estate — and valuation knowledge is the most powerful tool you can have.
        </p>
      </GlassCard>
    </article>
  )
}

function ArContent() {
  return (
    <article dir="rtl">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchemaAr) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": faqsAr.map(f => ({ "@type": "Question", "name": f.question, "acceptedAnswer": { "@type": "Answer", "text": f.answer } })) }) }} />

      <div className="text-center mb-8">
        <p className="text-desert-primary text-sm font-medium tracking-widest uppercase">دليل تقييم العقارات</p>
        <h1 className="text-3xl md:text-4xl font-bold text-white mt-2">الدليل الشامل لتقييم العقارات والصك الأبيض في السعودية 2026</h1>
        <p className="text-gray-400 mt-3 max-w-2xl mx-auto">
          سواء كنت تشتري أو تبيع أو تحصل على تمويل عقاري، معرفة القيمة الحقيقية للعقار هي أساس أي قرار ذكي في العقارات. هذا الدليل يشرح طرق التقييم، قضية الصك الأبيض، وكيفية تجنب دفع مبالغ زائدة.
        </p>
      </div>

      <GlassCard>
        <h2>مقدمة</h2>
        <p>
          تخيل أنك تدخل مكتباً عقارياً في الرياض. يعرض عليك الوسيط فيلا في العليا بسعر 3,200,000 ريال. هل هذا سعر عادل؟ كيف تعرف إذا كنت تدفع 200,000 ريال زيادة أم تحصل على صفقة العمر؟ بدون تقييم عقاري مناسب، أنت تخمن بمئات الآلاف من الريالات على المحك.
        </p>
        <p>
          تقييم العقارات في السعودية أصبح أكثر تنظيماً وشفافية في السنوات الأخيرة. إنشاء الهيئة العامة لتقييم العقارات (تقييم) جلب معايير مهنية للصناعة. المثمنون المرخصون يتبعون منهجيات موحدة. البنوك تطلب تقارير تقييم رسمية قبل الموافقة على التمويل. والحكومة تستخدم التقييمات لحساب الضرائب مثل ضريبة الأراضي البيضاء الشهيرة.
        </p>
        <p>
          استخدم <Link href="/property-valuation" className="text-desert-primary underline">أداة تقييم العقارات</Link> المجانية للحصول على تقدير أساسي سريع لأي عقار في السعودية.
        </p>
      </GlassCard>

      <GlassCard>
        <h2>ما هو تقييم العقارات في السعودية؟</h2>
        <p>
          تقييم العقارات هو عملية تحديد القيمة السوقية الحالية للعقار. في السعودية، تنظم الهيئة العامة لتقييم العقارات (تقييم) هذه العملية، وتضع المعايير، وترخص المثمنين، وتدير منصة تقييم للتقييمات الرقمية.
        </p>
        <p>
          <strong>طرق التقييم الرئيسية:</strong>
        </p>
        <div className="space-y-3">
          <div className="bg-[#0A0E1A] p-3 rounded-lg">
            <p className="text-white font-medium">طريقة المقارنة البيعية</p>
            <p className="text-gray-400 text-sm">الأكثر شيوعاً. يقارن المثمن العقار بعقارات مماثلة بيعت مؤخراً في نفس المنطقة.</p>
          </div>
          <div className="bg-[#0A0E1A] p-3 rounded-lg">
            <p className="text-white font-medium">طريقة التكلفة</p>
            <p className="text-gray-400 text-sm">تستخدم للمباني الجديدة. يقدر المثمن تكلفة إعادة بناء العقار من الصفر.</p>
          </div>
          <div className="bg-[#0A0E1A] p-3 rounded-lg">
            <p className="text-white font-medium">طريقة الدخل</p>
            <p className="text-gray-400 text-sm">تستخدم للعقارات المدرة للدخل مثل الشقق الإيجارية والمباني التجارية.</p>
          </div>
        </div>
      </GlassCard>

      <GlassCard>
        <h2>قضية الصك الأبيض</h2>
        <p>
          الصك الأبيض هو صك ملكية أرض غير مطورة - قطعة أرض لا تحتوي على مباني أو بنية تحتية. امتلك المستثمرون مساحات كبيرة من الأراضي داخل المدن واحتفظوا بها دون تطوير، مما رفع أسعار المساكن.
        </p>
        <p>
          <strong>ضريبة الأراضي البيضاء:</strong> لمواجهة احتكار الأراضي، فرضت الحكومة ضريبة بنسبة 2.5% من القيمة السوقية سنوياً على الأراضي غير المطورة داخل النطاق العمراني. أرض بقيمة 2,000,000 ريال تتحمل ضريبة 50,000 ريال سنوياً.
        </p>
        <p>
          <strong>الإعفاءات:</strong> الأراضي الزراعية خارج النطاق العمراني، الأراضي الصناعية، وأراضي الجهات الحكومية معفاة.
        </p>
      </GlassCard>

      <GlassCard>
        <h2>العوامل المؤثرة على قيمة العقار</h2>
        <div className="space-y-3">
          <div className="bg-[#0A0E1A] p-3 rounded-lg">
            <p className="text-white font-medium">1. الموقع</p>
            <p className="text-gray-400 text-sm">الأهم. القرب من المدارس والمستشفيات والمساجد والطرق الرئيسية. في الرياض، الملقا والنرجس والعليا بأسعار ممتازة.</p>
          </div>
          <div className="bg-[#0A0E1A] p-3 rounded-lg">
            <p className="text-white font-medium">2. عمر العقار وحالته</p>
            <p className="text-gray-400 text-sm">المباني الجديدة (0-5 سنوات) بأسعار أعلى. العقارات 10-20 سنة تحتاج خصم 10-25%.</p>
          </div>
          <div className="bg-[#0A0E1A] p-3 rounded-lg">
            <p className="text-white font-medium">3. المرافق والميزات</p>
            <p className="text-gray-400 text-sm">عدد الغرف والحمامات، التكييف المركزي، مواقف السيارات، الحدائق، وميزات المنزل الذكي.</p>
          </div>
          <div className="bg-[#0A0E1A] p-3 rounded-lg">
            <p className="text-white font-medium">4. الوضع القانوني</p>
            <p className="text-gray-400 text-sm">صك الملكية الواضح ضروري. العقارات ذات النزاعات أو الديون أقل قيمة.</p>
          </div>
        </div>
      </GlassCard>

      <GlassCard>
        <h2>كيف تحصل على تقييم عقاري رسمي</h2>
        <div className="space-y-3">
          <div className="bg-[#0A0E1A] p-3 rounded-lg">
            <p className="text-white font-medium">منصة تقييم (taqeem.sa)</p>
            <p className="text-gray-400 text-sm">أسرع وأرخص خيار. التكلفة 500-2,000 ريال. التقرير مقبول لدى معظم البنوك.</p>
          </div>
          <div className="bg-[#0A0E1A] p-3 rounded-lg">
            <p className="text-white font-medium">مثمن خاص مرخص</p>
            <p className="text-gray-400 text-sm">للعقارات المعقدة. التكلفة 3,000-10,000 ريال. يشمل زيارة ميدانية وتقرير شامل.</p>
          </div>
        </div>
      </GlassCard>

      <GlassCard>
        <h2>صيغة التقييم اليدوي</h2>
        <div className="bg-[#0A0E1A] p-4 rounded-xl mb-4 font-mono text-sm text-gray-300">
          <p>القيمة المقدرة = المساحة (م²) × السعر الأساسي للمتر × عوامل التعديل</p>
        </div>
        <p>مثال: شقة 300 م² في الملقا، الرياض بسعر أساسي 5,000 ريال/م² = 1,500,000 ريال. تعديلات: -10% لعمر 12 سنة، +5% لتكييف مركزي، 0% لحالة جيدة = -5%. القيمة = 1,425,000 ريال.</p>
      </GlassCard>

      <GlassCard>
        <h2>كيفية استخدام أداة تقييم العقارات</h2>
        <p>
          <Link href="/property-valuation" className="text-desert-primary font-bold underline">أداة تقييم العقارات</Link> تقدم تقديراً أساسياً مجانياً فورياً. أدخل موقع العقار ونوعه ومساحته وعمره.
        </p>
        <p>
          اكتشف أيضاً <Link href="/rett-tax-calculator" className="text-desert-primary underline">حاسبة ضريبة التصرفات العقارية</Link> و <Link href="/mortgage-vs-rent" className="text-desert-primary underline">حاسبة الرهن مقابل الإيجار</Link>. زر <Link href="/blog" className="text-desert-primary underline">مدونتنا</Link> للمزيد. إذا كنت مقيماً تشتري عقاراً، خطط لتمويلك عبر <Link href="/eosb-calculator" className="text-desert-primary underline">حاسبة مكافأة نهاية الخدمة</Link> و <Link href="/final-settlement-calculator" className="text-desert-primary underline">حاسبة التسوية النهائية</Link>.
        </p>
      </GlassCard>

      <GlassCard>
        <h2>الخاتمة</h2>
        <p>
          تقييم العقارات هو أساس القرارات العقارية الذكية في السعودية. سواء كنت تشتري منزلاً عائلياً في الرياض أو تبيع فيلا في جدة، معرفة القيمة السوقية الحقيقية تحميك من دفع مبالغ زائدة وتساعدك على التفاوض بثقة.
        </p>
        <p>
          ابدأ مع <Link href="/property-valuation" className="text-desert-primary underline">أداة تقييم Sauditoolhub</Link> للحصول على تقدير سريع، ثم استشر مثمناً مرخصاً للأغراض الرسمية.
        </p>
      </GlassCard>
    </article>
  )
}

function UrContent() {
  return (
    <article dir="rtl">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchemaUr) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": faqsUr.map(f => ({ "@type": "Question", "name": f.question, "acceptedAnswer": { "@type": "Answer", "text": f.answer } })) }) }} />

      <div className="text-center mb-8">
        <p className="text-desert-primary text-sm font-medium tracking-widest uppercase">ریئل اسٹیٹ ویلیوایشن گائیڈ</p>
        <h1 className="text-3xl md:text-4xl font-bold text-white mt-2">سعودی عرب 2026 میں پراپرٹی ویلیوایشن اور وائٹ ڈیڈ کا مکمل گائیڈ</h1>
        <p className="text-gray-400 mt-3 max-w-2xl mx-auto">
          چاہے آپ خرید رہے ہوں، بیچ رہے ہوں یا مارگیج لے رہے ہوں، پراپرٹی کی حقیقی قیمت جاننا کسی بھی عقلمند فیصلے کی بنیاد ہے۔
        </p>
      </div>

      <GlassCard>
        <h2>تعارف</h2>
        <p>
          تصور کریں کہ آپ ریاض میں رئیل اسٹیٹ آفس میں داخل ہوتے ہیں۔ ایجنٹ آپ کو العلیا میں ولا دکھاتا ہے۔ قیمت 32 لاکھ ریال ہے۔ کیا یہ مناسب قیمت ہے؟ بغیر پراپرٹی ویلیوایشن کے، آپ لاکھوں ریال کے معاملے میں اندازہ لگا رہے ہیں۔
        </p>
        <p>
          سعودی عرب میں پراپرٹی ویلیوایشن حالیہ برسوں میں زیادہ منظم اور شفاف ہو گئی ہے۔ GAREA (تقییم) کے قیام نے پیشہ ورانہ معیار لائے۔ بینک مارگیج سے پہلے سرکاری ویلیوایشن رپورٹ مانگتے ہیں۔
        </p>
        <p>
          <Link href="/property-valuation" className="text-desert-primary underline">پراپرٹی ویلیوایشن ایسٹیمیٹر</Link> استعمال کریں۔
        </p>
      </GlassCard>

      <GlassCard>
        <h2>سعودی عرب میں پراپرٹی ویلیوایشن کیا ہے؟</h2>
        <p>
          پراپرٹی ویلیوایشن رئیل اسٹیٹ کی موجودہ مارکیٹ ویلیو کا تعین کرنے کا عمل ہے۔ GAREA معیارات طے کرتا ہے، ایپریزرز کو لائسنس دیتا ہے، اور تقییم پلیٹ فارم چلاتا ہے۔
        </p>
        <p>
          <strong>تین اہم طریقے:</strong> فروخت موازنہ (سب سے عام)، لاگت (نئی عمارتوں کے لیے)، اور آمدنی (کرائے کی جائیدادوں کے لیے)۔
        </p>
      </GlassCard>

      <GlassCard>
        <h2>وائٹ ڈیڈ (سفید دستاویز) کا مسئلہ</h2>
        <p>
          وائٹ ڈیڈ غیر ترقی یافتہ زمین کا سرکاری عنوان ہے۔ سرمایہ کاروں نے شہروں میں بڑی زمینیں خریدیں اور ترقی نہیں کی، جس سے قیمتیں بڑھیں۔
        </p>
        <p>
          <strong>وائٹ لینڈ ٹیکس:</strong> زمین کی مارکیٹ ویلیو کا 2.5% سالانہ۔ 20 لاکھ کی زمین پر 50,000 ریال سالانہ ٹیکس۔
        </p>
      </GlassCard>

      <GlassCard>
        <h2>پراپرٹی ویلیو کو متاثر کرنے والے عوامل</h2>
        <div className="space-y-3">
          <div className="bg-[#0A0E1A] p-3 rounded-lg">
            <p className="text-white font-medium">1. مقام</p>
            <p className="text-gray-400 text-sm">اسکول، ہسپتال، مسجد اور سڑکوں سے قربت۔</p>
          </div>
          <div className="bg-[#0A0E1A] p-3 rounded-lg">
            <p className="text-white font-medium">2. عمر اور حالت</p>
            <p className="text-gray-400 text-sm">نئی عمارتیں پریمیم پر، پرانی پر 10-25% ڈسکاؤنٹ۔</p>
          </div>
        </div>
      </GlassCard>

      <GlassCard>
        <h2>نتیجہ</h2>
        <p>
          پراپرٹی ویلیوایشن سعودی عرب میں ذمہ دار رئیل اسٹیٹ فیصلوں کی بنیاد ہے۔ <Link href="/property-valuation" className="text-desert-primary underline">Sauditoolhub ایسٹیمیٹر</Link> سے شروع کریں اور سرکاری مقاصد کے لیے لائسنس یافتہ ایپریزر سے مشورہ کریں۔
        </p>
        <p>
          مزید کے لیے <Link href="/blog" className="text-desert-primary underline">ہمارا بلاگ</Link> دیکھیں۔
        </p>
      </GlassCard>
    </article>
  )
}

function TlContent() {
  return (
    <article>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchemaTl) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": faqsTl.map(f => ({ "@type": "Question", "name": f.question, "acceptedAnswer": { "@type": "Answer", "text": f.answer } })) }) }} />

      <div className="text-center mb-8">
        <p className="text-desert-primary text-sm font-medium tracking-widest uppercase">Gabay sa Pagpapahalaga ng Ari-arian</p>
        <h1 className="text-3xl md:text-4xl font-bold text-white mt-2">Gabay sa Property Valuation at White Deed sa Saudi Arabia 2026</h1>
        <p className="text-gray-400 mt-3 max-w-2xl mx-auto">
          Kung ikaw ay bumibili, nagbebenta, o kumukuha ng mortgage, ang pag-alam sa tunay na halaga ng property ay pundasyon ng matalinong desisyon sa real estate.
        </p>
      </div>

      <GlassCard>
        <h2>Introduksyon</h2>
        <p>
          Isipin na pumasok ka sa isang real estate office sa Riyadh. Ipinapakita ng agent ang isang villa sa Al Olaya. Ang presyo ay 3,200,000 SAR. Makatarungan ba iyon? Kung walang property valuation, ikaw ay nanghuhula lamang na may daan-daang libong riyal ang nakataya.
        </p>
        <p>
          Ang property valuation sa Saudi Arabia ay naging mas nakabalangkas at transparent sa mga nakaraang taon. Ang pagtatatag ng GAREA (Taqeem) ay nagdala ng propesyonal na mga pamantayan. Ang mga bangko ay nangangailangan ng opisyal na ulat bago aprubahan ang mortgage.
        </p>
        <p>
          Gamitin ang aming libreng <Link href="/property-valuation" className="text-desert-primary underline">Property Valuation Estimator</Link>.
        </p>
      </GlassCard>

      <GlassCard>
        <h2>Ano ang Property Valuation?</h2>
        <p>
          Ang property valuation ay ang proseso ng pagtukoy sa kasalukuyang market value ng isang real estate property. Kinokontrol ito ng GAREA. Ang tatlong pangunahing paraan ay: Sales Comparison (pinaka-karaniwan), Cost Approach (para sa mga bagong gusali), at Income Approach (para sa mga rental property).
        </p>
      </GlassCard>

      <GlassCard>
        <h2>Ang White Deed (Sak Abyad)</h2>
        <p>
          Ang White Deed ay ang titulo para sa hindi pa nauunlad na lupa. Maraming mamumuhunan ang bumili ng malalawak na lupain sa loob ng mga lungsod at hindi ito pinauunlad, na nagpapataas ng presyo ng pabahay.
        </p>
        <p>
          <strong>White Land Tax:</strong> 2.5% ng market value ng lupa taun-taon. Ang lupa na nagkakahalaga ng 2,000,000 SAR ay may buwis na 50,000 SAR bawat taon.
        </p>
      </GlassCard>

      <GlassCard>
        <h2>Konklusyon</h2>
        <p>
          Ang property valuation ay pundasyon ng matalinong desisyon sa real estate sa Saudi Arabia. Magsimula sa <Link href="/property-valuation" className="text-desert-primary underline">Sauditoolhub Estimator</Link> at kumonsulta sa lisensyadong appraiser para sa opisyal na layunin. Bisitahin ang <Link href="/blog" className="text-desert-primary underline">aming blog</Link> para sa higit pang gabay.
        </p>
      </GlassCard>
    </article>
  )
}

function BnContent() {
  return (
    <article>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchemaBn) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": faqsBn.map(f => ({ "@type": "Question", "name": f.question, "acceptedAnswer": { "@type": "Answer", "text": f.answer } })) }) }} />

      <div className="text-center mb-8">
        <p className="text-desert-primary text-sm font-medium tracking-widest uppercase">সম্পত্তি মূল্যায়ন গাইড</p>
        <h1 className="text-3xl md:text-4xl font-bold text-white mt-2">সৌদি আরব ২০২৬-এ সম্পত্তি মূল্যায়ন ও হোয়াইট ডিডের সম্পূর্ণ গাইড</h1>
        <p className="text-gray-400 mt-3 max-w-2xl mx-auto">
          আপনি কিনুন, বিক্রি করুন বা মর্টগেজ নিন, সম্পত্তির প্রকৃত মূল্য জানা যেকোনো স্মার্ট রিয়েল এস্টেট সিদ্ধান্তের ভিত্তি।
        </p>
      </div>

      <GlassCard>
        <h2>ভূমিকা</h2>
        <p>
          কল্পনা করুন আপনি রিয়াদের একটি রিয়েল এস্টেট অফিসে প্রবেশ করছেন। এজেন্ট আপনাকে আল ওলায়ার একটি ভিলা দেখায়। দাম ৩২,০০০,০০০ SAR। এটি কি ন্যায্য মূল্য? সঠিক সম্পত্তি মূল্যায়ন ছাড়া, আপনি লক্ষ লক্ষ রিয়ালের ব্যাপারে অনুমান করছেন।
        </p>
        <p>
          সৌদি আরবে সম্পত্তি মূল্যায়ন সাম্প্রতিক বছরগুলিতে আরও কাঠামোগত এবং স্বচ্ছ হয়েছে। GAREA (তাকমিম) প্রতিষ্ঠা পেশাদার মান নিয়ে এসেছে। মর্টগেজ অনুমোদনের আগে ব্যাংকগুলি সরকারি মূল্যায়ন রিপোর্ট প্রয়োজন।
        </p>
        <p>
          আমাদের বিনামূল্যের <Link href="/property-valuation" className="text-desert-primary underline">সম্পত্তি মূল্যায়ন এস্টিমেটর</Link> ব্যবহার করুন।
        </p>
      </GlassCard>

      <GlassCard>
        <h2>সম্পত্তি মূল্যায়ন কী?</h2>
        <p>
          সম্পত্তি মূল্যায়ন হল রিয়েল এস্টেট সম্পত্তির বর্তমান বাজার মূল্য নির্ধারণের প্রক্রিয়া। এটি GAREA দ্বারা নিয়ন্ত্রিত। তিনটি প্রধান পদ্ধতি: বিক্রয় তুলনা (সবচেয়ে সাধারণ), ব্যয় পদ্ধতি (নতুন ভবনের জন্য), এবং আয় পদ্ধতি (ভাড়ার সম্পত্তির জন্য)।
        </p>
      </GlassCard>

      <GlassCard>
        <h2>হোয়াইট ডিড (সক আবিয়াজ) ইস্যু</h2>
        <p>
          হোয়াইট ডিড হল অনুন্নত জমির দলিল। বিনিয়োগকারীরা শহরের মধ্যে বিস্তৃত জমি কিনে উন্নয়ন না করে রাখে, যা আবাসনের দাম বাড়িয়ে দেয়।
        </p>
        <p>
          <strong>হোয়াইট ল্যান্ড ট্যাক্স:</strong> জমির বাজার মূল্যের ২.৫% বার্ষিক। ২০,০০,০০০ SAR মূল্যের জমিতে ৫০,০০০ SAR বার্ষিক কর।
        </p>
      </GlassCard>

      <GlassCard>
        <h2>উপসংহার</h2>
        <p>
          সম্পত্তি মূল্যায়ন সৌদি আরবে স্মার্ট রিয়েল এস্টেট সিদ্ধান্তের ভিত্তি। <Link href="/property-valuation" className="text-desert-primary underline">Sauditoolhub এস্টিমেটর</Link> দিয়ে শুরু করুন এবং সরকারি উদ্দেশ্যে লাইসেন্সপ্রাপ্ত অ্যাপ্রেইজারের সাথে পরামর্শ করুন। আরও গাইডের জন্য <Link href="/blog" className="text-desert-primary underline">আমাদের ব্লগ</Link> দেখুন।
        </p>
      </GlassCard>
    </article>
  )
}

export default async function PropertyValuationGuidePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  return (
    <div className="relative z-10 px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        {locale === 'ar' ? <ArContent /> : locale === 'ur' ? <UrContent /> : locale === 'tl' ? <TlContent /> : locale === 'bn' ? <BnContent /> : <EnContent />}
      </div>
    </div>
  )
}
