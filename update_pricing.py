import re

# Update content.ts
content_path = "src/data/content.ts"
with open(content_path, "r", encoding="utf-8") as f:
    content = f.read()

content = content.replace("{ name: 'Domain', value: 'no' }", "{ name: 'Domain', value: 'Not Free' }")
content = content.replace("{ name: 'Hosting', value: 'no' }", "{ name: 'Hosting', value: 'Not Free' }")
content = content.replace("{ name: 'Domain', value: 'yes' }", "{ name: 'Domain', value: 'Free' }")
content = content.replace("{ name: 'Hosting', value: 'yes' }", "{ name: 'Hosting', value: 'Free' }")

with open(content_path, "w", encoding="utf-8") as f:
    f.write(content)

# Update PricingSection.tsx
pricing_path = "src/components/PricingSection.tsx"
with open(pricing_path, "r", encoding="utf-8") as f:
    pricing_content = f.read()

old_features = """                        {feat.value === true ? (
                          <Check className={`w-4 h-4 shrink-0 ${isPro ? 'text-amber-400' : 'text-indigo-600'}`} />
                        ) : feat.value === false ? (
                          <span className={isPro ? 'text-slate-400' : 'text-slate-400 font-bold'}>—</span>
                        ) : (
                          <span className={`font-bold ${isPro ? 'text-white' : 'text-slate-900'} text-right`}>{feat.value}</span>
                        )}"""

new_features = """                        {feat.value === true ? (
                          <Check className={`w-4 h-4 shrink-0 ${isPro ? 'text-amber-400' : 'text-indigo-600'}`} />
                        ) : feat.value === false ? (
                          <span className={isPro ? 'text-slate-400' : 'text-slate-400 font-bold'}>—</span>
                        ) : feat.value === 'Free' ? (
                          <span className={`font-bold text-[10px] uppercase tracking-wider px-2 py-0.5 rounded-md ${isPro ? 'bg-emerald-400/20 text-emerald-300' : 'bg-emerald-100 text-emerald-700'}`}>Free</span>
                        ) : feat.value === 'Not Free' ? (
                          <span className={`font-bold text-[10px] uppercase tracking-wider px-2 py-0.5 rounded-md ${isPro ? 'bg-rose-400/20 text-rose-300' : 'bg-rose-50 text-rose-600'}`}>Not Free</span>
                        ) : (
                          <span className={`font-bold ${isPro ? 'text-white' : 'text-slate-900'} text-right`}>{feat.value}</span>
                        )}"""

pricing_content = pricing_content.replace(old_features, new_features)

with open(pricing_path, "w", encoding="utf-8") as f:
    f.write(pricing_content)

print("Updated content and component.")
