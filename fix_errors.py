import re

# Fix DemoShowroom.tsx
filepath = "src/components/DemoShowroom.tsx"
with open(filepath, 'r', encoding='utf-8') as f:
    content = f.read()

# Fix duplicates of PRICING_PLANS
content = re.sub(r"import \{ PRICING_PLANS \} from '../data/content';\n", "", content)
content = "import { PRICING_PLANS } from '../data/content';\n" + content

if "const basePrice =" not in content:
    helper = """
const basePrice = PRICING_PLANS.find(p => p.id === 'base')?.price || '₹24,999';
const proPrice = PRICING_PLANS.find(p => p.id === 'pro')?.price || '₹39,999';
const maxPrice = PRICING_PLANS.find(p => p.id === 'max')?.price || '₹59,999';
"""
    content = content.replace("const getPrice = (name: string)", helper + "\nconst getPrice = (name: string)")

with open(filepath, 'w', encoding='utf-8') as f:
    f.write(content)

# Fix SchoolDemo.tsx
filepath = "src/components/SchoolDemo.tsx"
with open(filepath, 'r', encoding='utf-8') as f:
    content = f.read()

content = re.sub(r"import \{ PRICING_PLANS \} from '../data/content';\n", "", content)
content = "import { PRICING_PLANS } from '../data/content';\n" + content

with open(filepath, 'w', encoding='utf-8') as f:
    f.write(content)

# Fix MegaExerciseLibrary.tsx
filepath = "src/components/MegaExerciseLibrary.tsx"
with open(filepath, 'r', encoding='utf-8') as f:
    content = f.read()
    
content = content.replace("maxExerciseData", "megaExerciseData")
with open(filepath, 'w', encoding='utf-8') as f:
    f.write(content)

