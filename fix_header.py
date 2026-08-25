with open("src/components/Header.tsx", "r") as f:
    content = f.read()

content = content.replace("Sparkles", "Headset")
content = content.replace("<Sparkles ", "<Headset ")

with open("src/components/Header.tsx", "w") as f:
    f.write(content)
