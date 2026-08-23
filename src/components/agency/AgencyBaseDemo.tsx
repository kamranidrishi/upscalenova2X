import React, { useState } from 'react';
import { DemoItem } from '../../data/demos';
import {
  Globe, Smartphone, Check, ArrowRight, Star, Phone, Mail, MapPin,
  MessageCircle, Sparkles, Shield, Clock, Award, Users, ChevronRight,
  ExternalLink, CheckCircle2, Menu, X, Send, Eye, TrendingUp,
  Layers, Code, BarChart3, Zap, ArrowUpRight, Search,
  Briefcase, CheckSquare, MessageSquare, HelpCircle
} from 'lucide-react';

interface AgencyBaseDemoProps {
  demo: DemoItem;
  isMobile: boolean;
  isTablet: boolean;
}

export const AgencyBaseDemo: React.FC<AgencyBaseDemoProps> = ({ isMobile }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<string | null>(null);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [selectedPortfolioModal, setSelectedPortfolioModal] = useState<any | null>(null);

  const [inquiryForm, setInquiryForm] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    service: 'Web & App Development',
    budget: '₹25,000 - ₹40,000',
    notes: ''
  });

  const services = [
    {
      id: 'web-dev',
      title: 'High-Converting Web & App Development',
      badge: 'Core Specialty',
      icon: Code,
      desc: 'Blazing-fast responsive websites and web applications built with modern frameworks to turn organic traffic into paying customers.',
      features: [
        'Lightning 0.5s Page Load Speeds',
        '100% Mobile Responsive Design',
        'Direct WhatsApp & Lead Form Integration',
        'SEO-Optimized Meta & Schema Tags',
        'SSL Security & Cloud Hosting Setup'
      ],
      tag: 'Next.js & React'
    },
    {
      id: 'seo-growth',
      title: 'SEO & Search Engine Dominance',
      badge: 'Rank #1 on Google',
      icon: Search,
      desc: 'Rank at the top of Google searches for high-intent business keywords in your city and industry to capture inbound customer leads.',
      features: [
        'In-Depth Keyword & Competitor Analysis',
        'Google Business Profile Optimization',
        'Technical On-Page & Schema Audit',
        'High-Authority Backlink Acquisition',
        'Monthly Transparent Ranking Reports'
      ],
      tag: 'Organic Growth'
    },
    {
      id: 'perf-ads',
      title: 'Performance Marketing & Social Ads',
      badge: 'Targeted ROI',
      icon: TrendingUp,
      desc: 'High-converting ad campaigns across Meta (Facebook/Instagram) and Google Ads engineered to maximize leads and sales pipeline.',
      features: [
        'Precise Audience Segmentation',
        'High-Converting Ad Creatives & Copy',
        'A/B Split-Testing Framework',
        'Pixel & Conversion API Tracking',
        'Daily Budget Optimization'
      ],
      tag: 'Meta & Google Ads'
    },
    {
      id: 'ui-ux',
      title: 'Brand Identity & UI/UX Product Design',
      badge: 'Pixel Perfect',
      icon: Layers,
      desc: 'Distinguish your brand with memorable logo systems, high-end color palettes, and conversion-centered UI layouts.',
      features: [
        'Modern Visual Brand Identity & Styleguide',
        'Interactive High-Fidelity Prototypes',
        'User Journey & Conversion Wireframes',
        'Custom Vector Graphics & Icons',
        'Complete Typography Hierarchy'
      ],
      tag: 'Figma & Design Systems'
    }
  ];

  const portfolioHighlights = [
    {
      id: 'p1',
      title: 'FinVantage Wealth Advisory',
      category: 'Web App & Fintech',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80',
      client: 'FinVantage Capital',
      scope: 'Responsive Corporate Portal & Calculator',
      result: '+240% Inbound Client Inquiries',
      tags: ['React', 'Modern UI', 'Financial Tech']
    },
    {
      id: 'p2',
      title: 'Aura Luxury Interiors & Living',
      category: 'Brand & E-Commerce',
      image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=800&q=80',
      client: 'Aura Lifestyle Group',
      scope: 'Visual Identity & Product Showcase',
      result: '3.2x Average Engagement Time',
      tags: ['Branding', 'Minimalist', 'Catalog']
    },
    {
      id: 'p3',
      title: 'Nexus Data Cloud Suite',
      category: 'SaaS Platform',
      image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=800&q=80',
      client: 'Nexus Cloud Corp',
      scope: 'Product Landing Page & Signup Funnel',
      result: '+48% Trial Registration Lift',
      tags: ['SaaS Landing', 'High Speed', 'Tailwind']
    },
    {
      id: 'p4',
      title: 'EcoVibe Activewear Store',
      category: 'Performance Marketing',
      image: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=800&q=80',
      client: 'EcoVibe Brands',
      scope: 'Omni-Channel Meta Ad Funnel & Web Page',
      result: '4.2x Return on Ad Spend (ROAS)',
      tags: ['Meta Ads', 'E-Commerce', 'CRO']
    }
  ];

  const stats = [
    { number: '120+', label: 'Digital Projects Delivered' },
    { number: '99.4%', label: 'Client Satisfaction Rate' },
    { number: '3.6x', label: 'Average Client ROI Lift' },
    { number: '14 Days', label: 'Average Delivery Turnaround' }
  ];

  const testimonials = [
    {
      quote: "Nova Digital transformed our brand entirely. Our website loads instantly and our organic leads doubled in the first month of deployment.",
      author: "Rajesh Malhotra",
      role: "Founder & CEO, Malhotra Logistics",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80"
    },
    {
      quote: "The quality of code, attention to detail, and seamless WhatsApp integration made our launch smooth and stress-free. Outstanding team!",
      author: "Priya Sundaram",
      role: "Managing Director, Aura Interiors",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80"
    },
    {
      quote: "Working with Nova Digital gave us a 4.2x return on ad spend within 45 days. They understand conversions better than anyone else.",
      author: "Vikram Mehta",
      role: "Head of Growth, FinVantage Capital",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80"
    }
  ];

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inquiryForm.name || !inquiryForm.phone) return;
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setInquiryForm({
        name: '',
        company: '',
        email: '',
        phone: '',
        service: 'Web & App Development',
        budget: '₹25,000 - ₹40,000',
        notes: ''
      });
    }, 4500);
  };

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const elem = document.getElementById(id);
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="w-full h-full bg-[#0B0F19] text-slate-100 font-sans overflow-y-auto overflow-x-hidden custom-scrollbar">
      {/* Top Banner */}
      <div className="bg-gradient-to-r from-indigo-950 via-slate-900 to-indigo-950 border-b border-indigo-800/40 text-xs py-2 px-4 text-indigo-200">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
            </span>
            <span className="font-medium text-slate-300">Nova Digital Agency — Accepting New Client Projects for Q3/Q4</span>
          </div>
          <div className="flex items-center gap-4 text-xs">
            <a href="tel:+919876543210" className="hover:text-cyan-300 flex items-center gap-1 transition-colors">
              <Phone className="w-3.5 h-3.5 text-cyan-400" /> +91 (800) 244-NOVA
            </a>
            <span className="hidden sm:inline text-slate-600">|</span>
            <span className="hidden sm:flex items-center gap-1 text-slate-400">
              <Clock className="w-3.5 h-3.5 text-indigo-400" /> Mon - Sat: 9:00 AM – 7:30 PM
            </span>
          </div>
        </div>
      </div>

      {/* Main Header / Nav */}
      <header className="sticky top-0 z-40 bg-[#0B0F19]/90 backdrop-blur-md border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
          <div 
            onClick={() => scrollToSection('hero')} 
            className="flex items-center gap-2.5 cursor-pointer group"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-600 to-cyan-500 flex items-center justify-center shadow-lg shadow-indigo-500/20 group-hover:scale-105 transition-transform">
              <Sparkles className="w-5 h-5 text-white" />
            </div>
            <div>
              <span className="text-xl font-black tracking-tight text-white flex items-center gap-1">
                NOVA <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">DIGITAL</span>
              </span>
              <p className="text-[10px] text-slate-400 uppercase tracking-widest font-semibold">Growth & Tech Studio</p>
            </div>
          </div>

          {/* Desktop Nav */}
          {!isMobile && (
            <nav className="flex items-center gap-8 text-sm font-medium text-slate-300">
              <button onClick={() => scrollToSection('services')} className="hover:text-indigo-400 transition-colors">Services</button>
              <button onClick={() => scrollToSection('portfolio')} className="hover:text-indigo-400 transition-colors">Selected Work</button>
              <button onClick={() => scrollToSection('why-us')} className="hover:text-indigo-400 transition-colors">Why Choose Us</button>
              <button onClick={() => scrollToSection('testimonials')} className="hover:text-indigo-400 transition-colors">Client Reviews</button>
              <button onClick={() => scrollToSection('contact')} className="hover:text-indigo-400 transition-colors">Contact</button>
            </nav>
          )}

          {/* Header Action CTA */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => scrollToSection('contact')}
              className="bg-gradient-to-r from-indigo-600 to-cyan-500 hover:from-indigo-500 hover:to-cyan-400 text-white text-xs sm:text-sm font-semibold px-4 sm:px-5 py-2.5 rounded-xl shadow-lg shadow-indigo-600/25 transition-all hover:shadow-indigo-600/40 flex items-center gap-2"
            >
              <span>Get Free Quote</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            {isMobile && (
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 text-slate-300 hover:text-white bg-slate-800/80 rounded-lg border border-slate-700"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            )}
          </div>
        </div>

        {/* Mobile Dropdown */}
        {isMobile && mobileMenuOpen && (
          <div className="px-6 py-4 bg-slate-900 border-b border-slate-800 space-y-3">
            <button onClick={() => scrollToSection('services')} className="block w-full text-left py-2 text-slate-300 hover:text-indigo-400 font-medium">Services</button>
            <button onClick={() => scrollToSection('portfolio')} className="block w-full text-left py-2 text-slate-300 hover:text-indigo-400 font-medium">Selected Work</button>
            <button onClick={() => scrollToSection('why-us')} className="block w-full text-left py-2 text-slate-300 hover:text-indigo-400 font-medium">Why Choose Us</button>
            <button onClick={() => scrollToSection('testimonials')} className="block w-full text-left py-2 text-slate-300 hover:text-indigo-400 font-medium">Client Reviews</button>
            <button onClick={() => scrollToSection('contact')} className="block w-full text-left py-2 text-cyan-400 font-semibold">Start a Project</button>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section id="hero" className="relative pt-12 pb-20 px-4 sm:px-6 overflow-hidden">
        {/* Glow backdrop circles */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-indigo-600/15 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute top-1/3 right-10 w-[300px] h-[300px] bg-cyan-500/10 rounded-full blur-2xl pointer-events-none"></div>

        <div className="max-w-5xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 bg-indigo-900/50 border border-indigo-700/50 px-4 py-1.5 rounded-full text-xs font-semibold text-indigo-300 mb-6 shadow-inner">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span>Full-Service Digital & Performance Agency</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight sm:leading-tight mb-6">
            We Build <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-cyan-300 to-sky-400">High-Growth Digital Experiences</span> That Turn Clicks Into Revenue
          </h1>

          <p className="text-base sm:text-lg text-slate-300 max-w-3xl mx-auto mb-10 leading-relaxed font-normal">
            From lightning-fast custom websites and UI/UX product designs to high-ROI performance marketing campaigns and Google SEO, Nova Digital scales your business with proven digital engineering.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <button
              onClick={() => scrollToSection('contact')}
              className="w-full sm:w-auto bg-gradient-to-r from-indigo-600 to-cyan-500 hover:from-indigo-500 hover:to-cyan-400 text-white font-bold text-base px-8 py-4 rounded-xl shadow-xl shadow-indigo-600/30 hover:shadow-indigo-600/50 transition-all flex items-center justify-center gap-3 group"
            >
              <span>Schedule Free Strategy Call</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              onClick={() => scrollToSection('portfolio')}
              className="w-full sm:w-auto bg-slate-800/90 hover:bg-slate-800 text-slate-200 hover:text-white font-semibold text-base px-8 py-4 rounded-xl border border-slate-700 hover:border-slate-600 transition-all flex items-center justify-center gap-2"
            >
              <Eye className="w-5 h-5 text-indigo-400" />
              <span>Explore Selected Work</span>
            </button>
          </div>

          {/* Key Metric Highlights */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 max-w-4xl mx-auto pt-6 border-t border-slate-800/80">
            {stats.map((stat, idx) => (
              <div key={idx} className="bg-slate-900/60 border border-slate-800/80 rounded-2xl p-4 sm:p-5 backdrop-blur-sm">
                <div className="text-2xl sm:text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-300">
                  {stat.number}
                </div>
                <div className="text-xs sm:text-sm text-slate-400 font-medium mt-1">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section id="services" className="py-20 px-4 sm:px-6 bg-[#080C14] border-t border-b border-slate-800">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="text-xs font-bold uppercase tracking-widest text-indigo-400 mb-2">What We Deliver</div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white">Full-Stack Digital Solutions Engineered for Growth</h2>
            <p className="text-slate-400 text-sm sm:text-base mt-3">
              We eliminate technical bloat and design friction to build powerful online platforms that capture attention and convert visitors.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((svc) => {
              const IconComp = svc.icon;
              const isSelected = selectedService === svc.id;

              return (
                <div
                  key={svc.id}
                  onClick={() => setSelectedService(isSelected ? null : svc.id)}
                  className={`relative bg-slate-900/70 border ${isSelected ? 'border-indigo-500 shadow-indigo-500/10' : 'border-slate-800'} hover:border-slate-700 rounded-2xl p-6 sm:p-8 transition-all shadow-lg flex flex-col justify-between cursor-pointer group`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-5">
                      <div className="w-12 h-12 rounded-xl bg-indigo-950/80 border border-indigo-700/50 flex items-center justify-center text-cyan-400 group-hover:scale-110 transition-transform">
                        <IconComp className="w-6 h-6" />
                      </div>
                      <span className="text-[11px] font-bold px-3 py-1 rounded-full bg-indigo-950 border border-indigo-800 text-indigo-300">
                        {svc.badge}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                      {svc.title}
                    </h3>
                    <p className="text-slate-400 text-sm leading-relaxed mb-6">
                      {svc.desc}
                    </p>

                    <div className="space-y-2.5 mb-6">
                      {svc.features.map((feat, fidx) => (
                        <div key={fidx} className="flex items-center gap-2.5 text-xs text-slate-300">
                          <CheckCircle2 className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between">
                    <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">{svc.tag}</span>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setInquiryForm(prev => ({ ...prev, service: svc.title }));
                        scrollToSection('contact');
                      }}
                      className="text-xs font-bold text-indigo-400 hover:text-cyan-300 flex items-center gap-1.5 transition-colors"
                    >
                      <span>Inquire This Service</span>
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured Portfolio / Case Showcase */}
      <section id="portfolio" className="py-20 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
            <div>
              <div className="text-xs font-bold uppercase tracking-widest text-cyan-400 mb-2">Portfolio & Case Highlights</div>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-white">Proven Track Record Across Industries</h2>
            </div>
            <p className="text-slate-400 text-sm max-w-md">
              Every project is custom engineered for high conversion rates, seamless responsive performance, and measurable commercial ROI.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {portfolioHighlights.map((proj) => (
              <div
                key={proj.id}
                className="bg-slate-900 border border-slate-800 hover:border-slate-700 rounded-2xl overflow-hidden shadow-xl group transition-all"
              >
                <div className="relative h-64 overflow-hidden bg-slate-950">
                  <img
                    src={proj.image}
                    alt={proj.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent"></div>
                  <div className="absolute top-4 left-4">
                    <span className="text-xs font-bold px-3 py-1 rounded-full bg-slate-900/90 backdrop-blur-md border border-slate-700 text-indigo-300">
                      {proj.category}
                    </span>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                    <span className="text-xs font-semibold px-2.5 py-1 rounded bg-cyan-950/80 border border-cyan-700/60 text-cyan-300">
                      {proj.result}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <div className="text-xs font-medium text-slate-400 mb-1">{proj.client}</div>
                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                    {proj.title}
                  </h3>
                  <p className="text-slate-400 text-xs mb-4">
                    {proj.scope}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {proj.tags.map((t, idx) => (
                      <span key={idx} className="text-[11px] font-medium bg-slate-800/80 text-slate-300 px-2.5 py-0.5 rounded">
                        #{t}
                      </span>
                    ))}
                  </div>

                  <button
                    onClick={() => setSelectedPortfolioModal(proj)}
                    className="w-full bg-slate-800 hover:bg-slate-700 text-slate-200 hover:text-white text-xs font-semibold py-2.5 rounded-xl border border-slate-700 flex items-center justify-center gap-2 transition-colors"
                  >
                    <span>View Project Blueprint</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section id="why-us" className="py-20 px-4 sm:px-6 bg-[#080C14] border-t border-b border-slate-800">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="text-xs font-bold uppercase tracking-widest text-indigo-400 mb-2">Our Advantage</div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white">Why Growing Businesses Trust Nova Digital</h2>
            <p className="text-slate-400 text-sm sm:text-base mt-3">
              We blend engineering rigor with conversion psychology to deliver measurable growth.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-slate-900/60 border border-slate-800 p-6 rounded-2xl">
              <div className="w-10 h-10 rounded-xl bg-indigo-950 flex items-center justify-center text-indigo-400 mb-4 border border-indigo-800/60">
                <Zap className="w-5 h-5" />
              </div>
              <h4 className="text-base font-bold text-white mb-2">Ultra-Fast 14-Day Delivery</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                Structured agile sprint cycles ensure your website or digital campaign launches on time without delays or surprise costs.
              </p>
            </div>

            <div className="bg-slate-900/60 border border-slate-800 p-6 rounded-2xl">
              <div className="w-10 h-10 rounded-xl bg-indigo-950 flex items-center justify-center text-cyan-400 mb-4 border border-indigo-800/60">
                <Smartphone className="w-5 h-5" />
              </div>
              <h4 className="text-base font-bold text-white mb-2">Mobile-First Responsiveness</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                Over 78% of your customers visit on mobile. Every layout is mathematically balanced for smooth finger tapping and instant load.
              </p>
            </div>

            <div className="bg-slate-900/60 border border-slate-800 p-6 rounded-2xl">
              <div className="w-10 h-10 rounded-xl bg-indigo-950 flex items-center justify-center text-indigo-400 mb-4 border border-indigo-800/60">
                <Shield className="w-5 h-5" />
              </div>
              <h4 className="text-base font-bold text-white mb-2">100% Code & Asset Ownership</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                No monthly vendor lock-ins or hidden royalties. You own your full source code, domain assets, Figma designs, and ad accounts.
              </p>
            </div>

            <div className="bg-slate-900/60 border border-slate-800 p-6 rounded-2xl">
              <div className="w-10 h-10 rounded-xl bg-indigo-950 flex items-center justify-center text-cyan-400 mb-4 border border-indigo-800/60">
                <BarChart3 className="w-5 h-5" />
              </div>
              <h4 className="text-base font-bold text-white mb-2">Data-Driven Lead Tracking</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                Integrated Google Analytics 4, Meta Pixel, and direct CRM form routing so you know exact lead sources and customer conversions.
              </p>
            </div>

            <div className="bg-slate-900/60 border border-slate-800 p-6 rounded-2xl">
              <div className="w-10 h-10 rounded-xl bg-indigo-950 flex items-center justify-center text-indigo-400 mb-4 border border-indigo-800/60">
                <MessageCircle className="w-5 h-5" />
              </div>
              <h4 className="text-base font-bold text-white mb-2">Direct WhatsApp Automation</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                Enable 1-click customer chats directly from your website into your sales team WhatsApp, speeding up response times by 80%.
              </p>
            </div>

            <div className="bg-slate-900/60 border border-slate-800 p-6 rounded-2xl">
              <div className="w-10 h-10 rounded-xl bg-indigo-950 flex items-center justify-center text-cyan-400 mb-4 border border-indigo-800/60">
                <Award className="w-5 h-5" />
              </div>
              <h4 className="text-base font-bold text-white mb-2">Post-Launch Warranty & Support</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                Includes dedicated 30-day post-launch technical warranty, security patching, DNS monitoring, and content updates assistance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-20 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="text-xs font-bold uppercase tracking-widest text-cyan-400 mb-2">Verified Client Reviews</div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white">What Founders Say About Nova</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t, idx) => (
              <div key={idx} className="bg-slate-900/80 border border-slate-800 p-6 sm:p-7 rounded-2xl flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-1 mb-4 text-amber-400">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>
                  <p className="text-slate-300 text-sm leading-relaxed italic mb-6">
                    "{t.quote}"
                  </p>
                </div>

                <div className="flex items-center gap-3 pt-4 border-t border-slate-800">
                  <img
                    src={t.avatar}
                    alt={t.author}
                    referrerPolicy="no-referrer"
                    className="w-10 h-10 rounded-full object-cover border border-slate-700"
                  />
                  <div>
                    <div className="text-sm font-bold text-white">{t.author}</div>
                    <div className="text-xs text-slate-400">{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact / Project Scope Form */}
      <section id="contact" className="py-20 px-4 sm:px-6 bg-[#080C14] border-t border-slate-800">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            {/* Left Col Info */}
            <div className="lg:col-span-5 space-y-6">
              <div className="text-xs font-bold uppercase tracking-widest text-indigo-400">Get in Touch</div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white leading-snug">
                Let's Build Your Next Digital Growth Engine
              </h2>
              <p className="text-slate-400 text-sm leading-relaxed">
                Tell us about your business goals. We will prepare a detailed scope breakdown, technical recommendation, and transparent pricing quotation within 24 hours.
              </p>

              <div className="space-y-4 pt-4">
                <div className="flex items-center gap-3.5 text-sm text-slate-300">
                  <div className="w-9 h-9 rounded-lg bg-slate-800 border border-slate-700 flex items-center justify-center text-cyan-400">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[11px] text-slate-400">Call Direct</div>
                    <div className="font-semibold text-white">+91 (800) 244-NOVA</div>
                  </div>
                </div>

                <div className="flex items-center gap-3.5 text-sm text-slate-300">
                  <div className="w-9 h-9 rounded-lg bg-slate-800 border border-slate-700 flex items-center justify-center text-indigo-400">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[11px] text-slate-400">Email Proposals</div>
                    <div className="font-semibold text-white">hello@novadigital.agency</div>
                  </div>
                </div>

                <div className="flex items-center gap-3.5 text-sm text-slate-300">
                  <div className="w-9 h-9 rounded-lg bg-slate-800 border border-slate-700 flex items-center justify-center text-cyan-400">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[11px] text-slate-400">Studio Office</div>
                    <div className="font-semibold text-white">Level 4, Cyber City Hub, Bangalore</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Col Form */}
            <div className="lg:col-span-7 bg-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-8 shadow-xl">
              {formSubmitted ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto">
                    <Check className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold text-white">Inquiry Received Successfully!</h3>
                  <p className="text-slate-300 text-sm max-w-sm mx-auto">
                    Thank you {inquiryForm.name || 'for reaching out'}. Our Lead Digital Strategist will review your project scope and connect with you shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} className="space-y-4">
                  <h3 className="text-lg font-bold text-white mb-2">Request a Scope & Cost Breakdown</h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1">Your Full Name *</label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Rahul Sharma"
                        value={inquiryForm.name}
                        onChange={(e) => setInquiryForm({ ...inquiryForm, name: e.target.value })}
                        className="w-full bg-slate-950 border border-slate-700 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-indigo-500"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1">Company / Brand</label>
                      <input
                        type="text"
                        placeholder="e.g. Apex Global Corp"
                        value={inquiryForm.company}
                        onChange={(e) => setInquiryForm({ ...inquiryForm, company: e.target.value })}
                        className="w-full bg-slate-950 border border-slate-700 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-indigo-500"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1">Phone Number *</label>
                      <input
                        type="tel"
                        required
                        placeholder="+91 98765 43210"
                        value={inquiryForm.phone}
                        onChange={(e) => setInquiryForm({ ...inquiryForm, phone: e.target.value })}
                        className="w-full bg-slate-950 border border-slate-700 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-indigo-500"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1">Email Address</label>
                      <input
                        type="email"
                        placeholder="rahul@example.com"
                        value={inquiryForm.email}
                        onChange={(e) => setInquiryForm({ ...inquiryForm, email: e.target.value })}
                        className="w-full bg-slate-950 border border-slate-700 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-indigo-500"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1">Primary Requirement</label>
                      <select
                        value={inquiryForm.service}
                        onChange={(e) => setInquiryForm({ ...inquiryForm, service: e.target.value })}
                        className="w-full bg-slate-950 border border-slate-700 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-indigo-500"
                      >
                        <option>Web & App Development</option>
                        <option>SEO & Google Growth</option>
                        <option>Performance Meta & Google Ads</option>
                        <option>UI/UX Product Design & Branding</option>
                        <option>Full Digital Overhaul</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1">Estimated Budget Tier</label>
                      <select
                        value={inquiryForm.budget}
                        onChange={(e) => setInquiryForm({ ...inquiryForm, budget: e.target.value })}
                        className="w-full bg-slate-950 border border-slate-700 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-indigo-500"
                      >
                        <option>₹25,000 - ₹40,000 (Base Plan)</option>
                        <option>₹40,000 - ₹75,000 (Pro Plan)</option>
                        <option>₹75,000+ (Max Enterprise)</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">Project Details / Goals</label>
                    <textarea
                      rows={3}
                      placeholder="Briefly describe what you are looking to build or achieve..."
                      value={inquiryForm.notes}
                      onChange={(e) => setInquiryForm({ ...inquiryForm, notes: e.target.value })}
                      className="w-full bg-slate-950 border border-slate-700 rounded-xl p-3 text-sm text-white focus:outline-none focus:border-indigo-500 resize-none"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-indigo-600 to-cyan-500 hover:from-indigo-500 hover:to-cyan-400 text-white font-bold text-sm py-3.5 rounded-xl shadow-lg shadow-indigo-600/30 transition-all flex items-center justify-center gap-2"
                  >
                    <Send className="w-4 h-4" />
                    <span>Submit Project Scope Inquiry</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 border-t border-slate-800 py-10 px-4 sm:px-6 text-xs text-slate-400">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-indigo-600 flex items-center justify-center text-white">
              <Sparkles className="w-4 h-4" />
            </div>
            <span className="font-bold text-white text-sm">NOVA DIGITAL AGENCY</span>
          </div>
          <div>
            © {new Date().getFullYear()} Nova Digital Agency. All rights reserved. High-Growth Web Engineering.
          </div>
          <div className="flex items-center gap-4 text-slate-400">
            <button onClick={() => scrollToSection('services')} className="hover:text-white">Services</button>
            <button onClick={() => scrollToSection('portfolio')} className="hover:text-white">Work</button>
            <button onClick={() => scrollToSection('contact')} className="hover:text-white">Contact</button>
          </div>
        </div>
      </footer>

      {/* Project Detail Modal */}
      {selectedPortfolioModal && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-slate-900 border border-slate-800 rounded-2xl max-w-lg w-full p-6 relative shadow-2xl">
            <button
              onClick={() => setSelectedPortfolioModal(null)}
              className="absolute top-4 right-4 text-slate-400 hover:text-white p-1 bg-slate-800 rounded-lg"
            >
              <X className="w-5 h-5" />
            </button>

            <img
              src={selectedPortfolioModal.image}
              alt={selectedPortfolioModal.title}
              referrerPolicy="no-referrer"
              className="w-full h-48 object-cover rounded-xl mb-4"
            />

            <div className="text-xs font-bold text-cyan-400 uppercase mb-1">{selectedPortfolioModal.category}</div>
            <h3 className="text-lg font-bold text-white mb-2">{selectedPortfolioModal.title}</h3>
            <p className="text-xs text-slate-300 mb-4">{selectedPortfolioModal.scope}</p>

            <div className="bg-indigo-950/60 border border-indigo-800/60 rounded-xl p-3.5 mb-5 flex items-center justify-between">
              <span className="text-xs font-medium text-slate-300">Verified Outcome:</span>
              <span className="text-xs font-bold text-cyan-300">{selectedPortfolioModal.result}</span>
            </div>

            <button
              onClick={() => {
                setSelectedPortfolioModal(null);
                scrollToSection('contact');
              }}
              className="w-full bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-bold py-3 rounded-xl transition-colors"
            >
              Request Similar Project Architecture
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
