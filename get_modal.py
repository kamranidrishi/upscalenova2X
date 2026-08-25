import re

with open("src/components/DemoShowroom.tsx", "r") as f:
    content = f.read()

match = re.search(r"(\{activeDemo && \(\s*<div.*?)(</section>)", content, re.DOTALL)
if match:
    print(match.group(1)[:2000]) # just checking it works
