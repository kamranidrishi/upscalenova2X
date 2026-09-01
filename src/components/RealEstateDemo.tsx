import React, { useState, useMemo } from 'react';
import { DemoItem, PlanType } from '../data/demos';
import { PRICING_PLANS } from '../data/content';
const basePrice = PRICING_PLANS.find(p => p.id === 'base')?.price || '₹24,999';
const proPrice = PRICING_PLANS.find(p => p.id === 'pro')?.price || '₹39,999';
const maxPrice = PRICING_PLANS.find(p => p.id === 'max')?.price || '₹59,999';

import {
  PROJECT_DETAILS,
  PROPERTIES_DATA,
  AMENITIES_LIST,
  LOCATION_PROXIMITIES,
  INITIAL_REAL_ESTATE_LEADS,
  INVENTORY_UNITS_DATA,
  VIRTUAL_TOUR_ROOMS,
  RealEstateProperty,
  RealEstateLead,
  InventoryUnit
} from '../data/realEstateData';
import {
  Building2, Home, MapPin, Phone, MessageSquare, ArrowRight, Lock,
  ChevronRight, Play, Check, Plus, Minus, UserCheck, TrendingUp,
  Activity, BarChart3, PieChart, Sparkles, Send, Zap, AlertCircle,
  RefreshCw, Layers, CheckCircle2, ChevronDown, CreditCard, Smartphone,
  Heart, Eye, Bell, Bot, Copy, HelpCircle, ExternalLink, FileText,
  CheckSquare, MessageCircle, X, Shield, Award, Users, Star,
  Compass, Maximize2, Download, Calendar, DollarSign, Key,
  CheckCircle, Video, Filter, Search, ChevronLeft
} from 'lucide-react';

interface RealEstateDemoProps {
  demo: DemoItem;
  isMobile: boolean;
  isTablet: boolean;
  onPlanChange?: (plan: PlanType) => void;
}

export const RealEstateDemo: React.FC<RealEstateDemoProps> = ({ demo, isMobile, onPlanChange }) => {
  const plan = demo.plan;
  const isBase = plan === 'Base';
  const isPro = plan === 'Pro';
  const isMax = plan === 'Max';

  // Navigation & View State
  const [activeTab, setActiveTab] = useState<'website' | 'crm' | 'virtual-tour' | 'inventory' | 'buyer-portal' | 'compare'>('website');
  const [activeRole, setActiveRole] = useState<'Sales Director' | 'Relationship Manager' | 'Buyer'>('Sales Director');
  
  // Filter States for Pro / Max
  const [selectedBhkFilter, setSelectedBhkFilter] = useState<string>('All');
  const [maxPriceFilter, setMaxPriceFilter] = useState<number>(400); // in Lakhs
  const [selectedFacingFilter, setSelectedFacingFilter] = useState<string>('All');
  
  // Modals & Selected Items
  const [selectedPropertyForModal, setSelectedPropertyForModal] = useState<RealEstateProperty | null>(null);
  const [isSiteVisitModalOpen, setIsSiteVisitModalOpen] = useState(false);
  const [isBrochureModalOpen, setIsBrochureModalOpen] = useState(false);
  const [isTokenBookingModalOpen, setIsTokenBookingModalOpen] = useState(false);
  const [selectedUnitForBooking, setSelectedUnitForBooking] = useState<InventoryUnit | null>(null);
  const [tokenPaymentMethod, setTokenPaymentMethod] = useState<'UPI' | 'Card' | 'NetBanking'>('UPI');
  const [tokenBookingSuccess, setTokenBookingSuccess] = useState(false);
  const [brochureDownloadSuccess, setBrochureDownloadSuccess] = useState(false);
  const [siteVisitSuccess, setSiteVisitSuccess] = useState(false);

  // Virtual Tour State (Max)
  const [activeTourRoomId, setActiveTourRoomId] = useState<string>('living-room');

  // Leads CRM State (Pro & Max)
  const [leads, setLeads] = useState<RealEstateLead[]>(INITIAL_REAL_ESTATE_LEADS);
  const [leadStageFilter, setLeadStageFilter] = useState<string>('All');
  const [leadSearchQuery, setLeadSearchQuery] = useState('');

  // EMI Calculator State (Pro & Max)
  const [loanAmountLakhs, setLoanAmountLakhs] = useState<number>(100);
  const [loanInterestRate, setLoanInterestRate] = useState<number>(8.75);
  const [loanTenureYears, setLoanTenureYears] = useState<number>(20);

  // AI Assistant Chatbot State
  const [isAiOpen, setIsAiOpen] = useState(false);
  const [aiChatMessages, setAiChatMessages] = useState<Array<{ sender: 'user' | 'ai'; text: string; time: string }>>([
    {
      sender: 'ai',
      text: "Namaste & Welcome to Nova Heights Residences! 🏙️ I'm your AI Property Concierge. Ask me about BHK floor plans, RERA approvals, bank loan eligibility, or book an instant site visit.",
      time: 'Just now'
    }
  ]);
  const [aiInputText, setAiInputText] = useState('');

  // Site Visit Form
  const [siteVisitForm, setSiteVisitForm] = useState({
    name: '',
    phone: '',
    email: '',
    bhk: '3 BHK Royale',
    date: '2026-08-20',
    timeSlot: 'Morning (10:30 AM - 12:30 PM)',
    cabPickup: true,
    address: ''
  });

  // Calculate filtered properties
  const filteredProperties = useMemo(() => {
    return PROPERTIES_DATA.filter(p => {
      if (selectedBhkFilter !== 'All' && p.bhk !== selectedBhkFilter) return false;
      if (p.priceNumeric > maxPriceFilter) return false;
      if (selectedFacingFilter !== 'All' && !p.facing.includes(selectedFacingFilter)) return false;
      return true;
    });
  }, [selectedBhkFilter, maxPriceFilter, selectedFacingFilter]);

  // EMI Calculation formula
  const calculatedEmi = useMemo(() => {
    const principal = loanAmountLakhs * 100000;
    const monthlyRate = loanInterestRate / (12 * 100);
    const months = loanTenureYears * 12;
    if (monthlyRate === 0) return Math.round(principal / months);
    const emi = (principal * monthlyRate * Math.pow(1 + monthlyRate, months)) / (Math.pow(1 + monthlyRate, months) - 1);
    const totalPayment = emi * months;
    const totalInterest = totalPayment - principal;
    return {
      monthlyEmi: Math.round(emi),
      totalPayment: Math.round(totalPayment),
      totalInterest: Math.round(totalInterest)
    };
  }, [loanAmountLakhs, loanInterestRate, loanTenureYears]);

  // AI Chat Handler
  const handleAiSend = (textToSend?: string) => {
    const text = textToSend || aiInputText;
    if (!text.trim()) return;

    setAiChatMessages(prev => [...prev, { sender: 'user', text, time: 'Just now' }]);
    if (!textToSend) setAiInputText('');

    setTimeout(() => {
      let reply = "Nova Heights Residences offers luxury 2, 3 & 4 BHK apartments with 82% open green space, RERA certification, and 45+ premium amenities. Would you like to schedule a free VIP site visit with cab pickup?";
      const lower = text.toLowerCase();
      if (lower.includes('price') || lower.includes('cost') || lower.includes('rate') || lower.includes('budget')) {
        reply = "Our pricing starts at ₹92.5 Lakhs for 2 BHK Luxury, ₹1.48 Crore for 3 BHK Royale, ₹1.82 Crore for 3 BHK Grand Suite, and ₹3.45 Crore for 4 BHK Penthouse. We offer flexible 20:80 construction-linked payment plans.";
      } else if (lower.includes('rera') || lower.includes('legal') || lower.includes('approval')) {
        reply = `Nova Heights is 100% RERA compliant with registration ID: ${PROJECT_DETAILS.reraId}. Pre-approved by SBI, HDFC, ICICI, and Axis Bank with zero processing fee offers.`;
      } else if (lower.includes('visit') || lower.includes('book') || lower.includes('see') || lower.includes('sample')) {
        reply = "I can arrange a complimentary AC cab pickup for your family to visit our fully-furnished show flat. Click 'Schedule Site Visit' above or select your preferred date!";
      } else if (lower.includes('possession') || lower.includes('handover') || lower.includes('date')) {
        reply = "Construction is advancing on fast-track schedule with 18th floor slab completed! Targeted handover is December 2026 with guaranteed on-time penalty clause.";
      } else if (lower.includes('vastu') || lower.includes('facing')) {
        reply = "All our 2, 3 & 4 BHK residences are 100% Vastu-compliant with East and North-East facing entrance options, kitchen placed in the Agni corner (South-East), and master bedrooms in the South-West.";
      } else if (lower.includes('amenities') || lower.includes('pool') || lower.includes('clubhouse')) {
        reply = "Residents enjoy 45+ lifestyle amenities including a 32nd-floor Rooftop Infinity Pool, 25,000 sq.ft Clubhouse, Technogym Fitness Studio, Squash Courts, Zen Aroma Garden, and EV charging stations for every tower.";
      }

      setAiChatMessages(prev => [...prev, { sender: 'ai', text: reply, time: 'Just now' }]);
    }, 600);
  };

  const currentTourRoom = VIRTUAL_TOUR_ROOMS.find(r => r.id === activeTourRoomId) || VIRTUAL_TOUR_ROOMS[0];

  return (
    <div className="w-full min-h-full bg-slate-950 text-slate-100 overflow-x-hidden font-sans custom-scrollbar select-text">
      
      {/* ========================================================================= */}
      {/* 1. TOP PACKAGE SWITCHER BAR (Interactive Upscale Nova Package Controller) */}
      {/* ========================================================================= */}
      <div className="sticky top-0 z-50 bg-slate-900/95 backdrop-blur-md border-b border-emerald-500/20 px-4 py-2.5 shadow-xl">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400">
              <Building2 className="w-4 h-4" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-extrabold text-xs uppercase tracking-wider text-white">Nova Heights</span>
                <span className="text-[10px] bg-emerald-500/20 text-emerald-300 font-bold px-2 py-0.5 rounded border border-emerald-500/30">
                  REAL ESTATE DEMO
                </span>
              </div>
              <p className="text-[10px] text-slate-400 hidden sm:block">
                Interactive Multi-Tier Solution: Explore Base, Pro & Max Platforms
              </p>
            </div>
          </div>

          {/* Interactive Tier Buttons */}
          <div className="flex items-center gap-1.5 bg-slate-950/80 p-1 rounded-xl border border-slate-800">
            <button
              onClick={() => onPlanChange?.('Base')}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 ${
                isBase
                  ? 'bg-emerald-600 text-white shadow-md shadow-emerald-600/30'
                  : 'text-slate-400 hover:text-white hover:bg-slate-800'
              }`}
            >
              <span>BASE</span>
              <span className="opacity-75 text-[10px]">{basePrice}</span>
            </button>

            <button
              onClick={() => onPlanChange?.('Pro')}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 ${
                isPro
                  ? 'bg-emerald-600 text-white shadow-md shadow-emerald-600/30'
                  : 'text-slate-400 hover:text-white hover:bg-slate-800'
              }`}
            >
              <span>PRO</span>
              <span className="opacity-75 text-[10px]">{proPrice}</span>
            </button>

            <button
              onClick={() => onPlanChange?.('Max')}
              className={`relative px-3.5 py-1.5 rounded-lg text-xs font-black transition-all flex items-center gap-1.5 ${
                isMax
                  ? 'bg-gradient-to-r from-emerald-500 via-teal-500 to-amber-500 text-slate-950 shadow-lg shadow-emerald-500/30 font-black'
                  : 'text-amber-400 hover:text-white hover:bg-slate-800'
              }`}
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>MAX</span>
              <span className="text-[10px] opacity-90">{maxPrice}</span>
              <span className="absolute -top-2.5 -right-2 bg-gradient-to-r from-amber-400 to-amber-500 text-slate-950 text-[8px] font-black uppercase px-1.5 py-0.2 rounded-full shadow-sm animate-pulse">
                BEST
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* 2. SUB-NAVIGATION FOR PRO & MAX (Dashboard, CRM, 360° Tour, Portal)     */}
      {/* ========================================================================= */}
      {!isBase && (
        <div className="bg-slate-900 border-b border-slate-800 px-4 py-2">
          <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-2 overflow-x-auto custom-scrollbar py-0.5">
              <button
                onClick={() => setActiveTab('website')}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold flex items-center gap-1.5 whitespace-nowrap transition-colors ${
                  activeTab === 'website'
                    ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/40'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                <Home className="w-3.5 h-3.5" />
                <span>Client Website</span>
              </button>

              <button
                onClick={() => setActiveTab('crm')}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold flex items-center gap-1.5 whitespace-nowrap transition-colors ${
                  activeTab === 'crm'
                    ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/40'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                <Users className="w-3.5 h-3.5" />
                <span>Leads CRM & Pipeline</span>
                <span className="bg-emerald-500 text-slate-950 text-[9px] font-black px-1.5 py-0.2 rounded-full">
                  5 New
                </span>
              </button>

              {isMax && (
                <>
                  <button
                    onClick={() => setActiveTab('virtual-tour')}
                    className={`px-3 py-1.5 rounded-lg text-xs font-bold flex items-center gap-1.5 whitespace-nowrap transition-colors ${
                      activeTab === 'virtual-tour'
                        ? 'bg-teal-500/20 text-teal-300 border border-teal-500/40'
                        : 'text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    <Video className="w-3.5 h-3.5" />
                    <span>360° Virtual Tour</span>
                    <span className="text-[9px] bg-teal-500/30 text-teal-300 font-bold px-1 rounded">
                      MAX
                    </span>
                  </button>

                  <button
                    onClick={() => setActiveTab('inventory')}
                    className={`px-3 py-1.5 rounded-lg text-xs font-bold flex items-center gap-1.5 whitespace-nowrap transition-colors ${
                      activeTab === 'inventory'
                        ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/40'
                        : 'text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    <Layers className="w-3.5 h-3.5" />
                    <span>Unit Inventory Matrix</span>
                    <span className="text-[9px] bg-emerald-500/30 text-emerald-300 font-bold px-1 rounded">
                      Live
                    </span>
                  </button>

                  <button
                    onClick={() => setActiveTab('buyer-portal')}
                    className={`px-3 py-1.5 rounded-lg text-xs font-bold flex items-center gap-1.5 whitespace-nowrap transition-colors ${
                      activeTab === 'buyer-portal'
                        ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40'
                        : 'text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    <UserCheck className="w-3.5 h-3.5" />
                    <span>Buyer Customer Portal</span>
                    <span className="text-[9px] bg-amber-500/30 text-amber-300 font-bold px-1 rounded">
                      Client
                    </span>
                  </button>
                </>
              )}
            </div>

            {/* Quick Action Hotline & Visit Button */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => setIsSiteVisitModalOpen(true)}
                className="bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs px-3.5 py-1.5 rounded-lg shadow-sm flex items-center gap-1.5"
              >
                <Calendar className="w-3.5 h-3.5" />
                <span>Schedule Visit</span>
              </button>
              <a
                href="https://wa.me/919137283810?text=Hello%20Upscale%20Nova%2C%20I%20am%20interested%20in%20your%20services.%20Please%20provide%20more%20information."
                target="_blank"
                rel="noreferrer"
                className="bg-emerald-500/20 hover:bg-emerald-500/30 text-emerald-400 border border-emerald-500/40 font-bold text-xs px-3 py-1.5 rounded-lg flex items-center gap-1.5"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* 3. MAIN CONTENT: REAL ESTATE WEBSITE VIEW                                */}
      {/* ========================================================================= */}
      {activeTab === 'website' && (
        <div className="space-y-16 pb-20">
          
          {/* Hero Section */}
          <div className="relative min-h-[540px] flex items-center px-4 sm:px-8 md:px-12 py-16 overflow-hidden">
            <div className="absolute inset-0 z-0">
              <img loading="lazy"
                src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1000&q=75"
                alt="Nova Heights Residences"
                className="w-full h-full object-cover opacity-35"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/85 to-slate-950/40"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-slate-950/50"></div>
            </div>

            <div className="relative z-10 max-w-3xl space-y-6">
              {/* Badges */}
              <div className="flex flex-wrap items-center gap-2">
                <span className="bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 text-xs font-extrabold uppercase tracking-wider px-3 py-1 rounded-full flex items-center gap-1.5">
                  <Shield className="w-3.5 h-3.5" />
                  RERA APPROVED: {PROJECT_DETAILS.reraId.substring(0, 22)}...
                </span>
                <span className="bg-amber-500/20 border border-amber-500/40 text-amber-300 text-xs font-extrabold uppercase tracking-wider px-3 py-1 rounded-full">
                  POSSESSION DEC 2026
                </span>
              </div>

              {/* Title & Tagline */}
              <div className="space-y-3">
                <h1 className="text-3xl sm:text-5xl md:text-6xl font-black text-white tracking-tight leading-[1.08]">
                  Elevate Your Living at <br />
                  <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-amber-300 bg-clip-text text-transparent">
                    Nova Heights Residences
                  </span>
                </h1>
                <p className="text-slate-300 text-sm sm:text-base md:text-lg font-medium max-w-2xl leading-relaxed">
                  Ultra-luxury 2, 3 & 4 BHK homes with 10-ft ceilings, expansive sundeck balconies, and 45+ lifestyle amenities spread across 5.2 lush acres in Prime Downtown.
                </p>
              </div>

              {/* Pricing & Key Metrics */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 bg-slate-900/80 p-4 rounded-2xl border border-slate-800 backdrop-blur-md max-w-2xl">
                <div>
                  <span className="text-[11px] text-slate-400 block font-bold">Residences</span>
                  <span className="text-lg sm:text-xl font-black text-white">2, 3 & 4 BHK</span>
                </div>
                <div>
                  <span className="text-[11px] text-slate-400 block font-bold">Starting Price</span>
                  <span className="text-lg sm:text-xl font-black text-emerald-400">₹92.5 Lakhs*</span>
                </div>
                <div>
                  <span className="text-[11px] text-slate-400 block font-bold">Open Greens</span>
                  <span className="text-lg sm:text-xl font-black text-teal-300">82% Landscaped</span>
                </div>
                <div>
                  <span className="text-[11px] text-slate-400 block font-bold">Towers</span>
                  <span className="text-lg sm:text-xl font-black text-amber-300">3 Iconic (G+32)</span>
                </div>
              </div>

              {/* Call to Actions */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <button
                  onClick={() => setIsSiteVisitModalOpen(true)}
                  className="bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black text-sm px-6 py-3.5 rounded-xl shadow-lg shadow-emerald-500/20 flex items-center gap-2 transition-all transform hover:-translate-y-0.5"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Book Free Site Visit + Cab</span>
                </button>

                <button
                  onClick={() => setIsBrochureModalOpen(true)}
                  className="bg-slate-800 hover:bg-slate-700 text-white font-bold text-sm px-5 py-3.5 rounded-xl border border-slate-700 flex items-center gap-2 transition-all"
                >
                  <Download className="w-4 h-4 text-emerald-400" />
                  <span>Download PDF Brochure</span>
                </button>

                {isMax && (
                  <button
                    onClick={() => setActiveTab('virtual-tour')}
                    className="bg-teal-900/60 hover:bg-teal-800/80 text-teal-200 border border-teal-500/50 font-bold text-sm px-5 py-3.5 rounded-xl flex items-center gap-2 transition-all"
                  >
                    <Video className="w-4 h-4 text-teal-400" />
                    <span>360° Virtual Tour</span>
                  </button>
                )}
              </div>
            </div>
          </div>

          {/* About Developer Section */}
          <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-slate-900/70 border border-slate-800 rounded-3xl p-6 sm:p-10 flex flex-col md:flex-row items-center gap-8">
              <div className="w-full md:w-1/2 space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-xs font-extrabold border border-emerald-500/20">
                  <Award className="w-3.5 h-3.5" />
                  <span>22+ Years of Architectural Mastery</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
                  Crafted by Nova Infra & Developers
                </h2>
                <p className="text-slate-300 text-sm leading-relaxed">
                  With over two decades of engineering excellence, Nova Infra has successfully delivered 18 landmark residential and commercial projects across 6.5 million sq.ft, delighting 4,200+ happy families with a verified zero-delay track record.
                </p>
                <div className="grid grid-cols-3 gap-4 pt-2">
                  <div className="p-3 bg-slate-950/60 rounded-xl border border-slate-800 text-center">
                    <span className="text-xl font-black text-emerald-400">18+</span>
                    <span className="text-[11px] text-slate-400 block font-semibold">Projects Delivered</span>
                  </div>
                  <div className="p-3 bg-slate-950/60 rounded-xl border border-slate-800 text-center">
                    <span className="text-xl font-black text-teal-300">4,200+</span>
                    <span className="text-[11px] text-slate-400 block font-semibold">Happy Residents</span>
                  </div>
                  <div className="p-3 bg-slate-950/60 rounded-xl border border-slate-800 text-center">
                    <span className="text-xl font-black text-amber-300">100%</span>
                    <span className="text-[11px] text-slate-400 block font-semibold">On-Time Handover</span>
                  </div>
                </div>
              </div>

              <div className="w-full md:w-1/2 relative rounded-2xl overflow-hidden aspect-[4/3] border border-slate-800 shadow-2xl">
                <img loading="lazy"
                  src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1000&q=75"
                  alt="Nova Infra Architecture"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4 bg-slate-950/80 backdrop-blur-md p-3 rounded-xl border border-slate-800 text-xs text-slate-300 flex items-center justify-between">
                  <div>
                    <span className="font-bold text-white block">Nova Heights Towers A & B</span>
                    <span className="text-emerald-400 text-[11px]">Construction Stage: 18th Floor Slab Poured</span>
                  </div>
                  <span className="text-[10px] bg-emerald-500/20 text-emerald-300 px-2 py-0.5 rounded font-bold">
                    Live Status
                  </span>
                </div>
              </div>
            </div>
          </section>

          {/* ========================================================================= */}
          {/* Property / Flat Listings Section                                         */}
          {/* ========================================================================= */}
          <section id="residences" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
              <div>
                <span className="text-emerald-400 text-xs font-black uppercase tracking-widest block mb-1">
                  Ultra-Luxury Residences
                </span>
                <h2 className="text-2xl sm:text-4xl font-black text-white tracking-tight">
                  Available BHK Configurations & Floor Plans
                </h2>
              </div>

              {/* Filters for Pro / Max */}
              {!isBase && (
                <div className="flex flex-wrap items-center gap-2 bg-slate-900 p-2 rounded-2xl border border-slate-800">
                  {['All', '2 BHK', '3 BHK', '4 BHK'].map(bhk => (
                    <button
                      key={bhk}
                      onClick={() => setSelectedBhkFilter(bhk)}
                      className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
                        selectedBhkFilter === bhk
                          ? 'bg-emerald-500 text-slate-950 shadow-md font-black'
                          : 'text-slate-400 hover:text-white hover:bg-slate-800'
                      }`}
                    >
                      {bhk}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Property Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {filteredProperties.map(property => (
                <div
                  key={property.id}
                  className="group bg-slate-900/90 border border-slate-800 hover:border-emerald-500/40 rounded-3xl overflow-hidden transition-all duration-300 shadow-xl flex flex-col justify-between"
                >
                  <div>
                    {/* Property Image & Badges */}
                    <div className="relative aspect-[16/10] overflow-hidden">
                      <img loading="lazy"
                        src={property.image}
                        alt={property.title}
                        className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent"></div>

                      <div className="absolute top-3 left-3 flex gap-2">
                        <span className="bg-slate-950/90 backdrop-blur-md text-emerald-400 border border-emerald-500/30 text-xs font-black px-3 py-1 rounded-lg">
                          {property.bhk}
                        </span>
                        <span className="bg-slate-950/90 backdrop-blur-md text-slate-200 border border-slate-700 text-xs font-bold px-2.5 py-1 rounded-lg">
                          {property.carpetArea} Carpet
                        </span>
                      </div>

                      <div className="absolute top-3 right-3">
                        <span className={`text-[10px] font-black uppercase px-2.5 py-1 rounded-lg shadow-sm backdrop-blur-md ${
                          property.status === 'Available'
                            ? 'bg-emerald-500 text-slate-950'
                            : property.status === 'Fast Filling'
                            ? 'bg-amber-500 text-slate-950'
                            : 'bg-rose-500 text-white'
                        }`}>
                          {property.status}
                        </span>
                      </div>

                      <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-white">
                        <div>
                          <span className="text-xs text-slate-300 font-semibold block">{property.tower}</span>
                          <span className="text-lg font-black text-white">{property.title}</span>
                        </div>
                        <div className="text-right">
                          <span className="text-[10px] text-slate-400 uppercase font-bold block">Starting</span>
                          <span className="text-xl font-black text-emerald-400">{property.price}</span>
                        </div>
                      </div>
                    </div>

                    {/* Specs Details */}
                    <div className="p-6 space-y-4">
                      <div className="grid grid-cols-3 gap-2 text-xs py-3 border-y border-slate-800/80">
                        <div>
                          <span className="text-slate-400 text-[10px] block">Super Area</span>
                          <span className="font-bold text-white">{property.superBuiltup}</span>
                        </div>
                        <div>
                          <span className="text-slate-400 text-[10px] block">Facing</span>
                          <span className="font-bold text-teal-300">{property.facing}</span>
                        </div>
                        <div>
                          <span className="text-slate-400 text-[10px] block">Est. EMI</span>
                          <span className="font-bold text-amber-300">{property.emiStarting}</span>
                        </div>
                      </div>

                      {/* Highlights */}
                      <ul className="space-y-1.5 text-xs text-slate-300">
                        {property.highlights.slice(0, 3).map((hl, i) => (
                          <li key={i} className="flex items-center gap-2">
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                            <span>{hl}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="p-6 pt-0 flex gap-2">
                    <button
                      onClick={() => setSelectedPropertyForModal(property)}
                      className="flex-1 py-3 bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs rounded-xl border border-slate-700 flex items-center justify-center gap-1.5 transition-all"
                    >
                      <Eye className="w-3.5 h-3.5 text-emerald-400" />
                      <span>View Floor Plan & Specs</span>
                    </button>

                    {isMax ? (
                      <button
                        onClick={() => {
                          const unit = INVENTORY_UNITS_DATA.find(u => u.bhk === property.bhk && u.status === 'Available') || INVENTORY_UNITS_DATA[0];
                          setSelectedUnitForBooking(unit);
                          setIsTokenBookingModalOpen(true);
                        }}
                        className="py-3 px-4 bg-gradient-to-r from-emerald-500 to-teal-400 hover:from-emerald-400 hover:to-teal-300 text-slate-950 font-black text-xs rounded-xl flex items-center justify-center gap-1.5 shadow-md shadow-emerald-500/20"
                      >
                        <CreditCard className="w-3.5 h-3.5" />
                        <span>Book Token</span>
                      </button>
                    ) : (
                      <button
                        onClick={() => setIsSiteVisitModalOpen(true)}
                        className="py-3 px-4 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs rounded-xl flex items-center justify-center gap-1.5"
                      >
                        <Calendar className="w-3.5 h-3.5" />
                        <span>Book Visit</span>
                      </button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* ========================================================================= */}
          {/* Amenities & Curated Lifestyle Showcase                                   */}
          {/* ========================================================================= */}
          <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
            <div className="text-center max-w-2xl mx-auto space-y-2">
              <span className="text-emerald-400 text-xs font-black uppercase tracking-widest">
                45+ Curated Lifestyle Amenities
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
                Designed for Leisure, Fitness & Community
              </h2>
              <p className="text-slate-400 text-xs sm:text-sm">
                Every corner of Nova Heights is engineered to provide a 5-star resort experience right at home.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {AMENITIES_LIST.map((amenity, i) => (
                <div
                  key={i}
                  className="bg-slate-900/70 border border-slate-800 p-5 rounded-2xl hover:border-emerald-500/30 transition-colors space-y-2"
                >
                  <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
                    <Sparkles className="w-5 h-5" />
                  </div>
                  <h3 className="font-bold text-sm text-white">{amenity.name}</h3>
                  <p className="text-slate-400 text-xs leading-relaxed">{amenity.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* ========================================================================= */}
          {/* Location & Connectivity Advantage                                        */}
          {/* ========================================================================= */}
          <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-slate-900/80 border border-slate-800 rounded-3xl p-6 sm:p-10 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div className="space-y-6">
                <div className="space-y-2">
                  <span className="text-emerald-400 text-xs font-black uppercase tracking-widest">
                    Prime Downtown Location
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
                    Minutes from Everything That Matters
                  </h2>
                  <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                    Strategically located right on Prime Expressway Sector 42, ensuring seamless connectivity to major tech hubs, international schools, hospitals, and transit.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {LOCATION_PROXIMITIES.map((loc, i) => (
                    <div key={i} className="p-3 bg-slate-950/70 border border-slate-800 rounded-xl flex items-start gap-2.5">
                      <MapPin className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <div>
                        <span className="text-xs font-bold text-white block">{loc.place}</span>
                        <span className="text-[11px] text-emerald-400 font-semibold">{loc.time}</span>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap items-center gap-3 pt-2">
                  <button
                    onClick={() => setIsSiteVisitModalOpen(true)}
                    className="bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs px-5 py-2.5 rounded-xl flex items-center gap-2"
                  >
                    <Compass className="w-4 h-4" />
                    <span>Get Directions & Free Cab</span>
                  </button>
                  <a
                    href="https://maps.google.com"
                    target="_blank"
                    rel="noreferrer"
                    className="text-slate-400 hover:text-white text-xs font-bold flex items-center gap-1"
                  >
                    <span>View on Google Maps</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>

              {/* Simulated Interactive Map Display */}
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-slate-700 shadow-2xl bg-slate-950 flex items-center justify-center">
                <img loading="lazy"
                  src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&w=1000&q=75"
                  alt="Location Map Preview"
                  className="w-full h-full object-cover opacity-60"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-slate-950/40"></div>
                
                {/* Central Pin */}
                <div className="relative z-10 text-center space-y-2 bg-slate-900/90 backdrop-blur-md p-4 rounded-2xl border border-emerald-500/50 shadow-2xl max-w-xs">
                  <div className="w-10 h-10 bg-emerald-500 text-slate-950 rounded-full flex items-center justify-center mx-auto font-black shadow-lg shadow-emerald-500/50 animate-bounce">
                    <Building2 className="w-5 h-5" />
                  </div>
                  <h4 className="font-black text-sm text-white">Nova Heights Residences</h4>
                  <p className="text-[11px] text-slate-300">Sector 42, Prime Expressway Corridor</p>
                  <span className="inline-block bg-emerald-500/20 text-emerald-400 text-[10px] font-bold px-2 py-0.5 rounded border border-emerald-500/30">
                    Show Flat Open Daily 9 AM - 7 PM
                  </span>
                </div>
              </div>
            </div>
          </section>

          {/* ========================================================================= */}
          {/* Interactive EMI Loan Calculator (Included in PRO & MAX)                 */}
          {/* ========================================================================= */}
          {!isBase && (
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-10 space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-800 pb-4">
                  <div>
                    <span className="text-emerald-400 text-xs font-black uppercase tracking-widest">
                      Financial Planning Tool
                    </span>
                    <h2 className="text-2xl font-black text-white">Interactive Home Loan EMI Calculator</h2>
                  </div>
                  <span className="text-xs bg-emerald-500/10 text-emerald-400 px-3 py-1 rounded-full border border-emerald-500/20 font-bold self-start sm:self-auto">
                    Pre-Approved by SBI, HDFC & ICICI
                  </span>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
                  {/* Sliders Area */}
                  <div className="lg:col-span-2 space-y-6">
                    {/* Loan Amount */}
                    <div className="space-y-2">
                      <div className="flex justify-between text-xs font-bold">
                        <span className="text-slate-400">Home Loan Amount</span>
                        <span className="text-emerald-400 text-sm">₹{loanAmountLakhs} Lakhs</span>
                      </div>
                      <input
                        type="range"
                        min="50"
                        max="300"
                        step="5"
                        value={loanAmountLakhs}
                        onChange={(e) => setLoanAmountLakhs(Number(e.target.value))}
                        className="w-full accent-emerald-500 cursor-pointer"
                      />
                      <div className="flex justify-between text-[10px] text-slate-500">
                        <span>₹50 L</span>
                        <span>₹1.5 Cr</span>
                        <span>₹3.0 Cr</span>
                      </div>
                    </div>

                    {/* Interest Rate */}
                    <div className="space-y-2">
                      <div className="flex justify-between text-xs font-bold">
                        <span className="text-slate-400">Interest Rate (% p.a.)</span>
                        <span className="text-teal-300 text-sm">{loanInterestRate}%</span>
                      </div>
                      <input
                        type="range"
                        min="7.5"
                        max="12.0"
                        step="0.25"
                        value={loanInterestRate}
                        onChange={(e) => setLoanInterestRate(Number(e.target.value))}
                        className="w-full accent-teal-400 cursor-pointer"
                      />
                      <div className="flex justify-between text-[10px] text-slate-500">
                        <span>7.5% (Special Subvention)</span>
                        <span>8.75% (Standard)</span>
                        <span>12.0%</span>
                      </div>
                    </div>

                    {/* Loan Tenure */}
                    <div className="space-y-2">
                      <div className="flex justify-between text-xs font-bold">
                        <span className="text-slate-400">Loan Tenure</span>
                        <span className="text-amber-300 text-sm">{loanTenureYears} Years ({loanTenureYears * 12} Mos)</span>
                      </div>
                      <input
                        type="range"
                        min="5"
                        max="30"
                        step="1"
                        value={loanTenureYears}
                        onChange={(e) => setLoanTenureYears(Number(e.target.value))}
                        className="w-full accent-amber-400 cursor-pointer"
                      />
                      <div className="flex justify-between text-[10px] text-slate-500">
                        <span>5 Years</span>
                        <span>15 Years</span>
                        <span>30 Years</span>
                      </div>
                    </div>
                  </div>

                  {/* Calculated Output Card */}
                  <div className="bg-slate-950 p-6 rounded-2xl border border-slate-800 text-center space-y-4 shadow-xl">
                    <div>
                      <span className="text-xs text-slate-400 font-bold uppercase tracking-wider block">
                        Estimated Monthly EMI
                      </span>
                      <span className="text-3xl sm:text-4xl font-black text-emerald-400 block my-1">
                        ₹{calculatedEmi.monthlyEmi.toLocaleString('en-IN')}
                      </span>
                      <span className="text-[11px] text-slate-400">per month for {loanTenureYears} years</span>
                    </div>

                    <div className="pt-4 border-t border-slate-800/80 space-y-2 text-xs text-left">
                      <div className="flex justify-between">
                        <span className="text-slate-400">Principal Loan:</span>
                        <span className="font-bold text-white">₹{(loanAmountLakhs * 100000).toLocaleString('en-IN')}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-400">Total Interest:</span>
                        <span className="font-bold text-teal-300">₹{calculatedEmi.totalInterest.toLocaleString('en-IN')}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-400">Total Amount Payable:</span>
                        <span className="font-bold text-amber-300">₹{calculatedEmi.totalPayment.toLocaleString('en-IN')}</span>
                      </div>
                    </div>

                    <button
                      onClick={() => setIsSiteVisitModalOpen(true)}
                      className="w-full py-2.5 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black text-xs rounded-xl transition-all"
                    >
                      Get Bank Approval Assistance
                    </button>
                  </div>
                </div>
              </div>
            </section>
          )}

          {/* ========================================================================= */}
          {/* Upgrade Locked Notice for Base / Pro                                     */}
          {/* ========================================================================= */}
          {isBase && (
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="bg-gradient-to-r from-slate-900 via-emerald-950/40 to-slate-900 border border-emerald-500/30 rounded-3xl p-6 sm:p-8 text-center space-y-4">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-bold">
                  <Lock className="w-3.5 h-3.5" />
                  <span>Pro & Max Features Available</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-black text-white">
                  Want Interactive Floor Plans, Leads CRM & AI Assistant?
                </h3>
                <p className="text-slate-400 text-xs sm:text-sm max-w-xl mx-auto">
                  Upgrade to PRO ({proPrice}) for full Leads CRM and BHK search, or MAX ({maxPrice}) for 360° virtual tours, online token booking and AI Property Copilot.
                </p>
                <div className="flex justify-center gap-3 pt-2">
                  <button
                    onClick={() => onPlanChange?.('Pro')}
                    className="bg-slate-800 hover:bg-slate-700 text-emerald-400 border border-emerald-500/40 font-bold text-xs px-5 py-2.5 rounded-xl"
                  >
                    Switch to PRO Plan
                  </button>
                  <button
                    onClick={() => onPlanChange?.('Max')}
                    className="bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black text-xs px-5 py-2.5 rounded-xl"
                  >
                    Switch to MAX Plan (Best)
                  </button>
                </div>
              </div>
            </section>
          )}

        </div>
      )}

      {/* ========================================================================= */}
      {/* 4. LEADS CRM & PIPELINE DASHBOARD (PRO & MAX)                           */}
      {/* ========================================================================= */}
      {activeTab === 'crm' && (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <div className="flex items-center gap-2">
                <h2 className="text-2xl font-black text-white">Real Estate Leads & CRM Center</h2>
                <span className="bg-emerald-500 text-slate-950 text-xs font-black px-2.5 py-0.5 rounded-full">
                  {leads.length} Active Leads
                </span>
              </div>
              <p className="text-slate-400 text-xs">
                Real-time inquiry capture from Website, WhatsApp, Site Visit forms, and AI Property Assistant.
              </p>
            </div>

            {/* Quick Metrics */}
            <div className="flex items-center gap-3">
              <div className="bg-slate-900 border border-slate-800 px-3 py-2 rounded-xl text-center">
                <span className="text-[10px] text-slate-400 block font-bold">Site Visits Booked</span>
                <span className="text-sm font-black text-emerald-400">18 This Week</span>
              </div>
              <div className="bg-slate-900 border border-slate-800 px-3 py-2 rounded-xl text-center">
                <span className="text-[10px] text-slate-400 block font-bold">Tokens Paid</span>
                <span className="text-sm font-black text-amber-400">₹6.4 Lakhs</span>
              </div>
            </div>
          </div>

          {/* Filter Bar */}
          <div className="bg-slate-900 p-4 rounded-2xl border border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div className="flex items-center gap-2 overflow-x-auto custom-scrollbar">
              {['All', 'New Lead', 'Site Visit Scheduled', 'Visit Completed', 'Token Booking', 'Booked'].map(stage => (
                <button
                  key={stage}
                  onClick={() => setLeadStageFilter(stage)}
                  className={`px-3 py-1 rounded-lg text-xs font-bold whitespace-nowrap transition-all ${
                    leadStageFilter === stage
                      ? 'bg-emerald-500 text-slate-950 font-black'
                      : 'text-slate-400 hover:text-white hover:bg-slate-800'
                  }`}
                >
                  {stage}
                </button>
              ))}
            </div>

            <div className="relative">
              <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search by buyer name or phone..."
                value={leadSearchQuery}
                onChange={(e) => setLeadSearchQuery(e.target.value)}
                className="bg-slate-950 border border-slate-800 text-xs rounded-xl pl-9 pr-3 py-2 text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500"
              />
            </div>
          </div>

          {/* Leads Table */}
          <div className="bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden shadow-xl">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs">
                <thead className="bg-slate-950 text-slate-400 font-bold uppercase tracking-wider text-[10px] border-b border-slate-800">
                  <tr>
                    <th className="p-4">Lead Info</th>
                    <th className="p-4">BHK & Budget</th>
                    <th className="p-4">Source</th>
                    <th className="p-4">Pipeline Stage</th>
                    <th className="p-4">Assigned Agent</th>
                    <th className="p-4">Latest Notes</th>
                    <th className="p-4 text-right">Quick Follow-Up</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800/60">
                  {leads
                    .filter(l => {
                      if (leadStageFilter !== 'All' && l.stage !== leadStageFilter) return false;
                      if (leadSearchQuery && !l.name.toLowerCase().includes(leadSearchQuery.toLowerCase()) && !l.phone.includes(leadSearchQuery)) return false;
                      return true;
                    })
                    .map(lead => (
                      <tr key={lead.id} className="hover:bg-slate-800/40 transition-colors">
                        <td className="p-4">
                          <div className="font-bold text-white text-sm">{lead.name}</div>
                          <div className="text-slate-400 text-[11px] flex items-center gap-1">
                            <Phone className="w-3 h-3 text-emerald-400" />
                            <span>{lead.phone}</span>
                          </div>
                        </td>
                        <td className="p-4">
                          <span className="font-bold text-emerald-400 block">{lead.bhkInterest}</span>
                          <span className="text-slate-400 text-[11px]">{lead.budget}</span>
                        </td>
                        <td className="p-4">
                          <span className="bg-slate-950 text-slate-300 px-2 py-0.5 rounded text-[10px] font-semibold border border-slate-800">
                            {lead.source}
                          </span>
                        </td>
                        <td className="p-4">
                          <span className={`px-2.5 py-1 rounded-full text-[10px] font-black uppercase ${
                            lead.stage === 'Booked'
                              ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40'
                              : lead.stage === 'Token Booking'
                              ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40'
                              : lead.stage === 'Site Visit Scheduled'
                              ? 'bg-teal-500/20 text-teal-300 border border-teal-500/40'
                              : 'bg-slate-800 text-slate-300'
                          }`}>
                            {lead.stage}
                          </span>
                        </td>
                        <td className="p-4 text-slate-300 font-medium">
                          {lead.assignedAgent}
                        </td>
                        <td className="p-4 text-slate-400 max-w-xs truncate text-[11px]">
                          {lead.notes}
                        </td>
                        <td className="p-4 text-right space-x-1.5">
                          <a
                            href={`https://wa.me/${lead.phone.replace(/[^0-9]/g, '')}?text=Hi%20${encodeURIComponent(lead.name)}%2C%20following%20up%20from%20Nova%20Heights%20Residences.`}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center gap-1 bg-emerald-500/20 hover:bg-emerald-500/30 text-emerald-400 border border-emerald-500/30 px-2.5 py-1.5 rounded-lg text-[10px] font-bold"
                          >
                            <MessageCircle className="w-3 h-3" />
                            <span>WhatsApp</span>
                          </a>
                          <button
                            onClick={() => console.log(`Dialing ${lead.phone} (${lead.name})...`)}
                            className="bg-slate-800 hover:bg-slate-700 text-white p-1.5 rounded-lg text-[10px]"
                          >
                            <Phone className="w-3 h-3" />
                          </button>
                        </td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* 5. 360° VIRTUAL PROPERTY TOUR (MAX PLAN ONLY)                            */}
      {/* ========================================================================= */}
      {isMax && activeTab === 'virtual-tour' && (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <div className="flex items-center gap-2">
                <span className="bg-gradient-to-r from-emerald-500 to-teal-400 text-slate-950 text-[10px] font-black uppercase px-2.5 py-0.5 rounded-full">
                  MAX 360° VR Tour
                </span>
                <h2 className="text-2xl font-black text-white">Interactive Virtual Show Flat Tour</h2>
              </div>
              <p className="text-slate-400 text-xs">
                Walk through fully-furnished 3 BHK Royale residences and 32nd-floor luxury amenities in high-definition.
              </p>
            </div>

            {/* Room Selector */}
            <div className="flex items-center gap-2 overflow-x-auto custom-scrollbar">
              {VIRTUAL_TOUR_ROOMS.map(room => (
                <button
                  key={room.id}
                  onClick={() => setActiveTourRoomId(room.id)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all whitespace-nowrap ${
                    activeTourRoomId === room.id
                      ? 'bg-teal-500 text-slate-950 font-black shadow-md'
                      : 'bg-slate-900 text-slate-300 border border-slate-800 hover:bg-slate-800'
                  }`}
                >
                  {room.name}
                </button>
              ))}
            </div>
          </div>

          {/* Virtual Tour Viewer Window */}
          <div className="relative aspect-[16/9] bg-slate-950 rounded-3xl overflow-hidden border border-teal-500/40 shadow-2xl">
            <img loading="lazy"
              src={currentTourRoom.image}
              alt={currentTourRoom.name}
              className="w-full h-full object-cover transition-opacity duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-slate-950/40"></div>

            {/* Top Room Badge */}
            <div className="absolute top-4 left-4 bg-slate-950/80 backdrop-blur-md p-3 rounded-2xl border border-slate-800 space-y-0.5">
              <span className="text-[10px] text-teal-400 font-bold uppercase">{currentTourRoom.bhk}</span>
              <h3 className="text-base font-black text-white">{currentTourRoom.name}</h3>
              <p className="text-xs text-slate-300 max-w-md">{currentTourRoom.description}</p>
            </div>

            {/* Simulated Hotspots */}
            <div className="absolute top-1/3 left-1/4 group cursor-pointer">
              <div className="w-7 h-7 rounded-full bg-teal-500 text-slate-950 flex items-center justify-center font-black animate-pulse shadow-lg shadow-teal-500/50">
                <Sparkles className="w-4 h-4" />
              </div>
              <div className="hidden group-hover:block absolute left-8 top-0 bg-slate-950/95 backdrop-blur-md p-3 rounded-xl border border-teal-500/40 text-xs w-48 shadow-xl">
                <span className="font-bold text-white block">{currentTourRoom.hotspots[0]?.title}</span>
                <span className="text-[11px] text-slate-400">{currentTourRoom.hotspots[0]?.desc}</span>
              </div>
            </div>

            {currentTourRoom.hotspots[1] && (
              <div className="absolute bottom-1/3 right-1/4 group cursor-pointer">
                <div className="w-7 h-7 rounded-full bg-amber-400 text-slate-950 flex items-center justify-center font-black animate-pulse shadow-lg shadow-amber-400/50">
                  <Maximize2 className="w-4 h-4" />
                </div>
                <div className="hidden group-hover:block absolute right-8 bottom-0 bg-slate-950/95 backdrop-blur-md p-3 rounded-xl border border-amber-400/40 text-xs w-48 shadow-xl">
                  <span className="font-bold text-white block">{currentTourRoom.hotspots[1]?.title}</span>
                  <span className="text-[11px] text-slate-400">{currentTourRoom.hotspots[1]?.desc}</span>
                </div>
              </div>
            )}

            {/* Bottom Controls */}
            <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
              <div className="flex items-center gap-2 bg-slate-950/80 backdrop-blur-md px-3 py-1.5 rounded-xl border border-slate-800 text-xs text-slate-300">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
                <span>360° Live Gyroscope Simulator Active</span>
              </div>

              <button
                onClick={() => setIsSiteVisitModalOpen(true)}
                className="bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black text-xs px-4 py-2 rounded-xl shadow-lg flex items-center gap-1.5"
              >
                <Calendar className="w-3.5 h-3.5" />
                <span>Visit Show Flat in Person</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* 6. LIVE UNIT INVENTORY MATRIX (MAX PLAN ONLY)                            */}
      {/* ========================================================================= */}
      {isMax && activeTab === 'inventory' && (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <div className="flex items-center gap-2">
                <span className="bg-emerald-500 text-slate-950 text-[10px] font-black uppercase px-2.5 py-0.5 rounded-full">
                  MAX Real-time ERP
                </span>
                <h2 className="text-2xl font-black text-white">Live Tower & Unit Inventory Matrix</h2>
              </div>
              <p className="text-slate-400 text-xs">
                Real-time flat availability, pricing, and 1-click token booking for Tower A & B.
              </p>
            </div>

            <div className="flex items-center gap-3 text-xs">
              <span className="flex items-center gap-1.5 text-emerald-400">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500"></span> Available
              </span>
              <span className="flex items-center gap-1.5 text-amber-400">
                <span className="w-2.5 h-2.5 rounded-full bg-amber-500"></span> Blocked
              </span>
              <span className="flex items-center gap-1.5 text-slate-500">
                <span className="w-2.5 h-2.5 rounded-full bg-slate-700"></span> Booked
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {INVENTORY_UNITS_DATA.map((unit, i) => (
              <div
                key={i}
                className={`p-4 rounded-2xl border transition-all ${
                  unit.status === 'Available'
                    ? 'bg-slate-900 border-emerald-500/40 hover:border-emerald-400'
                    : unit.status === 'Blocked'
                    ? 'bg-slate-900/60 border-amber-500/30'
                    : 'bg-slate-950/60 border-slate-800 opacity-60'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="font-black text-base text-white">{unit.unitNo}</span>
                  <span className={`text-[10px] font-black uppercase px-2 py-0.5 rounded ${
                    unit.status === 'Available'
                      ? 'bg-emerald-500/20 text-emerald-300'
                      : unit.status === 'Blocked'
                      ? 'bg-amber-500/20 text-amber-300'
                      : 'bg-slate-800 text-slate-400'
                  }`}>
                    {unit.status}
                  </span>
                </div>

                <div className="space-y-1 text-xs text-slate-400 mb-3">
                  <div className="flex justify-between">
                    <span>Configuration:</span>
                    <span className="font-bold text-slate-200">{unit.bhk}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Floor & Tower:</span>
                    <span className="font-bold text-slate-200">{unit.tower} (Fl {unit.floor})</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Super Area:</span>
                    <span className="font-bold text-slate-200">{unit.area}</span>
                  </div>
                  <div className="flex justify-between text-emerald-400 font-bold pt-1">
                    <span>Price:</span>
                    <span>{unit.price}</span>
                  </div>
                </div>

                {unit.status === 'Available' ? (
                  <button
                    onClick={() => {
                      setSelectedUnitForBooking(unit);
                      setIsTokenBookingModalOpen(true);
                    }}
                    className="w-full py-2 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black text-xs rounded-xl transition-all flex items-center justify-center gap-1"
                  >
                    <CreditCard className="w-3 h-3" />
                    <span>Pay ₹51K Token</span>
                  </button>
                ) : (
                  <button disabled className="w-full py-2 bg-slate-800 text-slate-500 text-xs rounded-xl cursor-not-allowed">
                    {unit.status === 'Blocked' ? 'Under Negotiation' : 'Sold Out'}
                  </button>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* 7. BUYER / CUSTOMER PORTAL (MAX PLAN ONLY)                              */}
      {/* ========================================================================= */}
      {isMax && activeTab === 'buyer-portal' && (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6">
          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 space-y-6">
            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800 pb-6">
              <div>
                <div className="flex items-center gap-2">
                  <span className="bg-emerald-500/20 text-emerald-300 text-xs font-black uppercase px-2.5 py-0.5 rounded">
                    Allotted Resident
                  </span>
                  <h2 className="text-2xl font-black text-white">Welcome, Mr. Vikram Malhotra</h2>
                </div>
                <p className="text-slate-400 text-xs mt-1">
                  Residence: <strong className="text-white">Tower B - Flat #1804 (3 BHK Royale)</strong> • Customer ID: #NH-9042
                </p>
              </div>

              <div className="bg-slate-950 p-3 rounded-2xl border border-slate-800 flex items-center gap-3">
                <div className="text-right text-xs">
                  <span className="text-slate-400 block text-[10px]">Target Handover</span>
                  <span className="font-black text-emerald-400 text-sm">Dec 2026 (On Track)</span>
                </div>
                <CheckCircle2 className="w-6 h-6 text-emerald-400" />
              </div>
            </div>

            {/* Construction Milestone Progress */}
            <div className="space-y-3">
              <div className="flex justify-between items-center text-xs">
                <span className="font-bold text-white flex items-center gap-1.5">
                  <Activity className="w-4 h-4 text-emerald-400" />
                  <span>Construction Milestone Progress (72% Completed)</span>
                </span>
                <span className="text-slate-400 text-[11px]">Updated 2 days ago by Chief Civil Engineer</span>
              </div>

              <div className="w-full bg-slate-950 h-3 rounded-full overflow-hidden border border-slate-800">
                <div className="bg-gradient-to-r from-emerald-500 to-teal-400 h-full w-[72%] rounded-full"></div>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 text-xs pt-2">
                <div className="p-2.5 bg-slate-950 rounded-xl border border-emerald-500/40 text-center">
                  <span className="text-emerald-400 font-bold block">Foundation</span>
                  <span className="text-[10px] text-slate-400">100% Done ✅</span>
                </div>
                <div className="p-2.5 bg-slate-950 rounded-xl border border-emerald-500/40 text-center">
                  <span className="text-emerald-400 font-bold block">RCC Structure</span>
                  <span className="text-[10px] text-slate-400">100% Done ✅</span>
                </div>
                <div className="p-2.5 bg-slate-950 rounded-xl border border-emerald-500/40 text-center">
                  <span className="text-emerald-400 font-bold block">18th Floor Slab</span>
                  <span className="text-[10px] text-slate-400">100% Done ✅</span>
                </div>
                <div className="p-2.5 bg-slate-950 rounded-xl border border-amber-500/40 text-center">
                  <span className="text-amber-300 font-bold block">Brick & Plaster</span>
                  <span className="text-[10px] text-slate-400">65% Active 🟡</span>
                </div>
                <div className="p-2.5 bg-slate-950 rounded-xl border border-slate-800 text-center">
                  <span className="text-slate-400 font-bold block">Finishing & Handover</span>
                  <span className="text-[10px] text-slate-500">Scheduled Q4 2026</span>
                </div>
              </div>
            </div>

            {/* Documents & Receipts */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-slate-800">
              <div className="p-4 bg-slate-950 rounded-2xl border border-slate-800 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <FileText className="w-5 h-5 text-emerald-400" />
                  <div>
                    <span className="text-xs font-bold text-white block">Allotment Letter</span>
                    <span className="text-[10px] text-slate-400">PDF • Signed with RERA Seal</span>
                  </div>
                </div>
                <button
                  onClick={() => console.log("Downloading signed Allotment Letter (PDF)...")}
                  className="p-2 bg-slate-800 hover:bg-slate-700 text-white rounded-lg text-xs"
                >
                  <Download className="w-3.5 h-3.5" />
                </button>
              </div>

              <div className="p-4 bg-slate-950 rounded-2xl border border-slate-800 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <CreditCard className="w-5 h-5 text-teal-400" />
                  <div>
                    <span className="text-xs font-bold text-white block">Payment Receipts</span>
                    <span className="text-[10px] text-slate-400">₹32.5 Lakhs Disbursed</span>
                  </div>
                </div>
                <button
                  onClick={() => console.log("Downloading Milestone Payment Receipts (PDF)...")}
                  className="p-2 bg-slate-800 hover:bg-slate-700 text-white rounded-lg text-xs"
                >
                  <Download className="w-3.5 h-3.5" />
                </button>
              </div>

              <div className="p-4 bg-slate-950 rounded-2xl border border-slate-800 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Shield className="w-5 h-5 text-amber-400" />
                  <div>
                    <span className="text-xs font-bold text-white block">Bank NOC & Sanction</span>
                    <span className="text-[10px] text-slate-400">HDFC Loan Pre-Approved</span>
                  </div>
                </div>
                <button
                  onClick={() => console.log("Downloading Bank NOC Document (PDF)...")}
                  className="p-2 bg-slate-800 hover:bg-slate-700 text-white rounded-lg text-xs"
                >
                  <Download className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* 8. COMPARISON MATRIX & AGENCY UPSELL BANNER (Upscale Nova Standards)       */}
      {/* ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 border-t border-slate-800/80">
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-10">
          <span className="text-emerald-400 text-xs font-black uppercase tracking-widest">
            Package Comparison Matrix
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
            Choose the Ideal Real Estate Solution
          </h2>
          <p className="text-slate-400 text-xs sm:text-sm">
            Compare features across Base, Pro, and Max packages engineered by Upscale Nova.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Base Card */}
          <div className={`p-6 rounded-3xl border flex flex-col justify-between ${
            isBase ? 'bg-slate-900 border-emerald-500 shadow-xl shadow-emerald-500/10' : 'bg-slate-950 border-slate-800'
          }`}>
            <div>
              <span className="text-slate-400 text-xs font-bold uppercase">Essential Website</span>
              <h3 className="text-xl font-black text-white mt-1">BASE PLAN</h3>
              <div className="text-3xl font-black text-emerald-400 my-4">{basePrice}</div>
              <p className="text-xs text-slate-400 mb-6">
                A professional real estate showcase website with developer overview, BHK details, gallery, and WhatsApp inquiry.
              </p>
              <ul className="space-y-2 text-xs text-slate-300">
                <li className="flex items-center gap-2">✓ Premium Real Estate Website</li>
                <li className="flex items-center gap-2">✓ Home, About & Property Listings</li>
                <li className="flex items-center gap-2">✓ BHK Information & Flat Details</li>
                <li className="flex items-center gap-2">✓ Amenities & Image Gallery</li>
                <li className="flex items-center gap-2">✓ Location & Google Maps</li>
                <li className="flex items-center gap-2">✓ WhatsApp & Direct Call Enquiry</li>
                <li className="flex items-center gap-2">✓ Mobile Responsive & Basic SEO</li>
              </ul>
            </div>
            <button
              onClick={() => onPlanChange?.('Base')}
              className={`w-full mt-6 py-3 rounded-xl font-black text-xs uppercase ${
                isBase ? 'bg-emerald-600 text-white' : 'bg-slate-800 hover:bg-slate-700 text-slate-300'
              }`}
            >
              {isBase ? 'Current Active Demo' : 'Select Base Plan'}
            </button>
          </div>

          {/* Pro Card */}
          <div className={`p-6 rounded-3xl border flex flex-col justify-between ${
            isPro ? 'bg-slate-900 border-emerald-500 shadow-xl shadow-emerald-500/10' : 'bg-slate-950 border-slate-800'
          }`}>
            <div>
              <span className="text-teal-400 text-xs font-bold uppercase">Growth & Leads CRM</span>
              <h3 className="text-xl font-black text-white mt-1">PRO PLAN</h3>
              <div className="text-3xl font-black text-teal-400 my-4">{proPrice}</div>
              <p className="text-xs text-slate-400 mb-6">
                A complete property website with advanced BHK/price search, floor plans, appointment scheduler, and full leads CRM.
              </p>
              <ul className="space-y-2 text-xs text-slate-300">
                <li className="flex items-center gap-2 text-white font-bold">✓ Everything in BASE, plus:</li>
                <li className="flex items-center gap-2">✓ Advanced Property Search (BHK/Price/Facing)</li>
                <li className="flex items-center gap-2">✓ Interactive Floor Plans & Specs</li>
                <li className="flex items-center gap-2">✓ Download Project Brochure System</li>
                <li className="flex items-center gap-2">✓ Schedule Site Visit Appointments</li>
                <li className="flex items-center gap-2">✓ Real Estate Leads Management CRM</li>
                <li className="flex items-center gap-2">✓ Interactive Home Loan EMI Calculator</li>
              </ul>
            </div>
            <button
              onClick={() => onPlanChange?.('Pro')}
              className={`w-full mt-6 py-3 rounded-xl font-black text-xs uppercase ${
                isPro ? 'bg-emerald-600 text-white' : 'bg-slate-800 hover:bg-slate-700 text-slate-300'
              }`}
            >
              {isPro ? 'Current Active Demo' : 'Select Pro Plan'}
            </button>
          </div>

          {/* Max Card */}
          <div className={`p-6 rounded-3xl border flex flex-col justify-between relative ${
            isMax ? 'bg-slate-900 border-emerald-400 shadow-2xl shadow-emerald-500/20' : 'bg-slate-950 border-slate-800'
          }`}>
            <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-amber-400 to-amber-500 text-slate-950 font-black text-[9px] uppercase px-3 py-0.5 rounded-full shadow-md">
              BEST VALUE • AI PLATFORM
            </span>
            <div>
              <span className="text-amber-400 text-xs font-bold uppercase">AI-Powered Ecosystem</span>
              <h3 className="text-xl font-black text-white mt-1">MAX PLAN</h3>
              <div className="text-3xl font-black text-amber-400 my-4">{maxPrice}</div>
              <p className="text-xs text-slate-400 mb-6">
                Complete AI-powered real estate platform for property discovery, 360° virtual tours, online token booking, buyer portal & AI assistant.
              </p>
              <ul className="space-y-2 text-xs text-slate-300">
                <li className="flex items-center gap-2 text-white font-bold">✓ Everything in PRO, plus:</li>
                <li className="flex items-center gap-2">✓ 360° Virtual Property Tour Viewer</li>
                <li className="flex items-center gap-2">✓ AI Property Assistant & Chatbot</li>
                <li className="flex items-center gap-2">✓ Live Unit Inventory Matrix (ERP)</li>
                <li className="flex items-center gap-2">✓ Online Token Payment & Allotment</li>
                <li className="flex items-center gap-2">✓ Buyer Customer Portal & Construction Tracker</li>
                <li className="flex items-center gap-2">✓ Automated WhatsApp Lead Sequences</li>
              </ul>
            </div>
            <button
              onClick={() => onPlanChange?.('Max')}
              className={`w-full mt-6 py-3 rounded-xl font-black text-xs uppercase ${
                isMax ? 'bg-gradient-to-r from-emerald-500 via-teal-400 to-amber-400 text-slate-950 shadow-md font-black' : 'bg-slate-800 hover:bg-slate-700 text-slate-300'
              }`}
            >
              {isMax ? 'Current Active Demo' : 'Select Max Plan'}
            </button>
          </div>
        </div>

        {/* Agency CTA Footer */}
        <div className="mt-12 bg-slate-900 border border-slate-800 rounded-3xl p-8 text-center space-y-4 max-w-4xl mx-auto">
          <div className="w-12 h-12 rounded-2xl bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400 mx-auto">
            <Building2 className="w-6 h-6" />
          </div>
          <h3 className="text-2xl font-black text-white">
            Transform Your Real Estate Project Into a Digital Sales Machine
          </h3>
          <p className="text-slate-400 text-xs sm:text-sm max-w-xl mx-auto">
            Upscale Nova crafts bespoke web applications, lead automations, and AI chatbots tailored specifically for developers and channel partners.
          </p>
          <a
            href="https://wa.me/919137283810?text=Hello%20Upscale%20Nova%2C%20I%20am%20interested%20in%20your%20services.%20Please%20provide%20more%20information."
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black text-xs px-6 py-3 rounded-xl shadow-lg transition-all"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Speak to Real Estate Tech Expert</span>
          </a>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 9. FLOATING AI PROPERTY ASSISTANT (All Plans, Full AI in Max)            */}
      {/* ========================================================================= */}
      <div className="fixed bottom-6 right-6 z-40">
        {!isAiOpen ? (
          <button
            onClick={() => setIsAiOpen(true)}
            className="group bg-gradient-to-r from-emerald-500 to-teal-400 text-slate-950 p-4 rounded-full shadow-2xl flex items-center gap-2 font-black text-xs transition-all transform hover:scale-105"
          >
            <Bot className="w-5 h-5 animate-bounce" />
            <span className="hidden sm:inline">Nova AI Property Copilot</span>
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-950 animate-ping"></span>
          </button>
        ) : (
          <div className="bg-slate-900 border border-emerald-500/50 rounded-3xl shadow-2xl w-[360px] sm:w-[400px] h-[520px] flex flex-col overflow-hidden animate-in slide-in-from-bottom-5">
            {/* Header */}
            <div className="bg-slate-950 px-4 py-3 border-b border-slate-800 flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-full bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400">
                  <Bot className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-bold text-xs text-white">Nova AI Property Copilot</h4>
                  <span className="text-[10px] text-emerald-400 font-semibold flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                    Online • Real Estate Assistant
                  </span>
                </div>
              </div>
              <button onClick={() => setIsAiOpen(false)} className="text-slate-400 hover:text-white">
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Quick Prompts */}
            <div className="bg-slate-950/60 px-3 py-2 border-b border-slate-800/80 flex gap-1.5 overflow-x-auto custom-scrollbar">
              {['Pricing & Payment', 'RERA & Approvals', 'Book Free Visit', 'Vastu Details'].map((prompt, i) => (
                <button
                  key={i}
                  onClick={() => handleAiSend(prompt)}
                  className="text-[10px] bg-slate-900 hover:bg-slate-800 text-slate-300 px-2 py-1 rounded-lg border border-slate-800 whitespace-nowrap transition-colors"
                >
                  {prompt}
                </button>
              ))}
            </div>

            {/* Messages */}
            <div className="flex-1 p-4 overflow-y-auto space-y-3 custom-scrollbar text-xs">
              {aiChatMessages.map((msg, i) => (
                <div
                  key={i}
                  className={`flex flex-col ${msg.sender === 'user' ? 'items-end' : 'items-start'}`}
                >
                  <div
                    className={`p-3 rounded-2xl max-w-[85%] leading-relaxed ${
                      msg.sender === 'user'
                        ? 'bg-emerald-600 text-white rounded-br-none'
                        : 'bg-slate-800/90 text-slate-200 rounded-bl-none border border-slate-700'
                    }`}
                  >
                    {msg.text}
                  </div>
                  <span className="text-[9px] text-slate-500 mt-1">{msg.time}</span>
                </div>
              ))}
            </div>

            {/* Input */}
            <div className="p-3 bg-slate-950 border-t border-slate-800 flex items-center gap-2">
              <input
                type="text"
                placeholder="Ask about BHKs, payment plans, site visits..."
                value={aiInputText}
                onChange={(e) => setAiInputText(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleAiSend()}
                className="flex-1 bg-slate-900 border border-slate-800 text-xs rounded-xl px-3 py-2 text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500"
              />
              <button
                onClick={() => handleAiSend()}
                className="bg-emerald-500 hover:bg-emerald-400 text-slate-950 p-2 rounded-xl"
              >
                <Send className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}
      </div>

      {/* ========================================================================= */}
      {/* 10. MODAL: PROPERTY DETAILS & FLOOR PLAN SPECS                            */}
      {/* ========================================================================= */}
      {selectedPropertyForModal && (
        <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4">
          <div className="bg-slate-900 border border-slate-800 rounded-3xl max-w-2xl w-full p-6 sm:p-8 space-y-6 max-h-[90vh] overflow-y-auto custom-scrollbar">
            <div className="flex items-center justify-between border-b border-slate-800 pb-4">
              <div>
                <span className="text-emerald-400 text-xs font-bold uppercase">{selectedPropertyForModal.tower}</span>
                <h3 className="text-xl font-black text-white">{selectedPropertyForModal.title}</h3>
              </div>
              <button onClick={() => setSelectedPropertyForModal(null)} className="text-slate-400 hover:text-white">
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="aspect-[16/9] rounded-2xl overflow-hidden border border-slate-800 relative">
              <img loading="lazy"
                src={selectedPropertyForModal.image}
                alt={selectedPropertyForModal.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-3 right-3 bg-emerald-500 text-slate-950 font-black text-xs px-3 py-1 rounded-lg">
                {selectedPropertyForModal.price}
              </div>
            </div>

            {/* Room Specs */}
            <div className="space-y-3">
              <h4 className="font-bold text-sm text-white flex items-center gap-1.5">
                <Maximize2 className="w-4 h-4 text-emerald-400" />
                <span>Room Dimensions & Architectural Layout</span>
              </h4>
              <div className="grid grid-cols-2 gap-2 text-xs bg-slate-950 p-4 rounded-2xl border border-slate-800">
                <div>
                  <span className="text-slate-400 text-[11px] block">Living & Dining:</span>
                  <span className="font-bold text-white">{selectedPropertyForModal.specs.livingRoom}</span>
                </div>
                <div>
                  <span className="text-slate-400 text-[11px] block">Master Suite:</span>
                  <span className="font-bold text-white">{selectedPropertyForModal.specs.masterBedroom}</span>
                </div>
                <div>
                  <span className="text-slate-400 text-[11px] block">Guest Bedroom:</span>
                  <span className="font-bold text-white">{selectedPropertyForModal.specs.guestBedroom}</span>
                </div>
                <div>
                  <span className="text-slate-400 text-[11px] block">Kitchen & Utility:</span>
                  <span className="font-bold text-white">{selectedPropertyForModal.specs.kitchen}</span>
                </div>
                <div>
                  <span className="text-slate-400 text-[11px] block">Balconies:</span>
                  <span className="font-bold text-teal-300">{selectedPropertyForModal.specs.balconies}</span>
                </div>
                <div>
                  <span className="text-slate-400 text-[11px] block">Bathrooms:</span>
                  <span className="font-bold text-amber-300">{selectedPropertyForModal.specs.bathrooms}</span>
                </div>
              </div>
            </div>

            <div className="flex gap-3 pt-2">
              <button
                onClick={() => {
                  setSelectedPropertyForModal(null);
                  setIsSiteVisitModalOpen(true);
                }}
                className="flex-1 py-3 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black text-xs rounded-xl"
              >
                Schedule VIP Site Visit
              </button>
              <button
                onClick={() => {
                  setSelectedPropertyForModal(null);
                  setIsBrochureModalOpen(true);
                }}
                className="py-3 px-5 bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs rounded-xl border border-slate-700"
              >
                Download Brochure
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* 11. MODAL: SCHEDULE SITE VISIT                                           */}
      {/* ========================================================================= */}
      {isSiteVisitModalOpen && (
        <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4">
          <div className="bg-slate-900 border border-emerald-500/30 rounded-3xl max-w-md w-full p-6 sm:p-8 space-y-5">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5 text-emerald-400" />
                <h3 className="text-lg font-black text-white">Schedule Free VIP Site Visit</h3>
              </div>
              <button onClick={() => { setIsSiteVisitModalOpen(false); setSiteVisitSuccess(false); }} className="text-slate-400 hover:text-white">
                <X className="w-5 h-5" />
              </button>
            </div>

            {!siteVisitSuccess ? (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setSiteVisitSuccess(true);
                  // Add to leads
                  setLeads(prev => [
                    {
                      id: `LEAD-${Math.floor(Math.random() * 900) + 100}`,
                      name: siteVisitForm.name || 'Site Visitor',
                      phone: siteVisitForm.phone || '+91 98000 00000',
                      email: siteVisitForm.email || 'visitor@gmail.com',
                      bhkInterest: siteVisitForm.bhk,
                      budget: '₹1.5 - ₹1.8 Cr',
                      source: 'Site Visit Booking',
                      stage: 'Site Visit Scheduled',
                      assignedAgent: 'Rohit Deshmukh (Sr. Relationship Mgr)',
                      lastContact: 'Just now',
                      notes: `Booked visit for ${siteVisitForm.date} (${siteVisitForm.timeSlot}). Free cab pickup: ${siteVisitForm.cabPickup ? 'YES' : 'NO'}.`
                    },
                    ...prev
                  ]);
                }}
                className="space-y-3.5 text-xs"
              >
                <div>
                  <label className="block text-slate-300 font-bold mb-1">Your Full Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Vikram Malhotra"
                    value={siteVisitForm.name}
                    onChange={(e) => setSiteVisitForm(prev => ({ ...prev, name: e.target.value }))}
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-white focus:outline-none focus:border-emerald-500"
                  />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-slate-300 font-bold mb-1">Phone Number *</label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 98201 44521"
                      value={siteVisitForm.phone}
                      onChange={(e) => setSiteVisitForm(prev => ({ ...prev, phone: e.target.value }))}
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-white focus:outline-none focus:border-emerald-500"
                    />
                  </div>
                  <div>
                    <label className="block text-slate-300 font-bold mb-1">BHK Preference</label>
                    <select
                      value={siteVisitForm.bhk}
                      onChange={(e) => setSiteVisitForm(prev => ({ ...prev, bhk: e.target.value }))}
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-white focus:outline-none focus:border-emerald-500"
                    >
                      <option>2 BHK Luxury (₹92.5 L)</option>
                      <option>3 BHK Royale (₹1.48 Cr)</option>
                      <option>3 BHK Grand Suite (₹1.82 Cr)</option>
                      <option>4 BHK Penthouse (₹3.45 Cr)</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-slate-300 font-bold mb-1">Preferred Date</label>
                    <input
                      type="date"
                      value={siteVisitForm.date}
                      onChange={(e) => setSiteVisitForm(prev => ({ ...prev, date: e.target.value }))}
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-white focus:outline-none focus:border-emerald-500"
                    />
                  </div>
                  <div>
                    <label className="block text-slate-300 font-bold mb-1">Time Slot</label>
                    <select
                      value={siteVisitForm.timeSlot}
                      onChange={(e) => setSiteVisitForm(prev => ({ ...prev, timeSlot: e.target.value }))}
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-white focus:outline-none focus:border-emerald-500"
                    >
                      <option>Morning (10:30 AM)</option>
                      <option>Afternoon (02:00 PM)</option>
                      <option>Evening (05:00 PM)</option>
                    </select>
                  </div>
                </div>

                <div className="flex items-center gap-2 p-2.5 bg-slate-950 rounded-xl border border-slate-800">
                  <input
                    type="checkbox"
                    id="cab"
                    checked={siteVisitForm.cabPickup}
                    onChange={(e) => setSiteVisitForm(prev => ({ ...prev, cabPickup: e.target.checked }))}
                    className="accent-emerald-500"
                  />
                  <label htmlFor="cab" className="text-[11px] text-slate-300 cursor-pointer">
                    Request complimentary AC Cab pickup & drop for my family
                  </label>
                </div>

                <button
                  type="submit"
                  className="w-full py-3 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black text-xs rounded-xl shadow-lg transition-all"
                >
                  Confirm Site Visit Booking
                </button>
              </form>
            ) : (
              <div className="text-center space-y-4 py-4">
                <div className="w-14 h-14 bg-emerald-500/20 text-emerald-400 rounded-full flex items-center justify-center mx-auto border border-emerald-500/40">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h4 className="text-lg font-black text-white">VIP Site Visit Confirmed!</h4>
                <p className="text-slate-300 text-xs">
                  Your relationship manager <strong>Rohit Deshmukh</strong> has been assigned and will send cab driver details on WhatsApp 2 hours prior to your visit.
                </p>
                <button
                  onClick={() => { setIsSiteVisitModalOpen(false); setSiteVisitSuccess(false); }}
                  className="bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs px-6 py-2.5 rounded-xl"
                >
                  Close Window
                </button>
              </div>
            )}
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* 12. MODAL: DOWNLOAD PROJECT BROCHURE                                      */}
      {/* ========================================================================= */}
      {isBrochureModalOpen && (
        <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4">
          <div className="bg-slate-900 border border-slate-800 rounded-3xl max-w-md w-full p-6 sm:p-8 space-y-5">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <div className="flex items-center gap-2">
                <Download className="w-5 h-5 text-emerald-400" />
                <h3 className="text-lg font-black text-white">Download Project Brochure</h3>
              </div>
              <button onClick={() => { setIsBrochureModalOpen(false); setBrochureDownloadSuccess(false); }} className="text-slate-400 hover:text-white">
                <X className="w-5 h-5" />
              </button>
            </div>

            {!brochureDownloadSuccess ? (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setBrochureDownloadSuccess(true);
                }}
                className="space-y-3.5 text-xs"
              >
                <p className="text-slate-400 text-[11px]">
                  Get instant access to complete master plans, floor dimensions, luxury specifications, and payment milestones (PDF • 14 MB).
                </p>
                <div>
                  <label className="block text-slate-300 font-bold mb-1">Your Name</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Vikram Malhotra"
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-white focus:outline-none focus:border-emerald-500"
                  />
                </div>
                <div>
                  <label className="block text-slate-300 font-bold mb-1">WhatsApp / Phone Number</label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 98201 44521"
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-white focus:outline-none focus:border-emerald-500"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-3 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black text-xs rounded-xl shadow-lg transition-all flex items-center justify-center gap-1.5"
                >
                  <Download className="w-4 h-4" />
                  <span>Download Instant PDF Brochure</span>
                </button>
              </form>
            ) : (
              <div className="text-center space-y-4 py-4">
                <div className="w-14 h-14 bg-emerald-500/20 text-emerald-400 rounded-full flex items-center justify-center mx-auto border border-emerald-500/40">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h4 className="text-lg font-black text-white">Brochure Downloaded!</h4>
                <p className="text-slate-300 text-xs">
                  A high-resolution PDF copy has also been sent to your WhatsApp number with the latest price sheet.
                </p>
                <button
                  onClick={() => { setIsBrochureModalOpen(false); setBrochureDownloadSuccess(false); }}
                  className="bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs px-6 py-2.5 rounded-xl"
                >
                  Done
                </button>
              </div>
            )}
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* 13. MODAL: ONLINE TOKEN PAYMENT GATEWAY (MAX ONLY)                       */}
      {/* ========================================================================= */}
      {isTokenBookingModalOpen && (
        <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4">
          <div className="bg-slate-900 border border-emerald-500/40 rounded-3xl max-w-md w-full p-6 sm:p-8 space-y-5">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <div className="flex items-center gap-2">
                <CreditCard className="w-5 h-5 text-emerald-400" />
                <h3 className="text-lg font-black text-white">Online Token Allotment</h3>
              </div>
              <button onClick={() => { setIsTokenBookingModalOpen(false); setTokenBookingSuccess(false); }} className="text-slate-400 hover:text-white">
                <X className="w-5 h-5" />
              </button>
            </div>

            {!tokenBookingSuccess ? (
              <div className="space-y-4 text-xs">
                <div className="p-3.5 bg-slate-950 rounded-2xl border border-slate-800 space-y-1">
                  <div className="flex justify-between font-bold text-white">
                    <span>Selected Unit:</span>
                    <span className="text-emerald-400">{selectedUnitForBooking?.unitNo || 'Unit B-1801'}</span>
                  </div>
                  <div className="flex justify-between text-slate-400">
                    <span>Configuration:</span>
                    <span>{selectedUnitForBooking?.bhk || '3 BHK Royale'}</span>
                  </div>
                  <div className="flex justify-between text-slate-400">
                    <span>Total Agreement Value:</span>
                    <span>{selectedUnitForBooking?.price || '₹1.48 Cr'}</span>
                  </div>
                  <div className="flex justify-between font-bold text-amber-300 pt-1 border-t border-slate-800">
                    <span>Refundable Token Amount:</span>
                    <span>₹51,000</span>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="block text-slate-300 font-bold">Select Payment Mode</label>
                  <div className="grid grid-cols-3 gap-2">
                    {(['UPI', 'Card', 'NetBanking'] as const).map(mode => (
                      <button
                        key={mode}
                        type="button"
                        onClick={() => setTokenPaymentMethod(mode)}
                        className={`py-2 rounded-xl text-xs font-bold border transition-all ${
                          tokenPaymentMethod === mode
                            ? 'bg-emerald-500/20 border-emerald-500 text-emerald-300'
                            : 'bg-slate-950 border-slate-800 text-slate-400'
                        }`}
                      >
                        {mode}
                      </button>
                    ))}
                  </div>
                </div>

                {tokenPaymentMethod === 'UPI' && (
                  <div className="p-3 bg-slate-950 rounded-xl border border-slate-800 space-y-2 text-center">
                    <span className="text-[11px] text-slate-400">Simulate One-Click UPI Payment</span>
                    <div className="flex justify-center gap-2">
                      <span className="px-2.5 py-1 rounded bg-slate-900 border border-slate-700 text-[10px] font-bold text-emerald-400">GPay</span>
                      <span className="px-2.5 py-1 rounded bg-slate-900 border border-slate-700 text-[10px] font-bold text-teal-300">PhonePe</span>
                      <span className="px-2.5 py-1 rounded bg-slate-900 border border-slate-700 text-[10px] font-bold text-amber-300">Paytm</span>
                    </div>
                  </div>
                )}

                <button
                  onClick={() => setTokenBookingSuccess(true)}
                  className="w-full py-3 bg-gradient-to-r from-emerald-500 to-teal-400 text-slate-950 font-black text-xs rounded-xl shadow-lg transition-all flex items-center justify-center gap-1.5"
                >
                  <CheckCircle className="w-4 h-4" />
                  <span>Pay ₹51,000 & Reserve Unit</span>
                </button>
              </div>
            ) : (
              <div className="text-center space-y-4 py-4">
                <div className="w-14 h-14 bg-emerald-500/20 text-emerald-400 rounded-full flex items-center justify-center mx-auto border border-emerald-500/40">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h4 className="text-lg font-black text-white">Token Payment Successful!</h4>
                <p className="text-slate-300 text-xs">
                  Unit <strong>{selectedUnitForBooking?.unitNo || 'B-1801'}</strong> has been temporarily blocked for 7 days. Your digital allotment receipt has been generated.
                </p>
                <div className="p-3 bg-slate-950 rounded-xl border border-slate-800 text-[11px] text-slate-400 text-left space-y-1">
                  <div>Allotment Ref: <strong className="text-white">#NH-TOKEN-8849</strong></div>
                  <div>Payment Txn: <strong className="text-emerald-400">UPI/2026/8941203</strong></div>
                </div>
                <button
                  onClick={() => { setIsTokenBookingModalOpen(false); setTokenBookingSuccess(false); }}
                  className="bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs px-6 py-2.5 rounded-xl"
                >
                  Back to Showroom
                </button>
              </div>
            )}
          </div>
        </div>
      )}

    </div>
  );
};
