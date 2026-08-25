import re

with open("src/components/FAQSection.tsx", "r") as f:
    content = f.read()

content = content.replace(
    'className="w-full text-left p-6 font-bold text-slate-900 text-base sm:text-lg flex items-center justify-between gap-4 hover:text-indigo-600 transition-colors"',
    'className="w-full text-left p-6 font-semibold text-slate-900 text-base sm:text-lg flex items-center justify-between gap-4 hover:text-indigo-600 transition-colors focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"'
)
content = content.replace(
    'text-sm leading-relaxed border-t border-slate-100/60 animate-in fade-in duration-200',
    'text-base leading-relaxed border-t border-slate-100/60 animate-in fade-in duration-200'
)

with open("src/components/FAQSection.tsx", "w") as f:
    f.write(content)
