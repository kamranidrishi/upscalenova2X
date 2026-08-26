import React from 'react';
import { Check, Phone, MessageSquare, Tag } from 'lucide-react';
import { PRICING_PLANS, COMPANY_PHONE_DISPLAY, WHATSAPP_LINK, CALL_LINK } from '../data/content';

interface PricingProps {
  onOpenQuoteModal: (planName: string) => void;
}

export const PricingSection: React.FC<PricingProps> = ({ onOpenQuoteModal }) => {
  return (
    <section id="pricing" className="py-16 md:py-24 bg-slate-50 border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-indigo-50 text-indigo-700 text-sm font-semibold border border-indigo-100">
            <Tag className="w-4 h-4" />
            <span>Transparent Pricing Packages</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Simple & Transparent Plans
          </h2>
          <p className="text-slate-600 text-base sm:text-lg font-medium max-w-2xl mx-auto">
            Choose the best package for your business or <a href="#contact" className="text-indigo-600 font-bold hover:text-indigo-700 hover:underline transition-colors">contact us</a> for a custom quote.
          </p>
        </div>

        {/* 3 Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          {PRICING_PLANS.map((plan) => {
            const isPro = plan.isPopular;
            const activePrice = plan.price;
            const periodLabel = '/ one-time';
            
            // Calculate discount percentage
            let discountPercent = 0;
            if (plan.originalPrice) {
              const parsePrice = (p: string) => parseInt(p.replace(/[^\d]/g, ''), 10);
              const originalNum = parsePrice(plan.originalPrice);
              const finalNum = parsePrice(activePrice);
              if (originalNum > finalNum && originalNum > 0) {
                discountPercent = Math.round(((originalNum - finalNum) / originalNum) * 100);
              }
            }

            return (
              <div
                key={plan.id}
                className={`rounded-2xl p-6 lg:p-8 flex flex-col justify-between transition-all duration-300 relative ${
                  isPro
                    ? 'bg-indigo-900 text-white shadow-xl lg:scale-105 border border-indigo-700 z-10'
                    : 'bg-white text-slate-900 border border-slate-200 shadow-sm hover:shadow-md'
                }`}
              >
                {/* Popular Badge */}
                {isPro && (
                  <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-amber-400 text-amber-950 text-xs font-bold uppercase tracking-wider px-4 py-1 rounded-full shadow-sm">
                    MOST POPULAR
                  </span>
                )}
                
                <div className="space-y-6">
                  {/* Plan Header */}
                  <div>
                    <h3 className={`text-sm font-bold uppercase tracking-widest ${isPro ? 'text-indigo-200' : 'text-slate-500'}`}>
                      {plan.name}
                    </h3>
                    <div className="mt-3 flex flex-col gap-1">
                      {plan.originalPrice && discountPercent > 0 && (
                        <div className="flex items-center gap-2">
                          <span className={`text-base font-medium line-through decoration-1 ${isPro ? 'text-indigo-300' : 'text-slate-400'}`}>
                            {plan.originalPrice}
                          </span>
                          <span className={`text-[11px] font-bold px-2 py-0.5 rounded-full ${isPro ? 'bg-amber-400 text-amber-950' : 'bg-emerald-100 text-emerald-800'}`}>
                            {discountPercent}% OFF
                          </span>
                        </div>
                      )}
                      
                      <div className="flex items-baseline gap-1.5">
                        <span className="text-4xl font-extrabold tracking-tight transition-all duration-300">{activePrice}</span>
                        <span className={`text-sm font-medium transition-all duration-300 ${isPro ? 'text-indigo-300' : 'text-slate-500'}`}>{periodLabel}</span>
                      </div>
                      
                      <span className={`text-xs ${isPro ? 'text-indigo-300' : 'text-slate-500'}`}>
                        Including GST
                      </span>
                    </div>
                  </div>

                  {/* Feature Checklist */}
                  <ul className="space-y-3 pt-2 text-sm font-medium">
                    {plan.features.map((feat, i) => {
                      let badge = null;
                      if (feat.value === true) {
                        badge = <Check className={`w-5 h-5 shrink-0 ${isPro ? 'text-amber-400' : 'text-indigo-600'}`} />;
                      } else if (feat.value === false) {
                        badge = <span className={isPro ? 'text-indigo-400/50' : 'text-slate-300'}>—</span>;
                      } else if (feat.value === 'Free') {
                        badge = <span className={`font-bold text-xs uppercase tracking-wider px-2.5 py-1 rounded-md ${isPro ? 'bg-emerald-400/20 text-emerald-300' : 'bg-emerald-100 text-emerald-700'}`}>Free</span>;
                      } else if (feat.value === 'Not Free') {
                        badge = <span className={`font-bold text-xs uppercase tracking-wider px-2.5 py-1 rounded-md ${isPro ? 'bg-rose-400/20 text-rose-300' : 'bg-rose-50 text-rose-600'}`}>Not Free</span>;
                      } else {
                        badge = <span className={`font-semibold ${isPro ? 'text-indigo-100' : 'text-slate-700'} text-right`}>{feat.value}</span>;
                      }
                      return (
                        <li key={i} className={`flex items-center justify-between gap-3 ${feat.value === false ? 'opacity-60' : ''}`}>
                          <span className={isPro ? 'text-indigo-100' : 'text-slate-600'}>{feat.name}</span>
                          {badge}
                        </li>
                      );
                    })}
                  </ul>
                </div>

                <div className="pt-8">
                  {isPro ? (
                    <a
                      href={WHATSAPP_LINK}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full bg-amber-400 hover:bg-amber-300 text-amber-950 font-bold py-3.5 px-6 rounded-xl text-sm transition-all shadow-md flex items-center justify-center gap-2 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:ring-offset-2 active:scale-95"
                    >
                      <MessageSquare className="w-5 h-5" />
                      <span>Order via WhatsApp</span>
                    </a>
                  ) : (
                    <button
                      onClick={() => onOpenQuoteModal(plan.name)}
                      className={`w-full font-bold py-3.5 px-6 rounded-xl text-sm transition-all flex items-center justify-center gap-2 shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 active:scale-95 ${
                        isPro 
                          ? 'bg-amber-400 hover:bg-amber-300 text-amber-950 focus:ring-amber-400' 
                          : 'bg-slate-900 hover:bg-indigo-600 text-white focus:ring-indigo-600'
                      }`}
                    >
                      {plan.ctaText}
                    </button>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
