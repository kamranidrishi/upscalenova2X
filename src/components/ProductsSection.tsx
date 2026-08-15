import React, { useState } from 'react';
import { QrCode, Phone, Sparkles, Check, Share2, Utensils, Link, Wifi } from 'lucide-react';
import { PRODUCTS, COMPANY_PHONE_DISPLAY, CALL_LINK, COMPANY_LOGO } from '../data/content';

interface ProductsProps {
  onOpenQuoteModal: (productTitle: string) => void;
}

export const ProductsSection: React.FC<ProductsProps> = ({ onOpenQuoteModal }) => {
  // Interactive Customizer State for testing
  const [selectedProduct, setSelectedProduct] = useState(PRODUCTS[0]);
  const [customName, setCustomName] = useState('Prithvi Cafe & Restaurant');
  const [customColor, setCustomColor] = useState('#4F46E5'); // indigo
  const [customTagline, setTagline] = useState('Loved Our Food? Tap or Scan to Review Us!');

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
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-50 border border-purple-100 text-purple-700 text-xs font-bold">
            <Sparkles className="w-3.5 h-3.5" />
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PRODUCTS.map((prod) => (
            <div
              key={prod.id}
              className="bg-white rounded-3xl p-6 shadow-sm hover:shadow-2xl border border-slate-100 flex flex-col justify-between transition-all duration-300 space-y-6 group"
            >
              <div className="space-y-6">
                
                {/* Visual Stand / Card Mockup Header */}
                <div className="w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-sm border border-slate-100 transition-transform group-hover:scale-[1.02]">
                  {prod.image ? (
                    <img 
                      src={prod.image} 
                      alt={prod.title} 
                      className="w-full h-full object-cover"
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
                  className="w-full bg-slate-900 hover:bg-indigo-600 text-white font-bold py-3 px-4 rounded-2xl text-xs sm:text-sm transition-colors shadow-xs"
                >
                  Request Custom Design
                </button>
              </div>

            </div>
          ))}
        </div>

        {/* Live Interactive NFC/QR Customizer Playground */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-xl space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-bold text-indigo-600 uppercase tracking-widest">Interactive Playground</span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              Preview Your Custom Business Stand
            </h3>
            <p className="text-slate-600 text-sm">
              Type your business details below to see how your NFC card or table QR stand will look!
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Controls Left */}
            <div className="lg:col-span-6 space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Select Product Type</label>
                <select
                  value={selectedProduct.id}
                  onChange={(e) => {
                    const found = PRODUCTS.find(p => p.id === e.target.value);
                    if (found) setSelectedProduct(found);
                  }}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-sm font-semibold text-slate-800 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                >
                  {PRODUCTS.map(p => (
                    <option key={p.id} value={p.id}>{p.title}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Your Business / Brand Name</label>
                <input
                  type="text"
                  value={customName}
                  onChange={(e) => setCustomName(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-sm font-semibold text-slate-800 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  placeholder="e.g. Prithvi Cafe"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Call To Action Tagline</label>
                <input
                  type="text"
                  value={customTagline}
                  onChange={(e) => setTagline(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-sm font-semibold text-slate-800 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  placeholder="e.g. Tap or Scan for 5-Star Review!"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-2">Accent Brand Color</label>
                <div className="flex items-center gap-3">
                  {['#4F46E5', '#10B981', '#EC4899', '#F59E0B', '#111827'].map((c) => (
                    <button
                      key={c}
                      onClick={() => setCustomColor(c)}
                      className={`w-9 h-9 rounded-full border-2 transition-transform ${customColor === c ? 'scale-110 border-slate-900 shadow-md' : 'border-transparent'}`}
                      style={{ backgroundColor: c }}
                      aria-label="Select color"
                    />
                  ))}
                </div>
              </div>

              <div className="pt-4 flex flex-col sm:flex-row gap-3">
                <button
                  onClick={() => onOpenQuoteModal(`Custom ${selectedProduct.title} for ${customName}`)}
                  className="flex-1 bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-6 rounded-xl text-sm transition-all shadow-md"
                >
                  Order This Design
                </button>
              </div>
            </div>

            {/* Mockup Preview Right */}
            <div className="lg:col-span-6 flex justify-center">
              <div
                className="w-full max-w-sm h-80 rounded-3xl p-6 text-white flex flex-col justify-between shadow-2xl relative transition-all duration-300"
                style={{ backgroundColor: customColor }}
              >
                <div className="flex items-center justify-between border-b border-white/20 pb-4">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-lg bg-white p-1 flex items-center justify-center shrink-0">
                      <img src={COMPANY_LOGO} alt="Upscale Nova" className="w-full h-full object-contain" />
                    </div>
                    <span className="font-extrabold text-sm tracking-wide">Upscale Nova</span>
                  </div>
                  <span className="text-[10px] font-bold uppercase bg-white/20 px-2.5 py-1 rounded-md">
                    SMART STAND
                  </span>
                </div>

                <div className="text-center space-y-2 my-auto">
                  <div className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-2xl mx-auto flex items-center justify-center border border-white/30">
                    <QrCode className="w-10 h-10 text-white" />
                  </div>
                  <h4 className="font-extrabold text-xl leading-tight">
                    {customName || 'Your Business Name'}
                  </h4>
                  <p className="text-xs text-white/90 font-medium max-w-xs mx-auto">
                    {customTagline || 'Loved Our Service? Leave Us a Review.'}
                  </p>
                </div>

                <div className="border-t border-white/20 pt-3 text-center text-[10px] text-white/80 font-mono">
                  Powered by Upscale Nova • Contact Us
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
