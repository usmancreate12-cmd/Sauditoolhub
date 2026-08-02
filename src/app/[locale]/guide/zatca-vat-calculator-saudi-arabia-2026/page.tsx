import type { Metadata } from 'next'
import Link from 'next/link'
import { BreadcrumbJsonLd, FAQJsonLd, ArticleJsonLd } from '@/components/JsonLd'
import { Calculator, FileText, AlertTriangle, CheckCircle, Receipt, ArrowRight } from 'lucide-react'

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
    ? 'الدليل الكامل لضريبة القيمة المضافة والفوترة الإلكترونية (فاتورة) في السعودية 2026 | Sauditoolhub'
    : isUr
    ? 'سعودی عرب میں ZATCA ویٹ اور ای-انوائسنگ (فاتورة) کا مکمل گائیڈ 2026 | Sauditoolhub'
    : isTl
    ? 'Kumpletong Gabay sa ZATCA VAT at E-Invoicing (Fatoora) sa Saudi Arabia 2026 | Sauditoolhub'
    : isBn
    ? 'সৌদি আরবে ZATCA VAT এবং ই-ইনভয়েসিং (ফাতুরা) সম্পূর্ণ গাইড 2026 | Sauditoolhub'
    : 'Complete Guide to ZATCA VAT & E-Invoicing (Fatoora) in Saudi Arabia 2026 | Sauditoolhub'

  const description = isAr
    ? 'دليل كامل لضريبة القيمة المضافة والفوترة الإلكترونية في السعودية 2026. تعرف على المرحلة الثانية من فاتورة، حساب ضريبة القيمة المضافة بنسبة 15%، والإقرارات الضريبية.'
    : isUr
    ? 'سعودی عرب میں ZATCA ویٹ اور ای-انوائسنگ کا مکمل گائیڈ 2026۔ فاتورة کے مرحلہ دوم، 15% ویٹ کا حساب، اور ٹیکس ریٹرن۔'
    : isTl
    ? 'Kumpletong gabay sa ZATCA VAT at e-invoicing sa Saudi Arabia 2026. Alamin ang Phase 2 ng Fatoora, 15% VAT calculation, at paghahain ng tax returns.'
    : isBn
    ? 'সৌদি আরবে ZATCA VAT এবং ই-ইনভয়েসিংয়ের সম্পূর্ণ গাইড 2026। ফাতুরার দ্বিতীয় ধাপ, ১৫% VAT গণনা এবং কর রিটার্ন দাখিল সম্পর্কে জানুন।'
    : 'Complete guide to ZATCA VAT and e-invoicing Fatoora in Saudi Arabia 2026. Learn Phase 2 integration rules, 15% VAT calculation, B2B vs B2C invoices, and filing tax returns.'

  return {
    title,
    description,
    alternates: {
      canonical: isDefault ? `${baseUrl}/guide/zatca-vat-calculator-saudi-arabia-2026` : `${baseUrl}/${locale}/guide/zatca-vat-calculator-saudi-arabia-2026`,
      languages: {
        en: `${baseUrl}/guide/zatca-vat-calculator-saudi-arabia-2026`,
        ar: `${baseUrl}/ar/guide/zatca-vat-calculator-saudi-arabia-2026`,
        ur: `${baseUrl}/ur/guide/zatca-vat-calculator-saudi-arabia-2026`,
        tl: `${baseUrl}/tl/guide/zatca-vat-calculator-saudi-arabia-2026`,
        bn: `${baseUrl}/bn/guide/zatca-vat-calculator-saudi-arabia-2026`,
      },
    },
    openGraph: {
      title,
      description,
      url: isDefault ? `${baseUrl}/guide/zatca-vat-calculator-saudi-arabia-2026` : `${baseUrl}/${locale}/guide/zatca-vat-calculator-saudi-arabia-2026`,
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
  headline: 'The Complete Guide to ZATCA VAT & E-Invoicing (Fatoora) in Saudi Arabia 2026',
  description: 'A complete guide to ZATCA VAT and e-invoicing in Saudi Arabia 2026. Covers Phase 2 Fatoora integration, 15% VAT calculation, B2B vs B2C invoices, and how to file VAT returns.',
  author: { '@type': 'Person', name: 'Sauditoolhub Team' },
  publisher: { '@type': 'Organization', name: 'Sauditoolhub', logo: { '@type': 'ImageObject', url: `${baseUrl}/logo.png` } },
  datePublished: '2026-01-01',
  dateModified: '2026-07-01',
}

const schemaAr = {
  ...articleSchemaEn,
  headline: 'الدليل الكامل لضريبة القيمة المضافة والفوترة الإلكترونية (فاتورة) في السعودية 2026',
  description: 'دليل كامل لضريبة القيمة المضافة والفوترة الإلكترونية في السعودية 2026. يشرح المرحلة الثانية من فاتورة، حساب 15% ضريبة القيمة المضافة، وفروق فواتير B2B و B2C.',
}

const schemaUr = {
  ...articleSchemaEn,
  headline: 'سعودی عرب میں ZATCA ویٹ اور ای-انوائسنگ (فاتورة) کا مکمل گائیڈ 2026',
  description: 'سعودی عرب میں ZATCA ویٹ اور ای-انوائسنگ کا مکمل گائیڈ 2026۔ فاتورة کے مرحلہ دوم، 15% ویٹ کا حساب، B2B اور B2C انوائسز، اور ٹیکس ریٹرن۔',
}

const schemaTl = {
  ...articleSchemaEn,
  headline: 'Kumpletong Gabay sa ZATCA VAT at E-Invoicing (Fatoora) sa Saudi Arabia 2026',
  description: 'Isang kumpletong gabay sa ZATCA VAT at e-invoicing sa Saudi Arabia 2026. Saklaw ang Phase 2 Fatoora integration, 15% VAT calculation, B2B vs B2C invoices, at tax returns.',
}

const schemaBn = {
  ...articleSchemaEn,
  headline: 'সৌদি আরবে ZATCA VAT এবং ই-ইনভয়েসিং (ফাতুরা) সম্পূর্ণ গাইড 2026',
  description: 'সৌদি আরবে ZATCA VAT এবং ই-ইনভয়েসিংয়ের সম্পূর্ণ গাইড 2026। ফাতুরার দ্বিতীয় ধাপ, ১৫% VAT গণনা, B2B বনাম B2C ইনভয়েস এবং ট্যাক্স রিটার্ন দাখিল।',
}

const faqsEn = [
  { question: 'What is the current VAT rate in Saudi Arabia for 2026?', answer: 'The VAT rate in Saudi Arabia is 15%, which has been in effect since July 1, 2020. This rate applies to most goods and services, with certain exceptions for healthcare, education, and specific financial services that remain exempt or zero-rated.' },
  { question: 'What is ZATCA Fatoora e-invoicing Phase 2?', answer: 'Fatoora Phase 2 (Integration Phase) requires businesses to integrate their invoicing systems directly with ZATCA\'s platform. Invoices must be generated in a specific XML format, include a cryptographic QR code, and be transmitted to ZATCA in real time or near-real time. Phase 2 applies to medium and large businesses first, with smaller businesses phased in later.' },
  { question: 'What is the difference between B2B and B2C invoices under ZATCA?', answer: 'A B2B (Standard Tax Invoice) requires the buyer\'s tax registration number, both parties\' details, a detailed description of goods/services, unit price, VAT amount per line, and total VAT. A B2C (Simplified Tax Invoice) for retail customers only needs the seller\'s details, description, total amount including VAT, and a QR code. B2B invoices are more detailed.' },
  { question: 'How do I calculate 15% VAT in Saudi Arabia?', answer: 'To add VAT: Price × 0.15 = VAT amount. Total = Price + VAT. To extract VAT from a total: Total ÷ 1.15 × 0.15 = VAT amount. For example, 1,000 SAR × 0.15 = 150 SAR VAT, total = 1,150 SAR. Or from 1,150 SAR total: 1,150 ÷ 1.15 × 0.15 = 150 SAR VAT.' },
  { question: 'Who needs to register for VAT in Saudi Arabia?', answer: 'Businesses with taxable supplies exceeding 375,000 SAR annually must register for VAT (mandatory threshold). Businesses with supplies between 187,500 SAR and 375,000 SAR have the option to register voluntarily. Below 187,500 SAR, registration is not required.' },
  { question: 'How often must VAT returns be filed in Saudi Arabia?', answer: 'VAT returns are filed monthly or quarterly, depending on your annual supplies. Businesses with annual supplies exceeding 40 million SAR must file monthly. Businesses below this threshold can file quarterly. Returns must be submitted within the first 30 days following the end of the tax period.' },
  { question: 'What is input VAT and output VAT in Saudi Arabia?', answer: 'Output VAT is the tax you collect from your customers on taxable sales. Input VAT is the tax you pay on your business purchases and expenses. The difference (Output VAT minus Input VAT) is what you remit to ZATCA. If Input VAT exceeds Output VAT, you can claim a refund.' },
  { question: 'What happens if a business does not comply with ZATCA e-invoicing?', answer: 'Non-compliance with ZATCA e-invoicing rules can result in penalties: fines up to 50,000 SAR for missing QR codes, up to 100,000 SAR for incorrect invoice formats, and up to 1 million SAR for tax evasion or deliberate non-compliance. ZATCA also has the authority to suspend business operations in severe cases.' },
  { question: 'What must be included on a standard tax invoice in Saudi Arabia?', answer: 'A standard tax invoice (B2B) must include: invoice number and date, seller\'s name and VAT registration number, buyer\'s name and VAT registration number, description of goods/services, quantity and unit price, VAT amount per line, total VAT amount, total payable including VAT, and a QR code containing specific invoice data as per ZATCA requirements.' },
  { question: 'How can I check my ZATCA VAT registration status?', answer: 'You can check your VAT registration status through the ZATCA online portal (zatca.gov.sa). Log in with your credentials, navigate to the VAT section, and view your registration certificate. You can also verify a business\'s VAT number through the ZATCA verification service.' },
]

const faqsAr = [
  { question: 'ما هو معدل ضريبة القيمة المضافة الحالي في السعودية 2026؟', answer: 'نسبة ضريبة القيمة المضافة في السعودية هي 15%، سارية منذ 1 يوليو 2020. تنطبق على معظم السلع والخدمات، مع استثناءات للرعاية الصحية والتعليم والخدمات المالية المحددة.' },
  { question: 'ما هي المرحلة الثانية من الفوترة الإلكترونية (فاتورة) من زاتكا؟', answer: 'المرحلة الثانية (مرحلة التكامل) تتطلب دمج أنظمة الفوترة مع منصة زاتكا. يجب إنشاء الفواتير بتنسيق XML محدد، تضمين رمز QR تشفيري، ونقلها لزاتكا في الوقت الفعلي. تطبق على المنشآت المتوسطة والكبيرة أولاً.' },
  { question: 'ما الفرق بين فاتورة B2B و B2C وفقاً لزاتكا؟', answer: 'فاتورة B2B تتطلب الرقم الضريبي للمشتري وتفاصيل الطرفين ووصف تفصيلي للسلع ومبلغ ضريبة القيمة المضافة لكل بند. فاتورة B2C المبسطة تحتاج فقط تفاصيل البائع والوصف والإجمالي شامل الضريبة ورمز QR.' },
  { question: 'كيف أحسب ضريبة القيمة المضافة 15% في السعودية؟', answer: 'لإضافة الضريبة: السعر × 0.15 = مبلغ الضريبة. الإجمالي = السعر + الضريبة. لاستخراج الضريبة من المبلغ الإجمالي: الإجمالي ÷ 1.15 × 0.15 = مبلغ الضريبة.' },
  { question: 'من يجب عليه التسجيل في ضريبة القيمة المضافة في السعودية؟', answer: 'المنشآت التي تتجاوز توريداتها الخاضعة للضريبة 375,000 ريال سنوياً يجب أن تسجل. المنشآت التي تتراوح توريداتها بين 187,500 و 375,000 ريال يمكنها التسجيل طواعية.' },
  { question: 'كم مرة يجب تقديم إقرارات ضريبة القيمة المضافة في السعودية؟', answer: 'تقدم الإقرارات شهرياً أو ربع سنوياً حسب حجم التوريدات السنوية. المنشآت التي تتجاوز 40 مليون ريال سنوياً تقدم شهرياً. يجب تقديم الإقرار خلال أول 30 يوماً بعد نهاية الفترة الضريبية.' },
  { question: 'ما هي ضريبة المدخلات والمخرجات في السعودية؟', answer: 'ضريبة المخرجات هي الضريبة التي تحصّلها من عملائك على المبيعات الخاضعة للضريبة. ضريبة المدخلات هي الضريبة التي تدفعها على مشترياتك. الفرق بينهما هو ما تدفعه لزاتكا.' },
  { question: 'ماذا يحدث إذا لم تلتزم المنشأة بالفوترة الإلكترونية؟', answer: 'عدم الامتثال يؤدي إلى غرامات: حتى 50,000 ريال لعدم وجود رمز QR، حتى 100,000 ريال لتنسيق فواتير خاطئ، وحتى مليون ريال للتهرب الضريبي.' },
  { question: 'ما الذي يجب تضمينه في الفاتورة الضريبية القياسية في السعودية؟', answer: 'يجب أن تتضمن: رقم وتاريخ الفاتورة، اسم البائع ورقم تسجيله الضريبي، اسم المشتري ورقمه الضريبي، وصف السلع/الخدمات، الكمية والسعر، مبلغ الضريبة لكل بند، إجمالي الضريبة، الإجمالي شامل الضريبة، ورمز QR.' },
  { question: 'كيف يمكنني التحقق من حالة التسجيل في ضريبة القيمة المضافة؟', answer: 'يمكنك التحقق عبر بوابة زاتكا zatca.gov.sa. سجل الدخول، انتقل إلى قسم ضريبة القيمة المضافة، واعرض شهادة التسجيل. يمكنك أيضاً التحقق من الرقم الضريبي لأي منشأة عبر خدمة التحقق.' },
]

const faqsUr = [
  { question: '2026 میں سعودی عرب میں ویٹ کی موجودہ شرح کیا ہے؟', answer: 'سعودی عرب میں ویٹ کی شرح 15% ہے، جو 1 جولائی 2020 سے نافذ ہے۔ یہ زیادہ تر اشیاء اور خدمات پر لاگو ہوتی ہے، سوائے صحت، تعلیم، اور مخصوص مالی خدمات کے۔' },
  { question: 'ZATCA Fatoora ای-انوائسنگ کا مرحلہ دوم کیا ہے؟', answer: 'مرحلہ دوم (انٹیگریشن) میں کاروبار کو ZATCA کے پلیٹ فارم سے اپنے سسٹمز کو مربوط کرنا ہوتا ہے۔ انوائسز XML فارمیٹ میں ہونی چاہئیں، جس میں خفیہ QR کوڈ شامل ہو، اور حقیقی وقت میں ZATCA کو بھیجی جائیں۔' },
  { question: 'ZATCA کے تحت B2B اور B2C انوائس میں کیا فرق ہے؟', answer: 'B2B انوائس میں خریدار کا ٹیکس نمبر، دونوں فریقوں کی تفصیلات، اشیاء کی تفصیل، VAT فی لائن، اور کل VAT شامل ہوتا ہے۔ B2C انوائس میں صرف بیچنے والے کی تفصیل، کل رقم اور QR کوڈ ہوتا ہے۔' },
  { question: 'سعودی عرب میں 15% ویٹ کیسے حساب کریں؟', answer: 'ویٹ شامل کرنے کے لیے: قیمت × 0.15 = VAT رقم۔ کل = قیمت + VAT۔ کل سے VAT نکالنے کے لیے: کل ÷ 1.15 × 0.15 = VAT رقم۔' },
  { question: 'سعودی عرب میں VAT کے لیے کس کو رجسٹر ہونا چاہیے؟', answer: 'جن کاروباروں کی قابل ٹیکس سپلائی 375,000 SAR سالانہ سے زیادہ ہے انہیں رجسٹر ہونا لازمی ہے۔ 187,500 سے 375,000 SAR کے درمیان والے رضاکارانہ طور پر رجسٹر کر سکتے ہیں۔' },
  { question: 'سعودی عرب میں VAT ریٹرن کتنی بار جمع کرانا ہوتا ہے؟', answer: 'سالانہ سپلائی 40 ملین SAR سے زیادہ ہو تو ماہانہ، ورنہ سہ ماہی۔ ریٹرن ٹیکس مدت ختم ہونے کے 30 دنوں میں جمع کرانا ہوتا ہے۔' },
  { question: 'انپٹ VAT اور آؤٹ پٹ VAT کیا ہے؟', answer: 'آؤٹ پٹ VAT وہ ٹیکس ہے جو آپ گاہکوں سے وصول کرتے ہیں۔ انپٹ VAT وہ ہے جو آپ خریداری پر ادا کرتے ہیں۔ فرق (آؤٹ پٹ − انپٹ) ZATCA کو ادا کیا جاتا ہے۔' },
  { question: 'اگر کاروبار ZATCA ای-انوائسنگ کی تعمیل نہ کرے تو کیا ہوتا ہے؟', answer: 'QR کوڈ نہ ہونے پر 50,000 SAR تک، غلط فارمیٹ پر 100,000 SAR تک، اور ٹیکس چوری پر 10 لاکھ SAR تک جرمانہ ہو سکتا ہے۔' },
  { question: 'سعودی عرب میں معیاری ٹیکس انوائس میں کیا شامل ہونا چاہیے؟', answer: 'انوائس نمبر اور تاریخ، بیچنے والے کا نام اور VAT نمبر، خریدار کا نام اور VAT نمبر، اشیاء کی تفصیل، مقدار اور قیمت، VAT فی لائن، کل VAT، کل رقم بشمول VAT، اور QR کوڈ۔' },
  { question: 'اپنی VAT رجسٹریشن کی حیثیت کیسے چیک کروں؟', answer: 'ZATCA پورٹل zatca.gov.sa پر لاگ ان ہو کر VAT سیکشن میں جائیں۔ آپ ZATCA کی تصدیقی سروس کے ذریعے کسی بھی کاروبار کا VAT نمبر چیک کر سکتے ہیں۔' },
]

const faqsTl = [
  { question: 'Ano ang kasalukuyang VAT rate sa Saudi Arabia para sa 2026?', answer: 'Ang VAT rate sa Saudi Arabia ay 15%, na epektibo mula noong Hulyo 1, 2020. Nalalapat ito sa karamihan ng mga produkto at serbisyo, maliban sa healthcare, edukasyon, at ilang financial services.' },
  { question: 'Ano ang ZATCA Fatoora e-invoicing Phase 2?', answer: 'Ang Phase 2 (Integration Phase) ay nangangailangan ng mga negosyo na isama ang kanilang invoicing system sa ZATCA platform. Dapat ang mga invoice ay nasa XML format, may cryptographic QR code, at ipadala sa ZATCA sa real time.' },
  { question: 'Ano ang pagkakaiba ng B2B at B2C invoice sa ilalim ng ZATCA?', answer: 'Ang B2B (Standard Tax Invoice) ay nangangailangan ng tax registration number ng buyer, detalye ng parehong partido, at VAT amount per line. Ang B2C (Simplified Tax Invoice) ay nangangailangan lamang ng seller details, total amount, at QR code.' },
  { question: 'Paano kalkulahin ang 15% VAT sa Saudi Arabia?', answer: 'Para magdagdag ng VAT: Presyo × 0.15 = halaga ng VAT. Total = Presyo + VAT. Para kunin ang VAT mula sa total: Total ÷ 1.15 × 0.15 = halaga ng VAT.' },
  { question: 'Sino ang kailangang magparehistro para sa VAT sa Saudi Arabia?', answer: 'Ang mga negosyo na may taxable supplies na lampas sa 375,000 SAR taun-taon ay dapat magparehistro. Ang may supplies sa pagitan ng 187,500 at 375,000 SAR ay maaaring magparehistro ng kusang-loob.' },
  { question: 'Gaano kadalas dapat mag-file ng VAT returns sa Saudi Arabia?', answer: 'Ang VAT returns ay isinasampa buwan-buwan o quarterly, depende sa annual supplies. Ang lampas sa 40 million SAR ay dapat mag-file monthly. Dapat isumite ang return sa unang 30 araw pagkatapos ng tax period.' },
  { question: 'Ano ang input VAT at output VAT sa Saudi Arabia?', answer: 'Ang Output VAT ay ang tax na iyong kinokolekta mula sa iyong mga customer. Ang Input VAT ay ang tax na iyong binabayaran sa iyong business purchases. Ang difference ay kung ano ang iyong ibinabayad sa ZATCA.' },
  { question: 'Ano ang mangyayari kung ang negosyo ay hindi sumunod sa ZATCA e-invoicing?', answer: 'Ang hindi pagsunod ay maaaring magresulta sa mga parusa: multa hanggang 50,000 SAR para sa nawawalang QR code, hanggang 100,000 SAR para sa maling format, at hanggang 1 million SAR para sa tax evasion.' },
  { question: 'Ano ang dapat isama sa isang standard tax invoice sa Saudi Arabia?', answer: 'Dapat isama ang: invoice number at date, pangalan ng seller at VAT registration number, pangalan ng buyer at VAT number, deskripsyon ng produkto/serbisyo, dami at presyo, VAT amount per line, total VAT, total payable kasama ang VAT, at QR code.' },
  { question: 'Paano ko masusuri ang aking ZATCA VAT registration status?', answer: 'Maaari mong suriin ang iyong VAT registration status sa pamamagitan ng ZATCA online portal sa zatca.gov.sa. Maaari mo ring i-verify ang VAT number ng kahit anong negosyo sa pamamagitan ng ZATCA verification service.' },
]

const faqsBn = [
  { question: '2026 সালে সৌদি আরবে বর্তমান VAT হার কত?', answer: 'সৌদি আরবে VAT হার 15%, যা 1 জুলাই 2020 থেকে কার্যকর। এটি বেশিরভাগ পণ্য ও পরিষেবার ক্ষেত্রে প্রযোজ্য, স্বাস্থ্যসেবা, শিক্ষা এবং নির্দিষ্ট আর্থিক পরিষেবাগুলি বাদ দিয়ে।' },
  { question: 'ZATCA Fatoora ই-ইনভয়েসিং ফেজ 2 কী?', answer: 'ফেজ 2 (ইন্টিগ্রেশন ফেজ) ব্যবসায়গুলিকে ZATCA প্ল্যাটফর্মের সাথে তাদের ইনভয়েসিং সিস্টেম সংযুক্ত করতে প্রয়োজন। ইনভয়েসগুলি নির্দিষ্ট XML ফরম্যাটে হতে হবে, ক্রিপ্টোগ্রাফিক QR কোড অন্তর্ভুক্ত করতে হবে এবং রিয়েল টাইমে ZATCA-তে প্রেরণ করতে হবে।' },
  { question: 'ZATCA-র অধীনে B2B এবং B2C ইনভয়েসের মধ্যে পার্থক্য কী?', answer: 'B2B (স্ট্যান্ডার্ড ট্যাক্স ইনভয়েস)-এ ক্রেতার ট্যাক্স রেজিস্ট্রেশন নম্বর, উভয় পক্ষের বিবরণ এবং VAT পরিমাণ প্রয়োজন। B2C (সরলীকৃত ট্যাক্স ইনভয়েস)-এ শুধুমাত্র বিক্রেতার বিবরণ, মোট পরিমাণ এবং QR কোড প্রয়োজন।' },
  { question: 'সৌদি আরবে 15% VAT কীভাবে গণনা করবেন?', answer: 'VAT যোগ করতে: মূল্য × 0.15 = VAT পরিমাণ। মোট = মূল্য + VAT। মোট থেকে VAT বের করতে: মোট ÷ 1.15 × 0.15 = VAT পরিমাণ।' },
  { question: 'সৌদি আরবে VAT-এর জন্য কাদের নিবন্ধন করতে হবে?', answer: 'যেসব ব্যবসার করযোগ্য সরবরাহ বার্ষিক 375,000 SAR-এর বেশি, তাদের নিবন্ধন বাধ্যতামূলক। 187,500 থেকে 375,000 SAR-এর মধ্যে থাকা ব্যবসাগুলি স্বেচ্ছায় নিবন্ধন করতে পারে।' },
  { question: 'সৌদি আরবে কতবার VAT রিটার্ন দাখিল করতে হয়?', answer: 'বার্ষিক সরবরাহ 40 মিলিয়ন SAR-এর বেশি হলে মাসিক, অন্যথায় ত্রৈমাসিক। কর মেয়াদ শেষ হওয়ার 30 দিনের মধ্যে রিটার্ন দাখিল করতে হবে।' },
  { question: 'সৌদি আরবে ইনপুট VAT এবং আউটপুট VAT কী?', answer: 'আউটপুট VAT হল আপনি আপনার গ্রাহকদের কাছ থেকে করযোগ্য বিক্রয়ে যে ট্যাক্স সংগ্রহ করেন। ইনপুট VAT হল আপনি আপনার ব্যবসায়িক ক্রয়ে যে ট্যাক্স প্রদান করেন। পার্থক্যটি ZATCA-তে জমা দেওয়া হয়।' },
  { question: 'যদি কোনো ব্যবসা ZATCA ই-ইনভয়েসিং মেনে না চলে তাহলে কী হয়?', answer: 'অ-সম্মতির ফলে জরিমানা হতে পারে: QR কোড না থাকায় 50,000 SAR পর্যন্ত, ভুল ইনভয়েস ফরম্যাটে 100,000 SAR পর্যন্ত, এবং কর ফাঁকির জন্য 1 মিলিয়ন SAR পর্যন্ত।' },
  { question: 'সৌদি আরবেতে স্ট্যান্ডার্ড ট্যাক্স ইনভয়েসে কী কী অন্তর্ভুক্ত করতে হবে?', answer: 'ইনভয়েস নম্বর ও তারিখ, বিক্রেতার নাম ও VAT নিবন্ধন নম্বর, ক্রেতার নাম ও VAT নম্বর, পণ্যের বিবরণ, পরিমাণ ও দাম, VAT পরিমাণ, মোট VAT, VAT সহ মোট পরিমাণ এবং QR কোড অন্তর্ভুক্ত করতে হবে।' },
  { question: 'কীভাবে আমার ZATCA VAT নিবন্ধন স্থিতি পরীক্ষা করব?', answer: 'ZATCA অনলাইন পোর্টাল zatca.gov.sa-এর মাধ্যমে আপনার VAT নিবন্ধন স্থিতি পরীক্ষা করতে পারেন। এছাড়াও ZATCA যাচাইকরণ পরিষেবার মাধ্যমে যেকোনো ব্যবসার VAT নম্বর যাচাই করতে পারেন।' },
]

function EnContent() {
  return (
    <article className="prose prose-invert max-w-none prose-headings:text-desert-primary prose-a:text-desert-primary prose-strong:text-white prose-li:text-gray-300">
      <h1>The Complete Guide to ZATCA VAT &amp; E-Invoicing (Fatoora) in Saudi Arabia 2026</h1>

      <div className="not-prose glass p-6 rounded-xl mb-8">
        <p className="text-gray-300 text-lg leading-relaxed">
          If you run a business in Saudi Arabia, ZATCA compliance is not optional. Since the introduction of the 15% Value Added Tax and the mandatory Fatoora e-invoicing system, businesses across the Kingdom have had to fundamentally change how they issue invoices, calculate tax, and report to the authorities. With Phase 2 of Fatoora now rolling out, the requirements have become even more stringent.
        </p>
        <p className="text-gray-300 text-lg leading-relaxed mt-4">
          This guide covers <strong>everything you need to know about ZATCA VAT and E-Invoicing in 2026</strong>. We explain the 15% VAT rate, the difference between Phase 1 and Phase 2 of Fatoora, B2B vs B2C invoice requirements, step-by-step VAT calculation formulas, real-life examples, and how to file your VAT returns.
        </p>
        <p className="text-gray-300 text-lg leading-relaxed mt-4">
          Use our free{' '}
          <Link href="/zatca-vat-calculator" className="text-desert-primary font-bold underline">
            ZATCA VAT Calculator
          </Link>{' '}
          to calculate VAT amounts, extract VAT from totals, and ensure your invoices are accurate — in seconds.
        </p>
      </div>

      <h2>What is VAT and ZATCA in Saudi Arabia?</h2>
      <p>
        Value Added Tax (VAT) is a consumption tax levied on the supply of most goods and services in Saudi Arabia. It was introduced at 5% in 2018 and increased to 15% on July 1, 2020, as part of the government's economic reforms. The tax is administered by the Zakat, Tax and Customs Authority (ZATCA), which oversees VAT collection, e-invoicing compliance, and tax enforcement across the Kingdom.
      </p>
      <p>
        ZATCA is also responsible for the <strong>Fatoora E-Invoicing Initiative</strong>, which mandates that all taxable businesses generate and transmit electronic invoices in a standardized format. Fatoora has two phases: Phase 1 (Generation) and Phase 2 (Integration). Understanding both phases is critical for compliance.
      </p>

      <h2>Phase 1 vs Phase 2 E-Invoicing (Fatoora) Rules</h2>

      <div className="not-prose glass p-5 rounded-xl mb-6">
        <h3 className="text-desert-primary font-semibold mb-2">Phase 1: Generation (Already in Effect)</h3>
        <p className="text-gray-300 text-sm mb-3">Phase 1 requires all businesses to generate electronic invoices using compliant software. Key requirements:</p>
        <ul className="space-y-1 text-gray-400 text-sm list-disc list-inside">
          <li>Invoices must be created digitally — paper invoices are no longer sufficient.</li>
          <li>Invoices must include a QR code (for simplified/B2C invoices) or standard tax invoice fields (for B2B).</li>
          <li>Invoices must be stored securely for the legally required retention period.</li>
          <li>No real-time transmission to ZATCA is required in Phase 1.</li>
        </ul>
      </div>

      <div className="not-prose glass p-5 rounded-xl mb-6">
        <h3 className="text-desert-primary font-semibold mb-2">Phase 2: Integration (Rolling Out 2026)</h3>
        <p className="text-gray-300 text-sm mb-3">Phase 2 is the more advanced stage. Businesses must integrate their invoicing systems directly with ZATCA's platform. Key requirements:</p>
        <ul className="space-y-1 text-gray-400 text-sm list-disc list-inside">
          <li>Invoices must be generated in a specific XML format defined by ZATCA.</li>
          <li>Each invoice must contain a cryptographic QR code with verified invoice data.</li>
          <li>Invoices must be transmitted to ZATCA in real time or near-real time.</li>
          <li>B2B invoices require additional fields including buyer's VAT number and detailed line-item tax.</li>
          <li>Medium and large businesses are being onboarded first, followed by small and micro businesses.</li>
        </ul>
      </div>

      <h2>B2B vs B2C Invoice Requirements</h2>

      <div className="not-prose glass p-5 rounded-xl mb-6">
        <h3 className="text-white font-semibold mb-2">Standard Tax Invoice (B2B)</h3>
        <p className="text-gray-300 text-sm mb-2">Required when selling to another VAT-registered business. Must include:</p>
        <ul className="space-y-1 text-gray-400 text-sm list-disc list-inside">
          <li>Invoice number (unique, sequential) and issue date</li>
          <li>Seller's legal name, address, and VAT registration number</li>
          <li>Buyer's legal name, address, and VAT registration number</li>
          <li>Description, quantity, and unit price of goods/services</li>
          <li>Net amount per line, VAT rate, and VAT amount per line</li>
          <li>Total VAT amount and total payable including VAT</li>
          <li>QR code compliant with ZATCA specifications</li>
        </ul>
      </div>

      <div className="not-prose glass p-5 rounded-xl mb-6">
        <h3 className="text-white font-semibold mb-2">Simplified Tax Invoice (B2C / Retail)</h3>
        <p className="text-gray-300 text-sm mb-2">Required when selling to an end consumer or non-VAT-registered customer. Must include:</p>
        <ul className="space-y-1 text-gray-400 text-sm list-disc list-inside">
          <li>Invoice number and issue date</li>
          <li>Seller's name and VAT registration number</li>
          <li>Description of goods/services</li>
          <li>Total amount including VAT</li>
          <li>QR code (must contain specific invoice data per ZATCA rules)</li>
          <li>No buyer details required</li>
        </ul>
      </div>

      <h2>How to Calculate VAT — Step-by-Step</h2>

      <div className="not-prose glass p-5 rounded-xl mb-6">
        <h3 className="text-desert-primary font-semibold mb-2">Formula 1: Adding VAT to a Price (Output VAT)</h3>
        <div className="bg-[#0A0E1A] p-4 rounded-lg text-gray-300 text-sm space-y-1 font-mono">
          <p>VAT Amount = Price × 0.15</p>
          <p>Total Price = Price + VAT Amount</p>
          <p className="mt-2 text-gray-400">Example: Product price = 1,000 SAR</p>
          <p>VAT = 1,000 × 0.15 = <strong>150 SAR</strong></p>
          <p>Total = 1,000 + 150 = <strong>1,150 SAR</strong></p>
        </div>
      </div>

      <div className="not-prose glass p-5 rounded-xl mb-6">
        <h3 className="text-desert-primary font-semibold mb-2">Formula 2: Extracting VAT from a Total Price</h3>
        <div className="bg-[#0A0E1A] p-4 rounded-lg text-gray-300 text-sm space-y-1 font-mono">
          <p>VAT Amount = Total ÷ 1.15 × 0.15</p>
          <p>Price Excluding VAT = Total ÷ 1.15</p>
          <p className="mt-2 text-gray-400">Example: Total amount = 1,150 SAR</p>
          <p>Price (excl. VAT) = 1,150 ÷ 1.15 = <strong>1,000 SAR</strong></p>
          <p>VAT = 1,150 ÷ 1.15 × 0.15 = <strong>150 SAR</strong></p>
        </div>
      </div>

      <div className="not-prose glass p-5 rounded-xl mb-6">
        <h3 className="text-desert-primary font-semibold mb-2">Input Tax vs Output Tax</h3>
        <p className="text-gray-300 text-sm mb-2">Understanding the difference is crucial for filing accurate VAT returns:</p>
        <ul className="space-y-2 text-gray-400 text-sm">
          <li><strong className="text-white">Output Tax:</strong> The VAT you collect from your customers on your taxable sales. This is what you owe ZATCA.</li>
          <li><strong className="text-white">Input Tax:</strong> The VAT you pay on your business purchases, expenses, and imports. This is what you can reclaim from ZATCA.</li>
          <li><strong className="text-white">Net VAT Payable:</strong> Output Tax − Input Tax. If positive, you pay ZATCA. If negative, ZATCA refunds you.</li>
        </ul>
      </div>

      <h2>Real-Life Calculation Examples</h2>

      <div className="not-prose glass p-5 rounded-xl mb-6">
        <h3 className="text-white font-semibold mb-3">Example 1: Retail Shop (B2C)</h3>
        <p className="text-gray-300 text-sm mb-2">A retail shop sells electronics worth 1,000 SAR to a walk-in customer.</p>
        <div className="bg-[#0A0E1A] p-4 rounded-lg text-gray-300 text-sm space-y-1 font-mono">
          <p>Product Price (excl. VAT): 1,000 SAR</p>
          <p>VAT at 15%: 1,000 × 0.15 = 150 SAR</p>
          <p>Total Paid by Customer: <strong>1,150 SAR</strong></p>
          <p className="mt-2 text-gray-400">Invoice Type: Simplified Tax Invoice (B2C)</p>
          <p className="text-gray-400">QR Code must be on the receipt</p>
          <p className="text-gray-400">Output VAT owed to ZATCA: <strong>150 SAR</strong></p>
        </div>
      </div>

      <div className="not-prose glass p-5 rounded-xl mb-6">
        <h3 className="text-white font-semibold mb-3">Example 2: B2B Service Contract</h3>
        <p className="text-gray-300 text-sm mb-2">A consulting firm provides services worth 50,000 SAR (excl. VAT) to another registered business.</p>
        <div className="bg-[#0A0E1A] p-4 rounded-lg text-gray-300 text-sm space-y-1 font-mono">
          <p>Service Fee (excl. VAT): 50,000 SAR</p>
          <p>VAT at 15%: 50,000 × 0.15 = 7,500 SAR</p>
          <p>Total Invoice Amount: <strong>57,500 SAR</strong></p>
          <p className="mt-2 text-gray-400">Invoice Type: Standard Tax Invoice (B2B)</p>
          <p className="text-gray-400">Buyer's VAT Number: Required on invoice</p>
          <p className="text-gray-400">Output VAT owed to ZATCA: <strong>7,500 SAR</strong></p>
          <p className="text-gray-400">Buyer can claim input VAT of 7,500 SAR</p>
        </div>
      </div>

      <h2>How to File VAT Returns in Saudi Arabia</h2>

      <div className="not-prose glass p-5 rounded-xl mb-6">
        <ol className="space-y-4 text-gray-300 list-decimal list-inside">
          <li>
            <strong className="text-desert-primary">Determine Filing Frequency:</strong>
            <p className="text-sm mt-1">If your annual supplies exceed 40 million SAR, you must file monthly. All other registered businesses file quarterly.</p>
          </li>
          <li>
            <strong className="text-desert-primary">Calculate Output VAT:</strong>
            <p className="text-sm mt-1">Total the VAT collected on all taxable sales during the period.</p>
          </li>
          <li>
            <strong className="text-desert-primary">Calculate Input VAT:</strong>
            <p className="text-sm mt-1">Total the VAT paid on business purchases and expenses (keep supporting invoices).</p>
          </li>
          <li>
            <strong className="text-desert-primary">Compute Net Payable:</strong>
            <p className="text-sm mt-1">Output VAT − Input VAT = Amount due to ZATCA (or refundable).</p>
          </li>
          <li>
            <strong className="text-desert-primary">File via ZATCA Portal:</strong>
            <p className="text-sm mt-1">Log in to the ZATCA online portal, complete the VAT return form with the calculated amounts, and submit within 30 days after the tax period ends.</p>
          </li>
          <li>
            <strong className="text-desert-primary">Make Payment:</strong>
            <p className="text-sm mt-1">Pay the net VAT due via SADAD or other approved payment methods. Save the payment receipt.</p>
          </li>
        </ol>
      </div>

      <h2>Common Mistakes Businesses Make with ZATCA</h2>

      <div className="not-prose glass p-5 rounded-xl mb-6">
        <ul className="space-y-4 text-gray-300">
          <li className="flex items-start gap-3">
            <AlertTriangle className="h-5 w-5 text-desert-accent mt-0.5 shrink-0" />
            <div>
              <strong className="text-white">Missing QR Codes on Invoices</strong>
              <p className="text-sm text-gray-400">Since Phase 1 of Fatoora, every simplified invoice must include a ZATCA-compliant QR code. Missing QR codes can result in fines up to 50,000 SAR.</p>
            </div>
          </li>
          <li className="flex items-start gap-3">
            <AlertTriangle className="h-5 w-5 text-desert-accent mt-0.5 shrink-0" />
            <div>
              <strong className="text-white">Wrong VAT Registration Number</strong>
              <p className="text-sm text-gray-400">Using an incorrect or expired VAT registration number on invoices is a common error. Always verify your VAT certificate is current before issuing invoices.</p>
            </div>
          </li>
          <li className="flex items-start gap-3">
            <AlertTriangle className="h-5 w-5 text-desert-accent mt-0.5 shrink-0" />
            <div>
              <strong className="text-white">Not Issuing E-Invoices for All Transactions</strong>
              <p className="text-sm text-gray-400">Some businesses still issue paper invoices or handwritten receipts. Under Fatoora, all taxable transactions must be invoiced electronically with the correct format.</p>
            </div>
          </li>
          <li className="flex items-start gap-3">
            <AlertTriangle className="h-5 w-5 text-desert-accent mt-0.5 shrink-0" />
            <div>
              <strong className="text-white">Mixing B2B and B2C Invoice Formats</strong>
              <p className="text-sm text-gray-400">Using a simplified invoice for a B2B transaction (without buyer's VAT number) or vice versa can lead to penalties. Use the correct template for each customer type.</p>
            </div>
          </li>
          <li className="flex items-start gap-3">
            <AlertTriangle className="h-5 w-5 text-desert-accent mt-0.5 shrink-0" />
            <div>
              <strong className="text-white">Late or Incorrect VAT Return Filing</strong>
              <p className="text-sm text-gray-400">Filing late returns, under-reporting output VAT, or over-claiming input VAT are common errors that trigger ZATCA audits and fines. Use a calculator to double-check your figures.</p>
            </div>
          </li>
        </ul>
      </div>

      <h2>How to Use the Sauditoolhub ZATCA VAT Calculator</h2>
      <div className="not-prose glass p-6 rounded-xl mb-8">
        <div className="flex items-center gap-3 mb-4">
          <Calculator className="h-8 w-8 text-desert-primary" />
          <h3 className="text-white text-lg font-bold m-0">Sauditoolhub ZATCA VAT Calculator</h3>
        </div>
        <p className="text-gray-300 mb-4">
          Our free VAT calculator handles all the common scenarios: add VAT to a net price, extract VAT from a gross amount, calculate VAT per line item, and determine net VAT payable. Designed for Saudi Arabia's 15% VAT rate and ZATCA-compliant.
        </p>
        <ul className="space-y-2 text-gray-400 text-sm mb-4">
          <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-desert-primary" /> Add VAT: Calculate total including 15% VAT</li>
          <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-desert-primary" /> Extract VAT: Get the VAT amount from a total</li>
          <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-desert-primary" /> Per-line VAT: Calculate VAT for individual items</li>
          <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-desert-primary" /> Free — no registration required</li>
        </ul>
        <Link href="/zatca-vat-calculator" className="inline-flex items-center gap-2 rounded-xl bg-desert-primary px-8 py-3 text-sm font-bold text-white transition-all hover:bg-desert-primary-dim">
          <Calculator className="h-4 w-4" />
          Calculate VAT Now
        </Link>
      </div>

      <h2>Important for US Expats in Saudi Arabia</h2>
      <div className="not-prose glass p-6 rounded-xl mb-8">
        <p className="text-gray-300">
          If you are a US expat running a business or freelancing in Saudi Arabia, VAT compliance works alongside your US tax duties. Saudi Arabia has no personal income tax and no tax on employment income, so most American expats pay zero Saudi income tax. However, the 15% VAT you collect is not your money — it is a government liability you must remit to ZATCA, and keeping accurate records matters for your US returns too. The IRS taxes US citizens on worldwide income, and even though Saudi VAT is not directly reportable to the IRS, clean ZATCA-compliant bookkeeping protects your eligibility for the Foreign Earned Income Exclusion (FEIE) and the Foreign Tax Credit if you ever need them.
        </p>
        <p className="text-gray-300 mt-4">
          American business owners should also keep in mind their annual FATCA (FBAR) filing requirements for foreign financial accounts, and make sure their Saudi company documents — commercial registration, VAT certificate, and E-invoices — are in order. ZATCA does not care where you hold a passport, so the same invoicing, QR-code, and filing rules apply to everyone. Use our ZATCA VAT Calculator to keep your filings accurate and avoid penalties that can reach 50,000 SAR.
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
      <p>
        ZATCA compliance is a critical responsibility for every business operating in Saudi Arabia. From getting your VAT registration right to issuing correct invoices and filing accurate returns, every step matters. With Fatoora Phase 2 rolling out in 2026, the time to ensure your invoicing systems are compliant is now.
      </p>
      <p>
        Use our{' '}
        <Link href="/zatca-vat-calculator" className="text-desert-primary font-bold underline">ZATCA VAT Calculator</Link>
        {' '}for instant calculations. Also explore our{' '}
        <Link href="/freelance-income-calculator" className="text-desert-primary font-bold underline">Freelance Income Tax Calculator</Link>
        {' '}for freelancers,{' '}
        <Link href="/cr-cost-estimator" className="text-desert-primary font-bold underline">CR Cost Estimator</Link>
        {' '}for business setup costs, and visit our{' '}
        <Link href="/blog" className="text-desert-primary font-bold underline">Blog</Link>
        {' '}for more business guides.
      </p>

      <div className="not-prose glass p-6 rounded-xl mt-8 text-center">
        <Calculator className="h-10 w-10 text-desert-primary mx-auto mb-3" />
        <h3 className="text-white text-lg font-bold mb-2">Calculate Your VAT Now</h3>
        <p className="text-gray-400 text-sm mb-4">Free — add VAT, extract VAT, ensure accuracy</p>
        <Link href="/zatca-vat-calculator" className="inline-flex items-center gap-2 rounded-xl bg-desert-primary px-8 py-3 text-sm font-bold text-white transition-all hover:bg-desert-primary-dim">
          <Calculator className="h-4 w-4" />
          Use Free VAT Calculator
        </Link>
      </div>
    </article>
  )
}

function ArContent() {
  return (
    <article className="prose prose-invert max-w-none prose-headings:text-desert-primary prose-a:text-desert-primary prose-strong:text-white prose-li:text-gray-300" dir="rtl">
      <h1>الدليل الكامل لضريبة القيمة المضافة والفوترة الإلكترونية (فاتورة) في السعودية 2026</h1>

      <div className="not-prose glass p-6 rounded-xl mb-8">
        <p className="text-gray-300 text-lg leading-relaxed">
          إذا كنت تدير نشاطاً تجارياً في السعودية، فإن الامتثال لزكاتا ليس خياراً. منذ تطبيق ضريبة القيمة المضافة بنسبة 15% ونظام الفوترة الإلكترونية (فاتورة)، تغيرت طريقة إصدار الفواتير وحساب الضريبة والإبلاغ للجهات الرسمية بشكل جذري.
        </p>
        <p className="text-gray-300 text-lg leading-relaxed mt-4">
          هذا الدليل يغطي <strong>كل ما تحتاج معرفته عن ضريبة القيمة المضافة والفوترة الإلكترونية في 2026</strong>. نشرح نسبة 15%، الفرق بين المرحلة الأولى والثانية من فاتورة، متطلبات فواتير B2B و B2C، وصيغ حساب الضريبة خطوة بخطوة.
        </p>
        <p className="text-gray-300 text-lg leading-relaxed mt-4">
          استخدم{' '}
          <Link href="/zatca-vat-calculator" className="text-desert-primary font-bold underline">
            حاسبة ضريبة القيمة المضافة من Sauditoolhub
          </Link>{' '}
          لحساب مبالغ الضريبة بسرعة ودقة.
        </p>
      </div>

      <h2>ما هي ضريبة القيمة المضافة وزكاتا في السعودية؟</h2>
      <p>
        ضريبة القيمة المضافة هي ضريبة استهلاك تُفرض على توريد معظم السلع والخدمات في السعودية. طبقت بنسبة 5% في 2018 ورفعت إلى 15% في 1 يوليو 2020. تشرف عليها هيئة الزكاة والضريبة والجمارك (زكاتا).
      </p>

      <h2>المرحلة الأولى مقابل المرحلة الثانية من الفوترة الإلكترونية</h2>

      <div className="not-prose glass p-5 rounded-xl mb-6">
        <h3 className="text-desert-primary font-semibold mb-2">المرحلة الأولى: الإنشاء (سارية)</h3>
        <ul className="space-y-1 text-gray-400 text-sm list-disc list-inside">
          <li>إنشاء الفواتير إلكترونياً فقط</li>
          <li>تضمين رمز QR في الفواتير المبسطة</li>
          <li>تخزين الفواتير بشكل آمن</li>
          <li>لا حاجة للإرسال الفوري لزكاتا</li>
        </ul>
      </div>

      <div className="not-prose glass p-5 rounded-xl mb-6">
        <h3 className="text-desert-primary font-semibold mb-2">المرحلة الثانية: التكامل (قيد التطبيق 2026)</h3>
        <ul className="space-y-1 text-gray-400 text-sm list-disc list-inside">
          <li>دمج أنظمة الفوترة مع منصة زكاتا</li>
          <li>إنشاء الفواتير بتنسيق XML محدد</li>
          <li>رمز QR تشفيري مع بيانات موثقة</li>
          <li>نقل الفواتير لزكاتا في الوقت الفعلي</li>
        </ul>
      </div>

      <h2>متطلبات فاتورة B2B مقابل B2C</h2>

      <div className="not-prose glass p-5 rounded-xl mb-6">
        <h3 className="text-white font-semibold mb-2">الفاتورة الضريبية القياسية (B2B)</h3>
        <ul className="space-y-1 text-gray-400 text-sm list-disc list-inside">
          <li>رقم الفاتورة والتاريخ</li>
          <li>اسم البائع وعنوانه ورقمه الضريبي</li>
          <li>اسم المشتري وعنوانه ورقمه الضريبي</li>
          <li>وصف وكمية وسعر السلع/الخدمات</li>
          <li>المبلغ الصافي والضريبة لكل بند</li>
          <li>إجمالي الضريبة والإجمالي شامل الضريبة</li>
          <li>رمز QR متوافق مع مواصفات زكاتا</li>
        </ul>
      </div>

      <div className="not-prose glass p-5 rounded-xl mb-6">
        <h3 className="text-white font-semibold mb-2">الفاتورة الضريبية المبسطة (B2C)</h3>
        <ul className="space-y-1 text-gray-400 text-sm list-disc list-inside">
          <li>رقم الفاتورة والتاريخ</li>
          <li>اسم البائع ورقمه الضريبي</li>
          <li>وصف السلع/الخدمات</li>
          <li>الإجمالي شامل الضريبة</li>
          <li>رمز QR</li>
          <li>لا حاجة لتفاصيل المشتري</li>
        </ul>
      </div>

      <h2>كيفية حساب ضريبة القيمة المضافة</h2>

      <div className="not-prose glass p-5 rounded-xl mb-6">
        <h3 className="text-desert-primary font-semibold mb-2">إضافة الضريبة إلى السعر</h3>
        <div className="bg-[#0A0E1A] p-4 rounded-lg text-gray-300 text-sm space-y-1 font-mono">
          <p>مبلغ الضريبة = السعر × 0.15</p>
          <p>الإجمالي = السعر + مبلغ الضريبة</p>
          <p className="mt-2">مثال: سعر المنتج = 1,000 ريال</p>
          <p>الضريبة = 1,000 × 0.15 = <strong>150 ريال</strong></p>
          <p>الإجمالي = 1,000 + 150 = <strong>1,150 ريال</strong></p>
        </div>
      </div>

      <div className="not-prose glass p-5 rounded-xl mb-6">
        <h3 className="text-desert-primary font-semibold mb-2">استخراج الضريبة من المبلغ الإجمالي</h3>
        <div className="bg-[#0A0E1A] p-4 rounded-lg text-gray-300 text-sm space-y-1 font-mono">
          <p>مبلغ الضريبة = الإجمالي ÷ 1.15 × 0.15</p>
          <p>مثال: المبلغ الإجمالي = 1,150 ريال</p>
          <p>الضريبة = 1,150 ÷ 1.15 × 0.15 = <strong>150 ريال</strong></p>
        </div>
      </div>

      <h2>أمثلة عملية</h2>

      <div className="not-prose glass p-5 rounded-xl mb-6">
        <h3 className="text-white font-semibold mb-3">مثال 1: متجر تجزئة (B2C)</h3>
        <div className="bg-[#0A0E1A] p-4 rounded-lg text-gray-300 text-sm space-y-1 font-mono">
          <p>سعر المنتج (بدون ضريبة): 1,000 ريال</p>
          <p>الضريبة 15%: 150 ريال</p>
          <p>المجموع: <strong>1,150 ريال</strong></p>
          <p className="mt-2 text-gray-400">نوع الفاتورة: مبسطة (B2C)</p>
          <p className="text-gray-400">ضريبة المخرجات المستحقة: <strong>150 ريال</strong></p>
        </div>
      </div>

      <div className="not-prose glass p-5 rounded-xl mb-6">
        <h3 className="text-white font-semibold mb-3">مثال 2: عقد خدمات B2B</h3>
        <div className="bg-[#0A0E1A] p-4 rounded-lg text-gray-300 text-sm space-y-1 font-mono">
          <p>رسوم الخدمة (بدون ضريبة): 50,000 ريال</p>
          <p>الضريبة 15%: 7,500 ريال</p>
          <p>إجمالي الفاتورة: <strong>57,500 ريال</strong></p>
          <p className="mt-2 text-gray-400">نوع الفاتورة: قياسية (B2B)</p>
          <p className="text-gray-400">ضريبة المخرجات المستحقة: <strong>7,500 ريال</strong></p>
        </div>
      </div>

      <h2>الأخطاء الشائعة مع زكاتا</h2>
      <div className="not-prose glass p-5 rounded-xl mb-6">
        <ul className="space-y-3 text-gray-300">
          <li><AlertTriangle className="h-4 w-4 text-desert-accent inline" /> عدم وجود رمز QR على الفواتير</li>
          <li><AlertTriangle className="h-4 w-4 text-desert-accent inline" /> رقم ضريبي غير صحيح</li>
          <li><AlertTriangle className="h-4 w-4 text-desert-accent inline" /> إصدار فواتير ورقية بدلاً من إلكترونية</li>
          <li><AlertTriangle className="h-4 w-4 text-desert-accent inline" /> الخلط بين تنسيق B2B و B2C</li>
          <li><AlertTriangle className="h-4 w-4 text-desert-accent inline" /> تقديم إقرارات متأخرة أو غير صحيحة</li>
        </ul>
      </div>

      <h2>حاسبة ضريبة القيمة المضافة من Sauditoolhub</h2>
      <div className="not-prose glass p-6 rounded-xl mb-8">
        <Link href="/zatca-vat-calculator" className="inline-flex items-center gap-2 rounded-xl bg-desert-primary px-8 py-3 text-sm font-bold text-white transition-all hover:bg-desert-primary-dim">
          <Calculator className="h-4 w-4" />
          احسب الضريبة الآن
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
        الامتثال لزكاتا مسؤولية حاسمة لكل منشأة في السعودية. من التسجيل الصحيح للضريبة إلى إصدار الفواتير الدقيقة وتقديم الإقرارات الصحيحة، كل خطوة مهمة. مع تطبيق المرحلة الثانية من فاتورة في 2026، حان الوقت لضمان امتثال أنظمة الفوترة الخاصة بك.
      </p>
      <p>
        استخدم{' '}
        <Link href="/zatca-vat-calculator" className="text-desert-primary font-bold underline">حاسبة ضريبة القيمة المضافة</Link>
        {' '}وزور{' '}
        <Link href="/freelance-income-calculator" className="text-desert-primary font-bold underline">حاسبة دخل العمل الحر</Link>
        {' '}و{' '}
        <Link href="/cr-cost-estimator" className="text-desert-primary font-bold underline">مقدر تكاليف السجل التجاري</Link>
        {' '}و{' '}
        <Link href="/blog" className="text-desert-primary font-bold underline">المدونة</Link>.
      </p>

      <div className="not-prose glass p-6 rounded-xl mt-8 text-center">
        <Calculator className="h-10 w-10 text-desert-primary mx-auto mb-3" />
        <h3 className="text-white text-lg font-bold mb-2">احسب ضريبة القيمة المضافة الآن</h3>
        <p className="text-gray-400 text-sm mb-4">مجاني — إضافة واستخراج الضريبة بدقة</p>
        <Link href="/zatca-vat-calculator" className="inline-flex items-center gap-2 rounded-xl bg-desert-primary px-8 py-3 text-sm font-bold text-white transition-all hover:bg-desert-primary-dim">
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
      <h1>سعودی عرب میں ZATCA ویٹ اور ای-انوائسنگ (فاتورة) کا مکمل گائیڈ 2026</h1>

      <div className="not-prose glass p-6 rounded-xl mb-8">
        <p className="text-gray-300 text-lg leading-relaxed">
          اگر آپ سعودی عرب میں کاروبار چلاتے ہیں تو ZATCA کی تعمیل لازمی ہے۔ 15% ویٹ اور فاتورة ای-انوائسنگ سسٹم کے نفاذ کے بعد، کاروباروں کو اپنے انوائس جاری کرنے، ٹیکس کا حساب لگانے اور حکام کو رپورٹ کرنے کا طریقہ یکسر تبدیل کرنا پڑا ہے۔
        </p>
        <p className="text-gray-300 text-lg leading-relaxed mt-4">
          یہ گائیڈ <strong>2026 میں ZATCA ویٹ اور ای-انوائسنگ کے بارے میں ہر وہ چیز</strong> کا احاطہ کرتا ہے جو آپ کو جاننے کی ضرورت ہے۔
        </p>
        <p className="text-gray-300 text-lg leading-relaxed mt-4">
          ہمارا مفت{' '}
          <Link href="/zatca-vat-calculator" className="text-desert-primary font-bold underline">
            ZATCA VAT کیلکولیٹر
          </Link>{' '}
          استعمال کریں۔
        </p>
      </div>

      <h2>سعودی عرب میں VAT اور ZATCA کیا ہے؟</h2>
      <p>ویلیو ایڈڈ ٹیکس (VAT) ایک صارفینی ٹیکس ہے جو سعودی عرب میں زیادہ تر اشیاء اور خدمات کی فراہمی پر لگایا جاتا ہے۔ یہ 2018 میں 5% پر متعارف کرایا گیا اور 1 جولائی 2020 کو بڑھا کر 15% کر دیا گیا۔</p>

      <h2>فاتورة ای-انوائسنگ کے مراحل</h2>

      <div className="not-prose glass p-5 rounded-xl mb-6">
        <h3 className="text-desert-primary font-semibold mb-2">مرحلہ اول: جنریشن</h3>
        <ul className="space-y-1 text-gray-400 text-sm list-disc list-inside">
          <li>صرف ڈیجیٹل انوائسز</li>
          <li>QR کوڈ شامل ہو</li>
          <li>محفوظ ذخیرہ</li>
          <li>ZATCA کو فوری بھیجنے کی ضرورت نہیں</li>
        </ul>
      </div>

      <div className="not-prose glass p-5 rounded-xl mb-6">
        <h3 className="text-desert-primary font-semibold mb-2">مرحلہ دوم: انٹیگریشن</h3>
        <ul className="space-y-1 text-gray-400 text-sm list-disc list-inside">
          <li>ZATCA پلیٹ فارم سے انضمام</li>
          <li>XML فارمیٹ میں انوائسز</li>
          <li>خفیہ QR کوڈ</li>
          <li>ریئل ٹائم ٹرانسمیشن</li>
        </ul>
      </div>

      <h2>VAT حساب کرنے کے فارمولے</h2>

      <div className="not-prose glass p-5 rounded-xl mb-6">
        <h3 className="text-desert-primary font-semibold mb-2">VAT شامل کرنا</h3>
        <div className="bg-[#0A0E1A] p-4 rounded-lg text-gray-300 text-sm space-y-1 font-mono">
          <p>VAT = قیمت × 0.15</p>
          <p>کل = قیمت + VAT</p>
          <p className="mt-2">مثال: 1,000 SAR × 0.15 = 150 SAR VAT</p>
          <p>کل = 1,150 SAR</p>
        </div>
      </div>

      <div className="not-prose glass p-5 rounded-xl mb-6">
        <h3 className="text-desert-primary font-semibold mb-2">VAT نکالنا</h3>
        <div className="bg-[#0A0E1A] p-4 rounded-lg text-gray-300 text-sm space-y-1 font-mono">
          <p>VAT = کل ÷ 1.15 × 0.15</p>
          <p>مثال: 1,150 ÷ 1.15 × 0.15 = 150 SAR</p>
        </div>
      </div>

      <h2>Sauditoolhub ZATCA VAT کیلکولیٹر</h2>
      <div className="not-prose glass p-6 rounded-xl mb-8">
        <Link href="/zatca-vat-calculator" className="inline-flex items-center gap-2 rounded-xl bg-desert-primary px-8 py-3 text-sm font-bold text-white transition-all hover:bg-desert-primary-dim">
          <Calculator className="h-4 w-4" />
          VAT حساب کریں
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
        ZATCA کی تعمیل سعودی عرب میں ہر کاروبار کے لیے ایک اہم ذمہ داری ہے۔ فاتورة کے مرحلہ دوم کے ساتھ، ابھی وقت ہے کہ اپنے سسٹمز کو ہم آہنگ کریں۔
      </p>
      <p>
        {' '}
        <Link href="/zatca-vat-calculator" className="text-desert-primary font-bold underline">VAT کیلکولیٹر</Link>
        {' '}استعمال کریں۔{' '}
        <Link href="/freelance-income-calculator" className="text-desert-primary font-bold underline">فری لانس انکم کیلکولیٹر</Link>
        {' '}اور{' '}
        <Link href="/cr-cost-estimator" className="text-desert-primary font-bold underline">CR کاسٹ ایسٹیمیٹر</Link>
        {' '}بھی دیکھیں۔{' '}
        <Link href="/blog" className="text-desert-primary font-bold underline">بلاگ</Link> پر مزید۔
      </p>

      <div className="not-prose glass p-6 rounded-xl mt-8 text-center">
        <Calculator className="h-10 w-10 text-desert-primary mx-auto mb-3" />
        <h3 className="text-white text-lg font-bold mb-2">ابھی VAT کا حساب لگائیں</h3>
        <p className="text-gray-400 text-sm mb-4">مفت — درست اور فوری</p>
        <Link href="/zatca-vat-calculator" className="inline-flex items-center gap-2 rounded-xl bg-desert-primary px-8 py-3 text-sm font-bold text-white transition-all hover:bg-desert-primary-dim">
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
      <h1>Kumpletong Gabay sa ZATCA VAT at E-Invoicing (Fatoora) sa Saudi Arabia 2026</h1>

      <div className="not-prose glass p-6 rounded-xl mb-8">
        <p className="text-gray-300 text-lg leading-relaxed">
          Kung ikaw ay nagpapatakbo ng negosyo sa Saudi Arabia, ang pagsunod sa ZATCA ay hindi opsyon. Mula nang ipatupad ang 15% Value Added Tax at ang mandatoryong Fatoora e-invoicing system, ang mga negosyo ay kailangang baguhin ang paraan ng pag-isyu ng invoices, pagkalkula ng buwis, at pag-uulat sa mga awtoridad.
        </p>
        <p className="text-gray-300 text-lg leading-relaxed mt-4">
          Saklaw ng gabay na ito ang <strong>lahat ng kailangan mong malaman tungkol sa ZATCA VAT at E-Invoicing sa 2026</strong>.
        </p>
        <p className="text-gray-300 text-lg leading-relaxed mt-4">
          Gamitin ang aming libreng{' '}
          <Link href="/zatca-vat-calculator" className="text-desert-primary font-bold underline">
            ZATCA VAT Calculator
          </Link>.
        </p>
      </div>

      <h2>Ano ang VAT at ZATCA sa Saudi Arabia?</h2>
      <p>Ang Value Added Tax ay isang consumption tax na ipinapataw sa supply ng karamihan sa mga produkto at serbisyo sa Saudi Arabia. Ito ay ipinakilala sa 5% noong 2018 at tumaas sa 15% noong Hulyo 1, 2020.</p>

      <h2>Phase 1 vs Phase 2 ng Fatoora</h2>

      <div className="not-prose glass p-5 rounded-xl mb-6">
        <h3 className="text-desert-primary font-semibold mb-2">Phase 1: Generation</h3>
        <ul className="space-y-1 text-gray-400 text-sm list-disc list-inside">
          <li>Digital invoices lamang</li>
          <li>QR code sa simplified invoices</li>
          <li>Secure storage ng invoices</li>
          <li>Hindi kailangan ng real-time transmission</li>
        </ul>
      </div>

      <div className="not-prose glass p-5 rounded-xl mb-6">
        <h3 className="text-desert-primary font-semibold mb-2">Phase 2: Integration</h3>
        <ul className="space-y-1 text-gray-400 text-sm list-disc list-inside">
          <li>Integration sa ZATCA platform</li>
          <li>XML format na mga invoice</li>
          <li>Cryptographic QR code</li>
          <li>Real-time transmission</li>
        </ul>
      </div>

      <h2>Sauditoolhub ZATCA VAT Calculator</h2>
      <div className="not-prose glass p-6 rounded-xl mb-8">
        <Link href="/zatca-vat-calculator" className="inline-flex items-center gap-2 rounded-xl bg-desert-primary px-8 py-3 text-sm font-bold text-white transition-all hover:bg-desert-primary-dim">
          <Calculator className="h-4 w-4" />
          Kalkulahin ang VAT Ngayon
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
        Ang pagsunod sa ZATCA ay isang kritikal na responsibilidad para sa bawat negosyo sa Saudi Arabia. Gamitin ang aming{' '}
        <Link href="/zatca-vat-calculator" className="text-desert-primary font-bold underline">VAT Calculator</Link>
        {' '}at bisitahin ang aming{' '}
        <Link href="/blog" className="text-desert-primary font-bold underline">Blog</Link>.
      </p>

      <div className="not-prose glass p-6 rounded-xl mt-8 text-center">
        <Calculator className="h-10 w-10 text-desert-primary mx-auto mb-3" />
        <h3 className="text-white text-lg font-bold mb-2">Kalkulahin ang Iyong VAT Ngayon</h3>
        <p className="text-gray-400 text-sm mb-4">Libre — tumpak at mabilis</p>
        <Link href="/zatca-vat-calculator" className="inline-flex items-center gap-2 rounded-xl bg-desert-primary px-8 py-3 text-sm font-bold text-white transition-all hover:bg-desert-primary-dim">
          <Calculator className="h-4 w-4" />
          Gamitin ang Libreng VAT Calculator
        </Link>
      </div>
    </article>
  )
}

function BnContent() {
  return (
    <article className="prose prose-invert max-w-none prose-headings:text-desert-primary prose-a:text-desert-primary prose-strong:text-white prose-li:text-gray-300">
      <h1>সৌদি আরবে ZATCA VAT এবং ই-ইনভয়েসিং (ফাতুরা) সম্পূর্ণ গাইড 2026</h1>

      <div className="not-prose glass p-6 rounded-xl mb-8">
        <p className="text-gray-300 text-lg leading-relaxed">
          আপনি যদি সৌদি আরবে ব্যবসা পরিচালনা করেন, তাহলে ZATCA-র সাথে সম্মতি আবশ্যক। 15% ভ্যাট এবং বাধ্যতামূলক ফাতুরা ই-ইনভয়েসিং সিস্টেম চালু হওয়ার পর থেকে, ব্যবসাগুলিকে তাদের ইনভয়েস ইস্যু করার, কর গণনা করার এবং কর্তৃপক্ষের কাছে রিপোর্ট করার পদ্ধতি সম্পূর্ণরূপে পরিবর্তন করতে হয়েছে।
        </p>
        <p className="text-gray-300 text-lg leading-relaxed mt-4">
          এই গাইডটি <strong>2026 সালে ZATCA VAT এবং ই-ইনভয়েসিং সম্পর্কে আপনার যা জানা দরকার</strong> সবকিছু কভার করে।
        </p>
        <p className="text-gray-300 text-lg leading-relaxed mt-4">
          আমাদের বিনামূল্যের{' '}
          <Link href="/zatca-vat-calculator" className="text-desert-primary font-bold underline">
            ZATCA VAT ক্যালকুলেটর
          </Link>{' '}
          ব্যবহার করুন।
        </p>
      </div>

      <h2>সৌদি আরবে VAT এবং ZATCA কী?</h2>
      <p>ভ্যাট হল একটি ভোগ কর যা সৌদি আরবে বেশিরভাগ পণ্য ও পরিষেবার সরবরাহের উপর আরোপিত হয়। এটি 2018 সালে 5% হারে চালু হয় এবং 1 জুলাই 2020-এ 15% এ বৃদ্ধি পায়।</p>

      <h2>ফাতুরার প্রথম ও দ্বিতীয় ধাপ</h2>

      <div className="not-prose glass p-5 rounded-xl mb-6">
        <h3 className="text-desert-primary font-semibold mb-2">প্রথম ধাপ: জেনারেশন</h3>
        <ul className="space-y-1 text-gray-400 text-sm list-disc list-inside">
          <li>শুধুমাত্র ডিজিটাল ইনভয়েস</li>
          <li>QR কোড অন্তর্ভুক্ত</li>
          <li>নিরাপদ স্টোরেজ</li>
          <li>রিয়েল-টাইম ট্রান্সমিশনের প্রয়োজন নেই</li>
        </ul>
      </div>

      <div className="not-prose glass p-5 rounded-xl mb-6">
        <h3 className="text-desert-primary font-semibold mb-2">দ্বিতীয় ধাপ: ইন্টিগ্রেশন</h3>
        <ul className="space-y-1 text-gray-400 text-sm list-disc list-inside">
          <li>ZATCA প্ল্যাটফর্মের সাথে ইন্টিগ্রেশন</li>
          <li>XML ফরম্যাটে ইনভয়েস</li>
          <li>ক্রিপ্টোগ্রাফিক QR কোড</li>
          <li>রিয়েল-টাইম ট্রান্সমিশন</li>
        </ul>
      </div>

      <h2>Sauditoolhub ZATCA VAT ক্যালকুলেটর</h2>
      <div className="not-prose glass p-6 rounded-xl mb-8">
        <Link href="/zatca-vat-calculator" className="inline-flex items-center gap-2 rounded-xl bg-desert-primary px-8 py-3 text-sm font-bold text-white transition-all hover:bg-desert-primary-dim">
          <Calculator className="h-4 w-4" />
          এখনই VAT গণনা করুন
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
        ZATCA-র সাথে সম্মতি সৌদি আরবের প্রতিটি ব্যবসার জন্য একটি গুরুত্বপূর্ণ দায়িত্ব। আমাদের{' '}
        <Link href="/zatca-vat-calculator" className="text-desert-primary font-bold underline">VAT ক্যালকুলেটর</Link>
        {' '}ব্যবহার করুন এবং{' '}
        <Link href="/blog" className="text-desert-primary font-bold underline">ব্লগ</Link> দেখুন।
      </p>

      <div className="not-prose glass p-6 rounded-xl mt-8 text-center">
        <Calculator className="h-10 w-10 text-desert-primary mx-auto mb-3" />
        <h3 className="text-white text-lg font-bold mb-2">এখনই আপনার VAT গণনা করুন</h3>
        <p className="text-gray-400 text-sm mb-4">বিনামূল্যে — সঠিক এবং দ্রুত</p>
        <Link href="/zatca-vat-calculator" className="inline-flex items-center gap-2 rounded-xl bg-desert-primary px-8 py-3 text-sm font-bold text-white transition-all hover:bg-desert-primary-dim">
          <Calculator className="h-4 w-4" />
          বিনামূল্যে VAT ক্যালকুলেটর ব্যবহার করুন
        </Link>
      </div>
    </article>
  )
}

export default async function ZatcaVatGuidePage({ params }: Props) {
  const { locale } = await params
  const isAr = locale === 'ar'
  const isUr = locale === 'ur'
  const isTl = locale === 'tl'
  const isBn = locale === 'bn'
  const isDefault = locale === 'en'
  const pageUrl = isDefault ? `${baseUrl}/guide/zatca-vat-calculator-saudi-arabia-2026` : `${baseUrl}/${locale}/guide/zatca-vat-calculator-saudi-arabia-2026`

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
          { name: isAr ? 'دليل ضريبة القيمة المضافة' : isUr ? 'VAT گائیڈ' : isTl ? 'Gabay sa VAT' : isBn ? 'VAT গাইড' : 'ZATCA VAT Guide', url: pageUrl },
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
