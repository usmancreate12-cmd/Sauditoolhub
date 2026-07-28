import json
for f in ['en','ar','ur','tl','bn']:
    with open(f'messages/{f}.json', 'r', encoding='utf-8') as fh:
        data = json.load(fh)
    cp = data.get('ContactPage', {})
    ap = data.get('AboutPage', {})
    print(f"{f}: ContactPage.title={cp.get('title')}, AboutPage.title={ap.get('title')}")
