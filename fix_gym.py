import os
import re

WHATSAPP_URL = "https://wa.me/919137283810?text=Hello%20Upscale%20Nova%20%F0%9F%91%8B%2C%20I%20am%20interested%20in%20your%20services.%20Please%20provide%20more%20information."

with open("src/components/GymDemo.tsx", "r", encoding="utf-8") as f:
    content = f.read()

new_content = content.replace('href=""\n                    target="_blank"', f'href="{WHATSAPP_URL}"\n                    target="_blank"')
new_content = new_content.replace('href=""\n              target="_blank"', f'href="{WHATSAPP_URL}"\n              target="_blank"')

with open("src/components/GymDemo.tsx", "w", encoding="utf-8") as f:
    f.write(new_content)
