import re

file_path = "src/data/demos.ts"
with open(file_path, "r", encoding="utf-8") as f:
    content = f.read()

# 1. Add 'school' to BusinessType
content = re.sub(
    r"export type BusinessType = 'cafe' \| 'restaurant' \| 'real-estate' \| 'gym' \| 'law-firm' \| 'marketing' \| 'finance' \| 'ai' \| 'form';",
    "export type BusinessType = 'cafe' | 'restaurant' | 'real-estate' | 'gym' | 'law-firm' | 'marketing' | 'finance' | 'ai' | 'form' | 'school';",
    content
)

# 2. Add 'School' to CategoryType
content = re.sub(
    r"export type CategoryType = 'Café' \| 'Restaurant' \| 'Flat / Real Estate' \| 'Gym' \| 'Law Firm' \| 'Marketing' \| 'Finance' \| 'AI / SaaS' \| 'Services';",
    "export type CategoryType = 'Café' | 'Restaurant' | 'Flat / Real Estate' | 'Gym' | 'Law Firm' | 'Marketing' | 'Finance' | 'AI / SaaS' | 'Services' | 'School';",
    content
)

# 3. Add to BUSINESS_TYPES (check if already added)
if "'school'" not in content:
    business_entry = "  { type: 'form', label: 'Services', name: 'Apex Home & Repair Pro', icon: 'Wrench' },"
    school_entry = "  { type: 'school', label: 'School', name: 'BrightFuture School', icon: 'GraduationCap' },"
    content = content.replace(business_entry, business_entry + "\n" + school_entry)

# 4. Append school demo items to DEMO_DATA
school_demos = """  // -------------------------------------------------------------
  // SCHOOL (BrightFuture School)
  // -------------------------------------------------------------
  {
    id: 'school-base',
    businessId: 'school',
    title: 'BrightFuture School',
    category: 'School',
    plan: 'Base',
    businessType: 'school',
    tagline: 'Modern Education & Complete School Management',
    description: 'A professional school website tailored for the Nova Base plan. Includes up to 5 responsive pages, WhatsApp integration, basic contact form, courses info, basic gallery, and basic SEO. (Domain & Hosting: Not Free)',
    isRealClient: false,
    themeColor: 'blue',
    heroImage: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=1200&q=80',
    features: ['Up to 5 pages', 'Responsive design', 'WhatsApp integration', 'Basic enquiry form', 'Basic SEO', 'Domain/Hosting: Not Free']
  },
  {
    id: 'school-pro',
    businessId: 'school',
    title: 'BrightFuture School',
    category: 'School',
    plan: 'Pro',
    businessType: 'school',
    tagline: 'Modern Education & Complete School Management',
    description: 'Upgraded school presence tailored for the Nova Pro plan. Features up to 10 pages, custom UI/UX, advanced admission forms, events & notice board, analytics, basic backend, and technical SEO. (Domain & Hosting: Free)',
    isRealClient: false,
    themeColor: 'indigo',
    heroImage: 'https://images.unsplash.com/photo-1541829070764-84a7d30dd3f3?auto=format&fit=crop&w=1200&q=80',
    features: ['Up to 10 pages', 'Custom UI/UX', 'Advanced admission form', 'Events & Notice Board', 'Analytics & Basic Backend', 'Domain/Hosting: Free']
  },
  {
    id: 'school-mega',
    businessId: 'school',
    title: 'BrightFuture School',
    category: 'School',
    plan: 'Mega',
    businessType: 'school',
    tagline: 'Modern Education & Complete School Management',
    description: 'The ultimate digital school ecosystem tailored for the Nova Max plan. Includes up to 15 pages, advanced custom UI, student/parent portals, faculty management, online admissions, database, and advanced SEO. (Domain & Hosting: Free)',
    isRealClient: false,
    themeColor: 'slate',
    heroImage: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1200&q=80',
    features: ['Up to 15 pages', 'Student & Parent Portal', 'Advanced online admission', 'Database & Backend', 'Advanced SEO', 'Domain/Hosting: Free']
  }
];"""

if "'school-base'" not in content:
    content = re.sub(r'  \}\n\];$', "  },\n" + school_demos, content)

with open(file_path, "w", encoding="utf-8") as f:
    f.write(content)

print("Patched demos.ts")
