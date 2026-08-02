import type { Metadata } from 'next'
import Link from 'next/link'
import { GlassCard } from '@/components/GlassCard'

type Props = { params: Promise<{ locale: string }> }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params
  const base = '/guide/bill-splitter-shared-apartment-guide-saudi-arabia-2026'
  const titles: Record<string, string> = {
    en: 'The Complete Guide to Splitting Rent & Utility Bills in Shared Apartments in Saudi Arabia 2026',
    ar: 'الدليل الشامل لتقسيم الإيجار وفواتير الخدمات في الشقق المشتركة في السعودية 2026',
    ur: 'سعودی عرب میں مشترکہ اپارٹمنٹس میں کرایہ اور بل تقسیم کرنے کا مکمل گائیڈ 2026',
    tl: 'Gabay sa Paghahati ng Renta at Utility Bills sa Shared Apartments sa Saudi Arabia 2026',
    bn: 'সৌদি আরবে শেয়ার্ড অ্যাপার্টমেন্টে ভাড়া ও ইউটিলিটি বিল ভাগ করার সম্পূর্ণ গাইড 2026',
  }
  return {
    title: titles[locale] || titles.en,
    description: titles[locale] || titles.en,
    alternates: {
      canonical: `https://sauditoolhub.com${base}`,
      languages: {
        en: `https://sauditoolhub.com/en${base}`,
        ar: `https://sauditoolhub.com/ar${base}`,
        ur: `https://sauditoolhub.com/ur${base}`,
        tl: `https://sauditoolhub.com/tl${base}`,
        bn: `https://sauditoolhub.com/bn${base}`,
      },
    },
  }
}

const articleSchemaEn = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": 'The Complete Guide to Splitting Rent & Utility Bills in Shared Apartments in Saudi Arabia 2026',
  "description": 'Learn how to split rent, SEC electricity bills, and other shared living expenses fairly in Saudi Arabia.',
  "author": { "@type": "Organization", "name": "Sauditoolhub" },
  "datePublished": "2026-06-01",
  "dateModified": "2026-07-28"
}

const articleSchemaAr = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": 'الدليل الشامل لتقسيم الإيجار وفواتير الخدمات في الشقق المشتركة في السعودية 2026',
  "description": 'تعلم كيفية تقسيم الإيجار وفواتير الكهرباء ومصاريف المعيشة المشتركة بشكل عادل في السعودية.',
  "author": { "@type": "Organization", "name": "Sauditoolhub" },
  "datePublished": "2026-06-01",
  "dateModified": "2026-07-28"
}

const articleSchemaUr = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": 'سعودی عرب میں مشترکہ اپارٹمنٹس میں کرایہ اور بل تقسیم کرنے کا مکمل گائیڈ 2026',
  "description": 'سعودی عرب میں کرایہ، SEC بجلی بل، اور دیگر مشترکہ رہائشی اخراجات منصفانہ طور پر تقسیم کرنا سیکھیں۔',
  "author": { "@type": "Organization", "name": "Sauditoolhub" },
  "datePublished": "2026-06-01",
  "dateModified": "2026-07-28"
}

const articleSchemaTl = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": 'Gabay sa Paghahati ng Renta at Utility Bills sa Shared Apartments sa Saudi Arabia 2026',
  "description": 'Alamin kung paano hatiin ang upa, SEC bill, at iba pang shared living expenses sa Saudi Arabia.',
  "author": { "@type": "Organization", "name": "Sauditoolhub" },
  "datePublished": "2026-06-01",
  "dateModified": "2026-07-28"
}

const articleSchemaBn = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": 'সৌদি আরবে শেয়ার্ড অ্যাপার্টমেন্টে ভাড়া ও ইউটিলিটি বিল ভাগ করার সম্পূর্ণ গাইড 2026',
  "description": 'সৌদি আরবে ভাড়া, SEC বিদ্যুৎ বিল এবং অন্যান্য শেয়ার্ড লিভিং খরচ কীভাবে ভাগ করবেন তা শিখুন।',
  "author": { "@type": "Organization", "name": "Sauditoolhub" },
  "datePublished": "2026-06-01",
  "dateModified": "2026-07-28"
}

const faqsEn = [
  { question: 'What is the best way to split rent in a shared apartment in Saudi Arabia?', answer: 'The fairest method depends on your situation. For equal-sized rooms with shared common areas, split equally by the number of roommates. If one person has a master bedroom with an attached bathroom, a 60/40 or 55/45 split is common. Use our free Bill Splitter Calculator at /bill-splitter-calculator to get exact numbers.' },
  { question: 'How should we split the SEC electricity bill among roommates?', answer: 'Electricity is the most variable shared expense, especially in Saudi summers. The fairest way is to split it equally if everyone uses AC similarly. If one roommate runs AC at 18°C while others keep it at 24°C, consider an usage-based adjustment. Track daily usage via the SEC smart meter app (formerly Saher) for transparency.' },
  { question: 'Can we split bills using SADAD in Saudi Arabia?', answer: "Yes. One person pays the full bill through SADAD via their bank app (Al Rajhi, SNB, Riyad Bank) and the others transfer their share instantly via Urpay, STC Pay, or bank transfer. Many roommates set up a monthly 'bill payment day' where everyone transfers their share after receiving the bill." },
  { question: 'What expenses should be split in a shared apartment?', answer: 'Typically: monthly rent, SEC electricity bill, National Water Company bill, internet/Wi-Fi (STC, Mobily, Zain), gas cylinders, and shared cleaning/maid service. Groceries and personal items are usually separate. Agree on what is shared and what is personal before moving in.' },
  { question: "How do I handle a roommate who doesn't pay on time?", answer: "Set a clear 'bill payment day' (e.g., every 5th of the month). Use shared expense apps like Splitwise alongside our Bill Splitter. For persistent issues, collect the security deposit (usually one month's rent) that can cover any unpaid share. Communication is key — have a friendly conversation before it escalates." },
  { question: 'Should the person with the master bedroom pay more rent?', answer: 'Yes, this is standard practice in Saudi Arabia. The master bedroom has an attached bathroom and often more closet space. A common split is 60/40 for 2 roommates or 40/30/30 for 3 roommates with one master. The exact premium depends on the size difference. Our calculator lets you adjust this easily.' },
  { question: 'How do we handle AC rules in shared apartments?', answer: 'Summer AC usage is the #1 cause of roommate disputes over bills. Agree on a temperature range (e.g., 23°C–25°C) and hours of operation. If one person works from home and runs AC all day while others are at the office, consider a usage adjustment. Set rules early to avoid conflict.' },
  { question: 'What is the best app for splitting bills with roommates in KSA?', answer: 'Our Sauditoolhub Bill Splitter Calculator gives you the exact breakdown instantly. For ongoing tracking, Splitwise works well internationally. For Saudi-specific payments, STC Pay, Urpay (from Al Rajhi), and bank transfers make splitting instant. Combine our calculator with one of these payment apps for a complete solution.' },
]

const faqsAr = [
  { question: 'ما هي أفضل طريقة لتقسيم الإيجار في شقة مشتركة في السعودية؟', answer: 'أفضل طريقة تعتمد على وضعكم. للغرف المتساوية، اقسموا بعدد الأشخاص. إذا كان أحد الزملاء يملك غرفة ماستر بحمام خاص، التقسيم 60/40 أو 55/45 شائع. استخدم حاسبة تقسيم الفواتير من Sauditoolhub في /bill-splitter-calculator.' },
  { question: 'كيف نقسم فاتورة الكهرباء بين الزملاء؟', answer: 'الكهرباء أكثر المصاريف تقلباً خاصة في الصيف. التقسيم المتساوي هو الأسهل إذا كان الجميع يستخدم المكيف بنفس الدرجة. إذا شخص يضبط المكيف على 18°C وآخر على 24°C، يجب تعديل الحصص. استخدم تطبيق العداد الذكي من SEC للشفافية.' },
  { question: 'هل يمكن تقسيم الفواتير عبر سداد؟', answer: 'نعم. شخص واحد يدفع الفاتورة كاملة عبر سداد من تطبيق بنكه (الراجحي، الأهلي، الرياض) والباقي يحولون حصصهم فوراً عبر أورباي أو STC Pay أو تحويل بنكي.' },
  { question: 'ما هي المصاريف التي تقسم في الشقة المشتركة؟', answer: 'عادة: الإيجار الشهري، فاتورة الكهرباء، فاتورة المياه، الإنترنت، أسطوانات الغاز، وخدمة التنظيف المشتركة. المصاريف الشخصية والطعام عادة تكون مسؤولية فردية.' },
  { question: 'كيف أتعامل مع زميل لا يدفع في الوقت المحدد؟', answer: 'حدد يوماً شهرياً ثابتاً للدفع (مثلاً كل 5 من الشهر). استخدم تطبيقات مثل Splitwise مع حاسبة Sauditoolhub. احتفظ بوديعة تأمين (عادة إيجار شهر) لتغطية أي تأخير. التواصل الواضح هو الحل.' },
  { question: 'هل يجب أن يدفع صاحب الغرفة الرئيسية إيجاراً أكثر؟', answer: 'نعم، هذا شائع في السعودية. الغرفة الرئيسية بحمام خاص وخزانة أكبر. التقسيم 60/40 لشخصين أو 40/30/30 لثلاثة أشخاص مناسب. حاسبتنا تسمح بتعديل هذا بسهولة.' },
  { question: 'كيف نتعامل مع قواعد المكيف في الشقة المشتركة؟', answer: 'المكيف هو أكبر سبب للخلافات صيفاً. اتفقوا على نطاق درجة حرارة (23°C-25°C) وساعات التشغيل. إذا شخص يعمل من المنزل ويشغل المكيف طوال اليوم، قد يحتاج تعديل الحصة.' },
  { question: 'ما أفضل تطبيق لتقسيم الفواتير مع الزملاء في السعودية؟', answer: 'حاسبة تقسيم الفواتير من Sauditoolhub تعطي التقسيم الدقيق فوراً. للمتابعة اليومية، استخدم Splitwise. للدفع، استخدم STC Pay أو أورباي أو التحويل البنكي.' },
]

const faqsUr = [
  { question: 'سعودی عرب میں مشترکہ اپارٹمنٹ میں کرایہ تقسیم کرنے کا بہترین طریقہ کیا ہے؟', answer: 'برابر کمروں کے لیے برابر تقسیم کریں۔ اگر کسی کے پاس ماسٹر بیڈروم ہے تو 60/40 عام ہے۔ /bill-splitter-calculator پر ہمارا بل سپلٹر کیلکولیٹر استعمال کریں۔' },
  { question: 'SEC بجلی کا بل فلیٹ میٹس میں کیسے تقسیم کریں؟', answer: 'بجلی گرمیوں میں سب سے متغیر خرچ ہے۔ برابر تقسیم سب سے آسان ہے اگر سب AC ایک جیسی ڈگری پر استعمال کریں۔ سیک سمارٹ میٹر ایپ سے یومیہ استعمال دیکھیں۔' },
  { question: 'کیا سعودی عرب میں سداد کے ذریعے بل تقسیم کر سکتے ہیں؟', answer: 'ہاں۔ ایک شخص سداد کے ذریعے پورا بل ادا کرتا ہے اور باقی فوری طور پر Urpay، STC Pay، یا بینک ٹرانسفر سے اپنا حصہ بھیج دیتے ہیں۔' },
  { question: 'مشترکہ اپارٹمنٹ میں کون سے اخراجات تقسیم ہوتے ہیں؟', answer: 'عام طور پر: ماہانہ کرایہ، SEC بجلی بل، پانی بل، انٹرنیٹ/وائی فائی، گیس سلنڈر، اور صفائی کا خرچہ۔' },
  { question: 'ایسے فلیٹ میٹ سے کیسے نمٹیں جو وقت پر ادائیگی نہیں کرتا؟', answer: 'ماہانہ ادائیگی کا ایک دن مقرر کریں (مثلاً ہر مہینے کی 5 تاریخ)۔ Splitwise جیسی ایپ استعمال کریں۔ سیکیورٹی ڈپازٹ رکھیں۔' },
  { question: 'کیا ماسٹر بیڈروم والے کو زیادہ کرایہ دینا چاہیے؟', answer: 'ہاں، سعودی عرب میں یہ عام ہے۔ ماسٹر بیڈروم میں اپنا باتھ روم اور زیادہ جگہ ہوتی ہے۔ 60/40 یا 40/30/30 تقسیم عام ہے۔' },
  { question: 'مشترکہ اپارٹمنٹ میں AC کے قواعد کیسے طے کریں؟', answer: 'درجہ حرارت کی حد (23°C-25°C) اور اوقات پر اتفاق کریں۔ اگر کوئی گھر سے کام کرتا ہے اور سارا دن AC چلاتا ہے تو حصہ ایڈجسٹ کریں۔' },
  { question: 'فلیٹ میٹس کے لیے بہترین ایپ کون سی ہے؟', answer: 'Sauditoolhub کا بل سپلٹر کیلکولیٹر فوری تخمینہ دیتا ہے۔ Splitwise روزانہ ٹریکنگ کے لیے۔ STC Pay یا Urpay ادائیگی کے لیے۔' },
]

const faqsTl = [
  { question: 'Ano ang pinakamahusay na paraan para hatiin ang upa sa shared apartment sa Saudi Arabia?', answer: 'Kung magkakasinglaki ang kuwarto, hatiin nang pantay. Kung may master bedroom, karaniwan ang 60/40 split. Gamitin ang aming Bill Splitter Calculator sa /bill-splitter-calculator.' },
  { question: 'Paano namin hahatiin ang SEC electricity bill?', answer: 'Ang kuryente ang pinaka-variable na gastos lalo na sa tag-init. Pantay na hati kung pare-pareho ang gamit ng AC. Gamitin ang SEC smart meter app para sa transparency.' },
  { question: 'Pwede bang maghati ng bills gamit ang SADAD?', answer: 'Oo. Isang tao ang magbabayad ng buong bill sa SADAD at ang iba ay magpapadala agad ng kanilang share sa pamamagitan ng Urpay, STC Pay, o bank transfer.' },
  { question: 'Anu-anong gastos ang dapat hatiin sa shared apartment?', answer: 'Karaniwan: upa, SEC bill, water bill, internet/Wi-Fi, gas cylinders, at shared cleaning service. Ang personal na gastos ay hiwalay.' },
  { question: 'Paano ko haharapin ang roommate na hindi nagbabayad on time?', answer: 'Mag-set ng fixed bill payment day (hal. every 5th of the month). Gumamit ng Splitwise app. Mag-collect ng security deposit bago mag-move in.' },
  { question: 'Dapat bang magbayad ng mas malaki ang may master bedroom?', answer: 'Oo, ito ay karaniwang praktika sa Saudi Arabia. Ang master bedroom ay may sariling bathroom at mas maraming closet. Karaniwan ang 60/40 split.' },
  { question: 'Paano namin i-set ang AC rules sa shared apartment?', answer: 'Sumang-ayon sa temperature range (23°C-25°C) at oras ng paggamit. Kung may nag-work from home at buong araw ang AC, ayusin ang share.' },
  { question: 'Ano ang pinakamahusay na app para sa bill splitting sa KSA?', answer: 'Ang Bill Splitter Calculator ng Sauditoolhub ay nagbibigay ng eksaktong breakdown. Gamitin ang Splitwise para sa tracking at STC Pay para sa payment.' },
]

const faqsBn = [
  { question: 'সৌদি আরবে শেয়ার্ড অ্যাপার্টমেন্টে ভাড়া ভাগ করার সেরা উপায় কী?', answer: 'সমান সাইজের রুম হলে সমান ভাগ করুন। মাস্টার বেডরুম থাকলে 60/40 ভাগ সাধারণ। /bill-splitter-calculator-এ আমাদের বিল স্প্লিটার ক্যালকুলেটর ব্যবহার করুন।' },
  { question: 'SEC বিদ্যুৎ বিল কীভাবে ভাগ করবেন?', answer: 'গ্রীষ্মে বিদ্যুৎ সবচেয়ে ওঠানামা করা খরচ। সবাই সমান AC ব্যবহার করলে সমান ভাগ। SEC স্মার্ট মিটার অ্যাপ ব্যবহার করুন স্বচ্ছতার জন্য।' },
  { question: 'সৌদি আরবে সাদাদের মাধ্যমে বিল ভাগ করা যায়?', answer: 'হ্যাঁ। একজন সাদাদের মাধ্যমে পুরো বিল পরিশোধ করে এবং বাকিরা Urpay, STC Pay, বা ব্যাংক ট্রান্সফারের মাধ্যমে তাদের অংশ পাঠায়।' },
  { question: 'শেয়ার্ড অ্যাপার্টমেন্টে কী কী খরচ ভাগ করা উচিত?', answer: 'সাধারণত: মাসিক ভাড়া, SEC বিদ্যুৎ বিল, পানি বিল, ইন্টারনেট/ওয়াই-ফাই, গ্যাস সিলিন্ডার, এবং শেয়ার্ড ক্লিনিং সেবা। ব্যক্তিগত খরচ আলাদা।' },
  { question: 'সময়মতো না দেওয়া রুমমেটের সাথে কীভাবে মোকাবিলা করবেন?', answer: 'একটি নির্দিষ্ট বিল পেমেন্ট দিন নির্ধারণ করুন (যেমন প্রতি মাসের ৫ তারিখ)। Splitwise অ্যাপ ব্যবহার করুন। মুভ ইন করার আগে সিকিউরিটি ডিপোজিট সংগ্রহ করুন।' },
  { question: 'মাস্টার বেডরুমের ব্যক্তির কি বেশি ভাড়া দেওয়া উচিত?', answer: 'হ্যাঁ, সৌদি আরবে এটি সাধারণ। মাস্টার বেডরুমে নিজস্ব বাথরুম ও বেশি ক্লোসেট স্পেস থাকে। 60/40 বা 40/30/30 ভাগ সাধারণ।' },
  { question: 'শেয়ার্ড অ্যাপার্টমেন্টে AC নিয়ম কীভাবে নির্ধারণ করবেন?', answer: 'তাপমাত্রার সীমা (23°C-25°C) এবং ব্যবহারের সময় নিয়ে একমত হন। কেউ বাড়ি থেকে কাজ করলে এবং সারাদিন AC চালালে শেয়ার সামঞ্জস্য করুন।' },
  { question: 'KSA-তে বিল ভাগ করার জন্য সেরা অ্যাপ কী?', answer: 'Sauditoolhub-এর বিল স্প্লিটার ক্যালকুলেটর তাৎক্ষণিক ব্রেকডাউন দেয়। Splitwise ট্র্যাকিংয়ের জন্য এবং STC Pay পেমেন্টের জন্য ব্যবহার করুন।' },
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
        <p className="text-desert-primary text-sm font-medium tracking-widest uppercase">Housing Guide</p>
        <h1 className="text-3xl md:text-4xl font-bold text-white mt-2">The Complete Guide to Splitting Rent &amp; Utility Bills in Shared Apartments in Saudi Arabia 2026</h1>
        <p className="text-gray-400 mt-3 max-w-2xl mx-auto">
          Living costs in Riyadh, Jeddah, and Dammam are high. Sharing an apartment is the best financial decision, but splitting bills fairly can be a headache. This guide shows you exactly how.
        </p>
      </div>

      <GlassCard>
        <h2>Introduction</h2>
        <p>
          If you live in Saudi Arabia, you already know the reality: rents in Riyadh, Jeddah, and Dammam have been climbing steadily. A decent 2-bedroom apartment in a good neighborhood can cost 40,000 to 60,000 SAR per year. Add to that the SEC electricity bill which, in summer, can exceed 1,000 SAR per month for a single apartment, plus water, internet, and other utilities. The numbers add up fast.
        </p>
        <p>
          Sharing an apartment is the smartest way to cut your housing costs by 40–50%. But here is the problem everyone faces: how do you split the bills <strong>fairly</strong>? Does the person with the master bedroom pay more? What if one roommate runs the AC at 18°C while you prefer 24°C? And how do you handle late payments without awkward conversations?
        </p>
        <p>
          This guide answers all these questions. You will learn the fairest methods for splitting rent and utilities, see real calculation examples, and get practical tips for avoiding roommate conflicts over money. Plus, use our free <Link href="/bill-splitter-calculator" className="text-desert-primary underline">Bill Splitter Calculator</Link> to get an exact breakdown in seconds.
        </p>
      </GlassCard>

      <GlassCard>
        <h2>What Expenses Need to Be Split?</h2>
        <p>Before moving in together, agree on exactly which expenses will be shared. Here is the standard list for Saudi apartments:</p>
        <div className="space-y-3">
          <div className="bg-[#0A0E1A] p-3 rounded-lg">
            <p className="text-white font-medium">1. Monthly Rent</p>
            <p className="text-gray-400 text-sm">The biggest expense. Usually paid by post-dated cheques or SADAD auto-payment. Split method should be agreed before signing the contract.</p>
          </div>
          <div className="bg-[#0A0E1A] p-3 rounded-lg">
            <p className="text-white font-medium">2. SEC Electricity Bill</p>
            <p className="text-gray-400 text-sm">The most variable expense. Can range from 200 SAR in winter to 1,500+ SAR in peak summer. AC usage is the main driver. Track it via the SEC smart meter app for transparency.</p>
          </div>
          <div className="bg-[#0A0E1A] p-3 rounded-lg">
            <p className="text-white font-medium">3. Water Bill</p>
            <p className="text-gray-400 text-sm">National Water Company bill. Usually a small fixed amount (30–80 SAR/month) but can spike if you have a garden or use a lot of water.</p>
          </div>
          <div className="bg-[#0A0E1A] p-3 rounded-lg">
            <p className="text-white font-medium">4. Internet/Wi-Fi</p>
            <p className="text-gray-400 text-sm">STC, Mobily, or Zain fiber packages. Fixed monthly cost, easily split equally. Choose a plan that matches your speed needs.</p>
          </div>
          <div className="bg-[#0A0E1A] p-3 rounded-lg">
            <p className="text-white font-medium">5. Gas Cylinders</p>
            <p className="text-gray-400 text-sm">If you use gas for cooking. A large cylinder costs about 30–40 SAR and lasts 1–3 months depending on usage.</p>
          </div>
          <div className="bg-[#0A0E1A] p-3 rounded-lg">
            <p className="text-white font-medium">6. Cleaning/Maid Service</p>
            <p className="text-gray-400 text-sm">If you share a maid service, split the cost equally. Decide on frequency (weekly, bi-weekly) beforehand.</p>
          </div>
        </div>
      </GlassCard>

      <GlassCard>
        <h2>Fair Splitting Methods</h2>
        <h3>Method 1: Equal Split</h3>
        <p>Best for apartments where all rooms are similar in size and everyone uses common areas equally. Simply divide total expenses by the number of roommates. This is the simplest and most common method.</p>

        <h3>Method 2: Proportional Split by Room Size</h3>
        <p>Use this when one person has a master bedroom with an attached bathroom. The master bedroom occupant pays a premium (typically 10–20% more). Common splits: 60/40 for 2 roommates, or 40/30/30 for 3 roommates where one has the master.</p>

        <h3>Method 3: Usage-Based Split</h3>
        <p>Best for variable expenses like electricity. If one roommate works from home and runs AC all day, while others commute and use AC only at night, adjust the electricity share accordingly. Use the SEC smart meter app to track consumption patterns transparently.</p>

        <div className="bg-desert-primary/10 border border-desert-primary/30 p-4 rounded-xl">
          <p className="text-sm font-medium text-desert-primary">⚠️ Pro Tip</p>
          <p className="text-sm mt-1">Combine methods for best results: split rent proportionally by room size, and split utilities equally or by usage. Our <Link href="/bill-splitter-calculator" className="text-desert-primary underline">Bill Splitter Calculator</Link> supports all these methods.</p>
        </div>
      </GlassCard>

      <GlassCard>
        <h2>Step-by-Step Calculation Formula</h2>
        <div className="bg-[#0A0E1A] p-4 rounded-xl mb-4 font-mono text-sm text-gray-300">
          <p>Step 1: Add all fixed costs (Rent + Internet + Maid service)</p>
          <p>Step 2: Add all variable costs (SEC bill + Water + Gas)</p>
          <p>Step 3: Total shared expenses = Fixed costs + Variable costs</p>
          <p>Step 4: Divide by number of roommates (for equal split)</p>
          <p className="text-gray-400">OR</p>
          <p>Step 4: Apply proportional percentages (for master bedroom premium)</p>
          <p>Step 5: Each person's total = rent share + utility share</p>
        </div>
      </GlassCard>

      <GlassCard>
        <h2>Real-Life Calculation Examples</h2>

        <h3>Example 1: Equal Split — Two Roommates in a 2BHK</h3>
        <div className="bg-[#0A0E1A] p-4 rounded-xl mb-4">
          <p className="text-sm">Total expenses: 3,000 SAR rent + 400 SAR SEC + 100 SAR water + 200 SAR internet = <strong>3,700 SAR</strong></p>
          <p className="text-sm mt-1">Per person: 3,700 ÷ 2 = <strong>1,850 SAR/month</strong></p>
        </div>

        <h3>Example 2: Proportional Split — Three Roommates with Master Bedroom</h3>
        <div className="bg-[#0A0E1A] p-4 rounded-xl mb-4">
          <p className="text-sm">Total expenses: 4,500 SAR rent + 600 SAR SEC + 100 SAR water + 250 SAR internet = <strong>5,450 SAR</strong></p>
          <p className="text-sm mt-2 text-white font-medium">Split ratio: Master bedroom pays 40%, other two pay 30% each</p>
          <p className="text-sm mt-1">Master bedroom: 5,450 × 0.40 = <strong>2,180 SAR/month</strong></p>
          <p className="text-sm mt-1">Each other roommate: 5,450 × 0.30 = <strong>1,635 SAR/month</strong></p>
        </div>

        <h3>Example 3: Usage-Based Adjustment for AC</h3>
        <div className="bg-[#0A0E1A] p-4 rounded-xl">
          <p className="text-sm">SEC bill: 800 SAR. Roommate A works from home (60% usage), Roommate B works at office (40% usage).</p>
          <p className="text-sm mt-1">Roommate A pays: 800 × 0.60 = <strong>480 SAR</strong></p>
          <p className="text-sm mt-1">Roommate B pays: 800 × 0.40 = <strong>320 SAR</strong></p>
        </div>
      </GlassCard>

      <GlassCard>
        <h2>Top Tips to Avoid Roommate Conflicts Over Money</h2>
        <div className="space-y-3">
          <div className="bg-[#0A0E1A] p-3 rounded-lg">
            <p className="text-white font-medium">1. Set a Monthly "Bill Payment Day"</p>
            <p className="text-gray-400 text-sm">Pick a specific date every month (e.g., the 5th) for everyone to transfer their share. This creates a routine and eliminates last-minute scrambling.</p>
          </div>
          <div className="bg-[#0A0E1A] p-3 rounded-lg">
            <p className="text-white font-medium">2. Use Tracking Apps</p>
            <p className="text-gray-400 text-sm">Use our Bill Splitter Calculator for the initial breakdown, then track ongoing expenses with apps like Splitwise. This keeps everyone accountable and avoids memory disputes.</p>
          </div>
          <div className="bg-[#0A0E1A] p-3 rounded-lg">
            <p className="text-white font-medium">3. Agree on AC Rules Before Summer</p>
            <p className="text-gray-400 text-sm">Summer electricity bills are the #1 cause of roommate arguments. Agree on a temperature range (23°C–25°C), operating hours, and whether personal AC units in rooms are tracked separately.</p>
          </div>
          <div className="bg-[#0A0E1A] p-3 rounded-lg">
            <p className="text-white font-medium">4. Keep a Security Deposit</p>
            <p className="text-gray-400 text-sm">Collect one month's rent as a deposit before moving in. This covers any unpaid bills if someone leaves suddenly or can't pay.</p>
          </div>
          <div className="bg-[#0A0E1A] p-3 rounded-lg">
            <p className="text-white font-medium">5. Communicate Openly</p>
            <p className="text-gray-400 text-sm">If someone is struggling to pay, talk about it early rather than letting it fester. Consider setting up a joint bank account or shared SADAD auto-debit so bills are always paid on time.</p>
          </div>
        </div>
      </GlassCard>

      <GlassCard>
        <h2>How to Pay Shared Bills in Saudi Arabia</h2>
        <div className="space-y-3">
          <div className="bg-[#0A0E1A] p-3 rounded-lg">
            <p className="text-white font-medium">SADAD Payment System</p>
            <p className="text-gray-400 text-sm">One person pays the full bill through SADAD using their bank app (Al Rajhi, SNB, Riyad Bank, Alinma). The others transfer their share immediately via Urpay (from Al Rajhi), STC Pay, or direct bank transfer.</p>
          </div>
          <div className="bg-[#0A0E1A] p-3 rounded-lg">
            <p className="text-white font-medium">Auto-Pay via Bank App</p>
            <p className="text-gray-400 text-sm">Set up auto-debit for SEC and other bills. One person pays, and others use Urpay or STC Pay for instant transfers. Most Saudi banks support these instant transfer services free of charge.</p>
          </div>
          <div className="bg-[#0A0E1A] p-3 rounded-lg">
            <p className="text-white font-medium">Rent Payment</p>
            <p className="text-gray-400 text-sm">Rent is typically paid via post-dated cheques (each roommate gives their share as a cheque) or through the Ejar platform. Some landlords now accept SADAD payments for monthly rent.</p>
          </div>
        </div>
      </GlassCard>

      <GlassCard>
        <h2>How to Use the Sauditoolhub Bill Splitter Calculator</h2>
        <p>
          Our free <Link href="/bill-splitter-calculator" className="text-desert-primary font-bold underline">Bill Splitter Calculator</Link> makes it incredibly easy to divide expenses fairly. Here is how it works:
        </p>
        <ol className="list-decimal list-inside space-y-1 text-gray-300">
          <li>Enter the total rent amount.</li>
          <li>Enter each person's share percentage or room size.</li>
          <li>Add variable bills (SEC, water, internet) each month.</li>
          <li>The calculator instantly shows each person's total including VAT.</li>
        </ol>
        <p className="mt-3">
          Also check out our <Link href="/sec-bill-calculator" className="text-desert-primary underline">SEC Bill Estimator</Link> to predict monthly electricity costs and <Link href="/fuel-cost-calculator" className="text-desert-primary underline">Fuel Cost Calculator</Link> for commuting expenses.
        </p>
      </GlassCard>

      <GlassCard>
        <h2>Conclusion</h2>
        <p>
          Sharing an apartment in Saudi Arabia is a smart way to manage the high cost of living in cities like Riyadh, Jeddah, and Dammam. But without a clear system for splitting expenses, it can lead to frustration and conflict. The key is to agree on the method upfront, communicate openly, and use tools that make the process transparent and fair for everyone.
        </p>
        <p>
          Use our <Link href="/bill-splitter-calculator" className="text-desert-primary underline">Bill Splitter Calculator</Link> to get your breakdown in seconds, and visit <Link href="/blog" className="text-desert-primary underline">our blog</Link> for more guides on living in Saudi Arabia.
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
        <p className="text-desert-primary text-sm font-medium tracking-widest uppercase">دليل السكن</p>
        <h1 className="text-3xl md:text-4xl font-bold text-white mt-2">الدليل الشامل لتقسيم الإيجار وفواتير الخدمات في الشقق المشتركة في السعودية 2026</h1>
        <p className="text-gray-400 mt-3 max-w-2xl mx-auto">
          تكاليف المعيشة في الرياض وجدة والدمام مرتفعة. مشاركة الشقة هي أفضل قرار مالي، لكن تقسيم الفواتير بشكل عادل قد يكون صعباً. هذا الدليل يوضح لك الطريقة الصحيحة.
        </p>
      </div>

      <GlassCard>
        <h2>مقدمة</h2>
        <p>
          إذا كنت تعيش في السعودية، فأنت تعلم أن إيجارات الرياض وجدة والدمام في ارتفاع مستمر. شقة بغرفتين نوم في حي جيد قد تكلف 40,000 إلى 60,000 ريال سنوياً. أضف إلى ذلك فاتورة الكهرباء التي قد تتجاوز 1,000 ريال شهرياً في الصيف، بالإضافة إلى فاتورة المياه والإنترنت. الأرقام تتراكم بسرعة.
        </p>
        <p>
          مشاركة الشقة هي الطريقة الأذكى لخفض تكاليف السكن بنسبة 40-50%. لكن المشكلة التي يواجهها الجميع: كيف تقسم الفواتير <strong>بشكل عادل</strong>؟ هل يدفع صاحب الغرفة الرئيسية أكثر؟ ماذا لو كان أحد الزملاء يضبط المكيف على 18°C بينما تفضل 24°C؟ وكيف تتعامل مع التأخر في الدفع بدون محادثات محرجة؟
        </p>
        <p>
          هذا الدليل يجيب على كل هذه الأسئلة. ستتعلم أفضل الطرق لتقسيم الإيجار والمرافق، وسترى أمثلة حسابية واقعية، وستحصل على نصائح عملية لتجنب الخلافات مع زملاء السكن. بالإضافة إلى ذلك، استخدم <Link href="/bill-splitter-calculator" className="text-desert-primary underline">حاسبة تقسيم الفواتير</Link> المجانية للحصول على تقسيم دقيق في ثوانٍ.
        </p>
      </GlassCard>

      <GlassCard>
        <h2>ما هي المصاريف التي يجب تقسيمها؟</h2>
        <p>قبل الانتقال للسكن، اتفقوا على المصاريف التي ستكون مشتركة. هذه هي القائمة النموذجية للشقق السعودية:</p>
        <div className="space-y-3">
          <div className="bg-[#0A0E1A] p-3 rounded-lg">
            <p className="text-white font-medium">1. الإيجار الشهري</p>
            <p className="text-gray-400 text-sm">المصروف الأكبر. عادة يُدفع بشيكات مؤجلة أو عبر سداد. يجب الاتفاق على طريقة التقسيم قبل توقيع العقد.</p>
          </div>
          <div className="bg-[#0A0E1A] p-3 rounded-lg">
            <p className="text-white font-medium">2. فاتورة الكهرباء SEC</p>
            <p className="text-gray-400 text-sm">المصروف الأكثر تقلباً. يتراوح من 200 ريال شتاءً إلى 1,500+ ريال في ذروة الصيف. استخدام المكيف هو العامل الرئيسي. تابع الاستهلاك عبر تطبيق العداد الذكي للشفافية.</p>
          </div>
          <div className="bg-[#0A0E1A] p-3 rounded-lg">
            <p className="text-white font-medium">3. فاتورة المياه</p>
            <p className="text-gray-400 text-sm">فاتورة الشركة الوطنية للمياه. عادة مبلغ ثابت صغير (30-80 ريال/شهر) لكنها قد ترتفع في حال وجود حديقة.</p>
          </div>
          <div className="bg-[#0A0E1A] p-3 rounded-lg">
            <p className="text-white font-medium">4. الإنترنت/واي فاي</p>
            <p className="text-gray-400 text-sm">باقات STC أو Mobily أو Zain. تكلفة شهرية ثابتة، سهلة التقسيم. اختاروا باقة تناسب احتياجات السرعة.</p>
          </div>
          <div className="bg-[#0A0E1A] p-3 rounded-lg">
            <p className="text-white font-medium">5. أسطوانات الغاز</p>
            <p className="text-gray-400 text-sm">إذا كنتم تستخدمون الغاز للطهي. الأسطوانة الكبيرة تكلف 30-40 ريال وتدوم 1-3 أشهر.</p>
          </div>
          <div className="bg-[#0A0E1A] p-3 rounded-lg">
            <p className="text-white font-medium">6. خدمة التنظيف/العاملة</p>
            <p className="text-gray-400 text-sm">إذا كنتم تشاركون عاملة منزلية، قسموا التكلفة بالتساوي. حددوا التردد (أسبوعي، كل أسبوعين) مسبقاً.</p>
          </div>
        </div>
      </GlassCard>

      <GlassCard>
        <h2>طرق التقسيم العادلة</h2>
        <h3>الطريقة 1: التقسيم المتساوي</h3>
        <p>مناسبة للشقق حيث جميع الغرف متشابهة والجميع يستخدم المساحات المشتركة بالتساوي. simplemente تقسيم إجمالي المصاريف على عدد الزملاء. هذه أبسط وأكثر الطرق شيوعاً.</p>

        <h3>الطريقة 2: التقسيم النسبي حسب حجم الغرفة</h3>
        <p>استخدم هذه عندما يكون أحد الزملاء في غرفة ماستر بحمام خاص. يدفع صاحب الغرفة الرئيسية علاوة (عادة 10-20% أكثر). التقسيمات الشائعة: 60/40 لشخصين، أو 40/30/30 لثلاثة مع غرفة ماستر.</p>

        <h3>الطريقة 3: التقسيم حسب الاستخدام</h3>
        <p>مناسبة للمصاريف المتغيرة مثل الكهرباء. إذا كان أحد الزملاء يعمل من المنزل ويشغل المكيف طوال اليوم، بينما الآخر يتنقل ويستخدم المكيف ليلاً فقط، اضبطوا حصة الكهرباء وفقاً لذلك. استخدم تطبيق العداد الذكي لمراقبة أنماط الاستهلاك بشفافية.</p>

        <div className="bg-desert-primary/10 border border-desert-primary/30 p-4 rounded-xl">
          <p className="text-sm font-medium text-desert-primary">💡 نصيحة</p>
          <p className="text-sm mt-1">ادمج الطرق للحصول على أفضل النتائج: قسّم الإيجار حسب حجم الغرفة، وقسّم المرافق بالتساوي أو حسب الاستخدام. <Link href="/bill-splitter-calculator" className="text-desert-primary underline">حاسبة تقسيم الفواتير</Link> تدعم كل هذه الطرق.</p>
        </div>
      </GlassCard>

      <GlassCard>
        <h2>معادلة الحساب خطوة بخطوة</h2>
        <div className="bg-[#0A0E1A] p-4 rounded-xl mb-4 font-mono text-sm text-gray-300">
          <p>الخطوة 1: اجمع التكاليف الثابتة (الإيجار + الإنترنت + خدمة التنظيف)</p>
          <p>الخطوة 2: اجمع التكاليف المتغيرة (فاتورة الكهرباء + المياه + الغاز)</p>
          <p>الخطوة 3: إجمالي المصاريف المشتركة = التكاليف الثابتة + المتغيرة</p>
          <p>الخطوة 4: اقسم على عدد الزملاء (للتقسيم المتساوي)</p>
          <p className="text-gray-400">أو</p>
          <p>الخطوة 4: طبق النسب المئوية (لغرفة ماستر)</p>
          <p>الخطوة 5: إجمالي كل شخص = حصة الإيجار + حصة المرافق</p>
        </div>
      </GlassCard>

      <GlassCard>
        <h2>أمثلة حسابية واقعية</h2>

        <h3>مثال 1: تقسيم متساوي — زميلان في شقة غرفتين</h3>
        <div className="bg-[#0A0E1A] p-4 rounded-xl mb-4">
          <p className="text-sm">إجمالي المصاريف: 3,000 ريال إيجار + 400 ريال كهرباء + 100 ريال مياه + 200 ريال إنترنت = <strong>3,700 ريال</strong></p>
          <p className="text-sm mt-1">لكل شخص: 3,700 ÷ 2 = <strong>1,850 ريال/شهر</strong></p>
        </div>

        <h3>مثال 2: تقسيم نسبي — ثلاثة زملاء مع غرفة ماستر</h3>
        <div className="bg-[#0A0E1A] p-4 rounded-xl mb-4">
          <p className="text-sm">إجمالي المصاريف: 4,500 ريال إيجار + 600 ريال كهرباء + 100 ريال مياه + 250 ريال إنترنت = <strong>5,450 ريال</strong></p>
          <p className="text-sm mt-2 text-white font-medium">نسبة التقسيم: الغرفة الرئيسية 40%، والاثنان الآخران 30% لكل منهما</p>
          <p className="text-sm mt-1">الغرفة الرئيسية: 5,450 × 0.40 = <strong>2,180 ريال/شهر</strong></p>
          <p className="text-sm mt-1">كل زميل آخر: 5,450 × 0.30 = <strong>1,635 ريال/شهر</strong></p>
        </div>

        <h3>مثال 3: تعديل حسب الاستخدام للمكيف</h3>
        <div className="bg-[#0A0E1A] p-4 rounded-xl">
          <p className="text-sm">فاتورة الكهرباء: 800 ريال. الزميل أ يعمل من المنزل (60% استخدام)، الزميل ب يعمل في المكتب (40% استخدام).</p>
          <p className="text-sm mt-1">الزميل أ يدفع: 800 × 0.60 = <strong>480 ريال</strong></p>
          <p className="text-sm mt-1">الزميل ب يدفع: 800 × 0.40 = <strong>320 ريال</strong></p>
        </div>
      </GlassCard>

      <GlassCard>
        <h2>أهم النصائح لتجنب الخلافات مع زملاء السكن</h2>
        <div className="space-y-3">
          <div className="bg-[#0A0E1A] p-3 rounded-lg">
            <p className="text-white font-medium">1. حدد يوماً شهرياً لدفع الفواتير</p>
            <p className="text-gray-400 text-sm">اختر تاريخاً محدداً كل شهر (مثلاً اليوم الخامس) لتحويل الحصص. هذا يخلق روتيناً ويزيل الفوضى في اللحظة الأخيرة.</p>
          </div>
          <div className="bg-[#0A0E1A] p-3 rounded-lg">
            <p className="text-white font-medium">2. استخدم تطبيقات التتبع</p>
            <p className="text-gray-400 text-sm">استخدم حاسبة تقسيم الفواتير للتقسيم الأولي، ثم تابع المصاريف بتطبيقات مثل Splitwise. هذا يضمن الشفافية ويمنع النزاعات.</p>
          </div>
          <div className="bg-[#0A0E1A] p-3 rounded-lg">
            <p className="text-white font-medium">3. اتفقوا على قواعد المكيف قبل الصيف</p>
            <p className="text-gray-400 text-sm">فواتير الكهرباء الصيفية هي السبب الأول للخلافات. اتفقوا على نطاق درجة حرارة (23°C-25°C) وساعات التشغيل.</p>
          </div>
          <div className="bg-[#0A0E1A] p-3 rounded-lg">
            <p className="text-white font-medium">4. احتفظ بوديعة تأمين</p>
            <p className="text-gray-400 text-sm">اجمع إيجار شهر واحد كوديعة قبل الانتقال. هذا يغطي أي فواتير غير مدفوعة إذا غادر أحدهم فجأة.</p>
          </div>
          <div className="bg-[#0A0E1A] p-3 rounded-lg">
            <p className="text-white font-medium">5. تواصلوا بانفتاح</p>
            <p className="text-gray-400 text-sm">إذا كان أحد الزملاء يواجه صعوبة في الدفع، تحدثوا عن الموضوع مبكراً. فكروا في إنشاء حساب مشترك أو خصم آلي عبر سداد لضمان دفع الفواتير في وقتها.</p>
          </div>
        </div>
      </GlassCard>

      <GlassCard>
        <h2>كيفية دفع الفواتير المشتركة في السعودية</h2>
        <div className="space-y-3">
          <div className="bg-[#0A0E1A] p-3 rounded-lg">
            <p className="text-white font-medium">نظام سداد</p>
            <p className="text-gray-400 text-sm">شخص واحد يدفع الفاتورة كاملة عبر سداد من تطبيق بنكه (الراجحي، الأهلي، الرياض، عناية). الآخرون يحولون حصصهم فوراً عبر أورباي أو STC Pay أو تحويل بنكي مباشر.</p>
          </div>
          <div className="bg-[#0A0E1A] p-3 rounded-lg">
            <p className="text-white font-medium">الخصم الآلي</p>
            <p className="text-gray-400 text-sm">فعّل الخصم التلقائي لفواتير الكهرباء وغيرها. شخص واحد يدفع والآخرون يستخدمون أورباي أو STC Pay للتحويل الفوري. معظم البنوك السعودية تدعم هذه الخدمات مجاناً.</p>
          </div>
          <div className="bg-[#0A0E1A] p-3 rounded-lg">
            <p className="text-white font-medium">دفع الإيجار</p>
            <p className="text-gray-400 text-sm">عادة يُدفع الإيجار بشيكات مؤجلة (كل زميل يعطي شيكاً بحصته) أو عبر منصة إيجار. بعض الملاك يقبلون الآن الدفع عبر سداد.</p>
          </div>
        </div>
      </GlassCard>

      <GlassCard>
        <h2>كيفية استخدام حاسبة تقسيم الفواتير من Sauditoolhub</h2>
        <p>
          <Link href="/bill-splitter-calculator" className="text-desert-primary font-bold underline">حاسبة تقسيم الفواتير</Link> المجانية تجعل تقسيم المصاريف سهلاً للغاية:
        </p>
        <ol className="list-decimal list-inside space-y-1 text-gray-300 list-rtl">
          <li>أدخل مبلغ الإيجار الإجمالي.</li>
          <li>أدخل نسبة كل شخص أو حجم الغرفة.</li>
          <li>أضف الفواتير المتغيرة (كهرباء، مياه، إنترنت) كل شهر.</li>
          <li>الحاسبة تظهر إجمالي كل شخص بما في ذلك الضريبة.</li>
        </ol>
        <p className="mt-3">
          اطلع أيضاً على <Link href="/sec-bill-calculator" className="text-desert-primary underline">حاسبة تقدير فاتورة الكهرباء</Link> لتوقع تكاليف الكهرباء الشهرية و <Link href="/fuel-cost-calculator" className="text-desert-primary underline">حاسبة تكلفة الوقود</Link> لمصاريف التنقل.
        </p>
      </GlassCard>

      <GlassCard>
        <h2>خاتمة</h2>
        <p>
          مشاركة الشقة في السعودية هي طريقة ذكية لمواجهة غلاء المعيشة في مدن مثل الرياض وجدة والدمام. لكن بدون نظام واضح لتقسيم المصاريف، قد تؤدي إلى الإحباط والخلافات. المفتاح هو الاتفاق على الطريقة مسبقاً، والتواصل بانفتاح، واستخدام الأدوات التي تجعل العملية شفافة وعادلة للجميع.
        </p>
        <p>
          استخدم <Link href="/bill-splitter-calculator" className="text-desert-primary underline">حاسبة تقسيم الفواتير</Link> للحصول على التقسيم في ثوانٍ، وقم بزيارة <Link href="/blog" className="text-desert-primary underline">مدونتنا</Link> للمزيد من الأدلة عن الحياة في السعودية.
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
        <p className="text-desert-primary text-sm font-medium tracking-widest uppercase">رہائش گائیڈ</p>
        <h1 className="text-3xl md:text-4xl font-bold text-white mt-2">سعودی عرب میں مشترکہ اپارٹمنٹس میں کرایہ اور بل تقسیم کرنے کا مکمل گائیڈ 2026</h1>
        <p className="text-gray-400 mt-3 max-w-2xl mx-auto">
          ریاض، جدہ اور دمام میں رہائشی اخراجات زیادہ ہیں۔ اپارٹمنٹ شیئر کرنا بہترین مالی فیصلہ ہے، لیکن بلوں کی منصفانہ تقسیم مشکل ہو سکتی ہے۔ یہ گائیڈ آپ کو صحیح طریقہ بتاتا ہے۔
        </p>
      </div>

      <GlassCard>
        <h2>تعارف</h2>
        <p>
          اگر آپ سعودی عرب میں رہتے ہیں تو آپ جانتے ہیں کہ ریاض، جدہ اور دمام میں کرایہ مسلسل بڑھ رہا ہے۔ ایک اچھے علاقے میں 2 بیڈروم کا اپارٹمنٹ سالانہ 40,000 سے 60,000 ریال تک ہو سکتا ہے۔ اس میں گرمیوں میں SEC بجلی کا بل شامل کریں جو 1,000 ریال ماہانہ سے بھی تجاوز کر سکتا ہے، نیز پانی اور انٹرنیٹ کے بل۔ نمبرز تیزی سے بڑھتے ہیں۔
        </p>
        <p>
          اپارٹمنٹ شیئر کرنا رہائشی اخراجات 40-50% کم کرنے کا سب سے ذہین طریقہ ہے۔ لیکن سب کے سامنے مسئلہ ہے: بل <strong>منصفانہ</strong> کیسے تقسیم کریں؟ کیا ماسٹر بیڈروم والا زیادہ ادا کرے؟ اگر ایک فلیٹ میٹ AC 18°C پر چلاتا ہے اور آپ 24°C پسند کرتے ہیں؟ اور تاخیر سے ادائیگی سے کیسے نمٹیں بغیر عجیب بات چیت کے؟
        </p>
        <p>
          یہ گائیڈ ان تمام سوالات کے جوابات دیتا ہے۔ آپ کرایہ اور یوٹیلیٹیز تقسیم کرنے کے منصفانہ طریقے سیکھیں گے، حقیقی حساب کی مثالیں دیکھیں گے، اور پیسوں پر جھگڑوں سے بچنے کے عملی مشورے حاصل کریں گے۔ ساتھ ہی، ہمارا مفت <Link href="/bill-splitter-calculator" className="text-desert-primary underline">بل سپلٹر کیلکولیٹر</Link> استعمال کریں اور سیکنڈوں میں صحیح تقسیم حاصل کریں۔
        </p>
      </GlassCard>

      <GlassCard>
        <h2>کن اخراجات کو تقسیم کرنا چاہیے؟</h2>
        <p>اپارٹمنٹ میں منتقل ہونے سے پہلے طے کریں کہ کون سے اخراجات مشترکہ ہوں گے۔ سعودی اپارٹمنٹس کے لیے یہ معیاری فہرست ہے:</p>
        <div className="space-y-3">
          <div className="bg-[#0A0E1A] p-3 rounded-lg">
            <p className="text-white font-medium">1. ماہانہ کرایہ</p>
            <p className="text-gray-400 text-sm">سب سے بڑا خرچ۔ عام طور پر پوسٹ ڈیٹڈ چیک یا سداد کے ذریعے ادا کیا جاتا ہے۔ معاہدے پر دستخط کرنے سے پہلے تقسیم کے طریقے پر متفق ہو جائیں۔</p>
          </div>
          <div className="bg-[#0A0E1A] p-3 rounded-lg">
            <p className="text-white font-medium">2. SEC بجلی کا بل</p>
            <p className="text-gray-400 text-sm">سب سے زیادہ متغیر خرچ۔ سردیوں میں 200 ریال سے لے کر گرمیوں میں 1,500+ ریال تک ہو سکتا ہے۔ AC کا استعمال سب سے بڑا عنصر ہے۔ SEC سمارٹ میٹر ایپ سے شفافیت کے ساتھ ٹریک کریں۔</p>
          </div>
          <div className="bg-[#0A0E1A] p-3 rounded-lg">
            <p className="text-white font-medium">3. پانی کا بل</p>
            <p className="text-gray-400 text-sm">نیشنل واٹر کمپنی کا بل۔ عام طور پر چھوٹی مقررہ رقم (30-80 ریال/ماہ) لیکن باغ ہو تو بڑھ سکتا ہے۔</p>
          </div>
          <div className="bg-[#0A0E1A] p-3 rounded-lg">
            <p className="text-white font-medium">4. انٹرنیٹ/وائی فائی</p>
            <p className="text-gray-400 text-sm">STC، Mobily یا Zain فائبر پیکجز۔ مقررہ ماہانہ قیمت، آسانی سے برابر تقسیم کی جا سکتی ہے۔</p>
          </div>
          <div className="bg-[#0A0E1A] p-3 rounded-lg">
            <p className="text-white font-medium">5. گیس سلنڈر</p>
            <p className="text-gray-400 text-sm">اگر کھانا پکانے کے لیے گیس استعمال کرتے ہیں۔ بڑا سلنڈر 30-40 ریال کا ہوتا ہے اور 1-3 ماہ چلتا ہے۔</p>
          </div>
          <div className="bg-[#0A0E1A] p-3 rounded-lg">
            <p className="text-white font-medium">6. صفائی/خادمہ سروس</p>
            <p className="text-gray-400 text-sm">اگر خادمہ شیئر کرتے ہیں تو قیمت برابر تقسیم کریں۔ تعدد (ہفتہ وار، پندرہ روزہ) پہلے طے کریں۔</p>
          </div>
        </div>
      </GlassCard>

      <GlassCard>
        <h2>منصفانہ تقسیم کے طریقے</h2>
        <h3>طریقہ 1: برابر تقسیم</h3>
        <p>اس اپارٹمنٹس کے لیے بہتر جہاں تمام کمرے ایک جیسے ہوں اور سب مشترکہ جگہیں برابر استعمال کریں۔ کل اخراجات کو فلیٹ میٹس کی تعداد سے تقسیم کریں۔ یہ سب سے آسان اور عام طریقہ ہے۔</p>

        <h3>طریقہ 2: کمرے کے سائز کے مطابق تناسب</h3>
        <p>جب کسی کے پاس ماسٹر بیڈروم ہو تو استعمال کریں۔ ماسٹر بیڈروم والا 10-20% زیادہ ادا کرتا ہے۔ عام تقسیم: 2 افراد کے لیے 60/40، یا 3 افراد کے لیے 40/30/30۔</p>

        <h3>طریقہ 3: استعمال کے مطابق تقسیم</h3>
        <p>متغیر اخراجات جیسے بجلی کے لیے بہترین۔ اگر کوئی گھر سے کام کرتا ہے اور سارا دن AC چلاتا ہے تو بجلی کا حصہ ایڈجسٹ کریں۔ SEC سمارٹ میٹر ایپ سے استعمال کے پیٹرن شفاف طریقے سے دیکھیں۔</p>

        <div className="bg-desert-primary/10 border border-desert-primary/30 p-4 rounded-xl">
          <p className="text-sm font-medium text-desert-primary">💡 مشورہ</p>
          <p className="text-sm mt-1">بہترین نتائج کے لیے طریقے ملائیں: کرایہ کمرے کے سائز کے مطابق تقسیم کریں اور یوٹیلیٹیز برابر یا استعمال کے مطابق۔ <Link href="/bill-splitter-calculator" className="text-desert-primary underline">ہمارا بل سپلٹر کیلکولیٹر</Link> تمام طریقوں کو سپورٹ کرتا ہے۔</p>
        </div>
      </GlassCard>

      <GlassCard>
        <h2>مرحلہ وار حساب کتاب کا فارمولا</h2>
        <div className="bg-[#0A0E1A] p-4 rounded-xl mb-4 font-mono text-sm text-gray-300">
          <p>مرحلہ 1: تمام مقررہ اخراجات جمع کریں (کرایہ + انٹرنیٹ + صفائی)</p>
          <p>مرحلہ 2: تمام متغیر اخراجات جمع کریں (SEC بل + پانی + گیس)</p>
          <p>مرحلہ 3: کل مشترکہ اخراجات = مقررہ + متغیر</p>
          <p>مرحلہ 4: فلیٹ میٹس کی تعداد سے تقسیم کریں (برابر تقسیم کے لیے)</p>
          <p className="text-gray-400">یا</p>
          <p>مرحلہ 4: فیصدی شرحیں لگائیں (ماسٹر بیڈروم پریمیم کے لیے)</p>
          <p>مرحلہ 5: ہر شخص کا کل = کرایہ کا حصہ + یوٹیلیٹی کا حصہ</p>
        </div>
      </GlassCard>

      <GlassCard>
        <h2>حقیقی زندگی کی مثالیں</h2>

        <h3>مثال 1: برابر تقسیم — دو فلیٹ میٹس</h3>
        <div className="bg-[#0A0E1A] p-4 rounded-xl mb-4">
          <p className="text-sm">کل اخراجات: 3,000 ریال کرایہ + 400 ریال بجلی + 100 ریال پانی + 200 ریال انٹرنیٹ = <strong>3,700 ریال</strong></p>
          <p className="text-sm mt-1">فی شخص: 3,700 ÷ 2 = <strong>1,850 ریال/ماہ</strong></p>
        </div>

        <h3>مثال 2: تناسب — تین فلیٹ میٹس ماسٹر بیڈروم کے ساتھ</h3>
        <div className="bg-[#0A0E1A] p-4 rounded-xl mb-4">
          <p className="text-sm">کل اخراجات: 4,500 ریال کرایہ + 600 ریال بجلی + 100 ریال پانی + 250 ریال انٹرنیٹ = <strong>5,450 ریال</strong></p>
          <p className="text-sm mt-2 text-white font-medium">تقسیم کا تناسب: ماسٹر بیڈروم 40%، باقی دو 30%</p>
          <p className="text-sm mt-1">ماسٹر بیڈروم: 5,450 × 0.40 = <strong>2,180 ریال/ماہ</strong></p>
          <p className="text-sm mt-1">ہر دوسرا فلیٹ میٹ: 5,450 × 0.30 = <strong>1,635 ریال/ماہ</strong></p>
        </div>

        <h3>مثال 3: AC استعمال کی بنیاد پر ایڈجسٹمنٹ</h3>
        <div className="bg-[#0A0E1A] p-4 rounded-xl">
          <p className="text-sm">SEC بل: 800 ریال۔ فلیٹ میٹ A گھر سے کام کرتا ہے (60% استعمال)، فلیٹ میٹ B دفتر جاتا ہے (40% استعمال)۔</p>
          <p className="text-sm mt-1">فلیٹ میٹ A ادا کرے: 800 × 0.60 = <strong>480 ریال</strong></p>
          <p className="text-sm mt-1">فلیٹ میٹ B ادا کرے: 800 × 0.40 = <strong>320 ریال</strong></p>
        </div>
      </GlassCard>

      <GlassCard>
        <h2>فلیٹ میٹس کے درمیان پیسوں پر جھگڑوں سے بچنے کے اہم نکات</h2>
        <div className="space-y-3">
          <div className="bg-[#0A0E1A] p-3 rounded-lg">
            <p className="text-white font-medium">1. ماہانہ بل ادائیگی کا دن مقرر کریں</p>
            <p className="text-gray-400 text-sm">ہر مہینے ایک مخصوص تاریخ (مثلاً 5 تاریخ) منتخب کریں جب سب اپنا حصہ منتقل کریں۔ اس سے معمول بنتا ہے اور آخری لمحے کی بھاگ دوڑ ختم ہوتی ہے۔</p>
          </div>
          <div className="bg-[#0A0E1A] p-3 rounded-lg">
            <p className="text-white font-medium">2. ٹریکنگ ایپس استعمال کریں</p>
            <p className="text-gray-400 text-sm">ابتدائی تقسیم کے لیے ہمارا بل سپلٹر کیلکولیٹر استعمال کریں، پھر Splitwise جیسی ایپس سے روزانہ کے اخراجات ٹریک کریں۔</p>
          </div>
          <div className="bg-[#0A0E1A] p-3 rounded-lg">
            <p className="text-white font-medium">3. گرمیوں سے پہلے AC کے قواعد طے کریں</p>
            <p className="text-gray-400 text-sm">گرمیوں کے بجلی بل جھگڑوں کی سب سے بڑی وجہ ہیں۔ درجہ حرارت کی حد (23°C-25°C) اور اوقات پر متفق ہوں۔</p>
          </div>
          <div className="bg-[#0A0E1A] p-3 rounded-lg">
            <p className="text-white font-medium">4. سیکیورٹی ڈپازٹ رکھیں</p>
            <p className="text-gray-400 text-sm">منتقل ہونے سے پہلے ایک ماہ کا کرایہ بطور ڈپازٹ جمع کریں۔ یہ کسی کے اچانک جانے کی صورت میں بلوں کو کور کرتا ہے۔</p>
          </div>
          <div className="bg-[#0A0E1A] p-3 rounded-lg">
            <p className="text-white font-medium">5. کھل کر بات کریں</p>
            <p className="text-gray-400 text-sm">اگر کسی کو ادائیگی میں مشکل ہو رہی ہے تو جلدی بات کریں۔ مشترکہ بینک اکاؤنٹ یا سداد آٹو ڈیبٹ ترتیب دینے پر غور کریں۔</p>
          </div>
        </div>
      </GlassCard>

      <GlassCard>
        <h2>سعودی عرب میں مشترکہ بل کی ادائیگی کا طریقہ</h2>
        <div className="space-y-3">
          <div className="bg-[#0A0E1A] p-3 rounded-lg">
            <p className="text-white font-medium">سداد پیمنٹ سسٹم</p>
            <p className="text-gray-400 text-sm">ایک شخص سداد کے ذریعے بینک ایپ (الراجحی، SNB، ریاض بینک، عنایہ) سے پورا بل ادا کرتا ہے۔ باقی فوری طور پر Urpay، STC Pay، یا بینک ٹرانسفر سے حصہ بھیج دیتے ہیں۔</p>
          </div>
          <div className="bg-[#0A0E1A] p-3 rounded-lg">
            <p className="text-white font-medium">آٹو پے</p>
            <p className="text-gray-400 text-sm">SEC اور دیگر بلوں کے لیے آٹو ڈیبٹ سیٹ اپ کریں۔ ایک شخص ادا کرے، باقی Urpay یا STC Pay سے فوری منتقل کریں۔ زیادہ تر سعودی بینک یہ خدمات مفت دیتے ہیں۔</p>
          </div>
          <div className="bg-[#0A0E1A] p-3 rounded-lg">
            <p className="text-white font-medium">کرایہ کی ادائیگی</p>
            <p className="text-gray-400 text-sm">کرایہ عام طور پر پوسٹ ڈیٹڈ چیک (ہر فلیٹ میٹ اپنا حصہ بطور چیک دیتا ہے) یا ایجار پلیٹ فارم کے ذریعے ادا کیا جاتا ہے۔</p>
          </div>
        </div>
      </GlassCard>

      <GlassCard>
        <h2>Sauditoolhub بل سپلٹر کیلکولیٹر کا استعمال</h2>
        <p>
          ہمارا مفت <Link href="/bill-splitter-calculator" className="text-desert-primary font-bold underline">بل سپلٹر کیلکولیٹر</Link> اخراجات کی تقسیم کو نہایت آسان بناتا ہے:
        </p>
        <ol className="list-decimal list-inside space-y-1 text-gray-300">
          <li>کل کرایہ کی رقم درج کریں۔</li>
          <li>ہر شخص کا فیصد یا کمرے کا سائز درج کریں۔</li>
          <li>ہر ماہ متغیر بل شامل کریں (بجلی، پانی، انٹرنیٹ)۔</li>
          <li>کیلکولیٹر فوری طور پر VAT سمیت ہر شخص کا کل دکھاتا ہے۔</li>
        </ol>
        <p className="mt-3">
          ہمارا <Link href="/sec-bill-calculator" className="text-desert-primary underline">SEC بل تخمینہ لگانے والا</Link> اور <Link href="/fuel-cost-calculator" className="text-desert-primary underline">ایندھن لاگت کیلکولیٹر</Link> بھی ضرور دیکھیں۔
        </p>
      </GlassCard>

      <GlassCard>
        <h2>نتیجہ</h2>
        <p>
          سعودی عرب میں اپارٹمنٹ شیئر کرنا ریاض، جدہ اور دمام جیسے شہروں میں مہنگائی سے نمٹنے کا ذہین طریقہ ہے۔ لیکن واضح نظام کے بغیر، یہ مایوسی اور تنازع کا باعث بن سکتا ہے۔ کلید یہ ہے کہ طریقہ پہلے طے کریں، کھل کر بات کریں، اور ایسے اوزار استعمال کریں جو عمل کو شفاف اور منصفانہ بنائیں۔
        </p>
        <p>
          <Link href="/bill-splitter-calculator" className="text-desert-primary underline">بل سپلٹر کیلکولیٹر</Link> استعمال کریں اور سیکنڈوں میں تقسیم حاصل کریں، اور <Link href="/blog" className="text-desert-primary underline">ہمارا بلاگ</Link> ملاحظہ کریں سعودی عرب میں زندگی کے بارے میں مزید رہنمائی کے لیے۔
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
        <p className="text-desert-primary text-sm font-medium tracking-widest uppercase">Gabay sa Pabahay</p>
        <h1 className="text-3xl md:text-4xl font-bold text-white mt-2">Gabay sa Paghahati ng Renta at Utility Bills sa Shared Apartments sa Saudi Arabia 2026</h1>
        <p className="text-gray-400 mt-3 max-w-2xl mx-auto">
          Mahal ang gastos sa pamumuhay sa Riyadh, Jeddah, at Dammam. Ang pag-share ng apartment ay ang pinakamagandang desisyong pinansyal, pero ang patas na paghahati ng bills ay maaaring mahirap. Ipinapakita ng gabay na ito kung paano.
        </p>
      </div>

      <GlassCard>
        <h2>Panimula</h2>
        <p>
          Kung nakatira ka sa Saudi Arabia, alam mo na ang reyalidad: patuloy na tumataas ang upa sa Riyadh, Jeddah, at Dammam. Ang isang disenteng 2-bedroom apartment sa magandang lugar ay maaaring umabot ng 40,000 hanggang 60,000 SAR kada taon. Idagdag pa ang SEC electricity bill na sa tag-araw ay lampas 1,000 SAR bawat buwan, kasama ang tubig, internet, at iba pa. Mabilis dumami ang mga numero.
        </p>
        <p>
          Ang pag-share ng apartment ay ang pinakamatalinong paraan upang bawasan ang gastos sa pabahay ng 40-50%. Ngunit narito ang problemang kinakaharap ng lahat: paano mo hahatiin ang bills nang <strong>patas</strong>? Dapat bang magbayad nang mas malaki ang may master bedroom? Paano kung ang isang roommate ay naka-AC sa 18°C samantalang gusto mo ay 24°C? At paano mo haharapin ang mga late payment nang walang awkward na usapan?
        </p>
        <p>
          Sinasagot ng gabay na ito ang lahat ng tanong na iyan. Matututuhan mo ang pinakamakatarungang paraan ng paghahati ng upa at utility bills, makakakita ng tunay na halimbawa ng kalkulasyon, at makakuha ng praktikal na tips para maiwasan ang alitan sa mga roommate. At gamitin ang aming libreng <Link href="/bill-splitter-calculator" className="text-desert-primary underline">Bill Splitter Calculator</Link> upang makuha ang eksaktong breakdown sa ilang segundo.
        </p>
      </GlassCard>

      <GlassCard>
        <h2>Anong mga Gastos ang Kailangang Hatiin?</h2>
        <p>Bago lumipat, magkasundo sa kung aling mga gastos ang magiging shared. Narito ang karaniwang listahan para sa Saudi apartments:</p>
        <div className="space-y-3">
          <div className="bg-[#0A0E1A] p-3 rounded-lg">
            <p className="text-white font-medium">1. Buwanang Renta</p>
            <p className="text-gray-400 text-sm">Ang pinakamalaking gastos. Karaniwang binabayaran sa pamamagitan ng post-dated cheques o SADAD auto-payment. Pag-usapan ang paraan ng hati bago pumirma ng kontrata.</p>
          </div>
          <div className="bg-[#0A0E1A] p-3 rounded-lg">
            <p className="text-white font-medium">2. SEC Electricity Bill</p>
            <p className="text-gray-400 text-sm">Ang pinaka-variable na gastos. Maaaring 200 SAR sa taglamig hanggang 1,500+ SAR sa tag-init. Ang paggamit ng AC ang pangunahing dahilan. I-monitor gamit ang SEC smart meter app para sa transparency.</p>
          </div>
          <div className="bg-[#0A0E1A] p-3 rounded-lg">
            <p className="text-white font-medium">3. Water Bill</p>
            <p className="text-gray-400 text-sm">National Water Company bill. Karaniwang maliit na fixed amount (30-80 SAR/buwan) ngunit maaaring tumaas kung may garden.</p>
          </div>
          <div className="bg-[#0A0E1A] p-3 rounded-lg">
            <p className="text-white font-medium">4. Internet/Wi-Fi</p>
            <p className="text-gray-400 text-sm">STC, Mobily, o Zain fiber packages. Fixed monthly cost, madaling hatiin nang pantay. Pumili ng planong naaayon sa inyong pangangailangan sa bilis.</p>
          </div>
          <div className="bg-[#0A0E1A] p-3 rounded-lg">
            <p className="text-white font-medium">5. Gas Cylinders</p>
            <p className="text-gray-400 text-sm">Kung gumagamit ng gas sa pagluluto. Ang malaking cylinder ay mga 30-40 SAR at tumatagal ng 1-3 buwan.</p>
          </div>
          <div className="bg-[#0A0E1A] p-3 rounded-lg">
            <p className="text-white font-medium">6. Serbisyo ng Paglilinis/Maid</p>
            <p className="text-gray-400 text-sm">Kung nag-share kayo ng maid service, hatiin ang gastos nang pantay. Pag-usapan ang frequency (weekly, bi-weekly) nang maaga.</p>
          </div>
        </div>
      </GlassCard>

      <GlassCard>
        <h2>Mga Patas na Paraan ng Paghahati</h2>
        <h3>Paraan 1: Pantay na Hati</h3>
        <p>Pinakamainam para sa mga apartment kung saan magkakasinglaki ang lahat ng kuwarto at pantay ang paggamit ng common areas. Hatiin lang ang kabuuang gastos sa bilang ng mga roommate. Ito ang pinakasimple at pinakakaraniwang paraan.</p>

        <h3>Paraan 2: Proporsyonal na Hati ayon sa Laki ng Kuwarto</h3>
        <p>Gamitin ito kapag may master bedroom na may sariling bathroom. Ang nakatira sa master ay nagbabayad ng premium (karaniwang 10-20% pa). Karaniwang hati: 60/40 para sa dalawang roommate, o 40/30/30 para sa tatlo na may master.</p>

        <h3>Paraan 3: Hati ayon sa Paggamit</h3>
        <p>Pinakamainam para sa variable na gastos tulad ng kuryente. Kung ang isang roommate ay work-from-home at buong araw ang AC, samantalang ang iba ay pumapasok sa opisina at AC lang sa gabi, ayusin ang hatian ng kuryente. Gamitin ang SEC smart meter app para sa transparent na pagsubaybay.</p>

        <div className="bg-desert-primary/10 border border-desert-primary/30 p-4 rounded-xl">
          <p className="text-sm font-medium text-desert-primary">💡 Tip</p>
          <p className="text-sm mt-1">Pagsamahin ang mga paraan para sa pinakamagandang resulta: hatiin ang upa ayon sa laki ng kuwarto, at hatiin ang utilities nang pantay o ayon sa paggamit. Ang aming <Link href="/bill-splitter-calculator" className="text-desert-primary underline">Bill Splitter Calculator</Link> ay sumusuporta sa lahat ng paraang ito.</p>
        </div>
      </GlassCard>

      <GlassCard>
        <h2>Step-by-Step na Formula ng Kalkulasyon</h2>
        <div className="bg-[#0A0E1A] p-4 rounded-xl mb-4 font-mono text-sm text-gray-300">
          <p>Step 1: Isama ang lahat ng fixed costs (Renta + Internet + Maid service)</p>
          <p>Step 2: Isama ang lahat ng variable costs (SEC bill + Tubig + Gas)</p>
          <p>Step 3: Kabuuang shared expenses = Fixed costs + Variable costs</p>
          <p>Step 4: Hatiin sa bilang ng mga roommate (para sa pantay na hati)</p>
          <p className="text-gray-400">O</p>
          <p>Step 4: Gamitin ang proportional percentages (para sa master bedroom premium)</p>
          <p>Step 5: Total ng bawat isa = bahagi ng upa + bahagi ng utilities</p>
        </div>
      </GlassCard>

      <GlassCard>
        <h2>Mga Halimbawa ng Tunay na Buhay na Kalkulasyon</h2>

        <h3>Halimbawa 1: Pantay na Hati — Dalawang Roommate</h3>
        <div className="bg-[#0A0E1A] p-4 rounded-xl mb-4">
          <p className="text-sm">Kabuuang gastos: 3,000 SAR renta + 400 SAR kuryente + 100 SAR tubig + 200 SAR internet = <strong>3,700 SAR</strong></p>
          <p className="text-sm mt-1">Bawat isa: 3,700 ÷ 2 = <strong>1,850 SAR/buwan</strong></p>
        </div>

        <h3>Halimbawa 2: Proporsyonal — Tatlong Roommate na may Master Bedroom</h3>
        <div className="bg-[#0A0E1A] p-4 rounded-xl mb-4">
          <p className="text-sm">Kabuuang gastos: 4,500 SAR renta + 600 SAR kuryente + 100 SAR tubig + 250 SAR internet = <strong>5,450 SAR</strong></p>
          <p className="text-sm mt-2 text-white font-medium">Split ratio: Master bedroom 40%, dalawa pang iba 30% bawat isa</p>
          <p className="text-sm mt-1">Master bedroom: 5,450 × 0.40 = <strong>2,180 SAR/buwan</strong></p>
          <p className="text-sm mt-1">Bawat ibang roommate: 5,450 × 0.30 = <strong>1,635 SAR/buwan</strong></p>
        </div>

        <h3>Halimbawa 3: Adjustment sa AC ayon sa Paggamit</h3>
        <div className="bg-[#0A0E1A] p-4 rounded-xl">
          <p className="text-sm">SEC bill: 800 SAR. Si Roommate A ay work-from-home (60% gamit), si Roommate B ay nasa opisina (40% gamit).</p>
          <p className="text-sm mt-1">Si Roommate A magbabayad: 800 × 0.60 = <strong>480 SAR</strong></p>
          <p className="text-sm mt-1">Si Roommate B magbabayad: 800 × 0.40 = <strong>320 SAR</strong></p>
        </div>
      </GlassCard>

      <GlassCard>
        <h2>Mga Tip para Maiwasan ang Alitan sa Pera</h2>
        <div className="space-y-3">
          <div className="bg-[#0A0E1A] p-3 rounded-lg">
            <p className="text-white font-medium">1. Mag-set ng Buwanang "Bill Payment Day"</p>
            <p className="text-gray-400 text-sm">Pumili ng tiyak na petsa bawat buwan (hal. ika-5) para magpadala ng kani-kanilang bahagi. Ito ay lumilikha ng routine at pumipigil sa huling-minutong pagmamadali.</p>
          </div>
          <div className="bg-[#0A0E1A] p-3 rounded-lg">
            <p className="text-white font-medium">2. Gumamit ng Tracking Apps</p>
            <p className="text-gray-400 text-sm">Gamitin ang Bill Splitter Calculator para sa paunang breakdown, pagkatapos ay i-track ang ongoing expenses gamit ang Splitwise. Ito ay nananatiling accountable ang lahat.</p>
          </div>
          <div className="bg-[#0A0E1A] p-3 rounded-lg">
            <p className="text-white font-medium">3. Pag-usapan ang AC Rules Bago ang Tag-init</p>
            <p className="text-gray-400 text-sm">Ang summer electricity bills ang #1 cause ng alitan ng mga roommate. Sumang-ayon sa temperature range (23°C-25°C) at oras ng paggamit.</p>
          </div>
          <div className="bg-[#0A0E1A] p-3 rounded-lg">
            <p className="text-white font-medium">4. Mag-collect ng Security Deposit</p>
            <p className="text-gray-400 text-sm">Kumuha ng isang buwanang upa bilang deposit bago lumipat. Ito ay sumasaklaw sa mga hindi nabayarang bills kung may biglang umalis.</p>
          </div>
          <div className="bg-[#0A0E1A] p-3 rounded-lg">
            <p className="text-white font-medium">5. Makipag-usap nang Bukas</p>
            <p className="text-gray-400 text-sm">Kung may nahihirapang magbayad, pag-usapan ito nang maaga sa halip na hintaying lumala. Pag-isipang mag-set up ng joint bank account o shared SADAD auto-debit.</p>
          </div>
        </div>
      </GlassCard>

      <GlassCard>
        <h2>Paano Magbayad ng Shared Bills sa Saudi Arabia</h2>
        <div className="space-y-3">
          <div className="bg-[#0A0E1A] p-3 rounded-lg">
            <p className="text-white font-medium">SADAD Payment System</p>
            <p className="text-gray-400 text-sm">Isang tao ang magbabayad ng buong bill sa pamamagitan ng SADAD gamit ang kanilang bank app (Al Rajhi, SNB, Riyad Bank, Alinma). Ang iba ay magpapadala agad ng kanilang share sa pamamagitan ng Urpay, STC Pay, o bank transfer.</p>
          </div>
          <div className="bg-[#0A0E1A] p-3 rounded-lg">
            <p className="text-white font-medium">Auto-Pay sa pamamagitan ng Bank App</p>
            <p className="text-gray-400 text-sm">Mag-set up ng auto-debit para sa SEC at iba pang bills. Isang tao magbabayad, ang iba ay gumamit ng Urpay o STC Pay para sa instant transfer. Karamihan sa Saudi banks ay sumusuporta sa mga serbisyong ito nang libre.</p>
          </div>
          <div className="bg-[#0A0E1A] p-3 rounded-lg">
            <p className="text-white font-medium">Pagbabayad ng Renta</p>
            <p className="text-gray-400 text-sm">Ang renta ay karaniwang binabayaran sa pamamagitan ng post-dated cheques (bawat roommate ay nagbibigay ng cheque para sa kanilang bahagi) o sa pamamagitan ng Ejar platform.</p>
          </div>
        </div>
      </GlassCard>

      <GlassCard>
        <h2>Paano Gamitin ang Sauditoolhub Bill Splitter Calculator</h2>
        <p>
          Ang aming libreng <Link href="/bill-splitter-calculator" className="text-desert-primary font-bold underline">Bill Splitter Calculator</Link> ay ginagawang napakadali ang paghahati ng mga gastos:
        </p>
        <ol className="list-decimal list-inside space-y-1 text-gray-300">
          <li>Ilagay ang kabuuang halaga ng renta.</li>
          <li>Ilagay ang porsyento ng bahagi ng bawat tao o laki ng kuwarto.</li>
          <li>Idagdag ang variable bills (kuryente, tubig, internet) bawat buwan.</li>
          <li>Agad na ipapakita ng calculator ang total ng bawat isa kasama ang VAT.</li>
        </ol>
        <p className="mt-3">
          Tingnan din ang aming <Link href="/sec-bill-calculator" className="text-desert-primary underline">SEC Bill Estimator</Link> upang matantiya ang buwanang gastos sa kuryente at <Link href="/fuel-cost-calculator" className="text-desert-primary underline">Fuel Cost Calculator</Link> para sa gastos sa pagko-commute.
        </p>
      </GlassCard>

      <GlassCard>
        <h2>Konklusyon</h2>
        <p>
          Ang pag-share ng apartment sa Saudi Arabia ay isang matalinong paraan upang pamahalaan ang mataas na gastos sa pamumuhay sa mga lungsod tulad ng Riyadh, Jeddah, at Dammam. Ngunit kung walang malinaw na sistema para sa paghahati ng mga gastos, maaari itong humantong sa pagkabigo at alitan. Ang susi ay magkasundo sa paraan nang maaga, makipag-usap nang bukas, at gumamit ng mga tool na nagpapalinaw at nagpapawasto ng proseso para sa lahat.
        </p>
        <p>
          Gamitin ang aming <Link href="/bill-splitter-calculator" className="text-desert-primary underline">Bill Splitter Calculator</Link> upang makuha ang iyong breakdown sa ilang segundo, at bisitahin ang <Link href="/blog" className="text-desert-primary underline">aming blog</Link> para sa iba pang gabay tungkol sa pamumuhay sa Saudi Arabia.
        </p>
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
        <p className="text-desert-primary text-sm font-medium tracking-widest uppercase">আবাসন গাইড</p>
        <h1 className="text-3xl md:text-4xl font-bold text-white mt-2">সৌদি আরবে শেয়ার্ড অ্যাপার্টমেন্টে ভাড়া ও ইউটিলিটি বিল ভাগ করার সম্পূর্ণ গাইড 2026</h1>
        <p className="text-gray-400 mt-3 max-w-2xl mx-auto">
          রিয়াদ, জেদ্দা এবং দাম্মামে জীবনযাত্রার খরচ বেশি। অ্যাপার্টমেন্ট শেয়ার করা是最好的 আর্থিক সিদ্ধান্ত, তবে বিল ন্যায্যভাবে ভাগ করা কঠিন হতে পারে। এই গাইড আপনাকে ঠিক সেই পদ্ধতি দেখায়।
        </p>
      </div>

      <GlassCard>
        <h2>ভূমিকা</h2>
        <p>
          আপনি যদি সৌদি আরবে থাকেন, তবে আপনি জানেন বাস্তবতা: রিয়াদ, জেদ্দা এবং দাম্মামে ভাড়া ক্রমাগত বাড়ছে। একটি ভাল এলাকায় একটি 2-বেডরুমের অ্যাপার্টমেন্টের বার্ষিক ভাড়া 40,000 থেকে 60,000 SAR হতে পারে। এর সাথে যোগ করুন SEC বিদ্যুৎ বিল, যা গ্রীষ্মকালে এক মাসে 1,000 SAR-ও ছাড়িয়ে যেতে পারে, সেইসাথে পানি, ইন্টারনেট এবং অন্যান্য ইউটিলিটি। সংখ্যাগুলো দ্রুত বেড়ে যায়।
        </p>
        <p>
          অ্যাপার্টমেন্ট শেয়ার করা আপনার আবাসন খরচ 40-50% কমানোর সবচেয়ে বুদ্ধিমান উপায়। তবে সবার সামনে সমস্যা হলো: আপনি কীভাবে বিলগুলি <strong>ন্যায্যভাবে</strong> ভাগ করবেন? মাস্টার বেডরুমের ব্যক্তি কি বেশি দেবে? যদি এক রুমমেট 18°C তে এসি চালায় আর আপনি 24°C পছন্দ করেন? আর কীভাবে দেরিতে পেমেন্ট নিয়ে অপ্রস্তুত আলোচনা ছাড়াই মোকাবিলা করবেন?
        </p>
        <p>
          এই গাইড এই সমস্ত প্রশ্নের উত্তর দেয়। আপনি ভাড়া এবং ইউটিলিটি ভাগ করার সবচেয়ে ন্যায্য পদ্ধতি শিখবেন, বাস্তব গণনার উদাহরণ দেখবেন, এবং টাকা নিয়ে রুমমেটদের মধ্যে দ্বন্দ্ব এড়ানোর জন্য ব্যবহারিক টিপস পাবেন। পাশাপাশি, আমাদের বিনামূল্যের <Link href="/bill-splitter-calculator" className="text-desert-primary underline">বিল স্প্লিটার ক্যালকুলেটর</Link> ব্যবহার করে সেকেন্ডের মধ্যে সঠিক বিভাগ পেয়ে যান।
        </p>
      </GlassCard>

      <GlassCard>
        <h2>কোন খরচগুলি ভাগ করা প্রয়োজন?</h2>
        <p>অ্যাপার্টমেন্টে ওঠার আগে, ঠিক করে নিন কোন খরচগুলি ভাগ করা হবে। সৌদি অ্যাপার্টমেন্টগুলির জন্য এখানে আদর্শ তালিকা দেওয়া হলো:</p>
        <div className="space-y-3">
          <div className="bg-[#0A0E1A] p-3 rounded-lg">
            <p className="text-white font-medium">1. মাসিক ভাড়া</p>
            <p className="text-gray-400 text-sm">সবচেয়ে বড় খরচ। সাধারণত পোস্ট-ডেটেড চেক বা সাদাদ অটো-পেমেন্টের মাধ্যমে দেওয়া হয়। চুক্তি স্বাক্ষরের আগে ভাগ করার পদ্ধতি নিয়ে একমত হন।</p>
          </div>
          <div className="bg-[#0A0E1A] p-3 rounded-lg">
            <p className="text-white font-medium">2. SEC বিদ্যুৎ বিল</p>
            <p className="text-gray-400 text-sm">সবচেয়ে পরিবর্তনশীল খরচ। শীতে 200 SAR থেকে শুরু করে গ্রীষ্মের চরমে 1,500+ SAR পর্যন্ত হতে পারে। এসির ব্যবহারই প্রধান কারণ। SEC স্মার্ট মিটার অ্যাপের মাধ্যমে স্বচ্ছতার সাথে ট্র্যাক করুন।</p>
          </div>
          <div className="bg-[#0A0E1A] p-3 rounded-lg">
            <p className="text-white font-medium">3. পানি বিল</p>
            <p className="text-gray-400 text-sm">ন্যাশনাল ওয়াটার কোম্পানির বিল। সাধারণত ছোট নির্দিষ্ট পরিমাণ (30-80 SAR/মাস) তবে বাগান থাকলে বাড়তে পারে।</p>
          </div>
          <div className="bg-[#0A0E1A] p-3 rounded-lg">
            <p className="text-white font-medium">4. ইন্টারনেট/ওয়াই-ফাই</p>
            <p className="text-gray-400 text-sm">STC, Mobily বা Zain ফাইবার প্যাকেজ। নির্দিষ্ট মাসিক খরচ, সহজেই সমানভাবে ভাগ করা যায়। আপনার গতির প্রয়োজন অনুযায়ী প্ল্যান বেছে নিন।</p>
          </div>
          <div className="bg-[#0A0E1A] p-3 rounded-lg">
            <p className="text-white font-medium">5. গ্যাস সিলিন্ডার</p>
            <p className="text-gray-400 text-sm">যদি রান্নার জন্য গ্যাস ব্যবহার করেন। একটি বড় সিলিন্ডারের দাম প্রায় 30-40 SAR এবং ব্যবহার ভেদে 1-3 মাস চলে।</p>
          </div>
          <div className="bg-[#0A0E1A] p-3 rounded-lg">
            <p className="text-white font-medium">6. পরিষ্কার/গৃহকর্মী সেবা</p>
            <p className="text-gray-400 text-sm">যদি আপনি গৃহকর্মীর সেবা ভাগ করেন, খরচ সমানভাবে ভাগ করুন। ফ্রিকোয়েন্সি (সাপ্তাহিক, দ্বি-সাপ্তাহিক) আগেই নির্ধারণ করুন।</p>
          </div>
        </div>
      </GlassCard>

      <GlassCard>
        <h2>ন্যায্য ভাগ করার পদ্ধতি</h2>
        <h3>পদ্ধতি 1: সমান ভাগ</h3>
        <p>সেই অ্যাপার্টমেন্টের জন্য সেরা যেখানে সব কক্ষ আকারে একই রকম এবং সবাই কমন এলাকা সমানভাবে ব্যবহার করে। মোট খরচ রুমমেটের সংখ্যা দিয়ে ভাগ করুন। এটি সবচেয়ে সহজ এবং সাধারণ পদ্ধতি।</p>

        <h3>পদ্ধতি 2: কক্ষের আকার অনুযায়ী আনুপাতিক ভাগ</h3>
        <p>যখন কারও কাছে নিজস্ব বাথরুমযুক্ত মাস্টার বেডরুম থাকে তখন এটি ব্যবহার করুন। মাস্টার বেডরুমের ব্যক্তি প্রিমিয়াম প্রদান করে (সাধারণত 10-20% বেশি)। সাধারণ ভাগ: 2 রুমমেটের জন্য 60/40, বা মাস্টার সহ 3 রুমমেটের জন্য 40/30/30।</p>

        <h3>পদ্ধতি 3: ব্যবহার-ভিত্তিক ভাগ</h3>
        <p>বিদ্যুতের মতো পরিবর্তনশীল খরচের জন্য সেরা। যদি এক রুমমেট বাড়ি থেকে কাজ করে এবং সারাদিন এসি চালায়, অন্যদের তুলনায় যারা অফিসে যায় এবং কেবল রাতে এসি ব্যবহার করে, সেই অনুযায়ী বিদ্যুতের ভাগ সামঞ্জস্য করুন। SEC স্মার্ট মিটার অ্যাপ ব্যবহার করে স্বচ্ছভাবে খরচের ধরণ ট্র্যাক করুন।</p>

        <div className="bg-desert-primary/10 border border-desert-primary/30 p-4 rounded-xl">
          <p className="text-sm font-medium text-desert-primary">💡 টিপ</p>
          <p className="text-sm mt-1">সেরা ফলাফলের জন্য পদ্ধতিগুলো একত্রিত করুন: কক্ষের আকার অনুযায়ী ভাড়া ভাগ করুন, এবং ইউটিলিটি সমান বা ব্যবহার অনুযায়ী ভাগ করুন। আমাদের <Link href="/bill-splitter-calculator" className="text-desert-primary underline">বিল স্প্লিটার ক্যালকুলেটর</Link> এই সমস্ত পদ্ধতি সমর্থন করে।</p>
        </div>
      </GlassCard>

      <GlassCard>
        <h2>ধাপে ধাপে গণনার সূত্র</h2>
        <div className="bg-[#0A0E1A] p-4 rounded-xl mb-4 font-mono text-sm text-gray-300">
          <p>ধাপ 1: সমস্ত নির্দিষ্ট খরচ যোগ করুন (ভাড়া + ইন্টারনেট + গৃহকর্মী)</p>
          <p>ধাপ 2: সমস্ত পরিবর্তনশীল খরচ যোগ করুন (SEC বিল + পানি + গ্যাস)</p>
          <p>ধাপ 3: মোট ভাগ করা খরচ = নির্দিষ্ট খরচ + পরিবর্তনশীল খরচ</p>
          <p>ধাপ 4: রুমমেটের সংখ্যা দিয়ে ভাগ করুন (সমান ভাগের জন্য)</p>
          <p className="text-gray-400">অথবা</p>
          <p>ধাপ 4: আনুপাতিক শতাংশ প্রয়োগ করুন (মাস্টার বেডরুম প্রিমিয়ামের জন্য)</p>
          <p>ধাপ 5: প্রত্যেক ব্যক্তির মোট = ভাড়ার অংশ + ইউটিলিটি অংশ</p>
        </div>
      </GlassCard>

      <GlassCard>
        <h2>বাস্তব জীবনের গণনার উদাহরণ</h2>

        <h3>উদাহরণ 1: সমান ভাগ — দুই রুমমেট</h3>
        <div className="bg-[#0A0E1A] p-4 rounded-xl mb-4">
          <p className="text-sm">মোট খরচ: 3,000 SAR ভাড়া + 400 SAR বিদ্যুৎ + 100 SAR পানি + 200 SAR ইন্টারনেট = <strong>3,700 SAR</strong></p>
          <p className="text-sm mt-1">প্রতি ব্যক্তি: 3,700 ÷ 2 = <strong>1,850 SAR/মাস</strong></p>
        </div>

        <h3>উদাহরণ 2: আনুপাতিক — তিন রুমমেট মাস্টার বেডরুম সহ</h3>
        <div className="bg-[#0A0E1A] p-4 rounded-xl mb-4">
          <p className="text-sm">মোট খরচ: 4,500 SAR ভাড়া + 600 SAR বিদ্যুৎ + 100 SAR পানি + 250 SAR ইন্টারনেট = <strong>5,450 SAR</strong></p>
          <p className="text-sm mt-2 text-white font-medium">ভাগের অনুপাত: মাস্টার বেডরুম 40%, অপর দুইজন 30% করে</p>
          <p className="text-sm mt-1">মাস্টার বেডরুম: 5,450 × 0.40 = <strong>2,180 SAR/মাস</strong></p>
          <p className="text-sm mt-1">প্রত্যেক অন্য রুমমেট: 5,450 × 0.30 = <strong>1,635 SAR/মাস</strong></p>
        </div>

        <h3>উদাহরণ 3: এসি ব্যবহারের ভিত্তিতে সামঞ্জস্য</h3>
        <div className="bg-[#0A0E1A] p-4 rounded-xl">
          <p className="text-sm">SEC বিল: 800 SAR। রুমমেট A বাড়ি থেকে কাজ করে (60% ব্যবহার), রুমমেট B অফিসে যায় (40% ব্যবহার)।</p>
          <p className="text-sm mt-1">রুমমেট A দেবে: 800 × 0.60 = <strong>480 SAR</strong></p>
          <p className="text-sm mt-1">রুমমেট B দেবে: 800 × 0.40 = <strong>320 SAR</strong></p>
        </div>
      </GlassCard>

      <GlassCard>
        <h2>টাকা নিয়ে রুমমেটদের দ্বন্দ্ব এড়ানোর সেরা টিপস</h2>
        <div className="space-y-3">
          <div className="bg-[#0A0E1A] p-3 rounded-lg">
            <p className="text-white font-medium">1. মাসিক "বিল পেমেন্ট ডে" নির্ধারণ করুন</p>
            <p className="text-gray-400 text-sm">প্রতি মাসে একটি নির্দিষ্ট তারিখ বেছে নিন (যেমন ৫ই) যখন সবাই তাদের অংশ ট্রান্সফার করবে। এটি একটি রুটিন তৈরি করে এবং শেষ মুহূর্তের তাড়াহুড়ো দূর করে।</p>
          </div>
          <div className="bg-[#0A0E1A] p-3 rounded-lg">
            <p className="text-white font-medium">2. ট্র্যাকিং অ্যাপ ব্যবহার করুন</p>
            <p className="text-gray-400 text-sm">প্রাথমিক ভাগের জন্য আমাদের বিল স্প্লিটার ক্যালকুলেটর ব্যবহার করুন, তারপর Splitwise-এর মতো অ্যাপ দিয়ে নিয়মিত খরচ ট্র্যাক করুন। এটি সবাইকে জবাবদিহি করে।</p>
          </div>
          <div className="bg-[#0A0E1A] p-3 rounded-lg">
            <p className="text-white font-medium">3. গ্রীষ্মের আগে এসির নিয়ম নির্ধারণ করুন</p>
            <p className="text-gray-400 text-sm">গ্রীষ্মের বিদ্যুৎ বিল রুমমেটদের মধ্যে দ্বন্দ্বের #১ কারণ। তাপমাত্রার সীমা (23°C-25°C) এবং ব্যবহারের সময় নিয়ে একমত হন।</p>
          </div>
          <div className="bg-[#0A0E1A] p-3 rounded-lg">
            <p className="text-white font-medium">4. সিকিউরিটি ডিপোজিট রাখুন</p>
            <p className="text-gray-400 text-sm">ওঠার আগে এক মাসের ভাড়া জামানত হিসেবে সংগ্রহ করুন। এটি কেউ হঠাৎ চলে গেলে অপরিশোধিত বিল কভার করে।</p>
          </div>
          <div className="bg-[#0A0E1A] p-3 rounded-lg">
            <p className="text-white font-medium">5. খোলাখুলি কথা বলুন</p>
            <p className="text-gray-400 text-sm">যদি কারও টাকা দিতে সমস্যা হয়, তবে তা লুকিয়ে না রেখে শুরুতেই কথা বলুন। একটি যৌথ ব্যাংক অ্যাকাউন্ট বা সাদাদ অটো-ডেবিট সেট আপ করার কথা বিবেচনা করুন।</p>
          </div>
        </div>
      </GlassCard>

      <GlassCard>
        <h2>সৌদি আরবে কিভাবে শেয়ার্ড বিল পরিশোধ করবেন</h2>
        <div className="space-y-3">
          <div className="bg-[#0A0E1A] p-3 rounded-lg">
            <p className="text-white font-medium">সাদাদ পেমেন্ট সিস্টেম</p>
            <p className="text-gray-400 text-sm">একজন ব্যক্তি সাদাদের মাধ্যমে তাদের ব্যাংক অ্যাপ (আল রাজিহি, SNB, রিয়াদ ব্যাংক, আলিনমা) ব্যবহার করে পুরো বিল পরিশোধ করে। বাকিরা অবিলম্বে Urpay, STC Pay, বা ব্যাংক ট্রান্সফারের মাধ্যমে তাদের অংশ পাঠায়।</p>
          </div>
          <div className="bg-[#0A0E1A] p-3 rounded-lg">
            <p className="text-white font-medium">অটো-পে</p>
            <p className="text-gray-400 text-sm">SEC এবং অন্যান্য বিলের জন্য অটো-ডেবিট সেট আপ করুন। একজন দেয়, বাকিরা Urpay বা STC Pay ব্যবহার করে তাৎক্ষণিক ট্রান্সফার করে। বেশিরভাগ সৌদি ব্যাংক বিনামূল্যে এই পরিষেবাগুলো সমর্থন করে।</p>
          </div>
          <div className="bg-[#0A0E1A] p-3 rounded-lg">
            <p className="text-white font-medium">ভাড়া পরিশোধ</p>
            <p className="text-gray-400 text-sm">ভাড়া সাধারণত পোস্ট-ডেটেড চেকের মাধ্যমে (প্রত্যেক রুমমেট তাদের অংশের চেক দেয়) বা ইজার প্ল্যাটফর্মের মাধ্যমে দেওয়া হয়। কিছু জমিদার এখন মাসিক ভাড়ার জন্য সাদাদ পেমেন্ট গ্রহণ করে।</p>
          </div>
        </div>
      </GlassCard>

      <GlassCard>
        <h2>কীভাবে Sauditoolhub বিল স্প্লিটার ক্যালকুলেটর ব্যবহার করবেন</h2>
        <p>
          আমাদের বিনামূল্যের <Link href="/bill-splitter-calculator" className="text-desert-primary font-bold underline">বিল স্প্লিটার ক্যালকুলেটর</Link> খরচ ভাগ করা অত্যন্ত সহজ করে তোলে:
        </p>
        <ol className="list-decimal list-inside space-y-1 text-gray-300">
          <li>মোট ভাড়ার পরিমাণ লিখুন।</li>
          <li>প্রত্যেক ব্যক্তির ভাগের শতাংশ বা কক্ষের আকার লিখুন।</li>
          <li>প্রতি মাসে পরিবর্তনশীল বিল যোগ করুন (বিদ্যুৎ, পানি, ইন্টারনেট)।</li>
          <li>ক্যালকুলেটর VAT সহ প্রত্যেকের মোট পরিমাণ তাৎক্ষণিকভাবে দেখায়।</li>
        </ol>
        <p className="mt-3">
          এছাড়াও আমাদের <Link href="/sec-bill-calculator" className="text-desert-primary underline">SEC বিল এস্টিমেটর</Link> এবং <Link href="/fuel-cost-calculator" className="text-desert-primary underline">জ্বালানি খরচ ক্যালকুলেটর</Link> দেখুন।
        </p>
      </GlassCard>

      <GlassCard>
        <h2>উপসংহার</h2>
        <p>
          সৌদি আরবে অ্যাপার্টমেন্ট শেয়ার করা রিয়াদ, জেদ্দা এবং দাম্মামের মতো শহরে উচ্চ জীবনযাত্রার ব্যয় মোকাবেলার একটি বুদ্ধিমান উপায়। কিন্তু খরচ ভাগ করার স্পষ্ট ব্যবস্থা ছাড়া, এটি হতাশা এবং দ্বন্দ্বের কারণ হতে পারে। চাবিকাঠি হলো পদ্ধতি আগেই নির্ধারণ করা, খোলাখুলি যোগাযোগ করা, এবং এমন সরঞ্জাম ব্যবহার করা যা প্রক্রিয়াটিকে সবার জন্য স্বচ্ছ এবং ন্যায্য করে তোলে।
        </p>
        <p>
          আমাদের <Link href="/bill-splitter-calculator" className="text-desert-primary underline">বিল স্প্লিটার ক্যালকুলেটর</Link> ব্যবহার করে সেকেন্ডের মধ্যে আপনার বিভাগ পেয়ে যান, এবং সৌদি আরবে জীবনযাপন সম্পর্কে আরও গাইডের জন্য <Link href="/blog" className="text-desert-primary underline">আমাদের ব্লগ</Link> দেখুন।
        </p>
      </GlassCard>
    </article>
  )
}

export default async function SplitGuidePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  return (
    <div className="relative z-10 px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        {locale === 'ar' ? <ArContent /> : locale === 'ur' ? <UrContent /> : locale === 'tl' ? <TlContent /> : locale === 'bn' ? <BnContent /> : <EnContent />}
      </div>
    </div>
  )
}
