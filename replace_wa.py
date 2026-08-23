import os
import re

WHATSAPP_URL = "https://wa.me/919137283810?text=Hello%20Upscale%20Nova%20%F0%9F%91%8B%2C%20I%20am%20interested%20in%20your%20services.%20Please%20provide%20more%20information."

for root, dirs, files in os.walk("src"):
    for file in files:
        if file.endswith((".tsx", ".ts")):
            filepath = os.path.join(root, file)
            with open(filepath, "r", encoding="utf-8") as f:
                content = f.read()
            
            # The pattern is: href="https://wa.me/something" or similar
            # For data/content.ts we already manually replaced it, so we can skip it.
            if "data/content.ts" in filepath:
                continue
                
            new_content = re.sub(r'https://wa\.me/[0-9]+\?text=[^"\'`]*', WHATSAPP_URL, content)
            
            if new_content != content:
                print(f"Updated {filepath}")
                with open(filepath, "w", encoding="utf-8") as f:
                    f.write(new_content)
