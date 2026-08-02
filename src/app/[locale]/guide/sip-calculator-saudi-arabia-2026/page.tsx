import type { Metadata } from 'next'
import Link from 'next/link'
import { Calculator, TrendingUp, DollarSign, Building2, Landmark, Shield, BarChart3, Users, Briefcase, Percent, Clock, Target, Award, PiggyBank, ArrowUpRight, CheckCircle, AlertTriangle, BookOpen, Smartphone, Globe, Search, Star, Info, LineChart, Wallet, BadgePercent, CircleDollarSign } from 'lucide-react'

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
    ? 'الدليل الكامل للاستثمار في صناديق الاستثمار الدوري في السعودية 2026 | Sauditoolhub'
    : isUr
    ? 'سعودی عرب میں میوچل فنڈز اور ماہانہ سرمایہ کاری کی مکمل گائیڈ 2026 | Sauditoolhub'
    : isTl
    ? 'Kumpletong Gabay sa SIP at Mutual Fund Investment Returns sa Saudi Arabia 2026 | Sauditoolhub'
    : isBn
    ? 'সৌদি আরবে SIP ও মিউচুয়াল ফান্ড বিনিয়োগ রিটার্নের সম্পূর্ণ গাইড ২০২৬ | Sauditoolhub'
    : 'The Complete Guide to SIP & Mutual Fund Investment Returns in Saudi Arabia 2026 | Sauditoolhub'

  const description = isAr
    ? 'دليل كامل للاستثمار في صناديق الاستثمار الدوري في السعودية 2026. تعرف على كيفية عمل خطط الاستثمار الدوري، أفضل منصات مثل الراجحي المالية ودراية، حساب العائد المركب، وقواعد هيئة السوق المالية للصناديق المتوافقة مع الشريعة.'
    : isUr
    ? 'سعودی عرب میں میوچل فنڈز اور ماہانہ سرمایہ کاری کی مکمل گائیڈ 2026۔ جانیے SIP کیسے کام کرتی ہے، الراجی کیپٹل اور درایہ جیسے پلیٹ فارمز کا موازنہ، کمپاؤنڈ ریٹرن کا حساب، اور CMA کے قوانین۔'
    : isTl
    ? 'Kumpletong gabay sa SIP at mutual fund investments sa Saudi Arabia 2026. Alamin kung paano gumagana ang SIP, ihambing ang Al Rajhi Capital at Derayah, kalkulahin ang compound returns, at unawain ang CMA regulations.'
    : isBn
    ? 'সৌদি আরবে SIP ও মিউচুয়াল ফান্ড বিনিয়োগের সম্পূর্ণ গাইড ২০২৬। জানুন কীভাবে SIP কাজ করে, আল রাজি ক্যাপিটাল ও দেরায়াহ-এর মতো প্ল্যাটফর্ম তুলনা করুন এবং CMA নিয়মাবলী বুঝুন।'
    : 'Complete guide to SIP and mutual fund investments in Saudi Arabia 2026. Learn how SIP works, compare top platforms like Al Rajhi Capital and Derayah, calculate compound returns, and understand CMA regulations for Sharia-compliant investing.'

  return {
    title,
    description,
    alternates: {
      canonical: isDefault ? '/guide/sip-calculator-saudi-arabia-2026' : `/${locale}/guide/sip-calculator-saudi-arabia-2026`,
      languages: {
        en: '/guide/sip-calculator-saudi-arabia-2026',
        ar: '/ar/guide/sip-calculator-saudi-arabia-2026',
        ur: '/ur/guide/sip-calculator-saudi-arabia-2026',
        tl: '/tl/guide/sip-calculator-saudi-arabia-2026',
        bn: '/bn/guide/sip-calculator-saudi-arabia-2026',
      },
    },
    openGraph: {
      title,
      description,
      url: isDefault ? '/guide/sip-calculator-saudi-arabia-2026' : `/${locale}/guide/sip-calculator-saudi-arabia-2026`,
      siteName: 'Sauditoolhub',
      locale: isAr ? 'ar_SA' : isUr ? 'ur_PK' : isTl ? 'tl_PH' : isBn ? 'bn_BD' : 'en_US',
      type: 'article',
      publishedTime: '2026-03-20',
      modifiedTime: '2026-07-01',
    },
    twitter: { card: 'summary_large_image', title, description },
    robots: { index: true, follow: true },
  }
}

const articleSchemaEn = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'The Complete Guide to SIP & Mutual Fund Investment Returns in Saudi Arabia 2026',
  description: 'Complete guide to SIP and mutual fund investments in Saudi Arabia. Learn how SIP works, compare platforms like Al Rajhi Capital and Derayah, calculate compound returns, and understand CMA regulations for Sharia-compliant investing.',
  author: { '@type': 'Person', name: 'Sauditoolhub Team' },
  publisher: { '@type': 'Organization', name: 'Sauditoolhub', logo: { '@type': 'ImageObject', url: '/logo.png' } },
  datePublished: '2026-03-20',
  dateModified: '2026-07-01',
}

const schemaAr = { ...articleSchemaEn, headline: 'الدليل الكامل للاستثمار في صناديق الاستثمار الدوري في السعودية 2026', description: 'دليل كامل للاستثمار في صناديق الاستثمار الدوري في السعودية. تعرف على كيفية عمل خطط الاستثمار الدوري، أفضل منصات مثل الراجحي المالية ودراية، حساب العائد المركب، وقواعد هيئة السوق المالية للصناديق المتوافقة مع الشريعة.' }
const schemaUr = { ...articleSchemaEn, headline: 'سعودی عرب میں میوچل فنڈز اور ماہانہ سرمایہ کاری کی مکمل گائیڈ 2026', description: 'سعودی عرب میں میوچل فنڈز اور ماہانہ سرمایہ کاری کی مکمل گائیڈ۔ جانیے SIP کیسے کام کرتی ہے، الراجی کیپٹل اور درایہ جیسے پلیٹ فارمز کا موازنہ، کمپاؤنڈ ریٹرن کا حساب، اور CMA کے قوانین۔' }
const schemaTl = { ...articleSchemaEn, headline: 'Kumpletong Gabay sa SIP at Mutual Fund Investment Returns sa Saudi Arabia 2026', description: 'Kumpletong gabay sa SIP at mutual fund investments sa Saudi Arabia. Alamin kung paano gumagana ang SIP, ihambing ang Al Rajhi Capital at Derayah, kalkulahin ang compound returns, at unawain ang CMA regulations.' }
const schemaBn = { ...articleSchemaEn, headline: 'সৌদি আরবে SIP ও মিউচুয়াল ফান্ড বিনিয়োগ রিটার্নের সম্পূর্ণ গাইড ২০২৬', description: 'সৌদি আরবে SIP ও মিউচুয়াল ফান্ড বিনিয়োগের সম্পূর্ণ গাইড। জানুন কীভাবে SIP কাজ করে, আল রাজি ক্যাপিটাল ও দেরায়াহ-এর মতো প্ল্যাটফর্ম তুলনা করুন এবং CMA নিয়मাবলী বুঝুন।' }

const faqsEn = [
  { question: 'What is a Systematic Investment Plan (SIP) and how does it work in Saudi Arabia?', answer: 'A Systematic Investment Plan (SIP) is a disciplined investment method where you invest a fixed amount of money at regular intervals (usually monthly) into a mutual fund. In Saudi Arabia, platforms like Al Rajhi Capital, SNB Capital, and Derayah offer SIP options starting from as low as 100 SAR per month. Your money buys fund units at the prevailing Net Asset Value (NAV), benefiting from rupee-cost averaging and the power of compounding over time. SIP removes the need to time the market and helps build long-term wealth through consistent investing.' },
  { question: 'What is the average SIP return rate for mutual funds in Saudi Arabia?', answer: 'SIP returns in Saudi Arabia vary by fund type. Money market funds typically return 4-6% annually, balanced funds return 6-8%, and equity funds can return 8-12% or more over the long term. Sharia-compliant equity funds managed by Al Rajhi Capital and SNB Capital have historically delivered 8-10% annualized returns over 5-10 year periods. However, past performance does not guarantee future results. Use the Sauditoolhub SIP Calculator to model different return scenarios based on your specific investment amount and time horizon.' },
  { question: 'What is the minimum amount required to start a SIP in Saudi banks?', answer: 'Minimum SIP investment amounts vary by platform. Al Rajhi Capital typically requires 500 SAR per month per fund. SNB Capital starts from 1,000 SAR for most funds. Derayah allows SIP investments from as low as 100 SAR in select funds. Abyan Capital and Malaa robo-advisors have flexible minimums starting around 500 SAR. Some funds offer lower entry points for specific Sharia-compliant funds. The key is to start with whatever amount you can consistently invest each month.' },
  { question: 'Which Saudi banks and platforms offer mutual fund SIP investments?', answer: 'Major Saudi banks offering mutual fund SIPs include: Al Rajhi Capital (Al Rajhi Bank), SNB Capital (Saudi National Bank), Riyad Capital (Riyad Bank), SABB Capital, Saudi Fransi Capital, and Alinma Investment. Independent robo-advisors include Derayah Smart (digital investment platform), Malaa (automated wealth management), and Abyan Capital (Sharia-compliant robo-advisory). All are regulated by the Capital Market Authority (CMA) under the Saudi Capital Market Law.' },
  { question: 'Is SIP investment Sharia-compliant in Saudi Arabia?', answer: 'Many mutual funds in Saudi Arabia are Sharia-compliant. The CMA requires all publicly offered funds to clearly state their Sharia status. Al Rajhi Capital exclusively offers Sharia-compliant funds operating under Islamic principles. SNB Capital offers both conventional and Sharia-compliant options. Sharia-compliant funds avoid interest (riba), prohibited industries (alcohol, tobacco, gambling, weapons), and follow purification guidelines. The fund prospectus includes a Sharia compliance certificate from a recognized Islamic scholar or committee. Always verify before investing.' },
  { question: 'How is SIP return calculated? What is the formula?', answer: 'SIP returns are calculated using the future value of a series formula: FV = P x [((1 + r)^n - 1) / r] x (1 + r), where P is the monthly investment amount, r is the monthly rate of return (annual return divided by 12), and n is the total number of monthly installments. For example, investing 1,000 SAR per month for 10 years (120 months) at an 8% annual return gives approximately 184,000 SAR. The formula accounts for each monthly contribution growing at different rates depending on when it was invested.' },
  { question: 'Can I withdraw my SIP mutual fund investment early in Saudi Arabia?', answer: 'Yes, most mutual fund SIPs in Saudi Arabia allow early withdrawal. However, some funds charge exit fees or redemption fees, especially within the first 6-12 months. Typical exit fees range from 0.5% to 2% of the redeemed amount. Certain funds may have lock-in periods of 1-3 years. Money market funds generally have the highest liquidity with minimal or no exit fees. Always read the fund prospectus before starting your SIP. The Sauditoolhub SIP Calculator can help you project different withdrawal scenarios.' },
  { question: 'What are the risks of mutual fund investments in Saudi Arabia?', answer: 'Mutual fund investments carry market risk including potential loss of principal. Key risks: (1) Market risk — fund value fluctuates with stock and bond markets. (2) Interest rate risk — affects bond fund prices inversely. (3) Currency risk — for funds investing internationally. (4) Liquidity risk — some funds may limit redemptions during market stress. (5) Manager risk — performance depends on fund manager skill. The CMA requires all funds to disclose risk classification (Low, Medium, High) with standardized warning labels. Diversification across fund types reduces overall portfolio risk.' },
  { question: 'How does SIP compare to a lump sum investment in Saudi Arabia?', answer: 'SIP and lump sum serve different purposes. SIP is ideal for regular salary earners building wealth gradually — it reduces market timing risk through rupee-cost averaging and builds financial discipline. Lump sum is better when you have a large amount available (EOSB, bonus, inheritance) and believe the market entry point is favorable. In the Saudi stock market (Tadawul), SIP generally outperforms lump sum during volatile or declining markets by buying more units when prices are low. Lump sum can outperform during sustained bull markets. Many investors use a combination of both strategies.' },
  { question: 'Does Sauditoolhub offer a free SIP return calculator?', answer: 'Yes, Sauditoolhub provides a completely free SIP Return Calculator at /sip-calculator. You can enter your monthly investment amount, expected annual return rate, and investment period to see projected future value, total amount invested, and total wealth gained. The calculator supports SAR and other currencies. You can adjust the return rate to model conservative (4-6%), moderate (6-8%), or aggressive (8-12%) scenarios. Use it to plan financial goals like buying a car, saving for a house down payment, or building retirement savings.' }
]

const faqsAr = [
  { question: 'ما هي خطة الاستثمار الدوري (SIP) وكيف تعمل في السعودية؟', answer: 'خطة الاستثمار الدوري (SIP) هي طريقة استثمار منتظمة حيث تستثمر مبلغاً ثابتاً بشكل شهري في صندوق استثماري. في السعودية، تقدم منصات مثل الراجحي المالية والأهلي كابيتال ودراية خيارات SIP تبدأ من 100 ريال شهرياً. تشتري أموالك وحدات الصندوق بسعر الأصول الصافية (NAV) السائد، مما يستفيد من متوسط تكلفة الريال وقوة الفائدة المركبة مع مرور الوقت.' },
  { question: 'ما هو متوسط عائد SIP لصناديق الاستثمار في السعودية؟', answer: 'يختلف عائد SIP حسب نوع الصندوق. صناديق أسواق المال تحقق 4-6% سنوياً، الصناديق المتوازنة 6-8%، وصناديق الأسهم 8-12% أو أكثر على المدى الطويل. صناديق الأسهم المتوافقة مع الشريعة من الراجحي المالية والأهلي كابيتال حققت تاريخياً 8-10% سنوياً على مدى 5-10 سنوات. الأداء السابق لا يضمن النتائج المستقبلية. استخدم حاسبة SIP من Sauditoolhub لتجربة سيناريوهات مختلفة.' },
  { question: 'ما هو الحد الأدنى للاستثمار في خطط الاستثمار الدوري في البنوك السعودية؟', answer: 'يختلف الحد الأدنى حسب المنصة. الراجحي المالية تتطلب 500 ريال شهرياً للصندوق الواحد. الأهلي كابيتال تبدأ من 1,000 ريال. دراية تسمح باستثمارات SIP من 100 ريال في صناديق مختارة. روبو-مستشار أوبيان كابيتال وملاّء لديهما حد أدنى مرن يبدأ من 500 ريال. المهم هو البدء بأي مبلغ يمكنك استثماره باستمرار.' },
  { question: 'ما هي أفضل منصات صناديق الاستثمار في السعودية؟', answer: 'أفضل المنصات تشمل: الراجحي المالية (ذراع الراجحي الاستثماري)، الأهلي كابيتال (البنك الأهلي السعودي)، الرياض المالية (بنك الرياض)، ساب كابيتال، والفرانسي كابيتال. المستشارون الآليون: دراية سمارت (منصة رقمية)، ملاّء (إدارة ثروات آلية)، وأوبيان كابيتال (متوافق مع الشريعة). جميعها منظمة من هيئة السوق المالية.' },
  { question: 'هل الاستثمار في صناديق SIP متوافق مع الشريعة الإسلامية في السعودية؟', answer: 'نعم، العديد من صناديق الاستثمار في السعودية متوافقة مع الشريعة. هيئة السوق المالية تطلب من جميع الصناديق توضيح وضعها الشرعي. الراجحي المالية تقدم صناديق متوافقة مع الشريعة حصراً. الأهلي كابيتال لديها خيارات تقليدية ومتوافقة مع الشريعة. الصناديق المتوافقة تتجنب الربا والصناعات المحرمة (الكحول والتبغ والقمار) وتتبع إرشادات التطهير.' },
  { question: 'كيف يتم حساب عائد SIP؟ ما هي المعادلة المستخدمة؟', answer: 'يحسب عائد SIP باستخدام معادلة القيمة المستقبلية لسلسلة من الدفعات: FV = P x [((1 + r)^n - 1) / r] x (1 + r)، حيث P هو مبلغ الاستثمار الشهري، r هو معدل العائد الشهري (العائد السنوي مقسوماً على 12)، وn هو إجمالي عدد الدفعات الشهرية. مثال: استثمار 1,000 ريال شهرياً لمدة 10 سنوات بعائد سنوي 8% يعطي حوالي 184,000 ريال.' },
  { question: 'هل يمكنني سحب استثماري في صناديق SIP مبكراً في السعودية؟', answer: 'نعم، معظم صناديق الاستثمار تسمح بالسحب المبكر. لكن بعض الصناديق تفرض رسوم خروج خاصة خلال أول 6-12 شهراً. تتراوح رسوم الخروج عادة بين 0.5% و 2% من المبلغ المسترد. بعض الصناديق لديها فترات احتجاز. صناديق أسواق المال تتمتع بأعلى سيولة. اقرأ نشرة الصندوق قبل بدء استثمارك.' },
  { question: 'ما هي مخاطر الاستثمار في صناديق الاستثمار في السعودية؟', answer: 'الاستثمار في صناديق الاستثمار يحمل مخاطر السوق بما في ذلك خسارة رأس المال. المخاطر الرئيسية: (1) مخاطر السوق — تتقلب قيمة الصندوق مع أسواق الأسهم والسندات. (2) مخاطر أسعار الفائدة — تؤثر عكسياً على صناديق السندات. (3) مخاطر العملة — للصناديق الدولية. (4) مخاطر السيولة. (5) مخاطر المدير — يعتمد الأداء على مهارة مدير الصندوق. هيئة السوق المالية تطلب الإفصاح عن تصنيف المخاطر.' },
  { question: 'كيف يقارن SIP بالاستثمار بمبلغ مقطوع في السعودية؟', answer: 'SIP مثالي لأصحاب الرواتب المنتظمة الذين يبنون الثروة تدريجياً — يقلل مخاطر توقيت السوق من خلال متوسط تكلفة الريال. الاستثمار بمبلغ مقطوع أفضل عندما يتوفر مبلغ كبير (مكافأة نهاية الخدمة، مكافأة). في سوق الأسهم السعودية (تداول)، SIP يتفوق عموماً في الأسواق المتقلبة. الاستثمار المقطوع يمكن أن يتفوق في الأسواق الصاعدة المستدامة.' },
  { question: 'هل تقدم Sauditoolhub حاسبة عائد SIP مجانية؟', answer: 'نعم، تقدم Sauditoolhub حاسبة عائد SIP مجانية بالكامل. أدخل مبلغ استثمارك الشهري ومعدل العائد السنوي المتوقع وفترة الاستثمار لترى القيمة المستقبلية المتوقعة وإجمالي المبلغ المستثمر وإجمالي الثروة المكتسبة. الحاسبة تدعم الريال السعودي وعملات أخرى. يمكنك تعديل معدل العائد لتجربة سيناريوهات مختلفة.' }
]

const faqsUr = [
  { question: 'ماہانہ سرمایہ کاری (SIP) کیا ہے اور یہ سعودی عرب میں کیسے کام کرتی ہے؟', answer: 'ماہانہ سرمایہ کاری (SIP) ایک منظم سرمایہ کاری کا طریقہ ہے جہاں آپ ہر ماہ ایک مقررہ رقم میوچل فنڈ میں لگاتے ہیں۔ سعودی عرب میں الراجی کیپٹل، ایس این بی کیپٹل، اور درایہ جیسی پلیٹ فارمز 100 ریال ماہانہ سے SIP شروع کر سکتی ہیں۔ آپ کی رقم نیٹ اثاثہ ویلیو (NAV) پر فنڈ یونٹس خریدتی ہے، جو وقت کے ساتھ کمپاؤنڈ انٹرسٹ اور روپیہ لاگت اوسط سے فائدہ اٹھاتی ہے۔' },
  { question: 'سعودی عرب میں میوچل فنڈز کی اوسط SIP واپسی کی شرح کیا ہے؟', answer: 'SIP واپسی فنڈ کی قسم کے لحاظ سے مختلف ہوتی ہے۔ منی مارکیٹ فنڈز 4-6% سالانہ دیتے ہیں، متوازن فنڈز 6-8%، اور ایکویٹی فنڈز 8-12% یا اس سے زیادہ طویل مدتی میں دیتے ہیں۔ الراجی کیپٹل اور SNB کیپٹل کے شریعہ مطابق فنڈز نے تاریخی طور پر 5-10 سال میں 8-10% سالانہ واپسی دی ہے۔ ماضی کی کارکردگی مستقبل کے نتائج کی ضمانت نہیں دیتی۔' },
  { question: 'سعودی بینکوں میں SIP شروع کرنے کے لیے کم از کم رقم کتنی ہے؟', answer: 'کم از کم رقم پلیٹ فارم کے لحاظ سے مختلف ہوتی ہے۔ الراجی کیپٹل 500 ریال ماہانہ فی فنڈ مانگتا ہے۔ SNB کیپٹل 1,000 ریال سے شروع ہوتا ہے۔ درایہ 100 ریال سے SIP کی اجازت دیتا ہے۔ اوبیان کیپٹل اور ملاّء روبو ایڈوائزرز 500 ریال سے شروع ہوتے ہیں۔ کچھ شریعہ مطابق فنڈز میں اور بھی کم داخلے کی سطح ہوتی ہے۔' },
  { question: 'سعودی عرب میں کون سے بینک اور پلیٹ فارم میوچل فنڈ SIP پیش کرتے ہیں؟', answer: 'اہم سعودی پلیٹ فارمز: الراجی کیپٹل (الرجی بینک)، SNB کیپٹل (سعودی نیشنل بینک)، الرياض کیپٹل (ریاض بینک)، SABB کیپٹل، اور سعودی فرانسی کیپٹل۔ آزاد روبو ایڈوائزرز: درایہ سمارٹ (ڈیجیٹل پلیٹ فارم)، ملاّء (خودکار دولت کا انتظام)، اور اوبیان کیپٹل (شریعہ مطابق)۔ سب کیپیٹل مارکیٹ اتھارٹی (CMA) کے زیر انتظام ہیں۔' },
  { question: 'کیا سعودی عرب میں SIP سرمایہ کاری شریعہ مطابق ہے؟', answer: 'سعودی عرب میں بہت سے میوچل فنڈز شریعہ مطابق ہیں۔ CMA تمام عوامی فنڈز کو اپنی شریعہ حیثیت ظاہر کرنے کا حکم دیتی ہے۔ الراجی کیپٹل صرف شریعہ مطابق فنڈز پیش کرتا ہے۔ SNB کیپٹل کے پاس روایتی اور شریعہ مطابق دونوں اختیارات ہیں۔ شریعہ مطابق فنڈز سود (ربا)، ممنوعہ صنعتوں (شراب، تمباکو، جوا) سے بچتے ہیں اور تطہیر کے اصولوں پر عمل کرتے ہیں۔' },
  { question: 'SIP واپسی کیسے شمار کی جاتی ہے؟ کون سا فارمولا استعمال ہوتا ہے؟', answer: 'SIP واپسی مستقبل کی قیمت کے فارمولے سے شمار کی جاتی ہے: FV = P x [((1 + r)^n - 1) / r] x (1 + r)، جہاں P ماہانہ سرمایہ کاری ہے، r ماہانہ واپسی کی شرح (سالانہ/12) ہے، اور n ماہانہ اقساط کی کل تعداد ہے۔ مثال: 1,000 ریال ماہانہ 10 سال (120 ماہ) 8% سالانہ پر = تقریباً 184,000 ریال۔' },
  { question: 'کیا میں سعودی عرب میں اپنی SIP سرمایہ کاری جلد نکال سکتا ہوں؟', answer: 'ہاں، زیادہ تر میوچل فنڈز جلد نکلوانے کی اجازت دیتے ہیں۔ لیکن کچھ فنڈز خاص طور پر پہلے 6-12 مہینوں میں ایگزٹ فیس لیتے ہیں۔ عام ایگزٹ فیس 0.5% سے 2% تک ہوتی ہے۔ کچھ فنڈز میں لاک ان پیریڈ بھی ہوتا ہے۔ منی مارکیٹ فنڈز میں سب سے زیادہ لیکویڈیٹی ہوتی ہے۔ سرمایہ کاری سے پہلے فنڈ پراسپیکٹس ضرور پڑھیں۔' },
  { question: 'سعودی عرب میں میوچل فنڈ سرمایہ کاری کے خطرات کیا ہیں؟', answer: 'میوچل فنڈ سرمایہ کاری میں مارکیٹ رسک شامل ہے۔ اہم خطرات: (1) مارکیٹ رسک - فنڈ کی قیمت اسٹاک اور بانڈ مارکیٹوں کے ساتھ اتار چڑھاؤ کرتی ہے۔ (2) شرح سود رسک - بانڈ فنڈز کو متاثر کرتا ہے۔ (3) کرنسی رسک - بین الاقوامی فنڈز کے لیے۔ (4) لیکویڈیٹی رسک۔ (5) مینیجر رسک - کارکردگی فنڈ مینیجر پر منحصر ہے۔ CMA تمام فنڈز کو رسک کی درجہ بندی (کم، درمیانہ، زیادہ) ظاہر کرنے کا حکم دیتی ہے۔' },
  { question: 'سعودی عرب میں SIP اور یکمشت سرمایہ کاری میں کیا فرق ہے؟', answer: 'SIP باقاعدہ تنخواہ داروں کے لیے بہترین ہے جو آہستہ آہستہ دولت بناتے ہیں - یہ مارکیٹ ٹائمنگ رسک کو کم کرتا ہے۔ یکمشت سرمایہ کاری اس وقت بہتر ہے جب بڑی رقم دستیاب ہو (خدمت ختم ہونے کے فوائد، بونس)۔ سعودی اسٹاک مارکیٹ (تداول) میں، SIP عام طور پر اتار چڑھاؤ والی مارکیٹوں میں بہتر کارکردگی دکھاتا ہے۔ یکمشت مسلسل بیل مارکیٹ میں بہتر ہو سکتا ہے۔' },
  { question: 'کیا Sauditoolhub مفت SIP ریٹرن کیلکولیٹر پیش کرتا ہے؟', answer: 'ہاں، Sauditoolhub مکمل طور پر مفت SIP ریٹرن کیلکولیٹر پیش کرتا ہے۔ اپنی ماہانہ سرمایہ کاری، متوقع سالانہ واپسی، اور سرمایہ کاری کی مدت درج کریں تاکہ مستقبل کی قیمت، کل سرمایہ کاری، اور کل دولت دیکھ سکیں۔ کیلکولیٹر SAR اور دیگر کرنسیوں کو سپورٹ کرتا ہے۔ مختلف منظرناموں کے لیے واپسی کی شرح کو ایڈجسٹ کریں۔' }
]

const faqsTl = [
  { question: 'Ano ang Systematic Investment Plan (SIP) at paano ito gumagana sa Saudi Arabia?', answer: 'Ang SIP ay isang disiplinadong paraan ng pamumuhunan kung saan nag-iinvest ka ng fixed na halaga bawat buwan sa isang mutual fund. Sa Saudi Arabia, ang Al Rajhi Capital, SNB Capital, at Derayah ay nag-aalok ng SIP simula sa 100 SAR kada buwan. Ang iyong pera ay bumibili ng fund units sa kasalukuyang NAV, na nakikinabang sa rupee-cost averaging at compound interest sa paglipas ng panahon.' },
  { question: 'Ano ang average na SIP return rate para sa mutual funds sa Saudi Arabia?', answer: 'Ang SIP returns ay nag-iiba ayon sa uri ng fund. Ang money market funds ay karaniwang nagbibigay ng 4-6% taun-taon, balanced funds 6-8%, at equity funds 8-12% o higit pa sa pangmatagalan. Ang Sharia-compliant funds ng Al Rajhi Capital at SNB Capital ay naghatid ng 8-10% annualized returns sa loob ng 5-10 taon. Ang nakaraang performance ay hindi garantiya ng future results.' },
  { question: 'Magkano ang minimum na halaga para magsimula ng SIP sa Saudi banks?', answer: 'Ang minimum ay nag-iiba ayon sa platform. Ang Al Rajhi Capital ay nangangailangan ng 500 SAR kada buwan bawat fund. Ang SNB Capital ay nagsisimula sa 1,000 SAR. Ang Derayah ay nagpapahintulot ng SIP simula 100 SAR. Ang Abyan Capital at Malaa robo-advisors ay may flexible minimum simula 500 SAR. Ang mahalaga ay magsimula sa halagang kaya mong i-invest nang consistent.' },
  { question: 'Aling Saudi banks at platform ang nag-aalok ng mutual fund SIP investments?', answer: 'Mga pangunahing platform: Al Rajhi Capital (Al Rajhi Bank), SNB Capital (Saudi National Bank), Riyad Capital (Riyad Bank), SABB Capital, at Saudi Fransi Capital. Mga robo-advisors: Derayah Smart (digital platform), Malaa (automated wealth management), at Abyan Capital (Sharia-compliant). Lahat ay regulated ng Capital Market Authority (CMA).' },
  { question: 'Ang SIP investment ba ay Sharia-compliant sa Saudi Arabia?', answer: 'Maraming mutual funds sa Saudi Arabia ang Sharia-compliant. Ang CMA ay nangangailangan ng lahat ng pampublikong fund na sabihin ang kanilang Sharia status. Ang Al Rajhi Capital ay eksklusibong nag-aalok ng Sharia-compliant funds. Ang SNB Capital ay may parehong conventional at Sharia-compliant options. Ang Sharia funds ay umiiwas sa riba (interest) at mga ipinagbabawal na industriya.' },
  { question: 'Paano kinakalkula ang SIP return? Anong formula ang ginagamit?', answer: 'Ang SIP returns ay kinakalkula gamit ang future value formula: FV = P x [((1 + r)^n - 1) / r] x (1 + r), kung saan ang P ay monthly investment, r ay monthly return rate (annual/12), at n ay total months. Halimbawa: 1,000 SAR kada buwan sa loob ng 10 taon sa 8% annual return ay humigit-kumulang 184,000 SAR.' },
  { question: 'Maaari ko bang bawiin nang maaga ang aking SIP mutual fund investment sa Saudi Arabia?', answer: 'Oo, pinapayagan ng karamihan ng mutual funds ang early withdrawal. Pero may exit fees ang ilang funds, lalo na sa unang 6-12 buwan. Karaniwang exit fee ay 0.5% hanggang 2%. Ang ilang funds ay may lock-in periods. Ang money market funds ay may pinakamataas na liquidity. Basahin ang fund prospectus bago mag-invest.' },
  { question: 'Ano ang mga panganib ng mutual fund investments sa Saudi Arabia?', answer: 'Ang mutual fund investments ay may market risk kabilang ang posibleng pagkawala ng principal. Mga pangunahing panganib: (1) Market risk — nagbabago ang fund value sa stock at bond markets. (2) Interest rate risk. (3) Currency risk — para sa international funds. (4) Liquidity risk. (5) Manager risk. Ang CMA ay nangangailangan ng lahat ng fund na mag-disclose ng risk classification (Low, Medium, High).' },
  { question: 'Paano ikinukumpara ang SIP sa lump sum investment sa Saudi Arabia?', answer: 'Ang SIP ay mainam para sa regular na may trabaho na nag-iipon ng dahan-dahan — nababawasan nito ang market timing risk sa pamamagitan ng cost averaging. Ang lump sum ay mas mainam kapag may malaking halaga (EOSB, bonus). Sa Saudi stock market (Tadawul), ang SIP ay karaniwang mas mahusay sa pabagu-bagong merkado habang ang lump sum ay mas mahusay sa bull market.' },
  { question: 'Nag-aalok ba ang Sauditoolhub ng libreng SIP return calculator?', answer: 'Oo, nag-aalok ang Sauditoolhub ng libreng SIP Return Calculator. Ilagay ang iyong monthly investment, expected annual return, at investment period para makita ang projected future value, total investment, at total wealth gained. Sinusuportahan ng calculator ang SAR at iba pang currencies. Ayusin ang return rate para sa iba\'t ibang scenarios.' }
]

const faqsBn = [
  { question: 'সিস্টেমেটিক ইনভেস্টমেন্ট প্ল্যান (SIP) কী এবং সৌদি আরবে এটি কীভাবে কাজ করে?', answer: 'SIP হল একটি শৃঙ্খলাবদ্ধ বিনিয়োগ পদ্ধতি যেখানে আপনি প্রতি মাসে একটি নির্দিষ্ট পরিমাণ টাকা মিউচুয়াল ফান্ডে বিনিয়োগ করেন। সৌদি আরবে আল রাজি ক্যাপিটাল, SNB ক্যাপিটাল এবং দেরায়াহ-এর মতো প্ল্যাটফর্মগুলি ১০০ SAR থেকে SIP অফার করে। আপনার টাকা বর্তমান NAV-তে ফান্ড ইউনিট কিনে, যা সময়ের সাথে সাথে রুপি-কস্ট অ্যারেজিং এবং চক্রবৃদ্ধি সুদের সুবিধা দেয়।' },
  { question: 'সৌদি আরবে মিউচুয়াল ফান্ডের জন্য গড় SIP রিটার্ন রেট কত?', answer: 'SIP রিটার্ন ফান্ডের ধরণ অনুযায়ী পরিবর্তিত হয়। মানি মার্কেট ফান্ড সাধারণত ৪-৬% বার্ষিক রিটার্ন দেয়, ব্যালেন্সড ফান্ড ৬-৮%, এবং ইক্যুইটি ফান্ড ৮-১২% বা তার বেশি দীর্ঘমেয়াদে দেয়। আল রাজি ক্যাপিটাল এবং SNB ক্যাপিটালের শরিয়া-সম্মত ফান্ড ঐতিহাসিকভাবে ৫-১০ বছরে ৮-১০% বার্ষিক রিটার্ন দিয়েছে।' },
  { question: 'সৌদি ব্যাংকগুলিতে SIP শুরু করার জন্য ন্যূনতম পরিমাণ কত?', answer: 'ন্যূনতম পরিমাণ প্ল্যাটফর্ম অনুযায়ী পরিবর্তিত হয়। আল রাজি ক্যাপিটাল প্রতি ফান্ডে ৫০০ SAR মাসিক প্রয়োজন। SNB ক্যাপিটাল ১,০০০ SAR থেকে শুরু হয়। দেরায়াহ ১০০ SAR থেকে SIP অনুমতি দেয়। আবইয়ান ক্যাপিটাল এবং মালা রোবো-অ্যাডভাইজার ৫০০ SAR থেকে শুরু হয়। কিছু শরিয়া-সম্মত ফান্ডে আরও কম ন্যূনতম রয়েছে।' },
  { question: 'সৌদি আরবে কোন ব্যাংক এবং প্ল্যাটফর্মগুলি মিউচুয়াল ফান্ড SIP অফার করে?', answer: 'প্রধান সৌদি প্ল্যাটফর্ম: আল রাজি ক্যাপিটাল (আল রাজি ব্যাংক), SNB ক্যাপিটাল (সৌদি ন্যাশনাল ব্যাংক), রিয়াদ ক্যাপিটাল (রিয়াদ ব্যাংক), SABB ক্যাপিটাল, এবং সৌদি ফ্রান্সি ক্যাপিটাল। স্বাধীন রোবো-অ্যাডভাইজার: দেরায়াহ স্মার্ট (ডিজিটাল প্ল্যাটফর্ম), মালা (স্বয়ংক্রিয় সম্পদ ব্যবস্থাপনা), এবং আবইয়ান ক্যাপিটাল (শরিয়া-সম্মত)। সবগুলি CMA দ্বারা নিয়ন্ত্রিত।' },
  { question: 'সৌদি আরবে SIP বিনিয়োগ কি শরিয়া-সম্মত?', answer: 'সৌদি আরবে অনেক মিউচুয়াল ফান্ড শরিয়া-সম্মত। CMA সব পাবলিক ফান্ডকে তাদের শরিয়া অবস্থা জানাতে বাধ্য করে। আল রাজি ক্যাপিটাল শুধুমাত্র শরিয়া-সম্মত ফান্ড অফার করে। SNB ক্যাপিটালের প্রচলিত এবং শরিয়া-সম্মত উভয় অপশন রয়েছে। শরিয়া ফান্ড সুদ (রিবা) এবং নিষিদ্ধ শিল্প (মদ, তামাক, জুয়া) এড়িয়ে চলে।' },
  { question: 'SIP রিটার্ন কীভাবে গণনা করা হয়? কোন সূত্র ব্যবহার করা হয়?', answer: 'SIP রিটার্ন ভবিষ্যৎ মূল্য সূত্র ব্যবহার করে গণনা করা হয়: FV = P x [((1 + r)^n - 1) / r] x (1 + r), যেখানে P মাসিক বিনিয়োগ, r মাসিক রিটার্ন রেট (বার্ষিক/১২), এবং n মোট মাসের সংখ্যা। উদাহরণ: ১,০০০ SAR মাসিক ১০ বছর (১২০ মাস) ৮% বার্ষিকে = প্রায় ১৮৪,০০০ SAR।' },
  { question: 'আমি কি সৌদি আরবে আমার SIP মিউচুয়াল ফান্ড বিনিয়োগ আগেই তুলতে পারি?', answer: 'হ্যাঁ, বেশিরভাগ মিউচুয়াল ফান্ড তাড়াতাড়ি তোলার অনুমতি দেয়। তবে কিছু ফান্ড এক্সিট ফি নেয়, বিশেষ করে প্রথম ৬-১২ মাসে। সাধারণ এক্সিট ফি ০.৫% থেকে ২% পর্যন্ত। কিছু ফান্ডের লক-ইন পিরিয়ড থাকে। মানি মার্কেট ফান্ডের সর্বোচ্চ তারল্য রয়েছে। বিনিয়োগের আগে ফান্ড প্রসপেক্টাস পড়ুন।' },
  { question: 'সৌদি আরবে মিউচুয়াল ফান্ড বিনিয়োগের ঝুঁকিগুলি কী কী?', answer: 'মিউচুয়াল ফান্ড বিনিয়োগে বাজার ঝুঁকি রয়েছে। মূল ঝুঁকি: (১) বাজার ঝুঁকি — ফান্ডের মান স্টক এবং বন্ড বাজারের সাথে ওঠানামা করে। (২) সুদের হার ঝুঁকি। (৩) মুদ্রা ঝুঁকি — আন্তর্জাতিক ফান্ডের জন্য। (৪) তারল্য ঝুঁকি। (৫) ম্যানেজার ঝুঁকি। CMA সব ফান্ডকে ঝুঁকি শ্রেণীবিভাগ (নিম্ন, মাঝারি, উচ্চ) প্রকাশ করতে বাধ্য করে।' },
  { question: 'সৌদি আরবে SIP এবং লাম্প সাম বিনিয়োগের মধ্যে পার্থক্য কী?', answer: 'SIP নিয়মিত বেতনভোগীদের জন্য আদর্শ যারা ধীরে ধীরে সম্পদ তৈরি করে — এটি বাজার সময় নির্ধারণের ঝুঁকি হ্রাস করে। লাম্প সাম বড় অঙ্কের টাকা (EOSB, বোনাস) উপলব্ধ হলে ভাল। সৌদি স্টক মার্কেটে (তাদাউল), SIP সাধারণত অস্থির বাজারে ভাল করে যখন লাম্প সাম স্থির ষাঁড় বাজারে ভাল করতে পারে।' },
  { question: 'Sauditoolhub কি বিনামূল্যে SIP রিটার্ন ক্যালকুলেটর অফার করে?', answer: 'হ্যাঁ, Sauditoolhub সম্পূর্ণ বিনামূল্যে SIP রিটার্ন ক্যালকুলেটর অফার করে। আপনার মাসিক বিনিয়োগ, প্রত্যাশিত বার্ষিক রিটার্ন এবং বিনিয়োগের সময়কাল লিখুন ভবিষ্যৎ মূল্য, মোট বিনিয়োগ এবং মোট সম্পদ দেখতে। ক্যালকুলেটর SAR এবং অন্যান্য মুদ্রা সমর্থন করে। বিভিন্ন দৃশ্যের জন্য রিটার্ন রেট সামঞ্জস্য করুন।' }
]

function EnContent() {
  return (
    <article className="prose prose-invert max-w-none prose-headings:text-desert-primary prose-a:text-desert-primary prose-strong:text-white prose-li:text-gray-300">
      <h1>The Complete Guide to SIP & Mutual Fund Investment Returns in Saudi Arabia 2026</h1>

      <div className="not-prose glass p-6 rounded-xl mb-8">
        <p className="text-gray-300 text-lg leading-relaxed">
          Imagine setting aside 1,000 SAR every month and watching it grow into nearly 185,000 SAR over ten years — without lifting a finger. That is the power of a Systematic Investment Plan (SIP) combined with compound interest. In a world where inflation erodes the value of cash sitting in a bank account, investing in mutual funds through SIP has become one of the most accessible and effective wealth-building strategies for residents of Saudi Arabia.
        </p>
        <p className="text-gray-300 text-lg leading-relaxed mt-4">
          Whether you are a Saudi national planning for retirement, an expatriate saving for your children education or a down payment on a home, or a young professional just starting your investment journey — SIP offers a disciplined, low-stress way to participate in the financial markets without needing to time the market or have a large lump sum upfront.
        </p>
        <p className="text-gray-300 text-lg leading-relaxed mt-4">
          This guide covers everything you need to know about SIP and mutual fund investments in Saudi Arabia for 2026: how SIP works and the math behind compounding, the best platforms including Al Rajhi Capital, SNB Capital, and robo-advisors like Derayah Smart, real-life calculation examples, CMA regulations and Sharia-compliant investing, and step-by-step instructions for using our free{' '}
          <Link href="/sip-calculator" className="text-desert-primary font-bold underline">SIP Return Calculator</Link>{' '}
          to plan your financial goals.
        </p>
      </div>

      <h2>What Are Mutual Funds and SIP in Saudi Arabia?</h2>
      <p>
        A <strong>mutual fund</strong> is a pooled investment vehicle that collects money from multiple investors to purchase a diversified portfolio of stocks, bonds, sukuk, or other securities. Each investor owns units of the fund, and the value of those units rises or falls based on the performance of the underlying assets. Mutual funds are managed by professional fund managers who make investment decisions on behalf of the investors.
      </p>
      <p>
        A <strong>Systematic Investment Plan (SIP)</strong> is a method of investing in mutual funds where you contribute a fixed amount at regular intervals — typically monthly. Instead of trying to predict market movements, SIP allows you to invest consistently regardless of market conditions. When prices are low, your fixed contribution buys more units; when prices are high, it buys fewer units. Over time, this averages out your cost per unit — a strategy known as <strong>rupee-cost averaging</strong>.
      </p>

      <div className="not-prose glass p-5 rounded-xl mb-6">
        <h3 className="text-desert-primary font-semibold mb-3">The Capital Market Authority (CMA) and Fund Regulation</h3>
        <p className="text-gray-300 text-sm mb-3">
          The Capital Market Authority (CMA) is the primary regulator of the Saudi capital market, including all mutual funds and investment platforms operating in the Kingdom. Established in 2004 under the Capital Market Law, the CMA:
        </p>
        <ul className="space-y-1 text-gray-400 text-sm list-disc list-inside">
          <li>Licenses and supervises all investment funds and fund managers</li>
          <li>Enforces disclosure requirements — all funds must publish prospectuses, fact sheets, and periodic reports</li>
          <li>Sets rules for Sharia-compliant fund classification</li>
          <li>Regulates robo-advisors and digital investment platforms under the new Fintech regulations</li>
          <li>Protects investors through strict conduct of business rules and anti-fraud measures</li>
        </ul>
      </div>

      <div className="not-prose glass p-5 rounded-xl mb-6">
        <h3 className="text-desert-primary font-semibold mb-3">Bank Deposit vs. Mutual Fund: Key Differences</h3>
        <div className="bg-[#0A0E1A] p-4 rounded-lg text-gray-300 text-sm">
          <table className="w-full">
            <thead>
              <tr className="text-white border-b border-gray-700">
                <th className="text-left py-2">Feature</th>
                <th className="text-left py-2">Bank Savings Account</th>
                <th className="text-left py-2">Mutual Fund (SIP)</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-gray-700/50"><td className="py-2">Typical Return</td><td className="py-2 text-gray-400">2-3% per year</td><td className="py-2 text-desert-primary">6-12% per year</td></tr>
              <tr className="border-b border-gray-700/50"><td className="py-2">Risk Level</td><td className="py-2 text-gray-400">Very Low (insured by SAMA)</td><td className="py-2 text-yellow-400">Low to Medium (market-linked)</td></tr>
              <tr className="border-b border-gray-700/50"><td className="py-2">Liquidity</td><td className="py-2 text-gray-400">Instant access</td><td className="py-2 text-gray-400">1-3 days for redemption</td></tr>
              <tr className="border-b border-gray-700/50"><td className="py-2">Inflation Protection</td><td className="py-2 text-red-400">Poor — loses purchasing power</td><td className="py-2 text-green-400">Good — historically beats inflation</td></tr>
              <tr className="border-b border-gray-700/50"><td className="py-2">Minimum Investment</td><td className="py-2 text-gray-400">0 SAR (no minimum)</td><td className="py-2 text-gray-400">100-1,000 SAR per month</td></tr>
              <tr><td className="py-2">Regulation</td><td className="py-2 text-gray-400">SAMA (banking regulator)</td><td className="py-2 text-gray-400">CMA (capital market regulator)</td></tr>
            </tbody>
          </table>
        </div>
      </div>

      <h2>How SIP Works — The Math Behind Compound Growth</h2>
      <p>
        The magic of SIP lies in the power of <strong>compound interest</strong>. Albert Einstein reportedly called compounding the eighth wonder of the world. When you invest through SIP, not only does your original principal earn returns, but those returns themselves earn returns — creating a snowball effect that grows exponentially over time.
      </p>

      <div className="not-prose glass p-5 rounded-xl mb-6">
        <h3 className="text-desert-primary font-semibold mb-3">The SIP Formula Explained Simply</h3>
        <p className="text-gray-300 text-sm mb-3">
          The future value of a SIP investment is calculated using this formula:
        </p>
        <div className="bg-[#0A0E1A] p-4 rounded-lg text-center mb-3">
          <p className="text-desert-gold text-xl font-mono">FV = P × [((1 + r)<sup>n</sup> − 1) / r] × (1 + r)</p>
        </div>
        <div className="space-y-2">
          <p className="text-gray-300 text-sm"><strong className="text-white">FV</strong> = Future Value (total wealth at the end of the period)</p>
          <p className="text-gray-300 text-sm"><strong className="text-white">P</strong> = Monthly investment amount (e.g., 1,000 SAR)</p>
          <p className="text-gray-300 text-sm"><strong className="text-white">r</strong> = Monthly rate of return (annual return ÷ 12. For 8% annual, r = 0.08/12 = 0.00667)</p>
          <p className="text-gray-300 text-sm"><strong className="text-white">n</strong> = Total number of monthly installments (years × 12)</p>
        </div>
        <p className="text-gray-300 text-sm mt-3">
          The formula accounts for each monthly contribution growing at different rates depending on how long it has been invested. The first contribution grows for all n months, while the last contribution grows for only 1 month. The (1+r) factor at the end adjusts for the fact that SIP investments are made at the beginning of each month (annuity due).
        </p>
      </div>

      <div className="not-prose glass p-5 rounded-xl mb-6">
        <h3 className="text-desert-primary font-semibold mb-3">Growth Comparison: 5, 10, and 20 Years</h3>
        <p className="text-gray-300 text-sm mb-3">
          To understand the power of compounding, consider investing 1,000 SAR per month at an 8% annual return:
        </p>
        <div className="bg-[#0A0E1A] p-4 rounded-lg text-gray-300 text-sm">
          <table className="w-full">
            <thead>
              <tr className="text-white border-b border-gray-700">
                <th className="text-left py-2">Period</th>
                <th className="text-left py-2">Total Invested</th>
                <th className="text-left py-2">Future Value</th>
                <th className="text-left py-2">Wealth Gained</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-gray-700/50"><td className="py-2">5 Years</td><td className="py-2">60,000 SAR</td><td className="py-2 text-desert-gold">73,925 SAR</td><td className="py-2 text-green-400">+13,925 SAR</td></tr>
              <tr className="border-b border-gray-700/50"><td className="py-2">10 Years</td><td className="py-2">120,000 SAR</td><td className="py-2 text-desert-gold">184,000 SAR</td><td className="py-2 text-green-400">+64,000 SAR</td></tr>
              <tr className="border-b border-gray-700/50"><td className="py-2">15 Years</td><td className="py-2">180,000 SAR</td><td className="py-2 text-desert-gold">347,300 SAR</td><td className="py-2 text-green-400">+167,300 SAR</td></tr>
              <tr><td className="py-2">20 Years</td><td className="py-2">240,000 SAR</td><td className="py-2 text-desert-gold">589,000 SAR</td><td className="py-2 text-green-400">+349,000 SAR</td></tr>
            </tbody>
          </table>
        </div>
        <p className="text-gray-400 text-xs mt-3">Notice how the wealth gained in the second 10 years is nearly 5.5x the wealth gained in the first 10 years. That is compounding at work — your money starts working for you.</p>
      </div>

      <h2>Top Platforms for SIP & Mutual Funds in KSA (2026)</h2>
      <p>
        Saudi Arabia has a well-developed mutual fund industry with dozens of funds available through banks, investment companies, and increasingly through digital robo-advisors. Here are the leading platforms for SIP investments in 2026:
      </p>

      <div className="not-prose glass p-5 rounded-xl mb-6">
        <h3 className="text-desert-primary font-semibold mb-3">Traditional Bank-Backed Platforms</h3>
        <div className="space-y-4">
          <div className="bg-[#0A0E1A] p-4 rounded-lg">
            <h4 className="text-desert-accent font-semibold mb-2">Al Rajhi Capital</h4>
            <p className="text-gray-300 text-sm">The investment arm of Al Rajhi Bank, offering exclusively Sharia-compliant mutual funds. Key funds include Al Rajhi Saudi Equity Fund, Al Rajhi World Equity Fund, and Al Rajhi Money Market Fund. SIP minimum: 500 SAR per month. The Al Rajhi mobile app allows easy SIP setup and tracking.</p>
          </div>
          <div className="bg-[#0A0E1A] p-4 rounded-lg">
            <h4 className="text-desert-accent font-semibold mb-2">SNB Capital (Saudi National Bank)</h4>
            <p className="text-gray-300 text-sm">One of the largest asset managers in the GCC, offering over 30 mutual funds across equity, fixed income, money market, and balanced categories. Offers both conventional and Sharia-compliant funds. SIP minimum: 1,000 SAR per month. Strong research team with regular market insights.</p>
          </div>
          <div className="bg-[#0A0E1A] p-4 rounded-lg">
            <h4 className="text-desert-accent font-semibold mb-2">Riyad Capital</h4>
            <p className="text-gray-300 text-sm">The investment banking arm of Riyad Bank. Offers a comprehensive range of mutual funds including Riyad Saudi Equity Fund, Riyad GCC Equity Fund, and Riyad Money Market Fund. SIP minimum: 500 SAR per month. Known for competitive management fees.</p>
          </div>
          <div className="bg-[#0A0E1A] p-4 rounded-lg">
            <h4 className="text-desert-accent font-semibold mb-2">SABB Capital & Saudi Fransi Capital</h4>
            <p className="text-gray-300 text-sm">SABB Capital offers a range of local and international funds with SIP options. Saudi Fransi Capital is known for its Gulf equity funds and balanced funds. Both offer SIP minimums around 1,000 SAR per month.</p>
          </div>
        </div>
      </div>

      <div className="not-prose glass p-5 rounded-xl mb-6">
        <h3 className="text-desert-primary font-semibold mb-3">Robo-Advisors &amp; Digital Platforms</h3>
        <div className="space-y-4">
          <div className="bg-[#0A0E1A] p-4 rounded-lg">
            <h4 className="text-desert-accent font-semibold mb-2">Derayah Smart (formerly Derayah Financial)</h4>
            <p className="text-gray-300 text-sm">A pioneering digital investment platform in Saudi Arabia. Derayah Smart offers automated portfolio management using algorithms to match your risk profile. Invests in a diversified basket of ETFs and mutual funds. SIP minimum: as low as 100 SAR per month. CMA-regulated and Sharia-compliant options available. Known for transparent fee structure with no hidden charges.</p>
          </div>
          <div className="bg-[#0A0E1A] p-4 rounded-lg">
            <h4 className="text-desert-accent font-semibold mb-2">Malaa</h4>
            <p className="text-gray-300 text-sm">A Saudi robo-advisor that provides automated Sharia-compliant investment management. Malaa creates personalized portfolios based on your financial goals, risk tolerance, and time horizon. SIP minimum: 500 SAR. The platform automatically rebalances your portfolio and reinvests dividends. Strong focus on Islamic finance principles.</p>
          </div>
          <div className="bg-[#0A0E1A] p-4 rounded-lg">
            <h4 className="text-desert-accent font-semibold mb-2">Abyan Capital</h4>
            <p className="text-gray-300 text-sm">Abyan Capital is a digital asset management platform that offers Sharia-compliant, goal-based investing. Their algorithm constructs and manages diversified portfolios of Sharia-screened ETFs and sukuk. SIP minimum: 500 SAR. Abyan charges a flat annual management fee with no entry or exit fees, making it attractive for long-term SIP investors.</p>
          </div>
        </div>
      </div>

      <h2>Real-Life SIP Calculation Examples</h2>
      <p>
        Let us look at two practical examples that illustrate how SIP can help you achieve specific financial goals. These examples use the exact formula explained above.
      </p>

      <div className="not-prose glass p-5 rounded-xl mb-6">
        <h3 className="text-desert-primary font-semibold mb-3">Example 1: Building a Savings Fund — 1,000 SAR per Month for 10 Years</h3>
        <div className="bg-[#0A0E1A] p-4 rounded-lg text-gray-300 text-sm">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p><strong className="text-white">Monthly Investment:</strong> 1,000 SAR</p>
              <p><strong className="text-white">Investment Period:</strong> 10 years (120 months)</p>
              <p><strong className="text-white">Expected Annual Return:</strong> 8%</p>
              <p><strong className="text-white">Total Amount Invested:</strong> 120,000 SAR</p>
            </div>
            <div>
              <p><strong className="text-white">Future Value:</strong> <span className="text-desert-gold text-lg">184,000 SAR</span></p>
              <p><strong className="text-white">Total Wealth Gained:</strong> <span className="text-green-400">64,000 SAR</span></p>
              <p><strong className="text-white">Effective Return:</strong> 53% above invested amount</p>
            </div>
          </div>
        </div>
        <p className="text-gray-300 text-sm mt-3">
          This scenario is ideal for saving toward a car purchase, a wedding, or a down payment on a home. By investing just 1,000 SAR per month — roughly the cost of a daily coffee shop habit — you accumulate nearly 185,000 SAR over ten years. The same amount in a 2% savings account would yield only about 133,000 SAR — a difference of 51,000 SAR.
        </p>
        <p className="text-gray-300 text-sm mt-2">
          Check your exact numbers using our{' '}
          <Link href="/sip-calculator" className="text-desert-primary underline">SIP Return Calculator</Link>.
        </p>
      </div>

      <div className="not-prose glass p-5 rounded-xl mb-6">
        <h3 className="text-desert-primary font-semibold mb-3">Example 2: Retirement Planning — 2,500 SAR per Month for 20 Years</h3>
        <div className="bg-[#0A0E1A] p-4 rounded-lg text-gray-300 text-sm">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p><strong className="text-white">Monthly Investment:</strong> 2,500 SAR</p>
              <p><strong className="text-white">Investment Period:</strong> 20 years (240 months)</p>
              <p><strong className="text-white">Expected Annual Return:</strong> 8%</p>
              <p><strong className="text-white">Total Amount Invested:</strong> 600,000 SAR</p>
            </div>
            <div>
              <p><strong className="text-white">Future Value:</strong> <span className="text-desert-gold text-lg">1,472,500 SAR</span></p>
              <p><strong className="text-white">Total Wealth Gained:</strong> <span className="text-green-400">872,500 SAR</span></p>
              <p><strong className="text-white">Effective Return:</strong> 145% above invested amount</p>
            </div>
          </div>
        </div>
        <p className="text-gray-300 text-sm mt-3">
          This retirement planning example shows how consistent investing over a longer period generates substantially higher returns. The total wealth gained (872,500 SAR) is actually greater than the total amount invested (600,000 SAR) — your investment returns exceed your contributions. This is the power of compounding over a long time horizon.
        </p>
        <p className="text-gray-300 text-sm mt-2">
          For retirement planning, also consider using our{' '}
          <Link href="/zakat-calculator" className="text-desert-primary underline">Zakat Calculator</Link>{' '}
          to account for annual zakat on your investment wealth.
        </p>
      </div>

      <h2>SIP vs. Lump Sum vs. Savings Account</h2>
      <p>
        Choosing the right investment strategy depends on your financial situation, goals, and risk tolerance. Here is how SIP, lump sum investing, and savings accounts compare:
      </p>

      <div className="not-prose glass p-5 rounded-xl mb-6">
        <h3 className="text-desert-primary font-semibold mb-3">When to Choose SIP</h3>
        <ul className="space-y-2 text-gray-300 text-sm">
          <li><strong className="text-white">You receive a regular salary:</strong> SIP aligns perfectly with monthly cash flow — invest first, spend the rest.</li>
          <li><strong className="text-white">You want to reduce market timing risk:</strong> SIP eliminates the stress of trying to predict market bottoms and tops.</li>
          <li><strong className="text-white">You are building a habit:</strong> Automated monthly investments create financial discipline.</li>
          <li><strong className="text-white">You have a long time horizon (5+ years):</strong> The longer your SIP runs, the more powerful the compounding effect.</li>
          <li><strong className="text-white">You prefer Sharia-compliant investing:</strong> All major Saudi platforms offer Sharia funds with SIP options.</li>
        </ul>
      </div>

      <div className="not-prose glass p-5 rounded-xl mb-6">
        <h3 className="text-desert-primary font-semibold mb-3">When to Choose Lump Sum</h3>
        <ul className="space-y-2 text-gray-300 text-sm">
          <li><strong className="text-white">You receive an End of Service Benefit (EOSB):</strong> If you leave Saudi Arabia or change jobs, consider investing a portion of your EOSB — use the <Link href="/eosb-calculator" className="text-desert-primary underline">EOSB Calculator</Link> to plan your payout first.</li>
          <li><strong className="text-white">You receive a large bonus or inheritance:</strong> A lump sum investment can generate significant returns if the market is well-priced.</li>
          <li><strong className="text-white">The market is at a clear low:</strong> If you have strong conviction that current valuations are attractive.</li>
          <li><strong className="text-white">You want immediate exposure:</strong> Lump sum gets your entire capital working from day one.</li>
        </ul>
      </div>

      <div className="not-prose glass p-5 rounded-xl mb-6">
        <h3 className="text-desert-primary font-semibold mb-3">Why a 2% Savings Account Loses to Inflation</h3>
        <p className="text-gray-300 text-sm mb-3">
          Saudi Arabias inflation rate has averaged approximately 2-3% annually in recent years. A standard savings account paying 2% interest means your money is actually <strong className="text-red-400">losing purchasing power</strong> every year. After adjusting for inflation, your real return is negative.
        </p>
        <div className="bg-[#0A0E1A] p-4 rounded-lg text-gray-300 text-sm">
          <table className="w-full">
            <thead>
              <tr className="text-white border-b border-gray-700">
                <th className="text-left py-2">Strategy</th>
                <th className="text-left py-2">10-Year Return on 1,000 SAR/month</th>
                <th className="text-left py-2">Real Return (After 3% Inflation)</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-gray-700/50"><td className="py-2">Savings Account (2%)</td><td className="py-2">133,000 SAR</td><td className="py-2 text-red-400">~99,000 SAR (lost value)</td></tr>
              <tr className="border-b border-gray-700/50"><td className="py-2">SIP in Balanced Fund (7%)</td><td className="py-2">173,000 SAR</td><td className="py-2 text-green-400">~129,000 SAR (real growth)</td></tr>
              <tr><td className="py-2">SIP in Equity Fund (10%)</td><td className="py-2 text-desert-gold">206,000 SAR</td><td className="py-2 text-green-400">~153,000 SAR (strong growth)</td></tr>
            </tbody>
          </table>
        </div>
      </div>

      <h2>Risks and Regulations — CMA Rules for Mutual Funds</h2>
      <p>
        Understanding the risks and regulatory framework is essential before you start investing. The Capital Market Authority (CMA) has established a comprehensive set of rules to protect investors and ensure market integrity.
      </p>

      <div className="not-prose glass p-5 rounded-xl mb-6">
        <h3 className="text-desert-primary font-semibold mb-3">Are Mutual Funds Safe in Saudi Arabia?</h3>
        <p className="text-gray-300 text-sm mb-3">
          Mutual funds in Saudi Arabia are regulated by the CMA under the Investment Funds Regulations. Key investor protections include:
        </p>
        <ul className="space-y-1 text-gray-400 text-sm list-disc list-inside">
          <li>All fund managers must be licensed by the CMA and meet strict capital adequacy and operational requirements</li>
          <li>Funds must maintain independent custody of assets — the fund manager cannot commingle fund assets with their own</li>
          <li>Comprehensive disclosure: prospectus, annual reports, semi-annual reports, and monthly fact sheets</li>
          <li>Net Asset Value (NAV) must be calculated and published regularly according to CMA standards</li>
          <li>Investors have the right to redeem units at NAV, subject to fund-specific terms</li>
          <li>The CMA conducts regular inspections and can impose sanctions for non-compliance</li>
        </ul>
      </div>

      <div className="not-prose glass p-5 rounded-xl mb-6">
        <h3 className="text-desert-primary font-semibold mb-3">Understanding Risk Profiles</h3>
        <div className="bg-[#0A0E1A] p-4 rounded-lg text-gray-300 text-sm">
          <table className="w-full">
            <thead>
              <tr className="text-white border-b border-gray-700">
                <th className="text-left py-2">Risk Level</th>
                <th className="text-left py-2">Typical Fund Type</th>
                <th className="text-left py-2">Expected Return</th>
                <th className="text-left py-2">Recommended Horizon</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-gray-700/50"><td className="py-2 text-green-400">Low</td><td className="py-2">Money Market Funds</td><td className="py-2">4-6%</td><td className="py-2">1-3 years</td></tr>
              <tr className="border-b border-gray-700/50"><td className="py-2 text-yellow-400">Medium</td><td className="py-2">Balanced / Mixed Funds</td><td className="py-2">6-8%</td><td className="py-2">3-7 years</td></tr>
              <tr><td className="py-2 text-red-400">High</td><td className="py-2">Equity / Sector Funds</td><td className="py-2">8-12%+</td><td className="py-2">7+ years</td></tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="not-prose glass p-5 rounded-xl mb-6">
        <h3 className="text-desert-primary font-semibold mb-3">Sharia-Compliant (Islamic) Funds vs. Conventional Funds</h3>
        <p className="text-gray-300 text-sm mb-3">
          Saudi Arabia is a global leader in Islamic finance. Most mutual funds offered in the Kingdom are available in both Sharia-compliant and conventional versions:
        </p>
        <div className="bg-[#0A0E1A] p-4 rounded-lg text-gray-300 text-sm">
          <table className="w-full">
            <thead>
              <tr className="text-white border-b border-gray-700">
                <th className="text-left py-2">Aspect</th>
                <th className="text-left py-2">Sharia-Compliant Fund</th>
                <th className="text-left py-2">Conventional Fund</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-gray-700/50"><td className="py-2">Interest (Riba)</td><td className="py-2">Prohibited — no interest-based instruments</td><td className="py-2">Allowed — can invest in bonds and interest-bearing securities</td></tr>
              <tr className="border-b border-gray-700/50"><td className="py-2">Stock Screening</td><td className="py-2">Must pass Sharia screens (debt ratio, interest income, business activity)</td><td className="py-2">No religious screening</td></tr>
              <tr className="border-b border-gray-700/50"><td className="py-2">Purification</td><td className="py-2">Impermissible income must be purified (donated to charity)</td><td className="py-2">No purification required</td></tr>
              <tr className="border-b border-gray-700/50"><td className="py-2">Supervision</td><td className="py-2">Overseen by a Sharia board or scholar</td><td className="py-2">Standard regulatory oversight</td></tr>
              <tr><td className="py-2">Popular Providers</td><td className="py-2">Al Rajhi Capital, Abyan, Malaa</td><td className="py-2">SNB Capital, Riyad Capital, SABB</td></tr>
            </tbody>
          </table>
        </div>
      </div>

      <h2>How to Use the Sauditoolhub SIP Calculator</h2>
      <p>
        Our free{' '}
        <Link href="/sip-calculator" className="text-desert-primary font-bold underline">SIP Return Calculator</Link>{' '}
        makes it easy to plan your investment goals. Here is how to use it:
      </p>

      <div className="not-prose glass p-5 rounded-xl mb-6">
        <div className="space-y-4">
          <div className="bg-[#0A0E1A] p-4 rounded-lg">
            <p className="text-white font-semibold mb-2">Step 1: Enter Your Monthly Investment</p>
            <p className="text-gray-300 text-sm">Choose the amount you can commit each month — from as little as 100 SAR to as much as 50,000 SAR or more.</p>
          </div>
          <div className="bg-[#0A0E1A] p-4 rounded-lg">
            <p className="text-white font-semibold mb-2">Step 2: Set Your Expected Annual Return</p>
            <p className="text-gray-300 text-sm">Use the default 8% as a conservative estimate for a balanced fund, or adjust to 10-12% for equity funds. The calculator shows results for your chosen rate.</p>
          </div>
          <div className="bg-[#0A0E1A] p-4 rounded-lg">
            <p className="text-white font-semibold mb-2">Step 3: Choose Your Investment Period</p>
            <p className="text-gray-300 text-sm">Select from 1 to 30 years. The calculator instantly shows the future value, total invested, and wealth gained.</p>
          </div>
          <div className="bg-[#0A0E1A] p-4 rounded-lg">
            <p className="text-white font-semibold mb-2">Step 4: Plan Your Goals</p>
            <p className="text-gray-300 text-sm">Use the results to plan specific financial goals: buying a car (50,000-100,000 SAR), saving for a house down payment (200,000-500,000 SAR), or building a retirement corpus (1,000,000+ SAR).</p>
          </div>
        </div>
      </div>

      <div className="not-prose glass p-6 rounded-xl mb-8 mt-8 text-center">
        <h3 className="text-desert-gold font-semibold mb-3">Start Planning Your Financial Future Today</h3>
        <p className="text-gray-300 mb-4">
          Whether you are saving for a car, a home, your children education, or a comfortable retirement — every journey begins with a single step. Use the{' '}
          <Link href="/sip-calculator" className="text-desert-primary font-bold underline">Sauditoolhub SIP Calculator</Link>{' '}
          to see how much your monthly investments can grow. Also explore our{' '}
          <Link href="/sama-loan-calculator" className="text-desert-primary underline">SAMA Loan Calculator</Link>{' '}
          for understanding your borrowing capacity, and{' '}
          <Link href="/zakat-calculator" className="text-desert-primary underline">Zakat Calculator</Link>{' '}
          for managing your annual zakat obligations, and the{' '}
          <Link href="/eosb-calculator" className="text-desert-primary underline">EOSB Calculator</Link>{' '}
          to plan how to invest your end-of-service benefit.
        </p>
        <p className="text-gray-400 text-sm">
          Visit our <Link href="/blog" className="text-desert-primary underline">blog</Link> for more insights on personal finance in Saudi Arabia.
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
        Systematic Investment Plans (SIPs) offer one of the most accessible and powerful ways to build long-term wealth in Saudi Arabia. By investing consistently in mutual funds through regulated platforms like Al Rajhi Capital, SNB Capital, or digital robo-advisors like Derayah and Malaa, you can harness the power of compound interest to achieve your financial goals.
      </p>
      <p>
        The key takeaways from this guide are: start early to maximize the compounding effect, choose funds that match your risk profile and time horizon, consider Sharia-compliant options if they align with your values, use the SIP calculator to model different scenarios, and stay invested for the long term rather than trying to time the market.
      </p>
      <p>
        Remember, the best time to start investing was yesterday. The second best time is today. Use our{' '}
        <Link href="/sip-calculator" className="text-desert-primary font-bold underline">free SIP Return Calculator</Link>{' '}
        to begin planning your investment journey right now.
      </p>
    </article>
  )
}

function ArContent() {
  return (
    <article className="prose prose-invert max-w-none prose-headings:text-desert-primary prose-a:text-desert-primary prose-strong:text-white prose-li:text-gray-300" dir="rtl">
      <h1>الدليل الكامل للاستثمار في صناديق الاستثمار الدوري في السعودية 2026</h1>

      <div className="not-prose glass p-6 rounded-xl mb-8">
        <p className="text-gray-300 text-lg leading-relaxed">
          تخيل أن تخصص 1,000 ريال كل شهر وتشاهدها تنمو إلى ما يقرب من 185,000 ريال خلال عشر سنوات — دون أن ترفع إصبعك. هذه هي قوة خطة الاستثمار الدوري (SIP) مع الفائدة المركبة. في عالم حيث التضخم يأكل قيمة النقود الجالسة في الحساب البنكي، أصبح الاستثمار في صناديق الاستثمار من خلال خطط الاستثمار الدوري واحدة من أكثر استراتيجيات بناء الثروة سهولة وفعالية للمقيمين في المملكة العربية السعودية.
        </p>
        <p className="text-gray-300 text-lg leading-relaxed mt-4">
          سواء كنت مواطناً سعودياً تخطط للتقاعد، أو مقيماً تدخر لتعليم أطفالك أو دفعة أولى لشراء منزل، أو محترفاً شاباً في بداية رحلتك الاستثمارية — فإن خطط الاستثمار الدوري تقدم طريقة منظمة ومنخفضة التوتر للمشاركة في الأسواق المالية دون الحاجة إلى توقيت السوق أو امتلاك مبلغ كبير مقدمًا.
        </p>
        <p className="text-gray-300 text-lg leading-relaxed mt-4">
          يغطي هذا الدليل كل ما تحتاج معرفته عن الاستثمار الدوري وصناديق الاستثمار في السعودية 2026: كيف يعمل SIP والرياضيات وراء الفائدة المركبة، أفضل المنصات بما في ذلك الراجحي المالية والأهلي كابيتال والمستشارون الآليون مثل دراية سمارت، أمثلة حسابية واقعية، لوائح هيئة السوق المالية والاستثمار المتوافق مع الشريعة، وتعليمات خطوة بخطوة لاستخدام{' '}
          <Link href="/sip-calculator" className="text-desert-primary font-bold underline">حاسبة عائد SIP المجانية</Link>{' '}
          من Sauditoolhub لتخطيط أهدافك المالية.
        </p>
      </div>

      <h2>ما هي صناديق الاستثمار وخطة الاستثمار الدوري في السعودية؟</h2>
      <p>
        <strong>صندوق الاستثمار</strong> هو وعاء استثماري مشترك يجمع الأموال من عدة مستثمرين لشراء محفظة متنوعة من الأسهم أو السندات أو الصكوك أو الأوراق المالية الأخرى. كل مستثمر يمتلك وحدات من الصندوق، وقيمة هذه الوحدات ترتفع أو تنخفض بناءً على أداء الأصول الأساسية. تُدار صناديق الاستثمار بواسطة مديري صناديق محترفين يتخذون قرارات الاستثمار نيابة عن المستثمرين.
      </p>
      <p>
        <strong>خطة الاستثمار الدوري (SIP)</strong> هي طريقة للاستثمار في صناديق الاستثمار حيث تساهم بمبلغ ثابت على فترات منتظمة — عادة شهرياً. بدلاً من محاولة توقع تحركات السوق، يتيح لك SIP الاستثمار باستمرار بغض النظر عن ظروف السوق. عندما تكون الأسعار منخفضة، تشتري مساهمتك الثابتة وحدات أكثر؛ وعندما تكون الأسعار مرتفعة، تشتري وحدات أقل. بمرور الوقت، يؤدي هذا إلى متوسط تكلفة الوحدة — وهي استراتيجية تعرف باسم <strong>متوسط تكلفة الريال</strong>.
      </p>

      <div className="not-prose glass p-5 rounded-xl mb-6">
        <h3 className="text-desert-primary font-semibold mb-3">هيئة السوق المالية (CMA) وتنظيم صناديق الاستثمار</h3>
        <p className="text-gray-300 text-sm mb-3">
          هيئة السوق المالية (CMA) هي المنظم الرئيسي للسوق المالية السعودية، بما في ذلك جميع صناديق الاستثمار ومنصات الاستثمار العاملة في المملكة. تأسست في عام 2004 بموجب قانون السوق المالية، وتقوم الهيئة بـ:
        </p>
        <ul className="space-y-1 text-gray-400 text-sm list-disc list-inside">
          <li>ترخيص والإشراف على جميع صناديق الاستثمار ومديري الصناديق</li>
          <li>فرض متطلبات الإفصاح — يجب على جميع الصناديق نشر نشرات الإصدار والنشرات الدورية والتقارير الدورية</li>
          <li>وضع قواعد تصنيف الصناديق المتوافقة مع الشريعة</li>
          <li>تنظيم المستشارين الآليين ومنصات الاستثمار الرقمية بموجب لوائح التكنولوجيا المالية الجديدة</li>
          <li>حماية المستثمرين من خلال قواعد صارمة لسلوك الأعمال وإجراءات مكافحة الاحتيال</li>
        </ul>
      </div>

      <div className="not-prose glass p-5 rounded-xl mb-6">
        <h3 className="text-desert-primary font-semibold mb-3">الفرق بين الوديعة البنكية وصندوق الاستثمار</h3>
        <div className="bg-[#0A0E1A] p-4 rounded-lg text-gray-300 text-sm">
          <table className="w-full">
            <thead>
              <tr className="text-white border-b border-gray-700">
                <th className="text-right py-2">الميزة</th>
                <th className="text-right py-2">حساب التوفير البنكي</th>
                <th className="text-right py-2">صندوق استثمار (SIP)</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-gray-700/50"><td className="py-2 text-right">العائد النموذجي</td><td className="py-2 text-right text-gray-400">2-3% سنوياً</td><td className="py-2 text-right text-desert-primary">6-12% سنوياً</td></tr>
              <tr className="border-b border-gray-700/50"><td className="py-2 text-right">مستوى المخاطرة</td><td className="py-2 text-right text-gray-400">منخفض جداً (مؤمن من ساما)</td><td className="py-2 text-right text-yellow-400">منخفض إلى متوسط (مرتبط بالسوق)</td></tr>
              <tr className="border-b border-gray-700/50"><td className="py-2 text-right">السيولة</td><td className="py-2 text-right text-gray-400">وصول فوري</td><td className="py-2 text-right text-gray-400">1-3 أيام للاسترداد</td></tr>
              <tr className="border-b border-gray-700/50"><td className="py-2 text-right">الحماية من التضخم</td><td className="py-2 text-right text-red-400">ضعيفة — يفقد القوة الشرائية</td><td className="py-2 text-right text-green-400">جيدة — يتفوق على التضخم تاريخياً</td></tr>
              <tr><td className="py-2 text-right">التنظيم</td><td className="py-2 text-right text-gray-400">ساما (البنك المركزي)</td><td className="py-2 text-right text-gray-400">هيئة السوق المالية</td></tr>
            </tbody>
          </table>
        </div>
      </div>

      <h2>كيف يعمل الاستثمار الدوري — الرياضيات وراء النمو المركب</h2>
      <p>
        يكمن سحر SIP في قوة <strong>الفائدة المركبة</strong>. يُقال أن ألبرت أينشتاين وصف الفائدة المركبة بأنها الأعجوبة الثامنة في العالم. عندما تستثمر من خلال SIP، ليس فقط رأس مالك الأصلي يحقق عوائد، بل تلك العوائد نفسها تحقق عوائد — مما يخلق تأثير كرة الثلج الذي ينمو بشكل هائل مع مرور الوقت.
      </p>

      <div className="not-prose glass p-5 rounded-xl mb-6">
        <h3 className="text-desert-primary font-semibold mb-3">معادلة SIP المبسطة</h3>
        <p className="text-gray-300 text-sm mb-3">
          تحسب القيمة المستقبلية لاستثمار SIP باستخدام المعادلة التالية:
        </p>
        <div className="bg-[#0A0E1A] p-4 rounded-lg text-center mb-3">
          <p className="text-desert-gold text-xl font-mono" dir="ltr">FV = P × [((1 + r)<sup>n</sup> − 1) / r] × (1 + r)</p>
        </div>
        <div className="space-y-2">
          <p className="text-gray-300 text-sm"><strong className="text-white">FV</strong> = القيمة المستقبلية (إجمالي الثروة في نهاية الفترة)</p>
          <p className="text-gray-300 text-sm"><strong className="text-white">P</strong> = مبلغ الاستثمار الشهري (مثال: 1,000 ريال)</p>
          <p className="text-gray-300 text-sm"><strong className="text-white">r</strong> = معدل العائد الشهري (العائد السنوي ÷ 12. لمعدل 8% سنوي، r = 0.08/12 = 0.00667)</p>
          <p className="text-gray-300 text-sm"><strong className="text-white">n</strong> = إجمالي عدد الدفعات الشهرية (السنوات × 12)</p>
        </div>
      </div>

      <div className="not-prose glass p-5 rounded-xl mb-6">
        <h3 className="text-desert-primary font-semibold mb-3">مقارنة النمو: 5 و 10 و 20 سنة</h3>
        <p className="text-gray-300 text-sm mb-3">لفهم قوة الفائدة المركبة، ضع في اعتبارك استثمار 1,000 ريال شهرياً بعائد سنوي 8%:</p>
        <div className="bg-[#0A0E1A] p-4 rounded-lg text-gray-300 text-sm">
          <table className="w-full">
            <thead>
              <tr className="text-white border-b border-gray-700">
                <th className="text-right py-2">الفترة</th>
                <th className="text-right py-2">إجمالي المستثمر</th>
                <th className="text-right py-2">القيمة المستقبلية</th>
                <th className="text-right py-2">الثروة المكتسبة</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-gray-700/50"><td className="py-2 text-right">5 سنوات</td><td className="py-2 text-right">60,000 ريال</td><td className="py-2 text-right text-desert-gold">73,925 ريال</td><td className="py-2 text-right text-green-400">+13,925 ريال</td></tr>
              <tr className="border-b border-gray-700/50"><td className="py-2 text-right">10 سنوات</td><td className="py-2 text-right">120,000 ريال</td><td className="py-2 text-right text-desert-gold">184,000 ريال</td><td className="py-2 text-right text-green-400">+64,000 ريال</td></tr>
              <tr className="border-b border-gray-700/50"><td className="py-2 text-right">15 سنة</td><td className="py-2 text-right">180,000 ريال</td><td className="py-2 text-right text-desert-gold">347,300 ريال</td><td className="py-2 text-right text-green-400">+167,300 ريال</td></tr>
              <tr><td className="py-2 text-right">20 سنة</td><td className="py-2 text-right">240,000 ريال</td><td className="py-2 text-right text-desert-gold">589,000 ريال</td><td className="py-2 text-right text-green-400">+349,000 ريال</td></tr>
            </tbody>
          </table>
        </div>
      </div>

      <h2>أفضل منصات الاستثمار الدوري وصناديق الاستثمار في السعودية (2026)</h2>

      <div className="not-prose glass p-5 rounded-xl mb-6">
        <h3 className="text-desert-primary font-semibold mb-3">منصات البنوك التقليدية</h3>
        <div className="space-y-4">
          <div className="bg-[#0A0E1A] p-4 rounded-lg">
            <h4 className="text-desert-accent font-semibold mb-2">الراجحي المالية</h4>
            <p className="text-gray-300 text-sm">الذراع الاستثمارية لمصرف الراجحي، تقدم صناديق متوافقة مع الشريعة حصراً. تشمل الصناديق الرئيسية: صندوق الراجحي للأسهم السعودية، صندوق الراجحي للأسهم العالمية، وصندوق الراجحي لسوق المال. الحد الأدنى لـ SIP: 500 ريال شهرياً.</p>
          </div>
          <div className="bg-[#0A0E1A] p-4 rounded-lg">
            <h4 className="text-desert-accent font-semibold mb-2">الأهلي كابيتال (البنك الأهلي السعودي)</h4>
            <p className="text-gray-300 text-sm">واحدة من أكبر شركات إدارة الأصول في الخليج، تقدم أكثر من 30 صندوقاً استثمارياً عبر فئات الأسهم والدخل الثابت وسوق المال والمتوازنة. تقدم خيارات تقليدية ومتوافقة مع الشريعة. الحد الأدنى لـ SIP: 1,000 ريال شهرياً.</p>
          </div>
          <div className="bg-[#0A0E1A] p-4 rounded-lg">
            <h4 className="text-desert-accent font-semibold mb-2">الرياض المالية</h4>
            <p className="text-gray-300 text-sm">الذراع الاستثمارية لبنك الرياض. تقدم مجموعة شاملة من صناديق الاستثمار. الحد الأدنى لـ SIP: 500 ريال شهرياً. تشتهر برسوم إدارة تنافسية.</p>
          </div>
        </div>
      </div>

      <div className="not-prose glass p-5 rounded-xl mb-6">
        <h3 className="text-desert-primary font-semibold mb-3">المستشارون الآليون والمنصات الرقمية</h3>
        <div className="space-y-4">
          <div className="bg-[#0A0E1A] p-4 rounded-lg">
            <h4 className="text-desert-accent font-semibold mb-2">دراية سمارت (دراية المالية سابقاً)</h4>
            <p className="text-gray-300 text-sm">منصة استثمار رقمية رائدة في السعودية. تقدم إدارة محافظ آلية باستخدام خوارزميات تناسب ملف المخاطر الخاص بك. الحد الأدنى لـ SIP: 100 ريال شهرياً. خيارات متوافقة مع الشريعة متاحة.</p>
          </div>
          <div className="bg-[#0A0E1A] p-4 rounded-lg">
            <h4 className="text-desert-accent font-semibold mb-2">ملاّء</h4>
            <p className="text-gray-300 text-sm">مستشار آلي سعودي يقدم إدارة استثمارية آلية متوافقة مع الشريعة. ينشئ محافظ مخصصة بناءً على أهدافك المالية وتحمل المخاطر. الحد الأدنى لـ SIP: 500 ريال.</p>
          </div>
          <div className="bg-[#0A0E1A] p-4 rounded-lg">
            <h4 className="text-desert-accent font-semibold mb-2">أوبيان كابيتال</h4>
            <p className="text-gray-300 text-sm">منصة إدارة أصول رقمية تقدم استثماراً متوافقاً مع الشريعة وقائماً على الأهداف. رسوم إدارة سنوية ثابتة بدون رسوم دخول أو خروج.</p>
          </div>
        </div>
      </div>

      <h2>أمثلة حسابية واقعية للاستثمار الدوري</h2>

      <div className="not-prose glass p-5 rounded-xl mb-6">
        <h3 className="text-desert-primary font-semibold mb-3">مثال 1: بناء صندوق ادخار — 1,000 ريال شهرياً لمدة 10 سنوات</h3>
        <div className="bg-[#0A0E1A] p-4 rounded-lg text-gray-300 text-sm">
          <div className="grid grid-cols-2 gap-4 text-right">
            <div>
              <p><strong className="text-white">الاستثمار الشهري:</strong> 1,000 ريال</p>
              <p><strong className="text-white">فترة الاستثمار:</strong> 10 سنوات (120 شهراً)</p>
              <p><strong className="text-white">العائد السنوي المتوقع:</strong> 8%</p>
              <p><strong className="text-white">إجمالي المبلغ المستثمر:</strong> 120,000 ريال</p>
            </div>
            <div>
              <p><strong className="text-white">القيمة المستقبلية:</strong> <span className="text-desert-gold text-lg">184,000 ريال</span></p>
              <p><strong className="text-white">إجمالي الثروة المكتسبة:</strong> <span className="text-green-400">64,000 ريال</span></p>
              <p><strong className="text-white">العائد الفعلي:</strong> 53% فوق المبلغ المستثمر</p>
            </div>
          </div>
        </div>
      </div>

      <div className="not-prose glass p-5 rounded-xl mb-6">
        <h3 className="text-desert-primary font-semibold mb-3">مثال 2: التخطيط للتقاعد — 2,500 ريال شهرياً لمدة 20 سنة</h3>
        <div className="bg-[#0A0E1A] p-4 rounded-lg text-gray-300 text-sm">
          <div className="grid grid-cols-2 gap-4 text-right">
            <div>
              <p><strong className="text-white">الاستثمار الشهري:</strong> 2,500 ريال</p>
              <p><strong className="text-white">فترة الاستثمار:</strong> 20 سنة (240 شهراً)</p>
              <p><strong className="text-white">العائد السنوي المتوقع:</strong> 8%</p>
              <p><strong className="text-white">إجمالي المبلغ المستثمر:</strong> 600,000 ريال</p>
            </div>
            <div>
              <p><strong className="text-white">القيمة المستقبلية:</strong> <span className="text-desert-gold text-lg">1,472,500 ريال</span></p>
              <p><strong className="text-white">إجمالي الثروة المكتسبة:</strong> <span className="text-green-400">872,500 ريال</span></p>
              <p><strong className="text-white">العائد الفعلي:</strong> 145% فوق المبلغ المستثمر</p>
            </div>
          </div>
        </div>
      </div>

      <h2>المخاطر واللوائح — قواعد هيئة السوق المالية لصناديق الاستثمار</h2>
      <p>
        فهم المخاطر والإطار التنظيمي أمر ضروري قبل البدء في الاستثمار. وضعت هيئة السوق المالية (CMA) مجموعة شاملة من القواعد لحماية المستثمرين وضمان نزاهة السوق.
      </p>

      <div className="not-prose glass p-5 rounded-xl mb-6">
        <h3 className="text-desert-primary font-semibold mb-3">هل صناديق الاستثمار آمنة في السعودية؟</h3>
        <ul className="space-y-1 text-gray-400 text-sm list-disc list-inside">
          <li>جميع مديري الصناديق يجب أن يكونوا مرخصين من هيئة السوق المالية</li>
          <li>الصناديق يجب أن تحتفظ بحفظ أصول مستقل — لا يمكن لمدير الصندوق خلط أصول الصندوق مع أصوله</li>
          <li>إفصاح شامل: نشرة الإصدار، تقارير سنوية ونصف سنوية، ونشرات شهرية</li>
          <li>صافي قيمة الأصول (NAV) يجب أن يحسب وينشر بانتظام وفقاً لمعايير CMA</li>
          <li>للمستثمرين الحق في استرداد الوحدات بصافي قيمة الأصول</li>
        </ul>
      </div>

      <div className="not-prose glass p-5 rounded-xl mb-6">
        <h3 className="text-desert-primary font-semibold mb-3">الصناديق المتوافقة مع الشريعة مقابل الصناديق التقليدية</h3>
        <div className="bg-[#0A0E1A] p-4 rounded-lg text-gray-300 text-sm">
          <table className="w-full">
            <thead>
              <tr className="text-white border-b border-gray-700">
                <th className="text-right py-2">الجانب</th>
                <th className="text-right py-2">الصندوق المتوافق مع الشريعة</th>
                <th className="text-right py-2">الصندوق التقليدي</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-gray-700/50"><td className="py-2 text-right">الربا</td><td className="py-2 text-right">ممنوع — لا أدوات قائمة على الفائدة</td><td className="py-2 text-right">مسموح — يمكن الاستثمار في السندات</td></tr>
              <tr className="border-b border-gray-700/50"><td className="py-2 text-right">التطهير</td><td className="py-2 text-right">الدخل غير الجائز يجب تطهيره</td><td className="py-2 text-right">لا تطهير مطلوب</td></tr>
              <tr><td className="py-2 text-right">الإشراف</td><td className="py-2 text-right">تشرف هيئة شرعية</td><td className="py-2 text-right">إشراف تنظيمي عادي</td></tr>
            </tbody>
          </table>
        </div>
      </div>

      <h2>كيفية استخدام حاسبة SIP من Sauditoolhub</h2>
      <p>
        تفضل بزيارة{' '}
        <Link href="/sip-calculator" className="text-desert-primary font-bold underline">حاسبة عائد SIP</Link>{' '}
        لتخطيط أهدافك الاستثمارية. أدخل مبلغ الاستثمار الشهري ومعدل العائد المتوقع وفترة الاستثمار لترى القيمة المستقبلية المتوقعة. استخدم النتائج لتخطيط أهداف مالية محددة: شراء سيارة، دفعة أولى لشراء منزل، أو بناء مدخرات تقاعد.
      </p>

      <div className="not-prose glass p-6 rounded-xl mb-8 mt-8 text-center">
        <h3 className="text-desert-gold font-semibold mb-3">ابدأ تخطيط مستقبلك المالي اليوم</h3>
        <p className="text-gray-300 mb-4">
          استخدم{' '}
          <Link href="/sip-calculator" className="text-desert-primary font-bold underline">حاسبة SIP</Link>{' '}
          من Sauditoolhub لترى كيف يمكن أن تنمو استثماراتك الشهرية. اكتشف أيضاً{' '}
          <Link href="/sama-loan-calculator" className="text-desert-primary underline">حاسبة قرض ساما</Link>{' '}
          لفهم قدرتك على الاقتراض، و{' '}
          <Link href="/zakat-calculator" className="text-desert-primary underline">حاسبة الزكاة</Link>{' '}
          لإدارة التزامات الزكاة السنوية، و{' '}
          <Link href="/eosb-calculator" className="text-desert-primary underline">حاسبة مكافأة نهاية الخدمة</Link>{' '}
          للتخطيط لاستثمار مكافأة نهاية خدمتك.
        </p>
        <p className="text-gray-400 text-sm">
          زوروا <Link href="/blog" className="text-desert-primary underline">مدونتنا</Link> للمزيد من المقالات حول التمويل الشخصي في السعودية.
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
        تقدم خطط الاستثمار الدوري (SIP) واحدة من أكثر الطرق سهولة وفعالية لبناء الثروة طويلة الأجل في السعودية. من خلال الاستثمار المنتظم في صناديق الاستثمار عبر منصات منظمة مثل الراجحي المالية والأهلي كابيتال أو المستشارين الآليين مثل دراية وملاّء، يمكنك تسخير قوة الفائدة المركبة لتحقيق أهدافك المالية.
      </p>
      <p>
        تذكر، أفضل وقت للبدء في الاستثمار كان البارحة. ثاني أفضل وقت هو اليوم. استخدم{' '}
        <Link href="/sip-calculator" className="text-desert-primary font-bold underline">حاسبة عائد SIP المجانية</Link>{' '}
        لبدء التخطيط لرحلتك الاستثمارية الآن.
      </p>
    </article>
  )
}

function UrContent() {
  return (
    <article className="prose prose-invert max-w-none prose-headings:text-desert-primary prose-a:text-desert-primary prose-strong:text-white prose-li:text-gray-300" dir="rtl">
      <h1>سعودی عرب میں میوچل فنڈز اور ماہانہ سرمایہ کاری کی مکمل گائیڈ 2026</h1>

      <div className="not-prose glass p-6 rounded-xl mb-8">
        <p className="text-gray-300 text-lg leading-relaxed">
          تصور کریں کہ آپ ہر ماہ 1,000 ریال نکال کر رکھیں اور دس سالوں میں یہ رقم بڑھ کر تقریباً 185,000 ریال ہو جائے — بغیر کسی محنت کے۔ یہ ہے ماہانہ سرمایہ کاری (SIP) اور کمپاؤنڈ انٹرسٹ کی طاقت۔ ایک ایسی دنیا میں جہاں مہنگائی بینک اکاؤنٹ میں پڑی رقم کی قدر کو کم کر دیتی ہے، میوچل فنڈز میں SIP کے ذریعے سرمایہ کاری سعودی عرب کے رہائشیوں کے لیے دولت بنانے کی سب سے آسان اور مؤثر حکمت عملیوں میں سے ایک بن گئی ہے۔
        </p>
        <p className="text-gray-300 text-lg leading-relaxed mt-4">
          چاہے آپ سعودی شہری ہیں جو ریٹائرمنٹ کا منصوبہ بنا رہے ہیں، ایک غیر ملکی جو بچوں کی تعلیم یا گھر کی ادائیگی کے لیے بچت کر رہے ہیں، یا ایک نوجوان پیشہ ور جو ابھی سرمایہ کاری کا سفر شروع کر رہے ہیں — SIP ایک منظم اور کم دباؤ والا طریقہ پیش کرتا ہے جس میں مارکیٹ کے وقت کا اندازہ لگانے یا بڑی رقم کی ضرورت نہیں ہوتی۔
        </p>
        <p className="text-gray-300 text-lg leading-relaxed mt-4">
          یہ گائیڈ سعودی عرب 2026 میں SIP اور میوچل فنڈ سرمایہ کاری کے بارے میں ہر وہ چیز بتاتا ہے جس کی آپ کو ضرورت ہے: SIP کیسے کام کرتی ہے اور کمپاؤنڈنگ کا ریاضی، الراجی کیپٹل اور درایہ سمارٹ جیسے بہترین پلیٹ فارمز، حقیقی زندگی کی مثالیں، CMA کے قوانین اور شریعہ مطابق سرمایہ کاری، اور ہمارے مفت{' '}
          <Link href="/sip-calculator" className="text-desert-primary font-bold underline">SIP ریٹرن کیلکولیٹر</Link>{' '}
          کے استعمال کے مراحل۔
        </p>
      </div>

      <h2>سعودی عرب میں میوچل فنڈز اور ماہانہ سرمایہ کاری (SIP) کیا ہیں؟</h2>
      <p>
        <strong>میوچل فنڈ</strong> ایک مشترکہ سرمایہ کاری کا ذریعہ ہے جو متعدد سرمایہ کاروں سے رقم جمع کر کے اسٹاک، بانڈز، صکوک یا دیگر سیکیورٹیز کا متنوع پورٹ فولیو خریدتا ہے۔ ہر سرمایہ کار فنڈ کے یونٹس کا مالک ہوتا ہے، اور ان یونٹس کی قیمت بنیادی اثاثوں کی کارکردگی کی بنیاد پر بڑھتی یا گرتی ہے۔
      </p>
      <p>
        <strong>ماہانہ سرمایہ کاری (SIP)</strong> میوچل فنڈز میں سرمایہ کاری کا ایک طریقہ ہے جہاں آپ باقاعدہ وقفوں پر — عام طور پر ماہانہ — ایک مقررہ رقم جمع کراتے ہیں۔ مارکیٹ کی نقل و حرکت کا اندازہ لگانے کی کوشش کرنے کے بجائے، SIP آپ کو مارکیٹ کے حالات سے قطع نظر مسلسل سرمایہ کاری کرنے دیتا ہے۔ جب قیمتیں کم ہوتی ہیں، آپ کی مقررہ رقم زیادہ یونٹس خریدتی ہے؛ جب قیمتیں زیادہ ہوتی ہیں، تو یہ کم یونٹس خریدتی ہے۔ وقت گزرنے کے ساتھ، یہ آپ کی فی یونٹ لاگت کو اوسط کر دیتا ہے — جسے <strong>روپیہ لاگت اوسط</strong> کہتے ہیں۔
      </p>

      <div className="not-prose glass p-5 rounded-xl mb-6">
        <h3 className="text-desert-primary font-semibold mb-3">کیپیٹل مارکیٹ اتھارٹی (CMA) اور فنڈ ریگولیشن</h3>
        <p className="text-gray-300 text-sm mb-3">
          کیپیٹل مارکیٹ اتھارٹی (CMA) سعودی سرمایہ مارکیٹ کی بنیادی ریگولیٹر ہے، جس میں تمام میوچل فنڈز اور سرمایہ کاری پلیٹ فارمز شامل ہیں۔ 2004 میں کیپیٹل مارکیٹ لا کے تحت قائم کردہ CMA:
        </p>
        <ul className="space-y-1 text-gray-400 text-sm list-disc list-inside">
          <li>تمام سرمایہ کاری فنڈز اور فنڈ مینیجرز کو لائسنس دیتا ہے اور ان کی نگرانی کرتا ہے</li>
          <li>افشاء کے تقاضے نافذ کرتا ہے — تمام فنڈز کو پراسپیکٹس اور میعاد رپورٹس شائع کرنی ہوں گی</li>
          <li>شریعہ مطابق فنڈ کی درجہ بندی کے قواعد مرتب کرتا ہے</li>
          <li>نئے فینٹیک ریگولیشنز کے تحت روبو ایڈوائزرز کو ریگولیٹ کرتا ہے</li>
          <li>سخت کاروباری اصولوں کے ذریعے سرمایہ کاروں کا تحفظ کرتا ہے</li>
        </ul>
      </div>

      <h2>SIP کیسے کام کرتی ہے — کمپاؤنڈ گروتھ کا ریاضی</h2>
      <p>
        SIP کا جادو <strong>کمپاؤنڈ انٹرسٹ</strong> کی طاقت میں پوشیدہ ہے۔ البرٹ آئن سٹائن نے کمپاؤنڈ انٹرسٹ کو دنیا کا آٹھواں عجوبہ قرار دیا۔ جب آپ SIP کے ذریعے سرمایہ کاری کرتے ہیں، تو نہ صرف آپ کا اصل سرمایہ منافع کماتا ہے، بلکہ وہ منافع بھی خود منافع کماتے ہیں — جو وقت کے ساتھ تیزی سے بڑھتا ہے۔
      </p>

      <div className="not-prose glass p-5 rounded-xl mb-6">
        <h3 className="text-desert-primary font-semibold mb-3">SIP فارمولا آسان الفاظ میں</h3>
        <div className="bg-[#0A0E1A] p-4 rounded-lg text-center mb-3">
          <p className="text-desert-gold text-xl font-mono" dir="ltr">FV = P x [((1 + r)<sup>n</sup> - 1) / r] x (1 + r)</p>
        </div>
        <div className="space-y-2">
          <p className="text-gray-300 text-sm"><strong className="text-white">FV</strong> = مستقبل کی قیمت</p>
          <p className="text-gray-300 text-sm"><strong className="text-white">P</strong> = ماہانہ سرمایہ کاری</p>
          <p className="text-gray-300 text-sm"><strong className="text-white">r</strong> = ماہانہ واپسی کی شرح</p>
          <p className="text-gray-300 text-sm"><strong className="text-white">n</strong> = ماہانہ اقساط کی کل تعداد</p>
        </div>
      </div>

      <div className="not-prose glass p-5 rounded-xl mb-6">
        <h3 className="text-desert-primary font-semibold mb-3">5، 10 اور 20 سال کا موازنہ</h3>
        <div className="bg-[#0A0E1A] p-4 rounded-lg text-gray-300 text-sm">
          <p className="mb-3">1,000 ریال ماہانہ 8% سالانہ پر:</p>
          <table className="w-full">
            <thead>
              <tr className="text-white border-b border-gray-700">
                <th className="text-right py-2">مدت</th>
                <th className="text-right py-2">کل سرمایہ کاری</th>
                <th className="text-right py-2">مستقبل کی قیمت</th>
                <th className="text-right py-2">حاصل شدہ دولت</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-gray-700/50"><td className="py-2 text-right">5 سال</td><td className="py-2 text-right">60,000 SAR</td><td className="py-2 text-right text-desert-gold">73,925 SAR</td><td className="py-2 text-right text-green-400">+13,925 SAR</td></tr>
              <tr className="border-b border-gray-700/50"><td className="py-2 text-right">10 سال</td><td className="py-2 text-right">120,000 SAR</td><td className="py-2 text-right text-desert-gold">184,000 SAR</td><td className="py-2 text-right text-green-400">+64,000 SAR</td></tr>
              <tr className="border-b border-gray-700/50"><td className="py-2 text-right">15 سال</td><td className="py-2 text-right">180,000 SAR</td><td className="py-2 text-right text-desert-gold">347,300 SAR</td><td className="py-2 text-right text-green-400">+167,300 SAR</td></tr>
              <tr><td className="py-2 text-right">20 سال</td><td className="py-2 text-right">240,000 SAR</td><td className="py-2 text-right text-desert-gold">589,000 SAR</td><td className="py-2 text-right text-green-400">+349,000 SAR</td></tr>
            </tbody>
          </table>
        </div>
      </div>

      <h2>سعودی عرب میں SIP اور میوچل فنڈز کے بہترین پلیٹ فارمز (2026)</h2>

      <div className="not-prose glass p-5 rounded-xl mb-6">
        <h3 className="text-desert-primary font-semibold mb-3">بنیادی بینک پلیٹ فارمز</h3>
        <div className="space-y-4">
          <div className="bg-[#0A0E1A] p-4 rounded-lg">
            <h4 className="text-desert-accent font-semibold mb-2">الرجی کیپٹل</h4>
            <p className="text-gray-300 text-sm">الرجی بینک کا سرمایہ کاری بازو، خصوصی طور پر شریعہ مطابق فنڈز پیش کرتا ہے۔ SIP کا کم از کم: 500 ریال ماہانہ۔</p>
          </div>
          <div className="bg-[#0A0E1A] p-4 rounded-lg">
            <h4 className="text-desert-accent font-semibold mb-2">SNB کیپٹل (سعودی نیشنل بینک)</h4>
            <p className="text-gray-300 text-sm">خلیج کی سب سے بڑی اثاثہ مینیجرز میں سے ایک، 30 سے زیادہ فنڈز پیش کرتی ہے۔ SIP کا کم از کم: 1,000 ریال ماہانہ۔</p>
          </div>
          <div className="bg-[#0A0E1A] p-4 rounded-lg">
            <h4 className="text-desert-accent font-semibold mb-2">الریاض کیپٹل</h4>
            <p className="text-gray-300 text-sm">ریاض بینک کا سرمایہ کاری بازو۔ SIP کا کم از کم: 500 ریال ماہانہ۔ مسابقتی انتظامی فیسوں کے لیے مشہور۔</p>
          </div>
        </div>
      </div>

      <div className="not-prose glass p-5 rounded-xl mb-6">
        <h3 className="text-desert-primary font-semibold mb-3">روبو ایڈوائزرز اور ڈیجیٹل پلیٹ فارمز</h3>
        <div className="space-y-4">
          <div className="bg-[#0A0E1A] p-4 rounded-lg">
            <h4 className="text-desert-accent font-semibold mb-2">درایہ سمارٹ (سابقہ درایہ فائنانشل)</h4>
            <p className="text-gray-300 text-sm">سعودی عرب کا ایک اہم ڈیجیٹل سرمایہ کاری پلیٹ فارم۔ SIP کا کم از کم: 100 ریال ماہانہ۔ CMA ریگولیٹڈ اور شریعہ مطابق اختیارات دستیاب۔</p>
          </div>
          <div className="bg-[#0A0E1A] p-4 rounded-lg">
            <h4 className="text-desert-accent font-semibold mb-2">ملاّء</h4>
            <p className="text-gray-300 text-sm">سعودی روبو ایڈوائزر جو خودکار شریعہ مطابق سرمایہ کاری فراہم کرتا ہے۔ SIP کا کم از کم: 500 ریال۔</p>
          </div>
          <div className="bg-[#0A0E1A] p-4 rounded-lg">
            <h4 className="text-desert-accent font-semibold mb-2">اوبیان کیپٹل</h4>
            <p className="text-gray-300 text-sm">شریعہ مطابق، ہدف پر مبنی سرمایہ کاری پلیٹ فارم۔ کوئی داخلہ یا خارجی فیس نہیں۔</p>
          </div>
        </div>
      </div>

      <h2>SIP کی عملی مثالیں</h2>

      <div className="not-prose glass p-5 rounded-xl mb-6">
        <h3 className="text-desert-primary font-semibold mb-3">مثال 1: بچت فنڈ — 1,000 ریال ماہانہ 10 سال کے لیے</h3>
        <div className="bg-[#0A0E1A] p-4 rounded-lg text-gray-300 text-sm">
          <p><strong className="text-white">ماہانہ سرمایہ کاری:</strong> 1,000 SAR</p>
          <p><strong className="text-white">مدت:</strong> 10 سال (120 ماہ)</p>
          <p><strong className="text-white">متوقع واپسی:</strong> 8%</p>
          <p><strong className="text-white">مستقبل کی قیمت:</strong> <span className="text-desert-gold">184,000 SAR</span></p>
          <p><strong className="text-white">حاصل شدہ دولت:</strong> <span className="text-green-400">64,000 SAR</span></p>
        </div>
      </div>

      <div className="not-prose glass p-5 rounded-xl mb-6">
        <h3 className="text-desert-primary font-semibold mb-3">مثال 2: ریٹائرمنٹ پلاننگ — 2,500 ریال ماہانہ 20 سال کے لیے</h3>
        <div className="bg-[#0A0E1A] p-4 rounded-lg text-gray-300 text-sm">
          <p><strong className="text-white">ماہانہ سرمایہ کاری:</strong> 2,500 SAR</p>
          <p><strong className="text-white">مدت:</strong> 20 سال (240 ماہ)</p>
          <p><strong className="text-white">متوقع واپسی:</strong> 8%</p>
          <p><strong className="text-white">مستقبل کی قیمت:</strong> <span className="text-desert-gold">14,72,500 SAR</span></p>
          <p><strong className="text-white">حاصل شدہ دولت:</strong> <span className="text-green-400">8,72,500 SAR</span></p>
        </div>
      </div>

      <h2>SIP اور یکمشت سرمایہ کاری میں فرق</h2>
      <p>
        SIP باقاعدہ تنخواہ داروں کے لیے بہترین ہے — یہ مارکیٹ ٹائمنگ رسک کو کم کرتا ہے اور مالی نظم و ضبط پیدا کرتا ہے۔ یکمشت سرمایہ کاری اس وقت بہتر ہے جب بڑی رقم دستیاب ہو (EOSB، بونس، وراثت)۔ بہت سے سرمایہ کار دونوں حکمت عملیوں کا مجموعہ استعمال کرتے ہیں۔
      </p>

      <h2>خطرات اور CMA کے قوانین</h2>
      <p>
        سعودی عرب میں میوچل فنڈز CMA کے تحت ریگولیٹ ہیں۔ اہم خطرات میں مارکیٹ رسک، شرح سود رسک، کرنسی رسک، اور لیکویڈیٹی رسک شامل ہیں۔ CMA خطرے کی درجہ بندی کا تعین کرتی ہے۔ شریعہ مطابق فنڈز سود سے بچتے ہیں اور تطہیر کے اصولوں پر عمل کرتے ہیں۔
      </p>

      <h2>Sauditoolhub SIP کیلکولیٹر کا استعمال</h2>
      <p>
        ہمارا مفت{' '}
        <Link href="/sip-calculator" className="text-desert-primary font-bold underline">SIP ریٹرن کیلکولیٹر</Link>{' '}
        آپ کو اپنے مالی اہداف کی منصوبہ بندی میں مدد کرتا ہے۔
      </p>

      <div className="not-prose glass p-6 rounded-xl mb-8 mt-8 text-center">
        <h3 className="text-desert-gold font-semibold mb-3">آج ہی اپنے مالی مستقبل کی منصوبہ بندی شروع کریں</h3>
        <p className="text-gray-300 mb-4">
          <Link href="/sip-calculator" className="text-desert-primary font-bold underline">SIP کیلکولیٹر</Link> استعمال کریں،{' '}
          <Link href="/sama-loan-calculator" className="text-desert-primary underline">ساما لون کیلکولیٹر</Link> اور{' '}
          <Link href="/zakat-calculator" className="text-desert-primary underline">زکوٰۃ کیلکولیٹر</Link> اور{' '}
          <Link href="/eosb-calculator" className="text-desert-primary underline">EOSB کیلکولیٹر</Link> بھی دیکھیں۔
        </p>
        <p className="text-gray-400 text-sm">
          ہماری <Link href="/blog" className="text-desert-primary underline">بلاگ</Link> ملاحظہ کریں۔
        </p>
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
        ماہانہ سرمایہ کاری (SIP) سعودی عرب میں طویل مدتی دولت بنانے کے سب سے آسان اور طاقتور طریقوں میں سے ایک ہے۔ الراجی کیپٹل، SNB کیپٹل، یا درایہ جیسے ریگولیٹڈ پلیٹ فارمز کے ذریعے میوچل فنڈز میں مسلسل سرمایہ کاری کرکے، آپ کمپاؤنڈ انٹرسٹ کی طاقت کو استعمال کر سکتے ہیں۔
      </p>
      <p>
        یاد رکھیں، سرمایہ کاری شروع کرنے کا بہترین وقت کل تھا۔ دوسرا بہترین وقت آج ہے۔{' '}
        <Link href="/sip-calculator" className="text-desert-primary font-bold underline">مفت SIP کیلکولیٹر</Link> استعمال کریں۔
      </p>
    </article>
  )
}

function TlContent() {
  return (
    <article className="prose prose-invert max-w-none prose-headings:text-desert-primary prose-a:text-desert-primary prose-strong:text-white prose-li:text-gray-300">
      <h1>Kumpletong Gabay sa SIP at Mutual Fund Investment Returns sa Saudi Arabia 2026</h1>

      <div className="not-prose glass p-6 rounded-xl mb-8">
        <p className="text-gray-300 text-lg leading-relaxed">
          Isipin na magtabi ng 1,000 SAR bawat buwan at panoorin itong lumago hanggang halos 185,000 SAR sa loob ng sampung taon — nang walang ginagawa. Iyan ang kapangyarihan ng Systematic Investment Plan (SIP) na sinamahan ng compound interest. Sa mundong ginagastos ng inflation ang halaga ng perang nakatago sa bank account, ang pamumuhunan sa mutual funds sa pamamagitan ng SIP ay naging isa sa pinakanaa-access at epektibong paraan ng pagpapayaman para sa mga residente ng Saudi Arabia.
        </p>
        <p className="text-gray-300 text-lg leading-relaxed mt-4">
          Kung ikaw man ay isang Saudi national na nagpaplano para sa pagreretiro, isang expatriate na nag-iipon para sa edukasyon ng mga anak o down payment sa bahay, o isang young professional na nagsisimula pa lang sa iyong investment journey — nag-aalok ang SIP ng disiplinado at mababang-stress na paraan upang makilahok sa financial markets nang hindi kinakailangang i-time ang market o magkaroon ng malaking halaga nang upfront.
        </p>
        <p className="text-gray-300 text-lg leading-relaxed mt-4">
          Saklaw ng gabay na ito ang lahat ng kailangan mong malaman tungkol sa SIP at mutual fund investments sa Saudi Arabia para sa 2026: paano gumagana ang SIP at ang matematika sa likod ng compounding, ang pinakamahusay na platform kabilang ang Al Rajhi Capital, SNB Capital, at robo-advisors tulad ng Derayah Smart, mga halimbawa ng real-life calculation, CMA regulations at Sharia-compliant investing, at step-by-step na gabay sa paggamit ng aming libreng{' '}
          <Link href="/sip-calculator" className="text-desert-primary font-bold underline">SIP Return Calculator</Link>{' '}
          upang planuhin ang iyong mga financial goals.
        </p>
      </div>

      <h2>Ano ang Mutual Funds at SIP sa Saudi Arabia?</h2>
      <p>
        Ang <strong>mutual fund</strong> ay isang pooled investment vehicle na nangongolekta ng pera mula sa maraming investors upang bumili ng diversified portfolio ng stocks, bonds, sukuk, o iba pang securities. Bawat investor ay nagmamay-ari ng units ng fund, at ang halaga ng mga units na iyon ay tumataas o bumababa batay sa performance ng pinagbabatayan na assets. Ang mutual funds ay pinamamahalaan ng professional fund managers.
      </p>
      <p>
        Ang <strong>Systematic Investment Plan (SIP)</strong> ay isang paraan ng pamumuhunan sa mutual funds kung saan nag-aambag ka ng fixed na halaga sa regular na pagitan — karaniwang buwan-buwan. Sa halip na subukang hulaan ang market movements, pinapayagan ka ng SIP na mamuhunan nang tuluy-tuloy anuman ang market conditions. Kapag mababa ang presyo, ang iyong fixed contribution ay bumibili ng mas maraming units; kapag mataas ang presyo, bumibili ito ng mas kaunting units. Sa paglipas ng panahon, ito ay nag-a-average ng iyong cost per unit — isang strategy na kilala bilang <strong>rupee-cost averaging</strong>.
      </p>

      <div className="not-prose glass p-5 rounded-xl mb-6">
        <h3 className="text-desert-primary font-semibold mb-3">Capital Market Authority (CMA) at Fund Regulation</h3>
        <p className="text-gray-300 text-sm mb-3">
          Ang CMA ang pangunahing regulator ng Saudi capital market, kabilang ang lahat ng mutual funds at investment platforms na tumatakbo sa Kaharian. Itinatag noong 2004 sa ilalim ng Capital Market Law:
        </p>
        <ul className="space-y-1 text-gray-400 text-sm list-disc list-inside">
          <li>Nagli-license at nangangasiwa sa lahat ng investment funds at fund managers</li>
          <li>Nagpapatupad ng disclosure requirements — dapat mag-publish ng prospectuses at periodic reports ang lahat ng funds</li>
          <li>Nagtatakda ng mga patakaran para sa Sharia-compliant fund classification</li>
          <li>Nagre-regulate ng robo-advisors sa ilalim ng Fintech regulations</li>
          <li>Pinoprotektahan ang investors sa pamamagitan ng strict conduct of business rules</li>
        </ul>
      </div>

      <h2>Paano Gumagana ang SIP — Ang Matematika ng Compound Growth</h2>
      <p>
        Ang magic ng SIP ay nasa kapangyarihan ng <strong>compound interest</strong>. Sinasabing tinawag ni Albert Einstein ang compounding na ikawalong wonder ng mundo. Kapag namuhunan ka sa pamamagitan ng SIP, hindi lamang ang iyong original principal ang kumikita ng returns, ngunit ang mga returns na iyon mismo ay kumikita rin ng returns — lumilikha ng snowball effect na lumalaki nang exponentially sa paglipas ng panahon.
      </p>

      <div className="not-prose glass p-5 rounded-xl mb-6">
        <h3 className="text-desert-primary font-semibold mb-3">Ang SIP Formula Ipinaliwanag</h3>
        <div className="bg-[#0A0E1A] p-4 rounded-lg text-center mb-3">
          <p className="text-desert-gold text-xl font-mono">FV = P x [((1 + r)<sup>n</sup> - 1) / r] x (1 + r)</p>
        </div>
        <div className="space-y-2">
          <p className="text-gray-300 text-sm"><strong className="text-white">FV</strong> = Future Value (kabuuang yaman)</p>
          <p className="text-gray-300 text-sm"><strong className="text-white">P</strong> = Monthly investment amount</p>
          <p className="text-gray-300 text-sm"><strong className="text-white">r</strong> = Monthly rate of return (annual return / 12)</p>
          <p className="text-gray-300 text-sm"><strong className="text-white">n</strong> = Total number of monthly installments</p>
        </div>
      </div>

      <div className="not-prose glass p-5 rounded-xl mb-6">
        <h3 className="text-desert-primary font-semibold mb-3">Paghahambing ng Paglago: 5, 10, at 20 Taon</h3>
        <div className="bg-[#0A0E1A] p-4 rounded-lg text-gray-300 text-sm">
          <p className="mb-3">1,000 SAR bawat buwan sa 8% annual return:</p>
          <table className="w-full">
            <thead>
              <tr className="text-white border-b border-gray-700">
                <th className="text-left py-2">Panahon</th>
                <th className="text-left py-2">Kabuuang Invested</th>
                <th className="text-left py-2">Future Value</th>
                <th className="text-left py-2">Yaman na Natamo</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-gray-700/50"><td className="py-2">5 Taon</td><td className="py-2">60,000 SAR</td><td className="py-2 text-desert-gold">73,925 SAR</td><td className="py-2 text-green-400">+13,925 SAR</td></tr>
              <tr className="border-b border-gray-700/50"><td className="py-2">10 Taon</td><td className="py-2">120,000 SAR</td><td className="py-2 text-desert-gold">184,000 SAR</td><td className="py-2 text-green-400">+64,000 SAR</td></tr>
              <tr className="border-b border-gray-700/50"><td className="py-2">15 Taon</td><td className="py-2">180,000 SAR</td><td className="py-2 text-desert-gold">347,300 SAR</td><td className="py-2 text-green-400">+167,300 SAR</td></tr>
              <tr><td className="py-2">20 Taon</td><td className="py-2">240,000 SAR</td><td className="py-2 text-desert-gold">589,000 SAR</td><td className="py-2 text-green-400">+349,000 SAR</td></tr>
            </tbody>
          </table>
        </div>
      </div>

      <h2>Mga Nangungunang Platform para sa SIP sa KSA (2026)</h2>

      <div className="not-prose glass p-5 rounded-xl mb-6">
        <h3 className="text-desert-primary font-semibold mb-3">Traditional Bank Platforms</h3>
        <div className="space-y-4">
          <div className="bg-[#0A0E1A] p-4 rounded-lg">
            <h4 className="text-desert-accent font-semibold mb-2">Al Rajhi Capital</h4>
            <p className="text-gray-300 text-sm">Investment arm ng Al Rajhi Bank, nag-aalok ng eksklusibong Sharia-compliant mutual funds. SIP minimum: 500 SAR kada buwan.</p>
          </div>
          <div className="bg-[#0A0E1A] p-4 rounded-lg">
            <h4 className="text-desert-accent font-semibold mb-2">SNB Capital (Saudi National Bank)</h4>
            <p className="text-gray-300 text-sm">Isa sa pinakamalaking asset managers sa GCC, nag-aalok ng 30+ mutual funds. SIP minimum: 1,000 SAR kada buwan.</p>
          </div>
          <div className="bg-[#0A0E1A] p-4 rounded-lg">
            <h4 className="text-desert-accent font-semibold mb-2">Riyad Capital</h4>
            <p className="text-gray-300 text-sm">Investment arm ng Riyad Bank. SIP minimum: 500 SAR kada buwan. Competitive management fees.</p>
          </div>
        </div>
      </div>

      <div className="not-prose glass p-5 rounded-xl mb-6">
        <h3 className="text-desert-primary font-semibold mb-3">Robo-Advisors at Digital Platforms</h3>
        <div className="space-y-4">
          <div className="bg-[#0A0E1A] p-4 rounded-lg">
            <h4 className="text-desert-accent font-semibold mb-2">Derayah Smart</h4>
            <p className="text-gray-300 text-sm">Digital investment platform na may automated portfolio management. SIP minimum: 100 SAR kada buwan.</p>
          </div>
          <div className="bg-[#0A0E1A] p-4 rounded-lg">
            <h4 className="text-desert-accent font-semibold mb-2">Malaa</h4>
            <p className="text-gray-300 text-sm">Saudi robo-advisor na nag-aalok ng automated Sharia-compliant investment management. SIP minimum: 500 SAR.</p>
          </div>
          <div className="bg-[#0A0E1A] p-4 rounded-lg">
            <h4 className="text-desert-accent font-semibold mb-2">Abyan Capital</h4>
            <p className="text-gray-300 text-sm">Digital asset management platform na nag-aalok ng Sharia-compliant, goal-based investing. Walang entry o exit fees.</p>
          </div>
        </div>
      </div>

      <h2>Real-Life SIP Calculation Examples</h2>

      <div className="not-prose glass p-5 rounded-xl mb-6">
        <h3 className="text-desert-primary font-semibold mb-3">Halimbawa 1: Pag-iipon — 1,000 SAR/month sa loob ng 10 Taon</h3>
        <div className="bg-[#0A0E1A] p-4 rounded-lg text-gray-300 text-sm">
          <p><strong className="text-white">Monthly Investment:</strong> 1,000 SAR</p>
          <p><strong className="text-white">Panahon:</strong> 10 taon (120 buwan)</p>
          <p><strong className="text-white">Inaasahang Return:</strong> 8%</p>
          <p><strong className="text-white">Future Value:</strong> <span className="text-desert-gold">184,000 SAR</span></p>
          <p><strong className="text-white">Yaman na Natamo:</strong> <span className="text-green-400">64,000 SAR</span></p>
        </div>
      </div>

      <div className="not-prose glass p-5 rounded-xl mb-6">
        <h3 className="text-desert-primary font-semibold mb-3">Halimbawa 2: Retirement Planning — 2,500 SAR/month sa loob ng 20 Taon</h3>
        <div className="bg-[#0A0E1A] p-4 rounded-lg text-gray-300 text-sm">
          <p><strong className="text-white">Monthly Investment:</strong> 2,500 SAR</p>
          <p><strong className="text-white">Panahon:</strong> 20 taon (240 buwan)</p>
          <p><strong className="text-white">Inaasahang Return:</strong> 8%</p>
          <p><strong className="text-white">Future Value:</strong> <span className="text-desert-gold">1,472,500 SAR</span></p>
          <p><strong className="text-white">Yaman na Natamo:</strong> <span className="text-green-400">872,500 SAR</span></p>
        </div>
      </div>

      <h2>SIP vs. Lump Sum vs. Savings Account</h2>
      <p>
        Ang SIP ay mainam para sa regular na may trabaho — nababawasan nito ang market timing risk at nagtatayo ng financial discipline. Ang lump sum ay mas mainam kapag may malaking halaga (EOSB, bonus, inheritance). Ang savings account na 2% ay natatalo sa inflation. Sa paglipas ng 10 taon, ang 1,000 SAR/month sa SIP sa 8% ay nagiging 184,000 SAR samantalang sa savings account ay 133,000 SAR lamang.
      </p>

      <h2>Mga Panganib at Regulasyon ng CMA</h2>
      <p>
        Ang mutual funds sa Saudi Arabia ay regulated ng CMA. Kasama sa mga pangunahing panganib: market risk, interest rate risk, currency risk, liquidity risk, at manager risk. Ang Sharia-compliant funds ay umiiwas sa riba (interest) at sumusunod sa purification guidelines. Palaging i-verify ang Sharia compliance certificate sa fund prospectus bago mamuhunan.
      </p>

      <h2>Paano Gamitin ang Sauditoolhub SIP Calculator</h2>
      <p>
        Gamitin ang aming libreng{' '}
        <Link href="/sip-calculator" className="text-desert-primary font-bold underline">SIP Return Calculator</Link>{' '}
        upang planuhin ang iyong mga financial goals.
      </p>

      <div className="not-prose glass p-6 rounded-xl mb-8 mt-8 text-center">
        <h3 className="text-desert-gold font-semibold mb-3">Simulan ang Pagpaplano ng Iyong Financial Future Ngayon</h3>
        <p className="text-gray-300 mb-4">
          Gamitin ang <Link href="/sip-calculator" className="text-desert-primary font-bold underline">SIP Calculator</Link>,{' '}
          <Link href="/sama-loan-calculator" className="text-desert-primary underline">SAMA Loan Calculator</Link> at{' '}
          <Link href="/zakat-calculator" className="text-desert-primary underline">Zakat Calculator</Link> at ang{' '}
          <Link href="/eosb-calculator" className="text-desert-primary underline">EOSB Calculator</Link>.
        </p>
        <p className="text-gray-400 text-sm">
          Bisitahin ang aming <Link href="/blog" className="text-desert-primary underline">blog</Link> para sa higit pang insights.
        </p>
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
        Ang Systematic Investment Plans (SIPs) ay nag-aalok ng isa sa pinakanaa-access at makapangyarihang paraan upang bumuo ng pangmatagalang yaman sa Saudi Arabia. Sa pamamagitan ng patuloy na pamumuhunan sa mutual funds sa pamamagitan ng regulated platforms tulad ng Al Rajhi Capital, SNB Capital, o digital robo-advisors tulad ng Derayah at Malaa, maaari mong gamitin ang kapangyarihan ng compound interest upang makamit ang iyong mga financial goals.
      </p>
      <p>
        Tandaan, ang pinakamagandang oras para magsimulang mamuhunan ay kahapon. Ang pangalawang pinakamagandang oras ay ngayon. Gamitin ang aming{' '}
        <Link href="/sip-calculator" className="text-desert-primary font-bold underline">libreng SIP Return Calculator</Link>{' '}
        upang simulan ang pagpaplano ng iyong investment journey ngayon din.
      </p>
    </article>
  )
}

function BnContent() {
  return (
    <article className="prose prose-invert max-w-none prose-headings:text-desert-primary prose-a:text-desert-primary prose-strong:text-white prose-li:text-gray-300">
      <h1>সৌদি আরবে SIP ও মিউচুয়াল ফান্ড বিনিয়োগ রিটার্নের সম্পূর্ণ গাইড ২০২৬</h1>

      <div className="not-prose glass p-6 rounded-xl mb-8">
        <p className="text-gray-300 text-lg leading-relaxed">
          কল্পনা করুন প্রতি মাসে ১,০০০ SAR জমাচ্ছেন এবং দশ বছরে তা বেড়ে প্রায় ১৮৫,০০০ SAR হচ্ছে — কোনো পরিশ্রম ছাড়াই। এটি হলো সিস্টেমেটিক ইনভেস্টমেন্ট প্ল্যান (SIP) এবং চক্রবৃদ্ধি সুদের শক্তি। এমন এক পৃথিবীতে যেখানে মূল্যস্ফীতি ব্যাংক অ্যাকাউন্টে পড়ে থাকা টাকার মূল্য কমিয়ে দেয়, মিউচুয়াল ফান্ডে SIP-এর মাধ্যমে বিনিয়োগ সৌদি আরবের বাসিন্দাদের জন্য সবচেয়ে সহজলভ্য এবং কার্যকর সম্পদ তৈরির কৌশল হয়ে উঠেছে।
        </p>
        <p className="text-gray-300 text-lg leading-relaxed mt-4">
          আপনি একজন সৌদি নাগরিক যে অবসরের পরিকল্পনা করছেন, একজন প্রবাসী যে সন্তানের শিক্ষা বা বাড়ির ডাউন পেমেন্টের জন্য সঞ্চয় করছেন, বা একজন তরুণ পেশাজীবী যে সবেমাত্র আপনার বিনিয়োগ যাত্রা শুরু করছেন — SIP বাজার সময় নির্ধারণ বা বড় অঙ্কের টাকা আগাম প্রয়োজন ছাড়াই আর্থিক বাজারে অংশ নেওয়ার একটি শৃঙ্খলাবদ্ধ এবং কম চাপের উপায় অফার করে।
        </p>
        <p className="text-gray-300 text-lg leading-relaxed mt-4">
          এই গাইডটি ২০২৬ সালে সৌদি আরবে SIP এবং মিউচুয়াল ফান্ড বিনিয়োগ সম্পর্কে আপনার যা কিছু জানা দরকার তা কভার করে: SIP কীভাবে কাজ করে এবং চক্রবৃদ্ধির পিছনের গণিত, আল রাজি ক্যাপিটাল, SNB ক্যাপিটাল এবং দেরায়াহ স্মার্টের মতো রোবো-অ্যাডভাইজার সহ সেরা প্ল্যাটফর্ম, বাস্তব জীবনের গণনার উদাহরণ, CMA নিয়মাবলী এবং শরিয়া-সম্মত বিনিয়োগ, এবং আমাদের বিনামূল্যের{' '}
          <Link href="/sip-calculator" className="text-desert-primary font-bold underline">SIP রিটার্ন ক্যালকুলেটর</Link>{' '}
          ব্যবহারের ধাপে ধাপে নির্দেশিকা।
        </p>
      </div>

      <h2>সৌদি আরবে মিউচুয়াল ফান্ড এবং SIP কী?</h2>
      <p>
        <strong>মিউচুয়াল ফান্ড</strong> হল একটি পুলকৃত বিনিয়োগ বাহন যা একাধিক বিনিয়োগকারীর কাছ থেকে অর্থ সংগ্রহ করে স্টক, বন্ড, সুকুক বা অন্যান্য সিকিউরিটির একটি বৈচিত্র্যপূর্ণ পোর্টফোলিও কেনে। প্রতিটি বিনিয়োগকারী ফান্ডের ইউনিটের মালিক হন এবং সেই ইউনিটগুলির মান অন্তর্নিহিত সম্পদের কর্মক্ষমতার উপর ভিত্তি করে বাড়ে বা কমে।
      </p>
      <p>
        <strong>সিস্টেমেটিক ইনভেস্টমেন্ট প্ল্যান (SIP)</strong> হল মিউচুয়াল ফান্ডে বিনিয়োগের একটি পদ্ধতি যেখানে আপনি নিয়মিত বিরতিতে — সাধারণত মাসিক — একটি নির্দিষ্ট পরিমাণ অর্থ জমা দেন। বাজারের গতিবিধি অনুমান করার চেষ্টা করার পরিবর্তে, SIP আপনাকে বাজারের অবস্থা নির্বিশেষে ধারাবাহিকভাবে বিনিয়োগ করতে দেয়। যখন দাম কম থাকে, আপনার নির্দিষ্ট অবদান বেশি ইউনিট কিনে; যখন দাম বেশি থাকে, এটি কম ইউনিট কিনে। সময়ের সাথে সাথে, এটি আপনার প্রতি ইউনিট খরচ গড়ে দেয় — একটি কৌশল যা <strong>রুপি-কস্ট অ্যারেজিং</strong> নামে পরিচিত।
      </p>

      <div className="not-prose glass p-5 rounded-xl mb-6">
        <h3 className="text-desert-primary font-semibold mb-3">ক্যাপিটাল মার্কেট অথরিটি (CMA) এবং ফান্ড নিয়ন্ত্রণ</h3>
        <p className="text-gray-300 text-sm mb-3">
          CMA হল সৌদি ক্যাপিটাল মার্কেটের প্রধান নিয়ন্ত্রক, যার মধ্যে রাজ্যের সমস্ত মিউচুয়াল ফান্ড এবং বিনিয়োগ প্ল্যাটফর্ম অন্তর্ভুক্ত। ২০০৪ সালে ক্যাপিটাল মার্কেট আইনের অধীনে প্রতিষ্ঠিত:
        </p>
        <ul className="space-y-1 text-gray-400 text-sm list-disc list-inside">
          <li>সমস্ত ইনভেস্টমেন্ট ফান্ড এবং ফান্ড ম্যানেজারকে লাইসেন্স ও তত্ত্বাবধান করে</li>
          <li>প্রকাশের প্রয়োজনীয়তা প্রয়োগ করে — সমস্ত ফান্ডকে প্রসপেক্টাস এবং পর্যায়ক্রমিক রিপোর্ট প্রকাশ করতে হবে</li>
          <li>শরিয়া-সম্মত ফান্ড শ্রেণীবিভাগের নিয়ম নির্ধারণ করে</li>
          <li>ফিনটেক নিয়মের অধীনে রোবো-অ্যাডভাইজার নিয়ন্ত্রণ করে</li>
          <li>কঠোর ব্যবসায়িক আচরণ বিধির মাধ্যমে বিনিয়োগকারীদের সুরক্ষা দেয়</li>
        </ul>
      </div>

      <h2>SIP কীভাবে কাজ করে — চক্রবৃদ্ধি বৃদ্ধির গণিত</h2>
      <p>
        SIP-এর জাদু <strong>চক্রবৃদ্ধি সুদের</strong> শক্তিতে নিহিত। কথিত আছে যে আলবার্ট আইনস্টাইন চক্রবৃদ্ধি সুদকে বিশ্বের অষ্টম আশ্চর্য বলেছেন। আপনি যখন SIP-এর মাধ্যমে বিনিয়োগ করেন, তখন শুধু আপনার মূল অর্থই রিটার্ন অর্জন করে না, বরং সেই রিটার্নগুলি নিজেরাও রিটার্ন অর্জন করে — একটি স্নোবল প্রভাব তৈরি করে যা সময়ের সাথে সাথে দ্রুতগতিতে বেড়ে ওঠে।
      </p>

      <div className="not-prose glass p-5 rounded-xl mb-6">
        <h3 className="text-desert-primary font-semibold mb-3">SIP সূত্র সহজ ভাষায়</h3>
        <div className="bg-[#0A0E1A] p-4 rounded-lg text-center mb-3">
          <p className="text-desert-gold text-xl font-mono">FV = P x [((1 + r)<sup>n</sup> - 1) / r] x (1 + r)</p>
        </div>
        <div className="space-y-2">
          <p className="text-gray-300 text-sm"><strong className="text-white">FV</strong> = ভবিষ্যৎ মূল্য</p>
          <p className="text-gray-300 text-sm"><strong className="text-white">P</strong> = মাসিক বিনিয়োগের পরিমাণ</p>
          <p className="text-gray-300 text-sm"><strong className="text-white">r</strong> = মাসিক রিটার্ন রেট</p>
          <p className="text-gray-300 text-sm"><strong className="text-white">n</strong> = মোট মাসিক কিস্তির সংখ্যা</p>
        </div>
      </div>

      <div className="not-prose glass p-5 rounded-xl mb-6">
        <h3 className="text-desert-primary font-semibold mb-3">৫, ১০ এবং ২০ বছরের তুলনা</h3>
        <div className="bg-[#0A0E1A] p-4 rounded-lg text-gray-300 text-sm">
          <p className="mb-3">১,০০০ SAR মাসিক ৮% বার্ষিকে:</p>
          <table className="w-full">
            <thead>
              <tr className="text-white border-b border-gray-700">
                <th className="text-left py-2">সময়কাল</th>
                <th className="text-left py-2">মোট বিনিয়োগ</th>
                <th className="text-left py-2">ভবিষ্যৎ মূল্য</th>
                <th className="text-left py-2">অর্জিত সম্পদ</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-gray-700/50"><td className="py-2">৫ বছর</td><td className="py-2">৬০,০০০ SAR</td><td className="py-2 text-desert-gold">৭৩,৯২৫ SAR</td><td className="py-2 text-green-400">+১৩,৯২৫ SAR</td></tr>
              <tr className="border-b border-gray-700/50"><td className="py-2">১০ বছর</td><td className="py-2">১,২০,০০০ SAR</td><td className="py-2 text-desert-gold">১,৮৪,০০০ SAR</td><td className="py-2 text-green-400">+৬৪,০০০ SAR</td></tr>
              <tr className="border-b border-gray-700/50"><td className="py-2">১৫ বছর</td><td className="py-2">১,৮০,০০০ SAR</td><td className="py-2 text-desert-gold">৩,৪৭,৩০০ SAR</td><td className="py-2 text-green-400">+১,৬৭,৩০০ SAR</td></tr>
              <tr><td className="py-2">২০ বছর</td><td className="py-2">২,৪০,০০০ SAR</td><td className="py-2 text-desert-gold">৫,৮৯,০০০ SAR</td><td className="py-2 text-green-400">+৩,৪৯,০০০ SAR</td></tr>
            </tbody>
          </table>
        </div>
      </div>

      <h2>সৌদি আরবে SIP-এর সেরা প্ল্যাটফর্ম (২০২৬)</h2>

      <div className="not-prose glass p-5 rounded-xl mb-6">
        <h3 className="text-desert-primary font-semibold mb-3">ঐতিহ্যবাহী ব্যাংক প্ল্যাটফর্ম</h3>
        <div className="space-y-4">
          <div className="bg-[#0A0E1A] p-4 rounded-lg">
            <h4 className="text-desert-accent font-semibold mb-2">আল রাজি ক্যাপিটাল</h4>
            <p className="text-gray-300 text-sm">আল রাজি ব্যাংকের বিনিয়োগ শাখা, শুধুমাত্র শরিয়া-সম্মত ফান্ড অফার করে। SIP ন্যূনতম: ৫০০ SAR মাসিক।</p>
          </div>
          <div className="bg-[#0A0E1A] p-4 rounded-lg">
            <h4 className="text-desert-accent font-semibold mb-2">SNB ক্যাপিটাল (সৌদি ন্যাশনাল ব্যাংক)</h4>
            <p className="text-gray-300 text-sm">GCC-এর বৃহত্তম অ্যাসেট ম্যানেজার, ৩০+ মিউচুয়াল ফান্ড অফার করে। SIP ন্যূনতম: ১,০০০ SAR মাসিক।</p>
          </div>
          <div className="bg-[#0A0E1A] p-4 rounded-lg">
            <h4 className="text-desert-accent font-semibold mb-2">রিয়াদ ক্যাপিটাল</h4>
            <p className="text-gray-300 text-sm">রিয়াদ ব্যাংকের বিনিয়োগ শাখা। SIP ন্যূনতম: ৫০০ SAR মাসিক। প্রতিযোগিতামূলক ব্যবস্থাপনা ফি।</p>
          </div>
        </div>
      </div>

      <div className="not-prose glass p-5 rounded-xl mb-6">
        <h3 className="text-desert-primary font-semibold mb-3">রোবো-অ্যাডভাইজার এবং ডিজিটাল প্ল্যাটফর্ম</h3>
        <div className="space-y-4">
          <div className="bg-[#0A0E1A] p-4 rounded-lg">
            <h4 className="text-desert-accent font-semibold mb-2">দেরায়াহ স্মার্ট</h4>
            <p className="text-gray-300 text-sm">ডিজিটাল বিনিয়োগ প্ল্যাটফর্ম। SIP ন্যূনতম: ১০০ SAR মাসিক। CMA নিয়ন্ত্রিত ও শরিয়া-সম্মত।</p>
          </div>
          <div className="bg-[#0A0E1A] p-4 rounded-lg">
            <h4 className="text-desert-accent font-semibold mb-2">মালা</h4>
            <p className="text-gray-300 text-sm">স্বয়ংক্রিয় শরিয়া-সম্মত বিনিয়োগ ব্যবস্থাপনা। SIP ন্যূনতম: ৫০০ SAR।</p>
          </div>
          <div className="bg-[#0A0E1A] p-4 rounded-lg">
            <h4 className="text-desert-accent font-semibold mb-2">আবইয়ান ক্যাপিটাল</h4>
            <p className="text-gray-300 text-sm">শরিয়া-সম্মত, লক্ষ্য-ভিত্তিক বিনিয়োগ। কোনো প্রবেশ বা প্রস্থান ফি নেই।</p>
          </div>
        </div>
      </div>

      <h2>SIP-এর বাস্তব উদাহরণ</h2>

      <div className="not-prose glass p-5 rounded-xl mb-6">
        <h3 className="text-desert-primary font-semibold mb-3">উদাহরণ ১: সঞ্চয় তহবিল — ১,০০০ SAR/মাস ১০ বছরের জন্য</h3>
        <div className="bg-[#0A0E1A] p-4 rounded-lg text-gray-300 text-sm">
          <p><strong className="text-white">মাসিক বিনিয়োগ:</strong> ১,০০০ SAR</p>
          <p><strong className="text-white">সময়কাল:</strong> ১০ বছর (১২০ মাস)</p>
          <p><strong className="text-white">প্রত্যাশিত রিটার্ন:</strong> ৮%</p>
          <p><strong className="text-white">ভবিষ্যৎ মূল্য:</strong> <span className="text-desert-gold">১,৮৪,০০০ SAR</span></p>
          <p><strong className="text-white">অর্জিত সম্পদ:</strong> <span className="text-green-400">৬৪,০০০ SAR</span></p>
        </div>
      </div>

      <div className="not-prose glass p-5 rounded-xl mb-6">
        <h3 className="text-desert-primary font-semibold mb-3">উদাহরণ ২: অবসর পরিকল্পনা — ২,৫০০ SAR/মাস ২০ বছরের জন্য</h3>
        <div className="bg-[#0A0E1A] p-4 rounded-lg text-gray-300 text-sm">
          <p><strong className="text-white">মাসিক বিনিয়োগ:</strong> ২,৫০০ SAR</p>
          <p><strong className="text-white">সময়কাল:</strong> ২০ বছর (২৪০ মাস)</p>
          <p><strong className="text-white">প্রত্যাশিত রিটার্ন:</strong> ৮%</p>
          <p><strong className="text-white">ভবিষ্যৎ মূল্য:</strong> <span className="text-desert-gold">১৪,৭২,৫০০ SAR</span></p>
          <p><strong className="text-white">অর্জিত সম্পদ:</strong> <span className="text-green-400">৮,৭২,৫০০ SAR</span></p>
        </div>
      </div>

      <h2>SIP বনাম লাম্প সাম বনাম সেভিংস অ্যাকাউন্ট</h2>
      <p>
        SIP নিয়মিত বেতনভোগীদের জন্য আদর্শ — এটি বাজার সময় নির্ধারণের ঝুঁকি হ্রাস করে এবং আর্থিক শৃঙ্খলা তৈরি করে। লাম্প সাম বড় অঙ্কের টাকা (EOSB, বোনাস, উত্তরাধিকার) উপলব্ধ হলে ভাল। ২% সেভিংস অ্যাকাউন্ট মূল্যস্ফীতির কাছে হেরে যায়। ১০ বছরে ১,০০০ SAR/মাস SIP ৮%-এ হয় ১,৮৪,০০০ SAR যেখানে সেভিংস অ্যাকাউন্টে হয় মাত্র ১,৩৩,০০০ SAR।
      </p>

      <h2>ঝুঁকি এবং CMA নিয়মাবলী</h2>
      <p>
        সৌদি আরবে মিউচুয়াল ফান্ড CMA দ্বারা নিয়ন্ত্রিত। প্রধান ঝুঁকির মধ্যে রয়েছে: বাজার ঝুঁকি, সুদের হার ঝুঁকি, মুদ্রা ঝুঁকি, তারল্য ঝুঁকি এবং ম্যানেজার ঝুঁকি। শরিয়া-সম্মত ফান্ড সুদ (রিবা) এড়িয়ে চলে এবং পরিশোধন নির্দেশিকা অনুসরণ করে। বিনিয়োগের আগে সর্বদা ফান্ড প্রসপেক্টাসে শরিয়া সম্মতি শংসাপত্র যাচাই করুন।
      </p>

      <h2>Sauditoolhub SIP ক্যালকুলেটর如何使用</h2>
      <p>
        আমাদের বিনামূল্যের{' '}
        <Link href="/sip-calculator" className="text-desert-primary font-bold underline">SIP রিটার্ন ক্যালকুলেটর</Link>{' '}
        ব্যবহার করে আপনার আর্থিক লক্ষ্য পরিকল্পনা করুন।
      </p>

      <div className="not-prose glass p-6 rounded-xl mb-8 mt-8 text-center">
        <h3 className="text-desert-gold font-semibold mb-3">আজই আপনার আর্থিক ভবিষ্যৎ পরিকল্পনা শুরু করুন</h3>
        <p className="text-gray-300 mb-4">
          <Link href="/sip-calculator" className="text-desert-primary font-bold underline">SIP ক্যালকুলেটর</Link>,{' '}
          <Link href="/sama-loan-calculator" className="text-desert-primary underline">SAMA লোন ক্যালকুলেটর</Link> এবং{' '}
          <Link href="/zakat-calculator" className="text-desert-primary underline">জাকাত ক্যালকুলেটর</Link> এবং{' '}
          <Link href="/eosb-calculator" className="text-desert-primary underline">EOSB ক্যালকুলেটর</Link> ব্যবহার করুন।
        </p>
        <p className="text-gray-400 text-sm">
          আমাদের <Link href="/blog" className="text-desert-primary underline">ব্লগ</Link> দেখুন।
        </p>
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
        সিস্টেমেটিক ইনভেস্টমেন্ট প্ল্যান (SIP) সৌদি আরবে দীর্ঘমেয়াদী সম্পদ তৈরির সবচেয়ে সহজলভ্য এবং শক্তিশালী উপায়গুলির একটি। আল রাজি ক্যাপিটাল, SNB ক্যাপিটাল বা দেরায়াহ ও মালা-র মতো ডিজিটাল রোবো-অ্যাডভাইজারের মতো নিয়ন্ত্রিত প্ল্যাটফর্মের মাধ্যমে মিউচুয়াল ফান্ডে ধারাবাহিকভাবে বিনিয়োগ করে, আপনি আপনার আর্থিক লক্ষ্য অর্জনে চক্রবৃদ্ধি সুদের শক্তি ব্যবহার করতে পারেন।
      </p>
      <p>
        মনে রাখবেন, বিনিয়োগ শুরু করার সবচেয়ে ভালো সময় ছিল গতকাল। দ্বিতীয় সেরা সময় হল আজ। আমাদের{' '}
        <Link href="/sip-calculator" className="text-desert-primary font-bold underline">বিনামূল্যের SIP রিটার্ন ক্যালকুলেটর</Link>{' '}
        ব্যবহার করে এখনই আপনার বিনিয়োগ যাত্রার পরিকল্পনা শুরু করুন।
      </p>
    </article>
  )
}

export default async function SipGuidePage({ params }: Props) {
  const { locale } = await params
  const isAr = locale === 'ar'
  const isUr = locale === 'ur'
  const isTl = locale === 'tl'
  const isBn = locale === 'bn'
  const isDefault = locale === 'en'
  const pageUrl = isDefault
    ? `${baseUrl}/guide/sip-calculator-saudi-arabia-2026`
    : `${baseUrl}/${locale}/guide/sip-calculator-saudi-arabia-2026`

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
