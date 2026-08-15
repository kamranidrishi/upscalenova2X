import React from 'react';
import { CheckCircle2, Shield, Zap, TrendingUp, Layers, Headphones, Phone } from 'lucide-react';
import { COMPANY_PHONE_DISPLAY, CALL_LINK } from '../data/content';

interface WhyChooseUsProps {
  onOpenQuoteModal: () => void;
}

export const WhyChooseUsSection: React.FC<WhyChooseUsProps> = ({ onOpenQuoteModal }) => {
  const features = [
    {
      title: 'Fully Customizable',
      desc: 'We build strictly according to your business requirements, brand colors, and vision.',
      icon: <Layers className="w-5 h-5 text-indigo-400" />
    },
    {
      title: 'Complete Management',
      desc: 'We handle the design, development, hosting, domain, and ongoing technical management.',
      icon: <Shield className="w-5 h-5 text-indigo-400" />
    },
    {
      title: 'Modern Technology',
      desc: 'We use modern web frameworks to create fast, responsive, and ultra-secure websites.',
      icon: <Zap className="w-5 h-5 text-indigo-400" />
    },
    {
      title: 'Business-Focused',
      desc: 'Every solution is purposefully designed to attract customers and drive online growth.',
      icon: <TrendingUp className="w-5 h-5 text-indigo-400" />
    },
    {
      title: 'Affordable & Flexible',
      desc: 'Tailored solutions and flexible pricing suitable for startups and growing businesses.',
      icon: <CheckCircle2 className="w-5 h-5 text-indigo-400" />
    },
    {
      title: 'One Partner for Everything',
      desc: 'From custom websites to Google Maps listing, NFC stands, and support, we cover all.',
      icon: <Headphones className="w-5 h-5 text-indigo-400" />
    }
  ];

  return (
    <section id="about" className="py-16 md:py-24 bg-slate-900 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Text Column */}
          <div className="lg:col-span-5 space-y-6 text-center lg:text-left">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight">
              Why Businesses Choose <span className="text-indigo-400">Upscale Nova</span>
            </h2>

            <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
              Upscale Nova is not just a website development startup. We help businesses build their complete digital presence through websites, Google Business solutions, digital menus, smart QR codes, NFC cards, and fully customized digital experiences.
            </p>

            <div className="p-4 rounded-2xl bg-slate-800/80 border border-slate-700 text-slate-300 text-sm italic">
              "Our mission is to make digital tools simple, accessible, and customizable for every business."
            </div>

            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3">
              <button
                onClick={onOpenQuoteModal}
                className="w-full sm:w-auto bg-indigo-600 hover:bg-indigo-500 text-white font-extrabold px-8 py-3.5 rounded-full text-sm transition-all shadow-lg"
              >
                Start Your Project
              </button>

              <a
                href="#contact"
                className="w-full sm:w-auto flex items-center justify-center gap-2 bg-slate-800 hover:bg-slate-700 text-emerald-400 font-extrabold px-6 py-3.5 rounded-full text-sm border border-slate-700 transition-all"
              >
                <Phone className="w-4 h-4 text-emerald-400" />
                <span>Contact Us</span>
              </a>
            </div>
          </div>

          {/* Right Feature Grid */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            {features.map((feat, idx) => (
              <div
                key={idx}
                className="bg-slate-800/60 hover:bg-slate-800 p-6 rounded-2xl border border-slate-700/80 hover:border-indigo-500/50 transition-all space-y-3"
              >
                <div className="w-10 h-10 rounded-xl bg-indigo-500/20 flex items-center justify-center">
                  {feat.icon}
                </div>
                <h3 className="text-lg font-bold text-white">
                  {feat.title}
                </h3>
                <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                  {feat.desc}
                </p>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};
