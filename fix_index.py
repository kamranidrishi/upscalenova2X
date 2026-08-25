import re

with open("index.html", "r") as f:
    content = f.read()

# Replace <title>
new_title = "<title>Upscale Nova — Professional Websites & Digital Solutions</title>"
content = re.sub(r'<title>.*?</title>', new_title, content)

# Meta tags to inject
meta_tags = """
    <meta name="description" content="Upscale Nova provides custom website development, digital menu solutions, NFC review cards, and reliable hosting services for businesses in Mumbai and beyond." />
    <link rel="canonical" href="https://upscalenova.com/" />
    
    <meta property="og:type" content="website" />
    <meta property="og:url" content="https://upscalenova.com/" />
    <meta property="og:site_name" content="Upscale Nova" />
    <meta property="og:title" content="Upscale Nova — Professional Websites & Digital Solutions" />
    <meta property="og:description" content="Upscale Nova provides custom website development, digital menu solutions, NFC review cards, and reliable hosting services for businesses in Mumbai and beyond." />
    <meta property="og:image" content="https://upscalenova.com/logo.png" />
    <meta property="og:image:alt" content="Upscale Nova Logo" />
    <meta property="og:locale" content="en_IN" />
    
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="Upscale Nova — Professional Websites & Digital Solutions" />
    <meta name="twitter:description" content="Upscale Nova provides custom website development, digital menu solutions, NFC review cards, and reliable hosting services for businesses in Mumbai and beyond." />
    <meta name="twitter:image" content="https://upscalenova.com/logo.png" />
"""

# JSON-LD Schema
json_ld = """
    <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": "Upscale Nova",
      "image": "https://upscalenova.com/logo.png",
      "url": "https://upscalenova.com/",
      "telephone": "+919137283810",
      "email": "upscalenova2x@gmail.com",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Mumbai",
        "addressRegion": "Maharashtra",
        "addressCountry": "IN"
      },
      "description": "Professional custom websites, reliable hosting, and smart digital solutions designed to help businesses build, grow, and manage their digital presence.",
      "sameAs": [
        "https://www.instagram.com/upscalenova/"
      ]
    }
    </script>
"""

# Insert meta_tags and json_ld right after <title>
content = content.replace(new_title, new_title + meta_tags + json_ld)

with open("index.html", "w") as f:
    f.write(content)

