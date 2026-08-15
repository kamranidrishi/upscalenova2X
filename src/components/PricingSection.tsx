import React, { useState } from 'react';
import { Check, Phone, MessageSquare, Sparkles } from 'lucide-react';
import { PRICING_PLANS, COMPANY_PHONE_DISPLAY, WHATSAPP_LINK, CALL_LINK } from '../data/content';

interface PricingProps {
  onOpenQuoteModal: (planName: string) => void;
}

export const PricingSection: React.FC<PricingProps> = ({ onOpenQuoteModal }) => {
  const [isMonthly, setIsMonthly] = useState(false);

  return (
    <section id="pricing" className="py-16 md:py-24 bg-slate-50 border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-50 text-indigo-700 text-xs font-bold border border-indigo-100">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Transparent Pricing Packages</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Simple & Transparent Plans
          </h2>
          <p className="text-slate-600 text-base sm:text-lg font-medium">
            Choose the best package for your business or <a href="#contact" className="text-indigo-600 font-extrabold underline">contact us</a> for a custom quote.
          </p>
        </div>

        {/* Toggle */}
        <div className="flex justify-center pt-2">
          <div className="inline-flex bg-slate-200/60 p-1 rounded-full border border-slate-200">
            <button
              onClick={() => setIsMonthly(false)}
              className={`px-6 py-2.5 rounded-full text-xs font-bold transition-all duration-300 ${!isMonthly ? 'bg-white text-slate-900 shadow-sm border border-slate-200/50' : 'text-slate-500 hover:text-slate-800'}`}
            >
              One-Time Payment
            </button>
            <button
              onClick={() => setIsMonthly(true)}
              className={`px-6 py-2.5 rounded-full text-xs font-bold transition-all duration-300 ${isMonthly ? 'bg-white text-slate-900 shadow-sm border border-slate-200/50' : 'text-slate-500 hover:text-slate-800'}`}
            >
              Monthly Payment
            </button>
          </div>
        </div>

        {/* 3 Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {PRICING_PLANS.map((plan) => {
            const isPro = plan.isPopular;
            
            const activePrice = isMonthly && plan.monthlyPrice ? plan.monthlyPrice : plan.price;
            const activeOriginalPrice = isMonthly && plan.originalMonthlyPrice ? plan.originalMonthlyPrice : plan.originalPrice;
            const periodLabel = isMonthly ? '/ month' : '/ one-time';
            
            let discountPercent = 0;
            if (activeOriginalPrice && activePrice) {
              const orig = parseInt(activeOriginalPrice.replace(/[^0-9]/g, ''));
              const curr = parseInt(activePrice.replace(/[^0-9]/g, ''));
              if (orig > 0 && curr > 0 && orig > curr) {
                discountPercent = Math.round(((orig - curr) / orig) * 100);
              }
            }

            return (
              <div
                key={plan.id}
                className={`rounded-3xl p-8 flex flex-col justify-between transition-all duration-300 relative ${
                  isPro
                    ? 'bg-indigo-900 text-white shadow-2xl scale-105 border-2 border-indigo-400 z-10'
                    : 'bg-white text-slate-900 border border-slate-200 shadow-sm hover:shadow-xl'
                }`}
              >
                {/* Popular Badge */}
                {isPro && (
                  <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-amber-400 text-slate-950 text-[11px] font-black uppercase tracking-wider px-4 py-1 rounded-full shadow-md">
                    MOST POPULAR
                  </span>
                )}

                <div className="space-y-6">
                  {/* Plan Header */}
                  <div>
                    <h3 className={`text-xs font-black uppercase tracking-wider ${isPro ? 'text-indigo-300' : 'text-slate-500'}`}>
                      {plan.name}
                    </h3>
                    {activeOriginalPrice && discountPercent > 0 && (
                      <div className="mt-2 flex items-center gap-2">
                        <span className={`text-sm font-bold line-through ${isPro ? 'text-indigo-300/80' : 'text-slate-400'}`}>
                          {activeOriginalPrice}
                        </span>
                        <span className={`text-[10px] font-black px-2 py-0.5 rounded-full ${isPro ? 'bg-amber-400/20 text-amber-300' : 'bg-emerald-100 text-emerald-700'}`}>
                          {discountPercent}% OFF
                        </span>
                      </div>
                    )}
                    <div className="mt-1 flex items-baseline gap-1">
                      <span className="text-4xl font-extrabold tracking-tight transition-all duration-300">{activePrice}</span>
                      <span className={`text-xs transition-all duration-300 ${isPro ? 'text-indigo-200' : 'text-slate-500'}`}>{periodLabel}</span>
                    </div>
                  </div>

                  {/* Feature Checklist */}
                  <ul className="space-y-3 pt-2 text-xs sm:text-sm font-medium">
                    {plan.features.map((feat, i) => (
                      <li key={i} className="flex items-start gap-2.5">
                        <Check className={`w-4 h-4 shrink-0 mt-0.5 ${isPro ? 'text-amber-400' : 'text-indigo-600'}`} />
                        <span className={isPro ? 'text-slate-100' : 'text-slate-700'}>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-8 space-y-3">
                  {isPro ? (
                    <a
                      href={WHATSAPP_LINK}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full bg-amber-400 hover:bg-amber-300 text-slate-950 font-black py-3.5 px-4 rounded-2xl text-xs sm:text-sm transition-all shadow-md flex items-center justify-center gap-2"
                    >
                      <MessageSquare className="w-4 h-4" />
                      <span>ORDER VIA WHATSAPP</span>
                    </a>
                  ) : (
                    <button
                      onClick={() => onOpenQuoteModal(plan.name)}
                      className="w-full bg-slate-900 hover:bg-indigo-600 text-white font-bold py-3.5 px-4 rounded-2xl text-xs sm:text-sm transition-colors shadow-xs"
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
