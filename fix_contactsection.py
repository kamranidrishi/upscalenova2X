import re

with open("src/components/ContactSection.tsx", "r") as f:
    content = f.read()

# Fix Labels
content = content.replace('Name *', 'Full Name *')
content = content.replace(
    'className="block text-xs font-bold text-slate-700 mb-1"',
    'className="block text-sm font-semibold text-slate-700 mb-1.5"'
)

# Fix Inputs
content = content.replace(
    'className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm font-semibold text-slate-800 focus:outline-none focus:ring-2 focus:ring-indigo-500"',
    'className="w-full bg-white border border-slate-300 rounded-xl px-4 py-3 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-shadow"'
)
content = content.replace(
    'className="bg-slate-50 border border-slate-200 rounded-xl px-3 py-3 text-sm font-semibold text-slate-800 focus:outline-none focus:ring-2 focus:ring-indigo-500 max-w-[100px]"',
    'className="bg-white border border-slate-300 rounded-xl px-3 py-3 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-shadow max-w-[100px]"'
)

# Fix Submit Button
content = content.replace(
    'className="w-full bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-xl font-bold transition-all flex items-center justify-center gap-2 shadow-md hover:shadow-lg w-full"',
    'className="w-full bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3.5 rounded-xl font-semibold text-sm transition-all flex items-center justify-center gap-2 shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2 active:scale-95"'
)
content = content.replace(
    'className="w-full bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3.5 rounded-xl font-bold transition-all flex items-center justify-center gap-2 shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2 active:scale-95"',
    'className="w-full bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3.5 rounded-xl font-semibold text-sm transition-all flex items-center justify-center gap-2 shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2 active:scale-95"'
)

with open("src/components/ContactSection.tsx", "w") as f:
    f.write(content)
