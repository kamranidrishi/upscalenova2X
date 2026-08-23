import re

file_path = "src/components/DemoShowroom.tsx"
with open(file_path, "r", encoding="utf-8") as f:
    content = f.read()

# Make sure we import PRICING_PLANS
if "PRICING_PLANS" not in content:
    content = content.replace("import { DEMO_DATA", "import { PRICING_PLANS } from '../data/content';\nimport { DEMO_DATA")

# Replace PLANS array
old_plans = """const PLANS: { id: PlanType; price: string; title: string; subtitle: string }[] = [
  { id: 'Base', price: '₹12,999', title: 'Essential & Professional Foundation', subtitle: 'Clean, modern, responsive website tailored for small businesses getting online.' },
  { id: 'Pro', price: '₹16,999', title: 'Interactive & Feature-Rich Experience', subtitle: 'Category filters, rich galleries, reviews, and interactive booking flows.' },
  { id: 'Max', price: '₹24,999', title: 'Enterprise & Workflow-Integrated System', subtitle: 'End-to-end QR ordering, live telemetry dashboards, client portals & automated workflows.' }
];"""

new_plans = """const getPrice = (name: string) => PRICING_PLANS.find(p => p.name === name)?.price || '';

const PLANS: { id: PlanType; price: string; title: string; subtitle: string }[] = [
  { id: 'Base', price: getPrice('NOVA BASE'), title: 'Essential & Professional Foundation', subtitle: 'Clean, modern, responsive website tailored for small businesses getting online.' },
  { id: 'Pro', price: getPrice('NOVA PRO'), title: 'Interactive & Feature-Rich Experience', subtitle: 'Category filters, rich galleries, reviews, and interactive booking flows.' },
  { id: 'Max', price: getPrice('NOVA MAX'), title: 'Enterprise & Workflow-Integrated System', subtitle: 'End-to-end QR ordering, live telemetry dashboards, client portals & automated workflows.' }
];"""

content = content.replace(old_plans, new_plans)

# Replace "Base Plan" with "NOVA BASE"
content = content.replace("{plan.id} Plan", "NOVA {plan.id}")

with open(file_path, "w", encoding="utf-8") as f:
    f.write(content)
