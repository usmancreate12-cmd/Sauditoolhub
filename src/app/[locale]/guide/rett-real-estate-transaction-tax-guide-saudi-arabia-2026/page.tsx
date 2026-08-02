import type { Metadata } from 'next'
import Link from 'next/link'
import { GlassCard } from '@/components/GlassCard'

type Props = { params: Promise<{ locale: string }> }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params
  const base = '/guide/rett-real-estate-transaction-tax-guide-saudi-arabia-2026'
  const titles: Record<string, string> = {
    en: 'The Complete Guide to Real Estate Transaction Tax (RETT) in Saudi Arabia 2026',
    ar: 'الدليل الشامل لضريبة التصرفات العقارية في السعودية 2026',
    ur: 'سعودی عرب میں ریئل اسٹیٹ ٹرانزیکشن ٹیکس (RETT) کا مکمل گائیڈ 2026',
    tl: 'Gabay sa Real Estate Transaction Tax (RETT) sa Saudi Arabia 2026',
    bn: 'সৌদি আরবে রিয়েল এস্টেট ট্রানজেকশন ট্যাক্স (RETT)-এর সম্পূর্ণ গাইড 2026',
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
  "headline": 'The Complete Guide to Real Estate Transaction Tax (RETT) in Saudi Arabia 2026',
  "description": 'Learn how RETT (5% property tax) works in Saudi Arabia 2026. Understand exemptions, calculation formulas, payment deadlines, and use the free RETT calculator.',
  "author": { "@type": "Organization", "name": "Sauditoolhub" },
  "datePublished": "2026-06-01",
  "dateModified": "2026-07-28"
}

const articleSchemaAr = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": 'الدليل الشامل لضريبة التصرفات العقارية في السعودية 2026',
  "description": 'تعرف على ضريبة التصرفات العقارية 5% في السعودية 2026. فهم الإعفاءات، معادلات الحساب، مواعيد الدفع، واستخدم حاسبة الضريبة المجانية.',
  "author": { "@type": "Organization", "name": "Sauditoolhub" },
  "datePublished": "2026-06-01",
  "dateModified": "2026-07-28"
}

const articleSchemaUr = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": 'سعودی عرب میں ریئل اسٹیٹ ٹرانزیکشن ٹیکس (RETT) کا مکمل گائیڈ 2026',
  "description": 'سعودی عرب 2026 میں RETT (5% پراپرٹی ٹیکس) کو سمجھیں۔ رعایتیں، حساب کتاب، ادائیگی کی آخری تاریخ، اور مفت RETT کیلکولیٹر استعمال کریں۔',
  "author": { "@type": "Organization", "name": "Sauditoolhub" },
  "datePublished": "2026-06-01",
  "dateModified": "2026-07-28"
}

const articleSchemaTl = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": 'Gabay sa Real Estate Transaction Tax (RETT) sa Saudi Arabia 2026',
  "description": 'Alamin kung paano gumagana ang RETT (5% property tax) sa Saudi Arabia 2026. Unawain ang exemptions, formula sa pagkalkula, deadlines, at gamitin ang libreng calculator.',
  "author": { "@type": "Organization", "name": "Sauditoolhub" },
  "datePublished": "2026-06-01",
  "dateModified": "2026-07-28"
}

const articleSchemaBn = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": 'সৌদি আরবে রিয়েল এস্টেট ট্রানজেকশন ট্যাক্স (RETT)-এর সম্পূর্ণ গাইড 2026',
  "description": 'সৌদি আরব 2026-এ RETT (5% সম্পত্তি কর) কীভাবে কাজ করে তা জানুন। ছাড়, গণনার সূত্র, পরিশোধের সময়সীমা বুঝুন এবং বিনামূল্যে ক্যালকুলেটর ব্যবহার করুন।',
  "author": { "@type": "Organization", "name": "Sauditoolhub" },
  "datePublished": "2026-06-01",
  "dateModified": "2026-07-28"
}

const faqsEn = [
  { question: 'What is the Real Estate Transaction Tax (RETT) in Saudi Arabia?', answer: "RETT (Real Estate Transaction Tax) is a 5% tax imposed by ZATCA on the sale, purchase, or transfer of real estate properties in Saudi Arabia. It applies to residential, commercial, and land transactions. The tax is calculated on the higher of the property's selling price or its fair market value, and must be paid within 60 days of the transaction date." },
  { question: 'Who pays the RETT tax in Saudi Arabia?', answer: 'The buyer is solely responsible for paying the 5% RETT tax in Saudi Arabia. This is a legal requirement under ZATCA regulations. The tax is calculated on the purchase price or fair market value of the property, whichever is higher. Always budget an additional 5% on top of the property price when planning your purchase.' },
  { question: 'Is there any exemption from RETT for first-time homebuyers?', answer: "Yes, Saudi nationals purchasing their first home may qualify for a RETT exemption on properties valued up to 1,000,000 SAR. The conditions include: the buyer must be a Saudi national, the property must be their first residential property, and the value must not exceed 1 million SAR. The exemption must be applied through ZATCA's portal within the 60-day payment window." },
  { question: 'How is the RETT tax calculated?', answer: 'RETT is calculated as: Property Value × 5% (0.05). For example, a property purchased for 800,000 SAR would incur a tax of 800,000 × 0.05 = 40,000 SAR. If the property is sold below market value, ZATCA may assess tax based on the fair market value instead. The total cost to the buyer is the property price plus the 5% tax.' },
  { question: 'When must RETT be paid?', answer: 'RETT must be paid within 60 calendar days from the date of the real estate transaction. Failure to pay on time results in a penalty of 1% of the unpaid tax for each month of delay. It is crucial to file and pay through the ZATCA portal or authorized bank channels promptly.' },
  { question: 'Does RETT apply to gifted properties or inheritance?', answer: 'Inheritance transfers (wirasat) are generally exempt from RETT. Gifted properties may also be exempt if transferred between direct relatives (spouse, parents, children). Divorce settlement property divisions are also exempt. However, it is recommended to verify your specific situation with ZATCA or a licensed real estate consultant.' },
  { question: 'Can the seller pay the RETT instead of the buyer?', answer: 'While the law states the buyer is responsible for RETT, the buyer and seller can agree in the sales contract that the seller will bear the tax cost. However, this is uncommon in practice. If agreed, the contract should explicitly state this arrangement to avoid disputes later.' },
  { question: "What happens if I don't pay RETT on time?", answer: 'Late payment of RETT results in a penalty of 1% per month on the unpaid tax amount. In severe cases, ZATCA may also restrict property registration and legal ownership transfer. The penalty accrues from the day after the 60-day deadline until full payment is made.' },
]

const faqsAr = [
  { question: 'ما هي ضريبة التصرفات العقارية في السعودية؟', answer: 'ضريبة التصرفات العقارية (RETT) هي ضريبة بنسبة 5% تفرضها زاتكا على بيع أو شراء أو نقل ملكية العقارات في السعودية. تشمل العقارات السكنية والتجارية والأراضي. تحسب الضريبة على أساس أعلى القيمتين: سعر البيع أو القيمة العادلة للسوق.' },
  { question: 'من المسؤول عن دفع ضريبة التصرفات العقارية؟', answer: 'المشتري هو المسؤول الوحيد عن دفع ضريبة 5% بحسب أنظمة زاتكا. تحسب الضريبة على سعر الشراء أو القيمة العادلة أيهما أعلى. يجب تضمين 5% إضافية في ميزانية شراء العقار.' },
  { question: 'هل هناك إعفاء من ضريبة التصرفات العقارية للمشتري لأول مرة؟', answer: 'نعم، المواطنون السعوديون الذين يشترون منزلهم الأول قد يحصلون على إعفاء من RETT للعقارات التي تصل قيمتها إلى 1,000,000 ريال. الشروط: المشتري سعودي الجنسية، العقار أول سكن، والقيمة لا تتجاوز مليون ريال.' },
  { question: 'كيف تحسب ضريبة التصرفات العقارية؟', answer: 'تحسب كالتالي: قيمة العقار × 5%. مثال: عقار بقيمة 800,000 ريال الضريبة = 800,000 × 0.05 = 40,000 ريال. إذا بيع العقار بأقل من سعر السوق، قد تحتسب زاتكا الضريبة على القيمة العادلة.' },
  { question: 'متى يجب دفع ضريبة التصرفات العقارية؟', answer: 'يجب الدفع خلال 60 يوماً من تاريخ الصفقة. التأخير يؤدي إلى غرامة 1% شهرياً من قيمة الضريبة غير المدفوعة. يجب السداد عبر بوابة زاتكا أو القنوات البنكية المعتمدة.' },
  { question: 'هل تنطبق ضريبة التصرفات العقارية على الميراث والهبات؟', answer: 'الوراثة (الوصية) معفاة عموماً من RETT. الهبات بين الأقارب المباشرين (الزوج، الوالدين، الأبناء) معفاة أيضاً. تقسيم الممتلكات في الطلاق معفى كذلك. ينصح بالتحقق مع زاتكا أو مستشار عقاري.' },
  { question: 'هل يمكن للبائع دفع ضريبة التصرفات العقارية بدلاً من المشتري؟', answer: 'القانون يلزم المشتري بالدفع، لكن يمكن الاتفاق في العقد على تحمل البائع للضريبة. هذا غير شائع ويجب أن ينص العقد صراحةً.' },
  { question: 'ماذا يحدث إذا لم أدفع ضريبة التصرفات العقارية في الوقت المحدد؟', answer: 'غرامة 1% شهرياً على المبلغ غير المدفوع. في الحالات الشديدة، قد تمنع زاتكا تسجيل العقار ونقل الملكية. تتراكم الغرامة من اليوم التالي لانتهاء مهلة 60 يوماً.' },
]

const faqsUr = [
  { question: 'سعودی عرب میں ریئل اسٹیٹ ٹرانزیکشن ٹیکس (RETT) کیا ہے؟', answer: 'RETT ایک 5% ٹیکس ہے جو ZATCA سعودی عرب میں جائیداد کی فروخت، خریداری یا منتقلی پر لگاتا ہے۔ اس کا اطلاق رہائشی، تجارتی اور زمینی لین دین پر ہوتا ہے۔' },
  { question: 'سعودی عرب میں RETT ٹیکس کون ادا کرتا ہے؟', answer: 'خریدار 5% RETT ادا کرنے کا ذمہ دار ہے۔ جائیداد کی قیمت یا منصفانہ مارکیٹ ویلیو پر حساب کیا جاتا ہے۔' },
  { question: 'کیا پہلی بار گھر خریدنے والوں کے لیے RETT میں چھوٹ ہے؟', answer: 'ہاں، سعودی شہری اپنا پہلا گھر خریدتے ہوئے 1,000,000 ریال تک کی جائیداد پر RETT سے استثنیٰ حاصل کر سکتے ہیں۔' },
  { question: 'RETT ٹیکس کا حساب کیسے لگایا جاتا ہے؟', answer: 'RETT = جائیداد کی قیمت × 5% مثال: 800,000 ریال کی جائیداد پر 40,000 ریال ٹیکس۔' },
  { question: 'RETT کب ادا کرنا ضروری ہے؟', answer: 'لین دین کی تاریخ سے 60 دنوں کے اندر ادائیگی ضروری ہے۔ تاخیر پر 1% ماہانہ جرمانہ۔' },
  { question: 'کیا RETT وراثت اور تحائف پر لاگو ہوتا ہے؟', answer: 'وراثت عام طور پر مستثنیٰ ہے۔ براہ راست رشتہ داروں کے درمیان تحائف بھی مستثنیٰ ہیں۔' },
  { question: 'کیا بیچنے والا RETT ادا کر سکتا ہے؟', answer: 'قانون خریدار کو ذمہ دار ٹھہراتا ہے، لیکن معاہدے میں بیچنے والے کو ادائیگی کی شرط لگائی جا سکتی ہے۔' },
  { question: 'اگر RETT وقت پر ادا نہ کروں تو کیا ہوتا ہے؟', answer: '1% ماہانہ جرمانہ۔ سنگین صورتوں میں جائیداد کی رجسٹریشن روک دی جاتی ہے۔' },
]

const faqsTl = [
  { question: 'Ano ang Real Estate Transaction Tax (RETT) sa Saudi Arabia?', answer: 'Ang RETT ay isang 5% na buwis na ipinapataw ng ZATCA sa pagbili, pagbenta, o paglilipat ng real estate properties sa Saudi Arabia. Nalalapat ito sa residential, commercial, at land transactions.' },
  { question: 'Sino ang nagbabayad ng RETT tax sa Saudi Arabia?', answer: 'Ang buyer ang tanging responsable sa pagbabayad ng 5% RETT tax. Kinakalkula ito batay sa purchase price o fair market value, kung alin ang mas mataas.' },
  { question: 'May exemption ba sa RETT para sa first-time homebuyers?', answer: 'Oo, ang mga Saudi national na bumibili ng kanilang unang bahay ay maaaring maging exempt sa RETT para sa properties na nagkakahalaga ng hanggang 1,000,000 SAR.' },
  { question: 'Paano kinakalkula ang RETT tax?', answer: 'RETT = Property Value × 5%. Halimbawa: 800,000 SAR na property ay may 40,000 SAR na buwis.' },
  { question: 'Kailan dapat bayaran ang RETT?', answer: 'Dapat bayaran sa loob ng 60 araw mula sa petsa ng transaksyon. Ang huli ay may penalty na 1% bawat buwan.' },
  { question: 'Nalalapat ba ang RETT sa minanang property o regalo?', answer: 'Ang inheritance ay karaniwang exempt. Ang mga regalo sa pagitan ng direktang kamag-anak ay exempt din.' },
  { question: 'Pwede bang magbayad ang seller ng RETT?', answer: 'Ang batas ay nagsasabi na ang buyer ang responsable, ngunit maaaring magkasundo sa kontrata na ang seller ang magbabayad.' },
  { question: 'Anong mangyayari kung hindi ako magbayad ng RETT on time?', answer: '1% monthly penalty sa hindi nabayarang halaga. Sa matinding kaso, maaaring i-restrict ng ZATCA ang property registration.' },
]

const faqsBn = [
  { question: 'সৌদি আরবে রিয়েল এস্টেট ট্রানজেকশন ট্যাক্স (RETT) কী?', answer: 'RETT হল একটি 5% কর যা ZATCA সৌদি আরবে রিয়েল এস্টেট সম্পত্তির ক্রয়, বিক্রয় বা হস্তান্তরের উপর আরোপ করে। আবাসিক, বাণিজ্যিক এবং জমি লেনদেনের ক্ষেত্রে প্রযোজ্য।' },
  { question: 'সৌদি আরবে RETT কর কে প্রদান করে?', answer: 'ক্রেতা 5% RETT কর প্রদানের জন্য একমাত্র দায়ী। ক্রয় মূল্য বা ন্যায্য বাজার মূল্যের উপর গণনা করা হয়।' },
  { question: 'প্রথমবার বাড়ি ক্রেতাদের জন্য RETT-তে কোনো ছাড় আছে কি?', answer: 'হ্যাঁ, সৌদি নাগরিকরা তাদের প্রথম বাড়ি ক্রয় করলে 1,000,000 SAR পর্যন্ত মূল্যের সম্পত্তির উপর RETT থেকে অব্যাহতি পেতে পারেন।' },
  { question: 'RETT কর কীভাবে গণনা করা হয়?', answer: 'RETT = সম্পত্তির মূল্য × 5%। উদাহরণ: 800,000 SAR সম্পত্তির উপর 40,000 SAR কর।' },
  { question: 'কখন RETT পরিশোধ করতে হবে?', answer: 'লেনদেনের তারিখ থেকে 60 দিনের মধ্যে পরিশোধ করতে হবে। বিলম্বে 1% মাসিক জরিমানা।' },
  { question: 'উত্তরাধিকার বা উপহারের উপর কি RETT প্রযোজ্য?', answer: 'উত্তরাধিকার সাধারণত অব্যাহতিপ্রাপ্ত। সরাসরি আত্মীয়ের মধ্যে উপহারও অব্যাহতিপ্রাপ্ত।' },
  { question: 'বিক্রেতা কি RETT দিতে পারেন?', answer: 'আইন ক্রেতাকে দায়ী করে, তবে চুক্তিতে বিক্রেতা প্রদানের শর্ত দেওয়া যেতে পারে।' },
  { question: 'সময়মতো RETT না দিলে কী হবে?', answer: 'অপরিশোধিত পরিমাণের উপর 1% মাসিক জরিমানা। গুরুতর ক্ষেত্রে ZATCA সম্পত্তি নিবন্ধন সীমাবদ্ধ করতে পারে।' },
]

function EnContent() {
  return (
    <article>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchemaEn) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": faqsEn.map(f => ({ "@type": "Question", "name": f.question, "acceptedAnswer": { "@type": "Answer", "text": f.answer } })) }) }}
      />

      <div className="text-center mb-8">
        <p className="text-desert-primary text-sm font-medium tracking-widest uppercase">Property Tax Guide</p>
        <h1 className="text-3xl md:text-4xl font-bold text-white mt-2">The Complete Guide to Real Estate Transaction Tax (RETT) in Saudi Arabia 2026</h1>
        <p className="text-gray-400 mt-3 max-w-2xl mx-auto">
          Buying property in Saudi Arabia? The 5% RETT tax is a major cost factor. This guide explains everything from exemptions to payment deadlines.
        </p>
      </div>

      <GlassCard>
        <h2>Introduction</h2>
        <p>
          Buying a home in Saudi Arabia is an exciting milestone. Whether you are a young Saudi family purchasing your first apartment in Riyadh, or an expat professional investing in a villa in Jeddah, the process involves not just the property price but also an additional cost that many first-time buyers overlook: the 5% Real Estate Transaction Tax (RETT).
        </p>
        <p>
          Administered by ZATCA (the Zakat, Tax and Customs Authority), RETT is a 5% tax on the sale, purchase, or transfer of real estate. On a 1,000,000 SAR property, that is 50,000 SAR in tax alone. For a 2,500,000 SAR villa, the tax jumps to 125,000 SAR. These are significant amounts that can derail your budget if not planned for in advance.
        </p>
        <p>
          This guide explains how RETT works in 2026 — who pays, how to calculate it, when to pay, and most importantly, the exemptions available for first-time homebuyers. Use our free <Link href="/rett-tax-calculator" className="text-desert-primary underline">RETT Tax Splitter Calculator</Link> to instantly compute your tax liability.
        </p>
      </GlassCard>

      <GlassCard>
        <h2>What is RETT (Real Estate Transaction Tax)?</h2>
        <p>
          The Real Estate Transaction Tax (RETT), known in Arabic as <strong lang="ar">ضريبة التصرفات العقارية</strong>, is a tax imposed by ZATCA on all real estate transactions in Saudi Arabia. It was introduced as part of the kingdom's broader fiscal reforms and revenue diversification under Vision 2030.
        </p>
        <p>
          <strong>The Standard Rate:</strong> 5% of the property's selling price or its fair market value, whichever is higher. ZATCA determines the fair market value based on similar property sales in the same area and valuation guidelines. If you declare a price that is significantly below market value, ZATCA has the authority to assess the tax based on the higher fair market value.
        </p>
        <p>
          <strong>What Transactions are Covered?</strong> Buying or selling residential properties (apartments, villas), commercial properties (offices, shops, warehouses), and land (vacant plots, agricultural land). Also includes property exchanges, transfers of ownership, and assignment of real estate rights.
        </p>
      </GlassCard>

      <GlassCard>
        <h2>Who is Responsible for Paying RETT?</h2>
        <p>
          <strong>The Golden Rule: The Buyer pays.</strong> According to ZATCA regulations, the buyer is solely and legally responsible for the 5% RETT. This is a critical point because many first-time buyers assume the cost is shared or included in the property price.
        </p>
        <div className="bg-desert-primary/10 border border-desert-primary/30 p-4 rounded-xl mb-4">
          <p className="text-sm font-medium text-desert-primary">Important</p>
          <p className="text-sm mt-1">The RETT is calculated <strong>on top of the property price</strong>. If you are buying a property for 1,000,000 SAR, you need to budget an additional 50,000 SAR for the tax. Unlike some countries where property taxes are built into the mortgage, RETT in Saudi Arabia is a separate upfront cost.</p>
        </div>
      </GlassCard>

      <GlassCard>
        <h2>RETT Exemptions in Saudi Arabia (2026 Rules)</h2>
        <p>Several categories of transactions qualify for RETT exemptions. This is the most important section for many buyers:</p>

        <h3>First-Time Homebuyer Exemption</h3>
        <div className="bg-[#0A0E1A] p-4 rounded-xl mb-4">
          <p className="text-white font-semibold">Conditions for Exemption:</p>
          <ul className="list-disc list-inside space-y-1 text-gray-300 text-sm mt-2">
            <li>The buyer must be a <strong>Saudi national</strong> (expatriates are not eligible for this exemption).</li>
            <li>The property must be the buyer's <strong>first residential property</strong>.</li>
            <li>The property value must be <strong>1,000,000 SAR or less</strong>.</li>
            <li>The property must be used for <strong>residential purposes</strong> (not commercial).</li>
            <li>The buyer must apply for the exemption through <strong>ZATCA's portal</strong> within the 60-day payment window.</li>
          </ul>
          <p className="text-sm mt-3 text-desert-primary">If all conditions are met, the 5% RETT is waived entirely on the first million riyals.</p>
        </div>

        <h3>Other Exemptions</h3>
        <div className="space-y-3">
          <div className="bg-[#0A0E1A] p-3 rounded-lg">
            <p className="text-white font-medium">Inheritance Transfers (Wirasat)</p>
            <p className="text-gray-400 text-sm">Transferring property ownership through inheritance is fully exempt from RETT. However, the heirs must register the property through the Ministry of Justice's inheritance system (Wirasat platform) to document the transfer legally.</p>
          </div>
          <div className="bg-[#0A0E1A] p-3 rounded-lg">
            <p className="text-white font-medium">Divorce Settlements</p>
            <p className="text-gray-400 text-sm">Property transfers resulting from divorce (Talaq or Khula) are exempt from RETT. This includes the division of jointly owned property or transfer of the family home to one spouse.</p>
          </div>
          <div className="bg-[#0A0E1A] p-3 rounded-lg">
            <p className="text-white font-medium">Government & Non-Profit Transfers</p>
            <p className="text-gray-400 text-sm">Property transfers involving government entities or registered non-profit organizations (charities) are exempt from RETT.</p>
          </div>
          <div className="bg-[#0A0E1A] p-3 rounded-lg">
            <p className="text-white font-medium">Gifts Between Direct Relatives</p>
            <p className="text-gray-400 text-sm">Property gifted between spouses, parents, and children is generally exempt. However, the gift must be documented through the legal process to qualify.</p>
          </div>
        </div>
      </GlassCard>

      <GlassCard>
        <h2>Step-by-Step Calculation Formula</h2>
        <p>Calculating your RETT liability is straightforward:</p>
        <div className="bg-[#0A0E1A] p-4 rounded-xl mb-4 font-mono text-sm text-gray-300">
          <p>Step 1: Determine the property value (selling price or fair market value, whichever is higher)</p>
          <p>Step 2: Multiply by 5% (0.05)</p>
          <p>Step 3: RETT Amount = Property Value × 0.05</p>
          <p>Step 4: Total Cost to Buyer = Property Price + RETT Amount</p>
        </div>
        <p><strong>Note on Fair Market Value:</strong> If ZATCA determines that the declared selling price is significantly below the fair market value, they have the right to assess RETT based on the market value. This prevents under-reporting to reduce tax liability.</p>
      </GlassCard>

      <GlassCard>
        <h2>Real-Life Calculation Examples</h2>

        <h3>Example 1: Buying an Apartment in Riyadh (800,000 SAR)</h3>
        <div className="bg-[#0A0E1A] p-4 rounded-xl mb-4">
          <p className="text-sm">Property Price: 800,000 SAR</p>
          <p className="text-sm mt-1">RETT: 800,000 × 0.05 = <strong>40,000 SAR</strong></p>
          <p className="text-sm mt-1">Total Cost to Buyer: 800,000 + 40,000 = <strong>840,000 SAR</strong></p>
        </div>

        <h3>Example 2: Buying a Villa in Jeddah (2,500,000 SAR)</h3>
        <div className="bg-[#0A0E1A] p-4 rounded-xl mb-4">
          <p className="text-sm">Property Price: 2,500,000 SAR</p>
          <p className="text-sm mt-1">RETT: 2,500,000 × 0.05 = <strong>125,000 SAR</strong></p>
          <p className="text-sm mt-1">Total Cost to Buyer: 2,500,000 + 125,000 = <strong>2,625,000 SAR</strong></p>
        </div>

        <h3>Example 3: First-Time Buyer Exemption (850,000 SAR)</h3>
        <div className="bg-[#0A0E1A] p-4 rounded-xl">
          <p className="text-sm">Property Price: 850,000 SAR (within the 1,000,000 SAR exemption limit)</p>
          <p className="text-sm mt-1">Buyer Status: Saudi national, first residential property</p>
          <p className="text-sm mt-1">RETT: <strong>0 SAR (Fully exempt)</strong></p>
          <p className="text-sm mt-1 text-desert-primary">Savings: 42,500 SAR</p>
        </div>
      </GlassCard>

      <GlassCard>
        <h2>How and When to Pay RETT</h2>
        <div className="space-y-3">
          <div className="bg-[#0A0E1A] p-3 rounded-lg">
            <p className="text-white font-medium">The 60-Day Deadline</p>
            <p className="text-gray-400 text-sm">RETT must be paid within 60 calendar days from the date of the real estate transaction. This is a strict deadline. If day 60 falls on a weekend or public holiday, the deadline extends to the next working day.</p>
          </div>
          <div className="bg-[#0A0E1A] p-3 rounded-lg">
            <p className="text-white font-medium">How to File and Pay</p>
            <p className="text-gray-400 text-sm">Payment is made through ZATCA's online portal. You need to create an account, register the transaction, upload the sales contract, and pay via SADAD or credit card. Many banks also offer RETT payment services through their apps. The payment receipt is required to complete the property registration with the Ministry of Justice.</p>
          </div>
          <div className="bg-[#0A0E1A] p-3 rounded-lg">
            <p className="text-white font-medium">Late Payment Penalties</p>
            <p className="text-gray-400 text-sm">1% of the unpaid tax is charged for each month of delay. For example, a 50,000 SAR RETT delayed by 3 months results in a 1,500 SAR penalty. Continued non-payment can lead to legal restrictions on the property.</p>
          </div>
        </div>
      </GlassCard>

      <GlassCard>
        <h2>Common Mistakes Buyers Make with RETT</h2>
        <div className="space-y-3">
          <div className="bg-[#0A0E1A] p-3 rounded-lg">
            <p className="text-white font-medium">1. Not Budgeting for the 5% Tax</p>
            <p className="text-gray-400 text-sm">The most common mistake. Buyers save for the property price but forget the 5% tax. If you are buying a 1,500,000 SAR home, you need to find an additional 75,000 SAR for RETT.</p>
          </div>
          <div className="bg-[#0A0E1A] p-3 rounded-lg">
            <p className="text-white font-medium">2. Missing the 60-Day Window</p>
            <p className="text-gray-400 text-sm">Life gets busy and 60 days can pass quickly. Set a reminder immediately after signing the contract. The 1% monthly penalty adds up fast.</p>
          </div>
          <div className="bg-[#0A0E1A] p-3 rounded-lg">
            <p className="text-white font-medium">3. Assuming the Seller Will Pay</p>
            <p className="text-gray-400 text-sm">Unless explicitly stated in the sales contract, the buyer is responsible. Never assume otherwise without written agreement.</p>
          </div>
          <div className="bg-[#0A0E1A] p-3 rounded-lg">
            <p className="text-white font-medium">4. Under-Declaring the Property Value</p>
            <p className="text-gray-400 text-sm">Some buyers try to declare a lower price to reduce RETT. ZATCA cross-references declared prices with fair market values. If caught, you must pay the difference plus penalties.</p>
          </div>
        </div>
      </GlassCard>

      <GlassCard>
        <h2>How to Use the Sauditoolhub RETT Tax Splitter Calculator</h2>
        <p>
          Our free <Link href="/rett-tax-calculator" className="text-desert-primary font-bold underline">RETT Tax Splitter Calculator</Link> makes it easy to calculate your exact tax liability. Simply enter the property price, select the property type and buyer status, and the calculator instantly shows the RETT amount, total cost, and applicable exemptions.
        </p>
        <p>
          Also check out our <Link href="/mortgage-vs-rent" className="text-desert-primary underline">Mortgage vs Rent Calculator</Link> to decide which option is better for you, and the <Link href="/property-valuation" className="text-desert-primary underline">Property Valuation Tool</Link> to estimate fair market value.
        </p>
      </GlassCard>

      <GlassCard>
        <h2>Conclusion</h2>
        <p>
          The Real Estate Transaction Tax (RETT) is a significant cost when buying property in Saudi Arabia. At 5% of the property value, it adds tens of thousands of riyals to your purchase. But with proper planning — understanding the exemptions available, budgeting for the tax upfront, and paying within the 60-day window — you can navigate the process smoothly.
        </p>
        <p>
          For first-time Saudi homebuyers, the exemption on properties up to 1,000,000 SAR is a valuable benefit that can save you from paying tens of thousands in taxes. Make sure to apply through ZATCA's portal within the required timeframe.
        </p>
        <p>
          Calculate your exact RETT liability with the <Link href="/rett-tax-calculator" className="text-desert-primary underline">Sauditoolhub RETT Calculator</Link> and visit <Link href="/blog" className="text-desert-primary underline">our blog</Link> for more guides on property and finance in Saudi Arabia.
        </p>
      </GlassCard>
    </article>
  )
}

function ArContent() {
  return (
    <article dir="rtl">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchemaAr) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": faqsAr.map(f => ({ "@type": "Question", "name": f.question, "acceptedAnswer": { "@type": "Answer", "text": f.answer } })) }) }}
      />

      <div className="text-center mb-8">
        <p className="text-desert-primary text-sm font-medium tracking-widest uppercase">دليل ضريبة العقارات</p>
        <h1 className="text-3xl md:text-4xl font-bold text-white mt-2">الدليل الشامل لضريبة التصرفات العقارية في السعودية 2026</h1>
        <p className="text-gray-400 mt-3 max-w-2xl mx-auto">
          هل تشتري عقاراً في السعودية؟ ضريبة 5% هي عامل تكلفة رئيسي. هذا الدليل يشرح كل شيء من الإعفاءات إلى مواعيد الدفع.
        </p>
      </div>

      <GlassCard>
        <h2>مقدمة</h2>
        <p>
          شراء منزل في السعودية هو إنجاز مثير. سواء كنت عائلة سعودية شابة تشتري أول شقة في الرياض، أو محترفاً وافداً يستثمر في فيلا بجدة، فإن العملية لا تشمل سعر العقار فقط بل تكلفة إضافية يتجاهلها الكثير من المشترين لأول مرة: ضريبة التصرفات العقارية بنسبة 5%.
        </p>
        <p>
          تدير زاتكا (الهيئة العامة للزكاة والضريبة والجمارك) ضريبة التصرفات العقارية بنسبة 5% على بيع أو شراء أو نقل العقارات. على عقار بقيمة 1,000,000 ريال، هذا يعني 50,000 ريال ضريبة وحدها. لفيلا بقيمة 2,500,000 ريال، ترتفع الضريبة إلى 125,000 ريال. هذه مبالغ كبيرة يمكن أن تعطل ميزانيتك إذا لم تخطط مسبقاً.
        </p>
        <p>
          يشرح هذا الدليل كيفية عمل ضريبة التصرفات العقارية في 2026 — من يدفع، كيفية الحساب، مواعيد الدفع، والأهم من ذلك، الإعفاءات المتاحة للمشترين لأول مرة. استخدم <Link href="/rett-tax-calculator" className="text-desert-primary underline">حاسبة ضريبة التصرفات العقارية</Link> المجانية لحساب الضريبة المستحقة فوراً.
        </p>
      </GlassCard>

      <GlassCard>
        <h2>ما هي ضريبة التصرفات العقارية (RETT)؟</h2>
        <p>
          ضريبة التصرفات العقارية هي ضريبة تفرضها زاتكا على جميع معاملات العقارات في السعودية. تم تقديمها كجزء من الإصلاحات المالية الأوسع وتنويع الإيرادات ضمن رؤية 2030.
        </p>
        <p>
          <strong>النسبة القياسية:</strong> 5% من سعر بيع العقار أو قيمته العادلة، أيهما أعلى. تحدد زاتكا القيمة العادلة بناءً على مبيعات عقارات مماثلة في نفس المنطقة وإرشادات التقييم. إذا أعلنت عن سعر أقل بكثير من القيمة السوقية، يحق لزاتكا تقييم الضريبة على أساس القيمة العادلة الأعلى.
        </p>
        <p>
          <strong>ما هي المعاملات المشمولة؟</strong> شراء أو بيع العقارات السكنية (شقق، فلل)، العقارات التجارية (مكاتب، محلات، مستودعات)، والأراضي (أراضٍ فارغة، أراضٍ زراعية). تشمل أيضاً مبادلة العقارات، نقل الملكية، وتنازل الحقوق العقارية.
        </p>
      </GlassCard>

      <GlassCard>
        <h2>من المسؤول عن دفع ضريبة التصرفات العقارية؟</h2>
        <p>
          <strong>القاعدة الذهبية: المشتري يدفع.</strong> وفقاً لأنظمة زاتكا، المشتري هو المسؤول الوحيد قانوناً عن ضريبة 5%. هذه نقطة حاسمة لأن الكثير من المشترين لأول مرة يفترضون أن التكلفة مشتركة أو مضمنة في سعر العقار.
        </p>
        <div className="bg-desert-primary/10 border border-desert-primary/30 p-4 rounded-xl mb-4">
          <p className="text-sm font-medium text-desert-primary">مهم</p>
          <p className="text-sm mt-1">تحسب ضريبة التصرفات العقارية <strong>بالإضافة إلى سعر العقار</strong>. إذا كنت تشتري عقاراً بمليون ريال، يجب أن تخصص 50,000 ريال إضافية للضريبة. على عكس بعض الدول حيث تضاف ضرائب العقار إلى الرهن العقاري، فإن ضريبة التصرفات العقارية في السعودية هي تكلفة منفصلة تدفع مقدماً.</p>
        </div>
      </GlassCard>

      <GlassCard>
        <h2>الإعفاءات من ضريبة التصرفات العقارية (قواعد 2026)</h2>
        <p>عدة فئات من المعاملات تؤهل للإعفاء من ضريبة التصرفات العقارية. هذا أهم قسم للكثير من المشترين:</p>

        <h3>إعفاء المشتري لأول مرة</h3>
        <div className="bg-[#0A0E1A] p-4 rounded-xl mb-4">
          <p className="text-white font-semibold">شروط الإعفاء:</p>
          <ul className="list-disc list-inside space-y-1 text-gray-300 text-sm mt-2">
            <li>يجب أن يكون المشتري <strong>سعودي الجنسية</strong> (الوافدون غير مؤهلين لهذا الإعفاء).</li>
            <li>يجب أن يكون العقار <strong>أول عقار سكني</strong> للمشتري.</li>
            <li>يجب أن تكون قيمة العقار <strong>1,000,000 ريال أو أقل</strong>.</li>
            <li>يجب استخدام العقار <strong>لأغراض سكنية</strong> (وليس تجارية).</li>
            <li>يجب تقديم طلب الإعفاء عبر <strong>بوابة زاتكا</strong> خلال 60 يوماً.</li>
          </ul>
          <p className="text-sm mt-3 text-desert-primary">إذا توفرت جميع الشروط، تُلغى ضريبة 5% بالكامل على أول مليون ريال.</p>
        </div>

        <h3>الإعفاءات الأخرى</h3>
        <div className="space-y-3">
          <div className="bg-[#0A0E1A] p-3 rounded-lg">
            <p className="text-white font-medium">نقل الملكية بالوراثة (الوصية)</p>
            <p className="text-gray-400 text-sm">نقل ملكية العقار عن طريق الوراثة معفى بالكامل من ضريبة التصرفات العقارية. ومع ذلك، يجب على الورثة تسجيل العقار عبر نظام الوصية بوزارة العدل لتوثيق النقل قانونياً.</p>
          </div>
          <div className="bg-[#0A0E1A] p-3 rounded-lg">
            <p className="text-white font-medium">تسويات الطلاق</p>
            <p className="text-gray-400 text-sm">نقل الملكية الناتج عن الطلاق (طلاق أو خلع) معفى من ضريبة التصرفات العقارية. يشمل ذلك تقسيم الممتلكات المشتركة أو نقل المنزل العائلي إلى أحد الزوجين.</p>
          </div>
          <div className="bg-[#0A0E1A] p-3 rounded-lg">
            <p className="text-white font-medium">نقل الملكية للحكومة والمنظمات غير الربحية</p>
            <p className="text-gray-400 text-sm">نقل الملكية الذي يشمل جهات حكومية أو منظمات غير ربحية مسجلة (جمعيات خيرية) معفى من ضريبة التصرفات العقارية.</p>
          </div>
          <div className="bg-[#0A0E1A] p-3 rounded-lg">
            <p className="text-white font-medium">الهبات بين الأقارب المباشرين</p>
            <p className="text-gray-400 text-sm">العقارات المهداة بين الأزواج والآباء والأطفال معفاة عموماً. ومع ذلك، يجب توثيق الهبة من خلال الإجراءات القانونية.</p>
          </div>
        </div>
      </GlassCard>

      <GlassCard>
        <h2>صيغة الحساب خطوة بخطوة</h2>
        <p>حساب ضريبة التصرفات العقارية المستحقة بسيط:</p>
        <div className="bg-[#0A0E1A] p-4 rounded-xl mb-4 font-mono text-sm text-gray-300">
          <p>الخطوة 1: تحديد قيمة العقار (سعر البيع أو القيمة العادلة أيهما أعلى)</p>
          <p>الخطوة 2: الضرب في 5% (0.05)</p>
          <p>الخطوة 3: مبلغ ضريبة التصرفات العقارية = قيمة العقار × 0.05</p>
          <p>الخطوة 4: التكلفة الإجمالية للمشتري = سعر العقار + مبلغ ضريبة التصرفات العقارية</p>
        </div>
        <p><strong>ملاحظة حول القيمة العادلة:</strong> إذا قررت زاتكا أن سعر البيع المعلن أقل بكثير من القيمة العادلة، يحق لها تقييم ضريبة التصرفات العقارية على أساس القيمة السوقية. هذا يمنع الإبلاغ بأقل من القيمة الحقيقية لتقليل الضريبة.</p>
      </GlassCard>

      <GlassCard>
        <h2>أمثلة حسابية من الواقع</h2>

        <h3>مثال 1: شراء شقة في الرياض (800,000 ريال)</h3>
        <div className="bg-[#0A0E1A] p-4 rounded-xl mb-4">
          <p className="text-sm">سعر العقار: 800,000 ريال</p>
          <p className="text-sm mt-1">ضريبة التصرفات العقارية: 800,000 × 0.05 = <strong>40,000 ريال</strong></p>
          <p className="text-sm mt-1">التكلفة الإجمالية للمشتري: 800,000 + 40,000 = <strong>840,000 ريال</strong></p>
        </div>

        <h3>مثال 2: شراء فيلا في جدة (2,500,000 ريال)</h3>
        <div className="bg-[#0A0E1A] p-4 rounded-xl mb-4">
          <p className="text-sm">سعر العقار: 2,500,000 ريال</p>
          <p className="text-sm mt-1">ضريبة التصرفات العقارية: 2,500,000 × 0.05 = <strong>125,000 ريال</strong></p>
          <p className="text-sm mt-1">التكلفة الإجمالية للمشتري: 2,500,000 + 125,000 = <strong>2,625,000 ريال</strong></p>
        </div>

        <h3>مثال 3: إعفاء المشتري لأول مرة (850,000 ريال)</h3>
        <div className="bg-[#0A0E1A] p-4 rounded-xl">
          <p className="text-sm">سعر العقار: 850,000 ريال (ضمن حد الإعفاء مليون ريال)</p>
          <p className="text-sm mt-1">حالة المشتري: سعودي الجنسية، أول عقار سكني</p>
          <p className="text-sm mt-1">ضريبة التصرفات العقارية: <strong>0 ريال (معفى بالكامل)</strong></p>
          <p className="text-sm mt-1 text-desert-primary">التوفير: 42,500 ريال</p>
        </div>
      </GlassCard>

      <GlassCard>
        <h2>كيف ومتى تدفع ضريبة التصرفات العقارية</h2>
        <div className="space-y-3">
          <div className="bg-[#0A0E1A] p-3 rounded-lg">
            <p className="text-white font-medium">مهلة 60 يوماً</p>
            <p className="text-gray-400 text-sm">يجب دفع ضريبة التصرفات العقارية خلال 60 يوماً من تاريخ الصفقة. هذا موعد نهائي صارم. إذا صادف اليوم 60 عطلة نهاية الأسبوع أو عطلة رسمية، يمتد الموعد إلى يوم العمل التالي.</p>
          </div>
          <div className="bg-[#0A0E1A] p-3 rounded-lg">
            <p className="text-white font-medium">كيفية التقديم والدفع</p>
            <p className="text-gray-400 text-sm">يتم الدفع عبر بوابة زاتكا. تحتاج إلى إنشاء حساب، تسجيل المعاملة، رفع عقد البيع، والدفع عبر سداد أو بطاقة ائتمان. العديد من البنوك تقدم خدمات دفع ضريبة التصرفات العقارية عبر تطبيقاتها. إيصال الدفع مطلوب لإتمام تسجيل العقار في وزارة العدل.</p>
          </div>
          <div className="bg-[#0A0E1A] p-3 rounded-lg">
            <p className="text-white font-medium">غرامات التأخير</p>
            <p className="text-gray-400 text-sm">1% من الضريبة غير المدفوعة تفرض عن كل شهر تأخير. مثلاً، ضريبة 50,000 ريال متأخرة 3 أشهر تؤدي إلى غرامة 1,500 ريال. التأخير المستمر قد يؤدي إلى قيود قانونية على العقار.</p>
          </div>
        </div>
      </GlassCard>

      <GlassCard>
        <h2>الأخطاء الشائعة التي يقع فيها المشترون</h2>
        <div className="space-y-3">
          <div className="bg-[#0A0E1A] p-3 rounded-lg">
            <p className="text-white font-medium">1. عدم تضمين الضريبة في الميزانية</p>
            <p className="text-gray-400 text-sm">الخطأ الأكثر شيوعاً. المشترون يدخرون لسعر العقار لكن ينسون ضريبة 5%. إذا كنت تشتري منزلاً بـ 1,500,000 ريال، تحتاج إلى 75,000 ريال إضافية لضريبة التصرفات العقارية.</p>
          </div>
          <div className="bg-[#0A0E1A] p-3 rounded-lg">
            <p className="text-white font-medium">2. تفويت مهلة الـ 60 يوماً</p>
            <p className="text-gray-400 text-sm">الحياة مشغولة و 60 يوماً تمر بسرعة. اضبط تذكيراً فور توقيع العقد. غرامة 1% الشهرية تتراكم بسرعة.</p>
          </div>
          <div className="bg-[#0A0E1A] p-3 rounded-lg">
            <p className="text-white font-medium">3. افتراض أن البائع سيدفع</p>
            <p className="text-gray-400 text-sm">ما لم ينص صراحةً في عقد البيع، المشتري هو المسؤول. لا تفترض غير ذلك دون اتفاق خطي.</p>
          </div>
          <div className="bg-[#0A0E1A] p-3 rounded-lg">
            <p className="text-white font-medium">4. الإبلاغ بقيمة أقل للعقار</p>
            <p className="text-gray-400 text-sm">بعض المشترين يحاولون الإبلاغ بسعر أقل لتقليل ضريبة التصرفات العقارية. زاتكا تتحقق من الأسعار المعلنة مع القيم العادلة. إذا تم ضبطك، يجب دفع الفرق بالإضافة إلى الغرامات.</p>
          </div>
        </div>
      </GlassCard>

      <GlassCard>
        <h2>كيفية استخدام حاسبة ضريبة التصرفات العقارية من Sauditoolhub</h2>
        <p>
          <Link href="/rett-tax-calculator" className="text-desert-primary font-bold underline">حاسبة ضريبة التصرفات العقارية</Link> المجانية تجعل حساب الضريبة المستحقة سهلاً. أدخل سعر العقار، واختر نوع العقار وحالة المشتري، وتظهر الحاسبة فوراً مبلغ الضريبة والتكلفة الإجمالية والإعفاءات المطبقة.
        </p>
        <p>
          اطلع أيضاً على <Link href="/mortgage-vs-rent" className="text-desert-primary underline">حاسبة الرهن مقابل الإيجار</Link> لتقرر أي خيار أفضل لك، و <Link href="/property-valuation" className="text-desert-primary underline">أداة تقييم العقارات</Link> لتقدير القيمة العادلة.
        </p>
      </GlassCard>

      <GlassCard>
        <h2>الخاتمة</h2>
        <p>
          ضريبة التصرفات العقارية هي تكلفة كبيرة عند شراء عقار في السعودية. بنسبة 5% من قيمة العقار، تضيف عشرات الآلاف من الريالات إلى مشترياتك. لكن مع التخطيط السليم — فهم الإعفاءات المتاحة، تضمين الضريبة في الميزانية مسبقاً، والدفع خلال مهلة 60 يوماً — يمكنك التعامل مع العملية بسلاسة.
        </p>
        <p>
          للمشترين السعوديين لأول مرة، الإعفاء على العقارات حتى مليون ريال هو فائدة قيمة يمكن أن توفر عليك دفع عشرات الآلاف من الريالات ضرائب. تأكد من التقديم عبر بوابة زاتكا ضمن المهلة المطلوبة.
        </p>
        <p>
          احسب ضريبة التصرفات العقارية بدقة باستخدام <Link href="/rett-tax-calculator" className="text-desert-primary underline">حاسبة Sauditoolhub</Link> وزر <Link href="/blog" className="text-desert-primary underline">مدونتنا</Link> للمزيد من الأدلة حول العقارات والمالية في السعودية.
        </p>
      </GlassCard>
    </article>
  )
}

function UrContent() {
  return (
    <article dir="rtl">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchemaUr) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": faqsUr.map(f => ({ "@type": "Question", "name": f.question, "acceptedAnswer": { "@type": "Answer", "text": f.answer } })) }) }}
      />

      <div className="text-center mb-8">
        <p className="text-desert-primary text-sm font-medium tracking-widest uppercase">جائیداد ٹیکس گائیڈ</p>
        <h1 className="text-3xl md:text-4xl font-bold text-white mt-2">سعودی عرب میں ریئل اسٹیٹ ٹرانزیکشن ٹیکس (RETT) کا مکمل گائیڈ 2026</h1>
        <p className="text-gray-400 mt-3 max-w-2xl mx-auto">
          سعودی عرب میں جائیداد خرید رہے ہیں؟ 5% RETT ٹیکس ایک اہم لاگت ہے۔ یہ گائیڈ چھوٹ سے لے کر ادائیگی کی آخری تاریخ تک سب کچھ بتاتا ہے۔
        </p>
      </div>

      <GlassCard>
        <h2>تعارف</h2>
        <p>
          سعودی عرب میں گھر خریدنا ایک دلچسپ سنگ میل ہے۔ چاہے آپ ریاض میں اپنا پہلا اپارٹمنٹ خریدنے والا ایک نوجوان سعودی خاندان ہو، یا جدہ میں ولا میں سرمایہ کاری کرنے والا ایک پیشہ ور تارک وطن، اس عمل میں نہ صرف جائیداد کی قیمت شامل ہے بلکہ ایک اضافی لاگت بھی ہے جسے بہت سے پہلی بار خریدار نظر انداز کر دیتے ہیں: 5% ریئل اسٹیٹ ٹرانزیکشن ٹیکس (RETT)۔
        </p>
        <p>
          ZATCA (زکوٰۃ، ٹیکس اور کسٹم اتھارٹی) کے زیر انتظام، RETT 5% ٹیکس ہے جو جائیداد کی فروخت، خریداری یا منتقلی پر لگتا ہے۔ 1,000,000 ریال کی جائیداد پر صرف ٹیکس 50,000 ریال بنتا ہے۔ 2,500,000 ریال کے ولا کے لیے ٹیکس 125,000 ریال تک پہنچ جاتا ہے۔ یہ اہم رقوم ہیں جو آپ کے بجٹ کو متاثر کر سکتی ہیں اگر پہلے سے منصوبہ بندی نہ کی جائے۔
        </p>
        <p>
          یہ گائیڈ بتاتا ہے کہ RETT 2026 میں کیسے کام کرتا ہے — کون ادا کرتا ہے، اس کا حساب کیسے لگایا جائے، کب ادا کرنا ہے، اور سب سے اہم، پہلی بار گھر خریدنے والوں کے لیے دستیاب چھوٹ۔ ہمارا مفت <Link href="/rett-tax-calculator" className="text-desert-primary underline">RETT ٹیکس کیلکولیٹر</Link> استعمال کریں۔
        </p>
      </GlassCard>

      <GlassCard>
        <h2>RETT (ریئل اسٹیٹ ٹرانزیکشن ٹیکس) کیا ہے؟</h2>
        <p>
          ریئل اسٹیٹ ٹرانزیکشن ٹیکس ایک ٹیکس ہے جو ZATCA سعودی عرب میں تمام جائیداد کے لین دین پر لگاتی ہے۔ یہ وژن 2030 کے تحت وسیع تر مالی اصلاحات اور آمدنی کے تنوع کے حصے کے طور پر متعارف کرایا گیا تھا۔
        </p>
        <p>
          <strong>معیاری شرح:</strong> جائیداد کی فروخت کی قیمت یا اس کی منصفانہ مارکیٹ ویلیو کا 5%، جو بھی زیادہ ہو۔ ZATCA منصفانہ مارکیٹ ویلیو کا تعین اسی علاقے میں اسی طرح کی جائیدادوں کی فروخت اور تشخیصی رہنما خطوط کی بنیاد پر کرتی ہے۔
        </p>
        <p>
          <strong>کن لین دین کا احاطہ کیا گیا ہے؟</strong> رہائشی جائیدادیں (اپارٹمنٹس، ولاز)، تجارتی جائیدادیں (دفاتر، دکانیں، گودام)، اور زمین (خالی پلاٹ، زرعی زمین) کی خرید و فروخت۔ اس میں جائیداد کا تبادلہ، ملکیت کی منتقلی، اور جائیداد کے حقوق کی تفویض بھی شامل ہے۔
        </p>
      </GlassCard>

      <GlassCard>
        <h2>RETT ادا کرنے کا ذمہ دار کون ہے؟</h2>
        <p>
          <strong>سنہری اصول: خریدار ادا کرتا ہے۔</strong> ZATCA کے ضوابط کے مطابق، خریدار 5% RETT کا واحد اور قانونی ذمہ دار ہے۔ یہ ایک اہم نکتہ ہے کیونکہ بہت سے پہلی بار خریدار یہ سمجھتے ہیں کہ لاگت مشترکہ ہے یا جائیداد کی قیمت میں شامل ہے۔
        </p>
        <div className="bg-desert-primary/10 border border-desert-primary/30 p-4 rounded-xl mb-4">
          <p className="text-sm font-medium text-desert-primary">اہم</p>
          <p className="text-sm mt-1">RETT کا حساب جائیداد کی قیمت کے <strong>علاوہ</strong> لگایا جاتا ہے۔ اگر آپ 1,000,000 ریال میں جائیداد خرید رہے ہیں تو آپ کو ٹیکس کے لیے اضافی 50,000 ریال مختص کرنے ہوں گے۔</p>
        </div>
      </GlassCard>

      <GlassCard>
        <h2>سعودی عرب میں RETT چھوٹ (2026 کے قواعد)</h2>
        <p>لین دین کی کئی اقسام RETT چھوٹ کے لیے اہل ہیں۔ یہ بہت سے خریداروں کے لیے سب سے اہم حصہ ہے:</p>

        <h3>پہلی بار گھر خریدنے والوں کے لیے چھوٹ</h3>
        <div className="bg-[#0A0E1A] p-4 rounded-xl mb-4">
          <p className="text-white font-semibold">چھوٹ کی شرائط:</p>
          <ul className="list-disc list-inside space-y-1 text-gray-300 text-sm mt-2">
            <li>خریدار <strong>سعودی شہری</strong> ہونا چاہیے (تارکین وطن اس چھوٹ کے اہل نہیں ہیں)۔</li>
            <li>جائیداد خریدار کی <strong>پہلی رہائشی جائیداد</strong> ہونی چاہیے۔</li>
            <li>جائیداد کی قیمت <strong>1,000,000 ریال یا اس سے کم</strong> ہونی چاہیے۔</li>
            <li>جائیداد <strong>رہائشی مقاصد</strong> کے لیے استعمال ہونی چاہیے (تجارتی نہیں)۔</li>
            <li>خریدار کو چھوٹ کے لیے <strong>ZATCA کے پورٹل</strong> کے ذریعے درخواست دینی ہوگی۔</li>
          </ul>
          <p className="text-sm mt-3 text-desert-primary">اگر تمام شرائط پوری ہوں تو پہلے دس لاکھ ریال پر 5% RETT مکمل طور پر معاف ہے۔</p>
        </div>

        <h3>دیگر چھوٹ</h3>
        <div className="space-y-3">
          <div className="bg-[#0A0E1A] p-3 rounded-lg">
            <p className="text-white font-medium">وراثت کی منتقلی (وصیت)</p>
            <p className="text-gray-400 text-sm">وراثت کے ذریعے جائیداد کی ملکیت کی منتقلی RETT سے مکمل طور پر مستثنیٰ ہے۔ تاہم، وارثوں کو وزارت انصاف کے وراثتی نظام (وصیت پلیٹ فارم) کے ذریعے جائیداد رجسٹر کرنی ہوگی۔</p>
          </div>
          <div className="bg-[#0A0E1A] p-3 rounded-lg">
            <p className="text-white font-medium">طلاق کے سیٹلمنٹ</p>
            <p className="text-gray-400 text-sm">طلاق (طلاق یا خلع) کے نتیجے میں جائیداد کی منتقلی RETT سے مستثنیٰ ہے۔ اس میں مشترکہ ملکیت کی تقسیم یا خاندانی گھر کی منتقلی شامل ہے۔</p>
          </div>
          <div className="bg-[#0A0E1A] p-3 rounded-lg">
            <p className="text-white font-medium">سرکاری اور غیر منافع بخش اداروں کی منتقلی</p>
            <p className="text-gray-400 text-sm">سرکاری اداروں یا رجسٹرڈ غیر منافع بخش تنظیموں (خیراتی اداروں) سے متعلق جائیداد کی منتقلی RETT سے مستثنیٰ ہے۔</p>
          </div>
          <div className="bg-[#0A0E1A] p-3 rounded-lg">
            <p className="text-white font-medium">براہ راست رشتہ داروں کے درمیان تحفے</p>
            <p className="text-gray-400 text-sm">میاں بیوی، والدین اور بچوں کے درمیان تحفے میں دی گئی جائیداد عام طور پر مستثنیٰ ہے۔ تاہم، تحفے کو قانونی عمل کے ذریعے دستاویزی شکل دینا ضروری ہے۔</p>
          </div>
        </div>
      </GlassCard>

      <GlassCard>
        <h2>مرحلہ وار حساب کتاب کا فارمولا</h2>
        <p>اپنی RETT ذمہ داری کا حساب لگانا آسان ہے:</p>
        <div className="bg-[#0A0E1A] p-4 rounded-xl mb-4 font-mono text-sm text-gray-300">
          <p>مرحلہ 1: جائیداد کی قیمت کا تعین کریں (فروخت کی قیمت یا منصفانہ مارکیٹ ویلیو، جو بھی زیادہ ہو)</p>
          <p>مرحلہ 2: 5% (0.05) سے ضرب دیں</p>
          <p>مرحلہ 3: RETT رقم = جائیداد کی قیمت × 0.05</p>
          <p>مرحلہ 4: خریدار کی کل لاگت = جائیداد کی قیمت + RETT رقم</p>
        </div>
      </GlassCard>

      <GlassCard>
        <h2>حقیقی زندگی کے حساب کتاب کی مثالیں</h2>

        <h3>مثال 1: ریاض میں اپارٹمنٹ خریدنا (800,000 ریال)</h3>
        <div className="bg-[#0A0E1A] p-4 rounded-xl mb-4">
          <p className="text-sm">جائیداد کی قیمت: 800,000 ریال</p>
          <p className="text-sm mt-1">RETT: 800,000 × 0.05 = <strong>40,000 ریال</strong></p>
          <p className="text-sm mt-1">خریدار کی کل لاگت: 800,000 + 40,000 = <strong>840,000 ریال</strong></p>
        </div>

        <h3>مثال 2: جدہ میں ولا خریدنا (2,500,000 ریال)</h3>
        <div className="bg-[#0A0E1A] p-4 rounded-xl mb-4">
          <p className="text-sm">جائیداد کی قیمت: 2,500,000 ریال</p>
          <p className="text-sm mt-1">RETT: 2,500,000 × 0.05 = <strong>125,000 ریال</strong></p>
          <p className="text-sm mt-1">خریدار کی کل لاگت: 2,500,000 + 125,000 = <strong>2,625,000 ریال</strong></p>
        </div>

        <h3>مثال 3: پہلی بار خریدار کی چھوٹ (850,000 ریال)</h3>
        <div className="bg-[#0A0E1A] p-4 rounded-xl">
          <p className="text-sm">جائیداد کی قیمت: 850,000 ریال (1,000,000 ریال کی چھوٹ کی حد میں)</p>
          <p className="text-sm mt-1">خریدار کی حیثیت: سعودی شہری، پہلی رہائشی جائیداد</p>
          <p className="text-sm mt-1">RETT: <strong>0 ریال (مکمل طور پر مستثنیٰ)</strong></p>
          <p className="text-sm mt-1 text-desert-primary">بچت: 42,500 ریال</p>
        </div>
      </GlassCard>

      <GlassCard>
        <h2>RETT کیسے اور کب ادا کریں</h2>
        <div className="space-y-3">
          <div className="bg-[#0A0E1A] p-3 rounded-lg">
            <p className="text-white font-medium">60 دن کی آخری تاریخ</p>
            <p className="text-gray-400 text-sm">RETT جائیداد کے لین دین کی تاریخ سے 60 کیلنڈر دنوں کے اندر ادا کرنا ضروری ہے۔ یہ ایک سخت آخری تاریخ ہے۔ اگر دن 60 اختتام ہفتہ یا عوامی چھٹی پر آتا ہے تو آخری تاریخ اگلے کام کے دن تک بڑھ جاتی ہے۔</p>
          </div>
          <div className="bg-[#0A0E1A] p-3 rounded-lg">
            <p className="text-white font-medium">فائل اور ادائیگی کیسے کریں</p>
            <p className="text-gray-400 text-sm">ادائیگی ZATCA کے آن لائن پورٹل کے ذریعے کی جاتی ہے۔ آپ کو اکاؤنٹ بنانا، لین دین رجسٹر کرنا، سیلز کنٹریکٹ اپ لوڈ کرنا، اور سداد یا کریڈٹ کارڈ کے ذریعے ادائیگی کرنی ہوگی۔</p>
          </div>
          <div className="bg-[#0A0E1A] p-3 rounded-lg">
            <p className="text-white font-medium">تاخیر پر جرمانے</p>
            <p className="text-gray-400 text-sm">ہر ماہ تاخیر کے لیے غیر ادا شدہ ٹیکس کا 1% لگایا جاتا ہے۔ مثال کے طور پر، 50,000 ریال RETT 3 ماہ تاخیر سے 1,500 ریال جرمانہ ہوتا ہے۔</p>
          </div>
        </div>
      </GlassCard>

      <GlassCard>
        <h2>RETT کے ساتھ خریداروں کی عام غلطیاں</h2>
        <div className="space-y-3">
          <div className="bg-[#0A0E1A] p-3 rounded-lg">
            <p className="text-white font-medium">1. 5% ٹیکس کے لیے بجٹ نہ بنانا</p>
            <p className="text-gray-400 text-sm">سب سے عام غلطی۔ خریدار جائیداد کی قیمت کے لیے بچت کرتے ہیں لیکن 5% ٹیکس بھول جاتے ہیں۔</p>
          </div>
          <div className="bg-[#0A0E1A] p-3 rounded-lg">
            <p className="text-white font-medium">2. 60 دن کی مدت ضائع کرنا</p>
            <p className="text-gray-400 text-sm">زندگی مصروف ہے اور 60 دن جلدی گزر جاتے ہیں۔ معاہدے پر دستخط کرنے کے فوراً بعد یاد دہانی سیٹ کریں۔</p>
          </div>
          <div className="bg-[#0A0E1A] p-3 rounded-lg">
            <p className="text-white font-medium">3. یہ فرض کرنا کہ بیچنے والا ادا کرے گا</p>
            <p className="text-gray-400 text-sm">جب تک سیلز کنٹریکٹ میں واضح طور پر نہ کہا جائے، خریدار ذمہ دار ہے۔</p>
          </div>
          <div className="bg-[#0A0E1A] p-3 rounded-lg">
            <p className="text-white font-medium">4. جائیداد کی قیمت کم بتانا</p>
            <p className="text-gray-400 text-sm">کچھ خریدار RETT کم کرنے کے لیے کم قیمت بتاتے ہیں۔ ZATCA قیمتوں کا تقابل منصفانہ مارکیٹ ویلیو سے کرتی ہے۔</p>
          </div>
        </div>
      </GlassCard>

      <GlassCard>
        <h2>Sauditoolhub RETT ٹیکس کیلکولیٹر کیسے استعمال کریں</h2>
        <p>
          ہمارا مفت <Link href="/rett-tax-calculator" className="text-desert-primary font-bold underline">RETT ٹیکس کیلکولیٹر</Link> آپ کی ٹیکس ذمہ داری کا حساب لگانا آسان بناتا ہے۔ جائیداد کی قیمت درج کریں، جائیداد کی قسم اور خریدار کی حیثیت منتخب کریں۔
        </p>
        <p>
          <Link href="/mortgage-vs-rent" className="text-desert-primary underline">مارگیج بمقابلہ کرایہ کیلکولیٹر</Link> اور <Link href="/property-valuation" className="text-desert-primary underline">جائیداد کی تشخیص کا آلہ</Link> بھی دیکھیں۔
        </p>
      </GlassCard>

      <GlassCard>
        <h2>نتیجہ</h2>
        <p>
          RETT سعودی عرب میں جائیداد خریدتے وقت ایک اہم لاگت ہے۔ جائیداد کی قیمت کے 5% پر، یہ آپ کی خریداری میں دسیوں ہزار ریال کا اضافہ کرتا ہے۔ لیکن مناسب منصوبہ بندی کے ساتھ — دستیاب چھوٹ کو سمجھنا، ٹیکس کے لیے پیشگی بجٹ بنانا، اور 60 دن کے اندر ادائیگی کرنا — آپ اس عمل کو آسانی سے انجام دے سکتے ہیں۔
        </p>
        <p>
          <Link href="/rett-tax-calculator" className="text-desert-primary underline">Sauditoolhub RETT کیلکولیٹر</Link> سے اپنی RETT ذمہ داری کا حساب لگائیں اور سعودی عرب میں جائیداد اور مالیات کے بارے میں مزید رہنمائی کے لیے <Link href="/blog" className="text-desert-primary underline">ہمارا بلاگ</Link> دیکھیں۔
        </p>
      </GlassCard>
    </article>
  )
}

function TlContent() {
  return (
    <article>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchemaTl) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": faqsTl.map(f => ({ "@type": "Question", "name": f.question, "acceptedAnswer": { "@type": "Answer", "text": f.answer } })) }) }}
      />

      <div className="text-center mb-8">
        <p className="text-desert-primary text-sm font-medium tracking-widest uppercase">Gabay sa Buwis sa Ari-arian</p>
        <h1 className="text-3xl md:text-4xl font-bold text-white mt-2">Gabay sa Real Estate Transaction Tax (RETT) sa Saudi Arabia 2026</h1>
        <p className="text-gray-400 mt-3 max-w-2xl mx-auto">
          Bumibili ng property sa Saudi Arabia? Ang 5% RETT na buwis ay isang malaking gastos. Ang gabay na ito ay nagpapaliwanag ng lahat mula sa exemptions hanggang sa mga deadline ng pagbabayad.
        </p>
      </div>

      <GlassCard>
        <h2>Introduksyon</h2>
        <p>
          Ang pagbili ng bahay sa Saudi Arabia ay isang kapana-panabik na hakbang. Kung ikaw man ay isang batang pamilyang Saudi na bumibili ng unang apartment sa Riyadh, o isang expat professional na namumuhunan sa villa sa Jeddah, ang proseso ay hindi lamang ang presyo ng property kundi pati na rin ang karagdagang gastos na maraming first-time buyers ay hindi napapansin: ang 5% Real Estate Transaction Tax (RETT).
        </p>
        <p>
          Pinangangasiwaan ng ZATCA (Zakat, Tax and Customs Authority), ang RETT ay isang 5% na buwis sa pagbili, pagbenta, o paglilipat ng real estate. Sa isang property na nagkakahalaga ng 1,000,000 SAR, 50,000 SAR na buwis lamang iyon. Para sa isang villa na 2,500,000 SAR, ang buwis ay umaabot sa 125,000 SAR. Ang mga ito ay malaking halaga na maaaring makasira sa iyong badyet kung hindi pinlano nang maaga.
        </p>
        <p>
          Ipinapaliwanag ng gabay na ito kung paano gumagana ang RETT sa 2026 — kung sino ang nagbabayad, kung paano kalkulahin ito, kung kailan magbabayad, at pinaka-mahalaga, ang mga exemption na available para sa first-time homebuyers. Gamitin ang aming libreng <Link href="/rett-tax-calculator" className="text-desert-primary underline">RETT Tax Calculator</Link> upang agad na kalkulahin ang iyong buwis.
        </p>
      </GlassCard>

      <GlassCard>
        <h2>Ano ang RETT (Real Estate Transaction Tax)?</h2>
        <p>
          Ang Real Estate Transaction Tax ay isang buwis na ipinapataw ng ZATCA sa lahat ng real estate transactions sa Saudi Arabia. Ito ay ipinakilala bilang bahagi ng mas malawak na reporma sa pananalapi ng kaharian at pagkakaiba-iba ng kita sa ilalim ng Vision 2030.
        </p>
        <p>
          <strong>Ang Standard Rate:</strong> 5% ng presyo ng pagbebenta ng property o ng patas na halaga nito sa merkado, kung alin ang mas mataas. Tinutukoy ng ZATCA ang patas na halaga sa merkado batay sa mga katulad na benta ng property sa parehong lugar at mga alituntunin sa pagpapahalaga.
        </p>
        <p>
          <strong>Anong mga Transaksyon ang Sakop?</strong> Pagbili o pagbenta ng residential properties (apartment, villa), commercial properties (opisina, tindahan, bodega), at lupa (bakanteng lote, lupang pang-agrikultura). Kasama rin ang pagpapalitan ng property, paglilipat ng pagmamay-ari, at pagtatalaga ng mga karapatan sa real estate.
        </p>
      </GlassCard>

      <GlassCard>
        <h2>Sino ang Responsable sa Pagbabayad ng RETT?</h2>
        <p>
          <strong>Ang Golden Rule: Ang Buyer ang nagbabayad.</strong> Ayon sa mga regulasyon ng ZATCA, ang buyer ay nag-iisa at legal na responsable para sa 5% RETT. Ito ay isang kritikal na punto dahil maraming first-time buyers ang nag-aakala na ang gastos ay ibinabahagi o kasama sa presyo ng property.
        </p>
        <div className="bg-desert-primary/10 border border-desert-primary/30 p-4 rounded-xl mb-4">
          <p className="text-sm font-medium text-desert-primary">Mahalaga</p>
          <p className="text-sm mt-1">Ang RETT ay kinakalkula <strong>bukod sa presyo ng property</strong>. Kung bibili ka ng property na nagkakahalaga ng 1,000,000 SAR, kailangan mong mag-badyet ng karagdagang 50,000 SAR para sa buwis.</p>
        </div>
      </GlassCard>

      <GlassCard>
        <h2>Mga Exemption sa RETT sa Saudi Arabia (2026 Rules)</h2>
        <p>Ilang kategorya ng mga transaksyon ang kwalipikado para sa mga exemption sa RETT. Ito ang pinakamahalagang bahagi para sa maraming mamimili:</p>

        <h3>Exemption para sa First-Time Homebuyer</h3>
        <div className="bg-[#0A0E1A] p-4 rounded-xl mb-4">
          <p className="text-white font-semibold">Mga Kundisyon para sa Exemption:</p>
          <ul className="list-disc list-inside space-y-1 text-gray-300 text-sm mt-2">
            <li>Ang buyer ay dapat na isang <strong>Saudi national</strong> (ang mga expat ay hindi kwalipikado).</li>
            <li>Ang property ay dapat na <strong>unang residential property</strong> ng buyer.</li>
            <li>Ang halaga ng property ay dapat na <strong>1,000,000 SAR o mas mababa</strong>.</li>
            <li>Ang property ay dapat gamitin para sa <strong>residential purposes</strong> (hindi komersyal).</li>
            <li>Dapat mag-apply ang buyer para sa exemption sa pamamagitan ng <strong>portal ng ZATCA</strong>.</li>
          </ul>
          <p className="text-sm mt-3 text-desert-primary">Kung matugunan ang lahat ng kundisyon, ang 5% RETT ay ganap na tinanggal sa unang milyong riyal.</p>
        </div>

        <h3>Iba Pang Exemption</h3>
        <div className="space-y-3">
          <div className="bg-[#0A0E1A] p-3 rounded-lg">
            <p className="text-white font-medium">Transfer ng Mana (Wirasat)</p>
            <p className="text-gray-400 text-sm">Ang paglilipat ng pagmamay-ari ng property sa pamamagitan ng mana ay ganap na exempt sa RETT. Gayunpaman, dapat irehistro ng mga tagapagmana ang property sa pamamagitan ng inheritance system ng Ministry of Justice.</p>
          </div>
          <div className="bg-[#0A0E1A] p-3 rounded-lg">
            <p className="text-white font-medium">Pag-aayos ng Diborsyo</p>
            <p className="text-gray-400 text-sm">Ang paglilipat ng property na resulta ng diborsyo (Talaq o Khula) ay exempt sa RETT. Kasama rito ang paghahati ng pinagsamang pagmamay-ari.</p>
          </div>
          <div className="bg-[#0A0E1A] p-3 rounded-lg">
            <p className="text-white font-medium">Transfer ng Gobyerno at Non-Profit</p>
            <p className="text-gray-400 text-sm">Ang paglilipat ng property na kinasasangkutan ng mga entity ng gobyerno o rehistradong non-profit na organisasyon ay exempt sa RETT.</p>
          </div>
          <div className="bg-[#0A0E1A] p-3 rounded-lg">
            <p className="text-white font-medium">Regalo sa Pagitan ng Direktang Kamag-anak</p>
            <p className="text-gray-400 text-sm">Ang property na ipinagkaloob sa pagitan ng mag-asawa, magulang, at mga anak ay karaniwang exempt.</p>
          </div>
        </div>
      </GlassCard>

      <GlassCard>
        <h2>Step-by-Step na Formula sa Pagkalkula</h2>
        <p>Ang pagkalkula ng iyong RETT liability ay diretso:</p>
        <div className="bg-[#0A0E1A] p-4 rounded-xl mb-4 font-mono text-sm text-gray-300">
          <p>Hakbang 1: Tukuyin ang halaga ng property (presyo ng pagbebenta o patas na halaga sa merkado, kung alin ang mas mataas)</p>
          <p>Hakbang 2: I-multiply sa 5% (0.05)</p>
          <p>Hakbang 3: Halaga ng RETT = Halaga ng Property × 0.05</p>
          <p>Hakbang 4: Kabuuang Gastos sa Buyer = Presyo ng Property + Halaga ng RETT</p>
        </div>
      </GlassCard>

      <GlassCard>
        <h2>Mga Halimbawa ng Pagkalkula sa Tunay na Buhay</h2>

        <h3>Halimbawa 1: Pagbili ng Apartment sa Riyadh (800,000 SAR)</h3>
        <div className="bg-[#0A0E1A] p-4 rounded-xl mb-4">
          <p className="text-sm">Presyo ng Property: 800,000 SAR</p>
          <p className="text-sm mt-1">RETT: 800,000 × 0.05 = <strong>40,000 SAR</strong></p>
          <p className="text-sm mt-1">Kabuuang Gastos sa Buyer: 800,000 + 40,000 = <strong>840,000 SAR</strong></p>
        </div>

        <h3>Halimbawa 2: Pagbili ng Villa sa Jeddah (2,500,000 SAR)</h3>
        <div className="bg-[#0A0E1A] p-4 rounded-xl mb-4">
          <p className="text-sm">Presyo ng Property: 2,500,000 SAR</p>
          <p className="text-sm mt-1">RETT: 2,500,000 × 0.05 = <strong>125,000 SAR</strong></p>
          <p className="text-sm mt-1">Kabuuang Gastos sa Buyer: 2,500,000 + 125,000 = <strong>2,625,000 SAR</strong></p>
        </div>

        <h3>Halimbawa 3: First-Time Buyer Exemption (850,000 SAR)</h3>
        <div className="bg-[#0A0E1A] p-4 rounded-xl">
          <p className="text-sm">Presyo ng Property: 850,000 SAR (sa loob ng 1,000,000 SAR exemption limit)</p>
          <p className="text-sm mt-1">Katayuan ng Buyer: Saudi national, unang residential property</p>
          <p className="text-sm mt-1">RETT: <strong>0 SAR (Ganap na exempt)</strong></p>
          <p className="text-sm mt-1 text-desert-primary">Nai-save: 42,500 SAR</p>
        </div>
      </GlassCard>

      <GlassCard>
        <h2>Paano at Kailan Magbabayad ng RETT</h2>
        <div className="space-y-3">
          <div className="bg-[#0A0E1A] p-3 rounded-lg">
            <p className="text-white font-medium">Ang 60-Araw na Deadline</p>
            <p className="text-gray-400 text-sm">Ang RETT ay dapat bayaran sa loob ng 60 araw mula sa petsa ng real estate transaction. Ito ay isang mahigpit na deadline. Kung ang araw 60 ay mahulog sa weekend o pampublikong holiday, ang deadline ay pinalawig hanggang sa susunod na araw ng trabaho.</p>
          </div>
          <div className="bg-[#0A0E1A] p-3 rounded-lg">
            <p className="text-white font-medium">Paano Mag-File at Magbayad</p>
            <p className="text-gray-400 text-sm">Ang pagbabayad ay ginagawa sa pamamagitan ng online portal ng ZATCA. Kailangan mong gumawa ng account, irehistro ang transaksyon, i-upload ang sales contract, at magbayad sa pamamagitan ng SADAD o credit card.</p>
          </div>
          <div className="bg-[#0A0E1A] p-3 rounded-lg">
            <p className="text-white font-medium">Mga Parusa sa Huling Pagbabayad</p>
            <p className="text-gray-400 text-sm">1% ng hindi nabayarang buwis ay sinisingil para sa bawat buwan ng pagkaantala. Halimbawa, ang 50,000 SAR RETT na naantala ng 3 buwan ay nagreresulta sa 1,500 SAR na parusa.</p>
          </div>
        </div>
      </GlassCard>

      <GlassCard>
        <h2>Mga Karaniwang Pagkakamali ng mga Mamimili sa RETT</h2>
        <div className="space-y-3">
          <div className="bg-[#0A0E1A] p-3 rounded-lg">
            <p className="text-white font-medium">1. Hindi Pag-badyet para sa 5% na Buwis</p>
            <p className="text-gray-400 text-sm">Ang pinakakaraniwang pagkakamali. Ang mga mamimili ay nag-iipon para sa presyo ng property ngunit nakakalimutan ang 5% na buwis.</p>
          </div>
          <div className="bg-[#0A0E1A] p-3 rounded-lg">
            <p className="text-white font-medium">2. Pagkawala ng 60-Araw na Window</p>
            <p className="text-gray-400 text-sm">Ang buhay ay abala at ang 60 araw ay mabilis na lumipas. Mag-set ng paalala kaagad pagkatapos pirmahan ang kontrata.</p>
          </div>
          <div className="bg-[#0A0E1A] p-3 rounded-lg">
            <p className="text-white font-medium">3. Pag-aakala na ang Seller ang Magbabayad</p>
            <p className="text-gray-400 text-sm">Maliban kung malinaw na nakasaad sa sales contract, ang buyer ang responsable.</p>
          </div>
          <div className="bg-[#0A0E1A] p-3 rounded-lg">
            <p className="text-white font-medium">4. Pagbaba ng Halaga ng Property</p>
            <p className="text-gray-400 text-sm">Inihahambing ng ZATCA ang mga idineklarang presyo sa patas na halaga sa merkado.</p>
          </div>
        </div>
      </GlassCard>

      <GlassCard>
        <h2>Paano Gamitin ang Sauditoolhub RETT Tax Calculator</h2>
        <p>
          Ang aming libreng <Link href="/rett-tax-calculator" className="text-desert-primary font-bold underline">RETT Tax Calculator</Link> ay ginagawang madali ang pagkalkula ng iyong eksaktong pananagutan sa buwis. Ilagay lamang ang presyo ng property, piliin ang uri ng property at katayuan ng buyer.
        </p>
        <p>
          Tingnan din ang aming <Link href="/mortgage-vs-rent" className="text-desert-primary underline">Mortgage vs Rent Calculator</Link> at ang <Link href="/property-valuation" className="text-desert-primary underline">Property Valuation Tool</Link>.
        </p>
      </GlassCard>

      <GlassCard>
        <h2>Konklusyon</h2>
        <p>
          Ang RETT ay isang malaking gastos kapag bumibili ng property sa Saudi Arabia. Sa 5% ng halaga ng property, nagdaragdag ito ng sampu-sampung libong riyal sa iyong pagbili. Ngunit sa tamang pagpaplano — pag-unawa sa mga exemption na available, pag-badyet para sa buwis nang maaga, at pagbabayad sa loob ng 60 araw — maaari mong i-navigate ang proseso nang maayos.
        </p>
        <p>
          Kalkulahin ang iyong eksaktong RETT liability gamit ang <Link href="/rett-tax-calculator" className="text-desert-primary underline">Sauditoolhub RETT Calculator</Link> at bisitahin ang <Link href="/blog" className="text-desert-primary underline">aming blog</Link> para sa higit pang mga gabay.
        </p>
      </GlassCard>
    </article>
  )
}

function BnContent() {
  return (
    <article>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchemaBn) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": faqsBn.map(f => ({ "@type": "Question", "name": f.question, "acceptedAnswer": { "@type": "Answer", "text": f.answer } })) }) }}
      />

      <div className="text-center mb-8">
        <p className="text-desert-primary text-sm font-medium tracking-widest uppercase">সম্পত্তি কর গাইড</p>
        <h1 className="text-3xl md:text-4xl font-bold text-white mt-2">সৌদি আরবে রিয়েল এস্টেট ট্রানজেকশন ট্যাক্স (RETT)-এর সম্পূর্ণ গাইড 2026</h1>
        <p className="text-gray-400 mt-3 max-w-2xl mx-auto">
          সৌদি আরবে সম্পত্তি কিনছেন? 5% RETT কর একটি বড় খরচের বিষয়। এই গাইড ছাড় থেকে শুরু করে পেমেন্টের সময়সীমা পর্যন্ত সবকিছু ব্যাখ্যা করে।
        </p>
      </div>

      <GlassCard>
        <h2>ভূমিকা</h2>
        <p>
          সৌদি আরবে বাড়ি কেনা একটি উত্তেজনাপূর্ণ মাইলফলক। আপনি রিয়াদে আপনার প্রথম অ্যাপার্টমেন্ট কিনতে যাওয়া একটি তরুণ সৌদি পরিবার হোন, বা জেদ্দায় ভিলায় বিনিয়োগকারী একজন প্রবাসী পেশাজীবী, প্রক্রিয়াটিতে শুধু সম্পত্তির দামই নয় বরং একটি অতিরিক্ত খরচও জড়িত যা অনেক প্রথমবার ক্রেতা উপেক্ষা করেন: 5% রিয়েল এস্টেট ট্রানজেকশন ট্যাক্স (RETT)।
        </p>
        <p>
          ZATCA (জাকাত, ট্যাক্স এবং কাস্টমস কর্তৃপক্ষ) দ্বারা পরিচালিত, RETT হল রিয়েল এস্টেট বিক্রয়, ক্রয় বা হস্তান্তরের উপর 5% কর। 1,000,000 SAR মূল্যের সম্পত্তিতে, শুধু করই 50,000 SAR। 2,500,000 SAR ভিলার জন্য কর বেড়ে 125,000 SAR হয়। এগুলি গুরুত্বপূর্ণ পরিমাণ যা আগে থেকে পরিকল্পনা না করলে আপনার বাজেট নষ্ট করতে পারে।
        </p>
        <p>
          এই গাইড ব্যাখ্যা করে কিভাবে RETT 2026 সালে কাজ করে — কে দেয়, কীভাবে গণনা করতে হয়, কখন দিতে হবে, এবং সবচেয়ে গুরুত্বপূর্ণভাবে, প্রথমবার বাড়ি ক্রেতাদের জন্য উপলব্ধ ছাড়। আমাদের বিনামূল্যের <Link href="/rett-tax-calculator" className="text-desert-primary underline">RETT ট্যাক্স ক্যালকুলেটর</Link> ব্যবহার করুন।
        </p>
      </GlassCard>

      <GlassCard>
        <h2>RETT (রিয়েল এস্টেট ট্রানজেকশন ট্যাক্স) কী?</h2>
        <p>
          রিয়েল এস্টেট ট্রানজেকশন ট্যাক্স হল একটি কর যা ZATCA সৌদি আরবের সমস্ত রিয়েল এস্টেট লেনদেনের উপর আরোপ করে। এটি ভিশন 2030-এর অধীনে রাজ্যের বিস্তৃত আর্থিক সংস্কার এবং রাজস্ব বৈচিত্র্যের অংশ হিসেবে চালু করা হয়েছিল।
        </p>
        <p>
          <strong>মানক হার:</strong> সম্পত্তির বিক্রয় মূল্য বা ন্যায্য বাজার মূল্যের 5%, যেটি বেশি হয়। ZATCA একই এলাকায় অনুরূপ সম্পত্তি বিক্রয় এবং মূল্যায়ন নির্দেশিকার ভিত্তিতে ন্যায্য বাজার মূল্য নির্ধারণ করে।
        </p>
        <p>
          <strong>কোন লেনদেন কভার করা হয়?</strong> আবাসিক সম্পত্তি (অ্যাপার্টমেন্ট, ভিলা), বাণিজ্যিক সম্পত্তি (অফিস, দোকান, গুদাম), এবং জমি (ফাঁকা প্লট, কৃষি জমি) ক্রয় বা বিক্রয়। সম্পত্তি বিনিময়, মালিকানা হস্তান্তর এবং রিয়েল এস্টেট অধিকার বরাদ্দও অন্তর্ভুক্ত।
        </p>
      </GlassCard>

      <GlassCard>
        <h2>RETT পরিশোধের জন্য কে দায়ী?</h2>
        <p>
          <strong>সোনার নিয়ম: ক্রেতা দেয়।</strong> ZATCA-র নিয়ম অনুযায়ী, ক্রেতা 5% RETT-এর জন্য একমাত্র এবং আইনত দায়ী। এটি একটি গুরুত্বপূর্ণ বিষয় কারণ অনেক প্রথমবার ক্রেতা ধরে নেন যে খরচ ভাগ করে নেওয়া হয় বা সম্পত্তির দামের মধ্যে অন্তর্ভুক্ত।
        </p>
        <div className="bg-desert-primary/10 border border-desert-primary/30 p-4 rounded-xl mb-4">
          <p className="text-sm font-medium text-desert-primary">গুরুত্বপূর্ণ</p>
          <p className="text-sm mt-1">RETT গণনা করা হয় সম্পত্তির দামের <strong>উপরন্তু</strong>। আপনি যদি 1,000,000 SAR-এ সম্পত্তি কিনছেন, তাহলে আপনাকে করের জন্য অতিরিক্ত 50,000 SAR বাজেট করতে হবে।</p>
        </div>
      </GlassCard>

      <GlassCard>
        <h2>সৌদি আরবে RETT ছাড় (2026 নিয়ম)</h2>
        <p>বিভিন্ন ধরণের লেনদেন RETT ছাড়ের জন্য যোগ্য। এটি অনেক ক্রেতার জন্য সবচেয়ে গুরুত্বপূর্ণ অংশ:</p>

        <h3>প্রথমবার বাড়ি ক্রেতার ছাড়</h3>
        <div className="bg-[#0A0E1A] p-4 rounded-xl mb-4">
          <p className="text-white font-semibold">ছাড়ের শর্তাবলী:</p>
          <ul className="list-disc list-inside space-y-1 text-gray-300 text-sm mt-2">
            <li>ক্রেতাকে <strong>সৌদি নাগরিক</strong> হতে হবে (প্রবাসীরা এই ছাড়ের জন্য যোগ্য নন)।</li>
            <li>সম্পত্তিটি ক্রেতার <strong>প্রথম আবাসিক সম্পত্তি</strong> হতে হবে।</li>
            <li>সম্পত্তির মূল্য <strong>1,000,000 SAR বা তার কম</strong> হতে হবে।</li>
            <li>সম্পত্তিটি <strong>আবাসিক উদ্দেশ্যে</strong> ব্যবহার করতে হবে (বাণিজ্যিক নয়)।</li>
            <li>ক্রেতাকে <strong>ZATCA-র পোর্টালের</strong> মাধ্যমে ছাড়ের জন্য আবেদন করতে হবে।</li>
          </ul>
          <p className="text-sm mt-3 text-desert-primary">যদি সমস্ত শর্ত পূরণ করা হয়, প্রথম দশ লাখ রিয়ালের উপর 5% RETT সম্পূর্ণভাবে মওকুফ করা হয়।</p>
        </div>

        <h3>অন্যান্য ছাড়</h3>
        <div className="space-y-3">
          <div className="bg-[#0A0E1A] p-3 rounded-lg">
            <p className="text-white font-medium">উত্তরাধিকার স্থানান্তর (ওসিয়ত)</p>
            <p className="text-gray-400 text-sm">উত্তরাধিকারের মাধ্যমে সম্পত্তির মালিকানা হস্তান্তর RETT থেকে সম্পূর্ণভাবে অব্যাহতিপ্রাপ্ত। তবে, উত্তরাধিকারীদের আইনত স্থানান্তর নথিভুক্ত করতে বিচার মন্ত্রণালয়ের উত্তরাধিকার ব্যবস্থার মাধ্যমে সম্পত্তি নিবন্ধন করতে হবে।</p>
          </div>
          <div className="bg-[#0A0E1A] p-3 rounded-lg">
            <p className="text-white font-medium">বিবাহবিচ্ছেদের নিষ্পত্তি</p>
            <p className="text-gray-400 text-sm">বিবাহবিচ্ছেদের (তালাক বা খুলা) ফলে সম্পত্তি হস্তান্তর RETT থেকে অব্যাহতিপ্রাপ্ত। এর মধ্যে যৌথ মালিকানাধীন সম্পত্তির বিভাজন অন্তর্ভুক্ত।</p>
          </div>
          <div className="bg-[#0A0E1A] p-3 rounded-lg">
            <p className="text-white font-medium">সরকারি ও অলাভজনক স্থানান্তর</p>
            <p className="text-gray-400 text-sm">সরকারি সংস্থা বা নিবন্ধিত অলাভজনক প্রতিষ্ঠানের সাথে জড়িত সম্পত্তি স্থানান্তর RETT থেকে অব্যাহতিপ্রাপ্ত।</p>
          </div>
          <div className="bg-[#0A0E1A] p-3 rounded-lg">
            <p className="text-white font-medium">নিকটাত্মীয়দের মধ্যে উপহার</p>
            <p className="text-gray-400 text-sm">স্বামী-স্ত্রী, পিতামাতা এবং সন্তানদের মধ্যে উপহার দেওয়া সম্পত্তি সাধারণত অব্যাহতিপ্রাপ্ত।</p>
          </div>
        </div>
      </GlassCard>

      <GlassCard>
        <h2>ধাপে ধাপে গণনার সূত্র</h2>
        <p>আপনার RETT দায় গণনা করা সহজ:</p>
        <div className="bg-[#0A0E1A] p-4 rounded-xl mb-4 font-mono text-sm text-gray-300">
          <p>ধাপ 1: সম্পত্তির মূল্য নির্ধারণ করুন (বিক্রয় মূল্য বা ন্যায্য বাজার মূল্য, যেটি বেশি)</p>
          <p>ধাপ 2: 5% (0.05) দ্বারা গুণ করুন</p>
          <p>ধাপ 3: RETT পরিমাণ = সম্পত্তির মূল্য × 0.05</p>
          <p>ধাপ 4: ক্রেতার মোট খরচ = সম্পত্তির মূল্য + RETT পরিমাণ</p>
        </div>
      </GlassCard>

      <GlassCard>
        <h2>বাস্তব জীবনের গণনার উদাহরণ</h2>

        <h3>উদাহরণ ১: রিয়াদে অ্যাপার্টমেন্ট কেনা (800,000 SAR)</h3>
        <div className="bg-[#0A0E1A] p-4 rounded-xl mb-4">
          <p className="text-sm">সম্পত্তির মূল্য: 800,000 SAR</p>
          <p className="text-sm mt-1">RETT: 800,000 × 0.05 = <strong>40,000 SAR</strong></p>
          <p className="text-sm mt-1">ক্রেতার মোট খরচ: 800,000 + 40,000 = <strong>840,000 SAR</strong></p>
        </div>

        <h3>উদাহরণ ২: জেদ্দায় ভিলা কেনা (2,500,000 SAR)</h3>
        <div className="bg-[#0A0E1A] p-4 rounded-xl mb-4">
          <p className="text-sm">সম্পত্তির মূল্য: 2,500,000 SAR</p>
          <p className="text-sm mt-1">RETT: 2,500,000 × 0.05 = <strong>125,000 SAR</strong></p>
          <p className="text-sm mt-1">ক্রেতার মোট খরচ: 2,500,000 + 125,000 = <strong>2,625,000 SAR</strong></p>
        </div>

        <h3>উদাহরণ ৩: প্রথমবার ক্রেতার ছাড় (850,000 SAR)</h3>
        <div className="bg-[#0A0E1A] p-4 rounded-xl">
          <p className="text-sm">সম্পত্তির মূল্য: 850,000 SAR (1,000,000 SAR ছাড়ের সীমার মধ্যে)</p>
          <p className="text-sm mt-1">ক্রেতার অবস্থা: সৌদি নাগরিক, প্রথম আবাসিক সম্পত্তি</p>
          <p className="text-sm mt-1">RETT: <strong>0 SAR (সম্পূর্ণ অব্যাহতিপ্রাপ্ত)</strong></p>
          <p className="text-sm mt-1 text-desert-primary">সঞ্চয়: 42,500 SAR</p>
        </div>
      </GlassCard>

      <GlassCard>
        <h2>কিভাবে এবং কখন RETT দিতে হবে</h2>
        <div className="space-y-3">
          <div className="bg-[#0A0E1A] p-3 rounded-lg">
            <p className="text-white font-medium">60-দিনের সময়সীমা</p>
            <p className="text-gray-400 text-sm">RETT রিয়েল এস্টেট লেনদেনের তারিখ থেকে 60 ক্যালেন্ডার দিনের মধ্যে পরিশোধ করতে হবে। এটি একটি কঠোর সময়সীমা। যদি 60 তম দিন সপ্তাহান্তে বা সরকারি ছুটিতে পড়ে, সময়সীমা পরবর্তী কার্যদিবস পর্যন্ত বাড়ানো হয়।</p>
          </div>
          <div className="bg-[#0A0E1A] p-3 rounded-lg">
            <p className="text-white font-medium">কিভাবে ফাইল এবং পরিশোধ করবেন</p>
            <p className="text-gray-400 text-sm">ZATCA-র অনলাইন পোর্টালের মাধ্যমে পরিশোধ করা হয়। আপনাকে একটি অ্যাকাউন্ট তৈরি করতে হবে, লেনদেন নিবন্ধন করতে হবে, বিক্রয় চুক্তি আপলোড করতে হবে এবং SADAD বা ক্রেডিট কার্ডের মাধ্যমে পরিশোধ করতে হবে।</p>
          </div>
          <div className="bg-[#0A0E1A] p-3 rounded-lg">
            <p className="text-white font-medium">বিলম্বে পরিশোধের জরিমানা</p>
            <p className="text-gray-400 text-sm">বিলম্বের প্রতিটি মাসের জন্য অপরিশোধিত করের 1% ধার্য করা হয়। উদাহরণস্বরূপ, 50,000 SAR RETT 3 মাস বিলম্বে 1,500 SAR জরিমানা হয়।</p>
          </div>
        </div>
      </GlassCard>

      <GlassCard>
        <h2>RETT-এ ক্রেতাদের সাধারণ ভুল</h2>
        <div className="space-y-3">
          <div className="bg-[#0A0E1A] p-3 rounded-lg">
            <p className="text-white font-medium">1. 5% করের জন্য বাজেট না করা</p>
            <p className="text-gray-400 text-sm">সবচেয়ে সাধারণ ভুল। ক্রেতারা সম্পত্তির দামের জন্য সঞ্চয় করেন কিন্তু 5% কর ভুলে যান।</p>
          </div>
          <div className="bg-[#0A0E1A] p-3 rounded-lg">
            <p className="text-white font-medium">2. 60-দিনের সময়সীমা মিস করা</p>
            <p className="text-gray-400 text-sm">জীবন ব্যস্ত এবং 60 দিন দ্রুত কেটে যায়। চুক্তি স্বাক্ষরের সাথে সাথেই একটি অনুস্মারক সেট করুন।</p>
          </div>
          <div className="bg-[#0A0E1A] p-3 rounded-lg">
            <p className="text-white font-medium">3. ধরে নেওয়া যে বিক্রেতা দেবে</p>
            <p className="text-gray-400 text-sm">বিক্রয় চুক্তিতে স্পষ্টভাবে বলা না থাকলে, ক্রেতা দায়ী।</p>
          </div>
          <div className="bg-[#0A0E1A] p-3 rounded-lg">
            <p className="text-white font-medium">4. সম্পত্তির মূল্য কম ঘোষণা করা</p>
            <p className="text-gray-400 text-sm">ZATCA ঘোষিত মূল্য ন্যায্য বাজার মূল্যের সাথে যাচাই করে।</p>
          </div>
        </div>
      </GlassCard>

      <GlassCard>
        <h2>কিভাবে Sauditoolhub RETT ট্যাক্স ক্যালকুলেটর ব্যবহার করবেন</h2>
        <p>
          আমাদের বিনামূল্যের <Link href="/rett-tax-calculator" className="text-desert-primary font-bold underline">RETT ট্যাক্স ক্যালকুলেটর</Link> আপনার সঠিক কর দায় গণনা করা সহজ করে। সম্পত্তির মূল্য লিখুন, সম্পত্তির ধরন এবং ক্রেতার অবস্থা নির্বাচন করুন।
        </p>
        <p>
          আমাদের <Link href="/mortgage-vs-rent" className="text-desert-primary underline">মর্টগেজ বনাম ভাড়া ক্যালকুলেটর</Link> এবং <Link href="/property-valuation" className="text-desert-primary underline">সম্পত্তি মূল্যায়ন টুল</Link>ও দেখুন।
        </p>
      </GlassCard>

      <GlassCard>
        <h2>উপসংহার</h2>
        <p>
          RETT সৌদি আরবে সম্পত্তি কেনার সময় একটি গুরুত্বপূর্ণ খরচ। সম্পত্তির মূল্যের 5% হিসেবে, এটি আপনার ক্রয়ে দশ হাজার রিয়াল যোগ করে। কিন্তু সঠিক পরিকল্পনার সাথে — উপলব্ধ ছাড় বোঝা, করের জন্য আগাম বাজেট করা, এবং 60 দিনের মধ্যে পরিশোধ করা — আপনি মসৃণভাবে প্রক্রিয়াটি পরিচালনা করতে পারেন।
        </p>
        <p>
          <Link href="/rett-tax-calculator" className="text-desert-primary underline">Sauditoolhub RETT ক্যালকুলেটর</Link> দিয়ে আপনার সঠিক RETT দায় গণনা করুন এবং সৌদি আরবে সম্পত্তি এবং অর্থসংক্রান্ত আরও গাইডের জন্য <Link href="/blog" className="text-desert-primary underline">আমাদের ব্লগ</Link> দেখুন।
        </p>
      </GlassCard>
    </article>
  )
}

export default async function RettGuidePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  return (
    <div className="relative z-10 px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        {locale === 'ar' ? <ArContent /> : locale === 'ur' ? <UrContent /> : locale === 'tl' ? <TlContent /> : locale === 'bn' ? <BnContent /> : <EnContent />}
      </div>
    </div>
  )
}
