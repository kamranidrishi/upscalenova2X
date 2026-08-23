with open("src/components/QuoteModal.tsx", "r", encoding="utf-8") as f:
    content = f.read()

# Replace handleSubmit

old_handle = """  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };"""

new_handle = """  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!name || !phone) {
      alert("Please fill in your name and phone number.");
      return;
    }

    const message = `Hello Upscale Nova 👋

I would like to request a quote.

Customer Details
Name: ${name}
Business Name: ${businessName || 'N/A'}
Phone: ${phone}

Service Interested In
${service}

Project Details
${details || 'N/A'}

Please get back to me regarding my requirement.

Thank you.`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/919137283810?text=${encodedMessage}`;
    
    window.open(whatsappUrl, '_blank');
    setSubmitted(true);
  };"""

if old_handle in content:
    content = content.replace(old_handle, new_handle)
    with open("src/components/QuoteModal.tsx", "w", encoding="utf-8") as f:
        f.write(content)
    print("Updated QuoteModal.tsx")
else:
    print("Could not find old handleSubmit block in QuoteModal.tsx")
