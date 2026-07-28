import type { Metadata } from 'next'
import Link from 'next/link'
import { Calculator, DollarSign, Building2, FileText, AlertTriangle, CheckCircle, TrendingUp, Users, Shield, Briefcase, CreditCard, Landmark, Heart, Globe, Smartphone, Search, Info, Copy } from 'lucide-react'

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
    ? 'الدليل الكامل للتحقق من الآيبان المصرفي وقواعد التحويل في السعودية 2026 | Sauditoolhub'
    : isUr
    ? 'سعودی بینک ٹرانسفر اور آئی بی اے نمبر کی تصدیق کا مکمل گائیڈ 2026 | Sauditoolhub'
    : isTl
    ? 'Kumpletong Gabay sa Saudi IBAN Validation at Bank Transfer Rules 2026 | Sauditoolhub'
    : isBn
    ? 'সৌদি আইবিএন বৈধতা ও ব্যাংক ট্রান্সফার নিয়মের সম্পূর্ণ গাইড ২০২৬ | Sauditoolhub'
    : 'The Complete Guide to Saudi IBAN Validation & Bank Transfer Rules 2026 | Sauditoolhub'

  const description = isAr
    ? 'دليل كامل للتحقق من رقم الآيبان المصرفي السعودي 2026. شرح بنية الآيبان السعودي، أكواد البنوك، رسوم التحويلات المحلية والدولية (سريع وسويفت)، وكيفية استخدام مدقق الآيبان من Sauditoolhub.'
    : isUr
    ? 'سعودی عرب میں آئی بی اے نمبر کی تصدیق کا مکمل گائیڈ 2026۔ سعودی IBAN کی ساخت، بینک کوڈز، SARIE اور SWIFT ٹرانسفر فیس، اور اپنا IBAN کیسے معلوم کریں۔'
    : isTl
    ? 'Kumpletong gabay sa Saudi IBAN validation 2026. Alamin ang istraktura ng Saudi IBAN, mga bank code, SARIE at SWIFT transfer fees, at kung paano gamitin ang IBAN Validator ng Sauditoolhub.'
    : isBn
    ? 'সৌদি আইবিএন বৈধতা যাচাইয়ের সম্পূর্ণ গাইড ২০২৬। সৌদি আইবিএন-এর গঠন, ব্যাংক কোড, SARIE ও SWIFT ট্রান্সফার ফি, এবং কীভাবে আপনার আইবিএন খুঁজে পাবেন۔'
    : 'Complete guide to Saudi IBAN validation and bank transfer rules 2026. Learn IBAN structure, bank codes, SARIE/SWIFT fees, how to find your IBAN, and use the free Sauditoolhub IBAN Validator tool.'

  return {
    title,
    description,
    alternates: {
      canonical: isDefault ? `\/guide/iban-validator-banking-guide-saudi-arabia-2026` : `\/\/guide/iban-validator-banking-guide-saudi-arabia-2026`,
      languages: {
        en: `\/guide/iban-validator-banking-guide-saudi-arabia-2026`,
        ar: `\/ar/guide/iban-validator-banking-guide-saudi-arabia-2026`,
        ur: `\/ur/guide/iban-validator-banking-guide-saudi-arabia-2026`,
        tl: `\/tl/guide/iban-validator-banking-guide-saudi-arabia-2026`,
        bn: `\/bn/guide/iban-validator-banking-guide-saudi-arabia-2026`,
      },
    },
    openGraph: {
      title,
      description,
      url: isDefault ? `\/guide/iban-validator-banking-guide-saudi-arabia-2026` : `\/\/guide/iban-validator-banking-guide-saudi-arabia-2026`,
      siteName: 'Sauditoolhub',
      locale: isAr ? 'ar_SA' : isUr ? 'ur_PK' : isTl ? 'tl_PH' : isBn ? 'bn_BD' : 'en_US',
      type: 'article',
      publishedTime: '2026-03-15',
      modifiedTime: '2026-07-01',
    },
    twitter: { card: 'summary_large_image', title, description },
    robots: { index: true, follow: true },
  }
}

const articleSchemaEn = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'The Complete Guide to Saudi IBAN Validation & Bank Transfer Rules 2026',
  description: 'A complete guide to Saudi IBAN validation, bank codes, SARIE and SWIFT transfer fees, how to find your IBAN, common mistakes, and step-by-step validation using Sauditoolhub\'s free IBAN Validator.',
  author: { '@type': 'Person', name: 'Sauditoolhub Team' },
  publisher: { '@type': 'Organization', name: 'Sauditoolhub', logo: { '@type': 'ImageObject', url: `\/logo.png` } },
  datePublished: '2026-03-15',
  dateModified: '2026-07-01',
}

const schemaAr = {
  ...articleSchemaEn,
  headline: 'الدليل الكامل للتحقق من الآيبان المصرفي وقواعد التحويل في السعودية 2026',
  description: 'دليل كامل للتحقق من الآيبان المصرفي السعودي، أكواد البنوك، رسوم تحويل سريع وسويفت، كيفية العثور على الآيبان الخاص بك، الأخطاء الشائعة، وكيفية استخدام مدقق الآيبان المجاني من Sauditoolhub.',
}

const schemaUr = {
  ...articleSchemaEn,
  headline: 'سعودی بینک ٹرانسفر اور آئی بی اے نمبر کی تصدیق کا مکمل گائیڈ 2026',
  description: 'سعودی IBAN کی تصدیق، بینک کوڈز، SARIE اور SWIFT ٹرانسفر فیس، IBAN تلاش کرنے کے طریقے، عام غلطیاں، اور Sauditoolhub کے مفت IBAN Validator کے استعمال کا مکمل گائیڈ۔',
}

const schemaTl = {
  ...articleSchemaEn,
  headline: 'Kumpletong Gabay sa Saudi IBAN Validation at Bank Transfer Rules 2026',
  description: 'Isang kumpletong gabay sa Saudi IBAN validation, mga bank code, SARIE at SWIFT transfer fees, kung paano hanapin ang iyong IBAN, mga karaniwang pagkakamali, at paggamit ng libreng IBAN Validator ng Sauditoolhub.',
}

const schemaBn = {
  ...articleSchemaEn,
  headline: 'সৌদি আইবিএন বৈধতা ও ব্যাংক ট্রান্সফার নিয়মের সম্পূর্ণ গাইড ২০২৬',
  description: 'সৌদি আইবিএন বৈধতা যাচাই, ব্যাংক কোড, SARIE ও SWIFT ট্রান্সফার ফি, কীভাবে আপনার আইবিএন খুঁজবেন, সাধারণ ভুল এবং Sauditoolhub-এর বিনামূল্যের আইবিএন ভ্যালিডেটর ব্যবহারের সম্পূর্ণ গাইড।',
}


const faqsEn = [
  { question: 'What is a Saudi IBAN and how long is it?', answer: 'A Saudi IBAN (International Bank Account Number) is a 24-character alphanumeric code that uniquely identifies your bank account for international and local transactions. It consists of: SA prefix (2 characters), 2 check digits, 2-digit bank code, and 18-digit account number (including leading zeros if needed). All bank accounts in Saudi Arabia have been converted to IBAN format since SAMA mandated it in 2008.' },
  { question: 'How can I find my IBAN in Saudi Arabia?', answer: 'You can find your IBAN through several methods: (1) Your bank\'s mobile app — most Saudi banks display the IBAN prominently on the account summary screen. (2) Online banking portal — log in and navigate to account details. (3) Bank statement — your IBAN is printed on every statement. (4) Cheque book — the IBAN is printed on each cheque. (5) SAMA\'s official IBAN converter tool — you can convert your account number to IBAN format online.' },
  { question: 'What is the IBAN for Al Rajhi Bank?', answer: 'Al Rajhi Bank\'s IBAN prefix is SA03 8000. The full IBAN is 24 characters starting with SA03, followed by the bank code 80, and the 18-digit account number. For example: SA03 8000 0000 6080 1016 7519. Always verify the IBAN using a validator before initiating a transfer.' },
  { question: 'What are the SARIE transfer fees in Saudi Arabia?', answer: 'SARIE (Saudi Arabian Riyal Interbank Express) is the instant payment system operated by SAMA. Most Saudi banks offer free SARIE transfers for amounts up to a certain limit (typically 20,000-50,000 SAR per transaction). Some banks may charge a small fee of 1-5 SAR for larger amounts or premium transfers. SARIE transfers are processed instantly, 24/7, including weekends and public holidays.' },
  { question: 'How much does a SWIFT international transfer cost from Saudi Arabia?', answer: 'SWIFT international transfer fees from Saudi Arabia typically range from 75 to 150 SAR per transaction, depending on your bank and the destination country. Additional costs include: correspondent bank fees (10-30 USD), exchange rate margin (2-3% above the mid-market rate), and receiving bank charges. For example, sending 5,000 SAR to India via SWIFT could cost 100-200 SAR in total fees and unfavorable exchange rates.' },
  { question: 'What is the difference between IBAN and account number?', answer: 'An account number is a local identifier for your bank account within a specific bank. An IBAN is an international standard that encodes your account number along with country code, check digits, and bank identifier. In Saudi Arabia, the IBAN incorporates the full account number as its last 18 digits. You should always use IBAN for international transfers and can also use it for local SARIE transfers. Never use a bare account number for international transfers.' },
  { question: 'Which Saudi banks use bank code 10 for IBAN?', answer: 'Bank code 10 is used by Saudi National Bank (SNB), formerly known as National Commercial Bank (NCB). After the merger with Samba Financial Group, SNB retained bank code 10. Riyad Bank also uses the prefix SAxx 1000. Always double-check the bank code when entering an IBAN — confusing SNB (10) with SABB (50) or Alinma (60) is a common error.' },
  { question: 'Can I use Wise or Remitly instead of SWIFT from Saudi Arabia?', answer: 'Yes, digital money transfer services like Wise (formerly TransferWise), Remitly, and Western Union are widely available in Saudi Arabia and often offer better exchange rates and lower fees than traditional SWIFT bank transfers. These services typically charge 0.5-1.5% in fees compared to 2-3% margin + fixed fees for SWIFT. However, you may need to use your IBAN to set up the transfer recipient, and some services require Mada card registration for payments.' },
  { question: 'What happens if I enter the wrong IBAN?', answer: 'If you enter a wrong IBAN, one of several things can happen: (1) The system detects the error (thanks to the check digit algorithm) and rejects the transaction before it leaves your account — this is the most common and safest outcome. (2) The transfer is sent to a different account (if the wrong IBAN happens to pass check digit validation). (3) The funds are returned to your account after several days, minus any applicable fees. Always use an IBAN validator to verify the IBAN before sending any transfer.' },
  { question: 'Is the Sauditoolhub IBAN Validator free to use?', answer: 'Yes, the Sauditoolhub IBAN Validator is completely free to use with no registration required. It validates the IBAN structure, check digits, bank code, and length. You can use it unlimited times to verify Saudi IBANs as well as IBANs from other countries. It works on desktop and mobile browsers.' },
]

const faqsAr = [
  { question: 'ما هو رقم الآيبان السعودي وكم طوله؟', answer: 'الآيبان السعودي هو رمز دولي للحساب المصرفي يتكون من 24 حرفاً ورقماً. يتكون من: SA (حرفان)، رقمان للتدقيق، رقمان لرمز البنك، و18 رقماً لرقم الحساب. جميع الحسابات البنكية في السعودية تم تحويلها إلى صيغة IBAN منذ عام 2008.' },
  { question: 'كيف أجد رقم الآيبان الخاص بي في السعودية؟', answer: 'يمكنك العثور على IBAN الخاص بك عبر: (1) تطبيق البنك — يعرض IBAN على شاشة ملخص الحساب. (2) الخدمات المصرفية عبر الإنترنت. (3) كشف الحساب البنكي. (4) دفتر الشيكات. (5) أداة تحويل IBAN الرسمية من ساما.' },
  { question: 'ما هو الآيبان الخاص بمصرف الراجحي؟', answer: 'الآيبان الخاص بمصرف الراجحي يبدأ بـ SA03 8000. الطول الإجمالي 24 حرفاً. مثال: SA03 8000 0000 6080 1016 7519. تأكد دائماً من صحة الآيبان باستخدام مدقق قبل إجراء التحويل.' },
  { question: 'ما هي رسوم تحويل سريع (SARIE) في السعودية؟', answer: 'معظم البنوك السعودية تقدم تحويلات SARIE مجانية للمبالغ حتى 20,000-50,000 ريال. بعض البنوك تفرض رسوماً صغيرة (1-5 ريال) للمبالغ الأكبر. التحويلات فورية وتعمل 24/7.' },
  { question: 'كم تبلغ رسوم التحويل الدولي سويفت من السعودية؟', answer: 'رسوم تحويل SWIFT من السعودية تتراوح بين 75 و 150 ريالاً للمعاملة الواحدة، بالإضافة إلى رسوم البنوك المراسلة (10-30 دولاراً)، وهامش سعر الصرف (2-3%).' },
  { question: 'ما الفرق بين الآيبان ورقم الحساب؟', answer: 'رقم الحساب هو معرف محلي لحسابك المصرفي. الآيبان هو معيار دولي يشفر رقم الحساب مع رمز الدولة وأرقام التدقيق ورمز البنك. استخدم IBAN دائماً للتحويلات الدولية.' },
  { question: 'أي بنك سعودي يستخدم رمز البنك 10 للآيبان؟', answer: 'البنك الأهلي السعودي (SNB) يستخدم رمز البنك 10. البنك الأهلي كان يعرف سابقاً باسم البنك التجاري الوطني. كما يستخدم بنك الرياض الرقم 10 أيضاً.' },
  { question: 'هل يمكنني استخدام Wise أو Remitly بدلاً من SWIFT؟', answer: 'نعم، تتوفر خدمات مثل Wise و Remitly في السعودية وتقدم أسعار صرف أفضل ورسوماً أقل من تحويلات SWIFT التقليدية. تتراوح رسومها بين 0.5-1.5% مقارنة بـ 2-3% لـ SWIFT.' },
  { question: 'ماذا يحدث إذا أدخلت الآيبان الخطأ؟', answer: 'إذا أدخلت IBAN خاطئاً، قد: (1) يكتشف النظام الخطأ ويرفض المعاملة — الأكثر شيوعاً. (2) ترسل المعاملة لحساب آخر إذا اجتاز التحقق. (3) تعود الأموال بعد عدة أيام مطروحاً منها الرسوم. استخدم مدقق IBAN دائماً.' },
  { question: 'هل مدقق الآيبان من Sauditoolhub مجاني؟', answer: 'نعم، مدقق الآيبان من Sauditoolhub مجاني تماماً ولا يتطلب تسجيلاً. يتحقق من بنية IBAN وأرقام التدقيق ورمز البنك والطول. يعمل على متصفحات سطح المكتب والجوال.' },
]

const faqsUr = [
  { question: 'سعودی IBAN کیا ہے اور اس کی لمبائی کتنی ہے؟', answer: 'سعودی IBAN (بین الاقوامی بینک اکاؤنٹ نمبر) ایک 24 حروفی کوڈ ہے جو بین الاقوامی اور مقامی لین دین کے لیے آپ کے بینک اکاؤنٹ کی منفرد شناخت کرتا ہے۔ یہ SA (2 حروف)، 2 چیک ڈیجٹ، 2 بینک کوڈ، اور 18 ہندسوں کے اکاؤنٹ نمبر پر مشتمل ہے۔' },
  { question: 'سعودی عرب میں اپنا IBAN کیسے معلوم کروں؟', answer: 'آپ اپنا IBAN تلاش کر سکتے ہیں: (1) بینک موبائل ایپ میں۔ (2) آن لائن بینکنگ پورٹل میں۔ (3) بینک سٹیٹمنٹ پر۔ (4) چیک بک پر۔ (5) SAMA کے سرکاری IBAN کنورٹر ٹول سے۔' },
  { question: 'الرجی بینک کا IBAN کیا ہے؟', answer: 'الرجی بینک کا IBAN SA03 8000 سے شروع ہوتا ہے۔ کل 24 حروف۔ مثال: SA03 8000 0000 6080 1016 7519۔ ٹرانسفر سے پہلے IBAN کی تصدیق ضرور کریں۔' },
  { question: 'سعودی عرب میں SARIE ٹرانسفر فیس کیا ہے؟', answer: 'زیادہ تر سعودی بینک SARIE ٹرانسفر مفت پیش کرتے ہیں (20,000-50,000 SAR تک)۔ کچھ بینک بڑی رقم پر 1-5 SAR فیس لیتے ہیں۔ SARIE ٹرانسفر فوری ہوتے ہیں اور 24/7 کام کرتے ہیں۔' },
  { question: 'سعودی عرب سے SWIFT انٹرنیشنل ٹرانسفر کے کتنے چارجز ہیں؟', answer: 'SWIFT ٹرانسفر فیس 75 سے 150 SAR تک ہوتی ہے، کریسپونڈنٹ بینک فیس (10-30 USD)، اور ایکسچینج ریٹ مارجن (2-3%) شامل ہیں۔' },
  { question: 'IBAN اور اکاؤنٹ نمبر میں کیا فرق ہے؟', answer: 'اکاؤنٹ نمبر مقامی شناخت ہے۔ IBAN بین الاقوامی معیار ہے جو اکاؤنٹ نمبر کو ملکی کوڈ، چیک ڈیجٹ اور بینک کوڈ کے ساتھ انکوڈ کرتا ہے۔ بین الاقوامی ٹرانسفر کے لیے ہمیشہ IBAN استعمال کریں۔' },
  { question: 'کون سا سعودی بینک کوڈ 10 استعمال کرتا ہے؟', answer: 'سعودی نیشنل بینک (SNB) کوڈ 10 استعمال کرتا ہے۔ الرياض بینک بھی 10 استعمال کرتا ہے۔ SNB (10) اور SABB (50) میں فرق کرنا ضروری ہے۔' },
  { question: 'کیا میں SWIFT کی بجائے Wise یا Remitly استعمال کر سکتا ہوں؟', answer: 'ہاں، سعودی عرب میں Wise اور Remitly جیسی سروسز SWIFT سے سستی اور بہتر ایکسچینج ریٹ پیش کرتی ہیں۔ ان کی فیس 0.5-1.5% ہے جبکہ SWIFT کی 2-3%۔' },
  { question: 'اگر میں غلط IBAN داخل کروں تو کیا ہوگا؟', answer: 'غلط IBAN داخل کرنے پر: (1) سسٹم غلطی پکڑ لیتا ہے اور ٹرانزیکشن مسترد کر دیتا ہے۔ (2) اگر IBAN چیک پاس کر جائے تو غلط اکاؤنٹ میں رقم چلی جاتی ہے۔ (3) رقم کچھ دنوں بعد واپس آتی ہے۔ IBAN کی تصدیق ضرور کریں۔' },
  { question: 'کیا Sauditoolhub IBAN Validator مفت ہے؟', answer: 'ہاں، Sauditoolhub کا IBAN Validator مکمل طور پر مفت ہے اور رجسٹریشن کی ضرورت نہیں۔ یہ IBAN کی ساخت، چیک ڈیجٹ اور بینک کوڈ کی تصدیق کرتا ہے۔' },
]

const faqsTl = [
  { question: 'Ano ang Saudi IBAN at gaano ito kahaba?', answer: 'Ang Saudi IBAN ay isang 24-character na code na kumikilala sa iyong bank account para sa lokal at internasyonal na transaksyon. Binubuo ito ng: SA prefix, 2 check digits, 2-digit bank code, at 18-digit account number.' },
  { question: 'Paano ko mahahanap ang aking IBAN sa Saudi Arabia?', answer: 'Hanapin ang iyong IBAN sa pamamagitan ng: (1) Bank mobile app. (2) Online banking portal. (3) Bank statement. (4) Cheque book. (5) SAMA\'s IBAN converter tool.' },
  { question: 'Ano ang IBAN ng Al Rajhi Bank?', answer: 'Ang IBAN ng Al Rajhi Bank ay nagsisimula sa SA03 8000. Halimbawa: SA03 8000 0000 6080 1016 7519. Palaging i-verify ang IBAN gamit ang validator bago mag-transfer.' },
  { question: 'Magkano ang SARIE transfer fees sa Saudi Arabia?', answer: 'Karamihan ng Saudi bank ay nag-aalok ng libreng SARIE transfers hanggang 20,000-50,000 SAR. Ang iba ay naniningil ng 1-5 SAR para sa mas malaking halaga. Ang SARIE transfers ay instant at available 24/7.' },
  { question: 'Magkano ang SWIFT international transfer mula Saudi Arabia?', answer: 'Ang SWIFT transfer fees ay karaniwang 75-150 SAR bawat transaksyon, kasama ang correspondent bank fees (10-30 USD) at exchange rate margin (2-3%).' },
  { question: 'Ano ang pagkakaiba ng IBAN at account number?', answer: 'Ang account number ay lokal na identifier. Ang IBAN ay internasyonal na pamantayan na nag-eencode ng account number kasama ng country code, check digits, at bank code.' },
  { question: 'Aling Saudi bank ang gumagamit ng bank code 10?', answer: 'Ang Saudi National Bank (SNB) ay gumagamit ng bank code 10. Ang Riyad Bank ay gumagamit din ng 10. Siguraduhing hindi malito ang SNB (10) sa SABB (50).' },
  { question: 'Maaari ba akong gumamit ng Wise o Remitly sa halip na SWIFT?', answer: 'Oo, ang mga serbisyo tulad ng Wise at Remitly ay mas mura kaysa SWIFT na may 0.5-1.5% na fee kumpara sa 2-3% ng SWIFT.' },
  { question: 'Ano ang mangyayari kung mali ang IBAN na naipasok ko?', answer: 'Kung mali ang IBAN: (1) Karaniwang tatanggihan ng system ang transaksyon. (2) Mapupunta ang pera sa maling account kung pumasa ito sa validation. (3) Babalik ang pera pagkatapos ng ilang araw.' },
  { question: 'Libre ba ang Sauditoolhub IBAN Validator?', answer: 'Oo, libre ang IBAN Validator ng Sauditoolhub at hindi nangangailangan ng pagpaparehistro. Nagva-validate ito ng IBAN structure, check digits, at bank code.' },
]

const faqsBn = [
  { question: 'সৌদি আইবিএন কী এবং এর দৈর্ঘ্য কত?', answer: 'সৌদি আইবিএন একটি ২৪-ক্যারেক্টার কোড যা আন্তর্জাতিক ও স্থানীয় লেনদেনের জন্য আপনার ব্যাংক অ্যাকাউন্ট শনাক্ত করে। এটি SA প্রিফিক্স, ২ চেক ডিজিট, ২ ব্যাংক কোড এবং ১৮ ডিজিটের অ্যাকাউন্ট নম্বর নিয়ে গঠিত।' },
  { question: 'সৌদি আরবে কীভাবে আমার আইবিএন খুঁজে পাব?', answer: 'আপনি আপনার IBAN খুঁজে পেতে পারেন: (১) ব্যাংকের মোবাইল অ্যাপে। (২) অনলাইন ব্যাংকিং পোর্টালে। (৩) ব্যাংক স্টেটমেন্টে। (৪) চেক বইয়ে। (৫) SAMA-এর অফিসিয়াল IBAN কনভার্টার টুলে।' },
  { question: 'আল রাজি ব্যাংকের আইবিএন কী?', answer: 'আল রাজি ব্যাংকের IBAN শুরু হয় SA03 8000 দিয়ে। উদাহরণ: SA03 8000 0000 6080 1016 7519। ট্রান্সফারের আগে সবসময় IBAN যাচাই করুন।' },
  { question: 'সৌদি আরবে SARIE ট্রান্সফার ফি কত?', answer: 'বেশিরভাগ সৌদি ব্যাংক ২০,০০০-৫০,০০০ SAR পর্যন্ত বিনামূল্যে SARIE ট্রান্সফার অফার করে। বড় অঙ্কের জন্য কিছু ব্যাংক ১-৫ SAR ফি নেয়। SARIE ট্রান্সফার তাৎক্ষণিক এবং ২৪/৭ কাজ করে।' },
  { question: 'সৌদি আরব থেকে SWIFT আন্তর্জাতিক ট্রান্সফার খরচ কত?', answer: 'SWIFT ট্রান্সফার ফি সাধারণত ৭৫-১৫০ SAR, সাথে করেসপন্ডেন্ট ব্যাংক ফি (১০-৩০ USD) এবং এক্সচেঞ্জ রেট মার্জিন (২-৩%)।' },
  { question: 'IBAN এবং অ্যাকাউন্ট নম্বরের মধ্যে পার্থক্য কী?', answer: 'অ্যাকাউন্ট নম্বর স্থানীয় শনাক্তকারী। IBAN আন্তর্জাতিক মান যা অ্যাকাউন্ট নম্বরকে দেশ কোড, চেক ডিজিট এবং ব্যাংক কোড সহ এনকোড করে।' },
  { question: 'কোন সৌদি ব্যাংক কোড ১০ ব্যবহার করে?', answer: 'সৌদি ন্যাশনাল ব্যাংক (SNB) কোড ১০ ব্যবহার করে। রিয়াদ ব্যাংকও ১০ ব্যবহার করে। SNB (১০) এবং SABB (৫০) গুলিয়ে ফেলা একটি সাধারণ ভুল।' },
  { question: 'আমি কি SWIFT-এর পরিবর্তে Wise বা Remitly ব্যবহার করতে পারি?', answer: 'হ্যাঁ, Wise এবং Remitly-এর মতো সেবাগুলি SWIFT-এর তুলনায় সস্তা (০.৫-১.৫% ফি বনাম ২-৩%) এবং ভালো এক্সচেঞ্জ রেট অফার করে।' },
  { question: 'ভুল IBAN দিলে কী হবে?', answer: 'ভুল IBAN দিলে: (১) সিস্টেম ত্রুটি ধরে লেনদেন প্রত্যাখ্যান করে। (২) ভুল অ্যাকাউন্টে টাকা চলে গেলে ফেরত পেতে দেরি হয়। সবসময় IBAN যাচাই করুন।' },
  { question: 'Sauditoolhub IBAN Validator কি বিনামূল্যে?', answer: 'হ্যাঁ, Sauditoolhub-এর IBAN Validator সম্পূর্ণ বিনামূল্যে এবং নিবন্ধনের প্রয়োজন নেই। এটি IBAN স্ট্রাকচার, চেক ডিজিট এবং ব্যাংক কোড যাচাই করে।' },
]

function EnContent() {
  return (
    <article className="prose prose-invert max-w-none prose-headings:text-desert-primary prose-a:text-desert-primary prose-strong:text-white prose-li:text-gray-300">
      <h1>The Complete Guide to Saudi IBAN Validation &amp; Bank Transfer Rules 2026</h1>

      <div className="not-prose glass p-6 rounded-xl mb-8">
        <p className="text-gray-300 text-lg leading-relaxed">
          Nothing is more frustrating than a bank transfer that fails at the last moment. You double-check the account name, enter the amount carefully, and hit send — only to receive an error message hours later saying the transfer could not be processed. Nine times out of ten, the culprit is an incorrect or invalid IBAN number.
        </p>
        <p className="text-gray-300 text-lg leading-relaxed mt-4">
          The International Bank Account Number (IBAN) is the backbone of modern banking in Saudi Arabia. Every local SARIE transfer, every international SWIFT payment, every salary disbursement — they all rely on this 24-character code to route money accurately from one account to another. A single typo in the IBAN can result in rejected transfers, delayed payments, or worse, funds sent to the wrong account.
        </p>
        <p className="text-gray-300 text-lg leading-relaxed mt-4">
          This guide covers everything you need to know about Saudi IBANs: the structure and validation rules, a complete list of Saudi bank codes for 2026, step-by-step instructions for finding your own IBAN, real-life validation examples, transfer fees for SARIE and SWIFT, and the most common mistakes to avoid. Use our free{' '}
          <Link href="/iban-validator" className="text-desert-primary font-bold underline">
            IBAN Validator
          </Link>{' '}
          to instantly verify any Saudi IBAN before sending money.
        </p>
      </div>

      <h2>What is a Saudi IBAN?</h2>
      <p>
        An International Bank Account Number (IBAN) is a standardized alphanumeric code that uniquely identifies a bank account across international borders. It was developed by the International Organization for Standardization (ISO) under ISO 13616 to facilitate cross-border payments and reduce errors in transaction routing.
      </p>
      <p>
        In Saudi Arabia, the Saudi Central Bank (SAMA) mandated the adoption of IBAN for all bank accounts in March 2008. Since then, every bank account in the Kingdom has been converted to IBAN format, and IBAN is now the required account identifier for all local and international transfers.
      </p>

      <div className="not-prose glass p-5 rounded-xl mb-6">
        <h3 className="text-desert-primary font-semibold mb-3">Saudi IBAN Structure (24 Characters)</h3>
        <div className="bg-[#0A0E1A] p-4 rounded-lg text-gray-300 text-sm">
          <div className="grid grid-cols-5 gap-1 text-center mb-3">
            <div className="bg-desert-primary/20 p-2 rounded">
              <div className="text-desert-primary font-bold">SA</div>
              <div className="text-gray-500 text-xs">Country Code</div>
            </div>
            <div className="bg-desert-primary/20 p-2 rounded">
              <div className="text-desert-primary font-bold">03</div>
              <div className="text-gray-500 text-xs">Check Digits</div>
            </div>
            <div className="bg-desert-primary/20 p-2 rounded">
              <div className="text-desert-primary font-bold">80</div>
              <div className="text-gray-500 text-xs">Bank Code</div>
            </div>
            <div className="bg-desert-primary/20 p-2 rounded col-span-2">
              <div className="text-desert-primary font-bold">000000608010167519</div>
              <div className="text-gray-500 text-xs">Account Number (18 digits)</div>
            </div>
          </div>
          <p className="text-gray-400 mt-2"><strong className="text-white">SA</strong> — Country code for Saudi Arabia. Always the first two characters.</p>
          <p className="text-gray-400"><strong className="text-white">03</strong> — Two check digits calculated using the modulo 97 algorithm. These digits validate the entire IBAN and catch common entry errors.</p>
          <p className="text-gray-400"><strong className="text-white">80</strong> — Bank code identifying the specific financial institution. For example, 80 = Al Rajhi Bank.</p>
          <p className="text-gray-400"><strong className="text-white">000000608010167519</strong> — Your account number, padded with leading zeros to exactly 18 digits.</p>
        </div>
      </div>

      <h2>How to Read &amp; Validate a Saudi IBAN (Step-by-Step)</h2>
      <p>
        Validating an IBAN is straightforward once you understand the structure. Here is the step-by-step process:
      </p>

      <div className="not-prose glass p-5 rounded-xl mb-6">
        <div className="space-y-4">
          <div className="bg-[#0A0E1A] p-4 rounded-lg">
            <p className="text-white font-semibold mb-2">Step 1: Check the Length</p>
            <p className="text-gray-300 text-sm">A valid Saudi IBAN is exactly 24 alphanumeric characters. No more, no less. If the code is shorter or longer, it is invalid.</p>
          </div>
          <div className="bg-[#0A0E1A] p-4 rounded-lg">
            <p className="text-white font-semibold mb-2">Step 2: Verify the Country Code</p>
            <p className="text-gray-300 text-sm">The first two characters must be &quot;SA&quot; (uppercase). Letters are used to identify the country.</p>
          </div>
          <div className="bg-[#0A0E1A] p-4 rounded-lg">
            <p className="text-white font-semibold mb-2">Step 3: Validate the Check Digits</p>
            <p className="text-gray-300 text-sm">The third and fourth characters are check digits calculated using the ISO 13616 modulo 97 algorithm. Move the first four characters to the end of the string, convert letters to numbers (A=10, B=11, ..., Z=35), then compute the number modulo 97. The result must equal 1 for a valid IBAN.</p>
          </div>
          <div className="bg-[#0A0E1A] p-4 rounded-lg">
            <p className="text-white font-semibold mb-2">Step 4: Confirm the Bank Code</p>
            <p className="text-gray-300 text-sm">Characters 5-6 (positions 3-4 in the 24-character count after SA) represent the bank code. Verify it matches the intended bank using our table below.</p>
          </div>
          <div className="bg-[#0A0E1A] p-4 rounded-lg">
            <p className="text-white font-semibold mb-2">Step 5: Use the Sauditoolhub IBAN Validator</p>
            <p className="text-gray-300 text-sm">For instant validation, paste the IBAN into our{' '}
              <Link href="/iban-validator" className="text-desert-primary underline">free IBAN Validator</Link>.
              It performs all the above checks automatically and tells you if the IBAN is valid, including the bank name and branch details.</p>
          </div>
        </div>
      </div>

      <h2>Major Saudi Banks &amp; Their IBAN Codes (2026 List)</h2>

      <div className="not-prose glass p-5 rounded-xl mb-6">
        <div className="bg-[#0A0E1A] p-4 rounded-lg text-gray-300 text-sm">
          <table className="w-full">
            <thead>
              <tr className="text-white border-b border-gray-700">
                <th className="text-left py-2">Bank Name</th>
                <th className="text-left py-2">Bank Code</th>
                <th className="text-left py-2">IBAN Prefix</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-gray-700/50">
                <td className="py-2">Al Rajhi Bank</td>
                <td className="py-2">80</td>
                <td className="py-2 font-mono">SAxx 8000</td>
              </tr>
              <tr className="border-b border-gray-700/50">
                <td className="py-2">Saudi National Bank (SNB) / NCB</td>
                <td className="py-2">10</td>
                <td className="py-2 font-mono">SAxx 1000</td>
              </tr>
              <tr className="border-b border-gray-700/50">
                <td className="py-2">Riyad Bank</td>
                <td className="py-2">10</td>
                <td className="py-2 font-mono">SAxx 1000</td>
              </tr>
              <tr className="border-b border-gray-700/50">
                <td className="py-2">Alinma Bank</td>
                <td className="py-2">60</td>
                <td className="py-2 font-mono">SAxx 6000</td>
              </tr>
              <tr className="border-b border-gray-700/50">
                <td className="py-2">Bank AlJazira</td>
                <td className="py-2">40</td>
                <td className="py-2 font-mono">SAxx 4000</td>
              </tr>
              <tr className="border-b border-gray-700/50">
                <td className="py-2">Arab National Bank</td>
                <td className="py-2">20</td>
                <td className="py-2 font-mono">SAxx 2000</td>
              </tr>
              <tr className="border-b border-gray-700/50">
                <td className="py-2">SABB / HSBC</td>
                <td className="py-2">50</td>
                <td className="py-2 font-mono">SAxx 5000</td>
              </tr>
              <tr>
                <td className="py-2">Saudi Awwal Bank (SAB)</td>
                <td className="py-2">15</td>
                <td className="py-2 font-mono">SAxx 1500</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-gray-500 text-xs mt-2">*Bank codes are the 5th and 6th characters of the IBAN. Note: SNB and Riyad Bank share the same code (10) — the difference is in the account number range.</p>
      </div>

      <h2>Types of Bank Transfers in Saudi Arabia &amp; Their Fees</h2>
      <p>Understanding the fee structure for different transfer types helps you choose the most cost-effective option for each transaction.</p>

      <div className="not-prose glass p-5 rounded-xl mb-6">
        <h3 className="text-white font-semibold mb-3">1. SARIE — Local Instant Transfer</h3>
        <p className="text-gray-300 text-sm mb-3">
          SARIE (Saudi Arabian Riyal Interbank Express) is the real-time gross settlement system operated by SAMA. It enables instant transfers between any two bank accounts within Saudi Arabia, 24 hours a day, 7 days a week, 365 days a year.
        </p>
        <div className="bg-[#0A0E1A] p-4 rounded-lg text-gray-300 text-sm">
          <ul className="space-y-1">
            <li><CheckCircle className="h-3.5 w-3.5 text-desert-primary inline mr-1.5" /><strong className="text-white">Fees:</strong> Most banks offer free SARIE transfers for amounts up to 20,000-50,000 SAR per transaction. Some banks charge 1-5 SAR for larger amounts.</li>
            <li><CheckCircle className="h-3.5 w-3.5 text-desert-primary inline mr-1.5" /><strong className="text-white">Speed:</strong> Instant — funds are available in the recipient account within seconds.</li>
            <li><CheckCircle className="h-3.5 w-3.5 text-desert-primary inline mr-1.5" /><strong className="text-white">Limit:</strong> Varies by bank, typically 50,000-100,000 SAR per day for retail customers.</li>
            <li><CheckCircle className="h-3.5 w-3.5 text-desert-primary inline mr-1.5" /><strong className="text-white">Best for:</strong> Paying rent, sending money to family within KSA, paying bills, transferring between your own accounts at different banks.</li>
          </ul>
        </div>
      </div>

      <div className="not-prose glass p-5 rounded-xl mb-6">
        <h3 className="text-white font-semibold mb-3">2. Mada Transfers</h3>
        <p className="text-gray-300 text-sm mb-3">
          Mada is the national payment network in Saudi Arabia. While primarily used for point-of-sale and ATM transactions, Mada also facilitates certain types of transfers.
        </p>
        <div className="bg-[#0A0E1A] p-4 rounded-lg text-gray-300 text-sm">
          <ul className="space-y-1">
            <li><CheckCircle className="h-3.5 w-3.5 text-desert-primary inline mr-1.5" /><strong className="text-white">Fees:</strong> 0-5 SAR depending on the transaction type and bank.</li>
            <li><CheckCircle className="h-3.5 w-3.5 text-desert-primary inline mr-1.5" /><strong className="text-white">Best for:</strong> ATM withdrawals, point-of-sale purchases, online payments via Mada cards.</li>
          </ul>
        </div>
      </div>

      <div className="not-prose glass p-5 rounded-xl mb-6">
        <h3 className="text-white font-semibold mb-3">3. SWIFT — International Transfers</h3>
        <p className="text-gray-300 text-sm mb-3">
          SWIFT (Society for Worldwide Interbank Financial Telecommunication) is the global network for international money transfers. Sending money from Saudi Arabia abroad via SWIFT involves multiple banks and fees.
        </p>
        <div className="bg-[#0A0E1A] p-4 rounded-lg text-gray-300 text-sm">
          <ul className="space-y-1">
            <li><CheckCircle className="h-3.5 w-3.5 text-desert-primary inline mr-1.5" /><strong className="text-white">Sending Bank Fee:</strong> 75-150 SAR per transaction (varies by bank).</li>
            <li><CheckCircle className="h-3.5 w-3.5 text-desert-primary inline mr-1.5" /><strong className="text-white">Correspondent Bank Fees:</strong> 10-30 USD deducted from the transfer amount.</li>
            <li><CheckCircle className="h-3.5 w-3.5 text-desert-primary inline mr-1.5" /><strong className="text-white">Exchange Rate Margin:</strong> 2-3% above the mid-market rate.</li>
            <li><CheckCircle className="h-3.5 w-3.5 text-desert-primary inline mr-1.5" /><strong className="text-white">Receiving Bank Fee:</strong> Varies by destination bank and country.</li>
            <li><CheckCircle className="h-3.5 w-3.5 text-desert-primary inline mr-1.5" /><strong className="text-white">Speed:</strong> 1-5 business days depending on destination.</li>
          </ul>
        </div>
        <p className="text-gray-400 text-xs mt-2"><strong className="text-yellow-400">Example:</strong> Sending 5,000 SAR to India via SWIFT. Your bank charges 100 SAR sending fee. Correspondent banks deduct ~50 SAR equivalent. Exchange rate gives you ~3% less than market rate (~150 SAR equivalent). Total cost: ~300 SAR or 6% of the transfer amount.</p>
      </div>

      <div className="not-prose glass p-5 rounded-xl mb-6">
        <h3 className="text-white font-semibold mb-3">4. Digital Alternatives — Wise, Remitly &amp; More</h3>
        <p className="text-gray-300 text-sm mb-3">
          Digital money transfer services have become increasingly popular among expats in Saudi Arabia due to their lower fees and better exchange rates.
        </p>
        <div className="bg-[#0A0E1A] p-4 rounded-lg text-gray-300 text-sm">
          <ul className="space-y-1">
            <li><CheckCircle className="h-3.5 w-3.5 text-desert-primary inline mr-1.5" /><strong className="text-white">Wise (formerly TransferWise):</strong> 0.5-1.5% fee. Mid-market exchange rate. Transfers take 1-2 days.</li>
            <li><CheckCircle className="h-3.5 w-3.5 text-desert-primary inline mr-1.5" /><strong className="text-white">Remitly:</strong> Low fixed fees for transfers to Asia and Africa. Promotional first-transfer rates often have zero markup.</li>
            <li><CheckCircle className="h-3.5 w-3.5 text-desert-primary inline mr-1.5" /><strong className="text-white">Western Union:</strong> Widely available but fees can be high. Best for cash pickup options.</li>
            <li><CheckCircle className="h-3.5 w-3.5 text-desert-primary inline mr-1.5" /><strong className="text-white">CurrencyFair:</strong> Peer-to-peer model with competitive rates for popular corridors.</li>
          </ul>
        </div>
      </div>

      <h2>How to Find Your Own IBAN in Saudi Arabia</h2>

      <div className="not-prose glass p-5 rounded-xl mb-6">
        <div className="space-y-4">
          <div className="bg-[#0A0E1A] p-4 rounded-lg">
            <div className="flex items-start gap-3">
              <Smartphone className="h-5 w-5 text-desert-primary shrink-0 mt-0.5" />
              <div>
                <p className="text-white font-semibold mb-1">Mobile Banking App</p>
                <p className="text-gray-400 text-sm">This is the fastest way. Open your bank&apos;s mobile app, log in, and navigate to your account details or account summary screen. Your IBAN is typically displayed prominently. On Al Rajhi&apos;s app, tap on your account card; on SNB&apos;s app, go to Accounts &gt; Account Details.</p>
              </div>
            </div>
          </div>
          <div className="bg-[#0A0E1A] p-4 rounded-lg">
            <div className="flex items-start gap-3">
              <Globe className="h-5 w-5 text-desert-primary shrink-0 mt-0.5" />
              <div>
                <p className="text-white font-semibold mb-1">Online Banking Portal</p>
                <p className="text-gray-400 text-sm">Log in to your bank&apos;s internet banking service. Navigate to Account Information or Account Details. Your IBAN will be listed alongside your account number. You can usually copy it directly with a click.</p>
              </div>
            </div>
          </div>
          <div className="bg-[#0A0E1A] p-4 rounded-lg">
            <div className="flex items-start gap-3">
              <FileText className="h-5 w-5 text-desert-primary shrink-0 mt-0.5" />
              <div>
                <p className="text-white font-semibold mb-1">Bank Statement or Cheque Book</p>
                <p className="text-gray-400 text-sm">Your IBAN is printed on every bank statement and on each cheque in your cheque book. Look for a 24-character alphanumeric code starting with SA.</p>
              </div>
            </div>
          </div>
          <div className="bg-[#0A0E1A] p-4 rounded-lg">
            <div className="flex items-start gap-3">
              <Search className="h-5 w-5 text-desert-primary shrink-0 mt-0.5" />
              <div>
                <p className="text-white font-semibold mb-1">SAMA&apos;s IBAN Converter Tool</p>
                <p className="text-gray-400 text-sm">SAMA provides an official IBAN converter on its website. You can enter your bank code and account number to generate the corresponding IBAN. This is useful if you only have your old account number and need the IBAN format.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <h2>Real-Life IBAN Validation Examples</h2>

      <div className="not-prose glass p-5 rounded-xl mb-6">
        <h3 className="text-white font-semibold mb-3">Example 1: Valid Al Rajhi IBAN</h3>
        <p className="text-gray-300 text-sm mb-3">IBAN: <code className="text-desert-primary font-mono bg-[#0A0E1A] px-2 py-0.5 rounded">SA03 8000 0000 6080 1016 7519</code></p>
        <div className="bg-[#0A0E1A] p-4 rounded-lg text-gray-300 text-sm space-y-1.5 font-mono">
          <p>Country Code: SA ✓</p>
          <p>Length: 24 characters ✓</p>
          <p>Bank Code: 80 = Al Rajhi Bank ✓</p>
          <p>Check Digits (03): Mod 97 validation PASS ✓</p>
          <p className="text-desert-primary font-bold mt-1">Result: VALID IBAN</p>
        </div>
      </div>

      <div className="not-prose glass p-5 rounded-xl mb-6">
        <h3 className="text-white font-semibold mb-3">Example 2: Invalid SNB IBAN (Wrong Check Digit)</h3>
        <p className="text-gray-300 text-sm mb-3">IBAN: <code className="text-gray-400 font-mono bg-[#0A0E1A] px-2 py-0.5 rounded">SA99 1000 0000 1234 5678 9012</code></p>
        <div className="bg-[#0A0E1A] p-4 rounded-lg text-gray-300 text-sm space-y-1.5 font-mono">
          <p>Country Code: SA ✓</p>
          <p>Length: 24 characters ✓</p>
          <p>Bank Code: 10 = SNB ✓</p>
          <p>Check Digits (99): Mod 97 validation FAIL ✗</p>
          <p className="text-red-400 font-bold mt-1">Result: INVALID IBAN — Transaction will be rejected</p>
          <p className="text-gray-500 text-xs mt-1">Note: The check digit 99 was chosen arbitrarily; a real SNB IBAN would have correctly calculated check digits.</p>
        </div>
      </div>

      <h2>Common Mistakes When Sharing or Using IBAN</h2>
      <p>Even small errors in an IBAN can cause transfers to fail. Here are the most common mistakes to watch out for:</p>

      <div className="not-prose glass p-5 rounded-xl mb-6">
        <ul className="space-y-3 text-gray-300 text-sm">
          <li className="flex items-start gap-2"><AlertTriangle className="h-4 w-4 text-yellow-400 mt-0.5 shrink-0" /> <strong className="text-white">Confusing IBAN with Account Number:</strong> Your IBAN is not the same as your account number. The IBAN includes the account number but also adds country code, check digits, and bank code. Always provide the full IBAN, not the bare account number, for transfers.</li>
          <li className="flex items-start gap-2"><AlertTriangle className="h-4 w-4 text-yellow-400 mt-0.5 shrink-0" /> <strong className="text-white">Missing the &quot;SA&quot; Prefix:</strong> Some users accidentally omit the leading &quot;SA&quot; characters. Without the country code, the code is incomplete and will fail validation.</li>
          <li className="flex items-start gap-2"><AlertTriangle className="h-4 w-4 text-yellow-400 mt-0.5 shrink-0" /> <strong className="text-white">Adding Spaces Incorrectly:</strong> IBANs are often displayed in groups of 4 characters for readability (e.g., SA03 8000 0000 6080 1016 7519). When entering the IBAN into a transfer form, most systems accept the IBAN with or without spaces, but some require a continuous string. When in doubt, enter the full 24 characters without spaces.</li>
          <li className="flex items-start gap-2"><AlertTriangle className="h-4 w-4 text-yellow-400 mt-0.5 shrink-0" /> <strong className="text-white">Using Old Account Numbers:</strong> If you have a legacy account that predates the 2008 SAMA mandate, your old account number may not match your IBAN. Always confirm your current IBAN through your bank, not by converting an old account number manually.</li>
          <li className="flex items-start gap-2"><AlertTriangle className="h-4 w-4 text-yellow-400 mt-0.5 shrink-0" /> <strong className="text-white">Typo in Bank Code:</strong> Mixing up bank codes is common. Double-check that code 10 (SNB/Riyad) is not confused with code 50 (SABB) or 60 (Alinma).</li>
        </ul>
      </div>

      <h2>How to Use the Sauditoolhub IBAN Validator Tool</h2>
      <div className="not-prose glass p-6 rounded-xl mb-8">
        <div className="flex items-center gap-3 mb-4">
          <Calculator className="h-8 w-8 text-desert-primary" />
          <h3 className="text-white text-lg font-bold m-0">Sauditoolhub IBAN Validator</h3>
        </div>
        <p className="text-gray-300 mb-4">
          Our free IBAN Validator makes it simple to verify any Saudi IBAN before you initiate a transfer. Just paste the IBAN into the input field and click Validate. The tool instantly checks the length, country code, check digits using the modulo 97 algorithm, bank code, and format.
        </p>
        <ul className="space-y-2 text-gray-400 text-sm mb-4">
          <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-desert-primary" /> Instant validation of Saudi IBANs (24-character format)</li>
          <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-desert-primary" /> Identifies the bank name from the bank code</li>
          <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-desert-primary" /> Validates check digits using ISO 13616 modulo 97 algorithm</li>
          <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-desert-primary" /> Accepts IBAN with or without spaces</li>
          <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-desert-primary" /> Free, private, and no registration required</li>
        </ul>
        <Link href="/iban-validator" className="inline-flex items-center gap-2 rounded-xl bg-desert-primary px-8 py-3 text-sm font-bold text-white transition-all hover:bg-desert-primary-dim">
          <Calculator className="h-4 w-4" />
          Validate Your IBAN Now
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
        The Saudi IBAN system is a robust standard that ensures accurate and efficient routing of bank transfers within the Kingdom and internationally. By understanding how IBANs are structured, which bank codes correspond to each financial institution, and what fees apply to different transfer types, you can avoid costly mistakes and choose the best transfer method for your needs.
      </p>
      <p>
        Before sending any transfer — whether it is a local SARIE payment to your landlord or an international SWIFT transfer to family abroad — always validate the IBAN first. Use our{' '}
        <Link href="/iban-validator" className="text-desert-primary font-bold underline">IBAN Validator</Link>
        {' '}for a fast and reliable check. Then explore our{' '}
        <Link href="/sama-loan-calculator" className="text-desert-primary font-bold underline">SAMA Loan Calculator</Link>
        {' '}and{' '}
        <Link href="/zakat-calculator" className="text-desert-primary font-bold underline">Zakat Calculator</Link>
        {' '}for broader financial planning. Visit our{' '}
        <Link href="/blog" className="text-desert-primary font-bold underline">Blog</Link>
        {' '}for more guides on banking, finance, and life in Saudi Arabia.
      </p>

      <div className="not-prose glass p-6 rounded-xl mt-8 text-center">
        <Calculator className="h-10 w-10 text-desert-primary mx-auto mb-3" />
        <h3 className="text-white text-lg font-bold mb-2">Validate Your Saudi IBAN Instantly</h3>
        <p className="text-gray-400 text-sm mb-4">Free IBAN Validator — check digits, bank code, and format</p>
        <Link href="/iban-validator" className="inline-flex items-center gap-2 rounded-xl bg-desert-primary px-8 py-3 text-sm font-bold text-white transition-all hover:bg-desert-primary-dim">
          <Calculator className="h-4 w-4" />
          Validate IBAN Now
        </Link>
      </div>
    </article>
  )
}
function ArContent() {
  return (
    <article className="prose prose-invert max-w-none prose-headings:text-desert-primary prose-a:text-desert-primary prose-strong:text-white prose-li:text-gray-300" dir="rtl">
      <h1>الدليل الكامل للتحقق من الآيبان المصرفي وقواعد التحويل في السعودية 2026</h1>

      <div className="not-prose glass p-6 rounded-xl mb-8">
        <p className="text-gray-300 text-lg leading-relaxed">
          لا شيء أكثر إحباطاً من تحويل بنكي يفشل في اللحظة الأخيرة. تتحقق من اسم الحساب، تدخل المبلغ بعناية، وتضغط إرسال — فقط لتتلقى رسالة خطأ بعد ساعات تقول إن التحويل لم يتم. في تسع حالات من أصل عشرة، يكون السبب هو رقم آيبان غير صحيح.
        </p>
        <p className="text-gray-300 text-lg leading-relaxed mt-4">
          رقم الحساب المصرفي الدولي (IBAN) هو العمود الفقري للخدمات المصرفية الحديثة في السعودية. كل تحويل محلي عبر سريع، كل تحويل دولي عبر سويفت، كل صرف رواتب — جميعها تعتمد على هذا الرمز المكون من 24 حرفاً لتوجيه الأموال بدقة من حساب إلى آخر. خطأ مطبعي واحد في الآيبان قد يؤدي إلى رفض التحويل، تأخير المدفوعات، أو الأسوأ من ذلك، إرسال الأموال إلى حساب خاطئ.
        </p>
        <p className="text-gray-300 text-lg leading-relaxed mt-4">
          يغطي هذا الدليل كل ما تحتاج معرفته عن الآيبان السعودي: البنية وقواعد التحقق، قائمة كاملة بأكواد البنوك السعودية لعام 2026، إرشادات خطوة بخطوة للعثور على الآيبان الخاص بك، أمثلة عملية للتحقق، رسوم تحويل سريع وسويفت، والأخطاء الشائعة التي يجب تجنبها. استخدم{' '}
          <Link href="/iban-validator" className="text-desert-primary font-bold underline">
            مدقق الآيبان
          </Link>{' '}
          المجاني من Sauditoolhub للتحقق الفوري من أي آيبان سعودي.
        </p>
      </div>

      <h2>ما هو الآيبان السعودي؟</h2>
      <p>
        رقم الحساب المصرفي الدولي (IBAN) هو رمز أبجدي رقمي موحد يحدد حساباً مصرفياً عبر الحدود الدولية. تم تطويره من قبل المنظمة الدولية للتوحيد القياسي (ISO) بموجب ISO 13616 لتسهيل المدفوعات عبر الحدود وتقليل الأخطاء في توجيه المعاملات.
      </p>
      <p>
        في السعودية، أصدر البنك المركزي السعودي (ساما) أمراً باعتماد IBAN لجميع الحسابات المصرفية في مارس 2008. منذ ذلك الحين، تم تحويل كل حساب مصرفي في المملكة إلى صيغة IBAN، وأصبح IBAN هو معرف الحساب المطلوب لجميع التحويلات المحلية والدولية.
      </p>

      <div className="not-prose glass p-5 rounded-xl mb-6">
        <h3 className="text-desert-primary font-semibold mb-3">بنية الآيبان السعودي (24 حرفاً)</h3>
        <div className="bg-[#0A0E1A] p-4 rounded-lg text-gray-300 text-sm">
          <p><strong className="text-white">SA</strong> — رمز الدولة للسعودية. أول حرفين دائماً.</p>
          <p><strong className="text-white">03</strong> — رقمان للتدقيق يتم حسابهما باستخدام خوارزمية مودولو 97. يتحققان من صحة الآيبان بالكامل.</p>
          <p><strong className="text-white">80</strong> — رمز البنك. يحدد المؤسسة المالية. مثلاً 80 = مصرف الراجحي.</p>
          <p><strong className="text-white">000000608010167519</strong> — رقم حسابك ممتلئاً بالأصفار إلى 18 رقماً.</p>
        </div>
      </div>

      <h2>كيفية قراءة والتحقق من الآيبان السعودي (خطوة بخطوة)</h2>

      <div className="not-prose glass p-5 rounded-xl mb-6">
        <div className="space-y-4">
          <div className="bg-[#0A0E1A] p-4 rounded-lg">
            <p className="text-white font-semibold mb-2">الخطوة 1: التحقق من الطول</p>
            <p className="text-gray-300 text-sm">الآيبان السعودي الصحيح يتكون من 24 حرفاً بالضبط.</p>
          </div>
          <div className="bg-[#0A0E1A] p-4 rounded-lg">
            <p className="text-white font-semibold mb-2">الخطوة 2: التحقق من رمز الدولة</p>
            <p className="text-gray-300 text-sm">أول حرفين يجب أن يكونا "SA" (أحرف كبيرة).</p>
          </div>
          <div className="bg-[#0A0E1A] p-4 rounded-lg">
            <p className="text-white font-semibold mb-2">الخطوة 3: التحقق من أرقام التدقيق</p>
            <p className="text-gray-300 text-sm">يتم حساب رقمي التدقيق باستخدام خوارزمية ISO 13616 مودولو 97. انقل أول 4 أحرف إلى النهاية، حول الحروف إلى أرقام، واحسب الباقي بعد القسمة على 97. النتيجة يجب أن تساوي 1.</p>
          </div>
          <div className="bg-[#0A0E1A] p-4 rounded-lg">
            <p className="text-white font-semibold mb-2">الخطوة 4: تأكيد رمز البنك</p>
            <p className="text-gray-300 text-sm">الحرفان 5-6 يمثلان رمز البنك. تحقق من مطابقته للبنك المقصود.</p>
          </div>
          <div className="bg-[#0A0E1A] p-4 rounded-lg">
            <p className="text-white font-semibold mb-2">الخطوة 5: استخدام مدقق IBAN من Sauditoolhub</p>
            <p className="text-gray-300 text-sm">استخدم{' '}<Link href="/iban-validator" className="text-desert-primary underline">مدقق IBAN المجاني</Link> للتحقق الفوري.</p>
          </div>
        </div>
      </div>

      <h2>البنوك السعودية الرئيسية وأكواد IBAN (قائمة 2026)</h2>

      <div className="not-prose glass p-5 rounded-xl mb-6">
        <div className="bg-[#0A0E1A] p-4 rounded-lg text-gray-300 text-sm">
          <table className="w-full">
            <thead>
              <tr className="text-white border-b border-gray-700">
                <th className="text-right py-2">اسم البنك</th>
                <th className="text-right py-2">رمز البنك</th>
                <th className="text-right py-2">بادئة IBAN</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-gray-700/50">
                <td className="py-2">مصرف الراجحي</td>
                <td className="py-2">80</td>
                <td className="py-2 font-mono">SAxx 8000</td>
              </tr>
              <tr className="border-b border-gray-700/50">
                <td className="py-2">البنك الأهلي السعودي (SNB)</td>
                <td className="py-2">10</td>
                <td className="py-2 font-mono">SAxx 1000</td>
              </tr>
              <tr className="border-b border-gray-700/50">
                <td className="py-2">بنك الرياض</td>
                <td className="py-2">10</td>
                <td className="py-2 font-mono">SAxx 1000</td>
              </tr>
              <tr className="border-b border-gray-700/50">
                <td className="py-2">بنك البلاد</td>
                <td className="py-2">60</td>
                <td className="py-2 font-mono">SAxx 6000</td>
              </tr>
              <tr className="border-b border-gray-700/50">
                <td className="py-2">بنك الجزيرة</td>
                <td className="py-2">40</td>
                <td className="py-2 font-mono">SAxx 4000</td>
              </tr>
              <tr className="border-b border-gray-700/50">
                <td className="py-2">البنك العربي الوطني</td>
                <td className="py-2">20</td>
                <td className="py-2 font-mono">SAxx 2000</td>
              </tr>
              <tr className="border-b border-gray-700/50">
                <td className="py-2">ساب / HSBC</td>
                <td className="py-2">50</td>
                <td className="py-2 font-mono">SAxx 5000</td>
              </tr>
              <tr>
                <td className="py-2">البنك السعودي الأول (SAB)</td>
                <td className="py-2">15</td>
                <td className="py-2 font-mono">SAxx 1500</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <h2>أنواع التحويلات المصرفية في السعودية ورسومها</h2>

      <div className="not-prose glass p-5 rounded-xl mb-6">
        <h3 className="text-white font-semibold mb-3">1. تحويل سريع (SARIE)</h3>
        <p className="text-gray-300 text-sm mb-3">
          نظام التسوية الإجمالية اللحظية الذي يديره البنك المركزي السعودي. يتيح تحويلات فورية بين أي حسابين مصرفيين داخل المملكة، 24 ساعة طوال أيام الأسبوع.
        </p>
        <div className="bg-[#0A0E1A] p-4 rounded-lg text-gray-300 text-sm">
          <ul className="space-y-1">
            <li><CheckCircle className="h-3.5 w-3.5 text-desert-primary inline ml-1.5" /><strong className="text-white">الرسوم:</strong> معظم البنوك تقدم تحويلات SARIE مجانية للمبالغ حتى 20,000-50,000 ريال. بعض البنوك تفرض 1-5 ريال للمبالغ الأكبر.</li>
            <li><CheckCircle className="h-3.5 w-3.5 text-desert-primary inline ml-1.5" /><strong className="text-white">السرعة:</strong> فورية — الأموال متاحة خلال ثوانٍ.</li>
            <li><CheckCircle className="h-3.5 w-3.5 text-desert-primary inline ml-1.5" /><strong className="text-white">الحد الأقصى:</strong> يختلف حسب البنك، عادة 50,000-100,000 ريال يومياً.</li>
          </ul>
        </div>
      </div>

      <div className="not-prose glass p-5 rounded-xl mb-6">
        <h3 className="text-white font-semibold mb-3">2. تحويل سويفت (SWIFT) — دولي</h3>
        <div className="bg-[#0A0E1A] p-4 rounded-lg text-gray-300 text-sm">
          <ul className="space-y-1">
            <li><strong className="text-white">رسوم البنك المرسل:</strong> 75-150 ريال لكل معاملة.</li>
            <li><strong className="text-white">رسوم البنوك المراسلة:</strong> 10-30 دولار تخصم من المبلغ.</li>
            <li><strong className="text-white">هامش سعر الصرف:</strong> 2-3% فوق سعر السوق.</li>
            <li><strong className="text-white">السرعة:</strong> 1-5 أيام عمل.</li>
          </ul>
        </div>
      </div>

      <div className="not-prose glass p-5 rounded-xl mb-6">
        <h3 className="text-white font-semibold mb-3">3. البدائل الرقمية — Wise، Remitly وغيرها</h3>
        <div className="bg-[#0A0E1A] p-4 rounded-lg text-gray-300 text-sm">
          <ul className="space-y-1">
            <li><strong className="text-white">Wise:</strong> رسوم 0.5-1.5%. سعر صرف السوق. 1-2 يوم.</li>
            <li><strong className="text-white">Remitly:</strong> رسوم ثابتة منخفضة لآسيا وأفريقيا.</li>
            <li><strong className="text-white">Western Union:</strong> متوفر على نطاق واسع لكن الرسوم مرتفعة.</li>
          </ul>
        </div>
      </div>

      <h2>كيفية العثور على الآيبان الخاص بك في السعودية</h2>

      <div className="not-prose glass p-5 rounded-xl mb-6">
        <div className="space-y-4">
          <div className="bg-[#0A0E1A] p-4 rounded-lg">
            <p className="text-white font-semibold mb-1">تطبيق البنك</p>
            <p className="text-gray-400 text-sm">أسرع طريقة. افتح تطبيق البنك، سجل الدخول، واذهب إلى تفاصيل الحساب. يظهر IBAN عادةً في الشاشة الرئيسية.</p>
          </div>
          <div className="bg-[#0A0E1A] p-4 rounded-lg">
            <p className="text-white font-semibold mb-1">الخدمات المصرفية عبر الإنترنت</p>
            <p className="text-gray-400 text-sm">سجل الدخول إلى الخدمات المصرفية عبر الإنترنت. اذهب إلى معلومات الحساب.</p>
          </div>
          <div className="bg-[#0A0E1A] p-4 rounded-lg">
            <p className="text-white font-semibold mb-1">كشف الحساب أو دفتر الشيكات</p>
            <p className="text-gray-400 text-sm">الآيبان مطبوع على كل كشف حساب وكل شيك.</p>
          </div>
          <div className="bg-[#0A0E1A] p-4 rounded-lg">
            <p className="text-white font-semibold mb-1">أداة تحويل IBAN من ساما</p>
            <p className="text-gray-400 text-sm">توفر ساما أداة رسمية لتحويل رقم الحساب إلى IBAN على موقعها.</p>
          </div>
        </div>
      </div>

      <h2>أمثلة عملية للتحقق من IBAN</h2>

      <div className="not-prose glass p-5 rounded-xl mb-6">
        <h3 className="text-white font-semibold mb-3">مثال 1: آيبان الراجحي صحيح</h3>
        <p className="text-gray-300 text-sm mb-3">IBAN: <code className="text-desert-primary font-mono bg-[#0A0E1A] px-2 py-0.5 rounded">SA03 8000 0000 6080 1016 7519</code></p>
        <div className="bg-[#0A0E1A] p-4 rounded-lg text-gray-300 text-sm space-y-1.5 font-mono">
          <p>رمز الدولة: SA ✓</p>
          <p>الطول: 24 حرفاً ✓</p>
          <p>رمز البنك: 80 = الراجحي ✓</p>
          <p>أرقام التدقيق: ناجح ✓</p>
          <p className="text-desert-primary font-bold mt-1">النتيجة: IBAN صحيح</p>
        </div>
      </div>

      <div className="not-prose glass p-5 rounded-xl mb-6">
        <h3 className="text-white font-semibold mb-3">مثال 2: آيبان SNB غير صحيح (رقم تدقيق خاطئ)</h3>
        <p className="text-gray-300 text-sm mb-3">IBAN: <code className="text-gray-400 font-mono bg-[#0A0E1A] px-2 py-0.5 rounded">SA99 1000 0000 1234 5678 9012</code></p>
        <div className="bg-[#0A0E1A] p-4 rounded-lg text-gray-300 text-sm space-y-1.5 font-mono">
          <p>رمز الدولة: SA ✓</p>
          <p>الطول: 24 حرفاً ✓</p>
          <p>رمز البنك: 10 = SNB ✓</p>
          <p>أرقام التدقيق (99): فشل ✗</p>
          <p className="text-red-400 font-bold mt-1">النتيجة: IBAN غير صحيح — سيتم رفض المعاملة</p>
        </div>
      </div>

      <h2>الأخطاء الشائعة عند مشاركة أو استخدام IBAN</h2>

      <div className="not-prose glass p-5 rounded-xl mb-6">
        <ul className="space-y-3 text-gray-300 text-sm">
          <li className="flex items-start gap-2"><AlertTriangle className="h-4 w-4 text-yellow-400 mt-0.5 shrink-0" /> <strong className="text-white">الخلط بين IBAN ورقم الحساب:</strong> IBAN ليس رقم الحساب. استخدم IBAN الكامل دائماً للتحويلات.</li>
          <li className="flex items-start gap-2"><AlertTriangle className="h-4 w-4 text-yellow-400 mt-0.5 shrink-0" /> <strong className="text-white">حذف "SA":</strong> بعض المستخدمين يحذفون حرفي SA. بدون رمز الدولة، الكود غير مكتمل.</li>
          <li className="flex items-start gap-2"><AlertTriangle className="h-4 w-4 text-yellow-400 mt-0.5 shrink-0" /> <strong className="text-white">إضافة مسافات بطريقة خاطئة:</strong> عند الإدخال، أدخل الأحرف الـ 24 بدون مسافات.</li>
          <li className="flex items-start gap-2"><AlertTriangle className="h-4 w-4 text-yellow-400 mt-0.5 shrink-0" /> <strong className="text-white">استخدام أرقام حسابات قديمة:</strong> تأكد من IBAN الحالي عبر البنك.</li>
          <li className="flex items-start gap-2"><AlertTriangle className="h-4 w-4 text-yellow-400 mt-0.5 shrink-0" /> <strong className="text-white">خطأ في رمز البنك:</strong> لا تخلط بين 10 (SNB/الرياض) و 50 (ساب) أو 60 (البلاد).</li>
        </ul>
      </div>

      <h2>كيفية استخدام مدقق IBAN من Sauditoolhub</h2>
      <div className="not-prose glass p-6 rounded-xl mb-8">
        <div className="flex items-center gap-3 mb-4">
          <Calculator className="h-8 w-8 text-desert-primary" />
          <h3 className="text-white text-lg font-bold m-0">مدقق الآيبان من Sauditoolhub</h3>
        </div>
        <Link href="/iban-validator" className="inline-flex items-center gap-2 rounded-xl bg-desert-primary px-8 py-3 text-sm font-bold text-white transition-all hover:bg-desert-primary-dim">
          <Calculator className="h-4 w-4" />
          تحقق من IBAN الآن
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
        نظام IBAN السعودي هو معيار قوي يضمن التوجيه الدقيق للتحويلات المصرفية. قبل إرسال أي تحويل، تحقق من IBAN أولاً باستخدام{' '}
        <Link href="/iban-validator" className="text-desert-primary font-bold underline">مدقق IBAN</Link>
        . استكشف أيضاً{' '}
        <Link href="/sama-loan-calculator" className="text-desert-primary font-bold underline">حاسبة ساما للقروض</Link>
        {' '}و{' '}
        <Link href="/zakat-calculator" className="text-desert-primary font-bold underline">حاسبة الزكاة</Link>
        . زوروا{' '}
        <Link href="/blog" className="text-desert-primary font-bold underline">المدونة</Link> لمزيد من الأدلة.
      </p>

      <div className="not-prose glass p-6 rounded-xl mt-8 text-center">
        <Calculator className="h-10 w-10 text-desert-primary mx-auto mb-3" />
        <h3 className="text-white text-lg font-bold mb-2">تحقق من IBAN السعودي فوراً</h3>
        <p className="text-gray-400 text-sm mb-4">مدقق IBAN مجاني — أرقام التدقيق، رمز البنك، والصيغة</p>
        <Link href="/iban-validator" className="inline-flex items-center gap-2 rounded-xl bg-desert-primary px-8 py-3 text-sm font-bold text-white transition-all hover:bg-desert-primary-dim">
          <Calculator className="h-4 w-4" />
          تحقق الآن
        </Link>
      </div>
    </article>
  )
}

function UrContent() {
  return (
    <article className="prose prose-invert max-w-none prose-headings:text-desert-primary prose-a:text-desert-primary prose-strong:text-white prose-li:text-gray-300" dir="rtl">
      <h1>سعودی بینک ٹرانسفر اور آئی بی اے نمبر کی تصدیق کا مکمل گائیڈ 2026</h1>

      <div className="not-prose glass p-6 rounded-xl mb-8">
        <p className="text-gray-300 text-lg leading-relaxed">
          بینک ٹرانسفر کا آخری لمحے میں ناکام ہونا بہت مایوس کن ہوتا ہے۔ آپ اکاؤنٹ کا نام چیک کرتے ہیں، رقم درست طریقے سے داخل کرتے ہیں، اور بھیجتے ہیں — صرف گھنٹوں بعد خرابی کا پیغام ملتا ہے کہ ٹرانسفر نہیں ہو سکا۔ دس میں سے نو بار، اس کی وجہ غلط IBAN نمبر ہوتا ہے۔
        </p>
        <p className="text-gray-300 text-lg leading-relaxed mt-4">
          بین الاقوامی بینک اکاؤنٹ نمبر (IBAN) سعودی عرب میں جدید بینکنگ کی ریڑھ کی ہڈی ہے۔ ہر مقامی SARIE ٹرانسفر، ہر بین الاقوامی SWIFT پیمنٹ، ہر تنخواہ کی ادائیگی — سب اس 24 حروفی کوڈ پر انحصار کرتے ہیں۔ IBAN میں ایک ٹائپو بھی ٹرانسفر کو مسترد کروا سکتا ہے۔
        </p>
        <p className="text-gray-300 text-lg leading-relaxed mt-4">
          یہ گائیڈ سعودی IBAN کے بارے میں ہر وہ چیز احاطہ کرتا ہے جو آپ کو جاننے کی ضرورت ہے: ساخت اور تصدیق کے اصول، 2026 کے لیے سعودی بینک کوڈز کی مکمل فہرست، IBAN تلاش کرنے کے اقدامات، حقیقی زندگی کی مثالیں، SARIE اور SWIFT ٹرانسفر فیس، اور عام غلطیاں۔ ہمارا مفت{' '}
          <Link href="/iban-validator" className="text-desert-primary font-bold underline">
            IBAN Validator
          </Link>{' '}
          استعمال کریں۔
        </p>
      </div>

      <h2>سعودی IBAN کیا ہے؟</h2>
      <p>
        IBAN ایک معیاری حروفی عددی کوڈ ہے جو بین الاقوامی سرحدوں کے پار بینک اکاؤنٹ کی منفرد شناخت کرتا ہے۔ اسے ISO 13616 کے تحت تیار کیا گیا۔
      </p>
      <p>
        سعودی عرب میں، سعودی مرکزی بینک (SAMA) نے مارچ 2008 میں تمام بینک اکاؤنٹس کے لیے IBAN لازمی قرار دیا۔ اس کے بعد سے، مملکت میں ہر بینک اکاؤنٹ کو IBAN فارمیٹ میں تبدیل کر دیا گیا ہے۔
      </p>

      <div className="not-prose glass p-5 rounded-xl mb-6">
        <h3 className="text-desert-primary font-semibold mb-3">سعودی IBAN کی ساخت (24 حروف)</h3>
        <div className="bg-[#0A0E1A] p-4 rounded-lg text-gray-300 text-sm">
          <p><strong className="text-white">SA</strong> — سعودی عرب کا ملکی کوڈ۔ پہلے دو حروف۔</p>
          <p><strong className="text-white">03</strong> — دو چیک ڈیجٹ جو مودولو 97 الگورتھم سے حساب کیے جاتے ہیں۔</p>
          <p><strong className="text-white">80</strong> — بینک کوڈ۔ مثال: 80 = الراجی بینک۔</p>
          <p><strong className="text-white">000000608010167519</strong> — آپ کا اکاؤنٹ نمبر 18 ہندسوں پر مشتمل۔</p>
        </div>
      </div>

      <h2>سعودی IBAN کو مرحلہ وار پڑھنا اور تصدیق کرنا</h2>

      <div className="not-prose glass p-5 rounded-xl mb-6">
        <div className="space-y-4">
          <div className="bg-[#0A0E1A] p-4 rounded-lg">
            <p className="text-white font-semibold mb-2">مرحلہ 1: لمبائی چیک کریں</p>
            <p className="text-gray-300 text-sm">سعودی IBAN بالکل 24 حروف پر مشتمل ہوتا ہے۔</p>
          </div>
          <div className="bg-[#0A0E1A] p-4 rounded-lg">
            <p className="text-white font-semibold mb-2">مرحلہ 2: ملکی کوڈ کی تصدیق کریں</p>
            <p className="text-gray-300 text-sm">پہلے دو حروف "SA" ہونے چاہئیں۔</p>
          </div>
          <div className="bg-[#0A0E1A] p-4 rounded-lg">
            <p className="text-white font-semibold mb-2">مرحلہ 3: چیک ڈیجٹ کی تصدیق کریں</p>
            <p className="text-gray-300 text-sm">ISO 13616 مودولو 97 الگورتھم استعمال کریں۔ نتیجہ 1 ہونا چاہیے۔</p>
          </div>
          <div className="bg-[#0A0E1A] p-4 rounded-lg">
            <p className="text-white font-semibold mb-2">مرحلہ 4: بینک کوڈ کی تصدیق کریں</p>
            <p className="text-gray-300 text-sm">حروف 5-6 بینک کوڈ ہیں۔ میچ کریں۔</p>
          </div>
          <div className="bg-[#0A0E1A] p-4 rounded-lg">
            <p className="text-white font-semibold mb-2">مرحلہ 5: Sauditoolhub IBAN Validator استعمال کریں</p>
            <p className="text-gray-300 text-sm">فوری تصدیق کے لیے ہمارا{' '}<Link href="/iban-validator" className="text-desert-primary underline">IBAN Validator</Link> استعمال کریں۔</p>
          </div>
        </div>
      </div>

      <h2>بڑے سعودی بینک اور ان کے IBAN کوڈز (2026 کی فہرست)</h2>

      <div className="not-prose glass p-5 rounded-xl mb-6">
        <div className="bg-[#0A0E1A] p-4 rounded-lg text-gray-300 text-sm">
          <table className="w-full">
            <thead>
              <tr className="text-white border-b border-gray-700">
                <th className="text-right py-2">بینک کا نام</th>
                <th className="text-right py-2">بینک کوڈ</th>
                <th className="text-right py-2">IBAN کا آغاز</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-gray-700/50">
                <td className="py-2">الرجی بینک</td>
                <td className="py-2">80</td>
                <td className="py-2 font-mono">SAxx 8000</td>
              </tr>
              <tr className="border-b border-gray-700/50">
                <td className="py-2">سعودی نیشنل بینک (SNB)</td>
                <td className="py-2">10</td>
                <td className="py-2 font-mono">SAxx 1000</td>
              </tr>
              <tr className="border-b border-gray-700/50">
                <td className="py-2">الرياض بینک</td>
                <td className="py-2">10</td>
                <td className="py-2 font-mono">SAxx 1000</td>
              </tr>
              <tr className="border-b border-gray-700/50">
                <td className="py-2">الانماء بینک</td>
                <td className="py-2">60</td>
                <td className="py-2 font-mono">SAxx 6000</td>
              </tr>
              <tr className="border-b border-gray-700/50">
                <td className="py-2">بنک الجزیرہ</td>
                <td className="py-2">40</td>
                <td className="py-2 font-mono">SAxx 4000</td>
              </tr>
              <tr className="border-b border-gray-700/50">
                <td className="py-2">عرب نیشنل بینک</td>
                <td className="py-2">20</td>
                <td className="py-2 font-mono">SAxx 2000</td>
              </tr>
              <tr className="border-b border-gray-700/50">
                <td className="py-2">SABB / HSBC</td>
                <td className="py-2">50</td>
                <td className="py-2 font-mono">SAxx 5000</td>
              </tr>
              <tr>
                <td className="py-2">سعودی اول بینک (SAB)</td>
                <td className="py-2">15</td>
                <td className="py-2 font-mono">SAxx 1500</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <h2>سعودی عرب میں بینک ٹرانسفر کی اقسام اور فیس</h2>

      <div className="not-prose glass p-5 rounded-xl mb-6">
        <h3 className="text-white font-semibold mb-3">1. SARIE — مقامی فوری ٹرانسفر</h3>
        <div className="bg-[#0A0E1A] p-4 rounded-lg text-gray-300 text-sm">
          <ul className="space-y-1">
            <li><strong className="text-white">فیس:</strong> زیادہ تر بینک 20,000-50,000 SAR تک مفت SARIE ٹرانسفر پیش کرتے ہیں۔</li>
            <li><strong className="text-white">رفتار:</strong> فوری — سیکنڈوں میں رقم دستیاب۔</li>
            <li><strong className="text-white">حد:</strong> عام طور پر 50,000-100,000 SAR یومیہ۔</li>
          </ul>
        </div>
      </div>

      <div className="not-prose glass p-5 rounded-xl mb-6">
        <h3 className="text-white font-semibold mb-3">2. SWIFT — بین الاقوامی ٹرانسفر</h3>
        <div className="bg-[#0A0E1A] p-4 rounded-lg text-gray-300 text-sm">
          <ul className="space-y-1">
            <li><strong className="text-white">بھیجنے والے بینک کی فیس:</strong> 75-150 SAR فی ٹرانزیکشن۔</li>
            <li><strong className="text-white">کریسپونڈنٹ بینک فیس:</strong> 10-30 USD۔</li>
            <li><strong className="text-white">شرح مارجن:</strong> 2-3%۔</li>
            <li><strong className="text-white">رفتار:</strong> 1-5 کاروباری دن۔</li>
          </ul>
        </div>
      </div>

      <h2>سعودی عرب میں اپنا IBAN کیسے معلوم کریں</h2>

      <div className="not-prose glass p-5 rounded-xl mb-6">
        <div className="space-y-4">
          <div className="bg-[#0A0E1A] p-4 rounded-lg">
            <p className="text-white font-semibold mb-1">موبائل بینکنگ ایپ</p>
            <p className="text-gray-400 text-sm">سب سے تیز طریقہ۔ بینک ایپ کھولیں اور اکاؤنٹ کی تفصیلات دیکھیں۔</p>
          </div>
          <div className="bg-[#0A0E1A] p-4 rounded-lg">
            <p className="text-white font-semibold mb-1">آن لائن بینکنگ</p>
            <p className="text-gray-400 text-sm">لاگ ان کریں اور اکاؤنٹ کی معلومات پر جائیں۔</p>
          </div>
          <div className="bg-[#0A0E1A] p-4 rounded-lg">
            <p className="text-white font-semibold mb-1">بینک سٹیٹمنٹ یا چیک بک</p>
            <p className="text-gray-400 text-sm">IBAN ہر سٹیٹمنٹ اور چیک پر چھپا ہوتا ہے۔</p>
          </div>
          <div className="bg-[#0A0E1A] p-4 rounded-lg">
            <p className="text-white font-semibold mb-1">SAMA کا IBAN کنورٹر ٹول</p>
            <p className="text-gray-400 text-sm">SAMA کی سرکاری ویب سائٹ پر IBAN کنورٹر دستیاب ہے۔</p>
          </div>
        </div>
      </div>

      <h2>عملی مثالیں</h2>

      <div className="not-prose glass p-5 rounded-xl mb-6">
        <h3 className="text-white font-semibold mb-3">مثال 1: الرجی بینک کا درست IBAN</h3>
        <p className="text-gray-300 text-sm mb-3">IBAN: <code className="text-desert-primary font-mono bg-[#0A0E1A] px-2 py-0.5 rounded">SA03 8000 0000 6080 1016 7519</code></p>
        <div className="bg-[#0A0E1A] p-4 rounded-lg text-gray-300 text-sm space-y-1.5 font-mono">
          <p>ملکی کوڈ: SA ✓</p>
          <p>لمبائی: 24 حروف ✓</p>
          <p>بینک کوڈ: 80 = الرجی ✓</p>
          <p>چیک ڈیجٹ: پاس ✓</p>
          <p className="text-desert-primary font-bold mt-1">نتیجہ: درست IBAN</p>
        </div>
      </div>

      <div className="not-prose glass p-5 rounded-xl mb-6">
        <h3 className="text-white font-semibold mb-3">مثال 2: غلط SNB IBAN (چیک ڈیجٹ غلط)</h3>
        <p className="text-gray-300 text-sm mb-3">IBAN: <code className="text-gray-400 font-mono bg-[#0A0E1A] px-2 py-0.5 rounded">SA99 1000 0000 1234 5678 9012</code></p>
        <div className="bg-[#0A0E1A] p-4 rounded-lg text-gray-300 text-sm space-y-1.5 font-mono">
          <p>چیک ڈیجٹ (99): فیل ✗</p>
          <p className="text-red-400 font-bold mt-1">نتیجہ: غلط IBAN — ٹرانزیکشن مسترد ہو گی</p>
        </div>
      </div>

      <h2>عام غلطیاں</h2>

      <div className="not-prose glass p-5 rounded-xl mb-6">
        <ul className="space-y-3 text-gray-300 text-sm">
          <li className="flex items-start gap-2"><AlertTriangle className="h-4 w-4 text-yellow-400 mt-0.5 shrink-0" /> <strong className="text-white">IBAN اور اکاؤنٹ نمبر میں فرق نہ سمجھنا:</strong> IBAN میں اکاؤنٹ نمبر کے علاوہ ملکی کوڈ اور چیک ڈیجٹ بھی شامل ہیں۔</li>
          <li className="flex items-start gap-2"><AlertTriangle className="h-4 w-4 text-yellow-400 mt-0.5 shrink-0" /> <strong className="text-white">SA کا حذف کرنا:</strong> SA کے بغیر IBAN نامکمل ہے۔</li>
          <li className="flex items-start gap-2"><AlertTriangle className="h-4 w-4 text-yellow-400 mt-0.5 shrink-0" /> <strong className="text-white">بینک کوڈ میں غلطی:</strong> 10 (SNB/الرياض) کو 50 (SABB) یا 60 (الانماء) سے نہ ملائیں۔</li>
        </ul>
      </div>

      <h2>Sauditoolhub IBAN Validator کا استعمال</h2>
      <div className="not-prose glass p-6 rounded-xl mb-8">
        <Link href="/iban-validator" className="inline-flex items-center gap-2 rounded-xl bg-desert-primary px-8 py-3 text-sm font-bold text-white transition-all hover:bg-desert-primary-dim">
          <Calculator className="h-4 w-4" />
          IBAN کی تصدیق کریں
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
        سعودی IBAN سسٹم ایک مضبوط معیار ہے جو درست ٹرانسفر کو یقینی بناتا ہے۔ کوئی بھی ٹرانسفر بھیجنے سے پہلے ہمارا{' '}
        <Link href="/iban-validator" className="text-desert-primary font-bold underline">IBAN Validator</Link>
        {' '}استعمال کریں۔{' '}
        <Link href="/sama-loan-calculator" className="text-desert-primary font-bold underline">SAMA Loan Calculator</Link>
        {' '}اور{' '}
        <Link href="/zakat-calculator" className="text-desert-primary font-bold underline">Zakat Calculator</Link>
        {' '}بھی دیکھیں۔{' '}
        <Link href="/blog" className="text-desert-primary font-bold underline">بلاگ</Link> پر مزید۔
      </p>

      <div className="not-prose glass p-6 rounded-xl mt-8 text-center">
        <Calculator className="h-10 w-10 text-desert-primary mx-auto mb-3" />
        <h3 className="text-white text-lg font-bold mb-2">اپنے IBAN کی فوری تصدیق کریں</h3>
        <p className="text-gray-400 text-sm mb-4">مفت IBAN Validator</p>
        <Link href="/iban-validator" className="inline-flex items-center gap-2 rounded-xl bg-desert-primary px-8 py-3 text-sm font-bold text-white transition-all hover:bg-desert-primary-dim">
          <Calculator className="h-4 w-4" />
          تصدیق کریں
        </Link>
      </div>
    </article>
  )
}

function TlContent() {
  return (
    <article className="prose prose-invert max-w-none prose-headings:text-desert-primary prose-a:text-desert-primary prose-strong:text-white prose-li:text-gray-300">
      <h1>Kumpletong Gabay sa Saudi IBAN Validation at Bank Transfer Rules 2026</h1>

      <div className="not-prose glass p-6 rounded-xl mb-8">
        <p className="text-gray-300 text-lg leading-relaxed">
          Walang mas nakakainis kaysa sa isang bank transfer na biglang nabigo sa huling sandali. Siyam sa sampung beses, ang dahilan ay isang mali o invalid na IBAN number.
        </p>
        <p className="text-gray-300 text-lg leading-relaxed mt-4">
          Ang International Bank Account Number (IBAN) ay ang gulugod ng modernong banking sa Saudi Arabia. Bawat lokal na SARIE transfer, bawat international SWIFT payment, bawat salary disbursement — lahat ay umaasa sa 24-character code na ito.
        </p>
        <p className="text-gray-300 text-lg leading-relaxed mt-4">
              Saklaw ng gabay na ito ang lahat ng kailangan mong malaman tungkol sa Saudi IBAN: ang istraktura at validation rules, kumpletong listahan ng Saudi bank codes para 2026, step-by-step na paghahanap ng iyong IBAN, mga halimbawa, transfer fees, at karaniwang pagkakamali. Gamitin ang aming libreng{' '}
          <Link href="/iban-validator" className="text-desert-primary font-bold underline">
            IBAN Validator
          </Link>.
        </p>
      </div>

      <h2>Ano ang Saudi IBAN?</h2>
      <p>
        Ang IBAN ay isang standardized na alphanumeric code na nagpapakilala ng bank account sa buong mundo. Sa Saudi Arabia, ipinatupad ng SAMA ang paggamit ng IBAN para sa lahat ng bank account noong Marso 2008.
      </p>

      <div className="not-prose glass p-5 rounded-xl mb-6">
        <h3 className="text-desert-primary font-semibold mb-3">Saudi IBAN Structure (24 Characters)</h3>
        <div className="bg-[#0A0E1A] p-4 rounded-lg text-gray-300 text-sm">
          <p><strong className="text-white">SA</strong> — Country code para sa Saudi Arabia.</p>
          <p><strong className="text-white">03</strong> — Dalawang check digits gamit ang modulo 97 algorithm.</p>
          <p><strong className="text-white">80</strong> — Bank code. Halimbawa: 80 = Al Rajhi Bank.</p>
          <p><strong className="text-white">000000608010167519</strong> — Iyong account number na may 18 digit.</p>
        </div>
      </div>

      <h2>Paano Basahin at I-validate ang Saudi IBAN</h2>

      <div className="not-prose glass p-5 rounded-xl mb-6">
        <div className="space-y-4">
          <div className="bg-[#0A0E1A] p-4 rounded-lg">
            <p className="text-white font-semibold mb-2">Step 1: Suriin ang Haba</p>
            <p className="text-gray-300 text-sm">Ang valid na Saudi IBAN ay eksaktong 24 na character.</p>
          </div>
          <div className="bg-[#0A0E1A] p-4 rounded-lg">
            <p className="text-white font-semibold mb-2">Step 2: I-verify ang Country Code</p>
            <p className="text-gray-300 text-sm">Ang unang dalawang character ay dapat na "SA".</p>
          </div>
          <div className="bg-[#0A0E1A] p-4 rounded-lg">
            <p className="text-white font-semibold mb-2">Step 3: I-validate ang Check Digits</p>
            <p className="text-gray-300 text-sm">Gamitin ang ISO 13616 modulo 97 algorithm. Ang resulta ay dapat 1.</p>
          </div>
          <div className="bg-[#0A0E1A] p-4 rounded-lg">
            <p className="text-white font-semibold mb-2">Step 4: Kumpirmahin ang Bank Code</p>
            <p className="text-gray-300 text-sm">Ang character 5-6 ay bank code. Tiyaking tugma ito sa tamang bangko.</p>
          </div>
          <div className="bg-[#0A0E1A] p-4 rounded-lg">
            <p className="text-white font-semibold mb-2">Step 5: Gamitin ang IBAN Validator</p>
            <p className="text-gray-300 text-sm">Gamitin ang{' '}<Link href="/iban-validator" className="text-desert-primary underline">libreng IBAN Validator</Link> namin para sa instant validation.</p>
          </div>
        </div>
      </div>

      <h2>Mga Pangunahing Saudi Bank at Kanilang IBAN Codes (2026)</h2>

      <div className="not-prose glass p-5 rounded-xl mb-6">
        <div className="bg-[#0A0E1A] p-4 rounded-lg text-gray-300 text-sm">
          <table className="w-full">
            <thead>
              <tr className="text-white border-b border-gray-700">
                <th className="text-left py-2">Pangalan ng Bangko</th>
                <th className="text-left py-2">Bank Code</th>
                <th className="text-left py-2">IBAN Prefix</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-gray-700/50">
                <td className="py-2">Al Rajhi Bank</td>
                <td className="py-2">80</td>
                <td className="py-2 font-mono">SAxx 8000</td>
              </tr>
              <tr className="border-b border-gray-700/50">
                <td className="py-2">Saudi National Bank (SNB)</td>
                <td className="py-2">10</td>
                <td className="py-2 font-mono">SAxx 1000</td>
              </tr>
              <tr className="border-b border-gray-700/50">
                <td className="py-2">Riyad Bank</td>
                <td className="py-2">10</td>
                <td className="py-2 font-mono">SAxx 1000</td>
              </tr>
              <tr className="border-b border-gray-700/50">
                <td className="py-2">Alinma Bank</td>
                <td className="py-2">60</td>
                <td className="py-2 font-mono">SAxx 6000</td>
              </tr>
              <tr className="border-b border-gray-700/50">
                <td className="py-2">Bank AlJazira</td>
                <td className="py-2">40</td>
                <td className="py-2 font-mono">SAxx 4000</td>
              </tr>
              <tr className="border-b border-gray-700/50">
                <td className="py-2">Arab National Bank</td>
                <td className="py-2">20</td>
                <td className="py-2 font-mono">SAxx 2000</td>
              </tr>
              <tr className="border-b border-gray-700/50">
                <td className="py-2">SABB / HSBC</td>
                <td className="py-2">50</td>
                <td className="py-2 font-mono">SAxx 5000</td>
              </tr>
              <tr>
                <td className="py-2">Saudi Awwal Bank (SAB)</td>
                <td className="py-2">15</td>
                <td className="py-2 font-mono">SAxx 1500</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <h2>Mga Uri ng Bank Transfer at Kanilang Fees</h2>

      <div className="not-prose glass p-5 rounded-xl mb-6">
        <h3 className="text-white font-semibold mb-3">1. SARIE — Local Instant Transfer</h3>
        <div className="bg-[#0A0E1A] p-4 rounded-lg text-gray-300 text-sm">
          <ul className="space-y-1">
            <li><strong className="text-white">Fees:</strong> Karamihan ng bangko ay nag-aalok ng libreng SARIE transfers hanggang 20,000-50,000 SAR.</li>
            <li><strong className="text-white">Bilis:</strong> Instant — segundo lang.</li>
            <li><strong className="text-white">Limit:</strong> Karaniwang 50,000-100,000 SAR kada araw.</li>
          </ul>
        </div>
      </div>

      <div className="not-prose glass p-5 rounded-xl mb-6">
        <h3 className="text-white font-semibold mb-3">2. SWIFT — International Transfer</h3>
        <div className="bg-[#0A0E1A] p-4 rounded-lg text-gray-300 text-sm">
          <ul className="space-y-1">
            <li><strong className="text-white">Bank Fee:</strong> 75-150 SAR bawat transaksyon.</li>
            <li><strong className="text-white">Correspondent Bank Fee:</strong> 10-30 USD.</li>
            <li><strong className="text-white">Exchange Rate Margin:</strong> 2-3%.</li>
            <li><strong className="text-white">Bilis:</strong> 1-5 araw ng negosyo.</li>
          </ul>
        </div>
      </div>

      <h2>Paano Hanapin ang Iyong IBAN</h2>

      <div className="not-prose glass p-5 rounded-xl mb-6">
        <div className="space-y-4">
          <div className="bg-[#0A0E1A] p-4 rounded-lg">
            <p className="text-white font-semibold mb-1">Mobile Banking App</p>
            <p className="text-gray-400 text-sm">Buksan ang app ng iyong bangko at tingnan ang account details.</p>
          </div>
          <div className="bg-[#0A0E1A] p-4 rounded-lg">
            <p className="text-white font-semibold mb-1">Online Banking</p>
            <p className="text-gray-400 text-sm">Mag-log in at pumunta sa account information.</p>
          </div>
          <div className="bg-[#0A0E1A] p-4 rounded-lg">
            <p className="text-white font-semibold mb-1">Bank Statement o Cheque Book</p>
            <p className="text-gray-400 text-sm">Nakalimbag ang IBAN sa bawat statement at cheque.</p>
          </div>
          <div className="bg-[#0A0E1A] p-4 rounded-lg">
            <p className="text-white font-semibold mb-1">SAMA's IBAN Converter Tool</p>
            <p className="text-gray-400 text-sm">Gamitin ang opisyal na converter ng SAMA.</p>
          </div>
        </div>
      </div>

      <h2>Mga Halimbawa</h2>

      <div className="not-prose glass p-5 rounded-xl mb-6">
        <h3 className="text-white font-semibold mb-3">Example 1: Valid na Al Rajhi IBAN</h3>
        <p className="text-gray-300 text-sm mb-3">IBAN: <code className="text-desert-primary font-mono bg-[#0A0E1A] px-2 py-0.5 rounded">SA03 8000 0000 6080 1016 7519</code></p>
        <div className="bg-[#0A0E1A] p-4 rounded-lg text-gray-300 text-sm space-y-1.5 font-mono">
          <p>Country Code: SA ✓</p>
          <p>Haba: 24 characters ✓</p>
          <p>Bank Code: 80 = Al Rajhi ✓</p>
          <p>Check Digits: PASS ✓</p>
          <p className="text-desert-primary font-bold mt-1">Resulta: VALID IBAN</p>
        </div>
      </div>

      <h2>Mga Karaniwang Pagkakamali</h2>

      <div className="not-prose glass p-5 rounded-xl mb-6">
        <ul className="space-y-3 text-gray-300 text-sm">
          <li className="flex items-start gap-2"><AlertTriangle className="h-4 w-4 text-yellow-400 mt-0.5 shrink-0" /> <strong className="text-white">Pagkalito ng IBAN at Account Number:</strong> Ang IBAN ay hindi katulad ng account number.</li>
          <li className="flex items-start gap-2"><AlertTriangle className="h-4 w-4 text-yellow-400 mt-0.5 shrink-0" /> <strong className="text-white">Pagkawala ng "SA" Prefix:</strong> Kung wala ang country code, hindi kumpleto ang code.</li>
          <li className="flex items-start gap-2"><AlertTriangle className="h-4 w-4 text-yellow-400 mt-0.5 shrink-0" /> <strong className="text-white">Maling Bank Code:</strong> Huwag malito ang 10 (SNB/Riyad) sa 50 (SABB) o 60 (Alinma).</li>
        </ul>
      </div>

      <h2>Sauditoolhub IBAN Validator</h2>
      <div className="not-prose glass p-6 rounded-xl mb-8">
        <Link href="/iban-validator" className="inline-flex items-center gap-2 rounded-xl bg-desert-primary px-8 py-3 text-sm font-bold text-white transition-all hover:bg-desert-primary-dim">
          <Calculator className="h-4 w-4" />
          I-validate ang IBAN Ngayon
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
        Bago magpadala ng anumang transfer, i-validate muna ang IBAN gamit ang aming{' '}
        <Link href="/iban-validator" className="text-desert-primary font-bold underline">IBAN Validator</Link>
        . Tingnan din ang{' '}
        <Link href="/sama-loan-calculator" className="text-desert-primary font-bold underline">SAMA Loan Calculator</Link>
        {' '}at{' '}
        <Link href="/zakat-calculator" className="text-desert-primary font-bold underline">Zakat Calculator</Link>
        . Bisitahin ang aming{' '}
        <Link href="/blog" className="text-desert-primary font-bold underline">Blog</Link>.
      </p>

      <div className="not-prose glass p-6 rounded-xl mt-8 text-center">
        <Calculator className="h-10 w-10 text-desert-primary mx-auto mb-3" />
        <h3 className="text-white text-lg font-bold mb-2">I-validate ang Iyong Saudi IBAN Agad</h3>
        <p className="text-gray-400 text-sm mb-4">Libreng IBAN Validator</p>
        <Link href="/iban-validator" className="inline-flex items-center gap-2 rounded-xl bg-desert-primary px-8 py-3 text-sm font-bold text-white transition-all hover:bg-desert-primary-dim">
          <Calculator className="h-4 w-4" />
          I-validate Ngayon
        </Link>
      </div>
    </article>
  )
}

function BnContent() {
  return (
    <article className="prose prose-invert max-w-none prose-headings:text-desert-primary prose-a:text-desert-primary prose-strong:text-white prose-li:text-gray-300">
      <h1>সৌদি আইবিএন বৈধতা ও ব্যাংক ট্রান্সফার নিয়মের সম্পূর্ণ গাইড ২০২৬</h1>

      <div className="not-prose glass p-6 rounded-xl mb-8">
        <p className="text-gray-300 text-lg leading-relaxed">
          একটি ব্যাংক ট্রান্সফার শেষ মুহূর্তে ব্যর্থ হওয়ার চেয়ে হতাশাজনক আর কিছুই নয়। দশটির মধ্যে নয়বার, কারণটি হল একটি ভুল বা অবৈধ IBAN নম্বর।
        </p>
        <p className="text-gray-300 text-lg leading-relaxed mt-4">
          ইন্টারন্যাশনাল ব্যাংক অ্যাকাউন্ট নম্বর (IBAN) সৌদি আরবে আধুনিক ব্যাংকিংয়ের মেরুদণ্ড। প্রতিটি স্থানীয় SARIE ট্রান্সফার, প্রতিটি আন্তর্জাতিক SWIFT পেমেন্ট — সবকিছুই এই ২৪-ক্যারেক্টার কোডের উপর নির্ভর করে।
        </p>
        <p className="text-gray-300 text-lg leading-relaxed mt-4">
          এই গাইডটি সৌদি IBAN সম্পর্কে আপনার যা জানা দরকার তা সবই কভার করে: গঠন ও বৈধতার নিয়ম, ২০২৬-এর জন্য সম্পূর্ণ সৌদি ব্যাংক কোডের তালিকা, আপনার IBAN খোঁজার ধাপে ধাপে নির্দেশনা, বাস্তব উদাহরণ, ট্রান্সফার ফি এবং সাধারণ ভুল। আমাদের বিনামূল্যের{' '}
          <Link href="/iban-validator" className="text-desert-primary font-bold underline">
            IBAN Validator
          </Link>{' '}
          ব্যবহার করুন।
        </p>
      </div>

      <h2>সৌদি IBAN কী?</h2>
      <p>
        IBAN একটি প্রমিত বর্ণসংখ্যক কোড যা আন্তর্জাতিক সীমানা জুড়ে একটি ব্যাংক অ্যাকাউন্ট শনাক্ত করে। সৌদি আরবে, SAMA ২০০৮ সালের মার্চ মাসে সমস্ত ব্যাংক অ্যাকাউন্টের জন্য IBAN বাধ্যতামূলক করে।
      </p>

      <div className="not-prose glass p-5 rounded-xl mb-6">
        <h3 className="text-desert-primary font-semibold mb-3">সৌদি IBAN গঠন (২৪ ক্যারেক্টার)</h3>
        <div className="bg-[#0A0E1A] p-4 rounded-lg text-gray-300 text-sm">
          <p><strong className="text-white">SA</strong> — সৌদি আরবের দেশের কোড। প্রথম দুটি অক্ষর।</p>
          <p><strong className="text-white">03</strong> — দুটি চেক ডিজিট যা মডুলো ৯৭ অ্যালগরিদম ব্যবহার করে গণনা করা হয়।</p>
          <p><strong className="text-white">80</strong> — ব্যাংক কোড। উদাহরণ: 80 = আল রাজি ব্যাংক।</p>
          <p><strong className="text-white">000000608010167519</strong> — আপনার অ্যাকাউন্ট নম্বর ১৮ ডিজিটে।</p>
        </div>
      </div>

      <h2>সৌদি IBAN পড়া ও বৈধতা যাচাই (ধাপে ধাপে)</h2>

      <div className="not-prose glass p-5 rounded-xl mb-6">
        <div className="space-y-4">
          <div className="bg-[#0A0E1A] p-4 rounded-lg">
            <p className="text-white font-semibold mb-2">ধাপ ১: দৈর্ঘ্য পরীক্ষা করুন</p>
            <p className="text-gray-300 text-sm">একটি বৈধ সৌদি IBAN ঠিক ২৪ ক্যারেক্টার হয়।</p>
          </div>
          <div className="bg-[#0A0E1A] p-4 rounded-lg">
            <p className="text-white font-semibold mb-2">ধাপ ২: দেশের কোড যাচাই করুন</p>
            <p className="text-gray-300 text-sm">প্রথম দুটি অক্ষর "SA" হতে হবে।</p>
          </div>
          <div className="bg-[#0A0E1A] p-4 rounded-lg">
            <p className="text-white font-semibold mb-2">ধাপ ৩: চেক ডিজিট যাচাই করুন</p>
            <p className="text-gray-300 text-sm">ISO 13616 মডুলো ৯৭ অ্যালগরিদম ব্যবহার করুন। ফলাফল ১ হতে হবে।</p>
          </div>
          <div className="bg-[#0A0E1A] p-4 rounded-lg">
            <p className="text-white font-semibold mb-2">ধাপ ৪: ব্যাংক কোড নিশ্চিত করুন</p>
            <p className="text-gray-300 text-sm">ক্যারেক্টার ৫-৬ ব্যাংক কোড। সঠিক ব্যাংকের সাথে মিলিয়ে নিন।</p>
          </div>
          <div className="bg-[#0A0E1A] p-4 rounded-lg">
            <p className="text-white font-semibold mb-2">ধাপ ৫: IBAN Validator ব্যবহার করুন</p>
            <p className="text-gray-300 text-sm">তাৎক্ষণিক যাচাইয়ের জন্য আমাদের{' '}<Link href="/iban-validator" className="text-desert-primary underline">IBAN Validator</Link> ব্যবহার করুন।</p>
          </div>
        </div>
      </div>

      <h2>প্রধান সৌদি ব্যাংক ও তাদের IBAN কোড (২০২৬ তালিকা)</h2>

      <div className="not-prose glass p-5 rounded-xl mb-6">
        <div className="bg-[#0A0E1A] p-4 rounded-lg text-gray-300 text-sm">
          <table className="w-full">
            <thead>
              <tr className="text-white border-b border-gray-700">
                <th className="text-left py-2">ব্যাংকের নাম</th>
                <th className="text-left py-2">ব্যাংক কোড</th>
                <th className="text-left py-2">IBAN প্রিফিক্স</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-gray-700/50">
                <td className="py-2">আল রাজি ব্যাংক</td>
                <td className="py-2">80</td>
                <td className="py-2 font-mono">SAxx 8000</td>
              </tr>
              <tr className="border-b border-gray-700/50">
                <td className="py-2">সৌদি ন্যাশনাল ব্যাংক (SNB)</td>
                <td className="py-2">10</td>
                <td className="py-2 font-mono">SAxx 1000</td>
              </tr>
              <tr className="border-b border-gray-700/50">
                <td className="py-2">রিয়াদ ব্যাংক</td>
                <td className="py-2">10</td>
                <td className="py-2 font-mono">SAxx 1000</td>
              </tr>
              <tr className="border-b border-gray-700/50">
                <td className="py-2">আলইনমা ব্যাংক</td>
                <td className="py-2">60</td>
                <td className="py-2 font-mono">SAxx 6000</td>
              </tr>
              <tr className="border-b border-gray-700/50">
                <td className="py-2">ব্যাংক আলজাজিরা</td>
                <td className="py-2">40</td>
                <td className="py-2 font-mono">SAxx 4000</td>
              </tr>
              <tr className="border-b border-gray-700/50">
                <td className="py-2">আরব ন্যাশনাল ব্যাংক</td>
                <td className="py-2">20</td>
                <td className="py-2 font-mono">SAxx 2000</td>
              </tr>
              <tr className="border-b border-gray-700/50">
                <td className="py-2">SABB / HSBC</td>
                <td className="py-2">50</td>
                <td className="py-2 font-mono">SAxx 5000</td>
              </tr>
              <tr>
                <td className="py-2">সৌদি আউয়াল ব্যাংক (SAB)</td>
                <td className="py-2">15</td>
                <td className="py-2 font-mono">SAxx 1500</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <h2>ব্যাংক ট্রান্সফারের প্রকার ও ফি</h2>

      <div className="not-prose glass p-5 rounded-xl mb-6">
        <h3 className="text-white font-semibold mb-3">১. SARIE — স্থানীয় তাৎক্ষণিক ট্রান্সফার</h3>
        <div className="bg-[#0A0E1A] p-4 rounded-lg text-gray-300 text-sm">
          <ul className="space-y-1">
            <li><strong className="text-white">ফি:</strong> বেশিরভাগ ব্যাংক ২০,০০০-৫০,০০০ SAR পর্যন্ত বিনামূল্যে SARIE অফার করে।</li>
            <li><strong className="text-white">গতি:</strong> তাৎক্ষণিক — সেকেন্ডের মধ্যে।</li>
            <li><strong className="text-white">সীমা:</strong> সাধারণত ৫০,০০০-১,০০,০০০ SAR প্রতিদিন।</li>
          </ul>
        </div>
      </div>

      <div className="not-prose glass p-5 rounded-xl mb-6">
        <h3 className="text-white font-semibold mb-3">২. SWIFT — আন্তর্জাতিক ট্রান্সফার</h3>
        <div className="bg-[#0A0E1A] p-4 rounded-lg text-gray-300 text-sm">
          <ul className="space-y-1">
            <li><strong className="text-white">ব্যাংক ফি:</strong> ৭৫-১৫০ SAR প্রতি লেনদেন।</li>
            <li><strong className="text-white">করেসপন্ডেন্ট ব্যাংক ফি:</strong> ১০-৩০ USD।</li>
            <li><strong className="text-white">বিনিময় হার মার্জিন:</strong> ২-৩%।</li>
            <li><strong className="text-white">গতি:</strong> ১-৫ কার্যদিবস।</li>
          </ul>
        </div>
      </div>

      <h2>কীভাবে আপনার IBAN খুঁজে পাবেন</h2>

      <div className="not-prose glass p-5 rounded-xl mb-6">
        <div className="space-y-4">
          <div className="bg-[#0A0E1A] p-4 rounded-lg">
            <p className="text-white font-semibold mb-1">মোবাইল ব্যাংকিং অ্যাপ</p>
            <p className="text-gray-400 text-sm">ব্যাংকের অ্যাপ খুলুন এবং অ্যাকাউন্টের বিবরণ দেখুন।</p>
          </div>
          <div className="bg-[#0A0E1A] p-4 rounded-lg">
            <p className="text-white font-semibold mb-1">অনলাইন ব্যাংকিং</p>
            <p className="text-gray-400 text-sm">লগইন করে অ্যাকাউন্ট তথ্যে যান।</p>
          </div>
          <div className="bg-[#0A0E1A] p-4 rounded-lg">
            <p className="text-white font-semibold mb-1">ব্যাংক স্টেটমেন্ট বা চেক বই</p>
            <p className="text-gray-400 text-sm">প্রতি স্টেটমেন্ট ও চেকে IBAN ছাপা থাকে।</p>
          </div>
          <div className="bg-[#0A0E1A] p-4 rounded-lg">
            <p className="text-white font-semibold mb-1">SAMA-এর IBAN কনভার্টার টুল</p>
            <p className="text-gray-400 text-sm">SAMA-এর অফিসিয়াল ওয়েবসাইটে IBAN কনভার্টার ব্যবহার করুন।</p>
          </div>
        </div>
      </div>

      <h2>বাস্তব উদাহরণ</h2>

      <div className="not-prose glass p-5 rounded-xl mb-6">
        <h3 className="text-white font-semibold mb-3">উদাহরণ ১: বৈধ আল রাজি IBAN</h3>
        <p className="text-gray-300 text-sm mb-3">IBAN: <code className="text-desert-primary font-mono bg-[#0A0E1A] px-2 py-0.5 rounded">SA03 8000 0000 6080 1016 7519</code></p>
        <div className="bg-[#0A0E1A] p-4 rounded-lg text-gray-300 text-sm space-y-1.5 font-mono">
          <p>দেশের কোড: SA ✓</p>
          <p>দৈর্ঘ্য: ২৪ ক্যারেক্টার ✓</p>
          <p>ব্যাংক কোড: ৮০ = আল রাজি ✓</p>
          <p>চেক ডিজিট: পাস ✓</p>
          <p className="text-desert-primary font-bold mt-1">ফলাফল: বৈধ IBAN</p>
        </div>
      </div>

      <h2>সাধারণ ভুল</h2>

      <div className="not-prose glass p-5 rounded-xl mb-6">
        <ul className="space-y-3 text-gray-300 text-sm">
          <li className="flex items-start gap-2"><AlertTriangle className="h-4 w-4 text-yellow-400 mt-0.5 shrink-0" /> <strong className="text-white">IBAN ও অ্যাকাউন্ট নম্বর গুলিয়ে ফেলা:</strong> IBAN অ্যাকাউন্ট নম্বরের মতো নয়।</li>
          <li className="flex items-start gap-2"><AlertTriangle className="h-4 w-4 text-yellow-400 mt-0.5 shrink-0" /> <strong className="text-white">"SA" প্রিফিক্স বাদ দেওয়া:</strong> দেশের কোড ছাড়া কোড অসম্পূর্ণ।</li>
          <li className="flex items-start gap-2"><AlertTriangle className="h-4 w-4 text-yellow-400 mt-0.5 shrink-0" /> <strong className="text-white">ভুল ব্যাংক কোড:</strong> ১০ (SNB/রিয়াদ) কে ৫০ (SABB) বা ৬০ (আলইনমা) সাথে গুলিয়ে ফেলবেন না।</li>
        </ul>
      </div>

      <h2>Sauditoolhub IBAN Validator</h2>
      <div className="not-prose glass p-6 rounded-xl mb-8">
        <Link href="/iban-validator" className="inline-flex items-center gap-2 rounded-xl bg-desert-primary px-8 py-3 text-sm font-bold text-white transition-all hover:bg-desert-primary-dim">
          <Calculator className="h-4 w-4" />
          এখনই IBAN যাচাই করুন
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
        কোনো ট্রান্সফার পাঠানোর আগে আমাদের{' '}
        <Link href="/iban-validator" className="text-desert-primary font-bold underline">IBAN Validator</Link>
        {' '}দিয়ে IBAN যাচাই করুন।{' '}
        <Link href="/sama-loan-calculator" className="text-desert-primary font-bold underline">SAMA Loan Calculator</Link>
        {' '}এবং{' '}
        <Link href="/zakat-calculator" className="text-desert-primary font-bold underline">Zakat Calculator</Link>
        {' '}ও দেখুন। আমাদের{' '}
        <Link href="/blog" className="text-desert-primary font-bold underline">ব্লগ</Link> দেখুন।
      </p>

      <div className="not-prose glass p-6 rounded-xl mt-8 text-center">
        <Calculator className="h-10 w-10 text-desert-primary mx-auto mb-3" />
        <h3 className="text-white text-lg font-bold mb-2">তাৎক্ষণিকভাবে আপনার IBAN যাচাই করুন</h3>
        <p className="text-gray-400 text-sm mb-4">বিনামূল্যের IBAN Validator</p>
        <Link href="/iban-validator" className="inline-flex items-center gap-2 rounded-xl bg-desert-primary px-8 py-3 text-sm font-bold text-white transition-all hover:bg-desert-primary-dim">
          <Calculator className="h-4 w-4" />
          এখনই যাচাই করুন
        </Link>
      </div>
    </article>
  )
}

export default async function IbanGuidePage({ params }: Props) {
  const { locale } = await params
  const isAr = locale === 'ar'
  const isUr = locale === 'ur'
  const isTl = locale === 'tl'
  const isBn = locale === 'bn'
  const isDefault = locale === 'en'
  const pageUrl = isDefault ? `${baseUrl}/guide/iban-validator-banking-guide-saudi-arabia-2026` : `${baseUrl}/${locale}/guide/iban-validator-banking-guide-saudi-arabia-2026`

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
