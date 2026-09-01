import React, { useState, useMemo, useEffect } from 'react';
import { DemoItem } from '../../data/demos';
import {
  BEAUTY_PRODUCTS,
  BEAUTY_CATEGORIES,
  BEAUTY_REVIEWS,
  BEAUTY_BLOGS,
  BEAUTY_COUPONS,
  INSTAGRAM_POSTS,
  BeautyProduct,
  ReviewItem,
  BlogPost
} from '../../data/beautyData';
import {
  Sparkles,
  Search,
  ShoppingBag,
  Heart,
  Star,
  Eye,
  Plus,
  Minus,
  Trash2,
  X,
  Check,
  CheckCircle2,
  ArrowRight,
  Shield,
  Truck,
  RotateCcw,
  Sparkle,
  Leaf,
  Droplets,
  MessageCircle,
  Phone,
  Mail,
  Instagram,
  Facebook,
  ChevronRight,
  ChevronLeft,
  Filter,
  SlidersHorizontal,
  Gift,
  Tag,
  User,
  Clock,
  CheckSquare,
  Award,
  CreditCard,
  QrCode,
  Smartphone,
  Box,
  MapPin,
  RefreshCw,
  ExternalLink,
  BookOpen,
  Share2,
  Menu,
  LayoutGrid,
  Waves
} from 'lucide-react';
import { BeautyReelsSection } from './BeautyReelsSection';

interface BeautyMaxDemoProps {
  demo: DemoItem;
  isMobile: boolean;
  isTablet: boolean;
}

interface CartItem {
  product: BeautyProduct;
  quantity: number;
  selectedVolume?: string;
  selectedShade?: string;
}

export const SIDEBAR_CATEGORIES = [
  {
    name: 'Skincare',
    icon: Droplets,
    subtext: 'Serums, SPF & Creams',
    count: '15 Products'
  },
  {
    name: 'Hair Care',
    icon: Waves,
    subtext: 'Oils, masks & tonics',
    count: '7 Products'
  },
  {
    name: 'Makeup',
    icon: Sparkles,
    subtext: 'Lip oils & tinted glow',
    count: '15 Products'
  },
  {
    name: 'Body Care',
    icon: Heart,
    subtext: 'Whipped butters & scrubs',
    count: '6 Products'
  },
  {
    name: 'Fragrance',
    icon: Sparkles,
    subtext: 'Artisan mists & perfumes',
    count: '4 Fragrances'
  },
  {
    name: 'Accessories',
    icon: LayoutGrid,
    subtext: 'Gua Sha, rollers & tools',
    count: '6 Tools'
  },
  {
    name: 'Best Sellers',
    icon: Star,
    subtext: 'Award-winning formulas',
    count: 'Top Rated'
  }
];

export const BeautyMaxDemo: React.FC<BeautyMaxDemoProps> = ({ demo, isMobile, isTablet }) => {
  const isMaxPlan = demo?.plan === 'Max' || !demo?.plan;

  // Sidebar State (Flipkart/Meesho slide-in style)
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeSidebarCategory, setActiveSidebarCategory] = useState<string>('Shop All');

  // Navigation & Filtering
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [activeSkinType, setActiveSkinType] = useState<string>('All');
  const [activeBenefit, setActiveBenefit] = useState<string>('All');
  const [sortBy, setSortBy] = useState<'featured' | 'price-low' | 'price-high' | 'rating'>('featured');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [filterDrawerOpen, setFilterDrawerOpen] = useState(false);

  // Modals & Drawers
  const [selectedProduct, setSelectedProduct] = useState<BeautyProduct | null>(null);
  const [activeProductTab, setActiveProductTab] = useState<'overview' | 'clinical' | 'howTo' | 'reviews'>('overview');
  const [activeGalleryImgIndex, setActiveGalleryImgIndex] = useState(0);
  const [selectedShade, setSelectedShade] = useState<string | null>(null);
  
  const [cartOpen, setCartOpen] = useState(false);
  const [wishlistOpen, setWishlistOpen] = useState(false);
  const [checkoutModalOpen, setCheckoutModalOpen] = useState(false);
  const [accountModalOpen, setAccountModalOpen] = useState(false);
  const [trackingModalOpen, setTrackingModalOpen] = useState(false);
  const [blogModal, setBlogModal] = useState<BlogPost | null>(null);
  const [couponScratchSuccess, setCouponScratchSuccess] = useState(false);

  // State Management
  const [wishlist, setWishlist] = useState<string[]>(['skin-1', 'skin-4']);
  const [cart, setCart] = useState<CartItem[]>([
    {
      product: BEAUTY_PRODUCTS[0],
      quantity: 1,
      selectedVolume: '30 ml / 1.0 fl oz'
    },
    {
      product: BEAUTY_PRODUCTS[1],
      quantity: 1,
      selectedVolume: '50 ml / 1.7 oz'
    }
  ]);
  const [appliedCoupon, setAppliedCoupon] = useState<string>('GLOW20');
  const [couponInput, setCouponInput] = useState<string>('');
  const [includeGiftBox, setIncludeGiftBox] = useState(false);
  const [selectedSamples, setSelectedSamples] = useState<string[]>(['Rose Hydrosol Sachet', 'Bakuchiol Serum Drop']);
  
  // Checkout flow state
  const [checkoutStep, setCheckoutStep] = useState<1 | 2 | 3 | 4>(1);
  const [orderTrackingId, setOrderTrackingId] = useState<string>('AURA-89421');
  const [searchTrackingId, setSearchTrackingId] = useState<string>('AURA-89421');
  const [paymentMethod, setPaymentMethod] = useState<'upi' | 'card' | 'cod'>('upi');

  // Flash Countdown Timer
  const [timeLeft, setTimeLeft] = useState({ hours: 5, minutes: 24, seconds: 18 });
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) return { ...prev, seconds: prev.seconds - 1 };
        if (prev.minutes > 0) return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        if (prev.hours > 0) return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        return prev;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // Hero carousel slide & timer management
  const [heroSlide, setHeroSlide] = useState(0);
  const heroSlides = [
    {
      badge: 'LUXURY FRAGRANCE',
      title: 'Fleur Royale Eau De Parfum',
      subtitle: 'Hand-harvested Grasse Jasmine blended with green pear and warm cashmere amber.',
      image: 'https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?auto=format&fit=crop&w=800&q=75',
      cta: 'Shop Fragrances',
      category: 'Fragrance'
    },
    {
      badge: 'SKINCARE ESSENTIALS',
      title: 'Radiance Starts With Your Skin',
      subtitle: 'Cold-formulated botanical actives and 24K gold serum for luminous, restored skin.',
      image: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=800&q=75',
      cta: 'Explore Skincare',
      category: 'Skincare'
    },
    {
      badge: 'HAIR CARE',
      title: 'Stronger Hair, Naturally',
      subtitle: 'Cold-pressed rosemary, biotin, and peptide complex to fortify follicles and restore silkiness.',
      image: 'https://images.unsplash.com/photo-1608248597359-299f187a550c?auto=format&fit=crop&w=800&q=75',
      cta: 'Shop Hair Care',
      category: 'Haircare'
    },
    {
      badge: 'MAKEUP COLLECTION',
      title: 'Beauty, Your Way',
      subtitle: 'Ultra-weightless silk serum foundation and velvet lip couture with pure botanical pigments.',
      image: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=800&q=75',
      cta: 'Explore Makeup',
      category: 'Makeup'
    },
    {
      badge: 'BODY CARE',
      title: 'Pure Care From Head To Toe',
      subtitle: 'Whipped murumuru butter, Himalayan pink salt scrubs, and restorative nourishing creams.',
      image: 'https://images.unsplash.com/photo-1601049541289-9b1b7bbbfe19?auto=format&fit=crop&w=800&q=75',
      cta: 'Shop Body Care',
      category: 'Body Care'
    },
    {
      badge: 'WELLNESS',
      title: 'Everyday Wellness, Elevated',
      subtitle: 'Holistic self-care rituals, soothing herbal bath teas, and sculpted rose quartz gua sha.',
      image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=75',
      cta: 'Discover Wellness',
      category: 'All'
    },
    {
      badge: 'EXCLUSIVE COLLECTION',
      title: 'The Aura Botanicals Collection',
      subtitle: 'Handcrafted master formulations blending timeless flora with modern clean clinical science.',
      image: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=800&q=75',
      cta: 'View Collection',
      category: 'All'
    }
  ];

  const handleNextSlide = () => {
    setHeroSlide((prev) => (prev + 1) % heroSlides.length);
  };

  const handlePrevSlide = () => {
    setHeroSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  };

  const handleSelectSlide = (idx: number) => {
    setHeroSlide(idx);
  };

  // Auto slide hero every 2.5 seconds (resets timer when heroSlide changes from manual click or auto)
  useEffect(() => {
    const interval = setInterval(() => {
      setHeroSlide((prev) => (prev + 1) % heroSlides.length);
    }, 2500);
    return () => clearInterval(interval);
  }, [heroSlide, heroSlides.length]);

  // Wishlist toggle
  const toggleWishlist = (productId: string) => {
    setWishlist((prev) =>
      prev.includes(productId) ? prev.filter((id) => id !== productId) : [...prev, productId]
    );
  };

  // Single Source of Truth for Wishlist items
  const wishlistedProducts = useMemo(() => {
    return wishlist
      .map((id) => BEAUTY_PRODUCTS.find((p) => p.id === id))
      .filter((p): p is BeautyProduct => Boolean(p));
  }, [wishlist]);

  // Filtered & Sorted Products
  const filteredProducts = useMemo(() => {
    let list = BEAUTY_PRODUCTS.filter((prod) => {
      const matchCat = activeCategory === 'All' || prod.category === activeCategory;
      const matchSkin = activeSkinType === 'All' || prod.skinType === activeSkinType;
      const matchBenefit = activeBenefit === 'All' || prod.benefit === activeBenefit;
      const matchSearch =
        searchQuery.trim() === '' ||
        prod.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        prod.subtitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
        prod.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
        prod.ingredients.some((i) => i.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchCat && matchSkin && matchBenefit && matchSearch;
    });

    if (sortBy === 'price-low') list = [...list].sort((a, b) => a.price - b.price);
    if (sortBy === 'price-high') list = [...list].sort((a, b) => b.price - a.price);
    if (sortBy === 'rating') list = [...list].sort((a, b) => b.rating - a.rating);

    return list;
  }, [activeCategory, activeSkinType, activeBenefit, sortBy, searchQuery]);

  // Get products for sidebar category grids
  const getCategoryProducts = (categoryName: string) => {
    switch (categoryName) {
      case 'Skincare':
        return BEAUTY_PRODUCTS.filter((p) => p.category === 'Skincare').slice(0, 6);
      case 'Hair Care':
      case 'Haircare':
        return BEAUTY_PRODUCTS.filter((p) => p.category === 'Haircare').slice(0, 6);
      case 'Makeup':
        return BEAUTY_PRODUCTS.filter((p) => p.category === 'Makeup').slice(0, 6);
      case 'Body Care':
        return BEAUTY_PRODUCTS.filter((p) => p.category === 'Body Care').slice(0, 6);
      case 'Fragrance':
        return BEAUTY_PRODUCTS.filter((p) => p.category === 'Fragrance').slice(0, 6);
      case 'Accessories':
        return BEAUTY_PRODUCTS.filter((p) => p.category === 'Accessories').slice(0, 6);
      case 'Best Sellers':
        return BEAUTY_PRODUCTS.filter((p) => p.isBestSeller || p.badge === 'Best Seller' || p.rating >= 4.9).slice(0, 6);
      case 'Korean Skincare':
        return BEAUTY_PRODUCTS.filter((p) => p.category === 'Skincare' && (p.benefit === 'Brightening' || p.benefit === 'Deep Hydration' || p.benefit === 'Barrier Repair')).slice(0, 6);
      case 'Shop All':
      default:
        return BEAUTY_PRODUCTS.slice(0, 6);
    }
  };

  // Handle category navigation from slide-in sidebar
  const handleSidebarCategorySelect = (categoryName: string) => {
    setActiveSidebarCategory(categoryName);
    setSidebarOpen(false);

    if (categoryName === 'Shop All') {
      setActiveCategory('All');
      setActiveSkinType('All');
      setActiveBenefit('All');
      setSearchQuery('');
    } else if (categoryName === 'Best Sellers') {
      setActiveCategory('All');
      setSortBy('rating');
      setActiveSkinType('All');
      setActiveBenefit('All');
      setSearchQuery('');
    } else if (categoryName === 'Skincare') {
      setActiveCategory('Skincare');
      setActiveSkinType('All');
      setActiveBenefit('All');
      setSearchQuery('');
    } else if (categoryName === 'Hair Care' || categoryName === 'Haircare') {
      setActiveCategory('Haircare');
      setActiveSkinType('All');
      setActiveBenefit('All');
      setSearchQuery('');
    } else if (categoryName === 'Makeup') {
      setActiveCategory('Makeup');
      setActiveSkinType('All');
      setActiveBenefit('All');
      setSearchQuery('');
    } else if (categoryName === 'Body Care') {
      setActiveCategory('Body Care');
      setActiveSkinType('All');
      setActiveBenefit('All');
      setSearchQuery('');
    } else if (categoryName === 'Fragrance') {
      setActiveCategory('Fragrance');
      setActiveSkinType('All');
      setActiveBenefit('All');
      setSearchQuery('');
    } else if (categoryName === 'Accessories') {
      setActiveCategory('Accessories');
      setActiveSkinType('All');
      setActiveBenefit('All');
      setSearchQuery('');
    } else if (categoryName === 'Korean Skincare') {
      setActiveCategory('Skincare');
      setActiveSkinType('All');
      setActiveBenefit('Brightening');
      setSearchQuery('');
    }

    setTimeout(() => {
      const catalogElem = document.getElementById('catalog-section');
      if (catalogElem) {
        catalogElem.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 120);
  };

  // Cart operations
  const cartItemCount = cart.reduce((total, item) => total + item.quantity, 0);
  const rawSubtotal = cart.reduce((total, item) => total + item.product.price * item.quantity, 0);
  
  const discountAmount = appliedCoupon === 'GLOW20' ? Math.round(rawSubtotal * 0.2) : 0;
  const giftBoxFee = includeGiftBox ? 99 : 0;
  const cartSubtotal = rawSubtotal - discountAmount + giftBoxFee;
  const freeShippingThreshold = 1499;
  const freeShippingMet = rawSubtotal >= freeShippingThreshold;

  const addToCart = (product: BeautyProduct, volume?: string, shade?: string) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.product.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.product.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [
        ...prev,
        {
          product,
          quantity: 1,
          selectedVolume: volume || product.volume,
          selectedShade: shade || (product.shades ? product.shades[0].name : undefined)
        }
      ];
    });
  };

  const updateQuantity = (productId: string, delta: number) => {
    setCart((prev) =>
      prev
        .map((item) => {
          if (item.product.id === productId) {
            const newQty = item.quantity + delta;
            return newQty > 0 ? { ...item, quantity: newQty } : null;
          }
          return item;
        })
        .filter(Boolean) as CartItem[]
    );
  };

  const removeFromCart = (productId: string) => {
    setCart((prev) => prev.filter((item) => item.product.id !== productId));
  };

  const renderProductCard = (prod: BeautyProduct) => {
    const isWishlisted = wishlist.includes(prod.id);

    return (
      <div
        key={prod.id}
        className="group bg-white rounded-3xl border border-rose-100 overflow-hidden shadow-xs hover:shadow-xl hover:border-rose-300 transition-all duration-300 flex flex-col justify-between"
      >
        {/* Thumbnail */}
        <div className="aspect-square bg-rose-50/40 relative overflow-hidden">
          <img loading="lazy"
            src={prod.image}
            alt={prod.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
          
          {/* Badges */}
          <div className="absolute top-3 left-3 flex flex-col gap-1">
            {prod.badge && (
              <span className="bg-rose-600 text-white text-[10px] font-black uppercase tracking-wider px-2.5 py-1 rounded-md shadow-xs">
                {prod.badge}
              </span>
            )}
            <span className="bg-stone-900/80 backdrop-blur-xs text-white text-[9px] font-bold px-2 py-0.5 rounded">
              {prod.skinType}
            </span>
          </div>

          {/* Wishlist Heart Button */}
          <button
            onClick={() => toggleWishlist(prod.id)}
            className={`absolute top-3 right-3 p-2 rounded-full backdrop-blur-md transition-all ${
              isWishlisted
                ? 'bg-rose-600 text-white shadow-md'
                : 'bg-white/90 text-stone-600 hover:text-rose-600 shadow-xs'
            }`}
            title={isWishlisted ? 'Remove from Wishlist' : 'Add to Wishlist'}
          >
            <Heart className={`w-4 h-4 ${isWishlisted ? 'fill-current' : ''}`} />
          </button>

          {/* Quick View Button on Hover */}
          <div className="absolute inset-0 bg-stone-950/25 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center p-4">
            <button
              onClick={() => {
                setSelectedProduct(prod);
                setActiveGalleryImgIndex(0);
                setActiveProductTab('overview');
              }}
              className="px-4 py-2 rounded-full bg-white text-stone-900 text-xs font-bold shadow-lg hover:bg-rose-600 hover:text-white transition-colors flex items-center gap-1.5"
            >
              <Eye className="w-3.5 h-3.5" />
              <span>Quick View</span>
            </button>
          </div>
        </div>

        {/* Card Content */}
        <div className="p-5 space-y-3 flex flex-col justify-between flex-grow">
          <div>
            {/* Rating & Benefit */}
            <div className="flex items-center justify-between text-xs mb-1">
              <span className="text-[10px] font-bold uppercase tracking-wider text-rose-600">
                {prod.benefit}
              </span>
              <div className="flex items-center gap-1 text-amber-500 font-bold text-xs">
                <Star className="w-3.5 h-3.5 fill-amber-400" />
                <span>{prod.rating}</span>
                <span className="text-[10px] text-stone-400 font-normal">({prod.reviewsCount})</span>
              </div>
            </div>

            <h3
              onClick={() => {
                setSelectedProduct(prod);
                setActiveGalleryImgIndex(0);
                setActiveProductTab('overview');
              }}
              className="font-serif text-base font-bold text-stone-900 group-hover:text-rose-600 transition-colors line-clamp-1 cursor-pointer"
            >
              {prod.name}
            </h3>
            <p className="text-xs text-stone-500 line-clamp-2 mt-1">
              {prod.subtitle}
            </p>
          </div>

          {/* Shades Palette if available */}
          {prod.shades && (
            <div className="flex items-center gap-1.5 pt-1">
              <span className="text-[10px] text-stone-400 font-medium">Shades:</span>
              {prod.shades.map((s, i) => (
                <div
                  key={i}
                  className="w-3.5 h-3.5 rounded-full border border-stone-300 shadow-2xs"
                  style={{ backgroundColor: s.hex }}
                  title={s.name}
                />
              ))}
            </div>
          )}

          {/* Price & Action */}
          <div className="pt-3 border-t border-rose-100 flex items-center justify-between gap-2">
            <div>
              <span className="text-[11px] text-stone-400 line-through block leading-none">
                ₹{prod.originalPrice.toLocaleString()}
              </span>
              <span className="text-base font-bold text-rose-700">
                ₹{prod.price.toLocaleString()}
              </span>
            </div>

            <button
              onClick={() => addToCart(prod)}
              className="px-3.5 py-2 rounded-xl bg-stone-900 hover:bg-rose-600 text-white text-xs font-bold transition-all flex items-center gap-1.5 active:scale-95 shadow-xs cursor-pointer"
            >
              <ShoppingBag className="w-3.5 h-3.5" />
              <span>Add</span>
            </button>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-[#FCF9F7] text-stone-800 font-sans selection:bg-rose-200 selection:text-rose-900">
      
      {/* Top Luxury Dynamic Notification Bar */}
      <div className="bg-gradient-to-r from-stone-900 via-rose-950 to-stone-900 text-white text-[11px] sm:text-xs py-2 px-4 flex flex-wrap items-center justify-between gap-2 border-b border-rose-900/40">
        <div className="flex items-center gap-2 mx-auto sm:mx-0">
          <Sparkles className="w-3.5 h-3.5 text-rose-300 animate-pulse" />
          <span>
            <strong>VIP GLOW FESTIVAL:</strong> 20% OFF with code <span className="bg-rose-800/80 px-1.5 py-0.5 rounded font-mono text-rose-200">GLOW20</span> + 2 Deluxe Samples
          </span>
        </div>
        <div className="hidden sm:flex items-center gap-4 text-rose-200/80 text-[11px]">
          <button onClick={() => setTrackingModalOpen(true)} className="hover:text-white flex items-center gap-1">
            <Truck className="w-3.5 h-3.5" /> Track Order
          </button>
          <span>•</span>
          <button onClick={() => setAccountModalOpen(true)} className="hover:text-white flex items-center gap-1">
            <User className="w-3.5 h-3.5" /> VIP Rewards (1,420 Pts)
          </button>
        </div>
      </div>

      {/* Main Luxury Header */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-rose-100 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-4">
          
          {/* Top-Left: Hamburger Menu Icon + Brand Logo (Exclusive to MAX Plan) */}
          <div className="flex items-center gap-3 shrink-0">
            {isMaxPlan && (
              <button
                onClick={() => setSidebarOpen(!sidebarOpen)}
                className="p-2 sm:p-2.5 rounded-xl text-stone-800 hover:text-rose-600 hover:bg-rose-50 border border-stone-200/80 hover:border-rose-300 transition-all shadow-2xs active:scale-95 flex items-center justify-center cursor-pointer"
                aria-label="Open category navigation menu"
                title="Browse Categories"
              >
                <Menu className="w-5 h-5 sm:w-6 sm:h-6" />
              </button>
            )}

            {/* Brand Logo */}
            <div 
              onClick={() => {
                setActiveCategory('All');
                setActiveSidebarCategory('Shop All');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="flex items-center gap-2.5 sm:gap-3 cursor-pointer group"
            >
              <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-gradient-to-tr from-rose-100 via-rose-50 to-amber-50 border border-rose-200 flex items-center justify-center text-rose-700 shadow-xs group-hover:scale-105 transition-transform">
                <Sparkles className="w-5 h-5" />
              </div>
              <div>
                <span className="font-serif text-xl sm:text-2xl font-bold tracking-widest text-stone-900 block leading-tight group-hover:text-rose-700 transition-colors">
                  AURA BOTANICALS
                </span>
                <span className="text-[10px] uppercase tracking-widest text-rose-600 font-bold block">
                  Haute Clean Cosmetics & E-Commerce
                </span>
              </div>
            </div>
          </div>

          {/* Center Search Bar with Suggestions */}
          <div className="hidden lg:flex flex-1 max-w-lg mx-6 relative">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by botanical serum, retinol alternative, floral EDP..."
              className="w-full pl-11 pr-4 py-2.5 rounded-full bg-[#FAF7F5] border border-rose-200 text-xs text-stone-800 placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-rose-500 focus:bg-white shadow-2xs transition-all"
            />
            <Search className="w-4 h-4 text-stone-400 absolute left-4 top-1/2 -translate-y-1/2" />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3.5 top-1/2 -translate-y-1/2 text-stone-400 hover:text-stone-700"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          {/* Right Header Navigation Icons */}
          <div className="flex items-center gap-2 sm:gap-4 shrink-0">
            
            {/* Account Trigger */}
            <button
              onClick={() => setAccountModalOpen(true)}
              className="p-2.5 rounded-full hover:bg-rose-50 text-stone-700 hover:text-rose-700 transition-colors hidden sm:flex items-center gap-1.5"
              title="Customer Account"
            >
              <User className="w-5 h-5" />
              <span className="text-xs font-bold hidden xl:inline">VIP Club</span>
            </button>

            {/* Wishlist Trigger */}
            <button
              onClick={() => setWishlistOpen(true)}
              className="relative p-2.5 rounded-full hover:bg-rose-50 text-stone-700 hover:text-rose-700 transition-colors"
              title="Wishlist"
            >
              <Heart className="w-5 h-5" />
              {wishlistedProducts.length > 0 && (
                <span className="absolute top-1 right-1 w-4 h-4 rounded-full bg-rose-600 text-white text-[9px] font-black flex items-center justify-center shadow-xs">
                  {wishlistedProducts.length}
                </span>
              )}
            </button>

            {/* Shopping Bag Trigger */}
            <button
              onClick={() => setCartOpen(true)}
              className="p-2.5 px-3.5 rounded-full bg-rose-600 hover:bg-rose-700 text-white transition-all flex items-center gap-2.5 shadow-md active:scale-95 cursor-pointer"
            >
              <ShoppingBag className="w-4 h-4" />
              <span className="text-xs font-bold">
                Bag ({cartItemCount})
              </span>
              <span className="hidden sm:inline text-xs font-black text-rose-200 border-l border-rose-500 pl-2">
                ₹{cartSubtotal.toLocaleString()}
              </span>
            </button>
          </div>
        </div>

        {/* Mobile Search Bar */}
        <div className="lg:hidden px-4 pb-3">
          <div className="relative">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search botanical serums, lip oils..."
              className="w-full pl-9 pr-3 py-2 rounded-xl bg-stone-50 border border-rose-200 text-xs text-stone-800 focus:outline-none focus:ring-2 focus:ring-rose-500"
            />
            <Search className="w-4 h-4 text-stone-400 absolute left-3 top-1/2 -translate-y-1/2" />
          </div>
        </div>
      </header>

      {/* Slide-in Left Sidebar Menu (Flipkart / Meesho / Shopee style - Max Plan Exclusive) */}
      {isMaxPlan && sidebarOpen && (
        <div
          onClick={() => setSidebarOpen(false)}
          className="fixed inset-0 z-50 bg-stone-950/60 backdrop-blur-xs transition-opacity duration-300 animate-in fade-in"
          aria-hidden="true"
        />
      )}

      {isMaxPlan && (
        <aside
          className={`fixed inset-y-0 left-0 z-50 w-[92vw] sm:w-[440px] md:w-[460px] max-w-[480px] bg-white shadow-2xl border-r border-rose-100 flex flex-col justify-between transform transition-transform duration-300 ease-in-out ${
            sidebarOpen ? 'translate-x-0' : '-translate-x-full'
          }`}
          aria-label="Category Sidebar Navigation"
        >
        {/* Sidebar Header */}
        <div className="p-4 sm:p-5 border-b border-rose-100 bg-gradient-to-r from-rose-50/90 via-white to-rose-50/40 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-full bg-rose-600 text-white flex items-center justify-center shadow-xs">
              <Sparkles className="w-4 h-4" />
            </div>
            <div>
              <h3 className="font-serif text-base font-bold tracking-wider text-stone-900 leading-tight">
                AURA BOTANICALS
              </h3>
              <p className="text-[10px] uppercase tracking-widest text-rose-600 font-bold">
                Shop by Category
              </p>
            </div>
          </div>
          <button
            onClick={() => setSidebarOpen(false)}
            className="p-1.5 rounded-lg text-stone-400 hover:text-stone-700 hover:bg-rose-100/60 transition-colors cursor-pointer"
            aria-label="Close menu"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Categories & Product Thumbnails Mega-Menu */}
        <div className="flex-1 overflow-y-auto divide-y divide-rose-100/70 py-2">
          
          {/* Quick Action: Shop All Full Catalog */}
          <div className="px-3.5 pt-1.5 pb-2.5">
            <button
              onClick={() => handleSidebarCategorySelect('Shop All')}
              className="w-full p-3 rounded-2xl bg-stone-900 hover:bg-stone-800 text-white flex items-center justify-between shadow-xs transition-all group cursor-pointer"
            >
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-xl bg-white/10 flex items-center justify-center text-rose-300">
                  <LayoutGrid className="w-4 h-4" />
                </div>
                <div className="text-left">
                  <div className="text-xs font-bold font-serif flex items-center gap-1.5">
                    <span>Shop Full Catalog</span>
                    <span className="text-[9px] px-1.5 py-0.5 rounded-full bg-rose-500/30 text-rose-300 font-sans font-bold">
                      {BEAUTY_PRODUCTS.length}+ Items
                    </span>
                  </div>
                  <div className="text-[10px] text-stone-300">Explore all clean beauty botanicals</div>
                </div>
              </div>
              <ArrowRight className="w-4 h-4 text-rose-300 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Category Sections with 3-Column Product Grid */}
          <div className="divide-y divide-rose-100/60">
            {SIDEBAR_CATEGORIES.map((cat) => {
              const Icon = cat.icon;
              const products = getCategoryProducts(cat.name);
              const isActive = activeSidebarCategory === cat.name;

              return (
                <div key={cat.name} className="p-3.5 sm:p-4 space-y-2.5">
                  {/* Category Header Row with View All */}
                  <div className="flex items-center justify-between gap-2">
                    <button
                      onClick={() => handleSidebarCategorySelect(cat.name)}
                      className="flex items-center gap-2.5 text-left group cursor-pointer flex-1 min-w-0"
                    >
                      <div className={`w-8 h-8 rounded-xl flex items-center justify-center shrink-0 transition-all shadow-2xs ${
                        isActive
                          ? 'bg-rose-600 text-white'
                          : 'bg-rose-50 border border-rose-100 text-rose-600 group-hover:bg-rose-600 group-hover:text-white'
                      }`}>
                        <Icon className="w-4 h-4" />
                      </div>
                      <div className="min-w-0">
                        <div className="flex items-center gap-1.5">
                          <h4 className="font-serif text-sm font-bold text-stone-900 group-hover:text-rose-600 transition-colors truncate">
                            {cat.name}
                          </h4>
                          <span className="text-[10px] text-rose-600 font-bold px-1.5 py-0.5 rounded-md bg-rose-50 border border-rose-100/60 shrink-0">
                            {cat.count}
                          </span>
                        </div>
                        <p className="text-[10px] text-stone-400 truncate">
                          {cat.subtext}
                        </p>
                      </div>
                    </button>

                    {/* View All Link */}
                    <button
                      onClick={() => handleSidebarCategorySelect(cat.name)}
                      className="text-[11px] font-bold text-rose-700 hover:text-rose-900 flex items-center gap-0.5 hover:underline shrink-0 px-2 py-1 rounded-lg hover:bg-rose-50 transition-colors cursor-pointer"
                    >
                      <span>View All</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </button>
                  </div>

                  {/* 3-Column Product Thumbnails Grid */}
                  <div className="grid grid-cols-3 gap-2">
                    {products.map((prod) => (
                      <div
                        key={prod.id}
                        onClick={() => {
                          setSelectedProduct(prod);
                          setActiveGalleryImgIndex(0);
                          setActiveProductTab('overview');
                          setSidebarOpen(false);
                        }}
                        className="group cursor-pointer rounded-xl bg-[#FCFAF8] hover:bg-white border border-rose-100/80 hover:border-rose-300 hover:shadow-xs p-1.5 transition-all flex flex-col items-center text-center"
                      >
                        {/* Thumbnail Image */}
                        <div className="aspect-square w-full rounded-lg overflow-hidden bg-white relative border border-rose-100/50">
                          <img
                            loading="lazy"
                            src={prod.image}
                            alt={prod.name}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                          {prod.badge && (
                            <span className="absolute top-1 left-1 px-1 py-0.5 text-[8px] font-bold rounded bg-stone-900/80 text-white backdrop-blur-xs leading-none">
                              {prod.badge}
                            </span>
                          )}
                        </div>

                        {/* Product Name */}
                        <p className="text-[10px] sm:text-[11px] font-medium text-stone-800 line-clamp-2 leading-tight mt-1.5 group-hover:text-rose-600 transition-colors w-full">
                          {prod.name}
                        </p>

                        {/* Price */}
                        <span className="text-[10px] font-bold text-stone-900 mt-1">
                          ₹{prod.price.toLocaleString()}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

          {/* ACCOUNT Section Header */}
          <div className="pt-3 pb-2">
            <div className="px-4 pb-2">
              <span className="text-[11px] font-extrabold uppercase tracking-widest text-stone-400">
                ACCOUNT
              </span>
            </div>

            <div className="space-y-1 px-2">
              <button
                onClick={() => {
                  setSidebarOpen(false);
                  setAccountModalOpen(true);
                }}
                className="w-full px-3 py-2 rounded-xl flex items-center gap-3 text-stone-700 hover:bg-rose-50 hover:text-rose-800 transition-colors text-xs font-semibold cursor-pointer"
              >
                <div className="w-7 h-7 rounded-lg bg-stone-100 text-stone-600 flex items-center justify-center">
                  <User className="w-3.5 h-3.5" />
                </div>
                <div className="flex-1 text-left">
                  <div>My Profile & VIP Rewards</div>
                  <div className="text-[10px] text-stone-400 font-normal">1,420 Points Available</div>
                </div>
                <ChevronRight className="w-3.5 h-3.5 text-stone-400" />
              </button>

              <button
                onClick={() => {
                  setSidebarOpen(false);
                  setTrackingModalOpen(true);
                }}
                className="w-full px-3 py-2 rounded-xl flex items-center gap-3 text-stone-700 hover:bg-rose-50 hover:text-rose-800 transition-colors text-xs font-semibold cursor-pointer"
              >
                <div className="w-7 h-7 rounded-lg bg-stone-100 text-stone-600 flex items-center justify-center">
                  <Truck className="w-3.5 h-3.5" />
                </div>
                <div className="flex-1 text-left">
                  <div>Track Orders</div>
                  <div className="text-[10px] text-stone-400 font-normal">Live Delivery Status</div>
                </div>
                <ChevronRight className="w-3.5 h-3.5 text-stone-400" />
              </button>

              <button
                onClick={() => {
                  setSidebarOpen(false);
                  setWishlistOpen(true);
                }}
                className="w-full px-3 py-2 rounded-xl flex items-center gap-3 text-stone-700 hover:bg-rose-50 hover:text-rose-800 transition-colors text-xs font-semibold cursor-pointer"
              >
                <div className="w-7 h-7 rounded-lg bg-stone-100 text-stone-600 flex items-center justify-center">
                  <Heart className="w-3.5 h-3.5" />
                </div>
                <div className="flex-1 text-left">
                  <div>My Wishlist</div>
                  <div className="text-[10px] text-stone-400 font-normal">{wishlistedProducts.length} Saved Items</div>
                </div>
                <ChevronRight className="w-3.5 h-3.5 text-stone-400" />
              </button>
            </div>
          </div>
        </div>

        {/* Sidebar Footer */}
        <div className="p-3.5 border-t border-rose-100 bg-rose-50/40 text-xs text-stone-600 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Shield className="w-4 h-4 text-rose-600" />
            <span className="font-semibold text-[11px]">100% Certified Clean Beauty</span>
          </div>
          <span className="text-[10px] text-stone-400">v2.4</span>
        </div>
      </aside>
      )}

      {/* Dynamic Multi-Slide Hero Carousel */}
      <section className="relative bg-stone-950 text-white overflow-hidden select-none">
        <div className="relative aspect-[21/9] min-h-[380px] sm:min-h-[460px] flex items-center">
          
          {/* All 7 Slides with smooth fade + horizontal slide transition (600ms) */}
          {heroSlides.map((slide, index) => {
            const isActive = heroSlide === index;
            return (
              <div
                key={index}
                className={`absolute inset-0 w-full h-full flex items-center transition-all duration-600 ease-out ${
                  isActive
                    ? 'opacity-100 translate-x-0 pointer-events-auto z-10'
                    : 'opacity-0 translate-x-8 pointer-events-none z-0'
                }`}
              >
                {/* Background Image with subtle scale */}
                <img loading="lazy"
                  src={slide.image}
                  alt={slide.title}
                  className={`absolute inset-0 w-full h-full object-cover opacity-60 transition-transform duration-1000 ease-out ${
                    isActive ? 'scale-105' : 'scale-100'
                  }`}
                />
                <div className="absolute inset-0 bg-gradient-to-r from-stone-950/95 via-stone-950/70 to-transparent"></div>

                {/* Hero Slide Content */}
                <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-12 lg:px-16 py-10 space-y-4 max-w-2xl">
                  <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-rose-500/30 border border-rose-400/40 text-rose-300 text-xs font-bold backdrop-blur-md">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>{slide.badge}</span>
                  </div>

                  <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight tracking-tight text-white">
                    {slide.title}
                  </h1>

                  <p className="text-stone-300 text-xs sm:text-sm leading-relaxed max-w-lg">
                    {slide.subtitle}
                  </p>

                  <div className="flex items-center gap-3 pt-2">
                    <button
                      onClick={() => {
                        if (slide.category) {
                          setActiveCategory(slide.category);
                        }
                        const el = document.getElementById('catalog-section');
                        if (el) el.scrollIntoView({ behavior: 'smooth' });
                      }}
                      className="px-6 py-3 rounded-full bg-rose-500 hover:bg-rose-400 text-white text-xs font-bold tracking-wider transition-all shadow-lg active:scale-95 flex items-center gap-2 cursor-pointer"
                    >
                      <span>{slide.cta}</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>

                    <button
                      onClick={() => setSelectedProduct(BEAUTY_PRODUCTS[0])}
                      className="px-5 py-3 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-md border border-white/30 text-white text-xs font-bold transition-all cursor-pointer"
                    >
                      View Clinical Study
                    </button>
                  </div>
                </div>
              </div>
            );
          })}

          {/* Previous Slide Button */}
          <button
            onClick={handlePrevSlide}
            className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 z-20 p-2 sm:p-3 rounded-full bg-stone-900/70 hover:bg-rose-600 text-white backdrop-blur-md border border-white/10 transition-all active:scale-90 shadow-lg cursor-pointer"
            aria-label="Previous slide"
            title="Previous Slide"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          {/* Next Slide Button */}
          <button
            onClick={handleNextSlide}
            className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 z-20 p-2 sm:p-3 rounded-full bg-stone-900/70 hover:bg-rose-600 text-white backdrop-blur-md border border-white/10 transition-all active:scale-90 shadow-lg cursor-pointer"
            aria-label="Next slide"
            title="Next Slide"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          {/* Slide Indicator Dots (7 Dots) */}
          <div className="absolute bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 z-20 flex items-center gap-1.5 sm:gap-2 bg-stone-900/75 backdrop-blur-md py-1.5 px-3 rounded-full border border-white/10">
            {heroSlides.map((_, idx) => (
              <button
                key={idx}
                onClick={() => handleSelectSlide(idx)}
                className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                  heroSlide === idx ? 'w-6 sm:w-7 bg-rose-400' : 'w-2 bg-white/40 hover:bg-white/70'
                }`}
                title={`Slide ${idx + 1}`}
                aria-label={`Slide ${idx + 1}`}
              />
            ))}
          </div>

        </div>
      </section>

      {/* Flash Deal of the Day with Live Countdown Timer */}
      <section className="bg-gradient-to-r from-rose-900 via-rose-950 to-stone-900 text-white py-4 px-4 border-b border-rose-800">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-3 text-center md:text-left">
          
          <div className="flex items-center gap-3">
            <span className="bg-amber-400 text-stone-950 text-[10px] font-black uppercase tracking-wider px-2.5 py-1 rounded-full">
              ⚡ Flash Deal
            </span>
            <div>
              <span className="text-xs sm:text-sm font-bold block">
                Clarifying Matcha Clay Mask + Rose Gold Elixir Duo: Flat 25% OFF
              </span>
              <span className="text-[11px] text-rose-200">
                Claim before stock runs out in current cold-formulation batch.
              </span>
            </div>
          </div>

          {/* Countdown Clock Box */}
          <div className="flex items-center gap-2">
            <span className="text-[11px] text-stone-300 font-medium">Ends in:</span>
            <div className="flex items-center gap-1 font-mono text-xs font-bold">
              <span className="bg-stone-900/90 px-2 py-1 rounded border border-rose-800 text-amber-300">
                {String(timeLeft.hours).padStart(2, '0')}h
              </span>
              <span>:</span>
              <span className="bg-stone-900/90 px-2 py-1 rounded border border-rose-800 text-amber-300">
                {String(timeLeft.minutes).padStart(2, '0')}m
              </span>
              <span>:</span>
              <span className="bg-stone-900/90 px-2 py-1 rounded border border-rose-800 text-amber-300">
                {String(timeLeft.seconds).padStart(2, '0')}s
              </span>
            </div>
            <button
              onClick={() => {
                const prod = BEAUTY_PRODUCTS.find((p) => p.id === 'skin-14') || BEAUTY_PRODUCTS[0];
                if (prod) addToCart(prod);
                setCartOpen(true);
              }}
              className="ml-2 px-3 py-1.5 rounded-full bg-amber-400 hover:bg-amber-300 text-stone-950 text-xs font-black transition-all"
            >
              Claim Deal
            </button>
          </div>

        </div>
      </section>

      {/* Main E-Commerce Product Experience with Filters */}
      <section id="catalog-section" className="py-12 sm:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Category Icons Row */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
          {BEAUTY_CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id === activeCategory ? 'All' : cat.id)}
              className={`p-3.5 rounded-2xl border transition-all text-left flex items-center gap-3 ${
                activeCategory === cat.id
                  ? 'bg-rose-50 border-rose-300 ring-2 ring-rose-500/20 shadow-xs'
                  : 'bg-white border-stone-200 hover:border-rose-200 hover:bg-[#FAF7F5]'
              }`}
            >
              <div className="w-10 h-10 rounded-xl overflow-hidden shrink-0 border border-rose-100">
                <img loading="lazy" src={cat.image} alt={cat.name} className="w-full h-full object-cover" />
              </div>
              <div className="min-w-0">
                <span className="font-serif text-xs font-bold text-stone-900 block truncate">
                  {cat.name}
                </span>
                <span className="text-[10px] text-stone-400 block">{cat.itemCount}</span>
              </div>
            </button>
          ))}
        </div>

        {/* Filter Control Bar */}
        <div className="p-4 bg-white rounded-2xl border border-rose-100 shadow-xs flex flex-wrap items-center justify-between gap-4">
          
          {/* Skin Type & Benefit Filter Dropdowns */}
          <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-xs">
            <span className="font-bold text-stone-900 flex items-center gap-1.5">
              <Filter className="w-3.5 h-3.5 text-rose-600" /> Filter:
            </span>

            {/* Category Dropdown */}
            <select
              value={activeCategory}
              onChange={(e) => setActiveCategory(e.target.value)}
              className="px-3 py-1.5 rounded-xl bg-stone-50 border border-stone-200 text-xs font-bold text-rose-700 focus:outline-none focus:ring-2 focus:ring-rose-500"
            >
              <option value="All">All Categories (52 Products)</option>
              <option value="Skincare">Skincare Essentials (15)</option>
              <option value="Makeup">Makeup Collection (15)</option>
              <option value="Haircare">Hair Care Rituals (7)</option>
              <option value="Body Care">Body Care & Bath (6)</option>
              <option value="Fragrance">Artisan Fragrances (4)</option>
              <option value="Accessories">Beauty Accessories (6)</option>
            </select>

            {/* Skin Type */}
            <select
              value={activeSkinType}
              onChange={(e) => setActiveSkinType(e.target.value)}
              className="px-3 py-1.5 rounded-xl bg-stone-50 border border-stone-200 text-xs font-medium text-stone-700 focus:outline-none focus:ring-2 focus:ring-rose-500"
            >
              <option value="All">All Skin Types</option>
              <option value="Sensitive">Sensitive Skin</option>
              <option value="Dry & Dehydrated">Dry & Dehydrated</option>
              <option value="Oily & Acne-Prone">Oily & Acne-Prone</option>
              <option value="Combination">Combination</option>
            </select>

            {/* Benefit */}
            <select
              value={activeBenefit}
              onChange={(e) => setActiveBenefit(e.target.value)}
              className="px-3 py-1.5 rounded-xl bg-stone-50 border border-stone-200 text-xs font-medium text-stone-700 focus:outline-none focus:ring-2 focus:ring-rose-500"
            >
              <option value="All">All Benefits</option>
              <option value="Brightening">Brightening & Radiance</option>
              <option value="Anti-Aging">Anti-Aging & Firming</option>
              <option value="Deep Hydration">Deep Hydration</option>
              <option value="Barrier Repair">Barrier Repair</option>
              <option value="Pore Minimizing">Pore Minimizing</option>
              <option value="Sun Protection">Sun Protection</option>
              <option value="Volumizing">Volumizing</option>
              <option value="Long Lasting">Long Lasting</option>
            </select>

            {(activeCategory !== 'All' || activeSkinType !== 'All' || activeBenefit !== 'All' || searchQuery) && (
              <button
                onClick={() => {
                  setActiveCategory('All');
                  setActiveSkinType('All');
                  setActiveBenefit('All');
                  setSearchQuery('');
                }}
                className="text-xs font-bold text-rose-600 hover:text-rose-800 underline"
              >
                Reset All Filters
              </button>
            )}
          </div>

          {/* Sorting */}
          <div className="flex items-center gap-2 text-xs">
            <span className="text-stone-400 font-medium">Sort by:</span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as any)}
              className="px-3 py-1.5 rounded-xl bg-stone-50 border border-stone-200 text-xs font-bold text-stone-800 focus:outline-none focus:ring-2 focus:ring-rose-500"
            >
              <option value="featured">Featured / Best Sellers</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="rating">Highest Rated (★ 4.9+)</option>
            </select>
          </div>

        </div>

        {/* Dynamic Display: If specific category/search is chosen -> show filtered grid. If All -> show organized multi-sections */}
        {activeCategory !== 'All' || searchQuery.trim() !== '' || activeSkinType !== 'All' || activeBenefit !== 'All' ? (
          <div className="space-y-6">
            <div className="flex items-center justify-between border-b border-rose-100 pb-3">
              <div>
                <h3 className="font-serif text-2xl font-bold text-stone-900">
                  {activeCategory !== 'All' ? `${activeCategory} Collection` : 'Search & Filter Results'}
                </h3>
                <p className="text-xs text-stone-500">
                  Showing {filteredProducts.length} clean beauty products
                </p>
              </div>
              <button
                onClick={() => {
                  setActiveCategory('All');
                  setSearchQuery('');
                  setActiveSkinType('All');
                  setActiveBenefit('All');
                }}
                className="text-xs font-bold text-rose-600 hover:text-rose-800 flex items-center gap-1"
              >
                <span>View Full Catalog</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Product Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {filteredProducts.map((prod) => renderProductCard(prod))}
            </div>
          </div>
        ) : (
          <div className="space-y-16">
            {/* Section 1: Trending Products */}
            <div className="space-y-6">
              <div className="flex items-end justify-between border-b border-rose-100 pb-3">
                <div>
                  <span className="text-[10px] font-black uppercase tracking-widest text-rose-600">Viral on Social</span>
                  <h3 className="font-serif text-2xl font-bold text-stone-900">Trending Products</h3>
                </div>
                <button
                  onClick={() => {
                    const el = document.getElementById('catalog-section');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="text-xs font-bold text-rose-600 hover:text-rose-800 flex items-center gap-1"
                >
                  <span>View All Trending</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {BEAUTY_PRODUCTS.filter((p) => p.isTrending || p.badge === 'Trending').slice(0, 4).map((prod) => renderProductCard(prod))}
              </div>
            </div>

            {/* Section 2: Best Sellers */}
            <div className="space-y-6">
              <div className="flex items-end justify-between border-b border-rose-100 pb-3">
                <div>
                  <span className="text-[10px] font-black uppercase tracking-widest text-rose-600">Customer Favorites</span>
                  <h3 className="font-serif text-2xl font-bold text-stone-900">Best Sellers</h3>
                </div>
                <button
                  onClick={() => {
                    const el = document.getElementById('catalog-section');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="text-xs font-bold text-rose-600 hover:text-rose-800 flex items-center gap-1"
                >
                  <span>View All Best Sellers</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {BEAUTY_PRODUCTS.filter((p) => p.isBestSeller || p.badge === 'Best Seller').slice(0, 4).map((prod) => renderProductCard(prod))}
              </div>
            </div>

            {/* Section 3: New Arrivals */}
            <div className="space-y-6">
              <div className="flex items-end justify-between border-b border-rose-100 pb-3">
                <div>
                  <span className="text-[10px] font-black uppercase tracking-widest text-rose-600">Fresh Formulations</span>
                  <h3 className="font-serif text-2xl font-bold text-stone-900">New Arrivals</h3>
                </div>
                <button
                  onClick={() => {
                    const el = document.getElementById('catalog-section');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="text-xs font-bold text-rose-600 hover:text-rose-800 flex items-center gap-1"
                >
                  <span>View All New Releases</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {BEAUTY_PRODUCTS.filter((p) => p.isNewArrival || p.badge === 'New' || p.badge === 'Award Winner').slice(0, 4).map((prod) => renderProductCard(prod))}
              </div>
            </div>

            {/* Section 4: Skincare Essentials */}
            <div className="space-y-6">
              <div className="flex items-end justify-between border-b border-rose-100 pb-3">
                <div>
                  <span className="text-[10px] font-black uppercase tracking-widest text-rose-600">Clean Biocompatible Science</span>
                  <h3 className="font-serif text-2xl font-bold text-stone-900">Skincare Essentials</h3>
                </div>
                <button
                  onClick={() => {
                    setActiveCategory('Skincare');
                    const el = document.getElementById('catalog-section');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="text-xs font-bold text-rose-600 hover:text-rose-800 flex items-center gap-1"
                >
                  <span>Explore All 15 Skincare Products</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {BEAUTY_PRODUCTS.filter((p) => p.category === 'Skincare').slice(0, 4).map((prod) => renderProductCard(prod))}
              </div>
            </div>

            {/* Section 5: Makeup Collection */}
            <div className="space-y-6">
              <div className="flex items-end justify-between border-b border-rose-100 pb-3">
                <div>
                  <span className="text-[10px] font-black uppercase tracking-widest text-rose-600">Skin-Nourishing Color</span>
                  <h3 className="font-serif text-2xl font-bold text-stone-900">Makeup Collection</h3>
                </div>
                <button
                  onClick={() => {
                    setActiveCategory('Makeup');
                    const el = document.getElementById('catalog-section');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="text-xs font-bold text-rose-600 hover:text-rose-800 flex items-center gap-1"
                >
                  <span>Explore All 15 Makeup Products</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {BEAUTY_PRODUCTS.filter((p) => p.category === 'Makeup').slice(0, 4).map((prod) => renderProductCard(prod))}
              </div>
            </div>

            {/* Section 6: Hair Care Rituals */}
            <div className="space-y-6">
              <div className="flex items-end justify-between border-b border-rose-100 pb-3">
                <div>
                  <span className="text-[10px] font-black uppercase tracking-widest text-rose-600">Trichology & Ayurvedic Oils</span>
                  <h3 className="font-serif text-2xl font-bold text-stone-900">Hair Care Rituals</h3>
                </div>
                <button
                  onClick={() => {
                    setActiveCategory('Haircare');
                    const el = document.getElementById('catalog-section');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="text-xs font-bold text-rose-600 hover:text-rose-800 flex items-center gap-1"
                >
                  <span>Explore All 7 Hair Products</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {BEAUTY_PRODUCTS.filter((p) => p.category === 'Haircare').slice(0, 4).map((prod) => renderProductCard(prod))}
              </div>
            </div>

            {/* Section 7: Body Care & Bath */}
            <div className="space-y-6">
              <div className="flex items-end justify-between border-b border-rose-100 pb-3">
                <div>
                  <span className="text-[10px] font-black uppercase tracking-widest text-rose-600">Velvet Moisture & Polishes</span>
                  <h3 className="font-serif text-2xl font-bold text-stone-900">Body Care & Bath</h3>
                </div>
                <button
                  onClick={() => {
                    setActiveCategory('Body Care');
                    const el = document.getElementById('catalog-section');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="text-xs font-bold text-rose-600 hover:text-rose-800 flex items-center gap-1"
                >
                  <span>Explore All 6 Body Products</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {BEAUTY_PRODUCTS.filter((p) => p.category === 'Body Care').slice(0, 4).map((prod) => renderProductCard(prod))}
              </div>
            </div>

            {/* Section 8: Fragrances */}
            <div className="space-y-6">
              <div className="flex items-end justify-between border-b border-rose-100 pb-3">
                <div>
                  <span className="text-[10px] font-black uppercase tracking-widest text-rose-600">Artisan French Grasse Perfumery</span>
                  <h3 className="font-serif text-2xl font-bold text-stone-900">Artisan Fragrances</h3>
                </div>
                <button
                  onClick={() => {
                    setActiveCategory('Fragrance');
                    const el = document.getElementById('catalog-section');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="text-xs font-bold text-rose-600 hover:text-rose-800 flex items-center gap-1"
                >
                  <span>Explore All Fragrances</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {BEAUTY_PRODUCTS.filter((p) => p.category === 'Fragrance').slice(0, 4).map((prod) => renderProductCard(prod))}
              </div>
            </div>

            {/* Section 9: Beauty Accessories */}
            <div className="space-y-6">
              <div className="flex items-end justify-between border-b border-rose-100 pb-3">
                <div>
                  <span className="text-[10px] font-black uppercase tracking-widest text-rose-600">Artistry Brushes, Blenders & Gua Sha</span>
                  <h3 className="font-serif text-2xl font-bold text-stone-900">Beauty Accessories</h3>
                </div>
                <button
                  onClick={() => {
                    setActiveCategory('Accessories');
                    const el = document.getElementById('catalog-section');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="text-xs font-bold text-rose-600 hover:text-rose-800 flex items-center gap-1"
                >
                  <span>Explore All 6 Accessories</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {BEAUTY_PRODUCTS.filter((p) => p.category === 'Accessories').slice(0, 4).map((prod) => renderProductCard(prod))}
              </div>
            </div>

            {/* Section 10: Special Offers & Bundles */}
            <div className="space-y-6">
              <div className="flex items-end justify-between border-b border-rose-100 pb-3">
                <div>
                  <span className="text-[10px] font-black uppercase tracking-widest text-rose-600">Limited Period Deals</span>
                  <h3 className="font-serif text-2xl font-bold text-stone-900">Special Offers</h3>
                </div>
                <button
                  onClick={() => {
                    const el = document.getElementById('catalog-section');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="text-xs font-bold text-rose-600 hover:text-rose-800 flex items-center gap-1"
                >
                  <span>View All Offers</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {BEAUTY_PRODUCTS.filter((p) => p.isSpecialOffer || p.badge === 'Special Offer' || p.badge === 'Hot Deal').slice(0, 4).map((prod) => renderProductCard(prod))}
              </div>
            </div>
          </div>
        )}

      </section>

      {/* Claimable Vouchers & Coupon Scratch Bar */}
      <section className="py-10 bg-white border-y border-rose-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {BEAUTY_COUPONS.map((coupon, idx) => (
              <div
                key={idx}
                className="p-4 rounded-2xl bg-gradient-to-br from-[#FFF8F7] to-[#FDF4F2] border border-rose-200/80 flex items-center justify-between gap-3 shadow-2xs"
              >
                <div className="space-y-1">
                  <div className="flex items-center gap-1.5">
                    <Tag className="w-3.5 h-3.5 text-rose-600" />
                    <span className="font-mono text-xs font-black text-rose-700">{coupon.code}</span>
                  </div>
                  <h4 className="font-serif text-sm font-bold text-stone-900">{coupon.discount}</h4>
                  <p className="text-[11px] text-stone-500">{coupon.desc}</p>
                </div>
                <button
                  onClick={() => {
                    setAppliedCoupon(coupon.code);
                    setCouponScratchSuccess(true);
                    setTimeout(() => setCouponScratchSuccess(false), 2500);
                  }}
                  className="px-3 py-1.5 rounded-xl bg-rose-600 hover:bg-rose-700 text-white text-[11px] font-bold shrink-0 transition-colors shadow-2xs"
                >
                  {appliedCoupon === coupon.code ? 'Applied ✓' : 'Apply'}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Shoppable Reels Section - Exclusively on MAX Plan */}
      {isMaxPlan && (
        <BeautyReelsSection
          onAddToCart={(product) => addToCart(product)}
          onQuickView={(product) => setSelectedProduct(product)}
        />
      )}

      {/* Beauty Blog & Skincare Editorial Section */}
      <section className="py-14 sm:py-20 bg-[#FAF7F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div className="space-y-2">
              <span className="text-xs font-bold uppercase tracking-widest text-rose-600">The Botanical Journal</span>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-stone-900">
                Skincare Science & Ritual Guides
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {BEAUTY_BLOGS.map((blog) => (
              <div
                key={blog.id}
                className="bg-white rounded-3xl border border-rose-100 overflow-hidden shadow-xs hover:shadow-lg transition-all flex flex-col justify-between"
              >
                <div className="aspect-[16/10] overflow-hidden bg-rose-50">
                  <img loading="lazy" src={blog.image} alt={blog.title} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-6 space-y-3 flex flex-col justify-between flex-grow">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-[11px] text-stone-400">
                      <span className="font-bold text-rose-600 uppercase">{blog.category}</span>
                      <span>{blog.readTime}</span>
                    </div>
                    <h3 className="font-serif text-base font-bold text-stone-900 leading-snug">
                      {blog.title}
                    </h3>
                    <p className="text-xs text-stone-500 line-clamp-3">
                      {blog.excerpt}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-rose-100 flex items-center justify-between">
                    <span className="text-[11px] text-stone-400">{blog.author}</span>
                    <button
                      onClick={() => setBlogModal(blog)}
                      className="text-xs font-bold text-rose-600 hover:text-rose-800 flex items-center gap-1"
                    >
                      <span>Read Guide</span>
                      <ArrowRight className="w-3 h-3" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Instagram UGC Shoppable Grid */}
      <section className="py-14 sm:py-20 bg-white border-t border-rose-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-rose-600">@AuraBotanicals</span>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-stone-900">
              Shoppable Community Gallery
            </h2>
            <p className="text-stone-500 text-xs sm:text-sm">Tag us #AuraGlow to be featured on our editorial feed.</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {INSTAGRAM_POSTS.map((post) => (
              <div key={post.id} className="group relative rounded-2xl overflow-hidden aspect-square border border-rose-100 shadow-xs">
                <img loading="lazy" src={post.image} alt={post.user} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-stone-950/40 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-between p-4 text-white">
                  <span className="text-xs font-bold">{post.user}</span>
                  <div className="space-y-1">
                    <span className="text-[10px] bg-white/20 backdrop-blur-md px-2 py-0.5 rounded block truncate">
                      🛍 {post.productTagged}
                    </span>
                    <span className="text-[11px] text-rose-200">❤️ {post.likes}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* ADVANCED PRODUCT QUICK VIEW & FULL DETAILS MODAL                          */}
      {/* ========================================================================= */}
      {selectedProduct && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-stone-950/80 backdrop-blur-xs animate-in fade-in">
          <div className="bg-white w-full max-w-4xl rounded-3xl shadow-2xl overflow-hidden border border-rose-100 flex flex-col md:flex-row max-h-[92vh]">
            
            {/* Left Image Gallery */}
            <div className="md:w-1/2 bg-rose-50/50 p-6 flex flex-col justify-between border-b md:border-b-0 md:border-r border-rose-100">
              <div className="aspect-square rounded-2xl overflow-hidden bg-white shadow-xs border border-rose-100 relative">
                <img loading="lazy"
                  src={selectedProduct.galleryImages[activeGalleryImgIndex] || selectedProduct.image}
                  alt={selectedProduct.name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Thumbnails row */}
              <div className="flex gap-2 mt-4">
                {selectedProduct.galleryImages.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveGalleryImgIndex(idx)}
                    className={`w-14 h-14 rounded-xl overflow-hidden border-2 transition-all ${
                      activeGalleryImgIndex === idx ? 'border-rose-600 ring-2 ring-rose-500/20' : 'border-rose-100 opacity-70 hover:opacity-100'
                    }`}
                  >
                    <img loading="lazy" src={img} alt="Thumbnail" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            </div>

            {/* Right Details Panel */}
            <div className="md:w-1/2 p-6 sm:p-8 overflow-y-auto space-y-5 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-rose-600 bg-rose-50 px-2.5 py-1 rounded-md">
                    {selectedProduct.category} • {selectedProduct.skinType}
                  </span>
                  <button
                    onClick={() => setSelectedProduct(null)}
                    className="p-1.5 rounded-full hover:bg-rose-50 text-stone-400 hover:text-stone-700"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                <h3 className="font-serif text-2xl font-bold text-stone-900">
                  {selectedProduct.name}
                </h3>

                <div className="flex items-center gap-2">
                  <div className="flex items-center text-amber-500 font-bold text-xs">
                    <Star className="w-4 h-4 fill-amber-400" />
                    <span className="ml-1">{selectedProduct.rating}</span>
                  </div>
                  <span className="text-xs text-stone-400">({selectedProduct.reviewsCount} verified customer ratings)</span>
                </div>

                <div className="flex items-baseline gap-3">
                  <span className="text-2xl font-bold text-rose-700">
                    ₹{selectedProduct.price.toLocaleString()}
                  </span>
                  <span className="text-sm text-stone-400 line-through">
                    ₹{selectedProduct.originalPrice.toLocaleString()}
                  </span>
                  <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded">
                    Save 25%
                  </span>
                </div>

                {/* Tabs for Overview, Clinical, How to Use */}
                <div className="border-b border-rose-100 flex gap-4 text-xs font-bold">
                  <button
                    onClick={() => setActiveProductTab('overview')}
                    className={`pb-2 border-b-2 transition-colors ${
                      activeProductTab === 'overview' ? 'border-rose-600 text-rose-700' : 'border-transparent text-stone-400'
                    }`}
                  >
                    Description
                  </button>
                  <button
                    onClick={() => setActiveProductTab('clinical')}
                    className={`pb-2 border-b-2 transition-colors ${
                      activeProductTab === 'clinical' ? 'border-rose-600 text-rose-700' : 'border-transparent text-stone-400'
                    }`}
                  >
                    Clinical Results
                  </button>
                  <button
                    onClick={() => setActiveProductTab('howTo')}
                    className={`pb-2 border-b-2 transition-colors ${
                      activeProductTab === 'howTo' ? 'border-rose-600 text-rose-700' : 'border-transparent text-stone-400'
                    }`}
                  >
                    How to Use
                  </button>
                </div>

                {/* Tab Content */}
                <div className="text-xs text-stone-600 leading-relaxed min-h-[60px]">
                  {activeProductTab === 'overview' && <p>{selectedProduct.description}</p>}
                  {activeProductTab === 'clinical' && (
                    <div className="p-3 bg-rose-50/70 rounded-xl border border-rose-200/80 font-medium text-stone-800">
                      ✓ {selectedProduct.clinicalResults}
                    </div>
                  )}
                  {activeProductTab === 'howTo' && <p>{selectedProduct.howToUse}</p>}
                </div>

                {/* Shades if applicable */}
                {selectedProduct.shades && (
                  <div className="space-y-1.5">
                    <span className="text-xs font-bold text-stone-800 block">Select Shade:</span>
                    <div className="flex gap-2">
                      {selectedProduct.shades.map((s, i) => (
                        <button
                          key={i}
                          onClick={() => setSelectedShade(s.name)}
                          className={`px-3 py-1.5 rounded-xl border flex items-center gap-2 text-xs font-bold transition-all ${
                            selectedShade === s.name ? 'border-rose-600 bg-rose-50 text-rose-800 ring-1 ring-rose-500' : 'border-stone-200 text-stone-700'
                          }`}
                        >
                          <span className="w-3 h-3 rounded-full border border-stone-300" style={{ backgroundColor: s.hex }}></span>
                          <span>{s.name}</span>
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Add to Cart & Wishlist Footer */}
              <div className="pt-4 border-t border-rose-100 flex gap-3">
                <button
                  onClick={() => toggleWishlist(selectedProduct.id)}
                  className={`p-3.5 rounded-full border transition-all flex items-center justify-center ${
                    wishlist.includes(selectedProduct.id)
                      ? 'bg-rose-50 border-rose-300 text-rose-600 shadow-xs'
                      : 'border-stone-200 text-stone-600 hover:border-rose-300 hover:text-rose-600'
                  }`}
                  title={wishlist.includes(selectedProduct.id) ? 'Remove from Wishlist' : 'Add to Wishlist'}
                >
                  <Heart className={`w-5 h-5 ${wishlist.includes(selectedProduct.id) ? 'fill-current' : ''}`} />
                </button>
                <button
                  onClick={() => {
                    addToCart(selectedProduct, selectedProduct.volume, selectedShade || undefined);
                    setSelectedProduct(null);
                    setCartOpen(true);
                  }}
                  className="flex-1 py-3.5 rounded-full bg-rose-600 hover:bg-rose-700 text-white font-bold text-xs tracking-wider transition-all shadow-md flex items-center justify-center gap-2"
                >
                  <ShoppingBag className="w-4 h-4" />
                  <span>Add to Luxury Bag • ₹{selectedProduct.price.toLocaleString()}</span>
                </button>
              </div>
            </div>

          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* SHOPPING CART DRAWER (Full Premium E-Commerce)                             */}
      {/* ========================================================================= */}
      {cartOpen && (
        <div className="fixed inset-0 z-50 flex justify-end bg-stone-950/75 backdrop-blur-xs animate-in fade-in">
          <div className="bg-white w-full max-w-md h-full shadow-2xl flex flex-col justify-between overflow-hidden animate-in slide-in-from-right duration-300 border-l border-rose-100">
            
            {/* Header */}
            <div className="p-4 sm:p-5 border-b border-rose-100 flex items-center justify-between bg-[#FAF7F5]">
              <div className="flex items-center gap-2">
                <ShoppingBag className="w-5 h-5 text-rose-700" />
                <h3 className="font-serif text-base sm:text-lg font-bold text-stone-900">
                  Your Beauty Bag ({cartItemCount})
                </h3>
              </div>
              <button
                onClick={() => setCartOpen(false)}
                className="p-1.5 rounded-full hover:bg-rose-100 text-stone-500"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Free Shipping Progress Bar */}
            <div className="p-3.5 bg-rose-50/80 border-b border-rose-100 px-5 text-xs text-stone-700">
              {freeShippingMet ? (
                <div className="flex items-center gap-1.5 text-emerald-700 font-bold">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>You've qualified for FREE Luxury Express Delivery + Gift!</span>
                </div>
              ) : (
                <div>
                  <span>
                    Add <strong>₹{(freeShippingThreshold - rawSubtotal).toLocaleString()}</strong> more to unlock <strong>FREE Shipping</strong>!
                  </span>
                  <div className="w-full h-1.5 bg-rose-200 rounded-full mt-2 overflow-hidden">
                    <div
                      className="h-full bg-rose-600 rounded-full transition-all duration-300"
                      style={{ width: `${Math.min(100, (rawSubtotal / freeShippingThreshold) * 100)}%` }}
                    ></div>
                  </div>
                </div>
              )}
            </div>

            {/* Cart Items */}
            <div className="flex-1 overflow-y-auto p-4 sm:p-5 space-y-4">
              {cart.map((item) => (
                <div key={item.product.id} className="flex gap-3.5 p-3 rounded-2xl bg-[#FCF9F7] border border-rose-100">
                  <div className="w-16 h-16 rounded-xl overflow-hidden bg-white border border-rose-200 shrink-0">
                    <img loading="lazy" src={item.product.image} alt={item.product.name} className="w-full h-full object-cover" />
                  </div>
                  
                  <div className="flex-1 min-w-0 space-y-1">
                    <div className="flex items-start justify-between gap-1">
                      <h4 className="font-serif text-xs sm:text-sm font-bold text-stone-900 truncate">
                        {item.product.name}
                      </h4>
                      <button onClick={() => removeFromCart(item.product.id)} className="text-stone-400 hover:text-rose-600 p-0.5">
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>

                    <span className="text-[10px] text-stone-500 block">
                      {item.selectedVolume || item.product.volume}
                      {item.selectedShade ? ` • ${item.selectedShade}` : ''}
                    </span>

                    <div className="flex items-center justify-between pt-1">
                      <div className="flex items-center gap-2 bg-white border border-stone-200 rounded-lg p-0.5">
                        <button onClick={() => updateQuantity(item.product.id, -1)} className="p-1 text-stone-600">
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="text-xs font-bold px-1">{item.quantity}</span>
                        <button onClick={() => updateQuantity(item.product.id, 1)} className="p-1 text-stone-600">
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>

                      <span className="text-xs font-bold text-rose-700">
                        ₹{(item.product.price * item.quantity).toLocaleString()}
                      </span>
                    </div>
                  </div>
                </div>
              ))}

              {/* Complimentary Deluxe Sample Selector */}
              <div className="p-3.5 rounded-2xl bg-amber-50/60 border border-amber-200/80 space-y-2">
                <span className="text-xs font-bold text-amber-900 flex items-center gap-1.5">
                  <Gift className="w-4 h-4 text-amber-700" /> Complimentary Deluxe Samples (2 Included):
                </span>
                <div className="grid grid-cols-2 gap-2 text-[11px]">
                  {['Rose Hydrosol Sachet', 'Bakuchiol Serum Drop', 'Niacinamide Cream Sample'].map((sample, i) => (
                    <label key={i} className="flex items-center gap-1.5 text-stone-700 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={selectedSamples.includes(sample)}
                        onChange={() => {
                          setSelectedSamples((prev) =>
                            prev.includes(sample) ? prev.filter((s) => s !== sample) : [...prev, sample]
                          );
                        }}
                        className="rounded text-rose-600"
                      />
                      <span>{sample}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Eco Gift Box Toggle */}
              <label className="flex items-center justify-between p-3 rounded-2xl bg-stone-50 border border-stone-200 text-xs cursor-pointer">
                <span className="font-semibold text-stone-800">Add Luxury Satin Gift Box (+₹99)</span>
                <input
                  type="checkbox"
                  checked={includeGiftBox}
                  onChange={(e) => setIncludeGiftBox(e.target.checked)}
                  className="rounded text-rose-600 w-4 h-4"
                />
              </label>
            </div>

            {/* Footer Summary & Checkout Trigger */}
            <div className="p-4 sm:p-5 border-t border-rose-100 bg-[#FAF7F5] space-y-3">
              <div className="flex items-center justify-between text-xs">
                <span className="text-stone-500">Subtotal:</span>
                <span className="font-bold text-stone-900">₹{rawSubtotal.toLocaleString()}</span>
              </div>

              {discountAmount > 0 && (
                <div className="flex items-center justify-between text-xs text-emerald-600 font-bold">
                  <span>Coupon Discount (GLOW20):</span>
                  <span>-₹{discountAmount.toLocaleString()}</span>
                </div>
              )}

              <div className="flex items-center justify-between text-xs">
                <span className="text-stone-500">Shipping:</span>
                <span className="font-bold text-emerald-600">{freeShippingMet ? 'FREE' : '₹99'}</span>
              </div>

              <div className="pt-2 border-t border-rose-200 flex items-center justify-between">
                <span className="font-serif text-sm font-bold text-stone-900">Total:</span>
                <span className="font-serif text-lg font-bold text-rose-700">
                  ₹{cartSubtotal.toLocaleString()}
                </span>
              </div>

              <button
                onClick={() => {
                  setCartOpen(false);
                  setCheckoutModalOpen(true);
                  setCheckoutStep(1);
                }}
                className="w-full py-3.5 rounded-full bg-rose-600 hover:bg-rose-700 text-white font-bold text-xs tracking-wider transition-all shadow-md flex items-center justify-center gap-2"
              >
                <span>Proceed to 3-Step Checkout</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* 3-STEP SEAMLESS CHECKOUT MODAL                                            */}
      {/* ========================================================================= */}
      {checkoutModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-stone-950/80 backdrop-blur-xs animate-in fade-in">
          <div className="bg-white w-full max-w-xl rounded-3xl shadow-2xl overflow-hidden border border-rose-100 flex flex-col max-h-[90vh]">
            
            {/* Checkout Header */}
            <div className="p-4 sm:p-5 border-b border-rose-100 flex items-center justify-between bg-[#FAF7F5]">
              <div className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-rose-600" />
                <h3 className="font-serif text-base sm:text-lg font-bold text-stone-900">
                  Aura Express Checkout
                </h3>
              </div>
              <button onClick={() => setCheckoutModalOpen(false)} className="text-stone-400 hover:text-stone-700">
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Stepper indicators */}
            <div className="px-6 py-3 bg-stone-50 border-b border-stone-200 flex items-center justify-between text-xs">
              <span className={`font-bold ${checkoutStep >= 1 ? 'text-rose-600' : 'text-stone-400'}`}>1. Shipping</span>
              <span className="text-stone-300">→</span>
              <span className={`font-bold ${checkoutStep >= 2 ? 'text-rose-600' : 'text-stone-400'}`}>2. Delivery</span>
              <span className="text-stone-300">→</span>
              <span className={`font-bold ${checkoutStep >= 3 ? 'text-rose-600' : 'text-stone-400'}`}>3. Payment</span>
            </div>

            {/* Step Content */}
            <div className="p-6 overflow-y-auto space-y-4 flex-1">
              {checkoutStep === 1 && (
                <div className="space-y-3">
                  <h4 className="font-serif font-bold text-stone-900 text-sm">Delivery Address</h4>
                  <input type="text" defaultValue="Meera Krishnan" placeholder="Full Name" className="w-full px-3.5 py-2.5 rounded-xl bg-stone-50 border border-stone-200 text-xs" />
                  <input type="tel" defaultValue="+91 98765 43210" placeholder="Mobile Number for Delivery SMS" className="w-full px-3.5 py-2.5 rounded-xl bg-stone-50 border border-stone-200 text-xs" />
                  <input type="text" defaultValue="Flat 402, Magnolia Orchards, 12th Main" placeholder="House / Apartment Address" className="w-full px-3.5 py-2.5 rounded-xl bg-stone-50 border border-stone-200 text-xs" />
                  <div className="grid grid-cols-2 gap-2">
                    <input type="text" defaultValue="Bengaluru" placeholder="City" className="w-full px-3.5 py-2.5 rounded-xl bg-stone-50 border border-stone-200 text-xs" />
                    <input type="text" defaultValue="560038" placeholder="Pincode" className="w-full px-3.5 py-2.5 rounded-xl bg-stone-50 border border-stone-200 text-xs" />
                  </div>
                  <button
                    onClick={() => setCheckoutStep(2)}
                    className="w-full py-3 rounded-full bg-rose-600 text-white font-bold text-xs mt-2"
                  >
                    Continue to Delivery Method
                  </button>
                </div>
              )}

              {checkoutStep === 2 && (
                <div className="space-y-3">
                  <h4 className="font-serif font-bold text-stone-900 text-sm">Choose Delivery Method</h4>
                  <label className="p-3.5 rounded-2xl border-2 border-rose-600 bg-rose-50/50 flex items-center justify-between text-xs cursor-pointer">
                    <div>
                      <span className="font-bold text-stone-900 block">Premium Express Air Courier (24-48 Hours)</span>
                      <span className="text-[11px] text-stone-500">Real-time GPS tracking & temperature controlled cold shipping.</span>
                    </div>
                    <span className="font-bold text-emerald-600">FREE</span>
                  </label>
                  <button
                    onClick={() => setCheckoutStep(3)}
                    className="w-full py-3 rounded-full bg-rose-600 text-white font-bold text-xs mt-4"
                  >
                    Continue to Secure Payment
                  </button>
                </div>
              )}

              {checkoutStep === 3 && (
                <div className="space-y-4">
                  <h4 className="font-serif font-bold text-stone-900 text-sm">Select Payment Method</h4>
                  <div className="space-y-2">
                    <label
                      onClick={() => setPaymentMethod('upi')}
                      className={`p-3.5 rounded-2xl border flex items-center justify-between text-xs cursor-pointer ${
                        paymentMethod === 'upi' ? 'border-rose-600 bg-rose-50' : 'border-stone-200'
                      }`}
                    >
                      <div className="flex items-center gap-2">
                        <QrCode className="w-4 h-4 text-rose-600" />
                        <span className="font-bold text-stone-900">Instant UPI (GPay / PhonePe / Paytm / BHIM)</span>
                      </div>
                      <span className="text-[10px] bg-emerald-100 text-emerald-800 font-bold px-2 py-0.5 rounded">Fastest</span>
                    </label>

                    <label
                      onClick={() => setPaymentMethod('card')}
                      className={`p-3.5 rounded-2xl border flex items-center justify-between text-xs cursor-pointer ${
                        paymentMethod === 'card' ? 'border-rose-600 bg-rose-50' : 'border-stone-200'
                      }`}
                    >
                      <div className="flex items-center gap-2">
                        <CreditCard className="w-4 h-4 text-stone-600" />
                        <span className="font-bold text-stone-900">Credit / Debit Card / NetBanking</span>
                      </div>
                    </label>

                    <label
                      onClick={() => setPaymentMethod('cod')}
                      className={`p-3.5 rounded-2xl border flex items-center justify-between text-xs cursor-pointer ${
                        paymentMethod === 'cod' ? 'border-rose-600 bg-rose-50' : 'border-stone-200'
                      }`}
                    >
                      <div className="flex items-center gap-2">
                        <Box className="w-4 h-4 text-stone-600" />
                        <span className="font-bold text-stone-900">Cash on Delivery</span>
                      </div>
                    </label>
                  </div>

                  <div className="p-3 bg-stone-50 rounded-2xl border border-stone-200 text-xs flex justify-between">
                    <span className="text-stone-500">Amount Payable:</span>
                    <span className="font-bold text-rose-700">₹{cartSubtotal.toLocaleString()}</span>
                  </div>

                  <button
                    onClick={() => setCheckoutStep(4)}
                    className="w-full py-3.5 rounded-full bg-rose-600 hover:bg-rose-700 text-white font-bold text-xs shadow-md"
                  >
                    Pay & Place Order • ₹{cartSubtotal.toLocaleString()}
                  </button>
                </div>
              )}

              {checkoutStep === 4 && (
                <div className="text-center py-6 space-y-4 animate-in zoom-in-95">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h4 className="font-serif text-2xl font-bold text-stone-900">Order Confirmed!</h4>
                  <p className="text-xs text-stone-600 max-w-sm mx-auto">
                    Thank you! Your botanical order <strong className="text-stone-900">#{orderTrackingId}</strong> is now being cold-batched with care.
                  </p>
                  <div className="p-4 bg-stone-50 rounded-2xl border border-stone-200 text-xs space-y-1">
                    <span className="text-stone-500 block">Estimated Handover:</span>
                    <span className="font-bold text-stone-900">Tomorrow by 4:00 PM via BlueDart Air Express</span>
                  </div>
                  <div className="flex gap-2">
                    <button
                      onClick={() => {
                        setCheckoutModalOpen(false);
                        setTrackingModalOpen(true);
                      }}
                      className="flex-1 py-2.5 rounded-full bg-rose-600 text-white text-xs font-bold"
                    >
                      Track Order Status
                    </button>
                    <button
                      onClick={() => setCheckoutModalOpen(false)}
                      className="px-5 py-2.5 rounded-full bg-stone-100 text-stone-700 text-xs font-bold"
                    >
                      Close
                    </button>
                  </div>
                </div>
              )}
            </div>

          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* LIVE ORDER TRACKING UI MODAL                                              */}
      {/* ========================================================================= */}
      {trackingModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-950/80 backdrop-blur-xs animate-in fade-in">
          <div className="bg-white w-full max-w-md rounded-3xl shadow-2xl overflow-hidden border border-rose-100 p-6 space-y-5">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Truck className="w-5 h-5 text-rose-600" />
                <h3 className="font-serif text-lg font-bold text-stone-900">Live Order Telemetry</h3>
              </div>
              <button onClick={() => setTrackingModalOpen(false)} className="text-stone-400 hover:text-stone-700">
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-4">
              <div className="p-3 bg-stone-50 rounded-2xl border border-stone-200 flex items-center justify-between text-xs">
                <div>
                  <span className="text-[10px] text-stone-400 block uppercase">Order ID</span>
                  <span className="font-mono font-bold text-stone-900">{searchTrackingId}</span>
                </div>
                <span className="px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 text-[10px] font-bold">
                  En Route
                </span>
              </div>

              {/* Progress Timeline */}
              <div className="space-y-3 pl-2 border-l-2 border-rose-200 ml-2 text-xs">
                <div className="relative pl-4">
                  <div className="absolute -left-[13px] top-0 w-4 h-4 rounded-full bg-emerald-500 border-2 border-white"></div>
                  <span className="font-bold text-stone-900 block">Order Placed & Confirmed</span>
                  <span className="text-[10px] text-stone-400">Aug 25, 2026 • 12:42 PM</span>
                </div>
                <div className="relative pl-4">
                  <div className="absolute -left-[13px] top-0 w-4 h-4 rounded-full bg-emerald-500 border-2 border-white"></div>
                  <span className="font-bold text-stone-900 block">Cold-Batched & Quality Inspected</span>
                  <span className="text-[10px] text-stone-400">Aug 25, 2026 • 01:15 PM</span>
                </div>
                <div className="relative pl-4">
                  <div className="absolute -left-[13px] top-0 w-4 h-4 rounded-full bg-rose-600 border-2 border-white animate-pulse"></div>
                  <span className="font-bold text-rose-700 block">Dispatched via BlueDart Express (Air Courier)</span>
                  <span className="text-[10px] text-stone-400">In Transit - Expected Delivery Tomorrow</span>
                </div>
              </div>
            </div>

            <button
              onClick={() => setTrackingModalOpen(false)}
              className="w-full py-2.5 rounded-full bg-stone-900 text-white text-xs font-bold"
            >
              Close Tracker
            </button>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* CUSTOMER ACCOUNT & VIP LOYALTY CLUB MODAL                                 */}
      {/* ========================================================================= */}
      {accountModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-950/80 backdrop-blur-xs animate-in fade-in">
          <div className="bg-white w-full max-w-md rounded-3xl shadow-2xl overflow-hidden border border-rose-100 p-6 space-y-5">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <User className="w-5 h-5 text-rose-600" />
                <h3 className="font-serif text-lg font-bold text-stone-900">VIP Beauty Club</h3>
              </div>
              <button onClick={() => setAccountModalOpen(false)} className="text-stone-400 hover:text-stone-700">
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-4 rounded-2xl bg-gradient-to-br from-rose-900 to-stone-900 text-white space-y-2">
              <div className="flex items-center justify-between text-xs">
                <span className="text-rose-200">Gold Tier Member</span>
                <span className="font-mono bg-rose-800 px-2 py-0.5 rounded text-[10px]">1,420 Glow Points</span>
              </div>
              <h4 className="font-serif text-lg font-bold">Meera Krishnan</h4>
              <p className="text-[11px] text-stone-300">You are 580 points away from unlocking Platinum VIP Gift Set.</p>
            </div>

            <div className="space-y-2 text-xs">
              <span className="font-bold text-stone-800 block">Recent Order History:</span>
              <div className="p-3 bg-stone-50 rounded-xl border border-stone-200 flex items-center justify-between">
                <div>
                  <span className="font-mono font-bold text-stone-900 block">#AURA-89421</span>
                  <span className="text-[10px] text-stone-400">Rose Radiance Trio • ₹3,398</span>
                </div>
                <span className="text-emerald-600 font-bold text-[10px] bg-emerald-50 px-2 py-0.5 rounded">En Route</span>
              </div>
            </div>

            <button
              onClick={() => setAccountModalOpen(false)}
              className="w-full py-2.5 rounded-full bg-stone-900 text-white text-xs font-bold"
            >
              Close Account
            </button>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* WISHLIST DRAWER                                                           */}
      {/* ========================================================================= */}
      {wishlistOpen && (
        <div className="fixed inset-0 z-50 flex justify-end bg-stone-950/75 backdrop-blur-xs animate-in fade-in">
          <div className="bg-white w-full max-w-md h-full shadow-2xl flex flex-col justify-between overflow-hidden animate-in slide-in-from-right duration-300 border-l border-rose-100">
            
            {/* Header */}
            <div className="p-5 border-b border-rose-100 flex items-center justify-between bg-[#FAF7F5]">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-rose-100 text-rose-600 flex items-center justify-center">
                  <Heart className="w-4 h-4 fill-rose-600" />
                </div>
                <div>
                  <h3 className="font-serif text-base sm:text-lg font-bold text-stone-900 leading-tight">
                    Saved Wishlist
                  </h3>
                  <span className="text-[11px] text-stone-500 font-medium">
                    {wishlistedProducts.length} {wishlistedProducts.length === 1 ? 'item' : 'items'} saved
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-2">
                {wishlistedProducts.length > 0 && (
                  <button
                    onClick={() => setWishlist([])}
                    className="text-[11px] font-bold text-stone-400 hover:text-rose-600 transition-colors px-2 py-1"
                    title="Clear All Wishlist Items"
                  >
                    Clear All
                  </button>
                )}
                <button
                  onClick={() => setWishlistOpen(false)}
                  className="p-1.5 rounded-full hover:bg-rose-100 text-stone-500 transition-colors"
                  aria-label="Close Wishlist"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Product Cards List */}
            <div className="flex-1 overflow-y-auto p-4 sm:p-5 space-y-3">
              {wishlistedProducts.length === 0 ? (
                <div className="text-center py-16 px-4 space-y-4">
                  <div className="w-16 h-16 rounded-full bg-rose-50 border border-rose-200 flex items-center justify-center mx-auto text-rose-400">
                    <Heart className="w-8 h-8" />
                  </div>
                  <div>
                    <p className="font-serif text-base font-bold text-stone-900">Your wishlist is empty</p>
                    <p className="text-xs text-stone-500 mt-1 max-w-xs mx-auto">
                      Explore our botanical formulas and click the heart icon on any product to save your favorites!
                    </p>
                  </div>
                  <button
                    onClick={() => {
                      setWishlistOpen(false);
                      const catalogElem = document.getElementById('catalog-section');
                      if (catalogElem) catalogElem.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="mt-2 px-5 py-2.5 rounded-full bg-stone-900 hover:bg-stone-800 text-white text-xs font-bold transition-all shadow-xs"
                  >
                    Explore Catalog
                  </button>
                </div>
              ) : (
                wishlistedProducts.map((prod) => (
                  <div
                    key={prod.id}
                    className="p-3.5 rounded-2xl bg-[#FCF9F7] border border-rose-100/90 hover:border-rose-200 transition-all flex gap-3.5 items-center group shadow-2xs"
                  >
                    {/* Thumbnail */}
                    <div
                      onClick={() => {
                        setSelectedProduct(prod);
                        setActiveGalleryImgIndex(0);
                        setActiveProductTab('overview');
                        setWishlistOpen(false);
                      }}
                      className="w-18 h-18 rounded-xl overflow-hidden bg-white border border-rose-200/80 shrink-0 cursor-pointer relative"
                    >
                      <img
                        loading="lazy"
                        src={prod.image}
                        alt={prod.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>

                    {/* Product Details */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between gap-1">
                        <span className="text-[10px] font-bold uppercase tracking-wider text-rose-600">
                          {prod.category}
                        </span>
                        {/* Remove button */}
                        <button
                          onClick={() => toggleWishlist(prod.id)}
                          className="text-stone-400 hover:text-rose-600 p-1 rounded-lg hover:bg-rose-50 transition-colors"
                          title="Remove from Wishlist"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>

                      <h4
                        onClick={() => {
                          setSelectedProduct(prod);
                          setActiveGalleryImgIndex(0);
                          setActiveProductTab('overview');
                          setWishlistOpen(false);
                        }}
                        className="font-serif text-xs font-bold text-stone-900 truncate mt-0.5 cursor-pointer hover:text-rose-600 transition-colors"
                      >
                        {prod.name}
                      </h4>

                      <div className="flex items-center gap-2 mt-1">
                        <span className="text-xs font-bold text-stone-900">
                          ₹{prod.price.toLocaleString()}
                        </span>
                        {prod.originalPrice > prod.price && (
                          <span className="text-[11px] text-stone-400 line-through">
                            ₹{prod.originalPrice.toLocaleString()}
                          </span>
                        )}
                      </div>

                      {/* Add to Cart button */}
                      <button
                        onClick={() => {
                          addToCart(prod);
                          toggleWishlist(prod.id);
                          setWishlistOpen(false);
                          setCartOpen(true);
                        }}
                        className="mt-2.5 w-full py-1.5 px-3 rounded-xl bg-stone-900 hover:bg-rose-600 text-white text-[11px] font-bold transition-colors flex items-center justify-center gap-1.5 shadow-2xs cursor-pointer active:scale-98"
                      >
                        <ShoppingBag className="w-3 h-3" />
                        <span>Move to Bag</span>
                      </button>
                    </div>
                  </div>
                ))
              )}
            </div>

            {/* Footer */}
            <div className="p-5 border-t border-rose-100 bg-[#FAF7F5]">
              <button
                onClick={() => setWishlistOpen(false)}
                className="w-full py-2.5 rounded-full bg-stone-900 hover:bg-stone-800 text-white text-xs font-bold transition-all shadow-sm"
              >
                Continue Shopping
              </button>
            </div>

          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* BEAUTY BLOG ARTICLE MODAL                                                 */}
      {/* ========================================================================= */}
      {blogModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-950/80 backdrop-blur-xs animate-in fade-in">
          <div className="bg-white w-full max-w-2xl rounded-3xl shadow-2xl overflow-hidden border border-rose-100 p-6 sm:p-8 space-y-4 max-h-[85vh] overflow-y-auto">
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-bold uppercase tracking-wider text-rose-600 bg-rose-50 px-2.5 py-1 rounded-md">
                {blogModal.category} • {blogModal.readTime}
              </span>
              <button onClick={() => setBlogModal(null)} className="p-1 rounded-full text-stone-400 hover:text-stone-700">
                <X className="w-5 h-5" />
              </button>
            </div>

            <h3 className="font-serif text-2xl font-bold text-stone-900 leading-snug">{blogModal.title}</h3>
            <p className="text-[11px] text-stone-400">By {blogModal.author} • {blogModal.date}</p>

            <div className="aspect-[16/9] rounded-2xl overflow-hidden">
              <img loading="lazy" src={blogModal.image} alt={blogModal.title} className="w-full h-full object-cover" />
            </div>

            <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">{blogModal.content}</p>

            <button
              onClick={() => setBlogModal(null)}
              className="w-full py-2.5 rounded-full bg-rose-600 text-white text-xs font-bold mt-4"
            >
              Close Article
            </button>
          </div>
        </div>
      )}

      {/* Luxury Footer */}
      <footer className="py-14 bg-stone-950 text-white text-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="space-y-3">
              <div className="flex items-center gap-2 font-serif font-bold text-lg text-white">
                <Sparkles className="w-4 h-4 text-rose-400" />
                <span>AURA BOTANICALS & BEAUTY</span>
              </div>
              <p className="text-stone-400 text-xs leading-relaxed">
                Pioneering biocompatible clean skincare, cold-pressed elixirs, and bespoke perfumery. Formulated without compromise.
              </p>
            </div>

            <div>
              <span className="font-bold text-white text-xs block mb-3">E-Commerce Categories</span>
              <ul className="space-y-2 text-stone-400 text-xs">
                <li><button onClick={() => setActiveCategory('Skincare')} className="hover:text-rose-300">Clean Skincare Rituals</button></li>
                <li><button onClick={() => setActiveCategory('Makeup')} className="hover:text-rose-300">Peptide Lip & Cheek Tints</button></li>
                <li><button onClick={() => setActiveCategory('Haircare')} className="hover:text-rose-300">Rosemary Scalp Density Oils</button></li>
                <li><button onClick={() => setActiveCategory('Fragrance')} className="hover:text-rose-300">Grasse Jasmine Fragrances</button></li>
              </ul>
            </div>

            <div>
              <span className="font-bold text-white text-xs block mb-3">Customer Care & Tracking</span>
              <ul className="space-y-2 text-stone-400 text-xs">
                <li><button onClick={() => setTrackingModalOpen(true)} className="hover:text-rose-300">Track Order Status</button></li>
                <li><button onClick={() => setAccountModalOpen(true)} className="hover:text-rose-300">VIP Rewards Balance</button></li>
                <li><button onClick={() => setWishlistOpen(true)} className="hover:text-rose-300">Saved Wishlist</button></li>
                <li><a href="mailto:care@aurabotanicals.com" className="hover:text-rose-300">care@aurabotanicals.com</a></li>
              </ul>
            </div>

            <div>
              <span className="font-bold text-white text-xs block mb-3">Certified Quality Standards</span>
              <div className="space-y-1.5 text-stone-400 text-[11px]">
                <p>✓ Leaping Bunny Certified Cruelty-Free</p>
                <p>✓ 100% Recyclable UV Amber Glass</p>
                <p>✓ Zero Sulfates, Parabens, Silicones</p>
                <p>✓ Dermatologist Verified Non-Comedogenic</p>
              </div>
            </div>
          </div>

          <div className="pt-6 border-t border-stone-800 flex flex-col sm:flex-row items-center justify-between gap-3 text-stone-500 text-[11px]">
            <span>© {new Date().getFullYear()} Aura Botanicals Beauty. All rights reserved.</span>
            <span>Secure 256-Bit SSL Encrypted Checkout • Cold-Formulated Small Batches</span>
          </div>

        </div>
      </footer>

    </div>
  );
};
