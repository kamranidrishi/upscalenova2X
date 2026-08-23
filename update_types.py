with open("src/types.ts", "r", encoding="utf-8") as f:
    content = f.read()

content = content.replace("export interface QuoteFormData {\n  name: string;\n  businessName: string;\n  email: string;\n  phone: string;\n  service: string;\n  details: string;\n}", "export interface QuoteFormData {\n  name: string;\n  countryCode: string;\n  phone: string;\n  service: string;\n}")

with open("src/types.ts", "w", encoding="utf-8") as f:
    f.write(content)
