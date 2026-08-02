import type { Metadata } from 'next'
import Link from 'next/link'
import { BreadcrumbJsonLd, FAQJsonLd, ArticleJsonLd } from '@/components/JsonLd'
import { Calculator, BarChart3, AlertTriangle, CheckCircle, TrendingUp, Users, Shield, AlertOctagon } from 'lucide-react'

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
    ? 'الدليل الكامل لنطاقات السعودة في السعودية 2026 - نسب التوطين | Sauditoolhub'
    : isUr
    ? 'سعودی عرب میں نطاقات سعودائزیشن کا مکمل گائیڈ 2026 | Sauditoolhub'
    : isTl
    ? 'Kumpletong Gabay sa Nitaqat Saudization sa Saudi Arabia 2026 | Sauditoolhub'
    : isBn
    ? 'সৌদি আরবে নিতাকাত সৌদিকরণ সম্পূর্ণ গাইড 2026 | Sauditoolhub'
    : 'Complete Guide to Nitaqat Saudization Ratios & Bands in Saudi Arabia 2026 | Sauditoolhub'

  const description = isAr
    ? 'دليل كامل لنظام نطاقات السعودة في السعودية 2026. تعرف على نسب التوطين، تصنيفات البلاتيني والأخضر والأصفر والأحمر، وكيفية تحسين تصنيف منشأتك.'
    : isUr
    ? 'سعودی عرب میں نطاقات سعودائزیشن کا مکمل گائیڈ 2026۔ پلاٹینم، گرین، یلو اور ریڈ بینڈز، اور اپنی درجہ بندی بہتر کرنے کے طریقے۔'
    : isTl
    ? 'Kumpletong gabay sa Nitaqat Saudization sa Saudi Arabia 2026. Alamin ang Saudization ratios, bands (Platinum, Green, Yellow, Red), at Paano pagbutihin ang iyong rating.'
    : isBn
    ? 'সৌদি আরবে নিতাকাত সৌদিকরণের সম্পূর্ণ গাইড 2026। সৌদিকরণের হার, প্লাটিনাম, গ্রিন, ইয়েলো ও রেড ব্যান্ড এবং আপনার রেটিং উন্নতির উপায় সম্পর্কে জানুন।'
    : 'Complete guide to Nitaqat Saudization program in Saudi Arabia 2026. Learn about Saudization ratios, Platinum, Green, Yellow, and Red bands, how to calculate your score, and strategies to improve your Nitaqat rating.'

  return {
    title,
    description,
    alternates: {
      canonical: isDefault ? `${baseUrl}/guide/nitaqat-simulator-saudi-arabia-2026` : `${baseUrl}/${locale}/guide/nitaqat-simulator-saudi-arabia-2026`,
      languages: {
        en: `${baseUrl}/guide/nitaqat-simulator-saudi-arabia-2026`,
        ar: `${baseUrl}/ar/guide/nitaqat-simulator-saudi-arabia-2026`,
        ur: `${baseUrl}/ur/guide/nitaqat-simulator-saudi-arabia-2026`,
        tl: `${baseUrl}/tl/guide/nitaqat-simulator-saudi-arabia-2026`,
        bn: `${baseUrl}/bn/guide/nitaqat-simulator-saudi-arabia-2026`,
      },
    },
    openGraph: {
      title,
      description,
      url: isDefault ? `${baseUrl}/guide/nitaqat-simulator-saudi-arabia-2026` : `${baseUrl}/${locale}/guide/nitaqat-simulator-saudi-arabia-2026`,
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
  headline: 'The Complete Guide to Nitaqat Saudization Ratios & Bands in Saudi Arabia 2026',
  description: 'A complete guide to Nitaqat Saudization in Saudi Arabia 2026. Covers Platinum, Green, Yellow, and Red bands, how to calculate your Saudization ratio, strategies to improve your rating, and common compliance mistakes.',
  author: { '@type': 'Person', name: 'Sauditoolhub Team' },
  publisher: { '@type': 'Organization', name: 'Sauditoolhub', logo: { '@type': 'ImageObject', url: `${baseUrl}/logo.png` } },
  datePublished: '2026-01-01',
  dateModified: '2026-07-01',
}

const schemaAr = {
  ...articleSchemaEn,
  headline: 'الدليل الكامل لنطاقات السعودة في السعودية 2026',
  description: 'دليل كامل لنظام نطاقات السعودة في السعودية 2026. يشرح تصنيفات البلاتيني والأخضر والأصفر والأحمر، وكيفية حساب نسبة السعودة، واستراتيجيات تحسين التصنيف.',
}

const schemaUr = {
  ...articleSchemaEn,
  headline: 'سعودی عرب میں نطاقات سعودائزیشن کا مکمل گائیڈ 2026',
  description: 'سعودی عرب میں نطاقات سعودائزیشن کا مکمل گائیڈ 2026۔ پلاٹینم، گرین، یلو اور ریڈ بینڈز، سعودائزیشن ریشو کا حساب، اور درجہ بندی بہتر کرنے کی حکمت عملی۔',
}

const schemaTl = {
  ...articleSchemaEn,
  headline: 'Kumpletong Gabay sa Nitaqat Saudization sa Saudi Arabia 2026',
  description: 'Isang kumpletong gabay sa Nitaqat Saudization sa Saudi Arabia 2026. Sinasaklaw ang Platinum, Green, Yellow, at Red bands, pagkalkula ng Saudization ratio, at mga estratehiya para sa pagpapabuti.',
}

const schemaBn = {
  ...articleSchemaEn,
  headline: 'সৌদি আরবে নিতাকাত সৌদিকরণ সম্পূর্ণ গাইড 2026',
  description: 'সৌদি আরবে নিতাকাত সৌদিকরণের সম্পূর্ণ গাইড 2026। প্লাটিনাম, গ্রিন, ইয়েলো ও রেড ব্যান্ড, সৌদিকরণের হার গণনা এবং রেটিং উন্নতির কৌশল।',
}

const faqsEn = [
  { question: 'What is the Nitaqat program in Saudi Arabia?', answer: 'Nitaqat is a Saudization program by the Ministry of Human Resources and Social Development (MHRSD) that classifies private sector companies into color-coded bands (Platinum, Green, Yellow, Red) based on their percentage of Saudi employees. The band determines a company\'s ability to issue new visas, renew Iqamas, and access government services.' },
  { question: 'How is the Saudization ratio calculated in Nitaqat?', answer: 'The Saudization ratio = (Total Saudi Employees ÷ Total Employees) × 100. Both Saudi and expat employees are counted, including those on the payroll through GOSI. Part-time Saudis also count proportionally. The required ratio varies by industry sector (High, Medium, or Low risk) and company size.' },
  { question: 'What are the Nitaqat color bands and what do they mean?', answer: 'Platinum (top tier): full visa privileges. High Green & Mid Green: good standing, standard services. Low Green: warning zone, restricted new visas. Yellow: probation, severe restrictions on new visa issuance. Red: blocked — cannot renew Iqamas or issue new visas. Companies in Red face the most severe penalties.' },
  { question: 'How does Nitaqat affect visa issuance for my company?', answer: 'Your Nitaqat band directly determines how many new work visas you can issue. Platinum companies have the highest visa quotas. Green companies have standard quotas. Yellow companies face severe restrictions. Red companies cannot issue any new work visas and may face Iqama renewal blocks.' },
  { question: 'What is the difference between High Green and Low Green in Nitaqat?', answer: 'High Green companies enjoy standard visa privileges and can issue new visas regularly. Low Green companies are in a warning zone — they can maintain existing employees but face restrictions on issuing new work visas. Low Green is a step away from Yellow, which carries severe penalties.' },
  { question: 'Can a company move from Red to a higher Nitaqat band?', answer: 'Yes. Companies in Red can improve their band by hiring more Saudi nationals and ensuring proper GOSI registration. The Nitaqat rating is updated quarterly. Once the Saudization ratio meets the threshold for a higher band, the company\'s classification improves automatically.' },
  { question: 'What happens to existing expat employees if my company enters Red?', answer: 'In the Red band, your company cannot renew Iqamas for expat employees. This means employees may have to leave the country or transfer their sponsorship to another company. The company also cannot issue new work visas. This makes Red a critical situation requiring immediate action.' },
  { question: 'Is fake Saudization a crime in Saudi Arabia?', answer: 'Yes. Fake Saudization — hiring Saudis only on paper without actual work — is a serious offense. Penalties include fines of up to 100,000 SAR per violation, prison sentences, blacklisting from government contracts, and downgrading the company\'s Nitaqat band. MHRSD actively audits companies through GOSI data and physical inspections.' },
  { question: 'How often is the Nitaqat rating updated?', answer: 'Nitaqat ratings are updated quarterly based on the latest GOSI contribution data. Companies should monitor their rating every quarter and plan hiring accordingly. The rating is calculated automatically by the MHRSD system based on registered employee data on Qiwa and GOSI.' },
  { question: 'How can I check my company\'s current Nitaqat band?', answer: 'You can check your Nitaqat band through the Qiwa platform (qiwa.sa) or the Ministry of Human Resources portal. Log in with your company credentials and navigate to the Nitaqat section. The Sauditoolhub Nitaqat Simulator at /nitaqat-simulator can also help you test hiring scenarios.' },
]

const faqsAr = [
  { question: 'ما هو برنامج نطاقات في السعودية؟', answer: 'نطاقات هو برنامج سعودة من وزارة الموارد البشرية والتنمية الاجتماعية يصنف شركات القطاع الخاص إلى نطاقات ملونة (بلاتيني، أخضر، أصفر، أحمر) بناءً على نسبة الموظفين السعوديين. يحدد النطاق قدرة الشركة على إصدار تأشيرات جديدة وتجديد الإقامات.' },
  { question: 'كيف تحسب نسبة السعودة في نطاقات؟', answer: 'نسبة السعودة = (إجمالي الموظفين السعوديين ÷ إجمالي الموظفين) × 100. يحسب الموظفون السعوديون والأجانب المسجلون في التأمينات الاجتماعية. النسبة المطلوبة تختلف حسب قطاع الصناعة وحجم المنشأة.' },
  { question: 'ما هي نطاقات الألوان وماذا تعني؟', answer: 'البلاتيني: أعلى تصنيف، صلاحية كاملة للتأشيرات. الأخضر العالي والمتوسط: وضع جيد، خدمات عادية. الأخضر المنخفض: منطقة تحذيرية. الأصفر: تحت المراقبة، قيود شديدة. الأحمر: محظور، لا يمكن تجديد الإقامات أو إصدار تأشيرات.' },
  { question: 'كيف يؤثر نطاقات على إصدار التأشيرات لشركتي؟', answer: 'نطاق شركتك يحدد عدد التأشيرات الجديدة. البلاتيني أعلى حصة. الأخضر حصة عادية. الأصفر قيود شديدة. الأحمر لا يمكنه إصدار أي تأشيرات عمل جديدة.' },
  { question: 'ما الفرق بين الأخضر العالي والأخضر المنخفض؟', answer: 'الأخضر العالي يتمتع بامتيازات تأشيرات عادية. الأخضر المنخفض في منطقة تحذيرية — يمكنه الاحتفاظ بالموظفين لكن مع قيود على إصدار تأشيرات جديدة.' },
  { question: 'هل يمكن للشركة الانتقال من الأحمر إلى نطاق أعلى؟', answer: 'نعم. يمكن للشركات في الأحمر تحسين نطاقها بتوظيف المزيد من السعوديين والتسجيل الصحيح في التأمينات الاجتماعية. يتم تحديث التصنيف كل ثلاثة أشهر.' },
  { question: 'ماذا يحدث للموظفين الوافدين إذا دخلت شركتي النطاق الأحمر؟', answer: 'في الأحمر، لا يمكن للشركة تجديد إقامات الموظفين الوافدين. قد يضطر الموظفون لمغادرة البلاد أو نقل كفالتهم. كما لا يمكن إصدار تأشيرات جديدة.' },
  { question: 'هل السعودة الوهمية جريمة في السعودية؟', answer: 'نعم. السعودة الوهمية — توظيف سعوديين على الورق فقط — جريمة خطيرة. العقوبات تشمل غرامات حتى 100,000 ريال لكل مخالفة، السجن، والحرمان من العقود الحكومية.' },
  { question: 'كم مرة يتم تحديث تصنيف نطاقات؟', answer: 'يتم تحديث تصنيف نطاقات كل ثلاثة أشهر بناءً على بيانات التأمينات الاجتماعية. يجب على الشركات مراقبة تصنيفها والتخطيط للتوظيف وفقاً لذلك.' },
  { question: 'كيف يمكنني التحقق من نطاق شركتي الحالي؟', answer: 'يمكنك التحقق عبر منصة Qiwa (qiwa.sa) أو بوابة وزارة الموارد البشرية. استخدم محاكي نطاقات من Sauditoolhub على /nitaqat-simulator لاختبار سيناريوهات التوظيف.' },
]

const faqsUr = [
  { question: 'سعودی عرب میں نطاقات پروگرام کیا ہے؟', answer: 'نطاقات وزارت افرادی قوت اور سماجی ترقی کا ایک سعودائزیشن پروگرام ہے جو نجی شعبے کی کمپنیوں کو سعودی ملازمین کے فیصد کی بنیاد پر رنگین بینڈز (پلاٹینم، گرین، یلو، ریڈ) میں تقسیم کرتا ہے۔' },
  { question: 'نطاقات میں سعودائزیشن ریشو کیسے حساب کیا جاتا ہے؟', answer: 'سعودائزیشن ریشو = (کل سعودی ملازمین ÷ کل ملازمین) × 100۔ GOSI میں رجسٹرڈ تمام ملازمین شمار ہوتے ہیں۔ مطلوبہ فیصد انڈسٹری سیکٹر اور کمپنی کے سائز پر منحصر ہے۔' },
  { question: 'نطاقات کے رنگین بینڈز کیا ہیں؟', answer: 'پلاٹینم: اعلیٰ درجہ، مکمل ویزا مراعات۔ ہائی گرین اور مڈ گرین: اچھی حیثیت۔ لو گرین: انتباہی زون۔ یلو: پروبیشن۔ ریڈ: بلاک — نئے ویزا اور اقامہ کی تجدید نہیں ہو سکتی۔' },
  { question: 'کیا کوئی کمپنی ریڈ سے اونچے بینڈ میں جا سکتی ہے؟', answer: 'ہاں۔ ریڈ میں کمپنیاں مزید سعودی ملازمین بھرتی کرکے اور GOSI رجسٹریشن درست کرکے اپنا بینڈ بہتر کر سکتی ہیں۔ درجہ بندی ہر تین ماہ بعد اپ ڈیٹ ہوتی ہے۔' },
  { question: 'جعلی سعودائزیشن کیا ہے؟', answer: 'جعلی سعودائزیشن — صرف کاغذوں پر سعودی ملازمین رکھنا — ایک سنگین جرم ہے۔ جرمانہ 100,000 SAR تک، قید، اور سرکاری ٹھیکوں سے محرومی ہو سکتی ہے۔' },
  { question: 'اپنی کمپنی کا نطاقات بینڈ کیسے چیک کروں؟', answer: 'Qiwa پلیٹ فارم (qiwa.sa) کے ذریعے چیک کریں۔ Sauditoolhub کا Nitaqat Simulator /nitaqat-simulator پر بھی استعمال کریں۔' },
]

const faqsTl = [
  { question: 'Ano ang Nitaqat program sa Saudi Arabia?', answer: 'Ang Nitaqat ay isang Saudization program ng Ministry of Human Resources and Social Development na nag-uuri ng mga pribadong kumpanya sa color-coded bands (Platinum, Green, Yellow, Red) batay sa porsyento ng kanilang Saudi employees.' },
  { question: 'Paano kinakalkula ang Saudization ratio sa Nitaqat?', answer: 'Saudization ratio = (Kabuuang Saudi Employees ÷ Kabuuang Employees) × 100. Ang required ratio ay depende sa industry sector at laki ng kompanya.' },
  { question: 'Ano ang mga Nitaqat color bands?', answer: 'Platinum: buong visa privileges. High Green at Mid Green: magandang standing. Low Green: warning zone. Yellow: probasyon, mahigpit na restriksyon. Red: naka-block — hindi maaaring mag-renew ng Iqama o mag-isyu ng bagong visa.' },
  { question: 'Paano ko masusuri ang Nitaqat band ng aking kompanya?', answer: 'Suriin sa pamamagitan ng Qiwa platform (qiwa.sa). Gamitin ang Sauditoolhub Nitaqat Simulator sa /nitaqat-simulator para sa pagsubok ng hiring scenarios.' },
]

const faqsBn = [
  { question: 'সৌদি আরবে নিতাকাত প্রোগ্রাম কী?', answer: 'নিতাকাত হল মানবসম্পদ ও সামাজিক উন্নয়ন মন্ত্রণালয়ের একটি সৌদিকরণ প্রোগ্রাম যা বেসরকারি কোম্পানিগুলিকে তাদের সৌদি কর্মচারীর শতাংশের ভিত্তিতে রঙ-কোডেড ব্যান্ডে (প্লাটিনাম, গ্রিন, ইয়েলো, রেড) শ্রেণিবদ্ধ করে।' },
  { question: 'নিতাকাতে সৌদিকরণের হার কীভাবে গণনা করা হয়?', answer: 'সৌদিকরণের হার = (মোট সৌদি কর্মচারী ÷ মোট কর্মচারী) × ১০০। প্রয়োজনীয় শতাংশ শিল্প খাত এবং কোম্পানির আকারের উপর নির্ভর করে।' },
  { question: 'নিতাকাতের রঙিন ব্যান্ডগুলি কী কী?', answer: 'প্লাটিনাম: সম্পূর্ণ ভিসা সুবিধা। হাই গ্রিন ও মিড গ্রিন: ভাল অবস্থা। লো গ্রিন: সতর্কতা অঞ্চল। ইয়েলো: প্রোবেশন। রেড: ব্লক — নতুন ভিসা বা ইকামা রিনিউ করা যায় না।' },
  { question: 'আমার কোম্পানির নিতাকাত ব্যান্ড কীভাবে পরীক্ষা করব?', answer: 'Qiwa প্ল্যাটফর্ম (qiwa.sa) এর মাধ্যমে পরীক্ষা করুন। /nitaqat-simulator-এ Sauditoolhub Nitaqat Simulator ব্যবহার করুন।' },
]

function EnContent() {
  return (
    <article className="prose prose-invert max-w-none prose-headings:text-desert-primary prose-a:text-desert-primary prose-strong:text-white prose-li:text-gray-300">
      <h1>The Complete Guide to Nitaqat Saudization Ratios &amp; Bands in Saudi Arabia 2026</h1>

      <div className="not-prose glass p-6 rounded-xl mb-8">
        <p className="text-gray-300 text-lg leading-relaxed">
          For any business operating in Saudi Arabia, the Nitaqat program is one of the most consequential regulatory frameworks you will deal with. Your company's Nitaqat classification — Platinum, Green, Yellow, or Red — directly determines whether you can hire new expat employees, renew Iqamas, change employee professions, or even continue normal operations.
        </p>
        <p className="text-gray-300 text-lg leading-relaxed mt-4">
          This guide explains <strong>everything you need to know about Nitaqat in 2026</strong>. We cover the color band system, how Saudization ratios are calculated, industry-specific thresholds, real-life examples, strategies to improve your rating, and common compliance pitfalls.
        </p>
        <p className="text-gray-300 text-lg leading-relaxed mt-4">
          Use our free{' '}
          <Link href="/nitaqat-simulator" className="text-desert-primary font-bold underline">
            Nitaqat 'What-If' Simulator
          </Link>{' '}
          to test different hiring scenarios and see how they would affect your company's classification.
        </p>
      </div>

      <h2>What is the Nitaqat Program?</h2>
      <p>
        Nitaqat (نطاقات) is the Saudization program administered by the Ministry of Human Resources and Social Development (MHRSD). It classifies private sector companies into color-coded bands based on the percentage of Saudi nationals they employ. The program was introduced as part of Saudi Vision 2030 to increase workforce participation of Saudi citizens and reduce unemployment.
      </p>
      <p>
        The program's name comes from the Arabic word "nitaqat" meaning "ranges" or "bands" — reflecting the color-coded classification system. Every company registered with the Ministry of Commerce and the General Organization for Social Insurance (GOSI) is automatically enrolled in Nitaqat and receives a quarterly classification.
      </p>

      <h2>Understanding Nitaqat Bands (The Color System)</h2>

      <div className="not-prose glass p-5 rounded-xl mb-6">
        <div className="space-y-5">
          <div className="flex items-start gap-3">
            <Shield className="h-6 w-6 text-desert-gold mt-1 shrink-0" />
            <div>
              <h3 className="text-desert-gold font-bold m-0">Platinum</h3>
              <p className="text-gray-400 text-sm mt-1">The highest Nitaqat tier. Companies in Platinum enjoy full visa privileges, the highest visa quotas, and priority access to government services. This band is achieved by maintaining a Saudization ratio significantly above the minimum threshold for your sector.</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <CheckCircle className="h-6 w-6 text-green-400 mt-1 shrink-0" />
            <div>
              <h3 className="text-green-400 font-bold m-0">High Green &amp; Mid Green</h3>
              <p className="text-gray-400 text-sm mt-1">Companies in these bands have good standing. They can issue new visas, renew Iqamas, and access standard government services. High Green indicates a strong Saudization ratio, while Mid Green indicates the minimum acceptable level.</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <AlertTriangle className="h-6 w-6 text-yellow-400 mt-1 shrink-0" />
            <div>
              <h3 className="text-yellow-400 font-bold m-0">Low Green</h3>
              <p className="text-gray-400 text-sm mt-1">This is a warning zone. Low Green companies can maintain their existing expat workforce but face restrictions on issuing new work visas. It is the last acceptable band before entering Yellow — a steep drop with severe consequences.</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <AlertOctagon className="h-6 w-6 text-orange-400 mt-1 shrink-0" />
            <div>
              <h3 className="text-orange-400 font-bold m-0">Yellow</h3>
              <p className="text-gray-400 text-sm mt-1">Yellow is a probationary band. Companies in Yellow face severe restrictions: limited or no new work visas, restrictions on Iqama renewals, and increased scrutiny from MHRSD. Extended time in Yellow can lead to a downgrade to Red.</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <AlertOctagon className="h-6 w-6 text-red-400 mt-1 shrink-0" />
            <div>
              <h3 className="text-red-400 font-bold m-0">Red</h3>
              <p className="text-gray-400 text-sm mt-1">The most critical band. Red companies cannot issue any new work visas, renew expat Iqamas, or change employee professions (Naqal Mahna). Existing expat employees may be forced to transfer sponsorship or leave the country. Immediate action is required to avoid business disruption.</p>
            </div>
          </div>
        </div>
      </div>

      <h2>How Nitaqat Affects Your Business (2026 Rules)</h2>

      <div className="not-prose glass p-5 rounded-xl mb-6">
        <h3 className="text-white font-semibold mb-2">Impact on New Work Visa Issuance</h3>
        <p className="text-gray-300 text-sm">Your Nitaqat band directly determines your visa quota. Platinum companies have the highest allocation. Green companies have a standard quota proportional to their Saudi workforce. Yellow companies face severe reductions. Red companies cannot issue any new work visas at all.</p>
      </div>

      <div className="not-prose glass p-5 rounded-xl mb-6">
        <h3 className="text-white font-semibold mb-2">Impact on Iqama Renewal</h3>
        <p className="text-gray-300 text-sm">Companies in Platinum and Green can renew Iqamas without restrictions. Yellow companies may face limits on renewal numbers. Red companies cannot renew expat Iqamas at all — meaning every employee's Iqama that expires puts them at risk of overstay penalties.</p>
      </div>

      <div className="not-prose glass p-5 rounded-xl mb-6">
        <h3 className="text-white font-semibold mb-2">Impact on Changing Professions (Naqal Mahna)</h3>
        <p className="text-gray-300 text-sm">Changing an employee's profession on their Iqama requires the company to be in at least the Green band. Yellow and Red companies cannot process Naqal Mahna requests. This restricts workforce flexibility significantly.</p>
      </div>

      <h2>How to Calculate Your Saudization Ratio</h2>

      <div className="not-prose glass p-5 rounded-xl mb-6">
        <h3 className="text-desert-primary font-semibold mb-2">The Formula</h3>
        <div className="bg-[#0A0E1A] p-4 rounded-lg text-gray-300 text-sm font-mono">
          <p>Saudization Ratio = (Total Saudi Employees ÷ Total Employees) × 100</p>
        </div>
        <p className="text-gray-300 text-sm mt-3">Your Saudization ratio is calculated based on employee data registered with GOSI. Both full-time and part-time Saudi employees count (part-time counts proportionally). Expat employees on valid Iqamas are counted in the total. The required ratio varies by:</p>
        <ul className="space-y-1 text-gray-400 text-sm mt-2 list-disc list-inside">
          <li><strong>Industry Sector:</strong> High-risk sectors (e.g., retail, construction) have lower required ratios. Medium and Low-risk sectors (e.g., IT, finance) have higher required ratios.</li>
          <li><strong>Company Size:</strong> Companies with fewer than 10 employees may have different thresholds than larger enterprises.</li>
        </ul>
      </div>

      <h2>Real-Life Calculation Examples</h2>

      <div className="not-prose glass p-5 rounded-xl mb-6">
        <h3 className="text-white font-semibold mb-3">Example 1: Small Retail Shop (10 Employees)</h3>
        <p className="text-gray-300 text-sm mb-2">A small retail store in a high-risk sector with 10 total employees needs to maintain Green status.</p>
        <div className="bg-[#0A0E1A] p-4 rounded-lg text-gray-300 text-sm space-y-1 font-mono">
          <p>Total Employees: 10 (all full-time)</p>
          <p>Current Saudi Employees: 2</p>
          <p>Saudization Ratio: (2 ÷ 10) × 100 = <strong>20%</strong></p>
          <p className="mt-2 text-yellow-400">Required for Green (high-risk, small): ~15-20%</p>
          <p className="text-green-400">Status: <strong>Green (Low Green threshold met)</strong></p>
          <p className="mt-1 text-gray-400">If Saudi count drops to 1: Ratio = 10% → <span className="text-red-400">Yellow/Red zone</span></p>
          <p className="text-gray-400">Hiring 1 more Saudi (total 3): Ratio = 30% → <span className="text-green-400">High Green</span></p>
        </div>
      </div>

      <div className="not-prose glass p-5 rounded-xl mb-6">
        <h3 className="text-white font-semibold mb-3">Example 2: Large IT Company (100 Employees)</h3>
        <p className="text-gray-300 text-sm mb-2">An IT services company in a low-risk sector aiming for Platinum classification.</p>
        <div className="bg-[#0A0E1A] p-4 rounded-lg text-gray-300 text-sm space-y-1 font-mono">
          <p>Total Employees: 100 (95 full-time, 5 part-time)</p>
          <p>Current Saudi Employees: 40</p>
          <p>Saudization Ratio: (40 ÷ 100) × 100 = <strong>40%</strong></p>
          <p className="mt-2 text-gray-400">Required for Platinum (low-risk, large): ~35-40%</p>
          <p className="text-desert-gold">Status: <strong>Platinum (top tier achieved)</strong></p>
          <p className="mt-1 text-gray-400">New visa quota: Maximum allocation per quarter</p>
          <p className="text-gray-400">To maintain: Keep ratio above 35% through regular Saudi hiring</p>
        </div>
      </div>

      <h2>Strategies to Improve Your Nitaqat Rating</h2>

      <div className="not-prose glass p-5 rounded-xl mb-6">
        <ul className="space-y-4 text-gray-300">
          <li className="flex items-start gap-3">
            <TrendingUp className="h-5 w-5 text-desert-primary mt-0.5 shrink-0" />
            <div>
              <strong className="text-white">Hire Fresh Saudi Graduates (Taqat Program)</strong>
              <p className="text-sm text-gray-400">The Taqat program connects employers with Saudi job seekers. Hiring fresh graduates can improve your ratio while building a loyal workforce. Many graduates qualify for government-subsidized salary programs that reduce your cost.</p>
            </div>
          </li>
          <li className="flex items-start gap-3">
            <Users className="h-5 w-5 text-desert-primary mt-0.5 shrink-0" />
            <div>
              <strong className="text-white">Replace Expat Roles with Saudis</strong>
              <p className="text-sm text-gray-400">Audit your current workforce to identify roles that can be filled by Saudi nationals. Customer service, administration, sales, and support roles are often easier to Saudi-ize than highly specialized technical positions.</p>
            </div>
          </li>
          <li className="flex items-start gap-3">
            <CheckCircle className="h-5 w-5 text-desert-primary mt-0.5 shrink-0" />
            <div>
              <strong className="text-white">Ensure Proper GOSI Registration</strong>
              <p className="text-sm text-gray-400">All Saudi employees must be registered with GOSI within the legally required timeframe. Delayed or incorrect GOSI registration can result in your Saudi employees not being counted in your Nitaqat ratio and can trigger fines.</p>
            </div>
          </li>
          <li className="flex items-start gap-3">
            <BarChart3 className="h-5 w-5 text-desert-primary mt-0.5 shrink-0" />
            <div>
              <strong className="text-white">Monitor Your Ratio Quarterly</strong>
              <p className="text-sm text-gray-400">Nitaqat ratings are updated every quarter. Track your ratio monthly to avoid surprises. Use our{' '}
                <Link href="/nitaqat-simulator" className="text-desert-primary underline">Nitaqat Simulator</Link>
                {' '}to test how different hiring decisions would affect your classification.
              </p>
            </div>
          </li>
        </ul>
      </div>

      <h2>Common Mistakes Businesses Make with Nitaqat</h2>

      <div className="not-prose glass p-5 rounded-xl mb-6">
        <ul className="space-y-4 text-gray-300">
          <li className="flex items-start gap-3">
            <AlertTriangle className="h-5 w-5 text-desert-accent mt-0.5 shrink-0" />
            <div>
              <strong className="text-white">"Fake" Saudization (Hiring Saudis for Show)</strong>
              <p className="text-sm text-gray-400">Hiring Saudi nationals only on paper — without actual work, salary payments, or GOSI contributions — is illegal. MHRSD actively audits companies through GOSI data, bank transactions, and physical inspections. Penalties include fines up to 100,000 SAR per violation, prison sentences, and immediate downgrade to Red.</p>
            </div>
          </li>
          <li className="flex items-start gap-3">
            <AlertTriangle className="h-5 w-5 text-desert-accent mt-0.5 shrink-0" />
            <div>
              <strong className="text-white">Not Updating Employee Data on Qiwa/Muqeem</strong>
              <p className="text-sm text-gray-400">Employee records on Qiwa and Muqeem must be kept current. Expired Iqamas, missing contract data, or inaccurate job titles can cause your Saudization ratio to be calculated incorrectly, potentially dropping your band unfairly.</p>
            </div>
          </li>
          <li className="flex items-start gap-3">
            <AlertTriangle className="h-5 w-5 text-desert-accent mt-0.5 shrink-0" />
            <div>
              <strong className="text-white">Ignoring Quarterly Classification Updates</strong>
              <p className="text-sm text-gray-400">Many companies fail to monitor their Nitaqat band until they need to issue a visa — only to discover they have dropped to Yellow or Red. Check your band at least once per month to avoid operational disruptions.</p>
            </div>
          </li>
          <li className="flex items-start gap-3">
            <AlertTriangle className="h-5 w-5 text-desert-accent mt-0.5 shrink-0" />
            <div>
              <strong className="text-white">Not Counting Part-Time Saudis</strong>
              <p className="text-sm text-gray-400">Part-time Saudi employees count toward your ratio proportionally. Many businesses overlook this. Hiring Saudi students or retirees on part-time contracts can provide a meaningful boost to your ratio.</p>
            </div>
          </li>
        </ul>
      </div>

      <h2>How to Use the Sauditoolhub Nitaqat 'What-If' Simulator</h2>
      <div className="not-prose glass p-6 rounded-xl mb-8">
        <div className="flex items-center gap-3 mb-4">
          <BarChart3 className="h-8 w-8 text-desert-primary" />
          <h3 className="text-white text-lg font-bold m-0">Sauditoolhub Nitaqat Simulator</h3>
        </div>
        <p className="text-gray-300 mb-4">
          Our interactive simulator lets you test different hiring scenarios before making decisions. Enter your current employee data, then adjust the number of Saudi and expat employees to see how your Nitaqat band would change. Perfect for HR managers planning their workforce strategy.
        </p>
        <ul className="space-y-2 text-gray-400 text-sm mb-4">
          <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-desert-primary" /> Test hiring and replacement scenarios instantly</li>
          <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-desert-primary" /> Supports all industry sectors and company sizes</li>
          <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-desert-primary" /> Shows real-time band changes (Platinum → Red)</li>
          <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-desert-primary" /> Free — no registration required</li>
        </ul>
        <Link href="/nitaqat-simulator" className="inline-flex items-center gap-2 rounded-xl bg-desert-primary px-8 py-3 text-sm font-bold text-white transition-all hover:bg-desert-primary-dim">
          <BarChart3 className="h-4 w-4" />
          Try the Simulator Now
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
        The Nitaqat program is not just a compliance requirement — it is a strategic business factor in Saudi Arabia. Your Nitaqat band affects your ability to hire, retain, and manage your workforce. Understanding how the system works, monitoring your ratio regularly, and planning your Saudi hiring strategically will keep your business in a strong position.
      </p>
      <p>
        Use our{' '}
        <Link href="/nitaqat-simulator" className="text-desert-primary font-bold underline">Nitaqat Simulator</Link>
        {' '}to plan your workforce strategy. Also explore our{' '}
        <Link href="/zatca-vat-calculator" className="text-desert-primary font-bold underline">ZATCA VAT Calculator</Link>
        {' '}for tax compliance and{' '}
        <Link href="/cr-cost-estimator" className="text-desert-primary font-bold underline">CR Cost Estimator</Link>
        {' '}for business setup costs. Visit our{' '}
        <Link href="/blog" className="text-desert-primary font-bold underline">Blog</Link>
        {' '}for more business and expat guides.
      </p>

      <div className="not-prose glass p-6 rounded-xl mt-8 text-center">
        <BarChart3 className="h-10 w-10 text-desert-primary mx-auto mb-3" />
        <h3 className="text-white text-lg font-bold mb-2">Test Your Nitaqat Scenario</h3>
        <p className="text-gray-400 text-sm mb-4">Free interactive simulator — no signup required</p>
        <Link href="/nitaqat-simulator" className="inline-flex items-center gap-2 rounded-xl bg-desert-primary px-8 py-3 text-sm font-bold text-white transition-all hover:bg-desert-primary-dim">
          <BarChart3 className="h-4 w-4" />
          Open Nitaqat Simulator
        </Link>
      </div>
    </article>
  )
}

function ArContent() {
  return (
    <article className="prose prose-invert max-w-none prose-headings:text-desert-primary prose-a:text-desert-primary prose-strong:text-white prose-li:text-gray-300" dir="rtl">
      <h1>الدليل الكامل لنطاقات السعودة في السعودية 2026</h1>

      <div className="not-prose glass p-6 rounded-xl mb-8">
        <p className="text-gray-300 text-lg leading-relaxed">
          لأي منشأة تعمل في السعودية، برنامج نطاقات هو أحد أهم الأطر التنظيمية التي ستتعامل معها. تصنيف منشأتك — بلاتيني، أخضر، أصفر، أو أحمر — يحدد بشكل مباشر قدرتك على توظيف موظفين جدد، تجديد الإقامات، تغيير المهن، أو حتى استمرار العمليات العادية.
        </p>
        <p className="text-gray-300 text-lg leading-relaxed mt-4">
          هذا الدليل يشرح <strong>كل ما تحتاج معرفته عن نطاقات في 2026</strong>. نغطي نظام النطاقات الملونة، كيفية حساب نسب السعودة، الأمثلة العملية، استراتيجيات تحسين التصنيف، والأخطاء الشائعة.
        </p>
        <p className="text-gray-300 text-lg leading-relaxed mt-4">
          استخدم{' '}
          <Link href="/nitaqat-simulator" className="text-desert-primary font-bold underline">
            محاكي نطاقات
          </Link>{' '}
          المجاني من Sauditoolhub لاختبار سيناريوهات التوظيف المختلفة.
        </p>
      </div>

      <h2>ما هو برنامج نطاقات؟</h2>
      <p>نطاقات هو برنامج سعودة من وزارة الموارد البشرية والتنمية الاجتماعية. يصنف شركات القطاع الخاص إلى نطاقات ملونة بناءً على نسبة الموظفين السعوديين. أُطلق البرنامج كجزء من رؤية السعودية 2030 لزيادة مشاركة المواطنين في القوى العاملة.</p>

      <h2>فهم نطاقات الألوان</h2>

      <div className="not-prose glass p-5 rounded-xl mb-6">
        <div className="space-y-4">
          <div className="flex items-start gap-3">
            <Shield className="h-5 w-5 text-desert-gold mt-1 shrink-0" />
            <div>
              <h3 className="text-desert-gold font-bold m-0">البلاتيني</h3>
              <p className="text-gray-400 text-sm">أعلى تصنيف. امتيازات كاملة للتأشيرات وأعلى حصة وأولوية في الخدمات الحكومية.</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <CheckCircle className="h-5 w-5 text-green-400 mt-1 shrink-0" />
            <div>
              <h3 className="text-green-400 font-bold m-0">الأخضر العالي والمتوسط</h3>
              <p className="text-gray-400 text-sm">وضع جيد. يمكن إصدار تأشيرات وتجديد إقامات والوصول للخدمات الحكومية.</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <AlertTriangle className="h-5 w-5 text-yellow-400 mt-1 shrink-0" />
            <div>
              <h3 className="text-yellow-400 font-bold m-0">الأخضر المنخفض</h3>
              <p className="text-gray-400 text-sm">منطقة تحذيرية. قيود على إصدار تأشيرات عمل جديدة.</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <AlertOctagon className="h-5 w-5 text-orange-400 mt-1 shrink-0" />
            <div>
              <h3 className="text-orange-400 font-bold m-0">الأصفر</h3>
              <p className="text-gray-400 text-sm">تحت المراقبة. قيود شديدة على التأشيرات وتجديد الإقامات.</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <AlertOctagon className="h-5 w-5 text-red-400 mt-1 shrink-0" />
            <div>
              <h3 className="text-red-400 font-bold m-0">الأحمر</h3>
              <p className="text-gray-400 text-sm">الأخطر. لا يمكن إصدار تأشيرات أو تجديد إقامات أو تغيير مهن.</p>
            </div>
          </div>
        </div>
      </div>

      <h2>كيفية حساب نسبة السعودة</h2>
      <div className="not-prose glass p-5 rounded-xl mb-6">
        <div className="bg-[#0A0E1A] p-4 rounded-lg text-gray-300 text-sm font-mono">
          <p>نسبة السعودة = (عدد السعوديين ÷ إجمالي الموظفين) × 100</p>
        </div>
      </div>

      <h2>أمثلة عملية</h2>

      <div className="not-prose glass p-5 rounded-xl mb-6">
        <h3 className="text-white font-semibold mb-3">مثال 1: متجر تجزئة صغير (10 موظفين)</h3>
        <div className="bg-[#0A0E1A] p-4 rounded-lg text-gray-300 text-sm space-y-1 font-mono">
          <p>إجمالي الموظفين: 10</p>
          <p>السعوديون حالياً: 2</p>
          <p>النسبة: (2 ÷ 10) × 100 = <strong>20%</strong></p>
          <p className="text-green-400">الحالة: أخضر</p>
        </div>
      </div>

      <div className="not-prose glass p-5 rounded-xl mb-6">
        <h3 className="text-white font-semibold mb-3">مثال 2: شركة تقنية كبيرة (100 موظف)</h3>
        <div className="bg-[#0A0E1A] p-4 rounded-lg text-gray-300 text-sm space-y-1 font-mono">
          <p>إجمالي الموظفين: 100</p>
          <p>السعوديون: 40</p>
          <p>النسبة: <strong>40%</strong></p>
          <p className="text-desert-gold">الحالة: بلاتيني</p>
        </div>
      </div>

      <h2>الأخطاء الشائعة مع نطاقات</h2>
      <div className="not-prose glass p-5 rounded-xl mb-6">
        <ul className="space-y-3 text-gray-300">
          <li><AlertTriangle className="h-4 w-4 text-desert-accent inline" /> السعودة الوهمية — عقوبات تصل إلى 100,000 ريال</li>
          <li><AlertTriangle className="h-4 w-4 text-desert-accent inline" /> عدم تحديث بيانات الموظفين على Qiwa</li>
          <li><AlertTriangle className="h-4 w-4 text-desert-accent inline" /> تجاهل تحديثات التصنيف الربعية</li>
          <li><AlertTriangle className="h-4 w-4 text-desert-accent inline" /> عدم احتساب السعوديين بدوام جزئي</li>
        </ul>
      </div>

      <h2>محاكي نطاقات من Sauditoolhub</h2>
      <div className="not-prose glass p-6 rounded-xl mb-8">
        <Link href="/nitaqat-simulator" className="inline-flex items-center gap-2 rounded-xl bg-desert-primary px-8 py-3 text-sm font-bold text-white transition-all hover:bg-desert-primary-dim">
          <BarChart3 className="h-4 w-4" />
          جرب المحاكي الآن
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
        نطاقات ليس مجرد متطلب امتثال — إنه عامل استراتيجي في السعودية. استخدم{' '}
        <Link href="/nitaqat-simulator" className="text-desert-primary font-bold underline">محاكي نطاقات</Link>
        {' '}و{' '}
        <Link href="/zatca-vat-calculator" className="text-desert-primary font-bold underline">حاسبة ضريبة القيمة المضافة</Link>
        {' '}و{' '}
        <Link href="/cr-cost-estimator" className="text-desert-primary font-bold underline">مقدر تكاليف السجل التجاري</Link>
        . زوروا{' '}
        <Link href="/blog" className="text-desert-primary font-bold underline">المدونة</Link>.
      </p>

      <div className="not-prose glass p-6 rounded-xl mt-8 text-center">
        <BarChart3 className="h-10 w-10 text-desert-primary mx-auto mb-3" />
        <h3 className="text-white text-lg font-bold mb-2">اختبر سيناريو نطاقاتك</h3>
        <p className="text-gray-400 text-sm mb-4">محاكي مجاني — بدون تسجيل</p>
        <Link href="/nitaqat-simulator" className="inline-flex items-center gap-2 rounded-xl bg-desert-primary px-8 py-3 text-sm font-bold text-white transition-all hover:bg-desert-primary-dim">
          <BarChart3 className="h-4 w-4" />
          افتح المحاكي
        </Link>
      </div>
    </article>
  )
}

function UrContent() {
  return (
    <article className="prose prose-invert max-w-none prose-headings:text-desert-primary prose-a:text-desert-primary prose-strong:text-white prose-li:text-gray-300" dir="rtl">
      <h1>سعودی عرب میں نطاقات سعودائزیشن کا مکمل گائیڈ 2026</h1>

      <div className="not-prose glass p-6 rounded-xl mb-8">
        <p className="text-gray-300 text-lg leading-relaxed">
          سعودی عرب میں کاروبار کرنے والی کسی بھی کمپنی کے لیے، نطاقات پروگرام انتہائی اہم ریگولیٹری فریم ورکس میں سے ایک ہے۔ آپ کی کمپنی کی نطاقات درجہ بندی — پلاٹینم، گرین، یلو، یا ریڈ — براہ راست یہ طے کرتی ہے کہ آپ نئے ملازمین بھرتی کر سکتے ہیں، اقامہ کی تجدید کر سکتے ہیں، یا معمول کے کام جاری رکھ سکتے ہیں۔
        </p>
        <p className="text-gray-300 text-lg leading-relaxed mt-4">
          یہ گائیڈ <strong>2026 میں نطاقات کے بارے میں ہر وہ چیز</strong> بیان کرتا ہے۔
        </p>
        <p className="text-gray-300 text-lg leading-relaxed mt-4">
          ہمارا مفت{' '}
          <Link href="/nitaqat-simulator" className="text-desert-primary font-bold underline">
            Nitaqat Simulator
          </Link>{' '}
          استعمال کریں۔
        </p>
      </div>

      <h2>نطاقات پروگرام کیا ہے؟</h2>
      <p>نطاقات وزارت افرادی قوت اور سماجی ترقی کا ایک سعودائزیشن پروگرام ہے جو نجی شعبے کی کمپنیوں کو سعودی ملازمین کے فیصد کی بنیاد پر رنگین بینڈز میں تقسیم کرتا ہے۔</p>

      <h2>نطاقات کے رنگین بینڈز</h2>
      <div className="not-prose glass p-5 rounded-xl mb-6">
        <div className="space-y-3">
          <p><Shield className="h-4 w-4 text-desert-gold inline" /> <strong className="text-desert-gold">پلاٹینم:</strong> مکمل ویزا مراعات</p>
          <p><CheckCircle className="h-4 w-4 text-green-400 inline" /> <strong className="text-green-400">ہائی گرین:</strong> اچھی حیثیت</p>
          <p><AlertTriangle className="h-4 w-4 text-yellow-400 inline" /> <strong className="text-yellow-400">لو گرین:</strong> انتباہی زون</p>
          <p><AlertOctagon className="h-4 w-4 text-orange-400 inline" /> <strong className="text-orange-400">یلو:</strong> پروبیشن</p>
          <p><AlertOctagon className="h-4 w-4 text-red-400 inline" /> <strong className="text-red-400">ریڈ:</strong> مکمل بلاک</p>
        </div>
      </div>

      <h2>Sauditoolhub Nitaqat Simulator</h2>
      <div className="not-prose glass p-6 rounded-xl mb-8">
        <Link href="/nitaqat-simulator" className="inline-flex items-center gap-2 rounded-xl bg-desert-primary px-8 py-3 text-sm font-bold text-white transition-all hover:bg-desert-primary-dim">
          <BarChart3 className="h-4 w-4" />
          سمیولیٹر آزمائیں
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
        نطاقات کی تعمیل سعودی عرب میں ہر کاروبار کے لیے ایک لازمی حیثیت ہے۔{' '}
        <Link href="/nitaqat-simulator" className="text-desert-primary font-bold underline">Nitaqat Simulator</Link>
        {' '}استعمال کریں۔{' '}
        <Link href="/zatca-vat-calculator" className="text-desert-primary font-bold underline">VAT کیلکولیٹر</Link>
        {' '}اور{' '}
        <Link href="/cr-cost-estimator" className="text-desert-primary font-bold underline">CR کیلکولیٹر</Link>
        {' '}بھی دیکھیں۔{' '}
        <Link href="/blog" className="text-desert-primary font-bold underline">بلاگ</Link> پر مزید۔
      </p>

      <div className="not-prose glass p-6 rounded-xl mt-8 text-center">
        <BarChart3 className="h-10 w-10 text-desert-primary mx-auto mb-3" />
        <h3 className="text-white text-lg font-bold mb-2">اپنا منظر نامہ آزمائیں</h3>
        <p className="text-gray-400 text-sm mb-4">مفت انٹرایکٹو سمیولیٹر</p>
        <Link href="/nitaqat-simulator" className="inline-flex items-center gap-2 rounded-xl bg-desert-primary px-8 py-3 text-sm font-bold text-white transition-all hover:bg-desert-primary-dim">
          <BarChart3 className="h-4 w-4" />
          سمیولیٹر کھولیں
        </Link>
      </div>
    </article>
  )
}

function TlContent() {
  return (
    <article className="prose prose-invert max-w-none prose-headings:text-desert-primary prose-a:text-desert-primary prose-strong:text-white prose-li:text-gray-300">
      <h1>Kumpletong Gabay sa Nitaqat Saudization sa Saudi Arabia 2026</h1>

      <div className="not-prose glass p-6 rounded-xl mb-8">
        <p className="text-gray-300 text-lg leading-relaxed">
          Para sa anumang negosyo na nagpapatakbo sa Saudi Arabia, ang Nitaqat program ay isa sa pinakamahalagang regulatory frameworks na haharapin mo. Ang iyong Nitaqat classification — Platinum, Green, Yellow, o Red — ay direktang tumutukoy kung maaari kang kumuha ng bagong expat employees, mag-renew ng Iqama, o magpatuloy sa normal na operasyon.
        </p>
        <p className="text-gray-300 text-lg leading-relaxed mt-4">
          Saklaw ng gabay na ito ang <strong>lahat ng kailangan mong malaman tungkol sa Nitaqat sa 2026</strong>.
        </p>
        <p className="text-gray-300 text-lg leading-relaxed mt-4">
          Gamitin ang aming libreng{' '}
          <Link href="/nitaqat-simulator" className="text-desert-primary font-bold underline">
            Nitaqat Simulator
          </Link>.
        </p>
      </div>

      <h2>Ano ang Nitaqat Program?</h2>
      <p>Ang Nitaqat ay isang Saudization program ng Ministry of Human Resources and Social Development na nag-uuri ng mga pribadong kumpanya sa color-coded bands batay sa porsyento ng kanilang Saudi employees.</p>

      <h2>Nitaqat Color Bands</h2>
      <div className="not-prose glass p-5 rounded-xl mb-6">
        <div className="space-y-3">
          <p><Shield className="h-4 w-4 text-desert-gold inline" /> <strong className="text-desert-gold">Platinum:</strong> Buong visa privileges</p>
          <p><CheckCircle className="h-4 w-4 text-green-400 inline" /> <strong className="text-green-400">High Green:</strong> Magandang standing</p>
          <p><AlertTriangle className="h-4 w-4 text-yellow-400 inline" /> <strong className="text-yellow-400">Low Green:</strong> Warning zone</p>
          <p><AlertOctagon className="h-4 w-4 text-orange-400 inline" /> <strong className="text-orange-400">Yellow:</strong> Probation</p>
          <p><AlertOctagon className="h-4 w-4 text-red-400 inline" /> <strong className="text-red-400">Red:</strong> Ganap na block</p>
        </div>
      </div>

      <h2>Sauditoolhub Nitaqat Simulator</h2>
      <div className="not-prose glass p-6 rounded-xl mb-8">
        <Link href="/nitaqat-simulator" className="inline-flex items-center gap-2 rounded-xl bg-desert-primary px-8 py-3 text-sm font-bold text-white transition-all hover:bg-desert-primary-dim">
          <BarChart3 className="h-4 w-4" />
          Subukan ang Simulator
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
        <Link href="/nitaqat-simulator" className="text-desert-primary font-bold underline">Nitaqat Simulator</Link>
        {' '}ng Sauditoolhub. Tingnan din ang{' '}
        <Link href="/zatca-vat-calculator" className="text-desert-primary font-bold underline">VAT Calculator</Link>
        {' '}at{' '}
        <Link href="/cr-cost-estimator" className="text-desert-primary font-bold underline">CR Cost Estimator</Link>
        . Bisitahin ang aming{' '}
        <Link href="/blog" className="text-desert-primary font-bold underline">Blog</Link>.
      </p>

      <div className="not-prose glass p-6 rounded-xl mt-8 text-center">
        <BarChart3 className="h-10 w-10 text-desert-primary mx-auto mb-3" />
        <h3 className="text-white text-lg font-bold mb-2">Subukan ang Nitaqat Simulator</h3>
        <p className="text-gray-400 text-sm mb-4">Libreng interactive simulator</p>
        <Link href="/nitaqat-simulator" className="inline-flex items-center gap-2 rounded-xl bg-desert-primary px-8 py-3 text-sm font-bold text-white transition-all hover:bg-desert-primary-dim">
          <BarChart3 className="h-4 w-4" />
          Buksan ang Simulator
        </Link>
      </div>
    </article>
  )
}

function BnContent() {
  return (
    <article className="prose prose-invert max-w-none prose-headings:text-desert-primary prose-a:text-desert-primary prose-strong:text-white prose-li:text-gray-300">
      <h1>সৌদি আরবে নিতাকাত সৌদিকরণ সম্পূর্ণ গাইড 2026</h1>

      <div className="not-prose glass p-6 rounded-xl mb-8">
        <p className="text-gray-300 text-lg leading-relaxed">
          সৌদি আরবে ব্যবসা পরিচালনার জন্য, নিতাকাত প্রোগ্রাম সবচেয়ে গুরুত্বপূর্ণ নিয়ন্ত্রক কাঠামোগুলির একটি। আপনার কোম্পানির নিতাকাত শ্রেণীবিভাগ — প্লাটিনাম, গ্রিন, ইয়েলো বা রেড — সরাসরি নির্ধারণ করে আপনি নতুন বিদেশি কর্মচারী নিয়োগ করতে পারবেন কিনা, ইকামা নবায়ন করতে পারবেন কিনা, বা স্বাভাবিক কার্যক্রম চালিয়ে যেতে পারবেন কিনা।
        </p>
        <p className="text-gray-300 text-lg leading-relaxed mt-4">
          এই গাইডটি <strong>2026 সালে নিতাকাত সম্পর্কে আপনার যা জানা দরকার</strong> সবকিছু কভার করে।
        </p>
        <p className="text-gray-300 text-lg leading-relaxed mt-4">
          আমাদের বিনামূল্যের{' '}
          <Link href="/nitaqat-simulator" className="text-desert-primary font-bold underline">
            Nitaqat Simulator
          </Link>{' '}
          ব্যবহার করুন।
        </p>
      </div>

      <h2>নিতাকাত প্রোগ্রাম কী?</h2>
      <p>নিতাকাত হল মানবসম্পদ ও সামাজিক উন্নয়ন মন্ত্রণালয়ের একটি সৌদিকরণ প্রোগ্রাম যা বেসরকারি কোম্পানিগুলিকে তাদের সৌদি কর্মচারীর শতাংশের ভিত্তিতে রঙ-কোডেড ব্যান্ডে শ্রেণিবদ্ধ করে।</p>

      <h2>নিতাকাত রঙিন ব্যান্ড</h2>
      <div className="not-prose glass p-5 rounded-xl mb-6">
        <div className="space-y-3">
          <p><Shield className="h-4 w-4 text-desert-gold inline" /> <strong className="text-desert-gold">প্লাটিনাম:</strong> সম্পূর্ণ ভিসা সুবিধা</p>
          <p><CheckCircle className="h-4 w-4 text-green-400 inline" /> <strong className="text-green-400">হাই গ্রিন:</strong> ভাল অবস্থা</p>
          <p><AlertTriangle className="h-4 w-4 text-yellow-400 inline" /> <strong className="text-yellow-400">লো গ্রিন:</strong> সতর্কতা অঞ্চল</p>
          <p><AlertOctagon className="h-4 w-4 text-orange-400 inline" /> <strong className="text-orange-400">ইয়েলো:</strong> প্রোবেশন</p>
          <p><AlertOctagon className="h-4 w-4 text-red-400 inline" /> <strong className="text-red-400">রেড:</strong> সম্পূর্ণ ব্লক</p>
        </div>
      </div>

      <h2>Sauditoolhub Nitaqat Simulator</h2>
      <div className="not-prose glass p-6 rounded-xl mb-8">
        <Link href="/nitaqat-simulator" className="inline-flex items-center gap-2 rounded-xl bg-desert-primary px-8 py-3 text-sm font-bold text-white transition-all hover:bg-desert-primary-dim">
          <BarChart3 className="h-4 w-4" />
          সিমুলেটর ব্যবহার করুন
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
        <Link href="/nitaqat-simulator" className="text-desert-primary font-bold underline">Nitaqat Simulator</Link>
        {' '}ব্যবহার করুন।{' '}
        <Link href="/zatca-vat-calculator" className="text-desert-primary font-bold underline">VAT Calculator</Link>
        {' '}এবং{' '}
        <Link href="/cr-cost-estimator" className="text-desert-primary font-bold underline">CR Cost Estimator</Link>
        {' '}ও দেখুন। আমাদের{' '}
        <Link href="/blog" className="text-desert-primary font-bold underline">ব্লগ</Link> দেখুন।
      </p>

      <div className="not-prose glass p-6 rounded-xl mt-8 text-center">
        <BarChart3 className="h-10 w-10 text-desert-primary mx-auto mb-3" />
        <h3 className="text-white text-lg font-bold mb-2">নিতাকাত সিমুলেটর ব্যবহার করুন</h3>
        <p className="text-gray-400 text-sm mb-4">বিনামূল্যে ইন্টারঅ্যাকটিভ সিমুলেটর</p>
        <Link href="/nitaqat-simulator" className="inline-flex items-center gap-2 rounded-xl bg-desert-primary px-8 py-3 text-sm font-bold text-white transition-all hover:bg-desert-primary-dim">
          <BarChart3 className="h-4 w-4" />
          সিমুলেটর খুলুন
        </Link>
      </div>
    </article>
  )
}

export default async function NitaqatGuidePage({ params }: Props) {
  const { locale } = await params
  const isAr = locale === 'ar'
  const isUr = locale === 'ur'
  const isTl = locale === 'tl'
  const isBn = locale === 'bn'
  const isDefault = locale === 'en'
  const pageUrl = isDefault ? `${baseUrl}/guide/nitaqat-simulator-saudi-arabia-2026` : `${baseUrl}/${locale}/guide/nitaqat-simulator-saudi-arabia-2026`

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
          { name: isAr ? 'أدلة الأعمال' : isUr ? 'کاروباری گائیڈز' : isTl ? 'Gabay sa Negosyo' : isBn ? 'ব্যবসায়িক গাইড' : 'Business Guides', url: `${baseUrl}/${isDefault ? '' : locale + '/'}business-tools` },
          { name: isAr ? 'دليل نطاقات' : isUr ? 'نطاقات گائیڈ' : isTl ? 'Gabay sa Nitaqat' : isBn ? 'নিতাকাত গাইড' : 'Nitaqat Guide', url: pageUrl },
        ]}
      />
      <FAQJsonLd items={faqItems} />

      <div className="relative z-10">
        <section className="px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-6xl">
            {isAr ? <ArContent /> : isUr ? <UrContent /> : isTl ? <TlContent /> : isBn ? <BnContent /> : <EnContent />}
          </div>
        </section>
      </div>
    </>
  )
}
