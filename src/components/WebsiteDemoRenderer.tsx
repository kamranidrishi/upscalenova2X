import React, { useState, useEffect } from 'react';
import { DemoItem, PlanType } from '../data/demos';
import { CafeDemo } from './CafeDemo';
import { RestaurantDemo } from './RestaurantDemo';
import { RealEstateDemo } from './RealEstateDemo';
import { GymDemo } from './GymDemo';
import { 
  Coffee, Utensils, Dumbbell, Scale, Sparkles, PieChart, Zap, Wrench,
  Menu, X, MapPin, Phone, Clock, Star, ChevronRight, Check, Plus, Minus,
  ShoppingBag, Calendar, User, Search, Bell, CreditCard, ArrowRight,
  TrendingUp, Activity, CheckCircle, Shield, FileText, Briefcase, Eye,
  Play, MessageSquare, Send, RefreshCw, Layers, Award, Users, Share2,
  DollarSign, BarChart3, AlertCircle, Smartphone, Lock, ChevronDown, CheckSquare,
  Instagram, Facebook, Flame, Bot, Heart, ThumbsUp, ShoppingCart, Filter,
  Sparkle, CornerDownRight, CheckCircle2, MessageCircle
} from 'lucide-react';

interface RendererProps {
  demo: DemoItem;
  device: 'desktop' | 'tablet' | 'mobile';
  onPlanChange?: (plan: PlanType) => void;
}

export const WebsiteDemoRenderer: React.FC<RendererProps> = ({ demo, device, onPlanChange }) => {
  const isMobile = device === 'mobile';
  const isTablet = device === 'tablet';

  switch (demo.businessType) {
    case 'cafe':
      return <CafeDemo demo={demo} isMobile={isMobile} isTablet={isTablet} onPlanChange={onPlanChange} />;
    case 'restaurant':
      return <RestaurantDemo demo={demo} isMobile={isMobile} isTablet={isTablet} onPlanChange={onPlanChange} />;
    case 'real-estate':
      return <RealEstateDemo demo={demo} isMobile={isMobile} isTablet={isTablet} onPlanChange={onPlanChange} />;
    case 'gym':
      return <GymDemo demo={demo} isMobile={isMobile} isTablet={isTablet} onPlanChange={onPlanChange} />;
    case 'law-firm':
      return <LawFirmDemo demo={demo} isMobile={isMobile} isTablet={isTablet} onPlanChange={onPlanChange} />;
    case 'marketing':
      return <MarketingDemo demo={demo} isMobile={isMobile} isTablet={isTablet} onPlanChange={onPlanChange} />;
    case 'finance':
      return <FinanceDemo demo={demo} isMobile={isMobile} isTablet={isTablet} onPlanChange={onPlanChange} />;
    case 'ai':
      return <AiSaasDemo demo={demo} isMobile={isMobile} isTablet={isTablet} onPlanChange={onPlanChange} />;
    case 'form':
      return <ServiceDemo demo={demo} isMobile={isMobile} isTablet={isTablet} onPlanChange={onPlanChange} />;
    default:
      return <CafeDemo demo={demo} isMobile={isMobile} isTablet={isTablet} onPlanChange={onPlanChange} />;
  }
};

// ============================================================================
// 4. LAW FIRM DEMO (Sterling & Associates)
// ============================================================================
const LawFirmDemo: React.FC<{ demo: DemoItem; isMobile: boolean; isTablet: boolean; onPlanChange?: (plan: PlanType) => void }> = ({ demo, isMobile }) => {
  const plan = demo.plan;
  const isBase = plan === 'Base';
  const isMega = plan === 'Mega';

  const [consultModal, setConsultModal] = useState(false);

  return (
    <div className="w-full h-full bg-[#0B132B] text-slate-200 overflow-y-auto overflow-x-hidden font-serif custom-scrollbar">
      {/* Topbar */}
      <div className="bg-[#070B19] text-slate-400 text-[11px] px-6 py-2.5 flex justify-between items-center border-b border-slate-800">
        <div className="flex gap-4">
          <span className="flex items-center gap-1.5"><Phone className="w-3 h-3 text-amber-500" /> +91 (22) 8000-LEGAL</span>
          <span className="hidden sm:inline-flex items-center gap-1.5"><MapPin className="w-3 h-3 text-amber-500" /> High Court Chambers, Mumbai</span>
        </div>
        <div className="text-amber-400 font-sans text-[10px] font-bold uppercase tracking-wider">Confidential Legal Consultation</div>
      </div>

      {/* Header */}
      <header className="px-6 py-5 flex items-center justify-between border-b border-slate-800 sticky top-0 z-20 bg-[#0B132B]/95 backdrop-blur-md font-sans">
        <div className="font-serif text-2xl font-bold text-white flex items-center gap-3">
          <Scale className="w-7 h-7 text-amber-500" />
          Sterling & Associates
        </div>
        {!isMobile && (
          <nav className="flex items-center gap-6 text-xs font-bold text-slate-300 uppercase tracking-wider">
            <a href="#practice" className="hover:text-amber-400">Practice Areas</a>
            {!isBase && <a href="#attorneys" className="hover:text-amber-400">Attorneys</a>}
            {!isBase && <a href="#results" className="hover:text-amber-400">Case Results</a>}
            <a href="#contact" className="hover:text-amber-400">Contact</a>
          </nav>
        )}
        <button 
          onClick={() => setConsultModal(true)}
          className="bg-amber-600 hover:bg-amber-500 text-slate-950 font-bold px-4 py-2 rounded font-sans text-xs uppercase tracking-wider transition-colors"
        >
          Book Consultation
        </button>
      </header>

      {/* Hero */}
      <div className="relative min-h-[440px] flex items-center px-6 md:px-16 py-16 overflow-hidden">
        <div className="absolute inset-0">
          <img src="https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&w=1400&q=80" alt="Law" className="w-full h-full object-cover opacity-20" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0B132B] via-[#0B132B]/90 to-transparent"></div>
        </div>
        <div className="relative z-10 max-w-2xl space-y-6">
          <div className="w-12 h-1 bg-amber-500"></div>
          <h1 className="text-3xl sm:text-5xl font-bold text-white leading-tight">
            Relentless Advocacy. <br/>Strategic Counsel.
          </h1>
          <p className="text-slate-300 text-sm font-sans leading-relaxed">
            {demo.tagline || 'Representing corporate enterprises and individuals across high-stakes commercial disputes, white-collar defense, and cross-border transactions.'}
          </p>
          <div className="flex gap-4 font-sans pt-2">
            <button 
              onClick={() => setConsultModal(true)}
              className="bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold px-6 py-3.5 rounded text-xs uppercase tracking-wider"
            >
              Request Case Review
            </button>
          </div>
        </div>
      </div>

      {/* Practice Areas */}
      <section id="practice" className="py-16 px-6 max-w-6xl mx-auto font-sans">
        <h2 className="text-2xl sm:text-3xl font-serif text-center font-bold text-white mb-12">Core Practice Specialties</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { icon: Briefcase, title: "Corporate Litigation", desc: "Shareholder disputes, joint venture breaches, and corporate governance litigation." },
            { icon: Shield, title: "White-Collar Defense", desc: "Rigorous defense against financial regulatory investigations, ED & CBI matters." },
            { icon: FileText, title: "Intellectual Property & Tech", desc: "Patent infringements, software licensing, and cross-border trade secrets protection." }
          ].map((item, i) => (
            <div key={i} className="bg-slate-900/60 border border-slate-800 p-6 rounded-xl hover:border-amber-500/50 transition-colors flex flex-col justify-between">
              <div>
                <item.icon className="w-8 h-8 text-amber-500 mb-4" />
                <h3 className="font-bold text-lg text-white mb-2">{item.title}</h3>
                <p className="text-xs text-slate-400 leading-relaxed mb-4">{item.desc}</p>
              </div>
              <span className="text-amber-400 text-xs font-bold flex items-center gap-1">
                Consult Specialized Partner <ChevronRight className="w-3.5 h-3.5" />
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Mega: Client Case Portal Concept */}
      {isMega && (
        <section className="py-12 bg-slate-950 px-6 border-t border-slate-800 font-sans">
          <div className="max-w-5xl mx-auto space-y-4">
            <span className="bg-amber-500 text-slate-950 text-[10px] font-black uppercase px-2 py-0.5 rounded">MEGA Plan Module</span>
            <div className="bg-[#0B132B] p-6 rounded-2xl border border-amber-500/30 flex flex-col md:flex-row justify-between items-center gap-6">
              <div>
                <h3 className="text-lg font-bold text-white">Client Portal & Case Milestone Tracker</h3>
                <p className="text-xs text-slate-400">Case #NY-2026-881 • Status: Discovery Phase • Next Hearing: 28th Aug 2026</p>
              </div>
              <button onClick={() => setConsultModal(true)} className="bg-slate-800 text-amber-400 border border-amber-500/40 px-4 py-2 rounded text-xs font-bold">
                View Secured Documents
              </button>
            </div>
          </div>
        </section>
      )}

      {/* Consultation Modal */}
      {consultModal && (
        <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4 font-sans">
          <div className="bg-slate-900 border border-amber-500/40 p-8 rounded-2xl max-w-md w-full space-y-4 text-left">
            <div className="flex justify-between items-center">
              <h3 className="font-serif text-xl font-bold text-white">Confidential Consultation</h3>
              <button onClick={() => setConsultModal(false)} className="text-slate-400 hover:text-white"><X className="w-4 h-4" /></button>
            </div>
            <p className="text-xs text-slate-400">All submissions are protected by attorney-client privilege.</p>
            <form onSubmit={(e) => { e.preventDefault(); setConsultModal(false); }} className="space-y-3 text-xs">
              <input type="text" placeholder="Full Name" required className="w-full bg-slate-800 border border-slate-700 rounded p-2.5 text-white" />
              <input type="tel" placeholder="Contact Phone" required className="w-full bg-slate-800 border border-slate-700 rounded p-2.5 text-white" />
              <textarea placeholder="Brief summary of legal matter..." rows={3} className="w-full bg-slate-800 border border-slate-700 rounded p-2.5 text-white"></textarea>
              <button type="submit" className="w-full bg-amber-500 text-slate-950 font-bold py-2.5 rounded text-xs uppercase tracking-wider">
                Submit Consultation Request
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

// ============================================================================
// 5. MARKETING AGENCY DEMO (Nova Digital)
// ============================================================================
const MarketingDemo: React.FC<{ demo: DemoItem; isMobile: boolean; isTablet: boolean; onPlanChange?: (plan: PlanType) => void }> = ({ demo, isMobile }) => {
  const plan = demo.plan;
  const isBase = plan === 'Base';
  const isMega = plan === 'Mega';

  const [activeFilter, setActiveFilter] = useState('All');

  const PROJECTS = [
    { title: "NeoBank Fintech Launch", cat: "Paid Ads", metric: "+420% User Acquisition", img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&q=80" },
    { title: "Lumina Luxury Apparel", cat: "Branding", metric: "3.8x ROAS Scale", img: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=600&q=80" },
    { title: "Apex SaaS Platform", cat: "Web & UX", metric: "78% Conversion Lift", img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&q=80" }
  ];

  return (
    <div className="w-full h-full bg-slate-950 text-slate-100 overflow-y-auto overflow-x-hidden font-sans custom-scrollbar">
      {/* Header */}
      <header className="px-6 py-5 flex items-center justify-between border-b border-slate-800 sticky top-0 z-20 bg-slate-950/95 backdrop-blur-md">
        <div className="font-black text-2xl tracking-tighter flex items-center gap-2 text-white">
          <div className="w-4 h-4 bg-indigo-500 rounded-sm rotate-45"></div>
          Nova Digital
        </div>
        {!isMobile && (
          <nav className="flex items-center gap-8 text-xs font-bold uppercase tracking-wider text-slate-400">
            <a href="#work" className="hover:text-indigo-400">Work</a>
            {!isBase && <a href="#services" className="hover:text-indigo-400">Services</a>}
            <a href="#contact" className="hover:text-indigo-400">Contact</a>
          </nav>
        )}
        <button className="bg-indigo-600 hover:bg-indigo-500 text-white font-bold px-4 py-2 rounded-full text-xs transition-colors">
          Start Project
        </button>
      </header>

      {/* Hero */}
      <div className="px-6 md:px-16 py-20 max-w-6xl mx-auto space-y-6">
        <div className="inline-flex items-center gap-2 bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-bold px-3 py-1 rounded-full">
          <Sparkles className="w-3.5 h-3.5" /> High-Growth Performance Marketing
        </div>
        <h1 className="text-4xl sm:text-6xl font-black tracking-tight leading-[1.05]">
          We scale digital brands into <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">market leaders.</span>
        </h1>
        <p className="text-slate-400 text-base max-w-xl">
          {demo.tagline || 'Data-driven performance campaigns, high-converting creative engines, and custom digital experiences.'}
        </p>
      </div>

      {/* Portfolio */}
      <section id="work" className="py-12 px-6 max-w-6xl mx-auto space-y-8">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-bold">Featured Case Studies</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {PROJECTS.map((proj, i) => (
            <div key={i} className="bg-slate-900 rounded-2xl overflow-hidden border border-slate-800 group hover:border-indigo-500 transition-colors">
              <div className="aspect-video overflow-hidden">
                <img src={proj.img} alt={proj.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
              </div>
              <div className="p-5 space-y-2">
                <span className="text-[10px] font-bold uppercase text-indigo-400">{proj.cat}</span>
                <h3 className="font-bold text-base text-white">{proj.title}</h3>
                <div className="text-emerald-400 text-xs font-black">{proj.metric}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Mega: Live Ad Analytics Dashboard Preview */}
      {isMega && (
        <section className="py-12 bg-slate-900/60 px-6 border-t border-slate-800">
          <div className="max-w-5xl mx-auto space-y-4">
            <span className="bg-indigo-600 text-white text-[10px] font-black uppercase px-2 py-0.5 rounded">MEGA Plan Module</span>
            <div className="bg-slate-950 p-6 rounded-2xl border border-indigo-500/30 flex flex-col md:flex-row justify-between items-center gap-6">
              <div>
                <h3 className="text-lg font-bold text-white">Client ROAS & Ad Spend Telemetry</h3>
                <p className="text-xs text-slate-400">Total Spend: ₹2,40,000 • Blended ROAS: 4.8x • Leads Generated: 1,420</p>
              </div>
              <button className="bg-indigo-600 text-white px-4 py-2 rounded-xl text-xs font-bold">
                View Live Attribution Matrix
              </button>
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

// ============================================================================
// 6. FINANCE / FINTECH DEMO (FinFlow Capital)
// ============================================================================
const FinanceDemo: React.FC<{ demo: DemoItem; isMobile: boolean; isTablet: boolean; onPlanChange?: (plan: PlanType) => void }> = ({ demo, isMobile }) => {
  const plan = demo.plan;
  const isBase = plan === 'Base';
  const isMega = plan === 'Mega';

  const [activeAccount, setActiveAccount] = useState('Business Checking');
  const [isSendModal, setIsSendModal] = useState(false);

  return (
    <div className="w-full h-full bg-slate-950 text-slate-100 flex font-sans overflow-hidden">
      {/* Sidebar */}
      {!isMobile && (
        <div className="w-56 bg-slate-900 border-r border-slate-800 p-4 space-y-6 flex flex-col justify-between shrink-0">
          <div className="space-y-6">
            <div className="font-bold text-lg text-blue-400 flex items-center gap-2">
              <PieChart className="w-5 h-5" /> FinFlow Capital
            </div>
            <nav className="space-y-1 text-xs">
              <div className="bg-blue-600/20 text-blue-400 font-bold p-2.5 rounded-xl">Dashboard</div>
              <div className="text-slate-400 hover:text-white p-2.5 rounded-xl cursor-pointer">Transactions</div>
              <div className="text-slate-400 hover:text-white p-2.5 rounded-xl cursor-pointer">Accounts & Cards</div>
              {!isBase && <div className="text-slate-400 hover:text-white p-2.5 rounded-xl cursor-pointer">Analytics</div>}
            </nav>
          </div>
          <div className="text-[10px] text-slate-500">FinFlow v2.4 Enterprise</div>
        </div>
      )}

      {/* Main Content */}
      <div className="flex-1 flex flex-col h-full overflow-y-auto custom-scrollbar p-6 space-y-6">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold text-white">Financial Dashboard</h1>
            <p className="text-xs text-slate-400">Account: {activeAccount}</p>
          </div>
          <button 
            onClick={() => setIsSendModal(true)}
            className="bg-blue-600 hover:bg-blue-500 text-white font-bold px-4 py-2 rounded-xl text-xs flex items-center gap-2"
          >
            <Send className="w-3.5 h-3.5" /> Transfer Funds
          </button>
        </div>

        {/* Balance Card */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-blue-600 p-6 rounded-3xl text-white md:col-span-2 relative overflow-hidden">
            <div className="text-xs font-medium text-blue-100">Total Net Worth</div>
            <div className="text-3xl sm:text-4xl font-black mt-1">₹12,45,800.00</div>
            <div className="mt-6 flex justify-between items-end text-xs">
              <div className="font-mono">**** **** **** 9482</div>
              <div className="bg-white/20 px-2 py-1 rounded">+3.2% this week</div>
            </div>
          </div>

          <div className="bg-slate-900 p-6 rounded-3xl border border-slate-800 flex flex-col justify-between">
            <div>
              <div className="text-xs text-slate-400">Monthly Cash Inflow</div>
              <div className="text-2xl font-bold text-emerald-400 mt-1">+₹3,40,000</div>
            </div>
            <div>
              <div className="text-xs text-slate-400">Monthly Outflow</div>
              <div className="text-2xl font-bold text-rose-400 mt-1">-₹1,12,400</div>
            </div>
          </div>
        </div>

        {/* Recent Transactions */}
        <div className="bg-slate-900 p-6 rounded-3xl border border-slate-800 space-y-4">
          <h3 className="font-bold text-base text-white">Recent Activity</h3>
          <div className="space-y-3">
            {[
              { name: "Stripe Settlement", date: "Today, 2:15 PM", amt: "+₹48,200", color: "text-emerald-400" },
              { name: "AWS Cloud Infrastructure", date: "Yesterday", amt: "-₹6,450", color: "text-rose-400" },
              { name: "Client Retainer (Apex Studio)", date: "12 Aug", amt: "+₹1,20,000", color: "text-emerald-400" }
            ].map((t, i) => (
              <div key={i} className="flex justify-between items-center p-3 rounded-xl bg-slate-950/60 border border-slate-800/60 text-xs">
                <div>
                  <div className="font-bold text-white">{t.name}</div>
                  <div className="text-[10px] text-slate-400">{t.date}</div>
                </div>
                <div className={`font-black ${t.color}`}>{t.amt}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Send Modal */}
        {isSendModal && (
          <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4">
            <div className="bg-slate-900 border border-blue-500/40 p-6 rounded-3xl max-w-sm w-full text-center space-y-4">
              <h3 className="font-bold text-lg text-white">Simulated Money Transfer</h3>
              <p className="text-xs text-slate-400">Demo transfer of funds between virtual accounts completed instantly.</p>
              <button onClick={() => setIsSendModal(false)} className="bg-blue-600 text-white font-bold px-6 py-2 rounded-xl text-xs">
                Done
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

// ============================================================================
// 7. AI / SAAS DEMO (Cognita AI Platform)
// ============================================================================
const AiSaasDemo: React.FC<{ demo: DemoItem; isMobile: boolean; isTablet: boolean; onPlanChange?: (plan: PlanType) => void }> = ({ demo, isMobile }) => {
  const plan = demo.plan;
  const isBase = plan === 'Base';
  const isMega = plan === 'Mega';

  const [inputPrompt, setInputPrompt] = useState('');
  const [messages, setMessages] = useState<{ role: 'user' | 'assistant'; text: string }[]>([
    { role: 'assistant', text: 'Hello! I am Cognita AI. How can I help synthesize data or generate code today?' }
  ]);
  const [selectedModel, setSelectedModel] = useState('GPT-4o (Omni)');

  const handleSend = () => {
    if (!inputPrompt.trim()) return;
    const userMsg = inputPrompt;
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setInputPrompt('');

    setTimeout(() => {
      setMessages(prev => [
        ...prev, 
        { role: 'assistant', text: `Simulated Response from ${selectedModel}: Analyzing "${userMsg}"... Generated high-precision insight with 99.4% factual alignment.` }
      ]);
    }, 400);
  };

  return (
    <div className="w-full h-full bg-slate-950 text-slate-100 flex flex-col font-sans overflow-hidden">
      {/* Header */}
      <header className="px-6 py-4 flex items-center justify-between border-b border-slate-800 bg-slate-950 shrink-0">
        <div className="font-black text-xl flex items-center gap-2 text-violet-400">
          <Zap className="w-5 h-5 text-violet-500" /> Cognita AI
        </div>
        {!isBase && (
          <div className="flex items-center gap-2">
            <span className="text-xs text-slate-400">Model:</span>
            <select 
              value={selectedModel} 
              onChange={e => setSelectedModel(e.target.value)}
              className="bg-slate-900 border border-slate-700 text-violet-300 text-xs rounded-lg px-2.5 py-1.5 focus:outline-none"
            >
              <option>GPT-4o (Omni)</option>
              <option>Claude 3.5 Sonnet</option>
              <option>Gemini 1.5 Pro</option>
            </select>
          </div>
        )}
      </header>

      {/* Chat / Playground Area */}
      <div className="flex-1 flex flex-col justify-between p-6 overflow-hidden max-w-4xl mx-auto w-full">
        <div className="flex-1 overflow-y-auto space-y-4 pr-2 custom-scrollbar">
          {messages.map((m, i) => (
            <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div className={`max-w-md p-4 rounded-2xl text-xs leading-relaxed ${
                m.role === 'user' ? 'bg-violet-600 text-white rounded-br-none' : 'bg-slate-900 border border-slate-800 text-slate-200 rounded-bl-none'
              }`}>
                {m.text}
              </div>
            </div>
          ))}
        </div>

        {/* Input Bar */}
        <div className="pt-4">
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-2 flex items-center gap-2">
            <input 
              type="text" 
              value={inputPrompt}
              onChange={e => setInputPrompt(e.target.value)}
              onKeyDown={e => e.key === 'Enter' && handleSend()}
              placeholder="Ask anything or generate code..."
              className="flex-1 bg-transparent px-3 text-xs text-white focus:outline-none"
            />
            <button 
              onClick={handleSend}
              className="bg-violet-600 hover:bg-violet-500 text-white p-2.5 rounded-xl text-xs font-bold"
            >
              <Send className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

// ============================================================================
// 8. LOCAL SERVICES / REPAIR DEMO (Apex Pro Services)
// ============================================================================
const ServiceDemo: React.FC<{ demo: DemoItem; isMobile: boolean; isTablet: boolean; onPlanChange?: (plan: PlanType) => void }> = ({ demo, isMobile }) => {
  const plan = demo.plan;
  const isBase = plan === 'Base';
  const isMega = plan === 'Mega';

  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="w-full h-full bg-slate-50 text-slate-900 overflow-y-auto overflow-x-hidden font-sans custom-scrollbar">
      <header className="bg-emerald-700 text-white px-6 py-4 flex items-center justify-between shadow-md sticky top-0 z-20">
        <div className="font-black text-xl flex items-center gap-2">
          <Wrench className="w-5 h-5" /> Apex Pro Services
        </div>
        <div className="text-xs font-bold flex items-center gap-2">
          <Phone className="w-4 h-4" /> 24/7 Emergency: 1800-APEX-FIX
        </div>
      </header>

      <div className="bg-emerald-800 text-white py-14 px-6 text-center space-y-3">
        <h1 className="text-3xl sm:text-4xl font-black">Fast, Certified Home & Office Repairs</h1>
        <p className="text-emerald-100 text-xs sm:text-sm max-w-lg mx-auto">Upfront estimates, licensed technicians, and 100% satisfaction guarantee.</p>
      </div>

      <div className="max-w-xl mx-auto -mt-8 px-4 mb-16">
        <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-xl border border-slate-200">
          <h3 className="text-lg font-bold text-slate-900 mb-4 text-center">Request Free Inspection Quote</h3>
          
          {submitted ? (
            <div className="text-center py-6 space-y-3 text-xs">
              <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto font-bold text-lg">✓</div>
              <h4 className="font-bold text-base text-slate-900">Request Dispatched!</h4>
              <p className="text-slate-600">A certified technician will call you within 15 minutes.</p>
            </div>
          ) : (
            <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }} className="space-y-3 text-xs">
              <input type="text" placeholder="Your Name" required className="w-full bg-slate-50 border border-slate-300 rounded-xl p-3" />
              <input type="tel" placeholder="Phone Number" required className="w-full bg-slate-50 border border-slate-300 rounded-xl p-3" />
              <select className="w-full bg-slate-50 border border-slate-300 rounded-xl p-3 text-slate-700">
                <option>Emergency Plumbing</option>
                <option>Electrical Repair</option>
                <option>HVAC & Air Conditioning</option>
                <option>Roofing & Renovation</option>
              </select>
              <button type="submit" className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3.5 rounded-xl text-xs transition-colors shadow-md">
                Send Fast Service Request
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
