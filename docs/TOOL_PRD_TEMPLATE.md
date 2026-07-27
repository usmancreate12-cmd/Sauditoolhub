# Tool PRD Template

Use this template for every individual tool in HsabKSA.

---

## Tool #[Number]: [Tool Name]

### Category
[Expat & Visa Life / Business, HR & Freelance / Finance & Banking / Auto & Daily Life / Real Estate]

### Target Audience
[Who is this for? E.g., Expats leaving Saudi, HR Managers, etc.]

### Problem Statement
[What pain point does this solve? 2-3 sentences.]

### Solution
[How does the tool work conceptually? 2-3 sentences.]

### Input Fields
| Field Label       | Type    | Placeholder / Options                     | Validation          |
|-------------------|---------|-------------------------------------------|---------------------|
| e.g., Basic Salary| number  | "Enter your basic salary in SAR"          | Required, > 0       |
|                   |         |                                           |                     |

### Calculation Logic
[Explain the formula or rules. Reference Saudi Labor Law articles if applicable.]

```
Pseudo-code or formula:
result = (basicSalary / 12) * monthsWorked * (0.5 if < 5 years else 1.0)
```

### Output / Results
| Output Field          | Description                    |
|-----------------------|--------------------------------|
| e.g., Total EOSB      | Final amount in SAR            |

### Multi-Language Content
| Language | Tool Title              | Meta Description                     |
|----------|-------------------------|--------------------------------------|
| en       | EOSB Calculator         | Free EOSB calculator for Saudi...    |
| ar       | حاسبة مكافأة نهاية الخدمة | احسب مكافأة نهاية الخدمة...          |
| ur       | EOSB کیلکولیٹر          | سعودی عرب میں...                     |
| tl       | Calculator ng EOSB      | Libreng calculator...                |
| bn       | EOSB ক্যালকুলেটর        | সৌদি আরবে...                         |

### SEO Notes
- Target Keywords: [List primary & secondary keywords]
- Suggested FAQ: [3-5 questions]
- Internal Links: [Related tools to link to]

### Design Notes
- [Any specific UI requirements for this tool]

### Dependencies
- [Any external data, APIs, or libraries needed]
