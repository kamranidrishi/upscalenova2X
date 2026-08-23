import React, { useState } from 'react';
import { Phone, Mail, MapPin, MessageSquare, Instagram } from 'lucide-react';
import { COMPANY_PHONE_DISPLAY, COMPANY_EMAIL, COMPANY_LOCATION, WHATSAPP_LINK, CALL_LINK, COMPANY_LOGO, INSTAGRAM_LINK } from '../data/content';
import { UpscaleNovaLogo } from './UpscaleNovaLogo';

interface FooterProps {
  onOpenPrivacyPolicy?: () => void;
  onOpenRefundPolicy?: () => void;
  onOpenTerms?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ 
  onOpenPrivacyPolicy,
  onOpenRefundPolicy,
  onOpenTerms 
}) => {
  const [logoLoadFailed, setLogoLoadFailed] = useState(false);

  return (
    <footer className="bg-slate-950 text-slate-400 text-sm border-t border-slate-900">
      
      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          
          {/* Brand Info */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 flex items-center justify-center shrink-0 p-1 rounded-xl bg-white border border-slate-700 shadow-xs overflow-hidden">
                {!logoLoadFailed ? (
                  <img 
                    src={COMPANY_LOGO} 
                    alt="Upscale Nova Logo" 
                    className="w-full h-full object-contain" 
                    onError={() => setLogoLoadFailed(true)}
                  />
                ) : (
                  <UpscaleNovaLogo className="w-full h-full" />
                )}
              </div>
              <span className="text-xl font-extrabold text-white tracking-tight">Upscale Nova</span>
            </div>

            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed max-w-sm">
              Helping businesses build, grow, and manage their digital presence through powerful websites and smart digital solutions.
            </p>

            <div className="pt-2 space-y-2 text-xs font-medium text-slate-300">
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-indigo-400" />
                <a href={CALL_LINK} className="hover:text-white transition-colors">{COMPANY_PHONE_DISPLAY}</a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-indigo-400" />
                <a href={`mailto:${COMPANY_EMAIL}`} className="hover:text-white transition-colors">{COMPANY_EMAIL}</a>
              </div>
              <div className="flex items-center gap-2">
                <Instagram className="w-3.5 h-3.5 text-pink-400" />
                <a href={INSTAGRAM_LINK} target="_blank" rel="noopener noreferrer" className="hover:text-pink-300 transition-colors">@upscalenova</a>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-indigo-400" />
                <span>{COMPANY_LOCATION}</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-white font-bold text-sm tracking-wide uppercase">Quick Links</h4>
            <ul className="space-y-2 text-xs font-semibold">
              <li><a href="#home" className="hover:text-indigo-400 transition-colors">Home</a></li>
              <li><a href="#services" className="hover:text-indigo-400 transition-colors">Services</a></li>
              <li><a href="#products" className="hover:text-indigo-400 transition-colors">Products & QR Stands</a></li>
              <li><a href="#pricing" className="hover:text-indigo-400 transition-colors">Pricing Plans</a></li>
              <li><a href="#website-demo" className="hover:text-indigo-400 transition-colors">Website Demo</a></li>
              <li><a href="#about" className="hover:text-indigo-400 transition-colors">About Us</a></li>
              <li><a href="#contact" className="hover:text-indigo-400 transition-colors">Contact Support</a></li>
            </ul>
          </div>

          {/* Legal Links */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-white font-bold text-sm tracking-wide uppercase">Legal & Compliance</h4>
            <ul className="space-y-2 text-xs font-semibold">
              <li>
                <button 
                  onClick={onOpenPrivacyPolicy}
                  className="hover:text-indigo-400 transition-colors text-left"
                >
                  Privacy Policy
                </button>
              </li>
              <li>
                <button 
                  onClick={onOpenTerms}
                  className="hover:text-indigo-400 transition-colors text-left"
                >
                  Terms & Conditions
                </button>
              </li>
              <li>
                <button 
                  onClick={onOpenRefundPolicy}
                  className="hover:text-indigo-400 transition-colors text-left"
                >
                  Refund & Cancellation Policy
                </button>
              </li>
            </ul>
          </div>

        </div>

        {/* Copyright Bottom Bar */}
        <div className="pt-8 mt-12 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 text-center gap-3">
          <p>© 2026 Upscale Nova. All rights reserved.</p>
          <p className="flex items-center gap-1">
            <span>Customer Helpline:</span>
            <a href={CALL_LINK} className="text-indigo-400 font-bold hover:underline">{COMPANY_PHONE_DISPLAY}</a>
          </p>
        </div>

      </div>
    </footer>
  );
};
