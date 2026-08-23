import React, { useState, useMemo } from 'react';
import { DemoItem, PlanType } from '../data/demos';
import { PRICING_PLANS } from '../data/content';
const basePrice = PRICING_PLANS.find(p => p.id === 'base')?.price || '₹24,999';
const proPrice = PRICING_PLANS.find(p => p.id === 'pro')?.price || '₹39,999';
const maxPrice = PRICING_PLANS.find(p => p.id === 'max')?.price || '₹59,999';

import { 
  Coffee, Clock, Phone, MapPin, Search, X, Plus, Minus, Check,
  ChevronRight, Star, ShoppingBag, Send, Bot, Sparkles, Flame,
  CheckCircle2, MessageCircle, Heart, CreditCard, ShieldCheck,
  Receipt, ArrowRight, UtensilsCrossed, AlertCircle, Sparkle,
  QrCode, User, ShoppingCart, RefreshCw, Layers, Navigation,
  Navigation2, Compass, LocateFixed, Car, Footprints, ExternalLink,
  Share2, Map as MapIcon, CheckCircle
} from 'lucide-react';

interface CafeDemoProps {
  demo: DemoItem;
  isMobile: boolean;
  isTablet: boolean;
  onPlanChange?: (plan: PlanType) => void;
}

interface MenuItem {
  id: string;
  name: string;
  category: 'Hot Coffee' | 'Cold Coffee' | 'Bakery' | 'Breakfast' | 'Snacks' | 'Desserts';
  price: number;
  description: string;
  image: string;
  isVeg: boolean;
  isBestseller?: boolean;
  isChefSpecial?: boolean;
  animationType?: 'steam' | 'cold' | 'cheese' | 'salt' | 'chocolate';
}

// Dynamic Vibrant Basket Color Themes for dynamic button color cycling
const BASKET_THEMES = [
  { id: 'cyan', bg: 'bg-cyan-500', hoverBg: 'hover:bg-cyan-600', text: 'text-slate-950', border: 'border-cyan-400', badgeBg: 'bg-slate-950', badgeText: 'text-cyan-300', glow: 'shadow-[0_0_20px_rgba(6,182,212,0.6)]', label: 'Electric Cyan' },
  { id: 'indigo', bg: 'bg-indigo-600', hoverBg: 'hover:bg-indigo-700', text: 'text-white', border: 'border-indigo-400', badgeBg: 'bg-indigo-950', badgeText: 'text-indigo-200', glow: 'shadow-[0_0_20px_rgba(99,102,241,0.6)]', label: 'Vivid Indigo' },
  { id: 'emerald', bg: 'bg-emerald-500', hoverBg: 'hover:bg-emerald-600', text: 'text-emerald-950', border: 'border-emerald-400', badgeBg: 'bg-emerald-950', badgeText: 'text-emerald-300', glow: 'shadow-[0_0_20px_rgba(16,185,129,0.6)]', label: 'Fresh Emerald' },
  { id: 'amber', bg: 'bg-amber-500', hoverBg: 'hover:bg-amber-600', text: 'text-amber-950', border: 'border-amber-400', badgeBg: 'bg-amber-950', badgeText: 'text-amber-300', glow: 'shadow-[0_0_20px_rgba(245,158,11,0.6)]', label: 'Amber Sunset' },
  { id: 'ruby', bg: 'bg-rose-500', hoverBg: 'hover:bg-rose-600', text: 'text-white', border: 'border-rose-400', badgeBg: 'bg-rose-950', badgeText: 'text-rose-200', glow: 'shadow-[0_0_20px_rgba(244,63,94,0.6)]', label: 'Ruby Crimson' },
  { id: 'purple', bg: 'bg-purple-600', hoverBg: 'hover:bg-purple-700', text: 'text-white', border: 'border-purple-400', badgeBg: 'bg-purple-950', badgeText: 'text-purple-200', glow: 'shadow-[0_0_20px_rgba(168,85,247,0.6)]', label: 'Royal Violet' }
];

// 30 Handcrafted Cafe Menu Items across all categories + Chef Specials
const CAFE_ITEMS: MenuItem[] = [
  // 1. Hot Coffee
  {
    id: 'c1',
    name: 'Artisan Hazelnut Cappuccino',
    category: 'Hot Coffee',
    price: 220,
    description: 'Double shot 100% Chikmagalur Arabica espresso with velvety micro-foam and roasted hazelnut infusion.',
    image: 'https://images.unsplash.com/photo-1572442388796-11668a67e53d?auto=format&fit=crop&w=600&q=80',
    isVeg: true,
    isBestseller: true,
    animationType: 'steam'
  },
  {
    id: 'c2',
    name: 'Spanish Cortado Reserve',
    category: 'Hot Coffee',
    price: 190,
    description: 'Equal parts single-origin intense espresso and warm silky textured milk for coffee purists.',
    image: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=600&q=80',
    isVeg: true,
    animationType: 'steam'
  },
  {
    id: 'c3',
    name: 'Cinnamon Spiced Vanilla Latte',
    category: 'Hot Coffee',
    price: 240,
    description: 'Rich espresso folded with organic Madagascar vanilla bean syrup and Sri Lankan cinnamon bark.',
    image: 'https://images.unsplash.com/photo-1541167760496-1628856ab772?auto=format&fit=crop&w=600&q=80',
    isVeg: true,
    animationType: 'steam'
  },
  {
    id: 'c4',
    name: 'Dark Belgian Mocha Ganache',
    category: 'Hot Coffee',
    price: 260,
    description: 'Signature espresso poured over 70% molten Belgian dark chocolate with steamed milk.',
    image: 'https://images.unsplash.com/photo-1578314675249-a6910f80cc4e?auto=format&fit=crop&w=600&q=80',
    isVeg: true,
    isBestseller: true,
    animationType: 'chocolate'
  },
  {
    id: 'c21',
    name: 'Ethiopian Yirgacheffe Pour-Over',
    category: 'Hot Coffee',
    price: 230,
    description: 'Specialty V60 manual pour-over delivering bright floral jasmine aromatics and bergamot citrus notes.',
    image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=600&q=80',
    isVeg: true,
    isChefSpecial: true,
    animationType: 'steam'
  },
  {
    id: 'c22',
    name: 'Pistachio Cardamom Latte',
    category: 'Hot Coffee',
    price: 270,
    description: 'Middle-Eastern inspired roast with crushed pistachio butter, green cardamom, and micro-steamed whole milk.',
    image: 'https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&w=600&q=80',
    isVeg: true,
    isChefSpecial: true,
    animationType: 'steam'
  },

  // 2. Cold Coffee & Cold Brews
  {
    id: 'c5',
    name: 'Nitro Cold Brew Reserve (18hr)',
    category: 'Cold Coffee',
    price: 250,
    description: 'Nitrogen-infused slow steeped 18-hour cold brew with a creamy stout-like head and zero bitterness.',
    image: 'https://images.unsplash.com/photo-1517701550927-30cf4ba1dba5?auto=format&fit=crop&w=600&q=80',
    isVeg: true,
    isBestseller: true,
    animationType: 'cold'
  },
  {
    id: 'c6',
    name: 'Salted Butter Caramel Frappe',
    category: 'Cold Coffee',
    price: 270,
    description: 'Blended arabica coffee, sea-salted caramel drizzle, and fresh whipped cream.',
    image: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=600&q=80',
    isVeg: true,
    animationType: 'cold'
  },
  {
    id: 'c7',
    name: 'Iced Spanish Sweet Latte',
    category: 'Cold Coffee',
    price: 230,
    description: 'Double espresso poured over chilled condensed milk and crystal clear ice cubes.',
    image: 'https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&w=600&q=80',
    isVeg: true,
    animationType: 'cold'
  },
  {
    id: 'c8',
    name: 'Ceremonial Japanese Matcha Iced Latte',
    category: 'Cold Coffee',
    price: 280,
    description: 'First-harvest Uji matcha whisked with chilled oat milk and natural agave nectar.',
    image: 'https://images.unsplash.com/photo-1536256263959-770b48d82b0a?auto=format&fit=crop&w=600&q=80',
    isVeg: true,
    animationType: 'cold'
  },
  {
    id: 'c23',
    name: 'Lotus Biscoff Thick Frappe',
    category: 'Cold Coffee',
    price: 290,
    description: 'Crushed Belgian speculoos cookies blended with cold brew espresso, caramel, and topped with cookie crunch.',
    image: 'https://images.unsplash.com/photo-1577968897966-3d4325b36b61?auto=format&fit=crop&w=600&q=80',
    isVeg: true,
    isBestseller: true,
    animationType: 'cold'
  },
  {
    id: 'c24',
    name: 'Valencia Orange Sparkling Cold Brew',
    category: 'Cold Coffee',
    price: 260,
    description: 'Sparkling botanical tonic water topped with espresso cold brew and fresh Valencia orange slice.',
    image: 'https://images.unsplash.com/photo-1517701550927-30cf4ba1dba5?auto=format&fit=crop&w=600&q=80',
    isVeg: true,
    isChefSpecial: true,
    animationType: 'cold'
  },

  // 3. Bakery & Viennoiserie
  {
    id: 'c9',
    name: 'Warm Belgian Chocolate Croissant',
    category: 'Bakery',
    price: 180,
    description: '27-layer flaky French butter pastry stuffed with dual batons of Valrhona dark chocolate.',
    image: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=600&q=80',
    isVeg: true,
    isBestseller: true,
    animationType: 'chocolate'
  },
  {
    id: 'c10',
    name: 'Toasted Almond Butter Danish',
    category: 'Bakery',
    price: 195,
    description: 'Golden puff pastry filled with almond frangipane cream and topped with toasted flaked almonds.',
    image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=600&q=80',
    isVeg: true,
    animationType: 'steam'
  },
  {
    id: 'c11',
    name: 'Nordic Cardamom Cinnamon Swirl',
    category: 'Bakery',
    price: 165,
    description: 'Traditional braided Swedish sweet bun infused with crushed green cardamom and raw brown sugar.',
    image: 'https://images.unsplash.com/photo-1586985289688-ca3cf47d3e6e?auto=format&fit=crop&w=600&q=80',
    isVeg: true,
    animationType: 'steam'
  },
  {
    id: 'c25',
    name: 'Pistachio Cream Supreme Croissant',
    category: 'Bakery',
    price: 240,
    description: 'Round wheel croissant filled with silky Sicilian pistachio ganache and coated in crushed pistachios.',
    image: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=600&q=80',
    isVeg: true,
    isChefSpecial: true,
    animationType: 'chocolate'
  },
  {
    id: 'c26',
    name: 'Smoked Paprika & English Cheddar Scone',
    category: 'Bakery',
    price: 175,
    description: 'Savory warm golden scone packed with aged sharp cheddar, chives, and Spanish smoked paprika.',
    image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=600&q=80',
    isVeg: true,
    animationType: 'cheese'
  },

  // 4. Breakfast & Sourdough Toast
  {
    id: 'c12',
    name: 'Signature Avocado Sourdough Toast',
    category: 'Breakfast',
    price: 340,
    description: 'Artisan sourdough slice with Hass avocado mash, sun-dried tomatoes, feta cheese, and dukkah spice.',
    image: 'https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=600&q=80',
    isVeg: true,
    isBestseller: true,
    animationType: 'salt'
  },
  {
    id: 'c13',
    name: 'Truffle Scrambled Eggs on Brioche',
    category: 'Breakfast',
    price: 320,
    description: 'Farm-fresh organic eggs slow-scrambled with white truffle oil, chives, and toasted brioche bread.',
    image: 'https://images.unsplash.com/photo-1528736235302-52922df5c122?auto=format&fit=crop&w=600&q=80',
    isVeg: false,
    animationType: 'salt'
  },
  {
    id: 'c14',
    name: 'Mediterranean Shakshuka Skillet',
    category: 'Breakfast',
    price: 360,
    description: 'Spiced bell pepper and heirloom tomato sauce with poached eggs, creamy goat cheese, and garlic baguette.',
    image: 'https://images.unsplash.com/photo-1590412200988-a436970781fa?auto=format&fit=crop&w=600&q=80',
    isVeg: false,
    animationType: 'steam'
  },
  {
    id: 'c15',
    name: 'Nutella Banana Sourdough French Toast',
    category: 'Breakfast',
    price: 290,
    description: 'Thick sourdough soaked in vanilla custard, griddled golden, topped with Nutella and caramelized bananas.',
    image: 'https://images.unsplash.com/photo-1484723091739-30a097e8f929?auto=format&fit=crop&w=600&q=80',
    isVeg: true,
    animationType: 'chocolate'
  },
  {
    id: 'c27',
    name: 'Burrata & Pesto Heirloom Toast',
    category: 'Breakfast',
    price: 380,
    description: 'Whole artisanal burrata cheese sphere on garlic-rubbed sourdough with fresh basil pesto & balsamic drizzle.',
    image: 'https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=600&q=80',
    isVeg: true,
    isChefSpecial: true,
    animationType: 'cheese'
  },

  // 5. Gourmet Snacks, Pizzas & Pastas
  {
    id: 'c16',
    name: 'Smoked Chicken & Basil Pesto Panini',
    category: 'Snacks',
    price: 380,
    description: 'Grilled herb-smoked chicken breast, house Genovese basil pesto, mozzarella, and roasted peppers in ciabatta.',
    image: 'https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=600&q=80',
    isVeg: false,
    isBestseller: true,
    animationType: 'cheese'
  },
  {
    id: 'c17',
    name: 'Molten Three-Cheese Sourdough Melt',
    category: 'Snacks',
    price: 310,
    description: 'Aged English cheddar, gooey mozzarella, and Swiss emmental melted between butter-crisped sourdough.',
    image: 'https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=600&q=80',
    isVeg: true,
    isBestseller: true,
    animationType: 'cheese'
  },
  {
    id: 'c18',
    name: 'Parmesan Truffle Potato Wedges',
    category: 'Snacks',
    price: 240,
    description: 'Crispy skin-on golden potato wedges tossed in aromatic Italian truffle oil, sea salt, and aged parmesan.',
    image: 'https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&w=600&q=80',
    isVeg: true,
    animationType: 'salt'
  },
  {
    id: 'c28',
    name: 'Truffle Mushroom & Goat Cheese Flatbread',
    category: 'Snacks',
    price: 420,
    description: 'Crispy thin woodfired sourdough flatbread topped with sautéed wild porcini mushrooms, goat cheese & thyme.',
    image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=600&q=80',
    isVeg: true,
    isChefSpecial: true,
    animationType: 'cheese'
  },
  {
    id: 'c29',
    name: 'Handmade Basil Ricotta Ravioli',
    category: 'Snacks',
    price: 410,
    description: 'Fresh artisanal pasta parcels stuffed with ricotta & spinach, tossed in creamy sun-dried tomato sauce.',
    image: 'https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&w=600&q=80',
    isVeg: true,
    isChefSpecial: true,
    animationType: 'steam'
  },

  // 6. Desserts & Gelato
  {
    id: 'c19',
    name: 'Blueberry Belgian Waffle Stack',
    category: 'Desserts',
    price: 330,
    description: 'Crisp pearl-sugar Belgian waffles stacked with wild blueberry compote and pure Madagascar vanilla gelato.',
    image: 'https://images.unsplash.com/photo-1562376552-0d160a2f238d?auto=format&fit=crop&w=600&q=80',
    isVeg: true,
    isBestseller: true,
    animationType: 'chocolate'
  },
  {
    id: 'c20',
    name: 'Nova Signature Espresso Tiramisu',
    category: 'Desserts',
    price: 290,
    description: 'Savoiardi ladyfingers soaked in our freshly pulled espresso, layered with whipped mascarpone cream & cocoa.',
    image: 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?auto=format&fit=crop&w=600&q=80',
    isVeg: true,
    animationType: 'chocolate'
  },
  {
    id: 'c30',
    name: 'San Sebastián Burnt Basque Cheesecake',
    category: 'Desserts',
    price: 310,
    description: 'Crustless caramelized Basque cheesecake with a molten creamy center and sea-salted caramel drizzle.',
    image: 'https://images.unsplash.com/photo-1533134242443-d4fd215305ad?auto=format&fit=crop&w=600&q=80',
    isVeg: true,
    isBestseller: true,
    animationType: 'chocolate'
  }
];

const CATEGORIES = ['All Items', 'Hot Coffee', 'Cold Coffee', 'Bakery', 'Breakfast', 'Snacks', 'Desserts'] as const;

export const CafeDemo: React.FC<CafeDemoProps> = ({ demo, isMobile }) => {
  const isBase = demo.plan === 'Base';
  const isPro = demo.plan === 'Pro';
  const isMax = demo.plan === 'Max';

  // State Management
  const [activeCategory, setActiveCategory] = useState<string>('All Items');
  const [vegFilter, setVegFilter] = useState<'all' | 'veg' | 'nonveg'>('all');
  const [searchQuery, setSearchQuery] = useState('');
  
  // Sold Out & Live Stock Management (Manager / Admin Mode)
  const [soldOutItemIds, setSoldOutItemIds] = useState<string[]>(['c21', 'c26']); // Sample sold out items that can be toggled
  const [isManagerModalOpen, setIsManagerModalOpen] = useState(false);
  const [managerSearchQuery, setManagerSearchQuery] = useState('');
  const [managerCategoryFilter, setManagerCategoryFilter] = useState<string>('All Items');

  // Dynamic Basket Color Cycling & Animation
  const [basketThemeIndex, setBasketThemeIndex] = useState(0);
  const [isBasketBouncing, setIsBasketBouncing] = useState(false);
  const currentBasketTheme = BASKET_THEMES[basketThemeIndex];

  // Cart & Order State
  const [cart, setCart] = useState<{ item: MenuItem; qty: number }[]>([
    { item: CAFE_ITEMS[0], qty: 1 },
    { item: CAFE_ITEMS[12], qty: 1 } // Belgian chocolate croissant
  ]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [selectedTable, setSelectedTable] = useState('Table 02');
  const [customerName, setCustomerName] = useState('Aman Verma');
  const [customerPhone, setCustomerPhone] = useState('9876543210');
  const [extraRequirements, setExtraRequirements] = useState('Extra sugar sachet & oat milk if possible');
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState<'gpay' | 'phonepe' | 'paytm' | 'bhim' | 'fampay' | 'counter'>('gpay');
  const [showBillDetails, setShowBillDetails] = useState(true);
  const [activeCheckoutTab, setActiveCheckoutTab] = useState<'details' | 'payment' | 'tracking'>('details');
  const [orderStatus, setOrderStatus] = useState<'received' | 'kitchen' | 'ready' | 'completed'>('received');

  // Reservation Modal State
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [bookingSuccess, setBookingSuccess] = useState(false);

  // Max-Specific Interactive Touch Micro-Animations
  const [activeAnimation, setActiveAnimation] = useState<{ item: MenuItem; type: string } | null>(null);

  // Max AI Barista Chatbox State
  const [isAiChatOpen, setIsAiChatOpen] = useState(false);
  const [chatMessages, setChatMessages] = useState<Array<{ role: 'ai' | 'user'; text: string; recommendedItem?: MenuItem }>>([
    { 
      role: 'ai', 
      text: '☕ Welcome to Nova Café! I am your AI Barista. Tell me your mood or taste preference (e.g. sweet, strong dark roast, healthy breakfast, pistachio croissant, woodfired flatbread), and I will recommend the best handcrafted dish!' 
    }
  ]);
  const [chatInput, setChatInput] = useState('');

  // Max Live Kitchen KDS Dashboard View
  const [showKdsDashboard, setShowKdsDashboard] = useState(false);

  // Max Live Location & Interactive Map Demo State
  const [userLocationName, setUserLocationName] = useState('Connaught Plaza / Metro Hub');
  const [distanceKm, setDistanceKm] = useState(1.8);
  const [travelMode, setTravelMode] = useState<'driving' | 'walking' | 'transit'>('driving');
  const [mapViewStyle, setMapViewStyle] = useState<'vector' | 'satellite' | 'google'>('vector');
  const [isDetectingLocation, setIsDetectingLocation] = useState(false);
  const [locationSuccessMsg, setLocationSuccessMsg] = useState('');
  const [userPinCoords, setUserPinCoords] = useState<{ x: number; y: number }>({ x: 26, y: 74 });

  // Handle Detect / Recalculate User Location
  const handleDetectLocation = (presetName?: string, presetKm?: number, coords?: { x: number; y: number }) => {
    setIsDetectingLocation(true);
    setLocationSuccessMsg('');

    if (presetName && presetKm && coords) {
      setTimeout(() => {
        setUserLocationName(presetName);
        setDistanceKm(presetKm);
        setUserPinCoords(coords);
        setIsDetectingLocation(false);
        setLocationSuccessMsg(`📍 Location synced: ${presetName} (${presetKm} km away)`);
        setTimeout(() => setLocationSuccessMsg(''), 4000);
      }, 500);
      return;
    }

    // Try browser geolocation if available, with safe fallback
    if (typeof window !== 'undefined' && navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (pos) => {
          setIsDetectingLocation(false);
          setUserLocationName('Apni Live GPS Location');
          setDistanceKm(1.4);
          setUserPinCoords({ x: 30, y: 68 });
          setLocationSuccessMsg('📍 GPS Location Synced! Nova Café is 1.4 km (~5 min drive) from you.');
          setTimeout(() => setLocationSuccessMsg(''), 4500);
        },
        (err) => {
          // Graceful fallback for iframe permissions
          setIsDetectingLocation(false);
          setUserLocationName('Apni Current Area (Near Roastery District)');
          setDistanceKm(1.2);
          setUserPinCoords({ x: 34, y: 65 });
          setLocationSuccessMsg('📍 Live Area Detected! Distance: 1.2 km (~4 mins drive).');
          setTimeout(() => setLocationSuccessMsg(''), 4500);
        },
        { timeout: 3000 }
      );
    } else {
      setTimeout(() => {
        setIsDetectingLocation(false);
        setUserLocationName('Apni Current City Location');
        setDistanceKm(1.5);
        setUserPinCoords({ x: 28, y: 70 });
        setLocationSuccessMsg('📍 Live Location Connected!');
        setTimeout(() => setLocationSuccessMsg(''), 4000);
      }, 600);
    }
  };

  // Calculations
  const cartTotal = useMemo(() => cart.reduce((sum, { item, qty }) => sum + (item.price * qty), 0), [cart]);
  const cartCount = useMemo(() => cart.reduce((sum, { qty }) => sum + qty, 0), [cart]);
  const taxes = Math.round(cartTotal * 0.05); // 5% GST
  const grandTotal = cartTotal + taxes;

  // Dynamic theme resolution for Base ({basePrice}), Pro ({proPrice}), Max ({maxPrice})
  const theme = useMemo(() => {
    if (isBase) {
      return {
        mode: 'base',
        container: 'bg-[#FAF7F2] text-[#1C1917] font-sans antialiased selection:bg-[#B45309] selection:text-white',
        topBar: 'bg-[#F3EDE2] text-[#78716C] border-[#E7DFD3]',
        topBadge: 'bg-white text-[#B45309] border-[#E7DFD3]',
        topClockIcon: 'text-[#B45309]',
        topText: 'text-[#1C1917]',
        topBtn: 'bg-white hover:bg-[#FAF7F2] text-[#1C1917] border-[#E7DFD3]',
        header: 'bg-[#FAF7F2]/95 border-[#E7DFD3]',
        brandLogo: 'bg-[#F3EDE2] text-[#B45309] border-[#E7DFD3]',
        brandTitle: 'text-[#1C1917]',
        brandSub: 'text-[#78716C]',
        navLink: 'text-[#57534E] hover:text-[#B45309]',
        heroBg: 'from-[#FAF7F2] via-[#F3EDE2]/80 to-[#FAF7F2]',
        heroOverlay: 'from-[#FAF7F2] via-[#FAF7F2]/70 to-[#FAF7F2]/85',
        heroBadge: 'bg-white text-[#B45309] border-[#E7DFD3] shadow-xs',
        heroTitle: 'text-[#1C1917]',
        heroDesc: 'text-[#57534E]',
        primaryBtn: 'bg-[#B45309] hover:bg-[#92400E] text-white font-bold shadow-md',
        secondaryBtn: 'bg-white hover:bg-[#F3EDE2] text-[#1C1917] border border-[#E7DFD3] font-bold shadow-xs',
        searchBarBg: 'bg-white border-[#E7DFD3] shadow-lg',
        searchInput: 'bg-[#FAF7F2] border-[#E7DFD3] text-[#1C1917] placeholder:text-[#A8A29E] focus:border-[#B45309]',
        filterAllActive: 'bg-[#B45309] text-white font-bold shadow-xs',
        filterInactive: 'bg-[#FAF7F2] text-[#57534E] border-[#E7DFD3] hover:bg-white',
        menuSectionHeaderSub: 'text-[#B45309]',
        menuSectionHeaderTitle: 'text-[#1C1917]',
        menuSectionHeaderDesc: 'text-[#78716C]',
        categoryActive: 'bg-[#B45309] text-white font-bold shadow-xs',
        categoryInactive: 'bg-white text-[#57534E] border-[#E7DFD3] hover:bg-[#F3EDE2] hover:text-[#1C1917]',
        cardBg: 'bg-white border-[#E7DFD3] shadow-sm hover:border-[#B45309]/50 hover:shadow-md',
        cardImageBg: 'bg-[#F3EDE2]',
        cardCatText: 'text-[#B45309]',
        cardTitle: 'text-[#1C1917] group-hover:text-[#B45309]',
        cardDesc: 'text-[#78716C]',
        cardPriceBadge: 'bg-white/95 text-[#B45309] border-[#E7DFD3]',
        cardIndicatorBg: 'bg-white/95 border-[#E7DFD3]',
        cardAddBtn: 'bg-white hover:bg-[#B45309] text-[#B45309] hover:text-white border-[#B45309]/40',
        sectionSpecialsBg: 'bg-[#F3EDE2] border-[#E7DFD3]',
        specialsCardBg: 'bg-white border-[#E7DFD3]',
        specialsBadge: 'bg-[#FAF7F2] text-[#B45309] border-[#E7DFD3]',
        specialsTitle: 'text-[#1C1917]',
        specialsDesc: 'text-[#78716C]',
        specialsPrice: 'text-[#B45309]',
        aboutSub: 'text-[#B45309]',
        aboutTitle: 'text-[#1C1917]',
        aboutDesc: 'text-[#57534E]',
        aboutStatCard: 'bg-white border-[#E7DFD3]',
        aboutStatNumber: 'text-[#B45309]',
        reviewsBg: 'bg-[#F3EDE2] border-[#E7DFD3]',
        reviewCard: 'bg-white border-[#E7DFD3]',
        reviewText: 'text-[#57534E]',
        reviewName: 'text-[#1C1917]',
        reviewRole: 'text-[#78716C]',
        footerBg: 'bg-[#1C1917] text-[#FAF7F2] border-[#292524]',
        footerTitle: 'text-white',
        footerDesc: 'text-[#A8A29E]',
        footerBadge: 'bg-[#292524] text-amber-300 border-[#44403C]',
        footerHeading: 'text-white',
        footerLink: 'text-[#D6D3D1]',
        footerSocialBtn: 'bg-[#292524] hover:bg-[#44403C] text-white border-[#44403C]',
        modalBg: 'bg-white text-[#1C1917] border-[#E7DFD3]',
        modalHeader: 'text-[#1C1917]',
        modalInput: 'bg-[#FAF7F2] border-[#E7DFD3] text-[#1C1917] focus:border-[#B45309]',
        modalCard: 'bg-[#FAF7F2] border-[#E7DFD3]',
      };
    } else if (isPro) {
      // PRO: Dark Luxury Antique Gold Theme (#120D11, #191714, #1D1B17, #B59A5A, #806B3F, #E8DFC9, #A9A18F, #3A3428)
      return {
        mode: 'pro',
        container: 'bg-[#120D11] text-[#E8DFC9] font-sans antialiased selection:bg-[#B59A5A] selection:text-[#120D11]',
        topBar: 'bg-[#191714] text-[#A9A18F] border-[#3A3428]',
        topBadge: 'bg-[#120D11] text-[#B59A5A] border-[#3A3428]',
        topClockIcon: 'text-[#B59A5A]',
        topText: 'text-[#E8DFC9]',
        topBtn: 'bg-[#1D1B17] hover:bg-[#191714] text-[#E8DFC9] border-[#3A3428] hover:border-[#B59A5A]/50',
        header: 'bg-[#120D11]/95 border-[#3A3428]',
        brandLogo: 'bg-[#1D1B17] text-[#B59A5A] border-[#3A3428]',
        brandTitle: 'text-[#E8DFC9] font-serif',
        brandSub: 'text-[#A9A18F]',
        navLink: 'text-[#A9A18F] hover:text-[#B59A5A]',
        heroBg: 'from-[#120D11] via-[#191714] to-[#120D11]',
        heroOverlay: 'from-[#120D11] via-[#120D11]/70 to-[#120D11]/85',
        heroBadge: 'bg-[#191714] text-[#B59A5A] border-[#3A3428] shadow-xs',
        heroTitle: 'text-[#E8DFC9] font-serif',
        heroDesc: 'text-[#A9A18F]',
        primaryBtn: 'bg-[#1D1B17] hover:bg-[#B59A5A] text-[#B59A5A] hover:text-[#120D11] border border-[#B59A5A] font-bold shadow-md transition-colors',
        secondaryBtn: 'bg-[#191714] hover:bg-[#1D1B17] text-[#E8DFC9] border border-[#3A3428] font-bold',
        searchBarBg: 'bg-[#1D1B17] border-[#3A3428] shadow-2xl',
        searchInput: 'bg-[#191714] border-[#3A3428] text-[#E8DFC9] placeholder:text-[#A9A18F]/50 focus:border-[#B59A5A]',
        filterAllActive: 'bg-[#B59A5A] text-[#120D11] font-bold shadow-xs',
        filterInactive: 'bg-[#191714] text-[#A9A18F] border-[#3A3428] hover:bg-[#1D1B17] hover:text-[#E8DFC9]',
        menuSectionHeaderSub: 'text-[#B59A5A]',
        menuSectionHeaderTitle: 'text-[#E8DFC9] font-serif',
        menuSectionHeaderDesc: 'text-[#A9A18F]',
        categoryActive: 'bg-[#B59A5A] text-[#120D11] font-bold shadow-xs',
        categoryInactive: 'bg-[#1D1B17] text-[#A9A18F] border-[#3A3428] hover:bg-[#191714] hover:text-[#E8DFC9]',
        cardBg: 'bg-[#1D1B17] border-[#3A3428] shadow-md hover:border-[#B59A5A]/60',
        cardImageBg: 'bg-[#191714]',
        cardCatText: 'text-[#B59A5A]',
        cardTitle: 'text-[#E8DFC9] font-serif group-hover:text-[#B59A5A]',
        cardDesc: 'text-[#A9A18F]',
        cardPriceBadge: 'bg-[#120D11]/90 text-[#B59A5A] border-[#3A3428]',
        cardIndicatorBg: 'bg-[#120D11]/95 border-[#3A3428]',
        cardAddBtn: 'bg-[#191714] hover:bg-[#B59A5A] text-[#B59A5A] hover:text-[#120D11] border-[#3A3428] hover:border-[#B59A5A]',
        sectionSpecialsBg: 'bg-[#191714] border-[#3A3428]',
        specialsCardBg: 'bg-[#1D1B17] border-[#3A3428]',
        specialsBadge: 'bg-[#191714] text-[#B59A5A] border-[#3A3428]',
        specialsTitle: 'text-[#E8DFC9] font-serif',
        specialsDesc: 'text-[#A9A18F]',
        specialsPrice: 'text-[#B59A5A]',
        aboutSub: 'text-[#B59A5A]',
        aboutTitle: 'text-[#E8DFC9] font-serif',
        aboutDesc: 'text-[#A9A18F]',
        aboutStatCard: 'bg-[#1D1B17] border-[#3A3428]',
        aboutStatNumber: 'text-[#B59A5A]',
        reviewsBg: 'bg-[#191714] border-[#3A3428]',
        reviewCard: 'bg-[#1D1B17] border-[#3A3428]',
        reviewText: 'text-[#E8DFC9]/90',
        reviewName: 'text-[#E8DFC9]',
        reviewRole: 'text-[#A9A18F]',
        footerBg: 'bg-[#120D11] text-[#E8DFC9] border-[#3A3428]',
        footerTitle: 'text-[#E8DFC9] font-serif',
        footerDesc: 'text-[#A9A18F]',
        footerBadge: 'bg-[#191714] text-[#B59A5A] border-[#3A3428]',
        footerHeading: 'text-[#E8DFC9]',
        footerLink: 'text-[#A9A18F]',
        footerSocialBtn: 'bg-[#1D1B17] hover:bg-[#191714] text-[#E8DFC9] border-[#3A3428] hover:border-[#B59A5A]/50',
        modalBg: 'bg-[#1D1B17] text-[#E8DFC9] border-[#3A3428]',
        modalHeader: 'text-[#E8DFC9] font-serif',
        modalInput: 'bg-[#191714] border-[#3A3428] text-[#E8DFC9] placeholder:text-[#A9A18F]/50 focus:border-[#B59A5A]',
        modalCard: 'bg-[#191714] border-[#3A3428]',
      };
    } else {
      // MAX: Cyber-Dark Tech-Luxury Inspired by https://brijeshchauhan008.netlify.app/
      return {
        mode: 'max',
        container: 'bg-[#090D16] text-[#F1F5F9] font-sans antialiased selection:bg-cyan-500 selection:text-slate-950',
        topBar: 'bg-[#0D1322] text-slate-400 border-slate-800/80',
        topBadge: 'bg-[#111827] text-cyan-300 border-slate-800',
        topClockIcon: 'text-cyan-400',
        topText: 'text-slate-200',
        topBtn: 'bg-[#111827] hover:bg-cyan-950 text-slate-200 hover:text-cyan-300 border-slate-800 hover:border-cyan-500/50',
        header: 'bg-[#090D16]/90 border-slate-800/80',
        brandLogo: 'bg-[#0E1424] text-cyan-400 border-cyan-500/30 shadow-[0_0_15px_rgba(6,182,212,0.2)]',
        brandTitle: 'text-white',
        brandSub: 'text-slate-400',
        navLink: 'text-slate-400 hover:text-cyan-400',
        heroBg: 'from-[#090D16] via-[#0D1322] to-[#090D16]',
        heroOverlay: 'from-[#090D16] via-[#090D16]/70 to-[#090D16]/85',
        heroBadge: 'bg-[#0E1424]/90 text-cyan-400 border-slate-800 shadow-[0_0_15px_rgba(6,182,212,0.15)]',
        heroTitle: 'text-white',
        heroDesc: 'text-slate-300',
        primaryBtn: 'bg-gradient-to-r from-cyan-500 via-sky-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-black shadow-[0_0_25px_rgba(6,182,212,0.4)]',
        secondaryBtn: 'bg-[#0E1424]/80 hover:bg-[#111827] text-slate-200 border border-slate-700/80 hover:border-cyan-400 font-bold',
        searchBarBg: 'bg-[#0E1424] border-slate-800/90 shadow-2xl',
        searchInput: 'bg-[#090D16] border-slate-800 text-slate-200 placeholder:text-slate-500 focus:border-cyan-400',
        filterAllActive: 'bg-cyan-500 text-slate-950 font-black shadow-[0_0_15px_rgba(6,182,212,0.3)]',
        filterInactive: 'bg-[#090D16] text-slate-400 border-slate-800',
        menuSectionHeaderSub: 'text-cyan-400 font-black',
        menuSectionHeaderTitle: 'text-white',
        menuSectionHeaderDesc: 'text-slate-400',
        categoryActive: 'bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 font-black shadow-[0_0_20px_rgba(6,182,212,0.4)]',
        categoryInactive: 'bg-[#0E1424] text-slate-400 border-slate-800 hover:bg-[#111827] hover:text-white',
        cardBg: 'bg-[#0E1424] border-slate-800/80 hover:border-cyan-500/50 hover:shadow-[0_0_25px_rgba(6,182,212,0.15)] shadow-lg',
        cardImageBg: 'bg-[#090D16]',
        cardCatText: 'text-cyan-400',
        cardTitle: 'text-white group-hover:text-cyan-400',
        cardDesc: 'text-slate-400',
        cardPriceBadge: 'bg-[#090D16]/90 text-cyan-300 border-cyan-500/30',
        cardIndicatorBg: 'bg-[#090D16]/95 border-slate-800',
        cardAddBtn: 'bg-[#090D16] hover:bg-gradient-to-r hover:from-cyan-500 hover:to-blue-600 text-cyan-400 hover:text-slate-950 border-cyan-500/40',
        sectionSpecialsBg: 'bg-[#0D1322] border-slate-800/80',
        specialsCardBg: 'bg-[#0E1424] border-slate-800',
        specialsBadge: 'bg-[#090D16] text-cyan-300 border-cyan-500/30',
        specialsTitle: 'text-white',
        specialsDesc: 'text-slate-400',
        specialsPrice: 'text-cyan-400',
        aboutSub: 'text-cyan-400 font-black',
        aboutTitle: 'text-white',
        aboutDesc: 'text-slate-400',
        aboutStatCard: 'bg-[#0E1424] border-slate-800',
        aboutStatNumber: 'text-cyan-400',
        reviewsBg: 'bg-[#0D1322] border-slate-800/80',
        reviewCard: 'bg-[#0E1424] border-slate-800',
        reviewText: 'text-slate-300',
        reviewName: 'text-white',
        reviewRole: 'text-slate-400',
        footerBg: 'bg-[#090D16] text-slate-300 border-slate-800',
        footerTitle: 'text-white',
        footerDesc: 'text-slate-400',
        footerBadge: 'bg-[#0E1424] text-cyan-400 border-slate-800',
        footerHeading: 'text-white',
        footerLink: 'text-slate-400',
        footerSocialBtn: 'bg-[#0E1424] hover:bg-[#111827] text-slate-200 border-slate-800 hover:border-cyan-500/40',
        modalBg: 'bg-[#0E1424] text-slate-200 border-slate-800',
        modalHeader: 'text-white',
        modalInput: 'bg-[#090D16] border-slate-800 text-slate-200 focus:border-cyan-400',
        modalCard: 'bg-[#090D16] border-slate-800',
      };
    }
  }, [isBase, isPro, isMax]);

  // Filtered Menu Items
  const filteredItems = useMemo(() => {
    return CAFE_ITEMS.filter(item => {
      // Category filter
      if (activeCategory !== 'All Items' && item.category !== activeCategory) return false;
      // Veg / Non-Veg filter
      if (vegFilter === 'veg' && !item.isVeg) return false;
      if (vegFilter === 'nonveg' && item.isVeg) return false;
      // Search filter
      if (searchQuery.trim() !== '') {
        const query = searchQuery.toLowerCase();
        const matchesName = item.name.toLowerCase().includes(query);
        const matchesDesc = item.description.toLowerCase().includes(query);
        const matchesCat = item.category.toLowerCase().includes(query);
        if (!matchesName && !matchesDesc && !matchesCat) return false;
      }
      return true;
    });
  }, [activeCategory, vegFilter, searchQuery]);

  // Toggle Sold Out item status
  const toggleSoldOut = (id: string) => {
    setSoldOutItemIds(prev => 
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    );
  };

  const resetAllStock = () => {
    setSoldOutItemIds([]);
  };

  // Cart operations with dynamic color cycling
  const addToCart = (item: MenuItem) => {
    if (soldOutItemIds.includes(item.id)) return; // Do not add sold out items

    setCart(prev => {
      const exists = prev.find(i => i.item.id === item.id);
      if (exists) {
        return prev.map(i => i.item.id === item.id ? { ...i, qty: i.qty + 1 } : i);
      }
      return [...prev, { item, qty: 1 }];
    });

    // Cycle Basket Button Color on EVERY item selection/add
    setBasketThemeIndex(prev => (prev + 1) % BASKET_THEMES.length);
    setIsBasketBouncing(true);
    setTimeout(() => setIsBasketBouncing(false), 800);

    // Trigger Max Touch Micro-Animation
    if (isMax) {
      const animType = item.animationType || 'steam';
      setActiveAnimation({ item, type: animType });
      setTimeout(() => setActiveAnimation(null), 2500);
    }
  };

  const updateQty = (id: string, delta: number) => {
    setCart(prev => {
      return prev
        .map(i => {
          if (i.item.id === id) {
            const newQty = i.qty + delta;
            return newQty > 0 ? { ...i, qty: newQty } : null;
          }
          return i;
        })
        .filter(Boolean) as { item: MenuItem; qty: number }[];
    });
  };

  // WhatsApp Order Link Generator (for Pro & Direct Actions)
  const getWhatsAppOrderLink = () => {
    const itemsList = cart.map(i => `• ${i.item.name} x${i.qty} = ₹${i.item.price * i.qty}`).join('%0A');
    const message = `*Nova Café - Online Order*%0A%0A*Customer Name:* ${encodeURIComponent(customerName || 'Guest')}%0A*Phone:* ${encodeURIComponent(customerPhone || 'Not provided')}%0A*Table / Mode:* ${encodeURIComponent(selectedTable)}%0A%0A*Items Ordered:*%0A${itemsList}%0A%0A*Subtotal:* ₹${cartTotal}%0A*Taxes (5% GST):* ₹${taxes}%0A*Grand Total:* ₹${grandTotal}%0A*Payment Mode:* ${encodeURIComponent(selectedPaymentMethod.toUpperCase())}%0A*Special Notes:* ${encodeURIComponent(extraRequirements || 'None')}%0A%0APlease confirm this order!`;
    return `https://wa.me/919137283810?text=Hello%20Upscale%20Nova%2C%20I%20am%20interested%20in%20your%20services.%20Please%20provide%20more%20information.`;
  };

  // AI Barista Chat Handler with expanded 30-item menu intelligence
  const handleSendChat = (presetText?: string) => {
    const textToSend = presetText || chatInput;
    if (!textToSend.trim()) return;

    const newMessages = [...chatMessages, { role: 'user' as const, text: textToSend }];
    setChatMessages(newMessages);
    if (!presetText) setChatInput('');

    setTimeout(() => {
      const lower = textToSend.toLowerCase();
      let reply = "That sounds delicious! Our baristas can prepare that right away.";
      let rec: MenuItem | undefined = undefined;

      if (lower.includes('biscoff') || lower.includes('lotus') || lower.includes('shake')) {
        rec = CAFE_ITEMS.find(i => i.id === 'c23');
        reply = "You will adore our Biscoff Lotus Thick Frappe with crunchy speculoos cookies and cold brew!";
      } else if (lower.includes('pistachio') || lower.includes('supreme')) {
        rec = CAFE_ITEMS.find(i => i.id === 'c25') || CAFE_ITEMS.find(i => i.id === 'c22');
        reply = "Our Pistachio Cream Supreme Croissant and Pistachio Cardamom Latte are signature customer favorites!";
      } else if (lower.includes('cheesecake') || lower.includes('basque')) {
        rec = CAFE_ITEMS.find(i => i.id === 'c30');
        reply = "Our San Sebastián Burnt Basque Cheesecake with sea-salted caramel drizzle is molten, rich, and baked fresh!";
      } else if (lower.includes('burrata') || lower.includes('tomato') || lower.includes('pesto toast')) {
        rec = CAFE_ITEMS.find(i => i.id === 'c27');
        reply = "Our Burrata & Pesto Heirloom Toast with whole artisanal burrata and balsamic glaze is pure heaven!";
      } else if (lower.includes('flatbread') || lower.includes('pizza') || lower.includes('mushroom')) {
        rec = CAFE_ITEMS.find(i => i.id === 'c28');
        reply = "Our Truffle Wild Mushroom & Goat Cheese Flatbread on crisp woodfired sourdough is unmatched!";
      } else if (lower.includes('pasta') || lower.includes('ravioli')) {
        rec = CAFE_ITEMS.find(i => i.id === 'c29');
        reply = "Try our Handmade Basil Ricotta Ravioli tossed in creamy sun-dried tomato sauce!";
      } else if (lower.includes('cold') || lower.includes('iced') || lower.includes('nitro') || lower.includes('chilled') || lower.includes('orange')) {
        rec = CAFE_ITEMS.find(i => i.id === 'c5') || CAFE_ITEMS.find(i => i.id === 'c24');
        reply = "For refreshing chilled notes, our 18-Hour Nitro Cold Brew Reserve or Valencia Orange Sparkling Cold Brew are perfect!";
      } else if (lower.includes('chocolate') || lower.includes('sweet') || lower.includes('croissant') || lower.includes('dessert') || lower.includes('waffle')) {
        rec = CAFE_ITEMS.find(i => i.id === 'c9') || CAFE_ITEMS.find(i => i.id === 'c19');
        reply = "Our warm French Chocolate Croissant and Blueberry Belgian Waffles are baked fresh every 2 hours!";
      } else if (lower.includes('healthy') || lower.includes('veg') || lower.includes('breakfast') || lower.includes('avocado')) {
        rec = CAFE_ITEMS.find(i => i.id === 'c12');
        reply = "I highly recommend our Signature Avocado Sourdough Toast with sun-dried tomatoes & feta. 100% wholesome!";
      } else if (lower.includes('strong') || lower.includes('espresso') || lower.includes('cappuccino') || lower.includes('hot') || lower.includes('pour-over')) {
        rec = CAFE_ITEMS.find(i => i.id === 'c1') || CAFE_ITEMS.find(i => i.id === 'c21');
        reply = "Our Double-Shot Hazelnut Cappuccino or Ethiopian Yirgacheffe Pour-Over gives the ultimate aromatic caffeine kick.";
      } else if (lower.includes('cheese') || lower.includes('snack') || lower.includes('burger') || lower.includes('panini')) {
        rec = CAFE_ITEMS.find(i => i.id === 'c17');
        reply = "Our Molten Three-Cheese Sourdough Melt is grilled golden with aged cheddar and gooey mozzarella!";
      } else {
        rec = CAFE_ITEMS.find(i => i.id === 'c1');
        reply = "Here is our top barista recommendation crafted specially for you!";
      }

      // Check if recommended item is sold out
      if (rec && soldOutItemIds.includes(rec.id)) {
        reply += " (Note: This item is currently marked Sold Out by the manager)";
      }

      setChatMessages([...newMessages, { role: 'ai', text: reply, recommendedItem: rec }]);
    }, 600);
  };

  return (
    <div className={`w-full max-w-full overflow-x-hidden min-h-screen ${theme.container}`}>
      
      {/* ------------------------------------------------------------- */}
      {/* TOP NOTIFICATION BAR (Plan Indicator & Timings & Admin Controls) */}
      {/* ------------------------------------------------------------- */}
      <div className={`px-3 sm:px-6 py-2.5 text-[11px] sm:text-xs flex flex-wrap items-center justify-between gap-2 border-b ${theme.topBar}`}>
        <div className="flex items-center gap-2 flex-wrap font-medium">
          <span className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full font-bold text-[10px] uppercase tracking-wider border ${theme.topBadge}`}>
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
            {isBase ? `Base Plan — ${basePrice}` : isPro ? `Pro Plan — ${proPrice}` : `Max Plan — ${maxPrice}`}
          </span>
          <span className="hidden sm:inline opacity-40">|</span>
          <span className={`flex items-center gap-1 font-semibold ${theme.topText}`}>
            <Clock className={`w-3.5 h-3.5 ${theme.topClockIcon}`} />
            <span>Open Daily: 8:00 AM to 11:00 PM</span>
          </span>
        </div>

        <div className="flex items-center gap-2 sm:gap-3 flex-wrap">
          {/* Admin / Live Stock Sold-Out Control Button */}
          <button
            onClick={() => setIsManagerModalOpen(true)}
            className={`font-bold px-3 py-1 rounded-full text-[10px] transition-all flex items-center gap-1.5 shadow-xs border ${theme.topBtn}`}
            title="Open Live Stock & Sold Out Manager to mark items available or sold out"
          >
            <ShieldCheck className={`w-3 h-3 ${theme.topClockIcon}`} />
            <span>Admin / Stock Manager</span>
            {soldOutItemIds.length > 0 && (
              <span className="bg-rose-900/90 text-rose-200 border border-rose-700 text-[9px] font-black px-1.5 py-0.2 rounded-full">
                {soldOutItemIds.length} Sold Out
              </span>
            )}
          </button>

          {isMax && (
            <button
              onClick={() => setShowKdsDashboard(!showKdsDashboard)}
              className="bg-[#111827] hover:bg-cyan-500 hover:text-slate-950 text-cyan-400 border border-cyan-500/40 font-bold px-3 py-1 rounded-full text-[10px] transition-all flex items-center gap-1.5 shadow-sm"
            >
              <Layers className="w-3 h-3" />
              <span>{showKdsDashboard ? 'View Customer Site' : 'Owner KDS Dashboard'}</span>
            </button>
          )}
          
          <span className={`font-semibold hidden md:flex items-center gap-1 ${theme.topText}`}>
            <MapPin className={`w-3 h-3 ${theme.topClockIcon}`} />
            <span>Nova Roastery Avenue</span>
          </span>
        </div>
      </div>

      {/* ------------------------------------------------------------- */}
      {/* MAX: OPTIONAL LIVE KITCHEN DISPLAY / OWNER DASHBOARD */}
      {/* ------------------------------------------------------------- */}
      {isMax && showKdsDashboard ? (
        <div className="p-4 sm:p-8 max-w-6xl mx-auto space-y-6 animate-in fade-in duration-300">
          <div className="bg-[#0F172A] rounded-3xl p-6 sm:p-8 shadow-2xl border border-slate-800 space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800 pb-6">
              <div>
                <div className="inline-flex items-center gap-2 bg-emerald-950/80 text-emerald-300 border border-emerald-800 px-3 py-1 rounded-full text-xs font-bold mb-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span> Live Kitchen KDS & POS Active
                </div>
                <h2 className="text-2xl sm:text-3xl font-black text-white">Nova Café Kitchen Display System</h2>
                <p className="text-xs sm:text-sm text-slate-400">Simulated real-time automated order queue sent from Table QR orders & WhatsApp.</p>
              </div>
              <button 
                onClick={() => setShowKdsDashboard(false)}
                className="bg-[#111827] text-cyan-400 border border-cyan-500/40 hover:bg-cyan-500 hover:text-slate-950 px-5 py-2.5 rounded-full text-xs font-bold transition-colors self-start"
              >
                ← Back to Live Website Demo
              </button>
            </div>

            {/* Quick Metrics */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="bg-[#111827] p-4 rounded-2xl border border-slate-800">
                <div className="text-xs font-bold text-slate-400">Today's Orders</div>
                <div className="text-2xl font-black text-white mt-1">148 Tickets</div>
                <div className="text-[10px] text-emerald-400 font-bold mt-0.5">↑ 18% vs yesterday</div>
              </div>
              <div className="bg-[#111827] p-4 rounded-2xl border border-slate-800">
                <div className="text-xs font-bold text-slate-400">Average Prep Time</div>
                <div className="text-2xl font-black text-white mt-1">4.2 Mins</div>
                <div className="text-[10px] text-emerald-400 font-bold mt-0.5">Optimal pace</div>
              </div>
              <div className="bg-[#111827] p-4 rounded-2xl border border-slate-800">
                <div className="text-xs font-bold text-slate-400">Daily Gross Revenue</div>
                <div className="text-2xl font-black text-white mt-1">₹42,850</div>
                <div className="text-[10px] text-emerald-400 font-bold mt-0.5">92% UPI Digital Pay</div>
              </div>
              <div className="bg-[#111827] p-4 rounded-2xl border border-slate-800">
                <div className="text-xs font-bold text-slate-400">Table Occupancy</div>
                <div className="text-2xl font-black text-white mt-1">8 / 10 Tables</div>
                <div className="text-[10px] text-cyan-400 font-bold mt-0.5">High Evening Rush</div>
              </div>
            </div>

            {/* Active Tickets */}
            <div className="space-y-4">
              <h3 className="font-black text-lg text-white">Active Kitchen Tickets</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-[#111827] border border-cyan-500/30 p-4 rounded-2xl space-y-3">
                  <div className="flex justify-between items-center text-xs font-bold">
                    <span className="bg-cyan-500 text-slate-950 px-2 py-0.5 rounded-full text-[10px] font-black">TICKET #114</span>
                    <span className="text-white">Table 02 • Dine-In</span>
                  </div>
                  <div className="text-xs space-y-1 text-slate-200">
                    <div className="font-bold">• 1x Hazelnut Cappuccino (Extra hot)</div>
                    <div className="font-bold">• 1x Belgian Chocolate Croissant</div>
                    <div className="text-[10px] text-cyan-400 mt-1 italic">Note: "Oat milk requested"</div>
                  </div>
                  <div className="pt-2 border-t border-slate-800 flex justify-between items-center text-xs">
                    <span className="text-slate-400 font-medium">Status: Brewing</span>
                    <span className="bg-emerald-950 text-emerald-300 border border-emerald-800 text-[10px] px-2 py-0.5 rounded-full font-bold">Paid via GPay</span>
                  </div>
                </div>

                <div className="bg-[#111827] border border-slate-800 p-4 rounded-2xl space-y-3">
                  <div className="flex justify-between items-center text-xs font-bold">
                    <span className="bg-[#090D16] text-cyan-400 border border-slate-800 px-2 py-0.5 rounded-full text-[10px] font-bold">TICKET #113</span>
                    <span className="text-white">Table 04 • Dine-In</span>
                  </div>
                  <div className="text-xs space-y-1 text-slate-200">
                    <div className="font-bold">• 2x Nitro Cold Brew Reserve</div>
                    <div className="font-bold">• 1x Avocado Sourdough Toast</div>
                  </div>
                  <div className="pt-2 border-t border-slate-800 flex justify-between items-center text-xs">
                    <span className="text-emerald-400 font-bold">Ready for Table</span>
                    <span className="bg-emerald-950 text-emerald-300 border border-emerald-800 text-[10px] px-2 py-0.5 rounded-full font-bold">Paid via PhonePe</span>
                  </div>
                </div>

                <div className="bg-[#111827] border border-slate-800 p-4 rounded-2xl space-y-3">
                  <div className="flex justify-between items-center text-xs font-bold">
                    <span className="bg-[#090D16] text-cyan-400 border border-slate-800 px-2 py-0.5 rounded-full text-[10px] font-bold">TICKET #112</span>
                    <span className="text-white">Takeaway #08</span>
                  </div>
                  <div className="text-xs space-y-1 text-slate-200">
                    <div className="font-bold">• 1x Smoked Chicken Pesto Panini</div>
                    <div className="font-bold">• 1x Vanilla Cinnamon Latte</div>
                  </div>
                  <div className="pt-2 border-t border-slate-800 flex justify-between items-center text-xs">
                    <span className="text-slate-400 font-medium">Completed & Handed</span>
                    <span className="bg-emerald-950 text-emerald-300 border border-emerald-800 text-[10px] px-2 py-0.5 rounded-full font-bold">Paid via Paytm</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <>
          {/* ------------------------------------------------------------- */}
          {/* MAIN HEADER (With Smooth Rounded Elements & Top-Right Basket) */}
          {/* ------------------------------------------------------------- */}
          <header className={`sticky top-0 z-40 backdrop-blur-xl border-b px-4 sm:px-8 py-3.5 transition-all ${theme.header}`}>
            <div className="max-w-6xl mx-auto flex items-center justify-between gap-4">
              
              {/* Brand Logo with Rounded Aesthetic */}
              <div className="flex items-center gap-3">
                <div className={`w-10 h-10 rounded-2xl border flex items-center justify-center font-bold ${theme.brandLogo}`}>
                  <Coffee className="w-5 h-5" />
                </div>
                <div>
                  <div className={`font-black text-lg sm:text-xl tracking-tight leading-none ${theme.brandTitle}`}>
                    Nova Café
                  </div>
                  <div className={`text-[10px] font-semibold tracking-wider uppercase mt-0.5 ${theme.brandSub}`}>
                    Artisan Coffee Roasters
                  </div>
                </div>
              </div>

              {/* Navigation Links (Desktop) */}
              <nav className="hidden md:flex items-center gap-6 text-xs font-bold">
                <a href="#menu" className={`transition-colors ${theme.navLink}`}>Artisan Menu</a>
                {!isBase && <a href="#specials" className={`transition-colors ${theme.navLink}`}>Chef Specials</a>}
                <a href="#about" className={`transition-colors ${theme.navLink}`}>Our Roastery</a>
                {!isBase && <a href="#reviews" className={`transition-colors ${theme.navLink}`}>Reviews</a>}
                <a href="#location" className={`transition-colors ${theme.navLink} flex items-center gap-1 text-cyan-400`}>
                  <MapPin className="w-3 h-3" />
                  <span>Live Map</span>
                </a>
                <a href="#contact" className={`transition-colors ${theme.navLink}`}>Visit & Contact</a>
              </nav>

              {/* Top-Right Action Controls (Basket Button for Pro & Max) */}
              <div className="flex items-center gap-2.5">
                {!isBase ? (
                  <>
                    {/* Top-Right Dynamic Theme-Changing Basket Button */}
                    <button
                      onClick={() => setIsCartOpen(true)}
                      className={`${currentBasketTheme.bg} ${currentBasketTheme.text} ${currentBasketTheme.border} ${currentBasketTheme.glow} ${
                        isBasketBouncing ? 'scale-110 ring-4 ring-white/30' : ''
                      } px-3.5 sm:px-4 py-2 rounded-full font-bold text-xs shadow-md transition-all duration-300 flex items-center gap-2 hover:scale-[1.03]`}
                      title="Basket color changes every time an item is added!"
                    >
                      <ShoppingCart className="w-3.5 h-3.5 shrink-0" />
                      <span className="hidden sm:inline">Basket</span>
                      <span className={`${currentBasketTheme.badgeBg} ${currentBasketTheme.badgeText} px-2 py-0.5 rounded-full text-[10px] font-black transition-colors`}>
                        {cartCount}
                      </span>
                    </button>

                    {/* Table Reservation Button */}
                    <button
                      onClick={() => setIsBookingOpen(true)}
                      className={`hidden sm:inline-flex px-3.5 py-2 rounded-full font-bold text-xs transition-colors ${theme.secondaryBtn}`}
                    >
                      Book Table
                    </button>
                  </>
                ) : (
                  <a
                    href="tel:+919876543210"
                    className={`px-4 py-2 rounded-full font-bold text-xs shadow-md transition-all flex items-center gap-1.5 ${theme.primaryBtn}`}
                  >
                    <Phone className="w-3.5 h-3.5" />
                    <span>Order via Call</span>
                  </a>
                )}
              </div>
            </div>
          </header>

          {/* ------------------------------------------------------------- */}
          {/* HERO SECTION */}
          {/* ------------------------------------------------------------- */}
          <section className="relative min-h-[440px] flex items-center justify-center text-center px-4 sm:px-6 py-16 overflow-hidden">
            <div className="absolute inset-0">
              <img 
                src="https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=1400&q=80" 
                alt="Nova Cafe Ambience" 
                className={`w-full h-full object-cover ${isBase ? 'brightness-[0.85] opacity-20' : isPro ? 'brightness-[0.35]' : 'brightness-[0.35]'}`} 
              />
              <div className={`absolute inset-0 bg-gradient-to-t ${theme.heroOverlay}`}></div>
            </div>

            <div className="relative z-10 max-w-2xl mx-auto space-y-5 px-2">
              
              {/* Timing Badge with Smooth Rounded Corners */}
              <div className={`inline-flex items-center gap-2 border px-4 py-1.5 rounded-full text-xs font-bold ${theme.heroBadge}`}>
                <Clock className="w-3.5 h-3.5" />
                <span>Open Daily: 8:00 AM to 11:00 PM</span>
              </div>

              <h1 className={`text-3xl sm:text-5xl md:text-6xl font-black tracking-tight leading-[1.1] ${theme.heroTitle}`}>
                Nova Café & Artisan Roasters
              </h1>
              
              <p className={`text-sm sm:text-base font-medium max-w-xl mx-auto leading-relaxed ${theme.heroDesc}`}>
                Handcrafted single-origin espresso, warm freshly baked French croissants, artisanal sourdough toasts, and gourmet bites.
              </p>

              <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
                <a 
                  href="#menu"
                  className={`px-6 py-3 rounded-full text-xs uppercase tracking-wider transition-all hover:-translate-y-0.5 ${theme.primaryBtn}`}
                >
                  Explore 20+ Items Menu
                </a>
                {!isBase ? (
                  <button 
                    onClick={() => setIsBookingOpen(true)}
                    className={`px-6 py-3 rounded-full text-xs uppercase tracking-wider transition-colors ${theme.secondaryBtn}`}
                  >
                    Reserve Table Online
                  </button>
                ) : (
                  <a 
                    href="#contact"
                    className={`px-6 py-3 rounded-full text-xs uppercase tracking-wider transition-colors ${theme.secondaryBtn}`}
                  >
                    Visit Roastery
                  </a>
                )}
              </div>
            </div>
          </section>

          {/* ------------------------------------------------------------- */}
          {/* SEARCH & FILTERS BAR (For Pro & Max) */}
          {/* ------------------------------------------------------------- */}
          {!isBase && (
            <div className="max-w-5xl mx-auto -mt-6 px-4 relative z-10 w-full">
              <div className={`p-4 rounded-3xl border flex flex-col md:flex-row items-center justify-between gap-3 ${theme.searchBarBg}`}>
                
                {/* Search Bar */}
                <div className="w-full md:flex-1 relative">
                  <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input 
                    type="text" 
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search cappuccino, avocado sourdough, croissant, waffles..." 
                    className={`w-full border rounded-full pl-10 pr-9 py-2.5 text-xs font-medium focus:outline-none ${theme.searchInput}`}
                  />
                  {searchQuery && (
                    <button onClick={() => setSearchQuery('')} className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white">
                      <X className="w-3.5 h-3.5" />
                    </button>
                  )}
                </div>

                {/* Dietary Veg/Non-Veg Filter Buttons */}
                <div className="flex items-center gap-1.5 w-full md:w-auto justify-center">
                  <button
                    onClick={() => setVegFilter('all')}
                    className={`px-3 py-2 text-xs font-bold rounded-full transition-all ${
                      vegFilter === 'all' ? theme.filterAllActive : theme.filterInactive
                    }`}
                  >
                    All ({CAFE_ITEMS.length})
                  </button>
                  <button
                    onClick={() => setVegFilter('veg')}
                    className={`px-3 py-2 text-xs font-bold rounded-full flex items-center gap-1.5 transition-all ${
                      vegFilter === 'veg' 
                        ? 'bg-emerald-950/90 text-emerald-300 border border-emerald-600 shadow-xs' 
                        : isBase ? 'bg-white text-emerald-700 border border-[#E7DFD3]' : isPro ? 'bg-[#191714] text-emerald-400 border border-[#3A3428]' : 'bg-[#090D16] text-emerald-400 border border-slate-800'
                    }`}
                  >
                    <span className="w-3.5 h-3.5 border border-emerald-500 flex items-center justify-center p-0.5 rounded-xs">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                    </span>
                    Pure Veg
                  </button>
                  <button
                    onClick={() => setVegFilter('nonveg')}
                    className={`px-3 py-2 text-xs font-bold rounded-full flex items-center gap-1.5 transition-all ${
                      vegFilter === 'nonveg' 
                        ? 'bg-rose-950/90 text-rose-300 border border-rose-600 shadow-xs' 
                        : isBase ? 'bg-white text-rose-700 border border-[#E7DFD3]' : isPro ? 'bg-[#191714] text-rose-400 border border-[#3A3428]' : 'bg-[#090D16] text-rose-400 border border-slate-800'
                    }`}
                  >
                    <span className="w-3.5 h-3.5 border border-rose-600 flex items-center justify-center p-0.5 rounded-xs">
                      <span className="w-0 h-0 border-l-[3px] border-l-transparent border-r-[3px] border-r-transparent border-b-[5px] border-b-rose-500"></span>
                    </span>
                    Non-Veg
                  </button>
                </div>

              </div>
            </div>
          )}

          {/* ------------------------------------------------------------- */}
          {/* MENU SECTION (18-20 Rich Handcrafted Items) */}
          {/* ------------------------------------------------------------- */}
          <section id="menu" className="py-14 px-4 sm:px-6 max-w-6xl mx-auto w-full">
            <div className="text-center max-w-xl mx-auto mb-8 space-y-2">
              <span className={`font-black text-xs uppercase tracking-widest ${theme.menuSectionHeaderSub}`}>
                Freshly Brewed & Baked Every Day
              </span>
              <h2 className={`text-3xl sm:text-4xl font-black ${theme.menuSectionHeaderTitle}`}>
                Nova Handcrafted Menu
              </h2>
              <p className={`text-xs sm:text-sm ${theme.menuSectionHeaderDesc}`}>
                Explore our selection of 20+ artisan coffees, slow cold brews, French viennoiserie, and sourdough plates.
              </p>
            </div>

            {/* Category Pills */}
            <div className="flex flex-wrap justify-center gap-2 mb-8">
              {CATEGORIES.map(cat => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 py-2 text-xs font-bold rounded-full transition-all ${
                    activeCategory === cat 
                      ? theme.categoryActive
                      : theme.categoryInactive
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Menu Items Grid with Smooth Rounded Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {filteredItems.map((item) => {
                const isSoldOut = soldOutItemIds.includes(item.id);

                return (
                  <div 
                    key={item.id}
                    className={`rounded-3xl border transition-all duration-300 flex flex-col group overflow-hidden ${theme.cardBg} ${
                      isSoldOut ? 'border-rose-900/40 opacity-90' : ''
                    }`}
                  >
                    {/* Image Container with Rounded Corners */}
                    <div className={`aspect-[4/3] relative overflow-hidden ${theme.cardImageBg}`}>
                      <img 
                        src={item.image} 
                        alt={item.name} 
                        className={`w-full h-full object-cover transition-transform duration-500 ${
                          isSoldOut 
                            ? 'grayscale contrast-125 opacity-40' 
                            : 'group-hover:scale-105'
                        }`} 
                      />

                      {/* Badges Stack (Bestseller, Chef Special, Sold Out) */}
                      <div className="absolute top-2.5 left-2.5 flex flex-col gap-1 z-10">
                        {isSoldOut ? (
                          <div className="bg-rose-950/95 text-rose-200 border border-rose-700 text-[10px] font-black uppercase px-2.5 py-0.5 rounded-full shadow-md flex items-center gap-1 backdrop-blur-xs">
                            <span className="w-1.5 h-1.5 rounded-full bg-rose-400 animate-ping"></span>
                            <span>Sold Out</span>
                          </div>
                        ) : (
                          <>
                            {item.isBestseller && (
                              <div className="bg-slate-950/90 text-amber-300 border border-amber-500/40 text-[10px] font-black uppercase px-2.5 py-0.5 rounded-full shadow-md flex items-center gap-1 backdrop-blur-xs">
                                <Flame className="w-3 h-3 text-amber-300 fill-amber-300" />
                                <span>Bestseller</span>
                              </div>
                            )}
                            {item.isChefSpecial && (
                              <div className="bg-slate-950/90 text-cyan-300 border border-cyan-500/40 text-[10px] font-black uppercase px-2.5 py-0.5 rounded-full shadow-md flex items-center gap-1 backdrop-blur-xs">
                                <Sparkles className="w-3 h-3 text-cyan-300" />
                                <span>Chef Special</span>
                              </div>
                            )}
                          </>
                        )}
                      </div>

                      {/* Veg / Non-Veg Indicator */}
                      <div className={`absolute top-2.5 right-2.5 backdrop-blur-xs p-1 rounded-lg shadow-xs flex items-center justify-center z-10 ${theme.cardIndicatorBg}`}>
                        {item.isVeg ? (
                          <div className="w-4 h-4 border border-emerald-500 flex items-center justify-center rounded-xs" title="100% Pure Vegetarian">
                            <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                          </div>
                        ) : (
                          <div className="w-4 h-4 border border-rose-600 flex items-center justify-center rounded-xs" title="Non-Vegetarian">
                            <span className="w-0 h-0 border-l-[3.5px] border-l-transparent border-r-[3.5px] border-r-transparent border-b-[6px] border-b-rose-500"></span>
                          </div>
                        )}
                      </div>

                      {/* Price Pill */}
                      <div className={`absolute bottom-2.5 right-2.5 font-black text-xs px-3 py-1 rounded-full shadow-xs backdrop-blur-xs border ${theme.cardPriceBadge}`}>
                        ₹{item.price}
                      </div>
                    </div>

                    {/* Card Content */}
                    <div className="p-5 flex flex-col flex-1 justify-between">
                      <div>
                        <div className={`flex items-center justify-between text-[10px] font-bold uppercase tracking-wider mb-1 ${theme.cardCatText}`}>
                          <span>{item.category}</span>
                          <span className={item.isVeg ? 'text-emerald-500 font-bold' : 'text-rose-500 font-bold'}>
                            {item.isVeg ? 'Veg' : 'Non-Veg'}
                          </span>
                        </div>
                        
                        <h3 className={`font-bold text-base leading-tight mb-1.5 transition-colors ${theme.cardTitle}`}>
                          {item.name}
                        </h3>
                        
                        <p className={`text-xs line-clamp-2 leading-relaxed mb-4 ${theme.cardDesc}`}>
                          {item.description}
                        </p>
                      </div>

                      {/* Action Per Plan & Sold Out State */}
                      <div className="space-y-1.5">
                        {!isBase ? (
                          isSoldOut ? (
                            <button 
                              disabled
                              className="w-full bg-rose-950/20 text-rose-400 font-bold py-2.5 rounded-full text-xs flex items-center justify-center gap-1.5 border border-rose-900/50 cursor-not-allowed opacity-80"
                            >
                              <X className="w-3.5 h-3.5" />
                              <span>Sold Out Today</span>
                            </button>
                          ) : (
                            <button 
                              onClick={() => addToCart(item)}
                              className={`w-full font-bold py-2.5 rounded-full text-xs transition-all flex items-center justify-center gap-1.5 border shadow-xs ${theme.cardAddBtn}`}
                            >
                              <Plus className="w-3.5 h-3.5" />
                              <span>Add to Basket</span>
                            </button>
                          )
                        ) : (
                          <div className={`text-[11px] font-medium pt-2 border-t flex items-center justify-between ${theme.cardDesc}`}>
                            <span>{isSoldOut ? 'Sold Out' : 'Order in café / Call'}</span>
                            <a href="tel:+919876543210" className={`font-bold hover:underline ${theme.cardCatText}`}>
                              +91 98765 43210
                            </a>
                          </div>
                        )}

                        {/* Admin Quick Sold Out Toggle on Card */}
                        <div className="pt-1 flex justify-end">
                          <button
                            onClick={() => toggleSoldOut(item.id)}
                            className={`text-[9px] font-bold px-2 py-0.5 rounded-full transition-colors flex items-center gap-1 ${
                              isSoldOut 
                                ? 'text-emerald-400 hover:text-emerald-300 bg-emerald-950/40 border border-emerald-800/60' 
                                : 'opacity-60 hover:opacity-100 text-rose-400 hover:bg-rose-950/30'
                            }`}
                            title="Admin shortcut to toggle item sold out status"
                          >
                            <span>Admin: {isSoldOut ? '✓ Re-Stock' : 'Mark Sold Out'}</span>
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
          {/* PRO & MAX: SIGNATURE CHEF COMBOS & DEALS */}
          {/* ------------------------------------------------------------- */}
          {!isBase && (
            <section id="specials" className={`py-14 border-y px-4 sm:px-6 ${theme.sectionSpecialsBg}`}>
              <div className="max-w-5xl mx-auto space-y-6">
                <div className="text-center space-y-1">
                  <span className={`font-black text-xs uppercase tracking-widest ${theme.menuSectionHeaderSub}`}>
                    Signature Combos
                  </span>
                  <h2 className={`text-2xl sm:text-3xl font-black ${theme.menuSectionHeaderTitle}`}>
                    Nova Daily Pairings & Savings
                  </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className={`p-5 sm:p-6 rounded-3xl border shadow-xs flex flex-col sm:flex-row gap-4 items-center ${theme.specialsCardBg}`}>
                    <img 
                      src="https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=300&q=80" 
                      alt="Morning Combo" 
                      className={`w-24 h-24 rounded-2xl object-cover shrink-0 border ${theme.cardImageBg}`} 
                    />
                    <div className="space-y-1.5 flex-1 text-center sm:text-left">
                      <span className={`text-[9px] font-black uppercase px-2.5 py-0.5 rounded-full border ${theme.specialsBadge}`}>
                        Morning Combo (8 AM - 12 PM)
                      </span>
                      <h4 className={`font-bold text-base ${theme.specialsTitle}`}>Hazelnut Cappuccino + Chocolate Croissant</h4>
                      <p className={`text-xs ${theme.specialsDesc}`}>Double shot Arabica espresso with freshly baked flaky Valrhona croissant.</p>
                      <div className="flex items-center justify-center sm:justify-start gap-2 pt-1">
                        <span className={`text-lg font-black ${theme.specialsPrice}`}>₹299</span>
                        <span className="text-xs line-through opacity-50">₹400</span>
                      </div>
                    </div>
                  </div>

                  <div className={`p-5 sm:p-6 rounded-3xl border shadow-xs flex flex-col sm:flex-row gap-4 items-center ${theme.specialsCardBg}`}>
                    <img 
                      src="https://images.unsplash.com/photo-1562376552-0d160a2f238d?auto=format&fit=crop&w=300&q=80" 
                      alt="Evening Waffle" 
                      className={`w-24 h-24 rounded-2xl object-cover shrink-0 border ${theme.cardImageBg}`} 
                    />
                    <div className="space-y-1.5 flex-1 text-center sm:text-left">
                      <span className={`text-[9px] font-black uppercase px-2.5 py-0.5 rounded-full border ${theme.specialsBadge}`}>
                        Dessert Pair (4 PM - 10 PM)
                      </span>
                      <h4 className={`font-bold text-base ${theme.specialsTitle}`}>Nitro Cold Brew + Blueberry Waffle</h4>
                      <p className={`text-xs ${theme.specialsDesc}`}>18-hr slow-steeped nitro cold brew paired with warm Belgian waffle & gelato.</p>
                      <div className="flex items-center justify-center sm:justify-start gap-2 pt-1">
                        <span className={`text-lg font-black ${theme.specialsPrice}`}>₹449</span>
                        <span className="text-xs line-through opacity-50">₹580</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          )}

          {/* ------------------------------------------------------------- */}
          {/* ABOUT SECTION (Heritage & Roastery) */}
          {/* ------------------------------------------------------------- */}
          <section id="about" className="py-14 px-4 sm:px-6 max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="space-y-4">
                <span className={`font-black text-xs uppercase tracking-widest ${theme.aboutSub}`}>
                  Our Roastery Heritage
                </span>
                <h2 className={`text-3xl font-black leading-tight ${theme.aboutTitle}`}>
                  Crafting memorable coffee moments with single-origin beans.
                </h2>
                <p className={`text-xs sm:text-sm leading-relaxed ${theme.aboutDesc}`}>
                  At Nova Café & Roasters, we ethically source high-grown Arabica beans from Chikmagalur and Coorg estate farms. Small-batch micro-roasted weekly for crisp aroma, smooth body, and chocolate-hazelnut notes.
                </p>
                <div className="grid grid-cols-2 gap-4 pt-2">
                  <div className={`p-4 rounded-2xl border shadow-xs ${theme.aboutStatCard}`}>
                    <div className={`text-2xl font-black ${theme.aboutStatNumber}`}>100%</div>
                    <div className={`text-xs font-medium ${theme.aboutDesc}`}>Single-Origin Arabica</div>
                  </div>
                  <div className={`p-4 rounded-2xl border shadow-xs ${theme.aboutStatCard}`}>
                    <div className={`text-2xl font-black ${theme.aboutStatNumber}`}>Daily</div>
                    <div className={`text-xs font-medium ${theme.aboutDesc}`}>Fresh Artisan Baking</div>
                  </div>
                </div>
              </div>

              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=800&q=80" 
                  alt="Nova Barista at work" 
                  className={`rounded-3xl shadow-xl w-full aspect-[4/3] object-cover border ${theme.cardBg}`} 
                />
              </div>
            </div>
          </section>

          {/* ------------------------------------------------------------- */}
          {/* PRO & MAX: CUSTOMER REVIEWS */}
          {/* ------------------------------------------------------------- */}
          {!isBase && (
            <section id="reviews" className={`py-14 px-4 sm:px-6 border-t ${theme.reviewsBg}`}>
              <div className="max-w-5xl mx-auto space-y-6">
                <div className="text-center space-y-1">
                  <div className="flex justify-center gap-1 text-amber-400 mb-1">
                    {[1,2,3,4,5].map(s => <Star key={s} className="w-4 h-4 fill-amber-400 text-amber-400" />)}
                  </div>
                  <h2 className={`text-2xl sm:text-3xl font-black ${theme.menuSectionHeaderTitle}`}>
                    Loved by 12,000+ Coffee & Food Lovers
                  </h2>
                  <p className={`text-xs ${theme.menuSectionHeaderDesc}`}>4.9 / 5.0 Average rating across Google & Zomato</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {[
                    { name: "Ananya Sharma", review: "The Hazelnut Cappuccino and Avocado Sourdough Toast are out of this world! Perfect place to work or hang out with friends.", role: "Verified Regular", stars: 5 },
                    { name: "Rahul Deshmukh", review: "Super easy WhatsApp order & UPI checkout flow. Croissants are hot, flaky, and baked to French perfection.", role: "Food Critic", stars: 5 },
                    { name: "Pooja Mehta", review: "Booked a table for Sunday brunch. The Nitro Cold Brew and Blueberry Waffles made my weekend.", role: "Brunch Lover", stars: 5 }
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
          {/* INTERACTIVE MAP DEMO (Max Plan Special Feature: Cafe Location & Apni Location) */}
          {/* ------------------------------------------------------------- */}
          <section id="location" className={`py-14 px-4 sm:px-6 border-t ${theme.reviewsBg}`}>
            <div className="max-w-5xl mx-auto space-y-6">
              
              {/* Section Header */}
              <div className="text-center space-y-1.5 max-w-xl mx-auto">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider bg-cyan-500/10 text-cyan-400 border border-cyan-500/30">
                  <Compass className="w-3.5 h-3.5 text-cyan-400 animate-spin" style={{ animationDuration: '8s' }} />
                  <span>Live GPS & Location Demo ({maxPrice} Max Plan)</span>
                </div>
                <h2 className={`text-2xl sm:text-4xl font-black ${theme.menuSectionHeaderTitle}`}>
                  Find Nova Café & Track Your Distance
                </h2>
                <p className={`text-xs sm:text-sm ${theme.menuSectionHeaderDesc}`}>
                  See where our artisan flagship café is located, track your live distance from <strong>"Apni Location"</strong>, and get instant turn-by-turn navigation.
                </p>
              </div>

              {/* Map & Navigation Control Bar */}
              <div className={`p-4 rounded-3xl border ${theme.cardBg} flex flex-wrap items-center justify-between gap-3 shadow-md`}>
                
                {/* Distance & Travel Time Status */}
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-2xl bg-cyan-500/20 text-cyan-400 border border-cyan-500/40 flex items-center justify-center font-black">
                    <Navigation2 className="w-5 h-5 animate-pulse" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-slate-200 flex items-center gap-2">
                      <span>Distance from Apni Location:</span>
                      <span className="text-cyan-400 font-black text-sm bg-cyan-950/60 px-2 py-0.5 rounded-full border border-cyan-500/30">
                        {distanceKm.toFixed(1)} km
                      </span>
                    </div>
                    <div className="text-[11px] text-slate-400 flex items-center gap-2 mt-0.5">
                      <span>ETA:</span>
                      <strong className="text-emerald-400">
                        {travelMode === 'driving' 
                          ? `~${Math.max(2, Math.round(distanceKm * 3.5))} mins (Drive)` 
                          : travelMode === 'walking' 
                          ? `~${Math.max(5, Math.round(distanceKm * 11))} mins (Walk)` 
                          : `~${Math.max(4, Math.round(distanceKm * 6.5))} mins (Metro)`}
                      </strong>
                      <span className="opacity-40">•</span>
                      <span className="text-slate-300">Live Traffic: <span className="text-emerald-400 font-semibold">Smooth 🟢</span></span>
                    </div>
                  </div>
                </div>

                {/* Travel Mode Selector */}
                <div className="flex items-center gap-1.5 bg-[#090D16] p-1 rounded-2xl border border-slate-800">
                  <button
                    onClick={() => setTravelMode('driving')}
                    className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${
                      travelMode === 'driving' 
                        ? 'bg-cyan-500 text-slate-950 shadow-xs' 
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    <Car className="w-3.5 h-3.5" />
                    <span>Drive</span>
                  </button>

                  <button
                    onClick={() => setTravelMode('walking')}
                    className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${
                      travelMode === 'walking' 
                        ? 'bg-cyan-500 text-slate-950 shadow-xs' 
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    <Footprints className="w-3.5 h-3.5" />
                    <span>Walk</span>
                  </button>

                  <button
                    onClick={() => setTravelMode('transit')}
                    className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${
                      travelMode === 'transit' 
                        ? 'bg-cyan-500 text-slate-950 shadow-xs' 
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    <MapIcon className="w-3.5 h-3.5" />
                    <span>Metro</span>
                  </button>
                </div>

                {/* Map View Mode Switcher */}
                <div className="flex items-center gap-1 bg-[#090D16] p-1 rounded-2xl border border-slate-800 text-[11px] font-bold">
                  <button
                    onClick={() => setMapViewStyle('vector')}
                    className={`px-2.5 py-1.5 rounded-xl transition-all ${
                      mapViewStyle === 'vector' ? 'bg-cyan-950 text-cyan-300 border border-cyan-700' : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    Cyber Map
                  </button>
                  <button
                    onClick={() => setMapViewStyle('satellite')}
                    className={`px-2.5 py-1.5 rounded-xl transition-all ${
                      mapViewStyle === 'satellite' ? 'bg-cyan-950 text-cyan-300 border border-cyan-700' : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    Satellite View
                  </button>
                  <button
                    onClick={() => setMapViewStyle('google')}
                    className={`px-2.5 py-1.5 rounded-xl transition-all ${
                      mapViewStyle === 'google' ? 'bg-cyan-950 text-cyan-300 border border-cyan-700' : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    Google Map View
                  </button>
                </div>
              </div>

              {/* Map Canvas Card */}
              <div className="relative rounded-3xl border border-slate-800 overflow-hidden shadow-2xl bg-[#070A12] min-h-[380px] sm:min-h-[460px] flex flex-col justify-between">
                
                {mapViewStyle === 'google' ? (
                  /* Google Maps Real Preview Embed */
                  <div className="w-full h-[460px] relative bg-slate-900">
                    <iframe
                      title="Nova Cafe Google Maps Location"
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3501.985659858348!2d77.2177215!3d28.6302829!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd37b0b65287%3A0x696b4ef84c2049e!2sConnaught%20Place%2C%20New%20Delhi!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                      className="w-full h-full border-0 filter invert-[0.9] hue-rotate-[180deg] contrast-[1.2]"
                      loading="lazy"
                      allowFullScreen
                    ></iframe>
                    
                    {/* Overlay badge indicating live map active */}
                    <div className="absolute top-4 left-4 bg-[#090D16]/95 backdrop-blur-md border border-cyan-500/40 px-3 py-1.5 rounded-full text-xs font-bold text-cyan-300 shadow-lg flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
                      <span>Google Map View Active • Nova Flagship</span>
                    </div>
                  </div>
                ) : (
                  /* Stylized Cyber / Satellite Vector Map Stage */
                  <div className={`relative w-full h-[420px] sm:h-[480px] overflow-hidden ${
                    mapViewStyle === 'satellite' ? 'bg-[#0B130E]' : 'bg-[#070B14]'
                  }`}>
                    
                    {/* Background Satellite or Vector Road Grid Texture */}
                    <div className="absolute inset-0 opacity-40 pointer-events-none">
                      <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                        <defs>
                          <pattern id="gridPattern" width="40" height="40" patternUnits="userSpaceOnUse">
                            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#1E293B" strokeWidth="0.75" />
                          </pattern>
                        </defs>
                        <rect width="100%" height="100%" fill="url(#gridPattern)" />
                        
                        {/* Major Highway / Road Lines */}
                        <path d="M 0 160 Q 240 180 500 130 T 1000 200" fill="none" stroke="#334155" strokeWidth="14" />
                        <path d="M 0 160 Q 240 180 500 130 T 1000 200" fill="none" stroke="#0F172A" strokeWidth="10" />
                        
                        <path d="M 320 0 Q 340 240 280 500" fill="none" stroke="#334155" strokeWidth="12" />
                        <path d="M 320 0 Q 340 240 280 500" fill="none" stroke="#0F172A" strokeWidth="8" />

                        <path d="M 680 0 Q 640 280 720 500" fill="none" stroke="#334155" strokeWidth="12" />
                        <path d="M 680 0 Q 640 280 720 500" fill="none" stroke="#0F172A" strokeWidth="8" />

                        {/* Central Green Park / Artisan Lake Zone */}
                        <circle cx="50%" cy="46%" r="70" fill={mapViewStyle === 'satellite' ? '#14301B' : '#0B1E28'} stroke="#06B6D4" strokeWidth="0.5" strokeDasharray="3,3" />
                      </svg>
                    </div>

                    {/* Road Street Names & Landmark Labels */}
                    <div className="absolute top-[28%] left-[8%] text-[10px] font-black uppercase tracking-widest text-slate-400 select-none rotate-[-4deg] bg-[#090D16]/60 px-2 py-0.5 rounded-sm">
                      Roastery Grand Avenue
                    </div>
                    <div className="absolute bottom-[22%] right-[12%] text-[10px] font-black uppercase tracking-widest text-slate-400 select-none bg-[#090D16]/60 px-2 py-0.5 rounded-sm">
                      Central Park Boulevard
                    </div>
                    <div className="absolute top-[48%] left-[45%] text-[9px] font-bold text-cyan-400/80 bg-[#090D16]/80 px-2 py-0.5 rounded-full border border-cyan-900/50">
                      🌿 Artisan Square Park
                    </div>

                    {/* Interactive Animated Route Line between User & Cafe */}
                    <svg className="absolute inset-0 w-full h-full pointer-events-none z-10">
                      {/* Glow Behind */}
                      <line 
                        x1={`${userPinCoords.x}%`} 
                        y1={`${userPinCoords.y}%`} 
                        x2="68%" 
                        y2="32%" 
                        stroke="#06B6D4" 
                        strokeWidth="5" 
                        strokeOpacity="0.3"
                        strokeLinecap="round"
                      />
                      {/* Animated Dashed Polyline */}
                      <line 
                        x1={`${userPinCoords.x}%`} 
                        y1={`${userPinCoords.y}%`} 
                        x2="68%" 
                        y2="32%" 
                        stroke="#22D3EE" 
                        strokeWidth="3" 
                        strokeDasharray="6,6"
                        strokeLinecap="round"
                        className="animate-pulse"
                      />
                    </svg>

                    {/* ------------------------------------------------------------- */}
                    {/* USER PIN: "APNI LOCATION" (Your Current Location) */}
                    {/* ------------------------------------------------------------- */}
                    <div 
                      className="absolute z-20 -translate-x-1/2 -translate-y-1/2 cursor-pointer transition-all duration-700 group"
                      style={{ left: `${userPinCoords.x}%`, top: `${userPinCoords.y}%` }}
                    >
                      {/* Pulsing Radar Wave */}
                      <div className="absolute inset-0 w-14 h-14 -left-3 -top-3 rounded-full bg-cyan-500/20 animate-ping pointer-events-none"></div>
                      
                      <div className="flex flex-col items-center">
                        {/* Pin Bubble Card */}
                        <div className="bg-[#090D16] border-2 border-cyan-400 text-white px-3 py-1 rounded-full shadow-[0_0_20px_rgba(6,182,212,0.6)] flex items-center gap-1.5 whitespace-nowrap mb-1">
                          <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
                          <span className="text-[11px] font-black text-cyan-300">Apni Location</span>
                        </div>

                        {/* Pin Dot / Avatar */}
                        <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-cyan-600 to-blue-500 border-2 border-white shadow-xl flex items-center justify-center text-slate-950 font-bold">
                          <User className="w-4 h-4 text-white" />
                        </div>
                        
                        <div className="text-[10px] font-semibold text-slate-300 bg-slate-950/80 px-2 py-0.5 rounded-md mt-1 border border-slate-800 shadow-xs max-w-[160px] truncate text-center">
                          {userLocationName}
                        </div>
                      </div>
                    </div>

                    {/* ------------------------------------------------------------- */}
                    {/* CAFE PIN: "NOVA CAFÉ & ROASTERY" (Destination) */}
                    {/* ------------------------------------------------------------- */}
                    <div 
                      className="absolute z-20 -translate-x-1/2 -translate-y-1/2 cursor-pointer transition-all group"
                      style={{ left: '68%', top: '32%' }}
                    >
                      {/* Pulsing Orange/Gold Halo */}
                      <div className="absolute inset-0 w-16 h-16 -left-4 -top-4 rounded-full bg-amber-500/20 animate-ping pointer-events-none"></div>

                      <div className="flex flex-col items-center">
                        {/* Cafe Tag Info Box */}
                        <div className="bg-[#0E1424] border-2 border-amber-400/90 text-white px-3 py-1.5 rounded-2xl shadow-[0_0_25px_rgba(245,158,11,0.5)] flex flex-col items-center text-center gap-0.5 whitespace-nowrap mb-1">
                          <div className="flex items-center gap-1">
                            <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                            <span className="text-xs font-black text-amber-300">☕ Nova Café Flagship</span>
                          </div>
                          <span className="text-[9px] text-emerald-400 font-bold">Open Now • Till 11:00 PM</span>
                        </div>

                        {/* Big Coffee Location Marker */}
                        <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-amber-500 via-orange-500 to-amber-300 border-2 border-white shadow-2xl flex items-center justify-center text-slate-950 font-black animate-bounce" style={{ animationDuration: '2.5s' }}>
                          <Coffee className="w-5 h-5 text-slate-950" />
                        </div>
                        
                        <div className="text-[10px] font-bold text-white bg-slate-950/90 px-2 py-0.5 rounded-md mt-1 border border-slate-800 shadow-sm">
                          104 Artisan Avenue, Floor G-04
                        </div>
                      </div>
                    </div>

                    {/* Real-time Distance Overlay Tag on Route */}
                    <div 
                      className="absolute z-20 -translate-x-1/2 -translate-y-1/2 bg-[#090D16]/95 border border-cyan-500/50 text-cyan-300 px-2.5 py-1 rounded-full text-[10px] font-black shadow-lg backdrop-blur-xs flex items-center gap-1"
                      style={{ 
                        left: `${(userPinCoords.x + 68) / 2}%`, 
                        top: `${(userPinCoords.y + 32) / 2}%` 
                      }}
                    >
                      <Navigation className="w-3 h-3 text-cyan-400" />
                      <span>{distanceKm.toFixed(1)} km</span>
                    </div>

                    {/* Top-Right Compass Rose & Zoom Visuals */}
                    <div className="absolute top-4 right-4 flex flex-col items-end gap-2 z-10">
                      <div className="w-9 h-9 rounded-2xl bg-[#090D16]/90 border border-slate-800 flex items-center justify-center text-cyan-400 shadow-md">
                        <Compass className="w-5 h-5" />
                      </div>
                    </div>
                  </div>
                )}

                {/* Map Bottom Interactive Controller Drawer */}
                <div className="bg-[#090D16] border-t border-slate-800/90 p-4 sm:p-5 flex flex-col md:flex-row items-center justify-between gap-4">
                  
                  {/* Apni Location Trigger & Presets */}
                  <div className="w-full md:flex-1 space-y-2">
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-xs font-bold text-slate-300 flex items-center gap-1.5">
                        <LocateFixed className="w-3.5 h-3.5 text-cyan-400" />
                        <span>Apni Location Setup & Presets:</span>
                      </span>
                      
                      <button
                        onClick={() => handleDetectLocation()}
                        disabled={isDetectingLocation}
                        className="bg-cyan-500/10 hover:bg-cyan-500 hover:text-slate-950 text-cyan-400 border border-cyan-500/40 text-[11px] font-bold px-3 py-1 rounded-full transition-all flex items-center gap-1.5"
                      >
                        <RefreshCw className={`w-3 h-3 ${isDetectingLocation ? 'animate-spin' : ''}`} />
                        <span>{isDetectingLocation ? 'Tracking...' : 'Auto-Detect Apni GPS'}</span>
                      </button>
                    </div>

                    {/* Quick Preset Location Chips */}
                    <div className="flex items-center gap-1.5 flex-wrap">
                      {[
                        { label: 'Connaught Plaza', km: 1.8, coords: { x: 26, y: 74 } },
                        { label: 'Central Park Gate', km: 0.9, coords: { x: 42, y: 55 } },
                        { label: 'Cyber Tech Park', km: 3.4, coords: { x: 18, y: 82 } },
                        { label: 'Airport Expressway', km: 5.2, coords: { x: 14, y: 88 } }
                      ].map((preset, idx) => (
                        <button
                          key={idx}
                          onClick={() => handleDetectLocation(preset.label, preset.km, preset.coords)}
                          className={`text-[10px] font-bold px-2.5 py-1 rounded-full transition-all border ${
                            distanceKm === preset.km
                              ? 'bg-cyan-500 text-slate-950 border-cyan-400 shadow-xs'
                              : 'bg-[#0E1424] text-slate-400 border-slate-800 hover:text-white'
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

                  {/* Navigation External CTAs */}
                  <div className="flex items-center gap-2.5 w-full md:w-auto">
                    {/* Google Maps Direct Navigation Link */}
                    <a
                      href="https://www.google.com/maps/dir/?api=1&destination=Nova+Cafe+Artisan+Roasters+104+Avenue"
                      target="_blank"
                      rel="noreferrer"
                      className="flex-1 md:flex-none bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-black px-4 py-2.5 rounded-full text-xs transition-all shadow-[0_0_20px_rgba(6,182,212,0.4)] flex items-center justify-center gap-1.5"
                    >
                      <Navigation className="w-3.5 h-3.5" />
                      <span>Start Navigation</span>
                      <ExternalLink className="w-3 h-3 opacity-70" />
                    </a>

                    {/* WhatsApp Location Share */}
                    <a
                      href="https://wa.me/?text=Here%20is%20the%20location%20of%20Nova%20Cafe%20%26%20Artisan%20Roasters%3A%20104%20Artisan%20Avenue%20(Open%208%20AM%20-%2011%20PM)%20https%3A%2F%2Fmaps.google.com"
                      target="_blank"
                      rel="noreferrer"
                      className="bg-[#0E1424] hover:bg-[#111827] text-slate-200 border border-slate-800 hover:border-cyan-500/40 px-3.5 py-2.5 rounded-full text-xs font-bold transition-all flex items-center justify-center gap-1.5"
                    >
                      <Share2 className="w-3.5 h-3.5 text-cyan-400" />
                      <span>Share Location</span>
                    </a>
                  </div>
                </div>
              </div>

              {/* 3 Quick Café Access & Amenities Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
                <div className={`p-4 rounded-2xl border ${theme.cardBg} space-y-1 shadow-xs`}>
                  <div className="flex items-center gap-2 text-cyan-400 font-bold text-xs">
                    <span className="w-7 h-7 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center">🅿️</span>
                    <span>Free Valet Parking</span>
                  </div>
                  <p className="text-[11px] text-slate-400">
                    Complimentary valet parking available at Gate 1 for all diners, workspace regulars & takeaway pickups.
                  </p>
                </div>

                <div className={`p-4 rounded-2xl border ${theme.cardBg} space-y-1 shadow-xs`}>
                  <div className="flex items-center gap-2 text-cyan-400 font-bold text-xs">
                    <span className="w-7 h-7 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center">🚇</span>
                    <span>Nearest Metro Station</span>
                  </div>
                  <p className="text-[11px] text-slate-400">
                    350 meters (3 min walk) from <strong>Roastery Square Metro Station (Gate 2)</strong>. Direct walkway access.
                  </p>
                </div>

                <div className={`p-4 rounded-2xl border ${theme.cardBg} space-y-1 shadow-xs`}>
                  <div className="flex items-center gap-2 text-cyan-400 font-bold text-xs">
                    <span className="w-7 h-7 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center">⚡</span>
                    <span>High-Speed Wi-Fi & Work Pods</span>
                  </div>
                  <p className="text-[11px] text-slate-400">
                    300 Mbps fiber internet, ergonomic work pods with universal power sockets for coffee-and-code sessions.
                  </p>
                </div>
              </div>

            </div>
          </section>

          {/* ------------------------------------------------------------- */}
          {/* VISIT US & CONTACT */}
          {/* ------------------------------------------------------------- */}
          <footer id="contact" className={`py-14 px-4 sm:px-6 border-t ${theme.footerBg}`}>
            <div className={`max-w-5xl mx-auto grid grid-cols-1 ${!isBase ? 'md:grid-cols-3' : 'md:grid-cols-2'} gap-8 mb-10`}>
              
              {/* Brand Col */}
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <div className={`w-8 h-8 rounded-xl border flex items-center justify-center font-bold ${theme.brandLogo}`}>
                    <Coffee className="w-4 h-4" />
                  </div>
                  <h3 className={`text-2xl font-bold ${theme.footerTitle}`}>Nova Café</h3>
                </div>
                <p className={`text-xs leading-relaxed ${theme.footerDesc}`}>
                  Artisan coffee roastery, freshly baked pastries, and gourmet sourdough plates.
                </p>
                <div className={`inline-flex items-center gap-2 border px-3.5 py-1.5 rounded-full text-xs font-bold ${theme.footerBadge}`}>
                  <Clock className="w-3.5 h-3.5" />
                  <span>Timings: 8:00 AM – 11:00 PM (All 7 Days)</span>
                </div>
              </div>

              {/* Visit Details */}
              <div className="space-y-3 text-xs">
                <h4 className={`font-bold uppercase tracking-wider text-xs mb-3 ${theme.footerHeading}`}>Visit Us</h4>
                <p className={`flex items-center gap-2 ${theme.footerDesc}`}>
                  <MapPin className="w-4 h-4 shrink-0 opacity-80" />
                  104 Artisan Avenue, Nova Roastery District
                </p>
                <p className={`flex items-center gap-2 ${theme.footerDesc}`}>
                  <Phone className="w-4 h-4 shrink-0 opacity-80" />
                  +91 98765 43210 (Direct Order / Inquiries)
                </p>
                
                {/* WhatsApp Direct Message CTA */}
                <div className="pt-2">
                  <a 
                    href="https://wa.me/919137283810?text=Hello%20Upscale%20Nova%2C%20I%20am%20interested%20in%20your%20services.%20Please%20provide%20more%20information."
                    target="_blank" 
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 bg-emerald-900/80 hover:bg-emerald-800 text-emerald-200 border border-emerald-700/80 px-4 py-2 rounded-full text-xs font-bold transition-all shadow-md"
                  >
                    <MessageCircle className="w-4 h-4 text-emerald-200" />
                    <span>Chat on WhatsApp (+91 98765 43210)</span>
                  </a>
                </div>
              </div>

              {/* Social Channels (Shown only for Pro and Max, removed for Base Plan) */}
              {!isBase && (
                <div className="space-y-3">
                  <h4 className={`font-bold uppercase tracking-wider text-xs ${theme.footerHeading}`}>Connect & Follow</h4>
                  <p className={`text-xs ${theme.footerDesc}`}>Follow our daily roasting stories and fresh bake drops:</p>
                  
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
                    Book Table Online
                  </button>
                </div>
              )}
            </div>

            <div className={`pt-6 border-t text-center text-xs opacity-60 border-inherit`}>
              © 2026 Nova Café & Roasters • {isBase ? `Base Plan ${basePrice}` : isPro ? `Pro Plan ${proPrice}` : `Max Plan ${maxPrice}`}
            </div>
          </footer>
        </>
      )}

      {/* ------------------------------------------------------------- */}
      {/* MAX PLAN: INTERACTIVE TOUCH/HOVER MICRO-ANIMATION OVERLAY */}
      {/* ------------------------------------------------------------- */}
      {isMax && activeAnimation && (
        <div className="fixed bottom-6 left-6 z-50 animate-in slide-in-from-bottom-5 duration-300 pointer-events-none">
          <div className="bg-[#0E1424] text-slate-200 p-4 rounded-2xl border border-cyan-500/50 shadow-2xl flex items-center gap-3.5 max-w-sm">
            <div className="w-12 h-12 rounded-xl bg-[#090D16] overflow-hidden relative shrink-0 flex items-center justify-center border border-slate-800">
              <img src={activeAnimation.item.image} alt={activeAnimation.item.name} className="w-full h-full object-cover" />
              
              {activeAnimation.type === 'salt' && (
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                  <Sparkles className="w-6 h-6 text-cyan-400 animate-spin" />
                </div>
              )}
              {activeAnimation.type === 'cheese' && (
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                  <Flame className="w-6 h-6 text-amber-400 animate-bounce" />
                </div>
              )}
              {activeAnimation.type === 'steam' && (
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                  <Coffee className="w-6 h-6 text-cyan-400 animate-pulse" />
                </div>
              )}
              {activeAnimation.type === 'cold' && (
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                  <Sparkle className="w-6 h-6 text-cyan-300 animate-spin" />
                </div>
              )}
              {activeAnimation.type === 'chocolate' && (
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                  <Heart className="w-6 h-6 text-pink-400 animate-ping" />
                </div>
              )}
            </div>

            <div>
              <div className="text-[10px] font-black uppercase tracking-wider text-cyan-400 flex items-center gap-1">
                <Sparkles className="w-3 h-3 text-cyan-400" />
                {activeAnimation.type === 'salt' && '✨ Sea-Salt Sprinkles Added!'}
                {activeAnimation.type === 'cheese' && '🧀 Molten Stretchy Cheese Melting!'}
                {activeAnimation.type === 'steam' && '☕ Fresh Aromatic Steam Brewing!'}
                {activeAnimation.type === 'cold' && '🧊 Nitro Ice Crystals & Froth Chilled!'}
                {activeAnimation.type === 'chocolate' && '🍫 70% Dark Chocolate Drizzled!'}
              </div>
              <div className="text-xs font-bold text-white mt-0.5">{activeAnimation.item.name}</div>
              <div className="text-[11px] text-slate-400">Added to your order basket!</div>
            </div>
          </div>
        </div>
      )}

      {/* ------------------------------------------------------------- */}
      {/* MAX PLAN: NOVA AI BARISTA CHATBOX WIDGET */}
      {/* ------------------------------------------------------------- */}
      {isMax && (
        <div className="fixed bottom-6 right-6 z-50">
          {!isAiChatOpen ? (
            <button
              onClick={() => setIsAiChatOpen(true)}
              className="bg-[#0E1424] hover:bg-[#111827] text-white p-3.5 rounded-full border border-cyan-500/50 shadow-[0_0_25px_rgba(6,182,212,0.3)] flex items-center gap-2.5 font-bold text-xs transition-transform hover:scale-105"
            >
              <div className="w-7 h-7 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 flex items-center justify-center font-black">
                <Bot className="w-4 h-4" />
              </div>
              <span className="font-bold pr-1 text-cyan-300">Nova AI Barista</span>
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping"></span>
            </button>
          ) : (
            <div className="bg-[#0E1424] w-80 sm:w-96 rounded-3xl shadow-2xl border border-slate-800 flex flex-col h-[460px] animate-in slide-in-from-bottom-5 duration-200 overflow-hidden">
              
              {/* Chat Header */}
              <div className="bg-[#090D16] text-white p-4 flex items-center justify-between border-b border-slate-800">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 flex items-center justify-center font-bold">
                    <Bot className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="font-bold text-xs text-white">Nova AI Barista Assistant</div>
                    <div className="text-[10px] text-cyan-400 flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span> Instant Menu AI
                    </div>
                  </div>
                </div>
                <button onClick={() => setIsAiChatOpen(false)} className="p-1 hover:bg-white/10 rounded-full text-slate-400 hover:text-white">
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Chat Messages */}
              <div className="flex-1 p-3.5 overflow-y-auto space-y-3 text-xs bg-[#090D16]">
                {chatMessages.map((msg, i) => (
                  <div key={i} className={`flex flex-col ${msg.role === 'user' ? 'items-end' : 'items-start'}`}>
                    <div className={`p-3 max-w-[85%] rounded-2xl ${
                      msg.role === 'user' 
                        ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 font-bold rounded-br-xs' 
                        : 'bg-[#0E1424] text-slate-200 border border-slate-800 shadow-xs rounded-bl-xs'
                    }`}>
                      <p className="leading-relaxed">{msg.text}</p>

                      {msg.recommendedItem && (
                        <div className="mt-2.5 pt-2 border-t border-slate-800 flex items-center justify-between gap-2">
                          <div className="flex items-center gap-2">
                            <img src={msg.recommendedItem.image} alt={msg.recommendedItem.name} className="w-8 h-8 rounded-lg object-cover" />
                            <div>
                              <div className="font-bold text-[11px] text-white truncate max-w-[120px]">{msg.recommendedItem.name}</div>
                              <div className="text-[10px] text-cyan-400 font-bold">₹{msg.recommendedItem.price}</div>
                            </div>
                          </div>
                          <button 
                            onClick={() => {
                              if (msg.recommendedItem) addToCart(msg.recommendedItem);
                            }}
                            className="bg-cyan-500 hover:bg-cyan-400 text-slate-950 px-2.5 py-1 rounded-full text-[10px] font-bold flex items-center gap-1 shrink-0"
                          >
                            <Plus className="w-3 h-3" /> Add
                          </button>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Quick Prompts */}
              <div className="p-2 bg-[#0E1424] border-t border-slate-800 flex gap-1.5 overflow-x-auto text-[10px]">
                <button onClick={() => handleSendChat("What's your best cold coffee?")} className="bg-[#090D16] hover:bg-[#111827] text-slate-300 hover:text-cyan-300 px-2.5 py-1 rounded-full whitespace-nowrap border border-slate-800 font-medium">
                  ☕ Best Cold Brew?
                </button>
                <button onClick={() => handleSendChat("Suggest healthy veg breakfast")} className="bg-[#090D16] hover:bg-[#111827] text-slate-300 hover:text-cyan-300 px-2.5 py-1 rounded-full whitespace-nowrap border border-slate-800 font-medium">
                  🥑 Veg Breakfast
                </button>
                <button onClick={() => handleSendChat("Something with Belgian chocolate")} className="bg-[#090D16] hover:bg-[#111827] text-slate-300 hover:text-cyan-300 px-2.5 py-1 rounded-full whitespace-nowrap border border-slate-800 font-medium">
                  🍫 Chocolate Sweet
                </button>
              </div>

              {/* Chat Input */}
              <form onSubmit={(e) => { e.preventDefault(); handleSendChat(); }} className="p-2.5 bg-[#0E1424] border-t border-slate-800 flex gap-2">
                <input 
                  type="text" 
                  value={chatInput} 
                  onChange={(e) => setChatInput(e.target.value)}
                  placeholder="Ask Nova Barista anything..." 
                  className="flex-1 bg-[#090D16] border border-slate-800 text-slate-200 rounded-full px-3.5 py-1.5 text-xs focus:outline-none focus:border-cyan-400 placeholder:text-slate-500"
                />
                <button type="submit" className="bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 p-2 rounded-full hover:brightness-110">
                  <Send className="w-3.5 h-3.5" />
                </button>
              </form>

            </div>
          )}
        </div>
      )}

      {/* ------------------------------------------------------------- */}
      {/* BASKET DRAWER (Pro & Max Plans) */}
      {/* ------------------------------------------------------------- */}
      {!isBase && isCartOpen && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-xs flex justify-end animate-in fade-in duration-200">
          <div className="bg-[#0E1424] text-slate-200 w-full sm:max-w-md h-full shadow-2xl flex flex-col p-4 sm:p-6 overflow-y-auto border-l border-slate-800">
            
            {/* Header */}
            <div className="flex justify-between items-center pb-4 border-b border-slate-800">
              <div>
                <h3 className="font-black text-xl text-white">Nova Order Basket</h3>
                <span className="text-xs font-bold text-cyan-400 bg-[#090D16] px-2.5 py-0.5 rounded-full border border-slate-800">
                  {isPro ? 'Pro WhatsApp Checkout' : 'Max Multi-Action Order'}
                </span>
              </div>
              <button onClick={() => setIsCartOpen(false)} className="p-2 hover:bg-[#090D16] rounded-full text-slate-400 hover:text-white">
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* TAB CONTENT: DETAILS & BILL */}
            {activeCheckoutTab === 'details' && (
              <div className="flex-1 flex flex-col justify-between py-4 space-y-6">
                
                {/* 1. Selected Items Section */}
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-black uppercase tracking-wider text-cyan-400">
                      1. Selected Items ({cartCount})
                    </span>
                    {cart.length > 0 && (
                      <span className="text-xs text-slate-400 font-medium">Subtotal: ₹{cartTotal}</span>
                    )}
                  </div>

                  {cart.length === 0 ? (
                    <div className="text-center py-10 text-slate-500 bg-[#090D16] rounded-2xl border border-dashed border-slate-800">
                      <Coffee className="w-10 h-10 mx-auto mb-2 opacity-40 text-cyan-400" />
                      <p className="font-bold text-xs text-slate-300">Your basket is empty.</p>
                      <p className="text-[11px] mt-0.5 text-slate-500">Add items from the menu to build your order.</p>
                    </div>
                  ) : (
                    <div className="space-y-2.5 max-h-48 overflow-y-auto pr-1">
                      {cart.map(({ item, qty }) => (
                        <div key={item.id} className="p-2.5 bg-[#090D16] rounded-2xl border border-slate-800 flex items-center justify-between gap-3">
                          <div className="flex items-center gap-2.5">
                            <img src={item.image} alt={item.name} className="w-10 h-10 rounded-xl object-cover border border-slate-800" />
                            <div>
                              <h4 className="font-bold text-xs text-white line-clamp-1">{item.name}</h4>
                              <div className="text-[11px] text-cyan-400 font-bold">₹{item.price} each</div>
                            </div>
                          </div>
                          <div className="flex items-center gap-2 bg-[#0E1424] px-2 py-1 rounded-full border border-slate-800">
                            <button onClick={() => updateQty(item.id, -1)} className="p-0.5 hover:text-rose-400"><Minus className="w-3 h-3" /></button>
                            <span className="text-xs font-black w-4 text-center text-white">{qty}</span>
                            <button onClick={() => updateQty(item.id, 1)} className="p-0.5 hover:text-emerald-400"><Plus className="w-3 h-3" /></button>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* 2. Customer Information & Table Selection (Inside Basket) */}
                <div className="space-y-3.5 bg-[#090D16] p-4 rounded-3xl border border-slate-800">
                  <div className="text-xs font-black uppercase tracking-wider text-cyan-400">
                    2. Table & Customer Information
                  </div>

                  {/* Table Selector Pills */}
                  <div>
                    <label className="block text-[11px] font-bold text-slate-200 mb-1.5">
                      Select Table / Dine-In Mode
                    </label>
                    <div className="flex flex-wrap gap-1.5">
                      {['Table 01', 'Table 02', 'Table 03', 'Table 04', 'Takeaway'].map((tbl) => (
                        <button
                          key={tbl}
                          type="button"
                          onClick={() => setSelectedTable(tbl)}
                          className={`px-3 py-1 text-xs font-bold rounded-full transition-all ${
                            selectedTable === tbl 
                              ? 'bg-cyan-500 text-slate-950 font-black shadow-xs' 
                              : 'bg-[#0E1424] text-slate-400 hover:bg-[#111827] hover:text-white border border-slate-800'
                          }`}
                        >
                          {tbl}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Customer Name */}
                  <div>
                    <label className="block text-[11px] font-bold text-slate-200 mb-1">
                      Customer Name
                    </label>
                    <input 
                      type="text" 
                      value={customerName}
                      onChange={(e) => setCustomerName(e.target.value)}
                      placeholder="e.g. Aman Verma"
                      className="w-full bg-[#0E1424] border border-slate-800 rounded-xl px-3 py-2 text-xs font-medium text-slate-200 focus:outline-none focus:border-cyan-400 placeholder:text-slate-500"
                    />
                  </div>

                  {/* Phone Number */}
                  <div>
                    <label className="block text-[11px] font-bold text-slate-200 mb-1">
                      Phone Number (For WhatsApp Confirmation)
                    </label>
                    <input 
                      type="tel" 
                      value={customerPhone}
                      onChange={(e) => setCustomerPhone(e.target.value)}
                      placeholder="+91 98765 43210"
                      className="w-full bg-[#0E1424] border border-slate-800 rounded-xl px-3 py-2 text-xs font-medium text-slate-200 focus:outline-none focus:border-cyan-400 placeholder:text-slate-500"
                    />
                  </div>

                  {/* Extra Kya Chahiye / Special Requirements */}
                  <div>
                    <label className="block text-[11px] font-bold text-slate-200 mb-1">
                      Extra kya chahiye? (Special Notes / Custom Requirements)
                    </label>
                    <textarea 
                      rows={2}
                      value={extraRequirements}
                      onChange={(e) => setExtraRequirements(e.target.value)}
                      placeholder="e.g. Extra sugar, less spicy, oat milk, extra napkins, less ice..."
                      className="w-full bg-[#0E1424] border border-slate-800 rounded-xl px-3 py-2 text-xs font-medium text-slate-200 focus:outline-none focus:border-cyan-400 placeholder:text-slate-500"
                    ></textarea>
                  </div>
                </div>

                {/* 3. Actions / Buttons Area */}
                {cart.length > 0 && (
                  <div className="space-y-3 pt-2">
                    
                    {/* Itemized Bill Accordion */}
                    {showBillDetails && (
                      <div className="bg-[#090D16] p-3.5 rounded-2xl border border-slate-800 space-y-1.5 text-xs text-slate-200">
                        <div className="flex justify-between"><span>Items Subtotal ({cartCount} items)</span><span>₹{cartTotal}</span></div>
                        <div className="flex justify-between text-slate-400"><span>Taxes & GST (5%)</span><span>₹{taxes}</span></div>
                        <div className="flex justify-between font-black text-sm text-white pt-2 border-t border-slate-800">
                          <span>Grand Total Payable</span>
                          <span className="text-base text-cyan-400">₹{grandTotal}</span>
                        </div>
                      </div>
                    )}

                    {/* PRO PLAN ACTIONS: Single Direct WhatsApp Order */}
                    {isPro && (
                      <div className="space-y-2">
                        <a 
                          href={getWhatsAppOrderLink()}
                          target="_blank"
                          rel="noreferrer"
                          className="w-full bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-400 hover:to-green-500 text-slate-950 font-black py-3.5 rounded-full shadow-[0_0_20px_rgba(16,185,129,0.3)] transition-transform hover:-translate-y-0.5 text-xs uppercase tracking-wider flex items-center justify-center gap-2"
                        >
                          <MessageCircle className="w-4 h-4 text-slate-950" />
                          <span>Order on WhatsApp (₹{grandTotal})</span>
                        </a>

                        <button
                          onClick={() => setActiveCheckoutTab('payment')}
                          className="w-full bg-[#090D16] hover:bg-[#111827] text-cyan-400 font-bold py-2.5 rounded-full text-xs transition-colors border border-slate-800 flex items-center justify-center gap-2"
                        >
                          <CreditCard className="w-3.5 h-3.5 text-cyan-400" />
                          <span>View Digital Payment Options</span>
                        </button>
                      </div>
                    )}

                    {/* MAX PLAN ACTIONS: Exactly 3 Distinct Buttons (Bill, Place Order, Payment) */}
                    {isMax && (
                      <div className="space-y-2">
                        <div className="grid grid-cols-2 gap-2">
                          {/* Option 1: Bill Button */}
                          <button 
                            type="button"
                            onClick={() => setShowBillDetails(!showBillDetails)}
                            className="bg-[#090D16] hover:bg-[#111827] text-cyan-400 font-bold py-3 rounded-full text-xs border border-slate-800 flex items-center justify-center gap-1.5 transition-colors"
                          >
                            <Receipt className="w-3.5 h-3.5 text-cyan-400" />
                            <span>{showBillDetails ? 'Hide Bill' : 'Bill (₹' + grandTotal + ')'}</span>
                          </button>

                          {/* Option 2: Place Order Button */}
                          <a 
                            href={getWhatsAppOrderLink()}
                            target="_blank"
                            rel="noreferrer"
                            className="bg-emerald-600 hover:bg-emerald-500 text-slate-950 font-black py-3 rounded-full text-xs flex items-center justify-center gap-1.5 shadow-md transition-transform hover:-translate-y-0.5"
                          >
                            <Send className="w-3.5 h-3.5 text-slate-950" />
                            <span>Place Order</span>
                          </a>
                        </div>

                        {/* Option 3: Payment Button */}
                        <button 
                          type="button"
                          onClick={() => setActiveCheckoutTab('payment')}
                          className="w-full bg-gradient-to-r from-cyan-500 via-sky-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-black py-3.5 rounded-full shadow-[0_0_20px_rgba(6,182,212,0.4)] transition-transform hover:-translate-y-0.5 text-xs uppercase tracking-wider flex items-center justify-center gap-2"
                        >
                          <CreditCard className="w-4 h-4 text-slate-950" />
                          <span>Payment Options (Instant UPI & QR)</span>
                        </button>
                      </div>
                    )}

                  </div>
                )}
              </div>
            )}

            {/* TAB CONTENT: PAYMENT METHODS (Google Pay, PhonePe, Paytm, BHIM, Cash) */}
            {activeCheckoutTab === 'payment' && (
              <div className="flex-1 py-4 space-y-5">
                <div className="bg-[#090D16] p-4 rounded-2xl border border-slate-800 text-xs">
                  <div className="font-bold text-white mb-0.5">Select Payment Method (₹{grandTotal})</div>
                  <div className="text-slate-400">Simulated instant checkout for {selectedTable} • {customerName}</div>
                </div>

                <div className="space-y-2.5">
                  {[
                    { id: 'gpay', name: 'Google Pay (GPay UPI)', tag: 'Instant UPI', desc: 'Fastest 1-tap approval' },
                    { id: 'phonepe', name: 'PhonePe UPI', tag: 'Fast Pay', desc: 'UPI ID & QR Scan' },
                    { id: 'paytm', name: 'Paytm Wallet & UPI', tag: 'Instant', desc: 'Wallet balance & UPI' },
                    { id: 'bhim', name: 'BHIM UPI QR', tag: 'Govt App', desc: 'Scan dynamic table QR' },
                    { id: 'fampay', name: 'FamPay (Gen-Z UPI)', tag: 'Gen-Z', desc: 'Card & UPI' },
                    { id: 'counter', name: 'Pay at Counter / Cash', tag: 'Dine-In', desc: 'Settle before leaving' }
                  ].map(opt => (
                    <label 
                      key={opt.id}
                      onClick={() => setSelectedPaymentMethod(opt.id as any)}
                      className={`flex items-center justify-between p-3 rounded-2xl border cursor-pointer transition-all ${
                        selectedPaymentMethod === opt.id 
                          ? 'border-cyan-400 bg-[#090D16] shadow-[0_0_15px_rgba(6,182,212,0.15)]' 
                          : 'border-slate-800 bg-[#0E1424] hover:bg-[#090D16]'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-xl bg-[#090D16] text-cyan-400 border border-slate-800 text-xs font-black flex items-center justify-center">
                          {opt.name[0]}
                        </div>
                        <div>
                          <div className="font-bold text-xs text-white">{opt.name}</div>
                          <div className="text-[10px] text-slate-400">{opt.desc}</div>
                        </div>
                      </div>
                      <input 
                        type="radio" 
                        name="payMethod" 
                        checked={selectedPaymentMethod === opt.id} 
                        onChange={() => {}}
                        className="accent-cyan-400" 
                      />
                    </label>
                  ))}
                </div>

                <div className="space-y-2 pt-2">
                  <button 
                    onClick={() => {
                      setActiveCheckoutTab('tracking');
                      setOrderStatus('received');
                    }}
                    className="w-full bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-400 hover:to-green-500 text-slate-950 font-black py-3.5 rounded-full shadow-[0_0_20px_rgba(16,185,129,0.3)] transition-transform hover:-translate-y-0.5 text-xs uppercase tracking-wider flex items-center justify-center gap-2"
                  >
                    <ShieldCheck className="w-4 h-4 text-slate-950" />
                    <span>Confirm & Simulate Payment (₹{grandTotal})</span>
                  </button>

                  <button
                    onClick={() => setActiveCheckoutTab('details')}
                    className="w-full text-center text-xs font-bold text-slate-400 py-2 hover:underline"
                  >
                    ← Back to Basket Details
                  </button>
                </div>
              </div>
            )}

            {/* TAB CONTENT: LIVE ORDER TRACKING STEPPER */}
            {activeCheckoutTab === 'tracking' && (
              <div className="flex-1 py-4 space-y-5 text-center">
                <div className="w-14 h-14 bg-emerald-950/80 text-emerald-400 border border-emerald-700 rounded-full flex items-center justify-center mx-auto shadow-[0_0_20px_rgba(16,185,129,0.2)]">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <div>
                  <h4 className="text-xl font-black text-white">Order Confirmed & Paid!</h4>
                  <p className="text-xs text-slate-400 mt-0.5">Ticket #114 dispatched to Barista for {selectedTable}</p>
                </div>

                {/* Status Stepper with Rounded Items */}
                <div className="bg-[#090D16] p-5 rounded-3xl border border-slate-800 text-left space-y-3.5">
                  <div className="text-xs font-black uppercase text-cyan-400 tracking-wider">Live Status Stepper</div>
                  
                  <div className="space-y-3">
                    {[
                      { key: 'received', label: '1. Order Dispatched to Barista', desc: 'Ticket printed at Nova Espresso Station' },
                      { key: 'kitchen', label: '2. Brewing Coffee & Toasting Bakes', desc: 'Single-origin espresso pulled & croissant heated' },
                      { key: 'ready', label: '3. Order Ready for Server', desc: 'Server on way to ' + selectedTable },
                      { key: 'completed', label: '4. Served at ' + selectedTable, desc: 'Enjoy your artisan coffee & meal!' }
                    ].map((st, i) => {
                      const isDone = 
                        (orderStatus === 'completed') || 
                        (orderStatus === 'ready' && i <= 2) || 
                        (orderStatus === 'kitchen' && i <= 1) || 
                        (orderStatus === 'received' && i === 0);
                      
                      const isCurrent = orderStatus === st.key;

                      return (
                        <div key={st.key} className="flex gap-3 items-start">
                          <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold shrink-0 mt-0.5 ${
                            isDone ? 'bg-cyan-500 text-slate-950 font-black' : 'bg-[#0E1424] text-slate-500 border border-slate-800'
                          }`}>
                            {isDone ? '✓' : i + 1}
                          </div>
                          <div>
                            <div className={`text-xs font-bold ${isCurrent ? 'text-white font-black' : 'text-slate-400'}`}>
                              {st.label}
                            </div>
                            <div className="text-[10px] text-slate-500">{st.desc}</div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Simulation Stepper Button */}
                <div className="space-y-2">
                  <button
                    onClick={() => {
                      if (orderStatus === 'received') setOrderStatus('kitchen');
                      else if (orderStatus === 'kitchen') setOrderStatus('ready');
                      else if (orderStatus === 'ready') setOrderStatus('completed');
                      else {
                        setActiveCheckoutTab('details');
                        setCart([]);
                        setIsCartOpen(false);
                      }
                    }}
                    className="w-full bg-[#0E1424] hover:bg-[#111827] text-cyan-400 border border-slate-800 hover:border-cyan-500/50 font-bold py-3 rounded-full text-xs transition-colors"
                  >
                    {orderStatus === 'received' && 'Simulate Kitchen Brewing →'}
                    {orderStatus === 'kitchen' && 'Simulate Ready for Table →'}
                    {orderStatus === 'ready' && 'Simulate Served at Table →'}
                    {orderStatus === 'completed' && 'Done! Reset Demo'}
                  </button>
                  <p className="text-[10px] text-slate-500">Demonstrates automated real-time status tracker for customers.</p>
                </div>
              </div>
            )}

          </div>
        </div>
      )}

      {/* ------------------------------------------------------------- */}
      {/* TABLE RESERVATION MODAL (Pro & Max with Rounded Corners) */}
      {/* ------------------------------------------------------------- */}
      {isBookingOpen && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-[#0E1424] text-slate-200 rounded-3xl p-6 sm:p-8 max-w-md w-full shadow-2xl border border-slate-800">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-bold text-white">Reserve a Table at Nova Café</h3>
              <button onClick={() => { setIsBookingOpen(false); setBookingSuccess(false); }} className="p-2 hover:bg-[#090D16] rounded-full text-slate-400">
                <X className="w-4 h-4 text-slate-400" />
              </button>
            </div>

            {bookingSuccess ? (
              <div className="text-center py-6 space-y-4">
                <div className="w-12 h-12 bg-emerald-950 text-emerald-400 border border-emerald-800 rounded-full flex items-center justify-center mx-auto">
                  <Check className="w-6 h-6" />
                </div>
                <h4 className="font-bold text-lg text-white">Table Confirmed!</h4>
                <p className="text-xs text-slate-400">We have reserved your table at Nova Café. A confirmation SMS & WhatsApp message has been dispatched.</p>
                <button 
                  onClick={() => { setIsBookingOpen(false); setBookingSuccess(false); }}
                  className="bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 font-black px-6 py-2.5 rounded-full text-xs hover:brightness-110"
                >
                  Close
                </button>
              </div>
            ) : (
              <form onSubmit={(e) => { e.preventDefault(); setBookingSuccess(true); }} className="space-y-4 text-xs">
                <div>
                  <label className="block font-bold text-slate-200 mb-1">Your Full Name</label>
                  <input type="text" required placeholder="e.g. Brijesh Chauhan" className="w-full bg-[#090D16] border border-slate-800 rounded-xl px-3.5 py-2.5 text-slate-200 focus:outline-none focus:border-cyan-400" />
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block font-bold text-slate-200 mb-1">Date</label>
                    <input type="date" required defaultValue="2026-08-15" className="w-full bg-[#090D16] border border-slate-800 rounded-xl px-3.5 py-2.5 text-slate-200 focus:outline-none focus:border-cyan-400" />
                  </div>
                  <div>
                    <label className="block font-bold text-slate-200 mb-1">Time Slot</label>
                    <select className="w-full bg-[#090D16] border border-slate-800 rounded-xl px-3.5 py-2.5 text-slate-200 focus:outline-none focus:border-cyan-400">
                      <option>10:00 AM (Morning Coffee)</option>
                      <option>01:00 PM (Lunch & Panini)</option>
                      <option>05:00 PM (Evening Coffee & Bakes)</option>
                      <option>08:30 PM (Dinner & Dessert)</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label className="block font-bold text-slate-200 mb-1">Number of Guests</label>
                  <select className="w-full bg-[#090D16] border border-slate-800 rounded-xl px-3.5 py-2.5 text-slate-200 focus:outline-none focus:border-cyan-400">
                    <option>2 Guests (Cozy Table)</option>
                    <option>4 Guests (Family Table)</option>
                    <option>6+ Guests (Private Lounge Area)</option>
                  </select>
                </div>
                <div>
                  <label className="block font-bold text-slate-200 mb-1">Phone Number (For WhatsApp Confirmation)</label>
                  <input type="tel" required placeholder="+91 98765 43210" className="w-full bg-[#090D16] border border-slate-800 rounded-xl px-3.5 py-2.5 text-slate-200 focus:outline-none focus:border-cyan-400" />
                </div>

                <button 
                  type="submit"
                  className="w-full bg-gradient-to-r from-cyan-500 via-sky-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-black py-3 rounded-full text-xs uppercase tracking-wider shadow-md transition-colors"
                >
                  Confirm Instant Reservation
                </button>
              </form>
            )}
          </div>
        </div>
      )}

      {/* ------------------------------------------------------------- */}
      {/* ADMIN & LIVE STOCK SOLD OUT MANAGER MODAL */}
      {/* ------------------------------------------------------------- */}
      {isManagerModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-3 sm:p-5 animate-in fade-in duration-200">
          <div className="bg-[#0E1424] text-slate-200 rounded-3xl p-5 sm:p-7 max-w-2xl w-full shadow-2xl border border-cyan-500/50 flex flex-col max-h-[90vh]">
            
            {/* Modal Header */}
            <div className="flex justify-between items-start pb-4 border-b border-slate-800">
              <div>
                <div className="inline-flex items-center gap-1.5 bg-[#090D16] text-cyan-400 border border-slate-800 px-2.5 py-0.5 rounded-full text-[10px] font-black uppercase tracking-wider mb-1.5">
                  <ShieldCheck className="w-3 h-3 text-cyan-400" />
                  <span>Cafe Owner / Counter Admin</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-black text-white">
                  Live Menu Stock & Sold Out Manager
                </h3>
                <p className="text-xs text-slate-400 mt-0.5">
                  Turn items Sold Out in real-time when kitchen runs out of ingredients.
                </p>
              </div>
              <button 
                onClick={() => setIsManagerModalOpen(false)}
                className="p-2 hover:bg-[#090D16] rounded-full text-slate-400 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Quick Metrics & Filter Controls */}
            <div className="py-3.5 space-y-3 border-b border-slate-800">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <div className="flex items-center gap-2 text-xs font-bold">
                  <span className="bg-[#090D16] px-3 py-1 rounded-full border border-slate-800 text-white">
                    Total: {CAFE_ITEMS.length} Items
                  </span>
                  <span className="bg-emerald-950/90 text-emerald-300 border border-emerald-700 px-3 py-1 rounded-full">
                    {CAFE_ITEMS.length - soldOutItemIds.length} Available
                  </span>
                  <span className="bg-rose-950/90 text-rose-300 border border-rose-700 px-3 py-1 rounded-full">
                    {soldOutItemIds.length} Sold Out
                  </span>
                </div>

                {soldOutItemIds.length > 0 && (
                  <button
                    onClick={resetAllStock}
                    className="text-[11px] font-bold text-cyan-400 hover:underline bg-[#090D16] px-3 py-1 rounded-full border border-slate-800"
                  >
                    Reset All Items to In-Stock
                  </button>
                )}
              </div>

              {/* Search in Admin */}
              <div className="relative">
                <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  value={managerSearchQuery}
                  onChange={(e) => setManagerSearchQuery(e.target.value)}
                  placeholder="Filter stock by dish name (e.g. Croissant, Pour-Over, Flatbread)..."
                  className="w-full bg-[#090D16] border border-slate-800 rounded-xl pl-9 pr-8 py-2 text-xs font-medium text-slate-200 placeholder:text-slate-500 focus:outline-none focus:border-cyan-400"
                />
                {managerSearchQuery && (
                  <button 
                    onClick={() => setManagerSearchQuery('')} 
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white"
                  >
                    <X className="w-3 h-3" />
                  </button>
                )}
              </div>

              {/* Category Filter in Admin */}
              <div className="flex gap-1.5 overflow-x-auto pb-1 text-[11px]">
                {CATEGORIES.map(cat => (
                  <button
                    key={cat}
                    onClick={() => setManagerCategoryFilter(cat)}
                    className={`px-3 py-1 rounded-full font-bold whitespace-nowrap transition-colors ${
                      managerCategoryFilter === cat
                        ? 'bg-cyan-500 text-slate-950 font-black'
                        : 'bg-[#090D16] text-slate-400 border border-slate-800 hover:text-white'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            {/* Scrollable Items List with 1-Click Sold Out Toggles */}
            <div className="flex-1 overflow-y-auto py-3 space-y-2 pr-1">
              {CAFE_ITEMS
                .filter(item => {
                  if (managerCategoryFilter !== 'All Items' && item.category !== managerCategoryFilter) return false;
                  if (managerSearchQuery.trim() !== '') {
                    const q = managerSearchQuery.toLowerCase();
                    return item.name.toLowerCase().includes(q) || item.category.toLowerCase().includes(q);
                  }
                  return true;
                })
                .map(item => {
                  const isSoldOut = soldOutItemIds.includes(item.id);

                  return (
                    <div 
                      key={item.id}
                      className={`p-2.5 sm:p-3 rounded-2xl border flex items-center justify-between gap-3 transition-all ${
                        isSoldOut 
                          ? 'bg-rose-950/20 border-rose-900/50' 
                          : 'bg-[#090D16] border-slate-800'
                      }`}
                    >
                      <div className="flex items-center gap-3 min-w-0">
                        <img 
                          src={item.image} 
                          alt={item.name} 
                          className={`w-11 h-11 rounded-xl object-cover border ${
                            isSoldOut ? 'grayscale border-rose-800/60 opacity-60' : 'border-slate-800'
                          }`} 
                        />
                        <div className="min-w-0">
                          <div className="flex items-center gap-1.5">
                            <h4 className="font-bold text-xs text-white truncate">{item.name}</h4>
                            {item.isChefSpecial && (
                              <span className="bg-cyan-500/20 text-cyan-300 text-[9px] font-bold px-1.5 py-0.2 rounded-sm shrink-0">Special</span>
                            )}
                          </div>
                          <div className="text-[11px] text-slate-400 flex items-center gap-2">
                            <span>{item.category}</span>
                            <span>•</span>
                            <span className="text-cyan-400 font-bold">₹{item.price}</span>
                            <span>•</span>
                            <span className={item.isVeg ? 'text-emerald-400 font-bold' : 'text-rose-400 font-bold'}>
                              {item.isVeg ? 'Veg' : 'Non-Veg'}
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* Sold Out Toggle Button */}
                      <button
                        onClick={() => toggleSoldOut(item.id)}
                        className={`px-3.5 py-1.5 rounded-full text-xs font-black transition-transform hover:scale-105 shrink-0 flex items-center gap-1.5 shadow-sm ${
                          isSoldOut
                            ? 'bg-rose-900 text-rose-100 hover:bg-rose-800 border border-rose-600'
                            : 'bg-emerald-950 text-emerald-300 hover:bg-emerald-900 border border-emerald-700'
                        }`}
                      >
                        {isSoldOut ? (
                          <>
                            <X className="w-3.5 h-3.5" />
                            <span>Sold Out</span>
                          </>
                        ) : (
                          <>
                            <Check className="w-3.5 h-3.5" />
                            <span>In Stock</span>
                          </>
                        )}
                      </button>
                    </div>
                  );
                })}
            </div>

            {/* Modal Footer */}
            <div className="pt-3 border-t border-slate-800 flex justify-between items-center text-xs">
              <span className="text-[11px] text-slate-400">
                Changes apply instantly across customer menu and ordering basket.
              </span>
              <button
                onClick={() => setIsManagerModalOpen(false)}
                className="bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 font-black px-5 py-2 rounded-full text-xs transition-colors"
              >
                Done / Save
              </button>
            </div>

          </div>
        </div>
      )}

      {/* ------------------------------------------------------------- */}
      {/* FLOATING DYNAMIC BASKET TRIGGER (Mobile Floating Button) */}
      {/* ------------------------------------------------------------- */}
      {!isBase && cartCount > 0 && !isCartOpen && (
        <div className="fixed bottom-6 left-6 z-40 sm:hidden">
          <button
            onClick={() => setIsCartOpen(true)}
            className={`${currentBasketTheme.bg} ${currentBasketTheme.text} ${currentBasketTheme.border} ${currentBasketTheme.glow} ${
              isBasketBouncing ? 'scale-110 ring-4 ring-white/40' : ''
            } p-3.5 rounded-full shadow-2xl border flex items-center gap-2.5 font-bold text-xs transition-all duration-300`}
          >
            <ShoppingCart className="w-4 h-4 shrink-0" />
            <span>Basket (₹{cartTotal})</span>
            <span className={`${currentBasketTheme.badgeBg} ${currentBasketTheme.badgeText} px-2 py-0.5 rounded-full text-[10px] font-black`}>
              {cartCount}
            </span>
          </button>
        </div>
      )}

    </div>
  );
};
