export type VisaType = 'family_visit' | 'work' | 'umrah' | 'tourist' | 'exit_reentry'
export type ApplicantLocation = 'inside' | 'outside'
export type Nationality = 'pakistani' | 'indian' | 'filipino' | 'egyptian' | 'other'

export interface DocumentItem {
  key: string
  category: 'personal' | 'sponsor' | 'attestation' | 'medical' | 'financial'
  required: boolean
  nationalityNote?: string
}

export interface VisaDocumentMap {
  docs: DocumentItem[]
}

const DOCUMENTS: Record<VisaType, DocumentItem[]> = {
  family_visit: [
    { key: 'passport', category: 'personal', required: true },
    { key: 'photo', category: 'personal', required: true },
    { key: 'marriage_certificate', category: 'attestation', required: false, nationalityNote: 'attested_embassy' },
    { key: 'birth_certificate', category: 'attestation', required: false, nationalityNote: 'attested_embassy' },
    { key: 'sponsor_iqama', category: 'sponsor', required: true },
    { key: 'sponsor_salary', category: 'sponsor', required: true },
    { key: 'application_form', category: 'personal', required: true },
    { key: 'health_insurance', category: 'medical', required: true },
  ],
  work: [
    { key: 'passport', category: 'personal', required: true },
    { key: 'photo', category: 'personal', required: true },
    { key: 'degree_attestation', category: 'attestation', required: true },
    { key: 'medical_report', category: 'medical', required: true },
    { key: 'police_clearance', category: 'attestation', required: true, nationalityNote: 'police_note' },
    { key: 'employment_contract', category: 'personal', required: true },
    { key: 'application_form', category: 'personal', required: true },
    { key: 'cv_resume', category: 'personal', required: false },
    { key: 'professional_certificates', category: 'attestation', required: false },
  ],
  umrah: [
    { key: 'passport', category: 'personal', required: true },
    { key: 'photo', category: 'personal', required: true },
    { key: 'vaccination_certificate', category: 'medical', required: true },
    { key: 'mahram_proof', category: 'personal', required: false, nationalityNote: 'mahram_note' },
    { key: 'application_form', category: 'personal', required: true },
    { key: 'health_insurance', category: 'medical', required: true },
    { key: 'hotel_confirmation', category: 'financial', required: false },
    { key: 'flight_confirmation', category: 'financial', required: false },
  ],
  tourist: [
    { key: 'passport', category: 'personal', required: true },
    { key: 'photo', category: 'personal', required: true },
    { key: 'bank_statement', category: 'financial', required: true },
    { key: 'hotel_confirmation', category: 'financial', required: true },
    { key: 'flight_confirmation', category: 'financial', required: true },
    { key: 'health_insurance', category: 'medical', required: true },
    { key: 'application_form', category: 'personal', required: true },
  ],
  exit_reentry: [
    { key: 'passport', category: 'personal', required: true },
    { key: 'photo', category: 'personal', required: true },
    { key: 'sponsor_iqama', category: 'sponsor', required: true },
    { key: 'application_form', category: 'personal', required: true },
    { key: 'fee_receipt', category: 'financial', required: true },
    { key: 'sponsor_letter', category: 'sponsor', required: false, nationalityNote: 'sponsor_letter_note' },
  ],
}

function shouldInclude(item: DocumentItem, nationality?: Nationality): boolean {
  if (item.nationalityNote) {
    if (item.nationalityNote === 'attested_embassy' && (!nationality || nationality === 'other')) {
      return false
    }
    return true
  }
  return true
}

export function getDocumentsForVisa(
  visaType: VisaType,
  nationality?: Nationality
): DocumentItem[] {
  const docs = DOCUMENTS[visaType]
  if (!docs) return []
  return docs.filter((item) => shouldInclude(item, nationality))
}

export const VISA_TYPES: VisaType[] = [
  'family_visit',
  'work',
  'umrah',
  'tourist',
  'exit_reentry',
]

export const CATEGORY_ORDER: string[] = [
  'personal',
  'sponsor',
  'attestation',
  'medical',
  'financial',
]

export function formatCategoryKey(category: string): string {
  return `categories.${category}`
}
