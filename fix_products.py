import re

with open("src/components/ProductsSection.tsx", "r") as f:
    content = f.read()

content = content.replace(
    'className="w-full bg-slate-900 hover:bg-indigo-600 text-white font-bold py-3 px-4 rounded-2xl text-xs sm:text-sm transition-colors shadow-xs"',
    'className="w-full bg-slate-900 hover:bg-indigo-600 text-white font-semibold py-3.5 px-4 rounded-xl text-sm transition-all shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2 active:scale-95"'
)
# Fix the pill badge
content = content.replace(
    'className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-50 border border-purple-100 text-purple-700 text-xs font-bold"',
    'className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-purple-50 border border-purple-100 text-purple-700 text-sm font-semibold tracking-wide"'
)


with open("src/components/ProductsSection.tsx", "w") as f:
    f.write(content)
