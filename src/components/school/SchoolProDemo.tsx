import React, { useState } from 'react';
import { DemoItem } from '../../data/demos';
import {
  GraduationCap, Phone, Mail, MapPin, Clock, ArrowRight,
  BookOpen, Award, CheckCircle2, ChevronRight, Image as ImageIcon,
  X, MessageCircle, Send, Check, Star, Users, Calendar, Trophy,
  Sparkles, Compass, Shield, Heart, HelpCircle, ChevronDown, ChevronUp,
  Search, Play, Eye, Flame, Layers, Filter
} from 'lucide-react';

interface SchoolProDemoProps {
  demo: DemoItem;
  isMobile: boolean;
  isTablet: boolean;
}

export const SchoolProDemo: React.FC<SchoolProDemoProps> = ({ isMobile, isTablet }) => {
  const [activeNav, setActiveNav] = useState('home');
  const [lightboxImg, setLightboxImg] = useState<{ url: string; title: string; tag: string } | null>(null);
  const [galleryFilter, setGalleryFilter] = useState('All');
  const [activeStreamTab, setActiveStreamTab] = useState<'science' | 'commerce' | 'arts'>('science');
  const [expandedFaq, setExpandedFaq] = useState<number | null>(0);
  const [enquirySubmitted, setEnquirySubmitted] = useState(false);
  const [tourModalOpen, setTourModalOpen] = useState(false);
  const [tourSubmitted, setTourSubmitted] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const [formData, setFormData] = useState({
    parentName: '',
    studentName: '',
    phone: '',
    email: '',
    grade: 'Grade 11 - Science',
    stream: 'Science (PCM + CS)',
    notes: ''
  });

  const handleNav = (tab: string) => {
    setActiveNav(tab);
    setMobileMenuOpen(false);
  };

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'academics', label: 'Academics' },
    { id: 'campus', label: 'Campus' },
    { id: 'activities', label: 'Activities' },
    { id: 'gallery', label: 'Gallery' },
    { id: 'admissions', label: 'Admissions' },
    { id: 'contact', label: 'Contact' },
  ];

  const galleryItems = [
    { title: 'STEM & Robotics Arena', url: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&w=800&q=80', tag: 'Labs' },
    { title: 'Interactive Smart Lecture Hall', url: 'https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=800&q=80', tag: 'Classrooms' },
    { title: 'Junior Play Wing', url: 'https://images.unsplash.com/photo-1587691592099-24045742c181?auto=format&fit=crop&w=800&q=80', tag: 'Pre-Primary' },
    { title: 'Main Academic Quadrangle', url: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=800&q=80', tag: 'Campus' },
    { title: 'Olympic Size Turf & Track', url: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&w=800&q=80', tag: 'Sports' },
    { title: 'Advanced Chemistry Lab', url: 'https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&w=800&q=80', tag: 'Labs' },
    { title: 'Central Digital Library', url: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=800&q=80', tag: 'Campus' },
    { title: 'Annual Cultural Festival', url: 'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=800&q=80', tag: 'Events' },
    { title: 'Fine Arts & Clay Studio', url: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=800&q=80', tag: 'Activities' },
  ];

  const facultyList = [
    { name: 'Dr. Sunita Sharma', role: 'Principal & Academic Director', exp: '25+ Yrs Exp', degree: 'Ph.D. in Education (Gold Medalist)', img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80', badge: 'Leadership' },
    { name: 'Prof. Rajesh Nair', role: 'Head of Senior Science (Physics)', exp: '18+ Yrs Exp', degree: 'M.Sc., B.Ed. (IIT Bombay Alum)', img: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=400&q=80', badge: 'Science Lead' },
    { name: 'Mrs. Ananya Sengupta', role: 'Head of Commerce & Economics', exp: '15+ Yrs Exp', degree: 'M.Com, M.Phil, UGC-NET', img: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=400&q=80', badge: 'Commerce' },
    { name: 'Mr. David Fernandez', role: 'Director of Athletics & Sports', exp: '14+ Yrs Exp', degree: 'M.P.Ed., NIS Certified Coach', img: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=400&q=80', badge: 'Sports Wing' }
  ];

  const awardsList = [
    { title: 'Ranked #1 STEM & Innovation School', body: 'Conferred by Education World Indian School Rankings 2025-26.', year: '2026', icon: Trophy },
    { title: '100% CBSE Board Pass Merit Award', body: '68% students scored >90% aggregate in Class 10 & 12 Board examinations.', year: '2025', icon: Award },
    { title: 'National Clean & Green Campus Laurel', body: 'Awarded 5-Star Eco-Campus certification for solar energy and zero plastic policy.', year: '2025', icon: Shield },
    { title: 'State Interschool Sports Champions', body: 'Champions in Football, Basketball & Track Athletics across 42 participating schools.', year: '2025', icon: Star },
  ];

  const faqs = [
    { q: 'What is the admission procedure for the session 2026-27?', a: 'Admissions are conducted online and in-person. Fill out the Online Admission Enquiry form, schedule a campus visit/interaction, submit necessary academic documents, and complete fee enrollment.' },
    { q: 'Which academic streams are offered for Class 11 and 12?', a: 'We offer all three streams: Science (PCM / PCB + Computer Science / Physical Education), Commerce (Accountancy, Business Studies, Economics, Applied Math), and Humanities/Arts (Political Science, History, Psychology, Sociology).' },
    { q: 'Does the school provide GPS-tracked bus transportation?', a: 'Yes. We operate a fleet of 28 air-conditioned and GPS-enabled school buses covering all major residential neighborhoods in the district with certified attendants and CCTV monitoring.' },
    { q: 'What are the school operating hours?', a: 'Pre-Primary (Nursery, LKG, UKG): 8:30 AM to 12:30 PM. Grades 1 to 12: 7:50 AM to 2:40 PM. Administrative office is open Monday to Saturday from 8:00 AM to 4:00 PM.' },
    { q: 'What is the student-teacher ratio at BrightFuture Pro?', a: 'We strictly maintain an optimal 1:12 ratio in Pre-Primary and 1:20 in Primary and Secondary classes to guarantee individual attention and tailored academic mentoring.' }
  ];

  const eventsList = [
    { date: '18', month: 'OCT', title: 'Annual Inter-School Science & AI Hackathon', desc: 'Over 30 schools competing in robotics, IoT models, and green tech innovation.', tag: 'Academic' },
    { date: '04', month: 'NOV', title: 'Grand Annual Sports Gala & Athletics Day', desc: 'Track & field events, martial arts displays, and trophy distribution ceremony.', tag: 'Sports' },
    { date: '22', month: 'NOV', title: 'Parent-Teacher Collaborative Conference', desc: 'One-on-one milestone discussions and comprehensive developmental feedback.', tag: 'Parent Forum' },
  ];

  const clubsList = [
    { name: 'Robotics & AI Guild', desc: 'Hands-on Arduino, Lego Mindstorms, and coding projects.', icon: '🤖' },
    { name: 'Model United Nations (MUN)', desc: 'Debating geopolitics, diplomacy, and global leadership.', icon: '🌐' },
    { name: 'Eco & Sustainability Club', desc: 'Organic garden, tree plantation drives, and solar studies.', icon: '🌱' },
    { name: 'Orchestra & Western Music', desc: 'Vocal, guitar, keyboard, and Indian classical fusion.', icon: '🎵' },
    { name: 'Drama & Theatre Society', desc: 'Street plays, annual drama productions, and public speaking.', icon: '🎭' },
    { name: 'Sports Academy', desc: 'Professional football, cricket nets, basketball & swimming.', icon: '🏆' },
  ];

  return (
    <div className="w-full min-h-full bg-slate-50 text-slate-900 overflow-x-hidden font-sans custom-scrollbar">
      
      {/* Lightbox Modal */}
      {lightboxImg && (
        <div className="fixed inset-0 z-50 bg-emerald-950/90 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="relative max-w-4xl w-full bg-slate-900 p-3 rounded-2xl border border-emerald-500/30">
            <button
              onClick={() => setLightboxImg(null)}
              className="absolute -top-12 right-0 text-white hover:text-emerald-400 p-2"
            >
              <X className="w-8 h-8" />
            </button>
            <img src={lightboxImg.url} alt={lightboxImg.title} className="w-full h-auto max-h-[80vh] object-contain rounded-xl" />
            <div className="p-3 text-white flex justify-between items-center text-sm">
              <span className="font-bold text-emerald-300">{lightboxImg.title}</span>
              <span className="text-xs bg-emerald-800 text-emerald-100 px-3 py-1 rounded-full">{lightboxImg.tag}</span>
            </div>
          </div>
        </div>
      )}

      {/* Book Campus Tour Modal */}
      {tourModalOpen && (
        <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-md w-full p-6 sm:p-8 shadow-2xl border border-emerald-100 relative">
            <button 
              onClick={() => setTourModalOpen(false)}
              className="absolute top-5 right-5 text-slate-400 hover:text-slate-700 p-1"
            >
              <X className="w-5 h-5" />
            </button>
            
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center">
                <Compass className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-900">Book a Campus Tour</h3>
                <p className="text-xs text-slate-500">Experience our smart campus in person.</p>
              </div>
            </div>

            {tourSubmitted ? (
              <div className="bg-emerald-50 border border-emerald-200 text-emerald-900 p-5 rounded-2xl text-center space-y-2">
                <CheckCircle2 className="w-10 h-10 mx-auto text-emerald-600" />
                <h4 className="font-bold text-sm">Tour Scheduled!</h4>
                <p className="text-xs text-emerald-700">Our counselor will call you with your appointment pass.</p>
              </div>
            ) : (
              <form onSubmit={(e) => { e.preventDefault(); setTourSubmitted(true); }} className="space-y-3 text-xs">
                <div>
                  <label className="block font-semibold text-slate-700 mb-1">Parent Name</label>
                  <input required placeholder="Your full name" className="w-full bg-slate-50 border border-slate-300 rounded-xl p-2.5" />
                </div>
                <div>
                  <label className="block font-semibold text-slate-700 mb-1">Contact Phone</label>
                  <input required type="tel" placeholder="10-digit mobile" className="w-full bg-slate-50 border border-slate-300 rounded-xl p-2.5" />
                </div>
                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <label className="block font-semibold text-slate-700 mb-1">Preferred Date</label>
                    <input required type="date" className="w-full bg-slate-50 border border-slate-300 rounded-xl p-2" />
                  </div>
                  <div>
                    <label className="block font-semibold text-slate-700 mb-1">Time Slot</label>
                    <select className="w-full bg-slate-50 border border-slate-300 rounded-xl p-2">
                      <option>10:00 AM - 11:30 AM</option>
                      <option>01:30 PM - 03:00 PM</option>
                    </select>
                  </div>
                </div>
                <button type="submit" className="w-full bg-emerald-800 hover:bg-emerald-900 text-white font-bold py-3 rounded-xl shadow-md transition-colors mt-2">
                  Confirm Campus Visit Slot
                </button>
              </form>
            )}
          </div>
        </div>
      )}

      {/* Top Banner Ticker with Emerald & Warm Gold Accent */}
      <div className="bg-[#064E3B] text-emerald-100 text-xs px-4 md:px-8 py-2.5 flex flex-wrap justify-between items-center gap-3 border-b border-emerald-700/60">
        <div className="flex items-center gap-3 flex-wrap">
          <span className="bg-amber-400 text-emerald-950 font-extrabold px-2.5 py-0.5 rounded-full text-[10px] uppercase tracking-wider flex items-center gap-1">
            <Sparkles className="w-3 h-3" /> ADMISSIONS 2026-27
          </span>
          <span className="text-emerald-100 font-medium hidden sm:inline">
            CBSE & STEM Integrated Excellence • Pre-K to Grade 12 • Merit Scholarships Open
          </span>
        </div>

        <div className="flex items-center gap-5 text-xs font-semibold">
          <button 
            onClick={() => setTourModalOpen(true)}
            className="text-amber-300 hover:text-amber-200 underline decoration-amber-400/60 flex items-center gap-1 cursor-pointer"
          >
            <Compass className="w-3.5 h-3.5" /> Book Campus Tour
          </button>
          <span className="flex items-center gap-1.5 text-emerald-100">
            <Phone className="w-3.5 h-3.5 text-amber-400" /> +91 91234 56789
          </span>
        </div>
      </div>

      {/* Modern Emerald & Warm Gold Navigation Header */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-40 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
          <div 
            onClick={() => handleNav('home')}
            className="flex items-center gap-3.5 cursor-pointer group"
          >
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-emerald-700 to-teal-900 text-white flex items-center justify-center shadow-lg shadow-emerald-900/20 group-hover:scale-105 transition-transform">
              <GraduationCap className="w-7 h-7 text-amber-400" />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <h1 className="text-2xl font-black text-emerald-950 tracking-tight leading-none">BRIGHTFUTURE</h1>
                <span className="bg-emerald-100 text-emerald-800 text-[10px] font-black uppercase px-2 py-0.5 rounded-md">PRO</span>
              </div>
              <p className="text-[11px] font-semibold text-emerald-700 tracking-wider uppercase mt-1">International STEM & CBSE Academy</p>
            </div>
          </div>

          {/* Desktop Nav Items */}
          {!isMobile && !isTablet && (
            <nav className="flex items-center gap-1 sm:gap-2">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNav(item.id)}
                  className={`px-3 py-2 rounded-xl text-sm font-bold transition-all ${
                    activeNav === item.id 
                      ? 'bg-emerald-800 text-white shadow-md shadow-emerald-900/20' 
                      : 'text-slate-700 hover:text-emerald-800 hover:bg-emerald-50/80'
                  }`}
                >
                  {item.label}
                </button>
              ))}
              <button
                onClick={() => handleNav('admissions')}
                className="ml-2 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-slate-950 font-black text-xs px-5 py-2.5 rounded-xl shadow-md transition-all uppercase tracking-wider"
              >
                Apply Online
              </button>
            </nav>
          )}

          {/* Mobile menu button */}
          {(isMobile || isTablet) && (
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-xl bg-emerald-50 text-emerald-900 border border-emerald-200"
            >
              <span className="text-xs font-black px-1">MENU</span>
            </button>
          )}
        </div>

        {/* Mobile dropdown */}
        {(isMobile || isTablet) && mobileMenuOpen && (
          <div className="bg-white border-t border-slate-200 px-4 py-4 space-y-1 shadow-2xl">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNav(item.id)}
                className={`w-full text-left px-4 py-3 rounded-xl text-sm font-bold ${
                  activeNav === item.id ? 'bg-emerald-800 text-white' : 'text-slate-700 hover:bg-emerald-50'
                }`}
              >
                {item.label}
              </button>
            ))}
            <div className="pt-2 grid grid-cols-2 gap-2">
              <button
                onClick={() => { setTourModalOpen(true); setMobileMenuOpen(false); }}
                className="bg-emerald-100 text-emerald-900 font-bold text-xs py-3 rounded-xl text-center"
              >
                Book Tour
              </button>
              <button
                onClick={() => handleNav('admissions')}
                className="bg-amber-500 text-slate-950 font-black text-xs py-3 rounded-xl text-center"
              >
                Apply Online
              </button>
            </div>
          </div>
        )}
      </header>

      {/* =========================================================================
          VIEW: PRO HOME
      ========================================================================= */}
      {activeNav === 'home' && (
        <div className="space-y-16 pb-20">
          
          {/* 1. Asymmetric Modern Hero */}
          <section className="relative bg-gradient-to-br from-emerald-950 via-emerald-900 to-teal-950 text-white py-16 sm:py-24 px-4 sm:px-6 overflow-hidden">
            {/* Ambient pattern */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-3xl pointer-events-none"></div>
            
            <div className="relative max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-7 space-y-6">
                <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-1.5 rounded-full text-xs font-bold border border-white/20 text-emerald-200">
                  <span className="w-2 h-2 rounded-full bg-amber-400 animate-ping"></span>
                  <span className="text-amber-300 font-black">Ranked #1</span> Modern STEM & Holistic School
                </div>

                <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.1] text-white">
                  Empowering <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-amber-400 to-yellow-200">Future Leaders</span> Through Modern Innovation.
                </h2>

                <p className="text-emerald-100 text-sm sm:text-base leading-relaxed max-w-2xl font-normal">
                  BrightFuture Pro combines CBSE curriculum rigor with AI robotics, interdisciplinary sports academies, Cambridge English certification, and student-first mentoring on a lush 25-acre high-tech campus.
                </p>

                <div className="flex flex-wrap items-center gap-4 pt-2">
                  <button 
                    onClick={() => handleNav('admissions')}
                    className="bg-amber-400 hover:bg-amber-300 text-emerald-950 font-black px-7 py-4 rounded-2xl shadow-xl shadow-amber-400/20 text-sm transition-all flex items-center gap-2 group"
                  >
                    <span>Apply for 2026-27</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                  <button 
                    onClick={() => setTourModalOpen(true)}
                    className="bg-white/10 hover:bg-white/20 text-white border border-white/30 font-bold px-6 py-4 rounded-2xl backdrop-blur-md text-sm transition-all flex items-center gap-2"
                  >
                    <Compass className="w-4 h-4 text-amber-300" /> Book Campus Tour
                  </button>
                  <a
                    href="https://wa.me/919123456789?text=Hello%20BrightFuture%20Pro,%20I%20am%20interested%20in%20Admissions"
                    target="_blank"
                    rel="noreferrer"
                    className="bg-emerald-800/80 hover:bg-emerald-700 text-white font-bold px-5 py-4 rounded-2xl border border-emerald-600/50 text-sm flex items-center gap-2"
                  >
                    <MessageCircle className="w-4 h-4 text-emerald-300" /> WhatsApp
                  </a>
                </div>

                {/* Micro Badges */}
                <div className="pt-4 flex flex-wrap gap-4 text-xs font-semibold text-emerald-200">
                  <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-amber-400" /> 100% Board Success</span>
                  <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-amber-400" /> 1:12 Faculty Ratio</span>
                  <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-amber-400" /> AC Bus Fleet with GPS</span>
                </div>
              </div>

              {/* Visual Card Grid */}
              <div className="lg:col-span-5 relative">
                <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl border-4 border-white/20 aspect-[4/3]">
                  <img 
                    src="https://images.unsplash.com/photo-1541829070764-84a7d30dd3f3?auto=format&fit=crop&w=1000&q=80" 
                    alt="School campus life" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/80 via-transparent to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4 bg-white/10 backdrop-blur-md p-4 rounded-2xl border border-white/20 text-white">
                    <div className="flex justify-between items-center">
                      <div>
                        <div className="text-[10px] text-amber-300 uppercase font-black tracking-wider">Campus Spotlight</div>
                        <div className="font-bold text-sm">25-Acre Smart Learning Campus</div>
                      </div>
                      <button onClick={() => handleNav('campus')} className="bg-amber-400 text-slate-950 px-3 py-1.5 rounded-xl text-xs font-bold">
                        Tour Campus
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* 2. School Statistics Banner */}
          <section className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-xl border border-emerald-100 grid grid-cols-2 md:grid-cols-5 gap-6 text-center divide-y md:divide-y-0 md:divide-x divide-slate-100">
              <div className="p-2">
                <div className="text-3xl sm:text-4xl font-black text-emerald-900">25+</div>
                <div className="text-xs font-bold text-slate-500 uppercase tracking-wider mt-1">Years Educational Legacy</div>
              </div>
              <div className="p-2">
                <div className="text-3xl sm:text-4xl font-black text-emerald-900">2,800+</div>
                <div className="text-xs font-bold text-slate-500 uppercase tracking-wider mt-1">Happy Students</div>
              </div>
              <div className="p-2">
                <div className="text-3xl sm:text-4xl font-black text-emerald-900">100%</div>
                <div className="text-xs font-bold text-slate-500 uppercase tracking-wider mt-1">CBSE Board Pass Rate</div>
              </div>
              <div className="p-2">
                <div className="text-3xl sm:text-4xl font-black text-emerald-900">45+</div>
                <div className="text-xs font-bold text-slate-500 uppercase tracking-wider mt-1">State Sports Laurels</div>
              </div>
              <div className="p-2 col-span-2 md:col-span-1">
                <div className="text-3xl sm:text-4xl font-black text-emerald-900">1:12</div>
                <div className="text-xs font-bold text-slate-500 uppercase tracking-wider mt-1">Mentorship Ratio</div>
              </div>
            </div>
          </section>

          {/* 3. About School & Pedagogical Pillars */}
          <section className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-5">
                <div className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-widest text-emerald-800 bg-emerald-50 px-3.5 py-1.5 rounded-full">
                  <Sparkles className="w-3.5 h-3.5 text-amber-500" /> Distinctive Educational Philosophy
                </div>
                <h3 className="text-3xl sm:text-4xl font-black text-slate-900 leading-tight">
                  Nurturing Intellect, Ethics, and Physical Vitality.
                </h3>
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                  At BrightFuture Pro, learning extends beyond textbooks into experiential research, interactive STEAM laboratories, performing arts, and competitive sports. We empower each student with intellectual grit, emotional equilibrium, and a compassionate world view.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-xs space-y-1">
                    <div className="font-bold text-sm text-emerald-900 flex items-center gap-2">
                      <BookOpen className="w-4 h-4 text-amber-500" /> STEM & Robotics
                    </div>
                    <p className="text-xs text-slate-500">Structured coding, AI ethics, 3D printing & scientific inquiry.</p>
                  </div>
                  <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-xs space-y-1">
                    <div className="font-bold text-sm text-emerald-900 flex items-center gap-2">
                      <Award className="w-4 h-4 text-amber-500" /> Career & Board Mentorship
                    </div>
                    <p className="text-xs text-slate-500">Specialized JEE, NEET, CUET & NDA integrated batches.</p>
                  </div>
                </div>

                <div className="pt-2">
                  <button onClick={() => handleNav('about')} className="bg-emerald-800 hover:bg-emerald-900 text-white font-bold px-6 py-3 rounded-xl text-xs transition-colors">
                    Explore Full About & Governance
                  </button>
                </div>
              </div>

              {/* Right: Principal Spotlight with Gold Card */}
              <div className="bg-gradient-to-br from-emerald-900 to-teal-950 text-white p-8 rounded-3xl shadow-2xl relative overflow-hidden space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-20 h-20 rounded-2xl overflow-hidden border-2 border-amber-400 shrink-0">
                    <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=300&q=80" alt="Principal" className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <h4 className="text-lg font-black text-white">Dr. Sunita Sharma</h4>
                    <p className="text-xs text-amber-300 font-semibold">Principal & Academic Director</p>
                    <p className="text-[11px] text-emerald-200">Ph.D. in Education • 25+ Yrs Leadership</p>
                  </div>
                </div>

                <blockquote className="text-xs text-emerald-100 italic leading-relaxed bg-white/10 p-4 rounded-2xl border border-white/10">
                  &quot;Every child carries exceptional talent. Our responsibility as educators is to cultivate a stimulating ecosystem where curiosity thrives, character is forged, and ambitious dreams turn into reality.&quot;
                </blockquote>

                <div className="flex justify-between items-center text-xs text-amber-300 font-bold border-t border-emerald-800 pt-4">
                  <span>CBSE Affiliation: 1130452</span>
                  <span>Ranked Top 10 in State</span>
                </div>
              </div>
            </div>
          </section>

          {/* 4. Tabbed Academic Programs & Senior Streams */}
          <section className="bg-white py-16 px-4 sm:px-6 border-y border-slate-200">
            <div className="max-w-7xl mx-auto space-y-10">
              <div className="text-center max-w-2xl mx-auto space-y-2">
                <span className="text-xs font-black uppercase tracking-widest text-emerald-800 bg-emerald-50 px-3.5 py-1 rounded-full">
                  Academic Framework
                </span>
                <h3 className="text-3xl font-black text-slate-900">Comprehensive Curricula & Senior Streams</h3>
                <p className="text-slate-500 text-xs sm:text-sm">Structured across developmental stages with distinct specialized senior streams.</p>
              </div>

              {/* Stream Switcher */}
              <div className="flex justify-center">
                <div className="bg-slate-100 p-1.5 rounded-2xl flex gap-1 border border-slate-200 max-w-md w-full">
                  <button 
                    onClick={() => setActiveStreamTab('science')}
                    className={`flex-1 py-2.5 text-xs font-bold rounded-xl transition-all ${
                      activeStreamTab === 'science' ? 'bg-emerald-800 text-white shadow-md' : 'text-slate-700 hover:bg-slate-200'
                    }`}
                  >
                    Science Stream (PCM / PCB)
                  </button>
                  <button 
                    onClick={() => setActiveStreamTab('commerce')}
                    className={`flex-1 py-2.5 text-xs font-bold rounded-xl transition-all ${
                      activeStreamTab === 'commerce' ? 'bg-emerald-800 text-white shadow-md' : 'text-slate-700 hover:bg-slate-200'
                    }`}
                  >
                    Commerce & FinTech
                  </button>
                  <button 
                    onClick={() => setActiveStreamTab('arts')}
                    className={`flex-1 py-2.5 text-xs font-bold rounded-xl transition-all ${
                      activeStreamTab === 'arts' ? 'bg-emerald-800 text-white shadow-md' : 'text-slate-700 hover:bg-slate-200'
                    }`}
                  >
                    Humanities & Arts
                  </button>
                </div>
              </div>

              {/* Stream Card Display */}
              <div className="bg-slate-50 p-6 sm:p-8 rounded-3xl border border-slate-200 max-w-4xl mx-auto">
                {activeStreamTab === 'science' && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
                    <div className="space-y-3">
                      <span className="text-[10px] font-black uppercase tracking-wider bg-emerald-100 text-emerald-900 px-3 py-1 rounded-full">Engineering & Medical Wing</span>
                      <h4 className="text-xl font-bold text-slate-900">Senior Science (PCM / PCB + Computer Science)</h4>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        Rigorous preparation with dedicated daily practicals, JEE / NEET foundation modules, Olympiad coaching, and high-tech lab experiments.
                      </p>
                      <div className="space-y-1.5 text-xs text-slate-700 font-medium pt-1">
                        <div className="flex items-center gap-2">✓ Physics, Chemistry, Mathematics & Biology</div>
                        <div className="flex items-center gap-2">✓ Python Programming & Artificial Intelligence</div>
                        <div className="flex items-center gap-2">✓ Weekly Mock Testing & Performance Analytics</div>
                      </div>
                    </div>
                    <div className="h-52 rounded-2xl overflow-hidden border border-slate-200">
                      <img src="https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&w=600&q=80" alt="Science Lab" className="w-full h-full object-cover" />
                    </div>
                  </div>
                )}

                {activeStreamTab === 'commerce' && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
                    <div className="space-y-3">
                      <span className="text-[10px] font-black uppercase tracking-wider bg-amber-100 text-amber-900 px-3 py-1 rounded-full">Business & Finance Wing</span>
                      <h4 className="text-xl font-bold text-slate-900">Commerce (Accountancy, Business & Applied Math)</h4>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        Developing future entrepreneurs, chartered accountants, and finance professionals through real-world business case studies and CA-Foundation coaching.
                      </p>
                      <div className="space-y-1.5 text-xs text-slate-700 font-medium pt-1">
                        <div className="flex items-center gap-2">✓ Accountancy, Business Studies & Economics</div>
                        <div className="flex items-center gap-2">✓ Applied Mathematics & Entrepreneurship</div>
                        <div className="flex items-center gap-2">✓ Stock Market Simulation & Case Study Competitions</div>
                      </div>
                    </div>
                    <div className="h-52 rounded-2xl overflow-hidden border border-slate-200">
                      <img src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=600&q=80" alt="Commerce Class" className="w-full h-full object-cover" />
                    </div>
                  </div>
                )}

                {activeStreamTab === 'arts' && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
                    <div className="space-y-3">
                      <span className="text-[10px] font-black uppercase tracking-wider bg-teal-100 text-teal-900 px-3 py-1 rounded-full">Civil Services & Media Wing</span>
                      <h4 className="text-xl font-bold text-slate-900">Humanities & Liberal Arts</h4>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        Fostering critical thought, public policy awareness, journalism, psychology, and preparation for Law (CLAT) and UPSC entrance foundations.
                      </p>
                      <div className="space-y-1.5 text-xs text-slate-700 font-medium pt-1">
                        <div className="flex items-center gap-2">✓ Political Science, History & Sociology</div>
                        <div className="flex items-center gap-2">✓ Applied Psychology & Mass Communication</div>
                        <div className="flex items-center gap-2">✓ Model UN, Parliamentary Debates & Research Papers</div>
                      </div>
                    </div>
                    <div className="h-52 rounded-2xl overflow-hidden border border-slate-200">
                      <img src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=600&q=80" alt="Humanities Class" className="w-full h-full object-cover" />
                    </div>
                  </div>
                )}
              </div>
            </div>
          </section>

          {/* 5. Campus Facilities Grid with Photos */}
          <section className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
              <span className="text-xs font-black uppercase tracking-widest text-emerald-800 bg-emerald-50 px-3.5 py-1 rounded-full">
                Infrastructure
              </span>
              <h3 className="text-3xl font-black text-slate-900">State-of-the-Art Campus Facilities</h3>
              <p className="text-slate-500 text-xs sm:text-sm">Built to inspire, protect, and empower every student.</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { title: 'Interactive Smart Touch Classrooms', desc: 'Audio-visual smart touchscreens, digital lesson repositories, and climate control.', img: 'https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=600&q=80' },
                { title: 'Robotics, IoT & AI Labs', desc: 'Hands-on training with Arduino kits, microcontrollers, and Python coding workstations.', img: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&w=600&q=80' },
                { title: 'Composite Physics & Chemistry Labs', desc: 'Advanced laboratory stations meeting national standards with complete safety equipment.', img: 'https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&w=600&q=80' },
                { title: 'Central Knowledge & E-Library', desc: '20,000+ physical volumes, international research periodicals, and Kindle reading pods.', img: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=600&q=80' },
                { title: 'Multi-Sport Turf & Athletics Stadium', desc: 'Floodlit football pitch, synthetic basketball courts, cricket nets, and 400m track.', img: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&w=600&q=80' },
                { title: 'GPS Safe Fleet with Mobile App', desc: '28 air-conditioned buses with real-time GPS route tracking and trained lady attendants.', img: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=600&q=80' }
              ].map((item, i) => (
                <div key={i} className="bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-xl transition-all group">
                  <div className="h-44 overflow-hidden relative">
                    <img src={item.img} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent"></div>
                  </div>
                  <div className="p-5">
                    <h4 className="font-bold text-base text-slate-900 mb-1 group-hover:text-emerald-800 transition-colors">{item.title}</h4>
                    <p className="text-xs text-slate-600 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* 6. Sports & Activities & Clubs */}
          <section className="bg-emerald-950 text-white py-16 px-4 sm:px-6">
            <div className="max-w-7xl mx-auto space-y-12">
              <div className="text-center max-w-2xl mx-auto space-y-2">
                <span className="text-xs font-black uppercase tracking-widest text-amber-400 bg-white/10 px-3.5 py-1 rounded-full border border-white/10">
                  Beyond Academics
                </span>
                <h3 className="text-3xl font-black text-white">Co-Curricular Clubs & Sports Academy</h3>
                <p className="text-emerald-200 text-xs sm:text-sm">Developing teamwork, creative expression, and physical vigor.</p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {clubsList.map((club, i) => (
                  <div key={i} className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/10 hover:bg-white/15 transition-all">
                    <div className="text-3xl mb-3">{club.icon}</div>
                    <h4 className="text-lg font-bold text-white mb-1">{club.name}</h4>
                    <p className="text-xs text-emerald-200 leading-relaxed">{club.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* 7. Achievements & Awards */}
          <section className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="bg-gradient-to-br from-amber-500 to-amber-600 text-slate-950 rounded-3xl p-8 sm:p-10 shadow-2xl space-y-8">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <div>
                  <span className="text-xs font-black uppercase tracking-widest bg-slate-950 text-amber-400 px-3 py-1 rounded-full">
                    Recognition & Laurels
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-black mt-2">Our Proud School Achievements</h3>
                </div>
                <div className="text-xs font-bold text-slate-900 bg-white/40 px-4 py-2 rounded-xl">
                  National & District Honors 2025-26
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {awardsList.map((award, i) => (
                  <div key={i} className="bg-white/90 p-5 rounded-2xl border border-amber-300 shadow-sm space-y-2">
                    <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center font-bold">
                      <award.icon className="w-5 h-5" />
                    </div>
                    <div className="text-[10px] font-black text-amber-800 uppercase">{award.year}</div>
                    <h4 className="font-bold text-sm text-slate-900 leading-snug">{award.title}</h4>
                    <p className="text-xs text-slate-600">{award.body}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* 8. Faculty Preview */}
          <section className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
              <span className="text-xs font-black uppercase tracking-widest text-emerald-800 bg-emerald-50 px-3.5 py-1 rounded-full">
                Mentorship
              </span>
              <h3 className="text-3xl font-black text-slate-900">Distinguished Faculty & Leadership</h3>
              <p className="text-slate-500 text-xs sm:text-sm">Passionate educators with proven track records in guiding students to board and national ranks.</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {facultyList.map((fac, i) => (
                <div key={i} className="bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-lg transition-all text-center p-5 space-y-3">
                  <div className="w-24 h-24 rounded-full overflow-hidden mx-auto border-2 border-emerald-500 shadow-md">
                    <img src={fac.img} alt={fac.name} className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <span className="text-[10px] bg-emerald-100 text-emerald-900 font-bold px-2 py-0.5 rounded-full">{fac.badge}</span>
                    <h4 className="font-bold text-sm text-slate-900 mt-1">{fac.name}</h4>
                    <p className="text-xs text-emerald-700 font-semibold">{fac.role}</p>
                    <p className="text-[11px] text-slate-500 mt-1">{fac.degree} • {fac.exp}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* 9. Advanced Gallery Preview */}
          <section className="bg-slate-100 py-16 px-4 sm:px-6">
            <div className="max-w-7xl mx-auto space-y-8">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <div>
                  <span className="text-xs font-black uppercase tracking-widest text-emerald-800">Visual Showcase</span>
                  <h3 className="text-2xl sm:text-3xl font-black text-slate-900">Life at BrightFuture Pro</h3>
                </div>
                
                {/* Filter buttons */}
                <div className="flex flex-wrap gap-2 text-xs font-bold">
                  {['All', 'Labs', 'Classrooms', 'Sports', 'Events'].map(cat => (
                    <button
                      key={cat}
                      onClick={() => setGalleryFilter(cat)}
                      className={`px-3 py-1.5 rounded-xl transition-all ${
                        galleryFilter === cat ? 'bg-emerald-800 text-white shadow-xs' : 'bg-white text-slate-700 hover:bg-slate-200'
                      }`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {galleryItems
                  .filter(item => galleryFilter === 'All' || item.tag === galleryFilter)
                  .slice(0, 8)
                  .map((item, i) => (
                    <div 
                      key={i}
                      onClick={() => setLightboxImg(item)}
                      className="group relative h-48 rounded-2xl overflow-hidden cursor-pointer shadow-sm border border-slate-200"
                    >
                      <img src={item.url} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent flex flex-col justify-end p-3 text-white">
                        <span className="text-[10px] text-amber-300 font-bold uppercase">{item.tag}</span>
                        <p className="text-xs font-bold leading-tight">{item.title}</p>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </section>

          {/* 10. Parent & Student Testimonials */}
          <section className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
              <span className="text-xs font-black uppercase tracking-widest text-emerald-800 bg-emerald-50 px-3.5 py-1 rounded-full">
                Community Voices
              </span>
              <h3 className="text-3xl font-black text-slate-900">What Parents & Students Say</h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { name: 'Dr. Alok Verma', role: 'Parent (Grade 11 - Science)', text: 'The integrated coaching for JEE alongside CBSE boards helped my son stay focused without needing outside tuition. Outstanding faculty support!' },
                { name: 'Meera Iyer', role: 'Parent (Grade 4)', text: 'The balance of experiential learning, robotics, and sports is truly impressive. My daughter is excited to go to school every single morning.' },
                { name: 'Rohan Deshmukh', role: 'Alumni (Class 12 - 98.4%)', text: 'BrightFuture Pro shaped my analytical foundation and leadership skills through Model UN and science exhibitions. Currently studying at IIT Bombay.' }
              ].map((test, i) => (
                <div key={i} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4 flex flex-col justify-between">
                  <div className="space-y-3">
                    <div className="flex text-amber-400">
                      {[1,2,3,4,5].map(s => <Star key={s} className="w-4 h-4 fill-current" />)}
                    </div>
                    <p className="text-xs text-slate-600 italic leading-relaxed">&quot;{test.text}&quot;</p>
                  </div>
                  <div className="border-t border-slate-100 pt-3">
                    <div className="font-bold text-sm text-slate-900">{test.name}</div>
                    <div className="text-[11px] text-emerald-700 font-semibold">{test.role}</div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* 11. Admission 4-Step Process & CTA Form */}
          <section id="pro-admissions-section" className="bg-gradient-to-br from-emerald-950 to-teal-950 text-white py-16 px-4 sm:px-6">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-6 space-y-6">
                <span className="bg-amber-400 text-slate-950 font-black px-3.5 py-1 rounded-full text-xs uppercase">
                  Admissions Roadmap 2026-27
                </span>
                <h3 className="text-3xl sm:text-4xl font-black">4 Simple Steps to Join BrightFuture Pro</h3>
                
                <div className="space-y-4">
                  {[
                    { step: '01', title: 'Submit Online Enquiry', desc: 'Fill out student academic details and select target grade & stream.' },
                    { step: '02', title: 'Campus Visit & Aptitude Chat', desc: 'Visit our high-tech campus, interact with faculty, and complete a diagnostic assessment.' },
                    { step: '03', title: 'Document Verification', desc: 'Submit previous report card, transfer certificate, birth certificate & photographs.' },
                    { step: '04', title: 'Enrollment & Welcome Kit', desc: 'Confirm admission, receive the school uniform kit, digital ERP portal credentials, and syllabus booklist.' }
                  ].map((s, i) => (
                    <div key={i} className="flex gap-4 items-start bg-white/5 p-4 rounded-2xl border border-white/10">
                      <span className="text-lg font-black text-amber-300 shrink-0">{s.step}</span>
                      <div>
                        <h4 className="font-bold text-sm text-white">{s.title}</h4>
                        <p className="text-xs text-emerald-200 mt-0.5">{s.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Form Card */}
              <div className="lg:col-span-6 bg-white text-slate-900 p-6 sm:p-8 rounded-3xl shadow-2xl border-t-4 border-amber-400">
                <h4 className="text-xl font-bold text-emerald-950 mb-1">Online Admission Application</h4>
                <p className="text-xs text-slate-500 mb-5">Admissions Open from Nursery to Grade 12 (All Streams).</p>

                {enquirySubmitted ? (
                  <div className="bg-emerald-50 border border-emerald-200 text-emerald-900 p-6 rounded-2xl text-center space-y-3">
                    <CheckCircle2 className="w-12 h-12 mx-auto text-emerald-600" />
                    <h5 className="font-bold text-base">Application Submitted!</h5>
                    <p className="text-xs text-emerald-700">Thank you for choosing BrightFuture Pro. An admissions counselor will contact you within 24 hours.</p>
                  </div>
                ) : (
                  <form onSubmit={(e) => { e.preventDefault(); setEnquirySubmitted(true); }} className="space-y-3 text-xs">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <label className="block font-semibold text-slate-700 mb-1">Parent / Guardian Name *</label>
                        <input required placeholder="Parent Name" className="w-full bg-slate-50 border border-slate-300 rounded-xl p-2.5" />
                      </div>
                      <div>
                        <label className="block font-semibold text-slate-700 mb-1">Student Full Name *</label>
                        <input required placeholder="Student Name" className="w-full bg-slate-50 border border-slate-300 rounded-xl p-2.5" />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <label className="block font-semibold text-slate-700 mb-1">Phone / WhatsApp Number *</label>
                        <input required type="tel" placeholder="10-digit mobile" className="w-full bg-slate-50 border border-slate-300 rounded-xl p-2.5" />
                      </div>
                      <div>
                        <label className="block font-semibold text-slate-700 mb-1">Email Address</label>
                        <input type="email" placeholder="parent@example.com" className="w-full bg-slate-50 border border-slate-300 rounded-xl p-2.5" />
                      </div>
                    </div>

                    <div>
                      <label className="block font-semibold text-slate-700 mb-1">Target Class / Stream *</label>
                      <select className="w-full bg-slate-50 border border-slate-300 rounded-xl p-2.5 font-medium">
                        <option>Pre-Primary (Nursery, LKG, UKG)</option>
                        <option>Primary School (Grade 1 - 5)</option>
                        <option>Middle School (Grade 6 - 8)</option>
                        <option>Secondary (Grade 9 - 10)</option>
                        <option>Grade 11 - Science (PCM / PCB + CS)</option>
                        <option>Grade 11 - Commerce (Accounts & Applied Math)</option>
                        <option>Grade 11 - Humanities & Arts</option>
                        <option>Grade 12 (Board Transfer)</option>
                      </select>
                    </div>

                    <button type="submit" className="w-full bg-emerald-800 hover:bg-emerald-900 text-white font-bold py-3.5 rounded-xl shadow-lg transition-colors text-xs flex items-center justify-center gap-2 mt-2">
                      <Send className="w-4 h-4" /> Submit Admission Application
                    </button>
                  </form>
                )}
              </div>
            </div>
          </section>

          {/* 12. Interactive FAQ Section */}
          <section className="max-w-4xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-8 space-y-2">
              <span className="text-xs font-black uppercase tracking-widest text-emerald-800 bg-emerald-50 px-3 py-1 rounded-full">
                Help & Answers
              </span>
              <h3 className="text-2xl sm:text-3xl font-black text-slate-900">Frequently Asked Questions</h3>
            </div>

            <div className="space-y-3">
              {faqs.map((faq, idx) => (
                <div key={idx} className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs">
                  <button
                    onClick={() => setExpandedFaq(expandedFaq === idx ? null : idx)}
                    className="w-full text-left p-5 font-bold text-sm text-slate-900 flex justify-between items-center gap-4 hover:bg-slate-50 transition-colors"
                  >
                    <span>{faq.q}</span>
                    {expandedFaq === idx ? <ChevronUp className="w-4 h-4 text-emerald-700 shrink-0" /> : <ChevronDown className="w-4 h-4 text-slate-400 shrink-0" />}
                  </button>
                  {expandedFaq === idx && (
                    <div className="px-5 pb-5 text-xs text-slate-600 leading-relaxed border-t border-slate-100 pt-3">
                      {faq.a}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>
        </div>
      )}

      {/* =========================================================================
          VIEW: ABOUT (Dedicated Pro View)
      ========================================================================= */}
      {activeNav === 'about' && (
        <div className="py-10 px-4 sm:px-6 max-w-7xl mx-auto space-y-8 animate-in fade-in duration-300">
          <div className="bg-white p-6 sm:p-10 rounded-3xl border border-slate-200 shadow-sm space-y-6">
            <div>
              <span className="text-xs font-black uppercase tracking-widest text-emerald-800 bg-emerald-50 px-3.5 py-1 rounded-full">Our Heritage</span>
              <h2 className="text-3xl font-black text-slate-900 mt-2 mb-3">About BrightFuture Pro STEM Academy</h2>
              <p className="text-slate-600 text-sm leading-relaxed">
                BrightFuture Pro is a premier CBSE-affiliated co-educational institution pioneering 21st-century education. Integrating robotics, computational thinking, Cambridge English communicative frameworks, and competitive exam readiness, we equip students to excel on global stages.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
              <div className="bg-emerald-50 p-6 rounded-2xl border border-emerald-100 space-y-2">
                <div className="w-10 h-10 rounded-xl bg-emerald-800 text-white flex items-center justify-center font-bold">
                  <Compass className="w-5 h-5" />
                </div>
                <h4 className="font-bold text-base text-emerald-950">Our Vision</h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  To be an internationally respected center of excellence nurturing visionary leaders endowed with deep intellectual curiosity, moral fortitude, and compassionate global citizenship.
                </p>
              </div>

              <div className="bg-amber-50 p-6 rounded-2xl border border-amber-100 space-y-2">
                <div className="w-10 h-10 rounded-xl bg-amber-600 text-white flex items-center justify-center font-bold">
                  <Shield className="w-5 h-5" />
                </div>
                <h4 className="font-bold text-base text-amber-950">Our Mission</h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  To provide a dynamic, student-centric pedagogical environment driven by innovative STEAM inquiry, world-class athletic training, and timeless moral values.
                </p>
              </div>

              <div className="bg-teal-50 p-6 rounded-2xl border border-teal-100 space-y-2">
                <div className="w-10 h-10 rounded-xl bg-teal-800 text-white flex items-center justify-center font-bold">
                  <Award className="w-5 h-5" />
                </div>
                <h4 className="font-bold text-base text-teal-950">Accreditation</h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Affiliated with the Central Board of Secondary Education (CBSE Reg. No. 1130452) with 5-Star Green Campus & ISO 9001:2015 Educational Quality Certifications.
                </p>
              </div>
            </div>

            {/* Leadership Section */}
            <div className="border-t border-slate-200 pt-6 space-y-6">
              <h3 className="text-xl font-bold text-slate-900">Academic Leadership & Advisory Council</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {facultyList.map((fac, i) => (
                  <div key={i} className="bg-slate-50 p-5 rounded-2xl border border-slate-200 text-center space-y-3">
                    <img src={fac.img} alt={fac.name} className="w-20 h-20 rounded-full mx-auto object-cover border-2 border-emerald-600 shadow-sm" />
                    <div>
                      <h5 className="font-bold text-sm text-slate-900">{fac.name}</h5>
                      <p className="text-xs text-emerald-800 font-semibold">{fac.role}</p>
                      <p className="text-[11px] text-slate-500 mt-1">{fac.degree}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* =========================================================================
          VIEW: ACADEMICS (Detailed Streams)
      ========================================================================= */}
      {activeNav === 'academics' && (
        <div className="py-10 px-4 sm:px-6 max-w-7xl mx-auto space-y-8 animate-in fade-in duration-300">
          <div className="bg-white p-6 sm:p-10 rounded-3xl border border-slate-200 shadow-sm space-y-8">
            <div>
              <span className="text-xs font-black uppercase tracking-widest text-emerald-800 bg-emerald-50 px-3.5 py-1 rounded-full">Curriculum Overview</span>
              <h2 className="text-3xl font-black text-slate-900 mt-2 mb-2">Academics & Department Streams</h2>
              <p className="text-slate-600 text-sm leading-relaxed">
                Offering an unbroken, progressive continuum from Early Childhood (Nursery) to Senior High School Graduation (Grade 12).
              </p>
            </div>

            {/* All Streams Breakdown */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 space-y-4">
                <div className="bg-emerald-800 text-white text-xs font-bold px-3 py-1 rounded-full inline-block">Science Wing</div>
                <h4 className="text-lg font-bold text-slate-900">Physics, Chem, Math & Bio (PCM / PCB)</h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Specialized for engineering (JEE Main/Adv), medicine (NEET UG), biotechnology, data analytics, and astrophysics.
                </p>
                <div className="text-xs text-slate-700 font-medium space-y-1 bg-white p-3 rounded-xl border border-slate-200">
                  <div>• Physics & Chemistry with Daily Practicals</div>
                  <div>• Advanced Mathematics / Biology</div>
                  <div>• Computer Science (Python/AI)</div>
                  <div>• English Core & Physical Education</div>
                </div>
              </div>

              <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 space-y-4">
                <div className="bg-amber-600 text-white text-xs font-bold px-3 py-1 rounded-full inline-block">Commerce Wing</div>
                <h4 className="text-lg font-bold text-slate-900">Business, Accounts & FinTech</h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Nurturing financial analysts, chartered accountants, management consultants, corporate lawyers, and startup founders.
                </p>
                <div className="text-xs text-slate-700 font-medium space-y-1 bg-white p-3 rounded-xl border border-slate-200">
                  <div>• Financial Accounting & Auditing</div>
                  <div>• Business Studies & Macroeconomics</div>
                  <div>• Applied Mathematics & Statistics</div>
                  <div>• CA-Foundation & CUET Test Preparation</div>
                </div>
              </div>

              <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 space-y-4">
                <div className="bg-teal-800 text-white text-xs font-bold px-3 py-1 rounded-full inline-block">Humanities Wing</div>
                <h4 className="text-lg font-bold text-slate-900">Liberal Arts & Social Sciences</h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Fostering critical thought, public policy, civil services foundation (UPSC), law (CLAT), psychology, and journalism.
                </p>
                <div className="text-xs text-slate-700 font-medium space-y-1 bg-white p-3 rounded-xl border border-slate-200">
                  <div>• Political Science & International Relations</div>
                  <div>• History & Sociology</div>
                  <div>• Applied Psychology & Media Studies</div>
                  <div>• National Debate & Model UN Society</div>
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
        <div className="py-10 px-4 sm:px-6 max-w-7xl mx-auto space-y-8 animate-in fade-in duration-300">
          <div className="bg-white p-6 sm:p-10 rounded-3xl border border-slate-200 shadow-sm space-y-8">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              <div>
                <span className="text-xs font-black uppercase tracking-widest text-emerald-800 bg-emerald-50 px-3.5 py-1 rounded-full">Infrastructure</span>
                <h2 className="text-3xl font-black text-slate-900 mt-2 mb-1">Our 25-Acre High-Tech Campus</h2>
                <p className="text-slate-600 text-sm">Tour the laboratories, classrooms, library, and sporting arenas.</p>
              </div>
              <button 
                onClick={() => setTourModalOpen(true)}
                className="bg-emerald-800 text-white font-bold text-xs px-5 py-3 rounded-xl shadow-md flex items-center gap-2"
              >
                <Compass className="w-4 h-4 text-amber-300" /> Book an In-Person Tour
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {galleryItems.map((item, i) => (
                <div key={i} onClick={() => setLightboxImg(item)} className="rounded-2xl overflow-hidden border border-slate-200 bg-slate-50 cursor-pointer group shadow-xs">
                  <div className="h-48 overflow-hidden relative">
                    <img src={item.url} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    <span className="absolute top-3 left-3 bg-emerald-950/80 text-amber-300 text-[10px] font-bold px-2.5 py-1 rounded-full">
                      {item.tag}
                    </span>
                  </div>
                  <div className="p-4">
                    <h4 className="font-bold text-sm text-slate-900 group-hover:text-emerald-800 transition-colors">{item.title}</h4>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* =========================================================================
          VIEW: ACTIVITIES & EVENTS
      ========================================================================= */}
      {activeNav === 'activities' && (
        <div className="py-10 px-4 sm:px-6 max-w-7xl mx-auto space-y-8 animate-in fade-in duration-300">
          <div className="bg-white p-6 sm:p-10 rounded-3xl border border-slate-200 shadow-sm space-y-8">
            <div>
              <span className="text-xs font-black uppercase tracking-widest text-emerald-800 bg-emerald-50 px-3.5 py-1 rounded-full">Holistic Growth</span>
              <h2 className="text-3xl font-black text-slate-900 mt-2 mb-2">Activities, Clubs & Events Calendar</h2>
              <p className="text-slate-600 text-sm leading-relaxed">
                Explore our diverse co-curricular ecosystem and upcoming school events.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Clubs */}
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-slate-900">Student Co-Curricular Clubs</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {clubsList.map((c, i) => (
                    <div key={i} className="bg-slate-50 p-4 rounded-2xl border border-slate-200 space-y-1">
                      <div className="text-2xl">{c.icon}</div>
                      <h4 className="font-bold text-sm text-slate-900">{c.name}</h4>
                      <p className="text-xs text-slate-600">{c.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Upcoming Events */}
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-slate-900">Upcoming Campus Events 2026</h3>
                <div className="space-y-3">
                  {eventsList.map((evt, i) => (
                    <div key={i} className="bg-emerald-50/70 p-4 rounded-2xl border border-emerald-100 flex items-center gap-4">
                      <div className="w-16 h-16 rounded-2xl bg-emerald-800 text-white flex flex-col items-center justify-center shrink-0">
                        <span className="text-lg font-black leading-none">{evt.date}</span>
                        <span className="text-[10px] font-bold uppercase tracking-wider">{evt.month}</span>
                      </div>
                      <div>
                        <span className="text-[10px] font-bold text-emerald-800 uppercase bg-white px-2 py-0.5 rounded">{evt.tag}</span>
                        <h4 className="font-bold text-sm text-slate-900 mt-1">{evt.title}</h4>
                        <p className="text-xs text-slate-600 mt-0.5">{evt.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* =========================================================================
          VIEW: GALLERY
      ========================================================================= */}
      {activeNav === 'gallery' && (
        <div className="py-10 px-4 sm:px-6 max-w-7xl mx-auto space-y-8 animate-in fade-in duration-300">
          <div className="bg-white p-6 sm:p-10 rounded-3xl border border-slate-200 shadow-sm space-y-6">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              <div>
                <span className="text-xs font-black uppercase tracking-widest text-emerald-800 bg-emerald-50 px-3.5 py-1 rounded-full">Gallery</span>
                <h2 className="text-3xl font-black text-slate-900 mt-2 mb-1">Campus Image Gallery</h2>
                <p className="text-slate-600 text-sm">Click any photo to view in high resolution.</p>
              </div>

              <div className="flex flex-wrap gap-2 text-xs font-bold">
                {['All', 'Labs', 'Classrooms', 'Sports', 'Events', 'Activities', 'Campus'].map(cat => (
                  <button
                    key={cat}
                    onClick={() => setGalleryFilter(cat)}
                    className={`px-3.5 py-2 rounded-xl transition-all ${
                      galleryFilter === cat ? 'bg-emerald-800 text-white shadow-xs' : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
              {galleryItems
                .filter(item => galleryFilter === 'All' || item.tag === galleryFilter)
                .map((item, i) => (
                  <div 
                    key={i} 
                    onClick={() => setLightboxImg(item)}
                    className="group relative h-56 rounded-2xl overflow-hidden cursor-pointer shadow-sm border border-slate-200"
                  >
                    <img src={item.url} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent flex flex-col justify-end p-4 text-white">
                      <span className="text-[10px] text-amber-300 font-black uppercase">{item.tag}</span>
                      <p className="text-xs font-bold">{item.title}</p>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      )}

      {/* =========================================================================
          VIEW: ADMISSIONS
      ========================================================================= */}
      {activeNav === 'admissions' && (
        <div className="py-10 px-4 sm:px-6 max-w-7xl mx-auto space-y-8 animate-in fade-in duration-300">
          <div className="bg-white p-6 sm:p-10 rounded-3xl border border-slate-200 shadow-sm space-y-8">
            <div>
              <span className="text-xs font-black uppercase tracking-widest text-emerald-800 bg-emerald-50 px-3.5 py-1 rounded-full">Admissions 2026-27</span>
              <h2 className="text-3xl font-black text-slate-900 mt-2 mb-2">Admission Process & Online Application</h2>
              <p className="text-slate-600 text-sm leading-relaxed">
                We follow an objective, inclusive, and transparent admission process across Pre-Primary, Primary, Middle, and Senior High School levels.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              <div className="lg:col-span-6 space-y-4">
                <h3 className="text-lg font-bold text-slate-900">Documents Required for Admission</h3>
                <ul className="space-y-2 text-xs text-slate-700 bg-slate-50 p-5 rounded-2xl border border-slate-200">
                  <li className="flex items-center gap-2">✓ Student Birth Certificate (Original & Self-attested copy)</li>
                  <li className="flex items-center gap-2">✓ Previous Class Report Card / Progress Transcript</li>
                  <li className="flex items-center gap-2">✓ Original Transfer Certificate (TC) countersigned by Board</li>
                  <li className="flex items-center gap-2">✓ Aadhaar Card copies of Student & Both Parents</li>
                  <li className="flex items-center gap-2">✓ 4 Passport size color photographs of the student</li>
                  <li className="flex items-center gap-2">✓ Medical Fitness Certificate & Blood Group proof</li>
                </ul>

                <div className="bg-amber-50 p-4 rounded-2xl border border-amber-200 text-xs text-amber-900 space-y-1">
                  <div className="font-bold flex items-center gap-1.5"><Sparkles className="w-4 h-4 text-amber-600" /> Merit & Sports Scholarships</div>
                  <p>Up to 50% tuition fee waivers available for state sports medalists and academic toppers in entrance diagnostic tests.</p>
                </div>
              </div>

              <div className="lg:col-span-6 bg-slate-50 p-6 rounded-2xl border border-slate-200">
                <h3 className="text-lg font-bold text-slate-900 mb-1">Submit Online Admission Enquiry</h3>
                <p className="text-xs text-slate-500 mb-4">Our admissions coordinator will guide you with fee schedules and test dates.</p>

                {enquirySubmitted ? (
                  <div className="bg-emerald-50 border border-emerald-200 text-emerald-900 p-5 rounded-xl text-center space-y-2">
                    <CheckCircle2 className="w-8 h-8 mx-auto text-emerald-600" />
                    <p className="font-bold text-xs">Application Submitted!</p>
                  </div>
                ) : (
                  <form onSubmit={(e) => { e.preventDefault(); setEnquirySubmitted(true); }} className="space-y-3 text-xs">
                    <input required placeholder="Parent Name" className="w-full bg-white border border-slate-300 rounded-xl p-2.5" />
                    <input required placeholder="Student Name" className="w-full bg-white border border-slate-300 rounded-xl p-2.5" />
                    <input required type="tel" placeholder="Mobile / WhatsApp Number" className="w-full bg-white border border-slate-300 rounded-xl p-2.5" />
                    <select className="w-full bg-white border border-slate-300 rounded-xl p-2.5 font-medium">
                      <option>Select Class (Nursery to Grade 12)</option>
                      <option>Pre-Primary (Nursery, LKG, UKG)</option>
                      <option>Class 1 to 5</option>
                      <option>Class 6 to 8</option>
                      <option>Class 9 & 10 (CBSE)</option>
                      <option>Class 11 - Science (PCM / PCB)</option>
                      <option>Class 11 - Commerce</option>
                      <option>Class 11 - Humanities</option>
                    </select>
                    <button type="submit" className="w-full bg-emerald-800 hover:bg-emerald-900 text-white font-bold py-3 rounded-xl shadow-md transition-colors text-xs">
                      Submit Admission Enquiry
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* =========================================================================
          VIEW: CONTACT
      ========================================================================= */}
      {activeNav === 'contact' && (
        <div className="py-10 px-4 sm:px-6 max-w-7xl mx-auto space-y-8 animate-in fade-in duration-300">
          <div className="bg-white p-6 sm:p-10 rounded-3xl border border-slate-200 shadow-sm space-y-8">
            <div>
              <span className="text-xs font-black uppercase tracking-widest text-emerald-800 bg-emerald-50 px-3.5 py-1 rounded-full">Get in Touch</span>
              <h2 className="text-3xl font-black text-slate-900 mt-2 mb-2">Campus Location & Contact Directory</h2>
              <p className="text-slate-600 text-sm leading-relaxed">
                Connect with our specialized departments or plan your visit to the main campus.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              <div className="lg:col-span-5 space-y-4 text-xs text-slate-700">
                <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200 space-y-1">
                  <div className="font-bold text-sm text-emerald-950 flex items-center gap-2"><MapPin className="w-4 h-4 text-amber-500" /> Main Campus Coordinates</div>
                  <p>Sector 14, Knowledge Corridor, Near Metro Hub, Thane West, Maharashtra - 400601</p>
                </div>

                <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200 space-y-1">
                  <div className="font-bold text-sm text-emerald-950 flex items-center gap-2"><Phone className="w-4 h-4 text-amber-500" /> Direct Hotlines</div>
                  <p>Admissions Desk: +91 91234 56789 / +91 91234 56780</p>
                  <p>Principal&apos;s Office: +91 91234 56799</p>
                </div>

                <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200 space-y-1">
                  <div className="font-bold text-sm text-emerald-950 flex items-center gap-2"><Mail className="w-4 h-4 text-amber-500" /> Email Support</div>
                  <p>admissions@brightfuturepro.edu.in</p>
                  <p>principal@brightfuturepro.edu.in</p>
                </div>

                <a 
                  href="https://wa.me/919123456789?text=Hello%20BrightFuture%20Pro,%20I%20have%20an%20enquiry"
                  target="_blank"
                  rel="noreferrer"
                  className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3.5 rounded-xl text-center flex items-center justify-center gap-2 shadow-md transition-colors"
                >
                  <MessageCircle className="w-4 h-4" /> WhatsApp Admissions Counselor
                </a>
              </div>

              {/* Map & Route Finder Mockup */}
              <div className="lg:col-span-7 bg-slate-50 p-6 rounded-2xl border border-slate-200 space-y-4">
                <h4 className="font-bold text-base text-slate-900">Campus Transport & Route Coverage</h4>
                <div className="h-44 bg-slate-200 rounded-xl flex flex-col items-center justify-center text-slate-500 text-xs text-center p-4">
                  <Compass className="w-8 h-8 text-emerald-800 mb-2" />
                  <p className="font-bold text-slate-800">Interactive High-Tech Campus Map</p>
                  <p className="text-[11px]">Covering 34 bus routes across Thane, Mulund, Kalyan & Dombivli.</p>
                </div>
                <div className="grid grid-cols-2 gap-2 text-xs text-slate-600">
                  <div className="bg-white p-3 rounded-xl border border-slate-200">
                    <span className="font-bold text-emerald-900 block">Metro Connectivity:</span>
                    <span>1.2 km from Line 4 Metro Station</span>
                  </div>
                  <div className="bg-white p-3 rounded-xl border border-slate-200">
                    <span className="font-bold text-emerald-900 block">Visiting Hours:</span>
                    <span>Mon - Sat: 8:00 AM - 4:00 PM</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Modern Emerald & Warm Gold Pro Footer */}
      <footer className="bg-emerald-950 text-slate-300 py-14 px-4 sm:px-6 border-t border-emerald-800">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 text-xs">
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-white font-black text-lg">
              <GraduationCap className="w-6 h-6 text-amber-400" /> BRIGHTFUTURE <span className="text-amber-400">PRO</span>
            </div>
            <p className="text-emerald-200 leading-relaxed">
              An internationally recognized CBSE and STEM-integrated institution dedicated to academic brilliance, technological mastery, and character formation.
            </p>
            <div className="text-[11px] text-amber-300 font-bold">
              Affiliated to CBSE, New Delhi • Reg. No. 1130452
            </div>
          </div>

          <div>
            <h4 className="font-bold text-white uppercase tracking-wider mb-3">Key Sections</h4>
            <ul className="space-y-2">
              {navItems.map(item => (
                <li key={item.id}>
                  <button onClick={() => handleNav(item.id)} className="hover:text-amber-300 transition-colors">
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-white uppercase tracking-wider mb-3">Academic Wings</h4>
            <ul className="space-y-1.5 text-emerald-200">
              <li>• Pre-Primary Discovery Wing</li>
              <li>• Primary Experiential School</li>
              <li>• Middle School STEM Wing</li>
              <li>• Senior Science (PCM / PCB + AI)</li>
              <li>• Commerce & FinTech Wing</li>
              <li>• Humanities & Liberal Arts</li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-white uppercase tracking-wider mb-3">Campus Admissions</h4>
            <p className="text-emerald-200 leading-relaxed mb-3">
              Sector 14, Knowledge Corridor, Thane West - 400601
            </p>
            <p className="text-white font-bold">Hotline: +91 91234 56789</p>
            <p className="text-emerald-200">Email: admissions@brightfuturepro.edu.in</p>
            <button 
              onClick={() => setTourModalOpen(true)}
              className="mt-3 bg-amber-400 hover:bg-amber-300 text-slate-950 font-black px-4 py-2 rounded-xl w-full text-xs transition-colors"
            >
              Book Campus Tour
            </button>
          </div>
        </div>

        <div className="max-w-7xl mx-auto border-t border-emerald-800/80 mt-10 pt-6 flex flex-col sm:flex-row justify-between items-center text-[11px] text-emerald-300 gap-2">
          <span>© 2026 BrightFuture Pro STEM Academy. All Rights Reserved.</span>
          <span>CBSE Affiliated • Excellence Since 2001</span>
        </div>
      </footer>

    </div>
  );
};
