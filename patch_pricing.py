import re

file_path = "src/components/PricingSection.tsx"
with open(file_path, "r", encoding="utf-8") as f:
    content = f.read()

# 1. Section padding
content = content.replace('py-16 md:py-24', 'py-10 md:py-12')

# 2. Space between header and cards
content = content.replace('space-y-12', 'space-y-8')

# 3. Header spacing
content = content.replace('max-w-3xl mx-auto space-y-4', 'max-w-3xl mx-auto space-y-2')

# 4. Header title size
content = content.replace('text-3xl sm:text-4xl', 'text-2xl sm:text-3xl')

# 5. Header paragraph size
content = content.replace('text-base sm:text-lg', 'text-sm sm:text-base')

# 6. Grid gap
content = content.replace('grid-cols-1 md:grid-cols-3 gap-8 items-stretch', 'grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6 items-stretch')

# 7. Card padding
content = content.replace('rounded-3xl p-8', 'rounded-3xl p-5 lg:p-6')

# 8. Inner card space
content = content.replace('<div className="space-y-6">', '<div className="space-y-4">')

# 9. Price size
content = content.replace('text-4xl font-extrabold', 'text-3xl font-extrabold')

# 10. List spacing and text size
content = content.replace('space-y-3 pt-2 text-xs sm:text-sm font-medium', 'space-y-2 pt-1 text-xs font-medium')

# 11. List item padding
content = content.replace('justify-between gap-2.5 py-1', 'justify-between gap-2.5 py-0.5')

# 12. CTA section padding
content = content.replace('pt-8 space-y-3', 'pt-5')

# 13. CTA button padding
content = content.replace('py-3.5 px-4', 'py-2.5 px-4')
content = content.replace('text-xs sm:text-sm', 'text-xs')

with open(file_path, "w", encoding="utf-8") as f:
    f.write(content)

print("Updated PricingSection")
