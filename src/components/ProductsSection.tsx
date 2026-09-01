import React from 'react';
import { QrCode, Package, Check, Share2, Utensils, Link, Wifi } from 'lucide-react';
import { PRODUCTS } from '../data/content';

interface ProductsProps {
  onOpenQuoteModal: (productTitle: string) => void;
}

export const ProductsSection: React.FC<ProductsProps> = ({ onOpenQuoteModal }) => {
  const getProductIcon = (iconName: string) => {
    switch (iconName) {
      case 'Contactless': return <Wifi className="w-8 h-8 text-white rotate-90" />;
      case 'QrCode': return <QrCode className="w-8 h-8 text-white" />;
      case 'Share2': return <Share2 className="w-8 h-8 text-white" />;
      case 'Utensils': return <Utensils className="w-8 h-8 text-white" />;
      case 'Link': return <Link className="w-8 h-8 text-white" />;
      default: return <QrCode className="w-8 h-8 text-white" />;
    }
  };

  return (
    <section id="products" className="py-16 md:py-24 bg-slate-50 border-t border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-purple-50 border border-purple-100 text-purple-700 text-sm font-semibold tracking-wide">
            <Package className="w-3.5 h-3.5" />
            <span>NFC & QR Physical Business Stands</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Smart Products to Boost Your Reviews & Connections
          </h2>
          <p className="text-slate-600 text-base sm:text-lg font-medium">
            Physical review stands, NFC cards, and smart QR displays crafted to drive 5-star Google reviews and social engagement effortlessly.
          </p>
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {PRODUCTS.map((prod) => (
            <div
              key={prod.id}
              className="bg-white rounded-3xl p-6 shadow-sm hover:shadow-2xl border border-slate-100 flex flex-col justify-between transition-all duration-300 space-y-6 group"
            >
              <div className="space-y-6">
                
                {/* Visual Stand / Card Mockup Header */}
                <div className="w-full aspect-[4/3] rounded-2xl overflow-hidden bg-white border border-slate-100 flex items-center justify-center p-3">
                  {prod.image ? (
                    <img 
                      src={prod.image} 
                      alt={`${prod.title} - Contactless NFC and QR Code solution for business`}
                      width="320"
                      height="240"
                      className="w-full h-full object-contain"
                      referrerPolicy="no-referrer"
                      loading="lazy"
                    />
                  ) : (
                    <div className="w-full h-full bg-slate-100 flex items-center justify-center text-slate-400">
                      {getProductIcon(prod.iconName)}
                    </div>
                  )}
                </div>

                {/* Info & Description */}
                <div className="space-y-3">
                  <h3 className="text-xl font-bold text-slate-900">
                    {prod.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {prod.description}
                  </p>
                </div>

                {/* Customization Bullet List */}
                <div className="bg-slate-50 p-4 rounded-2xl space-y-2 border border-slate-100">
                  <span className="text-[10px] uppercase tracking-wider font-extrabold text-slate-400">
                    Customization Options
                  </span>
                  <div className="flex flex-wrap gap-2 text-xs font-semibold text-slate-700">
                    {prod.customization.map((c, i) => (
                      <span key={i} className="flex items-center gap-1 bg-white px-2.5 py-1 rounded-md border border-slate-200">
                        <Check className="w-3 h-3 text-emerald-500" />
                        <span>{c}</span>
                      </span>
                    ))}
                  </div>
                </div>

              </div>

              <div className="space-y-2 pt-2">
                <button
                  onClick={() => onOpenQuoteModal(prod.title)}
                  className="w-full bg-slate-900 hover:bg-indigo-600 text-white font-semibold py-3.5 px-4 rounded-xl text-sm transition-all shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2 active:scale-95"
                >
                  Request Custom Design
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
