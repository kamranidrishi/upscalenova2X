import React, { useState } from 'react';
import { DemoItem } from '../../data/demos';
import { BEAUTY_PRODUCTS, BEAUTY_CATEGORIES } from '../../data/beautyData';
import {
  Sparkles,
  Phone,
  Mail,
  MapPin,
  ArrowRight,
  CheckCircle2,
  Send,
  Heart,
  ShieldCheck,
  Leaf,
  MessageCircle,
  ExternalLink
} from 'lucide-react';

interface BeautyBaseDemoProps {
  demo: DemoItem;
  isMobile: boolean;
  isTablet: boolean;
}

export const BeautyBaseDemo: React.FC<BeautyBaseDemoProps> = () => {
  const [contactSubmitted, setContactSubmitted] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    interestedCategory: 'Skincare',
    message: ''
  });

  const scrollTo = (id: string) => {
    const elem = document.getElementById(id);
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;
    setContactSubmitted(true);
    setTimeout(() => {
      setContactSubmitted(false);
      setFormData({
        name: '',
        phone: '',
        email: '',
        interestedCategory: 'Skincare',
        message: ''
      });
    }, 4000);
  };

  // Base version shows clean curated hero products
  const displayedProducts = BEAUTY_PRODUCTS.slice(0, 8);

  return (
    <div className="min-h-screen bg-[#FAF7F5] text-stone-800 font-sans selection:bg-rose-100 selection:text-rose-900">
      
      {/* Top Essential Header */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-rose-100 shadow-xs">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 sm:h-20 flex items-center justify-between">
          
          {/* Brand Logo */}
          <div 
            onClick={() => {
              setSelectedCategory('All');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="flex items-center gap-2.5 cursor-pointer"
          >
            <div className="w-9 h-9 rounded-full bg-rose-50 border border-rose-200 flex items-center justify-center text-rose-600">
              <Sparkles className="w-4 h-4" />
            </div>
            <div>
              <span className="font-serif text-lg sm:text-xl font-bold tracking-widest text-stone-900 block leading-tight">
                AURA BOTANICALS
              </span>
              <span className="text-[10px] uppercase tracking-widest text-rose-500 font-medium block">
                Pure Cosmetics & Skincare
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-stone-600">
            <button onClick={() => scrollTo('hero')} className="hover:text-rose-600 transition-colors">Home</button>
            <button onClick={() => scrollTo('categories')} className="hover:text-rose-600 transition-colors">Categories</button>
            <button onClick={() => scrollTo('featured')} className="hover:text-rose-600 transition-colors">Featured</button>
            <button onClick={() => scrollTo('about')} className="hover:text-rose-600 transition-colors">About Story</button>
            <button onClick={() => scrollTo('contact')} className="hover:text-rose-600 transition-colors">Contact</button>
          </nav>

          {/* Direct WhatsApp Call-To-Action */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => scrollTo('contact')}
              className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-full bg-rose-600 hover:bg-rose-700 text-white text-xs font-semibold tracking-wide transition-all shadow-sm active:scale-95"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>Direct Enquiry</span>
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="hero" className="relative pt-8 pb-14 sm:pt-14 sm:pb-20 overflow-hidden bg-gradient-to-b from-[#FFF5F3] via-[#FAF7F5] to-[#FAF7F5]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            
            {/* Left Content */}
            <div className="space-y-6 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-rose-100/80 border border-rose-200/80 text-rose-700 text-xs font-semibold">
                <Leaf className="w-3.5 h-3.5" />
                <span>100% Organic & Cold-Pressed Botanicals</span>
              </div>

              <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-stone-900 leading-tight tracking-tight">
                Clean Botanicals for <br className="hidden sm:inline" />
                <span className="italic text-rose-700 font-normal">Naturally Radiant</span> Skin
              </h1>

              <p className="text-stone-600 text-sm sm:text-base leading-relaxed max-w-lg mx-auto lg:mx-0">
                Experience high-performance clean cosmetics formulated with nutrient-dense botanical oils, cold-pressed plant extracts, and zero toxic additives.
              </p>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5 pt-2">
                <button
                  onClick={() => scrollTo('featured')}
                  className="w-full sm:w-auto px-7 py-3.5 rounded-full bg-stone-900 hover:bg-rose-600 text-white text-xs sm:text-sm font-semibold tracking-wider transition-all duration-200 flex items-center justify-center gap-2 shadow-md hover:shadow-lg"
                >
                  <span>Explore Collection</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <button
                  onClick={() => scrollTo('about')}
                  className="w-full sm:w-auto px-6 py-3.5 rounded-full bg-white hover:bg-rose-50 text-stone-800 border border-stone-200 text-xs sm:text-sm font-semibold transition-all duration-200 flex items-center justify-center gap-2"
                >
                  <span>Our Philosophy</span>
                </button>
              </div>

              {/* Trust Badges */}
              <div className="pt-4 grid grid-cols-3 gap-3 border-t border-rose-200/60 max-w-md mx-auto lg:mx-0">
                <div className="text-center lg:text-left">
                  <span className="font-bold text-stone-900 text-sm sm:text-base block">Cruelty Free</span>
                  <span className="text-[11px] text-stone-500">100% Vegan</span>
                </div>
                <div className="text-center lg:text-left border-x border-rose-200/60 px-2">
                  <span className="font-bold text-stone-900 text-sm sm:text-base block">Dermatologist</span>
                  <span className="text-[11px] text-stone-500">Tested & Proven</span>
                </div>
                <div className="text-center lg:text-left">
                  <span className="font-bold text-stone-900 text-sm sm:text-base block">Eco Glass</span>
                  <span className="text-[11px] text-stone-500">Recyclable Pack</span>
                </div>
              </div>
            </div>

            {/* Right Hero Image */}
            <div className="relative">
              <div className="aspect-[4/3] sm:aspect-square rounded-3xl overflow-hidden shadow-xl border-4 border-white">
                <img loading="lazy"
                  src="https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=1000&q=75"
                  alt="Aura Botanicals Luxury Glow Serum"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Floating Product Highlight Card */}
              <div className="absolute -bottom-4 -left-4 sm:bottom-6 sm:left-4 bg-white/95 backdrop-blur-md p-3 sm:p-4 rounded-2xl border border-rose-100 shadow-xl flex items-center gap-3.5 max-w-xs">
                <div className="w-12 h-12 rounded-xl bg-rose-50 overflow-hidden shrink-0 border border-rose-100">
                  <img loading="lazy"
                    src="https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?auto=format&fit=crop&w=200&q=75"
                    alt="Rose Elixir"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <span className="text-[10px] font-bold text-rose-600 uppercase tracking-wider block">Signature Blend</span>
                  <span className="text-xs font-bold text-stone-900 block leading-tight">Wild Rose Radiance Oil</span>
                  <span className="text-[11px] text-stone-500">₹1,899 • 30ml</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Shop By Category Section */}
      <section id="categories" className="py-14 sm:py-20 bg-white border-t border-b border-rose-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-10">
          
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-rose-600">Curated Formulations</span>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-stone-900">
              Shop by Botanical Category
            </h2>
            <p className="text-stone-600 text-xs sm:text-sm">
              Tailored organic rituals designed to restore skin barrier health and inner radiance.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
            {BEAUTY_CATEGORIES.map((cat) => (
              <div
                key={cat.id}
                className="group relative rounded-2xl overflow-hidden border border-rose-100 bg-[#FAF7F5] hover:shadow-md transition-all duration-300 flex flex-col"
              >
                <div className="aspect-[4/3] overflow-hidden bg-rose-50">
                  <img loading="lazy"
                    src={cat.image}
                    alt={cat.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-4 flex flex-col justify-between flex-grow">
                  <div>
                    <h3 className="font-serif text-base font-bold text-stone-900 group-hover:text-rose-600 transition-colors">
                      {cat.name}
                    </h3>
                    <p className="text-[11px] text-stone-500 mt-0.5 line-clamp-1">{cat.subtitle}</p>
                  </div>
                  <div className="mt-3 pt-2 border-t border-rose-100 flex items-center justify-between text-[11px] font-semibold text-rose-600">
                    <span>{cat.itemCount}</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Featured Products Section */}
      <section id="featured" className="py-14 sm:py-20 bg-[#FAF7F5]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-10">
          
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div className="space-y-2">
              <span className="text-xs font-bold uppercase tracking-widest text-rose-600">Handcrafted Formulations</span>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-stone-900">
                Featured Beauty Essentials
              </h2>
              <p className="text-stone-600 text-xs sm:text-sm">
                Our bestselling daily skincare and face elixirs.
              </p>
            </div>
            
            <button
              onClick={() => scrollTo('contact')}
              className="inline-flex items-center gap-1.5 text-xs font-bold text-rose-600 hover:text-rose-700 underline underline-offset-4"
            >
              <span>Enquire For Complete Catalog</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {displayedProducts.map((prod) => (
              <div
                key={prod.id}
                className="bg-white rounded-2xl border border-rose-100/80 overflow-hidden shadow-xs hover:shadow-md transition-all duration-300 flex flex-col"
              >
                {/* Product Image */}
                <div className="aspect-square bg-rose-50/50 relative overflow-hidden group">
                  <img loading="lazy"
                    src={prod.image}
                    alt={prod.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-2.5 left-2.5">
                    <span className="bg-white/95 backdrop-blur-xs text-rose-700 text-[10px] font-bold px-2 py-0.5 rounded-full border border-rose-100 shadow-xs">
                      {prod.category}
                    </span>
                  </div>
                  <div className="absolute top-2.5 right-2.5">
                    <span className="bg-stone-900/80 text-white text-[10px] font-semibold px-2 py-0.5 rounded-full">
                      {prod.volume}
                    </span>
                  </div>
                </div>

                {/* Product Info */}
                <div className="p-4 space-y-2.5 flex flex-col justify-between flex-grow">
                  <div>
                    <h3 className="font-serif text-sm font-bold text-stone-900 line-clamp-1">
                      {prod.name}
                    </h3>
                    <p className="text-[11px] text-stone-500 line-clamp-2 mt-0.5">
                      {prod.subtitle}
                    </p>
                  </div>

                  <div className="pt-2 border-t border-rose-50 flex items-center justify-between">
                    <div>
                      <span className="text-xs text-stone-400 block line-through">₹{prod.originalPrice}</span>
                      <span className="text-sm sm:text-base font-bold text-rose-700">₹{prod.price}</span>
                    </div>

                    <button
                      onClick={() => scrollTo('contact')}
                      className="px-3 py-1.5 rounded-full bg-rose-50 hover:bg-rose-600 text-rose-700 hover:text-white border border-rose-200 text-[11px] font-bold transition-all"
                    >
                      Enquire
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Simple Promotional Banner */}
      <section className="py-12 bg-gradient-to-r from-rose-900 via-stone-900 to-rose-950 text-white relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10 text-center space-y-4">
          <span className="inline-block text-rose-300 text-xs font-bold uppercase tracking-widest bg-rose-950/60 px-3 py-1 rounded-full border border-rose-800">
            Certified Pure Organic Extracts
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl font-bold tracking-tight max-w-xl mx-auto">
            Clean Formulations with Zero Harsh Sulfates, Parabens or Synthetic Dyes
          </h2>
          <p className="text-stone-300 text-xs sm:text-sm max-w-lg mx-auto">
            Every bottle is batched in small artisanal quantities to preserve active botanical potency and bio-active antioxidants.
          </p>
          <div className="pt-2">
            <button
              onClick={() => scrollTo('contact')}
              className="px-6 py-3 rounded-full bg-rose-500 hover:bg-rose-400 text-white text-xs font-bold tracking-wider transition-all shadow-lg active:scale-95"
            >
              Order Directly via WhatsApp
            </button>
          </div>
        </div>
      </section>

      {/* About / Brand Story Section */}
      <section id="about" className="py-14 sm:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            
            <div className="relative rounded-3xl overflow-hidden aspect-[4/3] border-4 border-[#FAF7F5] shadow-lg">
              <img loading="lazy"
                src="https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=800&q=75"
                alt="Aura Botanicals Apothecary Preparation"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950/70 via-transparent to-transparent"></div>
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <span className="text-[10px] font-bold text-rose-300 uppercase tracking-widest block">Artisanal Apothecary</span>
                <p className="text-xs font-medium">Handcrafted with ethical fair-trade ingredients</p>
              </div>
            </div>

            <div className="space-y-5">
              <span className="text-xs font-bold uppercase tracking-widest text-rose-600">Our Heritage & Craft</span>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-stone-900 leading-snug">
                Formulated to Harmonize with Your Skin’s Natural Rhythm
              </h2>
              <p className="text-stone-600 text-xs sm:text-sm leading-relaxed">
                Founded on the premise that skincare should nourish rather than mask, Aura Botanicals brings together traditional cold-pressed herbal remedies with modern botanical dermatological science.
              </p>

              <div className="space-y-3 pt-2">
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-rose-100 flex items-center justify-center text-rose-600 shrink-0 mt-0.5">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-stone-900 block">100% Cold-Pressed Plant Oils</span>
                    <span className="text-[11px] text-stone-500">Preserves delicate vitamins, omegas 3-6-9 and antioxidants.</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-rose-100 flex items-center justify-center text-rose-600 shrink-0 mt-0.5">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-stone-900 block">Cruelty-Free & Vegan Certified</span>
                    <span className="text-[11px] text-stone-500">Never tested on animals, formulated with pure floral essences.</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-rose-100 flex items-center justify-center text-rose-600 shrink-0 mt-0.5">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-stone-900 block">Sustainable Amber Glass Bottles</span>
                    <span className="text-[11px] text-stone-500">Protects active botanicals from UV light degradation.</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-14 sm:py-20 bg-[#FAF7F5] border-t border-rose-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            
            {/* Contact Details */}
            <div className="space-y-6">
              <div className="space-y-2">
                <span className="text-xs font-bold uppercase tracking-widest text-rose-600">Get in Touch</span>
                <h2 className="font-serif text-2xl sm:text-3xl font-bold text-stone-900">
                  Connect with Our Skincare Advisors
                </h2>
                <p className="text-stone-600 text-xs sm:text-sm">
                  Have a question regarding custom formulations, bulk orders, or recommended skin rituals? Send us a quick inquiry.
                </p>
              </div>

              <div className="space-y-4 pt-2">
                <div className="flex items-center gap-3.5 p-3.5 bg-white rounded-xl border border-rose-100 shadow-xs">
                  <div className="w-9 h-9 rounded-lg bg-rose-50 flex items-center justify-center text-rose-600 shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase font-bold text-stone-400 block">Customer Care</span>
                    <span className="text-xs sm:text-sm font-semibold text-stone-800">+91 98765 43210</span>
                  </div>
                </div>

                <div className="flex items-center gap-3.5 p-3.5 bg-white rounded-xl border border-rose-100 shadow-xs">
                  <div className="w-9 h-9 rounded-lg bg-rose-50 flex items-center justify-center text-rose-600 shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase font-bold text-stone-400 block">Email Us</span>
                    <span className="text-xs sm:text-sm font-semibold text-stone-800">care@aurabotanicals.com</span>
                  </div>
                </div>

                <div className="flex items-center gap-3.5 p-3.5 bg-white rounded-xl border border-rose-100 shadow-xs">
                  <div className="w-9 h-9 rounded-lg bg-rose-50 flex items-center justify-center text-rose-600 shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase font-bold text-stone-400 block">Boutique Studio</span>
                    <span className="text-xs sm:text-sm font-semibold text-stone-800">42 Heritage Lane, Indiranagar, Bengaluru</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Inquiry Form */}
            <div className="bg-white p-6 sm:p-8 rounded-3xl border border-rose-100 shadow-sm">
              <h3 className="font-serif text-lg sm:text-xl font-bold text-stone-900 mb-4">
                Product Inquiry & Order Form
              </h3>

              {contactSubmitted ? (
                <div className="p-6 bg-rose-50 border border-rose-200 rounded-2xl text-center space-y-3 animate-in fade-in">
                  <div className="w-12 h-12 rounded-full bg-rose-100 text-rose-600 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h4 className="font-bold text-stone-900 text-base">Inquiry Received!</h4>
                  <p className="text-xs text-stone-600">
                    Thank you! Our clean beauty advisor will reach out to you within 2-4 business hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleContactSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-semibold text-stone-700 mb-1">Your Full Name *</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Meera Krishnan"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-stone-50 border border-stone-200 text-xs text-stone-800 focus:outline-none focus:ring-2 focus:ring-rose-500"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-semibold text-stone-700 mb-1">Phone Number *</label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+91 98765 00000"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-stone-50 border border-stone-200 text-xs text-stone-800 focus:outline-none focus:ring-2 focus:ring-rose-500"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-stone-700 mb-1">Interested Category</label>
                      <select
                        value={formData.interestedCategory}
                        onChange={(e) => setFormData({ ...formData, interestedCategory: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-stone-50 border border-stone-200 text-xs text-stone-800 focus:outline-none focus:ring-2 focus:ring-rose-500"
                      >
                        <option value="Skincare">Skincare & Serums</option>
                        <option value="Makeup">Lip & Cheek Tints</option>
                        <option value="Haircare">Hair Oils & Scalp Care</option>
                        <option value="Fragrance">Artisan Fragrance</option>
                        <option value="Body Care">Body Butters</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-stone-700 mb-1">Your Skin Goals or Message</label>
                    <textarea
                      rows={3}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Mention your skin type or products you'd like to try..."
                      className="w-full px-3.5 py-2.5 rounded-xl bg-stone-50 border border-stone-200 text-xs text-stone-800 focus:outline-none focus:ring-2 focus:ring-rose-500 resize-none"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 rounded-xl bg-rose-600 hover:bg-rose-700 text-white font-bold text-xs tracking-wider transition-all shadow-md active:scale-95 flex items-center justify-center gap-2"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>Send Product Inquiry</span>
                  </button>
                </form>
              )}
            </div>

          </div>

        </div>
      </section>

      {/* Simple Footer */}
      <footer className="py-8 bg-white border-t border-rose-100 text-center text-xs text-stone-500">
        <div className="max-w-6xl mx-auto px-4 space-y-2">
          <div className="flex items-center justify-center gap-2 text-stone-900 font-serif font-bold text-sm tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-rose-600" />
            <span>AURA BOTANICALS & BEAUTY</span>
          </div>
          <p className="text-[11px] text-stone-400">
            © {new Date().getFullYear()} Aura Botanicals. All rights reserved. Clean Luxury Cosmetics.
          </p>
        </div>
      </footer>

    </div>
  );
};
