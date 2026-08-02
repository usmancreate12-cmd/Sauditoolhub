import type { Metadata } from 'next'
import Link from 'next/link'
import { Calculator, DollarSign, Building2, FileText, AlertTriangle, CheckCircle, TrendingUp, Users, Shield, Briefcase, CreditCard, Landmark } from 'lucide-react'

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
    ? 'الدليل الكامل لتكاليف السجل التجاري وتأسيس شركة في السعودية 2026 | Sauditoolhub'
    : isUr
    ? 'سعودی عرب میں کمرشل رجسٹریشن لاگت اور کاروبار شروع کرنے کا مکمل گائیڈ 2026 | Sauditoolhub'
    : isTl
    ? 'Kumpletong Gabay sa CR Cost at Pagtatatag ng Negosyo sa Saudi Arabia 2026 | Sauditoolhub'
    : isBn
    ? 'সৌদি আরবে বাণিজ্যিক নিবন্ধন খরচ ও ব্যবসা শুরু করার সম্পূর্ণ গাইড 2026 | Sauditoolhub'
    : 'Complete Guide to Commercial Registration (CR) Costs & Starting a Business in Saudi Arabia 2026 | Sauditoolhub'

  const description = isAr
    ? 'دليل كامل لتكاليف السجل التجاري وتأسيس الشركات في السعودية 2026. تعرف على رسوم وزارة التجارة، الغرفة التجارية، الرخصة البلدية، وتكاليف التأسيس خطوة بخطوة.'
    : isUr
    ? 'سعودی عرب میں کمرشل رجسٹریشن کے اخراجات اور کاروبار شروع کرنے کا مکمل گائیڈ 2026۔ وزارت تجارت، چیمبر آف کامرس، بلدیہ لائسنس اور دیگر اخراجات۔'
    : isTl
    ? 'Kumpletong gabay sa CR costs at pagtatatag ng negosyo sa Saudi Arabia 2026. Alamin ang Ministry of Commerce fees, Chamber of Commerce, municipal license, at iba pang gastos.'
    : isBn
    ? 'সৌদি আরবে বাণিজ্যিক নিবন্ধন খরচ ও ব্যবসা শুরু করার সম্পূর্ণ গাইড ২০২৬। বাণিজ্য মন্ত্রণালয়ের ফি, চেম্বার অফ কমার্স, পৌর লাইসেন্স এবং অন্যান্য খরচ।'
    : 'Complete guide to Commercial Registration costs and starting a business in Saudi Arabia 2026. Covers Ministry of Commerce fees, Chamber of Commerce charges, municipal license costs, MISA license for expats, and step-by-step company formation.'

  return {
    title,
    description,
    alternates: {
      canonical: isDefault ? `${baseUrl}/guide/cr-cost-starting-business-saudi-arabia-2026` : `${baseUrl}/${locale}/guide/cr-cost-starting-business-saudi-arabia-2026`,
      languages: {
        en: `${baseUrl}/guide/cr-cost-starting-business-saudi-arabia-2026`,
        ar: `${baseUrl}/ar/guide/cr-cost-starting-business-saudi-arabia-2026`,
        ur: `${baseUrl}/ur/guide/cr-cost-starting-business-saudi-arabia-2026`,
        tl: `${baseUrl}/tl/guide/cr-cost-starting-business-saudi-arabia-2026`,
        bn: `${baseUrl}/bn/guide/cr-cost-starting-business-saudi-arabia-2026`,
      },
    },
    openGraph: {
      title,
      description,
      url: isDefault ? `${baseUrl}/guide/cr-cost-starting-business-saudi-arabia-2026` : `${baseUrl}/${locale}/guide/cr-cost-starting-business-saudi-arabia-2026`,
      siteName: 'Sauditoolhub',
      locale: isAr ? 'ar_SA' : isUr ? 'ur_PK' : isTl ? 'tl_PH' : isBn ? 'bn_BD' : 'en_US',
      type: 'article',
      publishedTime: '2026-02-01',
      modifiedTime: '2026-07-01',
    },
    twitter: { card: 'summary_large_image', title, description },
    robots: { index: true, follow: true },
  }
}

const articleSchemaEn = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'The Complete Guide to Commercial Registration (CR) Costs & Starting a Business in Saudi Arabia 2026',
  description: 'Everything you need to know about Commercial Registration costs and company formation in Saudi Arabia. Covers Ministry of Commerce fees, Chamber of Commerce charges, municipal license, MISA license for expats, hidden costs, and real-life cost examples.',
  author: { '@type': 'Person', name: 'Sauditoolhub Team' },
  publisher: { '@type': 'Organization', name: 'Sauditoolhub', logo: { '@type': 'ImageObject', url: `${baseUrl}/logo.png` } },
  datePublished: '2026-02-01',
  dateModified: '2026-07-01',
}

const schemaAr = {
  ...articleSchemaEn,
  headline: 'الدليل الكامل لتكاليف السجل التجاري وتأسيس شركة في السعودية 2026',
  description: 'كل ما تحتاج معرفته عن تكاليف السجل التجاري وتأسيس الشركات في السعودية. يشرح رسوم وزارة التجارة، رسوم الغرفة التجارية، الرخصة البلدية، رخصة الاستثمار للأجانب، والتكاليف الخفية مع أمثلة واقعية.',
}

const schemaUr = {
  ...articleSchemaEn,
  headline: 'سعودی عرب میں کمرشل رجسٹریشن لاگت اور کاروبار شروع کرنے کا مکمل گائیڈ 2026',
  description: 'سعودی عرب میں کمرشل رجسٹریشن کے اخراجات اور کاروبار شروع کرنے کے بارے میں مکمل معلومات۔ وزارت تجارت کی فیس، چیمبر آف کامرس، بلدیہ لائسنس، غیر ملکیوں کے لیے MISA لائسنس، اور حقیقی مثالوں کے ساتھ اخراجات۔',
}

const schemaTl = {
  ...articleSchemaEn,
  headline: 'Kumpletong Gabay sa CR Cost at Pagtatatag ng Negosyo sa Saudi Arabia 2026',
  description: 'Lahat ng kailangan mong malaman tungkol sa Commercial Registration costs at pagtatatag ng kumpanya sa Saudi Arabia. Ministry of Commerce fees, Chamber of Commerce, municipal license, MISA license para sa expats, at mga halimbawa ng gastos.',
}

const schemaBn = {
  ...articleSchemaEn,
  headline: 'সৌদি আরবে বাণিজ্যিক নিবন্ধন খরচ ও ব্যবসা শুরু করার সম্পূর্ণ গাইড 2026',
  description: 'সৌদি আরবে বাণিজ্যিক নিবন্ধন খরচ ও কোম্পানি প্রতিষ্ঠা সম্পর্কে আপনার যা কিছু জানা দরকার। বাণিজ্য মন্ত্রণালয়ের ফি, চেম্বার অফ কমার্স, পৌর লাইসেন্স, বিদেশীদের জন্য MISA লাইসেন্স এবং বাস্তব উদাহরণ।',
}

const faqsEn = [
  { question: 'How much does a Commercial Registration (CR) cost in Saudi Arabia in 2026?', answer: 'The total cost for a Commercial Registration in Saudi Arabia ranges from approximately 5,000 to 25,000 SAR for the first year, depending on the business type, location, and entity structure. A sole proprietorship (Muassasah) in Riyadh typically costs around 5,000-8,000 SAR including MOC fees, Chamber of Commerce, and municipal license. An LLC with two partners can cost 12,000-25,000 SAR due to higher legal drafting and notary fees.' },
  { question: 'What is the difference between a Watheq freelance certificate and a Commercial Registration?', answer: 'A Watheq certificate allows individuals to offer freelance services without forming a full company. It costs 1,000-2,000 SAR annually and does not require a physical office. A Commercial Registration (CR) is for businesses that sell products, employ staff, operate from a commercial premises, or have multiple owners. CR costs are significantly higher but allow for a broader scope of business activities including hiring employees and signing larger corporate contracts.' },
  { question: 'Can expats own 100% of a business in Saudi Arabia in 2026?', answer: 'Yes, under Vision 2030 reforms, expats can own 100% of businesses in most sectors without a Saudi partner. The key requirement is obtaining a license from the Ministry of Investment of Saudi Arabia (MISA), formerly known as SAGIA. The MISA license costs approximately 24,000-32,000 SAR for the initial application plus annual renewal of around 8,000-12,000 SAR. Some restricted sectors (oil & gas, military, real estate in Mecca/Medina) still require Saudi partnership, but the list of fully investable sectors has expanded dramatically.' },
  { question: 'What are the Chamber of Commerce fees for a CR in Saudi Arabia?', answer: 'Chamber of Commerce fees vary by city: Riyadh Chamber charges approximately 1,200-2,500 SAR for initial registration depending on the CR type and capital. Jeddah Chamber is similar at 1,000-2,000 SAR. Dammam/Eastern Province Chamber ranges from 800-1,500 SAR. These fees are mandatory and must be paid annually for CR renewal. The Chamber provides services including certificate attestation, commercial dispute resolution, and exporter certification.' },
  { question: 'What is the cheapest way to start a business in Saudi Arabia?', answer: 'The cheapest way is through a sole proprietorship (Muassasah) owned by a Saudi national or a foreigner with a valid Iqama. Expect total first-year costs of 5,000-8,000 SAR including: MOC name reservation (200-500 SAR), MOC CR issuance (1,500-2,500 SAR), Chamber of Commerce (1,000-2,000 SAR), Municipal License (1,000-2,000 SAR), and professional typing/PRO services (500-1,000 SAR). Using our CR Cost Estimator at /cr-cost-estimator can help you budget accurately.' },
  { question: 'What hidden costs should I expect when starting a business in Saudi Arabia?', answer: 'Common hidden costs include: (1) Professional/PRO service fees for document processing (500-2,000 SAR), (2) Notary public fees for attesting the Articles of Association (300-800 SAR), (3) Office rent and Ijarah registration (15,000-60,000+ SAR annually depending on location), (4) ZATCA VAT registration (free but requires accounting setup), (5) GOSI registration for Saudi employees (18% of salary for non-Saudi employer), (6) Commercial insurance (2,000-5,000 SAR annually), and (7) CR renewal fees (similar to initial fees each year).' },
  { question: 'How long does it take to get a Commercial Registration in Saudi Arabia?', answer: 'The process typically takes 2-4 weeks if all documents are in order. Name reservation (24-48 hours), MOC CR issuance (3-5 business days after document submission), Chamber of Commerce registration (1-2 days), Municipal License (3-7 days), and MISA license for foreign investors (2-4 weeks). Using a PRO agency can significantly speed up the process but adds 1,000-3,000 SAR to the total cost.' },
  { question: 'Do I need a physical office to get a CR in Saudi Arabia?', answer: 'For most CR types, yes. The Municipal License (Baladiya) requires proof of a physical commercial premises with an Ijarah contract (rental agreement) certified by the Ejar platform. However, some service-based activities (IT consulting, web development, design) may qualify for home office licenses in certain municipalities. Coworking spaces and virtual offices that provide Ejar-certified contracts have become increasingly popular and cost 15,000-30,000 SAR annually as a more affordable alternative to standalone office rent.' },
  { question: 'What is a MISA license and who needs it?', answer: 'A MISA (Ministry of Investment of Saudi Arabia) license is required for foreign investors who want to own 100% of a business in Saudi Arabia without a Saudi partner. The cost is approximately 24,000-32,000 SAR for initial issuance plus 8,000-12,000 SAR annually for renewal. MISA has classified business activities into three categories: those fully open to foreign investment (most sectors), those requiring Saudi partnership (some strategic sectors), and those restricted exclusively to Saudi nationals (only a few remain in 2026).' },
  { question: 'What are the annual renewal costs for a CR in Saudi Arabia?', answer: 'Annual renewal costs are similar to initial costs: MOC CR renewal (800-1,500 SAR), Chamber of Commerce annual fee (800-2,500 SAR depending on city), Municipal License renewal (800-1,500 SAR), and professional typing fees (200-500 SAR). Total renewal cost is typically 3,000-6,000 SAR per year, excluding office rent, employee costs, and insurance. Renewal is processed through the MOC electronic portal and must be completed before the CR expiration date to avoid late penalties of 100 SAR per day.' },
]

const faqsAr = [
  { question: 'كم تكلفة السجل التجاري في السعودية 2026؟', answer: 'تتراوح التكلفة الإجمالية للسجل التجاري في السعودية من 5,000 إلى 25,000 ريال للسنة الأولى، حسب نوع النشاط والموقع والهيكل القانوني. المؤسسة الفردية في الرياض تكلف حوالي 5,000-8,000 ريال شاملة رسوم وزارة التجارة والغرفة التجارية والرخصة البلدية. الشركة ذات المسؤولية المحدودة قد تكلف 12,000-25,000 ريال بسبب رسوم الصياغة القانونية والتوثيق.' },
  { question: 'ما الفرق بين شهادة وثق للعمل الحر والسجل التجاري؟', answer: 'شهادة وثق تسمح للأفراد بتقديم خدمات العمل الحر دون تأسيس شركة كاملة. تكلف 1,000-2,000 ريال سنوياً ولا تتطلب مكتباً فعلياً. السجل التجاري مخصص للأنشطة التجارية التي تبيع منتجات، توظف موظفين، أو تعمل من مقر تجاري. تكاليف السجل التجاري أعلى بكثير لكنه يسمح بنطاق أوسع من الأنشطة.' },
  { question: 'هل يمكن للأجانب تملك 100% من شركة في السعودية 2026؟', answer: 'نعم، تحت إصلاحات رؤية 2030، يمكن للأجانب تملك 100% من الشركات في معظم القطاعات بدون شريك سعودي. الشرط الأساسي هو الحصول على ترخيص من وزارة الاستثمار السعودية (MISA). تكلفة الترخيص حوالي 24,000-32,000 ريال للتقديم الأولي و8,000-12,000 ريال للتجديد السنوي.' },
  { question: 'كم رسوم الغرفة التجارية للسجل التجاري؟', answer: 'تختلف رسوم الغرفة التجارية حسب المدينة: غرفة الرياض حوالي 1,200-2,500 ريال، غرفة جدة 1,000-2,000 ريال، غرفة المنطقة الشرقية 800-1,500 ريال. هذه الرسوم إلزامية وتدفع سنوياً لتجديد السجل التجاري.' },
  { question: 'ما هي أقل تكلفة لبدء عمل تجاري في السعودية؟', answer: 'أقل تكلفة هي عبر مؤسسة فردية يملكها سعودي أو أجنبي بإقامة سارية. التكاليف المتوقعة للسنة الأولى 5,000-8,000 ريال تشمل حجز الاسم التجاري (200-500 ريال)، إصدار السجل التجاري (1,500-2,500 ريال)، رسوم الغرفة التجارية (1,000-2,000 ريال)، الرخصة البلدية (1,000-2,000 ريال). استخدم مقدر تكاليف السجل التجاري على /cr-cost-estimator لوضع ميزانية دقيقة.' },
  { question: 'ما التكاليف الخفية عند تأسيس شركة في السعودية؟', answer: 'التكاليف الخفية تشمل: رسوم الصياغة القانونية (300-800 ريال)، مكتب المحاماة أو العلاقات الحكومية (500-2,000 ريال)، إيجار المكتب وتسجيل إيجار (15,000-60,000+ ريال سنوياً)، التسجيل في ضريبة القيمة المضافة (مجاني لكن يتطلب محاسب)، التأمين التجاري (2,000-5,000 ريال سنوياً)، ورسوم تجديد السجل التجاري.' },
  { question: 'كم من الوقت يستغرق الحصول على السجل التجاري؟', answer: 'تستغرق العملية 2-4 أسابيع إذا كانت المستندات مكتملة. حجز الاسم التجاري (24-48 ساعة)، إصدار السجل التجاري (3-5 أيام عمل)، التسجيل في الغرفة التجارية (1-2 يوم)، الرخصة البلدية (3-7 أيام)، وترخيص الاستثمار للأجانب (2-4 أسابيع).' },
  { question: 'هل أحتاج إلى مكتب فعلي للحصول على سجل تجاري؟', answer: 'نعم لمعظم الأنشطة التجارية. الرخصة البلدية تتطلب إثبات مقر تجاري بعقد إيجار موثق في منصة إيجار. مساحات العمل المشترك التي توفر عقود إيجار موثقة أصبحت خياراً شائعاً بتكلفة 15,000-30,000 ريال سنوياً.' },
  { question: 'ما هي تكاليف تجديد السجل التجاري السنوية؟', answer: 'تكاليف التجديد السنوية مشابهة للتكاليف الأولية: تجديد السجل التجاري (800-1,500 ريال)، رسوم الغرفة التجارية (800-2,500 ريال)، تجديد الرخصة البلدية (800-1,500 ريال). الإجمالي 3,000-6,000 ريال سنوياً باستثناء الإيجار وتكاليف الموظفين.' },
  { question: 'ما هو ترخيص وزارة الاستثمار (MISA) ومن يحتاجه؟', answer: 'ترخيص وزارة الاستثمار مطلوب للمستثمرين الأجانب الذين يريدون تملك 100% من شركة في السعودية بدون شريك سعودي. التكلفة حوالي 24,000-32,000 ريال للإصدار الأولي و8,000-12,000 ريال للتجديد السنوي.' },
]

const faqsUr = [
  { question: 'سعودی عرب میں کمرشل رجسٹریشن کی لاگت کتنی ہے 2026؟', answer: 'سعودی عرب میں کمرشل رجسٹریشن کی کل لاگت تقریباً 5,000 سے 25,000 SAR تک پہلے سال میں ہوتی ہے۔ ریاض میں سول پروپرائیٹرشپ (مؤسسہ) کی لاگت 5,000-8,000 SAR ہوتی ہے جس میں وزارت تجارت، چیمبر آف کامرس اور بلدیہ لائسنس کی فیس شامل ہے۔' },
  { question: 'واتق فری لانس سرٹیفکیٹ اور کمرشل رجسٹریشن میں کیا فرق ہے؟', answer: 'واتق سرٹیفکیٹ افراد کو بغیر کمپنی بنائے فری لانس سروسز دینے کی اجازت دیتا ہے۔ اس کی لاگت 1,000-2,000 SAR سالانہ ہے۔ کمرشل رجسٹریشن ان کاروباروں کے لیے ہے جو مصنوعات فروخت کرتے ہیں، ملازمین رکھتے ہیں یا تجارتی مقام سے کام کرتے ہیں۔' },
  { question: 'کیا غیر ملکی 2026 میں سعودی عرب میں 100% کاروبار مالک ہو سکتے ہیں؟', answer: 'ہاں، وژن 2030 اصلاحات کے تحت غیر ملکی زیادہ تر شعبوں میں سعودی پارٹنر کے بغیر 100% کاروبار مالک ہو سکتے ہیں۔ اس کے لیے وزارت سرمایہ کاری (MISA) سے لائسنس درکار ہے جس کی لاگت 24,000-32,000 SAR ابتدائی اور 8,000-12,000 SAR سالانہ تجدید ہے۔' },
  { question: 'سعودی عرب میں چیمبر آف کامرس کی فیس کتنی ہے؟', answer: 'چیمبر آف کامرس کی فیس شہر کے مطابق مختلف ہوتی ہے: ریاض چیمبر 1,200-2,500 SAR، جدہ چیمبر 1,000-2,000 SAR، دمام/مشرقی صوبہ 800-1,500 SAR۔ یہ فیس لازمی ہے اور سالانہ ادا کرنی ہوتی ہے۔' },
  { question: 'سعودی عرب میں کاروبار شروع کرنے کا سب سے سستا طریقہ کیا ہے؟', answer: 'سب سے سستا طریقہ سعودی شہری یا درست اقامہ والے غیر ملکی کی ملکیت میں سول پروپرائیٹرشپ (مؤسسہ) ہے۔ پہلے سال کے اخراجات 5,000-8,000 SAR ہیں۔ /cr-cost-estimator پر CR Cost Estimator استعمال کریں۔' },
  { question: 'مخفی اخراجات کیا ہیں جو کاروبار شروع کرتے وقت توقع کریں؟', answer: 'عام مخفی اخراجات میں شامل ہیں: قانونی دستاویزات کی تیاری (300-800 SAR)، PRO سروس (500-2,000 SAR)، دفتر کرایہ (15,000-60,000+ SAR)، VAT رجسٹریشن (مفت لیکن اکاؤنٹنگ درکار)، تجارتی انشورنس (2,000-5,000 SAR)، اور CR تجدید فیس۔' },
  { question: 'سعودی عرب میں کمرشل رجسٹریشن حاصل کرنے میں کتنا وقت لگتا ہے؟', answer: 'عام طور پر 2-4 ہفتے لگتے ہیں اگر تمام دستاویزات مکمل ہوں۔ نام کا تحفظ (24-48 گھنٹے)، CR اجراء (3-5 کاروباری دن)، چیمبر رجسٹریشن (1-2 دن)، بلدیہ لائسنس (3-7 دن)، MISA لائسنس (2-4 ہفتے)۔' },
  { question: 'کیا مجھے CR حاصل کرنے کے لیے فزیکل آفس چاہیے؟', answer: 'جی ہاں زیادہ تر CR قسموں کے لیے۔ بلدیہ لائسنس کے لیے ایجار پلیٹ فارم پر تصدیق شدہ کرایہ کا معاہدہ درکار ہے۔ کو-ورکنگ اسپیس ایک سستا متبادل ہیں جس کی سالانہ لاگت 15,000-30,000 SAR ہے۔' },
  { question: 'CR کی سالانہ تجدید کے اخراجات کیا ہیں؟', answer: 'سالانہ تجدید کے اخراجات: CR تجدید (800-1,500 SAR)، چیمبر آف کامرس (800-2,500 SAR)، بلدیہ لائسنس تجدید (800-1,500 SAR)۔ کل 3,000-6,000 SAR سالانہ۔' },
  { question: 'MISA لائسنس کیا ہے اور کسے ضرورت ہے؟', answer: 'MISA لائسنس غیر ملکی سرمایہ کاروں کے لیے ضروری ہے جو سعودی پارٹنر کے بغیر 100% کاروبار مالک ہونا چاہتے ہیں۔ ابتدائی لاگت 24,000-32,000 SAR اور سالانہ تجدید 8,000-12,000 SAR ہے۔' },
]

const faqsTl = [
  { question: 'Magkano ang halaga ng Commercial Registration (CR) sa Saudi Arabia 2026?', answer: 'Ang kabuuang halaga ng CR sa Saudi Arabia ay humigit-kumulang 5,000 hanggang 25,000 SAR para sa unang taon. Ang sole proprietorship (Muassasah) sa Riyadh ay karaniwang nagkakahalaga ng 5,000-8,000 SAR kasama ang MOC fees, Chamber of Commerce, at municipal license.' },
  { question: 'Ano ang pagkakaiba ng Watheq freelance certificate at Commercial Registration?', answer: 'Ang Watheq certificate ay nagpapahintulot sa mga indibidwal na mag-alok ng freelance services nang walang kumpanya. Ito ay nagkakahalaga ng 1,000-2,000 SAR taun-taon. Ang CR ay para sa mga negosyong nagbebenta ng produkto, kumukuha ng empleyado, o nagpapatakbo mula sa komersyal na lugar.' },
  { question: 'Maaari bang magmay-ari ng 100% ng negosyo ang mga expat sa Saudi Arabia 2026?', answer: 'Oo, sa ilalim ng Vision 2030 reforms, ang mga expat ay maaaring magmay-ari ng 100% ng negosyo sa karamihan ng sektor nang walang Saudi partner. Ang pangunahing kinakailangan ay kumuha ng lisensya mula sa Ministry of Investment (MISA) na nagkakahalaga ng 24,000-32,000 SAR para sa initial application.'},
  { question: 'Magkano ang Chamber of Commerce fees para sa CR?', answer: 'Ang Chamber of Commerce fees ay nag-iiba ayon sa lungsod: Riyadh Chamber 1,200-2,500 SAR, Jeddah Chamber 1,000-2,000 SAR, Dammam/Eastern Province 800-1,500 SAR. Ang mga ito ay mandatory at binabayaran taun-taon para sa CR renewal.' },
  { question: 'Ano ang pinakamurang paraan para magsimula ng negosyo sa Saudi Arabia?', answer: 'Ang pinakamurang paraan ay sa pamamagitan ng sole proprietorship (Muassasah). Asahan ang unang taong gastos na 5,000-8,000 SAR. Gamitin ang aming CR Cost Estimator sa /cr-cost-estimator para sa tamang budget.' },
  { question: 'Ano ang mga hidden costs sa pagtatatag ng negosyo?', answer: 'Kabilang sa mga hidden costs: legal document drafting (300-800 SAR), PRO services (500-2,000 SAR), office rent (15,000-60,000+ SAR), VAT registration (libre pero may accounting cost), commercial insurance (2,000-5,000 SAR), at CR renewal fees.' },
  { question: 'Gaano katagal bago makakuha ng CR?', answer: 'Karaniwang 2-4 na linggo kung kumpleto ang dokumento. Name reservation (24-48 oras), CR issuance (3-5 araw), Chamber registration (1-2 araw), Municipal License (3-7 araw), MISA license (2-4 linggo).' },
  { question: 'Kailangan ba ng physical office para makakuha ng CR?', answer: 'Oo para sa karamihan ng CR types. Ang Municipal License ay nangangailangan ng Ijarah contract na certified sa Ejar platform. Ang co-working spaces ay nagkakahalaga ng 15,000-30,000 SAR taun-taon bilang mas murang alternatibo.' },
  { question: 'Ano ang taunang renewal costs para sa CR?', answer: 'CR renewal (800-1,500 SAR), Chamber of Commerce (800-2,500 SAR), Municipal License renewal (800-1,500 SAR). Kabuuang 3,000-6,000 SAR taun-taon.' },
  { question: 'Ano ang MISA license at sino ang nangangailangan nito?', answer: 'Ang MISA license ay kinakailangan para sa foreign investors na gustong magmay-ari ng 100% ng negosyo. Gastos ay 24,000-32,000 SAR para sa initial at 8,000-12,000 SAR taun-taon para sa renewal.' },
]

const faqsBn = [
  { question: 'সৌদি আরবে বাণিজ্যিক নিবন্ধনের (CR) খরচ কত ২০২৬ সালে?', answer: 'সৌদি আরবে CR-এর মোট খরচ প্রথম বছরে প্রায় ৫,০০০ থেকে ২৫,০০০ SAR পর্যন্ত হয়। রিয়াদে একক মালিকানা (মুয়াসসাসা) সাধারণত ৫,০০০-৮,০০০ SAR খরচ হয় যার মধ্যে MOC ফি, চেম্বার অফ কমার্স এবং পৌর লাইসেন্স অন্তর্ভুক্ত।' },
  { question: 'ওয়াথেক ফ্রিল্যান্স সার্টিফিকেট এবং বাণিজ্যিক নিবন্ধনের মধ্যে পার্থক্য কী?', answer: 'ওয়াথেক সার্টিফিকেট ব্যক্তিদের কোম্পানি না করে ফ্রিল্যান্স সেবা দেওয়ার অনুমতি দেয়। এর খরচ ১,০০০-২,০০০ SAR বার্ষিক। CR পণ্য বিক্রয়, কর্মচারী নিয়োগ বা বাণিজ্যিক স্থান থেকে পরিচালিত ব্যবসার জন্য।' },
  { question: 'বিদেশীরা কি ২০২৬ সালে সৌদি আরবে ১০০% ব্যবসার মালিক হতে পারে?', answer: 'হ্যাঁ, ভিশন ২০৩০ সংস্কারের অধীনে বিদেশীরা অধিকাংশ খাতে সৌদি অংশীদার ছাড়া ১০০% ব্যবসার মালিক হতে পারে। এর জন্য বিনিয়োগ মন্ত্রণালয়ের (MISA) লাইসেন্স প্রয়োজন যার খরচ ২৪,০০০-৩২,০০০ SAR প্রাথমিক এবং ৮,০০০-১২,০০০ SAR বার্ষিক নবায়ন।' },
  { question: 'চেম্বার অফ কমার্স ফি কত?', answer: 'রিয়াদ চেম্বার ১,২০০-২,৫০০ SAR, জেদ্দা চেম্বার ১,০০০-২,০০০ SAR, দাম্মাম/পূর্বাঞ্চল ৮০০-১,৫০০ SAR। এই ফি বাধ্যতামূলক এবং বার্ষিক পরিশোধ করতে হয়।' },
  { question: 'সৌদি আরবে ব্যবসা শুরুর সবচেয়ে সস্তা উপায় কী?', answer: 'সবচেয়ে সস্তা উপায় একক মালিকানা (মুয়াসসাসা)। প্রথম বছরের খরচ ৫,০০০-৮,০০০ SAR। /cr-cost-estimator-এ আমাদের CR Cost Estimator ব্যবহার করুন।' },
  { question: 'লুকানো খরচগুলি কী কী?', answer: 'সাধারণ লুকানো খরচ: আইনি নথি প্রস্তুতি (৩০০-৮০০ SAR), PRO সেবা (৫০০-২,০০০ SAR), অফিস ভাড়া (১৫,০০০-৬০,০০০+ SAR), VAT নিবন্ধন (বিনামূল্যে কিন্তু হিসাবরক্ষণ প্রয়োজন), বাণিজ্যিক বীমা (২,০০০-৫,০০০ SAR), এবং CR নবায়ন ফি।' },
  { question: 'CR পেতে কত সময় লাগে?', answer: 'সাধারণত ২-৪ সপ্তাহ যদি সব ডকুমেন্ট সম্পূর্ণ থাকে। নাম সংরক্ষণ (২৪-৪৮ ঘন্টা), CR ইস্যু (৩-৫ কার্যদিবস), চেম্বার নিবন্ধন (১-২ দিন), পৌর লাইসেন্স (৩-৭ দিন), MISA লাইসেন্স (২-৪ সপ্তাহ)।' },
  { question: 'CR পেতে কি ফিজিক্যাল অফিস প্রয়োজন?', answer: 'হ্যাঁ অধিকাংশ CR-র জন্য। পৌর লাইসেন্সের জন্য ইজার প্ল্যাটফর্মে প্রত্যয়িত ভাড়া চুক্তি প্রয়োজন। কো-ওয়ার্কিং স্পেসের বার্ষিক খরচ ১৫,০০০-৩০,০০০ SAR।' },
  { question: 'CR-র বার্ষিক নবায়ন খরচ কত?', answer: 'CR নবায়ন (৮০০-১,৫০০ SAR), চেম্বার অফ কমার্স (৮০০-২,৫০০ SAR), পৌর লাইসেন্স নবায়ন (৮০০-১,৫০০ SAR)। মোট ৩,০০০-৬,০০০ SAR বার্ষিক।' },
  { question: 'MISA লাইসেন্স কী এবং কার এটি প্রয়োজন?', answer: 'MISA লাইসেন্স বিদেশি বিনিয়োগকারীদের জন্য প্রয়োজন যারা সৌদি অংশীদার ছাড়া ১০০% ব্যবসার মালিক হতে চান। প্রাথমিক খরচ ২৪,০০০-৩২,০০০ SAR এবং বার্ষিক নবায়ন ৮,০০০-১২,০০০ SAR।' },
]

function EnContent() {
  return (
    <article className="prose prose-invert max-w-none prose-headings:text-desert-primary prose-a:text-desert-primary prose-strong:text-white prose-li:text-gray-300">
      <h1>The Complete Guide to Commercial Registration (CR) Costs &amp; Starting a Business in Saudi Arabia 2026</h1>

      <div className="not-prose glass p-6 rounded-xl mb-8">
        <p className="text-gray-300 text-lg leading-relaxed">
          Saudi Arabia is experiencing an unprecedented business boom under Vision 2030. Economic reforms, regulatory simplification, and a push toward private sector growth have made the kingdom one of the most attractive places in the Middle East to start a company. But for new entrepreneurs — both Saudi and expat — the maze of government fees, licenses, and hidden costs can be overwhelming and confusing.
        </p>
        <p className="text-gray-300 text-lg leading-relaxed mt-4">
          This guide provides a <strong>complete, transparent breakdown of every cost associated with getting a Commercial Registration (CR) in Saudi Arabia in 2026</strong>. We cover the differences between business entity types, MOC fees, Chamber of Commerce costs, municipal license charges, MISA license fees for expat investors, hidden recurring costs, and real-life cost examples. By the end, you will know exactly how much capital you need to launch your business.
        </p>
        <p className="text-gray-300 text-lg leading-relaxed mt-4">
          Use our free{' '}
          <Link href="/cr-cost-estimator" className="text-desert-primary font-bold underline">
            CR Cost Estimator
          </Link>{' '}
          to get a personalized startup budget based on your city, business activity, and entity type.
        </p>
      </div>

      <h2>What is a Commercial Registration (CR / Sijil Tijari)?</h2>
      <p>
        A Commercial Registration (CR), known in Arabic as Sijil Tijari (السجل التجاري), is the official license issued by the Saudi Ministry of Commerce (MOC) that authorizes an individual or entity to conduct business activities in the Kingdom of Saudi Arabia. It is the foundational legal document for any business — without a CR, you cannot legally sell products, rent commercial premises, hire employees, import goods, or sign contracts with other businesses.
      </p>
      <p>
        The CR contains essential information about your business including the legal entity type (sole proprietorship, LLC, etc.), the registered business name, the scope of activities (from a predefined MOC activity code list), the registered capital amount, the owners and their share percentages, and the registered business address. Every CR must be renewed annually through the MOC electronic portal.
      </p>

      <h3>Freelance Certificate (Watheq) vs. Commercial Registration</h3>
      <p>
        Many new entrepreneurs confuse the Watheq freelance certificate with a full CR. The Watheq certificate is designed for individuals who want to offer professional services (consulting, design, writing, IT) without the overhead of a full company. It costs 1,000-2,000 SAR annually and does not require a physical office. A full CR is required for businesses that sell physical products, maintain inventory, operate from a commercial premises, hire multiple employees, or engage in activities not covered by the freelance framework.
      </p>

      <h2>Types of Business Entities and Their Costs in 2026</h2>
      <p>Choosing the right legal structure is one of the most important decisions you will make. Each entity type has different cost implications, liability protections, and regulatory requirements.</p>

      <div className="not-prose glass p-5 rounded-xl mb-6">
        <h3 className="text-desert-primary font-semibold mb-3">Sole Proprietorship (Muassasah / مؤسسة)</h3>
        <p className="text-gray-300 text-sm mb-2">The cheapest and fastest way to start a business. A sole proprietorship is owned by a single individual who bears unlimited liability for the business debts. Best for small traders, consultants, and service providers. First-year cost: approximately 5,000-8,000 SAR.</p>
        <ul className="space-y-1 text-gray-400 text-sm">
          <li><CheckCircle className="h-3 w-3 text-desert-primary inline mr-1" /> No minimum capital requirement</li>
          <li><CheckCircle className="h-3 w-3 text-desert-primary inline mr-1" /> Quickest registration process (2-3 weeks)</li>
          <li><CheckCircle className="h-3 w-3 text-desert-primary inline mr-1" /> Available to Saudis and expats with valid Iqama</li>
          <li><CheckCircle className="h-3 w-3 text-desert-primary inline mr-1" /> Unlimited personal liability for business debts</li>
        </ul>
      </div>

      <div className="not-prose glass p-5 rounded-xl mb-6">
        <h3 className="text-desert-primary font-semibold mb-3">Limited Liability Company (LLC / شركة ذات مسؤولية محدودة)</h3>
        <p className="text-gray-300 text-sm mb-2">The most popular business structure for SMEs. An LLC requires at least two shareholders (except for single-member LLC which is now permitted) and limits each owner's liability to their share of capital. First-year cost: approximately 12,000-25,000 SAR.</p>
        <ul className="space-y-1 text-gray-400 text-sm">
          <li><CheckCircle className="h-3 w-3 text-desert-primary inline mr-1" /> Minimum capital varies by activity (often 50,000-500,000 SAR)</li>
          <li><CheckCircle className="h-3 w-3 text-desert-primary inline mr-1" /> Liability limited to share capital</li>
          <li><CheckCircle className="h-3 w-3 text-desert-primary inline mr-1" /> Requires Articles of Association drafted by a lawyer</li>
          <li><CheckCircle className="h-3 w-3 text-desert-primary inline mr-1" /> More complex accounting and audit requirements</li>
        </ul>
      </div>

      <div className="not-prose glass p-5 rounded-xl mb-6">
        <h3 className="text-desert-primary font-semibold mb-3">Joint Stock Company (JSC / شركة مساهمة)</h3>
        <p className="text-gray-300 text-sm mb-2">For large enterprises planning to raise capital from the public or list on the Saudi stock market (Tadawul). JSCs have the most complex regulatory requirements and highest setup costs. First-year cost: approximately 50,000-200,000+ SAR depending on complexity.</p>
        <ul className="space-y-1 text-gray-400 text-sm">
          <li><CheckCircle className="h-3 w-3 text-desert-primary inline mr-1" /> Minimum capital of 5,000,000 SAR (non-listed) or 30,000,000 SAR (listed)</li>
          <li><CheckCircle className="h-3 w-3 text-desert-primary inline mr-1" /> Requires MOC approval, CMA approval for listed companies</li>
          <li><CheckCircle className="h-3 w-3 text-desert-primary inline mr-1" /> Highest legal and compliance costs</li>
        </ul>
      </div>

      <h2>Detailed Breakdown of CR Costs in Saudi Arabia</h2>

      <div className="not-prose glass p-5 rounded-xl mb-6">
        <table className="w-full text-sm text-gray-300">
          <thead>
            <tr className="text-white border-b border-gray-700">
              <th className="text-left py-2">Cost Item</th>
              <th className="text-left py-2">Amount (SAR)</th>
              <th className="text-left py-2">Notes</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-gray-700/50">
              <td className="py-3 font-medium">MOC Name Reservation</td>
              <td className="py-3">200 - 500</td>
              <td className="py-3 text-gray-400">One-time fee to reserve your trade name</td>
            </tr>
            <tr className="border-b border-gray-700/50">
              <td className="py-3 font-medium">MOC CR Issuance</td>
              <td className="py-3">1,500 - 2,500</td>
              <td className="py-3 text-gray-400">Main CR fee, varies by entity type</td>
            </tr>
            <tr className="border-b border-gray-700/50">
              <td className="py-3 font-medium">Chamber of Commerce</td>
              <td className="py-3">800 - 2,500</td>
              <td className="py-3 text-gray-400">Varies by city: Riyadh highest, Dammam lowest</td>
            </tr>
            <tr className="border-b border-gray-700/50">
              <td className="py-3 font-medium">Municipal License (Baladiya)</td>
              <td className="py-3">1,000 - 2,000</td>
              <td className="py-3 text-gray-400">Annual fee, depends on activity and area</td>
            </tr>
            <tr className="border-b border-gray-700/50">
              <td className="py-3 font-medium">Notary / Lawyer (AoA Drafting)</td>
              <td className="py-3">300 - 800</td>
              <td className="py-3 text-gray-400">Articles of Association attestation</td>
            </tr>
            <tr className="border-b border-gray-700/50">
              <td className="py-3 font-medium">PRO / Typing Services</td>
              <td className="py-3">500 - 2,000</td>
              <td className="py-3 text-gray-400">Optional but recommended for fast processing</td>
            </tr>
            <tr className="border-b border-gray-700/50">
              <td className="py-3 font-medium">MISA License (Foreigners)</td>
              <td className="py-3">24,000 - 32,000</td>
              <td className="py-3 text-gray-400">Only required for 100% foreign-owned companies</td>
            </tr>
            <tr className="border-b border-gray-700/50">
              <td className="py-3 font-medium">Commercial Insurance</td>
              <td className="py-3">2,000 - 5,000</td>
              <td className="py-3 text-gray-400">Annual, required for most business activities</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2>Rules for Foreign Ownership (MISA License) in 2026</h2>
      <p>
        One of the most transformative Vision 2030 reforms has been the liberalization of foreign investment rules. As of 2026, expats can own 100% of businesses in the vast majority of sectors without a Saudi partner. The Ministry of Investment of Saudi Arabia (MISA), formerly known as SAGIA, is the gateway for foreign investors.
      </p>

      <div className="not-prose glass p-5 rounded-xl mb-6">
        <h3 className="text-white font-semibold mb-3">MISA License Costs</h3>
        <ul className="space-y-2 text-gray-400 text-sm">
          <li><strong className="text-white">Initial application fee:</strong> 24,000 - 32,000 SAR (depending on business classification)</li>
          <li><strong className="text-white">Annual renewal fee:</strong> 8,000 - 12,000 SAR</li>
          <li><strong className="text-white">Time to approval:</strong> 2-4 weeks for standard activities</li>
          <li><strong className="text-white">Activities covered:</strong> IT, manufacturing, logistics, healthcare, education, hospitality (Most sectors are fully open in 2026)</li>
          <li><strong className="text-white">Activities still restricted:</strong> Oil & gas exploration, military equipment, real estate in Mecca and Medina</li>
        </ul>
      </div>

      <h2>Step-by-Step Process to Get a CR</h2>

      <div className="not-prose glass p-5 rounded-xl mb-6">
        <ol className="space-y-3 text-gray-300">
          <li className="flex items-start gap-3">
            <span className="bg-desert-primary text-white font-bold rounded-full w-6 h-6 flex items-center justify-center shrink-0 mt-0.5 text-xs">1</span>
            <div>
              <strong className="text-white">Reserve Your Trade Name</strong>
              <p className="text-sm text-gray-400">Log in to the MOC electronic portal (moc.gov.sa) and search for an available trade name. The name must comply with MOC naming guidelines — no religious references, no misleading terms. Cost: 200-500 SAR. Processing time: 24-48 hours.</p>
            </div>
          </li>
          <li className="flex items-start gap-3">
            <span className="bg-desert-primary text-white font-bold rounded-full w-6 h-6 flex items-center justify-center shrink-0 mt-0.5 text-xs">2</span>
            <div>
              <strong className="text-white">Draft the Articles of Association (AoA)</strong>
              <p className="text-sm text-gray-400">For LLCs and JSCs, the AoA must be drafted by a licensed lawyer and notarized at a notary public. The AoA specifies the company name, objectives, capital, shareholder details, management structure, and profit distribution rules. Cost: 300-800 SAR plus notary fees.</p>
            </div>
          </li>
          <li className="flex items-start gap-3">
            <span className="bg-desert-primary text-white font-bold rounded-full w-6 h-6 flex items-center justify-center shrink-0 mt-0.5 text-xs">3</span>
            <div>
              <strong className="text-white">Submit CR Application to MOC</strong>
              <p className="text-sm text-gray-400">Upload the required documents (AoA, ID copies, lease contract if applicable) through the MOC portal. Pay the CR issuance fee. Processing time: 3-5 business days.</p>
            </div>
          </li>
          <li className="flex items-start gap-3">
            <span className="bg-desert-primary text-white font-bold rounded-full w-6 h-6 flex items-center justify-center shrink-0 mt-0.5 text-xs">4</span>
            <div>
              <strong className="text-white">Register with the Chamber of Commerce</strong>
              <p className="text-sm text-gray-400">Visit or register online with your local Chamber of Commerce. Pay the annual membership fee. The Chamber provides certificate attestation services and commercial dispute resolution. Processing time: 1-2 days.</p>
            </div>
          </li>
          <li className="flex items-start gap-3">
            <span className="bg-desert-primary text-white font-bold rounded-full w-6 h-6 flex items-center justify-center shrink-0 mt-0.5 text-xs">5</span>
            <div>
              <strong className="text-white">Obtain Municipal License (Baladiya)</strong>
              <p className="text-sm text-gray-400">Submit proof of your commercial premises through the Baladiya portal. The lease contract must be registered on the Ejar platform. The municipal license verifies that your premises comply with zoning, safety, and health regulations. Cost: 1,000-2,000 SAR. Processing time: 3-7 days.</p>
            </div>
          </li>
          <li className="flex items-start gap-3">
            <span className="bg-desert-primary text-white font-bold rounded-full w-6 h-6 flex items-center justify-center shrink-0 mt-0.5 text-xs">6</span>
            <div>
              <strong className="text-white">Register for Government Systems (GOSI, ZATCA, etc.)</strong>
              <p className="text-sm text-gray-400">Register your business with GOSI for employee insurance, ZATCA for VAT (if above threshold), and the Ministry of Human Resources (Qiwa) for labor compliance. These registrations are free but require ongoing compliance.</p>
            </div>
          </li>
        </ol>
      </div>

      <h2>Hidden and Recurring Costs (Crucial Section)</h2>
      <p>Many new business owners focus only on the initial setup costs and are surprised by recurring and hidden expenses. Here is what you must budget for:</p>

      <div className="not-prose glass p-5 rounded-xl mb-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
          <div className="bg-[#0A0E1A] p-3 rounded-lg">
            <h4 className="text-desert-accent font-semibold mb-1">Annual CR Renewal</h4>
            <p className="text-gray-400">Similar to initial fees: 3,000-6,000 SAR per year. Late renewal penalties are 100 SAR per day.</p>
          </div>
          <div className="bg-[#0A0E1A] p-3 rounded-lg">
            <h4 className="text-desert-accent font-semibold mb-1">Office Rent (Ijarah)</h4>
            <p className="text-gray-400">The biggest recurring cost. 15,000-60,000+ SAR annually. Must be registered on Ejar. Co-working spaces offer cheaper alternatives.</p>
          </div>
          <div className="bg-[#0A0E1A] p-3 rounded-lg">
            <h4 className="text-desert-accent font-semibold mb-1">GOSI Contributions</h4>
            <p className="text-gray-400">18% of Saudi employee salary (employer share). Must register all Saudi employees within the legally required timeframe.</p>
          </div>
          <div className="bg-[#0A0E1A] p-3 rounded-lg">
            <h4 className="text-desert-accent font-semibold mb-1">Iqama Renewals (Expat Staff)</h4>
            <p className="text-gray-400">600-900 SAR per Iqama per year, plus medical insurance (1,200-2,500 SAR per employee). Professional fees vary by job classification.</p>
          </div>
          <div className="bg-[#0A0E1A] p-3 rounded-lg">
            <h4 className="text-desert-accent font-semibold mb-1">Accounting &amp; Auditing</h4>
            <p className="text-gray-400">Yearly accounting fees: 3,000-12,000 SAR for SMEs. External audit is mandatory for LLCs and JSCs.</p>
          </div>
          <div className="bg-[#0A0E1A] p-3 rounded-lg">
            <h4 className="text-desert-accent font-semibold mb-1">Commercial Insurance</h4>
            <p className="text-gray-400">Annual premium of 2,000-5,000 SAR. Required for most business activities. Higher for construction, logistics, and manufacturing.</p>
          </div>
        </div>
      </div>

      <h2>Real-Life Cost Examples</h2>

      <div className="not-prose glass p-5 rounded-xl mb-6">
        <h3 className="text-white font-semibold mb-3">Example 1: Small IT Consultancy (Sole Proprietorship) in Riyadh</h3>
        <div className="bg-[#0A0E1A] p-4 rounded-lg text-gray-300 text-sm space-y-1.5 font-mono">
          <p>MOC Name Reservation: 300 SAR</p>
          <p>MOC CR Issuance (IT services): 1,800 SAR</p>
          <p>Riyadh Chamber of Commerce: 1,500 SAR</p>
          <p>Municipal License (home office eligible): 1,200 SAR</p>
          <p>PRO/Typing Services: 500 SAR</p>
          <p>Commercial Insurance: 2,000 SAR</p>
          <p className="text-desert-primary font-bold mt-2">Total First-Year Cost: 7,300 SAR</p>
          <p className="text-gray-500 text-xs mt-1">Annual renewal (Year 2+): ~4,500 SAR (no name reservation or typing fees)</p>
        </div>
      </div>

      <div className="not-prose glass p-5 rounded-xl mb-6">
        <h3 className="text-white font-semibold mb-3">Example 2: Retail LLC in Jeddah with 2 Saudi Partners</h3>
        <div className="bg-[#0A0E1A] p-4 rounded-lg text-gray-300 text-sm space-y-1.5 font-mono">
          <p>MOC Name Reservation: 400 SAR</p>
          <p>MOC CR Issuance (retail LLC): 2,500 SAR</p>
          <p>Jeddah Chamber of Commerce: 1,800 SAR</p>
          <p>Municipal License (commercial street): 2,000 SAR</p>
          <p>Lawyer for AoA Drafting + Notary: 1,500 SAR</p>
          <p>PRO Services: 1,000 SAR</p>
          <p>Commercial Insurance: 3,000 SAR</p>
          <p>Office Rent (small shop, annual): 25,000 SAR</p>
          <p className="text-desert-primary font-bold mt-2">Total First-Year Cost: 37,200 SAR</p>
          <p className="text-gray-500 text-xs mt-1">Annual renewal (Year 2+): ~7,000 SAR + rent and employee costs</p>
        </div>
      </div>

      <h2>How to Use the Sauditoolhub CR Cost Estimator</h2>
      <div className="not-prose glass p-6 rounded-xl mb-8">
        <div className="flex items-center gap-3 mb-4">
          <Calculator className="h-8 w-8 text-desert-primary" />
          <h3 className="text-white text-lg font-bold m-0">Sauditoolhub CR Cost Estimator</h3>
        </div>
        <p className="text-gray-300 mb-4">
          Our interactive estimator takes the guesswork out of business startup budgeting. Select your city (Riyadh, Jeddah, Dammam, or other), choose your business entity type (Sole Proprietorship, LLC, or JSC), enter your expected office space requirements, and the estimator instantly calculates a comprehensive first-year budget including all MOC, Chamber, Municipal, and optional PRO fees. It also shows your Year 2+ renewal costs so you can plan your ongoing budget.
        </p>
        <ul className="space-y-2 text-gray-400 text-sm mb-4">
          <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-desert-primary" /> Covers all 5 entity types with accurate fee schedules</li>
          <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-desert-primary" /> City-specific Chamber of Commerce fees</li>
          <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-desert-primary" /> Shows both setup and annual renewal costs</li>
          <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-desert-primary" /> Includes MISA license costs for foreign investors</li>
          <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-desert-primary" /> Free — no registration or login required</li>
        </ul>
        <Link href="/cr-cost-estimator" className="inline-flex items-center gap-2 rounded-xl bg-desert-primary px-8 py-3 text-sm font-bold text-white transition-all hover:bg-desert-primary-dim">
          <Calculator className="h-4 w-4" />
          Estimate Your CR Cost Now
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
        Starting a business in Saudi Arabia in 2026 is more accessible than ever, but the cost landscape requires careful planning. From MOC registration fees to Chamber of Commerce charges, municipal licenses, and MISA license costs for foreign investors — every element of the process has a price tag. The key to a successful launch is understanding all these costs upfront and budgeting accordingly. A sole proprietorship can be started for as little as 5,000-8,000 SAR, while a fully licensed foreign-owned LLC may require 50,000-70,000 SAR or more in first-year costs.
      </p>
      <p>
        Start planning your business budget with our{' '}
        <Link href="/cr-cost-estimator" className="text-desert-primary font-bold underline">CR Cost Estimator</Link>.
        Then explore our{' '}
        <Link href="/zatca-vat-calculator" className="text-desert-primary font-bold underline">ZATCA VAT Calculator</Link>
        {' '}for tax compliance and{' '}
        <Link href="/nitaqat-simulator" className="text-desert-primary font-bold underline">Nitaqat Simulator</Link>
        {' '}for employee planning. Visit our{' '}
        <Link href="/blog" className="text-desert-primary font-bold underline">Blog</Link>
        {' '}for more business startup and expat guides.
      </p>

      <div className="not-prose glass p-6 rounded-xl mt-8 text-center">
        <Calculator className="h-10 w-10 text-desert-primary mx-auto mb-3" />
        <h3 className="text-white text-lg font-bold mb-2">Plan Your Business Startup Budget</h3>
        <p className="text-gray-400 text-sm mb-4">Free interactive CR Cost Estimator — instant results, no signup required</p>
        <Link href="/cr-cost-estimator" className="inline-flex items-center gap-2 rounded-xl bg-desert-primary px-8 py-3 text-sm font-bold text-white transition-all hover:bg-desert-primary-dim">
          <Calculator className="h-4 w-4" />
          Estimate Your Costs Now
        </Link>
      </div>
    </article>
  )
}

function ArContent() {
  return (
    <article className="prose prose-invert max-w-none prose-headings:text-desert-primary prose-a:text-desert-primary prose-strong:text-white prose-li:text-gray-300" dir="rtl">
      <h1>الدليل الكامل لتكاليف السجل التجاري وتأسيس شركة في السعودية 2026</h1>

      <div className="not-prose glass p-6 rounded-xl mb-8">
        <p className="text-gray-300 text-lg leading-relaxed">
          تشهد السعودية طفرة غير مسبوقة في الأعمال التجارية بفضل رؤية 2030. الإصلاحات الاقتصادية، تبسيط اللوائح، والدفع نحو نمو القطاع الخاص جعلت المملكة من أكثر الأماكن جذباً لتأسيس الشركات في الشرق الأوسط. لكن لرواد الأعمال الجدد — سواء كانوا سعوديين أو وافدين — فإن متاهة الرسوم الحكومية والتراخيص والتكاليف الخفية يمكن أن تكون مربكة ومحبطة.
        </p>
        <p className="text-gray-300 text-lg leading-relaxed mt-4">
          هذا الدليل يقدم <strong>تحليلاً كاملاً وشفافاً لكل تكلفة مرتبطة بالحصول على السجل التجاري في السعودية 2026</strong>. نغطي الفروق بين أنواع الكيانات التجارية، رسوم وزارة التجارة، تكاليف الغرفة التجارية، رسوم الرخصة البلدية، رسوم ترخيص الاستثمار للأجانب، التكاليف الخفية المتكررة، وأمثلة واقعية للتكاليف.
        </p>
        <p className="text-gray-300 text-lg leading-relaxed mt-4">
          استخدم{' '}
          <Link href="/cr-cost-estimator" className="text-desert-primary font-bold underline">
            مقدر تكاليف السجل التجاري
          </Link>{' '}
          المجاني من Sauditoolhub للحصول على ميزانية تأسيس مخصصة حسب مدينتك ونشاطك التجاري ونوع الكيان.
        </p>
      </div>

      <h2>ما هو السجل التجاري؟</h2>
      <p>
        السجل التجاري هو الترخيص الرسمي الصادر عن وزارة التجارة السعودية الذي يصرح لشخص طبيعي أو اعتباري بمزاولة الأنشطة التجارية في المملكة. هو الوثيقة القانونية الأساسية لأي عمل تجاري — بدون سجل تجاري، لا يمكنك بيع المنتجات قانونياً، استئجار مقر تجاري، توظيف موظفين، استيراد بضائع، أو توقيع عقود مع شركات أخرى.
      </p>

      <h3>شهادة وثق (العمل الحر) مقابل السجل التجاري</h3>
      <p>
        كثير من رواد الأعمال الجدد يخلطون بين شهادة وثق والسجل التجاري الكامل. شهادة وثق مصممة للأفراد الذين يريدون تقديم خدمات مهنية (استشارات، تصميم، كتابة، تقنية) دون أعباء الشركة الكاملة. تكلف 1,000-2,000 ريال سنوياً ولا تتطلب مكتباً فعلياً. السجل التجاري مطلوب للأنشطة التي تبيع منتجات مادية، تحتفظ بمخزون، تعمل من مقر تجاري، توظف موظفين متعددين، أو تمارس أنشطة غير مغطاة بإطار العمل الحر.
      </p>

      <h2>أنواع الكيانات التجارية وتكاليفها 2026</h2>

      <div className="not-prose glass p-5 rounded-xl mb-6">
        <h3 className="text-desert-primary font-semibold mb-3">المؤسسة الفردية</h3>
        <p className="text-gray-300 text-sm">أرخص وأسرع طريقة لبدء عمل تجاري. مملوكة لشخص واحد يتحمل مسؤولية غير محدودة. مناسبة للتجار الصغار والمستشارين ومقدمي الخدمات. التكلفة التقديرية للسنة الأولى: 5,000-8,000 ريال.</p>
      </div>

      <div className="not-prose glass p-5 rounded-xl mb-6">
        <h3 className="text-desert-primary font-semibold mb-3">شركة ذات مسؤولية محدودة</h3>
        <p className="text-gray-300 text-sm">الهيكل الأكثر شيوعاً للشركات الصغيرة والمتوسطة. تتطلب شريكين على الأقل (باستثناء الشركة ذات العضو الواحد المسموح بها الآن). التكلفة التقديرية للسنة الأولى: 12,000-25,000 ريال.</p>
      </div>

      <div className="not-prose glass p-5 rounded-xl mb-6">
        <h3 className="text-desert-primary font-semibold mb-3">الشركة المساهمة</h3>
        <p className="text-gray-300 text-sm">للمؤسسات الكبيرة التي تخطط لجمع رأس المال من الجمهور أو الإدراج في سوق الأسهم. أعلى تكاليف تأسيس. التكلفة التقديرية للسنة الأولى: 50,000-200,000+ ريال.</p>
      </div>

      <h2>تفصيل تكاليف السجل التجاري</h2>

      <div className="not-prose glass p-5 rounded-xl mb-6">
        <div className="space-y-3 text-sm">
          <div className="flex justify-between items-center border-b border-gray-700/50 pb-2">
            <span className="font-medium text-white">حجز الاسم التجاري</span>
            <span className="text-gray-400">200 - 500 ريال</span>
          </div>
          <div className="flex justify-between items-center border-b border-gray-700/50 pb-2">
            <span className="font-medium text-white">إصدار السجل التجاري</span>
            <span className="text-gray-400">1,500 - 2,500 ريال</span>
          </div>
          <div className="flex justify-between items-center border-b border-gray-700/50 pb-2">
            <span className="font-medium text-white">الغرفة التجارية</span>
            <span className="text-gray-400">800 - 2,500 ريال</span>
          </div>
          <div className="flex justify-between items-center border-b border-gray-700/50 pb-2">
            <span className="font-medium text-white">الرخصة البلدية</span>
            <span className="text-gray-400">1,000 - 2,000 ريال</span>
          </div>
          <div className="flex justify-between items-center border-b border-gray-700/50 pb-2">
            <span className="font-medium text-white">صياغة عقد التأسيس</span>
            <span className="text-gray-400">300 - 800 ريال</span>
          </div>
          <div className="flex justify-between items-center border-b border-gray-700/50 pb-2">
            <span className="font-medium text-white">خدمات العلاقات الحكومية</span>
            <span className="text-gray-400">500 - 2,000 ريال</span>
          </div>
          <div className="flex justify-between items-center border-b border-gray-700/50 pb-2">
            <span className="font-medium text-white">ترخيص الاستثمار (للأجانب)</span>
            <span className="text-gray-400">24,000 - 32,000 ريال</span>
          </div>
          <div className="flex justify-between items-center pb-2">
            <span className="font-medium text-white">التأمين التجاري</span>
            <span className="text-gray-400">2,000 - 5,000 ريال</span>
          </div>
        </div>
      </div>

      <h2>قواعد الملكية الأجنبية (ترخيص الاستثمار) 2026</h2>
      <p>
        من أهم إصلاحات رؤية 2030 تحرير قواعد الاستثمار الأجنبي. اعتباراً من 2026، يمكن للوافدين تملك 100% من الشركات في الغالبية العظمى من القطاعات دون شريك سعودي. وزارة الاستثمار السعودية (MISA) هي بوابة المستثمرين الأجانب. تكلفة الترخيص: 24,000-32,000 ريال للتقديم الأولي و8,000-12,000 ريال للتجديد السنوي.
      </p>

      <h2>عملية الحصول على السجل التجاري خطوة بخطوة</h2>
      <div className="not-prose glass p-5 rounded-xl mb-6">
        <ol className="space-y-3 text-gray-300">
          <li className="flex items-start gap-3">
            <span className="bg-desert-primary text-white font-bold rounded-full w-6 h-6 flex items-center justify-center shrink-0 mt-0.5 text-xs">1</span>
            <div>
              <strong className="text-white">حجز الاسم التجاري</strong>
              <p className="text-sm text-gray-400">الدخول إلى بوابة وزارة التجارة الإلكترونية وحجز اسم تجاري متوفر. التكلفة: 200-500 ريال.</p>
            </div>
          </li>
          <li className="flex items-start gap-3">
            <span className="bg-desert-primary text-white font-bold rounded-full w-6 h-6 flex items-center justify-center shrink-0 mt-0.5 text-xs">2</span>
            <div>
              <strong className="text-white">صياغة عقد التأسيس</strong>
              <p className="text-sm text-gray-400">للشركات ذات المسؤولية المحدودة والمساهمة، يجب صياغة عقد التأسيس بواسطة محامٍ مرخص وتوثيقه. التكلفة: 300-800 ريال.</p>
            </div>
          </li>
          <li className="flex items-start gap-3">
            <span className="bg-desert-primary text-white font-bold rounded-full w-6 h-6 flex items-center justify-center shrink-0 mt-0.5 text-xs">3</span>
            <div>
              <strong className="text-white">تقديم طلب السجل التجاري</strong>
              <p className="text-sm text-gray-400">رفع المستندات عبر بوابة وزارة التجارة ودفع رسوم إصدار السجل التجاري. المدة: 3-5 أيام عمل.</p>
            </div>
          </li>
          <li className="flex items-start gap-3">
            <span className="bg-desert-primary text-white font-bold rounded-full w-6 h-6 flex items-center justify-center shrink-0 mt-0.5 text-xs">4</span>
            <div>
              <strong className="text-white">التسجيل في الغرفة التجارية</strong>
              <p className="text-sm text-gray-400">التسجيل في الغرفة التجارية المحلية ودفع رسوم العضوية السنوية. المدة: 1-2 يوم.</p>
            </div>
          </li>
          <li className="flex items-start gap-3">
            <span className="bg-desert-primary text-white font-bold rounded-full w-6 h-6 flex items-center justify-center shrink-0 mt-0.5 text-xs">5</span>
            <div>
              <strong className="text-white">الحصول على الرخصة البلدية</strong>
              <p className="text-sm text-gray-400">تقديم إثبات المقر التجاري عبر بوابة البلدية. يجب أن يكون عقد الإيجار مسجلاً في منصة إيجار. التكلفة: 1,000-2,000 ريال.</p>
            </div>
          </li>
          <li className="flex items-start gap-3">
            <span className="bg-desert-primary text-white font-bold rounded-full w-6 h-6 flex items-center justify-center shrink-0 mt-0.5 text-xs">6</span>
            <div>
              <strong className="text-white">التسجيل في الأنظمة الحكومية</strong>
              <p className="text-sm text-gray-400">التسجيل في التأمينات الاجتماعية، هيئة الزكاة والضريبة والجمارك، ووزارة الموارد البشرية.</p>
            </div>
          </li>
        </ol>
      </div>

      <h2>التكاليف الخفية والمتكررة</h2>
      <div className="not-prose glass p-5 rounded-xl mb-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
          <div className="bg-[#0A0E1A] p-3 rounded-lg">
            <h4 className="text-desert-accent font-semibold mb-1">تجديد السجل التجاري السنوي</h4>
            <p className="text-gray-400">3,000-6,000 ريال سنوياً. غرامة التأخير 100 ريال عن كل يوم.</p>
          </div>
          <div className="bg-[#0A0E1A] p-3 rounded-lg">
            <h4 className="text-desert-accent font-semibold mb-1">إيجار المكتب</h4>
            <p className="text-gray-400">15,000-60,000+ ريال سنوياً. مساحات العمل المشترك خيار أرخص.</p>
          </div>
          <div className="bg-[#0A0E1A] p-3 rounded-lg">
            <h4 className="text-desert-accent font-semibold mb-1">اشتراكات التأمينات الاجتماعية</h4>
            <p className="text-gray-400">18% من راتب الموظف السعودي (حصة صاحب العمل).</p>
          </div>
          <div className="bg-[#0A0E1A] p-3 rounded-lg">
            <h4 className="text-desert-accent font-semibold mb-1">تجديد الإقامات</h4>
            <p className="text-gray-400">600-900 ريال لكل إقامة سنوياً بالإضافة للتأمين الطبي.</p>
          </div>
        </div>
      </div>

      <h2>أمثلة واقعية للتكاليف</h2>

      <div className="not-prose glass p-5 rounded-xl mb-6">
        <h3 className="text-white font-semibold mb-3">مثال 1: استشارات تقنية صغيرة (مؤسسة فردية) في الرياض</h3>
        <div className="bg-[#0A0E1A] p-4 rounded-lg text-gray-300 text-sm space-y-1.5 font-mono">
          <p>حجز الاسم التجاري: 300 ريال</p>
          <p>رسوم إصدار السجل التجاري: 1,800 ريال</p>
          <p>غرفة الرياض: 1,500 ريال</p>
          <p>الرخصة البلدية (مكتب منزلي): 1,200 ريال</p>
          <p>العلاقات الحكومية: 500 ريال</p>
          <p>التأمين التجاري: 2,000 ريال</p>
          <p className="text-desert-primary font-bold mt-2">إجمالي التكلفة للسنة الأولى: 7,300 ريال</p>
        </div>
      </div>

      <div className="not-prose glass p-5 rounded-xl mb-6">
        <h3 className="text-white font-semibold mb-3">مثال 2: شركة تجزئة في جدة (شركة ذات مسؤولية محدودة)</h3>
        <div className="bg-[#0A0E1A] p-4 rounded-lg text-gray-300 text-sm space-y-1.5 font-mono">
          <p>حجز الاسم التجاري: 400 ريال</p>
          <p>إصدار السجل التجاري: 2,500 ريال</p>
          <p>غرفة جدة: 1,800 ريال</p>
          <p>الرخصة البلدية (شارع تجاري): 2,000 ريال</p>
          <p>صياغة العقد + التوثيق: 1,500 ريال</p>
          <p>العلاقات الحكومية: 1,000 ريال</p>
          <p>التأمين التجاري: 3,000 ريال</p>
          <p>إيجار المحل (سنوي): 25,000 ريال</p>
          <p className="text-desert-primary font-bold mt-2">إجمالي التكلفة للسنة الأولى: 37,200 ريال</p>
        </div>
      </div>

      <h2>مقدر تكاليف السجل التجاري من Sauditoolhub</h2>
      <div className="not-prose glass p-6 rounded-xl mb-8">
        <div className="flex items-center gap-3 mb-4">
          <Calculator className="h-8 w-8 text-desert-primary" />
          <h3 className="text-white text-lg font-bold m-0">مقدر تكاليف السجل التجاري</h3>
        </div>
        <p className="text-gray-300 mb-4">
          مقدرنا التفاعلي يزيل التخمين من ميزانية تأسيس الأعمال. اختر مدينتك، نوع الكيان التجاري، ومتطلبات المساحة المكتبية لتحصل على ميزانية شاملة للسنة الأولى.
        </p>
        <Link href="/cr-cost-estimator" className="inline-flex items-center gap-2 rounded-xl bg-desert-primary px-8 py-3 text-sm font-bold text-white transition-all hover:bg-desert-primary-dim">
          <Calculator className="h-4 w-4" />
          قدر تكاليف سجلك التجاري الآن
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
        تأسيس شركة في السعودية 2026 أصبح أكثر سهولة من أي وقت مضى، لكن التكاليف تتطلب تخطيطاً دقيقاً. ابدأ بتخطيط ميزانية عملك التجاري مع{' '}
        <Link href="/cr-cost-estimator" className="text-desert-primary font-bold underline">مقدر تكاليف السجل التجاري</Link>.
        ثم استكشف{' '}
        <Link href="/zatca-vat-calculator" className="text-desert-primary font-bold underline">حاسبة ضريبة القيمة المضافة</Link>
        {' '}و{' '}
        <Link href="/nitaqat-simulator" className="text-desert-primary font-bold underline">محاكي نطاقات</Link>
        . زوروا{' '}
        <Link href="/blog" className="text-desert-primary font-bold underline">المدونة</Link>
        {' '}لمزيد من الأدلة.
      </p>

      <div className="not-prose glass p-6 rounded-xl mt-8 text-center">
        <Calculator className="h-10 w-10 text-desert-primary mx-auto mb-3" />
        <h3 className="text-white text-lg font-bold mb-2">خطط لميزانية تأسيس عملك</h3>
        <p className="text-gray-400 text-sm mb-4">مقدر تفاعلي مجاني — نتائج فورية، بدون تسجيل</p>
        <Link href="/cr-cost-estimator" className="inline-flex items-center gap-2 rounded-xl bg-desert-primary px-8 py-3 text-sm font-bold text-white transition-all hover:bg-desert-primary-dim">
          <Calculator className="h-4 w-4" />
          قدر التكاليف الآن
        </Link>
      </div>
    </article>
  )
}

function UrContent() {
  return (
    <article className="prose prose-invert max-w-none prose-headings:text-desert-primary prose-a:text-desert-primary prose-strong:text-white prose-li:text-gray-300" dir="rtl">
      <h1>سعودی عرب میں کمرشل رجسٹریشن لاگت اور کاروبار شروع کرنے کا مکمل گائیڈ 2026</h1>

      <div className="not-prose glass p-6 rounded-xl mb-8">
        <p className="text-gray-300 text-lg leading-relaxed">
          سعودی عرب وژن 2030 کے تحت کاروبار میں غیر معمولی تیزی کا مشاہدہ کر رہا ہے۔ معاشی اصلاحات، ریگولیٹری آسانیاں، اور نجی شعبے کی ترقی نے مملکت کو مشرق وسطیٰ میں کمپنی شروع کرنے کے لیے سب سے پرکشش مقامات میں سے ایک بنا دیا ہے۔ لیکن نئے کاروباری افراد — سعودی اور غیر ملکی دونوں — کے لیے سرکاری فیسوں، لائسنسوں اور پوشیدہ اخراجات کی بھول بھلیاں مغلوب کن اور الجھا دینے والی ہو سکتی ہیں۔
        </p>
        <p className="text-gray-300 text-lg leading-relaxed mt-4">
          یہ گائیڈ <strong>2026 میں سعودی عرب میں کمرشل رجسٹریشن حاصل کرنے سے وابستہ ہر لاگت کا مکمل اور شفاف تجزیہ</strong> فراہم کرتا ہے۔
        </p>
        <p className="text-gray-300 text-lg leading-relaxed mt-4">
          ہمارا مفت{' '}
          <Link href="/cr-cost-estimator" className="text-desert-primary font-bold underline">
            CR Cost Estimator
          </Link>{' '}
          استعمال کریں۔
        </p>
      </div>

      <h2>کمرشل رجسٹریشن (CR) کیا ہے؟</h2>
      <p>
        کمرشل رجسٹریشن وزارت تجارت کی طرف سے جاری کردہ سرکاری لائسنس ہے جو کسی فرد یا ادارے کو مملکت میں کاروباری سرگرمیاں کرنے کی اجازت دیتا ہے۔ یہ کسی بھی کاروبار کے لیے بنیادی قانونی دستاویز ہے — اس کے بغیر آپ قانونی طور پر مصنوعات نہیں بیچ سکتے، تجارتی مقام کرائے پر نہیں لے سکتے، ملازمین نہیں رکھ سکتے، سامان درآمد نہیں کر سکتے، یا دوسری کمپنیوں کے ساتھ معاہدے نہیں کر سکتے۔
      </p>

      <h3>واتق فری لانس سرٹیفکیٹ بمقابلہ کمرشل رجسٹریشن</h3>
      <p>
        بہت سے نئے کاروباری افراد واتق سرٹیفکیٹ اور مکمل CR میں الجھ جاتے ہیں۔ واتق ان افراد کے لیے ہے جو مکمل کمپنی کے بغیر پیشہ ورانہ خدمات دینا چاہتے ہیں۔ اس کی لاگت 1,000-2,000 SAR سالانہ ہے اور اس کے لیے فزیکل آفس ضروری نہیں۔ مکمل CR ان کاروباروں کے لیے ہے جو فزیکل مصنوعات فروخت کرتے ہیں، تجارتی مقام سے کام کرتے ہیں، یا متعدد ملازمین رکھتے ہیں۔
      </p>

      <h2>کاروباری اداروں کی اقسام اور ان کے اخراجات 2026</h2>

      <div className="not-prose glass p-5 rounded-xl mb-6">
        <h3 className="text-desert-primary font-semibold mb-3">سول پرپرائییٹرشپ (مؤسسہ)</h3>
        <p className="text-gray-300 text-sm">کاروبار شروع کرنے کا سب سے سستا اور تیز ترین طریقہ۔ پہلے سال کی لاگت: تقریباً 5,000-8,000 SAR۔</p>
      </div>

      <div className="not-prose glass p-5 rounded-xl mb-6">
        <h3 className="text-desert-primary font-semibold mb-3">محدود ذمہ داری کمپنی (LLC)</h3>
        <p className="text-gray-300 text-sm">SMEs کے لیے سب سے مقبول ڈھانچہ۔ پہلے سال کی لاگت: تقریباً 12,000-25,000 SAR۔</p>
      </div>

      <div className="not-prose glass p-5 rounded-xl mb-6">
        <h3 className="text-desert-primary font-semibold mb-3">جوائنٹ اسٹاک کمپنی (JSC)</h3>
        <p className="text-gray-300 text-sm">بڑے اداروں کے لیے۔ پہلے سال کی لاگت: تقریباً 50,000-200,000+ SAR۔</p>
      </div>

      <h2>کمرشل رجسٹریشن کے اخراجات کی تفصیل</h2>
      <div className="not-prose glass p-5 rounded-xl mb-6">
        <div className="space-y-3 text-sm">
          <div className="flex justify-between items-center border-b border-gray-700/50 pb-2">
            <span className="font-medium text-white">نام کا تحفظ (وزارت تجارت)</span>
            <span className="text-gray-400">200 - 500 SAR</span>
          </div>
          <div className="flex justify-between items-center border-b border-gray-700/50 pb-2">
            <span className="font-medium text-white">CR اجراء (وزارت تجارت)</span>
            <span className="text-gray-400">1,500 - 2,500 SAR</span>
          </div>
          <div className="flex justify-between items-center border-b border-gray-700/50 pb-2">
            <span className="font-medium text-white">چیمبر آف کامرس</span>
            <span className="text-gray-400">800 - 2,500 SAR</span>
          </div>
          <div className="flex justify-between items-center border-b border-gray-700/50 pb-2">
            <span className="font-medium text-white">بلدیہ لائسنس</span>
            <span className="text-gray-400">1,000 - 2,000 SAR</span>
          </div>
          <div className="flex justify-between items-center border-b border-gray-700/50 pb-2">
            <span className="font-medium text-white">قانونی دستاویزات</span>
            <span className="text-gray-400">300 - 800 SAR</span>
          </div>
          <div className="flex justify-between items-center border-b border-gray-700/50 pb-2">
            <span className="font-medium text-white">PRO خدمات</span>
            <span className="text-gray-400">500 - 2,000 SAR</span>
          </div>
          <div className="flex justify-between items-center border-b border-gray-700/50 pb-2">
            <span className="font-medium text-white">MISA لائسنس (غیر ملکی)</span>
            <span className="text-gray-400">24,000 - 32,000 SAR</span>
          </div>
          <div className="flex justify-between items-center pb-2">
            <span className="font-medium text-white">تجارتی انشورنس</span>
            <span className="text-gray-400">2,000 - 5,000 SAR</span>
          </div>
        </div>
      </div>

      <h2>غیر ملکی ملکیت کے قواعد (MISA لائسنس) 2026</h2>
      <p>
        وژن 2030 کی سب سے اہم اصلاحات میں سے ایک غیر ملکی سرمایہ کاری کے قواعد کو آزاد کرنا ہے۔ 2026 تک، غیر ملکی زیادہ تر شعبوں میں سعودی پارٹنر کے بغیر 100% کاروبار کے مالک ہو سکتے ہیں۔ MISA لائسنس کی لاگت 24,000-32,000 SAR ابتدائی اور 8,000-12,000 SAR سالانہ تجدید ہے۔
      </p>

      <h2>CR حاصل کرنے کا مرحلہ وار عمل</h2>
      <div className="not-prose glass p-5 rounded-xl mb-6">
        <ol className="space-y-3 text-gray-300">
          <li className="flex items-start gap-3">
            <span className="bg-desert-primary text-white font-bold rounded-full w-6 h-6 flex items-center justify-center shrink-0 mt-0.5 text-xs">1</span>
            <div>
              <strong className="text-white">تجارتی نام کا تحفظ</strong>
              <p className="text-sm text-gray-400">وزارت تجارت کے پورٹل پر نام کا تحفظ۔ لاگت: 200-500 SAR۔</p>
            </div>
          </li>
          <li className="flex items-start gap-3">
            <span className="bg-desert-primary text-white font-bold rounded-full w-6 h-6 flex items-center justify-center shrink-0 mt-0.5 text-xs">2</span>
            <div>
              <strong className="text-white">معاہدہ کی تیاری</strong>
              <p className="text-sm text-gray-400">LLC اور JSC کے لیے وکیل کے ذریعے معاہدہ تیار کروائیں۔ لاگت: 300-800 SAR۔</p>
            </div>
          </li>
          <li className="flex items-start gap-3">
            <span className="bg-desert-primary text-white font-bold rounded-full w-6 h-6 flex items-center justify-center shrink-0 mt-0.5 text-xs">3</span>
            <div>
              <strong className="text-white">CR درخواست جمع کروائیں</strong>
              <p className="text-sm text-gray-400">وزارت تجارت کے پورٹل پر دستاویزات اپ لوڈ کریں۔ مدت: 3-5 کاروباری دن۔</p>
            </div>
          </li>
          <li className="flex items-start gap-3">
            <span className="bg-desert-primary text-white font-bold rounded-full w-6 h-6 flex items-center justify-center shrink-0 mt-0.5 text-xs">4</span>
            <div>
              <strong className="text-white">چیمبر آف کامرس رجسٹریشن</strong>
              <p className="text-sm text-gray-400">مقامی چیمبر میں رجسٹریشن۔ مدت: 1-2 دن۔</p>
            </div>
          </li>
          <li className="flex items-start gap-3">
            <span className="bg-desert-primary text-white font-bold rounded-full w-6 h-6 flex items-center justify-center shrink-0 mt-0.5 text-xs">5</span>
            <div>
              <strong className="text-white">بلدیہ لائسنس</strong>
              <p className="text-sm text-gray-400">ایجار پر تصدیق شدہ کرایہ کا معاہدہ درکار۔ لاگت: 1,000-2,000 SAR۔</p>
            </div>
          </li>
          <li className="flex items-start gap-3">
            <span className="bg-desert-primary text-white font-bold rounded-full w-6 h-6 flex items-center justify-center shrink-0 mt-0.5 text-xs">6</span>
            <div>
              <strong className="text-white">سرکاری نظاموں میں رجسٹریشن</strong>
              <p className="text-sm text-gray-400">GOSI، ZATCA، اور وزارت افرادی قوت میں رجسٹریشن۔</p>
            </div>
          </li>
        </ol>
      </div>

      <h2>مخفی اور بار بار آنے والے اخراجات</h2>
      <div className="not-prose glass p-5 rounded-xl mb-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
          <div className="bg-[#0A0E1A] p-3 rounded-lg">
            <h4 className="text-desert-accent font-semibold mb-1">سالانہ CR تجدید</h4>
            <p className="text-gray-400">3,000-6,000 SAR سالانہ۔</p>
          </div>
          <div className="bg-[#0A0E1A] p-3 rounded-lg">
            <h4 className="text-desert-accent font-semibold mb-1">دفتر کرایہ</h4>
            <p className="text-gray-400">15,000-60,000+ SAR سالانہ۔</p>
          </div>
          <div className="bg-[#0A0E1A] p-3 rounded-lg">
            <h4 className="text-desert-accent font-semibold mb-1">GOSI شراکت</h4>
            <p className="text-gray-400">سعودی ملازمین کی تنخواہ کا 18%۔</p>
          </div>
          <div className="bg-[#0A0E1A] p-3 rounded-lg">
            <h4 className="text-desert-accent font-semibold mb-1">اقامہ کی تجدید</h4>
            <p className="text-gray-400">600-900 SAR فی اقامہ سالانہ۔</p>
          </div>
        </div>
      </div>

      <h2>حقیقی مثالوں کے ساتھ اخراجات</h2>

      <div className="not-prose glass p-5 rounded-xl mb-6">
        <h3 className="text-white font-semibold mb-3">مثال 1: ریاض میں چھوٹی IT کنسلٹنسی (سول پرپرائییٹرشپ)</h3>
        <div className="bg-[#0A0E1A] p-4 rounded-lg text-gray-300 text-sm space-y-1.5 font-mono">
          <p>نام کا تحفظ: 300 SAR</p>
          <p>CR اجراء: 1,800 SAR</p>
          <p>ریاض چیمبر: 1,500 SAR</p>
          <p>بلدیہ لائسنس: 1,200 SAR</p>
          <p>PRO خدمات: 500 SAR</p>
          <p>تجارتی انشورنس: 2,000 SAR</p>
          <p className="text-desert-primary font-bold mt-2">پہلے سال کی کل لاگت: 7,300 SAR</p>
        </div>
      </div>

      <div className="not-prose glass p-5 rounded-xl mb-6">
        <h3 className="text-white font-semibold mb-3">مثال 2: جدہ میں ریٹیل LLC (2 شراکت دار)</h3>
        <div className="bg-[#0A0E1A] p-4 rounded-lg text-gray-300 text-sm space-y-1.5 font-mono">
          <p>نام کا تحفظ: 400 SAR</p>
          <p>CR اجراء: 2,500 SAR</p>
          <p>جدہ چیمبر: 1,800 SAR</p>
          <p>بلدیہ لائسنس: 2,000 SAR</p>
          <p>قانونی اخراجات: 1,500 SAR</p>
          <p>PRO خدمات: 1,000 SAR</p>
          <p>انشورنس: 3,000 SAR</p>
          <p>دفتر کرایہ: 25,000 SAR</p>
          <p className="text-desert-primary font-bold mt-2">پہلے سال کی کل لاگت: 37,200 SAR</p>
        </div>
      </div>

      <h2>Sauditoolhub CR Cost Estimator</h2>
      <div className="not-prose glass p-6 rounded-xl mb-8">
        <Link href="/cr-cost-estimator" className="inline-flex items-center gap-2 rounded-xl bg-desert-primary px-8 py-3 text-sm font-bold text-white transition-all hover:bg-desert-primary-dim">
          <Calculator className="h-4 w-4" />
          اپنے CR اخراجات کا اندازہ لگائیں
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
        2026 میں سعودی عرب میں کاروبار شروع کرنا پہلے سے زیادہ آسان ہے، لیکن اخراجات کے لیے احتیاط سے منصوبہ بندی ضروری ہے۔{' '}
        <Link href="/cr-cost-estimator" className="text-desert-primary font-bold underline">CR Cost Estimator</Link>
        {' '}استعمال کریں۔{' '}
        <Link href="/zatca-vat-calculator" className="text-desert-primary font-bold underline">VAT Calculator</Link>
        {' '}اور{' '}
        <Link href="/nitaqat-simulator" className="text-desert-primary font-bold underline">Nitaqat Simulator</Link>
        {' '}بھی دیکھیں۔{' '}
        <Link href="/blog" className="text-desert-primary font-bold underline">بلاگ</Link> پر مزید۔
      </p>

      <div className="not-prose glass p-6 rounded-xl mt-8 text-center">
        <Calculator className="h-10 w-10 text-desert-primary mx-auto mb-3" />
        <h3 className="text-white text-lg font-bold mb-2">اپنے کاروبار کے بجٹ کی منصوبہ بندی کریں</h3>
        <p className="text-gray-400 text-sm mb-4">مفت انٹرایکٹو CR کیلکولیٹر</p>
        <Link href="/cr-cost-estimator" className="inline-flex items-center gap-2 rounded-xl bg-desert-primary px-8 py-3 text-sm font-bold text-white transition-all hover:bg-desert-primary-dim">
          <Calculator className="h-4 w-4" />
          لاگت کا اندازہ لگائیں
        </Link>
      </div>
    </article>
  )
}

function TlContent() {
  return (
    <article className="prose prose-invert max-w-none prose-headings:text-desert-primary prose-a:text-desert-primary prose-strong:text-white prose-li:text-gray-300">
      <h1>Kumpletong Gabay sa CR Cost at Pagtatatag ng Negosyo sa Saudi Arabia 2026</h1>

      <div className="not-prose glass p-6 rounded-xl mb-8">
        <p className="text-gray-300 text-lg leading-relaxed">
          Ang Saudi Arabia ay nakararanas ng hindi pa naganap na business boom sa ilalim ng Vision 2030. Ang mga reporma sa ekonomiya, regulatory simplification, at pagtulak sa paglago ng pribadong sektor ay ginawa ang kaharian na isa sa mga pinaka-kaakit-akit na lugar sa Middle East para magsimula ng kumpanya. Ngunit para sa mga bagong negosyante — parehong Saudi at expat — ang maze ng government fees, lisensya, at hidden costs ay maaaring maging overwhelming at nakakalito.
        </p>
        <p className="text-gray-300 text-lg leading-relaxed mt-4">
          Ang gabay na ito ay nagbibigay ng <strong>kumpleto at transparent na breakdown ng bawat gastos na nauugnay sa pagkuha ng Commercial Registration (CR) sa Saudi Arabia sa 2026</strong>.
        </p>
        <p className="text-gray-300 text-lg leading-relaxed mt-4">
          Gamitin ang aming libreng{' '}
          <Link href="/cr-cost-estimator" className="text-desert-primary font-bold underline">
            CR Cost Estimator
          </Link>.
        </p>
      </div>

      <h2>Ano ang Commercial Registration (CR)?</h2>
      <p>
        Ang Commercial Registration ay ang opisyal na lisensya na inisyu ng Ministry of Commerce na nagpapahintulot sa isang indibidwal o entity na magsagawa ng mga business activities sa Kaharian ng Saudi Arabia. Ito ang pangunahing legal na dokumento para sa anumang negosyo — kung walang CR, hindi ka maaaring legal na magbenta ng produkto, umarkila ng commercial premises, kumuha ng empleyado, mag-import ng goods, o pumirma ng kontrata sa ibang kumpanya.
      </p>

      <h3>Watheq Freelance Certificate vs. Commercial Registration</h3>
      <p>
        Maraming bagong negosyante ang nalilito sa pagitan ng Watheq certificate at CR. Ang Watheq ay para sa mga indibidwal na nais mag-alok ng professional services nang walang kumpanya. Ito ay nagkakahalaga ng 1,000-2,000 SAR taun-taon at hindi nangangailangan ng physical office. Ang CR ay para sa mga negosyong nagbebenta ng physical products, nag-ooperate mula sa commercial premises, o kumukuha ng maraming empleyado.
      </p>

      <h2>Mga Uri ng Business Entity at Kanilang Gastos 2026</h2>

      <div className="not-prose glass p-5 rounded-xl mb-6">
        <h3 className="text-desert-primary font-semibold mb-3">Sole Proprietorship (Muassasah)</h3>
        <p className="text-gray-300 text-sm">Ang pinakamura at pinakamabilis na paraan para magsimula ng negosyo. Unang taon: humigit-kumulang 5,000-8,000 SAR.</p>
      </div>

      <div className="not-prose glass p-5 rounded-xl mb-6">
        <h3 className="text-desert-primary font-semibold mb-3">Limited Liability Company (LLC)</h3>
        <p className="text-gray-300 text-sm">Ang pinakasikat na istraktura para sa SMEs. Unang taon: humigit-kumulang 12,000-25,000 SAR.</p>
      </div>

      <div className="not-prose glass p-5 rounded-xl mb-6">
        <h3 className="text-desert-primary font-semibold mb-3">Joint Stock Company (JSC)</h3>
        <p className="text-gray-300 text-sm">Para sa malalaking negosyo. Unang taon: humigit-kumulang 50,000-200,000+ SAR.</p>
      </div>

      <h2>Detalyadong Breakdown ng CR Costs</h2>
      <div className="not-prose glass p-5 rounded-xl mb-6">
        <div className="space-y-3 text-sm">
          <div className="flex justify-between items-center border-b border-gray-700/50 pb-2">
            <span className="font-medium text-white">MOC Name Reservation</span>
            <span className="text-gray-400">200 - 500 SAR</span>
          </div>
          <div className="flex justify-between items-center border-b border-gray-700/50 pb-2">
            <span className="font-medium text-white">MOC CR Issuance</span>
            <span className="text-gray-400">1,500 - 2,500 SAR</span>
          </div>
          <div className="flex justify-between items-center border-b border-gray-700/50 pb-2">
            <span className="font-medium text-white">Chamber of Commerce</span>
            <span className="text-gray-400">800 - 2,500 SAR</span>
          </div>
          <div className="flex justify-between items-center border-b border-gray-700/50 pb-2">
            <span className="font-medium text-white">Municipal License</span>
            <span className="text-gray-400">1,000 - 2,000 SAR</span>
          </div>
          <div className="flex justify-between items-center border-b border-gray-700/50 pb-2">
            <span className="font-medium text-white">Legal Documentation</span>
            <span className="text-gray-400">300 - 800 SAR</span>
          </div>
          <div className="flex justify-between items-center border-b border-gray-700/50 pb-2">
            <span className="font-medium text-white">PRO Services</span>
            <span className="text-gray-400">500 - 2,000 SAR</span>
          </div>
          <div className="flex justify-between items-center border-b border-gray-700/50 pb-2">
            <span className="font-medium text-white">MISA License (Foreigners)</span>
            <span className="text-gray-400">24,000 - 32,000 SAR</span>
          </div>
          <div className="flex justify-between items-center pb-2">
            <span className="font-medium text-white">Commercial Insurance</span>
            <span className="text-gray-400">2,000 - 5,000 SAR</span>
          </div>
        </div>
      </div>

      <h2>Rules para sa Foreign Ownership (MISA License) 2026</h2>
      <p>
        Isa sa pinakamahalagang reporma ng Vision 2030 ay ang liberalisasyon ng foreign investment rules. Sa 2026, ang mga expat ay maaaring magmay-ari ng 100% ng negosyo sa karamihan ng sektor nang walang Saudi partner. Ang MISA license ay nagkakahalaga ng 24,000-32,000 SAR para sa initial application at 8,000-12,000 SAR taun-taon para sa renewal.
      </p>

      <h2>Step-by-Step na Proseso para Makakuha ng CR</h2>
      <div className="not-prose glass p-5 rounded-xl mb-6">
        <ol className="space-y-3 text-gray-300">
          <li className="flex items-start gap-3">
            <span className="bg-desert-primary text-white font-bold rounded-full w-6 h-6 flex items-center justify-center shrink-0 mt-0.5 text-xs">1</span>
            <div>
              <strong className="text-white">I-reserve ang Trade Name</strong>
              <p className="text-sm text-gray-400">Mag-login sa MOC portal at mag-reserve ng trade name. Gastos: 200-500 SAR.</p>
            </div>
          </li>
          <li className="flex items-start gap-3">
            <span className="bg-desert-primary text-white font-bold rounded-full w-6 h-6 flex items-center justify-center shrink-0 mt-0.5 text-xs">2</span>
            <div>
              <strong className="text-white">I-draft ang Articles of Association</strong>
              <p className="text-sm text-gray-400">Para sa LLC at JSC, kailangan ng lawyer. Gastos: 300-800 SAR.</p>
            </div>
          </li>
          <li className="flex items-start gap-3">
            <span className="bg-desert-primary text-white font-bold rounded-full w-6 h-6 flex items-center justify-center shrink-0 mt-0.5 text-xs">3</span>
            <div>
              <strong className="text-white">Isumite ang CR Application</strong>
              <p className="text-sm text-gray-400">I-upload ang dokumento sa MOC portal. Oras: 3-5 araw.</p>
            </div>
          </li>
          <li className="flex items-start gap-3">
            <span className="bg-desert-primary text-white font-bold rounded-full w-6 h-6 flex items-center justify-center shrink-0 mt-0.5 text-xs">4</span>
            <div>
              <strong className="text-white">Magrehistro sa Chamber of Commerce</strong>
              <p className="text-sm text-gray-400">Magrehistro sa inyong lokal na Chamber. Oras: 1-2 araw.</p>
            </div>
          </li>
          <li className="flex items-start gap-3">
            <span className="bg-desert-primary text-white font-bold rounded-full w-6 h-6 flex items-center justify-center shrink-0 mt-0.5 text-xs">5</span>
            <div>
              <strong className="text-white">Kumuha ng Municipal License</strong>
              <p className="text-sm text-gray-400">Kailangan ng Ejar-certified lease contract. Gastos: 1,000-2,000 SAR.</p>
            </div>
          </li>
          <li className="flex items-start gap-3">
            <span className="bg-desert-primary text-white font-bold rounded-full w-6 h-6 flex items-center justify-center shrink-0 mt-0.5 text-xs">6</span>
            <div>
              <strong className="text-white">Magrehistro sa Government Systems</strong>
              <p className="text-sm text-gray-400">GOSI, ZATCA, at Ministry of Human Resources.</p>
            </div>
          </li>
        </ol>
      </div>

      <h2>Hidden at Recurring Costs</h2>
      <div className="not-prose glass p-5 rounded-xl mb-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
          <div className="bg-[#0A0E1A] p-3 rounded-lg">
            <h4 className="text-desert-accent font-semibold mb-1">Annual CR Renewal</h4>
            <p className="text-gray-400">3,000-6,000 SAR taun-taon.</p>
          </div>
          <div className="bg-[#0A0E1A] p-3 rounded-lg">
            <h4 className="text-desert-accent font-semibold mb-1">Office Rent</h4>
            <p className="text-gray-400">15,000-60,000+ SAR taun-taon.</p>
          </div>
          <div className="bg-[#0A0E1A] p-3 rounded-lg">
            <h4 className="text-desert-accent font-semibold mb-1">GOSI Contributions</h4>
            <p className="text-gray-400">18% ng Saudi employee salary.</p>
          </div>
          <div className="bg-[#0A0E1A] p-3 rounded-lg">
            <h4 className="text-desert-accent font-semibold mb-1">Iqama Renewals</h4>
            <p className="text-gray-400">600-900 SAR bawat Iqama taun-taon.</p>
          </div>
        </div>
      </div>

      <h2>Real-Life Cost Examples</h2>

      <div className="not-prose glass p-5 rounded-xl mb-6">
        <h3 className="text-white font-semibold mb-3">Example 1: Maliit na IT Consultancy sa Riyadh (Sole Proprietorship)</h3>
        <div className="bg-[#0A0E1A] p-4 rounded-lg text-gray-300 text-sm space-y-1.5 font-mono">
          <p>Name Reservation: 300 SAR</p>
          <p>CR Issuance: 1,800 SAR</p>
          <p>Riyadh Chamber: 1,500 SAR</p>
          <p>Municipal License: 1,200 SAR</p>
          <p>PRO Services: 500 SAR</p>
          <p>Insurance: 2,000 SAR</p>
          <p className="text-desert-primary font-bold mt-2">Total First-Year Cost: 7,300 SAR</p>
        </div>
      </div>

      <div className="not-prose glass p-5 rounded-xl mb-6">
        <h3 className="text-white font-semibold mb-3">Example 2: Retail LLC sa Jeddah (2 Partners)</h3>
        <div className="bg-[#0A0E1A] p-4 rounded-lg text-gray-300 text-sm space-y-1.5 font-mono">
          <p>Name Reservation: 400 SAR</p>
          <p>CR Issuance: 2,500 SAR</p>
          <p>Jeddah Chamber: 1,800 SAR</p>
          <p>Municipal License: 2,000 SAR</p>
          <p>Legal + Notary: 1,500 SAR</p>
          <p>PRO Services: 1,000 SAR</p>
          <p>Insurance: 3,000 SAR</p>
          <p>Office Rent: 25,000 SAR</p>
          <p className="text-desert-primary font-bold mt-2">Total First-Year Cost: 37,200 SAR</p>
        </div>
      </div>

      <h2>Sauditoolhub CR Cost Estimator</h2>
      <div className="not-prose glass p-6 rounded-xl mb-8">
        <Link href="/cr-cost-estimator" className="inline-flex items-center gap-2 rounded-xl bg-desert-primary px-8 py-3 text-sm font-bold text-white transition-all hover:bg-desert-primary-dim">
          <Calculator className="h-4 w-4" />
          Tantyahin ang Iyong CR Cost Ngayon
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
        <Link href="/cr-cost-estimator" className="text-desert-primary font-bold underline">CR Cost Estimator</Link>
        {' '}ng Sauditoolhub. Tingnan din ang{' '}
        <Link href="/zatca-vat-calculator" className="text-desert-primary font-bold underline">VAT Calculator</Link>
        {' '}at{' '}
        <Link href="/nitaqat-simulator" className="text-desert-primary font-bold underline">Nitaqat Simulator</Link>
        . Bisitahin ang aming{' '}
        <Link href="/blog" className="text-desert-primary font-bold underline">Blog</Link>.
      </p>

      <div className="not-prose glass p-6 rounded-xl mt-8 text-center">
        <Calculator className="h-10 w-10 text-desert-primary mx-auto mb-3" />
        <h3 className="text-white text-lg font-bold mb-2">Planuhin ang Iyong Business Startup Budget</h3>
        <p className="text-gray-400 text-sm mb-4">Libreng interactive CR Cost Estimator</p>
        <Link href="/cr-cost-estimator" className="inline-flex items-center gap-2 rounded-xl bg-desert-primary px-8 py-3 text-sm font-bold text-white transition-all hover:bg-desert-primary-dim">
          <Calculator className="h-4 w-4" />
          Tantyahin Ngayon
        </Link>
      </div>
    </article>
  )
}

function BnContent() {
  return (
    <article className="prose prose-invert max-w-none prose-headings:text-desert-primary prose-a:text-desert-primary prose-strong:text-white prose-li:text-gray-300">
      <h1>সৌদি আরবে বাণিজ্যিক নিবন্ধন খরচ ও ব্যবসা শুরু করার সম্পূর্ণ গাইড 2026</h1>

      <div className="not-prose glass p-6 rounded-xl mb-8">
        <p className="text-gray-300 text-lg leading-relaxed">
          সৌদি আরব ভিশন ২০৩০-এর অধীনে ব্যবসায় এক অভূতপূর্ব বিকাশ প্রত্যক্ষ করছে। অর্থনৈতিক সংস্কার, নিয়ন্ত্রক সরলীকরণ এবং বেসরকারি খাতের বিকাশের প্রচেষ্টা মধ্যপ্রাচ্যে কোম্পানি শুরু করার জন্য সবচেয়ে আকর্ষণীয় স্থানগুলির একটি করে তুলেছে। কিন্তু নতুন উদ্যোক্তাদের জন্য — সৌদি ও প্রবাসী উভয়েরই — সরকারি ফি, লাইসেন্স এবং লুকানো খরচের জটিলতা বিভ্রান্তিকর হতে পারে।
        </p>
        <p className="text-gray-300 text-lg leading-relaxed mt-4">
          এই গাইডটি <strong>২০২৬ সালে সৌদি আরবে বাণিজ্যিক নিবন্ধন (CR) পাওয়ার সাথে সম্পর্কিত প্রতিটি খরচের সম্পূর্ণ এবং স্বচ্ছ বিশ্লেষণ</strong> প্রদান করে।
        </p>
        <p className="text-gray-300 text-lg leading-relaxed mt-4">
          আমাদের বিনামূল্যের{' '}
          <Link href="/cr-cost-estimator" className="text-desert-primary font-bold underline">
            CR Cost Estimator
          </Link>{' '}
          ব্যবহার করুন।
        </p>
      </div>

      <h2>বাণিজ্যিক নিবন্ধন (CR) কী?</h2>
      <p>
        বাণিজ্যিক নিবন্ধন হল বাণিজ্য মন্ত্রণালয় দ্বারা জারি করা অফিসিয়াল লাইসেন্স যা কোনো ব্যক্তি বা প্রতিষ্ঠানকে রাজ্যে ব্যবসায়িক কার্যক্রম পরিচালনার অনুমতি দেয়। এটি যেকোনো ব্যবসার জন্য মৌলিক আইনি দলিল — CR ছাড়া আপনি আইনিভাবে পণ্য বিক্রি করতে, বাণিজ্যিক স্থান ভাড়া নিতে, কর্মচারী নিয়োগ দিতে, পণ্য আমদানি করতে বা অন্যান্য কোম্পানির সাথে চুক্তি করতে পারবেন না।
      </p>

      <h3>ওয়াথেক ফ্রিল্যান্স সার্টিফিকেট বনাম বাণিজ্যিক নিবন্ধন</h3>
      <p>
        অনেক নতুন উদ্যোক্তা ওয়াথেক সার্টিফিকেট এবং সম্পূর্ণ CR-এর মধ্যে বিভ্রান্ত হন। ওয়াথেক সেই ব্যক্তিদের জন্য যারা কোম্পানি ছাড়াই পেশাদার সেবা দিতে চান। এর খরচ ১,০০০-২,০০০ SAR বার্ষিক এবং এর জন্য ফিজিক্যাল অফিসের প্রয়োজন নেই। সম্পূর্ণ CR তাদের জন্য যারা ফিজিক্যাল পণ্য বিক্রি করেন, বাণিজ্যিক স্থান থেকে কাজ করেন বা একাধিক কর্মচারী নিয়োগ দেন।
      </p>

      <h2>ব্যবসায়িক সত্তার ধরন এবং তাদের খরচ ২০২৬</h2>

      <div className="not-prose glass p-5 rounded-xl mb-6">
        <h3 className="text-desert-primary font-semibold mb-3">একক মালিকানা (মুয়াসসাসা)</h3>
        <p className="text-gray-300 text-sm">ব্যবসা শুরুর সবচেয়ে সস্তা এবং দ্রুততম উপায়। প্রথম বছর: প্রায় ৫,০০০-৮,০০০ SAR।</p>
      </div>

      <div className="not-prose glass p-5 rounded-xl mb-6">
        <h3 className="text-desert-primary font-semibold mb-3">সীমিত দায় কোম্পানি (LLC)</h3>
        <p className="text-gray-300 text-sm">SME-র জন্য সবচেয়ে জনপ্রিয় কাঠামো। প্রথম বছর: প্রায় ১২,০০০-২৫,০০০ SAR।</p>
      </div>

      <div className="not-prose glass p-5 rounded-xl mb-6">
        <h3 className="text-desert-primary font-semibold mb-3">জয়েন্ট স্টক কোম্পানি (JSC)</h3>
        <p className="text-gray-300 text-sm">বড় প্রতিষ্ঠানের জন্য। প্রথম বছর: প্রায় ৫০,০০০-২০০,০০০+ SAR।</p>
      </div>

      <h2>CR খরচের বিস্তারিত বিবরণ</h2>
      <div className="not-prose glass p-5 rounded-xl mb-6">
        <div className="space-y-3 text-sm">
          <div className="flex justify-between items-center border-b border-gray-700/50 pb-2">
            <span className="font-medium text-white">MOC নাম সংরক্ষণ</span>
            <span className="text-gray-400">২০০ - ৫০০ SAR</span>
          </div>
          <div className="flex justify-between items-center border-b border-gray-700/50 pb-2">
            <span className="font-medium text-white">MOC CR ইস্যু</span>
            <span className="text-gray-400">১,৫০০ - ২,৫০০ SAR</span>
          </div>
          <div className="flex justify-between items-center border-b border-gray-700/50 pb-2">
            <span className="font-medium text-white">চেম্বার অফ কমার্স</span>
            <span className="text-gray-400">৮০০ - ২,৫০০ SAR</span>
          </div>
          <div className="flex justify-between items-center border-b border-gray-700/50 pb-2">
            <span className="font-medium text-white">পৌর লাইসেন্স</span>
            <span className="text-gray-400">১,০০০ - ২,০০০ SAR</span>
          </div>
          <div className="flex justify-between items-center border-b border-gray-700/50 pb-2">
            <span className="font-medium text-white">আইনি দলিল প্রস্তুতি</span>
            <span className="text-gray-400">৩০০ - ৮০০ SAR</span>
          </div>
          <div className="flex justify-between items-center border-b border-gray-700/50 pb-2">
            <span className="font-medium text-white">PRO সেবা</span>
            <span className="text-gray-400">৫০০ - ২,০০০ SAR</span>
          </div>
          <div className="flex justify-between items-center border-b border-gray-700/50 pb-2">
            <span className="font-medium text-white">MISA লাইসেন্স (বিদেশী)</span>
            <span className="text-gray-400">২৪,০০০ - ৩২,০০০ SAR</span>
          </div>
          <div className="flex justify-between items-center pb-2">
            <span className="font-medium text-white">বাণিজ্যিক বীমা</span>
            <span className="text-gray-400">২,০০০ - ৫,০০০ SAR</span>
          </div>
        </div>
      </div>

      <h2>বিদেশী মালিকানার নিয়ম (MISA লাইসেন্স) ২০২৬</h2>
      <p>
        ভিশন ২০৩০-এর সবচেয়ে গুরুত্বপূর্ণ সংস্কারগুলির একটি হল বিদেশী বিনিয়োগের নিয়ম উদারীকরণ। ২০২৬ সাল পর্যন্ত, বিদেশীরা অধিকাংশ খাতে সৌদি অংশীদার ছাড়া ১০০% ব্যবসার মালিক হতে পারে। MISA লাইসেন্সের খরচ ২৪,০০০-৩২,০০০ SAR প্রাথমিক এবং ৮,০০০-১২,০০০ SAR বার্ষিক নবায়ন।
      </p>

      <h2>CR পাওয়ার ধাপে ধাপে প্রক্রিয়া</h2>
      <div className="not-prose glass p-5 rounded-xl mb-6">
        <ol className="space-y-3 text-gray-300">
          <li className="flex items-start gap-3">
            <span className="bg-desert-primary text-white font-bold rounded-full w-6 h-6 flex items-center justify-center shrink-0 mt-0.5 text-xs">১</span>
            <div>
              <strong className="text-white">ব্যবসায়িক নাম সংরক্ষণ</strong>
              <p className="text-sm text-gray-400">MOC পোর্টালে নাম সংরক্ষণ করুন। খরচ: ২০০-৫০০ SAR।</p>
            </div>
          </li>
          <li className="flex items-start gap-3">
            <span className="bg-desert-primary text-white font-bold rounded-full w-6 h-6 flex items-center justify-center shrink-0 mt-0.5 text-xs">২</span>
            <div>
              <strong className="text-white">অ্যাসোসিয়েশনের নিবন্ধ প্রস্তুত</strong>
              <p className="text-sm text-gray-400">LLC ও JSC-এর জন্য উকিল প্রয়োজন। খরচ: ৩০০-৮০০ SAR।</p>
            </div>
          </li>
          <li className="flex items-start gap-3">
            <span className="bg-desert-primary text-white font-bold rounded-full w-6 h-6 flex items-center justify-center shrink-0 mt-0.5 text-xs">৩</span>
            <div>
              <strong className="text-white">CR আবেদন জমা দিন</strong>
              <p className="text-sm text-gray-400">MOC পোর্টালে ডকুমেন্ট আপলোড করুন। সময়: ৩-৫ কার্যদিবস।</p>
            </div>
          </li>
          <li className="flex items-start gap-3">
            <span className="bg-desert-primary text-white font-bold rounded-full w-6 h-6 flex items-center justify-center shrink-0 mt-0.5 text-xs">৪</span>
            <div>
              <strong className="text-white">চেম্বার অফ কমার্সে নিবন্ধন</strong>
              <p className="text-sm text-gray-400">স্থানীয় চেম্বারে নিবন্ধন। সময়: ১-২ দিন।</p>
            </div>
          </li>
          <li className="flex items-start gap-3">
            <span className="bg-desert-primary text-white font-bold rounded-full w-6 h-6 flex items-center justify-center shrink-0 mt-0.5 text-xs">৫</span>
            <div>
              <strong className="text-white">পৌর লাইসেন্স পাওয়া</strong>
              <p className="text-sm text-gray-400">ইজারে প্রত্যয়িত ভাড়া চুক্তি প্রয়োজন। খরচ: ১,০০০-২,০০০ SAR।</p>
            </div>
          </li>
          <li className="flex items-start gap-3">
            <span className="bg-desert-primary text-white font-bold rounded-full w-6 h-6 flex items-center justify-center shrink-0 mt-0.5 text-xs">৬</span>
            <div>
              <strong className="text-white">সরকারি সিস্টেমে নিবন্ধন</strong>
              <p className="text-sm text-gray-400">GOSI, ZATCA ও মানবসম্পদ মন্ত্রণালয়ে নিবন্ধন।</p>
            </div>
          </li>
        </ol>
      </div>

      <h2>লুকানো ও পুনরাবৃত্ত খরচ</h2>
      <div className="not-prose glass p-5 rounded-xl mb-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
          <div className="bg-[#0A0E1A] p-3 rounded-lg">
            <h4 className="text-desert-accent font-semibold mb-1">বার্ষিক CR নবায়ন</h4>
            <p className="text-gray-400">৩,০০০-৬,০০০ SAR বার্ষিক।</p>
          </div>
          <div className="bg-[#0A0E1A] p-3 rounded-lg">
            <h4 className="text-desert-accent font-semibold mb-1">অফিস ভাড়া</h4>
            <p className="text-gray-400">১৫,০০০-৬০,০০০+ SAR বার্ষিক।</p>
          </div>
          <div className="bg-[#0A0E1A] p-3 rounded-lg">
            <h4 className="text-desert-accent font-semibold mb-1">GOSI অবদান</h4>
            <p className="text-gray-400">সৌদি কর্মচারী বেতনের ১৮%।</p>
          </div>
          <div className="bg-[#0A0E1A] p-3 rounded-lg">
            <h4 className="text-desert-accent font-semibold mb-1">ইকামা নবায়ন</h4>
            <p className="text-gray-400">প্রতি ইকামায় ৬০০-৯০০ SAR বার্ষিক।</p>
          </div>
        </div>
      </div>

      <h2>বাস্তব উদাহরণ</h2>

      <div className="not-prose glass p-5 rounded-xl mb-6">
        <h3 className="text-white font-semibold mb-3">উদাহরণ ১: রিয়াদে ছোট IT কনসালটেন্সি (একক মালিকানা)</h3>
        <div className="bg-[#0A0E1A] p-4 rounded-lg text-gray-300 text-sm space-y-1.5 font-mono">
          <p>নাম সংরক্ষণ: ৩০০ SAR</p>
          <p>CR ইস্যু: ১,৮০০ SAR</p>
          <p>রিয়াদ চেম্বার: ১,৫০০ SAR</p>
          <p>পৌর লাইসেন্স: ১,২০০ SAR</p>
          <p>PRO সেবা: ৫০০ SAR</p>
          <p>বীমা: ২,০০০ SAR</p>
          <p className="text-desert-primary font-bold mt-2">প্রথম বছরের মোট খরচ: ৭,৩০০ SAR</p>
        </div>
      </div>

      <div className="not-prose glass p-5 rounded-xl mb-6">
        <h3 className="text-white font-semibold mb-3">উদাহরণ ২: জেদ্দায় খুচরা LLC (২ অংশীদার)</h3>
        <div className="bg-[#0A0E1A] p-4 rounded-lg text-gray-300 text-sm space-y-1.5 font-mono">
          <p>নাম সংরক্ষণ: ৪০০ SAR</p>
          <p>CR ইস্যু: ২,৫০০ SAR</p>
          <p>জেদ্দা চেম্বার: ১,৮০০ SAR</p>
          <p>পৌর লাইসেন্স: ২,০০০ SAR</p>
          <p>আইনি + নোটারি: ১,৫০০ SAR</p>
          <p>PRO সেবা: ১,০০০ SAR</p>
          <p>বীমা: ৩,০০০ SAR</p>
          <p>অফিস ভাড়া: ২৫,০০০ SAR</p>
          <p className="text-desert-primary font-bold mt-2">প্রথম বছরের মোট খরচ: ৩৭,২০০ SAR</p>
        </div>
      </div>

      <h2>Sauditoolhub CR Cost Estimator</h2>
      <div className="not-prose glass p-6 rounded-xl mb-8">
        <Link href="/cr-cost-estimator" className="inline-flex items-center gap-2 rounded-xl bg-desert-primary px-8 py-3 text-sm font-bold text-white transition-all hover:bg-desert-primary-dim">
          <Calculator className="h-4 w-4" />
          এখনই আপনার CR খরচ估算 করুন
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
        <Link href="/cr-cost-estimator" className="text-desert-primary font-bold underline">CR Cost Estimator</Link>
        {' '}ব্যবহার করুন।{' '}
        <Link href="/zatca-vat-calculator" className="text-desert-primary font-bold underline">VAT Calculator</Link>
        {' '}এবং{' '}
        <Link href="/nitaqat-simulator" className="text-desert-primary font-bold underline">Nitaqat Simulator</Link>
        {' '}ও দেখুন। আমাদের{' '}
        <Link href="/blog" className="text-desert-primary font-bold underline">ব্লগ</Link> দেখুন।
      </p>

      <div className="not-prose glass p-6 rounded-xl mt-8 text-center">
        <Calculator className="h-10 w-10 text-desert-primary mx-auto mb-3" />
        <h3 className="text-white text-lg font-bold mb-2">আপনার ব্যবসা শুরুর বাজেট পরিকল্পনা করুন</h3>
        <p className="text-gray-400 text-sm mb-4">বিনামূল্যে ইন্টারঅ্যাকটিভ CR কস্ট এস্টিমেটর</p>
        <Link href="/cr-cost-estimator" className="inline-flex items-center gap-2 rounded-xl bg-desert-primary px-8 py-3 text-sm font-bold text-white transition-all hover:bg-desert-primary-dim">
          <Calculator className="h-4 w-4" />
          এখনই估算 করুন
        </Link>
      </div>
    </article>
  )
}

export default async function CrCostGuidePage({ params }: Props) {
  const { locale } = await params
  const isAr = locale === 'ar'
  const isUr = locale === 'ur'
  const isTl = locale === 'tl'
  const isBn = locale === 'bn'
  const isDefault = locale === 'en'
  const pageUrl = isDefault ? `${baseUrl}/guide/cr-cost-starting-business-saudi-arabia-2026` : `${baseUrl}/${locale}/guide/cr-cost-starting-business-saudi-arabia-2026`

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
