export type VatRate = '15' | '0' | 'exempt'
export type InvoiceType = 'b2b' | 'b2c'

export interface ZatcaInput {
  subtotal: number
  vatRate: VatRate
  invoiceType: InvoiceType
  discount: number
}

export interface ComplianceItem {
  key: string
  required: boolean
}

export interface ZatcaResult {
  vatAmount: number
  totalAmount: number
  effectiveRate: string
  complianceItems: ComplianceItem[]
  zeroInputs: boolean
}

export function formatSAR(amount: number): string {
  return amount.toLocaleString('en-SA', { minimumFractionDigits: 2, maximumFractionDigits: 2 })
}

function getEffectiveRate(rate: VatRate): number {
  switch (rate) {
    case '15': return 15
    case '0': return 0
    case 'exempt': return 0
  }
}

function getComplianceItems(type: InvoiceType, rate: VatRate): ComplianceItem[] {
  const items: ComplianceItem[] = [
    { key: 'compliance.sellerName', required: true },
    { key: 'compliance.sellerVat', required: true },
    { key: 'compliance.invoiceDate', required: true },
    { key: 'compliance.totalWithVat', required: true },
    { key: 'compliance.qrCode', required: true },
  ]

  if (type === 'b2b') {
    items.push(
      { key: 'compliance.buyerName', required: true },
      { key: 'compliance.buyerVat', required: true },
      { key: 'compliance.vatAmount', required: true },
    )
  }

  if (rate === 'exempt') {
    items.push({ key: 'compliance.exemptionReason', required: true })
  }

  return items
}

export function calculateZatca(input: ZatcaInput): ZatcaResult {
  const effectiveRate = getEffectiveRate(input.vatRate)
  const rateLabel = input.vatRate === '15' ? '15%' : input.vatRate === '0' ? '0%' : 'Exempt'
  const discount = Math.max(0, input.discount || 0)
  const taxableAmount = Math.max(0, input.subtotal - discount)
  const vatAmount = taxableAmount * (effectiveRate / 100)
  const totalAmount = taxableAmount + vatAmount

  const zeroInputs = input.subtotal <= 0

  return {
    vatAmount,
    totalAmount,
    effectiveRate: rateLabel,
    complianceItems: getComplianceItems(input.invoiceType, input.vatRate),
    zeroInputs,
  }
}
