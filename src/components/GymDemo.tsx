import React, { useState, useMemo } from 'react';
import { DemoItem, PlanType } from '../data/demos';
import {
  GYM_PROGRAMS,
  GYM_PLANS,
  GYM_TRAINERS,
  GYM_GALLERY,
  GYM_TESTIMONIALS,
  TODAY_WORKOUT_EXERCISES,
  INITIAL_LEADS,
  NUTRITION_MEALS,
  GymMembershipPlan,
  GymLead,
  WorkoutExercise
} from '../data/gymData';
import {
  Dumbbell, Flame, CheckCircle, Shield, Award, Users, Star,
  Calendar, Clock, MapPin, Phone, MessageSquare, ArrowRight, Lock,
  ChevronRight, Play, QrCode, Check, Plus, Minus, UserCheck,
  TrendingUp, Activity, BarChart3, PieChart, Sparkles, Send,
  Zap, AlertCircle, RefreshCw, Layers, CheckCircle2, ChevronDown,
  CreditCard, Smartphone, Heart, Eye, Bell, Bot, Copy, HelpCircle,
  ExternalLink, FileText, CheckSquare, MessageCircle, X
} from 'lucide-react';

interface GymDemoProps {
  demo: DemoItem;
  isMobile: boolean;
  isTablet: boolean;
  onPlanChange?: (plan: PlanType) => void;
}

export const GymDemo: React.FC<GymDemoProps> = ({ demo, isMobile, onPlanChange }) => {
  const plan = demo.plan;
  const isBase = plan === 'Base';
  const isPro = plan === 'Pro';
  const isMega = plan === 'Mega';

  // Navigation & View State
  const [activeTab, setActiveTab] = useState<'public' | 'portal' | 'leads' | 'admin' | 'trainer' | 'compare'>('public');
  const [activeRole, setActiveRole] = useState<'Owner' | 'Admin' | 'Trainer' | 'Member'>('Member');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  
  // Modals & Interactive States
  const [isTrialModalOpen, setIsTrialModalOpen] = useState(false);
  const [isQrModalOpen, setIsQrModalOpen] = useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);
  const [selectedPlanForPayment, setSelectedPlanForPayment] = useState<GymMembershipPlan>(GYM_PLANS[1]);
  const [paymentMethod, setPaymentMethod] = useState<'UPI' | 'Card' | 'NetBanking'>('UPI');
  const [paymentSuccess, setPaymentSuccess] = useState(false);

  // Member Portal & Workout State
  const [workoutList, setWorkoutList] = useState<WorkoutExercise[]>(TODAY_WORKOUT_EXERCISES);
  const [attendanceCheckedIn, setAttendanceCheckedIn] = useState(true);
  const [attendanceHistory, setAttendanceHistory] = useState([
    { day: 'Mon', date: '10 Aug', status: 'Present (06:30 AM)' },
    { day: 'Tue', date: '11 Aug', status: 'Present (06:45 AM)' },
    { day: 'Wed', date: '12 Aug', status: 'Rest Day' },
    { day: 'Thu', date: '13 Aug', status: 'Present (07:00 AM)' },
    { day: 'Fri', date: '14 Aug', status: 'Present (06:30 AM)' },
    { day: 'Sat', date: '15 Aug', status: 'Scheduled' },
    { day: 'Sun', date: '16 Aug', status: 'Rest Day' }
  ]);

  // Lead State for Pro & Mega
  const [leads, setLeads] = useState<GymLead[]>(INITIAL_LEADS);
  const [leadFilter, setLeadFilter] = useState<'All' | 'New' | 'Contacted' | 'Trial Booked' | 'Converted'>('All');
  const [searchQuery, setSearchQuery] = useState('');

  // AI Fitness Coach State
  const [isAiOpen, setIsAiOpen] = useState(false);
  const [aiChatMessages, setAiChatMessages] = useState<Array<{ sender: 'user' | 'ai'; text: string; time: string }>>([
    { sender: 'ai', text: "Hey Alex 👋 I'm your IronFit AI Coach. What would you like help with today? Form check, workout split, or macronutrient goals?", time: 'Just now' }
  ]);
  const [aiInputText, setAiInputText] = useState('');

  // Form State
  const [trialForm, setTrialForm] = useState({
    name: '',
    phone: '',
    email: '',
    fitnessGoal: 'Weight Loss & Toning',
    preferredMembership: 'Quarterly Pro',
    message: ''
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleToggleExercise = (id: string) => {
    setWorkoutList(prev => prev.map(ex => ex.id === id ? { ...ex, completed: !ex.completed } : ex));
  };

  const completedExercisesCount = workoutList.filter(e => e.completed).length;
  const workoutProgressPercent = Math.round((completedExercisesCount / workoutList.length) * 100);

  const handleAiSend = (textToSend?: string) => {
    const text = textToSend || aiInputText;
    if (!text.trim()) return;

    setAiChatMessages(prev => [...prev, { sender: 'user', text, time: 'Just now' }]);
    setAiInputText('');

    setTimeout(() => {
      let reply = "Great question! Keep your core braced and remember to hit at least 160g-180g protein daily for optimal hypertrophy and muscle recovery.";
      const lower = text.toLowerCase();
      if (lower.includes('train today') || lower.includes('workout')) {
        reply = "Today is your scheduled Chest & Triceps power session! Focus on the Barbell Bench (4x8 @ 85kg) followed by Cable Flys and Parallel Dips.";
      } else if (lower.includes('protein') || lower.includes('diet') || lower.includes('nutrition')) {
        reply = "Based on your 76kg body weight, your target is 180g protein (2.4g/kg). Your post-workout whey shake gives you 34g, and dinner will cover 45g.";
      } else if (lower.includes('progress') || lower.includes('weight')) {
        reply = "You've lost 6kg fat over 12 weeks while your bench press increased by +18%! Your current workout streak is on fire at 12 continuous days! 🔥";
      } else if (lower.includes('membership') || lower.includes('expire')) {
        reply = "Your Premium Annual Plan is active until 28 Dec 2026. You have 12 complimentary PT sessions remaining in your account.";
      }
      setAiChatMessages(prev => [...prev, { sender: 'ai', text: reply, time: 'Just now' }]);
    }, 600);
  };

  return (
    <div className="w-full h-full bg-[#060B14] text-slate-100 overflow-y-auto overflow-x-hidden font-sans custom-scrollbar select-none">
      {/* ------------------------------------------------------------- */}
      {/* 1. TOP INTERACTIVE PACKAGE SWITCHER BAR (Upscale Nova Header) */}
      {/* ------------------------------------------------------------- */}
      <div className="bg-[#0A1122] border-b border-[#1E293B] px-4 sm:px-6 py-2.5 sticky top-0 z-40 backdrop-blur-md">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-2.5">
            <div className="w-6 h-6 rounded bg-gradient-to-tr from-cyan-500 to-blue-600 flex items-center justify-center font-black text-slate-950 text-xs shadow-md">
              ⚡
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-extrabold text-xs tracking-wider uppercase text-white">Upscale Nova</span>
                <span className="text-[10px] text-cyan-400 font-medium">Digital Business Solutions</span>
              </div>
              <p className="text-[10px] text-slate-400 hidden md:block">
                Interactive Demo – Explore What&apos;s Included in Each Development Package
              </p>
            </div>
          </div>

          {/* Package Switcher Buttons */}
          <div className="flex items-center bg-[#060B14] p-1 rounded-xl border border-slate-800 shadow-inner">
            <button
              onClick={() => onPlanChange?.('Base')}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 ${
                isBase
                  ? 'bg-blue-600 text-white shadow-md shadow-blue-500/30'
                  : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
              }`}
            >
              <span>BASE</span>
              <span className="text-[10px] opacity-80">₹12,999</span>
            </button>

            <button
              onClick={() => onPlanChange?.('Pro')}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 ${
                isPro
                  ? 'bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-md shadow-cyan-500/30'
                  : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
              }`}
            >
              <span>PRO</span>
              <span className="text-[10px] opacity-80">₹16,999</span>
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping hidden sm:inline-block"></span>
            </button>

            <button
              onClick={() => onPlanChange?.('Mega')}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 ${
                isMega
                  ? 'bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-600 text-slate-950 font-black shadow-lg shadow-cyan-400/40'
                  : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
              }`}
            >
              <span>MEGA</span>
              <span className="text-[10px] opacity-90">₹24,999</span>
              <span className="bg-amber-400 text-slate-950 text-[8px] font-black px-1.5 py-0.2 rounded uppercase">Best</span>
            </button>
          </div>
        </div>
      </div>

      {/* ------------------------------------------------------------- */}
      {/* 2. PUBLIC HEADER & NAVIGATION */}
      {/* ------------------------------------------------------------- */}
      <header className="px-6 py-4 flex items-center justify-between border-b border-slate-800/80 sticky top-[49px] z-30 bg-[#060B14]/95 backdrop-blur-lg">
        {/* Brand */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-600 to-cyan-400 p-0.5 shadow-lg shadow-blue-500/30">
            <div className="w-full h-full bg-[#0A1122] rounded-[10px] flex items-center justify-center">
              <Dumbbell className="w-5 h-5 text-cyan-400" />
            </div>
          </div>
          <div>
            <div className="font-black text-xl tracking-tight uppercase italic text-white flex items-center gap-1.5">
              IRONFIT <span className="text-cyan-400 font-normal not-italic text-sm">ATHLETIC</span>
            </div>
            <div className="text-[9px] uppercase tracking-widest text-slate-400 font-bold">24/7 Elite Fitness Club</div>
          </div>
        </div>

        {/* Navigation Tabs */}
        {!isMobile && (
          <nav className="flex items-center gap-6 text-xs font-bold uppercase tracking-wider text-slate-300">
            <button
              onClick={() => setActiveTab('public')}
              className={`hover:text-cyan-400 transition-colors ${activeTab === 'public' ? 'text-cyan-400 border-b-2 border-cyan-400 pb-1' : ''}`}
            >
              Home
            </button>
            <a href="#services" onClick={() => setActiveTab('public')} className="hover:text-cyan-400">Programs</a>
            <a href="#trainers" onClick={() => setActiveTab('public')} className="hover:text-cyan-400">Trainers</a>
            <a href="#plans" onClick={() => setActiveTab('public')} className="hover:text-cyan-400">Memberships</a>

            {/* Pro & Mega Tab Links */}
            {!isBase && (
              <>
                <button
                  onClick={() => setActiveTab('portal')}
                  className={`flex items-center gap-1 hover:text-cyan-400 transition-colors ${activeTab === 'portal' ? 'text-cyan-400 border-b-2 border-cyan-400 pb-1' : ''}`}
                >
                  <UserCheck className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Member Portal</span>
                </button>
                <button
                  onClick={() => setActiveTab('leads')}
                  className={`flex items-center gap-1 hover:text-cyan-400 transition-colors ${activeTab === 'leads' ? 'text-cyan-400 border-b-2 border-cyan-400 pb-1' : ''}`}
                >
                  <Users className="w-3.5 h-3.5 text-blue-400" />
                  <span>Leads CRM</span>
                </button>
              </>
            )}

            {/* Mega Tab Links */}
            {isMega && (
              <button
                onClick={() => setActiveTab('admin')}
                className={`flex items-center gap-1 hover:text-cyan-400 transition-colors ${activeTab === 'admin' ? 'text-cyan-400 border-b-2 border-cyan-400 pb-1' : ''}`}
              >
                <Activity className="w-3.5 h-3.5 text-amber-400" />
                <span className="text-amber-400">Mega Admin</span>
              </button>
            )}

            <button
              onClick={() => setActiveTab('compare')}
              className={`hover:text-cyan-400 transition-colors ${activeTab === 'compare' ? 'text-cyan-400 border-b-2 border-cyan-400 pb-1' : ''}`}
            >
              Compare Plans
            </button>
          </nav>
        )}

        {/* Action Controls */}
        <div className="flex items-center gap-3">
          {!isBase ? (
            <button
              onClick={() => {
                setActiveTab('portal');
                setIsLoginModalOpen(true);
              }}
              className="hidden sm:flex items-center gap-2 bg-[#0F1C36] hover:bg-[#1E293B] text-cyan-300 border border-cyan-500/30 px-3.5 py-2 rounded-xl text-xs font-bold transition-all"
            >
              <UserCheck className="w-3.5 h-3.5" />
              <span>Member Login</span>
            </button>
          ) : (
            <div className="hidden sm:flex items-center gap-1.5 text-[10px] bg-slate-900 border border-slate-800 px-2.5 py-1.5 rounded-lg text-slate-400">
              <Lock className="w-3 h-3 text-slate-500" />
              <span>Portal in Pro</span>
            </div>
          )}

          <button
            onClick={() => setIsTrialModalOpen(true)}
            className="bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-500 hover:from-blue-500 hover:to-cyan-400 text-slate-950 font-black uppercase italic px-4 py-2 rounded-xl text-xs shadow-lg shadow-cyan-500/20 transition-all active:scale-95"
          >
            Free Day Trial
          </button>
        </div>
      </header>

      {/* ------------------------------------------------------------- */}
      {/* 3. CONDITIONAL ACTIVE VIEW RENDERING */}
      {/* ------------------------------------------------------------- */}

      {/* ============================================================= */}
      {/* VIEW A: PUBLIC GYM WEBSITE (BASE, PRO & MEGA) */}
      {/* ============================================================= */}
      {activeTab === 'public' && (
        <div>
          {/* HERO SECTION */}
          <section className="relative min-h-[560px] md:min-h-[620px] flex items-center px-6 md:px-14 py-20 overflow-hidden bg-[#070D18]">
            <div className="absolute inset-0">
              <img
                src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1600&q=80"
                alt="IronFit Gym"
                className="w-full h-full object-cover grayscale opacity-25"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#060B14] via-[#060B14]/90 to-transparent"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-[#060B14] via-transparent to-transparent"></div>
            </div>

            <div className="relative z-10 max-w-2xl space-y-6">
              <div className="inline-flex items-center gap-2 bg-[#0D1A30] border border-cyan-500/40 text-cyan-300 px-3.5 py-1 rounded-full text-xs font-bold shadow-md shadow-cyan-500/10">
                <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
                <span>Open 24/7 • Olympic Calibrated Barbell Facility</span>
              </div>

              <h1 className="text-4xl sm:text-6xl md:text-7xl font-black uppercase italic tracking-tight text-white leading-[0.95]">
                Train Hard. <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400">
                  Live Strong.
                </span>
              </h1>

              <p className="text-slate-300 text-sm sm:text-base font-normal leading-relaxed max-w-xl">
                Build strength, confidence and consistency with IronFit Athletic Club. World-class Eleiko lifting platforms, metabolic conditioning, and master coaching.
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <button
                  onClick={() => {
                    const el = document.getElementById('plans');
                    el?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-slate-950 font-black uppercase italic px-8 py-3.5 rounded-xl text-sm shadow-xl shadow-cyan-500/25 flex items-center gap-2 transition-all"
                >
                  <span>Join Now</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <button
                  onClick={() => setIsTrialModalOpen(true)}
                  className="bg-[#0A1426] hover:bg-[#12203A] text-white border border-slate-700 hover:border-cyan-400/50 px-6 py-3.5 rounded-xl text-sm font-bold transition-all flex items-center gap-2"
                >
                  <Sparkles className="w-4 h-4 text-cyan-400" />
                  <span>Book a Free Trial</span>
                </button>
              </div>

              {/* Verified Metrics Strip */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-slate-800/80">
                <div className="bg-[#0A1426]/70 p-3 rounded-xl border border-slate-800">
                  <div className="text-2xl font-black text-white italic">500+</div>
                  <div className="text-[11px] text-slate-400 font-medium">Active Members</div>
                </div>
                <div className="bg-[#0A1426]/70 p-3 rounded-xl border border-slate-800">
                  <div className="text-2xl font-black text-cyan-400 italic">15+</div>
                  <div className="text-[11px] text-slate-400 font-medium">Expert Trainers</div>
                </div>
                <div className="bg-[#0A1426]/70 p-3 rounded-xl border border-slate-800">
                  <div className="text-2xl font-black text-white italic">8+</div>
                  <div className="text-[11px] text-slate-400 font-medium">Years Experience</div>
                </div>
                <div className="bg-[#0A1426]/70 p-3 rounded-xl border border-slate-800">
                  <div className="text-2xl font-black text-emerald-400 italic">24/7</div>
                  <div className="text-[11px] text-slate-400 font-medium">Premium Facilities</div>
                </div>
              </div>
            </div>
          </section>

          {/* ABOUT THE GYM SECTION */}
          <section className="py-16 px-6 max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="inline-block text-cyan-400 text-xs font-black uppercase tracking-widest bg-cyan-950/60 border border-cyan-800/60 px-3 py-1 rounded-md">
                  About IronFit Athletic
                </div>
                <h2 className="text-3xl sm:text-4xl font-black uppercase italic tracking-tight text-white leading-tight">
                  Engineered For Results. <br />
                  <span className="text-slate-400">Zero Excuses, Pure Athletic Drive.</span>
                </h2>
                <p className="text-slate-300 text-sm leading-relaxed">
                  Founded with a singular mission: to provide serious fitness enthusiasts, athletes, and beginners with the ultimate training environment. We combine Olympic-grade free weights, cutting-edge biometric tracking, and recovery suites under one roof.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  <div className="flex items-start gap-3 bg-[#0A1426] p-4 rounded-xl border border-slate-800">
                    <CheckCircle2 className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
                    <div>
                      <div className="font-bold text-sm text-white">Eleiko & Rogue Rigs</div>
                      <div className="text-xs text-slate-400">Competition standard calibrated plates & bars</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 bg-[#0A1426] p-4 rounded-xl border border-slate-800">
                    <CheckCircle2 className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
                    <div>
                      <div className="font-bold text-sm text-white">Recovery & Sauna</div>
                      <div className="text-xs text-slate-400">Scandinavian cedar saunas & cold plunges</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 bg-[#0A1426] p-4 rounded-xl border border-slate-800">
                    <CheckCircle2 className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
                    <div>
                      <div className="font-bold text-sm text-white">Certified Master PTs</div>
                      <div className="text-xs text-slate-400">CSCS, ACE, and Olympic weightlifting coaches</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 bg-[#0A1426] p-4 rounded-xl border border-slate-800">
                    <CheckCircle2 className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
                    <div>
                      <div className="font-bold text-sm text-white">Digital Ecosystem</div>
                      <div className="text-xs text-slate-400">Live workout streak and QR pass attendance</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Visual Showcase Box */}
              <div className="relative">
                <div className="relative rounded-2xl overflow-hidden border border-slate-800 shadow-2xl">
                  <img
                    src="https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=800&q=80"
                    alt="Gym floor"
                    className="w-full h-[400px] object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#060B14] via-transparent to-transparent"></div>
                  <div className="absolute bottom-6 left-6 right-6 bg-[#0A1426]/90 backdrop-blur-md p-4 rounded-xl border border-cyan-500/30 flex items-center justify-between">
                    <div>
                      <div className="text-xs font-bold text-cyan-400 uppercase">State-of-the-Art Zone</div>
                      <div className="text-white font-black text-sm">12,000 Sq.Ft Multi-Tier Training Floor</div>
                    </div>
                    <button
                      onClick={() => setIsTrialModalOpen(true)}
                      className="bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold px-3 py-1.5 rounded-lg text-xs"
                    >
                      Visit Today
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* SERVICES & PROGRAMS SECTION */}
          <section id="services" className="py-16 px-6 max-w-7xl mx-auto border-t border-slate-800/80">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
              <div>
                <span className="text-cyan-400 font-black text-xs uppercase tracking-widest">Targeted Conditioning</span>
                <h2 className="text-3xl sm:text-4xl font-black uppercase italic text-white mt-1">
                  Elite Training Programs
                </h2>
              </div>

              {/* Category Filter Chips */}
              <div className="flex flex-wrap gap-2">
                {['All', 'Strength', 'Conditioning', 'Combat', 'Recovery'].map(cat => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all ${
                      selectedCategory === cat
                        ? 'bg-blue-600 text-white shadow-md'
                        : 'bg-[#0A1426] text-slate-400 hover:text-white border border-slate-800'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {GYM_PROGRAMS.filter(p => selectedCategory === 'All' || p.category === selectedCategory).map(prog => (
                <div
                  key={prog.id}
                  className="bg-[#0A1426] rounded-2xl border border-slate-800 hover:border-cyan-500/50 overflow-hidden flex flex-col justify-between transition-all group hover:shadow-xl hover:shadow-cyan-500/10"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={prog.image}
                      alt={prog.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0A1426] via-transparent to-transparent"></div>
                    <div className="absolute top-3 left-3 bg-[#060B14]/80 backdrop-blur-md px-2.5 py-1 rounded-md text-[10px] font-bold text-cyan-300 border border-cyan-500/30">
                      {prog.intensity} Intensity • {prog.duration}
                    </div>
                    <div className="absolute bottom-3 right-3 bg-slate-900/80 px-2 py-0.5 rounded text-[10px] text-slate-300">
                      🔥 {prog.calories}
                    </div>
                  </div>

                  <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
                    <div className="space-y-2">
                      <div className="flex justify-between items-center text-xs text-slate-400">
                        <span>Coach: <strong className="text-white">{prog.trainer}</strong></span>
                        <span className="text-amber-400 font-bold">{prog.spots}</span>
                      </div>
                      <h3 className="text-lg font-black uppercase italic text-white group-hover:text-cyan-400 transition-colors">
                        {prog.title}
                      </h3>
                      <p className="text-xs text-slate-400 leading-relaxed">
                        {prog.desc}
                      </p>
                    </div>

                    <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between">
                      <div className="flex gap-1.5">
                        {prog.tags.map(t => (
                          <span key={t} className="text-[10px] bg-slate-900 text-slate-400 px-2 py-0.5 rounded border border-slate-800">
                            #{t}
                          </span>
                        ))}
                      </div>
                      <button
                        onClick={() => setIsTrialModalOpen(true)}
                        className="text-xs font-bold text-cyan-400 hover:text-cyan-300 flex items-center gap-1"
                      >
                        <span>Enroll</span>
                        <ChevronRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* MEMBERSHIP PLANS SECTION */}
          <section id="plans" className="py-16 px-6 max-w-7xl mx-auto border-t border-slate-800/80 bg-[#070D18]/50">
            <div className="text-center max-w-2xl mx-auto space-y-3 mb-12">
              <span className="text-cyan-400 font-black text-xs uppercase tracking-widest">Flexible & Transparent</span>
              <h2 className="text-3xl sm:text-4xl font-black uppercase italic text-white">
                Choose Your Membership Plan
              </h2>
              <p className="text-slate-400 text-xs sm:text-sm">
                Unlock 24/7 gym access, personal coaching assessments, and recovery amenities with zero hidden admission fees.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {GYM_PLANS.map(planItem => (
                <div
                  key={planItem.id}
                  className={`rounded-2xl p-6 flex flex-col justify-between relative transition-all ${
                    planItem.popular
                      ? 'bg-[#0B1528] border-2 border-cyan-400 shadow-2xl shadow-cyan-500/20'
                      : 'bg-[#0A1426] border border-slate-800 hover:border-slate-700'
                  }`}
                >
                  {planItem.badge && (
                    <div className={`absolute -top-3 left-1/2 -translate-x-1/2 text-[10px] font-black uppercase px-3 py-0.5 rounded-full ${
                      planItem.popular
                        ? 'bg-gradient-to-r from-blue-600 to-cyan-400 text-slate-950'
                        : 'bg-slate-800 text-cyan-400 border border-cyan-500/30'
                    }`}>
                      {planItem.badge}
                    </div>
                  )}

                  <div className="space-y-4">
                    <div>
                      <div className="text-xs font-bold uppercase text-slate-400 tracking-wider">{planItem.duration}</div>
                      <h3 className="text-xl font-black uppercase italic text-white mt-0.5">{planItem.name}</h3>
                    </div>

                    <div className="flex items-baseline gap-2">
                      <span className="text-3xl sm:text-4xl font-black text-white">₹{planItem.price.toLocaleString()}</span>
                      <span className="text-xs text-slate-400">{planItem.periodText}</span>
                    </div>

                    <p className="text-xs text-slate-400 leading-relaxed border-b border-slate-800 pb-4">
                      {planItem.desc}
                    </p>

                    <div className="space-y-2.5">
                      <div className="text-[10px] font-bold text-slate-300 uppercase tracking-wider">Included Perks:</div>
                      {planItem.features.map((feat, idx) => (
                        <div key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                          <Check className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-6">
                    <button
                      onClick={() => {
                        if (!isBase) {
                          setSelectedPlanForPayment(planItem);
                          setIsPaymentModalOpen(true);
                        } else {
                          setIsTrialModalOpen(true);
                        }
                      }}
                      className={`w-full py-3 rounded-xl font-black uppercase italic text-xs transition-all flex items-center justify-center gap-2 ${
                        planItem.popular
                          ? 'bg-gradient-to-r from-blue-600 to-cyan-500 text-slate-950 hover:from-blue-500 hover:to-cyan-400 shadow-lg shadow-cyan-500/25'
                          : 'bg-slate-800 hover:bg-slate-700 text-white'
                      }`}
                    >
                      <span>{planItem.cta}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* BASE PACKAGE RESTRICTION PREVIEW */}
            {isBase && (
              <div className="mt-12 bg-gradient-to-r from-[#0D182E] to-[#0A1426] p-6 rounded-2xl border border-blue-500/30 flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="space-y-1 text-center md:text-left">
                  <div className="inline-flex items-center gap-1.5 text-cyan-400 font-bold text-xs">
                    <Lock className="w-3.5 h-3.5" />
                    <span>PRO & MEGA EXCLUSIVE FEATURES</span>
                  </div>
                  <h4 className="text-lg font-black text-white uppercase italic">
                    Want Member Portal, Digital QR Pass & Lead Automation?
                  </h4>
                  <p className="text-xs text-slate-400 max-w-xl">
                    Upgrade to PRO (₹16,999) or MEGA (₹24,999) to unlock real-time check-ins, workout streaks, diet plans, lead CRM and AI assistant.
                  </p>
                </div>
                <div className="flex gap-3">
                  <button
                    onClick={() => onPlanChange?.('Pro')}
                    className="bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 rounded-xl text-xs font-bold"
                  >
                    Upgrade to Pro (₹16,999)
                  </button>
                  <button
                    onClick={() => onPlanChange?.('Mega')}
                    className="bg-cyan-500 hover:bg-cyan-400 text-slate-950 px-4 py-2 rounded-xl text-xs font-black"
                  >
                    View Mega Demo
                  </button>
                </div>
              </div>
            )}
          </section>

          {/* TRAINERS SECTION */}
          <section id="trainers" className="py-16 px-6 max-w-7xl mx-auto border-t border-slate-800/80">
            <div className="text-center max-w-2xl mx-auto space-y-3 mb-12">
              <span className="text-cyan-400 font-black text-xs uppercase tracking-widest">Master Strength Coaches</span>
              <h2 className="text-3xl sm:text-4xl font-black uppercase italic text-white">
                Learn From Certified Champions
              </h2>
              <p className="text-slate-400 text-xs sm:text-sm">
                Our elite coaching roster consists of certified national powerlifters, Olympic lifters, and rehabilitation physiotherapists.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {GYM_TRAINERS.map(trainer => (
                <div
                  key={trainer.id}
                  className="bg-[#0A1426] rounded-2xl border border-slate-800 overflow-hidden flex flex-col justify-between hover:border-cyan-500/40 transition-all group"
                >
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={trainer.image}
                      alt={trainer.name}
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0A1426] via-transparent to-transparent"></div>
                    <div className="absolute bottom-3 left-3 right-3 flex justify-between items-end">
                      <div>
                        <div className="text-cyan-400 text-[10px] font-bold uppercase">{trainer.experience}</div>
                        <h3 className="text-lg font-black uppercase italic text-white">{trainer.name}</h3>
                      </div>
                      <div className="flex items-center gap-1 bg-black/60 px-2 py-0.5 rounded text-[10px] font-bold text-amber-400">
                        <Star className="w-3 h-3 fill-amber-400" />
                        <span>{trainer.rating}</span>
                      </div>
                    </div>
                  </div>

                  <div className="p-5 space-y-3 flex-1 flex flex-col justify-between">
                    <div className="space-y-2">
                      <div className="text-xs text-slate-300 font-semibold">{trainer.role}</div>
                      <div className="text-[11px] text-cyan-400 font-medium">🎯 {trainer.specialty}</div>
                      <p className="text-xs text-slate-400 leading-relaxed">{trainer.bio}</p>
                    </div>

                    <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs">
                      <span className="text-slate-500 text-[10px]">{trainer.instagram}</span>
                      <button
                        onClick={() => setIsTrialModalOpen(true)}
                        className="text-cyan-400 font-bold hover:underline"
                      >
                        Book 1-on-1
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* GALLERY SECTION */}
          <section className="py-16 px-6 max-w-7xl mx-auto border-t border-slate-800/80">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
              <div>
                <span className="text-cyan-400 font-black text-xs uppercase tracking-widest">Atmosphere & Equipment</span>
                <h2 className="text-3xl sm:text-4xl font-black uppercase italic text-white mt-1">
                  World-Class Facility Gallery
                </h2>
              </div>
              <div className="text-xs text-slate-400">High-performance training floor tour</div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {GYM_GALLERY.map((gal, idx) => (
                <div key={idx} className="relative group rounded-xl overflow-hidden h-52 border border-slate-800">
                  <img
                    src={gal.img}
                    alt={gal.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-95 transition-opacity"></div>
                  <div className="absolute bottom-3 left-3 right-3">
                    <span className="text-[9px] uppercase font-black bg-cyan-500 text-slate-950 px-2 py-0.5 rounded">
                      {gal.cat}
                    </span>
                    <div className="text-sm font-bold text-white mt-1">{gal.title}</div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* TESTIMONIALS SECTION */}
          <section className="py-16 px-6 max-w-7xl mx-auto border-t border-slate-800/80 bg-[#070D18]/40">
            <div className="text-center max-w-2xl mx-auto space-y-3 mb-12">
              <span className="text-cyan-400 font-black text-xs uppercase tracking-widest">Real Transformations</span>
              <h2 className="text-3xl sm:text-4xl font-black uppercase italic text-white">
                What Our Athletes Say
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {GYM_TESTIMONIALS.map((t, idx) => (
                <div key={idx} className="bg-[#0A1426] p-6 rounded-2xl border border-slate-800 space-y-4 flex flex-col justify-between">
                  <div className="space-y-3">
                    <div className="flex gap-1 text-amber-400">
                      {[...Array(t.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-amber-400" />
                      ))}
                    </div>
                    <div className="inline-block bg-emerald-950/80 text-emerald-300 text-[10px] font-bold px-2 py-0.5 rounded border border-emerald-700/50">
                      🎯 {t.change}
                    </div>
                    <p className="text-xs text-slate-300 italic leading-relaxed">
                      &ldquo;{t.comment}&rdquo;
                    </p>
                  </div>

                  <div className="flex items-center gap-3 pt-4 border-t border-slate-800">
                    <img src={t.avatar} alt={t.name} className="w-10 h-10 rounded-full object-cover border border-cyan-400/40" />
                    <div>
                      <div className="text-sm font-bold text-white">{t.name}</div>
                      <div className="text-[11px] text-slate-400">{t.role}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* CONTACT & LOCATION SECTION */}
          <section id="contact" className="py-16 px-6 max-w-7xl mx-auto border-t border-slate-800/80">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Form Column */}
              <div className="space-y-6 bg-[#0A1426] p-8 rounded-3xl border border-slate-800">
                <div>
                  <span className="text-cyan-400 font-black text-xs uppercase tracking-widest">Get in Touch</span>
                  <h3 className="text-2xl sm:text-3xl font-black uppercase italic text-white mt-1">
                    Claim Your Free Trial Pass
                  </h3>
                  <p className="text-xs text-slate-400 mt-1">
                    Fill out the form to claim a 1-Day VIP Pass and 1-on-1 Fitness Assessment.
                  </p>
                </div>

                {formSubmitted ? (
                  <div className="bg-emerald-950/60 border border-emerald-500/40 p-6 rounded-2xl text-center space-y-2">
                    <CheckCircle className="w-10 h-10 text-emerald-400 mx-auto" />
                    <h4 className="text-lg font-bold text-white">Free Trial Confirmed!</h4>
                    <p className="text-xs text-slate-300">
                      Our head coach will WhatsApp your digital pass and booking slot shortly.
                    </p>
                    <button
                      onClick={() => setFormSubmitted(false)}
                      className="text-xs text-cyan-400 font-bold underline pt-2"
                    >
                      Submit Another Enquiry
                    </button>
                  </div>
                ) : (
                  <form
                    onSubmit={e => {
                      e.preventDefault();
                      setFormSubmitted(true);
                    }}
                    className="space-y-4 text-xs"
                  >
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-1">
                        <label className="text-slate-300 font-bold">Full Name *</label>
                        <input
                          type="text"
                          required
                          placeholder="e.g. Rahul Sharma"
                          value={trialForm.name}
                          onChange={e => setTrialForm({ ...trialForm, name: e.target.value })}
                          className="w-full bg-[#060B14] border border-slate-800 rounded-xl p-3 text-white placeholder:text-slate-600 focus:border-cyan-400 outline-hidden"
                        />
                      </div>
                      <div className="space-y-1">
                        <label className="text-slate-300 font-bold">Phone Number *</label>
                        <input
                          type="tel"
                          required
                          placeholder="e.g. +91 98200 XXXXX"
                          value={trialForm.phone}
                          onChange={e => setTrialForm({ ...trialForm, phone: e.target.value })}
                          className="w-full bg-[#060B14] border border-slate-800 rounded-xl p-3 text-white placeholder:text-slate-600 focus:border-cyan-400 outline-hidden"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-1">
                        <label className="text-slate-300 font-bold">Fitness Goal</label>
                        <select
                          value={trialForm.fitnessGoal}
                          onChange={e => setTrialForm({ ...trialForm, fitnessGoal: e.target.value })}
                          className="w-full bg-[#060B14] border border-slate-800 rounded-xl p-3 text-white focus:border-cyan-400 outline-hidden"
                        >
                          <option>Weight Loss & Fat Shred</option>
                          <option>Muscle Hypertrophy & Bulk</option>
                          <option>Powerlifting & Strength PR</option>
                          <option>Boxing & Athletic Stamina</option>
                          <option>Injury Rehabilitation</option>
                        </select>
                      </div>

                      <div className="space-y-1">
                        <label className="text-slate-300 font-bold">Preferred Plan</label>
                        <select
                          value={trialForm.preferredMembership}
                          onChange={e => setTrialForm({ ...trialForm, preferredMembership: e.target.value })}
                          className="w-full bg-[#060B14] border border-slate-800 rounded-xl p-3 text-white focus:border-cyan-400 outline-hidden"
                        >
                          <option>Monthly Standard (₹1,999)</option>
                          <option>Quarterly Pro (₹4,999)</option>
                          <option>Half-Yearly Elite (₹8,999)</option>
                          <option>Annual VIP Titanium (₹14,999)</option>
                        </select>
                      </div>
                    </div>

                    <div className="space-y-1">
                      <label className="text-slate-300 font-bold">Message or Special Requests (Optional)</label>
                      <textarea
                        rows={3}
                        placeholder="Tell us about your fitness history or desired workout time..."
                        value={trialForm.message}
                        onChange={e => setTrialForm({ ...trialForm, message: e.target.value })}
                        className="w-full bg-[#060B14] border border-slate-800 rounded-xl p-3 text-white placeholder:text-slate-600 focus:border-cyan-400 outline-hidden resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-slate-950 font-black uppercase italic py-3.5 rounded-xl shadow-lg shadow-cyan-500/20 text-xs transition-all"
                    >
                      Confirm Free Day Trial
                    </button>
                  </form>
                )}

                <div className="flex flex-col sm:flex-row gap-3 pt-2">
                  <a
                    href="https://wa.me/919876543210?text=Hi%20IronFit%20Athletic,%20I%20want%20to%20inquire%20about%20membership"
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-2.5 px-4 rounded-xl text-center flex items-center justify-center gap-2 text-xs"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>WhatsApp Inquiry</span>
                  </a>
                  <a
                    href="tel:+918000047663"
                    className="flex-1 bg-slate-800 hover:bg-slate-700 text-white font-bold py-2.5 px-4 rounded-xl text-center flex items-center justify-center gap-2 text-xs"
                  >
                    <Phone className="w-4 h-4 text-cyan-400" />
                    <span>Call Desk (+91 80000-IRON)</span>
                  </a>
                </div>
              </div>

              {/* Location & Opening Hours Column */}
              <div className="space-y-6 flex flex-col justify-between">
                <div className="space-y-4">
                  <div>
                    <span className="text-cyan-400 font-black text-xs uppercase tracking-widest">Location & Timings</span>
                    <h3 className="text-2xl sm:text-3xl font-black uppercase italic text-white mt-1">
                      Visit IronFit Athletic Club
                    </h3>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="bg-[#0A1426] p-4 rounded-2xl border border-slate-800 space-y-1">
                      <div className="flex items-center gap-2 text-cyan-400 font-bold text-xs">
                        <Clock className="w-4 h-4" />
                        <span>Operating Hours</span>
                      </div>
                      <div className="text-sm font-bold text-white">24 Hours / 7 Days a Week</div>
                      <div className="text-xs text-slate-400">Trainer Staffed: 6:00 AM – 11:00 PM</div>
                    </div>

                    <div className="bg-[#0A1426] p-4 rounded-2xl border border-slate-800 space-y-1">
                      <div className="flex items-center gap-2 text-cyan-400 font-bold text-xs">
                        <MapPin className="w-4 h-4" />
                        <span>Flagship Facility</span>
                      </div>
                      <div className="text-sm font-bold text-white">Level 3, Olympian Tower</div>
                      <div className="text-xs text-slate-400">Bandra West, Mumbai - 400050</div>
                    </div>
                  </div>

                  {/* Simulated Google Map View */}
                  <div className="h-64 bg-[#0A1426] rounded-2xl border border-slate-800 relative overflow-hidden flex items-center justify-center">
                    <div className="absolute inset-0 opacity-40 bg-[radial-gradient(#1E293B_1px,transparent_1px)] [background-size:16px_16px]"></div>
                    <div className="relative text-center space-y-2 z-10">
                      <div className="w-10 h-10 bg-cyan-500 text-slate-950 rounded-full flex items-center justify-center mx-auto shadow-lg shadow-cyan-500/40 animate-bounce">
                        <MapPin className="w-5 h-5" />
                      </div>
                      <div className="font-bold text-white text-xs">IronFit Athletic Club Mumbai</div>
                      <div className="text-[10px] text-slate-400">Valet Parking & Metro Access Available</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      )}

      {/* ============================================================= */}
      {/* VIEW B: PRO & MEGA MEMBER PORTAL */}
      {/* ============================================================= */}
      {activeTab === 'portal' && (
        <div className="py-10 px-6 max-w-7xl mx-auto space-y-8">
          {/* Member Welcome Banner */}
          <div className="bg-gradient-to-r from-[#0B1528] via-[#0E1E3A] to-[#0A1426] p-6 sm:p-8 rounded-3xl border border-cyan-500/30 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 shadow-2xl">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-cyan-400 to-blue-600 p-0.5 shadow-xl shadow-cyan-500/30 shrink-0">
                <img
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80"
                  alt="Alex"
                  className="w-full h-full object-cover rounded-[14px]"
                />
              </div>
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <h2 className="text-2xl font-black text-white">Good morning, Alex 👋</h2>
                  <span className="bg-cyan-500/20 text-cyan-300 text-[10px] font-black px-2 py-0.5 rounded-full border border-cyan-400/40 uppercase">
                    Premium Annual
                  </span>
                </div>
                <p className="text-xs text-slate-300">
                  Membership Active • Valid Until <strong className="text-white">28 Dec 2026</strong> • Assigned Coach: <strong className="text-cyan-400">Alex Vance</strong>
                </p>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <button
                onClick={() => setIsQrModalOpen(true)}
                className="bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-black px-4 py-2.5 rounded-xl text-xs flex items-center gap-2 shadow-lg shadow-cyan-500/20"
              >
                <QrCode className="w-4 h-4" />
                <span>Show QR Pass</span>
              </button>

              <button
                onClick={() => setAttendanceCheckedIn(!attendanceCheckedIn)}
                className={`px-4 py-2.5 rounded-xl text-xs font-bold transition-all flex items-center gap-2 ${
                  attendanceCheckedIn
                    ? 'bg-emerald-600/20 border border-emerald-500/40 text-emerald-300'
                    : 'bg-blue-600 text-white'
                }`}
              >
                <CheckCircle2 className="w-4 h-4" />
                <span>{attendanceCheckedIn ? 'Checked In (06:30 AM)' : 'Check In Today'}</span>
              </button>
            </div>
          </div>

          {/* Quick Metrics Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            <div className="bg-[#0A1426] p-5 rounded-2xl border border-slate-800 space-y-1">
              <div className="text-xs text-slate-400 font-medium">Monthly Attendance</div>
              <div className="text-2xl font-black text-white">18 / 25 <span className="text-xs text-cyan-400 font-normal">Visits</span></div>
              <div className="text-[10px] text-emerald-400 font-bold">Top 5% Most Consistent</div>
            </div>

            <div className="bg-[#0A1426] p-5 rounded-2xl border border-slate-800 space-y-1">
              <div className="text-xs text-slate-400 font-medium">Workout Streak</div>
              <div className="text-2xl font-black text-amber-400 flex items-center gap-1">
                <span>🔥 12</span> <span className="text-xs text-slate-300 font-normal">Days</span>
              </div>
              <div className="text-[10px] text-amber-300">Personal Best Streak!</div>
            </div>

            <div className="bg-[#0A1426] p-5 rounded-2xl border border-slate-800 space-y-1">
              <div className="text-xs text-slate-400 font-medium">Strength Improvement</div>
              <div className="text-2xl font-black text-cyan-400">+8.4%</div>
              <div className="text-[10px] text-slate-400">Bench: 75kg → 85kg</div>
            </div>

            <div className="bg-[#0A1426] p-5 rounded-2xl border border-slate-800 space-y-1">
              <div className="text-xs text-slate-400 font-medium">Renewal Status</div>
              <div className="text-sm font-black text-emerald-400">318 Days Left</div>
              <button
                onClick={() => setIsPaymentModalOpen(true)}
                className="text-[10px] text-cyan-400 underline font-bold"
              >
                Add PT Pack / Renew
              </button>
            </div>
          </div>

          {/* Interactive Workout Tracker */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 bg-[#0A1426] p-6 rounded-3xl border border-slate-800 space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-800 pb-4">
                <div>
                  <span className="text-cyan-400 text-xs font-black uppercase">Today&apos;s Workout Routine</span>
                  <h3 className="text-xl font-black text-white uppercase italic">Chest & Triceps Hypertrophy</h3>
                </div>
                <div className="flex items-center gap-3">
                  <div className="text-right">
                    <div className="text-xs font-bold text-white">{completedExercisesCount} of {workoutList.length} Done</div>
                    <div className="text-[10px] text-slate-400">{workoutProgressPercent}% Completed</div>
                  </div>
                  <div className="w-12 h-12 rounded-full bg-[#060B14] border-2 border-cyan-400 flex items-center justify-center font-black text-xs text-cyan-400">
                    {workoutProgressPercent}%
                  </div>
                </div>
              </div>

              {/* Exercises List */}
              <div className="space-y-3">
                {workoutList.map(ex => (
                  <div
                    key={ex.id}
                    onClick={() => handleToggleExercise(ex.id)}
                    className={`p-4 rounded-2xl border transition-all cursor-pointer flex items-center justify-between gap-4 ${
                      ex.completed
                        ? 'bg-emerald-950/20 border-emerald-500/40 text-slate-300'
                        : 'bg-[#070E1C] border-slate-800 hover:border-cyan-500/40'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div className={`w-6 h-6 rounded-lg border flex items-center justify-center ${
                        ex.completed ? 'bg-emerald-500 border-emerald-400 text-slate-950' : 'border-slate-700 bg-slate-900'
                      }`}>
                        {ex.completed && <Check className="w-4 h-4 stroke-[3]" />}
                      </div>
                      <div>
                        <div className={`font-bold text-sm ${ex.completed ? 'line-through text-slate-400' : 'text-white'}`}>
                          {ex.name}
                        </div>
                        <div className="text-[11px] text-slate-400">
                          Target: {ex.target} • {ex.sets} Sets × {ex.reps}
                        </div>
                      </div>
                    </div>

                    <div className="text-right">
                      <div className="text-xs font-black text-cyan-400">{ex.weight}</div>
                      <div className="text-[10px] text-slate-500">Rest {ex.rest}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Attendance & Streak Column */}
            <div className="space-y-6">
              <div className="bg-[#0A1426] p-6 rounded-3xl border border-slate-800 space-y-4">
                <div className="flex justify-between items-center">
                  <h4 className="font-bold text-sm text-white">This Week&apos;s Attendance</h4>
                  <span className="text-xs text-cyan-400 font-bold">Aug 2026</span>
                </div>

                <div className="space-y-2">
                  {attendanceHistory.map((att, i) => (
                    <div key={i} className="flex items-center justify-between text-xs py-2 border-b border-slate-800/60">
                      <div>
                        <span className="font-bold text-white">{att.day}</span>
                        <span className="text-slate-400 text-[10px] ml-2">{att.date}</span>
                      </div>
                      <span className={`text-[10px] font-bold px-2 py-0.5 rounded ${
                        att.status.includes('Present')
                          ? 'bg-emerald-950 text-emerald-400 border border-emerald-700/40'
                          : 'bg-slate-900 text-slate-500'
                      }`}>
                        {att.status}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Renewal Alert Card */}
              <div className="bg-[#121E36] p-5 rounded-2xl border border-cyan-500/30 space-y-2">
                <div className="flex items-center gap-2 text-cyan-400 font-bold text-xs">
                  <Bell className="w-4 h-4" />
                  <span>Trainer Notification</span>
                </div>
                <p className="text-xs text-slate-300">
                  Coach Alex has added 2 new Incline Bench variations to your routine for next week.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ============================================================= */}
      {/* VIEW C: PRO & MEGA LEADS CRM */}
      {/* ============================================================= */}
      {activeTab === 'leads' && (
        <div className="py-10 px-6 max-w-7xl mx-auto space-y-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <div className="inline-block text-blue-400 text-xs font-black uppercase tracking-widest">
                Gym Owner Growth System
              </div>
              <h2 className="text-3xl font-black uppercase italic text-white mt-1">
                Leads & Trial Enquiries CRM
              </h2>
            </div>

            {/* Filter Buttons */}
            <div className="flex flex-wrap gap-2">
              {(['All', 'New', 'Contacted', 'Trial Booked', 'Converted'] as const).map(f => (
                <button
                  key={f}
                  onClick={() => setLeadFilter(f)}
                  className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all ${
                    leadFilter === f
                      ? 'bg-blue-600 text-white'
                      : 'bg-[#0A1426] text-slate-400 hover:text-white border border-slate-800'
                  }`}
                >
                  {f}
                </button>
              ))}
            </div>
          </div>

          {/* Lead Table / Cards */}
          <div className="bg-[#0A1426] rounded-3xl border border-slate-800 overflow-hidden">
            <div className="p-4 border-b border-slate-800 flex justify-between items-center text-xs text-slate-400">
              <span>Showing <strong>{leads.filter(l => leadFilter === 'All' || l.status === leadFilter).length}</strong> inquiries</span>
              <span>Automated WhatsApp Reminders Active</span>
            </div>

            <div className="divide-y divide-slate-800/80">
              {leads.filter(l => leadFilter === 'All' || l.status === leadFilter).map(lead => (
                <div key={lead.id} className="p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:bg-[#0E1C38] transition-colors">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="font-bold text-white text-sm">{lead.name}</span>
                      <span className="text-[10px] bg-slate-800 text-slate-400 px-2 py-0.5 rounded">
                        via {lead.source}
                      </span>
                    </div>
                    <div className="text-xs text-slate-400 flex items-center gap-3">
                      <span>📞 {lead.phone}</span>
                      <span>🎯 {lead.fitnessGoal}</span>
                      <span>⏰ {lead.preferredSlot}</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <span className={`text-[10px] font-black px-2.5 py-1 rounded-full uppercase ${
                      lead.status === 'Trial Booked'
                        ? 'bg-amber-950 text-amber-400 border border-amber-500/40'
                        : lead.status === 'Converted'
                        ? 'bg-emerald-950 text-emerald-400 border border-emerald-500/40'
                        : lead.status === 'New'
                        ? 'bg-blue-950 text-blue-400 border border-blue-500/40 animate-pulse'
                        : 'bg-slate-800 text-slate-300'
                    }`}>
                      {lead.status}
                    </span>

                    <button
                      onClick={() => alert(`Simulated WhatsApp follow-up sent to ${lead.name} (${lead.phone})`)}
                      className="bg-emerald-600 hover:bg-emerald-500 text-white p-2 rounded-lg text-xs"
                      title="Send WhatsApp Follow-up"
                    >
                      <MessageCircle className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Automation Workflows Visual */}
          <div className="bg-[#0B1528] p-6 rounded-3xl border border-blue-500/30 space-y-4">
            <h4 className="font-bold text-sm text-cyan-400 uppercase tracking-wider">
              ⚡ Pro Automation Engine Active
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
              <div className="bg-[#060B14] p-4 rounded-xl border border-slate-800 space-y-1">
                <div className="text-emerald-400 font-bold">1. New Enquiry Received</div>
                <div className="text-slate-400">Instant WhatsApp with 1-Day Trial QR code sent within 30 seconds.</div>
              </div>
              <div className="bg-[#060B14] p-4 rounded-xl border border-slate-800 space-y-1">
                <div className="text-cyan-400 font-bold">2. Free Trial Reminder</div>
                <div className="text-slate-400">SMS reminder sent 2 hours before scheduled slot.</div>
              </div>
              <div className="bg-[#060B14] p-4 rounded-xl border border-slate-800 space-y-1">
                <div className="text-amber-400 font-bold">3. Post-Trial Conversion</div>
                <div className="text-slate-400">Special 10% discount on Quarterly Pro plan triggered after visit.</div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ============================================================= */}
      {/* VIEW D: MEGA ADVANCED ADMIN & ECOSYSTEM */}
      {/* ============================================================= */}
      {activeTab === 'admin' && (
        <div className="py-10 px-6 max-w-7xl mx-auto space-y-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-500 to-cyan-400 text-slate-950 text-[10px] font-black uppercase px-3 py-1 rounded-full shadow-lg">
                <span>MEGA EXPERIENCE</span> • Complete Gym Management
              </div>
              <h2 className="text-3xl font-black uppercase italic text-white mt-2">
                Executive Gym Owner Dashboard
              </h2>
            </div>

            {/* Role Switcher */}
            <div className="flex items-center bg-[#0A1426] p-1 rounded-xl border border-slate-800">
              {(['Owner', 'Admin', 'Trainer', 'Member'] as const).map(r => (
                <button
                  key={r}
                  onClick={() => setActiveRole(r)}
                  className={`px-3 py-1 rounded-lg text-xs font-bold transition-all ${
                    activeRole === r
                      ? 'bg-cyan-500 text-slate-950 font-black'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  {r}
                </button>
              ))}
            </div>
          </div>

          {/* Executive Metrics Overview */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            <div className="bg-[#0A1426] p-5 rounded-2xl border border-slate-800">
              <div className="text-xs text-slate-400">Total Active Members</div>
              <div className="text-3xl font-black text-white mt-1">1,118</div>
              <div className="text-[10px] text-emerald-400">↑ 14% this quarter</div>
            </div>

            <div className="bg-[#0A1426] p-5 rounded-2xl border border-slate-800">
              <div className="text-xs text-slate-400">Monthly Revenue</div>
              <div className="text-3xl font-black text-cyan-400 mt-1">₹8.42 Lakhs</div>
              <div className="text-[10px] text-cyan-300">Target: ₹8.00 Lakhs (Achieved)</div>
            </div>

            <div className="bg-[#0A1426] p-5 rounded-2xl border border-slate-800">
              <div className="text-xs text-slate-400">Today&apos;s Check-ins</div>
              <div className="text-3xl font-black text-amber-400 mt-1">184 Athletes</div>
              <div className="text-[10px] text-slate-400">Peak hour: 6:30 PM</div>
            </div>

            <div className="bg-[#0A1426] p-5 rounded-2xl border border-slate-800">
              <div className="text-xs text-slate-400">Trial Conversion Rate</div>
              <div className="text-3xl font-black text-emerald-400 mt-1">68.4%</div>
              <div className="text-[10px] text-emerald-400">48 trials → 33 joins</div>
            </div>
          </div>

          {/* Mega Nutrition & Diet Engine */}
          <div className="bg-[#0A1426] p-6 rounded-3xl border border-slate-800 space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800 pb-4">
              <div>
                <span className="text-cyan-400 text-xs font-black uppercase">Mega Nutrition Engine</span>
                <h3 className="text-xl font-black text-white uppercase italic">Macronutrient Meal Plan Generator</h3>
              </div>
              <div className="flex gap-2">
                <button
                  onClick={() => alert('Meal plan downloaded as PDF (Simulated)')}
                  className="bg-slate-800 hover:bg-slate-700 text-white px-3.5 py-1.5 rounded-lg text-xs font-bold"
                >
                  Download PDF
                </button>
              </div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 bg-[#060B14] p-4 rounded-2xl border border-slate-800 text-center">
              <div>
                <div className="text-xs text-slate-400">Daily Calories</div>
                <div className="text-xl font-black text-white">2,450 kcal</div>
              </div>
              <div>
                <div className="text-xs text-slate-400">Protein Target</div>
                <div className="text-xl font-black text-cyan-400">180g (High)</div>
              </div>
              <div>
                <div className="text-xs text-slate-400">Carbohydrates</div>
                <div className="text-xl font-black text-amber-400">260g (Clean)</div>
              </div>
              <div>
                <div className="text-xs text-slate-400">Healthy Fats</div>
                <div className="text-xl font-black text-emerald-400">75g</div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {NUTRITION_MEALS.map((meal, idx) => (
                <div key={idx} className="bg-[#070E1C] p-4 rounded-2xl border border-slate-800 space-y-2">
                  <div className="flex justify-between items-center text-xs">
                    <span className="font-bold text-white">{meal.name}</span>
                    <span className="text-cyan-400 font-black">{meal.calories} kcal</span>
                  </div>
                  <ul className="text-xs text-slate-400 space-y-1">
                    {meal.items.map((it, i) => (
                      <li key={i} className="flex items-center gap-1.5">
                        <span className="w-1 h-1 rounded-full bg-cyan-400"></span>
                        <span>{it}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* ============================================================= */}
      {/* VIEW E: PACKAGE COMPARISON MATRIX */}
      {/* ============================================================= */}
      {activeTab === 'compare' && (
        <div className="py-12 px-6 max-w-7xl mx-auto space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-cyan-400 font-black text-xs uppercase tracking-widest">Upscale Nova Solutions</span>
            <h2 className="text-3xl sm:text-4xl font-black uppercase italic text-white">
              Choose the Right Gym Website Package
            </h2>
            <p className="text-slate-400 text-xs sm:text-sm">
              From high-converting landing websites to full-scale digital gym automation ecosystems.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* BASE */}
            <div className="bg-[#0A1426] p-8 rounded-3xl border border-slate-800 space-y-6 flex flex-col justify-between">
              <div className="space-y-4">
                <div>
                  <div className="text-xs font-bold uppercase text-slate-400">Base Package</div>
                  <h3 className="text-2xl font-black uppercase italic text-white">Professional Gym Website</h3>
                  <div className="text-3xl font-black text-white mt-2">₹12,999</div>
                </div>

                <ul className="space-y-2.5 text-xs text-slate-300">
                  <li className="flex items-center gap-2">✓ Modern Responsive Gym Website</li>
                  <li className="flex items-center gap-2">✓ Programs & Trainer Profiles</li>
                  <li className="flex items-center gap-2">✓ Membership Plans Table</li>
                  <li className="flex items-center gap-2">✓ Free Trial Lead Capture Form</li>
                  <li className="flex items-center gap-2">✓ WhatsApp & Call CTA Buttons</li>
                  <li className="flex items-center gap-2 text-slate-500">✕ Member Login & QR Pass</li>
                  <li className="flex items-center gap-2 text-slate-500">✕ Lead Automation & CRM</li>
                  <li className="flex items-center gap-2 text-slate-500">✕ AI Fitness Coach</li>
                </ul>
              </div>

              <button
                onClick={() => onPlanChange?.('Base')}
                className="w-full bg-slate-800 hover:bg-slate-700 text-white font-bold py-3 rounded-xl text-xs"
              >
                View Base Demo
              </button>
            </div>

            {/* PRO */}
            <div className="bg-[#0B1528] p-8 rounded-3xl border-2 border-blue-500 space-y-6 flex flex-col justify-between shadow-xl shadow-blue-500/20">
              <div className="space-y-4">
                <div>
                  <span className="text-[10px] font-black uppercase bg-blue-600 text-white px-2.5 py-0.5 rounded-full">
                    High Conversion
                  </span>
                  <h3 className="text-2xl font-black uppercase italic text-white mt-1">Website + Member Management</h3>
                  <div className="text-3xl font-black text-cyan-400 mt-2">₹16,999</div>
                </div>

                <ul className="space-y-2.5 text-xs text-slate-300">
                  <li className="flex items-center gap-2">✓ All Base Package Features</li>
                  <li className="flex items-center gap-2">✓ Member Portal & Digital QR Pass</li>
                  <li className="flex items-center gap-2">✓ Attendance & Streak Tracking</li>
                  <li className="flex items-center gap-2">✓ Interactive Workout Tracker</li>
                  <li className="flex items-center gap-2">✓ Lead Management CRM Dashboard</li>
                  <li className="flex items-center gap-2">✓ Simulated Online UPI Payment UI</li>
                  <li className="flex items-center gap-2 text-slate-500">✕ AI Fitness Coach</li>
                  <li className="flex items-center gap-2 text-slate-500">✕ Advanced Owner Analytics</li>
                </ul>
              </div>

              <button
                onClick={() => onPlanChange?.('Pro')}
                className="w-full bg-blue-600 hover:bg-blue-500 text-white font-bold py-3 rounded-xl text-xs"
              >
                View Pro Demo
              </button>
            </div>

            {/* MEGA */}
            <div className="bg-gradient-to-b from-[#0E1E3A] to-[#0A1426] p-8 rounded-3xl border-2 border-cyan-400 space-y-6 flex flex-col justify-between shadow-2xl shadow-cyan-400/20 relative">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-amber-400 to-cyan-400 text-slate-950 font-black text-[10px] uppercase px-4 py-1 rounded-full">
                Most Popular / Best Value
              </div>

              <div className="space-y-4">
                <div>
                  <div className="text-xs font-bold uppercase text-amber-400">Complete Ecosystem</div>
                  <h3 className="text-2xl font-black uppercase italic text-white">Full Gym Automation & AI</h3>
                  <div className="text-3xl font-black text-white mt-2">₹24,999</div>
                </div>

                <ul className="space-y-2.5 text-xs text-slate-300">
                  <li className="flex items-center gap-2">✓ Everything in Base & Pro Included</li>
                  <li className="flex items-center gap-2">✓ Executive Owner BI Analytics</li>
                  <li className="flex items-center gap-2">✓ Multi-Role Access (Owner, Admin, PT)</li>
                  <li className="flex items-center gap-2">✓ Diet & Nutrition Meal Engine</li>
                  <li className="flex items-center gap-2">✓ Automated WhatsApp Workflow Center</li>
                  <li className="flex items-center gap-2">✓ IronFit AI Fitness Coach Assistant</li>
                  <li className="flex items-center gap-2">✓ Referral & Free Month Reward System</li>
                </ul>
              </div>

              <button
                onClick={() => onPlanChange?.('Mega')}
                className="w-full bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-600 text-slate-950 font-black py-3 rounded-xl text-xs shadow-lg shadow-cyan-400/30"
              >
                View Mega Demo
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ------------------------------------------------------------- */}
      {/* 4. UPSELL BANNER & AGENCY FINAL CTA */}
      {/* ------------------------------------------------------------- */}
      <section className="mt-16 py-16 px-6 bg-gradient-to-b from-[#070D18] to-[#04070D] border-t border-slate-800 text-center">
        <div className="max-w-3xl mx-auto space-y-6">
          <div className="inline-flex items-center gap-2 bg-[#0D1A30] border border-cyan-500/40 text-cyan-300 px-4 py-1 rounded-full text-xs font-bold">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span>Upscale Nova • Digital Business Solutions</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black uppercase italic text-white tracking-tight leading-tight">
            Turn Your Gym Into a <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400">
              Digital Fitness Business.
            </span>
          </h2>

          <p className="text-slate-300 text-xs sm:text-sm leading-relaxed max-w-xl mx-auto">
            From your first enquiry to membership renewal, Upscale Nova builds digital systems that help your gym attract, manage and retain members effortlessly.
          </p>

          <div className="flex flex-wrap justify-center gap-4 pt-2">
            <button
              onClick={() => setIsTrialModalOpen(true)}
              className="bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-slate-950 font-black uppercase italic px-8 py-3.5 rounded-xl text-xs shadow-xl shadow-cyan-500/25"
            >
              Book Free Consultation
            </button>

            <a
              href="https://wa.me/919876543210?text=Hi%20Upscale%20Nova,%20I%20want%20to%20develop%20a%20website%20for%20my%20gym"
              target="_blank"
              rel="noreferrer"
              className="bg-[#0A1426] hover:bg-[#12203A] text-white border border-slate-700 hover:border-emerald-400 px-6 py-3.5 rounded-xl text-xs font-bold flex items-center gap-2"
            >
              <MessageCircle className="w-4 h-4 text-emerald-400" />
              <span>WhatsApp Upscale Nova</span>
            </a>
          </div>

          <footer className="pt-12 text-[11px] text-slate-500 border-t border-slate-900 mt-12">
            <div className="font-bold text-slate-400">Upscale Nova — Digital Business Solutions</div>
            <div>© 2026 Upscale Nova. All Rights Reserved.</div>
          </footer>
        </div>
      </section>

      {/* ------------------------------------------------------------- */}
      {/* 5. FLOATING AI FITNESS COACH (MEGA ONLY) */}
      {/* ------------------------------------------------------------- */}
      {isMega && (
        <>
          {!isAiOpen ? (
            <button
              onClick={() => setIsAiOpen(true)}
              className="fixed bottom-6 right-6 z-50 bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-600 text-slate-950 font-black p-4 rounded-full shadow-2xl shadow-cyan-400/50 flex items-center gap-2.5 animate-bounce hover:scale-105 transition-all"
            >
              <Bot className="w-6 h-6 stroke-[2.5]" />
              <span className="hidden sm:inline text-xs">IronFit AI Coach</span>
              <span className="bg-slate-950 text-cyan-300 text-[9px] px-2 py-0.5 rounded-full font-bold">MEGA</span>
            </button>
          ) : (
            <div className="fixed bottom-6 right-6 z-50 w-[90vw] sm:w-[380px] bg-[#0A1426] border-2 border-cyan-400 rounded-3xl shadow-2xl overflow-hidden flex flex-col animate-slideUp">
              {/* Header */}
              <div className="bg-[#060B14] p-4 border-b border-slate-800 flex justify-between items-center">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-full bg-cyan-400 text-slate-950 flex items-center justify-center font-black">
                    <Bot className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-black text-sm text-white flex items-center gap-1.5">
                      IronFit AI Coach
                      <span className="text-[9px] bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 px-1.5 py-0.2 rounded">
                        AI Demo
                      </span>
                    </div>
                    <div className="text-[10px] text-emerald-400">Online • Ready to coach</div>
                  </div>
                </div>
                <button
                  onClick={() => setIsAiOpen(false)}
                  className="text-slate-400 hover:text-white p-1"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Chat Messages */}
              <div className="p-4 h-72 overflow-y-auto space-y-3 text-xs custom-scrollbar bg-[#070D18]">
                {aiChatMessages.map((msg, i) => (
                  <div
                    key={i}
                    className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div
                      className={`max-w-[80%] p-3 rounded-2xl ${
                        msg.sender === 'user'
                          ? 'bg-blue-600 text-white rounded-br-none'
                          : 'bg-[#0F1C36] text-slate-200 border border-cyan-500/30 rounded-bl-none'
                      }`}
                    >
                      <p className="leading-relaxed">{msg.text}</p>
                      <span className="text-[9px] opacity-60 block text-right mt-1">{msg.time}</span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Suggested Quick Chips */}
              <div className="p-2.5 bg-[#060B14] border-t border-slate-800 flex gap-1.5 overflow-x-auto custom-scrollbar text-[10px]">
                <button
                  onClick={() => handleAiSend('What should I train today?')}
                  className="bg-[#0A1426] hover:bg-slate-800 text-cyan-300 px-2.5 py-1 rounded-full border border-slate-700 whitespace-nowrap"
                >
                  Today&apos;s Workout?
                </button>
                <button
                  onClick={() => handleAiSend('How can I improve my protein intake?')}
                  className="bg-[#0A1426] hover:bg-slate-800 text-cyan-300 px-2.5 py-1 rounded-full border border-slate-700 whitespace-nowrap"
                >
                  Protein goals?
                </button>
                <button
                  onClick={() => handleAiSend('Show my progress.')}
                  className="bg-[#0A1426] hover:bg-slate-800 text-cyan-300 px-2.5 py-1 rounded-full border border-slate-700 whitespace-nowrap"
                >
                  My progress
                </button>
              </div>

              {/* Input Area */}
              <form
                onSubmit={e => {
                  e.preventDefault();
                  handleAiSend();
                }}
                className="p-3 bg-[#060B14] border-t border-slate-800 flex gap-2"
              >
                <input
                  type="text"
                  placeholder="Ask Coach about diet, sets or recovery..."
                  value={aiInputText}
                  onChange={e => setAiInputText(e.target.value)}
                  className="flex-1 bg-[#0A1426] border border-slate-800 rounded-xl px-3 py-2 text-xs text-white placeholder:text-slate-500 outline-hidden focus:border-cyan-400"
                />
                <button
                  type="submit"
                  className="bg-cyan-500 hover:bg-cyan-400 text-slate-950 p-2 rounded-xl"
                >
                  <Send className="w-4 h-4" />
                </button>
              </form>
            </div>
          )}
        </>
      )}

      {/* ------------------------------------------------------------- */}
      {/* 6. MODALS (QR PASS, PAYMENT, TRIAL) */}
      {/* ------------------------------------------------------------- */}

      {/* QR PASS MODAL */}
      {isQrModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-[#0A1426] border-2 border-cyan-400 p-8 rounded-3xl max-w-sm w-full text-center space-y-6 shadow-2xl">
            <div className="space-y-1">
              <div className="text-cyan-400 font-bold text-xs uppercase tracking-widest">IronFit Digital Pass</div>
              <h3 className="text-2xl font-black uppercase italic text-white">Alex Vance</h3>
              <p className="text-xs text-slate-400">Membership #IF-88492 • Active Annual</p>
            </div>

            <div className="bg-white p-6 rounded-2xl inline-block mx-auto shadow-xl">
              <div className="w-44 h-44 bg-slate-950 rounded-xl p-3 flex flex-col items-center justify-center text-white text-center">
                <QrCode className="w-28 h-28 text-cyan-400 mb-1" />
                <span className="text-[10px] font-mono text-slate-400 tracking-widest">#IF-88492-2026</span>
              </div>
            </div>

            <div className="text-xs text-slate-300 bg-[#060B14] p-3 rounded-xl border border-slate-800">
              ⚡ Flash this at the turnstile scanner for instant 24/7 entry.
            </div>

            <button
              onClick={() => setIsQrModalOpen(false)}
              className="w-full bg-slate-800 hover:bg-slate-700 text-white font-bold py-3 rounded-xl text-xs"
            >
              Close Pass
            </button>
          </div>
        </div>
      )}

      {/* PAYMENT DEMO MODAL */}
      {isPaymentModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-[#0A1426] border border-cyan-500/40 p-8 rounded-3xl max-w-md w-full space-y-6 shadow-2xl">
            <div className="flex justify-between items-start">
              <div>
                <span className="text-cyan-400 text-xs font-bold uppercase">Online Payment Demo</span>
                <h3 className="text-2xl font-black text-white uppercase italic">{selectedPlanForPayment.name}</h3>
              </div>
              <button onClick={() => setIsPaymentModalOpen(false)} className="text-slate-400 hover:text-white">
                <X className="w-5 h-5" />
              </button>
            </div>

            {paymentSuccess ? (
              <div className="text-center py-6 space-y-3">
                <div className="w-14 h-14 bg-emerald-500 text-slate-950 rounded-full flex items-center justify-center mx-auto">
                  <Check className="w-8 h-8 stroke-[3]" />
                </div>
                <h4 className="text-xl font-bold text-white">Payment of ₹{selectedPlanForPayment.price} Successful!</h4>
                <p className="text-xs text-slate-300">
                  Your IronFit pass has been generated and sent via WhatsApp to your registered number.
                </p>
                <button
                  onClick={() => {
                    setPaymentSuccess(false);
                    setIsPaymentModalOpen(false);
                  }}
                  className="bg-cyan-500 text-slate-950 font-bold px-6 py-2.5 rounded-xl text-xs"
                >
                  Return to Dashboard
                </button>
              </div>
            ) : (
              <div className="space-y-4 text-xs">
                <div className="bg-[#060B14] p-4 rounded-xl border border-slate-800 flex justify-between items-center">
                  <span className="text-slate-300">Plan Amount:</span>
                  <span className="text-xl font-black text-cyan-400">₹{selectedPlanForPayment.price.toLocaleString()}</span>
                </div>

                <div className="space-y-2">
                  <label className="text-slate-300 font-bold">Select Payment Method</label>
                  <div className="grid grid-cols-3 gap-2">
                    {(['UPI', 'Card', 'NetBanking'] as const).map(m => (
                      <button
                        key={m}
                        onClick={() => setPaymentMethod(m)}
                        className={`p-3 rounded-xl border font-bold text-center transition-all ${
                          paymentMethod === m
                            ? 'bg-blue-600 text-white border-cyan-400'
                            : 'bg-[#060B14] text-slate-400 border-slate-800'
                        }`}
                      >
                        {m}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="bg-amber-950/40 p-3 rounded-xl border border-amber-500/30 text-[11px] text-amber-200">
                  ℹ️ Simulated payment gateway for Upscale Nova client demo.
                </div>

                <button
                  onClick={() => setPaymentSuccess(true)}
                  className="w-full bg-gradient-to-r from-blue-600 to-cyan-500 text-slate-950 font-black py-3.5 rounded-xl uppercase italic shadow-lg shadow-cyan-500/20"
                >
                  Pay ₹{selectedPlanForPayment.price.toLocaleString()} Now
                </button>
              </div>
            )}
          </div>
        </div>
      )}

      {/* FREE TRIAL MODAL */}
      {isTrialModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-[#0A1426] border border-cyan-500/40 p-8 rounded-3xl max-w-md w-full space-y-6 shadow-2xl">
            <div className="flex justify-between items-start">
              <div>
                <span className="text-cyan-400 text-xs font-bold uppercase">1-Day VIP Pass</span>
                <h3 className="text-2xl font-black text-white uppercase italic">Book Your Free Trial</h3>
              </div>
              <button onClick={() => setIsTrialModalOpen(false)} className="text-slate-400 hover:text-white">
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-4 text-xs">
              <input
                type="text"
                placeholder="Your Full Name"
                className="w-full bg-[#060B14] border border-slate-800 rounded-xl p-3 text-white"
              />
              <input
                type="tel"
                placeholder="WhatsApp Phone Number"
                className="w-full bg-[#060B14] border border-slate-800 rounded-xl p-3 text-white"
              />
              <button
                onClick={() => {
                  alert('Free trial pass claimed! Confirmation sent.');
                  setIsTrialModalOpen(false);
                }}
                className="w-full bg-gradient-to-r from-blue-600 to-cyan-500 text-slate-950 font-black py-3.5 rounded-xl uppercase italic"
              >
                Claim Free Pass Now
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
