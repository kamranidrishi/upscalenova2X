import React, { useState } from 'react';
import { Phone, MessageSquare, Menu as MenuIcon, X, Sparkles } from 'lucide-react';
import { COMPANY_PHONE_DISPLAY, WHATSAPP_LINK, CALL_LINK, COMPANY_LOGO } from '../data/content';

interface HeaderProps {
  onOpenQuoteModal: (serviceName?: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenQuoteModal }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-100 shadow-xs transition-all">
      {/* Main Navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-11 h-11 flex items-center justify-center shrink-0">
              <img src={COMPANY_LOGO} alt="Upscale Nova" className="w-full h-full object-contain group-hover:scale-105 transition-transform" />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-extrabold tracking-tight text-slate-900 group-hover:text-indigo-600 transition-colors">
                Upscale Nova
              </span>
              <span className="text-[10px] tracking-wider uppercase font-semibold text-slate-500">
                Digital Business Solutions
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-semibold text-slate-600">
            <a href="#home" className="hover:text-indigo-600 transition-colors">Home</a>
            <a href="#services" className="hover:text-indigo-600 transition-colors">Services</a>
            <a href="#products" className="hover:text-indigo-600 transition-colors">Products</a>
            <a href="#pricing" className="hover:text-indigo-600 transition-colors">Pricing</a>
            <a href="#about" className="hover:text-indigo-600 transition-colors">About</a>
            <a href="#contact" className="hover:text-indigo-600 transition-colors">Contact</a>
          </nav>

          {/* Action Call & Quote Button */}
          <div className="hidden lg:flex items-center gap-3">
            <button
              onClick={() => onOpenQuoteModal()}
              className="flex items-center gap-2 bg-slate-900 text-white hover:bg-indigo-600 px-5 py-2.5 rounded-full text-xs font-bold transition-all shadow-sm hover:shadow-indigo-200 hover:-translate-y-0.5"
            >
              <Sparkles className="w-3.5 h-3.5 text-indigo-300" />
              <span>Get a Free Consultation</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-2">
            <a
              href={CALL_LINK}
              className="p-2.5 rounded-full bg-indigo-50 text-indigo-600 font-bold text-xs flex items-center gap-1 border border-indigo-100"
              aria-label="Call Support"
            >
              <Phone className="w-4 h-4" />
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-slate-700 hover:bg-slate-100 transition-colors"
              aria-label="Toggle Navigation"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-slate-200 px-6 py-6 space-y-4 animate-in slide-in-from-top-4 duration-200">
          <nav className="flex flex-col space-y-3 text-base font-semibold text-slate-700">
            <a 
              href="#home" 
              onClick={() => setMobileMenuOpen(false)} 
              className="px-3 py-2 rounded-lg hover:bg-slate-50"
            >
              Home
            </a>
            <a 
              href="#services" 
              onClick={() => setMobileMenuOpen(false)} 
              className="px-3 py-2 rounded-lg hover:bg-slate-50"
            >
              Services
            </a>
            <a 
              href="#products" 
              onClick={() => setMobileMenuOpen(false)} 
              className="px-3 py-2 rounded-lg hover:bg-slate-50"
            >
              Products
            </a>
            <a 
              href="#pricing" 
              onClick={() => setMobileMenuOpen(false)} 
              className="px-3 py-2 rounded-lg hover:bg-slate-50"
            >
              Pricing
            </a>
            <a 
              href="#about" 
              onClick={() => setMobileMenuOpen(false)} 
              className="px-3 py-2 rounded-lg hover:bg-slate-50"
            >
              About
            </a>
            <a 
              href="#contact" 
              onClick={() => setMobileMenuOpen(false)} 
              className="px-3 py-2 rounded-lg hover:bg-slate-50"
            >
              Contact
            </a>
          </nav>

          <div className="pt-4 border-t border-slate-100 flex flex-col gap-3">
            <a
              href={CALL_LINK}
              className="w-full flex items-center justify-center gap-2 bg-indigo-50 text-indigo-700 py-3 rounded-xl font-bold text-sm border border-indigo-200"
            >
              <Phone className="w-4 h-4 text-indigo-600" />
              <span>Call Support</span>
            </a>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenQuoteModal();
              }}
              className="w-full bg-slate-900 text-white py-3 rounded-xl font-bold text-sm hover:bg-indigo-600 transition-colors shadow-sm"
            >
              Get a Free Consultation
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
