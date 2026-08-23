import os

files_to_patch = [
    "src/components/WebsiteDemoRenderer.tsx",
    "src/components/RealEstateDemo.tsx",
    "src/components/GymDemo.tsx",
    "src/components/DemoShowroom.tsx",
]

for filepath in files_to_patch:
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    # Direct line replacements for WebsiteDemoRenderer and GymDemo
    content = content.replace(">\\n                    ₹12,999", ">\\n                    {basePrice}")
    content = content.replace("                    ₹12,999", "                    {basePrice}")
    content = content.replace("                    ₹16,999", "                    {proPrice}")
    content = content.replace("                    ₹24,999", "                    {maxPrice}")
    
    # RealEstateDemo
    content = content.replace("Upgrade to PRO (₹16,999) for full Leads CRM and BHK search, or MAX (₹24,999)", "Upgrade to PRO ({proPrice}) for full Leads CRM and BHK search, or MAX ({maxPrice})")
    content = content.replace(">₹12,999<", ">{basePrice}<")

    # DemoShowroom
    content = content.replace("{p} === 'Base' ? '₹12,999' : p === 'Pro' ? '₹16,999' : '₹24,999'", "{p} === 'Base' ? basePrice : p === 'Pro' ? proPrice : maxPrice")
    content = content.replace("p === 'Base' ? '₹12,999' : p === 'Pro' ? '₹16,999' : '₹24,999'", "p === 'Base' ? basePrice : p === 'Pro' ? proPrice : maxPrice")

    # GymDemo
    content = content.replace("Upgrade to Pro (₹16,999)", "Upgrade to Pro ({proPrice})")
    content = content.replace("Upgrade to Pro ({proPrice})", "Upgrade to Pro ({proPrice})") # In case it was already replaced

    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content)

print("Pass 2 done")
