import React, { useState, useMemo } from 'react';
import { DemoItem, PlanType } from '../data/demos';
import { PRICING_PLANS } from '../data/content';
import {
  Building2, MapPin, Phone, MessageSquare, ArrowRight,
  ChevronRight, Check, Plus, Minus, Send, Zap,
  CheckCircle2, ChevronDown, CreditCard, Smartphone,
  Heart, Eye, Bell, Copy, HelpCircle, ExternalLink, FileText,
  CheckSquare, MessageCircle, X, Shield, Award, Users, Star,
  Compass, Maximize2, Download, Calendar, DollarSign, Key,
  CheckCircle, Filter, Search, ChevronLeft, Car, ShieldCheck,
  ZapOff, Activity, Trees, Sparkles, Home, Clock,
  Calculator, RotateCcw, Percent
} from 'lucide-react';

const basePrice = PRICING_PLANS.find(p => p.id === 'base')?.price || '₹24,999';
const proPrice = PRICING_PLANS.find(p => p.id === 'pro')?.price || '₹34,999';
const maxPrice = PRICING_PLANS.find(p => p.id === 'max')?.price || '₹54,999';

interface FlatMaxDemoProps {
  demo: DemoItem;
  isMobile: boolean;
  isTablet: boolean;
  onPlanChange?: (plan: PlanType) => void;
}

export interface FlatItem {
  id: string;
  name: string;
  bhk: '1 BHK' | '2 BHK' | '3 BHK' | '4 BHK' | 'Premium';
  bhkLabel: string;
  tag: string;
  location: string;
  area: string;
  carpetArea: string;
  price: string;
  priceNumeric: number; // in Lakhs
  emi: string;
  floor: string;
  facing: string;
  possession: string;
  image: string;
  gallery: string[];
  floorPlan: string;
  specs: {
    beds: number;
    baths: number;
    balconies: number;
    parking: string;
    living: string;
    masterBed: string;
    kitchen: string;
  };
  highlights: string[];
}

const FLAT_LISTINGS: FlatItem[] = [
  {
    id: 'flat-2bhk-solitaire',
    name: 'The Solitaire 2 BHK Luxury Flat',
    bhk: '2 BHK',
    bhkLabel: '2 BHK Luxury',
    tag: 'Ready to Move',
    location: 'Powai, Mumbai',
    area: '1,050 sq.ft',
    carpetArea: '780 sq.ft',
    price: '₹85 Lakh',
    priceNumeric: 85,
    emi: '₹58,200 / mo',
    floor: '12th Floor (Tower A)',
    facing: 'East Facing (Vastu Compliant)',
    possession: 'Ready to Move',
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1000&q=75',
    gallery: [
      'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=800&q=75',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=75',
      'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=800&q=75',
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=75'
    ],
    floorPlan: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1000&q=75',
    specs: {
      beds: 2,
      baths: 2,
      balconies: 1,
      parking: '1 Covered Stilt',
      living: '18.5 x 11.5 ft',
      masterBed: '13.5 x 12.0 ft with En-suite',
      kitchen: '9.5 x 7.5 ft Modular'
    },
    highlights: [
      'Vitrified Italian-finish flooring across living & dining',
      'Large sunlit balcony overlooking landscaped garden',
      'Kohler sanitary fittings with glass shower partition',
      'Zero-brokerage direct developer inventory'
    ]
  },
  {
    id: 'flat-3bhk-imperial',
    name: 'The Imperial 3 BHK Premium Apartment',
    bhk: '3 BHK',
    bhkLabel: '3 BHK Premium',
    tag: 'New Launch',
    location: 'Bandra West, Mumbai',
    area: '1,480 sq.ft',
    carpetArea: '1,120 sq.ft',
    price: '₹1.48 Crore',
    priceNumeric: 148,
    emi: '₹98,500 / mo',
    floor: '18th Floor (Tower B)',
    facing: 'North-East (Sea & Skyline View)',
    possession: 'Dec 2026 (Fast-Track)',
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1000&q=75',
    gallery: [
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=800&q=75',
      'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=800&q=75',
      'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=800&q=75',
      'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=800&q=75'
    ],
    floorPlan: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1000&q=75',
    specs: {
      beds: 3,
      baths: 3,
      balconies: 2,
      parking: '2 Reserved Basement',
      living: '22.0 x 14.0 ft Grand Hall',
      masterBed: '15.0 x 13.0 ft with Walk-in Closet',
      kitchen: '11.0 x 8.5 ft German Modular'
    },
    highlights: [
      'Expansive 180° uninterrupted city skyline views',
      'Master bedroom with private sunset sundeck',
      'Centralized VRV air-conditioning ready conduits',
      'Digital smart lock with biometric access'
    ]
  },
  {
    id: 'flat-1bhk-urban',
    name: 'Urban Crest 1 BHK Smart Flat',
    bhk: '1 BHK',
    bhkLabel: '1 BHK Smart',
    tag: 'Hot Selling',
    location: 'Thane West, Mumbai',
    area: '580 sq.ft',
    carpetArea: '435 sq.ft',
    price: '₹48 Lakh',
    priceNumeric: 48,
    emi: '₹32,800 / mo',
    floor: '8th Floor (Tower C)',
    facing: 'East Facing',
    possession: 'Ready to Move',
    image: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1000&q=75',
    gallery: [
      'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=800&q=75',
      'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=800&q=75',
      'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=800&q=75'
    ],
    floorPlan: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1000&q=75',
    specs: {
      beds: 1,
      baths: 1,
      balconies: 1,
      parking: '1 Bike & Shared Car',
      living: '15.0 x 10.0 ft',
      masterBed: '11.5 x 10.0 ft',
      kitchen: '8.0 x 6.5 ft Modular'
    },
    highlights: [
      'Zero space wastage smart layout for professionals',
      'French windows for maximum natural daylight & ventilation',
      'Prime location 5 mins from upcoming Metro station',
      'RERA approved with pre-sanctioned bank loans'
    ]
  },
  {
    id: 'flat-4bhk-skyline',
    name: 'The Horizon 4 BHK Sky Flat',
    bhk: '4 BHK',
    bhkLabel: '4 BHK Grand',
    tag: 'Ultra Luxury',
    location: 'Worli, Mumbai',
    area: '2,450 sq.ft',
    carpetArea: '1,880 sq.ft',
    price: '₹2.95 Crore',
    priceNumeric: 295,
    emi: '₹1.95 Lakh / mo',
    floor: '24th Floor (Sky Tower)',
    facing: 'West Facing (Arabian Sea View)',
    possession: 'March 2027',
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1000&q=75',
    gallery: [
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=75',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=75',
      'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=800&q=75'
    ],
    floorPlan: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1000&q=75',
    specs: {
      beds: 4,
      baths: 4,
      balconies: 3,
      parking: '3 Covered Basement',
      living: '26.0 x 16.0 ft Double Living Hall',
      masterBed: '17.0 x 14.0 ft Grand Master Suite',
      kitchen: '14.0 x 9.5 ft Chef Kitchen + Dry Yard'
    },
    highlights: [
      'Private keycard elevator opening directly into private foyer',
      'Direct unobstructed Sea Link & sunset views',
      'Separate maid quarters with independent washroom',
      'Italian marble flooring throughout all rooms'
    ]
  },
  {
    id: 'flat-2bhk-silveroak',
    name: 'Silver Oak 2 BHK Garden Facing Flat',
    bhk: '2 BHK',
    bhkLabel: '2 BHK Garden',
    tag: 'Few Units Left',
    location: 'Andheri West, Mumbai',
    area: '980 sq.ft',
    carpetArea: '725 sq.ft',
    price: '₹1.15 Crore',
    priceNumeric: 115,
    emi: '₹76,400 / mo',
    floor: '6th Floor (Wing B)',
    facing: 'North Facing (Garden & Pool)',
    possession: 'Ready to Move',
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1000&q=75',
    gallery: [
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=75',
      'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=800&q=75',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=75'
    ],
    floorPlan: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1000&q=75',
    specs: {
      beds: 2,
      baths: 2,
      balconies: 2,
      parking: '1 Covered Stilt',
      living: '17.5 x 11.5 ft',
      masterBed: '13.0 x 11.5 ft with Balcony',
      kitchen: '9.0 x 7.5 ft Modular'
    },
    highlights: [
      'Podium garden & swimming pool facing balcony',
      'Premium gated community with 3-tier security',
      'Walking distance to DN Nagar Metro & Link Road',
      '100% power backup for all common and flat utilities'
    ]
  },
  {
    id: 'flat-premium-penthouse',
    name: 'The Crown Signature Sky Villa',
    bhk: 'Premium',
    bhkLabel: 'Signature Penthouse',
    tag: 'Exclusive Penthouse',
    location: 'Powai Lakefront, Mumbai',
    area: '3,650 sq.ft',
    carpetArea: '2,780 sq.ft',
    price: '₹4.25 Crore',
    priceNumeric: 425,
    emi: '₹2.82 Lakh / mo',
    floor: '32nd Penthouse Floor',
    facing: 'Lakefront & Green Hills (360° Panoramic)',
    possession: 'Dec 2026',
    image: 'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1000&q=75',
    gallery: [
      'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=800&q=75',
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=800&q=75',
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=75'
    ],
    floorPlan: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1000&q=75',
    specs: {
      beds: 4,
      baths: 5,
      balconies: 3,
      parking: '3 Dedicated Basements',
      living: '30.0 x 18.0 ft Panoramic Penthouse Hall',
      masterBed: '20.0 x 16.0 ft Presidential Suite with Jacuzzi',
      kitchen: '16.0 x 10.0 ft Island Kitchen'
    },
    highlights: [
      'Private 650 sq.ft open sky deck with jacuzzi plunge pool',
      'Private elevator lobby with biometric face recognition',
      'Double-height ceiling in main living & dining area',
      'Full home automation for lighting, climate & curtains'
    ]
  }
];

const FLAT_TYPES_DATA = [
  {
    type: '1 BHK',
    title: '1 BHK Flats',
    desc: 'Compact & efficient modern homes ideal for young working professionals and couples.',
    area: '450 - 620 sq.ft',
    price: 'Starting ₹42 Lakh',
    image: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=600&q=75'
  },
  {
    type: '2 BHK',
    title: '2 BHK Flats',
    desc: 'Thoughtfully designed spacious apartments with balconies for modern growing families.',
    area: '750 - 1,100 sq.ft',
    price: 'Starting ₹85 Lakh',
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=600&q=75'
  },
  {
    type: '3 BHK',
    title: '3 BHK Flats',
    desc: 'Expansive luxury residences with master suites, private balconies & utility spaces.',
    area: '1,250 - 1,750 sq.ft',
    price: 'Starting ₹1.48 Crore',
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=600&q=75'
  },
  {
    type: '4 BHK',
    title: '4 BHK Flats',
    desc: 'Ultra-spacious grand residences with servant quarters, private foyers & panoramic views.',
    area: '2,100 - 3,200 sq.ft',
    price: 'Starting ₹2.85 Crore',
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=600&q=75'
  },
  {
    type: 'Premium',
    title: 'Premium Apartments',
    desc: 'Exclusive sky villas & penthouses with private decks, jacuzzi & concierge services.',
    area: '3,500+ sq.ft',
    price: 'Starting ₹4.20 Crore',
    image: 'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=600&q=75'
  }
];

const LOCATIONS_DATA = [
  {
    id: 'powai',
    name: 'Powai, Mumbai',
    tagline: 'Lakefront & Corporate Hub',
    count: '14 Active Flats',
    startPrice: 'Starting ₹75 Lakh',
    image: 'https://images.unsplash.com/photo-1570125909232-eb263c188f7e?auto=format&fit=crop&w=600&q=75',
    highlights: ['Metro Line 6 (Upcoming)', 'Hiranandani Business Hub', 'Top Schools & Multi-speciality Hospitals']
  },
  {
    id: 'bandra',
    name: 'Bandra West, Mumbai',
    tagline: 'Prime Sea Link Corridor',
    count: '8 Active Flats',
    startPrice: 'Starting ₹1.48 Crore',
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=600&q=75',
    highlights: ['Bandra-Worli Sea Link', 'High-end Dining & Lifestyle', '15 mins to BKC Financial District']
  },
  {
    id: 'thane',
    name: 'Thane West, Mumbai',
    tagline: 'Green Living & Fast Connectivity',
    count: '22 Active Flats',
    startPrice: 'Starting ₹48 Lakh',
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=600&q=75',
    highlights: ['Ghodbunder 8-lane Expressway', 'Viviana & Korum Malls', 'Yeoor Hills Scenic Backdrop']
  },
  {
    id: 'andheri',
    name: 'Andheri West, Mumbai',
    tagline: 'Metro Junction & Entertainment',
    count: '16 Active Flats',
    startPrice: 'Starting ₹88 Lakh',
    image: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=600&q=75',
    highlights: ['Versova-Ghatkopar Metro Line 1', 'Infinity Mall & Lokhandwala Hub', '20 mins to International Airport']
  },
  {
    id: 'worli',
    name: 'Worli, South Mumbai',
    tagline: 'Sea Face & Luxury Residences',
    count: '6 Active Flats',
    startPrice: 'Starting ₹2.50 Crore',
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=600&q=75',
    highlights: ['Coastal Road & Sea Link Entry', 'Four Seasons & St. Regis', 'Direct BKC & South Mumbai Access']
  }
];

const AMENITIES_DATA = [
  {
    icon: Car,
    title: 'Reserved Parking',
    desc: 'Covered stilt and multi-level basement parking with EV fast-charging stations for every wing.'
  },
  {
    icon: ShieldCheck,
    title: '24/7 Security',
    desc: 'Round-the-clock CCTV surveillance, biometric digital access, RFID boom barriers & security personnel.'
  },
  {
    icon: Building2,
    title: 'High-Speed Lifts',
    desc: 'Automatic passenger elevators and dedicated stretcher service lifts with Automatic Rescue Device (ARD).'
  },
  {
    icon: Zap,
    title: '100% Power Backup',
    desc: 'Heavy-duty DG generator backup for common lighting, elevators, water pumps & essential flat points.'
  },
  {
    icon: Activity,
    title: 'Modern Fitness Gym',
    desc: 'Fully air-conditioned fitness club equipped with commercial cardio, weight stations & yoga deck.'
  },
  {
    icon: Trees,
    title: 'Landscaped Gardens',
    desc: 'Lush green podium gardens, reflexology walking tracks, and peaceful senior citizen seating pavilions.'
  },
  {
    icon: Users,
    title: 'Children’s Play Area',
    desc: 'Safe anti-skid rubberized activity zone with modern swings, slides, sandpit & toddler zone.'
  },
  {
    icon: Sparkles,
    title: 'Community Clubhouse',
    desc: 'Air-conditioned resident lounge with table tennis, indoor board games, and celebration banquet hall.'
  }
];

export const FlatMaxDemo: React.FC<FlatMaxDemoProps> = ({ demo, isMobile, onPlanChange }) => {
  // Filter States
  const [selectedLocation, setSelectedLocation] = useState<string>('All Locations');
  const [selectedBhk, setSelectedBhk] = useState<string>('All Types');
  const [selectedBudget, setSelectedBudget] = useState<string>('Any Budget');
  const [selectedBedrooms, setSelectedBedrooms] = useState<string>('Any Beds');

  // Search input state
  const [activeSearchFilter, setActiveSearchFilter] = useState({
    location: 'All Locations',
    bhk: 'All Types',
    budget: 'Any Budget',
    bedrooms: 'Any Beds'
  });

  // Modals
  const [selectedFlatForDetails, setSelectedFlatForDetails] = useState<FlatItem | null>(null);
  const [isVisitModalOpen, setIsVisitModalOpen] = useState(false);
  const [visitFlatContext, setVisitFlatContext] = useState<string>('General Site Visit');
  const [visitSuccess, setVisitSuccess] = useState(false);
  const [isBrochureModalOpen, setIsBrochureModalOpen] = useState(false);
  const [brochureSuccess, setBrochureSuccess] = useState(false);

  // Active Image Gallery Modal index
  const [activeGalleryIdx, setActiveGalleryIdx] = useState(0);

  // Site Visit Form
  const [visitForm, setVisitForm] = useState({
    name: '',
    phone: '',
    email: '',
    bhk: '2 BHK',
    date: '2026-08-30',
    timeSlot: 'Morning (10:30 AM - 12:30 PM)',
    cabPickup: true,
    notes: ''
  });

  // =========================================================================
  // Home Loan Calculator State & Live Calculation
  // =========================================================================
  const [loanAmount, setLoanAmount] = useState<number>(2500000);
  const [loanTenureYears, setLoanTenureYears] = useState<number>(20);
  const [interestRate, setInterestRate] = useState<number>(8.5);

  // Helper for Indian Currency Formatting (₹1,00,000 / ₹25,00,000)
  const formatINR = (val: number): string => {
    return '₹' + Math.round(val).toLocaleString('en-IN');
  };

  // Reducing Balance EMI Formula:
  // EMI = P * r * (1+r)^n / ((1+r)^n - 1)
  const loanSummary = useMemo(() => {
    const P = Math.max(0, Number(loanAmount) || 0);
    const annualRate = Math.max(0, Number(interestRate) || 0);
    const years = Math.max(1, Number(loanTenureYears) || 1);

    const r = (annualRate / 12) / 100;
    const n = years * 12;

    let monthlyEmi = 0;
    if (P === 0) {
      monthlyEmi = 0;
    } else if (r === 0) {
      monthlyEmi = Math.round(P / n);
    } else {
      const factor = Math.pow(1 + r, n);
      monthlyEmi = Math.round((P * r * factor) / (factor - 1));
    }

    const totalAmountPayable = monthlyEmi * n;
    const totalInterestPayable = Math.max(0, totalAmountPayable - P);
    const principalPct = totalAmountPayable > 0 ? Math.round((P / totalAmountPayable) * 100) : 100;
    const interestPct = Math.max(0, 100 - principalPct);

    return {
      principal: P,
      monthlyEmi,
      totalInterest: totalInterestPayable,
      totalAmountPayable,
      loanTenureYears: years,
      interestRate: annualRate,
      principalPct,
      interestPct
    };
  }, [loanAmount, loanTenureYears, interestRate]);

  const handleResetCalculator = () => {
    setLoanAmount(2500000);
    setLoanTenureYears(20);
    setInterestRate(8.5);
  };

  // Handle Search Submission
  const handleApplySearch = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    setActiveSearchFilter({
      location: selectedLocation,
      bhk: selectedBhk,
      budget: selectedBudget,
      bedrooms: selectedBedrooms
    });

    // Scroll to flats section
    const elem = document.getElementById('featured-flats-section');
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleResetSearch = () => {
    setSelectedLocation('All Locations');
    setSelectedBhk('All Types');
    setSelectedBudget('Any Budget');
    setSelectedBedrooms('Any Beds');
    setActiveSearchFilter({
      location: 'All Locations',
      bhk: 'All Types',
      budget: 'Any Budget',
      bedrooms: 'Any Beds'
    });
  };

  // Filtered Flats logic
  const filteredFlats = useMemo(() => {
    return FLAT_LISTINGS.filter(flat => {
      // Location filter
      if (activeSearchFilter.location !== 'All Locations') {
        const locLower = activeSearchFilter.location.toLowerCase();
        if (!flat.location.toLowerCase().includes(locLower.replace(', mumbai', '').trim())) {
          return false;
        }
      }
      // BHK filter
      if (activeSearchFilter.bhk !== 'All Types') {
        if (activeSearchFilter.bhk === 'Premium' && flat.bhk !== 'Premium') return false;
        if (activeSearchFilter.bhk !== 'Premium' && flat.bhk !== activeSearchFilter.bhk) return false;
      }
      // Bedrooms filter
      if (activeSearchFilter.bedrooms !== 'Any Beds') {
        const num = parseInt(activeSearchFilter.bedrooms);
        if (!isNaN(num) && flat.specs.beds < num) return false;
      }
      // Budget filter
      if (activeSearchFilter.budget !== 'Any Budget') {
        if (activeSearchFilter.budget === 'Under ₹50 L' && flat.priceNumeric > 50) return false;
        if (activeSearchFilter.budget === '₹50 L - ₹1 Cr' && (flat.priceNumeric < 50 || flat.priceNumeric > 100)) return false;
        if (activeSearchFilter.budget === '₹1 Cr - ₹2 Cr' && (flat.priceNumeric < 100 || flat.priceNumeric > 200)) return false;
        if (activeSearchFilter.budget === '₹2 Cr+' && flat.priceNumeric < 200) return false;
      }
      return true;
    });
  }, [activeSearchFilter]);

  const handleOpenVisitModal = (contextName?: string) => {
    setVisitFlatContext(contextName || 'General Site Visit');
    if (contextName && contextName.includes('BHK')) {
      if (contextName.includes('1 BHK')) setVisitForm(prev => ({ ...prev, bhk: '1 BHK' }));
      else if (contextName.includes('2 BHK')) setVisitForm(prev => ({ ...prev, bhk: '2 BHK' }));
      else if (contextName.includes('3 BHK')) setVisitForm(prev => ({ ...prev, bhk: '3 BHK' }));
      else if (contextName.includes('4 BHK')) setVisitForm(prev => ({ ...prev, bhk: '4 BHK' }));
      else if (contextName.includes('Signature') || contextName.includes('Premium')) setVisitForm(prev => ({ ...prev, bhk: 'Premium Penthouse' }));
    }
    setVisitSuccess(false);
    setIsVisitModalOpen(true);
  };

  const handleOpenFlatDetails = (flat: FlatItem) => {
    setSelectedFlatForDetails(flat);
    setActiveGalleryIdx(0);
  };

  const handleVisitSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setVisitSuccess(true);
  };

  return (
    <div className="w-full min-h-full bg-white text-slate-900 overflow-x-hidden font-sans select-text">
      
      {/* ========================================================================= */}
      {/* 1. TOP PLAN SWITCHER BAR (Maintains smooth switching across Base/Pro/Max) */}
      {/* ========================================================================= */}
      <div className="sticky top-0 z-50 bg-[#0B1528] text-white px-4 py-2 border-b border-slate-800 shadow-md">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2.5">
            <div className="w-6 h-6 rounded-lg bg-orange-500/20 border border-orange-500/40 flex items-center justify-center text-orange-400">
              <Building2 className="w-3.5 h-3.5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-extrabold text-xs tracking-wide text-white uppercase">Aura Residences</span>
                <span className="text-[10px] bg-orange-500/20 text-orange-300 font-bold px-2 py-0.5 rounded border border-orange-500/30">
                  FLAT LISTING DEMO
                </span>
              </div>
            </div>
          </div>

          {/* Interactive Tier Buttons */}
          <div className="flex items-center gap-1.5 bg-slate-950/80 p-1 rounded-xl border border-slate-800">
            <button
              onClick={() => onPlanChange?.('Base')}
              className="px-3 py-1 rounded-lg text-xs font-bold text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
            >
              <span>BASE</span>
              <span className="opacity-75 text-[10px] ml-1">{basePrice}</span>
            </button>

            <button
              onClick={() => onPlanChange?.('Pro')}
              className="px-3 py-1 rounded-lg text-xs font-bold text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
            >
              <span>PRO</span>
              <span className="opacity-75 text-[10px] ml-1">{proPrice}</span>
            </button>

            <button
              onClick={() => onPlanChange?.('Max')}
              className="px-3 py-1 rounded-lg text-xs font-black bg-orange-500 text-white shadow-md shadow-orange-500/20 flex items-center gap-1"
            >
              <Sparkles className="w-3 h-3" />
              <span>MAX</span>
              <span className="text-[10px] opacity-90">{maxPrice}</span>
            </button>
          </div>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* 2. MAIN FLAT LISTING HEADER                                              */}
      {/* ========================================================================= */}
      <header className="bg-white border-b border-slate-100 sticky top-10 z-40 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            
            {/* Logo / Brand */}
            <a href="#hero" className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#0B1528] flex items-center justify-center text-white shadow-sm">
                <Building2 className="w-5 h-5 text-orange-400" />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-extrabold tracking-tight text-[#0B1528]">
                  Aura Flats
                </span>
                <span className="text-[10px] tracking-wider uppercase font-semibold text-slate-500">
                  Apartments & Residences
                </span>
              </div>
            </a>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-6 text-sm font-semibold text-slate-600">
              <a href="#hero" className="text-[#0B1528] hover:text-orange-500 transition-colors">Home</a>
              <a href="#flat-types" className="hover:text-orange-500 transition-colors">Flat Types</a>
              <a href="#featured-flats-section" className="hover:text-orange-500 transition-colors">Flats</a>
              <a href="#locations" className="hover:text-orange-500 transition-colors">Locations</a>
              <a href="#amenities" className="hover:text-orange-500 transition-colors">Amenities</a>
              <a href="#find-us" className="hover:text-orange-500 transition-colors">Find Us</a>
              <a href="#loan-calculator" className="hover:text-orange-500 transition-colors flex items-center gap-1 text-slate-700">
                <Calculator className="w-3.5 h-3.5 text-[#FF6B00]" />
                <span>Loan EMI</span>
              </a>
            </nav>

            {/* Orange "Book a Visit" Action Button */}
            <div className="flex items-center gap-3">
              <button
                onClick={() => handleOpenVisitModal('Header CTA')}
                className="bg-[#FF6B00] hover:bg-[#E55F00] text-white font-semibold text-sm px-6 py-2.5 rounded-xl shadow-md hover:shadow-lg transition-all focus:outline-none focus:ring-2 focus:ring-orange-400 cursor-pointer active:scale-95 flex items-center gap-2"
              >
                <Calendar className="w-4 h-4" />
                <span>Book a Visit</span>
              </button>
            </div>

          </div>
        </div>
      </header>

      {/* ========================================================================= */}
      {/* 3. HERO SECTION (Apartment-focused with modern building image)          */}
      {/* ========================================================================= */}
      <section id="hero" className="relative bg-slate-50 pt-12 pb-24 lg:pt-16 lg:pb-32 overflow-hidden border-b border-slate-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6 text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-50 border border-orange-200/80 text-orange-700 text-xs font-bold tracking-wide">
                <Sparkles className="w-3.5 h-3.5 text-orange-500" />
                <span>Verified 1, 2, 3 & 4 BHK Luxury Apartments</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#0B1528] tracking-tight leading-[1.12]">
                Find Your <span className="text-[#FF6B00]">Perfect Flat</span>
              </h1>

              <p className="text-slate-600 text-base sm:text-lg leading-relaxed font-normal max-w-xl">
                Explore comfortable, thoughtfully planned, and modern apartments with zero brokerage. Designed for contemporary urban living with premium amenities, verified legal approvals, and prime locations.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <a
                  href="#featured-flats-section"
                  className="bg-[#0B1528] hover:bg-slate-800 text-white font-semibold text-base px-8 py-3.5 rounded-xl shadow-md transition-all flex items-center gap-2"
                >
                  <span>View Flats</span>
                  <ArrowRight className="w-4 h-4 text-orange-400" />
                </a>

                <button
                  onClick={() => handleOpenVisitModal('Hero Primary')}
                  className="bg-[#FF6B00] hover:bg-[#E55F00] text-white font-semibold text-base px-8 py-3.5 rounded-xl shadow-md transition-all flex items-center gap-2 cursor-pointer active:scale-95"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Book a Visit</span>
                </button>
              </div>

              {/* Key Trust Stats */}
              <div className="pt-8 grid grid-cols-3 gap-6 border-t border-slate-200">
                <div>
                  <div className="text-2xl sm:text-3xl font-extrabold text-[#0B1528]">100%</div>
                  <div className="text-xs text-slate-500 font-medium mt-0.5">RERA Verified Flats</div>
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-extrabold text-[#0B1528]">₹0</div>
                  <div className="text-xs text-slate-500 font-medium mt-0.5">Zero Brokerage Fee</div>
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-extrabold text-[#0B1528]">500+</div>
                  <div className="text-xs text-slate-500 font-medium mt-0.5">Happy Flat Owners</div>
                </div>
              </div>
            </div>

            {/* Right Hero Apartment Image */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-slate-200 aspect-[4/3] sm:aspect-[1/1] lg:aspect-[4/5]">
                <img loading="lazy"
                  src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=800&q=75"
                  alt="Modern Apartment Building"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B1528]/80 via-transparent to-transparent"></div>

                {/* Floating Glassmorphism Badge */}
                <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-md p-4 rounded-2xl border border-slate-100 shadow-xl flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-orange-500 text-white flex items-center justify-center font-bold">
                      <Building2 className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-sm font-bold text-[#0B1528]">Aura Skyline Towers</div>
                      <div className="text-xs text-slate-500">Ready Possession & Fast Booking</div>
                    </div>
                  </div>
                  <span className="text-xs font-bold text-orange-600 bg-orange-50 px-2.5 py-1 rounded-lg">
                    1, 2, 3 & 4 BHK
                  </span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 4. SEARCH SECTION (Clean property search bar)                            */}
      {/* ========================================================================= */}
      <section className="relative -mt-12 z-30 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-xl border border-slate-200/90">
          <form onSubmit={handleApplySearch} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 items-end">
            
            {/* 1. Location */}
            <div className="space-y-1.5">
              <label className="text-xs font-bold uppercase tracking-wider text-slate-500 flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-orange-500" />
                <span>Location</span>
              </label>
              <select
                value={selectedLocation}
                onChange={(e) => setSelectedLocation(e.target.value)}
                className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-sm font-semibold text-slate-800 focus:outline-none focus:ring-2 focus:ring-orange-500"
              >
                <option value="All Locations">All Locations</option>
                <option value="Powai, Mumbai">Powai, Mumbai</option>
                <option value="Bandra West, Mumbai">Bandra West, Mumbai</option>
                <option value="Thane West, Mumbai">Thane West, Mumbai</option>
                <option value="Andheri West, Mumbai">Andheri West, Mumbai</option>
                <option value="Worli, Mumbai">Worli, Mumbai</option>
              </select>
            </div>

            {/* 2. Flat Type */}
            <div className="space-y-1.5">
              <label className="text-xs font-bold uppercase tracking-wider text-slate-500 flex items-center gap-1.5">
                <Building2 className="w-3.5 h-3.5 text-orange-500" />
                <span>Flat Type</span>
              </label>
              <select
                value={selectedBhk}
                onChange={(e) => setSelectedBhk(e.target.value)}
                className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-sm font-semibold text-slate-800 focus:outline-none focus:ring-2 focus:ring-orange-500"
              >
                <option value="All Types">All Flat Types</option>
                <option value="1 BHK">1 BHK Flat</option>
                <option value="2 BHK">2 BHK Flat</option>
                <option value="3 BHK">3 BHK Flat</option>
                <option value="4 BHK">4 BHK Flat</option>
                <option value="Premium">Premium Apartment</option>
              </select>
            </div>

            {/* 3. Budget */}
            <div className="space-y-1.5">
              <label className="text-xs font-bold uppercase tracking-wider text-slate-500 flex items-center gap-1.5">
                <DollarSign className="w-3.5 h-3.5 text-orange-500" />
                <span>Budget</span>
              </label>
              <select
                value={selectedBudget}
                onChange={(e) => setSelectedBudget(e.target.value)}
                className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-sm font-semibold text-slate-800 focus:outline-none focus:ring-2 focus:ring-orange-500"
              >
                <option value="Any Budget">Any Budget</option>
                <option value="Under ₹50 L">Under ₹50 Lakh</option>
                <option value="₹50 L - ₹1 Cr">₹50 L - ₹1 Crore</option>
                <option value="₹1 Cr - ₹2 Cr">₹1 Cr - ₹2 Crore</option>
                <option value="₹2 Cr+">₹2 Crore & Above</option>
              </select>
            </div>

            {/* 4. Bedrooms */}
            <div className="space-y-1.5">
              <label className="text-xs font-bold uppercase tracking-wider text-slate-500 flex items-center gap-1.5">
                <Home className="w-3.5 h-3.5 text-orange-500" />
                <span>Bedrooms</span>
              </label>
              <select
                value={selectedBedrooms}
                onChange={(e) => setSelectedBedrooms(e.target.value)}
                className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-sm font-semibold text-slate-800 focus:outline-none focus:ring-2 focus:ring-orange-500"
              >
                <option value="Any Beds">Any Bedrooms</option>
                <option value="1 Beds">1+ Bedroom</option>
                <option value="2 Beds">2+ Bedrooms</option>
                <option value="3 Beds">3+ Bedrooms</option>
                <option value="4 Beds">4+ Bedrooms</option>
              </select>
            </div>

            {/* 5. Search Button */}
            <div>
              <button
                type="submit"
                className="w-full bg-[#FF6B00] hover:bg-[#E55F00] text-white font-bold text-sm py-3 rounded-xl shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-95"
              >
                <Search className="w-4 h-4" />
                <span>Search Flats</span>
              </button>
            </div>

          </form>

          {/* Active Filter Indicators */}
          {(activeSearchFilter.location !== 'All Locations' || activeSearchFilter.bhk !== 'All Types' || activeSearchFilter.budget !== 'Any Budget' || activeSearchFilter.bedrooms !== 'Any Beds') && (
            <div className="mt-4 pt-4 border-t border-slate-100 flex flex-wrap items-center justify-between gap-2 text-xs">
              <div className="flex items-center gap-2 text-slate-600">
                <span className="font-semibold">Filtered by:</span>
                {activeSearchFilter.location !== 'All Locations' && <span className="bg-slate-100 text-slate-800 px-2 py-0.5 rounded font-medium">{activeSearchFilter.location}</span>}
                {activeSearchFilter.bhk !== 'All Types' && <span className="bg-slate-100 text-slate-800 px-2 py-0.5 rounded font-medium">{activeSearchFilter.bhk}</span>}
                {activeSearchFilter.budget !== 'Any Budget' && <span className="bg-slate-100 text-slate-800 px-2 py-0.5 rounded font-medium">{activeSearchFilter.budget}</span>}
                {activeSearchFilter.bedrooms !== 'Any Beds' && <span className="bg-slate-100 text-slate-800 px-2 py-0.5 rounded font-medium">{activeSearchFilter.bedrooms}</span>}
                <span className="text-orange-600 font-bold ml-1">({filteredFlats.length} flats found)</span>
              </div>
              <button
                type="button"
                onClick={handleResetSearch}
                className="text-rose-600 hover:text-rose-700 font-bold flex items-center gap-1 cursor-pointer"
              >
                <X className="w-3.5 h-3.5" />
                <span>Reset Filters</span>
              </button>
            </div>
          )}
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 5. EXPLORE FLAT TYPES SECTION                                            */}
      {/* ========================================================================= */}
      <section id="flat-types" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto space-y-3 mb-14">
            <span className="text-xs font-bold uppercase tracking-widest text-[#FF6B00]">
              Categorized Configurations
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B1528] tracking-tight">
              Explore Flat Types
            </h2>
            <p className="text-slate-600 text-base leading-relaxed">
              Carefully engineered layouts tailored for every stage of your life, from starter smart homes to signature grand penthouses.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {FLAT_TYPES_DATA.map((item, idx) => (
              <div
                key={idx}
                onClick={() => {
                  setSelectedBhk(item.type);
                  setActiveSearchFilter(prev => ({ ...prev, bhk: item.type }));
                  const el = document.getElementById('featured-flats-section');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                className="group bg-slate-50 hover:bg-white rounded-2xl p-4 border border-slate-200/80 hover:border-orange-400 hover:shadow-xl transition-all duration-300 flex flex-col justify-between cursor-pointer"
              >
                <div className="space-y-4">
                  <div className="relative rounded-xl overflow-hidden aspect-[4/3] bg-slate-200">
                    <img loading="lazy"
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-2.5 left-2.5 bg-[#0B1528]/90 text-white text-[11px] font-bold px-2.5 py-1 rounded-lg">
                      {item.type}
                    </div>
                  </div>

                  <div className="space-y-1.5 text-left">
                    <h3 className="text-lg font-extrabold text-[#0B1528] group-hover:text-[#FF6B00] transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs text-slate-500 leading-relaxed line-clamp-2">
                      {item.desc}
                    </p>
                  </div>
                </div>

                <div className="pt-4 mt-4 border-t border-slate-200/60 flex items-center justify-between text-xs">
                  <div className="font-semibold text-slate-700">{item.area}</div>
                  <div className="font-bold text-[#FF6B00]">{item.price}</div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 6. FEATURED FLATS SECTION (Cards with realistic images & key specs)      */}
      {/* ========================================================================= */}
      <section id="featured-flats-section" className="py-20 bg-slate-50 border-y border-slate-200/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
            <div className="space-y-2 text-left">
              <span className="text-xs font-bold uppercase tracking-widest text-[#FF6B00]">
                Verified Inventory
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B1528] tracking-tight">
                Featured Flats
              </h2>
              <p className="text-slate-600 text-sm sm:text-base">
                Handpicked ready-to-move and fast-track residential apartments in Mumbai & Maharashtra.
              </p>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => {
                  setSelectedBhk('All Types');
                  setActiveSearchFilter({ location: 'All Locations', bhk: 'All Types', budget: 'Any Budget', bedrooms: 'Any Beds' });
                }}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all ${
                  activeSearchFilter.bhk === 'All Types'
                    ? 'bg-[#0B1528] text-white'
                    : 'bg-white text-slate-700 hover:bg-slate-200 border border-slate-200'
                }`}
              >
                All ({FLAT_LISTINGS.length})
              </button>
              <button
                onClick={() => {
                  setSelectedBhk('2 BHK');
                  setActiveSearchFilter(prev => ({ ...prev, bhk: '2 BHK' }));
                }}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all ${
                  activeSearchFilter.bhk === '2 BHK'
                    ? 'bg-[#0B1528] text-white'
                    : 'bg-white text-slate-700 hover:bg-slate-200 border border-slate-200'
                }`}
              >
                2 BHK
              </button>
              <button
                onClick={() => {
                  setSelectedBhk('3 BHK');
                  setActiveSearchFilter(prev => ({ ...prev, bhk: '3 BHK' }));
                }}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all ${
                  activeSearchFilter.bhk === '3 BHK'
                    ? 'bg-[#0B1528] text-white'
                    : 'bg-white text-slate-700 hover:bg-slate-200 border border-slate-200'
                }`}
              >
                3 BHK
              </button>
            </div>
          </div>

          {/* Cards Grid */}
          {filteredFlats.length === 0 ? (
            <div className="bg-white rounded-3xl p-12 text-center border border-slate-200 space-y-4">
              <Building2 className="w-12 h-12 text-slate-300 mx-auto" />
              <div className="text-xl font-bold text-slate-800">No flats found matching your filters</div>
              <p className="text-slate-500 text-sm max-w-md mx-auto">
                Try widening your budget or selecting "All Locations" to view all available flats in this demo.
              </p>
              <button
                onClick={handleResetSearch}
                className="px-6 py-2.5 bg-orange-500 text-white font-bold text-sm rounded-xl"
              >
                Reset All Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredFlats.map((flat) => (
                <div
                  key={flat.id}
                  className="bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-2xl hover:border-slate-300 transition-all duration-300 flex flex-col justify-between group"
                >
                  <div>
                    {/* Apartment Image Box */}
                    <div className="relative aspect-[16/10] bg-slate-100 overflow-hidden cursor-pointer" onClick={() => handleOpenFlatDetails(flat)}>
                      <img
                        src={flat.image}
                        alt={flat.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0B1528]/80 via-transparent to-transparent"></div>

                      {/* Tag Badge */}
                      <div className="absolute top-3.5 left-3.5 flex gap-2">
                        <span className="bg-white/95 backdrop-blur-sm text-[#0B1528] text-[10px] font-black uppercase tracking-wider px-3 py-1 rounded-md shadow-xs">
                          {flat.tag}
                        </span>
                        <span className="bg-orange-500 text-white text-[10px] font-black uppercase tracking-wider px-3 py-1 rounded-md shadow-xs">
                          {flat.bhk}
                        </span>
                      </div>

                      {/* Price Tag on Image Bottom */}
                      <div className="absolute bottom-3.5 left-4 right-4 flex items-end justify-between text-white">
                        <div>
                          <div className="text-[11px] text-slate-200 font-medium">All Inclusive Price</div>
                          <div className="text-2xl font-black text-white">{flat.price}</div>
                        </div>
                        <div className="text-right">
                          <span className="text-[11px] bg-slate-900/80 px-2 py-1 rounded text-orange-300 font-semibold">
                            EMI {flat.emi}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Content Details */}
                    <div className="p-6 space-y-4 text-left">
                      <div>
                        <h3 
                          onClick={() => handleOpenFlatDetails(flat)}
                          className="text-xl font-extrabold text-[#0B1528] group-hover:text-[#FF6B00] transition-colors line-clamp-1 cursor-pointer"
                        >
                          {flat.name}
                        </h3>
                        <div className="flex items-center gap-1.5 text-xs text-slate-500 font-medium mt-1">
                          <MapPin className="w-3.5 h-3.5 text-orange-500 shrink-0" />
                          <span>{flat.location}</span>
                        </div>
                      </div>

                      {/* Flat Spec Pills */}
                      <div className="grid grid-cols-3 gap-2 py-3 border-y border-slate-100 text-xs text-slate-700">
                        <div className="bg-slate-50 p-2 rounded-xl text-center">
                          <div className="text-[10px] text-slate-400 font-bold uppercase">Config</div>
                          <div className="font-bold text-[#0B1528] mt-0.5">{flat.bhk}</div>
                        </div>
                        <div className="bg-slate-50 p-2 rounded-xl text-center">
                          <div className="text-[10px] text-slate-400 font-bold uppercase">Super Area</div>
                          <div className="font-bold text-[#0B1528] mt-0.5">{flat.area}</div>
                        </div>
                        <div className="bg-slate-50 p-2 rounded-xl text-center">
                          <div className="text-[10px] text-slate-400 font-bold uppercase">Carpet</div>
                          <div className="font-bold text-[#0B1528] mt-0.5">{flat.carpetArea}</div>
                        </div>
                      </div>

                      {/* Specs Row */}
                      <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-slate-600 font-medium">
                        <span className="flex items-center gap-1">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                          {flat.specs.beds} Beds • {flat.specs.baths} Baths
                        </span>
                        <span className="flex items-center gap-1">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                          {flat.specs.parking}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="p-6 pt-0 grid grid-cols-2 gap-3">
                    <button
                      onClick={() => handleOpenFlatDetails(flat)}
                      className="w-full py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs rounded-xl transition-all cursor-pointer text-center"
                    >
                      View Details
                    </button>
                    <button
                      onClick={() => handleOpenVisitModal(flat.name)}
                      className="w-full py-2.5 bg-[#FF6B00] hover:bg-[#E55F00] text-white font-bold text-xs rounded-xl transition-all shadow-sm hover:shadow-md cursor-pointer flex items-center justify-center gap-1.5"
                    >
                      <Calendar className="w-3.5 h-3.5" />
                      <span>Book a Visit</span>
                    </button>
                  </div>

                </div>
              ))}
            </div>
          )}

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 7. POPULAR FLAT LOCATIONS SECTION                                        */}
      {/* ========================================================================= */}
      <section id="locations" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto space-y-3 mb-14">
            <span className="text-xs font-bold uppercase tracking-widest text-[#FF6B00]">
              Strategic Residential Corridors
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B1528] tracking-tight">
              Popular Flat Locations
            </h2>
            <p className="text-slate-600 text-base leading-relaxed">
              Explore Maharashtra's most connected residential destinations with unmatched infrastructure, educational institutions, and employment hubs.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {LOCATIONS_DATA.map((loc) => (
              <div
                key={loc.id}
                onClick={() => {
                  setSelectedLocation(loc.name);
                  setActiveSearchFilter(prev => ({ ...prev, location: loc.name }));
                  const el = document.getElementById('featured-flats-section');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                className="group bg-slate-50 hover:bg-white rounded-3xl overflow-hidden border border-slate-200 hover:border-orange-400 hover:shadow-xl transition-all duration-300 flex flex-col justify-between cursor-pointer text-left"
              >
                <div>
                  <div className="relative aspect-[16/10] bg-slate-200 overflow-hidden">
                    <img loading="lazy"
                      src={loc.image}
                      alt={loc.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0B1528]/85 via-[#0B1528]/20 to-transparent"></div>
                    <div className="absolute top-3.5 right-3.5 bg-white/90 text-[#0B1528] font-bold text-[11px] px-2.5 py-1 rounded-md">
                      {loc.count}
                    </div>
                    <div className="absolute bottom-3.5 left-4 right-4 text-white">
                      <h3 className="text-xl font-black">{loc.name}</h3>
                      <div className="text-xs text-orange-300 font-semibold">{loc.tagline}</div>
                    </div>
                  </div>

                  <div className="p-6 space-y-3">
                    <div className="text-xs font-bold text-[#0B1528] uppercase tracking-wide">
                      Connectivity Highlights:
                    </div>
                    <div className="space-y-1.5">
                      {loc.highlights.map((h, i) => (
                        <div key={i} className="flex items-center gap-2 text-xs text-slate-600">
                          <Check className="w-3.5 h-3.5 text-orange-500 shrink-0" />
                          <span>{h}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="p-6 pt-0 flex items-center justify-between border-t border-slate-100 mt-2">
                  <span className="text-xs font-bold text-[#FF6B00]">{loc.startPrice}</span>
                  <span className="text-xs font-bold text-slate-700 group-hover:text-[#FF6B00] flex items-center gap-1 transition-colors">
                    <span>Explore Flats</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 8. APARTMENT AMENITIES SECTION                                           */}
      {/* ========================================================================= */}
      <section id="amenities" className="py-20 bg-slate-50 border-y border-slate-200/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto space-y-3 mb-14">
            <span className="text-xs font-bold uppercase tracking-widest text-[#FF6B00]">
              Lifestyle & Convenience
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B1528] tracking-tight">
              Modern Apartment Amenities
            </h2>
            <p className="text-slate-600 text-base leading-relaxed">
              Every residence is backed by world-class infrastructure designed for safety, comfort, health, and peaceful family living.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {AMENITIES_DATA.map((amenity, idx) => {
              const Icon = amenity.icon;
              return (
                <div
                  key={idx}
                  className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs hover:shadow-lg hover:border-orange-300 transition-all duration-300 text-left space-y-3.5"
                >
                  <div className="w-12 h-12 rounded-xl bg-orange-50 text-[#FF6B00] flex items-center justify-center border border-orange-100">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-[#0B1528]">
                    {amenity.title}
                  </h3>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    {amenity.desc}
                  </p>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 9. CTA SECTION                                                           */}
      {/* ========================================================================= */}
      <section id="contact-visit" className="py-20 bg-[#0B1528] text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-6">
          <span className="text-xs font-bold uppercase tracking-widest text-orange-400">
            Complimentary VIP Site Visit
          </span>
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white">
            Find a Flat That Fits Your Lifestyle
          </h2>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto font-normal">
            Schedule an in-person site visit to inspect furnished show flats, review architectural floor plans, and receive transparent pricing with zero brokerage.
          </p>

          <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={() => handleOpenVisitModal('Bottom CTA')}
              className="bg-[#FF6B00] hover:bg-[#E55F00] text-white font-bold text-base px-8 py-3.5 rounded-xl shadow-lg transition-all flex items-center gap-2 cursor-pointer active:scale-95"
            >
              <Calendar className="w-5 h-5" />
              <span>Book a Visit</span>
            </button>

            <button
              onClick={() => {
                setIsBrochureModalOpen(true);
                setBrochureSuccess(false);
              }}
              className="bg-white/10 hover:bg-white/20 text-white font-semibold text-base px-8 py-3.5 rounded-xl border border-white/20 transition-all flex items-center gap-2 cursor-pointer"
            >
              <Download className="w-5 h-5 text-orange-400" />
              <span>Download Brochure</span>
            </button>
          </div>

          <div className="pt-8 flex flex-wrap items-center justify-center gap-8 text-xs text-slate-400">
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-emerald-400" />
              <span>Free AC Cab Pickup & Drop</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-emerald-400" />
              <span>RERA Registered Project</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-emerald-400" />
              <span>Pre-Approved Home Loans</span>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 9.5 LOCATION & MAP SECTION                                               */}
      {/* ========================================================================= */}
      <section id="find-us" className="py-20 bg-slate-50 border-t border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-[#FF6B00]">
              Our Location
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B1528] tracking-tight">
              Find Us
            </h2>
            <p className="text-slate-600 text-base leading-relaxed">
              Visit our location in Titwala, Maharashtra
            </p>
          </div>

          {/* Container Card */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 lg:p-10 border border-slate-200 shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Info Column */}
            <div className="lg:col-span-5 space-y-6 text-left">
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-50 border border-orange-200 text-orange-700 text-xs font-bold">
                  <MapPin className="w-3.5 h-3.5 text-orange-500" />
                  <span>Site & Sales Office</span>
                </div>

                <h3 className="text-2xl font-extrabold text-[#0B1528] tracking-tight">
                  Aura Flats Experience Centre
                </h3>

                <div className="space-y-4 text-sm text-slate-600">
                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-xl bg-slate-100 text-[#0B1528] flex items-center justify-center shrink-0 mt-0.5 border border-slate-200/60">
                      <MapPin className="w-4 h-4 text-[#FF6B00]" />
                    </div>
                    <div>
                      <div className="font-bold text-slate-900">Location</div>
                      <div className="text-slate-600 mt-0.5">Titwala, Kalyan, Maharashtra, India</div>
                      <div className="font-bold text-[#0B1528] mt-0.5">PIN: 421605</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-xl bg-slate-100 text-[#0B1528] flex items-center justify-center shrink-0 mt-0.5 border border-slate-200/60">
                      <Clock className="w-4 h-4 text-[#FF6B00]" />
                    </div>
                    <div>
                      <div className="font-bold text-slate-900">Visiting Hours</div>
                      <div className="text-slate-600 mt-0.5">Monday to Sunday: 9:30 AM – 7:30 PM</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-xl bg-slate-100 text-[#0B1528] flex items-center justify-center shrink-0 mt-0.5 border border-slate-200/60">
                      <Phone className="w-4 h-4 text-[#FF6B00]" />
                    </div>
                    <div>
                      <div className="font-bold text-slate-900">Contact Number</div>
                      <div className="text-slate-600 mt-0.5">+91 91372 83810</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-wrap items-center gap-3">
                <a
                  href="https://www.google.com/maps/search/?api=1&query=Titwala,+Maharashtra+421605"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#FF6B00] hover:bg-[#E55F00] text-white font-semibold text-sm px-6 py-3 rounded-xl shadow-md hover:shadow-lg transition-all flex items-center gap-2 cursor-pointer active:scale-95"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span>Open in Google Maps</span>
                </a>

                <button
                  onClick={() => handleOpenVisitModal('Titwala Site Office Visit')}
                  className="bg-[#0B1528] hover:bg-slate-800 text-white font-semibold text-sm px-6 py-3 rounded-xl shadow-sm transition-all flex items-center gap-2 cursor-pointer active:scale-95"
                >
                  <Calendar className="w-4 h-4 text-orange-400" />
                  <span>Schedule Visit</span>
                </button>
              </div>
            </div>

            {/* Right Map Iframe */}
            <div className="lg:col-span-7">
              <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-sm bg-slate-100 aspect-[16/10] sm:aspect-[16/9] lg:aspect-[4/3] relative">
                <iframe
                  title="Aura Flats Location Map - Titwala, Maharashtra"
                  src="https://maps.google.com/maps?q=Titwala,+Maharashtra+421605&t=&z=14&ie=UTF8&iwloc=&output=embed"
                  className="w-full h-full border-0"
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 9.6 HOME LOAN CALCULATOR SECTION                                         */}
      {/* ========================================================================= */}
      <section id="loan-calculator" className="py-20 bg-white border-t border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-[#FF6B00]">
              Financial Planning
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B1528] tracking-tight">
              Home Loan Calculator
            </h2>
            <p className="text-slate-600 text-base leading-relaxed">
              Estimate your monthly EMI and total loan cost
            </p>
          </div>

          {/* Calculator Card Container */}
          <div className="bg-slate-50 rounded-3xl p-6 sm:p-8 lg:p-10 border border-slate-200 shadow-sm">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
              
              {/* Left Column: 3 Input Sections */}
              <div className="lg:col-span-7 space-y-8 text-left">
                
                {/* 1. Loan Amount */}
                <div className="bg-white p-5 sm:p-6 rounded-2xl border border-slate-200/90 shadow-xs space-y-4">
                  <div className="flex items-center justify-between gap-4 flex-wrap">
                    <label htmlFor="loan-amount-input" className="font-bold text-slate-900 text-sm flex items-center gap-2">
                      <DollarSign className="w-4 h-4 text-[#FF6B00]" />
                      <span>1. Loan Amount</span>
                    </label>
                    <div className="relative">
                      <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 font-bold text-sm">₹</span>
                      <input
                        id="loan-amount-input"
                        type="number"
                        min="100000"
                        max="50000000"
                        step="50000"
                        value={loanAmount}
                        onChange={(e) => setLoanAmount(Math.max(0, Number(e.target.value)))}
                        className="w-40 sm:w-48 pl-7 pr-3 py-2 text-right font-extrabold text-[#0B1528] bg-slate-50 border border-slate-300 rounded-xl text-base focus:outline-none focus:ring-2 focus:ring-[#FF6B00] focus:bg-white transition-all"
                      />
                    </div>
                  </div>

                  {/* Slider */}
                  <div className="space-y-1.5 pt-1">
                    <input
                      type="range"
                      min="500000"
                      max="30000000"
                      step="50000"
                      value={loanAmount}
                      onChange={(e) => setLoanAmount(Number(e.target.value))}
                      className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#FF6B00]"
                    />
                    <div className="flex justify-between text-[11px] font-semibold text-slate-400">
                      <span>₹5 Lakh</span>
                      <span>₹1.5 Crore</span>
                      <span>₹3 Crore</span>
                    </div>
                  </div>

                  {/* Quick Preset Chips */}
                  <div className="flex flex-wrap gap-2 pt-1">
                    {[
                      { label: '₹15 Lakh', val: 1500000 },
                      { label: '₹25 Lakh', val: 2500000 },
                      { label: '₹50 Lakh', val: 5000000 },
                      { label: '₹75 Lakh', val: 7500000 },
                      { label: '₹1 Crore', val: 10000000 },
                      { label: '₹1.5 Crore', val: 15000000 },
                    ].map((chip) => (
                      <button
                        key={chip.label}
                        type="button"
                        onClick={() => setLoanAmount(chip.val)}
                        className={`text-xs font-semibold px-3 py-1.5 rounded-lg border transition-all cursor-pointer ${
                          loanAmount === chip.val
                            ? 'bg-[#0B1528] text-white border-[#0B1528]'
                            : 'bg-slate-50 text-slate-600 border-slate-200 hover:bg-slate-100'
                        }`}
                      >
                        {chip.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* 2. Loan Tenure */}
                <div className="bg-white p-5 sm:p-6 rounded-2xl border border-slate-200/90 shadow-xs space-y-4">
                  <div className="flex items-center justify-between gap-4 flex-wrap">
                    <label htmlFor="loan-tenure-input" className="font-bold text-slate-900 text-sm flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-[#FF6B00]" />
                      <span>2. Loan Tenure</span>
                    </label>
                    <div className="flex items-center gap-1.5">
                      <input
                        id="loan-tenure-input"
                        type="number"
                        min="1"
                        max="30"
                        value={loanTenureYears}
                        onChange={(e) => setLoanTenureYears(Math.min(30, Math.max(1, Number(e.target.value))))}
                        className="w-20 pl-3 pr-2 py-2 text-right font-extrabold text-[#0B1528] bg-slate-50 border border-slate-300 rounded-xl text-base focus:outline-none focus:ring-2 focus:ring-[#FF6B00] focus:bg-white transition-all"
                      />
                      <span className="text-slate-600 font-bold text-sm">Years</span>
                    </div>
                  </div>

                  {/* Slider */}
                  <div className="space-y-1.5 pt-1">
                    <input
                      type="range"
                      min="1"
                      max="30"
                      step="1"
                      value={loanTenureYears}
                      onChange={(e) => setLoanTenureYears(Number(e.target.value))}
                      className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#FF6B00]"
                    />
                    <div className="flex justify-between text-[11px] font-semibold text-slate-400">
                      <span>1 Year</span>
                      <span>15 Years</span>
                      <span>30 Years</span>
                    </div>
                  </div>

                  {/* Tenure Preset Options */}
                  <div className="grid grid-cols-3 sm:grid-cols-6 gap-2 pt-1">
                    {[5, 10, 15, 20, 25, 30].map((yrs) => (
                      <button
                        key={yrs}
                        type="button"
                        onClick={() => setLoanTenureYears(yrs)}
                        className={`text-xs font-semibold py-2 px-1 rounded-xl border text-center transition-all cursor-pointer ${
                          loanTenureYears === yrs
                            ? 'bg-[#FF6B00] text-white border-[#FF6B00] shadow-xs'
                            : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                        }`}
                      >
                        {yrs} Years
                      </button>
                    ))}
                  </div>
                </div>

                {/* 3. Interest Rate */}
                <div className="bg-white p-5 sm:p-6 rounded-2xl border border-slate-200/90 shadow-xs space-y-4">
                  <div className="flex items-center justify-between gap-4 flex-wrap">
                    <label htmlFor="interest-rate-input" className="font-bold text-slate-900 text-sm flex items-center gap-2">
                      <Percent className="w-4 h-4 text-[#FF6B00]" />
                      <span>3. Interest Rate (% p.a.)</span>
                    </label>
                    <div className="relative">
                      <input
                        id="interest-rate-input"
                        type="number"
                        min="1"
                        max="20"
                        step="0.05"
                        value={interestRate}
                        onChange={(e) => setInterestRate(Math.max(0.1, Number(e.target.value)))}
                        className="w-28 pl-3 pr-7 py-2 text-right font-extrabold text-[#0B1528] bg-slate-50 border border-slate-300 rounded-xl text-base focus:outline-none focus:ring-2 focus:ring-[#FF6B00] focus:bg-white transition-all"
                      />
                      <span className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 font-bold text-sm">%</span>
                    </div>
                  </div>

                  {/* Slider */}
                  <div className="space-y-1.5 pt-1">
                    <input
                      type="range"
                      min="6.5"
                      max="15.0"
                      step="0.1"
                      value={interestRate}
                      onChange={(e) => setInterestRate(Number(e.target.value))}
                      className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#FF6B00]"
                    />
                    <div className="flex justify-between text-[11px] font-semibold text-slate-400">
                      <span>6.5%</span>
                      <span>10.0%</span>
                      <span>15.0%</span>
                    </div>
                  </div>

                  {/* Rate Presets */}
                  <div className="flex flex-wrap gap-2 pt-1">
                    {[
                      { label: '7.5%', val: 7.5 },
                      { label: '8.0%', val: 8.0 },
                      { label: '8.5% (Avg)', val: 8.5 },
                      { label: '9.0%', val: 9.0 },
                      { label: '9.5%', val: 9.5 },
                    ].map((chip) => (
                      <button
                        key={chip.label}
                        type="button"
                        onClick={() => setInterestRate(chip.val)}
                        className={`text-xs font-semibold px-3 py-1.5 rounded-lg border transition-all cursor-pointer ${
                          interestRate === chip.val
                            ? 'bg-[#0B1528] text-white border-[#0B1528]'
                            : 'bg-slate-50 text-slate-600 border-slate-200 hover:bg-slate-100'
                        }`}
                      >
                        {chip.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Reset Action */}
                <div className="flex items-center justify-between pt-1">
                  <button
                    type="button"
                    onClick={handleResetCalculator}
                    className="inline-flex items-center gap-2 text-xs font-bold text-slate-500 hover:text-[#0B1528] bg-white hover:bg-slate-100 px-4 py-2 rounded-xl border border-slate-200 transition-colors cursor-pointer"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                    <span>Reset Calculator</span>
                  </button>

                  <span className="text-[11px] text-slate-400 italic">
                    Calculated using standard reducing-balance EMI formula
                  </span>
                </div>

              </div>

              {/* Right Column: Live Results Display */}
              <div className="lg:col-span-5 space-y-6 text-left">
                
                {/* Result Card */}
                <div className="bg-[#0B1528] text-white rounded-3xl p-6 sm:p-8 border border-slate-800 shadow-xl space-y-6 relative overflow-hidden">
                  
                  {/* Subtle top decoration */}
                  <div className="flex items-center justify-between border-b border-slate-800/80 pb-4">
                    <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-orange-400">
                      <Calculator className="w-4 h-4" />
                      <span>Calculation Summary</span>
                    </div>
                    <span className="text-[11px] px-2.5 py-0.5 rounded-full bg-orange-500/20 text-orange-300 font-bold border border-orange-500/30">
                      Live Estimate
                    </span>
                  </div>

                  {/* Monthly EMI Highlight Box */}
                  <div className="bg-slate-900/90 rounded-2xl p-5 border border-slate-800 space-y-1.5">
                    <div className="text-xs font-semibold text-slate-400 uppercase tracking-wide">
                      Monthly EMI
                    </div>
                    <div className="text-3xl sm:text-4xl font-extrabold text-[#FF6B00] tracking-tight">
                      {formatINR(loanSummary.monthlyEmi)}
                    </div>
                    <div className="text-[11px] text-slate-400">
                      Payable every month for {loanSummary.loanTenureYears} years ({loanSummary.loanTenureYears * 12} instalments)
                    </div>
                  </div>

                  {/* 4-Item Grid Breakdown */}
                  <div className="grid grid-cols-2 gap-4">
                    
                    {/* Principal Amount */}
                    <div className="bg-slate-900/60 p-4 rounded-xl border border-slate-800/60 space-y-1">
                      <div className="text-[11px] font-bold text-slate-400 uppercase">
                        Principal Amount
                      </div>
                      <div className="text-lg font-extrabold text-white">
                        {formatINR(loanSummary.principal)}
                      </div>
                      <div className="text-[10px] text-slate-400 font-medium">
                        {loanSummary.principalPct}% of total
                      </div>
                    </div>

                    {/* Total Interest */}
                    <div className="bg-slate-900/60 p-4 rounded-xl border border-slate-800/60 space-y-1">
                      <div className="text-[11px] font-bold text-slate-400 uppercase">
                        Total Interest
                      </div>
                      <div className="text-lg font-extrabold text-orange-300">
                        {formatINR(loanSummary.totalInterest)}
                      </div>
                      <div className="text-[10px] text-slate-400 font-medium">
                        {loanSummary.interestPct}% of total
                      </div>
                    </div>

                    {/* Total Amount Payable */}
                    <div className="bg-slate-900/60 p-4 rounded-xl border border-slate-800/60 space-y-1 col-span-2">
                      <div className="flex items-center justify-between">
                        <span className="text-[11px] font-bold text-slate-400 uppercase">
                          Total Amount Payable
                        </span>
                        <span className="text-[10px] text-slate-400">
                          (Principal + Interest)
                        </span>
                      </div>
                      <div className="text-xl font-extrabold text-white">
                        {formatINR(loanSummary.totalAmountPayable)}
                      </div>
                    </div>

                    {/* Tenure & Rate summary row */}
                    <div className="bg-slate-900/40 p-3 rounded-xl border border-slate-800/40 space-y-0.5">
                      <div className="text-[10px] font-semibold text-slate-400 uppercase">Loan Tenure</div>
                      <div className="text-xs font-bold text-white">{loanSummary.loanTenureYears} Years</div>
                    </div>

                    <div className="bg-slate-900/40 p-3 rounded-xl border border-slate-800/40 space-y-0.5">
                      <div className="text-[10px] font-semibold text-slate-400 uppercase">Interest Rate</div>
                      <div className="text-xs font-bold text-white">{loanSummary.interestRate}% p.a.</div>
                    </div>

                  </div>

                  {/* Optional Visual: Principal vs Interest Breakdown Progress Bar */}
                  <div className="space-y-2 pt-2 border-t border-slate-800/80">
                    <div className="flex justify-between text-xs font-bold">
                      <span className="text-slate-300">Principal vs. Interest Ratio</span>
                      <span className="text-slate-400">{loanSummary.principalPct}% / {loanSummary.interestPct}%</span>
                    </div>

                    {/* Segmented Bar */}
                    <div className="w-full h-3 bg-slate-800 rounded-full overflow-hidden flex">
                      <div
                        style={{ width: `${loanSummary.principalPct}%` }}
                        className="bg-blue-500 h-full transition-all duration-300"
                        title={`Principal: ${loanSummary.principalPct}%`}
                      />
                      <div
                        style={{ width: `${loanSummary.interestPct}%` }}
                        className="bg-[#FF6B00] h-full transition-all duration-300"
                        title={`Interest: ${loanSummary.interestPct}%`}
                      />
                    </div>

                    {/* Legend */}
                    <div className="flex items-center justify-between text-[11px] text-slate-400 pt-1">
                      <div className="flex items-center gap-1.5">
                        <span className="w-2.5 h-2.5 rounded-full bg-blue-500 shrink-0" />
                        <span>Principal ({formatINR(loanSummary.principal)})</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <span className="w-2.5 h-2.5 rounded-full bg-[#FF6B00] shrink-0" />
                        <span>Interest ({formatINR(loanSummary.totalInterest)})</span>
                      </div>
                    </div>
                  </div>

                  {/* Partner Bank Assistance */}
                  <div className="pt-2">
                    <button
                      type="button"
                      onClick={() => handleOpenVisitModal('Home Loan Assistance Consultation')}
                      className="w-full bg-[#FF6B00] hover:bg-[#E55F00] text-white font-bold text-sm py-3.5 px-4 rounded-xl shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-98"
                    >
                      <CreditCard className="w-4 h-4" />
                      <span>Get Loan Pre-Approval Assistance</span>
                    </button>
                    <div className="text-[10px] text-center text-slate-400 mt-2">
                      Partnered with SBI, HDFC, ICICI, Axis Bank & Bank of Baroda for zero processing fee offers.
                    </div>
                  </div>

                </div>

              </div>

            </div>
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 10. CLEAN PROFESSIONAL FOOTER                                            */}
      {/* ========================================================================= */}
      <footer className="bg-[#070D18] text-slate-400 py-12 border-t border-slate-800 text-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8 text-left">
            
            {/* Col 1: Brand */}
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-white font-extrabold text-base">
                <Building2 className="w-5 h-5 text-orange-400" />
                <span>Aura Flats</span>
              </div>
              <p className="text-slate-500 leading-relaxed">
                Dedicated flat and apartment booking platform offering verified 1, 2, 3 & 4 BHK residences across prime residential corridors.
              </p>
              <div className="text-[11px] text-slate-500">
                RERA ID: P51800034982 / PRM/KA/2026/0049
              </div>
            </div>

            {/* Col 2: Flat Configurations */}
            <div className="space-y-2.5">
              <div className="text-white font-bold uppercase tracking-wider text-[11px]">Flat Types & Tools</div>
              <div className="space-y-1.5 flex flex-col">
                <a href="#flat-types" className="hover:text-white transition-colors">1 BHK Smart Flats</a>
                <a href="#flat-types" className="hover:text-white transition-colors">2 BHK Luxury Flats</a>
                <a href="#flat-types" className="hover:text-white transition-colors">3 BHK Royale Apartments</a>
                <a href="#flat-types" className="hover:text-white transition-colors">4 BHK Sky Residences</a>
                <a href="#loan-calculator" className="text-orange-400 hover:text-orange-300 font-semibold transition-colors flex items-center gap-1">
                  <span>Home Loan EMI Calculator</span>
                </a>
                <a href="#find-us" className="text-slate-300 hover:text-white transition-colors">
                  <span>Visit Titwala Office (Map)</span>
                </a>
              </div>
            </div>

            {/* Col 3: Key Locations */}
            <div className="space-y-2.5">
              <div className="text-white font-bold uppercase tracking-wider text-[11px]">Key Locations</div>
              <div className="space-y-1.5 flex flex-col">
                <a href="#locations" className="hover:text-white transition-colors">Powai Lakefront, Mumbai</a>
                <a href="#locations" className="hover:text-white transition-colors">Bandra West, Mumbai</a>
                <a href="#locations" className="hover:text-white transition-colors">Thane West Expressway</a>
                <a href="#locations" className="hover:text-white transition-colors">Andheri West & Link Road</a>
                <a href="#locations" className="hover:text-white transition-colors">Worli Sea Face</a>
              </div>
            </div>

            {/* Col 4: Sales Office Contact */}
            <div className="space-y-2.5">
              <div className="text-white font-bold uppercase tracking-wider text-[11px]">Sales Office</div>
              <p className="text-slate-400 leading-relaxed">
                Aura Experience Centre, Titwala, Kalyan, Maharashtra, India - 421605
              </p>
              <div className="pt-1 text-slate-300 font-semibold space-y-1">
                <div>Phone: +91 91372 83810</div>
                <div>Email: sales@auraflats.com</div>
                <div>Hours: 9:30 AM - 7:30 PM (All 7 Days)</div>
              </div>
            </div>

          </div>

          <div className="pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-500 text-[11px]">
            <div>© 2026 Aura Flats & Residences. All rights reserved. RERA Registered.</div>
            <div className="flex gap-4">
              <span>Privacy Policy</span>
              <span>Terms of Service</span>
              <span>RERA Disclaimer</span>
            </div>
          </div>
        </div>
      </footer>

      {/* ========================================================================= */}
      {/* 11. SITE VISIT / BOOK A VISIT MODAL                                      */}
      {/* ========================================================================= */}
      {isVisitModalOpen && (
        <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl relative border border-slate-200 text-left my-8">
            <button
              onClick={() => setIsVisitModalOpen(false)}
              className="absolute top-5 right-5 p-2 text-slate-400 hover:text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-full transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {visitSuccess ? (
              <div className="text-center py-6 space-y-4">
                <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="text-2xl font-black text-[#0B1528]">Site Visit Confirmed!</h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Thank you, <strong>{visitForm.name || 'Valued Buyer'}</strong>. Your VIP Site Visit appointment has been booked for <strong>{visitForm.date}</strong> ({visitForm.timeSlot}).
                </p>
                {visitForm.cabPickup && (
                  <div className="bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs p-3.5 rounded-xl text-left">
                    <span className="font-bold">Complimentary AC Cab Booked:</span> Our concierge will call {visitForm.phone || 'you'} 2 hours prior with the driver's contact details and live cab tracking.
                  </div>
                )}
                <div className="pt-2">
                  <button
                    onClick={() => setIsVisitModalOpen(false)}
                    className="w-full py-3 bg-[#0B1528] text-white font-bold text-sm rounded-xl"
                  >
                    Done & Close
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleVisitSubmit} className="space-y-4">
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-[#FF6B00]">Aura Residences</div>
                  <h3 className="text-2xl font-black text-[#0B1528]">Book a Show Flat Visit</h3>
                  <p className="text-xs text-slate-500 mt-1">
                    Inspecting: <span className="font-semibold text-slate-800">{visitFlatContext}</span>
                  </p>
                </div>

                <div className="space-y-3">
                  <div>
                    <label className="text-xs font-bold text-slate-700 block mb-1">Your Full Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Rahul Sharma"
                      value={visitForm.name}
                      onChange={(e) => setVisitForm({ ...visitForm, name: e.target.value })}
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-sm font-medium text-slate-900 focus:outline-none focus:ring-2 focus:ring-orange-500"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="text-xs font-bold text-slate-700 block mb-1">Mobile Number *</label>
                      <input
                        type="tel"
                        required
                        placeholder="+91 98765 43210"
                        value={visitForm.phone}
                        onChange={(e) => setVisitForm({ ...visitForm, phone: e.target.value })}
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-sm font-medium text-slate-900 focus:outline-none focus:ring-2 focus:ring-orange-500"
                      />
                    </div>
                    <div>
                      <label className="text-xs font-bold text-slate-700 block mb-1">Email Address</label>
                      <input
                        type="email"
                        placeholder="rahul@example.com"
                        value={visitForm.email}
                        onChange={(e) => setVisitForm({ ...visitForm, email: e.target.value })}
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-sm font-medium text-slate-900 focus:outline-none focus:ring-2 focus:ring-orange-500"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="text-xs font-bold text-slate-700 block mb-1">Preferred Flat Type</label>
                      <select
                        value={visitForm.bhk}
                        onChange={(e) => setVisitForm({ ...visitForm, bhk: e.target.value })}
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-sm font-medium text-slate-900 focus:outline-none focus:ring-2 focus:ring-orange-500"
                      >
                        <option value="1 BHK">1 BHK Flat</option>
                        <option value="2 BHK">2 BHK Flat</option>
                        <option value="3 BHK">3 BHK Flat</option>
                        <option value="4 BHK">4 BHK Flat</option>
                        <option value="Premium Penthouse">Premium Penthouse</option>
                      </select>
                    </div>
                    <div>
                      <label className="text-xs font-bold text-slate-700 block mb-1">Visit Date</label>
                      <input
                        type="date"
                        value={visitForm.date}
                        onChange={(e) => setVisitForm({ ...visitForm, date: e.target.value })}
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-sm font-medium text-slate-900 focus:outline-none focus:ring-2 focus:ring-orange-500"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-xs font-bold text-slate-700 block mb-1">Preferred Time Slot</label>
                    <select
                      value={visitForm.timeSlot}
                      onChange={(e) => setVisitForm({ ...visitForm, timeSlot: e.target.value })}
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-sm font-medium text-slate-900 focus:outline-none focus:ring-2 focus:ring-orange-500"
                    >
                      <option value="Morning (10:30 AM - 12:30 PM)">Morning (10:30 AM - 12:30 PM)</option>
                      <option value="Afternoon (1:30 PM - 3:30 PM)">Afternoon (1:30 PM - 3:30 PM)</option>
                      <option value="Evening (4:30 PM - 6:30 PM)">Evening (4:30 PM - 6:30 PM)</option>
                    </select>
                  </div>

                  <div className="bg-orange-50/70 p-3 rounded-xl border border-orange-100 flex items-center justify-between">
                    <div className="flex items-center gap-2.5 text-xs text-orange-900 font-semibold">
                      <Car className="w-4 h-4 text-[#FF6B00]" />
                      <span>Free Doorstep AC Cab Pickup</span>
                    </div>
                    <input
                      type="checkbox"
                      checked={visitForm.cabPickup}
                      onChange={(e) => setVisitForm({ ...visitForm, cabPickup: e.target.checked })}
                      className="w-4 h-4 accent-orange-500 cursor-pointer"
                    />
                  </div>
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full py-3.5 bg-[#FF6B00] hover:bg-[#E55F00] text-white font-bold text-sm rounded-xl shadow-md transition-all cursor-pointer flex items-center justify-center gap-2"
                  >
                    <Calendar className="w-4 h-4" />
                    <span>Confirm Site Visit</span>
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* 12. FLAT DETAILS MODAL (Floor plans, photo gallery, specs)               */}
      {/* ========================================================================= */}
      {selectedFlatForDetails && (
        <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-white rounded-3xl max-w-3xl w-full p-6 sm:p-8 shadow-2xl relative border border-slate-200 text-left my-8 max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setSelectedFlatForDetails(null)}
              className="absolute top-5 right-5 p-2 text-slate-400 hover:text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-full transition-colors z-10"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="space-y-6">
              {/* Header */}
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold text-orange-600 bg-orange-50 px-2.5 py-0.5 rounded-md">
                    {selectedFlatForDetails.tag}
                  </span>
                  <span className="text-xs font-bold text-slate-700 bg-slate-100 px-2.5 py-0.5 rounded-md">
                    {selectedFlatForDetails.bhk}
                  </span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-black text-[#0B1528] mt-1.5">
                  {selectedFlatForDetails.name}
                </h3>
                <div className="flex items-center gap-1.5 text-xs text-slate-500 mt-1">
                  <MapPin className="w-3.5 h-3.5 text-orange-500" />
                  <span>{selectedFlatForDetails.location} • {selectedFlatForDetails.floor}</span>
                </div>
              </div>

              {/* Photo Gallery with Thumbnail switcher */}
              <div className="space-y-2">
                <div className="aspect-[16/9] rounded-2xl overflow-hidden bg-slate-100 relative">
                  <img loading="lazy"
                    src={selectedFlatForDetails.gallery[activeGalleryIdx] || selectedFlatForDetails.image}
                    alt={selectedFlatForDetails.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-3 right-3 bg-slate-950/75 text-white text-[11px] font-bold px-2.5 py-1 rounded-lg">
                    Photo {activeGalleryIdx + 1} of {selectedFlatForDetails.gallery.length}
                  </div>
                </div>

                <div className="grid grid-cols-4 gap-2">
                  {selectedFlatForDetails.gallery.map((img, idx) => (
                    <div
                      key={idx}
                      onClick={() => setActiveGalleryIdx(idx)}
                      className={`aspect-[16/10] rounded-xl overflow-hidden border-2 cursor-pointer transition-all ${
                        activeGalleryIdx === idx ? 'border-orange-500 scale-95' : 'border-transparent opacity-70 hover:opacity-100'
                      }`}
                    >
                      <img loading="lazy" src={img} alt={`Thumb ${idx}`} className="w-full h-full object-cover" />
                    </div>
                  ))}
                </div>
              </div>

              {/* Price & Dimensions Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 bg-slate-50 p-4 rounded-2xl border border-slate-200/80 text-xs">
                <div>
                  <div className="text-slate-400 font-bold uppercase text-[10px]">Price</div>
                  <div className="text-base font-black text-[#FF6B00] mt-0.5">{selectedFlatForDetails.price}</div>
                </div>
                <div>
                  <div className="text-slate-400 font-bold uppercase text-[10px]">Estimated EMI</div>
                  <div className="text-sm font-bold text-slate-800 mt-0.5">{selectedFlatForDetails.emi}</div>
                </div>
                <div>
                  <div className="text-slate-400 font-bold uppercase text-[10px]">Carpet Area</div>
                  <div className="text-sm font-bold text-slate-800 mt-0.5">{selectedFlatForDetails.carpetArea}</div>
                </div>
                <div>
                  <div className="text-slate-400 font-bold uppercase text-[10px]">Possession</div>
                  <div className="text-sm font-bold text-emerald-600 mt-0.5">{selectedFlatForDetails.possession}</div>
                </div>
              </div>

              {/* Room Specs & Dimensions */}
              <div className="space-y-2">
                <h4 className="text-sm font-bold text-[#0B1528] uppercase tracking-wider">Room Specifications:</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                  <div className="p-3 bg-slate-50 rounded-xl border border-slate-100 flex justify-between">
                    <span className="text-slate-500">Living & Dining Hall:</span>
                    <span className="font-bold text-slate-800">{selectedFlatForDetails.specs.living}</span>
                  </div>
                  <div className="p-3 bg-slate-50 rounded-xl border border-slate-100 flex justify-between">
                    <span className="text-slate-500">Master Bedroom:</span>
                    <span className="font-bold text-slate-800">{selectedFlatForDetails.specs.masterBed}</span>
                  </div>
                  <div className="p-3 bg-slate-50 rounded-xl border border-slate-100 flex justify-between">
                    <span className="text-slate-500">Kitchen:</span>
                    <span className="font-bold text-slate-800">{selectedFlatForDetails.specs.kitchen}</span>
                  </div>
                  <div className="p-3 bg-slate-50 rounded-xl border border-slate-100 flex justify-between">
                    <span className="text-slate-500">Parking Allocated:</span>
                    <span className="font-bold text-slate-800">{selectedFlatForDetails.specs.parking}</span>
                  </div>
                </div>
              </div>

              {/* Key Highlights */}
              <div className="space-y-2">
                <h4 className="text-sm font-bold text-[#0B1528] uppercase tracking-wider">Key Highlights:</h4>
                <div className="space-y-1.5">
                  {selectedFlatForDetails.highlights.map((h, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-slate-700">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Actions Footer */}
              <div className="pt-4 border-t border-slate-200 flex flex-wrap items-center justify-between gap-3">
                <div className="text-xs text-slate-500">
                  Facing: <strong className="text-slate-800">{selectedFlatForDetails.facing}</strong>
                </div>
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => {
                      const flatName = selectedFlatForDetails.name;
                      setSelectedFlatForDetails(null);
                      handleOpenVisitModal(flatName);
                    }}
                    className="px-6 py-3 bg-[#FF6B00] hover:bg-[#E55F00] text-white font-bold text-xs rounded-xl shadow-md flex items-center gap-1.5"
                  >
                    <Calendar className="w-4 h-4" />
                    <span>Book Site Visit for this Flat</span>
                  </button>
                </div>
              </div>

            </div>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* 13. BROCHURE MODAL                                                       */}
      {/* ========================================================================= */}
      {isBrochureModalOpen && (
        <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-md w-full p-6 sm:p-8 shadow-2xl relative border border-slate-200 text-left">
            <button
              onClick={() => setIsBrochureModalOpen(false)}
              className="absolute top-5 right-5 p-2 text-slate-400 hover:text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-full transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {brochureSuccess ? (
              <div className="text-center py-4 space-y-4">
                <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-[#0B1528]">Brochure Ready!</h3>
                <p className="text-slate-600 text-xs leading-relaxed">
                  The complete official 36-page brochure with master floor plans, floor-by-floor specifications, and payment schedules has been prepared.
                </p>
                <button
                  onClick={() => setIsBrochureModalOpen(false)}
                  className="w-full py-2.5 bg-[#0B1528] text-white font-bold text-xs rounded-xl"
                >
                  Close
                </button>
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setBrochureSuccess(true);
                }}
                className="space-y-4"
              >
                <div>
                  <div className="text-xs font-bold text-orange-600 uppercase">Instant Download</div>
                  <h3 className="text-xl font-black text-[#0B1528]">Download Project Brochure</h3>
                  <p className="text-xs text-slate-500 mt-0.5">
                    Includes 2D/3D floor plans, price breakdowns & amenities catalogue.
                  </p>
                </div>

                <div>
                  <label className="text-xs font-bold text-slate-700 block mb-1">Your Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Amit Verma"
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-xs font-medium focus:outline-none focus:ring-2 focus:ring-orange-500"
                  />
                </div>

                <div>
                  <label className="text-xs font-bold text-slate-700 block mb-1">Mobile / WhatsApp *</label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 98765 43210"
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-xs font-medium focus:outline-none focus:ring-2 focus:ring-orange-500"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 bg-[#FF6B00] hover:bg-[#E55F00] text-white font-bold text-xs rounded-xl shadow-md flex items-center justify-center gap-1.5"
                >
                  <Download className="w-4 h-4" />
                  <span>Download PDF Brochure (18.4 MB)</span>
                </button>
              </form>
            )}
          </div>
        </div>
      )}

    </div>
  );
};
