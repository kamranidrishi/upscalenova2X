import re

with open("src/components/DemoShowroom.tsx", "r") as f:
    content = f.read()

content = content.replace(r"\'p-0\'", "'p-0'")
content = content.replace(r"\'p-0 sm:p-3 md:p-6\'", "'p-0 sm:p-3 md:p-6'")

content = content.replace(r"\'rounded-none border-none max-w-none\'", "'rounded-none border-none max-w-none'")
content = content.replace(r"\'sm:rounded-3xl border border-slate-800 max-w-[95vw] 2xl:max-w-[1800px]\'", "'sm:rounded-3xl border border-slate-800 max-w-[95vw] 2xl:max-w-[1800px]'")

with open("src/components/DemoShowroom.tsx", "w") as f:
    f.write(content)
