import React, { useState } from 'react';
import { DemoItem } from '../../data/demos';
import {
  Wrench, Phone, MessageCircle, MapPin, Clock, Shield, Star,
  CheckCircle2, ArrowRight, Sparkles, ChevronRight, Menu, X,
  Send, User, Calendar, Check, Droplets, Zap, Wind, Hammer,
  Paintbrush, Sparkle, Search, Calculator, ChevronDown, ChevronUp,
  FileText, Award, HelpCircle, ArrowUpRight, CheckSquare, Layers, AlertCircle
} from 'lucide-react';

interface RepairProDemoProps {
  demo: DemoItem;
  isMobile: boolean;
  isTablet: boolean;
}

export const RepairProDemo: React.FC<RepairProDemoProps> = ({ isMobile }) => {
  const [activeTab, setActiveTab] = useState<'overview' | 'services' | 'estimator' | 'areas' | 'gallery' | 'faqs' | 'book'>('overview');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedServiceModal, setSelectedServiceModal] = useState<any | null>(null);

  // Estimator State
  const [selectedServicesForEstimate, setSelectedServicesForEstimate] = useState<string[]>(['plumbing-leak']);
  const [urgencyTier, setUrgencyTier] = useState<'standard' | 'express'>('standard');

  // Pincode Checker
  const [pincodeInput, setPincodeInput] = useState('');
  const [pincodeStatus, setPincodeStatus] = useState<null | { serviceable: boolean; time: string; hub: string }>(null);

  // Booking Flow
  const [bookingStep, setBookingStep] = useState(1);
  const [bookingDetails, setBookingDetails] = useState({
    category: 'Plumbing & Hydro Works',
    service: 'Under-Sink Pipe Leak & Valve Repair',
    date: 'Tomorrow, Aug 24',
    slot: '10:00 AM - 12:00 PM',
    name: 'Vikram Sengupta',
    phone: '+91 98450 12345',
    address: 'Flat 402, Prestige Palms, Indiranagar',
    pincode: '560038',
    notes: 'Please bring high-pressure pipe tape and new angle cock valve.'
  });
  const [bookingSuccess, setBookingSuccess] = useState(false);

  // FAQ Toggle
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const categories = [
    { id: 'all', label: 'All Pro Services' },
    { id: 'plumbing', label: '🚰 Plumbing & Pumps' },
    { id: 'electrical', label: '⚡ Electrical & Inverter' },
    { id: 'hvac', label: '❄️ AC & HVAC Cooling' },
    { id: 'carpentry', label: '🔨 Carpentry & Fixtures' },
    { id: 'waterproofing', label: '🎨 Painting & Sealing' },
    { id: 'appliances', label: '🔌 Appliance Electronics' }
  ];

  const proServices = [
    {
      id: 'plumbing-leak',
      cat: 'plumbing',
      title: 'Under-Sink & Wall Pipe Leak Detection',
      icon: Droplets,
      price: '₹399',
      unit: 'Inspection + Labour',
      time: '45 mins',
      warranty: '60 Days Warranty',
      desc: 'Precision acoustic & pressure leak tracing, concealed joint sealing, CPVC/GI pipe replacement, and high-pressure valve fitting.',
      inclusions: ['Concealed pipe pressure testing', 'Angle cock replacement', 'Drain leak prevention sealing']
    },
    {
      id: 'plumbing-motor',
      cat: 'plumbing',
      title: 'Water Pump, Borewell & Overhead Tank Auto-Cut',
      icon: Droplets,
      price: '₹649',
      unit: 'Complete Wiring & Plumbing',
      time: '60 mins',
      warranty: '90 Days Warranty',
      desc: 'Automatic water level controller installation, submersible pump repairs, pressure booster pumps, and overflow prevention sensors.',
      inclusions: ['Float switch sensor wiring', 'Dry-run protection relay', 'Panel board testing']
    },
    {
      id: 'elec-mcb',
      cat: 'electrical',
      title: 'MCB Short-Circuit Diagnostic & Phase Load Balancing',
      icon: Zap,
      price: '₹449',
      unit: 'Diagnostic + Circuit Fix',
      time: '40 mins',
      warranty: '90 Days Warranty',
      desc: 'Thermal camera switchboard inspection, neutral fault clearing, high-load appliance dedicated line wiring, and isolator upgrades.',
      inclusions: ['Thermal hotspot scanning', 'Megger insulation testing', 'True RMS voltage audit']
    },
    {
      id: 'elec-inverter',
      cat: 'electrical',
      title: 'Solar & Inverter Backup Battery Setup',
      icon: Zap,
      price: '₹799',
      unit: 'Dual Battery Installation',
      time: '75 mins',
      warranty: '180 Days Warranty',
      desc: 'Sine-wave inverter bypass wiring, battery acid level check, solar hybrid charge controller calibration, and heavy appliance cutoff relay.',
      inclusions: ['Bypass safety switch setup', 'Terminal anti-corrosion grease', 'Load calculation chart']
    },
    {
      id: 'hvac-jet',
      cat: 'hvac',
      title: 'AC Foam Jet Deep Service & Anti-Bacterial Wash',
      icon: Wind,
      price: '₹599',
      unit: 'Indoor + Outdoor Unit',
      time: '60 mins',
      warranty: '60 Days Cooling Guarantee',
      desc: 'High-pressure water jet cleaning with roll-up protection bag, cooling coil de-scaling, blower fan sanitization, and drain tray flush.',
      inclusions: ['High-pressure water gun flush', 'Coil disinfectant spray', 'Air filter deep cleaning']
    },
    {
      id: 'hvac-gas',
      cat: 'hvac',
      title: 'AC Refrigerant Gas Charging (R32 / R410A)',
      icon: Wind,
      price: '₹1,499',
      unit: 'Full Gas Charge + Leak Test',
      time: '90 mins',
      warranty: '120 Days Leak Warranty',
      desc: 'Nitrogen pressure leak detection, copper brazing repair, vacuum drying, and digital manifold precision gas filling.',
      inclusions: ['Nitrogen pressure test', 'Flare nut torque tightening', 'Sub-cooling delta-T report']
    },
    {
      id: 'carp-door',
      cat: 'carpentry',
      title: 'Solid Teak & Main Door Multi-Bolt Lock Alignment',
      icon: Hammer,
      price: '₹499',
      unit: 'Per Door Fitting',
      time: '50 mins',
      warranty: '90 Days Warranty',
      desc: 'Hydraulic door closer installation, Yale/Godrej deadbolt carving, sagged door planning, and silent ball-bearing hinge replacement.',
      inclusions: ['Concealed mortise drilling', 'Strike plate precision chisel', 'Silicone buffer pads']
    },
    {
      id: 'paint-seal',
      cat: 'waterproofing',
      title: 'Bathroom Wall Dampness & PU Epoxy Grouting',
      icon: Paintbrush,
      price: '₹899',
      unit: 'Per Bathroom Floor',
      time: '120 mins',
      warranty: '1 Year Waterproof Warranty',
      desc: 'Tile gap routing, waterproof nano-acrylic polymer injection, chemical epoxy tile joint grouting, and moisture barrier coating.',
      inclusions: ['Tile joint mechanical grooving', 'Anti-fungal epoxy grout', 'Shower perimeter seal']
    }
  ];

  const filteredServices = selectedCategory === 'all' 
    ? proServices 
    : proServices.filter(s => s.cat === selectedCategory);

  const calculateEstimate = () => {
    let total = 0;
    selectedServicesForEstimate.forEach(id => {
      const svc = proServices.find(s => s.id === id);
      if (svc) {
        total += parseInt(svc.price.replace('₹', '').replace(',', ''));
      }
    });
    if (urgencyTier === 'express') total += 250;
    return total;
  };

  const handlePincodeCheck = (e: React.FormEvent) => {
    e.preventDefault();
    if (!pincodeInput || pincodeInput.length < 5) return;
    const isServiceable = ['560001', '560008', '560034', '560038', '560066', '560076', '560100', '560102'].includes(pincodeInput.trim()) || pincodeInput.startsWith('560');
    setPincodeStatus({
      serviceable: isServiceable,
      time: isServiceable ? '30 - 45 Minutes' : 'Not currently available in this zip',
      hub: isServiceable ? 'Central Indiranagar & HSR Mobile Hubs' : 'Expanding Soon'
    });
  };

  const faqs = [
    {
      q: 'How quickly can a FixCraft Pro technician reach my home?',
      a: 'For emergency requests, our geo-dispatched technicians arrive within 30 to 45 minutes across all supported pin codes. For scheduled visits, you can pick any 2-hour slot that suits your daily routine.'
    },
    {
      q: 'What is included in the 90-Day FixCraft Warranty?',
      a: 'Every repair is covered under our 90-Day Free Re-Service Warranty. If the exact same issue reoccurs or replacement parts fail within 90 days, a senior engineer will re-inspect and fix it at zero extra labor cost.'
    },
    {
      q: 'Are your technicians background verified and certified?',
      a: 'Yes. 100% of FixCraft Pro technicians undergo thorough police background checks, government ID verification, and hold certified ITI / Polytechnic engineering diplomas with a minimum 4+ years of field experience.'
    },
    {
      q: 'How are spare parts priced?',
      a: 'We use genuine OEM parts from certified manufacturers (Legrand, Havells, Supreme, Daikin, Godrej) with official MRP billing receipts provided directly on your digital invoice.'
    }
  ];

  return (
    <div className="w-full min-h-full bg-[#0F172A] text-slate-100 font-sans overflow-x-hidden custom-scrollbar">
      
      {/* 1. TOP PRO EMERGENCY BAR */}
      <div className="bg-gradient-to-r from-slate-900 via-blue-950 to-slate-900 border-b border-blue-900/60 text-xs py-2 px-4 text-blue-200">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
            </span>
            <span className="font-bold text-white uppercase text-[11px] tracking-wider bg-orange-500/20 text-orange-400 px-2 py-0.5 rounded border border-orange-500/30">
              ₹39,999 Pro Plan Demo
            </span>
            <span className="text-slate-300">FixCraft Pro • Multi-Category Technician Dispatch</span>
          </div>

          <div className="flex items-center gap-4 text-xs">
            <a href="tel:+919845012345" className="hover:text-white flex items-center gap-1 font-bold text-white transition-colors">
              <Phone className="w-3.5 h-3.5 text-orange-400" /> +91 98450 12345 (Pro Line)
            </a>
            <span className="hidden sm:inline text-slate-600">|</span>
            <span className="hidden sm:flex items-center gap-1 text-slate-300">
              <Clock className="w-3.5 h-3.5 text-blue-400" /> 7:00 AM - 10:30 PM (All 7 Days)
            </span>
          </div>
        </div>
      </div>

      {/* 2. PRO HEADER NAV */}
      <header className="sticky top-0 z-40 bg-slate-950/90 backdrop-blur-md border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
          
          {/* Brand Logo */}
          <div 
            onClick={() => setActiveTab('overview')}
            className="flex items-center gap-3 cursor-pointer group select-none"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 to-orange-500 flex items-center justify-center text-white shadow-lg shadow-blue-500/20 group-hover:scale-105 transition-transform">
              <Wrench className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xl font-black text-white tracking-tight leading-none flex items-center gap-1.5">
                FIXCRAFT <span className="text-orange-500 font-extrabold">PRO</span>
              </div>
              <div className="text-[10px] text-slate-400 font-semibold tracking-widest uppercase mt-1">
                Multi-Skill Home Engineering
              </div>
            </div>
          </div>

          {/* Desktop Nav Items */}
          <nav className="hidden lg:flex items-center gap-1 bg-slate-900/80 p-1.5 rounded-2xl border border-slate-800">
            {[
              { id: 'overview', label: 'Overview' },
              { id: 'services', label: 'Services & Pricing' },
              { id: 'estimator', label: 'Cost Estimator' },
              { id: 'areas', label: 'Service Areas' },
              { id: 'gallery', label: 'Work Quality' },
              { id: 'faqs', label: 'FAQ' },
              { id: 'book', label: 'Schedule Visit' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                  activeTab === tab.id 
                    ? 'bg-blue-600 text-white shadow-md shadow-blue-600/30' 
                    : 'text-slate-400 hover:text-white hover:bg-slate-800/50'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </nav>

          {/* Action CTAs */}
          <div className="flex items-center gap-3">
            <a
              href="https://wa.me/919845012345"
              target="_blank"
              rel="noreferrer"
              className="hidden sm:inline-flex items-center gap-1.5 bg-emerald-950/80 border border-emerald-700/60 text-emerald-400 text-xs font-bold px-3.5 py-2.5 rounded-xl hover:bg-emerald-900/60 transition-colors"
            >
              <MessageCircle className="w-4 h-4 text-emerald-400" />
              <span>WhatsApp Pro</span>
            </a>

            <button
              onClick={() => setActiveTab('book')}
              className="bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-slate-950 text-xs sm:text-sm font-black px-5 py-2.5 rounded-xl shadow-lg shadow-orange-500/20 transition-all flex items-center gap-1.5"
            >
              <span>Instant Dispatch</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-slate-300 hover:text-white bg-slate-900 rounded-xl border border-slate-800"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-slate-950 border-b border-slate-800 px-6 py-4 space-y-2 animate-in slide-in-from-top-2 duration-200">
            {[
              { id: 'overview', label: 'Overview' },
              { id: 'services', label: 'All Services & Price List' },
              { id: 'estimator', label: 'Cost Calculator' },
              { id: 'areas', label: 'Service Areas & Pincodes' },
              { id: 'gallery', label: 'Work Quality & Certifications' },
              { id: 'faqs', label: 'Frequently Asked Questions' },
              { id: 'book', label: 'Schedule Technician Visit' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => {
                  setActiveTab(tab.id as any);
                  setMobileMenuOpen(false);
                }}
                className={`w-full text-left py-2.5 px-3 rounded-lg text-xs font-bold transition-all ${
                  activeTab === tab.id ? 'bg-blue-600 text-white' : 'text-slate-300 hover:bg-slate-900'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        )}
      </header>

      {/* ========================================================================= */}
      {/* 1. OVERVIEW VIEW */}
      {/* ========================================================================= */}
      {activeTab === 'overview' && (
        <div className="space-y-16 animate-in fade-in duration-300">
          
          {/* HERO SECTION */}
          <section className="relative pt-12 pb-20 px-4 sm:px-6 overflow-hidden">
            {/* Ambient Background Glows */}
            <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute top-1/4 right-10 w-[350px] h-[350px] bg-orange-500/10 rounded-full blur-3xl pointer-events-none" />

            <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 items-center relative z-10">
              
              <div className="lg:col-span-7 space-y-6">
                <div className="inline-flex items-center gap-2 bg-blue-950/80 border border-blue-700/60 px-4 py-1.5 rounded-full text-xs font-bold text-blue-300 shadow-inner">
                  <Award className="w-4 h-4 text-orange-400" />
                  <span>ISO 9001:2015 Certified Home Engineering</span>
                </div>

                <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
                  The Multi-Specialty <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-amber-300 to-yellow-400">Home Repair Network</span> Built for Precision.
                </h1>

                <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-xl">
                  Engineered plumbing, certified electrical repairs, HVAC foam washing, modular carpentry, and waterproof sealing. Backed by 90-day guarantees and live technician dispatch.
                </p>

                <div className="flex flex-wrap items-center gap-4 pt-2">
                  <button
                    onClick={() => setActiveTab('book')}
                    className="bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-slate-950 font-black text-sm px-7 py-3.5 rounded-xl shadow-xl shadow-orange-500/25 transition-all flex items-center gap-2"
                  >
                    <span>Schedule Pro Visit</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  <button
                    onClick={() => setActiveTab('estimator')}
                    className="bg-slate-900 hover:bg-slate-800 text-slate-200 hover:text-white font-bold text-sm px-6 py-3.5 rounded-xl border border-slate-700 transition-all flex items-center gap-2"
                  >
                    <Calculator className="w-4 h-4 text-blue-400" />
                    <span>Calculate Repair Cost</span>
                  </button>
                </div>

                {/* Performance Metrics */}
                <div className="grid grid-cols-3 gap-4 pt-6 border-t border-slate-800">
                  <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-3.5 text-center">
                    <div className="text-xl sm:text-2xl font-black text-orange-400">30 Mins</div>
                    <div className="text-[11px] text-slate-400 font-semibold mt-0.5">Average Arrival</div>
                  </div>
                  <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-3.5 text-center">
                    <div className="text-xl sm:text-2xl font-black text-blue-400">90 Days</div>
                    <div className="text-[11px] text-slate-400 font-semibold mt-0.5">Free Warranty</div>
                  </div>
                  <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-3.5 text-center">
                    <div className="text-xl sm:text-2xl font-black text-emerald-400">4.96 ★</div>
                    <div className="text-[11px] text-slate-400 font-semibold mt-0.5">24,000+ Ratings</div>
                  </div>
                </div>
              </div>

              {/* Interactive Quick Pincode Checker Card */}
              <div className="lg:col-span-5 bg-slate-900/90 border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-2xl space-y-5">
                <div className="flex items-center justify-between border-b border-slate-800 pb-4">
                  <div>
                    <span className="text-[11px] font-bold text-orange-400 uppercase tracking-wider">Live Hub Radar</span>
                    <h3 className="text-lg font-black text-white">Check Technician Near You</h3>
                  </div>
                  <div className="w-9 h-9 rounded-xl bg-blue-950 border border-blue-800 flex items-center justify-center text-blue-400">
                    <MapPin className="w-5 h-5" />
                  </div>
                </div>

                <form onSubmit={handlePincodeCheck} className="space-y-3">
                  <div>
                    <label className="text-xs font-semibold text-slate-300 block mb-1.5">Enter Your Area Pincode</label>
                    <div className="flex gap-2">
                      <input
                        type="text"
                        placeholder="e.g. 560038 or 560034"
                        value={pincodeInput}
                        onChange={(e) => setPincodeInput(e.target.value)}
                        className="flex-1 bg-slate-950 border border-slate-700 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-blue-500"
                      />
                      <button
                        type="submit"
                        className="bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold px-4 py-2.5 rounded-xl transition-colors"
                      >
                        Check Radar
                      </button>
                    </div>
                  </div>
                </form>

                {pincodeStatus && (
                  <div className={`p-4 rounded-2xl border text-xs space-y-1.5 animate-in fade-in ${
                    pincodeStatus.serviceable 
                      ? 'bg-emerald-950/40 border-emerald-700/60 text-emerald-300' 
                      : 'bg-rose-950/40 border-rose-700/60 text-rose-300'
                  }`}>
                    <div className="flex items-center gap-2 font-bold text-sm">
                      {pincodeStatus.serviceable ? <CheckCircle2 className="w-4 h-4" /> : <AlertCircle className="w-4 h-4" />}
                      <span>{pincodeStatus.serviceable ? 'Service Available in 30 Mins!' : 'Limited Service in this Zone'}</span>
                    </div>
                    <p className="text-slate-300">{pincodeStatus.hub}</p>
                  </div>
                )}

                <div className="pt-2 border-t border-slate-800/80 space-y-2 text-xs">
                  <div className="flex items-center justify-between text-slate-400">
                    <span>Emergency Plumbing Squad:</span>
                    <span className="text-emerald-400 font-bold">● Active in Indiranagar</span>
                  </div>
                  <div className="flex items-center justify-between text-slate-400">
                    <span>Master Electrical Team:</span>
                    <span className="text-emerald-400 font-bold">● Active in HSR Layout</span>
                  </div>
                  <div className="flex items-center justify-between text-slate-400">
                    <span>AC Jet Wash Vans:</span>
                    <span className="text-emerald-400 font-bold">● Active in Whitefield</span>
                  </div>
                </div>

                <button
                  onClick={() => setActiveTab('book')}
                  className="w-full bg-slate-800 hover:bg-slate-700 text-slate-200 font-bold text-xs py-3 rounded-xl border border-slate-700 transition-colors flex items-center justify-center gap-2"
                >
                  <span>Book Immediate Dispatch</span>
                  <ArrowRight className="w-3.5 h-3.5 text-orange-400" />
                </button>
              </div>
            </div>
          </section>

          {/* 6 SPECIALTY CATEGORIES PREVIEW */}
          <section className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-orange-400">Multi-Specialty Divisions</span>
                <h2 className="text-2xl sm:text-3xl font-black text-white">Full-Service Home Care Infrastructure</h2>
              </div>
              <button
                onClick={() => setActiveTab('services')}
                className="text-xs font-bold text-blue-400 hover:text-blue-300 flex items-center gap-1"
              >
                <span>View Full Rate Catalog</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {proServices.slice(0, 6).map((svc) => {
                const IconComp = svc.icon;
                return (
                  <div
                    key={svc.id}
                    onClick={() => setSelectedServiceModal(svc)}
                    className="bg-slate-900/80 border border-slate-800 hover:border-blue-500/60 rounded-3xl p-6 transition-all shadow-lg hover:shadow-blue-500/10 cursor-pointer group flex flex-col justify-between space-y-4"
                  >
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <div className="w-10 h-10 rounded-xl bg-blue-950 border border-blue-800 flex items-center justify-center text-blue-400 group-hover:scale-110 transition-transform">
                          <IconComp className="w-5 h-5" />
                        </div>
                        <span className="text-xs font-black text-orange-400 bg-orange-950/60 border border-orange-800/60 px-2.5 py-1 rounded-lg">
                          {svc.price}
                        </span>
                      </div>

                      <h3 className="font-bold text-base text-white group-hover:text-blue-300 transition-colors">
                        {svc.title}
                      </h3>

                      <p className="text-xs text-slate-400 line-clamp-2 leading-relaxed">
                        {svc.desc}
                      </p>
                    </div>

                    <div className="pt-3 border-t border-slate-800 flex items-center justify-between text-xs">
                      <span className="text-emerald-400 font-semibold flex items-center gap-1">
                        <Shield className="w-3.5 h-3.5" /> {svc.warranty}
                      </span>
                      <span className="text-slate-400 font-medium">{svc.time}</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>

          {/* TECHNICIAN RIGOR & VERIFICATION */}
          <section className="bg-slate-950 py-14 px-4 sm:px-6 border-t border-b border-slate-800">
            <div className="max-w-6xl mx-auto space-y-10">
              <div className="text-center max-w-2xl mx-auto space-y-2">
                <span className="text-xs font-bold uppercase tracking-widest text-blue-400">Zero Compromise on Safety</span>
                <h2 className="text-2xl sm:text-3xl font-black text-white">The FixCraft Pro Gold Standard</h2>
                <p className="text-xs sm:text-sm text-slate-400">
                  Every engineer entering your home has completed rigorous background checks and technical certifications.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl space-y-3">
                  <div className="w-10 h-10 rounded-xl bg-orange-950 border border-orange-800/80 flex items-center justify-center text-orange-400 font-bold">
                    1
                  </div>
                  <h4 className="font-bold text-white text-sm">Police & Identity Verification</h4>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    National crime record checks, permanent residential verification, and digital badge authentication for 100% household peace of mind.
                  </p>
                </div>

                <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl space-y-3">
                  <div className="w-10 h-10 rounded-xl bg-blue-950 border border-blue-800/80 flex items-center justify-center text-blue-400 font-bold">
                    2
                  </div>
                  <h4 className="font-bold text-white text-sm">100+ Hours Lab Training</h4>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    All technicians complete intensive hands-on fault simulation training in our central facility before field dispatch.
                  </p>
                </div>

                <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl space-y-3">
                  <div className="w-10 h-10 rounded-xl bg-emerald-950 border border-emerald-800/80 flex items-center justify-center text-emerald-400 font-bold">
                    3
                  </div>
                  <h4 className="font-bold text-white text-sm">Transparent OEM Invoicing</h4>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    Standardized labor rates. Any replacement parts are billed at certified manufacturer MRP with digital invoices sent to your WhatsApp.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* CALL TO ACTION BANNER */}
          <section className="max-w-6xl mx-auto px-4 sm:px-6 pb-12">
            <div className="bg-gradient-to-r from-blue-900 via-indigo-950 to-slate-900 border border-blue-700/60 rounded-3xl p-8 sm:p-10 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="space-y-2">
                <span className="text-xs font-bold text-orange-400 uppercase tracking-widest">Emergency Or Scheduled</span>
                <h3 className="text-2xl sm:text-3xl font-black text-white">Need a Certified Technician Today?</h3>
                <p className="text-xs sm:text-sm text-slate-300 max-w-md">
                  Book within 60 seconds. Choose your preferred time slot and get a confirmed technician assigned instantly.
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-3">
                <button
                  onClick={() => setActiveTab('book')}
                  className="bg-orange-500 hover:bg-orange-600 text-slate-950 font-black text-xs sm:text-sm px-6 py-3.5 rounded-xl shadow-lg transition-all"
                >
                  Book Instant Service
                </button>
                <a
                  href="https://wa.me/919845012345"
                  target="_blank"
                  rel="noreferrer"
                  className="bg-slate-900/90 hover:bg-slate-800 text-white font-bold text-xs sm:text-sm px-5 py-3.5 rounded-xl border border-slate-700 transition-all flex items-center gap-2"
                >
                  <MessageCircle className="w-4 h-4 text-emerald-400" /> WhatsApp
                </a>
              </div>
            </div>
          </section>
        </div>
      )}

      {/* ========================================================================= */}
      {/* 2. SERVICES & PRICING VIEW */}
      {/* ========================================================================= */}
      {activeTab === 'services' && (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 space-y-10 animate-in fade-in duration-300">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-orange-400">Standardized Catalog</span>
            <h1 className="text-3xl sm:text-4xl font-black text-white">All Pro Services & Rate Card</h1>
            <p className="text-xs sm:text-sm text-slate-400">
              Select any category filter below. Click on a service to see full technical breakdown and inclusions.
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                  selectedCategory === cat.id 
                    ? 'bg-orange-500 text-slate-950 shadow-md shadow-orange-500/20' 
                    : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Service Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredServices.map((svc) => (
              <div 
                key={svc.id}
                className="bg-slate-900 border border-slate-800 rounded-3xl p-6 space-y-4 hover:border-slate-700 transition-all flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="font-bold text-base text-white">{svc.title}</h3>
                      <span className="text-xs text-slate-400">{svc.unit}</span>
                    </div>
                    <div className="text-right">
                      <div className="text-lg font-black text-orange-400">{svc.price}</div>
                      <div className="text-[10px] text-emerald-400 font-bold">{svc.warranty}</div>
                    </div>
                  </div>

                  <p className="text-xs text-slate-300 leading-relaxed">{svc.desc}</p>

                  <div className="space-y-1.5 pt-2 border-t border-slate-800">
                    <span className="text-[11px] font-bold text-slate-400">Included in this job:</span>
                    {svc.inclusions.map((inc, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs text-slate-300">
                        <Check className="w-3.5 h-3.5 text-blue-400" />
                        <span>{inc}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-800 flex items-center justify-between">
                  <span className="text-xs text-slate-400 font-medium">Estimated Time: {svc.time}</span>
                  <button
                    onClick={() => {
                      setBookingDetails(prev => ({ ...prev, service: svc.title }));
                      setActiveTab('book');
                    }}
                    className="bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs px-4 py-2 rounded-xl transition-colors"
                  >
                    Book This Repair
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* 3. INTERACTIVE ESTIMATOR VIEW */}
      {/* ========================================================================= */}
      {activeTab === 'estimator' && (
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12 space-y-10 animate-in fade-in duration-300">
          <div className="text-center max-w-xl mx-auto space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-orange-400">Instant Calculator</span>
            <h1 className="text-3xl sm:text-4xl font-black text-white">Repair Cost Estimator</h1>
            <p className="text-xs sm:text-sm text-slate-400">
              Select one or multiple repair items to compute an instant itemized estimate with labor and warranty.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            
            {/* Checklist */}
            <div className="md:col-span-7 bg-slate-900 border border-slate-800 rounded-3xl p-6 space-y-4">
              <h3 className="font-bold text-sm text-white border-b border-slate-800 pb-3">
                Select Your Required Repairs:
              </h3>

              <div className="space-y-2.5">
                {proServices.map((svc) => {
                  const isChecked = selectedServicesForEstimate.includes(svc.id);
                  return (
                    <div
                      key={svc.id}
                      onClick={() => {
                        if (isChecked) {
                          setSelectedServicesForEstimate(selectedServicesForEstimate.filter(id => id !== svc.id));
                        } else {
                          setSelectedServicesForEstimate([...selectedServicesForEstimate, svc.id]);
                        }
                      }}
                      className={`p-3.5 rounded-2xl border transition-all cursor-pointer flex items-center justify-between ${
                        isChecked 
                          ? 'bg-blue-950/60 border-blue-500 text-white' 
                          : 'bg-slate-950 border-slate-800 text-slate-400 hover:border-slate-700'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div className={`w-5 h-5 rounded-md flex items-center justify-center border text-xs font-bold ${
                          isChecked ? 'bg-blue-600 border-blue-500 text-white' : 'border-slate-700 bg-slate-900'
                        }`}>
                          {isChecked && '✓'}
                        </div>
                        <div>
                          <div className="text-xs font-bold text-white">{svc.title}</div>
                          <div className="text-[11px] text-slate-400">{svc.warranty}</div>
                        </div>
                      </div>
                      <div className="text-xs font-black text-orange-400">{svc.price}</div>
                    </div>
                  );
                })}
              </div>

              {/* Urgency Tier */}
              <div className="pt-4 border-t border-slate-800 space-y-2">
                <span className="text-xs font-semibold text-slate-300 block">Select Speed Tier:</span>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    onClick={() => setUrgencyTier('standard')}
                    className={`p-3 rounded-xl border text-xs font-bold text-left ${
                      urgencyTier === 'standard' 
                        ? 'bg-blue-600 border-blue-500 text-white' 
                        : 'bg-slate-950 border-slate-800 text-slate-400'
                    }`}
                  >
                    <div>Standard Slot</div>
                    <div className="text-[10px] font-normal opacity-80">Regular 2-hour window</div>
                  </button>

                  <button
                    onClick={() => setUrgencyTier('express')}
                    className={`p-3 rounded-xl border text-xs font-bold text-left ${
                      urgencyTier === 'express' 
                        ? 'bg-orange-500 border-orange-400 text-slate-950' 
                        : 'bg-slate-950 border-slate-800 text-slate-400'
                    }`}
                  >
                    <div>Express (+₹250)</div>
                    <div className="text-[10px] font-normal opacity-80">Under 45 mins arrival</div>
                  </button>
                </div>
              </div>
            </div>

            {/* Total Summary Card */}
            <div className="md:col-span-5 bg-gradient-to-b from-slate-900 to-slate-950 border border-slate-800 rounded-3xl p-6 space-y-6 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="border-b border-slate-800 pb-3">
                  <span className="text-[11px] font-bold text-orange-400 uppercase">Estimated Total</span>
                  <div className="text-3xl font-black text-white mt-1">₹{calculateEstimate()}</div>
                  <p className="text-xs text-slate-400 mt-1">Includes labor, testing & 90-day warranty</p>
                </div>

                <div className="space-y-2 text-xs">
                  <div className="flex justify-between text-slate-400">
                    <span>Selected Services:</span>
                    <span className="font-bold text-white">{selectedServicesForEstimate.length} items</span>
                  </div>
                  <div className="flex justify-between text-slate-400">
                    <span>Service Speed:</span>
                    <span className="font-bold text-white capitalize">{urgencyTier}</span>
                  </div>
                  <div className="flex justify-between text-slate-400">
                    <span>Applicable Warranty:</span>
                    <span className="font-bold text-emerald-400">90 Days Free</span>
                  </div>
                </div>
              </div>

              <button
                onClick={() => setActiveTab('book')}
                className="w-full bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 text-slate-950 font-black text-xs py-3.5 rounded-xl shadow-lg transition-all"
              >
                Proceed to Schedule Technician
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* 4. SERVICE AREAS VIEW */}
      {/* ========================================================================= */}
      {activeTab === 'areas' && (
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12 space-y-10 animate-in fade-in duration-300">
          <div className="text-center max-w-xl mx-auto space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-orange-400">City Coverage</span>
            <h1 className="text-3xl sm:text-4xl font-black text-white">Service Hubs & Zones</h1>
            <p className="text-xs sm:text-sm text-slate-400">
              We deploy localized mobile response vans to guarantee fast response times across Bangalore.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                zone: 'Central & East Zone',
                hubs: ['Indiranagar (560038)', 'Koramangala (560034)', 'Domlur (560071)', 'MG Road (560001)'],
                time: '25 - 35 mins',
                vans: '8 Mobile Vans Active'
              },
              {
                zone: 'South Tech Corridor',
                hubs: ['HSR Layout (560102)', 'BTM Layout (560076)', 'Jayanagar (560041)', 'JP Nagar (560078)'],
                time: '30 - 40 mins',
                vans: '10 Mobile Vans Active'
              },
              {
                zone: 'East Tech Hub',
                hubs: ['Whitefield (560066)', 'Marathahalli (560037)', 'Bellandur (560103)', 'Sarjapur Road (560035)'],
                time: '35 - 45 mins',
                vans: '9 Mobile Vans Active'
              },
              {
                zone: 'North & West Corridor',
                hubs: ['Hebbal (560024)', 'Malleshwaram (560003)', 'Rajajinagar (560010)', 'Yeshwanthpur (560022)'],
                time: '35 - 45 mins',
                vans: '7 Mobile Vans Active'
              }
            ].map((area, idx) => (
              <div key={idx} className="bg-slate-900 border border-slate-800 rounded-3xl p-6 space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="font-bold text-base text-white">{area.zone}</h3>
                  <span className="text-xs font-bold text-emerald-400 bg-emerald-950/60 border border-emerald-800 px-2.5 py-1 rounded-lg">
                    {area.time}
                  </span>
                </div>

                <div className="space-y-1.5 text-xs text-slate-300">
                  <span className="text-slate-500 font-semibold block">Key Neighborhood Hubs:</span>
                  {area.hubs.map((hub, hidx) => (
                    <div key={hidx} className="flex items-center gap-2">
                      <MapPin className="w-3.5 h-3.5 text-orange-400" />
                      <span>{hub}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-3 border-t border-slate-800 text-xs text-blue-400 font-semibold">
                  ● {area.vans}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* 5. WORK QUALITY & GALLERY */}
      {/* ========================================================================= */}
      {activeTab === 'gallery' && (
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-12 space-y-10 animate-in fade-in duration-300">
          <div className="text-center max-w-xl mx-auto space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-orange-400">Quality Assured</span>
            <h1 className="text-3xl sm:text-4xl font-black text-white">Before & After Field Reports</h1>
            <p className="text-xs sm:text-sm text-slate-400">
              Photographic proof of repair precision carried out by our master technicians.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: 'Main Incomer 3-Phase MCB Panel Overheating Fix',
                desc: 'Identified neutral drop and burned terminal blocks using thermal imaging. Rewired with 10mm pure copper and installed Schneider 63A isolator.',
                before: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=600&q=75',
                after: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=600&q=75'
              },
              {
                title: 'Concealed Bathroom Shower Diverter Leak Rectification',
                desc: 'Located hairline crack in internal elbow joint without damaging main tiles. Replaced with CPVC brass fitting and pressure tested at 6 bar.',
                before: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=600&q=75',
                after: 'https://images.unsplash.com/photo-1585704032915-c3400ca199e7?auto=format&fit=crop&w=600&q=75'
              }
            ].map((report, idx) => (
              <div key={idx} className="bg-slate-900 border border-slate-800 rounded-3xl p-6 space-y-4">
                <h3 className="font-bold text-base text-white">{report.title}</h3>
                <p className="text-xs text-slate-400">{report.desc}</p>
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <span className="text-[10px] font-bold text-rose-400 block mb-1">BEFORE (Hazardous)</span>
                    <img loading="lazy" src={report.before} alt="Before" className="w-full h-40 object-cover rounded-2xl" />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold text-emerald-400 block mb-1">AFTER (Certified Fixed)</span>
                    <img loading="lazy" src={report.after} alt="After" className="w-full h-40 object-cover rounded-2xl" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* 6. FAQ VIEW */}
      {/* ========================================================================= */}
      {activeTab === 'faqs' && (
        <div className="max-w-3xl mx-auto px-4 sm:px-6 py-12 space-y-8 animate-in fade-in duration-300">
          <div className="text-center space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-orange-400">Questions & Answers</span>
            <h1 className="text-3xl sm:text-4xl font-black text-white">Frequently Asked Questions</h1>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  onClick={() => setOpenFaq(isOpen ? null : idx)}
                  className="bg-slate-900 border border-slate-800 rounded-2xl p-5 cursor-pointer transition-all hover:border-slate-700"
                >
                  <div className="flex items-center justify-between">
                    <h3 className="font-bold text-sm text-white">{faq.q}</h3>
                    {isOpen ? <ChevronUp className="w-4 h-4 text-orange-400" /> : <ChevronDown className="w-4 h-4 text-slate-400" />}
                  </div>
                  {isOpen && (
                    <p className="text-xs text-slate-300 mt-3 pt-3 border-t border-slate-800 leading-relaxed">
                      {faq.a}
                    </p>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* 7. MULTI-STEP BOOKING FLOW */}
      {/* ========================================================================= */}
      {activeTab === 'book' && (
        <div className="max-w-3xl mx-auto px-4 sm:px-6 py-12 space-y-8 animate-in fade-in duration-300">
          <div className="text-center space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-orange-400">Technician Booking</span>
            <h1 className="text-3xl sm:text-4xl font-black text-white">Schedule Your Pro Visit</h1>
          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-2xl">
            {bookingSuccess ? (
              <div className="py-10 text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 flex items-center justify-center mx-auto">
                  <Check className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-black text-white">Technician Dispatched & Confirmed!</h3>
                <div className="bg-slate-950 p-4 rounded-2xl max-w-md mx-auto text-xs space-y-1.5 border border-slate-800 text-left">
                  <div className="flex justify-between">
                    <span className="text-slate-400">Booking ID:</span>
                    <span className="font-bold text-white">#FIX-88492</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Scheduled Date:</span>
                    <span className="font-bold text-white">{bookingDetails.date}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Time Window:</span>
                    <span className="font-bold text-white">{bookingDetails.slot}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Customer:</span>
                    <span className="font-bold text-white">{bookingDetails.name}</span>
                  </div>
                </div>
                <p className="text-xs text-slate-300 max-w-sm mx-auto">
                  A WhatsApp confirmation message with assigned technician GPS tracker link has been dispatched to {bookingDetails.phone}.
                </p>
                <button
                  onClick={() => setBookingSuccess(false)}
                  className="bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs px-6 py-2.5 rounded-xl"
                >
                  Book Another Visit
                </button>
              </div>
            ) : (
              <div className="space-y-6">
                
                {/* Step Indicators */}
                <div className="grid grid-cols-3 gap-2 text-center text-xs">
                  <div className={`p-2 rounded-xl border font-bold ${
                    bookingStep === 1 ? 'bg-blue-600 border-blue-500 text-white' : 'bg-slate-950 border-slate-800 text-slate-400'
                  }`}>
                    1. Issue & Time
                  </div>
                  <div className={`p-2 rounded-xl border font-bold ${
                    bookingStep === 2 ? 'bg-blue-600 border-blue-500 text-white' : 'bg-slate-950 border-slate-800 text-slate-400'
                  }`}>
                    2. Address Details
                  </div>
                  <div className={`p-2 rounded-xl border font-bold ${
                    bookingStep === 3 ? 'bg-blue-600 border-blue-500 text-white' : 'bg-slate-950 border-slate-800 text-slate-400'
                  }`}>
                    3. Review & Confirm
                  </div>
                </div>

                {/* STEP 1 */}
                {bookingStep === 1 && (
                  <div className="space-y-4 text-xs">
                    <div>
                      <label className="font-semibold text-slate-300 block mb-1">Service Type</label>
                      <select
                        value={bookingDetails.service}
                        onChange={(e) => setBookingDetails({ ...bookingDetails, service: e.target.value })}
                        className="w-full bg-slate-950 border border-slate-700 rounded-xl p-3 text-white focus:outline-blue-500"
                      >
                        {proServices.map(s => (
                          <option key={s.id}>{s.title}</option>
                        ))}
                      </select>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="font-semibold text-slate-300 block mb-1">Preferred Date</label>
                        <select
                          value={bookingDetails.date}
                          onChange={(e) => setBookingDetails({ ...bookingDetails, date: e.target.value })}
                          className="w-full bg-slate-950 border border-slate-700 rounded-xl p-3 text-white focus:outline-blue-500"
                        >
                          <option>Today (Express Arrival in 45 Mins)</option>
                          <option>Tomorrow, Aug 24</option>
                          <option>Monday, Aug 25</option>
                          <option>Tuesday, Aug 26</option>
                        </select>
                      </div>

                      <div>
                        <label className="font-semibold text-slate-300 block mb-1">Preferred Slot</label>
                        <select
                          value={bookingDetails.slot}
                          onChange={(e) => setBookingDetails({ ...bookingDetails, slot: e.target.value })}
                          className="w-full bg-slate-950 border border-slate-700 rounded-xl p-3 text-white focus:outline-blue-500"
                        >
                          <option>Immediate Express (Next 45 Mins)</option>
                          <option>10:00 AM - 12:00 PM</option>
                          <option>02:00 PM - 04:00 PM</option>
                          <option>05:00 PM - 07:00 PM</option>
                        </select>
                      </div>
                    </div>

                    <button
                      onClick={() => setBookingStep(2)}
                      className="w-full bg-blue-600 hover:bg-blue-500 text-white font-bold py-3.5 rounded-xl transition-all flex items-center justify-center gap-2"
                    >
                      <span>Continue to Address</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                )}

                {/* STEP 2 */}
                {bookingStep === 2 && (
                  <div className="space-y-4 text-xs">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="font-semibold text-slate-300 block mb-1">Your Full Name *</label>
                        <input
                          type="text"
                          required
                          value={bookingDetails.name}
                          onChange={(e) => setBookingDetails({ ...bookingDetails, name: e.target.value })}
                          className="w-full bg-slate-950 border border-slate-700 rounded-xl p-3 text-white focus:outline-blue-500"
                        />
                      </div>
                      <div>
                        <label className="font-semibold text-slate-300 block mb-1">Phone Number (For WhatsApp OTP) *</label>
                        <input
                          type="tel"
                          required
                          value={bookingDetails.phone}
                          onChange={(e) => setBookingDetails({ ...bookingDetails, phone: e.target.value })}
                          className="w-full bg-slate-950 border border-slate-700 rounded-xl p-3 text-white focus:outline-blue-500"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="font-semibold text-slate-300 block mb-1">Complete Home / Apartment Address *</label>
                      <input
                        type="text"
                        required
                        value={bookingDetails.address}
                        onChange={(e) => setBookingDetails({ ...bookingDetails, address: e.target.value })}
                        className="w-full bg-slate-950 border border-slate-700 rounded-xl p-3 text-white focus:outline-blue-500"
                      />
                    </div>

                    <div className="flex gap-3">
                      <button
                        onClick={() => setBookingStep(1)}
                        className="w-1/3 bg-slate-800 hover:bg-slate-700 text-slate-300 font-bold py-3.5 rounded-xl"
                      >
                        Back
                      </button>
                      <button
                        onClick={() => setBookingStep(3)}
                        className="w-2/3 bg-blue-600 hover:bg-blue-500 text-white font-bold py-3.5 rounded-xl flex items-center justify-center gap-2"
                      >
                        <span>Review Booking</span>
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                )}

                {/* STEP 3 */}
                {bookingStep === 3 && (
                  <div className="space-y-4 text-xs">
                    <div className="bg-slate-950 border border-slate-800 rounded-2xl p-4 space-y-2">
                      <div className="font-bold text-white border-b border-slate-800 pb-2">Booking Summary</div>
                      <div className="flex justify-between text-slate-400">
                        <span>Service:</span>
                        <span className="font-bold text-white">{bookingDetails.service}</span>
                      </div>
                      <div className="flex justify-between text-slate-400">
                        <span>Schedule:</span>
                        <span className="font-bold text-white">{bookingDetails.date} ({bookingDetails.slot})</span>
                      </div>
                      <div className="flex justify-between text-slate-400">
                        <span>Customer:</span>
                        <span className="font-bold text-white">{bookingDetails.name} • {bookingDetails.phone}</span>
                      </div>
                      <div className="flex justify-between text-slate-400">
                        <span>Address:</span>
                        <span className="font-bold text-white">{bookingDetails.address}</span>
                      </div>
                    </div>

                    <div className="flex gap-3">
                      <button
                        onClick={() => setBookingStep(2)}
                        className="w-1/3 bg-slate-800 hover:bg-slate-700 text-slate-300 font-bold py-3.5 rounded-xl"
                      >
                        Back
                      </button>
                      <button
                        onClick={() => setBookingSuccess(true)}
                        className="w-2/3 bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 text-slate-950 font-black py-3.5 rounded-xl shadow-lg flex items-center justify-center gap-2"
                      >
                        <Check className="w-4 h-4" /> Confirm & Dispatch Technician
                      </button>
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      )}

      {/* PRO FOOTER */}
      <footer className="bg-slate-950 border-t border-slate-800 py-10 px-4 sm:px-6 text-xs text-slate-400">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-lg bg-orange-500 text-slate-950 flex items-center justify-center font-bold">
              <Wrench className="w-3.5 h-3.5" />
            </div>
            <span className="font-bold text-white">FIXCRAFT PRO</span> • <span>₹39,999 Pro Home Service Platform Demo</span>
          </div>

          <div className="flex gap-4 text-slate-400">
            <button onClick={() => setActiveTab('overview')} className="hover:text-white">Overview</button>
            <button onClick={() => setActiveTab('services')} className="hover:text-white">Services</button>
            <button onClick={() => setActiveTab('estimator')} className="hover:text-white">Estimator</button>
            <button onClick={() => setActiveTab('areas')} className="hover:text-white">Areas</button>
            <button onClick={() => setActiveTab('book')} className="hover:text-white">Book</button>
          </div>

          <div>© {new Date().getFullYear()} FixCraft Pro Services Ltd. All rights reserved.</div>
        </div>
      </footer>
    </div>
  );
};
