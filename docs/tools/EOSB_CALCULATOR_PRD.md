# Tool PRD: EOSB Calculator

## 1. Tool Overview
- **Tool Name:** End of Service Benefit (EOSB) Calculator
- **Category:** Expat & Visa Life
- **Target Audience:** Expats ending their contract, HR managers
- **Core Problem Solved:** Complex Saudi Labor Law EOSB formulas (Articles 84 & 85) — instant estimate without needing to read legal text.

## 2. User Inputs (Variables)
1. **Basic Monthly Salary** — Number input, min 0, max 999,999
2. **Years of Service** — Number input, min 0, max 50
3. **Months of Service** — Number input, 0–11
4. **Reason for Leaving** — Dropdown: Employee Resignation / Employer Termination / Contract End
5. **Contract Type** — Dropdown: Fixed-term (Limited) / Indefinite (Unlimited)

## 3. Math & Logic Formula
- **Step 1:** Convert total service to years (years + months/12).
- **Step 2:** Calculate full EOSB:
  - First 5 years: `(basicSalary / 2) × min(years, 5)`
  - After 5 years: `basicSalary × max(0, years - 5)`
  - Partial months: `(basicSalary / 12) × months × coefficient` (0.5 if ≤ 5yr, 1.0 if > 5yr)
- **Step 3:** Apply resignation reduction:
  - < 2yr → 0%
  - 2–5yr → 1/3
  - 5–10yr → 2/3
  - 10+ → 100%
- **Step 4:** Termination or contract end → 100%.
- **Edge Cases:**
  - Salary = 0 or negative → show error "Enter a valid salary"
  - Years = 0 and Months = 0 → show error "Service period must be at least 1 month"
  - Resignation + service < 2 years → EOSB = 0, show "No entitlement under Article 85"

## 4. Expected Output (UI)
- **Main Result:** Total EOSB Amount in large bold emerald green (`#10B981`) — e.g., **45,000 SAR**
- **Breakdown:**
  - Full Entitlement (Article 84): X SAR
  - Resignation Reduction (Article 85): applies Y% → Z SAR
  - Final Amount: **W SAR**
- **Disclaimer:** "This is an estimate based on Saudi Labor Law (Articles 84 & 85). Final amount is subject to your employment contract and employer. This is not legal advice."

## 5. SEO & Content
- **Primary Keywords:** EOSB calculator Saudi, End of service benefit Saudi Arabia, مكافأة نهاية الخدمة
- **Secondary Keywords:** Saudi gratuity calculator, Article 84, Article 85 labor law, EOSB settlement
- **Blog Topic to Link:** "Complete Guide to Saudi Labor Law 2024 — EOSB Explained"
- **Suggested FAQ:**
  1. Is EOSB calculated on basic salary or total salary?
  2. How much do I get if I resign after 3 years?
  3. Do I get EOSB if I resign before 2 years?
- **Hreflang Strategy:** Translate all labels, placeholders, results, and error messages into AR, UR, TL, BN. URLs: `/en/eosb-calculator`, `/ar/eosb-calculator`, etc.
