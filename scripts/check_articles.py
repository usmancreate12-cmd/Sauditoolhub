with open('src/data/articles.ts', 'r', encoding='utf-8') as f:
    lines = f.readlines()

for i, line in enumerate(lines):
    if 'slug:' in line and 'guide' in line:
        slug = line.strip()
        context = ''.join(lines[i:i+8])
        has_ar = "ar: ''" not in context and "ar: " in context
        has_content = 'content:' in context
        print(f'{slug}: has_ar={has_ar}, has_content={has_content}')
