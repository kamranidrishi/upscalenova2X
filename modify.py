import re

with open('src/components/SchoolDemo.tsx', 'r') as f:
    content = f.read()

# Modify navLinks
navLinks_replacement = """
  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'academics', label: 'Academics' },
    { id: 'admissions', label: 'Admissions' },
    ...(!isBase ? [{ id: 'events', label: 'Events', showLock: !isPro }] : []),
    { id: 'gallery', label: 'Gallery' },
    ...(!isBase ? [{ id: 'contact', label: 'Contact & Map' }] : []),
    ...(!isBase ? [{ id: 'portal', label: 'Portal', showLock: !isMax }] : []),
  ];
"""

content = re.sub(r'  const navLinks = \[.*?  \];', navLinks_replacement.strip(), content, flags=re.DOTALL)

with open('src/components/SchoolDemo.tsx', 'w') as f:
    f.write(content)
