import type { Metadata } from 'next'
import Link from 'next/link'
import { GlassCard } from '@/components/GlassCard'

type Props = { params: Promise<{ locale: string }> }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params
  const isDefault = locale === 'en'
  const base = '/guide/ejar-deposit-rental-guide-saudi-arabia-2026'
  const baseUrl = 'https://sauditoolhub.com'
  const titles: Record<string, string> = {
    en: 'Free Ejar Deposit & Rental Guide Saudi Arabia 2026',
    ar: 'دليل الإيجار والتأمين المجاني في السعودية 2026',
    ur: 'مفت ایجار ڈیپازٹ گائیڈ سعودی عرب 2026',
    tl: 'Libreng Ejar Deposit & Rental Guide Saudi Arabia 2026',
    bn: 'ফ্রি ইজার ডিপোজিট গাইড সৌদি আরব 2026',
  }
  const descriptions: Record<string, string> = {
    en: 'Free Ejar contracts and rental deposit guide for Saudi Arabia 2026. Check deposit refund rules and your tenant rights instantly. Check now.',
    ar: 'دليل مجاني لعقود الإيجار واسترداد التأمين في السعودية 2026. تحقق من قواعد استرداد التأمين وحقوقك كمستأجر فوراً.',
    ur: 'سعودی عرب 2026 کے لیے مفت ایجار کنٹریکٹ اور کرایہ ڈیپازٹ گائیڈ۔ ڈیپازٹ ریفنڈ کے قواعد فوراً چیک کریں۔',
    tl: 'Libreng gabay sa Ejar contracts at rental deposit para sa Saudi Arabia 2026. I-check agad ang deposit refund rules at tenant rights.',
    bn: 'সৌদি আরব ২০২৬-এর জন্য ফ্রি ইজার চুক্তি ও ভাড়া জমা গাইড। এখনই জমা ফেরতের নিয়ম ও ভাড়াটে অধিকার দেখুন।',
  }
  const title = titles[locale] || titles.en
  const description = descriptions[locale] || descriptions.en
  const canonical = isDefault ? `${baseUrl}${base}` : `${baseUrl}/${locale}${base}`
  return {
    title,
    description,
    alternates: {
      canonical,
      languages: {
        en: `${baseUrl}${base}`,
        ar: `${baseUrl}/ar${base}`,
        ur: `${baseUrl}/ur${base}`,
        tl: `${baseUrl}/tl${base}`,
        bn: `${baseUrl}/bn${base}`,
      },
    },
  }
}

const articleSchemaEn = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": 'The Complete Guide to Ejar Contracts & Rental Deposit Refunds in Saudi Arabia 2026',
  "description": 'Learn how Ejar rental contracts work in Saudi Arabia 2026. Understand tenant rights, security deposit (Daman) refund rules, and how to handle deposit disputes with landlords.',
  "author": { "@type": "Organization", "name": "Sauditoolhub" },
  "datePublished": "2026-07-01",
  "dateModified": "2026-07-28"
}

const articleSchemaAr = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": 'الدليل الشامل لعقود الإيجار واسترداد التأمين في السعودية 2026',
  "description": 'تعرف على عقود الإيجار الإلكترونية عبر إيجار في السعودية 2026. فهم حقوق المستأجر، قواعد استرداد التأمين، وكيفية التعامل مع النزاعات الإيجارية.',
  "author": { "@type": "Organization", "name": "Sauditoolhub" },
  "datePublished": "2026-07-01",
  "dateModified": "2026-07-28"
}

const articleSchemaUr = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": 'سعودی عرب میں ایجار کنٹریکٹس اور کرایہ ڈیپازٹ ریفنڈ کا مکمل گائیڈ 2026',
  "description": 'سعودی عرب 2026 میں ایجار رینٹل کنٹریکٹس کے بارے میں جانیں۔ کرایہ دار کے حقوق، سیکیورٹی ڈیپازٹ ریفنڈ کے قواعد، اور ڈسپیوٹس کو سمجھیں۔',
  "author": { "@type": "Organization", "name": "Sauditoolhub" },
  "datePublished": "2026-07-01",
  "dateModified": "2026-07-28"
}

const articleSchemaTl = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": 'Gabay sa Ejar Contracts at Pag-refund ng Rental Deposit sa Saudi Arabia 2026',
  "description": 'Alamin kung paano gumagana ang Ejar rental contracts sa Saudi Arabia 2026. Unawain ang tenant rights, security deposit refund rules, at paano humawak ng deposit disputes.',
  "author": { "@type": "Organization", "name": "Sauditoolhub" },
  "datePublished": "2026-07-01",
  "dateModified": "2026-07-28"
}

const articleSchemaBn = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": 'সৌদি আরবে ইজার চুক্তি ও ভাড়া জমা ফেরতের সম্পূর্ণ গাইড 2026',
  "description": 'সৌদি আরব 2026-এ ইজার রেন্টাল চুক্তি কীভাবে কাজ করে তা জানুন। ভাড়াটিয়ার অধিকার, সিকিউরিটি ডিপোজিট ফেরতের নিয়ম এবং বিবাদ মোকাবেলা বুঝুন।',
  "author": { "@type": "Organization", "name": "Sauditoolhub" },
  "datePublished": "2026-07-01",
  "dateModified": "2026-07-28"
}

const faqsEn = [
  { question: 'How much is the security deposit (Daman) for rental apartments in Saudi Arabia?', answer: 'In Saudi Arabia, the standard security deposit is typically one month\'s rent for unfurnished apartments and up to two months\' rent for fully furnished properties. The exact amount is negotiable and specified in your Ejar contract. Under the Ejar system, the deposit is registered and protected, ensuring it cannot be misused by the landlord.' },
  { question: 'What can a landlord legally deduct from my security deposit?', answer: 'Landlords can only deduct for: unpaid rent, unpaid utility bills (SEC electricity, National Water Company, internet), and actual damages beyond normal wear and tear. This includes broken fixtures, damaged AC units, large holes in walls, or stained carpets that require replacement. They CANNOT deduct for normal wear and tear such as minor paint fading, small nail holes, or natural aging of appliances.' },
  { question: 'What is the difference between normal wear and tear vs actual damage in Saudi rentals?', answer: 'Normal wear and tear includes: minor scuffs on walls, fading paint from sunlight, worn carpet in high-traffic areas, and naturally aging appliances. Actual damage includes: ripped carpets, broken windows, damaged AC units from misuse, large holes in walls, or missing fixtures. The distinction matters because landlords can only charge for actual damage, not normal wear.' },
  { question: 'How do I file a dispute against my landlord for deposit refund on Ejar?', answer: 'Log into the Ejar platform (ejar.sa), go to your contract, and use the "Dispute" feature. You can also escalate through the Ministry of Justice\'s Najiz portal or file a case with the Rental Dispute Committee (RDC). Key evidence includes: your Ejar contract, bank transfer receipts for rent and utilities, dated photos/videos of the property condition, and written communication with the landlord.' },
  { question: 'Can my landlord keep my deposit if I break the lease early?', answer: 'Yes, generally the landlord can keep part or all of your deposit if you break the lease before the contract ends, unless there is a valid early termination clause in your Ejar contract. However, the landlord must still deduct only for actual losses and damages. If they re-rent the property quickly, they may not be entitled to keep the full deposit.' },
  { question: 'How long does it take to get my deposit back after moving out?', answer: 'Under the Ejar system, the landlord typically has up to 30 days after move-out to inspect the property and return the deposit. If there are deductions, the landlord must provide a detailed breakdown with supporting evidence. If no dispute is raised, the full deposit should be returned within this period via bank transfer.' },
  { question: 'Is it mandatory to have an Ejar contract in Saudi Arabia?', answer: 'Yes, as of 2026, it is illegal to rent or lease any property in Saudi Arabia without a registered Ejar contract. The Ejar system is mandatory for all rental transactions. Renting without it means you have no legal protection, no recourse for disputes, and you cannot access certain government services that require proof of residence.' },
  { question: 'What should I do if my landlord refuses to give an Ejar contract?', answer: 'If your landlord refuses to register an Ejar contract, you can report them through the Ejar platform or contact the Ministry of Municipal and Rural Affairs and Housing. Renting without Ejar is illegal, and the landlord can face fines and penalties. You should also consider finding a different property, as you will have zero legal protection without a registered contract.' },
  { question: 'Do I need to professionally clean the apartment before moving out?', answer: 'While not legally mandatory, professional cleaning is strongly recommended to avoid disputes over cleanliness deductions. A standard cleaning receipt (usually 200-500 SAR) serves as evidence that you returned the property in good condition. Take photos after cleaning to document the state of the apartment.' },
  { question: 'Can I avoid deposit deductions by repairing damage myself?', answer: 'Yes, repairing minor damages yourself before the final inspection is often cheaper and prevents inflated charges by the landlord. For example, if you break a light fixture, replacing it yourself might cost 50 SAR, whereas the landlord might charge 200 SAR. Keep all repair receipts as evidence. However, for major damage, professional repair is recommended.' },
]

const faqsAr = [
  { question: 'كم تبلغ قيمة التأمين (الوديعة) للشقق السكنية في السعودية؟', answer: 'في السعودية، التأمين المعتاد هو إيجار شهر واحد للشقق غير المفروشة وشهرين للأثاث الكامل. المبلغ يحدد في عقد الإيجار عبر إيجار. التأمين مسجل ومحمي في النظام.' },
  { question: 'ما الذي يمكن للمالك خصمه قانوناً من التأمين؟', answer: 'يمكن خصم: الإيجار غير المدفوع، فواتير الخدمات غير المسددة (الكهرباء، المياه)، والأضرار الفعلية التي تتجاوز البلى الطبيعي مثل الأجهزة المكسورة أو الثقوب الكبيرة. لا يمكن خصم البلى الطبيعي كبهتان الدهان أو ثقوب المسامير الصغيرة.' },
  { question: 'ما الفرق بين البلى الطبيعي والضرر الفعلي في الإيجارات السعودية؟', answer: 'البلى الطبيعي: خدوش بسيطة بالجدران، بهتان الدهان من الشمس، تآكل السجاد في الممرات. الضرر الفعلي: سجاد ممزق، نوافذ مكسورة، مكيف تالف بسبب سوء الاستخدام، ثقوب كبيرة بالجدران.' },
  { question: 'كيف أقدم نزاع ضد المالك على منصة إيجار؟', answer: 'سجل دخول إلى منصة إيجار، اختر العقد، واستخدم خاصية "النزاع". يمكنك التصعيد عبر بوابة ناجز بوزارة العدل أو لجنة فض المنازعات الإيجارية. الأدلة: عقد الإيجار، إيصالات التحويل، صور وفيديو مؤرخة لحالة العقار.' },
  { question: 'هل يمكن للمالك حجز التأمين إذا أنهيت العقد مبكراً؟', answer: 'نعم، يمكنه حجز جزء من التأمين للخسائر الفعلية الناتجة عن الإنهاء المبكر، إلا إذا كان هناك شرط إنهاء مبكر في العقد. إذا أجر العقار لشخص آخر سريعاً، قد لا يحق له حجز كامل التأمين.' },
  { question: 'كم يستغرق استرداد التأمين بعد الإخلاء؟', answer: 'حسب نظام إيجار، للمالك 30 يوماً لفحص العقار وإعادة التأمين. في حالة الخصم، يجب تقديم تفصيل مع الأدلة. إذا لم يكن هناك نزاع، يعاد كامل التأمين خلال هذه الفترة.' },
  { question: 'هل عقد الإيجار عبر إيجار إلزامي في السعودية؟', answer: 'نعم، من 2026 أصبح الإيجار دون عقد إيجار مسجل غير قانوني. نظام إيجار إلزامي لجميع المعاملات الإيجارية. الإيجار بدونه يعني عدم وجود حماية قانونية.' },
  { question: 'ماذا أفعل إذا رفض المالك إعطائي عقد إيجار؟', answer: 'يمكنك الإبلاغ عبر منصة إيجار أو الاتصال بوزارة الشؤون البلدية والقروية والإسكان. الإيجار بدون عقد إيجار غير قانوني ويتعرض المالك للغرامات.' },
  { question: 'هل أحتاج لتنظيف الشقة قبل الإخلاء؟', answer: 'غير إلزامي قانوناً لكن ينصح بشدة. فاتورة التنظيف (200-500 ريال) دليل على إعادة العقار بحالة جيدة. صور بعد التنظيف توثق حالة الشقة.' },
  { question: 'هل يمكن تجنب خصم التأمين بإصلاح الضرر بنفسي؟', answer: 'نعم، إصلاح الأضرار البسيطة بنفسك أرخص ويمنع المبالغة من المالك. مثلاً، تغيير لمبة مكسورة يكلف 50 ريال بينما قد يطلب المالك 200 ريال. احتفظ بإيصالات الإصلاح.' },
]

const faqsUr = [
  { question: 'سعودی عرب میں رینٹل اپارٹمنٹس کے لیے سیکیورٹی ڈیپازٹ کتنا ہے؟', answer: 'عام طور پر غیر فرنشڈ اپارٹمنٹس کے لیے ایک ماہ کا کرایہ اور فرنشڈ کے لیے دو ماہ کا کرایہ ڈیپازٹ رکھا جاتا ہے۔ یہ رقم ایجار کنٹریکٹ میں طے ہوتی ہے۔' },
  { question: 'مالک قانونی طور پر ڈیپازٹ سے کیا کٹوتی کر سکتا ہے؟', answer: 'صرف: غیر ادا شدہ کرایہ، بجلی اور پانی کے بل، اور عام استعمال سے زیادہ کے نقصان۔ عام استعمال کے نقصان جیسے دیواروں کے ہلکے دھبے کٹوتی نہیں کر سکتا۔' },
  { question: 'عام استعمال اور حقیقی نقصان میں کیا فرق ہے؟', answer: 'عام استعمال: دیواروں پر ہلکے نشان، دھوپ سے پینٹ کا ہلکا ہونا، راہداریوں میں قالین کا گھسنا۔ حقیقی نقصان: پھٹا قالین، ٹوٹی کھڑکی، غلط استعمال سے خراب AC۔' },
  { question: 'ایجار پر مالک کے خلاف ڈسپیوٹ کیسے درج کروائیں؟', answer: 'ایجار پلیٹ فارم پر لاگ ان کریں، کنٹریکٹ منتخب کریں، اور ڈسپیوٹ فیچر استعمال کریں۔ وزارت انصاف کے ناجز پورٹل یا رینٹل ڈسپیوٹ کمیٹی سے بھی رجوع کر سکتے ہیں۔' },
  { question: 'کیا جلد معاہدہ ختم کرنے پر مالک ڈیپازٹ روک سکتا ہے؟', answer: 'ہاں، جلد ختم کرنے کے حقیقی نقصان کے لیے ڈیپازٹ روک سکتا ہے۔ لیکن اگر جلد نیا کرایہ دار آ جائے تو پورا ڈیپازٹ نہیں روک سکتا۔' },
  { question: 'ڈیپازٹ واپس آنے میں کتنا وقت لگتا ہے؟', answer: 'ایجار سسٹم کے تحت مالک کو 30 دن تک جائیداد معائنہ اور ڈیپازٹ واپس کرنے کا وقت ہے۔' },
  { question: 'کیا سعودی عرب میں ایجار کنٹریکٹ لازمی ہے؟', answer: 'ہاں، 2026 میں بغیر رجسٹرڈ ایجار کنٹریکٹ کے کرایہ پر دینا غیر قانونی ہے۔' },
  { question: 'اگر مالک ایجار کنٹریکٹ دینے سے انکار کرے تو کیا کروں؟', answer: 'ایجار پلیٹ فارم یا وزارت بلدیات اور ہاؤسنگ سے رپورٹ کریں۔ بغیر ایجار کے کرایہ غیر قانونی ہے۔' },
  { question: 'کیا اپارٹمنٹ خالی کرنے سے پہلے پیشہ ورانہ صفائی ضروری ہے؟', answer: 'قانونی طور پر لازمی نہیں لیکن سختی سے تجویز کی جاتی ہے۔ صفائی کی رسید ثبوت ہے۔' },
  { question: 'کیا خود نقصان مرمت کر کے ڈیپازٹ کٹوتی سے بچ سکتا ہوں؟', answer: 'ہاں، چھوٹی مرمت خود کرنا سستا ہے اور مالک کی زیادہ قیمت لگانے سے بچاتا ہے۔' },
]

const faqsTl = [
  { question: 'Magkano ang security deposit (Daman) para sa rental apartments sa Saudi Arabia?', answer: 'Sa Saudi Arabia, ang standard security deposit ay karaniwang isang buwan\'s rent para sa unfurnished apartments at hanggang dalawang buwan para sa fully furnished properties. Ang eksaktong halaga ay nasa iyong Ejar contract.' },
  { question: 'Ano ang legal na pwedeng ibawas ng landlord mula sa security deposit?', answer: 'Ang landlord ay pwedeng magbawas para sa: hindi nabayarang renta, hindi nabayarang utility bills (SEC electricity, tubig), at mga aktwal na sira na lampas sa normal wear and tear. Hindi pwedeng ibawas ang normal wear and tear.' },
  { question: 'Ano ang pagkakaiba ng normal wear and tear at aktwal na sira?', answer: 'Normal wear and tear: maliit na gasgas sa dingding, kupas na pintura, sira na carpet sa daanan. Aktwal na sira: punit na carpet, basag na bintana, sirang AC dahil sa maling paggamit.' },
  { question: 'Paano mag-file ng dispute laban sa landlord sa Ejar?', answer: 'Mag-log in sa Ejar platform, pumunta sa iyong contract, at gamitin ang "Dispute" feature. Maaari ka ring mag-escalate sa Ministry of Justice\'s Najiz portal o Rental Dispute Committee.' },
  { question: 'Pwede bang itago ng landlord ang deposit ko kung maaga akong umalis?', answer: 'Oo, sa pangkalahatan ay maaaring itago ang deposit para sa aktwal na pagkalugi. Ngunit kung mabilis nilang na-rentahan ang property, maaaring hindi nila maitago ang buong deposit.' },
  { question: 'Gaano katagal bago makuha ang deposit pagkatapos lumipat?', answer: 'Sa ilalim ng Ejar system, ang landlord ay may hanggang 30 araw pagkatapos ng move-out para siyasatin ang property at ibalik ang deposit.' },
  { question: 'Kailangan ba talaga ang Ejar contract sa Saudi Arabia?', answer: 'Oo, simula 2026, bawal na ang mag-rent nang walang rehistradong Ejar contract. Ang Ejar system ay mandatory para sa lahat ng rental transactions.' },
  { question: 'Ano ang gagawin ko kung tumanggi ang landlord na magbigay ng Ejar contract?', answer: 'Maaari mo silang i-report sa pamamagitan ng Ejar platform o kontakin ang Ministry of Municipal and Rural Affairs and Housing.' },
  { question: 'Kailangan ko bang magpa-propesyonal na linis ng apartment bago umalis?', answer: 'Hindi legal na mandatory ngunit lubos na inirerekomenda. Ang receipt ng cleaning ay ebidensya na ibinalik mo ang property sa magandang kondisyon.' },
  { question: 'Pwede bang iwasan ang deposit deductions sa pamamagitan ng pag-repair ng sira ko mismo?', answer: 'Oo, ang pag-repair ng minor damages sa iyong sarili ay mas mura at pumipigil sa sobrang singil ng landlord.' },
]

const faqsBn = [
  { question: 'সৌদি আরবে ভাড়া অ্যাপার্টমেন্টের জন্য সিকিউরিটি ডিপোজিট কত?', answer: 'সাধারণত আনফার্নিশড অ্যাপার্টমেন্টের জন্য এক মাসের ভাড়া এবং ফার্নিশডের জন্য দুই মাস পর্যন্ত ডিপোজিট থাকে। ইজার চুক্তিতে সঠিক পরিমাণ উল্লেখ থাকে।' },
  { question: 'জমিদার আইনত ডিপোজিট থেকে কী কাটতে পারেন?', answer: 'শুধুমাত্র: অপরিশোধিত ভাড়া, বিল (বিদ্যুৎ, পানি), এবং সাধারণ ব্যবহারের বেশি ক্ষতি। সাধারণ ব্যবহার যেমন দেয়ালের সামান্য দাগ কাটতে পারেন না।' },
  { question: 'সাধারণ ব্যবহার এবং প্রকৃত ক্ষতির মধ্যে পার্থক্য কী?', answer: 'সাধারণ ব্যবহার: দেয়ালে সামান্য দাগ, রোদে রঙ ফ্যাকাশে হওয়া, কার্পেট ঘষে যাওয়া। প্রকৃত ক্ষতি: ছেঁড়া কার্পেট, ভাঙা জানালা, ভুল ব্যবহারে নষ্ট AC।' },
  { question: 'কিভাবে ইজার প্ল্যাটফর্মে জমিদারের বিরুদ্ধে বিবাদ দায়ের করবেন?', answer: 'ইজার প্ল্যাটফর্মে লগইন করুন, আপনার চুক্তি নির্বাচন করুন এবং "বিবাদ" বৈশিষ্ট্য ব্যবহার করুন। বিচার মন্ত্রণালয়ের নাজিজ পোর্টালেও যেতে পারেন।' },
  { question: 'আগেই চুক্তি শেষ করলে জমিদার কি ডিপোজিট রাখতে পারেন?', answer: 'হ্যাঁ, প্রকৃত ক্ষতির জন্য ডিপোজিট রাখতে পারেন। তবে দ্রুত নতুন ভাড়াটিয়া পেলে পুরো ডিপোজিট রাখা যাবে না।' },
  { question: 'ডিপোজিট ফেরতে কত সময় লাগে?', answer: 'ইজার সিস্টেমে জমিদারের সম্পত্তি পরিদর্শন এবং ডিপোজিট ফেরত দিতে ৩০ দিন সময় আছে।' },
  { question: 'সৌদি আরবে ইজার চুক্তি কি বাধ্যতামূলক?', answer: 'হ্যাঁ, ২০২৬-এ নিবন্ধিত ইজার চুক্তি ছাড়া ভাড়া দেওয়া বেআইনি।' },
  { question: 'জমিদার ইজার চুক্তি দিতে অস্বীকার করলে কী করবেন?', answer: 'ইজার প্ল্যাটফর্ম বা মিউনিসিপ্যাল মন্ত্রণালয়ে রিপোর্ট করুন। ইজার ছাড়া ভাড়া বেআইনি।' },
  { question: 'অ্যাপার্টমেন্ট ছাড়ার আগে পেশাদার পরিষ্কার করা কি জরুরি?', answer: 'আইনত বাধ্যতামূলক না হলেও দৃঢ়ভাবে সুপারিশ করা হয়। পরিষ্কারের রসিদ প্রমাণ হিসাবে কাজ করে।' },
  { question: 'নিজে মেরামত করে কি ডিপোজিট কাটা এড়ানো যায়?', answer: 'হ্যাঁ, ছোট মেরামত নিজে করা সস্তা এবং জমিদারের অতিরিক্ত চার্জ এড়াতে সাহায্য করে।' },
]

function EnContent() {
  return (
    <article>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchemaEn) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": faqsEn.map(f => ({ "@type": "Question", "name": f.question, "acceptedAnswer": { "@type": "Answer", "text": f.answer } })) }) }}
      />

      <div className="text-center mb-8">
        <p className="text-desert-primary text-sm font-medium tracking-widest uppercase">Rental Guide</p>
        <h1 className="text-3xl md:text-4xl font-bold text-white mt-2">The Complete Guide to Ejar Contracts &amp; Rental Deposit Refunds in Saudi Arabia 2026</h1>
        <p className="text-gray-400 mt-3 max-w-2xl mx-auto">
          Moving out is stressful enough. Worrying about your security deposit should not be. This guide walks you through Ejar contracts, tenant rights, deposit refund rules, and what to do when a landlord refuses to pay.
        </p>
      </div>

      <GlassCard>
        <h2>Introduction</h2>
        <p>
          You have found a new apartment, packed all your boxes, and handed over the keys to your old place. The only thing left is waiting for your security deposit to be returned. For many tenants in Saudi Arabia, this is the most stressful part of the moving process. Will the landlord find something to deduct? Will they return the full amount? How long will it take?
        </p>
        <p>
          The security deposit, known locally as Daman (التأمين), is usually one month's rent for unfurnished apartments and up to two months for fully furnished properties. On a 30,000 SAR per year apartment, that is 2,500 SAR sitting in your landlord's hands. On a 60,000 SAR villa, that is 5,000 SAR. These are significant amounts of money that you have every right to get back — provided you understand the rules.
        </p>
        <p>
          Fortunately, Saudi Arabia&apos;s Ejar system has transformed the rental market. Gone are the days of verbal agreements and unsigned contracts. Ejar is a mandatory digital platform that registers every rental contract in the kingdom, protecting both tenants and landlords. In 2026, it is illegal to rent without an Ejar contract, and the system provides clear mechanisms for deposit disputes.
        </p>
        <p>
          This comprehensive guide covers everything you need to know: what Ejar is, how the security deposit system works, what landlords can and cannot deduct, a step-by-step plan to get your full deposit back, and exactly how to handle disputes. Use our free <Link href="/ejar-deposit-calculator" className="text-desert-primary underline">Ejar Deposit Refund Calculator</Link> to estimate how much you should get back.
        </p>
      </GlassCard>

      <GlassCard>
        <h2>What is the Ejar System in Saudi Arabia?</h2>
        <p>
          Ejar (إيجار), which means "rent" in Arabic, is Saudi Arabia&apos;s official digital rental platform managed by the Ministry of Municipal and Rural Affairs and Housing. It was launched as part of the National Transformation Program under Vision 2030 to organize and regulate the rental market.
        </p>
        <p>
          <strong>How Ejar Works:</strong> Every rental contract in Saudi Arabia must be registered on the Ejar platform. The system creates a digital record of the agreement between tenant and landlord, including the rent amount, contract duration, payment schedule, and security deposit details. Both parties receive a unique contract reference number that serves as legal proof of tenancy.
        </p>
        <p>
          <strong>Why Ejar Matters for Tenants:</strong> Without an Ejar contract, you have no legal protection. You cannot file a deposit dispute, you cannot prove your residence for government services, and the landlord can evict you without notice. In 2026, renting without Ejar is simply illegal. Landlords who fail to register face fines, and tenants are advised to report any landlord who refuses to provide an Ejar contract.
        </p>
        <p>
          <strong>Key Ejar Features:</strong> Digital contract signing with electronic verification, automatic renewal reminders, dispute resolution mechanism, integration with the Ministry of Justice for legal enforcement, and a centralized database of all rental transactions in the kingdom.
        </p>
      </GlassCard>

      <GlassCard>
        <h2>Understanding the Security Deposit (Daman) Rules</h2>
        <p>
          The security deposit, or Daman, is a refundable amount paid by the tenant at the start of the contract to cover any damages or unpaid bills at the end of the tenancy. While the concept sounds simple, the rules around what can and cannot be deducted are often misunderstood.
        </p>
        <div className="bg-[#0A0E1A] p-4 rounded-xl mb-4">
          <p className="text-white font-semibold">Standard Deposit Amounts</p>
          <ul className="list-disc list-inside space-y-1 text-gray-300 text-sm mt-2">
            <li><strong>Unfurnished apartments:</strong> Typically one month's rent</li>
            <li><strong>Semi-furnished apartments:</strong> Usually 1.5 months' rent</li>
            <li><strong>Fully furnished properties:</strong> Up to two months' rent</li>
            <li><strong>Luxury villas:</strong> Can be negotiated, but capped by Ejar guidelines</li>
          </ul>
        </div>
        <p>
          <strong>When the Landlord Can Legally Hold the Deposit:</strong> The landlord is entitled to hold the deposit until the final inspection is completed and all utility bills are settled. Under Ejar rules, the landlord has up to 30 days after the contract end date to inspect the property and return the deposit. If no deductions are justified, the full amount must be returned within this period.
        </p>
        <p>
          <strong>Deposit Protection under Ejar:</strong> One of the biggest advantages of the Ejar system is that your deposit is registered and tracked. Before Ejar, landlords could simply keep deposits with no accountability. Now, the digital record ensures transparency. If a landlord claims a deduction, they must provide evidence through the Ejar dispute system.
        </p>
      </GlassCard>

      <GlassCard>
        <h2>What the Landlord CAN and CANNOT Deduct</h2>
        <p>This is the most important section for every tenant. The #1 reason for deposit disputes in Saudi Arabia is the disagreement between what constitutes "normal wear and tear" versus "actual damage." Understanding this distinction is crucial.</p>

        <h3 className="text-desert-primary">Deductions the Landlord CAN Legally Make</h3>
        <div className="space-y-2 mb-6">
          <div className="bg-[#0A0E1A] p-3 rounded-lg">
            <p className="text-white font-medium">1. Unpaid Rent</p>
            <p className="text-gray-400 text-sm">Any outstanding rent for the final month or partial month before move-out is always deductible from the deposit.</p>
          </div>
          <div className="bg-[#0A0E1A] p-3 rounded-lg">
            <p className="text-white font-medium">2. Unpaid Utility Bills</p>
            <p className="text-gray-400 text-sm">Unpaid SEC electricity bills, National Water Company bills, and internet subscriptions that remain under the tenant's name. The landlord can deduct these and pay them directly.</p>
          </div>
          <div className="bg-[#0A0E1A] p-3 rounded-lg">
            <p className="text-white font-medium">3. Damages Beyond Normal Wear and Tear</p>
            <p className="text-gray-400 text-sm">This includes: broken or cracked tiles, damaged AC units (from not cleaning filters or running them without refrigerant), large holes in walls (bigger than a nail hole), stained or burnt carpets, broken window glass, damaged kitchen countertops, missing or broken light fixtures, and damaged plumbing fixtures.</p>
          </div>
          <div className="bg-[#0A0E1A] p-3 rounded-lg">
            <p className="text-white font-medium">4. Cleaning Costs (if property is left excessively dirty)</p>
            <p className="text-gray-400 text-sm">While normal cleaning is expected, if the property is left in an extremely dirty condition requiring professional deep cleaning, the landlord may deduct reasonable cleaning costs. Always get a professional cleaning and keep the receipt.</p>
          </div>
        </div>

        <h3 className="text-desert-gold">Deductions the Landlord CANNOT Legally Make</h3>
        <div className="space-y-2">
          <div className="bg-[#0A0E1A] p-3 rounded-lg">
            <p className="text-white font-medium">1. Normal Paint Fading</p>
            <p className="text-gray-400 text-sm">Paint naturally fades and discolors over time due to sunlight and normal living. This is wear and tear, not damage. The landlord cannot deduct for repainting unless there are specific unacceptable stains or marks.</p>
          </div>
          <div className="bg-[#0A0E1A] p-3 rounded-lg">
            <p className="text-white font-medium">2. Small Nail Holes from Picture Frames</p>
            <p className="text-gray-400 text-sm">Small nail holes (less than 5mm) from hanging pictures or decorations are considered normal wear and tear. Large holes from heavy fixtures or wall-mounted TVs may be considered damage.</p>
          </div>
          <div className="bg-[#0A0E1A] p-3 rounded-lg">
            <p className="text-white font-medium">3. Natural Aging of Appliances</p>
            <p className="text-gray-400 text-sm">Air conditioners that become less efficient over time, water heaters that develop minor issues, or kitchen appliances that show age-related wear are the landlord's responsibility, not the tenant's.</p>
          </div>
          <div className="bg-[#0A0E1A] p-3 rounded-lg">
            <p className="text-white font-medium">4. Carpet Wear from Normal Walking</p>
            <p className="text-gray-400 text-sm">Carpets in hallways and living areas naturally flatten and show wear from walking. This is normal. Only stains, burns, or tears count as damage.</p>
          </div>
          <div className="bg-[#0A0E1A] p-3 rounded-lg">
            <p className="text-white font-medium">5. Minor Scuffs on Walls or Floors</p>
            <p className="text-gray-400 text-sm">Small scuff marks from furniture or shoes on walls and tile floors are normal. The landlord cannot charge for general touch-ups needed between tenants.</p>
          </div>
        </div>
      </GlassCard>

      <GlassCard>
        <h2>Step-by-Step Guide to Getting a FULL Deposit Refund</h2>

        <h3>Step 1: The Move-In Inspection (Your Most Important Step)</h3>
        <p>Before you move a single box into the apartment, document everything. Take dated photos and videos of every room, every wall, every floor tile, and every appliance. Pay special attention to:</p>
        <ul className="list-disc list-inside space-y-1 text-gray-300 text-sm mb-4">
          <li>Existing scratches or cracks on floors and tiles</li>
          <li>Stains on carpets or curtains</li>
          <li>Scratches on kitchen countertops</li>
          <li>Condition of AC units (test them and note any issues)</li>
          <li>Water pressure in showers and faucets</li>
          <li>Condition of light fixtures and bulbs</li>
          <li>Any existing cracks in walls or ceilings</li>
        </ul>
        <p>
          Share these photos with your landlord via WhatsApp or email so there is a timestamped record. Ask the landlord to acknowledge any pre-existing issues in writing. This single step has saved tenants thousands of riyals in false damage claims.
        </p>

        <h3>Step 2: Routine Maintenance During Tenancy</h3>
        <p>Keep up with basic maintenance throughout your tenancy. Clean AC filters every 3 months (this alone prevents most AC-related deposit deductions). Report any maintenance issues to the landlord in writing as soon as they appear. If you ignore a leaking pipe and it causes damage, you may be liable. Keep a simple log of maintenance requests made and completed.</p>

        <h3>Step 3: Professional Cleaning Before Move-Out</h3>
        <p>Book a professional cleaning service for the complete apartment. A standard deep clean for a 2-bedroom apartment in Saudi Arabia costs between 200 and 500 SAR. This is money well spent. Keep the cleaning receipt as proof. Take photos after cleaning to document the pristine condition. A clean apartment removes the landlord's ability to claim cleaning deductions.</p>

        <h3>Step 4: Clear All Final Utility Bills</h3>
        <p>Before your contract ends, contact SEC (Saudi Electricity Company) and the National Water Company to request final bill settlements. Pay any outstanding amounts and obtain clearance certificates. Do the same for your internet provider (STC, Mobily, or Zain). These clearance documents are critical evidence that you have left no unpaid bills.</p>

        <h3>Step 5: Terminate the Ejar Contract Officially</h3>
        <p>Log into the Ejar platform and initiate the contract termination. Both the tenant and landlord must confirm the move-out. This triggers the official inspection period. If the landlord does not respond or refuses to confirm, the Ejar system has esc<a aria-invalid="true" href="/ejar-deposit-calculator" className="text-desert-primary underline">Ejar Deposit Refund Calculator</a> for a quick estimate.
        </p>
      </GlassCard>

      <GlassCard>
        <h2>Real-Life Scenarios &amp; Examples</h2>

        <h3>Example 1: Full Deposit Refund (5,000 SAR)</h3>
        <p>
          Ahmed rented a 2-bedroom apartment in Riyadh for 60,000 SAR per year, paying a 5,000 SAR security deposit. On move-in day, he noticed a scratch on the living room floor. He took a photo, sent it to the landlord on WhatsApp, and got a reply acknowledging it was there before he moved in. Three years later when he moved out, he hired a professional cleaner, paid all his utility bills, and took after-photos. The landlord tried to claim the scratch was new damage. Ahmed showed the timestamped WhatsApp messages. The landlord had no choice but to return the full 5,000 SAR deposit.
        </p>
        <p className="text-desert-primary text-sm mt-2">Lesson: Documentation of pre-existing damage is your strongest protection.</p>

        <h3>Example 2: Partial Deduction (Lost 2,000 SAR)</h3>
        <p>
          Maria rented a furnished apartment in Jeddah for 45,000 SAR per year. During her tenancy, she accidentally broke the AC remote control. She did not replace it. She also let the AC run without cleaning the filters for over a year. When moving out, the landlord found the AC unit was damaged from the clogged filters and the remote was missing. The landlord deducted 1,200 SAR for the AC repair and 800 SAR for a replacement remote and labor. Total deduction: 2,000 SAR from her 3,750 SAR deposit.
        </p>
        <p className="text-desert-primary text-sm mt-2">Lesson: Fix small issues yourself before the inspection — replacing a remote costs 50 SAR, not 800 SAR.</p>

        <h3>Example 3: Normal Wear and Tear Dispute (Wrongful Deduction Reversed)</h3>
        <p>
          Khalid lived in a Dammam apartment for 5 years. When moving out, the landlord said the paint was faded and the carpets were worn, and deducted 3,000 SAR for repainting and carpet cleaning. Khalid used the Ejar dispute system, arguing that paint fading after 5 years and carpet wear from normal walking are wear and tear, not damage. The Rental Dispute Committee agreed and ordered the landlord to return the full deduction. The landlord was also fined for making an invalid claim.
        </p>
        <p className="text-desert-primary text-sm mt-2">Lesson: Know your rights — normal aging of a property after years of use is not your financial responsibility.</p>
      </GlassCard>

      <GlassCard>
        <h2>How to Handle Ejar Disputes (If the Landlord Refuses to Pay)</h2>
        <p>If your landlord refuses to return your deposit or makes unfair deductions, here is the exact process to follow:</p>

        <div className="space-y-3">
          <div className="bg-[#0A0E1A] p-3 rounded-lg">
            <p className="text-white font-medium">Step 1: Communicate in Writing</p>
            <p className="text-gray-400 text-sm">Send a formal written request via WhatsApp or email asking for a detailed breakdown of deductions. Give the landlord 7 days to respond. Often, a formal written request is enough to resolve the issue without escalation.</p>
          </div>
          <div className="bg-[#0A0E1A] p-3 rounded-lg">
            <p className="text-white font-medium">Step 2: Use the Ejar Dispute Feature</p>
            <p className="text-gray-400 text-sm">Log into the Ejar platform, navigate to your contract, and select the "Dispute" option. Describe the issue, upload your evidence (photos, receipts, written communication), and submit. The Ejar team will review and attempt mediation.</p>
          </div>
          <div className="bg-[#0A0E1A] p-3 rounded-lg">
            <p className="text-white font-medium">Step 3: Escalate to the Rental Dispute Committee (RDC)</p>
            <p className="text-gray-400 text-sm">If Ejar mediation fails, file a case with the Rental Dispute Committee through the Ministry of Justice's Najiz portal. The RDC handles rental disputes and can issue binding rulings. Filing fees are minimal (usually under 200 SAR). Most cases are resolved within 2-4 weeks.</p>
          </div>
          <div className="bg-[#0A0E1A] p-3 rounded-lg">
            <p className="text-white font-medium">Evidence You Need to Win</p>
            <p className="text-gray-400 text-sm">Your Ejar contract (reference number), bank transfer receipts for all rent payments, move-in and move-out photos/videos, cleaning service receipt, utility clearance certificates, and written communication with the landlord. The more organized your evidence, the faster your case is resolved.</p>
          </div>
        </div>
      </GlassCard>

      <GlassCard>
        <h2>How to Use the Sauditoolhub Ejar Deposit Refund Calculator</h2>
        <p>
          Estimating your potential deposit refund is simple with our <Link href="/ejar-deposit-calculator" className="text-desert-primary font-bold underline">Ejar Deposit Refund Calculator</Link>. Enter your monthly rent, deposit amount, and select any applicable deductions, and the calculator instantly estimates how much you should receive back.
        </p>
        <p>
          Also use our <Link href="/rett-tax-calculator" className="text-desert-primary underline">RETT Tax Calculator</Link> if you are buying property, and the <Link href="/mortgage-vs-rent" className="text-desert-primary underline">Mortgage vs Rent Calculator</Link> to decide whether buying or renting makes more financial sense for your situation. Visit <Link href="/blog" className="text-desert-primary underline">our blog</Link> for more guides on renting and living in Saudi Arabia.
        </p>
      </GlassCard>
    </article>
  )
}

function ArContent() {
  return (
    <article dir="rtl">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchemaAr) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": faqsAr.map(f => ({ "@type": "Question", "name": f.question, "acceptedAnswer": { "@type": "Answer", "text": f.answer } })) }) }}
      />

      <div className="text-center mb-8">
        <p className="text-desert-primary text-sm font-medium tracking-widest uppercase">دليل الإيجار</p>
        <h1 className="text-3xl md:text-4xl font-bold text-white mt-2">الدليل الشامل لعقود الإيجار واسترداد التأمين في السعودية 2026</h1>
        <p className="text-gray-400 mt-3 max-w-2xl mx-auto">
          الانتقال من منزل مرهق بما فيه الكفاية. القلق على التأمين لا يجب أن يكون كذلك. هذا الدليل يشرح عقود إيجار، حقوق المستأجر، قواعد استرداد التأمين، وماذا تفعل إذا رفض المالك الدفع.
        </p>
      </div>

      <GlassCard>
        <h2>مقدمة</h2>
        <p>
          لقد وجدت شقة جديدة، وحزمت كل صناديقك، وسلمت مفاتيح منزلك القديم. الشيء الوحيد المتبقي هو انتظار استرداد التأمين. بالنسبة للكثير من المستأجرين في السعودية، هذه هي المرحلة الأكثر إرهاقاً في عملية الانتقال. هل سيجد المالك شيئاً ليخصمه؟ هل سيعيد المبلغ كاملاً؟ كم سيستغرق الوقت؟
        </p>
        <p>
          التأمين (Daman) هو عادة إيجار شهر واحد للشقق غير المفروشة وشهرين للمفروشة. على شقة بإيجار 30,000 ريال سنوياً، هذا يعني 2,500 ريال في يد المالك. على فيلا بـ 60,000 ريال، هذا 5,000 ريال. هذه مبالغ كبيرة يحق لك استردادها إذا فهمت القواعد.
        </p>
        <p>
          لحسن الحظ، نظام إيجار حول سوق الإيجار في السعودية. لم يعد هناك اتفاقيات شفهية أو عقود غير موقعة. إيجار منصة رقمية إلزامية تسجل كل عقد إيجار في المملكة، وتحمي المستأجر والمالك. في 2026، الإيجار دون عقد إيجار غير قانوني.
        </p>
        <p>
          يغطي هذا الدليل كل ما تحتاج معرفته: ما هو إيجار، كيف يعمل التأمين، ما يمكن وما لا يمكن للمالك خصمه، خطة خطوة بخطوة لاسترداد كامل التأمين، وكيفية التعامل مع النزاعات. استخدم <Link href="/ejar-deposit-calculator" className="text-desert-primary underline">حاسبة استرداد تأمين إيجار</Link> المجانية.
        </p>
      </GlassCard>

      <GlassCard>
        <h2>ما هو نظام إيجار في السعودية؟</h2>
        <p>
          إيجار هو المنصة الرقمية الرسمية للإيجار في السعودية، تديرها وزارة الشؤون البلدية والقروية والإسكان. أطلقت كجزء من برنامج التحول الوطني ضمن رؤية 2030 لتنظيم سوق الإيجار.
        </p>
        <p>
          <strong>كيف يعمل إيجار:</strong> كل عقد إيجار في السعودية يجب تسجيله على منصة إيجار. ينشئ النظام سجلاً رقمياً للاتفاقية بين المستأجر والمالك يتضمن قيمة الإيجار، مدة العقد، جدول الدفع، وتفاصيل التأمين. يحصل الطرفان على رقم مرجعي فريد للعقد.
        </p>
        <p>
          <strong>أهمية إيجار للمستأجر:</strong> بدون عقد إيجار، لا توجد حماية قانونية. لا يمكنك تقديم نزاع على التأمين، ولا إثبات سكنك للخدمات الحكومية، ويمكن للمالك إخلاءك دون إنذار. في 2026، الإيجار دون عقد إيجار غير قانوني.
        </p>
      </GlassCard>

      <GlassCard>
        <h2>قواعد التأمين (الوديعة)</h2>
        <p>
          التأمين (Daman) هو مبلغ قابل للاسترداد يدفعه المستأجر في بداية العقد لتغطية أي أضرار أو فواتير غير مدفوعة عند انتهاء الإيجار. القواعد حول ما يمكن خصمه غالباً ما يساء فهمها.
        </p>
        <div className="bg-[#0A0E1A] p-4 rounded-xl mb-4">
          <p className="text-white font-semibold">مبالغ التأمين المعتادة</p>
          <ul className="list-disc list-inside space-y-1 text-gray-300 text-sm mt-2">
            <li><strong>شقق غير مفروشة:</strong> عادة إيجار شهر واحد</li>
            <li><strong>شقق نصف مفروشة:</strong> عادة 1.5 شهر</li>
            <li><strong>عقارات مفروشة بالكامل:</strong> حتى إيجار شهرين</li>
          </ul>
        </div>
        <p>
          للمالك الحق في حبس التأمين حتى اكتمال الفحص النهائي وتسديد جميع فواتير الخدمات. حسب نظام إيجار، للمالك 30 يوماً من تاريخ انتهاء العقد لفحص العقار وإعادة التأمين. إذا لم تكن هناك خصومات مبررة، يجب إعادة المبلغ كاملاً.
        </p>
      </GlassCard>

      <GlassCard>
        <h2>ما يمكن وما لا يمكن للمالك خصمه</h2>
        <p>هذا أهم قسم لكل مستأجر. السبب الأول لنزاعات التأمين هو الخلاف بين "البلى الطبيعي" و"الضرر الفعلي". فهم هذا الفرق ضروري.</p>

        <h3 className="text-desert-primary">الخصومات القانونية التي يمكن للمالك عملها</h3>
        <div className="space-y-2 mb-6">
          <div className="bg-[#0A0E1A] p-3 rounded-lg">
            <p className="text-white font-medium">1. الإيجار غير المدفوع</p>
            <p className="text-gray-400 text-sm">أي إيجار متأخر عن الشهر الأخير يمكن خصمه من التأمين.</p>
          </div>
          <div className="bg-[#0A0E1A] p-3 rounded-lg">
            <p className="text-white font-medium">2. فواتير الخدمات غير المسددة</p>
            <p className="text-gray-400 text-sm">فواتير الكهرباء والمياه والإنترنت غير المدفوعة والتي لا تزال باسم المستأجر.</p>
          </div>
          <div className="bg-[#0A0E1A] p-3 rounded-lg">
            <p className="text-white font-medium">3. الأضرار التي تتجاوز البلى الطبيعي</p>
            <p className="text-gray-400 text-sm">بلاط مكسور، مكيف تالف، ثقوب كبيرة بالجدران، سجاد ملطخ أو محروق، زجاج نوافذ مكسور، أثاث تالف.</p>
          </div>
          <div className="bg-[#0A0E1A] p-3 rounded-lg">
            <p className="text-white font-medium">4. تكاليف التنظيف إذا تركت الشقة متسخة جداً</p>
            <p className="text-gray-400 text-sm">إذا كانت الشقة متسخة بشكل يتطلب تنظيفاً عميقاً، يمكن خصم تكاليف معقولة.</p>
          </div>
        </div>

        <h3 className="text-desert-gold">الخصومات غير القانونية</h3>
        <div className="space-y-2">
          <div className="bg-[#0A0E1A] p-3 rounded-lg">
            <p className="text-white font-medium">1. بهتان الدهان الطبيعي</p>
            <p className="text-gray-400 text-sm">الدهان يبهت طبيعياً مع الوقت بسبب الشمس والاستخدام العادي. لا يمكن خصم تكاليف إعادة الدهان.</p>
          </div>
          <div className="bg-[#0A0E1A] p-3 rounded-lg">
            <p className="text-white font-medium">2. ثقوب المسامير الصغيرة</p>
            <p className="text-gray-400 text-sm">ثقوب المسامير الصغيرة من تعليق الصور تعتبر بلى طبيعياً.</p>
          </div>
          <div className="bg-[#0A0E1A] p-3 rounded-lg">
            <p className="text-white font-medium">3. التقادم الطبيعي للأجهزة</p>
            <p className="text-gray-400 text-sm">المكيفات والسخانات التي تفقد كفاءتها مع الوقت هي مسؤولية المالك.</p>
          </div>
          <div className="bg-[#0A0E1A] p-3 rounded-lg">
            <p className="text-white font-medium">4. تآكل السجاد من المشي العادي</p>
            <p className="text-gray-400 text-sm">السجاد في الممرات يتسطح طبيعياً. هذا بلى طبيعي وليس ضرراً.</p>
          </div>
          <div className="bg-[#0A0E1A] p-3 rounded-lg">
            <p className="text-white font-medium">5. الخدوش البسيطة على الجدران والأرضيات</p>
            <p className="text-gray-400 text-sm">خدوش صغيرة من الأثاث أو الأحذية لا يمكن خصمها.</p>
          </div>
        </div>
      </GlassCard>

      <GlassCard>
        <h2>دليل خطوة بخطوة لاسترداد كامل التأمين</h2>

        <h3>الخطوة 1: فحص الانتقال (أهم خطوة)</h3>
        <p>قبل نقل أي صندوق، وثق كل شيء. التقط صوراً وفيديوهات مؤرخة لكل غرفة وكل جدار وكل بلاطة وكل جهاز. انتبه بشكل خاص للخدوش الموجودة مسبقاً على الأرضيات، البقع على السجاد، حالة المكيفات، تشققات الجدران. شارك هذه الصور مع المالك عبر واتساب للحصول على إقرار كتابي بحالتها قبل انتقالك.</p>

        <h3>الخطوة 2: الصيانة الدورية</h3>
        <p>نظف فلاتر المكيف كل 3 أشهر. أبلغ المالك عن أي مشاكل صيانة كتابياً فور ظهورها. سجل طلبات الصيانة. تجاهل تسريب ماسورة يمكن أن يجعلك مسؤولاً عن الضرر الناتج.</p>

        <h3>الخطوة 3: التنظيف المهني قبل الإخلاء</h3>
        <p>استأجر شركة تنظيف محترفة للشقة كاملة. التنظيف العميق لشقة غرفتين نوم يكلف 200-500 ريال. احتفظ بإيصال التنظيف. صور الشقة بعد التنظيف. شقة نظيفة تمنع المالك من المطالبة بخصم تكاليف التنظيف.</p>

        <h3>الخطوة 4: تسديد جميع فواتير الخدمات النهائية</h3>
        <p>اتصل بالشركة السعودية للكهرباء والمياه الوطنية لطلب تسوية نهائية. ادفع أي مبالغ مستحقة واحصل على شهادات الإخلاء. افعل نفس الشيء مع مزود الإنترنت. هذه المستندات دليل حاسم على عدم وجود فواتير غير مدفوعة.</p>

        <h3>الخطوة 5: إنهاء عقد إيجار رسمياً</h3>
        <p>سجل الدخول إلى منصة إيجار وابدأ إنهاء العقد. يجب على المستأجر والمالك تأكيد الإخلاء. هذا يبدأ فترة الفحص الرسمية. إذا لم يستجب المالك، يمكنك التصعيد عبر المنصة.</p>

        <p className="mt-4">استخدم <Link href="/ejar-deposit-calculator" className="text-desert-primary underline">حاسبة استرداد تأمين إيجار</Link> لتقدير المبلغ المستحق.</p>
      </GlassCard>

      <GlassCard>
        <h2>سيناريوهات وأمثلة من الواقع</h2>

        <h3>مثال 1: استرداد كامل التأمين (5,000 ريال)</h3>
        <p>
          استأجر أحمد شقة غرفتين في الرياض بـ 60,000 ريال سنوياً، ودفع 5,000 ريال تأميناً. في يوم الانتقال، لاحظ خدشاً في أرضية غرفة المعيشة. صوره وأرسله للمالك على واتساب. بعد ثلاث سنوات، عند الإخلاء، استأجر منظفاً محترفاً ودفع جميع الفواتير. حاول المالك ادعاء أن الخدش جديد. أظهر أحمد رسائل واتساب المؤرخة. اضطر المالك لإعادة كامل 5,000 ريال.
        </p>
        <p className="text-desert-primary text-sm mt-2">الدرس: توثيق الأضرار الموجودة مسبقاً هو أقوى حماية لك.</p>

        <h3>مثال 2: خصم جزئي (فقد 2,000 ريال)</h3>
        <p>
          استأجرت ماريا شقة مفروشة في جدة بـ 45,000 ريال سنوياً. كسرت ريموت المكيف بالخطأ ولم تستبدله. أيضاً تركت المكيف يعمل دون تنظيف الفلاتر لأكثر من سنة. عند الإخلاء، وجد المالك المكيف تالفاً والريموت مفقوداً. خصم 1,200 ريال لإصلاح المكيف و 800 ريال للريموت. الخصم الإجمالي: 2,000 ريال من 3,750 ريال تأمين.
        </p>
        <p className="text-desert-primary text-sm mt-2">الدرس: أصلح المشاكل الصغيرة بنفسك قبل الفحص.</p>

        <h3>مثال 3: نزاع البلى الطبيعي (تم إلغاء الخصم غير القانوني)</h3>
        <p>
          عاش خالد في شقة بالدمام 5 سنوات. عند الإخلاء، قال المالك إن الدهان بهت والسجاد تآكل، وخصم 3,000 ريال لإعادة الدهان والتنظيف. استخدم خالد نظام نزاعات إيجار، بحجة أن بهتان الدهان بعد 5 سنوات وتآكل السجاد من المشي العادي هو بلى طبيعي. وافقت لجنة فض المنازعات الإيجارية وأمرت المالك بإعادة المبلغ كاملاً.
        </p>
        <p className="text-desert-primary text-sm mt-2">الدرس: اعرف حقوقك — التقادم الطبيعي للعقار ليس مسؤوليتك المالية.</p>
      </GlassCard>

      <GlassCard>
        <h2>كيفية التعامل مع نزاعات إيجار</h2>
        <p>إذا رفض مالك العقار إعادة التأمين أو قام بخصومات غير عادلة، اتبع هذه العملية:</p>

        <div className="space-y-3">
          <div className="bg-[#0A0E1A] p-3 rounded-lg">
            <p className="text-white font-medium">الخطوة 1: التواصل الكتابي</p>
            <p className="text-gray-400 text-sm">أرسل طلباً كتابياً رسمياً عبر واتساب أو البريد الإلكتروني يطلب تفصيل الخصومات. أعط المالك 7 أيام للرد. غالباً الطلب الكتابي كافٍ لحل المشكلة.</p>
          </div>
          <div className="bg-[#0A0E1A] p-3 rounded-lg">
            <p className="text-white font-medium">الخطوة 2: استخدام خاصية النزاع في إيجار</p>
            <p className="text-gray-400 text-sm">سجل الدخول لمنصة إيجار، اختر العقد، واختر خيار "النزاع". اشرح المشكلة وحمل أدلتك (صور، إيصالات، مراسلات). يراجع فريق إيجار ويحاول الوساطة.</p>
          </div>
          <div className="bg-[#0A0E1A] p-3 rounded-lg">
            <p className="text-white font-medium">الخطوة 3: التصعيد للجنة فض المنازعات الإيجارية</p>
            <p className="text-gray-400 text-sm">إذا فشلت وساطة إيجار، قدم قضية للجنة فض المنازعات الإيجارية عبر بوابة ناجز بوزارة العدل. رسوم التقديم بسيطة. معظم القضايا تحل خلال 2-4 أسابيع.</p>
          </div>
        </div>

        <p className="mt-4">
          استخدم <Link href="/ejar-deposit-calculator" className="text-desert-primary underline">حاسبة استرداد تأمين إيجار</Link> لتقدير استردادك. اكتشف المزيد في <Link href="/blog" className="text-desert-primary underline">مدونتنا</Link> عن أدلة الإيجار والمعيشة في السعودية.
        </p>
      </GlassCard>
    </article>
  )
}

function UrContent() {
  return (
    <article dir="rtl">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchemaUr) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": faqsUr.map(f => ({ "@type": "Question", "name": f.question, "acceptedAnswer": { "@type": "Answer", "text": f.answer } })) }) }}
      />

      <div className="text-center mb-8">
        <p className="text-desert-primary text-sm font-medium tracking-widest uppercase">کرایہ داری گائیڈ</p>
        <h1 className="text-3xl md:text-4xl font-bold text-white mt-2">سعودی عرب میں ایجار کنٹریکٹس اور کرایہ ڈیپازٹ ریفنڈ کا مکمل گائیڈ 2026</h1>
        <p className="text-gray-400 mt-3 max-w-2xl mx-auto">
          گھر منتقل کرنا کافی دباؤ کا باعث ہے۔ اپنے سیکیورٹی ڈیپازٹ کی فکر نہ کریں۔ یہ گائیڈ ایجار کنٹریکٹس، کرایہ دار کے حقوق، ڈیپازٹ ریفنڈ کے قواعد، اور مالک کی جانب سے ادائیگی سے انکار پر کارروائی کے بارے میں بتاتا ہے۔
        </p>
      </div>

      <GlassCard>
        <h2>تعارف</h2>
        <p>
          آپ کو نیا اپارٹمنٹ مل گیا، اپنے تمام ڈبے پیک کر لیے، اور پرانی جگہ کی چابیاں سونپ دیں۔ اب صرف اپنے سیکیورٹی ڈیپازٹ کی واپسی کا انتظار ہے۔ سعودی عرب میں بہت سے کرایہ داروں کے لیے یہ منتقلی کے عمل کا سب سے دباؤ والا حصہ ہے۔ کیا مالک کٹوتی کرے گا؟ کیا پوری رقم واپس آئے گی؟ کتنا وقت لگے گا؟
        </p>
        <p>
          سیکیورٹی ڈیپازٹ (Daman) عام طور پر غیر فرنشڈ اپارٹمنٹس کے لیے ایک ماہ کا کرایہ اور فرنشڈ جائیدادوں کے لیے دو ماہ کا کرایہ ہوتا ہے۔ 30,000 ریال سالانہ کرائے والے اپارٹمنٹ پر، یہ 2,500 ریال مالک کے پاس ہوتا ہے۔ 60,000 ریال والے ولا پر، یہ 5,000 ریال ہے۔ یہ اہم رقوم ہیں جو آپ کو واپس لینے کا حق ہے — بشرطیکہ آپ قواعد کو سمجھیں۔
        </p>
        <p>
          خوش قسمتی سے، سعودی عرب کے ایجار سسٹم نے کرایہ کی مارکیٹ کو تبدیل کر دیا ہے۔ زبانی معاہدوں کے دن ختم ہو گئے۔ ایجار ایک لازمی ڈیجیٹل پلیٹ فارم ہے جو مملکت میں ہر کرایہ کے معاہدے کو رجسٹر کرتا ہے۔ 2026 میں، بغیر ایجار کنٹریکٹ کے کرایہ پر لینا غیر قانونی ہے۔
        </p>
        <p>
          یہ جامع گائیڈ ہر اس چیز کا احاطہ کرتا ہے جو آپ کو جاننے کی ضرورت ہے: ایجار کیا ہے، سیکیورٹی ڈیپازٹ سسٹم کیسے کام کرتا ہے، مالک کیا کٹوتی کر سکتا ہے اور کیا نہیں، مکمل ڈیپازٹ واپس لینے کے لیے مرحلہ وار منصوبہ، اور تنازعات سے نمٹنے کا طریقہ۔ ہمارا مفت <Link href="/ejar-deposit-calculator" className="text-desert-primary underline">ایجار ڈیپازٹ ریفنڈ کیلکولیٹر</Link> استعمال کریں۔
        </p>
      </GlassCard>

      <GlassCard>
        <h2>سعودی عرب میں ایجار سسٹم کیا ہے؟</h2>
        <p>
          ایجار (إيجار) جس کا مطلب عربی میں "کرایہ" ہے، سعودی عرب کا سرکاری ڈیجیٹل کرایہ پلیٹ فارم ہے جو وزارت بلدیات اور ہاؤسنگ کے زیر انتظام ہے۔ یہ وژن 2030 کے تحت قومی تبدیلی پروگرام کے حصے کے طور پر شروع کیا گیا تھا۔
        </p>
        <p>
          <strong>ایجار کیسے کام کرتا ہے:</strong> سعودی عرب میں ہر کرایہ کا معاہدہ ایجار پلیٹ فارم پر رجسٹر ہونا چاہیے۔ یہ سسٹم کرایہ دار اور مالک کے درمیان معاہدے کا ڈیجیٹل ریکارڈ بناتا ہے جس میں کرایہ کی رقم، معاہدے کی مدت، ادائیگی کا شیڈول، اور ڈیپازٹ کی تفصیلات شامل ہوتی ہیں۔
        </p>
        <p>
          <strong>کرایہ دار کے لیے ایجار کی اہمیت:</strong> ایجار کنٹریکٹ کے بغیر، آپ کے پاس کوئی قانونی تحفظ نہیں ہے۔ آپ ڈیپازٹ پر تنازع درج نہیں کروا سکتے، سرکاری خدمات کے لیے اپنی رہائش ثابت نہیں کر سکتے، اور مالک بغیر اطلاع کے بے دخلی کر سکتا ہے۔
        </p>
      </GlassCard>

      <GlassCard>
        <h2>سیکیورٹی ڈیپازٹ (Daman) کے قواعد</h2>
        <p>
          سیکیورٹی ڈیپازٹ ایک قابل واپسی رقم ہے جو کرایہ دار معاہدے کے شروع میں ادا کرتا ہے تاکہ کرایہ کے اختتام پر کسی نقصان یا بلوں کو پورا کیا جا سکے۔
        </p>
        <div className="bg-[#0A0E1A] p-4 rounded-xl mb-4">
          <p className="text-white font-semibold">معیاری ڈیپازٹ کی رقم</p>
          <ul className="list-disc list-inside space-y-1 text-gray-300 text-sm mt-2">
            <li><strong>غیر فرنشڈ اپارٹمنٹس:</strong> عام طور پر ایک ماہ کا کرایہ</li>
            <li><strong>نیم فرنشڈ:</strong> عام طور پر 1.5 ماہ کا کرایہ</li>
            <li><strong>مکمل فرنشڈ:</strong> دو ماہ کا کرایہ تک</li>
          </ul>
        </div>
        <p>
          مالک کو حتمی معائنہ مکمل ہونے اور تمام بلوں کی ادائیگی تک ڈیپازٹ رکھنے کا حق ہے۔ ایجار قواعد کے تحت، مالک کے پاس معاہدہ ختم ہونے کی تاریخ سے 30 دن جائیداد کا معائنہ اور ڈیپازٹ واپس کرنے کے لیے ہیں۔
        </p>
      </GlassCard>

      <GlassCard>
        <h2>مالک کیا کٹوتی کر سکتا ہے اور کیا نہیں</h2>
        <p>یہ ہر کرایہ دار کے لیے سب سے اہم حصہ ہے۔ ڈیپازٹ تنازعات کی سب سے بڑی وجہ "عام استعمال" اور "حقیقی نقصان" کے درمیان فرق ہے۔</p>

        <h3 className="text-desert-primary">قانونی کٹوتیاں جو مالک کر سکتا ہے</h3>
        <div className="space-y-2 mb-6">
          <div className="bg-[#0A0E1A] p-3 rounded-lg">
            <p className="text-white font-medium">1. غیر ادا شدہ کرایہ</p>
            <p className="text-gray-400 text-sm">آخری مہینے کا بقایا کرایہ ڈیپازٹ سے کاٹا جا سکتا ہے۔</p>
          </div>
          <div className="bg-[#0A0E1A] p-3 rounded-lg">
            <p className="text-white font-medium">2. غیر ادا شدہ بل</p>
            <p className="text-gray-400 text-sm">بجلی، پانی اور انٹرنیٹ کے غیر ادا شدہ بل جو کرایہ دار کے نام پر ہیں۔</p>
          </div>
          <div className="bg-[#0A0E1A] p-3 rounded-lg">
            <p className="text-white font-medium">3. عام استعمال سے زیادہ کا نقصان</p>
            <p className="text-gray-400 text-sm">ٹوٹی ٹائلیں، خراب AC، دیواروں میں بڑے سوراخ، داغ دار قالین، ٹوٹی کھڑکیاں۔</p>
          </div>
          <div className="bg-[#0A0E1A] p-3 rounded-lg">
            <p className="text-white font-medium">4. صفائی کے اخراجات</p>
            <p className="text-gray-400 text-sm">اگر جائیداد انتہائی گندی چھوڑی گئی ہو تو صفائی کے معقول اخراجات کاٹے جا سکتے ہیں۔</p>
          </div>
        </div>

        <h3 className="text-desert-gold">غیر قانونی کٹوتیاں</h3>
        <div className="space-y-2">
          <div className="bg-[#0A0E1A] p-3 rounded-lg">
            <p className="text-white font-medium">1. قدرتی رنگ کا ہلکا ہونا</p>
            <p className="text-gray-400 text-sm">دھوپ سے رنگ کا قدرتی طور پر ہلکا ہونا عام استعمال ہے۔ دوبارہ پینٹنگ کے اخراجات نہیں کاٹے جا سکتے۔</p>
          </div>
          <div className="bg-[#0A0E1A] p-3 rounded-lg">
            <p className="text-white font-medium">2. تصویروں کے چھوٹے کیلوں کے سوراخ</p>
            <p className="text-gray-400 text-sm">چھوٹے سوراخ (5mm سے کم) عام استعمال سمجھے جاتے ہیں۔</p>
          </div>
          <div className="bg-[#0A0E1A] p-3 rounded-lg">
            <p className="text-white font-medium">3. آلات کا قدرتی بڑھاپا</p>
            <p className="text-gray-400 text-sm">اے سی اور ہیٹر کا وقت کے ساتھ کم موثر ہونا مالک کی ذمہ داری ہے۔</p>
          </div>
          <div className="bg-[#0A0E1A] p-3 rounded-lg">
            <p className="text-white font-medium">4. چلنے سے قالین کا گھسنا</p>
            <p className="text-gray-400 text-sm">راستوں میں قالین کا چپٹا ہونا عام استعمال ہے۔</p>
          </div>
          <div className="bg-[#0A0E1A] p-3 rounded-lg">
            <p className="text-white font-medium">5. دیواروں پر ہلکے نشان</p>
            <p className="text-gray-400 text-sm">فرنیچر یا جوتوں سے چھوٹے نشان کٹوتی نہیں ہو سکتے۔</p>
          </div>
        </div>
      </GlassCard>

      <GlassCard>
        <h2>مکمل ڈیپازٹ ریفنڈ کے لیے مرحلہ وار گائیڈ</h2>

        <h3>مرحلہ 1: منتقلی کا معائنہ</h3>
        <p>ایک بھی ڈبہ منتقل کرنے سے پہلے، ہر چیز کو دستاویز کریں۔ ہر کمرے، ہر دیوار، ہر ٹائل اور ہر آلے کی تاریخ شدہ تصاویر اور ویڈیوز لیں۔ فرش پر موجود خروںچ، قالین پر داغ، AC کی حالت، اور دیواروں کی دراڑوں پر خاص توجہ دیں۔ یہ تصاویر واٹس ایپ پر مالک کو بھیجیں تاکہ ٹائم اسٹیمپڈ ریکارڈ موجود ہو۔</p>

        <h3>مرحلہ 2: باقاعدہ دیکھ بھال</h3>
        <p>ہر 3 ماہ بعد AC فلٹر صاف کریں۔ مرمت کے کسی بھی مسئلے کی اطلاع مالک کو تحریری طور پر دیں۔ اگر آپ لیکیج پائپ کو نظر انداز کرتے ہیں اور نقصان ہوتا ہے تو آپ ذمہ دار ہو سکتے ہیں۔</p>

        <h3>مرحلہ 3: پیشہ ورانہ صفائی</h3>
        <p>نقل مکانی سے پہلے پیشہ ورانہ صفائی کا انتظام کریں۔ 2 بیڈروم اپارٹمنٹ کی گہری صفائی 200-500 ریال میں ہوتی ہے۔ صفائی کی رسید اور صفائی کے بعد کی تصاویر محفوظ رکھیں۔</p>

        <h3>مرحلہ 4: تمام بلوں کی ادائیگی</h3>
        <p>SEC اور واٹر کمپنی سے حتمی بل طلب کریں اور ادا کریں۔ انٹرنیٹ فراہم کنندہ سے بھی یہی کریں۔ کلیئرنس سرٹیفکیٹ اہم ثبوت ہیں۔</p>

        <h3>مرحلہ 5: ایجار کنٹریکٹ کا باضابطہ خاتمہ</h3>
        <p>ایجار پلیٹ فارم پر لاگ ان ہو کر معاہدہ ختم کرنے کا عمل شروع کریں۔ کرایہ دار اور مالک دونوں کو نقل مکانی کی تصدیق کرنی ہوگی۔</p>

        <p className="mt-4"><Link href="/ejar-deposit-calculator" className="text-desert-primary underline">ایجار ڈیپازٹ کیلکولیٹر</Link> استعمال کریں۔</p>
      </GlassCard>

      <GlassCard>
        <h2>حقیقی زندگی کے حالات اور مثالیں</h2>

        <h3>مثال 1: مکمل ڈیپازٹ ریفنڈ (5,000 ریال)</h3>
        <p>
          احمد نے ریاض میں 2 بیڈروم کا اپارٹمنٹ 60,000 ریال سالانہ پر کرایہ پر لیا، 5,000 ریال ڈیپازٹ ادا کیا۔ منتقلی کے دن اس نے ڈرائنگ روم کے فرش پر ایک خراش دیکھی۔ اس نے تصویر کھینچی اور مالک کو واٹس ایپ پر بھیجی، جس نے تسلیم کیا کہ خراش پہلے سے تھی۔ تین سال بعد نقل مکانی پر، مالک نے دعویٰ کیا کہ خراش نئی ہے۔ احمد نے واٹس ایپ پیغامات دکھائے۔ مالک کو 5,000 ریال واپس کرنے پڑے۔
        </p>

        <h3>مثال 2: جزوی کٹوتی (2,000 ریال کا نقصان)</h3>
        <p>
          ماریہ نے جدہ میں فرنشڈ اپارٹمنٹ 45,000 ریال سالانہ پر کرایہ پر لیا۔ اس نے AC کا ریموٹ غلطی سے توڑ دیا اور بدلا نہیں۔ فلٹر بھی صاف نہیں کئے۔ نقل مکانی پر AC خراب تھا اور ریموٹ غائب۔ 1,200 ریال AC مرمت اور 800 ریال ریموٹ کے کاٹے گئے۔
        </p>

        <h3>مثال 3: عام استعمال کا تنازع (غلط کٹوتی واپس)</h3>
        <p>
          خالد 5 سال دمام میں رہا۔ نقل مکانی پر مالک نے رنگ پھیکا اور قالین گھسا ہوا بتا کر 3,000 ریال کاٹے۔ خالد نے ایجار ڈسپیوٹ سسٹم استعمال کیا۔ رینٹل ڈسپیوٹ کمیٹی نے مالک کو پوری رقم واپس کرنے کا حکم دیا اور غلط دعوے پر جرمانہ بھی کیا۔
        </p>
      </GlassCard>

      <GlassCard>
        <h2>ایجار تنازعات سے نمٹنے کا طریقہ</h2>
        <p>اگر مالک ڈیپازٹ واپس کرنے سے انکار کرے تو یہ عمل کریں:</p>

        <div className="space-y-3">
          <div className="bg-[#0A0E1A] p-3 rounded-lg">
            <p className="text-white font-medium">مرحلہ 1: تحریری رابطہ</p>
            <p className="text-gray-400 text-sm">واٹس ایپ یا ای میل پر باضابطہ تحریری درخواست بھیجیں۔ مالک کو 7 دن دیں۔</p>
          </div>
          <div className="bg-[#0A0E1A] p-3 rounded-lg">
            <p className="text-white font-medium">مرحلہ 2: ایجار ڈسپیوٹ فیچر</p>
            <p className="text-gray-400 text-sm">ایجار پلیٹ فارم پر لاگ ان ہوں، کنٹریکٹ منتخب کریں، اور ڈسپیوٹ آپشن استعمال کریں۔</p>
          </div>
          <div className="bg-[#0A0E1A] p-3 rounded-lg">
            <p className="text-white font-medium">مرحلہ 3: رینٹل ڈسپیوٹ کمیٹی</p>
            <p className="text-gray-400 text-sm">وزارت انصاف کے ناجز پورٹل کے ذریعے کیس فائل کریں۔ زیادہ تر کیس 2-4 ہفتوں میں حل ہو جاتے ہیں۔</p>
          </div>
        </div>

        <p className="mt-4">
          <Link href="/ejar-deposit-calculator" className="text-desert-primary underline">ایجار ڈیپازٹ کیلکولیٹر</Link> سے تخمینہ حاصل کریں۔ مزید رہنمائی کے لیے <Link href="/blog" className="text-desert-primary underline">ہمارا بلاگ</Link> دیکھیں۔
        </p>
      </GlassCard>
    </article>
  )
}

function TlContent() {
  return (
    <article>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchemaTl) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": faqsTl.map(f => ({ "@type": "Question", "name": f.question, "acceptedAnswer": { "@type": "Answer", "text": f.answer } })) }) }}
      />

      <div className="text-center mb-8">
        <p className="text-desert-primary text-sm font-medium tracking-widest uppercase">Gabay sa Pagrenta</p>
        <h1 className="text-3xl md:text-4xl font-bold text-white mt-2">Gabay sa Ejar Contracts at Pag-refund ng Rental Deposit sa Saudi Arabia 2026</h1>
        <p className="text-gray-400 mt-3 max-w-2xl mx-auto">
          Ang paglipat ng bahay ay sapat na nakaka-stress. Ang pag-alala sa iyong security deposit ay hindi dapat. Ang gabay na ito ay nagpapaliwanag ng Ejar contracts, tenant rights, deposit refund rules, at kung ano ang gagawin kapag tumanggi ang landlord na magbayad.
        </p>
      </div>

      <GlassCard>
        <h2>Introduksyon</h2>
        <p>
          Nakahanap ka na ng bagong apartment, na-pack mo na ang lahat ng iyong mga kahon, at ibinigay mo na ang mga susi sa iyong lumang lugar. Ang tanging natitira ay maghintay para sa iyong security deposit. Para sa maraming tenant sa Saudi Arabia, ito ang pinaka-stressful na bahagi ng proseso ng paglipat. May makikita ba ang landlord na ibawas? Ibabalik ba nila ang buong halaga? Gaano katagal?
        </p>
        <p>
          Ang security deposit (Daman) ay karaniwang isang buwan&apos;s rent para sa unfurnished apartments at hanggang dalawang buwan para sa fully furnished properties. Sa isang apartment na 30,000 SAR bawat taon, 2,500 SAR iyon na nasa kamay ng landlord. Sa isang villa na 60,000 SAR, 5,000 SAR iyon. Ang mga ito ay malaking halaga na may karapatan kang makuha muli — basta naiintindihan mo ang mga patakaran.
        </p>
        <p>
          Sa kabutihang palad, ang Ejar system ng Saudi Arabia ay binago ang rental market. Wala na ang mga araw ng verbal agreements. Ang Ejar ay isang mandatoryong digital platform na nagrerehistro ng bawat rental contract sa kaharian. Sa 2026, bawal na ang mag-rent nang walang Ejar contract.
        </p>
        <p>
          Ang komprehensibong gabay na ito ay sumasaklaw sa lahat ng kailangan mong malaman: ano ang Ejar, paano gumagana ang security deposit system, ano ang maaari at hindi maaaring ibawas ng landlord, step-by-step na plano para makuha ang buong deposit, at paano humawak ng mga dispute. Gamitin ang aming libreng <Link href="/ejar-deposit-calculator" className="text-desert-primary underline">Ejar Deposit Refund Calculator</Link>.
        </p>
      </GlassCard>

      <GlassCard>
        <h2>Ano ang Ejar System sa Saudi Arabia?</h2>
        <p>
          Ang Ejar (إيجار) ay ang opisyal na digital rental platform ng Saudi Arabia na pinamamahalaan ng Ministry of Municipal and Rural Affairs and Housing. Ito ay inilunsad bilang bahagi ng National Transformation Program sa ilalim ng Vision 2030.
        </p>
        <p>
          <strong>Paano Gumagana ang Ejar:</strong> Bawat rental contract sa Saudi Arabia ay dapat nakarehistro sa Ejar platform. Ang system ay lumilikha ng digital record ng kasunduan sa pagitan ng tenant at landlord, kasama ang halaga ng renta, tagal ng contract, schedule ng pagbabayad, at mga detalye ng deposit.
        </p>
        <p>
          <strong>Bakit Mahalaga ang Ejar para sa Tenant:</strong> Kung walang Ejar contract, wala kang legal na proteksyon. Hindi ka pwedeng mag-file ng deposit dispute, hindi mo mapapatunayan ang iyong tirahan para sa government services, at pwedeng paalisin ka ng landlord nang walang abiso. Sa 2026, bawal ang mag-rent nang walang Ejar contract.
        </p>
      </GlassCard>

      <GlassCard>
        <h2>Pag-unawa sa Security Deposit (Daman) Rules</h2>
        <p>
          Ang security deposit ay isang refundable na halaga na binabayaran ng tenant sa simula ng contract upang masakop ang anumang pinsala o hindi nabayarang bill sa pagtatapos ng pagrenta.
        </p>
        <div className="bg-[#0A0E1A] p-4 rounded-xl mb-4">
          <p className="text-white font-semibold">Karaniwang Halaga ng Deposit</p>
          <ul className="list-disc list-inside space-y-1 text-gray-300 text-sm mt-2">
            <li><strong>Unfurnished apartments:</strong> Karaniwang isang buwan&apos;s rent</li>
            <li><strong>Semi-furnished:</strong> Karaniwang 1.5 buwan&apos;s rent</li>
            <li><strong>Fully furnished:</strong> Hanggang dalawang buwan&apos;s rent</li>
          </ul>
        </div>
        <p>
          Ang landlord ay may karapatang hawakan ang deposit hanggang sa makumpleto ang final inspection at mabayaran ang lahat ng utility bills. Sa ilalim ng Ejar rules, ang landlord ay may hanggang 30 araw pagkatapos ng contract end date upang siyasatin ang property at ibalik ang deposit.
        </p>
      </GlassCard>

      <GlassCard>
        <h2>Ano ang Maaari at Hindi Maaaring Ibawas ng Landlord</h2>
        <p>Ito ang pinakamahalagang bahagi para sa bawat tenant. Ang #1 na dahilan ng deposit disputes ay ang hindi pagkakasundo sa pagitan ng "normal wear and tear" at "actual damage."</p>

        <h3 className="text-desert-primary">Mga Legal na Ibawas na Maaaring Gawin ng Landlord</h3>
        <div className="space-y-2 mb-6">
          <div className="bg-[#0A0E1A] p-3 rounded-lg">
            <p className="text-white font-medium">1. Hindi Nabayarang Renta</p>
            <p className="text-gray-400 text-sm">Anumang natitirang renta para sa huling buwan ay pwedeng ibawas sa deposit.</p>
          </div>
          <div className="bg-[#0A0E1A] p-3 rounded-lg">
            <p className="text-white font-medium">2. Hindi Nabayarang Utility Bills</p>
            <p className="text-gray-400 text-sm">Mga hindi nabayarang SEC electricity bill, water bill, at internet subscription.</p>
          </div>
          <div className="bg-[#0A0E1A] p-3 rounded-lg">
            <p className="text-white font-medium">3. Mga Sirang Lampas sa Normal Wear and Tear</p>
            <p className="text-gray-400 text-sm">Basag na tile, sirang AC unit, malaking butas sa dingding, maruming carpet, basag na bintana.</p>
          </div>
          <div className="bg-[#0A0E1A] p-3 rounded-lg">
            <p className="text-white font-medium">4. Gastos sa Paglilinis (kung sobrang dumi)</p>
            <p className="text-gray-400 text-sm">Kung ang property ay naiwan na sobrang marumi, pwedeng ibawas ang makatwirang halaga ng paglilinis.</p>
          </div>
        </div>

        <h3 className="text-desert-gold">Mga Hindi Legal na Ibawas</h3>
        <div className="space-y-2">
          <div className="bg-[#0A0E1A] p-3 rounded-lg">
            <p className="text-white font-medium">1. Normal na Pagkupas ng Pintura</p>
            <p className="text-gray-400 text-sm">Ang pintura ay natural na kumukupas dahil sa araw at normal na pamumuhay.</p>
          </div>
          <div className="bg-[#0A0E1A] p-3 rounded-lg">
            <p className="text-white font-medium">2. Maliit na Butas ng Pako</p>
            <p className="text-gray-400 text-sm">Maliit na butas (mas mababa sa 5mm) mula sa pagbitin ng mga larawan ay normal wear and tear.</p>
          </div>
          <div className="bg-[#0A0E1A] p-3 rounded-lg">
            <p className="text-white font-medium">3. Natural na Pagtanda ng Appliances</p>
            <p className="text-gray-400 text-sm">Ang AC at water heater na nagiging hindi gaanong epektibo sa paglipas ng panahon ay responsibilidad ng landlord.</p>
          </div>
          <div className="bg-[#0A0E1A] p-3 rounded-lg">
            <p className="text-white font-medium">4. Pagkasira ng Carpet mula sa Normal na Paglalakad</p>
            <p className="text-gray-400 text-sm">Ang carpet sa mga daanan na pumapayat ay normal. Tanging mantsa, paso, o punit ang itinuturing na sira.</p>
          </div>
          <div className="bg-[#0A0E1A] p-3 rounded-lg">
            <p className="text-white font-medium">5. Maliit na Gasgas sa Dingding o Sahig</p>
            <p className="text-gray-400 text-sm">Maliit na marka mula sa muwebles ay hindi pwedeng ibawas.</p>
          </div>
        </div>
      </GlassCard>

      <GlassCard>
        <h2>Step-by-Step na Gabay para sa Buong Deposit Refund</h2>

        <h3>Step 1: Move-In Inspection</h3>
        <p>Bago mo ilipat ang kahit isang kahon, idokumento ang lahat. Kumuha ng may petsang mga larawan at video ng bawat kuwarto, bawat dingding, bawat tile, at bawat appliance. Bigyang-pansin ang mga umiiral na gasgas sa sahig, mantsa sa carpet, kondisyon ng AC, at mga bitak sa dingding. Ibahagi ang mga larawang ito sa landlord sa WhatsApp upang magkaroon ng timestamped record.</p>

        <h3>Step 2: Regular na Pagpapanatili</h3>
        <p>Linisin ang AC filters tuwing 3 buwan. Iulat ang anumang maintenance issue sa landlord nang nakasulat. Kung balewalain mo ang tumutulong tubo at ito ay magdulot ng sira, maaari kang managot.</p>

        <h3>Step 3: Propesyonal na Paglilinis</h3>
        <p>Mag-book ng professional cleaning service bago umalis. Ang malalim na paglilinis para sa 2-bedroom apartment ay nagkakahalaga ng 200-500 SAR. Itago ang resibo ng paglilinis. Kumuha ng mga larawan pagkatapos maglinis.</p>

        <h3>Step 4: Bayaran ang Lahat ng Final Utility Bills</h3>
        <p>Makipag-ugnayan sa SEC at National Water Company para sa final bill settlement. Bayaran ang anumang natitirang halaga at kumuha ng clearance certificates. Gawin din ito sa iyong internet provider.</p>

        <h3>Step 5: Opisyal na Tapusin ang Ejar Contract</h3>
        <p>Mag-log in sa Ejar platform at simulan ang contract termination. Ang tenant at landlord ay dapat parehong kumpirmahin ang move-out.</p>

        <p className="mt-4">Gamitin ang <Link href="/ejar-deposit-calculator" className="text-desert-primary underline">Ejar Deposit Refund Calculator</Link> para sa pagtantiya.</p>
      </GlassCard>

      <GlassCard>
        <h2>Mga Halimbawa sa Tunay na Buhay</h2>

        <h3>Halimbawa 1: Buong Deposit Refund (5,000 SAR)</h3>
        <p>
          Nag-rent si Ahmed ng 2-bedroom apartment sa Riyadh ng 60,000 SAR bawat taon, nagbayad ng 5,000 SAR deposit. Sa araw ng move-in, napansin niya ang isang gasgas sa sahig. Kinuhanan niya ng larawan at ipinadala sa landlord sa WhatsApp. Pagkalipas ng tatlong taon, sinubukan ng landlord na sabihin na bago ang gasgas. Ipinakita ni Ahmed ang timestamped WhatsApp messages at nakuha ang buong 5,000 SAR deposit.
        </p>

        <h3>Halimbawa 2: Partial Deduction (Nawalan ng 2,000 SAR)</h3>
        <p>
          Nag-rent si Maria ng furnished apartment sa Jeddah ng 45,000 SAR bawat taon. Hindi sinasadyang nasira niya ang AC remote at hindi ito pinalitan. Hindi rin niya nilinis ang AC filters nang mahigit isang taon. Sa move-out, sira ang AC at nawawala ang remote. Ibawas ang 2,000 SAR mula sa kanyang deposit.
        </p>

        <h3>Halimbawa 3: Normal Wear and Tear Dispute (Naibalik ang Maling Ibawas)</h3>
        <p>
          Si Khalid ay nanirahan sa isang apartment sa Dammam sa loob ng 5 taon. Sa move-out, sinabi ng landlord na kupas na ang pintura at sira na ang carpet, at nagbawas ng 3,000 SAR. Ginamit ni Khalid ang Ejar dispute system. Sumang-ayon ang Rental Dispute Committee na ito ay normal wear and tear at inutusan ang landlord na ibalik ang buong halaga.
        </p>
      </GlassCard>

      <GlassCard>
        <h2>Paano Humawak ng Ejar Disputes</h2>
        <p>Kung tumanggi ang landlord na ibalik ang deposit, sundin ang prosesong ito:</p>

        <div className="space-y-3">
          <div className="bg-[#0A0E1A] p-3 rounded-lg">
            <p className="text-white font-medium">Step 1: Makipag-ugnayan nang Nakasulat</p>
            <p className="text-gray-400 text-sm">Magpadala ng pormal na nakasulat na kahilingan sa WhatsApp o email. Bigyan ang landlord ng 7 araw para tumugon.</p>
          </div>
          <div className="bg-[#0A0E1A] p-3 rounded-lg">
            <p className="text-white font-medium">Step 2: Gamitin ang Ejar Dispute Feature</p>
            <p className="text-gray-400 text-sm">Mag-log in sa Ejar platform, pumunta sa iyong contract, at piliin ang "Dispute" option. I-upload ang iyong ebidensya.</p>
          </div>
          <div className="bg-[#0A0E1A] p-3 rounded-lg">
            <p className="text-white font-medium">Step 3: Mag-escalate sa Rental Dispute Committee</p>
            <p className="text-gray-400 text-sm">Mag-file ng case sa pamamagitan ng Ministry of Justice&apos;s Najiz portal. Karamihan sa mga kaso ay nalulutas sa loob ng 2-4 na linggo.</p>
          </div>
        </div>

        <p className="mt-4">Gamitin ang <Link href="/ejar-deposit-calculator" className="text-desert-primary underline">Ejar Deposit Refund Calculator</Link> at bisitahin ang <Link href="/blog" className="text-desert-primary underline">aming blog</Link> para sa higit pang gabay.</p>
      </GlassCard>
    </article>
  )
}

function BnContent() {
  return (
    <article>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchemaBn) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": faqsBn.map(f => ({ "@type": "Question", "name": f.question, "acceptedAnswer": { "@type": "Answer", "text": f.answer } })) }) }}
      />

      <div className="text-center mb-8">
        <p className="text-desert-primary text-sm font-medium tracking-widest uppercase">ভাড়া সংক্রান্ত গাইড</p>
        <h1 className="text-3xl md:text-4xl font-bold text-white mt-2">সৌদি আরবে ইজার চুক্তি ও ভাড়া জমা ফেরতের সম্পূর্ণ গাইড 2026</h1>
        <p className="text-gray-400 mt-3 max-w-2xl mx-auto">
          বাড়ি পরিবর্তন যথেষ্ট চাপের। আপনার সিকিউরিটি ডিপোজিট নিয়ে চিন্তা করা উচিত নয়। এই গাইড ইজার চুক্তি, ভাড়াটিয়ার অধিকার, ডিপোজিট ফেরতের নিয়ম এবং জমিদার দিতে অস্বীকার করলে করণীয় সম্পর্কে ব্যাখ্যা করে।
        </p>
      </div>

      <GlassCard>
        <h2>ভূমিকা</h2>
        <p>
          আপনি একটি নতুন অ্যাপার্টমেন্ট খুঁজে পেয়েছেন, সব বাক্স প্যাক করেছেন, এবং পুরো জায়গার চাবি হস্তান্তর করেছেন। এখন শুধু আপনার সিকিউরিটি ডিপোজিট ফেরতের অপেক্ষা। সৌদি আরবের অনেক ভাড়াটিয়ার জন্য এটি স্থানান্তর প্রক্রিয়ার সবচেয়ে চাপের অংশ। জমিদার কি কাটতি করবে? পুরো টাকা ফেরত পাবেন? কত সময় লাগবে?
        </p>
        <p>
          সিকিউরিটি ডিপোজিট (Daman) সাধারণত আনফার্নিশড অ্যাপার্টমেন্টের জন্য এক মাসের ভাড়া এবং ফার্নিশড সম্পত্তির জন্য দুই মাস পর্যন্ত হয়। 30,000 SAR বার্ষিক ভাড়ার অ্যাপার্টমেন্টে এটি 2,500 SAR জমিদারের কাছে থাকে। 60,000 SAR ভিলার ক্ষেত্রে এটি 5,000 SAR। এগুলি গুরুত্বপূর্ণ অর্থ যা আপনার ফেরত পাওয়ার অধিকার আছে — যদি আপনি নিয়মগুলি বোঝেন।
        </p>
        <p>
          সৌভাগ্যক্রমে, সৌদি আরবের ইজার সিস্টেম ভাড়ার বাজার পরিবর্তন করেছে। মৌখিক চুক্তির দিন শেষ। ইজার একটি বাধ্যতামূলক ডিজিটাল প্ল্যাটফর্ম যা রাজ্যের প্রতিটি ভাড়া চুক্তি নিবন্ধন করে। ২০২৬ সালে, ইজার চুক্তি ছাড়া ভাড়া নেওয়া বেআইনি।
        </p>
        <p>
          এই বিস্তৃত গাইড আপনার যা জানা দরকার তা কভার করে: ইজার কী, সিকিউরিটি ডিপোজিট সিস্টেম কীভাবে কাজ করে, জমিদার কী কাটতে পারেন এবং কী পারেন না, সম্পূর্ণ ডিপোজিট ফেরত পাওয়ার ধাপে ধাপে পরিকল্পনা, এবং বিবাদ মোকাবেলার পদ্ধতি। আমাদের বিনামূল্যের <Link href="/ejar-deposit-calculator" className="text-desert-primary underline">ইজার ডিপোজিট রিফান্ড ক্যালকুলেটর</Link> ব্যবহার করুন।
        </p>
      </GlassCard>

      <GlassCard>
        <h2>সৌদি আরবে ইজার সিস্টেম কী?</h2>
        <p>
          ইজার (إيجار) হল সৌদি আরবের সরকারি ডিজিটাল ভাড়া প্ল্যাটফর্ম যা মিউনিসিপ্যাল অ্যান্ড রুরাল অ্যাফেয়ার্স অ্যান্ড হাউজিং মন্ত্রণালয় দ্বারা পরিচালিত। এটি ভিশন ২০৩০-এর অধীনে জাতীয় রূপান্তর কর্মসূচির অংশ হিসেবে চালু করা হয়েছিল।
        </p>
        <p>
          <strong>ইজার কীভাবে কাজ করে:</strong> সৌদি আরবের প্রতিটি ভাড়া চুক্তি ইজার প্ল্যাটফর্মে নিবন্ধিত হতে হবে। সিস্টেম ভাড়াটিয়া এবং জমিদারের মধ্যে চুক্তির একটি ডিজিটাল রেকর্ড তৈরি করে, যার মধ্যে ভাড়ার পরিমাণ, চুক্তির মেয়াদ, পেমেন্ট সময়সূচী এবং ডিপোজিটের বিবরণ অন্তর্ভুক্ত থাকে।
        </p>
        <p>
          <strong>ভাড়াটিয়ার জন্য ইজারের গুরুত্ব:</strong> ইজার চুক্তি ছাড়া আপনার কোনো আইনি সুরক্ষা নেই। আপনি ডিপোজিট বিবাদ দায়ের করতে পারবেন না, সরকারি পরিষেবার জন্য আপনার আবাস প্রমাণ করতে পারবেন না, এবং জমিদার আপনাকে নোটিশ ছাড়া উচ্ছেদ করতে পারে।
        </p>
      </GlassCard>

      <GlassCard>
        <h2>সিকিউরিটি ডিপোজিট (Daman) নিয়ম বোঝা</h2>
        <p>
          সিকিউরিটি ডিপোজিট একটি ফেরতযোগ্য অর্থ যা ভাড়াটিয়া চুক্তির শুরুতে প্রদান করে যাতে ভাড়া শেষে কোনো ক্ষতি বা অপরিশোধিত বিল কভার করা যায়।
        </p>
        <div className="bg-[#0A0E1A] p-4 rounded-xl mb-4">
          <p className="text-white font-semibold">স্ট্যান্ডার্ড ডিপোজিটের পরিমাণ</p>
          <ul className="list-disc list-inside space-y-1 text-gray-300 text-sm mt-2">
            <li><strong>আনফার্নিশড অ্যাপার্টমেন্ট:</strong> সাধারণত এক মাসের ভাড়া</li>
            <li><strong>সেমি-ফার্নিশড:</strong> সাধারণত ১.৫ মাসের ভাড়া</li>
            <li><strong>সম্পূর্ণ ফার্নিশড:</strong> দুই মাসের ভাড়া পর্যন্ত</li>
          </ul>
        </div>
        <p>
          জমিদারের চূড়ান্ত পরিদর্শন সম্পূর্ণ হওয়া এবং সমস্ত ইউটিলিটি বিল পরিশোধ না হওয়া পর্যন্ত ডিপোজিট রাখার অধিকার আছে। ইজার নিয়ম অনুযায়ী, জমিদারের চুক্তি শেষ হওয়ার তারিখ থেকে ৩০ দিন পর্যন্ত সম্পত্তি পরিদর্শন এবং ডিপোজিট ফেরত দেওয়ার সময় আছে।
        </p>
      </GlassCard>

      <GlassCard>
        <h2>জমিদার কী কাটতে পারেন এবং কী পারেন না</h2>
        <p>এটি প্রতিটি ভাড়াটিয়ার জন্য সবচেয়ে গুরুত্বপূর্ণ অংশ। ডিপোজিট বিবাদের #১ কারণ হল "সাধারণ ব্যবহার" এবং "প্রকৃত ক্ষতি" এর মধ্যে পার্থক্য নিয়ে অসম্মতি।</p>

        <h3 className="text-desert-primary">আইনি কর্তন যা জমিদার করতে পারেন</h3>
        <div className="space-y-2 mb-6">
          <div className="bg-[#0A0E1A] p-3 rounded-lg">
            <p className="text-white font-medium">১. অপরিশোধিত ভাড়া</p>
            <p className="text-gray-400 text-sm">শেষ মাসের কোনো বকেয়া ভাড়া ডিপোজিট থেকে কাটা যেতে পারে।</p>
          </div>
          <div className="bg-[#0A0E1A] p-3 rounded-lg">
            <p className="text-white font-medium">২. অপরিশোধিত ইউটিলিটি বিল</p>
            <p className="text-gray-400 text-sm">অপরিশোধিত SEC বিদ্যুৎ বিল, পানি বিল এবং ইন্টারনেট সাবস্ক্রিপশন।</p>
          </div>
          <div className="bg-[#0A0E1A] p-3 rounded-lg">
            <p className="text-white font-medium">৩. সাধারণ ব্যবহারের বাইরের ক্ষতি</p>
            <p className="text-gray-400 text-sm">ভাঙা টাইল, নষ্ট AC, দেয়ালে বড় গর্ত, দাগযুক্ত কার্পেট, ভাঙা জানালা।</p>
          </div>
          <div className="bg-[#0A0E1A] p-3 rounded-lg">
            <p className="text-white font-medium">৪. পরিষ্কারের খরচ (অত্যন্ত নোংরা অবস্থায় ফেলে রাখলে)</p>
            <p className="text-gray-400 text-sm">যদি সম্পত্তি অত্যন্ত নোংরা অবস্থায় ফেলে রাখা হয় তবে যুক্তিসঙ্গত পরিষ্কার খরচ কাটা যেতে পারে।</p>
          </div>
        </div>

        <h3 className="text-desert-gold">অবৈধ কর্তন</h3>
        <div className="space-y-2">
          <div className="bg-[#0A0E1A] p-3 rounded-lg">
            <p className="text-white font-medium">১. স্বাভাবিক রঙ ফ্যাকাশে হওয়া</p>
            <p className="text-gray-400 text-sm">সূর্যালোক এবং সাধারণ ব্যবহারে রঙ স্বাভাবিকভাবে ফ্যাকাশে হয়।</p>
          </div>
          <div className="bg-[#0A0E1A] p-3 rounded-lg">
            <p className="text-white font-medium">২. ছবির ফ্রেমের ছোট পেরেকের ছিদ্র</p>
            <p className="text-gray-400 text-sm">ছোট ছিদ্র (৫ মিমির কম) সাধারণ ব্যবহার বলে গণ্য।</p>
          </div>
          <div className="bg-[#0A0E1A] p-3 rounded-lg">
            <p className="text-white font-medium">৩. যন্ত্রপাতির স্বাভাবিক বার্ধক্য</p>
            <p className="text-gray-400 text-sm">এসি এবং ওয়াটার হিটারের সময়ের সাথে কম কার্যকর হওয়া জমিদারের দায়িত্ব।</p>
          </div>
          <div className="bg-[#0A0E1A] p-3 rounded-lg">
            <p className="text-white font-medium">৪. স্বাভাবিক হাঁটার কারণে কার্পেট ঘষে যাওয়া</p>
            <p className="text-gray-400 text-sm">কার্পেট চ্যাপ্টা হওয়া স্বাভাবিক। শুধু দাগ, পোড়া বা ছেঁড়াকে ক্ষতি বলে।</p>
          </div>
          <div className="bg-[#0A0E1A] p-3 rounded-lg">
            <p className="text-white font-medium">৫. দেয়ালে বা মেঝেতে ছোট দাগ</p>
            <p className="text-gray-400 text-sm">আসবাবপত্র থেকে ছোট দাগ কাটা যাবে না।</p>
          </div>
        </div>
      </GlassCard>

      <GlassCard>
        <h2>সম্পূর্ণ ডিপোজিট ফেরত পাওয়ার ধাপে ধাপে গাইড</h2>

        <h3>ধাপ ১: মুভ-ইন পরিদর্শন</h3>
        <p>একটি বাক্স সরানোর আগে, সবকিছু নথিভুক্ত করুন। প্রতিটি ঘর, প্রতিটি দেয়াল, প্রতিটি টাইল এবং প্রতিটি যন্ত্রের তারিখসহ ছবি এবং ভিডিও নিন। মেঝেতে বিদ্যমান দাগ, কার্পেটে দাগ, এসির অবস্থা এবং দেয়ালে ফাটলের দিকে বিশেষ মনোযোগ দিন। টাইমস্ট্যাম্পড রেকর্ডের জন্য ছবিগুলো হোয়াটসঅ্যাপে জমিদারকে পাঠান।</p>

        <h3>ধাপ ২: নিয়মিত রক্ষণাবেক্ষণ</h3>
        <p>প্রতি ৩ মাসে এসি ফিল্টার পরিষ্কার করুন। কোনো রক্ষণাবেক্ষণ সমস্যা দেখা দিলে জমিদারকে লিখিতভাবে জানান। ফুটো পাইপ উপেক্ষা করলে এবং ক্ষতি হলে আপনি দায়ী হতে পারেন।</p>

        <h3>ধাপ ৩: পেশাদার পরিষ্কার</h3>
        <p>চলে যাওয়ার আগে পেশাদার পরিষ্কারের ব্যবস্থা করুন। ২ বেডরুমের অ্যাপার্টমেন্টের গভীর পরিষ্কারের খরচ ২০০-৫০০ SAR। পরিষ্কারের রসিদ এবং পরিষ্কারের পরের ছবি সংরক্ষণ করুন।</p>

        <h3>ধাপ ৪: সমস্ত ফাইনাল ইউটিলিটি বিল পরিশোধ</h3>
        <p>SEC এবং ন্যাশনাল ওয়াটার কোম্পানির সাথে যোগাযোগ করে চূড়ান্ত বিল নিষ্পত্তি করুন। যেকোনো বকেয়া পরিশোধ করুন এবং ক্লিয়ারেন্স সার্টিফিকেট নিন। আপনার ইন্টারনেট প্রদানকারীর ক্ষেত্রেও একই কাজ করুন।</p>

        <h3>ধাপ ৫: আনুষ্ঠানিকভাবে ইজার চুক্তি শেষ করুন</h3>
        <p>ইজার প্ল্যাটফর্মে লগইন করে চুক্তি সমাপ্তি শুরু করুন। ভাড়াটিয়া এবং জমিদার উভয়কেই মুভ-আউট নিশ্চিত করতে হবে।</p>

        <p className="mt-4"><Link href="/ejar-deposit-calculator" className="text-desert-primary underline">ইজার ডিপোজিট রিফান্ড ক্যালকুলেটর</Link> ব্যবহার করুন।</p>
      </GlassCard>

      <GlassCard>
        <h2>বাস্তব জীবনের উদাহরণ</h2>

        <h3>উদাহরণ ১: সম্পূর্ণ ডিপোজিট ফেরত (৫,০০০ SAR)</h3>
        <p>
          আহমেদ রিয়াদে ২ বেডরুমের অ্যাপার্টমেন্ট ৬০,০০০ SAR বার্ষিকে ভাড়া নেন, ৫,০০০ SAR ডিপোজিট দেন। মুভ-ইনের দিন তিনি মেঝেতে একটি দাগ লক্ষ্য করেন। ছবি তুলে হোয়াটসঅ্যাপে জমিদারকে পাঠান। তিন বছর পর মুভ-আউটে জমিদার দাগটি নতুন বলে দাবি করেন। আহমেদ টাইমস্ট্যাম্পড হোয়াটসঅ্যাপ বার্তা দেখান এবং সম্পূর্ণ ৫,০০০ SAR ফেরত পান।
        </p>

        <h3>উদাহরণ ২: আংশিক কর্তন (২,০০০ SAR ক্ষতি)</h3>
        <p>
          মারিয়া জেদ্দায় ফার্নিশড অ্যাপার্টমেন্ট ৪৫,০০০ SAR বার্ষিকে ভাড়া নেন। তিনি এসি রিমোট ভেঙে ফেলেন এবং প্রতিস্থাপন করেননি। এক বছরের বেশি এসি ফিল্টার পরিষ্কার করেননি। মুভ-আউটে এসি নষ্ট এবং রিমোট নেই। ২,০০০ SAR কাটা হয়।
        </p>

        <h3>উদাহরণ ৩: স্বাভাবিক ব্যবহার বিবাদ (ভুল কর্তন ফেরত)</h3>
        <p>
          খালিদ দাম্মামের অ্যাপার্টমেন্টে ৫ বছর থাকেন। মুভ-আউটে জমিদার রঙ ফ্যাকাশে এবং কার্পেট ঘষে যাওয়ার জন্য ৩,০০০ SAR কাটেন। খালিদ ইজার ডিসপিউট সিস্টেম ব্যবহার করেন। রেন্টাল ডিসপিউট কমিটি একমত হয় যে এটি স্বাভাবিক ব্যবহার এবং জমিদারকে সম্পূর্ণ টাকা ফেরত দেওয়ার নির্দেশ দেয়।
        </p>
      </GlassCard>

      <GlassCard>
        <h2>ইজার বিবাদ মোকাবেলা</h2>
        <p>যদি জমিদার ডিপোজিট ফেরত দিতে অস্বীকার করেন তবে এই প্রক্রিয়া অনুসরণ করুন:</p>

        <div className="space-y-3">
          <div className="bg-[#0A0E1A] p-3 rounded-lg">
            <p className="text-white font-medium">ধাপ ১: লিখিত যোগাযোগ</p>
            <p className="text-gray-400 text-sm">হোয়াটসঅ্যাপ বা ইমেলে আনুষ্ঠানিক লিখিত অনুরোধ পাঠান। জমিদারকে ৭ দিন দিন।</p>
          </div>
          <div className="bg-[#0A0E1A] p-3 rounded-lg">
            <p className="text-white font-medium">ধাপ ২: ইজার ডিসপিউট ফিচার ব্যবহার</p>
            <p className="text-gray-400 text-sm">ইজার প্ল্যাটফর্মে লগইন করে আপনার চুক্তিতে গিয়ে "বিবাদ" অপশন নির্বাচন করুন।</p>
          </div>
          <div className="bg-[#0A0E1A] p-3 rounded-lg">
            <p className="text-white font-medium">ধাপ ৩: রেন্টাল ডিসপিউট কমিটিতে যান</p>
            <p className="text-gray-400 text-sm">বিচার মন্ত্রণালয়ের নাজিজ পোর্টালের মাধ্যমে মামলা দায়ের করুন। বেশিরভাগ মামলা ২-৪ সপ্তাহে নিষ্পত্তি হয়।</p>
          </div>
        </div>

        <p className="mt-4">
          <Link href="/ejar-deposit-calculator" className="text-desert-primary underline">ইজার ডিপোজিট রিফান্ড ক্যালকুলেটর</Link> ব্যবহার করুন এবং আরও গাইডের জন্য <Link href="/blog" className="text-desert-primary underline">আমাদের ব্লগ</Link> দেখুন।
        </p>
      </GlassCard>
    </article>
  )
}

export default async function EjarGuidePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  return (
    <div className="relative z-10 px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        {locale === 'ar' ? <ArContent /> : locale === 'ur' ? <UrContent /> : locale === 'tl' ? <TlContent /> : locale === 'bn' ? <BnContent /> : <EnContent />}
      </div>
    </div>
  )
}
