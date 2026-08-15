import React, { useState } from 'react';
import { X, Send, Phone, MessageSquare, CheckCircle, Sparkles } from 'lucide-react';
import { COMPANY_PHONE_DISPLAY, WHATSAPP_LINK, CALL_LINK } from '../data/content';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  serviceTitle?: string;
}

export const QuoteModal: React.FC<ModalProps> = ({ isOpen, onClose, serviceTitle }) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [businessName, setBusinessName] = useState('');
  const [service, setService] = useState(serviceTitle || 'Custom Website Design');
  const [details, setDetails] = useState('');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/80 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl relative border border-slate-100 max-h-[90vh] overflow-y-auto">
        
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-slate-400 hover:text-slate-800 p-2 rounded-full hover:bg-slate-100 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="text-center py-6 space-y-4">
            <CheckCircle className="w-14 h-14 text-emerald-500 mx-auto animate-bounce" />
            <h3 className="text-2xl font-extrabold text-slate-900">Request Received!</h3>
            <p className="text-slate-600 text-sm">
              We have noted your interest in <span className="font-bold text-indigo-600">{service}</span>. Our team will contact you shortly.
            </p>
            <div className="pt-4 flex flex-col gap-2">
              <a
                href="#contact"
                className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 rounded-2xl text-sm flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4" />
                <span>Call Us Now</span>
              </a>
              <button
                onClick={onClose}
                className="w-full bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold py-2.5 rounded-2xl text-sm"
              >
                Close Window
              </button>
            </div>
          </div>
        ) : (
          <div className="space-y-6">
            
            {/* Modal Header */}
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-50 text-indigo-700 text-xs font-bold mb-2">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Upscale Nova Consultation</span>
              </div>
              <h3 className="text-2xl font-extrabold text-slate-900">Get a Free Consultation</h3>
              <p className="text-slate-500 text-xs font-medium">
                Fill out this quick form or <a href="#contact" className="text-indigo-600 font-bold">contact us</a> directly.
              </p>
            </div>

            {/* Quick Call / WhatsApp Bar */}
            <div className="grid grid-cols-2 gap-2 bg-slate-50 p-2 rounded-2xl border border-slate-100">
              <a
                href="#contact"
                className="flex items-center justify-center gap-1.5 bg-white hover:bg-slate-100 text-slate-900 font-bold py-2 px-3 rounded-xl text-xs border border-slate-200 transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-indigo-600" />
                <span>Call Us</span>
              </a>

              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-1.5 bg-emerald-50 hover:bg-emerald-100 text-emerald-800 font-bold py-2 px-3 rounded-xl text-xs border border-emerald-200 transition-colors"
              >
                <MessageSquare className="w-3.5 h-3.5 text-emerald-600" />
                <span>WhatsApp</span>
              </a>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
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
              </div>

              <button
                type="submit"
                className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-extrabold py-3.5 rounded-2xl text-sm shadow-md transition-colors flex items-center justify-center gap-2"
              >
                <span>Submit Consultation Request</span>
                <Send className="w-4 h-4" />
              </button>
            </form>

          </div>
        )}

      </div>
    </div>
  );
};
