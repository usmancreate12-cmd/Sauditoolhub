import type { Metadata } from 'next'
import Link from 'next/link'
import { BreadcrumbJsonLd, FAQJsonLd, ArticleJsonLd } from '@/components/JsonLd'
import { Calculator, ClipboardCheck, FileText, AlertTriangle, CheckCircle, Globe, ArrowRight } from 'lucide-react'

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
    ? 'القائمة الكاملة لوثائق التأشيرة السعودية 2026 - دليل المستندات | Sauditoolhub'
    : isUr
    ? 'سعودی ویزا کے لیے دستاویزات کی مکمل فہرست 2026 | Sauditoolhub'
    : isTl
    ? 'Kumpletong Listahan ng mga Dokumento para sa Saudi Visa 2026 | Sauditoolhub'
    : isBn
    ? 'সৌদি ভিসার জন্য সম্পূর্ণ ডকুমেন্ট চেকলিস্ট 2026 | Sauditoolhub'
    : 'Complete Visa Document Checklist for Saudi Arabia 2026 | Sauditoolhub'

  const description = isAr
    ? 'دليل كامل لوثائق التأشيرات السعودية 2026: تأشيرة الزيارة العائلية، تأشيرة العمل، تأشيرة العمرة. قائمة المستندات المطلوبة مع خطوات التوثيق.'
    : isUr
    ? 'سعودی ویزا کے لیے درکار تمام دستاویزات کی مکمل فہرست 2026: فیملی وزٹ، ورک ویزا، عمرہ ویزا۔ تصدیق کے مراحل۔'
    : isTl
    ? 'Kumpletong gabay sa mga dokumento para sa Saudi visa 2026: family visit visa, work visa, Umrah visa. Kasama ang dokumentasyon at attestation.'
    : isBn
    ? 'সৌদি ভিসার জন্য সম্পূর্ণ ডকুমেন্ট গাইড 2026: ফ্যামিলি ভিজিট ভিসা, ওয়ার্ক ভিসা, উমরাহ ভিসা। প্রয়োজনীয় কাগজপত্র ও প্রত্যয়ন প্রক্রিয়া।'
    : 'Complete guide to all Saudi visa documents required in 2026: Family Visit, Work Visa, Umrah Visa. Includes attestation steps, application process, and common rejection reasons.'

  return {
    title,
    description,
    alternates: {
      canonical: isDefault ? `${baseUrl}/guide/visa-checklist-generator-saudi-arabia-2026` : `${baseUrl}/${locale}/guide/visa-checklist-generator-saudi-arabia-2026`,
      languages: {
        en: `${baseUrl}/guide/visa-checklist-generator-saudi-arabia-2026`,
        ar: `${baseUrl}/ar/guide/visa-checklist-generator-saudi-arabia-2026`,
        ur: `${baseUrl}/ur/guide/visa-checklist-generator-saudi-arabia-2026`,
        tl: `${baseUrl}/tl/guide/visa-checklist-generator-saudi-arabia-2026`,
        bn: `${baseUrl}/bn/guide/visa-checklist-generator-saudi-arabia-2026`,
      },
    },
    openGraph: {
      title,
      description,
      url: isDefault ? `${baseUrl}/guide/visa-checklist-generator-saudi-arabia-2026` : `${baseUrl}/${locale}/guide/visa-checklist-generator-saudi-arabia-2026`,
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
  headline: 'The Complete Visa Document Checklist for Saudi Arabia 2026',
  description: 'A complete guide to every document required for Saudi visas in 2026 — Family Visit, Work, Umrah, and Tourist. Includes attestation process, application steps, and common rejection reasons.',
  author: { '@type': 'Person', name: 'Sauditoolhub Team' },
  publisher: { '@type': 'Organization', name: 'Sauditoolhub', logo: { '@type': 'ImageObject', url: `${baseUrl}/logo.png` } },
  datePublished: '2026-01-01',
  dateModified: '2026-07-01',
}

const schemaAr = {
  ...articleSchemaEn,
  headline: 'القائمة الكاملة لوثائق التأشيرة السعودية 2026',
  description: 'دليل كامل لكل وثيقة مطلوبة للتأشيرات السعودية 2026 — تأشيرة الزيارة العائلية، العمل، العمرة، والسياحة. يشمل عملية التوثيق وخطوات التقديم وأسباب الرفض.',
}

const schemaUr = {
  ...articleSchemaEn,
  headline: 'سعودی ویزا کے لیے دستاویزات کی مکمل فہرست 2026',
  description: 'سعودی ویزا کے لیے درکار تمام دستاویزات کی مکمل گائیڈ 2026 — فیملی وزٹ، ورک، عمرہ، اور ٹورسٹ۔ تصدیق کے عمل، درخواست کے مراحل، اور مسترد ہونے کی وجوہات۔',
}

const schemaTl = {
  ...articleSchemaEn,
  headline: 'Kumpletong Listahan ng mga Dokumento para sa Saudi Visa 2026',
  description: 'Isang kumpletong gabay sa lahat ng dokumento na kinakailangan para sa Saudi visa 2026 — Family Visit, Work, Umrah, at Tourist. Kasama ang proseso ng attestation at mga dahilan ng pagtanggi.',
}

const schemaBn = {
  ...articleSchemaEn,
  headline: 'সৌদি ভিসার জন্য সম্পূর্ণ ডকুমেন্ট চেকলিস্ট 2026',
  description: 'সৌদি ভিসার জন্য প্রয়োজনীয় সকল ডকুমেন্টের সম্পূর্ণ গাইড 2026 — ফ্যামিলি ভিজিট, ওয়ার্ক, উমরাহ এবং ট্যুরিস্ট। প্রত্যয়ন প্রক্রিয়া, আবেদন ধাপ এবং প্রত্যাখ্যানের কারণ সহ।',
}

const faqsEn = [
  { question: 'What documents are required for a Saudi family visit visa in 2026?', answer: 'You need a valid passport (6+ months validity), completed visa application form, attested marriage certificate (for spouse), attested birth certificates (for children), sponsor\'s Iqama copy, sponsor\'s salary certificate, and passport-sized photographs with white background. Additional documents may be required depending on your country.' },
  { question: 'How long does Saudi visa document attestation take?', answer: 'MOFA attestation in Saudi Arabia typically takes 1-3 working days. Embassy attestation in your home country varies — it can take anywhere from 1 week to 3 weeks depending on the embassy and whether you use a typing center. Plan for at least 2-3 weeks for full attestation.' },
  { question: 'What is MOFA attestation and why is it important?', answer: 'MOFA (Ministry of Foreign Affairs) attestation is the final step of document legalization in Saudi Arabia. It verifies that your documents are genuine and recognized by Saudi authorities. Without MOFA attestation, your marriage certificate, degree certificates, and birth certificates are not valid for visa applications.' },
  { question: 'Can I apply for a Saudi visa online in 2026?', answer: 'Yes. The Saudi government has made significant progress with digital visas. Tourist e-visas can be applied for entirely online. Family visit visas require the sponsor to apply through Enjaz or Muqeem platforms. Work visas are processed through the employer via Qiwa and the Saudi embassy in your country.' },
  { question: 'What are the most common reasons for Saudi visa rejection?', answer: 'The most common reasons include: expired passport (less than 6 months validity), incorrect photograph specifications, missing attested documents, incomplete application forms, insufficient bank balance for the sponsor, and Iqama violations for the sponsor. Always double-check your checklist before submitting.' },
  { question: 'Do I need a police clearance certificate for a Saudi work visa?', answer: 'Yes, most nationalities require a police clearance certificate (PCC) from their home country for a Saudi work visa. The certificate must be issued within the last 3-6 months and attested by the relevant authorities in your country and the Saudi embassy.' },
  { question: 'Is medical insurance mandatory for Saudi visa applications?', answer: 'Yes, health insurance is mandatory for all Saudi visa types. For work visas, the employer provides health insurance as part of the sponsorship. For family visit visas, the sponsor must arrange private medical insurance covering the visitor for the duration of their stay.' },
  { question: 'What are the photo requirements for a Saudi visa?', answer: 'Saudi visa photographs must be: passport-sized (4.3cm x 5.5cm), white background, plain expression with mouth closed, no glasses, no headwear (except for religious reasons), and printed on high-quality photo paper. Digital copies must meet the same standards.' },
  { question: 'How long is a Saudi family visit visa valid?', answer: 'A standard family visit visa is valid for 90 days from the date of issue, allowing a stay of up to 90 days. Multiple-entry family visit visas may be valid for up to 1 year with stays of up to 90 days per visit. Extensions are possible in certain cases through the Jawazat office.' },
  { question: 'How can I check my Saudi visa document checklist?', answer: 'Use the Sauditoolhub Visa Checklist Generator at /visa-checklist-generator. It provides a personalized checklist based on your visa type, nationality, and purpose of visit. The tool covers Family Visit, Work, Umrah, and Tourist visas with real-time Pakistani requirements.' },
]

const faqsAr = [
  { question: 'ما هي المستندات المطلوبة لتأشيرة الزيارة العائلية للسعودية 2026؟', answer: 'تحتاج إلى جواز سفر ساري المفعول (6 أشهر+)، نموذج طلب التأشيرة، عقد زواج موثق (للزوجة)، شهادات ميلاد موثقة (للأطفال)، صورة الإقامة، شهادة راتب، وصور شخصية بخلفية بيضاء.' },
  { question: 'كم تستغرق عملية توثيق مستندات التأشيرة السعودية؟', answer: 'توثيق وزارة الخارجية في السعودية يستغرق 1-3 أيام عمل. توثيق السفارة في بلدك يختلف من أسبوع إلى 3 أسابيع. خطط لأسبوعين على الأقل للتوثيق الكامل.' },
  { question: 'ما هو توثيق وزارة الخارجية ولماذا هو مهم؟', answer: 'توثيق وزارة الخارجية هو الخطوة الأخيرة لاعتماد المستندات في السعودية. بدونه، شهادات الزواج والدرجات العلمية وشهادات الميلاد غير صالحة للتأشيرات.' },
  { question: 'هل يمكنني التقديم على التأشيرة السعودية أونلاين 2026؟', answer: 'نعم. التأشيرات السياحية متاحة بالكامل أونلاين. تأشيرات الزيارة العائلية تتطلب تقديم الكفيل عبر منصتي أنجز أو مقيم. تأشيرات العمل تتم عبر Qiwa.' },
  { question: 'ما هي أسباب رفض التأشيرة السعودية الأكثر شيوعاً؟', answer: 'الأسباب تشمل: جواز سفر منتهي الصلاحية، صور غير مطابقة للمواصفات، مستندات غير موثقة، نماذج ناقصة، رصيد بنكي غير كافٍ للكفيل، ومخالفات إقامة.' },
  { question: 'هل أحتاج إلى شهادة حسن سيرة وسلوك لتأشيرة العمل؟', answer: 'نعم، معظم الجنسيات تحتاج شهادة حسن سيرة وسلوك من بلدهم. يجب أن تكون صادرة خلال 3-6 أشهر وموثقة من السلطات المختصة.' },
  { question: 'هل التأمين الطبي إلزامي للتأشيرات السعودية؟', answer: 'نعم، التأمين الصحي إلزامي لجميع أنواع التأشيرات. للعمل، يوفره صاحب العمل. للزيارة العائلية، يجب على الكفيل ترتيب تأمين طبي خاص.' },
  { question: 'ما هي مواصفات الصور للتأشيرة السعودية؟', answer: 'يجب أن تكون: مقاس جواز السفر (4.3 سم × 5.5 سم)، خلفية بيضاء، تعبير محايد، فم مغلق، بدون نظارات أو غطاء رأس (إلا لأسباب دينية).' },
  { question: 'كم مدة صلاحية تأشيرة الزيارة العائلية السعودية؟', answer: '90 يوماً من تاريخ الإصدار مع إقامة حتى 90 يوماً. التأشيرات متعددة الدخول قد تكون صالحة حتى سنة مع إقامة 90 يوماً لكل زيارة. التمديد ممكن في بعض الحالات.' },
  { question: 'كيف يمكنني التحقق من قائمة مستندات التأشيرة السعودية؟', answer: 'استخدم مولد قائمة التحقق من التأشيرة من Sauditoolhub على /visa-checklist-generator. يوفر قائمة مخصصة حسب نوع التأشيرة وجنسيتك.' },
]

const faqsUr = [
  { question: '2026 میں سعودی فیملی وزٹ ویزا کے لیے کون سی دستاویزات درکار ہیں؟', answer: 'آپ کو چاہیے: پاسپورٹ (6 ماہ+)، مکمل درخواست فارم، تصدیق شدہ نکاح نامہ (شریک حیات کے لیے)، تصدیق شدہ پیدائش سرٹیفکیٹ (بچوں کے لیے)، کفیل کا اقامہ، کفیل کی تنخواہ سرٹیفکیٹ، اور سفید پس منظر والی تصاویر۔' },
  { question: 'سعودی ویزا دستاویزات کی تصدیق میں کتنا وقت لگتا ہے؟', answer: 'سعودی عرب میں وزارت خارجہ کی تصدیق میں 1-3 دن لگتے ہیں۔ سفارتخانے کی تصدیق میں 1 سے 3 ہفتے لگ سکتے ہیں۔ کم از کم 2-3 ہفتے کا منصوبہ بنائیں۔' },
  { question: 'وزارت خارجہ کی تصدیق کیا ہے اور یہ کیوں اہم ہے؟', answer: 'یہ سعودی عرب میں دستاویزات کو قانونی شکل دینے کا آخری مرحلہ ہے۔ اس کے بغیر، شادی سرٹیفکیٹ، ڈگریاں، اور پیدائش سرٹیفکیٹ ویزا کے لیے درست نہیں ہوتے۔' },
  { question: 'کیا 2026 میں سعودی ویزا کے لیے آن لائن درخواست دے سکتے ہیں؟', answer: 'ہاں۔ ٹورسٹ ای ویزا مکمل طور پر آن لائن دستیاب ہے۔ فیملی وزٹ ویزا کے لیے کفیل کو Enjaz یا Muqeem پلیٹ فارمز کے ذریعے درخواست دینی ہوتی ہے۔' },
  { question: 'سعودی ویزا مسترد ہونے کی عام وجوہات کیا ہیں؟', answer: 'پاسپورٹ کی میعاد ختم، غلط تصویر کی وضاحتیں، نامکمل دستاویزات، ادھورے فارم، کفیل کا ناکافی بینک بیلنس، اور اقامہ کی خلاف ورزیاں۔' },
  { question: 'کیا ورک ویزا کے لیے پولیس کلیرنس سرٹیفکیٹ ضروری ہے؟', answer: 'ہاں، زیادہ تر قومیتوں کے لیے پولیس کلیرنس ضروری ہے۔ یہ گزشتہ 3-6 ماہ کے اندر جاری ہونا چاہیے اور متعلقہ حکام سے تصدیق شدہ ہو۔' },
  { question: 'کیا سعودی ویزا کے لیے میڈیکل انشورنس لازمی ہے؟', answer: 'ہاں، تمام ویزا اقسام کے لیے ہیلتھ انشورنس لازمی ہے۔ ورک ویزا کے لیے آجر فراہم کرتا ہے۔ فیملی وزٹ کے لیے کفیل کو پرائیویٹ انشورنس کا بندوبست کرنا ہوتا ہے۔' },
  { question: 'سعودی ویزا کے لیے تصویر کی کیا شرائط ہیں؟', answer: 'پاسپورٹ سائز (4.3cm x 5.5cm)، سفید پس منظر، سادہ اظہار، منہ بند، بغیر چشمے کے، بغیر سر ڈھکنے کے (مذہبی وجوہات کے علاوہ)۔' },
  { question: 'سعودی فیملی وزٹ ویزا کتنی دیر تک درست ہوتا ہے؟', answer: '90 دن جاری ہونے کی تاریخ سے، 90 دن تک قیام کی اجازت۔ ملٹی انٹری ویزا 1 سال تک درست ہو سکتا ہے۔ توسیع ممکن ہے۔' },
  { question: 'اپنی ویزا دستاویزات کی فہرست کیسے چیک کروں؟', answer: 'Sauditoolhub کا Visa Checklist Generator استعمال کریں /visa-checklist-generator پر۔ یہ آپ کے ویزا کی قسم کے مطابق ذاتی نوعیت کی فہرست دیتا ہے۔' },
]

const faqsTl = [
  { question: 'Ano ang mga dokumento na kinakailangan para sa Saudi family visit visa 2026?', answer: 'Kailangan mo ng valid passport (6+ months), accomplished visa application form, attested marriage certificate (para sa asawa), attested birth certificates (para sa mga anak), kopya ng Iqama ng sponsor, salary certificate ng sponsor, at passport-sized na larawan na may puting background.' },
  { question: 'Gaano katagal ang dokumentasyon ng Saudi visa?', answer: 'Ang MOFA attestation sa Saudi Arabia ay karaniwang 1-3 araw ng trabaho. Ang embassy attestation ay maaaring 1 hanggang 3 linggo. Magplano ng hindi bababa sa 2-3 linggo para sa kumpletong attestation.' },
  { question: 'Ano ang MOFA attestation at bakit ito mahalaga?', answer: 'Ang MOFA attestation ay ang huling hakbang ng legalisasyon ng dokumento sa Saudi Arabia. Kung wala ito, ang iyong marriage certificate, degree certificates, at birth certificates ay hindi valid para sa visa applications.' },
  { question: 'Pwedeng mag-apply ng Saudi visa online sa 2026?', answer: 'Oo. Ang tourist e-visa ay ganap na online. Ang family visit visa ay nangangailangan ng sponsor na mag-apply sa pamamagitan ng Enjaz o Muqeem platforms. Ang work visa ay pinoproseso ng employer sa pamamagitan ng Qiwa.' },
  { question: 'Ano ang mga karaniwang dahilan ng pagtanggi ng Saudi visa?', answer: 'Kabilang dito ang: expired passport, maling sukat ng larawan, hindi attested na dokumento, hindi kumpletong forms, hindi sapat na bank balance ng sponsor, at mga paglabag sa Iqama.' },
  { question: 'Kailangan ba ng police clearance certificate para sa Saudi work visa?', answer: 'Oo, karamihan sa mga nasyonalidad ay nangangailangan ng police clearance certificate. Dapat itong mailabas sa nakaraang 3-6 buwan at attested ng mga kinauukulang awtoridad.' },
  { question: 'Kinakailangan ba ang medical insurance para sa Saudi visa?', answer: 'Oo, kinakailangan ang health insurance para sa lahat ng uri ng Saudi visa. Para sa work visa, ang employer ang nagbibigay. Para sa family visit visa, ang sponsor ang dapat mag-ayos ng private insurance.' },
  { question: 'Ano ang mga kinakailangan sa larawan para sa Saudi visa?', answer: 'Dapat itong passport-sized (4.3cm x 5.5cm), puting background, simpleng ekspresyon, nakasara ang bibig, walang salamin, walang headwear (maliban sa relihiyosong dahilan).' },
  { question: 'Gaano katagal valid ang Saudi family visit visa?', answer: '90 araw mula sa petsa ng pag-isyu, na may pamamalagi hanggang 90 araw. Ang multiple-entry visa ay maaaring valid hanggang 1 taon. Posible ang extension sa ilang kaso.' },
  { question: 'Paano ko masusuri ang aking visa document checklist?', answer: 'Gamitin ang Sauditoolhub Visa Checklist Generator sa /visa-checklist-generator. Nagbibigay ito ng personalized checklist batay sa iyong visa type, nationality, at purpose ng pagbisita.' },
]

const faqsBn = [
  { question: '2026 সালে সৌদি ফ্যামিলি ভিজিট ভিসার জন্য কী কী ডকুমেন্ট প্রয়োজন?', answer: 'আপনার প্রয়োজন: বৈধ পাসপোর্ট (৬+ মাস), পূরণকৃত ভিসা আবেদন ফর্ম, প্রত্যয়িত বিবাহ সনদ (স্বামী/স্ত্রীর জন্য), প্রত্যয়িত জন্ম সনদ (সন্তানের জন্য), স্পনসরের ইকামা কপি, স্পনসরের বেতন সনদ, এবং সাদা ব্যাকগ্রাউন্ডের পাসপোর্ট সাইজের ছবি।' },
  { question: 'সৌদি ভিসার ডকুমেন্ট প্রত্যয়ন করতে কত সময় লাগে?', answer: 'সৌদি আরবে MOFA প্রত্যয়নে সাধারণত ১-৩ কার্যদিবস লাগে। দূতাবাসের প্রত্যয়নে ১ থেকে ৩ সপ্তাহ সময় লাগতে পারে। সম্পূর্ণ প্রত্যয়নের জন্য কমপক্ষে ২-৩ সপ্তাহ পরিকল্পনা করুন।' },
  { question: 'MOFA প্রত্যয়ন কী এবং কেন এটি গুরুত্বপূর্ণ?', answer: 'MOFA (পররাষ্ট্র মন্ত্রণালয়) প্রত্যয়ন হল সৌদি আরবে ডকুমেন্ট আইনি করার শেষ ধাপ। এটি ছাড়া আপনার বিবাহ সনদ, ডিগ্রি সার্টিফিকেট এবং জন্ম সনদ ভিসা আবেদনের জন্য বৈধ নয়।' },
  { question: '২০২৬ সালে কি অনলাইনে সৌদি ভিসার জন্য আবেদন করা যায়?', answer: 'হ্যাঁ। ট্যুরিস্ট ই-ভিসা সম্পূর্ণ অনলাইনে পাওয়া যায়। ফ্যামিলি ভিজিট ভিসার জন্য স্পনসরকে Enjaz বা Muqeem প্ল্যাটফর্মের মাধ্যমে আবেদন করতে হবে। ওয়ার্ক ভিসা Qiwa-এর মাধ্যমে প্রক্রিয়া করা হয়।' },
  { question: 'সৌদি ভিসা প্রত্যাখানের সবচেয়ে সাধারণ কারণ কী?', answer: 'সাধারণ কারণগুলির মধ্যে রয়েছে: মেয়াদোত্তীর্ণ পাসপোর্ট, ভুল ছবির স্পেসিফিকেশন, অনুপস্থিত প্রত্যয়িত ডকুমেন্ট, অসম্পূর্ণ আবেদন ফর্ম, স্পনসরের অপর্যাপ্ত ব্যাংক ব্যালেন্স এবং ইকামা লঙ্ঘন।' },
  { question: 'সৌদি ওয়ার্ক ভিসার জন্য কি পুলিশ ক্লিয়ারেন্স সার্টিফিকেট প্রয়োজন?', answer: 'হ্যাঁ, বেশিরভাগ দেশের নাগরিকদের পুলিশ ক্লিয়ারেন্স সার্টিফিকেট প্রয়োজন। এটি গত ৩-৬ মাসের মধ্যে ইস্যু করা হতে হবে এবং সংশ্লিষ্ট কর্তৃপক্ষ দ্বারা প্রত্যয়িত হতে হবে।' },
  { question: 'সৌদি ভিসা আবেদনের জন্য মেডিকেল ইন্স্যুরেন্স কি বাধ্যতামূলক?', answer: 'হ্যাঁ, সকল প্রকার সৌদি ভিসার জন্য স্বাস্থ্য বীমা বাধ্যতামূলক। ওয়ার্ক ভিসার জন্য নিয়োগকর্তা সরবরাহ করেন। ফ্যামিলি ভিজিটের জন্য স্পনসরকে প্রাইভেট বীমার ব্যবস্থা করতে হবে।' },
  { question: 'সৌদি ভিসার জন্য ছবির প্রয়োজনীয়তা কী?', answer: 'পাসপোর্ট সাইজ (৪.৩সেমি x ৫.৫সেমি), সাদা ব্যাকগ্রাউন্ড, নিরপেক্ষ অভিব্যক্তি, বন্ধ মুখ, চশমা নেই, হেডওয়্যার নেই (ধর্মীয় কারণ ছাড়া)।' },
  { question: 'সৌদি ফ্যামিলি ভিজিট ভিসা কতদিন বৈধ?', answer: 'ইস্যু হওয়ার তারিখ থেকে ৯০ দিন বৈধ, ৯০ দিন পর্যন্ত থাকার অনুমতি। মাল্টিপল-এন্ট্রি ভিসা ১ বছর পর্যন্ত বৈধ হতে পারে। নির্দিষ্ট ক্ষেত্রে এক্সটেনশন সম্ভব।' },
  { question: 'আমার ভিসা ডকুমেন্ট চেকলিস্ট কীভাবে পরীক্ষা করব?', answer: 'Sauditoolhub Visa Checklist Generator ব্যবহার করুন /visa-checklist-generator এ। এটি আপনার ভিসার ধরন, জাতীয়তা এবং ভ্রমণের উদ্দেশ্য অনুযায়ী একটি ব্যক্তিগতকৃত চেকলিস্ট প্রদান করে।' },
]

function EnContent() {
  return (
    <article className="prose prose-invert max-w-none prose-headings:text-desert-primary prose-a:text-desert-primary prose-strong:text-white prose-li:text-gray-300">
      <h1>The Complete Visa Document Checklist for Saudi Arabia 2026</h1>

      <div className="not-prose glass p-6 rounded-xl mb-8">
        <p className="text-gray-300 text-lg leading-relaxed">
          There is nothing more frustrating than preparing for a trip to Saudi Arabia — or a new job in the Kingdom — only to have your visa rejected because of a missing or incorrectly attested document. The Saudi visa process involves multiple government agencies, specific document formats, and strict attestation requirements that vary by visa type and your home country.
        </p>
        <p className="text-gray-300 text-lg leading-relaxed mt-4">
          This guide covers <strong>every document you need for every major Saudi visa type in 2026</strong>. We cover Family Visit Visas, Work Visas, Umrah Visas, and Tourist e-Visas — with detailed attestation steps, application procedures, and the most common reasons applications get rejected.
        </p>
        <p className="text-gray-300 text-lg leading-relaxed mt-4">
          Use our free{' '}
          <Link href="/visa-checklist-generator" className="text-desert-primary font-bold underline">
            Visa Checklist Generator
          </Link>{' '}
          to create a personalized document checklist in seconds based on your visa type, nationality, and travel purpose.
        </p>
      </div>

      <h2>Types of Saudi Visas &amp; Their Requirements</h2>
      <p>
        Saudi Arabia offers several visa categories, each with its own document requirements. Understanding which visa you need is the first step to getting your documents right. Here is a brief overview of the main types:
      </p>

      <div className="not-prose glass p-5 rounded-xl mb-6">
        <ul className="space-y-4 text-gray-300">
          <li>
            <strong className="text-desert-primary">Family Visit Visa:</strong> For spouses, children, parents, and siblings of expat residents. Requires sponsor documentation and family relationship proofs.
          </li>
          <li>
            <strong className="text-desert-primary">Work / Employment Visa:</strong> For expats who have secured a job in Saudi Arabia. Involves degree attestation, medical checks, and employer sponsorship via Qiwa.
          </li>
          <li>
            <strong className="text-desert-primary">Umrah Visa:</strong> For Muslims visiting for Umrah pilgrimage. Requires vaccination certificates and Mahram proof for women under 45 (in most cases).
          </li>
          <li>
            <strong className="text-desert-primary">Tourist e-Visa:</strong> Available for eligible nationalities. Fully online application with minimal documents — passport copy and photo are usually sufficient.
          </li>
        </ul>
      </div>

      <h2>General Documents Required for All Saudi Visas</h2>
      <p>Regardless of the visa type, the following documents are universally required:</p>

      <div className="not-prose glass p-5 rounded-xl mb-6">
        <ol className="space-y-4 text-gray-300 list-decimal list-inside">
          <li>
            <strong className="text-desert-primary">Valid Passport:</strong> Must have at least 6 months of validity remaining from the date of your intended travel. At least two blank visa pages are required.
          </li>
          <li>
            <strong className="text-desert-primary">Passport-Sized Photographs:</strong> White background, 4.3 cm x 5.5 cm, neutral expression, mouth closed, no glasses, no headwear (except for religious reasons). Digital copies must meet the same specifications.
          </li>
          <li>
            <strong className="text-desert-primary">Completed Visa Application Form:</strong> Accurate and complete information matching your passport. Double-check spelling of your name, passport number, and travel dates.
          </li>
          <li>
            <strong className="text-desert-primary">Copy of Passport Bio Page:</strong> A clear, colored scan of your passport information page.
          </li>
          <li>
            <strong className="text-desert-primary">Health Insurance Certificate:</strong> Proof of valid medical insurance covering the duration of your stay in Saudi Arabia.
          </li>
        </ol>
      </div>

      <h2>Specific Documents by Visa Type (2026 Rules)</h2>

      <div className="not-prose glass p-5 rounded-xl mb-6">
        <div className="flex items-center gap-2 mb-3">
          <Globe className="h-5 w-5 text-desert-primary" />
          <h3 className="text-white font-semibold m-0">Family Visit Visa Documents</h3>
        </div>
        <ul className="space-y-2 text-gray-300 text-sm">
          <li><CheckCircle className="h-4 w-4 text-desert-primary inline" /> Attested marriage certificate (for spouse) — attested by MOFA in Saudi Arabia</li>
          <li><CheckCircle className="h-4 w-4 text-desert-primary inline" /> Attested birth certificates of children (for dependent children)</li>
          <li><CheckCircle className="h-4 w-4 text-desert-primary inline" /> Sponsor's valid Iqama (resident ID) copy — must be valid for at least 90 days</li>
          <li><CheckCircle className="h-4 w-4 text-desert-primary inline" /> Sponsor's salary certificate from employer (usually 3-6 months recent)</li>
          <li><CheckCircle className="h-4 w-4 text-desert-primary inline" /> Bank statement showing sponsor's financial capability</li>
          <li><CheckCircle className="h-4 w-4 text-desert-primary inline" /> Proof of family relationship (family registration document if applicable)</li>
          <li><CheckCircle className="h-4 w-4 text-desert-primary inline" /> Visitor's passport copy and completed application form</li>
          <li><CheckCircle className="h-4 w-4 text-desert-primary inline" /> Travel insurance certificate covering the visitor</li>
        </ul>
      </div>

      <div className="not-prose glass p-5 rounded-xl mb-6">
        <div className="flex items-center gap-2 mb-3">
          <FileText className="h-5 w-5 text-desert-primary" />
          <h3 className="text-white font-semibold m-0">Work / Employment Visa Documents</h3>
        </div>
        <ul className="space-y-2 text-gray-300 text-sm">
          <li><CheckCircle className="h-4 w-4 text-desert-primary inline" /> Degree certificates attested by MOFA Saudi Arabia and home country authorities</li>
          <li><CheckCircle className="h-4 w-4 text-desert-primary inline" /> Professional experience certificates (attested if possible)</li>
          <li><CheckCircle className="h-4 w-4 text-desert-primary inline" /> Medical fitness report from an approved medical center</li>
          <li><CheckCircle className="h-4 w-4 text-desert-primary inline" /> Police clearance certificate from home country (issued within 3-6 months)</li>
          <li><CheckCircle className="h-4 w-4 text-desert-primary inline" /> Valid passport with 6+ months validity</li>
          <li><CheckCircle className="h-4 w-4 text-desert-primary inline" /> Employment contract signed by both parties</li>
          <li><CheckCircle className="h-4 w-4 text-desert-primary inline" /> Employer's company registration documents (CR copy)</li>
          <li><CheckCircle className="h-4 w-4 text-desert-primary inline" /> Completed visa application form and passport photos</li>
        </ul>
      </div>

      <div className="not-prose glass p-5 rounded-xl mb-6">
        <div className="flex items-center gap-2 mb-3">
          <ClipboardCheck className="h-5 w-5 text-desert-primary" />
          <h3 className="text-white font-semibold m-0">Umrah Visa Documents</h3>
        </div>
        <ul className="space-y-2 text-gray-300 text-sm">
          <li><CheckCircle className="h-4 w-4 text-desert-primary inline" /> Valid passport with 6+ months validity</li>
          <li><CheckCircle className="h-4 w-4 text-desert-primary inline" /> Meningitis vaccination certificate (ACWY vaccine, within last 5 years)</li>
          <li><CheckCircle className="h-4 w-4 text-desert-primary inline" /> COVID-19 vaccination certificate (if still required by Saudi health authorities)</li>
          <li><CheckCircle className="h-4 w-4 text-desert-primary inline" /> Mahram proof for women under 45 (marriage certificate or birth certificate for father/son)</li>
          <li><CheckCircle className="h-4 w-4 text-desert-primary inline" /> Confirmed Umrah package or accommodation booking</li>
          <li><CheckCircle className="h-4 w-4 text-desert-primary inline" /> Return flight itinerary</li>
          <li><CheckCircle className="h-4 w-4 text-desert-primary inline" /> Passport-sized photographs with white background</li>
        </ul>
      </div>

      <h2>Document Attestation Process</h2>
      <p>
        Attestation is the single most important — and most confusing — part of the Saudi visa document process. Without proper attestation, your documents are considered invalid. Here is the complete attestation chain:
      </p>

      <div className="not-prose glass p-6 rounded-xl mb-8">
        <ol className="space-y-5 text-gray-300">
          <li>
            <strong className="text-desert-primary">Step 1: Home Country Attestation</strong>
            <p className="text-sm mt-1">Get your documents attested by your home country's Ministry of Education (for degrees), Ministry of Justice (for marriage/birth certificates), and Ministry of External/Foreign Affairs.</p>
          </li>
          <li>
            <strong className="text-desert-primary">Step 2: Saudi Embassy Attestation</strong>
            <p className="text-sm mt-1">Submit your home-country-attested documents to the Saudi Embassy or Consulate in your country for verification. This step can take 1-3 weeks depending on the embassy's workload.</p>
          </li>
          <li>
            <strong className="text-desert-primary">Step 3: MOFA Saudi Arabia Attestation</strong>
            <p className="text-sm mt-1">After arriving in Saudi Arabia (for work visas) or having your sponsor submit (for family visas), the documents must be attested by the Saudi Ministry of Foreign Affairs. This is the final and most critical attestation step. It typically takes 1-3 working days.</p>
          </li>
        </ol>
      </div>

      <div className="not-prose glass p-5 rounded-xl mb-6">
        <h3 className="text-white font-semibold mb-2">MOFA Attestation Tips</h3>
        <ul className="space-y-2 text-gray-300 text-sm">
          <li><CheckCircle className="h-4 w-4 text-desert-primary inline" /> Use the Absher or MOFA online portal to track your attestation status.</li>
          <li><CheckCircle className="h-4 w-4 text-desert-primary inline" /> Original documents are required — notarized copies are usually not accepted.</li>
          <li><CheckCircle className="h-4 w-4 text-desert-primary inline" /> Documents in languages other than Arabic or English must be translated by a certified translator and then attested.</li>
          <li><CheckCircle className="h-4 w-4 text-desert-primary inline" /> MOFA attestation fees are approximately 150-300 SAR per document, depending on the type.</li>
        </ul>
      </div>

      <h2>Step-by-Step Visa Application Process</h2>

      <div className="not-prose glass p-5 rounded-xl mb-6">
        <ol className="space-y-4 text-gray-300 list-decimal list-inside">
          <li>
            <strong className="text-desert-primary">Determine Your Visa Type:</strong> Identify whether you need a Family Visit, Work, Umrah, or Tourist visa based on your purpose.
          </li>
          <li>
            <strong className="text-desert-primary">Gather Documents:</strong> Use the{' '}
            <Link href="/visa-checklist-generator" className="text-desert-primary underline">Visa Checklist Generator</Link>
            {' '}to get your personalized list.
          </li>
          <li>
            <strong className="text-desert-primary">Complete Attestations:</strong> Follow the three-step attestation chain for all required certificates.
          </li>
          <li>
            <strong className="text-desert-primary">Submit Application:</strong> For family visit visas, your sponsor applies via Enjaz or Muqeem in Saudi Arabia. For work visas, your employer processes through Qiwa. For tourist visas, apply online directly.
          </li>
          <li>
            <strong className="text-desert-primary">Pay Fees:</strong> Visa fees vary by type and processing speed. Family visit visas are typically 300-500 SAR. Work visa fees include application fees, medical fees, and Iqama issuance costs.
          </li>
          <li>
            <strong className="text-desert-primary">Track Application:</strong> Use the visa reference number to track status on Enjaz, Muqeem, or the Saudi embassy portal.
          </li>
          <li>
            <strong className="text-desert-primary">Receive Visa:</strong> Once approved, the visa is usually stamped in your passport or issued electronically (e-visa). Print a copy to carry during travel.
          </li>
        </ol>
      </div>

      <h2>Common Mistakes That Lead to Visa Rejection</h2>

      <div className="not-prose glass p-5 rounded-xl mb-6">
        <ul className="space-y-4 text-gray-300">
          <li className="flex items-start gap-3">
            <AlertTriangle className="h-5 w-5 text-desert-accent mt-0.5 shrink-0" />
            <div>
              <strong className="text-white">Expired Passport</strong>
              <p className="text-sm text-gray-400">Your passport must be valid for at least 6 months from your travel date. Applications with less than 6 months are automatically rejected.</p>
            </div>
          </li>
          <li className="flex items-start gap-3">
            <AlertTriangle className="h-5 w-5 text-desert-accent mt-0.5 shrink-0" />
            <div>
              <strong className="text-white">Wrong Photograph Specifications</strong>
              <p className="text-sm text-gray-400">Photos with a colored background, smiling expression, glasses, or incorrect dimensions are a top reason for rejection. Use a professional visa photo service.</p>
            </div>
          </li>
          <li className="flex items-start gap-3">
            <AlertTriangle className="h-5 w-5 text-desert-accent mt-0.5 shrink-0" />
            <div>
              <strong className="text-white">Missing Attestation Stamps</strong>
              <p className="text-sm text-gray-400">All certificates must go through the full attestation chain. A missing MOFA stamp or embassy attestation will result in immediate rejection.</p>
            </div>
          </li>
          <li className="flex items-start gap-3">
            <AlertTriangle className="h-5 w-5 text-desert-accent mt-0.5 shrink-0" />
            <div>
              <strong className="text-white">Incomplete Application Forms</strong>
              <p className="text-sm text-gray-400">Missing fields, mismatched information, or incorrect data (especially names and passport numbers) are common errors. Review the form multiple times before submitting.</p>
            </div>
          </li>
          <li className="flex items-start gap-3">
            <AlertTriangle className="h-5 w-5 text-desert-accent mt-0.5 shrink-0" />
            <div>
              <strong className="text-white">Sponsor's Iqama Issues</strong>
              <p className="text-sm text-gray-400">The sponsor's Iqama must be valid for at least 90 days at the time of application. An expired or about-to-expire Iqama will cause the visa application to be rejected.</p>
            </div>
          </li>
        </ul>
      </div>

      <h2>How to Use the Sauditoolhub Visa Checklist Generator</h2>
      <div className="not-prose glass p-6 rounded-xl mb-8">
        <div className="flex items-center gap-3 mb-4">
          <ClipboardCheck className="h-8 w-8 text-desert-primary" />
          <h3 className="text-white text-lg font-bold m-0">Sauditoolhub Visa Checklist Generator</h3>
        </div>
        <p className="text-gray-300 mb-4">
          Why guess when you can get a personalized document checklist tailored to your specific situation? Our interactive tool asks you about your visa type, nationality, and purpose of visit, then generates a complete document list with attestation instructions.
        </p>
        <ul className="space-y-2 text-gray-400 text-sm mb-4">
          <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-desert-primary" /> Personalized for your visa type and nationality</li>
          <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-desert-primary" /> Covers Family Visit, Work, Umrah, and Tourist visas</li>
          <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-desert-primary" /> Includes attestation steps for each document</li>
          <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-desert-primary" /> Free — no registration required</li>
        </ul>
        <Link href="/visa-checklist-generator" className="inline-flex items-center gap-2 rounded-xl bg-desert-primary px-8 py-3 text-sm font-bold text-white transition-all hover:bg-desert-primary-dim">
          <ClipboardCheck className="h-4 w-4" />
          Generate Your Checklist Now
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
        Saudi visa documentation can feel overwhelming, but with the right checklist and a clear understanding of attestation requirements, the process becomes manageable. The single most important rule is: <strong>verify your documents before submission</strong>. A missing stamp, an expired passport, or a wrong photo format can cost you weeks of delay.
      </p>
      <p>
        Bookmark our{' '}
        <Link href="/visa-checklist-generator" className="text-desert-primary font-bold underline">Visa Checklist Generator</Link>
        {' '}for quick reference before any application. Also explore our{' '}
        <Link href="/family-visa-optimizer" className="text-desert-primary font-bold underline">Family Visa Optimizer</Link>
        {' '}to calculate family visa costs,{' '}
        <Link href="/jawazat-fine-calculator" className="text-desert-primary font-bold underline">Jawazat Fine Calculator</Link>
        {' '}for overstay fines, and visit our{' '}
        <Link href="/blog" className="text-desert-primary font-bold underline">Blog</Link>
        {' '}for more expat guides.
      </p>

      <div className="not-prose glass p-6 rounded-xl mt-8 text-center">
        <ClipboardCheck className="h-10 w-10 text-desert-primary mx-auto mb-3" />
        <h3 className="text-white text-lg font-bold mb-2">Get Your Personalized Visa Checklist</h3>
        <p className="text-gray-400 text-sm mb-4">Free — tailored to your visa type and nationality</p>
        <Link href="/visa-checklist-generator" className="inline-flex items-center gap-2 rounded-xl bg-desert-primary px-8 py-3 text-sm font-bold text-white transition-all hover:bg-desert-primary-dim">
          <ClipboardCheck className="h-4 w-4" />
          Generate Checklist Now
        </Link>
      </div>
    </article>
  )
}

function ArContent() {
  return (
    <article className="prose prose-invert max-w-none prose-headings:text-desert-primary prose-a:text-desert-primary prose-strong:text-white prose-li:text-gray-300" dir="rtl">
      <h1>القائمة الكاملة لوثائق التأشيرة السعودية 2026</h1>

      <div className="not-prose glass p-6 rounded-xl mb-8">
        <p className="text-gray-300 text-lg leading-relaxed">
          لا شيء أكثر إحباطاً من التحضير لرحلة إلى السعودية — أو لوظيفة جديدة في المملكة — فقط لترفض تأشيرتك بسبب وثيقة مفقودة أو غير موثقة بشكل صحيح. عملية التأشيرة السعودية تشمل جهات حكومية متعددة ومتطلبات توثيق صارمة تختلف حسب نوع التأشيرة وبلدك.
        </p>
        <p className="text-gray-300 text-lg leading-relaxed mt-4">
          هذا الدليل يغطي <strong>كل وثيقة تحتاجها لكل نوع تأشيرة سعودية رئيسي في 2026</strong>. نغطي تأشيرة الزيارة العائلية، تأشيرة العمل، تأشيرة العمرة، والتأشيرة السياحية الإلكترونية — مع خطوات التوثيق التفصيلية وإجراءات التقديم وأسباب رفض الطلبات الأكثر شيوعاً.
        </p>
        <p className="text-gray-300 text-lg leading-relaxed mt-4">
          استخدم{' '}
          <Link href="/visa-checklist-generator" className="text-desert-primary font-bold underline">
            مولد قائمة التحقق من التأشيرة
          </Link>{' '}
          المجاني لإنشاء قائمة وثائق مخصصة في ثوانٍ.
        </p>
      </div>

      <h2>أنواع التأشيرات السعودية ومتطلباتها</h2>

      <div className="not-prose glass p-5 rounded-xl mb-6">
        <ul className="space-y-4 text-gray-300">
          <li><strong className="text-desert-primary">تأشيرة الزيارة العائلية:</strong> للأزواج والأطفال والوالدين. تتطلب وثائق الكفيل وإثبات العلاقة الأسرية.</li>
          <li><strong className="text-desert-primary">تأشيرة العمل / التوظيف:</strong> للمقيمين الذين حصلوا على وظيفة في السعودية. تشمل توثيق الشهادات والفحص الطبي.</li>
          <li><strong className="text-desert-primary">تأشيرة العمرة:</strong> للمسلمين القادمين للعمرة. تتطلب شهادات التطعيم وإثبات المحرم للنساء تحت 45.</li>
          <li><strong className="text-desert-primary">التأشيرة السياحية الإلكترونية:</strong> متاحة للجنسيات المؤهلة. تقديم أونلاين بالكامل بمستندات محدودة.</li>
        </ul>
      </div>

      <h2>المستندات العامة المطلوبة لجميع التأشيرات السعودية</h2>

      <div className="not-prose glass p-5 rounded-xl mb-6">
        <ol className="space-y-4 text-gray-300 list-decimal list-inside">
          <li><strong className="text-desert-primary">جواز سفر ساري المفعول:</strong> صلاحية 6 أشهر على الأقل وصفحتان فارغتان.</li>
          <li><strong className="text-desert-primary">صور شخصية:</strong> خلفية بيضاء، مقاس 4.3 سم × 5.5 سم، تعبير محايد.</li>
          <li><strong className="text-desert-primary">نموذج طلب التأشيرة:</strong> معلومات دقيقة وكاملة مطابقة لجواز السفر.</li>
          <li><strong className="text-desert-primary">نسخة من جواز السفر:</strong> صورة ملونة واضحة من صفحة المعلومات.</li>
          <li><strong className="text-desert-primary">شهادة التأمين الصحي:</strong> إثبات تأمين طبي ساري طوال مدة الإقامة.</li>
        </ol>
      </div>

      <h2>المستندات الخاصة حسب نوع التأشيرة</h2>

      <div className="not-prose glass p-5 rounded-xl mb-6">
        <h3 className="text-white font-semibold mb-3">تأشيرة الزيارة العائلية</h3>
        <ul className="space-y-2 text-gray-300 text-sm">
          <li>عقد زواج موثق من وزارة الخارجية السعودية (للزوجة)</li>
          <li>شهادات ميلاد موثقة للأطفال</li>
          <li>صورة الإقامة سارية المفعول للكفيل (صلاحية 90 يوماً على الأقل)</li>
          <li>شهادة راتب الكفيل من جهة العمل</li>
          <li>كشف حساب بنكي يثبت القدرة المالية</li>
          <li>إثبات العلاقة الأسرية</li>
          <li>نسخة جواز سفر الزائر ونموذج الطلب</li>
          <li>شهادة تأمين سفر</li>
        </ul>
      </div>

      <div className="not-prose glass p-5 rounded-xl mb-6">
        <h3 className="text-white font-semibold mb-3">تأشيرة العمل / التوظيف</h3>
        <ul className="space-y-2 text-gray-300 text-sm">
          <li>الشهادات الدراسية موثقة من وزارة الخارجية</li>
          <li>شهادات الخبرة المهنية (موثقة إن أمكن)</li>
          <li>تقرير اللياقة الطبية من مركز طبي معتمد</li>
          <li>شهادة حسن سيرة وسلوك من بلدك</li>
          <li>جواز سفر ساري المفعول (6 أشهر+)</li>
          <li>عقد العمل موقع من الطرفين</li>
          <li>مستندات تسجيل الشركة (صورة السجل التجاري)</li>
          <li>نموذج طلب التأشيرة والصور الشخصية</li>
        </ul>
      </div>

      <div className="not-prose glass p-5 rounded-xl mb-6">
        <h3 className="text-white font-semibold mb-3">تأشيرة العمرة</h3>
        <ul className="space-y-2 text-gray-300 text-sm">
          <li>جواز سفر ساري المفعول (6 أشهر+)</li>
          <li>شهادة تطعيم الالتهاب السحائي (ACWY خلال 5 سنوات)</li>
          <li>شهادة تطعيم كوفيد-19 (إذا كانت ما زالت مطلوبة)</li>
          <li>إثبات المحرم للنساء تحت 45 سنة</li>
          <li>حجز عمرة أو سكن مؤكد</li>
          <li>تذكرة عودة</li>
          <li>صور شخصية بخلفية بيضاء</li>
        </ul>
      </div>

      <h2>عملية توثيق المستندات</h2>

      <div className="not-prose glass p-6 rounded-xl mb-8">
        <ol className="space-y-5 text-gray-300">
          <li>
            <strong className="text-desert-primary">الخطوة 1: التوثيق في بلدك</strong>
            <p className="text-sm mt-1">توثيق المستندات من وزارة التعليم (للشهادات)، وزارة العدل (عقود الزواج)، ووزارة الخارجية في بلدك.</p>
          </li>
          <li>
            <strong className="text-desert-primary">الخطوة 2: توثيق السفارة السعودية</strong>
            <p className="text-sm mt-1">تقديم المستندات المصدقة للسفارة السعودية في بلدك. تستغرق 1-3 أسابيع.</p>
          </li>
          <li>
            <strong className="text-desert-primary">الخطوة 3: توثيق وزارة الخارجية السعودية</strong>
            <p className="text-sm mt-1">الخطوة الأخيرة والأهم. تستغرق 1-3 أيام عمل. رسوم التوثيق حوالي 150-300 ريال للمستند.</p>
          </li>
        </ol>
      </div>

      <h2>خطوات التقديم على التأشيرة</h2>

      <div className="not-prose glass p-5 rounded-xl mb-6">
        <ol className="space-y-3 text-gray-300 list-decimal list-inside">
          <li>حدد نوع التأشيرة المناسب</li>
          <li>اجمع المستندات باستخدام مولد القائمة</li>
          <li>أكمل التوثيق ثلاثي المراحل</li>
          <li>قدم الطلب عبر أنجز أو مقيم أو Qiwa</li>
          <li>ادفع الرسوم</li>
          <li>تتبع حالة الطلب</li>
          <li>استلم التأشيرة</li>
        </ol>
      </div>

      <h2>الأخطاء الشائعة التي تؤدي إلى رفض التأشيرة</h2>

      <div className="not-prose glass p-5 rounded-xl mb-6">
        <ul className="space-y-3 text-gray-300">
          <li><AlertTriangle className="h-4 w-4 text-desert-accent inline" /> جواز سفر منتهي الصلاحية</li>
          <li><AlertTriangle className="h-4 w-4 text-desert-accent inline" /> صور غير مطابقة للمواصفات</li>
          <li><AlertTriangle className="h-4 w-4 text-desert-accent inline" /> أختام توثيق ناقصة</li>
          <li><AlertTriangle className="h-4 w-4 text-desert-accent inline" /> نماذج غير مكتملة</li>
          <li><AlertTriangle className="h-4 w-4 text-desert-accent inline" /> مشاكل في إقامة الكفيل</li>
        </ul>
      </div>

      <h2>مولد قائمة التحقق من التأشيرة من Sauditoolhub</h2>
      <div className="not-prose glass p-6 rounded-xl mb-8">
        <Link href="/visa-checklist-generator" className="inline-flex items-center gap-2 rounded-xl bg-desert-primary px-8 py-3 text-sm font-bold text-white transition-all hover:bg-desert-primary-dim">
          <ClipboardCheck className="h-4 w-4" />
          أنشئ قائمتك الآن
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
        وثائق التأشيرة السعودية قد تكون مرهقة، لكن مع القائمة الصحيحة وفهم متطلبات التوثيق، تصبح العملية سهلة. أهم قاعدة هي: <strong>تحقق من مستنداتك قبل التقديم</strong>. ختم ناقص أو جواز منتهي قد يكلفك أسابيع من التأخير.
      </p>
      <p>
        استخدم{' '}
        <Link href="/visa-checklist-generator" className="text-desert-primary font-bold underline">مولد قائمة التحقق</Link>
        {' '}و{' '}
        <Link href="/family-visa-optimizer" className="text-desert-primary font-bold underline">محسن تأشيرة العائلة</Link>
        {' '}و{' '}
        <Link href="/jawazat-fine-calculator" className="text-desert-primary font-bold underline">حاسبة غرامات الجوازات</Link>
        . زوروا{' '}
        <Link href="/blog" className="text-desert-primary font-bold underline">المدونة</Link> لمزيد من الأدلة.
      </p>

      <div className="not-prose glass p-6 rounded-xl mt-8 text-center">
        <ClipboardCheck className="h-10 w-10 text-desert-primary mx-auto mb-3" />
        <h3 className="text-white text-lg font-bold mb-2">احصل على قائمة التحقق المخصصة</h3>
        <p className="text-gray-400 text-sm mb-4">مجاني — مخصص لنوع تأشيرتك وجنسيتك</p>
        <Link href="/visa-checklist-generator" className="inline-flex items-center gap-2 rounded-xl bg-desert-primary px-8 py-3 text-sm font-bold text-white transition-all hover:bg-desert-primary-dim">
          <ClipboardCheck className="h-4 w-4" />
          أنشئ القائمة الآن
        </Link>
      </div>
    </article>
  )
}

function UrContent() {
  return (
    <article className="prose prose-invert max-w-none prose-headings:text-desert-primary prose-a:text-desert-primary prose-strong:text-white prose-li:text-gray-300" dir="rtl">
      <h1>سعودی ویزا کے لیے دستاویزات کی مکمل فہرست 2026</h1>

      <div className="not-prose glass p-6 rounded-xl mb-8">
        <p className="text-gray-300 text-lg leading-relaxed">
          سعودی عرب کے سفر کی تیاری کرنا — یا مملکت میں نئی نوکری — صرف اس لیے کہ آپ کا ویزا مسترد ہو جائے کیونکہ کوئی دستاویز غائب ہے یا صحیح طریقے سے تصدیق شدہ نہیں ہے، اس سے زیادہ مایوس کن کچھ نہیں۔ سعودی ویزا کے عمل میں متعدد سرکاری ادارے، مخصوص دستاویزات کے فارمیٹ، اور سخت تصدیقی تقاضے شامل ہیں۔
        </p>
        <p className="text-gray-300 text-lg leading-relaxed mt-4">
          یہ گائیڈ <strong>2026 میں ہر بڑی سعودی ویزا قسم کے لیے درکار ہر دستاویز</strong> کا احاطہ کرتا ہے۔ ہم فیملی وزٹ ویزا، ورک ویزا، عمرہ ویزا، اور ٹورسٹ ای ویزا کا احاطہ کرتے ہیں۔
        </p>
        <p className="text-gray-300 text-lg leading-relaxed mt-4">
          ہمارا مفت{' '}
          <Link href="/visa-checklist-generator" className="text-desert-primary font-bold underline">
            Visa Checklist Generator
          </Link>{' '}
          استعمال کریں۔
        </p>
      </div>

      <h2>سعودی ویزا کی اقسام اور تقاضے</h2>
      <div className="not-prose glass p-5 rounded-xl mb-6">
        <ul className="space-y-3 text-gray-300">
          <li><strong className="text-desert-primary">فیملی وزٹ ویزا:</strong> شریک حیات، بچوں، والدین کے لیے۔ کفیل کے دستاویزات اور خاندانی تعلق کا ثبوت درکار۔</li>
          <li><strong className="text-desert-primary">ورک ویزا:</strong> ملازمت حاصل کرنے والوں کے لیے۔ ڈگریوں کی تصدیق اور میڈیکل چیک اپ شامل۔</li>
          <li><strong className="text-desert-primary">عمرہ ویزا:</strong> مسلمانوں کے لیے۔ ویکسین سرٹیفکیٹ اور محرم کا ثبوت درکار۔</li>
          <li><strong className="text-desert-primary">ٹورسٹ ای ویزا:</strong> اہل قومیتوں کے لیے۔ مکمل آن لائن۔</li>
        </ul>
      </div>

      <h2>تمام سعودی ویزا کے لیے عام دستاویزات</h2>
      <div className="not-prose glass p-5 rounded-xl mb-6">
        <ol className="space-y-3 text-gray-300 list-decimal list-inside">
          <li><strong className="text-desert-primary">مستند پاسپورٹ:</strong> کم از کم 6 ماہ کی میعاد اور دو خالی صفحے۔</li>
          <li><strong className="text-desert-primary">پاسپورٹ سائز تصاویر:</strong> سفید پس منظر، 4.3cm x 5.5cm۔</li>
          <li><strong className="text-desert-primary">مکمل درخواست فارم:</strong> پاسپورٹ سے مماثل معلومات۔</li>
          <li><strong className="text-desert-primary">پاسپورٹ کی کاپی:</strong> معلوماتی صفحے کی صاف رنگین اسکین۔</li>
          <li><strong className="text-desert-primary">ہیلتھ انشورنس:</strong> قیام کی مدت کے لیے درست بیمہ۔</li>
        </ol>
      </div>

      <h2>ویزا کی قسم کے مطابق مخصوص دستاویزات</h2>
      <div className="not-prose glass p-5 rounded-xl mb-6">
        <h3 className="text-white font-semibold mb-3">فیملی وزٹ ویزا</h3>
        <ul className="space-y-2 text-gray-300 text-sm">
          <li>تصدیق شدہ نکاح نامہ (وزارت خارجہ سے)</li>
          <li>بچوں کے تصدیق شدہ پیدائش سرٹیفکیٹ</li>
          <li>کفیل کا اقامہ (90 دن درست)</li>
          <li>کفیل کی تنخواہ سرٹیفکیٹ</li>
          <li>بینک اسٹیٹمنٹ</li>
          <li>خاندانی تعلق کا ثبوت</li>
        </ul>
      </div>

      <div className="not-prose glass p-5 rounded-xl mb-6">
        <h3 className="text-white font-semibold mb-3">ورک ویزا</h3>
        <ul className="space-y-2 text-gray-300 text-sm">
          <li>تصدیق شدہ ڈگری سرٹیفکیٹ</li>
          <li>تجربہ سرٹیفکیٹ</li>
          <li>میڈیکل فٹنس رپورٹ</li>
          <li>پولیس کلیرنس سرٹیفکیٹ</li>
          <li>ملازمت کا معاہدہ</li>
          <li>کمپنی رجسٹریشن</li>
        </ul>
      </div>

      <h2>دستاویزات کی تصدیق کا عمل</h2>
      <div className="not-prose glass p-6 rounded-xl mb-8">
        <ol className="space-y-4 text-gray-300">
          <li><strong className="text-desert-primary">مرحلہ 1:</strong> وطن میں تصدیق (وزارت تعلیم، وزارت انصاف، وزارت خارجہ)</li>
          <li><strong className="text-desert-primary">مرحلہ 2:</strong> سعودی سفارتخانے کی تصدیق (1-3 ہفتے)</li>
          <li><strong className="text-desert-primary">مرحلہ 3:</strong> سعودی وزارت خارجہ کی تصدیق (1-3 دن، 150-300 SAR فی دستاویز)</li>
        </ol>
      </div>

      <h2>ویزا مسترد ہونے کی عام وجوہات</h2>
      <div className="not-prose glass p-5 rounded-xl mb-6">
        <ul className="space-y-2 text-gray-300">
          <li><AlertTriangle className="h-4 w-4 text-desert-accent inline" /> میعاد ختم پاسپورٹ</li>
          <li><AlertTriangle className="h-4 w-4 text-desert-accent inline" /> غلط تصویر کی وضاحتیں</li>
          <li><AlertTriangle className="h-4 w-4 text-desert-accent inline" /> نامکمل تصدیق</li>
          <li><AlertTriangle className="h-4 w-4 text-desert-accent inline" /> ادھورے فارم</li>
          <li><AlertTriangle className="h-4 w-4 text-desert-accent inline" /> اقامہ کے مسائل</li>
        </ul>
      </div>

      <h2>Sauditoolhub Visa Checklist Generator</h2>
      <div className="not-prose glass p-6 rounded-xl mb-8">
        <Link href="/visa-checklist-generator" className="inline-flex items-center gap-2 rounded-xl bg-desert-primary px-8 py-3 text-sm font-bold text-white transition-all hover:bg-desert-primary-dim">
          <ClipboardCheck className="h-4 w-4" />
          اپنی فہرست بنائیں
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
        سعودی ویزا کی دستاویزات بھاری لگ سکتی ہیں، لیکن صحیح فہرست اور تصدیق کے تقاضوں کی سمجھ کے ساتھ، یہ عمل آسان ہو جاتا ہے۔ سب سے اہم قاعدہ: <strong>جمع کروانے سے پہلے اپنی دستاویزات کی تصدیق کریں</strong>۔
      </p>
      <p>
        {' '}
        <Link href="/visa-checklist-generator" className="text-desert-primary font-bold underline">Visa Checklist Generator</Link>
        {' '}استعمال کریں۔{' '}
        <Link href="/family-visa-optimizer" className="text-desert-primary font-bold underline">Family Visa Optimizer</Link>
        {' '}اور{' '}
        <Link href="/jawazat-fine-calculator" className="text-desert-primary font-bold underline">Jawazat Fine Calculator</Link>
        {' '}بھی دیکھیں۔{' '}
        <Link href="/blog" className="text-desert-primary font-bold underline">بلاگ</Link> پر مزید۔
      </p>

      <div className="not-prose glass p-6 rounded-xl mt-8 text-center">
        <ClipboardCheck className="h-10 w-10 text-desert-primary mx-auto mb-3" />
        <h3 className="text-white text-lg font-bold mb-2">اپنی ذاتی فہرست حاصل کریں</h3>
        <p className="text-gray-400 text-sm mb-4">مفت — آپ کے ویزا کی قسم کے مطابق</p>
        <Link href="/visa-checklist-generator" className="inline-flex items-center gap-2 rounded-xl bg-desert-primary px-8 py-3 text-sm font-bold text-white transition-all hover:bg-desert-primary-dim">
          <ClipboardCheck className="h-4 w-4" />
          فہرست بنائیں
        </Link>
      </div>
    </article>
  )
}

function TlContent() {
  return (
    <article className="prose prose-invert max-w-none prose-headings:text-desert-primary prose-a:text-desert-primary prose-strong:text-white prose-li:text-gray-300">
      <h1>Kumpletong Listahan ng mga Dokumento para sa Saudi Visa 2026</h1>

      <div className="not-prose glass p-6 rounded-xl mb-8">
        <p className="text-gray-300 text-lg leading-relaxed">
          Walang mas nakakabigo kaysa maghanda para sa isang biyahe papuntang Saudi Arabia — o isang bagong trabaho sa Kaharian — para lang tanggihan ang iyong visa dahil sa isang nawawala o hindi tamang dokumento. Ang proseso ng Saudi visa ay may kinalaman sa maraming ahensya ng gobyerno, tiyak na format ng dokumento, at mahigpit na kinakailangan sa attestation.
        </p>
        <p className="text-gray-300 text-lg leading-relaxed mt-4">
          Saklaw ng gabay na ito ang <strong>bawat dokumento na kailangan mo para sa bawat pangunahing uri ng Saudi visa sa 2026</strong>. Sinasaklaw namin ang Family Visit Visa, Work Visa, Umrah Visa, at Tourist e-Visa.
        </p>
        <p className="text-gray-300 text-lg leading-relaxed mt-4">
          Gamitin ang aming libreng{' '}
          <Link href="/visa-checklist-generator" className="text-desert-primary font-bold underline">
            Visa Checklist Generator
          </Link>{' '}
          para gumawa ng personalized na listahan.
        </p>
      </div>

      <h2>Mga Uri ng Saudi Visa at Kanilang mga Kinakailangan</h2>
      <div className="not-prose glass p-5 rounded-xl mb-6">
        <ul className="space-y-3 text-gray-300">
          <li><strong className="text-desert-primary">Family Visit Visa:</strong> Para sa asawa, mga anak, magulang. Kinakailangan ang dokumento ng sponsor at patunay ng relasyon.</li>
          <li><strong className="text-desert-primary">Work Visa:</strong> Para sa mga expat na may trabaho sa Saudi. Kasama ang attestation ng degree at medical exam.</li>
          <li><strong className="text-desert-primary">Umrah Visa:</strong> Para sa mga Muslim na bibisita para sa Umrah. Kinakailangan ang vaccination certificates at patunay ng Mahram.</li>
          <li><strong className="text-desert-primary">Tourist e-Visa:</strong> Available para sa mga kwalipikadong nasyonalidad. Ganap na online.</li>
        </ul>
      </div>

      <h2>Pangkalahatang Dokumento para sa Lahat ng Saudi Visa</h2>
      <div className="not-prose glass p-5 rounded-xl mb-6">
        <ol className="space-y-3 text-gray-300 list-decimal list-inside">
          <li><strong className="text-desert-primary">Valid Passport:</strong> Hindi bababa sa 6 na buwang validity at dalawang blank pages.</li>
          <li><strong className="text-desert-primary">Passport-sized Photos:</strong> Puting background, 4.3cm x 5.5cm, neutral expression.</li>
          <li><strong className="text-desert-primary">Application Form:</strong> Tumpak na impormasyon na tugma sa passport.</li>
          <li><strong className="text-desert-primary">Copy ng Passport:</strong> Malinaw na colored scan ng bio page.</li>
          <li><strong className="text-desert-primary">Health Insurance:</strong> Patunay ng medical insurance para sa buong pananatili.</li>
        </ol>
      </div>

      <h2>Mga Tiyak na Dokumento ayon sa Uri ng Visa</h2>
      <div className="not-prose glass p-5 rounded-xl mb-6">
        <h3 className="text-white font-semibold mb-3">Family Visit Visa</h3>
        <ul className="space-y-2 text-gray-300 text-sm">
          <li>Attested marriage certificate (mula sa MOFA)</li>
          <li>Attested birth certificates ng mga anak</li>
          <li>Kopya ng Iqama ng sponsor (90 araw na valid)</li>
          <li>Salary certificate ng sponsor</li>
          <li>Bank statement</li>
          <li>Patunay ng relasyon sa pamilya</li>
        </ul>
      </div>

      <div className="not-prose glass p-5 rounded-xl mb-6">
        <h3 className="text-white font-semibold mb-3">Work Visa</h3>
        <ul className="space-y-2 text-gray-300 text-sm">
          <li>Attested degree certificates</li>
          <li>Experience certificates</li>
          <li>Medical fitness report</li>
          <li>Police clearance certificate</li>
          <li>Employment contract</li>
          <li>Company registration documents</li>
        </ul>
      </div>

      <h2>Proseso ng Pagpapa-attest ng Dokumento</h2>
      <div className="not-prose glass p-6 rounded-xl mb-8">
        <ol className="space-y-4 text-gray-300">
          <li><strong className="text-desert-primary">Hakbang 1:</strong> Attestation sa iyong bansa (Ministry of Education, Justice, Foreign Affairs)</li>
          <li><strong className="text-desert-primary">Hakbang 2:</strong> Attestation ng Saudi Embassy (1-3 linggo)</li>
          <li><strong className="text-desert-primary">Hakbang 3:</strong> MOFA Saudi Arabia attestation (1-3 araw, 150-300 SAR bawat dokumento)</li>
        </ol>
      </div>

      <h2>Mga Dahilan ng Pagtanggi ng Visa</h2>
      <div className="not-prose glass p-5 rounded-xl mb-6">
        <ul className="space-y-2 text-gray-300">
          <li><AlertTriangle className="h-4 w-4 text-desert-accent inline" /> Expired passport</li>
          <li><AlertTriangle className="h-4 w-4 text-desert-accent inline" /> Maling sukat ng larawan</li>
          <li><AlertTriangle className="h-4 w-4 text-desert-accent inline" /> Hindi kumpletong attestation</li>
          <li><AlertTriangle className="h-4 w-4 text-desert-accent inline" /> Hindi kumpletong forms</li>
          <li><AlertTriangle className="h-4 w-4 text-desert-accent inline" /> Isyu sa Iqama ng sponsor</li>
        </ul>
      </div>

      <h2>Sauditoolhub Visa Checklist Generator</h2>
      <div className="not-prose glass p-6 rounded-xl mb-8">
        <Link href="/visa-checklist-generator" className="inline-flex items-center gap-2 rounded-xl bg-desert-primary px-8 py-3 text-sm font-bold text-white transition-all hover:bg-desert-primary-dim">
          <ClipboardCheck className="h-4 w-4" />
          Gawin ang Iyong Checklist
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
        Ang dokumentasyon ng Saudi visa ay maaaring nakakatakot, ngunit sa tamang checklist at pag-unawa sa mga kinakailangan sa attestation, ang proseso ay nagiging mas madali. Ang pinakamahalagang tuntunin ay: <strong>i-verify ang iyong mga dokumento bago isumite</strong>.
      </p>
      <p>
        Gamitin ang{' '}
        <Link href="/visa-checklist-generator" className="text-desert-primary font-bold underline">Visa Checklist Generator</Link>
        {' '}ng Sauditoolhub. Tingnan din ang{' '}
        <Link href="/family-visa-optimizer" className="text-desert-primary font-bold underline">Family Visa Optimizer</Link>
        {' '}at{' '}
        <Link href="/jawazat-fine-calculator" className="text-desert-primary font-bold underline">Jawazat Fine Calculator</Link>
        . Bisitahin ang aming{' '}
        <Link href="/blog" className="text-desert-primary font-bold underline">Blog</Link>.
      </p>

      <div className="not-prose glass p-6 rounded-xl mt-8 text-center">
        <ClipboardCheck className="h-10 w-10 text-desert-primary mx-auto mb-3" />
        <h3 className="text-white text-lg font-bold mb-2">Kunin ang Iyong Personalized na Checklist</h3>
        <p className="text-gray-400 text-sm mb-4">Libre — ayon sa iyong visa type at nasyonalidad</p>
        <Link href="/visa-checklist-generator" className="inline-flex items-center gap-2 rounded-xl bg-desert-primary px-8 py-3 text-sm font-bold text-white transition-all hover:bg-desert-primary-dim">
          <ClipboardCheck className="h-4 w-4" />
          Gawin ang Checklist Ngayon
        </Link>
      </div>
    </article>
  )
}

function BnContent() {
  return (
    <article className="prose prose-invert max-w-none prose-headings:text-desert-primary prose-a:text-desert-primary prose-strong:text-white prose-li:text-gray-300">
      <h1>সৌদি ভিসার জন্য সম্পূর্ণ ডকুমেন্ট চেকলিস্ট 2026</h1>

      <div className="not-prose glass p-6 rounded-xl mb-8">
        <p className="text-gray-300 text-lg leading-relaxed">
          সৌদি আরবে ভ্রমণের জন্য প্রস্তুতি নেওয়ার — বা রাজ্যে একটি নতুন চাকরির — চেয়ে হতাশাজনক আর কিছুই নেই, শুধু এই কারণে যে আপনার ভিসা একটি অনুপস্থিত বা ভুলভাবে প্রত্যয়িত ডকুমেন্টের কারণে প্রত্যাখ্যান করা হয়েছে। সৌদি ভিসা প্রক্রিয়ায় একাধিক সরকারি সংস্থা, নির্দিষ্ট ডকুমেন্ট ফরম্যাট এবং কঠোর প্রত্যয়নের প্রয়োজনীয়তা জড়িত।
        </p>
        <p className="text-gray-300 text-lg leading-relaxed mt-4">
          এই গাইডটি <strong>2026 সালে প্রতিটি প্রধান সৌদি ভিসার জন্য আপনার প্রয়োজনীয় প্রতিটি ডকুমেন্ট</strong> কভার করে। আমরা ফ্যামিলি ভিজিট ভিসা, ওয়ার্ক ভিসা, উমরাহ ভিসা এবং ট্যুরিস্ট ই-ভিসা কভার করি।
        </p>
        <p className="text-gray-300 text-lg leading-relaxed mt-4">
          আমাদের বিনামূল্যের{' '}
          <Link href="/visa-checklist-generator" className="text-desert-primary font-bold underline">
            ভিসা চেকলিস্ট জেনারেটর
          </Link>{' '}
          ব্যবহার করুন সেকেন্ডের মধ্যে একটি ব্যক্তিগতকৃত ডকুমেন্ট চেকলিস্ট তৈরি করতে।
        </p>
      </div>

      <h2>সৌদি ভিসার ধরন এবং তাদের প্রয়োজনীয়তা</h2>
      <div className="not-prose glass p-5 rounded-xl mb-6">
        <ul className="space-y-3 text-gray-300">
          <li><strong className="text-desert-primary">ফ্যামিলি ভিজিট ভিসা:</strong> স্ত্রী/স্বামী, সন্তান, পিতামাতার জন্য। স্পনসরের ডকুমেন্ট এবং পারিবারিক সম্পর্কের প্রমাণ প্রয়োজন।</li>
          <li><strong className="text-desert-primary">ওয়ার্ক / এমপ্লয়মেন্ট ভিসা:</strong> যারা সৌদি আরবে চাকরি পেয়েছেন তাদের জন্য। ডিগ্রি প্রত্যয়ন এবং মেডিকেল চেক অন্তর্ভুক্ত।</li>
          <li><strong className="text-desert-primary">উমরাহ ভিসা:</strong> মুসলিমদের জন্য। ভ্যাকসিন সার্টিফিকেট এবং মাহরামের প্রমাণ প্রয়োজন।</li>
          <li><strong className="text-desert-primary">ট্যুরিস্ট ই-ভিসা:</strong> যোগ্য নাগরিকদের জন্য। সম্পূর্ণ অনলাইন।</li>
        </ul>
      </div>

      <h2>সকল সৌদি ভিসার জন্য সাধারণ ডকুমেন্ট</h2>
      <div className="not-prose glass p-5 rounded-xl mb-6">
        <ol className="space-y-3 text-gray-300 list-decimal list-inside">
          <li><strong className="text-desert-primary">বৈধ পাসপোর্ট:</strong> কমপক্ষে ৬ মাসের মেয়াদ এবং দুটি খালি পৃষ্ঠা।</li>
          <li><strong className="text-desert-primary">পাসপোর্ট সাইজের ছবি:</strong> সাদা ব্যাকগ্রাউন্ড, ৪.৩সেমি x ৫.৫সেমি, নিরপেক্ষ অভিব্যক্তি।</li>
          <li><strong className="text-desert-primary">পূরণকৃত আবেদন ফর্ম:</strong> পাসপোর্টের সাথে মিলে যাওয়া সঠিক তথ্য।</li>
          <li><strong className="text-desert-primary">পাসপোর্টের কপি:</strong> বায়ো পৃষ্ঠার পরিষ্কার রঙিন স্ক্যান।</li>
          <li><strong className="text-desert-primary">স্বাস্থ্য বীমা:</strong> সম্পূর্ণ থাকার সময়ের জন্য বৈধ বীমার প্রমাণ।</li>
        </ol>
      </div>

      <h2>ভিসার ধরন অনুযায়ী নির্দিষ্ট ডকুমেন্ট</h2>
      <div className="not-prose glass p-5 rounded-xl mb-6">
        <h3 className="text-white font-semibold mb-3">ফ্যামিলি ভিজিট ভিসা</h3>
        <ul className="space-y-2 text-gray-300 text-sm">
          <li>প্রত্যয়িত বিবাহ সনদ (MOFA থেকে)</li>
          <li>সন্তানদের প্রত্যয়িত জন্ম সনদ</li>
          <li>স্পনসরের ইকামা (৯০ দিন বৈধ)</li>
          <li>স্পনসরের বেতন সনদ</li>
          <li>ব্যাংক স্টেটমেন্ট</li>
          <li>পারিবারিক সম্পর্কের প্রমাণ</li>
        </ul>
      </div>

      <div className="not-prose glass p-5 rounded-xl mb-6">
        <h3 className="text-white font-semibold mb-3">ওয়ার্ক ভিসা</h3>
        <ul className="space-y-2 text-gray-300 text-sm">
          <li>প্রত্যয়িত ডিগ্রি সার্টিফিকেট</li>
          <li>অভিজ্ঞতার সার্টিফিকেট</li>
          <li>মেডিকেল ফিটনেস রিপোর্ট</li>
          <li>পুলিশ ক্লিয়ারেন্স সার্টিফিকেট</li>
          <li>চাকরির চুক্তি</li>
          <li>কোম্পানি রেজিস্ট্রেশন ডকুমেন্ট</li>
        </ul>
      </div>

      <h2>ডকুমেন্ট প্রত্যয়ন প্রক্রিয়া</h2>
      <div className="not-prose glass p-6 rounded-xl mb-8">
        <ol className="space-y-4 text-gray-300">
          <li><strong className="text-desert-primary">ধাপ ১:</strong> নিজ দেশে প্রত্যয়ন (শিক্ষা মন্ত্রণালয়, বিচার মন্ত্রণালয়, পররাষ্ট্র মন্ত্রণালয়)</li>
          <li><strong className="text-desert-primary">ধাপ ২:</strong> সৌদি দূতাবাসের প্রত্যয়ন (১-৩ সপ্তাহ)</li>
          <li><strong className="text-desert-primary">ধাপ ৩:</strong> সৌদি পররাষ্ট্র মন্ত্রণালয়ের (MOFA) প্রত্যয়ন (১-৩ দিন, প্রতি ডকুমেন্টে ১৫০-৩০০ SAR)</li>
        </ol>
      </div>

      <h2>ভিসা প্রত্যাখানের সাধারণ কারণ</h2>
      <div className="not-prose glass p-5 rounded-xl mb-6">
        <ul className="space-y-2 text-gray-300">
          <li><AlertTriangle className="h-4 w-4 text-desert-accent inline" /> মেয়াদোত্তীর্ণ পাসপোর্ট</li>
          <li><AlertTriangle className="h-4 w-4 text-desert-accent inline" /> ভুল ছবির স্পেসিফিকেশন</li>
          <li><AlertTriangle className="h-4 w-4 text-desert-accent inline" /> অসম্পূর্ণ প্রত্যয়ন</li>
          <li><AlertTriangle className="h-4 w-4 text-desert-accent inline" /> অসম্পূর্ণ ফর্ম</li>
          <li><AlertTriangle className="h-4 w-4 text-desert-accent inline" /> ইকামা সংক্রান্ত সমস্যা</li>
        </ul>
      </div>

      <h2>Sauditoolhub ভিসা চেকলিস্ট জেনারেটর</h2>
      <div className="not-prose glass p-6 rounded-xl mb-8">
        <Link href="/visa-checklist-generator" className="inline-flex items-center gap-2 rounded-xl bg-desert-primary px-8 py-3 text-sm font-bold text-white transition-all hover:bg-desert-primary-dim">
          <ClipboardCheck className="h-4 w-4" />
          আপনার চেকলিস্ট তৈরি করুন
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
        সৌদি ভিসার ডকুমেন্টেশন জটিল মনে হতে পারে, কিন্তু সঠিক চেকলিস্ট এবং প্রত্যয়নের প্রয়োজনীয়তা বোঝার সাথে, প্রক্রিয়াটি সহজ হয়ে যায়। সবচেয়ে গুরুত্বপূর্ণ নিয়ম হল: <strong>জমা দেওয়ার আগে আপনার ডকুমেন্ট যাচাই করুন</strong>।
      </p>
      <p>
        {' '}
        <Link href="/visa-checklist-generator" className="text-desert-primary font-bold underline">Visa Checklist Generator</Link>
        {' '}ব্যবহার করুন।{' '}
        <Link href="/family-visa-optimizer" className="text-desert-primary font-bold underline">Family Visa Optimizer</Link>
        {' '}এবং{' '}
        <Link href="/jawazat-fine-calculator" className="text-desert-primary font-bold underline">Jawazat Fine Calculator</Link>
        {' '}ও দেখুন। আমাদের{' '}
        <Link href="/blog" className="text-desert-primary font-bold underline">ব্লগ</Link> দেখুন।
      </p>

      <div className="not-prose glass p-6 rounded-xl mt-8 text-center">
        <ClipboardCheck className="h-10 w-10 text-desert-primary mx-auto mb-3" />
        <h3 className="text-white text-lg font-bold mb-2">আপনার ব্যক্তিগতকৃত চেকলিস্ট পান</h3>
        <p className="text-gray-400 text-sm mb-4">বিনামূল্যে — আপনার ভিসার ধরন এবং জাতীয়তা অনুযায়ী</p>
        <Link href="/visa-checklist-generator" className="inline-flex items-center gap-2 rounded-xl bg-desert-primary px-8 py-3 text-sm font-bold text-white transition-all hover:bg-desert-primary-dim">
          <ClipboardCheck className="h-4 w-4" />
          এখনই চেকলিস্ট তৈরি করুন
        </Link>
      </div>
    </article>
  )
}

export default async function VisaChecklistGuidePage({ params }: Props) {
  const { locale } = await params
  const isAr = locale === 'ar'
  const isUr = locale === 'ur'
  const isTl = locale === 'tl'
  const isBn = locale === 'bn'
  const isDefault = locale === 'en'
  const pageUrl = isDefault ? `${baseUrl}/guide/visa-checklist-generator-saudi-arabia-2026` : `${baseUrl}/${locale}/guide/visa-checklist-generator-saudi-arabia-2026`

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
          { name: isAr ? 'أدلة المقيمين' : isUr ? 'مقیم گائیڈز' : isTl ? 'Gabay para sa Expat' : isBn ? 'প্রবাসী গাইড' : 'Expats Guides', url: `${baseUrl}/${isDefault ? '' : locale + '/'}expats-tools` },
          { name: isAr ? 'دليل وثائق التأشيرة' : isUr ? 'ویزا دستاویزات گائیڈ' : isTl ? 'Gabay sa Visa Documents' : isBn ? 'ভিসা ডকুমেন্ট গাইড' : 'Visa Documents Guide', url: pageUrl },
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
