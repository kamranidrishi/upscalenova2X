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
    { type: 'photo' as const, title: 'Artificial Intelligence & Aero Lab', url: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&w=800&q=75', tag: 'Innovation' },
    { type: 'video' as const, title: '360° Aerial Campus Cinematic Flight', url: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=800&q=75', tag: 'Campus Tour' },
    { type: 'photo' as const, title: 'World Class Olympic Aquatic Arena', url: 'https://images.unsplash.com/photo-1530549387789-4c1017266635?auto=format&fit=crop&w=800&q=75', tag: 'Sports' },
    { type: 'photo' as const, title: 'Central Knowledge & Research Dome', url: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=800&q=75', tag: 'Library' },
    { type: 'video' as const, title: 'Annual Symphony & TEDx Youth Stage', url: 'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=800&q=75', tag: 'Cultural' },
    { type: 'photo' as const, title: 'Advanced Nanotech & Biotech Suite', url: 'https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&w=800&q=75', tag: 'Innovation' },
    { type: 'photo' as const, title: 'International Model UN Summit', url: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=800&q=75', tag: 'Leadership' },
    { type: 'photo' as const, title: 'Synthetic FIFA-Standard Turf Arena', url: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&w=800&q=75', tag: 'Sports' },
    { type: 'video' as const, title: 'Robotics & Autonomous Rover Trials', url: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=800&q=75', tag: 'Innovation' },
  ];

  const facultyProfiles = [
    { name: 'Dr. Sunita Sharma', role: 'Director General & Academic Dean', qual: 'Ph.D. Education (Oxford & IIT-B Advisory)', awards: 'National Best Educator Award', img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=75', dept: 'Senior Leadership' },
    { name: 'Dr. Arvind Subramaniam', role: 'Head of Quantum Sciences & AI', qual: 'Ph.D. Quantum Physics (IISc Bangalore)', awards: 'Author of 14 Research Papers', img: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=400&q=75', dept: 'STEM Faculty' },
    { name: 'Prof. Evelyn Reed-Kulkarni', role: 'Dean of Global Humanities & Law', qual: 'M.Phil. International Law (LSE London)', awards: 'Diplomatic Affairs Fellow', img: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=400&q=75', dept: 'Humanities' },
    { name: 'Coach Marcus Vance', role: 'Director of High-Performance Athletics', qual: 'High Performance Coach (Ex-Olympian Trainer)', awards: 'National Track Laurels', img: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=400&q=75', dept: 'Olympic Sports' },
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
    <div className="w-full min-h-full bg-[#FAF9F6] text-stone-800 overflow-x-hidden font-sans custom-scrollbar">
      
      {/* Lightbox / Video Modal */}
      {lightboxMedia && (
        <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="relative max-w-4xl w-full bg-[#0B1B3D] rounded-xl border border-[#1C3566] overflow-hidden shadow-2xl">
            <button
              onClick={() => setLightboxMedia(null)}
              className="absolute top-4 right-4 z-10 text-white hover:text-[#E7C797] p-2 bg-[#071326]/80 rounded-full transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
            <div className="relative aspect-video bg-black flex items-center justify-center">
              <img loading="lazy" src={lightboxMedia.url} alt={lightboxMedia.title} className="w-full h-full object-cover" />
              {lightboxMedia.type === 'video' && (
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-[#7B1123] text-white flex items-center justify-center shadow-lg hover:scale-105 transition-transform">
                    <Play className="w-7 h-7 fill-current ml-1" />
                  </div>
                </div>
              )}
            </div>
            <div className="p-5 flex justify-between items-center text-white bg-[#071326] border-t border-[#152B57]">
              <div>
                <span className="text-[10px] uppercase font-bold tracking-widest text-[#E7C797] bg-[#7B1123]/30 px-2.5 py-1 rounded border border-[#7B1123]/50">
                  {lightboxMedia.tag}
                </span>
                <h4 className="text-base font-serif font-bold mt-1 text-white">{lightboxMedia.title}</h4>
              </div>
              <span className="text-xs text-slate-300 font-medium">{lightboxMedia.type === 'video' ? 'Full Video Tour' : 'High Resolution Photo'}</span>
            </div>
          </div>
        </div>
      )}

      {/* Virtual 360 Tour Modal */}
      {virtualTourOpen && (
        <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-[#0B1B3D] border border-[#1C3566] rounded-xl max-w-2xl w-full p-6 sm:p-8 relative text-white space-y-6 shadow-2xl">
            <button onClick={() => setVirtualTourOpen(false)} className="absolute top-5 right-5 text-slate-400 hover:text-white transition-colors">
              <X className="w-6 h-6" />
            </button>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-lg bg-[#7B1123] text-white flex items-center justify-center shadow-xs">
                <Globe className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-serif font-bold text-white">360° Virtual Campus Experience</h3>
                <p className="text-xs text-slate-300">Explore our 50-acre flagship infrastructure virtually.</p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3 text-xs font-semibold">
              {['AI & Quantum Research Hub', 'Olympic Aquatic Center', 'Space Observatory Dome', 'Central Amphitheater & Arts Wing'].map((spot, i) => (
                <div key={i} className="bg-[#102347] p-3 rounded-lg border border-[#1F3D73] flex items-center gap-2 hover:bg-[#163060] cursor-pointer transition-colors text-slate-200">
                  <Play className="w-4 h-4 text-[#E7C797] fill-current" />
                  <span>{spot}</span>
                </div>
              ))}
            </div>

            <div className="bg-[#071326] p-4 rounded-lg border border-[#152B57] text-xs text-slate-300 flex justify-between items-center">
              <span>Want an exclusive physical campus tour with the Principal?</span>
              <button 
                onClick={() => { setVirtualTourOpen(false); handleNav('contact'); }}
                className="bg-[#7B1123] hover:bg-[#680E1D] text-white px-4 py-2 rounded font-bold text-xs transition-colors shadow-xs uppercase tracking-wider"
              >
                Book VIP Visit
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Slim Dark Navy Top Information Bar */}
      <div className="bg-[#0B1B3D] border-b border-[#142A55] text-xs px-4 md:px-8 py-2.5 flex flex-wrap justify-between items-center gap-3 text-slate-300">
        <div className="flex items-center gap-3 flex-wrap">
          <span className="bg-[#7B1123] text-white font-bold px-2.5 py-0.5 rounded text-[10px] uppercase tracking-wider flex items-center gap-1">
            <Trophy className="w-3 h-3 text-[#E7C797]" /> FLAGSHIP INSTITUTION
          </span>
          <span className="text-slate-300 font-medium hidden sm:inline">
            CBSE & International Baccalaureate Candidate • Ranked Top 5 in India • Admissions 2026–27 Open
          </span>
        </div>

        <div className="flex items-center gap-6 text-xs font-medium">
          <a href="mailto:admissions.max@brightfuture.edu.in" className="hidden lg:flex items-center gap-1.5 text-slate-300 hover:text-[#E7C797] transition-colors">
            <Mail className="w-3.5 h-3.5 text-[#C5A880]" /> admissions.max@brightfuture.edu.in
          </a>
          <button 
            onClick={() => setVirtualTourOpen(true)}
            className="text-[#E7C797] hover:text-white flex items-center gap-1.5 cursor-pointer font-semibold transition-colors"
          >
            <Globe className="w-3.5 h-3.5 text-[#C5A880]" /> 360° Virtual Tour
          </button>
          <span className="flex items-center gap-1.5 text-slate-200 font-semibold">
            <Phone className="w-3.5 h-3.5 text-[#C5A880]" /> +91 99887 76655
          </span>
        </div>
      </div>

      {/* Main Navigation Header (Clean Ivory / White Background with Burgundy Accents) */}
      <header className="bg-white/95 backdrop-blur-xs border-b border-stone-200 sticky top-0 z-40 shadow-[0_2px_10px_rgba(0,0,0,0.03)] text-[#0B1B3D]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3.5 flex items-center justify-between">
          <div 
            onClick={() => handleNav('home')}
            className="flex items-center gap-3.5 cursor-pointer group"
          >
            <div className="w-11 h-11 rounded-lg bg-[#7B1123] text-white flex items-center justify-center shadow-sm group-hover:bg-[#680E1D] transition-colors">
              <GraduationCap className="w-6 h-6" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h1 className="text-xl font-serif font-bold text-[#0B1B3D] tracking-tight leading-none">BRIGHTFUTURE</h1>
                <span className="bg-[#7B1123] text-white text-[10px] font-bold uppercase px-2 py-0.5 rounded tracking-wider">
                  MAX
                </span>
              </div>
              <p className="text-[11px] font-medium text-stone-500 tracking-wider uppercase mt-0.5">World Class Global Academy</p>
            </div>
          </div>

          {/* Desktop Nav Items */}
          {!isMobile && !isTablet && (
            <nav className="flex items-center gap-2">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNav(item.id)}
                  className={`px-3 py-2 text-xs uppercase tracking-wider transition-colors font-medium ${
                    activeNav === item.id 
                      ? 'text-[#7B1123] font-bold border-b-2 border-[#7B1123]' 
                      : 'text-stone-700 hover:text-[#7B1123]'
                  }`}
                >
                  {item.label}
                </button>
              ))}
              <button
                onClick={() => handleNav('admissions')}
                className="ml-3 bg-[#7B1123] hover:bg-[#680E1D] text-white font-semibold text-xs px-5 py-2.5 rounded shadow-sm transition-colors uppercase tracking-wider cursor-pointer"
              >
                Apply 2026–27
              </button>
            </nav>
          )}

          {/* Mobile menu button */}
          {(isMobile || isTablet) && (
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-stone-100 text-[#0B1B3D] border border-stone-200"
            >
              <span className="text-xs font-bold px-1">MENU</span>
            </button>
          )}
        </div>

        {/* Mobile dropdown */}
        {(isMobile || isTablet) && mobileMenuOpen && (
          <div className="bg-[#FAF9F6] border-t border-stone-200 px-4 py-4 space-y-1 shadow-lg">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNav(item.id)}
                className={`w-full text-left px-4 py-3 rounded-lg text-xs uppercase tracking-wider transition-colors ${
                  activeNav === item.id ? 'bg-[#7B1123] text-white font-bold' : 'text-stone-700 hover:bg-stone-100'
                }`}
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={() => handleNav('admissions')}
              className="w-full bg-[#7B1123] hover:bg-[#680E1D] text-white font-bold text-xs py-3 rounded uppercase tracking-wider mt-2 transition-colors cursor-pointer"
            >
              Apply 2026–27
            </button>
          </div>
        )}
      </header>

      {/* =========================================================================
          VIEW: MAX HOME (Cinematic 15-Section Ecosystem)
      ========================================================================= */}
      {activeNav === 'home' && (
        <div className="space-y-16 pb-24">
          
          {/* 1. Large Professional School Campus Hero Section */}
          <section className="relative min-h-[580px] lg:min-h-[640px] flex items-center px-4 sm:px-8 lg:px-16 overflow-hidden">
            {/* Background Image with Deep Navy Gradient Overlay */}
            <div className="absolute inset-0 z-0">
              <img loading="lazy" 
                src="https://images.unsplash.com/photo-1541829070764-84a7d30dd3f3?auto=format&fit=crop&w=1920&q=75" 
                alt="BrightFuture School campus" 
                className="w-full h-full object-cover filter brightness-[0.45]"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#0B1B3D] via-[#0B1B3D]/85 to-[#0B1B3D]/50"></div>
            </div>

            <div className="relative z-10 max-w-4xl space-y-6 py-12 text-left">
              <div className="inline-flex items-center gap-2 bg-[#7B1123]/90 text-white px-3.5 py-1.5 rounded text-[11px] font-bold uppercase tracking-widest border border-white/20 shadow-xs">
                <Sparkles className="w-3.5 h-3.5 text-[#E7C797]" />
                <span>WELCOME TO BRIGHTFUTURE</span>
              </div>

              <h2 className="text-4xl sm:text-6xl lg:text-7xl font-serif font-bold tracking-tight leading-[1.1] text-white">
                Inspiring Excellence,<br />
                <span className="text-[#E7C797] italic font-serif">Building Futures</span>
              </h2>

              <p className="text-slate-200 text-sm sm:text-base leading-relaxed max-w-2xl font-normal">
                An elite 50-acre academic institution offering pre-primary to Grade 12 CBSE & International curricula, Quantum STEM Labs, Olympic Athletic Academies, and direct placement pipelines to premier global universities.
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-4">
                <button 
                  onClick={() => handleNav('admissions')}
                  className="bg-[#7B1123] hover:bg-[#680E1D] text-white font-bold px-8 py-3.5 rounded text-xs uppercase tracking-wider shadow-md transition-colors flex items-center gap-2 group cursor-pointer"
                >
                  <span>DISCOVER MORE</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
                <button 
                  onClick={() => setVirtualTourOpen(true)}
                  className="bg-white/10 hover:bg-white/20 text-white border border-white/30 font-semibold px-6 py-3.5 rounded text-xs uppercase tracking-wider transition-colors flex items-center gap-2 cursor-pointer"
                >
                  <Play className="w-3.5 h-3.5 text-[#E7C797] fill-current" /> 360° Virtual Tour
                </button>
                <a
                  href="https://wa.me/919988776655?text=Hello%20BrightFuture%20Max,%20I%20want%20to%20apply%20for%20admissions"
                  target="_blank"
                  rel="noreferrer"
                  className="bg-emerald-700 hover:bg-emerald-600 text-white font-semibold px-6 py-3.5 rounded text-xs uppercase tracking-wider flex items-center gap-2 shadow-xs transition-colors"
                >
                  <MessageCircle className="w-3.5 h-3.5" /> VIP WhatsApp Desk
                </a>
              </div>

              {/* Status Ticker Badges */}
              <div className="pt-4 grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs text-slate-200 max-w-3xl">
                <div className="bg-[#0B1B3D]/80 backdrop-blur-xs p-3 rounded-lg border border-slate-700">
                  <span className="font-bold text-[#E7C797] block">100% University Admit</span>
                  <span className="text-[10px] text-slate-300">IITs, AIIMS, Ivy League</span>
                </div>
                <div className="bg-[#0B1B3D]/80 backdrop-blur-xs p-3 rounded-lg border border-slate-700">
                  <span className="font-bold text-white block">50-Acre Smart Campus</span>
                  <span className="text-[10px] text-slate-300">Solar Powered & Wi-Fi 6</span>
                </div>
                <div className="bg-[#0B1B3D]/80 backdrop-blur-xs p-3 rounded-lg border border-slate-700">
                  <span className="font-bold text-[#E7C797] block">₹2 Cr+ Scholarships</span>
                  <span className="text-[10px] text-slate-300">Awarded Annually</span>
                </div>
                <div className="bg-[#0B1B3D]/80 backdrop-blur-xs p-3 rounded-lg border border-slate-700">
                  <span className="font-bold text-white block">Olympic Sports Center</span>
                  <span className="text-[10px] text-slate-300">FIFA Turf & 50m Pool</span>
                </div>
              </div>
            </div>
          </section>

          {/* 2. Premium Dark Navy Statistics Section */}
          <section className="w-full bg-[#0B1B3D] text-white py-12 border-y border-[#152B57]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-[#1C3566]">
                <div className="p-2">
                  <div className="text-4xl sm:text-5xl font-serif font-bold text-[#E7C797]">10,000+</div>
                  <div className="text-xs font-semibold text-slate-200 uppercase tracking-wider mt-2">Students Enrolled</div>
                  <div className="text-[11px] text-slate-400 mt-0.5">Across All Academic Wings</div>
                </div>
                <div className="p-2">
                  <div className="text-4xl sm:text-5xl font-serif font-bold text-white">750+</div>
                  <div className="text-xs font-semibold text-slate-200 uppercase tracking-wider mt-2">Expert Teachers</div>
                  <div className="text-[11px] text-slate-400 mt-0.5">Doctorates & Master Educators</div>
                </div>
                <div className="p-2">
                  <div className="text-4xl sm:text-5xl font-serif font-bold text-[#E7C797]">25+</div>
                  <div className="text-xs font-semibold text-slate-200 uppercase tracking-wider mt-2">Years of Excellence</div>
                  <div className="text-[11px] text-slate-400 mt-0.5">Legacy of Academic Rigor</div>
                </div>
                <div className="p-2">
                  <div className="text-4xl sm:text-5xl font-serif font-bold text-white">40+</div>
                  <div className="text-xs font-semibold text-slate-200 uppercase tracking-wider mt-2">Countries Represented</div>
                  <div className="text-[11px] text-slate-400 mt-0.5">Global Scholars Network</div>
                </div>
              </div>
            </div>
          </section>

          {/* 3. Institutional Legacy & Split Story */}
          <section className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-6 space-y-6">
                <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#7B1123] bg-[#7B1123]/10 px-3.5 py-1.5 rounded border border-[#7B1123]/20">
                  <Award className="w-3.5 h-3.5 text-[#7B1123]" /> Institutional Heritage & Philosophy
                </div>
                <h3 className="text-3xl sm:text-4xl font-serif font-bold text-[#0B1B3D] leading-tight">
                  Where Rigorous Scholarship Meets Visionary Character.
                </h3>
                <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
                  Founded on the conviction that future global challenges require multidisciplinary thinkers, BrightFuture Max integrates state-of-the-art laboratory research, international diplomatic debating, competitive sports, and moral philosophy into daily student life.
                </p>

                <div className="space-y-3 pt-2">
                  {[
                    { title: 'Intellectual Mastery', desc: 'Integrated research curriculum with university professors and senior researchers.' },
                    { title: 'Emotional & Moral Resilience', desc: 'Comprehensive ethics, leadership councils, and community social impact missions.' },
                    { title: 'Global Competitiveness', desc: 'Harvard MUN delegations, International Science Olympiads & SAT/CUET prep.' }
                  ].map((p, i) => (
                    <div key={i} className="bg-white p-4 rounded-xl border border-stone-200 flex items-start gap-3 shadow-xs">
                      <CheckCircle2 className="w-5 h-5 text-[#7B1123] shrink-0 mt-0.5" />
                      <div>
                        <h4 className="font-serif font-bold text-sm text-[#0B1B3D]">{p.title}</h4>
                        <p className="text-xs text-stone-500 mt-0.5">{p.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right: Director General Video Preview Card */}
              <div className="lg:col-span-6 relative">
                <div className="rounded-xl overflow-hidden border border-stone-200 bg-[#0B1B3D] relative shadow-md group cursor-pointer" onClick={() => setLightboxMedia(galleryData[1])}>
                  <div className="aspect-[16/10] overflow-hidden">
                    <img loading="lazy" src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=800&q=75" alt="Director message teaser" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 filter brightness-90" />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-[#071326] via-[#071326]/40 to-transparent flex flex-col justify-between p-6">
                    <span className="bg-[#7B1123] text-white font-bold text-xs px-3 py-1 rounded self-start shadow-xs">
                      Watch Institutional Film
                    </span>
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="text-lg font-serif font-bold text-white">Dean&apos;s Address & Vision 2030</h4>
                        <p className="text-xs text-slate-300">Dr. Sunita Sharma, Director General</p>
                      </div>
                      <div className="w-12 h-12 rounded-full bg-[#7B1123] text-white flex items-center justify-center shadow-md group-hover:bg-[#680E1D] transition-colors">
                        <Play className="w-5 h-5 fill-current ml-0.5" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* 4. Comprehensive Academic Departments & Senior Streams */}
          <section className="bg-[#F5F3EF] py-16 px-4 sm:px-6 border-y border-stone-200 text-stone-800">
            <div className="max-w-7xl mx-auto space-y-12">
              <div className="text-center max-w-2xl mx-auto space-y-2">
                <span className="text-xs font-bold uppercase tracking-widest text-[#7B1123] bg-white px-4 py-1.5 rounded border border-stone-200 shadow-2xs">
                  Academic Continuum
                </span>
                <h3 className="text-3xl sm:text-4xl font-serif font-bold text-[#0B1B3D]">Academic Wings & Specialized Streams</h3>
                <p className="text-stone-600 text-xs sm:text-sm">Structured from Early Childhood (Nursery) to Advanced Senior High School (Grade 12).</p>
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
                    className={`px-5 py-2.5 rounded text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer ${
                      activeDepartment === tab.id 
                        ? 'bg-[#7B1123] text-white shadow-xs' 
                        : 'bg-white text-stone-700 hover:bg-stone-50 border border-stone-200 shadow-2xs'
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>

              {/* Senior Streams Deep-Dive Display */}
              {activeDepartment === 'senior' && (
                <div className="space-y-6">
                  <div className="flex justify-center gap-2 flex-wrap">
                    {[
                      { id: 'stem', label: '🔬 Advanced STEM, AI & Robotics (PCM / PCB + CS)' },
                      { id: 'fintech', label: '📊 Global Commerce, FinTech & Applied Econ' },
                      { id: 'humanities', label: '⚖️ Public Policy, Law (CLAT) & Humanities' },
                    ].map((s) => (
                      <button
                        key={s.id}
                        onClick={() => setActiveSeniorStream(s.id as any)}
                        className={`px-4 py-2.5 rounded text-xs font-bold transition-colors cursor-pointer ${
                          activeSeniorStream === s.id 
                            ? 'bg-[#0B1B3D] text-white shadow-xs font-bold' 
                            : 'bg-white text-stone-700 hover:bg-stone-50 border border-stone-200'
                        }`}
                      >
                        {s.label}
                      </button>
                    ))}
                  </div>

                  <div className="bg-white border border-stone-200 p-6 sm:p-8 rounded-xl shadow-xs grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                    <div className="lg:col-span-7 space-y-4">
                      {activeSeniorStream === 'stem' && (
                        <>
                          <span className="text-[10px] font-bold uppercase tracking-widest text-[#7B1123] bg-[#7B1123]/10 px-3 py-1 rounded border border-[#7B1123]/20">
                            Engineering, Medicine & Quantum Physics
                          </span>
                          <h4 className="text-2xl font-serif font-bold text-[#0B1B3D]">Quantum STEM & AI Innovation Wing</h4>
                          <p className="text-xs text-stone-600 leading-relaxed">
                            Combining CBSE core syllabus with quantum mechanics fundamentals, Python/TensorFlow machine learning, astrophysics data labs, and Olympiad problem-solving.
                          </p>
                          <div className="grid grid-cols-2 gap-2 text-xs text-stone-700 pt-2 font-medium">
                            <div className="bg-[#FAF9F6] p-2.5 rounded border border-stone-200">✓ JEE Main & Advanced Track</div>
                            <div className="bg-[#FAF9F6] p-2.5 rounded border border-stone-200">✓ NEET-UG Clinical Foundations</div>
                            <div className="bg-[#FAF9F6] p-2.5 rounded border border-stone-200">✓ NASA Space App Challenge Mentorship</div>
                            <div className="bg-[#FAF9F6] p-2.5 rounded border border-stone-200">✓ MIT / Stanford Portfolio Review</div>
                          </div>
                        </>
                      )}

                      {activeSeniorStream === 'fintech' && (
                        <>
                          <span className="text-[10px] font-bold uppercase tracking-widest text-[#7B1123] bg-[#7B1123]/10 px-3 py-1 rounded border border-[#7B1123]/20">
                            Wall Street & Corporate Leadership
                          </span>
                          <h4 className="text-2xl font-serif font-bold text-[#0B1B3D]">International Commerce & FinTech Wing</h4>
                          <p className="text-xs text-stone-600 leading-relaxed">
                            Equipping future chartered accountants, investment bankers, and startup entrepreneurs with algorithmic trading simulations, venture pitch workshops, and macro-economics.
                          </p>
                          <div className="grid grid-cols-2 gap-2 text-xs text-stone-700 pt-2 font-medium">
                            <div className="bg-[#FAF9F6] p-2.5 rounded border border-stone-200">✓ CA-Foundation Integrated Batch</div>
                            <div className="bg-[#FAF9F6] p-2.5 rounded border border-stone-200">✓ Real-time Bloomberg Terminal Mockup</div>
                            <div className="bg-[#FAF9F6] p-2.5 rounded border border-stone-200">✓ Harvard Case Study Method</div>
                            <div className="bg-[#FAF9F6] p-2.5 rounded border border-stone-200">✓ Angel Investor Student Pitch Arena</div>
                          </div>
                        </>
                      )}

                      {activeSeniorStream === 'humanities' && (
                        <>
                          <span className="text-[10px] font-bold uppercase tracking-widest text-[#7B1123] bg-[#7B1123]/10 px-3 py-1 rounded border border-[#7B1123]/20">
                            Diplomacy, Law & Civil Services
                          </span>
                          <h4 className="text-2xl font-serif font-bold text-[#0B1B3D]">Global Humanities, Law & Policy Wing</h4>
                          <p className="text-xs text-stone-600 leading-relaxed">
                            Developing critical policy thinkers, journalists, international diplomats, and legal minds with intensive moot court practice and UPSC civil service foundations.
                          </p>
                          <div className="grid grid-cols-2 gap-2 text-xs text-stone-700 pt-2 font-medium">
                            <div className="bg-[#FAF9F6] p-2.5 rounded border border-stone-200">✓ CLAT & AILET Entrance Track</div>
                            <div className="bg-[#FAF9F6] p-2.5 rounded border border-stone-200">✓ Model UN Secretariat & Debating</div>
                            <div className="bg-[#FAF9F6] p-2.5 rounded border border-stone-200">✓ Behavioral Psychology Lab</div>
                            <div className="bg-[#FAF9F6] p-2.5 rounded border border-stone-200">✓ Public Policy Research Journal</div>
                          </div>
                        </>
                      )}
                    </div>

                    <div className="lg:col-span-5 h-64 rounded-lg overflow-hidden border border-stone-200 relative shadow-2xs">
                      <img loading="lazy" 
                        src={activeSeniorStream === 'stem' 
                          ? 'https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&w=800&q=75' 
                          : activeSeniorStream === 'fintech'
                          ? 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=75'
                          : 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=800&q=75'
                        } 
                        alt="Department stream visual" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div>
              )}

              {activeDepartment !== 'senior' && (
                <div className="bg-white p-8 rounded-xl border border-stone-200 text-center space-y-4 max-w-2xl mx-auto shadow-xs">
                  <h4 className="text-xl font-serif font-bold text-[#0B1B3D]">Curriculum Overview for {activeDepartment.toUpperCase()}</h4>
                  <p className="text-xs text-stone-600 leading-relaxed">
                    Designed to inspire foundational clarity, linguistic mastery, inquiry-driven mathematics, and social-emotional growth under Cambridge and CBSE guidelines.
                  </p>
                  <button onClick={() => handleNav('academics')} className="bg-[#7B1123] hover:bg-[#680E1D] text-white font-bold text-xs px-6 py-2.5 rounded transition-colors uppercase tracking-wider cursor-pointer">
                    View Complete Syllabus Matrix
                  </button>
                </div>
              )}
            </div>
          </section>

          {/* 5. 50-Acre Campus & Infrastructure Tour (3-Column Feature Cards) */}
          <section className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-10">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-[#7B1123] bg-[#7B1123]/10 px-3.5 py-1 rounded border border-[#7B1123]/20">
                  Infrastructure Marvel
                </span>
                <h3 className="text-3xl font-serif font-bold text-[#0B1B3D] mt-2">Flagship 50-Acre Smart Campus</h3>
              </div>
              <button 
                onClick={() => setVirtualTourOpen(true)}
                className="bg-[#0B1B3D] hover:bg-[#132A4A] text-white text-xs font-bold px-5 py-3 rounded flex items-center gap-2 cursor-pointer shadow-xs transition-colors uppercase tracking-wider"
              >
                <Globe className="w-4 h-4 text-[#E7C797]" /> Launch 360° Interactive Tour
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { title: 'Quantum AI & Robotics Wing', desc: 'Equipped with Boston Dynamics robot simulators, 3D laser cutters, and high-performance GPU clusters.', img: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&w=600&q=75', tag: 'AI & STEM' },
                { title: 'Olympic Aquatic & Turf Village', desc: 'Heated 50m Olympic swimming pool, FIFA-grade turf football arena, and 8-lane synthetic track.', img: 'https://images.unsplash.com/photo-1530549387789-4c1017266635?auto=format&fit=crop&w=600&q=75', tag: 'Olympic Sports' },
                { title: 'Central Knowledge & Research Dome', desc: 'Over 50,000 physical volumes, JSTOR access, private acoustic research pods, and digital archives.', img: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=600&q=75', tag: 'Library' },
                { title: '1,200-Seat Grand Amphitheater', desc: 'Acoustically tuned performing arts center hosting annual TEDx youth conferences and symphonies.', img: 'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=600&q=75', tag: 'Performing Arts' },
                { title: '50-Foot Celestial Observatory', desc: 'Equipped with computerized high-magnification Schmidt-Cassegrain telescopes for space studies.', img: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=600&q=75', tag: 'Astrophysics' },
                { title: '5-Star Residential Boarding Wing', desc: 'Modern air-conditioned suites with 24/7 security, resident tutors, and nutritionist-crafted dining.', img: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=600&q=75', tag: 'Residential' },
              ].map((item, i) => (
                <div key={i} className="bg-white rounded-xl overflow-hidden border border-stone-200 hover:border-stone-300 hover:shadow-md transition-all group shadow-xs">
                  <div className="h-48 overflow-hidden relative">
                    <img loading="lazy" src={item.img} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                    <span className="absolute top-3 left-3 bg-[#7B1123] text-white text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded shadow-xs">
                      {item.tag}
                    </span>
                  </div>
                  <div className="p-6 space-y-2">
                    <h4 className="font-serif font-bold text-lg text-[#0B1B3D] group-hover:text-[#7B1123] transition-colors">{item.title}</h4>
                    <p className="text-xs text-stone-600 leading-relaxed">{item.desc}</p>
                    <div className="pt-2">
                      <span className="text-[#7B1123] font-bold text-xs flex items-center gap-1 group-hover:gap-1.5 transition-all">
                        EXPLORE →
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* 6. Life at School & House System */}
          <section className="bg-[#0B1B3D] py-16 px-4 sm:px-6 text-white border-y border-[#152B57]">
            <div className="max-w-7xl mx-auto space-y-12">
              <div className="text-center max-w-2xl mx-auto space-y-2">
                <span className="text-xs font-bold uppercase tracking-widest text-[#E7C797] bg-[#7B1123]/40 px-4 py-1.5 rounded border border-[#7B1123]/60">
                  Student Life & Traditions
                </span>
                <h3 className="text-3xl sm:text-4xl font-serif font-bold text-white">The Four Pillars & House System</h3>
                <p className="text-slate-300 text-xs sm:text-sm">Fostering camaraderie, healthy rivalry, and leadership through historic school houses.</p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  { name: 'House Phoenix (Ignis)', motto: 'Courage & Innovation', icon: '🔥', pts: '2,450 Pts' },
                  { name: 'House Pegasus (Aero)', motto: 'Intellect & Eloquence', icon: '⚡', pts: '2,390 Pts' },
                  { name: 'House Titan (Terra)', motto: 'Resilience & Integrity', icon: '🛡️', pts: '2,420 Pts' },
                  { name: 'House Orion (Cosmos)', motto: 'Wisdom & Global Vision', icon: '🌌', pts: '2,480 Pts' },
                ].map((house, i) => (
                  <div key={i} className="bg-[#102347] p-6 rounded-xl text-white space-y-4 shadow-xs border border-[#1F3D73] relative overflow-hidden">
                    <div className="text-4xl">{house.icon}</div>
                    <div>
                      <span className="text-[10px] font-semibold text-[#E7C797] uppercase tracking-wider">House Cup Standings</span>
                      <h4 className="text-xl font-serif font-bold text-white mt-0.5">{house.name}</h4>
                      <p className="text-xs text-slate-300 italic mt-0.5">&quot;{house.motto}&quot;</p>
                    </div>
                    <div className="bg-[#071326] p-2.5 rounded text-center text-xs font-bold text-[#E7C797] border border-[#152B57]">
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
              <span className="text-xs font-bold uppercase tracking-widest text-[#7B1123] bg-[#7B1123]/10 px-4 py-1.5 rounded border border-[#7B1123]/20">
                Academic Luminaries
              </span>
              <h3 className="text-3xl sm:text-4xl font-serif font-bold text-[#0B1B3D]">World-Class Faculty & Deans</h3>
              <p className="text-stone-600 text-xs sm:text-sm">Distinguished doctorates, former researchers, and national coaches guiding every student.</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {facultyProfiles.map((fac, i) => (
                <div key={i} className="bg-white rounded-xl overflow-hidden border border-stone-200 p-6 text-center space-y-4 shadow-xs hover:shadow-md transition-shadow">
                  <div className="w-24 h-24 rounded-full overflow-hidden mx-auto border-2 border-[#7B1123] shadow-xs">
                    <img loading="lazy" src={fac.img} alt={fac.name} className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <span className="text-[10px] bg-stone-100 text-[#0B1B3D] font-bold px-3 py-1 rounded border border-stone-200">
                      {fac.dept}
                    </span>
                    <h4 className="font-serif font-bold text-base text-[#0B1B3D] mt-2">{fac.name}</h4>
                    <p className="text-xs text-[#7B1123] font-semibold">{fac.role}</p>
                    <p className="text-[11px] text-stone-500 mt-1">{fac.qual}</p>
                    <p className="text-[10px] text-stone-600 font-medium mt-1">{fac.awards}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* 8. Media Gallery with Photo & Video Tabs */}
          <section className="bg-[#F5F3EF] py-16 px-4 sm:px-6 border-y border-stone-200 text-stone-800">
            <div className="max-w-7xl mx-auto space-y-8">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <div>
                  <span className="text-xs font-bold uppercase tracking-widest text-[#7B1123]">Media Showcase</span>
                  <h3 className="text-3xl font-serif font-bold text-[#0B1B3D]">Photo & Video Gallery</h3>
                </div>

                <div className="flex gap-2">
                  <button 
                    onClick={() => setMediaTypeFilter('all')}
                    className={`px-4 py-2 rounded text-xs font-bold transition-colors cursor-pointer ${mediaTypeFilter === 'all' ? 'bg-[#7B1123] text-white shadow-xs' : 'bg-white text-stone-700 border border-stone-300'}`}
                  >
                    All Media
                  </button>
                  <button 
                    onClick={() => setMediaTypeFilter('video')}
                    className={`px-4 py-2 rounded text-xs font-bold flex items-center gap-1.5 transition-colors cursor-pointer ${mediaTypeFilter === 'video' ? 'bg-[#7B1123] text-white font-bold shadow-xs' : 'bg-white text-stone-700 border border-stone-300'}`}
                  >
                    <Video className="w-3.5 h-3.5 text-[#E7C797]" /> Video Tours Only
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
                      className="group relative h-64 rounded-xl overflow-hidden cursor-pointer border border-stone-200 shadow-xs bg-[#0B1B3D]"
                    >
                      <img loading="lazy" src={item.url} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 filter brightness-90" />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#071326] via-[#071326]/30 to-transparent flex flex-col justify-between p-5">
                        <div className="flex justify-between items-center">
                          <span className="text-[10px] text-white font-bold uppercase tracking-wider bg-[#7B1123] px-3 py-1 rounded shadow-xs">
                            {item.tag}
                          </span>
                          {item.type === 'video' && (
                            <span className="bg-[#7B1123] text-white text-[10px] font-bold px-2 py-0.5 rounded flex items-center gap-1">
                              <Play className="w-3 h-3 fill-current" /> VIDEO
                            </span>
                          )}
                        </div>
                        <div>
                          <h4 className="font-serif font-bold text-sm text-white">{item.title}</h4>
                          <span className="text-[11px] text-slate-300 mt-1 block">Click to enlarge</span>
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
              <span className="text-xs font-bold uppercase tracking-widest text-[#7B1123] bg-[#7B1123]/10 px-4 py-1.5 rounded border border-[#7B1123]/20">
                Alumni Network
              </span>
              <h3 className="text-3xl font-serif font-bold text-[#0B1B3D]">Global Scholars & Trailblazers</h3>
              <p className="text-stone-600 text-xs sm:text-sm">BrightFuture Max graduates driving breakthroughs at the world&apos;s leading institutions.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {alumniSpotlights.map((alum, i) => (
                <div key={i} className="bg-white p-6 rounded-xl border border-stone-200 space-y-4 shadow-xs flex flex-col justify-between text-stone-800">
                  <div className="space-y-3">
                    <div className="text-[#D4AF37] flex">
                      {[1,2,3,4,5].map(s => <Star key={s} className="w-4 h-4 fill-current" />)}
                    </div>
                    <p className="text-xs text-stone-600 italic leading-relaxed">&quot;{alum.quote}&quot;</p>
                  </div>
                  <div className="border-t border-stone-100 pt-3">
                    <h5 className="font-serif font-bold text-sm text-[#0B1B3D]">{alum.name}</h5>
                    <p className="text-xs text-[#7B1123] font-semibold">{alum.now}</p>
                    <p className="text-[10px] text-stone-500">{alum.batch}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* 10. News & Gazette Updates */}
          <section className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="bg-[#0B1B3D] rounded-xl p-8 sm:p-10 border border-[#152B57] space-y-8 shadow-md text-white">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <div>
                  <span className="text-xs font-bold uppercase tracking-widest bg-[#7B1123] text-white px-3 py-1 rounded">
                    Campus Gazette
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white mt-2">Latest News & Breakthroughs</h3>
                </div>
                <button onClick={() => handleNav('events')} className="text-xs font-bold text-[#E7C797] hover:text-white flex items-center gap-1 transition-colors cursor-pointer uppercase tracking-wider">
                  View Full Event Calendar <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {newsAnnouncements.map((news, i) => (
                  <div key={i} className="bg-[#102347] p-5 rounded-lg border border-[#1F3D73] space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-[10px] font-bold text-[#E7C797] uppercase tracking-widest">{news.cat}</span>
                      <span className="text-[10px] text-slate-300">{news.date}</span>
                    </div>
                    <h4 className="font-serif font-bold text-sm text-white leading-snug">{news.title}</h4>
                    <p className="text-xs text-slate-300">{news.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* 11. Merit Scholarships & Online Admission Portal */}
          <section id="max-admissions-section" className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="bg-gradient-to-br from-[#0B1B3D] to-[#102347] rounded-xl p-8 sm:p-12 border border-[#152B57] shadow-md grid grid-cols-1 lg:grid-cols-12 gap-12 items-center text-white">
              <div className="lg:col-span-6 space-y-6">
                <span className="bg-[#7B1123] text-white font-bold px-4 py-1 rounded text-xs uppercase tracking-wider">
                  Admissions Cycle 2026-27
                </span>
                <h3 className="text-3xl sm:text-4xl font-serif font-bold text-white leading-tight">
                  Join India&apos;s Foremost Leadership Academy.
                </h3>
                <p className="text-slate-200 text-xs sm:text-sm leading-relaxed">
                  Admissions to BrightFuture Max are selective and strictly merit-driven across Pre-Primary to Grade 12. Generous scholarships up to 100% full waiver are awarded to qualifying scholars and athletic champions.
                </p>

                <div className="bg-[#071326] p-4 rounded-lg border border-[#152B57] space-y-2 text-xs">
                  <div className="font-bold text-[#E7C797] flex items-center gap-2">
                    <Trophy className="w-4 h-4 text-[#E7C797]" /> Merit Scholarship Entrance Exam (MSEE 2026)
                  </div>
                  <p className="text-slate-300">
                    Next examination date: <strong>Sunday, 15th November 2026</strong>. Top 50 rankers receive complete tuition and residential funding.
                  </p>
                </div>
              </div>

              {/* Form Card */}
              <div className="lg:col-span-6 bg-[#071326] p-6 sm:p-8 rounded-xl border border-[#152B57] shadow-md text-white">
                <h4 className="text-xl font-serif font-bold text-white mb-1">VIP Admission Application</h4>
                <p className="text-xs text-slate-400 mb-5">Enter your details to receive the 2026 Prospectus & Scholarship Guide.</p>

                {enquirySubmitted ? (
                  <div className="bg-[#102347] border border-[#1F3D73] text-white p-6 rounded-lg text-center space-y-3">
                    <CheckCircle2 className="w-12 h-12 mx-auto text-[#E7C797]" />
                    <h5 className="font-serif font-bold text-base text-white">Application Successfully Logged</h5>
                    <p className="text-xs text-slate-300">The Senior Admissions Directorate will reach out to schedule an interaction session.</p>
                  </div>
                ) : (
                  <form onSubmit={(e) => { e.preventDefault(); setEnquirySubmitted(true); }} className="space-y-3 text-xs">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <label className="block text-slate-300 font-semibold mb-1">Parent Full Name *</label>
                        <input required placeholder="Parent Name" className="w-full bg-[#0B1B3D] border border-slate-700 rounded p-3 text-white placeholder-slate-400 focus:outline-none focus:border-[#7B1123]" />
                      </div>
                      <div>
                        <label className="block text-slate-300 font-semibold mb-1">Student Full Name *</label>
                        <input required placeholder="Student Name" className="w-full bg-[#0B1B3D] border border-slate-700 rounded p-3 text-white placeholder-slate-400 focus:outline-none focus:border-[#7B1123]" />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <label className="block text-slate-300 font-semibold mb-1">Phone / WhatsApp Number *</label>
                        <input required type="tel" placeholder="10-digit mobile" className="w-full bg-[#0B1B3D] border border-slate-700 rounded p-3 text-white placeholder-slate-400 focus:outline-none focus:border-[#7B1123]" />
                      </div>
                      <div>
                        <label className="block text-slate-300 font-semibold mb-1">Email Address *</label>
                        <input required type="email" placeholder="parent@example.com" className="w-full bg-[#0B1B3D] border border-slate-700 rounded p-3 text-white placeholder-slate-400 focus:outline-none focus:border-[#7B1123]" />
                      </div>
                    </div>

                    <div>
                      <label className="block text-slate-300 font-semibold mb-1">Applying for Stage & Stream *</label>
                      <select className="w-full bg-[#0B1B3D] border border-slate-700 rounded p-3 text-white focus:outline-none focus:border-[#7B1123]">
                        <option>Pre-Primary Discovery (Nursery, LKG, UKG)</option>
                        <option>Primary School (Grades 1 to 5)</option>
                        <option>Middle School STEM (Grades 6 to 8)</option>
                        <option>Grade 9 & 10 (CBSE International Prep)</option>
                        <option>Grade 11 - Quantum STEM & AI (PCM / PCB + CS)</option>
                        <option>Grade 11 - Global Commerce & FinTech</option>
                        <option>Grade 11 - Public Policy & Humanities</option>
                      </select>
                    </div>

                    <button type="submit" className="w-full bg-[#7B1123] hover:bg-[#680E1D] text-white font-bold py-3.5 rounded shadow-sm transition-colors uppercase tracking-wider text-xs flex items-center justify-center gap-2 mt-3 cursor-pointer">
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
              <span className="text-xs font-bold uppercase tracking-widest text-[#7B1123] bg-[#7B1123]/10 px-4 py-1.5 rounded border border-[#7B1123]/20">
                Admissions & Policy
              </span>
              <h3 className="text-3xl font-serif font-bold text-[#0B1B3D]">Frequently Asked Questions</h3>
            </div>

            <div className="space-y-3">
              {maxFaqs.map((faq, idx) => (
                <div key={idx} className="bg-white rounded-xl border border-stone-200 overflow-hidden shadow-xs">
                  <button
                    onClick={() => setExpandedFaq(expandedFaq === idx ? null : idx)}
                    className="w-full text-left p-5 font-serif font-bold text-sm text-[#0B1B3D] flex justify-between items-center gap-4 hover:bg-stone-50 transition-colors cursor-pointer"
                  >
                    <span>{faq.q}</span>
                    {expandedFaq === idx ? <ChevronUp className="w-4 h-4 text-[#7B1123] shrink-0" /> : <ChevronDown className="w-4 h-4 text-stone-400 shrink-0" />}
                  </button>
                  {expandedFaq === idx && (
                    <div className="px-5 pb-5 text-xs text-stone-600 leading-relaxed border-t border-stone-100 pt-3 bg-stone-50/50">
                      {faq.a}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>

          {/* 13. Newsletter & Prospectus Subscription */}
          <section className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="bg-[#0B1B3D] border border-[#152B57] p-8 rounded-xl flex flex-col md:flex-row justify-between items-center gap-6 shadow-md text-white">
              <div>
                <h4 className="text-xl font-serif font-bold text-white">Subscribe to the BrightFuture Max Global Gazette</h4>
                <p className="text-xs text-slate-300 mt-1">Receive academic whitepapers, university scholarship alerts, and campus event invitations.</p>
              </div>

              {newsletterSubscribed ? (
                <span className="text-xs font-bold text-[#E7C797] bg-[#7B1123]/40 px-4 py-2 rounded border border-[#7B1123]/60">
                  ✓ Subscribed to Monthly Gazette
                </span>
              ) : (
                <form onSubmit={(e) => { e.preventDefault(); setNewsletterSubscribed(true); }} className="flex gap-2 w-full md:w-auto">
                  <input required type="email" placeholder="Enter your email" className="bg-[#071326] border border-slate-700 rounded px-4 py-3 text-xs text-white placeholder-slate-400 focus:outline-none focus:border-[#7B1123] w-full md:w-64" />
                  <button type="submit" className="bg-[#7B1123] hover:bg-[#680E1D] text-white font-bold px-5 py-3 rounded text-xs uppercase tracking-wider shrink-0 transition-colors cursor-pointer shadow-xs">
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
        <div className="py-12 px-4 sm:px-6 max-w-7xl mx-auto space-y-10 animate-in fade-in duration-300 text-stone-800">
          <div className="bg-white p-8 sm:p-12 rounded-xl border border-stone-200 shadow-xs space-y-8">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#7B1123] bg-[#7B1123]/10 px-4 py-1.5 rounded border border-[#7B1123]/20">
                Our Heritage & Mission
              </span>
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#0B1B3D] mt-3 mb-3">About BrightFuture Max Global Academy</h2>
              <p className="text-stone-600 text-sm leading-relaxed max-w-4xl">
                Founded with a singular vision to cultivate international scholars, Nobel aspirants, and ethical global leaders, BrightFuture Max stands as India&apos;s leading experimental and preparatory academy. We fuse high-rigor CBSE board standards with International Baccalaureate (IB) experiential methodologies, state-of-the-art quantum computing laboratories, and Olympic athletic centers.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-[#FAF9F6] p-6 rounded-xl border border-stone-200 space-y-2">
                <Compass className="w-7 h-7 text-[#7B1123]" />
                <h4 className="font-serif font-bold text-base text-[#0B1B3D]">Our Vision</h4>
                <p className="text-xs text-stone-600 leading-relaxed">
                  To remain an internationally recognized beacon of intellectual brilliance, scientific discovery, and profound ethical integrity.
                </p>
              </div>

              <div className="bg-[#FAF9F6] p-6 rounded-xl border border-stone-200 space-y-2">
                <Shield className="w-7 h-7 text-[#0B1B3D]" />
                <h4 className="font-serif font-bold text-base text-[#0B1B3D]">Our Mission</h4>
                <p className="text-xs text-stone-600 leading-relaxed">
                  To provide exceptional students with the resources, international faculty mentorship, and moral clarity needed to transform human knowledge.
                </p>
              </div>

              <div className="bg-[#FAF9F6] p-6 rounded-xl border border-stone-200 space-y-2">
                <Award className="w-7 h-7 text-[#7B1123]" />
                <h4 className="font-serif font-bold text-base text-[#0B1B3D]">Global Accreditation</h4>
                <p className="text-xs text-stone-600 leading-relaxed">
                  Affiliated to CBSE, New Delhi (Reg 1130452) • Cambridge International Associate • Member of Global Schools Alliance.
                </p>
              </div>
            </div>

            <div className="border-t border-stone-200 pt-8 space-y-6">
              <h3 className="text-2xl font-serif font-bold text-[#0B1B3D]">Directorate & Senior Advisory Board</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {facultyProfiles.map((fac, i) => (
                  <div key={i} className="bg-[#FAF9F6] p-5 rounded-xl border border-stone-200 text-center space-y-3">
                    <img loading="lazy" src={fac.img} alt={fac.name} className="w-20 h-20 rounded-full mx-auto object-cover border-2 border-[#7B1123] shadow-xs" />
                    <div>
                      <h5 className="font-serif font-bold text-sm text-[#0B1B3D]">{fac.name}</h5>
                      <p className="text-xs text-[#7B1123] font-medium">{fac.role}</p>
                      <p className="text-[10px] text-stone-500 mt-1">{fac.qual}</p>
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
        <div className="py-12 px-4 sm:px-6 max-w-7xl mx-auto space-y-10 animate-in fade-in duration-300 text-stone-800">
          <div className="bg-white p-8 sm:p-12 rounded-xl border border-stone-200 shadow-xs space-y-8">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#7B1123] bg-[#7B1123]/10 px-4 py-1.5 rounded border border-[#7B1123]/20">
                Curricular Architecture
              </span>
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#0B1B3D] mt-3 mb-2">Academics & Departmental Specializations</h2>
              <p className="text-stone-600 text-sm leading-relaxed max-w-3xl">
                Our educational framework provides specialized career accelerators across Quantum STEM, FinTech, and Global Law from early foundations through Grade 12.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-[#FAF9F6] p-6 rounded-xl border border-stone-200 space-y-4">
                <span className="bg-[#7B1123] text-white text-[10px] font-bold uppercase px-3 py-1 rounded">Engineering & Medicine</span>
                <h4 className="text-xl font-serif font-bold text-[#0B1B3D]">Quantum STEM & AI Wing</h4>
                <p className="text-xs text-stone-600 leading-relaxed">
                  Rigorous preparation for JEE Advanced, NEET-UG, NASA Astro Challenges, and MIT portfolios.
                </p>
                <div className="text-xs text-stone-700 space-y-1 bg-white p-3 rounded border border-stone-200 shadow-2xs">
                  <div>• Physics & Chemistry with Daily Practical Research</div>
                  <div>• Quantum Computing & Python AI Neural Networks</div>
                  <div>• Integrated National Competitive Batches</div>
                </div>
              </div>

              <div className="bg-[#FAF9F6] p-6 rounded-xl border border-stone-200 space-y-4">
                <span className="bg-[#0B1B3D] text-white text-[10px] font-bold uppercase px-3 py-1 rounded">Finance & Business</span>
                <h4 className="text-xl font-serif font-bold text-[#0B1B3D]">Global Commerce & FinTech Wing</h4>
                <p className="text-xs text-stone-600 leading-relaxed">
                  Developing chartered accountants, investment bankers, and startup venture leaders.
                </p>
                <div className="text-xs text-stone-700 space-y-1 bg-white p-3 rounded border border-stone-200 shadow-2xs">
                  <div>• Financial Accounting, Macroeconomics & Business</div>
                  <div>• Real-time Algorithmic Trading & Stock Simulations</div>
                  <div>• CA-Foundation & CUET Top Tier Track</div>
                </div>
              </div>

              <div className="bg-[#FAF9F6] p-6 rounded-xl border border-stone-200 space-y-4">
                <span className="bg-[#7B1123] text-white text-[10px] font-bold uppercase px-3 py-1 rounded">Law & Diplomacy</span>
                <h4 className="text-xl font-serif font-bold text-[#0B1B3D]">Public Policy & Humanities Wing</h4>
                <p className="text-xs text-stone-600 leading-relaxed">
                  Fostering international diplomats, corporate litigators, and civil servants.
                </p>
                <div className="text-xs text-stone-700 space-y-1 bg-white p-3 rounded border border-stone-200 shadow-2xs">
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
        <div className="py-12 px-4 sm:px-6 max-w-7xl mx-auto space-y-10 animate-in fade-in duration-300 text-stone-800">
          <div className="bg-white p-8 sm:p-12 rounded-xl border border-stone-200 shadow-xs space-y-8">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-[#7B1123] bg-[#7B1123]/10 px-4 py-1.5 rounded border border-[#7B1123]/20">
                  50-Acre Campus
                </span>
                <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#0B1B3D] mt-2 mb-1">State-of-the-Art Infrastructure</h2>
                <p className="text-stone-600 text-sm">Explore our specialized laboratories, residential boarding, and Olympic sports facilities.</p>
              </div>
              <button 
                onClick={() => setVirtualTourOpen(true)}
                className="bg-[#0B1B3D] hover:bg-[#132A4A] text-white font-bold text-xs px-5 py-3 rounded shadow-xs flex items-center gap-2 cursor-pointer transition-colors uppercase tracking-wider"
              >
                <Play className="w-4 h-4 fill-[#E7C797] text-[#E7C797]" /> 360° Virtual Experience
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {galleryData.map((item, i) => (
                <div key={i} onClick={() => setLightboxMedia(item)} className="bg-white rounded-xl overflow-hidden border border-stone-200 cursor-pointer group shadow-xs hover:shadow-md transition-shadow">
                  <div className="h-52 overflow-hidden relative">
                    <img loading="lazy" src={item.url} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                    <span className="absolute top-3 left-3 bg-[#7B1123] text-white text-[10px] font-bold px-3 py-1 rounded shadow-xs uppercase">
                      {item.tag}
                    </span>
                  </div>
                  <div className="p-5">
                    <h4 className="font-serif font-bold text-sm text-[#0B1B3D] group-hover:text-[#7B1123] transition-colors">{item.title}</h4>
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
        <div className="py-12 px-4 sm:px-6 max-w-7xl mx-auto space-y-10 animate-in fade-in duration-300 text-stone-800">
          <div className="bg-white p-8 sm:p-12 rounded-xl border border-stone-200 shadow-xs space-y-8">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#7B1123] bg-[#7B1123]/10 px-4 py-1.5 rounded border border-[#7B1123]/20">
                Student Life & Co-Curricular
              </span>
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#0B1B3D] mt-2 mb-2">Life at BrightFuture Max</h2>
              <p className="text-stone-600 text-sm leading-relaxed">
                Discover our student leadership councils, Model UN summits, TEDx Youth stages, and house competitions.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-[#FAF9F6] p-6 rounded-xl border border-stone-200 space-y-3">
                <div className="text-3xl">🏛️</div>
                <h4 className="font-serif font-bold text-base text-[#0B1B3D]">Student Government & Council</h4>
                <p className="text-xs text-stone-600 leading-relaxed">
                  Elected student ministers representing peers in academic senate, campus sustainability, and event execution.
                </p>
              </div>

              <div className="bg-[#FAF9F6] p-6 rounded-xl border border-stone-200 space-y-3">
                <div className="text-3xl">🎤</div>
                <h4 className="font-serif font-bold text-base text-[#0B1B3D]">TEDx Youth & Debating Society</h4>
                <p className="text-xs text-stone-600 leading-relaxed">
                  Annual licensed TEDx events featuring student innovators, international diplomats, and keynote scientists.
                </p>
              </div>

              <div className="bg-[#FAF9F6] p-6 rounded-xl border border-stone-200 space-y-3">
                <div className="text-3xl">🚀</div>
                <h4 className="font-serif font-bold text-base text-[#0B1B3D]">40+ Student-Led Guilds</h4>
                <p className="text-xs text-stone-600 leading-relaxed">
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
        <div className="py-12 px-4 sm:px-6 max-w-7xl mx-auto space-y-10 animate-in fade-in duration-300 text-stone-800">
          <div className="bg-white p-8 sm:p-12 rounded-xl border border-stone-200 shadow-xs space-y-8">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#7B1123] bg-[#7B1123]/10 px-4 py-1.5 rounded border border-[#7B1123]/20">
                Admissions 2026-27
              </span>
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#0B1B3D] mt-2 mb-2">Admissions & Merit Scholarships</h2>
              <p className="text-stone-600 text-sm leading-relaxed max-w-3xl">
                We invite applications from passionate learners across Nursery to Grade 12. Full and partial merit scholarships are awarded through the MSEE 2026 entrance exam.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              <div className="lg:col-span-6 space-y-4">
                <h3 className="text-xl font-serif font-bold text-[#0B1B3D]">Admissions Timeline & Selection</h3>
                <div className="space-y-3">
                  {[
                    { step: '01', title: 'Online Registration', desc: 'Submit application with student academic history.' },
                    { step: '02', title: 'Scholarship Entrance Exam (MSEE)', desc: 'Diagnostic evaluation in Logic, Mathematics & Science.' },
                    { step: '03', title: 'Directorate Panel Interaction', desc: 'One-on-one session with candidate & parents.' },
                    { step: '04', title: 'Enrollment & House Induction', desc: 'Formal admission offer, hostel suite allocation & uniform kit.' }
                  ].map((s, i) => (
                    <div key={i} className="bg-[#FAF9F6] p-4 rounded-xl border border-stone-200 flex items-start gap-4">
                      <span className="text-[#7B1123] font-bold text-lg">{s.step}</span>
                      <div>
                        <h4 className="font-serif font-bold text-sm text-[#0B1B3D]">{s.title}</h4>
                        <p className="text-xs text-stone-600 mt-0.5">{s.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="lg:col-span-6 bg-[#0B1B3D] p-6 sm:p-8 rounded-xl border border-[#152B57] shadow-md text-white space-y-4">
                <h4 className="text-lg font-serif font-bold text-white">Quick Admission Enquiry</h4>
                <p className="text-xs text-slate-300">Our Admissions Dean will contact you with test syllabus & dates.</p>

                {enquirySubmitted ? (
                  <div className="bg-[#102347] p-5 rounded-lg border border-[#1F3D73] text-center space-y-2">
                    <CheckCircle2 className="w-10 h-10 mx-auto text-[#E7C797]" />
                    <p className="font-serif font-bold text-sm text-white">Enquiry Received!</p>
                  </div>
                ) : (
                  <form onSubmit={(e) => { e.preventDefault(); setEnquirySubmitted(true); }} className="space-y-3 text-xs">
                    <input required placeholder="Parent Name" className="w-full bg-[#071326] border border-slate-700 rounded p-3 text-white placeholder-slate-400 focus:outline-none focus:border-[#7B1123]" />
                    <input required placeholder="Student Name" className="w-full bg-[#071326] border border-slate-700 rounded p-3 text-white placeholder-slate-400 focus:outline-none focus:border-[#7B1123]" />
                    <input required type="tel" placeholder="Mobile / WhatsApp" className="w-full bg-[#071326] border border-slate-700 rounded p-3 text-white placeholder-slate-400 focus:outline-none focus:border-[#7B1123]" />
                    <select className="w-full bg-[#071326] border border-slate-700 rounded p-3 text-white focus:outline-none focus:border-[#7B1123]">
                      <option>Nursery to Grade 12 (Select Class)</option>
                      <option>Pre-Primary (Nursery, LKG, UKG)</option>
                      <option>Primary (Grades 1 - 5)</option>
                      <option>Middle (Grades 6 - 8)</option>
                      <option>Secondary (Grades 9 & 10)</option>
                      <option>Grade 11 - Science (Quantum STEM & AI)</option>
                      <option>Grade 11 - Global Commerce</option>
                      <option>Grade 11 - Public Policy & Humanities</option>
                    </select>
                    <button type="submit" className="w-full bg-[#7B1123] hover:bg-[#680E1D] text-white font-bold py-3.5 rounded uppercase tracking-wider text-xs transition-colors cursor-pointer shadow-xs">
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
        <div className="py-12 px-4 sm:px-6 max-w-7xl mx-auto space-y-10 animate-in fade-in duration-300 text-stone-800">
          <div className="bg-white p-8 sm:p-12 rounded-xl border border-stone-200 shadow-xs space-y-8">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-[#7B1123] bg-[#7B1123]/10 px-4 py-1.5 rounded border border-[#7B1123]/20">
                  Media Vault
                </span>
                <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#0B1B3D] mt-2 mb-1">Campus Video & Photo Gallery</h2>
                <p className="text-stone-600 text-sm">Experience our academic pavilions, events, and athletics in high definition.</p>
              </div>

              <div className="flex flex-wrap gap-2 text-xs font-bold">
                {['All', 'Innovation', 'Sports', 'Cultural', 'Leadership', 'Campus Tour'].map(cat => (
                  <button
                    key={cat}
                    onClick={() => setGalleryFilter(cat)}
                    className={`px-3.5 py-2 rounded transition-all cursor-pointer ${
                      galleryFilter === cat ? 'bg-[#7B1123] text-white shadow-xs' : 'bg-stone-100 text-stone-700 hover:bg-stone-200'
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
                    className="group relative h-64 rounded-xl overflow-hidden cursor-pointer border border-stone-200 shadow-xs bg-[#0B1B3D]"
                  >
                    <img loading="lazy" src={item.url} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#071326] via-[#071326]/30 to-transparent flex flex-col justify-end p-5">
                      <span className="text-[10px] text-white bg-[#7B1123] px-2.5 py-0.5 rounded font-bold uppercase self-start">{item.tag}</span>
                      <p className="text-xs font-serif font-bold text-white mt-1.5">{item.title}</p>
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
        <div className="py-12 px-4 sm:px-6 max-w-7xl mx-auto space-y-10 animate-in fade-in duration-300 text-stone-800">
          <div className="bg-white p-8 sm:p-12 rounded-xl border border-stone-200 shadow-xs space-y-8">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#7B1123] bg-[#7B1123]/10 px-4 py-1.5 rounded border border-[#7B1123]/20">
                School Calendar
              </span>
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#0B1B3D] mt-2 mb-2">Upcoming Events & Gazette</h2>
              <p className="text-stone-600 text-sm leading-relaxed">
                Stay updated with major school conventions, Olympiad dates, and sports championships.
              </p>
            </div>

            <div className="space-y-4">
              {newsAnnouncements.map((evt, i) => (
                <div key={i} className="bg-[#FAF9F6] p-6 rounded-xl border border-stone-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 rounded bg-[#0B1B3D] text-white flex flex-col items-center justify-center shrink-0 font-bold border border-[#152B57]">
                      <span className="text-base font-serif">{evt.date.split(' ')[1]}</span>
                      <span className="text-[10px] text-[#E7C797]">{evt.date.split(' ')[0]}</span>
                    </div>
                    <div>
                      <span className="text-[10px] font-bold text-[#7B1123] uppercase tracking-widest bg-[#7B1123]/10 border border-[#7B1123]/20 px-2.5 py-0.5 rounded">{evt.cat}</span>
                      <h4 className="font-serif font-bold text-base text-[#0B1B3D] mt-1">{evt.title}</h4>
                      <p className="text-xs text-stone-600 mt-0.5">{evt.desc}</p>
                    </div>
                  </div>
                  <button className="bg-[#7B1123] text-white text-xs font-bold px-4 py-2 rounded hover:bg-[#680E1D] self-start sm:self-auto transition-colors cursor-pointer uppercase tracking-wider shadow-2xs">
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
        <div className="py-12 px-4 sm:px-6 max-w-7xl mx-auto space-y-10 animate-in fade-in duration-300 text-stone-800">
          <div className="bg-white p-8 sm:p-12 rounded-xl border border-stone-200 shadow-xs space-y-8">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#7B1123] bg-[#7B1123]/10 px-4 py-1.5 rounded border border-[#7B1123]/20">
                Get in Touch
              </span>
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#0B1B3D] mt-2 mb-2">Campus Location & VIP Admissions</h2>
              <p className="text-stone-600 text-sm leading-relaxed">
                Connect directly with the Senior Admissions Directorate or schedule a personalized campus tour.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              <div className="lg:col-span-5 space-y-4 text-xs text-stone-700">
                <div className="bg-[#FAF9F6] p-5 rounded-xl border border-stone-200 space-y-1">
                  <div className="font-serif font-bold text-sm text-[#0B1B3D] flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-[#7B1123]" /> Flagship 50-Acre Campus
                  </div>
                  <p>Achievers College, Station Road / Birla College Road, Kalyan, Maharashtra, India - 421301</p>
                </div>

                <div className="bg-[#FAF9F6] p-5 rounded-xl border border-stone-200 space-y-1">
                  <div className="font-serif font-bold text-sm text-[#0B1B3D] flex items-center gap-2">
                    <Phone className="w-4 h-4 text-[#7B1123]" /> Admissions Direct Desks
                  </div>
                  <p>Admissions Secretariat: +91 99887 76655 / +91 99887 76656</p>
                  <p>Hostel & Boarding Warden: +91 99887 76660</p>
                </div>

                <div className="bg-[#FAF9F6] p-5 rounded-xl border border-stone-200 space-y-1">
                  <div className="font-serif font-bold text-sm text-[#0B1B3D] flex items-center gap-2">
                    <Mail className="w-4 h-4 text-[#7B1123]" /> Electronic Correspondence
                  </div>
                  <p>admissions.max@brightfuture.edu.in</p>
                  <p>dean.office@brightfuture.edu.in</p>
                </div>

                <a 
                  href="https://wa.me/919988776655?text=Hello%20BrightFuture%20Max,%20I%20wish%20to%20enquire%20about%20VIP%20admissions"
                  target="_blank"
                  rel="noreferrer"
                  className="w-full bg-[#7B1123] hover:bg-[#680E1D] text-white font-bold py-3.5 rounded text-center flex items-center justify-center gap-2 shadow-xs uppercase tracking-wider transition-colors"
                >
                  <MessageCircle className="w-4 h-4" /> 24/7 VIP WhatsApp Counselor
                </a>
              </div>

              {/* Campus Location Map & Coordinates */}
              <div className="lg:col-span-7 bg-[#FAF9F6] p-6 rounded-xl border border-stone-200 space-y-5">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-stone-200">
                  <div>
                    <h4 className="font-serif font-bold text-lg text-[#0B1B3D] flex items-center gap-2">
                      <MapPin className="w-5 h-5 text-[#7B1123]" />
                      Campus Location
                    </h4>
                    <p className="text-xs text-stone-600 mt-0.5">Visit our campus in Kalyan, Maharashtra.</p>
                  </div>
                  <a
                    href="https://www.google.com/maps/search/?api=1&query=Achievers+College+Kalyan+Maharashtra+India"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center gap-1.5 bg-[#0B1B3D] hover:bg-[#152B57] text-[#E7C797] hover:text-white font-bold text-xs px-4 py-2.5 rounded transition-colors shadow-2xs self-start sm:self-auto cursor-pointer"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                    <span>Open in Google Maps</span>
                  </a>
                </div>

                {/* Google Maps Embed with Achievers College, Kalyan */}
                <div className="w-full h-64 sm:h-72 rounded-xl overflow-hidden border border-stone-300 shadow-xs relative bg-stone-100">
                  <iframe 
                    title="Campus Location - Achievers College, Kalyan, Maharashtra"
                    src="https://maps.google.com/maps?width=100%25&height=600&hl=en&q=Achievers%20College,%20Kalyan,%20Maharashtra,%20India&t=&z=15&ie=UTF8&iwloc=B&output=embed"
                    className="w-full h-full border-0"
                    loading="lazy"
                    allowFullScreen
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-stone-700">
                  <div className="bg-white p-3.5 rounded-lg border border-stone-200 flex items-start gap-2.5">
                    <Building className="w-4 h-4 text-[#7B1123] shrink-0 mt-0.5" />
                    <div>
                      <span className="font-serif font-bold text-[#0B1B3D] block">Campus Address:</span>
                      <span className="text-stone-600">Achievers College, Kalyan, Maharashtra, India</span>
                    </div>
                  </div>
                  <div className="bg-white p-3.5 rounded-lg border border-stone-200 flex items-start gap-2.5">
                    <Clock className="w-4 h-4 text-[#7B1123] shrink-0 mt-0.5" />
                    <div>
                      <span className="font-serif font-bold text-[#0B1B3D] block">Campus Visiting Hours:</span>
                      <span className="text-stone-600">Mon - Sat: 8:00 AM - 5:00 PM</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Professional Navy & Burgundy School Footer */}
      <footer className="bg-[#0B1B3D] text-slate-300 py-16 px-4 sm:px-6 border-t border-[#152B57]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 text-xs">
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-white font-serif font-bold text-xl">
              <GraduationCap className="w-7 h-7 text-[#E7C797]" /> BRIGHTFUTURE <span className="text-[#E7C797] font-sans font-extrabold">MAX</span>
            </div>
            <p className="text-slate-300 leading-relaxed">
              An internationally accredited preparatory academy delivering world-class STEM research, Olympic athletics, and character formation.
            </p>
            <div className="text-[11px] text-[#E7C797] font-semibold">
              Affiliated to CBSE, New Delhi • Reg. No. 1130452
            </div>
          </div>

          <div>
            <h4 className="font-serif font-bold text-white uppercase tracking-wider mb-4">Navigation</h4>
            <ul className="space-y-2.5">
              {navItems.map(item => (
                <li key={item.id}>
                  <button onClick={() => handleNav(item.id)} className="hover:text-[#E7C797] transition-colors text-slate-300 cursor-pointer">
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-serif font-bold text-white uppercase tracking-wider mb-4">Academic Departments</h4>
            <ul className="space-y-2 text-slate-300">
              <li>• Early Discovery Center (Nursery-UKG)</li>
              <li>• Primary Experiential Wing (Grades 1-5)</li>
              <li>• Middle School STEM Wing (Grades 6-8)</li>
              <li>• Senior Quantum STEM & AI (PCM/PCB)</li>
              <li>• Global Commerce & FinTech</li>
              <li>• Public Policy, Law & Humanities</li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif font-bold text-white uppercase tracking-wider mb-4">Senior Admissions Desk</h4>
            <p className="text-slate-300 leading-relaxed mb-3">
              Cyber Knowledge City, Express Highway Corridor, Thane West - 400607
            </p>
            <p className="text-white font-bold">Hotline: +91 99887 76655</p>
            <p className="text-slate-300">Email: admissions.max@brightfuture.edu.in</p>
            <button 
              onClick={() => handleNav('admissions')}
              className="mt-4 bg-[#7B1123] hover:bg-[#680E1D] text-white font-bold px-4 py-2.5 rounded w-full text-xs transition-colors uppercase tracking-wider cursor-pointer shadow-xs"
            >
              Apply Online 2026-27
            </button>
          </div>
        </div>

        <div className="max-w-7xl mx-auto border-t border-[#152B57] mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center text-[11px] text-slate-400 gap-2">
          <span>© 2026 BrightFuture Max Global Academy. All Rights Reserved.</span>
          <span>CBSE & International Baccalaureate Candidate • Ranked Top 5 in India</span>
        </div>
      </footer>

    </div>
  );
};
