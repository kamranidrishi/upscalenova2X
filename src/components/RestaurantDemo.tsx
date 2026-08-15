import React, { useState, useMemo, useEffect } from 'react';
import { DemoItem, PlanType } from '../data/demos';
import { 
  Utensils, Wine, Clock, MapPin, Phone, MessageCircle, Star, Search, Plus, Minus,
  ShoppingBag, ShieldCheck, X, Check, CheckCircle2, ChevronRight, Sparkles, Flame,
  Bot, Send, CreditCard, Receipt, ArrowRight, AlertCircle, QrCode, User, ShoppingCart,
  RefreshCw, Layers, Navigation, Navigation2, Compass, LocateFixed, Car, Footprints,
  ExternalLink, Share2, Map as MapIcon, CheckCircle, Sparkle, Heart, FlameKindling
} from 'lucide-react';

interface RestaurantDemoProps {
  demo: DemoItem;
  isMobile: boolean;
  isTablet: boolean;
  onPlanChange?: (plan: PlanType) => void;
}

// Dynamic Vibrant Basket Color Themes for dynamic button color cycling on item selection
const RESTAURANT_BASKET_THEMES = [
  { id: 'crimson', bg: 'bg-gradient-to-r from-rose-600 via-rose-500 to-red-600', hoverBg: 'hover:from-rose-500 hover:to-red-500', text: 'text-white', border: 'border-rose-400', badgeBg: 'bg-rose-950', badgeText: 'text-rose-200', glow: 'shadow-[0_0_22px_rgba(244,63,94,0.7)]', label: 'Bordeaux Crimson' },
  { id: 'gold', bg: 'bg-gradient-to-r from-amber-500 via-yellow-500 to-amber-600', hoverBg: 'hover:from-amber-400 hover:to-yellow-400', text: 'text-slate-950 font-black', border: 'border-amber-300', badgeBg: 'bg-slate-950', badgeText: 'text-amber-300', glow: 'shadow-[0_0_22px_rgba(245,158,11,0.7)]', label: 'Imperial Gold' },
  { id: 'emerald', bg: 'bg-gradient-to-r from-emerald-500 via-teal-500 to-emerald-600', hoverBg: 'hover:from-emerald-400 hover:to-teal-400', text: 'text-slate-950 font-black', border: 'border-emerald-300', badgeBg: 'bg-emerald-950', badgeText: 'text-emerald-300', glow: 'shadow-[0_0_22px_rgba(16,185,129,0.7)]', label: 'Vintage Emerald' },
  { id: 'violet', bg: 'bg-gradient-to-r from-purple-600 via-fuchsia-600 to-indigo-600', hoverBg: 'hover:from-purple-500 hover:to-indigo-500', text: 'text-white', border: 'border-purple-300', badgeBg: 'bg-purple-950', badgeText: 'text-purple-200', glow: 'shadow-[0_0_22px_rgba(168,85,247,0.7)]', label: 'Velvet Royal' },
  { id: 'cyan', bg: 'bg-gradient-to-r from-cyan-500 via-sky-500 to-blue-600', hoverBg: 'hover:from-cyan-400 hover:to-blue-500', text: 'text-slate-950 font-black', border: 'border-cyan-300', badgeBg: 'bg-slate-950', badgeText: 'text-cyan-300', glow: 'shadow-[0_0_22px_rgba(6,182,212,0.7)]', label: 'Cyber Cobalt' }
];

export interface RestaurantItem {
  id: string;
  name: string;
  category: 'Starters' | 'Pastas & Mains' | 'Steaks & Grills' | 'Seafood' | 'Desserts' | 'Fine Beverages';
  price: number;
  description: string;
  image: string;
  isVeg: boolean;
  isChefSpecial?: boolean;
  isSoldOut?: boolean;
  spiceLevel?: 1 | 2 | 3;
}

export const RESTAURANT_ITEMS: RestaurantItem[] = [
  // Starters
  {
    id: 'res-1',
    name: 'Pan-Seared Sea Scallops',
    category: 'Starters',
    price: 680,
    description: 'Fresh Hokkaido scallops on cauliflower velvet purée, crispy pancetta lardons, black truffle vinaigrette.',
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=600&q=80',
    isVeg: false,
    isChefSpecial: true
  },
  {
    id: 'res-2',
    name: 'Burrata Pugliese Tartine',
    category: 'Starters',
    price: 520,
    description: 'Creamy artisanal burrata from Puglia, heirloom cherry tomatoes, basil pesto drizzle, toasted sourdough.',
    image: 'https://images.unsplash.com/photo-1592417817098-8f3d6910985b?auto=format&fit=crop&w=600&q=80',
    isVeg: true,
    isChefSpecial: true
  },
  {
    id: 'res-3',
    name: 'Classic French Onion Soup',
    category: 'Starters',
    price: 440,
    description: 'Slow-caramelized sweet onions in rich beef bone broth topped with crusty Gruyère sourdough croute.',
    image: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&w=600&q=80',
    isVeg: false
  },
  {
    id: 'res-4',
    name: 'Wild Forest Truffle Arancini',
    category: 'Starters',
    price: 490,
    description: 'Crispy Carnaroli risotto croquettes stuffed with fontina cheese, wild porcini mushrooms, garlic aioli.',
    image: 'https://images.unsplash.com/photo-1541529086526-db283c563270?auto=format&fit=crop&w=600&q=80',
    isVeg: true
  },

  // Pastas & Mains
  {
    id: 'res-5',
    name: 'Handcrafted Truffle Tagliolini',
    category: 'Pastas & Mains',
    price: 890,
    description: 'Egg pasta tossed in 24-month aged Parmigiano-Reggiano cream with freshly shaved black winter truffle.',
    image: 'https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&w=600&q=80',
    isVeg: true,
    isChefSpecial: true
  },
  {
    id: 'res-6',
    name: 'Slow-Braised Lamb Shank Risotto',
    category: 'Pastas & Mains',
    price: 1150,
    description: '12-hour braised New Zealand lamb shank over saffron Milanese risotto with natural rosemary jus.',
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=600&q=80',
    isVeg: false,
    isChefSpecial: true
  },
  {
    id: 'res-7',
    name: 'Wild Morel Mushroom Pappardelle',
    category: 'Pastas & Mains',
    price: 780,
    description: 'Ribbon pasta with wild Kashmiri morels, garlic herb butter, crème fraîche, and toasted pine nuts.',
    image: 'https://images.unsplash.com/photo-1621996346565-e3d5d62810f2?auto=format&fit=crop&w=600&q=80',
    isVeg: true
  },
  {
    id: 'res-8',
    name: 'Artisan Gnocchi Gorgonzola',
    category: 'Pastas & Mains',
    price: 720,
    description: 'Hand-rolled potato gnocchi in rich blue cheese cream, candied walnuts, and baby spinach leaves.',
    image: 'https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&w=600&q=80',
    isVeg: true
  },

  // Steaks & Grills
  {
    id: 'res-9',
    name: 'Prime Black Angus Ribeye (250g)',
    category: 'Steaks & Grills',
    price: 1490,
    description: 'Charcoal-grilled prime Angus beef with roasted bone marrow butter, grilled asparagus, and red wine jus.',
    image: 'https://images.unsplash.com/photo-1558030006-450675393462?auto=format&fit=crop&w=600&q=80',
    isVeg: false,
    isChefSpecial: true
  },
  {
    id: 'res-10',
    name: 'Rosemary Garlic Lamb Chops',
    category: 'Steaks & Grills',
    price: 1350,
    description: 'Flame-seared tender lamb cutlets with mint chimichurri, glazed baby carrots, and truffle pomme purée.',
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=600&q=80',
    isVeg: false
  },
  {
    id: 'res-11',
    name: 'Charred Herb Butter Half Chicken',
    category: 'Steaks & Grills',
    price: 860,
    description: 'Sous-vide free-range chicken roasted with thyme, lemon garlic butter, blistered vine tomatoes.',
    image: 'https://images.unsplash.com/photo-1598103442097-8b74394b95c6?auto=format&fit=crop&w=600&q=80',
    isVeg: false
  },
  {
    id: 'res-12',
    name: 'Grilled Portobello Steak Stack',
    category: 'Steaks & Grills',
    price: 740,
    description: 'Marinated giant portobello mushrooms layered with goat cheese, roasted bell peppers, and balsamic reduction.',
    image: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=600&q=80',
    isVeg: true
  },

  // Seafood
  {
    id: 'res-13',
    name: 'Chilean Sea Bass Meunière',
    category: 'Seafood',
    price: 1580,
    description: 'Pan-roasted deep-sea bass in brown butter lemon caper emulsion with saffron baby potatoes.',
    image: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&w=600&q=80',
    isVeg: false,
    isChefSpecial: true
  },
  {
    id: 'res-14',
    name: 'Butter Garlic Jumbo Tiger Prawns',
    category: 'Seafood',
    price: 1250,
    description: 'Flamed Bay of Bengal prawns tossed in roasted garlic chive butter with toasted herb ciabatta.',
    image: 'https://images.unsplash.com/photo-1565680018434-b513d5e5fd47?auto=format&fit=crop&w=600&q=80',
    isVeg: false
  },
  {
    id: 'res-15',
    name: 'Crispy Skin Atlantic Salmon',
    category: 'Seafood',
    price: 1390,
    description: 'Pan-seared Norwegian salmon fillet with dill velouté, sautéed haricot verts, and lemon oil.',
    image: 'https://images.unsplash.com/photo-1467003909585-2f8a72700288?auto=format&fit=crop&w=600&q=80',
    isVeg: false
  },

  // Desserts
  {
    id: 'res-16',
    name: 'Valrhona Dark Chocolate Soufflé',
    category: 'Desserts',
    price: 540,
    description: 'Molten warm 70% Guanaja chocolate soufflé served with Bourbon Madagascar vanilla bean crème anglaise.',
    image: 'https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?auto=format&fit=crop&w=600&q=80',
    isVeg: true,
    isChefSpecial: true
  },
  {
    id: 'res-17',
    name: 'Madagascar Vanilla Bean Crème Brûlée',
    category: 'Desserts',
    price: 460,
    description: 'Silky rich custard with caramelized brittle sugar crust and seasonal wild macerated berries.',
    image: 'https://images.unsplash.com/photo-1517427294546-5aa121f68e8a?auto=format&fit=crop&w=600&q=80',
    isVeg: true
  },
  {
    id: 'res-18',
    name: 'Traditional Venetian Tiramisù',
    category: 'Desserts',
    price: 480,
    description: 'Espresso-soaked Savoiardi ladyfingers layered with zabaione mascarpone and dusted with Dutch cocoa.',
    image: 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?auto=format&fit=crop&w=600&q=80',
    isVeg: true
  },
  {
    id: 'res-19',
    name: 'Warm Apple Tarte Tatin',
    category: 'Desserts',
    price: 490,
    description: 'Caramelized Granny Smith apples in flaky puff pastry served with artisanal cinnamon gelato.',
    image: 'https://images.unsplash.com/photo-1535141192574-5d4897c13136?auto=format&fit=crop&w=600&q=80',
    isVeg: true
  },

  // Fine Beverages
  {
    id: 'res-20',
    name: 'Bordeaux Vintage Reserve Spritz (Mocktail)',
    category: 'Fine Beverages',
    price: 380,
    description: 'De-alcoholized Cabernet grape reduction, sparkling tonic water, fresh rosemary sprig, and orange zest.',
    image: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&w=600&q=80',
    isVeg: true,
    isChefSpecial: true
  },
  {
    id: 'res-21',
    name: 'Smoked Smoked Hibiscus Paloma',
    category: 'Fine Beverages',
    price: 360,
    description: 'Wild Mexican hibiscus extract, pink grapefruit cordial, agave nectar, smoked sea salt rim.',
    image: 'https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=600&q=80',
    isVeg: true
  },
  {
    id: 'res-22',
    name: 'Artisan San Pellegrino Sparkling (750ml)',
    category: 'Fine Beverages',
    price: 320,
    description: 'Imported natural sparkling mineral water bottled at the source in San Pellegrino Terme, Italy.',
    image: 'https://images.unsplash.com/photo-1548839140-29a749e1bc4e?auto=format&fit=crop&w=600&q=80',
    isVeg: true
  }
];

export const RestaurantDemo: React.FC<RestaurantDemoProps> = ({ demo, onPlanChange }) => {
  const plan = demo.plan;
  const isBase = plan === 'Base';
  const isPro = plan === 'Pro';
  const isMega = plan === 'Mega';

  // State Management
  const [activeCategory, setActiveCategory] = useState('All');
  const [vegFilter, setVegFilter] = useState<'all' | 'veg' | 'nonveg'>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [cart, setCart] = useState<{ item: RestaurantItem; qty: number }[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [isManagerModalOpen, setIsManagerModalOpen] = useState(false);
  const [soldOutItemIds, setSoldOutItemIds] = useState<string[]>([]);
  
  // Basket Modals
  const [isBillReceiptOpen, setIsBillReceiptOpen] = useState(false);
  const [isUpiModalOpen, setIsUpiModalOpen] = useState(false);
  const [customerName, setCustomerName] = useState('');
  const [customerPhone, setCustomerPhone] = useState('');
  const [tableNumber, setTableNumber] = useState('Table 07');

  // Booking Form State
  const [bookingGuests, setBookingGuests] = useState('2 Guests');
  const [bookingDate, setBookingDate] = useState('Today (Dinner)');
  const [bookingTime, setBookingTime] = useState('8:30 PM');
  const [bookingConfirmed, setBookingConfirmed] = useState(false);

  // Mega Live Location & Map State
  const [userLocationName, setUserLocationName] = useState('Grand Heritage Hotel / Boulevard');
  const [distanceKm, setDistanceKm] = useState(2.1);
  const [travelMode, setTravelMode] = useState<'driving' | 'walking' | 'transit'>('driving');
  const [mapViewStyle, setMapViewStyle] = useState<'vector' | 'satellite' | 'google'>('vector');
  const [isDetectingLocation, setIsDetectingLocation] = useState(false);
  const [locationSuccessMsg, setLocationSuccessMsg] = useState('');
  const [userPinCoords, setUserPinCoords] = useState<{ x: number; y: number }>({ x: 28, y: 72 });

  // Mega Sommelier AI Assistant
  const [isAiOpen, setIsAiOpen] = useState(false);
  const [aiChat, setAiChat] = useState<{ sender: 'user' | 'bot'; text: string }[]>([
    { sender: 'bot', text: 'Bonsoir! I am your Maison Sommelier & Chef Assistant. Looking for exquisite wine pairings, course recommendations, or dietary advice for your dinner?' }
  ]);
  const [aiInput, setAiInput] = useState('');
  const [showKdsDashboard, setShowKdsDashboard] = useState(false);

  // Dynamic Basket Color Cycling & Bounce Animation State
  const [basketThemeIndex, setBasketThemeIndex] = useState(0);
  const [isBasketBouncing, setIsBasketBouncing] = useState(false);
  const currentBasketTheme = RESTAURANT_BASKET_THEMES[basketThemeIndex];

  // Dynamic Theme Colors for Restaurant
  const theme = useMemo(() => {
    if (isBase) {
      // Base Plan: French Champagne Cream & Brass Luxury Light
      return {
        container: 'bg-[#FAF8F5] text-[#1E1B18]',
        topBar: 'bg-[#F2ECE4] text-[#6B5E52] border-[#E3D7C8]',
        topBadge: 'bg-white text-[#9C2738] border-[#E3D7C8]',
        topText: 'text-[#3E342B]',
        topBtn: 'bg-white hover:bg-[#F2ECE4] text-[#9C2738] border-[#D6C5B3]',
        header: 'bg-[#FAF8F5]/95 border-[#E8DFC9] text-[#1E1B18]',
        brandLogo: 'bg-[#9C2738] text-white border-[#831828] shadow-sm',
        brandTitle: 'text-[#1E1B18]',
        brandSub: 'text-[#9C2738]',
        navLink: 'text-[#6B5E52] hover:text-[#9C2738]',
        primaryBtn: 'bg-[#9C2738] hover:bg-[#7D1B2A] text-white shadow-md border-transparent',
        secondaryBtn: 'bg-white hover:bg-[#F2ECE4] text-[#1E1B18] border-[#D6C5B3]',
        heroOverlay: 'from-[#FAF8F5] via-[#FAF8F5]/60 to-black/40',
        heroBadge: 'bg-white/90 text-[#9C2738] border-[#E3D7C8]',
        heroTitle: 'text-[#1E1B18]',
        heroDesc: 'text-[#4A3E34]',
        searchBarBg: 'bg-white border-[#E3D7C8] shadow-md',
        searchInput: 'bg-[#FAF8F5] border-[#D6C5B3] text-[#1E1B18] placeholder:text-[#998877]',
        filterAllActive: 'bg-[#9C2738] text-white shadow-xs',
        filterInactive: 'bg-white text-[#6B5E52] border-[#E3D7C8] hover:bg-[#F2ECE4]',
        menuSectionHeaderTitle: 'text-[#1E1B18]',
        menuSectionHeaderSub: 'text-[#9C2738]',
        menuSectionHeaderDesc: 'text-[#6B5E52]',
        categoryActive: 'bg-[#9C2738] text-white shadow-md',
        categoryInactive: 'bg-white text-[#6B5E52] border-[#E3D7C8] hover:bg-[#F2ECE4]',
        cardBg: 'bg-white border-[#E8DFC9] shadow-sm hover:border-[#9C2738]/50 hover:shadow-lg',
        cardImageBg: 'bg-[#F2ECE4]',
        cardIndicatorBg: 'bg-white/95 border-[#E8DFC9]',
        cardPriceBadge: 'bg-white text-[#9C2738] border-[#E3D7C8]',
        cardCatText: 'text-[#9C2738]',
        cardTitle: 'text-[#1E1B18] group-hover:text-[#9C2738]',
        cardDesc: 'text-[#6B5E52]',
        cardAddBtn: 'bg-[#FAF8F5] hover:bg-[#9C2738] text-[#9C2738] hover:text-white border-[#D6C5B3]',
        specialsSectionBg: 'bg-[#F2ECE4] border-[#E3D7C8]',
        specialsCardBg: 'bg-white border-[#E3D7C8]',
        specialsBadge: 'bg-[#FAF8F5] text-[#9C2738] border-[#E3D7C8]',
        specialsTitle: 'text-[#1E1B18]',
        specialsDesc: 'text-[#6B5E52]',
        specialsPrice: 'text-[#9C2738]',
        aboutTitle: 'text-[#1E1B18]',
        aboutSub: 'text-[#9C2738]',
        aboutDesc: 'text-[#6B5E52]',
        aboutStatCard: 'bg-white border-[#E3D7C8]',
        aboutStatNumber: 'text-[#9C2738]',
        reviewsBg: 'bg-[#F2ECE4] border-[#E3D7C8]',
        reviewCard: 'bg-white border-[#E3D7C8]',
        reviewText: 'text-[#4A3E34]',
        reviewName: 'text-[#1E1B18]',
        reviewRole: 'text-[#9C2738]',
        footerBg: 'bg-[#1E1B18] text-[#E8DFC9] border-[#38322B]',
        footerTitle: 'text-white',
        footerHeading: 'text-white',
        footerDesc: 'text-[#B8AA98]',
        footerBadge: 'bg-[#2B2620] text-[#E5A93C] border-[#3D352C]',
        footerSocialBtn: 'bg-[#2B2620] text-white border-[#3D352C] hover:bg-[#3D352C]',
      };
    }

    if (isPro) {
      // Pro Plan: Deep Bordeaux Wine & Antique Gold Velvet Luxury
      return {
        container: 'bg-[#140A0D] text-[#F3ECE6]',
        topBar: 'bg-[#1C0E13] text-[#BFA8A0] border-[#361B23]',
        topBadge: 'bg-[#241219] text-[#E5A93C] border-[#4A2430]',
        topText: 'text-[#F3ECE6]',
        topBtn: 'bg-[#241219] hover:bg-[#361B23] text-[#E5A93C] border-[#4A2430]',
        header: 'bg-[#140A0D]/95 border-[#361B23] text-[#F3ECE6]',
        brandLogo: 'bg-gradient-to-br from-[#801328] to-[#4A0A17] text-[#E5A93C] border-[#A8253E]',
        brandTitle: 'text-[#F3ECE6]',
        brandSub: 'text-[#E5A93C]',
        navLink: 'text-[#BFA8A0] hover:text-[#E5A93C]',
        primaryBtn: 'bg-gradient-to-r from-[#801328] to-[#9C1C35] hover:from-[#9C1C35] hover:to-[#B82342] text-white shadow-[0_0_20px_rgba(128,19,40,0.4)] border-[#B82342]/40',
        secondaryBtn: 'bg-[#1C0E13] hover:bg-[#28141B] text-[#F3ECE6] border-[#361B23] hover:border-[#E5A93C]/40',
        heroOverlay: 'from-[#140A0D] via-[#140A0D]/80 to-[#140A0D]/60',
        heroBadge: 'bg-[#1C0E13]/90 text-[#E5A93C] border-[#361B23]',
        heroTitle: 'text-white',
        heroDesc: 'text-[#D4C3BC]',
        searchBarBg: 'bg-[#1C0E13] border-[#361B23]',
        searchInput: 'bg-[#140A0D] border-[#361B23] text-[#F3ECE6] placeholder:text-[#7A645E]',
        filterAllActive: 'bg-[#801328] text-white border border-[#A8253E] shadow-sm',
        filterInactive: 'bg-[#140A0D] text-[#BFA8A0] border-[#361B23] hover:bg-[#1C0E13]',
        menuSectionHeaderTitle: 'text-white',
        menuSectionHeaderSub: 'text-[#E5A93C]',
        menuSectionHeaderDesc: 'text-[#BFA8A0]',
        categoryActive: 'bg-gradient-to-r from-[#801328] to-[#9C1C35] text-white shadow-md border border-[#A8253E]',
        categoryInactive: 'bg-[#1C0E13] text-[#BFA8A0] border-[#361B23] hover:bg-[#28141B]',
        cardBg: 'bg-[#1C0E13] border-[#361B23] shadow-md hover:border-[#E5A93C]/50 hover:shadow-[0_0_25px_rgba(229,169,60,0.15)]',
        cardImageBg: 'bg-[#140A0D]',
        cardIndicatorBg: 'bg-[#140A0D]/95 border-[#361B23]',
        cardPriceBadge: 'bg-[#140A0D] text-[#E5A93C] border-[#4A2430]',
        cardCatText: 'text-[#E5A93C]',
        cardTitle: 'text-white group-hover:text-[#E5A93C]',
        cardDesc: 'text-[#BFA8A0]',
        cardAddBtn: 'bg-[#140A0D] hover:bg-[#801328] text-[#E5A93C] hover:text-white border-[#361B23]',
        specialsSectionBg: 'bg-[#10070A] border-[#361B23]',
        specialsCardBg: 'bg-[#1C0E13] border-[#361B23]',
        specialsBadge: 'bg-[#140A0D] text-[#E5A93C] border-[#4A2430]',
        specialsTitle: 'text-white',
        specialsDesc: 'text-[#BFA8A0]',
        specialsPrice: 'text-[#E5A93C]',
        aboutTitle: 'text-white',
        aboutSub: 'text-[#E5A93C]',
        aboutDesc: 'text-[#BFA8A0]',
        aboutStatCard: 'bg-[#1C0E13] border-[#361B23]',
        aboutStatNumber: 'text-[#E5A93C]',
        reviewsBg: 'bg-[#10070A] border-[#361B23]',
        reviewCard: 'bg-[#1C0E13] border-[#361B23]',
        reviewText: 'text-[#D4C3BC]',
        reviewName: 'text-white',
        reviewRole: 'text-[#E5A93C]',
        footerBg: 'bg-[#0E0507] text-[#BFA8A0] border-[#361B23]',
        footerTitle: 'text-white',
        footerHeading: 'text-white',
        footerDesc: 'text-[#BFA8A0]',
        footerBadge: 'bg-[#1C0E13] text-[#E5A93C] border-[#361B23]',
        footerSocialBtn: 'bg-[#1C0E13] text-[#F3ECE6] border-[#361B23] hover:bg-[#28141B]',
      };
    }

    // Mega Plan (₹24,999): Haute Gastronomy Cyber-Bordeaux & Warm Crimson Gold Luxury
    return {
      container: 'bg-[#0B0408] text-[#F9EFF4]',
      topBar: 'bg-[#15070F] text-[#D8B4C8] border-[#361125]',
      topBadge: 'bg-[#250B1B] text-[#FBBF24] border-[#52173B] shadow-[0_0_12px_rgba(251,191,36,0.2)]',
      topText: 'text-[#F9EFF4]',
      topBtn: 'bg-[#250B1B] hover:bg-[#3B112B] text-[#FBBF24] border-[#52173B] hover:border-[#FBBF24]/60',
      header: 'bg-[#0B0408]/95 border-[#361125] text-[#F9EFF4]',
      brandLogo: 'bg-gradient-to-tr from-[#9F1239] via-[#BE123C] to-[#E11D48] text-[#FEF08A] border-[#FB7185] shadow-[0_0_25px_rgba(225,29,72,0.45)]',
      brandTitle: 'text-white',
      brandSub: 'text-[#FBBF24]',
      navLink: 'text-[#D8B4C8] hover:text-[#FBBF24]',
      primaryBtn: 'bg-gradient-to-r from-[#9F1239] via-[#E11D48] to-[#F43F5E] hover:from-[#BE123C] hover:to-[#FB7185] text-white shadow-[0_0_28px_rgba(225,29,72,0.5)] border-[#FB7185]/50',
      secondaryBtn: 'bg-[#15070F] hover:bg-[#250B1B] text-[#F9EFF4] border-[#361125] hover:border-[#FBBF24]/50',
      heroOverlay: 'from-[#0B0408] via-[#0B0408]/85 to-[#0B0408]/65',
      heroBadge: 'bg-[#15070F]/95 text-[#FBBF24] border-[#52173B] shadow-[0_0_20px_rgba(251,191,36,0.2)]',
      heroTitle: 'text-white',
      heroDesc: 'text-[#E5D0DC]',
      searchBarBg: 'bg-[#15070F] border-[#361125] shadow-2xl',
      searchInput: 'bg-[#0B0408] border-[#361125] text-[#F9EFF4] placeholder:text-[#9F7A8E] focus:border-[#E11D48]',
      filterAllActive: 'bg-gradient-to-r from-[#9F1239] to-[#E11D48] text-white shadow-[0_0_18px_rgba(225,29,72,0.5)] border border-[#FB7185]/60',
      filterInactive: 'bg-[#0B0408] text-[#D8B4C8] border-[#361125] hover:bg-[#15070F]',
      menuSectionHeaderTitle: 'text-white',
      menuSectionHeaderSub: 'text-[#FBBF24]',
      menuSectionHeaderDesc: 'text-[#D8B4C8]',
      categoryActive: 'bg-gradient-to-r from-[#9F1239] via-[#E11D48] to-[#F43F5E] text-white shadow-[0_0_22px_rgba(225,29,72,0.55)] border border-[#FB7185]/60',
      categoryInactive: 'bg-[#15070F] text-[#D8B4C8] border-[#361125] hover:bg-[#250B1B] hover:text-white',
      cardBg: 'bg-[#15070F] border-[#361125] shadow-xl hover:border-[#E11D48]/70 hover:shadow-[0_0_35px_rgba(225,29,72,0.3)]',
      cardImageBg: 'bg-[#0B0408]',
      cardIndicatorBg: 'bg-[#0B0408]/95 border-[#361125]',
      cardPriceBadge: 'bg-[#0B0408] text-[#FBBF24] border-[#52173B]',
      cardCatText: 'text-[#FBBF24]',
      cardTitle: 'text-white group-hover:text-[#FBBF24]',
      cardDesc: 'text-[#D8B4C8]',
      cardAddBtn: 'bg-[#0B0408] hover:bg-gradient-to-r hover:from-[#9F1239] hover:to-[#E11D48] text-[#FBBF24] hover:text-white border-[#52173B]',
      specialsSectionBg: 'bg-[#080205] border-[#361125]',
      specialsCardBg: 'bg-[#15070F] border-[#361125]',
      specialsBadge: 'bg-[#0B0408] text-[#FBBF24] border-[#52173B]',
      specialsTitle: 'text-white',
      specialsDesc: 'text-[#D8B4C8]',
      specialsPrice: 'text-[#FBBF24]',
      aboutTitle: 'text-white',
      aboutSub: 'text-[#FBBF24]',
      aboutDesc: 'text-[#D8B4C8]',
      aboutStatCard: 'bg-[#15070F] border-[#361125]',
      aboutStatNumber: 'text-[#FBBF24]',
      reviewsBg: 'bg-[#080205] border-[#361125]',
      reviewCard: 'bg-[#15070F] border-[#361125]',
      reviewText: 'text-[#E5D0DC]',
      reviewName: 'text-white',
      reviewRole: 'text-[#FBBF24]',
      footerBg: 'bg-[#050103] text-[#D8B4C8] border-[#361125]',
      footerTitle: 'text-white',
      footerHeading: 'text-white',
      footerDesc: 'text-[#D8B4C8]',
      footerBadge: 'bg-[#15070F] text-[#FBBF24] border-[#361125]',
      footerSocialBtn: 'bg-[#15070F] text-[#F9EFF4] border-[#361125] hover:bg-[#250B1B]',
    };
  }, [isBase, isPro]);

  // Handle Location Detection
  const handleDetectLocation = (presetName?: string, presetKm?: number, coords?: { x: number; y: number }) => {
    setIsDetectingLocation(true);
    setLocationSuccessMsg('');

    if (presetName && presetKm && coords) {
      setTimeout(() => {
        setUserLocationName(presetName);
        setDistanceKm(presetKm);
        setUserPinCoords(coords);
        setIsDetectingLocation(false);
        setLocationSuccessMsg(`📍 Synced with ${presetName} (${presetKm} km to La Maison Bistro)`);
        setTimeout(() => setLocationSuccessMsg(''), 4000);
      }, 500);
      return;
    }

    if (typeof window !== 'undefined' && navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        () => {
          setIsDetectingLocation(false);
          setUserLocationName('Apni Live GPS Location');
          setDistanceKm(1.6);
          setUserPinCoords({ x: 32, y: 66 });
          setLocationSuccessMsg('📍 GPS Location Synced! Bistro is 1.6 km (~6 min drive) from you.');
          setTimeout(() => setLocationSuccessMsg(''), 4500);
        },
        () => {
          setIsDetectingLocation(false);
          setUserLocationName('Apni Current Area (Near Grand Avenue)');
          setDistanceKm(1.4);
          setUserPinCoords({ x: 35, y: 64 });
          setLocationSuccessMsg('📍 Live Area Synced! Distance: 1.4 km (~5 mins drive).');
          setTimeout(() => setLocationSuccessMsg(''), 4500);
        },
        { timeout: 3000 }
      );
    } else {
      setTimeout(() => {
        setIsDetectingLocation(false);
        setUserLocationName('Apni City Center Location');
        setDistanceKm(1.9);
        setUserPinCoords({ x: 30, y: 68 });
        setLocationSuccessMsg('📍 Live Location Connected!');
        setTimeout(() => setLocationSuccessMsg(''), 4000);
      }, 600);
    }
  };

  // Filtered Restaurant Items
  const filteredItems = useMemo(() => {
    return RESTAURANT_ITEMS.filter(item => {
      const matchesCategory = activeCategory === 'All' || item.category === activeCategory;
      const matchesVeg = vegFilter === 'all' || (vegFilter === 'veg' ? item.isVeg : !item.isVeg);
      const matchesSearch = searchQuery.trim() === '' || 
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
        item.description.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesVeg && matchesSearch;
    });
  }, [activeCategory, vegFilter, searchQuery]);

  // Cart operations
  const addToCart = (item: RestaurantItem) => {
    setCart(prev => {
      const existing = prev.find(i => i.item.id === item.id);
      if (existing) {
        return prev.map(i => i.item.id === item.id ? { ...i, qty: i.qty + 1 } : i);
      }
      return [...prev, { item, qty: 1 }];
    });

    // In Mega Plan (₹24,999): dynamic color cycling of the basket button on every 1 item select
    if (isMega) {
      setBasketThemeIndex(prev => (prev + 1) % RESTAURANT_BASKET_THEMES.length);
      setIsBasketBouncing(true);
      setTimeout(() => setIsBasketBouncing(false), 600);
    }
  };

  const removeFromCart = (itemId: string) => {
    setCart(prev => {
      const existing = prev.find(i => i.item.id === itemId);
      if (existing && existing.qty > 1) {
        return prev.map(i => i.item.id === itemId ? { ...i, qty: i.qty - 1 } : i);
      }
      return prev.filter(i => i.item.id !== itemId);
    });
  };

  const clearCart = () => setCart([]);

  const toggleSoldOut = (itemId: string) => {
    setSoldOutItemIds(prev => 
      prev.includes(itemId) ? prev.filter(id => id !== itemId) : [...prev, itemId]
    );
  };

  const cartTotal = useMemo(() => cart.reduce((sum, { item, qty }) => sum + (item.price * qty), 0), [cart]);
  const cartCount = useMemo(() => cart.reduce((sum, { qty }) => sum + qty, 0), [cart]);
  const gstAmount = Math.round(cartTotal * 0.05);
  const serviceCharge = Math.round(cartTotal * 0.05);
  const grandTotal = cartTotal + gstAmount + serviceCharge;

  // WhatsApp Order Link Generator
  const generateWhatsAppOrderLink = () => {
    if (cart.length === 0) return '#';
    let msg = `*🍷 LA MAISON GOURMET BISTRO - TABLE ORDER*\n`;
    msg += `----------------------------------------\n`;
    if (customerName) msg += `*Guest:* ${customerName}\n`;
    if (customerPhone) msg += `*Contact:* ${customerPhone}\n`;
    msg += `*Table / Dine-in:* ${tableNumber}\n\n`;
    msg += `*Order Items:*\n`;
    cart.forEach(({ item, qty }) => {
      msg += `• ${item.name} x ${qty} = ₹${item.price * qty}\n`;
    });
    msg += `----------------------------------------\n`;
    msg += `*Food Subtotal:* ₹${cartTotal}\n`;
    msg += `*GST (5%):* ₹${gstAmount}\n`;
    msg += `*Service & Hospitality (5%):* ₹${serviceCharge}\n`;
    msg += `*GRAND TOTAL:* ₹${grandTotal}\n\n`;
    msg += `Please confirm my order and start kitchen preparation!`;
    return `https://wa.me/919876543210?text=${encodeURIComponent(msg)}`;
  };

  // AI Sommelier Query Handler
  const handleAiAsk = () => {
    if (!aiInput.trim()) return;
    const userQ = aiInput;
    setAiChat(prev => [...prev, { sender: 'user', text: userQ }]);
    setAiInput('');

    setTimeout(() => {
      let reply = "Exquisite choice! For fine dining, I recommend pairing our Pan-Seared Hokkaido Scallops with an earthy Chablis, followed by the Handcrafted Truffle Tagliolini. Would you also like our pastry chef's signature Valrhona Dark Chocolate Soufflé?";
      const lower = userQ.toLowerCase();
      if (lower.includes('veg') || lower.includes('vegetarian')) {
        reply = "For our vegetarian connoisseurs, our Burrata Pugliese Tartine followed by the Handcrafted Truffle Tagliolini and Wild Morel Pappardelle provides a sublime 3-course experience.";
      } else if (lower.includes('steak') || lower.includes('meat') || lower.includes('wine')) {
        reply = "Our Prime Black Angus Ribeye (250g) with roasted bone marrow butter pairs magnificently with a full-bodied Bordeaux or Cabernet Sauvignon Reserve.";
      } else if (lower.includes('dessert') || lower.includes('sweet')) {
        reply = "Do not miss our molten Valrhona Dark Chocolate Soufflé with Bourbon vanilla bean crème anglaise, or the traditional Venetian Tiramisù.";
      }
      setAiChat(prev => [...prev, { sender: 'bot', text: reply }]);
    }, 600);
  };

  return (
    <div className={`w-full max-w-full overflow-x-hidden min-h-screen ${theme.container}`}>
      
      {/* ------------------------------------------------------------- */}
      {/* TOP NOTIFICATION BAR */}
      {/* ------------------------------------------------------------- */}
      <div className={`px-3 sm:px-6 py-2.5 text-[11px] sm:text-xs flex flex-wrap items-center justify-between gap-2 border-b ${theme.topBar}`}>
        <div className="flex items-center gap-2 flex-wrap font-medium">
          <span className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full font-bold text-[10px] uppercase tracking-wider border ${theme.topBadge}`}>
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
            {isBase ? 'Base Plan — ₹12,999' : isPro ? 'Pro Plan — ₹16,999' : 'Mega Plan — ₹24,999'}
          </span>
          <span className="hidden sm:inline opacity-40">|</span>
          <span className={`flex items-center gap-1 font-semibold ${theme.topText}`}>
            <Clock className="w-3.5 h-3.5" />
            <span>Lunch: 12:30 PM - 3:30 PM | Dinner: 7:00 PM - 11:30 PM</span>
          </span>
        </div>

        <div className="flex items-center gap-2">
          {/* Admin / Live Stock Sold-Out Control Button */}
          <button
            onClick={() => setIsManagerModalOpen(true)}
            className={`font-bold px-3 py-1 rounded-full text-[10px] transition-all flex items-center gap-1.5 shadow-xs border ${theme.topBtn}`}
            title="Open Live Stock & Sold Out Manager"
          >
            <ShieldCheck className="w-3 h-3" />
            <span>Admin / Stock Manager</span>
            {soldOutItemIds.length > 0 && (
              <span className="bg-rose-900/90 text-rose-200 border border-rose-700 text-[9px] font-black px-1.5 py-0.2 rounded-full">
                {soldOutItemIds.length} Sold Out
              </span>
            )}
          </button>

          {/* Mega Kitchen KDS Button */}
          {isMega && (
            <button
              onClick={() => setShowKdsDashboard(true)}
              className="bg-amber-950/60 hover:bg-amber-900/80 text-amber-300 border border-amber-600/60 font-bold px-3 py-1 rounded-full text-[10px] transition-all flex items-center gap-1 shadow-xs"
            >
              <Layers className="w-3 h-3 text-amber-400" />
              <span>Live KDS Chef Screen</span>
            </button>
          )}

          <span className={`font-semibold hidden md:flex items-center gap-1 ${theme.topText}`}>
            <MapPin className="w-3 h-3" />
            <span>Grand Boulevard, Floor 12</span>
          </span>
        </div>
      </div>

      {/* ------------------------------------------------------------- */}
      {/* MAIN HEADER */}
      {/* ------------------------------------------------------------- */}
      <header className={`sticky top-0 z-40 backdrop-blur-xl border-b px-4 sm:px-8 py-3.5 transition-all ${theme.header}`}>
        <div className="max-w-6xl mx-auto flex items-center justify-between gap-4">
          
          {/* Brand Logo */}
          <div className="flex items-center gap-3">
            <div className={`w-10 h-10 rounded-2xl border flex items-center justify-center font-bold ${theme.brandLogo}`}>
              <Utensils className="w-5 h-5" />
            </div>
            <div>
              <div className={`font-serif font-black text-lg sm:text-xl tracking-wide leading-none ${theme.brandTitle}`}>
                La Maison Bistro
              </div>
              <div className={`text-[10px] font-semibold tracking-widest uppercase mt-0.5 ${theme.brandSub}`}>
                Haute Gastronomy & Sommelier Cellar
              </div>
            </div>
          </div>

          {/* Navigation Links */}
          <nav className="hidden md:flex items-center gap-6 text-xs font-bold uppercase tracking-wider">
            <a href="#menu" className={`transition-colors ${theme.navLink}`}>A La Carte Menu</a>
            {!isBase && <a href="#specials" className={`transition-colors ${theme.navLink}`}>Chef Degustation</a>}
            <a href="#about" className={`transition-colors ${theme.navLink}`}>Culinary Heritage</a>
            {!isBase && <a href="#reviews" className={`transition-colors ${theme.navLink}`}>Guest Accolades</a>}
            {isMega && (
              <a href="#location" className={`transition-colors ${theme.navLink} flex items-center gap-1 text-rose-400`}>
                <MapPin className="w-3 h-3" />
                <span>Live Map & Location</span>
              </a>
            )}
            <a href="#contact" className={`transition-colors ${theme.navLink}`}>Reservations</a>
          </nav>

          {/* Right Action Controls */}
          <div className="flex items-center gap-2.5">
            {!isBase ? (
              <>
                {/* Dine-in Basket Button with Dynamic Theme Cycling for Mega Plan */}
                <button
                  onClick={() => setIsCartOpen(true)}
                  className={`relative p-2.5 rounded-full font-bold text-xs transition-all duration-300 flex items-center gap-2 shadow-md ${
                    isMega 
                      ? `${currentBasketTheme.bg} ${currentBasketTheme.text} ${currentBasketTheme.border} ${currentBasketTheme.glow} ${
                          isBasketBouncing ? 'scale-110 ring-4 ring-white/30' : 'hover:scale-[1.03]'
                        }` 
                      : theme.primaryBtn
                  }`}
                  title={isMega ? `Basket theme: ${currentBasketTheme.label} (Cycles on every item added)` : 'View Dine-in Basket'}
                >
                  <ShoppingBag className="w-4 h-4 shrink-0" />
                  <span className="hidden sm:inline">Dine-in Basket</span>
                  {cartCount > 0 && (
                    <span className={`w-5 h-5 ${isMega ? `${currentBasketTheme.badgeBg} ${currentBasketTheme.badgeText}` : 'bg-white text-slate-950'} rounded-full font-black text-[10px] flex items-center justify-center shadow-xs transition-colors`}>
                      {cartCount}
                    </span>
                  )}
                </button>

                <button
                  onClick={() => setIsBookingOpen(true)}
                  className={`hidden sm:inline-flex px-3.5 py-2 rounded-full font-bold text-xs transition-colors ${theme.secondaryBtn}`}
                >
                  Reserve Table
                </button>
              </>
            ) : (
              <a
                href="tel:+919876543210"
                className={`px-4 py-2 rounded-full font-bold text-xs shadow-md transition-all flex items-center gap-1.5 ${theme.primaryBtn}`}
              >
                <Phone className="w-3.5 h-3.5" />
                <span>Reserve via Call</span>
              </a>
            )}
          </div>
        </div>
      </header>

      {/* ------------------------------------------------------------- */}
      {/* HERO BANNER */}
      {/* ------------------------------------------------------------- */}
      <section className="relative min-h-[460px] flex items-center justify-center text-center px-4 sm:px-6 py-16 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1400&q=80" 
            alt="La Maison Gourmet Bistro Ambiance" 
            className={`w-full h-full object-cover ${isBase ? 'brightness-[0.85] opacity-25' : 'brightness-[0.35]'}`} 
          />
          <div className={`absolute inset-0 bg-gradient-to-t ${theme.heroOverlay}`}></div>
        </div>

        <div className="relative z-10 max-w-2xl mx-auto space-y-5 px-2">
          <div className={`inline-flex items-center gap-2 border px-4 py-1.5 rounded-full text-xs font-bold ${theme.heroBadge}`}>
            <Wine className="w-3.5 h-3.5" />
            <span>Michelin Guide Recognized • Cellar of 400+ Vintages</span>
          </div>

          <h1 className={`font-serif text-3xl sm:text-5xl md:text-6xl font-black tracking-wide leading-[1.1] ${theme.heroTitle}`}>
            La Maison Gourmet Bistro
          </h1>
          
          <p className={`text-sm sm:text-base font-medium max-w-xl mx-auto leading-relaxed ${theme.heroDesc}`}>
            An immersive sensory journey of French-Italian culinary craftsmanship, prime charcoal grills, wild truffle pasta, and handcrafted patisserie.
          </p>

          <div className="pt-3 flex items-center justify-center gap-3 flex-wrap">
            <a 
              href="#menu"
              className={`px-6 py-3 rounded-full text-xs uppercase tracking-wider transition-all hover:-translate-y-0.5 font-bold ${theme.primaryBtn}`}
            >
              Explore 22+ Gourmet Dishes
            </a>
            {!isBase ? (
              <button 
                onClick={() => setIsBookingOpen(true)}
                className={`px-6 py-3 rounded-full text-xs uppercase tracking-wider transition-colors font-bold ${theme.secondaryBtn}`}
              >
                Reserve Evening Table
              </button>
            ) : (
              <a 
                href="#contact"
                className={`px-6 py-3 rounded-full text-xs uppercase tracking-wider transition-colors font-bold ${theme.secondaryBtn}`}
              >
                Contact & Address
              </a>
            )}
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------- */}
      {/* SEARCH & VEG/NON-VEG FILTER (Pro & Mega) */}
      {/* ------------------------------------------------------------- */}
      {!isBase && (
        <div className="max-w-5xl mx-auto -mt-6 px-4 relative z-10 w-full">
          <div className={`p-4 rounded-3xl border flex flex-col md:flex-row items-center justify-between gap-3 ${theme.searchBarBg}`}>
            
            {/* Search Input */}
            <div className="w-full md:flex-1 relative">
              <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
              <input 
                type="text" 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search scallops, ribeye steak, tagliolini, soufflé, burrata..." 
                className={`w-full border rounded-full pl-10 pr-9 py-2.5 text-xs font-medium focus:outline-none ${theme.searchInput}`}
              />
              {searchQuery && (
                <button onClick={() => setSearchQuery('')} className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white">
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>

            {/* Diet Filter Chips */}
            <div className="flex items-center gap-2 w-full md:w-auto justify-center">
              <button
                onClick={() => setVegFilter('all')}
                className={`px-3 py-2 text-xs font-bold rounded-full transition-all ${
                  vegFilter === 'all' ? theme.filterAllActive : theme.filterInactive
                }`}
              >
                All Courses ({RESTAURANT_ITEMS.length})
              </button>
              <button
                onClick={() => setVegFilter('veg')}
                className={`px-3 py-2 text-xs font-bold rounded-full flex items-center gap-1.5 transition-all ${
                  vegFilter === 'veg' 
                    ? 'bg-emerald-950/90 text-emerald-300 border border-emerald-600 shadow-xs' 
                    : theme.filterInactive
                }`}
              >
                <span className="w-3.5 h-3.5 border border-emerald-500 flex items-center justify-center p-0.5 rounded-xs">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                </span>
                Vegetarian
              </button>
              <button
                onClick={() => setVegFilter('nonveg')}
                className={`px-3 py-2 text-xs font-bold rounded-full flex items-center gap-1.5 transition-all ${
                  vegFilter === 'nonveg' 
                    ? 'bg-rose-950/90 text-rose-300 border border-rose-600 shadow-xs' 
                    : theme.filterInactive
                }`}
              >
                <span className="w-3.5 h-3.5 border border-rose-600 flex items-center justify-center p-0.5 rounded-xs">
                  <span className="w-0 h-0 border-l-[3px] border-l-transparent border-r-[3px] border-r-transparent border-b-[5px] border-b-rose-500"></span>
                </span>
                Meat & Seafood
              </button>
            </div>

          </div>
        </div>
      )}

      {/* ------------------------------------------------------------- */}
      {/* RESTAURANT FOOD MENU SECTION (22+ Items) */}
      {/* ------------------------------------------------------------- */}
      <section id="menu" className="py-14 px-4 sm:px-6 max-w-6xl mx-auto w-full">
        <div className="text-center max-w-xl mx-auto mb-8 space-y-2">
          <span className={`font-black text-xs uppercase tracking-widest ${theme.menuSectionHeaderSub}`}>
            Curated Seasonal Courses
          </span>
          <h2 className={`font-serif text-3xl sm:text-4xl font-black ${theme.menuSectionHeaderTitle}`}>
            A La Carte & Tasting Collection
          </h2>
          <p className={`text-xs sm:text-sm ${theme.menuSectionHeaderDesc}`}>
            Explore our curated selection of 22+ gourmet dishes made with artisan ingredients, imported truffles, and charcoal fire.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex items-center justify-center gap-2 overflow-x-auto pb-4 mb-6 custom-scrollbar">
          {['All', 'Starters', 'Pastas & Mains', 'Steaks & Grills', 'Seafood', 'Desserts', 'Fine Beverages'].map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 text-xs font-bold rounded-full whitespace-nowrap transition-all ${
                activeCategory === cat ? theme.categoryActive : theme.categoryInactive
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Food Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map(item => {
            const isSoldOut = soldOutItemIds.includes(item.id);

            return (
              <div
                key={item.id}
                className={`rounded-3xl border transition-all duration-300 flex flex-col group overflow-hidden ${theme.cardBg} ${
                  isSoldOut ? 'border-rose-900/40 opacity-90' : ''
                }`}
              >
                {/* Image Container */}
                <div className={`aspect-[4/3] relative overflow-hidden ${theme.cardImageBg}`}>
                  <img 
                    src={item.image} 
                    alt={item.name} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                  />

                  {/* Chef Special Badge */}
                  {item.isChefSpecial && !isSoldOut && (
                    <div className="absolute top-2.5 left-2.5 bg-gradient-to-r from-amber-500 to-orange-500 text-slate-950 font-black text-[9px] uppercase px-2.5 py-0.5 rounded-full shadow-md flex items-center gap-1">
                      <Sparkle className="w-2.5 h-2.5" />
                      <span>Chef Signature</span>
                    </div>
                  )}

                  {/* Sold Out Overlay */}
                  {isSoldOut && (
                    <div className="absolute inset-0 bg-black/80 backdrop-blur-xs flex flex-col items-center justify-center text-center p-4 z-20">
                      <span className="bg-rose-900/90 text-rose-100 text-xs font-black uppercase tracking-wider px-3 py-1 rounded-full border border-rose-600 mb-1">
                        Sold Out Tonight
                      </span>
                      <span className="text-[10px] text-slate-300">Fresh batch tomorrow at 12:30 PM</span>
                    </div>
                  )}

                  {/* Veg / Non-Veg Indicator */}
                  <div className={`absolute top-2.5 right-2.5 backdrop-blur-xs p-1 rounded-lg shadow-xs flex items-center justify-center z-10 ${theme.cardIndicatorBg}`}>
                    {item.isVeg ? (
                      <div className="w-4 h-4 border border-emerald-500 flex items-center justify-center rounded-xs" title="100% Vegetarian">
                        <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                      </div>
                    ) : (
                      <div className="w-4 h-4 border border-rose-600 flex items-center justify-center rounded-xs" title="Non-Vegetarian">
                        <span className="w-0 h-0 border-l-[3px] border-l-transparent border-r-[3px] border-r-transparent border-b-[5px] border-b-rose-500"></span>
                      </div>
                    )}
                  </div>

                  {/* Price Badge */}
                  <div className={`absolute bottom-2.5 right-2.5 font-black text-xs px-3 py-1 rounded-full shadow-xs backdrop-blur-xs border ${theme.cardPriceBadge}`}>
                    ₹{item.price}
                  </div>
                </div>

                {/* Content */}
                <div className="p-5 flex flex-col flex-1 justify-between">
                  <div>
                    <div className={`flex items-center justify-between text-[10px] font-bold uppercase tracking-wider mb-1 ${theme.cardCatText}`}>
                      <span>{item.category}</span>
                      <span className={item.isVeg ? 'text-emerald-500 font-bold' : 'text-rose-500 font-bold'}>
                        {item.isVeg ? 'Vegetarian' : 'Non-Veg'}
                      </span>
                    </div>

                    <h3 className={`font-serif font-bold text-base leading-tight mb-1.5 transition-colors ${theme.cardTitle}`}>
                      {item.name}
                    </h3>
                    
                    <p className={`text-xs line-clamp-2 leading-relaxed mb-4 ${theme.cardDesc}`}>
                      {item.description}
                    </p>
                  </div>

                  {/* Bottom Actions */}
                  <div>
                    {!isBase ? (
                      isSoldOut ? (
                        <button 
                          disabled
                          className="w-full bg-rose-950/20 text-rose-400 font-bold py-2.5 rounded-full text-xs flex items-center justify-center gap-1.5 border border-rose-900/50 cursor-not-allowed opacity-80"
                        >
                          <X className="w-3.5 h-3.5" />
                          <span>Sold Out Tonight</span>
                        </button>
                      ) : (
                        <button 
                          onClick={() => addToCart(item)}
                          className={`w-full font-bold py-2.5 rounded-full text-xs transition-all flex items-center justify-center gap-1.5 border shadow-xs ${theme.cardAddBtn}`}
                        >
                          <Plus className="w-3.5 h-3.5" />
                          <span>Add to Dine-in Basket</span>
                        </button>
                      )
                    ) : (
                      <div className={`text-[11px] font-medium pt-2 border-t flex items-center justify-between ${theme.cardDesc}`}>
                        <span>{isSoldOut ? 'Sold Out' : 'Reserve / Order Table'}</span>
                        <a href="tel:+919876543210" className={`font-bold hover:underline ${theme.cardCatText}`}>
                          +91 98765 43210
                        </a>
                      </div>
                    )}

                    {/* Admin Quick Stock Toggle */}
                    <div className="mt-2.5 pt-2 border-t border-inherit flex items-center justify-between">
                      <button
                        onClick={() => toggleSoldOut(item.id)}
                        className="text-[9px] font-bold px-2 py-0.5 rounded-full transition-colors flex items-center gap-1 opacity-60 hover:opacity-100 text-rose-400 hover:bg-rose-950/30"
                        title="Admin shortcut to toggle dish sold out status"
                      >
                        <ShieldCheck className="w-2.5 h-2.5" />
                        <span>{isSoldOut ? 'Mark Available' : 'Mark Sold Out'}</span>
                      </button>
                    </div>
                  </div>

                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ------------------------------------------------------------- */}
      {/* CHEF DEGUSTATION & PAIRINGS (Pro & Mega) */}
      {/* ------------------------------------------------------------- */}
      {!isBase && (
        <section id="specials" className={`py-14 border-y px-4 sm:px-6 ${theme.specialsSectionBg}`}>
          <div className="max-w-5xl mx-auto space-y-6">
            <div className="text-center space-y-1">
              <span className={`font-black text-xs uppercase tracking-widest ${theme.menuSectionHeaderSub}`}>
                Sommelier Cellar Pairings
              </span>
              <h2 className={`font-serif text-2xl sm:text-3xl font-black ${theme.menuSectionHeaderTitle}`}>
                Chef Degustation Experiences
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className={`p-5 sm:p-6 rounded-3xl border shadow-xs flex flex-col sm:flex-row gap-4 items-center ${theme.specialsCardBg}`}>
                <img 
                  src="https://images.unsplash.com/photo-1558030006-450675393462?auto=format&fit=crop&w=300&q=80" 
                  alt="Steak & Wine Degustation" 
                  className={`w-24 h-24 rounded-2xl object-cover shrink-0 border ${theme.cardImageBg}`} 
                />
                <div className="space-y-1.5 flex-1 text-center sm:text-left">
                  <span className={`text-[9px] font-black uppercase px-2.5 py-0.5 rounded-full border ${theme.specialsBadge}`}>
                    Dinner Degustation (7 PM - 11 PM)
                  </span>
                  <h4 className={`font-serif font-bold text-base ${theme.specialsTitle}`}>Angus Prime Ribeye + Bordeaux Vintage Reserve</h4>
                  <p className={`text-xs ${theme.specialsDesc}`}>Charcoal-flamed ribeye with roasted bone marrow butter and vintage oak reduction.</p>
                  <div className="flex items-center justify-center sm:justify-start gap-2 pt-1">
                    <span className={`text-lg font-black ${theme.specialsPrice}`}>₹1,750</span>
                    <span className="text-xs line-through opacity-50">₹2,100</span>
                  </div>
                </div>
              </div>

              <div className={`p-5 sm:p-6 rounded-3xl border shadow-xs flex flex-col sm:flex-row gap-4 items-center ${theme.specialsCardBg}`}>
                <img 
                  src="https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&w=300&q=80" 
                  alt="Truffle Pasta & Souffle" 
                  className={`w-24 h-24 rounded-2xl object-cover shrink-0 border ${theme.cardImageBg}`} 
                />
                <div className="space-y-1.5 flex-1 text-center sm:text-left">
                  <span className={`text-[9px] font-black uppercase px-2.5 py-0.5 rounded-full border ${theme.specialsBadge}`}>
                    Vegetarian Grandeur
                  </span>
                  <h4 className={`font-serif font-bold text-base ${theme.specialsTitle}`}>Truffle Tagliolini + Valrhona Soufflé</h4>
                  <p className={`text-xs ${theme.specialsDesc}`}>24-month Parmigiano tagliolini paired with warm 70% molten chocolate soufflé.</p>
                  <div className="flex items-center justify-center sm:justify-start gap-2 pt-1">
                    <span className={`text-lg font-black ${theme.specialsPrice}`}>₹1,299</span>
                    <span className="text-xs line-through opacity-50">₹1,550</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ------------------------------------------------------------- */}
      {/* CULINARY HERITAGE */}
      {/* ------------------------------------------------------------- */}
      <section id="about" className="py-14 px-4 sm:px-6 max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="space-y-4">
            <span className={`font-black text-xs uppercase tracking-widest ${theme.aboutSub}`}>
              Our Culinary Philosophy
            </span>
            <h2 className={`font-serif text-3xl font-black leading-tight ${theme.aboutTitle}`}>
              Where timeless French technique meets modern gastronomy.
            </h2>
            <p className={`text-xs sm:text-sm leading-relaxed ${theme.aboutDesc}`}>
              Founded in 2018, La Maison Gourmet Bistro celebrates seasonality and artisanal producers. From hand-harvested Umbrian truffles to prime Angus cuts, every dish is an homage to epicurean passion.
            </p>
            <div className="grid grid-cols-2 gap-4 pt-2">
              <div className={`p-4 rounded-2xl border shadow-xs ${theme.aboutStatCard}`}>
                <div className={`text-2xl font-black ${theme.aboutStatNumber}`}>400+</div>
                <div className={`text-xs font-medium ${theme.aboutDesc}`}>Sommelier Wine Cellar</div>
              </div>
              <div className={`p-4 rounded-2xl border shadow-xs ${theme.aboutStatCard}`}>
                <div className={`text-2xl font-black ${theme.aboutStatNumber}`}>Michelin</div>
                <div className={`text-xs font-medium ${theme.aboutDesc}`}>Recommended Kitchen</div>
              </div>
            </div>
          </div>
          <div>
            <img 
              src="https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&w=800&q=80" 
              alt="La Maison Chef Plating" 
              className={`rounded-3xl shadow-xl w-full aspect-[4/3] object-cover border ${theme.cardBg}`} 
            />
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------- */}
      {/* GUEST ACCOLADES (Pro & Mega) */}
      {/* ------------------------------------------------------------- */}
      {!isBase && (
        <section id="reviews" className={`py-14 px-4 sm:px-6 border-t ${theme.reviewsBg}`}>
          <div className="max-w-5xl mx-auto space-y-6">
            <div className="text-center space-y-1">
              <div className="flex justify-center gap-1 text-amber-400 mb-1">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />)}
              </div>
              <h2 className={`font-serif text-2xl sm:text-3xl font-black ${theme.menuSectionHeaderTitle}`}>
                Acclaimed by Epicureans & Critics
              </h2>
              <p className={`text-xs ${theme.menuSectionHeaderDesc}`}>4.9 / 5.0 Rating across Michelin Guide, TripAdvisor & Zomato</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { name: "Ananya Singhania", review: "The Handcrafted Truffle Tagliolini is pure luxury. Flawless wine pairing recommended by the sommelier.", role: "Michelin Guide Reviewer", stars: 5 },
                { name: "Chef Vikram Oberoi", review: "Prime Angus Ribeye cooked to absolute medium-rare perfection with that smoky bone marrow crust. Outstanding!", role: "Executive Chef", stars: 5 },
                { name: "Dr. Siddharth Rao", review: "Reserved a romantic corner table for our anniversary. The molten Valrhona soufflé is unforgettable.", role: "Dining Regular", stars: 5 }
              ].map((rev, i) => (
                <div key={i} className={`p-6 rounded-3xl border flex flex-col justify-between shadow-xs ${theme.reviewCard}`}>
                  <div className="space-y-2">
                    <div className="flex gap-1 text-amber-400">
                      {[...Array(rev.stars)].map((_, s) => <Star key={s} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />)}
                    </div>
                    <p className={`text-xs italic leading-relaxed ${theme.reviewText}`}>"{rev.review}"</p>
                  </div>
                  <div className="flex items-center gap-3 pt-4 mt-4 border-t border-inherit">
                    <div className={`w-8 h-8 rounded-full border font-bold flex items-center justify-center text-xs ${theme.brandLogo}`}>
                      {rev.name[0]}
                    </div>
                    <div>
                      <div className={`font-bold text-xs ${theme.reviewName}`}>{rev.name}</div>
                      <div className={`text-[10px] ${theme.reviewRole}`}>{rev.role}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ------------------------------------------------------------- */}
      {/* INTERACTIVE MAP DEMO (Mega Plan ₹24,999: Restaurant & Apni Location) */}
      {/* ------------------------------------------------------------- */}
      {isMega && (
        <section id="location" className={`py-14 px-4 sm:px-6 border-t ${theme.reviewsBg}`}>
          <div className="max-w-5xl mx-auto space-y-6">
            
            {/* Header */}
            <div className="text-center space-y-1.5 max-w-xl mx-auto">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider bg-rose-500/10 text-rose-400 border border-rose-500/30">
                <Compass className="w-3.5 h-3.5 text-rose-400 animate-spin" style={{ animationDuration: '8s' }} />
                <span>Live GPS & Location Demo (₹24,999 Mega Plan)</span>
              </div>
              <h2 className={`font-serif text-2xl sm:text-4xl font-black ${theme.menuSectionHeaderTitle}`}>
                Find La Maison Bistro & Track Your Distance
              </h2>
              <p className={`text-xs sm:text-sm ${theme.menuSectionHeaderDesc}`}>
                Locate our flagship dining room, track live distance from <strong>"Apni Location"</strong>, and access instant turn-by-turn navigation.
              </p>
            </div>

            {/* Control Bar */}
            <div className={`p-4 rounded-3xl border ${theme.cardBg} flex flex-wrap items-center justify-between gap-3 shadow-md`}>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-2xl bg-rose-500/20 text-rose-400 border border-rose-500/40 flex items-center justify-center font-black">
                  <Navigation2 className="w-5 h-5 animate-pulse" />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-200 flex items-center gap-2">
                    <span>Distance from Apni Location:</span>
                    <span className="text-rose-400 font-black text-sm bg-rose-950/60 px-2 py-0.5 rounded-full border border-rose-500/30">
                      {distanceKm.toFixed(1)} km
                    </span>
                  </div>
                  <div className="text-[11px] text-slate-400 flex items-center gap-2 mt-0.5">
                    <span>ETA:</span>
                    <strong className="text-emerald-400">
                      {travelMode === 'driving' 
                        ? `~${Math.max(3, Math.round(distanceKm * 3.5))} mins (Chauffeur / Drive)` 
                        : travelMode === 'walking' 
                        ? `~${Math.max(6, Math.round(distanceKm * 11))} mins (Walk)` 
                        : `~${Math.max(4, Math.round(distanceKm * 6.5))} mins (Metro)`}
                    </strong>
                    <span className="opacity-40">•</span>
                    <span className="text-slate-300">Live Traffic: <span className="text-emerald-400 font-semibold">Clear 🟢</span></span>
                  </div>
                </div>
              </div>

              {/* Mode selector */}
              <div className="flex items-center gap-1.5 bg-[#0D070B] p-1 rounded-2xl border border-rose-950">
                <button
                  onClick={() => setTravelMode('driving')}
                  className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${
                    travelMode === 'driving' ? 'bg-rose-600 text-white shadow-xs' : 'text-slate-400 hover:text-white'
                  }`}
                >
                  <Car className="w-3.5 h-3.5" />
                  <span>Drive</span>
                </button>
                <button
                  onClick={() => setTravelMode('walking')}
                  className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${
                    travelMode === 'walking' ? 'bg-rose-600 text-white shadow-xs' : 'text-slate-400 hover:text-white'
                  }`}
                >
                  <Footprints className="w-3.5 h-3.5" />
                  <span>Walk</span>
                </button>
                <button
                  onClick={() => setTravelMode('transit')}
                  className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${
                    travelMode === 'transit' ? 'bg-rose-600 text-white shadow-xs' : 'text-slate-400 hover:text-white'
                  }`}
                >
                  <MapIcon className="w-3.5 h-3.5" />
                  <span>Metro</span>
                </button>
              </div>

              {/* Map View Switcher */}
              <div className="flex items-center gap-1 bg-[#0D070B] p-1 rounded-2xl border border-rose-950 text-[11px] font-bold">
                <button
                  onClick={() => setMapViewStyle('vector')}
                  className={`px-2.5 py-1.5 rounded-xl transition-all ${
                    mapViewStyle === 'vector' ? 'bg-rose-950 text-rose-300 border border-rose-800' : 'text-slate-400 hover:text-white'
                  }`}
                >
                  Bordeaux Map
                </button>
                <button
                  onClick={() => setMapViewStyle('satellite')}
                  className={`px-2.5 py-1.5 rounded-xl transition-all ${
                    mapViewStyle === 'satellite' ? 'bg-rose-950 text-rose-300 border border-rose-800' : 'text-slate-400 hover:text-white'
                  }`}
                >
                  Satellite View
                </button>
                <button
                  onClick={() => setMapViewStyle('google')}
                  className={`px-2.5 py-1.5 rounded-xl transition-all ${
                    mapViewStyle === 'google' ? 'bg-rose-950 text-rose-300 border border-rose-800' : 'text-slate-400 hover:text-white'
                  }`}
                >
                  Google Map View
                </button>
              </div>
            </div>

            {/* Map Canvas */}
            <div className="relative rounded-3xl border border-[#331424] overflow-hidden shadow-2xl bg-[#090306] min-h-[380px] sm:min-h-[460px] flex flex-col justify-between">
              {mapViewStyle === 'google' ? (
                <div className="w-full h-[460px] relative bg-slate-900">
                  <iframe
                    title="La Maison Google Maps Location"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3501.985659858348!2d77.2177215!3d28.6302829!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd37b0b65287%3A0x696b4ef84c2049e!2sConnaught%20Place%2C%20New%20Delhi!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                    className="w-full h-full border-0 filter invert-[0.9] hue-rotate-[180deg] contrast-[1.2]"
                    loading="lazy"
                    allowFullScreen
                  ></iframe>
                </div>
              ) : (
                <div className="relative w-full h-[420px] sm:h-[480px] overflow-hidden bg-[#0D0509]">
                  {/* Grid */}
                  <div className="absolute inset-0 opacity-40 pointer-events-none">
                    <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                      <defs>
                        <pattern id="gridPatBistro" width="40" height="40" patternUnits="userSpaceOnUse">
                          <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#2D1120" strokeWidth="0.75" />
                        </pattern>
                      </defs>
                      <rect width="100%" height="100%" fill="url(#gridPatBistro)" />
                      <path d="M 0 160 Q 240 180 500 130 T 1000 200" fill="none" stroke="#4A1830" strokeWidth="14" />
                      <path d="M 320 0 Q 340 240 280 500" fill="none" stroke="#4A1830" strokeWidth="12" />
                      <path d="M 680 0 Q 640 280 720 500" fill="none" stroke="#4A1830" strokeWidth="12" />
                    </svg>
                  </div>

                  {/* Route Polyline */}
                  <svg className="absolute inset-0 w-full h-full pointer-events-none z-10">
                    <line 
                      x1={`${userPinCoords.x}%`} 
                      y1={`${userPinCoords.y}%`} 
                      x2="70%" 
                      y2="30%" 
                      stroke="#E53E5B" 
                      strokeWidth="5" 
                      strokeOpacity="0.3"
                      strokeLinecap="round"
                    />
                    <line 
                      x1={`${userPinCoords.x}%`} 
                      y1={`${userPinCoords.y}%`} 
                      x2="70%" 
                      y2="30%" 
                      stroke="#F43F5E" 
                      strokeWidth="3" 
                      strokeDasharray="6,6"
                      strokeLinecap="round"
                      className="animate-pulse"
                    />
                  </svg>

                  {/* User Pin: Apni Location */}
                  <div 
                    className="absolute z-20 -translate-x-1/2 -translate-y-1/2 cursor-pointer transition-all duration-700 group"
                    style={{ left: `${userPinCoords.x}%`, top: `${userPinCoords.y}%` }}
                  >
                    <div className="absolute inset-0 w-14 h-14 -left-3 -top-3 rounded-full bg-rose-500/20 animate-ping pointer-events-none"></div>
                    <div className="flex flex-col items-center">
                      <div className="bg-[#14060C] border-2 border-rose-400 text-white px-3 py-1 rounded-full shadow-[0_0_20px_rgba(244,63,94,0.6)] flex items-center gap-1.5 whitespace-nowrap mb-1">
                        <span className="w-2 h-2 rounded-full bg-rose-400 animate-pulse"></span>
                        <span className="text-[11px] font-black text-rose-200">Apni Location</span>
                      </div>
                      <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-rose-600 to-amber-500 border-2 border-white shadow-xl flex items-center justify-center text-slate-950 font-bold">
                        <User className="w-4 h-4 text-white" />
                      </div>
                      <div className="text-[10px] font-semibold text-slate-300 bg-slate-950/80 px-2 py-0.5 rounded-md mt-1 border border-[#331424] shadow-xs max-w-[160px] truncate text-center">
                        {userLocationName}
                      </div>
                    </div>
                  </div>

                  {/* Bistro Destination Pin */}
                  <div 
                    className="absolute z-20 -translate-x-1/2 -translate-y-1/2 cursor-pointer transition-all group"
                    style={{ left: '70%', top: '30%' }}
                  >
                    <div className="absolute inset-0 w-16 h-16 -left-4 -top-4 rounded-full bg-amber-500/20 animate-ping pointer-events-none"></div>
                    <div className="flex flex-col items-center">
                      <div className="bg-[#1C0A14] border-2 border-amber-400/90 text-white px-3 py-1.5 rounded-2xl shadow-[0_0_25px_rgba(245,158,11,0.5)] flex flex-col items-center text-center gap-0.5 whitespace-nowrap mb-1">
                        <div className="flex items-center gap-1">
                          <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                          <span className="text-xs font-serif font-black text-amber-300">🍷 La Maison Bistro</span>
                        </div>
                        <span className="text-[9px] text-emerald-400 font-bold">Open Dinner • Till 11:30 PM</span>
                      </div>
                      <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-rose-700 via-amber-600 to-amber-300 border-2 border-white shadow-2xl flex items-center justify-center text-white font-black animate-bounce" style={{ animationDuration: '2.5s' }}>
                        <Utensils className="w-5 h-5 text-white" />
                      </div>
                      <div className="text-[10px] font-bold text-white bg-slate-950/90 px-2 py-0.5 rounded-md mt-1 border border-[#331424] shadow-sm">
                        Floor 12, Grand Heritage Plaza
                      </div>
                    </div>
                  </div>

                  {/* Distance badge on route */}
                  <div 
                    className="absolute z-20 -translate-x-1/2 -translate-y-1/2 bg-[#0D0509]/95 border border-rose-500/50 text-rose-300 px-2.5 py-1 rounded-full text-[10px] font-black shadow-lg backdrop-blur-xs flex items-center gap-1"
                    style={{ left: `${(userPinCoords.x + 70) / 2}%`, top: `${(userPinCoords.y + 30) / 2}%` }}
                  >
                    <Navigation className="w-3 h-3 text-rose-400" />
                    <span>{distanceKm.toFixed(1)} km</span>
                  </div>
                </div>
              )}

              {/* Bottom Preset Location Bar */}
              <div className="bg-[#090306] border-t border-[#331424] p-4 sm:p-5 flex flex-col md:flex-row items-center justify-between gap-4">
                <div className="w-full md:flex-1 space-y-2">
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-xs font-bold text-slate-300 flex items-center gap-1.5">
                      <LocateFixed className="w-3.5 h-3.5 text-rose-400" />
                      <span>Apni Location Presets:</span>
                    </span>
                    <button
                      onClick={() => handleDetectLocation()}
                      disabled={isDetectingLocation}
                      className="bg-rose-500/10 hover:bg-rose-600 hover:text-white text-rose-400 border border-rose-500/40 text-[11px] font-bold px-3 py-1 rounded-full transition-all flex items-center gap-1.5"
                    >
                      <RefreshCw className={`w-3 h-3 ${isDetectingLocation ? 'animate-spin' : ''}`} />
                      <span>{isDetectingLocation ? 'Locating...' : 'Auto-Detect Apni GPS'}</span>
                    </button>
                  </div>

                  <div className="flex items-center gap-1.5 flex-wrap">
                    {[
                      { label: 'Grand Hotel Boulevard', km: 2.1, coords: { x: 28, y: 72 } },
                      { label: 'Embassy Diplomatic Enclave', km: 1.2, coords: { x: 44, y: 52 } },
                      { label: 'Financial Tech Tower', km: 3.8, coords: { x: 16, y: 84 } },
                      { label: 'Heritage Lake View', km: 4.9, coords: { x: 12, y: 88 } }
                    ].map((preset, idx) => (
                      <button
                        key={idx}
                        onClick={() => handleDetectLocation(preset.label, preset.km, preset.coords)}
                        className={`text-[10px] font-bold px-2.5 py-1 rounded-full transition-all border ${
                          distanceKm === preset.km
                            ? 'bg-rose-600 text-white border-rose-400 shadow-xs'
                            : 'bg-[#160A11] text-slate-400 border-[#331424] hover:text-white'
                        }`}
                      >
                        {preset.label} ({preset.km} km)
                      </button>
                    ))}
                  </div>

                  {locationSuccessMsg && (
                    <div className="text-[11px] text-emerald-400 font-bold flex items-center gap-1 pt-0.5 animate-fadeIn">
                      <CheckCircle className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                      <span>{locationSuccessMsg}</span>
                    </div>
                  )}
                </div>

                <div className="flex items-center gap-2.5 w-full md:w-auto">
                  <a
                    href="https://www.google.com/maps/dir/?api=1&destination=La+Maison+Gourmet+Bistro"
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 md:flex-none bg-gradient-to-r from-rose-600 to-amber-600 hover:from-rose-500 hover:to-amber-500 text-white font-black px-4 py-2.5 rounded-full text-xs transition-all shadow-[0_0_20px_rgba(244,63,94,0.4)] flex items-center justify-center gap-1.5"
                  >
                    <Navigation className="w-3.5 h-3.5" />
                    <span>Start Navigation</span>
                    <ExternalLink className="w-3 h-3 opacity-70" />
                  </a>

                  <a
                    href="https://wa.me/?text=Here%20is%20the%20table%20location%20of%20La%20Maison%20Gourmet%20Bistro%3A%20Floor%2012%2C%20Grand%20Heritage%20Plaza%20https%3A%2F%2Fmaps.google.com"
                    target="_blank"
                    rel="noreferrer"
                    className="bg-[#160A11] hover:bg-[#250F1E] text-slate-200 border border-[#331424] hover:border-rose-500/40 px-3.5 py-2.5 rounded-full text-xs font-bold transition-all flex items-center justify-center gap-1.5"
                  >
                    <Share2 className="w-3.5 h-3.5 text-rose-400" />
                    <span>Share Location</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Access Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
              <div className={`p-4 rounded-2xl border ${theme.cardBg} space-y-1 shadow-xs`}>
                <div className="flex items-center gap-2 text-rose-400 font-bold text-xs">
                  <span className="w-7 h-7 rounded-xl bg-rose-500/10 border border-rose-500/30 flex items-center justify-center">🚗</span>
                  <span>Complimentary Valet</span>
                </div>
                <p className="text-[11px] text-slate-400">
                  Dedicated portico valet service for all dinner and degustation reservation guests.
                </p>
              </div>

              <div className={`p-4 rounded-2xl border ${theme.cardBg} space-y-1 shadow-xs`}>
                <div className="flex items-center gap-2 text-rose-400 font-bold text-xs">
                  <span className="w-7 h-7 rounded-xl bg-rose-500/10 border border-rose-500/30 flex items-center justify-center">🍾</span>
                  <span>Private Dining Suite</span>
                </div>
                <p className="text-[11px] text-slate-400">
                  Exclusive 14-seater sommelier room overlooking the skyline for intimate celebrations.
                </p>
              </div>

              <div className={`p-4 rounded-2xl border ${theme.cardBg} space-y-1 shadow-xs`}>
                <div className="flex items-center gap-2 text-rose-400 font-bold text-xs">
                  <span className="w-7 h-7 rounded-xl bg-rose-500/10 border border-rose-500/30 flex items-center justify-center">🕯️</span>
                  <span>Acoustic Live Jazz</span>
                </div>
                <p className="text-[11px] text-slate-400">
                  Live acoustic cello & jazz piano performances every Thursday through Sunday evening.
                </p>
              </div>
            </div>

          </div>
        </section>
      )}

      {/* ------------------------------------------------------------- */}
      {/* FOOTER */}
      {/* ------------------------------------------------------------- */}
      <footer id="contact" className={`py-14 px-4 sm:px-6 border-t ${theme.footerBg}`}>
        <div className={`max-w-5xl mx-auto grid grid-cols-1 ${!isBase ? 'md:grid-cols-3' : 'md:grid-cols-2'} gap-8 mb-10`}>
          
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <div className={`w-8 h-8 rounded-xl border flex items-center justify-center font-bold ${theme.brandLogo}`}>
                <Utensils className="w-4 h-4" />
              </div>
              <h3 className={`font-serif text-2xl font-bold ${theme.footerTitle}`}>La Maison Bistro</h3>
            </div>
            <p className={`text-xs leading-relaxed ${theme.footerDesc}`}>
              Fine European gastronomy, wood-fired charcoal grills, and curated vintage wine pairings.
            </p>
            <div className={`inline-flex items-center gap-2 border px-3.5 py-1.5 rounded-full text-xs font-bold ${theme.footerBadge}`}>
              <Clock className="w-3.5 h-3.5" />
              <span>Lunch: 12:30–3:30 PM | Dinner: 7:00–11:30 PM</span>
            </div>
          </div>

          <div className="space-y-3 text-xs">
            <h4 className={`font-bold uppercase tracking-wider text-xs mb-3 ${theme.footerHeading}`}>Location & Bookings</h4>
            <p className={`flex items-center gap-2 ${theme.footerDesc}`}>
              <MapPin className="w-4 h-4 shrink-0 opacity-80" />
              Floor 12, Grand Heritage Tower, Avenue 5
            </p>
            <p className={`flex items-center gap-2 ${theme.footerDesc}`}>
              <Phone className="w-4 h-4 shrink-0 opacity-80" />
              +91 98765 43210 (VIP Table Concierge)
            </p>
            <div className="pt-2">
              <a
                href="https://wa.me/919876543210?text=Hi%20La%20Maison%20Bistro%2C%20I%20would%20like%20to%20reserve%20a%20table%20for%20dinner"
                target="_blank" 
                rel="noreferrer"
                className="inline-flex items-center gap-2 bg-emerald-900/80 hover:bg-emerald-800 text-emerald-200 border border-emerald-700/80 px-4 py-2 rounded-full text-xs font-bold transition-all shadow-md"
              >
                <MessageCircle className="w-4 h-4 text-emerald-200" />
                <span>WhatsApp Table Concierge</span>
              </a>
            </div>
          </div>

          {!isBase && (
            <div className="space-y-3">
              <h4 className={`font-bold uppercase tracking-wider text-xs ${theme.footerHeading}`}>Connect & Accolades</h4>
              <p className={`text-xs ${theme.footerDesc}`}>Follow our chef tasting notes and cellar additions:</p>
              
              <div className="flex items-center gap-3">
                <a 
                  href="https://instagram.com" 
                  target="_blank" 
                  rel="noreferrer"
                  className={`flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold transition-all border ${theme.footerSocialBtn}`}
                >
                  <span>Instagram</span>
                </a>
                <a 
                  href="https://facebook.com" 
                  target="_blank" 
                  rel="noreferrer"
                  className={`flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold transition-all border ${theme.footerSocialBtn}`}
                >
                  <span>Facebook</span>
                </a>
              </div>

              <button 
                onClick={() => setIsBookingOpen(true)}
                className={`w-full mt-2 px-4 py-2.5 rounded-full text-xs font-bold transition-all ${theme.primaryBtn}`}
              >
                Reserve Evening Table
              </button>
            </div>
          )}
        </div>

        <div className="pt-6 border-t text-center text-xs opacity-60 border-inherit">
          © 2026 La Maison Gourmet Bistro • {isBase ? 'Base Plan ₹12,999' : isPro ? 'Pro Plan ₹16,999' : 'Mega Plan ₹24,999'}
        </div>
      </footer>

      {/* ------------------------------------------------------------- */}
      {/* BASKET DRAWER (Pro & Mega) */}
      {/* ------------------------------------------------------------- */}
      {isCartOpen && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex justify-end animate-fadeIn">
          <div className="w-full max-w-md bg-[#12060B] border-l border-[#331424] h-full flex flex-col justify-between p-5 text-white shadow-2xl animate-slideLeft">
            
            {/* Header */}
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-[#331424]">
                <div className="flex items-center gap-2">
                  <ShoppingBag className="w-5 h-5 text-rose-400" />
                  <h3 className="font-serif font-bold text-lg text-white">Dine-in Gourmet Basket</h3>
                </div>
                <button 
                  onClick={() => setIsCartOpen(false)}
                  className="p-1.5 rounded-full hover:bg-white/10 text-slate-400 hover:text-white"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Table Selector */}
              <div className="my-3 p-3 rounded-2xl bg-[#1A0A11] border border-[#331424] flex items-center justify-between text-xs">
                <span className="text-slate-400">Dine-in Seating:</span>
                <select 
                  value={tableNumber} 
                  onChange={(e) => setTableNumber(e.target.value)}
                  className="bg-[#0E0408] border border-rose-900/60 rounded-lg px-2.5 py-1 text-rose-300 font-bold focus:outline-none"
                >
                  <option value="Table 01 (Window View)">Table 01 (Window View)</option>
                  <option value="Table 04 (Private Booth)">Table 04 (Private Booth)</option>
                  <option value="Table 07 (Terrace Skyline)">Table 07 (Terrace Skyline)</option>
                  <option value="Table 12 (Cellar Room)">Table 12 (Cellar Room)</option>
                  <option value="VIP Suite 1">VIP Suite 1</option>
                </select>
              </div>

              {/* Items List */}
              <div className="max-h-[320px] overflow-y-auto space-y-3 pr-1 custom-scrollbar">
                {cart.length === 0 ? (
                  <div className="py-12 text-center text-slate-400 space-y-2">
                    <Utensils className="w-8 h-8 mx-auto text-rose-400/50" />
                    <p className="text-sm font-medium">Your dining basket is currently empty.</p>
                    <p className="text-xs text-slate-500">Add some delicacies from the menu above!</p>
                  </div>
                ) : (
                  cart.map(({ item, qty }) => (
                    <div key={item.id} className="p-3 rounded-2xl bg-[#1A0A11] border border-[#331424] flex items-center justify-between gap-3">
                      <img src={item.image} alt={item.name} className="w-12 h-12 rounded-xl object-cover" />
                      <div className="flex-1 min-w-0">
                        <h4 className="font-serif text-xs font-bold text-white truncate">{item.name}</h4>
                        <div className="text-[11px] text-rose-400 font-bold">₹{item.price * qty}</div>
                      </div>
                      <div className="flex items-center gap-1 bg-[#0E0408] rounded-xl border border-rose-950 p-0.5">
                        <button onClick={() => removeFromCart(item.id)} className="p-1 hover:bg-white/10 rounded-lg text-slate-300">
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="px-2 text-xs font-bold">{qty}</span>
                        <button onClick={() => addToCart(item)} className="p-1 hover:bg-white/10 rounded-lg text-slate-300">
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </div>

            {/* Bottom Actions: 3 Basket Options */}
            {cart.length > 0 && (
              <div className="pt-4 border-t border-[#331424] space-y-3">
                <div className="space-y-1 text-xs">
                  <div className="flex justify-between text-slate-400">
                    <span>Food Subtotal</span>
                    <span>₹{cartTotal}</span>
                  </div>
                  <div className="flex justify-between text-slate-400">
                    <span>GST (5%) + Service (5%)</span>
                    <span>₹{gstAmount + serviceCharge}</span>
                  </div>
                  <div className="flex justify-between text-sm font-bold text-white pt-1 border-t border-[#331424]">
                    <span>Total Amount</span>
                    <span className="text-rose-400 text-base font-black">₹{grandTotal}</span>
                  </div>
                </div>

                {/* 3 Buttons */}
                <div className="space-y-2 pt-1">
                  {/* Option 1: Direct WhatsApp Order */}
                  <a
                    href={generateWhatsAppOrderLink()}
                    target="_blank"
                    rel="noreferrer"
                    className="w-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-2.5 rounded-full text-xs transition-all flex items-center justify-center gap-2 shadow-md"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Send Order to Kitchen via WhatsApp</span>
                  </a>

                  {/* Option 2: Simulated UPI Payment */}
                  <button
                    onClick={() => {
                      setIsCartOpen(false);
                      setIsUpiModalOpen(true);
                    }}
                    className="w-full bg-gradient-to-r from-rose-600 to-amber-600 hover:from-rose-500 hover:to-amber-500 text-white font-bold py-2.5 rounded-full text-xs transition-all flex items-center justify-center gap-2 shadow-md"
                  >
                    <CreditCard className="w-4 h-4" />
                    <span>Pay at Table via UPI / Card (₹{grandTotal})</span>
                  </button>

                  {/* Option 3: Printable Bill / Receipt */}
                  <button
                    onClick={() => {
                      setIsCartOpen(false);
                      setIsBillReceiptOpen(true);
                    }}
                    className="w-full bg-[#1A0A11] hover:bg-[#250F1E] text-slate-300 border border-[#331424] font-bold py-2 rounded-full text-xs transition-colors flex items-center justify-center gap-1.5"
                  >
                    <Receipt className="w-3.5 h-3.5 text-rose-400" />
                    <span>View Detailed Table Bill / Kacha Receipt</span>
                  </button>
                </div>
              </div>
            )}

          </div>
        </div>
      )}

      {/* ------------------------------------------------------------- */}
      {/* TABLE RESERVATION MODAL */}
      {/* ------------------------------------------------------------- */}
      {isBookingOpen && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-[#14060C] border border-[#331424] rounded-3xl max-w-md w-full p-6 text-white shadow-2xl space-y-4 animate-scaleUp">
            <div className="flex items-center justify-between border-b border-[#331424] pb-3">
              <div className="flex items-center gap-2">
                <Utensils className="w-5 h-5 text-rose-400" />
                <h3 className="font-serif font-bold text-lg">Reserve Evening Table</h3>
              </div>
              <button onClick={() => { setIsBookingOpen(false); setBookingConfirmed(false); }} className="text-slate-400 hover:text-white">
                <X className="w-5 h-5" />
              </button>
            </div>

            {bookingConfirmed ? (
              <div className="py-6 text-center space-y-3">
                <div className="w-14 h-14 bg-emerald-950/80 border border-emerald-500 text-emerald-400 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h4 className="font-serif text-lg font-bold text-white">Table Reservation Confirmed!</h4>
                <p className="text-xs text-slate-300 leading-relaxed">
                  We look forward to welcoming you for {bookingGuests} on {bookingDate} at {bookingTime}. A confirmation SMS & WhatsApp reminder has been sent.
                </p>
                <button
                  onClick={() => { setIsBookingOpen(false); setBookingConfirmed(false); }}
                  className="w-full bg-rose-600 hover:bg-rose-500 text-white font-bold py-2.5 rounded-full text-xs transition-colors mt-2"
                >
                  Close & View Menu
                </button>
              </div>
            ) : (
              <div className="space-y-3 text-xs">
                <div>
                  <label className="text-slate-400 font-bold block mb-1">Your Full Name</label>
                  <input
                    type="text"
                    value={customerName}
                    onChange={(e) => setCustomerName(e.target.value)}
                    placeholder="e.g. Rahul Sharma"
                    className="w-full bg-[#0D0408] border border-[#331424] rounded-xl px-3 py-2 text-white placeholder:text-slate-600 focus:outline-none focus:border-rose-500"
                  />
                </div>

                <div>
                  <label className="text-slate-400 font-bold block mb-1">Phone Number</label>
                  <input
                    type="tel"
                    value={customerPhone}
                    onChange={(e) => setCustomerPhone(e.target.value)}
                    placeholder="+91 98765 43210"
                    className="w-full bg-[#0D0408] border border-[#331424] rounded-xl px-3 py-2 text-white placeholder:text-slate-600 focus:outline-none focus:border-rose-500"
                  />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="text-slate-400 font-bold block mb-1">Number of Guests</label>
                    <select
                      value={bookingGuests}
                      onChange={(e) => setBookingGuests(e.target.value)}
                      className="w-full bg-[#0D0408] border border-[#331424] rounded-xl px-3 py-2 text-white focus:outline-none"
                    >
                      <option value="2 Guests (Intimate)">2 Guests (Intimate)</option>
                      <option value="4 Guests (Family)">4 Guests (Family)</option>
                      <option value="6 Guests (Party)">6 Guests (Party)</option>
                      <option value="8+ Guests (VIP Suite)">8+ Guests (VIP Suite)</option>
                    </select>
                  </div>

                  <div>
                    <label className="text-slate-400 font-bold block mb-1">Seating Time</label>
                    <select
                      value={bookingTime}
                      onChange={(e) => setBookingTime(e.target.value)}
                      className="w-full bg-[#0D0408] border border-[#331424] rounded-xl px-3 py-2 text-white focus:outline-none"
                    >
                      <option value="1:00 PM (Lunch)">1:00 PM (Lunch)</option>
                      <option value="7:30 PM (Dinner)">7:30 PM (Dinner)</option>
                      <option value="8:30 PM (Dinner)">8:30 PM (Dinner)</option>
                      <option value="9:30 PM (Late Degustation)">9:30 PM (Late Degustation)</option>
                    </select>
                  </div>
                </div>

                <button
                  onClick={() => setBookingConfirmed(true)}
                  className="w-full bg-gradient-to-r from-rose-600 to-amber-600 hover:from-rose-500 hover:to-amber-500 text-white font-bold py-3 rounded-full text-xs uppercase tracking-wider transition-all shadow-lg mt-2"
                >
                  Confirm Table Booking Online
                </button>
              </div>
            )}
          </div>
        </div>
      )}

      {/* ------------------------------------------------------------- */}
      {/* BILL / KACHA RECEIPT MODAL */}
      {/* ------------------------------------------------------------- */}
      {isBillReceiptOpen && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-[#FAF8F5] text-[#1E1B18] rounded-3xl max-w-sm w-full p-6 shadow-2xl font-mono text-xs space-y-4 animate-scaleUp">
            <div className="text-center border-b border-dashed border-slate-400 pb-3">
              <div className="font-serif font-black text-base text-[#9C2738]">LA MAISON GOURMET BISTRO</div>
              <div className="text-[10px] text-slate-600">Floor 12, Grand Heritage Tower • Ph: +91 98765 43210</div>
              <div className="text-[10px] text-slate-500 mt-1">GSTIN: 07AAACL1234F1Z8</div>
              <div className="text-[11px] font-bold text-slate-800 mt-1">{tableNumber} • Dine-in Slip</div>
            </div>

            <div className="space-y-1.5 max-h-48 overflow-y-auto">
              {cart.map(({ item, qty }) => (
                <div key={item.id} className="flex justify-between">
                  <span>{item.name} x {qty}</span>
                  <span className="font-bold">₹{item.price * qty}</span>
                </div>
              ))}
            </div>

            <div className="border-t border-dashed border-slate-400 pt-2 space-y-1 text-[11px]">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>₹{cartTotal}</span>
              </div>
              <div className="flex justify-between">
                <span>CGST (2.5%) + SGST (2.5%)</span>
                <span>₹{gstAmount}</span>
              </div>
              <div className="flex justify-between">
                <span>Hospitality Service (5%)</span>
                <span>₹{serviceCharge}</span>
              </div>
              <div className="flex justify-between font-black text-sm text-[#9C2738] pt-1 border-t border-slate-300">
                <span>NET PAYABLE</span>
                <span>₹{grandTotal}</span>
              </div>
            </div>

            <div className="text-center text-[10px] text-slate-500 pt-2 border-t border-dashed border-slate-400">
              Merci pour votre visite! • Have a wonderful evening.
            </div>

            <button
              onClick={() => setIsBillReceiptOpen(false)}
              className="w-full bg-[#9C2738] text-white font-bold py-2 rounded-full font-sans text-xs"
            >
              Close Receipt
            </button>
          </div>
        </div>
      )}

      {/* ------------------------------------------------------------- */}
      {/* UPI / PAYMENT MODAL */}
      {/* ------------------------------------------------------------- */}
      {isUpiModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-[#14060C] border border-[#331424] rounded-3xl max-w-sm w-full p-6 text-white shadow-2xl space-y-4 text-center animate-scaleUp">
            <div className="flex items-center justify-between border-b border-[#331424] pb-2">
              <span className="font-serif font-bold text-sm text-amber-300">Scan & Pay via UPI</span>
              <button onClick={() => setIsUpiModalOpen(false)} className="text-slate-400 hover:text-white">
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="space-y-1">
              <div className="text-xs text-slate-400">Total Bill Amount</div>
              <div className="text-2xl font-black text-rose-400">₹{grandTotal}</div>
            </div>

            {/* QR Code */}
            <div className="bg-white p-4 rounded-2xl w-44 h-44 mx-auto flex flex-col items-center justify-center border-2 border-rose-500 shadow-xl">
              <QrCode className="w-32 h-32 text-slate-950" />
              <span className="text-[9px] text-slate-700 font-bold mt-1">UPI ID: lamaison@okhdfc</span>
            </div>

            <div className="text-[11px] text-slate-400">
              Supports GPay, PhonePe, Paytm, BHIM & Apple Pay
            </div>

            <button
              onClick={() => {
                alert(`Simulated Table Payment of ₹${grandTotal} Successful! Kitchen order ticket sent to Chef.`);
                setIsUpiModalOpen(false);
                clearCart();
              }}
              className="w-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-2.5 rounded-full text-xs transition-colors"
            >
              Simulate Successful Payment
            </button>
          </div>
        </div>
      )}

      {/* ------------------------------------------------------------- */}
      {/* ADMIN LIVE STOCK MANAGER MODAL */}
      {/* ------------------------------------------------------------- */}
      {isManagerModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-[#12060B] border border-[#331424] rounded-3xl max-w-xl w-full p-6 text-white shadow-2xl space-y-4 animate-scaleUp">
            <div className="flex items-center justify-between border-b border-[#331424] pb-3">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-rose-400" />
                <h3 className="font-serif font-bold text-lg">Live Kitchen Stock & Sold-Out Manager</h3>
              </div>
              <button onClick={() => setIsManagerModalOpen(false)} className="text-slate-400 hover:text-white">
                <X className="w-5 h-5" />
              </button>
            </div>

            <p className="text-xs text-slate-300 leading-relaxed">
              Toggle any item in real-time. When marked sold-out, customers cannot add it to basket and see a clear visual badge.
            </p>

            <div className="max-h-72 overflow-y-auto space-y-2 pr-1 custom-scrollbar">
              {RESTAURANT_ITEMS.map(item => {
                const isSoldOut = soldOutItemIds.includes(item.id);
                return (
                  <div key={item.id} className="p-3 rounded-2xl bg-[#1A0A11] border border-[#331424] flex items-center justify-between gap-3">
                    <div className="flex items-center gap-3 min-w-0">
                      <img src={item.image} alt={item.name} className="w-10 h-10 rounded-xl object-cover" />
                      <div className="min-w-0">
                        <div className="font-serif text-xs font-bold text-white truncate">{item.name}</div>
                        <div className="text-[10px] text-slate-400">{item.category} • ₹{item.price}</div>
                      </div>
                    </div>

                    <button
                      onClick={() => toggleSoldOut(item.id)}
                      className={`px-3 py-1.5 rounded-full text-xs font-bold transition-all ${
                        isSoldOut 
                          ? 'bg-rose-600 text-white' 
                          : 'bg-emerald-950 text-emerald-400 border border-emerald-700'
                      }`}
                    >
                      {isSoldOut ? 'Mark Available' : 'Mark Sold Out'}
                    </button>
                  </div>
                );
              })}
            </div>

            <button
              onClick={() => setIsManagerModalOpen(false)}
              className="w-full bg-rose-600 hover:bg-rose-500 text-white font-bold py-2.5 rounded-full text-xs transition-colors"
            >
              Done & Save Changes
            </button>
          </div>
        </div>
      )}

      {/* ------------------------------------------------------------- */}
      {/* FLOATING QUICK BASKET BUTTON (Mobile & Desktop Floating on Pro & Mega) */}
      {/* ------------------------------------------------------------- */}
      {!isBase && cartCount > 0 && (
        <div className="fixed bottom-6 left-6 z-40 animate-slideUp">
          <button
            onClick={() => setIsCartOpen(true)}
            className={`${
              isMega 
                ? `${currentBasketTheme.bg} ${currentBasketTheme.text} ${currentBasketTheme.border} ${currentBasketTheme.glow} ${
                    isBasketBouncing ? 'scale-110 ring-4 ring-white/40' : 'hover:scale-105'
                  }` 
                : 'bg-gradient-to-r from-[#801328] to-[#9C1C35] text-white border border-[#B82342]/40 shadow-2xl'
            } px-4 py-3 rounded-full font-bold text-xs shadow-2xl transition-all flex items-center gap-2.5`}
            title="Open Dining Basket"
          >
            <ShoppingBag className="w-4 h-4 shrink-0" />
            <span className="font-serif font-black text-xs">View Basket ({cartCount})</span>
            <span className={`px-2 py-0.5 rounded-full text-[10px] font-black ${
              isMega ? `${currentBasketTheme.badgeBg} ${currentBasketTheme.badgeText}` : 'bg-black/40 text-white'
            }`}>
              ₹{grandTotal}
            </span>
          </button>
        </div>
      )}

      {/* ------------------------------------------------------------- */}
      {/* MEGA PLAN: SOMMELIER AI ASSISTANT WIDGET */}
      {/* ------------------------------------------------------------- */}
      {isMega && (
        <>
          <button
            onClick={() => setIsAiOpen(!isAiOpen)}
            className="fixed bottom-6 right-6 z-40 bg-gradient-to-r from-rose-600 to-amber-600 text-white p-3.5 rounded-full shadow-[0_0_25px_rgba(244,63,94,0.5)] hover:scale-105 transition-all flex items-center gap-2 border border-rose-400/40"
            title="Chat with Maison Sommelier AI"
          >
            <Bot className="w-5 h-5 animate-pulse" />
            <span className="text-xs font-serif font-bold hidden sm:inline">Sommelier AI</span>
          </button>

          {isAiOpen && (
            <div className="fixed bottom-20 right-6 z-50 w-80 sm:w-96 bg-[#14060C] border border-[#331424] rounded-3xl shadow-2xl p-4 text-white space-y-3 animate-scaleUp">
              <div className="flex items-center justify-between border-b border-[#331424] pb-2">
                <div className="flex items-center gap-2">
                  <Wine className="w-4 h-4 text-rose-400" />
                  <span className="font-serif font-bold text-xs text-amber-300">Maison Sommelier AI</span>
                </div>
                <button onClick={() => setIsAiOpen(false)} className="text-slate-400 hover:text-white">
                  <X className="w-4 h-4" />
                </button>
              </div>

              <div className="h-60 overflow-y-auto space-y-2 text-xs pr-1 custom-scrollbar">
                {aiChat.map((msg, idx) => (
                  <div key={idx} className={`p-2.5 rounded-2xl ${msg.sender === 'bot' ? 'bg-[#1F0D15] text-slate-200 border border-[#3D1426]' : 'bg-rose-600 text-white ml-6'}`}>
                    {msg.text}
                  </div>
                ))}
              </div>

              <div className="flex items-center gap-2 pt-1 border-t border-[#331424]">
                <input
                  type="text"
                  value={aiInput}
                  onChange={(e) => setAiInput(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleAiAsk()}
                  placeholder="Ask wine pairing or chef specials..."
                  className="flex-1 bg-[#0D0408] border border-[#331424] rounded-full px-3 py-1.5 text-xs text-white placeholder:text-slate-600 focus:outline-none focus:border-rose-500"
                />
                <button onClick={handleAiAsk} className="p-2 bg-rose-600 rounded-full text-white hover:bg-rose-500">
                  <Send className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          )}
        </>
      )}

      {/* ------------------------------------------------------------- */}
      {/* MEGA PLAN: LIVE KDS CHEF DISPLAY SCREEN */}
      {/* ------------------------------------------------------------- */}
      {showKdsDashboard && (
        <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4">
          <div className="bg-[#12060B] border border-amber-500/50 rounded-3xl max-w-4xl w-full p-6 text-white shadow-2xl space-y-4 animate-scaleUp">
            <div className="flex items-center justify-between border-b border-[#331424] pb-3">
              <div className="flex items-center gap-2">
                <Layers className="w-6 h-6 text-amber-400 animate-pulse" />
                <div>
                  <h3 className="font-serif font-bold text-lg text-white">Live Kitchen KDS Display & Sommelier Station</h3>
                  <div className="text-[10px] text-amber-400 font-mono">Kitchen Dispatch Station #02 • Realtime Tickets</div>
                </div>
              </div>
              <button onClick={() => setShowKdsDashboard(false)} className="text-slate-400 hover:text-white">
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="p-4 rounded-2xl bg-[#1A0A11] border border-amber-500/40 space-y-2">
                <div className="flex items-center justify-between text-xs font-bold text-amber-300">
                  <span>Ticket #041 • Table 07</span>
                  <span className="bg-amber-500/20 text-amber-300 px-2 py-0.5 rounded-full text-[10px]">Searing Now</span>
                </div>
                <div className="text-xs text-slate-300 space-y-1">
                  <div>1x Prime Angus Ribeye (Med-Rare)</div>
                  <div>1x Truffle Tagliolini</div>
                  <div>1x Bordeaux Reserve Spritz</div>
                </div>
                <div className="text-[10px] text-slate-500 pt-2 border-t border-[#331424]">Chef Marc • 4 mins ago</div>
              </div>

              <div className="p-4 rounded-2xl bg-[#1A0A11] border border-rose-500/40 space-y-2">
                <div className="flex items-center justify-between text-xs font-bold text-rose-300">
                  <span>Ticket #042 • VIP Suite 1</span>
                  <span className="bg-rose-500/20 text-rose-300 px-2 py-0.5 rounded-full text-[10px]">Plating</span>
                </div>
                <div className="text-xs text-slate-300 space-y-1">
                  <div>2x Chilean Sea Bass Meunière</div>
                  <div>2x Valrhona Soufflé</div>
                  <div>1x San Pellegrino (750ml)</div>
                </div>
                <div className="text-[10px] text-slate-500 pt-2 border-t border-[#331424]">Chef Claire • 8 mins ago</div>
              </div>

              <div className="p-4 rounded-2xl bg-[#1A0A11] border border-emerald-500/40 space-y-2">
                <div className="flex items-center justify-between text-xs font-bold text-emerald-300">
                  <span>Ticket #043 • Table 04</span>
                  <span className="bg-emerald-500/20 text-emerald-300 px-2 py-0.5 rounded-full text-[10px]">Ready to Serve</span>
                </div>
                <div className="text-xs text-slate-300 space-y-1">
                  <div>1x Burrata Pugliese Tartine</div>
                  <div>1x Forest Mushroom Arancini</div>
                </div>
                <div className="text-[10px] text-slate-500 pt-2 border-t border-[#331424]">Ready • Runner #03</div>
              </div>
            </div>

            <button
              onClick={() => setShowKdsDashboard(false)}
              className="w-full bg-amber-600 hover:bg-amber-500 text-slate-950 font-bold py-2.5 rounded-full text-xs transition-colors"
            >
              Close Kitchen Screen
            </button>
          </div>
        </div>
      )}

    </div>
  );
};
