import re

with open("src/components/Hero.tsx", "r") as f:
    content = f.read()

content = content.replace(
    "<Rocket className=\"w-4 h-4 text-indigo-600 animate-spin\" style={{ animationDuration: '6s' }} />",
    "<img src=\"/logo.png\" alt=\"Logo\" className=\"w-5 h-5 object-contain drop-shadow-sm\" />"
)

with open("src/components/Hero.tsx", "w") as f:
    f.write(content)
