import os
import re

for root, dirs, files in os.walk("src"):
    for file in files:
        if file.endswith(".tsx") or file.endswith(".ts"):
            filepath = os.path.join(root, file)
            with open(filepath, "r", encoding="utf-8") as f:
                content = f.read()
            
            new_content = re.sub(r'alert\((.*?)\)', r'console.log(\1)', content)
            
            if new_content != content:
                print(f"Updated {filepath}")
                with open(filepath, "w", encoding="utf-8") as f:
                    f.write(new_content)
