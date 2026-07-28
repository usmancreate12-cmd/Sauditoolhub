import subprocess
import os
import re

# Mapping of old slugs to new slugs
slug_mapping = {
    'bill-splitter-shared-apartment-guide-saudi-arabia-2026': 'bill-splitter-shared-apartment-guide-saudi-arabia-2026',
    'cr-cost-starting-business-saudi-arabia-2026': 'cr-cost-starting-business-saudi-arabia-2026',
    'ejar-deposit-rental-guide-saudi-arabia-2026': 'ejar-deposit-rental-guide-saudi-arabia-2026',
    'eosb-end-of-service-benefit-saudi-arabia-2026': 'eosb-end-of-service-benefit-saudi-arabia-2026',
    'family-visa-dependent-fee-calculator-saudi-arabia-2026': 'family-visa-dependent-fee-calculator-saudi-arabia-2026',
    'final-settlement-air-ticket-calculator-saudi-arabia-2026': 'final-settlement-air-ticket-calculator-saudi-arabia-2026',
    'freelance-income-tax-guide-saudi-arabia-2026': 'freelance-income-calculator-saudi-arabia-2026',
    'fuel-cost-mileage-guide-saudi-arabia-2026': 'fuel-cost-mileage-guide-saudi-arabia-2026',
    'iban-validator-banking-guide-saudi-arabia-2026': 'iban-validator-saudi-arabia-2026',
    'jawazat-overstay-fine-calculator-saudi-arabia-2026': 'jawazat-overstay-fine-calculator-saudi-arabia-2026',
    'mortgage-vs-rent-guide-saudi-arabia-2026': 'mortgage-vs-rent-guide-saudi-arabia-2026',
    'nitaqat-saudization-ratios-saudi-arabia-2026': 'nitaqat-simulator-saudi-arabia-2026',
    'property-valuation-white-deed-guide-saudi-arabia-2026': 'property-valuation-white-deed-guide-saudi-arabia-2026',
    'rett-real-estate-transaction-tax-guide-saudi-arabia-2026': 'rett-real-estate-transaction-tax-guide-saudi-arabia-2026',
    'salla-zid-ecommerce-profit-calculator-saudi-arabia-2026': 'salla-profit-calculator-saudi-arabia-2026',
    'sama-loan-eligibility-dbr-saudi-arabia-2026': 'sama-loan-calculator-saudi-arabia-2026',
    'sec-electricity-bill-guide-saudi-arabia-2026': 'sec-electricity-bill-guide-saudi-arabia-2026',
    'sip-mutual-fund-investment-guide-saudi-arabia-2026': 'sip-calculator-saudi-arabia-2026',
    'traffic-fine-saher-guide-saudi-arabia-2026': 'traffic-fine-calculator-saudi-arabia-2026',
    'used-car-naql-malikiya-guide-saudi-arabia-2026': 'used-car-calculator-saudi-arabia-2026',
    'visa-checklist-documents-saudi-visas-2026': 'visa-checklist-generator-saudi-arabia-2026',
    'zakat-calculation-guide-saudi-arabia-2026': 'zakat-calculation-guide-saudi-arabia-2026',
    'zatca-vat-einvoicing-compliance-saudi-arabia-2026': 'zatca-vat-calculator-saudi-arabia-2026',
}

base_dir = 'src/app/[locale]/guide'
old_commit = '7e99291^'

for old_slug, new_slug in slug_mapping.items():
    # Get the old page.tsx content
    old_path = f"{base_dir}/{old_slug}/page.tsx"
    try:
        result = subprocess.run(
            ['git', 'show', f'{old_commit}:{old_path}'],
            capture_output=True, text=True, check=True, cwd='.'
        )
        content = result.stdout
        
        # Update internal links from old slugs to new slugs
        for old_link_slug, new_link_slug in slug_mapping.items():
            if old_link_slug != new_link_slug:
                content = content.replace(f'/{old_link_slug}', f'/{new_link_slug}')
        
        # Create new directory
        new_dir = f"{base_dir}/{new_slug}"
        os.makedirs(new_dir, exist_ok=True)
        
        # Write the page.tsx
        with open(f"{new_dir}/page.tsx", 'w', encoding='utf-8') as f:
            f.write(content)
        
        print(f"Restored: {old_slug} -> {new_slug}")
    except subprocess.CalledProcessError as e:
        print(f"Failed to restore {old_slug}: {e.stderr}")

print("Done restoring static pages")
