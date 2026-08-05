import type { Metadata } from 'next'
import Link from 'next/link'
import { BreadcrumbJsonLd, FAQJsonLd, ArticleJsonLd } from '@/components/JsonLd'
import { RelatedTools } from '@/components/RelatedTools'
import { Calculator } from 'lucide-react'

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
    ? 'دليل مكافأة نهاية الخدمة الكامل 2026 - حاسبة EOSB | Sauditoolhub'
    : isUr
    ? 'EOSB کی حتمی گائیڈ 2026 - ملازمت کے اختتامی معاوضہ کیلکولیٹر | Sauditoolhub'
    : isTl
    ? 'Kumpletong Gabay sa EOSB sa Saudi Arabia 2026 | Sauditoolhub'
    : isBn
    ? 'সাউদি আরবে ইন্ড অফ সার্ভিস বেনিফিটের সম্পূর্ণ গাইড 2026 | Sauditoolhub'
    : 'Complete Guide to End of Service Benefit EOSB in Saudi Arabia 2026'

  const description = isAr
    ? 'دليل كامل لحساب مكافأة نهاية الخدمة في السعودية 2026. تعلم المادة 84 وقواعد الاستقالة وحساب EOSB مجاناً.'
    : isUr
    ? 'سعودی عرب میں ملازمت کے اختتامی معاوضے کا 2026 کا مکمل گائیڈ۔ آرٹیکل 84، استعفیٰ کے قواعد، اور EOSB کا حساب سیکھیں۔'
    : isTl
    ? 'Kumpletong gabay sa EOSB calculation sa Saudi Arabia 2026. Matuto tungkol sa Article 84 at resignation rules.'
    : isBn
    ? 'সাউদি আরবে EOSB ক্যালকুলেশনের সম্পূর্ণ গাইড 2026। আর্টিকেল 84 এবং রেজিগনেশন নিয়ম সম্পর্কে জানুন।'
    : 'Complete guide to End of Service Benefit EOSB in Saudi Arabia 2026. Learn Article 84, resignation rules, and how to calculate your gratuity.'

  return {
    title,
    description,
    alternates: {
      canonical: isDefault ? `${baseUrl}/guide/eosb-end-of-service-benefit-saudi-arabia-2026` : `${baseUrl}/${locale}/guide/eosb-end-of-service-benefit-saudi-arabia-2026`,
      languages: {
        en: `${baseUrl}/guide/eosb-end-of-service-benefit-saudi-arabia-2026`,
        ar: `${baseUrl}/ar/guide/eosb-end-of-service-benefit-saudi-arabia-2026`,
        ur: `${baseUrl}/ur/guide/eosb-end-of-service-benefit-saudi-arabia-2026`,
        tl: `${baseUrl}/tl/guide/eosb-end-of-service-benefit-saudi-arabia-2026`,
        bn: `${baseUrl}/bn/guide/eosb-end-of-service-benefit-saudi-arabia-2026`,
      },
    },
    openGraph: {
      title,
      description,
      url: isDefault ? `${baseUrl}/guide/eosb-end-of-service-benefit-saudi-arabia-2026` : `${baseUrl}/${locale}/guide/eosb-end-of-service-benefit-saudi-arabia-2026`,
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
  headline: 'Complete Guide to End of Service Benefit EOSB in Saudi Arabia 2026',
  description: 'Learn how to calculate your End of Service Benefit under Saudi Labor Law. We cover Article 84, resignation rules, and common mistakes expats make.',
  author: { '@type': 'Person', name: 'Sauditoolhub Team' },
  publisher: { '@type': 'Organization', name: 'Sauditoolhub', logo: { '@type': 'ImageObject', url: `${baseUrl}/logo.png` } },
  datePublished: '2026-01-01',
  dateModified: '2026-07-01',
}

const schemaAr = {
  ...articleSchemaEn,
  headline: 'الدليل الشامل لمكافأة نهاية الخدمة EOSB في المملكة العربية السعودية 2026',
  description: 'تعلم كيفية حساب مكافأة نهاية الخدمة بموجب نظام العمل السعودي. نشرح المادة 84 وقواعد الاستقالة والأخطاء الشائعة.',
}

const schemaUr = {
  ...articleSchemaEn,
  headline: 'سعودی عرب میں ملازمت کے اختتامی معاوضے کا مکمل گائیڈ 2026',
  description: 'سعودی لیبر لا کے تحت اپنے اختتامی معاوضے کا حساب کیسے لگائیں۔ آرٹیکل 84، استعفیٰ کے قواعد، اور عام غلطیاں۔',
}

const schemaTl = {
  ...articleSchemaEn,
  headline: 'Kumpletong Gabay sa End of Service Benefit EOSB sa Saudi Arabia 2026',
  description: 'Matuto kung paano kalkulahin ang EOSB batay sa Saudi Labor Law. Tumatalakay sa Article 84, resignation rules, at karaniwang pagkakamali.',
}

const schemaBn = {
  ...articleSchemaEn,
  headline: 'সাউদি আরবে ইন্ড অফ সার্ভিস বেনিফিটের সম্পূর্ণ গাইড 2026',
  description: 'সৌদি লেবর লাউ আইন ৮৪ অনুযায়ী EOSB ক্যালকুলেশন শিখুন। রেজিগনেশন নিয়ম ও সাধারণ ভুল সম্পর্কে জানুন।',
}

const faqsEn = [
  { question: 'How is EOSB calculated in Saudi Arabia for 2026?', answer: 'EOSB is calculated per Saudi Labor Law Article 84: half a month\'s basic salary for each of the first 5 years, and one full month\'s basic salary for each subsequent year. Partial years are calculated proportionally.' },
  { question: 'Do I get end of service benefits if I resign before 2 years?', answer: 'No. Under Article 85 of the Saudi Labor Law, employees who resign with less than 2 years of continuous service are not entitled to any End of Service Benefits.' },
  { question: 'Is EOSB calculated on basic salary or total salary?', answer: 'EOSB is generally calculated on your basic salary only. Housing allowance, transportation allowance, commissions, and other benefits are typically excluded unless your contract states otherwise.' },
  { question: 'How much gratuity do I get if I resign after 3 years?', answer: 'If you resign between 2 and 5 years of service, you receive one-third (1/3) of the full EOSB amount. For example, with a 10,000 SAR basic salary and 3 years: full EOSB = 15,000 SAR. You get 15,000 x 1/3 = 5,000 SAR.' },
  { question: 'Can my employer deduct from my EOSB for early resignation?', answer: 'Yes. If you have a fixed-term contract and resign before it ends, your employer may deduct up to 50% of your EOSB to cover damages. This is separate from the Article 85 reduction.' },
  { question: 'How is EOSB calculated for partial years of service?', answer: 'Partial years are calculated proportionally. If you worked 6 months beyond a full year, you receive half of that year\'s entitlement. Example: 10,000 SAR yearly entitlement for 6 months = 5,000 SAR.' },
  { question: 'What is the difference between termination and resignation EOSB?', answer: 'If your employer terminates your contract, you are entitled to the full EOSB with no reduction. If you resign, Article 85 applies a reduction: 0% under 2 years, 1/3 between 2-5 years, 2/3 between 5-10 years, and 100% after 10 years.' },
]

const faqsAr = [
  { question: 'كيف تحسب مكافأة نهاية الخدمة في السعودية 2026؟', answer: 'تحسب المادة 84: نصف راتب أساسي شهري عن كل سنة من أول 5 سنوات، وراتب كامل عن كل سنة بعد ذلك. السنوات الجزئية تحسب تناسبياً.' },
  { question: 'هل أستحق مكافأة نهاية الخدمة إذا استقلت قبل سنتين؟', answer: 'لا. وفقاً للمادة 85، الموظفون الذين يستقيلون قبل إتمام سنتين من الخدمة المستمرة لا يستحقون أي مكافأة.' },
  { question: 'هل تحسب المكافأة على الراتب الأساسي أم الإجمالي؟', answer: 'تحسب عادة على الراتب الأساسي فقط. بدل السكن والنقل والعمولات تستبعد ما لم ينص العقد على خلاف ذلك.' },
  { question: 'كم مكافأة نهاية الخدمة إذا استقلت بعد 3 سنوات؟', answer: 'بين 2 و5 سنوات تستحق ثلث المبلغ. مثال: راتب 10,000 SAR و3 سنوات = 15,000 SAR كاملة، تستحق 5,000 SAR فقط.' },
  { question: 'هل يمكن لصاحب العمل الخصم من المكافأة للاستقالة المبكرة؟', answer: 'نعم. في العقود محددة المدة، قد يخصم صاحب العمل حتى 50% من المكافأة للاستقالة المبكرة. هذا منفصل عن تخفيض المادة 85.' },
  { question: 'كيف تحسب المكافأة للسنوات الجزئية؟', answer: 'تحسب تناسبياً. إذا عملت 6 أشهر إضافية، تستحق نصف استحقاق تلك السنة. مثال: 10,000 SAR سنوياً لـ 6 أشهر = 5,000 SAR.' },
  { question: 'ما الفرق بين إنهاء الخدمة والاستقالة في EOSB؟', answer: 'الإنهاء من صاحب العمل يعطيك المكافأة كاملة بدون تخفيض. الاستقالة تطبق المادة 85: 0% تحت سنتين، 1/3 بين 2-5، 2/3 بين 5-10، و100% بعد 10 سنوات.' },
]

const faqsUr = [
  { question: '2026 میں سعودی عرب میں EOSB کیسے حساب کیا جاتا ہے؟', answer: 'آرٹیکل 84 کے تحت: پہلے 5 سالوں کے لیے آدھی ماہانہ بنیادی تنخواہ، بعد کے سالوں کے لیے پوری ماہانہ تنخواہ۔ جزوی سال تناسب سے ہوتے ہیں۔' },
  { question: 'کیا 2 سال سے پہلے استعفیٰ پر EOSB ملتا ہے؟', answer: 'نہیں۔ آرٹیکل 85 کے تحت، 2 سال سے کم مسلسل سروس والے ملازمین EOSB کے حقدار نہیں ہیں۔' },
  { question: 'EOSب بنیادی تنخواہ پر یا کل تنخواہ پر حساب ہوتا ہے؟', answer: 'عام طور پر صرف بنیادی تنخواہ پر۔ ہاؤسنگ، ٹرانسپورٹیشن، کمیشن وغیرہ مستثنیٰ ہوتے ہیں۔' },
  { question: '3 سال بعد استعفیٰ پر کتنی گریچیوٹی ملے گی؟', answer: '2-5 سال کے درمیان استعفیٰ پر 1/3 ملتا ہے۔ مثال: 10,000 SAR بنیادی تنخواہ، 3 سال خدمت = 15,000 SAR کا 1/3 = 5,000 SAR۔' },
  { question: 'کیا آجر مقررہ مدت کے معاہدے سے جلد استعفیٰ پر کٹوتی کر سکتا ہے؟', answer: 'ہاں۔ مقررہ مدت کے معاہدے میں 50% تک کٹوتی کر سکتا ہے۔ یہ آرٹیکل 85 کے تخفیض سے الگ ہے۔' },
  { question: 'جزوی سالوں کے لیے EOSB کیسے حساب ہوتا ہے؟', answer: 'تناسب سے۔ 6 مہینے کام کیا تو نصف ملتا ہے۔ مثال: 10,000 SAR سالانہ استحقاق کا 6 مہینے = 5,000 SAR۔' },
  { question: 'برطرفی اور استعفیٰ میں EOSB کیا فرق ہے؟', answer: 'برطرفی کو پورا EOSB ملتا ہے بغیر کسی کمی کے۔ استعفیٰ پر آرٹیکل 85 لاگو ہوتا ہے: 0% <2 سال، 1/3 2-5 سال، 2/3 5-10 سال، 100% >10 سال۔' },
]

const faqsTl = [
  { question: 'Paano kinakalkula ang EOSB sa Saudi Arabia 2026?', answer: 'Sa ilalim ng Article 84: kalahating buwan na basic salary para sa bawat isa sa unang 5 taon, at isang buong buwanang basic salary para sa bawat sumunod na taon. Ang mga bahaging taon ay kinakalkula nang proporsyonal.' },
  { question: 'Nakakatanggap ba ako ng EOSB kung mag-resign ako bago ang 2 taon?', answer: 'Hindi. Sa ilalim ng Article 85, ang mga empleyadong nagre-resign na may mas mababa sa 2 taon ng serbisyo ay hindi entitled sa EOSB.' },
  { question: 'Kinakalkula ba ang EOSB sa basic salary o total salary?', answer: 'Kinakalkula nang karaniwan sa basic salary lamang. Ang housing allowance, transportation allowance, commissions, at iba pang benefits ay karaniwang hindi kasama maliban kung nasa contract.' },
  { question: 'Magkano ang makukuha ko kung mag-resign ako pagkatapos ng 3 taon?', answer: 'Kung mag-resign ka between 2 at 5 taon, makakatanggap ka ng isa-katlong (1/3) ng buong EOSB. Halimbawa: 10,000 SAR basic salary, 3 taon = 15,000 SAR na 1/3 = 5,000 SAR.' },
  { question: 'Pwedeng mag-deduct ang employer para sa maagang pag-resign?', answer: 'Oo. Sa fixed-term contract, ang employer ay pwedeng mag-deduct ng hanggang 50% ng EOSB para sa maagang pag-resign. Ito ay hiwalay sa Article 85 reduction.' },
  { question: 'Paano kinakalkula ang EOSB para sa partial years?', answer: 'Kinakalkula nang proporsyonal. Kung nagtrabaho ka ng 6 buwan karagdagan, makakatanggap ka ng kalahati ng taon iyon. Halimbawa: 10,000 SAR para sa 6 buwan = 5,000 SAR.' },
  { question: 'Ano ang pagkakaiba ng termination at resignation sa EOSB?', answer: 'Kung ang employer ang nag-terminate, entitled ka sa buong EOSB nang walang reduction. Kung ikaw ang nag-resign, Article 85 ay nag-a-apply: 0% sa ilalim ng 2 taon, 1/3 sa pagitan ng 2-5 taon, 2/3 sa pagitan ng 5-10 taon, at 100% pagkatapos ng 10 taon.' },
]

const faqsBn = [
  { question: 'সাউদি আরবে 2026 সালে EOSB কীভাবে ক্যালকুলেট হয়?', answer: 'আর্টিকেল ৮৪ অনুযায়ী: প্রথম ৫ বছরের জন্য প্রতি বছরে আধা মাসিক বেসিক স্যালারি, এবং পরবর্তী বছরের জন্য এক পূর্ণ মাসিক বেসিক স্যালারি। আংশিক বছরগুলি আনুপাতিকভাবে ক্যালকুলেট হয়।' },
  { question: '২ বছর আগে রেজিগন করার পর আমি কি EOSB পাব?', answer: 'না। আর্টিকেল ৮৫ অনুযায়ী, ২ বছরের কম ক্রমাগত সেবায় রেজিগন করা কর্মচারীদের কোনো EOSB পাওয়ার অধিকার নেই।' },
  { question: 'EOSB ক্যালকুলেট হয় বেসিক স্যালারি না মোট স্যালারি?', answer: 'সাধারণত শুধুমাত্র বেসিক স্যালারিতে। হাউজিং অ্যালোয়েন্স, ট্রansপোর্টেশন অ্যালোয়েন্স, কমিশন এবং অন্যান্য সুবিধা সাধারণত বাদ দেওয়া হয় যদি কনট্রাক্টে অন্য কোনো কথা না থাকলে।' },
  { question: '৩ বছর পর রেজিগন করলে কত গ্র্যাচুয়েটি পাব?', answer: '২-৫ বছরের মধ্যে রেজিগন করলে আপনি পুরো EOSB এর এক তৃতীয়াংশ (1/3) পাবেন। উদাহরণ: ১০,০০০ SAR বেসিক স্যালারি, ৩ বছর = ১৫,০০০ SAR এর ১/৩ = ৫,০০০ SAR।' },
  { question: 'কর্মদাতা শীঘ্র রেজিগনের জন্য EOSB থেকে কাটছাঁট করতে পারে?', answer: 'হ্যাঁ। একটি ফিক্সড-টার্ম কনট্র্যাক্ট থাকলে, কর্মদাতা ক্ষতির জন্য EOSB এর ৫০% পর্যন্ত কাটছাঁট করতে পারে। এটি আর্টিকেল ৮৫ এর কাটছাঁট থেকে আলাদা।' },
  { question: 'আংশিক বছরের জন্য EOSB কীভাবে ক্যালকুলেট হয়?', answer: 'আনুপাতিকভাবে। একটি পুরো বছরের beyond ৬ মাস কাজ করলে, আপনি সেই বছরের entitlement এর অর্ধেক পাবেন। উদাহরণ: ১০,০০০ SAR বছরের entitlement এর ৬ মাস = ৫,০০০ SAR।' },
  { question: 'টার্মিনেশন এবং রেজিগন মধ্যে EOSB এরdifference কী?', answer: 'কর্মদাতা আপনার কনট্র্যাক্ট টার্মিনেট করলে, আপনি কোনো কমিশন ছাড়াই পুরো EOSB পাবেন। আপনি রেজিগন করলে, আর্টিকেল ৮৫ প্রযোজ্য: ২ বছরের নিচে ০%, ২-৫ বছরের মধ্যে ১/৩, ৫-১০ বছরের মধ্যে ২/৩, ১০ বছরের পরে ১০০%।' },
]

function EnContent() {
  return (
    <article className="prose prose-invert max-w-none prose-headings:text-desert-primary prose-a:text-desert-primary prose-strong:text-white prose-li:text-gray-300">
      <h1>Complete Guide to End of Service Benefit EOSB in Saudi Arabia 2026</h1>

      <div className="not-prose glass p-6 rounded-xl mb-8">
        <p className="text-gray-300 text-lg leading-relaxed">
          Leaving a job in Saudi Arabia? One of the most important financial questions you will face is your End of Service Benefit, commonly known as EOSB or gratuity. Under Saudi Labor Law, most employees are entitled to a lump-sum payment when their employment ends. The amount depends on your years of service, salary, and reason for leaving.
        </p>
        <p className="text-gray-300 text-lg leading-relaxed mt-4">
          This guide explains exactly how EOSB is calculated in 2026, what Article 84 and Article 85 mean for you, and common mistakes that cost expats thousands of Riyals. Use our free{' '}
          <Link href="/eosb-calculator" className="text-desert-primary font-bold underline">
            EOSB Calculator
          </Link>{' '}
          to estimate your benefit instantly.
        </p>
      </div>

      <h2>What is End of Service Benefit EOSB?</h2>
      <p>End of Service Benefit EOSB is a mandatory lump-sum payment that Saudi employers must provide to employees when their employment contract ends. It is governed by Saudi Labor Law Articles 84 and 85. EOSB applies to both Saudi nationals and expatriates working in the private and public sectors.</p>

      <h2>EOSB Calculation Rules Under Saudi Labor Law 2026</h2>
      <div className="not-prose glass p-4 rounded-xl mb-6">
        <ul className="space-y-3 text-gray-300">
          <li><strong className="text-desert-primary">First 5 years:</strong> Half a month of basic salary per year.</li>
          <li><strong className="text-desert-primary">After 5 years:</strong> One full month of basic salary per year.</li>
          <li><strong className="text-desert-primary">Partial years:</strong> Calculated proportionally.</li>
          <li><strong className="text-desert-primary">Resignation reduction:</strong> Article 85 applies if you resign before your contract ends.</li>
          <li><strong className="text-desert-primary">Fixed-term contracts:</strong> Employer may deduct up to 50% for early resignation.</li>
        </ul>
      </div>

      <h2>How to Calculate EOSB Step by Step</h2>
      <div className="not-prose glass p-6 rounded-xl mb-8">
        <ol className="space-y-4 text-gray-300 list-decimal list-inside">
          <li><strong>Step 1:</strong> Note your basic monthly salary in SAR.</li>
          <li><strong>Step 2:</strong> Calculate total years and months of continuous service.</li>
          <li><strong>Step 3:</strong> Apply Article 84: half-month salary for first 5 years, full month for each additional year.</li>
          <li><strong>Step 4:</strong> If you resigned, check Article 85 reduction rules.</li>
          <li><strong>Step 5:</strong> Add proportional amounts for partial months or years.</li>
        </ol>
      </div>

      <h3>Real EOSB Calculation Example</h3>
      <div className="not-prose glass p-4 rounded-xl mb-4">
        <p className="text-gray-300"><strong>Example:</strong> Basic salary 10,000 SAR, 7 years and 6 months of service, resigning after 5 years.</p>
        <p className="text-gray-300 mt-2">First 5 years: 5 x 5,000 SAR = 25,000 SAR<br />Years 6-7: 2 x 10,000 SAR = 20,000 SAR<br />Partial 6 months: 0.5 x 10,000 SAR = 5,000 SAR<br />Total EOSB (Article 84): 50,000 SAR<br />Resignation reduction (5-10 years): 2/3 applied<br />Final EOSB: 33,333 SAR</p>
      </div>

      <h2>Common EOSB Mistakes Expats Make</h2>
      <div className="not-prose glass p-4 rounded-xl mb-6">
        <ul className="space-y-3 text-gray-300">
          <li><strong>Mistake 1:</strong> Assuming EOSB includes housing and transport allowances. It usually does not.</li>
          <li><strong>Mistake 2:</strong> Forgetting to claim unused vacation pay, which is separate from EOSB.</li>
          <li><strong>Mistake 3:</strong> Not getting a signed acknowledgment from HR before leaving.</li>
          <li><strong>Mistake 4:</strong> Missing the 2-year rule under Article 85 for resignation EOSB.</li>
        </ul>
      </div>

      <h2>Special Notes for Pakistani Workers</h2>
      <div className="not-prose glass p-6 rounded-xl mb-8">
        <p className="text-gray-300">
          For the large Pakistani community in Saudi Arabia, EOSB is often the single biggest lump sum you will receive while working in the Kingdom. Many Pakistani workers confuse EOSB with a provident fund (PF) — remember, EOSB is a statutory gratuity under Saudi Labor Law, not a monthly contribution, and it is calculated from your basic salary, not your total package.
        </p>
        <p className="text-gray-300 mt-4">
          When your EOSB is paid out, your employer releases it together with your final salary settlement. Saudi Arabia does not deduct income tax or zakat from your EOSB, so the full amount reaches you. To remit it to Pakistan, use your Saudi bank's international transfer service to Meezan Bank, HBL, UBL, or Bank Alfalah, or a licensed exchange house — SADAD is mainly for government payments, so bank transfers and exchange houses are the practical channels for sending your final settlement home. Remittances sent to Pakistan from abroad are not subject to Pakistani income tax, but if the money earns profit after deposit, that interest is taxable in Pakistan.
        </p>
        <p className="text-gray-300 mt-4">
          Plan ahead: keep your Iqama and passport valid during the final settlement period, and get a signed acknowledgment from HR listing your EOSB amount before your Iqama is cancelled — disputes after leaving are very hard to resolve from Pakistan. Use our EOSB Calculator to verify the figure before you accept it.
        </p>
      </div>

      <h2>Frequently Asked Questions About EOSB</h2>
      {faqsEn.map((faq, i) => (
        <div key={i} className="not-prose glass p-4 rounded-xl mb-4">
          <h3 className="text-white font-semibold mb-2">{faq.question}</h3>
          <p className="text-gray-400 text-sm">{faq.answer}</p>
        </div>
      ))}

      <h2>Conclusion</h2>
      <p>EOSB is one of the most significant financial benefits available to employees in Saudi Arabia. Understanding Article 84 and Article 85 can help you avoid costly mistakes and ensure you receive the full amount you deserve. Always verify your final settlement with HR before signing any exit documents.</p>
      <p>Need a quick estimate? Use our free{' '}
        <Link href="/eosb-calculator" className="text-desert-primary font-bold underline">
          EOSB Calculator
        </Link>{' '}
        to calculate your end of service benefit in seconds. Private, instant, and accurate.
      </p>

      <div className="not-prose glass p-6 rounded-xl mt-8 text-center">
        <Calculator className="h-10 w-10 text-desert-primary mx-auto mb-3" />
        <h3 className="text-white text-lg font-bold mb-2">Calculate Your EOSB Now</h3>
        <p className="text-gray-400 text-sm mb-4">Free instant estimate — no signup required</p>
        <Link href="/eosb-calculator" className="inline-flex items-center gap-2 rounded-xl bg-desert-primary px-8 py-3 text-sm font-bold text-white transition-all hover:bg-desert-primary-dim">
          <Calculator className="h-4 w-4" />
          Use Free EOSB Calculator
        </Link>
      </div>
    </article>
  )
}

function ArContent() {
  return (
    <article className="prose prose-invert max-w-none prose-headings:text-desert-primary prose-a:text-desert-primary prose-strong:text-white prose-li:text-gray-300" dir="rtl">
      <h1>الدليل الشامل لمكافأة نهاية الخدمة EOSB في المملكة العربية السعودية 2026</h1>

      <div className="not-prose glass p-6 rounded-xl mb-8">
        <p className="text-gray-300 text-lg leading-relaxed">
          هل تترك عملك في السعودية؟ واحدة من أهم الأسئلة المالية التي ستواجهها هي مكافأة نهاية الخدمة، المعروفة باسم EOSB. بموجب نظام العمل السعودي، معظم الموظفين يستحقون دفعة مقطوعة عند انتهاء عقدهم.
        </p>
        <p className="text-gray-300 text-lg leading-relaxed mt-4">
          هنا يأتي دور{' '}
          <Link href="/eosb-calculator" className="text-desert-primary font-bold underline">
            حاسبة EOSB من Sauditoolhub
          </Link>
          . صممنا هذه الأداة المجانية لمساعدتك في حساب المبلغ الدقيق في ثوانٍ. في هذا الدليل الشامل، نشرح كل ما تحتاج معرفته عن مكافأة نهاية الخدمة في السعودية لعام 2026.
        </p>
      </div>

      <h2>ما هي مكافأة نهاية الخدمة EOSB؟</h2>
      <p>مكافأة نهاية الخدمة هي دفعة مقطوعة إلزامية يجب على أصحاب العمل السعوديين تقديمها للموظفين عند انتهاء عقد العمل. تحكمها مواد 84 و 85 من نظام العمل السعودي. تنطبق على المواطنين السعوديين والمقيمين في القطاعين الخاص والعام.</p>

      <h2>قواعد حساب EOSB بموجب نظام العمل السعودي 2026</h2>
      <div className="not-prose glass p-4 rounded-xl mb-6">
        <ul className="space-y-3 text-gray-300">
          <li><strong className="text-desert-primary">الخمس سنوات الأولى:</strong> نصف راتب أساسي شهري عن كل سنة.</li>
          <li><strong className="text-desert-primary">بعد 5 سنوات:</strong> راتب أساسي شهري كامل عن كل سنة.</li>
          <li><strong className="text-desert-primary">السنوات الجزئية:</strong> تحسب تناسبياً.</li>
          <li><strong className="text-desert-primary">تخفيض الاستقالة:</strong> المادة 85 تطبق إذا استقلت قبل انتهاء العقد.</li>
          <li><strong className="text-desert-primary">العقود محددة المدة:</strong> قد يخصم صاحب العمل حتى 50% للاستقالة المبكرة.</li>
        </ul>
      </div>

      <h2>كيفية حساب مكافأة نهاية الخدمة خطوة بخطوة</h2>
      <div className="not-prose glass p-6 rounded-xl mb-8">
        <ol className="space-y-4 text-gray-300 list-decimal list-inside">
          <li><strong>الخطوة 1:</strong> حدد راتبك الأساسي الشهري بالريال.</li>
          <li><strong>الخطوة 2:</strong> احسب إجمالي سنوات وأشهر الخدمة المستمرة.</li>
          <li><strong>الخطوة 3:</strong> طبق المادة 84: نصف راتب عن أول 5 سنوات، راتب كامل عن كل سنة إضافية.</li>
          <li><strong>الخطوة 4:</strong> إذا استقلت، تحقق من قواعد تخفيض المادة 85.</li>
          <li><strong>الخطوة 5:</strong> أضف المبالغ التناسبية للأشهر أو السنوات الجزئية.</li>
        </ol>
      </div>

      <h3>مثال عملي لحساب مكافأة نهاية الخدمة</h3>
      <div className="not-prose glass p-4 rounded-xl mb-4">
        <p className="text-gray-300"><strong>مثال:</strong> راتب أساسي 10,000 ريال، 7 سنوات و6 أشهر خدمة، استقال بعد 5 سنوات.</p>
        <p className="text-gray-300 mt-2">الخمس سنوات الأولى: 5 × 5,000 = 25,000 ريال<br />السنوات 6-7: 2 × 10,000 = 20,000 ريال<br />الجزء 6 أشهر: 0.5 × 10,000 = 5,000 ريال<br />إجمالي المكافأة (المادة 84): 50,000 ريال<br />تخفيض الاستقالة (5-10 سنوات): تطبيق الثلثين<br />المكافأة النهائية: 33,333 ريال</p>
      </div>

      <h2>الأخطاء الشائعة التي يرتكبها المقيمون</h2>
      <div className="not-prose glass p-4 rounded-xl mb-6">
        <ul className="space-y-3 text-gray-300">
          <li><strong>الخطأ 1:</strong> افتراض أن المكافأة تشمل بدل السكن والنقل. عادة لا تشمل.</li>
          <li><strong>الخطأ 2:</strong> نسيان المطالبة بتعويض الإجازات غير المستخدمة، وهو منفصل عن المكافأة.</li>
          <li><strong>الخطأ 3:</strong> عدم الحصول على إقرار موقع من الموارد البشرية قبل المغادرة.</li>
          <li><strong>الخطأ 4:</strong> التفكير في أن الاستقالة قبل سنتين تعطي مكافأة كاملة. المادة 85 تنطبق.</li>
        </ul>
      </div>

      <h2>الأسئلة الشائعة</h2>
      {faqsAr.map((faq, i) => (
        <div key={i} className="not-prose glass p-4 rounded-xl mb-4">
          <h3 className="text-white font-semibold mb-2">{faq.question}</h3>
          <p className="text-gray-400 text-sm">{faq.answer}</p>
        </div>
      ))}

      <h2>الخاتمة</h2>
      <p>مكافأة نهاية الخدمة هي أحد أهم المزايا المالية للموظفين في السعودية. فهم المواد 84 و 85可以帮助ك تجنب الأخطاء المكلفة وضمان حصولك على المبلغ الكامل. تحقق دائماً من التسوية النهائية مع الموارد البشرية قبل التوقيع على أي مستندات خروج.</p>
      <p>هل تحتاج تقديراً سريعاً؟ استخدم حاسبة EOSB المجانية من Sauditoolhub لحساب مكافأة نهاية الخدمة في ثوانٍ. مجاني، فوري، وخاص.</p>

      <div className="not-prose glass p-6 rounded-xl mt-8 text-center">
        <Calculator className="h-10 w-10 text-desert-primary mx-auto mb-3" />
        <h3 className="text-white text-lg font-bold mb-2">احسب مكافأة نهاية الخدمة الآن</h3>
        <p className="text-gray-400 text-sm mb-4">تقدير فوري مجاني — بدون تسجيل</p>
        <Link href="/eosb-calculator" className="inline-flex items-center gap-2 rounded-xl bg-desert-primary px-8 py-3 text-sm font-bold text-white transition-all hover:bg-desert-primary-dim">
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
      <h1>سعودی عرب میں ملازمت کے اختتامی معاوضے کا مکمل گائیڈ 2026</h1>

      <div className="not-prose glass p-6 rounded-xl mb-8">
        <p className="text-gray-300 text-lg leading-relaxed">
          کیا آپ سعودی عرب میں اپنی ملازمت چھوڑ رہے ہیں؟ ایک اہم مالی سوال جو آپ کا سامنا کرنا پڑے گا وہ ہے ملازمت کے اختتامی معاوضہ، جسے EOSB یا گریچیوٹی کہتے ہیں۔ سعودی لیبر لا کے تحت، زیادہ تر ملازمین کو جب ان کی ملازمت ختم ہوتی ہے تو ایک بڑی ادائیگی ملتی ہے۔
        </p>
        <p className="text-gray-300 text-lg leading-relaxed mt-4">
          Sauditoolhub کی مفت{' '}
          <Link href="/eosb-calculator" className="text-desert-primary font-bold underline">
            EOSB کیلکولیٹر
          </Link>{' '}
          آپ کا معاوضہ تی 계산 کرنے میں مدد کرتا ہے۔ اس گائیڈ میں ہم واضح کرتے ہیں کہ 2026 میں EOSB کیسے حساب کیا جاتا ہے، آرٹیکل 84 اور 85 کا مطلب کیا ہے، اور کون سی غلطیوں سے پرے رہیں۔
        </p>
      </div>

      <h2>ملازمت کے اختتامی معاوضہ EOSB کیا ہے؟</h2>
      <p>یہ ایک لازمی بڑی ادائیگی ہے جو سعودی آجر ملازمین کو ان کے معاہدے کے اختتام پر دینا لازم ہے۔ یہ آرٹیکل 84 اور 85 کے تحت ہے۔ یہ نہ صرف سعودی بلکہ مقیم ملازمین دونوں پر لاگو ہوتا ہے۔</p>

      <h2>EOSB حساب کے قواعد 2026</h2>
      <div className="not-prose glass p-4 rounded-xl mb-6">
        <ul className="space-y-3 text-gray-300">
          <li><strong className="text-desert-primary">پہلے 5 سال:</strong> ہر سال کے لیے آدھی ماہانہ بنیادی تنخواہ۔</li>
          <li><strong className="text-desert-primary">5 سال کے بعد:</strong> ہر سال کے لیے پوری ماہانہ بنیادی تنخواہ۔</li>
          <li><strong className="text-desert-primary">جزوی سال:</strong> تناسب سے حساب ہوتا ہے۔</li>
          <li><strong className="text-desert-primary">استعفیٰ پر کمی:</strong> آرٹیکل 85 لاگو ہوتا ہے اگر آپ معاہدہ ختم ہونے سے پہلے استعفیٰ دیں۔</li>
          <li><strong className="text-desert-primary">مقررہ مدت کے معاہدہ:</strong> آجر جلد استعفیٰ پر 50% تک کٹوتی کر سکتا ہے۔</li>
        </ul>
      </div>

      <h2>EOSB حساب کرنے کا طریقہ</h2>
      <div className="not-prose glass p-6 rounded-xl mb-8">
        <ol className="space-y-4 text-gray-300 list-decimal list-inside">
          <li><strong>پہلا مرحلہ:</strong> اپنی ماہانہ بنیادی تنخواہ نوٹ کریں۔</li>
          <li><strong>دوسرا مرحلہ:</strong> کل خدمت کے سالوں اور مہینوں کا حساب لگائیں۔</li>
          <li><strong>تیسرا مرحلہ:</strong> آرٹیکل 84 لاگو کریں۔</li>
          <li><strong>چوتھا مرحلہ:</strong> استعفیٰ دیتے ہوئے آرٹیکل 85 چیک کریں۔</li>
          <li><strong>پانچواں مرحلہ:</strong> جزوی سالوں کے تناسبے شامل کریں۔</li>
        </ol>
      </div>

      <h2>اکثر پوچھے گئے سوالات</h2>
      {faqsUr.map((faq, i) => (
        <div key={i} className="not-prose glass p-4 rounded-xl mb-4">
          <h3 className="text-white font-semibold mb-2">{faq.question}</h3>
          <p className="text-gray-400 text-sm">{faq.answer}</p>
        </div>
      ))}

      <h2>نتیجہ</h2>
      <p>EOSB سعودی عرب میں ملازمین کے لیے ایک اہم مالی فائدہ ہے۔ آرٹیکل 84 اور 85 کو سمجھ کر آپ مہنگے غلطوں سے بچ سکتے ہیں۔ ہمیشہHR سے تصدیق کریں قبل از خروج دستخط کریں۔</p>

      <div className="not-prose glass p-6 rounded-xl mt-8 text-center">
        <Calculator className="h-10 w-10 text-desert-primary mx-auto mb-3" />
        <h3 className="text-white text-lg font-bold mb-2">اپنا EOSB ابھی حساب کریں</h3>
        <p className="text-gray-400 text-sm mb-4">مفت فوری تخمینہ — بغیر کسی سائن اپ کے</p>
        <Link href="/eosb-calculator" className="inline-flex items-center gap-2 rounded-xl bg-desert-primary px-8 py-3 text-sm font-bold text-white transition-all hover:bg-desert-primary-dim">
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
      <h1>Kumpletong Gabay sa End of Service Benefit EOSB sa Saudi Arabia 2026</h1>

      <div className="not-prose glass p-6 rounded-xl mb-8">
        <p className="text-gray-300 text-lg leading-relaxed">
          Mag-iingat ka ba sa iyong trabaho sa Saudi Arabia? Isa sa pinakamahalagang financial question na makikita mo ay ang iyong End of Service Benefit, na kilala rin bilang EOSB o gratuity. Sa ilalim ng Saudi Labor Law, karamihan sa mga empleyado ay may karapatang tumanggap ng lump-sum payment kapag natapos ang kanilang kontrata.
        </p>
        <p className="text-gray-300 text-lg leading-relaxed mt-4">
          Ang gabay na ito ay nagpapaliwanag kung paano kalkulahin ang EOSB sa 2026, ano ang ibig sabihin ng Article 84 at Article 85 para sa iyo, at ang mga karaniwang pagkakamali na nagmumukha ng mga libong Riyals sa mga expat. Gamitin ang aming{' '}
          <Link href="/eosb-calculator" className="text-desert-primary font-bold underline">
            EOSB Calculator
          </Link>{' '}
          para mag-estimate ng iyong benefit instantly.
        </p>
      </div>

      <h2>Ano ang End of Service Benefit EOSB?</h2>
      <p>Ang EOSB ay isang mandatory lump-sum payment na dapat ibigay ng mga Saudi employer sa mga empleyado kapag natapos ang kanilang employment contract. Ito ay pinatatakbo ng Saudi Labor Law Articles 84 at 85. Ang EOSB ay applicable pareho sa mga Saudi nationals at expatriates sa pribado at pampublikong sektor.</p>

      <h2>EOSB Calculation Rules Under Saudi Labor Law 2026</h2>
      <div className="not-prose glass p-4 rounded-xl mb-6">
        <ul className="space-y-3 text-gray-300">
          <li><strong className="text-desert-primary">Unang 5 taon:</strong> Kalahating buwan ng basic salary kada taon.</li>
          <li><strong className="text-desert-primary">Pagkatapos ng 5 taon:</strong> Isang buong buwanang basic salary kada taon.</li>
          <li><strong className="text-desert-primary">Partial years:</strong> Kalkulado nang proporsyonal.</li>
          <li><strong className="text-desert-primary">Resignation reduction:</strong> Article 85 ay applicable kung nag-resign ka bago matapos ang kontrata.</li>
          <li><strong className="text-desert-primary">Fixed-term contracts:</strong> Ang employer ay maaaring mag-deduct ng hanggang 50% para sa maagang pag-resign.</li>
        </ul>
      </div>

      <h2>Paano Kalkulahin ang EOSB Step by Step</h2>
      <div className="not-prose glass p-6 rounded-xl mb-8">
        <ol className="space-y-4 text-gray-300 list-decimal list-inside">
          <li><strong>Step 1:</strong> Tiyakin ang iyong basic monthly salary sa SAR.</li>
          <li><strong>Step 2:</strong> Kalkulahin ang kabuuang taon at buwan ng iyong serbisyo.</li>
          <li><strong>Step 3:</strong> Ilapat ang Article 84: kalahating buwan sa unang 5 taon, buong buwan para sa bawat karagdagang taon.</li>
          <li><strong>Step 4:</strong> Kung nag-resign ka, suriin ang Article 85 reduction rules.</li>
          <li><strong>Step 5:</strong> Idagdag ang proporsyonal na halaga para sa mga partial na buwan o taon.</li>
        </ol>
      </div>

      <h3>Real EOSB Calculation Example</h3>
      <div className="not-prose glass p-4 rounded-xl mb-4">
        <p className="text-gray-300"><strong>Halimbawa:</strong> Basic na sahod 10,000 SAR, 7 taon at 6 buwan na serbisyo, nag-resign pagkatapos ng 5 taon.</p>
        <p className="text-gray-300 mt-2">Unang 5 taon: 5 x 5,000 SAR = 25,000 SAR<br />Mga taon 6-7: 2 x 10,000 SAR = 20,000 SAR<br />Partial na 6 buwan: 0.5 x 10,000 SAR = 5,000 SAR<br />Kabuuang EOSB (Article 84): 50,000 SAR<br />Resignation reduction (5-10 taon): 2/3 inilapat<br />Final EOSB: 33,333 SAR</p>
      </div>

      <h2>Karaniwang EOSB Mistakes ng mga Expat</h2>
      <div className="not-prose glass p-4 rounded-xl mb-6">
        <ul className="space-y-3 text-gray-300">
          <li><strong>Mistake 1:</strong> Akala kasama sa EOSB ang housing at transport allowances. Karaniwang hindi.</li>
          <li><strong>Mistake 2:</strong> Nakakalimut ng unused vacation pay, na hiwalay sa EOSB.</li>
          <li><strong>Mistake 3:</strong> Hindi kumuha ng signed acknowledgment mula sa HR bago umalis.</li>
          <li><strong>Mistake 4:</strong> Hindi naiintindihan ang 2-year rule sa ilalim ng Article 85 para sa resignation EOSB.</li>
        </ul>
      </div>

      <h2>Mga Madalas Itanong Tungkol sa EOSB</h2>
      {faqsTl.map((faq, i) => (
        <div key={i} className="not-prose glass p-4 rounded-xl mb-4">
          <h3 className="text-white font-semibold mb-2">{faq.question}</h3>
          <p className="text-gray-400 text-sm">{faq.answer}</p>
        </div>
      ))}

      <h2>Konklusyon</h2>
      <p>Ang EOSB ay isa sa pinakamalaking financial benefits para sa mga empleyado sa Saudi Arabia. Ang pag-unawa sa Article 84 at Article 85 ay makakatulong upaiwasan ang magugugol na pagkakamali at tiyakin na makakatanggap ka ng buong halaga. Laging i-verify ang iyong final settlement sa HR bago pirmahan ang anumang exit documents.</p>
      <p>Kailangan mo ba ng mabilis na estimate? Gamitin ang aming libreng{' '}
        <Link href="/eosb-calculator" className="text-desert-primary font-bold underline">
          EOSB Calculator
        </Link>{' '}
        para kalkulahin ang iyong end of service benefit sa mga segundo. Libre, instant, at accurate.
      </p>

      <div className="not-prose glass p-6 rounded-xl mt-8 text-center">
        <Calculator className="h-10 w-10 text-desert-primary mx-auto mb-3" />
        <h3 className="text-white text-lg font-bold mb-2">Kalkulahin ang Iyong EOSB Ngayon</h3>
        <p className="text-gray-400 text-sm mb-4">Libreng instant estimate — hindi kailangan ng signup</p>
        <Link href="/eosb-calculator" className="inline-flex items-center gap-2 rounded-xl bg-desert-primary px-8 py-3 text-sm font-bold text-white transition-all hover:bg-desert-primary-dim">
          <Calculator className="h-4 w-4" />
          Gamitin ang Libreng EOSB Calculator
        </Link>
      </div>
    </article>
  )
}

function BnContent() {
  return (
    <article className="prose prose-invert max-w-none prose-headings:text-desert-primary prose-a:text-desert-primary prose-strong:text-white prose-li:text-gray-300">
      <h1>সাউদি আরবে ইন্ড অফ সার্ভিস বেনিফিটের সম্পূর্ণ গাইড 2026</h1>

      <div className="not-prose glass p-6 rounded-xl mb-8">
        <p className="text-gray-300 text-lg leading-relaxed">
          সাউদি আরবে আপনার কাজ ছেড়ে যাবেন? আপনার সাথে মুখোমুখি হওয়ার সবচেয়ে গুরুত্বপূর্ণ আর্থিক প্রশ্ন হল ইন্ড অফ সার্ভিস বেনিফিট, যাকে EOSB বা gratuity বলা হয়। সৌদি লেবর লাউয়ের অধীনে, অধিকাংশ কর্মচারীকে তাদের চাকরি শেষ হলে একটি লাম্প-সাম পেমেন্ট পাওয়ার অধিকার আছে।
        </p>
        <p className="text-gray-300 text-lg leading-relaxed mt-4">
          এই গাইডটি স্পষ্টভাবে ব্যাখ্যা করে 2026 সালে EOSB কীভাবে ক্যালকুলেট হয়, আর্টিকেল 84 এবং আর্টিকেল 85 আপনার জন্য কী অর্থ বহন করে, এবং বিদেশীদের হাজার হাজার রিয়াল খরচ করা সাধারণ ভুলগুলি। আমাদের বিনামূল্যে{' '}
          <Link href="/eosb-calculator" className="text-desert-primary font-bold underline">
            EOSB Calculator
          </Link>{' '}
          ব্যবহার করুন আপনার bénéfit অনুমান করতে তাৎক্ষণিকভাবে।
        </p>
      </div>

      <h2>ইন্ড অফ সার্ভিস বেনিফিট EOSB কী?</h2>
      <p>ইন্ড অফ সার্ভিস বেনিফিট হল একটি বাধ্যতামূলক লাম্প-সাম পেমেন্ট যা সৌদি কর্মদাতাদের চাকরি শেষ হলে কর্মচারীদের দিতে হবে। এটি সৌদি লেবর লাও আইন 84 এবং 85 দ্বারা নিয়ন্ত্রিত। EOSB গৃহীত হয় সৌদি নাগরিক এবং বেসরকারি ও সরকারি খাতে কর্মরত বিদেশী উভয়ের জন্য।</p>

      <h2>সৌদি লেবর লাও 2026 অança EOSB ক্যালকুলেশন নিয়ম</h2>
      <div className="not-prose glass p-4 rounded-xl mb-6">
        <ul className="space-y-3 text-gray-300">
          <li><strong className="text-desert-primary">প্রথম ৫ বছর:</strong> প্রতি বছরে আধা মাসিক বেসিক স্যালারি।</li>
          <li><strong className="text-desert-primary">৫ বছরের পর:</strong> প্রতি বছরে এক পূর্ণ মাসিক বেসিক স্যালারি।</li>
          <li><strong className="text-desert-primary">আংশিক বছর:</strong> আনুপাতিকভাবে ক্যালকুলেট হয়।</li>
          <li><strong className="text-desert-primary">রেজিগনেশন কাটছাঁট:</strong> আর্টিকেল 85 প্রযোজ্য যদি কনট্র্যাক্ট শেষ হওয়ার আগে রেজিগন করেন।</li>
          <li><strong className="text-desert-primary">ফিক্সড-টার্ম কনট্র্যাক্ট:</strong> কর্মদাতা শীঘ্র রেজিগনের জন্য ৫০% পর্যন্ত কাটছাঁট করতে পারে।</li>
        </ul>
      </div>

      <h2>EOSB কীভাবে ক্যালকুলেট করবেন - ধাপে ধাপে</h2>
      <div className="not-prose glass p-6 rounded-xl mb-8">
        <ol className="space-y-4 text-gray-300 list-decimal list-inside">
          <li><strong>ধাপ 1:</strong> আপনার মাসিক বেসিক স্যালারি নোট করুন SAR তে।</li>
          <li><strong>ধাপ 2:</strong> আপনার ক্রমাগত সেবার মোট বছর ও মাস ক্যালকুলেট করুন।</li>
          <li><strong>ধাপ 3:</strong> আর্টিকেল 84 প্রয়োগ করুন: প্রথম ৫ বছরের জন্য আধা মাসিক, অতিরিক্ত বছরের জন্য পুরো মাসিক।</li>
          <li><strong>ধাপ 4:</strong> যদি রেজিগন করেন, তাহলে আর্টিকেল 85 এর কাটছাঁট নিয়ম চেক করুন।</li>
          <li><strong>ধাপ 5:</strong> আংশিক মাস বা বছরের জন্য আনুপাতিক পরিমাণ যোগ করুন।</li>
        </ol>
      </div>

      <h3>প্রকৃত EOSB ক্যালকুলেশন উদাহরণ</h3>
      <div className="not-prose glass p-4 rounded-xl mb-4">
        <p className="text-gray-300"><strong>উদাহরণ:</strong> বেসিক স্যালারি 10,000 SAR, ৭ বছর ৬ মাস সেবা, ৫ বছরের পরে রেজিগন।</p>
        <p className="text-gray-300 mt-2">প্রথম ৫ বছর: ৫ x 5,000 SAR = 25,000 SAR<br />বছর 6-7: 2 x 10,000 SAR = 20,000 SAR<br />আংশিক ৬ মাস: 0.5 x 10,000 SAR = 5,000 SAR<br />মোট EOSB (আর্টিকেল 84): 50,000 SAR<br />রেজিগন কাটছাঁট (5-10 বছর): ২/৩ প্রয়োগ<br />চূড়ান্ত EOSB: 33,333 SAR</p>
      </div>

      <h2>বিদেশীদের যেসব ভুল করে থাকে</h2>
      <div className="not-prose glass p-4 rounded-xl mb-6">
        <ul className="space-y-3 text-gray-300">
          <li><strong>ভুল 1:</strong> মনে করা EOSB এ হাউজিং এবং ট্রান্সপোর্ট অ্যালোয়েন্স শামিল। সাধারণত তা হয় না।</li>
          <li><strong>ভুল 2:</strong> অব্যবহৃত বকায়িত ছুটি দাবি করা ভুলে যাওয়া, যা EOSB থেকে আলাদা।</li>
          <li><strong>ভুল 3:</strong> ছেড়ে যাওয়ার আগে HR থেকে স্বাক্ষরিত সwaardীকৃতিপ্তি নেওয়া না করা।</li>
          <li><strong>ভুল 4:</strong> আর্টিকেল 85 এর ২-বছর নিয়ম মিস করা।</li>
        </ul>
      </div>

      <h2>EOSB সম্পর্কে প্রায়শই জিজ্ঞাসিত প্রশ্ন</h2>
      {faqsBn.map((faq, i) => (
        <div key={i} className="not-prose glass p-4 rounded-xl mb-4">
          <h3 className="text-white font-semibold mb-2">{faq.question}</h3>
          <p className="text-gray-400 text-sm">{faq.answer}</p>
        </div>
      ))}

      <h2>উপসংহার</h2>
      <p>EOSB সৌদি আরবে কর্মচারীদের জন্য সবচেয়ে গুরুত্বপূর্ণ আর্থিক সুবিধাগুলোর মধ্যে একটি। আর্টিকেল 84 এবং 85 বোঝা আপনাকে ব্যয়বহুল ভুল এড়াতে এবং আপনি প্রাপ্য সম্পূর্ণ পরিমাণ পান তা নিশ্চিত করতে সহায়তা করতে পারে। কোনও প্রস্থান নথিতে স্বাক্ষর করার আগে সর্বদা আপনার চূড়ান্ত নিষ্পত্তি HR-এর সাথে যাচাই করুন।</p>
      <p>দ্রুত আনুমানিক হিসাব দরকার? আমাদের বিনামূল্যের{' '}
        <Link href="/eosb-calculator" className="text-desert-primary font-bold underline">
          EOSB Calculator
        </Link>{' '}
        ব্যবহার করুন সেকেন্ডের মধ্যে আপনার EOSB গণনা করতে। বিনামূল্যে, তাৎক্ষণিক এবং নির্ভুল।
      </p>

      <div className="not-prose glass p-6 rounded-xl mt-8 text-center">
        <Calculator className="h-10 w-10 text-desert-primary mx-auto mb-3" />
        <h3 className="text-white text-lg font-bold mb-2">এখনই আপনার EOSB ক্যালকুলেট করুন</h3>
        <p className="text-gray-400 text-sm mb-4">বিনামূল্যে তাৎক্ষণিক অনুমান — সাইনআপ প্রয়োজন নেই</p>
        <Link href="/eosb-calculator" className="inline-flex items-center gap-2 rounded-xl bg-desert-primary px-8 py-3 text-sm font-bold text-white transition-all hover:bg-desert-primary-dim">
          <Calculator className="h-4 w-4" />
          বিনামূল্যের EOSB ক্যালকুলেটর ব্যবহার করুন
        </Link>
      </div>
    </article>
  )
}

export default async function EOSBGuidePage({ params }: Props) {
  const { locale } = await params
  const isAr = locale === 'ar'
  const isUr = locale === 'ur'
  const isTl = locale === 'tl'
  const isBn = locale === 'bn'
  const isDefault = locale === 'en'
  const pageUrl = isDefault ? `${baseUrl}/guide/eosb-end-of-service-benefit-saudi-arabia-2026` : `${baseUrl}/${locale}/guide/eosb-end-of-service-benefit-saudi-arabia-2026`

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
          { name: isAr ? 'أدلة المقيمين' : isUr ? 'مقیم گائیڈز' : isTl ? 'Gabay para sa Expat' : isBn ? 'প্রবাসী গাইড' : 'Expat Guides', url: `${baseUrl}/${isDefault ? '' : locale + '/'}expat-tools` },
          { name: isAr ? 'دليل EOSB' : isUr ? 'EOSB گائیڈ' : isTl ? 'Gabay sa EOSB' : isBn ? 'EOSB গাইড' : 'EOSB Guide', url: pageUrl },
        ]}
      />
      <FAQJsonLd items={faqItems} />

      <div className="relative z-10">
        <section className="px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-6xl">
            {isAr ? <ArContent /> : isUr ? <UrContent /> : isTl ? <TlContent /> : isBn ? <BnContent /> : <EnContent />}
            <RelatedTools locale={locale} />
          </div>
        </section>
      </div>
    </>
  )
}
