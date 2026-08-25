import React, { useState } from "react";
import { DemoItem, PlanType } from "../data/demos";
import {
  Scale, Phone, MapPin, ChevronRight, Briefcase, Shield, FileText, 
  X, User, Calendar, Clock, CheckCircle, Search, MessageSquare,
  File, FileArchive, ArrowRight, CreditCard, Bell, ChevronDown, Check,
  Menu, Info, Users, BookOpen, Quote, Upload, Download, Home, FileClock
} from "lucide-react";

export const LawFirmDemo: React.FC<{
  demo: DemoItem;
  isMobile: boolean;
  isTablet: boolean;
  onPlanChange?: (plan: PlanType) => void;
}> = ({ demo, isMobile }) => {
  const plan = demo.plan;
  const isBase = plan === "Base";
  const isPro = plan === "Pro";
  const isMax = plan === "Max";

  const [activeTab, setActiveTab] = useState('home'); // home, portal, tracking, booking, admin
  const [consultModal, setConsultModal] = useState(false);
  const [bookingStep, setBookingStep] = useState(1);
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [portalView, setPortalView] = useState('dashboard'); // dashboard, cases, documents, messages, billing

  const handleNav = (tab: string) => {
    setActiveTab(tab);
    setShowMobileMenu(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const attorneys = [
    { name: "Robert Sterling", role: "Managing Partner", spec: "Corporate Law" },
    { name: "Sarah Jenkins", role: "Senior Partner", spec: "Family Law" },
    { name: "David Chen", role: "Partner", spec: "Criminal Defense" }
  ];

  return (
    <div className="w-full min-h-full bg-[#FAFAFA] text-slate-800 overflow-x-hidden font-serif custom-scrollbar">
      {/* Topbar */}
      <div className="bg-[#0B132B] text-slate-300 text-[11px] px-6 py-2.5 flex justify-between items-center border-b border-slate-800/50">
        <div className="flex gap-4">
          <span className="flex items-center gap-1.5">
            <Phone className="w-3 h-3 text-amber-500" /> +91 (22) 8000-LEGAL
          </span>
          <span className="hidden sm:inline-flex items-center gap-1.5">
            <MapPin className="w-3 h-3 text-amber-500" /> High Court Chambers, Mumbai
          </span>
        </div>
        <div className="flex items-center gap-4">
          <span className="text-amber-500 font-sans text-[10px] font-bold uppercase tracking-wider hidden sm:block">
            Confidential Legal Consultation
          </span>
          {isMax && (
            <button onClick={() => handleNav('portal')} className="flex items-center gap-1.5 text-white bg-white/10 hover:bg-white/20 px-3 py-1 rounded transition-colors">
              <User className="w-3 h-3" /> Client Login
            </button>
          )}
        </div>
      </div>

      {/* Header */}
      <header className="px-6 py-4 flex items-center justify-between sticky top-0 z-40 bg-white/95 backdrop-blur-md font-sans border-b border-slate-200 shadow-sm">
        <div 
          onClick={() => handleNav('home')}
          className="font-serif text-2xl font-bold text-[#0B132B] flex items-center gap-3 cursor-pointer"
        >
          <Scale className="w-7 h-7 text-amber-600" />
          Sterling & Associates
        </div>
        
        {/* Desktop Nav */}
        {!isMobile && (
          <nav className="flex items-center gap-6 text-xs font-bold text-slate-600 uppercase tracking-wider">
            <button onClick={() => handleNav('home')} className="hover:text-amber-600 transition-colors">Home</button>
            <a href="#practice" className="hover:text-amber-600 transition-colors">Practice Areas</a>
            <a href="#attorneys" className="hover:text-amber-600 transition-colors">Attorneys</a>
            
            {(isPro || isMax) && (
              <a href="#news" className="hover:text-amber-600 transition-colors">Legal News</a>
            )}
            
            {isMax && (
              <>
                <button onClick={() => handleNav('tracking')} className="hover:text-amber-600 transition-colors flex items-center gap-1">
                  <FileClock className="w-3.5 h-3.5" /> Track
                </button>
                <button onClick={() => handleNav('admin')} className="hover:text-amber-600 transition-colors flex items-center gap-1">
                  Admin
                </button>
                <button onClick={() => handleNav('attorney')} className="hover:text-amber-600 transition-colors flex items-center gap-1">
                  Attorney Portal
                </button>
              </>
            )}
          </nav>
        )}

        <div className="flex items-center gap-3">
          {(isPro || isMax) ? (
            <button
              onClick={() => handleNav('booking')}
              className="hidden sm:block bg-[#0B132B] hover:bg-slate-800 text-white font-bold px-5 py-2.5 rounded font-sans text-xs uppercase tracking-wider transition-colors shadow-lg shadow-[#0B132B]/20"
            >
              Book Consultation
            </button>
          ) : (
            <button
              onClick={() => setConsultModal(true)}
              className="hidden sm:block bg-[#0B132B] hover:bg-slate-800 text-white font-bold px-5 py-2.5 rounded font-sans text-xs uppercase tracking-wider transition-colors shadow-lg shadow-[#0B132B]/20"
            >
              Enquire Now
            </button>
          )}

          {isMobile && (
            <button onClick={() => setShowMobileMenu(!showMobileMenu)} className="p-2 text-slate-800">
              <Menu className="w-6 h-6" />
            </button>
          )}
        </div>
      </header>

      {/* VIEWS */}
      
      {/* 1. HOME VIEW */}
      {activeTab === 'home' && (
        <>
          {/* Hero */}
          <div className="relative min-h-[500px] flex items-center px-6 md:px-16 py-20 overflow-hidden">
            <div className="absolute inset-0">
              <img
                src="https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&w=1400&q=80"
                alt="Law"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#0B132B] via-[#0B132B]/90 to-black/40"></div>
            </div>
            <div className="relative z-10 max-w-3xl space-y-6 text-white animate-in fade-in slide-in-from-bottom-4 duration-700">
              <div className="w-16 h-1 bg-amber-500"></div>
              <h1 className="text-4xl sm:text-6xl font-black leading-tight">
                Relentless Advocacy. <br />
                Strategic Counsel.
              </h1>
              <p className="text-slate-300 text-base sm:text-lg font-sans leading-relaxed max-w-2xl">
                Representing corporate enterprises and individuals across high-stakes commercial disputes, white-collar defense, family law, and cross-border transactions.
              </p>
              <div className="flex flex-wrap gap-4 font-sans pt-4">
                {(isPro || isMax) ? (
                  <button
                    onClick={() => handleNav('booking')}
                    className="bg-amber-600 hover:bg-amber-500 text-white font-bold px-8 py-4 rounded text-sm uppercase tracking-wider transition-all shadow-xl shadow-amber-900/20"
                  >
                    Book Free Consultation
                  </button>
                ) : (
                  <button
                    onClick={() => setConsultModal(true)}
                    className="bg-amber-600 hover:bg-amber-500 text-white font-bold px-8 py-4 rounded text-sm uppercase tracking-wider transition-all shadow-xl shadow-amber-900/20"
                  >
                    Request Case Review
                  </button>
                )}
                <button
                  className="bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/20 font-bold px-8 py-4 rounded text-sm uppercase tracking-wider transition-colors"
                >
                  Our Practice Areas
                </button>
              </div>
            </div>
          </div>

          {/* Intro & Stats */}
          <section className="py-20 px-6 max-w-7xl mx-auto flex flex-col md:flex-row gap-16 items-center">
            <div className="w-full md:w-1/2 space-y-6">
              <h4 className="text-amber-600 font-sans font-bold uppercase tracking-wider text-sm">About The Firm</h4>
              <h2 className="text-3xl md:text-5xl font-bold text-[#0B132B] leading-tight">A Legacy of Legal Excellence.</h2>
              <p className="text-slate-600 font-sans leading-relaxed text-lg">
                For over two decades, Sterling & Associates has stood as a pillar of integrity and legal brilliance. Our dedicated attorneys combine deep legal expertise with strategic thinking to deliver exceptional results for our clients.
              </p>
              <p className="text-slate-600 font-sans leading-relaxed">
                Whether navigating complex corporate litigation or sensitive family disputes, we approach every case with unwavering commitment and personalized attention.
              </p>
              <div className="pt-4">
                <img src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Signature_of_John_Hancock.svg" alt="Signature" className="h-12 opacity-80" />
                <div className="text-sm font-bold font-sans mt-2 text-[#0B132B]">Robert Sterling, Managing Partner</div>
              </div>
            </div>
            {(isPro || isMax) && (
              <div className="w-full md:w-1/2 grid grid-cols-2 gap-6 font-sans">
                {[
                  { num: "25+", label: "Years Experience" },
                  { num: "10k+", label: "Cases Won" },
                  { num: "50+", label: "Expert Attorneys" },
                  { num: "$500M+", label: "Recovered for Clients" }
                ].map((stat, i) => (
                  <div key={i} className="bg-white p-8 rounded-xl shadow-lg border border-slate-100 text-center flex flex-col justify-center">
                    <div className="text-4xl font-black text-amber-600 mb-2">{stat.num}</div>
                    <div className="text-sm font-bold text-slate-800 uppercase tracking-wide">{stat.label}</div>
                  </div>
                ))}
              </div>
            )}
          </section>

          {/* Practice Areas */}
          <section id="practice" className="py-20 px-6 bg-[#0B132B] text-white font-sans">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-16 space-y-4">
                <h4 className="text-amber-500 font-bold uppercase tracking-wider text-sm">Our Expertise</h4>
                <h2 className="text-3xl md:text-5xl font-serif font-bold text-white">Practice Areas</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  { icon: Briefcase, title: "Corporate Law", desc: "Mergers, acquisitions, corporate governance, and complex commercial litigation." },
                  { icon: Users, title: "Family Law", desc: "Divorce, child custody, alimony, and sensitive domestic relations." },
                  { icon: Shield, title: "Criminal Defense", desc: "White-collar crimes, federal investigations, and rigorous trial defense." },
                  { icon: Home, title: "Property Law", desc: "Real estate transactions, zoning disputes, and landlord-tenant litigation." },
                  { icon: FileText, title: "Civil Litigation", desc: "Breach of contract, personal injury, and general civil disputes." },
                  { icon: BookOpen, title: "Intellectual Property", desc: "Patent infringements, trademarks, and copyright protection." }
                ].map((item, i) => (
                  <div key={i} className="bg-white/5 border border-white/10 p-8 rounded-xl hover:bg-white/10 transition-colors group cursor-pointer">
                    <item.icon className="w-10 h-10 text-amber-500 mb-6 group-hover:scale-110 transition-transform" />
                    <h3 className="font-serif text-xl font-bold text-white mb-3">{item.title}</h3>
                    <p className="text-sm text-slate-400 leading-relaxed mb-6">{item.desc}</p>
                    <span className="text-amber-500 text-sm font-bold flex items-center gap-1 group-hover:text-amber-400 transition-colors">
                      Learn More <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Attorneys */}
          <section id="attorneys" className="py-20 px-6 max-w-7xl mx-auto font-sans">
            <div className="text-center mb-16 space-y-4">
              <h4 className="text-amber-600 font-bold uppercase tracking-wider text-sm">Our Team</h4>
              <h2 className="text-3xl md:text-5xl font-serif font-bold text-[#0B132B]">Meet Our Attorneys</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {attorneys.map((attorney, i) => (
                <div key={i} className="group cursor-pointer">
                  <div className="relative aspect-[3/4] overflow-hidden rounded-xl mb-4 bg-slate-200">
                    <img src={`https://images.unsplash.com/photo-15${50000000000 + i}?auto=format&fit=crop&w=600&q=80`} alt={attorney.name} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                      <button className="bg-amber-600 text-white font-bold py-2 px-4 rounded text-xs uppercase tracking-wider w-full">View Profile</button>
                    </div>
                  </div>
                  <h3 className="font-serif text-xl font-bold text-[#0B132B]">{attorney.name}</h3>
                  <div className="text-amber-600 font-bold text-sm uppercase tracking-wider mb-1">{attorney.role}</div>
                  <div className="text-slate-500 text-sm">{attorney.spec}</div>
                </div>
              ))}
            </div>
          </section>

          {/* Testimonials */}
          <section className="py-20 px-6 bg-slate-50 border-y border-slate-200 font-sans">
            <div className="max-w-5xl mx-auto text-center space-y-12">
              <Quote className="w-16 h-16 text-amber-500/20 mx-auto" />
              <h2 className="text-2xl sm:text-4xl font-serif font-bold text-[#0B132B] leading-relaxed max-w-4xl mx-auto">
                "Sterling & Associates provided exceptional counsel during a highly complex corporate merger. Their strategic foresight and meticulous attention to detail secured our interests completely."
              </h2>
              <div>
                <div className="font-bold text-[#0B132B] uppercase tracking-wider">Jonathan Hayes</div>
                <div className="text-sm text-slate-500">CEO, Global Tech Industries</div>
              </div>
            </div>
          </section>

          {/* Advanced Features Preview (Pro/Max) */}
          {(isPro || isMax) && (
            <section id="news" className="py-20 px-6 max-w-7xl mx-auto font-sans">
              <div className="flex flex-col sm:flex-row justify-between items-end mb-12 gap-4">
                <div className="space-y-4">
                  <h4 className="text-amber-600 font-bold uppercase tracking-wider text-sm">Legal Resources</h4>
                  <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#0B132B]">Latest Legal News</h2>
                </div>
                <button className="text-[#0B132B] font-bold border-b-2 border-[#0B132B] pb-1 hover:text-amber-600 hover:border-amber-600 transition-colors">View All Articles</button>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                  { title: "Understanding Recent Changes to Corporate Tax Law in 2026", date: "Aug 15, 2026", cat: "Corporate" },
                  { title: "Navigating Child Custody Across State Lines", date: "Aug 10, 2026", cat: "Family Law" },
                  { title: "The Rise of Digital Evidence in White-Collar Defense", date: "Aug 02, 2026", cat: "Criminal Defense" }
                ].map((post, i) => (
                  <div key={i} className="group cursor-pointer">
                    <div className="aspect-video bg-slate-200 rounded-xl mb-4 overflow-hidden relative">
                       <img src={`https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=600&q=80`} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                       <div className="absolute top-4 left-4 bg-white px-3 py-1 text-xs font-bold uppercase tracking-wider rounded shadow-md">{post.cat}</div>
                    </div>
                    <div className="text-slate-500 text-sm mb-2">{post.date}</div>
                    <h3 className="font-serif text-lg font-bold text-[#0B132B] group-hover:text-amber-600 transition-colors">{post.title}</h3>
                  </div>
                ))}
              </div>
            </section>
          )}

          
          {/* FAQ & Newsletter (Pro/Max) */}
          {(isPro || isMax) && (
            <section className="py-20 px-6 max-w-7xl mx-auto font-sans">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                <div>
                  <h4 className="text-amber-600 font-bold uppercase tracking-wider text-sm mb-4">Common Questions</h4>
                  <h2 className="text-3xl font-serif font-bold text-[#0B132B] mb-8">Frequently Asked Questions</h2>
                  <div className="space-y-4">
                    {[
                      { q: "What should I bring to my initial consultation?", a: "Please bring any relevant documents, correspondence, contracts, or court notices related to your matter." },
                      { q: "How are your legal fees structured?", a: "We offer both hourly rates and flat-fee arrangements depending on the nature of the case. We will discuss this transparently during our first meeting." },
                      { q: "How long will my case take to resolve?", a: "Timelines vary significantly based on the complexity of the case, court schedules, and willingness to settle. We will provide an estimated timeline after reviewing your specific situation." }
                    ].map((faq, i) => (
                      <div key={i} className="border border-slate-200 rounded-xl p-6 bg-white shadow-sm hover:border-amber-500 transition-colors cursor-pointer group">
                        <div className="font-bold text-[#0B132B] flex justify-between items-center">
                          {faq.q}
                          <ChevronDown className="w-5 h-5 text-slate-400 group-hover:text-amber-600" />
                        </div>
                        <div className="text-sm text-slate-600 mt-4 leading-relaxed hidden group-hover:block animate-in fade-in">
                          {faq.a}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="bg-[#0B132B] p-10 rounded-3xl text-white flex flex-col justify-center relative overflow-hidden shadow-2xl">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-amber-600 rounded-full blur-[80px] opacity-30"></div>
                  <div className="relative z-10 space-y-6">
                    <Scale className="w-12 h-12 text-amber-500 mb-2" />
                    <h3 className="text-3xl font-serif font-bold">Stay Informed</h3>
                    <p className="text-slate-400 leading-relaxed">Subscribe to our legal newsletter to receive updates on corporate law, family legislation, and recent landmark rulings.</p>
                    <div className="flex gap-2">
                      <input type="email" placeholder="Your Email Address" className="w-full bg-slate-800/50 border border-slate-700 rounded p-3 text-white focus:outline-none focus:border-amber-500" />
                      <button className="bg-amber-600 hover:bg-amber-500 text-white font-bold px-6 py-3 rounded uppercase tracking-wider transition-colors shadow-lg shadow-amber-900/20">Subscribe</button>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          )}

          {/* Contact / Maps */}
          <section id="contact" className="py-20 px-6 max-w-7xl mx-auto font-sans">
            <div className="bg-[#0B132B] rounded-3xl overflow-hidden flex flex-col md:flex-row shadow-2xl">
              <div className="w-full md:w-1/2 p-10 sm:p-16 text-white space-y-8">
                <h2 className="text-3xl font-serif font-bold">Get In Touch</h2>
                <p className="text-slate-400">Schedule a consultation with our legal experts to discuss your case in complete confidentiality.</p>
                <div className="space-y-6">
                  <div className="flex gap-4 items-start">
                    <MapPin className="w-6 h-6 text-amber-500 shrink-0" />
                    <div>
                      <div className="font-bold mb-1">Mumbai Office</div>
                      <div className="text-sm text-slate-400 leading-relaxed">High Court Chambers, 4th Floor<br/>Fort, Mumbai 400001</div>
                    </div>
                  </div>
                  <div className="flex gap-4 items-start">
                    <Phone className="w-6 h-6 text-amber-500 shrink-0" />
                    <div>
                      <div className="font-bold mb-1">Contact Numbers</div>
                      <div className="text-sm text-slate-400">+91 (22) 8000-LEGAL<br/>+91 98765 43210</div>
                    </div>
                  </div>
                </div>
                <div className="pt-8 flex flex-col sm:flex-row gap-4">
                  {(isPro || isMax) ? (
                     <button onClick={() => handleNav('booking')} className="bg-amber-600 hover:bg-amber-500 text-white font-bold py-3 px-6 rounded text-sm uppercase tracking-wider text-center">Book Consultation</button>
                  ) : (
                     <button onClick={() => setConsultModal(true)} className="bg-amber-600 hover:bg-amber-500 text-white font-bold py-3 px-6 rounded text-sm uppercase tracking-wider text-center">Enquire Now</button>
                  )}
                  <button className="bg-green-600 hover:bg-green-500 text-white font-bold py-3 px-6 rounded text-sm uppercase tracking-wider flex items-center justify-center gap-2">
                    <MessageSquare className="w-4 h-4" /> WhatsApp
                  </button>
                </div>
              </div>
              <div className="w-full md:w-1/2 min-h-[400px] relative">
                <img src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&w=800&q=80" alt="Map" className="absolute inset-0 w-full h-full object-cover grayscale opacity-80 mix-blend-multiply" />
                <div className="absolute inset-0 bg-blue-900/20 mix-blend-multiply"></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
                  <div className="w-12 h-12 bg-amber-600 text-white rounded-full flex items-center justify-center shadow-xl border-4 border-white animate-bounce">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div className="bg-white px-4 py-2 rounded shadow-xl font-bold text-[#0B132B] text-sm mt-2">
                    Sterling & Associates
                  </div>
                </div>
              </div>
            </div>
          </section>
        </>
      )}

      {/* 2. ONLINE BOOKING SYSTEM (Pro & Max) */}
      {activeTab === 'booking' && (isPro || isMax) && (
        <div className="py-20 px-6 max-w-4xl mx-auto font-sans animate-in fade-in slide-in-from-bottom-4">
          <button onClick={() => handleNav('home')} className="text-slate-500 hover:text-[#0B132B] mb-8 font-bold text-sm flex items-center gap-2">
            ← Back to Home
          </button>
          <div className="bg-white rounded-2xl shadow-xl border border-slate-200 overflow-hidden">
            <div className="bg-[#0B132B] text-white p-8 sm:p-12 text-center">
              <h2 className="text-3xl font-serif font-bold mb-4">Book a Consultation</h2>
              <p className="text-slate-300">Secure a confidential appointment with our legal experts.</p>
              
              <div className="flex justify-center items-center gap-4 mt-8 max-w-md mx-auto">
                <div className={`flex-1 h-1 rounded ${bookingStep >= 1 ? 'bg-amber-500' : 'bg-slate-700'}`}></div>
                <div className={`flex-1 h-1 rounded ${bookingStep >= 2 ? 'bg-amber-500' : 'bg-slate-700'}`}></div>
                <div className={`flex-1 h-1 rounded ${bookingStep >= 3 ? 'bg-amber-500' : 'bg-slate-700'}`}></div>
              </div>
            </div>

            <div className="p-8 sm:p-12">
              {bookingStep === 1 && (
                <div className="space-y-6 animate-in fade-in">
                  <h3 className="text-xl font-bold text-[#0B132B]">1. Select Legal Service</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {["Corporate Law", "Family Law", "Criminal Defense", "Property Law", "Civil Litigation"].map(service => (
                      <div key={service} onClick={() => setBookingStep(2)} className="border-2 border-slate-200 hover:border-amber-500 rounded-xl p-4 cursor-pointer transition-all flex items-center justify-between group">
                        <span className="font-bold text-slate-700 group-hover:text-[#0B132B]">{service}</span>
                        <ChevronRight className="w-5 h-5 text-slate-400 group-hover:text-amber-500" />
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {bookingStep === 2 && (
                <div className="space-y-6 animate-in fade-in">
                  <h3 className="text-xl font-bold text-[#0B132B]">2. Select Date & Time</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="bg-slate-50 p-4 rounded-xl border border-slate-200">
                      <div className="font-bold text-slate-800 mb-4 flex items-center gap-2"><Calendar className="w-5 h-5 text-amber-600"/> Available Dates</div>
                      <div className="grid grid-cols-4 gap-2">
                        {[24, 25, 26, 27, 28, 29, 30].map(day => (
                          <div key={day} className="aspect-square bg-white border border-slate-200 rounded flex items-center justify-center font-bold text-slate-700 hover:bg-amber-50 hover:border-amber-500 cursor-pointer">{day}</div>
                        ))}
                      </div>
                    </div>
                    <div className="bg-slate-50 p-4 rounded-xl border border-slate-200">
                      <div className="font-bold text-slate-800 mb-4 flex items-center gap-2"><Clock className="w-5 h-5 text-amber-600"/> Available Times</div>
                      <div className="grid grid-cols-2 gap-3">
                        {["10:00 AM", "11:30 AM", "02:00 PM", "04:30 PM"].map(time => (
                          <div key={time} onClick={() => setBookingStep(3)} className="bg-white border border-slate-200 rounded py-2 text-center font-bold text-sm text-slate-700 hover:bg-amber-50 hover:border-amber-500 cursor-pointer">{time}</div>
                        ))}
                      </div>
                    </div>
                  </div>
                  <button onClick={() => setBookingStep(1)} className="text-slate-500 text-sm font-bold mt-4 hover:text-[#0B132B]">← Back to Services</button>
                </div>
              )}

              {bookingStep === 3 && (
                <div className="space-y-6 animate-in fade-in">
                  <h3 className="text-xl font-bold text-[#0B132B]">3. Your Details</h3>
                  <div className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <input className="w-full bg-slate-50 border border-slate-200 p-3 rounded focus:outline-none focus:border-amber-500" placeholder="First Name" />
                      <input className="w-full bg-slate-50 border border-slate-200 p-3 rounded focus:outline-none focus:border-amber-500" placeholder="Last Name" />
                    </div>
                    <input className="w-full bg-slate-50 border border-slate-200 p-3 rounded focus:outline-none focus:border-amber-500" placeholder="Email Address" />
                    <input className="w-full bg-slate-50 border border-slate-200 p-3 rounded focus:outline-none focus:border-amber-500" placeholder="Phone Number" />
                    <textarea className="w-full bg-slate-50 border border-slate-200 p-3 rounded focus:outline-none focus:border-amber-500" rows={4} placeholder="Brief summary of your legal need (Optional)"></textarea>
                    
                    <button onClick={() => setBookingStep(4)} className="w-full bg-amber-600 hover:bg-amber-500 text-white font-bold py-4 rounded uppercase tracking-wider transition-colors shadow-lg shadow-amber-900/20">
                      Confirm Appointment
                    </button>
                    <button onClick={() => setBookingStep(2)} className="text-slate-500 text-sm font-bold hover:text-[#0B132B] w-full text-center">← Back to Time Selection</button>
                  </div>
                </div>
              )}

              {bookingStep === 4 && (
                <div className="text-center py-8 animate-in zoom-in duration-500">
                  <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle className="w-10 h-10" />
                  </div>
                  <h3 className="text-2xl font-serif font-bold text-[#0B132B] mb-2">Booking Confirmed!</h3>
                  <p className="text-slate-600 mb-8 max-w-md mx-auto">Your consultation is scheduled for Aug 26, 2026 at 11:30 AM. A confirmation email has been sent to you.</p>
                  <button onClick={() => handleNav('home')} className="bg-[#0B132B] text-white font-bold py-3 px-8 rounded uppercase tracking-wider">Return to Home</button>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* 3. CASE TRACKING SYSTEM (Max Only) */}
      {activeTab === 'tracking' && isMax && (
        <div className="py-20 px-6 max-w-4xl mx-auto font-sans animate-in fade-in slide-in-from-bottom-4">
           <button onClick={() => handleNav('home')} className="text-slate-500 hover:text-[#0B132B] mb-8 font-bold text-sm flex items-center gap-2">
            ← Back to Home
          </button>
          
          <div className="bg-white rounded-2xl shadow-xl border border-slate-200 overflow-hidden">
             <div className="bg-[#0B132B] text-white p-8 sm:p-12 text-center">
              <h2 className="text-3xl font-serif font-bold mb-4">Track Your Case</h2>
              <p className="text-slate-300">Enter your secure Case ID to view real-time status and upcoming milestones.</p>
             </div>
             
             <div className="p-8 sm:p-12">
               <div className="flex gap-4 max-w-xl mx-auto mb-12">
                 <input defaultValue="NY-2026-881" className="flex-1 bg-slate-50 border border-slate-200 p-4 rounded-lg focus:outline-none focus:border-amber-500 font-mono text-center font-bold text-lg" placeholder="Enter Case ID" />
                 <button className="bg-amber-600 hover:bg-amber-500 text-white font-bold px-8 rounded-lg transition-colors flex items-center gap-2"><Search className="w-5 h-5"/> Track</button>
               </div>

               <div className="border border-slate-200 rounded-xl p-8 bg-slate-50 relative overflow-hidden">
                 <div className="absolute top-0 left-0 w-1 h-full bg-amber-500"></div>
                 <div className="flex justify-between items-start mb-8">
                   <div>
                     <h3 className="text-xl font-bold text-[#0B132B]">State vs. Enterprises LLC</h3>
                     <p className="text-slate-500 text-sm mt-1">Case #NY-2026-881 • Assigned Attorney: Robert Sterling</p>
                   </div>
                   <span className="bg-amber-100 text-amber-800 font-bold px-3 py-1 rounded text-xs uppercase tracking-wider">In Progress</span>
                 </div>

                 {/* Timeline */}
                 <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-slate-200">
                    {[
                      { title: "Case Filed", date: "Jul 10, 2026", status: "completed", icon: FileText },
                      { title: "Initial Hearing Scheduled", date: "Jul 25, 2026", status: "completed", icon: Calendar },
                      { title: "Discovery Phase", date: "Aug 15, 2026", status: "current", icon: Search },
                      { title: "Document Submission Deadline", date: "Sep 05, 2026", status: "upcoming", icon: Upload },
                      { title: "Final Hearing", date: "Oct 12, 2026", status: "upcoming", icon: Scale },
                    ].map((step, i) => (
                      <div key={i} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                        <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-slate-50 shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow-sm
                          {step.status === 'completed' ? 'bg-green-500 text-white' : step.status === 'current' ? 'bg-amber-500 text-white animate-pulse' : 'bg-slate-200 text-slate-400'}">
                          <step.icon className="w-4 h-4" />
                        </div>
                        <div className={`w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-4 rounded-xl border shadow-sm ${step.status === 'current' ? 'bg-white border-amber-300' : 'bg-white border-slate-200'}`}>
                          <div className="flex items-center justify-between space-x-2 mb-1">
                            <div className={`font-bold ${step.status === 'current' ? 'text-amber-700' : 'text-slate-800'}`}>{step.title}</div>
                            <time className="font-mono text-xs text-slate-500">{step.date}</time>
                          </div>
                        </div>
                      </div>
                    ))}
                 </div>
               </div>
             </div>
          </div>
        </div>
      )}

      {/* 4. CLIENT SECURE PORTAL (Max Only) */}
      {activeTab === 'portal' && isMax && (
        <div className="min-h-screen bg-slate-100 font-sans flex flex-col md:flex-row animate-in fade-in">
          {/* Sidebar */}
          <div className="w-full md:w-64 bg-[#0B132B] text-slate-300 flex flex-col min-h-screen">
            <div className="p-6 flex items-center gap-3 text-white border-b border-slate-800">
              <Scale className="w-6 h-6 text-amber-500" />
              <div className="font-serif font-bold leading-tight">Sterling<br/>Portal</div>
            </div>
            <div className="p-4 border-b border-slate-800">
              <div className="text-xs text-slate-500 uppercase tracking-wider mb-1">Logged in as</div>
              <div className="font-bold text-white flex items-center justify-between">
                John Doe <ChevronDown className="w-4 h-4" />
              </div>
            </div>
            <nav className="flex-1 p-4 space-y-2">
              {[
                { id: 'dashboard', icon: Home, label: 'Dashboard' },
                { id: 'cases', icon: Briefcase, label: 'My Cases' },
                { id: 'documents', icon: FileArchive, label: 'Document Center' },
                { id: 'messages', icon: MessageSquare, label: 'Messages', badge: '2' },
                { id: 'billing', icon: CreditCard, label: 'Billing & Payments' },
              ].map(item => (
                <button 
                  key={item.id} 
                  onClick={() => setPortalView(item.id)}
                  className={`w-full flex items-center justify-between p-3 rounded-lg transition-colors ${portalView === item.id ? 'bg-amber-600 text-white font-bold' : 'hover:bg-slate-800'}`}
                >
                  <div className="flex items-center gap-3">
                    <item.icon className="w-5 h-5" /> {item.label}
                  </div>
                  {item.badge && <span className="bg-amber-500 text-slate-900 text-xs font-bold px-1.5 py-0.5 rounded-full">{item.badge}</span>}
                </button>
              ))}
            </nav>
            <div className="p-4 border-t border-slate-800">
              <button onClick={() => handleNav('home')} className="w-full flex items-center gap-3 p-3 text-slate-400 hover:text-white transition-colors">
                <ArrowRight className="w-5 h-5" /> Logout & Return
              </button>
            </div>
          </div>

          {/* Portal Main Content */}
          <div className="flex-1 p-6 md:p-10 overflow-y-auto">
             <div className="flex justify-between items-center mb-8">
               <h2 className="text-2xl font-serif font-bold text-[#0B132B]">Welcome back, John</h2>
               <div className="flex gap-4">
                 <button className="relative p-2 bg-white border border-slate-200 rounded-full text-slate-600 hover:text-amber-600 shadow-sm">
                   <Bell className="w-5 h-5" />
                   <span className="absolute top-0 right-0 w-2.5 h-2.5 bg-red-500 rounded-full border-2 border-white"></span>
                 </button>
               </div>
             </div>

             {portalView === 'dashboard' && (
               <div className="space-y-8 animate-in fade-in">
                 {/* Quick Stats */}
                 <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                   <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm flex flex-col justify-between">
                     <div className="text-slate-500 text-sm font-bold uppercase tracking-wider mb-2">Active Cases</div>
                     <div className="text-4xl font-black text-[#0B132B]">1</div>
                   </div>
                   <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm flex flex-col justify-between">
                     <div className="text-slate-500 text-sm font-bold uppercase tracking-wider mb-2">Next Hearing</div>
                     <div className="text-xl font-bold text-amber-700">Aug 28, 2026</div>
                     <div className="text-sm text-slate-500 mt-1">10:00 AM • High Court</div>
                   </div>
                   <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm flex flex-col justify-between">
                     <div className="text-slate-500 text-sm font-bold uppercase tracking-wider mb-2">Outstanding Balance</div>
                     <div className="text-3xl font-black text-red-600">$4,500</div>
                     <button onClick={() => setPortalView('billing')} className="text-xs text-amber-600 font-bold uppercase tracking-wider mt-2 hover:underline text-left">Pay Now →</button>
                   </div>
                 </div>

                 <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                   {/* Recent Activity */}
                   <div className="lg:col-span-2 bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
                     <div className="p-6 border-b border-slate-200 flex justify-between items-center">
                       <h3 className="font-bold text-[#0B132B]">Recent Activity</h3>
                     </div>
                     <div className="divide-y divide-slate-100">
                       {[
                         { icon: FileText, title: "Discovery Document uploaded", time: "2 hours ago", color: "bg-blue-100 text-blue-600" },
                         { icon: MessageSquare, title: "Message received from Robert Sterling", time: "1 day ago", color: "bg-amber-100 text-amber-600" },
                         { icon: CreditCard, title: "Payment of $2,000 processed", time: "3 days ago", color: "bg-green-100 text-green-600" },
                         { icon: Calendar, title: "Hearing date updated", time: "1 week ago", color: "bg-purple-100 text-purple-600" }
                       ].map((item, i) => (
                         <div key={i} className="p-4 flex gap-4 items-center hover:bg-slate-50 cursor-pointer">
                           <div className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 ${item.color}`}>
                             <item.icon className="w-5 h-5" />
                           </div>
                           <div className="flex-1">
                             <div className="font-bold text-sm text-slate-800">{item.title}</div>
                             <div className="text-xs text-slate-500">{item.time}</div>
                           </div>
                         </div>
                       ))}
                     </div>
                   </div>

                   {/* Assigned Team */}
                   <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
                     <div className="p-6 border-b border-slate-200">
                       <h3 className="font-bold text-[#0B132B]">Your Legal Team</h3>
                     </div>
                     <div className="p-6 space-y-6">
                       <div className="flex items-center gap-4">
                         <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=150&q=80" className="w-12 h-12 rounded-full object-cover border border-slate-200" />
                         <div>
                           <div className="font-bold text-slate-800">Robert Sterling</div>
                           <div className="text-xs text-slate-500 uppercase">Lead Attorney</div>
                         </div>
                       </div>
                       <div className="flex items-center gap-4">
                         <div className="w-12 h-12 rounded-full bg-slate-200 flex items-center justify-center text-slate-500 font-bold border border-slate-300">SJ</div>
                         <div>
                           <div className="font-bold text-slate-800">Sarah Jenkins</div>
                           <div className="text-xs text-slate-500 uppercase">Paralegal</div>
                         </div>
                       </div>
                       <button onClick={() => setPortalView('messages')} className="w-full mt-4 bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold py-2 rounded transition-colors text-sm flex items-center justify-center gap-2">
                         <MessageSquare className="w-4 h-4" /> Message Team
                       </button>
                     </div>
                   </div>
                 </div>
               </div>
             )}

             {portalView === 'billing' && (
               <div className="space-y-6 animate-in fade-in">
                 <div className="bg-white p-8 rounded-xl border border-slate-200 shadow-sm">
                   <h3 className="font-bold text-[#0B132B] text-xl mb-6">Pay Legal Fees</h3>
                   
                   <div className="bg-red-50 border border-red-200 p-6 rounded-lg mb-8 flex justify-between items-center">
                     <div>
                       <div className="text-red-800 font-bold">Outstanding Balance</div>
                       <div className="text-xs text-red-600 mt-1">Due by Aug 30, 2026</div>
                     </div>
                     <div className="text-3xl font-black text-red-700">$4,500.00</div>
                   </div>

                   <div className="space-y-4">
                     <h4 className="font-bold text-slate-700 text-sm uppercase tracking-wider mb-4">Payment Method</h4>
                     <div className="border border-amber-500 bg-amber-50 rounded-lg p-4 flex items-center justify-between cursor-pointer">
                       <div className="flex items-center gap-3">
                         <CreditCard className="w-6 h-6 text-amber-600" />
                         <div>
                           <div className="font-bold text-slate-800">Credit Card</div>
                           <div className="text-xs text-slate-500">Secure online payment</div>
                         </div>
                       </div>
                       <div className="w-5 h-5 rounded-full border-4 border-amber-600 bg-white"></div>
                     </div>
                     <div className="border border-slate-200 hover:border-slate-300 bg-white rounded-lg p-4 flex items-center justify-between cursor-pointer">
                       <div className="flex items-center gap-3">
                         <div className="font-bold text-slate-800">Bank Transfer / Wire</div>
                       </div>
                       <div className="w-5 h-5 rounded-full border border-slate-300"></div>
                     </div>
                     
                     <div className="pt-6">
                       <button className="w-full bg-[#0B132B] hover:bg-slate-800 text-white font-bold py-4 rounded-lg uppercase tracking-wider shadow-lg flex items-center justify-center gap-2">
                         Pay $4,500.00 Securely <Check className="w-5 h-5" />
                       </button>
                       <p className="text-center text-xs text-slate-400 mt-3 flex items-center justify-center gap-1"><Shield className="w-3 h-3"/> SSL Encrypted Transaction</p>
                     </div>
                   </div>
                 </div>

                 <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
                   <div className="p-6 border-b border-slate-200">
                     <h3 className="font-bold text-[#0B132B]">Invoice History</h3>
                   </div>
                   <table className="w-full text-left text-sm">
                     <thead className="bg-slate-50 text-slate-500 uppercase tracking-wider text-xs">
                       <tr>
                         <th className="p-4 font-bold">Invoice #</th>
                         <th className="p-4 font-bold">Date</th>
                         <th className="p-4 font-bold">Amount</th>
                         <th className="p-4 font-bold">Status</th>
                         <th className="p-4 font-bold">Action</th>
                       </tr>
                     </thead>
                     <tbody className="divide-y divide-slate-100">
                       <tr>
                         <td className="p-4 font-mono">INV-2026-089</td>
                         <td className="p-4">Aug 01, 2026</td>
                         <td className="p-4 font-bold">$4,500.00</td>
                         <td className="p-4"><span className="bg-red-100 text-red-700 px-2 py-1 rounded text-xs font-bold uppercase">Unpaid</span></td>
                         <td className="p-4"><button className="text-amber-600 font-bold hover:underline">View PDF</button></td>
                       </tr>
                       <tr>
                         <td className="p-4 font-mono">INV-2026-042</td>
                         <td className="p-4">Jul 15, 2026</td>
                         <td className="p-4 font-bold">$2,000.00</td>
                         <td className="p-4"><span className="bg-green-100 text-green-700 px-2 py-1 rounded text-xs font-bold uppercase">Paid</span></td>
                         <td className="p-4"><button className="text-amber-600 font-bold hover:underline">View PDF</button></td>
                       </tr>
                     </tbody>
                   </table>
                 </div>
               </div>
             )}

             {portalView === 'documents' && (
               <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-6 sm:p-8 animate-in fade-in">
                 <div className="flex justify-between items-center mb-8">
                   <h3 className="font-bold text-[#0B132B] text-xl">Document Center</h3>
                   <button className="bg-amber-600 hover:bg-amber-500 text-white font-bold py-2 px-4 rounded text-sm flex items-center gap-2">
                     <Upload className="w-4 h-4" /> Upload File
                   </button>
                 </div>
                 
                 <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                   {["Signed Retainer Agreement.pdf", "Discovery Brief - Aug.docx", "Financial Disclosures.pdf", "Court Order - Preliminary.pdf", "Client Intake Form.pdf"].map((doc, i) => (
                     <div key={i} className="border border-slate-200 rounded-lg p-4 hover:border-amber-500 hover:shadow-md transition-all group flex flex-col justify-between h-32 cursor-pointer bg-slate-50 hover:bg-white">
                       <div className="flex items-start justify-between">
                         <FileText className="w-6 h-6 text-slate-400 group-hover:text-amber-600" />
                         <button className="text-slate-400 hover:text-[#0B132B]"><Download className="w-4 h-4" /></button>
                       </div>
                       <div>
                         <div className="font-bold text-sm text-slate-800 line-clamp-2 leading-tight">{doc}</div>
                         <div className="text-xs text-slate-500 mt-2">Added Aug {i+1}, 2026</div>
                       </div>
                     </div>
                   ))}
                 </div>
               </div>
             )}

             {portalView === 'messages' && (
               <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden flex flex-col h-[600px] animate-in fade-in">
                 <div className="p-4 border-b border-slate-200 bg-slate-50 flex items-center justify-between">
                   <div className="flex items-center gap-3">
                     <div className="w-10 h-10 bg-amber-600 text-white rounded-full flex items-center justify-center font-bold">RS</div>
                     <div>
                       <div className="font-bold text-[#0B132B]">Robert Sterling</div>
                       <div className="text-xs text-green-600 font-bold">Online</div>
                     </div>
                   </div>
                 </div>
                 <div className="flex-1 p-6 overflow-y-auto space-y-4 bg-slate-50/50">
                   <div className="flex justify-center"><span className="text-xs text-slate-400 bg-slate-100 px-2 py-1 rounded">Today</span></div>
                   
                   <div className="flex items-start gap-3 max-w-lg">
                     <div className="w-8 h-8 bg-amber-600 text-white rounded-full flex items-center justify-center font-bold text-xs shrink-0">RS</div>
                     <div className="bg-white border border-slate-200 p-3 rounded-2xl rounded-tl-none shadow-sm text-sm text-slate-700">
                       Hello John, I've reviewed the financial disclosures you uploaded yesterday. Everything looks in order. I'll be drafting the response brief this afternoon.
                     </div>
                   </div>
                   
                   <div className="flex items-start gap-3 max-w-lg ml-auto flex-row-reverse">
                     <div className="w-8 h-8 bg-[#0B132B] text-white rounded-full flex items-center justify-center font-bold text-xs shrink-0">JD</div>
                     <div className="bg-[#0B132B] p-3 rounded-2xl rounded-tr-none shadow-sm text-sm text-white">
                       Thank you, Robert. Let me know if you need any additional documentation from my accountant.
                     </div>
                   </div>

                   <div className="flex items-start gap-3 max-w-lg">
                     <div className="w-8 h-8 bg-amber-600 text-white rounded-full flex items-center justify-center font-bold text-xs shrink-0">RS</div>
                     <div className="bg-white border border-slate-200 p-3 rounded-2xl rounded-tl-none shadow-sm text-sm text-slate-700">
                       Will do. I'll send an update by end of day Friday.
                     </div>
                   </div>
                 </div>
                 <div className="p-4 border-t border-slate-200 bg-white">
                   <div className="flex gap-2">
                     <input type="text" placeholder="Type a secure message..." className="flex-1 bg-slate-50 border border-slate-200 rounded-lg px-4 py-2 focus:outline-none focus:border-amber-500" />
                     <button className="bg-amber-600 hover:bg-amber-500 text-white px-4 rounded-lg font-bold"><ArrowRight className="w-5 h-5"/></button>
                   </div>
                 </div>
               </div>
             )}
             
             {portalView === 'cases' && (
               <div className="space-y-6 animate-in fade-in">
                 <h3 className="font-bold text-[#0B132B] text-xl mb-6">My Cases</h3>
                 <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-6 flex flex-col md:flex-row justify-between items-center gap-6">
                   <div>
                     <span className="bg-amber-100 text-amber-800 text-xs font-bold uppercase tracking-wider px-2 py-1 rounded">Active</span>
                     <h4 className="text-lg font-bold text-[#0B132B] mt-2">State vs. Enterprises LLC</h4>
                     <p className="text-sm text-slate-500 mt-1">Case #NY-2026-881 • Filed Jul 10, 2026</p>
                   </div>
                   <button onClick={() => setPortalView('dashboard')} className="bg-[#0B132B] text-white font-bold py-2 px-6 rounded text-sm hover:bg-slate-800">View Details</button>
                 </div>
               </div>
             )}
          </div>
        </div>
      )}

      
      {/* 5. ADVANCED ADMIN DASHBOARD (Max Only) */}
      {activeTab === 'admin' && isMax && (
        <div className="min-h-screen bg-slate-100 font-sans flex flex-col md:flex-row animate-in fade-in">
          <div className="w-full md:w-64 bg-[#0B132B] text-slate-300 flex flex-col min-h-screen">
            <div className="p-6 flex items-center gap-3 text-white border-b border-slate-800">
              <Scale className="w-6 h-6 text-amber-500" />
              <div className="font-serif font-bold leading-tight">System<br/>Admin</div>
            </div>
            <nav className="flex-1 p-4 space-y-2">
              <button className="w-full flex items-center gap-3 p-3 rounded-lg transition-colors bg-amber-600 text-white font-bold">
                <Home className="w-5 h-5" /> Overview
              </button>
              <button className="w-full flex items-center gap-3 p-3 rounded-lg transition-colors hover:bg-slate-800">
                <Users className="w-5 h-5" /> Clients
              </button>
              <button className="w-full flex items-center gap-3 p-3 rounded-lg transition-colors hover:bg-slate-800">
                <Briefcase className="w-5 h-5" /> Cases
              </button>
            </nav>
            <div className="p-4 border-t border-slate-800">
              <button onClick={() => handleNav('home')} className="w-full flex items-center gap-3 p-3 text-slate-400 hover:text-white transition-colors">
                <ArrowRight className="w-5 h-5" /> Back to Site
              </button>
            </div>
          </div>
          <div className="flex-1 p-6 md:p-10 overflow-y-auto">
            <h2 className="text-2xl font-serif font-bold text-[#0B132B] mb-8">Firm Administration</h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              {[
                { label: "Total Clients", val: "1,248" },
                { label: "Active Cases", val: "84" },
                { label: "New Enquiries", val: "12", alert: true },
                { label: "Pending Payments", val: "$42,500" }
              ].map((stat, i) => (
                <div key={i} className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm relative overflow-hidden">
                  {stat.alert && <div className="absolute top-0 right-0 w-16 h-16 bg-red-500 rotate-45 translate-x-8 -translate-y-8"></div>}
                  <div className="text-slate-500 text-xs font-bold uppercase tracking-wider mb-2">{stat.label}</div>
                  <div className="text-3xl font-black text-[#0B132B]">{stat.val}</div>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
               <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
                 <div className="p-6 border-b border-slate-200">
                   <h3 className="font-bold text-[#0B132B]">Upcoming Hearings</h3>
                 </div>
                 <div className="divide-y divide-slate-100">
                   {[
                     { case: "State vs. Enterprises LLC", date: "Tomorrow, 10:00 AM", attorney: "R. Sterling" },
                     { case: "Smith Family Trust", date: "Aug 26, 2:00 PM", attorney: "S. Jenkins" }
                   ].map((h, i) => (
                     <div key={i} className="p-4 flex justify-between items-center">
                       <div>
                         <div className="font-bold text-sm text-[#0B132B]">{h.case}</div>
                         <div className="text-xs text-red-600 font-bold">{h.date}</div>
                       </div>
                       <div className="text-xs bg-slate-100 text-slate-600 px-2 py-1 rounded">{h.attorney}</div>
                     </div>
                   ))}
                 </div>
               </div>
               
               <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
                 <div className="p-6 border-b border-slate-200">
                   <h3 className="font-bold text-[#0B132B]">Recent Enquiries</h3>
                 </div>
                 <div className="divide-y divide-slate-100">
                   {[
                     { name: "Michael Chang", type: "Corporate Dispute", time: "2 hours ago" },
                     { name: "Sarah Williams", type: "Family Law", time: "5 hours ago" }
                   ].map((e, i) => (
                     <div key={i} className="p-4 flex justify-between items-center">
                       <div>
                         <div className="font-bold text-sm text-[#0B132B]">{e.name}</div>
                         <div className="text-xs text-slate-500">{e.type}</div>
                       </div>
                       <button className="text-xs text-amber-600 font-bold hover:underline">Assign</button>
                     </div>
                   ))}
                 </div>
               </div>
            </div>
          </div>
        </div>
      )}

      {/* 6. ATTORNEY DASHBOARD (Max Only) */}
      {activeTab === 'attorney' && isMax && (
        <div className="min-h-screen bg-slate-100 font-sans flex flex-col md:flex-row animate-in fade-in">
          <div className="w-full md:w-64 bg-[#0B132B] text-slate-300 flex flex-col min-h-screen">
            <div className="p-6 flex items-center gap-3 text-white border-b border-slate-800">
              <div className="w-10 h-10 bg-amber-600 rounded-full flex items-center justify-center font-bold text-white">RS</div>
              <div>
                <div className="font-serif font-bold leading-tight">Robert Sterling</div>
                <div className="text-[10px] text-amber-500 uppercase">Partner</div>
              </div>
            </div>
            <nav className="flex-1 p-4 space-y-2">
              <button className="w-full flex items-center gap-3 p-3 rounded-lg transition-colors bg-amber-600 text-white font-bold">
                <Briefcase className="w-5 h-5" /> My Cases
              </button>
              <button className="w-full flex items-center gap-3 p-3 rounded-lg transition-colors hover:bg-slate-800">
                <Calendar className="w-5 h-5" /> Schedule
              </button>
              <button className="w-full flex items-center gap-3 p-3 rounded-lg transition-colors hover:bg-slate-800 justify-between">
                <div className="flex items-center gap-3"><MessageSquare className="w-5 h-5" /> Messages</div>
                <span className="bg-amber-500 text-slate-900 text-[10px] px-1.5 py-0.5 rounded font-bold">1 New</span>
              </button>
            </nav>
            <div className="p-4 border-t border-slate-800">
              <button onClick={() => handleNav('home')} className="w-full flex items-center gap-3 p-3 text-slate-400 hover:text-white transition-colors">
                <ArrowRight className="w-5 h-5" /> Back to Site
              </button>
            </div>
          </div>
          
          <div className="flex-1 p-6 md:p-10 overflow-y-auto">
             <h2 className="text-2xl font-serif font-bold text-[#0B132B] mb-8">Attorney Workspace</h2>
             
             <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
               <div className="lg:col-span-2 space-y-8">
                 <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
                   <div className="p-6 border-b border-slate-200 flex justify-between items-center">
                     <h3 className="font-bold text-[#0B132B]">Assigned Cases</h3>
                   </div>
                   <table className="w-full text-left text-sm">
                     <thead className="bg-slate-50 text-slate-500 uppercase tracking-wider text-xs">
                       <tr>
                         <th className="p-4 font-bold">Case</th>
                         <th className="p-4 font-bold">Client</th>
                         <th className="p-4 font-bold">Status</th>
                         <th className="p-4 font-bold">Action</th>
                       </tr>
                     </thead>
                     <tbody className="divide-y divide-slate-100">
                       <tr>
                         <td className="p-4"><div className="font-bold text-[#0B132B]">NY-2026-881</div><div className="text-xs text-slate-500">State vs. Enterprises LLC</div></td>
                         <td className="p-4">John Doe</td>
                         <td className="p-4"><span className="bg-amber-100 text-amber-800 px-2 py-1 rounded text-xs font-bold uppercase">Discovery</span></td>
                         <td className="p-4"><button className="text-amber-600 font-bold hover:underline">Manage</button></td>
                       </tr>
                       <tr>
                         <td className="p-4"><div className="font-bold text-[#0B132B]">NY-2026-902</div><div className="text-xs text-slate-500">TechCorp Merger</div></td>
                         <td className="p-4">TechCorp Inc</td>
                         <td className="p-4"><span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs font-bold uppercase">Negotiation</span></td>
                         <td className="p-4"><button className="text-amber-600 font-bold hover:underline">Manage</button></td>
                       </tr>
                     </tbody>
                   </table>
                 </div>
                 
                 <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-6">
                   <h3 className="font-bold text-[#0B132B] mb-4">Case Documents to Review</h3>
                   <div className="space-y-3">
                     {["Discovery Brief - John Doe", "Merger Draft - TechCorp", "Subpoena Response - NY-2026-881"].map((doc, i) => (
                       <div key={i} className="flex justify-between items-center p-3 border border-slate-200 rounded-lg bg-slate-50">
                         <div className="flex items-center gap-3">
                           <FileText className="w-5 h-5 text-amber-600" />
                           <span className="font-bold text-sm text-slate-800">{doc}</span>
                         </div>
                         <button className="text-xs bg-[#0B132B] text-white px-3 py-1.5 rounded font-bold hover:bg-slate-800">Review</button>
                       </div>
                     ))}
                   </div>
                 </div>
               </div>

               <div className="space-y-8">
                 <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-6">
                   <h3 className="font-bold text-[#0B132B] mb-4">Today's Appointments</h3>
                   <div className="space-y-4">
                     <div className="border-l-4 border-amber-500 pl-4 py-1">
                       <div className="font-bold text-[#0B132B] text-sm">Initial Consultation: Alice Smith</div>
                       <div className="text-xs text-slate-500 flex items-center gap-1 mt-1"><Clock className="w-3 h-3"/> 11:30 AM (Online)</div>
                     </div>
                     <div className="border-l-4 border-slate-300 pl-4 py-1">
                       <div className="font-bold text-[#0B132B] text-sm">Case Strategy: John Doe</div>
                       <div className="text-xs text-slate-500 flex items-center gap-1 mt-1"><Clock className="w-3 h-3"/> 2:00 PM (In Person)</div>
                     </div>
                   </div>
                 </div>
               </div>
             </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="bg-[#070B19] text-white py-12 px-6 border-t border-slate-800 font-sans">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6 text-center md:text-left">
          <div className="space-y-2">
            <div className="font-serif text-xl font-bold flex items-center justify-center md:justify-start gap-2">
              <Scale className="w-5 h-5 text-amber-500" /> Sterling & Associates
            </div>
            <p className="text-xs text-slate-500 max-w-sm">Strategic Legal Counsel. Relentless Advocacy. Trusted since 1998.</p>
          </div>
          <div className="text-xs text-slate-500 flex flex-wrap justify-center gap-4">
            <span className="hover:text-amber-400 cursor-pointer">Privacy Policy</span>
            <span className="hover:text-amber-400 cursor-pointer">Terms of Service</span>
            <span className="hover:text-amber-400 cursor-pointer">Attorney Advertising</span>
          </div>
        </div>
      </footer>

      {/* Basic Consultation Modal (Base Plan) */}
      {consultModal && (
        <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4 font-sans animate-in fade-in">
          <div className="bg-white p-8 rounded-xl max-w-md w-full space-y-4 text-left shadow-2xl relative">
            <div className="flex justify-between items-center mb-2">
              <h3 className="font-serif text-2xl font-bold text-[#0B132B]">
                Enquire Now
              </h3>
              <button
                onClick={() => setConsultModal(false)}
                className="text-slate-400 hover:text-slate-800 bg-slate-100 rounded-full p-1"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <p className="text-sm text-slate-500 border-b border-slate-100 pb-4">
              Leave your details and our legal team will contact you shortly.
            </p>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setConsultModal(false);
              }}
              className="space-y-4 pt-2"
            >
              <input
                type="text"
                placeholder="Full Name"
                required
                className="w-full bg-slate-50 border border-slate-200 rounded p-3 text-slate-800 focus:outline-none focus:border-amber-500"
              />
              <input
                type="tel"
                placeholder="Phone Number"
                required
                className="w-full bg-slate-50 border border-slate-200 rounded p-3 text-slate-800 focus:outline-none focus:border-amber-500"
              />
              <textarea
                placeholder="Brief summary (Optional)"
                rows={3}
                className="w-full bg-slate-50 border border-slate-200 rounded p-3 text-slate-800 focus:outline-none focus:border-amber-500"
              ></textarea>
              <button
                type="submit"
                className="w-full bg-[#0B132B] hover:bg-slate-800 text-white font-bold py-3.5 rounded text-sm uppercase tracking-wider mt-2 shadow-lg"
              >
                Submit Enquiry
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
