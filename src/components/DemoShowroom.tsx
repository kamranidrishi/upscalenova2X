import React, { useState, useEffect } from 'react';
import { Sparkles, Monitor, Tablet, Smartphone, X, Check, ChevronRight, ArrowRight } from 'lucide-react';
import { DEMO_DATA, PlanType, CategoryType, DemoItem } from '../data/demos';
import { WebsiteDemoRenderer } from './WebsiteDemoRenderer';

interface DemoShowroomProps {
  onOpenQuoteModal: (serviceName?: string) => void;
}

const CATEGORIES: ('All' | CategoryType)[] = [
  'All', 
  'Café', 
  'Restaurant', 
  'Flat / Real Estate',
  'Gym', 
  'Law Firm', 
  'Marketing', 
  'Finance', 
  'AI / SaaS', 
  'Services'
];

const PLANS: { id: PlanType; price: string; title: string; subtitle: string }[] = [
  { id: 'Base', price: '₹12,999', title: 'Essential & Professional Foundation', subtitle: 'Clean, modern, responsive website tailored for small businesses getting online.' },
  { id: 'Pro', price: '₹16,999', title: 'Interactive & Feature-Rich Experience', subtitle: 'Category filters, rich galleries, reviews, and interactive booking flows.' },
  { id: 'Mega', price: '₹24,999', title: 'Enterprise & Workflow-Integrated System', subtitle: 'End-to-end QR ordering, live telemetry dashboards, client portals & automated workflows.' }
];

export const DemoShowroom: React.FC<DemoShowroomProps> = ({ onOpenQuoteModal }) => {
  const [activePlan, setActivePlan] = useState<PlanType>('Base');
  const [activeCategory, setActiveCategory] = useState<'All' | CategoryType>('All');
  const [activeDemo, setActiveDemo] = useState<DemoItem | null>(null);
  const [deviceView, setDeviceView] = useState<'desktop' | 'tablet' | 'mobile'>('desktop');
  
  const filteredDemos = DEMO_DATA.filter(demo => {
    if (demo.plan !== activePlan) return false;
    if (activeCategory !== 'All' && demo.category !== activeCategory) return false;
    return true;
  });

  // Switch plan while preserving the same business when inside modal or gallery
  const handleSwitchModalPlan = (targetPlan: PlanType) => {
    if (!activeDemo) return;
    const sameBusinessUpgraded = DEMO_DATA.find(d => d.businessId === activeDemo.businessId && d.plan === targetPlan);
    if (sameBusinessUpgraded) {
      setActiveDemo(sameBusinessUpgraded);
      setActivePlan(targetPlan);
    }
  };

  // Reset category if none exist
  useEffect(() => {
    const hasDemos = DEMO_DATA.some(d => d.plan === activePlan && (activeCategory === 'All' || d.category === activeCategory));
    if (!hasDemos && activeCategory !== 'All') {
      setActiveCategory('All');
    }
  }, [activePlan, activeCategory]);

  return (
    <section id="showroom" className="py-20 md:py-28 bg-white border-t border-slate-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-indigo-50 text-indigo-700 text-xs font-bold border border-indigo-100 shadow-xs">
            <Monitor className="w-3.5 h-3.5" />
            <span>Interactive Website Demo Showroom</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            Experience What Your Website<br className="hidden sm:block" /> Will Actually Look Like
          </h2>
          <p className="text-slate-600 text-base sm:text-lg font-medium">
            Don't just read about features—interact with real mini-websites rendered live inside our showroom. Switch between Base, Pro, and Mega to see the progressive upgrade in design and functionality.
          </p>
        </div>

        {/* Plan Selector */}
        <div className="max-w-3xl mx-auto space-y-5">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 p-2 bg-slate-100/90 rounded-3xl border border-slate-200/80">
            {PLANS.map((plan) => (
              <button
                key={plan.id}
                onClick={() => setActivePlan(plan.id)}
                className={`flex flex-col items-center justify-center py-4 px-3 rounded-2xl transition-all duration-300 ${
                  activePlan === plan.id
                    ? 'bg-white shadow-md border border-slate-200 scale-[1.02] z-10'
                    : 'text-slate-500 hover:text-slate-800 hover:bg-slate-200/60'
                }`}
              >
                <span className={`text-xs font-black uppercase tracking-wider mb-1 ${activePlan === plan.id ? 'text-indigo-600' : ''}`}>
                  {plan.id} Plan
                </span>
                <span className={`text-xl font-black ${activePlan === plan.id ? 'text-slate-900' : ''}`}>
                  {plan.price}
                </span>
              </button>
            ))}
          </div>
          
          <div className="text-center bg-slate-50 border border-slate-100 rounded-2xl py-3 px-6 animate-in fade-in duration-300">
            <h3 className="text-sm font-bold text-slate-900">
              {PLANS.find(p => p.id === activePlan)?.title}
            </h3>
            <p className="text-slate-500 text-xs mt-0.5">
              {PLANS.find(p => p.id === activePlan)?.subtitle}
            </p>
          </div>
        </div>

        {/* Business Category Filter Pills */}
        <div className="flex flex-wrap justify-center gap-2 max-w-4xl mx-auto">
          {CATEGORIES.map(cat => {
            const count = cat === 'All' 
              ? DEMO_DATA.filter(d => d.plan === activePlan).length
              : DEMO_DATA.filter(d => d.plan === activePlan && d.category === cat).length;
              
            if (count === 0 && cat !== 'All') return null;

            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs font-bold transition-all duration-200 ${
                  activeCategory === cat
                    ? 'bg-slate-900 text-white shadow-md'
                    : 'bg-white text-slate-600 border border-slate-200 hover:border-slate-300 hover:bg-slate-50'
                }`}
              >
                {cat} <span className="opacity-60 ml-1">({count})</span>
              </button>
            );
          })}
        </div>

        {/* Demo Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-2">
          {filteredDemos.map((demo) => (
            <div 
              key={demo.id} 
              className="group bg-white border border-slate-200 rounded-3xl overflow-hidden hover:shadow-2xl hover:border-indigo-300 transition-all duration-300 flex flex-col"
            >
              {/* Thumbnail Area */}
              <div 
                className="aspect-[16/10] bg-slate-100 relative overflow-hidden flex items-center justify-center cursor-pointer group-hover:opacity-95 transition-opacity"
                onClick={() => {
                  setActiveDemo(demo);
                  setDeviceView('desktop');
                }}
              >
                <img 
                  src={demo.heroImage} 
                  alt={demo.title} 
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent"></div>
                
                {/* Badges */}
                <div className="absolute top-3.5 left-3.5 flex gap-2">
                  <span className="bg-white/95 backdrop-blur-sm text-slate-900 text-[10px] font-black uppercase tracking-wider px-2.5 py-1 rounded-md shadow-sm border border-slate-200">
                    {demo.category}
                  </span>
                </div>

                <div className="absolute top-3.5 right-3.5">
                  <span className={`backdrop-blur-sm text-white text-[10px] font-black uppercase tracking-wider px-2.5 py-1 rounded-md shadow-sm ${
                    demo.plan === 'Mega' ? 'bg-amber-600/90' : demo.plan === 'Pro' ? 'bg-indigo-600/90' : 'bg-slate-800/90'
                  }`}>
                    {demo.plan} • {PLANS.find(p => p.id === demo.plan)?.price}
                  </span>
                </div>

                {/* Bottom Overlay Title on Hover */}
                <div className="absolute bottom-3 left-4 right-4 text-white">
                  <span className="text-[11px] font-bold text-indigo-300 block">{demo.tagline}</span>
                </div>
              </div>

              {/* Content Area */}
              <div className="p-6 flex flex-col flex-grow justify-between space-y-4">
                <div>
                  <h3 className="text-xl font-extrabold text-slate-900 tracking-tight">{demo.title}</h3>
                  {demo.isRealClient && demo.clientName && (
                    <p className="text-xs text-indigo-600 font-bold mt-0.5">Live Reference: {demo.clientName}</p>
                  )}
                  <p className="text-sm text-slate-600 mt-2 line-clamp-2 leading-relaxed">{demo.description}</p>
                </div>
                
                <div className="space-y-4 pt-2">
                  {/* Feature Pills */}
                  <div className="flex flex-wrap gap-1.5">
                    {demo.features.slice(0, 3).map((feat, i) => (
                      <span key={i} className="inline-flex items-center gap-1 bg-slate-50 border border-slate-200 text-slate-700 text-[10px] font-bold px-2.5 py-1 rounded-full">
                        <Check className="w-3 h-3 text-indigo-600" />
                        {feat}
                      </span>
                    ))}
                    {demo.features.length > 3 && (
                       <span className="inline-flex items-center bg-slate-100 text-slate-600 text-[10px] font-bold px-2 py-1 rounded-full">
                         +{demo.features.length - 3} more
                       </span>
                    )}
                  </div>
                  
                  {/* Launch Live Demo Button */}
                  <button 
                    onClick={() => {
                      setActiveDemo(demo);
                      setDeviceView('desktop');
                    }}
                    className="w-full py-3.5 bg-slate-900 hover:bg-indigo-600 text-white font-bold text-xs uppercase tracking-wider rounded-xl transition-all duration-200 flex items-center justify-center gap-2 group/btn shadow-md hover:shadow-lg"
                  >
                    <span>View Live Demo</span>
                    <ChevronRight className="w-4 h-4 text-slate-400 group-hover/btn:text-white group-hover/btn:translate-x-0.5 transition-all" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Empty State */}
        {filteredDemos.length === 0 && (
          <div className="text-center py-14 bg-slate-50 rounded-3xl border border-slate-200 border-dashed">
            <Monitor className="w-12 h-12 text-slate-300 mx-auto mb-3" />
            <p className="text-slate-600 font-bold text-sm">No samples found for this category in the {activePlan} plan.</p>
            <button 
              onClick={() => setActiveCategory('All')}
              className="mt-3 text-indigo-600 font-bold text-xs hover:underline"
            >
              View all {activePlan} samples
            </button>
          </div>
        )}

        {/* Customization Footer Banner */}
        <div className="max-w-5xl mx-auto mt-16 bg-slate-900 rounded-3xl p-8 sm:p-12 text-center relative overflow-hidden border border-slate-800 shadow-2xl">
          <div className="absolute top-0 right-0 w-80 h-80 bg-indigo-600/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-indigo-600/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
          
          <div className="relative z-10 space-y-6">
            <span className="bg-amber-400 text-slate-950 text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full">
              100% Tailored To Your Brand
            </span>
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
              Your website won't be a generic template.
            </h3>
            <p className="text-slate-300 text-sm sm:text-base font-medium max-w-2xl mx-auto leading-relaxed">
              Every website we engineer at Upscale Nova is individually customized to your exact business objectives, color palette, custom copy, and target audience. These live samples showcase the craft, speed, and architectural depth you will receive.
            </p>
            <button 
              onClick={() => onOpenQuoteModal()}
              className="bg-amber-400 hover:bg-amber-300 text-slate-950 font-black px-8 py-4 rounded-xl shadow-xl transition-all duration-200 hover:-translate-y-0.5 inline-flex items-center gap-2 text-sm"
            >
              <span>Build My Custom Website</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>

      {/* ========================================================================= */}
      {/* INTERACTIVE MINI-WEBSITE MODAL VIEWER ("A Website Inside My Website") */}
      {/* ========================================================================= */}
      {activeDemo && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-0 sm:p-3 md:p-6 bg-slate-950/90 backdrop-blur-md animate-in fade-in duration-200">
          <div className="bg-slate-950 w-full h-full sm:rounded-3xl border border-slate-800 shadow-2xl flex flex-col overflow-hidden max-w-[1500px]">
            
            {/* Modal Top Control Bar */}
            <div className="h-16 border-b border-slate-800 flex items-center justify-between px-4 sm:px-6 bg-slate-900 shrink-0 gap-4">
              
              {/* Business Info & Live Plan Indicator */}
              <div className="flex items-center gap-3 min-w-0">
                <div className="min-w-0">
                  <div className="flex items-center gap-2 flex-wrap">
                    <h3 className="text-white font-black text-sm sm:text-base truncate">
                      {activeDemo.title}
                    </h3>
                    <span className={`text-[10px] font-black uppercase px-2.5 py-0.5 rounded-full ${
                      activeDemo.plan === 'Mega' ? 'bg-amber-500 text-slate-950' : activeDemo.plan === 'Pro' ? 'bg-indigo-500 text-white' : 'bg-slate-700 text-slate-200'
                    }`}>
                      {activeDemo.plan} • {PLANS.find(p => p.id === activeDemo.plan)?.price}
                    </span>
                  </div>
                  <p className="text-slate-400 text-xs hidden md:block truncate">
                    {activeDemo.tagline}
                  </p>
                </div>
              </div>
              
              {/* In-Modal Plan Switcher (Base -> Pro -> Mega for the SAME business) */}
              <div className="hidden lg:flex items-center bg-slate-950 p-1 rounded-xl border border-slate-800">
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider px-2">Plan:</span>
                {(['Base', 'Pro', 'Mega'] as PlanType[]).map((p) => (
                  <button
                    key={p}
                    onClick={() => handleSwitchModalPlan(p)}
                    className={`px-3 py-1 rounded-lg text-xs font-black transition-all ${
                      activeDemo.plan === p
                        ? p === 'Mega' ? 'bg-amber-500 text-slate-950 shadow-xs' : p === 'Pro' ? 'bg-indigo-600 text-white shadow-xs' : 'bg-slate-800 text-white shadow-xs'
                        : 'text-slate-400 hover:text-white hover:bg-slate-900'
                    }`}
                  >
                    {p} {p === 'Base' ? '₹12,999' : p === 'Pro' ? '₹16,999' : '₹24,999'}
                  </button>
                ))}
              </div>

              {/* Device Toggles & Close Action */}
              <div className="flex items-center gap-2 sm:gap-4 shrink-0">
                <div className="flex items-center bg-slate-950 border border-slate-800 rounded-xl p-1">
                  <button 
                    onClick={() => setDeviceView('desktop')}
                    className={`p-2 rounded-lg transition-colors ${deviceView === 'desktop' ? 'bg-slate-800 text-white shadow-sm' : 'text-slate-400 hover:text-white'}`}
                    title="Desktop Preview (100% Width)"
                  >
                    <Monitor className="w-4 h-4" />
                  </button>
                  <button 
                    onClick={() => setDeviceView('tablet')}
                    className={`p-2 rounded-lg transition-colors ${deviceView === 'tablet' ? 'bg-slate-800 text-white shadow-sm' : 'text-slate-400 hover:text-white'}`}
                    title="Tablet Preview (768px)"
                  >
                    <Tablet className="w-4 h-4" />
                  </button>
                  <button 
                    onClick={() => setDeviceView('mobile')}
                    className={`p-2 rounded-lg transition-colors ${deviceView === 'mobile' ? 'bg-slate-800 text-white shadow-sm' : 'text-slate-400 hover:text-white'}`}
                    title="Mobile Preview (375px)"
                  >
                    <Smartphone className="w-4 h-4" />
                  </button>
                </div>

                <button 
                  onClick={() => setActiveDemo(null)}
                  className="px-3 py-2 text-slate-300 hover:text-white bg-slate-800 hover:bg-rose-600 rounded-xl transition-colors flex items-center gap-1.5 text-xs font-bold"
                >
                  <span className="hidden sm:inline">Close Demo</span>
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>
            
            {/* Modal Body - The Interactive Simulated Browser Frame */}
            <div className="flex-1 bg-slate-950 flex justify-center items-center p-0 sm:p-3 overflow-hidden relative">
               <div 
                  className={`bg-white rounded-none sm:rounded-2xl shadow-2xl overflow-hidden transition-all duration-500 ease-out flex flex-col border border-slate-800
                    ${deviceView === 'desktop' ? 'w-full h-full max-w-[1400px]' : 
                      deviceView === 'tablet' ? 'w-[768px] h-full max-h-[960px]' : 
                      'w-[380px] h-full max-h-[820px] rounded-3xl border-4 border-slate-800'}
                  `}
                >
                  {/* Browser Address Bar */}
                  <div className="h-9 bg-slate-100 border-b border-slate-200 flex items-center px-4 shrink-0 justify-between">
                    <div className="flex gap-1.5">
                      <div className="w-2.5 h-2.5 rounded-full bg-rose-400"></div>
                      <div className="w-2.5 h-2.5 rounded-full bg-amber-400"></div>
                      <div className="w-2.5 h-2.5 rounded-full bg-emerald-400"></div>
                    </div>

                    <div className="w-3/5 bg-white rounded-md h-6 border border-slate-200 flex items-center px-3 justify-center text-[10px] text-slate-500 font-mono truncate">
                      <span>https://{activeDemo.businessId}.upscalenova-preview.com/{activeDemo.plan.toLowerCase()}</span>
                    </div>

                    <div className="text-[10px] font-bold text-indigo-600 uppercase tracking-wider hidden sm:block">
                      Live Sandbox
                    </div>
                  </div>
                  
                  {/* Simulated Mini-Website Canvas */}
                  <div className="flex-1 overflow-hidden relative bg-white flex flex-col">
                    <WebsiteDemoRenderer 
                      demo={activeDemo} 
                      device={deviceView} 
                      onPlanChange={handleSwitchModalPlan}
                    />
                  </div>
               </div>
            </div>

            {/* Mobile Plan Switcher Footer Bar for Small Screens */}
            <div className="lg:hidden h-12 bg-slate-900 border-t border-slate-800 flex items-center justify-around px-4 shrink-0">
              <span className="text-[10px] font-bold text-slate-400 uppercase">Upgrade Plan:</span>
              {(['Base', 'Pro', 'Mega'] as PlanType[]).map((p) => (
                <button
                  key={p}
                  onClick={() => handleSwitchModalPlan(p)}
                  className={`px-3 py-1 rounded-lg text-xs font-bold ${
                    activeDemo.plan === p ? 'bg-indigo-600 text-white' : 'text-slate-400'
                  }`}
                >
                  {p} ({p === 'Base' ? '₹12,999' : p === 'Pro' ? '₹16,999' : '₹24,999'})
                </button>
              ))}
            </div>

          </div>
        </div>
      )}
    </section>
  );
};
