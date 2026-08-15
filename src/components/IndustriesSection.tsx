import React, { useState } from 'react';
import { Coffee, Utensils, Dumbbell, GraduationCap, Store, Rocket, User, Building2, Phone } from 'lucide-react';
import { INDUSTRIES, COMPANY_PHONE_DISPLAY, CALL_LINK } from '../data/content';

interface IndustriesProps {
  onOpenQuoteModal: (industryName: string) => void;
}

export const IndustriesSection: React.FC<IndustriesProps> = ({ onOpenQuoteModal }) => {
  const [selectedId, setSelectedId] = useState<string>('restaurants');
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  const getIcon = (iconName: string, isSelected: boolean) => {
    const iconClass = `w-6 h-6 transition-colors duration-200 ${
      isSelected ? 'text-white' : 'text-indigo-600'
    }`;

    switch (iconName) {
      case 'Coffee': return <Coffee className={iconClass} />;
      case 'Utensils': return <Utensils className={iconClass} />;
      case 'Dumbbell': return <Dumbbell className={iconClass} />;
      case 'GraduationCap': return <GraduationCap className={iconClass} />;
      case 'Store': return <Store className={iconClass} />;
      case 'Rocket': return <Rocket className={iconClass} />;
      case 'User': return <User className={iconClass} />;
      case 'Building2': return <Building2 className={iconClass} />;
      default: return <Store className={iconClass} />;
    }
  };

  return (
    <section className="py-16 md:py-24 bg-slate-50 border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Industries We Empower
          </h2>
          <p className="text-slate-600 text-base sm:text-lg font-medium">
            We build specialized digital solutions tailored to the unique needs of various industries.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {INDUSTRIES.map((industry) => {
            const isSelected = hoveredId ? hoveredId === industry.id : selectedId === industry.id;

            return (
              <div
                key={industry.id}
                onClick={() => {
                  setSelectedId(industry.id);
                  onOpenQuoteModal(`Website for ${industry.title}`);
                }}
                onMouseEnter={() => setHoveredId(industry.id)}
                onMouseLeave={() => setHoveredId(null)}
                className={`bg-white rounded-2xl p-6 border flex flex-col items-center text-center space-y-4 cursor-pointer transition-all duration-200 hover:-translate-y-1 ${
                  isSelected 
                    ? 'border-indigo-200 shadow-xl' 
                    : 'border-slate-100 shadow-sm hover:shadow-md'
                }`}
              >
                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center transition-colors duration-200 ${
                  isSelected ? 'bg-indigo-600 shadow-md' : 'bg-indigo-50/80'
                }`}>
                  {getIcon(industry.iconName, isSelected)}
                </div>
                <h3 className={`text-base sm:text-lg font-bold transition-colors ${
                  isSelected ? 'text-indigo-600' : 'text-slate-900'
                }`}>
                  {industry.title}
                </h3>
                <p className={`text-xs text-indigo-600 font-semibold transition-opacity duration-200 ${
                  isSelected ? 'opacity-100' : 'opacity-0'
                }`}>
                  Request Solution →
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

