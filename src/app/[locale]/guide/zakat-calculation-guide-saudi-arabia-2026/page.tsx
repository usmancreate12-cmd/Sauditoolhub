import type { Metadata } from 'next'
import Link from 'next/link'
import { Calculator, DollarSign, Building2, FileText, AlertTriangle, CheckCircle, TrendingUp, Users, Shield, Briefcase, CreditCard, Landmark, Heart } from 'lucide-react'

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
    ? 'الدليل الكامل لحساب الزكاة على الذهب والنقد والاستثمارات في السعودية 2026 | Sauditoolhub'
    : isUr
    ? 'سعودی عرب میں سونے، نقدی اور سرمایہ کاری پر زکوٰۃ کے حساب کا مکمل گائیڈ 2026 | Sauditoolhub'
    : isTl
    ? 'Kumpletong Gabay sa Pagkalkula ng Zakat sa Ginto, Pera at Investments sa Saudi Arabia 2026 | Sauditoolhub'
    : isBn
    ? 'সৌদি আরবে স্বর্ণ, নগদ ও বিনিয়োগের যাকাত গণনার সম্পূর্ণ গাইড 2026 | Sauditoolhub'
    : 'Complete Guide to Zakat Calculation on Gold, Cash & Investments in Saudi Arabia 2026 | Sauditoolhub'

  const description = isAr
    ? 'دليل كامل لحساب الزكاة في السعودية 2026. تعرف على نصاب الذهب والفضة، كيفية حساب زكاة النقد والذهب والاستثمارات، والالتزامات القابلة للخصم والأحكام الفقهية المهمة.'
    : isUr
    ? 'سعودی عرب میں زکوٰۃ کے حساب کا مکمل گائیڈ 2026۔ سونے چاندی کا نصاب، نقدی اور سرمایہ کاری پر زکوٰۃ کا حساب، قابل کٹوتی واجبات اور فقہی احکام۔'
    : isTl
    ? 'Kumpletong gabay sa pagkalkula ng Zakat sa Saudi Arabia 2026. Alamin ang Nisab ng ginto at pilak, pagkalkula ng Zakat sa pera at investments, deductible liabilities, at mahahalagang Islamic rulings.'
    : isBn
    ? 'সৌদি আরবে যাকাত গণনার সম্পূর্ণ গাইড ২০২৬। স্বর্ণ-রূপার নেসাব, নগদ ও বিনিয়োগের যাকাত গণনা, কর্তনযোগ্য দায় এবং গুরুত্বপূর্ণ ফিকহি বিধান।'
    : 'Complete guide to Zakat calculation in Saudi Arabia 2026. Learn about Nisab thresholds for gold and silver, how to calculate Zakat on cash, gold, investments, deductible liabilities, and important fiqh rulings for accurate Zakat payment.'

  return {
    title,
    description,
    alternates: {
      canonical: isDefault ? `${baseUrl}/guide/zakat-calculation-guide-saudi-arabia-2026` : `${baseUrl}/${locale}/guide/zakat-calculation-guide-saudi-arabia-2026`,
      languages: {
        en: `${baseUrl}/guide/zakat-calculation-guide-saudi-arabia-2026`,
        ar: `${baseUrl}/ar/guide/zakat-calculation-guide-saudi-arabia-2026`,
        ur: `${baseUrl}/ur/guide/zakat-calculation-guide-saudi-arabia-2026`,
        tl: `${baseUrl}/tl/guide/zakat-calculation-guide-saudi-arabia-2026`,
        bn: `${baseUrl}/bn/guide/zakat-calculation-guide-saudi-arabia-2026`,
      },
    },
    openGraph: {
      title,
      description,
      url: isDefault ? `${baseUrl}/guide/zakat-calculation-guide-saudi-arabia-2026` : `${baseUrl}/${locale}/guide/zakat-calculation-guide-saudi-arabia-2026`,
      siteName: 'Sauditoolhub',
      locale: isAr ? 'ar_SA' : isUr ? 'ur_PK' : isTl ? 'tl_PH' : isBn ? 'bn_BD' : 'en_US',
      type: 'article',
      publishedTime: '2026-03-01',
      modifiedTime: '2026-07-01',
    },
    twitter: { card: 'summary_large_image', title, description },
    robots: { index: true, follow: true },
  }
}

const articleSchemaEn = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'The Complete Guide to Zakat Calculation on Gold, Cash & Investments in Saudi Arabia 2026',
  description: 'A complete Islamic guide to calculating Zakat in Saudi Arabia 2026. Covers Nisab thresholds for gold and silver, step-by-step Zakat calculation on cash, gold jewelry, stocks, and investments, deductible liabilities, practical examples, and rulings on special cases.',
  author: { '@type': 'Person', name: 'Sauditoolhub Team' },
  publisher: { '@type': 'Organization', name: 'Sauditoolhub', logo: { '@type': 'ImageObject', url: `${baseUrl}/logo.png` } },
  datePublished: '2026-03-01',
  dateModified: '2026-07-01',
}

const schemaAr = {
  ...articleSchemaEn,
  headline: 'الدليل الكامل لحساب الزكاة على الذهب والنقد والاستثمارات في السعودية 2026',
  description: 'دليل إسلامي كامل لحساب الزكاة في السعودية 2026. يشرح نصاب الذهب والفضة، حساب الزكاة على النقود والذهب والأسهم، الالتزامات القابلة للخصم، أمثلة عملية، وأحكام الحالات الخاصة.',
}

const schemaUr = {
  ...articleSchemaEn,
  headline: 'سعودی عرب میں سونے، نقدی اور سرمایہ کاری پر زکوٰۃ کے حساب کا مکمل گائیڈ 2026',
  description: 'سعودی عرب میں زکوٰۃ کے حساب کا مکمل اسلامی گائیڈ 2026۔ سونے چاندی کا نصاب، نقدی، سونے اور شیئرز پر زکوٰۃ کا حساب، قابل کٹوتی واجبات، عملی مثالیں اور خاص حالات کے احکام۔',
}

const schemaTl = {
  ...articleSchemaEn,
  headline: 'Kumpletong Gabay sa Pagkalkula ng Zakat sa Ginto, Pera at Investments sa Saudi Arabia 2026',
  description: 'Isang kumpletong Islamic guide sa pagkalkula ng Zakat sa Saudi Arabia 2026. Sinasaklaw ang Nisab thresholds para sa ginto at pilak, pagkalkula ng Zakat sa pera, ginto, stocks, deductible liabilities, praktikal na halimbawa, at mga ruling sa espesyal na kaso.',
}

const schemaBn = {
  ...articleSchemaEn,
  headline: 'সৌদি আরবে স্বর্ণ, নগদ ও বিনিয়োগের যাকাত গণনার সম্পূর্ণ গাইড 2026',
  description: 'সৌদি আরবে যাকাত গণনার সম্পূর্ণ ইসলামিক গাইড ২০২৬। স্বর্ণ-রূপার নেসাব, নগদ, স্বর্ণ ও শেয়ারের যাকাত গণনা, কর্তনযোগ্য দায়, বাস্তব উদাহরণ এবং বিশেষ ক্ষেত্রের বিধান।',
}

const faqsEn = [
  { question: 'What is the Nisab threshold for Zakat in Saudi Arabia in 2026?', answer: 'The Nisab is the minimum amount of wealth a Muslim must possess before Zakat becomes obligatory. It is based on the value of 85 grams of gold or 595 grams of silver. In 2026, with gold prices in Saudi Arabia fluctuating between approximately 240-270 SAR per gram, the gold Nisab ranges from roughly 20,400 SAR to 22,950 SAR. The silver Nisab is significantly lower. You should check the current 24k gold price in SAR on the day of your Zakat calculation to determine your exact Nisab value.' },
  { question: 'Do I have to pay Zakat on gold jewelry that I wear daily?', answer: 'This is a matter of scholarly difference. The majority of scholars (including the Hanafi, Shafii, and Hanbali schools) hold that gold jewelry is subject to Zakat if it reaches the Nisab, because the ruling is based on the gold itself being a Zakatable asset regardless of its form or use. Some scholars (Maliki school) exempt jewelry worn for permissible adornment. To be safe and avoid doubt, the recommended practice is to pay 2.5% Zakat on the market value of your gold jewelry if it reaches the Nisab, as this ensures you have fulfilled your obligation completely.' },
  { question: 'How do I calculate Zakat on my savings account?', answer: 'To calculate Zakat on cash in your savings and current accounts: (1) Total all your bank account balances on your Zakat due date (the day your lunar year completes). (2) Add any cash you hold at home. (3) Subtract any immediate debts due (credit card bills, loans due for payment). (4) If the net amount equals or exceeds the Nisab value, multiply by 2.5% (0.025). Example: 100,000 SAR in savings - 10,000 SAR in debts = 90,000 SAR net. 90,000 × 2.5% = 2,250 SAR Zakat due.' },
  { question: 'Does Zakat apply to my home or car?', answer: 'No, Zakat does not apply to your personal residence or personal vehicle. These are considered assets for personal use and are not Zakatable. However, if you own rental properties or land held for trading/resale, Zakat applies to the rental income and the sale value of inventory properties. Real estate held as a long-term investment for rental income is a subject of scholarly discussion, with the dominant view that Zakat is due on the net rental income (after expenses) if it reaches the Nisab and a lunar year passes.' },
  { question: 'What is the difference between personal Zakat and corporate Zakat in Saudi Arabia?', answer: 'Personal Zakat is the individual obligation on Muslims who own wealth above the Nisab. Corporate Zakat is administered by ZATCA (the Zakat, Tax and Customs Authority) in Saudi Arabia. All Saudi companies and GCC- owned businesses are required to file a Zakat return and pay 2.5% of their Zakatable base annually. ZATCA has detailed rules on how businesses calculate their Zakat base, including treatment of assets, liabilities, and equity. Individuals calculate their own Zakat using the standard 2.5% rate on personal wealth.' },
  { question: 'How do I calculate Zakat on stocks and investments?', answer: 'There are two accepted methods for calculating Zakat on stocks: (1) The simplified method: Pay 2.5% of the total market value of your stock portfolio on your Zakat due date. This is the easier method and is widely accepted. (2) The detailed method: For each company you own shares in, determine what percentage of its assets are Zakatable (cash, receivables, inventory vs. fixed assets). Only pay Zakat on the Zakatable portion. For mutual funds, check the fund policy — many Islamic funds calculate and pay Zakat on behalf of their investors automatically.' },
  { question: 'Can I deduct debts when calculating my Zakat?', answer: 'Yes, you can deduct immediate and due debts from your total Zakatable assets before calculating the 2.5%. Deductible debts include: credit card balances due, personal loan installments due within the next 12 months, unpaid bills (utility, rent, medical), and any other immediate financial obligations. Long-term debts (like a 20-year mortgage) are treated differently by different scholars: some allow deducting the full outstanding balance, while others only allow deducting installments due within the coming lunar year. Consult a scholar for your specific situation.' },
  { question: 'What assets should I include in my Zakat calculation?', answer: 'Include all Zakatable assets: cash in bank accounts (savings, current, fixed deposits), cash at home, gold and silver (jewelry, coins, bars), stocks and shares, mutual funds, investment units, business inventory and merchandise, agricultural produce, rental income savings, money lent to others that is due back, cryptocurrency (according to most contemporary scholars), and pension funds that you can withdraw. Exclude: personal residence, personal vehicle, household furniture, personal clothing, and business fixed assets (machinery, buildings used for business).' },
  { question: 'When is my Zakat due date?', answer: 'Zakat becomes due after one full lunar year (haul) has passed since you first possessed wealth equal to or exceeding the Nisab. Islamic scholars recommend that individuals pick a specific date on the Islamic calendar (such as the first of Ramadan) to calculate and pay Zakat every year. This simplifies the process and ensures consistency. If you are unsure about your lunar year date, begin by calculating Zakat on the date you first determine your wealth reaches the Nisab, and mark that date on the Islamic calendar for future years.' },
  { question: 'How do I pay Zakat in Saudi Arabia?', answer: 'In Saudi Arabia, individuals can pay Zakat through several channels: (1) The Ehsan platform (ehsan.sa) — a government-backed charity platform that connects donors with verified beneficiaries. (2) Directly to recognized charities and relief organizations registered with the Ministry of Human Resources and Social Development. (3) To individuals in need — family members, neighbors, or those you know personally who qualify as Zakat recipients. (4) For businesses, Zakat is paid through the ZATCA portal as part of the annual Zakat return. Always ensure the recipient qualifies (one of the eight categories mentioned in Surah At-Tawbah 9:60).' },
]

const faqsAr = [
  { question: 'ما هو نصاب الزكاة في السعودية 2026؟', answer: 'النصاب هو الحد الأدنى من المال الذي يجب أن يملكه المسلم قبل أن تجب عليه الزكاة. يعتمد على قيمة 85 جراماً من الذهب أو 595 جراماً من الفضة. في 2026، مع أسعار الذهب بين 240-270 ريال للجرام، يتراوح نصاب الذهب بين 20,400 و 22,950 ريال تقريباً.' },
  { question: 'هل تجب الزكاة على الحلي الذهبية التي ألبسها يومياً؟', answer: 'هذه مسألة خلافية بين العلماء. جمهور العلماء (الحنفية والشافعية والحنابلة) يرون أن حلي الذهب تجب فيها الزكاة إذا بلغت النصاب. بعض العلماء (المالكية) يستثنون الحلي المعد للبس المباح. للأخذ بالاحتياط، يُنصح بإخراج 2.5% من قيمة الذهب إذا بلغ النصاب.' },
  { question: 'كيف أحسب الزكاة على حساب التوفير؟', answer: 'لحساب زكاة النقود: (1) اجمع كل أرصدة حساباتك البنكية في تاريخ وجوب الزكاة. (2) أضف النقود التي في المنزل. (3) اطرح الديون المستحقة. (4) إذا كان المبلغ يساوي النصاب أو يزيد، اضرب في 2.5%. مثال: 100,000 ريال - 10,000 ريال ديون = 90,000 ريال. 90,000 × 2.5% = 2,250 ريال.' },
  { question: 'هل تجب الزكاة على منزلي أو سيارتي؟', answer: 'لا، لا تجب الزكاة على المسكن الشخصي أو السيارة الشخصية. هذه أصول للاستخدام الشخصي وليست من الأموال الزكوية. لكن إذا كنت تملك عقارات للإيجار أو أراضي للتجارة، فتجب الزكاة على دخل الإيجار وقيمة المخزون.' },
  { question: 'ما الفرق بين زكاة الأفراد وزكاة الشركات في السعودية؟', answer: 'زكاة الأفراد هي الفريضة الشخصية على المسلمين. زكاة الشركات تديرها هيئة الزكاة والضريبة والجمارك (ZATCA). الشركات السعودية مطالبة بتقديم إقرار زكوي سنوي ودفع 2.5% من الوعاء الزكوي.' },
  { question: 'كيف أحسب زكاة الأسهم والاستثمارات؟', answer: 'طريقتان مقبولتان: (1) الطريقة المبسطة: إخراج 2.5% من القيمة السوقية الإجمالية للمحفظة. (2) الطريقة التفصيلية: تحديد نسبة الأصول الزكوية في كل شركة (نقد، ذمم، بضاعة) وإخراج الزكاة على النسبة فقط.' },
  { question: 'هل يمكنني خصم الديون عند حساب الزكاة؟', answer: 'نعم، يمكنك خصم الديون المستحقة من إجمالي الأموال الزكوية قبل حساب 2.5%. تشمل الديون القابلة للخصم: أرصدة بطاقات الائتمان، أقساط القروض المستحقة خلال 12 شهراً، الفواتير غير المدفوعة. الديون طويلة الأجل كالرهن العقاري فيها خلاف فقهي.' },
  { question: 'ما الأصول التي يجب تضمينها في حساب الزكاة؟', answer: 'تشمل: النقود في البنوك والمنزل، الذهب والفضة، الأسهم، صناديق الاستثمار، البضاعة التجارية، النقود المُقرضة المستحقة، العملات الرقمية. تستثنى: المسكن الشخصي، السيارة الشخصية، الأثاث المنزلي، الملابس الشخصية.' },
  { question: 'متى تاريخ وجوب الزكاة؟', answer: 'تجب الزكاة بعد حولان الحول القمري على المال الذي بلغ النصاب. يُنصح باختيار تاريخ محدد في التقويم الهجري (مثل أول رمضان) لحساب الزكاة سنوياً.' },
  { question: 'كيف أخرج الزكاة في السعودية؟', answer: 'يمكن إخراج الزكاة عبر: منصة إحسان (ehsan.sa) المملوكة للحكومة، الجمعيات الخيرية المسجلة، الأفراد المستحقين من الأقارب والجيران. للشركات، تدفع الزكاة عبر بوابة هيئة الزكاة والضريبة والجمارك.' },
]

const faqsUr = [
  { question: 'سعودی عرب 2026 میں زکوٰۃ کا نصاب کیا ہے؟', answer: 'نصاب وہ کم از کم رقم ہے جو ایک مسلمان کے پاس زکوٰۃ واجب ہونے سے پہلے ہونی چاہیے۔ یہ 85 گرام سونے یا 595 گرام چاندی کی قیمت پر مبنی ہے۔ 2026 میں سونے کی قیمت 240-270 SAR فی گرام کے ساتھ، سونے کا نصاب تقریباً 20,400 سے 22,950 SAR ہے۔' },
  { question: 'کیا میں روزانہ پہنے جانے والے سونے کے زیورات پر زکوٰۃ دیتا ہوں؟', answer: 'یہ علماء کے درمیان ایک اختلافی مسئلہ ہے۔ جمہور علماء (حنفی، شافعی، حنبلی) کے مطابق سونے کے زیورات پر زکوٰۃ واجب ہے اگر وہ نصاب کو پہنچیں۔ احتیاط کے لیے نصاب پہنچنے پر 2.5% زکوٰۃ ادا کرنے کی سفارش کی جاتی ہے۔' },
  { question: 'میں اپنے سیونگ اکاؤنٹ پر زکوٰۃ کا حساب کیسے کروں؟', answer: '(1) اپنی زکوٰۃ کی تاریخ پر تمام بینک اکاؤنٹس کی رقم جمع کریں۔ (2) گھر کی نقدی شامل کریں۔ (3) فوری قرضے نکالیں۔ (4) اگر رقم نصاب سے زیادہ ہے تو 2.5% ضرب دیں۔' },
  { question: 'کیا زکوٰۃ میرے گھر یا کار پر لاگو ہوتی ہے؟', answer: 'نہیں، زکوٰۃ ذاتی رہائش یا ذاتی گاڑی پر لاگو نہیں ہوتی۔ یہ ذاتی استعمال کے اثاثے ہیں۔ لیکن کرایہ کی جائیداد یا تجارت کی زمین پر زکوٰۃ واجب ہے۔' },
  { question: 'ذاتی زکوٰۃ اور کارپوریٹ زکوٰۃ میں کیا فرق ہے؟', answer: 'ذاتی زکوٰۃ مسلمانوں پر انفرادی فریضہ ہے۔ کارپوریٹ زکوٰۃ سعودی عرب میں ZATCA کے زیر انتظام ہے۔ سعودی کمپنیاں سالانہ 2.5% زکوٰۃ ادا کرتی ہیں۔' },
  { question: 'شیئرز اور سرمایہ کاری پر زکوٰۃ کا حساب کیسے کروں؟', answer: 'دو طریقے: (1) آسان طریقہ: پورٹ فولیو کی کل مارکیٹ ویلیو کا 2.5%۔ (2) تفصیلی طریقہ: ہر کمپنی کے زکوٰۃ کے قابل اثاثوں کا تناسب نکالیں۔' },
  { question: 'کیا میں زکوٰۃ کے حساب سے قرضے کاٹ سکتا ہوں؟', answer: 'ہاں، فوری قرضے کل زکوٰۃ کے قابل اثاثوں سے کاٹے جا سکتے ہیں۔ قابل کٹوتی قرضوں میں کریڈٹ کارڈ، قرض کی اقساط (12 ماہ کے اندر)، اور غیر ادا شدہ بل شامل ہیں۔' },
  { question: 'زکوٰۃ کے حساب میں کون سے اثاثے شامل کروں؟', answer: 'بینک اکاؤنٹس میں نقدی، گھر کی نقدی، سونا چاندی، شیئرز، mutual funds، تجارتی سامان، قرضے کی رقم، cryptocurrency شامل ہیں۔ ذاتی گھر، کار، فرنیچر اور کپڑے شامل نہیں۔' },
  { question: 'زکوٰۃ کی تاریخ کب ہے؟', answer: 'زکوٰۃ اس وقت واجب ہوتی ہے جب ایک قمری سال (حول) گزر جائے اور رقم نصاب سے زیادہ ہو۔ رمضان کا پہلا دن زکوٰۃ کے حساب کے لیے مقبول ہے۔' },
  { question: 'سعودی عرب میں زکوٰۃ کیسے ادا کروں؟', answer: 'احسان پلیٹ فارم (ehsan.sa)، رجسٹرڈ خیراتی ادارے، یا مستحق افراد کے ذریعے ادا کریں۔ کمپنیاں ZATCA پورٹل کے ذریعے ادا کرتی ہیں۔' },
]

const faqsTl = [
  { question: 'Ano ang Nisab threshold para sa Zakat sa Saudi Arabia 2026?', answer: 'Ang Nisab ay ang pinakamababang halaga ng kayamanan na dapat taglayin ng isang Muslim bago maging obligado ang Zakat. Ito ay batay sa halaga ng 85 gramo ng ginto o 595 gramo ng pilak. Sa 2026, ang gold Nisab ay humigit-kumulang 20,400 hanggang 22,950 SAR.' },
  { question: 'Kailangan bang magbayad ng Zakat sa gintong alahas na isinusuot ko araw-araw?', answer: 'Ito ay isang usapin ng pagkakaiba ng opinyon ng mga iskolar. Ang karamihan ng mga iskolar ay nagsasabi na ang gintong alahas ay sakop ng Zakat kung ito ay umabot sa Nisab. Upang maging ligtas, inirerekomenda ang pagbabayad ng 2.5% Zakat sa market value ng iyong gintong alahas.' },
  { question: 'Paano ko kalkulahin ang Zakat sa aking savings account?', answer: '(1) I-total ang lahat ng bank account balances sa iyong Zakat due date. (2) Idagdag ang cash na nasa bahay. (3) Ibawas ang mga immediate debts. (4) Kung ang net amount ay katumbas o lampas sa Nisab, multiply sa 2.5%.' },
  { question: 'Naaangkop ba ang Zakat sa aking bahay o sasakyan?', answer: 'Hindi, ang Zakat ay hindi naaangkop sa iyong personal na tahanan o personal na sasakyan. Ang mga ito ay itinuturing na assets para sa personal na gamit at hindi Zakatable. Ngunit ang rental properties o land para sa trading ay sakop ng Zakat.' },
  { question: 'Ano ang pagkakaiba ng personal Zakat at corporate Zakat?', answer: 'Ang personal Zakat ay indibidwal na obligasyon ng mga Muslim. Ang corporate Zakat ay pinangangasiwaan ng ZATCA sa Saudi Arabia. Ang mga kumpanya ay kinakailangang magbayad ng 2.5% ng kanilang Zakatable base taun-taon.' },
  { question: 'Paano ko kalkulahin ang Zakat sa stocks at investments?', answer: 'Dalawang paraan: (1) Pinadaling paraan: Magbayad ng 2.5% ng total market value ng iyong stock portfolio. (2) Detalyadong paraan: Tukuyin kung anong porsyento ng assets ng kumpanya ang Zakatable.' },
  { question: 'Maaari ko bang ibawas ang mga utang sa pagkalkula ng Zakat?', answer: 'Oo, maaari mong ibawas ang mga immediate at due debts mula sa iyong total Zakatable assets. Kasama sa deductible debts ang credit card balances, loan installments na due sa susunod na 12 buwan, at hindi pa nababayarang bills.' },
  { question: 'Anong mga assets ang dapat isama sa pagkalkula ng Zakat?', answer: 'Isama ang: cash sa bank accounts at bahay, ginto at pilak, stocks, mutual funds, business inventory, perang pinautang na due na, at cryptocurrency. Huwag isama ang personal na bahay, sasakyan, furniture, at damit.' },
  { question: 'Kailan ang aking Zakat due date?', answer: 'Ang Zakat ay nagiging due pagkatapos ng isang buong lunar year (haul) mula nang ikaw ay nagkaroon ng yaman na katumbas o lampas sa Nisab. Inirerekomenda na pumili ng isang tiyak na petsa sa Islamic calendar tulad ng unang araw ng Ramadan.' },
  { question: 'Paano ako magbabayad ng Zakat sa Saudi Arabia?', answer: 'Gamitin ang Ehsan platform (ehsan.sa), mga registered charity organization, o magbigay nang direkta sa mga kwalipikadong indibidwal. Para sa mga kumpanya, ang Zakat ay binabayaran sa pamamagitan ng ZATCA portal.' },
]

const faqsBn = [
  { question: 'সৌদি আরবে ২০২৬ সালে যাকাতের নেসাব কী?', answer: 'নেসাব হল ন্যূনতম সম্পদের পরিমাণ যা একজন মুসলমানের কাছে থাকতে হবে যাকাত ওয়াজিব হওয়ার আগে। এটি ৮৫ গ্রাম স্বর্ণ বা ৫৯৫ গ্রাম রৌপ্যের মূল্যের উপর ভিত্তি করে। ২০২৬ সালে স্বর্ণের নেসাব প্রায় ২০,৪০০ থেকে ২২,৯৫০ SAR।' },
  { question: 'আমি কি প্রতিদিন পরা সোনার গহনার উপর যাকাত দিতে বাধ্য?', answer: 'এটি আলেমদের মধ্যে একটি মতভেদের বিষয়। অধিকাংশ আলেম মনে করেন সোনার গহনা যাকাতের আওতাভুক্ত যদি তা নেসাবে পৌঁছে। নিরাপদ থাকার জন্য নেসাব পৌঁছালে ২.৫% যাকাত দেওয়ার সুপারিশ করা হয়।' },
  { question: 'আমি কীভাবে আমার সেভিংস অ্যাকাউন্টে যাকাত গণনা করব?', answer: '(১) আপনার যাকাত নির্ধারিত তারিখে সমস্ত ব্যাংক অ্যাকাউন্টের ব্যালেন্স যোগ করুন। (২) বাড়ির নগদ যোগ করুন। (৩) জরুরি ঋণ বাদ দিন। (৪) নিট পরিমাণ নেসাবের সমান বা বেশি হলে ২.৫% গুণ করুন।' },
  { question: 'যাকাত কি আমার বাড়ি বা গাড়ির ক্ষেত্রে প্রযোজ্য?', answer: 'না, যাকাত ব্যক্তিগত বাসস্থান বা ব্যক্তিগত গাড়ির ক্ষেত্রে প্রযোজ্য নয়। এগুলো ব্যক্তিগত ব্যবহারের সম্পদ। তবে ভাড়ার সম্পত্তি বা ব্যবসার জমি যাকাতের আওতাভুক্ত।' },
  { question: 'ব্যক্তিগত যাকাত এবং কর্পোরেট যাকাতের মধ্যে পার্থক্য কী?', answer: 'ব্যক্তিগত যাকাত মুসলমানদের উপর ব্যক্তিগত ফরজ। কর্পোরেট যাকাত সৌদি আরবে ZATCA দ্বারা পরিচালিত হয়। কোম্পানিগুলিকে বার্ষিক ২.৫% যাকাত দিতে হয়।' },
  { question: 'শেয়ার এবং বিনিয়োগের যাকাত কীভাবে গণনা করব?', answer: 'দুটি পদ্ধতি: (১) সরল পদ্ধতি: পোর্টফোলিওর মোট বাজার মূল্যের ২.৫%। (২) বিস্তারিত পদ্ধতি: প্রতিটি কোম্পানির যাকাতযোগ্য সম্পদের শতাংশ নির্ধারণ করুন।' },
  { question: 'যাকাত গণনা থেকে কি ঋণ বাদ দিতে পারি?', answer: 'হ্যাঁ, জরুরি ও পরিশোধযোগ্য ঋণ মোট যাকাতযোগ্য সম্পদ থেকে বাদ দেওয়া যায়। ক্রেডিট কার্ড, আগামী ১২ মাসের কিস্তি, এবং অবৈতনিক বিল অন্তর্ভুক্ত।' },
  { question: 'যাকাত গণনায় কী কী সম্পদ অন্তর্ভুক্ত করব?', answer: 'ব্যাংক ও বাড়ির নগদ, স্বর্ণ-রৌপ্য, শেয়ার, মিউচুয়াল ফান্ড, ব্যবসায়িক পণ্য, পাওনা টাকা এবং ক্রিপ্টোকারেন্সি অন্তর্ভুক্ত করুন। ব্যক্তিগত বাড়ি, গাড়ি, আসবাব ও পোশাক বাদ দিন।' },
  { question: 'আমার যাকাত নির্ধারিত তারিখ কখন?', answer: 'এক পূর্ণ চন্দ্র বছর (হাওল) অতিক্রান্ত হওয়ার পর যাকাত ওয়াজিব হয়। রমজানের প্রথম দিন যাকাত গণনার জন্য একটি জনপ্রিয় তারিখ।' },
  { question: 'সৌদি আরবে কীভাবে যাকাত দেব?', answer: 'এহসান প্ল্যাটফর্ম (ehsan.sa), নিবন্ধিত দাতব্য সংস্থা বা সরাসরি যোগ্য ব্যক্তিদের মাধ্যমে দিন। কোম্পানিগুলি ZATCA পোর্টালের মাধ্যমে যাকাত দেয়।' },
]

function EnContent() {
  return (
    <article className="prose prose-invert max-w-none prose-headings:text-desert-primary prose-a:text-desert-primary prose-strong:text-white prose-li:text-gray-300">
      <h1>The Complete Guide to Zakat Calculation on Gold, Cash &amp; Investments in Saudi Arabia 2026</h1>

      <div className="not-prose glass p-6 rounded-xl mb-8">
        <p className="text-gray-300 text-lg leading-relaxed">
          Zakat is one of the five pillars of Islam — a mandatory act of worship ordained by Allah that purifies wealth, strengthens community bonds, and fulfills the rights of those in need. For Muslims living in Saudi Arabia, calculating Zakat accurately is both a spiritual obligation and a practical necessity. With fluctuating gold prices, diverse investment portfolios, and varying scholarly opinions on modern financial instruments, knowing exactly how much Zakat you owe can be challenging.
        </p>
        <p className="text-gray-300 text-lg leading-relaxed mt-4">
          This guide provides a <strong>comprehensive, step-by-step approach to calculating your Zakat in 2026</strong>, covering the Nisab thresholds for gold and silver, how to calculate Zakat on cash, gold jewelry, stocks, mutual funds, and cryptocurrency, deductible liabilities, real-life examples, and special rulings for complex situations. All rulings in this guide follow the majority (Jumhoor) scholarly position.
        </p>
        <p className="text-gray-300 text-lg leading-relaxed mt-4">
          Use our free{' '}
          <Link href="/zakat-calculator" className="text-desert-primary font-bold underline">
            Zakat Calculator
          </Link>{' '}
          to instantly compute your Zakat obligation based on current asset values and Nisab thresholds.
        </p>
      </div>

      <h2>What is Zakat and Who Must Pay It?</h2>
      <p>
        Zakat (زكاة) linguistically means "purification" and "growth." In Islamic law, Zakat al-Mal (Zakat on wealth) is a fixed portion of wealth that every eligible Muslim must distribute to specific categories of recipients. It is one of the five pillars of Islam, mentioned alongside prayer (Salah) in dozens of Quranic verses.
      </p>
      <p>
        Zakat becomes obligatory when two conditions are met: (1) <strong>Nisab:</strong> Your wealth exceeds the minimum threshold (the value of 85g of gold or 595g of silver, whichever is lower). (2) <strong>Haul:</strong> A full lunar year (354 days) has passed since you first possessed wealth equal to or exceeding the Nisab. The standard Zakat rate is 2.5% (1/40th) of your qualifying wealth.
      </p>

      <div className="not-prose glass p-5 rounded-xl mb-6">
        <h3 className="text-desert-primary font-semibold mb-3">Personal Zakat vs. Corporate Zakat in Saudi Arabia</h3>
        <p className="text-gray-300 text-sm">
          In Saudi Arabia, there is a distinction between the Zakat obligation of individuals and the Zakat obligation of businesses. <strong>Personal Zakat</strong> is the individual duty of every eligible Muslim on their personal wealth. <strong>Corporate Zakat</strong> is administered by ZATCA (the Zakat, Tax and Customs Authority). All companies owned by Saudi nationals or GCC citizens must file an annual Zakat return with ZATCA and pay 2.5% of their Zakat base. Foreign-owned companies pay income tax instead of Zakat. This guide focuses on personal Zakat calculation.
        </p>
      </div>

      <h2>Understanding Nisab in 2026</h2>
      <p>
        The Nisab is the minimum amount of wealth that triggers the Zakat obligation. It was established by the Prophet Muhammad (peace be upon him) based on the value of 85 grams of gold or 595 grams of silver. Muslims should use the lower of the two values to determine the Nisab, as this is more beneficial to the poor (it makes Zakat obligatory on a smaller amount of wealth).
      </p>

      <div className="not-prose glass p-5 rounded-xl mb-6">
        <h3 className="text-desert-primary font-semibold mb-3">Nisab Thresholds for 2026</h3>
        <div className="bg-[#0A0E1A] p-4 rounded-lg text-gray-300 text-sm">
          <table className="w-full">
            <thead>
              <tr className="text-white border-b border-gray-700">
                <th className="text-left py-2">Metal</th>
                <th className="text-left py-2">Weight</th>
                <th className="text-left py-2">Est. Value (SAR) in 2026</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-gray-700/50">
                <td className="py-2">Gold (24k)</td>
                <td className="py-2">85 grams</td>
                <td className="py-2">20,400 - 22,950</td>
              </tr>
              <tr>
                <td className="py-2">Silver</td>
                <td className="py-2">595 grams</td>
                <td className="py-2">2,380 - 3,570</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-gray-400 text-xs mt-2">*Gold and silver prices fluctuate daily. Check current rates on the Saudi trading platforms or our Zakat Calculator for today's exact Nisab.</p>
      </div>

      <h2>Assets Subject to Zakat</h2>
      <p>The following types of wealth are generally subject to Zakat when they reach the Nisab threshold:</p>

      <div className="not-prose glass p-5 rounded-xl mb-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
          <div className="bg-[#0A0E1A] p-3 rounded-lg">
            <h4 className="text-desert-primary font-semibold mb-1">Cash &amp; Bank Balances</h4>
            <ul className="text-gray-400 space-y-1">
              <li>Savings accounts</li>
              <li>Current/checking accounts</li>
              <li>Fixed deposits</li>
              <li>Cash held at home</li>
              <li>Money in digital wallets</li>
            </ul>
          </div>
          <div className="bg-[#0A0E1A] p-3 rounded-lg">
            <h4 className="text-desert-primary font-semibold mb-1">Gold &amp; Silver</h4>
            <ul className="text-gray-400 space-y-1">
              <li>Gold jewelry (worn or stored)</li>
              <li>Gold and silver coins</li>
              <li>Gold and silver bars</li>
              <li>Silverware and utensils</li>
            </ul>
          </div>
          <div className="bg-[#0A0E1A] p-3 rounded-lg">
            <h4 className="text-desert-primary font-semibold mb-1">Investments</h4>
            <ul className="text-gray-400 space-y-1">
              <li>Stocks and shares</li>
              <li>Mutual funds and ETFs</li>
              <li>Islamic investment units</li>
              <li>Cryptocurrency</li>
              <li>Business inventory</li>
            </ul>
          </div>
          <div className="bg-[#0A0E1A] p-3 rounded-lg">
            <h4 className="text-desert-primary font-semibold mb-1">Receivables</h4>
            <ul className="text-gray-400 space-y-1">
              <li>Money lent to others (due back)</li>
              <li>Rental income received</li>
              <li>Business accounts receivable</li>
              <li>Pension funds (withdrawable portion)</li>
            </ul>
          </div>
        </div>
      </div>

      <h2>Deductible Liabilities (What You Can Subtract)</h2>
      <p>Before calculating your Zakat, you may subtract certain immediate and due liabilities from your total Zakatable assets. This ensures you only pay Zakat on the wealth that is truly available to you.</p>

      <div className="not-prose glass p-5 rounded-xl mb-6">
        <ul className="space-y-2 text-gray-300 text-sm">
          <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-desert-primary mt-0.5 shrink-0" /> <strong className="text-white">Credit card balances</strong> <span className="text-gray-400">— Outstanding amounts due on your billing date.</span></li>
          <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-desert-primary mt-0.5 shrink-0" /> <strong className="text-white">Personal loan installments</strong> <span className="text-gray-400">— Amounts due within the next 12 months.</span></li>
          <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-desert-primary mt-0.5 shrink-0" /> <strong className="text-white">Unpaid bills</strong> <span className="text-gray-400">— Utility, rent, medical, and other immediate obligations.</span></li>
          <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-desert-primary mt-0.5 shrink-0" /> <strong className="text-white">Money owed to others</strong> <span className="text-gray-400">— Personal debts payable within the year.</span></li>
        </ul>
        <div className="bg-[#0A0E1A] p-3 rounded-lg mt-3">
          <p className="text-gray-400 text-xs"><strong className="text-yellow-400">Note:</strong> Long-term debts like a 20-year mortgage are treated differently. Some scholars allow deducting the full outstanding balance; others only allow deducting installments due within the coming lunar year. Consult a reliable scholar for your specific situation.</p>
        </div>
      </div>

      <h2>Step-by-Step Zakat Calculation Formula</h2>

      <div className="not-prose glass p-5 rounded-xl mb-6">
        <div className="space-y-4">
          <div className="bg-[#0A0E1A] p-4 rounded-lg">
            <p className="text-white font-semibold mb-2">Step 1: Total All Zakatable Assets</p>
            <div className="text-gray-300 text-sm font-mono">
              <p>Sum = Cash + Gold Value + Investments + Receivables + Other Zakatable Assets</p>
            </div>
          </div>
          <div className="bg-[#0A0E1A] p-4 rounded-lg">
            <p className="text-white font-semibold mb-2">Step 2: Subtract Immediate Liabilities</p>
            <div className="text-gray-300 text-sm font-mono">
              <p>Net Zakatable Wealth = Total Assets - Immediate Debts</p>
            </div>
          </div>
          <div className="bg-[#0A0E1A] p-4 rounded-lg">
            <p className="text-white font-semibold mb-2">Step 3: Check Nisab</p>
            <div className="text-gray-300 text-sm font-mono">
              <p>Is Net Amount &ge; Value of 85g Gold or 595g Silver?</p>
              <p className="text-gray-400">If NO → No Zakat is due this year.</p>
              <p className="text-gray-400">If YES → Proceed to Step 4.</p>
            </div>
          </div>
          <div className="bg-[#0A0E1A] p-4 rounded-lg">
            <p className="text-white font-semibold mb-2">Step 4: Calculate 2.5%</p>
            <div className="text-gray-300 text-sm font-mono">
              <p>Zakat Due = Net Zakatable Wealth × 2.5% (or divide by 40)</p>
              <p className="text-gray-400">Example: 100,000 SAR × 0.025 = 2,500 SAR</p>
            </div>
          </div>
        </div>
      </div>

      <h2>Real-Life Calculation Examples</h2>

      <div className="not-prose glass p-5 rounded-xl mb-6">
        <h3 className="text-white font-semibold mb-3">Example 1: Below Nisab — No Zakat Due</h3>
        <p className="text-gray-300 text-sm mb-3">Fatima has 50 grams of gold jewelry and 20,000 SAR in her savings account. She has no debts.</p>
        <div className="bg-[#0A0E1A] p-4 rounded-lg text-gray-300 text-sm space-y-1.5 font-mono">
          <p>Gold: 50g × 250 SAR (est. price) = 12,500 SAR</p>
          <p>Cash Savings: 20,000 SAR</p>
          <p>Total Zakatable Assets: 32,500 SAR</p>
          <p>Less Debts: 0 SAR</p>
          <p>Net Wealth: 32,500 SAR</p>
          <p>Nisab (85g Gold): ~21,250 SAR</p>
          <p className="text-yellow-400 mt-1">Net Wealth (32,500) &gt; Nisab (21,250)? YES ✓</p>
          <p className="text-desert-primary font-bold">Zakat Due: 32,500 × 2.5% = 812.50 SAR</p>
        </div>
      </div>

      <div className="not-prose glass p-5 rounded-xl mb-6">
        <h3 className="text-white font-semibold mb-3">Example 2: Above Nisab — Full Zakat Calculation</h3>
        <p className="text-gray-300 text-sm mb-3">Ahmed has a diverse portfolio. He wants to calculate his Zakat at the end of his lunar year.</p>
        <div className="bg-[#0A0E1A] p-4 rounded-lg text-gray-300 text-sm space-y-1.5 font-mono">
          <p>Gold Jewelry (100g × 250 SAR): 25,000 SAR</p>
          <p>Savings Account: 50,000 SAR</p>
          <p>Current Account: 10,000 SAR</p>
          <p>Stocks (market value): 30,000 SAR</p>
          <p>Total Assets: 115,000 SAR</p>
          <p>Less Debts: </p>
          <p className="pl-4">Credit Card Balance: 5,000 SAR</p>
          <p className="pl-4">Personal Loan (12-month installments due): 5,000 SAR</p>
          <p className="pl-4">Total Debts: 10,000 SAR</p>
          <p>Net Zakatable Wealth: 105,000 SAR</p>
          <p className="text-desert-primary font-bold mt-1">Zakat Due: 105,000 × 2.5% = 2,625 SAR</p>
        </div>
      </div>

      <div className="not-prose glass p-5 rounded-xl mb-6">
        <h3 className="text-white font-semibold mb-3">Example 3: Zakat on Rental Income Savings</h3>
        <p className="text-gray-300 text-sm mb-3">Khalid owns a rental apartment in Riyadh. He saves the rental income in a separate account. He has reached his lunar year and saved 40,000 SAR from rental income.</p>
        <div className="bg-[#0A0E1A] p-4 rounded-lg text-gray-300 text-sm space-y-1.5 font-mono">
          <p>Rental Income Savings: 40,000 SAR</p>
          <p>Other Savings: 15,000 SAR</p>
          <p>Total Cash: 55,000 SAR</p>
          <p>Less Debts: 0 SAR</p>
          <p>Nisab Check: 55,000 &gt; ~21,250 ✓</p>
          <p className="text-desert-primary font-bold mt-1">Zakat Due: 55,000 × 2.5% = 1,375 SAR</p>
          <p className="text-gray-500 text-xs mt-1">Note: The apartment building itself is not Zakatable (it is a fixed asset used for business). Only the rental income saved is subject to Zakat.</p>
        </div>
      </div>

      <h2>Special Cases &amp; Fiqh Rulings</h2>

      <div className="not-prose glass p-5 rounded-xl mb-6">
        <h3 className="text-white font-semibold mb-3">Zakat on Real Estate</h3>
        <ul className="space-y-2 text-gray-400 text-sm">
          <li><strong className="text-white">Personal residence:</strong> No Zakat. It is a personal use asset.</li>
          <li><strong className="text-white">Rental property:</strong> No Zakat on the property value. Zakat is due on the net rental income saved if it reaches the Nisab and a lunar year passes.</li>
          <li><strong className="text-white">Land/property held for trading:</strong> Zakat is due on the market value at the end of each lunar year, at 2.5%.</li>
          <li><strong className="text-white">Property under construction for sale:</strong> Zakat is due on the market value (or cost if not yet marketable) at 2.5%.</li>
        </ul>
      </div>

      <div className="not-prose glass p-5 rounded-xl mb-6">
        <h3 className="text-white font-semibold mb-3">Zakat on Gold Jewelry Worn Daily</h3>
        <p className="text-gray-300 text-sm">
          This is one of the most commonly asked questions. The majority of Islamic scholars (Hanafi, Shafii, and Hanbali schools) hold that gold and silver jewelry is subject to Zakat because the Zakat ruling applies to the metal itself, regardless of its form. A minority position (Maliki school) exempts jewelry worn for permissible adornment. The safest position — and the one that ensures you have absolutely fulfilled your obligation — is to pay 2.5% Zakat on the market value of all gold and silver jewelry that reaches the Nisab. This is the recommended practice in Saudi Arabia.
        </p>
      </div>

      <div className="not-prose glass p-5 rounded-xl mb-6">
        <h3 className="text-white font-semibold mb-3">Zakat on Retirement and Pension Funds</h3>
        <p className="text-gray-300 text-sm">
          If you have access to your retirement or pension fund contributions and can withdraw them, they are subject to Zakat. If the funds are locked and inaccessible until retirement, most scholars say Zakat is not due until you actually receive the money. Once you receive it, you should pay Zakat for the current year and, according to many scholars, for past years if the amount was significant.
        </p>
      </div>

      <h2>How to Pay Zakat in Saudi Arabia</h2>
      <p>Once you have calculated your Zakat, it must be distributed to eligible recipients. The Quran specifies eight categories of Zakat recipients (Surah At-Tawbah 9:60), including the poor, the needy, those employed to collect Zakat, those whose hearts are to be reconciled, slaves, debtors, in the cause of Allah, and the stranded traveler.</p>

      <div className="not-prose glass p-5 rounded-xl mb-6">
        <ul className="space-y-2 text-gray-400 text-sm">
          <li><CheckCircle className="h-4 w-4 text-desert-primary inline mr-2" /><strong className="text-white">Ehsan Platform (ehsan.sa):</strong> A government-backed charity platform in Saudi Arabia that connects donors with verified beneficiaries across the kingdom. You can specify your Zakat amount and choose from various charitable projects.</li>
          <li><CheckCircle className="h-4 w-4 text-desert-primary inline mr-2" /><strong className="text-white">Registered Charities:</strong> Many charities in Saudi Arabia are registered with the Ministry of Human Resources and Social Development and accept Zakat donations.</li>
          <li><CheckCircle className="h-4 w-4 text-desert-primary inline mr-2" /><strong className="text-white">Direct Giving:</strong> You may give Zakat directly to eligible individuals you know — family members, neighbors, domestic workers, or others in need.</li>
          <li><CheckCircle className="h-4 w-4 text-desert-primary inline mr-2" /><strong className="text-white">Corporate Zakat:</strong> Businesses file and pay through the ZATCA portal.</li>
        </ul>
      </div>

      <h2>How to Use the Sauditoolhub Zakat Calculator</h2>
      <div className="not-prose glass p-6 rounded-xl mb-8">
        <div className="flex items-center gap-3 mb-4">
          <Calculator className="h-8 w-8 text-desert-primary" />
          <h3 className="text-white text-lg font-bold m-0">Sauditoolhub Zakat Calculator</h3>
        </div>
        <p className="text-gray-300 mb-4">
          Our Zakat Calculator simplifies the entire process. Enter your cash balances, gold holdings (in grams and carat), investment portfolio values, business inventory, and any deductible debts. The calculator automatically fetches the latest gold and silver prices, determines the Nisab threshold, and computes your exact Zakat obligation in seconds.
        </p>
        <ul className="space-y-2 text-gray-400 text-sm mb-4">
          <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-desert-primary" /> Automatic Nisab calculation based on current gold/silver rates</li>
          <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-desert-primary" /> Supports all Zakatable asset types: cash, gold, silver, stocks, crypto, rental savings</li>
          <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-desert-primary" /> Deducts eligible debts automatically</li>
          <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-desert-primary" /> Shows results in SAR and highlights whether you have reached the Nisab</li>
          <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-desert-primary" /> Free, private, and no registration required</li>
        </ul>
        <Link href="/zakat-calculator" className="inline-flex items-center gap-2 rounded-xl bg-desert-primary px-8 py-3 text-sm font-bold text-white transition-all hover:bg-desert-primary-dim">
          <Calculator className="h-4 w-4" />
          Calculate Your Zakat Now
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
        Zakat is a beautiful act of worship that connects the Muslim's wealth to the wellbeing of the community. By calculating and paying your Zakat accurately, you fulfill a core pillar of Islam, purify your earnings, and contribute to the support of those in need. The process may seem complex with modern financial instruments, but the basic principles remain unchanged: know the Nisab, track your Zakatable assets over a lunar year, deduct your immediate liabilities, and pay 2.5% of the net amount.
      </p>
      <p>
        Start with our{' '}
        <Link href="/zakat-calculator" className="text-desert-primary font-bold underline">Zakat Calculator</Link>
        {' '}for a fast and accurate calculation. Then explore our{' '}
        <Link href="/sama-loan-calculator" className="text-desert-primary font-bold underline">SAMA Loan Calculator</Link>
        {' '}and{' '}
        <Link href="/sip-calculator" className="text-desert-primary font-bold underline">SIP (Investment) Calculator</Link>
        {' '}for broader financial planning. Visit our{' '}
        <Link href="/blog" className="text-desert-primary font-bold underline">Blog</Link>
        {' '}for more Islamic finance and lifestyle guides.
      </p>

      <div className="not-prose glass p-6 rounded-xl mt-8 text-center">
        <Calculator className="h-10 w-10 text-desert-primary mx-auto mb-3" />
        <h3 className="text-white text-lg font-bold mb-2">Calculate Your Zakat Accurately</h3>
        <p className="text-gray-400 text-sm mb-4">Free Zakat Calculator — instant Nisab check and obligation amount</p>
        <Link href="/zakat-calculator" className="inline-flex items-center gap-2 rounded-xl bg-desert-primary px-8 py-3 text-sm font-bold text-white transition-all hover:bg-desert-primary-dim">
          <Calculator className="h-4 w-4" />
          Calculate Zakat Now
        </Link>
      </div>
    </article>
  )
}

function ArContent() {
  return (
    <article className="prose prose-invert max-w-none prose-headings:text-desert-primary prose-a:text-desert-primary prose-strong:text-white prose-li:text-gray-300" dir="rtl">
      <h1>الدليل الكامل لحساب الزكاة على الذهب والنقد والاستثمارات في السعودية 2026</h1>

      <div className="not-prose glass p-6 rounded-xl mb-8">
        <p className="text-gray-300 text-lg leading-relaxed">
          الزكاة ركن من أركان الإسلام الخمسة — فريضة أمر بها الله تطهر المال وتقوي روابط المجتمع وتوفي حقوق المحتاجين. للمسلمين في السعودية، حساب الزكاة بدقة هو واجب ديني وضرورة عملية. مع تقلب أسعار الذهب وتنوع المحافظ الاستثمارية واختلاف الآراء الفقهية حول الأدوات المالية الحديثة، قد تكون معرفة مقدار الزكاة الواجبة تحدياً.
        </p>
        <p className="text-gray-300 text-lg leading-relaxed mt-4">
          هذا الدليل يقدم <strong>نهجاً شاملاً خطوة بخطوة لحساب زكاتك في 2026</strong>، ويشرح نصاب الذهب والفضة، كيفية حساب الزكاة على النقود والذهب والأسهم وصناديق الاستثمار والعملات الرقمية، والالتزامات القابلة للخصم، والأحكام الفقهية للحالات الخاصة. الأحكام الواردة في هذا الدليل تتبع رأي جمهور الفقهاء.
        </p>
        <p className="text-gray-300 text-lg leading-relaxed mt-4">
          استخدم{' '}
          <Link href="/zakat-calculator" className="text-desert-primary font-bold underline">
            حاسبة الزكاة
          </Link>{' '}
          المجانية من Sauditoolhub لحساب زكاتك فوراً.
        </p>
      </div>

      <h2>ما هي الزكاة ومن يجب عليه دفعها؟</h2>
      <p>
        الزكاة لغةً: التطهير والنماء. وفي الشرع: حق واجب في المال لفئات محددة. وهي ركن من أركان الإسلام. تجب الزكاة بشرطين: (1) بلوغ النصاب — أن يبلغ المال حداً أدنى (قيمة 85 جراماً من الذهب أو 595 جراماً من الفضة). (2) حولان الحول — أن يمضي سنة قمرية كاملة (354 يوماً) على المال. معدل الزكاة هو 2.5% (ربع العشر).
      </p>

      <h2>فهم النصاب في 2026</h2>
      <p>
        النصاب هو الحد الأدنى من المال الذي تجب به الزكاة، حدده النبي ﷺ بقيمة 85 جراماً من الذهب أو 595 جراماً من الفضة. يُنصح باستخدام القيمة الأقل منهما لأن ذلك أنفع للفقراء.
      </p>

      <div className="not-prose glass p-5 rounded-xl mb-6">
        <h3 className="text-desert-primary font-semibold mb-3">النصاب لعام 2026</h3>
        <div className="bg-[#0A0E1A] p-4 rounded-lg text-gray-300 text-sm">
          <p>الذهب (24 قيراط): 85 جراماً = ~20,400 - 22,950 ريال</p>
          <p>الفضة: 595 جراماً = ~2,380 - 3,570 ريال</p>
          <p className="text-gray-500 text-xs mt-1">*أسعار الذهب والفضة تتغير يومياً. تحقق من الأسعار الحالية في حاسبة الزكاة.</p>
        </div>
      </div>

      <h2>الأموال التي تجب فيها الزكاة</h2>
      <div className="not-prose glass p-5 rounded-xl mb-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
          <div className="bg-[#0A0E1A] p-3 rounded-lg">
            <h4 className="text-desert-primary font-semibold mb-1">النقود</h4>
            <ul className="text-gray-400 space-y-1">
              <li>حسابات التوفير والحسابات الجارية</li>
              <li>الودائع لأجل</li>
              <li>النقود في المنزل</li>
              <li>المحافظ الرقمية</li>
            </ul>
          </div>
          <div className="bg-[#0A0E1A] p-3 rounded-lg">
            <h4 className="text-desert-primary font-semibold mb-1">الذهب والفضة</h4>
            <ul className="text-gray-400 space-y-1">
              <li>الحلي الذهبية (المستعملة والمخزنة)</li>
              <li>العملات الذهبية والفضية</li>
              <li>سبائك الذهب والفضة</li>
            </ul>
          </div>
          <div className="bg-[#0A0E1A] p-3 rounded-lg">
            <h4 className="text-desert-primary font-semibold mb-1">الاستثمارات</h4>
            <ul className="text-gray-400 space-y-1">
              <li>الأسهم</li>
              <li>صناديق الاستثمار</li>
              <li>العملات الرقمية</li>
              <li>البضاعة التجارية</li>
            </ul>
          </div>
          <div className="bg-[#0A0E1A] p-3 rounded-lg">
            <h4 className="text-desert-primary font-semibold mb-1">المبالغ المستحقة</h4>
            <ul className="text-gray-400 space-y-1">
              <li>النقود المُقرضة المستحقة</li>
              <li>دخل الإيجار المدخر</li>
              <li>المبالغ المستحقة للشركة</li>
            </ul>
          </div>
        </div>
      </div>

      <h2>الالتزامات القابلة للخصم</h2>
      <p>قبل حساب الزكاة، يمكنك خصم الديون المستحقة:</p>
      <ul className="text-sm text-gray-400 space-y-1 mb-4">
        <li>أرصدة بطاقات الائتمان</li>
        <li>أقساط القروض المستحقة خلال 12 شهراً</li>
        <li>الفواتير غير المدفوعة</li>
        <li>الديون الشخصية المستحقة</li>
      </ul>

      <h2>معادلة حساب الزكاة</h2>
      <div className="not-prose glass p-5 rounded-xl mb-6">
        <div className="space-y-3">
          <div className="bg-[#0A0E1A] p-3 rounded-lg">
            <p className="text-white">الخطوة 1: جمع جميع الأموال الزكوية</p>
          </div>
          <div className="bg-[#0A0E1A] p-3 rounded-lg">
            <p className="text-white">الخطوة 2: طرح الالتزامات المستحقة</p>
          </div>
          <div className="bg-[#0A0E1A] p-3 rounded-lg">
            <p className="text-white">الخطوة 3: التحقق من بلوغ النصاب</p>
          </div>
          <div className="bg-[#0A0E1A] p-3 rounded-lg">
            <p className="text-white">الخطوة 4: إخراج 2.5% من المبلغ الصافي</p>
          </div>
        </div>
      </div>

      <h2>أمثلة عملية</h2>

      <div className="not-prose glass p-5 rounded-xl mb-6">
        <h3 className="text-white font-semibold mb-3">مثال 1: ذهب ونقود (فوق النصاب)</h3>
        <div className="bg-[#0A0E1A] p-4 rounded-lg text-gray-300 text-sm space-y-1.5 font-mono">
          <p>ذهب (100 جرام): 25,000 ريال</p>
          <p>مدخرات: 50,000 ريال</p>
          <p>أسهم: 30,000 ريال</p>
          <p>إجمالي الأصول: 115,000 ريال</p>
          <p>الديون: 10,000 ريال</p>
          <p>الصافي: 105,000 ريال</p>
          <p className="text-desert-primary font-bold mt-1">الزكاة: 105,000 × 2.5% = 2,625 ريال</p>
        </div>
      </div>

      <div className="not-prose glass p-5 rounded-xl mb-6">
        <h3 className="text-white font-semibold mb-3">مثال 2: زكاة مدخرات الإيجار</h3>
        <div className="bg-[#0A0E1A] p-4 rounded-lg text-gray-300 text-sm space-y-1.5 font-mono">
          <p>مدخرات الإيجار: 40,000 ريال</p>
          <p>مدخرات أخرى: 15,000 ريال</p>
          <p>الإجمالي: 55,000 ريال</p>
          <p>فوق النصاب ✓</p>
          <p className="text-desert-primary font-bold mt-1">الزكاة: 55,000 × 2.5% = 1,375 ريال</p>
        </div>
      </div>

      <h2>كيفية دفع الزكاة في السعودية</h2>
      <ul className="text-sm text-gray-400 space-y-2 mb-6">
        <li>منصة إحسان (ehsan.sa) — منصة حكومية معتمدة</li>
        <li>الجمعيات الخيرية المسجلة</li>
        <li>الإعطاء المباشر للأفراد المستحقين</li>
        <li>للشركات: عبر بوابة هيئة الزكاة والضريبة والجمارك</li>
      </ul>

      <h2>حاسبة الزكاة من Sauditoolhub</h2>
      <div className="not-prose glass p-6 rounded-xl mb-8">
        <div className="flex items-center gap-3 mb-4">
          <Calculator className="h-8 w-8 text-desert-primary" />
          <h3 className="text-white text-lg font-bold m-0">حاسبة الزكاة</h3>
        </div>
        <Link href="/zakat-calculator" className="inline-flex items-center gap-2 rounded-xl bg-desert-primary px-8 py-3 text-sm font-bold text-white transition-all hover:bg-desert-primary-dim">
          <Calculator className="h-4 w-4" />
          احسب زكاتك الآن
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
        الزكاة عبادة عظيمة تربط مال المسلم بخير المجتمع. ابدأ بحساب زكاتك مع{' '}
        <Link href="/zakat-calculator" className="text-desert-primary font-bold underline">حاسبة الزكاة</Link>
        . ثم استكشف{' '}
        <Link href="/sama-loan-calculator" className="text-desert-primary font-bold underline">حاسبة ساما للقروض</Link>
        {' '}و{' '}
        <Link href="/sip-calculator" className="text-desert-primary font-bold underline">حاسبة الاستثمار</Link>
        . زوروا{' '}
        <Link href="/blog" className="text-desert-primary font-bold underline">المدونة</Link>.
      </p>

      <div className="not-prose glass p-6 rounded-xl mt-8 text-center">
        <Calculator className="h-10 w-10 text-desert-primary mx-auto mb-3" />
        <h3 className="text-white text-lg font-bold mb-2">احسب زكاتك بدقة</h3>
        <p className="text-gray-400 text-sm mb-4">حاسبة مجانية — نصاب دقيق ومبلغ الزكاة</p>
        <Link href="/zakat-calculator" className="inline-flex items-center gap-2 rounded-xl bg-desert-primary px-8 py-3 text-sm font-bold text-white transition-all hover:bg-desert-primary-dim">
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
      <h1>سعودی عرب میں سونے، نقدی اور سرمایہ کاری پر زکوٰۃ کے حساب کا مکمل گائیڈ 2026</h1>

      <div className="not-prose glass p-6 rounded-xl mb-8">
        <p className="text-gray-300 text-lg leading-relaxed">
          زکوٰۃ اسلام کے پانچ ستونوں میں سے ایک ہے — اللہ کا فرمان ہے جو مال کو پاک کرتا ہے، کمیونٹی کے تعلقات کو مضبوط کرتا ہے اور ضرورت مندوں کے حقوق پورے کرتا ہے۔ سعودی عرب میں مسلمانوں کے لیے زکوٰۃ کا درست حساب لگانا ایک روحانی فریضہ اور عملی ضرورت ہے۔
        </p>
        <p className="text-gray-300 text-lg leading-relaxed mt-4">
          یہ گائیڈ <strong>2026 میں زکوٰۃ کے حساب کا ایک جامع مرحلہ وار طریقہ</strong> فراہم کرتا ہے۔
        </p>
        <p className="text-gray-300 text-lg leading-relaxed mt-4">
          ہمارا مفت{' '}
          <Link href="/zakat-calculator" className="text-desert-primary font-bold underline">
            Zakat Calculator
          </Link>{' '}
          استعمال کریں۔
        </p>
      </div>

      <h2>زکوٰۃ کیا ہے اور اسے کسے دینا چاہیے؟</h2>
      <p>زکوٰۃ اسلام کا تیسرا ستون ہے۔ یہ مال کا ایک مقررہ حصہ ہے جو ہر اہل مسلمان کو مستحقین میں تقسیم کرنا ہوتا ہے۔ زکوٰۃ واجب ہونے کے لیے دو شرطیں ہیں: (1) نصاب — مال کم از کم حد (85 گرام سونا یا 595 گرام چاندی) سے زیادہ ہو۔ (2) حول — ایک قمری سال گزر چکا ہو۔ زکوٰۃ کی شرح 2.5% ہے۔</p>

      <h2>2026 میں نصاب کو سمجھنا</h2>
      <p>نصاب وہ کم از کم رقم ہے جس پر زکوٰۃ واجب ہوتی ہے۔ یہ 85 گرام سونے یا 595 گرام چاندی کی قیمت پر مبنی ہے۔</p>

      <div className="not-prose glass p-5 rounded-xl mb-6">
        <div className="bg-[#0A0E1A] p-4 rounded-lg text-gray-300 text-sm">
          <p>سونے کا نصاب (85 گرام): ~20,400 - 22,950 SAR</p>
          <p>چاندی کا نصاب (595 گرام): ~2,380 - 3,570 SAR</p>
        </div>
      </div>

      <h2>زکوٰۃ کے قابل اثاثے</h2>
      <div className="not-prose glass p-5 rounded-xl mb-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
          <div className="bg-[#0A0E1A] p-3 rounded-lg">
            <h4 className="text-desert-primary font-semibold mb-1">نقدی اور بینک بیلنس</h4>
            <ul className="text-gray-400 space-y-1">
              <li>سیونگ اکاؤنٹس</li>
              <li>کرنٹ اکاؤنٹس</li>
              <li>فکسڈ ڈپازٹس</li>
              <li>گھر کی نقدی</li>
            </ul>
          </div>
          <div className="bg-[#0A0E1A] p-3 rounded-lg">
            <h4 className="text-desert-primary font-semibold mb-1">سونا اور چاندی</h4>
            <ul className="text-gray-400 space-y-1">
              <li>سونے کے زیورات</li>
              <li>سونے چاندی کے سکے</li>
              <li>سونے چاندی کی سلاخیں</li>
            </ul>
          </div>
          <div className="bg-[#0A0E1A] p-3 rounded-lg">
            <h4 className="text-desert-primary font-semibold mb-1">سرمایہ کاری</h4>
            <ul className="text-gray-400 space-y-1">
              <li>شیئرز اور اسٹاک</li>
              <li>میوچل فنڈز</li>
              <li>کرپٹو کرنسی</li>
            </ul>
          </div>
          <div className="bg-[#0A0E1A] p-3 rounded-lg">
            <h4 className="text-desert-primary font-semibold mb-1">واجب الادا رقم</h4>
            <ul className="text-gray-400 space-y-1">
              <li>قرضے کی رقم</li>
              <li>کرایہ کی بچت</li>
            </ul>
          </div>
        </div>
      </div>

      <h2>مرحلہ وار زکوٰۃ کا حساب</h2>
      <div className="not-prose glass p-5 rounded-xl mb-6">
        <div className="space-y-3">
          <div className="bg-[#0A0E1A] p-3 rounded-lg"><p className="text-white">مرحلہ 1: کل زکوٰۃ کے قابل اثاثے جمع کریں</p></div>
          <div className="bg-[#0A0E1A] p-3 rounded-lg"><p className="text-white">مرحلہ 2: فوری قرضے نکالیں</p></div>
          <div className="bg-[#0A0E1A] p-3 rounded-lg"><p className="text-white">مرحلہ 3: نصاب کی جانچ کریں</p></div>
          <div className="bg-[#0A0E1A] p-3 rounded-lg"><p className="text-white">مرحلہ 4: 2.5% کا حساب کریں</p></div>
        </div>
      </div>

      <h2>عملی مثالیں</h2>

      <div className="not-prose glass p-5 rounded-xl mb-6">
        <h3 className="text-white font-semibold mb-3">مثال 1: سونا اور نقدی (نصاب سے زیادہ)</h3>
        <div className="bg-[#0A0E1A] p-4 rounded-lg text-gray-300 text-sm space-y-1.5 font-mono">
          <p>سونے کے زیورات (100 گرام): 25,000 SAR</p>
          <p>سیونگ اکاؤنٹ: 50,000 SAR</p>
          <p>شیئرز: 30,000 SAR</p>
          <p>کل اثاثے: 115,000 SAR</p>
          <p>قرضے: 10,000 SAR</p>
          <p>خالص: 105,000 SAR</p>
          <p className="text-desert-primary font-bold mt-1">زکوٰۃ: 105,000 × 2.5% = 2,625 SAR</p>
        </div>
      </div>

      <h2>زکوٰۃ کیسے ادا کریں</h2>
      <ul className="text-sm text-gray-400 space-y-2 mb-6">
        <li>احسان پلیٹ فارم (ehsan.sa)</li>
        <li>رجسٹرڈ خیراتی ادارے</li>
        <li>براہ راست مستحق افراد کو</li>
      </ul>

      <h2>Sauditoolhub Zakat Calculator</h2>
      <div className="not-prose glass p-6 rounded-xl mb-8">
        <Link href="/zakat-calculator" className="inline-flex items-center gap-2 rounded-xl bg-desert-primary px-8 py-3 text-sm font-bold text-white transition-all hover:bg-desert-primary-dim">
          <Calculator className="h-4 w-4" />
          زکوٰۃ کا حساب لگائیں
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
        <Link href="/zakat-calculator" className="text-desert-primary font-bold underline">Zakat Calculator</Link>
        {' '}استعمال کریں۔{' '}
        <Link href="/sama-loan-calculator" className="text-desert-primary font-bold underline">SAMA Loan Calculator</Link>
        {' '}اور{' '}
        <Link href="/sip-calculator" className="text-desert-primary font-bold underline">SIP Calculator</Link>
        {' '}بھی دیکھیں۔{' '}
        <Link href="/blog" className="text-desert-primary font-bold underline">بلاگ</Link> پر مزید۔
      </p>

      <div className="not-prose glass p-6 rounded-xl mt-8 text-center">
        <Calculator className="h-10 w-10 text-desert-primary mx-auto mb-3" />
        <h3 className="text-white text-lg font-bold mb-2">اپنی زکوٰۃ درست حساب کریں</h3>
        <p className="text-gray-400 text-sm mb-4">مفت زکوٰۃ کیلکولیٹر</p>
        <Link href="/zakat-calculator" className="inline-flex items-center gap-2 rounded-xl bg-desert-primary px-8 py-3 text-sm font-bold text-white transition-all hover:bg-desert-primary-dim">
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
      <h1>Kumpletong Gabay sa Pagkalkula ng Zakat sa Ginto, Pera at Investments sa Saudi Arabia 2026</h1>

      <div className="not-prose glass p-6 rounded-xl mb-8">
        <p className="text-gray-300 text-lg leading-relaxed">
          Ang Zakat ay isa sa limang haligi ng Islam — isang obligadong pagsamba na nagpapadalisay ng yaman, nagpapalakas ng ugnayan ng komunidad, at tumutupad sa karapatan ng mga nangangailangan. Para sa mga Muslim na naninirahan sa Saudi Arabia, ang tumpak na pagkalkula ng Zakat ay parehong espirituwal na obligasyon at praktikal na pangangailangan.
        </p>
        <p className="text-gray-300 text-lg leading-relaxed mt-4">
          Ang gabay na ito ay nagbibigay ng <strong>komprehensibong step-by-step na approach sa pagkalkula ng iyong Zakat sa 2026</strong>.
        </p>
        <p className="text-gray-300 text-lg leading-relaxed mt-4">
          Gamitin ang aming libreng{' '}
          <Link href="/zakat-calculator" className="text-desert-primary font-bold underline">
            Zakat Calculator
          </Link>.
        </p>
      </div>

      <h2>Ano ang Zakat at Sino ang Dapat Magbayad Nito?</h2>
      <p>Ang Zakat ay ang ikatlong haligi ng Islam. Ito ay isang takdang bahagi ng yaman na dapat ipamahagi ng bawat karapat-dapat na Muslim sa mga tiyak na kategorya ng mga tatanggap. Ang Zakat ay nagiging obligado kapag ang dalawang kondisyon ay natugunan: (1) Nisab — ang iyong yaman ay lumampas sa pinakamababang threshold (halaga ng 85g ng ginto o 595g ng pilak). (2) Haul — isang buong lunar year ang lumipas. Ang standard Zakat rate ay 2.5%.</p>

      <h2>Pag-unawa sa Nisab sa 2026</h2>
      <div className="not-prose glass p-5 rounded-xl mb-6">
        <div className="bg-[#0A0E1A] p-4 rounded-lg text-gray-300 text-sm">
          <p>Gold Nisab (85g): ~20,400 - 22,950 SAR</p>
          <p>Silver Nisab (595g): ~2,380 - 3,570 SAR</p>
        </div>
      </div>

      <h2>Step-by-Step na Pagkalkula ng Zakat</h2>
      <div className="not-prose glass p-5 rounded-xl mb-6">
        <div className="space-y-3">
          <div className="bg-[#0A0E1A] p-3 rounded-lg"><p className="text-white">Step 1: I-total ang lahat ng Zakatable assets</p></div>
          <div className="bg-[#0A0E1A] p-3 rounded-lg"><p className="text-white">Step 2: Ibawas ang immediate liabilities</p></div>
          <div className="bg-[#0A0E1A] p-3 rounded-lg"><p className="text-white">Step 3: Suriin kung lampas sa Nisab</p></div>
          <div className="bg-[#0A0E1A] p-3 rounded-lg"><p className="text-white">Step 4: Kalkulahin ang 2.5% ng net amount</p></div>
        </div>
      </div>

      <h2>Mga Halimbawa</h2>

      <div className="not-prose glass p-5 rounded-xl mb-6">
        <h3 className="text-white font-semibold mb-3">Example: Gold at Cash (Above Nisab)</h3>
        <div className="bg-[#0A0E1A] p-4 rounded-lg text-gray-300 text-sm space-y-1.5 font-mono">
          <p>Gold (100g): 25,000 SAR</p>
          <p>Savings: 50,000 SAR</p>
          <p>Stocks: 30,000 SAR</p>
          <p>Total Assets: 115,000 SAR</p>
          <p>Debts: 10,000 SAR</p>
          <p>Net: 105,000 SAR</p>
          <p className="text-desert-primary font-bold mt-1">Zakat: 105,000 × 2.5% = 2,625 SAR</p>
        </div>
      </div>

      <h2>Paano Magbayad ng Zakat</h2>
      <ul className="text-sm text-gray-400 space-y-2 mb-6">
        <li>Ehsan Platform (ehsan.sa)</li>
        <li>Mga rehistradong charity organization</li>
        <li>Direktang pagbibigay sa mga kwalipikadong indibidwal</li>
      </ul>

      <h2>Sauditoolhub Zakat Calculator</h2>
      <div className="not-prose glass p-6 rounded-xl mb-8">
        <Link href="/zakat-calculator" className="inline-flex items-center gap-2 rounded-xl bg-desert-primary px-8 py-3 text-sm font-bold text-white transition-all hover:bg-desert-primary-dim">
          <Calculator className="h-4 w-4" />
          Kalkulahin ang Zakat Ngayon
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
        <Link href="/zakat-calculator" className="text-desert-primary font-bold underline">Zakat Calculator</Link>
        {' '}ng Sauditoolhub. Tingnan din ang{' '}
        <Link href="/sama-loan-calculator" className="text-desert-primary font-bold underline">SAMA Loan Calculator</Link>
        {' '}at{' '}
        <Link href="/sip-calculator" className="text-desert-primary font-bold underline">SIP Calculator</Link>
        . Bisitahin ang aming{' '}
        <Link href="/blog" className="text-desert-primary font-bold underline">Blog</Link>.
      </p>

      <div className="not-prose glass p-6 rounded-xl mt-8 text-center">
        <Calculator className="h-10 w-10 text-desert-primary mx-auto mb-3" />
        <h3 className="text-white text-lg font-bold mb-2">Kalkulahin ang Iyong Zakat nang Tumpak</h3>
        <p className="text-gray-400 text-sm mb-4">Libreng Zakat Calculator</p>
        <Link href="/zakat-calculator" className="inline-flex items-center gap-2 rounded-xl bg-desert-primary px-8 py-3 text-sm font-bold text-white transition-all hover:bg-desert-primary-dim">
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
      <h1>সৌদি আরবে স্বর্ণ, নগদ ও বিনিয়োগের যাকাত গণনার সম্পূর্ণ গাইড 2026</h1>

      <div className="not-prose glass p-6 rounded-xl mb-8">
        <p className="text-gray-300 text-lg leading-relaxed">
          যাকাত ইসলামের পাঁচটি স্তম্ভের একটি — আল্লাহর আদেশ যা সম্পদকে পবিত্র করে, সম্প্রদায়ের বন্ধন শক্তিশালী করে এবং অভাবগ্রস্তদের অধিকার পূর্ণ করে। সৌদি আরবে বসবাসকারী মুসলমানদের জন্য সঠিকভাবে যাকাত গণনা করা একটি আধ্যাত্মিক বাধ্যবাধকতা এবং ব্যবহারিক প্রয়োজনীয়তা।
        </p>
        <p className="text-gray-300 text-lg leading-relaxed mt-4">
          এই গাইডটি <strong>২০২৬ সালে আপনার যাকাত গণনার একটি বিস্তৃত ধাপে ধাপে পদ্ধতি</strong> প্রদান করে।
        </p>
        <p className="text-gray-300 text-lg leading-relaxed mt-4">
          আমাদের বিনামূল্যের{' '}
          <Link href="/zakat-calculator" className="text-desert-primary font-bold underline">
            Zakat Calculator
          </Link>{' '}
          ব্যবহার করুন।
        </p>
      </div>

      <h2>যাকাত কী এবং কে তা দিতে বাধ্য?</h2>
      <p>যাকাত ইসলামের তৃতীয় স্তম্ভ। এটি সম্পদের একটি নির্ধারিত অংশ যা প্রত্যেক যোগ্য মুসলমানকে নির্দিষ্ট শ্রেণীর প্রাপকদের মধ্যে বিতরণ করতে হয়। যাকাত ওয়াজিব হওয়ার জন্য দুটি শর্ত: (১) নেসাব — সম্পদ ন্যূনতম সীমা (৮৫ গ্রাম স্বর্ণ বা ৫৯৫ গ্রাম রৌপ্যের মূল্য) অতিক্রম করে। (২) হাওল — একটি পূর্ণ চন্দ্র বছর অতিক্রান্ত হয়েছে। যাকাতের হার ২.৫%।</p>

      <h2>২০২৬ সালে নেসাব বোঝা</h2>
      <div className="not-prose glass p-5 rounded-xl mb-6">
        <div className="bg-[#0A0E1A] p-4 rounded-lg text-gray-300 text-sm">
          <p>স্বর্ণের নেসাব (৮৫ গ্রাম): ~২০,৪০০ - ২২,৯৫০ SAR</p>
          <p>রৌপ্যের নেসাব (৫৯৫ গ্রাম): ~২,৩৮০ - ৩,৫৭০ SAR</p>
        </div>
      </div>

      <h2>ধাপে ধাপে যাকাত গণনা</h2>
      <div className="not-prose glass p-5 rounded-xl mb-6">
        <div className="space-y-3">
          <div className="bg-[#0A0E1A] p-3 rounded-lg"><p className="text-white">ধাপ ১: সমস্ত যাকাতযোগ্য সম্পদ যোগ করুন</p></div>
          <div className="bg-[#0A0E1A] p-3 rounded-lg"><p className="text-white">ধাপ ২: জরুরি দায় বাদ দিন</p></div>
          <div className="bg-[#0A0E1A] p-3 rounded-lg"><p className="text-white">ধাপ ৩: নেসাবে পৌঁছেছে কিনা পরীক্ষা করুন</p></div>
          <div className="bg-[#0A0E1A] p-3 rounded-lg"><p className="text-white">ধাপ ৪: নিট পরিমাণের ২.৫% গণনা করুন</p></div>
        </div>
      </div>

      <h2>উদাহরণ</h2>

      <div className="not-prose glass p-5 rounded-xl mb-6">
        <h3 className="text-white font-semibold mb-3">উদাহরণ: স্বর্ণ ও নগদ (নেসাবের উপরে)</h3>
        <div className="bg-[#0A0E1A] p-4 rounded-lg text-gray-300 text-sm space-y-1.5 font-mono">
          <p>স্বর্ণ (১০০ গ্রাম): ২৫,০০০ SAR</p>
          <p>সঞ্চয়: ৫০,০০০ SAR</p>
          <p>শেয়ার: ৩০,০০০ SAR</p>
          <p>মোট সম্পদ: ১,১৫,০০০ SAR</p>
          <p>ঋণ: ১০,০০০ SAR</p>
          <p>নিট: ১,০৫,০০০ SAR</p>
          <p className="text-desert-primary font-bold mt-1">যাকাত: ১,০৫,০০০ × ২.৫% = ২,৬২৫ SAR</p>
        </div>
      </div>

      <h2>যাকাত প্রদানের পদ্ধতি</h2>
      <ul className="text-sm text-gray-400 space-y-2 mb-6">
        <li>এহসান প্ল্যাটফর্ম (ehsan.sa)</li>
        <li>নিবন্ধিত দাতব্য সংস্থা</li>
        <li>সরাসরি যোগ্য ব্যক্তিদের দেওয়া</li>
      </ul>

      <h2>Sauditoolhub Zakat Calculator</h2>
      <div className="not-prose glass p-6 rounded-xl mb-8">
        <Link href="/zakat-calculator" className="inline-flex items-center gap-2 rounded-xl bg-desert-primary px-8 py-3 text-sm font-bold text-white transition-all hover:bg-desert-primary-dim">
          <Calculator className="h-4 w-4" />
          এখনই যাকাত গণনা করুন
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
        <Link href="/zakat-calculator" className="text-desert-primary font-bold underline">Zakat Calculator</Link>
        {' '}ব্যবহার করুন।{' '}
        <Link href="/sama-loan-calculator" className="text-desert-primary font-bold underline">SAMA Loan Calculator</Link>
        {' '}এবং{' '}
        <Link href="/sip-calculator" className="text-desert-primary font-bold underline">SIP Calculator</Link>
        {' '}ও দেখুন। আমাদের{' '}
        <Link href="/blog" className="text-desert-primary font-bold underline">ব্লগ</Link> দেখুন।
      </p>

      <div className="not-prose glass p-6 rounded-xl mt-8 text-center">
        <Calculator className="h-10 w-10 text-desert-primary mx-auto mb-3" />
        <h3 className="text-white text-lg font-bold mb-2">সঠিকভাবে আপনার যাকাত গণনা করুন</h3>
        <p className="text-gray-400 text-sm mb-4">বিনামূল্যের যাকাত ক্যালকুলেটর</p>
        <Link href="/zakat-calculator" className="inline-flex items-center gap-2 rounded-xl bg-desert-primary px-8 py-3 text-sm font-bold text-white transition-all hover:bg-desert-primary-dim">
          <Calculator className="h-4 w-4" />
          এখনই গণনা করুন
        </Link>
      </div>
    </article>
  )
}

export default async function ZakatGuidePage({ params }: Props) {
  const { locale } = await params
  const isAr = locale === 'ar'
  const isUr = locale === 'ur'
  const isTl = locale === 'tl'
  const isBn = locale === 'bn'
  const isDefault = locale === 'en'
  const pageUrl = isDefault ? `${baseUrl}/guide/zakat-calculation-guide-saudi-arabia-2026` : `${baseUrl}/${locale}/guide/zakat-calculation-guide-saudi-arabia-2026`

  const schema = isAr ? schemaAr : isUr ? schemaUr : isTl ? schemaTl : isBn ? schemaBn : articleSchemaEn
  const faqItems = isAr ? faqsAr : isUr ? faqsUr : isTl ? faqsTl : isBn ? faqsBn : faqsEn

  return (
    <>
      <article
        itemScope
        itemType="https://schema.org/Article"
        className="relative z-10"
      >
        <section className="px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-6xl">
            {isAr ? <ArContent /> : isUr ? <UrContent /> : isTl ? <TlContent /> : isBn ? <BnContent /> : <EnContent />}
          </div>
        </section>
      </article>
    </>
  )
}
