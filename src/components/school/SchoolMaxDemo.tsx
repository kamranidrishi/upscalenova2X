import React, { useState } from 'react';
import { DemoItem } from '../../data/demos';
import {
  GraduationCap, Phone, Mail, MapPin, Clock, ArrowRight,
  BookOpen, Award, CheckCircle2, ChevronRight, Image as ImageIcon,
  X, MessageCircle, Send, Check, Star, Users, Calendar, Trophy,
  Sparkles, Compass, Shield, Heart, HelpCircle, ChevronDown, ChevronUp,
  Search, Play, Eye, Flame, Layers, Filter, Globe, Video, Download,
  ExternalLink, Atom, Cpu, Rocket, Bookmark, Building, Share2
} from 'lucide-react';

interface SchoolMaxDemoProps {
  demo: DemoItem;
  isMobile: boolean;
  isTablet: boolean;
}

export const SchoolMaxDemo: React.FC<SchoolMaxDemoProps> = ({ isMobile, isTablet }) => {
  const [activeNav, setActiveNav] = useState('home');
  const [lightboxMedia, setLightboxMedia] = useState<{ type: 'photo' | 'video'; url: string; title: string; tag: string } | null>(null);
  const [galleryFilter, setGalleryFilter] = useState('All');
  const [mediaTypeFilter, setMediaTypeFilter] = useState<'all' | 'photo' | 'video'>('all');
  const [activeDepartment, setActiveDepartment] = useState<'early' | 'primary' | 'middle' | 'senior'>('senior');
  const [activeSeniorStream, setActiveSeniorStream] = useState<'stem' | 'fintech' | 'humanities'>('stem');
  const [activeLifeTab, setActiveLifeTab] = useState<'houses' | 'council' | 'tedx' | 'clubs'>('houses');
  const [expandedFaq, setExpandedFaq] = useState<number | null>(0);
  const [enquirySubmitted, setEnquirySubmitted] = useState(false);
  const [virtualTourOpen, setVirtualTourOpen] = useState(false);
  const [newsletterSubscribed, setNewsletterSubscribed] = useState(false);
  const [scholarshipModalOpen, setScholarshipModalOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNav = (tab: string) => {
    setActiveNav(tab);
    setMobileMenuOpen(false);
  };

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'academics', label: 'Academics' },
    { id: 'campus', label: 'Campus' },
    { id: 'life', label: 'Life at School' },
    { id: 'admissions', label: 'Admissions' },
    { id: 'gallery', label: 'Gallery' },
    { id: 'events', label: 'Events' },
    { id: 'contact', label: 'Contact' },
  ];

  const galleryData = [
    { type: 'photo' as const, title: 'Artificial Intelligence & Aero Lab', url: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&w=800&q=80', tag: 'Innovation' },
    { type: 'video' as const, title: '360° Aerial Campus Cinematic Flight', url: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=800&q=80', tag: 'Campus Tour' },
    { type: 'photo' as const, title: 'World Class Olympic Aquatic Arena', url: 'https://images.unsplash.com/photo-1530549387789-4c1017266635?auto=format&fit=crop&w=800&q=80', tag: 'Sports' },
    { type: 'photo' as const, title: 'Central Knowledge & Research Dome', url: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=800&q=80', tag: 'Library' },
    { type: 'video' as const, title: 'Annual Symphony & TEDx Youth Stage', url: 'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=800&q=80', tag: 'Cultural' },
    { type: 'photo' as const, title: 'Advanced Nanotech & Biotech Suite', url: 'https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&w=800&q=80', tag: 'Innovation' },
    { type: 'photo' as const, title: 'International Model UN Summit', url: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=800&q=80', tag: 'Leadership' },
    { type: 'photo' as const, title: 'Synthetic FIFA-Standard Turf Arena', url: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&w=800&q=80', tag: 'Sports' },
    { type: 'video' as const, title: 'Robotics & Autonomous Rover Trials', url: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=800&q=80', tag: 'Innovation' },
  ];

  const facultyProfiles = [
    { name: 'Dr. Sunita Sharma', role: 'Director General & Academic Dean', qual: 'Ph.D. Education (Oxford & IIT-B Advisory)', awards: 'National Best Educator Award', img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80', dept: 'Senior Leadership' },
    { name: 'Dr. Arvind Subramaniam', role: 'Head of Quantum Sciences & AI', qual: 'Ph.D. Quantum Physics (IISc Bangalore)', awards: 'Author of 14 Research Papers', img: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=400&q=80', dept: 'STEM Faculty' },
    { name: 'Prof. Evelyn Reed-Kulkarni', role: 'Dean of Global Humanities & Law', qual: 'M.Phil. International Law (LSE London)', awards: 'Diplomatic Affairs Fellow', img: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=400&q=80', dept: 'Humanities' },
    { name: 'Coach Marcus Vance', role: 'Director of High-Performance Athletics', qual: 'High Performance Coach (Ex-Olympian Trainer)', awards: 'National Track Laurels', img: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=400&q=80', dept: 'Olympic Sports' },
  ];

  const alumniSpotlights = [
    { name: 'Aditya Kashyap', batch: 'Class of 2021', now: 'AI Researcher at DeepMind / Stanford CS', quote: 'The research culture and autonomy at BrightFuture Max gave me the edge to compete on the world stage.' },
    { name: 'Pooja Nair', batch: 'Class of 2022', now: 'MBBS Scholar at AIIMS New Delhi', quote: 'The clinical lab training and rigorous faculty mentoring built my biological intuition long before medical school.' },
    { name: 'Kabir Singhania', batch: 'Class of 2020', now: 'Fintech Founder (Featured in Forbes 30u30)', quote: 'The Commerce wing incubators and stock market labs sparked my entrepreneurial journey in grade 11.' }
  ];

  const newsAnnouncements = [
    { date: 'OCT 24', cat: 'GLOBAL HONORS', title: 'BrightFuture Max Wins International STEM Olympiad Trophy in Singapore', desc: 'Our 6-member robotics delegation took 1st place among 120 global international schools.' },
    { date: 'NOV 08', cat: 'ADMISSIONS', title: 'Merit Scholarship Entrance Examination (MSEE 2026) Registrations Live', desc: '100% full tuition scholarships offered for top 50 national performers across Grades 8–11.' },
    { date: 'NOV 20', cat: 'CAMPUS INNOVATION', title: 'Commissioning of the New 50-Foot Astronomical Observatory & Space Wing', desc: 'Equipped with computerized celestial tracking telescopes for student astrophysics research.' }
  ];

  const maxFaqs = [
    { q: 'What makes BrightFuture Max distinct from conventional schools?', a: 'BrightFuture Max operates as an elite preparatory institution featuring university-grade research laboratories, Olympic sports coaching, AI/quantum computing curricula, international faculty mentorship, and a 100% placement track record in top global universities (IITs, AIIMS, Stanford, Cambridge, MIT).' },
    { q: 'What is the Merit Scholarship Evaluation criteria for 2026-27?', a: 'We offer up to 100% academic waivers for students achieving >95% in qualifying aptitude tests, state/national sports medalists, and national Olympiad rank holders. Complete the online scholarship enquiry to receive test dates.' },
    { q: 'What residential boarding and day-boarding options are available?', a: 'We provide 5-day weekly boarding and 7-day full residential programs with 5-star climate-controlled ensuite rooms, dedicated evening tutoring, organic nutritionist-crafted meals, and 24/7 medical hospice care.' },
    { q: 'How does the school integrate competitive exam coaching (JEE/NEET/CLAT/SAT)?', a: 'Our curriculum features in-house integrated faculty who deliver targeted foundation training within the regular school schedule, eliminating external coaching stress.' }
  ];

  return (
    <div className="w-full h-full bg-[#030712] text-slate-100 overflow-y-auto overflow-x-hidden font-sans custom-scrollbar">
      
      {/* Lightbox / Video Modal */}
      {lightboxMedia && (
        <div className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-4">
          <div className="relative max-w-4xl w-full bg-slate-900/90 rounded-3xl border border-indigo-500/30 overflow-hidden shadow-2xl">
            <button
              onClick={() => setLightboxMedia(null)}
              className="absolute top-4 right-4 z-10 text-white hover:text-amber-400 p-2 bg-black/50 rounded-full"
            >
              <X className="w-6 h-6" />
            </button>
            <div className="relative aspect-video bg-black flex items-center justify-center">
              <img src={lightboxMedia.url} alt={lightboxMedia.title} className="w-full h-full object-cover" />
              {lightboxMedia.type === 'video' && (
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                  <div className="w-20 h-20 rounded-full bg-indigo-600/90 text-white flex items-center justify-center shadow-2xl animate-pulse">
                    <Play className="w-8 h-8 fill-current ml-1" />
                  </div>
                </div>
              )}
            </div>
            <div className="p-5 flex justify-between items-center text-white bg-slate-950">
              <div>
                <span className="text-[10px] uppercase font-black tracking-widest text-amber-400 bg-amber-400/10 px-2.5 py-1 rounded-full border border-amber-400/20">
                  {lightboxMedia.tag}
                </span>
                <h4 className="text-base font-bold mt-1 text-slate-100">{lightboxMedia.title}</h4>
              </div>
              <span className="text-xs text-indigo-300 font-semibold">{lightboxMedia.type === 'video' ? 'Full 4K Video Tour' : 'High Resolution Photo'}</span>
            </div>
          </div>
        </div>
      )}

      {/* Virtual 360 Tour Modal */}
      {virtualTourOpen && (
        <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4">
          <div className="bg-slate-900 border border-indigo-500/40 rounded-3xl max-w-2xl w-full p-6 sm:p-8 relative text-white space-y-6">
            <button onClick={() => setVirtualTourOpen(false)} className="absolute top-5 right-5 text-slate-400 hover:text-white">
              <X className="w-6 h-6" />
            </button>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-indigo-600/20 text-indigo-400 flex items-center justify-center border border-indigo-500/30">
                <Globe className="w-7 h-7" />
              </div>
              <div>
                <h3 className="text-xl font-black text-white">360° Virtual Campus Experience</h3>
                <p className="text-xs text-slate-400">Explore our 50-acre flagship infrastructure virtually.</p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3 text-xs font-semibold">
              {['AI & Quantum Research Hub', 'Olympic Aquatic Center', 'Space Observatory Dome', 'Central Amphitheater & Arts Wing'].map((spot, i) => (
                <div key={i} className="bg-white/5 p-3 rounded-xl border border-white/10 flex items-center gap-2 hover:bg-indigo-600/20 cursor-pointer transition-colors">
                  <Play className="w-4 h-4 text-amber-400" />
                  <span>{spot}</span>
                </div>
              ))}
            </div>

            <div className="bg-indigo-950/60 p-4 rounded-2xl border border-indigo-700/40 text-xs text-indigo-200 flex justify-between items-center">
              <span>Want an exclusive physical campus tour with the Principal?</span>
              <button 
                onClick={() => { setVirtualTourOpen(false); handleNav('contact'); }}
                className="bg-amber-400 text-slate-950 px-4 py-2 rounded-xl font-bold text-xs hover:bg-amber-300"
              >
                Book VIP Visit
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Top Announcements Bar (Obsidian & Luminescent Gold) */}
      <div className="bg-[#0B1329] border-b border-indigo-900/40 text-xs px-4 md:px-8 py-2.5 flex flex-wrap justify-between items-center gap-3 text-slate-300">
        <div className="flex items-center gap-3 flex-wrap">
          <span className="bg-gradient-to-r from-amber-400 to-amber-500 text-slate-950 font-black px-2.5 py-0.5 rounded text-[10px] uppercase tracking-wider flex items-center gap-1 shadow-sm">
            <Trophy className="w-3 h-3" /> FLAGSHIP INSTITUTION
          </span>
          <span className="text-slate-300 font-medium hidden sm:inline">
            CBSE & International Baccalaureate Candidate • Ranked Top 5 in India • Admissions 2026-27 Open
          </span>
        </div>

        <div className="flex items-center gap-6 text-xs font-semibold">
          <button 
            onClick={() => setVirtualTourOpen(true)}
            className="text-amber-400 hover:text-amber-300 flex items-center gap-1.5 cursor-pointer font-bold"
          >
            <Globe className="w-3.5 h-3.5" /> 360° Virtual Tour
          </button>
          <span className="flex items-center gap-1.5 text-slate-200">
            <Phone className="w-3.5 h-3.5 text-amber-400" /> +91 99887 76655
          </span>
        </div>
      </div>

      {/* Cinematic Luxury Dark Header */}
      <header className="bg-[#030712]/90 backdrop-blur-xl border-b border-white/10 sticky top-0 z-40 shadow-2xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
          <div 
            onClick={() => handleNav('home')}
            className="flex items-center gap-3.5 cursor-pointer group"
          >
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-indigo-600 via-purple-700 to-indigo-900 text-white flex items-center justify-center shadow-xl shadow-indigo-600/30 group-hover:scale-105 transition-transform border border-indigo-400/30">
              <GraduationCap className="w-7 h-7 text-amber-400" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h1 className="text-2xl font-black text-white tracking-tight leading-none">BRIGHTFUTURE</h1>
                <span className="bg-gradient-to-r from-amber-400 to-amber-500 text-slate-950 text-[10px] font-black uppercase px-2 py-0.5 rounded shadow-xs">
                  MAX
                </span>
              </div>
              <p className="text-[11px] font-bold text-indigo-400 tracking-wider uppercase mt-1">World Class Global Academy</p>
            </div>
          </div>

          {/* Desktop Nav Items */}
          {!isMobile && !isTablet && (
            <nav className="flex items-center gap-1">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNav(item.id)}
                  className={`px-3 py-2 rounded-xl text-xs font-black uppercase tracking-wider transition-all ${
                    activeNav === item.id 
                      ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-600/40 border border-indigo-400/50' 
                      : 'text-slate-300 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {item.label}
                </button>
              ))}
              <button
                onClick={() => handleNav('admissions')}
                className="ml-3 bg-gradient-to-r from-amber-400 via-amber-500 to-yellow-500 hover:from-amber-500 hover:to-amber-600 text-slate-950 font-black text-xs px-5 py-2.5 rounded-xl shadow-xl shadow-amber-400/20 transition-all uppercase tracking-wider"
              >
                Apply 2026-27
              </button>
            </nav>
          )}

          {/* Mobile menu button */}
          {(isMobile || isTablet) && (
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-xl bg-white/10 text-white border border-white/20"
            >
              <span className="text-xs font-black px-1">MENU</span>
            </button>
          )}
        </div>

        {/* Mobile dropdown */}
        {(isMobile || isTablet) && mobileMenuOpen && (
          <div className="bg-[#0B1329] border-t border-white/10 px-4 py-4 space-y-1 shadow-2xl">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNav(item.id)}
                className={`w-full text-left px-4 py-3 rounded-xl text-xs font-black uppercase tracking-wider ${
                  activeNav === item.id ? 'bg-indigo-600 text-white' : 'text-slate-300 hover:bg-white/5'
                }`}
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={() => handleNav('admissions')}
              className="w-full bg-gradient-to-r from-amber-400 to-amber-500 text-slate-950 font-black text-xs py-3 rounded-xl uppercase tracking-wider mt-2"
            >
              Apply 2026-27
            </button>
          </div>
        )}
      </header>

      {/* =========================================================================
          VIEW: MAX HOME (Cinematic 15-Section Ecosystem)
      ========================================================================= */}
      {activeNav === 'home' && (
        <div className="space-y-20 pb-24">
          
          {/* 1. Cinematic Full-Bleed Hero */}
          <section className="relative min-h-[580px] lg:min-h-[640px] flex items-center justify-center text-center px-4 sm:px-6 overflow-hidden">
            {/* Background Image with Ambient Dark Overlay */}
            <div className="absolute inset-0 z-0">
              <img 
                src="https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1800&q=80" 
                alt="Elite campus" 
                className="w-full h-full object-cover scale-105 filter brightness-50"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#030712] via-[#030712]/70 to-transparent"></div>
              <div className="absolute inset-0 bg-radial-at-c from-indigo-900/30 via-transparent to-transparent"></div>
            </div>

            <div className="relative z-10 max-w-5xl mx-auto space-y-6 pt-10">
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-xl px-4 py-1.5 rounded-full text-xs font-bold border border-white/20 text-indigo-200 shadow-2xl">
                <Sparkles className="w-4 h-4 text-amber-400" />
                <span>Cultivating Global Visionaries, Scientists & Pioneers of Tomorrow</span>
              </div>

              <h2 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight leading-[1.05] text-white">
                Architects of <br className="hidden sm:block" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-amber-400 to-yellow-200">
                  Global Leadership
                </span>
              </h2>

              <p className="text-slate-300 text-sm sm:text-lg leading-relaxed max-w-3xl mx-auto font-normal">
                An elite 50-acre academic institution offering pre-primary to Grade 12 CBSE & International curricula, Quantum STEM Labs, Olympic Athletic Academies, and direct placement pipelines to premier global universities.
              </p>

              <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
                <button 
                  onClick={() => handleNav('admissions')}
                  className="bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-500 hover:to-amber-600 text-slate-950 font-black px-8 py-4 rounded-2xl shadow-2xl shadow-amber-400/30 text-sm transition-all flex items-center gap-2 group cursor-pointer"
                >
                  <span>Apply for 2026-27</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
                <button 
                  onClick={() => setVirtualTourOpen(true)}
                  className="bg-white/10 hover:bg-white/20 text-white border border-white/20 font-bold px-7 py-4 rounded-2xl backdrop-blur-xl text-sm transition-all flex items-center gap-2 cursor-pointer"
                >
                  <Play className="w-4 h-4 text-amber-400 fill-current" /> 360° Virtual Campus Tour
                </button>
                <a
                  href="https://wa.me/919988776655?text=Hello%20BrightFuture%20Max,%20I%20want%20to%20apply%20for%20admissions"
                  target="_blank"
                  rel="noreferrer"
                  className="bg-emerald-600 hover:bg-emerald-500 text-white font-bold px-6 py-4 rounded-2xl text-sm flex items-center gap-2 shadow-xl"
                >
                  <MessageCircle className="w-4 h-4" /> VIP WhatsApp Desk
                </a>
              </div>

              {/* Status Ticker Badges */}
              <div className="pt-6 grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs text-slate-300 max-w-3xl mx-auto">
                <div className="bg-white/5 backdrop-blur-md p-2.5 rounded-xl border border-white/10">
                  <span className="font-bold text-amber-400 block">100% University Admit</span>
                  <span className="text-[10px] text-slate-400">IITs, AIIMS, Ivy League</span>
                </div>
                <div className="bg-white/5 backdrop-blur-md p-2.5 rounded-xl border border-white/10">
                  <span className="font-bold text-indigo-300 block">50-Acre Smart Campus</span>
                  <span className="text-[10px] text-slate-400">Solar Powered & Wi-Fi 6</span>
                </div>
                <div className="bg-white/5 backdrop-blur-md p-2.5 rounded-xl border border-white/10">
                  <span className="font-bold text-amber-400 block">₹2 Cr+ Scholarships</span>
                  <span className="text-[10px] text-slate-400">Awarded Annually</span>
                </div>
                <div className="bg-white/5 backdrop-blur-md p-2.5 rounded-xl border border-white/10">
                  <span className="font-bold text-indigo-300 block">Olympic Sports Center</span>
                  <span className="text-[10px] text-slate-400">FIFA Turf & 50m Pool</span>
                </div>
              </div>
            </div>
          </section>

          {/* 2. Key Statistics Grid */}
          <section className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="bg-gradient-to-r from-indigo-950/80 via-slate-900 to-purple-950/80 border border-white/10 rounded-3xl p-8 sm:p-10 shadow-2xl grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-y sm:divide-y-0 sm:divide-x divide-white/10">
              <div className="p-2">
                <div className="text-4xl sm:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-amber-500">99.8%</div>
                <div className="text-xs font-bold text-slate-300 uppercase tracking-widest mt-2">Highest Board Aggregate</div>
                <div className="text-[11px] text-slate-400 mt-0.5">Class 10 & 12 Board Exam 2025</div>
              </div>
              <div className="p-2">
                <div className="text-4xl sm:text-5xl font-black text-indigo-300">1:10</div>
                <div className="text-xs font-bold text-slate-300 uppercase tracking-widest mt-2">Elite Mentorship Ratio</div>
                <div className="text-[11px] text-slate-400 mt-0.5">Personalized Scholar Guidance</div>
              </div>
              <div className="p-2">
                <div className="text-4xl sm:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-amber-500">38+</div>
                <div className="text-xs font-bold text-slate-300 uppercase tracking-widest mt-2">Patents & Research Papers</div>
                <div className="text-[11px] text-slate-400 mt-0.5">Authored by High School Students</div>
              </div>
              <div className="p-2">
                <div className="text-4xl sm:text-5xl font-black text-indigo-300">40+</div>
                <div className="text-xs font-bold text-slate-300 uppercase tracking-widest mt-2">Specialized Clubs & Academies</div>
                <div className="text-[11px] text-slate-400 mt-0.5">MUN, Aero-Modeling, Symphony</div>
              </div>
            </div>
          </section>

          {/* 3. Institutional Legacy & Split Story */}
          <section className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-6 space-y-6">
                <div className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-widest text-amber-400 bg-amber-400/10 px-3.5 py-1.5 rounded-full border border-amber-400/20">
                  <Award className="w-3.5 h-3.5" /> Institutional Heritage & Philosophy
                </div>
                <h3 className="text-3xl sm:text-5xl font-black text-white leading-tight">
                  Where Rigorous Scholarship Meets Visionary Character.
                </h3>
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                  Founded on the conviction that future global challenges require multidisciplinary thinkers, BrightFuture Max integrates state-of-the-art laboratory research, international diplomatic debating, competitive sports, and moral philosophy into daily student life.
                </p>

                <div className="space-y-3 pt-2">
                  {[
                    { title: 'Intellectual Mastery', desc: 'Integrated research curriculum with university professors and senior researchers.' },
                    { title: 'Emotional & Moral Resilience', desc: 'Comprehensive ethics, leadership councils, and community social impact missions.' },
                    { title: 'Global Competitiveness', desc: 'Harvard MUN delegations, International Science Olympiads & SAT/CUET prep.' }
                  ].map((p, i) => (
                    <div key={i} className="bg-white/5 p-4 rounded-2xl border border-white/10 flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                      <div>
                        <h4 className="font-bold text-sm text-white">{p.title}</h4>
                        <p className="text-xs text-slate-400 mt-0.5">{p.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right: Director General Video Preview Card */}
              <div className="lg:col-span-6 relative">
                <div className="rounded-3xl overflow-hidden border border-white/20 bg-slate-900 relative shadow-2xl group cursor-pointer" onClick={() => setLightboxMedia(galleryData[1])}>
                  <div className="aspect-[16/10] overflow-hidden">
                    <img src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1200&q=80" alt="Director message teaser" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 filter brightness-90" />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent flex flex-col justify-between p-6">
                    <span className="bg-indigo-600 text-white font-bold text-xs px-3 py-1 rounded-full self-start shadow-md">
                      Watch Institutional Film (4K)
                    </span>
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="text-lg font-black text-white">Dean&apos;s Address & Vision 2030</h4>
                        <p className="text-xs text-slate-300">Dr. Sunita Sharma, Director General</p>
                      </div>
                      <div className="w-14 h-14 rounded-full bg-amber-400 text-slate-950 flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform">
                        <Play className="w-6 h-6 fill-current ml-0.5" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* 4. Comprehensive Academic Departments & Senior Streams */}
          <section className="bg-gradient-to-b from-[#0B1329] to-[#030712] py-20 px-4 sm:px-6 border-y border-white/10">
            <div className="max-w-7xl mx-auto space-y-12">
              <div className="text-center max-w-2xl mx-auto space-y-2">
                <span className="text-xs font-black uppercase tracking-widest text-indigo-400 bg-indigo-500/10 px-4 py-1.5 rounded-full border border-indigo-500/20">
                  Academic Continuum
                </span>
                <h3 className="text-3xl sm:text-4xl font-black text-white">Academic Wings & Specialized Streams</h3>
                <p className="text-slate-400 text-xs sm:text-sm">Structured from Early Childhood (Nursery) to Advanced Senior High School (Grade 12).</p>
              </div>

              {/* Department Stage Selector */}
              <div className="flex flex-wrap justify-center gap-2">
                {[
                  { id: 'early', label: 'Early Discovery (Nursery - UKG)' },
                  { id: 'primary', label: 'Primary Inquiry (Grades 1 - 5)' },
                  { id: 'middle', label: 'Middle STEM Wing (Grades 6 - 8)' },
                  { id: 'senior', label: 'Senior College Prep (Grades 9 - 12)' },
                ].map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveDepartment(tab.id as any)}
                    className={`px-5 py-3 rounded-2xl text-xs font-black uppercase tracking-wider transition-all ${
                      activeDepartment === tab.id 
                        ? 'bg-indigo-600 text-white shadow-xl shadow-indigo-600/40 border border-indigo-400' 
                        : 'bg-white/5 text-slate-300 hover:bg-white/10 border border-white/10'
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>

              {/* Senior Streams Deep-Dive Display */}
              {activeDepartment === 'senior' && (
                <div className="space-y-6">
                  <div className="flex justify-center gap-2">
                    {[
                      { id: 'stem', label: '🔬 Advanced STEM, AI & Robotics (PCM / PCB + CS)' },
                      { id: 'fintech', label: '📊 Global Commerce, FinTech & Applied Econ' },
                      { id: 'humanities', label: '⚖️ Public Policy, Law (CLAT) & Humanities' },
                    ].map((s) => (
                      <button
                        key={s.id}
                        onClick={() => setActiveSeniorStream(s.id as any)}
                        className={`px-4 py-2.5 rounded-xl text-xs font-bold transition-all ${
                          activeSeniorStream === s.id ? 'bg-amber-400 text-slate-950 shadow-md font-black' : 'bg-white/5 text-slate-400 hover:text-white'
                        }`}
                      >
                        {s.label}
                      </button>
                    ))}
                  </div>

                  <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-6 sm:p-8 rounded-3xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                    <div className="lg:col-span-7 space-y-4">
                      {activeSeniorStream === 'stem' && (
                        <>
                          <span className="text-[10px] font-black uppercase tracking-widest text-indigo-300 bg-indigo-950 px-3 py-1 rounded-full border border-indigo-500/30">
                            Engineering, Medicine & Quantum Physics
                          </span>
                          <h4 className="text-2xl font-black text-white">Quantum STEM & AI Innovation Wing</h4>
                          <p className="text-xs text-slate-300 leading-relaxed">
                            Combining CBSE core syllabus with quantum mechanics fundamentals, Python/TensorFlow machine learning, astrophysics data labs, and Olympiad problem-solving.
                          </p>
                          <div className="grid grid-cols-2 gap-2 text-xs text-slate-300 pt-2">
                            <div className="bg-black/40 p-2.5 rounded-xl border border-white/5">✓ JEE Main & Advanced Track</div>
                            <div className="bg-black/40 p-2.5 rounded-xl border border-white/5">✓ NEET-UG Clinical Foundations</div>
                            <div className="bg-black/40 p-2.5 rounded-xl border border-white/5">✓ NASA Space App Challenge Mentorship</div>
                            <div className="bg-black/40 p-2.5 rounded-xl border border-white/5">✓ MIT / Stanford Portfolio Review</div>
                          </div>
                        </>
                      )}

                      {activeSeniorStream === 'fintech' && (
                        <>
                          <span className="text-[10px] font-black uppercase tracking-widest text-amber-300 bg-amber-950 px-3 py-1 rounded-full border border-amber-500/30">
                            Wall Street & Corporate Leadership
                          </span>
                          <h4 className="text-2xl font-black text-white">International Commerce & FinTech Wing</h4>
                          <p className="text-xs text-slate-300 leading-relaxed">
                            Equipping future chartered accountants, investment bankers, and startup entrepreneurs with algorithmic trading simulations, venture pitch workshops, and macro-economics.
                          </p>
                          <div className="grid grid-cols-2 gap-2 text-xs text-slate-300 pt-2">
                            <div className="bg-black/40 p-2.5 rounded-xl border border-white/5">✓ CA-Foundation Integrated Batch</div>
                            <div className="bg-black/40 p-2.5 rounded-xl border border-white/5">✓ Real-time Bloomberg Terminal Mockup</div>
                            <div className="bg-black/40 p-2.5 rounded-xl border border-white/5">✓ Harvard Case Study Method</div>
                            <div className="bg-black/40 p-2.5 rounded-xl border border-white/5">✓ Angel Investor Student Pitch Arena</div>
                          </div>
                        </>
                      )}

                      {activeSeniorStream === 'humanities' && (
                        <>
                          <span className="text-[10px] font-black uppercase tracking-widest text-purple-300 bg-purple-950 px-3 py-1 rounded-full border border-purple-500/30">
                            Diplomacy, Law & Civil Services
                          </span>
                          <h4 className="text-2xl font-black text-white">Global Humanities, Law & Policy Wing</h4>
                          <p className="text-xs text-slate-300 leading-relaxed">
                            Developing critical policy thinkers, journalists, international diplomats, and legal minds with intensive moot court practice and UPSC civil service foundations.
                          </p>
                          <div className="grid grid-cols-2 gap-2 text-xs text-slate-300 pt-2">
                            <div className="bg-black/40 p-2.5 rounded-xl border border-white/5">✓ CLAT & AILET Entrance Track</div>
                            <div className="bg-black/40 p-2.5 rounded-xl border border-white/5">✓ Model UN Secretariat & Debating</div>
                            <div className="bg-black/40 p-2.5 rounded-xl border border-white/5">✓ Behavioral Psychology Lab</div>
                            <div className="bg-black/40 p-2.5 rounded-xl border border-white/5">✓ Public Policy Research Journal</div>
                          </div>
                        </>
                      )}
                    </div>

                    <div className="lg:col-span-5 h-64 rounded-2xl overflow-hidden border border-white/20 relative shadow-2xl">
                      <img 
                        src={activeSeniorStream === 'stem' 
                          ? 'https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&w=800&q=80' 
                          : activeSeniorStream === 'fintech'
                          ? 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80'
                          : 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=800&q=80'
                        } 
                        alt="Department stream visual" 
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent"></div>
                    </div>
                  </div>
                </div>
              )}

              {activeDepartment !== 'senior' && (
                <div className="bg-white/5 p-8 rounded-3xl border border-white/10 text-center space-y-4 max-w-2xl mx-auto">
                  <h4 className="text-xl font-bold text-white">Curriculum Overview for {activeDepartment.toUpperCase()}</h4>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Designed to inspire foundational clarity, linguistic mastery, inquiry-driven mathematics, and social-emotional growth under Cambridge and CBSE guidelines.
                  </p>
                  <button onClick={() => handleNav('academics')} className="bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs px-6 py-2.5 rounded-xl">
                    View Complete Syllabus Matrix
                  </button>
                </div>
              )}
            </div>
          </section>

          {/* 5. 50-Acre Campus & Infrastructure Tour */}
          <section className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-10">
              <div>
                <span className="text-xs font-black uppercase tracking-widest text-amber-400 bg-amber-400/10 px-3.5 py-1 rounded-full border border-amber-400/20">
                  Infrastructure Marvel
                </span>
                <h3 className="text-3xl font-black text-white mt-2">Flagship 50-Acre Smart Campus</h3>
              </div>
              <button 
                onClick={() => setVirtualTourOpen(true)}
                className="bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-black px-5 py-3 rounded-xl flex items-center gap-2 cursor-pointer shadow-lg shadow-indigo-600/30"
              >
                <Globe className="w-4 h-4 text-amber-300" /> Launch 360° Interactive Tour
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { title: 'Quantum AI & Robotics Wing', desc: 'Equipped with Boston Dynamics robot simulators, 3D laser cutters, and high-performance GPU clusters.', img: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&w=600&q=80', tag: 'AI & STEM' },
                { title: 'Olympic Aquatic & Turf Village', desc: 'Heated 50m Olympic swimming pool, FIFA-grade turf football arena, and 8-lane synthetic track.', img: 'https://images.unsplash.com/photo-1530549387789-4c1017266635?auto=format&fit=crop&w=600&q=80', tag: 'Olympic Sports' },
                { title: 'Central Knowledge & Research Dome', desc: 'Over 50,000 physical volumes, JSTOR access, private acoustic research pods, and digital archives.', img: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=600&q=80', tag: 'Library' },
                { title: '1,200-Seat Grand Amphitheater', desc: 'Acoustically tuned performing arts center hosting annual TEDx youth conferences and symphonies.', img: 'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=600&q=80', tag: 'Performing Arts' },
                { title: '50-Foot Celestial Observatory', desc: 'Equipped with computerized high-magnification Schmidt-Cassegrain telescopes for space studies.', img: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=600&q=80', tag: 'Astrophysics' },
                { title: '5-Star Residential Boarding Wing', desc: 'Modern air-conditioned suites with 24/7 security, resident tutors, and nutritionist-crafted dining.', img: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=600&q=80', tag: 'Residential' },
              ].map((item, i) => (
                <div key={i} className="bg-white/5 rounded-3xl overflow-hidden border border-white/10 hover:border-indigo-500/50 transition-all group shadow-xl">
                  <div className="h-48 overflow-hidden relative">
                    <img src={item.img} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                    <span className="absolute top-3 left-3 bg-black/80 backdrop-blur-md text-amber-300 text-[10px] font-black uppercase px-3 py-1 rounded-full border border-amber-400/30">
                      {item.tag}
                    </span>
                  </div>
                  <div className="p-6 space-y-2">
                    <h4 className="font-black text-lg text-white group-hover:text-amber-400 transition-colors">{item.title}</h4>
                    <p className="text-xs text-slate-400 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* 6. Life at School & House System */}
          <section className="bg-[#0B1329] py-20 px-4 sm:px-6 border-y border-white/10">
            <div className="max-w-7xl mx-auto space-y-12">
              <div className="text-center max-w-2xl mx-auto space-y-2">
                <span className="text-xs font-black uppercase tracking-widest text-amber-400 bg-amber-400/10 px-4 py-1.5 rounded-full border border-amber-400/20">
                  Student Life & Traditions
                </span>
                <h3 className="text-3xl sm:text-4xl font-black text-white">The Four Pillars & House System</h3>
                <p className="text-slate-400 text-xs sm:text-sm">Fostering camaraderie, healthy rivalry, and leadership through historic school houses.</p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  { name: 'House Phoenix (Ignis)', motto: 'Courage & Innovation', color: 'from-amber-600 to-red-700', icon: '🔥', pts: '2,450 Pts' },
                  { name: 'House Pegasus (Aero)', motto: 'Intellect & Eloquence', color: 'from-blue-600 to-indigo-800', icon: '⚡', pts: '2,390 Pts' },
                  { name: 'House Titan (Terra)', motto: 'Resilience & Integrity', color: 'from-emerald-600 to-teal-800', icon: '🛡️', pts: '2,420 Pts' },
                  { name: 'House Orion (Cosmos)', motto: 'Wisdom & Global Vision', color: 'from-purple-600 to-violet-900', icon: '🌌', pts: '2,480 Pts' },
                ].map((house, i) => (
                  <div key={i} className={`bg-gradient-to-b ${house.color} p-6 rounded-3xl text-white space-y-4 shadow-2xl border border-white/20 relative overflow-hidden`}>
                    <div className="text-4xl">{house.icon}</div>
                    <div>
                      <span className="text-[10px] font-bold text-white/80 uppercase tracking-widest">House Cup Standings</span>
                      <h4 className="text-xl font-black">{house.name}</h4>
                      <p className="text-xs text-white/90 italic mt-0.5">&quot;{house.motto}&quot;</p>
                    </div>
                    <div className="bg-black/30 p-2.5 rounded-xl text-center text-xs font-black text-amber-300">
                      {house.pts} (Current Leader)
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* 7. Faculty Directory & World-Class Instructors */}
          <section className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
              <span className="text-xs font-black uppercase tracking-widest text-indigo-400 bg-indigo-500/10 px-4 py-1.5 rounded-full border border-indigo-500/20">
                Academic Luminaries
              </span>
              <h3 className="text-3xl sm:text-4xl font-black text-white">World-Class Faculty & Deans</h3>
              <p className="text-slate-400 text-xs sm:text-sm">Distinguished doctorates, former researchers, and national coaches guiding every student.</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {facultyProfiles.map((fac, i) => (
                <div key={i} className="bg-white/5 rounded-3xl overflow-hidden border border-white/10 p-6 text-center space-y-4 hover:border-indigo-500 transition-all shadow-xl">
                  <div className="w-24 h-24 rounded-2xl overflow-hidden mx-auto border-2 border-amber-400 shadow-2xl">
                    <img src={fac.img} alt={fac.name} className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <span className="text-[10px] bg-indigo-950 text-indigo-300 font-bold px-3 py-1 rounded-full border border-indigo-500/30">
                      {fac.dept}
                    </span>
                    <h4 className="font-black text-base text-white mt-2">{fac.name}</h4>
                    <p className="text-xs text-amber-400 font-semibold">{fac.role}</p>
                    <p className="text-[11px] text-slate-400 mt-1">{fac.qual}</p>
                    <p className="text-[10px] text-indigo-300 font-medium mt-1">{fac.awards}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* 8. Media Gallery with Photo & Video Tabs */}
          <section className="bg-gradient-to-b from-[#030712] to-[#0B1329] py-20 px-4 sm:px-6 border-y border-white/10">
            <div className="max-w-7xl mx-auto space-y-8">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <div>
                  <span className="text-xs font-black uppercase tracking-widest text-amber-400">Media Showcase</span>
                  <h3 className="text-3xl font-black text-white">4K Photo & Video Gallery</h3>
                </div>

                <div className="flex gap-2">
                  <button 
                    onClick={() => setMediaTypeFilter('all')}
                    className={`px-4 py-2 rounded-xl text-xs font-bold ${mediaTypeFilter === 'all' ? 'bg-indigo-600 text-white' : 'bg-white/5 text-slate-400'}`}
                  >
                    All Media
                  </button>
                  <button 
                    onClick={() => setMediaTypeFilter('video')}
                    className={`px-4 py-2 rounded-xl text-xs font-bold flex items-center gap-1.5 ${mediaTypeFilter === 'video' ? 'bg-amber-400 text-slate-950 font-black' : 'bg-white/5 text-slate-400'}`}
                  >
                    <Video className="w-3.5 h-3.5" /> Video Tours Only
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {galleryData
                  .filter(item => mediaTypeFilter === 'all' || item.type === mediaTypeFilter)
                  .map((item, i) => (
                    <div 
                      key={i}
                      onClick={() => setLightboxMedia(item)}
                      className="group relative h-64 rounded-3xl overflow-hidden cursor-pointer border border-white/10 shadow-2xl bg-slate-900"
                    >
                      <img src={item.url} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 filter brightness-90" />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent flex flex-col justify-between p-5">
                        <div className="flex justify-between items-center">
                          <span className="text-[10px] text-amber-300 font-black uppercase tracking-wider bg-black/60 px-3 py-1 rounded-full border border-amber-400/30">
                            {item.tag}
                          </span>
                          {item.type === 'video' && (
                            <span className="bg-red-600 text-white text-[10px] font-black px-2 py-0.5 rounded flex items-center gap-1">
                              <Play className="w-3 h-3 fill-current" /> 4K VIDEO
                            </span>
                          )}
                        </div>
                        <div>
                          <h4 className="font-bold text-sm text-white">{item.title}</h4>
                          <span className="text-[11px] text-indigo-300 mt-1 block">Click to enlarge</span>
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </section>

          {/* 9. Global Alumni Spotlights */}
          <section className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
              <span className="text-xs font-black uppercase tracking-widest text-amber-400 bg-amber-400/10 px-4 py-1.5 rounded-full border border-amber-400/20">
                Alumni Network
              </span>
              <h3 className="text-3xl font-black text-white">Global Scholars & Trailblazers</h3>
              <p className="text-slate-400 text-xs sm:text-sm">BrightFuture Max graduates driving breakthroughs at the world&apos;s leading institutions.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {alumniSpotlights.map((alum, i) => (
                <div key={i} className="bg-white/5 p-6 rounded-3xl border border-white/10 space-y-4 shadow-xl flex flex-col justify-between">
                  <div className="space-y-3">
                    <div className="text-amber-400 flex">
                      {[1,2,3,4,5].map(s => <Star key={s} className="w-4 h-4 fill-current" />)}
                    </div>
                    <p className="text-xs text-slate-300 italic leading-relaxed">&quot;{alum.quote}&quot;</p>
                  </div>
                  <div className="border-t border-white/10 pt-3">
                    <h5 className="font-bold text-sm text-white">{alum.name}</h5>
                    <p className="text-xs text-amber-400 font-semibold">{alum.now}</p>
                    <p className="text-[10px] text-slate-400">{alum.batch}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* 10. News & Gazette Updates */}
          <section className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="bg-gradient-to-br from-indigo-950 to-slate-900 rounded-3xl p-8 sm:p-10 border border-indigo-500/30 space-y-8 shadow-2xl">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <div>
                  <span className="text-xs font-black uppercase tracking-widest bg-indigo-600 text-white px-3 py-1 rounded-full">
                    Campus Gazette
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-black text-white mt-2">Latest News & Breakthroughs</h3>
                </div>
                <button onClick={() => handleNav('events')} className="text-xs font-bold text-amber-400 hover:text-amber-300 flex items-center gap-1">
                  View Full Event Calendar <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {newsAnnouncements.map((news, i) => (
                  <div key={i} className="bg-black/40 p-5 rounded-2xl border border-white/10 space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-[10px] font-black text-amber-400 uppercase tracking-widest">{news.cat}</span>
                      <span className="text-[10px] text-slate-400">{news.date}</span>
                    </div>
                    <h4 className="font-bold text-sm text-white leading-snug">{news.title}</h4>
                    <p className="text-xs text-slate-400">{news.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* 11. Merit Scholarships & Online Admission Portal */}
          <section id="max-admissions-section" className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="bg-gradient-to-r from-indigo-950 via-slate-900 to-purple-950 rounded-3xl p-8 sm:p-12 border border-white/20 shadow-2xl grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-6 space-y-6">
                <span className="bg-gradient-to-r from-amber-400 to-amber-500 text-slate-950 font-black px-4 py-1 rounded-full text-xs uppercase tracking-wider">
                  Admissions Cycle 2026-27
                </span>
                <h3 className="text-3xl sm:text-4xl font-black text-white leading-tight">
                  Join India&apos;s Foremost Leadership Academy.
                </h3>
                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                  Admissions to BrightFuture Max are selective and strictly merit-driven across Pre-Primary to Grade 12. Generous scholarships up to 100% full waiver are awarded to qualifying scholars and athletic champions.
                </p>

                <div className="bg-white/5 p-4 rounded-2xl border border-white/10 space-y-2 text-xs">
                  <div className="font-bold text-amber-300 flex items-center gap-2">
                    <Trophy className="w-4 h-4" /> Merit Scholarship Entrance Exam (MSEE 2026)
                  </div>
                  <p className="text-slate-300">
                    Next examination date: <strong>Sunday, 15th November 2026</strong>. Top 50 rankers receive complete tuition and residential funding.
                  </p>
                </div>
              </div>

              {/* Form Card */}
              <div className="lg:col-span-6 bg-slate-900/90 backdrop-blur-xl p-6 sm:p-8 rounded-3xl border border-indigo-500/40 shadow-2xl text-white">
                <h4 className="text-xl font-bold text-white mb-1">VIP Admission Application</h4>
                <p className="text-xs text-slate-400 mb-5">Enter your details to receive the 2026 Prospectus & Scholarship Guide.</p>

                {enquirySubmitted ? (
                  <div className="bg-indigo-950/80 border border-indigo-500 text-indigo-100 p-6 rounded-2xl text-center space-y-3">
                    <CheckCircle2 className="w-12 h-12 mx-auto text-amber-400" />
                    <h5 className="font-bold text-base text-white">Application Successfully Logged</h5>
                    <p className="text-xs text-slate-300">The Senior Admissions Directorate will reach out to schedule an interaction session.</p>
                  </div>
                ) : (
                  <form onSubmit={(e) => { e.preventDefault(); setEnquirySubmitted(true); }} className="space-y-3 text-xs">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <label className="block text-slate-300 font-semibold mb-1">Parent Full Name *</label>
                        <input required placeholder="Parent Name" className="w-full bg-white/5 border border-white/20 rounded-xl p-3 text-white focus:outline-none focus:border-amber-400" />
                      </div>
                      <div>
                        <label className="block text-slate-300 font-semibold mb-1">Student Full Name *</label>
                        <input required placeholder="Student Name" className="w-full bg-white/5 border border-white/20 rounded-xl p-3 text-white focus:outline-none focus:border-amber-400" />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <label className="block text-slate-300 font-semibold mb-1">Phone / WhatsApp Number *</label>
                        <input required type="tel" placeholder="10-digit mobile" className="w-full bg-white/5 border border-white/20 rounded-xl p-3 text-white focus:outline-none focus:border-amber-400" />
                      </div>
                      <div>
                        <label className="block text-slate-300 font-semibold mb-1">Email Address *</label>
                        <input required type="email" placeholder="parent@example.com" className="w-full bg-white/5 border border-white/20 rounded-xl p-3 text-white focus:outline-none focus:border-amber-400" />
                      </div>
                    </div>

                    <div>
                      <label className="block text-slate-300 font-semibold mb-1">Applying for Stage & Stream *</label>
                      <select className="w-full bg-[#0B1329] border border-white/20 rounded-xl p-3 text-white focus:outline-none focus:border-amber-400">
                        <option>Pre-Primary Discovery (Nursery, LKG, UKG)</option>
                        <option>Primary School (Grades 1 to 5)</option>
                        <option>Middle School STEM (Grades 6 to 8)</option>
                        <option>Grade 9 & 10 (CBSE International Prep)</option>
                        <option>Grade 11 - Quantum STEM & AI (PCM / PCB + CS)</option>
                        <option>Grade 11 - Global Commerce & FinTech</option>
                        <option>Grade 11 - Public Policy & Humanities</option>
                      </select>
                    </div>

                    <button type="submit" className="w-full bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-500 hover:to-amber-600 text-slate-950 font-black py-4 rounded-xl shadow-xl transition-all uppercase tracking-wider text-xs flex items-center justify-center gap-2 mt-3 cursor-pointer">
                      <Send className="w-4 h-4" /> Submit Application & Download Prospectus
                    </button>
                  </form>
                )}
              </div>
            </div>
          </section>

          {/* 12. Interactive FAQ Section */}
          <section className="max-w-4xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-10 space-y-2">
              <span className="text-xs font-black uppercase tracking-widest text-indigo-400 bg-indigo-500/10 px-4 py-1.5 rounded-full border border-indigo-500/20">
                Admissions & Policy
              </span>
              <h3 className="text-3xl font-black text-white">Frequently Asked Questions</h3>
            </div>

            <div className="space-y-3">
              {maxFaqs.map((faq, idx) => (
                <div key={idx} className="bg-white/5 rounded-2xl border border-white/10 overflow-hidden">
                  <button
                    onClick={() => setExpandedFaq(expandedFaq === idx ? null : idx)}
                    className="w-full text-left p-5 font-bold text-sm text-white flex justify-between items-center gap-4 hover:bg-white/5 transition-colors"
                  >
                    <span>{faq.q}</span>
                    {expandedFaq === idx ? <ChevronUp className="w-4 h-4 text-amber-400 shrink-0" /> : <ChevronDown className="w-4 h-4 text-slate-400 shrink-0" />}
                  </button>
                  {expandedFaq === idx && (
                    <div className="px-5 pb-5 text-xs text-slate-300 leading-relaxed border-t border-white/10 pt-3">
                      {faq.a}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>

          {/* 13. Newsletter & Prospectus Subscription */}
          <section className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="bg-indigo-950/60 border border-indigo-500/30 p-8 rounded-3xl flex flex-col md:flex-row justify-between items-center gap-6">
              <div>
                <h4 className="text-xl font-bold text-white">Subscribe to the BrightFuture Max Global Gazette</h4>
                <p className="text-xs text-slate-400 mt-1">Receive academic whitepapers, university scholarship alerts, and campus event invitations.</p>
              </div>

              {newsletterSubscribed ? (
                <span className="text-xs font-bold text-amber-400 bg-amber-400/10 px-4 py-2 rounded-xl border border-amber-400/20">
                  ✓ Subscribed to Monthly Gazette
                </span>
              ) : (
                <form onSubmit={(e) => { e.preventDefault(); setNewsletterSubscribed(true); }} className="flex gap-2 w-full md:w-auto">
                  <input required type="email" placeholder="Enter your email" className="bg-black/50 border border-white/20 rounded-xl px-4 py-3 text-xs text-white focus:outline-none focus:border-amber-400 w-full md:w-64" />
                  <button type="submit" className="bg-amber-400 text-slate-950 font-black px-5 py-3 rounded-xl text-xs uppercase tracking-wider shrink-0">
                    Subscribe
                  </button>
                </form>
              )}
            </div>
          </section>
        </div>
      )}

      {/* =========================================================================
          VIEW: ABOUT
      ========================================================================= */}
      {activeNav === 'about' && (
        <div className="py-12 px-4 sm:px-6 max-w-7xl mx-auto space-y-10 animate-in fade-in duration-300 text-white">
          <div className="bg-white/5 p-8 sm:p-12 rounded-3xl border border-white/10 space-y-8">
            <div>
              <span className="text-xs font-black uppercase tracking-widest text-amber-400 bg-amber-400/10 px-4 py-1.5 rounded-full border border-amber-400/20">
                Our Heritage & Mission
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-white mt-3 mb-3">About BrightFuture Max Global Academy</h2>
              <p className="text-slate-300 text-sm leading-relaxed max-w-4xl">
                Founded with a singular vision to cultivate international scholars, Nobel aspirants, and ethical global leaders, BrightFuture Max stands as India&apos;s leading experimental and preparatory academy. We fuse high-rigor CBSE board standards with International Baccalaureate (IB) experiential methodologies, state-of-the-art quantum computing laboratories, and Olympic athletic centers.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-black/40 p-6 rounded-2xl border border-white/10 space-y-2">
                <Compass className="w-7 h-7 text-amber-400" />
                <h4 className="font-bold text-base text-white">Our Vision</h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  To remain an internationally recognized beacon of intellectual brilliance, scientific discovery, and profound ethical integrity.
                </p>
              </div>

              <div className="bg-black/40 p-6 rounded-2xl border border-white/10 space-y-2">
                <Shield className="w-7 h-7 text-indigo-400" />
                <h4 className="font-bold text-base text-white">Our Mission</h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  To provide exceptional students with the resources, international faculty mentorship, and moral clarity needed to transform human knowledge.
                </p>
              </div>

              <div className="bg-black/40 p-6 rounded-2xl border border-white/10 space-y-2">
                <Award className="w-7 h-7 text-amber-400" />
                <h4 className="font-bold text-base text-white">Global Accreditation</h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Affiliated to CBSE, New Delhi (Reg 1130452) • Cambridge International Associate • Member of Global Schools Alliance.
                </p>
              </div>
            </div>

            <div className="border-t border-white/10 pt-8 space-y-6">
              <h3 className="text-2xl font-black text-white">Directorate & Senior Advisory Board</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {facultyProfiles.map((fac, i) => (
                  <div key={i} className="bg-black/30 p-5 rounded-2xl border border-white/10 text-center space-y-3">
                    <img src={fac.img} alt={fac.name} className="w-20 h-20 rounded-full mx-auto object-cover border-2 border-amber-400" />
                    <div>
                      <h5 className="font-bold text-sm text-white">{fac.name}</h5>
                      <p className="text-xs text-indigo-400">{fac.role}</p>
                      <p className="text-[10px] text-slate-400 mt-1">{fac.qual}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* =========================================================================
          VIEW: ACADEMICS
      ========================================================================= */}
      {activeNav === 'academics' && (
        <div className="py-12 px-4 sm:px-6 max-w-7xl mx-auto space-y-10 animate-in fade-in duration-300 text-white">
          <div className="bg-white/5 p-8 sm:p-12 rounded-3xl border border-white/10 space-y-8">
            <div>
              <span className="text-xs font-black uppercase tracking-widest text-indigo-400 bg-indigo-500/10 px-4 py-1.5 rounded-full border border-indigo-500/20">
                Curricular Architecture
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-white mt-3 mb-2">Academics & Departmental Specializations</h2>
              <p className="text-slate-300 text-sm leading-relaxed max-w-3xl">
                Our educational framework provides specialized career accelerators across Quantum STEM, FinTech, and Global Law from early foundations through Grade 12.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-indigo-950/40 p-6 rounded-3xl border border-indigo-500/30 space-y-4">
                <span className="bg-indigo-600 text-white text-[10px] font-black uppercase px-3 py-1 rounded-full">Engineering & Medicine</span>
                <h4 className="text-xl font-bold text-white">Quantum STEM & AI Wing</h4>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Rigorous preparation for JEE Advanced, NEET-UG, NASA Astro Challenges, and MIT portfolios.
                </p>
                <div className="text-xs text-slate-300 space-y-1 bg-black/40 p-3 rounded-xl border border-white/10">
                  <div>• Physics & Chemistry with Daily Practical Research</div>
                  <div>• Quantum Computing & Python AI Neural Networks</div>
                  <div>• Integrated National Competitive Batches</div>
                </div>
              </div>

              <div className="bg-amber-950/40 p-6 rounded-3xl border border-amber-500/30 space-y-4">
                <span className="bg-amber-500 text-slate-950 text-[10px] font-black uppercase px-3 py-1 rounded-full">Finance & Business</span>
                <h4 className="text-xl font-bold text-white">Global Commerce & FinTech Wing</h4>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Developing chartered accountants, investment bankers, and startup venture leaders.
                </p>
                <div className="text-xs text-slate-300 space-y-1 bg-black/40 p-3 rounded-xl border border-white/10">
                  <div>• Financial Accounting, Macroeconomics & Business</div>
                  <div>• Real-time Algorithmic Trading & Stock Simulations</div>
                  <div>• CA-Foundation & CUET Top Tier Track</div>
                </div>
              </div>

              <div className="bg-purple-950/40 p-6 rounded-3xl border border-purple-500/30 space-y-4">
                <span className="bg-purple-600 text-white text-[10px] font-black uppercase px-3 py-1 rounded-full">Law & Diplomacy</span>
                <h4 className="text-xl font-bold text-white">Public Policy & Humanities Wing</h4>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Fostering international diplomats, corporate litigators, and civil servants.
                </p>
                <div className="text-xs text-slate-300 space-y-1 bg-black/40 p-3 rounded-xl border border-white/10">
                  <div>• Political Science, History & Sociology</div>
                  <div>• CLAT & AILET Legal Reasoning Masterclasses</div>
                  <div>• Harvard Model UN Secretariat & Moot Court</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* =========================================================================
          VIEW: CAMPUS
      ========================================================================= */}
      {activeNav === 'campus' && (
        <div className="py-12 px-4 sm:px-6 max-w-7xl mx-auto space-y-10 animate-in fade-in duration-300 text-white">
          <div className="bg-white/5 p-8 sm:p-12 rounded-3xl border border-white/10 space-y-8">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              <div>
                <span className="text-xs font-black uppercase tracking-widest text-amber-400 bg-amber-400/10 px-4 py-1.5 rounded-full border border-amber-400/20">
                  50-Acre Campus
                </span>
                <h2 className="text-3xl sm:text-4xl font-black text-white mt-2 mb-1">State-of-the-Art Infrastructure</h2>
                <p className="text-slate-300 text-sm">Explore our specialized laboratories, residential boarding, and Olympic sports facilities.</p>
              </div>
              <button 
                onClick={() => setVirtualTourOpen(true)}
                className="bg-amber-400 text-slate-950 font-black text-xs px-5 py-3 rounded-xl shadow-lg flex items-center gap-2 cursor-pointer"
              >
                <Play className="w-4 h-4 fill-current" /> 360° Virtual Experience
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {galleryData.map((item, i) => (
                <div key={i} onClick={() => setLightboxMedia(item)} className="bg-slate-900 rounded-3xl overflow-hidden border border-white/10 cursor-pointer group shadow-xl">
                  <div className="h-52 overflow-hidden relative">
                    <img src={item.url} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                    <span className="absolute top-3 left-3 bg-black/80 text-amber-300 text-[10px] font-black px-3 py-1 rounded-full border border-amber-400/30">
                      {item.tag}
                    </span>
                  </div>
                  <div className="p-5">
                    <h4 className="font-bold text-sm text-white group-hover:text-amber-400 transition-colors">{item.title}</h4>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* =========================================================================
          VIEW: LIFE AT SCHOOL
      ========================================================================= */}
      {activeNav === 'life' && (
        <div className="py-12 px-4 sm:px-6 max-w-7xl mx-auto space-y-10 animate-in fade-in duration-300 text-white">
          <div className="bg-white/5 p-8 sm:p-12 rounded-3xl border border-white/10 space-y-8">
            <div>
              <span className="text-xs font-black uppercase tracking-widest text-amber-400 bg-amber-400/10 px-4 py-1.5 rounded-full border border-amber-400/20">
                Student Life & Co-Curricular
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-white mt-2 mb-2">Life at BrightFuture Max</h2>
              <p className="text-slate-300 text-sm leading-relaxed">
                Discover our student leadership councils, Model UN summits, TEDx Youth stages, and house competitions.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-black/40 p-6 rounded-3xl border border-white/10 space-y-3">
                <div className="text-3xl">🏛️</div>
                <h4 className="font-bold text-base text-white">Student Government & Council</h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Elected student ministers representing peers in academic senate, campus sustainability, and event execution.
                </p>
              </div>

              <div className="bg-black/40 p-6 rounded-3xl border border-white/10 space-y-3">
                <div className="text-3xl">🎤</div>
                <h4 className="font-bold text-base text-white">TEDx Youth & Debating Society</h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Annual licensed TEDx events featuring student innovators, international diplomats, and keynote scientists.
                </p>
              </div>

              <div className="bg-black/40 p-6 rounded-3xl border border-white/10 space-y-3">
                <div className="text-3xl">🚀</div>
                <h4 className="font-bold text-base text-white">40+ Student-Led Guilds</h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  From Autonomous Drone Racing and Quantum Coding to Symphony Orchestra, Chess Academy, and Organic Farming.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* =========================================================================
          VIEW: ADMISSIONS
      ========================================================================= */}
      {activeNav === 'admissions' && (
        <div className="py-12 px-4 sm:px-6 max-w-7xl mx-auto space-y-10 animate-in fade-in duration-300 text-white">
          <div className="bg-white/5 p-8 sm:p-12 rounded-3xl border border-white/10 space-y-8">
            <div>
              <span className="text-xs font-black uppercase tracking-widest text-amber-400 bg-amber-400/10 px-4 py-1.5 rounded-full border border-amber-400/20">
                Admissions 2026-27
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-white mt-2 mb-2">Admissions & Merit Scholarships</h2>
              <p className="text-slate-300 text-sm leading-relaxed max-w-3xl">
                We invite applications from passionate learners across Nursery to Grade 12. Full and partial merit scholarships are awarded through the MSEE 2026 entrance exam.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              <div className="lg:col-span-6 space-y-4">
                <h3 className="text-xl font-bold text-white">Admissions Timeline & Selection</h3>
                <div className="space-y-3">
                  {[
                    { step: '01', title: 'Online Registration', desc: 'Submit application with student academic history.' },
                    { step: '02', title: 'Scholarship Entrance Exam (MSEE)', desc: 'Diagnostic evaluation in Logic, Mathematics & Science.' },
                    { step: '03', title: 'Directorate Panel Interaction', desc: 'One-on-one session with candidate & parents.' },
                    { step: '04', title: 'Enrollment & House Induction', desc: 'Formal admission offer, hostel suite allocation & uniform kit.' }
                  ].map((s, i) => (
                    <div key={i} className="bg-black/40 p-4 rounded-2xl border border-white/10 flex items-start gap-4">
                      <span className="text-amber-400 font-black text-lg">{s.step}</span>
                      <div>
                        <h4 className="font-bold text-sm text-white">{s.title}</h4>
                        <p className="text-xs text-slate-400 mt-0.5">{s.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="lg:col-span-6 bg-black/60 p-6 sm:p-8 rounded-3xl border border-indigo-500/40 space-y-4">
                <h4 className="text-lg font-bold text-white">Quick Admission Enquiry</h4>
                <p className="text-xs text-slate-400">Our Admissions Dean will contact you with test syllabus & dates.</p>

                {enquirySubmitted ? (
                  <div className="bg-indigo-950 p-5 rounded-2xl border border-indigo-500 text-center space-y-2">
                    <CheckCircle2 className="w-10 h-10 mx-auto text-amber-400" />
                    <p className="font-bold text-sm text-white">Enquiry Received!</p>
                  </div>
                ) : (
                  <form onSubmit={(e) => { e.preventDefault(); setEnquirySubmitted(true); }} className="space-y-3 text-xs">
                    <input required placeholder="Parent Name" className="w-full bg-white/5 border border-white/20 rounded-xl p-3 text-white" />
                    <input required placeholder="Student Name" className="w-full bg-white/5 border border-white/20 rounded-xl p-3 text-white" />
                    <input required type="tel" placeholder="Mobile / WhatsApp" className="w-full bg-white/5 border border-white/20 rounded-xl p-3 text-white" />
                    <select className="w-full bg-[#0B1329] border border-white/20 rounded-xl p-3 text-white">
                      <option>Nursery to Grade 12 (Select Class)</option>
                      <option>Pre-Primary (Nursery, LKG, UKG)</option>
                      <option>Primary (Grades 1 - 5)</option>
                      <option>Middle (Grades 6 - 8)</option>
                      <option>Secondary (Grades 9 & 10)</option>
                      <option>Grade 11 - Science (Quantum STEM & AI)</option>
                      <option>Grade 11 - Global Commerce</option>
                      <option>Grade 11 - Public Policy & Humanities</option>
                    </select>
                    <button type="submit" className="w-full bg-amber-400 text-slate-950 font-black py-3.5 rounded-xl uppercase tracking-wider text-xs">
                      Submit & Request Test Slot
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* =========================================================================
          VIEW: GALLERY
      ========================================================================= */}
      {activeNav === 'gallery' && (
        <div className="py-12 px-4 sm:px-6 max-w-7xl mx-auto space-y-10 animate-in fade-in duration-300 text-white">
          <div className="bg-white/5 p-8 sm:p-12 rounded-3xl border border-white/10 space-y-8">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              <div>
                <span className="text-xs font-black uppercase tracking-widest text-amber-400 bg-amber-400/10 px-4 py-1.5 rounded-full border border-amber-400/20">
                  Media Vault
                </span>
                <h2 className="text-3xl sm:text-4xl font-black text-white mt-2 mb-1">Campus Video & Photo Gallery</h2>
                <p className="text-slate-300 text-sm">Experience our academic pavilions, events, and athletics in high definition.</p>
              </div>

              <div className="flex flex-wrap gap-2 text-xs font-bold">
                {['All', 'Innovation', 'Sports', 'Cultural', 'Leadership', 'Campus Tour'].map(cat => (
                  <button
                    key={cat}
                    onClick={() => setGalleryFilter(cat)}
                    className={`px-3.5 py-2 rounded-xl transition-all ${
                      galleryFilter === cat ? 'bg-indigo-600 text-white shadow-md' : 'bg-white/5 text-slate-400 hover:text-white'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {galleryData
                .filter(item => galleryFilter === 'All' || item.tag === galleryFilter)
                .map((item, i) => (
                  <div 
                    key={i} 
                    onClick={() => setLightboxMedia(item)}
                    className="group relative h-64 rounded-3xl overflow-hidden cursor-pointer border border-white/10 shadow-2xl bg-slate-900"
                  >
                    <img src={item.url} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent flex flex-col justify-end p-5">
                      <span className="text-[10px] text-amber-300 font-black uppercase">{item.tag}</span>
                      <p className="text-xs font-bold text-white">{item.title}</p>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      )}

      {/* =========================================================================
          VIEW: EVENTS
      ========================================================================= */}
      {activeNav === 'events' && (
        <div className="py-12 px-4 sm:px-6 max-w-7xl mx-auto space-y-10 animate-in fade-in duration-300 text-white">
          <div className="bg-white/5 p-8 sm:p-12 rounded-3xl border border-white/10 space-y-8">
            <div>
              <span className="text-xs font-black uppercase tracking-widest text-indigo-400 bg-indigo-500/10 px-4 py-1.5 rounded-full border border-indigo-500/20">
                School Calendar
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-white mt-2 mb-2">Upcoming Events & Gazette</h2>
              <p className="text-slate-300 text-sm leading-relaxed">
                Stay updated with major school conventions, Olympiad dates, and sports championships.
              </p>
            </div>

            <div className="space-y-4">
              {newsAnnouncements.map((evt, i) => (
                <div key={i} className="bg-black/40 p-6 rounded-3xl border border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 rounded-2xl bg-indigo-600 text-white flex flex-col items-center justify-center shrink-0 font-black">
                      <span className="text-base">{evt.date.split(' ')[1]}</span>
                      <span className="text-[10px] text-amber-300">{evt.date.split(' ')[0]}</span>
                    </div>
                    <div>
                      <span className="text-[10px] font-black text-amber-400 uppercase tracking-widest bg-white/5 px-2.5 py-0.5 rounded">{evt.cat}</span>
                      <h4 className="font-bold text-base text-white mt-1">{evt.title}</h4>
                      <p className="text-xs text-slate-400 mt-0.5">{evt.desc}</p>
                    </div>
                  </div>
                  <button className="bg-white/10 text-white text-xs font-bold px-4 py-2 rounded-xl hover:bg-white/20 self-start sm:self-auto">
                    Add to Calendar
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* =========================================================================
          VIEW: CONTACT
      ========================================================================= */}
      {activeNav === 'contact' && (
        <div className="py-12 px-4 sm:px-6 max-w-7xl mx-auto space-y-10 animate-in fade-in duration-300 text-white">
          <div className="bg-white/5 p-8 sm:p-12 rounded-3xl border border-white/10 space-y-8">
            <div>
              <span className="text-xs font-black uppercase tracking-widest text-amber-400 bg-amber-400/10 px-4 py-1.5 rounded-full border border-amber-400/20">
                Get in Touch
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-white mt-2 mb-2">Campus Location & VIP Admissions</h2>
              <p className="text-slate-300 text-sm leading-relaxed">
                Connect directly with the Senior Admissions Directorate or schedule a personalized campus tour.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              <div className="lg:col-span-5 space-y-4 text-xs text-slate-300">
                <div className="bg-black/40 p-5 rounded-2xl border border-white/10 space-y-1">
                  <div className="font-bold text-sm text-white flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-amber-400" /> Flagship 50-Acre Campus
                  </div>
                  <p>Cyber Knowledge City, Express Highway Corridor, Thane West, Maharashtra - 400607</p>
                </div>

                <div className="bg-black/40 p-5 rounded-2xl border border-white/10 space-y-1">
                  <div className="font-bold text-sm text-white flex items-center gap-2">
                    <Phone className="w-4 h-4 text-amber-400" /> Admissions Direct Desks
                  </div>
                  <p>Admissions Secretariat: +91 99887 76655 / +91 99887 76656</p>
                  <p>Hostel & Boarding Warden: +91 99887 76660</p>
                </div>

                <div className="bg-black/40 p-5 rounded-2xl border border-white/10 space-y-1">
                  <div className="font-bold text-sm text-white flex items-center gap-2">
                    <Mail className="w-4 h-4 text-amber-400" /> Electronic Correspondence
                  </div>
                  <p>admissions.max@brightfuture.edu.in</p>
                  <p>dean.office@brightfuture.edu.in</p>
                </div>

                <a 
                  href="https://wa.me/919988776655?text=Hello%20BrightFuture%20Max,%20I%20wish%20to%20enquire%20about%20VIP%20admissions"
                  target="_blank"
                  rel="noreferrer"
                  className="w-full bg-emerald-600 hover:bg-emerald-500 text-white font-black py-4 rounded-xl text-center flex items-center justify-center gap-2 shadow-xl uppercase tracking-wider"
                >
                  <MessageCircle className="w-4 h-4" /> 24/7 VIP WhatsApp Counselor
                </a>
              </div>

              {/* 3D Map Preview Card */}
              <div className="lg:col-span-7 bg-black/40 p-6 rounded-3xl border border-white/10 space-y-4">
                <h4 className="font-bold text-base text-white">Campus Transport & Metro Network</h4>
                <div className="h-48 bg-slate-900 rounded-2xl border border-white/10 flex flex-col items-center justify-center text-center p-4">
                  <Globe className="w-10 h-10 text-indigo-400 mb-2 animate-spin-slow" />
                  <p className="font-bold text-white text-sm">Interactive GPS Campus Locator</p>
                  <p className="text-[11px] text-slate-400 mt-1">Directly accessible via Mumbai-Nashik Expressway & Dedicated Metro Pillar 142.</p>
                </div>
                <div className="grid grid-cols-2 gap-2 text-xs text-slate-300">
                  <div className="bg-white/5 p-3 rounded-xl border border-white/10">
                    <span className="font-bold text-amber-400 block">Fleet Coverage:</span>
                    <span>42 Air-Conditioned WiFi Buses across MMR</span>
                  </div>
                  <div className="bg-white/5 p-3 rounded-xl border border-white/10">
                    <span className="font-bold text-indigo-300 block">VIP Visiting Hours:</span>
                    <span>Mon - Sat: 8:00 AM - 5:00 PM</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Cinematic Luxury Dark Footer */}
      <footer className="bg-[#0B1329] text-slate-400 py-16 px-4 sm:px-6 border-t border-white/10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 text-xs">
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-white font-black text-xl">
              <GraduationCap className="w-7 h-7 text-amber-400" /> BRIGHTFUTURE <span className="text-amber-400">MAX</span>
            </div>
            <p className="text-slate-400 leading-relaxed">
              An internationally accredited preparatory academy delivering world-class STEM research, Olympic athletics, and character formation.
            </p>
            <div className="text-[11px] text-amber-400 font-bold">
              Affiliated to CBSE, New Delhi • Reg. No. 1130452
            </div>
          </div>

          <div>
            <h4 className="font-bold text-white uppercase tracking-wider mb-4">Navigation</h4>
            <ul className="space-y-2.5">
              {navItems.map(item => (
                <li key={item.id}>
                  <button onClick={() => handleNav(item.id)} className="hover:text-amber-400 transition-colors">
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-white uppercase tracking-wider mb-4">Academic Departments</h4>
            <ul className="space-y-2 text-slate-400">
              <li>• Early Discovery Center (Nursery-UKG)</li>
              <li>• Primary Experiential Wing (Grades 1-5)</li>
              <li>• Middle School STEM Wing (Grades 6-8)</li>
              <li>• Senior Quantum STEM & AI (PCM/PCB)</li>
              <li>• Global Commerce & FinTech</li>
              <li>• Public Policy, Law & Humanities</li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-white uppercase tracking-wider mb-4">Senior Admissions Desk</h4>
            <p className="text-slate-400 leading-relaxed mb-3">
              Cyber Knowledge City, Express Highway Corridor, Thane West - 400607
            </p>
            <p className="text-white font-bold">Hotline: +91 99887 76655</p>
            <p className="text-slate-400">Email: admissions.max@brightfuture.edu.in</p>
            <button 
              onClick={() => handleNav('admissions')}
              className="mt-4 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-500 hover:to-amber-600 text-slate-950 font-black px-4 py-2.5 rounded-xl w-full text-xs transition-all uppercase tracking-wider cursor-pointer"
            >
              Apply Online 2026-27
            </button>
          </div>
        </div>

        <div className="max-w-7xl mx-auto border-t border-white/10 mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center text-[11px] text-slate-500 gap-2">
          <span>© 2026 BrightFuture Max Global Academy. All Rights Reserved.</span>
          <span>CBSE & International Baccalaureate Candidate • Ranked Top 5 in India</span>
        </div>
      </footer>

    </div>
  );
};
