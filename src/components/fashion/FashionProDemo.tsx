import React, { useState } from 'react';
import { ShoppingBag, Heart, Search, Star, ArrowRight, X, SlidersHorizontal, Check } from 'lucide-react';
import { DemoItem } from '../../data/demos';
import { FASHION_PRODUCTS, FASHION_HERO_SLIDES, FashionProduct } from '../../data/fashionData';

interface FashionProDemoProps {
  demo: DemoItem;
  isMobile: boolean;
  isTablet: boolean;
}

export const FashionProDemo: React.FC<FashionProDemoProps> = ({ isMobile }) => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [cart, setCart] = useState<{ product: FashionProduct; qty: number }[]>([]);
  const [cartOpen, setCartOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<FashionProduct | null>(null);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3000);
  };

  const handleAddToCart = (product: FashionProduct) => {
    setCart(prev => {
      const existing = prev.find(item => item.product.id === product.id);
      if (existing) {
        return prev.map(item => item === existing ? { ...item, qty: item.qty + 1 } : item);
      }
      return [...prev, { product, qty: 1 }];
    });
    showToast(`Added ${product.name} to Bag! 🛍️`);
  };

  const filteredProducts = FASHION_PRODUCTS.filter(p => {
    if (activeCategory !== 'All' && p.category !== activeCategory) return false;
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      return p.name.toLowerCase().includes(q) || p.subcategory.toLowerCase().includes(q);
    }
    return true;
  });

  const cartTotal = cart.reduce((sum, item) => sum + item.product.price * item.qty, 0);

  return (
    <div className="w-full h-full bg-[#0A0A0A] text-stone-100 font-sans antialiased overflow-y-auto selection:bg-white selection:text-black flex flex-col relative">
      {toastMessage && (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[999] bg-white text-black px-5 py-2.5 rounded-full text-xs font-bold shadow-2xl">
          {toastMessage}
        </div>
      )}

      {/* Header */}
      <header className="sticky top-0 z-40 bg-[#0A0A0A]/95 backdrop-blur-md border-b border-stone-800 px-6 py-4 flex items-center justify-between">
        <div className="flex flex-col">
          <span className="font-serif tracking-[0.25em] text-2xl font-black text-white">NOVA</span>
          <span className="text-[9px] tracking-[0.3em] uppercase text-stone-400 font-mono">Define Your Style</span>
        </div>

        {/* Live Search */}
        <div className="hidden sm:flex items-center bg-stone-900 border border-stone-800 rounded-full px-4 py-2 w-72">
          <Search className="w-4 h-4 text-stone-400 mr-2" />
          <input
            type="text"
            placeholder="Search silhouettes..."
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
            className="bg-transparent text-xs text-white placeholder-stone-500 focus:outline-none w-full"
          />
          {searchQuery && (
            <button onClick={() => setSearchQuery('')} className="text-stone-500 text-xs">
              <X className="w-3.5 h-3.5" />
            </button>
          )}
        </div>

        <button
          onClick={() => setCartOpen(true)}
          className="p-2 rounded-full bg-stone-900 border border-stone-800 text-white px-3.5 py-1.5 flex items-center gap-2 text-xs font-bold"
        >
          <ShoppingBag className="w-4 h-4" />
          <span>{cart.reduce((a, b) => a + b.qty, 0)}</span>
        </button>
      </header>

      {/* Hero */}
      <section className="relative aspect-[21/9] min-h-[380px] flex items-center bg-black overflow-hidden border-b border-stone-800">
        <img
          src={FASHION_HERO_SLIDES[1].image}
          alt="NOVA Pro"
          className="absolute inset-0 w-full h-full object-cover opacity-55"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/60 to-transparent"></div>
        <div className="relative z-10 max-w-2xl px-6 sm:px-12 py-10 space-y-4">
          <span className="text-amber-400 text-xs font-mono font-bold tracking-widest uppercase">
            PRO FASHION STOREFRONT
          </span>
          <h1 className="font-serif text-3xl sm:text-5xl font-bold text-white leading-tight">
            Elevate Your Everyday.
          </h1>
          <p className="text-xs sm:text-sm text-stone-300">
            Interactive search, live bag drawers, and multi-angle product catalogs.
          </p>
        </div>
      </section>

      {/* Filter Tabs */}
      <div className="px-6 max-w-7xl mx-auto w-full pt-8 flex items-center justify-between gap-4 border-b border-stone-800 pb-4">
        <div className="flex items-center gap-2 overflow-x-auto no-scrollbar">
          {['All', 'Men', 'Women', 'Streetwear', 'Accessories'].map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-1.5 rounded-full text-xs font-bold uppercase ${
                activeCategory === cat ? 'bg-white text-black' : 'bg-stone-900 text-stone-400 hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
        <span className="text-xs font-mono text-stone-500">{filteredProducts.length} DESIGNS</span>
      </div>

      {/* Products Grid */}
      <section className="py-8 px-6 max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {filteredProducts.map(product => (
            <div
              key={product.id}
              className="bg-stone-950 border border-stone-800 rounded-2xl overflow-hidden group cursor-pointer hover:border-stone-500 transition-all flex flex-col justify-between"
              onClick={() => setSelectedProduct(product)}
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
              <div className="p-4 space-y-2">
                <span className="text-[10px] font-mono text-stone-500 uppercase">{product.category}</span>
                <h3 className="text-xs font-bold text-white line-clamp-1">{product.name}</h3>
                <div className="flex items-center justify-between pt-1">
                  <span className="text-xs font-bold text-white">₹{product.price}</span>
                  <button
                    onClick={e => {
                      e.stopPropagation();
                      handleAddToCart(product);
                    }}
                    className="px-2.5 py-1 rounded-lg bg-stone-800 hover:bg-white hover:text-black text-stone-200 text-[10px] font-bold uppercase transition-colors"
                  >
                    + Add
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Cart Drawer */}
      {cartOpen && (
        <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex justify-end">
          <div className="bg-stone-950 border-l border-stone-800 w-full max-w-md h-full flex flex-col justify-between p-6 shadow-2xl">
            <div className="flex items-center justify-between border-b border-stone-800 pb-4">
              <h3 className="font-serif text-lg font-bold text-white">Shopping Bag</h3>
              <button onClick={() => setCartOpen(false)} className="text-stone-400 hover:text-white">
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="flex-1 overflow-y-auto py-4 space-y-3">
              {cart.map((item, i) => (
                <div key={i} className="flex gap-3 bg-stone-900/60 p-3 rounded-xl border border-stone-800">
                  <img src={item.product.image} alt="" className="w-14 h-18 object-cover rounded-lg" />
                  <div className="flex-1">
                    <h4 className="text-xs font-bold text-white">{item.product.name}</h4>
                    <p className="text-xs text-stone-400">₹{item.product.price} x {item.qty}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="border-t border-stone-800 pt-4 space-y-3">
              <div className="flex justify-between text-sm font-bold text-white">
                <span>Total:</span>
                <span>₹{cartTotal}</span>
              </div>
              <button
                onClick={() => {
                  showToast('Checkout simulated in PRO demo! Switch to MAX for full 5-step checkout.');
                  setCartOpen(false);
                }}
                className="w-full py-3 rounded-full bg-white text-black text-xs font-bold uppercase"
              >
                Proceed to Checkout
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Detail Modal */}
      {selectedProduct && (
        <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4">
          <div className="bg-stone-950 border border-stone-800 rounded-3xl max-w-lg w-full p-6 space-y-4 relative">
            <button onClick={() => setSelectedProduct(null)} className="absolute top-4 right-4 text-stone-400 hover:text-white">
              <X className="w-5 h-5" />
            </button>
            <img src={selectedProduct.image} alt="" className="w-full aspect-[4/3] object-cover rounded-2xl bg-stone-900" />
            <h3 className="font-serif text-xl font-bold text-white">{selectedProduct.name}</h3>
            <p className="text-sm font-bold text-white">₹{selectedProduct.price}</p>
            <p className="text-xs text-stone-300">{selectedProduct.description}</p>
            <button
              onClick={() => {
                handleAddToCart(selectedProduct);
                setSelectedProduct(null);
              }}
              className="w-full py-3 rounded-full bg-white text-black text-xs font-bold uppercase"
            >
              Add to Bag
            </button>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="mt-auto border-t border-stone-900 py-8 px-6 text-center text-xs text-stone-500 font-mono">
        © 2026 NOVA APPAREL INC. • NOVA PRO EDITION
      </footer>
    </div>
  );
};
