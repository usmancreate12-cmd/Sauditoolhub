import type { Metadata } from 'next'
import Link from 'next/link'
import { BreadcrumbJsonLd, FAQJsonLd, ArticleJsonLd } from '@/components/JsonLd'
import { Calculator, ShoppingCart, AlertTriangle, CheckCircle, TrendingUp, CreditCard, Truck, Percent, DollarSign } from 'lucide-react'

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
    ? 'الدليل الكامل لحساب الأرباح الحقيقية في سلة وزاد في السعودية 2026 | Sauditoolhub'
    : isUr
    ? 'سعودی عرب میں سلا اور زد پر حقیقی منافع کا حساب لگانے کا مکمل گائیڈ 2026 | Sauditoolhub'
    : isTl
    ? 'Kumpletong Gabay sa Pagkalkula ng Tunay na Kita sa Salla at Zid sa Saudi Arabia 2026 | Sauditoolhub'
    : isBn
    ? 'সৌদি আরবে Sala ও Zid-এ প্রকৃত লাভ গণনার সম্পূর্ণ গাইড 2026 | Sauditoolhub'
    : 'Complete Guide to Calculating True Profit on Salla & Zid in Saudi Arabia 2026 | Sauditoolhub'

  const description = isAr
    ? 'دليل كامل لحساب صافي الربح في متجر سلة أو زد 2026. تعرف على رسوم المنصة وبوابات الدفع والشحن وضريبة القيمة المضافة وكيفية حساب الربح الحقيقي.'
    : isUr
    ? 'سلا اور زد پر حقیقی منافع کا حساب لگانے کا مکمل گائیڈ 2026۔ پلیٹ فارم فیس، پیمنٹ گیٹ وے، شپنگ اور VAT کے ساتھ خالص منافع کا حساب۔'
    : isTl
    ? 'Kumpletong gabay sa pagkalkula ng net profit sa Salla o Zid 2026. Alamin ang platform fees, payment gateway, shipping costs, VAT, at tunay na kita.'
    : isBn
    ? 'Salla বা Zid-এ প্রকৃত মুনাফা গণনার সম্পূর্ণ গাইড 2026। প্ল্যাটফর্ম ফি, পেমেন্ট গেটওয়ে, শিপিং খরচ, VAT এবং নিট লাভ সম্পর্কে জানুন।'
    : 'Complete guide to calculating true net profit on Salla and Zid in Saudi Arabia 2026. Covers platform fees, payment gateway costs, shipping, VAT, and hidden e-commerce costs that eat into your margins.'

  return {
    title,
    description,
    alternates: {
      canonical: isDefault ? `${baseUrl}/guide/salla-zid-ecommerce-profit-calculator-saudi-arabia-2026` : `${baseUrl}/${locale}/guide/salla-zid-ecommerce-profit-calculator-saudi-arabia-2026`,
      languages: {
        en: `${baseUrl}/guide/salla-zid-ecommerce-profit-calculator-saudi-arabia-2026`,
        ar: `${baseUrl}/ar/guide/salla-zid-ecommerce-profit-calculator-saudi-arabia-2026`,
        ur: `${baseUrl}/ur/guide/salla-zid-ecommerce-profit-calculator-saudi-arabia-2026`,
        tl: `${baseUrl}/tl/guide/salla-zid-ecommerce-profit-calculator-saudi-arabia-2026`,
        bn: `${baseUrl}/bn/guide/salla-zid-ecommerce-profit-calculator-saudi-arabia-2026`,
      },
    },
    openGraph: {
      title,
      description,
      url: isDefault ? `${baseUrl}/guide/salla-zid-ecommerce-profit-calculator-saudi-arabia-2026` : `${baseUrl}/${locale}/guide/salla-zid-ecommerce-profit-calculator-saudi-arabia-2026`,
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
  headline: 'The Complete Guide to Calculating True Profit on Salla & Zid in Saudi Arabia 2026',
  description: 'Learn how to calculate true net profit on Salla and Zid e-commerce platforms in Saudi Arabia. Covers subscription fees, payment gateway costs, shipping, COD losses, VAT, and strategies to maximize margins.',
  author: { '@type': 'Person', name: 'Sauditoolhub Team' },
  publisher: { '@type': 'Organization', name: 'Sauditoolhub', logo: { '@type': 'ImageObject', url: `${baseUrl}/logo.png` } },
  datePublished: '2026-01-01',
  dateModified: '2026-07-01',
}

const schemaAr = {
  ...articleSchemaEn,
  headline: 'الدليل الكامل لحساب الأرباح الحقيقية في سلة وزاد في السعودية 2026',
  description: 'تعلم كيفية حساب صافي الربح الحقيقي في منصتي سلة وزاد. يشرح رسوم الاشتراك، رسوم بوابات الدفع، الشحن، خسائر الدفع عند الاستلام، ضريبة القيمة المضافة، واستراتيجيات تعظيم الأرباح.',
}

const schemaUr = {
  ...articleSchemaEn,
  headline: 'سعودی عرب میں سلا اور زد پر حقیقی منافع کا حساب لگانے کا مکمل گائیڈ 2026',
  description: 'سلا اور زد ای کامرس پلیٹ فارمز پر حقیقی خالص منافع کا حساب لگانا سیکھیں۔ سبسکرپشن فیس، پیمنٹ گیٹ وے، شپنگ، COD نقصان، VAT، اور منافع بڑھانے کی حکمت عملی۔',
}

const schemaTl = {
  ...articleSchemaEn,
  headline: 'Kumpletong Gabay sa Pagkalkula ng Tunay na Kita sa Salla at Zid sa Saudi Arabia 2026',
  description: 'Matuto kung paano kalkulahin ang tunay na net profit sa Salla at Zid e-commerce platforms sa Saudi Arabia. Sinasaklaw ang subscription fees, payment gateway, shipping, COD losses, VAT, at mga estratehiya.',
}

const schemaBn = {
  ...articleSchemaEn,
  headline: 'সৌদি আরবে Salla ও Zid-এ প্রকৃত লাভ গণনার সম্পূর্ণ গাইড 2026',
  description: 'সৌদি আরবে Salla ও Zid ই-কমার্স প্ল্যাটফর্মে প্রকৃত নিট মুনাফা গণনা শিখুন। সাবস্ক্রিপশন ফি, পেমেন্ট গেটওয়ে, শিপিং, COD লোকসান, VAT এবং মুনাফা বাড়ানোর কৌশল।',
}

const faqsEn = [
  { question: 'What are the subscription fees for Salla in 2026?', answer: 'Salla offers three main plans: Basic (approximately 259 SAR/month) for small stores, Plus (approximately 459 SAR/month) with more features, and Pro (approximately 999 SAR/month) for large businesses with priority support and advanced analytics. Annual plans typically offer 2-3 months free.' },
  { question: 'What are the subscription fees for Zid in 2026?', answer: 'Zid offers Startup (approximately 299 SAR/month), Growth (approximately 599 SAR/month), and Enterprise (custom pricing) plans. Zid also charges a commission on sales which varies based on your plan between 0% to 2% of transaction value.' },
  { question: 'How much do payment gateways charge in Saudi Arabia?', answer: 'Payment gateway fees in Saudi Arabia typically range from 1.5% to 2.8% + 1 SAR per transaction. Mada cards are usually the cheapest (around 1.5%), Visa/Mastercard credit cards are mid-range (2.0-2.5%), and American Express is the most expensive (up to 2.8%). Apple Pay fees follow the underlying card\u2019s rate.' },
  { question: 'Why is Cash on Delivery (COD) a profit killer for e-commerce?', answer: 'COD has multiple hidden costs: courier companies charge an extra 1-2% handling fee on top of shipping; return rates for COD orders can be 30-50% compared to 5-10% for prepaid orders; and you bear the cost of both shipping legs for returned items. Overall, COD can reduce your profit by 15-25% compared to prepaid orders.' },
  { question: 'How do I calculate true net profit on Salla or Zid?', answer: 'True Net Profit = Selling Price - (Product Cost + Shipping Cost + Payment Gateway Fee + Platform Fee + VAT + Expected Return Loss). Use the Sauditoolhub Salla/Zid Profit Calculator at /salla-profit-calculator to get an instant estimate with all factors included.' },
  { question: 'How can I reduce Cash on Delivery return rates?', answer: 'Strategies include: sending WhatsApp order confirmation messages with product images, calling customers before dispatch, using tamper-proof packaging, offering free returns to build trust, and gradually shifting customers toward prepaid payments by offering small discounts for online payment.' },
  { question: 'Does VAT apply to e-commerce sales in Saudi Arabia?', answer: 'Yes, the 15% VAT applies to all e-commerce sales in Saudi Arabia. Additionally, platform fees (Salla/Zid subscription + commissions) and payment gateway fees are also subject to VAT. You must register for VAT if your annual taxable supplies exceed 375,000 SAR.' },
  { question: 'What is the average shipping cost for e-commerce in Saudi Arabia?', answer: 'Domestic shipping within Saudi Arabia typically costs 15-35 SAR per order depending on weight, destination city, and courier. SMSA and Aramex charge approximately 18-25 SAR for standard delivery. COD orders add an extra 2-5 SAR handling fee. Express shipping ranges from 35-60 SAR.' },
  { question: 'How do BNPL services like Tamara and Tabby help e-commerce profits?', answer: 'BNPL services increase average order value by 30-50% as customers feel more comfortable making larger purchases. Merchant fees for BNPL are typically 2-4% — similar to credit cards — but the higher cart value and lower return rates make BNPL more profitable than COD overall.' },
  { question: 'What is the cheapest way to start selling online in Saudi Arabia?', answer: 'The most cost-effective approach is to start with Salla Basic plan (259 SAR/month) + Mada-only payment gateway (lowest fees) + focus on prepaid orders to avoid COD losses. Use budget-friendly shipping with SMSA or local couriers. Use our Salla/Zid Profit Calculator to model your costs before launching.' },
]

const faqsAr = [
  { question: 'ما هي رسوم اشتراك سلة في 2026؟', answer: 'تقدم سلة ثلاث خطط رئيسية: الأساسية (حوالي 259 ريال/شهر) للمتاجر الصغيرة، بلس (حوالي 459 ريال/شهر) مع ميزات إضافية، وبرو (حوالي 999 ريال/شهر) للشركات الكبيرة. الخطط السنوية توفر 2-3 أشهر مجانية.' },
  { question: 'ما هي رسوم اشتراك زد في 2026؟', answer: 'يقدم زد خطط: ستارت أب (299 ريال/شهر)، غروث (599 ريال/شهر)، وإنتربرايز (سعر مخصص). زد يفرض عمولة على المبيعات تتراوح بين 0% إلى 2% حسب الخطة.' },
  { question: 'كم تبلغ رسوم بوابات الدفع في السعودية؟', answer: 'تتراوح من 1.5% إلى 2.8% + 1 ريال لكل معاملة. مدى الأرخص (1.5%)، فيزا/ماستركارد (2.0-2.5%)، أمريكان إكسبريس الأعلى حتى 2.8%. أبل باي يتبع سعر البطاقة الأساسية.' },
  { question: 'لماذا يعتبر الدفع عند الاستلام قاتل أرباح للتجارة الإلكترونية؟', answer: 'له تكاليف خفية: رسوم معالجة إضافية 1-2%، نسبة إرجاع 30-50% مقابل 5-10% للمدفوع مسبقاً، وتتحمل تكلفة شحن ذهاب وإياب للمنتجات المرتجعة.' },
  { question: 'كيف أحسب صافي الربح الحقيقي في سلة أو زد؟', answer: 'صافي الربح = سعر البيع - (تكلفة المنتج + الشحن + رسوم بوابة الدفع + رسوم المنصة + ضريبة القيمة المضافة + خسائر الإرجاع المتوقعة). استخدم حاسبة أرباح سلة/زد من Sauditoolhub.' },
  { question: 'كيف يمكنني تقليل نسبة الإرجاع في الدفع عند الاستلام؟', answer: 'إرسال تأكيد الطلب عبر واتساب مع صور المنتج، الاتصال بالعميل قبل الشحن، استخدام تغليف مقاوم للعبث، تقديم شحن مجاني للإرجاع، وتحويل العملاء تدريجياً للدفع المسبق بخصومات صغيرة.' },
  { question: 'هل ضريبة القيمة المضافة تطبق على مبيعات التجارة الإلكترونية؟', answer: 'نعم، 15% ضريبة قيمة مضافة تطبق على جميع مبيعات التجارة الإلكترونية. رسوم المنصة وبوابة الدفع تخضع أيضاً للضريبة.' },
  { question: 'كم متوسط تكلفة الشحن للتجارة الإلكترونية في السعودية؟', answer: '15-35 ريال للطلبية حسب الوزن والوجهة. SMSA وأرامكس حوالي 18-25 ريال. الشحن السريع 35-60 ريال.' },
  { question: 'كيف تساعد خدمات اشتر الآن وادفع لاحقاً في أرباح التجارة الإلكترونية؟', answer: 'تزيد متوسط قيمة الطلب بنسبة 30-50%. رسومها 2-4% مشابهة للبطاقات الائتمانية لكن مع قيمة سلة أعلى ونسبة إرجاع أقل.' },
  { question: 'ما هي أرخص طريقة لبدء البيع أونلاين في السعودية؟', answer: 'ابدأ بخطة سلة الأساسية (259 ريال/شهر) + بوابة دفع مدى فقط (أقل رسوم) + التركيز على الطلبات المدفوعة مسبقاً. استخدم حاسبة الأرباح قبل الإطلاق.' },
]

const faqsUr = [
  { question: '2026 میں Salla کی سبسکرپشن فیس کتنی ہے؟', answer: 'Salla تین منصوبے پیش کرتا ہے: بنیادی (259 SAR/ماہ)، پلس (459 SAR/ماہ)، اور پرو (999 SAR/ماہ)۔ سالانہ منصوبوں میں 2-3 مہینے مفت ملتے ہیں۔' },
  { question: '2026 میں Zid کی سبسکرپشن فیس کتنی ہے؟', answer: 'Zid سٹارٹ اپ (299 SAR/ماہ)، گروتھ (599 SAR/ماہ)، اور انٹرپرائز (اپنی مرضی کی قیمت) کے منصوبے پیش کرتا ہے۔ Zid سیلز پر 0% سے 2% کمیشن بھی لیتا ہے۔' },
  { question: 'سعودی عرب میں پیمنٹ گیٹ وے کی فیس کتنی ہے؟', answer: '1.5% سے 2.8% + 1 SAR فی لین دین۔ Mada سب سے سستا (1.5%)، Visa/Mastercard درمیانہ (2.0-2.5%)، American Express سب سے مہنگا (2.8%)۔' },
  { question: 'COD منافع کیوں ختم کر دیتا ہے؟', answer: 'اضافی ہینڈلنگ فیس، 30-50% واپسی کی شرح (پری پیڈ کے 5-10% کے مقابلے)، اور دو طرفہ شپنگ کی لاگت COD کو مہنگا بنا دیتی ہے۔' },
  { question: 'خالص منافع کیسے حساب کریں؟', answer: 'خالص منافع = فروخت قیمت - (پروڈکٹ لاگت + شپنگ + پیمنٹ گیٹ وے فیس + پلیٹ فارم فیس + VAT + متوقع واپسی نقصان)۔ Salla/Zid Profit Calculator استعمال کریں۔' },
  { question: 'COD واپسی کی شرح کیسے کم کریں؟', answer: 'واٹس ایپ پر تصاویر کے ساتھ تصدیق، ڈسپیچ سے پہلے کال، چھیڑ چھاڑ سے بچانے والی پیکیجنگ، اور پری پیڈ پر چھوٹ۔' },
  { question: 'کیا VAT ای کامرس پر لاگو ہوتا ہے؟', answer: 'ہاں، 15% VAT سعودی عرب میں تمام ای کامرس فروخت پر لاگو ہوتا ہے۔ پلیٹ فارم اور پیمنٹ گیٹ وے فیس بھی VAT کے تابع ہیں۔' },
  { question: 'ای کامرس شپنگ کی اوسط لاگت کیا ہے؟', answer: '15-35 SAR فی آرڈر۔ SMSA اور Aramex 18-25 SAR۔ COD آرڈرز پر 2-5 SAR اضافی۔ ایکسپریس 35-60 SAR۔' },
  { question: 'BNPL خدمات جیسے Tamara اور Tabby منافع میں کیسے مدد کرتی ہیں؟', answer: 'اوسط آرڈر ویلیو 30-50% بڑھاتی ہیں۔ فیس 2-4% — کریڈٹ کارڈ جیسی — لیکن زیادہ ویلیو اور کم واپسی COD سے بہتر بناتی ہے۔' },
  { question: 'سعودی عرب میں آن لائن فروخت شروع کرنے کا سب سے سستا طریقہ؟', answer: 'Salla بنیادی منصوبہ (259 SAR/ماہ) + Mada پیمنٹ گیٹ وے + پری پیڈ آرڈرز پر توجہ۔ شروع کرنے سے پہلے پروفٹ کیلکولیٹر استعمال کریں۔' },
]

const faqsTl = [
  { question: 'Magkano ang subscription fee ng Salla sa 2026?', answer: 'Nag-aalok ang Salla ng tatlong plano: Basic (259 SAR/month), Plus (459 SAR/month), at Pro (999 SAR/month). Ang annual plans ay nagbibigay ng 2-3 buwan na libre.' },
  { question: 'Magkano ang subscription fee ng Zid sa 2026?', answer: 'Nag-aalok ang Zid ng Startup (299 SAR/month), Growth (599 SAR/month), at Enterprise (custom pricing). May commission din ang Zid na 0% hanggang 2% ng benta.' },
  { question: 'Magkano ang singil ng payment gateway sa Saudi Arabia?', answer: '1.5% hanggang 2.8% + 1 SAR bawat transaksyon. Mada ang pinakamura (1.5%), Visa/Mastercard (2.0-2.5%), American Express ang pinakamahal (2.8%).' },
  { question: 'Paano kalkulahin ang tunay na net profit?', answer: 'Net Profit = Presyo ng Benta - (Product Cost + Shipping + Gateway Fee + Platform Fee + VAT + Return Loss). Gamitin ang Salla/Zid Profit Calculator.' },
  { question: 'Paano bawasan ang COD return rates?', answer: 'WhatsApp confirmation na may product images, tawagan ang customer bago i-dispatch, tamper-proof packaging, at mag-alok ng discount para sa prepaid orders.' },
]

const faqsBn = [
  { question: '2026 সালে Salla-র সাবস্ক্রিপশন ফি কত?', answer: 'Salla তিনটি প্ল্যান অফার করে: বেসিক (২৫৯ SAR/মাস), প্লাস (৪৫৯ SAR/মাস), এবং প্রো (৯৯৯ SAR/মাস)। বাৎসরিক প্ল্যানে ২-৩ মাস বিনামূল্যে পাওয়া যায়।' },
  { question: '2026 সালে Zid-এর সাবস্ক্রিপশন ফি কত?', answer: 'Zid স্টার্টআপ (২৯৯ SAR/মাস), গ্রোথ (৫৯৯ SAR/মাস), এবং এন্টারপ্রাইজ (কাস্টম প্রাইসিং) প্ল্যান অফার করে। Zid বিক্রয়ের উপর ০% থেকে ২% কমিশনও নেয়।' },
  { question: 'সৌদি আরবে পেমেন্ট গেটওয়ে ফি কত?', answer: 'লেনদেন প্রতি ১.৫% থেকে ২.৮% + ১ SAR। Mada সবচেয়ে সস্তা (১.৫%), Visa/Mastercard মধ্যবর্তী (২.০-২.৫%), American Express সবচেয়ে ব্যয়বহুল (২.৮%)।' },
  { question: 'প্রকৃত নিট মুনাফা কীভাবে গণনা করবেন?', answer: 'নিট মুনাফা = বিক্রয় মূল্য - (পণ্যের খরচ + শিপিং + পেমেন্ট গেটওয়ে ফি + প্ল্যাটফর্ম ফি + VAT + প্রত্যাশিত রিটার্ন লোকসান)। Salla/Zid Profit Calculator ব্যবহার করুন।' },
  { question: 'সৌদি আরবে অনলাইনে বিক্রি শুরুর সবচেয়ে সস্তা উপায় কী?', answer: 'Salla বেসিক প্ল্যান (২৫৯ SAR/মাস) + Mada পেমেন্ট গেটওয়ে + প্রিপেইড অর্ডারে ফোকাস। লঞ্চের আগে প্রফিট ক্যালকুলেটর ব্যবহার করুন।' },
]

function EnContent() {
  return (
    <article className="prose prose-invert max-w-none prose-headings:text-desert-primary prose-a:text-desert-primary prose-strong:text-white prose-li:text-gray-300">
      <h1>The Complete Guide to Calculating True Profit on Salla &amp; Zid in Saudi Arabia 2026</h1>

      <div className="not-prose glass p-6 rounded-xl mb-8">
        <p className="text-gray-300 text-lg leading-relaxed">
          The e-commerce boom in Saudi Arabia is undeniable. With platforms like Salla and Zid making it easier than ever to start an online store, thousands of entrepreneurs have launched shops in the past few years. But there is a harsh reality that many discover only after their first few months of operation: gross sales and net profit are very different numbers.
        </p>
        <p className="text-gray-300 text-lg leading-relaxed mt-4">
          Between platform subscription fees, payment gateway charges, shipping costs, Cash on Delivery losses, and the 15% VAT, your true profit margin can be dramatically lower than you expect. This guide breaks down <strong>every cost that eats into your e-commerce profit</strong> and gives you a clear formula to calculate your true net profit.
        </p>
        <p className="text-gray-300 text-lg leading-relaxed mt-4">
          Use our free{' '}
          <Link href="/salla-profit-calculator" className="text-desert-primary font-bold underline">
            Salla/Zid Profit Calculator
          </Link>{' '}
          to estimate your real margins in seconds, accounting for all hidden costs.
        </p>
      </div>

      <h2>Understanding Salla &amp; Zid Subscription Fees (2026)</h2>

      <div className="not-prose glass p-5 rounded-xl mb-6">
        <h3 className="text-desert-primary font-semibold mb-2">Salla Plans</h3>
        <p className="text-gray-300 text-sm mb-2">Salla is one of the most popular e-commerce platforms in Saudi Arabia. Here are the current plans:</p>
        <div className="bg-[#0A0E1A] p-4 rounded-lg text-gray-300 text-sm space-y-1 font-mono">
          <p><strong className="text-white">Basic:</strong> ~259 SAR/month — Up to 250 products, basic analytics, standard support</p>
          <p><strong className="text-white">Plus:</strong> ~459 SAR/month — Up to 1,000 products, advanced analytics, priority support</p>
          <p><strong className="text-white">Pro:</strong> ~999 SAR/month — Unlimited products, full API access, dedicated account manager</p>
        </div>
        <p className="text-gray-400 text-sm mt-2">Annual plans typically give you 2-3 months free. Premium themes cost extra (200-800 SAR one-time). Paid apps can add 50-300 SAR/month to your costs.</p>
      </div>

      <div className="not-prose glass p-5 rounded-xl mb-6">
        <h3 className="text-desert-primary font-semibold mb-2">Zid Plans</h3>
        <p className="text-gray-300 text-sm mb-2">Zid is the other major Saudi e-commerce platform. Its pricing model includes both subscription and commission:</p>
        <div className="bg-[#0A0E1A] p-4 rounded-lg text-gray-300 text-sm space-y-1 font-mono">
          <p><strong className="text-white">Startup:</strong> ~299 SAR/month + 2% commission on sales</p>
          <p><strong className="text-white">Growth:</strong> ~599 SAR/month + 1% commission on sales</p>
          <p><strong className="text-white">Enterprise:</strong> Custom pricing — typically 0% commission with higher monthly fee</p>
        </div>
        <p className="text-gray-400 text-sm mt-2">Unlike Salla, Zid's commission model means your platform costs scale with your revenue. For high-volume stores, this can be more expensive than Salla's fixed-fee model.</p>
      </div>

      <h2>The Hidden Costs of E-commerce in KSA</h2>

      <div className="not-prose glass p-5 rounded-xl mb-6">
        <div className="flex items-center gap-2 mb-2">
          <CreditCard className="h-5 w-5 text-desert-primary" />
          <h3 className="text-white font-semibold m-0">Payment Gateway Fees</h3>
        </div>
        <p className="text-gray-300 text-sm mb-2">Every online payment incurs a fee from the payment gateway provider. In Saudi Arabia, typical rates are:</p>
        <ul className="space-y-1 text-gray-400 text-sm list-disc list-inside">
          <li><strong>Mada:</strong> 1.5% per transaction (cheapest option)</li>
          <li><strong>Visa/Mastercard Credit:</strong> 2.0% — 2.5% per transaction</li>
          <li><strong>American Express:</strong> Up to 2.8% per transaction</li>
          <li><strong>Apple Pay:</strong> Follows the underlying card rate (usually 2.0-2.5%)</li>
          <li>Most gateways also charge a <strong>flat fee of 1 SAR</strong> per transaction</li>
        </ul>
      </div>

      <div className="not-prose glass p-5 rounded-xl mb-6">
        <div className="flex items-center gap-2 mb-2">
          <Truck className="h-5 w-5 text-desert-primary" />
          <h3 className="text-white font-semibold m-0">Cash on Delivery (COD) — The Profit Killer</h3>
        </div>
        <p className="text-gray-300 text-sm mb-2">COD is the most expensive payment method for e-commerce businesses in Saudi Arabia. Here is why:</p>
        <ul className="space-y-1 text-gray-400 text-sm list-disc list-inside">
          <li>Courier companies charge an <strong>extra 1-2% handling fee</strong> on COD orders</li>
          <li><strong>Return rates:</strong> 30% to 50% of COD orders are rejected at delivery, compared to 5-10% for prepaid orders</li>
          <li>You bear the cost of <strong>round-trip shipping</strong> for returned items</li>
          <li>Returned products may be damaged, requiring additional loss</li>
        </ul>
      </div>

      <div className="not-prose glass p-5 rounded-xl mb-6">
        <div className="flex items-center gap-2 mb-2">
          <Percent className="h-5 w-5 text-desert-primary" />
          <h3 className="text-white font-semibold m-0">Shipping &amp; Fulfillment Costs</h3>
        </div>
        <ul className="space-y-1 text-gray-400 text-sm list-disc list-inside">
          <li>Standard domestic delivery: 18-35 SAR per package (SMSA, Aramex)</li>
          <li>COD handling surcharge: 2-5 SAR extra per order</li>
          <li>Express delivery: 35-60 SAR</li>
          <li>Packaging materials: 2-10 SAR per order depending on product size</li>
          <li>Cross-city delivery within KSA costs more than local delivery</li>
        </ul>
      </div>

      <div className="not-prose glass p-5 rounded-xl mb-6">
        <div className="flex items-center gap-2 mb-2">
          <DollarSign className="h-5 w-5 text-desert-primary" />
          <h3 className="text-white font-semibold m-0">VAT (15%)</h3>
        </div>
        <p className="text-gray-300 text-sm">ZATCA VAT at 15% applies to your product selling price. Additionally, platform fees (Salla/Zid subscription and commissions), payment gateway fees, and shipping charges all have VAT applied. If your annual taxable supplies exceed 375,000 SAR, you must register for VAT and file returns quarterly or monthly.</p>
      </div>

      <h2>How to Calculate True Net Profit — Step-by-Step Formula</h2>

      <div className="not-prose glass p-6 rounded-xl mb-8">
        <div className="bg-[#0A0E1A] p-5 rounded-lg text-gray-300 text-sm font-mono space-y-2">
          <p className="text-desert-primary font-bold text-base">True Net Profit Formula</p>
          <p>Net Profit = Selling Price</p>
          <p className="ml-4">− Product Cost (COGS)</p>
          <p className="ml-4">− Shipping Cost (including packaging)</p>
          <p className="ml-4">− Payment Gateway Fee (percentage + flat fee)</p>
          <p className="ml-4">− Platform Fee (Salla/Zid subscription + commissions)</p>
          <p className="ml-4">− VAT (15% on applicable amounts)</p>
          <p className="ml-4">− Expected Return Loss (return rate × full cost per order)</p>
          <p className="mt-2 text-desert-primary">= True Net Profit</p>
        </div>
      </div>

      <h2>Real-Life Calculation Examples</h2>

      <div className="not-prose glass p-5 rounded-xl mb-6">
        <h3 className="text-white font-semibold mb-3">Example 1: Fashion Item via Mada (Low Return Rate)</h3>
        <p className="text-gray-300 text-sm mb-2">Selling a fashion item for 200 SAR on Salla Basic plan via Mada payment.</p>
        <div className="bg-[#0A0E1A] p-4 rounded-lg text-gray-300 text-sm space-y-1 font-mono">
          <p>Selling Price: 200.00 SAR</p>
          <p>Product Cost (COGS): − 80.00 SAR</p>
          <p>Shipping: − 20.00 SAR</p>
          <p>Packaging: − 5.00 SAR</p>
          <p>Mada Fee (1.5% + 1 SAR): − 4.00 SAR</p>
          <p>Platform Fee (Salla Basic/monthly per-order): − 3.00 SAR</p>
          <p>VAT (15% on product): − 26.09 SAR</p>
          <p>Return Loss (8% prepaid rate): − 8.64 SAR</p>
          <p className="text-desert-primary font-bold mt-2">True Net Profit: <span className="text-desert-gold">53.27 SAR (26.6% margin)</span></p>
        </div>
      </div>

      <div className="not-prose glass p-5 rounded-xl mb-6">
        <h3 className="text-white font-semibold mb-3">Example 2: Electronics Item via COD (High Return Rate)</h3>
        <p className="text-gray-300 text-sm mb-2">Selling an electronics item for 500 SAR on Zid Growth plan via COD payment.</p>
        <div className="bg-[#0A0E1A] p-4 rounded-lg text-gray-300 text-sm space-y-1 font-mono">
          <p>Selling Price: 500.00 SAR</p>
          <p>Product Cost (COGS): − 250.00 SAR</p>
          <p>Shipping + COD Handling: − 30.00 SAR</p>
          <p>Packaging: − 8.00 SAR</p>
          <p>COD Handling Fee (2%): − 10.00 SAR</p>
          <p>Platform Fee (Zid Growth + 1% commission): − 11.00 SAR</p>
          <p>VAT (15% on product): − 65.22 SAR</p>
          <p>Return Loss (40% COD rate): − 119.20 SAR</p>
          <p className="text-desert-primary font-bold mt-2">True Net Profit: <span className="text-desert-gold">6.58 SAR (1.3% margin)</span></p>
          <p className="text-yellow-400 text-xs mt-1">Warning: COD with high return rate nearly eliminates profit!</p>
        </div>
      </div>

      <h2>Strategies to Maximize E-commerce Profit in Saudi Arabia</h2>

      <div className="not-prose glass p-5 rounded-xl mb-6">
        <ul className="space-y-4 text-gray-300">
          <li className="flex items-start gap-3">
            <TrendingUp className="h-5 w-5 text-desert-primary mt-0.5 shrink-0" />
            <div>
              <strong className="text-white">Reduce COD Return Rates</strong>
              <p className="text-sm text-gray-400">Send WhatsApp confirmation messages with product images. Call the customer before shipping to confirm. Use tamper-proof packaging to signal quality. Offer a small discount (5-10 SAR) for prepaid orders to shift customers away from COD.</p>
            </div>
          </li>
          <li className="flex items-start gap-3">
            <TrendingUp className="h-5 w-5 text-desert-primary mt-0.5 shrink-0" />
            <div>
              <strong className="text-white">Negotiate Shipping Rates</strong>
              <p className="text-sm text-gray-400">Once you reach 50+ orders per month, negotiate better rates with SMSA, Aramex, or local couriers. Many providers offer volume discounts of 10-30% for consistent shippers. Compare multiple providers quarterly.</p>
            </div>
          </li>
          <li className="flex items-start gap-3">
            <TrendingUp className="h-5 w-5 text-desert-primary mt-0.5 shrink-0" />
            <div>
              <strong className="text-white">Use BNPL Services (Tamara, Tabby)</strong>
              <p className="text-sm text-gray-400">Buy Now Pay Later services increase average order value by 30-50%. Merchant fees (2-4%) are comparable to credit cards, but the higher cart value and lower return rates than COD make BNPL significantly more profitable overall.</p>
            </div>
          </li>
          <li className="flex items-start gap-3">
            <TrendingUp className="h-5 w-5 text-desert-primary mt-0.5 shrink-0" />
            <div>
              <strong className="text-white">Optimize Your Product Mix</strong>
              <p className="text-sm text-gray-400">Products with high return rates or low margins should be deprioritized. Focus on items with less than 10% return rate and more than 30% gross margin. Use your sales data to identify your most profitable categories.</p>
            </div>
          </li>
        </ul>
      </div>

      <h2>How to Use the Sauditoolhub Salla/Zid Profit Calculator</h2>
      <div className="not-prose glass p-6 rounded-xl mb-8">
        <div className="flex items-center gap-3 mb-4">
          <Calculator className="h-8 w-8 text-desert-primary" />
          <h3 className="text-white text-lg font-bold m-0">Sauditoolhub Salla/Zid Profit Calculator</h3>
        </div>
        <p className="text-gray-300 mb-4">
          Our interactive calculator lets you model every cost that affects your e-commerce profit. Enter your selling price, product cost, shipping, payment gateway, platform, and expected return rate — and see your true net profit instantly. Test different scenarios to find the most profitable pricing strategy.
        </p>
        <ul className="space-y-2 text-gray-400 text-sm mb-4">
          <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-desert-primary" /> Supports Salla and Zid pricing models</li>
          <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-desert-primary" /> Includes all hidden costs: VAT, returns, gateway fees</li>
          <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-desert-primary" /> Compare COD vs prepaid vs BNPL scenarios</li>
          <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-desert-primary" /> Free — no registration required</li>
        </ul>
        <Link href="/salla-profit-calculator" className="inline-flex items-center gap-2 rounded-xl bg-desert-primary px-8 py-3 text-sm font-bold text-white transition-all hover:bg-desert-primary-dim">
          <Calculator className="h-4 w-4" />
          Calculate Your Profit Now
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
      <p>
        Running a profitable e-commerce store in Saudi Arabia requires understanding every cost that affects your margins. Platform fees, payment gateway charges, shipping, COD losses, and VAT can easily consume 30-50% of your revenue if not managed carefully. The difference between a thriving business and one that struggles often comes down to how well you manage these costs.
      </p>
      <p>
        Use our{' '}
        <Link href="/salla-profit-calculator" className="text-desert-primary font-bold underline">Salla/Zid Profit Calculator</Link>
        {' '}before setting your prices. Also explore our{' '}
        <Link href="/zatca-vat-calculator" className="text-desert-primary font-bold underline">ZATCA VAT Calculator</Link>
        {' '}for tax compliance and{' '}
        <Link href="/cr-cost-estimator" className="text-desert-primary font-bold underline">CR Cost Estimator</Link>
        {' '}for business setup costs. Visit our{' '}
        <Link href="/blog" className="text-desert-primary font-bold underline">Blog</Link>
        {' '}for more e-commerce guides.
      </p>

      <div className="not-prose glass p-6 rounded-xl mt-8 text-center">
        <Calculator className="h-10 w-10 text-desert-primary mx-auto mb-3" />
        <h3 className="text-white text-lg font-bold mb-2">Calculate Your True E-commerce Profit</h3>
        <p className="text-gray-400 text-sm mb-4">Free — includes all hidden costs</p>
        <Link href="/salla-profit-calculator" className="inline-flex items-center gap-2 rounded-xl bg-desert-primary px-8 py-3 text-sm font-bold text-white transition-all hover:bg-desert-primary-dim">
          <Calculator className="h-4 w-4" />
          Use Free Profit Calculator
        </Link>
      </div>
    </article>
  )
}

function ArContent() {
  return (
    <article className="prose prose-invert max-w-none prose-headings:text-desert-primary prose-a:text-desert-primary prose-strong:text-white prose-li:text-gray-300" dir="rtl">
      <h1>الدليل الكامل لحساب الأرباح الحقيقية في سلة وزاد في السعودية 2026</h1>

      <div className="not-prose glass p-6 rounded-xl mb-8">
        <p className="text-gray-300 text-lg leading-relaxed">
          طفرة التجارة الإلكترونية في السعودية لا يمكن إنكارها. مع منصات مثل سلة وزار التي تجعل بدء متجر إلكتروني أسهل من أي وقت مضى، أطلق آلاف التجار متاجرهم في السنوات القليلة الماضية. لكن هناك حقيقة قاسية يكتشفها الكثيرون بعد أشهر قليلة من التشغيل: المبيعات الإجمالية والأرباح الصافية رقمان مختلفان تماماً.
        </p>
        <p className="text-gray-300 text-lg leading-relaxed mt-4">
          بين رسوم اشتراك المنصة ورسوم بوابات الدفع وتكاليف الشحن وخسائر الدفع عند الاستلام وضريبة القيمة المضافة 15%، يمكن أن يكون هامش الربح الحقيقي أقل بكثير مما تتوقع. هذا الدليل يشرح بالتفصيل <strong>كل تكلفة تأكل من أرباح متجرك الإلكتروني</strong>.
        </p>
        <p className="text-gray-300 text-lg leading-relaxed mt-4">
          استخدم{' '}
          <Link href="/salla-profit-calculator" className="text-desert-primary font-bold underline">
            حاسبة أرباح سلة/زد
          </Link>{' '}
          المجانية لتقدير أرباحك بدقة.
        </p>
      </div>

      <h2>رسوم اشتراك سلة وزاد (2026)</h2>

      <div className="not-prose glass p-5 rounded-xl mb-6">
        <h3 className="text-desert-primary font-semibold mb-2">خطط سلة</h3>
        <div className="bg-[#0A0E1A] p-4 rounded-lg text-gray-300 text-sm space-y-1 font-mono">
          <p><strong>الأساسية:</strong> ~259 ريال/شهر — حتى 250 منتجاً</p>
          <p><strong>بلس:</strong> ~459 ريال/شهر — حتى 1,000 منتج</p>
          <p><strong>برو:</strong> ~999 ريال/شهر — منتجات غير محدودة</p>
        </div>
      </div>

      <div className="not-prose glass p-5 rounded-xl mb-6">
        <h3 className="text-desert-primary font-semibold mb-2">خطط زد</h3>
        <div className="bg-[#0A0E1A] p-4 rounded-lg text-gray-300 text-sm space-y-1 font-mono">
          <p><strong>ستارت أب:</strong> ~299 ريال/شهر + 2% عمولة</p>
          <p><strong>غروث:</strong> ~599 ريال/شهر + 1% عمولة</p>
          <p><strong>إنتربرايز:</strong> سعر مخصص — 0% عمولة عادة</p>
        </div>
      </div>

      <h2>التكاليف الخفية للتجارة الإلكترونية في السعودية</h2>

      <div className="not-prose glass p-5 rounded-xl mb-6">
        <p className="text-gray-300 text-sm"><strong>رسوم بوابات الدفع:</strong> مدى 1.5%، فيزا/ماستركارد 2.0-2.5%، أمريكان إكسبريس حتى 2.8% + 1 ريال لكل معاملة.</p>
        <p className="text-gray-300 text-sm mt-2"><strong>الدفع عند الاستلام:</strong> رسوم معالجة إضافية 1-2%، نسبة إرجاع 30-50% مقابل 5-10% للمدفوع مسبقاً، وتكاليف شحن ذهاب وإياب.</p>
        <p className="text-gray-300 text-sm mt-2"><strong>الشحن:</strong> 18-35 ريال للطلبية العادية، 2-5 ريال إضافية ل COD، الشحن السريع 35-60 ريال.</p>
        <p className="text-gray-300 text-sm mt-2"><strong>ضريبة القيمة المضافة:</strong> 15% على سعر المنتج ورسوم المنصة وبوابة الدفع والشحن.</p>
      </div>

      <h2>معادلة حساب صافي الربح الحقيقي</h2>
      <div className="not-prose glass p-5 rounded-xl mb-6">
        <div className="bg-[#0A0E1A] p-4 rounded-lg text-gray-300 text-sm font-mono">
          <p className="text-desert-primary font-bold">صافي الربح = سعر البيع − تكلفة المنتج − الشحن − رسوم بوابة الدفع − رسوم المنصة − ضريبة القيمة المضافة − خسائر الإرجاع</p>
        </div>
      </div>

      <h2>أمثلة عملية</h2>

      <div className="not-prose glass p-5 rounded-xl mb-6">
        <h3 className="text-white font-semibold mb-3">مثال 1: منتج أزياء عبر مدى (نسبة إرجاع منخفضة)</h3>
        <div className="bg-[#0A0E1A] p-4 rounded-lg text-gray-300 text-sm space-y-1 font-mono">
          <p>سعر البيع: 200 ريال — صافي الربح: 53.27 ريال (26.6%)</p>
        </div>
      </div>

      <div className="not-prose glass p-5 rounded-xl mb-6">
        <h3 className="text-white font-semibold mb-3">مثال 2: منتج إلكترونيات عبر COD (نسبة إرجاع عالية)</h3>
        <div className="bg-[#0A0E1A] p-4 rounded-lg text-gray-300 text-sm space-y-1 font-mono">
          <p>سعر البيع: 500 ريال — صافي الربح: 6.58 ريال (1.3%)</p>
          <p className="text-yellow-400">COD مع نسبة إرجاع عالية يكاد يلغي الربح!</p>
        </div>
      </div>

      <h2>استراتيجيات تعظيم أرباح التجارة الإلكترونية</h2>
      <div className="not-prose glass p-5 rounded-xl mb-6">
        <ul className="space-y-2 text-gray-300">
          <li><TrendingUp className="h-4 w-4 text-desert-primary inline" /> تقليل مرتجعات COD عبر تأكيد واتساب والاتصال بالعميل</li>
          <li><TrendingUp className="h-4 w-4 text-desert-primary inline" /> التفاوض على أسعار الشحن مع مقدمي الخدمات</li>
          <li><TrendingUp className="h-4 w-4 text-desert-primary inline" /> استخدام خدمات اشتر الآن وادفع لاحقاً (تمارا، تابي)</li>
          <li><TrendingUp className="h-4 w-4 text-desert-primary inline" /> تحسين مزيج المنتجات والتركيز على الفئات الأكثر ربحية</li>
        </ul>
      </div>

      <h2>حاسبة أرباح سلة/زد من Sauditoolhub</h2>
      <div className="not-prose glass p-6 rounded-xl mb-8">
        <Link href="/salla-profit-calculator" className="inline-flex items-center gap-2 rounded-xl bg-desert-primary px-8 py-3 text-sm font-bold text-white transition-all hover:bg-desert-primary-dim">
          <Calculator className="h-4 w-4" />
          احسب أرباحك الآن
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
      <p>
        إدارة متجر إلكتروني مربح في السعودية تتطلب فهم كل تكلفة تؤثر على هامش الربح. استخدم{' '}
        <Link href="/salla-profit-calculator" className="text-desert-primary font-bold underline">حاسبة أرباح سلة/زد</Link>
        {' '}و{' '}
        <Link href="/zatca-vat-calculator" className="text-desert-primary font-bold underline">حاسبة ضريبة القيمة المضافة</Link>
        {' '}و{' '}
        <Link href="/cr-cost-estimator" className="text-desert-primary font-bold underline">مقدر تكاليف السجل التجاري</Link>
        . زوروا{' '}
        <Link href="/blog" className="text-desert-primary font-bold underline">المدونة</Link>.
      </p>

      <div className="not-prose glass p-6 rounded-xl mt-8 text-center">
        <Calculator className="h-10 w-10 text-desert-primary mx-auto mb-3" />
        <h3 className="text-white text-lg font-bold mb-2">احسب أرباح متجرك الإلكتروني</h3>
        <p className="text-gray-400 text-sm mb-4">مجاني — يشمل جميع التكاليف الخفية</p>
        <Link href="/salla-profit-calculator" className="inline-flex items-center gap-2 rounded-xl bg-desert-primary px-8 py-3 text-sm font-bold text-white transition-all hover:bg-desert-primary-dim">
          <Calculator className="h-4 w-4" />
          استخدم الحاسبة المجانية
        </Link>
      </div>
    </article>
  )
}

function UrContent() {
  return (
    <article className="prose prose-invert max-w-none prose-headings:text-desert-primary prose-a:text-desert-primary prose-strong:text-white prose-li:text-gray-300" dir="rtl">
      <h1>سعودی عرب میں سلا اور زد پر حقیقی منافع کا حساب لگانے کا مکمل گائیڈ 2026</h1>

      <div className="not-prose glass p-6 rounded-xl mb-8">
        <p className="text-gray-300 text-lg leading-relaxed">
          سعودی عرب میں ای کامرس کا عروج ناقابل تردید ہے۔ سلا اور زد جیسے پلیٹ فارمز نے آن لائن اسٹور شروع کرنا پہلے سے کہیں آسان بنا دیا ہے۔ لیکن ایک تلخ حقیقت ہے جو بہت سے لوگ اپنے پہلے چند مہینوں کے بعد دریافت کرتے ہیں: مجموعی فروخت اور خالص منافع بہت مختلف ہیں۔
        </p>
        <p className="text-gray-300 text-lg leading-relaxed mt-4">
          یہ گائیڈ <strong>آپ کے ای کامرس منافع کو کم کرنے والے ہر اخراج</strong> کی وضاحت کرتا ہے۔
        </p>
        <p className="text-gray-300 text-lg leading-relaxed mt-4">
          ہمارا مفت{' '}
          <Link href="/salla-profit-calculator" className="text-desert-primary font-bold underline">
            Salla/Zid Profit Calculator
          </Link>{' '}
          استعمال کریں۔
        </p>
      </div>

      <h2>سلا اور زد کی سبسکرپشن فیس (2026)</h2>
      <div className="not-prose glass p-5 rounded-xl mb-6">
        <div className="bg-[#0A0E1A] p-4 rounded-lg text-gray-300 text-sm space-y-1 font-mono">
          <p><strong>Salla:</strong> بنیادی 259 SAR/ماہ، پلس 459 SAR/ماہ، پرو 999 SAR/ماہ</p>
          <p><strong>Zid:</strong> سٹارٹ اپ 299 SAR/ماہ + 2%، گروتھ 599 SAR/ماہ + 1%</p>
        </div>
      </div>

      <h2>خالص منافع کا فارمولا</h2>
      <div className="not-prose glass p-5 rounded-xl mb-6">
        <div className="bg-[#0A0E1A] p-4 rounded-lg text-gray-300 text-sm font-mono">
          <p className="text-desert-primary">خالص منافع = فروخت قیمت − (پروڈکٹ لاگت + شپنگ + پیمنٹ گیٹ وے + پلیٹ فارم + VAT + واپسی نقصان)</p>
        </div>
      </div>

      <h2>Sauditoolhub Salla/Zid Profit Calculator</h2>
      <div className="not-prose glass p-6 rounded-xl mb-8">
        <Link href="/salla-profit-calculator" className="inline-flex items-center gap-2 rounded-xl bg-desert-primary px-8 py-3 text-sm font-bold text-white transition-all hover:bg-desert-primary-dim">
          <Calculator className="h-4 w-4" />
          منافع کا حساب لگائیں
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
      <p>
        {' '}
        <Link href="/salla-profit-calculator" className="text-desert-primary font-bold underline">Profit Calculator</Link>
        {' '}استعمال کریں۔{' '}
        <Link href="/zatca-vat-calculator" className="text-desert-primary font-bold underline">VAT Calculator</Link>
        {' '}اور{' '}
        <Link href="/cr-cost-estimator" className="text-desert-primary font-bold underline">CR Cost Estimator</Link>
        {' '}بھی دیکھیں۔{' '}
        <Link href="/blog" className="text-desert-primary font-bold underline">بلاگ</Link> پر مزید۔
      </p>

      <div className="not-prose glass p-6 rounded-xl mt-8 text-center">
        <Calculator className="h-10 w-10 text-desert-primary mx-auto mb-3" />
        <h3 className="text-white text-lg font-bold mb-2">اپنا منافع چیک کریں</h3>
        <p className="text-gray-400 text-sm mb-4">مفت — تمام پوشیدہ اخراجات شامل</p>
        <Link href="/salla-profit-calculator" className="inline-flex items-center gap-2 rounded-xl bg-desert-primary px-8 py-3 text-sm font-bold text-white transition-all hover:bg-desert-primary-dim">
          <Calculator className="h-4 w-4" />
          مفت کیلکولیٹر استعمال کریں
        </Link>
      </div>
    </article>
  )
}

function TlContent() {
  return (
    <article className="prose prose-invert max-w-none prose-headings:text-desert-primary prose-a:text-desert-primary prose-strong:text-white prose-li:text-gray-300">
      <h1>Kumpletong Gabay sa Pagkalkula ng Tunay na Kita sa Salla at Zid sa Saudi Arabia 2026</h1>

      <div className="not-prose glass p-6 rounded-xl mb-8">
        <p className="text-gray-300 text-lg leading-relaxed">
          Ang e-commerce boom sa Saudi Arabia ay hindi maikakaila. Sa mga platform tulad ng Salla at Zid, libu-libong negosyante ang naglunsad ng mga online store. Ngunit may malupit na katotohanan na natutuklasan ng marami: ang gross sales at net profit ay magkaibang numero.
        </p>
        <p className="text-gray-300 text-lg leading-relaxed mt-4">
          Sinasaklaw ng gabay na ito ang <strong>bawat gastos na pumapatak sa iyong e-commerce profit</strong>.
        </p>
        <p className="text-gray-300 text-lg leading-relaxed mt-4">
          Gamitin ang aming libreng{' '}
          <Link href="/salla-profit-calculator" className="text-desert-primary font-bold underline">
            Salla/Zid Profit Calculator
          </Link>.
        </p>
      </div>

      <h2>Mga Subscription Fee ng Salla at Zid (2026)</h2>
      <div className="not-prose glass p-5 rounded-xl mb-6">
        <div className="bg-[#0A0E1A] p-4 rounded-lg text-gray-300 text-sm space-y-1 font-mono">
          <p><strong>Salla:</strong> Basic 259 SAR/m, Plus 459 SAR/m, Pro 999 SAR/m</p>
          <p><strong>Zid:</strong> Startup 299 SAR/m + 2%, Growth 599 SAR/m + 1%</p>
        </div>
      </div>

      <h2>Sauditoolhub Salla/Zid Profit Calculator</h2>
      <div className="not-prose glass p-6 rounded-xl mb-8">
        <Link href="/salla-profit-calculator" className="inline-flex items-center gap-2 rounded-xl bg-desert-primary px-8 py-3 text-sm font-bold text-white transition-all hover:bg-desert-primary-dim">
          <Calculator className="h-4 w-4" />
          Kalkulahin ang Kita Ngayon
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
      <p>
        Gamitin ang{' '}
        <Link href="/salla-profit-calculator" className="text-desert-primary font-bold underline">Profit Calculator</Link>
        {' '}ng Sauditoolhub. Tingnan din ang{' '}
        <Link href="/zatca-vat-calculator" className="text-desert-primary font-bold underline">VAT Calculator</Link>
        {' '}at{' '}
        <Link href="/cr-cost-estimator" className="text-desert-primary font-bold underline">CR Cost Estimator</Link>
        . Bisitahin ang aming{' '}
        <Link href="/blog" className="text-desert-primary font-bold underline">Blog</Link>.
      </p>

      <div className="not-prose glass p-6 rounded-xl mt-8 text-center">
        <Calculator className="h-10 w-10 text-desert-primary mx-auto mb-3" />
        <h3 className="text-white text-lg font-bold mb-2">Kalkulahin ang Iyong Tunay na Kita</h3>
        <p className="text-gray-400 text-sm mb-4">Libre — kasama ang lahat ng hidden costs</p>
        <Link href="/salla-profit-calculator" className="inline-flex items-center gap-2 rounded-xl bg-desert-primary px-8 py-3 text-sm font-bold text-white transition-all hover:bg-desert-primary-dim">
          <Calculator className="h-4 w-4" />
          Gamitin ang Libreng Calculator
        </Link>
      </div>
    </article>
  )
}

function BnContent() {
  return (
    <article className="prose prose-invert max-w-none prose-headings:text-desert-primary prose-a:text-desert-primary prose-strong:text-white prose-li:text-gray-300">
      <h1>সৌদি আরবে Salla ও Zid-এ প্রকৃত লাভ গণনার সম্পূর্ণ গাইড 2026</h1>

      <div className="not-prose glass p-6 rounded-xl mb-8">
        <p className="text-gray-300 text-lg leading-relaxed">
          সৌদি আরবে ই-কমার্সের বুম অনস্বীকার্য। Salla এবং Zid-এর মতো প্ল্যাটফর্মগুলি অনলাইন স্টোর শুরু করা আগের চেয়ে সহজ করে দিয়েছে। কিন্তু একটি কঠোর বাস্তবতা রয়েছে যা অনেকে তাদের প্রথম কয়েক মাস অপারেশনের পর আবিষ্কার করে: মোট বিক্রয় এবং নিট মুনাফা খুব আলাদা সংখ্যা।
        </p>
        <p className="text-gray-300 text-lg leading-relaxed mt-4">
          এই গাইডটি <strong>আপনার ই-কমার্স মুনাফা কমিয়ে দেয় এমন প্রতিটি খরচ</strong> ভেঙে ব্যাখ্যা করে।
        </p>
        <p className="text-gray-300 text-lg leading-relaxed mt-4">
          আমাদের বিনামূল্যের{' '}
          <Link href="/salla-profit-calculator" className="text-desert-primary font-bold underline">
            Salla/Zid Profit Calculator
          </Link>{' '}
          ব্যবহার করুন।
        </p>
      </div>

      <h2>Salla ও Zid-এর সাবস্ক্রিপশন ফি (2026)</h2>
      <div className="not-prose glass p-5 rounded-xl mb-6">
        <div className="bg-[#0A0E1A] p-4 rounded-lg text-gray-300 text-sm space-y-1 font-mono">
          <p><strong>Salla:</strong> বেসিক ২৫৯ SAR/ম, প্লাস ৪৫৯ SAR/ম, প্রো ৯৯৯ SAR/ম</p>
          <p><strong>Zid:</strong> স্টার্টআপ ২৯৯ SAR/ম + ২%, গ্রোথ ৫৯৯ SAR/ম + ১%</p>
        </div>
      </div>

      <h2>Sauditoolhub Salla/Zid Profit Calculator</h2>
      <div className="not-prose glass p-6 rounded-xl mb-8">
        <Link href="/salla-profit-calculator" className="inline-flex items-center gap-2 rounded-xl bg-desert-primary px-8 py-3 text-sm font-bold text-white transition-all hover:bg-desert-primary-dim">
          <Calculator className="h-4 w-4" />
          এখনই মুনাফা গণনা করুন
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
      <p>
        {' '}
        <Link href="/salla-profit-calculator" className="text-desert-primary font-bold underline">Profit Calculator</Link>
        {' '}ব্যবহার করুন।{' '}
        <Link href="/zatca-vat-calculator" className="text-desert-primary font-bold underline">VAT Calculator</Link>
        {' '}এবং{' '}
        <Link href="/cr-cost-estimator" className="text-desert-primary font-bold underline">CR Cost Estimator</Link>
        {' '}ও দেখুন। আমাদের{' '}
        <Link href="/blog" className="text-desert-primary font-bold underline">ব্লগ</Link> দেখুন।
      </p>

      <div className="not-prose glass p-6 rounded-xl mt-8 text-center">
        <Calculator className="h-10 w-10 text-desert-primary mx-auto mb-3" />
        <h3 className="text-white text-lg font-bold mb-2">আপনার প্রকৃত মুনাফা গণনা করুন</h3>
        <p className="text-gray-400 text-sm mb-4">বিনামূল্যে — সব লুকানো খরচ সহ</p>
        <Link href="/salla-profit-calculator" className="inline-flex items-center gap-2 rounded-xl bg-desert-primary px-8 py-3 text-sm font-bold text-white transition-all hover:bg-desert-primary-dim">
          <Calculator className="h-4 w-4" />
          বিনামূল্যে ক্যালকুলেটর ব্যবহার করুন
        </Link>
      </div>
    </article>
  )
}

export default async function SallaZidProfitGuidePage({ params }: Props) {
  const { locale } = await params
  const isAr = locale === 'ar'
  const isUr = locale === 'ur'
  const isTl = locale === 'tl'
  const isBn = locale === 'bn'
  const isDefault = locale === 'en'
  const pageUrl = isDefault ? `${baseUrl}/guide/salla-zid-ecommerce-profit-calculator-saudi-arabia-2026` : `${baseUrl}/${locale}/guide/salla-zid-ecommerce-profit-calculator-saudi-arabia-2026`

  const schema = isAr ? schemaAr : isUr ? schemaUr : isTl ? schemaTl : isBn ? schemaBn : articleSchemaEn
  const faqItems = isAr ? faqsAr : isUr ? faqsUr : isTl ? faqsTl : isBn ? faqsBn : faqsEn

  return (
    <>
      <ArticleJsonLd
        headline={schema.headline as string}
        description={schema.description as string}
        datePublished="2026-01-01"
        dateModified="2026-07-01"
      />
      <BreadcrumbJsonLd
        items={[
          { name: isAr ? 'الرئيسية' : isUr ? 'ہوم' : isTl ? 'Bahay' : isBn ? 'হোম' : 'Home', url: baseUrl },
          { name: isAr ? 'أدلة التجارة الإلكترونية' : isUr ? 'ای کامرس گائیڈز' : isTl ? 'Gabay sa E-commerce' : isBn ? 'ই-কমার্স গাইড' : 'E-commerce Guides', url: `${baseUrl}/${isDefault ? '' : locale + '/'}ecommerce-tools` },
          { name: isAr ? 'دليل أرباح سلة وزاد' : isUr ? 'سلا اور زد منافع گائیڈ' : isTl ? 'Gabay sa Kita sa Salla/Zid' : isBn ? 'Salla/Zid মুনাফা গাইড' : 'Salla/Zid Profit Guide', url: pageUrl },
        ]}
      />
      <FAQJsonLd items={faqItems} />

      <div className="relative z-10">
        <section className="px-4 py-20">
          <div className="mx-auto max-w-6xl">
            {isAr ? <ArContent /> : isUr ? <UrContent /> : isTl ? <TlContent /> : isBn ? <BnContent /> : <EnContent />}
          </div>
        </section>
      </div>
    </>
  )
}
