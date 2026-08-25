import re

with open("src/components/Footer.tsx", "r") as f:
    content = f.read()

content = content.replace('text-xs sm:text-sm', 'text-sm')
content = content.replace('text-xs font-medium', 'text-sm font-medium')
content = content.replace('text-xs font-semibold', 'text-sm font-semibold')
content = content.replace('text-xs text-slate-500 text-center', 'text-sm text-slate-500 text-center')

# Ensure focus rings on buttons in Footer
content = content.replace(
    'className="hover:text-indigo-400 transition-colors text-left"',
    'className="hover:text-indigo-400 transition-colors text-left focus:outline-none focus:underline"'
)

with open("src/components/Footer.tsx", "w") as f:
    f.write(content)
