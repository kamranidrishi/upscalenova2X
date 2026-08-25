import React from 'react';
import { Smartphone, Globe, MapPin, Star, QrCode, CreditCard, Menu, Settings, Lightbulb, ArrowRight, Phone } from 'lucide-react';
import { SERVICES, COMPANY_PHONE_DISPLAY, CALL_LINK } from '../data/content';

interface ServicesProps {
  onOpenQuoteModal: (serviceTitle: string) => void;
}

export const ServicesSection: React.FC<ServicesProps> = ({ onOpenQuoteModal }) => {
  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case 'Smartphone': return <Smartphone className="w-6 h-6" />;
      case 'Globe': return <Globe className="w-6 h-6" />;
      case 'MapPin': return <MapPin className="w-6 h-6" />;
      case 'Star': return <Star className="w-6 h-6" />;
      case 'QrCode': return <QrCode className="w-6 h-6" />;
      case 'CreditCard': return <CreditCard className="w-6 h-6" />;
      case 'Menu': return <Menu className="w-6 h-6" />;
      case 'Settings': return <Settings className="w-6 h-6" />;
      case 'Lightbulb': return <Lightbulb className="w-6 h-6" />;
      default: return <Globe className="w-6 h-6" />;
    }
  };

  return (
    <section id="services" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Everything You Need to Grow Online
          </h2>
          <p className="text-slate-600 text-base sm:text-lg font-medium">
            From establishing your local presence to building powerful custom web applications. We provide end-to-end digital solutions.
          </p>
        </div>

        {/* 3x3 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {SERVICES.map((service) => (
            <div
              key={service.id}
              className="bg-slate-50/70 hover:bg-white rounded-3xl p-8 border border-slate-100 hover:border-indigo-100 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between space-y-6 group"
            >
              <div className="space-y-4">
                {/* Icon Box */}
                <div className={`w-14 h-14 rounded-2xl ${service.color} flex items-center justify-center shadow-md group-hover:scale-105 transition-transform`}>
                  {getServiceIcon(service.iconName)}
                </div>

                {/* Title & Description */}
                <h3 className="text-xl font-extrabold text-slate-900 group-hover:text-indigo-600 transition-colors">
                  {service.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed font-medium">
                  {service.description}
                </p>
              </div>

              {/* Actions */}
              <div className="pt-4 border-t border-slate-100 flex items-center justify-start text-sm font-semibold">
                <button
                  onClick={() => onOpenQuoteModal(service.title)}
                  className="text-indigo-600 hover:text-indigo-800 flex items-center gap-1.5 font-semibold text-sm group-hover:translate-x-1 transition-transform focus:outline-none focus:underline"
                >
                  <span>Inquire Now</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
