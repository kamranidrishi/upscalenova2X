import re

content_path = "src/data/content.ts"
with open(content_path, "r") as f:
    content = f.read()

new_pricing = """export const PRICING_PLANS: PricingPlan[] = [
  {
    id: 'base',
    name: 'NOVA BASE',
    price: '₹24,999',
    features: [
      { name: 'Pages', value: '5' },
      { name: 'Custom UI/UX', value: true },
      { name: 'Responsive', value: true },
      { name: 'WhatsApp', value: true },
      { name: 'Forms', value: 'Basic' },
      { name: 'SEO', value: 'Basic' },
      { name: 'Analytics', value: false },
      { name: 'Backend', value: false },
      { name: 'Database', value: false },
      { name: 'API integrations', value: false },
      { name: 'Revisions', value: '2' },
      { name: 'Bug support', value: '15 days' },
      { name: 'Domain', value: 'no' },
      { name: 'Hosting', value: 'no' }
    ],
    ctaText: 'Get Started'
  },
  {
    id: 'pro',
    name: 'NOVA PRO',
    price: '₹39,999',
    isPopular: true,
    features: [
      { name: 'Pages', value: '10' },
      { name: 'Custom UI/UX', value: true },
      { name: 'Responsive', value: true },
      { name: 'WhatsApp', value: true },
      { name: 'Forms', value: 'Advanced' },
      { name: 'SEO', value: 'Technical setup' },
      { name: 'Analytics', value: true },
      { name: 'Backend', value: 'Basic' },
      { name: 'Database', value: '—/Basic' },
      { name: 'API integrations', value: 'Up to 2' },
      { name: 'Revisions', value: '3' },
      { name: 'Bug support', value: '30 days' },
      { name: 'Domain', value: 'yes' },
      { name: 'Hosting', value: 'yes' }
    ],
    ctaText: 'ORDER VIA WHATSAPP'
  },
  {
    id: 'max',
    name: 'NOVA MAX',
    price: '₹59,999',
    features: [
      { name: 'Pages', value: '15' },
      { name: 'Custom UI/UX', value: true },
      { name: 'Responsive', value: true },
      { name: 'WhatsApp', value: true },
      { name: 'Forms', value: 'Advanced' },
      { name: 'SEO', value: 'Advanced setup' },
      { name: 'Analytics', value: true },
      { name: 'Backend', value: true },
      { name: 'Database', value: true },
      { name: 'API integrations', value: 'Up to 3' },
      { name: 'Revisions', value: '4' },
      { name: 'Bug support', value: '60 days' },
      { name: 'Domain', value: 'yes' },
      { name: 'Hosting', value: 'yes' }
    ],
    ctaText: 'Get Max'
  }
];"""

# We'll replace the existing PRICING_PLANS array
content = re.sub(r'export const PRICING_PLANS: PricingPlan\[\] = \[.*?\];', new_pricing, content, flags=re.DOTALL)

with open(content_path, "w") as f:
    f.write(content)

