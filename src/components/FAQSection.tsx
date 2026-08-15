import React, { useState } from 'react';
import { ChevronDown, Phone } from 'lucide-react';
import { FAQS, COMPANY_PHONE_DISPLAY, CALL_LINK } from '../data/content';

export const FAQSection: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>('1');

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Header */}
        <div className="text-center space-y-4">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-slate-600 text-base sm:text-lg font-medium">
            Got questions about our services, process, or pricing? We've got answers.
          </p>
        </div>

        {/* Accordions */}
        <div className="space-y-4">
          {FAQS.map((faq) => {
            const isOpen = openId === faq.id;

            return (
              <div
                key={faq.id}
                className="bg-slate-50/70 border border-slate-200/80 rounded-2xl overflow-hidden transition-colors"
              >
                <button
                  onClick={() => setOpenId(isOpen ? null : faq.id)}
                  className="w-full text-left p-6 font-bold text-slate-900 text-base sm:text-lg flex items-center justify-between gap-4 hover:text-indigo-600 transition-colors"
                >
                  <span>{faq.question}</span>
                  <ChevronDown className={`w-5 h-5 text-slate-500 shrink-0 transition-transform duration-200 ${isOpen ? 'rotate-180 text-indigo-600' : ''}`} />
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-0 text-slate-600 text-sm leading-relaxed border-t border-slate-100/60 animate-in fade-in duration-200">
                    <p className="pt-3">{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
