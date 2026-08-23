import React, { useState, useEffect } from 'react';
import { DemoItem } from '../data/demos';
import { 
  ArrowRight, Check, ChevronDown, Monitor, Smartphone, Globe, Layers, 
  Settings, Zap, Code, LayoutTemplate, Sparkles, MessageCircle, Mail, MapPin, 
  Search, Play, Minus, Plus, Star, Users, Briefcase, Camera, Video, MessageSquare,
  Menu, X
} from 'lucide-react';

export const AgencyDemo: React.FC<{
  demo: DemoItem;
  isMobile: boolean;
  isTablet: boolean;
}> = ({ demo, isMobile, isTablet }) => {
  const [activeFaq, setActiveFaq] = useState<number | null>(0);
  const [scrolled, setScrolled] = useState(false);
  const [activeDemoTab, setActiveDemoTab] = useState('Home');
  const [menuOpen, setMenuOpen] = useState(false);

  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    setScrolled(e.currentTarget.scrollTop > 50);
  };

  const toggleFaq = (index: number) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  return (
    <div onScroll={handleScroll} className="w-full h-full bg-[#050505] text-white font-sans overflow-y-auto overflow-x-hidden custom-scrollbar scroll-smooth selection:bg-red-600/30 selection:text-red-200 relative">
      
      {/* NAVBAR */}
      <nav className={`sticky top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-[#050505]/90 backdrop-blur-xl border-b border-white/5 py-4 shadow-lg' : 'bg-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-between gap-4">
          
          {/* Logo & Pricing Badge */}
          <div className="flex items-center gap-4 shrink-0">
            <div className="font-black text-2xl tracking-tighter flex items-center gap-2">
              <div className="w-3 h-3 bg-red-600 rounded-full shadow-[0_0_15px_rgba(220,38,38,0.8)]"></div>
              NOVA
            </div>
            <div className="hidden sm:flex px-2.5 py-1 rounded-md bg-white/10 border border-white/10 text-xs font-bold text-gray-300 tracking-widest uppercase">
              {demo.plan} Plan
            </div>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden xl:flex items-center gap-8 text-sm font-medium text-gray-300">
            <a href="#home" className="hover:text-white transition-colors">Home</a>
            <a href="#about" className="hover:text-white transition-colors">About</a>
            <a href="#services" className="hover:text-white transition-colors">Services</a>
            <a href="#work" className="hover:text-white transition-colors">Our Work</a>
            <a href="#features" className="hover:text-white transition-colors">Features</a>
            <a href="#process" className="hover:text-white transition-colors">Process</a>
            <a href="#contact" className="hover:text-white transition-colors">Contact</a>
          </div>

          {/* CTA & Mobile Menu Toggle */}
          <div className="flex items-center gap-4 shrink-0">
            <button className="hidden md:flex items-center gap-2 bg-white/10 hover:bg-white text-white hover:text-black px-6 py-2.5 rounded-full text-sm font-bold transition-all duration-300 border border-white/20">
              Start a Project <ArrowRight className="w-4 h-4" />
            </button>
            <button className="xl:hidden p-2 text-gray-300 hover:text-white transition-colors" onClick={() => setMenuOpen(!menuOpen)}>
              {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* MOBILE MENU */}
      {menuOpen && (
        <div className="fixed inset-0 z-40 bg-[#050505]/95 backdrop-blur-3xl pt-24 pb-8 px-6 flex flex-col xl:hidden">
          <div className="flex flex-col gap-6 text-2xl font-bold tracking-tight">
            <a href="#home" onClick={() => setMenuOpen(false)} className="text-gray-400 hover:text-white transition-colors border-b border-white/5 pb-4">Home</a>
            <a href="#about" onClick={() => setMenuOpen(false)} className="text-gray-400 hover:text-white transition-colors border-b border-white/5 pb-4">About</a>
            <a href="#services" onClick={() => setMenuOpen(false)} className="text-gray-400 hover:text-white transition-colors border-b border-white/5 pb-4">Services</a>
            <a href="#work" onClick={() => setMenuOpen(false)} className="text-gray-400 hover:text-white transition-colors border-b border-white/5 pb-4">Our Work</a>
            <a href="#features" onClick={() => setMenuOpen(false)} className="text-gray-400 hover:text-white transition-colors border-b border-white/5 pb-4">Features</a>
            <a href="#process" onClick={() => setMenuOpen(false)} className="text-gray-400 hover:text-white transition-colors border-b border-white/5 pb-4">Process</a>
            <a href="#contact" onClick={() => setMenuOpen(false)} className="text-gray-400 hover:text-white transition-colors border-b border-white/5 pb-4">Contact</a>
          </div>
          <div className="mt-auto">
             <div className="inline-flex mb-6 px-3 py-1.5 rounded-md bg-white/5 border border-white/10 text-xs font-bold text-gray-300 tracking-widest uppercase">
              {demo.plan} Plan
            </div>
            <button className="w-full flex items-center justify-center gap-2 bg-red-600 text-white px-6 py-4 rounded-full text-base font-bold transition-all shadow-[0_0_30px_rgba(220,38,38,0.3)]">
              Start a Project <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      )}

      {/* HERO SECTION */}
      <section id="home" className="relative min-h-screen flex items-center pt-24 pb-12 overflow-hidden">
        {/* Background glow effects */}
        <div className="absolute top-1/4 -right-1/4 w-[800px] h-[800px] bg-red-600/20 rounded-full blur-[120px] pointer-events-none mix-blend-screen"></div>
        <div className="absolute bottom-0 -left-1/4 w-[600px] h-[600px] bg-red-900/10 rounded-full blur-[100px] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
          <div className="space-y-8 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-100 fill-mode-both">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md text-xs font-bold tracking-widest text-gray-300 uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse"></span>
              DIGITAL EXPERIENCE AGENCY
            </div>
            
            <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black tracking-tighter leading-[1.05]">
              We Build Digital <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-red-500 to-red-600">Experiences</span> <br/>
              That Matter.
            </h1>
            
            <p className="text-lg text-gray-400 max-w-xl leading-relaxed">
              From strategy and design to development and growth, we create modern digital experiences that help businesses stand out.
            </p>
            
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <button className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-full text-sm font-bold transition-all flex items-center gap-2 shadow-[0_0_30px_rgba(220,38,38,0.3)] hover:shadow-[0_0_40px_rgba(220,38,38,0.5)]">
                Explore Our Work <ArrowRight className="w-4 h-4" />
              </button>
              <button className="bg-white/5 hover:bg-white/10 text-white border border-white/10 px-8 py-4 rounded-full text-sm font-bold transition-all flex items-center gap-2 backdrop-blur-sm">
                Start a Project
              </button>
            </div>
          </div>

          <div className="relative animate-in fade-in zoom-in-95 duration-1000 delay-300 fill-mode-both lg:h-[600px] flex items-center justify-center">
            {/* Cinematic abstract visual */}
            <div className="absolute inset-0 bg-gradient-to-br from-red-600/20 to-black rounded-full blur-3xl"></div>
            <img 
              src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80" 
              alt="Abstract 3D Visual" 
              className="w-full h-auto object-cover rounded-[3rem] border border-white/10 shadow-2xl opacity-80 mix-blend-luminosity hover:mix-blend-normal transition-all duration-700 relative z-10"
            />
            
            {/* Floating UI Cards */}
            <div className="absolute -top-6 -left-6 bg-[#0a0a0a]/80 backdrop-blur-xl border border-white/10 p-5 rounded-2xl shadow-2xl z-20 animate-[bounce_4s_infinite]">
              <div className="text-3xl font-black text-white">150+</div>
              <div className="text-xs text-red-400 font-bold tracking-wider uppercase mt-1">Projects</div>
            </div>
            
            <div className="absolute top-1/2 -right-12 bg-[#0a0a0a]/80 backdrop-blur-xl border border-white/10 p-5 rounded-2xl shadow-2xl z-20 animate-[bounce_5s_infinite_1s]">
              <div className="text-3xl font-black text-white">98%</div>
              <div className="text-xs text-red-400 font-bold tracking-wider uppercase mt-1">Client Satisfaction</div>
            </div>
            
            <div className="absolute -bottom-8 left-1/4 bg-[#0a0a0a]/80 backdrop-blur-xl border border-white/10 p-5 rounded-2xl shadow-2xl z-20 flex items-center gap-4 animate-[bounce_6s_infinite_0.5s]">
              <div>
                <div className="text-2xl font-black text-white">24/7</div>
                <div className="text-xs text-red-400 font-bold tracking-wider uppercase mt-1">Digital Presence</div>
              </div>
              <div className="w-px h-10 bg-white/10"></div>
              <div>
                <div className="text-2xl font-black text-white">Global</div>
                <div className="text-xs text-red-400 font-bold tracking-wider uppercase mt-1">Reach</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* INTRODUCTION */}
      <section className="py-24 border-t border-white/5 relative z-20 bg-[#050505]">
        <div className="max-w-5xl mx-auto px-6 text-center space-y-12">
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-black leading-tight tracking-tight text-white">
            We design and develop digital experiences with <span className="text-red-500">purpose</span> — combining strategy, creativity and technology to create experiences people remember.
          </h2>
          <div className="flex flex-col items-center justify-center gap-2 text-gray-500 animate-bounce">
            <span className="text-xs font-bold uppercase tracking-widest">Scroll to explore</span>
            <ArrowRight className="w-4 h-4 rotate-90" />
          </div>
        </div>
      </section>

      {/* WHAT WE DO */}
      <section id="services" className="py-32 bg-[#0a0a0a] relative">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-red-900/10 rounded-full blur-[100px] pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="mb-20">
            <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest text-red-500 uppercase mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-red-500"></span>
              WHAT WE DO
            </div>
            <h2 className="text-5xl md:text-6xl font-black tracking-tighter">
              Everything your digital <br/>presence needs.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { num: '01', title: 'Website Design & Development', desc: 'Modern responsive websites built for performance, usability and conversion.' },
              { num: '02', title: 'UI / UX Design', desc: 'Clean, intuitive interfaces designed around real users and their needs.' },
              { num: '03', title: 'Brand Identity', desc: 'Visual systems that make businesses recognizable, premium and memorable.' },
              { num: '04', title: 'SEO & Digital Growth', desc: 'Search-friendly experiences designed to improve visibility and drive traffic.' },
              { num: '05', title: 'Backend & Integrations', desc: 'Powerful functionality, scalable databases and third-party API integrations.' },
              { num: '06', title: 'Automation & AI', desc: 'Smart digital workflows, process automation and AI-powered experiences.' }
            ].map((service, i) => (
              <div key={i} className="bg-white/[0.02] border border-white/5 p-10 rounded-[2rem] hover:bg-white/[0.04] transition-colors group relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-red-600/10 blur-[40px] rounded-full translate-x-1/2 -translate-y-1/2 group-hover:bg-red-500/20 transition-colors"></div>
                <div className="text-red-500 font-mono text-xl font-bold mb-8">{service.num}</div>
                <h3 className="text-2xl font-bold text-white mb-4 pr-4">{service.title}</h3>
                <p className="text-gray-400 leading-relaxed text-sm">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WEBSITE EXPERIENCE SHOWCASE */}
      <section className="py-32 relative border-t border-white/5 bg-[#050505]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="mb-16">
            <h2 className="text-5xl md:text-6xl font-black tracking-tighter leading-[1.1]">
              One platform. <br/><span className="text-gray-500">Endless possibilities.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { title: 'Business Website', img: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=600&q=80' },
              { title: 'School / College Website', img: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=600&q=80' },
              { title: 'E-commerce Website', img: 'https://images.unsplash.com/photo-1472851294608-062f824d29cc?auto=format&fit=crop&w=600&q=80' },
              { title: 'Portfolio Website', img: 'https://images.unsplash.com/photo-1481481600673-c6cb16d4e5f4?auto=format&fit=crop&w=600&q=80' },
              { title: 'Agency Website', img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&q=80' },
              { title: 'Restaurant Website', img: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=600&q=80' },
              { title: 'Real Estate Website', img: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=600&q=80' },
              { title: 'Healthcare Website', img: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=600&q=80' }
            ].map((item, i) => (
              <div key={i} className="group relative rounded-2xl overflow-hidden aspect-[4/5] cursor-pointer">
                <img src={item.img} alt={item.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-60 group-hover:opacity-100" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/40 to-transparent"></div>
                <div className="absolute inset-0 p-6 flex flex-col justify-end">
                  <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                  <div className="flex items-center gap-2 text-red-500 font-bold text-sm opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                    Explore <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* FEATURE SHOWCASE */}
      <section id="features" className="py-32 bg-[#0a0a0a] border-t border-white/5 relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest text-red-500 uppercase mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-red-500"></span>
              WEBSITE FEATURES
            </div>
            <h2 className="text-4xl md:text-5xl font-black tracking-tighter">
              More than just a website.
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[
              'Responsive Design', 'WhatsApp Integration', 'Contact & Enquiry Forms', 'Image Gallery',
              'Video Sections', 'Testimonials', 'Team / Faculty Profiles', 'Events & Announcements',
              'Blog / News', 'Search Functionality', 'Google Maps', 'Social Media Integration',
              'SEO Optimization', 'Analytics', 'Online Forms', 'Payment Integration',
              'Database Integration', 'API Integration', 'User Login / Dashboard', 'Admin Management'
            ].map((feature, i) => (
              <div key={i} className="bg-white/[0.02] border border-white/5 p-6 rounded-2xl flex items-start gap-4 hover:bg-white/[0.05] transition-colors">
                <div className="w-6 h-6 rounded-full bg-red-500/20 text-red-500 flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-3.5 h-3.5" />
                </div>
                <span className="font-medium text-sm text-gray-300">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INTERACTIVE DEMO SECTION */}
      <section className="py-32 bg-[#050505] border-t border-white/5 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[600px] bg-red-600/10 rounded-full blur-[150px] pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-black tracking-tighter">
              See it in action.
            </h2>
          </div>

          <div className="bg-[#0a0a0a] rounded-[2rem] border border-white/10 shadow-[0_0_50px_rgba(0,0,0,0.5)] overflow-hidden">
            {/* Mock Browser Header */}
            <div className="bg-[#111] px-6 py-4 border-b border-white/10 flex items-center gap-4">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              <div className="flex-1 bg-white/5 rounded-md text-center py-1.5 text-xs text-gray-500 font-mono">
                nova-digital-preview.com
              </div>
            </div>
            
            {/* Mock Dashboard / Preview area */}
            <div className="flex flex-col md:flex-row border-b border-white/5">
              <div className="w-full md:w-64 bg-[#0a0a0a] border-r border-white/5 p-6 flex flex-col gap-2">
                <div className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-4">Pages</div>
                {['Home', 'About', 'Services', 'Gallery', 'Events', 'Testimonials', 'Contact'].map(tab => (
                  <button 
                    key={tab}
                    onClick={() => setActiveDemoTab(tab)}
                    className={`text-left px-4 py-3 rounded-xl text-sm font-bold transition-all ${activeDemoTab === tab ? 'bg-red-600 text-white shadow-[0_0_15px_rgba(220,38,38,0.3)]' : 'text-gray-400 hover:text-white hover:bg-white/5'}`}
                  >
                    {tab}
                  </button>
                ))}
              </div>
              
              <div className="flex-1 bg-[#050505] p-8 md:p-12 min-h-[500px] flex items-center justify-center relative overflow-hidden">
                <div key={activeDemoTab} className="animate-in fade-in zoom-in-95 duration-500 w-full h-full">
                  <div className="w-full h-full border border-white/10 rounded-2xl bg-white/[0.02] p-8 flex flex-col items-center justify-center text-center">
                    <LayoutTemplate className="w-16 h-16 text-red-500/50 mb-6" />
                    <h3 className="text-3xl font-black text-white mb-4">{activeDemoTab} Page View</h3>
                    <p className="text-gray-500 max-w-md">
                      In a live presentation, this section dynamically renders the actual high-fidelity components and layouts for the {activeDemoTab.toLowerCase()} page, demonstrating smooth transitions and interactive elements.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROJECT SHOWCASE */}
      <section id="work" className="py-32 bg-[#0a0a0a] border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="mb-20">
            <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest text-red-500 uppercase mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-red-500"></span>
              SELECTED WORK
            </div>
            <h2 className="text-5xl md:text-6xl font-black tracking-tighter leading-[1.1]">
              Designed to make <br/>businesses stand out.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { id: '01', title: 'Education Platform', cat: 'EdTech', img: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=800&q=80', desc: 'A complete digital transformation for a premium educational institute.' },
              { id: '02', title: 'Luxury Restaurant', cat: 'Hospitality', img: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80', desc: 'Immersive visual experience and booking platform for fine dining.' },
              { id: '03', title: 'Real Estate Brand', cat: 'Real Estate', img: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=800&q=80', desc: 'High-end property showcase with virtual tours and lead generation.' },
              { id: '04', title: 'Corporate Business', cat: 'B2B', img: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80', desc: 'Sleek, professional corporate identity and service presentation.' },
              { id: '05', title: 'E-commerce Store', cat: 'Retail', img: 'https://images.unsplash.com/photo-1472851294608-062f824d29cc?auto=format&fit=crop&w=800&q=80', desc: 'Conversion-optimized storefront with seamless payment integrations.' },
              { id: '06', title: 'Creative Portfolio', cat: 'Design', img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80', desc: 'Minimalist showcase for a high-end photography studio.' }
            ].map((proj, i) => (
              <div key={i} className="group cursor-pointer">
                <div className="overflow-hidden rounded-[2rem] aspect-[4/3] mb-8 relative">
                  <img src={proj.img} alt={proj.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-80 group-hover:opacity-100" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 p-8 w-full flex justify-between items-end">
                    <span className="text-red-500 font-mono font-bold text-xl">{proj.id}</span>
                    <button className="w-12 h-12 rounded-full bg-white text-black flex items-center justify-center opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 hover:scale-110">
                      <ArrowRight className="w-5 h-5 -rotate-45" />
                    </button>
                  </div>
                </div>
                <div className="px-2">
                  <div className="text-xs font-bold uppercase tracking-widest text-red-500 mb-2">{proj.cat}</div>
                  <h3 className="text-3xl font-bold text-white mb-3">{proj.title}</h3>
                  <p className="text-gray-400 text-sm max-w-md leading-relaxed">{proj.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT NOVA */}
      <section id="about" className="py-32 bg-[#050505] border-t border-white/5 relative">
        <div className="absolute top-1/2 right-0 w-[600px] h-[600px] bg-red-600/10 rounded-full blur-[120px] pointer-events-none translate-x-1/3"></div>
        <div className="max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center relative z-10">
          <div>
            <h2 className="text-5xl md:text-6xl font-black tracking-tighter leading-[1.1] mb-8">
              Strategy meets <br/>design meets technology.
            </h2>
            <p className="text-xl text-gray-400 leading-relaxed mb-12">
              We don't just build websites. We create digital experiences that communicate, engage and convert. Our team blends creative vision with technical excellence to deliver platforms that drive real business results.
            </p>
            <div className="grid grid-cols-2 gap-8">
              <div>
                <div className="text-5xl font-black text-white mb-2">150<span className="text-red-500">+</span></div>
                <div className="text-xs text-gray-500 font-bold uppercase tracking-widest">Projects</div>
              </div>
              <div>
                <div className="text-5xl font-black text-white mb-2">98<span className="text-red-500">%</span></div>
                <div className="text-xs text-gray-500 font-bold uppercase tracking-widest">Client Satisfaction</div>
              </div>
              <div>
                <div className="text-5xl font-black text-white mb-2">50<span className="text-red-500">+</span></div>
                <div className="text-xs text-gray-500 font-bold uppercase tracking-widest">Brands</div>
              </div>
              <div>
                <div className="text-5xl font-black text-white mb-2">24/7</div>
                <div className="text-xs text-gray-500 font-bold uppercase tracking-widest">Digital Presence</div>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-square rounded-[3rem] overflow-hidden border border-white/10 relative">
              <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80" alt="Team collaborating" className="w-full h-full object-cover opacity-80" />
              <div className="absolute inset-0 bg-gradient-to-tr from-[#050505] to-transparent"></div>
            </div>
            <div className="absolute -bottom-10 -left-10 bg-red-600 p-10 rounded-[2rem] shadow-[0_0_40px_rgba(220,38,38,0.4)]">
              <Sparkles className="w-12 h-12 text-white mb-4" />
              <h3 className="text-white font-bold text-2xl">Award Winning<br/>Digital Agency</h3>
            </div>
          </div>
        </div>
      </section>

      {/* OUR PROCESS */}
      <section id="process" className="py-32 bg-[#0a0a0a] border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-24">
            <h2 className="text-5xl md:text-6xl font-black tracking-tighter">From idea to launch.</h2>
          </div>

          <div className="relative">
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-red-600/0 via-red-600 to-red-600/0 md:-translate-x-1/2"></div>
            <div className="space-y-16 relative z-10">
              {[
                { num: '01', title: 'Discover', desc: 'Understanding the business, goals, and target audience to build a solid foundation.' },
                { num: '02', title: 'Strategy', desc: 'Planning the architecture, user journey, and overall digital experience.' },
                { num: '03', title: 'Design', desc: 'Creating the visual identity, wireframes, and high-fidelity interfaces.' },
                { num: '04', title: 'Develop', desc: 'Turning the design into a fast, responsive, and robust digital product.' },
                { num: '05', title: 'Launch', desc: 'Rigorous testing, optimization, deployment, and going live.' }
              ].map((step, i) => (
                <div key={i} className={`flex flex-col md:flex-row items-start md:items-center gap-8 md:gap-16 ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  <div className="hidden md:block w-1/2"></div>
                  <div className="absolute left-4 md:left-1/2 w-8 h-8 rounded-full bg-[#0a0a0a] border-2 border-red-600 md:-translate-x-1/2 flex items-center justify-center -translate-x-3.5 mt-2 md:mt-0 shadow-[0_0_15px_rgba(220,38,38,0.5)]">
                    <div className="w-2 h-2 rounded-full bg-white"></div>
                  </div>
                  <div className={`pl-12 md:pl-0 md:w-1/2 ${i % 2 === 0 ? 'md:pr-16 md:text-right' : 'md:pl-16'}`}>
                    <div className="text-red-500 font-mono font-bold text-xl mb-2">{step.num} —</div>
                    <h3 className="text-3xl font-black text-white mb-4">{step.title}</h3>
                    <p className="text-gray-400 leading-relaxed text-lg">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-32 bg-[#050505] border-t border-white/5 relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { text: "Nova transformed our online presence completely. The final website feels premium, modern and incredibly easy to use. Our conversion rates have doubled since launch.", name: "Sarah Jenkins", role: "CMO, Lumina Luxury", img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80" },
              { text: "The attention to detail and design aesthetics are unmatched. They didn't just build a website, they elevated our entire brand identity.", name: "Michael Chang", role: "Founder, Apex Capital", img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=200&q=80" }
            ].map((testimonial, i) => (
              <div key={i} className="bg-white/[0.02] border border-white/5 p-12 rounded-[2rem] relative hover:bg-white/[0.04] transition-colors">
                <div className="absolute top-10 right-10 opacity-10">
                  <MessageSquare className="w-20 h-20 text-white" />
                </div>
                <div className="flex gap-1 mb-8">
                  {[1,2,3,4,5].map(star => <Star key={star} className="w-5 h-5 text-red-500 fill-current" />)}
                </div>
                <p className="text-xl md:text-2xl text-gray-300 leading-relaxed mb-10 relative z-10 font-medium">"{testimonial.text}"</p>
                <div className="flex items-center gap-4">
                  <img src={testimonial.img} alt={testimonial.name} className="w-14 h-14 rounded-full object-cover border-2 border-red-600/50" />
                  <div>
                    <h4 className="text-white font-bold text-lg">{testimonial.name}</h4>
                    <p className="text-gray-500 text-sm">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-32 bg-[#0a0a0a] border-t border-white/5">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black tracking-tighter">Frequently Asked Questions</h2>
          </div>
          
          <div className="space-y-4">
            {[
              { q: 'What type of websites can Nova build?', a: 'We build everything from modern corporate websites and premium portfolios to complex e-commerce platforms and custom web applications.' },
              { q: 'Can the website be customized?', a: 'Absolutely. Every digital experience we create is fully custom-designed and tailored to your specific brand identity and business goals.' },
              { q: 'Can WhatsApp and enquiry forms be integrated?', a: 'Yes, we integrate seamless communication tools including WhatsApp floating buttons, custom enquiry forms, and CRM connections to capture leads instantly.' },
              { q: 'Can the website have an admin panel?', a: 'Yes, we can provide a powerful, easy-to-use custom backend or CMS that allows you to manage content, users, and data effortlessly.' },
              { q: 'Can payment gateways be integrated?', a: 'Yes, we integrate secure payment gateways (like Razorpay, Stripe, or PayPal) for e-commerce, subscriptions, or custom billing flows.' },
              { q: 'Can SEO and analytics be added?', a: 'All our websites are built with technical SEO best practices. We also integrate Google Analytics and Facebook Pixel to track user behavior and conversions.' },
              { q: 'Can the website be connected with APIs?', a: 'Yes, we specialize in connecting third-party APIs for real-time data fetching, automation, and complex integrations with existing software.' }
            ].map((faq, i) => (
              <div key={i} className="bg-white/[0.02] border border-white/5 rounded-2xl overflow-hidden">
                <button 
                  onClick={() => toggleFaq(i)}
                  className="w-full px-8 py-6 flex items-center justify-between text-left hover:bg-white/[0.02] transition-colors"
                >
                  <span className="font-bold text-lg text-white">{faq.q}</span>
                  {activeFaq === i ? <Minus className="w-5 h-5 text-red-500 shrink-0" /> : <Plus className="w-5 h-5 text-white shrink-0" />}
                </button>
                {activeFaq === i && (
                  <div className="px-8 pb-6 text-gray-400 leading-relaxed text-sm animate-in fade-in slide-in-from-top-4 duration-300">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section id="contact" className="py-40 bg-[#050505] relative overflow-hidden border-t border-white/5">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(220,38,38,0.15),transparent_50%)]"></div>
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-6xl md:text-8xl font-black tracking-tighter mb-8 text-white">
            Have an idea? <br/>
            <span className="text-red-600">Let's build it.</span>
          </h2>
          <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed">
            Tell us what you want to create and we'll turn your idea into a powerful digital experience that drives growth.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <button className="w-full sm:w-auto bg-red-600 hover:bg-red-700 text-white px-10 py-5 rounded-full font-bold text-lg transition-all flex items-center justify-center gap-2 shadow-[0_0_40px_rgba(220,38,38,0.4)] hover:shadow-[0_0_60px_rgba(220,38,38,0.6)] hover:-translate-y-1">
              Start Your Project <ArrowRight className="w-5 h-5" />
            </button>
            <button className="w-full sm:w-auto bg-white hover:bg-gray-100 text-black px-10 py-5 rounded-full font-bold text-lg transition-all flex items-center justify-center gap-2 hover:-translate-y-1">
              Talk to Nova
            </button>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#0a0a0a] border-t border-white/10 pt-24 pb-12">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            <div className="lg:col-span-2">
              <div className="font-black text-3xl tracking-tighter flex items-center gap-2 mb-6 text-white">
                <div className="w-4 h-4 bg-red-600 rounded-full shadow-[0_0_15px_rgba(220,38,38,0.8)]"></div>
                NOVA
              </div>
              <p className="text-gray-400 text-lg max-w-sm leading-relaxed">
                Digital experiences built for ambitious businesses.
              </p>
            </div>
            
            <div>
              <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-sm">Navigation</h4>
              <ul className="space-y-4 text-gray-400 font-medium">
                <li><a href="#home" className="hover:text-red-500 transition-colors">Home</a></li>
                <li><a href="#about" className="hover:text-red-500 transition-colors">About</a></li>
                <li><a href="#services" className="hover:text-red-500 transition-colors">Services</a></li>
                <li><a href="#work" className="hover:text-red-500 transition-colors">Work</a></li>
                <li><a href="#features" className="hover:text-red-500 transition-colors">Features</a></li>
                <li><a href="#contact" className="hover:text-red-500 transition-colors">Contact</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-sm">Social</h4>
              <ul className="space-y-4 text-gray-400 font-medium">
                <li><a href="#" className="hover:text-red-500 transition-colors flex items-center gap-2">Instagram</a></li>
                <li><a href="#" className="hover:text-red-500 transition-colors flex items-center gap-2">LinkedIn</a></li>
                <li><a href="#" className="hover:text-red-500 transition-colors flex items-center gap-2">Behance</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500 font-medium">
            <div>© {new Date().getFullYear()} Nova Digital Agency. All rights reserved.</div>
            <div className="flex gap-6">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};
