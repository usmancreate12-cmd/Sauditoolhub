type SoftwareAppSchema = {
  name: string
  description: string
  url: string
  category?: string
}

type BreadcrumbSchema = {
  items: { name: string; url: string }[]
}

type FAQSchema = {
  items: { question: string; answer: string }[]
}

type ArticleSchema = {
  headline: string
  description: string
  image?: string
  datePublished: string
  dateModified?: string
}

export function SoftwareAppJsonLd({ name, description, url, category }: SoftwareAppSchema) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name,
    applicationCategory: category ?? 'FinanceApplication',
    operatingSystem: 'Web',
    description,
    url,
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'SAR' },
    author: { '@type': 'Organization', name: 'Sauditoolhub' },
  }
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
}

export function BreadcrumbJsonLd({ items }: BreadcrumbSchema) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: item.url,
    })),
  }
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
}

export function FAQJsonLd({ items }: FAQSchema) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: { '@type': 'Answer', text: item.answer },
    })),
  }
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
}

export function ArticleJsonLd({ headline, description, image, datePublished, dateModified }: ArticleSchema) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline,
    description,
    ...(image && { image }),
    author: { '@type': 'Person', name: 'Sauditoolhub Team' },
    publisher: {
      '@type': 'Organization',
      name: 'Sauditoolhub',
      logo: { '@type': 'ImageObject', url: 'https://Sauditoolhub.com/logo.png' },
    },
    datePublished,
    ...(dateModified && { dateModified }),
  }
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
}

