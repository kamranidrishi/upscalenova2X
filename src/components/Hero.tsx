import React from 'react';
import { ArrowRight, Sparkles, Phone, ShieldCheck, Zap, Globe, CheckCircle } from 'lucide-react';
import { COMPANY_PHONE_DISPLAY, CALL_LINK } from '../data/content';

interface HeroProps {
  onOpenQuoteModal: (service?: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenQuoteModal }) => {
  return (
    <section id="home" className="relative pt-8 pb-16 md:pt-16 md:pb-24 overflow-hidden">
      {/* Background Glow Accents */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-gradient-to-b from-indigo-100/50 via-purple-50/30 to-transparent blur-3xl -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center flex flex-col items-center space-y-8">
          
          {/* Pill Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-50 border border-indigo-100/80 text-indigo-700 text-xs font-bold tracking-wide">
            <Sparkles className="w-3.5 h-3.5 text-indigo-600 animate-spin" style={{ animationDuration: '6s' }} />
            <span>Modern Digital Solutions</span>
          </div>

          {/* Main Title */}
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold text-slate-900 tracking-tight leading-[1.15]">
            Build Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-800">Business</span> Beyond Limits.
          </h1>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl text-slate-600 font-medium leading-relaxed max-w-2xl mx-auto">
            From powerful custom websites to smart digital business solutions, Upscale Nova helps businesses build a stronger, high-converting online presence.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
            <button
              onClick={() => onOpenQuoteModal("Custom Website")}
              className="w-full sm:w-auto flex items-center justify-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white font-bold px-8 py-4 rounded-full text-base shadow-lg shadow-indigo-200 hover:shadow-indigo-300 transition-all hover:-translate-y-0.5"
            >
              <span>Get Started</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <a
              href="#services"
              className="w-full sm:w-auto flex items-center justify-center gap-2 bg-white hover:bg-slate-50 text-slate-800 font-bold px-7 py-4 rounded-full text-base border border-slate-200 transition-all shadow-xs"
            >
              <span>Explore Services</span>
            </a>

            <a
              href="#contact"
              className="w-full sm:w-auto flex items-center justify-center gap-2 bg-emerald-50 hover:bg-emerald-100 text-emerald-800 font-extrabold px-6 py-4 rounded-full text-base border border-emerald-200 transition-all shadow-xs"
            >
              <Phone className="w-4 h-4 text-emerald-600" />
              <span>Contact Us</span>
            </a>
          </div>

          {/* Feature Checkmarks */}
          <div className="pt-4 flex flex-wrap items-center justify-center gap-y-2 gap-x-6 text-xs sm:text-sm font-semibold text-slate-500">
            <div className="flex items-center gap-1.5">
              <CheckCircle className="w-4 h-4 text-emerald-500" />
              <span>100% Custom Built</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle className="w-4 h-4 text-emerald-500" />
              <span>24/7 Support</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle className="w-4 h-4 text-emerald-500" />
              <span>Fast & Secure Hosting</span>
            </div>
          </div>
        </div>

        {/* Hero Banner Box (Dark Indigo Banner as shown in Screenshot 1 & 6) */}
        <div className="mt-16 bg-slate-900 text-white rounded-3xl p-8 sm:p-12 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="relative z-10 max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
              Your business. Your vision. Your custom website.
            </h2>
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed font-normal">
              We design and develop custom websites for cafes, restaurants, gyms, institutes, local businesses, and startups. Tell us what you need, and we'll build it.
            </p>
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={() => onOpenQuoteModal("Custom Website Project")}
                className="w-full sm:w-auto bg-white text-slate-900 hover:bg-slate-100 font-extrabold px-8 py-3.5 rounded-full text-sm transition-all shadow-md"
              >
                Request Custom Website
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
