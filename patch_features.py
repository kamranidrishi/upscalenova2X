import glob
import re

feature_helper = """
import { PRICING_PLANS } from '../data/content';
const getPlanFeatures = (planId: string) => {
  const plan = PRICING_PLANS.find(p => p.id === planId.toLowerCase());
  if (!plan) return [];
  return plan.features.map(f => {
    if (f.value === true) return f.name;
    if (f.value === false) return null;
    if (f.name === 'Domain' || f.name === 'Hosting') return `${f.name}: ${f.value}`;
    return `${f.value} ${f.name}`;
  }).filter(Boolean) as string[];
};
"""

files = glob.glob("src/components/*Demo.tsx")
files.append("src/components/DemoShowroom.tsx")

for filepath in files:
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    # Inject the helper if we need it
    if "getPlanFeatures" not in content and "demo.features" in content:
        # insert helper after imports
        imports = list(re.finditer(r'^import .*?;$', content, re.MULTILINE))
        if imports:
            last_import = imports[-1]
            end_pos = last_import.end()
            
            # Make sure PRICING_PLANS is imported
            if "PRICING_PLANS" not in content:
                content = content[:end_pos] + "\nimport { PRICING_PLANS } from '../data/content';" + content[end_pos:]
                
            content = content[:end_pos] + "\n" + feature_helper + content[end_pos:]

    # Replace demo.features with getPlanFeatures(plan)
    if "DemoShowroom.tsx" in filepath:
        content = content.replace("demo.features", "getPlanFeatures(demo.plan)")
    else:
        content = content.replace("demo.features", "getPlanFeatures(plan)")
        
    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content)
