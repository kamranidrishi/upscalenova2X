import React, { useState } from 'react';
import { DemoItem } from '../../data/demos';
import {
  GraduationCap, Phone, Mail, MapPin, ArrowRight,
  BookOpen, Award, CheckCircle2, MessageCircle, Send,
  Users, School, Sparkles, Clock, Compass, Shield, X, Eye
} from 'lucide-react';

interface SchoolBaseDemoProps {
  demo: DemoItem;
  isMobile: boolean;
  isTablet: boolean;
}

export const SchoolBaseDemo: React.FC<SchoolBaseDemoProps> = () => {
  const [enquirySubmitted, setEnquirySubmitted] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedPhoto, setSelectedPhoto] = useState<{ title: string; category: string; image: string } | null>(null);

  const [formData, setFormData] = useState({
    parentName: '',
    phone: '',
    email: '',
    grade: 'Primary School (Grades 1-5)',
    message: ''
  });

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.parentName || !formData.phone) return;
    setEnquirySubmitted(true);
    setTimeout(() => {
      setEnquirySubmitted(false);
      setFormData({
        parentName: '',
        phone: '',
        email: '',
        grade: 'Primary School (Grades 1-5)',
        message: ''
      });
    }, 4000);
  };

  // 5 Homepage School Life & Campus Photos (Classroom, Students Studying, School Activity, Sports, Library/Art)
  const schoolPhotos = [
    {
      title: 'Interactive Classrooms',
      category: 'Classroom',
      desc: 'Spacious, well-lit, and technology-enabled learning spaces for active student engagement.',
      image: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=800&q=80'
    },
    {
      title: 'Collaborative Learning',
      category: 'Students Studying',
      desc: 'Encouraging peer discussions, curiosity-driven inquiry, and academic discipline.',
      image: 'https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=800&q=80'
    },
    {
      title: 'Science & Discovery',
      category: 'School Activity',
      desc: 'Hands-on practical experiments in modern physics, chemistry, and biology laboratories.',
      image: 'https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?auto=format&fit=crop&w=800&q=80'
    },
    {
      title: 'Sports & Athletics',
      category: 'Outdoor Activity',
      desc: 'Fostering physical fitness, leadership, and sportsmanship on sprawling playfields.',
      image: 'https://images.unsplash.com/photo-1526676037777-05a232554f77?auto=format&fit=crop&w=800&q=80'
    },
    {
      title: 'Library & Creative Arts',
      category: 'Library & Arts',
      desc: 'Quiet reading zones with extensive collections and vibrant visual arts studios.',
      image: 'https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=800&q=80'
    }
  ];

  // Gallery Photos
  const galleryImages = [
    {
      title: 'Main Academic Campus',
      category: 'Campus Grounds',
      image: 'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=800&q=80'
    },
    {
      title: 'Science & Discovery Center',
      category: 'Laboratories',
      image: 'https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?auto=format&fit=crop&w=800&q=80'
    },
    {
      title: 'Athletics & Sports Ground',
      category: 'Sports & Fitness',
      image: 'https://images.unsplash.com/photo-1526676037777-05a232554f77?auto=format&fit=crop&w=800&q=80'
    },
    {
      title: 'Smart Computer Center',
      category: 'Technology',
      image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80'
    },
    {
      title: 'Creative Art & Studio Hall',
      category: 'Creative Arts',
      image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=800&q=80'
    },
    {
      title: 'Central Library & Reading Hall',
      category: 'Resource Center',
      image: 'https://images.unsplash.com/photo-1541829070764-84a7d30dd3f3?auto=format&fit=crop&w=800&q=80'
    }
  ];

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-[#1E40AF] selection:text-white">
      
      {/* 1. TOP UTILITY BAR (Navy) */}
      <div className="bg-[#0B1B3D] text-slate-200 text-xs py-2.5 px-4 border-b border-[#152B57]">
        <div className="max-w-6xl mx-auto flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-5 text-[11px] sm:text-xs">
            <span className="flex items-center gap-1.5 text-slate-300">
              <MapPin className="w-3.5 h-3.5 text-blue-400 shrink-0" />
              Green Valley Road, Knowledge City, Pune
            </span>
            <span className="hidden sm:flex items-center gap-1.5 text-slate-300">
              <Phone className="w-3.5 h-3.5 text-blue-400 shrink-0" />
              +91 98765 43210
            </span>
          </div>

          <div className="flex items-center gap-4 text-[11px] sm:text-xs">
            <span className="hidden md:inline-flex items-center gap-1 text-slate-300">
              <Clock className="w-3.5 h-3.5 text-blue-400" />
              Mon - Fri: 8:00 AM - 4:00 PM
            </span>
            <a 
              href="https://wa.me/919876543210?text=Hello%20BrightFuture%20School,%20I%20would%20like%20to%20enquire%20about%20admissions"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 hover:bg-blue-500 text-white font-medium px-2.5 py-1 rounded transition-colors flex items-center gap-1 shadow-2xs"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>WhatsApp Chat</span>
            </a>
          </div>
        </div>
      </div>

      {/* 2. MAIN HEADER & NAVIGATION (White background, Navy text, ONLY 4 items: Home, About, Gallery, Contact) */}
      <header className="sticky top-0 z-40 bg-white border-b border-slate-200 shadow-xs">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-20 flex items-center justify-between">
          
          {/* Logo */}
          <div 
            onClick={() => scrollToSection('hero')}
            className="flex items-center gap-3 cursor-pointer group"
          >
            <div className="w-10 h-10 rounded-lg bg-[#0B1B3D] text-white flex items-center justify-center shadow-xs">
              <GraduationCap className="w-6 h-6 text-blue-400" />
            </div>
            <div>
              <span className="text-xl font-bold tracking-tight text-[#0B1B3D] block leading-tight">
                BrightFuture School
              </span>
              <span className="text-[11px] font-semibold text-slate-500 tracking-wider uppercase block">
                Excellence in Education
              </span>
            </div>
          </div>

          {/* Desktop Navigation: EXACTLY 4 ITEMS (Home, About, Gallery, Contact) */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-semibold text-[#0B1B3D]">
            <button 
              onClick={() => scrollToSection('hero')} 
              className="hover:text-blue-700 transition-colors cursor-pointer"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('about')} 
              className="hover:text-blue-700 transition-colors cursor-pointer"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('gallery')} 
              className="hover:text-blue-700 transition-colors cursor-pointer"
            >
              Gallery
            </button>
            <button 
              onClick={() => scrollToSection('contact')} 
              className="hover:text-blue-700 transition-colors cursor-pointer"
            >
              Contact
            </button>
          </nav>

          {/* Simple Header CTA Button */}
          <div className="hidden sm:flex items-center gap-3">
            <button 
              onClick={() => scrollToSection('contact')}
              className="bg-[#1E40AF] hover:bg-[#1E3A8A] text-white text-xs font-semibold px-5 py-2.5 rounded transition-colors shadow-xs flex items-center gap-1.5 cursor-pointer"
            >
              <span>Contact Us</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-slate-700 hover:bg-slate-100 rounded"
            aria-label="Toggle menu"
          >
            <div className="w-5 h-4 flex flex-col justify-between">
              <span className="w-full h-0.5 bg-[#0B1B3D] rounded-sm"></span>
              <span className="w-full h-0.5 bg-[#0B1B3D] rounded-sm"></span>
              <span className="w-full h-0.5 bg-[#0B1B3D] rounded-sm"></span>
            </div>
          </button>
        </div>

        {/* Mobile Dropdown Menu (ONLY Home, About, Gallery, Contact) */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-slate-200 px-6 py-4 space-y-3 shadow-md">
            <button 
              onClick={() => scrollToSection('hero')} 
              className="block w-full text-left py-1.5 text-sm font-semibold text-[#0B1B3D] hover:text-blue-700"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('about')} 
              className="block w-full text-left py-1.5 text-sm font-semibold text-[#0B1B3D] hover:text-blue-700"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('gallery')} 
              className="block w-full text-left py-1.5 text-sm font-semibold text-[#0B1B3D] hover:text-blue-700"
            >
              Gallery
            </button>
            <button 
              onClick={() => scrollToSection('contact')} 
              className="block w-full text-left py-1.5 text-sm font-semibold text-[#0B1B3D] hover:text-blue-700"
            >
              Contact
            </button>
            <button 
              onClick={() => scrollToSection('contact')} 
              className="w-full mt-2 bg-[#1E40AF] text-white text-xs font-semibold py-2.5 rounded"
            >
              Contact Us
            </button>
          </div>
        )}
      </header>

      {/* 3. HERO SECTION (Clean, Realistic School Building, Navy & Blue system) */}
      <section id="hero" className="relative bg-[#0B1B3D] text-white overflow-hidden">
        {/* Realistic School Campus Background Image with dark overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=1800&q=80" 
            alt="BrightFuture School Building"
            className="w-full h-full object-cover object-center opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0B1B3D] via-[#0B1B3D]/90 to-[#0B1B3D]/65" />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 py-20 sm:py-28 lg:py-32">
          <div className="max-w-2xl space-y-6">
            
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-blue-900/60 border border-blue-400/30 text-blue-200 text-xs font-semibold uppercase tracking-wider">
              <School className="w-3.5 h-3.5 text-blue-300" />
              Affiliated with CBSE • Co-Educational Institution
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.15]">
              Inspiring Excellence, <br />
              <span className="text-blue-300">Building Futures</span>
            </h1>

            <p className="text-base sm:text-lg text-slate-200 leading-relaxed font-normal">
              BrightFuture School provides a disciplined, nurturing, and values-based educational environment empowering young minds from Kindergarten to Grade 12 to excel academically and ethically.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-4">
              <button 
                onClick={() => scrollToSection('about')}
                className="bg-[#1D4ED8] hover:bg-[#1E40AF] text-white font-bold text-sm px-6 py-3.5 rounded shadow-sm hover:shadow transition-all flex items-center gap-2 cursor-pointer"
              >
                <span>Discover More</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button 
                onClick={() => scrollToSection('contact')}
                className="bg-white/10 hover:bg-white/20 text-white font-semibold text-sm px-6 py-3.5 rounded border border-white/30 backdrop-blur-xs transition-all cursor-pointer"
              >
                Get in Touch
              </button>
            </div>

          </div>
        </div>

        {/* Quick Highlights / Statistical Strip */}
        <div className="relative z-10 bg-[#071329] border-t border-slate-800/80 py-5 px-4 sm:px-6">
          <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 text-white">
            <div className="text-center md:text-left border-r border-slate-800 last:border-none pr-2">
              <div className="text-2xl sm:text-3xl font-bold text-blue-300">25+ Years</div>
              <div className="text-xs text-slate-300 font-medium mt-0.5">Educational Legacy</div>
            </div>
            <div className="text-center md:text-left border-r border-slate-800 last:border-none pr-2">
              <div className="text-2xl sm:text-3xl font-bold text-blue-300">100%</div>
              <div className="text-xs text-slate-300 font-medium mt-0.5">Board Pass Rate</div>
            </div>
            <div className="text-center md:text-left border-r border-slate-800 last:border-none pr-2">
              <div className="text-2xl sm:text-3xl font-bold text-blue-300">1:20</div>
              <div className="text-xs text-slate-300 font-medium mt-0.5">Teacher-Student Ratio</div>
            </div>
            <div className="text-center md:text-left">
              <div className="text-2xl sm:text-3xl font-bold text-blue-300">15+ Acres</div>
              <div className="text-xs text-slate-300 font-medium mt-0.5">Green Campus Grounds</div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. HOMEPAGE SCHOOL PHOTOS SECTION (Classroom, Students Studying, Activity, Sports, Library/Art) */}
      <section className="py-16 sm:py-24 bg-[#F4F8FC] border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-[#1E40AF] text-xs font-bold uppercase tracking-widest block mb-2">
              Campus Environment
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#0B1B3D] tracking-tight">
              Life at BrightFuture School
            </h2>
            <p className="text-sm text-slate-600 mt-2">
              A balanced learning environment nurturing academics, sportsmanship, scientific inquiry, and creative expression.
            </p>
          </div>

          {/* Grid of 5 School Photos */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {schoolPhotos.map((item, idx) => (
              <div 
                key={idx}
                className={`bg-white border border-slate-200 rounded-lg overflow-hidden shadow-xs hover:shadow-md transition-shadow group flex flex-col ${
                  idx === 0 ? 'lg:col-span-2 md:col-span-2' : ''
                }`}
              >
                <div className={`overflow-hidden bg-slate-100 relative ${idx === 0 ? 'h-64 sm:h-72' : 'h-52 sm:h-56'}`}>
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                  />
                  <div className="absolute top-3 left-3 bg-[#0B1B3D]/90 backdrop-blur-xs text-white text-[10px] font-bold px-2.5 py-1 rounded">
                    {item.category}
                  </div>
                </div>
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-base font-bold text-[#0B1B3D] group-hover:text-blue-700 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 mt-1.5 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 5. ABOUT SCHOOL SECTION (Simple, Clean, Basic Information Only) */}
      <section id="about" className="py-16 sm:py-24 bg-white border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            
            {/* Image Column */}
            <div className="lg:col-span-6">
              <div className="relative rounded-lg overflow-hidden border border-slate-200 shadow-sm">
                <img 
                  src="https://images.unsplash.com/photo-1541829070764-84a7d30dd3f3?auto=format&fit=crop&w=1000&q=80" 
                  alt="BrightFuture Central Academic Building"
                  className="w-full h-[360px] sm:h-[420px] object-cover"
                />
                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-[#0B1B3D] to-transparent p-6 text-white">
                  <div className="text-sm font-bold">BrightFuture Central Campus</div>
                  <div className="text-xs text-slate-300 mt-0.5">Dedicated to holistic development and student well-being</div>
                </div>
              </div>
            </div>

            {/* Content Column */}
            <div className="lg:col-span-6 space-y-6">
              <div>
                <span className="text-[#1E40AF] text-xs font-bold uppercase tracking-widest block mb-2">
                  About Our School
                </span>
                <h2 className="text-2xl sm:text-3xl font-bold text-[#0B1B3D] tracking-tight">
                  Dedicated to Character, Knowledge, and Discipline
                </h2>
              </div>

              <p className="text-sm text-slate-600 leading-relaxed">
                Founded with a vision to deliver accessible, high-caliber education, BrightFuture School is dedicated to fostering academic excellence, moral integrity, and social responsibility in every student.
              </p>

              <div className="space-y-4 pt-1">
                <div className="p-4 bg-[#F4F8FC] border-l-4 border-[#1E40AF] rounded-r">
                  <h4 className="text-sm font-bold text-[#0B1B3D] flex items-center gap-2">
                    <Compass className="w-4 h-4 text-blue-700" /> Our Mission
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600 mt-1">
                    To deliver a balanced education that sharpens intellect, instills sound character, and encourages continuous curiosity.
                  </p>
                </div>

                <div className="p-4 bg-[#F4F8FC] border-l-4 border-[#0B1B3D] rounded-r">
                  <h4 className="text-sm font-bold text-[#0B1B3D] flex items-center gap-2">
                    <Shield className="w-4 h-4 text-[#0B1B3D]" /> Our Vision
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600 mt-1">
                    To be recognized as a trusted community school known for nurturing compassionate, capable, and confident young citizens.
                  </p>
                </div>
              </div>

              {/* Core Pillars */}
              <div className="grid grid-cols-2 gap-3 pt-2 text-xs text-slate-700">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-blue-700 shrink-0" />
                  <span>CBSE Board Standard Curriculum</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-blue-700 shrink-0" />
                  <span>Experienced & Dedicated Faculty</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-blue-700 shrink-0" />
                  <span>Individualized Student Attention</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-blue-700 shrink-0" />
                  <span>Safe, Monitored Campus Grounds</span>
                </div>
              </div>

              <div className="pt-2">
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="bg-[#1E40AF] hover:bg-[#1E3A8A] text-white text-xs font-semibold px-6 py-3 rounded transition-colors shadow-xs flex items-center gap-2 cursor-pointer"
                >
                  <span>Connect With Us</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* 6. PHOTO GALLERY SECTION (Simple, Clean, No Advanced Management) */}
      <section id="gallery" className="py-16 sm:py-24 bg-[#F4F8FC] border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-[#1E40AF] text-xs font-bold uppercase tracking-widest block mb-2">
              Visual Highlights
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#0B1B3D] tracking-tight">
              School Photo Gallery
            </h2>
            <p className="text-sm text-slate-600 mt-2">
              Snapshots of our campus facilities, science laboratories, art studios, and athletic grounds.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
            {galleryImages.map((photo, index) => (
              <div 
                key={index}
                onClick={() => setSelectedPhoto(photo)}
                className="group border border-slate-200 rounded-lg overflow-hidden bg-white shadow-xs hover:shadow-md transition-all cursor-pointer"
              >
                <div className="aspect-[4/3] overflow-hidden relative bg-slate-100">
                  <img 
                    src={photo.image} 
                    alt={photo.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white">
                    <span className="bg-[#0B1B3D]/80 backdrop-blur-xs px-3 py-1.5 rounded text-xs font-semibold flex items-center gap-1.5">
                      <Eye className="w-3.5 h-3.5" /> View Photo
                    </span>
                  </div>
                </div>
                <div className="p-3.5 border-t border-slate-100">
                  <span className="text-[10px] font-bold text-blue-700 uppercase tracking-wider block">{photo.category}</span>
                  <h4 className="text-xs sm:text-sm font-semibold text-[#0B1B3D] mt-0.5 truncate">{photo.title}</h4>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Lightbox Modal for Gallery */}
      {selectedPhoto && (
        <div 
          onClick={() => setSelectedPhoto(null)} 
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-xs flex items-center justify-center p-4"
        >
          <div 
            onClick={(e) => e.stopPropagation()} 
            className="bg-white rounded-lg max-w-2xl w-full overflow-hidden shadow-2xl relative"
          >
            <button 
              onClick={() => setSelectedPhoto(null)} 
              className="absolute top-3 right-3 bg-black/60 hover:bg-black text-white p-1.5 rounded-full z-10 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
            <img src={selectedPhoto.image} alt={selectedPhoto.title} className="w-full max-h-[70vh] object-cover" />
            <div className="p-4 bg-white">
              <span className="text-xs font-bold text-blue-700 uppercase tracking-wider">{selectedPhoto.category}</span>
              <h3 className="text-base font-bold text-[#0B1B3D]">{selectedPhoto.title}</h3>
            </div>
          </div>
        </div>
      )}

      {/* 7. CONTACT SECTION (Phone, Email, Address, Simple Form) */}
      <section id="contact" className="py-16 sm:py-24 bg-white border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-[#1E40AF] text-xs font-bold uppercase tracking-widest block mb-2">
              Get in Touch
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#0B1B3D] tracking-tight">
              Contact School Office
            </h2>
            <p className="text-sm text-slate-600 mt-2">
              Have questions regarding admissions, curriculum, or visiting hours? Reach out to our school office.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left Column: Contact Details */}
            <div className="lg:col-span-5 space-y-4">
              
              <div className="bg-[#F4F8FC] border border-slate-200 rounded-lg p-5 flex items-start gap-4">
                <div className="w-10 h-10 rounded bg-[#1E40AF]/10 text-[#1E40AF] flex items-center justify-center shrink-0 mt-0.5">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[#0B1B3D]">School Campus Address</h4>
                  <p className="text-xs sm:text-sm text-slate-600 mt-1 leading-relaxed">
                    Sector 14, Green Valley Road, Knowledge City, Maharashtra 411001
                  </p>
                </div>
              </div>

              <div className="bg-[#F4F8FC] border border-slate-200 rounded-lg p-5 flex items-start gap-4">
                <div className="w-10 h-10 rounded bg-[#1E40AF]/10 text-[#1E40AF] flex items-center justify-center shrink-0 mt-0.5">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[#0B1B3D]">Telephone & Office</h4>
                  <p className="text-xs sm:text-sm text-slate-600 mt-1 leading-relaxed">
                    Main Office: +91 98765 43210 <br />
                    Admissions Desk: +91 91234 56780
                  </p>
                </div>
              </div>

              <div className="bg-[#F4F8FC] border border-slate-200 rounded-lg p-5 flex items-start gap-4">
                <div className="w-10 h-10 rounded bg-[#1E40AF]/10 text-[#1E40AF] flex items-center justify-center shrink-0 mt-0.5">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[#0B1B3D]">Email Correspondence</h4>
                  <p className="text-xs sm:text-sm text-slate-600 mt-1 leading-relaxed">
                    info@brightfutureschool.edu.in <br />
                    admissions@brightfutureschool.edu.in
                  </p>
                </div>
              </div>

              <div className="pt-2">
                <a
                  href="https://wa.me/919876543210?text=Hello%20BrightFuture%20School,%20I%20have%20an%20enquiry%20regarding%20the%20school"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold rounded flex items-center justify-center gap-2 transition-colors shadow-xs"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Chat on WhatsApp</span>
                </a>
              </div>

            </div>

            {/* Right Column: Simple Contact Form */}
            <div className="lg:col-span-7">
              
              {/* Simple Contact Form */}
              <div className="bg-white border border-slate-200 rounded-lg p-6 sm:p-8 shadow-xs">
                <h3 className="text-lg font-bold text-[#0B1B3D] mb-1">Send Us a Message</h3>
                <p className="text-xs text-slate-500 mb-5">Fill in your information and we will get back to you promptly.</p>

                {enquirySubmitted ? (
                  <div className="p-6 bg-emerald-50 border border-emerald-200 rounded text-center space-y-2">
                    <CheckCircle2 className="w-8 h-8 text-emerald-600 mx-auto" />
                    <h4 className="text-sm font-bold text-emerald-900">Message Sent Successfully!</h4>
                    <p className="text-xs text-emerald-700">Thank you for reaching out. Our team will contact you within 24 business hours.</p>
                  </div>
                ) : (
                  <form onSubmit={handleFormSubmit} className="space-y-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">Parent / Student Name *</label>
                      <input 
                        type="text" 
                        required
                        placeholder="e.g. Ramesh Kulkarni"
                        value={formData.parentName}
                        onChange={(e) => setFormData({ ...formData, parentName: e.target.value })}
                        className="w-full px-3.5 py-2.5 text-xs sm:text-sm border border-slate-300 rounded focus:outline-none focus:border-blue-700"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <label className="block text-xs font-semibold text-slate-700 mb-1">Phone Number *</label>
                        <input 
                          type="tel" 
                          required
                          placeholder="e.g. +91 98765 43210"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="w-full px-3.5 py-2.5 text-xs sm:text-sm border border-slate-300 rounded focus:outline-none focus:border-blue-700"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-slate-700 mb-1">Email Address</label>
                        <input 
                          type="email" 
                          placeholder="name@example.com"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full px-3.5 py-2.5 text-xs sm:text-sm border border-slate-300 rounded focus:outline-none focus:border-blue-700"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">Class / Inquiry Level</label>
                      <select
                        value={formData.grade}
                        onChange={(e) => setFormData({ ...formData, grade: e.target.value })}
                        className="w-full px-3.5 py-2.5 text-xs sm:text-sm border border-slate-300 rounded focus:outline-none focus:border-blue-700 bg-white"
                      >
                        <option value="Pre-Primary (Nursery, LKG, UKG)">Pre-Primary (Nursery, LKG, UKG)</option>
                        <option value="Primary School (Grades 1-5)">Primary School (Grades 1-5)</option>
                        <option value="Middle School (Grades 6-8)">Middle School (Grades 6-8)</option>
                        <option value="Secondary (Grades 9-10)">Secondary (Grades 9-10)</option>
                        <option value="Senior Secondary (Grades 11-12)">Senior Secondary (Grades 11-12)</option>
                        <option value="General Information / Other">General Information / Other</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">Message (Optional)</label>
                      <textarea 
                        rows={3}
                        placeholder="Write your question or request..."
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full px-3.5 py-2.5 text-xs sm:text-sm border border-slate-300 rounded focus:outline-none focus:border-blue-700"
                      />
                    </div>

                    <button 
                      type="submit"
                      className="w-full py-3 bg-[#1E40AF] hover:bg-[#1E3A8A] text-white text-xs font-bold rounded transition-colors shadow-xs flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <Send className="w-3.5 h-3.5" />
                      <span>Send Message</span>
                    </button>
                  </form>
                )}
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* 8. FOOTER (Professional Navy, Simple, matching 4-nav layout) */}
      <footer className="bg-[#0B1B3D] text-slate-300 pt-12 pb-8 border-t border-[#152B57]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-10 border-b border-slate-800">
            
            {/* School Info */}
            <div className="space-y-3 md:col-span-2">
              <div className="flex items-center gap-2.5 text-white">
                <div className="w-8 h-8 rounded bg-blue-600 text-white flex items-center justify-center">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <span className="text-base font-bold text-white tracking-tight">BrightFuture School</span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed max-w-md">
                A community-centered educational institution dedicated to providing a disciplined, inspiring, and supportive learning experience from Kindergarten through Grade 12.
              </p>
              <div className="text-[11px] text-blue-300 font-semibold">
                Affiliated with CBSE, New Delhi • Reg. No. 2026-BF
              </div>
            </div>

            {/* Navigation Links: Exactly Home, About, Gallery, Contact */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-3.5">Quick Links</h4>
              <ul className="space-y-2 text-xs text-slate-300">
                <li>
                  <button onClick={() => scrollToSection('hero')} className="hover:text-white transition-colors cursor-pointer">
                    Home
                  </button>
                </li>
                <li>
                  <button onClick={() => scrollToSection('about')} className="hover:text-white transition-colors cursor-pointer">
                    About
                  </button>
                </li>
                <li>
                  <button onClick={() => scrollToSection('gallery')} className="hover:text-white transition-colors cursor-pointer">
                    Gallery
                  </button>
                </li>
                <li>
                  <button onClick={() => scrollToSection('contact')} className="hover:text-white transition-colors cursor-pointer">
                    Contact
                  </button>
                </li>
              </ul>
            </div>

            {/* Campus Address & Desk */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-3.5">Campus Desk</h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                Sector 14, Green Valley Road <br />
                Knowledge City, Maharashtra 411001 <br />
                Phone: +91 98765 43210 <br />
                Email: info@brightfutureschool.edu.in
              </p>
            </div>

          </div>

          {/* Copyright Bar */}
          <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-400">
            <div>
              © 2026 BrightFuture School. All Rights Reserved.
            </div>
            <div className="text-xs text-slate-400">
              ₹24,999 Base Plan Website Demo
            </div>
          </div>

        </div>
      </footer>

    </div>
  );
};
