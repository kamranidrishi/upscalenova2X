import React, { useState } from 'react';
import { Phone, Menu as MenuIcon, X } from 'lucide-react';
import { CALL_LINK } from '../data/content';

interface HeaderProps {
  onOpenQuoteModal: (serviceName?: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenQuoteModal }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-100 shadow-xs transition-all duration-300">
      {/* Main Navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo on Left */}
          <a href="#" className="flex items-center gap-3 group shrink-0">
            <div className="w-10 h-10 flex items-center justify-center shrink-0">
              <img 
                src="/logo.png" 
                alt="Upscale Nova" 
                width="40"
                height="40"
                fetchPriority="high"
                className="w-10 h-10 object-contain rounded-full group-hover:scale-105 transition-transform duration-300" 
              />
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

          {/* Desktop Nav Links - Horizontally Centered */}
          <nav className="hidden lg:flex items-center gap-7 xl:gap-8 text-sm font-medium text-slate-600">
            <a href="#home" className="hover:text-indigo-600 transition-colors">Home</a>
            <a href="#services" className="hover:text-indigo-600 transition-colors">Services</a>
            <a href="#products" className="hover:text-indigo-600 transition-colors">Products</a>
            <a href="#pricing" className="hover:text-indigo-600 transition-colors">Pricing</a>
            <a href="#website-demo" className="hover:text-indigo-600 transition-colors">Website Demo</a>
            <a href="#about" className="hover:text-indigo-600 transition-colors">About</a>
            <a href="#contact" className="hover:text-indigo-600 transition-colors">Contact</a>
          </nav>

          {/* Action Quote Button on Right */}
          <div className="hidden lg:flex items-center gap-3 shrink-0">
            <button
              onClick={() => onOpenQuoteModal()}
              className="bg-indigo-600 hover:bg-indigo-700 text-white px-5 py-2.5 rounded-xl text-sm font-semibold transition-all shadow-xs focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2 whitespace-nowrap active:scale-95 cursor-pointer"
            >
              Get a Free Consultation
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center gap-2">
            <a
              href={CALL_LINK}
              className="p-2 rounded-xl bg-indigo-50 text-indigo-600 font-bold text-xs flex items-center gap-1 border border-indigo-100 shadow-xs"
              aria-label="Call Support"
            >
              <Phone className="w-4 h-4" />
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-slate-700 bg-white border border-slate-200 hover:bg-slate-50 transition-colors shadow-xs"
              aria-label="Toggle Navigation"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-6 py-6 space-y-4 animate-in slide-in-from-top-4 duration-200 shadow-xl">
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
              href="#website-demo" 
              onClick={() => setMobileMenuOpen(false)} 
              className="px-3 py-2 rounded-lg hover:bg-slate-50"
            >
              Website Demo
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
              className="w-full flex items-center justify-center gap-2 bg-white hover:bg-slate-50 text-slate-800 py-3 rounded-xl font-semibold text-sm border border-slate-200 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-200 focus:ring-offset-2"
            >
              <Phone className="w-4 h-4 text-indigo-600" />
              <span>Call Support</span>
            </a>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenQuoteModal();
              }}
              className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-3 rounded-xl font-semibold text-sm transition-colors shadow-md focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2"
            >
              Get a Free Consultation
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
