import React, { useState } from 'react';
import { DemoItem } from '../../data/demos';
import {
  GraduationCap, Phone, Mail, MapPin, ArrowRight,
  BookOpen, Award, CheckCircle2, ChevronRight,
  MessageCircle, Send, Check, Users, School, Sparkles,
  Compass, Lightbulb, Clock, Globe
} from 'lucide-react';

interface SchoolBaseDemoProps {
  demo: DemoItem;
  isMobile: boolean;
  isTablet: boolean;
}

export const SchoolBaseDemo: React.FC<SchoolBaseDemoProps> = ({ isMobile }) => {
  const [enquirySubmitted, setEnquirySubmitted] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const [formData, setFormData] = useState({
    parentName: '',
    phone: '',
    email: '',
    grade: 'Primary School (Grade 1 - 5)',
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
        grade: 'Primary School (Grade 1 - 5)',
        message: ''
      });
    }, 4000);
  };

  const programs = [
    {
      title: 'Pre-Primary',
      grades: 'Playgroup, Nursery, LKG & UKG',
      age: 'Ages 3 – 5 Years',
      description: 'Foundational learning focused on early literacy, motor skills, sensory discovery, and joyful social interaction.',
      icon: Sparkles
    },
    {
      title: 'Primary',
      grades: 'Grade 1 to Grade 5',
      age: 'Ages 6 – 10 Years',
      description: 'Building strong conceptual fundamentals in numeracy, language, environmental science, and creative expressions.',
      icon: BookOpen
    },
    {
      title: 'Middle School',
      grades: 'Grade 6 to Grade 8',
      age: 'Ages 11 – 13 Years',
      description: 'Encouraging analytical inquiry, science laboratory experiments, logical reasoning, and collaborative projects.',
      icon: Compass
    },
    {
      title: 'Secondary',
      grades: 'Grade 9 & Grade 10',
      age: 'Ages 14 – 15 Years',
      description: 'Comprehensive board curriculum preparation emphasizing critical thinking, scientific applications, and academic excellence.',
      icon: Award
    },
    {
      title: 'Senior Secondary',
      grades: 'Grade 11 & Grade 12',
      age: 'Ages 16 – 18 Years',
      description: 'Dedicated academic streams in Science, Commerce, and Arts with focused foundation guidance for higher university education.',
      icon: GraduationCap
    },
    {
      title: 'Class 1–12 Integrated',
      grades: 'Complete K-12 Pathway',
      age: 'Ages 6 – 18 Years',
      description: 'A seamless, values-driven educational continuum nurturing character, discipline, sportsmanship, and lifelong curiosity.',
      icon: School
    }
  ];

  const academicsFeatures = [
    {
      title: 'Classes Offered',
      desc: 'Structured curriculum from Pre-Primary through Grade 12 affiliated with CBSE / State Board standards.',
      icon: BookOpen
    },
    {
      title: 'Teaching Approach',
      desc: 'Student-centered pedagogy balancing structured academic theory with hands-on practice and real-world examples.',
      icon: Lightbulb
    },
    {
      title: 'Learning Environment',
      desc: 'Well-ventilated, technology-enabled smart classrooms, safe campus grounds, and distraction-free study spaces.',
      icon: School
    },
    {
      title: 'Experienced Teachers',
      desc: 'Dedicated, certified faculty committed to mentoring individual students and fostering their unique talents.',
      icon: Users
    }
  ];

  const campusLifeImages = [
    {
      title: 'Engaged Students',
      subtitle: 'Collaborative Learning & Activities',
      image: 'https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=800&q=80'
    },
    {
      title: 'Modern Library',
      subtitle: 'Quiet Reading & Resource Center',
      image: 'https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=800&q=80'
    },
    {
      title: 'Classroom & Campus',
      subtitle: 'Spacious & Disciplined Environment',
      image: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=800&q=80'
    }
  ];

  const galleryImages = [
    {
      title: 'Main Academic Block',
      category: 'Campus',
      image: 'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=800&q=80'
    },
    {
      title: 'Science & Discovery Lab',
      category: 'Academics',
      image: 'https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?auto=format&fit=crop&w=800&q=80'
    },
    {
      title: 'Annual Sports & Athletics',
      category: 'Activities',
      image: 'https://images.unsplash.com/photo-1526676037777-05a232554f77?auto=format&fit=crop&w=800&q=80'
    },
    {
      title: 'Digital Computer Center',
      category: 'Facilities',
      image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80'
    },
    {
      title: 'Art & Cultural Hall',
      category: 'Campus Life',
      image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=800&q=80'
    },
    {
      title: 'Morning Assembly Grounds',
      category: 'Tradition',
      image: 'https://images.unsplash.com/photo-1541829070764-84a7d30dd3f3?auto=format&fit=crop&w=800&q=80'
    }
  ];

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-[#800020] selection:text-white">
      
      {/* TOP ANNOUNCEMENT BAR (Academic Maroon) */}
      <div className="bg-[#7B1124] text-white text-xs font-medium py-2 px-4 border-b border-[#630d1c]">
        <div className="max-w-6xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-4 text-[11px] sm:text-xs">
            <span className="flex items-center gap-1.5 opacity-90">
              <MapPin className="w-3.5 h-3.5 text-rose-200" />
              Green Valley Road, Knowledge City
            </span>
            <span className="hidden md:flex items-center gap-1.5 opacity-90">
              <Phone className="w-3.5 h-3.5 text-rose-200" />
              +91 98765 43210
            </span>
          </div>
          <div className="flex items-center gap-3 text-[11px] sm:text-xs">
            <span className="bg-white/15 px-2.5 py-0.5 rounded text-white font-semibold">
              Admissions Open 2026–27
            </span>
            <a 
              href="https://wa.me/919876543210?text=Hello%20BrightFuture%20School,%20I%20would%20like%20to%20enquire%20about%20admissions"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-rose-200 flex items-center gap-1 transition-colors"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              WhatsApp
            </a>
          </div>
        </div>
      </div>

      {/* 1. HEADER */}
      <header className="sticky top-0 z-40 bg-white border-b border-slate-200/80 shadow-xs">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-20 flex items-center justify-between">
          
          {/* Logo & School Name */}
          <div 
            onClick={() => scrollToSection('hero')}
            className="flex items-center gap-3 cursor-pointer group"
          >
            <div className="w-11 h-11 rounded-lg bg-[#7B1124] text-white flex items-center justify-center shadow-xs">
              <GraduationCap className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xl font-bold tracking-tight text-[#0B1A30] block leading-tight">
                BrightFuture School
              </span>
              <span className="text-[11px] font-medium text-slate-500 tracking-wider uppercase block">
                Excellence in Education
              </span>
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-7 text-sm font-semibold text-[#0B1A30]">
            <button 
              onClick={() => scrollToSection('hero')} 
              className="hover:text-[#7B1124] transition-colors cursor-pointer"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('about')} 
              className="hover:text-[#7B1124] transition-colors cursor-pointer"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('programs')} 
              className="hover:text-[#7B1124] transition-colors cursor-pointer"
            >
              Programs
            </button>
            <button 
              onClick={() => scrollToSection('academics')} 
              className="hover:text-[#7B1124] transition-colors cursor-pointer"
            >
              Academics
            </button>
            <button 
              onClick={() => scrollToSection('gallery')} 
              className="hover:text-[#7B1124] transition-colors cursor-pointer"
            >
              Gallery
            </button>
            <button 
              onClick={() => scrollToSection('contact')} 
              className="hover:text-[#7B1124] transition-colors cursor-pointer"
            >
              Contact
            </button>
          </nav>

          {/* One Simple CTA Button */}
          <div className="hidden sm:block">
            <button 
              onClick={() => scrollToSection('admission')}
              className="bg-[#7B1124] hover:bg-[#630d1c] text-white text-xs font-bold px-5 py-2.5 rounded-md transition-all shadow-xs flex items-center gap-1.5 cursor-pointer"
            >
              <span>Apply Now</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-slate-700 hover:bg-slate-100 rounded-md"
            aria-label="Toggle menu"
          >
            <div className="w-5 h-4 flex flex-col justify-between">
              <span className="w-full h-0.5 bg-slate-800 rounded-sm"></span>
              <span className="w-full h-0.5 bg-slate-800 rounded-sm"></span>
              <span className="w-full h-0.5 bg-slate-800 rounded-sm"></span>
            </div>
          </button>
        </div>

        {/* Mobile Dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-slate-200 px-6 py-4 space-y-3">
            <button 
              onClick={() => scrollToSection('hero')} 
              className="block w-full text-left py-1 text-sm font-semibold text-slate-800 hover:text-[#7B1124]"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('about')} 
              className="block w-full text-left py-1 text-sm font-semibold text-slate-800 hover:text-[#7B1124]"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('programs')} 
              className="block w-full text-left py-1 text-sm font-semibold text-slate-800 hover:text-[#7B1124]"
            >
              Programs
            </button>
            <button 
              onClick={() => scrollToSection('academics')} 
              className="block w-full text-left py-1 text-sm font-semibold text-slate-800 hover:text-[#7B1124]"
            >
              Academics
            </button>
            <button 
              onClick={() => scrollToSection('gallery')} 
              className="block w-full text-left py-1 text-sm font-semibold text-slate-800 hover:text-[#7B1124]"
            >
              Gallery
            </button>
            <button 
              onClick={() => scrollToSection('contact')} 
              className="block w-full text-left py-1 text-sm font-semibold text-slate-800 hover:text-[#7B1124]"
            >
              Contact
            </button>
            <button 
              onClick={() => scrollToSection('admission')} 
              className="w-full mt-2 bg-[#7B1124] text-white text-xs font-bold py-2.5 rounded-md"
            >
              Apply Now
            </button>
          </div>
        )}
      </header>

      {/* 2. HERO */}
      <section id="hero" className="relative bg-[#0B1A30] text-white overflow-hidden">
        {/* Large School Campus Background Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=1800&q=80" 
            alt="School Campus Building"
            className="w-full h-full object-cover object-center opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0B1A30] via-[#0B1A30]/85 to-[#0B1A30]/50" />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 py-20 sm:py-28 lg:py-32">
          <div className="max-w-2xl space-y-6">
            
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-white/10 border border-white/20 text-rose-200 text-xs font-semibold uppercase tracking-wider">
              <School className="w-3.5 h-3.5 text-rose-300" />
              CBSE Affiliated • Co-Educational Institution
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.15]">
              Academic Journey <br />
              <span className="text-rose-200 font-serif italic">Begins Here</span>
            </h1>

            <p className="text-base sm:text-lg text-slate-200 leading-relaxed font-normal">
              BrightFuture School provides a disciplined, nurturing, and values-based educational environment empowering young minds from Kindergarten to Grade 12 to excel academically and ethically.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-4">
              <button 
                onClick={() => scrollToSection('academics')}
                className="bg-[#7B1124] hover:bg-[#630d1c] text-white font-bold text-sm px-6 py-3.5 rounded-md shadow-md hover:shadow-lg transition-all flex items-center gap-2 cursor-pointer"
              >
                <span>Explore Academics</span>
                <ChevronRight className="w-4 h-4" />
              </button>

              <button 
                onClick={() => scrollToSection('admission')}
                className="bg-white/10 hover:bg-white/20 text-white font-semibold text-sm px-6 py-3.5 rounded-md border border-white/30 backdrop-blur-xs transition-all cursor-pointer"
              >
                Enquire for Admissions
              </button>
            </div>

          </div>
        </div>

        {/* Quick Highlights Bar */}
        <div className="relative z-10 bg-[#7B1124]/90 backdrop-blur-xs border-t border-white/10 py-4 px-4 sm:px-6">
          <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 text-white">
            <div className="text-center md:text-left border-r border-white/15 last:border-none pr-2">
              <div className="text-xl sm:text-2xl font-bold font-serif">25+ Years</div>
              <div className="text-xs text-rose-100">Educational Legacy</div>
            </div>
            <div className="text-center md:text-left border-r border-white/15 last:border-none pr-2">
              <div className="text-xl sm:text-2xl font-bold font-serif">100%</div>
              <div className="text-xs text-rose-100">Board Results</div>
            </div>
            <div className="text-center md:text-left border-r border-white/15 last:border-none pr-2">
              <div className="text-xl sm:text-2xl font-bold font-serif">1:20</div>
              <div className="text-xs text-rose-100">Teacher-Student Ratio</div>
            </div>
            <div className="text-center md:text-left">
              <div className="text-xl sm:text-2xl font-bold font-serif">15+ Acres</div>
              <div className="text-xs text-rose-100">Green Campus</div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. OUR PROGRAMS */}
      <section id="programs" className="py-16 sm:py-24 bg-slate-50 border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-[#7B1124] text-xs font-bold uppercase tracking-widest block mb-2">
              Structured Learning Pathways
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#0B1A30] tracking-tight">
              Our Academic Programs
            </h2>
            <p className="text-sm text-slate-600 mt-2">
              Comprehensive educational stages carefully structured to build curiosity, core knowledge, and character.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {programs.map((prog, idx) => {
              const IconComp = prog.icon;
              return (
                <div 
                  key={idx}
                  className="bg-white border border-slate-200 rounded-lg p-6 hover:shadow-md hover:border-[#7B1124]/40 transition-all group flex flex-col justify-between"
                >
                  <div>
                    <div className="w-10 h-10 rounded bg-rose-50 text-[#7B1124] flex items-center justify-center mb-4 group-hover:bg-[#7B1124] group-hover:text-white transition-colors">
                      <IconComp className="w-5 h-5" />
                    </div>
                    <div className="flex items-center justify-between gap-2">
                      <h3 className="text-lg font-bold text-[#0B1A30]">{prog.title}</h3>
                      <span className="text-[11px] font-medium text-slate-500 bg-slate-100 px-2 py-0.5 rounded">
                        {prog.age}
                      </span>
                    </div>
                    <p className="text-xs font-semibold text-[#7B1124] mt-1">{prog.grades}</p>
                    <p className="text-xs sm:text-sm text-slate-600 mt-3 leading-relaxed">
                      {prog.description}
                    </p>
                  </div>

                  <div className="pt-5 mt-4 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-[#7B1124]">
                    <span 
                      onClick={() => scrollToSection('admission')}
                      className="hover:underline flex items-center gap-1 cursor-pointer"
                    >
                      Enquire Admission <ChevronRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* 4. ABOUT SCHOOL */}
      <section id="about" className="py-16 sm:py-24 bg-white border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            
            {/* Image Column */}
            <div className="lg:col-span-6">
              <div className="relative rounded-lg overflow-hidden border border-slate-200 shadow-sm">
                <img 
                  src="https://images.unsplash.com/photo-1541829070764-84a7d30dd3f3?auto=format&fit=crop&w=1000&q=80" 
                  alt="BrightFuture School Campus & Library"
                  className="w-full h-[360px] sm:h-[420px] object-cover"
                />
                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-[#0B1A30] to-transparent p-6 text-white">
                  <div className="text-sm font-bold font-serif">BrightFuture Central Campus</div>
                  <div className="text-xs text-slate-300">Inspiring learning in an environment of excellence</div>
                </div>
              </div>
            </div>

            {/* Content Column */}
            <div className="lg:col-span-6 space-y-6">
              <div>
                <span className="text-[#7B1124] text-xs font-bold uppercase tracking-widest block mb-2">
                  About Our Institution
                </span>
                <h2 className="text-2xl sm:text-3xl font-bold text-[#0B1A30] tracking-tight">
                  Nurturing Leaders for a Better Tomorrow
                </h2>
              </div>

              <p className="text-sm text-slate-600 leading-relaxed">
                Founded with a vision to deliver holistic and accessible education, BrightFuture School is dedicated to fostering academic diligence, ethical values, and creative confidence in every learner.
              </p>

              <div className="space-y-4 pt-2">
                <div className="p-4 bg-slate-50 border-l-4 border-[#7B1124] rounded-r-md">
                  <h4 className="text-sm font-bold text-[#0B1A30]">Our Mission</h4>
                  <p className="text-xs sm:text-sm text-slate-600 mt-1">
                    To deliver balanced, high-caliber school education that integrates academic rigor, physical development, and moral responsibility.
                  </p>
                </div>

                <div className="p-4 bg-slate-50 border-l-4 border-[#0B1A30] rounded-r-md">
                  <h4 className="text-sm font-bold text-[#0B1A30]">Our Vision</h4>
                  <p className="text-xs sm:text-sm text-slate-600 mt-1">
                    To be recognized as a leading educational institution known for developing compassionate, capable, and confident global citizens.
                  </p>
                </div>
              </div>

              <div className="pt-2">
                <button 
                  onClick={() => scrollToSection('academics')}
                  className="bg-[#7B1124] hover:bg-[#630d1c] text-white text-xs font-bold px-6 py-3 rounded-md transition-all shadow-xs flex items-center gap-2 cursor-pointer"
                >
                  <span>Learn More</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* 5. ACADEMICS */}
      <section id="academics" className="py-16 sm:py-24 bg-slate-50 border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-[#7B1124] text-xs font-bold uppercase tracking-widest block mb-2">
              Academic Excellence
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#0B1A30] tracking-tight">
              Academic Framework & Philosophy
            </h2>
            <p className="text-sm text-slate-600 mt-2">
              A balanced approach designed to foster intellectual growth, conceptual mastery, and personal discipline.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {academicsFeatures.map((item, i) => {
              const Icon = item.icon;
              return (
                <div key={i} className="bg-white border border-slate-200 rounded-lg p-6 shadow-xs">
                  <div className="w-10 h-10 rounded bg-[#7B1124]/10 text-[#7B1124] flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold text-[#0B1A30] mb-2">{item.title}</h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Academic Strengths Points */}
          <div className="mt-10 bg-white border border-slate-200 rounded-lg p-6 sm:p-8">
            <h3 className="text-base font-bold text-[#0B1A30] mb-4">Core Academic Highlights</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 text-xs sm:text-sm text-slate-700">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#7B1124] shrink-0" />
                <span>Structured Continuous Assessment</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#7B1124] shrink-0" />
                <span>Regular Parent-Teacher Meetings</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#7B1124] shrink-0" />
                <span>Dedicated Remedial Support</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#7B1124] shrink-0" />
                <span>Modern Computer & Language Labs</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#7B1124] shrink-0" />
                <span>Sports & Physical Fitness Curriculum</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#7B1124] shrink-0" />
                <span>Values & Moral Education Modules</span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 6. CAMPUS LIFE */}
      <section id="campus-life" className="py-16 sm:py-24 bg-white border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-[#7B1124] text-xs font-bold uppercase tracking-widest block mb-2">
              Life on Campus
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#0B1A30] tracking-tight">
              An Enriching Student Experience
            </h2>
            <p className="text-sm text-slate-600 mt-2">
              A vibrant community where learning, sports, reading, and friendship thrive in harmony.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {campusLifeImages.map((card, idx) => (
              <div 
                key={idx} 
                className="group border border-slate-200 rounded-lg overflow-hidden bg-slate-50 hover:shadow-md transition-all"
              >
                <div className="aspect-[16/11] overflow-hidden bg-slate-200">
                  <img 
                    src={card.image} 
                    alt={card.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                  />
                </div>
                <div className="p-5">
                  <h3 className="text-base font-bold text-[#0B1A30]">{card.title}</h3>
                  <p className="text-xs text-slate-500 mt-1">{card.subtitle}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 7. ADMISSION */}
      <section id="admission" className="py-16 sm:py-24 bg-slate-50 border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left: Admissions Info */}
            <div className="lg:col-span-6 space-y-5">
              <span className="text-[#7B1124] text-xs font-bold uppercase tracking-widest block">
                Join Our Family
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0B1A30] tracking-tight">
                Admissions Open for Academic Year 2026–2027
              </h2>
              <p className="text-sm text-slate-600 leading-relaxed">
                We invite applications for Pre-Primary to Grade 12. Our admissions process is transparent and designed to understand your child&apos;s aspirations and unique potential.
              </p>

              <div className="space-y-3 pt-2">
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#7B1124] text-white flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                    1
                  </div>
                  <div>
                    <h4 className="text-xs sm:text-sm font-bold text-[#0B1A30]">Submit Online Enquiry</h4>
                    <p className="text-xs text-slate-500">Fill out the quick enquiry form or reach us via phone.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#7B1124] text-white flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                    2
                  </div>
                  <div>
                    <h4 className="text-xs sm:text-sm font-bold text-[#0B1A30]">Campus Visit & Interaction</h4>
                    <p className="text-xs text-slate-500">Tour our classrooms, meet teachers, and explore facilities.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#7B1124] text-white flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                    3
                  </div>
                  <div>
                    <h4 className="text-xs sm:text-sm font-bold text-[#0B1A30]">Enrolment & Document Verification</h4>
                    <p className="text-xs text-slate-500">Complete admission paperwork and secure your child&apos;s seat.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Small Clean Enquiry Form */}
            <div className="lg:col-span-6">
              <div className="bg-white border border-slate-200 rounded-lg p-6 sm:p-8 shadow-sm">
                <h3 className="text-lg font-bold text-[#0B1A30] mb-1">Admission Enquiry Form</h3>
                <p className="text-xs text-slate-500 mb-5">Please provide your details and our counselor will get in touch.</p>

                {enquirySubmitted ? (
                  <div className="p-6 bg-emerald-50 border border-emerald-200 rounded text-center space-y-2">
                    <CheckCircle2 className="w-8 h-8 text-emerald-600 mx-auto" />
                    <h4 className="text-sm font-bold text-emerald-900">Enquiry Submitted Successfully!</h4>
                    <p className="text-xs text-emerald-700">Thank you for your interest. An admissions officer will contact you within 24 hours.</p>
                  </div>
                ) : (
                  <form onSubmit={handleFormSubmit} className="space-y-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">Parent / Guardian Name *</label>
                      <input 
                        type="text" 
                        required
                        placeholder="e.g. Rajesh Sharma"
                        value={formData.parentName}
                        onChange={(e) => setFormData({ ...formData, parentName: e.target.value })}
                        className="w-full px-3.5 py-2 text-xs sm:text-sm border border-slate-300 rounded focus:outline-none focus:border-[#7B1124]"
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
                          className="w-full px-3.5 py-2 text-xs sm:text-sm border border-slate-300 rounded focus:outline-none focus:border-[#7B1124]"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-slate-700 mb-1">Email Address</label>
                        <input 
                          type="email" 
                          placeholder="name@example.com"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full px-3.5 py-2 text-xs sm:text-sm border border-slate-300 rounded focus:outline-none focus:border-[#7B1124]"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">Grade Applying For</label>
                      <select
                        value={formData.grade}
                        onChange={(e) => setFormData({ ...formData, grade: e.target.value })}
                        className="w-full px-3.5 py-2 text-xs sm:text-sm border border-slate-300 rounded focus:outline-none focus:border-[#7B1124] bg-white"
                      >
                        <option value="Pre-Primary (Nursery / LKG / UKG)">Pre-Primary (Nursery / LKG / UKG)</option>
                        <option value="Primary School (Grade 1 - 5)">Primary School (Grade 1 - 5)</option>
                        <option value="Middle School (Grade 6 - 8)">Middle School (Grade 6 - 8)</option>
                        <option value="Secondary (Grade 9 - 10)">Secondary (Grade 9 - 10)</option>
                        <option value="Senior Secondary (Grade 11 - 12)">Senior Secondary (Grade 11 - 12)</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">Message / Questions (Optional)</label>
                      <textarea 
                        rows={2}
                        placeholder="Any questions regarding syllabus or transport..."
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full px-3.5 py-2 text-xs sm:text-sm border border-slate-300 rounded focus:outline-none focus:border-[#7B1124]"
                      />
                    </div>

                    <button 
                      type="submit"
                      className="w-full py-2.5 bg-[#7B1124] hover:bg-[#630d1c] text-white text-xs font-bold rounded transition-colors shadow-xs flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <Send className="w-3.5 h-3.5" />
                      <span>Submit Enquiry</span>
                    </button>
                  </form>
                )}
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 8. GALLERY */}
      <section id="gallery" className="py-16 sm:py-24 bg-white border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-[#7B1124] text-xs font-bold uppercase tracking-widest block mb-2">
              Campus Glimpses
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#0B1A30] tracking-tight">
              School Photo Gallery
            </h2>
            <p className="text-sm text-slate-600 mt-2">
              Moments of curiosity, sportsmanship, and celebration across our campus grounds.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
            {galleryImages.map((photo, index) => (
              <div 
                key={index}
                className="group border border-slate-200 rounded-lg overflow-hidden bg-slate-100"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img 
                    src={photo.image} 
                    alt={photo.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-3 bg-white border-t border-slate-100">
                  <span className="text-[10px] font-bold text-[#7B1124] uppercase tracking-wider block">{photo.category}</span>
                  <h4 className="text-xs sm:text-sm font-semibold text-[#0B1A30] truncate">{photo.title}</h4>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 9. CONTACT */}
      <section id="contact" className="py-16 sm:py-24 bg-slate-50 border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-[#7B1124] text-xs font-bold uppercase tracking-widest block mb-2">
              Get in Touch
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#0B1A30] tracking-tight">
              Contact & Location
            </h2>
            <p className="text-sm text-slate-600 mt-2">
              Have questions? We are always here to assist parents and prospective students.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Contact Details */}
            <div className="lg:col-span-5 space-y-4">
              
              <div className="bg-white border border-slate-200 rounded-lg p-5 flex items-start gap-4">
                <div className="w-10 h-10 rounded bg-[#7B1124]/10 text-[#7B1124] flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[#0B1A30]">Campus Address</h4>
                  <p className="text-xs sm:text-sm text-slate-600 mt-1">
                    Sector 14, Green Valley Road, Knowledge City, Maharashtra 411001
                  </p>
                </div>
              </div>

              <div className="bg-white border border-slate-200 rounded-lg p-5 flex items-start gap-4">
                <div className="w-10 h-10 rounded bg-[#7B1124]/10 text-[#7B1124] flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[#0B1A30]">Phone & WhatsApp</h4>
                  <p className="text-xs sm:text-sm text-slate-600 mt-1">
                    Office: +91 98765 43210 <br />
                    Admissions Desk: +91 91234 56780
                  </p>
                </div>
              </div>

              <div className="bg-white border border-slate-200 rounded-lg p-5 flex items-start gap-4">
                <div className="w-10 h-10 rounded bg-[#7B1124]/10 text-[#7B1124] flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[#0B1A30]">Email Desk</h4>
                  <p className="text-xs sm:text-sm text-slate-600 mt-1">
                    admissions@brightfutureschool.edu.in <br />
                    info@brightfutureschool.edu.in
                  </p>
                </div>
              </div>

              <div className="pt-2">
                <a
                  href="https://wa.me/919876543210?text=Hello%20BrightFuture%20School,%20I%20have%20an%20enquiry%20regarding%20admissions"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold rounded-md flex items-center justify-center gap-2 transition-colors shadow-xs"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Chat on WhatsApp</span>
                </a>
              </div>

            </div>

            {/* Simple Map / Campus Location Card */}
            <div className="lg:col-span-7">
              <div className="bg-white border border-slate-200 rounded-lg overflow-hidden shadow-xs">
                <div className="p-4 border-b border-slate-100 flex items-center justify-between">
                  <div className="text-xs font-bold text-[#0B1A30]">BrightFuture School Campus Map</div>
                  <span className="text-[11px] text-slate-500">Visiting Hours: 8:30 AM – 4:00 PM</span>
                </div>
                <div className="h-[280px] sm:h-[320px] bg-slate-100 relative flex items-center justify-center overflow-hidden">
                  <iframe 
                    title="BrightFuture School Location"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15127.350849318182!2d73.84000000000002!3d18.52000000000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTjCsDMxJzEyLjAiTiA3M8KwNTAnMjQuMCJF!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin"
                    className="w-full h-full border-0"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 10. FOOTER */}
      <footer className="bg-[#0B1A30] text-white pt-12 pb-8 border-t-4 border-[#7B1124]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-10 border-b border-white/10">
            
            {/* School Info */}
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded bg-[#7B1124] text-white flex items-center justify-center">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <span className="text-base font-bold text-white">BrightFuture School</span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                Dedicated to academic rigor, character building, and joyful learning from Kindergarten through Grade 12.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-rose-200 mb-3">Quick Links</h4>
              <ul className="space-y-2 text-xs text-slate-300">
                <li><button onClick={() => scrollToSection('hero')} className="hover:text-white transition-colors">Home</button></li>
                <li><button onClick={() => scrollToSection('about')} className="hover:text-white transition-colors">About School</button></li>
                <li><button onClick={() => scrollToSection('programs')} className="hover:text-white transition-colors">Programs Offered</button></li>
                <li><button onClick={() => scrollToSection('academics')} className="hover:text-white transition-colors">Academics</button></li>
                <li><button onClick={() => scrollToSection('gallery')} className="hover:text-white transition-colors">Photo Gallery</button></li>
              </ul>
            </div>

            {/* Academics Links */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-rose-200 mb-3">Programs</h4>
              <ul className="space-y-2 text-xs text-slate-300">
                <li><span>Pre-Primary (Ages 3–5)</span></li>
                <li><span>Primary (Grade 1–5)</span></li>
                <li><span>Middle School (Grade 6–8)</span></li>
                <li><span>Secondary (Grade 9–10)</span></li>
                <li><span>Senior Secondary (Grade 11–12)</span></li>
              </ul>
            </div>

            {/* Contact Details */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-rose-200 mb-3">Campus Desk</h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                Green Valley Road, Knowledge City <br />
                Phone: +91 98765 43210 <br />
                Email: info@brightfutureschool.edu.in
              </p>
              <div className="mt-3 pt-3 border-t border-white/10 flex items-center gap-2">
                <span className="text-[11px] text-slate-400">Affiliation: CBSE Reg. #2026-BF</span>
              </div>
            </div>

          </div>

          {/* Copyright */}
          <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-400">
            <div>
              © 2026 BrightFuture School. All Rights Reserved.
            </div>
            <div className="flex items-center gap-4 text-xs">
              <span className="hover:text-slate-200 cursor-pointer">Privacy Policy</span>
              <span>•</span>
              <span className="hover:text-slate-200 cursor-pointer">Terms of Admission</span>
              <span>•</span>
              <span className="hover:text-slate-200 cursor-pointer">Sitemap</span>
            </div>
          </div>

        </div>
      </footer>

    </div>
  );
};
