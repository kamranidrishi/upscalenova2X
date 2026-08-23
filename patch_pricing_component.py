import re

file_path = "src/components/PricingSection.tsx"
with open(file_path, "r") as f:
    content = f.read()

# 1. Remove the monthly state and toggle
content = re.sub(r'  const \[isMonthly, setIsMonthly\] = useState\(false\);\n', '', content)

toggle_html = """        {/* Toggle */}
        <div className="flex justify-center pt-2">
          <div className="inline-flex bg-slate-200/60 p-1 rounded-full border border-slate-200">
            <button
              onClick={() => setIsMonthly(false)}
              className={`px-6 py-2.5 rounded-full text-xs font-bold transition-all duration-300 ${!isMonthly ? 'bg-white text-slate-900 shadow-sm border border-slate-200/50' : 'text-slate-500 hover:text-slate-800'}`}
            >
              One-Time Payment
            </button>
            <button
              onClick={() => setIsMonthly(true)}
              className={`px-6 py-2.5 rounded-full text-xs font-bold transition-all duration-300 ${isMonthly ? 'bg-white text-slate-900 shadow-sm border border-slate-200/50' : 'text-slate-500 hover:text-slate-800'}`}
            >
              Monthly Payment
            </button>
          </div>
        </div>"""

content = content.replace(toggle_html, "")

# 2. Update price logic
price_logic_old = """            const activePrice = isMonthly && plan.monthlyPrice ? plan.monthlyPrice : plan.price;
            const activeOriginalPrice = isMonthly && plan.originalMonthlyPrice ? plan.originalMonthlyPrice : plan.originalPrice;
            const periodLabel = isMonthly ? '/ month' : '/ one-time';
            
            let discountPercent = 0;
            if (activeOriginalPrice && activePrice) {
              const orig = parseInt(activeOriginalPrice.replace(/[^0-9]/g, ''));
              const curr = parseInt(activePrice.replace(/[^0-9]/g, ''));
              if (orig > 0 && curr > 0 && orig > curr) {
                discountPercent = Math.round(((orig - curr) / orig) * 100);
              }
            }"""

price_logic_new = """            const activePrice = plan.price;
            const periodLabel = '/ one-time';"""
content = content.replace(price_logic_old, price_logic_new)

# 3. Update the discount percent UI if needed (we can just leave it since discountPercent won't be defined)
# Actually let's remove the discount display since we didn't add it to the new features.
discount_ui = """                    {activeOriginalPrice && discountPercent > 0 && (
                      <div className="mt-2 flex items-center gap-2">
                        <span className={`text-sm font-bold line-through ${isPro ? 'text-indigo-300/80' : 'text-slate-400'}`}>
                          {activeOriginalPrice}
                        </span>
                        <span className={`text-[10px] font-black px-2 py-0.5 rounded-full ${isPro ? 'bg-amber-400/20 text-amber-300' : 'bg-emerald-100 text-emerald-700'}`}>
                          {discountPercent}% OFF
                        </span>
                      </div>
                    )}"""
content = content.replace(discount_ui, "")

# 4. Update features rendering
features_old = """                  {/* Feature Checklist */}
                  <ul className="space-y-3 pt-2 text-xs sm:text-sm font-medium">
                    {plan.features.map((feat, i) => (
                      <li key={i} className="flex items-start gap-2.5">
                        <Check className={`w-4 h-4 shrink-0 mt-0.5 ${isPro ? 'text-amber-400' : 'text-indigo-600'}`} />
                        <span className={isPro ? 'text-slate-100' : 'text-slate-700'}>{feat}</span>
                      </li>
                    ))}
                  </ul>"""

features_new = """                  {/* Feature Checklist */}
                  <ul className="space-y-3 pt-2 text-xs sm:text-sm font-medium">
                    {plan.features.map((feat, i) => (
                      <li key={i} className={`flex items-center justify-between gap-2.5 py-1 ${feat.value === false ? 'opacity-50' : ''}`}>
                        <span className={isPro ? 'text-slate-200' : 'text-slate-600'}>{feat.name}</span>
                        {feat.value === true ? (
                          <Check className={`w-4 h-4 shrink-0 ${isPro ? 'text-amber-400' : 'text-emerald-500'}`} />
                        ) : feat.value === false ? (
                          <span className={isPro ? 'text-slate-400' : 'text-slate-400 font-bold'}>—</span>
                        ) : (
                          <span className={`font-bold ${isPro ? 'text-white' : 'text-slate-900'} text-right`}>{feat.value}</span>
                        )}
                      </li>
                    ))}
                  </ul>"""
content = content.replace(features_old, features_new)

# Let's fix the imports since useState was removed if we remove the toggle
content = content.replace("import React, { useState } from 'react';", "import React from 'react';")

with open(file_path, "w") as f:
    f.write(content)

