import React, { useState, useEffect } from 'react';
import { DemoItem } from '../../data/demos';
import {
  Wrench, Phone, MessageCircle, MapPin, Clock, Shield, Star,
  CheckCircle2, ArrowRight, Sparkles, ChevronRight, Menu, X,
  Send, User, Calendar, Check, Droplets, Zap, Wind, Hammer,
  Paintbrush, Sparkle, Search, Calculator, ChevronDown, ChevronUp,
  FileText, Award, HelpCircle, ArrowUpRight, CheckSquare, Layers,
  AlertTriangle, Navigation, Radio, Cpu, Activity, RefreshCw, Key,
  FileSpreadsheet, Lock, CheckCircle, Flame, BatteryCharging
} from 'lucide-react';

interface RepairMaxDemoProps {
  demo: DemoItem;
  isMobile: boolean;
  isTablet: boolean;
}

export const RepairMaxDemo: React.FC<RepairMaxDemoProps> = ({ isMobile }) => {
  const [activeTab, setActiveTab] = useState<'portal' | 'tracking' | 'divisions' | 'amc' | 'audit' | 'engineers' | 'dispatcher'>('portal');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Live Tracking Simulation State
  const [trackingStage, setTrackingStage] = useState<number>(3); // 1: Assigned, 2: Parts Picked, 3: En-Route, 4: At Location, 5: Completed
  const [etaMinutes, setEtaMinutes] = useState(14);
  const [otpCode] = useState('8492');
  const [isCallingTech, setIsCallingTech] = useState(false);

  // Whole Home Audit State
  const [selectedRooms, setSelectedRooms] = useState<string[]>(['living', 'kitchen', 'master-bath']);
  const [auditSeverity, setAuditSeverity] = useState<'mild' | 'moderate' | 'critical'>('moderate');

  // AMC Plan Selector
  const [selectedAmc, setSelectedAmc] = useState<'gold' | 'platinum'>('gold');

  // Simulate ETA decrementing
  useEffect(() => {
    const timer = setInterval(() => {
      setEtaMinutes(prev => (prev > 2 ? prev - 1 : 14));
    }, 15000);
    return () => clearInterval(timer);
  }, []);

  const enterpriseDivisions = [
    {
      id: 'div-smart-elec',
      name: 'High-Voltage Electrical & Automation',
      icon: Zap,
      leadTime: '20 mins',
      rate: '₹599 standard base',
      techsOnField: 14,
      desc: '3-phase power distribution, thermal breaker diagnostics, surge protection arrays, home automation relays & smart lighting switches.'
    },
    {
      id: 'div-hydro',
      name: 'Hydro-Infrastructure & Water Systems',
      icon: Droplets,
      leadTime: '25 mins',
      rate: '₹549 standard base',
      techsOnField: 18,
      desc: 'Smart booster pump calibration, whole-house water softener regeneration, concealed leak sonic detection & high-pressure CPVC loops.'
    },
    {
      id: 'div-central-hvac',
      name: 'Central Climate & Inverter HVAC',
      icon: Wind,
      leadTime: '30 mins',
      rate: '₹799 standard base',
      techsOnField: 12,
      desc: 'VRV/VRF ductable air conditioning balancing, inverter PCB diagnostic, nitrogen leak braze & antimicrobial coil sterilization.'
    },
    {
      id: 'div-structural',
      name: 'Structural Carpentry & Biometrics',
      icon: Hammer,
      leadTime: '35 mins',
      rate: '₹499 standard base',
      techsOnField: 9,
      desc: 'Digital smart lock retrofitting, heavy door hydraulic dampers, motorized sliding door track alignment & acoustic wall paneling.'
    },
    {
      id: 'div-moisture',
      name: 'Thermal Waterproofing & Sealants',
      icon: Paintbrush,
      leadTime: '40 mins',
      rate: '₹999 standard base',
      techsOnField: 8,
      desc: 'Infrared moisture mapping, polyurethane crack injection, epoxy tile joint regrouting & exterior thermal barrier membrane coating.'
    },
    {
      id: 'div-solar',
      name: 'Rooftop Solar & Micro-Inverters',
      icon: BatteryCharging,
      leadTime: '45 mins',
      rate: '₹1,199 standard base',
      techsOnField: 6,
      desc: 'Solar string inverter MPPT calibration, solar panel robotic deep washing, battery bank cell balancing & grid tie earthing.'
    }
  ];

  const certifiedEngineers = [
    {
      name: 'Vikram S. Rathore',
      badge: 'Master Electrician (Level 4)',
      exp: '11 Years Experience',
      rating: '4.98 ★ (1,840+ Jobs)',
      verified: 'Police & Polytech Certified',
      status: 'En-Route (Assigned to Your Job #APX-994)',
      image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=300&q=75'
    },
    {
      name: 'Mohammed Arshad',
      badge: 'Chief Hydro & Pump Engineer',
      exp: '9 Years Experience',
      rating: '4.96 ★ (1,420+ Jobs)',
      verified: 'Certified CPVC & Pump Master',
      status: 'On Standby in Indiranagar Hub',
      image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=300&q=75'
    },
    {
      name: 'Rajesh Nair',
      badge: 'HVAC & Refrigerant Specialist',
      exp: '8 Years Experience',
      rating: '4.95 ★ (1,290+ Jobs)',
      verified: 'Daikin & Carrier Certified',
      status: 'Completing Service in Koramangala',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=75'
    }
  ];

  return (
    <div className="w-full min-h-full bg-[#090D16] text-slate-100 font-sans overflow-x-hidden custom-scrollbar">
      
      {/* 1. TOP ENTERPRISE HUD BAR */}
      <div className="bg-slate-950 border-b border-emerald-900/40 text-xs py-2 px-4 text-slate-300">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1.5 bg-emerald-950 border border-emerald-700/60 text-emerald-400 text-[10px] font-black uppercase tracking-wider px-2.5 py-0.5 rounded-full shadow-xs">
              <Radio className="w-3 h-3 animate-pulse text-emerald-400" /> ₹59,999 Max Plan Demo
            </span>
            <span className="text-slate-400 hidden sm:inline">Apex Enterprise Home Logistics • 67 Active Fleet Units</span>
          </div>

          <div className="flex items-center gap-4 text-xs font-semibold">
            <div className="flex items-center gap-1.5 text-emerald-400">
              <Activity className="w-3.5 h-3.5" /> Fleet Response: <span className="font-bold text-white">18.4 Mins Avg.</span>
            </div>
            <span className="hidden sm:inline text-slate-700">|</span>
            <a href="tel:+918000998877" className="hover:text-emerald-300 flex items-center gap-1 text-white">
              <Phone className="w-3.5 h-3.5 text-emerald-400" /> 1800-APEX-FIX
            </a>
          </div>
        </div>
      </div>

      {/* 2. MAX HEADER NAV */}
      <header className="sticky top-0 z-40 bg-[#090D16]/95 backdrop-blur-md border-b border-slate-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3.5 flex items-center justify-between">
          
          {/* Brand Logo */}
          <div 
            onClick={() => setActiveTab('portal')}
            className="flex items-center gap-3 cursor-pointer select-none group"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-500 via-teal-600 to-slate-900 border border-emerald-400/40 flex items-center justify-center text-white shadow-lg shadow-emerald-500/20 group-hover:scale-105 transition-transform">
              <Shield className="w-5 h-5 text-emerald-200" />
            </div>
            <div>
              <div className="text-xl font-black text-white tracking-tight leading-none flex items-center gap-1.5">
                APEX <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-200">MAX CARE</span>
              </div>
              <div className="text-[10px] text-emerald-400/80 font-bold tracking-widest uppercase mt-0.5">
                Full-Stack Home Infrastructure OS
              </div>
            </div>
          </div>

          {/* Desktop Nav Items */}
          <nav className="hidden lg:flex items-center gap-1 bg-slate-900/90 p-1.5 rounded-2xl border border-slate-800">
            {[
              { id: 'portal', label: 'Client Portal' },
              { id: 'tracking', label: 'Live GPS Tracker', badge: 'LIVE' },
              { id: 'divisions', label: '8 Service Divisions' },
              { id: 'audit', label: 'Whole-Home Audit' },
              { id: 'amc', label: 'Annual AMC Plans' },
              { id: 'engineers', label: 'Certified Fleet' },
              { id: 'dispatcher', label: 'Control Room' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${
                  activeTab === tab.id 
                    ? 'bg-emerald-600 text-white shadow-md shadow-emerald-600/30' 
                    : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
                }`}
              >
                <span>{tab.label}</span>
                {tab.badge && (
                  <span className="bg-emerald-400 text-slate-950 text-[9px] font-black px-1.5 py-0.2 rounded-full">
                    {tab.badge}
                  </span>
                )}
              </button>
            ))}
          </nav>

          {/* Emergency 24/7 Red Alert Button */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => setActiveTab('tracking')}
              className="hidden sm:inline-flex items-center gap-2 bg-gradient-to-r from-rose-600 to-red-600 hover:from-rose-500 hover:to-red-500 text-white text-xs font-black px-4 py-2.5 rounded-xl shadow-lg shadow-rose-600/30 transition-all animate-pulse"
            >
              <Flame className="w-4 h-4 text-amber-300" />
              <span>30-Min Emergency Alert</span>
            </button>

            {/* Mobile Nav Toggle */}
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
              { id: 'portal', label: 'Client Home Portal' },
              { id: 'tracking', label: 'Live GPS Technician Telematics' },
              { id: 'divisions', label: '8 Specialized Engineering Divisions' },
              { id: 'audit', label: 'Multi-Room Whole-Home Audit Tool' },
              { id: 'amc', label: 'Annual AMC Maintenance Subscriptions' },
              { id: 'engineers', label: 'Police-Verified Master Engineers' },
              { id: 'dispatcher', label: 'Central Dispatch Telemetry Console' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => {
                  setActiveTab(tab.id as any);
                  setMobileMenuOpen(false);
                }}
                className={`w-full text-left py-2.5 px-3 rounded-lg text-xs font-bold transition-all ${
                  activeTab === tab.id ? 'bg-emerald-600 text-white' : 'text-slate-300 hover:bg-slate-900'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        )}
      </header>

      {/* ========================================================================= */}
      {/* 1. PORTAL & HERO VIEW */}
      {/* ========================================================================= */}
      {activeTab === 'portal' && (
        <div className="space-y-16 animate-in fade-in duration-300">
          
          {/* HERO SECTION */}
          <section className="relative pt-12 pb-16 px-4 sm:px-6 overflow-hidden">
            <div className="absolute top-1/4 left-1/3 w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute top-1/2 right-10 w-[400px] h-[400px] bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />

            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 items-center relative z-10">
              
              <div className="lg:col-span-7 space-y-6">
                <div className="inline-flex items-center gap-2 bg-emerald-950/80 border border-emerald-700/60 px-4 py-1.5 rounded-full text-xs font-bold text-emerald-300">
                  <Cpu className="w-4 h-4 text-emerald-400" />
                  <span>Next-Gen Field Service Management Platform</span>
                </div>

                <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight">
                  Autonomous <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-300">Home Care & Rapid Dispatch</span> Ecosystem.
                </h1>

                <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-xl">
                  Military-grade precision maintenance for luxury villas, apartments, and corporate residences. Live GPS telematics, tamper-proof OTP entry, and digital warranty vaults.
                </p>

                <div className="flex flex-wrap items-center gap-4 pt-2">
                  <button
                    onClick={() => setActiveTab('tracking')}
                    className="bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-slate-950 font-black text-sm px-7 py-3.5 rounded-xl shadow-xl shadow-emerald-500/25 transition-all flex items-center gap-2"
                  >
                    <span>Launch Live GPS Tracker</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  <button
                    onClick={() => setActiveTab('audit')}
                    className="bg-slate-900 hover:bg-slate-800 text-slate-200 hover:text-white font-bold text-sm px-6 py-3.5 rounded-xl border border-slate-700 transition-all flex items-center gap-2"
                  >
                    <FileSpreadsheet className="w-4 h-4 text-teal-400" />
                    <span>Run Whole-Home Audit</span>
                  </button>
                </div>

                {/* 4 Critical Security Badges */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-6 border-t border-slate-800">
                  <div className="flex items-center gap-2 text-xs font-semibold text-slate-300">
                    <Key className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Digital OTP Verification</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs font-semibold text-slate-300">
                    <Shield className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>₹50 Lakh Insurance</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs font-semibold text-slate-300">
                    <Clock className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>30-Min SLA Arrival</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs font-semibold text-slate-300">
                    <FileText className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>1-Year Digital Vault</span>
                  </div>
                </div>
              </div>

              {/* Live Active Job Card Preview in Hero */}
              <div className="lg:col-span-5 bg-gradient-to-b from-slate-900 to-slate-950 border border-emerald-800/60 rounded-3xl p-6 sm:p-8 shadow-2xl shadow-emerald-950/40 space-y-5">
                <div className="flex items-center justify-between border-b border-slate-800 pb-4">
                  <div>
                    <span className="text-[10px] font-black uppercase tracking-wider text-emerald-400">Live Active Job Telematics</span>
                    <h3 className="text-base font-bold text-white">Job #APX-9941 • Hydro & MCB</h3>
                  </div>
                  <span className="bg-emerald-950 border border-emerald-700 text-emerald-400 text-xs font-black px-2.5 py-1 rounded-full animate-pulse flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span> EN-ROUTE
                  </span>
                </div>

                <div className="space-y-3">
                  <div className="bg-slate-950 border border-slate-800 rounded-2xl p-4 flex items-center gap-4">
                    <img loading="lazy"
                      src={certifiedEngineers[0].image}
                      alt="Assigned Tech"
                      className="w-12 h-12 rounded-xl object-cover border border-emerald-500"
                    />
                    <div className="flex-1 min-w-0">
                      <div className="text-xs font-bold text-white truncate">{certifiedEngineers[0].name}</div>
                      <div className="text-[11px] text-slate-400 truncate">{certifiedEngineers[0].badge}</div>
                      <div className="text-[11px] text-emerald-400 font-bold mt-0.5">{certifiedEngineers[0].rating}</div>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3 text-xs">
                    <div className="bg-slate-950 border border-slate-800 p-3 rounded-xl">
                      <span className="text-slate-400 text-[10px] block">Live ETA:</span>
                      <span className="text-base font-black text-emerald-400">{etaMinutes} Minutes</span>
                    </div>
                    <div className="bg-slate-950 border border-slate-800 p-3 rounded-xl">
                      <span className="text-slate-400 text-[10px] block">Door Entry OTP:</span>
                      <span className="text-base font-mono font-black text-amber-400 tracking-widest">{otpCode}</span>
                    </div>
                  </div>
                </div>

                <div className="pt-2">
                  <button
                    onClick={() => setActiveTab('tracking')}
                    className="w-full bg-emerald-600 hover:bg-emerald-500 text-slate-950 font-black text-xs py-3 rounded-xl shadow-lg transition-colors flex items-center justify-center gap-2"
                  >
                    <Navigation className="w-4 h-4" /> Open Full Screen GPS Radar
                  </button>
                </div>
              </div>
            </div>
          </section>

          {/* 8 MASTER SERVICE DIVISIONS GRID */}
          <section className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-emerald-400">Enterprise Engineering Divisions</span>
                <h2 className="text-2xl sm:text-3xl font-black text-white">Full-Home Infrastructure Mastery</h2>
              </div>
              <button
                onClick={() => setActiveTab('divisions')}
                className="text-xs font-bold text-teal-400 hover:underline flex items-center gap-1"
              >
                <span>Explore all 8 Divisions</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {enterpriseDivisions.map((div) => {
                const DivIcon = div.icon;
                return (
                  <div
                    key={div.id}
                    className="bg-slate-900/80 border border-slate-800 hover:border-emerald-500/50 rounded-3xl p-6 transition-all shadow-xl hover:shadow-emerald-500/10 space-y-4 flex flex-col justify-between"
                  >
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <div className="w-10 h-10 rounded-xl bg-emerald-950 border border-emerald-800 flex items-center justify-center text-emerald-400">
                          <DivIcon className="w-5 h-5" />
                        </div>
                        <span className="text-xs font-bold text-slate-400">{div.rate}</span>
                      </div>

                      <h3 className="font-bold text-base text-white">{div.name}</h3>
                      <p className="text-xs text-slate-400 leading-relaxed">{div.desc}</p>
                    </div>

                    <div className="pt-3 border-t border-slate-800 flex items-center justify-between text-xs">
                      <span className="text-emerald-400 font-bold flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5" /> SLA: {div.leadTime}
                      </span>
                      <span className="text-slate-400">{div.techsOnField} Units On Field</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>

          {/* AMC PLANS PREVIEW */}
          <section className="bg-slate-950 py-14 px-4 sm:px-6 border-t border-b border-slate-800">
            <div className="max-w-6xl mx-auto space-y-10">
              <div className="text-center max-w-2xl mx-auto space-y-2">
                <span className="text-xs font-bold uppercase tracking-widest text-amber-400">Total Residence Protection</span>
                <h2 className="text-2xl sm:text-3xl font-black text-white">Annual Maintenance Contract (AMC)</h2>
                <p className="text-xs sm:text-sm text-slate-400">
                  Zero labor charges all year round. Unlimited emergency visits and 4 comprehensive seasonal preventive audits.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                
                {/* Gold Shield */}
                <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 space-y-6 flex flex-col justify-between">
                  <div className="space-y-4">
                    <div className="flex justify-between items-start">
                      <div>
                        <span className="text-xs font-bold text-amber-400 uppercase">3-4 BHK Apartment Care</span>
                        <h3 className="text-2xl font-black text-white mt-1">Gold Home Shield</h3>
                      </div>
                      <div className="text-2xl font-black text-amber-400">₹9,999 <span className="text-xs text-slate-400 font-normal">/year</span></div>
                    </div>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      Complete electrical, plumbing, and basic HVAC coverage with prioritized 45-minute dispatch and free seasonal inspections.
                    </p>
                    <div className="space-y-2 pt-2 border-t border-slate-800 text-xs text-slate-300">
                      <div className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-400" /> Unlimited Free Labor on all Plumbing & Electrical</div>
                      <div className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-400" /> 4 Deep AC Jet Washes Included (Free of Cost)</div>
                      <div className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-400" /> Dedicated Senior Engineer Assigned</div>
                      <div className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-400" /> 45-Minute Emergency SLA Guarantee</div>
                    </div>
                  </div>
                  <button
                    onClick={() => setActiveTab('amc')}
                    className="w-full bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs py-3 rounded-xl border border-slate-700"
                  >
                    Select Gold Shield
                  </button>
                </div>

                {/* Platinum Whole-Home */}
                <div className="bg-gradient-to-b from-emerald-950/40 to-slate-900 border-2 border-emerald-500 rounded-3xl p-8 space-y-6 flex flex-col justify-between relative shadow-2xl">
                  <div className="absolute -top-3 right-8 bg-emerald-500 text-slate-950 text-[10px] font-black px-3 py-1 rounded-full uppercase">
                    MOST POPULAR FOR VILLAS
                  </div>
                  <div className="space-y-4">
                    <div className="flex justify-between items-start">
                      <div>
                        <span className="text-xs font-bold text-emerald-400 uppercase">Villas & Luxury Penthouses</span>
                        <h3 className="text-2xl font-black text-white mt-1">Platinum Autonomous</h3>
                      </div>
                      <div className="text-2xl font-black text-emerald-400">₹17,999 <span className="text-xs text-slate-400 font-normal">/year</span></div>
                    </div>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      Everything in Gold plus rooftop solar balancing, water pump telemetry, carpentry alignments, and 25-minute VIP rapid dispatch.
                    </p>
                    <div className="space-y-2 pt-2 border-t border-slate-800 text-xs text-slate-200">
                      <div className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-400" /> Unlimited Free Labor across ALL 8 Divisions</div>
                      <div className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-400" /> 8 AC Jet Washes & Full Refrigerant Top-Ups</div>
                      <div className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-400" /> 25-Minute VIP Rapid Response Guarantee</div>
                      <div className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-400" /> ₹50 Lakh Home Hazard Damage Indemnity</div>
                    </div>
                  </div>
                  <button
                    onClick={() => setActiveTab('amc')}
                    className="w-full bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black text-xs py-3 rounded-xl shadow-lg"
                  >
                    Select Platinum Autonomous
                  </button>
                </div>
              </div>
            </div>
          </section>
        </div>
      )}

      {/* ========================================================================= */}
      {/* 2. LIVE GPS TRACKER VIEW */}
      {/* ========================================================================= */}
      {activeTab === 'tracking' && (
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-12 space-y-10 animate-in fade-in duration-300">
          <div className="text-center max-w-xl mx-auto space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-emerald-400">Active Field Telematics</span>
            <h1 className="text-3xl sm:text-4xl font-black text-white">Live Technician GPS Tracking</h1>
            <p className="text-xs sm:text-sm text-slate-400">
              Simulated real-time dispatcher telemetry showing technician location, vehicle speed, and secure OTP verification.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            
            {/* Left: Map Radar Simulator */}
            <div className="lg:col-span-7 bg-slate-900 border border-slate-800 rounded-3xl p-6 space-y-5 relative overflow-hidden">
              <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping"></span>
                  <span className="font-bold text-xs text-white">Live Telemetry Map</span>
                </div>
                <span className="text-[11px] text-slate-400 font-mono">GPS Signal: 99.4% (Precision Lock)</span>
              </div>

              {/* Simulated Map Visual */}
              <div className="relative w-full h-64 bg-slate-950 rounded-2xl border border-slate-800 overflow-hidden flex items-center justify-center">
                {/* Radar Grid Lines */}
                <div className="absolute inset-0 bg-[radial-gradient(#10b981_1px,transparent_1px)] [background-size:16px_16px] opacity-20" />
                <div className="absolute w-44 h-44 rounded-full border border-emerald-500/30 animate-ping pointer-events-none" />

                {/* Home Destination Pin */}
                <div className="absolute top-12 right-16 flex flex-col items-center">
                  <div className="bg-blue-600 text-white p-2 rounded-full shadow-lg">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <span className="text-[10px] font-bold text-white bg-slate-900 px-2 py-0.5 rounded mt-1 border border-slate-700">
                    Your Home (Prestige Palms)
                  </span>
                </div>

                {/* Moving Technician Van Pin */}
                <div className="absolute bottom-14 left-16 flex flex-col items-center">
                  <div className="bg-emerald-500 text-slate-950 p-2.5 rounded-full shadow-xl shadow-emerald-500/40 animate-bounce">
                    <Navigation className="w-5 h-5 transform rotate-45" />
                  </div>
                  <span className="text-[10px] font-black text-slate-950 bg-emerald-400 px-2 py-0.5 rounded mt-1 shadow-md">
                    Van #14 • Vikram S. (ETA {etaMinutes}m)
                  </span>
                </div>

                {/* Road Connector Vector */}
                <div className="absolute w-48 h-0.5 bg-gradient-to-r from-emerald-400 via-teal-300 to-blue-500 transform rotate-[-25deg] opacity-70" />
              </div>

              {/* 5-Stage Job Lifecycle Bar */}
              <div className="space-y-2 pt-2">
                <span className="text-xs font-semibold text-slate-300 block">Job Lifecycle Status:</span>
                <div className="grid grid-cols-5 gap-1 text-center text-[10px] font-bold">
                  {[
                    { id: 1, label: '1. Received' },
                    { id: 2, label: '2. Assigned' },
                    { id: 3, label: '3. En-Route' },
                    { id: 4, label: '4. In-Service' },
                    { id: 5, label: '5. Audited' }
                  ].map(stage => (
                    <button
                      key={stage.id}
                      onClick={() => setTrackingStage(stage.id)}
                      className={`p-2 rounded-xl border transition-all ${
                        trackingStage >= stage.id 
                          ? 'bg-emerald-950 border-emerald-500 text-emerald-300' 
                          : 'bg-slate-950 border-slate-800 text-slate-600'
                      }`}
                    >
                      {stage.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Right: Assigned Engineer Profile & Secure Door Entry */}
            <div className="lg:col-span-5 bg-slate-900 border border-slate-800 rounded-3xl p-6 space-y-6 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                  <span className="text-xs font-bold text-emerald-400 uppercase">Assigned Master Engineer</span>
                  <span className="text-xs text-slate-400 font-mono">ID: #ENG-4890</span>
                </div>

                <div className="flex items-center gap-4">
                  <img loading="lazy"
                    src={certifiedEngineers[0].image}
                    alt={certifiedEngineers[0].name}
                    className="w-16 h-16 rounded-2xl object-cover border-2 border-emerald-500"
                  />
                  <div>
                    <h3 className="font-bold text-base text-white">{certifiedEngineers[0].name}</h3>
                    <p className="text-xs text-slate-300">{certifiedEngineers[0].badge}</p>
                    <p className="text-xs text-emerald-400 font-bold mt-1">{certifiedEngineers[0].rating}</p>
                  </div>
                </div>

                {/* Secure OTP Door Entry Verification */}
                <div className="bg-slate-950 border border-emerald-800/60 rounded-2xl p-4 space-y-2">
                  <div className="flex justify-between items-center text-xs">
                    <span className="font-bold text-slate-300 flex items-center gap-1.5">
                      <Lock className="w-3.5 h-3.5 text-emerald-400" /> Door Entry Verification OTP
                    </span>
                    <span className="text-[10px] text-emerald-400 font-mono">Single-Use Code</span>
                  </div>
                  <div className="text-3xl font-mono font-black text-amber-400 tracking-widest text-center py-2 bg-slate-900 rounded-xl border border-slate-800">
                    {otpCode}
                  </div>
                  <p className="text-[11px] text-slate-400 text-center">
                    Share this code with Vikram upon arrival to authorize apartment entry.
                  </p>
                </div>
              </div>

              {/* Live Direct Contact */}
              <div className="space-y-2">
                <button
                  onClick={() => setIsCallingTech(!isCallingTech)}
                  className="w-full bg-emerald-600 hover:bg-emerald-500 text-slate-950 font-black text-xs py-3.5 rounded-xl shadow-lg transition-all flex items-center justify-center gap-2"
                >
                  <Phone className="w-4 h-4" /> {isCallingTech ? 'Connecting Secure Call to Vikram...' : 'Call Assigned Technician'}
                </button>

                <a
                  href="https://wa.me/919845012345"
                  target="_blank"
                  rel="noreferrer"
                  className="w-full bg-slate-950 hover:bg-slate-800 text-white font-bold text-xs py-3 rounded-xl border border-slate-800 transition-all flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-4 h-4 text-emerald-400" /> Send WhatsApp Instructions
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* 3. WHOLE-HOME AUDIT VIEW */}
      {/* ========================================================================= */}
      {activeTab === 'audit' && (
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12 space-y-10 animate-in fade-in duration-300">
          <div className="text-center max-w-xl mx-auto space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-teal-400">Preventive Diagnostics</span>
            <h1 className="text-3xl sm:text-4xl font-black text-white">Whole-Home Engineering Audit</h1>
            <p className="text-xs sm:text-sm text-slate-400">
              Select key rooms to simulate an end-to-end electrical load, hydro pressure, and HVAC efficiency assessment.
            </p>
          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 space-y-8">
            <div className="space-y-4">
              <h3 className="font-bold text-sm text-white border-b border-slate-800 pb-2">
                Select Zones for Inspection:
              </h3>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {[
                  { id: 'living', label: 'Living Room & Balcony', count: '14 Checkpoints' },
                  { id: 'kitchen', label: 'Modular Kitchen & Utility', count: '18 Checkpoints' },
                  { id: 'master-bath', label: 'Master Bathroom Suites', count: '12 Checkpoints' },
                  { id: 'guest-bath', label: 'Guest Washroom & Geysers', count: '10 Checkpoints' },
                  { id: 'rooftop', label: 'Rooftop Tank & Solar Array', count: '16 Checkpoints' },
                  { id: 'incomer', label: 'Main Incomer MCB & Earth', count: '8 Checkpoints' }
                ].map((room) => {
                  const isChecked = selectedRooms.includes(room.id);
                  return (
                    <div
                      key={room.id}
                      onClick={() => {
                        if (isChecked) {
                          setSelectedRooms(selectedRooms.filter(r => r !== room.id));
                        } else {
                          setSelectedRooms([...selectedRooms, room.id]);
                        }
                      }}
                      className={`p-4 rounded-2xl border cursor-pointer transition-all ${
                        isChecked 
                          ? 'bg-emerald-950/60 border-emerald-500 text-white' 
                          : 'bg-slate-950 border-slate-800 text-slate-400 hover:border-slate-700'
                      }`}
                    >
                      <div className="text-xs font-bold text-white">{room.label}</div>
                      <div className="text-[11px] text-emerald-400 mt-1">{room.count}</div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="bg-slate-950 border border-slate-800 rounded-2xl p-6 space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-xs font-bold text-slate-300">Computed Health Score:</span>
                <span className="text-xl font-black text-emerald-400">92 / 100 (Optimal)</span>
              </div>
              <div className="w-full bg-slate-900 h-2.5 rounded-full overflow-hidden border border-slate-800">
                <div className="bg-gradient-to-r from-emerald-500 to-teal-400 h-full w-[92%]"></div>
              </div>
              <p className="text-xs text-slate-400">
                Audit includes thermal scans of all selected distribution boxes, ultrasonic pipe leak testing, and digital manifold pressure delta reports.
              </p>
            </div>

            <button
              onClick={() => setActiveTab('tracking')}
              className="w-full bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 text-slate-950 font-black text-xs py-3.5 rounded-xl shadow-lg"
            >
              Schedule Full Home Audit Visit (₹1,499)
            </button>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* 4. DISPATCHER TELEMETRY CONSOLE */}
      {/* ========================================================================= */}
      {activeTab === 'dispatcher' && (
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 space-y-10 animate-in fade-in duration-300">
          <div className="text-center max-w-xl mx-auto space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-emerald-400">Telemetry Cockpit</span>
            <h1 className="text-3xl sm:text-4xl font-black text-white">Central Dispatch Control Room</h1>
            <p className="text-xs sm:text-sm text-slate-400">
              Live operational metrics showing field technician distribution, queue latency, and real-time SLA conformance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="bg-slate-900 border border-slate-800 p-5 rounded-2xl">
              <span className="text-xs text-slate-400 block">Active Vans on Road</span>
              <div className="text-2xl font-black text-white mt-1">67 Units</div>
              <span className="text-[11px] text-emerald-400 font-semibold">100% Operational</span>
            </div>
            <div className="bg-slate-900 border border-slate-800 p-5 rounded-2xl">
              <span className="text-xs text-slate-400 block">Avg. Emergency Response</span>
              <div className="text-2xl font-black text-emerald-400 mt-1">18.4 Mins</div>
              <span className="text-[11px] text-slate-400 font-semibold">SLA Target: 30 Mins</span>
            </div>
            <div className="bg-slate-900 border border-slate-800 p-5 rounded-2xl">
              <span className="text-xs text-slate-400 block">First-Time Fix Rate</span>
              <div className="text-2xl font-black text-teal-400 mt-1">97.8%</div>
              <span className="text-[11px] text-slate-400 font-semibold">Quality Verified</span>
            </div>
            <div className="bg-slate-900 border border-slate-800 p-5 rounded-2xl">
              <span className="text-xs text-slate-400 block">Customer NPS</span>
              <div className="text-2xl font-black text-amber-400 mt-1">+94</div>
              <span className="text-[11px] text-emerald-400 font-semibold">Top Decile</span>
            </div>
          </div>
        </div>
      )}

      {/* MAX FOOTER */}
      <footer className="bg-slate-950 border-t border-slate-800 py-10 px-4 sm:px-6 text-xs text-slate-400">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-lg bg-emerald-600 text-white flex items-center justify-center font-bold">
              <Shield className="w-3.5 h-3.5" />
            </div>
            <span className="font-bold text-white">APEX MAX CARE</span> • <span>₹59,999 Enterprise Home Services Ecosystem</span>
          </div>

          <div className="flex gap-4 text-slate-400">
            <button onClick={() => setActiveTab('portal')} className="hover:text-white">Portal</button>
            <button onClick={() => setActiveTab('tracking')} className="hover:text-white">GPS Tracker</button>
            <button onClick={() => setActiveTab('divisions')} className="hover:text-white">Divisions</button>
            <button onClick={() => setActiveTab('audit')} className="hover:text-white">Audit</button>
            <button onClick={() => setActiveTab('amc')} className="hover:text-white">AMC</button>
          </div>

          <div>© {new Date().getFullYear()} Apex Home Technologies Ltd. All rights reserved.</div>
        </div>
      </footer>
    </div>
  );
};
