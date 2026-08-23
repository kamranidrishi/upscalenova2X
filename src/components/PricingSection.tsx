import React from 'react';
import { Check, Phone, MessageSquare, Sparkles } from 'lucide-react';
import { PRICING_PLANS, COMPANY_PHONE_DISPLAY, WHATSAPP_LINK, CALL_LINK } from '../data/content';

interface PricingProps {
  onOpenQuoteModal: (planName: string) => void;
}

export const PricingSection: React.FC<PricingProps> = ({ onOpenQuoteModal }) => {

  return (
    <section id="pricing" className="py-10 md:py-12 bg-slate-50 border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-50 text-indigo-700 text-xs font-bold border border-indigo-100">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Transparent Pricing Packages</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Simple & Transparent Plans
          </h2>
          <p className="text-slate-600 text-sm sm:text-base font-medium">
            Choose the best package for your business or <a href="#contact" className="text-indigo-600 font-extrabold underline">contact us</a> for a custom quote.
          </p>
        </div>



        {/* 3 Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6 items-stretch">
          {PRICING_PLANS.map((plan) => {
            const isPro = plan.isPopular;
            
            const activePrice = plan.price;
            const periodLabel = '/ one-time';

            return (
              <div
                key={plan.id}
                className={`rounded-3xl p-5 lg:p-6 flex flex-col justify-between transition-all duration-300 relative ${
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

                <div className="space-y-4">
                  {/* Plan Header */}
                  <div>
                    <h3 className={`text-xs font-black uppercase tracking-wider ${isPro ? 'text-indigo-300' : 'text-slate-500'}`}>
                      {plan.name}
                    </h3>

                    <div className="mt-1 flex items-baseline gap-1">
                      <span className="text-3xl font-extrabold tracking-tight transition-all duration-300">{activePrice}</span>
                      <span className={`text-xs transition-all duration-300 ${isPro ? 'text-indigo-200' : 'text-slate-500'}`}>{periodLabel}</span>
                    </div>
                  </div>

                  {/* Feature Checklist */}
                  <ul className="space-y-2 pt-1 text-xs font-medium">
                    {plan.features.map((feat, i) => (
                      <li key={i} className={`flex items-center justify-between gap-2.5 py-0.5 ${feat.value === false ? 'opacity-50' : ''}`}>
                        <span className={isPro ? 'text-slate-200' : 'text-slate-600'}>{feat.name}</span>
                        {feat.value === true ? (
                          <Check className={`w-4 h-4 shrink-0 ${isPro ? 'text-amber-400' : 'text-indigo-600'}`} />
                        ) : feat.value === false ? (
                          <span className={isPro ? 'text-slate-400' : 'text-slate-400 font-bold'}>—</span>
                        ) : feat.value === 'Free' ? (
                          <span className={`font-bold text-[10px] uppercase tracking-wider px-2 py-0.5 rounded-md ${isPro ? 'bg-emerald-400/20 text-emerald-300' : 'bg-emerald-100 text-emerald-700'}`}>Free</span>
                        ) : feat.value === 'Not Free' ? (
                          <span className={`font-bold text-[10px] uppercase tracking-wider px-2 py-0.5 rounded-md ${isPro ? 'bg-rose-400/20 text-rose-300' : 'bg-rose-50 text-rose-600'}`}>Not Free</span>
                        ) : (
                          <span className={`font-bold ${isPro ? 'text-white' : 'text-slate-900'} text-right`}>{feat.value}</span>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-5">
                  {isPro ? (
                    <a
                      href={WHATSAPP_LINK}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full bg-amber-400 hover:bg-amber-300 text-slate-950 font-black py-2.5 px-4 rounded-2xl text-xs transition-all shadow-md flex items-center justify-center gap-2"
                    >
                      <MessageSquare className="w-4 h-4" />
                      <span>ORDER VIA WHATSAPP</span>
                    </a>
                  ) : (
                    <button
                      onClick={() => onOpenQuoteModal(plan.name)}
                      className="w-full bg-slate-900 hover:bg-indigo-600 text-white font-bold py-2.5 px-4 rounded-2xl text-xs transition-colors shadow-xs"
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
