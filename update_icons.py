import re

# Hero.tsx
with open("src/components/Hero.tsx", "r") as f:
    content = f.read()
content = content.replace("Sparkles, ", "Rocket, ")
content = content.replace("<Sparkles ", "<Rocket ")
with open("src/components/Hero.tsx", "w") as f:
    f.write(content)

# PricingSection.tsx
with open("src/components/PricingSection.tsx", "r") as f:
    content = f.read()
content = content.replace("Sparkles", "Tag")
content = content.replace("<Sparkles ", "<Tag ")
with open("src/components/PricingSection.tsx", "w") as f:
    f.write(content)

# ProductsSection.tsx
with open("src/components/ProductsSection.tsx", "r") as f:
    content = f.read()
content = content.replace("Sparkles", "Package")
content = content.replace("<Sparkles ", "<Package ")
with open("src/components/ProductsSection.tsx", "w") as f:
    f.write(content)

# ContactSection.tsx
with open("src/components/ContactSection.tsx", "r") as f:
    content = f.read()
content = content.replace("Sparkles", "Headset")
content = content.replace("<Sparkles ", "<Headset ")
with open("src/components/ContactSection.tsx", "w") as f:
    f.write(content)

