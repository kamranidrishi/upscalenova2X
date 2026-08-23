import os

content = """import React, { useState } from 'react';
import { DemoItem, PlanType } from '../data/demos';
import { PRICING_PLANS } from '../data/content';
import { 
  GraduationCap, MapPin, Phone, Mail, BookOpen, Users, Calendar, Award, 
  ChevronRight, CheckCircle2, Menu, X, Lock, FileText, Download, 
  Clock, ArrowRight, UserCircle, LogIn, CreditCard, LayoutDashboard, 
  Bus, Book, FileSpreadsheet, AlertCircle, TrendingUp, Search, Link
} from 'lucide-react';

const basePrice = PRICING_PLANS.find(p => p.id === 'base')?.price || '₹24,999';
const proPrice = PRICING_PLANS.find(p => p.id === 'pro')?.price || '₹39,999';
const maxPrice = PRICING_PLANS.find(p => p.id === 'max')?.price || '₹59,999';

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
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [portalTab, setPortalTab] = useState('dashboard');

  const handleNav = (tab: string) => {
    setActiveTab(tab);
    setMobileMenuOpen(false);
  };

  const LockedFeature = ({ feature, requiredPlan, price, targetPlan }: { feature: string, requiredPlan: string, price: string, targetPlan: PlanType }) => (
    <div className="flex flex-col items-center justify-center py-20 px-6 text-center bg-white m-4 sm:m-8 rounded-3xl border border-slate-200 shadow-sm animate-in fade-in zoom-in duration-300">
      <div className="w-20 h-20 bg-slate-50 rounded-full flex items-center justify-center mb-6">
        <Lock className="w-8 h-8 text-slate-400" />
      </div>
      <h3 className="text-2xl font-black text-slate-900 mb-3">{feature}</h3>
      <p className="text-slate-500 mb-8 max-w-md font-medium">
        This premium feature is available exclusively in the <span className="font-bold text-blue-600">Nova {requiredPlan}</span> plan. Upgrade your website to unlock advanced capabilities.
      </p>
      <button 
        onClick={() => onPlanChange?.(targetPlan)}
        className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3.5 px-8 rounded-full shadow-lg shadow-blue-600/30 transition-all hover:-translate-y-0.5"
      >
        Upgrade to {requiredPlan} ({price})
      </button>
    </div>
  );

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'academics', label: 'Academics' },
    { id: 'admissions', label: 'Admissions' },
    { id: 'events', label: 'Events & Notices', showLock: !isPro },
    { id: 'portal', label: 'Student Portal', showLock: !isMax },
  ];

  return (
    <div className="w-full h-full bg-[#f8fafc] text-slate-800 overflow-y-auto overflow-x-hidden font-sans custom-scrollbar">
      {/* Topbar */}
      <div className="bg-[#1e293b] text-slate-300 text-[11px] px-4 md:px-8 py-2.5 flex justify-between items-center border-b border-slate-700">
        <div className="flex gap-4">
          <span className="flex items-center gap-1.5">
            <Phone className="w-3 h-3 text-blue-400" /> +91 (123) 456-7890
          </span>
          <span className="hidden sm:inline-flex items-center gap-1.5">
            <Mail className="w-3 h-3 text-blue-400" /> info@brightfutureschool.edu
          </span>
        </div>
        <div className="text-blue-400 font-bold uppercase tracking-wider hidden sm:block">
          Admissions Open 2026-27
        </div>
      </div>

      {/* Header */}
      <header className="px-4 md:px-8 py-4 flex items-center justify-between border-b border-slate-200 sticky top-0 z-50 bg-white/95 backdrop-blur-md shadow-sm">
        <button onClick={() => handleNav('home')} className="text-xl md:text-2xl font-black text-[#0f172a] flex items-center gap-2 group">
          <div className="p-2 bg-blue-600 rounded-lg group-hover:scale-105 transition-transform">
            <GraduationCap className="w-6 h-6 text-white" />
          </div>
          <span className="hidden sm:block">BrightFuture</span>
        </button>

        {/* Desktop Nav */}
        {!isMobile && !isTablet && (
          <nav className="flex items-center gap-6 text-sm font-bold text-slate-600 tracking-wide">
            {navLinks.map(link => (
              <button 
                key={link.id} 
                onClick={() => handleNav(link.id)}
                className={`flex items-center gap-1.5 hover:text-blue-600 transition-colors ${activeTab === link.id ? 'text-blue-600' : ''}`}
              >
                {link.label} 
                {link.showLock && <Lock className="w-3 h-3 opacity-50" />}
              </button>
            ))}
            <button 
              onClick={() => handleNav('admissions')}
              className="bg-slate-900 hover:bg-blue-700 text-white px-5 py-2.5 rounded-full font-bold transition-all shadow-md ml-2"
            >
              {isMax ? 'Apply Online' : 'Enquire Now'}
            </button>
          </nav>
        )}

        {/* Mobile Toggle */}
        {(isMobile || isTablet) && (
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="p-2 text-slate-900">
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        )}
      </header>

      {/* Mobile Menu */}
      {(isMobile || isTablet) && mobileMenuOpen && (
        <div className="fixed inset-0 top-[110px] bg-white z-40 p-6 flex flex-col gap-4 border-t border-slate-100 animate-in slide-in-from-top-4">
          {navLinks.map(link => (
            <button 
              key={link.id} 
              onClick={() => handleNav(link.id)}
              className={`flex items-center justify-between text-lg font-bold p-4 rounded-xl ${activeTab === link.id ? 'bg-blue-50 text-blue-600' : 'text-slate-700 hover:bg-slate-50'}`}
            >
              <span>{link.label}</span>
              {link.showLock && <Lock className="w-4 h-4 text-slate-400" />}
            </button>
          ))}
          <button 
            onClick={() => handleNav('admissions')}
            className="w-full bg-blue-600 text-white p-4 rounded-xl font-bold mt-4"
          >
            Admissions Open
          </button>
        </div>
      )}

      {/* TAB CONTENT: HOME */}
      {activeTab === 'home' && (
        <div className="animate-in fade-in duration-300 pb-20">
          {/* Hero */}
          <section className="relative w-full h-[60vh] min-h-[500px] flex items-center justify-center">
            <img src={demo.heroImage} alt="Campus" className="absolute inset-0 w-full h-full object-cover" />
            <div className="absolute inset-0 bg-slate-900/60"></div>
            <div className="relative z-10 text-center px-4 max-w-4xl mx-auto space-y-6 mt-10">
              <span className="inline-block px-4 py-1.5 bg-blue-500/30 text-blue-100 font-bold text-xs uppercase tracking-widest rounded-full backdrop-blur-md border border-blue-400/30">
                Building Future Leaders
              </span>
              <h1 className="text-4xl md:text-6xl font-black text-white leading-tight">
                {demo.tagline}
              </h1>
              <p className="text-base md:text-lg text-slate-200 max-w-2xl mx-auto font-medium">
                Empowering the next generation with modern learning, state-of-the-art facilities, and comprehensive development programs.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
                <button 
                  onClick={() => handleNav('admissions')}
                  className="w-full sm:w-auto bg-blue-600 hover:bg-blue-500 text-white font-bold px-8 py-3.5 rounded-full transition-all shadow-lg shadow-blue-900/50 flex items-center justify-center gap-2"
                >
                  Admissions Open <ChevronRight className="w-5 h-5" />
                </button>
                <button className="w-full sm:w-auto bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/20 font-bold px-8 py-3.5 rounded-full transition-all flex items-center justify-center gap-2">
                  Book a Campus Tour
                </button>
              </div>
            </div>
          </section>

          {/* Notice Banner (Pro/Max) */}
          {isPro && (
            <div className="bg-amber-100 text-amber-900 py-3 px-6 flex items-center border-b border-amber-200 overflow-x-hidden relative">
              <div className="flex items-center gap-3 font-bold text-sm whitespace-nowrap">
                <span className="bg-amber-500 text-white px-2 py-0.5 rounded text-xs uppercase tracking-wider">Update</span>
                Admissions Open for 2026-27 • Annual Sports Meet on 15th Nov • Download Final Term Syllabus from Student Portal
              </div>
            </div>
          )}

          {/* Highlights */}
          <section className="py-16 px-6 bg-white">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100 text-center hover:-translate-y-1 transition-transform">
                  <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-6"><BookOpen className="w-8 h-8" /></div>
                  <h3 className="font-black text-xl text-slate-900 mb-3">Modern Curriculum</h3>
                  <p className="text-slate-500 text-sm">Holistic academic approach blending traditional values with global standards.</p>
                </div>
                <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100 text-center hover:-translate-y-1 transition-transform">
                  <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-6"><Users className="w-8 h-8" /></div>
                  <h3 className="font-black text-xl text-slate-900 mb-3">Expert Faculty</h3>
                  <p className="text-slate-500 text-sm">Highly qualified and dedicated teachers committed to student success.</p>
                </div>
                <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100 text-center hover:-translate-y-1 transition-transform">
                  <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-6"><Award className="w-8 h-8" /></div>
                  <h3 className="font-black text-xl text-slate-900 mb-3">Top Results</h3>
                  <p className="text-slate-500 text-sm">Consistent track record of academic and co-curricular excellence.</p>
                </div>
              </div>
            </div>
          </section>

          {/* Stats / Analytics (Max) */}
          {isMax && (
            <section className="py-16 px-6 bg-[#0f172a] text-white">
              <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                <div>
                  <div className="text-4xl md:text-5xl font-black text-blue-400 mb-2">25+</div>
                  <div className="text-slate-400 text-sm font-bold uppercase tracking-wider">Years of Excellence</div>
                </div>
                <div>
                  <div className="text-4xl md:text-5xl font-black text-blue-400 mb-2">100%</div>
                  <div className="text-slate-400 text-sm font-bold uppercase tracking-wider">Pass Rate</div>
                </div>
                <div>
                  <div className="text-4xl md:text-5xl font-black text-blue-400 mb-2">50+</div>
                  <div className="text-slate-400 text-sm font-bold uppercase tracking-wider">National Awards</div>
                </div>
                <div>
                  <div className="text-4xl md:text-5xl font-black text-blue-400 mb-2">20:1</div>
                  <div className="text-slate-400 text-sm font-bold uppercase tracking-wider">Student Teacher Ratio</div>
                </div>
              </div>
            </section>
          )}

          {/* Footer Mock */}
          <footer className="bg-slate-900 text-slate-400 py-12 px-6 text-center mt-12">
             <div className="flex items-center justify-center gap-2 text-white font-black text-2xl mb-4">
               <GraduationCap className="w-8 h-8 text-blue-500" /> BrightFuture School
             </div>
             <p className="text-sm">© 2026 BrightFuture School Demo. Built with {isBase ? `Base Plan ${basePrice}` : isPro && !isMax ? `Pro Plan ${proPrice}` : `Max Plan ${maxPrice}`}.</p>
          </footer>
        </div>
      )}

      {/* TAB CONTENT: ACADEMICS */}
      {activeTab === 'academics' && (
        <div className="py-12 px-4 md:px-6 max-w-6xl mx-auto animate-in fade-in duration-300">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-4">Academic Programs</h2>
            <p className="text-slate-500">Comprehensive educational pathways designed to nurture curiosity and build lifelong skills.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: 'Primary School', grade: 'Grades 1 to 5', desc: 'Focus on foundational skills, creativity, and social development.' },
              { title: 'Middle School', grade: 'Grades 6 to 8', desc: 'Encouraging critical thinking, exploration, and independent learning.' },
              { title: 'High School', grade: 'Grades 9 to 12', desc: 'Rigorous academic preparation for board exams and higher education.' }
            ].map((prog, i) => (
              <div key={i} className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm text-center">
                <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <BookOpen className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-black text-slate-900 mb-1">{prog.title}</h3>
                <div className="text-blue-600 font-bold text-sm mb-4">{prog.grade}</div>
                <p className="text-slate-500">{prog.desc}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* TAB CONTENT: ADMISSIONS */}
      {activeTab === 'admissions' && (
        <div className="py-12 px-4 md:px-6 max-w-6xl mx-auto animate-in fade-in duration-300">
          <div className="mb-10 text-center">
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-4">Admissions</h2>
            <p className="text-slate-500 mt-2">Begin your journey with BrightFuture International School</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Info Panel */}
            <div className="bg-slate-900 text-white p-8 rounded-3xl">
              <h3 className="text-xl font-black mb-6">Admission Office</h3>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <MapPin className="w-6 h-6 text-blue-400 shrink-0" />
                  <div>
                    <div className="font-bold">Campus Address</div>
                    <div className="text-sm text-slate-400 mt-1">123 Education Hub, Knowledge City, State 12345</div>
                  </div>
                </div>
                <div className="flex gap-4">
                  <Phone className="w-6 h-6 text-blue-400 shrink-0" />
                  <div>
                    <div className="font-bold">Contact Numbers</div>
                    <div className="text-sm text-slate-400 mt-1">+91 (123) 456-7890<br/>+91 (123) 456-7891</div>
                  </div>
                </div>
                <div className="flex gap-4">
                  <Clock className="w-6 h-6 text-blue-400 shrink-0" />
                  <div>
                    <div className="font-bold">Office Hours</div>
                    <div className="text-sm text-slate-400 mt-1">Mon - Fri: 8:00 AM - 4:00 PM<br/>Sat: 9:00 AM - 1:00 PM</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Forms */}
            <div className="lg:col-span-2">
              {!isPro ? (
                /* Base Form */
                <div className="bg-white p-6 md:p-10 rounded-3xl border border-slate-200 shadow-sm">
                  <h3 className="text-2xl font-black text-slate-900 mb-2">Admission Enquiry</h3>
                  <p className="text-slate-500 text-sm mb-8">Fill the form below and our admission counselor will contact you.</p>
                  <div className="space-y-4">
                    <input className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3.5 focus:outline-none focus:border-blue-500 transition-colors" placeholder="Parent Name" />
                    <input className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3.5 focus:outline-none focus:border-blue-500 transition-colors" placeholder="Phone Number" />
                    <input className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3.5 focus:outline-none focus:border-blue-500 transition-colors" placeholder="Student Name" />
                    <select className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3.5 text-slate-500 focus:outline-none focus:border-blue-500 transition-colors">
                      <option>Select Grade Applying For</option>
                      <option>Grade 1</option>
                      <option>Grade 5</option>
                      <option>Grade 9</option>
                    </select>
                    <textarea className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3.5 h-24 resize-none focus:outline-none focus:border-blue-500 transition-colors" placeholder="Any Questions?"></textarea>
                    <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-xl transition-all shadow-md mt-2">
                      Submit Enquiry
                    </button>
                    
                    <div className="pt-6 mt-6 border-t border-slate-100">
                       <div className="flex items-center justify-between p-4 bg-slate-50 rounded-xl border border-slate-200">
                         <div>
                           <div className="font-bold text-slate-900 text-sm">Advanced Admissions Portal</div>
                           <div className="text-xs text-slate-500">Document upload & fee payment</div>
                         </div>
                         <span className="bg-slate-200 text-slate-600 text-[10px] font-bold px-2 py-1 rounded uppercase">Pro / Max Only</span>
                       </div>
                    </div>
                  </div>
                </div>
              ) : (
                /* Pro / Max Form */
                <div className="bg-white rounded-3xl border border-slate-200 shadow-xl overflow-hidden">
                  <div className="flex border-b border-slate-100 bg-slate-50">
                    <button className="flex-1 py-4 font-bold text-sm bg-white text-blue-600 border-t-2 border-blue-600 shadow-sm">Step 1: Student Details</button>
                    <button className="flex-1 py-4 font-bold text-sm text-slate-400 hover:text-slate-600">Step 2: Guardian</button>
                    <button className="flex-1 py-4 font-bold text-sm text-slate-400 hover:text-slate-600">Step 3: Documents</button>
                  </div>
                  <div className="p-6 md:p-10 space-y-6">
                    <h3 className="text-xl font-black text-slate-900">Online Application Form</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <input className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3.5" placeholder="First Name" />
                      <input className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3.5" placeholder="Last Name" />
                      <input className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3.5" type="date" title="Date of Birth" />
                      <select className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3.5 text-slate-500">
                        <option>Select Grade</option>
                        <option>Grade 1</option>
                        <option>Grade 2</option>
                      </select>
                    </div>
                    <div className="p-4 bg-blue-50 border border-blue-100 rounded-xl flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="p-2 bg-blue-100 rounded-lg"><FileText className="w-5 h-5 text-blue-600" /></div>
                        <div>
                          <div className="font-bold text-sm text-blue-900">Upload Birth Certificate</div>
                          <div className="text-xs text-blue-600">PDF, JPG (Max 5MB)</div>
                        </div>
                      </div>
                      <button className="px-4 py-2 bg-white rounded-lg text-sm font-bold text-blue-600 border border-blue-200 shadow-sm">Browse</button>
                    </div>
                    
                    {isMax && (
                      <div className="p-4 bg-indigo-50 border border-indigo-100 rounded-xl flex items-center justify-between">
                         <div className="flex items-center gap-3">
                           <div className="p-2 bg-indigo-100 rounded-lg"><Link className="w-5 h-5 text-indigo-600" /></div>
                           <div>
                             <div className="font-bold text-sm text-indigo-900">Entrance Exam Scheduling</div>
                             <div className="text-xs text-indigo-600">Select preferred slot (Max Feature)</div>
                           </div>
                         </div>
                         <button className="px-4 py-2 bg-white rounded-lg text-sm font-bold text-indigo-600 border border-indigo-200 shadow-sm">Select</button>
                      </div>
                    )}

                    <div className="flex justify-between items-center pt-6 border-t border-slate-100">
                      <span className="text-sm font-bold text-slate-500">Reg. Fee: <span className="text-slate-900">₹1,500</span></span>
                      <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3.5 px-8 rounded-xl shadow-md transition-colors flex items-center gap-2">
                        Next Step <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* TAB CONTENT: EVENTS & NOTICES (Pro/Max Only) */}
      {activeTab === 'events' && (
        <div className="animate-in fade-in duration-300">
          {!isPro ? (
            <LockedFeature feature="Events & Notice Board" requiredPlan="Pro" price={proPrice} targetPlan="Pro" />
          ) : (
            <div className="py-12 px-4 md:px-6 max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-4">Events & Notices</h2>
                <p className="text-slate-500">Stay updated with the latest happenings at school.</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Upcoming Events */}
                <div className="bg-white p-6 md:p-8 rounded-3xl border border-slate-200 shadow-sm">
                  <h3 className="text-xl font-black mb-6 flex items-center gap-2 border-b border-slate-100 pb-4">
                    <Calendar className="w-5 h-5 text-blue-600"/> Upcoming Events
                  </h3>
                  <div className="space-y-4">
                    {[
                      { date: '15', month: 'Nov', title: 'Annual Sports Meet', time: '09:00 AM - 04:00 PM' },
                      { date: '22', month: 'Nov', title: 'Science Exhibition', time: '10:00 AM - 02:00 PM' },
                      { date: '05', month: 'Dec', title: 'Parent-Teacher Meeting', time: '08:30 AM - 12:30 PM' }
                    ].map((evt, i) => (
                      <div key={i} className="flex gap-4 p-4 rounded-2xl hover:bg-slate-50 transition-colors border border-transparent hover:border-slate-100">
                        <div className="bg-blue-50 text-blue-700 p-3 rounded-xl text-center min-w-[70px] flex flex-col justify-center border border-blue-100">
                          <div className="text-xs font-bold uppercase">{evt.month}</div>
                          <div className="text-2xl font-black leading-none mt-1">{evt.date}</div>
                        </div>
                        <div className="flex flex-col justify-center">
                          <h4 className="font-bold text-slate-900 text-lg">{evt.title}</h4>
                          <p className="text-sm text-slate-500 mt-1 flex items-center gap-1"><Clock className="w-3.5 h-3.5" /> {evt.time}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                {/* Notice Board */}
                <div className="bg-white p-6 md:p-8 rounded-3xl border border-slate-200 shadow-sm">
                  <h3 className="text-xl font-black mb-6 flex items-center gap-2 border-b border-slate-100 pb-4">
                    <FileText className="w-5 h-5 text-amber-500"/> Notice Board
                  </h3>
                  <div className="space-y-3">
                    {[
                      'Revised Final Term Examination Syllabus',
                      'Circular regarding Winter Uniforms',
                      'Guidelines for upcoming Science Fair',
                      'Holidays list for December 2026',
                      'Transport fee revision notice'
                    ].map((notice, i) => (
                      <div key={i} className="flex items-center justify-between p-4 bg-slate-50 rounded-xl border border-slate-100 group hover:bg-white hover:border-blue-200 transition-all cursor-pointer">
                        <div className="flex items-start gap-3 pr-4">
                          <AlertCircle className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
                          <div>
                            <span className="font-medium text-slate-800 text-sm group-hover:text-blue-700 transition-colors">{notice}</span>
                            <div className="text-xs text-slate-400 mt-1">2 days ago</div>
                          </div>
                        </div>
                        <button className="p-2 bg-white border border-slate-200 hover:bg-slate-100 rounded-lg transition-colors shrink-0 shadow-sm group-hover:border-blue-200 group-hover:text-blue-600" title="Download PDF">
                          <Download className="w-4 h-4" />
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      )}

      {/* TAB CONTENT: STUDENT PORTAL (Max Only) */}
      {activeTab === 'portal' && (
        <div className="animate-in fade-in duration-300 flex-1 min-h-[80vh] flex flex-col">
          {!isMax ? (
            <LockedFeature feature="Student & Parent Portal" requiredPlan="Max" price={maxPrice} targetPlan="Max" />
          ) : (
            <div className="flex-1 flex flex-col h-full bg-slate-100">
              {!isLoggedIn ? (
                /* Login Screen */
                <div className="flex-1 flex items-center justify-center p-6">
                  <div className="w-full max-w-md bg-white p-8 rounded-3xl border border-slate-200 shadow-xl text-center">
                    <div className="w-20 h-20 bg-blue-50 border border-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                      <UserCircle className="w-10 h-10 text-blue-600" />
                    </div>
                    <h2 className="text-2xl font-black text-slate-900 mb-2">School Portal</h2>
                    <p className="text-slate-500 text-sm mb-8">Access your academic records, fees, and attendance.</p>
                    
                    <div className="flex bg-slate-100 p-1 rounded-xl mb-6">
                      <button className="flex-1 py-2 font-bold text-sm bg-white shadow-sm rounded-lg text-blue-600">Student</button>
                      <button className="flex-1 py-2 font-bold text-sm text-slate-500 hover:text-slate-700">Parent</button>
                    </div>

                    <div className="space-y-4 mb-8">
                      <input className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3.5 focus:outline-none focus:border-blue-500" placeholder="Student ID (e.g. STU1234)" />
                      <input className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3.5 focus:outline-none focus:border-blue-500" type="password" placeholder="Password" />
                    </div>

                    <button 
                      onClick={() => setIsLoggedIn(true)}
                      className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-xl shadow-lg shadow-blue-600/30 transition-all flex items-center justify-center gap-2"
                    >
                      <LogIn className="w-5 h-5" /> Secure Login
                    </button>
                  </div>
                </div>
              ) : (
                /* Dashboard */
                <div className="flex-1 flex flex-col md:flex-row">
                  {/* Sidebar */}
                  <div className="w-full md:w-64 bg-slate-900 text-white shrink-0 md:min-h-full">
                    <div className="p-6 border-b border-slate-800 flex items-center gap-4">
                      <div className="w-12 h-12 bg-slate-800 border border-slate-700 rounded-full flex items-center justify-center shrink-0">
                        <UserCircle className="w-7 h-7 text-slate-300" />
                      </div>
                      <div>
                        <div className="font-bold">Arjun Sharma</div>
                        <div className="text-xs text-blue-400 font-bold tracking-wider uppercase mt-1">Grade 10-A</div>
                      </div>
                    </div>
                    <nav className="p-4 space-y-1.5">
                      {[
                        { id: 'dashboard', icon: LayoutDashboard, label: 'Dashboard' },
                        { id: 'attendance', icon: Calendar, label: 'Attendance' },
                        { id: 'results', icon: Award, label: 'Results & Reports' },
                        { id: 'fees', icon: CreditCard, label: 'Fee Payment' },
                        { id: 'homework', icon: Book, label: 'Homework' },
                      ].map(item => (
                        <button 
                          key={item.id}
                          onClick={() => setPortalTab(item.id)}
                          className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-bold transition-colors ${portalTab === item.id ? 'bg-blue-600 text-white' : 'text-slate-400 hover:bg-slate-800 hover:text-white'}`}
                        >
                          <item.icon className="w-4 h-4" /> {item.label}
                        </button>
                      ))}
                    </nav>
                    <div className="p-4 mt-auto">
                      <button onClick={() => setIsLoggedIn(false)} className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-slate-800 text-slate-300 hover:text-white hover:bg-slate-700 transition-colors text-sm font-bold">
                        <LogIn className="w-4 h-4 rotate-180" /> Logout
                      </button>
                    </div>
                  </div>
                  
                  {/* Dashboard Content */}
                  <div className="flex-1 p-6 md:p-10 bg-slate-50 overflow-y-auto">
                    <h2 className="text-2xl md:text-3xl font-black text-slate-900 mb-8 capitalize flex items-center gap-3">
                      {portalTab === 'dashboard' && <LayoutDashboard className="w-8 h-8 text-blue-600" />}
                      {portalTab === 'attendance' && <Calendar className="w-8 h-8 text-blue-600" />}
                      {portalTab === 'fees' && <CreditCard className="w-8 h-8 text-blue-600" />}
                      {portalTab === 'results' && <Award className="w-8 h-8 text-blue-600" />}
                      {portalTab === 'homework' && <Book className="w-8 h-8 text-blue-600" />}
                      {portalTab} Overview
                    </h2>
                    
                    {portalTab === 'dashboard' && (
                      <div className="space-y-8">
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm border-t-4 border-t-emerald-500">
                            <div className="text-slate-500 text-sm font-bold mb-2 uppercase tracking-wider">Attendance</div>
                            <div className="text-4xl font-black text-slate-900">95.4%</div>
                            <div className="text-emerald-600 text-xs font-bold mt-3 bg-emerald-50 inline-block px-2 py-1 rounded">Excellent</div>
                          </div>
                          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm border-t-4 border-t-blue-500">
                            <div className="text-slate-500 text-sm font-bold mb-2 uppercase tracking-wider">Pending Fees</div>
                            <div className="text-4xl font-black text-slate-900">₹0</div>
                            <div className="text-slate-500 text-xs font-bold mt-3 bg-slate-100 inline-block px-2 py-1 rounded">All dues cleared</div>
                          </div>
                          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm border-t-4 border-t-amber-500">
                            <div className="text-slate-500 text-sm font-bold mb-2 uppercase tracking-wider">Next Exam</div>
                            <div className="text-3xl font-black text-slate-900">15<span className="text-xl ml-1">Nov</span></div>
                            <div className="text-amber-600 text-xs font-bold mt-3 bg-amber-50 inline-block px-2 py-1 rounded">Mathematics (Mid Term)</div>
                          </div>
                          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm border-t-4 border-t-purple-500">
                            <div className="text-slate-500 text-sm font-bold mb-2 uppercase tracking-wider">Assignments</div>
                            <div className="text-4xl font-black text-slate-900">3</div>
                            <div className="text-purple-600 text-xs font-bold mt-3 bg-purple-50 inline-block px-2 py-1 rounded">1 Due Tomorrow</div>
                          </div>
                        </div>
                        
                        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
                          <h3 className="text-lg font-bold mb-4">Recent Notifications</h3>
                          <div className="space-y-3">
                            <div className="p-3 bg-blue-50 text-blue-900 rounded-xl text-sm font-medium border border-blue-100 flex items-start gap-3">
                              <AlertCircle className="w-5 h-5 shrink-0 text-blue-500 mt-0.5" />
                              Term 1 Marksheets are now available in the Results section.
                            </div>
                            <div className="p-3 bg-slate-50 text-slate-700 rounded-xl text-sm font-medium border border-slate-100 flex items-start gap-3">
                              <AlertCircle className="w-5 h-5 shrink-0 text-slate-400 mt-0.5" />
                              Tomorrow is a declared holiday due to local elections.
                            </div>
                          </div>
                        </div>
                      </div>
                    )}

                    {portalTab === 'fees' && (
                      <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm max-w-2xl">
                        <div className="flex justify-between items-center mb-8 border-b border-slate-100 pb-6">
                          <div>
                            <h3 className="text-xl font-black text-slate-900">Term 2 Fee Invoice</h3>
                            <div className="text-sm text-slate-500 mt-1">Invoice #INV-2026-0042</div>
                          </div>
                          <span className="bg-amber-100 text-amber-700 font-bold text-xs px-3 py-1.5 rounded-md uppercase tracking-wider">Due: 10 Nov</span>
                        </div>
                        <div className="space-y-4 mb-8">
                          <div className="flex justify-between text-base">
                            <span className="text-slate-600 font-medium">Tuition Fee</span>
                            <span className="font-bold text-slate-900">₹15,000</span>
                          </div>
                          <div className="flex justify-between text-base">
                            <span className="text-slate-600 font-medium">Transport Fee</span>
                            <span className="font-bold text-slate-900">₹2,500</span>
                          </div>
                          <div className="flex justify-between text-base">
                            <span className="text-slate-600 font-medium">Activity Fee</span>
                            <span className="font-bold text-slate-900">₹1,000</span>
                          </div>
                          <div className="pt-6 mt-2 border-t-2 border-dashed border-slate-200 flex justify-between text-xl">
                            <span className="font-black text-slate-900">Total Payable</span>
                            <span className="font-black text-blue-600">₹18,500</span>
                          </div>
                        </div>
                        <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-xl transition-all shadow-md flex items-center justify-center gap-2">
                          <CreditCard className="w-5 h-5" /> Pay Now Securely via UPI/Card
                        </button>
                      </div>
                    )}
                    
                    {['attendance', 'results', 'homework'].includes(portalTab) && (
                      <div className="bg-white p-16 rounded-3xl border border-slate-200 shadow-sm flex flex-col items-center justify-center text-center mt-8 max-w-3xl">
                        <div className="w-24 h-24 bg-slate-50 border border-slate-100 rounded-3xl flex items-center justify-center mb-6">
                          <FileSpreadsheet className="w-10 h-10 text-slate-400" />
                        </div>
                        <h3 className="text-2xl font-black text-slate-900 mb-3 capitalize">Advanced {portalTab} Module</h3>
                        <p className="text-slate-500 font-medium max-w-md mb-8">Detailed interactive grids, PDF generation, and analytics for {portalTab} are fully configured in the final Max delivery.</p>
                        <button onClick={() => setPortalTab('dashboard')} className="text-blue-600 font-bold hover:underline">Return to Dashboard</button>
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      )}

    </div>
  );
};
"""

with open('src/components/SchoolDemo.tsx', 'w', encoding='utf-8') as f:
    f.write(content)

print("Updated SchoolDemo.tsx")
