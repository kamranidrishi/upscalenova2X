import re

with open("src/components/QuoteModal.tsx", "r") as f:
    content = f.read()

# Fix Labels
content = content.replace('Your Name *', 'Full Name *')
content = content.replace(
    'className="block text-xs font-bold text-slate-700 mb-1"',
    'className="block text-sm font-semibold text-slate-700 mb-1.5"'
)

# Fix Inputs
content = content.replace(
    'className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-sm font-semibold text-slate-800 focus:outline-none focus:ring-2 focus:ring-indigo-500"',
    'className="w-full bg-white border border-slate-300 rounded-xl px-4 py-3 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-shadow"'
)
content = content.replace(
    'className="bg-slate-50 border border-slate-200 rounded-xl px-3 py-2.5 text-sm font-semibold text-slate-800 focus:outline-none focus:ring-2 focus:ring-indigo-500 max-w-[100px]"',
    'className="bg-white border border-slate-300 rounded-xl px-3 py-3 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-shadow max-w-[100px]"'
)

# Fix Submit button
content = content.replace(
    'className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-extrabold py-3.5 rounded-2xl text-sm shadow-md transition-colors flex items-center justify-center gap-2"',
    'className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3.5 rounded-xl text-sm shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2 active:scale-95"'
)

with open("src/components/QuoteModal.tsx", "w") as f:
    f.write(content)
