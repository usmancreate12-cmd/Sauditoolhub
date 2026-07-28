import type { Metadata } from 'next'
import Link from 'next/link'
import { GlassCard } from '@/components/GlassCard'

type Props = { params: Promise<{ locale: string }> }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params
  const base = '/guide/mortgage-vs-rent-guide-saudi-arabia-2026'
  const titles: Record<string, string> = {
    en: 'The Complete Guide to Mortgage vs. Renting: Making the Right Choice in Saudi Arabia 2026',
    ar: 'الدليل الشامل للتمويل العقاري مقابل الإيجار: الاختيار الصحيح في السعودية 2026',
    ur: 'سعودی عرب 2026 میں گھر خریدنا بمقابلہ کرایہ پر لینے کا مکمل گائیڈ',
    tl: 'Gabay sa Mortgage vs. Pagrerenta: Paggawa ng Tamang Desisyon sa Saudi Arabia 2026',
    bn: 'সৌদি আরব ২০২৬-এ মর্টগেজ বনাম ভাড়া: সঠিক পছন্দ করার সম্পূর্ণ গাইড',
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
  "headline": 'The Complete Guide to Mortgage vs. Renting in Saudi Arabia 2026',
  "description": 'Compare mortgage vs renting in Saudi Arabia 2026. Understand Islamic Murabaha financing, hidden costs of ownership, the 5% rule, and use the free calculator to decide.',
  "author": { "@type": "Organization", "name": "Sauditoolhub" },
  "datePublished": "2026-07-01",
  "dateModified": "2026-07-28"
}

const articleSchemaAr = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": 'الدليل الشامل للتمويل العقاري مقابل الإيجار في السعودية 2026',
  "description": 'قارن بين التمويل العقاري والإيجار في السعودية 2026. فهم المرابحة الإسلامية، التكاليف الخفية للملكية، قاعدة 5%، واستخدم الحاسبة المجانية.',
  "author": { "@type": "Organization", "name": "Sauditoolhub" },
  "datePublished": "2026-07-01",
  "dateModified": "2026-07-28"
}

const articleSchemaUr = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": 'سعودی عرب 2026 میں گھر خریدنا بمقابلہ کرایہ پر لینے کا مکمل گائیڈ',
  "description": 'سعودی عرب 2026 میں ہاؤس لون اور کرایہ میں موازنہ کریں۔ اسلامی مرابحہ فنانسنگ، ملکیت کے پوشیدہ اخراجات، 5% اصول، اور مفت کیلکولیٹر استعمال کریں۔',
  "author": { "@type": "Organization", "name": "Sauditoolhub" },
  "datePublished": "2026-07-01",
  "dateModified": "2026-07-28"
}

const articleSchemaTl = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": 'Gabay sa Mortgage vs. Pagrerenta sa Saudi Arabia 2026',
  "description": 'Ikumpara ang mortgage at pagrerenta sa Saudi Arabia 2026. Unawain ang Islamic Murabaha financing, hidden costs ng pagmamay-ari, 5% rule, at gamitin ang libreng calculator.',
  "author": { "@type": "Organization", "name": "Sauditoolhub" },
  "datePublished": "2026-07-01",
  "dateModified": "2026-07-28"
}

const articleSchemaBn = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": 'সৌদি আরব ২০২৬-এ মর্টগেজ বনাম ভাড়া নেওয়ার সম্পূর্ণ গাইড',
  "description": 'সৌদি আরব ২০২৬-এ মর্টগেজ এবং ভাড়ার তুলনা করুন। ইসলামিক মুরাবাহা ফাইন্যান্সিং, মালিকানার লুকানো খরচ, ৫% নিয়ম এবং বিনামূল্যে ক্যালকুলেটর বুঝুন।',
  "author": { "@type": "Organization", "name": "Sauditoolhub" },
  "datePublished": "2026-07-01",
  "dateModified": "2026-07-28"
}

const faqsEn = [
  { question: 'Is it better to rent or buy a home in Saudi Arabia in 2026?', answer: "The answer depends on your personal situation. If you plan to stay in the same city for more than 5-7 years, buying is generally better financially. If you value flexibility and plan to move sooner, renting is better. Use the 5% rule as a benchmark: if annual rent is less than 5% of the property's purchase price, renting may be cheaper. Our Mortgage vs Rent Calculator at /mortgage-vs-rent can help you decide with your specific numbers." },
  { question: 'How do mortgages work in Saudi Arabia without interest (Riba)?', answer: 'Saudi Arabia uses Islamic financing models instead of conventional interest-based loans. The most common is Murabaha (cost-plus financing), where the bank buys the property and sells it to you at a markup with deferred payment. Another model is Ijara (Islamic lease-to-own), where the bank owns the property and you pay rent, with ownership transferring to you over time. Both are Sharia-compliant and approved by the Saudi Central Bank (SAMA).' },
  { question: 'What is the minimum down payment for a home loan in Saudi Arabia?', answer: 'For Saudi citizens, the minimum down payment is typically 10% for first homes (often supported by the Real Estate Development Fund - REDF). For expatriates, the minimum down payment is usually 30% to 40%. Redf financing can cover up to 70% of the property value for eligible Saudi nationals. The remaining amount is covered through a bank mortgage.' },
  { question: 'What are the hidden costs of buying a house in Saudi Arabia?', answer: 'Beyond the purchase price, buyers must budget for: 5% RETT tax, mortgage registration fees (about 1% of loan amount), property valuation report (2,000-5,000 SAR), real estate agent commission (usually 2.5% of property value), annual maintenance (about 1% of property value), and potential White Land Tax for undeveloped plots. These can add 10-15% to your total first-year cost.' },
  { question: 'Can expats get a mortgage in Saudi Arabia?', answer: 'Yes, expatriates can obtain home financing in Saudi Arabia, but with stricter requirements. Most banks require a minimum salary of 15,000-20,000 SAR per month, a valid Iqama with at least 2-3 years remaining, and a down payment of 30-40%. Financing is available for properties in specific developments approved for non-Saudi ownership, such as those in Riyadh, Jeddah, and Dammam.' },
  { question: 'What is the 5% rule for rent vs buy comparison?', answer: 'The 5% rule is a simple financial benchmark: Multiply the property price by 5% and divide by 12. If the result is higher than your monthly rent, renting is financially better. If the monthly rent is higher, buying is better. For example, a 1,200,000 SAR property × 5% = 60,000 SAR per year = 5,000 SAR per month. If your rent is 4,000 SAR, renting is cheaper at the moment.' },
  { question: 'How much does a mortgage cost monthly in Saudi Arabia?', answer: 'Monthly mortgage payments depend on the property price, down payment, profit rate, and tenure. For a 1,000,000 SAR property with a 20% down payment (200,000 SAR) and an 80% loan (800,000 SAR) at a 4% profit rate over 25 years, the monthly payment would be approximately 4,200 SAR. Use our SAMA Loan Calculator at /sama-loan-calculator for exact figures.' },
  { question: 'What happens to rent prices in Saudi Arabia? Are they capped?', answer: 'Rent increases in Saudi Arabia are regulated. Landlords cannot increase rent during the contract period. For renewals, increases are capped according to the Ejar system based on the average rent in the neighborhood. In 2024, the government introduced a cap limiting annual rent increases to a certain percentage to protect tenants. However, overall rents have been rising in major cities like Riyadh due to population growth and economic expansion.' },
  { question: 'Is buying a villa in Riyadh a good investment in 2026?', answer: 'Riyadh\'s real estate market has been strong due to population growth, economic diversification under Vision 2030, and major projects like the Riyadh Metro and entertainment city. Properties in prime districts (Al Olaya, Al Malqa, Al Narjis) have seen consistent appreciation. However, prices are high, and the 5% RETT adds significant cost. A villa worth 2.5 million SAR costs an additional 125,000 SAR in tax alone. Use our Property Valuation tool at /property-valuation for a market estimate.' },
  { question: 'Can I use my mortgage to buy land in Saudi Arabia?', answer: 'Yes, some banks offer land financing for Saudi citizens, but the terms differ from home mortgages. Down payments for land are typically higher (30-50%), and the tenure is shorter (max 10-15 years). Additionally, undeveloped land may be subject to the White Land Tax if held for investment purposes. It is often better to buy land with cash or through developer payment plans.' },
]

const faqsAr = [
  { question: 'هل من الأفضل الإيجار أم شراء منزل في السعودية 2026؟', answer: 'يعتمد الجواب على وضعك الشخصي. إذا كنت تخطط للبقاء في نفس المدينة لأكثر من 5-7 سنوات، فالشراء أفضل. إذا كنت تفضل المرونة، فالإيجار أفضل. استخدم قاعدة 5% وحاسبة الرهن مقابل الإيجار في /mortgage-vs-rent.' },
  { question: 'كيف يعمل التمويل العقاري في السعودية بدون فوائد ربوية؟', answer: 'تستخدم السعودية التمويل الإسلامي بدلاً من القروض التقليدية. المرابحة: يشتري البنك العقار ويبيعه لك بربح مؤجل. الإجارة: يملك البنك العقار وتدفع إيجاراً مع تحويل الملكية لك بالتدريج. كلا النموذجين متوافق مع الشريعة ومعتمد من البنك المركزي السعودي.' },
  { question: 'ما هي الدفعة المقدمة للتمويل العقاري في السعودية؟', answer: 'للمواطنين السعوديين، الدفعة المقدمة 10% للمسكن الأول (بدعم من صندوق التنمية العقارية). للوافدين، الدفعة المقدمة 30-40%. تمويل الصندوق يغطي حتى 70% من قيمة العقار للمستحقين.' },
  { question: 'ما هي التكاليف الخفية لشراء منزل في السعودية؟', answer: 'بالإضافة لسعر الشراء: ضريبة التصرفات العقارية 5%، رسوم تسجيل الرهن (1%)، تقرير التقييم (2000-5000 ريال)، عمولة الوسيط (2.5%)، الصيانة السنوية (1% من قيمة العقار)، وضريبة الأراضي البيضاء للأراضي غير المطورة. هذه التكاليف قد تصل إلى 10-15% من التكلفة الإجمالية.' },
  { question: 'هل يمكن للوافدين الحصول على تمويل عقاري في السعودية؟', answer: 'نعم بشروط: راتب لا يقل عن 15,000-20,000 ريال، إقامة سارية لمدة 2-3 سنوات، دفعة مقدمة 30-40%. التمويل متاح لعقارات في مناطق محددة.' },
  { question: 'ما هي قاعدة 5% لمقارنة الإيجار والشراء؟', answer: 'اضرب سعر العقار في 5% واقسم على 12. إذا كانت النتيجة أعلى من إيجارك الشهري، فالإيجار أفضل. مثال: عقار 1,200,000 × 5% = 60,000 سنوياً = 5,000 شهرياً. إذا إيجارك 4,000، فالإيجار أرخص.' },
  { question: 'كم تكلفة الرهن العقاري شهرياً في السعودية؟', answer: 'تعتمد على سعر العقار والدفعة المقدمة ونسبة الربح والمدة. استخدم حاسبة قرض سما في /sama-loan-calculator لحساب دقيق.' },
  { question: 'هل شراء فيلا في الرياض استثمار جيد في 2026؟', answer: 'سوق الرياض قوي بسبب النمو السكاني ورؤية 2030. العقارات في الأحياء المميزة (العليا، الملقا، النرجس) تشهد ارتفاعاً مستمراً. استخدم أداة تقييم العقارات في /property-valuation.' },
  { question: 'هل يمكن استخدام التمويل العقاري لشراء أرض؟', answer: 'نعم، لكن بشروط مختلفة: دفعة مقدمة 30-50% ومدة أقصر. الأرض غير المطورة قد تخضع لضريبة الأراضي البيضاء.' },
  { question: 'ما الفرق بين المرابحة والإجارة في التمويل العقاري؟', answer: 'المرابحة: البنك يشتري العقار ويبيعه لك بسعر يزيد عن ثمن الشراء تدفعه على أقساط. الإجارة: البنك يشتري العقار وتدفع إيجاراً شهرياً، ومع الوقت تنتقل ملكية العقار إليك.' },
]

const faqsUr = [
  { question: 'سعودی عرب 2026 میں گھر خریدنا بہتر ہے یا کرایہ پر لینا؟', answer: 'یہ آپ کی صورتحال پر منحصر ہے۔ اگر 5-7 سال سے زیادہ رہنا ہے تو خریدنا بہتر ہے۔ لچک چاہیے تو کرایہ بہتر ہے۔ /mortgage-vs-rent پر کیلکولیٹر استعمال کریں۔' },
  { question: 'سعودی عرب میں سود کے بغیر ہاؤس لون کیسے کام کرتا ہے؟', answer: 'سعودی عرب اسلامی مرابحہ فنانسنگ استعمال کرتا ہے۔ مرابحہ: بینک جائیداد خریدتا ہے اور آپ کو منافع کے ساتھ فروخت کرتا ہے۔ اجارہ: بینک جائیداد کا مالک رہتا ہے اور آپ کرایہ دیتے ہیں۔' },
  { question: 'ہاؤس لون کے لیے کم از کم ڈاؤن پیمنٹ کتنی ہے؟', answer: 'سعودی شہریوں کے لیے 10% (REDF سپورٹ کے ساتھ)۔ تارکین وطن کے لیے 30-40%۔' },
  { question: 'گھر خریدنے کے پوشیدہ اخراجات کیا ہیں؟', answer: '5% RETT ٹیکس، مارگیج رجسٹریشن فیس، پراپرٹی ویلیوایشن رپورٹ، ایجنٹ کمیشن، سالانہ دیکھ بھال، اور وائٹ لینڈ ٹیکس۔ یہ کل لاگت کا 10-15% اضافہ کر سکتے ہیں۔' },
  { question: 'کیا تارکین وطن سعودی عرب میں ہاؤس لون لے سکتے ہیں؟', answer: 'ہاں، شرائط کے ساتھ: 15,000-20,000 ریال ماہانہ تنخواہ، 2-3 سال کی قیام، 30-40% ڈاؤن پیمنٹ۔' },
  { question: '5% اصول کیا ہے؟', answer: 'جائیداد کی قیمت کو 5% سے ضرب دیں اور 12 سے تقسیم کریں۔ اگر نتیجہ ماہانہ کرایہ سے زیادہ ہے تو کرایہ بہتر ہے۔' },
  { question: 'کیا ریاض میں ولا خریدنا 2026 میں اچھی سرمایہ کاری ہے؟', answer: 'ریاض کی پراپرٹی مارکیٹ مضبوط ہے۔ /property-valuation پر ٹول استعمال کریں۔' },
  { question: 'مرابحہ اور اجارہ میں کیا فرق ہے؟', answer: 'مرابحہ: بینک جائیداد خرید کر آپ کو منافع پر بیچتا ہے۔ اجارہ: بینک مالک رہتا ہے اور آہستہ آہستہ ملکیت آپ کو منتقل ہوتی ہے۔' },
]

const faqsTl = [
  { question: 'Mas mabuti bang umupa o bumili ng bahay sa Saudi Arabia 2026?', answer: 'Kung plano mong manatili nang higit 5-7 taon, mas mabuting bumili. Kung gusto mo ng flexibility, mas mabuting umupa. Gamitin ang calculator sa /mortgage-vs-rent.' },
  { question: 'Paano gumagana ang mortgage sa Saudi Arabia nang walang interes?', answer: 'Gumagamit ang Saudi Arabia ng Islamic financing tulad ng Murabaha (cost-plus) at Ijara (lease-to-own). Ang bangko ay bumibili ng property at ibinebenta sa iyo na may markup.' },
  { question: 'Magkano ang down payment para sa home loan sa Saudi Arabia?', answer: 'Para sa Saudi citizens, 10% (may REDF support). Para sa expats, 30-40%.' },
  { question: 'Ano ang mga hidden costs ng pagbili ng bahay sa Saudi Arabia?', answer: '5% RETT tax, mortgage registration fees, valuation report, agent commission, annual maintenance, at White Land Tax. Maaaring magdagdag ng 10-15% sa total cost.' },
  { question: 'Pwede bang makakuha ng mortgage ang expats sa Saudi Arabia?', answer: 'Oo, may requirements: 15,000-20,000 SAR monthly salary, valid Iqama ng 2-3 taon, 30-40% down payment.' },
  { question: 'Ano ang 5% rule?', answer: 'I-multiply ang property price sa 5% at hatiin sa 12. Kung mas mataas ang resulta kaysa monthly rent, mas mabuting umupa.' },
  { question: 'Magandang investment ba ang pagbili ng villa sa Riyadh sa 2026?', answer: 'Malakas ang real estate market ng Riyadh. Gamitin ang Property Valuation tool sa /property-valuation.' },
]

const faqsBn = [
  { question: 'সৌদি আরব ২০২৬-এ বাড়ি কেনা নাকি ভাড়া নেওয়া ভাল?', answer: 'আপনি যদি ৫-৭ বছরের বেশি থাকতে চান তবে কেনা ভাল। নমনীয়তা চাইলে ভাড়া ভাল। /mortgage-vs-rent-এ ক্যালকুলেটর ব্যবহার করুন।' },
  { question: 'সৌদি আরবে সুদ ছাড়া মর্টগেজ কীভাবে কাজ করে?', answer: 'সৌদি আরব ইসলামিক মুরাবাহা ফাইন্যান্সিং ব্যবহার করে। মুরাবাহা: ব্যাংক সম্পত্তি কিনে আপনাকে মার্কআপে বিক্রি করে। ইজারা: ব্যাংক মালিক থাকে এবং আপনি ভাড়া দেন।' },
  { question: 'হোম লোনের জন্য ন্যূনতম ডাউন পেমেন্ট কত?', answer: 'সৌদি নাগরিকদের জন্য ১০% (REDF সমর্থন সহ)। প্রবাসীদের জন্য ৩০-৪০%।' },
  { question: 'সৌদি আরবে বাড়ি কেনার লুকানো খরচ কী?', answer: '৫% RETT কর, মর্টগেজ রেজিস্ট্রেশন ফি, ভ্যালুয়েশন রিপোর্ট, এজেন্ট কমিশন, বার্ষিক রক্ষণাবেক্ষণ, এবং হোয়াইট ল্যান্ড ট্যাক্স। এগুলি মোট খরচ ১০-১৫% বাড়াতে পারে।' },
  { question: 'প্রবাসীরা কি সৌদি আরবে মর্টগেজ পেতে পারেন?', answer: 'হ্যাঁ, শর্তসহ: ১৫,০০০-২০,০০০ SAR মাসিক বেতন, ২-৩ বছরের বৈধ ইকামা, ৩০-৪০% ডাউন পেমেন্ট।' },
  { question: '৫% নিয়মটি কী?', answer: 'সম্পত্তির মূল্যকে ৫% দিয়ে গুণ করে ১২ দিয়ে ভাগ করুন। ফলাফল মাসিক ভাড়ার চেয়ে বেশি হলে ভাড়া নেওয়া ভাল।' },
  { question: 'রিয়াদে ভিলা কেনা কি ২০২৬-এ ভাল বিনিয়োগ?', answer: 'রিয়াদের রিয়েল এস্টেট বাজার শক্তিশালী। /property-valuation-এ টুল ব্যবহার করুন।' },
]

function EnContent() {
  return (
    <article>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchemaEn) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": faqsEn.map(f => ({ "@type": "Question", "name": f.question, "acceptedAnswer": { "@type": "Answer", "text": f.answer } })) }) }} />

      <div className="text-center mb-8">
        <p className="text-desert-primary text-sm font-medium tracking-widest uppercase">Home Finance Guide</p>
        <h1 className="text-3xl md:text-4xl font-bold text-white mt-2">The Complete Guide to Mortgage vs. Renting: Making the Right Choice in Saudi Arabia 2026</h1>
        <p className="text-gray-400 mt-3 max-w-2xl mx-auto">
          The biggest financial decision of your life in the Kingdom. Should you commit to a 25-year mortgage or keep the flexibility of renting? This guide breaks down the numbers, the hidden costs, and the emotional factors.
        </p>
      </div>

      <GlassCard>
        <h2>Introduction</h2>
        <p>
          If you live and work in Saudi Arabia, you have likely asked yourself this question at least once: should I rent or should I buy? It is the single biggest financial decision most people make in their lifetime, and in the Saudi context, it comes with unique considerations. There is the emotional appeal of owning your own home — the freedom to paint the walls any color, the pride of building equity, the stability of knowing your monthly payment will not increase. But there is also the financial reality: a 25-year mortgage is a massive commitment, and the hidden costs of homeownership in Saudi Arabia can catch even savvy buyers off guard.
        </p>
        <p>
          In 2026, the Saudi real estate market is dynamic. Riyadh is growing rapidly with major projects like the Riyadh Metro, King Salman Park, and the Sports Boulevard. Jeddah is expanding along the Red Sea coast with new resorts and residential compounds. Dammam and the Eastern Province continue to attract workers in the oil and petrochemical sectors. Property prices in prime areas have risen significantly. A decent 3-bedroom apartment in a good Riyadh neighborhood can cost 1,000,000 to 1,500,000 SAR. A villa in a desirable district can range from 2,000,000 to 4,000,000 SAR. Meanwhile, annual rent for a similar property might be 50,000 to 80,000 SAR. The math is not always simple.
        </p>
        <p>
          This guide breaks down everything you need to make an informed decision. You will learn how Islamic mortgages (Murabaha and Ijara) work, the true cost of renting vs. owning, the 5% financial benchmark, and real-life examples with actual numbers. Use our free <Link href="/mortgage-vs-rent" className="text-desert-primary underline">Mortgage vs. Rent Calculator</Link> to input your specific numbers and see the breakeven point instantly.
        </p>
      </GlassCard>

      <GlassCard>
        <h2>How Mortgages Work in Saudi Arabia (2026 Context)</h2>
        <p>
          Unlike conventional banking systems where home loans charge interest (Riba), Saudi Arabia operates under Islamic Sharia law, which prohibits interest. Instead, banks offer Sharia-compliant financing products. The two main models are Murabaha and Ijara.
        </p>
        <p>
          <strong>Murabaha (Cost-Plus Financing):</strong> This is the most common form of home financing in Saudi Arabia. Here is how it works: you find a property you want to buy. The bank purchases the property from the seller at the market price. The bank then sells the property to you at a higher price, with the difference being the bank's profit. You pay this amount in monthly installments over an agreed period (typically 15 to 30 years). The key point: you know exactly how much you will pay in total from day one. There is no variable interest rate. Your monthly payment is fixed for the entire tenure.
        </p>
        <p>
          <strong>Ijara (Lease-to-Own):</strong> Under Ijara, the bank buys the property and leases it to you. You pay monthly rent to the bank. A portion of each payment goes toward the eventual purchase of the property. Over time, ownership gradually transfers to you. This model is similar to a rent-to-own arrangement and is popular for those who cannot make a large down payment.
        </p>
        <p>
          <strong>Role of the Real Estate Development Fund (REDF):</strong> For Saudi citizens, the REDF (Saudi Real Estate Development Fund) provides subsidized financing. REDF can cover up to 70% of the property value (up to 500,000 SAR for first homes), with the remaining amount financed through a bank. The profit rate on REDF-supported loans is significantly lower than market rates. Expatriates are not eligible for REDF and must rely entirely on bank financing.
        </p>
        <p>
          <strong>Typical Requirements:</strong> For Saudi citizens: minimum down payment of 10% (with REDF support), proof of income, clean credit history. For expats: minimum down payment of 30-40%, minimum salary of 15,000-20,000 SAR, valid Iqama with at least 2-3 years remaining, and financing is limited to properties in areas approved for non-Saudi ownership.
        </p>
        <p>
          Use our <Link href="/sama-loan-calculator" className="text-desert-primary underline">SAMA Loan Calculator</Link> to estimate your monthly payments based on different property prices, down payments, and tenure options.
        </p>
      </GlassCard>

      <GlassCard>
        <h2>The True Cost of Renting in Saudi Arabia</h2>
        <p>
          Renting seems simpler and more affordable month-to-month, but there are financial downsides that many tenants do not fully consider.
        </p>
        <div className="space-y-3">
          <div className="bg-[#0A0E1A] p-3 rounded-lg">
            <p className="text-white font-medium">The Dead Money Problem</p>
            <p className="text-gray-400 text-sm">Every riyal you pay in rent goes directly into your landlord's pocket. You are building someone else's equity, not your own. After 10 years of paying 5,000 SAR per month in rent, you have spent 600,000 SAR and own nothing. A homeowner with the same monthly payment would have built significant equity in their property.</p>
          </div>
          <div className="bg-[#0A0E1A] p-3 rounded-lg">
            <p className="text-white font-medium">Annual Rent Increases</p>
            <p className="text-gray-400 text-sm">While the Ejar system caps rent increases, landlords can still raise rent at renewal time within the allowed limits. In high-demand areas like Riyadh, annual increases of 5-10% are not uncommon. Over 5 years, a 5,000 SAR monthly rent could become 6,500 SAR or more.</p>
          </div>
          <div className="bg-[#0A0E1A] p-3 rounded-lg">
            <p className="text-white font-medium">Frequent Moving Costs</p>
            <p className="text-gray-400 text-sm">Renters move on average every 2-3 years. Each move costs 1,000-3,000 SAR for movers, 200-500 SAR for professional cleaning, and the time and stress of finding a new place. Over 10 years, these costs can easily total 15,000-30,000 SAR.</p>
          </div>
          <div className="bg-[#0A0E1A] p-3 rounded-lg">
            <p className="text-white font-medium">Lack of Stability and Personalization</p>
            <p className="text-gray-400 text-sm">You cannot renovate, paint, or make structural changes to a rented property. You live under the landlord's rules — no pets, limited guests, restricted modifications. For families, the lack of long-term stability can be disruptive, especially with school enrollment and community ties.</p>
          </div>
        </div>
      </GlassCard>

      <GlassCard>
        <h2>The True Cost of Owning (Hidden Costs)</h2>
        <p>
          Owning a home is not just about the mortgage payment. There are several additional costs that first-time buyers often underestimate.
        </p>
        <div className="space-y-3">
          <div className="bg-[#0A0E1A] p-3 rounded-lg">
            <p className="text-white font-medium">1. RETT (5% Real Estate Transaction Tax)</p>
            <p className="text-gray-400 text-sm">This is the biggest upfront cost. On a 1,500,000 SAR property, you pay 75,000 SAR in tax. On a 3,000,000 SAR villa, the tax is 150,000 SAR. This must be paid within 60 days of purchase and is non-negotiable. Use our <Link href="/rett-tax-calculator" className="text-desert-primary underline">RETT Calculator</Link> to plan for this cost.</p>
          </div>
          <div className="bg-[#0A0E1A] p-3 rounded-lg">
            <p className="text-white font-medium">2. Monthly Mortgage Payments</p>
            <p className="text-gray-400 text-sm">Your monthly payment includes both principal repayment and the bank's profit margin. For a 1,000,000 SAR loan at a 4% profit rate over 25 years, the monthly payment is approximately 5,280 SAR. This is typically higher than rent for an equivalent property, but builds ownership.</p>
          </div>
          <div className="bg-[#0A0E1A] p-3 rounded-lg">
            <p className="text-white font-medium">3. Maintenance and Repairs (1% Rule)</p>
            <p className="text-gray-400 text-sm">Industry standard is to budget 1% of the property value per year for maintenance. For a 1,500,000 SAR home, that is 15,000 SAR annually. This covers AC servicing, plumbing, painting, and unexpected repairs. In Saudi Arabia, AC maintenance alone can cost 2,000-5,000 SAR per year.</p>
          </div>
          <div className="bg-[#0A0E1A] p-3 rounded-lg">
            <p className="text-white font-medium">4. Real Estate Agent Commission</p>
            <p className="text-gray-400 text-sm">When buying, you typically pay a commission of 2.5% of the property value. On a 2,000,000 SAR property, this is 50,000 SAR. Some sellers cover this, but many do not.</p>
          </div>
          <div className="bg-[#0A0E1A] p-3 rounded-lg">
            <p className="text-white font-medium">5. Property Valuation & Registration Fees</p>
            <p className="text-gray-400 text-sm">An official valuation report costs 2,000-5,000 SAR. Mortgage registration with the Ministry of Justice costs approximately 1% of the loan amount.</p>
          </div>
        </div>
      </GlassCard>

      <GlassCard>
        <h2>The 5% Rule (A Simple Financial Benchmark)</h2>
        <p>
          Financial experts recommend a simple rule of thumb to compare renting and buying: the 5% rule. Here is how it works:
        </p>
        <div className="bg-[#0A0E1A] p-4 rounded-xl mb-4 font-mono text-sm text-gray-300">
          <p>Annual cost of owning ≈ Property Price × 5%</p>
          <p>Monthly equivalent = (Property Price × 5%) ÷ 12</p>
          <p className="mt-2">If Monthly Rent &gt; Monthly Equivalent → Buying is better</p>
          <p>If Monthly Rent &lt; Monthly Equivalent → Renting is better</p>
        </div>
        <p>
          <strong>Why 5%?</strong> This percentage accounts for: 1% maintenance costs, 1% property taxes and insurance (rough RETT amortization), and 3% opportunity cost of your down payment (what you could have earned by investing that money elsewhere). It is a conservative benchmark, but it gives you a quick sanity check.
        </p>
        <p>
          <strong>Example:</strong> A property costs 1,200,000 SAR. The 5% rule says the annual cost of owning is 60,000 SAR (5,000 SAR per month). If you can rent a similar property for 4,000 SAR per month (48,000 SAR per year), renting is currently cheaper. However, if rent is 5,500 SAR per month (66,000 SAR per year), buying makes more financial sense.
        </p>
        <p>
          Remember: the 5% rule is a starting point. It does not account for property appreciation, which in Riyadh has historically been 5-8% annually in prime areas. If your property appreciates at 6% per year, the financial equation shifts dramatically in favor of buying.
        </p>
      </GlassCard>

      <GlassCard>
        <h2>Real-Life Calculation Examples</h2>

        <h3>Example 1: Renting a 3BHK in Riyadh vs. Buying the Same Property</h3>
        <div className="bg-[#0A0E1A] p-4 rounded-xl mb-4">
          <p className="text-white font-semibold">Scenario: 3-Bedroom Apartment in Al Malqa, Riyadh</p>
          <div className="grid grid-cols-2 gap-4 mt-3 text-sm">
            <div>
              <p className="text-desert-primary font-medium">Renting</p>
              <p>Annual Rent: 60,000 SAR</p>
              <p>Monthly Rent: 5,000 SAR</p>
              <p>10-Year Total: 600,000 SAR</p>
              <p>Equity Built: 0 SAR</p>
              <p>Moving Costs (3 moves): 6,000 SAR</p>
              <p className="text-desert-gold mt-2">Total Cost: 606,000 SAR</p>
              <p className="text-gray-500">You own nothing after 10 years.</p>
            </div>
            <div>
              <p className="text-desert-primary font-medium">Buying</p>
              <p>Purchase Price: 1,200,000 SAR</p>
              <p>Down Payment (20%): 240,000 SAR</p>
              <p>Loan Amount: 960,000 SAR</p>
              <p>Monthly Payment: ~5,150 SAR</p>
              <p>10-Year Payments: 618,000 SAR</p>
              <p className="text-desert-gold mt-2">Remaining Loan: ~620,000 SAR</p>
              <p className="text-gray-500">Equity built: 580,000 SAR + appreciation</p>
            </div>
          </div>
        </div>
        <p>
          In this example, the monthly cost of owning (5,150 SAR) is close to renting (5,000 SAR). However, after 10 years, the homeowner has built approximately 580,000 SAR in equity (assuming no appreciation), while the renter has nothing. Even with the upfront costs of RETT (60,000 SAR) and agent fees (30,000 SAR), the homeowner comes out significantly ahead if they hold the property for 10+ years.
        </p>

        <h3>Example 2: Short-Term Stay (3 Years)</h3>
        <div className="bg-[#0A0E1A] p-4 rounded-xl">
          <p className="text-white font-semibold">Scenario: Expat Professional in Jeddah, 3-Year Contract</p>
          <p className="text-sm mt-2">Renting a 2BHK apartment for 48,000 SAR/year: 3-year total = 144,000 SAR.</p>
          <p className="text-sm">Buying the same apartment for 900,000 SAR: RETT = 45,000 SAR, agent fees = 22,500 SAR, total upfront = 67,500 SAR + down payment. Monthly mortgage = ~4,100 SAR. After 3 years, selling costs (agent fees + early settlement penalties) would likely wipe out any equity gained.</p>
          <p className="text-sm text-desert-primary mt-2">Verdict: For short stays under 5 years, renting is almost always the better financial choice.</p>
        </div>
      </GlassCard>

      <GlassCard>
        <h2>Pros and Cons Summary</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-[#0A0E1A] p-4 rounded-xl">
            <p className="text-desert-primary font-bold text-lg mb-2">Renting</p>
            <p className="text-green-400 text-sm">✓ Lower upfront costs</p>
            <p className="text-green-400 text-sm">✓ Flexibility to move easily</p>
            <p className="text-green-400 text-sm">✓ No maintenance responsibility</p>
            <p className="text-green-400 text-sm">✓ No property tax exposure</p>
            <p className="text-green-400 text-sm">✓ Easier budget planning</p>
            <p className="text-red-400 text-sm mt-2">✗ No equity building</p>
            <p className="text-red-400 text-sm">✗ Rent increases over time</p>
            <p className="text-red-400 text-sm">✗ No personalization allowed</p>
            <p className="text-red-400 text-sm">✗ Landlord restrictions</p>
            <p className="text-red-400 text-sm">✗ Frequent moving costs</p>
          </div>
          <div className="bg-[#0A0E1A] p-4 rounded-xl">
            <p className="text-desert-primary font-bold text-lg mb-2">Buying</p>
            <p className="text-green-400 text-sm">✓ Build equity over time</p>
            <p className="text-green-400 text-sm">✓ Potential property appreciation</p>
            <p className="text-green-400 text-sm">✓ Freedom to renovate and customize</p>
            <p className="text-green-400 text-sm">✓ Fixed monthly payment (Murabaha)</p>
            <p className="text-green-400 text-sm">✓ Stability for family and schools</p>
            <p className="text-red-400 text-sm mt-2">✗ High upfront costs (RETT, down payment)</p>
            <p className="text-red-400 text-sm">✗ Maintenance responsibility</p>
            <p className="text-red-400 text-sm">✗ Difficult to move quickly</p>
            <p className="text-red-400 text-sm">✗ Market risk (prices can fall)</p>
            <p className="text-red-400 text-sm">✗ Long-term commitment</p>
          </div>
        </div>
      </GlassCard>

      <GlassCard>
        <h2>How to Use the Sauditoolhub Mortgage vs. Rent Calculator</h2>
        <p>
          Our <Link href="/mortgage-vs-rent" className="text-desert-primary font-bold underline">Mortgage vs. Rent Calculator</Link> takes the guesswork out of this decision. Enter the property price, your monthly rent, down payment amount, mortgage profit rate, and tenure. The calculator instantly shows your monthly mortgage payment, the total cost of renting vs. buying over your chosen timeframe, and the breakeven point where buying becomes the better financial choice.
        </p>
        <p>
          Also explore our <Link href="/rett-tax-calculator" className="text-desert-primary underline">RETT Calculator</Link> to plan for the 5% property tax, the <Link href="/property-valuation" className="text-desert-primary underline">Property Valuation Tool</Link> to estimate market prices, and the <Link href="/sama-loan-calculator" className="text-desert-primary underline">SAMA Loan Calculator</Link> for detailed mortgage payment breakdowns. Visit <Link href="/blog" className="text-desert-primary underline">our blog</Link> for more guides on Saudi real estate and finance.
        </p>
      </GlassCard>

      <GlassCard>
        <h2>Conclusion</h2>
        <p>
          The decision between renting and buying in Saudi Arabia is deeply personal and depends on your financial situation, career plans, and lifestyle preferences. For long-term residents (7+ years), buying builds equity and offers stability that renting cannot match. For shorter stays, renting provides flexibility without the massive upfront costs of RETT, down payments, and agent fees.
        </p>
        <p>
          The 5% rule is a useful starting point, but the real answer comes from running your actual numbers. Property appreciation in Saudi cities like Riyadh has been strong, but past performance does not guarantee future results. Consider both the financial and emotional factors — the pride of homeownership versus the freedom of renting.
        </p>
        <p>
          Start your analysis with the <Link href="/mortgage-vs-rent" className="text-desert-primary underline">Sauditoolhub Mortgage vs. Rent Calculator</Link> and make an informed decision with confidence.
        </p>
      </GlassCard>
    </article>
  )
}

function ArContent() {
  return (
    <article dir="rtl">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchemaAr) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": faqsAr.map(f => ({ "@type": "Question", "name": f.question, "acceptedAnswer": { "@type": "Answer", "text": f.answer } })) }) }} />

      <div className="text-center mb-8">
        <p className="text-desert-primary text-sm font-medium tracking-widest uppercase">دليل التمويل العقاري</p>
        <h1 className="text-3xl md:text-4xl font-bold text-white mt-2">الدليل الشامل للتمويل العقاري مقابل الإيجار: الاختيار الصحيح في السعودية 2026</h1>
        <p className="text-gray-400 mt-3 max-w-2xl mx-auto">
          أكبر قرار مالي في حياتك في المملكة. هل تلتزم برهن عقاري لمدة 25 عاماً أم تحتفظ بمرونة الإيجار؟ هذا الدليل يحلل الأرقام والتكاليف الخفية والعوامل العاطفية.
        </p>
      </div>

      <GlassCard>
        <h2>مقدمة</h2>
        <p>
          إذا كنت تعيش وتعمل في السعودية، فربما سألت نفسك هذا السؤال مرة على الأقل: هل أستأجر أم أشتري؟ إنه أكبر قرار مالي يتخذه معظم الناس في حياتهم. هناك الجاذبية العاطفية لامتلاك منزلك — الحرية في طلاء الجدران بأي لون، الفخر ببناء الثروة، الاستقرار في معرفة أن دفعتك الشهرية لن تزيد. ولكن هناك أيضاً الواقع المالي: الرهن العقاري لمدة 25 عاماً هو التزام ضخم، والتكاليف الخفية للملكية في السعودية قد تفاجئ حتى المشترين الأذكياء.
        </p>
        <p>
          في 2026، سوق العقارات السعودي ديناميكي. الرياض تنمو بسرعة مع مشاريع كبرى مثل مترو الرياض وحديقة الملك سلمان. جدة تتوسع على طول ساحل البحر الأحمر. الدمام والمنطقة الشرقية تواصلان جذب العمال في قطاعي النفط والبتروكيماويات. أسعار العقارات في المناطق المميزة ارتفعت بشكل ملحوظ. شقة 3 غرف في حي جيد بالرياض قد تكلف 1,000,000 إلى 1,500,000 ريال. فيلا في منطقة مرغوبة قد تتراوح من 2,000,000 إلى 4,000,000 ريال.
        </p>
        <p>
          يشرح هذا الدليل كل ما تحتاجه لاتخاذ قرار مستنير. ستتعرف على كيفية عمل التمويل العقاري الإسلامي (المرابحة والإجارة)، التكلفة الحقيقية للإيجار مقابل الملكية، قاعدة 5% المالية، وأمثلة حقيقية بأرقام فعلية. استخدم <Link href="/mortgage-vs-rent" className="text-desert-primary underline">حاسبة الرهن مقابل الإيجار</Link> المجانية.
        </p>
      </GlassCard>

      <GlassCard>
        <h2>كيف يعمل التمويل العقاري في السعودية (سياق 2026)</h2>
        <p>
          على عكس الأنظمة المصرفية التقليدية حيث تفرض قروض المنازل فائدة (ربا)، تعمل السعودية وفق الشريعة الإسلامية التي تحرم الفائدة. بدلاً من ذلك، تقدم البنوك منتجات تمويل متوافقة مع الشريعة. النموذجان الرئيسيان هما المرابحة والإجارة.
        </p>
        <p>
          <strong>المرابحة:</strong> هذا هو الشكل الأكثر شيوعاً للتمويل العقاري في السعودية. تجد العقار الذي تريد شراءه. يشتري البنك العقار من البائع بسعر السوق. ثم يبيعك البنك العقار بسعر أعلى، مع الفرق كربح للبنك. تدفع هذا المبلغ على أقساط شهرية لفترة متفق عليها (15-30 سنة). النقطة الرئيسية: تعرف بالضبط كم ستدفع إجمالاً من اليوم الأول. لا يوجد سعر فائدة متغير. دفعتك الشهرية ثابتة طوال المدة.
        </p>
        <p>
          <strong>الإجارة:</strong> بموجب الإجارة، يشتري البنك العقار ويؤجره لك. تدفع إيجاراً شهرياً للبنك. جزء من كل دفعة يذهب نحو شراء العقار في النهاية. بمرور الوقت، تنتقل الملكية إليك تدريجياً.
        </p>
        <p>
          <strong>صندوق التنمية العقارية (REDF):</strong> للمواطنين السعوديين، يوفر صندوق التنمية العقارية تمويلاً مدعوماً. يغطي الصندوق حتى 70% من قيمة العقار (حتى 500,000 ريال للمسكن الأول)، والباقي يمول عبر البنك. سعر الربح على القروض المدعومة أقل بكثير من أسعار السوق.
        </p>
        <p>
          استخدم <Link href="/sama-loan-calculator" className="text-desert-primary underline">حاسبة قرض سما</Link> لتقدير دفعاتك الشهرية.
        </p>
      </GlassCard>

      <GlassCard>
        <h2>التكلفة الحقيقية للإيجار في السعودية</h2>
        <div className="space-y-3">
          <div className="bg-[#0A0E1A] p-3 rounded-lg">
            <p className="text-white font-medium">مشكلة المال الميت</p>
            <p className="text-gray-400 text-sm">كل ريال تدفعه كإيجار يذهب مباشرة إلى جيب المالك. بعد 10 سنوات من دفع 5,000 ريال شهرياً، أنفقت 600,000 ريال ولا تملك شيئاً.</p>
          </div>
          <div className="bg-[#0A0E1A] p-3 rounded-lg">
            <p className="text-white font-medium">زيادات الإيجار السنوية</p>
            <p className="text-gray-400 text-sm">رغم ضوابط إيجار، يمكن للمالك زيادة الإيجار ضمن الحدود المسموحة. في المناطق عالية الطلب كالرياض، زيادات 5-10% سنوياً ليست غير شائعة.</p>
          </div>
          <div className="bg-[#0A0E1A] p-3 rounded-lg">
            <p className="text-white font-medium">تكاليف التنقل المتكرر</p>
            <p className="text-gray-400 text-sm">المستأجرون ينتقلون كل 2-3 سنوات. كل نقلة تكلف 1,000-3,000 ريال للنقل و200-500 ريال للتنظيف.</p>
          </div>
        </div>
      </GlassCard>

      <GlassCard>
        <h2>التكلفة الحقيقية للشراء (التكاليف الخفية)</h2>
        <div className="space-y-3">
          <div className="bg-[#0A0E1A] p-3 rounded-lg">
            <p className="text-white font-medium">1. ضريبة التصرفات العقارية 5%</p>
            <p className="text-gray-400 text-sm">أكبر تكلفة مسبقة. على عقار 1,500,000 ريال، تدفع 75,000 ريال ضريبة. استخدم <Link href="/rett-tax-calculator" className="text-desert-primary underline">حاسبة RETT</Link>.</p>
          </div>
          <div className="bg-[#0A0E1A] p-3 rounded-lg">
            <p className="text-white font-medium">2. أقساط الرهن العقاري الشهرية</p>
            <p className="text-gray-400 text-sm">لقرض 1,000,000 ريال بسعر ربح 4% لمدة 25 سنة، القسط الشهري حوالي 5,280 ريال.</p>
          </div>
          <div className="bg-[#0A0E1A] p-3 rounded-lg">
            <p className="text-white font-medium">3. الصيانة والإصلاحات (قاعدة 1%)</p>
            <p className="text-gray-400 text-sm">المعيار هو 1% من قيمة العقار سنوياً للصيانة. لمنزل بقيمة 1,500,000 ريال، هذا 15,000 ريال سنوياً.</p>
          </div>
          <div className="bg-[#0A0E1A] p-3 rounded-lg">
            <p className="text-white font-medium">4. عمولة الوسيط العقاري</p>
            <p className="text-gray-400 text-sm">عادة 2.5% من قيمة العقار. على عقار 2,000,000 ريال، هذا 50,000 ريال.</p>
          </div>
        </div>
      </GlassCard>

      <GlassCard>
        <h2>قاعدة 5% (مقياس مالي بسيط)</h2>
        <div className="bg-[#0A0E1A] p-4 rounded-xl mb-4 font-mono text-sm text-gray-300">
          <p>التكلفة السنوية للملكية ≈ سعر العقار × 5%</p>
          <p>المعادل الشهري = (سعر العقار × 5%) ÷ 12</p>
          <p className="mt-2">إذا كان الإيجار الشهري &gt; المعادل الشهري → الشراء أفضل</p>
          <p>إذا كان الإيجار الشهري &lt; المعادل الشهري → الإيجار أفضل</p>
        </div>
        <p>مثال: عقار 1,200,000 ريال. قاعدة 5% تقول التكلفة السنوية 60,000 ريال (5,000 شهرياً). إذا كان الإيجار 4,000 ريال، الإيجار أرخص حالياً.</p>
      </GlassCard>

      <GlassCard>
        <h2>ملخص الإيجابيات والسلبيات</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-[#0A0E1A] p-4 rounded-xl">
            <p className="text-desert-primary font-bold text-lg mb-2">الإيجار</p>
            <p className="text-green-400 text-sm">✓ تكاليف مسبقة أقل</p>
            <p className="text-green-400 text-sm">✓ مرونة في التنقل</p>
            <p className="text-green-400 text-sm">✓ لا مسؤولية صيانة</p>
            <p className="text-green-400 text-sm">✓ لا ضريبة عقارية</p>
            <p className="text-red-400 text-sm mt-2">✗ لا بناء ثروة</p>
            <p className="text-red-400 text-sm">✗ زيادات الإيجار</p>
            <p className="text-red-400 text-sm">✗ قيود المالك</p>
          </div>
          <div className="bg-[#0A0E1A] p-4 rounded-xl">
            <p className="text-desert-primary font-bold text-lg mb-2">الشراء</p>
            <p className="text-green-400 text-sm">✓ بناء ثروة مع الوقت</p>
            <p className="text-green-400 text-sm">✓ ارتفاع قيمة العقار</p>
            <p className="text-green-400 text-sm">✓ حرية التعديل والتجديد</p>
            <p className="text-green-400 text-sm">✓ دفعة شهرية ثابتة</p>
            <p className="text-red-400 text-sm mt-2">✗ تكاليف مسبقة عالية</p>
            <p className="text-red-400 text-sm">✗ مسؤولية الصيانة</p>
            <p className="text-red-400 text-sm">✗ التزام طويل الأمد</p>
          </div>
        </div>
      </GlassCard>

      <GlassCard>
        <h2>كيفية استخدام حاسبة الرهن مقابل الإيجار</h2>
        <p>
          <Link href="/mortgage-vs-rent" className="text-desert-primary font-bold underline">حاسبة الرهن مقابل الإيجار</Link> تزيل التخمين من هذا القرار. أدخل سعر العقار، إيجارك الشهري، الدفعة المقدمة، نسبة الربح، والمدة.
        </p>
        <p>
          اكتشف أيضاً <Link href="/rett-tax-calculator" className="text-desert-primary underline">حاسبة ضريبة التصرفات العقارية</Link>، <Link href="/property-valuation" className="text-desert-primary underline">أداة تقييم العقارات</Link>، و <Link href="/sama-loan-calculator" className="text-desert-primary underline">حاسبة قرض سما</Link>. زر <Link href="/blog" className="text-desert-primary underline">مدونتنا</Link> للمزيد.
        </p>
      </GlassCard>

      <GlassCard>
        <h2>الخاتمة</h2>
        <p>
          القرار بين الإيجار والشراء في السعودية شخصي ويعتمد على وضعك المالي وخططك المهنية. للمقيمين لفترة طويلة (7+ سنوات)، الشراء يبني ثروة ويوفر استقراراً لا يوفره الإيجار. للمدد القصيرة، الإيجار يوفر مرونة دون التكاليف المسبقة الكبيرة.
        </p>
        <p>
          ابدأ تحليلك مع <Link href="/mortgage-vs-rent" className="text-desert-primary underline">حاسبة Sauditoolhub</Link> واتخذ قراراً مستنيراً بثقة.
        </p>
      </GlassCard>
    </article>
  )
}

function UrContent() {
  return (
    <article dir="rtl">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchemaUr) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": faqsUr.map(f => ({ "@type": "Question", "name": f.question, "acceptedAnswer": { "@type": "Answer", "text": f.answer } })) }) }} />

      <div className="text-center mb-8">
        <p className="text-desert-primary text-sm font-medium tracking-widest uppercase">گھر کی فنانسنگ گائیڈ</p>
        <h1 className="text-3xl md:text-4xl font-bold text-white mt-2">سعودی عرب 2026 میں گھر خریدنا بمقابلہ کرایہ پر لینے کا مکمل گائیڈ</h1>
        <p className="text-gray-400 mt-3 max-w-2xl mx-auto">
          آپ کی زندگی کا سب سے بڑا مالی فیصلہ۔ کیا 25 سالہ مارگیج کریں یا کرایہ کی لچک رکھیں؟ یہ گائیڈ نمبرز، پوشیدہ اخراجات اور جذباتی عوامل کو توڑتا ہے۔
        </p>
      </div>

      <GlassCard>
        <h2>تعارف</h2>
        <p>
          اگر آپ سعودی عرب میں رہتے اور کام کرتے ہیں تو شاید آپ نے اپنے آپ سے کم از کم ایک بار یہ سوال پوچھا ہوگا: کیا کرایہ پر لوں یا خریدوں؟ یہ زندگی کا سب سے بڑا مالی فیصلہ ہے۔ اپنا گھر مالک ہونے کی جذباتی اپیل ہے — دیواروں کو کوئی بھی رنگ دینے کی آزادی، ایکویٹی بنانے کا فخر، یہ جاننے کا استحکام کہ ماہانہ ادائیگی نہیں بڑھے گی۔ لیکن مالی حقیقت بھی ہے: 25 سالہ مارگیج ایک بڑا عہد ہے۔
        </p>
        <p>
          2026 میں سعودی رئیل اسٹیٹ مارکیٹ متحرک ہے۔ ریاض بڑے منصوبوں کے ساتھ تیزی سے بڑھ رہا ہے۔ جدہ بحیرہ احمر کے ساحل پر پھیل رہا ہے۔ قیمتیں نمایاں طور پر بڑھی ہیں۔ اچھے علاقے میں 3 بیڈروم اپارٹمنٹ 1,000,000 سے 1,500,000 ریال کا ہو سکتا ہے۔ ولا 2,000,000 سے 4,000,000 ریال تک۔
        </p>
        <p>
          یہ گائیڈ آپ کو باخبر فیصلہ کرنے میں مدد کرتا ہے۔ جانیں کہ اسلامی مرابحہ اور اجارہ کیسے کام کرتے ہیں، کرایہ اور ملکیت کی حقیقی قیمت، 5% اصول، اور حقیقی مثالیں۔ <Link href="/mortgage-vs-rent" className="text-desert-primary underline">مارگیج بمقابلہ کرایہ کیلکولیٹر</Link> استعمال کریں۔
        </p>
      </GlassCard>

      <GlassCard>
        <h2>سعودی عرب میں مارگیج کیسے کام کرتا ہے (2026)</h2>
        <p>
          سعودی عرب اسلامی شریعت کے تحت کام کرتا ہے جو سود کو حرام قرار دیتی ہے۔ اس کے بجائے بینک شریعت کے مطابق مصنوعات پیش کرتے ہیں۔ دو اہم ماڈل مرابحہ اور اجارہ ہیں۔
        </p>
        <p>
          <strong>مرابحہ:</strong> یہ سب سے عام شکل ہے۔ آپ جائیداد ڈھونڈتے ہیں، بینک اسے خریدتا ہے اور آپ کو منافع پر بیچتا ہے۔ آپ قسطوں میں ادائیگی کرتے ہیں۔ ماہانہ ادائیگی پوری مدت کے لیے مقرر ہے۔
        </p>
        <p>
          <strong>اجارہ:</strong> بینک جائیداد خرید کر آپ کو لیز پر دیتا ہے۔ ہر قسط کا کچھ حصہ جائیداد کی خریداری کی طرف جاتا ہے۔ وقت کے ساتھ ملکیت منتقل ہوتی ہے۔
        </p>
        <p>
          <strong>REDF (ریئل اسٹیٹ ڈویلپمنٹ فنڈ):</strong> سعودی شہریوں کے لیے، REDF جائیداد کی قیمت کا 70% تک کور کرتا ہے۔ <Link href="/sama-loan-calculator" className="text-desert-primary underline">ساما لون کیلکولیٹر</Link> استعمال کریں۔
        </p>
      </GlassCard>

      <GlassCard>
        <h2>سعودی عرب میں کرایہ کی حقیقی قیمت</h2>
        <div className="space-y-3">
          <div className="bg-[#0A0E1A] p-3 rounded-lg">
            <p className="text-white font-medium">مردہ رقم کا مسئلہ</p>
            <p className="text-gray-400 text-sm">ہر ریال کرایہ مالک کی جیب میں جاتا ہے۔ 10 سال میں 5,000 ریال ماہانہ = 600,000 ریال خرچ، کچھ نہیں ملتا۔</p>
          </div>
          <div className="bg-[#0A0E1A] p-3 rounded-lg">
            <p className="text-white font-medium">سالانہ کرایہ میں اضافہ</p>
            <p className="text-gray-400 text-sm">ایجار کی حدوں کے باوجود، زیادہ طلب والے علاقوں میں 5-10% اضافہ عام ہے۔</p>
          </div>
          <div className="bg-[#0A0E1A] p-3 rounded-lg">
            <p className="text-white font-medium">بار بار منتقلی کے اخراجات</p>
            <p className="text-gray-400 text-sm">ہر 2-3 سال بعد منتقلی پر 1,000-3,000 ریال خرچ ہوتے ہیں۔</p>
          </div>
        </div>
      </GlassCard>

      <GlassCard>
        <h2>خریداری کی حقیقی قیمت (پوشیدہ اخراجات)</h2>
        <div className="space-y-3">
          <div className="bg-[#0A0E1A] p-3 rounded-lg">
            <p className="text-white font-medium">1. RETT 5% ٹیکس</p>
            <p className="text-gray-400 text-sm">1,500,000 ریال کی جائیداد پر 75,000 ریال ٹیکس۔ <Link href="/rett-tax-calculator" className="text-desert-primary underline">RETT کیلکولیٹر</Link> استعمال کریں۔</p>
          </div>
          <div className="bg-[#0A0E1A] p-3 rounded-lg">
            <p className="text-white font-medium">2. ماہانہ قسط</p>
            <p className="text-gray-400 text-sm">10 لاکھ کے قرض پر 4% منافع 25 سال میں ~5,280 ریال ماہانہ۔</p>
          </div>
          <div className="bg-[#0A0E1A] p-3 rounded-lg">
            <p className="text-white font-medium">3. دیکھ بھال (1% اصول)</p>
            <p className="text-gray-400 text-sm">سالانہ جائیداد کی قیمت کا 1%۔ 1.5 ملین پر 15,000 ریال سالانہ۔</p>
          </div>
        </div>
      </GlassCard>

      <GlassCard>
        <h2>5% اصول</h2>
        <div className="bg-[#0A0E1A] p-4 rounded-xl mb-4 font-mono text-sm text-gray-300">
          <p>ملکیت کی سالانہ قیمت ≈ جائیداد کی قیمت × 5%</p>
          <p>ماہانہ مساوی = (جائیداد کی قیمت × 5%) ÷ 12</p>
        </div>
        <p>مثال: 1,200,000 ریال کی جائیداد × 5% = 60,000 سالانہ = 5,000 ماہانہ۔ اگر کرایہ 4,000 ہے تو کرایہ سستا ہے۔</p>
      </GlassCard>

      <GlassCard>
        <h2>فوائد اور نقصانات کا خلاصہ</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-[#0A0E1A] p-4 rounded-xl">
            <p className="text-desert-primary font-bold text-lg mb-2">کرایہ</p>
            <p className="text-green-400 text-sm">✓ کم ابتدائی اخراجات</p>
            <p className="text-green-400 text-sm">✓ آسانی سے منتقلی</p>
            <p className="text-green-400 text-sm">✓ دیکھ بھال کی ذمہ داری نہیں</p>
            <p className="text-red-400 text-sm mt-2">✗ کوئی ایکویٹی نہیں</p>
            <p className="text-red-400 text-sm">✗ کرایہ بڑھتا ہے</p>
            <p className="text-red-400 text-sm">✗ مالک کی پابندیاں</p>
          </div>
          <div className="bg-[#0A0E1A] p-4 rounded-xl">
            <p className="text-desert-primary font-bold text-lg mb-2">خریداری</p>
            <p className="text-green-400 text-sm">✓ ایکویٹی بنتی ہے</p>
            <p className="text-green-400 text-sm">✓ قیمت بڑھنے کا امکان</p>
            <p className="text-green-400 text-sm">✓ ترمیم کی آزادی</p>
            <p className="text-red-400 text-sm mt-2">✗ زیادہ ابتدائی اخراجات</p>
            <p className="text-red-400 text-sm">✗ دیکھ بھال کی ذمہ داری</p>
            <p className="text-red-400 text-sm">✗ طویل مدتی عہد</p>
          </div>
        </div>
      </GlassCard>

      <GlassCard>
        <h2>نتیجہ</h2>
        <p>
          کرایہ اور خریداری کے درمیان فیصلہ آپ کی مالی صورتحال اور منصوبوں پر منحصر ہے۔ طویل قیام (7+ سال) کے لیے خریداری بہتر ہے۔ مختصر مدت کے لیے کرایہ بہتر ہے۔
        </p>
        <p>
          <Link href="/mortgage-vs-rent" className="text-desert-primary underline">Sauditoolhub کیلکولیٹر</Link> سے اپنا تجزیہ شروع کریں اور اعتماد سے فیصلہ کریں۔ مزید رہنمائی کے لیے <Link href="/blog" className="text-desert-primary underline">ہمارا بلاگ</Link> دیکھیں۔
        </p>
      </GlassCard>
    </article>
  )
}

function TlContent() {
  return (
    <article>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchemaTl) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": faqsTl.map(f => ({ "@type": "Question", "name": f.question, "acceptedAnswer": { "@type": "Answer", "text": f.answer } })) }) }} />

      <div className="text-center mb-8">
        <p className="text-desert-primary text-sm font-medium tracking-widest uppercase">Gabay sa Pananalapi ng Bahay</p>
        <h1 className="text-3xl md:text-4xl font-bold text-white mt-2">Gabay sa Mortgage vs. Pagrerenta: Paggawa ng Tamang Desisyon sa Saudi Arabia 2026</h1>
        <p className="text-gray-400 mt-3 max-w-2xl mx-auto">
          Ang pinakamalaking desisyong pinansyal ng iyong buhay sa Kaharian. Dapat ka bang mag-commit sa 25-taong mortgage o panatilihin ang flexibility ng pagrerenta? Sinasaliksik ng gabay na ito ang mga numero, hidden costs, at emosyonal na salik.
        </p>
      </div>

      <GlassCard>
        <h2>Introduksyon</h2>
        <p>
          Kung ikaw ay nakatira at nagtatrabaho sa Saudi Arabia, malamang naitanong mo na ang tanong na ito: dapat ba akong umupa o bumili? Ito ang pinakamalaking desisyong pinansyal na ginagawa ng karamihan sa kanilang buhay. Sa konteksto ng Saudi, may mga natatanging konsiderasyon. May emosyonal na apela ang pagmamay-ari ng sariling bahay — ang kalayaang magpinta ng dingding, ang pagmamalaki ng pagbuo ng equity, ang katatagan ng hindi pagtaas ng buwanang bayad. Ngunit mayroon ding pinansyal na katotohanan: ang 25-taong mortgage ay isang malaking commitment.
        </p>
        <p>
          Sa 2026, ang Saudi real estate market ay dinamiko. Ang Riyadh ay mabilis na lumalaki sa mga pangunahing proyekto. Ang Jeddah ay lumalawak sa baybayin ng Red Sea. Ang mga presyo sa prime areas ay tumaas nang malaki. Ang 3-bedroom apartment sa magandang neighborhood ay maaaring nagkakahalaga ng 1,000,000 hanggang 1,500,000 SAR.
        </p>
        <p>
          Ginagabayan ka ng gabay na ito sa lahat ng kailangan mong malaman: paano gumagana ang Islamic mortgages (Murabaha at Ijara), ang tunay na halaga ng pagrerenta vs. pagmamay-ari, ang 5% rule, at mga halimbawa sa totoong buhay. Gamitin ang aming libreng <Link href="/mortgage-vs-rent" className="text-desert-primary underline">Mortgage vs. Rent Calculator</Link>.
        </p>
      </GlassCard>

      <GlassCard>
        <h2>Paano Gumagana ang Mortgage sa Saudi Arabia (2026)</h2>
        <p>
          Hindi tulad ng conventional banking, ang Saudi Arabia ay nagpapatakbo sa ilalim ng Islamic Sharia na nagbabawal sa interes. Ang mga bangko ay nag-aalok ng Sharia-compliant financing. Ang dalawang pangunahing modelo ay Murabaha at Ijara.
        </p>
        <p>
          <strong>Murabaha:</strong> Ikaw ay humanap ng property. Ang bangko ay bibili nito at ibebenta sa iyo sa mas mataas na presyo. Ang iyong buwanang bayad ay fixed para sa buong term.
        </p>
        <p>
          <strong>Ijara:</strong> Ang bangko ay bibili ng property at ipapaupa sa iyo. Bahagi ng bawat bayad ay napupunta sa pagmamay-ari ng property sa paglipas ng panahon.
        </p>
        <p>
          Gamitin ang <Link href="/sama-loan-calculator" className="text-desert-primary underline">SAMA Loan Calculator</Link> para sa pagtantiya ng buwanang bayad.
        </p>
      </GlassCard>

      <GlassCard>
        <h2>Ang Tunay na Halaga ng Pagrerenta</h2>
        <div className="space-y-3">
          <div className="bg-[#0A0E1A] p-3 rounded-lg">
            <p className="text-white font-medium">Problema ng Patay na Pera</p>
            <p className="text-gray-400 text-sm">Bawat riyal ng renta ay napupunta sa landlord. Pagkatapos ng 10 taon ng 5,000 SAR buwanan, gumastos ka ng 600,000 SAR at wala kang pagmamay-ari.</p>
          </div>
          <div className="bg-[#0A0E1A] p-3 rounded-lg">
            <p className="text-white font-medium">Taunang Pagtaas ng Renta</p>
            <p className="text-gray-400 text-sm">Sa kabila ng Ejar caps, ang pagtaas ng 5-10% taun-taon ay karaniwan sa mataas na demand na lugar.</p>
          </div>
        </div>
      </GlassCard>

      <GlassCard>
        <h2>Ang Tunay na Halaga ng Pagmamay-ari</h2>
        <div className="space-y-3">
          <div className="bg-[#0A0E1A] p-3 rounded-lg">
            <p className="text-white font-medium">1. RETT 5% Tax</p>
            <p className="text-gray-400 text-sm">Sa property na 1,500,000 SAR, 75,000 SAR ang buwis. Gamitin ang <Link href="/rett-tax-calculator" className="text-desert-primary underline">RETT Calculator</Link>.</p>
          </div>
          <div className="bg-[#0A0E1A] p-3 rounded-lg">
            <p className="text-white font-medium">2. Buwanang Mortgage Payment</p>
            <p className="text-gray-400 text-sm">Para sa 1,000,000 SAR loan sa 4% profit rate sa loob ng 25 taon, ~5,280 SAR buwanan.</p>
          </div>
          <div className="bg-[#0A0E1A] p-3 rounded-lg">
            <p className="text-white font-medium">3. Pagpapanatili (1% Rule)</p>
            <p className="text-gray-400 text-sm">1% ng halaga ng property taun-taon. Para sa 1.5M SAR, 15,000 SAR taun-taon.</p>
          </div>
        </div>
      </GlassCard>

      <GlassCard>
        <h2>Ang 5% Rule</h2>
        <div className="bg-[#0A0E1A] p-4 rounded-xl mb-4 font-mono text-sm text-gray-300">
          <p>Taunang halaga ng pagmamay-ari ≈ Presyo ng Property × 5%</p>
          <p>Buwanang katumbas = (Presyo ng Property × 5%) ÷ 12</p>
        </div>
        <p>Halimbawa: 1,200,000 SAR × 5% = 60,000 taun-taon = 5,000 buwanan. Kung renta ay 4,000 buwanan, mas mura ang pagrerenta.</p>
      </GlassCard>

      <GlassCard>
        <h2>Buod ng Mga Pros at Cons</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-[#0A0E1A] p-4 rounded-xl">
            <p className="text-desert-primary font-bold text-lg mb-2">Pagrerenta</p>
            <p className="text-green-400 text-sm">✓ Mas mababang upfront cost</p>
            <p className="text-green-400 text-sm">✓ Flexibility na lumipat</p>
            <p className="text-green-400 text-sm">✓ Walang maintenance responsibility</p>
            <p className="text-red-400 text-sm mt-2">✗ Walang equity building</p>
            <p className="text-red-400 text-sm">✗ Tumaas na renta</p>
          </div>
          <div className="bg-[#0A0E1A] p-4 rounded-xl">
            <p className="text-desert-primary font-bold text-lg mb-2">Pagbili</p>
            <p className="text-green-400 text-sm">✓ Pagbuo ng equity</p>
            <p className="text-green-400 text-sm">✓ Potensyal na appreciation</p>
            <p className="text-green-400 text-sm">✓ Kalayaang mag-renovate</p>
            <p className="text-red-400 text-sm mt-2">✗ Mataas na upfront cost</p>
            <p className="text-red-400 text-sm">✗ Maintenance responsibility</p>
          </div>
        </div>
      </GlassCard>

      <GlassCard>
        <h2>Konklusyon</h2>
        <p>
          Ang desisyon sa pagitan ng pagrerenta at pagbili ay personal at depende sa iyong pinansyal na sitwasyon at mga plano. Para sa pangmatagalang paninirahan (7+ taon), ang pagbili ay nagtatayo ng equity. Para sa maikling panahon, ang pagrerenta ay nagbibigay ng flexibility.
        </p>
        <p>
          Simulan ang iyong pagsusuri gamit ang <Link href="/mortgage-vs-rent" className="text-desert-primary underline">Sauditoolhub Calculator</Link> at bisitahin ang <Link href="/blog" className="text-desert-primary underline">aming blog</Link> para sa higit pang gabay.
        </p>
      </GlassCard>
    </article>
  )
}

function BnContent() {
  return (
    <article>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchemaBn) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": faqsBn.map(f => ({ "@type": "Question", "name": f.question, "acceptedAnswer": { "@type": "Answer", "text": f.answer } })) }) }} />

      <div className="text-center mb-8">
        <p className="text-desert-primary text-sm font-medium tracking-widest uppercase">গৃহ অর্থায়ন গাইড</p>
        <h1 className="text-3xl md:text-4xl font-bold text-white mt-2">সৌদি আরব ২০২৬-এ মর্টগেজ বনাম ভাড়া: সঠিক পছন্দ করার সম্পূর্ণ গাইড</h1>
        <p className="text-gray-400 mt-3 max-w-2xl mx-auto">
          আপনার জীবনের সবচেয়ে বড় আর্থিক সিদ্ধান্ত। আপনি কি ২৫ বছরের মর্টগেজ নেবেন নাকি ভাড়ার নমনীয়তা রাখবেন? এই গাইড সংখ্যা, লুকানো খরচ এবং আবেগগত বিষয়গুলি বিশ্লেষণ করে।
        </p>
      </div>

      <GlassCard>
        <h2>ভূমিকা</h2>
        <p>
          আপনি যদি সৌদি আরবে থাকেন এবং কাজ করেন, তাহলে সম্ভবত আপনি নিজেকে অন্তত একবার এই প্রশ্ন জিজ্ঞাসা করেছেন: আমি কি ভাড়া নেব নাকি কিনব? এটি অধিকাংশ মানুষের জীবনের সবচেয়ে বড় আর্থিক সিদ্ধান্ত। নিজের বাড়ির মালিক হওয়ার আবেগগত আবেদন রয়েছে — দেয়ালে যে কোনো রঙ দেওয়ার স্বাধীনতা, ইকুইটি তৈরির গর্ব, জেনে শান্তি যে মাসিক পেমেন্ট বাড়বে না। কিন্তু আর্থিক বাস্তবতাও রয়েছে: ২৫ বছরের মর্টগেজ একটি বড় অঙ্গীকার। সৌদি আরবে মালিকানার লুকানো খরচ এমনকি বুদ্ধিমান ক্রেতাদেরও চমকে দিতে পারে।
        </p>
        <p>
          ২০২৬ সালে সৌদি রিয়েল এস্টেট বাজার গতিশীল। রিয়াদ বড় প্রকল্পের সাথে দ্রুত বাড়ছে। জেদ্দা লোহিত সাগর উপকূলে বিস্তৃত হচ্ছে। দাম্মাম ও পূর্বাঞ্চল তেল ও পেট্রোকেমিক্যাল খাতে শ্রমিকদের আকর্ষণ করছে। ভাল এলাকায় ৩ বেডরুমের অ্যাপার্টমেন্ট ১,০০০,০০০ থেকে ১,৫০০,০০০ SAR হতে পারে। ভিলা ২,০০০,০০০ থেকে ৪,০০০,০০০ SAR পর্যন্ত।
        </p>
        <p>
          এই গাইড আপনাকে সচেতন সিদ্ধান্ত নিতে সাহায্য করে। ইসলামিক মুরাবাহা ও ইজারা ফাইন্যান্সিং, ভাড়া ও মালিকানার প্রকৃত খরচ, ৫% নিয়ম এবং বাস্তব উদাহরণ সম্পর্কে জানুন। আমাদের বিনামূল্যের <Link href="/mortgage-vs-rent" className="text-desert-primary underline">মর্টগেজ বনাম ভাড়া ক্যালকুলেটর</Link> ব্যবহার করুন।
        </p>
      </GlassCard>

      <GlassCard>
        <h2>সৌদি আরবে মর্টগেজ কীভাবে কাজ করে (২০২৬)</h2>
        <p>
          সৌদি আরব ইসলামী শরিয়া আইনের অধীনে কাজ করে যা সুদকে হারাম বলে। পরিবর্তে, ব্যাংক শরিয়া-সম্মত পণ্য সরবরাহ করে। দুটি প্রধান মডেল হল মুরাবাহা এবং ইজারা।
        </p>
        <p>
          <strong>মুরাবাহা:</strong> আপনি সম্পত্তি খুঁজে পান, ব্যাংক তা কিনে নেয় এবং আপনাকে মুনাফায় বিক্রি করে। আপনি কিস্তিতে পরিশোধ করেন। মাসিক পেমেন্ট পুরো মেয়াদের জন্য স্থির।
        </p>
        <p>
          <strong>ইজারা:</strong> ব্যাংক সম্পত্তি কিনে আপনাকে লিজ দেয়। প্রতিটি পেমেন্টের কিছু অংশ সম্পত্তি ক্রয়ের দিকে যায়। সময়ের সাথে সাথে মালিকানা হস্তান্তরিত হয়।
        </p>
        <p>
          <Link href="/sama-loan-calculator" className="text-desert-primary underline">সামা লোন ক্যালকুলেটর</Link> ব্যবহার করুন।
        </p>
      </GlassCard>

      <GlassCard>
        <h2>ভাড়ার প্রকৃত খরচ</h2>
        <div className="space-y-3">
          <div className="bg-[#0A0E1A] p-3 rounded-lg">
            <p className="text-white font-medium">মৃত টাকার সমস্যা</p>
            <p className="text-gray-400 text-sm">প্রতি রিয়াল ভাড়া জমিদারের পকেটে যায়। ১০ বছরে ৫,০০০ SAR মাসিক = ৬,০০,০০০ SAR খরচ, কিছুই থাকে না।</p>
          </div>
          <div className="bg-[#0A0E1A] p-3 rounded-lg">
            <p className="text-white font-medium">বার্ষিক ভাড়া বৃদ্ধি</p>
            <p className="text-gray-400 text-sm">ইজার সীমা সত্ত্বেও, উচ্চ চাহিদার এলাকায় ৫-১০% বৃদ্ধি সাধারণ।</p>
          </div>
        </div>
      </GlassCard>

      <GlassCard>
        <h2>ক্রয়ের প্রকৃত খরচ (লুকানো খরচ)</h2>
        <div className="space-y-3">
          <div className="bg-[#0A0E1A] p-3 rounded-lg">
            <p className="text-white font-medium">১. RETT ৫% কর</p>
            <p className="text-gray-400 text-sm">১,৫০০,০০০ SAR সম্পত্তিতে ৭৫,০০০ SAR কর। <Link href="/rett-tax-calculator" className="text-desert-primary underline">RETT ক্যালকুলেটর</Link> ব্যবহার করুন।</p>
          </div>
          <div className="bg-[#0A0E1A] p-3 rounded-lg">
            <p className="text-white font-medium">২. মাসিক বন্ধকী পেমেন্ট</p>
            <p className="text-gray-400 text-sm">৪% মুনাফায় ২৫ বছরে ১০ লক্ষ SAR ঋণের জন্য ~৫,২৮০ SAR মাসিক।</p>
          </div>
          <div className="bg-[#0A0E1A] p-3 rounded-lg">
            <p className="text-white font-medium">৩. রক্ষণাবেক্ষণ (১% নিয়ম)</p>
            <p className="text-gray-400 text-sm">সম্পত্তির মূল্যের ১% বার্ষিক। ১.৫ মিলিয়নে ১৫,০০০ SAR বার্ষিক।</p>
          </div>
        </div>
      </GlassCard>

      <GlassCard>
        <h2>৫% নিয়ম</h2>
        <div className="bg-[#0A0E1A] p-4 rounded-xl mb-4 font-mono text-sm text-gray-300">
          <p>মালিকানার বার্ষিক খরচ ≈ সম্পত্তির মূল্য × ৫%</p>
          <p>মাসিক সমতুল্য = (সম্পত্তির মূল্য × ৫%) ÷ ১২</p>
        </div>
        <p>উদাহরণ: ১২,০০,০০০ SAR × ৫% = ৬০,০০০ বার্ষিক = ৫,০০০ মাসিক। যদি ভাড়া ৪,০০০ হয় তবে ভাড়া সস্তা।</p>
      </GlassCard>

      <GlassCard>
        <h2>সুবিধা ও অসুবিধার সারসংক্ষেপ</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-[#0A0E1A] p-4 rounded-xl">
            <p className="text-desert-primary font-bold text-lg mb-2">ভাড়া</p>
            <p className="text-green-400 text-sm">✓ কম অগ্রিম খরচ</p>
            <p className="text-green-400 text-sm">✓ সহজে স্থানান্তর</p>
            <p className="text-green-400 text-sm">✓ রক্ষণাবেক্ষণের দায় নেই</p>
            <p className="text-red-400 text-sm mt-2">✗ কোনো ইকুইটি নয়</p>
            <p className="text-red-400 text-sm">✗ ভাড়া বাড়ে</p>
          </div>
          <div className="bg-[#0A0E1A] p-4 rounded-xl">
            <p className="text-desert-primary font-bold text-lg mb-2">ক্রয়</p>
            <p className="text-green-400 text-sm">✓ ইকুইটি তৈরি হয়</p>
            <p className="text-green-400 text-sm">✓ মূল্য বৃদ্ধির সম্ভাবনা</p>
            <p className="text-green-400 text-sm">✓ সংস্কারের স্বাধীনতা</p>
            <p className="text-red-400 text-sm mt-2">✗ উচ্চ অগ্রিম খরচ</p>
            <p className="text-red-400 text-sm">✗ রক্ষণাবেক্ষণের দায়</p>
          </div>
        </div>
      </GlassCard>

      <GlassCard>
        <h2>উপসংহার</h2>
        <p>
          ভাড়া এবং ক্রয়ের মধ্যে সিদ্ধান্ত আপনার আর্থিক অবস্থা এবং পরিকল্পনার উপর নির্ভর করে। দীর্ঘমেয়াদী বসবাসের (৭+ বছর) জন্য ক্রয় ভাল। স্বল্পমেয়াদের জন্য ভাড়া ভাল।
        </p>
        <p>
          <Link href="/mortgage-vs-rent" className="text-desert-primary underline">Sauditoolhub ক্যালকুলেটর</Link> দিয়ে আপনার বিশ্লেষণ শুরু করুন এবং আরও গাইডের জন্য <Link href="/blog" className="text-desert-primary underline">আমাদের ব্লগ</Link> দেখুন।
        </p>
      </GlassCard>
    </article>
  )
}

export default async function MortgageVsRentGuidePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  switch (locale) {
    case 'ar': return <ArContent />;
    case 'ur': return <UrContent />;
    case 'tl': return <TlContent />;
    case 'bn': return <BnContent />;
    default: return <EnContent />;
  }
}
