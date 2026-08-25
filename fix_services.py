import re

with open("src/components/ServicesSection.tsx", "r") as f:
    content = f.read()

content = content.replace(
    'className="text-indigo-600 hover:text-indigo-800 flex items-center gap-1 group-hover:translate-x-1 transition-transform"',
    'className="text-indigo-600 hover:text-indigo-800 flex items-center gap-1.5 font-semibold text-sm group-hover:translate-x-1 transition-transform focus:outline-none focus:underline"'
)
content = content.replace('text-xs font-bold', 'text-sm font-semibold')
content = content.replace('text-sm leading-relaxed font-normal', 'text-sm leading-relaxed font-medium')

with open("src/components/ServicesSection.tsx", "w") as f:
    f.write(content)
