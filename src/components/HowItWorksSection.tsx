import React from 'react';
import { Phone } from 'lucide-react';
import { PROCESS_STEPS, COMPANY_PHONE_DISPLAY, CALL_LINK } from '../data/content';

export const HowItWorksSection: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            How It Works
          </h2>
          <p className="text-slate-600 text-base sm:text-lg font-medium">
            A simple, transparent, and collaborative process to bring your digital vision to life.
          </p>
        </div>

        {/* 6 Step Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {PROCESS_STEPS.map((step) => (
            <div
              key={step.stepNumber}
              className="bg-slate-50/70 hover:bg-white rounded-3xl p-8 border border-slate-100 shadow-xs hover:shadow-xl transition-all duration-300 relative overflow-hidden group space-y-4"
            >
              {/* Background Step Number */}
              <span className="absolute top-4 right-6 text-5xl font-black text-slate-200/60 group-hover:text-indigo-100 transition-colors select-none">
                {step.stepNumber}
              </span>

              <div className="space-y-3 relative z-10">
                <span className="inline-block px-3 py-1 rounded-full bg-indigo-50 text-indigo-700 text-sm font-semibold">
                  Step {step.stepNumber}
                </span>

                <h3 className="text-xl font-extrabold text-slate-900 group-hover:text-indigo-600 transition-colors">
                  {step.title}
                </h3>

                <p className="text-slate-600 text-sm leading-relaxed font-normal">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
