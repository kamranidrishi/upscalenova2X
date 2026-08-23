with open('src/types.ts', 'r') as f:
    content = f.read()

content = content.replace('features: string[];', 'features: { name: string; value: string | boolean }[];')

with open('src/types.ts', 'w') as f:
    f.write(content)
