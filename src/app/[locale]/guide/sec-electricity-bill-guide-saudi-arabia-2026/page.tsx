import type { Metadata } from 'next'
import Link from 'next/link'
import { GlassCard } from '@/components/GlassCard'

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params
  const isDefault = locale === 'en'
  const base = '/guide/sec-electricity-bill-guide-saudi-arabia-2026'
  const baseUrl = 'https://sauditoolhub.com'
  const titles: Record<string, string> = {
    en: 'Free SEC Electricity Bill Calculator 2026: Check Now',
    ar: 'حاسبة فاتورة الكهرباء المجانية 2026 - تحقق الآن',
    ur: 'مفت SEC بجلی بل کیلکولیٹر 2026 - ابھی چیک کریں',
    tl: 'Libreng SEC Electricity Bill Calculator 2026 - I-check Ngayon',
    bn: 'ফ্রি SEC বিদ্যুৎ বিল ক্যালকুলেটর 2026 - এখনই দেখুন',
  }
  const descriptions: Record<string, string> = {
    en: 'Free SEC electricity bill guide for Saudi Arabia 2026. Understand tariff tiers, calculate your bill instantly, and cut summer energy costs. Check now.',
    ar: 'دليل مجاني لفاتورة الكهرباء في السعودية 2026. افهم شرائح التعريفة، احسب فاتورتك فوراً، وخفّض تكاليف الطاقة الصيفية. تحقق الآن.',
    ur: 'سعودی عرب میں مفت SEC بجلی بل گائیڈ 2026۔ ٹیرف درجے سمجھیں، اپنے بل کا فوری حساب لگائیں، اور گرمیوں کے اخراجات کم کریں۔',
    tl: 'Libreng gabay sa SEC electricity bill para sa Saudi Arabia 2026. Unawain ang tariff tiers, kalkulahin agad ang bill, at bawasan ang summer costs.',
    bn: 'সৌদি আরব ২০২৬-এর জন্য ফ্রি SEC বিদ্যুৎ বিল গাইড। ট্যারিফ টিয়ার বুঝুন, সাথে সাথে বিল হিসাব করুন এবং গ্রীষ্মের খরচ কমান।',
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
  "headline": "The Complete Guide to SEC Electricity Bills & Tariff Rates in Saudi Arabia 2026",
  "description": "Learn how SEC electricity tariffs work in Saudi Arabia 2026. Understand the progressive tier system, calculate your bill, reduce summer consumption, and use the Sauditoolhub SEC Bill Estimator.",
  "author": { "@type": "Organization", "name": "Sauditoolhub" },
  "datePublished": "2026-01-15",
  "dateModified": "2026-07-28"
}

const faqsEn = [
  { question: 'What is the SEC electricity tariff in Saudi Arabia 2026?', answer: "The SEC (Saudi Electricity Company) tariff uses a progressive tiered system. For residential users, Tier 1 (0-2,000 kWh) costs ~18 Halalas/kWh, Tier 2 (2,001-4,000 kWh) ~30 Halalas/kWh, Tier 3 (4,001-6,000 kWh) ~45 Halalas/kWh, and Tier 4 (above 6,000 kWh) ~60 Halalas/kWh. Only the portion of consumption in each tier is charged at that tier's rate." },
  { question: 'How can I reduce my SEC electricity bill in summer?', answer: 'Set your AC to 24°C instead of 18°C (saves up to 30% on cooling). Clean AC filters every month. Use LED bulbs. Unplug devices when not in use. Run appliances like washing machines at night. Use energy-efficient appliances. Install a smart meter to track daily usage via the SEC app. Consider solar panels for long-term savings.' },
  { question: 'How is my SEC electricity bill calculated?', answer: 'Your bill is calculated using the progressive tier system. For example, if you consume 4,500 kWh: Tier 1 (2,000 × 0.18 = 360 SAR) + Tier 2 (2,000 × 0.30 = 600 SAR) + Tier 3 (500 × 0.45 = 225 SAR) = 1,185 SAR, then add 15% VAT (177.75 SAR) = 1,362.75 SAR total.' },
  { question: 'What is the SEC Saher app and how does it help?', answer: 'The SEC Saher app (now called SEC Smart Meter app) lets you monitor your electricity consumption in real time. It shows daily usage, estimated monthly bill, and consumption trends. Download it from the App Store or Google Play and link your SEC account number.' },
  { question: 'Why is my SEC bill so high in summer?', answer: 'Summer bills spike mainly due to air conditioning, which can account for 50-70% of total consumption. AC compressors work harder when outdoor temperatures exceed 45°C. Additional factors include refrigerators running more, pool pumps, and higher usage of fans and cooling appliances.' },
  { question: 'How do I pay my SEC electricity bill?', answer: 'You can pay via: (1) SEC app or website using your credit/debit card. (2) SADAD payment system through any Saudi bank app (Al Rajhi, SNB, Riyad Bank, Alinma). (3) Absher platform under My Services. (4) Setting up auto-debit through your bank to avoid late fees.' },
  { question: "What happens if I don't pay my SEC bill on time?", answer: 'Late payment results in a disconnection notice. SEC will send SMS reminders. If unpaid after the due date, a late fee of up to 1% of the bill amount is charged. Continued non-payment leads to service disconnection. Reconnection fees apply. It can also affect your credit score through SIMAH or Saudi credit bureaus.' },
  { question: 'Is there an SEC bill calculator for Saudi Arabia?', answer: 'Yes, Sauditoolhub offers a free SEC Bill Estimator at /sec-bill-calculator. Enter your expected monthly kWh usage, and it calculates your estimated bill including the progressive tier rates, applicable discounts, and 15% VAT.' },
]

const articleSchemaAr = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "الدليل الشامل لفاتورة الكهرباء وتعريفة الشركة السعودية للكهرباء 2026",
  "description": "تعرف على كيفية عمل تعريفة الكهرباء في السعودية 2026. افهم نظام الشرائح التصاعدية، احسب فاتورتك، خفض استهلاك الصيف، واستخدم حاسبة فاتورة الكهرباء من Sauditoolhub.",
  "author": { "@type": "Organization", "name": "Sauditoolhub" },
  "datePublished": "2026-01-15",
  "dateModified": "2026-07-28"
}

const faqsAr = [
  { question: 'ما هي تعريفة الكهرباء في السعودية 2026؟', answer: 'تعريفة الشركة السعودية للكهرباء تستخدم نظام الشرائح التصاعدية. الشريحة الأولى (0-2000 كيلوواط) حوالي 18 هللة/كيلوواط، الشريحة الثانية (2001-4000) حوالي 30 هللة/كيلوواط، الشريحة الثالثة (4001-6000) حوالي 45 هللة/كيلوواط، الشريحة الرابعة (أكثر من 6000) حوالي 60 هللة/كيلوواط. يتم حساب كل شريحة بسعرها الخاص.' },
  { question: 'كيف يمكنني تقليل فاتورة الكهرباء في الصيف؟', answer: 'اضبط المكيف على 24 درجة مئوية بدلاً من 18 (يوفر حتى 30% من التبريد). نظف فلاتر المكيف شهرياً. استخدم لمبات LED. افصل الأجهزة عند عدم الاستخدام. شغل الغسالة ليلاً. استخدم أجهزة موفرة للطاقة. ركب عداد ذكي لتتبع الاستهلاك عبر تطبيق SEC.' },
  { question: 'كيف يتم حساب فاتورة الكهرباء؟', answer: 'تحسب الفاتورة بنظام الشرائح التصاعدية. مثلاً استهلاك 4500 كيلوواط: الشريحة الأولى (2000 × 0.18 = 360 ريال) + الثانية (2000 × 0.30 = 600) + الثالثة (500 × 0.45 = 225) = 1185 ريال، ثم إضافة 15% ضريبة قيمة مضافة (177.75 ريال) = 1362.75 ريال.' },
  { question: 'ما هو تطبيق ساهر من SEC؟', answer: 'تطبيق ساهر (عداد الكهرباء الذكي) يتيح مراقبة استهلاك الكهرباء لحظياً. يعرض الاستهلاك اليومي والفاتورة التقديرية الشهرية. حمل التطبيق من آب ستور أو جوجل بلاي واربط رقم حسابك في SEC.' },
  { question: 'لماذا فاتورة الكهرباء مرتفعة في الصيف؟', answer: 'ترتفع الفواتير صيفاً بسبب المكيفات التي تشكل 50-70% من الاستهلاك. ضواغط المكيف تعمل بقوة أكبر حين تتجاوز الحرارة 45 درجة مئوية. بالإضافة للثلاجات والمضخات وزيادة استخدام المراوح.' },
  { question: 'كيف أدفع فاتورة الكهرباء؟', answer: 'الدفع عبر: (1) تطبيق أو موقع SEC بالبطاقة البنكية. (2) نظام سداد عبر أي تطبيق بنكي (الراجحي، الأهلي، الرياض، الإنماء). (3) أبشر تحت خدماتي. (4) تفعيل الخصم التلقائي لتجنب رسوم التأخير.' },
  { question: 'ماذا يحدث إذا لم أدفع الفاتورة في الوقت المحدد؟', answer: 'يتم إرسال إشعار بالفصل. غرامة تأخير تصل إلى 1% من قيمة الفاتورة. عدم الدفع يؤدي لفصل الخدمة مع رسوم إعادة تشغيل. قد يؤثر على التصنيف الائتماني عبر سمة أو مكاتب الائتمان السعودية.' },
  { question: 'هل توجد حاسبة لفواتير الكهرباء؟', answer: 'نعم، Sauditoolhub توفر حاسبة تقدير فاتورة الكهرباء المجانية في /sec-bill-calculator. أدخل استهلاكك الشهري المتوقع لتحصل على تقدير يشمل الشرائح والخصم وضريبة القيمة المضافة.' },
]

const articleSchemaUr = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "SEC بجلی کے بل اور ٹیرف ریٹس کا مکمل گائیڈ سعودی عرب 2026",
  "description": "سعودی عرب 2026 میں SEC بجلی کے ٹیرف کو سمجھیں۔ ترقی درجہ بندی کے نظام کو جانیں، اپنا بل نکالیں، گرمیوں میں بجلی کم کریں، اور Sauditoolhub کے SEC بل کیلکولیٹر سے فائدہ اٹھائیں۔",
  "author": { "@type": "Organization", "name": "Sauditoolhub" },
  "datePublished": "2026-01-15",
  "dateModified": "2026-07-28"
}

const faqsUr = [
  { question: 'سعودی عرب 2026 میں SEC بجلی کا ٹیرف کیا ہے؟', answer: 'SEC (سعودی الیکٹرسٹی کمپنی) ترقی درجہ بندی کا نظام استعمال کرتی ہے۔ پہلی درجہ (0-2000 یونٹ) ~18 هللے/یونٹ، دوسری درجہ (2001-4000) ~30 هللے/یونٹ، تیسری درجہ (4001-6000) ~45 هللے/یونٹ، چوتھی درجہ (6000 سے اوپر) ~60 هللے/یونٹ۔ ہر درجہ میں صرف اتنے یونٹس کی شرح لگتی ہے۔' },
  { question: 'گرمیوں میں بجلی کا بل کیسے کم کریں؟', answer: 'AC 24°C پر سیٹ کریں نہ کہ 18°C (30% بچت)۔ ماہانہ AC فلٹر صاف کریں۔ LED بلب استعمال کریں۔ آلہ بند ہونے پر ان پلگ کریں۔ واشنگ مشین رات کو چلائیں۔ توانائی بچانے والے آلات خریدیں۔ SEC ایپ سے یومیہ استعمال دیکھیں۔' },
  { question: 'SEC بجلی کا بل کیسے نکالا جاتا ہے؟', answer: 'مثال: 4500 یونٹ استعمال: درجہ اول (2000 × 0.18 = 360 ریال) + درجہ دوم (2000 × 0.30 = 600) + درجہ سوم (500 × 0.45 = 225) = 1185 ریال، پھر 15% VAT (177.75) = کل 1362.75 ریال۔' },
  { question: 'SEC Saher ایپ کیا ہے؟', answer: 'SEC ساہر (سمارٹ میٹر) ایپ ریئل ٹائم بجلی استعمال دکھاتی ہے۔ یومیہ کھپت، تخمینی ماہانہ بل، اور رجحانات دیکھیں۔ App Store یا Google Play سے ڈاؤن لوڈ کریں۔' },
  { question: 'گرمیوں میں بل زیادہ کیوں آتا ہے؟', answer: 'ایئر کنڈیشنر 50-70% بجلی استعمال کرتے ہیں۔ جب درجہ حرارت 45°C سے زیادہ ہو تو کمپریسر زیادہ محنت کرتا ہے۔ فریج، پول پمپ، پنکھے بھی اضافہ کرتے ہیں۔' },
  { question: 'SEC بل کیسے ادا کریں؟', answer: '(1) SEC ایپ یا ویب سائٹ۔ (2) سداد سسٹم بینک ایپ سے (الراجحی، SNB، ریاض بینک، الانماء)۔ (3) أبشر پلیٹ فارم۔ (4) آٹو ڈیبٹ سیٹ اپ کریں۔' },
  { question: 'بل وقت پر نہ دینے پر کیا ہوتا ہے؟', answer: 'کنکشن منقطع ہونے کا نوٹس آتا ہے۔ 1% تک جرمانہ۔ مسلسل عدم ادائیگی پر بجلی منقطع، دوبارہ کنکشن فیس، اور SIMAH پر کریڈٹ سکور متاثر۔' },
  { question: 'کیا سعودی عرب کے لیے SEC بل کیلکولیٹر ہے؟', answer: 'ہاں، Sauditoolhub مفت SEC بل کیلکولیٹر /sec-bill-calculator پر فراہم کرتا ہے۔ اپنا ماہانہ یونٹ ڈالیں اور تخمینہ بل دیکھیں۔' },
]

const articleSchemaTl = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Gabay sa SEC Electricity Bill at Tariff Rates sa Saudi Arabia 2026",
  "description": "Alamin kung paano gumagana ang SEC electricity tariff sa Saudi Arabia 2026. Intindihin ang progressive tier system, kalkulahin ang iyong bill, bawasan ang konsumo sa tag-init, at gamitin ang SEC Bill Estimator ng Sauditoolhub.",
  "author": { "@type": "Organization", "name": "Sauditoolhub" },
  "datePublished": "2026-01-15",
  "dateModified": "2026-07-28"
}

const faqsTl = [
  { question: 'Ano ang SEC electricity tariff sa Saudi Arabia 2026?', answer: 'Ang SEC (Saudi Electricity Company) tariff ay gumagamit ng progressive tiered system. Tier 1 (0-2,000 kWh) ay ~18 Halalas/kWh, Tier 2 (2,001-4,000) ~30 Halalas/kWh, Tier 3 (4,001-6,000) ~45 Halalas/kWh, at Tier 4 (higit sa 6,000) ~60 Halalas/kWh. Ang konsumo lamang sa bawat tier ang sinisingil sa rate nito.' },
  { question: 'Paano ko mababawasan ang aking SEC bill sa tag-init?', answer: 'Itakda ang AC sa 24°C sa halip na 18°C (makatipid ng hanggang 30%). Linisin ang AC filters buwan-buwan. Gumamit ng LED bulbs. I-unplug ang appliances kapag hindi ginagamit. Patakbuhin ang washing machine sa gabi. Gumamit ng energy-efficient appliances. Gamitin ang SEC app para subaybayan ang araw-araw na konsumo.' },
  { question: 'Paano kinakalkula ang SEC electricity bill?', answer: 'Halimbawa: 4,500 kWh konsumo: Tier 1 (2,000 × 0.18 = 360 SAR) + Tier 2 (2,000 × 0.30 = 600) + Tier 3 (500 × 0.45 = 225) = 1,185 SAR, dagdag ang 15% VAT (177.75 SAR) = 1,362.75 SAR total.' },
  { question: 'Ano ang SEC Saher app?', answer: 'Ang SEC Saher (smart meter) app ay nagpapakita ng real-time na konsumo ng kuryente. Ipinapakita nito ang araw-araw na paggamit, tinatayang buwanang bill, at trends. I-download mula sa App Store o Google Play at i-link ang iyong SEC account number.' },
  { question: 'Bakit napakataas ng SEC bill ko tuwing tag-init?', answer: 'Tumataas ang bill dahil sa air conditioning na umaabot ng 50-70% ng kabuuang konsumo. Mas pinaghirapan ng AC compressor kapag ang temperatura ay higit sa 45°C. Dagdag pa ang refrigerator, pool pump, at iba pang appliances.' },
  { question: 'Paano ako magbabayad ng SEC bill?', answer: 'Maaari kang magbayad sa pamamagitan ng: (1) SEC app o website gamit ang credit/debit card. (2) SADAD payment system sa anumang Saudi bank app. (3) Absher platform. (4) Pag-set up ng auto-debit para maiwasan ang late fees.' },
  { question: 'Anong mangyayari kung hindi ako magbayad ng SEC bill on time?', answer: 'Makakatanggap ka ng disconnection notice. Late fee na hanggang 1% ng bill amount. Ang patuloy na hindi pagbabayad ay magreresulta sa pagkakakonekta ng serbisyo. May reconnection fee. Maaari ring maapektuhan ang iyong credit score sa SIMAH.' },
  { question: 'May SEC bill calculator ba para sa Saudi Arabia?', answer: 'Oo, nag-aalok ang Sauditoolhub ng libreng SEC Bill Estimator sa /sec-bill-calculator. Ilagay ang iyong inaasahang buwanang kWh at kalkulahin ang tinatayang bill kasama ang tier rates at 15% VAT.' },
]

const articleSchemaBn = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "সৌদি আরবে SEC বিদ্যুৎ বিল ও ট্যারিফ হারের সম্পূর্ণ গাইড 2026",
  "description": "সৌদি আরব 2026-এ SEC বিদ্যুৎ ট্যারিফ কিভাবে কাজ করে তা জানুন। প্রগ্রেসিভ টায়ার সিস্টেম বুঝুন, আপনার বিল গণনা করুন, গ্রীষ্মে খরচ কমান, এবং Sauditoolhub-এর SEC বিল এস্টিমেটর ব্যবহার করুন।",
  "author": { "@type": "Organization", "name": "Sauditoolhub" },
  "datePublished": "2026-01-15",
  "dateModified": "2026-07-28"
}

const faqsBn = [
  { question: 'সৌদি আরব 2026-এ SEC বিদ্যুৎ ট্যারিফ কী?', answer: 'SEC (সৌদি ইলেকট্রিসিটি কোম্পানি) প্রগ্রেসিভ টায়ার্ড সিস্টেম ব্যবহার করে। টায়ার 1 (0-2,000 kWh) ~18 হালালা/kWh, টায়ার 2 (2,001-4,000) ~30 হালালা/kWh, টায়ার 3 (4,001-6,000) ~45 হালালা/kWh, টায়ার 4 (6,000-এর উপরে) ~60 হালালা/kWh। প্রতিটি টায়ারের শুধু সেই অংশের জন্যই সেই হার ধার্য হয়।' },
  { question: 'গ্রীষ্মে SEC বিল কীভাবে কমানো যায়?', answer: 'এসি 24°C-এ সেট করুন 18°C-র পরিবর্তে (30% পর্যন্ত সাশ্রয়)। মাসে মাসে এসি ফিল্টার পরিষ্কার করুন। এলইডি বাল্ব ব্যবহার করুন। ব্যবহার না করার সময় ডিভাইস আনপ্লাগ করুন। রাতে ওয়াশিং মেশিন চালান। এনার্জি-এফিশিয়েন্ট অ্যাপ্লায়েন্স ব্যবহার করুন। SEC অ্যাপ দিয়ে দৈনিক ব্যবহার ট্র্যাক করুন।' },
  { question: 'SEC বিদ্যুৎ বিল কীভাবে গণনা করা হয়?', answer: 'উদাহরণ: 4,500 kWh: টায়ার 1 (2,000 × 0.18 = 360 SAR) + টায়ার 2 (2,000 × 0.30 = 600) + টায়ার 3 (500 × 0.45 = 225) = 1,185 SAR, তারপর 15% VAT (177.75) = মোট 1,362.75 SAR।' },
  { question: 'SEC Saher অ্যাপ কী?', answer: 'SEC Saher (স্মার্ট মিটার) অ্যাপ রিয়েল-টাইম বিদ্যুৎ ব্যবহার দেখায়। দৈনিক খরচ, আনুমানিক মাসিক বিল এবং ট্রেন্ড দেখায়। অ্যাপ স্টোর বা গুগল প্লে থেকে ডাউনলোড করে SEC অ্যাকাউন্ট নম্বর লিংক করুন।' },
  { question: 'গ্রীষ্মে বিল বেশি কেন আসে?', answer: 'এয়ার কন্ডিশনার 50-70% খরচ করে। তাপমাত্রা 45°C-এর বেশি হলে কম্প্রেসার বেশি পরিশ্রম করে। ফ্রিজ, পুল পাম্প, ফ্যানও বাড়তি খরচ করে।' },
  { question: 'SEC বিল কীভাবে পরিশোধ করবেন?', answer: '(1) SEC অ্যাপ বা ওয়েবসাইট। (2) সাদাদ পেমেন্ট সিস্টেম (আল রাজি, SNB, রিয়াদ ব্যাংক, আলইনমা)। (3) আবশের প্ল্যাটফর্ম। (4) অটো-ডেবিট সেটআপ করুন।' },
  { question: 'সময়মতো বিল না দিলে কী হয়?', answer: 'কানেকশন বিচ্ছিন্ন হওয়ার নোটিশ আসে। 1% পর্যন্ত জরিমানা। না দিলে বিদ্যুৎ সংযোগ বিচ্ছিন্ন, পুনঃসংযোগ ফি, এবং SIMAH-এ ক্রেডিট স্কোর প্রভাবিত।' },
  { question: 'সৌদি আরবের জন্য SEC বিল ক্যালকুলেটর আছে?', answer: 'হ্যাঁ, Sauditoolhub বিনামূল্যে SEC বিল এস্টিমেটর সরবরাহ করে /sec-bill-calculator-এ। আপনার মাসিক kWh দিন এবং আনুমানিক বিল দেখুন।' },
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
        <p className="text-desert-primary text-sm font-medium tracking-widest uppercase">Electricity Guide</p>
        <h1 className="text-3xl md:text-4xl font-bold text-white mt-2">The Complete Guide to SEC Electricity Bills & Tariff Rates in Saudi Arabia 2026</h1>
        <p className="text-gray-400 mt-3 max-w-2xl mx-auto">
          Understand Saudi Arabia's progressive electricity tariff system, learn how to calculate your SEC bill accurately, and discover proven strategies to reduce your summer consumption.
        </p>
      </div>

      <GlassCard>
        <h2>Introduction</h2>
        <p>
          There is a moment every Saudi resident knows well — the day the SEC bill arrives in summer. You open the notification on Absher or the SEC app, and your heart sinks. A bill that was 300 SAR in winter has ballooned to 1,500 SAR or more. The shock is real, and it affects everyone from apartment dwellers in Jeddah to villa owners in Riyadh.
        </p>
        <p>
          The truth is, most people overpay simply because they do not understand how the SEC tariff system works. Saudi Arabia uses a <strong>progressive tiered tariff</strong> — the more electricity you consume, the higher the rate you pay per kilowatt-hour (kWh). This means that running an extra AC unit or leaving lights on all day does not just add a few riyals; it can push you into a higher tier where every single unit costs significantly more.
        </p>
        <p>
          This guide explains everything you need to know about SEC electricity bills in 2026. You will learn the exact tariff rates for each consumption tier, how to calculate your bill step by step, why summer bills spike so dramatically, and ten proven ways to reduce your monthly costs. Use our <Link href="/sec-bill-calculator" className="text-desert-primary underline">SEC Bill Estimator</Link> to predict your next bill and plan your budget.
        </p>
      </GlassCard>

      <GlassCard>
        <h2>Understanding the SEC Tariff System</h2>
        <p>
          The Saudi Electricity Company (SEC), regulated by the Electricity and Cogeneration Regulatory Authority (ECRA), uses a <strong>progressive tiered pricing system</strong>. This means the price per kilowatt-hour increases as your total monthly consumption rises. It is designed to encourage conservation — heavy users pay more per unit.
        </p>
        <h3>The Four Tariff Tiers (Residential, 2026)</h3>
        <div className="bg-[#0A0E1A] p-5 rounded-xl mb-4">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-gray-700">
                <th className="text-left py-2 text-desert-primary">Tier</th>
                <th className="text-left py-2 text-desert-primary">Monthly Consumption</th>
                <th className="text-left py-2 text-desert-primary">Rate (Halalas/kWh)</th>
                <th className="text-left py-2 text-desert-primary">Rate (SAR/kWh)</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-gray-800">
                <td className="py-2 text-white">Tier 1 (Subsidized)</td>
                <td className="py-2 text-gray-300">0 – 2,000 kWh</td>
                <td className="py-2 text-gray-300">18 Halalas</td>
                <td className="py-2 text-gray-300">0.18 SAR</td>
              </tr>
              <tr className="border-b border-gray-800">
                <td className="py-2 text-white">Tier 2</td>
                <td className="py-2 text-gray-300">2,001 – 4,000 kWh</td>
                <td className="py-2 text-gray-300">30 Halalas</td>
                <td className="py-2 text-gray-300">0.30 SAR</td>
              </tr>
              <tr className="border-b border-gray-800">
                <td className="py-2 text-white">Tier 3</td>
                <td className="py-2 text-gray-300">4,001 – 6,000 kWh</td>
                <td className="py-2 text-gray-300">45 Halalas</td>
                <td className="py-2 text-gray-300">0.45 SAR</td>
              </tr>
              <tr>
                <td className="py-2 text-white">Tier 4 (Highest)</td>
                <td className="py-2 text-gray-300">Above 6,000 kWh</td>
                <td className="py-2 text-gray-300">60 Halalas</td>
                <td className="py-2 text-gray-300">0.60 SAR</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="bg-desert-primary/10 border border-desert-primary/30 p-4 rounded-xl mb-4">
          <p className="text-sm font-medium text-desert-primary">
            ⚠️ <strong>Critical: How Tiered Billing Actually Works</strong>
          </p>
          <p className="text-sm mt-2">
            The most common mistake people make is thinking that if you consume 4,500 kWh, the ENTIRE 4,500 kWh is charged at the Tier 3 rate of 45 Halalas. <strong>This is incorrect.</strong> Only the portion of consumption within each tier is charged at that tier's rate. Your first 2,000 kWh are always at the lowest subsidized rate (18 Halalas). Only the next 2,000 kWh (2,001–4,000) are at the Tier 2 rate. And only the remaining 500 kWh (4,001–4,500) are at the Tier 3 rate.
          </p>
        </div>
      </GlassCard>

      <GlassCard>
        <h2>Summer vs. Winter Consumption</h2>
        <p>
          The difference between a winter SEC bill and a summer SEC bill in Saudi Arabia can be shocking. A typical 3-bedroom apartment in Riyadh might consume 1,200 kWh in January (bill: ~250 SAR) but 4,500 kWh in July (bill: ~1,360 SAR). That is a <strong>5× increase</strong> driven almost entirely by air conditioning.
        </p>
        <p>
          Air conditioning accounts for 50–70% of total summer electricity consumption in Saudi homes. An average 18,000 BTU split AC unit running for 10 hours a day consumes approximately 450–600 kWh per month. A villa with 5–7 AC units can easily exceed 6,000 kWh in peak summer months, pushing into Tier 4 where every kWh costs 60 Halalas.
        </p>
        <p>
          To estimate your monthly kWh based on AC usage: <strong>AC Tonnage × 1.2 kWh per hour × hours per day × 30 days</strong>. A 2-ton AC unit running 12 hours/day: 2 × 1.2 × 12 × 30 = 864 kWh per month from that single unit.
        </p>
        <p>
          Other appliances also contribute: water heaters (300–500 kWh/month in winter), refrigerators (150–300 kWh/month), washing machines (30–50 kWh/month), and pool pumps (200–400 kWh/month in summer).
        </p>
      </GlassCard>

      <GlassCard>
        <h2>Step-by-Step Calculation Formula</h2>
        <p>
          Here is the exact formula to calculate your SEC bill manually:
        </p>
        <div className="bg-[#0A0E1A] p-4 rounded-xl mb-4 font-mono text-sm text-gray-300">
          <p>Let T1 = min(consumption, 2000)</p>
          <p>Let T2 = max(0, min(consumption - 2000, 2000))</p>
          <p>Let T3 = max(0, min(consumption - 4000, 2000))</p>
          <p>Let T4 = max(0, consumption - 6000)</p>
          <p>Bill before VAT = (T1 × 0.18) + (T2 × 0.30) + (T3 × 0.45) + (T4 × 0.60)</p>
          <p>VAT = Bill before VAT × 0.15</p>
          <p className="text-desert-primary font-semibold">Total = Bill before VAT + VAT</p>
        </div>
      </GlassCard>

      <GlassCard>
        <h2>Real-Life Calculation Examples</h2>

        <h3>Example 1: Small 2-Bedroom Apartment (1,500 kWh/month)</h3>
        <div className="bg-[#0A0E1A] p-4 rounded-xl mb-4">
          <p className="text-sm">Consumption: 1,500 kWh (stays entirely within Tier 1)</p>
          <p className="text-sm mt-1">Tier 1: 1,500 × 0.18 = 270.00 SAR</p>
          <p className="text-sm mt-1">Tier 2: 0 × 0.30 = 0.00 SAR</p>
          <p className="text-sm mt-1">Tier 3: 0 × 0.45 = 0.00 SAR</p>
          <p className="text-sm mt-1">Tier 4: 0 × 0.60 = 0.00 SAR</p>
          <p className="text-sm mt-2">Bill before VAT: <strong>270.00 SAR</strong></p>
          <p className="text-sm">VAT (15%): <strong>40.50 SAR</strong></p>
          <p className="text-sm text-desert-primary font-semibold">Total Bill: <strong>310.50 SAR</strong></p>
        </div>

        <h3>Example 2: Large 5-Bedroom Villa (4,500 kWh/month in July)</h3>
        <div className="bg-[#0A0E1A] p-4 rounded-xl mb-4">
          <p className="text-sm">Consumption: 4,500 kWh (spans Tier 1, Tier 2, and Tier 3)</p>
          <p className="text-sm mt-1">Tier 1: 2,000 × 0.18 = <strong>360.00 SAR</strong> (first 2,000 units at subsidized rate)</p>
          <p className="text-sm mt-1">Tier 2: 2,000 × 0.30 = <strong>600.00 SAR</strong> (next 2,000 units at medium rate)</p>
          <p className="text-sm mt-1">Tier 3: 500 × 0.45 = <strong>225.00 SAR</strong> (remaining 500 units at high rate)</p>
          <p className="text-sm mt-1">Tier 4: 0 × 0.60 = <strong>0.00 SAR</strong></p>
          <p className="text-sm mt-2">Bill before VAT: 360 + 600 + 225 = <strong>1,185.00 SAR</strong></p>
          <p className="text-sm">VAT (15%): <strong>177.75 SAR</strong></p>
          <p className="text-sm text-desert-primary font-semibold">Total Bill: <strong>1,362.75 SAR</strong></p>
        </div>

        <h3>Example 3: Large Villa with Pool (7,500 kWh/month in August)</h3>
        <div className="bg-[#0A0E1A] p-4 rounded-xl">
          <p className="text-sm">Consumption: 7,500 kWh (spans all four tiers)</p>
          <p className="text-sm mt-1">Tier 1: 2,000 × 0.18 = <strong>360.00 SAR</strong></p>
          <p className="text-sm mt-1">Tier 2: 2,000 × 0.30 = <strong>600.00 SAR</strong></p>
          <p className="text-sm mt-1">Tier 3: 2,000 × 0.45 = <strong>900.00 SAR</strong></p>
          <p className="text-sm mt-1">Tier 4: 1,500 × 0.60 = <strong>900.00 SAR</strong></p>
          <p className="text-sm mt-2">Bill before VAT: 360 + 600 + 900 + 900 = <strong>2,760.00 SAR</strong></p>
          <p className="text-sm">VAT (15%): <strong>414.00 SAR</strong></p>
          <p className="text-sm text-desert-primary font-semibold">Total Bill: <strong>3,174.00 SAR</strong></p>
        </div>
        <p className="mt-4">
          Notice how a jump from 4,500 kWh to 7,500 kWh (67% increase in consumption) results in a bill increase from 1,362.75 to 3,174.00 SAR (133% increase). That is the impact of the progressive tier system — the more you use, the more each additional unit costs.
        </p>
      </GlassCard>

      <GlassCard>
        <h2>Top 10 Proven Ways to Reduce Your SEC Bill</h2>
        <div className="space-y-4">
          <div className="bg-[#0A0E1A] p-4 rounded-lg">
            <p className="text-white font-semibold mb-1">1. Set AC to 24°C Instead of 18°C</p>
            <p className="text-gray-400 text-sm">Every degree below 24°C increases energy consumption by approximately 6–8%. Running your AC at 18°C instead of 24°C can increase cooling costs by 36–48%. Use a fan to supplement cooling — fans use 95% less energy than AC units.</p>
          </div>
          <div className="bg-[#0A0E1A] p-4 rounded-lg">
            <p className="text-white font-semibold mb-1">2. Clean AC Filters Monthly</p>
            <p className="text-gray-400 text-sm">Dirty filters reduce airflow, forcing the AC compressor to work harder. Cleaning or replacing filters every month can reduce AC energy consumption by 5–15%. In Saudi dust conditions, bi-weekly cleaning is even better.</p>
          </div>
          <div className="bg-[#0A0E1A] p-4 rounded-lg">
            <p className="text-white font-semibold mb-1">3. Use LED Bulbs Everywhere</p>
            <p className="text-gray-400 text-sm">LED bulbs consume 80–90% less electricity than incandescent bulbs and last 25 times longer. Replacing all bulbs in a typical villa can save 100–200 kWh per year. Use warm white (3000K) for living areas and cool white (4000K) for kitchens and bathrooms.</p>
          </div>
          <div className="bg-[#0A0E1A] p-4 rounded-lg">
            <p className="text-white font-semibold mb-1">4. Unplug Devices (Eliminate Phantom Load)</p>
            <p className="text-gray-400 text-sm">Devices on standby still consume power — this is called phantom load or vampire power. TVs, phone chargers, gaming consoles, and kitchen appliances can draw 5–10% of your total electricity when idle. Use power strips and switch them off when not in use.</p>
          </div>
          <div className="bg-[#0A0E1A] p-4 rounded-lg">
            <p className="text-white font-semibold mb-1">5. Use the SEC Smart Meter App</p>
            <p className="text-gray-400 text-sm">Download the SEC smart meter app (formerly Saher) to track your daily consumption. The app shows real-time usage, alerts you when you are approaching a higher tier, and provides historical data. Knowledge is power — literally. When you see your daily kWh usage, you can adjust your behavior.</p>
          </div>
          <div className="bg-[#0A0E1A] p-4 rounded-lg">
            <p className="text-white font-semibold mb-1">6. Run Appliances at Night</p>
            <p className="text-gray-400 text-sm">Washing machines, dishwashers, and water heaters generate heat. Running them during the cool night hours (after 10 PM) means your AC does not have to work as hard to remove that heat. This can save 5–10% on combined AC and appliance costs.</p>
          </div>
          <div className="bg-[#0A0E1A] p-4 rounded-lg">
            <p className="text-white font-semibold mb-1">7. Install Energy-Efficient Appliances</p>
            <p className="text-gray-400 text-sm">When replacing old appliances, look for the Saudi Energy Efficiency Center (SEEC) energy rating labels. A 5-star rated AC unit uses up to 30% less electricity than a 2-star unit. Inverter AC technology adjusts compressor speed and uses 30–50% less power than non-inverter units.</p>
          </div>
          <div className="bg-[#0A0E1A] p-4 rounded-lg">
            <p className="text-white font-semibold mb-1">8. Seal Windows and Doors</p>
            <p className="text-gray-400 text-sm">Air leaks around windows and doors force your AC to work harder. Use weather stripping, caulk, or foam sealant. In Saudi homes, this alone can reduce cooling costs by 10–20%. Install curtains or reflective blinds on windows facing the sun.</p>
          </div>
          <div className="bg-[#0A0E1A] p-4 rounded-lg">
            <p className="text-white font-semibold mb-1">9. Reduce Water Heater Temperature</p>
            <p className="text-gray-400 text-sm">Set your water heater thermostat to 50°C instead of 70°C. Each 10°C reduction saves 3–5% on water heating costs. For summer, consider switching off the water heater entirely during the hottest months — the ground water temperature in Saudi Arabia is warm enough for comfortable showers.</p>
          </div>
          <div className="bg-[#0A0E1A] p-4 rounded-lg">
            <p className="text-white font-semibold mb-1">10. Consider Solar Panels (Long-Term)</p>
            <p className="text-gray-400 text-sm">Saudi Arabia's Vision 2030 encourages residential solar power. With abundant sunshine year-round, a 5 kW solar system can generate 700–900 kWh per month, potentially eliminating or drastically reducing your SEC bill. The payback period is typically 5–8 years with current electricity rates and government incentives.</p>
          </div>
        </div>
      </GlassCard>

      <GlassCard>
        <h2>How to Pay Your SEC Bill</h2>
        <p>
          There are several convenient ways to pay your SEC electricity bill in Saudi Arabia:
        </p>
        <div className="space-y-3">
          <div className="bg-[#0A0E1A] p-3 rounded-lg">
            <p className="text-white font-medium">SEC App or Website</p>
            <p className="text-gray-400 text-sm">Download the official SEC app (available on iOS and Android) or visit the SEC website. Register with your account number and pay using Mada, Visa, or Mastercard. The app also shows your bill history and consumption trends.</p>
          </div>
          <div className="bg-[#0A0E1A] p-3 rounded-lg">
            <p className="text-white font-medium">SADAD Payment System</p>
            <p className="text-gray-400 text-sm">Most Saudi banks offer SEC bill payment through the SADAD system. In your bank app (Al Rajhi, SNB, Riyad Bank, Alinma, etc.), go to SADAD Bills, select Saudi Electricity Company, enter your account number, and pay. The payment reflects instantly in the SEC system.</p>
          </div>
          <div className="bg-[#0A0E1A] p-3 rounded-lg">
            <p className="text-white font-medium">Absher Platform</p>
            <p className="text-gray-400 text-sm">Log in to Absher, go to My Services, and select Electricity Bill Payment. This option is linked to your SADAD account and is convenient if you already use Absher for other government services.</p>
          </div>
          <div className="bg-[#0A0E1A] p-3 rounded-lg">
            <p className="text-white font-medium">Auto-Debit (Recommended)</p>
            <p className="text-gray-400 text-sm">Set up automatic monthly payments through your bank. This ensures you never miss a payment deadline, avoiding late fees and disconnection risks. Most Saudi banks offer this service free of charge.</p>
          </div>
        </div>
      </GlassCard>

      <GlassCard>
        <h2>How to Use the Sauditoolhub SEC Bill Estimator</h2>
        <p>
          Our free <Link href="/sec-bill-calculator" className="text-desert-primary font-bold underline">SEC Bill Estimator</Link> makes it easy to predict your next electricity bill. Here is how to use it:
        </p>
        <ol className="list-decimal list-inside space-y-2 text-gray-300">
          <li>Enter your expected monthly consumption in kWh (check your last bill or SEC app for this).</li>
          <li>The calculator automatically applies the correct tier rates.</li>
          <li>It shows the breakdown for each tier and adds 15% VAT.</li>
          <li>You can adjust the consumption amount to see how different usage levels affect your bill.</li>
          <li>Use this to plan your budget and set consumption targets.</li>
        </ol>
        <p className="mt-4">
          Also check out our <Link href="/bill-splitter-calculator" className="text-desert-primary underline">Bill Splitter Calculator</Link> for shared accommodation and <Link href="/used-car-calculator" className="text-desert-primary underline">Used Car Calculator</Link> for vehicle-related expenses.
        </p>
      </GlassCard>

      <GlassCard>
        <h2>Conclusion</h2>
        <p>
          Understanding the SEC progressive tiered tariff system is the first step to taking control of your electricity costs in Saudi Arabia. The key takeaway is simple: every kilowatt-hour matters because the more you consume, the more each additional unit costs. By monitoring your usage through the SEC smart meter app, adopting energy-efficient habits, and using tools like the <Link href="/sec-bill-calculator" className="text-desert-primary underline">SEC Bill Estimator</Link>, you can avoid bill shock and keep your monthly expenses manageable — even in the hottest Saudi summer.
        </p>
        <p>
          Visit our <Link href="/blog" className="text-desert-primary underline">blog</Link> for more guides on living efficiently in Saudi Arabia.
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
        <p className="text-desert-primary text-sm font-medium tracking-widest uppercase">دليل الكهرباء</p>
        <h1 className="text-3xl md:text-4xl font-bold text-white mt-2">الدليل الشامل لفاتورة الكهرباء وتعريفة الشركة السعودية للكهرباء 2026</h1>
        <p className="text-gray-400 mt-3 max-w-2xl mx-auto">
          افهم نظام التعريفة التصاعدية للكهرباء في السعودية، تعلم كيف تحسب فاتورة SEC بدقة، واكتشف استراتيجيات مثبتة لتقليل استهلاك الصيف.
        </p>
      </div>
      <GlassCard>
        <h2>مقدمة</h2>
        <p>
          هناك لحظة يعرفها كل مقيم في السعودية جيداً — اليوم الذي تصل فيه فاتورة الكهرباء في الصيف. تفتح الإشعار على أبشر أو تطبيق SEC ويغرق قلبك. فاتورة كانت 300 ريال في الشتاء تضخمت إلى 1500 ريال أو أكثر. الصدمة حقيقية، وهي تؤثر على الجميع من سكان الشقق في جدة إلى أصحاب الفلل في الرياض.
        </p>
        <p>
          الحقيقة أن معظم الناس يدفعون أكثر مما يجب لأنهم لا يفهمون كيف يعمل نظام تعريفة SEC. المملكة تستخدم <strong>نظام التعريفة التصاعدية</strong> — كلما زاد استهلاكك من الكهرباء، زاد السعر الذي تدفعه لكل كيلوواط/ساعة (kWh). هذا يعني أن تشغيل مكيف إضافي أو ترك الأضواء طوال اليوم لا يضيف فقط بضع ريالات؛ بل يمكن أن يدفعك إلى شريحة أعلى حيث كل وحدة تكلف أكثر بكثير.
        </p>
        <p>
          هذا الدليل يشرح كل ما تحتاج معرفته عن فواتير الكهرباء في 2026. ستتعلم أسعار التعريفة الدقيقة لكل شريحة، كيف تحسب فاتورتك خطوة بخطوة، لماذا ترتفع الفواتير صيفاً بشكل كبير، وعشر طرق مثبتة لتقليل تكاليفك الشهرية. استخدم <Link href="/sec-bill-calculator" className="text-desert-primary underline">حاسبة فاتورة الكهرباء</Link> من Sauditoolhub لتوقع فاتورتك القادمة.
        </p>
      </GlassCard>
      <GlassCard>
        <h2>فهم نظام تعريفة SEC</h2>
        <p>
          الشركة السعودية للكهرباء (SEC)، المنظمة من هيئة تنظيم الكهرباء والإنتاج المزدوج (ECRA)، تستخدم <strong>نظام التسعير التصاعدي بالشرائح</strong>. هذا يعني أن سعر الكيلوواط/ساعة يزداد كلما ارتفع استهلاكك الشهري الإجمالي. صمم هذا النظام لتشجيع الترشيد — المستهلكون الكبار يدفعون سعراً أعلى لكل وحدة.
        </p>
        <h3>الشرائح الأربعة للتعريفة (سكني، 2026)</h3>
        <div className="bg-[#0A0E1A] p-5 rounded-xl mb-4">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-gray-700">
                <th className="text-right py-2 text-desert-primary">الشريحة</th>
                <th className="text-right py-2 text-desert-primary">الاستهلاك الشهري</th>
                <th className="text-right py-2 text-desert-primary">السعر (هللة/kWh)</th>
                <th className="text-right py-2 text-desert-primary">السعر (ريال/kWh)</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-gray-800">
                <td className="py-2 text-white text-right">الشريحة الأولى (مدعومة)</td>
                <td className="py-2 text-gray-300 text-right">0 – 2,000 كيلوواط</td>
                <td className="py-2 text-gray-300 text-right">18 هللة</td>
                <td className="py-2 text-gray-300 text-right">0.18 ريال</td>
              </tr>
              <tr className="border-b border-gray-800">
                <td className="py-2 text-white text-right">الشريحة الثانية</td>
                <td className="py-2 text-gray-300 text-right">2,001 – 4,000 كيلوواط</td>
                <td className="py-2 text-gray-300 text-right">30 هللة</td>
                <td className="py-2 text-gray-300 text-right">0.30 ريال</td>
              </tr>
              <tr className="border-b border-gray-800">
                <td className="py-2 text-white text-right">الشريحة الثالثة</td>
                <td className="py-2 text-gray-300 text-right">4,001 – 6,000 كيلوواط</td>
                <td className="py-2 text-gray-300 text-right">45 هللة</td>
                <td className="py-2 text-gray-300 text-right">0.45 ريال</td>
              </tr>
              <tr>
                <td className="py-2 text-white text-right">الشريحة الرابعة (الأعلى)</td>
                <td className="py-2 text-gray-300 text-right">أكثر من 6,000 كيلوواط</td>
                <td className="py-2 text-gray-300 text-right">60 هللة</td>
                <td className="py-2 text-gray-300 text-right">0.60 ريال</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="bg-desert-primary/10 border border-desert-primary/30 p-4 rounded-xl mb-4">
          <p className="text-sm font-medium text-desert-primary">
            ⚠️ <strong>هام: كيف تعمل الشرائح التصاعدية فعلياً</strong>
          </p>
          <p className="text-sm mt-2">
            الخطأ الأكثر شيوعاً هو اعتقاد أنك إذا استهلكت 4,500 كيلوواط، فإن كامل الكمية تحاسب بسعر الشريحة الثالثة 45 هللة. <strong>هذا غير صحيح.</strong> فقط الجزء من الاستهلاك داخل كل شريحة يحاسب بسعر تلك الشريحة. أول 2,000 كيلوواط دائماً بسعر الشريحة الأولى المدعوم (18 هللة). فقط الـ 2,000 التالية (2,001–4,000) بسعر الشريحة الثانية. والباقي 500 (4,001–4,500) بسعر الشريحة الثالثة.
          </p>
        </div>
      </GlassCard>
      <GlassCard>
        <h2>الاستهلاك في الصيف مقابل الشتاء</h2>
        <p>
          الفرق بين فاتورة الكهرباء في الشتاء والصيف في السعودية يمكن أن يكون صادماً. شقة نموذجية بثلاث غرف نوم في الرياض قد تستهلك 1,200 كيلوواط في يناير (الفاتورة ~250 ريال) ولكن 4,500 كيلوواط في يوليو (الفاتورة ~1,360 ريال). هذه زيادة قدرها <strong>5 أضعاف</strong> مدفوعة بالكامل تقريباً بتكييف الهواء.
        </p>
        <p>
          تكييف الهواء يمثل 50–70% من استهلاك الكهرباء الصيفي في المنازل السعودية. مكيف سبليت متوسط 18,000 وحدة يعمل 10 ساعات يومياً يستهلك حوالي 450–600 كيلوواط شهرياً. فيلا بها 5–7 مكيفات يمكن أن تتجاوز 6,000 كيلوواط في أشهر الصيف الذروة، مدفوعة إلى الشريحة الرابعة حيث كل كيلوواط يكلف 60 هللة.
        </p>
        <p>
          لتقدير استهلاكك الشهري: <strong>طن التكييف × 1.2 كيلوواط/ساعة × ساعات التشغيل يومياً × 30 يوم</strong>. مكيف 2 طن يعمل 12 ساعة/يوم: 2 × 1.2 × 12 × 30 = 864 كيلوواط شهرياً من هذا المكيف وحده.
        </p>
      </GlassCard>
      <GlassCard>
        <h2>معادلة حساب الفاتورة خطوة بخطوة</h2>
        <p>إليك المعادلة الدقيقة لحساب فاتورة SEC يدوياً:</p>
        <div className="bg-[#0A0E1A] p-4 rounded-xl mb-4 font-mono text-sm text-gray-300">
          <p>الشريحة 1 = أقل(الاستهلاك، 2000)</p>
          <p>الشريحة 2 = أكبر(0، أقل(الاستهلاك - 2000، 2000))</p>
          <p>الشريحة 3 = أكبر(0، أقل(الاستهلاك - 4000، 2000))</p>
          <p>الشريحة 4 = أكبر(0، الاستهلاك - 6000)</p>
          <p>الفاتورة قبل الضريبة = (ش1 × 0.18) + (ش2 × 0.30) + (ش3 × 0.45) + (ش4 × 0.60)</p>
          <p>ضريبة القيمة المضافة = الفاتورة قبل الضريبة × 0.15</p>
          <p className="text-desert-primary font-semibold">الإجمالي = الفاتورة قبل الضريبة + ضريبة القيمة المضافة</p>
        </div>
      </GlassCard>
      <GlassCard>
        <h2>أمثلة واقعية لحساب الفاتورة</h2>

        <h3>مثال 1: شقة صغيرة غرفتي نوم (1,500 كيلوواط/شهر)</h3>
        <div className="bg-[#0A0E1A] p-4 rounded-xl mb-4">
          <p className="text-sm">الاستهلاك: 1,500 كيلوواط (بالكامل ضمن الشريحة الأولى)</p>
          <p className="text-sm mt-1">الشريحة 1: 1,500 × 0.18 = 270.00 ريال</p>
          <p className="text-sm mt-1">الشريحة 2: 0 × 0.30 = 0.00 ريال</p>
          <p className="text-sm mt-1">الشريحة 3: 0 × 0.45 = 0.00 ريال</p>
          <p className="text-sm mt-1">الشريحة 4: 0 × 0.60 = 0.00 ريال</p>
          <p className="text-sm mt-2">الفاتورة قبل الضريبة: <strong>270.00 ريال</strong></p>
          <p className="text-sm">ضريبة القيمة المضافة (15%): <strong>40.50 ريال</strong></p>
          <p className="text-sm text-desert-primary font-semibold">الإجمالي: <strong>310.50 ريال</strong></p>
        </div>

        <h3>مثال 2: فيلا كبيرة 5 غرف نوم (4,500 كيلوواط/شهر في يوليو)</h3>
        <div className="bg-[#0A0E1A] p-4 rounded-xl mb-4">
          <p className="text-sm">الاستهلاك: 4,500 كيلوواط (يشمل الشرائح 1 و2 و3)</p>
          <p className="text-sm mt-1">الشريحة 1: 2,000 × 0.18 = <strong>360.00 ريال</strong></p>
          <p className="text-sm mt-1">الشريحة 2: 2,000 × 0.30 = <strong>600.00 ريال</strong></p>
          <p className="text-sm mt-1">الشريحة 3: 500 × 0.45 = <strong>225.00 ريال</strong></p>
          <p className="text-sm mt-1">الشريحة 4: 0 × 0.60 = <strong>0.00 ريال</strong></p>
          <p className="text-sm mt-2">الفاتورة قبل الضريبة: 360 + 600 + 225 = <strong>1,185.00 ريال</strong></p>
          <p className="text-sm">ضريبة القيمة المضافة (15%): <strong>177.75 ريال</strong></p>
          <p className="text-sm text-desert-primary font-semibold">الإجمالي: <strong>1,362.75 ريال</strong></p>
        </div>

        <h3>مثال 3: فيلا كبيرة مع مسبح (7,500 كيلوواط/شهر في أغسطس)</h3>
        <div className="bg-[#0A0E1A] p-4 rounded-xl">
          <p className="text-sm">الاستهلاك: 7,500 كيلوواط (يشمل جميع الشرائح)</p>
          <p className="text-sm mt-1">الشريحة 1: 2,000 × 0.18 = <strong>360.00 ريال</strong></p>
          <p className="text-sm mt-1">الشريحة 2: 2,000 × 0.30 = <strong>600.00 ريال</strong></p>
          <p className="text-sm mt-1">الشريحة 3: 2,000 × 0.45 = <strong>900.00 ريال</strong></p>
          <p className="text-sm mt-1">الشريحة 4: 1,500 × 0.60 = <strong>900.00 ريال</strong></p>
          <p className="text-sm mt-2">الفاتورة قبل الضريبة: 360 + 600 + 900 + 900 = <strong>2,760.00 ريال</strong></p>
          <p className="text-sm">ضريبة القيمة المضافة (15%): <strong>414.00 ريال</strong></p>
          <p className="text-sm text-desert-primary font-semibold">الإجمالي: <strong>3,174.00 ريال</strong></p>
        </div>
      </GlassCard>
      <GlassCard>
        <h2>أفضل 10 طرق مثبتة لتقليل فاتورة SEC</h2>
        <div className="space-y-4">
          <div className="bg-[#0A0E1A] p-4 rounded-lg">
            <p className="text-white font-semibold mb-1">1. اضبط المكيف على 24°C بدلاً من 18°C</p>
            <p className="text-gray-400 text-sm">كل درجة تحت 24°C تزيد استهلاك الطاقة بحوالي 6–8%. تشغيل المكيف على 18°C بدلاً من 24°C يمكن أن يزيد تكاليف التبريد 36–48%. استخدم مروحة لتدعيم التبريد — المراوح تستخدم طاقة أقل بنسبة 95% من المكيفات.</p>
          </div>
          <div className="bg-[#0A0E1A] p-4 rounded-lg">
            <p className="text-white font-semibold mb-1">2. نظف فلاتر المكيف شهرياً</p>
            <p className="text-gray-400 text-sm">الفلاتر المتسخة تقلل تدفق الهواء، مما يجبر ضاغط المكيف على العمل بقوة أكبر. تنظيف أو استبدال الفلاتر كل شهر يمكن أن يقلل استهلاك طاقة المكيف 5–15%. في ظروف الغبار السعودية، التنظيف كل أسبوعين أفضل.</p>
          </div>
          <div className="bg-[#0A0E1A] p-4 rounded-lg">
            <p className="text-white font-semibold mb-1">3. استخدم لمبات LED في كل مكان</p>
            <p className="text-gray-400 text-sm">لمبات LED تستهلك كهرباء أقل بنسبة 80–90% من اللمبات المتوهجة وتدوم 25 ضعفاً. استبدال جميع اللمبات في فيلا نموذجية يمكن أن يوفر 100–200 كيلوواط سنوياً.</p>
          </div>
          <div className="bg-[#0A0E1A] p-4 rounded-lg">
            <p className="text-white font-semibold mb-1">4. افصل الأجهزة (القضاء على الحمل الوهمي)</p>
            <p className="text-gray-400 text-sm">الأجهزة في وضع الاستعداد تستهلك طاقة — هذا يسمى الحمل الوهمي. التلفزيونات، شواحن الجوال، أجهزة الألعاب، وأجهزة المطبخ يمكن أن تسحب 5–10% من إجمالي كهربائك عند عدم الاستخدام.</p>
          </div>
          <div className="bg-[#0A0E1A] p-4 rounded-lg">
            <p className="text-white font-semibold mb-1">5. استخدم تطبيق العداد الذكي من SEC</p>
            <p className="text-gray-400 text-sm">حمّل تطبيق العداد الذكي من SEC (سابقاً ساهر) لتتبع استهلاكك اليومي. التطبيق يظهر الاستخدام الفعلي، ينبهك عند اقترابك من شريحة أعلى، ويوفر بيانات تاريخية. المعرفة قوة — حرفياً. عندما ترى استهلاكك اليومي تستطيع تعديل سلوكك.</p>
          </div>
          <div className="bg-[#0A0E1A] p-4 rounded-lg">
            <p className="text-white font-semibold mb-1">6. شغل الأجهزة ليلاً</p>
            <p className="text-gray-400 text-sm">الغسالات، غسالات الصحون، وسخانات المياه تولد حرارة. تشغيلها في ساعات الليل الباردة (بعد 10 مساءً) يعني أن مكيفك لا يحتاج للعمل بقوة لإزالة تلك الحرارة. يمكن أن يوفر 5–10% من تكاليف المكيف والأجهزة مجتمعة.</p>
          </div>
          <div className="bg-[#0A0E1A] p-4 rounded-lg">
            <p className="text-white font-semibold mb-1">7. استخدم أجهزة موفرة للطاقة</p>
            <p className="text-gray-400 text-sm">عند استبدال الأجهزة القديمة، ابحث عن ملصقات تقييم الطاقة من المركز السعودي لكفاءة الطاقة (SEEC). مكيف بتصنيف 5 نجوم يستهلك كهرباء أقل بنسبة 30% من مكيف نجمتين. تقنية الانفرتر تضبط سرعة الضاغط وتستخدم طاقة أقل 30–50% من الوحدات العادية.</p>
          </div>
          <div className="bg-[#0A0E1A] p-4 rounded-lg">
            <p className="text-white font-semibold mb-1">8. سد فتحات النوافذ والأبواب</p>
            <p className="text-gray-400 text-sm">تسرب الهواء حول النوافذ والأبواب يجبر مكيفك على العمل بقوة أكبر. استخدم مواد السد (weather stripping) أو السيليكون. في المنازل السعودية، هذا وحده يمكن أن يقلل تكاليف التبريد 10–20%. ركب ستائر أو عواكس على النوافذ المواجهة للشمس.</p>
          </div>
          <div className="bg-[#0A0E1A] p-4 rounded-lg">
            <p className="text-white font-semibold mb-1">9. خفض درجة حرارة سخان الماء</p>
            <p className="text-gray-400 text-sm">اضبط منظم حرارة السخان على 50°C بدلاً من 70°C. كل تخفيض 10°C يوفر 3–5% من تكاليف تسخين الماء. للصيف، فكر في إطفاء السخان تماماً — درجة حرارة المياه الجوفية في السعودية دافئة كافية للاستحمام المريح.</p>
          </div>
          <div className="bg-[#0A0E1A] p-4 rounded-lg">
            <p className="text-white font-semibold mb-1">10. فكر في الألواح الشمسية (طويل الأمد)</p>
            <p className="text-gray-400 text-sm">رؤية السعودية 2030 تشجع الطاقة الشمسية السكنية. مع سطوع الشمس الوفير طوال العام، نظام شمسي 5 كيلوواط يمكن أن يولد 700–900 كيلوواط شهرياً، مما يلغي أو يقلل فاتورة SEC بشكل كبير. فترة الاسترداد عادة 5–8 سنوات بالأسعار الحالية.</p>
          </div>
        </div>
      </GlassCard>
      <GlassCard>
        <h2>كيفية دفع فاتورة SEC</h2>
        <div className="space-y-3">
          <div className="bg-[#0A0E1A] p-3 rounded-lg">
            <p className="text-white font-medium">تطبيق أو موقع SEC</p>
            <p className="text-gray-400 text-sm">حمّل تطبيق SEC الرسمي (متوفر على iOS وAndroid) أو زر موقع SEC. سجل برقم حسابك وادفع باستخدام مدى أو فيزا أو ماستركارد. التطبيق يعرض تاريخ فواتيرك واتجاهات الاستهلاك.</p>
          </div>
          <div className="bg-[#0A0E1A] p-3 rounded-lg">
            <p className="text-white font-medium">نظام سداد</p>
            <p className="text-gray-400 text-sm">معظم البنوك السعودية تقدم دفع فاتورة SEC عبر نظام سداد. في تطبيق بنكك (الراجحي، الأهلي، الرياض، الإنماء)، اذهب إلى سداد الفواتير، اختر الشركة السعودية للكهرباء، أدخل رقم حسابك، وادفع. الدفع ينعكس فوراً في نظام SEC.</p>
          </div>
          <div className="bg-[#0A0E1A] p-3 rounded-lg">
            <p className="text-white font-medium">منصة أبشر</p>
            <p className="text-gray-400 text-sm">سجل الدخول إلى أبشر، اذهب إلى خدماتي، واختر دفع فاتورة الكهرباء. هذا الخيار مرتبط بحساب سداد الخاص بك ومناسب إذا كنت تستخدم أبشر أصلاً للخدمات الحكومية الأخرى.</p>
          </div>
          <div className="bg-[#0A0E1A] p-3 rounded-lg">
            <p className="text-white font-medium">الخصم التلقائي (موصى به)</p>
            <p className="text-gray-400 text-sm">فعّل الدفع الشهري التلقائي عبر بنكك. هذا يضمن أنك لا تفوت موعد الدفع أبداً، متجنباً رسوم التأخير ومخاطر فصل الخدمة. معظم البنوك السعودية تقدم هذه الخدمة مجاناً.</p>
          </div>
        </div>
      </GlassCard>
      <GlassCard>
        <h2>استخدام حاسبة SEC من Sauditoolhub</h2>
        <p>
          <Link href="/sec-bill-calculator" className="text-desert-primary font-bold underline">حاسبة فاتورة الكهرباء</Link> المجانية منا تجعل توقع فاتورتك القادمة سهلاً. أدخل استهلاكك الشهري المتوقع بالكيلوواط (اطلع على آخر فاتورة أو تطبيق SEC)، والحاسبة تطبق تلقائياً أسعار الشرائح الصحيحة مع ضريبة القيمة المضافة.
        </p>
        <p>
          اطلع أيضاً على <Link href="/bill-splitter-calculator" className="text-desert-primary underline">حاسبة تقسيم الفواتير</Link> للسكن المشترك و <Link href="/used-car-calculator" className="text-desert-primary underline">حاسبة السيارة المستعملة</Link> لمصاريف المركبات.
        </p>
      </GlassCard>
      <GlassCard>
        <h2>خاتمة</h2>
        <p>
          فهم نظام التعريفة التصاعدية للكهرباء هو الخطوة الأولى للسيطرة على تكاليف الكهرباء في السعودية. الخلاصة بسيطة: كل كيلوواط مهم لأن كلما زاد استهلاكك، زادت تكلفة كل وحدة إضافية. بمراقبة استهلاكك عبر تطبيق العداد الذكي، واعتماد عادات موفرة للطاقة، واستخدام أدوات مثل <Link href="/sec-bill-calculator" className="text-desert-primary underline">حاسبة فاتورة الكهرباء</Link>، يمكنك تجنب صدمة الفاتورة والحفاظ على نفقاتك الشهرية معقولة — حتى في أشد صيف سعودي حرارة.
        </p>
        <p>
          زوروا <Link href="/blog" className="text-desert-primary underline">مدونتنا</Link> للمزيد من الأدلة حول العيش بكفاءة في السعودية.
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
        <p className="text-desert-primary text-sm font-medium tracking-widest uppercase">بجلی گائیڈ</p>
        <h1 className="text-3xl md:text-4xl font-bold text-white mt-2">SEC بجلی کے بل اور ٹیرف ریٹس کا مکمل گائیڈ سعودی عرب 2026</h1>
        <p className="text-gray-400 mt-3 max-w-2xl mx-auto">
          سعودی عرب کے ترقی درجہ بندی بجلی ٹیرف کو سمجھیں، SEC بل درست طریقے سے نکالنا سیکھیں، اور گرمیوں میں بجلی کم کرنے کی ثابت شدہ حکمت عملی جانیں۔
        </p>
      </div>
      <GlassCard>
        <h2>تعارف</h2>
        <p>
          سعودی عرب میں رہنے والے ہر شخص کو وہ لمحہ یاد ہے — جب گرمیوں میں SEC کا بل آتا ہے۔ آپ ابشر یا SEC ایپ پر اطلاع کھولتے ہیں اور آپ کا دل ڈوب جاتا ہے۔ بل جو سردیوں میں 300 ریال تھا گرمیوں میں 1500 ریال یا اس سے زیادہ ہو جاتا ہے۔ یہ صدمہ حقیقی ہے اور یہ جدہ کے اپارٹمنٹ رہائشیوں سے لے کر ریاض کے ولا مالکان تک سب کو متاثر کرتا ہے۔
        </p>
        <p>
          حقیقت یہ ہے کہ زیادہ تر لوگ صرف اس لیے زیادہ ادائیگی کرتے ہیں کیونکہ وہ نہیں سمجھتے کہ SEC ٹیرف سسٹم کیسے کام کرتا ہے۔ سعودی عرب <strong>ترقی درجہ بندی ٹیرف</strong> استعمال کرتا ہے — جتنی زیادہ بجلی استعمال کریں گے، اتنی ہی زیادہ قیمت فی کلوواٹ گھنٹہ (kWh) ادا کریں گے۔ اس کا مطلب ہے کہ ایک اضافی AC چلانا یا سارا دن لائٹیں چھوڑنا صرف چند ریال نہیں بڑھاتا بلکہ آپ کو اونچی درجہ میں دھکیل سکتا ہے جہاں ہر یونٹ کی قیمت بہت زیادہ ہے۔
        </p>
        <p>
          یہ گائیڈ 2026 میں SEC بجلی کے بلوں کے بارے میں ہر وہ چیز بتاتا ہے جو آپ کو جاننی چاہیے۔ آپ ہر درجہ کی صحیح شرحیں، بل نکالنے کا طریقہ، گرمیوں میں بل کیوں بڑھتا ہے، اور دس ثابت شدہ طریقے سیکھیں گے۔ <Link href="/sec-bill-calculator" className="text-desert-primary underline">SEC بل کیلکولیٹر</Link> استعمال کریں۔
        </p>
      </GlassCard>
      <GlassCard>
        <h2>SEC ٹیرف سسٹم کو سمجھیں</h2>
        <p>
          سعودی الیکٹرسٹی کمپنی (SEC)، جو ECRA کے زیر انتظام ہے، <strong>ترقی درجہ بندی قیمتوں کا نظام</strong> استعمال کرتی ہے۔ اس کا مطلب ہے کہ فی کلوواٹ قیمت بڑھتی ہے جیسے جیسے آپ کا ماہانہ استعمال بڑھتا ہے۔ یہ بچت کی حوصلہ افزائی کے لیے بنایا گیا ہے — زیادہ استعمال کرنے والے فی یونٹ زیادہ ادا کرتے ہیں۔
        </p>
        <h3>چار ٹیرف درجے (رہائشی، 2026)</h3>
        <div className="bg-[#0A0E1A] p-5 rounded-xl mb-4">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-gray-700">
                <th className="text-right py-2 text-desert-primary">درجہ</th>
                <th className="text-right py-2 text-desert-primary">ماہانہ استعمال</th>
                <th className="text-right py-2 text-desert-primary">شرح (هللے/kWh)</th>
                <th className="text-right py-2 text-desert-primary">شرح (ریال/kWh)</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-gray-800">
                <td className="py-2 text-white text-right">درجہ اول (سبسڈیڈ)</td>
                <td className="py-2 text-gray-300 text-right">0 – 2,000 یونٹ</td>
                <td className="py-2 text-gray-300 text-right">18 هللے</td>
                <td className="py-2 text-gray-300 text-right">0.18 ریال</td>
              </tr>
              <tr className="border-b border-gray-800">
                <td className="py-2 text-white text-right">درجہ دوم</td>
                <td className="py-2 text-gray-300 text-right">2,001 – 4,000 یونٹ</td>
                <td className="py-2 text-gray-300 text-right">30 هللے</td>
                <td className="py-2 text-gray-300 text-right">0.30 ریال</td>
              </tr>
              <tr className="border-b border-gray-800">
                <td className="py-2 text-white text-right">درجہ سوم</td>
                <td className="py-2 text-gray-300 text-right">4,001 – 6,000 یونٹ</td>
                <td className="py-2 text-gray-300 text-right">45 هللے</td>
                <td className="py-2 text-gray-300 text-right">0.45 ریال</td>
              </tr>
              <tr>
                <td className="py-2 text-white text-right">درجہ چہارم (اعلیٰ)</td>
                <td className="py-2 text-gray-300 text-right">6,000 سے اوپر</td>
                <td className="py-2 text-gray-300 text-right">60 هللے</td>
                <td className="py-2 text-gray-300 text-right">0.60 ریال</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="bg-desert-primary/10 border border-desert-primary/30 p-4 rounded-xl mb-4">
          <p className="text-sm font-medium text-desert-primary">
            ⚠️ <strong>اہم: درجہ بندی کا نظام حقیقت میں کیسے کام کرتا ہے</strong>
          </p>
          <p className="text-sm mt-2">
            سب سے عام غلطی یہ سوچنا ہے کہ اگر آپ 4,500 یونٹ استعمال کرتے ہیں تو پورے 4,500 یونٹ پر درجہ سوم کی شرح 45 هللے لگے گی۔ <strong>یہ غلط ہے۔</strong> ہر درجہ میں صرف اتنے یونٹس کی شرح لگتی ہے جتنے اس درجہ میں آتے ہیں۔ پہلے 2,000 یونٹ ہمیشہ سب سے کم سبسڈیڈ شرح (18 هللے) پر۔ اگلے 2,000 (2,001–4,000) درجہ دوم کی شرح پر۔ اور بقیہ 500 (4,001–4,500) درجہ سوم کی شرح پر۔
          </p>
        </div>
      </GlassCard>
      <GlassCard>
        <h2>گرمیاں بمقابلہ سردیاں کا استعمال</h2>
        <p>
          سعودی عرب میں سردیوں اور گرمیوں کے SEC بل میں فرق صدمہ دہ ہو سکتا ہے۔ ریاض میں ایک عام 3 بیڈروم اپارٹمنٹ جنوری میں 1,200 یونٹ استعمال کرتا ہے (بل ~250 ریال) لیکن جولائی میں 4,500 یونٹ (بل ~1,360 ریال)۔ یہ <strong>5 گنا اضافہ</strong> ہے جو تقریباً مکمل طور پر ایئر کنڈیشننگ کی وجہ سے ہے۔
        </p>
        <p>
          ایئر کنڈیشننگ سعودی گھروں میں 50–70% گرمیوں کی بجلی استعمال کرتی ہے۔ اوسط 18,000 BTU سپلٹ AC یونٹ روزانہ 10 گھنٹے چلنے سے ماہانہ 450–600 یونٹ استعمال کرتا ہے۔ 5–7 AC یونٹس والا ولا گرمیوں کے مہینوں میں 6,000 یونٹ سے تجاوز کر سکتا ہے، درجہ چہارم میں پہنچ کر جہاں ہر یونٹ 60 هللے کا ہے۔
        </p>
        <p>
          تخمینہ: <strong>AC ٹنیج × 1.2 kWh فی گھنٹہ × گھنٹے یومیہ × 30 دن</strong>۔ 2 ٹن AC 12 گھنٹے/یوم: 2 × 1.2 × 12 × 30 = 864 یونٹ ماہانہ صرف اس ایک یونٹ سے۔
        </p>
      </GlassCard>
      <GlassCard>
        <h2>بل نکالنے کا فارمولا</h2>
        <div className="bg-[#0A0E1A] p-4 rounded-xl mb-4 font-mono text-sm text-gray-300">
          <p>درجہ 1 = کم از کم(استعمال، 2000)</p>
          <p>درجہ 2 = زیادہ سے زیادہ(0، کم از کم(استعمال - 2000، 2000))</p>
          <p>درجہ 3 = زیادہ سے زیادہ(0، کم از کم(استعمال - 4000، 2000))</p>
          <p>درجہ 4 = زیادہ سے زیادہ(0، استعمال - 6000)</p>
          <p>بل VAT سے پہلے = (د1 × 0.18) + (د2 × 0.30) + (د3 × 0.45) + (د4 × 0.60)</p>
          <p>VAT = بل VAT سے پہلے × 0.15</p>
          <p className="text-desert-primary font-semibold">کل = بل VAT سے پہلے + VAT</p>
        </div>
      </GlassCard>
      <GlassCard>
        <h2>حقیقی زندگی کی مثالیں</h2>

        <h3>مثال 1: چھوٹا 2 بیڈروم اپارٹمنٹ (1,500 یونٹ/ماہ)</h3>
        <div className="bg-[#0A0E1A] p-4 rounded-xl mb-4">
          <p className="text-sm">استعمال: 1,500 یونٹ (صرف درجہ اول میں)</p>
          <p className="text-sm mt-1">درجہ 1: 1,500 × 0.18 = 270.00 ریال</p>
          <p className="text-sm mt-1">درجہ 2: 0 × 0.30 = 0.00 ریال</p>
          <p className="text-sm mt-1">درجہ 3: 0 × 0.45 = 0.00 ریال</p>
          <p className="text-sm mt-1">درجہ 4: 0 × 0.60 = 0.00 ریال</p>
          <p className="text-sm mt-2">بل VAT سے پہلے: <strong>270.00 ریال</strong></p>
          <p className="text-sm">VAT (15%): <strong>40.50 ریال</strong></p>
          <p className="text-sm text-desert-primary font-semibold">کل بل: <strong>310.50 ریال</strong></p>
        </div>

        <h3>مثال 2: بڑا 5 بیڈروم ولا (4,500 یونٹ/ماہ جولائی)</h3>
        <div className="bg-[#0A0E1A] p-4 rounded-xl mb-4">
          <p className="text-sm">استعمال: 4,500 یونٹ (درجہ 1، 2، اور 3)</p>
          <p className="text-sm mt-1">درجہ 1: 2,000 × 0.18 = <strong>360.00 ریال</strong></p>
          <p className="text-sm mt-1">درجہ 2: 2,000 × 0.30 = <strong>600.00 ریال</strong></p>
          <p className="text-sm mt-1">درجہ 3: 500 × 0.45 = <strong>225.00 ریال</strong></p>
          <p className="text-sm mt-1">درجہ 4: 0 × 0.60 = <strong>0.00 ریال</strong></p>
          <p className="text-sm mt-2">بل VAT سے پہلے: 360 + 600 + 225 = <strong>1,185.00 ریال</strong></p>
          <p className="text-sm">VAT (15%): <strong>177.75 ریال</strong></p>
          <p className="text-sm text-desert-primary font-semibold">کل بل: <strong>1,362.75 ریال</strong></p>
        </div>

        <h3>مثال 3: بڑا ولا سوئمنگ پول کے ساتھ (7,500 یونٹ/ماہ اگست)</h3>
        <div className="bg-[#0A0E1A] p-4 rounded-xl">
          <p className="text-sm">استعمال: 7,500 یونٹ (چاروں درجے)</p>
          <p className="text-sm mt-1">درجہ 1: 2,000 × 0.18 = <strong>360.00 ریال</strong></p>
          <p className="text-sm mt-1">درجہ 2: 2,000 × 0.30 = <strong>600.00 ریال</strong></p>
          <p className="text-sm mt-1">درجہ 3: 2,000 × 0.45 = <strong>900.00 ریال</strong></p>
          <p className="text-sm mt-1">درجہ 4: 1,500 × 0.60 = <strong>900.00 ریال</strong></p>
          <p className="text-sm mt-2">بل VAT سے پہلے: 360 + 600 + 900 + 900 = <strong>2,760.00 ریال</strong></p>
          <p className="text-sm">VAT (15%): <strong>414.00 ریال</strong></p>
          <p className="text-sm text-desert-primary font-semibold">کل بل: <strong>3,174.00 ریال</strong></p>
        </div>
      </GlassCard>
      <GlassCard>
        <h2>SEC بل کم کرنے کے 10 ثابت شدہ طریقے</h2>
        <div className="space-y-4">
          <div className="bg-[#0A0E1A] p-4 rounded-lg">
            <p className="text-white font-semibold mb-1">1. AC 24°C پر رکھیں نہ کہ 18°C</p>
            <p className="text-gray-400 text-sm">ہر ڈگری 24°C سے نیچے توانائی 6–8% بڑھاتی ہے۔ 18°C پر AC چلانے سے کولنگ لاگت 36–48% بڑھ سکتی ہے۔ پنکھا استعمال کریں — پنکھے AC سے 95% کم توانائی استعمال کرتے ہیں۔</p>
          </div>
          <div className="bg-[#0A0E1A] p-4 rounded-lg">
            <p className="text-white font-semibold mb-1">2. AC فلٹر ماہانہ صاف کریں</p>
            <p className="text-gray-400 text-sm">گندے فلٹر ہوا کے بہاؤ کو کم کرتے ہیں، جس سے AC کمپریسر زیادہ محنت کرتا ہے۔ ماہانہ صفائی AC توانائی 5–15% کم کر سکتی ہے۔ سعودی دھول میں ہر دو ہفتے بعد صاف کرنا بہتر ہے۔</p>
          </div>
          <div className="bg-[#0A0E1A] p-4 rounded-lg">
            <p className="text-white font-semibold mb-1">3. ہر جگہ LED بلب استعمال کریں</p>
            <p className="text-gray-400 text-sm">LED بلب پرانے بلب سے 80–90% کم بجلی استعمال کرتے ہیں اور 25 گنا زیادہ چلتے ہیں۔ ایک ولا میں تمام بلب تبدیل کرنے سے سالانہ 100–200 یونٹ بچت ممکن ہے۔</p>
          </div>
          <div className="bg-[#0A0E1A] p-4 rounded-lg">
            <p className="text-white font-semibold mb-1">4. آلات ان پلگ کریں (فینٹم لوڈ ختم کریں)</p>
            <p className="text-gray-400 text-sm">اسٹینڈ بائی پر آلات بھی بجلی استعمال کرتے ہیں — اسے فینٹم لوڈ کہتے ہیں۔ TV، چارجرز، گیمنگ کنسولز 5–10% بجلی استعمال کر سکتے ہیں جب استعمال میں نہ ہوں۔</p>
          </div>
          <div className="bg-[#0A0E1A] p-4 rounded-lg">
            <p className="text-white font-semibold mb-1">5. SEC سمارٹ میٹر ایپ استعمال کریں</p>
            <p className="text-gray-400 text-sm">SEC سمارٹ میٹر ایپ (سابقہ ساہر) ڈاؤن لوڈ کریں۔ یہ ریئل ٹائم استعمال، یومیہ کھپت، اور تاریخی ڈیٹا دکھاتی ہے۔ جب آپ اپنا یومیہ استعمال دیکھیں گے تو آپ اپنی عادات بدل سکتے ہیں۔</p>
          </div>
          <div className="bg-[#0A0E1A] p-4 rounded-lg">
            <p className="text-white font-semibold mb-1">6. آلات رات کو چلائیں</p>
            <p className="text-gray-400 text-sm">واشنگ مشین، ڈش واشر، اور واٹر ہیٹر حرارت پیدا کرتے ہیں۔ رات (10 PM بعد) چلانے سے AC کو وہ حرارت نکالنے کے لیے زیادہ محنت نہیں کرنی پڑتی۔ 5–10% بچت ممکن ہے۔</p>
          </div>
          <div className="bg-[#0A0E1A] p-4 rounded-lg">
            <p className="text-white font-semibold mb-1">7. توانائی بچانے والے آلات خریدیں</p>
            <p className="text-gray-400 text-sm">SEEC انرجی ریٹنگ لیبل دیکھیں۔ 5 سٹار AC 2 سٹار سے 30% کم بجلی استعمال کرتا ہے۔ انورٹر ٹیکنالوجی کمپریسر رفتار ایڈجسٹ کرتی ہے اور 30–50% کم طاقت استعمال کرتی ہے۔</p>
          </div>
          <div className="bg-[#0A0E1A] p-4 rounded-lg">
            <p className="text-white font-semibold mb-1">8. کھڑکیاں اور دروازے سیل کریں</p>
            <p className="text-gray-400 text-sm">ہوا کا اخراج AC کو زیادہ محنت پر مجبور کرتا ہے۔ ویدر سٹرپنگ یا سلیکون استعمال کریں۔ سعودی گھروں میں اکیلے اس سے 10–20% کولنگ لاگت کم ہو سکتی ہے۔</p>
          </div>
          <div className="bg-[#0A0E1A] p-4 rounded-lg">
            <p className="text-white font-semibold mb-1">9. واٹر ہیٹر کا درجہ حرارت کم کریں</p>
            <p className="text-gray-400 text-sm">واٹر ہیٹر 50°C پر رکھیں نہ کہ 70°C۔ ہر 10°C کمی 3–5% پانی گرم کرنے کی لاگت بچاتی ہے۔ گرمیوں میں ہیٹر بند کر دیں — زمینی پانی کا درجہ حرارت نہانے کے لیے کافی گرم ہے۔</p>
          </div>
          <div className="bg-[#0A0E1A] p-4 rounded-lg">
            <p className="text-white font-semibold mb-1">10. سولر پینل لگائیں (طویل مدتی)</p>
            <p className="text-gray-400 text-sm">سعودی وژن 2030 رہائشی شمسی توانائی کی حوصلہ افزائی کرتا ہے۔ 5 kW نظام 700–900 یونٹ ماہانہ پیدا کر سکتا ہے، ممکنہ طور پر SEC بل ختم یا بہت کم کر سکتا ہے۔ واپسی کی مدت 5–8 سال۔</p>
          </div>
        </div>
      </GlassCard>
      <GlassCard>
        <h2>SEC بل کی ادائیگی کے طریقے</h2>
        <div className="space-y-3">
          <div className="bg-[#0A0E1A] p-3 rounded-lg">
            <p className="text-white font-medium">SEC ایپ یا ویب سائٹ</p>
            <p className="text-gray-400 text-sm">SEC ایپ ڈاؤن لوڈ کریں (iOS اور Android) یا SEC ویب سائٹ جائیں۔ اپنے اکاؤنٹ نمبر سے رجسٹر کریں اور مدہ، ویزا، یا ماسٹرکارڈ سے ادائیگی کریں۔</p>
          </div>
          <div className="bg-[#0A0E1A] p-3 rounded-lg">
            <p className="text-white font-medium">سداد پیمنٹ سسٹم</p>
            <p className="text-gray-400 text-sm">سعودی بینک SEC بل ادائیگی سداد کے ذریعے پیش کرتے ہیں۔ بینک ایپ میں سداد بل جائیں، سعودی الیکٹرسٹی کمپنی منتخب کریں، اکاؤنٹ نمبر درج کریں، اور ادائیگی کریں۔ فوری اپ ڈیٹ۔</p>
          </div>
          <div className="bg-[#0A0E1A] p-3 rounded-lg">
            <p className="text-white font-medium">أبشر پلیٹ فارم</p>
            <p className="text-gray-400 text-sm">أبشر میں لاگ ان کریں، خدماتي جائیں، اور بجلی بل ادائیگی منتخب کریں۔ سداد سے منسلک، سرکاری خدمات کے لیے آسان۔</p>
          </div>
          <div className="bg-[#0A0E1A] p-3 rounded-lg">
            <p className="text-white font-medium">آٹو ڈیبٹ (سفارش کردہ)</p>
            <p className="text-gray-400 text-sm">بینک کے ذریعے ماہانہ خودکار ادائیگی سیٹ کریں۔ یقینی بنائیں کہ آپ کبھی تاریخ مقررہ نہ چھوڑیں، جرمانے اور کنکشن منقطع ہونے سے بچیں۔</p>
          </div>
        </div>
      </GlassCard>
      <GlassCard>
        <h2>Sauditoolhub SEC بل کیلکولیٹر کا استعمال</h2>
        <p>
          ہمارا مفت <Link href="/sec-bill-calculator" className="text-desert-primary font-bold underline">SEC بل کیلکولیٹر</Link> آپ کے اگلے بل کا تخمینہ لگانا آسان بناتا ہے۔ اپنا ماہانہ استعمال درج کریں اور کیلکولیٹر خود بخود درست درجہ شرحیں اور VAT لگائے گا۔
        </p>
        <p>
          <Link href="/bill-splitter-calculator" className="text-desert-primary underline">بل سپلٹر کیلکولیٹر</Link> اور <Link href="/used-car-calculator" className="text-desert-primary underline">استعمال شدہ گاڑی کیلکولیٹر</Link> بھی دیکھیں۔
        </p>
      </GlassCard>
      <GlassCard>
        <h2>نتیجہ</h2>
        <p>
          SEC ترقی درجہ بندی ٹیرف سسٹم کو سمجھنا سعودی عرب میں بجلی کے اخراجات پر قابو پانے کا پہلا قدم ہے۔ نتیجہ سادہ ہے: ہر یونٹ اہمیت رکھتا ہے کیونکہ جتنا زیادہ استعمال کریں گے، اتنا ہی ہر اضافی یونٹ مہنگا ہوتا ہے۔ SEC سمارٹ میٹر ایپ، توانائی بچانے کی عادات، اور <Link href="/sec-bill-calculator" className="text-desert-primary underline">SEC بل کیلکولیٹر</Link> جیسے اوزار استعمال کرکے بل کے صدمے سے بچ سکتے ہیں۔
        </p>
        <p>
          <Link href="/blog" className="text-desert-primary underline">بلاگ</Link> ملاحظہ کریں۔
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
        <p className="text-desert-primary text-sm font-medium tracking-widest uppercase">Gabay sa Kuryente</p>
        <h1 className="text-3xl md:text-4xl font-bold text-white mt-2">Gabay sa SEC Electricity Bill at Tariff Rates sa Saudi Arabia 2026</h1>
        <p className="text-gray-400 mt-3 max-w-2xl mx-auto">
          Alamin ang progressive electricity tariff system ng Saudi Arabia, kalkulahin ang iyong SEC bill nang tama, at matuklasan ang mga napatunayang paraan upang bawasan ang iyong konsumo sa tag-init.
        </p>
      </div>
      <GlassCard>
        <h2>Panimula</h2>
        <p>
          May isang sandali na alam na alam ng bawat residente ng Saudi Arabia — ang araw na dumating ang SEC bill sa tag-init. Binuksan mo ang notification sa Absher o SEC app, at lumubog ang iyong puso. Ang bill na 300 SAR noong tag-lamig ay lumobo na naging 1,500 SAR o higit pa. Ang pagkabigla ay totoo, at ito ay nakakaapekto sa lahat mula sa mga nakatira sa apartment sa Jeddah hanggang sa mga may-ari ng villa sa Riyadh.
        </p>
        <p>
          Ang katotohanan ay, karamihan sa mga tao ay nag-overpay dahil lang hindi nila nauunawaan kung paano gumagana ang SEC tariff system. Ang Saudi Arabia ay gumagamit ng <strong>progressive tiered tariff</strong> — kung mas maraming kuryente ang iyong kinokonsumo, mas mataas ang rate na babayaran mo bawat kilowatt-hour (kWh). Ibig sabihin nito, ang pagpapatakbo ng karagdagang AC o pag-iwan ng mga ilaw buong araw ay hindi lang nagdaragdag ng ilang riyal; maaari ka nitong itulak sa mas mataas na tier kung saan ang bawat unit ay mas mahal.
        </p>
        <p>
          Ipinapaliwanag ng gabay na ito ang lahat ng kailangan mong malaman tungkol sa SEC electricity bills sa 2026. Malalaman mo ang eksaktong tariff rates para sa bawat consumption tier, kung paano kalkulahin ang iyong bill hakbang-hakbang, kung bakit tumataas nang sobra ang bill sa tag-init, at sampung napatunayang paraan upang bawasan ang iyong buwanang gastos. Gamitin ang aming <Link href="/sec-bill-calculator" className="text-desert-primary underline">SEC Bill Estimator</Link> para tantyahin ang iyong susunod na bill.
        </p>
      </GlassCard>
      <GlassCard>
        <h2>Pag-unawa sa SEC Tariff System</h2>
        <p>
          Ang Saudi Electricity Company (SEC), na kinokontrol ng Electricity and Cogeneration Regulatory Authority (ECRA), ay gumagamit ng <strong>progressive tiered pricing system</strong>. Ibig sabihin, tumataas ang presyo bawat kilowatt-hour habang tumataas ang iyong kabuuang buwanang konsumo. Ito ay dinisenyo upang hikayatin ang pag-iingat — ang matatapang na gumagamit ay nagbabayad ng mas mataas bawat unit.
        </p>
        <h3>Apat na Tariff Tiers (Residential, 2026)</h3>
        <div className="bg-[#0A0E1A] p-5 rounded-xl mb-4">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-gray-700">
                <th className="text-left py-2 text-desert-primary">Tier</th>
                <th className="text-left py-2 text-desert-primary">Buwanang Konsumo</th>
                <th className="text-left py-2 text-desert-primary">Rate (Halalas/kWh)</th>
                <th className="text-left py-2 text-desert-primary">Rate (SAR/kWh)</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-gray-800">
                <td className="py-2 text-white">Tier 1 (Subsidized)</td>
                <td className="py-2 text-gray-300">0 – 2,000 kWh</td>
                <td className="py-2 text-gray-300">18 Halalas</td>
                <td className="py-2 text-gray-300">0.18 SAR</td>
              </tr>
              <tr className="border-b border-gray-800">
                <td className="py-2 text-white">Tier 2</td>
                <td className="py-2 text-gray-300">2,001 – 4,000 kWh</td>
                <td className="py-2 text-gray-300">30 Halalas</td>
                <td className="py-2 text-gray-300">0.30 SAR</td>
              </tr>
              <tr className="border-b border-gray-800">
                <td className="py-2 text-white">Tier 3</td>
                <td className="py-2 text-gray-300">4,001 – 6,000 kWh</td>
                <td className="py-2 text-gray-300">45 Halalas</td>
                <td className="py-2 text-gray-300">0.45 SAR</td>
              </tr>
              <tr>
                <td className="py-2 text-white">Tier 4 (Highest)</td>
                <td className="py-2 text-gray-300">Above 6,000 kWh</td>
                <td className="py-2 text-gray-300">60 Halalas</td>
                <td className="py-2 text-gray-300">0.60 SAR</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="bg-desert-primary/10 border border-desert-primary/30 p-4 rounded-xl mb-4">
          <p className="text-sm font-medium text-desert-primary">
            ⚠️ <strong>Mahalaga: Paano Talaga Gumagana ang Tiered Billing</strong>
          </p>
          <p className="text-sm mt-2">
            Ang pinakakaraniwang pagkakamali ay ang pag-iisip na kung kumonsumo ka ng 4,500 kWh, ang BUONG 4,500 kWh ay sisingilin sa Tier 3 rate na 45 Halalas. <strong>Ito ay hindi tama.</strong> Ang bahagi lamang ng konsumo sa bawat tier ang sinisingil sa rate na iyon. Ang iyong unang 2,000 kWh ay laging nasa pinakamababang subsidized rate (18 Halalas). Ang susunod na 2,000 kWh (2,001–4,000) lamang ang nasa Tier 2 rate. At ang natitirang 500 kWh (4,001–4,500) lamang ang nasa Tier 3 rate.
          </p>
        </div>
      </GlassCard>
      <GlassCard>
        <h2>Tag-Init kumpara sa Tag-Lamig na Konsumo</h2>
        <p>
          Ang pagkakaiba sa pagitan ng SEC bill sa tag-lamig at tag-init sa Saudi Arabia ay maaaring nakakagulat. Isang tipikal na 3-bedroom apartment sa Riyadh ay maaaring kumonsumo ng 1,200 kWh sa Enero (bill: ~250 SAR) ngunit 4,500 kWh sa Hulyo (bill: ~1,360 SAR). Iyon ay <strong>5× pagtaas</strong> na halos lahat ay dahil sa air conditioning.
        </p>
        <p>
          Ang air conditioning ay bumubuo ng 50–70% ng kabuuang konsumo ng kuryente sa tag-init sa mga tahanan sa Saudi. Isang average na 18,000 BTU split AC unit na tumatakbo ng 10 oras araw-araw ay kumokonsumo ng humigit-kumulang 450–600 kWh bawat buwan. Isang villa na may 5–7 AC units ay madaling lumampas ng 6,000 kWh sa peak summer months, pumapasok sa Tier 4 kung saan ang bawat kWh ay nagkakahalaga ng 60 Halalas.
        </p>
        <p>
          Para tantyahin ang iyong buwanang kWh batay sa AC usage: <strong>AC Tonnage × 1.2 kWh kada oras × oras kada araw × 30 araw</strong>. Isang 2-ton AC unit na tumatakbo 12 oras/araw: 2 × 1.2 × 12 × 30 = 864 kWh bawat buwan mula sa iisang unit na iyon.
        </p>
      </GlassCard>
      <GlassCard>
        <h2>Formula sa Pagkalkula ng Bill</h2>
        <p>Narito ang eksaktong formula para kalkulahin ang iyong SEC bill nang manu-mano:</p>
        <div className="bg-[#0A0E1A] p-4 rounded-xl mb-4 font-mono text-sm text-gray-300">
          <p>T1 = min(konsumo, 2000)</p>
          <p>T2 = max(0, min(konsumo - 2000, 2000))</p>
          <p>T3 = max(0, min(konsumo - 4000, 2000))</p>
          <p>T4 = max(0, konsumo - 6000)</p>
          <p>Bill bago VAT = (T1 × 0.18) + (T2 × 0.30) + (T3 × 0.45) + (T4 × 0.60)</p>
          <p>VAT = Bill bago VAT × 0.15</p>
          <p className="text-desert-primary font-semibold">Total = Bill bago VAT + VAT</p>
        </div>
      </GlassCard>
      <GlassCard>
        <h2>Halimbawa ng Pagkalkula sa Tunay na Buhay</h2>

        <h3>Halimbawa 1: Maliit na 2-Bedroom Apartment (1,500 kWh/buwan)</h3>
        <div className="bg-[#0A0E1A] p-4 rounded-xl mb-4">
          <p className="text-sm">Konsumo: 1,500 kWh (nasa Tier 1 lamang)</p>
          <p className="text-sm mt-1">Tier 1: 1,500 × 0.18 = 270.00 SAR</p>
          <p className="text-sm mt-1">Tier 2: 0 × 0.30 = 0.00 SAR</p>
          <p className="text-sm mt-1">Tier 3: 0 × 0.45 = 0.00 SAR</p>
          <p className="text-sm mt-1">Tier 4: 0 × 0.60 = 0.00 SAR</p>
          <p className="text-sm mt-2">Bill bago VAT: <strong>270.00 SAR</strong></p>
          <p className="text-sm">VAT (15%): <strong>40.50 SAR</strong></p>
          <p className="text-sm text-desert-primary font-semibold">Total Bill: <strong>310.50 SAR</strong></p>
        </div>

        <h3>Halimbawa 2: Malaking 5-Bedroom Villa (4,500 kWh/buwan sa Hulyo)</h3>
        <div className="bg-[#0A0E1A] p-4 rounded-xl mb-4">
          <p className="text-sm">Konsumo: 4,500 kWh (Tier 1, 2, at 3)</p>
          <p className="text-sm mt-1">Tier 1: 2,000 × 0.18 = <strong>360.00 SAR</strong></p>
          <p className="text-sm mt-1">Tier 2: 2,000 × 0.30 = <strong>600.00 SAR</strong></p>
          <p className="text-sm mt-1">Tier 3: 500 × 0.45 = <strong>225.00 SAR</strong></p>
          <p className="text-sm mt-1">Tier 4: 0 × 0.60 = <strong>0.00 SAR</strong></p>
          <p className="text-sm mt-2">Bill bago VAT: 360 + 600 + 225 = <strong>1,185.00 SAR</strong></p>
          <p className="text-sm">VAT (15%): <strong>177.75 SAR</strong></p>
          <p className="text-sm text-desert-primary font-semibold">Total Bill: <strong>1,362.75 SAR</strong></p>
        </div>

        <h3>Halimbawa 3: Malaking Villa na may Pool (7,500 kWh/buwan sa Agosto)</h3>
        <div className="bg-[#0A0E1A] p-4 rounded-xl">
          <p className="text-sm">Konsumo: 7,500 kWh (lahat ng apat na tier)</p>
          <p className="text-sm mt-1">Tier 1: 2,000 × 0.18 = <strong>360.00 SAR</strong></p>
          <p className="text-sm mt-1">Tier 2: 2,000 × 0.30 = <strong>600.00 SAR</strong></p>
          <p className="text-sm mt-1">Tier 3: 2,000 × 0.45 = <strong>900.00 SAR</strong></p>
          <p className="text-sm mt-1">Tier 4: 1,500 × 0.60 = <strong>900.00 SAR</strong></p>
          <p className="text-sm mt-2">Bill bago VAT: 360 + 600 + 900 + 900 = <strong>2,760.00 SAR</strong></p>
          <p className="text-sm">VAT (15%): <strong>414.00 SAR</strong></p>
          <p className="text-sm text-desert-primary font-semibold">Total Bill: <strong>3,174.00 SAR</strong></p>
        </div>
      </GlassCard>
      <GlassCard>
        <h2>10 Napatunayang Paraan Para Bawasan ang SEC Bill</h2>
        <div className="space-y-4">
          <div className="bg-[#0A0E1A] p-4 rounded-lg">
            <p className="text-white font-semibold mb-1">1. Itakda ang AC sa 24°C Sa halip na 18°C</p>
            <p className="text-gray-400 text-sm">Bawat degree sa ibaba 24°C ay nagpapataas ng energy consumption ng 6–8%. Ang pagpapatakbo ng AC sa 18°C sa halip na 24°C ay maaaring magpataas ng cooling costs ng 36–48%. Gumamit ng electric fan — ang mga fan ay gumagamit ng 95% mas kaunting enerhiya kaysa AC.</p>
          </div>
          <div className="bg-[#0A0E1A] p-4 rounded-lg">
            <p className="text-white font-semibold mb-1">2. Linisin ang AC Filters Buwan-Buwan</p>
            <p className="text-gray-400 text-sm">Ang maruruming filter ay nagbabawas ng airflow, pinipilit ang AC compressor na gumana nang mas mahirap. Ang paglilinis o pagpapalit ng filters bawat buwan ay maaaring magbawas ng AC energy consumption ng 5–15%.</p>
          </div>
          <div className="bg-[#0A0E1A] p-4 rounded-lg">
            <p className="text-white font-semibold mb-1">3. Gumamit ng LED Bulbs sa Lahat</p>
            <p className="text-gray-400 text-sm">Ang LED bulbs ay kumokonsumo ng 80–90% mas kaunting kuryente kaysa incandescent bulbs at tumatagal ng 25 beses na mas mahaba. Ang pagpapalit ng lahat ng bulbs sa isang tipikal na villa ay makatipid ng 100–200 kWh bawat taon.</p>
          </div>
          <div className="bg-[#0A0E1A] p-4 rounded-lg">
            <p className="text-white font-semibold mb-1">4. I-Unplug ang mga Device (Phantom Load)</p>
            <p className="text-gray-400 text-sm">Ang mga device na naka-standby ay kumokonsumo pa rin ng kuryente — ito ay tinatawag na phantom load. Ang mga TV, phone charger, gaming console ay maaaring gumamit ng 5–10% ng kabuuang kuryente kapag hindi ginagamit.</p>
          </div>
          <div className="bg-[#0A0E1A] p-4 rounded-lg">
            <p className="text-white font-semibold mb-1">5. Gamitin ang SEC Smart Meter App</p>
            <p className="text-gray-400 text-sm">I-download ang SEC smart meter app (dating Saher) para subaybayan ang iyong araw-araw na konsumo. Ipinapakita nito ang real-time na paggamit, nag-aalert kapag papalapit sa mas mataas na tier, at nagbibigay ng historical data.</p>
          </div>
          <div className="bg-[#0A0E1A] p-4 rounded-lg">
            <p className="text-white font-semibold mb-1">6. Patakbuhin ang Appliances sa Gabi</p>
            <p className="text-gray-400 text-sm">Ang washing machine, dishwasher, at water heater ay lumilikha ng init. Ang pagpapatakbo sa mga ito sa gabi (pagkatapos ng 10 PM) ay nangangahulugang hindi kailangan ng AC na magtrabaho nang husto para alisin ang init na iyon. Makatipid ng 5–10%.</p>
          </div>
          <div className="bg-[#0A0E1A] p-4 rounded-lg">
            <p className="text-white font-semibold mb-1">7. Gumamit ng Energy-Efficient Appliances</p>
            <p className="text-gray-400 text-sm">Kapag nagpapalit ng lumang appliances, hanapin ang SEEC energy rating labels. Ang 5-star rated AC ay gumagamit ng hanggang 30% mas kaunting kuryente kaysa 2-star unit. Ang inverter AC ay gumagamit ng 30–50% mas kaunting power.</p>
          </div>
          <div className="bg-[#0A0E1A] p-4 rounded-lg">
            <p className="text-white font-semibold mb-1">8. I-seal ang mga Bintana at Pinto</p>
            <p className="text-gray-400 text-sm">Ang pagtagas ng hangin sa paligid ng mga bintana at pinto ay pinipilit ang AC na magtrabaho nang mas mahirap. Gumamit ng weather stripping o silicone. Sa mga tahanan sa Saudi, ito lamang ay makakabawas ng cooling costs ng 10–20%.</p>
          </div>
          <div className="bg-[#0A0E1A] p-4 rounded-lg">
            <p className="text-white font-semibold mb-1">9. Bawasan ang Water Heater Temperature</p>
            <p className="text-gray-400 text-sm">Itakda ang water heater thermostat sa 50°C sa halip na 70°C. Bawat 10°C bawas ay makatipid ng 3–5% sa water heating costs. Sa tag-init, isaalang-alang ang pagpatay ng water heater — sapat na mainit ang tubig sa lupa para sa komportableng paligo.</p>
          </div>
          <div className="bg-[#0A0E1A] p-4 rounded-lg">
            <p className="text-white font-semibold mb-1">10. Mag-install ng Solar Panels (Pangmatagalan)</p>
            <p className="text-gray-400 text-sm">Ang Saudi Vision 2030 ay hinihikayat ang residential solar power. Ang isang 5 kW solar system ay maaaring lumikha ng 700–900 kWh bawat buwan, potensyal na mag-alis o magbawas nang malaki ng iyong SEC bill. Ang payback period ay karaniwang 5–8 taon.</p>
          </div>
        </div>
      </GlassCard>
      <GlassCard>
        <h2>Paano Magbayad ng SEC Bill</h2>
        <div className="space-y-3">
          <div className="bg-[#0A0E1A] p-3 rounded-lg">
            <p className="text-white font-medium">SEC App o Website</p>
            <p className="text-gray-400 text-sm">I-download ang SEC app (iOS at Android) o bisitahin ang SEC website. Magrehistro gamit ang iyong account number at magbayad gamit ang Mada, Visa, o Mastercard.</p>
          </div>
          <div className="bg-[#0A0E1A] p-3 rounded-lg">
            <p className="text-white font-medium">SADAD Payment System</p>
            <p className="text-gray-400 text-sm">Karamihan sa mga Saudi bank ay nag-aalok ng SEC bill payment sa pamamagitan ng SADAD. Sa iyong bank app (Al Rajhi, SNB, Riyad Bank, Alinma), pumunta sa SADAD Bills, piliin ang Saudi Electricity Company, ilagay ang account number, at magbayad.</p>
          </div>
          <div className="bg-[#0A0E1A] p-3 rounded-lg">
            <p className="text-white font-medium">Absher Platform</p>
            <p className="text-gray-400 text-sm">Mag-log in sa Absher, pumunta sa My Services, at piliin ang Electricity Bill Payment. Naka-link ito sa iyong SADAD account.</p>
          </div>
          <div className="bg-[#0A0E1A] p-3 rounded-lg">
            <p className="text-white font-medium">Auto-Debit (Inirerekomenda)</p>
            <p className="text-gray-400 text-sm">Mag-set up ng automatic monthly payment sa iyong bank. Tiyak na hindi mo makaligtaan ang deadline, iwasan ang late fees at disconnection risks.</p>
          </div>
        </div>
      </GlassCard>
      <GlassCard>
        <h2>Paggamit ng Sauditoolhub SEC Bill Estimator</h2>
        <p>
          Ang aming libreng <Link href="/sec-bill-calculator" className="text-desert-primary font-bold underline">SEC Bill Estimator</Link> ay ginagawang madali ang pagtantiya ng iyong susunod na bill. Ilagay ang iyong inaasahang buwanang kWh at awtomatikong ilalapat ng calculator ang tamang tier rates.
        </p>
        <p>
          Tingnan din ang <Link href="/bill-splitter-calculator" className="text-desert-primary underline">Bill Splitter Calculator</Link> at <Link href="/used-car-calculator" className="text-desert-primary underline">Used Car Calculator</Link>.
        </p>
      </GlassCard>
      <GlassCard>
        <h2>Konklusyon</h2>
        <p>
          Ang pag-unawa sa SEC progressive tiered tariff system ay ang unang hakbang sa pagkontrol ng iyong gastos sa kuryente sa Saudi Arabia. Sa pamamagitan ng pag-monitor ng iyong konsumo sa pamamagitan ng SEC smart meter app, pag-adopt ng energy-efficient habits, at paggamit ng mga tool tulad ng <Link href="/sec-bill-calculator" className="text-desert-primary underline">SEC Bill Estimator</Link>, maiiwasan mo ang bill shock at mapanatili ang iyong buwanang gastos.
        </p>
        <p>Bisitahin ang aming <Link href="/blog" className="text-desert-primary underline">blog</Link> para sa mga gabay.</p>
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
        <p className="text-desert-primary text-sm font-medium tracking-widest uppercase">বিদ্যুৎ গাইড</p>
        <h1 className="text-3xl md:text-4xl font-bold text-white mt-2">সৌদি আরবে SEC বিদ্যুৎ বিল ও ট্যারিফ হারের সম্পূর্ণ গাইড 2026</h1>
        <p className="text-gray-400 mt-3 max-w-2xl mx-auto">
          সৌদি আরবের প্রগ্রেসিভ বিদ্যুৎ ট্যারিফ সিস্টেম বুঝুন, আপনার SEC বিল সঠিকভাবে গণনা করতে শিখুন, এবং গ্রীষ্মের খরচ কমানোর প্রমাণিত কৌশল আবিষ্কার করুন।
        </p>
      </div>
      <GlassCard>
        <h2>ভূমিকা</h2>
        <p>
          সৌদি আরবের প্রতিটি বাসিন্দারই একটি মুহূর্ত জানা আছে — গ্রীষ্মে SEC বিল আসার দিন। আপনি Absher বা SEC অ্যাপে নোটিফিকেশন খোলেন এবং আপনার মন খারাপ হয়ে যায়। শীতের 300 SAR-এর বিল গ্রীষ্মে 1,500 SAR বা তারও বেশি হয়ে গেছে। এই ধাক্কা বাস্তব, এবং এটি জেদ্দার অ্যাপার্টমেন্টবাসী থেকে রিয়াদের ভিলার মালিক — সবার উপর প্রভাব ফেলে।
        </p>
        <p>
          সত্যি কথা হলো, বেশিরভাগ মানুষ অতিরিক্ত টাকা দেয় শুধু এই কারণে যে তারা SEC ট্যারিফ সিস্টেম বুঝতে পারে না। সৌদি আরব <strong>প্রগ্রেসিভ টায়ার্ড ট্যারিফ</strong> ব্যবহার করে — আপনি যত বেশি বিদ্যুৎ ব্যবহার করেন, প্রতি কিলোওয়াট-আওয়ারে (kWh) তত বেশি দাম দেন। এর মানে হলো একটি অতিরিক্ত AC চালানো বা সারাদিন লাইট জ্বালিয়ে রাখা শুধু কয়েক রিয়াল বাড়ায় না; এটি আপনাকে উচ্চ টায়ারে নিয়ে যেতে পারে যেখানে প্রতিটি ইউনিটের দাম অনেক বেশি।
        </p>
        <p>
          এই গাইড 2026 সালে SEC বিদ্যুৎ বিল সম্পর্কে আপনার যা জানা দরকার তা ব্যাখ্যা করে। আপনি প্রতিটি খরচ টায়ারের সঠিক ট্যারিফ রেট, কীভাবে ধাপে ধাপে আপনার বিল গণনা করবেন, গ্রীষ্মে বিল কেন এতো বেড়ে যায় এবং আপনার মাসিক খরচ কমানোর দশটি প্রমাণিত উপায় শিখবেন। আমাদের <Link href="/sec-bill-calculator" className="text-desert-primary underline">SEC বিল এস্টিমেটর</Link> ব্যবহার করে আপনার পরবর্তী বিলের পূর্বাভাস নিন।
        </p>
      </GlassCard>
      <GlassCard>
        <h2>SEC ট্যারিফ সিস্টেম বোঝা</h2>
        <p>
          সৌদি ইলেকট্রিসিটি কোম্পানি (SEC), ইলেকট্রিসিটি অ্যান্ড কোজেনারেশন রেগুলেটরি অথরিটি (ECRA) দ্বারা নিয়ন্ত্রিত, একটি <strong>প্রগ্রেসিভ টায়ার্ড প্রাইসিং সিস্টেম</strong> ব্যবহার করে। এর মানে হলো আপনার মোট মাসিক খরচ বাড়ার সাথে সাথে প্রতি কিলোওয়াট-আওয়ারের দাম বাড়ে। এটি সংরক্ষণকে উৎসাহিত করার জন্য ডিজাইন করা হয়েছে — ভারী ব্যবহারকারীরা প্রতি ইউনিটে বেশি অর্থ প্রদান করে।
        </p>
        <h3>চারটি ট্যারিফ টায়ার (আবাসিক, 2026)</h3>
        <div className="bg-[#0A0E1A] p-5 rounded-xl mb-4">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-gray-700">
                <th className="text-left py-2 text-desert-primary">টায়ার</th>
                <th className="text-left py-2 text-desert-primary">মাসিক খরচ</th>
                <th className="text-left py-2 text-desert-primary">হার (হালালা/kWh)</th>
                <th className="text-left py-2 text-desert-primary">হার (SAR/kWh)</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-gray-800">
                <td className="py-2 text-white">টায়ার ১ (ভর্তুকি)</td>
                <td className="py-2 text-gray-300">০ – ২,০০০ kWh</td>
                <td className="py-2 text-gray-300">১৮ হালালা</td>
                <td className="py-2 text-gray-300">০.১৮ SAR</td>
              </tr>
              <tr className="border-b border-gray-800">
                <td className="py-2 text-white">টায়ার ২</td>
                <td className="py-2 text-gray-300">২,০০১ – ৪,০০০ kWh</td>
                <td className="py-2 text-gray-300">৩০ হালালা</td>
                <td className="py-2 text-gray-300">০.৩০ SAR</td>
              </tr>
              <tr className="border-b border-gray-800">
                <td className="py-2 text-white">টায়ার ৩</td>
                <td className="py-2 text-gray-300">৪,০০১ – ৬,০০০ kWh</td>
                <td className="py-2 text-gray-300">৪৫ হালালা</td>
                <td className="py-2 text-gray-300">০.৪৫ SAR</td>
              </tr>
              <tr>
                <td className="py-2 text-white">টায়ার ৪ (সর্বোচ্চ)</td>
                <td className="py-2 text-gray-300">৬,০০০-এর উপরে</td>
                <td className="py-2 text-gray-300">৬০ হালালা</td>
                <td className="py-2 text-gray-300">০.৬০ SAR</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="bg-desert-primary/10 border border-desert-primary/30 p-4 rounded-xl mb-4">
          <p className="text-sm font-medium text-desert-primary">
            ⚠️ <strong>গুরুত্বপূর্ণ: টায়ার্ড বিলিং আসলে কীভাবে কাজ করে</strong>
          </p>
          <p className="text-sm mt-2">
            সবচেয়ে সাধারণ ভুল হলো মনে করা যে আপনি যদি ৪,৫০০ kWh ব্যবহার করেন তাহলে সম্পূর্ণ ৪,৫০০ kWh টায়ার ৩ হারে ৪৫ হালালা ধার্য হবে। <strong>এটি ভুল।</strong> প্রতিটি টায়ারের মধ্যে শুধু সেই অংশের জন্যই সেই হার ধার্য হয়। আপনার প্রথম ২,০০০ kWh সবসময় সর্বনিম্ন ভর্তুকি হারে (১৮ হালালা)। শুধু পরবর্তী ২,০০০ kWh (২,০০১–৪,০০০) টায়ার ২ হারে। এবং শুধু বাকি ৫০০ kWh (৪,০০১–৪,৫০০) টায়ার ৩ হারে।
          </p>
        </div>
      </GlassCard>
      <GlassCard>
        <h2>গ্রীষ্ম বনাম শীতের খরচ</h2>
        <p>
          সৌদি আরবে শীত ও গ্রীষ্মের SEC বিলের পার্থক্য ধাক্কা দেওয়ার মতো হতে পারে। রিয়াদের একটি সাধারণ ৩ বেডরুমের অ্যাপার্টমেন্ট জানুয়ারিতে ১,২০০ kWh ব্যবহার করতে পারে (বিল: ~২৫০ SAR) কিন্তু জুলাইয়ে ৪,৫০০ kWh (বিল: ~১,৩৬০ SAR)। এটি <strong>৫ গুণ বৃদ্ধি</strong> যা প্রায় সম্পূর্ণভাবে এয়ার কন্ডিশনিংয়ের কারণে।
        </p>
        <p>
          এয়ার কন্ডিশনিং সৌদি বাড়িতে গ্রীষ্মের মোট বিদ্যুৎ খরচের ৫০–৭০% গঠন করে। একটি গড় ১৮,০০০ BTU স্প্লিট AC ইউনিট দিনে ১০ ঘন্টা চালালে মাসে প্রায় ৪৫০–৬০০ kWh ব্যবহার করে। ৫–৭টি AC ইউনিট বিশিষ্ট একটি ভিলা সহজেই গ্রীষ্মের সর্বোচ্চ মাসে ৬,০০০ kWh অতিক্রম করতে পারে, টায়ার ৪-এ প্রবেশ করে যেখানে প্রতিটি kWh-এর দাম ৬০ হালালা।
        </p>
        <p>
          AC ব্যবহারের ভিত্তিতে আপনার মাসিক kWh অনুমান: <strong>AC টনেজ × ১.২ kWh প্রতি ঘন্টা × ঘন্টা দৈনিক × ৩০ দিন</strong>। ২ টন AC ইউনিট ১২ ঘন্টা/দিন: ২ × ১.২ × ১২ × ৩০ = ৮৬৪ kWh মাসিক শুধু ওই একটি ইউনিট থেকে।
        </p>
      </GlassCard>
      <GlassCard>
        <h2>বিল গণনার সূত্র</h2>
        <div className="bg-[#0A0E1A] p-4 rounded-xl mb-4 font-mono text-sm text-gray-300">
          <p>T1 = ন্যূনতম(খরচ, 2000)</p>
          <p>T2 = সর্বোচ্চ(0, ন্যূনতম(খরচ - 2000, 2000))</p>
          <p>T3 = সর্বোচ্চ(0, ন্যূনতম(খরচ - 4000, 2000))</p>
          <p>T4 = সর্বোচ্চ(0, খরচ - 6000)</p>
          <p>VAT-এর আগে বিল = (T1 × ০.১৮) + (T2 × ০.৩০) + (T3 × ০.৪৫) + (T4 × ০.৬০)</p>
          <p>VAT = VAT-এর আগে বিল × ০.১৫</p>
          <p className="text-desert-primary font-semibold">মোট = VAT-এর আগে বিল + VAT</p>
        </div>
      </GlassCard>
      <GlassCard>
        <h2>বাস্তব জীবনের উদাহরণ</h2>

        <h3>উদাহরণ ১: ছোট ২ বেডরুমের অ্যাপার্টমেন্ট (১,৫০০ kWh/মাস)</h3>
        <div className="bg-[#0A0E1A] p-4 rounded-xl mb-4">
          <p className="text-sm">খরচ: ১,৫০০ kWh (সম্পূর্ণ টায়ার ১-এ)</p>
          <p className="text-sm mt-1">টায়ার ১: ১,৫০০ × ০.১৮ = ২৭০.০০ SAR</p>
          <p className="text-sm mt-1">টায়ার ২: ০ × ০.৩০ = ০.০০ SAR</p>
          <p className="text-sm mt-1">টায়ার ৩: ০ × ০.৪৫ = ০.০০ SAR</p>
          <p className="text-sm mt-1">টায়ার ৪: ০ × ০.৬০ = ০.০০ SAR</p>
          <p className="text-sm mt-2">VAT-এর আগে বিল: <strong>২৭০.০০ SAR</strong></p>
          <p className="text-sm">VAT (১৫%): <strong>৪০.৫০ SAR</strong></p>
          <p className="text-sm text-desert-primary font-semibold">মোট বিল: <strong>৩১০.৫০ SAR</strong></p>
        </div>

        <h3>উদাহরণ ২: বড় ৫ বেডরুমের ভিলা (৪,৫০০ kWh/মাস জুলাই)</h3>
        <div className="bg-[#0A0E1A] p-4 rounded-xl mb-4">
          <p className="text-sm">খরচ: ৪,৫০০ kWh (টায়ার ১, ২, এবং ৩)</p>
          <p className="text-sm mt-1">টায়ার ১: ২,০০০ × ০.১৮ = <strong>৩৬০.০০ SAR</strong></p>
          <p className="text-sm mt-1">টায়ার ২: ২,০০০ × ০.৩০ = <strong>৬০০.০০ SAR</strong></p>
          <p className="text-sm mt-1">টায়ার ৩: ৫০০ × ০.৪৫ = <strong>২২৫.০০ SAR</strong></p>
          <p className="text-sm mt-1">টায়ার ৪: ০ × ০.৬০ = <strong>০.০০ SAR</strong></p>
          <p className="text-sm mt-2">VAT-এর আগে বিল: ৩৬০ + ৬০০ + ২২৫ = <strong>১,১৮৫.০০ SAR</strong></p>
          <p className="text-sm">VAT (১৫%): <strong>১৭৭.৭৫ SAR</strong></p>
          <p className="text-sm text-desert-primary font-semibold">মোট বিল: <strong>১,৩৬২.৭৫ SAR</strong></p>
        </div>

        <h3>উদাহরণ ৩: পুলসহ বড় ভিলা (৭,৫০০ kWh/মাস আগস্ট)</h3>
        <div className="bg-[#0A0E1A] p-4 rounded-xl">
          <p className="text-sm">খরচ: ৭,৫০০ kWh (চারটি টায়ার)</p>
          <p className="text-sm mt-1">টায়ার ১: ২,০০০ × ০.১৮ = <strong>৩৬০.০০ SAR</strong></p>
          <p className="text-sm mt-1">টায়ার ২: ২,০০০ × ০.৩০ = <strong>৬০০.০০ SAR</strong></p>
          <p className="text-sm mt-1">টায়ার ৩: ২,০০০ × ০.৪৫ = <strong>৯০০.০০ SAR</strong></p>
          <p className="text-sm mt-1">টায়ার ৪: ১,৫০০ × ০.৬০ = <strong>৯০০.০০ SAR</strong></p>
          <p className="text-sm mt-2">VAT-এর আগে বিল: ৩৬০ + ৬০০ + ৯০০ + ৯০০ = <strong>২,৭৬০.০০ SAR</strong></p>
          <p className="text-sm">VAT (১৫%): <strong>৪১৪.০০ SAR</strong></p>
          <p className="text-sm text-desert-primary font-semibold">মোট বিল: <strong>৩,১৭৪.০০ SAR</strong></p>
        </div>
      </GlassCard>
      <GlassCard>
        <h2>SEC বিল কমানোর ১০টি প্রমাণিত উপায়</h2>
        <div className="space-y-4">
          <div className="bg-[#0A0E1A] p-4 rounded-lg">
            <p className="text-white font-semibold mb-1">১. AC ২৪°C-এ সেট করুন ১৮°C-র পরিবর্তে</p>
            <p className="text-gray-400 text-sm">২৪°C-র নিচে প্রতিটি ডিগ্রি শক্তি খরচ ৬–৮% বাড়ায়। ১৮°C-তে AC চালালে কুলিং খরচ ৩৬–৪৮% বাড়তে পারে। ফ্যান ব্যবহার করুন — ফ্যান AC-র তুলনায় ৯৫% কম শক্তি ব্যবহার করে।</p>
          </div>
          <div className="bg-[#0A0E1A] p-4 rounded-lg">
            <p className="text-white font-semibold mb-1">২. মাসে মাসে AC ফিল্টার পরিষ্কার করুন</p>
            <p className="text-gray-400 text-sm">নোংরা ফিল্টার বায়ুপ্রবাহ কমায়, AC কম্প্রেসারকে বেশি পরিশ্রম করতে বাধ্য করে। মাসিক পরিষ্কার AC শক্তি খরচ ৫–১৫% কমাতে পারে। সৌদি ধূলিকণায় প্রতি দুই সপ্তাহে পরিষ্কার করা ভালো।</p>
          </div>
          <div className="bg-[#0A0E1A] p-4 rounded-lg">
            <p className="text-white font-semibold mb-1">৩. সর্বত্র LED বাল্ব ব্যবহার করুন</p>
            <p className="text-gray-400 text-sm">LED বাল্ব প্রচলিত বাল্বের তুলনায় ৮০–৯০% কম বিদ্যুৎ ব্যবহার করে এবং ২৫ গুণ বেশি স্থায়ী হয়। একটি ভিলার সব বাল্ব পরিবর্তনে বছরে ১০০–২০০ kWh সাশ্রয় হতে পারে।</p>
          </div>
          <div className="bg-[#0A0E1A] p-4 rounded-lg">
            <p className="text-white font-semibold mb-1">৪. ডিভাইস আনপ্লাগ করুন (ফ্যান্টম লোড)</p>
            <p className="text-gray-400 text-sm">স্ট্যান্ডবাইয়ে থাকা ডিভাইসও বিদ্যুৎ ব্যবহার করে — একে ফ্যান্টম লোড বলে। টিভি, ফোন চার্জার, গেমিং কনসোল ব্যবহার না করার সময় ৫–১০% বিদ্যুৎ খরচ করতে পারে।</p>
          </div>
          <div className="bg-[#0A0E1A] p-4 rounded-lg">
            <p className="text-white font-semibold mb-1">৫. SEC স্মার্ট মিটার অ্যাপ ব্যবহার করুন</p>
            <p className="text-gray-400 text-sm">SEC স্মার্ট মিটার অ্যাপ (পূর্বে সেহের) ডাউনলোড করুন দৈনিক খরচ ট্র্যাক করতে। এটি রিয়েল-টাইম ব্যবহার, উচ্চ টায়ারের সতর্কতা এবং ঐতিহাসিক ডেটা দেখায়।</p>
          </div>
          <div className="bg-[#0A0E1A] p-4 rounded-lg">
            <p className="text-white font-semibold mb-1">৬. রাতে যন্ত্রপাতি চালান</p>
            <p className="text-gray-400 text-sm">ওয়াশিং মেশিন, ডিশওয়াশার এবং ওয়াটার হিটার তাপ উৎপন্ন করে। রাতে (রাত ১০টার পর) চালালে AC-কে সেই তাপ অপসারণের জন্য বেশি পরিশ্রম করতে হয় না। ৫–১০% বাঁচাতে পারেন।</p>
          </div>
          <div className="bg-[#0A0E1A] p-4 rounded-lg">
            <p className="text-white font-semibold mb-1">৭. শক্তি সাশ্রয়ী যন্ত্রপাতি ব্যবহার করুন</p>
            <p className="text-gray-400 text-sm">পুরোনো যন্ত্রপাতি প্রতিস্থাপনের সময় SEEC এনার্জি রেটিং লেবেল দেখুন। ৫-স্টার রেটেড AC ২-স্টার ইউনিটের তুলনায় ৩০% পর্যন্ত কম বিদ্যুৎ ব্যবহার করে। ইনভার্টার AC ৩০–৫০% কম শক্তি ব্যবহার করে।</p>
          </div>
          <div className="bg-[#0A0E1A] p-4 rounded-lg">
            <p className="text-white font-semibold mb-1">৮. জানালা ও দরজা সিল করুন</p>
            <p className="text-gray-400 text-sm">জানালা ও দরজার চারপাশে বাতাস ফুটো AC-কে বেশি পরিশ্রম করতে বাধ্য করে। সিলিকন বা ওয়েদার স্ট্রিপিং ব্যবহার করুন। সৌদি বাড়িতে এটি একাই কুলিং খরচ ১০–২০% কমাতে পারে।</p>
          </div>
          <div className="bg-[#0A0E1A] p-4 rounded-lg">
            <p className="text-white font-semibold mb-1">৯. ওয়াটার হিটারের তাপমাত্রা কমান</p>
            <p className="text-gray-400 text-sm">ওয়াটার হিটার থার্মোস্ট্যাট ৫০°C-এ সেট করুন ৭০°C-র পরিবর্তে। প্রতিটি ১০°C কমানোয় পানি গরম করার খরচ ৩–৫% বাঁচে। গ্রীষ্মে হিটার বন্ধ রাখুন — ভূগর্ভস্থ পানি আরামদায়ক গোসলের জন্য যথেষ্ট উষ্ণ।</p>
          </div>
          <div className="bg-[#0A0E1A] p-4 rounded-lg">
            <p className="text-white font-semibold mb-1">১০. সোলার প্যানেল বসান (দীর্ঘমেয়াদি)</p>
            <p className="text-gray-400 text-sm">সৌদি ভিশন ২০৩০ আবাসিক সোলার পাওয়ারকে উৎসাহিত করে। একটি ৫ kW সোলার সিস্টেম মাসে ৭০০–৯০০ kWh উৎপাদন করতে পারে, যা আপনার SEC বিল দূর বা ব্যাপকভাবে কমাতে পারে। পেব্যাক পিরিয়ড সাধারণত ৫–৮ বছর।</p>
          </div>
        </div>
      </GlassCard>
      <GlassCard>
        <h2>SEC বিল পরিশোধের উপায়</h2>
        <div className="space-y-3">
          <div className="bg-[#0A0E1A] p-3 rounded-lg">
            <p className="text-white font-medium">SEC অ্যাপ বা ওয়েবসাইট</p>
            <p className="text-gray-400 text-sm">SEC অ্যাপ ডাউনলোড করুন (iOS ও Android) বা ওয়েবসাইটে যান। আপনার অ্যাকাউন্ট নম্বর দিয়ে রেজিস্টার করুন এবং মাদা, ভিসা বা মাস্টারকার্ড দিয়ে পেমেন্ট করুন।</p>
          </div>
          <div className="bg-[#0A0E1A] p-3 rounded-lg">
            <p className="text-white font-medium">সাদাদ পেমেন্ট সিস্টেম</p>
            <p className="text-gray-400 text-sm">বেশিরভাগ সৌদি ব্যাংক সাদাদের মাধ্যমে SEC বিল পেমেন্ট অফার করে। ব্যাংক অ্যাপে (আল রাজি, SNB, রিয়াদ ব্যাংক, আলইনমা) সাদাদ বিলে যান, সৌদি ইলেকট্রিসিটি কোম্পানি নির্বাচন করুন এবং পেমেন্ট করুন।</p>
          </div>
          <div className="bg-[#0A0E1A] p-3 rounded-lg">
            <p className="text-white font-medium">আবশের প্ল্যাটফর্ম</p>
            <p className="text-gray-400 text-sm">আবশেতে লগইন করুন, মাই সার্ভিসেসে যান এবং ইলেকট্রিসিটি বিল পেমেন্ট নির্বাচন করুন। আপনার সাদাদ অ্যাকাউন্টের সাথে লিংকড।</p>
          </div>
          <div className="bg-[#0A0E1A] p-3 rounded-lg">
            <p className="text-white font-medium">অটো-ডেবিট (সুপারিশকৃত)</p>
            <p className="text-gray-400 text-sm">ব্যাংকের মাধ্যমে স্বয়ংক্রিয় মাসিক পেমেন্ট সেটআপ করুন। নিশ্চিত করুন যে আপনি কখনো ডেডলাইন মিস করবেন না, লেট ফি ও সংযোগ বিচ্ছিন্ন হওয়া এড়ান।</p>
          </div>
        </div>
      </GlassCard>
      <GlassCard>
        <h2>Sauditoolhub SEC বিল এস্টিমেটর ব্যবহার</h2>
        <p>
          আমাদের বিনামূল্যের <Link href="/sec-bill-calculator" className="text-desert-primary font-bold underline">SEC বিল এস্টিমেটর</Link> আপনার পরবর্তী বিলের পূর্বাভাস দেওয়া সহজ করে। আপনার মাসিক kWh লিখুন এবং ক্যালকুলেটর স্বয়ংক্রিয়ভাবে সঠিক টায়ার রেট ও VAT প্রয়োগ করবে।
        </p>
        <p>
          <Link href="/bill-splitter-calculator" className="text-desert-primary underline">বিল স্প্লিটার ক্যালকুলেটর</Link> এবং <Link href="/used-car-calculator" className="text-desert-primary underline">ইউজড কার ক্যালকুলেটর</Link>-ও দেখুন।
        </p>
      </GlassCard>
      <GlassCard>
        <h2>উপসংহার</h2>
        <p>
          SEC প্রগ্রেসিভ টায়ার্ড ট্যারিফ সিস্টেম বোঝা সৌদি আরবে আপনার বিদ্যুৎ খরচ নিয়ন্ত্রণের প্রথম পদক্ষেপ। SEC স্মার্ট মিটার অ্যাপ, শক্তি সাশ্রয়ী অভ্যাস এবং <Link href="/sec-bill-calculator" className="text-desert-primary underline">SEC বিল এস্টিমেটর</Link>-এর মতো টুল ব্যবহার করে আপনি বিলের ধাক্কা এড়াতে এবং আপনার মাসিক খরচ নিয়ন্ত্রণে রাখতে পারেন।
        </p>
        <p>আমাদের <Link href="/blog" className="text-desert-primary underline">ব্লগ</Link> দেখুন।</p>
      </GlassCard>
    </article>
  )
}

export default async function SecGuidePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  return (
    <div className="relative z-10 px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        {locale === 'ar' ? <ArContent /> : locale === 'ur' ? <UrContent /> : locale === 'tl' ? <TlContent /> : locale === 'bn' ? <BnContent /> : <EnContent />}
      </div>
    </div>
  )
}