import os

files = ["src/components/ContactSection.tsx", "src/components/QuoteModal.tsx"]

for filepath in files:
    with open(filepath, "r", encoding="utf-8") as f:
        content = f.read()

    # Remove the alert block in ContactSection
    content = content.replace("""    // Basic validation check (HTML5 required attributes handle most of this, 
    // but just in case we add a programmatic check)
    if (!formData.name || !formData.email || !formData.phone) {
      alert("Please fill in all required fields (Name, Email, Phone Number).");
      return;
    }""", "")

    # Remove the alert block in QuoteModal
    content = content.replace("""    if (!name || !phone) {
      alert("Please fill in your name and phone number.");
      return;
    }""", "")

    # Replace window.open with a tag click
    content = content.replace("window.open(whatsappUrl, '_blank');", """const link = document.createElement('a');
    link.href = whatsappUrl;
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
    link.click();""")

    with open(filepath, "w", encoding="utf-8") as f:
        f.write(content)
