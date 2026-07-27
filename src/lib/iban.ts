export type TransferType = 'sarie' | 'mada' | 'swift'

export interface IbanValidation {
  isValid: boolean
  bankCode: string
  bankName: string | null
  errorMessage: string | null
}

export interface TransferFeeResult {
  estimatedFee: number
  exchangeMargin: number
  totalCost: number
  description: string
}

const BANK_CODES: Record<string, string> = {
  '10': 'SNB (Saudi National Bank)',
  '20': 'Al Rajhi Bank',
  '30': 'Bank Albilad',
  '40': 'Arab National Bank',
  '50': 'Alinma Bank',
  '55': 'Saudi Investment Bank',
  '60': 'Bank AlJazira',
  '65': 'Saudi British Bank (SABB)',
  '70': 'Banque Saudi Fransi',
  '75': 'Riyad Bank',
  '80': 'Al Rajhi Bank',
  '90': 'Mishkat',
}

const IBAN_REGEX = /^SA\d{22}$/

export function validateIban(iban: string): IbanValidation {
  const clean = iban.replace(/\s/g, '').toUpperCase()

  if (!IBAN_REGEX.test(clean)) {
    return {
      isValid: false,
      bankCode: '',
      bankName: null,
      errorMessage: 'errors.invalidFormat',
    }
  }

  const bankCode = clean.substring(2, 4)
  const bankName = BANK_CODES[bankCode] || null

  return {
    isValid: true,
    bankCode,
    bankName,
    errorMessage: null,
  }
}

export function estimateTransferFee(transferType: TransferType, amount: number): TransferFeeResult {
  switch (transferType) {
    case 'sarie':
      return {
        estimatedFee: 0,
        exchangeMargin: 0,
        totalCost: 0,
        description: 'fees.sarie',
      }
    case 'mada':
      return {
        estimatedFee: 3.5,
        exchangeMargin: 0,
        totalCost: 3.5,
        description: 'fees.mada',
      }
    case 'swift': {
      const flatFee = 100
      const marginPct = 0.02
      const marginAmount = amount * marginPct
      return {
        estimatedFee: flatFee,
        exchangeMargin: marginAmount,
        totalCost: flatFee + marginAmount,
        description: 'fees.swift',
      }
    }
  }
}
