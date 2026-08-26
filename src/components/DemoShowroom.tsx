import { PRICING_PLANS } from '../data/content';
import React, { useState, useEffect, useRef } from 'react';
import { Sparkles, Monitor, GraduationCap, Tablet, Smartphone, X, Check, ChevronRight, ArrowRight, Maximize, Minimize } from 'lucide-react';
import { DEMO_DATA, PlanType, CategoryType, DemoItem } from '../data/demos';
import { WebsiteDemoRenderer } from './WebsiteDemoRenderer';

const getPlanFeatures = (planId: string) => {
  const plan = PRICING_PLANS.find(p => p.id === planId.toLowerCase());
  if (!plan) return [];
  return plan.features.map(f => {
    if (f.value === true) return f.name;
    if (f.value === false) return null;
    if (f.name === 'Domain' || f.name === 'Hosting') return `${f.name}: ${f.value}`;
    return `${f.value} ${f.name}`;
  }).filter(Boolean) as string[];
};


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
  'Services',
  'School',
  'Beauty Products'
];


const basePrice = PRICING_PLANS.find(p => p.id === 'base')?.price || '₹24,999';
const proPrice = PRICING_PLANS.find(p => p.id === 'pro')?.price || '₹34,999';
const maxPrice = PRICING_PLANS.find(p => p.id === 'max')?.price || '₹54,999';

const getPrice = (name: string) => PRICING_PLANS.find(p => p.name === name)?.price || '';

const PLANS: { id: PlanType; price: string; title: string; subtitle: string }[] = [
  { id: 'Base', price: getPrice('NOVA BASE'), title: 'Essential & Professional Foundation', subtitle: 'Clean, modern, responsive website tailored for small businesses getting online.' },
  { id: 'Pro', price: getPrice('NOVA PRO'), title: 'Interactive & Feature-Rich Experience', subtitle: 'Category filters, rich galleries, reviews, and interactive booking flows.' },
  { id: 'Max', price: getPrice('NOVA MAX'), title: 'Enterprise & Workflow-Integrated System', subtitle: 'End-to-end QR ordering, live telemetry dashboards, client portals & automated workflows.' }
];

interface DemoCardItemProps {
  demo: DemoItem;
  images: string[];
  onSelect: () => void;
}

const DemoCardItem: React.FC<DemoCardItemProps> = ({ demo, images, onSelect }) => {
  const [currentImgIndex, setCurrentImgIndex] = useState(0);

  return (
    <div 
      className="group bg-white border border-slate-200 rounded-3xl overflow-hidden hover:shadow-2xl hover:border-indigo-300 transition-all duration-300 flex flex-col"
    >
      {/* Thumbnail Area */}
      <div 
        className="aspect-[16/10] bg-slate-100 relative overflow-hidden flex items-center justify-center cursor-pointer group-hover:opacity-95 transition-opacity"
        onClick={onSelect}
      >
        <img 
          src={images[currentImgIndex] || demo.heroImage} 
          alt={demo.title} 
          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500" 
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent"></div>
        
        {/* Badges */}
        <div className="absolute top-3.5 left-3.5 flex gap-2">
          <span className="bg-white/95 backdrop-blur-sm text-slate-900 text-[10px] font-black uppercase tracking-wider px-2.5 py-1 rounded-md shadow-sm border border-slate-200">
            {demo.category}
          </span>
          {demo.businessType === 'school' && (
            <span className="bg-rose-500 text-white text-[10px] font-black uppercase tracking-wider px-2.5 py-1 rounded-md shadow-sm">
              NEW
            </span>
          )}
        </div>

        <div className="absolute top-3.5 right-3.5">
          <span className={`backdrop-blur-sm text-white text-[10px] font-black uppercase tracking-wider px-2.5 py-1 rounded-md shadow-sm ${
            demo.plan === 'Max' ? 'bg-amber-600/90' : demo.plan === 'Pro' ? 'bg-indigo-600/90' : 'bg-slate-800/90'
          }`}>
            {demo.plan} Plan
          </span>
        </div>

        {/* Multi-Photo Carousel Indicators */}
        {images.length > 1 && (
          <div 
            className="absolute top-12 right-3.5 flex items-center gap-1 bg-slate-950/60 backdrop-blur-sm px-2 py-1 rounded-full z-10"
            onClick={(e) => e.stopPropagation()}
          >
            {images.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentImgIndex(idx)}
                className={`w-2 h-2 rounded-full transition-all ${
                  currentImgIndex === idx 
                    ? 'bg-white w-4' 
                    : 'bg-white/50 hover:bg-white/80'
                }`}
                title={`Photo ${idx + 1}`}
                aria-label={`View photo ${idx + 1}`}
              />
            ))}
          </div>
        )}

        {/* Bottom Overlay Title on Hover */}
        <div className="absolute bottom-3 left-4 right-4 text-white">
          <span className="text-[11px] font-bold text-indigo-300 block">{demo.tagline}</span>
        </div>
      </div>

      {/* Multi-Photo Mini Thumbnail Bar */}
      {images.length > 1 && (
        <div className="grid grid-cols-4 gap-1 p-2 bg-slate-50 border-b border-slate-100">
          {images.slice(0, 4).map((imgUrl, idx) => (
            <button
              key={idx}
              onClick={(e) => {
                e.stopPropagation();
                setCurrentImgIndex(idx);
              }}
              className={`relative aspect-video rounded-md overflow-hidden border transition-all ${
                currentImgIndex === idx 
                  ? 'border-indigo-600 ring-2 ring-indigo-500/20' 
                  : 'border-slate-200 opacity-70 hover:opacity-100'
              }`}
            >
              <img src={imgUrl} alt={`${demo.title} view ${idx + 1}`} className="w-full h-full object-cover" />
            </button>
          ))}
        </div>
      )}

      {/* Content Area */}
      <div className="p-6 flex flex-col flex-grow justify-between space-y-4">
        <div>
          <h3 className="text-xl font-extrabold text-slate-900 tracking-tight">{demo.title}</h3>
          
          
        </div>
        
        <div className="space-y-4 pt-2">
          {/* Launch Live Demo Button */}
          <button 
            onClick={onSelect}
            className="w-full py-3 bg-slate-900 hover:bg-indigo-600 text-white font-semibold text-sm rounded-xl transition-all duration-200 flex items-center justify-center gap-2 group/btn shadow-md hover:shadow-lg cursor-pointer focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2 active:scale-95"
          >
            <span>View Live Demo</span>
            <ChevronRight className="w-4 h-4 text-slate-400 group-hover/btn:text-white group-hover/btn:translate-x-0.5 transition-all" />
          </button>
        </div>
      </div>
    </div>
  );
};

export const DemoShowroom: React.FC<DemoShowroomProps> = ({ onOpenQuoteModal }) => {
  const [activePlan, setActivePlan] = useState<PlanType>('Base');
  const [activeCategory, setActiveCategory] = useState<'All' | CategoryType>('All');
  const [activeDemo, setActiveDemo] = useState<DemoItem | null>(null);
  const [deviceView, setDeviceView] = useState<'desktop' | 'tablet' | 'mobile'>('desktop');
  const [isFullscreen, setIsFullscreen] = useState(false);
  const demoScrollViewportRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        if (isFullscreen) {
          setIsFullscreen(false);
        } else if (activeDemo) {
          setActiveDemo(null);
        }
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isFullscreen, activeDemo]);

  
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

  // Lock background parent website scrolling completely when demo modal is open
  useEffect(() => {
    if (activeDemo) {
      const originalBodyOverflow = document.body.style.overflow;
      const originalHtmlOverflow = document.documentElement.style.overflow;
      const originalBodyOverscroll = document.body.style.overscrollBehavior;
      const originalPaddingRight = document.body.style.paddingRight;
      
      const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
      
      document.body.style.overflow = 'hidden';
      document.documentElement.style.overflow = 'hidden';
      document.body.style.overscrollBehavior = 'none';
      if (scrollbarWidth > 0) {
        document.body.style.paddingRight = `${scrollbarWidth}px`;
      }

      return () => {
        document.body.style.overflow = originalBodyOverflow;
        document.documentElement.style.overflow = originalHtmlOverflow;
        document.body.style.overscrollBehavior = originalBodyOverscroll;
        document.body.style.paddingRight = originalPaddingRight;
      };
    }
  }, [activeDemo]);

  // Reset demo viewport scroll position to top whenever demo, plan, or device view changes
  useEffect(() => {
    if (activeDemo && demoScrollViewportRef.current) {
      demoScrollViewportRef.current.scrollTop = 0;
    }
  }, [activeDemo?.id, activeDemo?.plan, deviceView]);

  // Reset category if none exist
  useEffect(() => {
    const hasDemos = DEMO_DATA.some(d => d.plan === activePlan && (activeCategory === 'All' || d.category === activeCategory));
    if (!hasDemos && activeCategory !== 'All') {
      setActiveCategory('All');
    }
  }, [activePlan, activeCategory]);

  return (
    <section id="website-demo" className="py-20 md:py-28 bg-white border-t border-slate-100 overflow-hidden scroll-mt-16 sm:scroll-mt-20 relative">
      <div id="showroom" className="absolute -top-20 pointer-events-none" />
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
            Don't just read about features—interact with real mini-websites rendered live inside our showroom. Switch between Base, Pro, and Max to see the progressive upgrade in design and functionality.
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
                  NOVA {plan.id}
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
                {cat} 
                {cat === 'School' && <span className="ml-1 bg-rose-500 text-white text-[8px] px-1.5 py-0.5 rounded-full uppercase tracking-wider">NEW</span>}
                <span className="opacity-60 ml-1">({count})</span>
              </button>
            );
          })}
        </div>

        {/* Demo Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-2">
          {filteredDemos.map((demo) => {
            const images = demo.previewImages && demo.previewImages.length > 0 ? demo.previewImages : [demo.heroImage];
            return (
              <DemoCardItem 
                key={demo.id} 
                demo={demo} 
                images={images}
                onSelect={() => {
                  setActiveDemo(demo);
                  setIsFullscreen(false);
                  setDeviceView('desktop');
                }}
              />
            );
          })}
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
            <span className="inline-block bg-amber-400 text-slate-950 text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full">
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
        <div 
          className={`fixed inset-0 z-50 flex items-center justify-center ${isFullscreen ? 'p-0' : 'p-0 sm:p-3 md:p-6'} bg-slate-950/90 backdrop-blur-md animate-in fade-in duration-200 overscroll-contain select-text`}
          onWheel={(e) => e.stopPropagation()}
          onTouchMove={(e) => e.stopPropagation()}
        >
          <div className={`bg-slate-950 w-full h-full shadow-2xl flex flex-col overflow-hidden transition-all duration-300 ${isFullscreen ? 'rounded-none border-none max-w-none' : 'sm:rounded-3xl border border-slate-800 max-w-[95vw] 2xl:max-w-[1800px]'}`}>
            
            {/* Modal Top Control Bar */}
            <div className="min-h-[4rem] py-2 border-b border-slate-800 flex flex-wrap items-center justify-between px-4 sm:px-6 bg-slate-900 shrink-0 gap-4 z-50 relative">
              
              {/* Business Info & Live Plan Indicator */}
              <div className="flex items-center gap-3 min-w-0">
                <div className="min-w-0">
                  <div className="flex items-center gap-2 flex-wrap">
                    <h3 className="text-white font-black text-sm sm:text-base truncate">
                      {activeDemo.title}
                    </h3>
                    <span className={`text-[10px] font-black uppercase px-2.5 py-0.5 rounded-full ${
                      activeDemo.plan === 'Max' ? 'bg-amber-500 text-slate-950' : activeDemo.plan === 'Pro' ? 'bg-indigo-500 text-white' : 'bg-slate-700 text-slate-200'
                    }`}>
                      {activeDemo.plan} • {PLANS.find(p => p.id === activeDemo.plan)?.price}
                    </span>
                  </div>
                  <p className="text-slate-400 text-xs hidden md:block truncate">
                    {activeDemo.tagline}
                  </p>
                </div>
              </div>
              
              {/* In-Modal Plan Switcher (Base -> Pro -> Max for the SAME business) */}
              <div className="hidden lg:flex items-center bg-slate-950 p-1 rounded-xl border border-slate-800">
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider px-2">Plan:</span>
                {(['Base', 'Pro', 'Max'] as PlanType[]).map((p) => (
                  <button
                    key={p}
                    onClick={() => handleSwitchModalPlan(p)}
                    className={`px-3 py-1 rounded-lg text-xs font-black transition-all ${
                      activeDemo.plan === p
                        ? p === 'Max' ? 'bg-amber-500 text-slate-950 shadow-xs' : p === 'Pro' ? 'bg-indigo-600 text-white shadow-xs' : 'bg-slate-800 text-white shadow-xs'
                        : 'text-slate-400 hover:text-white hover:bg-slate-900'
                    }`}
                  >
                    {p} {p === 'Base' ? basePrice : p === 'Pro' ? proPrice : maxPrice}
                  </button>
                ))}
              </div>

              {/* Device Toggles & Close Action */}
              <div className="flex items-center gap-2 sm:gap-4 shrink-0">
                <div className="flex items-center bg-slate-950 border border-slate-800 rounded-xl p-1">
                  <button 
                    onClick={() => setIsFullscreen(!isFullscreen)}
                    className={`p-2 rounded-lg transition-colors text-slate-400 hover:text-white mr-1`}
                    title={isFullscreen ? "Exit Full Screen (ESC)" : "Expand to Full Screen"}
                  >
                    {isFullscreen ? <Minimize className="w-4 h-4 text-indigo-400" /> : <Maximize className="w-4 h-4" />}
                  </button>
                  <div className="w-px h-4 bg-slate-800 mx-1"></div>
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
                  onClick={() => { setActiveDemo(null); setIsFullscreen(false); }}
                  className="px-3 py-2 text-slate-300 hover:text-white bg-slate-800 hover:bg-rose-600 rounded-xl transition-colors flex items-center gap-1.5 text-xs font-bold cursor-pointer"
                >
                  <span className="hidden sm:inline">Close Demo</span>
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>
            
            {/* Modal Body - The Interactive Simulated Browser Frame */}
            <div className="flex-1 min-h-0 bg-slate-950 flex justify-center items-center p-0 sm:p-3 overflow-hidden relative">
               <div 
                  className={`bg-white shadow-2xl overflow-hidden transition-all duration-500 ease-out flex flex-col min-h-0
                    ${deviceView === 'desktop' 
                      ? `w-full h-full ${isFullscreen ? 'max-w-none rounded-none border-none' : 'max-w-[100%] xl:max-w-[1600px] sm:rounded-2xl border border-slate-800'}` 
                      : deviceView === 'tablet' 
                        ? 'w-[768px] h-full max-h-[960px] sm:rounded-2xl border border-slate-800' 
                        : 'w-[380px] h-full max-h-[820px] rounded-3xl border-4 border-slate-800'}
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
                  
                  {/* Simulated Mini-Website Canvas - Independent Scrollable Area */}
                  <div 
                    ref={demoScrollViewportRef}
                    id="demo-scroll-viewport"
                    className="flex-1 min-h-0 w-full h-full overflow-y-auto overflow-x-hidden relative bg-white flex flex-col overscroll-contain"
                    style={{ 
                      WebkitOverflowScrolling: 'touch',
                      overscrollBehavior: 'contain'
                    }}
                    onWheel={(e) => e.stopPropagation()}
                    onTouchMove={(e) => e.stopPropagation()}
                  >
                    <WebsiteDemoRenderer 
                      demo={activeDemo} 
                      device={deviceView} 
                      onPlanChange={handleSwitchModalPlan}
                    />
                  </div>
               </div>
            </div>

            {/* Mobile Plan Switcher Footer Bar for Small Screens */}
            <div className="lg:hidden h-auto py-2 bg-slate-900 border-t border-slate-800 flex flex-wrap items-center justify-between gap-2 px-2 sm:px-4 shrink-0">
              <span className="text-[10px] font-bold text-slate-400 uppercase hidden sm:block">Upgrade Plan:</span>
              <div className="flex-1 flex justify-between gap-1">
                {(['Base', 'Pro', 'Max'] as PlanType[]).map((p) => (
                  <button
                    key={p}
                    onClick={() => handleSwitchModalPlan(p)}
                    className={`flex-1 px-1 sm:px-3 py-1.5 rounded-lg text-[11px] sm:text-xs font-bold whitespace-nowrap text-center transition-all ${
                      activeDemo.plan === p ? 'bg-indigo-600 text-white shadow-md' : 'text-slate-400 hover:bg-slate-800 bg-slate-950'
                    }`}
                  >
                    {p} <span className="opacity-70 font-normal">({p === 'Base' ? basePrice : p === 'Pro' ? proPrice : maxPrice})</span>
                  </button>
                ))}
              </div>
            </div>

          </div>
        </div>
      )}
    </section>
  );
};
