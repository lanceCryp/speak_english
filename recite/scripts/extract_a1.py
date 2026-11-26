import re, glob, json, os
from collections import Counter

SRC = 'docs/A1_基础入门级'
OUT_DIR = 'recite/data'

def clean(s):
    s = s.strip()
    # 去音标 /.../
    s = re.sub(r'/[^/]+/', '', s)
    # 去中文注释 (...)
    s = re.sub(r'\([^)]*[\u4e00-\u9fff][^)]*\)', '', s)
    # 清理多余空格
    s = re.sub(r'\s+', ' ', s).strip()
    return s

items = []
files = sorted(glob.glob(f'{SRC}/*.md'))
for f in files:
    name = os.path.basename(f)[:-3]
    short = re.sub(r'^\d+_', '', name)
    lines = open(f, encoding='utf-8').read().split('\n')
    scene = ''
    section = ''
    for line in lines:
        if line.startswith('# '):
            scene = re.sub(r'^\d+\.\s*', '', line[2:]).strip()
            section = ''
        elif line.startswith('## '):
            section = line[3:].strip()
        elif line.strip().startswith('- '):
            raw = line.strip()[2:].strip()
            if not raw:
                continue
            en = clean(raw)
            if not en:
                continue
            items.append({
                'id': len(items) + 1,
                'file': short,
                'scene': scene,
                'section': section,
                'en': en,
            })

sec_count = Counter(i['section'] for i in items)
print(f'文件数: {len(files)}')
print(f'总条目: {len(items)}')
print('--- 按小节类型分布 ---')
for s, c in sec_count.most_common():
    print(f'  {s}: {c}')

sentences = [i for i in items if ' ' in i['en'] and len(i['en']) > 3]
print(f'--- 完整句子(含空格): {len(sentences)}, 单词/词组: {len(items) - len(sentences)} ---')

out = {
    'level': 'A1',
    'source': SRC,
    'total': len(items),
    'sentenceCount': len(sentences),
    'items': items,
}
os.makedirs(OUT_DIR, exist_ok=True)
with open(f'{OUT_DIR}/a1.json', 'w', encoding='utf-8') as fp:
    json.dump(out, fp, ensure_ascii=False, indent=2)
print(f'已写入 {OUT_DIR}/a1.json')
