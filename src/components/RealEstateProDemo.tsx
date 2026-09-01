import React, { useState, useMemo } from 'react';
import { DemoItem, PlanType } from '../data/demos';
import { PRICING_PLANS } from '../data/content';
const basePrice = PRICING_PLANS.find(p => p.id === 'base')?.price || '₹24,999';
const proPrice = PRICING_PLANS.find(p => p.id === 'pro')?.price || '₹34,999';
const maxPrice = PRICING_PLANS.find(p => p.id === 'max')?.price || '₹54,999';

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

interface RealEstateProDemoProps {
  demo: DemoItem;
  isMobile: boolean;
  isTablet: boolean;
  onPlanChange?: (plan: PlanType) => void;
}

export const RealEstateProDemo: React.FC<RealEstateProDemoProps> = ({ demo, isMobile, onPlanChange }) => {
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
    <div className="w-full min-h-full bg-[#F8FAFC] text-slate-800 overflow-x-hidden font-sans custom-scrollbar select-text">
      
      {/* ========================================================================= */}
      {/* 1. TOP PACKAGE SWITCHER BAR (Premium Midnight Navy Header)               */}
      {/* ========================================================================= */}
      <div className="sticky top-0 z-50 bg-[#0B1528] border-b border-slate-800 px-4 py-2.5 shadow-xl">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2.5">
            <div className="w-7 h-7 rounded-lg bg-[#C5A880]/20 border border-[#C5A880]/40 flex items-center justify-center text-[#DFC49A]">
              <Building2 className="w-4 h-4" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-extrabold text-xs uppercase tracking-wider text-white">Nova Heights</span>
                <span className="text-[10px] bg-[#C5A880]/20 text-[#DFC49A] font-bold px-2 py-0.5 rounded border border-[#C5A880]/30">
                  REAL ESTATE DEMO
                </span>
              </div>
              <p className="text-[10px] text-slate-400 hidden sm:block">
                Interactive Multi-Tier Solution: Explore Base, Pro & Max Platforms
              </p>
            </div>
          </div>

          {/* Interactive Tier Buttons */}
          <div className="flex items-center gap-1.5 bg-[#07101E] p-1 rounded-xl border border-slate-800">
            <button
              onClick={() => onPlanChange?.('Base')}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 ${
                isBase
                  ? 'bg-[#C5A880] text-slate-950 font-black shadow-md'
                  : 'text-slate-400 hover:text-white hover:bg-slate-800/80'
              }`}
            >
              <span>BASE</span>
              <span className="opacity-75 text-[10px]">{basePrice}</span>
            </button>

            <button
              onClick={() => onPlanChange?.('Pro')}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 ${
                isPro
                  ? 'bg-[#C5A880] text-slate-950 font-black shadow-md shadow-[#C5A880]/20'
                  : 'text-slate-400 hover:text-white hover:bg-slate-800/80'
              }`}
            >
              <span>PRO</span>
              <span className="opacity-85 text-[10px] font-extrabold">{proPrice}</span>
            </button>

            <button
              onClick={() => onPlanChange?.('Max')}
              className={`relative px-3.5 py-1.5 rounded-lg text-xs font-black transition-all flex items-center gap-1.5 ${
                isMax
                  ? 'bg-gradient-to-r from-[#C5A880] via-[#DFC49A] to-[#C5A880] text-slate-950 shadow-lg font-black'
                  : 'text-[#DFC49A] hover:text-white hover:bg-slate-800/80'
              }`}
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>MAX</span>
              <span className="text-[10px] opacity-90">{maxPrice}</span>
              <span className="absolute -top-2.5 -right-2 bg-[#C5A880] text-slate-950 text-[8px] font-black uppercase px-1.5 py-0.2 rounded-full shadow-sm">
                BEST
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* 2. SUB-NAVIGATION FOR PRO & MAX (Clean White Bar with Elegant Accents)   */}
      {/* ========================================================================= */}
      {!isBase && (
        <div className="bg-white border-b border-slate-200/90 px-4 py-2 shadow-xs">
          <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-2 overflow-x-auto custom-scrollbar py-0.5">
              <button
                onClick={() => setActiveTab('website')}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold flex items-center gap-1.5 whitespace-nowrap transition-colors ${
                  activeTab === 'website'
                    ? 'bg-[#0B1528] text-white shadow-sm'
                    : 'text-slate-600 hover:text-[#0B1528] hover:bg-slate-100'
                }`}
              >
                <Home className="w-3.5 h-3.5" />
                <span>Client Website</span>
              </button>

              <button
                onClick={() => setActiveTab('crm')}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold flex items-center gap-1.5 whitespace-nowrap transition-colors ${
                  activeTab === 'crm'
                    ? 'bg-[#0B1528] text-white shadow-sm'
                    : 'text-slate-600 hover:text-[#0B1528] hover:bg-slate-100'
                }`}
              >
                <Users className="w-3.5 h-3.5" />
                <span>Leads CRM & Pipeline</span>
                <span className="bg-[#C5A880] text-slate-950 text-[9px] font-black px-1.5 py-0.2 rounded-full">
                  5 New
                </span>
              </button>

              {isMax && (
                <>
                  <button
                    onClick={() => setActiveTab('virtual-tour')}
                    className={`px-3 py-1.5 rounded-lg text-xs font-bold flex items-center gap-1.5 whitespace-nowrap transition-colors ${
                      activeTab === 'virtual-tour'
                        ? 'bg-[#0B1528] text-white shadow-sm'
                        : 'text-slate-600 hover:text-[#0B1528] hover:bg-slate-100'
                    }`}
                  >
                    <Video className="w-3.5 h-3.5" />
                    <span>360° Virtual Tour</span>
                    <span className="text-[9px] bg-[#C5A880]/20 text-[#8C6D44] font-bold px-1 rounded">
                      MAX
                    </span>
                  </button>

                  <button
                    onClick={() => setActiveTab('inventory')}
                    className={`px-3 py-1.5 rounded-lg text-xs font-bold flex items-center gap-1.5 whitespace-nowrap transition-colors ${
                      activeTab === 'inventory'
                        ? 'bg-[#0B1528] text-white shadow-sm'
                        : 'text-slate-600 hover:text-[#0B1528] hover:bg-slate-100'
                    }`}
                  >
                    <Layers className="w-3.5 h-3.5" />
                    <span>Unit Inventory Matrix</span>
                    <span className="text-[9px] bg-emerald-100 text-emerald-700 font-bold px-1 rounded">
                      Live
                    </span>
                  </button>

                  <button
                    onClick={() => setActiveTab('buyer-portal')}
                    className={`px-3 py-1.5 rounded-lg text-xs font-bold flex items-center gap-1.5 whitespace-nowrap transition-colors ${
                      activeTab === 'buyer-portal'
                        ? 'bg-[#0B1528] text-white shadow-sm'
                        : 'text-slate-600 hover:text-[#0B1528] hover:bg-slate-100'
                    }`}
                  >
                    <UserCheck className="w-3.5 h-3.5" />
                    <span>Buyer Customer Portal</span>
                    <span className="text-[9px] bg-[#C5A880]/20 text-[#8C6D44] font-bold px-1 rounded">
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
                className="bg-[#C5A880] hover:bg-[#B5966B] text-slate-950 font-bold text-xs px-3.5 py-1.5 rounded-lg shadow-sm flex items-center gap-1.5 transition-colors"
              >
                <Calendar className="w-3.5 h-3.5" />
                <span>Schedule Visit</span>
              </button>
              <a
                href="https://wa.me/919137283810?text=Hello%20Upscale%20Nova%2C%20I%20am%20interested%20in%20your%20services.%20Please%20provide%20more%20information."
                target="_blank"
                rel="noreferrer"
                className="bg-slate-100 hover:bg-slate-200 text-slate-800 border border-slate-200 font-bold text-xs px-3 py-1.5 rounded-lg flex items-center gap-1.5 transition-colors"
              >
                <MessageCircle className="w-3.5 h-3.5 text-emerald-600" />
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
          
          {/* Hero Section: Midnight Navy Backdrop with Champagne Accents */}
          <div className="relative min-h-[540px] flex items-center px-4 sm:px-8 md:px-12 py-16 overflow-hidden bg-[#0B1528]">
            <div className="absolute inset-0 z-0">
              <img loading="lazy"
                src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1000&q=75"
                alt="Nova Heights Residences"
                className="w-full h-full object-cover opacity-35"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#0B1528] via-[#0B1528]/85 to-[#0B1528]/40"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B1528] via-transparent to-[#0B1528]/60"></div>
            </div>

            <div className="relative z-10 max-w-3xl space-y-6">
              {/* Badges */}
              <div className="flex flex-wrap items-center gap-2">
                <span className="bg-[#C5A880]/20 border border-[#C5A880]/40 text-[#DFC49A] text-xs font-extrabold uppercase tracking-wider px-3 py-1 rounded-full flex items-center gap-1.5">
                  <Shield className="w-3.5 h-3.5 text-[#DFC49A]" />
                  RERA APPROVED: {PROJECT_DETAILS.reraId.substring(0, 22)}...
                </span>
                <span className="bg-white/10 border border-white/20 text-slate-200 text-xs font-extrabold uppercase tracking-wider px-3 py-1 rounded-full">
                  POSSESSION DEC 2026
                </span>
              </div>

              {/* Title & Tagline */}
              <div className="space-y-3">
                <h1 className="text-3xl sm:text-5xl md:text-6xl font-black text-white tracking-tight leading-[1.08]">
                  Elevate Your Living at <br />
                  <span className="text-[#DFC49A]">
                    Nova Heights Residences
                  </span>
                </h1>
                <p className="text-slate-300 text-sm sm:text-base md:text-lg font-medium max-w-2xl leading-relaxed">
                  Ultra-luxury 2, 3 & 4 BHK homes with 10-ft ceilings, expansive sundeck balconies, and 45+ lifestyle amenities spread across 5.2 lush acres in Prime Downtown.
                </p>
              </div>

              {/* Pricing & Key Metrics */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 bg-[#0F1E36]/90 p-4 rounded-2xl border border-slate-700/60 backdrop-blur-md max-w-2xl">
                <div>
                  <span className="text-[11px] text-slate-400 block font-bold">Residences</span>
                  <span className="text-lg sm:text-xl font-black text-white">2, 3 & 4 BHK</span>
                </div>
                <div>
                  <span className="text-[11px] text-slate-400 block font-bold">Starting Price</span>
                  <span className="text-lg sm:text-xl font-black text-[#DFC49A]">₹92.5 Lakhs*</span>
                </div>
                <div>
                  <span className="text-[11px] text-slate-400 block font-bold">Open Greens</span>
                  <span className="text-lg sm:text-xl font-black text-white">82% Landscaped</span>
                </div>
                <div>
                  <span className="text-[11px] text-slate-400 block font-bold">Towers</span>
                  <span className="text-lg sm:text-xl font-black text-[#DFC49A]">3 Iconic (G+32)</span>
                </div>
              </div>

              {/* Call to Actions */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <button
                  onClick={() => setIsSiteVisitModalOpen(true)}
                  className="bg-[#C5A880] hover:bg-[#B5966B] text-slate-950 font-black text-sm px-6 py-3.5 rounded-xl shadow-lg shadow-black/30 flex items-center gap-2 transition-all transform hover:-translate-y-0.5"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Book Free Site Visit + Cab</span>
                </button>

                <button
                  onClick={() => setIsBrochureModalOpen(true)}
                  className="bg-white/10 hover:bg-white/20 text-white font-bold text-sm px-5 py-3.5 rounded-xl border border-white/20 flex items-center gap-2 transition-all"
                >
                  <Download className="w-4 h-4 text-[#DFC49A]" />
                  <span>Download PDF Brochure</span>
                </button>

                {isMax && (
                  <button
                    onClick={() => setActiveTab('virtual-tour')}
                    className="bg-[#1E2E4A] hover:bg-[#25395C] text-white border border-[#C5A880]/40 font-bold text-sm px-5 py-3.5 rounded-xl flex items-center gap-2 transition-all"
                  >
                    <Video className="w-4 h-4 text-[#DFC49A]" />
                    <span>360° Virtual Tour</span>
                  </button>
                )}
              </div>
            </div>
          </div>

          {/* ========================================================================= */}
          {/* Property / Flat Listings Section (Clean White Background)                 */}
          {/* ========================================================================= */}
          <section id="residences" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
              <div>
                <span className="text-[#8C6D44] text-xs font-black uppercase tracking-widest block mb-1">
                  Ultra-Luxury Residences
                </span>
                <h2 className="text-2xl sm:text-4xl font-black text-[#0B1528] tracking-tight">
                  Available BHK Configurations & Floor Plans
                </h2>
              </div>

              {/* Filters for Pro / Max */}
              {!isBase && (
                <div className="flex flex-wrap items-center gap-2 bg-slate-100 p-1.5 rounded-2xl border border-slate-200">
                  {['All', '2 BHK', '3 BHK', '4 BHK'].map(bhk => (
                    <button
                      key={bhk}
                      onClick={() => setSelectedBhkFilter(bhk)}
                      className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
                        selectedBhkFilter === bhk
                          ? 'bg-[#0B1528] text-white shadow-sm font-black'
                          : 'text-slate-600 hover:text-[#0B1528] hover:bg-slate-200/70'
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
                  className="group bg-white border border-slate-200 hover:border-[#C5A880]/60 rounded-3xl overflow-hidden transition-all duration-300 shadow-sm hover:shadow-xl hover:shadow-slate-200/50 flex flex-col justify-between"
                >
                  <div>
                    {/* Property Image & Badges */}
                    <div className="relative aspect-[16/10] overflow-hidden">
                      <img loading="lazy"
                        src={property.image}
                        alt={property.title}
                        className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0B1528] via-transparent to-transparent"></div>

                      <div className="absolute top-3 left-3 flex gap-2">
                        <span className="bg-[#0B1528]/90 backdrop-blur-md text-[#DFC49A] border border-[#C5A880]/40 text-xs font-black px-3 py-1 rounded-lg">
                          {property.bhk}
                        </span>
                        <span className="bg-[#0B1528]/80 backdrop-blur-md text-white text-xs font-bold px-2.5 py-1 rounded-lg">
                          {property.carpetArea} Carpet
                        </span>
                      </div>

                      <div className="absolute top-3 right-3">
                        <span className={`text-[10px] font-black uppercase px-2.5 py-1 rounded-lg shadow-sm backdrop-blur-md ${
                          property.status === 'Available'
                            ? 'bg-[#C5A880] text-slate-950 font-extrabold'
                            : property.status === 'Fast Filling'
                            ? 'bg-amber-500 text-slate-950 font-extrabold'
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
                          <span className="text-[10px] text-slate-300 uppercase font-bold block">Starting</span>
                          <span className="text-xl font-black text-[#DFC49A]">{property.price}</span>
                        </div>
                      </div>
                    </div>

                    {/* Specs Details */}
                    <div className="p-6 space-y-4">
                      <div className="grid grid-cols-3 gap-2 text-xs py-3 border-y border-slate-100">
                        <div>
                          <span className="text-slate-500 text-[10px] block">Super Area</span>
                          <span className="font-bold text-[#0B1528]">{property.superBuiltup}</span>
                        </div>
                        <div>
                          <span className="text-slate-500 text-[10px] block">Facing</span>
                          <span className="font-bold text-[#8C6D44]">{property.facing}</span>
                        </div>
                        <div>
                          <span className="text-slate-500 text-[10px] block">Est. EMI</span>
                          <span className="font-bold text-[#0B1528]">{property.emiStarting}</span>
                        </div>
                      </div>

                      {/* Highlights */}
                      <ul className="space-y-1.5 text-xs text-slate-600">
                        {property.highlights.slice(0, 3).map((hl, i) => (
                          <li key={i} className="flex items-center gap-2">
                            <CheckCircle2 className="w-3.5 h-3.5 text-[#8C6D44] shrink-0" />
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
                      className="flex-1 py-3 bg-slate-100 hover:bg-slate-200 text-[#0B1528] font-bold text-xs rounded-xl border border-slate-200 flex items-center justify-center gap-1.5 transition-all"
                    >
                      <Eye className="w-3.5 h-3.5 text-[#8C6D44]" />
                      <span>View Floor Plan & Specs</span>
                    </button>

                    {isMax ? (
                      <button
                        onClick={() => {
                          const unit = INVENTORY_UNITS_DATA.find(u => u.bhk === property.bhk && u.status === 'Available') || INVENTORY_UNITS_DATA[0];
                          setSelectedUnitForBooking(unit);
                          setIsTokenBookingModalOpen(true);
                        }}
                        className="py-3 px-4 bg-[#C5A880] hover:bg-[#B5966B] text-slate-950 font-black text-xs rounded-xl flex items-center justify-center gap-1.5 shadow-md shadow-[#C5A880]/20"
                      >
                        <CreditCard className="w-3.5 h-3.5" />
                        <span>Book Token</span>
                      </button>
                    ) : (
                      <button
                        onClick={() => setIsSiteVisitModalOpen(true)}
                        className="py-3 px-4 bg-[#C5A880] hover:bg-[#B5966B] text-slate-950 font-bold text-xs rounded-xl flex items-center justify-center gap-1.5 shadow-sm transition-colors"
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
          {/* Amenities & Curated Lifestyle Showcase (Subtle Light Canvas)              */}
          {/* ========================================================================= */}
          <section className="bg-slate-50/80 border-y border-slate-200/80 py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
              <div className="text-center max-w-2xl mx-auto space-y-2">
                <span className="text-[#8C6D44] text-xs font-black uppercase tracking-widest">
                  45+ Curated Lifestyle Amenities
                </span>
                <h2 className="text-2xl sm:text-3xl font-black text-[#0B1528] tracking-tight">
                  Designed for Leisure, Fitness & Community
                </h2>
                <p className="text-slate-600 text-xs sm:text-sm">
                  Every corner of Nova Heights is engineered to provide a 5-star resort experience right at home.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {AMENITIES_LIST.map((amenity, i) => (
                  <div
                    key={i}
                    className="bg-white border border-slate-200 p-5 rounded-2xl hover:border-[#C5A880]/50 hover:shadow-md transition-all space-y-2"
                  >
                    <div className="w-10 h-10 rounded-xl bg-[#C5A880]/15 border border-[#C5A880]/30 flex items-center justify-center text-[#8C6D44]">
                      <Sparkles className="w-5 h-5" />
                    </div>
                    <h3 className="font-bold text-sm text-[#0B1528]">{amenity.name}</h3>
                    <p className="text-slate-500 text-xs leading-relaxed">{amenity.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* ========================================================================= */}
          {/* Location & Connectivity Advantage (Midnight Navy Container)               */}
          {/* ========================================================================= */}
          <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-[#0B1528] border border-slate-800 rounded-3xl p-6 sm:p-10 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center shadow-xl">
              <div className="space-y-6">
                <div className="space-y-2">
                  <span className="text-[#DFC49A] text-xs font-black uppercase tracking-widest">
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
                    <div key={i} className="p-3 bg-[#13223D] border border-slate-700/70 rounded-xl flex items-start gap-2.5">
                      <MapPin className="w-4 h-4 text-[#DFC49A] shrink-0 mt-0.5" />
                      <div>
                        <span className="text-xs font-bold text-white block">{loc.place}</span>
                        <span className="text-[11px] text-[#DFC49A] font-semibold">{loc.time}</span>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap items-center gap-3 pt-2">
                  <button
                    onClick={() => setIsSiteVisitModalOpen(true)}
                    className="bg-[#C5A880] hover:bg-[#B5966B] text-slate-950 font-bold text-xs px-5 py-2.5 rounded-xl flex items-center gap-2 transition-colors shadow-md"
                  >
                    <Compass className="w-4 h-4" />
                    <span>Get Directions & Free Cab</span>
                  </button>
                  <a
                    href="https://maps.google.com"
                    target="_blank"
                    rel="noreferrer"
                    className="text-slate-400 hover:text-white text-xs font-bold flex items-center gap-1 transition-colors"
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
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B1528] via-transparent to-[#0B1528]/40"></div>
                
                {/* Central Pin */}
                <div className="relative z-10 text-center space-y-2 bg-[#0B1528]/95 backdrop-blur-md p-4 rounded-2xl border border-[#C5A880]/50 shadow-2xl max-w-xs">
                  <div className="w-10 h-10 bg-[#C5A880] text-slate-950 rounded-full flex items-center justify-center mx-auto font-black shadow-lg shadow-[#C5A880]/30 animate-bounce">
                    <Building2 className="w-5 h-5" />
                  </div>
                  <h4 className="font-black text-sm text-white">Nova Heights Residences</h4>
                  <p className="text-[11px] text-slate-300">Sector 42, Prime Expressway Corridor</p>
                  <span className="inline-block bg-[#C5A880]/20 text-[#DFC49A] text-[10px] font-bold px-2 py-0.5 rounded border border-[#C5A880]/40">
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
              <div className="bg-white border border-slate-200/90 rounded-3xl p-6 sm:p-10 space-y-6 shadow-sm">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-100 pb-4">
                  <div>
                    <span className="text-[#8C6D44] text-xs font-black uppercase tracking-widest">
                      Financial Planning Tool
                    </span>
                    <h2 className="text-2xl font-black text-[#0B1528]">Interactive Home Loan EMI Calculator</h2>
                  </div>
                  <span className="text-xs bg-[#C5A880]/15 text-[#8C6D44] px-3 py-1 rounded-full border border-[#C5A880]/30 font-bold self-start sm:self-auto">
                    Pre-Approved by SBI, HDFC & ICICI
                  </span>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
                  {/* Sliders Area */}
                  <div className="lg:col-span-2 space-y-6">
                    {/* Loan Amount */}
                    <div className="space-y-2">
                      <div className="flex justify-between text-xs font-bold">
                        <span className="text-slate-600">Home Loan Amount</span>
                        <span className="text-[#0B1528] font-black text-sm">₹{loanAmountLakhs} Lakhs</span>
                      </div>
                      <input
                        type="range"
                        min="50"
                        max="300"
                        step="5"
                        value={loanAmountLakhs}
                        onChange={(e) => setLoanAmountLakhs(Number(e.target.value))}
                        className="w-full accent-[#0B1528] cursor-pointer"
                      />
                      <div className="flex justify-between text-[10px] text-slate-400">
                        <span>₹50 L</span>
                        <span>₹1.5 Cr</span>
                        <span>₹3.0 Cr</span>
                      </div>
                    </div>

                    {/* Interest Rate */}
                    <div className="space-y-2">
                      <div className="flex justify-between text-xs font-bold">
                        <span className="text-slate-600">Interest Rate (% p.a.)</span>
                        <span className="text-[#8C6D44] font-black text-sm">{loanInterestRate}%</span>
                      </div>
                      <input
                        type="range"
                        min="7.5"
                        max="12.0"
                        step="0.25"
                        value={loanInterestRate}
                        onChange={(e) => setLoanInterestRate(Number(e.target.value))}
                        className="w-full accent-[#8C6D44] cursor-pointer"
                      />
                      <div className="flex justify-between text-[10px] text-slate-400">
                        <span>7.5% (Special Subvention)</span>
                        <span>8.75% (Standard)</span>
                        <span>12.0%</span>
                      </div>
                    </div>

                    {/* Loan Tenure */}
                    <div className="space-y-2">
                      <div className="flex justify-between text-xs font-bold">
                        <span className="text-slate-600">Loan Tenure</span>
                        <span className="text-[#0B1528] font-black text-sm">{loanTenureYears} Years ({loanTenureYears * 12} Mos)</span>
                      </div>
                      <input
                        type="range"
                        min="5"
                        max="30"
                        step="1"
                        value={loanTenureYears}
                        onChange={(e) => setLoanTenureYears(Number(e.target.value))}
                        className="w-full accent-[#0B1528] cursor-pointer"
                      />
                      <div className="flex justify-between text-[10px] text-slate-400">
                        <span>5 Years</span>
                        <span>15 Years</span>
                        <span>30 Years</span>
                      </div>
                    </div>
                  </div>

                  {/* Calculated Output Card: Midnight Navy Output Box */}
                  <div className="bg-[#0B1528] p-6 rounded-2xl border border-slate-800 text-center space-y-4 shadow-xl">
                    <div>
                      <span className="text-xs text-slate-400 font-bold uppercase tracking-wider block">
                        Estimated Monthly EMI
                      </span>
                      <span className="text-3xl sm:text-4xl font-black text-[#DFC49A] block my-1">
                        ₹{calculatedEmi.monthlyEmi.toLocaleString('en-IN')}
                      </span>
                      <span className="text-[11px] text-slate-400">per month for {loanTenureYears} years</span>
                    </div>

                    <div className="pt-4 border-t border-slate-800 space-y-2 text-xs text-left">
                      <div className="flex justify-between">
                        <span className="text-slate-400">Principal Loan:</span>
                        <span className="font-bold text-white">₹{(loanAmountLakhs * 100000).toLocaleString('en-IN')}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-400">Total Interest:</span>
                        <span className="font-bold text-slate-300">₹{calculatedEmi.totalInterest.toLocaleString('en-IN')}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-400">Total Amount Payable:</span>
                        <span className="font-bold text-[#DFC49A]">₹{calculatedEmi.totalPayment.toLocaleString('en-IN')}</span>
                      </div>
                    </div>

                    <button
                      onClick={() => setIsSiteVisitModalOpen(true)}
                      className="w-full py-2.5 bg-[#C5A880] hover:bg-[#B5966B] text-slate-950 font-black text-xs rounded-xl transition-all"
                    >
                      Get Bank Approval Assistance
                    </button>
                  </div>
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
                <h2 className="text-2xl font-black text-[#0B1528]">Real Estate Leads & CRM Center</h2>
                <span className="bg-[#C5A880] text-slate-950 text-xs font-black px-2.5 py-0.5 rounded-full">
                  {leads.length} Active Leads
                </span>
              </div>
              <p className="text-slate-500 text-xs">
                Real-time inquiry capture from Website, WhatsApp, Site Visit forms, and AI Property Assistant.
              </p>
            </div>

            {/* Quick Metrics */}
            <div className="flex items-center gap-3">
              <div className="bg-white border border-slate-200 px-3 py-2 rounded-xl text-center shadow-xs">
                <span className="text-[10px] text-slate-500 block font-bold">Site Visits Booked</span>
                <span className="text-sm font-black text-[#0B1528]">18 This Week</span>
              </div>
              <div className="bg-white border border-slate-200 px-3 py-2 rounded-xl text-center shadow-xs">
                <span className="text-[10px] text-slate-500 block font-bold">Tokens Paid</span>
                <span className="text-sm font-black text-[#8C6D44]">₹6.4 Lakhs</span>
              </div>
            </div>
          </div>

          {/* Filter Bar */}
          <div className="bg-white p-4 rounded-2xl border border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-3 shadow-xs">
            <div className="flex items-center gap-2 overflow-x-auto custom-scrollbar">
              {['All', 'New Lead', 'Site Visit Scheduled', 'Visit Completed', 'Token Booking', 'Booked'].map(stage => (
                <button
                  key={stage}
                  onClick={() => setLeadStageFilter(stage)}
                  className={`px-3 py-1 rounded-lg text-xs font-bold whitespace-nowrap transition-all ${
                    leadStageFilter === stage
                      ? 'bg-[#0B1528] text-white font-black shadow-xs'
                      : 'text-slate-600 hover:text-[#0B1528] hover:bg-slate-100'
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
                className="bg-slate-50 border border-slate-200 text-xs rounded-xl pl-9 pr-3 py-2 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#C5A880] focus:bg-white"
              />
            </div>
          </div>

          {/* Leads Table */}
          <div className="bg-white border border-slate-200 rounded-3xl overflow-hidden shadow-sm">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs">
                <thead className="bg-[#0B1528] text-slate-300 font-bold uppercase tracking-wider text-[10px] border-b border-slate-800">
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
                <tbody className="divide-y divide-slate-100">
                  {leads
                    .filter(l => {
                      if (leadStageFilter !== 'All' && l.stage !== leadStageFilter) return false;
                      if (leadSearchQuery && !l.name.toLowerCase().includes(leadSearchQuery.toLowerCase()) && !l.phone.includes(leadSearchQuery)) return false;
                      return true;
                    })
                    .map(lead => (
                      <tr key={lead.id} className="hover:bg-slate-50/80 transition-colors">
                        <td className="p-4">
                          <div className="font-bold text-[#0B1528] text-sm">{lead.name}</div>
                          <div className="text-slate-500 text-[11px] flex items-center gap-1">
                            <Phone className="w-3 h-3 text-[#8C6D44]" />
                            <span>{lead.phone}</span>
                          </div>
                        </td>
                        <td className="p-4">
                          <span className="font-bold text-[#0B1528] block">{lead.bhkInterest}</span>
                          <span className="text-slate-500 text-[11px]">{lead.budget}</span>
                        </td>
                        <td className="p-4">
                          <span className="bg-slate-100 text-slate-700 px-2 py-0.5 rounded text-[10px] font-semibold border border-slate-200">
                            {lead.source}
                          </span>
                        </td>
                        <td className="p-4">
                          <span className={`px-2.5 py-1 rounded-full text-[10px] font-black uppercase ${
                            lead.stage === 'Booked'
                              ? 'bg-emerald-100 text-emerald-800 border border-emerald-300'
                              : lead.stage === 'Token Booking'
                              ? 'bg-[#C5A880]/20 text-[#8C6D44] border border-[#C5A880]/40'
                              : lead.stage === 'Site Visit Scheduled'
                              ? 'bg-blue-100 text-blue-800 border border-blue-200'
                              : 'bg-slate-100 text-slate-700'
                          }`}>
                            {lead.stage}
                          </span>
                        </td>
                        <td className="p-4 text-slate-700 font-medium">
                          {lead.assignedAgent}
                        </td>
                        <td className="p-4 text-slate-500 max-w-xs truncate text-[11px]">
                          {lead.notes}
                        </td>
                        <td className="p-4 text-right space-x-1.5">
                          <a
                            href={`https://wa.me/${lead.phone.replace(/[^0-9]/g, '')}?text=Hi%20${encodeURIComponent(lead.name)}%2C%20following%20up%20from%20Nova%20Heights%20Residences.`}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center gap-1 bg-[#C5A880]/20 hover:bg-[#C5A880]/30 text-[#8C6D44] border border-[#C5A880]/30 px-2.5 py-1.5 rounded-lg text-[10px] font-bold"
                          >
                            <MessageCircle className="w-3 h-3" />
                            <span>WhatsApp</span>
                          </a>
                          <button
                            onClick={() => console.log(`Dialing ${lead.phone} (${lead.name})...`)}
                            className="bg-slate-100 hover:bg-slate-200 text-slate-700 p-1.5 rounded-lg text-[10px] border border-slate-200"
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
      {/* 5. COMPARISON MATRIX & AGENCY UPSELL BANNER (Luxury Navy Style)           */}
      {/* ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 border-t border-slate-200/80">
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-10">
          <span className="text-[#8C6D44] text-xs font-black uppercase tracking-widest">
            Package Comparison Matrix
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-[#0B1528] tracking-tight">
            Choose the Ideal Real Estate Solution
          </h2>
          <p className="text-slate-600 text-xs sm:text-sm">
            Compare features across Base, Pro, and Max packages engineered by Upscale Nova.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Base Card */}
          <div className="p-6 rounded-3xl border border-slate-200 bg-white shadow-sm flex flex-col justify-between">
            <div>
              <span className="text-slate-500 text-xs font-bold uppercase">Essential Website</span>
              <h3 className="text-xl font-black text-[#0B1528] mt-1">BASE PLAN</h3>
              <div className="text-3xl font-black text-[#0B1528] my-4">{basePrice}</div>
              <p className="text-xs text-slate-500 mb-6">
                A professional real estate showcase website with developer overview, BHK details, gallery, and WhatsApp inquiry.
              </p>
              <ul className="space-y-2 text-xs text-slate-600">
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
              className="w-full mt-6 py-3 rounded-xl font-black text-xs uppercase bg-slate-100 hover:bg-slate-200 text-slate-700 border border-slate-200"
            >
              Select Base Plan
            </button>
          </div>

          {/* Pro Card (Active Highlighted) */}
          <div className="p-6 rounded-3xl border-2 border-[#C5A880] bg-white shadow-xl shadow-slate-200/60 flex flex-col justify-between relative">
            <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#C5A880] text-slate-950 font-black text-[9px] uppercase px-3 py-0.5 rounded-full shadow-md">
              ACTIVE PRO PLAN
            </span>
            <div>
              <span className="text-[#8C6D44] text-xs font-bold uppercase">Growth & Leads CRM</span>
              <h3 className="text-xl font-black text-[#0B1528] mt-1">PRO PLAN</h3>
              <div className="text-3xl font-black text-[#0B1528] my-4">{proPrice}</div>
              <p className="text-xs text-slate-500 mb-6">
                A complete property website with advanced BHK/price search, floor plans, appointment scheduler, and full leads CRM.
              </p>
              <ul className="space-y-2 text-xs text-slate-700">
                <li className="flex items-center gap-2 text-[#0B1528] font-bold">✓ Everything in BASE, plus:</li>
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
              className="w-full mt-6 py-3 rounded-xl font-black text-xs uppercase bg-[#C5A880] text-slate-950 shadow-md"
            >
              Current Active Demo
            </button>
          </div>

          {/* Max Card */}
          <div className="p-6 rounded-3xl border border-slate-200 bg-white shadow-sm flex flex-col justify-between">
            <div>
              <span className="text-[#0B1528] text-xs font-bold uppercase">AI-Powered Ecosystem</span>
              <h3 className="text-xl font-black text-[#0B1528] mt-1">MAX PLAN</h3>
              <div className="text-3xl font-black text-[#0B1528] my-4">{maxPrice}</div>
              <p className="text-xs text-slate-500 mb-6">
                Complete AI-powered real estate platform for property discovery, 360° virtual tours, online token booking, buyer portal & AI assistant.
              </p>
              <ul className="space-y-2 text-xs text-slate-600">
                <li className="flex items-center gap-2 text-[#0B1528] font-bold">✓ Everything in PRO, plus:</li>
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
              className="w-full mt-6 py-3 rounded-xl font-black text-xs uppercase bg-[#0B1528] hover:bg-[#152542] text-white"
            >
              Select Max Plan
            </button>
          </div>
        </div>

        {/* Agency CTA Footer: Deep Midnight Navy */}
        <div className="mt-12 bg-[#0B1528] border border-slate-800 rounded-3xl p-8 text-center space-y-4 max-w-4xl mx-auto text-white shadow-xl">
          <div className="w-12 h-12 rounded-2xl bg-[#C5A880]/20 border border-[#C5A880]/40 flex items-center justify-center text-[#DFC49A] mx-auto">
            <Building2 className="w-6 h-6" />
          </div>
          <h3 className="text-2xl font-black text-white">
            Transform Your Real Estate Project Into a Digital Sales Machine
          </h3>
          <p className="text-slate-300 text-xs sm:text-sm max-w-xl mx-auto">
            Upscale Nova crafts bespoke web applications, lead automations, and AI chatbots tailored specifically for developers and channel partners.
          </p>
          <a
            href="https://wa.me/919137283810?text=Hello%20Upscale%20Nova%2C%20I%20am%20interested%20in%20your%20services.%20Please%20provide%20more%20information."
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 bg-[#C5A880] hover:bg-[#B5966B] text-slate-950 font-black text-xs px-6 py-3 rounded-xl shadow-lg transition-all"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Speak to Real Estate Tech Expert</span>
          </a>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 6. FLOATING AI PROPERTY ASSISTANT                                        */}
      {/* ========================================================================= */}
      <div className="fixed bottom-6 right-6 z-40">
        {!isAiOpen ? (
          <button
            onClick={() => setIsAiOpen(true)}
            className="group bg-[#0B1528] border border-[#C5A880]/40 text-white p-4 rounded-full shadow-2xl flex items-center gap-2 font-bold text-xs transition-all transform hover:scale-105"
          >
            <Bot className="w-5 h-5 text-[#DFC49A] animate-bounce" />
            <span className="hidden sm:inline">Nova AI Property Copilot</span>
            <span className="w-2.5 h-2.5 rounded-full bg-[#C5A880] animate-ping"></span>
          </button>
        ) : (
          <div className="bg-white border border-slate-200 rounded-3xl shadow-2xl w-[360px] sm:w-[400px] h-[520px] flex flex-col overflow-hidden animate-in slide-in-from-bottom-5">
            {/* Header: Midnight Navy */}
            <div className="bg-[#0B1528] px-4 py-3 border-b border-slate-800 flex items-center justify-between text-white">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-full bg-[#C5A880]/20 border border-[#C5A880]/40 flex items-center justify-center text-[#DFC49A]">
                  <Bot className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-bold text-xs text-white">Nova AI Property Copilot</h4>
                  <span className="text-[10px] text-[#DFC49A] font-semibold flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C5A880] animate-pulse"></span>
                    Online • Real Estate Assistant
                  </span>
                </div>
              </div>
              <button onClick={() => setIsAiOpen(false)} className="text-slate-400 hover:text-white">
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Quick Prompts */}
            <div className="bg-slate-50 px-3 py-2 border-b border-slate-200 flex gap-1.5 overflow-x-auto custom-scrollbar">
              {['Pricing & Payment', 'RERA & Approvals', 'Book Free Visit', 'Vastu Details'].map((prompt, i) => (
                <button
                  key={i}
                  onClick={() => handleAiSend(prompt)}
                  className="text-[10px] bg-white hover:bg-slate-100 text-slate-700 px-2 py-1 rounded-lg border border-slate-200 whitespace-nowrap transition-colors"
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
                        ? 'bg-[#0B1528] text-white rounded-br-none'
                        : 'bg-slate-100 text-slate-800 rounded-bl-none border border-slate-200'
                    }`}
                  >
                    {msg.text}
                  </div>
                  <span className="text-[9px] text-slate-400 mt-1">{msg.time}</span>
                </div>
              ))}
            </div>

            {/* Input */}
            <div className="p-3 bg-white border-t border-slate-200 flex items-center gap-2">
              <input
                type="text"
                placeholder="Ask about BHKs, payment plans, site visits..."
                value={aiInputText}
                onChange={(e) => setAiInputText(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleAiSend()}
                className="flex-1 bg-slate-50 border border-slate-200 text-xs rounded-xl px-3 py-2 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#C5A880] focus:bg-white"
              />
              <button
                onClick={() => handleAiSend()}
                className="bg-[#C5A880] hover:bg-[#B5966B] text-slate-950 p-2 rounded-xl transition-colors"
              >
                <Send className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}
      </div>

      {/* ========================================================================= */}
      {/* 7. MODAL: PROPERTY DETAILS & FLOOR PLAN SPECS                            */}
      {/* ========================================================================= */}
      {selectedPropertyForModal && (
        <div className="fixed inset-0 z-50 bg-[#0B1528]/80 backdrop-blur-md flex items-center justify-center p-4">
          <div className="bg-white border border-slate-200 rounded-3xl max-w-2xl w-full p-6 sm:p-8 space-y-6 max-h-[90vh] overflow-y-auto custom-scrollbar shadow-2xl">
            <div className="flex items-center justify-between border-b border-slate-100 pb-4">
              <div>
                <span className="text-[#8C6D44] text-xs font-bold uppercase">{selectedPropertyForModal.tower}</span>
                <h3 className="text-xl font-black text-[#0B1528]">{selectedPropertyForModal.title}</h3>
              </div>
              <button onClick={() => setSelectedPropertyForModal(null)} className="text-slate-400 hover:text-slate-700">
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="aspect-[16/9] rounded-2xl overflow-hidden border border-slate-200 relative">
              <img loading="lazy"
                src={selectedPropertyForModal.image}
                alt={selectedPropertyForModal.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-3 right-3 bg-[#C5A880] text-slate-950 font-black text-xs px-3 py-1 rounded-lg">
                {selectedPropertyForModal.price}
              </div>
            </div>

            {/* Room Specs */}
            <div className="space-y-3">
              <h4 className="font-bold text-sm text-[#0B1528] flex items-center gap-1.5">
                <Maximize2 className="w-4 h-4 text-[#8C6D44]" />
                <span>Room Dimensions & Architectural Layout</span>
              </h4>
              <div className="grid grid-cols-2 gap-2 text-xs bg-slate-50 p-4 rounded-2xl border border-slate-200">
                <div>
                  <span className="text-slate-500 text-[11px] block">Living & Dining:</span>
                  <span className="font-bold text-[#0B1528]">{selectedPropertyForModal.specs.livingRoom}</span>
                </div>
                <div>
                  <span className="text-slate-500 text-[11px] block">Master Suite:</span>
                  <span className="font-bold text-[#0B1528]">{selectedPropertyForModal.specs.masterBedroom}</span>
                </div>
                <div>
                  <span className="text-slate-500 text-[11px] block">Guest Bedroom:</span>
                  <span className="font-bold text-[#0B1528]">{selectedPropertyForModal.specs.guestBedroom}</span>
                </div>
                <div>
                  <span className="text-slate-500 text-[11px] block">Kitchen & Utility:</span>
                  <span className="font-bold text-[#0B1528]">{selectedPropertyForModal.specs.kitchen}</span>
                </div>
                <div>
                  <span className="text-slate-500 text-[11px] block">Balconies:</span>
                  <span className="font-bold text-[#8C6D44]">{selectedPropertyForModal.specs.balconies}</span>
                </div>
                <div>
                  <span className="text-slate-500 text-[11px] block">Bathrooms:</span>
                  <span className="font-bold text-[#0B1528]">{selectedPropertyForModal.specs.bathrooms}</span>
                </div>
              </div>
            </div>

            <div className="flex gap-3 pt-2">
              <button
                onClick={() => {
                  setSelectedPropertyForModal(null);
                  setIsSiteVisitModalOpen(true);
                }}
                className="flex-1 py-3 bg-[#C5A880] hover:bg-[#B5966B] text-slate-950 font-black text-xs rounded-xl shadow-md transition-colors"
              >
                Schedule VIP Site Visit
              </button>
              <button
                onClick={() => {
                  setSelectedPropertyForModal(null);
                  setIsBrochureModalOpen(true);
                }}
                className="py-3 px-5 bg-slate-100 hover:bg-slate-200 text-[#0B1528] font-bold text-xs rounded-xl border border-slate-200 transition-colors"
              >
                Download Brochure
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* 8. MODAL: SCHEDULE SITE VISIT                                            */}
      {/* ========================================================================= */}
      {isSiteVisitModalOpen && (
        <div className="fixed inset-0 z-50 bg-[#0B1528]/80 backdrop-blur-md flex items-center justify-center p-4">
          <div className="bg-white border border-slate-200 rounded-3xl max-w-md w-full p-6 sm:p-8 space-y-5 shadow-2xl">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5 text-[#8C6D44]" />
                <h3 className="text-lg font-black text-[#0B1528]">Schedule Free VIP Site Visit</h3>
              </div>
              <button onClick={() => { setIsSiteVisitModalOpen(false); setSiteVisitSuccess(false); }} className="text-slate-400 hover:text-slate-700">
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
                  <label className="block text-slate-700 font-bold mb-1">Your Full Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Vikram Malhotra"
                    value={siteVisitForm.name}
                    onChange={(e) => setSiteVisitForm(prev => ({ ...prev, name: e.target.value }))}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-slate-900 focus:outline-none focus:border-[#C5A880] focus:bg-white"
                  />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-slate-700 font-bold mb-1">Phone Number *</label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 98201 44521"
                      value={siteVisitForm.phone}
                      onChange={(e) => setSiteVisitForm(prev => ({ ...prev, phone: e.target.value }))}
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-slate-900 focus:outline-none focus:border-[#C5A880] focus:bg-white"
                    />
                  </div>
                  <div>
                    <label className="block text-slate-700 font-bold mb-1">BHK Preference</label>
                    <select
                      value={siteVisitForm.bhk}
                      onChange={(e) => setSiteVisitForm(prev => ({ ...prev, bhk: e.target.value }))}
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-slate-900 focus:outline-none focus:border-[#C5A880] focus:bg-white"
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
                    <label className="block text-slate-700 font-bold mb-1">Preferred Date</label>
                    <input
                      type="date"
                      value={siteVisitForm.date}
                      onChange={(e) => setSiteVisitForm(prev => ({ ...prev, date: e.target.value }))}
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-slate-900 focus:outline-none focus:border-[#C5A880] focus:bg-white"
                    />
                  </div>
                  <div>
                    <label className="block text-slate-700 font-bold mb-1">Time Slot</label>
                    <select
                      value={siteVisitForm.timeSlot}
                      onChange={(e) => setSiteVisitForm(prev => ({ ...prev, timeSlot: e.target.value }))}
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-slate-900 focus:outline-none focus:border-[#C5A880] focus:bg-white"
                    >
                      <option>Morning (10:30 AM)</option>
                      <option>Afternoon (02:00 PM)</option>
                      <option>Evening (05:00 PM)</option>
                    </select>
                  </div>
                </div>

                <div className="flex items-center gap-2 p-2.5 bg-slate-50 rounded-xl border border-slate-200">
                  <input
                    type="checkbox"
                    id="cab-pro"
                    checked={siteVisitForm.cabPickup}
                    onChange={(e) => setSiteVisitForm(prev => ({ ...prev, cabPickup: e.target.checked }))}
                    className="accent-[#0B1528]"
                  />
                  <label htmlFor="cab-pro" className="text-[11px] text-slate-600 cursor-pointer">
                    Request complimentary AC Cab pickup & drop for my family
                  </label>
                </div>

                <button
                  type="submit"
                  className="w-full py-3 bg-[#C5A880] hover:bg-[#B5966B] text-slate-950 font-black text-xs rounded-xl shadow-lg transition-all"
                >
                  Confirm Site Visit Booking
                </button>
              </form>
            ) : (
              <div className="text-center space-y-4 py-4">
                <div className="w-14 h-14 bg-[#C5A880]/20 text-[#8C6D44] rounded-full flex items-center justify-center mx-auto border border-[#C5A880]/40">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h4 className="text-lg font-black text-[#0B1528]">VIP Site Visit Confirmed!</h4>
                <p className="text-slate-600 text-xs">
                  Your relationship manager <strong>Rohit Deshmukh</strong> has been assigned and will send cab driver details on WhatsApp 2 hours prior to your visit.
                </p>
                <button
                  onClick={() => { setIsSiteVisitModalOpen(false); setSiteVisitSuccess(false); }}
                  className="bg-[#0B1528] hover:bg-[#152542] text-white font-bold text-xs px-6 py-2.5 rounded-xl"
                >
                  Close Window
                </button>
              </div>
            )}
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* 9. MODAL: DOWNLOAD PROJECT BROCHURE                                       */}
      {/* ========================================================================= */}
      {isBrochureModalOpen && (
        <div className="fixed inset-0 z-50 bg-[#0B1528]/80 backdrop-blur-md flex items-center justify-center p-4">
          <div className="bg-white border border-slate-200 rounded-3xl max-w-md w-full p-6 sm:p-8 space-y-5 shadow-2xl">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <div className="flex items-center gap-2">
                <Download className="w-5 h-5 text-[#8C6D44]" />
                <h3 className="text-lg font-black text-[#0B1528]">Download Project Brochure</h3>
              </div>
              <button onClick={() => { setIsBrochureModalOpen(false); setBrochureDownloadSuccess(false); }} className="text-slate-400 hover:text-slate-700">
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
                <p className="text-slate-500 text-[11px]">
                  Get instant access to complete master plans, floor dimensions, luxury specifications, and payment milestones (PDF • 14 MB).
                </p>
                <div>
                  <label className="block text-slate-700 font-bold mb-1">Your Name</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Vikram Malhotra"
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-slate-900 focus:outline-none focus:border-[#C5A880] focus:bg-white"
                  />
                </div>
                <div>
                  <label className="block text-slate-700 font-bold mb-1">WhatsApp / Phone Number</label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 98201 44521"
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-slate-900 focus:outline-none focus:border-[#C5A880] focus:bg-white"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-3 bg-[#C5A880] hover:bg-[#B5966B] text-slate-950 font-black text-xs rounded-xl shadow-lg transition-all flex items-center justify-center gap-1.5"
                >
                  <Download className="w-4 h-4" />
                  <span>Download Instant PDF Brochure</span>
                </button>
              </form>
            ) : (
              <div className="text-center space-y-4 py-4">
                <div className="w-14 h-14 bg-[#C5A880]/20 text-[#8C6D44] rounded-full flex items-center justify-center mx-auto border border-[#C5A880]/40">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h4 className="text-lg font-black text-[#0B1528]">Brochure Downloaded!</h4>
                <p className="text-slate-600 text-xs">
                  A high-resolution PDF copy has also been sent to your WhatsApp number with the latest price sheet.
                </p>
                <button
                  onClick={() => { setIsBrochureModalOpen(false); setBrochureDownloadSuccess(false); }}
                  className="bg-[#0B1528] hover:bg-[#152542] text-white font-bold text-xs px-6 py-2.5 rounded-xl"
                >
                  Done
                </button>
              </div>
            )}
          </div>
        </div>
      )}

    </div>
  );
};
