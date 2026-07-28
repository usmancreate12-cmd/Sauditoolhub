import type { Metadata } from 'next'
import Link from 'next/link'
import { Calculator, DollarSign, FileText, AlertTriangle, CheckCircle, TrendingUp, Users, Shield, Briefcase, CreditCard } from 'lucide-react'

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
    ? 'الدليل الكامل للعمل الحر والضرائب في السعودية 2026 - ضريبة المستقلين | Sauditoolhub'
    : isUr
    ? 'سعودی عرب میں فری لانسنگ انکم اور ٹیکس کا مکمل گائیڈ 2026 | Sauditoolhub'
    : isTl
    ? 'Kumpletong Gabay sa Freelance Income at Buwis sa Saudi Arabia 2026 | Sauditoolhub'
    : isBn
    ? 'সৌদি আরবে ফ্রিল্যান্স আয় ও কর সম্পূর্ণ গাইড 2026 | Sauditoolhub'
    : 'Complete Guide to Freelance Income & Tax Rules in Saudi Arabia 2026 | Sauditoolhub'

  const description = isAr
    ? 'دليل كامل للعمل الحر والضرائب في السعودية 2026. تعرف على شهادة وثق، رسوم المنصات، ضريبة القيمة المضافة للمستقلين، وكيفية حساب صافي دخلك الحقيقي.'
    : isUr
    ? 'سعودی عرب میں فری لانسنگ اور ٹیکس کا مکمل گائیڈ 2026۔ واتق سرٹیفکیٹ، پلیٹ فارم فیس، زیڈ ٹی سی اے ٹیکس، اور خالص آمدنی کا حساب۔'
    : isTl
    ? 'Kumpletong gabay sa freelance income at buwis sa Saudi Arabia 2026. Alamin ang Watheq certificate, platform fees, ZATCA rules, at kung paano kalkulahin ang iyong netong kita.'
    : isBn
    ? 'সৌদি আরবে ফ্রিল্যান্স আয় ও করের সম্পূর্ণ গাইড 2026। ওয়াথেক সার্টিফিকেট, প্ল্যাটফর্ম ফি, ZATCA নিয়ম এবং নিট আয় গণনার পদ্ধতি।'
    : 'Complete guide to freelance income, taxes, and legal rules in Saudi Arabia 2026. Covers Watheq certificate, platform fees (Upwork, Fiverr, Mostaql), ZATCA VAT rules, and how to calculate your true net freelance income.'

  return {
    title,
    description,
    alternates: {
      canonical: isDefault ? `${baseUrl}/guide/freelance-income-calculator-saudi-arabia-2026` : `${baseUrl}/${locale}/guide/freelance-income-calculator-saudi-arabia-2026`,
      languages: {
        en: `${baseUrl}/guide/freelance-income-calculator-saudi-arabia-2026`,
        ar: `${baseUrl}/ar/guide/freelance-income-calculator-saudi-arabia-2026`,
        ur: `${baseUrl}/ur/guide/freelance-income-calculator-saudi-arabia-2026`,
        tl: `${baseUrl}/tl/guide/freelance-income-calculator-saudi-arabia-2026`,
        bn: `${baseUrl}/bn/guide/freelance-income-calculator-saudi-arabia-2026`,
      },
    },
    openGraph: {
      title,
      description,
      url: isDefault ? `${baseUrl}/guide/freelance-income-calculator-saudi-arabia-2026` : `${baseUrl}/${locale}/guide/freelance-income-calculator-saudi-arabia-2026`,
      siteName: 'Sauditoolhub',
      locale: isAr ? 'ar_SA' : isUr ? 'ur_PK' : isTl ? 'tl_PH' : isBn ? 'bn_BD' : 'en_US',
      type: 'article',
      publishedTime: '2026-01-15',
      modifiedTime: '2026-07-01',
    },
    twitter: { card: 'summary_large_image', title, description },
    robots: { index: true, follow: true },
  }
}

const articleSchemaEn = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'The Complete Guide to Freelance Income & Tax Rules in Saudi Arabia 2026',
  description: 'Everything you need to know about freelancing, taxes, and net income calculation in Saudi Arabia. Covers Watheq certificate, Upwork/Fiverr/Mostaql fees, ZATCA VAT rules for freelancers, and step-by-step net income calculation.',
  author: { '@type': 'Person', name: 'Sauditoolhub Team' },
  publisher: { '@type': 'Organization', name: 'Sauditoolhub', logo: { '@type': 'ImageObject', url: `${baseUrl}/logo.png` } },
  datePublished: '2026-01-15',
  dateModified: '2026-07-01',
}

const schemaAr = {
  ...articleSchemaEn,
  headline: 'الدليل الكامل للعمل الحر والضرائب في السعودية 2026',
  description: 'كل ما تحتاج معرفته عن العمل الحر والضرائب في السعودية. يشرح شهادة وثق، رسوم منصات العمل الحر، قواعد ضريبة القيمة المضافة، وكيفية حساب صافي الدخل الحقيقي للمستقلين.',
}

const schemaUr = {
  ...articleSchemaEn,
  headline: 'سعودی عرب میں فری لانسنگ انکم اور ٹیکس کا مکمل گائیڈ 2026',
  description: 'سعودی عرب میں فری لانسنگ، ٹیکس اور خالص آمدنی کے بارے میں ہر وہ چیز جو آپ کو جاننی چاہیے۔ واتق سرٹیفکیٹ، اپ ورک/فایور/مستقل فیس، ZATCA VAT قواعد، اور خالص آمدنی کا حساب۔',
}

const schemaTl = {
  ...articleSchemaEn,
  headline: 'Kumpletong Gabay sa Freelance Income at Buwis sa Saudi Arabia 2026',
  description: 'Lahat ng kailangan mong malaman tungkol sa freelancing, buwis, at net income calculation sa Saudi Arabia. Saklaw ang Watheq certificate, Upwork/Fiverr/Mostaql fees, ZATCA VAT rules para sa freelancers.',
}

const schemaBn = {
  ...articleSchemaEn,
  headline: 'সৌদি আরবে ফ্রিল্যান্স আয় ও কর সম্পূর্ণ গাইড 2026',
  description: 'সৌদি আরবে ফ্রিল্যান্সিং, কর এবং নিট আয় গণনা সম্পর্কে আপনার যা কিছু জানা দরকার। ওয়াথেক সার্টিফিকেট, আপওয়ার্ক/ফাইভার/মোস্তাকল ফি, ZATCA VAT নিয়ম এবং নিট আয় গণনা।',
}

const faqsEn = [
  { question: 'Do I need a Watheq certificate to freelance in Saudi Arabia in 2026?', answer: 'Yes, the Watheq (freelance) certificate is required for individuals who want to legally work as freelancers in Saudi Arabia. Issued by the Ministry of Human Resources and Social Development (MHRSD) through the freelance platform at freelance.sa, it serves as your official authorization to offer freelance services. Without it, you are technically working illegally. The certificate costs approximately 1,000-2,000 SAR depending on your professional category and is valid for one year.' },
  { question: 'What is the difference between platform fees and government taxes for freelancers?', answer: 'Platform fees are charges by freelance marketplaces (Upwork takes 10-20%, Fiverr takes 20%, Mostaql takes 10%, Khamsat takes 20%) for connecting you with clients and processing payments. Government taxes are imposed by ZATCA and include income tax for non-Saudi freelancers and VAT if your annual income exceeds the threshold. Platform fees reduce your gross income before taxes, but the fees themselves are NOT tax deductible in all cases.' },
  { question: 'When do I need to register for VAT as a freelancer in Saudi Arabia?', answer: 'Mandatory VAT registration is required when your annual taxable supplies and imports exceed 375,000 SAR. Voluntary registration is possible from 187,500 SAR. If you work with Saudi clients, your VAT threshold includes all local income. If you work exclusively with international clients (exporting services), your services are generally zero-rated for VAT, which means no VAT needs to be charged, but you may still want to register voluntarily to recover VAT on business expenses.' },
  { question: 'Do expat freelancers pay income tax in Saudi Arabia?', answer: 'Saudi Arabia does not impose personal income tax on salaries or freelance income earned within the kingdom by expats as of 2026. However, if you are a non-Saudi freelancer working through a registered entity or commercial registration, you may be subject to corporate income tax on your business profits. Freelancers operating under a Watheq certificate (without CR) are treated as individuals and generally not subject to income tax, though this area of regulation continues to evolve with Vision 2030 reforms.' },
  { question: 'How much does Upwork actually charge freelancers in 2026?', answer: 'Upwork uses a sliding fee structure: 20% for the first $500 billed with each client, then 5% for lifetime billings between $500.01 and $10,000, and 5% for billings over $10,000 (the 5% rate applies to all new contracts started after the fee change). For freelancers with an Upwork Freelancer Plus membership ($14.99/month), you get a reduced sliding fee and more Connects per month. Always factor these fees into your hourly rate calculations.' },
  { question: 'What expenses can I deduct as a freelancer in Saudi Arabia?', answer: 'Common deductible expenses include: internet and phone bills (proportion of business use), software subscriptions (Adobe Creative Cloud, Microsoft 365, project management tools), co-working space or home office costs, website hosting and domain fees, online advertising and marketing costs, professional development courses and certifications, accounting and legal fees, bank transfer and payment processing fees, and equipment depreciation (laptop, camera, monitor). Keep all invoices and receipts for at least 6 years.' },
  { question: 'How do I calculate my true net freelance income?', answer: 'Formula: True Net Income = Gross Income - Platform Fees - Business Expenses - VAT (if registered). Example: If you earn 20,000 SAR on Upwork, subtract 20% platform fee (4,000 SAR) = 16,000 SAR. Subtract business expenses (2,000 SAR) = 14,000 SAR. If VAT-registered and working with Saudi clients, subtract 15% VAT output (2,100 SAR). Net = approximately 11,900 SAR. Use the Sauditoolhub Freelance Income Calculator at /freelance-income-calculator for instant calculation.' },
  { question: 'What is the Mostaql platform fee for freelancers?', answer: 'Mostaql charges a 10% platform fee on all project payments, which is lower than Upwork and Fiverr. The client pays an additional service fee. Mostaql is the leading Arabic-language freelance marketplace and is particularly popular for Arabic content writing, translation, graphic design, and programming projects. Mostaql also offers Escrow payment protection and milestone-based payment releases.' },
  { question: 'Do I need a Commercial Registration (CR) to freelance in Saudi Arabia?', answer: 'No, a Commercial Registration is not required if you hold a valid Watheq freelance certificate. The Watheq certificate is specifically designed to allow individuals to freelance without the need for a full CR. However, if your annual freelance income exceeds 375,000 SAR or you want to hire employees, you may need to consider registering a business entity. The Watheq certificate covers most professional service categories including IT, design, writing, consulting, and education.' },
  { question: 'How can I maximize my freelance income after taxes and fees?', answer: 'Strategies include: (1) Build long-term client relationships to move past the 20% Upwork fee tier, (2) Use Mostaql for Arabic-market clients at only 10%, (3) Register for VAT voluntarily to reclaim VAT on business purchases, (4) Track all deductible expenses meticulously, (5) Consider raising rates to offset platform fees, (6) Diversify across multiple platforms to reduce dependency, (7) Build a direct client base outside platforms to eliminate platform fees entirely, (8) Use the Sauditoolhub Freelance Income Calculator at /freelance-income-calculator to model different scenarios.' },
]

const faqsAr = [
  { question: 'هل أحتاج إلى شهادة وثق للعمل الحر في السعودية 2026؟', answer: 'نعم، شهادة وثق (العمل الحر) مطلوبة للأفراد الذين يرغبون في العمل كمستقلين بشكل قانوني في السعودية. تصدرها وزارة الموارد البشرية والتنمية الاجتماعية عبر منصة freelance.sa. تكلفة الشهادة حوالي 1,000-2,000 ريال حسب التصنيف المهني وهي صالحة لمدة سنة.' },
  { question: 'ما الفرق بين رسوم المنصات والضرائب الحكومية للمستقلين؟', answer: 'رسوم المنصات هي رسوم تفرضها أسواق العمل الحر (أب ورك 10-20%، فايفر 20%، مستقل 10%، خمسات 20%) لتوصيلك بالعملاء. الضرائب الحكومية تفرضها هيئة الزكاة والضريبة والجمارك وتشمل ضريبة الدخل للغير سعوديين وضريبة القيمة المضافة إذا تجاوز الدخل السنوي الحد المطلوب.' },
  { question: 'متى يجب على المستقل التسجيل في ضريبة القيمة المضافة؟', answer: 'التسجيل الإلزامي في ضريبة القيمة المضافة مطلوب عندما تتجاوز الإمدادات الخاضعة للضريبة والواردات 375,000 ريال سنوياً. التسجيل الطوعي ممكن من 187,500 ريال. إذا كنت تعمل مع عملاء دوليين فقط، فخدماتك عادة ما تكون خاضعة لنسبة صفر بالمئة لضريبة القيمة المضافة.' },
  { question: 'هل يدفع المستقلون الوافدون ضريبة دخل في السعودية؟', answer: 'السعودية لا تفرض ضريبة دخل شخصية على الرواتب أو دخل العمل الحر للأجانب داخل المملكة حتى 2026. لكن إذا كنت مستقلاً غير سعودي وتعمل من خلال كيان مسجل، فقد تخضع لضريبة دخل الشركات على أرباحك.' },
  { question: 'كم تبلغ رسوم منصة مستقل؟', answer: 'تبلغ رسوم منصة مستقل 10% من قيمة المشروع، وهي أقل من أب ورك وفايفر. يدفع العميل رسوم خدمة إضافية. مستقل هي المنصة الرائدة باللغة العربية للعمل الحر، وتتميز بخدمة الدفع الآمن ودفعات مرحلية.' },
  { question: 'هل أحتاج إلى سجل تجاري للعمل الحر في السعودية؟', answer: 'لا، ليس مطلوباً سجل تجاري إذا كنت تحمل شهادة وثق سارية المفعول. شهادة وثق مصممة خصيصاً للسماح للأفراد بالعمل الحر دون الحاجة إلى سجل تجاري كامل. لكن إذا تجاوز دخلك السنوي 375,000 ريال أو أردت توظيف موظفين، قد تحتاج إلى تسجيل كيان تجاري.' },
  { question: 'ما المصاريف التي يمكنني خصمها كمستقل في السعودية؟', answer: 'تشمل المصاريف القابلة للخصم: فواتير الإنترنت والهاتف (نسبة الاستخدام التجاري)، اشتراكات البرامج (أدوبي كريتف كلاود، مايكروسوفت 365)، مساحة العمل المشترك أو تكاليف المكتب المنزلي، استضافة النطاق والموقع، الإعلانات والتسويق، الدورات التدريبية والشهادات المهنية، الرسوم المحاسبية والقانونية، رسوم التحويل البنكي، واستهلاك المعدات (لابتوب، كاميرا). احتفظ بجميع الفواتير لمدة 6 سنوات على الأقل.' },
  { question: 'كيف أحسب صافي دخلي الحقيقي من العمل الحر؟', answer: 'المعادلة: صافي الدخل = الدخل الإجمالي - رسوم المنصة - المصاريف التشغيلية - ضريبة القيمة المضافة (إذا كنت مسجلاً). استخدم حاسبة دخل العمل الحر من Sauditoolhub على /freelance-income-calculator لحساب فوري.' },
  { question: 'ما هي ضريبة القيمة المضافة للمستقلين في السعودية؟', answer: 'ضريبة القيمة المضافة في السعودية هي 15% وتطبق على خدمات المستقلين للعملاء السعوديين. إذا كنت تعمل مع عميل في الخارج، فإن خدماتك عادة ما تكون خاضعة لنسبة صفر بالمئة. يجب عليك إصدار فواتير ضريبية إذا كنت مسجلاً في ضريبة القيمة المضافة.' },
  { question: 'كيف يمكنني زيادة صافي دخلي من العمل الحر بعد الضرائب والرسوم؟', answer: 'الاستراتيجيات تشمل: بناء علاقات طويلة الأمد لتقليل رسوم أب ورك، استخدام مستقل للعملاء العرب، التسجيل الطوعي في ضريبة القيمة المضافة لاسترداد الضريبة على المشتريات، تتبع المصاريف القابلة للخصم، رفع الأسعار لتعويض رسوم المنصات، التنويع عبر منصات متعددة، بناء قاعدة عملاء مباشرة، واستخدام حاسبة Sauditoolhub على /freelance-income-calculator.' },
]

const faqsUr = [
  { question: 'کیا مجھے سعودی عرب میں فری لانسنگ کے لیے واتق سرٹیفکیٹ چاہیے؟', answer: 'ہاں، سعودی عرب میں قانونی طور پر فری لانس کرنے کے لیے واتق (فری لانس) سرٹیفکیٹ ضروری ہے۔ یہ وزارت افرادی قوت اور سماجی ترقی کی طرف سے freelance.sa پلیٹ فارم کے ذریعے جاری کیا جاتا ہے۔ اس کی قیمت 1,000-2,000 SAR ہے اور یہ ایک سال کے لیے درست ہوتا ہے۔' },
  { question: 'فری لانسرز کے لیے پلیٹ فارم فیس اور سرکاری ٹیکس میں کیا فرق ہے؟', answer: 'پلیٹ فارم فیس وہ چارجز ہیں جو فری لانس مارکیٹ پلیس (Upwork 10-20%، Fiverr 20%، Mostaql 10%، Khamsat 20%) آپ سے لیتے ہیں۔ سرکاری ٹیکس ZATCA کی طرف سے لگائے جاتے ہیں اور ان میں غیر سعودی فری لانسرز کے لیے انکم ٹیکس اور VAT شامل ہے۔' },
  { question: 'فری لانسر کو VAT رجسٹریشن کب کروانی چاہیے؟', answer: 'لازمی VAT رجسٹریشن اس وقت ضروری ہے جب آپ کی سالانہ قابل ٹیکس سپلائیز اور امپورٹس 375,000 SAR سے تجاوز کریں۔ رضاکارانہ رجسٹریشن 187,500 SAR سے ممکن ہے۔ بین الاقوامی کلائنٹس کے ساتھ کام کرنے والوں کے لیے خدمات عام طور پر زیرو ریٹڈ ہوتی ہیں۔' },
  { question: 'کیا غیر سعودی فری لانسرز کو سعودی عرب میں انکم ٹیکس دینا ہوتا ہے؟', answer: 'سعودی عرب 2026 تک غیر ملکیوں کی تنخواہوں یا فری لانس انکم پر ذاتی انکم ٹیکس نہیں لگاتا۔ تاہم، اگر آپ رجسٹرڈ ادارے کے ذریعے کام کر رہے ہیں تو کارپوریٹ انکم ٹیکس لگ سکتا ہے۔' },
  { question: 'Mostaql پلیٹ فارم فیس کتنی ہے؟', answer: 'Mostaql تمام پروجیکٹ ادائیگیوں پر 10% پلیٹ فارم فیس لیتی ہے، جو Upwork اور Fiverr سے کم ہے۔ Mostaql عربی زبان کا سب سے بڑا فری لانس پلیٹ فارم ہے اور مواد نویسی، ترجمہ، گرافک ڈیزائن اور پروگرامنگ کے لیے مقبول ہے۔' },
  { question: 'کیا مجھے فری لانسنگ کے لیے کمرشل رجسٹریشن (CR) چاہیے؟', answer: 'نہیں، اگر آپ کے پاس درست واتق سرٹیفکیٹ ہے تو کمرشل رجسٹریشن کی ضرورت نہیں۔ واتق سرٹیفکیٹ خاص طور پر فری لانسنگ کے لیے ڈیزائن کیا گیا ہے۔ اگر آپ کی سالانہ آمدنی 375,000 SAR سے زیادہ ہے تو آپ کو کاروباری ادارہ رجسٹر کرنے پر غور کرنا چاہیے۔' },
  { question: 'فری لانسر کون سے اخراجات کاٹ سکتا ہے؟', answer: 'قابل کٹوتی اخراجات میں شامل ہیں: انٹرنیٹ اور فون بلز، سافٹ ویئر سبسکرپشنز، شریک کام کی جگہ یا ہوم آفس کے اخراجات، ویب سائٹ ہوسٹنگ، اشتہارات اور مارکیٹنگ، پیشہ ورانہ کورسز، اکاؤنٹنگ اور قانونی فیس، بینک ٹرانسفر فیس، اور آلات کی قیمت میں کمی۔ تمام رسیدیں کم از کم 6 سال رکھیں۔' },
  { question: 'فری لانسنگ سے خالص آمدنی کیسے حساب کروں؟', answer: 'فارمولا: خالص آمدنی = کل آمدنی - پلیٹ فارم فیس - کاروباری اخراجات - VAT (اگر رجسٹرڈ ہوں)۔ Sauditoolhub کا Freelance Income Calculator /freelance-income-calculator پر استعمال کریں۔' },
  { question: 'فری لانسرز کے لیے ZATCA VAT کیا ہے؟', answer: 'سعودی عرب میں VAT 15% ہے اور یہ سعودی کلائنٹس کو فراہم کردہ فری لانس سروسز پر لاگو ہوتا ہے۔ بیرون ملک کلائنٹس کے لیے خدمات زیرو ریٹڈ ہیں۔ VAT رجسٹرڈ فری لانسرز کو ٹیکس انوائس جاری کرنی ہوتی ہیں۔' },
  { question: 'فری لانسنگ سے ٹیکس اور فیس کے بعد خالص آمدنی کیسے بڑھاؤں؟', answer: 'مختلف پلیٹ فارمز پر کام کریں، طویل مدتی کلائنٹ تعلقات بنائیں، رضاکارانہ VAT رجسٹریشن کریں، قابل کٹوتی اخراجات ٹریک کریں، ریٹس بڑھائیں، اور Sauditoolhub کیلکولیٹر استعمال کریں۔' },
]

const faqsTl = [
  { question: 'Kailangan ko ba ng Watheq certificate para mag-freelance sa Saudi Arabia?', answer: 'Oo, kinakailangan ang Watheq (freelance) certificate para sa mga indibidwal na gustong legal na magtrabaho bilang freelancer sa Saudi Arabia. Ito ay inisyu ng Ministry of Human Resources and Social Development sa pamamagitan ng freelance.sa platform. Nagkakahalaga ito ng humigit-kumulang 1,000-2,000 SAR depende sa iyong professional category at valid ito ng isang taon.' },
  { question: 'Ano ang pagkakaiba ng platform fees at government taxes para sa freelancers?', answer: 'Ang platform fees ay singil ng freelance marketplaces (Upwork 10-20%, Fiverr 20%, Mostaql 10%, Khamsat 20%) para sa pagkonekta sa iyo sa mga kliyente. Ang government taxes ay ipinapataw ng ZATCA at kasama ang income tax para sa non-Saudi freelancers at VAT kung lumampas ang iyong taunang kita sa threshold.' },
  { question: 'Kailan kailangan mag-register para sa VAT bilang freelancer sa Saudi Arabia?', answer: 'Kinakailangan ang mandatoryong VAT registration kapag ang iyong taunang taxable supplies at imports ay lumampas sa 375,000 SAR. Posible ang voluntary registration mula 187,500 SAR. Kung nagtatrabaho ka sa mga international clients, ang iyong serbisyo ay karaniwang zero-rated para sa VAT.' },
  { question: 'Nagbabayad ba ng income tax ang expat freelancers sa Saudi Arabia?', answer: 'Ang Saudi Arabia ay hindi nagpapataw ng personal income tax sa mga suweldo o freelance income ng mga expats sa kaharian hanggang 2026. Gayunpaman, kung ikaw ay nagtatrabaho sa pamamagitan ng registered entity, maaari kang mapailalim sa corporate income tax.' },
  { question: 'Magkano ang Mostaql platform fee?', answer: 'Ang Mostaql ay naniningil ng 10% platform fee sa lahat ng project payments, na mas mababa kaysa sa Upwork at Fiverr. Ito ang nangungunang Arabic-language freelance marketplace na sikat para sa content writing, translation, graphic design, at programming.' },
  { question: 'Kailangan ko ba ng Commercial Registration (CR) para mag-freelance?', answer: 'Hindi, hindi kinakailangan ang Commercial Registration kung mayroon kang valid na Watheq certificate. Ang Watheq certificate ay dinisenyo para payagan ang mga indibidwal na mag-freelance nang walang CR. Kung ang iyong taunang kita ay lumampas sa 375,000 SAR, maaaring kailanganin mong magrehistro ng business entity.' },
  { question: 'Ano ang mga pwedeng ibawas na gastos bilang freelancer?', answer: 'Kasama sa mga deductible expenses ang: internet at phone bills, software subscriptions, co-working space o home office costs, website hosting, advertising at marketing, professional courses, accounting at legal fees, bank transfer fees, at equipment depreciation. Itago ang lahat ng resibo nang hindi bababa sa 6 na taon.' },
  { question: 'Paano ko makalkula ang aking totoong net freelance income?', answer: 'Formula: Net Income = Gross Income - Platform Fees - Business Expenses - VAT (kung registered). Gamitin ang Sauditoolhub Freelance Income Calculator sa /freelance-income-calculator para sa instant na pagkalkula.' },
  { question: 'Ano ang ZATCA VAT rules para sa freelancers?', answer: 'Ang VAT sa Saudi Arabia ay 15% at naaangkop sa freelance services na ibinibigay sa Saudi clients. Para sa international clients, ang serbisyo ay zero-rated. Ang VAT-registered freelancers ay kailangang mag-isyu ng tax invoices.' },
  { question: 'Paano ko mapapalaki ang aking net freelance income pagkatapos ng buwis at fees?', answer: 'Magnegosyo sa maraming platforms, bumuo ng long-term client relationships, mag-voluntary VAT registration, i-track ang deductible expenses, taasan ang rates, at gamitin ang Sauditoolhub calculator.' },
]

const faqsBn = [
  { question: 'সৌদি আরবে ফ্রিল্যান্স করার জন্য কি ওয়াথেক সার্টিফিকেট প্রয়োজন?', answer: 'হ্যাঁ, সৌদি আরবে আইনিভাবে ফ্রিল্যান্সার হিসেবে কাজ করার জন্য ওয়াথেক (ফ্রিল্যান্স) সার্টিফিকেট প্রয়োজন। এটি মানবসম্পদ ও সামাজিক উন্নয়ন মন্ত্রণালয় freelance.sa প্ল্যাটফর্মের মাধ্যমে ইস্যু করে। খরচ প্রায় ১,০০০-২,০০০ SAR এবং এটি এক বছরের জন্য বৈধ।' },
  { question: 'ফ্রিল্যান্সারদের জন্য প্ল্যাটফর্ম ফি এবং সরকারি করের মধ্যে পার্থক্য কী?', answer: 'প্ল্যাটফর্ম ফি হল ফ্রিল্যান্স মার্কেটপ্লেসগুলি (Upwork ১০-২০%, Fiverr ২০%, Mostaql ১০%, Khamsat ২০%) আপনাকে ক্লায়েন্টদের সাথে সংযুক্ত করার জন্য নেয়। সরকারি কর ZATCA আরোপ করে এবং এর মধ্যে আয়কর ও VAT অন্তর্ভুক্ত।' },
  { question: 'সৌদি আরবে ফ্রিল্যান্সার হিসেবে কখন VAT নিবন্ধন করতে হবে?', answer: 'বাধ্যতামূলক VAT নিবন্ধন প্রয়োজন যখন আপনার বার্ষিক করযোগ্য সরবরাহ এবং আমদানি ৩৭৫,০০০ SAR অতিক্রম করে। স্বেচ্ছাসেবী নিবন্ধন ১৮৭,৫০০ SAR থেকে সম্ভব। আন্তর্জাতিক ক্লায়েন্টদের জন্য পরিষেবা সাধারণত VAT-এর জন্য শূন্য-হারযুক্ত।' },
  { question: 'বিদেশি ফ্রিল্যান্সারদের কি সৌদি আরবে আয়কর দিতে হয়?', answer: 'সৌদি আরব ২০২৬ পর্যন্ত বিদেশিদের বেতন বা ফ্রিল্যান্স আয়ের উপর ব্যক্তিগত আয়কর আরোপ করে না। তবে, আপনি যদি নিবন্ধিত প্রতিষ্ঠানের মাধ্যমে কাজ করেন, তাহলে কর্পোরেট আয়কর প্রযোজ্য হতে পারে।' },
  { question: 'Mostaql প্ল্যাটফর্ম ফি কত?', answer: 'Mostaql সমস্ত প্রকল্পের পেমেন্টের উপর ১০% প্ল্যাটফর্ম ফি নেয়, যা Upwork এবং Fiverr-এর থেকে কম। এটি আরবি ভাষার শীর্ষ ফ্রিল্যান্স মার্কেটপ্লেস এবং কন্টেন্ট রাইটিং, অনুবাদ, গ্রাফিক ডিজাইন ও প্রোগ্রামিং-এর জন্য জনপ্রিয়।' },
  { question: 'ফ্রিল্যান্স করার জন্য কি বাণিজ্যিক নিবন্ধন (CR) প্রয়োজন?', answer: 'না, আপনার যদি বৈধ ওয়াথেক সার্টিফিকেট থাকে তবে বাণিজ্যিক নিবন্ধনের প্রয়োজন নেই। ওয়াথেক সার্টিফিকেট বিশেষভাবে CR ছাড়া ফ্রিল্যান্স করার অনুমতি দেওয়ার জন্য ডিজাইন করা হয়েছে। আপনার বার্ষিক আয় ৩৭৫,০০০ SAR ছাড়িয়ে গেলে ব্যবসায়িক সত্তা নিবন্ধনের প্রয়োজন হতে পারে।' },
  { question: 'ফ্রিল্যান্সার হিসেবে কী কী খরচ কাটতে পারি?', answer: 'কাটছাঁটযোগ্য খরচের মধ্যে রয়েছে: ইন্টারনেট ও ফোন বিল, সফটওয়্যার সাবস্ক্রিপশন, কো-ওয়ার্কিং স্পেস বা হোম অফিস খরচ, ওয়েবসাইট হোস্টিং, বিজ্ঞাপন ও বিপণন, পেশাদার কোর্স, অ্যাকাউন্টিং ও আইনি ফি, ব্যাংক ট্রান্সফার ফি, এবং সরঞ্জামের অবচয়। সমস্ত রসিদ কমপক্ষে ৬ বছর সংরক্ষণ করুন।' },
  { question: 'আমার প্রকৃত নিট ফ্রিল্যান্স আয় কীভাবে গণনা করব?', answer: 'সূত্র: নিট আয় = মোট আয় - প্ল্যাটফর্ম ফি - ব্যবসায়িক খরচ - VAT (যদি নিবন্ধিত হন)। /freelance-income-calculator-এ Sauditoolhub Freelance Income Calculator ব্যবহার করুন।' },
  { question: 'ফ্রিল্যান্সারদের জন্য ZATCA VAT নিয়ম কী?', answer: 'সৌদি আরবে VAT ১৫% এবং এটি সৌদি ক্লায়েন্টদের দেওয়া ফ্রিল্যান্স পরিষেবার ক্ষেত্রে প্রযোজ্য। আন্তর্জাতিক ক্লায়েন্টদের জন্য পরিষেবা শূন্য-হারযুক্ত। VAT-নিবন্ধিত ফ্রিল্যান্সারদের কর চালান ইস্যু করতে হবে।' },
  { question: 'করের পর নিট ফ্রিল্যান্স আয় কীভাবে বাড়াবো?', answer: 'একাধিক প্ল্যাটফর্মে কাজ করুন, দীর্ঘমেয়াদী ক্লায়েন্ট সম্পর্ক গড়ে তুলুন, স্বেচ্ছাসেবী VAT নিবন্ধন করুন, কাটছাঁটযোগ্য খরচ ট্র্যাক করুন, রেট বাড়ান, এবং Sauditoolhub ক্যালকুলেটর ব্যবহার করুন।' },
]

function EnContent() {
  return (
    <article className="prose prose-invert max-w-none prose-headings:text-desert-primary prose-a:text-desert-primary prose-strong:text-white prose-li:text-gray-300">
      <h1>The Complete Guide to Freelance Income &amp; Tax Rules in Saudi Arabia 2026</h1>

      <div className="not-prose glass p-6 rounded-xl mb-8">
        <p className="text-gray-300 text-lg leading-relaxed">
          The gig economy is booming in Saudi Arabia. With Vision 2030 driving digital transformation, more Saudis and expats than ever are turning to freelancing platforms like Upwork, Fiverr, Mostaql, and Khamsat to earn income. Whether you are a graphic designer in Riyadh, a content writer in Jeddah, a programmer in Dammam, or a consultant working remotely from anywhere in the kingdom, understanding your true net income after platform fees, taxes, and business expenses is critical to financial success.
        </p>
        <p className="text-gray-300 text-lg leading-relaxed mt-4">
          This comprehensive guide covers <strong>everything you need to know about freelance income and taxes in Saudi Arabia in 2026</strong>. We explain the Watheq freelance certificate, break down platform fees versus government taxes, clarify ZATCA VAT rules for freelancers, provide step-by-step net income calculations with real-life examples, and list every business expense you can deduct.
        </p>
        <p className="text-gray-300 text-lg leading-relaxed mt-4">
          Use our free{' '}
          <Link href="/freelance-income-calculator" className="text-desert-primary font-bold underline">
            Freelance Income Calculator
          </Link>{' '}
          to instantly see exactly how much of your freelance earnings lands in your bank account after all deductions.
        </p>
      </div>

      <h2>Legal Framework for Freelancers in Saudi Arabia</h2>

      <h3>What is the Watheq (Freelance) Certificate?</h3>
      <p>
        Watheq (وثق) is the official freelance certificate issued by the Ministry of Human Resources and Social Development (MHRSD) through the freelance.sa platform. It is your legal authorization to work as a freelancer in Saudi Arabia. Without it, any freelance income you earn could be considered illegal earnings, and you may face penalties including fines or deportation for expats.
      </p>
      <p>
        The Watheq certificate is available for over 100 professional categories spanning information technology, design and creative services, writing and translation, consulting and training, marketing and advertising, and education. The application process is fully digital through the freelance.sa platform, and you typically receive your certificate within 5-10 business days.
      </p>

      <div className="not-prose glass p-5 rounded-xl mb-6">
        <h3 className="text-white font-semibold mb-2">Watheq Certificate Fast Facts (2026)</h3>
        <ul className="space-y-2 text-gray-400 text-sm">
          <li><CheckCircle className="h-4 w-4 text-desert-primary inline mr-2" />Cost: 1,000-2,000 SAR (depending on professional category)</li>
          <li><CheckCircle className="h-4 w-4 text-desert-primary inline mr-2" />Validity: 1 year (renewable annually)</li>
          <li><CheckCircle className="h-4 w-4 text-desert-primary inline mr-2" />Processing time: 5-10 business days</li>
          <li><CheckCircle className="h-4 w-4 text-desert-primary inline mr-2" />Platform: freelance.sa (fully digital application)</li>
          <li><CheckCircle className="h-4 w-4 text-desert-primary inline mr-2" />Eligibility: Saudi nationals and expat residents with valid Iqama</li>
          <li><CheckCircle className="h-4 w-4 text-desert-primary inline mr-2" />Categories: 100+ professional categories available</li>
          <li><CheckCircle className="h-4 w-4 text-desert-primary inline mr-2" />No Commercial Registration needed</li>
        </ul>
      </div>

      <h3>Do You Need a Commercial Registration (CR) to Freelance?</h3>
      <p>
        <strong>No, you do not need a Commercial Registration if you hold a valid Watheq certificate.</strong> The Watheq certificate is specifically designed to allow individuals to offer freelance services without the overhead and regulatory burden of a full business registration. This makes it ideal for freelancers just starting out or those who want to keep their operations lean.
      </p>
      <p>
        However, there are circumstances where you may need to consider transitioning to a CR or Limited Liability Company (LLC):
      </p>
      <ul>
        <li>Your annual freelance income exceeds 375,000 SAR (the VAT registration threshold)</li>
        <li>You want to hire employees or subcontractors</li>
        <li>You need to sign large corporate contracts that require a registered business entity</li>
        <li>You want to separate personal and business liabilities</li>
      </ul>

      <h2>Platform Fees vs. Government Taxes: The Crucial Distinction</h2>
      <p>
        One of the biggest mistakes freelancers make is confusing platform fees with taxes. They are fundamentally different, and understanding the distinction is essential for accurate net income calculation.
      </p>

      <h3>Platform Fees</h3>
      <p>Platform fees are charged by freelance marketplaces for connecting you with clients, processing payments, and providing dispute resolution. These fees are deducted from your gross income before you receive payment. Key platforms and their fee structures in 2026:</p>

      <div className="not-prose glass p-5 rounded-xl mb-6">
        <table className="w-full text-sm text-gray-300">
          <thead>
            <tr className="text-white border-b border-gray-700">
              <th className="text-left py-2">Platform</th>
              <th className="text-left py-2">Fee %</th>
              <th className="text-left py-2">Notes</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-gray-700/50">
              <td className="py-3 font-medium">Upwork</td>
              <td className="py-3">10-20%</td>
              <td className="py-3 text-gray-400">20% on first $500/client, then 5% thereafter. Freelancer Plus ($14.99/mo) reduces fees.</td>
            </tr>
            <tr className="border-b border-gray-700/50">
              <td className="py-3 font-medium">Fiverr</td>
              <td className="py-3">20%</td>
              <td className="py-3 text-gray-400">Flat 20% on all earnings. No sliding scale.</td>
            </tr>
            <tr className="border-b border-gray-700/50">
              <td className="py-3 font-medium">Mostaql</td>
              <td className="py-3">10%</td>
              <td className="py-3 text-gray-400">Arabic marketplace. 10% from freelancer; client pays additional service fee.</td>
            </tr>
            <tr className="border-b border-gray-700/50">
              <td className="py-3 font-medium">Khamsat</td>
              <td className="py-3">20%</td>
              <td className="py-3 text-gray-400">Flat 20% service fee. Popular for micro-services starting at $5.</td>
            </tr>
            <tr className="border-b border-gray-700/50">
              <td className="py-3 font-medium">Freelancer.com</td>
              <td className="py-3">10-15%</td>
              <td className="py-3 text-gray-400">10% for fixed-price projects, 15% for hourly projects.</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3>Government Taxes (ZATCA Rules)</h3>
      <p>Government taxes are imposed by the Zakat, Tax and Customs Authority (ZATCA). For freelancers in Saudi Arabia, the two main tax considerations are:</p>
      <ul>
        <li><strong>Income Tax:</strong> Saudi Arabia does not impose personal income tax on individual earnings (salary or freelance) for either Saudis or expats. However, if you operate through a registered company or CR, corporate income tax may apply to your business profits.</li>
        <li><strong>VAT (Value Added Tax):</strong> At 15%, VAT applies to freelance services provided to Saudi-based clients. Services exported to international clients are generally zero-rated (0% VAT).</li>
      </ul>

      <h2>VAT Rules for Freelancers in 2026</h2>
      <p>Understanding VAT is critical because getting it wrong can lead to penalties, interest charges, and audits from ZATCA. Here is what every freelancer needs to know:</p>

      <div className="not-prose glass p-5 rounded-xl mb-6">
        <h3 className="text-desert-primary font-semibold mb-3">VAT Thresholds for Freelancers</h3>
        <div className="space-y-3">
          <div className="flex items-start gap-3">
            <DollarSign className="h-5 w-5 text-desert-accent mt-0.5 shrink-0" />
            <div>
              <strong className="text-white">Mandatory Registration:</strong>
              <p className="text-gray-400 text-sm">Annual taxable supplies and imports exceed 375,000 SAR. You must register for VAT, charge 15% VAT on services to Saudi clients, file quarterly VAT returns, and remit the collected VAT to ZATCA.</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <DollarSign className="h-5 w-5 text-desert-accent mt-0.5 shrink-0" />
            <div>
              <strong className="text-white">Voluntary Registration:</strong>
              <p className="text-gray-400 text-sm">Annual income between 187,500 SAR and 375,000 SAR. You can choose to register voluntarily. Benefits include reclaiming VAT on your business purchases (input tax recovery), which can significantly reduce your overall tax burden.</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <DollarSign className="h-5 w-5 text-desert-accent mt-0.5 shrink-0" />
            <div>
              <strong className="text-white">Below Threshold:</strong>
              <p className="text-gray-400 text-sm">Annual income under 187,500 SAR. No VAT registration required. You do not charge VAT to clients nor file VAT returns. However, you also cannot reclaim VAT on your business expenses.</p>
            </div>
          </div>
        </div>
      </div>

      <h3>VAT for International vs. Saudi Clients</h3>
      <p>
        The VAT treatment of your services depends on who your client is. If you provide services to a Saudi-based client (whether an individual or a company registered in Saudi Arabia), you must charge 15% VAT if you are VAT-registered. If you provide services to an international client outside Saudi Arabia, the service is considered "exported" and is zero-rated for VAT purposes. This means you charge 0% VAT and do not need to remit anything to ZATCA for that transaction, though you should still report it in your VAT return.
      </p>

      <h2>How to Calculate True Net Freelance Income: Step-by-Step</h2>

      <div className="not-prose glass p-5 rounded-xl mb-6">
        <h3 className="text-desert-primary font-semibold mb-3">The Net Income Formula</h3>
        <div className="bg-[#0A0E1A] p-4 rounded-lg text-gray-300 text-sm font-mono">
          <p className="text-desert-primary font-bold">Net Income = Gross Income - Platform Fees - Business Expenses - VAT (if applicable)</p>
        </div>
      </div>

      <h3>Step 1: Calculate Gross Income</h3>
      <p>This is the total amount your clients pay for your services before any deductions. If you work on multiple platforms, sum all earnings before platform fees are deducted.</p>

      <h3>Step 2: Subtract Platform Fees</h3>
      <p>Deduct the platform's commission from your gross income. For example, if you earned $1,000 on Upwork and it is your first project with that client, the platform fee is 20% = $200.</p>

      <h3>Step 3: Subtract Business Expenses</h3>
      <p>Deduct all eligible business expenses (see the section below for a comprehensive list). Keep accurate records and receipts for every expense.</p>

      <h3>Step 4: Account for VAT</h3>
      <p>If you are VAT-registered and working with Saudi clients, you need to set aside 15% of your taxable income for VAT. If you work with international clients, this step may not apply.</p>

      <h2>Real-Life Calculation Examples</h2>

      <div className="not-prose glass p-5 rounded-xl mb-6">
        <h3 className="text-white font-semibold mb-3">Example 1: Graphic Designer on Upwork (International Client, No VAT)</h3>
        <p className="text-gray-300 text-sm mb-3">Ahmed is a graphic designer based in Jeddah. He earns $2,000 per month on Upwork working with a US-based client. He has moderate business expenses including Adobe subscription, internet, and home office costs.</p>
        <div className="bg-[#0A0E1A] p-4 rounded-lg text-gray-300 text-sm space-y-1.5 font-mono">
          <p>Gross Income: $2,000 (≈ 7,500 SAR)</p>
          <p>Upwork Fee (20% for first $500 + 5% thereafter): </p>
          <p className="pl-4">First $500 × 20% = $100</p>
          <p className="pl-4">Remaining $1,500 × 5% = $75</p>
          <p className="pl-4">Total Platform Fee: $175</p>
          <p>Income After Platform Fee: $1,825 (≈ 6,844 SAR)</p>
          <p>Business Expenses (monthly): </p>
          <p className="pl-4">Adobe Creative Cloud: 150 SAR</p>
          <p className="pl-4">Internet: 200 SAR</p>
          <p className="pl-4">Home Office (portion): 300 SAR</p>
          <p className="pl-4">Marketing/Portfolio: 100 SAR</p>
          <p className="pl-4">Total Expenses: 750 SAR</p>
          <p>No VAT (international client — zero-rated)</p>
          <p className="text-desert-primary font-bold mt-2">Net Monthly Income: 6,844 - 750 = 6,094 SAR</p>
          <p className="text-gray-500 text-xs mt-1">Effective tax/fee burden: ~19% of gross income</p>
        </div>
      </div>

      <div className="not-prose glass p-5 rounded-xl mb-6">
        <h3 className="text-white font-semibold mb-3">Example 2: Local Consultant Working with Saudi Clients (VAT Applicable)</h3>
        <p className="text-gray-300 text-sm mb-3">Sarah is a business consultant in Riyadh with a Watheq certificate. She earns 20,000 SAR per month from Saudi clients through direct contracts and Mostaql. She is VAT-registered because her annual income exceeds 200,000 SAR.</p>
        <div className="bg-[#0A0E1A] p-4 rounded-lg text-gray-300 text-sm space-y-1.5 font-mono">
          <p>Gross Income: 20,000 SAR</p>
          <p>Mostaql Fee (10%): 2,000 SAR</p>
          <p>Income After Platform Fee: 18,000 SAR</p>
          <p>Business Expenses (monthly): </p>
          <p className="pl-4">Co-working Space: 800 SAR</p>
          <p className="pl-4">Professional Insurance: 400 SAR</p>
          <p className="pl-4">Software & Tools: 500 SAR</p>
          <p className="pl-4">Transportation & Meetings: 600 SAR</p>
          <p className="pl-4">Accounting & Legal: 300 SAR</p>
          <p className="pl-4">Total Expenses: 2,600 SAR</p>
          <p>Income Before VAT: 18,000 - 2,600 = 15,400 SAR</p>
          <p>VAT (15% of taxable income): 15,400 × 15% = 2,310 SAR</p>
          <p className="text-desert-primary font-bold mt-2">Net Monthly Income: 15,400 - 2,310 = 13,090 SAR</p>
          <p className="text-gray-500 text-xs mt-1">Effective tax/fee burden: ~35% of gross income</p>
        </div>
        <p className="text-gray-400 text-xs mt-2">Note: The VAT amount (2,310 SAR) is collected from your client and remitted to ZATCA. It is not a cost to you — it passes through your business. Your actual net income before expenses is 15,400 SAR.</p>
      </div>

      <div className="not-prose glass p-5 rounded-xl mb-6">
        <h3 className="text-white font-semibold mb-3">Example 3: Full-Time Freelance Programmer (Mixed Clients)</h3>
        <p className="text-gray-300 text-sm mb-3">Mohammed is a full-stack developer in Dammam earning a mix of international (70%) and Saudi (30%) income. He uses Upwork and direct contracts.</p>
        <div className="bg-[#0A0E1A] p-4 rounded-lg text-gray-300 text-sm space-y-1.5 font-mono">
          <p>Gross Monthly Income: 25,000 SAR</p>
          <p className="pl-4">International (70%): 17,500 SAR</p>
          <p className="pl-4">Saudi (30%): 7,500 SAR</p>
          <p>Platform Fees (average 8% due to long-term clients): 2,000 SAR</p>
          <p>Income After Platform Fees: 23,000 SAR</p>
          <p>Business Expenses: 3,500 SAR</p>
          <p>Income Before VAT: 19,500 SAR</p>
          <p>VAT on Saudi portion (7,500 × 15%): 1,125 SAR (collected from client)</p>
          <p>No VAT on international portion (zero-rated)</p>
          <p className="text-desert-primary font-bold mt-2">Net Monthly Income: 19,500 SAR</p>
        </div>
      </div>

      <h2>Tax Deductions &amp; Write-offs for Saudi Freelancers</h2>
      <p>One of the most powerful tools for reducing your tax burden is claiming legitimate business expenses. If you are VAT-registered, deducting expenses also allows you to reclaim the VAT you paid on those purchases.</p>

      <div className="not-prose glass p-5 rounded-xl mb-6">
        <h3 className="text-white font-semibold mb-3">Complete List of Deductible Expenses</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
          <div className="bg-[#0A0E1A] p-3 rounded-lg">
            <h4 className="text-desert-primary font-semibold mb-1">Technology &amp; Software</h4>
            <ul className="text-gray-400 space-y-1">
              <li>Software subscriptions (Adobe, Microsoft, Figma)</li>
              <li>Website hosting, domain names, SSL certificates</li>
              <li>Cloud storage (Google Drive, Dropbox, AWS)</li>
              <li>Project management tools (Asana, Trello, Jira)</li>
              <li>Communication tools (Zoom, Slack, Teams)</li>
            </ul>
          </div>
          <div className="bg-[#0A0E1A] p-3 rounded-lg">
            <h4 className="text-desert-primary font-semibold mb-1">Equipment &amp; Hardware</h4>
            <ul className="text-gray-400 space-y-1">
              <li>Laptop, desktop, tablet purchases (depreciated)</li>
              <li>Monitors, keyboards, mice, peripherals</li>
              <li>Camera, microphone, lighting (for content creators)</li>
              <li>Office furniture, ergonomic chairs</li>
              <li>External drives, NAS storage</li>
            </ul>
          </div>
          <div className="bg-[#0A0E1A] p-3 rounded-lg">
            <h4 className="text-desert-primary font-semibold mb-1">Workspace &amp; Utilities</h4>
            <ul className="text-gray-400 space-y-1">
              <li>Co-working space membership fees</li>
              <li>Home office portion of rent/electricity (proportionate)</li>
              <li>Internet service (business-use percentage)</li>
              <li>Mobile phone plan (business-use percentage)</li>
              <li>Printing, stationery, office supplies</li>
            </ul>
          </div>
          <div className="bg-[#0A0E1A] p-3 rounded-lg">
            <h4 className="text-desert-primary font-semibold mb-1">Professional Services</h4>
            <ul className="text-gray-400 space-y-1">
              <li>Accounting and bookkeeping fees</li>
              <li>Legal consultation fees</li>
              <li>Professional certifications and courses</li>
              <li>Business insurance premiums</li>
              <li>Bank fees and payment processor charges</li>
            </ul>
          </div>
        </div>
      </div>

      <h2>How to Use the Sauditoolhub Freelance Income Calculator</h2>
      <div className="not-prose glass p-6 rounded-xl mb-8">
        <div className="flex items-center gap-3 mb-4">
          <Calculator className="h-8 w-8 text-desert-primary" />
          <h3 className="text-white text-lg font-bold m-0">Sauditoolhub Freelance Income Calculator</h3>
        </div>
        <p className="text-gray-300 mb-4">
          Our interactive calculator takes the guesswork out of freelance income planning. Enter your gross freelance income, select your platform(s), input your business expenses, and specify your client locations (Saudi vs. international). The calculator instantly shows you your true net take-home pay, including VAT calculations if applicable.
        </p>
        <ul className="space-y-2 text-gray-400 text-sm mb-4">
          <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-desert-primary" /> Supports all major platforms: Upwork, Fiverr, Mostaql, Khamsat, and custom rates</li>
          <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-desert-primary" /> Automatically calculates VAT for Saudi vs. international clients</li>
          <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-desert-primary" /> Includes a comprehensive business expense tracker</li>
          <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-desert-primary" /> Shows both monthly and annual projections</li>
          <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-desert-primary" /> Free — no registration or login required</li>
        </ul>
        <Link href="/freelance-income-calculator" className="inline-flex items-center gap-2 rounded-xl bg-desert-primary px-8 py-3 text-sm font-bold text-white transition-all hover:bg-desert-primary-dim">
          <Calculator className="h-4 w-4" />
          Calculate Your Net Income Now
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
        Freelancing in Saudi Arabia offers tremendous opportunity, but financial success requires a clear understanding of the fees, taxes, and regulations that affect your income. The Watheq certificate provides a legal pathway to freelance, ZATCA rules determine your VAT obligations, and platform fees directly impact your bottom line. By calculating your true net income using the formula we outlined, tracking all deductible expenses, and using the right tools, you can maximize your freelance earnings and build a sustainable career.
      </p>
      <p>
        Start by calculating your real net income with our{' '}
        <Link href="/freelance-income-calculator" className="text-desert-primary font-bold underline">Freelance Income Calculator</Link>.
        Then explore our{' '}
        <Link href="/zatca-vat-calculator" className="text-desert-primary font-bold underline">ZATCA VAT Calculator</Link>
        {' '}for tax compliance and{' '}
        <Link href="/salla-profit-calculator" className="text-desert-primary font-bold underline">Salla/Zid Profit Calculator</Link>
        {' '}if you run an e-commerce business alongside freelancing. Visit our{' '}
        <Link href="/blog" className="text-desert-primary font-bold underline">Blog</Link>
        {' '}for more guides on freelancing, business, and expat life in Saudi Arabia.
      </p>

      <div className="not-prose glass p-6 rounded-xl mt-8 text-center">
        <Calculator className="h-10 w-10 text-desert-primary mx-auto mb-3" />
        <h3 className="text-white text-lg font-bold mb-2">Know Your True Freelance Income</h3>
        <p className="text-gray-400 text-sm mb-4">Free calculator — instant results, no signup required</p>
        <Link href="/freelance-income-calculator" className="inline-flex items-center gap-2 rounded-xl bg-desert-primary px-8 py-3 text-sm font-bold text-white transition-all hover:bg-desert-primary-dim">
          <Calculator className="h-4 w-4" />
          Calculate Now
        </Link>
      </div>
    </article>
  )
}

function ArContent() {
  return (
    <article className="prose prose-invert max-w-none prose-headings:text-desert-primary prose-a:text-desert-primary prose-strong:text-white prose-li:text-gray-300" dir="rtl">
      <h1>الدليل الكامل للعمل الحر والضرائب في السعودية 2026</h1>

      <div className="not-prose glass p-6 rounded-xl mb-8">
        <p className="text-gray-300 text-lg leading-relaxed">
          يشهد اقتصاد الوظائف المؤقتة (Gig Economy) ازدهاراً كبيراً في السعودية. مع رؤية 2030 التي تقود التحول الرقمي، يتجه المزيد من السعوديين والمقيمين إلى منصات العمل الحر مثل أب ورك، فايفر، مستقل، وخمسات لكسب الدخل. سواء كنت مصمماً جرافيكياً في الرياض، كاتب محتوى في جدة، مبرمجاً في الدمام، أو مستشاراً يعمل عن بُعد من أي مكان في المملكة، فإن فهم صافي دخلك الحقيقي بعد رسوم المنصات والضرائب والمصاريف التشغيلية أمر بالغ الأهمية للنجاح المالي.
        </p>
        <p className="text-gray-300 text-lg leading-relaxed mt-4">
          هذا الدليل الشامل يغطي <strong>كل ما تحتاج معرفته عن دخل العمل الحر والضرائب في السعودية 2026</strong>. نشرح شهادة وثق للعمل الحر، نفصل رسوم المنصات مقابل الضرائب الحكومية، نوضح قواعد ضريبة القيمة المضافة للمستقلين، نقدم حسابات خطوة بخطوة مع أمثلة واقعية، ونذكر كل مصاريف التشغيل التي يمكنك خصمها.
        </p>
        <p className="text-gray-300 text-lg leading-relaxed mt-4">
          استخدم{' '}
          <Link href="/freelance-income-calculator" className="text-desert-primary font-bold underline">
            حاسبة دخل العمل الحر
          </Link>{' '}
          المجانية من Sauditoolhub لترى فوراً كم يصل إلى حسابك البنكي بعد جميع الخصومات.
        </p>
      </div>

      <h2>الإطار القانوني للعمل الحر في السعودية</h2>

      <h3>ما هي شهادة وثق (العمل الحر)؟</h3>
      <p>
        وثق هي الشهادة الرسمية للعمل الحر الصادرة عن وزارة الموارد البشرية والتنمية الاجتماعية عبر منصة freelance.sa. وهي تصريحك القانوني للعمل كمستقل في السعودية. بدونها، قد يعتبر دخل العمل الحر الذي تكسبه غير قانوني، وقد تواجه عقوبات تشمل الغرامات أو الترحيل للوافدين.
      </p>
      <p>
        شهادة وثق متاحة لأكثر من 100 تصنيف مهني تشمل تقنية المعلومات، التصميم والخدمات الإبداعية، الكتابة والترجمة، الاستشارات والتدريب، التسويق والإعلان، والتعليم. عملية التقديم رقمية بالكامل عبر منصة freelance.sa، وتستلم شهادتك عادة خلال 5-10 أيام عمل.
      </p>

      <div className="not-prose glass p-5 rounded-xl mb-6">
        <h3 className="text-white font-semibold mb-2">معلومات سريعة عن شهادة وثق (2026)</h3>
        <ul className="space-y-2 text-gray-400 text-sm">
          <li><CheckCircle className="h-4 w-4 text-desert-primary inline ml-2" />التكلفة: 1,000-2,000 ريال (حسب التصنيف المهني)</li>
          <li><CheckCircle className="h-4 w-4 text-desert-primary inline ml-2" />المدة: سنة واحدة (قابلة للتجديد سنوياً)</li>
          <li><CheckCircle className="h-4 w-4 text-desert-primary inline ml-2" />وقت المعالجة: 5-10 أيام عمل</li>
          <li><CheckCircle className="h-4 w-4 text-desert-primary inline ml-2" />المنصة: freelance.sa (تقديم رقمي بالكامل)</li>
          <li><CheckCircle className="h-4 w-4 text-desert-primary inline ml-2" />الأهلية: السعوديون والمقيمون بإقامة سارية</li>
          <li><CheckCircle className="h-4 w-4 text-desert-primary inline ml-2" />التصنيفات: أكثر من 100 تصنيف مهني</li>
          <li><CheckCircle className="h-4 w-4 text-desert-primary inline ml-2" />لا حاجة لسجل تجاري</li>
        </ul>
      </div>

      <h3>هل تحتاج إلى سجل تجاري للعمل الحر؟</h3>
      <p>
        <strong>لا، لست بحاجة إلى سجل تجاري إذا كنت تحمل شهادة وثق سارية المفعول.</strong> شهادة وثق مصممة خصيصاً للسماح للأفراد بتقديم خدمات العمل الحر دون أعباء التسجيل التجاري الكامل. لكن هناك ظروف قد تستدعي الانتقال إلى سجل تجاري أو شركة ذات مسؤولية محدودة:
      </p>
      <ul>
        <li>يتجاوز دخلك السنوي من العمل الحر 375,000 ريال</li>
        <li>تريد توظيف موظفين أو مقاولين من الباطن</li>
        <li>تحتاج لتوقيع عقود شركات كبيرة تتطلب كياناً تجارياً مسجلاً</li>
        <li>تريد فصل المسؤوليات الشخصية عن التجارية</li>
      </ul>

      <h2>رسوم المنصات مقابل الضرائب الحكومية: الفرق الحاسم</h2>
      <p>
        من أكبر الأخطاء التي يرتكبها المستقلون الخلط بين رسوم المنصات والضرائب. هما مختلفان جوهرياً، وفهم الفرق ضروري لحساب صافي الدخل بدقة.
      </p>

      <h3>رسوم المنصات</h3>
      <p>رسوم المنصات هي ما تفرضه أسواق العمل الحر مقابل توصيلك بالعملاء ومعالجة الدفعات وتوفير حل النزاعات. تُخصم هذه الرسوم من دخلك الإجمالي قبل استلام الدفع. فيما يلي رسوم المنصات الرئيسية في 2026:</p>

      <div className="not-prose glass p-5 rounded-xl mb-6">
        <div className="space-y-3 text-sm">
          <div className="flex justify-between items-center border-b border-gray-700/50 pb-2">
            <span className="font-medium text-white">أب ورك (Upwork)</span>
            <span className="text-gray-400">10-20%</span>
          </div>
          <div className="flex justify-between items-center border-b border-gray-700/50 pb-2">
            <span className="font-medium text-white">فايفر (Fiverr)</span>
            <span className="text-gray-400">20%</span>
          </div>
          <div className="flex justify-between items-center border-b border-gray-700/50 pb-2">
            <span className="font-medium text-white">مستقل (Mostaql)</span>
            <span className="text-gray-400">10%</span>
          </div>
          <div className="flex justify-between items-center border-b border-gray-700/50 pb-2">
            <span className="font-medium text-white">خمسات (Khamsat)</span>
            <span className="text-gray-400">20%</span>
          </div>
          <div className="flex justify-between items-center pb-2">
            <span className="font-medium text-white">فريلانسر.كوم (Freelancer.com)</span>
            <span className="text-gray-400">10-15%</span>
          </div>
        </div>
      </div>

      <h3>الضرائب الحكومية (قواعد هيئة الزكاة والضريبة والجمارك)</h3>
      <p>الضرائب الحكومية تفرضها هيئة الزكاة والضريبة والجمارك (ZATCA). للمستقلين في السعودية، هناك اعتباران رئيسيان:</p>
      <ul>
        <li><strong>ضريبة الدخل:</strong> السعودية لا تفرض ضريبة دخل شخصية على الأفراد (راتب أو عمل حر) للمواطنين أو المقيمين. لكن إذا كنت تعمل من خلال شركة مسجلة، فقد تطبق ضريبة دخل الشركات على أرباحك.</li>
        <li><strong>ضريبة القيمة المضافة (VAT):</strong> بنسبة 15%، تنطبق ضريبة القيمة المضافة على خدمات العمل الحر المقدمة للعملاء السعوديين. الخدمات المصدرة للعملاء الدوليين عادة ما تكون خاضعة لنسبة صفر بالمئة.</li>
      </ul>

      <h2>قواعد ضريبة القيمة المضافة للمستقلين 2026</h2>
      <p>فهم ضريبة القيمة المضافة أمر بالغ الأهمية لأن الخطأ فيها قد يؤدي إلى غرامات وغرامات تأخير وتدقيق من ZATCA.</p>

      <div className="not-prose glass p-5 rounded-xl mb-6">
        <h3 className="text-desert-primary font-semibold mb-3">حدود ضريبة القيمة المضافة للمستقلين</h3>
        <div className="space-y-3">
          <div className="flex items-start gap-3">
            <DollarSign className="h-5 w-5 text-desert-accent mt-0.5 shrink-0" />
            <div>
              <strong className="text-white">التسجيل الإلزامي:</strong>
              <p className="text-gray-400 text-sm">تتجاوز الإمدادات الخاضعة للضريبة 375,000 ريال سنوياً. يجب التسجيل في ضريبة القيمة المضافة، فرض 15% ضريبة على الخدمات للعملاء السعوديين، تقديم إقرارات ربع سنوية، وتحويل الضريبة المحصلة إلى ZATCA.</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <DollarSign className="h-5 w-5 text-desert-accent mt-0.5 shrink-0" />
            <div>
              <strong className="text-white">التسجيل الطوعي:</strong>
              <p className="text-gray-400 text-sm">الدخل السنوي بين 187,500 و 375,000 ريال. يمكنك اختيار التسجيل طوعاً. الميزة تشمل استرداد ضريبة القيمة المضافة على مشترياتك التجارية.</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <DollarSign className="h-5 w-5 text-desert-accent mt-0.5 shrink-0" />
            <div>
              <strong className="text-white">دون الحد المطلوب:</strong>
              <p className="text-gray-400 text-sm">الدخل السنوي أقل من 187,500 ريال. لا حاجة للتسجيل في ضريبة القيمة المضافة. لا تفرض ضريبة على العملاء ولا تقدم إقرارات.</p>
            </div>
          </div>
        </div>
      </div>

      <h2>كيفية حساب صافي دخل العمل الحر الحقيقي</h2>

      <div className="not-prose glass p-5 rounded-xl mb-6">
        <h3 className="text-desert-primary font-semibold mb-3">معادلة صافي الدخل</h3>
        <div className="bg-[#0A0E1A] p-4 rounded-lg text-gray-300 text-sm font-mono">
          <p className="text-desert-primary font-bold">صافي الدخل = الدخل الإجمالي - رسوم المنصة - المصاريف التشغيلية - ضريبة القيمة المضافة (إن وجدت)</p>
        </div>
      </div>

      <h2>أمثلة عملية لحساب الدخل</h2>

      <div className="not-prose glass p-5 rounded-xl mb-6">
        <h3 className="text-white font-semibold mb-3">مثال 1: مصمم جرافيك على Upwork (عميل دولي، بدون ضريبة)</h3>
        <div className="bg-[#0A0E1A] p-4 rounded-lg text-gray-300 text-sm space-y-1.5 font-mono">
          <p>الدخل الإجمالي: $2,000 (≈ 7,500 ريال)</p>
          <p>رسوم Upwork (20% لأول $500 ثم 5%): $175</p>
          <p>الدخل بعد الرسوم: $1,825 (≈ 6,844 ريال)</p>
          <p>المصاريف الشهرية: 750 ريال</p>
          <p>بدون ضريبة قيمة مضافة (عميل دولي)</p>
          <p className="text-desert-primary font-bold mt-2">صافي الدخل الشهري: 6,094 ريال</p>
        </div>
      </div>

      <div className="not-prose glass p-5 rounded-xl mb-6">
        <h3 className="text-white font-semibold mb-3">مثال 2: مستشار محلي مع عملاء سعوديين (مع ضريبة القيمة المضافة)</h3>
        <div className="bg-[#0A0E1A] p-4 rounded-lg text-gray-300 text-sm space-y-1.5 font-mono">
          <p>الدخل الإجمالي: 20,000 ريال</p>
          <p>رسوم مستقل (10%): 2,000 ريال</p>
          <p>الدخل بعد الرسوم: 18,000 ريال</p>
          <p>المصاريف التشغيلية: 2,600 ريال</p>
          <p>الدخل قبل الضريبة: 15,400 ريال</p>
          <p>ضريبة القيمة المضافة (15%): 2,310 ريال</p>
          <p className="text-desert-primary font-bold mt-2">صافي الدخل الشهري: 13,090 ريال</p>
        </div>
      </div>

      <h2>الاستقطاعات والمصروفات القابلة للخصم للمستقلين</h2>
      <p>من أقوى أدوات تخفيف العبء الضريبي المطالبة بالمصروفات التجارية المشروعة. إذا كنت مسجلاً في ضريبة القيمة المضافة، فإن خصم المصاريف يسمح لك أيضاً باسترداد ضريبة القيمة المضافة التي دفعت على هذه المشتريات.</p>

      <div className="not-prose glass p-5 rounded-xl mb-6">
        <h3 className="text-white font-semibold mb-3">قائمة شاملة بالمصروفات القابلة للخصم</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
          <div className="bg-[#0A0E1A] p-3 rounded-lg">
            <h4 className="text-desert-primary font-semibold mb-1">التقنية والبرمجيات</h4>
            <ul className="text-gray-400 space-y-1">
              <li>اشتراكات البرامج (Adobe, Microsoft, Figma)</li>
              <li>استضافة المواقع، أسماء النطاق، شهادات SSL</li>
              <li>التخزين السحابي (Google Drive, Dropbox)</li>
              <li>أدوات إدارة المشاريع (Asana, Trello)</li>
              <li>أدوات التواصل (Zoom, Slack)</li>
            </ul>
          </div>
          <div className="bg-[#0A0E1A] p-3 rounded-lg">
            <h4 className="text-desert-primary font-semibold mb-1">المعدات والأجهزة</h4>
            <ul className="text-gray-400 space-y-1">
              <li>أجهزة لابتوب، كمبيوتر مكتبي، أجهزة لوحية</li>
              <li>شاشات، لوحات مفاتيح، فئران</li>
              <li>كاميرا، ميكروفون، إضاءة (لصانعي المحتوى)</li>
              <li>أثاث مكتبي، كراسي مريحة</li>
              <li>أقراص تخزين خارجية</li>
            </ul>
          </div>
          <div className="bg-[#0A0E1A] p-3 rounded-lg">
            <h4 className="text-desert-primary font-semibold mb-1">مساحة العمل والمرافق</h4>
            <ul className="text-gray-400 space-y-1">
              <li>رسوم عضوية مساحات العمل المشترك</li>
              <li>نسبة المكتب المنزلي من الإيجار/الكهرباء</li>
              <li>خدمة الإنترنت (نسبة الاستخدام التجاري)</li>
              <li>باقة الجوال (نسبة الاستخدام التجاري)</li>
              <li>الطباعة والقرطاسية</li>
            </ul>
          </div>
          <div className="bg-[#0A0E1A] p-3 rounded-lg">
            <h4 className="text-desert-primary font-semibold mb-1">الخدمات المهنية</h4>
            <ul className="text-gray-400 space-y-1">
              <li>رسوم المحاسبة والمسك الدفتري</li>
              <li>رسوم الاستشارات القانونية</li>
              <li>الشهادات المهنية والدورات التدريبية</li>
              <li>أقساط التأمين التجاري</li>
              <li>الرسوم البنكية ورسوم معالجة الدفع</li>
            </ul>
          </div>
        </div>
      </div>

      <h2>حاسبة دخل العمل الحر من Sauditoolhub</h2>
      <div className="not-prose glass p-6 rounded-xl mb-8">
        <div className="flex items-center gap-3 mb-4">
          <Calculator className="h-8 w-8 text-desert-primary" />
          <h3 className="text-white text-lg font-bold m-0">حاسبة دخل العمل الحر</h3>
        </div>
        <p className="text-gray-300 mb-4">
          حاسبتنا التفاعلية تزيل التخمين من تخطيط دخل العمل الحر. أدخل دخلك الإجمالي، اختر منصاتك، أدخل مصاريفك التشغيلية، وحدد مواقع عملائك. الحاسبة تظهر فوراً صافي دخلك الحقيقي بعد جميع الخصومات.
        </p>
        <ul className="space-y-2 text-gray-400 text-sm mb-4">
          <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-desert-primary" /> تدعم جميع المنصات الرئيسية: Upwork, Fiverr, مستقل, خمسات</li>
          <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-desert-primary" /> تحسب ضريبة القيمة المضافة تلقائياً للعملاء السعوديين والدوليين</li>
          <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-desert-primary" /> تتضمن متتبعاً شاملاً للمصاريف التشغيلية</li>
          <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-desert-primary" /> مجانية تماماً — بدون تسجيل أو دخول</li>
        </ul>
        <Link href="/freelance-income-calculator" className="inline-flex items-center gap-2 rounded-xl bg-desert-primary px-8 py-3 text-sm font-bold text-white transition-all hover:bg-desert-primary-dim">
          <Calculator className="h-4 w-4" />
          احسب صافي دخلك الآن
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
        العمل الحر في السعودية يقدم فرصاً هائلة، لكن النجاح المالي يتطلب فهماً واضحاً للرسوم والضرائب واللوائح التي تؤثر على دخلك. شهادة وثق توفر المسار القانوني للعمل الحر، قواعد ZATCA تحدد التزامات ضريبة القيمة المضافة، ورسوم المنصات تؤثر مباشرة على صافي أرباحك. بحساب صافي دخلك الحقيقي باستخدام المعادلة التي أوضحناها، وتتبع جميع المصروفات القابلة للخصم، واستخدام الأدوات المناسبة، يمكنك تعظيم أرباحك من العمل الحر وبناء مسيرة مهنية مستدامة.
      </p>
      <p>
        ابدأ بحساب صافي دخلك الحقيقي مع{' '}
        <Link href="/freelance-income-calculator" className="text-desert-primary font-bold underline">حاسبة دخل العمل الحر</Link>.
        ثم استكشف{' '}
        <Link href="/zatca-vat-calculator" className="text-desert-primary font-bold underline">حاسبة ضريبة القيمة المضافة</Link>
        {' '}و{' '}
        <Link href="/salla-profit-calculator" className="text-desert-primary font-bold underline">حاسبة أرباح سلة/زيد</Link>
        . زوروا{' '}
        <Link href="/blog" className="text-desert-primary font-bold underline">المدونة</Link>
        {' '}لمزيد من الأدلة حول العمل الحر والأعمال التجارية والحياة في السعودية.
      </p>

      <div className="not-prose glass p-6 rounded-xl mt-8 text-center">
        <Calculator className="h-10 w-10 text-desert-primary mx-auto mb-3" />
        <h3 className="text-white text-lg font-bold mb-2">اعرف صافي دخلك الحقيقي من العمل الحر</h3>
        <p className="text-gray-400 text-sm mb-4">حاسبة مجانية — نتائج فورية، بدون تسجيل</p>
        <Link href="/freelance-income-calculator" className="inline-flex items-center gap-2 rounded-xl bg-desert-primary px-8 py-3 text-sm font-bold text-white transition-all hover:bg-desert-primary-dim">
          <Calculator className="h-4 w-4" />
          احسب الآن
        </Link>
      </div>
    </article>
  )
}

function UrContent() {
  return (
    <article className="prose prose-invert max-w-none prose-headings:text-desert-primary prose-a:text-desert-primary prose-strong:text-white prose-li:text-gray-300" dir="rtl">
      <h1>سعودی عرب میں فری لانسنگ انکم اور ٹیکس کا مکمل گائیڈ 2026</h1>

      <div className="not-prose glass p-6 rounded-xl mb-8">
        <p className="text-gray-300 text-lg leading-relaxed">
          سعودی عرب میں گیگ اکانومی تیزی سے پھیل رہی ہے۔ وژن 2030 کی بدولت، زیادہ سے زیادہ سعودی اور غیر ملکی Upwork، Fiverr، Mostaql اور Khamsat جیسے پلیٹ فارمز پر فری لانسنگ کر رہے ہیں۔ چاہے آپ ریاض میں گرافک ڈیزائنر ہوں، جدہ میں کانٹنٹ رائٹر، دمام میں پروگرامر، یا کہیں سے بھی ریموٹ کنسلٹنٹ — پلیٹ فارم فیس، ٹیکس اور کاروباری اخراجات کے بعد اپنی حقیقی خالص آمدنی سمجھنا مالی کامیابی کے لیے ضروری ہے۔
        </p>
        <p className="text-gray-300 text-lg leading-relaxed mt-4">
          یہ جامع گائیڈ <strong>2026 میں سعودی عرب میں فری لانس انکم اور ٹیکس کے بارے میں ہر وہ چیز</strong> بیان کرتا ہے۔
        </p>
        <p className="text-gray-300 text-lg leading-relaxed mt-4">
          ہمارا مفت{' '}
          <Link href="/freelance-income-calculator" className="text-desert-primary font-bold underline">
            Freelance Income Calculator
          </Link>{' '}
          استعمال کریں۔
        </p>
      </div>

      <h2>سعودی عرب میں فری لانسرز کے لیے قانونی فریم ورک</h2>

      <h3>واتق (فری لانس) سرٹیفکیٹ کیا ہے؟</h3>
      <p>
        واتق وزارت افرادی قوت اور سماجی ترقی کی طرف سے freelance.sa پلیٹ فارم کے ذریعے جاری کردہ سرکاری فری لانس سرٹیفکیٹ ہے۔ یہ سعودی عرب میں فری لانس کرنے کا آپ کا قانونی اجازت نامہ ہے۔ اس کے بغیر، آپ کی فری لانس آمدنی غیر قانونی سمجھی جا سکتی ہے اور آپ کو جرمانے یا ملک بدری کا سامنا ہو سکتا ہے۔
      </p>

      <div className="not-prose glass p-5 rounded-xl mb-6">
        <h3 className="text-white font-semibold mb-2">واتق سرٹیفکیٹ فوری حقائق (2026)</h3>
        <ul className="space-y-2 text-gray-400 text-sm">
          <li><CheckCircle className="h-4 w-4 text-desert-primary inline ml-2" />لاگت: 1,000-2,000 SAR</li>
          <li><CheckCircle className="h-4 w-4 text-desert-primary inline ml-2" />مدت: 1 سال (سالانہ قابل تجدید)</li>
          <li><CheckCircle className="h-4 w-4 text-desert-primary inline ml-2" />پلیٹ فارم: freelance.sa</li>
          <li><CheckCircle className="h-4 w-4 text-desert-primary inline ml-2" />100+ پیشہ ورانہ زمرے دستیاب</li>
          <li><CheckCircle className="h-4 w-4 text-desert-primary inline ml-2" />کمرشل رجسٹریشن کی ضرورت نہیں</li>
        </ul>
      </div>

      <h3>فری لانسنگ کے لیے کیا مجھے CR چاہیے؟</h3>
      <p>
        <strong>نہیں، اگر آپ کے پاس واتق سرٹیفکیٹ ہے تو کمرشل رجسٹریشن کی ضرورت نہیں۔</strong> تاہم، اگر آپ کی سالانہ آمدنی 375,000 SAR سے زیادہ ہے یا آپ ملازمین رکھنا چاہتے ہیں تو آپ کو کاروباری ادارہ رجسٹر کرنے پر غور کرنا چاہیے۔
      </p>

      <h2>پلیٹ فارم فیس بمقابلہ سرکاری ٹیکس</h2>
      <p>فری لانسرز کی سب سے بڑی غلطی پلیٹ فارم فیس اور ٹیکس میں الجھن ہے۔ یہ بنیادی طور پر مختلف ہیں۔</p>

      <div className="not-prose glass p-5 rounded-xl mb-6">
        <div className="space-y-3 text-sm">
          <div className="flex justify-between items-center border-b border-gray-700/50 pb-2">
            <span className="font-medium text-white">Upwork</span>
            <span className="text-gray-400">10-20%</span>
          </div>
          <div className="flex justify-between items-center border-b border-gray-700/50 pb-2">
            <span className="font-medium text-white">Fiverr</span>
            <span className="text-gray-400">20%</span>
          </div>
          <div className="flex justify-between items-center border-b border-gray-700/50 pb-2">
            <span className="font-medium text-white">Mostaql</span>
            <span className="text-gray-400">10%</span>
          </div>
          <div className="flex justify-between items-center border-b border-gray-700/50 pb-2">
            <span className="font-medium text-white">Khamsat</span>
            <span className="text-gray-400">20%</span>
          </div>
          <div className="flex justify-between items-center pb-2">
            <span className="font-medium text-white">Freelancer.com</span>
            <span className="text-gray-400">10-15%</span>
          </div>
        </div>
      </div>

      <h2>فری لانسرز کے لیے VAT قواعد (2026)</h2>
      <div className="not-prose glass p-5 rounded-xl mb-6">
        <div className="space-y-3">
          <div className="flex items-start gap-3">
            <DollarSign className="h-5 w-5 text-desert-accent mt-0.5 shrink-0" />
            <div>
              <strong className="text-white">لازمی رجسٹریشن:</strong>
              <p className="text-gray-400 text-sm">سالانہ آمدنی 375,000 SAR سے زیادہ ہو۔</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <DollarSign className="h-5 w-5 text-desert-accent mt-0.5 shrink-0" />
            <div>
              <strong className="text-white">رضاکارانہ رجسٹریشن:</strong>
              <p className="text-gray-400 text-sm">آمدنی 187,500 SAR سے 375,000 SAR کے درمیان ہو۔</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <DollarSign className="h-5 w-5 text-desert-accent mt-0.5 shrink-0" />
            <div>
              <strong className="text-white">حد سے نیچے:</strong>
              <p className="text-gray-400 text-sm">آمدنی 187,500 SAR سے کم ہو۔ رجسٹریشن ضروری نہیں۔</p>
            </div>
          </div>
        </div>
      </div>

      <h2>خالص فری لانس آمدنی کا حساب کیسے کریں</h2>
      <div className="not-prose glass p-5 rounded-xl mb-6">
        <div className="bg-[#0A0E1A] p-4 rounded-lg text-gray-300 text-sm font-mono">
          <p className="text-desert-primary font-bold">خالص آمدنی = کل آمدنی - پلیٹ فارم فیس - کاروباری اخراجات - VAT (اگر لاگو ہو)</p>
        </div>
      </div>

      <h2>عملی مثالیں</h2>

      <div className="not-prose glass p-5 rounded-xl mb-6">
        <h3 className="text-white font-semibold mb-3">مثال 1: Upwork پر گرافک ڈیزائنر (بین الاقوامی کلائنٹ، کوئی VAT نہیں)</h3>
        <div className="bg-[#0A0E1A] p-4 rounded-lg text-gray-300 text-sm space-y-1.5 font-mono">
          <p>کل آمدنی: $2,000 (≈ 7,500 SAR)</p>
          <p>Upwork فیس: $175</p>
          <p>فیس کے بعد آمدنی: $1,825 (≈ 6,844 SAR)</p>
          <p>ماہانہ اخراجات: 750 SAR</p>
          <p className="text-desert-primary font-bold mt-2">خالص ماہانہ آمدنی: 6,094 SAR</p>
        </div>
      </div>

      <div className="not-prose glass p-5 rounded-xl mb-6">
        <h3 className="text-white font-semibold mb-3">مثال 2: سعودی کلائنٹس کے ساتھ مقامی کنسلٹنٹ (VAT لاگو)</h3>
        <div className="bg-[#0A0E1A] p-4 rounded-lg text-gray-300 text-sm space-y-1.5 font-mono">
          <p>کل آمدنی: 20,000 SAR</p>
          <p>Mostaql فیس (10%): 2,000 SAR</p>
          <p>فیس کے بعد آمدنی: 18,000 SAR</p>
          <p>کاروباری اخراجات: 2,600 SAR</p>
          <p>VAT (15%): 2,310 SAR</p>
          <p className="text-desert-primary font-bold mt-2">خالص ماہانہ آمدنی: 13,090 SAR</p>
        </div>
      </div>

      <h2>فری لانسرز کے لیے قابل کٹوتی اخراجات</h2>
      <div className="not-prose glass p-5 rounded-xl mb-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
          <div className="bg-[#0A0E1A] p-3 rounded-lg">
            <h4 className="text-desert-primary font-semibold mb-1">ٹیکنالوجی اور سافٹ ویئر</h4>
            <ul className="text-gray-400 space-y-1">
              <li>سافٹ ویئر سبسکرپشنز</li>
              <li>ویب سائٹ ہوسٹنگ، ڈومین</li>
              <li>کلاؤڈ اسٹوریج</li>
              <li>پروجیکٹ مینجمنٹ ٹولز</li>
            </ul>
          </div>
          <div className="bg-[#0A0E1A] p-3 rounded-lg">
            <h4 className="text-desert-primary font-semibold mb-1">سامان اور ہارڈویئر</h4>
            <ul className="text-gray-400 space-y-1">
              <li>لیپ ٹاپ، ڈیسک ٹاپ، ٹیبلٹ</li>
              <li>مانیٹر، کی بورڈ، ماؤس</li>
              <li>کیمرہ، مائیکروفون</li>
              <li>آفس فرنیچر</li>
            </ul>
          </div>
          <div className="bg-[#0A0E1A] p-3 rounded-lg">
            <h4 className="text-desert-primary font-semibold mb-1">کام کی جگہ اور یوٹیلیٹیز</h4>
            <ul className="text-gray-400 space-y-1">
              <li>کو-ورکنگ اسپیس ممبرشپ</li>
              <li>ہوم آفس کرایہ/بجلی کا حصہ</li>
              <li>انٹرنیٹ اور فون بلز</li>
            </ul>
          </div>
          <div className="bg-[#0A0E1A] p-3 rounded-lg">
            <h4 className="text-desert-primary font-semibold mb-1">پیشہ ورانہ خدمات</h4>
            <ul className="text-gray-400 space-y-1">
              <li>اکاؤنٹنگ فیس</li>
              <li>قانونی مشاورت</li>
              <li>پیشہ ورانہ سرٹیفیکیشنز</li>
            </ul>
          </div>
        </div>
      </div>

      <h2>Sauditoolhub Freelance Income Calculator</h2>
      <div className="not-prose glass p-6 rounded-xl mb-8">
        <Link href="/freelance-income-calculator" className="inline-flex items-center gap-2 rounded-xl bg-desert-primary px-8 py-3 text-sm font-bold text-white transition-all hover:bg-desert-primary-dim">
          <Calculator className="h-4 w-4" />
          اپنی خالص آمدنی کا حساب لگائیں
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
        سعودی عرب میں فری لانسنگ بہت مواقع فراہم کرتی ہے، لیکن مالی کامیابی کے لیے فیس، ٹیکس اور قواعد کو سمجھنا ضروری ہے۔{' '}
        <Link href="/freelance-income-calculator" className="text-desert-primary font-bold underline">Freelance Income Calculator</Link>
        {' '}استعمال کریں۔{' '}
        <Link href="/zatca-vat-calculator" className="text-desert-primary font-bold underline">VAT Calculator</Link>
        {' '}اور{' '}
        <Link href="/salla-profit-calculator" className="text-desert-primary font-bold underline">Salla/Zid Profit Calculator</Link>
        {' '}بھی دیکھیں۔{' '}
        <Link href="/blog" className="text-desert-primary font-bold underline">بلاگ</Link> پر مزید۔
      </p>

      <div className="not-prose glass p-6 rounded-xl mt-8 text-center">
        <Calculator className="h-10 w-10 text-desert-primary mx-auto mb-3" />
        <h3 className="text-white text-lg font-bold mb-2">اپنی حقیقی فری لانس آمدنی جانیں</h3>
        <p className="text-gray-400 text-sm mb-4">مفت کیلکولیٹر — فوری نتائج، رجسٹریشن کی ضرورت نہیں</p>
        <Link href="/freelance-income-calculator" className="inline-flex items-center gap-2 rounded-xl bg-desert-primary px-8 py-3 text-sm font-bold text-white transition-all hover:bg-desert-primary-dim">
          <Calculator className="h-4 w-4" />
          حساب لگائیں
        </Link>
      </div>
    </article>
  )
}

function TlContent() {
  return (
    <article className="prose prose-invert max-w-none prose-headings:text-desert-primary prose-a:text-desert-primary prose-strong:text-white prose-li:text-gray-300">
      <h1>Kumpletong Gabay sa Freelance Income at Buwis sa Saudi Arabia 2026</h1>

      <div className="not-prose glass p-6 rounded-xl mb-8">
        <p className="text-gray-300 text-lg leading-relaxed">
          Ang gig economy ay lumalago nang mabilis sa Saudi Arabia. Dahil sa Vision 2030 na nagtutulak ng digital transformation, mas maraming Saudis at expats ang lumilipat sa freelancing platforms tulad ng Upwork, Fiverr, Mostaql, at Khamsat upang kumita. Kahit ikaw ay isang graphic designer sa Riyadh, content writer sa Jeddah, programmer sa Dammam, o consultant na nagtatrabaho nang malayuan mula kahit saan sa kaharian, ang pag-unawa sa iyong tunay na netong kita pagkatapos ng platform fees, buwis, at business expenses ay kritikal para sa tagumpay sa pananalapi.
        </p>
        <p className="text-gray-300 text-lg leading-relaxed mt-4">
          Ang komprehensibong gabay na ito ay sumasaklaw sa <strong>lahat ng kailangan mong malaman tungkol sa freelance income at buwis sa Saudi Arabia sa 2026</strong>.
        </p>
        <p className="text-gray-300 text-lg leading-relaxed mt-4">
          Gamitin ang aming libreng{' '}
          <Link href="/freelance-income-calculator" className="text-desert-primary font-bold underline">
            Freelance Income Calculator
          </Link>.
        </p>
      </div>

      <h2>Legal Framework para sa Freelancers sa Saudi Arabia</h2>

      <h3>Ano ang Watheq (Freelance) Certificate?</h3>
      <p>
        Ang Watheq (وثق) ay ang opisyal na freelance certificate na inisyu ng Ministry of Human Resources and Social Development sa pamamagitan ng freelance.sa platform. Ito ang iyong legal na awtorisasyon upang magtrabaho bilang freelancer sa Saudi Arabia. Kung wala nito, ang iyong freelance income ay maaaring ituring na ilegal, at maaari kang maharap sa mga parusa tulad ng multa o deportasyon para sa mga expat.
      </p>

      <div className="not-prose glass p-5 rounded-xl mb-6">
        <h3 className="text-white font-semibold mb-2">Watheq Certificate Fast Facts (2026)</h3>
        <ul className="space-y-2 text-gray-400 text-sm">
          <li><CheckCircle className="h-4 w-4 text-desert-primary inline mr-2" />Gastos: 1,000-2,000 SAR (depende sa professional category)</li>
          <li><CheckCircle className="h-4 w-4 text-desert-primary inline mr-2" />Validity: 1 taon (renewable annually)</li>
          <li><CheckCircle className="h-4 w-4 text-desert-primary inline mr-2" />Platform: freelance.sa</li>
          <li><CheckCircle className="h-4 w-4 text-desert-primary inline mr-2" />100+ professional categories available</li>
          <li><CheckCircle className="h-4 w-4 text-desert-primary inline mr-2" />Hindi kailangan ng Commercial Registration</li>
        </ul>
      </div>

      <h3>Kailangan ba ng Commercial Registration (CR) para mag-freelance?</h3>
      <p>
        <strong>Hindi, hindi kailangan ng CR kung mayroon kang valid na Watheq certificate.</strong> Ang Watheq certificate ay dinisenyo para payagan ang mga indibidwal na mag-freelance nang walang CR. Gayunpaman, kung ang iyong taunang kita ay lumampas sa 375,000 SAR o gusto mong kumuha ng mga empleyado, maaaring kailanganin mong magrehistro ng business entity.
      </p>

      <h2>Platform Fees vs. Government Taxes</h2>
      <p>Isa sa pinakamalaking pagkakamali ng freelancers ay ang pagkalito sa platform fees at buwis. Ang mga ito ay magkaiba.</p>

      <div className="not-prose glass p-5 rounded-xl mb-6">
        <div className="space-y-3 text-sm">
          <div className="flex justify-between items-center border-b border-gray-700/50 pb-2">
            <span className="font-medium text-white">Upwork</span>
            <span className="text-gray-400">10-20%</span>
          </div>
          <div className="flex justify-between items-center border-b border-gray-700/50 pb-2">
            <span className="font-medium text-white">Fiverr</span>
            <span className="text-gray-400">20%</span>
          </div>
          <div className="flex justify-between items-center border-b border-gray-700/50 pb-2">
            <span className="font-medium text-white">Mostaql</span>
            <span className="text-gray-400">10%</span>
          </div>
          <div className="flex justify-between items-center border-b border-gray-700/50 pb-2">
            <span className="font-medium text-white">Khamsat</span>
            <span className="text-gray-400">20%</span>
          </div>
          <div className="flex justify-between items-center pb-2">
            <span className="font-medium text-white">Freelancer.com</span>
            <span className="text-gray-400">10-15%</span>
          </div>
        </div>
      </div>

      <h2>VAT Rules para sa Freelancers (2026)</h2>
      <div className="not-prose glass p-5 rounded-xl mb-6">
        <div className="space-y-3">
          <div className="flex items-start gap-3">
            <DollarSign className="h-5 w-5 text-desert-accent mt-0.5 shrink-0" />
            <div>
              <strong className="text-white">Mandatory Registration:</strong>
              <p className="text-gray-400 text-sm">Taunang kita ay lampas sa 375,000 SAR.</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <DollarSign className="h-5 w-5 text-desert-accent mt-0.5 shrink-0" />
            <div>
              <strong className="text-white">Voluntary Registration:</strong>
              <p className="text-gray-400 text-sm">Kita sa pagitan ng 187,500 SAR at 375,000 SAR.</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <DollarSign className="h-5 w-5 text-desert-accent mt-0.5 shrink-0" />
            <div>
              <strong className="text-white">Below Threshold:</strong>
              <p className="text-gray-400 text-sm">Kita ay mas mababa sa 187,500 SAR. Hindi kailangan ng registration.</p>
            </div>
          </div>
        </div>
      </div>

      <h2>Paano Kalkulahin ang Tunay na Net Freelance Income</h2>
      <div className="not-prose glass p-5 rounded-xl mb-6">
        <div className="bg-[#0A0E1A] p-4 rounded-lg text-gray-300 text-sm font-mono">
          <p className="text-desert-primary font-bold">Net Income = Gross Income - Platform Fees - Business Expenses - VAT (kung applicable)</p>
        </div>
      </div>

      <h2>Real-Life Calculation Examples</h2>

      <div className="not-prose glass p-5 rounded-xl mb-6">
        <h3 className="text-white font-semibold mb-3">Example 1: Graphic Designer sa Upwork (International Client, Walang VAT)</h3>
        <div className="bg-[#0A0E1A] p-4 rounded-lg text-gray-300 text-sm space-y-1.5 font-mono">
          <p>Gross Income: $2,000 (≈ 7,500 SAR)</p>
          <p>Upwork Fee: $175</p>
          <p>Income After Fee: $1,825 (≈ 6,844 SAR)</p>
          <p>Monthly Expenses: 750 SAR</p>
          <p className="text-desert-primary font-bold mt-2">Net Monthly Income: 6,094 SAR</p>
        </div>
      </div>

      <div className="not-prose glass p-5 rounded-xl mb-6">
        <h3 className="text-white font-semibold mb-3">Example 2: Local Consultant na may Saudi Clients (May VAT)</h3>
        <div className="bg-[#0A0E1A] p-4 rounded-lg text-gray-300 text-sm space-y-1.5 font-mono">
          <p>Gross Income: 20,000 SAR</p>
          <p>Mostaql Fee (10%): 2,000 SAR</p>
          <p>Income After Fee: 18,000 SAR</p>
          <p>Business Expenses: 2,600 SAR</p>
          <p>VAT (15%): 2,310 SAR</p>
          <p className="text-desert-primary font-bold mt-2">Net Monthly Income: 13,090 SAR</p>
        </div>
      </div>

      <h2>Tax Deductions para sa Saudi Freelancers</h2>
      <div className="not-prose glass p-5 rounded-xl mb-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
          <div className="bg-[#0A0E1A] p-3 rounded-lg">
            <h4 className="text-desert-primary font-semibold mb-1">Teknolohiya at Software</h4>
            <ul className="text-gray-400 space-y-1">
              <li>Software subscriptions</li>
              <li>Website hosting, domain</li>
              <li>Cloud storage</li>
            </ul>
          </div>
          <div className="bg-[#0A0E1A] p-3 rounded-lg">
            <h4 className="text-desert-primary font-semibold mb-1">Equipment at Hardware</h4>
            <ul className="text-gray-400 space-y-1">
              <li>Laptop, desktop, tablet</li>
              <li>Monitor, keyboard, mouse</li>
              <li>Camera, microphone</li>
            </ul>
          </div>
          <div className="bg-[#0A0E1A] p-3 rounded-lg">
            <h4 className="text-desert-primary font-semibold mb-1">Workspace at Utilities</h4>
            <ul className="text-gray-400 space-y-1">
              <li>Co-working space membership</li>
              <li>Home office rent/electricity</li>
              <li>Internet at phone bills</li>
            </ul>
          </div>
          <div className="bg-[#0A0E1A] p-3 rounded-lg">
            <h4 className="text-desert-primary font-semibold mb-1">Professional Services</h4>
            <ul className="text-gray-400 space-y-1">
              <li>Accounting fees</li>
              <li>Legal consultation</li>
              <li>Professional certifications</li>
            </ul>
          </div>
        </div>
      </div>

      <h2>Sauditoolhub Freelance Income Calculator</h2>
      <div className="not-prose glass p-6 rounded-xl mb-8">
        <Link href="/freelance-income-calculator" className="inline-flex items-center gap-2 rounded-xl bg-desert-primary px-8 py-3 text-sm font-bold text-white transition-all hover:bg-desert-primary-dim">
          <Calculator className="h-4 w-4" />
          Kalkulahin ang Net Income Ngayon
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
        Ang freelancing sa Saudi Arabia ay nag-aalok ng napakalaking oportunidad, ngunit ang tagumpay sa pananalapi ay nangangailangan ng malinaw na pag-unawa sa mga fees, buwis, at regulasyon. Gamitin ang{' '}
        <Link href="/freelance-income-calculator" className="text-desert-primary font-bold underline">Freelance Income Calculator</Link>
        {' '}ng Sauditoolhub. Tingnan din ang{' '}
        <Link href="/zatca-vat-calculator" className="text-desert-primary font-bold underline">VAT Calculator</Link>
        {' '}at{' '}
        <Link href="/salla-profit-calculator" className="text-desert-primary font-bold underline">Salla/Zid Profit Calculator</Link>
        . Bisitahin ang aming{' '}
        <Link href="/blog" className="text-desert-primary font-bold underline">Blog</Link>.
      </p>

      <div className="not-prose glass p-6 rounded-xl mt-8 text-center">
        <Calculator className="h-10 w-10 text-desert-primary mx-auto mb-3" />
        <h3 className="text-white text-lg font-bold mb-2">Alamin ang Iyong Tunay na Freelance Income</h3>
        <p className="text-gray-400 text-sm mb-4">Libreng calculator — instant results, walang signup</p>
        <Link href="/freelance-income-calculator" className="inline-flex items-center gap-2 rounded-xl bg-desert-primary px-8 py-3 text-sm font-bold text-white transition-all hover:bg-desert-primary-dim">
          <Calculator className="h-4 w-4" />
          Kalkulahin Ngayon
        </Link>
      </div>
    </article>
  )
}

function BnContent() {
  return (
    <article className="prose prose-invert max-w-none prose-headings:text-desert-primary prose-a:text-desert-primary prose-strong:text-white prose-li:text-gray-300">
      <h1>সৌদি আরবে ফ্রিল্যান্স আয় ও কর সম্পূর্ণ গাইড 2026</h1>

      <div className="not-prose glass p-6 rounded-xl mb-8">
        <p className="text-gray-300 text-lg leading-relaxed">
          সৌদি আরবে গিগ ইকোনমি দ্রুত প্রসারিত হচ্ছে। ভিশন ২০৩০-এর ডিজিটাল রূপান্তরের ফলে, আরও বেশি সৌদি ও প্রবাসী Upwork, Fiverr, Mostaql এবং Khamsat-এর মতো ফ্রিল্যান্সিং প্ল্যাটফর্মে আয় করতে যোগ দিচ্ছেন। আপনি রিয়াদের গ্রাফিক ডিজাইনার হন, জেদ্দার কন্টেন্ট রাইটার, দাম্মামের প্রোগ্রামার বা যেকোনো জায়গা থেকে রিমোট পরামর্শক — প্ল্যাটফর্ম ফি, কর এবং ব্যবসায়িক ব্যয়ের পর আপনার প্রকৃত নিট আয় বোঝা আর্থিক সাফল্যের জন্য অপরিহার্য।
        </p>
        <p className="text-gray-300 text-lg leading-relaxed mt-4">
          এই বিস্তৃত গাইডটি <strong>২০২৬ সালে সৌদি আরবে ফ্রিল্যান্স আয় এবং কর সম্পর্কে আপনার যা জানা দরকার</strong> সবকিছু কভার করে।
        </p>
        <p className="text-gray-300 text-lg leading-relaxed mt-4">
          আমাদের বিনামূল্যের{' '}
          <Link href="/freelance-income-calculator" className="text-desert-primary font-bold underline">
            Freelance Income Calculator
          </Link>{' '}
          ব্যবহার করুন।
        </p>
      </div>

      <h2>সৌদি আরবে ফ্রিল্যান্সারদের জন্য আইনি কাঠামো</h2>

      <h3>ওয়াথেক (ফ্রিল্যান্স) সার্টিফিকেট কী?</h3>
      <p>
        ওয়াথেক (وثق) হল মানবসম্পদ ও সামাজিক উন্নয়ন মন্ত্রণালয়ের freelance.sa প্ল্যাটফর্মের মাধ্যমে ইস্যু করা অফিসিয়াল ফ্রিল্যান্স সার্টিফিকেট। এটি সৌদি আরবে ফ্রিল্যান্সার হিসেবে কাজ করার আপনার আইনি অনুমতি। এটি ছাড়া, আপনার ফ্রিল্যান্স আয় অবৈধ বলে বিবেচিত হতে পারে এবং আপনাকে জরিমানা বা প্রবাসীদের জন্য নির্বাসনের মুখোমুখি হতে পারে।
      </p>

      <div className="not-prose glass p-5 rounded-xl mb-6">
        <h3 className="text-white font-semibold mb-2">ওয়াথেক সার্টিফিকেট দ্রুত তথ্য (২০২৬)</h3>
        <ul className="space-y-2 text-gray-400 text-sm">
          <li><CheckCircle className="h-4 w-4 text-desert-primary inline mr-2" />খরচ: ১,০০০-২,০০০ SAR (পেশাদার ক্যাটাগরির উপর নির্ভর করে)</li>
          <li><CheckCircle className="h-4 w-4 text-desert-primary inline mr-2" />মেয়াদ: ১ বছর (বার্ষিক নবায়নযোগ্য)</li>
          <li><CheckCircle className="h-4 w-4 text-desert-primary inline mr-2" />প্ল্যাটফর্ম: freelance.sa</li>
          <li><CheckCircle className="h-4 w-4 text-desert-primary inline mr-2" />১০০+ পেশাদার ক্যাটাগরি উপলব্ধ</li>
          <li><CheckCircle className="h-4 w-4 text-desert-primary inline mr-2" />বাণিজ্যিক নিবন্ধনের প্রয়োজন নেই</li>
        </ul>
      </div>

      <h3>ফ্রিল্যান্স করার জন্য কি বাণিজ্যিক নিবন্ধন (CR) প্রয়োজন?</h3>
      <p>
        <strong>না, আপনার যদি বৈধ ওয়াথেক সার্টিফিকেট থাকে তবে CR প্রয়োজন নেই।</strong> তবে, যদি আপনার বার্ষিক আয় ৩৭৫,০০০ SAR ছাড়িয়ে যায় বা আপনি কর্মচারী নিয়োগ দিতে চান, তাহলে ব্যবসায়িক সত্তা নিবন্ধনের প্রয়োজন হতে পারে।
      </p>

      <h2>প্ল্যাটফর্ম ফি বনাম সরকারি কর</h2>
      <p>ফ্রিল্যান্সারদের সবচেয়ে বড় ভুল হল প্ল্যাটফর্ম ফি এবং করের মধ্যে বিভ্রান্তি। এগুলি মৌলিকভাবে ভিন্ন।</p>

      <div className="not-prose glass p-5 rounded-xl mb-6">
        <div className="space-y-3 text-sm">
          <div className="flex justify-between items-center border-b border-gray-700/50 pb-2">
            <span className="font-medium text-white">Upwork</span>
            <span className="text-gray-400">১০-২০%</span>
          </div>
          <div className="flex justify-between items-center border-b border-gray-700/50 pb-2">
            <span className="font-medium text-white">Fiverr</span>
            <span className="text-gray-400">২০%</span>
          </div>
          <div className="flex justify-between items-center border-b border-gray-700/50 pb-2">
            <span className="font-medium text-white">Mostaql</span>
            <span className="text-gray-400">১০%</span>
          </div>
          <div className="flex justify-between items-center border-b border-gray-700/50 pb-2">
            <span className="font-medium text-white">Khamsat</span>
            <span className="text-gray-400">২০%</span>
          </div>
          <div className="flex justify-between items-center pb-2">
            <span className="font-medium text-white">Freelancer.com</span>
            <span className="text-gray-400">১০-১৫%</span>
          </div>
        </div>
      </div>

      <h2>ফ্রিল্যান্সারদের জন্য VAT নিয়ম (২০২৬)</h2>
      <div className="not-prose glass p-5 rounded-xl mb-6">
        <div className="space-y-3">
          <div className="flex items-start gap-3">
            <DollarSign className="h-5 w-5 text-desert-accent mt-0.5 shrink-0" />
            <div>
              <strong className="text-white">বাধ্যতামূলক নিবন্ধন:</strong>
              <p className="text-gray-400 text-sm">বার্ষিক আয় ৩৭৫,০০০ SAR-এর বেশি।</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <DollarSign className="h-5 w-5 text-desert-accent mt-0.5 shrink-0" />
            <div>
              <strong className="text-white">স্বেচ্ছাসেবী নিবন্ধন:</strong>
              <p className="text-gray-400 text-sm">আয় ১৮৭,৫০০ SAR থেকে ৩৭৫,০০০ SAR-এর মধ্যে।</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <DollarSign className="h-5 w-5 text-desert-accent mt-0.5 shrink-0" />
            <div>
              <strong className="text-white">সীমার নিচে:</strong>
              <p className="text-gray-400 text-sm">আয় ১৮৭,৫০০ SAR-এর কম। নিবন্ধনের প্রয়োজন নেই।</p>
            </div>
          </div>
        </div>
      </div>

      <h2>প্রকৃত নিট ফ্রিল্যান্স আয় গণনার পদ্ধতি</h2>
      <div className="not-prose glass p-5 rounded-xl mb-6">
        <div className="bg-[#0A0E1A] p-4 rounded-lg text-gray-300 text-sm font-mono">
          <p className="text-desert-primary font-bold">নিট আয় = মোট আয় - প্ল্যাটফর্ম ফি - ব্যবসায়িক ব্যয় - VAT (যদি প্রযোজ্য হয়)</p>
        </div>
      </div>

      <h2>বাস্তব উদাহরণ</h2>

      <div className="not-prose glass p-5 rounded-xl mb-6">
        <h3 className="text-white font-semibold mb-3">উদাহরণ ১: Upwork-এ গ্রাফিক ডিজাইনার (আন্তর্জাতিক ক্লায়েন্ট, কোনো VAT নেই)</h3>
        <div className="bg-[#0A0E1A] p-4 rounded-lg text-gray-300 text-sm space-y-1.5 font-mono">
          <p>মোট আয়: $২,০০০ (≈ ৭,৫০০ SAR)</p>
          <p>Upwork ফি: $১৭৫</p>
          <p>ফির পর আয়: $১,৮২৫ (≈ ৬,৮৪৪ SAR)</p>
          <p>মাসিক ব্যয়: ৭৫০ SAR</p>
          <p className="text-desert-primary font-bold mt-2">নিট মাসিক আয়: ৬,০৯৪ SAR</p>
        </div>
      </div>

      <div className="not-prose glass p-5 rounded-xl mb-6">
        <h3 className="text-white font-semibold mb-3">উদাহরণ ২: সৌদি ক্লায়েন্টদের সাথে স্থানীয় পরামর্শক (VAT প্রযোজ্য)</h3>
        <div className="bg-[#0A0E1A] p-4 rounded-lg text-gray-300 text-sm space-y-1.5 font-mono">
          <p>মোট আয়: ২০,০০০ SAR</p>
          <p>Mostaql ফি (১০%): ২,০০০ SAR</p>
          <p>ফির পর আয়: ১৮,০০০ SAR</p>
          <p>ব্যবসায়িক ব্যয়: ২,৬০০ SAR</p>
          <p>VAT (১৫%): ২,৩১০ SAR</p>
          <p className="text-desert-primary font-bold mt-2">নিট মাসিক আয়: ১৩,০৯০ SAR</p>
        </div>
      </div>

      <h2>ফ্রিল্যান্সারদের জন্য কর কর্তন</h2>
      <div className="not-prose glass p-5 rounded-xl mb-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
          <div className="bg-[#0A0E1A] p-3 rounded-lg">
            <h4 className="text-desert-primary font-semibold mb-1">প্রযুক্তি ও সফটওয়্যার</h4>
            <ul className="text-gray-400 space-y-1">
              <li>সফটওয়্যার সাবস্ক্রিপশন</li>
              <li>ওয়েবসাইট হোস্টিং, ডোমেইন</li>
              <li>ক্লাউড স্টোরেজ</li>
            </ul>
          </div>
          <div className="bg-[#0A0E1A] p-3 rounded-lg">
            <h4 className="text-desert-primary font-semibold mb-1">সরঞ্জাম ও হার্ডওয়্যার</h4>
            <ul className="text-gray-400 space-y-1">
              <li>ল্যাপটপ, ডেস্কটপ, ট্যাবলেট</li>
              <li>মনিটর, কিবোর্ড, মাউস</li>
              <li>ক্যামেরা, মাইক্রোফোন</li>
            </ul>
          </div>
          <div className="bg-[#0A0E1A] p-3 rounded-lg">
            <h4 className="text-desert-primary font-semibold mb-1">কর্মক্ষেত্র ও ইউটিলিটি</h4>
            <ul className="text-gray-400 space-y-1">
              <li>কো-ওয়ার্কিং স্পেস মেম্বারশিপ</li>
              <li>হোম অফিস ভাড়া/বিদ্যুৎ</li>
              <li>ইন্টারনেট ও ফোন বিল</li>
            </ul>
          </div>
          <div className="bg-[#0A0E1A] p-3 rounded-lg">
            <h4 className="text-desert-primary font-semibold mb-1">পেশাদার সেবা</h4>
            <ul className="text-gray-400 space-y-1">
              <li>হিসাবরক্ষণ ফি</li>
              <li>আইনি পরামর্শ</li>
              <li>পেশাদার সার্টিফিকেশন</li>
            </ul>
          </div>
        </div>
      </div>

      <h2>Sauditoolhub Freelance Income Calculator</h2>
      <div className="not-prose glass p-6 rounded-xl mb-8">
        <Link href="/freelance-income-calculator" className="inline-flex items-center gap-2 rounded-xl bg-desert-primary px-8 py-3 text-sm font-bold text-white transition-all hover:bg-desert-primary-dim">
          <Calculator className="h-4 w-4" />
          এখনই নিট আয় গণনা করুন
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
        সৌদি আরবে ফ্রিল্যান্সিং অসাধারণ সুযোগ দেয়, তবে আর্থিক সাফল্যের জন্য ফি, কর এবং নিয়মকানুন বোঝা প্রয়োজন।{' '}
        <Link href="/freelance-income-calculator" className="text-desert-primary font-bold underline">Freelance Income Calculator</Link>
        {' '}ব্যবহার করুন।{' '}
        <Link href="/zatca-vat-calculator" className="text-desert-primary font-bold underline">VAT Calculator</Link>
        {' '}এবং{' '}
        <Link href="/salla-profit-calculator" className="text-desert-primary font-bold underline">Salla/Zid Profit Calculator</Link>
        {' '}ও দেখুন। আমাদের{' '}
        <Link href="/blog" className="text-desert-primary font-bold underline">ব্লগ</Link> দেখুন।
      </p>

      <div className="not-prose glass p-6 rounded-xl mt-8 text-center">
        <Calculator className="h-10 w-10 text-desert-primary mx-auto mb-3" />
        <h3 className="text-white text-lg font-bold mb-2">আপনার প্রকৃত ফ্রিল্যান্স আয় জানুন</h3>
        <p className="text-gray-400 text-sm mb-4">বিনামূল্যের ক্যালকুলেটর — তাত্ক্ষণিক ফলাফল, নিবন্ধনের প্রয়োজন নেই</p>
        <Link href="/freelance-income-calculator" className="inline-flex items-center gap-2 rounded-xl bg-desert-primary px-8 py-3 text-sm font-bold text-white transition-all hover:bg-desert-primary-dim">
          <Calculator className="h-4 w-4" />
          এখনই গণনা করুন
        </Link>
      </div>
    </article>
  )
}

export default async function FreelanceIncomeTaxGuidePage({ params }: Props) {
  const { locale } = await params
  const isAr = locale === 'ar'
  const isUr = locale === 'ur'
  const isTl = locale === 'tl'
  const isBn = locale === 'bn'
  const isDefault = locale === 'en'
  const pageUrl = isDefault ? `${baseUrl}/guide/freelance-income-calculator-saudi-arabia-2026` : `${baseUrl}/${locale}/guide/freelance-income-calculator-saudi-arabia-2026`

  const schema = isAr ? schemaAr : isUr ? schemaUr : isTl ? schemaTl : isBn ? schemaBn : articleSchemaEn
  const faqItems = isAr ? faqsAr : isUr ? faqsUr : isTl ? faqsTl : isBn ? faqsBn : faqsEn

  return (
    <>
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
