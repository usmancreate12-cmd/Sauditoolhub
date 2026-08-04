import type { Metadata } from 'next'
import Link from 'next/link'
import { Calculator, DollarSign, Building2, FileText, AlertTriangle, CheckCircle, TrendingUp, Users, Shield, Briefcase, CreditCard, Landmark } from 'lucide-react'

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
    ? 'الدليل الكامل لأهلية القرض الشخصي ونسبة العبء المالي في السعودية 2026 | Sauditoolhub'
    : isUr
    ? 'سعودی عرب میں پرسنل لون اہلیت اور ساما ڈی بی آر کا مکمل گائیڈ 2026 | Sauditoolhub'
    : isTl
    ? 'Kumpletong Gabay sa Personal Loan Eligibility at SAMA DBR Rules sa Saudi Arabia 2026 | Sauditoolhub'
    : isBn
    ? 'সৌদি আরবে ব্যক্তিগত ঋণের যোগ্যতা ও SAMA DBR নিয়ম সম্পূর্ণ গাইড 2026 | Sauditoolhub'
    : 'Complete Guide to Personal Loan Eligibility & SAMA DBR Rules in Saudi Arabia 2026 | Sauditoolhub'

  const description = isAr
    ? 'دليل كامل لأهلية القروض الشخصية ونسبة العبء المالي في السعودية 2026. تعرف على قواعد البنك المركزي ساما، كيفية حساب الحد الأقصى للقرض، وتحسين فرص الموافقة.'
    : isUr
    ? 'سعودی عرب میں پرسنل لون اور ساما ڈیٹ برڈن ریشو کا مکمل گائیڈ 2026۔ ساما قوانین، زیادہ سے زیادہ قرض کا حساب، اور منظوری کے امکانات بڑھانے کے طریقے۔'
    : isTl
    ? 'Kumpletong gabay sa personal loan eligibility at SAMA DBR rules sa Saudi Arabia 2026. Alamin ang SAMA regulations, kung paano kalkulahin ang maximum loan, at paano pagbutihin ang iyong pagkakataon na maaprubahan.'
    : isBn
    ? 'সৌদি আরবে ব্যক্তিগত ঋণের যোগ্যতা ও SAMA DBR নিয়মের সম্পূর্ণ গাইড ২০২৬। SAMA নিয়ম, সর্বোচ্চ ঋণ গণনা এবং অনুমোদনের সম্ভাবনা বাড়ানোর উপায়।'
    : 'Complete guide to personal loan eligibility and SAMA Debt Burden Ratio rules in Saudi Arabia 2026. Learn how banks calculate your maximum loan amount, how the 33% DBR rule works, and strategies to improve your loan approval chances.'

  return {
    title,
    description,
    alternates: {
      canonical: isDefault ? `${baseUrl}/guide/sama-loan-calculator-saudi-arabia-2026` : `${baseUrl}/${locale}/guide/sama-loan-calculator-saudi-arabia-2026`,
      languages: {
        en: `${baseUrl}/guide/sama-loan-calculator-saudi-arabia-2026`,
        ar: `${baseUrl}/ar/guide/sama-loan-calculator-saudi-arabia-2026`,
        ur: `${baseUrl}/ur/guide/sama-loan-calculator-saudi-arabia-2026`,
        tl: `${baseUrl}/tl/guide/sama-loan-calculator-saudi-arabia-2026`,
        bn: `${baseUrl}/bn/guide/sama-loan-calculator-saudi-arabia-2026`,
      },
    },
    openGraph: {
      title,
      description,
      url: isDefault ? `${baseUrl}/guide/sama-loan-calculator-saudi-arabia-2026` : `${baseUrl}/${locale}/guide/sama-loan-calculator-saudi-arabia-2026`,
      siteName: 'Sauditoolhub',
      locale: isAr ? 'ar_SA' : isUr ? 'ur_PK' : isTl ? 'tl_PH' : isBn ? 'bn_BD' : 'en_US',
      type: 'article',
      publishedTime: '2026-02-15',
      modifiedTime: '2026-07-01',
    },
    twitter: { card: 'summary_large_image', title, description },
    robots: { index: true, follow: true },
  }
}

const articleSchemaEn = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'The Complete Guide to Personal Loan Eligibility & SAMA DBR Rules in Saudi Arabia 2026',
  description: 'Everything you need to know about personal loan eligibility and SAMA Debt Burden Ratio regulations. Covers how banks calculate your maximum loan, the 33% DBR rule, Simah credit score impact, and strategies to improve approval chances.',
  author: { '@type': 'Person', name: 'Sauditoolhub Team' },
  publisher: { '@type': 'Organization', name: 'Sauditoolhub', logo: { '@type': 'ImageObject', url: `${baseUrl}/logo.png` } },
  datePublished: '2026-02-15',
  dateModified: '2026-07-01',
}

const schemaAr = {
  ...articleSchemaEn,
  headline: 'الدليل الكامل لأهلية القرض الشخصي ونسبة العبء المالي في السعودية 2026',
  description: 'كل ما تحتاج معرفته عن أهلية القروض الشخصية وقواعد نسبة العبء المالي من ساما. يشرح كيفية حساب البنوك للحد الأقصى للقرض، قاعدة 33%، تأثير درجة سما، واستراتيجيات تحسين فرص الموافقة.',
}

const schemaUr = {
  ...articleSchemaEn,
  headline: 'سعودی عرب میں پرسنل لون اہلیت اور ساما ڈی بی آر کا مکمل گائیڈ 2026',
  description: 'پرسنل لون کی اہلیت اور ساما ڈیٹ برڈن ریشو کے بارے میں ہر وہ چیز۔ بینک زیادہ سے زیادہ قرض کا حساب کیسے کرتے ہیں، 33% DBR اصول، سماح کریڈٹ سکور کا اثر، اور منظوری بہتر بنانے کی حکمت عملی۔',
}

const schemaTl = {
  ...articleSchemaEn,
  headline: 'Kumpletong Gabay sa Personal Loan Eligibility at SAMA DBR Rules sa Saudi Arabia 2026',
  description: 'Lahat ng kailangan mong malaman tungkol sa personal loan eligibility at SAMA DBR regulations. Paano kalkulahin ng mga bangko ang maximum loan, ang 33% DBR rule, epekto ng Simah credit score, at mga estratehiya para mapabuti ang approval.',
}

const schemaBn = {
  ...articleSchemaEn,
  headline: 'সৌদি আরবে ব্যক্তিগত ঋণের যোগ্যতা ও SAMA DBR নিয়ম সম্পূর্ণ গাইড 2026',
  description: 'সৌদি আরবে ব্যক্তিগত ঋণের যোগ্যতা এবং SAMA DBR নিয়ম সম্পর্কে আপনার যা কিছু জানা দরকার। ব্যাংকগুলি কীভাবে সর্বোচ্চ ঋণ গণনা করে, 33% DBR নিয়ম, সিমাহ ক্রেডিট স্কোরের প্রভাব এবং অনুমোদনের সম্ভাবনা উন্নত করার কৌশল।',
}

const faqsEn = [
  { question: 'What is the SAMA Debt Burden Ratio (DBR) and how does it affect my loan?', answer: 'The Debt Burden Ratio (DBR) is a regulation by the Saudi Central Bank (SAMA) that limits your total monthly debt payments to a maximum of 33% of your gross monthly salary for private sector employees, and up to 45% for government employees with no existing debts. This means if you earn 15,000 SAR per month, your total monthly loan payments (including any existing car loan, credit card minimum payments, and the new loan EMI) cannot exceed 4,950 SAR (33% of 15,000).' },
  { question: 'What is the maximum personal loan amount I can get in Saudi Arabia?', answer: 'The maximum personal loan amount in Saudi Arabia is generally capped at 750,000 SAR for Saudi nationals and 150,000 SAR for expats (non-Saudi residents). However, the actual amount you qualify for depends on your salary, DBR, Simah credit score, loan tenure, and the applicable interest rate (APR). Use the Sauditoolhub SAMA Loan Calculator at /sama-loan-calculator to estimate your exact maximum loan amount based on your specific profile.' },
  { question: 'Do banks use gross salary or basic salary to calculate loan eligibility?', answer: 'Most Saudi banks use gross monthly salary (total salary including allowances like housing, transportation, and other benefits) to calculate your DBR and loan eligibility. This is a key advantage because your gross salary is typically 25-40% higher than your basic salary. For example, if your basic salary is 10,000 SAR but your gross is 15,000 SAR, the bank uses 15,000 SAR for the DBR calculation, giving you 4,950 SAR (33%) monthly capacity instead of only 3,300 SAR.' },
  { question: 'How does my Simah credit score affect loan approval?', answer: 'Your Simah credit score ranges from 400 to 900. A score above 700 is considered good and significantly increases your chances of approval. A score below 600 will likely result in rejection even if your DBR is within limits. Factors that hurt your score include: late payments on any loan or credit card, maxing out credit cards, multiple loan applications in a short period, and bounced cheques. Checking your Simah report regularly is recommended.' },
  { question: 'Can I get a personal loan with existing debt in Saudi Arabia?', answer: 'Yes, but your existing debt payments reduce the amount you can borrow for a new loan. The bank calculates your remaining DBR capacity: Max EMI = Gross Salary × 0.33 minus your existing monthly obligations (car loan EMI, credit card minimum payments, etc.). For example, with a 15,000 SAR salary and a 2,000 SAR car loan, your remaining EMI capacity is 15,000 × 0.33 - 2,000 = 2,950 SAR per month for a new loan.' },
  { question: 'What is the difference between the 33% and 45% DBR rules in Saudi Arabia?', answer: 'The standard DBR limit is 33% of gross salary for all employees. However, government employees with no existing debts may qualify for the 45% DBR rule, allowing them to allocate up to 45% of their salary to a single loan. This higher ratio means government employees can borrow significantly larger amounts. For example, a government employee earning 20,000 SAR with no debts can have a maximum EMI of 20,000 × 0.45 = 9,000 SAR for a new loan.' },
  { question: 'What are the hidden costs of personal loans in Saudi Arabia?', answer: 'Common hidden costs include: (1) Administration/processing fee: usually 1% of the loan amount or a flat 500 SAR, (2) Early settlement fee: 1% of the remaining balance or 5,000 SAR whichever is lower, (3) Late payment penalty: typically 2-3% of the overdue amount, (4) VAT at 15% on all administrative fees, (5) Mandatory life insurance: usually covers the loan balance in case of death or disability, and (6) Account maintenance fees if a non-salary account.' },
  { question: 'How can I improve my loan eligibility in Saudi Arabia?', answer: 'Strategies include: (1) Pay off credit card balances before applying — ideally keep utilization below 30% of your credit limit, (2) Close unused credit cards to reduce the perceived available credit, (3) Check your Simah report and dispute any errors, (4) Avoid applying for multiple loans simultaneously as each application creates a credit inquiry, (5) Increase your income through a salary raise or additional certifications, (6) Consider adding a co-signer if the bank allows it, (7) Choose a longer loan tenure to reduce the monthly EMI.' },
  { question: 'What is the maximum loan tenure for personal loans in Saudi Arabia?', answer: 'Personal loan tenures in Saudi Arabia typically range from 12 to 60 months (1-5 years). Some banks offer tenures up to 84 months (7 years) for larger loan amounts or specific Islamic financing products. A longer tenure reduces your monthly EMI (which helps with DBR) but increases the total interest paid over the life of the loan. Use the Sauditoolhub SAMA Loan Calculator at /sama-loan-calculator to compare different tenure options.' },
  { question: 'Can expats get personal loans in Saudi Arabia in 2026?', answer: 'Yes, expats (non-Saudi residents with a valid Iqama) can get personal loans in Saudi Arabia, though the maximum limit is lower than for Saudi nationals — typically up to 150,000 SAR compared to 750,000 SAR for Saudis. Expats also need a higher salary threshold (usually minimum 3,000-5,000 SAR depending on the bank), a valid Iqama with at least 6 months remaining, and a clean Simah credit report. Interest rates for expats are often 1-2% higher than for Saudi nationals.' },
]

const faqsAr = [
  { question: 'ما هي نسبة العبء المالي من ساما وكيف تؤثر على قرضي؟', answer: 'نسبة العبء المالي هي لائحة من البنك المركزي السعودي (ساما) تحد أقساطك الشهرية الإجمالية بحد أقصى 33% من الراتب الإجمالي لموظفي القطاع الخاص، وحتى 45% لموظفي الحكومة بدون ديون قائمة. يعني ذلك إذا كنت تتقاضى 15,000 ريال شهرياً، فلا يمكن أن تتجاوز أقساطك الشهرية 4,950 ريال.' },
  { question: 'ما هو الحد الأقصى للقرض الشخصي الذي يمكنني الحصول عليه؟', answer: 'الحد الأقصى للقرض الشخصي هو 750,000 ريال للسعوديين و150,000 ريال للوافدين. لكن المبلغ الفعلي يعتمد على راتبك ونسبة العبء المالي ودرجة سما ومدة القرض. استخدم حاسبة ساما للقروض من Sauditoolhub على /sama-loan-calculator لتقدير المبلغ بدقة.' },
  { question: 'هل تستخدم البنوك الراتب الأساسي أم الإجمالي لحساب أهلية القرض؟', answer: 'معظم البنوك تستخدم الراتب الشهري الإجمالي (يشمل البدلات) لحساب نسبة العبء المالي. هذه ميزة لأن الراتب الإجمالي أعلى بنسبة 25-40% من الأساسي. فمثلاً إذا كان أساسيك 10,000 ريال وإجماليك 15,000 ريال، تستخدم البنوك 15,000 ريال.' },
  { question: 'كيف تؤثر درجة سما الائتمانية على الموافقة على القرض؟', answer: 'درجة سما تتراوح من 400 إلى 900. الدرجة فوق 700 جيدة وتزيد فرص الموافقة. الدرجة تحت 600 ستؤدي عادة إلى الرفض حتى لو كانت نسبة العبء المالي ضمن الحدود. العوامل التي تضر بالدرجة تشمل: التأخر في السداد، استنفاد بطاقات الائتمان، طلبات قروض متعددة.' },
  { question: 'هل يمكنني الحصول على قرض شخصي مع ديون قائمة؟', answer: 'نعم، لكن أقساط ديونك الحالية تقلل المبلغ الذي يمكنك اقتراضه. البنك يحسب: الحد الأقصى للقسط = الراتب الإجمالي × 0.33 ناقص الالتزامات الحالية. مثلاً مع راتب 15,000 ريال وقرض سيارة 2,000 ريال، المتبقي هو 2,950 ريال شهرياً لقرض جديد.' },
  { question: 'ما الفرق بين قاعدة 33% و 45% في نسبة العبء المالي؟', answer: 'الحد القياسي هو 33% للجميع. لكن موظفي الحكومة بدون ديون قائمة قد يستفيدون من قاعدة 45%، مما يسمح بتخصيص 45% من الراتب لقرض واحد. مثلاً موظف حكومي براتب 20,000 ريال يمكن أن يكون قسطه الشهري 9,000 ريال.' },
  { question: 'ما التكاليف الخفية للقروض الشخصية في السعودية؟', answer: 'تشمل: (1) رسوم إدارية: 1% من قيمة القرض أو 500 ريال، (2) رسوم التسديد المبكر: 1% من الرصيد المتبقي أو 5,000 ريال أيهما أقل، (3) غرامة التأخير: 2-3% من المبلغ المتأخر، (4) ضريبة القيمة المضافة 15% على الرسوم الإدارية، (5) التأمين الإلزامي على الحياة.' },
  { question: 'كيف يمكنني تحسين أهليتي للحصول على قرض؟', answer: '(1) سدد بطاقات الائتمان قبل التقديم، (2) أغلق البطاقات غير المستخدمة، (3) افحص تقرير سما واعترض على الأخطاء، (4) تجنب التقديم على قروض متعددة في وقت واحد، (5) زد دخلك، (6) اختر مدة أطول لتقليل القسط الشهري.' },
  { question: 'ما هي أقصى مدة للقرض الشخصي في السعودية؟', answer: 'تتراوح مدة القرض الشخصي من 12 إلى 60 شهراً (1-5 سنوات). بعض البنوك تقدم مدة حتى 84 شهراً (7 سنوات) لمبالغ أكبر. المدة الأطول تقلل القسط الشهري لكن تزيد إجمالي الفائدة.' },
  { question: 'هل يمكن للوافدين الحصول على قروض شخصية في السعودية؟', answer: 'نعم، لكن الحد الأقصى أقل — 150,000 ريال مقارنة بـ 750,000 ريال للسعوديين. يحتاج الوافدون إلى راتب لا يقل عن 3,000-5,000 ريال، إقامة سارية بستة أشهر على الأقل، وتقرير سما نظيف.' },
]

const faqsUr = [
  { question: 'ساما ڈیٹ برڈن ریشو (DBR) کیا ہے اور یہ میرے قرض کو کیسے متاثر کرتا ہے؟', answer: 'ڈیٹ برڈن ریشو سعودی مرکزی بینک (ساما) کا ایک ضابطہ ہے جو آپ کی ماہانہ قسطوں کو پرائیویٹ سیکٹر کے ملازمین کے لیے مجموعی تنخواہ کے 33% اور سرکاری ملازمین کے لیے 45% تک محدود کرتا ہے۔' },
  { question: 'سعودی عرب میں زیادہ سے زیادہ پرسنل لون کتنا مل سکتا ہے؟', answer: 'زیادہ سے زیادہ پرسنل لون سعودیوں کے لیے 750,000 SAR اور غیر ملکیوں کے لیے 150,000 SAR ہے۔ اصل رقم آپ کی تنخواہ، DBR، سماح سکور اور قرض کی مدت پر منحصر ہے۔ /sama-loan-calculator پر SAMA Loan Calculator استعمال کریں۔' },
  { question: 'کیا بینک بنیادی تنخواہ استعمال کرتے ہیں یا کل تنخواہ؟', answer: 'زیادہ تر بینک کل تنخواہ (بنیادی + الاؤنسز) استعمال کرتے ہیں۔ یہ فائدہ مند ہے کیونکہ کل تنخواہ بنیادی سے 25-40% زیادہ ہوتی ہے۔' },
  { question: 'سماح کریڈٹ سکور قرض کی منظوری کو کیسے متاثر کرتا ہے؟', answer: 'سماح سکور 400 سے 900 تک ہوتا ہے۔ 700 سے اوپر اچھا سمجھا جاتا ہے۔ 600 سے نیچے عام طور پر مسترد کر دیا جاتا ہے چاہے DBR ٹھیک ہو۔' },
  { question: 'کیا موجودہ قرضوں کے ساتھ پرسنل لون لے سکتے ہیں؟', answer: 'ہاں، لیکن موجودہ قرضے نئے قرض کی رقم کم کر دیتے ہیں۔ بینک حساب کرتا ہے: زیادہ سے زیادہ قسط = کل تنخواہ × 0.33 مائنس موجودہ اقساط۔' },
  { question: '33% اور 45% DBR میں کیا فرق ہے؟', answer: 'معیاری حد 33% ہے۔ سرکاری ملازمین بغیر قرضوں کے 45% DBR سے فائدہ اٹھا سکتے ہیں، جس سے وہ زیادہ بڑی رقم قرض لے سکتے ہیں۔' },
  { question: 'پرسنل لون کی پوشیدہ لاگت کیا ہے؟', answer: 'انتظامی فیس (1% یا 500 SAR)، جلد ادائیگی کی فیس (1% یا 5,000 SAR)، دیر سے ادائیگی کا جرمانہ (2-3%)، VAT 15%، اور لازمی لائف انشورنس۔' },
  { question: 'قرض کی اہلیت کیسے بہتر کروں؟', answer: 'کریڈٹ کارڈز ادا کریں، غیر استعمال شدہ کارڈز بند کریں، سماح رپورٹ چیک کریں، ایک ساتھ متعدد قرضوں کے لیے درخواست نہ دیں، آمدنی بڑھائیں، اور طویل مدت منتخب کریں۔' },
  { question: 'پرسنل لون کی زیادہ سے زیادہ مدت کیا ہے؟', answer: 'عام طور پر 12 سے 60 ماہ (1-5 سال)۔ کچھ بینک 84 ماہ (7 سال) تک دیتے ہیں۔ طویل مدت ماہانہ قسط کم کرتی ہے لیکن کل سود بڑھاتی ہے۔' },
  { question: 'کیا غیر ملکی سعودی عرب میں پرسنل لون لے سکتے ہیں؟', answer: 'ہاں، لیکن زیادہ سے زیادہ حد کم ہے — 150,000 SAR۔ کم از کم تنخواہ 3,000-5,000 SAR، کم از کم 6 ماہ کی اقامہ، اور صاف سماح رپورٹ درکار ہے۔' },
]

const faqsTl = [
  { question: 'Ano ang SAMA Debt Burden Ratio (DBR) at paano ito nakakaapekto sa aking loan?', answer: 'Ang DBR ay isang regulasyon ng Saudi Central Bank (SAMA) na naglilimita sa iyong buwanang pagbabayad ng utang sa maximum na 33% ng iyong gross monthly salary para sa private sector employees, at hanggang 45% para sa government employees na walang utang.' },
  { question: 'Ano ang maximum na personal loan amount na makukuha ko sa Saudi Arabia?', answer: 'Ang maximum personal loan ay 750,000 SAR para sa Saudi nationals at 150,000 SAR para sa expats. Ang aktwal na halaga ay depende sa iyong salary, DBR, Simah score, at loan tenure. Gamitin ang SAMA Loan Calculator sa /sama-loan-calculator.' },
  { question: 'Gross salary ba o basic salary ang ginagamit ng mga bangko?', answer: 'Karamihan sa mga bangko ay gumagamit ng gross monthly salary (kasama ang allowances). Ito ay isang advantage dahil ang gross salary ay 25-40% na mas mataas kaysa sa basic salary.' },
  { question: 'Paano naaapektuhan ng Simah credit score ang loan approval?', answer: 'Ang Simah score ay mula 400 hanggang 900. Ang score na higit sa 700 ay itinuturing na maganda. Ang score na mababa sa 600 ay karaniwang nagreresulta sa rejection kahit na ang DBR ay nasa loob ng limitasyon.'},
  { question: 'Maaari bang kumuha ng personal loan kung may existing debt?', answer: 'Oo, ngunit binabawasan ng iyong existing debt payments ang halaga na maaari mong hiramin. Kinakalkula ng bangko: Max EMI = Gross Salary × 0.33 minus existing obligations.' },
  { question: 'Ano ang pagkakaiba ng 33% at 45% DBR rules?', answer: 'Ang standard DBR limit ay 33%. Ang government employees na walang utang ay maaaring maging kwalipikado para sa 45% DBR rule, na nagpapahintulot sa kanila na humiram ng mas malaking halaga.' },
  { question: 'Ano ang mga hidden costs ng personal loans?', answer: 'Kabilang dito ang: administration fee (1% o 500 SAR), early settlement fee (1% o 5,000 SAR), late payment penalty (2-3%), VAT sa fees (15%), at mandatory life insurance.' },
  { question: 'Paano ko mapapabuti ang aking loan eligibility?', answer: 'Bayaran ang credit card balances, isara ang hindi ginagamit na credit cards, suriin ang Simah report, iwasan ang maraming loan applications nang sabay, at pumili ng mas mahabang loan tenure.' },
  { question: 'Ano ang maximum loan tenure para sa personal loan?', answer: 'Karaniwang 12 hanggang 60 buwan (1-5 taon). Ang ilang bangko ay nag-aalok ng hanggang 84 buwan (7 taon). Mas mahabang tenure ay nagpapababa ng monthly EMI.' },
  { question: 'Maaari bang kumuha ng personal loan ang mga expat sa Saudi Arabia?', answer: 'Oo, ngunit ang maximum ay mas mababa — 150,000 SAR. Kailangan ng minimum na 3,000-5,000 SAR na kita, valid na Iqama na may 6 na buwan natitira, at malinis na Simah report.' },
]

const faqsBn = [
  { question: 'SAMA ডেট বার্ডেন রেশিও (DBR) কী এবং এটি কীভাবে আমার ঋণকে প্রভাবিত করে?', answer: 'ডেট বার্ডেন রেশিও হল সৌদি সেন্ট্রাল ব্যাংকের (SAMA) একটি নিয়ম যা আপনার মোট মাসিক ঋণ পরিশোধকে বেসরকারি খাতের কর্মীদের জন্য মোট বেতনের সর্বোচ্চ 33% এবং সরকারি কর্মচারীদের জন্য 45% পর্যন্ত সীমাবদ্ধ করে।' },
  { question: 'সৌদি আরবে সর্বোচ্চ কত ব্যক্তিগত ঋণ পেতে পারি?', answer: 'সর্বোচ্চ ব্যক্তিগত ঋণ সৌদি নাগরিকদের জন্য ৭৫০,০০০ SAR এবং প্রবাসীদের জন্য ১৫০,০০০ SAR। প্রকৃত পরিমাণ আপনার বেতন, DBR, সিমাহ স্কোর এবং ঋণের মেয়াদের উপর নির্ভর করে। /sama-loan-calculator-এ SAMA Loan Calculator ব্যবহার করুন।' },
  { question: 'ব্যাংকগুলি কি মোট বেতন নাকি মূল বেতন ব্যবহার করে?', answer: 'বেশিরভাগ ব্যাংক মোট মাসিক বেতন (ভাতাসহ) ব্যবহার করে DBR গণনার জন্য। এটি সুবিধাজনক কারণ মোট বেতন মূল বেতনের থেকে ২৫-৪০% বেশি হয়।' },
  { question: 'সিমাহ ক্রেডিট স্কোর কীভাবে ঋণ অনুমোদনকে প্রভাবিত করে?', answer: 'সিমাহ স্কোর ৪০০ থেকে ৯০০ পর্যন্ত হয়। ৭০০-এর উপরে স্কোর ভাল বলে বিবেচিত হয়। ৬০০-এর নিচে স্কোর সাধারণত প্রত্যাখ্যান করে এমনকি DBR সীমার মধ্যে থাকলেও।' },
  { question: 'বিদ্যমান ঋণ থাকলে কি ব্যক্তিগত ঋণ নিতে পারি?', answer: 'হ্যাঁ, কিন্তু আপনার বিদ্যমান ঋণ পরিশোধ নতুন ঋণের পরিমাণ কমিয়ে দেয়। ব্যাংক গণনা করে: সর্বোচ্চ EMI = মোট বেতন × ০.৩৩ বিয়োগ বিদ্যমান বাধ্যবাধকতা।' },
  { question: '33% এবং 45% DBR নিয়মের মধ্যে পার্থক্য কী?', answer: 'মানক DBR সীমা 33%। সরকারি কর্মচারীরা যাদের কোনো ঋণ নেই তারা 45% DBR নিয়মের জন্য যোগ্য হতে পারে, যা তাদের বেশি পরিমাণ ধার নিতে দেয়।' },
  { question: 'ব্যক্তিগত ঋণের লুকানো খরচগুলি কী কী?', answer: 'প্রশাসনিক ফি (1% বা 500 SAR), তাড়াতাড়ি পরিশোধ ফি (1% বা 5,000 SAR), বিলম্বে পরিশোধ জরিমানা (2-3%), ফিগুলির উপর 15% VAT, এবং বাধ্যতামূলক জীবন বীমা।' },
  { question: 'আমার ঋণের যোগ্যতা কীভাবে উন্নত করব?', answer: 'ক্রেডিট কার্ডের ব্যালেন্স পরিশোধ করুন, অব্যবহৃত কার্ড বন্ধ করুন, সিমাহ রিপোর্ট পরীক্ষা করুন, একসাথে একাধিক ঋণের জন্য আবেদন এড়িয়ে চলুন এবং দীর্ঘ মেয়াদ বেছে নিন।' },
  { question: 'ব্যক্তিগত ঋণের সর্বোচ্চ মেয়াদ কত?', answer: 'সাধারণত ১২ থেকে ৬০ মাস (১-৫ বছর)। কিছু ব্যাংক ৮৪ মাস (৭ বছর) পর্যন্ত অফার করে। দীর্ঘ মেয়াদ মাসিক EMI কমায় কিন্তু মোট সুদ বাড়ায়।' },
  { question: 'প্রবাসীরা কি সৌদি আরবে ব্যক্তিগত ঋণ পেতে পারেন?', answer: 'হ্যাঁ, কিন্তু সর্বোচ্চ সীমা কম — ১৫০,০০০ SAR। ন্যূনতম ৩,০০০-৫,০০০ SAR বেতন, কমপক্ষে ৬ মাসের বৈধ ইকামা এবং পরিষ্কার সিমাহ রিপোর্ট প্রয়োজন।' },
]

function EnContent() {
  return (
    <article className="prose prose-invert max-w-none prose-headings:text-desert-primary prose-a:text-desert-primary prose-strong:text-white prose-li:text-gray-300">
      <h1>The Complete Guide to Personal Loan Eligibility &amp; SAMA DBR Rules in Saudi Arabia 2026</h1>

      <div className="not-prose glass p-6 rounded-xl mb-8">
        <p className="text-gray-300 text-lg leading-relaxed">
          You have a steady job, a decent salary, and you dream of buying a new car, renovating your home, or starting a business. You walk into a Saudi bank with confidence, submit your application, and a week later you receive the dreaded rejection letter. Or worse, you discover the loan amount you qualify for is far less than what you need. This scenario plays out thousands of times every month across the kingdom. The culprit? A misunderstood regulation called the Debt Burden Ratio (DBR) enforced by the Saudi Central Bank (SAMA).
        </p>
        <p className="text-gray-300 text-lg leading-relaxed mt-4">
          This guide explains <strong>everything you need to know about personal loan eligibility and SAMA DBR rules in Saudi Arabia in 2026</strong>. We cover how banks calculate your maximum loan amount, the difference between the 33% and 45% DBR rules, the role of your Simah credit score, hidden loan costs, and proven strategies to improve your approval chances.
        </p>
        <p className="text-gray-300 text-lg leading-relaxed mt-4">
          Use our free{' '}
          <Link href="/sama-loan-calculator" className="text-desert-primary font-bold underline">
            SAMA Loan Calculator
          </Link>{' '}
          to instantly calculate your maximum loan eligibility based on your salary, existing debts, and preferred tenure.
        </p>
      </div>

      <h2>What is SAMA and the Debt Burden Ratio (DBR)?</h2>
      <p>
        The Saudi Central Bank (SAMA) is the kingdom's financial regulator responsible for overseeing all banks and financial institutions. In its role as protector of both the banking system and consumers, SAMA introduced the Debt Burden Ratio regulation to ensure that individuals do not over-borrow beyond their ability to repay. This regulation protects you from financial distress and protects the banks from default risk.
      </p>

      <div className="not-prose glass p-5 rounded-xl mb-6">
        <h3 className="text-desert-primary font-semibold mb-3">The Golden Rule of DBR</h3>
        <div className="bg-[#0A0E1A] p-4 rounded-lg text-gray-300 text-sm font-mono">
          <p className="text-desert-primary font-bold text-lg">Max Total Monthly Debt Payments = Gross Monthly Salary × DBR Percentage</p>
        </div>
        <div className="mt-4 space-y-3">
          <div className="flex items-start gap-3">
            <Shield className="h-5 w-5 text-desert-primary mt-0.5 shrink-0" />
            <div>
              <strong className="text-white">Private Sector Employees:</strong>
              <p className="text-gray-400 text-sm">Maximum DBR of <strong>33%</strong> of gross monthly salary. This applies to all private sector employees regardless of existing debts.</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <Shield className="h-5 w-5 text-desert-gold mt-0.5 shrink-0" />
            <div>
              <strong className="text-white">Government Employees (No Existing Debts):</strong>
              <p className="text-gray-400 text-sm">Maximum DBR of <strong>45%</strong> of gross monthly salary for a single loan. This higher limit is available only if you have no existing loan obligations at the time of application.</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <Shield className="h-5 w-5 text-desert-accent mt-0.5 shrink-0" />
            <div>
              <strong className="text-white">Government Employees (With Existing Debts):</strong>
              <p className="text-gray-400 text-sm">Standard DBR of <strong>33%</strong> applies, just like private sector employees. Existing loan payments count toward this limit.</p>
            </div>
          </div>
        </div>
      </div>

      <h2>How Banks Calculate Your Loan Eligibility in 2026</h2>
      <p>Understanding the calculation method is essential before you apply. Saudi banks follow a standardized process mandated by SAMA, but there are nuances that can work in your favor or against you.</p>

      <h3>Gross Salary vs. Basic Salary</h3>
      <p>
        One of the most important distinctions to understand is that Saudi banks use your <strong>gross monthly salary</strong> (total compensation including basic salary, housing allowance, transportation allowance, and other benefits) rather than just your basic salary for DBR calculations. This is advantageous because your gross salary is typically 25-40% higher than your basic salary. For example, if your basic salary is 10,000 SAR but your gross is 15,000 SAR, the bank calculates your DBR on 15,000 SAR giving you significantly more borrowing capacity.
      </p>

      <h3>Impact of Existing Loans</h3>
      <p>
        Any existing loan or credit obligation reduces the amount you can borrow. The bank looks at:
      </p>
      <ul>
        <li><strong>Car loan EMI:</strong> The full monthly payment counts against your DBR.</li>
        <li><strong>Credit card minimum payment:</strong> Typically 5% of the outstanding balance. If you have 10,000 SAR on your credit card, the bank assumes a minimum payment of 500 SAR per month.</li>
        <li><strong>Existing personal loan EMIs:</strong> Any ongoing personal loan payments are fully counted.</li>
        <li><strong>Real estate loan (Mortgage):</strong> Mortgage payments also count toward your total DBR.</li>
      </ul>

      <h3>The Role of Your Simah Credit Score</h3>
      <p>
        Your Simah credit score is one of the most critical factors in loan approval. Simah (Saudi Credit Bureau) maintains credit reports on all individuals who have financial relationships with banks, finance companies, or telecom providers. Your score ranges from 400 to 900, with higher scores indicating better creditworthiness.
      </p>

      <div className="not-prose glass p-5 rounded-xl mb-6">
        <h3 className="text-white font-semibold mb-2">Simah Score Ranges and What They Mean</h3>
        <ul className="space-y-2 text-gray-400 text-sm">
          <li><strong className="text-green-400">750 - 900 (Excellent):</strong> Highest approval chances. You may qualify for preferential interest rates.</li>
          <li><strong className="text-desert-primary">650 - 749 (Good):</strong> Strong approval chances. Standard interest rates apply.</li>
          <li><strong className="text-yellow-400">550 - 649 (Fair):</strong> Some banks may approve but with higher interest rates and stricter conditions.</li>
          <li><strong className="text-red-400">400 - 549 (Poor):</strong> High likelihood of rejection. Work on improving your score before applying.</li>
        </ul>
      </div>

      <h2>Step-by-Step Calculation Formula</h2>

      <div className="not-prose glass p-5 rounded-xl mb-6">
        <h3 className="text-desert-primary font-semibold mb-3">How to Calculate Your Maximum Loan Amount</h3>
        <div className="space-y-4">
          <div className="bg-[#0A0E1A] p-4 rounded-lg">
            <p className="text-white font-semibold mb-2">Step 1: Calculate Your Maximum Allowed EMI</p>
            <div className="text-gray-300 text-sm font-mono">
              <p>Max EMI = Gross Monthly Salary × DBR Percentage</p>
              <p className="text-gray-400 mt-1">Example: 15,000 SAR × 33% = 4,950 SAR</p>
            </div>
          </div>
          <div className="bg-[#0A0E1A] p-4 rounded-lg">
            <p className="text-white font-semibold mb-2">Step 2: Subtract Existing Obligations</p>
            <div className="text-gray-300 text-sm font-mono">
              <p>Available EMI = Max EMI - Existing EMIs</p>
              <p className="text-gray-400 mt-1">Example: 4,950 SAR - 2,000 SAR (car loan) = 2,950 SAR available for new loan</p>
            </div>
          </div>
          <div className="bg-[#0A0E1A] p-4 rounded-lg">
            <p className="text-white font-semibold mb-2">Step 3: Calculate Maximum Loan Principal</p>
            <div className="text-gray-300 text-sm font-mono">
              <p>Loan Amount = Available EMI × (1 - (1 + Monthly Rate) ^ -Tenure) / Monthly Rate</p>
              <p className="text-gray-400 mt-1">Or simply use our{' '}
                <Link href="/sama-loan-calculator" className="text-desert-primary underline">SAMA Loan Calculator</Link>
              </p>
            </div>
          </div>
        </div>
      </div>

      <h2>Real-Life Calculation Examples</h2>

      <div className="not-prose glass p-5 rounded-xl mb-6">
        <h3 className="text-white font-semibold mb-3">Example 1: Private Sector Employee with Car Loan</h3>
        <p className="text-gray-300 text-sm mb-3">Ahmed works for a private company in Riyadh. He earns 15,000 SAR gross monthly and has an existing car loan with a monthly payment of 2,000 SAR. He wants a personal loan for home renovations over 5 years at an APR of 5%.</p>
        <div className="bg-[#0A0E1A] p-4 rounded-lg text-gray-300 text-sm space-y-1.5 font-mono">
          <p>Gross Monthly Salary: 15,000 SAR</p>
          <p>DBR Limit (33%): 15,000 × 0.33 = 4,950 SAR</p>
          <p>Existing Car Loan EMI: 2,000 SAR</p>
          <p>Available EMI: 4,950 - 2,000 = <strong>2,950 SAR</strong></p>
          <p>Loan Tenure: 60 months (5 years)</p>
          <p>APR: 5%</p>
          <p>Calculated Max Loan Amount: <strong className="text-desert-primary">~156,000 SAR</strong></p>
          <p className="text-gray-400 text-xs mt-1">Total interest paid over 5 years: ~20,400 SAR</p>
        </div>
      </div>

      <div className="not-prose glass p-5 rounded-xl mb-6">
        <h3 className="text-white font-semibold mb-3">Example 2: Government Employee with 45% DBR</h3>
        <p className="text-gray-300 text-sm mb-3">Khalid is a government employee earning 20,000 SAR gross monthly. He has no existing debts and qualifies for the 45% DBR rule. He wants a personal loan for a new car over 5 years at an APR of 4.5%.</p>
        <div className="bg-[#0A0E1A] p-4 rounded-lg text-gray-300 text-sm space-y-1.5 font-mono">
          <p>Gross Monthly Salary: 20,000 SAR</p>
          <p>DBR Limit (45% - Government, no debts): 20,000 × 0.45 = 9,000 SAR</p>
          <p>Existing EMIs: 0 SAR</p>
          <p>Available EMI: <strong>9,000 SAR</strong></p>
          <p>Loan Tenure: 60 months (5 years)</p>
          <p>APR: 4.5%</p>
          <p>Calculated Max Loan Amount: <strong className="text-desert-primary">~484,000 SAR</strong></p>
          <p className="text-gray-400 text-xs mt-1">Note: Standard max limits still apply (750,000 SAR for Saudis)</p>
        </div>
      </div>

      <div className="not-prose glass p-5 rounded-xl mb-6">
        <h3 className="text-white font-semibold mb-3">Example 3: Expat Employee with Credit Card Debt</h3>
        <p className="text-gray-300 text-sm mb-3">Maria is an expat working in Dammam earning 12,000 SAR gross. She has a credit card balance of 8,000 SAR (minimum payment 5% = 400 SAR). She wants a personal loan of 50,000 SAR.</p>
        <div className="bg-[#0A0E1A] p-4 rounded-lg text-gray-300 text-sm space-y-1.5 font-mono">
          <p>Gross Monthly Salary: 12,000 SAR</p>
          <p>DBR Limit (33%): 12,000 × 0.33 = 3,960 SAR</p>
          <p>Credit Card Min Payment (8,000 × 5%): 400 SAR</p>
          <p>Available EMI: 3,960 - 400 = <strong>3,560 SAR</strong></p>
          <p>Maximum Loan at 5.5% APR over 4 years: ~153,000 SAR</p>
          <p className="text-desert-primary">50,000 SAR loan is well within eligibility ✓</p>
          <p className="text-gray-400 text-xs mt-1">Tip: Paying off the credit card increases available EMI to 3,960 SAR</p>
        </div>
      </div>

      <h2>How to Improve Your Loan Eligibility in Saudi Arabia</h2>

      <div className="not-prose glass p-5 rounded-xl mb-6">
        <ul className="space-y-4 text-gray-300">
          <li className="flex items-start gap-3">
            <CheckCircle className="h-5 w-5 text-desert-primary mt-0.5 shrink-0" />
            <div>
              <strong className="text-white">Pay Off Credit Card Balances Before Applying</strong>
              <p className="text-sm text-gray-400">Credit card minimum payments count toward your DBR. Paying off your balance eliminates this deduction and frees up EMI capacity. Keep your credit utilization below 30% of your total credit limit for at least 3-6 months before applying for a major loan.</p>
            </div>
          </li>
          <li className="flex items-start gap-3">
            <CheckCircle className="h-5 w-5 text-desert-primary mt-0.5 shrink-0" />
            <div>
              <strong className="text-white">Improve Your Simah Score</strong>
              <p className="text-sm text-gray-400">Check your Simah credit report at least 6 months before your planned loan application. Dispute any incorrect entries. Pay all bills on time (including telecom and utility bills, as these are now tracked by Simah). Reduce your total outstanding debt gradually.</p>
            </div>
          </li>
          <li className="flex items-start gap-3">
            <CheckCircle className="h-5 w-5 text-desert-primary mt-0.5 shrink-0" />
            <div>
              <strong className="text-white">Consider a Longer Tenure</strong>
              <p className="text-sm text-gray-400">A longer repayment period reduces your monthly EMI, which makes it easier to stay within the DBR limit. For example, a 100,000 SAR loan at 5% APR has an EMI of 1,887 SAR over 5 years but only 1,061 SAR over 10 years. The trade-off is higher total interest paid.</p>
            </div>
          </li>
          <li className="flex items-start gap-3">
            <CheckCircle className="h-5 w-5 text-desert-primary mt-0.5 shrink-0" />
            <div>
              <strong className="text-white">Avoid Multiple Loan Applications</strong>
              <p className="text-sm text-gray-400">Each loan application creates an inquiry on your Simah report. Multiple inquiries in a short period signal financial distress and lower your credit score. Research banks carefully before applying and consider using our{' '}
                <Link href="/sama-loan-calculator" className="text-desert-primary underline">SAMA Loan Calculator</Link>
                {' '}to pre-qualify yourself before approaching any bank.
              </p>
            </div>
          </li>
          <li className="flex items-start gap-3">
            <CheckCircle className="h-5 w-5 text-desert-primary mt-0.5 shrink-0" />
            <div>
              <strong className="text-white">Increase Your Income</strong>
              <p className="text-sm text-gray-400">Since DBR is calculated as a percentage of your gross salary, any increase in income directly increases your borrowing capacity. A promotion, a salary raise, or an additional certification that leads to a higher-paying role can make a significant difference.</p>
            </div>
          </li>
        </ul>
      </div>

      <h2>Hidden Costs of Personal Loans in Saudi Arabia</h2>
      <p>When comparing loan offers, do not focus only on the interest rate. Hidden fees can add thousands of riyals to the total cost of your loan.</p>

      <div className="not-prose glass p-5 rounded-xl mb-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
          <div className="bg-[#0A0E1A] p-3 rounded-lg">
            <h4 className="text-desert-accent font-semibold mb-1">Administration / Processing Fee</h4>
            <p className="text-gray-400">Usually 1% of the loan amount or a flat 500 SAR (whichever is higher). Subject to 15% VAT. For a 100,000 SAR loan, this means 1,000 SAR + 150 SAR VAT = 1,150 SAR.</p>
          </div>
          <div className="bg-[#0A0E1A] p-3 rounded-lg">
            <h4 className="text-desert-accent font-semibold mb-1">Early Settlement Fee</h4>
            <p className="text-gray-400">1% of the remaining balance or 5,000 SAR (whichever is lower). If you want to pay off your loan early, expect to pay this penalty. Some Islamic banks may waive this fee after a certain period.</p>
          </div>
          <div className="bg-[#0A0E1A] p-3 rounded-lg">
            <h4 className="text-desert-accent font-semibold mb-1">Late Payment Penalty</h4>
            <p className="text-gray-400">Typically 2-3% of the overdue amount. This is charged to your account and also reported to Simah, damaging your credit score. Set up automatic deductions from your salary account to avoid this.</p>
          </div>
          <div className="bg-[#0A0E1A] p-3 rounded-lg">
            <h4 className="text-desert-accent font-semibold mb-1">Mandatory Insurance</h4>
            <p className="text-gray-400">Life and disability insurance covering the loan balance is mandatory. The cost varies by age, loan amount, and health status. Typically 0.5-1% of the loan amount annually, added to the total financing cost.</p>
          </div>
        </div>
      </div>

      <h2>How to Use the Sauditoolhub SAMA Loan Calculator</h2>
      <div className="not-prose glass p-6 rounded-xl mb-8">
        <div className="flex items-center gap-3 mb-4">
          <Calculator className="h-8 w-8 text-desert-primary" />
          <h3 className="text-white text-lg font-bold m-0">Sauditoolhub SAMA Loan Calculator</h3>
        </div>
        <p className="text-gray-300 mb-4">
          Our interactive calculator takes the guesswork out of loan planning. Enter your gross monthly salary, select your employment sector (private or government), add any existing monthly obligations (car loans, credit card minimums), choose your preferred loan tenure and expected APR, and the calculator instantly shows you your maximum loan eligibility, monthly EMI, total interest payable, and a full amortization schedule.
        </p>
        <ul className="space-y-2 text-gray-400 text-sm mb-4">
          <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-desert-primary" /> Supports both 33% (private) and 45% (government) DBR rules</li>
          <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-desert-primary" /> Accounts for existing debts and credit card minimum payments</li>
          <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-desert-primary" /> Shows total interest cost and full amortization table</li>
          <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-desert-primary" /> Works for both Saudi nationals and expats</li>
          <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-desert-primary" /> Free — no registration or login required</li>
        </ul>
        <Link href="/sama-loan-calculator" className="inline-flex items-center gap-2 rounded-xl bg-desert-primary px-8 py-3 text-sm font-bold text-white transition-all hover:bg-desert-primary-dim">
          <Calculator className="h-4 w-4" />
          Calculate Your Eligibility Now
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
        Understanding SAMA's Debt Burden Ratio regulation is the key to successful loan planning in Saudi Arabia. Whether you are a private sector employee working within the 33% limit or a government employee eligible for the 45% rule, knowing exactly how much you can borrow, what fees to expect, and how to improve your eligibility can save you from disappointment and help you secure the financing you need.
      </p>
      <p>
        Start by calculating your loan eligibility with our{' '}
        <Link href="/sama-loan-calculator" className="text-desert-primary font-bold underline">SAMA Loan Calculator</Link>.
        Then explore our{' '}
        <Link href="/zakat-calculator" className="text-desert-primary font-bold underline">Zakat Calculator</Link>
        {' '}for Islamic wealth management and{' '}
        <Link href="/sip-calculator" className="text-desert-primary font-bold underline">SIP Calculator</Link>
        {' '}for investment planning. Visit our{' '}
        <Link href="/blog" className="text-desert-primary font-bold underline">Blog</Link>
        {' '}for more personal finance guides.
      </p>

      <div className="not-prose glass p-6 rounded-xl mt-8 text-center">
        <Calculator className="h-10 w-10 text-desert-primary mx-auto mb-3" />
        <h3 className="text-white text-lg font-bold mb-2">Know Your Loan Eligibility in Seconds</h3>
        <p className="text-gray-400 text-sm mb-4">Free SAMA Loan Calculator — instant results, no signup required</p>
        <Link href="/sama-loan-calculator" className="inline-flex items-center gap-2 rounded-xl bg-desert-primary px-8 py-3 text-sm font-bold text-white transition-all hover:bg-desert-primary-dim">
          <Calculator className="h-4 w-4" />
          Calculate Now
        </Link>
      </div>
    </article>
  )
}

function ArContent() {
  return (
    <article className="prose prose-invert max-w-none prose-headings:text-desert-primary prose-a:text-desert-primary prose-strong:text-white prose-li:text-gray-300" dir="rtl">
      <h1>الدليل الكامل لأهلية القرض الشخصي ونسبة العبء المالي في السعودية 2026</h1>

      <div className="not-prose glass p-6 rounded-xl mb-8">
        <p className="text-gray-300 text-lg leading-relaxed">
          لديك وظيفة مستقرة وراتب محترم وتحلم بشراء سيارة جديدة أو تجديد منزلك أو بدء مشروع تجاري. تدخل إلى أحد البنوك السعودية بثقة وتقدم طلبك، وبعد أسبوع تتلقى خطاب الرفض المزعج. أو الأسوأ، تكتشف أن مبلغ القرض الذي تؤهله له أقل بكثير مما تحتاج. هذا السيناريو يتكرر آلاف المرات شهرياً في جميع أنحاء المملكة. السبب؟ لائحة تنظيمية يساء فهمها تسمى نسبة العبء المالي التي يطبقها البنك المركزي السعودي (ساما).
        </p>
        <p className="text-gray-300 text-lg leading-relaxed mt-4">
          هذا الدليل يشرح <strong>كل ما تحتاج معرفته عن أهلية القرض الشخصي وقواعد نسبة العبء المالي من ساما في السعودية 2026</strong>. نغطي كيفية حساب البنوك للحد الأقصى للقرض، الفرق بين قاعدتي 33% و45%، دور درجة سما الائتمانية، التكاليف الخفية للقروض، واستراتيجيات مثبتة لتحسين فرص الموافقة.
        </p>
        <p className="text-gray-300 text-lg leading-relaxed mt-4">
          استخدم{' '}
          <Link href="/sama-loan-calculator" className="text-desert-primary font-bold underline">
            حاسبة ساما للقروض
          </Link>{' '}
          المجانية من Sauditoolhub لحساب أهليتك القصوى للقرض فوراً.
        </p>
      </div>

      <h2>ما هو البنك المركزي السعودي ونسبة العبء المالي؟</h2>
      <p>
        البنك المركزي السعودي (ساما) هو المنظم المالي للمملكة المسؤول عن الإشراف على جميع البنوك والمؤسسات المالية. في دوره كحامي للنظام المصرفي والمستهلكين، قدم ساما لائحة نسبة العبء المالي لضمان عدم اقتراض الأفراد بما يتجاوز قدرتهم على السداد.
      </p>

      <div className="not-prose glass p-5 rounded-xl mb-6">
        <h3 className="text-desert-primary font-semibold mb-3">القاعدة الذهبية لنسبة العبء المالي</h3>
        <div className="bg-[#0A0E1A] p-4 rounded-lg text-gray-300 text-sm font-mono">
          <p className="text-desert-primary font-bold text-lg">إجمالي الأقساط الشهرية = الراتب الإجمالي × نسبة العبء المالي</p>
        </div>
        <div className="mt-4 space-y-3">
          <div className="flex items-start gap-3">
            <Shield className="h-5 w-5 text-desert-primary mt-0.5 shrink-0" />
            <div>
              <strong className="text-white">موظفو القطاع الخاص:</strong>
              <p className="text-gray-400 text-sm">الحد الأقصى <strong>33%</strong> من الراتب الإجمالي.</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <Shield className="h-5 w-5 text-desert-gold mt-0.5 shrink-0" />
            <div>
              <strong className="text-white">موظفو الحكومة (بدون ديون):</strong>
              <p className="text-gray-400 text-sm">الحد الأقصى <strong>45%</strong> من الراتب الإجمالي لقرض واحد.</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <Shield className="h-5 w-5 text-desert-accent mt-0.5 shrink-0" />
            <div>
              <strong className="text-white">موظفو الحكومة (بديون قائمة):</strong>
              <p className="text-gray-400 text-sm">يطبق حد <strong>33%</strong> القياسي.</p>
            </div>
          </div>
        </div>
      </div>

      <h2>كيف تحسب البنوك أهليتك للقرض في 2026</h2>
      <p>فهم طريقة الحساب ضروري قبل التقديم. البنوك السعودية تتبع عملية موحدة بموجب تعليمات ساما.</p>

      <h3>الراتب الإجمالي مقابل الراتب الأساسي</h3>
      <p>
        من أهم الفروق أن البنوك تستخدم <strong>الراتب الإجمالي</strong> (يشمل البدلات) لحساب نسبة العبء المالي. هذا لصالحك لأن الراتب الإجمالي أعلى بنسبة 25-40% من الأساسي. فمثلاً إذا كان أساسيك 10,000 ريال وإجماليك 15,000 ريال، تحسب البنوك على 15,000 ريال مما يمنحك قدرة اقتراض أعلى بكثير.
      </p>

      <h3>تأثير الديون القائمة</h3>
      <ul>
        <li><strong>قسط قرض السيارة:</strong> يحتسب كاملاً ضمن نسبة العبء المالي.</li>
        <li><strong>الحد الأدنى لبطاقة الائتمان:</strong> عادة 5% من الرصيد المستحق.</li>
        <li><strong>أقساط القروض الشخصية الحالية:</strong> تحتسب بالكامل.</li>
        <li><strong>قرض العقار:</strong> تحتسب أقساطه ضمن إجمالي نسبة العبء المالي.</li>
      </ul>

      <h3>دور درجة سما الائتمانية</h3>
      <p>
        درجة سما من أهم عوامل الموافقة على القرض. تتراوح درجاتك من 400 إلى 900. الدرجة فوق 700 ممتازة، 650-749 جيدة، 550-649 متوسطة (قد توافق بعض البنوك بشروط أعلى)، 400-549 ضعيفة (رفض محتمل).
      </p>

      <h2>معادلة الحساب خطوة بخطوة</h2>
      <div className="not-prose glass p-5 rounded-xl mb-6">
        <div className="space-y-4">
          <div className="bg-[#0A0E1A] p-4 rounded-lg">
            <p className="text-white font-semibold mb-2">الخطوة 1: حساب الحد الأقصى للقسط الشهري</p>
            <div className="text-gray-300 text-sm font-mono">
              <p>القسط الأقصى = الراتب الإجمالي × نسبة العبء المالي</p>
            </div>
          </div>
          <div className="bg-[#0A0E1A] p-4 rounded-lg">
            <p className="text-white font-semibold mb-2">الخطوة 2: طرح الالتزامات الحالية</p>
            <div className="text-gray-300 text-sm font-mono">
              <p>القسط المتاح = القسط الأقصى - الأقساط الحالية</p>
            </div>
          </div>
          <div className="bg-[#0A0E1A] p-4 rounded-lg">
            <p className="text-white font-semibold mb-2">الخطوة 3: حساب الحد الأقصى للقرض</p>
            <div className="text-gray-300 text-sm">
              <p>استخدم{' '}
                <Link href="/sama-loan-calculator" className="text-desert-primary underline">حاسبة ساما للقروض</Link>
                {' '}للحصول على النتيجة الدقيقة.
              </p>
            </div>
          </div>
        </div>
      </div>

      <h2>أمثلة عملية</h2>

      <div className="not-prose glass p-5 rounded-xl mb-6">
        <h3 className="text-white font-semibold mb-3">مثال 1: موظف قطاع خاص مع قرض سيارة</h3>
        <div className="bg-[#0A0E1A] p-4 rounded-lg text-gray-300 text-sm space-y-1.5 font-mono">
          <p>الراتب الإجمالي: 15,000 ريال</p>
          <p>حد DBR (33%): 4,950 ريال</p>
          <p>قسط قرض السيارة: 2,000 ريال</p>
          <p>القسط المتاح: 2,950 ريال</p>
          <p className="text-desert-primary font-bold mt-2">الحد الأقصى للقرض: ~156,000 ريال</p>
        </div>
      </div>

      <div className="not-prose glass p-5 rounded-xl mb-6">
        <h3 className="text-white font-semibold mb-3">مثال 2: موظف حكومي بدون ديون (نسبة 45%)</h3>
        <div className="bg-[#0A0E1A] p-4 rounded-lg text-gray-300 text-sm space-y-1.5 font-mono">
          <p>الراتب الإجمالي: 20,000 ريال</p>
          <p>حد DBR (45%): 9,000 ريال</p>
          <p>القسط المتاح: 9,000 ريال</p>
          <p className="text-desert-primary font-bold mt-2">الحد الأقصى للقرض: ~484,000 ريال</p>
        </div>
      </div>

      <h2>كيف تحسن أهليتك للقرض</h2>
      <div className="not-prose glass p-5 rounded-xl mb-6">
        <ul className="space-y-3 text-gray-300">
          <li><CheckCircle className="h-4 w-4 text-desert-primary inline ml-2" /> سدد بطاقات الائتمان قبل التقديم — حافظ على استخدام أقل من 30% من الحد الائتماني</li>
          <li><CheckCircle className="h-4 w-4 text-desert-primary inline ml-2" /> افحص تقرير سما واعترض على الأخطاء قبل 6 أشهر من التقديم</li>
          <li><CheckCircle className="h-4 w-4 text-desert-primary inline ml-2" /> اختر مدة أطول للقرض لتقليل القسط الشهري</li>
          <li><CheckCircle className="h-4 w-4 text-desert-primary inline ml-2" /> تجنب التقديم على قروض متعددة في وقت واحد</li>
          <li><CheckCircle className="h-4 w-4 text-desert-primary inline ml-2" /> زد دخلك من خلال الترقيات أو الشهادات المهنية</li>
        </ul>
      </div>

      <h2>التكاليف الخفية للقروض الشخصية</h2>
      <div className="not-prose glass p-5 rounded-xl mb-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
          <div className="bg-[#0A0E1A] p-3 rounded-lg">
            <h4 className="text-desert-accent font-semibold mb-1">الرسوم الإدارية</h4>
            <p className="text-gray-400">1% من قيمة القرض أو 500 ريال + 15% ضريبة قيمة مضافة.</p>
          </div>
          <div className="bg-[#0A0E1A] p-3 rounded-lg">
            <h4 className="text-desert-accent font-semibold mb-1">رسوم السداد المبكر</h4>
            <p className="text-gray-400">1% من الرصيد المتبقي أو 5,000 ريال أيهما أقل.</p>
          </div>
          <div className="bg-[#0A0E1A] p-3 rounded-lg">
            <h4 className="text-desert-accent font-semibold mb-1">غرامة التأخير</h4>
            <p className="text-gray-400">2-3% من المبلغ المتأخر.</p>
          </div>
          <div className="bg-[#0A0E1A] p-3 rounded-lg">
            <h4 className="text-desert-accent font-semibold mb-1">التأمين الإلزامي</h4>
            <p className="text-gray-400">تأمين على الحياة والعجز يغطي رصيد القرض.</p>
          </div>
        </div>
      </div>

      <h2>حاسبة ساما للقروض من Sauditoolhub</h2>
      <div className="not-prose glass p-6 rounded-xl mb-8">
        <div className="flex items-center gap-3 mb-4">
          <Calculator className="h-8 w-8 text-desert-primary" />
          <h3 className="text-white text-lg font-bold m-0">حاسبة ساما للقروض</h3>
        </div>
        <Link href="/sama-loan-calculator" className="inline-flex items-center gap-2 rounded-xl bg-desert-primary px-8 py-3 text-sm font-bold text-white transition-all hover:bg-desert-primary-dim">
          <Calculator className="h-4 w-4" />
          احسب أهليتك الآن
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
        فهم لائحة نسبة العبء المالي من ساما هو مفتاح التخطيط الناجح للقروض في السعودية. ابدأ بحساب أهليتك للقرض مع{' '}
        <Link href="/sama-loan-calculator" className="text-desert-primary font-bold underline">حاسبة ساما للقروض</Link>.
        ثم استكشف{' '}
        <Link href="/zakat-calculator" className="text-desert-primary font-bold underline">حاسبة الزكاة</Link>
        {' '}و{' '}
        <Link href="/sip-calculator" className="text-desert-primary font-bold underline">حاسبة الاستثمار</Link>
        . زوروا{' '}
        <Link href="/blog" className="text-desert-primary font-bold underline">المدونة</Link>.
      </p>

      <div className="not-prose glass p-6 rounded-xl mt-8 text-center">
        <Calculator className="h-10 w-10 text-desert-primary mx-auto mb-3" />
        <h3 className="text-white text-lg font-bold mb-2">اعرف أهليتك للقرض في ثوانٍ</h3>
        <p className="text-gray-400 text-sm mb-4">حاسبة مجانية — نتائج فورية، بدون تسجيل</p>
        <Link href="/sama-loan-calculator" className="inline-flex items-center gap-2 rounded-xl bg-desert-primary px-8 py-3 text-sm font-bold text-white transition-all hover:bg-desert-primary-dim">
          <Calculator className="h-4 w-4" />
          احسب الآن
        </Link>
      </div>
    </article>
  )
}

function UrContent() {
  return (
    <article className="prose prose-invert max-w-none prose-headings:text-desert-primary prose-a:text-desert-primary prose-strong:text-white prose-li:text-gray-300" dir="rtl">
      <h1>سعودی عرب میں پرسنل لون اہلیت اور ساما ڈی بی آر کا مکمل گائیڈ 2026</h1>

      <div className="not-prose glass p-6 rounded-xl mb-8">
        <p className="text-gray-300 text-lg leading-relaxed">
          آپ کے پاس مستقل نوکری، اچھی تنخواہ ہے اور آپ نیا کار خریدنے، گھر کی تزئین یا کاروبار شروع کرنے کا خواب دیکھتے ہیں۔ آپ اعتماد کے ساتھ سعودی بینک جاتے ہیں، درخواست دیتے ہیں اور ایک ہفتے بعد مستردی کا خط ملتا ہے۔ یا اس سے بھی برا، آپ کو پتہ چلتا ہے کہ قرض کی وہ رقم جس کے آپ اہل ہیں آپ کی ضرورت سے بہت کم ہے۔ یہ منظر نامہ ہر ماہ ہزاروں بار دہرایا جاتا ہے۔
        </p>
        <p className="text-gray-300 text-lg leading-relaxed mt-4">
          یہ گائیڈ <strong>2026 میں سعودی عرب میں پرسنل لون کی اہلیت اور ساما DBR قوانین کے بارے میں ہر وہ چیز</strong> بیان کرتا ہے۔
        </p>
        <p className="text-gray-300 text-lg leading-relaxed mt-4">
          ہمارا مفت{' '}
          <Link href="/sama-loan-calculator" className="text-desert-primary font-bold underline">
            SAMA Loan Calculator
          </Link>{' '}
          استعمال کریں۔
        </p>
      </div>

      <h2>ساما اور ڈیٹ برڈن ریشو کیا ہے؟</h2>
      <p>سعودی مرکزی بینک (ساما) تمام بینکوں اور مالیاتی اداروں کی نگرانی کرتا ہے۔ ساما نے ڈیٹ برڈن ریشو کا ضابطہ متعارف کرایا تاکہ افراد ان کی ادائیگی کی صلاحیت سے زیادہ قرض نہ لیں۔</p>

      <div className="not-prose glass p-5 rounded-xl mb-6">
        <h3 className="text-desert-primary font-semibold mb-3">DBR کا سنہری اصول</h3>
        <div className="bg-[#0A0E1A] p-4 rounded-lg text-gray-300 text-sm font-mono">
          <p className="text-desert-primary font-bold">مجموعی ماہانہ اقساط = کل تنخواہ × DBR فیصد</p>
        </div>
      </div>

      <h2>بینک آپ کی قرض کی اہلیت کا حساب کیسے کرتے ہیں</h2>
      <p>بینک کل تنخواہ استعمال کرتے ہیں (بنیادی + الاؤنسز)۔ موجودہ قرضے نئے قرض کی رقم کم کر دیتے ہیں۔ سماح سکور قرض کی منظوری میں انتہائی اہم ہے۔</p>

      <h2>مرحلہ وار حساب کتاب</h2>
      <div className="not-prose glass p-5 rounded-xl mb-6">
        <div className="space-y-3">
          <div className="bg-[#0A0E1A] p-3 rounded-lg">
            <p className="text-white">مرحلہ 1: زیادہ سے زیادہ EMI = کل تنخواہ × DBR فیصد</p>
          </div>
          <div className="bg-[#0A0E1A] p-3 rounded-lg">
            <p className="text-white">مرحلہ 2: دستیاب EMI = زیادہ سے زیادہ EMI - موجودہ اقساط</p>
          </div>
          <div className="bg-[#0A0E1A] p-3 rounded-lg">
            <p className="text-white">مرحلہ 3: بقیہ رقم سے زیادہ سے زیادہ قرض کا حساب</p>
          </div>
        </div>
      </div>

      <h2>عملی مثالیں</h2>

      <div className="not-prose glass p-5 rounded-xl mb-6">
        <h3 className="text-white font-semibold mb-3">مثال 1: پرائیویٹ سیکٹر ملازم کار لون کے ساتھ</h3>
        <div className="bg-[#0A0E1A] p-4 rounded-lg text-gray-300 text-sm space-y-1.5 font-mono">
          <p>کل تنخواہ: 15,000 SAR</p>
          <p>DBR حد (33%): 4,950 SAR</p>
          <p>کار لون EMI: 2,000 SAR</p>
          <p>دستیاب EMI: 2,950 SAR</p>
          <p className="text-desert-primary font-bold mt-2">زیادہ سے زیادہ قرض: ~156,000 SAR</p>
        </div>
      </div>

      <div className="not-prose glass p-5 rounded-xl mb-6">
        <h3 className="text-white font-semibold mb-3">مثال 2: سرکاری ملازم 45% DBR کے ساتھ</h3>
        <div className="bg-[#0A0E1A] p-4 rounded-lg text-gray-300 text-sm space-y-1.5 font-mono">
          <p>کل تنخواہ: 20,000 SAR</p>
          <p>DBR حد (45%): 9,000 SAR</p>
          <p>دستیاب EMI: 9,000 SAR</p>
          <p className="text-desert-primary font-bold mt-2">زیادہ سے زیادہ قرض: ~484,000 SAR</p>
        </div>
      </div>

      <h2>قرض کی اہلیت کیسے بہتر کریں</h2>
      <div className="not-prose glass p-5 rounded-xl mb-6">
        <ul className="space-y-2 text-gray-300">
          <li><CheckCircle className="h-4 w-4 text-desert-primary inline ml-2" /> کریڈٹ کارڈز ادا کریں</li>
          <li><CheckCircle className="h-4 w-4 text-desert-primary inline ml-2" /> سماح سکور بہتر کریں</li>
          <li><CheckCircle className="h-4 w-4 text-desert-primary inline ml-2" /> طویل مدت منتخب کریں</li>
          <li><CheckCircle className="h-4 w-4 text-desert-primary inline ml-2" /> ایک ساتھ متعدد درخواستوں سے بچیں</li>
        </ul>
      </div>

      <h2>پوشیدہ اخراجات</h2>
      <div className="not-prose glass p-5 rounded-xl mb-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
          <div className="bg-[#0A0E1A] p-3 rounded-lg">
            <h4 className="text-desert-accent font-semibold mb-1">انتظامی فیس</h4>
            <p className="text-gray-400">1% یا 500 SAR + VAT۔</p>
          </div>
          <div className="bg-[#0A0E1A] p-3 rounded-lg">
            <h4 className="text-desert-accent font-semibold mb-1">جلد ادائیگی فیس</h4>
            <p className="text-gray-400">1% باقی رقم یا 5,000 SAR۔</p>
          </div>
          <div className="bg-[#0A0E1A] p-3 rounded-lg">
            <h4 className="text-desert-accent font-semibold mb-1">تاخیر جرمانہ</h4>
            <p className="text-gray-400">2-3% واجب الادا رقم کا۔</p>
          </div>
          <div className="bg-[#0A0E1A] p-3 rounded-lg">
            <h4 className="text-desert-accent font-semibold mb-1">لائف انشورنس</h4>
            <p className="text-gray-400">لازمی، قرض کی رقم کا احاطہ کرتا ہے۔</p>
          </div>
        </div>
      </div>

      <h2>Sauditoolhub SAMA Loan Calculator</h2>
      <div className="not-prose glass p-6 rounded-xl mb-8">
        <Link href="/sama-loan-calculator" className="inline-flex items-center gap-2 rounded-xl bg-desert-primary px-8 py-3 text-sm font-bold text-white transition-all hover:bg-desert-primary-dim">
          <Calculator className="h-4 w-4" />
          اپنی اہلیت کا حساب لگائیں
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
        {' '}
        <Link href="/sama-loan-calculator" className="text-desert-primary font-bold underline">SAMA Loan Calculator</Link>
        {' '}استعمال کریں۔{' '}
        <Link href="/zakat-calculator" className="text-desert-primary font-bold underline">Zakat Calculator</Link>
        {' '}اور{' '}
        <Link href="/sip-calculator" className="text-desert-primary font-bold underline">SIP Calculator</Link>
        {' '}بھی دیکھیں۔{' '}
        <Link href="/blog" className="text-desert-primary font-bold underline">بلاگ</Link> پر مزید۔
      </p>

      <div className="not-prose glass p-6 rounded-xl mt-8 text-center">
        <Calculator className="h-10 w-10 text-desert-primary mx-auto mb-3" />
        <h3 className="text-white text-lg font-bold mb-2">اپنی قرض کی اہلیت سیکنڈوں میں جانیں</h3>
        <p className="text-gray-400 text-sm mb-4">مفت کیلکولیٹر — فوری نتائج</p>
        <Link href="/sama-loan-calculator" className="inline-flex items-center gap-2 rounded-xl bg-desert-primary px-8 py-3 text-sm font-bold text-white transition-all hover:bg-desert-primary-dim">
          <Calculator className="h-4 w-4" />
          حساب لگائیں
        </Link>
      </div>
    </article>
  )
}

function TlContent() {
  return (
    <article className="prose prose-invert max-w-none prose-headings:text-desert-primary prose-a:text-desert-primary prose-strong:text-white prose-li:text-gray-300">
      <h1>Kumpletong Gabay sa Personal Loan Eligibility at SAMA DBR Rules sa Saudi Arabia 2026</h1>

      <div className="not-prose glass p-6 rounded-xl mb-8">
        <p className="text-gray-300 text-lg leading-relaxed">
          Mayroon kang matatag na trabaho, disenteng kita, at nangangarap kang bumili ng bagong sasakyan, mag-renovate ng bahay, o magsimula ng negosyo. Pumasok ka sa isang Saudi bank nang may kumpiyansa, nagsumite ng aplikasyon, at makalipas ang isang linggo ay natanggap mo ang rejection letter. O mas malala pa, natuklasan mo na ang halaga ng loan na kwalipikado ka ay mas mababa kaysa sa iyong kailangan. Libo-libong beses itong nangyayari bawat buwan sa buong kaharian.
        </p>
        <p className="text-gray-300 text-lg leading-relaxed mt-4">
            Saklaw ng gabay na ito ang <strong>lahat ng kailangan mong malaman tungkol sa personal loan eligibility at SAMA DBR rules sa Saudi Arabia sa 2026</strong>.
        </p>
        <p className="text-gray-300 text-lg leading-relaxed mt-4">
          Gamitin ang aming libreng{' '}
          <Link href="/sama-loan-calculator" className="text-desert-primary font-bold underline">
            SAMA Loan Calculator
          </Link>.
        </p>
      </div>

      <h2>Ano ang SAMA at Debt Burden Ratio (DBR)?</h2>
      <p>Ang Saudi Central Bank (SAMA) ang financial regulator ng kaharian na nangangasiwa sa lahat ng bangko. Ipinakilala ng SAMA ang DBR regulation upang matiyak na ang mga indibidwal ay hindi hihiram ng labis sa kanilang kakayahang magbayad.</p>

      <div className="not-prose glass p-5 rounded-xl mb-6">
        <h3 className="text-desert-primary font-semibold mb-3">Ang Golden Rule ng DBR</h3>
        <div className="bg-[#0A0E1A] p-4 rounded-lg text-gray-300 text-sm font-mono">
          <p className="text-desert-primary font-bold">Max Total Monthly Payments = Gross Salary × DBR Percentage</p>
        </div>
      </div>

      <h2>Paano Kinakalkula ng mga Bangko ang Loan Eligibility</h2>
      <p>Ginagamit ng mga bangko ang gross monthly salary. Ang umiiral na utang ay nagbabawas sa halagang maaari mong hiramin. Ang Simah credit score ay kritikal sa loan approval.</p>

      <h2>Step-by-Step na Formula ng Pagkalkula</h2>
      <div className="not-prose glass p-5 rounded-xl mb-6">
        <div className="space-y-3">
          <div className="bg-[#0A0E1A] p-3 rounded-lg">
            <p className="text-white">Step 1: Max EMI = Gross Salary × DBR Percentage</p>
          </div>
          <div className="bg-[#0A0E1A] p-3 rounded-lg">
            <p className="text-white">Step 2: Available EMI = Max EMI - Existing EMIs</p>
          </div>
          <div className="bg-[#0A0E1A] p-3 rounded-lg">
            <p className="text-white">Step 3: Calculate Maximum Loan Principal from Available EMI</p>
          </div>
        </div>
      </div>

      <h2>Mga Halimbawa</h2>

      <div className="not-prose glass p-5 rounded-xl mb-6">
        <h3 className="text-white font-semibold mb-3">Example 1: Private Sector Employee na may Car Loan</h3>
        <div className="bg-[#0A0E1A] p-4 rounded-lg text-gray-300 text-sm space-y-1.5 font-mono">
          <p>Gross Salary: 15,000 SAR</p>
          <p>DBR Limit (33%): 4,950 SAR</p>
          <p>Car Loan EMI: 2,000 SAR</p>
          <p>Available EMI: 2,950 SAR</p>
          <p className="text-desert-primary font-bold mt-2">Max Loan: ~156,000 SAR</p>
        </div>
      </div>

      <div className="not-prose glass p-5 rounded-xl mb-6">
        <h3 className="text-white font-semibold mb-3">Example 2: Government Employee na may 45% DBR</h3>
        <div className="bg-[#0A0E1A] p-4 rounded-lg text-gray-300 text-sm space-y-1.5 font-mono">
          <p>Gross Salary: 20,000 SAR</p>
          <p>DBR Limit (45%): 9,000 SAR</p>
          <p>Available EMI: 9,000 SAR</p>
          <p className="text-desert-primary font-bold mt-2">Max Loan: ~484,000 SAR</p>
        </div>
      </div>

      <h2>Paano Pagbutihin ang Loan Eligibility</h2>
      <div className="not-prose glass p-5 rounded-xl mb-6">
        <ul className="space-y-2 text-gray-300">
          <li><CheckCircle className="h-4 w-4 text-desert-primary inline mr-2" /> Bayaran ang credit card balances</li>
          <li><CheckCircle className="h-4 w-4 text-desert-primary inline mr-2" /> Pagbutihin ang Simah score</li>
          <li><CheckCircle className="h-4 w-4 text-desert-primary inline mr-2" /> Pumili ng mas mahabang loan tenure</li>
          <li><CheckCircle className="h-4 w-4 text-desert-primary inline mr-2" /> Iwasan ang maraming loan applications</li>
        </ul>
      </div>

      <h2>Mga Hidden Cost ng Personal Loans</h2>
      <div className="not-prose glass p-5 rounded-xl mb-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
          <div className="bg-[#0A0E1A] p-3 rounded-lg">
            <h4 className="text-desert-accent font-semibold mb-1">Administration Fee</h4>
            <p className="text-gray-400">1% o 500 SAR + VAT.</p>
          </div>
          <div className="bg-[#0A0E1A] p-3 rounded-lg">
            <h4 className="text-desert-accent font-semibold mb-1">Early Settlement Fee</h4>
            <p className="text-gray-400">1% ng natitira o 5,000 SAR.</p>
          </div>
          <div className="bg-[#0A0E1A] p-3 rounded-lg">
            <h4 className="text-desert-accent font-semibold mb-1">Late Payment Penalty</h4>
            <p className="text-gray-400">2-3% ng overdue amount.</p>
          </div>
          <div className="bg-[#0A0E1A] p-3 rounded-lg">
            <h4 className="text-desert-accent font-semibold mb-1">Insurance</h4>
            <p className="text-gray-400">Mandatory life at disability insurance.</p>
          </div>
        </div>
      </div>

      <h2>Sauditoolhub SAMA Loan Calculator</h2>
      <div className="not-prose glass p-6 rounded-xl mb-8">
        <Link href="/sama-loan-calculator" className="inline-flex items-center gap-2 rounded-xl bg-desert-primary px-8 py-3 text-sm font-bold text-white transition-all hover:bg-desert-primary-dim">
          <Calculator className="h-4 w-4" />
          Kalkulahin ang Eligibility Ngayon
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
        <Link href="/sama-loan-calculator" className="text-desert-primary font-bold underline">SAMA Loan Calculator</Link>
        {' '}ng Sauditoolhub. Tingnan din ang{' '}
        <Link href="/zakat-calculator" className="text-desert-primary font-bold underline">Zakat Calculator</Link>
        {' '}at{' '}
        <Link href="/sip-calculator" className="text-desert-primary font-bold underline">SIP Calculator</Link>
        . Bisitahin ang aming{' '}
        <Link href="/blog" className="text-desert-primary font-bold underline">Blog</Link>.
      </p>

      <div className="not-prose glass p-6 rounded-xl mt-8 text-center">
        <Calculator className="h-10 w-10 text-desert-primary mx-auto mb-3" />
        <h3 className="text-white text-lg font-bold mb-2">Alamin ang Loan Eligibility sa Segundo</h3>
        <p className="text-gray-400 text-sm mb-4">Libreng calculator — instant results</p>
        <Link href="/sama-loan-calculator" className="inline-flex items-center gap-2 rounded-xl bg-desert-primary px-8 py-3 text-sm font-bold text-white transition-all hover:bg-desert-primary-dim">
          <Calculator className="h-4 w-4" />
          Kalkulahin Ngayon
        </Link>
      </div>
    </article>
  )
}

function BnContent() {
  return (
    <article className="prose prose-invert max-w-none prose-headings:text-desert-primary prose-a:text-desert-primary prose-strong:text-white prose-li:text-gray-300">
      <h1>সৌদি আরবে ব্যক্তিগত ঋণের যোগ্যতা ও SAMA DBR নিয়ম সম্পূর্ণ গাইড 2026</h1>

      <div className="not-prose glass p-6 rounded-xl mb-8">
        <p className="text-gray-300 text-lg leading-relaxed">
          আপনার একটি স্থিতিশীল চাকরি, ভাল বেতন আছে এবং আপনি একটি নতুন গাড়ি কেনার, বাড়ি সংস্কারের বা ব্যবসা শুরুর স্বপ্ন দেখছেন। আপনি আত্মবিশ্বাসের সাথে একটি সৌদি ব্যাংকে যান, আবেদন জমা দেন এবং এক সপ্তাহ পরে প্রত্যাখ্যানের চিঠি পান। অথবা আরও খারাপ, আপনি আবিষ্কার করেন যে আপনি যে ঋণের পরিমাণের জন্য যোগ্য তা আপনার প্রয়োজনের চেয়ে অনেক কম। এই দৃশ্যটি রাজ্য জুড়ে প্রতি মাসে হাজার হাজার বার ঘটে।
        </p>
        <p className="text-gray-300 text-lg leading-relaxed mt-4">
          এই গাইডটি <strong>২০২৬ সালে সৌদি আরবে ব্যক্তিগত ঋণের যোগ্যতা এবং SAMA DBR নিয়ম সম্পর্কে আপনার যা জানা দরকার</strong> সবকিছু কভার করে।
        </p>
        <p className="text-gray-300 text-lg leading-relaxed mt-4">
          আমাদের বিনামূল্যের{' '}
          <Link href="/sama-loan-calculator" className="text-desert-primary font-bold underline">
            SAMA Loan Calculator
          </Link>{' '}
          ব্যবহার করুন।
        </p>
      </div>

      <h2>SAMA এবং ডেট বার্ডেন রেশিও (DBR) কী?</h2>
      <p>সৌদি সেন্ট্রাল ব্যাংক (SAMA) সমস্ত ব্যাংক এবং আর্থিক প্রতিষ্ঠানের তত্ত্বাবধান করে। SAMA ডেট বার্ডেন রেশিও নিয়ম চালু করেছে যাতে ব্যক্তিরা তাদের পরিশোধের ক্ষমতার বাইরে ঋণ না নেয়।</p>

      <div className="not-prose glass p-5 rounded-xl mb-6">
        <h3 className="text-desert-primary font-semibold mb-3">DBR-এর সোনালি নিয়ম</h3>
        <div className="bg-[#0A0E1A] p-4 rounded-lg text-gray-300 text-sm font-mono">
          <p className="text-desert-primary font-bold">সর্বোচ্চ মাসিক পরিশোধ = মোট বেতন × DBR শতাংশ</p>
        </div>
      </div>

      <h2>ব্যাংকগুলি কীভাবে ঋণের যোগ্যতা গণনা করে</h2>
      <p>ব্যাংকগুলি মোট মাসিক বেতন ব্যবহার করে। বিদ্যমান ঋণ নতুন ঋণের পরিমাণ কমিয়ে দেয়। সিমাহ ক্রেডিট স্কোর ঋণ অনুমোদনে গুরুত্বপূর্ণ।</p>

      <h2>ধাপে ধাপে গণনা পদ্ধতি</h2>
      <div className="not-prose glass p-5 rounded-xl mb-6">
        <div className="space-y-3">
          <div className="bg-[#0A0E1A] p-3 rounded-lg">
            <p className="text-white">ধাপ ১: সর্বোচ্চ EMI = মোট বেতন × DBR শতাংশ</p>
          </div>
          <div className="bg-[#0A0E1A] p-3 rounded-lg">
            <p className="text-white">ধাপ ২: উপলব্ধ EMI = সর্বোচ্চ EMI - বিদ্যমান EMI</p>
          </div>
          <div className="bg-[#0A0E1A] p-3 rounded-lg">
            <p className="text-white">ধাপ ৩: উপলব্ধ EMI থেকে সর্বোচ্চ ঋণের মূলধন গণনা</p>
          </div>
        </div>
      </div>

      <h2>বাস্তব উদাহরণ</h2>

      <div className="not-prose glass p-5 rounded-xl mb-6">
        <h3 className="text-white font-semibold mb-3">উদাহরণ ১: বেসরকারি খাতের কর্মচারী গাড়ি লোন সহ</h3>
        <div className="bg-[#0A0E1A] p-4 rounded-lg text-gray-300 text-sm space-y-1.5 font-mono">
          <p>মোট বেতন: ১৫,০০০ SAR</p>
          <p>DBR সীমা (৩৩%): ৪,৯৫০ SAR</p>
          <p>গাড়ি লোন EMI: ২,০০০ SAR</p>
          <p>উপলব্ধ EMI: ২,৯৫০ SAR</p>
          <p className="text-desert-primary font-bold mt-2">সর্বোচ্চ ঋণ: ~১৫৬,০০০ SAR</p>
        </div>
      </div>

      <div className="not-prose glass p-5 rounded-xl mb-6">
        <h3 className="text-white font-semibold mb-3">উদাহরণ ২: সরকারি কর্মচারী ৪৫% DBR সহ</h3>
        <div className="bg-[#0A0E1A] p-4 rounded-lg text-gray-300 text-sm space-y-1.5 font-mono">
          <p>মোট বেতন: ২০,০০০ SAR</p>
          <p>DBR সীমা (৪৫%): ৯,০০০ SAR</p>
          <p>উপলব্ধ EMI: ৯,০০০ SAR</p>
          <p className="text-desert-primary font-bold mt-2">সর্বোচ্চ ঋণ: ~৪৮৪,০০০ SAR</p>
        </div>
      </div>

      <h2>ঋণের যোগ্যতা কীভাবে উন্নত করবেন</h2>
      <div className="not-prose glass p-5 rounded-xl mb-6">
        <ul className="space-y-2 text-gray-300">
          <li><CheckCircle className="h-4 w-4 text-desert-primary inline mr-2" /> ক্রেডিট কার্ডের ব্যালেন্স পরিশোধ করুন</li>
          <li><CheckCircle className="h-4 w-4 text-desert-primary inline mr-2" /> সিমাহ স্কোর উন্নত করুন</li>
          <li><CheckCircle className="h-4 w-4 text-desert-primary inline mr-2" /> দীর্ঘ মেয়াদ বেছে নিন</li>
          <li><CheckCircle className="h-4 w-4 text-desert-primary inline mr-2" /> একসাথে একাধিক আবেদন এড়িয়ে চলুন</li>
        </ul>
      </div>

      <h2>ব্যক্তিগত ঋণের লুকানো খরচ</h2>
      <div className="not-prose glass p-5 rounded-xl mb-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
          <div className="bg-[#0A0E1A] p-3 rounded-lg">
            <h4 className="text-desert-accent font-semibold mb-1">প্রশাসনিক ফি</h4>
            <p className="text-gray-400">1% বা 500 SAR + VAT।</p>
          </div>
          <div className="bg-[#0A0E1A] p-3 rounded-lg">
            <h4 className="text-desert-accent font-semibold mb-1">দ্রুত পরিশোধ ফি</h4>
            <p className="text-gray-400">অবশিষ্ট 1% বা 5,000 SAR।</p>
          </div>
          <div className="bg-[#0A0E1A] p-3 rounded-lg">
            <h4 className="text-desert-accent font-semibold mb-1">বিলম্ব জরিমানা</h4>
            <p className="text-gray-400">বকেয়া পরিমাণের 2-3%।</p>
          </div>
          <div className="bg-[#0A0E1A] p-3 rounded-lg">
            <h4 className="text-desert-accent font-semibold mb-1">বীমা</h4>
            <p className="text-gray-400">বাধ্যতামূলক জীবন ও অক্ষমতা বীমা।</p>
          </div>
        </div>
      </div>

      <h2>Sauditoolhub SAMA Loan Calculator</h2>
      <div className="not-prose glass p-6 rounded-xl mb-8">
        <Link href="/sama-loan-calculator" className="inline-flex items-center gap-2 rounded-xl bg-desert-primary px-8 py-3 text-sm font-bold text-white transition-all hover:bg-desert-primary-dim">
          <Calculator className="h-4 w-4" />
          এখনই যোগ্যতা গণনা করুন
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
        <Link href="/sama-loan-calculator" className="text-desert-primary font-bold underline">SAMA Loan Calculator</Link>
        {' '}ব্যবহার করুন।{' '}
        <Link href="/zakat-calculator" className="text-desert-primary font-bold underline">Zakat Calculator</Link>
        {' '}এবং{' '}
        <Link href="/sip-calculator" className="text-desert-primary font-bold underline">SIP Calculator</Link>
        {' '}ও দেখুন। আমাদের{' '}
        <Link href="/blog" className="text-desert-primary font-bold underline">ব্লগ</Link> দেখুন।
      </p>

      <div className="not-prose glass p-6 rounded-xl mt-8 text-center">
        <Calculator className="h-10 w-10 text-desert-primary mx-auto mb-3" />
        <h3 className="text-white text-lg font-bold mb-2">সেকেন্ডে আপনার ঋণের যোগ্যতা জানুন</h3>
        <p className="text-gray-400 text-sm mb-4">বিনামূল্যের ক্যালকুলেটর — তাত্ক্ষণিক ফলাফল</p>
        <Link href="/sama-loan-calculator" className="inline-flex items-center gap-2 rounded-xl bg-desert-primary px-8 py-3 text-sm font-bold text-white transition-all hover:bg-desert-primary-dim">
          <Calculator className="h-4 w-4" />
          এখনই গণনা করুন
        </Link>
      </div>
    </article>
  )
}

export default async function SamaLoanGuidePage({ params }: Props) {
  const { locale } = await params
  const isAr = locale === 'ar'
  const isUr = locale === 'ur'
  const isTl = locale === 'tl'
  const isBn = locale === 'bn'
  const isDefault = locale === 'en'
  const pageUrl = isDefault ? `${baseUrl}/guide/sama-loan-calculator-saudi-arabia-2026` : `${baseUrl}/${locale}/guide/sama-loan-calculator-saudi-arabia-2026`

  const schema = isAr ? schemaAr : isUr ? schemaUr : isTl ? schemaTl : isBn ? schemaBn : articleSchemaEn
  const faqItems = isAr ? faqsAr : isUr ? faqsUr : isTl ? faqsTl : isBn ? faqsBn : faqsEn

  return (
    <>
      <article
        itemScope
        itemType="https://schema.org/Article"
        className="relative z-10"
      >
        <section className="px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-6xl">
            {isAr ? <ArContent /> : isUr ? <UrContent /> : isTl ? <TlContent /> : isBn ? <BnContent /> : <EnContent />}
          </div>
        </section>
      </article>
    </>
  )
}
