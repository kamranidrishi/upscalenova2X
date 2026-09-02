import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Instagram, MessageSquare, CheckCircle, Headset } from 'lucide-react';
import { COMPANY_PHONE_DISPLAY, COMPANY_EMAIL, COMPANY_LOCATION, WHATSAPP_LINK, CALL_LINK, INSTAGRAM_LINK } from '../data/content';
import { QuoteFormData } from '../types';

interface ContactProps {
  prefilledService?: string;
}

export const ContactSection: React.FC<ContactProps> = ({ prefilledService }) => {
  const [formData, setFormData] = useState<QuoteFormData>({
    name: '',
    countryCode: '+91',
    phone: '',
    service: prefilledService || 'Custom Website Design',
  });
  const [phoneError, setPhoneError] = useState('');

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setPhoneError('');
    
    if (formData.phone.length !== 10) {
      setPhoneError("Please enter a valid 10-digit mobile number.");
      return;
    }

    const message = `Hello Upscale Nova

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
  };

  return (
    <section id="contact" className="py-16 md:py-24 bg-slate-900 text-white relative overflow-hidden">
      {/* Background Accent */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Contact Info Column */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
                Let's Build Something <span className="text-indigo-400">Amazing.</span>
              </h2>
              <p className="text-slate-300 text-base leading-relaxed">
                Ready to transform your digital presence? Fill out the form or reach out directly to us for instant response.
              </p>
            </div>

            {/* Direct Contact Cards */}
            <div className="space-y-6">
              
              {/* Email */}
              <div className="flex items-start gap-4 p-4 rounded-2xl bg-slate-800/80 border border-slate-700">
                <div className="w-11 h-11 rounded-xl bg-indigo-500/20 text-indigo-400 flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-400">Email Us</span>
                  <a href={`mailto:${COMPANY_EMAIL}`} className="block text-white font-bold text-sm sm:text-base hover:text-indigo-300 transition-colors">
                    {COMPANY_EMAIL}
                  </a>
                </div>
              </div>

              {/* Call */}
              <div className="flex items-start gap-4 p-4 rounded-2xl bg-indigo-900/60 border border-indigo-500/50">
                <div className="w-11 h-11 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-indigo-300">Call Us Directly</span>
                  <a href={CALL_LINK} className="block text-white font-extrabold text-lg hover:text-indigo-200 transition-colors">
                    {COMPANY_PHONE_DISPLAY}
                  </a>
                  <p className="text-xs text-indigo-200 mt-0.5">Click to dial support instantly</p>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-start gap-4 p-4 rounded-2xl bg-slate-800/80 border border-slate-700">
                <div className="w-11 h-11 rounded-xl bg-indigo-500/20 text-indigo-400 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-400">Location</span>
                  <p className="text-white font-bold text-sm sm:text-base">
                    {COMPANY_LOCATION}
                  </p>
                </div>
              </div>

            </div>

            {/* Social Buttons */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white font-bold px-5 py-2.5 rounded-full text-xs shadow-md transition-all"
              >
                <MessageSquare className="w-4 h-4" />
                <span>WhatsApp ({COMPANY_PHONE_DISPLAY})</span>
              </a>

              <a
                href={INSTAGRAM_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center text-slate-300 hover:text-pink-400 hover:border-pink-500/50 transition-colors"
                aria-label="Instagram @upscalenova"
              >
                <Instagram className="w-4 h-4" />
              </a>
            </div>

          </div>

          {/* Right Request Quote Form */}
          <div className="lg:col-span-7">
            <div className="bg-white text-slate-900 rounded-3xl p-8 sm:p-10 shadow-2xl border border-slate-100">
              
              <div className="mb-6 space-y-1">
                <div className="inline-flex items-center gap-1.5 text-xs font-bold text-indigo-600 bg-indigo-50 px-3 py-1 rounded-full">
                  <Headset className="w-3.5 h-3.5" />
                  <span>Free Price Consultation</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                  Request a Quote
                </h3>
              </div>

              {submitted ? (
                <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-8 text-center space-y-4 animate-in fade-in">
                  <CheckCircle className="w-12 h-12 text-emerald-600 mx-auto" />
                  <h4 className="text-xl font-extrabold text-emerald-950">Thank You! Your Request Has Been Sent</h4>
                  <p className="text-emerald-800 text-sm">
                    Our engineering team will get back to you within 2 hours. For instant support, feel free to call us!
                  </p>
                  <div className="pt-2 flex flex-col sm:flex-row justify-center gap-3">
                    <a
                      href={CALL_LINK}
                      className="bg-emerald-600 text-white font-bold px-6 py-3 rounded-full text-sm hover:bg-emerald-700 transition-colors"
                    >
                      Call {COMPANY_PHONE_DISPLAY}
                    </a>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="bg-white border border-emerald-300 text-emerald-800 font-bold px-6 py-3 rounded-full text-sm"
                    >
                      Send Another Request
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-4">
                    <div>
                      <label htmlFor="contact-full-name" className="block text-sm font-semibold text-slate-700 mb-1.5">Full Name *</label>
                      <input
                        id="contact-full-name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Your Full Name"
                        className="w-full bg-white border border-slate-300 rounded-xl px-4 py-3 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-shadow"
                      />
                    </div>

                    <div>
                      <label htmlFor="contact-phone-number" className="block text-sm font-semibold text-slate-700 mb-1.5">Phone Number *</label>
                      <div className="flex gap-2">
                        <select
                          id="contact-country-code"
                          aria-label="Country Code"
                          value={formData.countryCode}
                          onChange={(e) => setFormData({ ...formData, countryCode: e.target.value })}
                          className="bg-white border border-slate-300 rounded-xl px-3 py-3 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-shadow max-w-[100px]"
                        >
                          <option value="+91">🇮🇳 +91</option>
                        </select>
                        <input
                          id="contact-phone-number"
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
                          className="w-full bg-white border border-slate-300 rounded-xl px-4 py-3 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-shadow"
                        />
                      </div>
                      {phoneError && <p className="text-red-500 text-xs mt-1 font-bold">{phoneError}</p>}
                    </div>

                    <div>
                      <label htmlFor="contact-service-select" className="block text-sm font-semibold text-slate-700 mb-1.5">Service Interested In</label>
                      <select
                        id="contact-service-select"
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className="w-full bg-white border border-slate-300 rounded-xl px-4 py-3 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-shadow"
                      >
                        <option value="Website Design & UI/UX">Website Design & UI/UX</option>
                        <option value="Custom Web Development">Custom Web Development</option>
                        <option value="Google Maps & Local SEO">Google Maps & Local SEO</option>
                        <option value="Google Business Profile Setup">Google Business Profile Setup</option>
                        <option value="Website Hosting & Maintenance">Website Hosting & Maintenance</option>
                        <option value="Custom Enterprise Solution">Custom Enterprise Solution</option>
                      </select>
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-extrabold py-4 rounded-xl text-base shadow-lg shadow-indigo-200 transition-all flex items-center justify-center gap-2"
                  >
                    <span>Send Message</span>
                    <Send className="w-4 h-4" />
                  </button>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
