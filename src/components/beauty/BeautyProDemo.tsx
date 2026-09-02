import React, { useState, useMemo } from 'react';
import { DemoItem } from '../../data/demos';
import {
  BEAUTY_PRODUCTS,
  BEAUTY_CATEGORIES,
  BEAUTY_REVIEWS,
  BeautyProduct,
  ReviewItem
} from '../../data/beautyData';
import {
  Sparkles,
  Search,
  ShoppingBag,
  Heart,
  Star,
  Eye,
  Plus,
  Minus,
  Trash2,
  X,
  Check,
  CheckCircle2,
  ArrowRight,
  Shield,
  Truck,
  RotateCcw,
  Sparkle,
  Leaf,
  Droplets,
  MessageCircle,
  Phone,
  Mail,
  Instagram,
  Facebook,
  ChevronRight,
  Filter,
  SlidersHorizontal,
  User
} from 'lucide-react';

interface BeautyProDemoProps {
  demo: DemoItem;
  isMobile: boolean;
  isTablet: boolean;
}

interface CartItem {
  product: BeautyProduct;
  quantity: number;
  selectedVolume?: string;
  selectedShade?: string;
}

export const BeautyProDemo: React.FC<BeautyProDemoProps> = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedProduct, setSelectedProduct] = useState<BeautyProduct | null>(null);
  const [cartOpen, setCartOpen] = useState(false);
  const [cart, setCart] = useState<CartItem[]>([
    {
      product: BEAUTY_PRODUCTS[0], // Rose Gold Radiance Elixir
      quantity: 1,
      selectedVolume: '30 ml / 1.0 fl oz'
    },
    {
      product: BEAUTY_PRODUCTS[3], // Satin Peptide Lip Elixir
      quantity: 1,
      selectedVolume: '12 ml / 0.4 fl oz',
      selectedShade: 'Rose Quartz'
    }
  ]);
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterSuccess, setNewsletterSuccess] = useState(false);
  const [activeIngredientTab, setActiveIngredientTab] = useState<number>(0);
  const [activeQuickSize, setActiveQuickSize] = useState<string>('30 ml');
  const [addedToast, setAddedToast] = useState<string | null>(null);

  // Filtered products
  const filteredProducts = useMemo(() => {
    return BEAUTY_PRODUCTS.filter((prod) => {
      const matchCat = activeCategory === 'All' || prod.category === activeCategory;
      const matchSearch =
        searchQuery.trim() === '' ||
        prod.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        prod.subtitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
        prod.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
        prod.ingredients.some((ing) => ing.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchCat && matchSearch;
    });
  }, [activeCategory, searchQuery]);

  // Cart calculations
  const cartItemCount = cart.reduce((total, item) => total + item.quantity, 0);
  const cartSubtotal = cart.reduce((total, item) => total + item.product.price * item.quantity, 0);
  const freeShippingThreshold = 999;
  const freeShippingMet = cartSubtotal >= freeShippingThreshold;

  const addToCart = (product: BeautyProduct, volume?: string, shade?: string) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.product.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.product.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [
        ...prev,
        {
          product,
          quantity: 1,
          selectedVolume: volume || product.volume,
          selectedShade: shade || (product.shades ? product.shades[0].name : undefined)
        }
      ];
    });

    setAddedToast(`Added "${product.name}" to your luxury cart!`);
    setTimeout(() => setAddedToast(null), 3000);
  };

  const updateQuantity = (productId: string, delta: number) => {
    setCart((prev) =>
      prev
        .map((item) => {
          if (item.product.id === productId) {
            const newQty = item.quantity + delta;
            return newQty > 0 ? { ...item, quantity: newQty } : null;
          }
          return item;
        })
        .filter(Boolean) as CartItem[]
    );
  };

  const removeFromCart = (productId: string) => {
    setCart((prev) => prev.filter((item) => item.product.id !== productId));
  };

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail) return;
    setNewsletterSuccess(true);
    setTimeout(() => {
      setNewsletterSuccess(false);
      setNewsletterEmail('');
    }, 4000);
  };

  const ingredientSpotlights = [
    {
      name: 'Cold-Pressed Rosehip',
      origin: 'Patagonia, Chile',
      benefit: 'Rich in Pro-Vitamin A & Trans-Retinoic Acid to regenerate cellular lipid barriers.',
      clinical: 'Boosts dermal elasticity by +38% in 28 days.'
    },
    {
      name: 'Triple Hyaluronic Acid',
      origin: 'Biotechnological Fermentation',
      benefit: 'Multi-molecular weights penetrate the epidermis for deep 72-hour moisture reservoir.',
      clinical: 'Delivers +140% instant skin hydration surge.'
    },
    {
      name: 'Pure Niacinamide (5%)',
      origin: 'Pharmaceutical Grade',
      benefit: 'Minimizes enlarged pores, calms redness, and strengthens ceramide synthesis.',
      clinical: 'Fades post-blemish redness by 64%.'
    },
    {
      name: 'Natural Bakuchiol (2%)',
      origin: 'Ayurvedic Babchi Seed',
      benefit: 'Plant-derived retinol alternative that smooths fine lines with zero peeling or sun sensitivity.',
      clinical: 'Retinol-equivalent collagen boost without irritation.'
    }
  ];

  return (
    <div className="min-h-screen bg-[#FCF9F7] text-stone-800 font-sans selection:bg-rose-200 selection:text-rose-900">
      
      {/* Top Luxury Announcement Bar */}
      <div className="bg-gradient-to-r from-stone-900 via-rose-950 to-stone-900 text-white text-xs py-2 px-4 text-center font-medium tracking-wide flex items-center justify-center gap-2">
        <Sparkles className="w-3.5 h-3.5 text-rose-300 animate-pulse" />
        <span>FESTIVE GLOW SALE: Use code <strong>GLOW15</strong> for 15% OFF • Free Luxury Shipping above ₹999</span>
      </div>

      {/* Main Luxury Header */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-rose-100/90 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 sm:h-20 flex items-center justify-between gap-4">
          
          {/* Brand Logo */}
          <div className="flex items-center gap-3 shrink-0">
            <div 
              onClick={() => {
                setActiveCategory('All');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="flex items-center gap-2.5 sm:gap-3 cursor-pointer group"
            >
              <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-rose-100 to-rose-50 border border-rose-200 flex items-center justify-center text-rose-700 shadow-xs group-hover:scale-105 transition-transform">
                <Sparkles className="w-5 h-5" />
              </div>
              <div>
                <span className="font-serif text-xl sm:text-2xl font-bold tracking-wider text-stone-900 block leading-tight group-hover:text-rose-700 transition-colors">
                  AURA BOTANICALS
                </span>
                <span className="text-[10px] uppercase tracking-widest text-rose-600 font-bold block">
                  Advanced Clean Cosmetics & Skincare
                </span>
              </div>
            </div>
          </div>

          {/* Center Instant Search Bar */}
          <div className="hidden md:flex flex-1 max-w-md mx-4 relative">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search botanical serums, lip oils, ingredients..."
              className="w-full pl-10 pr-4 py-2 rounded-full bg-stone-50 border border-rose-200/80 text-xs text-stone-800 placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-rose-500/50 focus:bg-white transition-all shadow-2xs"
            />
            <Search className="w-4 h-4 text-stone-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-stone-400 hover:text-stone-700"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>

          {/* Right Header Actions */}
          <div className="flex items-center gap-3 sm:gap-4 shrink-0">
            {/* Top-Right Shopping Cart Drawer Trigger */}
            <button
              onClick={() => setCartOpen(true)}
              className="relative p-2.5 rounded-full bg-rose-50 hover:bg-rose-100 text-stone-900 border border-rose-200 transition-all flex items-center gap-2 cursor-pointer group"
              aria-label="Open Shopping Bag"
            >
              <ShoppingBag className="w-5 h-5 text-rose-700 group-hover:scale-105 transition-transform" />
              <span className="hidden sm:inline text-xs font-bold text-stone-800">
                Cart (₹{cartSubtotal.toLocaleString()})
              </span>
              {cartItemCount > 0 && (
                <span className="w-5 h-5 rounded-full bg-rose-600 text-white text-[10px] font-black flex items-center justify-center shadow-xs">
                  {cartItemCount}
                </span>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Search Bar */}
        <div className="md:hidden px-4 pb-3">
          <div className="relative">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search products or ingredients..."
              className="w-full pl-9 pr-3 py-2 rounded-xl bg-stone-50 border border-rose-200 text-xs text-stone-800 focus:outline-none focus:ring-2 focus:ring-rose-500"
            />
            <Search className="w-4 h-4 text-stone-400 absolute left-3 top-1/2 -translate-y-1/2" />
          </div>
        </div>
      </header>

      {/* Floating Add-to-Cart Toast */}
      {addedToast && (
        <div className="fixed top-24 right-4 z-50 bg-stone-900 text-white px-4 py-3 rounded-2xl shadow-2xl border border-rose-500/30 flex items-center gap-3 animate-in slide-in-from-right-4 duration-300">
          <div className="w-6 h-6 rounded-full bg-rose-500 text-white flex items-center justify-center shrink-0">
            <Check className="w-3.5 h-3.5" />
          </div>
          <span className="text-xs font-medium">{addedToast}</span>
        </div>
      )}

      {/* Hero Banner with Multi-badge Trust Bar */}
      <section className="relative pt-6 pb-12 sm:pt-12 sm:pb-18 overflow-hidden bg-gradient-to-b from-[#FFF5F3] via-[#FCF9F7] to-[#FCF9F7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Column (7 cols) */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-rose-100 border border-rose-200 text-rose-800 text-xs font-bold shadow-2xs">
                <Sparkle className="w-3.5 h-3.5 text-rose-600" />
                <span>The Clean Clinical Beauty Revolution</span>
              </div>

              <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-stone-900 leading-[1.15] tracking-tight">
                High-Potency Botanicals for <br />
                <span className="italic text-rose-700 font-normal">Luminous, Glass-Like</span> Radiance
              </h1>

              <p className="text-stone-600 text-sm sm:text-base leading-relaxed max-w-xl">
                Elevate your daily ritual with cold-pressed botanical elixirs, active multi-peptides, and pure damask rose hydrosols formulated without synthetic filler or harsh preservatives.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3.5 pt-2">
                <button
                  onClick={() => {
                    const el = document.getElementById('product-catalog');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="px-7 py-3.5 rounded-full bg-rose-600 hover:bg-rose-700 text-white text-xs sm:text-sm font-bold tracking-wider transition-all duration-200 shadow-md hover:shadow-lg flex items-center gap-2 active:scale-95"
                >
                  <span>Shop Best Sellers</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <button
                  onClick={() => setSelectedProduct(BEAUTY_PRODUCTS[0])}
                  className="px-6 py-3.5 rounded-full bg-white hover:bg-rose-50 text-stone-900 border border-stone-200 text-xs sm:text-sm font-bold transition-all flex items-center gap-2 shadow-2xs"
                >
                  <Eye className="w-4 h-4 text-rose-600" />
                  <span>View Iconic Rose Elixir</span>
                </button>
              </div>

              {/* Trust Indicators */}
              <div className="pt-6 grid grid-cols-3 gap-4 border-t border-rose-200/60 max-w-lg">
                <div className="flex items-center gap-2.5">
                  <Shield className="w-5 h-5 text-rose-600 shrink-0" />
                  <div>
                    <span className="text-xs font-bold text-stone-900 block">Derm Tested</span>
                    <span className="text-[10px] text-stone-500">100% Non-Comedogenic</span>
                  </div>
                </div>
                <div className="flex items-center gap-2.5">
                  <Leaf className="w-5 h-5 text-rose-600 shrink-0" />
                  <div>
                    <span className="text-xs font-bold text-stone-900 block">Cold-Pressed</span>
                    <span className="text-[10px] text-stone-500">Bio-Active Oils</span>
                  </div>
                </div>
                <div className="flex items-center gap-2.5">
                  <Truck className="w-5 h-5 text-rose-600 shrink-0" />
                  <div>
                    <span className="text-xs font-bold text-stone-900 block">Free Shipping</span>
                    <span className="text-[10px] text-stone-500">On Orders &gt; ₹999</span>
                  </div>
                </div>
              </div>

            </div>

            {/* Right Hero Image (5 cols) */}
            <div className="lg:col-span-5 relative">
              <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl border-4 border-white relative group">
                <img loading="lazy"
                  src="https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=1000&q=75"
                  alt="Aura Luxury Skincare"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950/70 via-transparent to-transparent"></div>
                
                <div className="absolute bottom-6 left-6 right-6 text-white space-y-2">
                  <span className="bg-rose-500 text-white text-[10px] font-black uppercase tracking-wider px-2.5 py-1 rounded-full">
                    Featured Ritual
                  </span>
                  <h3 className="font-serif text-xl font-bold">Rose Gold Radiance Trio</h3>
                  <p className="text-xs text-stone-200">The 3-step morning ritual for all-day luminous glass skin.</p>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* Promotional Editorial Cards Row */}
      <section className="py-8 bg-white border-y border-rose-100/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
            
            <div className="p-5 rounded-2xl bg-gradient-to-br from-[#FFF5F5] to-[#FAF2EE] border border-rose-100 flex items-center justify-between">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-rose-600 block">Limited Batch</span>
                <h4 className="font-serif text-base font-bold text-stone-900 mt-0.5">Hydra-Dew Rose Mist</h4>
                <p className="text-xs text-stone-500 mt-1">Damask Rose & Hyaluronic Hydration</p>
                <button
                  onClick={() => {
                    const prod = BEAUTY_PRODUCTS.find((p) => p.id === 'prod-3');
                    if (prod) setSelectedProduct(prod);
                  }}
                  className="mt-3 text-xs font-bold text-rose-700 hover:text-rose-800 flex items-center gap-1"
                >
                  <span>Quick View</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>
              <div className="w-20 h-20 rounded-xl overflow-hidden shadow-xs border border-rose-200/70 shrink-0">
                <img loading="lazy"
                  src="https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=200&q=75"
                  alt="Rose Mist"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-gradient-to-br from-[#F5F8FF] to-[#EFF4FE] border border-indigo-100 flex items-center justify-between">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-indigo-600 block">Night Recovery</span>
                <h4 className="font-serif text-base font-bold text-stone-900 mt-0.5">Bakuchiol Night Elixir</h4>
                <p className="text-xs text-stone-500 mt-1">Gentle Retinol Alternative</p>
                <button
                  onClick={() => {
                    const prod = BEAUTY_PRODUCTS.find((p) => p.id === 'prod-5');
                    if (prod) setSelectedProduct(prod);
                  }}
                  className="mt-3 text-xs font-bold text-indigo-700 hover:text-indigo-800 flex items-center gap-1"
                >
                  <span>Quick View</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>
              <div className="w-20 h-20 rounded-xl overflow-hidden shadow-xs border border-indigo-200/70 shrink-0">
                <img loading="lazy"
                  src="https://images.unsplash.com/photo-1608248597359-299f187a550c?auto=format&fit=crop&w=200&q=75"
                  alt="Bakuchiol Night Oil"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-gradient-to-br from-[#FFF9F2] to-[#FDF4EA] border border-amber-100 flex items-center justify-between">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-amber-700 block">Haute Perfumery</span>
                <h4 className="font-serif text-base font-bold text-stone-900 mt-0.5">Fleur Royale EDP</h4>
                <p className="text-xs text-stone-500 mt-1">Grasse Jasmine & Amber</p>
                <button
                  onClick={() => {
                    const prod = BEAUTY_PRODUCTS.find((p) => p.id === 'prod-6');
                    if (prod) setSelectedProduct(prod);
                  }}
                  className="mt-3 text-xs font-bold text-amber-800 hover:text-amber-900 flex items-center gap-1"
                >
                  <span>Quick View</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>
              <div className="w-20 h-20 rounded-xl overflow-hidden shadow-xs border border-amber-200/70 shrink-0">
                <img loading="lazy"
                  src="https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?auto=format&fit=crop&w=200&q=75"
                  alt="Fleur Royale Perfume"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Main Product Catalog Section with Live Category Filter & Search */}
      <section id="product-catalog" className="py-14 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Catalog Header & Category Pills */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-rose-600 block">Clean Luxury Catalog</span>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-stone-900 mt-1">
              Curated Botanical Formulations
            </h2>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap gap-2">
            {['All', 'Skincare', 'Makeup', 'Haircare', 'Body Care', 'Fragrance', 'Accessories'].map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs font-bold transition-all duration-200 ${
                  activeCategory === cat
                    ? 'bg-rose-600 text-white shadow-sm scale-102'
                    : 'bg-white text-stone-600 border border-stone-200 hover:border-rose-300 hover:bg-rose-50/50'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredProducts.map((prod) => (
            <div
              key={prod.id}
              className="group bg-white rounded-3xl border border-rose-100/90 overflow-hidden shadow-xs hover:shadow-xl hover:border-rose-300 transition-all duration-300 flex flex-col justify-between"
            >
              {/* Product Thumbnail Area */}
              <div className="aspect-square bg-rose-50/40 relative overflow-hidden">
                <img loading="lazy"
                  src={prod.image}
                  alt={prod.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                
                {/* Badge Overlay */}
                {prod.badge && (
                  <div className="absolute top-3 left-3">
                    <span className="bg-rose-600 text-white text-[10px] font-black uppercase tracking-wider px-2.5 py-1 rounded-md shadow-xs">
                      {prod.badge}
                    </span>
                  </div>
                )}

                {/* Quick View Button on Hover */}
                <div className="absolute inset-0 bg-stone-950/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center p-4">
                  <button
                    onClick={() => setSelectedProduct(prod)}
                    className="px-4 py-2 rounded-full bg-white text-stone-900 text-xs font-bold shadow-lg hover:bg-rose-600 hover:text-white transition-colors flex items-center gap-1.5"
                  >
                    <Eye className="w-3.5 h-3.5" />
                    <span>Quick Details</span>
                  </button>
                </div>

                <div className="absolute bottom-3 right-3">
                  <span className="bg-white/90 backdrop-blur-xs text-stone-800 text-[10px] font-bold px-2 py-0.5 rounded-md border border-rose-100">
                    {prod.volume}
                  </span>
                </div>
              </div>

              {/* Product Content */}
              <div className="p-5 space-y-3 flex flex-col justify-between flex-grow">
                <div>
                  {/* Category & Star Rating */}
                  <div className="flex items-center justify-between text-xs mb-1">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-rose-600">
                      {prod.category}
                    </span>
                    <div className="flex items-center gap-1 text-amber-500 font-bold text-xs">
                      <Star className="w-3.5 h-3.5 fill-amber-400" />
                      <span>{prod.rating}</span>
                      <span className="text-[10px] text-stone-400 font-normal">({prod.reviewsCount})</span>
                    </div>
                  </div>

                  <h3
                    onClick={() => setSelectedProduct(prod)}
                    className="font-serif text-base font-bold text-stone-900 group-hover:text-rose-600 transition-colors line-clamp-1 cursor-pointer"
                  >
                    {prod.name}
                  </h3>
                  <p className="text-xs text-stone-500 line-clamp-2 mt-1">
                    {prod.subtitle}
                  </p>
                </div>

                {/* Pricing & Add-To-Cart Action */}
                <div className="pt-3 border-t border-rose-100/80 flex items-center justify-between gap-2">
                  <div>
                    <span className="text-[11px] text-stone-400 line-through block leading-none">
                      ₹{prod.originalPrice}
                    </span>
                    <span className="text-base font-bold text-rose-700">
                      ₹{prod.price.toLocaleString()}
                    </span>
                  </div>

                  <button
                    onClick={() => addToCart(prod)}
                    className="px-3.5 py-2 rounded-xl bg-stone-900 hover:bg-rose-600 text-white text-xs font-bold transition-colors flex items-center gap-1.5 active:scale-95 shadow-xs"
                  >
                    <ShoppingBag className="w-3.5 h-3.5" />
                    <span>Add</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

      </section>

      {/* Interactive Botanical Science / Ingredients Spotlight */}
      <section className="py-14 sm:py-20 bg-white border-y border-rose-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-rose-600">Active Phytotherapy</span>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-stone-900">
              The Science of Clean Botanicals
            </h2>
            <p className="text-stone-600 text-xs sm:text-sm">
              Discover why our cold-pressed active compounds deliver clinically proven results.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Tabs List */}
            <div className="lg:col-span-5 space-y-2.5">
              {ingredientSpotlights.map((item, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveIngredientTab(idx)}
                  className={`w-full text-left p-4 rounded-2xl border transition-all flex items-center justify-between ${
                    activeIngredientTab === idx
                      ? 'bg-rose-50 border-rose-300 shadow-xs'
                      : 'bg-stone-50/60 border-stone-200 hover:bg-rose-50/40'
                  }`}
                >
                  <div>
                    <span className="text-xs font-bold text-stone-900 block">{item.name}</span>
                    <span className="text-[11px] text-stone-500">{item.origin}</span>
                  </div>
                  <ChevronRight
                    className={`w-4 h-4 text-rose-600 transition-transform ${
                      activeIngredientTab === idx ? 'translate-x-1' : ''
                    }`}
                  />
                </button>
              ))}
            </div>

            {/* Active Ingredient Details Card */}
            <div className="lg:col-span-7 bg-[#FAF7F5] p-6 sm:p-8 rounded-3xl border border-rose-100 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-200/70 text-rose-800 text-xs font-bold">
                <Leaf className="w-3.5 h-3.5 text-rose-700" />
                <span>Harvested from {ingredientSpotlights[activeIngredientTab].origin}</span>
              </div>
              <h3 className="font-serif text-2xl font-bold text-stone-900">
                {ingredientSpotlights[activeIngredientTab].name}
              </h3>
              <p className="text-stone-600 text-sm leading-relaxed">
                {ingredientSpotlights[activeIngredientTab].benefit}
              </p>
              <div className="p-4 bg-white rounded-2xl border border-rose-200/80 flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                <span className="text-xs font-bold text-stone-800">
                  Clinical Study: {ingredientSpotlights[activeIngredientTab].clinical}
                </span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Customer Reviews & Testimonials Carousel / Grid */}
      <section className="py-14 sm:py-20 bg-[#FCF9F7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-rose-600">Real Verified Experiences</span>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-stone-900">
              Loved by 12,000+ Clean Beauty Enthusiasts
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {BEAUTY_REVIEWS.map((rev) => (
              <div
                key={rev.id}
                className="bg-white p-6 rounded-3xl border border-rose-100 shadow-xs flex flex-col justify-between space-y-4"
              >
                <div className="space-y-3">
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>
                  <h4 className="font-serif text-sm font-bold text-stone-900 leading-snug">
                    "{rev.title}"
                  </h4>
                  <p className="text-xs text-stone-600 leading-relaxed">
                    {rev.comment}
                  </p>
                </div>

                <div className="pt-3 border-t border-rose-50 flex items-center gap-3">
                  <img loading="lazy"
                    src={rev.avatar}
                    alt={rev.author}
                    className="w-9 h-9 rounded-full object-cover border border-rose-200"
                  />
                  <div>
                    <span className="text-xs font-bold text-stone-900 block">{rev.author}</span>
                    <span className="text-[10px] text-emerald-600 font-semibold flex items-center gap-1">
                      <Check className="w-3 h-3" /> Verified Buyer
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* VIP Newsletter Section */}
      <section className="py-14 bg-stone-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-rose-400 bg-rose-950/80 px-3.5 py-1 rounded-full border border-rose-800">
            Aura Beauty Club
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl font-bold tracking-tight">
            Receive 15% Off Your First Botanical Ritual
          </h2>
          <p className="text-stone-300 text-xs sm:text-sm max-w-md mx-auto">
            Subscribe for exclusive access to small-batch launches, seasonal ritual guides, and member-only promotions.
          </p>

          {newsletterSuccess ? (
            <div className="p-4 bg-rose-950 border border-rose-700 rounded-2xl max-w-md mx-auto text-xs text-rose-200 flex items-center justify-center gap-2">
              <Check className="w-4 h-4 text-emerald-400" />
              <span>Use discount code <strong>GLOW15</strong> at checkout for 15% OFF!</span>
            </div>
          ) : (
            <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto pt-2">
              <input
                type="email"
                required
                value={newsletterEmail}
                onChange={(e) => setNewsletterEmail(e.target.value)}
                placeholder="Enter your email address..."
                className="flex-1 px-4 py-3 rounded-full bg-stone-800 border border-stone-700 text-xs text-white placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-rose-500"
              />
              <button
                type="submit"
                className="px-6 py-3 rounded-full bg-rose-600 hover:bg-rose-500 text-white text-xs font-bold tracking-wider transition-all shadow-md"
              >
                Claim 15% Off
              </button>
            </form>
          )}
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SHOPPING CART DRAWER (Top-Right Slide-Over)                                */}
      {/* ========================================================================= */}
      {cartOpen && (
        <div className="fixed inset-0 z-50 flex justify-end bg-stone-950/70 backdrop-blur-xs animate-in fade-in duration-200">
          <div className="bg-white w-full max-w-md h-full shadow-2xl flex flex-col justify-between overflow-hidden animate-in slide-in-from-right duration-300 border-l border-rose-100">
            
            {/* Cart Header */}
            <div className="p-4 sm:p-5 border-b border-rose-100 flex items-center justify-between bg-[#FAF7F5]">
              <div className="flex items-center gap-2">
                <ShoppingBag className="w-5 h-5 text-rose-700" />
                <h3 className="font-serif text-base sm:text-lg font-bold text-stone-900">
                  Your Beauty Bag ({cartItemCount})
                </h3>
              </div>
              <button
                onClick={() => setCartOpen(false)}
                className="p-1.5 rounded-full hover:bg-rose-100 text-stone-500 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Free Shipping Meter */}
            <div className="p-3 bg-rose-50/80 border-b border-rose-100 px-5 text-xs text-stone-700">
              {freeShippingMet ? (
                <div className="flex items-center gap-1.5 text-emerald-700 font-bold">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>Congratulations! You've unlocked FREE Express Shipping.</span>
                </div>
              ) : (
                <div>
                  <span>
                    Add <strong>₹{(freeShippingThreshold - cartSubtotal).toLocaleString()}</strong> more to qualify for <strong>FREE Shipping</strong>!
                  </span>
                  <div className="w-full h-1.5 bg-rose-200 rounded-full mt-2 overflow-hidden">
                    <div
                      className="h-full bg-rose-600 rounded-full transition-all duration-300"
                      style={{ width: `${Math.min(100, (cartSubtotal / freeShippingThreshold) * 100)}%` }}
                    ></div>
                  </div>
                </div>
              )}
            </div>

            {/* Cart Items List */}
            <div className="flex-1 overflow-y-auto p-4 sm:p-5 space-y-4">
              {cart.length === 0 ? (
                <div className="text-center py-16 space-y-3">
                  <ShoppingBag className="w-12 h-12 text-rose-200 mx-auto" />
                  <p className="font-serif text-base font-bold text-stone-900">Your bag is empty</p>
                  <p className="text-xs text-stone-500">Discover our bestselling cold-pressed botanical essentials.</p>
                  <button
                    onClick={() => setCartOpen(false)}
                    className="mt-2 px-5 py-2 rounded-full bg-rose-600 text-white text-xs font-bold"
                  >
                    Start Exploring
                  </button>
                </div>
              ) : (
                cart.map((item) => (
                  <div
                    key={item.product.id}
                    className="flex gap-3.5 p-3 rounded-2xl bg-[#FCF9F7] border border-rose-100"
                  >
                    <div className="w-16 h-16 rounded-xl overflow-hidden bg-white border border-rose-200/80 shrink-0">
                      <img loading="lazy"
                        src={item.product.image}
                        alt={item.product.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    
                    <div className="flex-1 min-w-0 space-y-1">
                      <div className="flex items-start justify-between gap-1">
                        <h4 className="font-serif text-xs sm:text-sm font-bold text-stone-900 truncate">
                          {item.product.name}
                        </h4>
                        <button
                          onClick={() => removeFromCart(item.product.id)}
                          className="text-stone-400 hover:text-rose-600 transition-colors p-0.5"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>

                      <span className="text-[10px] text-stone-500 block">
                        {item.selectedVolume || item.product.volume}
                        {item.selectedShade ? ` • ${item.selectedShade}` : ''}
                      </span>

                      <div className="flex items-center justify-between pt-1">
                        <div className="flex items-center gap-2 bg-white border border-stone-200 rounded-lg p-0.5">
                          <button
                            onClick={() => updateQuantity(item.product.id, -1)}
                            className="p-1 hover:bg-stone-100 rounded text-stone-600"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="text-xs font-bold px-1">{item.quantity}</span>
                          <button
                            onClick={() => updateQuantity(item.product.id, 1)}
                            className="p-1 hover:bg-stone-100 rounded text-stone-600"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>

                        <span className="text-xs font-bold text-rose-700">
                          ₹{(item.product.price * item.quantity).toLocaleString()}
                        </span>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>

            {/* Cart Footer */}
            {cart.length > 0 && (
              <div className="p-4 sm:p-5 border-t border-rose-100 bg-[#FAF7F5] space-y-3">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-stone-500">Subtotal:</span>
                  <span className="font-bold text-stone-900">₹{cartSubtotal.toLocaleString()}</span>
                </div>
                <div className="flex items-center justify-between text-xs">
                  <span className="text-stone-500">Estimated Shipping:</span>
                  <span className="font-bold text-emerald-600">
                    {freeShippingMet ? 'FREE' : '₹99'}
                  </span>
                </div>
                <div className="pt-2 border-t border-rose-200/80 flex items-center justify-between">
                  <span className="font-serif text-sm font-bold text-stone-900">Total:</span>
                  <span className="font-serif text-base font-bold text-rose-700">
                    ₹{(cartSubtotal + (freeShippingMet ? 0 : 99)).toLocaleString()}
                  </span>
                </div>

                <button
                  onClick={() => {
                    alert('Order initiated! In the ₹54,999 Max version, this opens the full 3-step checkout with instant UPI & card payments.');
                  }}
                  className="w-full py-3.5 rounded-full bg-rose-600 hover:bg-rose-700 text-white font-bold text-xs tracking-wider transition-all shadow-md active:scale-95 flex items-center justify-center gap-2"
                >
                  <span>Proceed to Checkout</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <p className="text-[10px] text-center text-stone-400">
                  🔒 100% Secure Checkout • Cruelty Free Guarantee
                </p>
              </div>
            )}

          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* INTERACTIVE PRODUCT QUICK VIEW MODAL                                      */}
      {/* ========================================================================= */}
      {selectedProduct && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-950/75 backdrop-blur-xs animate-in fade-in">
          <div className="bg-white w-full max-w-2xl rounded-3xl shadow-2xl overflow-hidden border border-rose-100 flex flex-col md:flex-row max-h-[90vh]">
            
            {/* Modal Image */}
            <div className="md:w-1/2 aspect-square md:aspect-auto relative bg-rose-50">
              <img loading="lazy"
                src={selectedProduct.image}
                alt={selectedProduct.name}
                className="w-full h-full object-cover"
              />
              <button
                onClick={() => setSelectedProduct(null)}
                className="md:hidden absolute top-3 right-3 p-1.5 rounded-full bg-white/90 text-stone-700 shadow-md"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Modal Details */}
            <div className="md:w-1/2 p-6 sm:p-8 overflow-y-auto space-y-4 flex flex-col justify-between">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-rose-600 bg-rose-50 px-2.5 py-1 rounded-md">
                    {selectedProduct.category}
                  </span>
                  <button
                    onClick={() => setSelectedProduct(null)}
                    className="hidden md:block text-stone-400 hover:text-stone-700 p-1"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>

                <h3 className="font-serif text-xl font-bold text-stone-900">
                  {selectedProduct.name}
                </h3>

                <div className="flex items-center gap-2">
                  <div className="flex items-center text-amber-500 font-bold text-xs">
                    <Star className="w-3.5 h-3.5 fill-amber-400" />
                    <span className="ml-1">{selectedProduct.rating}</span>
                  </div>
                  <span className="text-xs text-stone-400">({selectedProduct.reviewsCount} verified reviews)</span>
                </div>

                <div className="flex items-baseline gap-2">
                  <span className="text-xl font-bold text-rose-700">
                    ₹{selectedProduct.price.toLocaleString()}
                  </span>
                  <span className="text-xs text-stone-400 line-through">
                    ₹{selectedProduct.originalPrice}
                  </span>
                </div>

                <p className="text-xs text-stone-600 leading-relaxed">
                  {selectedProduct.description}
                </p>

                {/* Key Ingredients */}
                <div className="pt-2 border-t border-rose-100">
                  <span className="text-[11px] font-bold text-stone-900 block mb-1.5">Key Botanicals:</span>
                  <div className="flex flex-wrap gap-1.5">
                    {selectedProduct.ingredients.slice(0, 3).map((ing, i) => (
                      <span key={i} className="text-[10px] bg-[#FAF7F5] border border-rose-100 px-2 py-0.5 rounded-md text-stone-700">
                        {ing}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Add To Cart from Modal */}
              <div className="pt-4 border-t border-rose-100 space-y-2">
                <button
                  onClick={() => {
                    addToCart(selectedProduct);
                    setSelectedProduct(null);
                    setCartOpen(true);
                  }}
                  className="w-full py-3.5 rounded-full bg-rose-600 hover:bg-rose-700 text-white font-bold text-xs tracking-wider transition-all shadow-md flex items-center justify-center gap-2"
                >
                  <ShoppingBag className="w-4 h-4" />
                  <span>Add to Bag • ₹{selectedProduct.price.toLocaleString()}</span>
                </button>
              </div>
            </div>

          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="py-12 bg-white border-t border-rose-100 text-stone-600 text-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-stone-900 font-serif font-bold text-base">
                <Sparkles className="w-4 h-4 text-rose-600" />
                <span>AURA BOTANICALS</span>
              </div>
              <p className="text-[11px] text-stone-500 leading-relaxed">
                Handcrafted clean beauty and cold-pressed botanical cosmetics engineered for modern skin wellness.
              </p>
            </div>

            <div>
              <span className="font-bold text-stone-900 text-xs block mb-3">Ritual Categories</span>
              <ul className="space-y-1.5 text-[11px] text-stone-500">
                <li><button onClick={() => setActiveCategory('Skincare')} className="hover:text-rose-600">Pure Skincare</button></li>
                <li><button onClick={() => setActiveCategory('Makeup')} className="hover:text-rose-600">Peptide Lip Tints</button></li>
                <li><button onClick={() => setActiveCategory('Haircare')} className="hover:text-rose-600">Scalp Wellness</button></li>
                <li><button onClick={() => setActiveCategory('Fragrance')} className="hover:text-rose-600">French Perfumery</button></li>
              </ul>
            </div>

            <div>
              <span className="font-bold text-stone-900 text-xs block mb-3">Our Guarantees</span>
              <ul className="space-y-1.5 text-[11px] text-stone-500">
                <li>✓ 100% Cruelty-Free & Vegan</li>
                <li>✓ Dermatologically Verified</li>
                <li>✓ Recyclable Amber Glass Packaging</li>
                <li>✓ Cold-Formulated in Small Batches</li>
              </ul>
            </div>

            <div>
              <span className="font-bold text-stone-900 text-xs block mb-3">Customer Concierge</span>
              <p className="text-[11px] text-stone-500">care@aurabotanicals.com</p>
              <p className="text-[11px] text-stone-500 mt-1">+91 98765 43210 (Mon-Sat, 9am-7pm)</p>
            </div>
          </div>

          <div className="pt-6 border-t border-rose-100 flex flex-col sm:flex-row items-center justify-between gap-2 text-[11px] text-stone-400">
            <span>© {new Date().getFullYear()} Aura Botanicals Beauty. All rights reserved.</span>
            <span>Clean Formulations • Zero Parabens • Zero Sulfates</span>
          </div>

        </div>
      </footer>

    </div>
  );
};
