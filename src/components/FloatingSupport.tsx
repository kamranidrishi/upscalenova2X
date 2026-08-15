import React, { useState } from 'react';
import { Phone, MessageSquare, X, ChevronUp } from 'lucide-react';
import { COMPANY_PHONE_DISPLAY, WHATSAPP_LINK, CALL_LINK } from '../data/content';

export const FloatingSupport: React.FC = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <>
      {/* Floating Widget Bottom Right (Desktop & Tablet) */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3 hidden sm:flex">
        
        {/* Support Card Popup */}
        {expanded && (
          <div className="bg-white rounded-3xl p-6 shadow-2xl border border-slate-200 w-80 space-y-4 animate-in slide-in-from-bottom-5 duration-200 text-slate-900">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping" />
                <span className="font-extrabold text-sm text-slate-900">Instant Support Live</span>
              </div>
              <button
                onClick={() => setExpanded(false)}
                className="text-slate-400 hover:text-slate-700 p-1 rounded-full hover:bg-slate-100 transition-colors"
                aria-label="Close"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="space-y-1">
              <p className="text-xs font-semibold text-slate-500">Need help choosing a plan or website?</p>
              <p className="text-sm font-extrabold text-slate-900">Call or WhatsApp us directly:</p>
            </div>

            <div className="space-y-2">
              <a
                href={CALL_LINK}
                className="w-full flex items-center justify-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white font-extrabold py-3 rounded-2xl text-xs transition-colors shadow-sm"
              >
                <Phone className="w-4 h-4" />
                <span>Call: {COMPANY_PHONE_DISPLAY}</span>
              </a>

              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold py-3 rounded-2xl text-xs transition-colors shadow-sm"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>

            <p className="text-[10px] text-center text-slate-400 font-medium">
              Available 24/7 for custom quotes & inquiries.
            </p>
          </div>
        )}

        {/* Main Floating Trigger Button */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => setExpanded(!expanded)}
            className="w-12 h-12 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white flex items-center justify-center shadow-2xl transition-all hover:scale-110 relative"
            aria-label="Support Hub"
          >
            {expanded ? <X className="w-5 h-5" /> : <MessageSquare className="w-5 h-5" />}
            <span className="absolute -top-1 -right-1 w-3 h-3 bg-amber-400 rounded-full border-2 border-white" />
          </button>
        </div>

      </div>

      {/* Sticky Bottom Bar for Mobile Screen (0 to 640px) */}
      <div className="fixed bottom-0 left-0 right-0 z-50 bg-slate-900/95 backdrop-blur-md border-t border-slate-800 p-3 sm:hidden flex items-center gap-2 shadow-2xl">
        <a
          href={CALL_LINK}
          className="flex-1 flex items-center justify-center gap-2 bg-indigo-600 active:bg-indigo-700 text-white font-extrabold py-3 rounded-xl text-xs shadow-md"
        >
          <Phone className="w-4 h-4" />
          <span>Call 91372 83810</span>
        </a>

        <a
          href={WHATSAPP_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex items-center justify-center gap-2 bg-emerald-600 active:bg-emerald-700 text-white font-extrabold py-3 rounded-xl text-xs shadow-md"
        >
          <MessageSquare className="w-4 h-4" />
          <span>WhatsApp</span>
        </a>
      </div>
    </>
  );
};
