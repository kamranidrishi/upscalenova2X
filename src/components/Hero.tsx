import React from 'react';
import { ArrowRight, Rocket, Phone, ShieldCheck, Zap, Globe, CheckCircle } from 'lucide-react';
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
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-50 border border-indigo-100/80 text-indigo-700 text-sm font-semibold tracking-wide">
            <Globe className="w-4 h-4 text-indigo-600" />
            <span>Modern Digital Solutions</span>
          </div>

          {/* Main Title */}
          <h1 className="text-5xl md:text-7xl font-black tracking-tight leading-[0.95]">
  Build Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600">Business</span> Beyond Limits with Digital Solutions.</h1>

          {/* Subtitle */}
          <p className="text-[clamp(1.125rem,1.5vw,1.375rem)] text-slate-600 font-medium leading-relaxed max-w-2xl mx-auto">
            From powerful custom websites to smart digital solutions, Upscale Nova helps businesses in Mumbai and across India build modern, high-converting websites and grow their online presence.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4 pt-2 w-full">
            <button
              onClick={() => onOpenQuoteModal("Custom Website")}
              className="w-full sm:w-auto flex items-center justify-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-8 py-3.5 rounded-xl text-base shadow-md hover:shadow-lg transition-all focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2 active:scale-95"
            >
              <span>Get Started</span>
              <ArrowRight className="w-5 h-5" />
            </button>
            <a
              href="#services"
              className="w-full sm:w-auto flex items-center justify-center gap-2 bg-white hover:bg-slate-50 text-slate-700 font-semibold px-8 py-3.5 rounded-xl text-base border border-slate-200 transition-all shadow-sm focus:outline-none focus:ring-2 focus:ring-slate-200 focus:ring-offset-2 active:scale-95"
            >
              <span>Explore Services</span>
            </a>
            <a
              href="#contact"
              className="w-full sm:w-auto flex items-center justify-center gap-2 bg-emerald-50 hover:bg-emerald-100 text-emerald-800 font-semibold px-8 py-3.5 rounded-xl text-base border border-emerald-200 transition-all shadow-sm focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:ring-offset-2 active:scale-95"
            >
              <Phone className="w-5 h-5 text-emerald-600" />
              <span>Contact Us</span>
            </a>
          </div>

          {/* Feature Checkmarks */}
          <div className="pt-6 flex flex-wrap items-center justify-center gap-y-3 gap-x-6 text-sm font-semibold text-slate-600">
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-emerald-500" />
              <span>100% Custom Built</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-emerald-500" />
              <span>24/7 Support</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-emerald-500" />
              <span>Fast & Secure Hosting</span>
            </div>
          </div>
        </div>

        {/* Hero Banner Box */}
        <div className="mt-16 bg-slate-900 text-white rounded-3xl p-8 sm:p-12 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="relative z-10 max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-[clamp(1.75rem,3.5vw,2.5rem)] font-extrabold tracking-tight">
              Your business. Your vision. Your custom website.
            </h2>
            <p className="text-slate-300 text-[clamp(1rem,1.25vw,1.125rem)] leading-relaxed font-medium">
              We design and develop custom websites for cafes, restaurants, gyms, institutes, local businesses, and startups. Tell us what you need, and we'll build it.
            </p>
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={() => onOpenQuoteModal("Custom Website Project")}
                className="w-full sm:w-auto bg-white text-slate-900 hover:bg-slate-50 font-semibold px-8 py-3.5 rounded-xl text-base transition-all shadow-md focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-slate-900 active:scale-95"
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
