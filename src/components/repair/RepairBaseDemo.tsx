import React, { useState } from 'react';
import { DemoItem } from '../../data/demos';
import {
  Wrench, Phone, MessageCircle, MapPin, Clock, Shield, Star,
  CheckCircle2, ArrowRight, Sparkles, ChevronRight, Menu, X,
  Send, User, Calendar, Check, Droplets, Zap, Wind, Hammer, AlertTriangle
} from 'lucide-react';

interface RepairBaseDemoProps {
  demo: DemoItem;
  isMobile: boolean;
  isTablet: boolean;
}

export const RepairBaseDemo: React.FC<RepairBaseDemoProps> = ({ isMobile }) => {
  const [activeTab, setActiveTab] = useState<'home' | 'about' | 'services' | 'gallery' | 'testimonials' | 'contact'>('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const [bookingForm, setBookingForm] = useState({
    name: '',
    phone: '',
    service: 'Plumbing Repair & Leakage',
    area: 'Indiranagar',
    urgency: 'Standard (Today)',
    notes: ''
  });

  const baseServices = [
    {
      id: 'plumbing',
      title: 'Plumbing & Pipe Repair',
      icon: Droplets,
      color: 'bg-blue-50 text-blue-600 border-blue-200',
      price: 'Starting ₹299',
      desc: 'Tap leakages, pipe bursts, bathroom fittings, drain unblocking, and water heater / geyser connection fixes.',
      points: ['Fast 60-min arrival', 'Original spare parts', '30-day service warranty']
    },
    {
      id: 'electrical',
      title: 'Electrical & Wiring Fixes',
      icon: Zap,
      color: 'bg-amber-50 text-amber-600 border-amber-200',
      price: 'Starting ₹349',
      desc: 'Short circuit diagnosis, MCB tripping repair, switchboard replacement, fan / light installation, and inverter wiring.',
      points: ['Certified electricians', 'Safety testing included', 'Upfront pricing']
    },
    {
      id: 'ac-repair',
      title: 'AC & Appliance Care',
      icon: Wind,
      color: 'bg-cyan-50 text-cyan-600 border-cyan-200',
      price: 'Starting ₹499',
      desc: 'AC gas top-up, jet-pump deep cleaning, cooling coil fixes, refrigerator maintenance, and washing machine repair.',
      points: ['90-day cooling warranty', 'Pressure wash cleaning', 'All brand models']
    },
    {
      id: 'carpentry',
      title: 'Carpentry & Furniture',
      icon: Hammer,
      color: 'bg-emerald-50 text-emerald-600 border-emerald-200',
      price: 'Starting ₹299',
      desc: 'Door lock & hinge repair, sliding drawer track alignment, customized wooden shelves, and flat-pack assembly.',
      points: ['Precision tools', 'Hardware replacement', 'No mess left behind']
    }
  ];

  const galleryItems = [
    {
      title: 'Under-Sink Pipe Burst & Valve Replacement',
      category: 'Plumbing',
      before: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=500&q=80',
      after: 'https://images.unsplash.com/photo-1585704032915-c3400ca199e7?auto=format&fit=crop&w=500&q=80'
    },
    {
      title: 'Main MCB Board Rewiring & Safety Surge Fix',
      category: 'Electrical',
      before: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=500&q=80',
      after: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=500&q=80'
    }
  ];

  const testimonials = [
    {
      name: 'Anand Kulkarni',
      location: 'HSR Layout, Sector 2',
      text: 'Our geyser stopped working on a chilly Sunday morning. The technician arrived in 40 minutes, replaced the thermostat, and charged exact standard rate. Highly recommend!',
      rating: 5,
      service: 'Geyser & Electrical Fix'
    },
    {
      name: 'Sunita Rao',
      location: 'Indiranagar 100ft Road',
      text: 'Super clean AC servicing. They used a protective spill jacket so our wall and sofa stayed totally dry. Will definitely call them again.',
      rating: 5,
      service: 'AC Jet Cleaning'
    },
    {
      name: 'Karthik Menon',
      location: 'Koramangala 4th Block',
      text: 'Fast, polite, and very transparent. No hidden charges or unnecessary part replacements like other apps.',
      rating: 5,
      service: 'Plumbing & Tap Repair'
    }
  ];

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <div className="w-full min-h-full bg-slate-50 text-slate-800 font-sans overflow-x-hidden custom-scrollbar">
      
      {/* 1. TOP EMERGENCY NOTIFICATION STRIP */}
      <div className="bg-emerald-700 text-white text-xs py-2 px-4 shadow-sm">
        <div className="max-w-6xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <span className="bg-emerald-900 text-emerald-200 px-2 py-0.5 rounded text-[11px] font-bold uppercase tracking-wide">
              ₹24,999 Base Plan Demo
            </span>
            <span className="font-medium">24/7 Local Emergency Home Repairs • 60-Minute Arrival</span>
          </div>
          <div className="flex items-center gap-4 text-xs font-semibold">
            <a href="tel:+919876543210" className="hover:underline flex items-center gap-1.5">
              <Phone className="w-3.5 h-3.5 text-emerald-300" /> +91 98765 43210
            </a>
            <span className="hidden sm:inline opacity-60">|</span>
            <a href="https://wa.me/919876543210" target="_blank" rel="noreferrer" className="hover:underline flex items-center gap-1.5 text-emerald-200">
              <MessageCircle className="w-3.5 h-3.5 text-emerald-300" /> WhatsApp Direct
            </a>
          </div>
        </div>
      </div>

      {/* 2. HEADER NAVIGATION */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-sm">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-3.5 flex items-center justify-between">
          
          {/* Logo */}
          <div 
            onClick={() => setActiveTab('home')}
            className="flex items-center gap-2.5 cursor-pointer select-none"
          >
            <div className="w-9 h-9 rounded-xl bg-emerald-600 flex items-center justify-center text-white font-black shadow-md shadow-emerald-600/20">
              <Wrench className="w-5 h-5" />
            </div>
            <div>
              <div className="font-extrabold text-base sm:text-lg text-slate-900 tracking-tight leading-none">
                FIXFAST <span className="text-emerald-600">HOME PRO</span>
              </div>
              <div className="text-[10px] font-medium text-slate-500 tracking-wide uppercase mt-0.5">
                Plumbing • Electrical • AC • Carpentry
              </div>
            </div>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1 bg-slate-100/90 p-1 rounded-xl border border-slate-200">
            {[
              { id: 'home', label: 'Home' },
              { id: 'about', label: 'About Us' },
              { id: 'services', label: 'Our Services' },
              { id: 'gallery', label: 'Recent Work' },
              { id: 'testimonials', label: 'Reviews' },
              { id: 'contact', label: 'Book Technician' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all ${
                  activeTab === tab.id 
                    ? 'bg-white text-emerald-700 shadow-sm' 
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </nav>

          {/* Header Action CTA */}
          <div className="hidden sm:flex items-center gap-2.5">
            <a
              href="https://wa.me/919876543210"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 bg-emerald-50 hover:bg-emerald-100 text-emerald-700 border border-emerald-200 text-xs font-bold px-3 py-2 rounded-xl transition-all"
            >
              <MessageCircle className="w-3.5 h-3.5 text-emerald-600" />
              <span>WhatsApp</span>
            </a>
            <button
              onClick={() => setActiveTab('contact')}
              className="bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold px-4 py-2 rounded-xl shadow-sm transition-all"
            >
              Call Technician
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg text-slate-600 hover:bg-slate-100"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile Menu Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-b border-slate-200 px-4 py-3 space-y-2 animate-in slide-in-from-top-2 duration-200">
            {[
              { id: 'home', label: 'Home' },
              { id: 'about', label: 'About Us' },
              { id: 'services', label: 'Services & Pricing' },
              { id: 'gallery', label: 'Recent Work Samples' },
              { id: 'testimonials', label: 'Customer Reviews' },
              { id: 'contact', label: 'Book Service / Contact' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => {
                  setActiveTab(tab.id as any);
                  setMobileMenuOpen(false);
                }}
                className={`w-full text-left px-3 py-2 rounded-lg text-xs font-bold transition-all ${
                  activeTab === tab.id 
                    ? 'bg-emerald-50 text-emerald-700' 
                    : 'text-slate-700 hover:bg-slate-50'
                }`}
              >
                {tab.label}
              </button>
            ))}
            <div className="pt-2 flex gap-2">
              <a
                href="https://wa.me/919876543210"
                target="_blank"
                rel="noreferrer"
                className="flex-1 text-center bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-bold py-2 rounded-lg"
              >
                WhatsApp Chat
              </a>
              <button
                onClick={() => {
                  setActiveTab('contact');
                  setMobileMenuOpen(false);
                }}
                className="flex-1 bg-emerald-600 text-white text-xs font-bold py-2 rounded-lg"
              >
                Book Online
              </button>
            </div>
          </div>
        )}
      </header>

      {/* ========================================================================= */}
      {/* 1. HOME VIEW */}
      {/* ========================================================================= */}
      {activeTab === 'home' && (
        <div className="space-y-14 animate-in fade-in duration-300">
          
          {/* HERO SECTION */}
          <section className="relative bg-gradient-to-b from-emerald-50/70 via-slate-50 to-white pt-10 pb-14 px-4 sm:px-6 border-b border-slate-200">
            <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
              
              <div className="md:col-span-7 space-y-5">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100/90 text-emerald-800 text-xs font-bold">
                  <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Licensed & Background-Verified Technicians</span>
                </div>

                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight">
                  Fast, Reliable Home Repairs At Your Doorstep in <span className="text-emerald-600">60 Minutes</span>.
                </h1>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-xl">
                  From plumbing leaks and electrical faults to AC servicing and carpentry, get fixed upfront pricing with a 30-day service warranty across your city.
                </p>

                <div className="flex flex-wrap items-center gap-3 pt-1">
                  <button
                    onClick={() => setActiveTab('contact')}
                    className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs sm:text-sm px-6 py-3 rounded-xl shadow-lg shadow-emerald-600/25 transition-all flex items-center gap-2"
                  >
                    <span>Book Technician Now</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                  <a
                    href="tel:+919876543210"
                    className="bg-white hover:bg-slate-50 text-slate-800 font-bold text-xs sm:text-sm px-5 py-3 rounded-xl border border-slate-300 shadow-sm transition-all flex items-center gap-2"
                  >
                    <Phone className="w-4 h-4 text-emerald-600" />
                    <span>+91 98765 43210</span>
                  </a>
                </div>

                {/* 4 Trust Badges */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4 border-t border-slate-200">
                  <div className="flex items-center gap-2 text-xs font-semibold text-slate-700">
                    <Clock className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>60-Min Arrival</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs font-semibold text-slate-700">
                    <Shield className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>30-Day Guarantee</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs font-semibold text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Upfront Rate Card</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs font-semibold text-slate-700">
                    <Star className="w-4 h-4 text-amber-500 shrink-0 fill-amber-400" />
                    <span>4.9/5 Rating</span>
                  </div>
                </div>
              </div>

              {/* Quick Booking Card in Hero */}
              <div className="md:col-span-5 bg-white p-6 rounded-3xl border border-slate-200 shadow-xl space-y-4">
                <div className="border-b border-slate-100 pb-3">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-600">Instant Booking</span>
                  <h3 className="text-base font-bold text-slate-900">Request Home Visit</h3>
                </div>

                {formSubmitted ? (
                  <div className="py-6 text-center space-y-3">
                    <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                      <Check className="w-6 h-6" />
                    </div>
                    <h4 className="font-bold text-sm text-slate-900">Service Request Received!</h4>
                    <p className="text-xs text-slate-600">
                      Our nearest technician in {bookingForm.area} will call you within 10 minutes.
                    </p>
                    <button
                      onClick={() => setFormSubmitted(false)}
                      className="text-xs font-bold text-emerald-600 hover:underline"
                    >
                      Book another repair
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleFormSubmit} className="space-y-3 text-xs">
                    <div>
                      <label className="font-semibold text-slate-700 block mb-1">Select Service</label>
                      <select 
                        value={bookingForm.service}
                        onChange={(e) => setBookingForm({ ...bookingForm, service: e.target.value })}
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl p-2.5 text-xs text-slate-800 focus:outline-emerald-500"
                      >
                        <option>Plumbing Repair & Leakage</option>
                        <option>Electrical Wiring & Switchboard</option>
                        <option>AC Jet Cleaning & Gas Refill</option>
                        <option>Carpentry & Lock Replacement</option>
                        <option>Appliance / Geyser Repair</option>
                      </select>
                    </div>

                    <div className="grid grid-cols-2 gap-2">
                      <div>
                        <label className="font-semibold text-slate-700 block mb-1">Your Name</label>
                        <input 
                          type="text" 
                          required
                          placeholder="e.g. Rahul"
                          value={bookingForm.name}
                          onChange={(e) => setBookingForm({ ...bookingForm, name: e.target.value })}
                          className="w-full bg-slate-50 border border-slate-200 rounded-xl p-2.5 text-xs focus:outline-emerald-500"
                        />
                      </div>
                      <div>
                        <label className="font-semibold text-slate-700 block mb-1">Phone Number</label>
                        <input 
                          type="tel" 
                          required
                          placeholder="+91 98765..."
                          value={bookingForm.phone}
                          onChange={(e) => setBookingForm({ ...bookingForm, phone: e.target.value })}
                          className="w-full bg-slate-50 border border-slate-200 rounded-xl p-2.5 text-xs focus:outline-emerald-500"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="font-semibold text-slate-700 block mb-1">Your Area / Locality</label>
                      <input 
                        type="text"
                        placeholder="e.g. Koramangala 4th Block"
                        value={bookingForm.area}
                        onChange={(e) => setBookingForm({ ...bookingForm, area: e.target.value })}
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl p-2.5 text-xs focus:outline-emerald-500"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 rounded-xl text-xs transition-all shadow-md flex items-center justify-center gap-1.5"
                    >
                      <Send className="w-3.5 h-3.5" />
                      <span>Confirm Home Visit</span>
                    </button>
                  </form>
                )}
              </div>
            </div>
          </section>

          {/* 4 CORE SERVICES GRID */}
          <section className="max-w-5xl mx-auto px-4 sm:px-6">
            <div className="text-center space-y-2 mb-8">
              <span className="text-emerald-600 font-bold text-xs uppercase tracking-wider">What We Fix</span>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900">
                Popular Repair Services
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 max-w-lg mx-auto">
                Fixed labor charges, standardized rate cards, and no unexpected hidden fees.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {baseServices.map((svc) => {
                const Icon = svc.icon;
                return (
                  <div 
                    key={svc.id}
                    className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm hover:border-emerald-300 hover:shadow-md transition-all space-y-4"
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-3">
                        <div className={`w-10 h-10 rounded-xl flex items-center justify-center border ${svc.color}`}>
                          <Icon className="w-5 h-5" />
                        </div>
                        <div>
                          <h3 className="font-bold text-sm sm:text-base text-slate-900">{svc.title}</h3>
                          <span className="text-xs font-bold text-emerald-600">{svc.price}</span>
                        </div>
                      </div>
                    </div>

                    <p className="text-xs text-slate-600 leading-relaxed">
                      {svc.desc}
                    </p>

                    <div className="space-y-1.5 pt-2 border-t border-slate-100">
                      {svc.points.map((pt, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-xs text-slate-700">
                          <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                          <span>{pt}</span>
                        </div>
                      ))}
                    </div>

                    <div className="pt-2 flex items-center justify-between">
                      <button
                        onClick={() => {
                          setBookingForm(prev => ({ ...prev, service: svc.title }));
                          setActiveTab('contact');
                        }}
                        className="text-xs font-bold text-emerald-600 hover:text-emerald-700 flex items-center gap-1"
                      >
                        <span>Book This Service</span>
                        <ChevronRight className="w-3.5 h-3.5" />
                      </button>
                      <a
                        href="https://wa.me/919876543210"
                        target="_blank"
                        rel="noreferrer"
                        className="text-xs font-semibold text-slate-500 hover:text-emerald-600 flex items-center gap-1"
                      >
                        <MessageCircle className="w-3.5 h-3.5 text-emerald-500" /> WhatsApp
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>

          {/* RECENT BEFORE & AFTER WORK */}
          <section className="bg-slate-100 py-12 px-4 sm:px-6">
            <div className="max-w-5xl mx-auto space-y-6">
              <div className="flex items-end justify-between">
                <div>
                  <span className="text-emerald-600 font-bold text-xs uppercase tracking-wider">Quality Proof</span>
                  <h2 className="text-2xl font-black text-slate-900">Recent Completed Repairs</h2>
                </div>
                <button
                  onClick={() => setActiveTab('gallery')}
                  className="text-xs font-bold text-emerald-600 hover:underline"
                >
                  View All Gallery
                </button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {galleryItems.map((item, i) => (
                  <div key={i} className="bg-white rounded-2xl p-4 border border-slate-200 shadow-sm space-y-3">
                    <div className="flex items-center justify-between text-xs">
                      <span className="font-bold text-slate-900">{item.title}</span>
                      <span className="bg-emerald-50 text-emerald-700 px-2 py-0.5 rounded font-bold">{item.category}</span>
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                      <div className="relative rounded-xl overflow-hidden h-36">
                        <img src={item.before} alt="Before" className="w-full h-full object-cover" />
                        <span className="absolute bottom-2 left-2 bg-rose-600/90 text-white text-[10px] font-bold px-2 py-0.5 rounded">
                          Before Issue
                        </span>
                      </div>
                      <div className="relative rounded-xl overflow-hidden h-36">
                        <img src={item.after} alt="After" className="w-full h-full object-cover" />
                        <span className="absolute bottom-2 left-2 bg-emerald-600/90 text-white text-[10px] font-bold px-2 py-0.5 rounded">
                          Fixed & Tested
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* VERIFIED CUSTOMER REVIEWS */}
          <section className="max-w-5xl mx-auto px-4 sm:px-6">
            <div className="text-center space-y-2 mb-8">
              <span className="text-emerald-600 font-bold text-xs uppercase tracking-wider">Happy Homeowners</span>
              <h2 className="text-2xl font-black text-slate-900">What Our Customers Say</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {testimonials.map((t, idx) => (
                <div key={idx} className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm space-y-3">
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                    ))}
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed italic">
                    "{t.text}"
                  </p>
                  <div className="pt-2 border-t border-slate-100">
                    <div className="font-bold text-xs text-slate-900">{t.name}</div>
                    <div className="text-[11px] text-slate-400">{t.location}</div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* SERVICE AREAS BANNER */}
          <section className="max-w-5xl mx-auto px-4 sm:px-6 pb-12">
            <div className="bg-emerald-800 rounded-3xl p-8 text-white text-center space-y-4 shadow-xl">
              <span className="bg-emerald-900 text-emerald-200 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                Local Coverage
              </span>
              <h2 className="text-2xl sm:text-3xl font-black">
                Serving All Major Neighborhoods
              </h2>
              <p className="text-xs sm:text-sm text-emerald-100 max-w-lg mx-auto">
                Koramangala • Indiranagar • HSR Layout • Whitefield • Jayanagar • Bellandur • Marathahalli • Electronic City
              </p>
              <div className="flex flex-wrap justify-center gap-3 pt-2">
                <button
                  onClick={() => setActiveTab('contact')}
                  className="bg-white text-emerald-800 hover:bg-emerald-50 font-bold text-xs px-6 py-3 rounded-xl shadow-md transition-all"
                >
                  Book Instant Visit
                </button>
                <a
                  href="https://wa.me/919876543210"
                  target="_blank"
                  rel="noreferrer"
                  className="bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs px-6 py-3 rounded-xl shadow-md transition-all flex items-center gap-1.5"
                >
                  <MessageCircle className="w-4 h-4" /> Message on WhatsApp
                </a>
              </div>
            </div>
          </section>
        </div>
      )}

      {/* ========================================================================= */}
      {/* 2. ABOUT US VIEW */}
      {/* ========================================================================= */}
      {activeTab === 'about' && (
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12 space-y-10 animate-in fade-in duration-300">
          <div className="text-center space-y-3">
            <span className="text-emerald-600 font-bold text-xs uppercase tracking-wider">About FixFast Home Pro</span>
            <h1 className="text-3xl sm:text-4xl font-black text-slate-900">
              Your Dependable Neighborhood Handyman Team
            </h1>
            <p className="text-xs sm:text-sm text-slate-600 max-w-xl mx-auto">
              Founded in 2016, we have solved over 12,000+ plumbing, electrical, and AC breakdowns for local homes and offices.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center bg-white p-8 rounded-3xl border border-slate-200 shadow-sm">
            <div className="space-y-4">
              <h3 className="font-bold text-lg text-slate-900">Why Local Residents Choose Us</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                We believe home repairs shouldn't involve endless calls, unverified workers, or inflated spare part bills.
              </p>
              <div className="space-y-2 pt-2 text-xs font-semibold text-slate-700">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" /> Police Verified & Certified Staff
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" /> Standardized Rate Card with Zero Surprises
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" /> Genuine OEM Replacement Spares
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" /> 30-Day Free Re-Service Warranty
                </div>
              </div>
            </div>

            <div className="rounded-2xl overflow-hidden shadow-md">
              <img 
                src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=600&q=80" 
                alt="Technicians at work" 
                className="w-full h-64 object-cover"
              />
            </div>
          </div>

          <div className="grid grid-cols-3 gap-4 text-center">
            <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm">
              <div className="text-2xl font-black text-emerald-600">12,000+</div>
              <div className="text-xs text-slate-600 font-medium mt-1">Repairs Solved</div>
            </div>
            <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm">
              <div className="text-2xl font-black text-emerald-600">60 Mins</div>
              <div className="text-xs text-slate-600 font-medium mt-1">Avg. Arrival Time</div>
            </div>
            <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm">
              <div className="text-2xl font-black text-emerald-600">4.9 / 5</div>
              <div className="text-xs text-slate-600 font-medium mt-1">Customer Rating</div>
            </div>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* 3. SERVICES VIEW */}
      {/* ========================================================================= */}
      {activeTab === 'services' && (
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-12 space-y-10 animate-in fade-in duration-300">
          <div className="text-center space-y-3">
            <span className="text-emerald-600 font-bold text-xs uppercase tracking-wider">Transparent Pricing</span>
            <h1 className="text-3xl sm:text-4xl font-black text-slate-900">
              Standardized Rate Cards
            </h1>
            <p className="text-xs sm:text-sm text-slate-600 max-w-xl mx-auto">
              Clear labor estimates with 30-day warranty on all completed jobs.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {baseServices.map((svc) => (
              <div key={svc.id} className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="font-bold text-lg text-slate-900">{svc.title}</h3>
                  <span className="text-xs font-bold bg-emerald-50 text-emerald-700 px-3 py-1 rounded-full border border-emerald-100">
                    {svc.price}
                  </span>
                </div>
                <p className="text-xs text-slate-600">{svc.desc}</p>
                <div className="space-y-2 pt-2 border-t border-slate-100 text-xs text-slate-700">
                  {svc.points.map((p, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <Check className="w-3.5 h-3.5 text-emerald-600" />
                      <span>{p}</span>
                    </div>
                  ))}
                </div>
                <button
                  onClick={() => {
                    setBookingForm(prev => ({ ...prev, service: svc.title }));
                    setActiveTab('contact');
                  }}
                  className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-2.5 rounded-xl text-xs"
                >
                  Book Service Visit
                </button>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* 4. GALLERY VIEW */}
      {/* ========================================================================= */}
      {activeTab === 'gallery' && (
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12 space-y-10 animate-in fade-in duration-300">
          <div className="text-center space-y-3">
            <span className="text-emerald-600 font-bold text-xs uppercase tracking-wider">Before & After</span>
            <h1 className="text-3xl sm:text-4xl font-black text-slate-900">
              Workmanship Gallery
            </h1>
            <p className="text-xs sm:text-sm text-slate-600 max-w-xl mx-auto">
              Real repair examples carried out by our technician team.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8">
            {galleryItems.map((item, idx) => (
              <div key={idx} className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm space-y-4">
                <div className="flex justify-between items-center">
                  <h3 className="font-bold text-base text-slate-900">{item.title}</h3>
                  <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full">{item.category}</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <span className="text-[11px] font-bold text-rose-600">BEFORE (Damaged)</span>
                    <img src={item.before} alt="Before" className="w-full h-48 rounded-2xl object-cover" />
                  </div>
                  <div className="space-y-1">
                    <span className="text-[11px] font-bold text-emerald-600">AFTER (Repaired & Tested)</span>
                    <img src={item.after} alt="After" className="w-full h-48 rounded-2xl object-cover" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* 5. TESTIMONIALS VIEW */}
      {/* ========================================================================= */}
      {activeTab === 'testimonials' && (
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12 space-y-10 animate-in fade-in duration-300">
          <div className="text-center space-y-3">
            <span className="text-emerald-600 font-bold text-xs uppercase tracking-wider">Client Reviews</span>
            <h1 className="text-3xl sm:text-4xl font-black text-slate-900">
              What Homeowners Say
            </h1>
            <p className="text-xs sm:text-sm text-slate-600 max-w-xl mx-auto">
              Real verified feedback from families across Bangalore.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-5">
            {testimonials.map((t, idx) => (
              <div key={idx} className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm space-y-3">
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="font-bold text-sm text-slate-900">{t.name}</h3>
                    <span className="text-xs text-slate-400">{t.location} • <span className="text-emerald-600 font-medium">{t.service}</span></span>
                  </div>
                  <div className="flex gap-0.5 text-amber-400">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 italic">
                  "{t.text}"
                </p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* 6. CONTACT & BOOKING VIEW */}
      {/* ========================================================================= */}
      {activeTab === 'contact' && (
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12 space-y-10 animate-in fade-in duration-300">
          <div className="text-center space-y-3">
            <span className="text-emerald-600 font-bold text-xs uppercase tracking-wider">Dispatch Center</span>
            <h1 className="text-3xl sm:text-4xl font-black text-slate-900">
              Book Your Repair Visit
            </h1>
            <p className="text-xs sm:text-sm text-slate-600 max-w-xl mx-auto">
              Fill the quick form below or reach us directly via phone or WhatsApp.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-emerald-800 text-white p-6 rounded-3xl space-y-6 shadow-md">
              <div>
                <h3 className="font-bold text-base">Direct Helpline</h3>
                <p className="text-xs text-emerald-200 mt-1">Immediate technician dispatch</p>
              </div>

              <div className="space-y-4 text-xs">
                <div className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-emerald-300 shrink-0" />
                  <div>
                    <div className="font-bold">Call Center</div>
                    <a href="tel:+919876543210" className="text-emerald-100 hover:underline">+91 98765 43210</a>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <MessageCircle className="w-4 h-4 text-emerald-300 shrink-0" />
                  <div>
                    <div className="font-bold">WhatsApp Direct</div>
                    <a href="https://wa.me/919876543210" target="_blank" rel="noreferrer" className="text-emerald-200 hover:underline">Click to chat</a>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <MapPin className="w-4 h-4 text-emerald-300 shrink-0" />
                  <div>
                    <div className="font-bold">Service Hub</div>
                    <span className="text-emerald-100">Koramangala 5th Block, Bengaluru</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="md:col-span-2 bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-sm">
              {formSubmitted ? (
                <div className="text-center py-8 space-y-3">
                  <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto font-bold">
                    ✓
                  </div>
                  <h3 className="font-bold text-base text-slate-900">Inquiry Confirmed!</h3>
                  <p className="text-xs text-slate-600">
                    A technician has been alerted for {bookingForm.name}. You will receive a confirmation call within 10 minutes.
                  </p>
                  <button
                    onClick={() => setFormSubmitted(false)}
                    className="text-xs font-bold text-emerald-600 hover:underline"
                  >
                    Submit another request
                  </button>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} className="space-y-4 text-xs">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="font-bold text-slate-700 block mb-1">Your Full Name *</label>
                      <input 
                        type="text" 
                        required
                        value={bookingForm.name}
                        onChange={(e) => setBookingForm({ ...bookingForm, name: e.target.value })}
                        placeholder="e.g. Ramesh Kumar"
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl p-2.5 focus:outline-emerald-500"
                      />
                    </div>
                    <div>
                      <label className="font-bold text-slate-700 block mb-1">Phone Number *</label>
                      <input 
                        type="tel" 
                        required
                        value={bookingForm.phone}
                        onChange={(e) => setBookingForm({ ...bookingForm, phone: e.target.value })}
                        placeholder="+91 98765 43210"
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl p-2.5 focus:outline-emerald-500"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="font-bold text-slate-700 block mb-1">Select Service</label>
                      <select 
                        value={bookingForm.service}
                        onChange={(e) => setBookingForm({ ...bookingForm, service: e.target.value })}
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl p-2.5 focus:outline-emerald-500"
                      >
                        <option>Plumbing Repair & Leakage</option>
                        <option>Electrical Wiring & Switchboard</option>
                        <option>AC Jet Cleaning & Gas Refill</option>
                        <option>Carpentry & Furniture Assembly</option>
                      </select>
                    </div>
                    <div>
                      <label className="font-bold text-slate-700 block mb-1">Locality / Area</label>
                      <input 
                        type="text" 
                        value={bookingForm.area}
                        onChange={(e) => setBookingForm({ ...bookingForm, area: e.target.value })}
                        placeholder="e.g. Indiranagar"
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl p-2.5 focus:outline-emerald-500"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="font-bold text-slate-700 block mb-1">Describe Problem (Optional)</label>
                    <textarea 
                      rows={3}
                      value={bookingForm.notes}
                      onChange={(e) => setBookingForm({ ...bookingForm, notes: e.target.value })}
                      placeholder="e.g. Kitchen tap is leaking heavily, geyser trip issue..."
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl p-2.5 focus:outline-emerald-500"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 rounded-xl text-xs transition-all shadow-md flex items-center justify-center gap-1.5"
                  >
                    <Send className="w-3.5 h-3.5" /> Book Technician Visit
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      )}

      {/* FOOTER */}
      <footer className="bg-slate-900 text-slate-400 py-8 px-4 sm:px-6 text-xs">
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-lg bg-emerald-600 text-white flex items-center justify-center font-bold text-xs">
              <Wrench className="w-3.5 h-3.5" />
            </div>
            <span className="font-bold text-slate-200">FixFast Home Pro</span> • <span>Base Plan Repair Website Demo</span>
          </div>

          <div className="flex gap-4">
            <button onClick={() => setActiveTab('home')} className="hover:text-white">Home</button>
            <button onClick={() => setActiveTab('about')} className="hover:text-white">About</button>
            <button onClick={() => setActiveTab('services')} className="hover:text-white">Services</button>
            <button onClick={() => setActiveTab('gallery')} className="hover:text-white">Work</button>
            <button onClick={() => setActiveTab('contact')} className="hover:text-white">Book</button>
          </div>

          <div>© {new Date().getFullYear()} FixFast Home Pro. All rights reserved.</div>
        </div>
      </footer>
    </div>
  );
};
