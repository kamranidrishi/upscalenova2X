import re

with open("src/data/content.ts", "r") as f:
    content = f.read()

faq_8_pattern = r"  \{\n    id: '8',\n    question: 'Why does my business need a website\?',\n    answer: 'A professional website acts as your digital storefront, open 24/7\. It builds credibility, helps potential customers find you through search engines, and provides a centralized platform to showcase your services, capture leads, and grow your brand in a competitive market\.'\n  \}"

# Remove the 8th item (and preceding comma if present)
content = re.sub(r",\n" + faq_8_pattern, "", content)
content = re.sub(faq_8_pattern + r",\n", "", content)

# Now inject it at the top of the FAQS list
new_faq = """  {
    id: '8',
    question: 'Why does my business need a website?',
    answer: 'A professional website acts as your digital storefront, open 24/7. It builds credibility, helps potential customers find you through search engines, and provides a centralized platform to showcase your services, capture leads, and grow your brand in a competitive market.'
  },"""

content = content.replace("export const FAQS: FAQItem[] = [\n", "export const FAQS: FAQItem[] = [\n" + new_faq + "\n")

with open("src/data/content.ts", "w") as f:
    f.write(content)
