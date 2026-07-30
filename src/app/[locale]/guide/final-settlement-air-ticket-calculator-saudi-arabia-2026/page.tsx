import type { Metadata } from 'next'
import Link from 'next/link'
import { BreadcrumbJsonLd, FAQJsonLd, ArticleJsonLd } from '@/components/JsonLd'
import { Calculator, Plane, AlertTriangle, CheckCircle, Briefcase, FileText } from 'lucide-react'

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
    ? 'الدليل الكامل للتسوية النهائية وتذكرة الطيران في السعودية 2026 | Sauditoolhub'
    : isUr
    ? 'سعودی عرب میں فائنل سیٹلمنٹ اور ایئر ٹکٹ کا مکمل گائیڈ 2026 | Sauditoolhub'
    : isTl
    ? 'Kumpletong Gabay sa Final Settlement at Air Ticket sa Saudi Arabia 2026 | Sauditoolhub'
    : isBn
    ? 'সৌদি আরবে চূড়ান্ত নিষ্পত্তি এবং বিমান টিকিটের সম্পূর্ণ গাইড 2026 | Sauditoolhub'
    : 'Complete Guide to Final Settlement & Air Ticket in Saudi Arabia 2026 | Sauditoolhub'

  const description = isAr
    ? 'دليل كامل لحساب التسوية النهائية وتذكرة الطيران في السعودية 2026. تعرف على المادة 76 وقانون العمل السعودي لحساب مستحقاتك.'
    : isUr
    ? 'سعودی عرب میں فائنل سیٹلمنٹ اور ایئر ٹکٹ کا مکمل گائیڈ 2026۔ آرٹیکل 76، تنخواہ، چھٹیاں، اور EOSB کا حساب سیکھیں۔'
    : isTl
    ? 'Kumpletong gabay sa final settlement at air ticket sa Saudi Arabia 2026. Alamin ang Article 76 ng Saudi Labor Law para sa iyong mga benepisyo.'
    : isBn
    ? 'সৌদি আরবে চূড়ান্ত নিষ্পত্তি এবং বিমান টিকিটের সম্পূর্ণ গাইড 2026। আর্টিকেল 76 ও সৌদি লেবর লাউ সম্পর্কে জানুন।'
    : 'Complete guide to final settlement and air ticket in Saudi Arabia 2026. Learn Saudi Labor Law Articles 76-78, EOSB calculation, unpaid salary, and air ticket entitlement.'

  return {
    title,
    description,
    alternates: {
      canonical: isDefault ? `${baseUrl}/guide/final-settlement-air-ticket-calculator-saudi-arabia-2026` : `${baseUrl}/${locale}/guide/final-settlement-air-ticket-calculator-saudi-arabia-2026`,
      languages: {
        en: `${baseUrl}/guide/final-settlement-air-ticket-calculator-saudi-arabia-2026`,
        ar: `${baseUrl}/ar/guide/final-settlement-air-ticket-calculator-saudi-arabia-2026`,
        ur: `${baseUrl}/ur/guide/final-settlement-air-ticket-calculator-saudi-arabia-2026`,
        tl: `${baseUrl}/tl/guide/final-settlement-air-ticket-calculator-saudi-arabia-2026`,
        bn: `${baseUrl}/bn/guide/final-settlement-air-ticket-calculator-saudi-arabia-2026`,
      },
    },
    openGraph: {
      title,
      description,
      url: isDefault ? `${baseUrl}/guide/final-settlement-air-ticket-calculator-saudi-arabia-2026` : `${baseUrl}/${locale}/guide/final-settlement-air-ticket-calculator-saudi-arabia-2026`,
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
  headline: 'The Complete Guide to Final Settlement & Air Ticket in Saudi Arabia 2026',
  description: 'Learn how to calculate your final settlement including EOSB, unpaid salary, unused leave pay, and air ticket entitlement under Saudi Labor Law.',
  author: { '@type': 'Person', name: 'Sauditoolhub Team' },
  publisher: { '@type': 'Organization', name: 'Sauditoolhub', logo: { '@type': 'ImageObject', url: `${baseUrl}/logo.png` } },
  datePublished: '2026-01-01',
  dateModified: '2026-07-01',
}

const schemaAr = {
  ...articleSchemaEn,
  headline: 'الدليل الكامل للتسوية النهائية وتذكرة الطيران في السعودية 2026',
  description: 'تعلم كيفية حساب التسوية النهائية بما في ذلك مكافأة نهاية الخدمة والراتب غير المدفوع وأجر الإجازة غير المستخدمة وتذكرة الطيران بموجب نظام العمل السعودي.',
}

const schemaUr = {
  ...articleSchemaEn,
  headline: 'سعودی عرب میں فائنل سیٹلمنٹ اور ایئر ٹکٹ کا مکمل گائیڈ 2026',
  description: 'سعودی لیبر لا کے تحت اپنے فائنل سیٹلمنٹ کا حساب لگانا سیکھیں — EOSB، غیر ادا شدہ تنخواہ، غیر استعمال شدہ چھٹیاں، اور ایئر ٹکٹ۔',
}

const schemaTl = {
  ...articleSchemaEn,
  headline: 'Kumpletong Gabay sa Final Settlement at Air Ticket sa Saudi Arabia 2026',
  description: 'Matuto kung paano kalkulahin ang iyong final settlement kasama ang EOSB, unpaid salary, unused leave pay, at air ticket entitlement sa ilalim ng Saudi Labor Law.',
}

const schemaBn = {
  ...articleSchemaEn,
  headline: 'সৌদি আরবে চূড়ান্ত নিষ্পত্তি এবং বিমান টিকিটের সম্পূর্ণ গাইড 2026',
  description: 'সৌদি লেবর লাউ অনুযায়ী EOSB, অবৈতনিক বেতন, অব্যবহৃত ছুটির বেতন এবং বিমান টিকিটসহ আপনার চূড়ান্ত নিষ্পত্তি ক্যালকুলেট করতে শিখুন।',
}

const faqsEn = [
  { question: 'What is included in a final settlement in Saudi Arabia?', answer: 'A final settlement includes End of Service Benefit (EOSB), unpaid salary for remaining working days, unused annual leave pay, air ticket entitlement (one-way economy ticket to home country or cash equivalent), and any other contractual benefits like bonuses or commissions.' },
  { question: 'How is air ticket calculated in final settlement in Saudi Arabia?', answer: 'The air ticket is typically a one-way economy class ticket to your home country. If the employer does not provide the ticket, they must pay a cash equivalent. The average value ranges from 2,000 to 3,000 SAR depending on your home country.' },
  { question: 'Do I get air ticket if I resign in Saudi Arabia?', answer: 'Yes, air ticket entitlement is usually maintained regardless of whether you resign or are terminated, as long as you complete the probation period. However, check your employment contract as some employers include conditions for resignation cases.' },
  { question: 'Is unused leave paid in final settlement Saudi Arabia?', answer: 'Yes, under Saudi Labor Law Article 76, you are entitled to compensation for unused annual leave days at a rate of your daily salary multiplied by the number of unused days. This is calculated as monthly salary divided by 30, multiplied by unused leave days.' },
  { question: 'How many days can employer take to pay final settlement in Saudi Arabia?', answer: 'Under Saudi Labor Law, the employer must pay the final settlement within 7 to 14 days from the last working day. Delays beyond this period can result in penalties. If your employer delays unreasonably, you can file a complaint with the Ministry of Human Resources.' },
  { question: 'Does final settlement include housing allowance?', answer: 'Housing allowance is included only in the calculation of unpaid salary and unused leave pay. It is generally not included in EOSB calculation, which is based on basic salary only. Always check your specific contract terms.' },
  { question: 'What if my employer refuses to pay final settlement?', answer: 'If your employer refuses to pay, file a complaint through Qiwa or the Ministry of Human Resources. You can also approach the Labor Court. Saudi labor laws are pro-employee in this regard, and the ministry can enforce payment through bank transfer guarantees.' },
  { question: 'Can I get final settlement if I abscond (Huroob)?', answer: 'If you abscond (Huroob), your employer may report you to the authorities. In most cases, absconding voids your right to EOSB and air ticket. You may still claim unpaid salary for days actually worked, but legal disputes are common in such cases.' },
  { question: 'Is EOSB and final settlement the same thing?', answer: 'No. EOSB (End of Service Benefit) is one component of the final settlement. The final settlement is the total amount including EOSB, unpaid salary, unused leave pay, air ticket, and other benefits. EOSB is calculated under Article 84/85, while other components have separate rules.' },
  { question: 'How to calculate final settlement online in Saudi Arabia?', answer: 'Use the Sauditoolhub Final Settlement Calculator at /final-settlement-calculator. It combines EOSB calculation, unpaid salary, unused leave days, and air ticket value into one comprehensive estimate. It is free, instant, and requires no signup.' },
]

const faqsAr = [
  { question: 'ما الذي تتضمنه التسوية النهائية في السعودية؟', answer: 'تتضمن مكافأة نهاية الخدمة EOSB، الراتب غير المدفوع لأيام العمل المتبقية، أجر الإجازة السنوية غير المستخدمة، تذكرة الطيران (ذهاب فقط درجة اقتصادية)، وأي مزايا تعاقدية أخرى.' },
  { question: 'كيف تحسب تذكرة الطيران في التسوية النهائية؟', answer: 'عادة تذكرة ذهاب فقط درجة اقتصادية إلى بلدك. إذا لم يوفرها صاحب العمل، يجب أن يدفع القيمة النقدية المعادلة. يتراوح المتوسط بين 2,000 و 3,000 ريال حسب بلدك.' },
  { question: 'هل أستحق تذكرة طيران إذا استقلت؟', answer: 'نعم، عادة تحتفظ بحق تذكرة الطيران سواء استقلت أو أنهيت خدمتك، طالما أكملت فترة التجربة. تحقق من عقد العمل حيث قد تشمل بعض العقود شروطاً خاصة.' },
  { question: 'هل تدفع الإجازات غير المستخدمة في التسوية النهائية؟', answer: 'نعم، بموجب المادة 76 من نظام العمل السعودي، تستحق تعويضاً عن أيام الإجازة السنوية غير المستخدمة بمعدل راتبك اليومي مضروباً في عدد الأيام غير المستخدمة.' },
  { question: 'كم يوماً يستغرق صرف التسوية النهائية في السعودية؟', answer: 'يجب على صاحب العمل دفع التسوية النهائية خلال 7 إلى 14 يوماً من آخر يوم عمل. التأخير قد يؤدي إلى عقوبات. يمكنك تقديم شكوى لوزارة الموارد البشرية.' },
  { question: 'هل تشمل التسوية النهائية بدل السكن؟', answer: 'يدخل بدل السكن فقط في حساب الراتب غير المدفوع وأجر الإجازة غير المستخدمة. لا يدخل في حساب EOSB الذي يعتمد على الراتب الأساسي فقط.' },
  { question: 'ماذا لو رفض صاحب العمل دفع التسوية النهائية؟', answer: 'قدم شكوى عبر Qiwa أو وزارة الموارد البشرية. يمكنك أيضاً التوجه إلى محكمة العمل. قوانين العمل السعودية مع الموظف في هذه الحالة.' },
  { question: 'هل أستحق التسوية النهائية إذا هربت (هروب)؟', answer: 'الهروب قد يلغي حقك في EOSB وتذكرة الطيران. قد تستحق الراتب عن الأيام التي عملتها فعلاً، لكن النزاعات القانونية شائعة في هذه الحالات.' },
  { question: 'هل EOSB والتسوية النهائية هما نفس الشيء؟', answer: 'لا. EOSB جزء من التسوية النهائية. التسوية النهائية تشمل EOSB والراتب غير المدفوع وأجر الإجازة غير المستخدمة وتذكرة الطيران والمزايا الأخرى.' },
  { question: 'كيف تحسب التسوية النهائية أونلاين في السعودية؟', answer: 'استخدم حاسبة التسوية النهائية من Sauditoolhub على /final-settlement-calculator. تجمع بين EOSB والراتب غير المدفوع والإجازات غير المستخدمة وتذكرة الطيران.' },
]

const faqsUr = [
  { question: 'سعودی عرب میں فائنل سیٹلمنٹ میں کیا شامل ہے؟', answer: 'فائنل سیٹلمنٹ میں EOSB، غیر ادا شدہ تنخواہ، غیر استعمال شدہ سالانہ چھٹیاں، ایئر ٹکٹ (ایک طرفہ اکانومی)، اور دیگر معاہدہی فوائد شامل ہوتے ہیں۔' },
  { question: 'فائنل سیٹلمنٹ میں ایئر ٹکٹ کیسے حساب کیا جاتا ہے؟', answer: 'ایئر ٹکٹ عام طور پر آپ کے وطن کے لیے ایک طرفہ اکانومی کلاس کا ہوتا ہے۔ اگر آجر ٹکٹ فراہم نہ کرے تو نقدی ادا کرنی ہوگی۔ اوسط قیمت 2,000 سے 3,000 SAR ہے۔' },
  { question: 'کیا استعفیٰ دینے پر ایئر ٹکٹ ملتا ہے؟', answer: 'جی ہاں، عام طور پر ایئر ٹکٹ کا حق استعفیٰ یا برطرفی دونوں صورتوں میں ملتا ہے، بشرطیکہ آپ نے پروبیشن پیریڈ مکمل کیا ہو۔' },
  { question: 'کیا غیر استعمال شدہ چھٹیوں کی ادائیگی فائنل سیٹلمنٹ میں شامل ہے؟', answer: 'ہاں، سعودی لیبر لا آرٹیکل 76 کے تحت، آپ غیر استعمال شدہ سالانہ چھٹیوں کے دنوں کی ادائیگی کے حقدار ہیں۔ یہ آپ کی ماہانہ تنخواہ کو 30 سے تقسیم کرکے اور غیر استعمال شدہ دنوں سے ضرب دے کر نکالا جاتا ہے۔' },
  { question: 'فائنل سیٹلمنٹ کی ادائیگی میں کتنے دن لگتے ہیں؟', answer: 'آجر کو آخری کام کے دن سے 7 سے 14 دن کے اندر فائنل سیٹلمنٹ ادا کرنا ہوتا ہے۔ تاخیر پر جرمانے ہو سکتے ہیں۔' },
  { question: 'کیا فائنل سیٹلمنٹ میں ہاؤسنگ الاؤنس شامل ہے؟', answer: 'ہاؤسنگ الاؤنس صرف غیر ادا شدہ تنخواہ اور غیر استعمال شدہ چھٹیوں میں شامل ہوتا ہے۔ EOSB میں شامل نہیں ہوتا جو صرف بنیادی تنخواہ پر حساب ہوتا ہے۔' },
  { question: 'اگر آجر فائنل سیٹلمنٹ دینے سے انکار کرے تو کیا کریں؟', answer: 'Qiwa یا وزارت افرادی قوت کے ذریعے شکایت درج کریں۔ لیبر کورٹ بھی جا سکتے ہیں۔ سعودی قوانین اس معاملے میں ملازم کے حق میں ہیں۔' },
  { question: 'کیا ہروب کی صورت میں فائنل سیٹلمنٹ ملتا ہے؟', answer: 'ہروب کی صورت میں EOSB اور ایئر ٹکٹ کا حق ختم ہو سکتا ہے۔ آپ صرف کام کرنے کے دنوں کی تنخواہ لے سکتے ہیں لیکن قانونی تنازعات عام ہیں۔' },
  { question: 'کیا EOSB اور فائنل سیٹلمنٹ ایک ہی چیز ہیں؟', answer: 'نہیں۔ EOSB فائنل سیٹلمنٹ کا ایک حصہ ہے۔ فائنل سیٹلمنٹ میں EOSB، غیر ادا شدہ تنخواہ، چھٹیاں، ایئر ٹکٹ اور دیگر فوائد شامل ہیں۔' },
  { question: 'سعودی عرب میں فائنل سیٹلمنٹ آن لائن کیسے حساب کریں؟', answer: 'Sauditoolhub کا فائنل سیٹلمنٹ کیلکولیٹر استعمال کریں /final-settlement-calculator پر۔ یہ مفت، فوری اور بغیر سائن اپ کے ہے۔' },
]

const faqsTl = [
  { question: 'Ano ang kasama sa final settlement sa Saudi Arabia?', answer: 'Kasama sa final settlement ang EOSB, unpaid salary para sa natitirang araw ng trabaho, unused annual leave pay, air ticket (one-way economy ticket patungo sa iyong bansa), at iba pang contractual benefits.' },
  { question: 'Paano kinakalkula ang air ticket sa final settlement?', answer: 'Ang air ticket ay karaniwang one-way economy class ticket patungo sa iyong home country. Kung hindi ito ibibigay ng employer, dapat silang magbayad ng cash equivalent. Ang average ay nasa 2,000 hanggang 3,000 SAR.' },
  { question: 'Nakakatanggap ba ako ng air ticket kung ako ay mag-resign?', answer: 'Oo, ang air ticket entitlement ay karaniwang nananatili kahit mag-resign ka o ma-terminate, basta natapos mo ang probation period. Suriin ang iyong kontrata para sa mga espesyal na kondisyon.' },
  { question: 'Binabayaran ba ang unused leave sa final settlement?', answer: 'Oo, sa ilalim ng Saudi Labor Law Article 76, ikaw ay may karapatan sa compensation para sa unused annual leave days sa rate ng daily salary mo na minultiply sa bilang ng unused days.' },
  { question: 'Ilang araw bago mabayaran ang final settlement sa Saudi Arabia?', answer: 'Dapat bayaran ng employer ang final settlement sa loob ng 7 hanggang 14 na araw mula sa huling araw ng trabaho. Ang pagkaantala ay maaaring magdulot ng penalties.' },
  { question: 'Kasama ba ang housing allowance sa final settlement?', answer: 'Ang housing allowance ay kasama lamang sa unpaid salary at unused leave pay. Hindi ito kasama sa EOSB calculation na batay lamang sa basic salary.' },
  { question: 'Ano ang gagawin kung tumanggi ang employer na magbayad ng final settlement?', answer: 'Maghain ng complaint sa pamamagitan ng Qiwa o Ministry of Human Resources. Maaari ka ring pumunta sa Labor Court. Ang Saudi labor laws ay pabor sa empleyado sa bagay na ito.' },
  { question: 'Makakatanggap ba ako ng final settlement kung ako ay nag-abscond (Huroob)?', answer: 'Kung ikaw ay nag-abscond, maaaring mawala ang iyong karapatan sa EOSB at air ticket. Maaari ka pa ring mag-claim ng unpaid salary para sa mga araw na nagtrabaho ka.' },
  { question: 'Ang EOSB ba at final settlement ay pareho?', answer: 'Hindi. Ang EOSB ay isang bahagi ng final settlement. Ang final settlement ay ang kabuuang halaga na kinabibilangan ng EOSB, unpaid salary, unused leave pay, air ticket, at iba pang benepisyo.' },
  { question: 'Paano kalkulahin ang final settlement online sa Saudi Arabia?', answer: 'Gamitin ang Sauditoolhub Final Settlement Calculator sa /final-settlement-calculator. Pinagsasama nito ang EOSB, unpaid salary, unused leave days, at air ticket sa isang komprehensibong estimate.' },
]

const faqsBn = [
  { question: 'সৌদি আরবে চূড়ান্ত নিষ্পত্তিতে কী কী অন্তর্ভুক্ত?', answer: 'চূড়ান্ত নিষ্পত্তিতে EOSB, অবশিষ্ট কাজের দিনের অবৈতনিক বেতন, অব্যবহৃত বার্ষিক ছুটির বেতন, বিমান টিকিট (একমুখী ইকোনমি টিকিট), এবং অন্যান্য চুক্তিগত সুবিধা অন্তর্ভুক্ত।' },
  { question: 'চূড়ান্ত নিষ্পত্তিতে বিমান টিকিট কীভাবে গণনা করা হয়?', answer: 'বিমান টিকিট সাধারণত আপনার দেশে ফেরতের একমুখী ইকোনমি ক্লাস টিকিট। কর্মদাতা টিকিট না দিলে নগদ সমতুল্য দিতে হবে। গড় মূল্য ২,০০০ থেকে ৩,০০০ SAR এর মধ্যে।' },
  { question: 'রেজিগন করলে কি বিমান টিকিট পাওয়া যায়?', answer: 'হ্যাঁ, বিমান টিকিটের অধিকার সাধারণত রেজিগন বা টার্মিনেশন উভয় ক্ষেত্রেই থাকে, যতক্ষণ আপনি প্রোবেশন সময় শেষ করেছেন। আপনার চুক্তি পরীক্ষা করুন।' },
  { question: 'চূড়ান্ত নিষ্পত্তিতে কি অব্যবহৃত ছুটির বেতন দেওয়া হয়?', answer: 'হ্যাঁ, সৌদি লেবর লাউ আর্টিকেল ৭৬ অনুযায়ী, আপনি দৈনিক বেতন × অব্যবহৃত দিনের সংখ্যা হারে অব্যবহৃত বার্ষিক ছুটির জন্য ক্ষতিপূরণ পাবেন।' },
  { question: 'সৌদি আরবে চূড়ান্ত নিষ্পত্তি পেতে কত দিন লাগে?', answer: 'শেষ কার্যদিবস থেকে ৭ থেকে ১৪ দিনের মধ্যে কর্মদাতাকে চূড়ান্ত নিষ্পত্তি দিতে হবে। বিলম্বে জরিমানা হতে পারে।' },
  { question: 'চূড়ান্ত নিষ্পত্তিতে কি হাউজিং ভাতা অন্তর্ভুক্ত?', answer: 'হাউজিং ভাতা শুধুমাত্র অবৈতনিক বেতন এবং অব্যবহৃত ছুটির বেতনে অন্তর্ভুক্ত। EOSB তে এটি অন্তর্ভুক্ত নয়, যা শুধুমাত্র বেসিক বেতনের উপর গণনা করা হয়।' },
  { question: 'কর্মদাতা চূড়ান্ত নিষ্পত্তি দিতে অস্বীকার করলে কী করবেন?', answer: 'Qiwa বা মানবসম্পদ মন্ত্রণালয়ের মাধ্যমে অভিযোগ দায়ের করুন। লেবার কোর্টেও যেতে পারবেন। সৌদি আইন এই বিষয়ে কর্মচারীর পক্ষে।' },
  { question: 'হুরুব (পলায়ন) করলে কি চূড়ান্ত নিষ্পত্তি পাওয়া যায়?', answer: 'হুরুব করলে EOSB এবং বিমান টিকিটের অধিকার বাতিল হতে পারে। আপনি শুধু কাজ করা দিনের বেতন পেতে পারেন, তবে আইনি বিরোধ সাধারণ।' },
  { question: 'EOSB এবং চূড়ান্ত নিষ্পত্তি কি একই জিনিস?', answer: 'না। EOSB চূড়ান্ত নিষ্পত্তির একটি উপাদান মাত্র। চূড়ান্ত নিষ্পত্তিতে EOSB, অবৈতনিক বেতন, অব্যবহৃত ছুটি, বিমান টিকিট এবং অন্যান্য সুবিধা অন্তর্ভুক্ত।' },
  { question: 'সৌদি আরবে অনলাইনে কীভাবে চূড়ান্ত নিষ্পত্তি গণনা করবেন?', answer: 'Sauditoolhub চূড়ান্ত নিষ্পত্তি ক্যালকুলেটর ব্যবহার করুন /final-settlement-calculator এ। এটি EOSB, অবৈতনিক বেতন, অব্যবহৃত ছুটি এবং বিমান টিকিট একসাথে গণনা করে।' },
]

function EnContent() {
  return (
    <article className="prose prose-invert max-w-none prose-headings:text-desert-primary prose-a:text-desert-primary prose-strong:text-white prose-li:text-gray-300">
      <h1>The Complete Guide to Final Settlement &amp; Air Ticket in Saudi Arabia 2026</h1>

      <div className="not-prose glass p-6 rounded-xl mb-8">
        <p className="text-gray-300 text-lg leading-relaxed">
          Leaving your job in Saudi Arabia is a major life transition. One of the most stressful parts is figuring out exactly what you are owed when your employment ends. Between End of Service Benefit, unpaid salary, unused leave days, and the air ticket home — the confusion adds up fast.
        </p>
        <p className="text-gray-300 text-lg leading-relaxed mt-4">
          Welcome to the complete guide on <strong>Final Settlement and Air Ticket in Saudi Arabia for 2026</strong>. This guide covers everything you need to know: the legal basis under Saudi Labor Law Articles 76, 77, 78, 84, and 85, step-by-step calculation formulas, real-life examples, common mistakes, and how to claim what is rightfully yours.
        </p>
        <p className="text-gray-300 text-lg leading-relaxed mt-4">
          Use our free{' '}
          <Link href="/final-settlement-calculator" className="text-desert-primary font-bold underline">
            Final Settlement Calculator
          </Link>{' '}
          to estimate your total dues instantly — including EOSB, unpaid salary, unused leave, and air ticket value.
        </p>
      </div>

      <h2>What is Final Settlement in Saudi Arabia?</h2>
      <p>
        Final Settlement (also called "End of Service Settlement") is the total amount an employer must pay an employee when their employment contract ends — whether by resignation, termination, or contract expiry. It is governed by the Saudi Labor Law, specifically Articles 76, 77, 78, 84, and 85 of Royal Decree No. M/51.
      </p>
      <p>
        Many expats confuse "Final Settlement" with "EOSB" (End of Service Benefit). While EOSB is the most significant component, the final settlement includes <strong>multiple items</strong> beyond just the gratuity. Understanding each component is critical to ensuring you receive every Riyal you are entitled to.
      </p>

      <div className="not-prose glass p-5 rounded-xl mb-6">
        <h3 className="text-white font-semibold mb-2 flex items-center gap-2">
          <FileText className="h-5 w-5 text-desert-primary" />
          Legal Basis
        </h3>
        <ul className="space-y-2 text-gray-300 text-sm">
          <li><strong className="text-desert-primary">Article 76:</strong> Entitlement to annual leave and compensation for unused leave days upon termination.</li>
          <li><strong className="text-desert-primary">Article 77:</strong> Rules around notice period and termination procedures.</li>
          <li><strong className="text-desert-primary">Article 78:</strong> Employee rights when employer breaches contract terms.</li>
          <li><strong className="text-desert-primary">Article 84:</strong> EOSB calculation — half-month salary for first 5 years, full month salary per year thereafter.</li>
          <li><strong className="text-desert-primary">Article 85:</strong> Reduction rules for EOSB when employee resigns before contract end.</li>
        </ul>
      </div>

      <h2>Components of Final Settlement (2026 Rules)</h2>
      <p>Your final settlement comprises up to five distinct components. Here is what each one means and how it is calculated:</p>

      <div className="not-prose glass p-5 rounded-xl mb-6">
        <h3 className="text-white font-semibold mb-3">1. End of Service Benefit (EOSB)</h3>
        <p className="text-gray-300 text-sm mb-2">Calculated under Article 84 of Saudi Labor Law. This is the lump-sum gratuity payment based on your years of service and basic salary.</p>
        <ul className="space-y-1 text-gray-400 text-sm list-disc list-inside">
          <li>First 5 years: Half a month of basic salary per year</li>
          <li>After 5 years: One full month of basic salary per year</li>
          <li>Partial years: Calculated proportionally</li>
          <li>Resignation: Reduction per Article 85 (0% under 2 years, 1/3 for 2-5 years, 2/3 for 5-10 years, 100% after 10 years)</li>
        </ul>
      </div>

      <div className="not-prose glass p-5 rounded-xl mb-6">
        <h3 className="text-white font-semibold mb-3">2. Unpaid Salary</h3>
        <p className="text-gray-300 text-sm">If you worked days in your final month that have not been paid yet, those days must be included. Formula: Monthly Salary ÷ 30 × Number of Unpaid Days.</p>
      </div>

      <div className="not-prose glass p-5 rounded-xl mb-6">
        <h3 className="text-white font-semibold mb-3">3. Unused Annual Leave Pay</h3>
        <p className="text-gray-300 text-sm mb-2">Under Article 76, any annual leave days you have not taken must be compensated. This includes leave accrued but not yet used.</p>
        <p className="text-gray-300 text-sm">Formula: (Monthly Salary ÷ 30) × Number of Unused Leave Days.</p>
      </div>

      <div className="not-prose glass p-5 rounded-xl mb-6">
        <h3 className="text-white font-semibold mb-3">4. Air Ticket Entitlement</h3>
        <p className="text-gray-300 text-sm mb-2">Employers must provide a one-way economy class ticket to your home country, or pay the cash equivalent. This applies to all expatriates on employment contracts.</p>
        <ul className="space-y-1 text-gray-400 text-sm list-disc list-inside">
          <li>Typically includes employee only (family coverage depends on contract)</li>
          <li>Average value: 2,000 — 3,000 SAR depending on home country</li>
          <li>Applies to resignation and termination cases alike</li>
        </ul>
      </div>

      <div className="not-prose glass p-5 rounded-xl mb-6">
        <h3 className="text-white font-semibold mb-3">5. Other Benefits</h3>
        <p className="text-gray-300 text-sm">Depending on your contract, additional items may include: unpaid bonuses, commission payments, housing allowance arrears, transportation allowance, and any other contractual benefits that accrued but were not paid.</p>
      </div>

      <h2>Air Ticket Rules in Detail</h2>
      <p>The air ticket entitlement is one of the most misunderstood aspects of final settlement. Here is a detailed breakdown of the rules:</p>

      <div className="not-prose glass p-5 rounded-xl mb-6">
        <h3 className="text-white font-semibold mb-2">Who is Eligible?</h3>
        <p className="text-gray-300 text-sm">All expatriates working in Saudi Arabia under a valid employment contract are eligible for a one-way air ticket to their home country upon contract termination. This right is protected under Saudi Labor Law and standard Ministry of Human Resources regulations.</p>
      </div>

      <div className="not-prose glass p-5 rounded-xl mb-6">
        <h3 className="text-white font-semibold mb-2">Does it Apply to Family Members?</h3>
        <p className="text-gray-300 text-sm">The standard air ticket entitlement covers the employee only. Whether it extends to spouse and children depends entirely on your employment contract. Some companies include annual family tickets as part of the benefits package; others provide employee-only coverage. Check your contract carefully.</p>
      </div>

      <div className="not-prose glass p-5 rounded-xl mb-6">
        <h3 className="text-white font-semibold mb-2">Cash Equivalent if Ticket is Not Provided</h3>
        <p className="text-gray-300 text-sm">If the employer does not book the ticket directly, they must pay you the cash equivalent. The amount should reflect the actual cost of a one-way economy ticket to your home airport. In practice, many employers use an average rate between 2,000 and 3,000 SAR, but you can request a real quote from an airline as evidence.</p>
      </div>

      <div className="not-prose glass p-5 rounded-xl mb-6">
        <h3 className="text-white font-semibold mb-2">Resignation vs Termination</h3>
        <p className="text-gray-300 text-sm">Both resignation and termination typically entitle you to the air ticket benefit. However, if you are terminated for gross misconduct under Article 80, or if you abscond (Huroob), the employer may withhold the ticket. Always review your contract and consult with the Ministry if there is a dispute.</p>
      </div>

      <h2>Step-by-Step Final Settlement Calculation Formula</h2>
      <p>Use this five-step method to calculate your exact final settlement:</p>

      <div className="not-prose glass p-6 rounded-xl mb-8">
        <ol className="space-y-5 text-gray-300">
          <li>
            <strong className="text-desert-primary">Step 1: Calculate EOSB</strong>
            <p className="text-sm mt-1">Full EOSB = (Basic Salary ÷ 2) × 5 + Basic Salary × (Years Beyond 5) + Proportional Partial Year. Then apply Article 85 reduction if resigning.</p>
          </li>
          <li>
            <strong className="text-desert-primary">Step 2: Add Unpaid Salary</strong>
            <p className="text-sm mt-1">Unpaid Salary = (Monthly Salary ÷ 30) × Unpaid Working Days.</p>
          </li>
          <li>
            <strong className="text-desert-primary">Step 3: Add Unused Leave Pay</strong>
            <p className="text-sm mt-1">Unused Leave Pay = (Monthly Salary ÷ 30) × Unused Leave Days.</p>
          </li>
          <li>
            <strong className="text-desert-primary">Step 4: Add Air Ticket Value</strong>
            <p className="text-sm mt-1">Actual ticket cost or cash equivalent (typically 2,000 — 3,000 SAR estimated average).</p>
          </li>
          <li>
            <strong className="text-desert-primary">Step 5: Total Final Settlement</strong>
            <p className="text-sm mt-1">Total = EOSB + Unpaid Salary + Unused Leave Pay + Air Ticket + Other Benefits.</p>
          </li>
        </ol>
      </div>

      <h2>Real-Life Calculation Examples</h2>

      <div className="not-prose glass p-5 rounded-xl mb-6">
        <h3 className="text-white font-semibold mb-3">Example 1: Employee Resigns After 5 Years</h3>
        <div className="bg-[#0A0E1A] p-4 rounded-lg text-gray-300 text-sm space-y-1 font-mono">
          <p>Basic Salary: 12,000 SAR/month</p>
          <p>Years of Service: 5 years</p>
          <p>Unpaid Days: 10 days</p>
          <p>Unused Leave Days: 15 days</p>
          <p>Air Ticket: 2,500 SAR (estimated)</p>
          <p className="mt-3 text-desert-primary font-bold">Step 1 — EOSB Calculation:</p>
          <p>First 5 years: 5 × (12,000 ÷ 2) = 5 × 6,000 = 30,000 SAR</p>
          <p>Article 85 (resignation at 5 years, 2-5 bracket): 1/3 of full EOSB</p>
          <p>EOSB = 30,000 × 1/3 = <strong>10,000 SAR</strong></p>
          <p className="mt-3 text-desert-primary font-bold">Step 2 — Unpaid Salary:</p>
          <p>(12,000 ÷ 30) × 10 = 400 × 10 = <strong>4,000 SAR</strong></p>
          <p className="mt-3 text-desert-primary font-bold">Step 3 — Unused Leave Pay:</p>
          <p>(12,000 ÷ 30) × 15 = 400 × 15 = <strong>6,000 SAR</strong></p>
          <p className="mt-3 text-desert-primary font-bold">Step 4 — Air Ticket:</p>
          <p><strong>2,500 SAR</strong></p>
          <p className="mt-3 text-desert-primary font-bold">Total Final Settlement:</p>
          <p className="text-xl">10,000 + 4,000 + 6,000 + 2,500 = <span className="text-desert-gold text-2xl font-bold">22,500 SAR</span></p>
        </div>
      </div>

      <div className="not-prose glass p-5 rounded-xl mb-6">
        <h3 className="text-white font-semibold mb-3">Example 2: Employee Terminated After 8 Years</h3>
        <div className="bg-[#0A0E1A] p-4 rounded-lg text-gray-300 text-sm space-y-1 font-mono">
          <p>Basic Salary: 18,000 SAR/month</p>
          <p>Years of Service: 8 years</p>
          <p>Unpaid Days: 0 (fully paid)</p>
          <p>Unused Leave Days: 20 days</p>
          <p>Air Ticket: 3,000 SAR (cash equivalent)</p>
          <p className="mt-3 text-desert-primary font-bold">Step 1 — EOSB Calculation (Termination = Full EOSB):</p>
          <p>First 5 years: 5 × (18,000 ÷ 2) = 5 × 9,000 = 45,000 SAR</p>
          <p>Years 6-8: 3 × 18,000 = 54,000 SAR</p>
          <p>Total EOSB: 45,000 + 54,000 = <strong>99,000 SAR</strong></p>
          <p className="text-yellow-400">(No Article 85 reduction because employee was terminated)</p>
          <p className="mt-3 text-desert-primary font-bold">Step 2 — Unpaid Salary:</p>
          <p>0 days = <strong>0 SAR</strong></p>
          <p className="mt-3 text-desert-primary font-bold">Step 3 — Unused Leave Pay:</p>
          <p>(18,000 ÷ 30) × 20 = 600 × 20 = <strong>12,000 SAR</strong></p>
          <p className="mt-3 text-desert-primary font-bold">Step 4 — Air Ticket:</p>
          <p><strong>3,000 SAR</strong></p>
          <p className="mt-3 text-desert-primary font-bold">Total Final Settlement:</p>
          <p className="text-xl">99,000 + 0 + 12,000 + 3,000 = <span className="text-desert-gold text-2xl font-bold">114,000 SAR</span></p>
        </div>
      </div>

      <h2>Special Cases &amp; Edge Scenarios</h2>

      <div className="not-prose glass p-5 rounded-xl mb-6">
        <h3 className="text-white font-semibold mb-2">What if Contract Ends Naturally?</h3>
        <p className="text-gray-300 text-sm">If your fixed-term contract expires and both parties do not renew, you are entitled to full EOSB (no Article 85 reduction), unpaid salary, unused leave pay, and air ticket. The same rules apply as with termination.</p>
      </div>

      <div className="not-prose glass p-5 rounded-xl mb-6">
        <h3 className="text-white font-semibold mb-2">What if Employee Absconds (Huroob)?</h3>
        <p className="text-gray-300 text-sm">If you abscond (Huroob), your employer can report you to the authorities. In most cases, absconding voids your right to EOSB and air ticket. You may still claim unpaid salary for days actually worked. Legal disputes in Huroob cases are common and often require labor court intervention.</p>
      </div>

      <div className="not-prose glass p-5 rounded-xl mb-6">
        <h3 className="text-white font-semibold mb-2">What if Company Closes Down?</h3>
        <p className="text-gray-300 text-sm">If the company closes or goes bankrupt, your final settlement is still legally owed. The Ministry of Human Resources can help enforce payment through the Wage Protection System (WPS) and bank guarantees. In bankruptcy cases, employee salaries and EOSB are priority claims.</p>
      </div>

      <div className="not-prose glass p-5 rounded-xl mb-6">
        <h3 className="text-white font-semibold mb-2">Partial Year Calculations</h3>
        <p className="text-gray-300 text-sm">Partial years are always calculated proportionally. For example, 6 months beyond 5 full years equals 0.5 × (annual EOSB rate) for that partial period. Unused leave is calculated day-by-day. Air ticket value remains the same regardless of when in the year you leave.</p>
      </div>

      <div className="not-prose glass p-5 rounded-xl mb-6">
        <h3 className="text-white font-semibold mb-2">Disputes with Employer</h3>
        <p className="text-gray-300 text-sm">If you disagree with the final settlement amount your employer provides, do not sign any settlement documents. Request a detailed breakdown in writing. If unresolved, file a case with the Labor Court or use the Qiwa platform for dispute resolution. The Ministry of Human Resources offers free mediation services.</p>
      </div>

      <h2>Common Mistakes When Calculating Final Settlement</h2>

      <div className="not-prose glass p-5 rounded-xl mb-6">
        <ul className="space-y-4 text-gray-300">
          <li className="flex items-start gap-3">
            <AlertTriangle className="h-5 w-5 text-desert-accent mt-0.5 shrink-0" />
            <div>
              <strong className="text-white">Mistake 1: Forgetting Unused Leave Pay</strong>
              <p className="text-sm text-gray-400">Many expats leave without claiming compensation for unused annual leave days. Under Article 76, this is a separate entitlement from EOSB and can add thousands of Riyals to your settlement.</p>
            </div>
          </li>
          <li className="flex items-start gap-3">
            <AlertTriangle className="h-5 w-5 text-desert-accent mt-0.5 shrink-0" />
            <div>
              <strong className="text-white">Mistake 2: Not Including Air Ticket Value</strong>
              <p className="text-sm text-gray-400">The air ticket is a mandatory benefit for expats. If your employer does not book the ticket, you are entitled to a cash equivalent. Do not forget to include this in your final demand.</p>
            </div>
          </li>
          <li className="flex items-start gap-3">
            <AlertTriangle className="h-5 w-5 text-desert-accent mt-0.5 shrink-0" />
            <div>
              <strong className="text-white">Mistake 3: Using Total Salary Instead of Basic Salary for EOSB</strong>
              <p className="text-sm text-gray-400">EOSB is calculated on basic salary only — not total salary including allowances. Using total salary will overestimate your entitlement and lead to disappointment.</p>
            </div>
          </li>
          <li className="flex items-start gap-3">
            <AlertTriangle className="h-5 w-5 text-desert-accent mt-0.5 shrink-0" />
            <div>
              <strong className="text-white">Mistake 4: Not Checking Contract Terms</strong>
              <p className="text-sm text-gray-400">Your specific employment contract may include additional benefits or different rules. Always verify your contract language before calculating your final settlement.</p>
            </div>
          </li>
        </ul>
      </div>

      <h2>How to Claim Your Final Settlement</h2>

      <div className="not-prose glass p-5 rounded-xl mb-6">
        <ol className="space-y-4 text-gray-300 list-decimal list-inside">
          <li>
            <strong className="text-desert-primary">Step 1:</strong> Calculate your expected amount using our{' '}
            <Link href="/final-settlement-calculator" className="text-desert-primary underline">Final Settlement Calculator</Link>.
          </li>
          <li>
            <strong className="text-desert-primary">Step 2:</strong> Submit a formal written request to HR or your employer with the detailed breakdown.
          </li>
          <li>
            <strong className="text-desert-primary">Step 3:</strong> Negotiate if needed. Provide supporting evidence (contract, pay slips, ticket quotes).
          </li>
          <li>
            <strong className="text-desert-primary">Step 4:</strong> If employer refuses or delays, file a complaint via Qiwa or visit the Ministry of Human Resources office.
          </li>
          <li>
            <strong className="text-desert-primary">Step 5:</strong> As a last resort, file a case with the Labor Court. The process typically resolves within 2-4 weeks.
          </li>
        </ol>
      </div>

      <p>
        The standard payment timeline is <strong>7 to 14 days</strong> from your last working day. Your employer is legally obligated to process the final settlement within this window. If the delay exceeds 30 days, penalties may apply to the employer.
      </p>

      <h2>How to Use the Sauditoolhub Final Settlement Calculator</h2>
      <div className="not-prose glass p-6 rounded-xl mb-8">
        <div className="flex items-center gap-3 mb-4">
          <Calculator className="h-8 w-8 text-desert-primary" />
          <h3 className="text-white text-lg font-bold m-0">Sauditoolhub Final Settlement Calculator</h3>
        </div>
        <p className="text-gray-300 mb-4">
          Our free calculator combines all five components of your final settlement into one simple tool. Enter your basic salary, years of service, unpaid days, unused leave days, and air ticket value — and get an instant estimate.
        </p>
        <ul className="space-y-2 text-gray-400 text-sm mb-4">
          <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-desert-primary" /> Free — no registration required</li>
          <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-desert-primary" /> Instant results in seconds</li>
          <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-desert-primary" /> Includes EOSB, unpaid salary, unused leave, and air ticket</li>
          <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-desert-primary" /> Supports all 5 languages</li>
          <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-desert-primary" /> Private — no data saved</li>
        </ul>
        <Link href="/final-settlement-calculator" className="inline-flex items-center gap-2 rounded-xl bg-desert-primary px-8 py-3 text-sm font-bold text-white transition-all hover:bg-desert-primary-dim">
          <Calculator className="h-4 w-4" />
          Calculate Your Final Settlement Now
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
        Your final settlement in Saudi Arabia is more than just EOSB. Between unpaid salary, unused leave days, and the air ticket home, the total can be significantly higher than many expats expect. Understanding Articles 76, 84, and 85 of the Saudi Labor Law empowers you to negotiate confidently with your employer and ensure you receive every Riyal you are owed.
      </p>
      <p>
        Bookmark our{' '}
        <Link href="/final-settlement-calculator" className="text-desert-primary font-bold underline">Final Settlement Calculator</Link>
        {' '}for instant estimates. Also explore our{' '}
        <Link href="/eosb-calculator" className="text-desert-primary font-bold underline">EOSB Calculator</Link>
        {' '}for gratuity-only calculations,{' '}
        <Link href="/jawazat-fine-calculator" className="text-desert-primary font-bold underline">Jawazat Fine Calculator</Link>
        {' '}for overstay fines, and the{' '}
        <Link href="/family-visa-optimizer" className="text-desert-primary font-bold underline">Family Visa Optimizer</Link>
        {' '}for dependents fee planning. Visit our{' '}
        <Link href="/blog" className="text-desert-primary font-bold underline">Blog</Link>
        {' '}for more expat guides.
      </p>

      <div className="not-prose glass p-6 rounded-xl mt-8 text-center">
        <Calculator className="h-10 w-10 text-desert-primary mx-auto mb-3" />
        <h3 className="text-white text-lg font-bold mb-2">Calculate Your Final Settlement Now</h3>
        <p className="text-gray-400 text-sm mb-4">Free instant estimate — no signup required</p>
        <Link href="/final-settlement-calculator" className="inline-flex items-center gap-2 rounded-xl bg-desert-primary px-8 py-3 text-sm font-bold text-white transition-all hover:bg-desert-primary-dim">
          <Calculator className="h-4 w-4" />
          Use Free Final Settlement Calculator
        </Link>
      </div>
    </article>
  )
}

function ArContent() {
  return (
    <article className="prose prose-invert max-w-none prose-headings:text-desert-primary prose-a:text-desert-primary prose-strong:text-white prose-li:text-gray-300" dir="rtl">
      <h1>الدليل الكامل للتسوية النهائية وتذكرة الطيران في السعودية 2026</h1>

      <div className="not-prose glass p-6 rounded-xl mb-8">
        <p className="text-gray-300 text-lg leading-relaxed">
          ترك وظيفتك في السعودية هو تحول كبير في الحياة. أحد أكثر الأمور إرهاقاً هو معرفة ما تستحقه بالضبط عند انتهاء عملك. بين مكافأة نهاية الخدمة، والراتب غير المدفوع، وأيام الإجازة غير المستخدمة، وتذكرة الطائر — يتراكم الارتباك بسرعة.
        </p>
        <p className="text-gray-300 text-lg leading-relaxed mt-4">
          هذا هو الدليل الشامل حول <strong>التسوية النهائية وتذكرة الطيران في السعودية 2026</strong>. يغطي هذا الدليل كل ما تحتاج معرفته: الأساس القانوني بموجب مواد 76 و 77 و 78 و 84 و 85 من نظام العمل السعودي، وصيغ الحساب خطوة بخطوة، وأمثلة واقعية، والأخطاء الشائعة، وكيفية المطالبة بحقوقك.
        </p>
        <p className="text-gray-300 text-lg leading-relaxed mt-4">
          استخدم{' '}
          <Link href="/final-settlement-calculator" className="text-desert-primary font-bold underline">
            حاسبة التسوية النهائية
          </Link>{' '}
          المجانية من Sauditoolhub لتقدير مستحقاتك الإجمالية فوراً.
        </p>
      </div>

      <h2>ما هي التسوية النهائية في السعودية؟</h2>
      <p>
        التسوية النهائية هي المبلغ الإجمالي الذي يجب على صاحب العمل دفعه للموظف عند انتهاء عقد العمل — سواء بالاستقالة أو الفصل أو انتهاء العقد. تحكمها مواد 76 و 77 و 78 و 84 و 85 من نظام العمل السعودي (المرسوم الملكي رقم م/51).
      </p>
      <p>
        يخلط كثير من المقيمين بين "التسوية النهائية" و"مكافأة نهاية الخدمة EOSB". بينما EOSB هي العنصر الأكبر، فإن التسوية النهائية تشمل <strong>عناصر متعددة</strong> تتجاوز المكافأة. فهم كل عنصر ضروري لضمان حصولك على كل ريال تستحقه.
      </p>

      <div className="not-prose glass p-5 rounded-xl mb-6">
        <h3 className="text-white font-semibold mb-2 flex items-center gap-2">
          <FileText className="h-5 w-5 text-desert-primary" />
          الأساس القانوني
        </h3>
        <ul className="space-y-2 text-gray-300 text-sm">
          <li><strong className="text-desert-primary">المادة 76:</strong> الحق في الإجازة السنوية وتعويض أيام الإجازة غير المستخدمة عند انتهاء الخدمة.</li>
          <li><strong className="text-desert-primary">المادة 77:</strong> قواعد فترة الإشعار وإجراءات إنهاء الخدمة.</li>
          <li><strong className="text-desert-primary">المادة 78:</strong> حقوق الموظف عند إخلال صاحب العمل بشروط العقد.</li>
          <li><strong className="text-desert-primary">المادة 84:</strong> حساب EOSB — نصف راتب عن أول 5 سنوات، راتب كامل عن كل سنة بعد ذلك.</li>
          <li><strong className="text-desert-primary">المادة 85:</strong> قواعد تخفيض EOSB عند استقالة الموظف قبل انتهاء العقد.</li>
        </ul>
      </div>

      <h2>مكونات التسوية النهائية (قواعد 2026)</h2>

      <div className="not-prose glass p-5 rounded-xl mb-6">
        <h3 className="text-white font-semibold mb-3">1. مكافأة نهاية الخدمة EOSB</h3>
        <p className="text-gray-300 text-sm mb-2">تحسب بموجب المادة 84. دفعة مقطوعة تعتمد على سنوات الخدمة والراتب الأساسي.</p>
        <ul className="space-y-1 text-gray-400 text-sm list-disc list-inside">
          <li>أول 5 سنوات: نصف راتب أساسي شهري عن كل سنة</li>
          <li>بعد 5 سنوات: راتب أساسي شهري كامل عن كل سنة</li>
          <li>السنوات الجزئية: تحسب تناسبياً</li>
          <li>الاستقالة: تخفيض حسب المادة 85</li>
        </ul>
      </div>

      <div className="not-prose glass p-5 rounded-xl mb-6">
        <h3 className="text-white font-semibold mb-3">2. الراتب غير المدفوع</h3>
        <p className="text-gray-300 text-sm">إذا عملت أياماً في شهرك الأخير لم تدفع بعد، يجب تضمين هذه الأيام. المعادلة: الراتب الشهري ÷ 30 × عدد الأيام غير المدفوعة.</p>
      </div>

      <div className="not-prose glass p-5 rounded-xl mb-6">
        <h3 className="text-white font-semibold mb-3">3. أجر الإجازة السنوية غير المستخدمة</h3>
        <p className="text-gray-300 text-sm mb-2">بموجب المادة 76، يجب تعويض أي أيام إجازة سنوية لم تأخذها. يشمل ذلك الإجازات المستحقة ولكن غير المستخدمة.</p>
        <p className="text-gray-300 text-sm">المعادلة: (الراتب الشهري ÷ 30) × عدد أيام الإجازة غير المستخدمة.</p>
      </div>

      <div className="not-prose glass p-5 rounded-xl mb-6">
        <h3 className="text-white font-semibold mb-3">4. تذكرة الطيران</h3>
        <p className="text-gray-300 text-sm mb-2">يجب على أصحاب العمل توفير تذكرة ذهاب فقط درجة اقتصادية إلى بلدك، أو دفع القيمة النقدية المعادلة.</p>
        <ul className="space-y-1 text-gray-400 text-sm list-disc list-inside">
          <li>عادة تشمل الموظف فقط (تغطية الأسرة تعتمد على العقد)</li>
          <li>القيمة المتوسطة: 2,000 — 3,000 ريال</li>
          <li>تنطبق على الاستقالة والفصل على حد سواء</li>
        </ul>
      </div>

      <div className="not-prose glass p-5 rounded-xl mb-6">
        <h3 className="text-white font-semibold mb-3">5. المزايا الأخرى</h3>
        <p className="text-gray-300 text-sm">حسب عقدك، قد تشمل: المكافآت غير المدفوعة، عمولات، متأخرات بدل السكن، بدل النقل، وأي مزايا تعاقدية أخرى.</p>
      </div>

      <h2>قواعد تذكرة الطيران بالتفصيل</h2>

      <div className="not-prose glass p-5 rounded-xl mb-6">
        <h3 className="text-white font-semibold mb-2">من يستحق؟</h3>
        <p className="text-gray-300 text-sm">جميع المقيمين العاملين في السعودية بموجب عقد عمل ساري المفعول يستحقون تذكرة طيران ذهاب فقط إلى بلدهم عند انتهاء العقد. هذا الحق محمي بموجب نظام العمل السعودي.</p>
      </div>

      <div className="not-prose glass p-5 rounded-xl mb-6">
        <h3 className="text-white font-semibold mb-2">هل تشمل أفراد الأسرة؟</h3>
        <p className="text-gray-300 text-sm">التذكرة القياسية تغطي الموظف فقط. ما إذا كانت تمتد للزوجة والأطفال يعتمد كلياً على عقد العمل. تحقق من عقدك بعناية.</p>
      </div>

      <div className="not-prose glass p-5 rounded-xl mb-6">
        <h3 className="text-white font-semibold mb-2">القيمة النقدية إذا لم توفر التذكرة</h3>
        <p className="text-gray-300 text-sm">إذا لم يحجز صاحب العمل التذكرة مباشرة، يجب أن يدفع لك القيمة النقدية. يجب أن يعكس المبلغ التكلفة الفعلية لتذكرة الذهاب درجة اقتصادية إلى مطار بلدك.</p>
      </div>

      <div className="not-prose glass p-5 rounded-xl mb-6">
        <h3 className="text-white font-semibold mb-2">الاستقالة مقابل الفصل</h3>
        <p className="text-gray-300 text-sm">الاستقالة والفصل كلاهما يمنحك حق تذكرة الطيران. لكن إذا فصلت لأسباب تأديبية (المادة 80) أو هربت، فقد يحجب صاحب العمل التذكرة.</p>
      </div>

      <h2>معادلة حساب التسوية النهائية خطوة بخطوة</h2>

      <div className="not-prose glass p-6 rounded-xl mb-8">
        <ol className="space-y-5 text-gray-300">
          <li>
            <strong className="text-desert-primary">الخطوة 1: حساب EOSB</strong>
            <p className="text-sm mt-1">ثم تطبيق تخفيض المادة 85 إذا كانت استقالة.</p>
          </li>
          <li>
            <strong className="text-desert-primary">الخطوة 2: إضافة الراتب غير المدفوع</strong>
            <p className="text-sm mt-1">الراتب غير المدفوع = (الراتب الشهري ÷ 30) × أيام العمل غير المدفوعة.</p>
          </li>
          <li>
            <strong className="text-desert-primary">الخطوة 3: إضافة أجر الإجازة غير المستخدمة</strong>
            <p className="text-sm mt-1">أجر الإجازة = (الراتب الشهري ÷ 30) × أيام الإجازة غير المستخدمة.</p>
          </li>
          <li>
            <strong className="text-desert-primary">الخطوة 4: إضافة قيمة تذكرة الطيران</strong>
            <p className="text-sm mt-1">التكلفة الفعلية أو القيمة النقدية المعادلة (عادة 2,000 — 3,000 ريال).</p>
          </li>
          <li>
            <strong className="text-desert-primary">الخطوة 5: إجمالي التسوية النهائية</strong>
            <p className="text-sm mt-1">الإجمالي = EOSB + الراتب غير المدفوع + أجر الإجازة + التذكرة + المزايا الأخرى.</p>
          </li>
        </ol>
      </div>

      <h2>أمثلة عملية للحساب</h2>

      <div className="not-prose glass p-5 rounded-xl mb-6">
        <h3 className="text-white font-semibold mb-3">مثال 1: موظف يستقيل بعد 5 سنوات</h3>
        <div className="bg-[#0A0E1A] p-4 rounded-lg text-gray-300 text-sm space-y-1 font-mono">
          <p>الراتب الأساسي: 12,000 ريال/شهر</p>
          <p>سنوات الخدمة: 5 سنوات</p>
          <p>الأيام غير المدفوعة: 10 أيام</p>
          <p>أيام الإجازة غير المستخدمة: 15 يوماً</p>
          <p>تذكرة الطيران: 2,500 ريال</p>
          <p className="mt-3 text-desert-primary font-bold">الخطوة 1 — حساب EOSB:</p>
          <p>أول 5 سنوات: 5 × (12,000 ÷ 2) = 30,000 ريال</p>
          <p>المادة 85 (استقالة عند 5 سنوات): 1/3</p>
          <p>EOSB = 30,000 × 1/3 = 10,000 ريال</p>
          <p className="mt-3 text-desert-primary font-bold">الخطوة 2 — الراتب غير المدفوع:</p>
          <p>(12,000 ÷ 30) × 10 = 4,000 ريال</p>
          <p className="mt-3 text-desert-primary font-bold">الخطوة 3 — أجر الإجازة:</p>
          <p>(12,000 ÷ 30) × 15 = 6,000 ريال</p>
          <p className="mt-3 text-desert-primary font-bold">الخطوة 4 — تذكرة الطيران:</p>
          <p>2,500 ريال</p>
          <p className="mt-3 text-desert-primary font-bold">إجمالي التسوية:</p>
          <p className="text-xl">10,000 + 4,000 + 6,000 + 2,500 = <span className="text-desert-gold text-2xl font-bold">22,500 ريال</span></p>
        </div>
      </div>

      <div className="not-prose glass p-5 rounded-xl mb-6">
        <h3 className="text-white font-semibold mb-3">مثال 2: موظف يُنهى عقده بعد 8 سنوات</h3>
        <div className="bg-[#0A0E1A] p-4 rounded-lg text-gray-300 text-sm space-y-1 font-mono">
          <p>الراتب الأساسي: 18,000 ريال/شهر</p>
          <p>سنوات الخدمة: 8 سنوات</p>
          <p>الأيام غير المدفوعة: 0</p>
          <p>أيام الإجازة غير المستخدمة: 20 يوماً</p>
          <p>تذكرة الطيران: 3,000 ريال</p>
          <p className="mt-3 text-desert-primary font-bold">الخطوة 1 — EOSB (فصل = كامل):</p>
          <p>أول 5 سنوات: 5 × (18,000 ÷ 2) = 45,000 ريال</p>
          <p>السنوات 6-8: 3 × 18,000 = 54,000 ريال</p>
          <p>إجمالي EOSB: 99,000 ريال</p>
          <p className="mt-3 text-desert-primary font-bold">الخطوة 3 — أجر الإجازة:</p>
          <p>(18,000 ÷ 30) × 20 = 12,000 ريال</p>
          <p className="mt-3 text-desert-primary font-bold">الخطوة 4 — تذكرة الطيران:</p>
          <p>3,000 ريال</p>
          <p className="mt-3 text-desert-primary font-bold">إجمالي التسوية:</p>
          <p className="text-xl">99,000 + 12,000 + 3,000 = <span className="text-desert-gold text-2xl font-bold">114,000 ريال</span></p>
        </div>
      </div>

      <h2>الحالات الخاصة</h2>

      <div className="not-prose glass p-5 rounded-xl mb-6">
        <h3 className="text-white font-semibold mb-2">ماذا إذا انتهى العقد طبيعياً؟</h3>
        <p className="text-gray-300 text-sm">إذا انتهى عقدك المحدد المدة ولم يجدد الطرفان، تستحق كامل EOSB (بدون تخفيض المادة 85)، والراتب غير المدفوع، وأجر الإجازة، وتذكرة الطيران.</p>
      </div>

      <div className="not-prose glass p-5 rounded-xl mb-6">
        <h3 className="text-white font-semibold mb-2">ماذا إذا هرب الموظف (هروب)؟</h3>
        <p className="text-gray-300 text-sm">الهروب قد يلغي حقك في EOSB وتذكرة الطيران. قد تستحق الراتب عن الأيام التي عملتها فعلاً. النزاعات القانونية في قضايا الهروب شائعة.</p>
      </div>

      <div className="not-prose glass p-5 rounded-xl mb-6">
        <h3 className="text-white font-semibold mb-2">ماذا إذا أغلقت الشركة؟</h3>
        <p className="text-gray-300 text-sm">إذا أغلقت الشركة أو أفلس، لا تزال التسوية النهائية مستحقة قانوناً. وزارة الموارد البشرية تساعد في التنفيذ عبر نظام حماية الأجور.</p>
      </div>

      <div className="not-prose glass p-5 rounded-xl mb-6">
        <h3 className="text-white font-semibold mb-2">حساب السنوات الجزئية</h3>
        <p className="text-gray-300 text-sm">السنوات الجزئية تحسب تناسبياً. مثال: 6 أشهر بعد 5 سنوات كاملة = 0.5 × معدل EOSB السنوي لتلك الفترة الجزئية.</p>
      </div>

      <h2>الأخطاء الشائعة عند حساب التسوية النهائية</h2>

      <div className="not-prose glass p-5 rounded-xl mb-6">
        <ul className="space-y-4 text-gray-300">
          <li className="flex items-start gap-3">
            <AlertTriangle className="h-5 w-5 text-desert-accent mt-0.5 shrink-0" />
            <div>
              <strong className="text-white">الخطأ 1: نسيان أجر الإجازة غير المستخدمة</strong>
              <p className="text-sm text-gray-400">كثير من المقيمين يغادرون دون المطالبة بتعويض أيام الإجازة السنوية غير المستخدمة. بموجب المادة 76، هذا حق منفصل عن EOSB.</p>
            </div>
          </li>
          <li className="flex items-start gap-3">
            <AlertTriangle className="h-5 w-5 text-desert-accent mt-0.5 shrink-0" />
            <div>
              <strong className="text-white">الخطأ 2: عدم تضمين قيمة تذكرة الطيران</strong>
              <p className="text-sm text-gray-400">تذكرة الطيران حق إلزامي للمقيمين. إذا لم يحجز صاحب العمل التذكرة، تستحق القيمة النقدية.</p>
            </div>
          </li>
          <li className="flex items-start gap-3">
            <AlertTriangle className="h-5 w-5 text-desert-accent mt-0.5 shrink-0" />
            <div>
              <strong className="text-white">الخطأ 3: استخدام الراتب الإجمالي بدلاً من الأساسي لـ EOSB</strong>
              <p className="text-sm text-gray-400">EOSB تحسب على الراتب الأساسي فقط، وليس الإجمالي شامل البدلات.</p>
            </div>
          </li>
          <li className="flex items-start gap-3">
            <AlertTriangle className="h-5 w-5 text-desert-accent mt-0.5 shrink-0" />
            <div>
              <strong className="text-white">الخطأ 4: عدم التحقق من شروط العقد</strong>
              <p className="text-sm text-gray-400">عقد العمل قد يتضمن مزايا إضافية أو قواعد مختلفة. تحقق دائماً من لغة العقد.</p>
            </div>
          </li>
        </ul>
      </div>

      <h2>كيفية المطالبة بالتسوية النهائية</h2>

      <div className="not-prose glass p-5 rounded-xl mb-6">
        <ol className="space-y-4 text-gray-300 list-decimal list-inside">
          <li><strong className="text-desert-primary">الخطوة 1:</strong> احسب المبلغ المتوقع باستخدام حاسبة التسوية النهائية.</li>
          <li><strong className="text-desert-primary">الخطوة 2:</strong> قدم طلباً رسمياً كتابياً للموارد البشرية مع التفاصيل.</li>
          <li><strong className="text-desert-primary">الخطوة 3:</strong> تفاوض إذا لزم الأمر مع تقديم الأدلة.</li>
          <li><strong className="text-desert-primary">الخطوة 4:</strong> إذا رفض صاحب العمل، قدم شكوى عبر Qiwa.</li>
          <li><strong className="text-desert-primary">الخطوة 5:</strong> كملاذ أخير، ارفع دعوى في محكمة العمل.</li>
        </ol>
      </div>

      <p>المهلة الزمنية للصرف هي <strong>7 إلى 14 يوماً</strong> من آخر يوم عمل. التأخير قد يؤدي إلى عقوبات على صاحب العمل.</p>

      <h2>حاسبة التسوية النهائية من Sauditoolhub</h2>
      <div className="not-prose glass p-6 rounded-xl mb-8">
        <div className="flex items-center gap-3 mb-4">
          <Calculator className="h-8 w-8 text-desert-primary" />
          <h3 className="text-white text-lg font-bold m-0">حاسبة التسوية النهائية</h3>
        </div>
        <Link href="/final-settlement-calculator" className="inline-flex items-center gap-2 rounded-xl bg-desert-primary px-8 py-3 text-sm font-bold text-white transition-all hover:bg-desert-primary-dim">
          <Calculator className="h-4 w-4" />
          احسب تسويتك النهائية الآن
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
        تسويتك النهائية في السعودية هي أكثر من مجرد EOSB. بين الراتب غير المدفوع وأيام الإجازة غير المستخدمة وتذكرة الطائر، يمكن أن يكون الإجمالي أعلى بكثير مما يتوقعه كثير من المقيمين. فهم المواد 76 و 84 و 85 من نظام العمل السعودي يمكنك من التفاوض بثقة مع صاحب العمل.
      </p>
      <p>
        احفظ{' '}
        <Link href="/final-settlement-calculator" className="text-desert-primary font-bold underline">حاسبة التسوية النهائية</Link>
        {' '}للتقديرات الفورية. تصفح{' '}
        <Link href="/eosb-calculator" className="text-desert-primary font-bold underline">حاسبة EOSB</Link>
        {' '}و{' '}
        <Link href="/jawazat-fine-calculator" className="text-desert-primary font-bold underline">حاسبة غرامات الجوازات</Link>
        {' '}و{' '}
        <Link href="/family-visa-optimizer" className="text-desert-primary font-bold underline">محسن تأشيرة العائلة</Link>
        {' '}وزر{' '}
        <Link href="/blog" className="text-desert-primary font-bold underline">المدونة</Link>
        {' '}لمزيد من أدلة المقيمين.
      </p>

      <div className="not-prose glass p-6 rounded-xl mt-8 text-center">
        <Calculator className="h-10 w-10 text-desert-primary mx-auto mb-3" />
        <h3 className="text-white text-lg font-bold mb-2">احسب تسويتك النهائية الآن</h3>
        <p className="text-gray-400 text-sm mb-4">تقدير فوري مجاني — بدون تسجيل</p>
        <Link href="/final-settlement-calculator" className="inline-flex items-center gap-2 rounded-xl bg-desert-primary px-8 py-3 text-sm font-bold text-white transition-all hover:bg-desert-primary-dim">
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
      <h1>سعودی عرب میں فائنل سیٹلمنٹ اور ایئر ٹکٹ کا مکمل گائیڈ 2026</h1>

      <div className="not-prose glass p-6 rounded-xl mb-8">
        <p className="text-gray-300 text-lg leading-relaxed">
          سعودی عرب میں نوکری چھوڑنا زندگی کا ایک بڑا مرحلہ ہے۔ سب سے مشکل کام یہ جاننا ہے کہ آپ کی ملازمت ختم ہونے پر آپ کا کیا حق بنتا ہے۔ EOSB، غیر ادا شدہ تنخواہ، غیر استعمال شدہ چھٹیاں، اور وطن واپسی کا ایئر ٹکٹ — یہ سب الجھن کا سبب بن سکتے ہیں۔
        </p>
        <p className="text-gray-300 text-lg leading-relaxed mt-4">
          سعودی عرب میں <strong>فائنل سیٹلمنٹ اور ایئر ٹکٹ 2026</strong> کے بارے میں یہ مکمل گائیڈ ہے۔ اس میں وہ سب کچھ شامل ہے جو آپ کو جاننے کی ضرورت ہے: سعودی لیبر لا آرٹیکل 76، 77، 78، 84، اور 85 کے تحت قانونی بنیاد، مرحلہ وار حساب کتاب، حقیقی زندگی کی مثالیں، عام غلطیاں، اور اپنے حقوق کا دعویٰ کیسے کریں۔
        </p>
        <p className="text-gray-300 text-lg leading-relaxed mt-4">
          اپنی کل رقم کا فوری اندازہ لگانے کے لیے ہمارا مفت{' '}
          <Link href="/final-settlement-calculator" className="text-desert-primary font-bold underline">
            فائنل سیٹلمنٹ کیلکولیٹر
          </Link>{' '}
          استعمال کریں۔
        </p>
      </div>

      <h2>سعودی عرب میں فائنل سیٹلمنٹ کیا ہے؟</h2>
      <p>
        فائنل سیٹلمنٹ وہ کل رقم ہے جو آجر کو ملازم کو ملازمت ختم ہونے پر ادا کرنی ہوتی ہے — خواہ استعفیٰ ہو، برطرفی ہو، یا معاہدہ ختم ہو۔ یہ سعودی لیبر لا کے آرٹیکل 76، 77، 78، 84، اور 85 کے تحت آتا ہے۔
      </p>

      <div className="not-prose glass p-5 rounded-xl mb-6">
        <h3 className="text-white font-semibold mb-2 flex items-center gap-2">
          <FileText className="h-5 w-5 text-desert-primary" />
          قانونی بنیاد
        </h3>
        <ul className="space-y-2 text-gray-300 text-sm">
          <li><strong className="text-desert-primary">آرٹیکل 76:</strong> سالانہ چھٹی کا حق اور ختم سروس پر غیر استعمال شدہ چھٹیوں کا معاوضہ۔</li>
          <li><strong className="text-desert-primary">آرٹیکل 77:</strong> نوٹس پیریڈ اور برطرفی کے قواعد۔</li>
          <li><strong className="text-desert-primary">آرٹیکل 78:</strong> معاہدہ کی خلاف ورزی پر ملازم کے حقوق۔</li>
          <li><strong className="text-desert-primary">آرٹیکل 84:</strong> EOSB کا حساب — پہلے 5 سالوں کے لیے آدھی تنخواہ، اس کے بعد پوری تنخواہ۔</li>
          <li><strong className="text-desert-primary">آرٹیکل 85:</strong> استعفیٰ پر EOSB میں کمی کے قواعد۔</li>
        </ul>
      </div>

      <h2>فائنل سیٹلمنٹ کے اجزاء (2026 قواعد)</h2>

      <div className="not-prose glass p-5 rounded-xl mb-6">
        <h3 className="text-white font-semibold mb-3">1. EOSB</h3>
        <p className="text-gray-300 text-sm mb-2">آرٹیکل 84 کے تحت حساب کیا جاتا ہے۔ سروس کے سالوں اور بنیادی تنخواہ پر مبنی ایک بڑی ادائیگی۔</p>
        <ul className="space-y-1 text-gray-400 text-sm list-disc list-inside">
          <li>پہلے 5 سال: ہر سال کے لیے آدھی ماہانہ بنیادی تنخواہ</li>
          <li>5 سال بعد: ہر سال کے لیے پوری ماہانہ بنیادی تنخواہ</li>
          <li>جزوی سال: تناسب سے</li>
          <li>استعفیٰ: آرٹیکل 85 کے تحت کمی</li>
        </ul>
      </div>

      <div className="not-prose glass p-5 rounded-xl mb-6">
        <h3 className="text-white font-semibold mb-3">2. غیر ادا شدہ تنخواہ</h3>
        <p className="text-gray-300 text-sm">فارمولا: ماہانہ تنخواہ ÷ 30 × غیر ادا شدہ دن۔</p>
      </div>

      <div className="not-prose glass p-5 rounded-xl mb-6">
        <h3 className="text-white font-semibold mb-3">3. غیر استعمال شدہ چھٹیوں کی ادائیگی</h3>
        <p className="text-gray-300 text-sm">آرٹیکل 76 کے تحت، غیر استعمال شدہ سالانہ چھٹی کے دنوں کا معاوضہ ملتا ہے۔</p>
      </div>

      <div className="not-prose glass p-5 rounded-xl mb-6">
        <h3 className="text-white font-semibold mb-3">4. ایئر ٹکٹ</h3>
        <p className="text-gray-300 text-sm mb-2">آجر کو وطن واپسی کا ایک طرفہ اکانومی ٹکٹ دینا ہوتا ہے یا نقدی۔</p>
      </div>

      <h2>فائنل سیٹلمنٹ کے حساب کا فارمولا</h2>

      <div className="not-prose glass p-6 rounded-xl mb-8">
        <ol className="space-y-5 text-gray-300">
          <li><strong className="text-desert-primary">مرحلہ 1:</strong> EOSB کا حساب لگائیں۔</li>
          <li><strong className="text-desert-primary">مرحلہ 2:</strong> غیر ادا شدہ تنخواہ شامل کریں۔</li>
          <li><strong className="text-desert-primary">مرحلہ 3:</strong> غیر استعمال شدہ چھٹیوں کی ادائیگی شامل کریں۔</li>
          <li><strong className="text-desert-primary">مرحلہ 4:</strong> ایئر ٹکٹ کی قیمت شامل کریں۔</li>
          <li><strong className="text-desert-primary">مرحلہ 5:</strong> کل فائنل سیٹلمنٹ۔</li>
        </ol>
      </div>

      <h2>حقیقی زندگی کی مثالیں</h2>

      <div className="not-prose glass p-5 rounded-xl mb-6">
        <h3 className="text-white font-semibold mb-3">مثال 1: 5 سال بعد استعفیٰ</h3>
        <div className="bg-[#0A0E1A] p-4 rounded-lg text-gray-300 text-sm space-y-1 font-mono">
          <p>بنیادی تنخواہ: 12,000 SAR/ماہ</p>
          <p>سروس: 5 سال، غیر ادا شدہ دن: 10، غیر استعمال چھٹیاں: 15</p>
          <p>EOSB: 10,000 SAR + غیر ادا شدہ: 4,000 SAR + چھٹیاں: 6,000 SAR + ٹکٹ: 2,500 SAR</p>
          <p className="text-desert-gold text-2xl font-bold mt-2">کل: 22,500 SAR</p>
        </div>
      </div>

      <div className="not-prose glass p-5 rounded-xl mb-6">
        <h3 className="text-white font-semibold mb-3">مثال 2: 8 سال بعد برطرفی</h3>
        <div className="bg-[#0A0E1A] p-4 rounded-lg text-gray-300 text-sm space-y-1 font-mono">
          <p>بنیادی تنخواہ: 18,000 SAR/ماہ</p>
          <p>EOSB: 99,000 SAR + چھٹیاں: 12,000 SAR + ٹکٹ: 3,000 SAR</p>
          <p className="text-desert-gold text-2xl font-bold mt-2">کل: 114,000 SAR</p>
        </div>
      </div>

      <h2>عام غلطیاں</h2>
      <div className="not-prose glass p-5 rounded-xl mb-6">
        <ul className="space-y-3 text-gray-300">
          <li><AlertTriangle className="h-4 w-4 text-desert-accent inline" /> غیر استعمال شدہ چھٹیوں کی ادائیگی بھولنا</li>
          <li><AlertTriangle className="h-4 w-4 text-desert-accent inline" /> ایئر ٹکٹ کی قیمت شامل نہ کرنا</li>
          <li><AlertTriangle className="h-4 w-4 text-desert-accent inline" /> EOSB کے لیے کل تنخواہ استعمال کرنا</li>
          <li><AlertTriangle className="h-4 w-4 text-desert-accent inline" /> معاہدے کی شرائط نہ چیک کرنا</li>
        </ul>
      </div>

      <h2>فائنل سیٹلمنٹ کا دعویٰ کیسے کریں</h2>
      <div className="not-prose glass p-5 rounded-xl mb-6">
        <ol className="space-y-3 text-gray-300 list-decimal list-inside">
          <li>کیلکولیٹر سے اپنی رقم کا اندازہ لگائیں</li>
          <li>HR کو تحریری درخواست دیں</li>
          <li>اگر انکار کریں تو Qiwa پر شکایت کریں</li>
          <li>آخری مرحلہ: لیبر کورٹ میں کیس دائر کریں</li>
        </ol>
      </div>

      <h2>Sauditoolhub فائنل سیٹلمنٹ کیلکولیٹر</h2>
      <div className="not-prose glass p-6 rounded-xl mb-8">
        <Link href="/final-settlement-calculator" className="inline-flex items-center gap-2 rounded-xl bg-desert-primary px-8 py-3 text-sm font-bold text-white transition-all hover:bg-desert-primary-dim">
          <Calculator className="h-4 w-4" />
          ابھی حساب کریں
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
        سعودی عرب میں آپ کا فائنل سیٹلمنٹ صرف EOSB سے زیادہ ہے۔ غیر ادا شدہ تنخواہ، غیر استعمال شدہ چھٹیاں، اور ایئر ٹکٹ سب مل کر ایک بڑی رقم بن سکتی ہے۔ آرٹیکل 76، 84، اور 85 کو سمجھ کر آپ اعتماد سے اپنے حقوق کا دعویٰ کر سکتے ہیں۔
      </p>
      <p>
        ہمارا{' '}
        <Link href="/final-settlement-calculator" className="text-desert-primary font-bold underline">فائنل سیٹلمنٹ کیلکولیٹر</Link>
        {' '}استعمال کریں۔{' '}
        <Link href="/eosb-calculator" className="text-desert-primary font-bold underline">EOSB کیلکولیٹر</Link>
        {' '}اور{' '}
        <Link href="/jawazat-fine-calculator" className="text-desert-primary font-bold underline">جوازات فائن کیلکولیٹر</Link>
        {' '}بھی دیکھیں۔{' '}
        <Link href="/blog" className="text-desert-primary font-bold underline">بلاگ</Link> پر مزید گائیڈز۔
      </p>

      <div className="not-prose glass p-6 rounded-xl mt-8 text-center">
        <Calculator className="h-10 w-10 text-desert-primary mx-auto mb-3" />
        <h3 className="text-white text-lg font-bold mb-2">اپنا فائنل سیٹلمنٹ ابھی حساب کریں</h3>
        <p className="text-gray-400 text-sm mb-4">مفت فوری تخمینہ</p>
        <Link href="/final-settlement-calculator" className="inline-flex items-center gap-2 rounded-xl bg-desert-primary px-8 py-3 text-sm font-bold text-white transition-all hover:bg-desert-primary-dim">
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
      <h1>Kumpletong Gabay sa Final Settlement at Air Ticket sa Saudi Arabia 2026</h1>

      <div className="not-prose glass p-6 rounded-xl mb-8">
        <p className="text-gray-300 text-lg leading-relaxed">
          Ang pag-alis sa iyong trabaho sa Saudi Arabia ay isang malaking pagbabago sa buhay. Isa sa pinakanakababahalang bahagi ay ang pag-alam kung ano talaga ang nararapat sa iyo kapag natapos ang iyong trabaho. Sa pagitan ng EOSB, unpaid salary, unused leave days, at air ticket pauwi — mabilis na dumadami ang kalituhan.
        </p>
        <p className="text-gray-300 text-lg leading-relaxed mt-4">
          Ito ang kumpletong gabay sa <strong>Final Settlement at Air Ticket sa Saudi Arabia para sa 2026</strong>. Sakop ng gabay na ito ang lahat ng kailangan mong malaman: ang legal na batayan sa ilalim ng Saudi Labor Law Articles 76, 77, 78, 84, at 85, step-by-step na formula ng pagkalkula, mga halimbawa sa totoong buhay, mga karaniwang pagkakamali, at kung paano makuha ang nararapat sa iyo.
        </p>
        <p className="text-gray-300 text-lg leading-relaxed mt-4">
          Gamitin ang aming libreng{' '}
          <Link href="/final-settlement-calculator" className="text-desert-primary font-bold underline">
            Final Settlement Calculator
          </Link>{' '}
          para matantya ang iyong kabuuang dapat bayaran agad.
        </p>
      </div>

      <h2>Ano ang Final Settlement sa Saudi Arabia?</h2>
      <p>
        Ang Final Settlement ay ang kabuuang halaga na dapat bayaran ng employer sa empleyado kapag natapos ang kanilang employment contract — sa pamamagitan man ng resignation, termination, o pag-expire ng kontrata. Ito ay pinamamahalaan ng Saudi Labor Law, partikular ang Articles 76, 77, 78, 84, at 85 ng Royal Decree No. M/51.
      </p>

      <div className="not-prose glass p-5 rounded-xl mb-6">
        <h3 className="text-white font-semibold mb-2 flex items-center gap-2">
          <FileText className="h-5 w-5 text-desert-primary" />
          Legal na Batayan
        </h3>
        <ul className="space-y-2 text-gray-300 text-sm">
          <li><strong className="text-desert-primary">Article 76:</strong> Karapatan sa annual leave at compensation para sa unused leave days.</li>
          <li><strong className="text-desert-primary">Article 77:</strong> Mga patakaran sa notice period at termination procedures.</li>
          <li><strong className="text-desert-primary">Article 78:</strong> Mga karapatan ng empleyado kapag sinira ng employer ang kontrata.</li>
          <li><strong className="text-desert-primary">Article 84:</strong> EOSB calculation — kalahating buwan sa unang 5 taon, buong buwan pagkatapos.</li>
          <li><strong className="text-desert-primary">Article 85:</strong> Reduction rules para sa EOSB kapag nag-resign ang empleyado.</li>
        </ul>
      </div>

      <h2>Mga Component ng Final Settlement (2026 Rules)</h2>

      <div className="not-prose glass p-5 rounded-xl mb-6">
        <h3 className="text-white font-semibold mb-3">1. End of Service Benefit (EOSB)</h3>
        <p className="text-gray-300 text-sm mb-2">Kinakalkula sa ilalim ng Article 84. Batay sa iyong mga taon ng serbisyo at basic salary.</p>
        <ul className="space-y-1 text-gray-400 text-sm list-disc list-inside">
          <li>Unang 5 taon: Kalahating buwan ng basic salary bawat taon</li>
          <li>Pagkatapos ng 5 taon: Isang buong buwan bawat taon</li>
          <li>Partial years: Proporsyonal ang pagkalkula</li>
          <li>Resignation: Bawas ayon sa Article 85</li>
        </ul>
      </div>

      <div className="not-prose glass p-5 rounded-xl mb-6">
        <h3 className="text-white font-semibold mb-3">2. Unpaid Salary</h3>
        <p className="text-gray-300 text-sm">Formula: Monthly Salary ÷ 30 × Bilang ng Unpaid Days.</p>
      </div>

      <div className="not-prose glass p-5 rounded-xl mb-6">
        <h3 className="text-white font-semibold mb-3">3. Unused Annual Leave Pay</h3>
        <p className="text-gray-300 text-sm">Sa ilalim ng Article 76, dapat bayaran ang hindi nagamit na annual leave days.</p>
      </div>

      <div className="not-prose glass p-5 rounded-xl mb-6">
        <h3 className="text-white font-semibold mb-3">4. Air Ticket Entitlement</h3>
        <p className="text-gray-300 text-sm mb-2">Dapat magbigay ang employer ng one-way economy ticket pauwi, o magbayad ng katumbas na halaga.</p>
      </div>

      <h2>Formula ng Pagkalkula</h2>
      <div className="not-prose glass p-6 rounded-xl mb-8">
        <ol className="space-y-4 text-gray-300">
          <li><strong className="text-desert-primary">Hakbang 1:</strong> Kalkulahin ang EOSB</li>
          <li><strong className="text-desert-primary">Hakbang 2:</strong> Idagdag ang unpaid salary</li>
          <li><strong className="text-desert-primary">Hakbang 3:</strong> Idagdag ang unused leave pay</li>
          <li><strong className="text-desert-primary">Hakbang 4:</strong> Idagdag ang air ticket value</li>
          <li><strong className="text-desert-primary">Hakbang 5:</strong> Kabuuang Final Settlement</li>
        </ol>
      </div>

      <h2>Mga Halimbawa</h2>

      <div className="not-prose glass p-5 rounded-xl mb-6">
        <h3 className="text-white font-semibold mb-3">Halimbawa 1: Resignasyon pagkatapos ng 5 taon</h3>
        <div className="bg-[#0A0E1A] p-4 rounded-lg text-gray-300 text-sm space-y-1 font-mono">
          <p>Basic Salary: 12,000 SAR</p>
          <p>EOSB: 10,000 SAR + Unpaid: 4,000 SAR + Leave: 6,000 SAR + Ticket: 2,500 SAR</p>
          <p className="text-desert-gold text-2xl font-bold mt-2">Kabuuan: 22,500 SAR</p>
        </div>
      </div>

      <div className="not-prose glass p-5 rounded-xl mb-6">
        <h3 className="text-white font-semibold mb-3">Halimbawa 2: Termination pagkatapos ng 8 taon</h3>
        <div className="bg-[#0A0E1A] p-4 rounded-lg text-gray-300 text-sm space-y-1 font-mono">
          <p>Basic Salary: 18,000 SAR</p>
          <p>EOSB: 99,000 SAR + Leave: 12,000 SAR + Ticket: 3,000 SAR</p>
          <p className="text-desert-gold text-2xl font-bold mt-2">Kabuuan: 114,000 SAR</p>
        </div>
      </div>

      <h2>Mga Karaniwang Pagkakamali</h2>
      <div className="not-prose glass p-5 rounded-xl mb-6">
        <ul className="space-y-3 text-gray-300">
          <li><AlertTriangle className="h-4 w-4 text-desert-accent inline" /> Nakalimutan ang unused leave pay</li>
          <li><AlertTriangle className="h-4 w-4 text-desert-accent inline" /> Hindi isinama ang air ticket</li>
          <li><AlertTriangle className="h-4 w-4 text-desert-accent inline" /> Ginamit ang total salary sa halip na basic salary</li>
          <li><AlertTriangle className="h-4 w-4 text-desert-accent inline" /> Hindi sinuri ang contract terms</li>
        </ul>
      </div>

      <h2>Paano Kunin ang Iyong Final Settlement</h2>
      <div className="not-prose glass p-5 rounded-xl mb-6">
        <ol className="space-y-3 text-gray-300 list-decimal list-inside">
          <li>Kalkulahin ang inaasahang halaga gamit ang calculator</li>
          <li>Magsumite ng pormal na kahilingan sa HR</li>
          <li>Kung tumanggi, maghain ng complaint sa Qiwa</li>
          <li>Huling paraan: magsampa ng kaso sa Labor Court</li>
        </ol>
      </div>

      <h2>Sauditoolhub Final Settlement Calculator</h2>
      <div className="not-prose glass p-6 rounded-xl mb-8">
        <Link href="/final-settlement-calculator" className="inline-flex items-center gap-2 rounded-xl bg-desert-primary px-8 py-3 text-sm font-bold text-white transition-all hover:bg-desert-primary-dim">
          <Calculator className="h-4 w-4" />
          Kalkulahin Ngayon
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
        Ang iyong final settlement sa Saudi Arabia ay higit pa sa EOSB. Sa pagitan ng unpaid salary, unused leave days, at air ticket pauwi, ang kabuuan ay maaaring mas malaki kaysa sa inaasahan ng maraming expat. Ang pag-unawa sa Articles 76, 84, at 85 ng Saudi Labor Law ay nagbibigay sa iyo ng kapangyarihan upang makipag-ayos nang may kumpiyansa.
      </p>
      <p>
        Gamitin ang{' '}
        <Link href="/final-settlement-calculator" className="text-desert-primary font-bold underline">Final Settlement Calculator</Link>
        {' '}ng Sauditoolhub. Tingnan din ang{' '}
        <Link href="/eosb-calculator" className="text-desert-primary font-bold underline">EOSB Calculator</Link>
        {' '}at{' '}
        <Link href="/jawazat-fine-calculator" className="text-desert-primary font-bold underline">Jawazat Fine Calculator</Link>
        . Bisitahin ang aming{' '}
        <Link href="/blog" className="text-desert-primary font-bold underline">Blog</Link> para sa higit pang gabay.
      </p>

      <div className="not-prose glass p-6 rounded-xl mt-8 text-center">
        <Calculator className="h-10 w-10 text-desert-primary mx-auto mb-3" />
        <h3 className="text-white text-lg font-bold mb-2">Kalkulahin ang Iyong Final Settlement Ngayon</h3>
        <p className="text-gray-400 text-sm mb-4">Libreng instant estimate — walang signup</p>
        <Link href="/final-settlement-calculator" className="inline-flex items-center gap-2 rounded-xl bg-desert-primary px-8 py-3 text-sm font-bold text-white transition-all hover:bg-desert-primary-dim">
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
      <h1>সৌদি আরবে চূড়ান্ত নিষ্পত্তি এবং বিমান টিকিটের সম্পূর্ণ গাইড 2026</h1>

      <div className="not-prose glass p-6 rounded-xl mb-8">
        <p className="text-gray-300 text-lg leading-relaxed">
          সৌদি আরবে চাকরি ছেড়ে দেওয়া জীবনের একটি বড় পরিবর্তন। সবচেয়ে চাপের বিষয় হল আপনার চাকরি শেষ হলে আপনি ঠিক কী পাবেন তা বের করা। EOSB, অবৈতনিক বেতন, অব্যবহৃত ছুটির দিন, এবং দেশে ফেরার বিমান টিকিট — এই সব নিয়ে দ্রুত বিভ্রান্তি তৈরি হয়।
        </p>
        <p className="text-gray-300 text-lg leading-relaxed mt-4">
          সৌদি আরবে <strong>চূড়ান্ত নিষ্পত্তি এবং বিমান টিকিট 2026</strong> এর সম্পূর্ণ গাইডে আপনাকে স্বাগতম। এই গাইডে আপনার যা জানা দরকার সবই রয়েছে: সৌদি লেবর লাউ আর্টিকেল 76, 77, 78, 84, এবং 85 এর অধীনে আইনি ভিত্তি, ধাপে ধাপে গণনার সূত্র, বাস্তব উদাহরণ, সাধারণ ভুল, এবং আপনার অধিকার কীভাবে দাবি করবেন।
        </p>
        <p className="text-gray-300 text-lg leading-relaxed mt-4">
            আমাদের বিনামূল্যের{' '}
          <Link href="/final-settlement-calculator" className="text-desert-primary font-bold underline">
            চূড়ান্ত নিষ্পত্তি ক্যালকুলেটর
          </Link>{' '}
          ব্যবহার করুন আপনার মোট প্রাপ্য তাৎক্ষণিকভাবে অনুমান করতে।
        </p>
      </div>

      <h2>সৌদি আরবে চূড়ান্ত নিষ্পত্তি কী?</h2>
      <p>
        চূড়ান্ত নিষ্পত্তি হল মোট পরিমাণ যা একজন নিয়োগকর্তাকে কর্মচারীকে তাদের কর্মসংস্থান চুক্তি শেষ হলে দিতে হবে — তা পদত্যাগ, অবসান বা চুক্তির মেয়াদ শেষ হওয়ার মাধ্যমেই হোক না কেন। এটি সৌদি লেবর লাউ, বিশেষ করে রয়্যাল ডিক্রি নং M/51 এর আর্টিকেল 76, 77, 78, 84, এবং 85 দ্বারা নিয়ন্ত্রিত।
      </p>

      <div className="not-prose glass p-5 rounded-xl mb-6">
        <h3 className="text-white font-semibold mb-2 flex items-center gap-2">
          <FileText className="h-5 w-5 text-desert-primary" />
          আইনি ভিত্তি
        </h3>
        <ul className="space-y-2 text-gray-300 text-sm">
          <li><strong className="text-desert-primary">আর্টিকেল 76:</strong> বার্ষিক ছুটির অধিকার এবং চাকরি শেষে অব্যবহৃত ছুটির দিনের ক্ষতিপূরণ।</li>
          <li><strong className="text-desert-primary">আর্টিকেল 77:</strong> নোটিশ পিরিয়ড এবং চাকরি শেষ করার নিয়ম।</li>
          <li><strong className="text-desert-primary">আর্টিকেল 78:</strong> নিয়োগকর্তা চুক্তির শর্ত ভঙ্গ করলে কর্মচারীর অধিকার।</li>
          <li><strong className="text-desert-primary">আর্টিকেল 84:</strong> EOSB গণনা — প্রথম ৫ বছরের জন্য অর্ধেক বেতন, তারপর পুরো বেতন।</li>
          <li><strong className="text-desert-primary">আর্টিকেল 85:</strong> পদত্যাগ করলে EOSB কমানোর নিয়ম।</li>
        </ul>
      </div>

      <h2>চূড়ান্ত নিষ্পত্তির উপাদান (2026 নিয়ম)</h2>

      <div className="not-prose glass p-5 rounded-xl mb-6">
        <h3 className="text-white font-semibold mb-3">1. ইন্ড অফ সার্ভিস বেনিফিট (EOSB)</h3>
        <p className="text-gray-300 text-sm mb-2">আর্টিকেল 84 এর অধীনে গণনা করা হয়। আপনার পরিষেবার বছর এবং বেসিক বেতনের উপর ভিত্তি করে একটি lump-sum পেমেন্ট।</p>
      </div>

      <div className="not-prose glass p-5 rounded-xl mb-6">
        <h3 className="text-white font-semibold mb-3">2. অবৈতনিক বেতন</h3>
        <p className="text-gray-300 text-sm">সূত্র: মাসিক বেতন ÷ 30 × অবৈতনিক দিনের সংখ্যা।</p>
      </div>

      <div className="not-prose glass p-5 rounded-xl mb-6">
        <h3 className="text-white font-semibold mb-3">3. অব্যবহৃত বার্ষিক ছুটির বেতন</h3>
        <p className="text-gray-300 text-sm">আর্টিকেল ৭৬ অনুযায়ী, অব্যবহৃত বার্ষিক ছুটির দিনগুলোর জন্য ক্ষতিপূরণ দিতে হবে।</p>
      </div>

      <div className="not-prose glass p-5 rounded-xl mb-6">
        <h3 className="text-white font-semibold mb-3">4. বিমান টিকিট</h3>
        <p className="text-gray-300 text-sm">নিয়োগকর্তাকে দেশে ফেরতের একমুখী ইকোনমি টিকিট দিতে হবে বা নগদ সমতুল্য দিতে হবে।</p>
      </div>

      <h2>গণনার সূত্র</h2>
      <div className="not-prose glass p-6 rounded-xl mb-8">
        <ol className="space-y-4 text-gray-300">
          <li><strong className="text-desert-primary">ধাপ 1:</strong> EOSB গণনা করুন</li>
          <li><strong className="text-desert-primary">ধাপ 2:</strong> অবৈতনিক বেতন যোগ করুন</li>
          <li><strong className="text-desert-primary">ধাপ 3:</strong> অব্যবহৃত ছুটির বেতন যোগ করুন</li>
          <li><strong className="text-desert-primary">ধাপ 4:</strong> বিমান টিকিটের মূল্য যোগ করুন</li>
          <li><strong className="text-desert-primary">ধাপ 5:</strong> মোট চূড়ান্ত নিষ্পত্তি</li>
        </ol>
      </div>

      <h2>বাস্তব উদাহরণ</h2>

      <div className="not-prose glass p-5 rounded-xl mb-6">
        <h3 className="text-white font-semibold mb-3">উদাহরণ ১: ৫ বছর পর পদত্যাগ</h3>
        <div className="bg-[#0A0E1A] p-4 rounded-lg text-gray-300 text-sm space-y-1 font-mono">
          <p>বেসিক বেতন: ১২,০০০ SAR</p>
          <p>EOSB: ১০,০০০ SAR + বেতন: ৪,০০০ SAR + ছুটি: ৬,০০০ SAR + টিকিট: ২,৫০০ SAR</p>
          <p className="text-desert-gold text-2xl font-bold mt-2">মোট: ২২,৫০০ SAR</p>
        </div>
      </div>

      <div className="not-prose glass p-5 rounded-xl mb-6">
        <h3 className="text-white font-semibold mb-3">উদাহরণ ২: ৮ বছর পর অবসান</h3>
        <div className="bg-[#0A0E1A] p-4 rounded-lg text-gray-300 text-sm space-y-1 font-mono">
          <p>বেসিক বেতন: ১৮,০০০ SAR</p>
          <p>EOSB: ৯৯,০০০ SAR + ছুটি: ১২,০০০ SAR + টিকিট: ৩,০০০ SAR</p>
          <p className="text-desert-gold text-2xl font-bold mt-2">মোট: ১,১৪,০০০ SAR</p>
        </div>
      </div>

      <h2>সাধারণ ভুল</h2>
      <div className="not-prose glass p-5 rounded-xl mb-6">
        <ul className="space-y-3 text-gray-300">
          <li><AlertTriangle className="h-4 w-4 text-desert-accent inline" /> অব্যবহৃত ছুটির বেতন ভুলে যাওয়া</li>
          <li><AlertTriangle className="h-4 w-4 text-desert-accent inline" /> বিমান টিকিটের মূল্য না যোগ করা</li>
          <li><AlertTriangle className="h-4 w-4 text-desert-accent inline" /> EOSB এর জন্য মোট বেতন ব্যবহার করা</li>
          <li><AlertTriangle className="h-4 w-4 text-desert-accent inline" /> চুক্তির শর্তাবলী না চেক করা</li>
        </ul>
      </div>

      <h2>কীভাবে চূড়ান্ত নিষ্পত্তি দাবি করবেন</h2>
      <div className="not-prose glass p-5 rounded-xl mb-6">
        <ol className="space-y-3 text-gray-300 list-decimal list-inside">
          <li>ক্যালকুলেটর দিয়ে আপনার প্রাপ্য হিসাব করুন</li>
          <li>HR-এ আনুষ্ঠানিক লিখিত অনুরোধ জমা দিন</li>
          <li>অস্বীকার করলে Qiwa-তে অভিযোগ দায়ের করুন</li>
          <li>শেষ পদক্ষেপ: লেবার কোর্টে মামলা করুন</li>
        </ol>
      </div>

      <h2>Sauditoolhub চূড়ান্ত নিষ্পত্তি ক্যালকুলেটর</h2>
      <div className="not-prose glass p-6 rounded-xl mb-8">
        <Link href="/final-settlement-calculator" className="inline-flex items-center gap-2 rounded-xl bg-desert-primary px-8 py-3 text-sm font-bold text-white transition-all hover:bg-desert-primary-dim">
          <Calculator className="h-4 w-4" />
          এখনই গণনা করুন
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
        সৌদি আরবে আপনার চূড়ান্ত নিষ্পত্তি শুধু EOSB-র চেয়ে বেশি। অবৈতনিক বেতন, অব্যবহৃত ছুটির দিন এবং দেশে ফেরার বিমান টিকিট মিলিয়ে মোট পরিমাণ অনেক বেশি হতে পারে। আর্টিকেল 76, 84, এবং 85 বোঝা আপনাকে আত্মবিশ্বাসের সাথে আপনার নিয়োগকর্তার সাথে আলোচনা করতে সক্ষম করে।
      </p>
      <p>
        আমাদের{' '}
        <Link href="/final-settlement-calculator" className="text-desert-primary font-bold underline">চূড়ান্ত নিষ্পত্তি ক্যালকুলেটর</Link>
        {' '}ব্যবহার করুন। আমাদের{' '}
        <Link href="/eosb-calculator" className="text-desert-primary font-bold underline">EOSB Calculator</Link>
        {' '}এবং{' '}
        <Link href="/jawazat-fine-calculator" className="text-desert-primary font-bold underline">জাওয়াজাত ফাইন ক্যালকুলেটর</Link>
        {' '}ও দেখুন। আরও গাইডের জন্য{' '}
        <Link href="/blog" className="text-desert-primary font-bold underline">ব্লগ</Link> দেখুন।
      </p>

      <div className="not-prose glass p-6 rounded-xl mt-8 text-center">
        <Calculator className="h-10 w-10 text-desert-primary mx-auto mb-3" />
        <h3 className="text-white text-lg font-bold mb-2">এখনই আপনার চূড়ান্ত নিষ্পত্তি গণনা করুন</h3>
        <p className="text-gray-400 text-sm mb-4">বিনামূল্যে তাৎক্ষণিক অনুমান — সাইনআপ প্রয়োজন নেই</p>
        <Link href="/final-settlement-calculator" className="inline-flex items-center gap-2 rounded-xl bg-desert-primary px-8 py-3 text-sm font-bold text-white transition-all hover:bg-desert-primary-dim">
          <Calculator className="h-4 w-4" />
          বিনামূল্যে ক্যালকুলেটর ব্যবহার করুন
        </Link>
      </div>
    </article>
  )
}

export default async function FinalSettlementGuidePage({ params }: Props) {
  const { locale } = await params
  const isAr = locale === 'ar'
  const isUr = locale === 'ur'
  const isTl = locale === 'tl'
  const isBn = locale === 'bn'
  const isDefault = locale === 'en'
  const pageUrl = isDefault ? `${baseUrl}/guide/final-settlement-air-ticket-calculator-saudi-arabia-2026` : `${baseUrl}/${locale}/guide/final-settlement-air-ticket-calculator-saudi-arabia-2026`

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
          { name: isAr ? 'دليل التسوية النهائية' : isUr ? 'فائنل سیٹلمنٹ گائیڈ' : isTl ? 'Gabay sa Final Settlement' : isBn ? 'চূড়ান্ত নিষ্পত্তি গাইড' : 'Final Settlement Guide', url: pageUrl },
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
