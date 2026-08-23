import os
import re

files_to_patch = [
    "src/components/CafeDemo.tsx",
    "src/components/WebsiteDemoRenderer.tsx",
    "src/components/RestaurantDemo.tsx",
    "src/components/DemoShowroom.tsx",
    "src/components/RealEstateDemo.tsx",
    "src/components/GymDemo.tsx",
]

import_statement = """import { PRICING_PLANS } from '../data/content';
const basePrice = PRICING_PLANS.find(p => p.id === 'base')?.price || '₹24,999';
const proPrice = PRICING_PLANS.find(p => p.id === 'pro')?.price || '₹39,999';
const maxPrice = PRICING_PLANS.find(p => p.id === 'max')?.price || '₹59,999';
"""

for filepath in files_to_patch:
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    # Skip DemoShowroom if it's already using PRICING_PLANS properly for PLANS array
    # We did patch it before but let's check
    
    if "const basePrice =" not in content and "PRICING_PLANS" not in content:
        imports = list(re.finditer(r'^import .*?;$', content, re.MULTILINE))
        if imports:
            last_import = imports[-1]
            end_pos = last_import.end()
            content = content[:end_pos] + "\n" + import_statement + content[end_pos:]
    
    # We need to replace string literals correctly.
    # Pattern: 'Base Plan — ₹12,999' -> `Base Plan — ${basePrice}`
    # Note: '...' to `...`
    
    content = re.sub(r"'Base Plan — ₹12,999'", r"`Base Plan — ${basePrice}`", content)
    content = re.sub(r"'Pro Plan — ₹16,999'", r"`Pro Plan — ${proPrice}`", content)
    content = re.sub(r"'Max Plan — ₹24,999'", r"`Max Plan — ${maxPrice}`", content)
    content = re.sub(r"'Mega Plan — ₹24,999'", r"`Max Plan — ${maxPrice}`", content)
    
    content = re.sub(r"'Base Plan ₹12,999'", r"`Base Plan ${basePrice}`", content)
    content = re.sub(r"'Pro Plan ₹16,999'", r"`Pro Plan ${proPrice}`", content)
    content = re.sub(r"'Max Plan ₹24,999'", r"`Max Plan ${maxPrice}`", content)
    content = re.sub(r"'Mega Plan ₹24,999'", r"`Max Plan ${maxPrice}`", content)

    # In JSX text: >₹12,999< -> >{basePrice}<
    content = content.replace(">₹12,999<", ">{basePrice}<")
    content = content.replace(">₹16,999<", ">{proPrice}<")
    content = content.replace(">₹24,999<", ">{maxPrice}<")
    
    # In quotes: "₹12,999" -> {basePrice}
    # Wait, if it's inside quotes as a string literal not JSX, we just need to replace it.
    
    # Also in WebsiteDemoRenderer, there might be hardcoded texts for ServiceDemo (₹16,999 -> ₹39,999)
    # Let's just do a blind replace of the raw strings but careful with other code.
    
    # Actually, replacing all occurrences of "₹12,999" with `{basePrice}` inside JSX or `${basePrice}` in template literals is tricky with regex.
    # Let's replace the raw substrings carefully.
    
    # For GymDemo:
    content = content.replace("Upgrade to PRO (₹16,999) or MAX (₹24,999)", "Upgrade to PRO ({proPrice}) or MAX ({maxPrice})")
    content = content.replace("Upgrade to PRO (₹16,999) or MEGA (₹24,999)", "Upgrade to PRO ({proPrice}) or MAX ({maxPrice})")

    # Let's do a more robust approach.
    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content)

print("Pass 1 done")
