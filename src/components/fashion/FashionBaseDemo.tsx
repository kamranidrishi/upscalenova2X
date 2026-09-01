import React, { useState } from 'react';
import { ShoppingBag, Heart, Search, Menu, X, Star, ArrowRight, ShieldCheck, Truck, RefreshCw } from 'lucide-react';
import { DemoItem } from '../../data/demos';
import { FASHION_PRODUCTS, FASHION_HERO_SLIDES, FashionProduct } from '../../data/fashionData';

interface FashionBaseDemoProps {
  demo: DemoItem;
  isMobile: boolean;
  isTablet: boolean;
}

export const FashionBaseDemo: React.FC<FashionBaseDemoProps> = ({ isMobile }) => {
  const [selectedProduct, setSelectedProduct] = useState<FashionProduct | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3000);
  };

  const filteredProducts = FASHION_PRODUCTS.filter(p =>
    activeCategory === 'All' ? true : p.category === activeCategory
  ).slice(0, 16);

  return (
    <div className="w-full h-full bg-[#0A0A0A] text-stone-100 font-sans antialiased overflow-y-auto selection:bg-white selection:text-black flex flex-col relative">
      {toastMessage && (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[999] bg-white text-black px-5 py-2.5 rounded-full text-xs font-bold shadow-2xl">
          {toastMessage}
        </div>
      )}

      {/* Top Banner */}
      <div className="bg-stone-900 border-b border-stone-800 py-1.5 px-4 text-center text-[10px] sm:text-xs font-medium tracking-widest uppercase text-stone-300">
        NOVA ATELIER • AUTUMN/WINTER 2026 COLLECTION
      </div>

      {/* Header */}
      <header className="sticky top-0 z-40 bg-[#0A0A0A]/95 backdrop-blur-md border-b border-stone-800 px-6 py-4 flex items-center justify-between">
        <div className="flex flex-col">
          <span className="font-serif tracking-[0.25em] text-2xl font-black text-white">NOVA</span>
          <span className="text-[9px] tracking-[0.3em] uppercase text-stone-400 font-mono">Define Your Style</span>
        </div>

        <nav className="hidden sm:flex items-center gap-6 text-xs font-semibold uppercase tracking-wider text-stone-300">
          {['All', 'Men', 'Women', 'Streetwear', 'Accessories'].map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`hover:text-white transition-colors ${activeCategory === cat ? 'text-white font-bold border-b border-white' : ''}`}
            >
              {cat}
            </button>
          ))}
        </nav>

        <button
          onClick={() => showToast('Order via WhatsApp: +91 98201 54321')}
          className="px-4 py-2 rounded-full bg-white text-black text-xs font-bold uppercase tracking-wider hover:bg-stone-200"
        >
          Inquire Drops
        </button>
      </header>

      {/* Hero */}
      <section className="relative aspect-[16/9] min-h-[360px] flex items-center bg-black overflow-hidden border-b border-stone-800">
        <img
          src={FASHION_HERO_SLIDES[0].image}
          alt="NOVA Lookbook"
          className="absolute inset-0 w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/50 to-transparent"></div>
        <div className="relative z-10 max-w-2xl px-6 sm:px-12 py-10 space-y-4">
          <span className="text-amber-400 text-xs font-mono font-bold tracking-widest uppercase">
            SEASON 01
          </span>
          <h1 className="font-serif text-3xl sm:text-5xl font-bold text-white leading-tight">
            New Season. New Energy.
          </h1>
          <p className="text-xs sm:text-sm text-stone-300">
            Redefining urban tailoring with heavy 280 GSM cotton and technical silhouettes.
          </p>
          <button
            onClick={() => {
              const el = document.getElementById('base-catalog');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}
            className="px-6 py-3 rounded-full bg-white text-black text-xs font-bold uppercase tracking-wider flex items-center gap-2"
          >
            <span>Explore Collection</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </section>

      {/* Catalog */}
      <section id="base-catalog" className="py-12 px-6 max-w-7xl mx-auto w-full space-y-8">
        <div className="flex items-center justify-between border-b border-stone-800 pb-4">
          <h2 className="font-serif text-2xl font-bold text-white">Curated Archive</h2>
          <span className="text-xs font-mono text-stone-400">NOVA BASE SELECTION</span>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {filteredProducts.map(product => (
            <div
              key={product.id}
              onClick={() => setSelectedProduct(product)}
              className="bg-stone-950 border border-stone-800 rounded-2xl overflow-hidden group cursor-pointer hover:border-stone-500 transition-all flex flex-col justify-between"
            >
              <div className="relative aspect-[3/4] bg-stone-900 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                {product.badge && (
                  <span className="absolute top-2.5 left-2.5 bg-white text-black text-[9px] font-black uppercase px-2 py-0.5 rounded shadow">
                    {product.badge}
                  </span>
                )}
              </div>
              <div className="p-3.5 space-y-1">
                <span className="text-[10px] font-mono text-stone-500 uppercase">{product.category}</span>
                <h3 className="text-xs font-bold text-white line-clamp-1">{product.name}</h3>
                <div className="flex items-center justify-between pt-1">
                  <span className="text-xs font-bold text-white">₹{product.price}</span>
                  <div className="flex items-center gap-1 text-[10px] text-amber-400">
                    <Star className="w-3 h-3 fill-amber-400" />
                    <span>{product.rating}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Quick Modal */}
      {selectedProduct && (
        <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4">
          <div className="bg-stone-950 border border-stone-800 rounded-3xl max-w-md w-full p-6 space-y-4 relative">
            <button
              onClick={() => setSelectedProduct(null)}
              className="absolute top-4 right-4 text-stone-400 hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>
            <img
              src={selectedProduct.image}
              alt={selectedProduct.name}
              className="w-full aspect-[4/3] object-cover rounded-2xl bg-stone-900"
            />
            <div className="space-y-1">
              <span className="text-[10px] font-mono uppercase text-stone-400">{selectedProduct.category}</span>
              <h3 className="font-serif text-xl font-bold text-white">{selectedProduct.name}</h3>
              <p className="text-lg font-bold text-white">₹{selectedProduct.price}</p>
            </div>
            <p className="text-xs text-stone-300 leading-relaxed">{selectedProduct.description}</p>
            <button
              onClick={() => {
                showToast(`Inquiry sent for ${selectedProduct.name}`);
                setSelectedProduct(null);
              }}
              className="w-full py-3 rounded-full bg-white text-black text-xs font-bold uppercase"
            >
              Direct Order Inquiries
            </button>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="mt-auto border-t border-stone-900 py-8 px-6 text-center text-xs text-stone-500 font-mono">
        © 2026 NOVA APPAREL INC. • NOVA BASE EDITION
      </footer>
    </div>
  );
};
