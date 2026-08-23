import re

content = """import React, { useState } from 'react';
import { DemoItem, PlanType } from '../data/demos';
import { PRICING_PLANS } from '../data/content';
import { 
  GraduationCap, MapPin, Phone, Mail, BookOpen, Users, Calendar, Award, 
  ChevronRight, CheckCircle2, Menu, X, Lock, FileText, Download, 
  Clock, ArrowRight, UserCircle, LogIn, CreditCard, LayoutDashboard, 
  Bus, Book, FileSpreadsheet, AlertCircle, TrendingUp, Search, Link,
  PlayCircle, Image as ImageIcon, Map, Navigation, MessageCircle, Star, Quote, Heart, Shield, Monitor, Globe, Info
} from 'lucide-react';

const basePrice = PRICING_PLANS.find(p => p.id === 'base')?.price || '₹24,999';
const proPrice = PRICING_PLANS.find(p => p.id === 'pro')?.price || '₹39,999';
const maxPrice = PRICING_PLANS.find(p => p.id === 'max')?.price || '₹59,999';

const galleryImages = [
  { id: 1, category: 'Campus', url: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=800&q=80', title: 'Main Building' },
  { id: 2, category: 'Classrooms', url: 'https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=800&q=80', title: 'Smart Classroom' },
  { id: 3, category: 'Sports', url: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&w=800&q=80', title: 'Athletics Track' },
  { id: 4, category: 'Events', url: 'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=800&q=80', title: 'Annual Day Function' },
  { id: 5, category: 'Campus', url: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=800&q=80', title: 'Library' },
  { id: 6, category: 'Faculty', url: 'https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&w=800&q=80', title: 'Science Department' },
  { id: 7, category: 'Student Activities', url: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=800&q=80', title: 'Art Class' },
  { id: 8, category: 'Classrooms', url: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&w=800&q=80', title: 'Computer Lab' },
];

export const SchoolDemo: React.FC<{
  demo: DemoItem;
  isMobile: boolean;
  isTablet: boolean;
  onPlanChange?: (plan: PlanType) => void;
}> = ({ demo, isMobile, isTablet, onPlanChange }) => {
  const plan = demo.plan;
  const isBase = plan === "Base";
  const isPro = plan === "Pro" || plan === "Max";
  const isMax = plan === "Max";

  const [activeTab, setActiveTab] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [galleryCategory, setGalleryCategory] = useState('All');
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);

  const handleNav = (tab: string) => {
    setActiveTab(tab);
    setMobileMenuOpen(false);
    window.scrollTo(0, 0);
  };

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About Us' },
    { id: 'academics', label: 'Academics' },
    { id: 'admissions', label: 'Admissions' },
    { id: 'events', label: 'Events' },
    { id: 'gallery', label: 'Gallery' },
    { id: 'contact', label: 'Contact & Map' },
  ];

  const colors = {
    navy: 'bg-[#0A192F]',
    navyText: 'text-[#0A192F]',
    royal: 'bg-[#1D4ED8]',
    royalText: 'text-[#1D4ED8]',
    royalHover: 'hover:bg-[#1E40AF]',
    gold: 'text-[#D4AF37]',
    goldBg: 'bg-[#D4AF37]',
    goldHover: 'hover:bg-[#B8962E]',
    goldBorder: 'border-[#D4AF37]',
  };

  return (
    <div className="w-full h-full bg-slate-50 text-slate-800 overflow-y-auto overflow-x-hidden font-sans custom-scrollbar relative">
      
      {/* Lightbox */}
      {lightboxImage && (
        <div className="fixed inset-0 z-[100] bg-[#0A192F]/95 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in duration-200">
          <button 
            onClick={() => setLightboxImage(null)}
            className="absolute top-6 right-6 w-12 h-12 bg-white/10 hover:bg-white/20 text-white rounded-full flex items-center justify-center transition-colors shadow-lg"
          >
            <X className="w-6 h-6" />
          </button>
          <img src={lightboxImage} alt="Preview" className="max-w-full max-h-[90vh] object-contain rounded-xl shadow-2xl animate-in zoom-in-95 duration-300" />
        </div>
      )}

      {/* Topbar */}
      <div className={`${colors.navy} text-slate-300 text-xs px-4 md:px-8 py-2.5 flex justify-between items-center border-b border-slate-700`}>
        <div className="flex gap-4">
          <span className="flex items-center gap-1.5 hover:text-white transition-colors cursor-pointer">
            <Phone className={`w-3 h-3 ${colors.gold}`} /> +91 (123) 456-7890
          </span>
          <span className="hidden sm:inline-flex items-center gap-1.5 hover:text-white transition-colors cursor-pointer">
            <Mail className={`w-3 h-3 ${colors.gold}`} /> admissions@brightfuture.edu
          </span>
        </div>
        <div className={`${colors.gold} font-bold uppercase tracking-wider hidden sm:block text-[10px]`}>
          Admissions Open 2026-27 | Apply Now
        </div>
      </div>

      {/* Header */}
      <header className="px-4 md:px-8 py-5 flex items-center justify-between sticky top-0 z-50 bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-200">
        <button onClick={() => handleNav('home')} className={`text-2xl font-black ${colors.navyText} flex items-center gap-3 group`}>
          <div className={`${colors.royal} p-2.5 rounded-xl group-hover:scale-105 transition-transform shadow-lg`}>
            <GraduationCap className="w-6 h-6 text-white" />
          </div>
          <span className="hidden sm:block font-serif tracking-tight">BrightFuture <span className={colors.royalText}>School</span></span>
        </button>

        {/* Desktop Nav */}
        {!isMobile && !isTablet && (
          <nav className="flex items-center gap-6 lg:gap-8 text-sm font-bold text-slate-700 tracking-wide">
            {navLinks.map(link => (
              <button 
                key={link.id} 
                onClick={() => handleNav(link.id)}
                className={`flex items-center gap-1.5 hover:${colors.royalText} transition-colors ${activeTab === link.id ? colors.royalText : ''} relative py-2`}
              >
                {link.label}
                {activeTab === link.id && (
                  <span className={`absolute bottom-0 left-0 w-full h-0.5 ${colors.goldBg} rounded-t-full`} />
                )}
              </button>
            ))}
            <button 
              onClick={() => handleNav('admissions')}
              className={`${colors.royal} ${colors.royalHover} text-white px-6 py-3 rounded-full font-bold transition-all shadow-lg shadow-blue-900/20 ml-2 border border-blue-600`}
            >
              Enquire Now
            </button>
          </nav>
        )}

        {/* Mobile Toggle */}
        {(isMobile || isTablet) && (
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className={`p-2 ${colors.navyText}`}>
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        )}
      </header>

      {/* Mobile Menu */}
      {(isMobile || isTablet) && mobileMenuOpen && (
        <div className="fixed inset-0 top-[76px] bg-white z-40 p-6 flex flex-col gap-2 overflow-y-auto pb-24 shadow-xl">
          {navLinks.map(link => (
            <button 
              key={link.id} 
              onClick={() => handleNav(link.id)}
              className={`text-left text-lg font-bold p-4 rounded-xl ${activeTab === link.id ? 'bg-blue-50 text-blue-700' : 'text-slate-700 hover:bg-slate-50'}`}
            >
              {link.label}
            </button>
          ))}
          <button 
            onClick={() => handleNav('admissions')}
            className={`w-full ${colors.royal} text-white p-4 rounded-xl font-bold mt-6 shadow-lg`}
          >
            Enquire Now
          </button>
        </div>
      )}

      <main className="animate-in fade-in duration-500">
        
        {/* =========================================================================
            HOME TAB
        ========================================================================= */}
        {activeTab === 'home' && (
          <div className="pb-20">
            {/* HERO SECTION */}
            <section className="relative w-full flex items-center justify-center min-h-[85vh]">
              <img src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=2000&q=80" alt="Campus Students" className="absolute inset-0 w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-r from-[#0A192F]/90 via-[#0A192F]/70 to-[#0A192F]/40"></div>
              <div className="relative z-10 w-full max-w-7xl mx-auto px-6 pt-16 pb-20">
                <div className="max-w-3xl space-y-6">
                  <span className={`inline-block px-4 py-1.5 bg-white/10 text-white font-bold text-xs uppercase tracking-widest rounded-full backdrop-blur-md border border-white/20 mb-2`}>
                    <span className={colors.gold}>★</span> A Tradition of Excellence
                  </span>
                  <h1 className="font-serif font-black text-white leading-[1.1] text-5xl md:text-7xl lg:text-8xl">
                    Shaping the <br/>
                    <span className={colors.gold}>Leaders of Tomorrow</span>
                  </h1>
                  <p className="text-lg md:text-xl text-slate-300 max-w-2xl font-medium leading-relaxed">
                    Providing world-class holistic education from Kindergarten to High School. Discover a nurturing environment that inspires excellence.
                  </p>
                  <div className="flex flex-col sm:flex-row items-center gap-4 pt-8">
                    <button onClick={() => handleNav('admissions')} className={`${colors.royal} ${colors.royalHover} text-white font-bold px-8 py-4 rounded-full transition-all shadow-lg shadow-blue-900/30 flex items-center justify-center gap-2 w-full sm:w-auto text-lg`}>
                      Apply for Admission <ChevronRight className="w-5 h-5" />
                    </button>
                    <button onClick={() => handleNav('about')} className="bg-white hover:bg-slate-100 text-[#0A192F] font-bold px-8 py-4 rounded-full transition-all flex items-center justify-center gap-2 w-full sm:w-auto text-lg shadow-xl">
                      Learn More <Info className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
            </section>

            {/* QUICK STATS */}
            <section className="bg-white border-b border-slate-200 relative z-20 -mt-10 mx-6 rounded-2xl shadow-xl max-w-7xl lg:mx-auto">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 p-8 text-center divide-x divide-slate-100">
                <div className="flex flex-col items-center justify-center">
                  <div className={`text-4xl font-black ${colors.navyText} mb-2`}>100%</div>
                  <div className="text-slate-500 text-xs font-bold uppercase tracking-wider">Pass Rate</div>
                </div>
                <div className="flex flex-col items-center justify-center">
                  <div className={`text-4xl font-black ${colors.navyText} mb-2`}>35+</div>
                  <div className="text-slate-500 text-xs font-bold uppercase tracking-wider">Acres Campus</div>
                </div>
                <div className="flex flex-col items-center justify-center">
                  <div className={`text-4xl font-black ${colors.navyText} mb-2`}>15:1</div>
                  <div className="text-slate-500 text-xs font-bold uppercase tracking-wider">Student-Teacher Ratio</div>
                </div>
                <div className="flex flex-col items-center justify-center">
                  <div className={`text-4xl font-black ${colors.navyText} mb-2`}>150+</div>
                  <div className="text-slate-500 text-xs font-bold uppercase tracking-wider">Awards Won</div>
                </div>
              </div>
            </section>

            {/* ABOUT US */}
            <section className="py-24 px-6 bg-slate-50">
              <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <div className="relative">
                  <div className="aspect-[4/3] rounded-[2rem] overflow-hidden shadow-2xl">
                    <img src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1000&q=80" alt="Campus Life" className="w-full h-full object-cover" />
                  </div>
                  {isPro && (
                    <div className={`absolute -bottom-8 -right-8 ${colors.navy} text-white p-8 rounded-3xl shadow-2xl max-w-xs hidden md:block border-8 border-slate-50`}>
                      <Quote className={`w-10 h-10 mb-4 ${colors.gold}`} />
                      <p className="font-bold text-lg leading-snug">"Empowering minds and building character since 1995."</p>
                      <div className="mt-4 text-sm text-slate-400">Dr. Sarah Jenkins, Principal</div>
                    </div>
                  )}
                </div>
                <div className="space-y-6">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="w-12 h-0.5 bg-blue-600 rounded"></span>
                    <h4 className={`${colors.royalText} font-bold uppercase tracking-widest text-sm`}>About Our School</h4>
                  </div>
                  <h2 className={`text-4xl md:text-5xl font-serif font-black ${colors.navyText} leading-[1.2]`}>Where Tradition Meets Modern Education</h2>
                  <p className="text-slate-600 text-lg leading-relaxed">
                    BrightFuture School is dedicated to fostering a learning environment that is nurturing, innovative, and deeply rooted in core values. We prepare our students not just for examinations, but for life.
                  </p>
                  <ul className="space-y-4 pt-4">
                    {['Holistic Development Approach', 'State-of-the-Art Infrastructure', 'Focus on Values and Ethics', 'Global Curriculum Standards'].map((item, i) => (
                      <li key={i} className="flex items-center gap-3 text-slate-700 font-bold">
                        <CheckCircle2 className={`w-6 h-6 ${colors.gold}`} /> {item}
                      </li>
                    ))}
                  </ul>
                  <div className="pt-8">
                    <button onClick={() => handleNav('about')} className={`${colors.navy} hover:bg-slate-800 text-white font-bold px-8 py-4 rounded-full transition-all shadow-xl`}>
                      Read Our Full Story
                    </button>
                  </div>
                </div>
              </div>
            </section>

            {/* ACADEMICS */}
            <section className="py-24 px-6 bg-white">
              <div className="max-w-7xl mx-auto">
                <div className="text-center max-w-3xl mx-auto mb-16">
                  <div className="flex items-center justify-center gap-3 mb-4">
                    <span className="w-8 h-0.5 bg-blue-600 rounded"></span>
                    <h4 className={`${colors.royalText} font-bold uppercase tracking-widest text-sm`}>Academic Journey</h4>
                    <span className="w-8 h-0.5 bg-blue-600 rounded"></span>
                  </div>
                  <h2 className={`text-4xl md:text-5xl font-serif font-black ${colors.navyText} mb-6`}>Our Academic Programs</h2>
                  <p className="text-slate-500 text-lg">We provide a seamless and comprehensive educational pathway from early childhood to high school graduation.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                  {[
                    { title: 'Pre-Primary / KG', levels: 'Nursery, LKG, UKG', desc: 'Focusing on play-way methodology, motor skills, and early cognitive development in a safe, loving environment.', img: 'https://images.unsplash.com/photo-1587691592099-24045742c181?auto=format&fit=crop&w=600&q=80' },
                    { title: 'Primary', levels: 'Grade 1 to 5', desc: 'Building strong foundational skills in languages, mathematics, and sciences through experiential learning.', img: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=600&q=80' },
                    { title: 'Middle School', levels: 'Grade 6 to 8', desc: 'Encouraging independent thinking, analytical skills, and deeper exploration of academic subjects.', img: 'https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?auto=format&fit=crop&w=600&q=80' },
                    { title: 'Secondary', levels: 'Grade 9 to 10', desc: 'Rigorous board-focused preparation with comprehensive career counseling and advanced practical labs.', img: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=600&q=80' }
                  ].map((prog, i) => (
                    <div key={i} className="bg-slate-50 rounded-3xl overflow-hidden border border-slate-100 hover:shadow-2xl transition-all duration-300 group">
                      <div className="h-48 overflow-hidden relative">
                        <img src={prog.img} alt={prog.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent"></div>
                        <div className={`absolute bottom-4 left-4 ${colors.goldBg} text-[#0A192F] text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider`}>
                          {prog.levels}
                        </div>
                      </div>
                      <div className="p-8">
                        <h3 className={`text-2xl font-black ${colors.navyText} mb-4`}>{prog.title}</h3>
                        <p className="text-slate-600 mb-6 leading-relaxed line-clamp-3">{prog.desc}</p>
                        <button onClick={() => handleNav('academics')} className={`${colors.royalText} font-bold flex items-center gap-2 hover:gap-3 transition-all`}>
                          Explore Curriculum <ArrowRight className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* FACILITIES */}
            <section className={`py-24 px-6 ${colors.navy} text-white relative overflow-hidden`}>
              <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-600/10 rounded-full blur-[100px] translate-x-1/2 -translate-y-1/4 pointer-events-none"></div>
              <div className="max-w-7xl mx-auto relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-16">
                  <h4 className={`${colors.gold} font-bold uppercase tracking-widest text-sm mb-4`}>Campus Infrastructure</h4>
                  <h2 className="text-4xl md:text-5xl font-serif font-black text-white mb-6">World-Class Facilities</h2>
                  <p className="text-slate-300 text-lg">Our campus is equipped with modern amenities designed to support a holistic educational experience.</p>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                  {[
                    { name: 'Smart Classrooms', desc: 'Interactive boards and digital learning tools.', icon: Monitor },
                    { name: 'Science Labs', desc: 'Advanced Physics, Chemistry, and Biology labs.', icon: Award },
                    { name: 'Computer Lab', desc: 'High-speed internet and modern coding curriculum.', icon: Globe },
                    { name: 'Central Library', desc: 'Over 20,000 books, journals, and digital resources.', icon: Book },
                    { name: 'Sports Ground', desc: 'Track, football field, basketball and tennis courts.', icon: Heart },
                    { name: 'Transport', desc: 'GPS-enabled fleet of buses covering all major routes.', icon: Bus }
                  ].map((fac, i) => (
                    <div key={i} className="bg-white/5 border border-white/10 p-8 rounded-3xl backdrop-blur-sm hover:bg-white/10 transition-colors">
                      <div className={`w-14 h-14 ${colors.royal} rounded-2xl flex items-center justify-center mb-6`}>
                        <fac.icon className="w-7 h-7 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-3">{fac.name}</h3>
                      <p className="text-slate-400 leading-relaxed">{fac.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* PRO FEATURES: FACULTY, ACHIEVEMENTS, NEWS */}
            {(isPro || isMax) ? (
              <>
                {/* ACHIEVEMENTS */}
                <section className="py-20 px-6 bg-slate-50 border-b border-slate-200">
                   <div className="max-w-7xl mx-auto">
                     <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
                       <div className="lg:col-span-1 space-y-6">
                         <h4 className={`${colors.royalText} font-bold uppercase tracking-widest text-sm`}>Recognition</h4>
                         <h2 className={`text-4xl font-serif font-black ${colors.navyText} leading-tight`}>Our Proud Achievements</h2>
                         <p className="text-slate-600 text-lg">Consistently recognized for excellence in academics and co-curricular activities at state and national levels.</p>
                       </div>
                       <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6">
                         <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-lg">
                           <Award className={`w-12 h-12 ${colors.gold} mb-6`} />
                           <h3 className="text-2xl font-black text-slate-900 mb-2">#1 Best School</h3>
                           <p className="text-slate-500">Ranked #1 in the district for academic excellence by the Education Board.</p>
                         </div>
                         <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-lg">
                           <Star className={`w-12 h-12 ${colors.gold} mb-6`} />
                           <h3 className="text-2xl font-black text-slate-900 mb-2">Sports Champions</h3>
                           <p className="text-slate-500">Gold medalists in the State Level Athletics Meet 2025.</p>
                         </div>
                       </div>
                     </div>
                   </div>
                </section>

                {/* FACULTY */}
                <section className="py-24 px-6 bg-white">
                  <div className="max-w-7xl mx-auto">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                      <h4 className={`${colors.royalText} font-bold uppercase tracking-widest text-sm mb-4`}>Our Mentors</h4>
                      <h2 className={`text-4xl md:text-5xl font-serif font-black ${colors.navyText} mb-6`}>Experienced Faculty</h2>
                      <p className="text-slate-500 text-lg">Learn from highly qualified educators dedicated to student success.</p>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                      {[
                        { name: 'Dr. Sarah Jenkins', role: 'Principal', img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80' },
                        { name: 'Michael Chang', role: 'Head of Mathematics', img: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=400&q=80' },
                        { name: 'Emily Davis', role: 'Senior Science Teacher', img: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=400&q=80' },
                        { name: 'David Wilson', role: 'Sports Director', img: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=400&q=80' }
                      ].map((faculty, i) => (
                        <div key={i} className="group cursor-pointer">
                          <div className="aspect-[4/5] rounded-3xl overflow-hidden mb-6 relative shadow-lg">
                            <img src={faculty.img} alt={faculty.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                          </div>
                          <h3 className={`text-xl font-black ${colors.navyText} text-center`}>{faculty.name}</h3>
                          <p className={`text-sm ${colors.royalText} font-bold text-center mt-1`}>{faculty.role}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </section>

                {/* EVENTS & LATEST NEWS */}
                <section className="py-24 px-6 bg-slate-50">
                  <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
                    {/* Events */}
                    <div>
                      <div className="flex justify-between items-end mb-10">
                        <h2 className={`text-3xl font-serif font-black ${colors.navyText}`}>Upcoming Events</h2>
                        <button onClick={() => handleNav('events')} className={`${colors.royalText} font-bold hover:underline`}>View All</button>
                      </div>
                      <div className="space-y-6">
                        {[
                          { day: '15', month: 'Nov', title: 'Annual Science Exhibition', desc: 'Students showcase their innovative science projects.' },
                          { day: '22', month: 'Nov', title: 'Inter-School Sports Meet', desc: 'Annual sports competition at the main athletic ground.' },
                          { day: '05', month: 'Dec', title: 'Parent-Teacher Meeting', desc: 'Term 1 progress review for all grades.' }
                        ].map((evt, i) => (
                          <div key={i} className="flex gap-6 bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                            <div className={`w-20 shrink-0 ${colors.navy} text-white rounded-xl flex flex-col items-center justify-center py-3`}>
                              <div className="text-2xl font-black">{evt.day}</div>
                              <div className="text-sm font-bold uppercase tracking-widest">{evt.month}</div>
                            </div>
                            <div>
                              <h3 className={`text-xl font-bold ${colors.navyText} mb-2`}>{evt.title}</h3>
                              <p className="text-slate-500 text-sm leading-relaxed">{evt.desc}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Latest News */}
                    <div>
                      <div className="flex justify-between items-end mb-10">
                        <h2 className={`text-3xl font-serif font-black ${colors.navyText}`}>Latest News</h2>
                      </div>
                      <div className="grid grid-cols-1 gap-6">
                        {[
                          { tag: 'Academics', title: 'BrightFuture students top the regional board exams with 99% scores.', img: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=400&q=80' },
                          { tag: 'Admissions', title: 'Admissions for Academic Year 2026-27 are now officially open.', img: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=400&q=80' }
                        ].map((news, i) => (
                          <div key={i} className="flex gap-6 bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden hover:shadow-md transition-shadow group">
                            <div className="w-1/3 shrink-0 overflow-hidden">
                              <img src={news.img} alt={news.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                            </div>
                            <div className="p-6">
                              <span className={`${colors.goldBg} text-white text-[10px] font-bold px-2 py-1 rounded uppercase tracking-wider mb-3 inline-block`}>{news.tag}</span>
                              <h3 className={`text-lg font-bold ${colors.navyText} leading-snug`}>{news.title}</h3>
                              <button className={`${colors.royalText} text-sm font-bold mt-4 flex items-center gap-1 group-hover:gap-2 transition-all`}>
                                Read Full Story <ArrowRight className="w-4 h-4" />
                              </button>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </section>
                
                {/* GALLERY PREVIEW */}
                <section className="py-24 px-6 bg-white border-t border-slate-200">
                  <div className="max-w-7xl mx-auto">
                    <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
                      <div>
                        <h4 className={`${colors.royalText} font-bold uppercase tracking-widest text-sm mb-4`}>Visual Tour</h4>
                        <h2 className={`text-4xl font-serif font-black ${colors.navyText}`}>Campus Gallery</h2>
                      </div>
                        <button onClick={() => handleNav('gallery')} className={`${colors.navy} hover:bg-slate-800 text-white px-8 py-4 rounded-full font-bold transition-all shadow-xl whitespace-nowrap`}>
                        View All Gallery
                        </button>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      {galleryImages.slice(0, 4).map(img => (
                        <div key={img.id} className="relative aspect-square rounded-2xl overflow-hidden cursor-pointer group" onClick={() => setLightboxImage(img.url)}>
                          <img src={img.url} alt={img.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                          <div className="absolute inset-0 bg-slate-900/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                            <ImageIcon className="w-8 h-8 text-white" />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </section>
              </>
            ) : (
              /* BASE PLAN: Simple placeholder for Pro features */
              <section className="py-20 px-6 bg-slate-50 text-center">
                <div className="max-w-2xl mx-auto">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6 text-blue-600">
                    <Lock className="w-8 h-8" />
                  </div>
                  <h2 className={`text-3xl font-black ${colors.navyText} mb-4`}>More Features in Pro</h2>
                  <p className="text-slate-500 mb-8">Upgrade to the Pro plan to unlock Faculty Profiles, Interactive Galleries, News & Events modules, and advanced Admission forms.</p>
                  <button onClick={() => onPlanChange?.('Pro')} className={`${colors.royal} text-white font-bold px-8 py-4 rounded-full`}>
                    Upgrade to Pro ({proPrice})
                  </button>
                </div>
              </section>
            )}

            {/* TESTIMONIALS */}
            <section className={`py-24 px-6 ${colors.navy} text-white`}>
               <div className="max-w-7xl mx-auto">
                 <div className="text-center mb-16">
                   <h4 className={`${colors.gold} font-bold uppercase tracking-widest text-sm mb-4`}>Parent Testimonials</h4>
                   <h2 className="text-4xl md:text-5xl font-serif font-black mb-4">What Our Community Says</h2>
                 </div>
                 <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                   {[
                     { name: 'Rahul Sharma', role: 'Parent (Grade 10)', text: 'We have seen tremendous growth in our child. The balance between academics and extracurriculars is perfectly maintained here.' },
                     { name: 'Priya Patel', role: 'Alumni (Class of 2024)', text: 'The faculty at BrightFuture shaped my career. The practical labs and industry exposure helped me secure admission into a top university.' },
                     { name: 'Ananya Singh', role: 'Parent (Grade 5)', text: 'The campus facilities are world-class. From the interactive smart classrooms to the extensive library, everything is designed to aid learning.' }
                   ].map((test, i) => (
                     <div key={i} className="bg-white/5 border border-white/10 p-8 rounded-3xl backdrop-blur-sm relative">
                       <Quote className={`absolute top-8 right-8 w-12 h-12 ${colors.gold} opacity-20`} />
                       <div className={`flex ${colors.gold} mb-6`}>
                         {[1,2,3,4,5].map(star => <Star key={star} className="w-5 h-5 fill-current" />)}
                       </div>
                       <p className="text-slate-300 mb-8 italic leading-relaxed relative z-10">"{test.text}"</p>
                       <div className="flex items-center gap-4">
                         <div className={`w-12 h-12 rounded-full ${colors.goldBg} flex items-center justify-center font-bold text-[#0A192F]`}>
                           {test.name.charAt(0)}
                         </div>
                         <div>
                           <div className="font-bold text-white">{test.name}</div>
                           <div className="text-sm text-slate-400">{test.role}</div>
                         </div>
                       </div>
                     </div>
                   ))}
                 </div>
               </div>
            </section>

            {/* ADMISSION CTA */}
            <section className="py-24 px-6 bg-slate-50 relative overflow-hidden">
               <div className={`absolute top-0 bottom-0 left-0 w-1/2 ${colors.royal} skew-x-12 -translate-x-32 hidden lg:block`}></div>
               <div className="max-w-7xl mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                 <div className="lg:text-white">
                   <h2 className="text-4xl md:text-5xl font-serif font-black mb-6">Ready to Join BrightFuture?</h2>
                   <p className="lg:text-blue-100 text-slate-600 text-lg mb-8 max-w-md">
                     Admissions are open for the 2026-27 session. Secure your child's future with world-class education.
                   </p>
                   <ul className="space-y-4 mb-10">
                     <li className="flex items-center gap-3 font-bold lg:text-white text-slate-800"><CheckCircle2 className={`w-6 h-6 ${colors.gold}`} /> Easy online application process</li>
                     <li className="flex items-center gap-3 font-bold lg:text-white text-slate-800"><CheckCircle2 className={`w-6 h-6 ${colors.gold}`} /> Merit-based scholarships available</li>
                     <li className="flex items-center gap-3 font-bold lg:text-white text-slate-800"><CheckCircle2 className={`w-6 h-6 ${colors.gold}`} /> Limited seats per classroom</li>
                   </ul>
                   <button onClick={() => handleNav('admissions')} className={`${colors.goldBg} ${colors.goldHover} ${colors.navyText} font-black px-10 py-5 rounded-full shadow-xl transition-all flex items-center gap-2`}>
                     Start Application Now <ArrowRight className="w-5 h-5" />
                   </button>
                 </div>
                 <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/3] lg:aspect-auto lg:h-[500px]">
                   <img src="https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=800&q=80" alt="Students in class" className="w-full h-full object-cover" />
                 </div>
               </div>
            </section>
          </div>
        )}

        {/* =========================================================================
            OTHER TABS (Stubs for demonstration)
        ========================================================================= */}
        {activeTab !== 'home' && (
          <div className="min-h-[70vh] flex flex-col pt-10 px-6 pb-20">
            <div className="max-w-7xl mx-auto w-full">
              {/* Back button */}
              <button onClick={() => handleNav('home')} className={`${colors.royalText} font-bold flex items-center gap-2 mb-8 hover:underline`}>
                <ArrowRight className="w-4 h-4 rotate-180" /> Back to Home
              </button>

              <h1 className={`text-4xl font-serif font-black ${colors.navyText} mb-8 capitalize`}>{activeTab.replace('-', ' ')}</h1>

              {activeTab === 'admissions' && isPro && (
                <div className="bg-white p-8 md:p-12 rounded-3xl shadow-xl border border-slate-100 mb-12">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                    <div>
                      <h3 className={`text-2xl font-black ${colors.navyText} mb-6`}>Admission Process</h3>
                      <div className="space-y-8">
                        {[
                          { step: 1, title: 'Online Registration', desc: 'Fill out the online enquiry form or application portal.' },
                          { step: 2, title: 'Campus Visit & Interaction', desc: 'Schedule a visit to tour the campus and meet the coordinators.' },
                          { step: 3, title: 'Document Verification', desc: 'Submit previous academic records, birth certificate, and ID proofs.' },
                          { step: 4, title: 'Fee Payment & Enrollment', desc: 'Complete the fee payment to secure your admission.' }
                        ].map(step => (
                          <div key={step.step} className="flex gap-4">
                            <div className={`w-12 h-12 shrink-0 rounded-full ${colors.navy} text-white flex items-center justify-center font-black text-xl shadow-lg`}>
                              {step.step}
                            </div>
                            <div>
                              <h4 className={`text-lg font-bold ${colors.navyText}`}>{step.title}</h4>
                              <p className="text-slate-500 mt-1">{step.desc}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="bg-slate-50 p-8 rounded-2xl border border-slate-200">
                      <h3 className={`text-2xl font-black ${colors.navyText} mb-2`}>Enquiry Form</h3>
                      <p className="text-slate-500 text-sm mb-6">Submit your details and our counselor will call you.</p>
                      <div className="space-y-4">
                        <input className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3.5 focus:outline-none focus:border-blue-500" placeholder="Parent Name" />
                        <input className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3.5 focus:outline-none focus:border-blue-500" placeholder="Phone Number" />
                        <select className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3.5 text-slate-500 focus:outline-none focus:border-blue-500">
                          <option>Select Grade / Class</option>
                          <option>Pre-Primary</option>
                          <option>Grade 1 to 5</option>
                          <option>Grade 6 to 8</option>
                          <option>Grade 9 to 10</option>
                        </select>
                        <button className={`w-full ${colors.royal} hover:bg-blue-800 text-white font-bold py-4 rounded-xl transition-all shadow-md mt-2`}>
                          Submit Enquiry
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'gallery' && isPro && (
                <div>
                  <div className="flex flex-wrap gap-4 mb-8">
                    {['All', 'Campus', 'Classrooms', 'Sports', 'Events', 'Faculty', 'Student Activities'].map(cat => (
                      <button 
                        key={cat} 
                        onClick={() => setGalleryCategory(cat)}
                        className={`px-6 py-2.5 rounded-full font-bold text-sm transition-all ${galleryCategory === cat ? `${colors.navy} text-white shadow-lg` : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-50'}`}
                      >
                        {cat}
                      </button>
                    ))}
                  </div>
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {galleryImages.filter(img => galleryCategory === 'All' || img.category === galleryCategory).map(img => (
                      <div key={img.id} className="relative aspect-square rounded-2xl overflow-hidden cursor-pointer group shadow-sm" onClick={() => setLightboxImage(img.url)}>
                        <img src={img.url} alt={img.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                        <div className="absolute inset-0 bg-slate-900/40 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center text-white">
                          <ImageIcon className="w-8 h-8 mb-2" />
                          <span className="font-bold">{img.title}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === 'contact' && isPro && (
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                  <div className="bg-white p-10 rounded-3xl shadow-xl border border-slate-100">
                    <h3 className={`text-2xl font-black ${colors.navyText} mb-8`}>Contact & Location</h3>
                    <div className="space-y-8">
                      <div className="flex gap-4">
                        <div className={`w-12 h-12 ${colors.royal} text-white rounded-xl flex items-center justify-center shrink-0 shadow-lg`}>
                          <MapPin className="w-6 h-6" />
                        </div>
                        <div>
                          <div className={`font-bold text-lg ${colors.navyText}`}>School Address</div>
                          <div className="text-slate-500 mt-1">123 Education Boulevard, Knowledge City<br/>State 12345</div>
                        </div>
                      </div>
                      <div className="flex gap-4">
                        <div className={`w-12 h-12 ${colors.royal} text-white rounded-xl flex items-center justify-center shrink-0 shadow-lg`}>
                          <Phone className="w-6 h-6" />
                        </div>
                        <div>
                          <div className={`font-bold text-lg ${colors.navyText}`}>Phone & WhatsApp</div>
                          <div className="text-slate-500 mt-1">+91 (123) 456-7890<br/>+91 (123) 456-7891</div>
                        </div>
                      </div>
                      <div className="flex gap-4">
                        <div className={`w-12 h-12 ${colors.royal} text-white rounded-xl flex items-center justify-center shrink-0 shadow-lg`}>
                          <Clock className="w-6 h-6" />
                        </div>
                        <div>
                          <div className={`font-bold text-lg ${colors.navyText}`}>Working Hours</div>
                          <div className="text-slate-500 mt-1">Monday - Saturday: 8:00 AM to 4:00 PM<br/>Sunday: Closed</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-slate-200 rounded-3xl overflow-hidden shadow-xl aspect-square lg:aspect-auto border border-slate-300 relative">
                    {/* Fake Map */}
                    <img src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&w=800&q=80" alt="Map" className="w-full h-full object-cover opacity-50" />
                    <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6 bg-slate-900/60 text-white">
                      <Map className="w-12 h-12 mb-4 opacity-80" />
                      <h3 className="text-2xl font-bold mb-2">Interactive Google Map</h3>
                      <p className="text-slate-300">Displays actual Google Map integration in live production site.</p>
                      <button className={`mt-6 ${colors.royal} px-6 py-3 rounded-full font-bold shadow-lg flex items-center gap-2`}>
                        <Navigation className="w-4 h-4" /> Open in Maps
                      </button>
                    </div>
                  </div>
                </div>
              )}

              {/* Generic fallback for other tabs */}
              {((!isPro && activeTab !== 'about') || (isPro && !['admissions', 'gallery', 'contact'].includes(activeTab))) && (
                <div className="bg-white p-12 rounded-3xl shadow-sm border border-slate-100 text-center">
                  <div className={`w-20 h-20 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-6 text-blue-600`}>
                    <Monitor className="w-10 h-10" />
                  </div>
                  <h2 className={`text-2xl font-black ${colors.navyText} mb-4`}>{activeTab.replace('-', ' ')} Section</h2>
                  <p className="text-slate-500">This section is fully functional and customized for each school in the production environment.</p>
                </div>
              )}

            </div>
          </div>
        )}
      </main>

      {/* FOOTER */}
      <footer className={`${colors.navy} text-slate-400 py-16 px-6 border-t border-slate-800`}>
         <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
           <div>
             <div className="flex items-center gap-3 text-white font-serif font-black text-2xl mb-6 tracking-tight">
               <GraduationCap className={`w-8 h-8 ${colors.gold}`} /> BrightFuture
             </div>
             <p className="text-sm mb-6 leading-relaxed text-slate-400">A premium educational institution dedicated to academic excellence and holistic student development.</p>
           </div>
           <div>
             <h4 className="text-white font-bold mb-6">Quick Links</h4>
             <ul className="space-y-3 text-sm">
               <li><button onClick={() => handleNav('about')} className="hover:text-white transition-colors">About Us</button></li>
               <li><button onClick={() => handleNav('academics')} className="hover:text-white transition-colors">Academics</button></li>
               <li><button onClick={() => handleNav('admissions')} className="hover:text-white transition-colors">Admissions</button></li>
               <li><button onClick={() => handleNav('gallery')} className="hover:text-white transition-colors">Photo Gallery</button></li>
             </ul>
           </div>
           <div>
             <h4 className="text-white font-bold mb-6">Contact Us</h4>
             <ul className="space-y-3 text-sm">
               <li className="flex items-start gap-3"><MapPin className="w-4 h-4 shrink-0 mt-0.5" /> 123 Education Blvd, Knowledge City, State 12345</li>
               <li className="flex items-center gap-3"><Phone className="w-4 h-4 shrink-0" /> +91 (123) 456-7890</li>
               <li className="flex items-center gap-3"><Mail className="w-4 h-4 shrink-0" /> info@brightfuture.edu</li>
             </ul>
           </div>
           <div>
             <h4 className="text-white font-bold mb-6">Admissions 2026</h4>
             <p className="text-sm mb-6 text-slate-400">Secure your child's future. Apply today for the upcoming academic session.</p>
             <button onClick={() => handleNav('admissions')} className={`${colors.goldBg} ${colors.goldHover} ${colors.navyText} font-bold px-6 py-3 rounded-full w-full transition-colors`}>
               Apply Now
             </button>
           </div>
         </div>
         <div className="max-w-7xl mx-auto border-t border-slate-800 mt-12 pt-8 text-sm text-center">
           © 2026 BrightFuture School. Developed by Nova Digital. All rights reserved.
         </div>
      </footer>

    </div>
  );
};
"""
with open("src/components/SchoolDemo.tsx", "w") as f:
    f.write(content)
