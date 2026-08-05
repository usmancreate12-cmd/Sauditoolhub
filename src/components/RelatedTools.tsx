import Link from 'next/link'
import { Users, Fuel } from 'lucide-react'

const strings: Record<
  string,
  { title: string; subtitle: string; familyName: string; familyDesc: string; fuelName: string; fuelDesc: string }
> = {
  en: {
    title: 'Related Tools',
    subtitle: 'Free Saudi Arabia calculators to plan your next move',
    familyName: 'Family Visa Optimizer',
    familyDesc: 'Estimate total dependent visa & Iqama costs for your family',
    fuelName: 'Fuel Cost Calculator',
    fuelDesc: 'Calculate trip fuel costs for any vehicle and fuel type',
  },
  ar: {
    title: 'أدوات ذات صلة',
    subtitle: 'حاسبات مجانية للسعودية لتخطيط خطوتك القادمة',
    familyName: 'محسّن تأشيرة العائلة',
    familyDesc: 'قدّر إجمالي تكاليف تأشيرة التابعين والإقامة لعائلتك',
    fuelName: 'حاسبة تكاليف الوقود',
    fuelDesc: 'احسب تكاليف وقود الرحلة لأي مركبة ونوع وقود',
  },
  ur: {
    title: 'متعلقہ ٹولز',
    subtitle: 'آپ کے اگلے قدم کی منصوبہ بندی کے لیے مفت سعودی کیلکولیٹرز',
    familyName: 'فیملی ویزا آپٹیمائزر',
    familyDesc: 'اپنے خاندان کے لیے کل ڈیپنڈنٹ ویزا اور اقامہ اخراجات کا تخمینہ لگائیں',
    fuelName: 'ایندھن لاگت کیلکولیٹر',
    fuelDesc: 'کسی بھی گاڑی اور ایندھن کی قسم کے لیے سفر کے ایندھن کے اخراجات کا حساب لگائیں',
  },
  tl: {
    title: 'Mga Kaugnay na Tool',
    subtitle: 'Libreng Saudi Arabia calculators para sa iyong susunod na hakbang',
    familyName: 'Family Visa Optimizer',
    familyDesc: 'Tantiyahin ang kabuuang dependent visa at Iqama gastos ng iyong pamilya',
    fuelName: 'Fuel Cost Calculator',
    fuelDesc: 'Kalkulahin ang gastos sa gasolina ng biyahe para sa anumang sasakyan',
  },
  bn: {
    title: 'সম্পর্কিত টুল',
    subtitle: 'আপনার পরবর্তী পদক্ষেপের পরিকল্পনার জন্য বিনামূল্যের সৌদি ক্যালকুলেটর',
    familyName: 'ফ্যামিলি ভিসা অপটিমাইজার',
    familyDesc: 'আপনার পরিবারের মোট ডিপেন্ডেন্ট ভিসা ও ইকামা খরচ অনুমান করুন',
    fuelName: 'ফুয়েল কস্ট ক্যালকুলেটর',
    fuelDesc: 'যেকোনো গাড়ি ও জ্বালানির জন্য ভ্রমণ জ্বালানি খরচ গণনা করুন',
  },
}

export function RelatedTools({ locale = 'en' }: { locale?: string }) {
  const t = strings[locale] || strings.en
  const isRtl = locale === 'ar' || locale === 'ur'

  return (
    <div className="not-prose glass p-6 rounded-xl mt-8" dir={isRtl ? 'rtl' : 'ltr'}>
      <h3 className="text-white text-lg font-bold mb-1">{t.title}</h3>
      <p className="text-gray-400 text-sm mb-4">{t.subtitle}</p>
      <div className="grid gap-3 sm:grid-cols-2">
        <Link
          href="/family-visa-optimizer"
          className="group flex items-start gap-3 rounded-xl bg-[#0A0E1A] p-4 transition-all hover:border-desert-primary/50 hover:bg-desert-primary/10 border border-desert-primary/25"
        >
          <Users className="h-5 w-5 shrink-0 text-desert-primary mt-0.5" />
          <span>
            <span className="block font-bold text-white group-hover:text-desert-primary transition-colors">{t.familyName}</span>
            <span className="mt-0.5 block text-sm text-gray-400">{t.familyDesc}</span>
          </span>
        </Link>
        <Link
          href="/fuel-cost-calculator"
          className="group flex items-start gap-3 rounded-xl bg-[#0A0E1A] p-4 transition-all hover:border-desert-primary/50 hover:bg-desert-primary/10 border border-desert-primary/25"
        >
          <Fuel className="h-5 w-5 shrink-0 text-desert-primary mt-0.5" />
          <span>
            <span className="block font-bold text-white group-hover:text-desert-primary transition-colors">{t.fuelName}</span>
            <span className="mt-0.5 block text-sm text-gray-400">{t.fuelDesc}</span>
          </span>
        </Link>
      </div>
    </div>
  )
}
