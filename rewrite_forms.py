import os

# --- ContactSection.tsx ---
contact_path = "src/components/ContactSection.tsx"
with open(contact_path, "r", encoding="utf-8") as f:
    contact_code = f.read()

old_state = """  const [formData, setFormData] = useState<QuoteFormData>({
    name: '',
    businessName: '',
    email: '',
    phone: '',
    service: prefilledService || 'Custom Website Design',
    details: ''
  });"""

new_state = """  const [formData, setFormData] = useState<QuoteFormData>({
    name: '',
    countryCode: '+91',
    phone: '',
    service: prefilledService || 'Custom Website Design',
  });
  const [phoneError, setPhoneError] = useState('');"""
contact_code = contact_code.replace(old_state, new_state)

old_submit = """  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    


    const message = `Hello Upscale Nova 👋

I would like to request a quote.

Customer Details
Name: ${formData.name}
Business Name: ${formData.businessName || 'N/A'}
Email: ${formData.email}
Phone: ${formData.phone}

Service Interested In
${formData.service}

Project Details
${formData.details || 'N/A'}

Please get back to me regarding my requirement.

Thank you.`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/919137283810?text=${encodedMessage}`;
    
    const link = document.createElement('a');
    link.href = whatsappUrl;
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
    link.click();
    setSubmitted(true);
  };"""

new_submit = """  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setPhoneError('');
    
    if (formData.phone.length !== 10) {
      setPhoneError("Please enter a valid 10-digit mobile number.");
      return;
    }

    const message = `Hello Upscale Nova 👋

I would like to request a quote.

Customer Details
Name: ${formData.name}
Phone: ${formData.countryCode}${formData.phone}

Service Interested In
${formData.service}


Thank you.`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/919137283810?text=${encodedMessage}`;
    
    const link = document.createElement('a');
    link.href = whatsappUrl;
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
    link.click();
    setSubmitted(true);
  };"""
contact_code = contact_code.replace(old_submit, new_submit)

# Replacing the form UI
old_form_ui = """                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">Name *</label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Your Full Name"
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm font-semibold text-slate-800 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">Business Name</label>
                      <input
                        type="text"
                        value={formData.businessName}
                        onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                        placeholder="e.g. Leopold Cafe"
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm font-semibold text-slate-800 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">Email *</label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="name@company.com"
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm font-semibold text-slate-800 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">Phone Number *</label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="Your Mobile Number"
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm font-semibold text-slate-800 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Service Interested In</label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm font-semibold text-slate-800 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    >
                      <option value="Custom Website Design">Custom Website Design</option>
                      <option value="Google Review NFC Card">Google Review NFC Card</option>
                      <option value="Google Review QR Stand">Google Review QR Stand</option>
                      <option value="Digital Menu Solution">Digital Menu Solution</option>
                      <option value="Google Business Profile Optimization">Google Business Profile Optimization</option>
                      <option value="Website Hosting & Maintenance">Website Hosting & Maintenance</option>
                      <option value="Custom Enterprise App">Custom Enterprise App</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Project Details</label>
                    <textarea
                      rows={3}
                      value={formData.details}
                      onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                      placeholder="Tell us about your requirements..."
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm font-semibold text-slate-800 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    />
                  </div>"""

new_form_ui = """                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">Name *</label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Your Full Name"
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm font-semibold text-slate-800 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">Phone Number *</label>
                      <div className="flex gap-2">
                        <select
                          value={formData.countryCode}
                          onChange={(e) => setFormData({ ...formData, countryCode: e.target.value })}
                          className="bg-slate-50 border border-slate-200 rounded-xl px-3 py-3 text-sm font-semibold text-slate-800 focus:outline-none focus:ring-2 focus:ring-indigo-500 max-w-[100px]"
                        >
                          <option value="+91">🇮🇳 +91</option>
                        </select>
                        <input
                          type="tel"
                          required
                          maxLength={10}
                          value={formData.phone}
                          onChange={(e) => {
                            const val = e.target.value.replace(/\D/g, '').slice(0, 10);
                            setFormData({ ...formData, phone: val });
                            if (val.length === 10) setPhoneError('');
                          }}
                          placeholder="10-digit number"
                          className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm font-semibold text-slate-800 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        />
                      </div>
                      {phoneError && <p className="text-red-500 text-xs mt-1 font-bold">{phoneError}</p>}
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">Service Interested In</label>
                      <select
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm font-semibold text-slate-800 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                      >
                        <option value="Custom Website Design">Custom Website Design</option>
                        <option value="Google Review NFC Card">Google Review NFC Card</option>
                        <option value="Google Review QR Stand">Google Review QR Stand</option>
                        <option value="Digital Menu Solution">Digital Menu Solution</option>
                        <option value="Google Business Profile Optimization">Google Business Profile Optimization</option>
                        <option value="Website Hosting & Maintenance">Website Hosting & Maintenance</option>
                        <option value="Custom Enterprise App">Custom Enterprise App</option>
                      </select>
                    </div>
                  </div>"""

contact_code = contact_code.replace(old_form_ui, new_form_ui)

with open(contact_path, "w", encoding="utf-8") as f:
    f.write(contact_code)

print("Updated ContactSection")

# --- QuoteModal.tsx ---
quote_path = "src/components/QuoteModal.tsx"
with open(quote_path, "r", encoding="utf-8") as f:
    quote_code = f.read()

old_state = """  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [businessName, setBusinessName] = useState('');
  const [service, setService] = useState(serviceTitle || 'Custom Website Design');
  const [details, setDetails] = useState('');
  const [submitted, setSubmitted] = useState(false);"""

new_state = """  const [name, setName] = useState('');
  const [countryCode, setCountryCode] = useState('+91');
  const [phone, setPhone] = useState('');
  const [service, setService] = useState(serviceTitle || 'Custom Website Design');
  const [phoneError, setPhoneError] = useState('');
  const [submitted, setSubmitted] = useState(false);"""
quote_code = quote_code.replace(old_state, new_state)

old_submit = """  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
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
        const link = document.createElement('a');
    link.href = whatsappUrl;
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
    link.click();
    setSubmitted(true);
  };"""

new_submit = """  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setPhoneError('');
    
    if (phone.length !== 10) {
      setPhoneError("Please enter a valid 10-digit mobile number.");
      return;
    }

    const message = `Hello Upscale Nova 👋

I would like to request a quote.

Customer Details
Name: ${name}
Phone: ${countryCode}${phone}

Service Interested In
${service}


Thank you.`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/919137283810?text=${encodedMessage}`;
    
    const link = document.createElement('a');
    link.href = whatsappUrl;
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
    link.click();
    setSubmitted(true);
  };"""

# We'll use a regex for the submit because newlines might differ.
import re
quote_code = re.sub(r'  const handleSubmit = \(e: React\.FormEvent\) => \{.*?\n  \};', new_submit, quote_code, flags=re.DOTALL)


old_form_ui = """            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Your Name *</label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. Rahul Sharma"
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-sm font-semibold text-slate-800 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Phone Number *</label>
                <input
                  type="tel"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="e.g. 91372 83810"
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-sm font-semibold text-slate-800 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Business Name</label>
                <input
                  type="text"
                  value={businessName}
                  onChange={(e) => setBusinessName(e.target.value)}
                  placeholder="e.g. Kala Ghoda Cafe"
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-sm font-semibold text-slate-800 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Service Interested In</label>
                <input
                  type="text"
                  value={service}
                  onChange={(e) => setService(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-sm font-semibold text-slate-800 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Project Notes / Requirements</label>
                <textarea
                  rows={2}
                  value={details}
                  onChange={(e) => setDetails(e.target.value)}
                  placeholder="Tell us what you need..."
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-sm font-semibold text-slate-800 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>"""

new_form_ui = """            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Your Name *</label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. Rahul Sharma"
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-sm font-semibold text-slate-800 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Phone Number *</label>
                <div className="flex gap-2">
                  <select
                    value={countryCode}
                    onChange={(e) => setCountryCode(e.target.value)}
                    className="bg-slate-50 border border-slate-200 rounded-xl px-3 py-2.5 text-sm font-semibold text-slate-800 focus:outline-none focus:ring-2 focus:ring-indigo-500 max-w-[100px]"
                  >
                    <option value="+91">🇮🇳 +91</option>
                  </select>
                  <input
                    type="tel"
                    required
                    maxLength={10}
                    value={phone}
                    onChange={(e) => {
                      const val = e.target.value.replace(/\D/g, '').slice(0, 10);
                      setPhone(val);
                      if (val.length === 10) setPhoneError('');
                    }}
                    placeholder="10-digit number"
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-sm font-semibold text-slate-800 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  />
                </div>
                {phoneError && <p className="text-red-500 text-xs mt-1 font-bold">{phoneError}</p>}
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Service Interested In</label>
                <input
                  type="text"
                  value={service}
                  onChange={(e) => setService(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-sm font-semibold text-slate-800 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>"""
quote_code = quote_code.replace(old_form_ui, new_form_ui)

with open(quote_path, "w", encoding="utf-8") as f:
    f.write(quote_code)

print("Updated QuoteModal")
