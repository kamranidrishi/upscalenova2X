import re

with open("src/components/DemoShowroom.tsx", "r") as f:
    content = f.read()

# 1. Simplify Card Badges (Remove Price from the tag since it's redundant)
content = re.sub(
    r'demo\.plan \+ " • " \+ PLANS\.find\(p => p\.id === demo\.plan\)\?\.price',
    r'demo.plan + " Plan"',
    content
)
# Wait, it's currently `{demo.plan} • {PLANS.find(p => p.id === demo.plan)?.price}`
content = content.replace(
    r"{demo.plan} • {PLANS.find(p => p.id === demo.plan)?.price}",
    r"{demo.plan} Plan"
)

# 2. Remove Feature Pills from Cards
feature_pills_pattern = r'\{\/\* Feature Pills \*\/\}.*?\{\/\* Launch Live Demo Button \*\/\}'
content = re.sub(feature_pills_pattern, '{/* Launch Live Demo Button */}', content, flags=re.DOTALL)

# 3. Update the button styles
content = content.replace(
    'className="w-full py-3.5 bg-slate-900 hover:bg-indigo-600 text-white font-bold text-xs uppercase tracking-wider rounded-xl transition-all duration-200 flex items-center justify-center gap-2 group/btn shadow-md hover:shadow-lg cursor-pointer"',
    'className="w-full py-3 bg-slate-900 hover:bg-indigo-600 text-white font-semibold text-sm rounded-xl transition-all duration-200 flex items-center justify-center gap-2 group/btn shadow-md hover:shadow-lg cursor-pointer focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2 active:scale-95"'
)

# 4. Filters (pills)
content = content.replace(
    'className={`px-4 py-2 rounded-full text-[11px] sm:text-xs font-bold transition-all shadow-sm ${',
    'className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-1 active:scale-95 ${'
)
# Remove the uppercase from category pills? The text-[11px] was uppercase? No, it just said `font-bold`.

# 5. Plan Switcher styling
# It's currently `<button className={\`flex-1 py-4 px-2 sm:px-6 flex flex-col items-center justify-center gap-1 transition-all relative ${`
# Let's make sure it's accessible.
content = content.replace(
    'className={`flex-1 py-4 px-2 sm:px-6 flex flex-col items-center justify-center gap-1 transition-all relative ${',
    'className={`flex-1 py-4 px-2 sm:px-6 flex flex-col items-center justify-center gap-1 transition-all relative focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 ${'
)

with open("src/components/DemoShowroom.tsx", "w") as f:
    f.write(content)
