import re

with open("src/components/HowItWorksSection.tsx", "r") as f:
    content = f.read()

content = content.replace(
    'className="inline-block px-3 py-1 rounded-full bg-indigo-50 text-indigo-700 text-xs font-bold"',
    'className="inline-block px-3 py-1 rounded-full bg-indigo-50 text-indigo-700 text-sm font-semibold"'
)
content = content.replace('text-sm leading-relaxed text-slate-600', 'text-sm font-medium leading-relaxed text-slate-600')
content = content.replace('text-sm text-slate-600 leading-relaxed', 'text-sm font-medium leading-relaxed text-slate-600')

with open("src/components/HowItWorksSection.tsx", "w") as f:
    f.write(content)
