import type { Metadata } from 'next'
import Link from 'next/link'
import { BreadcrumbJsonLd, FAQJsonLd, ArticleJsonLd } from '@/components/JsonLd'
import { Calculator, Users, FileCheck, CreditCard, AlertTriangle, ArrowRight } from 'lucide-react'

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
    ? 'الدليل الشامل لتأشيرة العائلة ورسوم التابعين في السعودية 2026 | Sauditoolhub'
    : isUr
    ? 'سعودی عرب میں فیملی ویزا اور انحصار کنندگان کی فیس کا مکمل گائیڈ 2026 | Sauditoolhub'
    : isTl
    ? 'Kumpletong Gabay sa Family Visa at Dependent Fees sa Saudi Arabia 2026 | Sauditoolhub'
    : isBn
    ? 'সৌদি আরবে ফ্যামিলি ভিসা ও ডিপেন্ডেন্ট ফি-র সম্পূর্ণ গাইড 2026 | Sauditoolhub'
    : 'Family Visa & Dependent Fee Calculator Saudi Arabia 2026 | Check Eligibility'

  const description = isAr
    ? 'دليل كامل لحساب تكاليف تأشيرة العائلة ورسوم التابعين في السعودية 2026. تعرف على رسوم الإقامة وتأشيرات الخروج والعودة.'
    : isUr
    ? 'سعودی عرب میں فیملی ویزا اور انحصار کنندگان کی فیس کے اخراجات کا مکمل 2026 گائیڈ۔ اقامہ فیس اور ایگزٹ/ری انٹری ویزا کے بارے میں جانیں۔'
    : isTl
    ? 'Kumpletong gabay sa pagkalkula ng family visa at dependent fees sa Saudi Arabia 2026. Alamin ang Iqama fees at Exit/Re-Entry visa costs.'
    : isBn
    ? 'সৌদি আরবে ফ্যামিলি ভিসা ও ডিপেন্ডেন্ট ফি গণনার সম্পূর্ণ গাইড 2026। ইকামা ফি ও এক্সিট/রি-এন্ট্রি ভিসা খরচ সম্পর্কে জানুন।'
    : 'Calculate your Saudi Family Visa dependent fees (SAR 400/mo) and check eligibility instantly. Updated 2026 rules for expats.'

  return {
    title,
    description,
    alternates: {
      canonical: isDefault ? `${baseUrl}/guide/family-visa-dependent-fee-calculator-saudi-arabia-2026` : `${baseUrl}/${locale}/guide/family-visa-dependent-fee-calculator-saudi-arabia-2026`,
      languages: {
        en: `${baseUrl}/guide/family-visa-dependent-fee-calculator-saudi-arabia-2026`,
        ar: `${baseUrl}/ar/guide/family-visa-dependent-fee-calculator-saudi-arabia-2026`,
        ur: `${baseUrl}/ur/guide/family-visa-dependent-fee-calculator-saudi-arabia-2026`,
        tl: `${baseUrl}/tl/guide/family-visa-dependent-fee-calculator-saudi-arabia-2026`,
        bn: `${baseUrl}/bn/guide/family-visa-dependent-fee-calculator-saudi-arabia-2026`,
      },
    },
    openGraph: {
      title,
      description,
      url: isDefault ? `${baseUrl}/guide/family-visa-dependent-fee-calculator-saudi-arabia-2026` : `${baseUrl}/${locale}/guide/family-visa-dependent-fee-calculator-saudi-arabia-2026`,
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
  headline: 'The Complete Guide to Family Visa & Dependent Fees in Saudi Arabia 2026',
  description: 'Learn how to calculate family visa costs and dependent fees in Saudi Arabia. We cover Iqama fees, Exit/Re-Entry visa costs, dependent levy, and common cost-saving strategies.',
  author: { '@type': 'Person', name: 'Sauditoolhub Team' },
  publisher: { '@type': 'Organization', name: 'Sauditoolhub', logo: { '@type': 'ImageObject', url: `${baseUrl}/logo.png` } },
  datePublished: '2026-01-01',
  dateModified: '2026-07-01',
}

const schemaAr = {
  ...articleSchemaEn,
  headline: 'الدليل الشامل لتأشيرة العائلة ورسوم التابعين في المملكة العربية السعودية 2026',
  description: 'تعرف على كيفية حساب تكاليف تأشيرة العائلة ورسوم التابعين في السعودية. نغطي رسوم الإقامة، تكلفة تأشيرات الخروج والعودة، والرسوم الشهرية للتابعين.',
}

const schemaUr = {
  ...articleSchemaEn,
  headline: 'سعودی عرب میں فیملی ویزا اور تابعین فیس کا مکمل گائیڈ 2026',
  description: 'سعودی عرب میں خاندانی ویزا اور تابعین فیس کے اخراجات کا حساب لگانا سیکھیں۔ اقامہ فیس، ایگزٹ/ری انٹری ویزا کے اخراجات، اور بچت کی حکمت عملی۔',
}

const schemaTl = {
  ...articleSchemaEn,
  headline: 'Kumpletong Gabay sa Family Visa at Dependent Fees sa Saudi Arabia 2026',
  description: 'Matuto kung paano kalkulahin ang mga gastos sa family visa at dependent fees sa Saudi Arabia. Sakop ang Iqama fees, Exit/Re-Entry visa costs, at mga paraan upang makatipid.',
}

const schemaBn = {
  ...articleSchemaEn,
  headline: 'সৌদি আরবে ফ্যামিলি ভিসা ও ডিপেন্ডেন্ট ফি-র সম্পূর্ণ গাইড 2026',
  description: 'সৌদি আরবেতে ফ্যামিলি ভিসা খরচ ও ডিপেন্ডেন্ট ফি কীভাবে গণনা করবেন তা শিখুন। ইকামা ফি, এক্সিট/রি-এন্ট্রি ভিসা খরচ এবং সাধারণ সাশ্রয় কৌশল সম্পর্কে জানুন।',
}

const faqsEn = [
  { question: 'How much is the dependent fee in Saudi Arabia 2026?', answer: 'The dependent fee (expat levy) is SAR 400 per month per dependent, which equals SAR 4,800 per year per person. This applies to the sponsor\'s wife and each child. The fee is charged by the Saudi Ministry of Interior and is payable annually in advance.' },
  { question: 'How much does a family visa cost in Saudi Arabia in 2026?', answer: 'The total annual cost for sponsoring a family in Saudi Arabia includes: SAR 4,800/year per dependent for the expat levy, SAR 2,000 per person for Iqama issuance or renewal, and additional costs for Exit/Re-Entry visas (SAR 200-5,000 depending on type). For a wife and 2 children, the annual cost is approximately SAR 20,400-28,400.' },
  { question: 'What is the expat dependent levy in Saudi Arabia?', answer: 'The expat dependent levy is a monthly fee of SAR 400 per dependent introduced by the Saudi government. It applies to expat workers who sponsor family members. The levy is collected annually in advance through Absher or SADAD payment systems. Failure to pay results in fines and visa processing delays.' },
  { question: 'Are dependent fees the same for wives and children?', answer: 'Yes, the dependent fee of SAR 400 per month is the same for both wives and children. Each family member you sponsor incurs the same monthly levy. Iqama issuance fees are also identical at SAR 2,000 per person for new issuance or renewal.' },
  { question: 'Can I pay dependent fees monthly instead of yearly?', answer: 'The Saudi Ministry of Interior collects dependent fees annually in advance as a lump sum. However, you can save gradually each month to prepare for the annual payment. The Sauditoolhub Family Visa Optimizer helps you calculate a monthly budget to spread the cost.' },
  { question: 'What happens if I dont pay the dependent fees in Saudi Arabia?', answer: 'Non-payment of dependent fees results in fines, visa processing delays, and potential Iqama suspension. Continued non-payment can lead to deportation (huroob) and re-entry bans. If your sponsor delays payment, both the sponsor and the dependent may face legal consequences.' },
  { question: 'What happens when my child turns 18 in Saudi Arabia?', answer: 'When a dependent child turns 18, they are no longer eligible for a dependent Iqama under their father\'s sponsorship. Options include: transferring to a parent\'s sponsorship if the child is a female, obtaining an independent work visa if employed, applying for a premium residency, or leaving Saudi Arabia.' },
  { question: 'Do I need an Exit/Re-Entry visa for my dependents?', answer: 'Yes. If your wife or children need to travel outside Saudi Arabia, they require an Exit/Re-Entry visa. A single exit visa costs SAR 200, while a multiple-entry visa valid for 6 months costs SAR 3,000. Annual multiple-entry visas are also available for SAR 5,000.' },
  { question: 'How do I check my dependent fees in Absher?', answer: 'Log into your Absher account, go to "My Services," select "Family Members," then choose "Inquire About Violations." You can view all outstanding dependent fees, Iqama renewal charges, and any overstay fines. Payments can be made directly through Absher or via SADAD.' },
  { question: 'Can I get a refund for dependent fees if I leave Saudi Arabia permanently?', answer: 'Dependent fees paid annually in advance are generally non-refundable, even if you leave before the year ends. However, you should cancel your dependents\' Iqamas through Absher or Jawazat before leaving to avoid future fines. Consult your sponsor or HR department for your specific case.' },
]

const faqsAr = [
  { question: 'كم تبلغ رسوم التابعين في السعودية 2026؟', answer: 'رسوم التابعين (مقابل الوافدين) هي 400 ريال سعودي شهرياً لكل تابع، أي 4,800 ريال سنوياً لكل شخص. تنطبق على زوجة الكفيل وكل طفل. يتم تحصيل الرسوم من قبل وزارة الداخلية سنوياً مقدماً.' },
  { question: 'كم تكلفة تأشيرة العائلة في السعودية 2026؟', answer: 'التكلفة السنوية الإجمالية لكفالة عائلة في السعودية تشمل: 4,800 ريال/سنة لكل تابع للرسم الشهري، 2,000 ريال لكل شخص لإصدار أو تجديد الإقامة، وتكاليف إضافية لتأشيرات الخروج والعودة (200-5,000 ريال حسب النوع).' },
  { question: 'ما هي رسوم التابعين للوافدين في السعودية؟', answer: 'رسوم التابعين هي رسم شهري قدره 400 ريال لكل تابع فرضته الحكومة السعودية. تنطبق على العمال الوافدين الذين يكفلون أفراد أسرهم. يتم تحصيل الرسم سنوياً مسبقاً عبر أبشر أو سداد.' },
  { question: 'هل رسوم التابعين هي نفسها للزوجة والأطفال؟', answer: 'نعم، رسم التابعين البالغ 400 ريال شهرياً هو نفسه للزوجة والأطفال. كل فرد من أفراد الأسرة يتحمل نفس الرسم الشهري. رسوم إصدار الإقامة متطابقة أيضاً عند 2,000 ريال للشخص.' },
  { question: 'هل يمكن دفع رسوم التابعين شهرياً بدلاً من سنوياً؟', answer: 'وزارة الداخلية تجمع رسوم التابعين سنوياً دفعة واحدة. لكن يمكنك الادخار تدريجياً كل شهر للاستعداد للدفع السنوي. حاسبة Sauditoolhub تساعدك في حساب ميزانية شهرية مناسبة.' },
  { question: 'ماذا يحدث إذا لم أدفع رسوم التابعين في السعودية؟', answer: 'عدم دفع رسوم التابعين يؤدي إلى غرامات وتأخير في معالجة التأشيرات وتعليق محتمل للإقامة. عدم الدفع المستمر قد يؤدي إلى الترحيل (هروب) ومنع العودة.' },
  { question: 'ماذا يحدث عندما يبلغ طفلي 18 سنة في السعودية؟', answer: 'عند بلوغ الطفل 18 عاماً، لم يعد مؤهلاً للحصول على إقامة تابعة. الخيارات تشمل: تحويل الكفالة للوالدة إذا كانت الأنثى غير متزوجة، الحصول على تأشيرة عمل مستقلة، التقديم على الإقامة المميزة، أو مغادرة المملكة.' },
  { question: 'هل أحتاج إلى تأشيرة خروج وعودة للتابعين؟', answer: 'نعم. إذا كانت زوجتك أو أطفالك بحاجة للسفر خارج المملكة، يحتاجون إلى تأشيرة خروج وعودة. تأشيرة الخروج المفردة تكلف 200 ريال، بينما المتعددة لمدة 6 أشهر تكلف 3,000 ريال.' },
  { question: 'كيف أتحقق من رسوم التابعين في أبشر؟', answer: 'سجل الدخول إلى حساب أبشر، اذهب إلى "خدماتي"، اختر "أفراد الأسرة"، ثم "الاستعلام عن المخالفات". يمكنك عرض جميع رسوم التابعين المستحقة ورسوم تجديد الإقامة.' },
  { question: 'هل يمكن استرداد رسوم التابعين إذا غادرت السعودية نهائياً؟', answer: 'رسوم التابعين المدفوعة سنوياً مقدماً غير قابلة للاسترداد عموماً. لكن يجب إلغاء إقامات التابعين عبر أبشر أو الجوازات قبل المغادرة لتجنب الغرامات المستقبلية.' },
]

const faqsUr = [
  { question: '2026 میں سعودی عرب میں تابعین فیس کتنی ہے؟', answer: 'تابعین فیس (ایکسپیٹ لیوی) 400 ریال ماہانہ فی تابع ہے، یعنی 4,800 ریال سالانہ فی شخص۔ یہ کفیل کی اہلیہ اور ہر بچے پر لاگو ہوتی ہے۔ یہ فیس وزارت داخلہ سالانہ پیشگی وصول کرتی ہے۔' },
  { question: '2026 میں سعودی عرب میں خاندانی ویزا کی کل لاگت کتنی ہے؟', answer: 'سعودی عرب میں خاندان کی کفالت کی سالانہ لاگت میں شامل ہیں: 4,800 ریال/سال فی تابع لیوی فیس، 2,000 ریال فی شخص اقامہ جاری کرنے یا تجدید کے لیے، اور ایگزٹ/ری انٹری ویزا کے اضافی اخراجات (200-5,000 ریال)۔' },
  { question: 'ایکسپیٹ تابعین لیوی کیا ہے؟', answer: 'ایکسپیٹ تابعین لیوی ایک ماہانہ فیس ہے 400 ریال فی تابع جو سعودی حکومت نے متعارف کرائی ہے۔ یہ ان تمام غیر ملکی کارکنوں پر لاگو ہوتی ہے جو اپنے خاندان کے افراد کو اسپانسر کرتے ہیں۔' },
  { question: 'کیا تابعین فیس بیوی اور بچوں کے لیے یکساں ہے؟', answer: 'جی ہاں، 400 ریال ماہانہ کی تابعین فیس بیوی اور بچوں دونوں کے لیے یکساں ہے۔ آپ کے زیر کفالت ہر فرد پر یہی ماہانہ لیوی لاگو ہوتی ہے۔ اقامہ جاری کرنے کی فیس بھی 2,000 ریال فی شخص یکساں ہے۔' },
  { question: 'کیا تابعین فیس ماہانہ ادا کی جا سکتی ہے؟', answer: 'وزارت داخلہ تابعین فیس سالانہ پیشگی ایک ہی قسط میں وصول کرتی ہے۔ تاہم، آپ سالانہ ادائیگی کی تیاری کے لیے ہر ماہ بتدریج بچت کر سکتے ہیں۔ Sauditoolhub فیملی ویزا آپٹیمائزر ماہانہ بجٹ تجویز کرتا ہے۔' },
  { question: 'اگر میں تابعین فیس ادا نہ کروں تو کیا ہوگا؟', answer: 'تابعین فیس کی عدم ادائیگی کے نتیجے میں جرمانے، ویزا پروسیسنگ میں تاخیر، اور اقامہ معطلی کا امکان ہوتا ہے۔ مسلسل عدم ادائیگی ملک بدری اور واپسی پر پابندی کا سبب بن سکتی ہے۔' },
  { question: 'میرا بچہ 18 سال کا ہو جائے تو کیا ہوتا ہے؟', answer: 'جب بچہ 18 سال کا ہو جاتا ہے تو وہ والد کی کفالت میں تابع اقامہ کا اہل نہیں رہتا۔ اختیارات میں شامل ہیں: والدہ کی کفالت میں منتقلی، آزاد ورک ویزا حاصل کرنا، پریمیم رہائش کے لیے درخواست دینا، یا سعودی عرب چھوڑنا۔' },
  { question: 'کیا میرے زیر کفالت افراد کے لیے ایگزٹ/ری انٹری ویزا ضروری ہے؟', answer: 'جی ہاں۔ اگر آپ کی بیوی یا بچوں کو سعودی عرب سے باہر سفر کرنا ہے تو انہیں ایگزٹ/ری انٹری ویزا کی ضرورت ہوتی ہے۔ سنگل ایگزٹ ویزا 200 ریال، جبکہ 6 ماہ کا ملٹیپل ویزا 3,000 ریال ہے۔' },
  { question: 'ابشر پر تابعین فیس کیسے چیک کروں؟', answer: 'ابشر اکاؤنٹ میں لاگ ان کریں، "مائی سروسز" پر جائیں، "فیملی ممبرز" منتخب کریں، پھر "انکوائری اباؤٹ وائلشنز" کا انتخاب کریں۔ تمام واجب الادا فیس دیکھ سکتے ہیں۔' },
  { question: 'کیا تابعین فیس کی واپسی ممکن ہے اگر مستقل طور پر سعودی عرب چھوڑ دوں؟', answer: 'سالانہ پیشگی ادا کردہ تابعین فیس عام طور پر غیر واپس قابل ہوتی ہے۔ تاہم، روانگی سے پہلے ابشر یا جاوزات کے ذریعے تابعین کی اقامت منسوخ کرنی چاہیے۔' },
]

const faqsTl = [
  { question: 'Magkano ang dependent fee sa Saudi Arabia 2026?', answer: 'Ang dependent fee (expat levy) ay SAR 400 bawat buwan bawat dependent, katumbas ng SAR 4,800 bawat taon bawat tao. Ito ay para sa asawa at bawat anak ng sponsor. Kinokolekta ito ng Ministry of Interior taun-taon nang maaga.' },
  { question: 'Magkano ang gastos sa family visa sa Saudi Arabia 2026?', answer: 'Ang taunang gastos sa pag-sponsor ng pamilya ay kinabibilangan ng: SAR 4,800/taon bawat dependent para sa levy, SAR 2,000 bawat tao para sa Iqama issuance o renewal, at dagdag na Exit/Re-Entry visa costs (SAR 200-5,000).' },
  { question: 'Ano ang expat dependent levy sa Saudi Arabia?', answer: 'Ang expat dependent levy ay isang buwanang bayad na SAR 400 bawat dependent na ipinatupad ng gobyerno ng Saudi. Ito ay para sa mga expat worker na nag-sponsor ng mga miyembro ng pamilya. Ang levy ay kinokolekta taun-taon sa pamamagitan ng Absher o SADAD.' },
  { question: 'Pareho ba ang dependent fee para sa asawa at mga anak?', answer: 'Oo, ang dependent fee na SAR 400 bawat buwan ay pareho para sa asawa at mga anak. Bawat miyembro ng pamilya na iyong ini-sponsor ay may parehong buwanang levy. Ang Iqama issuance fees ay pareho rin sa SAR 2,000 bawat tao.' },
  { question: 'Pwede bang magbayad ng dependent fees buwan-buwan imbes na taunan?', answer: 'Kinokolekta ng Ministry of Interior ang dependent fees taun-taon bilang lump sum. Pero maaari kang mag-ipon kada buwan para sa taunang pagbabayad. Ang Sauditoolhub Family Visa Optimizer ay nagpapakita ng eksaktong buwanang budget.' },
  { question: 'Ano ang mangyayari kung hindi ako magbayad ng dependent fees?', answer: 'Ang hindi pagbabayad ng dependent fees ay nagreresulta sa multa, pagkaantala sa visa processing, at posibleng pagsuspinde ng Iqama. Ang paulit-ulit na hindi pagbabayad ay maaaring humantong sa deportation at re-entry ban.' },
  { question: 'Ano ang mangyayari kapag ang aking anak ay naging 18 taong gulang?', answer: 'Kapag ang isang dependent child ay naging 18, hindi na sila kwalipikado para sa dependent Iqama sa ilalim ng sponsorship ng magulang. Mga opsyon: ilipat sa sponsorship ng ina, kumuha ng independent work visa, mag-apply para sa Premium Residency, o umalis ng Saudi Arabia.' },
  { question: 'Kailangan ko ba ng Exit/Re-Entry visa para sa aking mga dependent?', answer: 'Oo. Kung ang iyong asawa o mga anak ay kailangang maglakbay sa labas ng Saudi Arabia, kailangan nila ng Exit/Re-Entry visa. Ang single exit visa ay nagkakahalaga ng SAR 200, habang ang multiple-entry visa para sa 6 na buwan ay SAR 3,000.' },
  { question: 'Paano ko ma-check ang aking dependent fees sa Absher?', answer: 'Mag-log in sa iyong Absher account, pumunta sa "My Services," piliin ang "Family Members," pagkatapos ay "Inquire About Violations." Maaari mong makita ang lahat ng outstanding fees at magbayad nang direkta.' },
  { question: 'Maaari bang ma-refund ang dependent fees kung permanently akong umalis ng Saudi?', answer: 'Ang dependent fees na binayad nang taun-taon ay karaniwang hindi mare-refund, kahit na umalis ka bago matapos ang taon. Gayunpaman, dapat mong kanselahin ang Iqamas ng iyong mga dependent bago umalis.' },
]

const faqsBn = [
  { question: 'সৌদি আরবে 2026 সালে ডিপেন্ডেন্ট ফি কত?', answer: 'ডিপেন্ডেন্ট ফি (এক্সপ্যাট লেভি) প্রতি ডিপেন্ডেন্টের জন্য মাসিক ৪০০ SAR, যা প্রতি বছর প্রতি ব্যক্তির জন্য ৪,৮০০ SAR-এর সমান। এটি স্পনসরের স্ত্রী এবং প্রতিটি সন্তানের জন্য প্রযোজ্য।' },
  { question: '2026 সালে সৌদি আরবে ফ্যামিলি ভিসার খরচ কত?', answer: 'সৌদি আরবে পরিবারের স্পনসরশিপের বার্ষিক খরচের মধ্যে রয়েছে: লেভির জন্য প্রতি ডিপেন্ডেন্টে ৪,৮০০ SAR/বছর, ইকামা ইস্যু বা নবায়নের জন্য জনপ্রতি ২,০০০ SAR, এবং এক্সিট/রি-এন্ট্রি ভিসার জন্য অতিরিক্ত খরচ (২০০-৫,০০০ SAR)।' },
  { question: 'সৌদি আরবে এক্সপ্যাট ডিপেন্ডেন্ট লেভি কী?', answer: 'এক্সপ্যাট ডিপেন্ডেন্ট লেভি হলো একটি মাসিক ফি ৪০০ SAR প্রতি ডিপেন্ডেন্ট যা সৌদি সরকার চালু করেছে। এটি বিদেশী কর্মীদের জন্য প্রযোজ্য যারা পরিবারের সদস্যদের স্পনসর করে। লেভি বার্ষিক আগাম আদায় করা হয় আবশির বা SADAD-এর মাধ্যমে।' },
  { question: 'স্ত্রী এবং সন্তানদের জন্য কি ডিপেন্ডেন্ট ফি একই?', answer: 'হ্যাঁ, মাসিক ৪০০ SAR-এর ডিপেন্ডেন্ট ফি স্ত্রী এবং সন্তান উভয়ের জন্যই সমান। আপনি যে প্রতিটি পরিবারের সদস্যকে স্পনসর করেন তাদের জন্যই একই মাসিক লেভি প্রযোজ্য। ইকামা ইস্যু ফিও জনপ্রতি ২,০০০ SAR সমান।' },
  { question: 'বার্ষিকের পরিবর্তে কি মাসিক ডিপেন্ডেন্ট ফি দেওয়া যাবে?', answer: 'স্বরাষ্ট্র মন্ত্রণালয় বার্ষিক আগাম একটি lump sum হিসেবে ডিপেন্ডেন্ট ফি সংগ্রহ করে। তবে, আপনি বার্ষিক পেমেন্টের জন্য প্রতি মাসে ধীরে ধীরে সঞ্চয় করতে পারেন। Sauditoolhub ফ্যামিলি ভিসা অপটিমাইজার আপনাকে মাসিক বাজেট দেখায়।' },
  { question: 'সৌদি আরবে ডিপেন্ডেন্ট ফি না দিলে কী হয়?', answer: 'ডিপেন্ডেন্ট ফি না দেওয়ার ফলে জরিমানা, ভিসা প্রক্রিয়াকরণে বিলম্ব এবং ইকামা স্থগিতের সম্ভাবনা রয়েছে। ক্রমাগত অ-প্রদান নির্বাসন এবং পুনরায় প্রবেশে নিষেধাজ্ঞার কারণ হতে পারে।' },
  { question: 'আমার সন্তানের বয়স ১৮ হলে কী হয়?', answer: 'যখন একটি নির্ভরশীল সন্তানের বয়স ১৮ হয়, তখন তারা পিতার স্পনসরশিপের অধীনে নির্ভরশীল ইকামার জন্য যোগ্য হয় না। বিকল্পগুলির মধ্যে রয়েছে: মায়ের স্পনসরশিপে স্থানান্তর, স্বাধীন ওয়ার্ক ভিসা, প্রিমিয়াম রেসিডেন্সির জন্য আবেদন, বা সৌদি আরব ত্যাগ করা।' },
  { question: 'আমার নির্ভরশীলদের জন্য কি এক্সিট/রি-এন্ট্রি ভিসা প্রয়োজন?', answer: 'হ্যাঁ। আপনার স্ত্রী বা সন্তানদের সৌদি আরবের বাইরে ভ্রমণ করলে তাদের এক্সিট/রি-এন্ট্রি ভিসা প্রয়োজন। একক এক্সিট ভিসার খরচ ২০০ SAR, যেখানে ৬ মাসের মাল্টিপল-এন্ট্রি ভিসার খরচ ৩,০০০ SAR।' },
  { question: 'Absher-এ আমার ডিপেন্ডেন্ট ফি কীভাবে চেক করব?', answer: 'আপনার Absher অ্যাকাউন্টে লগ ইন করুন, "My Services"-এ যান, "Family Members" নির্বাচন করুন, তারপর "Inquire About Violations" বেছে নিন। সব বকেয়া ফি দেখতে এবং পরিশোধ করতে পারবেন।' },
  { question: 'স্থায়ীভাবে সৌদি ছেড়ে গেলে কি ডিপেন্ডেন্ট ফি ফেরত পাওয়া যায়?', answer: 'বার্ষিক আগাম পরিশোধিত ডিপেন্ডেন্ট ফি সাধারণত ফেরতযোগ্য নয়, এমনকি বছর শেষ হওয়ার আগে চলে গেলেও। তবে, চলে যাওয়ার আগে আবশির বা জাওয়াজাতের মাধ্যমে ডিপেন্ডেন্টদের ইকামা বাতিল করা উচিত।' },
]

function EnContent() {
  return (
    <article className="prose prose-invert max-w-none prose-headings:text-desert-primary prose-a:text-desert-primary prose-strong:text-white prose-li:text-gray-300">
      <h1>The Complete Guide to Family Visa & Dependent Fees in Saudi Arabia 2026</h1>

      <div className="not-prose glass p-6 rounded-xl mb-8">
        <p className="text-gray-300 text-lg leading-relaxed">
          Bringing your family to live with you in Saudi Arabia is one of the most rewarding decisions you can make as an expat. Your spouse and children by your side, shared experiences, and the comfort of family life in the Kingdom — it is the dream.
        </p>
        <p className="text-gray-300 text-lg leading-relaxed mt-4">
          But that dream comes with a significant financial commitment. Between the expat dependent levy, Iqama fees, medical insurance, and Exit/Re-Entry visas, the annual cost of sponsoring a family in Saudi Arabia can easily range from SAR 15,000 to SAR 30,000 or more, depending on your family size and travel needs.
        </p>
        <p className="text-gray-300 text-lg leading-relaxed mt-4">
          Many expats underestimate these costs and face unpleasant surprises when renewal time comes. This comprehensive guide breaks down every single fee, shows you how to calculate your total annual cost, and gives you practical strategies to save money. Use the{' '}
          <Link href="/family-visa-optimizer" className="text-desert-primary font-bold underline">
            Sauditoolhub Family Visa & Dependent Fee Optimizer
          </Link>{' '}
          to get an instant personalized estimate for your family.
        </p>
      </div>

      <h2>What is the Dependent Fee (Expat Levy)?</h2>
      <p>The dependent fee — also known as the expat levy or dependent levy — is a monthly charge imposed by the Saudi Ministry of Interior on expatriates who sponsor family members (dependents) in the Kingdom. Introduced as part of Saudi Arabia's fiscal reforms, this fee applies to the expat worker's spouse and all children sponsored under their Iqama.</p>

      <div className="not-prose glass p-4 rounded-xl mb-6">
        <h3 className="text-white font-bold mb-3">Dependent Fee at a Glance</h3>
        <ul className="space-y-2 text-gray-300">
          <li><strong className="text-desert-primary">Monthly rate:</strong> SAR 400 per dependent.</li>
          <li><strong className="text-desert-primary">Annual cost per dependent:</strong> SAR 4,800 (400 x 12).</li>
          <li><strong className="text-desert-primary">Who pays:</strong> The expat sponsor (employee).</li>
          <li><strong className="text-desert-primary">Collection method:</strong> Annual lump sum via Absher or SADAD.</li>
          <li><strong className="text-desert-primary">Consequence of non-payment:</strong> Fines, visa delays, potential deportation.</li>
        </ul>
      </div>

      <p>The levy applies regardless of whether your dependent is employed, studying, or staying at home. It is a flat per-head charge with no exemptions for age or employment status — until the dependent turns 18 or obtains independent residency.</p>

      <h2>Detailed Breakdown of Family Visa Costs (2026 Rules)</h2>
      <p>Understanding the full cost structure is essential for accurate budgeting. Here is every fee you need to account for when sponsoring your family in Saudi Arabia.</p>

      <h3>1. Monthly Dependent Levy</h3>
      <div className="not-prose glass p-4 rounded-xl mb-6">
        <ul className="space-y-3 text-gray-300">
          <li><strong className="text-desert-primary">Per dependent:</strong> SAR 400/month = SAR 4,800/year.</li>
          <li><strong className="text-desert-primary">Wife + 1 child:</strong> SAR 800/month = SAR 9,600/year.</li>
          <li><strong className="text-desert-primary">Wife + 2 children:</strong> SAR 1,200/month = SAR 14,400/year.</li>
          <li><strong className="text-desert-primary">Wife + 3 children:</strong> SAR 1,600/month = SAR 19,200/year.</li>
          <li className="text-gray-500 text-sm mt-2">* The levy is non-negotiable and must be paid annually in full.</li>
        </ul>
      </div>

      <h3>2. Iqama Issuance and Renewal Fees</h3>
      <div className="not-prose glass p-4 rounded-xl mb-6">
        <ul className="space-y-3 text-gray-300">
          <li><strong className="text-desert-primary">New Iqama (first issuance):</strong> SAR 2,000 per dependent.</li>
          <li><strong className="text-desert-primary">Annual Iqama renewal:</strong> SAR 2,000 per dependent.</li>
          <li><strong className="text-desert-primary">Validity period:</strong> 1 year (must be renewed annually).</li>
          <li className="text-gray-500 text-sm mt-2">* This is a one-time fee per renewal cycle, separate from the monthly levy.</li>
        </ul>
      </div>

      <h3>3. Exit/Re-Entry Visa Fees</h3>
      <p>If your dependents need to travel outside Saudi Arabia, they require an Exit/Re-Entry visa. The cost depends on the type and duration:</p>
      <div className="not-prose glass p-4 rounded-xl mb-6">
        <ul className="space-y-3 text-gray-300">
          <li><strong className="text-desert-primary">Single Exit visa:</strong> SAR 200 per person.</li>
          <li><strong className="text-desert-primary">Multiple Exit (6 months):</strong> SAR 3,000 per person.</li>
          <li><strong className="text-desert-primary">Multiple Exit (1 year):</strong> SAR 5,000 per person.</li>
          <li className="text-gray-500 text-sm mt-2">* Single entry visas make sense for 1-2 trips per year, while multiple-entry visas are more economical for frequent travelers.</li>
        </ul>
      </div>

      <h3>4. Medical Insurance</h3>
      <div className="not-prose glass p-4 rounded-xl mb-6">
        <ul className="space-y-3 text-gray-300">
          <li><strong className="text-desert-primary">Mandatory health insurance:</strong> Required for all dependents.</li>
          <li><strong className="text-desert-primary">Average annual cost:</strong> SAR 1,000 - 2,500 per dependent.</li>
          <li className="text-gray-500 text-sm mt-2">* Costs vary based on provider, coverage level, and age of dependents.</li>
        </ul>
      </div>

      <h3>5. Work Permit Fee (Optional)</h3>
      <div className="not-prose glass p-4 rounded-xl mb-6">
        <ul className="space-y-3 text-gray-300">
          <li><strong className="text-desert-primary">Annual work permit:</strong> SAR 960 per dependent who wishes to work.</li>
          <li className="text-gray-500 text-sm mt-2">* Only applicable if your spouse or dependent child plans to work in Saudi Arabia.</li>
        </ul>
      </div>

      <h2>Who Needs to Pay These Fees?</h2>
      <div className="not-prose glass p-4 rounded-xl mb-6">
        <ul className="space-y-3 text-gray-300">
          <li><strong className="text-desert-primary">Expat workers:</strong> All expatriate employees on a work visa who sponsor family members must pay the dependent levy and Iqama fees for each dependent.</li>
          <li><strong className="text-desert-primary">Dependents:</strong> The sponsor's wife and all children under 18 are classified as dependents and incur fees. Children over 18 must obtain independent residency or leave the Kingdom.</li>
          <li><strong className="text-desert-primary">Parents:</strong> Sponsoring parents (mother/father) also incurs dependent fees at the same rate of SAR 400/month per person, plus Iqama issuance costs.</li>
          <li><strong className="text-desert-primary">Domestic workers:</strong> Sponsoring maids, drivers, or nannies incurs different fee structures regulated by the Ministry of Human Resources.</li>
        </ul>
      </div>

      <h2>Step-by-Step Calculation Guide</h2>
      <div className="not-prose glass p-6 rounded-xl mb-8">
        <ol className="space-y-4 text-gray-300 list-decimal list-inside">
          <li><strong>Step 1:</strong> Count your dependents. Include your spouse and all children under 18 who will be sponsored under your Iqama.</li>
          <li><strong>Step 2:</strong> Calculate the annual dependent levy: number of dependents x SAR 4,800.</li>
          <li><strong>Step 3:</strong> Add Iqama fees: number of dependents x SAR 2,000 for new issuance or renewal.</li>
          <li><strong>Step 4:</strong> Estimate Exit/Re-Entry visa costs based on planned travel frequency.</li>
          <li><strong>Step 5:</strong> Add medical insurance costs for all dependents.</li>
          <li><strong>Step 6:</strong> Add optional work permit fees if applicable.</li>
          <li><strong>Step 7:</strong> Sum all costs to get your annual family visa budget.</li>
        </ol>
      </div>

      <p>Rather than doing all this math manually, use the{' '}
        <Link href="/family-visa-optimizer" className="text-desert-primary font-bold underline">
          Sauditoolhub Family Visa Optimizer
        </Link>{' '}
        for an instant, accurate calculation tailored to your family size and needs.
      </p>

      <h2>Real-Life Examples</h2>

      <h3>Example 1: Expat with Wife + 1 Child</h3>
      <div className="not-prose glass p-4 rounded-xl mb-6">
        <p className="text-gray-300"><strong>Family:</strong> 1 wife + 1 child = 2 dependents.</p>
        <div className="mt-3 space-y-1 text-gray-300">
          <p>Annual dependent levy: 2 x SAR 4,800 = <strong>SAR 9,600</strong></p>
          <p>Iqama renewal fees: 2 x SAR 2,000 = <strong>SAR 4,000</strong></p>
          <p>Medical insurance (estimated): 2 x SAR 1,500 = <strong>SAR 3,000</strong></p>
          <p>2 single Exit/Re-Entry visas per year: 2 x 2 x SAR 200 = <strong>SAR 800</strong></p>
          <div className="border-t border-gray-600 pt-1 mt-1">
            <p className="text-desert-primary font-bold">Total annual cost: approximately SAR 17,400</p>
          </div>
          <p className="text-gray-500 text-sm mt-2">Monthly budget needed: SAR 1,450</p>
        </div>
      </div>

      <h3>Example 2: Expat with Wife + 2 Children</h3>
      <div className="not-prose glass p-4 rounded-xl mb-6">
        <p className="text-gray-300"><strong>Family:</strong> 1 wife + 2 children = 3 dependents.</p>
        <div className="mt-3 space-y-1 text-gray-300">
          <p>Annual dependent levy: 3 x SAR 4,800 = <strong>SAR 14,400</strong></p>
          <p>Iqama renewal fees: 3 x SAR 2,000 = <strong>SAR 6,000</strong></p>
          <p>Medical insurance (estimated): 3 x SAR 1,500 = <strong>SAR 4,500</strong></p>
          <p>3 single Exit/Re-Entry visas + 1 multiple visa: <strong>SAR 3,600</strong></p>
          <div className="border-t border-gray-600 pt-1 mt-1">
            <p className="text-desert-primary font-bold">Total annual cost: approximately SAR 28,500</p>
          </div>
          <p className="text-gray-500 text-sm mt-2">Monthly budget needed: SAR 2,375</p>
        </div>
      </div>

      <h3>Example 3: Expat with Wife, 2 Children, and Parents</h3>
      <div className="not-prose glass p-4 rounded-xl mb-6">
        <p className="text-gray-300"><strong>Family:</strong> 1 wife + 2 children + 2 parents = 5 dependents.</p>
        <div className="mt-3 space-y-1 text-gray-300">
          <p>Annual dependent levy: 5 x SAR 4,800 = <strong>SAR 24,000</strong></p>
          <p>Iqama renewal fees: 5 x SAR 2,000 = <strong>SAR 10,000</strong></p>
          <p>Medical insurance (estimated): <strong>SAR 7,500</strong></p>
          <p>Estimated travel visa costs: <strong>SAR 3,000</strong></p>
          <div className="border-t border-gray-600 pt-1 mt-1">
            <p className="text-desert-primary font-bold">Total annual cost: approximately SAR 44,500</p>
          </div>
          <p className="text-gray-500 text-sm mt-2">Monthly budget needed: SAR 3,708</p>
        </div>
      </div>

      <h2>Special Cases and Important Considerations</h2>

      <div className="not-prose glass p-4 rounded-xl mb-6">
        <h3 className="text-white font-bold mb-3 flex items-center gap-2"><AlertTriangle className="h-5 w-5 text-desert-primary" /> Child Turning 18</h3>
        <p className="text-gray-300">When a dependent child turns 18, they are no longer eligible for sponsorship under a parent's Iqama. You have several options:</p>
        <ul className="space-y-2 text-gray-300 mt-2">
          <li>Transfer to a mother or father's sponsorship (if the child is female and unmarried).</li>
          <li>Obtain an independent work visa if the child finds employment with a Saudi employer.</li>
          <li>Apply for the Saudi Premium Residency (Premium Iqama) if eligible.</li>
          <li>Leave Saudi Arabia and return on a visit visa for short stays.</li>
          <li>For sons: continued sponsorship is not possible after 18 unless enrolled in higher education with special approval.</li>
        </ul>
      </div>

      <div className="not-prose glass p-4 rounded-xl mb-6">
        <h3 className="text-white font-bold mb-3 flex items-center gap-2"><AlertTriangle className="h-5 w-5 text-desert-primary" /> Sponsor Loses Their Job</h3>
        <p className="text-gray-300">If you lose your job while sponsoring family members, you have a grace period — typically 30 to 90 days depending on your visa status — to find a new sponsor and transfer your sponsorship. During this period:</p>
        <ul className="space-y-2 text-gray-300 mt-2">
          <li>Your dependents' Iqamas remain valid until their expiration date.</li>
          <li>You remain responsible for dependent fees during the grace period.</li>
          <li>If you cannot find a new sponsor, you and your family must exit Saudi Arabia before the grace period ends to avoid overstay fines.</li>
          <li>Use the{' '}
            <Link href="/jawazat-fine-calculator" className="text-desert-primary font-bold underline">
              Sauditoolhub Jawazat Overstay Calculator
            </Link>{' '}
            to check potential fines if you overstay.
          </li>
        </ul>
      </div>

      <div className="not-prose glass p-4 rounded-xl mb-6">
        <h3 className="text-white font-bold mb-3">Monthly vs. Yearly Payments</h3>
        <p className="text-gray-300">The dependent levy is collected annually in advance. While you cannot pay monthly to the Ministry of Interior, you can — and should — budget monthly to avoid a large lump-sum shock at renewal time. The Sauditoolhub Family Visa Optimizer shows you exactly how much to set aside each month.</p>
      </div>

      <h2>How to Pay Dependent Fees</h2>
      <p>There are three primary ways to pay your family visa and dependent fees in Saudi Arabia:</p>

      <h3>1. Through Absher</h3>
      <div className="not-prose glass p-4 rounded-xl mb-6">
        <ol className="space-y-2 text-gray-300 list-decimal list-inside">
          <li>Log into your Absher account (absher.sa).</li>
          <li>Navigate to "My Services" &gt; "Ministry of Interior Services."</li>
          <li>Select "Dependent Fees" or "Family Members."</li>
          <li>View outstanding fees and select "Pay Now."</li>
          <li>Complete payment using your preferred method.</li>
        </ol>
      </div>

      <h3>2. Through SADAD</h3>
      <div className="not-prose glass p-4 rounded-xl mb-6">
        <ol className="space-y-2 text-gray-300 list-decimal list-inside">
          <li>Log into your bank's mobile app or online portal.</li>
          <li>Go to the SADAD payment section.</li>
          <li>Select "Ministry of Interior" as the biller.</li>
          <li>Enter your Iqama number as the billing reference.</li>
          <li>View outstanding dependent fees and confirm payment.</li>
        </ol>
      </div>

      <h3>3. Through Bank Apps (Al Rajhi, SNB, Alinma, etc.)</h3>
      <div className="not-prose glass p-4 rounded-xl mb-6">
        <ol className="space-y-2 text-gray-300 list-decimal list-inside">
          <li>Open your bank's mobile app.</li>
          <li>Search for "SADAD" or "Bill Payment."</li>
          <li>Select "Government Services" &gt; "Ministry of Interior."</li>
          <li>Enter your sponsor Iqama number.</li>
          <li>Review and pay the outstanding amount.</li>
        </ol>
      </div>

      <h2>How to Use the Sauditoolhub Family Visa Optimizer</h2>
      <div className="not-prose glass p-6 rounded-xl mb-8">
        <div className="flex items-start gap-4">
          <Users className="h-8 w-8 text-desert-primary shrink-0 mt-1" />
          <div>
            <p className="text-gray-300 leading-relaxed">
              Stop guessing your family visa costs. The{' '}
              <Link href="/family-visa-optimizer" className="text-desert-primary font-bold underline">
                Sauditoolhub Family Visa & Dependent Fee Optimizer
              </Link>{' '}
              gives you an instant, accurate estimate in seconds. Here is how it works:
            </p>
            <ol className="space-y-3 text-gray-300 mt-4 list-decimal list-inside">
              <li>Enter the number of wives and children you sponsor.</li>
              <li>Select each dependent's Iqama status (new, renewal, or already active).</li>
              <li>Choose your Exit/Re-Entry visa preferences (single or multiple entry).</li>
              <li>Set your planning period (6 months, 1 year, or 2 years).</li>
              <li>Get a detailed breakdown of all fees plus cost-saving tips.</li>
            </ol>
            <div className="mt-6">
              <Link href="/family-visa-optimizer" className="inline-flex items-center gap-2 rounded-xl bg-desert-primary px-8 py-3 text-sm font-bold text-white transition-all hover:bg-desert-primary-dim">
                <Calculator className="h-4 w-4" />
                Calculate Your Family Visa Costs — Free
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="not-prose glass p-6 rounded-xl mb-8">
        <h3 className="text-white font-bold text-lg mb-4">Cost-Saving Tips from Sauditoolhub</h3>
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="flex items-start gap-3">
            <FileCheck className="h-5 w-5 text-desert-primary shrink-0 mt-0.5" />
            <div>
              <p className="text-white font-semibold text-sm">Use Multiple Entry Visas</p>
              <p className="text-gray-400 text-xs">A 6-month multiple exit visa (SAR 3,000) is cheaper than buying 3 single visas (SAR 1,800) only if you travel 3+ times a year.</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <FileCheck className="h-5 w-5 text-desert-primary shrink-0 mt-0.5" />
            <div>
              <p className="text-white font-semibold text-sm">Renew on Time</p>
              <p className="text-gray-400 text-xs">Avoid late renewal penalties. Set calendar reminders 30 days before Iqama expiry to process renewals through Absher.</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <FileCheck className="h-5 w-5 text-desert-primary shrink-0 mt-0.5" />
            <div>
              <p className="text-white font-semibold text-sm">Set a Monthly Budget</p>
              <p className="text-gray-400 text-xs">Divide your annual total by 12 and transfer that amount to a dedicated savings account each month.</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <FileCheck className="h-5 w-5 text-desert-primary shrink-0 mt-0.5" />
            <div>
              <p className="text-white font-semibold text-sm">Check Company Sponsorship</p>
              <p className="text-gray-400 text-xs">Some Saudi employers offer dependent sponsorship as a benefit. Check your employment contract and HR policy.</p>
            </div>
          </div>
        </div>
      </div>

      <h2>Special Notes for Pakistani Sponsors</h2>
      <div className="not-prose glass p-6 rounded-xl mb-8">
        <p className="text-gray-300">
          Pakistani nationals form one of the largest expat communities in Saudi Arabia, and bringing your wife and children over is a common goal. The rules and fees in this guide apply to everyone regardless of nationality — the SAR 400 per month dependent levy, Iqama issuance fees, and medical insurance are the same whether your family comes from Pakistan, India, the Philippines, or anywhere else.
        </p>
        <p className="text-gray-300 mt-4">
          A practical tip for Pakistani sponsors: several Pakistani banks operate in Saudi Arabia (Meezan, UBL, HBL, and Bank Alfalah), and their apps support SADAD bill payment, so you can pay the dependent fees and renew your family's Iqamas directly from your phone without visiting a branch. Many families also use these apps to remit money home for the household in Pakistan. Remember the dependent levy is collected annually in advance, so budget for it at Iqama renewal time.
        </p>
        <p className="text-gray-300 mt-4">
          If a Pakistani dependent needs to return to Pakistan permanently, make sure their exit/re-entry visa and final Iqama status are handled before they leave, and use the Jawazat Overstay Fine Calculator to avoid penalties on the way out.
        </p>
      </div>

      <h2>Frequently Asked Questions</h2>
      {faqsEn.map((faq, i) => (
        <div key={i} className="not-prose glass p-4 rounded-xl mb-4">
          <h3 className="text-white font-semibold mb-2">{faq.question}</h3>
          <p className="text-gray-400 text-sm">{faq.answer}</p>
        </div>
      ))}

      <h2>Conclusion</h2>
      <p>Sponsoring your family in Saudi Arabia is a significant financial commitment that requires careful planning. From the dependent levy of SAR 400 per month per person to Iqama renewals, medical insurance, and travel visas, the costs add up quickly. But with the right tools and knowledge, you can budget effectively and avoid costly surprises.</p>
      <p>The{' '}
        <Link href="/family-visa-optimizer" className="text-desert-primary font-bold underline">
          Sauditoolhub Family Visa & Dependent Fee Optimizer
        </Link>{' '}
        is your free, instant, and private tool for calculating your exact annual family costs. Whether you are planning to bring your family to Saudi Arabia for the first time or renewing existing sponsorships, our calculator helps you make informed financial decisions.
      </p>
      <p>Also check the{' '}
        <Link href="/jawazat-fine-calculator" className="text-desert-primary font-bold underline">
          Jawazat Overstay Fine Calculator
        </Link>{' '}
        to stay on top of any visa overstay penalties that could affect your family sponsorship status. Free, accurate, and completely private — Sauditoolhub is the smart way to plan your expat life in Saudi Arabia.
      </p>

      <div className="not-prose glass p-6 rounded-xl mt-8 text-center">
        <Users className="h-10 w-10 text-desert-primary mx-auto mb-3" />
        <h3 className="text-white text-lg font-bold mb-2">Calculate Your Family Visa Costs Now</h3>
        <p className="text-gray-400 text-sm mb-4">Free instant estimate — no registration required</p>
        <Link href="/family-visa-optimizer" className="inline-flex items-center gap-2 rounded-xl bg-desert-primary px-8 py-3 text-sm font-bold text-white transition-all hover:bg-desert-primary-dim">
          <Calculator className="h-4 w-4" />
          Use the Free Family Visa Optimizer
        </Link>
      </div>

      <div className="not-prose glass p-6 rounded-xl mt-8 text-center">
        <p className="text-gray-400 text-sm">Last updated: July 2026 · Based on Saudi Ministry of Interior regulations and Jawazat fee schedules</p>
      </div>
    </article>
  )
}

function ArContent() {
  return (
    <article className="prose prose-invert max-w-none prose-headings:text-desert-primary prose-a:text-desert-primary prose-strong:text-white prose-li:text-gray-300" dir="rtl">
      <h1>الدليل الشامل لتأشيرة العائلة ورسوم التابعين في المملكة العربية السعودية 2026</h1>

      <div className="not-prose glass p-6 rounded-xl mb-8">
        <p className="text-gray-300 text-lg leading-relaxed">
          جلب عائلتك للعيش معك في المملكة العربية السعودية هو أحد أكثر القرارات المكافئة التي يمكنك اتخاذها كمقيم. زوجتك وأطفالك بجانبك، تجارب مشتركة، وراحة الحياة الأسرية في المملكة — هذا هو الحلم.
        </p>
        <p className="text-gray-300 text-lg leading-relaxed mt-4">
          ولكن هذا الحلم يأتي مع التزام مالي كبير. بين رسوم التابعين، رسوم الإقامة، التأمين الطبي، وتأشيرات الخروج والعودة، فإن التكلفة السنوية لكفالة عائلة في السعودية تتراوح بسهولة من 15,000 إلى 30,000 ريال أو أكثر، حسب حجم الأسرة واحتياجات السفر.
        </p>
        <p className="text-gray-300 text-lg leading-relaxed mt-4">
          يقلل الكثير من المقيمين من هذه التكاليف ويواجهون مفاجآت غير سارة عند حلول موعد التجديد. هذا الدليل الشامل يشرح كل رسم بالتفصيل، ويوضح كيفية حساب التكلفة السنوية الإجمالية، ويقدم استراتيجيات عملية لتوفير المال. استخدم{' '}
          <Link href="/family-visa-optimizer" className="text-desert-primary font-bold underline">
            حاسبة رسوم العائلة من Sauditoolhub
          </Link>{' '}
          للحصول على تقدير شخصي فوري لعائلتك.
        </p>
      </div>

      <h2>ما هي رسوم التابعين؟</h2>
      <p>رسوم التابعين — المعروفة أيضاً باسم رسوم الوافدين أو رسوم الإعالة — هي رسم شهري تفرضه وزارة الداخلية السعودية على الوافدين الذين يكفلون أفراد أسرهم (تابعين) في المملكة. تم تقديم هذه الرسوم كجزء من الإصلاحات المالية السعودية، وتنطبق على زوجة العامل الوافد وجميع الأطفال المكفولين تحت إقامته.</p>

      <div className="not-prose glass p-4 rounded-xl mb-6">
        <h3 className="text-white font-bold mb-3">رسوم التابعين في لمحة</h3>
        <ul className="space-y-2 text-gray-300">
          <li><strong className="text-desert-primary">الرسم الشهري:</strong> 400 ريال لكل تابع.</li>
          <li><strong className="text-desert-primary">التكلفة السنوية لكل تابع:</strong> 4,800 ريال (400 × 12).</li>
          <li><strong className="text-desert-primary">من يدفع:</strong> الكفيل (الموظف).</li>
          <li><strong className="text-desert-primary">طريقة التحصيل:</strong> دفعة سنوية عبر أبشر أو سداد.</li>
          <li><strong className="text-desert-primary">عواقب عدم الدفع:</strong> غرامات، تأخير التأشيرات، احتمال الترحيل.</li>
        </ul>
      </div>

      <h2>تفصيل دقيق لتكاليف تأشيرة العائلة (قواعد 2026)</h2>

      <h3>1. رسم التابعين الشهري</h3>
      <div className="not-prose glass p-4 rounded-xl mb-6">
        <ul className="space-y-3 text-gray-300">
          <li><strong className="text-desert-primary">كل تابع:</strong> 400 ريال/شهر = 4,800 ريال/سنة.</li>
          <li><strong className="text-desert-primary">زوجة + طفل واحد:</strong> 800 ريال/شهر = 9,600 ريال/سنة.</li>
          <li><strong className="text-desert-primary">زوجة + طفلان:</strong> 1,200 ريال/شهر = 14,400 ريال/سنة.</li>
          <li><strong className="text-desert-primary">زوجة + 3 أطفال:</strong> 1,600 ريال/شهر = 19,200 ريال/سنة.</li>
        </ul>
      </div>

      <h3>2. رسوم إصدار وتجديد الإقامة</h3>
      <div className="not-prose glass p-4 rounded-xl mb-6">
        <ul className="space-y-3 text-gray-300">
          <li><strong className="text-desert-primary">إقامة جديدة (إصدار أول):</strong> 2,000 ريال لكل تابع.</li>
          <li><strong className="text-desert-primary">تجديد الإقامة السنوي:</strong> 2,000 ريال لكل تابع.</li>
          <li><strong className="text-desert-primary">مدة الصلاحية:</strong> سنة واحدة (يجب تجديدها سنوياً).</li>
        </ul>
      </div>

      <h3>3. رسوم تأشيرات الخروج والعودة</h3>
      <div className="not-prose glass p-4 rounded-xl mb-6">
        <ul className="space-y-3 text-gray-300">
          <li><strong className="text-desert-primary">تأشيرة خروج مفردة:</strong> 200 ريال لكل شخص.</li>
          <li><strong className="text-desert-primary">متعددة (6 أشهر):</strong> 3,000 ريال لكل شخص.</li>
          <li><strong className="text-desert-primary">متعددة (سنة):</strong> 5,000 ريال لكل شخص.</li>
        </ul>
      </div>

      <h3>4. التأمين الطبي</h3>
      <div className="not-prose glass p-4 rounded-xl mb-6">
        <ul className="space-y-3 text-gray-300">
          <li><strong className="text-desert-primary">تأمين صحي إلزامي:</strong> مطلوب لجميع التابعين.</li>
          <li><strong className="text-desert-primary">متوسط التكلفة السنوية:</strong> 1,000 - 2,500 ريال لكل تابع.</li>
        </ul>
      </div>

      <h2>دليل الحساب خطوة بخطوة</h2>
      <div className="not-prose glass p-6 rounded-xl mb-8">
        <ol className="space-y-4 text-gray-300 list-decimal list-inside">
          <li><strong>الخطوة 1:</strong> احسب عدد التابعين (الزوجة والأطفال تحت 18 سنة).</li>
          <li><strong>الخطوة 2:</strong> احسب الرسم السنوي للتابعين: عدد التابعين × 4,800 ريال.</li>
          <li><strong>الخطوة 3:</strong> أضف رسوم الإقامة: عدد التابعين × 2,000 ريال.</li>
          <li><strong>الخطوة 4:</strong> قدر تكاليف تأشيرات الخروج والعودة حسب عدد السفر.</li>
          <li><strong>الخطوة 5:</strong> أضف تكاليف التأمين الطبي لجميع التابعين.</li>
          <li><strong>الخطوة 6:</strong> أضف رسوم تصريح العمل إذا كانت منطبقة.</li>
          <li><strong>الخطوة 7:</strong> اجمع كل التكاليف للحصول على ميزانية الأسرة السنوية.</li>
        </ol>
      </div>

      <h2>أمثلة واقعية</h2>

      <h3>مثال 1: مقيم مع زوجة + طفل واحد</h3>
      <div className="not-prose glass p-4 rounded-xl mb-6">
        <p className="text-gray-300"><strong>الأسرة:</strong> زوجة + طفل واحد = تابعان.</p>
        <div className="mt-3 space-y-1 text-gray-300">
          <p>الرسم السنوي للتابعين: 2 × 4,800 = <strong>9,600 ريال</strong></p>
          <p>رسوم تجديد الإقامة: 2 × 2,000 = <strong>4,000 ريال</strong></p>
          <p>التأمين الطبي (تقديري): 2 × 1,500 = <strong>3,000 ريال</strong></p>
          <p>تأشيرتا خروج وعودة: <strong>800 ريال</strong></p>
          <div className="border-t border-gray-600 pt-1 mt-1">
            <p className="text-desert-primary font-bold">الإجمالي السنوي: حوالي 17,400 ريال</p>
          </div>
        </div>
      </div>

      <h3>مثال 2: مقيم مع زوجة + طفلان</h3>
      <div className="not-prose glass p-4 rounded-xl mb-6">
        <p className="text-gray-300"><strong>الأسرة:</strong> زوجة + طفلان = 3 تابعين.</p>
        <div className="mt-3 space-y-1 text-gray-300">
          <p>الرسم السنوي للتابعين: 3 × 4,800 = <strong>14,400 ريال</strong></p>
          <p>رسوم تجديد الإقامة: 3 × 2,000 = <strong>6,000 ريال</strong></p>
          <p>التأمين الطبي (تقديري): 3 × 1,500 = <strong>4,500 ريال</strong></p>
          <p>تأشيرات الخروج والعودة: <strong>3,600 ريال</strong></p>
          <div className="border-t border-gray-600 pt-1 mt-1">
            <p className="text-desert-primary font-bold">الإجمالي السنوي: حوالي 28,500 ريال</p>
          </div>
        </div>
      </div>

      <h2>حالات خاصة</h2>

      <div className="not-prose glass p-4 rounded-xl mb-6">
        <h3 className="text-white font-bold mb-3 flex items-center gap-2"><AlertTriangle className="h-5 w-5 text-desert-primary" /> بلوغ الطفل 18 سنة</h3>
        <p className="text-gray-300">عند بلوغ الطفل 18 عاماً، لم يعد مؤهلاً للإقامة كتابع. الخيارات تشمل: تحويل الكفالة للوالدة (للبنات غير المتزوجات)، الحصول على تأشيرة عمل، التقديم على الإقامة المميزة، أو مغادرة المملكة.</p>
      </div>

      <div className="not-prose glass p-4 rounded-xl mb-6">
        <h3 className="text-white font-bold mb-3 flex items-center gap-2"><AlertTriangle className="h-5 w-5 text-desert-primary" /> فقدان الكفيل لوظيفته</h3>
        <p className="text-gray-300">إذا فقدت وظيفتك أثناء كفالة أفراد أسرتك، لديك فترة سماح — عادة 30 إلى 90 يوماً — لإيجاد كفيل جديد. استخدم{' '}
          <Link href="/jawazat-fine-calculator" className="text-desert-primary font-bold underline">
            حاسبة غرامات الجوازات
          </Link>{' '}
          لمعرفة الغرامات المحتملة.
        </p>
      </div>

      <h2>طريقة الدفع</h2>
      <p>هناك ثلاث طرق رئيسية لدفع رسوم التابعين:</p>

      <h3>1. عبر أبشر</h3>
      <div className="not-prose glass p-4 rounded-xl mb-6">
        <ol className="space-y-2 text-gray-300 list-decimal list-inside">
          <li>سجل الدخول إلى حساب أبشر.</li>
          <li>اذهب إلى "خدماتي" &gt; "خدمات الوزارة".</li>
          <li>اختر "رسوم التابعين" أو "أفراد الأسرة".</li>
          <li>اعرض الرسوم المستحقة واختر "دفع الآن".</li>
        </ol>
      </div>

      <h3>2. عبر سداد</h3>
      <div className="not-prose glass p-4 rounded-xl mb-6">
        <ol className="space-y-2 text-gray-300 list-decimal list-inside">
          <li>سجل الدخول إلى تطبيق البنك.</li>
          <li>اذهب إلى قسم سداد.</li>
          <li>اختر "وزارة الداخلية" كمفوتر.</li>
          <li>أدخل رقم الإقامة كمرجع للفوترة.</li>
        </ol>
      </div>

      <h2>استخدم حاسبة Sauditoolhub</h2>
      <div className="not-prose glass p-6 rounded-xl mb-8">
        <p className="text-gray-300">
          توقف عن تخمين تكاليف تأشيرة عائلتك.{' '}
          <Link href="/family-visa-optimizer" className="text-desert-primary font-bold underline">
            حاسبة رسوم العائلة من Sauditoolhub
          </Link>{' '}
          تمنحك تقديراً دقيقاً فورياً في ثوانٍ.
        </p>
        <div className="mt-6 text-center">
          <Link href="/family-visa-optimizer" className="inline-flex items-center gap-2 rounded-xl bg-desert-primary px-8 py-3 text-sm font-bold text-white transition-all hover:bg-desert-primary-dim">
            <Calculator className="h-4 w-4" />
            احسب تكاليف تأشيرة عائلتك — مجاناً
          </Link>
        </div>
      </div>

      <h2>الأسئلة الشائعة</h2>
      {faqsAr.map((faq, i) => (
        <div key={i} className="not-prose glass p-4 rounded-xl mb-4">
          <h3 className="text-white font-semibold mb-2">{faq.question}</h3>
          <p className="text-gray-400 text-sm">{faq.answer}</p>
        </div>
      ))}

      <h2>الخاتمة</h2>
      <p>كفالة عائلتك في السعودية التزام مالي كبير يتطلب تخطيطاً دقيقاً. من رسوم التابعين البالغة 400 ريال شهرياً لكل شخص إلى تجديد الإقامات والتأمين الطبي وتأشيرات السفر، التكاليف تتراكم بسرعة. لكن مع الأدوات والمعرفة الصحيحة، يمكنك وضع ميزانية فعالة وتجنب المفاجآت المكلفة.</p>
      <p>استخدم{' '}
        <Link href="/family-visa-optimizer" className="text-desert-primary font-bold underline">
          حاسبة Sauditoolhub
        </Link>{' '}
        المجانية لحساب تكاليف عائلتك بدقة.
      </p>

      <div className="not-prose glass p-6 rounded-xl mt-8 text-center">
        <p className="text-gray-400 text-sm">آخر تحديث: يوليو 2026 · بناءً على لوائح وزارة الداخلية وجداول رسوم الجوازات</p>
      </div>
    </article>
  )
}

function UrContent() {
  return (
    <article className="prose prose-invert max-w-none prose-headings:text-desert-primary prose-a:text-desert-primary prose-strong:text-white prose-li:text-gray-300" dir="rtl">
      <h1>سعودی عرب میں خاندانی ویزا اور تابعین فیس کا مکمل گائیڈ 2026</h1>

      <div className="not-prose glass p-6 rounded-xl mb-8">
        <p className="text-gray-300 text-lg leading-relaxed">
          اپنے خاندان کو سعودی عرب میں اپنے ساتھ لانا ایک مقیم کی حیثیت سے سب سے فائدہ مند فیصلوں میں سے ایک ہے۔ بیوی اور بچوں کا آپ کے ساتھ ہونا، مشترکہ تجربات، اور خاندانی زندگی کا سکون — یہ خواب ہے۔
        </p>
        <p className="text-gray-300 text-lg leading-relaxed mt-4">
          لیکن اس خواب کے ساتھ ایک بڑی مالی ذمہ داری بھی آتی ہے۔ تابعین فیس، اقامہ فیس، طبی بیمہ، اور ایگزٹ/ری انٹری ویزا کے درمیان، سعودی عرب میں خاندان کی کفالت کی سالانہ لاگت 15,000 سے 30,000 ریال یا اس سے بھی زیادہ ہو سکتی ہے۔
        </p>
        <p className="text-gray-300 text-lg leading-relaxed mt-4">
          بہت سے تارکین وطن ان اخراجات کو کم سمجھتے ہیں اور تجدید کے وقت ناخوشگوار حیرتوں کا سامنا کرتے ہیں۔ یہ جامع گائیڈ ہر فیس کو تفصیل سے بیان کرتا ہے اور عملی بچت کی حکمت عملی پیش کرتا ہے۔{' '}
          <Link href="/family-visa-optimizer" className="text-desert-primary font-bold underline">
            Sauditoolhub فیملی ویزا آپٹیمائزر
          </Link>{' '}
          استعمال کریں۔
        </p>
      </div>

      <h2>تابعین فیس (ایکسپیٹ لیوی) کیا ہے؟</h2>
      <p>تابعین فیس ایک ماہانہ چارج ہے جو سعودی وزارت داخلہ کی طرف سے ان تارکین وطن پر عائد کیا جاتا ہے جو اپنے خاندان کے افراد کو کفالت کرتے ہیں۔ یہ فیس سعودی عرب کی مالی اصلاحات کے حصے کے طور پر متعارف کرائی گئی تھی اور اس کا اطلاق کارکن کی اہلیہ اور تمام زیر کفالت بچوں پر ہوتا ہے۔</p>

      <div className="not-prose glass p-4 rounded-xl mb-6">
        <h3 className="text-white font-bold mb-3">تابعین فیس ایک نظر میں</h3>
        <ul className="space-y-2 text-gray-300">
          <li><strong className="text-desert-primary">ماہانہ شرح:</strong> 400 ریال فی تابع۔</li>
          <li><strong className="text-desert-primary">سالانہ لاگت فی تابع:</strong> 4,800 ریال۔</li>
          <li><strong className="text-desert-primary">ادا کرنے والا:</strong> کفیل (ملازم)۔</li>
          <li><strong className="text-desert-primary">وصولی کا طریقہ:</strong> سالانہ پیشگی ابشر یا سداد کے ذریعے۔</li>
          <li><strong className="text-desert-primary">عدم ادائیگی کے نتائج:</strong> جرمانے، ویزا میں تاخیر، ممکنہ ملک بدری۔</li>
        </ul>
      </div>

      <h2>خاندانی ویزا کے اخراجات کی تفصیل (2026 قواعد)</h2>

      <h3>1. ماہانہ تابعین فیس</h3>
      <div className="not-prose glass p-4 rounded-xl mb-6">
        <ul className="space-y-3 text-gray-300">
          <li><strong className="text-desert-primary">فی تابع:</strong> 400 ریال/ماہ = 4,800 ریال/سال۔</li>
          <li><strong className="text-desert-primary">بیوی + 1 بچہ:</strong> 800 ریال/ماہ = 9,600 ریال/سال۔</li>
          <li><strong className="text-desert-primary">بیوی + 2 بچے:</strong> 1,200 ریال/ماہ = 14,400 ریال/سال۔</li>
          <li><strong className="text-desert-primary">بیوی + 3 بچے:</strong> 1,600 ریال/ماہ = 19,200 ریال/سال۔</li>
        </ul>
      </div>

      <h3>2. اقامہ جاری کرنے اور تجدید کی فیس</h3>
      <div className="not-prose glass p-4 rounded-xl mb-6">
        <ul className="space-y-3 text-gray-300">
          <li><strong className="text-desert-primary">نیا اقامہ:</strong> 2,000 ریال فی تابع۔</li>
          <li><strong className="text-desert-primary">سالانہ تجدید:</strong> 2,000 ریال فی تابع۔</li>
        </ul>
      </div>

      <h3>3. ایگزٹ/ری انٹری ویزا فیس</h3>
      <div className="not-prose glass p-4 rounded-xl mb-6">
        <ul className="space-y-3 text-gray-300">
          <li><strong className="text-desert-primary">ایک بار ایگزٹ:</strong> 200 ریال فی شخص۔</li>
          <li><strong className="text-desert-primary">متعدد ایگزٹ (6 ماہ):</strong> 3,000 ریال فی شخص۔</li>
          <li><strong className="text-desert-primary">متعدد ایگزٹ (1 سال):</strong> 5,000 ریال فی شخص۔</li>
        </ul>
      </div>

      <h2>حساب کتاب کا مرحلہ وار طریقہ</h2>
      <div className="not-prose glass p-6 rounded-xl mb-8">
        <ol className="space-y-4 text-gray-300 list-decimal list-inside">
          <li><strong>مرحلہ 1:</strong> اپنے زیر کفالت افراد گنیں (بیوی اور 18 سال سے کم بچے)۔</li>
          <li><strong>مرحلہ 2:</strong> سالانہ تابعین فیس لگائیں: زیر کفالت افراد × 4,800 ریال۔</li>
          <li><strong>مرحلہ 3:</strong> اقامہ فیس شامل کریں: زیر کفالت افراد × 2,000 ریال۔</li>
          <li><strong>مرحلہ 4:</strong> ایگزٹ/ری انٹری ویزا کے اخراجات کا اندازہ لگائیں۔</li>
          <li><strong>مرحلہ 5:</strong> طبی بیمہ کے اخراجات شامل کریں۔</li>
          <li><strong>مرحلہ 6:</strong> اگر قابل اطلاق ہو تو ورک پرمٹ فیس شامل کریں۔</li>
          <li><strong>مرحلہ 7:</strong> تمام اخراجات جمع کر کے سالانہ بجٹ حاصل کریں۔</li>
        </ol>
      </div>

      <h3>مثال: بیوی + 2 بچے</h3>
      <div className="not-prose glass p-4 rounded-xl mb-6">
        <p className="text-gray-300">سالانہ تابعین فیس: 3 × 4,800 = <strong>14,400 ریال</strong></p>
        <p className="text-gray-300">اقامہ کی تجدید: 3 × 2,000 = <strong>6,000 ریال</strong></p>
        <p className="text-gray-300">طبی بیمہ: <strong>4,500 ریال</strong></p>
        <p className="text-gray-300">ایگزٹ/ری انٹری ویزا: <strong>3,600 ریال</strong></p>
        <div className="border-t border-gray-600 pt-1 mt-1">
          <p className="text-desert-primary font-bold">کل سالانہ لاگت: تقریباً 28,500 ریال</p>
        </div>
      </div>

      <h2>خاص صورتیں</h2>

      <div className="not-prose glass p-4 rounded-xl mb-6">
        <h3 className="text-white font-bold mb-3 flex items-center gap-2"><AlertTriangle className="h-5 w-5 text-desert-primary" /> بچے کی عمر 18 سال ہونا</h3>
        <p className="text-gray-300">جب بچہ 18 سال کا ہو جائے تو وہ والد کی کفالت میں تابع اقامہ کا اہل نہیں رہتا۔ اختیارات: والدہ کی کفالت، ورک ویزا، پریمیم رہائش، یا ملک چھوڑنا۔</p>
      </div>

      <div className="not-prose glass p-4 rounded-xl mb-6">
        <h3 className="text-white font-bold mb-3 flex items-center gap-2"><AlertTriangle className="h-5 w-5 text-desert-primary" /> کفیل کی نوکری ختم ہونا</h3>
        <p className="text-gray-300">نوکری ختم ہونے پر 30-90 دن کی گریس پیریڈ ملتی ہے۔ استعمال کریں{' '}
          <Link href="/jawazat-fine-calculator" className="text-desert-primary font-bold underline">
            جاوزات جرمانہ کیلکولیٹر
          </Link>
          {' '} ممکنہ جرمانے دیکھنے کے لیے۔
        </p>
      </div>

      <h2>Sauditoolhub کیلکولیٹر استعمال کریں</h2>
      <div className="not-prose glass p-6 rounded-xl mb-8 text-center">
        <p className="text-gray-300 mb-4">
          <Link href="/family-visa-optimizer" className="text-desert-primary font-bold underline">
            Sauditoolhub فیملی ویزا آپٹیمائزر
          </Link>{' '}
          سیکنڈوں میں درست تخمینہ دیتا ہے۔
        </p>
        <Link href="/family-visa-optimizer" className="inline-flex items-center gap-2 rounded-xl bg-desert-primary px-8 py-3 text-sm font-bold text-white transition-all hover:bg-desert-primary-dim">
          <Calculator className="h-4 w-4" />
          مفت کیلکولیٹر استعمال کریں
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
      <p>سعودی عرب میں خاندان کی کفالت ایک بڑی مالی ذمہ داری ہے جس کے لیے منصوبہ بندی ضروری ہے۔ صحیح اوزار اور معلومات کے ساتھ، آپ مؤثر طریقے سے بجٹ بنا سکتے ہیں۔</p>

      <div className="not-prose glass p-6 rounded-xl mt-8 text-center">
        <p className="text-gray-400 text-sm">آخری اپ ڈیٹ: جولائی 2026 · سعودی وزارت داخلہ کے قواعد پر مبنی</p>
      </div>
    </article>
  )
}

function TlContent() {
  return (
    <article className="prose prose-invert max-w-none prose-headings:text-desert-primary prose-a:text-desert-primary prose-strong:text-white prose-li:text-gray-300">
      <h1>Kumpletong Gabay sa Family Visa at Dependent Fees sa Saudi Arabia 2026</h1>

      <div className="not-prose glass p-6 rounded-xl mb-8">
        <p className="text-gray-300 text-lg leading-relaxed">
          Ang pagdadala ng iyong pamilya upang manirahan sa Saudi Arabia ay isa sa mga pinakamagandang desisyon na maaari mong gawin bilang expat. Ang iyong asawa at mga anak sa iyong tabi, mga pinagsamang karanasan, at ang kaginhawaan ng buhay pampamilya sa Kaharian — iyon ang pangarap.
        </p>
        <p className="text-gray-300 text-lg leading-relaxed mt-4">
          Ngunit ang pangarap na iyon ay may malaking pinansiyal na responsibilidad. Sa pagitan ng expat dependent levy, Iqama fees, medical insurance, at Exit/Re-Entry visas, ang taunang gastos ng pag-sponsor ng pamilya sa Saudi Arabia ay madaling umaabot mula SAR 15,000 hanggang SAR 30,000 o higit pa.
        </p>
        <p className="text-gray-300 text-lg leading-relaxed mt-4">
          Maraming expats ang hindi nakaalam sa mga gastos na ito at nakakaranas ng hindi magandang sorpresa pagdating ng renewal. Ang komprehensibong gabay na ito ay nagpapaliwanag ng bawat bayad at nagbibigay ng praktikal na paraan upang makatipid. Gamitin ang{' '}
          <Link href="/family-visa-optimizer" className="text-desert-primary font-bold underline">
            Sauditoolhub Family Visa Optimizer
          </Link>{' '}
          para sa instant na personalisadong tantiya.
        </p>
      </div>

      <h2>Ano ang Dependent Fee (Expat Levy)?</h2>
      <p>Ang dependent fee ay isang buwanang singil na ipinapataw ng Saudi Ministry of Interior sa mga expatriate na nag-sponsor ng mga miyembro ng pamilya sa Kaharian. Ipinakilala ito bilang bahagi ng fiscal reforms ng Saudi Arabia at naaangkop sa asawa at lahat ng anak na naka-sponsor sa ilalim ng Iqama ng manggagawa.</p>

      <div className="not-prose glass p-4 rounded-xl mb-6">
        <h3 className="text-white font-bold mb-3">Dependent Fee sa Isang Sulyap</h3>
        <ul className="space-y-2 text-gray-300">
          <li><strong className="text-desert-primary">Buwanang halaga:</strong> SAR 400 bawat dependent.</li>
          <li><strong className="text-desert-primary">Taunang gastos bawat dependent:</strong> SAR 4,800.</li>
          <li><strong className="text-desert-primary">Sino ang nagbabayad:</strong> Ang expat sponsor (empleyado).</li>
          <li><strong className="text-desert-primary">Paraan ng pagkolekta:</strong> Taunang lump sum sa pamamagitan ng Absher o SADAD.</li>
          <li><strong className="text-desert-primary">Bunga ng hindi pagbabayad:</strong> Mga multa, pagkaantala ng visa, posibleng deportasyon.</li>
        </ul>
      </div>

      <h2>Detalyadong Gastos ng Family Visa (2026 Rules)</h2>

      <h3>1. Buwanang Dependent Levy</h3>
      <div className="not-prose glass p-4 rounded-xl mb-6">
        <ul className="space-y-3 text-gray-300">
          <li><strong className="text-desert-primary">Bawat dependent:</strong> SAR 400/buwan = SAR 4,800/taon.</li>
          <li><strong className="text-desert-primary">Asawa + 1 anak:</strong> SAR 800/buwan = SAR 9,600/taon.</li>
          <li><strong className="text-desert-primary">Asawa + 2 anak:</strong> SAR 1,200/buwan = SAR 14,400/taon.</li>
          <li><strong className="text-desert-primary">Asawa + 3 anak:</strong> SAR 1,600/buwan = SAR 19,200/taon.</li>
        </ul>
      </div>

      <h3>2. Iqama Issuance at Renewal Fees</h3>
      <div className="not-prose glass p-4 rounded-xl mb-6">
        <ul className="space-y-3 text-gray-300">
          <li><strong className="text-desert-primary">Bagong Iqama:</strong> SAR 2,000 bawat dependent.</li>
          <li><strong className="text-desert-primary">Taunang renewal:</strong> SAR 2,000 bawat dependent.</li>
        </ul>
      </div>

      <h3>3. Exit/Re-Entry Visa Fees</h3>
      <div className="not-prose glass p-4 rounded-xl mb-6">
        <ul className="space-y-3 text-gray-300">
          <li><strong className="text-desert-primary">Single Exit:</strong> SAR 200 bawat tao.</li>
          <li><strong className="text-desert-primary">Multiple Exit (6 buwan):</strong> SAR 3,000 bawat tao.</li>
          <li><strong className="text-desert-primary">Multiple Exit (1 taon):</strong> SAR 5,000 bawat tao.</li>
        </ul>
      </div>

      <h2>Step-by-Step na Pagkalkula</h2>
      <div className="not-prose glass p-6 rounded-xl mb-8">
        <ol className="space-y-4 text-gray-300 list-decimal list-inside">
          <li><strong>Step 1:</strong> Bilangin ang iyong mga dependent.</li>
          <li><strong>Step 2:</strong> Taunang levy: bilang ng dependent x SAR 4,800.</li>
          <li><strong>Step 3:</strong> Iqama fees: bilang ng dependent x SAR 2,000.</li>
          <li><strong>Step 4:</strong> Tantiyahin ang Exit/Re-Entry visa costs.</li>
          <li><strong>Step 5:</strong> Medical insurance para sa lahat ng dependent.</li>
          <li><strong>Step 6:</strong> Work permit fees kung applicable.</li>
          <li><strong>Step 7:</strong> Isama lahat para sa taunang budget.</li>
        </ol>
      </div>

      <h3>Halimbawa: Asawa + 2 Anak</h3>
      <div className="not-prose glass p-4 rounded-xl mb-6">
        <p className="text-gray-300">Taunang dependent levy: 3 x SAR 4,800 = <strong>SAR 14,400</strong></p>
        <p className="text-gray-300">Iqama renewal: 3 x SAR 2,000 = <strong>SAR 6,000</strong></p>
        <p className="text-gray-300">Medical insurance: <strong>SAR 4,500</strong></p>
        <p className="text-gray-300">Exit/Re-Entry visas: <strong>SAR 3,600</strong></p>
        <div className="border-t border-gray-600 pt-1 mt-1">
          <p className="text-desert-primary font-bold">Kabuuang taunang gastos: humigit-kumulang SAR 28,500</p>
        </div>
      </div>

      <h2>Paano Gamitin ang Sauditoolhub Family Visa Optimizer</h2>
      <div className="not-prose glass p-6 rounded-xl mb-8 text-center">
        <p className="text-gray-300 mb-4">
          Ang{' '}
          <Link href="/family-visa-optimizer" className="text-desert-primary font-bold underline">
            Sauditoolhub Family Visa Optimizer
          </Link>{' '}
          ay nagbibigay ng instant at tamang tantiya sa ilang segundo.
        </p>
        <Link href="/family-visa-optimizer" className="inline-flex items-center gap-2 rounded-xl bg-desert-primary px-8 py-3 text-sm font-bold text-white transition-all hover:bg-desert-primary-dim">
          <Calculator className="h-4 w-4" />
          Gamitin ang Libreng Calculator
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
      <p>Ang pag-sponsor ng pamilya sa Saudi Arabia ay isang malaking pinansiyal na pangako. Gamit ang tamang tools at kaalaman, maaari kang mag-budget nang epektibo at maiwasan ang mga hindi inaasahang gastos.</p>

      <div className="not-prose glass p-6 rounded-xl mt-8 text-center">
        <p className="text-gray-400 text-sm">Huling na-update: Hulyo 2026 · Batay sa regulasyon ng Ministry of Interior ng Saudi</p>
      </div>
    </article>
  )
}

function BnContent() {
  return (
    <article className="prose prose-invert max-w-none prose-headings:text-desert-primary prose-a:text-desert-primary prose-strong:text-white prose-li:text-gray-300">
      <h1>সৌদি আরবে ফ্যামিলি ভিসা ও ডিপেন্ডেন্ট ফি-র সম্পূর্ণ গাইড 2026</h1>

      <div className="not-prose glass p-6 rounded-xl mb-8">
        <p className="text-gray-300 text-lg leading-relaxed">
          সৌদি আরবে আপনার পরিবারকে নিয়ে আসা একজন প্রবাসী হিসেবে সবচেয়ে ফলপ্রসূ সিদ্ধান্তগুলোর মধ্যে একটি। আপনার পাশে স্ত্রী এবং সন্তান, ভাগ করা অভিজ্ঞতা এবং রাজ্যে পারিবারিক জীবনের আরাম — এটাই স্বপ্ন।
        </p>
        <p className="text-gray-300 text-lg leading-relaxed mt-4">
          কিন্তু এই স্বপ্নের সাথে একটি বড় আর্থিক দায়িত্ব আসে। এক্সপ্যাট ডিপেন্ডেন্ট লেভি, ইকামা ফি, মেডিকেল ইন্স্যুরেন্স এবং এক্সিট/রি-এন্ট্রি ভিসার মধ্যে, সৌদি আরবে পরিবারের স্পনসরশিপের বার্ষিক খরচ সহজেই SAR ১৫,০০০ থেকে SAR ৩০,০০০ বা তার বেশি হতে পারে।
        </p>
        <p className="text-gray-300 text-lg leading-relaxed mt-4">
          এই বিস্তৃত গাইডটি প্রতিটি ফি ভেঙে ব্যাখ্যা করে এবং সাশ্রয়ের ব্যবহারিক কৌশল দেয়। ব্যবহার করুন{' '}
          <Link href="/family-visa-optimizer" className="text-desert-primary font-bold underline">
            Sauditoolhub ফ্যামিলি ভিসা অপটিমাইজার
          </Link>{' '}
          তাৎক্ষণিক ব্যক্তিগতকৃত অনুমানের জন্য।
        </p>
      </div>

      <h2>ডিপেন্ডেন্ট ফি (এক্সপ্যাট লেভি) কী?</h2>
      <p>ডিপেন্ডেন্ট ফি হল একটি মাসিক চার্জ যা সৌদি স্বরাষ্ট্র মন্ত্রণালয় রাজ্যে পরিবারের সদস্যদের স্পনসরকারী প্রবাসীদের উপর আরোপ করে। এটি সৌদি আরবের রাজস্ব সংস্কারের অংশ হিসেবে চালু করা হয়েছিল এবং কর্মীর স্ত্রী ও সমস্ত সন্তানের ক্ষেত্রে প্রযোজ্য।</p>

      <div className="not-prose glass p-4 rounded-xl mb-6">
        <h3 className="text-white font-bold mb-3">এক নজরে ডিপেন্ডেন্ট ফি</h3>
        <ul className="space-y-2 text-gray-300">
          <li><strong className="text-desert-primary">মাসিক হার:</strong> SAR ৪০০ প্রতি ডিপেন্ডেন্ট।</li>
          <li><strong className="text-desert-primary">বার্ষিক খরচ:</strong> SAR ৪,৮০০ প্রতি ডিপেন্ডেন্ট।</li>
          <li><strong className="text-desert-primary">কে দেয়:</strong> প্রবাসী স্পনসর (কর্মচারী)।</li>
          <li><strong className="text-desert-primary">আদায়ের পদ্ধতি:</strong> বার্ষিক lump sum, Absher বা SADAD-এর মাধ্যমে।</li>
          <li><strong className="text-desert-primary">অ-প্রদানের ফলাফল:</strong> জরিমানা, ভিসা বিলম্ব, সম্ভাব্য নির্বাসন।</li>
        </ul>
      </div>

      <h2>ফ্যামিলি ভিসা খরচের বিস্তারিত (2026 নিয়ম)</h2>

      <h3>1. মাসিক ডিপেন্ডেন্ট লেভি</h3>
      <div className="not-prose glass p-4 rounded-xl mb-6">
        <ul className="space-y-3 text-gray-300">
          <li><strong className="text-desert-primary">প্রতি ডিপেন্ডেন্ট:</strong> SAR ৪০০/মাস = SAR ৪,৮০০/বছর।</li>
          <li><strong className="text-desert-primary">স্ত্রী + ১ সন্তান:</strong> SAR ৮০০/মাস = SAR ৯,৬০০/বছর।</li>
          <li><strong className="text-desert-primary">স্ত্রী + ২ সন্তান:</strong> SAR ১,২০০/মাস = SAR ১৪,৪০০/বছর।</li>
          <li><strong className="text-desert-primary">স্ত্রী + ৩ সন্তান:</strong> SAR ১,৬০০/মাস = SAR ১৯,২০০/বছর।</li>
        </ul>
      </div>

      <h3>2. ইকামা ইস্যু ও নবায়ন ফি</h3>
      <div className="not-prose glass p-4 rounded-xl mb-6">
        <ul className="space-y-3 text-gray-300">
          <li><strong className="text-desert-primary">নতুন ইকামা:</strong> SAR ২,০০০ প্রতি ডিপেন্ডেন্ট।</li>
          <li><strong className="text-desert-primary">বার্ষিক নবায়ন:</strong> SAR ২,০০০ প্রতি ডিপেন্ডেন্ট।</li>
        </ul>
      </div>

      <h3>3. এক্সিট/রি-এন্ট্রি ভিসা ফি</h3>
      <div className="not-prose glass p-4 rounded-xl mb-6">
        <ul className="space-y-3 text-gray-300">
          <li><strong className="text-desert-primary">একক এক্সিট:</strong> SAR ২০০ প্রতি ব্যক্তি।</li>
          <li><strong className="text-desert-primary">একাধিক (৬ মাস):</strong> SAR ৩,০০০ প্রতি ব্যক্তি।</li>
          <li><strong className="text-desert-primary">একাধিক (১ বছর):</strong> SAR ৫,০০০ প্রতি ব্যক্তি।</li>
        </ul>
      </div>

      <h2>ধাপে ধাপে গণনা নির্দেশিকা</h2>
      <div className="not-prose glass p-6 rounded-xl mb-8">
        <ol className="space-y-4 text-gray-300 list-decimal list-inside">
          <li><strong>ধাপ ১:</strong> আপনার ডিপেন্ডেন্ট গণনা করুন।</li>
          <li><strong>ধাপ ২:</strong> বার্ষিক লেভি: ডিপেন্ডেন্ট সংখ্যা x SAR ৪,৮০০।</li>
          <li><strong>ধাপ ৩:</strong> ইকামা ফি: ডিপেন্ডেন্ট সংখ্যা x SAR ২,০০০।</li>
          <li><strong>ধাপ ৪:</strong> এক্সিট/রি-এন্ট্রি ভিসা খরচ অনুমান করুন।</li>
          <li><strong>ধাপ ৫:</strong> মেডিকেল ইন্স্যুরেন্স যোগ করুন।</li>
          <li><strong>ধাপ ৬:</strong> ওয়ার্ক পারমিট ফি (যদি প্রযোজ্য) যোগ করুন।</li>
          <li><strong>ধাপ ৭:</strong> বার্ষিক বাজেটের জন্য সব খরচ যোগ করুন।</li>
        </ol>
      </div>

      <h3>উদাহরণ: স্ত্রী + ২ সন্তান</h3>
      <div className="not-prose glass p-4 rounded-xl mb-6">
        <p className="text-gray-300">বার্ষিক ডিপেন্ডেন্ট লেভি: ৩ x SAR ৪,৮০০ = <strong>SAR ১৪,৪০০</strong></p>
        <p className="text-gray-300">ইকামা নবায়ন: ৩ x SAR ২,০০০ = <strong>SAR ৬,০০০</strong></p>
        <p className="text-gray-300">মেডিকেল ইন্স্যুরেন্স: <strong>SAR ৪,৫০০</strong></p>
        <p className="text-gray-300">এক্সিট/রি-এন্ট্রি ভিসা: <strong>SAR ৩,৬০০</strong></p>
        <div className="border-t border-gray-600 pt-1 mt-1">
          <p className="text-desert-primary font-bold">মোট বার্ষিক খরচ: প্রায় SAR ২৮,৫০০</p>
        </div>
      </div>

      <h2>Sauditoolhub ক্যালকুলেটর ব্যবহার করুন</h2>
      <div className="not-prose glass p-6 rounded-xl mb-8 text-center">
        <p className="text-gray-300 mb-4">
          <Link href="/family-visa-optimizer" className="text-desert-primary font-bold underline">
            Sauditoolhub ফ্যামিলি ভিসা অপটিমাইজার
          </Link>{' '}
          সেকেন্ডের মধ্যে সঠিক অনুমান দেয়।
        </p>
        <Link href="/family-visa-optimizer" className="inline-flex items-center gap-2 rounded-xl bg-desert-primary px-8 py-3 text-sm font-bold text-white transition-all hover:bg-desert-primary-dim">
          <Calculator className="h-4 w-4" />
          বিনামূল্যে ক্যালকুলেটর ব্যবহার করুন
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
      <p>সৌদি আরবে পরিবারের স্পনসরশিপ একটি বড় আর্থিক বাধ্যবাধকতা। সঠিক সরঞ্জাম এবং জ্ঞানের সাথে, আপনি কার্যকরভাবে বাজেট করতে পারেন এবং অপ্রত্যাশিত খরচ এড়াতে পারেন।</p>

      <div className="not-prose glass p-6 rounded-xl mt-8 text-center">
        <p className="text-gray-400 text-sm">সর্বশেষ আপডেট: জুলাই ২০২৬ · সৌদি স্বরাষ্ট্র মন্ত্রণালয়ের নিয়মের ভিত্তিতে</p>
      </div>
    </article>
  )
}

export default async function FamilyVisaGuidePage({ params }: Props) {
  const { locale } = await params
  const isAr = locale === 'ar'
  const isUr = locale === 'ur'
  const isTl = locale === 'tl'
  const isBn = locale === 'bn'
  const isDefault = locale === 'en'
  const pageUrl = isDefault ? `${baseUrl}/guide/family-visa-dependent-fee-calculator-saudi-arabia-2026` : `${baseUrl}/${locale}/guide/family-visa-dependent-fee-calculator-saudi-arabia-2026`

  return (
    <>
      <ArticleJsonLd
        headline={isAr ? schemaAr.headline : isUr ? schemaUr.headline : isTl ? schemaTl.headline : isBn ? schemaBn.headline : articleSchemaEn.headline}
        description={isAr ? schemaAr.description : isUr ? schemaUr.description : isTl ? schemaTl.description : isBn ? schemaBn.description : articleSchemaEn.description}
        datePublished="2026-01-01"
        dateModified="2026-07-01"
      />
      <BreadcrumbJsonLd
        items={[
          { name: isAr ? 'الرئيسية' : isUr ? 'ہوم' : isTl ? 'Bahay' : isBn ? 'হোম' : 'Home', url: baseUrl },
          { name: isAr ? 'أدلة المقيمين' : isUr ? 'مقیم گائیڈز' : isTl ? 'Gabay para sa Expat' : isBn ? 'প্রবাসী গাইড' : 'Expats Guides', url: `${baseUrl}/${isDefault ? '' : locale + '/'}expats-tools` },
          { name: isAr ? 'دليل تأشيرة العائلة' : isUr ? 'فیملی ویزا گائیڈ' : isTl ? 'Gabay sa Family Visa' : isBn ? 'ফ্যামিলি ভিসা গাইড' : 'Family Visa Guide', url: pageUrl },
        ]}
      />
      <FAQJsonLd items={isAr ? faqsAr : isUr ? faqsUr : isTl ? faqsTl : isBn ? faqsBn : faqsEn} />

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
