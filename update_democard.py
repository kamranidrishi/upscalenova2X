import re

with open("src/components/DemoShowroom.tsx", "r") as f:
    content = f.read()

# Remove Live Reference block
content = re.sub(
    r"\{\s*demo\.isRealClient && demo\.clientName && \(\s*<p className=\"text-xs text-indigo-600 font-bold mt-0\.5\">Live Reference: \{demo\.clientName\}</p>\s*\)\s*\}",
    "",
    content
)

# Remove description block
content = re.sub(
    r"<p className=\"text-sm text-slate-600 mt-2 line-clamp-2 leading-relaxed\">\{demo\.description\}</p>",
    "",
    content
)

with open("src/components/DemoShowroom.tsx", "w") as f:
    f.write(content)
