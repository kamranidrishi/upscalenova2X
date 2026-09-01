import React, { useState, useEffect, useRef } from 'react';
import {
  ShoppingBag,
  Heart,
  Search,
  User,
  Menu,
  X,
  ChevronLeft,
  ChevronRight,
  Star,
  Sparkles,
  ArrowRight,
  Filter,
  Check,
  Flame,
  Clock,
  ShieldCheck,
  RefreshCw,
  Truck,
  MessageCircle,
  Send,
  Eye,
  SlidersHorizontal,
  ChevronDown,
  Trash2,
  Tag,
  CreditCard,
  CheckCircle2,
  Package,
  MapPin,
  HelpCircle,
  Plus,
  Minus,
  Share2,
  Award,
  Instagram,
  Facebook,
  Compass
} from 'lucide-react';
import { DemoItem } from '../../data/demos';
import {
  FashionProduct,
  FASHION_PRODUCTS,
  FASHION_HERO_SLIDES,
  FASHION_CATEGORIES,
  RECENT_SEARCHES,
  POPULAR_SEARCHES
} from '../../data/fashionData';

interface FashionMaxDemoProps {
  demo: DemoItem;
  isMobile: boolean;
  isTablet: boolean;
}

interface CartItem {
  product: FashionProduct;
  selectedSize: string;
  selectedColor: string;
  quantity: number;
}

export const FashionMaxDemo: React.FC<FashionMaxDemoProps> = ({ isMobile, isTablet }) => {
  // Navigation & Category State
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [activeSubcategory, setActiveSubcategory] = useState<string>('All');
  const [selectedSort, setSelectedSort] = useState<string>('featured');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Hero Carousel State
  const [heroSlide, setHeroSlide] = useState(0);
  const [isHeroHovered, setIsHeroHovered] = useState(false);
  const heroTimerRef = useRef<NodeJS.Timeout | null>(null);

  // Search State
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  // Cart & Wishlist State
  const [cart, setCart] = useState<CartItem[]>([
    {
      product: FASHION_PRODUCTS[0], // Heavyweight Oversized Boxy Tee
      selectedSize: 'L',
      selectedColor: 'Onyx Black',
      quantity: 1
    },
    {
      product: FASHION_PRODUCTS[10], // Sculpted Ribbed Midi Column Dress
      selectedSize: 'M',
      selectedColor: 'Espresso Brown',
      quantity: 1
    }
  ]);
  const [cartDrawerOpen, setCartDrawerOpen] = useState(false);
  const [wishlist, setWishlist] = useState<string[]>([
    FASHION_PRODUCTS[0].id,
    FASHION_PRODUCTS[2].id,
    FASHION_PRODUCTS[18].id
  ]);
  const [wishlistDrawerOpen, setWishlistDrawerOpen] = useState(false);
  const [promoCode, setPromoCode] = useState('');
  const [appliedDiscount, setAppliedDiscount] = useState<number>(0);
  const [promoError, setPromoError] = useState('');

  // Product Quick-View / Detail Modal
  const [selectedProduct, setSelectedProduct] = useState<FashionProduct | null>(null);
  const [modalSize, setModalSize] = useState<string>('');
  const [modalColor, setModalColor] = useState<string>('');
  const [modalQty, setModalQty] = useState<number>(1);
  const [modalActiveImg, setModalActiveImg] = useState<string>('');
  const [sizeGuideOpen, setSizeGuideOpen] = useState(false);

  // Checkout Modal State
  const [checkoutOpen, setCheckoutOpen] = useState(false);
  const [checkoutStep, setCheckoutStep] = useState<number>(1);
  const [orderComplete, setOrderComplete] = useState(false);
  const [orderId, setOrderId] = useState('');
  const [checkoutForm, setCheckoutForm] = useState({
    name: 'Aarav Sharma',
    email: 'aarav.sharma@example.com',
    phone: '+91 98201 54321',
    address: 'Flat 402, Signature Palms, Bandra West',
    city: 'Mumbai',
    state: 'Maharashtra',
    pincode: '400050',
    shippingMethod: 'free',
    paymentMethod: 'upi'
  });

  // Style Assist Chat State
  const [chatOpen, setChatOpen] = useState(false);
  const [chatMessages, setChatMessages] = useState<
    { sender: 'bot' | 'user'; text: string; actionButtons?: string[] }[]
  >([
    {
      sender: 'bot',
      text: 'Hello! I am your NOVA Stylist. Need assistance with sizing, new drops, or tracking your order?',
      actionButtons: ['Find My Size', 'Track Order', 'Recommend For Me', 'Talk To Us']
    }
  ]);
  const [chatInput, setChatInput] = useState('');

  // Filters State
  const [filterDrawerOpen, setFilterDrawerOpen] = useState(false);
  const [selectedSizes, setSelectedSizes] = useState<string[]>([]);
  const [selectedColors, setSelectedColors] = useState<string[]>([]);
  const [priceMax, setPriceMax] = useState<number>(7000);

  // Toast Notification
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3000);
  };

  // Flash Sale Countdown Timer
  const [timeLeft, setTimeLeft] = useState({
    hours: 14,
    minutes: 42,
    seconds: 19
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) return { ...prev, seconds: prev.seconds - 1 };
        if (prev.minutes > 0) return { ...prev, minutes: 59, seconds: 59 };
        if (prev.hours > 0) return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        return { hours: 24, minutes: 0, seconds: 0 };
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // Hero Auto-Cycle (2.8 seconds)
  useEffect(() => {
    if (isHeroHovered) return;
    heroTimerRef.current = setInterval(() => {
      setHeroSlide(prev => (prev + 1) % FASHION_HERO_SLIDES.length);
    }, 2800);

    return () => {
      if (heroTimerRef.current) clearInterval(heroTimerRef.current);
    };
  }, [isHeroHovered]);

  const handleNextSlide = () => {
    setHeroSlide(prev => (prev + 1) % FASHION_HERO_SLIDES.length);
  };

  const handlePrevSlide = () => {
    setHeroSlide(prev => (prev - 1 + FASHION_HERO_SLIDES.length) % FASHION_HERO_SLIDES.length);
  };

  // Wishlist toggle
  const toggleWishlist = (productId: string, e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    if (wishlist.includes(productId)) {
      setWishlist(wishlist.filter(id => id !== productId));
      showToast('Removed from Wishlist');
    } else {
      setWishlist([...wishlist, productId]);
      showToast('Added to Wishlist ❤️');
    }
  };

  // Open Product Modal
  const handleOpenProduct = (product: FashionProduct) => {
    setSelectedProduct(product);
    setModalSize(product.sizes[0] || 'M');
    setModalColor(product.colors[0]?.name || 'Standard');
    setModalQty(1);
    setModalActiveImg(product.image);
  };

  // Quick Add to Cart
  const handleQuickAdd = (product: FashionProduct, e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    const size = product.sizes[0] || 'M';
    const color = product.colors[0]?.name || 'Standard';

    setCart(prev => {
      const existing = prev.find(
        item =>
          item.product.id === product.id &&
          item.selectedSize === size &&
          item.selectedColor === color
      );
      if (existing) {
        return prev.map(item =>
          item === existing ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, { product, selectedSize: size, selectedColor: color, quantity: 1 }];
    });
    showToast(`Added ${product.name} to Bag! 🛍️`);
  };

  // Add from modal
  const handleModalAddToCart = () => {
    if (!selectedProduct) return;
    setCart(prev => {
      const existing = prev.find(
        item =>
          item.product.id === selectedProduct.id &&
          item.selectedSize === modalSize &&
          item.selectedColor === modalColor
      );
      if (existing) {
        return prev.map(item =>
          item === existing ? { ...item, quantity: item.quantity + modalQty } : item
        );
      }
      return [
        ...prev,
        {
          product: selectedProduct,
          selectedSize: modalSize,
          selectedColor: modalColor,
          quantity: modalQty
        }
      ];
    });
    showToast(`Added to your Bag!`);
    setSelectedProduct(null);
  };

  // Update Cart Quantity
  const handleUpdateQty = (index: number, delta: number) => {
    setCart(prev =>
      prev
        .map((item, i) => {
          if (i === index) {
            const newQty = item.quantity + delta;
            return newQty > 0 ? { ...item, quantity: newQty } : null;
          }
          return item;
        })
        .filter(Boolean) as CartItem[]
    );
  };

  const handleRemoveCartItem = (index: number) => {
    setCart(prev => prev.filter((_, i) => i !== index));
    showToast('Item removed from Bag');
  };

  // Promo code apply
  const handleApplyPromo = () => {
    if (promoCode.trim().toUpperCase() === 'NOVA10') {
      setAppliedDiscount(0.1);
      setPromoError('');
      showToast('10% Discount Applied! 🎉');
    } else {
      setPromoError('Invalid coupon code. Try NOVA10');
    }
  };

  // Cart Calculations
  const cartSubtotal = cart.reduce((acc, item) => acc + item.product.price * item.quantity, 0);
  const discountAmount = Math.round(cartSubtotal * appliedDiscount);
  const deliveryFee = cartSubtotal > 1999 || cartSubtotal === 0 ? 0 : 199;
  const cartTotal = cartSubtotal - discountAmount + deliveryFee;
  const cartCount = cart.reduce((acc, item) => acc + item.quantity, 0);

  // Chat Responses
  const handleSendChatMessage = (textToSend?: string) => {
    const query = textToSend || chatInput;
    if (!query.trim()) return;

    const userMsg = { sender: 'user' as const, text: query };
    setChatMessages(prev => [...prev, userMsg]);
    setChatInput('');

    setTimeout(() => {
      let botReply = '';
      const q = query.toLowerCase();

      if (q.includes('size')) {
        botReply =
          'Our tees and hoodies feature a contemporary oversized drape. If you prefer a tailored fit, we suggest ordering one size down from your usual size.';
      } else if (q.includes('track') || q.includes('order')) {
        botReply =
          'Orders are dispatched within 24 hours via Bluedart Express with tracking details sent to your SMS & email.';
      } else if (q.includes('recommend') || q.includes('style')) {
        botReply =
          'Top picks this week: The Heavyweight Boxy Tee paired with Parachute Tactical Pants or our Cybernetic Varsity Bomber.';
      } else {
        botReply =
          'Thanks for reaching out! A dedicated NOVA stylist will assist you shortly, or feel free to explore our curated drops.';
      }

      setChatMessages(prev => [
        ...prev,
        {
          sender: 'bot',
          text: botReply,
          actionButtons: ['Explore Men', 'Explore Women', 'View Sale']
        }
      ]);
    }, 600);
  };

  // Filter & Search Products
  const filteredProducts = FASHION_PRODUCTS.filter(product => {
    // Category filter
    if (activeCategory !== 'All') {
      if (activeCategory === 'Sale') {
        if (!product.isSale && !product.discountBadge) return false;
      } else if (activeCategory === 'New In') {
        if (!product.isNewArrival) return false;
      } else if (product.category !== activeCategory) {
        return false;
      }
    }

    // Subcategory filter
    if (activeSubcategory !== 'All' && product.subcategory !== activeSubcategory) {
      return false;
    }

    // Search query
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      const matchName = product.name.toLowerCase().includes(q);
      const matchCat = product.category.toLowerCase().includes(q);
      const matchSub = product.subcategory.toLowerCase().includes(q);
      const matchDesc = product.description.toLowerCase().includes(q);
      if (!matchName && !matchCat && !matchSub && !matchDesc) return false;
    }

    // Price Max filter
    if (product.price > priceMax) return false;

    // Size filter
    if (selectedSizes.length > 0) {
      const hasSize = product.sizes.some(s => selectedSizes.includes(s));
      if (!hasSize) return false;
    }

    return true;
  });

  // Sort products
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (selectedSort === 'price-low') return a.price - b.price;
    if (selectedSort === 'price-high') return b.price - a.price;
    if (selectedSort === 'rating') return b.rating - a.rating;
    if (selectedSort === 'newest') return (b.isNewArrival ? 1 : 0) - (a.isNewArrival ? 1 : 0);
    return 0; // featured
  });

  // Available Subcategories based on active Category
  const availableSubcategories = Array.from(
    new Set(
      FASHION_PRODUCTS.filter(p => activeCategory === 'All' || p.category === activeCategory).map(
        p => p.subcategory
      )
    )
  );

  return (
    <div
      id="nova-fashion-root"
      className="w-full h-full bg-[#0A0A0A] text-stone-100 font-sans antialiased overflow-y-auto selection:bg-white selection:text-black flex flex-col relative"
    >
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[999] bg-white text-black px-5 py-2.5 rounded-full text-xs font-bold shadow-2xl tracking-wide flex items-center gap-2 animate-bounce border border-stone-200">
          <Sparkles className="w-4 h-4 text-amber-600" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Top Announcement Bar */}
      <div className="bg-gradient-to-r from-stone-900 via-stone-800 to-stone-900 border-b border-stone-800 py-1.5 px-4 text-center text-[10px] sm:text-xs font-medium tracking-widest uppercase text-stone-300 flex items-center justify-center gap-3">
        <span className="hidden sm:inline text-amber-400 font-bold">LIMITED DROP</span>
        <span>FREE EXPRESS DELIVERY ON ORDERS OVER ₹1,999</span>
        <span className="text-stone-500">•</span>
        <span>
          CODE <strong className="text-white bg-stone-700/80 px-1.5 py-0.5 rounded">NOVA10</strong>{' '}
          FOR 10% OFF
        </span>
        <span className="hidden md:inline text-stone-500">•</span>
        <span className="hidden md:inline">15-DAY HASSLE-FREE RETURNS</span>
      </div>

      {/* Sticky Luxury Header */}
      <header className="sticky top-0 z-40 bg-[#0A0A0A]/90 backdrop-blur-md border-b border-stone-800 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 sm:h-20 flex items-center justify-between">
          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-stone-300 hover:text-white transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>

          {/* Brand Logo */}
          <div
            onClick={() => {
              setActiveCategory('All');
              setActiveSubcategory('All');
              const el = document.getElementById('nova-fashion-root');
              if (el) el.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="cursor-pointer flex flex-col items-center md:items-start group"
          >
            <span className="font-serif tracking-[0.25em] text-2xl sm:text-3xl font-black text-white group-hover:opacity-80 transition-opacity">
              NOVA
            </span>
            <span className="text-[9px] tracking-[0.3em] uppercase text-stone-400 -mt-1 font-mono">
              Define Your Style
            </span>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-8 text-xs font-semibold tracking-wider uppercase text-stone-300">
            {['New In', 'Men', 'Women', 'Streetwear', 'Collections', 'Sale'].map(navItem => {
              const isSelected =
                (navItem === 'New In' && activeCategory === 'New In') ||
                (navItem === 'Sale' && activeCategory === 'Sale') ||
                activeCategory === navItem;

              return (
                <button
                  key={navItem}
                  onClick={() => {
                    if (navItem === 'Collections') {
                      const el = document.getElementById('categories-section');
                      if (el) el.scrollIntoView({ behavior: 'smooth' });
                      return;
                    }
                    setActiveCategory(navItem);
                    setActiveSubcategory('All');
                    const el = document.getElementById('catalog-section');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className={`relative py-1 transition-colors hover:text-white ${
                    isSelected ? 'text-white font-bold' : ''
                  } ${navItem === 'Sale' ? 'text-rose-400 font-bold' : ''}`}
                >
                  <span>{navItem}</span>
                  {isSelected && (
                    <span className="absolute bottom-0 left-0 w-full h-[2px] bg-white rounded-full"></span>
                  )}
                </button>
              );
            })}
          </nav>

          {/* Header Action Icons */}
          <div className="flex items-center gap-2 sm:gap-4">
            {/* Search Trigger */}
            <button
              onClick={() => setSearchOpen(true)}
              className="p-2 text-stone-300 hover:text-white transition-colors"
              title="Search products"
            >
              <Search className="w-5 h-5" />
            </button>

            {/* Wishlist Trigger */}
            <button
              onClick={() => setWishlistDrawerOpen(true)}
              className="p-2 text-stone-300 hover:text-white transition-colors relative"
              title="Wishlist"
            >
              <Heart className="w-5 h-5" />
              {wishlist.length > 0 && (
                <span className="absolute top-1 right-1 bg-rose-600 text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                  {wishlist.length}
                </span>
              )}
            </button>

            {/* Shopping Bag Trigger */}
            <button
              onClick={() => setCartDrawerOpen(true)}
              className="p-2 text-stone-300 hover:text-white transition-colors relative bg-stone-900 border border-stone-800 rounded-full px-3 py-1.5 flex items-center gap-2"
              title="Shopping Bag"
            >
              <ShoppingBag className="w-4 h-4 text-white" />
              <span className="text-xs font-bold text-white">{cartCount}</span>
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-stone-950 border-b border-stone-800 px-6 py-6 space-y-4 animate-fadeIn">
            <div className="grid grid-cols-2 gap-3 pb-4 border-b border-stone-800 text-xs font-bold uppercase tracking-wider">
              {['New In', 'Men', 'Women', 'Streetwear', 'Accessories', 'Sale'].map(cat => (
                <button
                  key={cat}
                  onClick={() => {
                    setActiveCategory(cat);
                    setActiveSubcategory('All');
                    setMobileMenuOpen(false);
                    const el = document.getElementById('catalog-section');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className={`p-3 rounded-lg text-left border ${
                    activeCategory === cat
                      ? 'bg-white text-black border-white'
                      : 'bg-stone-900 text-stone-200 border-stone-800 hover:bg-stone-800'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
            <div className="flex items-center justify-between text-xs text-stone-400 pt-2">
              <span
                onClick={() => {
                  setMobileMenuOpen(false);
                  setChatOpen(true);
                }}
                className="cursor-pointer hover:text-white"
              >
                NOVA Style Assist
              </span>
              <span className="font-mono">INR ₹ (India)</span>
            </div>
          </div>
        )}
      </header>

      {/* 2. DYNAMIC 7-SLIDE HERO CAROUSEL */}
      <section
        className="relative bg-black text-white overflow-hidden select-none border-b border-stone-800"
        onMouseEnter={() => setIsHeroHovered(true)}
        onMouseLeave={() => setIsHeroHovered(false)}
        onTouchStart={() => setIsHeroHovered(true)}
        onTouchEnd={() => setIsHeroHovered(false)}
      >
        <div className="relative aspect-[16/10] sm:aspect-[21/9] min-h-[420px] sm:min-h-[520px] flex items-center">
          {/* All 7 Slides with smooth fade + horizontal slide */}
          {FASHION_HERO_SLIDES.map((slide, idx) => {
            const isActive = heroSlide === idx;
            return (
              <div
                key={slide.id}
                className={`absolute inset-0 w-full h-full flex items-center transition-all duration-700 ease-out ${
                  isActive
                    ? 'opacity-100 translate-x-0 pointer-events-auto z-10'
                    : 'opacity-0 translate-x-12 pointer-events-none z-0'
                }`}
              >
                {/* Background Image with subtle ken-burns zoom */}
                <img
                  src={slide.image}
                  alt={slide.title}
                  className={`absolute inset-0 w-full h-full object-cover opacity-55 transition-transform duration-1000 ease-out ${
                    isActive ? 'scale-105' : 'scale-100'
                  }`}
                />
                {/* Editorial Gradients */}
                <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/60 to-transparent"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>

                {/* Hero Slide Content */}
                <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-12 lg:px-16 py-12 space-y-4 max-w-2xl">
                  <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 border border-white/20 text-white text-[11px] font-bold tracking-widest uppercase backdrop-blur-md">
                    <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                    <span>{slide.badge}</span>
                  </div>

                  <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight text-white">
                    {slide.title}
                  </h1>

                  <p className="text-stone-300 text-xs sm:text-sm leading-relaxed max-w-lg">
                    {slide.subtitle}
                  </p>

                  <div className="flex items-center gap-3 pt-3">
                    <button
                      onClick={() => {
                        if (slide.targetCategory) {
                          setActiveCategory(slide.targetCategory);
                        }
                        const el = document.getElementById('catalog-section');
                        if (el) el.scrollIntoView({ behavior: 'smooth' });
                      }}
                      className="px-6 sm:px-8 py-3.5 rounded-full bg-white text-black hover:bg-stone-200 text-xs font-extrabold uppercase tracking-widest transition-all shadow-xl active:scale-95 flex items-center gap-2 cursor-pointer"
                    >
                      <span>{slide.cta}</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>

                    <button
                      onClick={() => handleOpenProduct(FASHION_PRODUCTS[idx % FASHION_PRODUCTS.length])}
                      className="px-5 sm:px-6 py-3.5 rounded-full bg-black/40 hover:bg-white/20 backdrop-blur-md border border-white/20 text-white text-xs font-bold uppercase tracking-wider transition-all cursor-pointer"
                    >
                      Quick Look
                    </button>
                  </div>
                </div>
              </div>
            );
          })}

          {/* Left / Right Arrow Controls */}
          <button
            onClick={handlePrevSlide}
            className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 z-20 p-2.5 sm:p-3.5 rounded-full bg-black/60 hover:bg-white hover:text-black text-white backdrop-blur-md border border-white/10 transition-all active:scale-90 shadow-2xl cursor-pointer"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <button
            onClick={handleNextSlide}
            className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 z-20 p-2.5 sm:p-3.5 rounded-full bg-black/60 hover:bg-white hover:text-black text-white backdrop-blur-md border border-white/10 transition-all active:scale-90 shadow-2xl cursor-pointer"
            aria-label="Next slide"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          {/* 7 Slide Indicator Dots */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2 bg-black/70 backdrop-blur-md py-2 px-4 rounded-full border border-white/10">
            {FASHION_HERO_SLIDES.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setHeroSlide(idx)}
                className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                  heroSlide === idx ? 'w-8 bg-white' : 'w-2 bg-stone-600 hover:bg-stone-400'
                }`}
                title={`Slide ${idx + 1}`}
                aria-label={`Slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* 6. CATEGORY SHOWCASE SECTIONS */}
      <section id="categories-section" className="py-12 sm:py-16 bg-[#0E0E0E] border-b border-stone-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="flex items-end justify-between border-b border-stone-800 pb-4">
            <div>
              <span className="text-stone-400 text-xs font-mono tracking-widest uppercase">
                Curated Architecture
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold tracking-tight text-white">
                Explore Collections
              </h2>
            </div>
            <button
              onClick={() => {
                setActiveCategory('All');
                const el = document.getElementById('catalog-section');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
              className="text-xs font-bold text-stone-300 hover:text-white uppercase tracking-wider flex items-center gap-1"
            >
              <span>View All 48 Pieces</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {FASHION_CATEGORIES.map(cat => (
              <div
                key={cat.id}
                onClick={() => {
                  if (cat.title === 'SALE') {
                    setActiveCategory('Sale');
                  } else if (cat.title === 'NEW ARRIVALS') {
                    setActiveCategory('New In');
                  } else {
                    setActiveCategory(cat.filterKey);
                  }
                  setActiveSubcategory('All');
                  const el = document.getElementById('catalog-section');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                className="group relative aspect-[4/5] rounded-2xl overflow-hidden cursor-pointer border border-stone-800 bg-stone-900 shadow-xl"
              >
                <img
                  src={cat.image}
                  alt={cat.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-70 group-hover:opacity-85"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent"></div>

                <div className="absolute bottom-5 left-5 right-5 space-y-1">
                  <h3 className="font-serif text-lg sm:text-2xl font-bold text-white tracking-wide">
                    {cat.title}
                  </h3>
                  <p className="text-stone-400 text-[11px] sm:text-xs line-clamp-1">{cat.subtitle}</p>
                  <div className="pt-2 flex items-center gap-1.5 text-xs font-bold text-white group-hover:translate-x-1 transition-transform">
                    <span>Shop Now</span>
                    <ArrowRight className="w-3.5 h-3.5 text-amber-400" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. TRENDING SECTION ("TRENDING NOW" CAROUSEL) */}
      <section className="py-12 sm:py-16 bg-black border-b border-stone-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-2.5 h-2.5 rounded-full bg-rose-500 animate-pulse"></div>
              <div>
                <span className="text-rose-400 text-xs font-mono font-bold tracking-widest uppercase">
                  Real-time Demand
                </span>
                <h2 className="font-serif text-2xl sm:text-3xl font-bold text-white">
                  Trending Now
                </h2>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={() => {
                  const el = document.getElementById('trending-scroll-container');
                  if (el) el.scrollBy({ left: -320, behavior: 'smooth' });
                }}
                className="p-2 rounded-full border border-stone-800 bg-stone-900 hover:bg-stone-800 text-stone-300 hover:text-white transition-colors"
                title="Scroll Left"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={() => {
                  const el = document.getElementById('trending-scroll-container');
                  if (el) el.scrollBy({ left: 320, behavior: 'smooth' });
                }}
                className="p-2 rounded-full border border-stone-800 bg-stone-900 hover:bg-stone-800 text-stone-300 hover:text-white transition-colors"
                title="Scroll Right"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Horizontal Smooth Carousel */}
          <div
            id="trending-scroll-container"
            className="flex items-stretch gap-4 sm:gap-6 overflow-x-auto pb-4 pt-1 no-scrollbar scroll-smooth"
          >
            {FASHION_PRODUCTS.filter(p => p.isTrending).map(product => (
              <div
                key={product.id}
                onClick={() => handleOpenProduct(product)}
                className="min-w-[240px] sm:min-w-[280px] max-w-[280px] bg-stone-950 border border-stone-800/80 rounded-2xl overflow-hidden group cursor-pointer flex flex-col justify-between hover:border-stone-600 transition-all duration-300"
              >
                <div className="relative aspect-[3/4] bg-stone-900 overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  {/* Badges */}
                  <div className="absolute top-3 left-3 flex flex-col gap-1.5">
                    {product.badge && (
                      <span className="bg-white text-black text-[10px] font-black uppercase px-2 py-0.5 rounded tracking-wider shadow">
                        {product.badge}
                      </span>
                    )}
                    {product.discountBadge && (
                      <span className="bg-rose-600 text-white text-[10px] font-black uppercase px-2 py-0.5 rounded shadow">
                        {product.discountBadge}
                      </span>
                    )}
                  </div>

                  {/* Wishlist Heart Button */}
                  <button
                    onClick={e => toggleWishlist(product.id, e)}
                    className="absolute top-3 right-3 p-2 rounded-full bg-black/60 backdrop-blur-md text-stone-300 hover:text-rose-500 transition-colors"
                  >
                    <Heart
                      className={`w-4 h-4 ${
                        wishlist.includes(product.id) ? 'fill-rose-500 text-rose-500' : ''
                      }`}
                    />
                  </button>

                  {/* Quick Add overlay button on hover */}
                  <div className="absolute bottom-3 left-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
                    <button
                      onClick={e => handleQuickAdd(product, e)}
                      className="w-full py-2.5 rounded-xl bg-white text-black text-xs font-bold uppercase tracking-wider hover:bg-stone-200 transition-colors shadow-xl flex items-center justify-center gap-1.5"
                    >
                      <ShoppingBag className="w-3.5 h-3.5" />
                      <span>Quick Add</span>
                    </button>
                  </div>
                </div>

                <div className="p-4 space-y-1.5 flex-1 flex flex-col justify-between">
                  <div>
                    <span className="text-[10px] font-mono uppercase text-stone-500 tracking-wider">
                      {product.subcategory}
                    </span>
                    <h3 className="text-sm font-semibold text-stone-100 line-clamp-1 group-hover:text-white">
                      {product.name}
                    </h3>
                  </div>

                  <div className="flex items-center justify-between pt-1">
                    <div className="flex items-baseline gap-2">
                      <span className="text-sm font-bold text-white">₹{product.price}</span>
                      {product.originalPrice > product.price && (
                        <span className="text-xs text-stone-500 line-through">
                          ₹{product.originalPrice}
                        </span>
                      )}
                    </div>
                    <div className="flex items-center gap-1 text-[11px] text-amber-400 font-semibold">
                      <Star className="w-3 h-3 fill-amber-400" />
                      <span>{product.rating}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. FLASH SALE BANNER WITH LIVE COUNTDOWN */}
      <section className="relative overflow-hidden bg-gradient-to-r from-stone-900 via-rose-950 to-stone-900 border-y border-rose-900/40 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-3 text-center md:text-left max-w-xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-500/20 border border-rose-500/30 text-rose-300 text-xs font-bold uppercase tracking-wider">
              <Flame className="w-4 h-4 text-rose-400" />
              <span>FLASH DROP • UP TO 50% OFF</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Limited time. Unlimited style.
            </h2>
            <p className="text-stone-300 text-xs sm:text-sm">
              Selected premium silhouettes, heavy hoodies, and tailored coats marked down for a
              strictly limited release window.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-6">
            {/* Countdown Blocks */}
            <div className="flex items-center gap-2 font-mono">
              <div className="bg-black/70 backdrop-blur-md border border-rose-500/30 rounded-xl px-3.5 py-2.5 text-center min-w-[60px]">
                <span className="text-2xl font-bold text-white">
                  {String(timeLeft.hours).padStart(2, '0')}
                </span>
                <span className="block text-[9px] text-stone-400 uppercase">Hours</span>
              </div>
              <span className="text-xl text-rose-400 font-bold">:</span>
              <div className="bg-black/70 backdrop-blur-md border border-rose-500/30 rounded-xl px-3.5 py-2.5 text-center min-w-[60px]">
                <span className="text-2xl font-bold text-white">
                  {String(timeLeft.minutes).padStart(2, '0')}
                </span>
                <span className="block text-[9px] text-stone-400 uppercase">Mins</span>
              </div>
              <span className="text-xl text-rose-400 font-bold">:</span>
              <div className="bg-black/70 backdrop-blur-md border border-rose-500/30 rounded-xl px-3.5 py-2.5 text-center min-w-[60px]">
                <span className="text-2xl font-bold text-rose-400">
                  {String(timeLeft.seconds).padStart(2, '0')}
                </span>
                <span className="block text-[9px] text-stone-400 uppercase">Secs</span>
              </div>
            </div>

            {/* Shop Sale Button */}
            <button
              onClick={() => {
                setActiveCategory('Sale');
                const el = document.getElementById('catalog-section');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
              className="px-8 py-3.5 rounded-full bg-white text-black hover:bg-stone-200 text-xs font-black uppercase tracking-wider transition-all shadow-xl active:scale-95 whitespace-nowrap"
            >
              Shop Flash Sale
            </button>
          </div>
        </div>
      </section>

      {/* 8. NEW ARRIVALS ("JUST DROPPED") EDITORIAL GRID */}
      <section className="py-12 sm:py-16 bg-[#0B0B0B] border-b border-stone-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="flex items-end justify-between">
            <div>
              <span className="text-stone-400 text-xs font-mono tracking-widest uppercase">
                Fresh From The Runway
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-white">Just Dropped</h2>
            </div>
            <button
              onClick={() => {
                setActiveCategory('New In');
                const el = document.getElementById('catalog-section');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
              className="text-xs font-bold text-stone-300 hover:text-white uppercase tracking-wider flex items-center gap-1"
            >
              <span>Explore New In</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            {FASHION_PRODUCTS.filter(p => p.isNewArrival)
              .slice(0, 4)
              .map(product => (
                <div
                  key={product.id}
                  onClick={() => handleOpenProduct(product)}
                  className="bg-stone-950 border border-stone-800 rounded-2xl overflow-hidden group cursor-pointer hover:border-stone-500 transition-all duration-300 flex flex-col justify-between"
                >
                  <div className="relative aspect-[3/4] bg-stone-900 overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                    <span className="absolute top-3 left-3 bg-white text-black text-[10px] font-black uppercase px-2 py-0.5 rounded shadow">
                      NEW DROP
                    </span>
                    <button
                      onClick={e => toggleWishlist(product.id, e)}
                      className="absolute top-3 right-3 p-2 rounded-full bg-black/60 backdrop-blur-md text-stone-300 hover:text-rose-500 transition-colors"
                    >
                      <Heart
                        className={`w-4 h-4 ${
                          wishlist.includes(product.id) ? 'fill-rose-500 text-rose-500' : ''
                        }`}
                      />
                    </button>
                  </div>
                  <div className="p-4 space-y-1">
                    <span className="text-[10px] font-mono uppercase text-stone-500">
                      {product.category}
                    </span>
                    <h3 className="text-xs sm:text-sm font-semibold text-white line-clamp-1">
                      {product.name}
                    </h3>
                    <div className="flex items-center justify-between pt-1">
                      <span className="text-sm font-bold text-white">₹{product.price}</span>
                      <span className="text-[11px] text-stone-400">{product.sizes.join(' ')}</span>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </section>

      {/* 4 & 12. FULL PRODUCT CATALOG WITH FILTER & SORT */}
      <section id="catalog-section" className="py-14 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          {/* Main Category Tabs */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-stone-800 pb-4">
            <div className="flex items-center gap-2 overflow-x-auto no-scrollbar py-1">
              {['All', 'Men', 'Women', 'Streetwear', 'Accessories', 'New In', 'Sale'].map(cat => (
                <button
                  key={cat}
                  onClick={() => {
                    setActiveCategory(cat);
                    setActiveSubcategory('All');
                  }}
                  className={`px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider whitespace-nowrap transition-all ${
                    activeCategory === cat
                      ? 'bg-white text-black shadow-lg scale-105'
                      : 'bg-stone-900 text-stone-400 hover:text-white border border-stone-800'
                  } ${cat === 'Sale' ? 'text-rose-400' : ''}`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Sort & Filter Controls */}
            <div className="flex items-center gap-3">
              <button
                onClick={() => setFilterDrawerOpen(true)}
                className="px-3.5 py-2 rounded-full bg-stone-900 border border-stone-800 text-xs font-bold text-stone-300 hover:text-white flex items-center gap-2"
              >
                <SlidersHorizontal className="w-3.5 h-3.5" />
                <span>Filters</span>
                {(selectedSizes.length > 0 || selectedColors.length > 0 || priceMax < 7000) && (
                  <span className="w-2 h-2 rounded-full bg-amber-400"></span>
                )}
              </button>

              {/* Sort Dropdown */}
              <div className="relative">
                <select
                  value={selectedSort}
                  onChange={e => setSelectedSort(e.target.value)}
                  className="appearance-none bg-stone-900 border border-stone-800 text-stone-300 text-xs font-bold rounded-full px-4 py-2 pr-8 cursor-pointer focus:outline-none focus:border-stone-500"
                >
                  <option value="featured">Featured Drop</option>
                  <option value="newest">Newest First</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="rating">Highest Rated</option>
                </select>
                <ChevronDown className="w-3.5 h-3.5 text-stone-400 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
              </div>
            </div>
          </div>

          {/* Subcategory Pills */}
          {availableSubcategories.length > 1 && (
            <div className="flex items-center gap-2 overflow-x-auto no-scrollbar py-1 text-xs">
              <button
                onClick={() => setActiveSubcategory('All')}
                className={`px-3 py-1 rounded-md text-[11px] font-semibold transition-colors ${
                  activeSubcategory === 'All'
                    ? 'bg-stone-800 text-white'
                    : 'text-stone-400 hover:text-stone-200'
                }`}
              >
                All Subcategories
              </button>
              {availableSubcategories.map(sub => (
                <button
                  key={sub}
                  onClick={() => setActiveSubcategory(sub)}
                  className={`px-3 py-1 rounded-md text-[11px] font-semibold transition-colors whitespace-nowrap ${
                    activeSubcategory === sub
                      ? 'bg-stone-800 text-white'
                      : 'text-stone-400 hover:text-stone-200'
                  }`}
                >
                  {sub}
                </button>
              ))}
            </div>
          )}

          {/* Catalog Count */}
          <div className="text-xs text-stone-400 flex items-center justify-between font-mono">
            <span>SHOWING {sortedProducts.length} DESIGNS</span>
            {searchQuery && <span>SEARCH: "{searchQuery}"</span>}
          </div>

          {/* Product Grid (48+ Items) */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
            {sortedProducts.map(product => (
              <div
                key={product.id}
                onClick={() => handleOpenProduct(product)}
                className="bg-stone-950 border border-stone-800/80 rounded-2xl overflow-hidden group cursor-pointer flex flex-col justify-between hover:border-stone-500 hover:shadow-2xl transition-all duration-300"
              >
                {/* Image Wrapper */}
                <div className="relative aspect-[3/4] bg-stone-900 overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />

                  {/* Badges */}
                  <div className="absolute top-3 left-3 flex flex-col gap-1.5 z-10">
                    {product.badge && (
                      <span className="bg-white text-black text-[9px] sm:text-[10px] font-black uppercase px-2 py-0.5 rounded shadow tracking-wider">
                        {product.badge}
                      </span>
                    )}
                    {product.discountBadge && (
                      <span className="bg-rose-600 text-white text-[9px] sm:text-[10px] font-black uppercase px-2 py-0.5 rounded shadow">
                        {product.discountBadge}
                      </span>
                    )}
                  </div>

                  {/* Wishlist Button */}
                  <button
                    onClick={e => toggleWishlist(product.id, e)}
                    className="absolute top-3 right-3 p-2 rounded-full bg-black/60 backdrop-blur-md text-stone-300 hover:text-rose-500 transition-colors z-10"
                  >
                    <Heart
                      className={`w-4 h-4 ${
                        wishlist.includes(product.id) ? 'fill-rose-500 text-rose-500' : ''
                      }`}
                    />
                  </button>

                  {/* Hover Quick Add Action */}
                  <div className="absolute bottom-3 left-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity z-10 hidden sm:block">
                    <button
                      onClick={e => handleQuickAdd(product, e)}
                      className="w-full py-2.5 rounded-xl bg-white text-black text-xs font-bold uppercase tracking-wider hover:bg-stone-200 transition-colors shadow-2xl flex items-center justify-center gap-1.5"
                    >
                      <ShoppingBag className="w-3.5 h-3.5" />
                      <span>Quick Add</span>
                    </button>
                  </div>
                </div>

                {/* Info Area */}
                <div className="p-4 space-y-2 flex-1 flex flex-col justify-between">
                  <div>
                    <span className="text-[10px] font-mono uppercase text-stone-500 tracking-wider">
                      {product.category} • {product.subcategory}
                    </span>
                    <h3 className="text-xs sm:text-sm font-semibold text-stone-100 line-clamp-1 group-hover:text-white">
                      {product.name}
                    </h3>
                  </div>

                  {/* Color Swatch Dots */}
                  {product.colors.length > 1 && (
                    <div className="flex items-center gap-1.5 pt-0.5">
                      {product.colors.map(col => (
                        <span
                          key={col.name}
                          style={{ backgroundColor: col.hex }}
                          className="w-2.5 h-2.5 rounded-full border border-stone-700"
                          title={col.name}
                        />
                      ))}
                    </div>
                  )}

                  <div className="flex items-center justify-between pt-1 border-t border-stone-800/60">
                    <div className="flex items-baseline gap-2">
                      <span className="text-sm font-bold text-white">₹{product.price}</span>
                      {product.originalPrice > product.price && (
                        <span className="text-[11px] text-stone-500 line-through">
                          ₹{product.originalPrice}
                        </span>
                      )}
                    </div>
                    <div className="flex items-center gap-1 text-[11px] text-amber-400 font-semibold">
                      <Star className="w-3 h-3 fill-amber-400" />
                      <span>{product.rating}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {sortedProducts.length === 0 && (
            <div className="text-center py-20 bg-stone-900/40 rounded-3xl border border-stone-800 space-y-4">
              <Package className="w-12 h-12 text-stone-600 mx-auto" />
              <h3 className="text-lg font-bold text-white">No products found</h3>
              <p className="text-xs text-stone-400">Try adjusting your filters or search keywords.</p>
              <button
                onClick={() => {
                  setActiveCategory('All');
                  setActiveSubcategory('All');
                  setSearchQuery('');
                  setSelectedSizes([]);
                  setPriceMax(7000);
                }}
                className="px-6 py-2 rounded-full bg-white text-black text-xs font-bold uppercase"
              >
                Reset All Filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* 11. SEARCH MODAL */}
      {searchOpen && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-start justify-center pt-20 px-4 animate-fadeIn">
          <div className="bg-stone-950 border border-stone-800 rounded-3xl max-w-2xl w-full p-6 space-y-6 shadow-2xl">
            <div className="flex items-center justify-between border-b border-stone-800 pb-4">
              <div className="flex items-center gap-3 flex-1">
                <Search className="w-5 h-5 text-stone-400" />
                <input
                  type="text"
                  placeholder="Search tees, hoodies, cargos, blazers, bags..."
                  value={searchQuery}
                  onChange={e => setSearchQuery(e.target.value)}
                  autoFocus
                  className="bg-transparent text-white placeholder-stone-500 text-sm focus:outline-none w-full"
                />
              </div>
              {searchQuery && (
                <button onClick={() => setSearchQuery('')} className="text-stone-400 text-xs mr-3">
                  Clear
                </button>
              )}
              <button
                onClick={() => setSearchOpen(false)}
                className="p-1.5 rounded-full bg-stone-900 text-stone-400 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Quick Suggestions */}
            <div className="space-y-3">
              <span className="text-[11px] font-mono uppercase tracking-wider text-stone-500">
                Popular Searches
              </span>
              <div className="flex flex-wrap gap-2">
                {POPULAR_SEARCHES.map(item => (
                  <button
                    key={item}
                    onClick={() => {
                      setSearchQuery(item);
                      setSearchOpen(false);
                      const el = document.getElementById('catalog-section');
                      if (el) el.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="px-3 py-1 rounded-full bg-stone-900 border border-stone-800 text-xs text-stone-300 hover:text-white hover:border-stone-600"
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>

            {/* Recent Searches */}
            <div className="space-y-3 pt-2">
              <span className="text-[11px] font-mono uppercase tracking-wider text-stone-500">
                Recent Searches
              </span>
              <div className="flex flex-wrap gap-2">
                {RECENT_SEARCHES.map(item => (
                  <button
                    key={item}
                    onClick={() => {
                      setSearchQuery(item);
                      setSearchOpen(false);
                      const el = document.getElementById('catalog-section');
                      if (el) el.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="px-3 py-1 rounded-full bg-stone-900/60 text-xs text-stone-400 hover:text-white"
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* 5. PRODUCT DETAIL MODAL */}
      {selectedProduct && (
        <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 overflow-y-auto animate-fadeIn">
          <div className="bg-stone-950 border border-stone-800 rounded-3xl max-w-4xl w-full overflow-hidden shadow-2xl my-auto relative">
            <button
              onClick={() => setSelectedProduct(null)}
              className="absolute top-4 right-4 z-20 p-2 rounded-full bg-stone-900/80 backdrop-blur-md text-stone-400 hover:text-white border border-stone-800"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="grid grid-cols-1 md:grid-cols-2">
              {/* Image & Thumbnails Gallery */}
              <div className="p-6 bg-stone-900/40 flex flex-col justify-between space-y-4">
                <div className="aspect-[3/4] rounded-2xl overflow-hidden bg-stone-900 relative">
                  <img
                    src={modalActiveImg || selectedProduct.image}
                    alt={selectedProduct.name}
                    className="w-full h-full object-cover"
                  />
                  {selectedProduct.badge && (
                    <span className="absolute top-3 left-3 bg-white text-black text-[10px] font-black uppercase px-2.5 py-1 rounded shadow">
                      {selectedProduct.badge}
                    </span>
                  )}
                </div>

                {/* Thumbnails */}
                {selectedProduct.thumbnails.length > 1 && (
                  <div className="flex gap-2 overflow-x-auto no-scrollbar">
                    {selectedProduct.thumbnails.map((thumb, i) => (
                      <button
                        key={i}
                        onClick={() => setModalActiveImg(thumb)}
                        className={`w-16 h-20 rounded-xl overflow-hidden border-2 flex-shrink-0 ${
                          modalActiveImg === thumb ? 'border-white' : 'border-transparent opacity-60'
                        }`}
                      >
                        <img src={thumb} alt="" className="w-full h-full object-cover" />
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Product Info & Purchase Options */}
              <div className="p-6 sm:p-8 space-y-6 flex flex-col justify-between overflow-y-auto max-h-[80vh]">
                <div className="space-y-3">
                  <span className="text-xs font-mono uppercase text-stone-400 tracking-widest">
                    {selectedProduct.category} • {selectedProduct.subcategory}
                  </span>
                  <h2 className="font-serif text-2xl sm:text-3xl font-bold text-white">
                    {selectedProduct.name}
                  </h2>

                  <div className="flex items-center gap-3">
                    <div className="flex items-baseline gap-2">
                      <span className="text-2xl font-bold text-white">₹{selectedProduct.price}</span>
                      {selectedProduct.originalPrice > selectedProduct.price && (
                        <span className="text-sm text-stone-500 line-through">
                          ₹{selectedProduct.originalPrice}
                        </span>
                      )}
                    </div>
                    {selectedProduct.discountBadge && (
                      <span className="bg-rose-600/30 text-rose-300 border border-rose-500/40 text-[10px] font-bold uppercase px-2 py-0.5 rounded">
                        {selectedProduct.discountBadge}
                      </span>
                    )}
                    <div className="flex items-center gap-1 text-xs text-amber-400 ml-auto">
                      <Star className="w-3.5 h-3.5 fill-amber-400" />
                      <span className="font-bold">{selectedProduct.rating}</span>
                      <span className="text-stone-500">({selectedProduct.reviewCount} reviews)</span>
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-stone-300 leading-relaxed pt-2">
                    {selectedProduct.description}
                  </p>
                </div>

                {/* Color Selection */}
                {selectedProduct.colors.length > 0 && (
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-xs">
                      <span className="font-bold text-stone-300">Color: {modalColor}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      {selectedProduct.colors.map(col => (
                        <button
                          key={col.name}
                          onClick={() => setModalColor(col.name)}
                          className={`w-7 h-7 rounded-full border-2 flex items-center justify-center ${
                            modalColor === col.name ? 'border-white scale-110' : 'border-stone-700'
                          }`}
                          style={{ backgroundColor: col.hex }}
                          title={col.name}
                        >
                          {modalColor === col.name && (
                            <Check
                              className={`w-3.5 h-3.5 ${
                                col.hex === '#F9FAFB' || col.hex === '#FFFFFF'
                                  ? 'text-black'
                                  : 'text-white'
                              }`}
                            />
                          )}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {/* Size Selection */}
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-bold text-stone-300">Select Size</span>
                    <button
                      onClick={() => setSizeGuideOpen(true)}
                      className="text-amber-400 underline hover:text-amber-300"
                    >
                      Size Guide
                    </button>
                  </div>
                  <div className="grid grid-cols-5 gap-2">
                    {selectedProduct.sizes.map(size => (
                      <button
                        key={size}
                        onClick={() => setModalSize(size)}
                        className={`py-2 rounded-xl text-xs font-bold uppercase transition-all ${
                          modalSize === size
                            ? 'bg-white text-black shadow-md'
                            : 'bg-stone-900 text-stone-300 border border-stone-800 hover:border-stone-600'
                        }`}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Quantity & CTA Buttons */}
                <div className="space-y-3 pt-2">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center border border-stone-800 rounded-full bg-stone-900 px-3 py-1.5">
                      <button
                        onClick={() => setModalQty(Math.max(1, modalQty - 1))}
                        className="text-stone-400 hover:text-white p-1"
                      >
                        <Minus className="w-3.5 h-3.5" />
                      </button>
                      <span className="px-4 text-xs font-bold text-white">{modalQty}</span>
                      <button
                        onClick={() => setModalQty(modalQty + 1)}
                        className="text-stone-400 hover:text-white p-1"
                      >
                        <Plus className="w-3.5 h-3.5" />
                      </button>
                    </div>

                    <button
                      onClick={handleModalAddToCart}
                      className="flex-1 py-3.5 rounded-full bg-white text-black hover:bg-stone-200 text-xs font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-2 shadow-xl"
                    >
                      <ShoppingBag className="w-4 h-4" />
                      <span>Add to Bag • ₹{selectedProduct.price * modalQty}</span>
                    </button>

                    <button
                      onClick={() => toggleWishlist(selectedProduct.id)}
                      className="p-3.5 rounded-full bg-stone-900 border border-stone-800 text-stone-300 hover:text-rose-500"
                    >
                      <Heart
                        className={`w-4 h-4 ${
                          wishlist.includes(selectedProduct.id)
                            ? 'fill-rose-500 text-rose-500'
                            : ''
                        }`}
                      />
                    </button>
                  </div>

                  <button
                    onClick={() => {
                      handleModalAddToCart();
                      setCartDrawerOpen(false);
                      setCheckoutOpen(true);
                    }}
                    className="w-full py-3 rounded-full bg-rose-600 hover:bg-rose-500 text-white text-xs font-extrabold uppercase tracking-wider transition-all"
                  >
                    Express Buy Now
                  </button>
                </div>

                {/* Materials & Guarantees */}
                <div className="border-t border-stone-800 pt-4 space-y-2 text-xs text-stone-400">
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-emerald-400" />
                    <span>Fabric: {selectedProduct.materials}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Truck className="w-4 h-4 text-amber-400" />
                    <span>Free express delivery on prepaid orders over ₹1,999</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <RefreshCw className="w-4 h-4 text-sky-400" />
                    <span>15-Day hassle-free return and exchange policy</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* SIZE GUIDE POPUP */}
      {sizeGuideOpen && (
        <div className="fixed inset-0 z-60 bg-black/80 backdrop-blur-md flex items-center justify-center p-4">
          <div className="bg-stone-950 border border-stone-800 rounded-3xl max-w-md w-full p-6 space-y-4 shadow-2xl">
            <div className="flex items-center justify-between border-b border-stone-800 pb-3">
              <h3 className="font-serif text-lg font-bold text-white">NOVA Standard Size Guide</h3>
              <button
                onClick={() => setSizeGuideOpen(false)}
                className="text-stone-400 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <p className="text-xs text-stone-400">
              Measurements are in inches. Designed for relaxed street fit.
            </p>
            <div className="overflow-x-auto">
              <table className="w-full text-xs text-left text-stone-300">
                <thead>
                  <tr className="border-b border-stone-800 text-stone-500 font-mono">
                    <th className="py-2">SIZE</th>
                    <th>CHEST</th>
                    <th>LENGTH</th>
                    <th>SHOULDER</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-stone-900">
                  <tr>
                    <td className="py-2 font-bold text-white">S</td>
                    <td>42"</td>
                    <td>28"</td>
                    <td>21"</td>
                  </tr>
                  <tr>
                    <td className="py-2 font-bold text-white">M</td>
                    <td>44"</td>
                    <td>29"</td>
                    <td>22"</td>
                  </tr>
                  <tr>
                    <td className="py-2 font-bold text-white">L</td>
                    <td>46"</td>
                    <td>30"</td>
                    <td>23"</td>
                  </tr>
                  <tr>
                    <td className="py-2 font-bold text-white">XL</td>
                    <td>48"</td>
                    <td>31"</td>
                    <td>24"</td>
                  </tr>
                  <tr>
                    <td className="py-2 font-bold text-white">XXL</td>
                    <td>50"</td>
                    <td>32"</td>
                    <td>25"</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <button
              onClick={() => setSizeGuideOpen(false)}
              className="w-full py-2.5 rounded-full bg-white text-black text-xs font-bold uppercase"
            >
              Got It
            </button>
          </div>
        </div>
      )}

      {/* 13. SHOPPING BAG DRAWER */}
      {cartDrawerOpen && (
        <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex justify-end animate-fadeIn">
          <div className="bg-stone-950 border-l border-stone-800 w-full max-w-md h-full flex flex-col justify-between p-6 shadow-2xl animate-slideLeft">
            {/* Header */}
            <div className="flex items-center justify-between border-b border-stone-800 pb-4">
              <div className="flex items-center gap-2">
                <ShoppingBag className="w-5 h-5 text-white" />
                <h3 className="font-serif text-lg font-bold text-white">Your Shopping Bag</h3>
                <span className="text-xs bg-stone-800 text-stone-300 px-2 py-0.5 rounded-full">
                  {cartCount}
                </span>
              </div>
              <button
                onClick={() => setCartDrawerOpen(false)}
                className="p-1 rounded-full text-stone-400 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Bag Items List */}
            <div className="flex-1 overflow-y-auto py-4 space-y-4">
              {cart.length === 0 ? (
                <div className="text-center py-16 space-y-3">
                  <ShoppingBag className="w-12 h-12 text-stone-700 mx-auto" />
                  <p className="text-sm text-stone-400">Your bag is currently empty.</p>
                  <button
                    onClick={() => setCartDrawerOpen(false)}
                    className="px-6 py-2 rounded-full bg-white text-black text-xs font-bold uppercase"
                  >
                    Start Shopping
                  </button>
                </div>
              ) : (
                cart.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex gap-3 bg-stone-900/50 border border-stone-800/80 rounded-2xl p-3"
                  >
                    <img
                      src={item.product.image}
                      alt={item.product.name}
                      className="w-18 h-24 object-cover rounded-xl bg-stone-900"
                    />
                    <div className="flex-1 flex flex-col justify-between">
                      <div>
                        <div className="flex justify-between items-start">
                          <h4 className="text-xs font-bold text-white line-clamp-1">
                            {item.product.name}
                          </h4>
                          <button
                            onClick={() => handleRemoveCartItem(idx)}
                            className="text-stone-500 hover:text-rose-400 p-0.5"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        </div>
                        <p className="text-[11px] text-stone-400">
                          Size: {item.selectedSize} • {item.selectedColor}
                        </p>
                      </div>

                      <div className="flex items-center justify-between pt-2">
                        <div className="flex items-center border border-stone-700 rounded-lg px-2 py-0.5 bg-stone-900">
                          <button
                            onClick={() => handleUpdateQty(idx, -1)}
                            className="text-stone-400 hover:text-white"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="px-2 text-xs font-bold text-white">{item.quantity}</span>
                          <button
                            onClick={() => handleUpdateQty(idx, 1)}
                            className="text-stone-400 hover:text-white"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>

                        <span className="text-xs font-bold text-white">
                          ₹{item.product.price * item.quantity}
                        </span>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>

            {/* Bag Summary & Promo */}
            {cart.length > 0 && (
              <div className="border-t border-stone-800 pt-4 space-y-4">
                {/* Promo Code Box */}
                <div className="space-y-1">
                  <div className="flex gap-2">
                    <input
                      type="text"
                      placeholder="Coupon: NOVA10"
                      value={promoCode}
                      onChange={e => setPromoCode(e.target.value)}
                      className="bg-stone-900 border border-stone-800 rounded-xl px-3 py-2 text-xs text-white uppercase placeholder-stone-500 focus:outline-none flex-1"
                    />
                    <button
                      onClick={handleApplyPromo}
                      className="px-4 py-2 bg-stone-800 hover:bg-stone-700 text-white rounded-xl text-xs font-bold uppercase"
                    >
                      Apply
                    </button>
                  </div>
                  {promoError && <p className="text-[10px] text-rose-400">{promoError}</p>}
                </div>

                {/* Subtotals */}
                <div className="space-y-1.5 text-xs">
                  <div className="flex justify-between text-stone-400">
                    <span>Subtotal</span>
                    <span>₹{cartSubtotal}</span>
                  </div>
                  {discountAmount > 0 && (
                    <div className="flex justify-between text-emerald-400">
                      <span>Promo Discount (10%)</span>
                      <span>-₹{discountAmount}</span>
                    </div>
                  )}
                  <div className="flex justify-between text-stone-400">
                    <span>Delivery</span>
                    <span>{deliveryFee === 0 ? 'FREE' : `₹${deliveryFee}`}</span>
                  </div>
                  <div className="flex justify-between text-sm font-bold text-white pt-2 border-t border-stone-800">
                    <span>Total</span>
                    <span>₹{cartTotal}</span>
                  </div>
                </div>

                {/* Proceed to Checkout Button */}
                <button
                  onClick={() => {
                    setCartDrawerOpen(false);
                    setCheckoutOpen(true);
                  }}
                  className="w-full py-3.5 rounded-full bg-white text-black hover:bg-stone-200 text-xs font-extrabold uppercase tracking-wider transition-all shadow-xl"
                >
                  Proceed to Checkout • ₹{cartTotal}
                </button>
              </div>
            )}
          </div>
        </div>
      )}

      {/* WISHLIST DRAWER */}
      {wishlistDrawerOpen && (
        <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex justify-end animate-fadeIn">
          <div className="bg-stone-950 border-l border-stone-800 w-full max-w-md h-full flex flex-col justify-between p-6 shadow-2xl animate-slideLeft">
            <div className="flex items-center justify-between border-b border-stone-800 pb-4">
              <div className="flex items-center gap-2">
                <Heart className="w-5 h-5 text-rose-500 fill-rose-500" />
                <h3 className="font-serif text-lg font-bold text-white">Your Wishlist</h3>
                <span className="text-xs bg-stone-800 text-stone-300 px-2 py-0.5 rounded-full">
                  {wishlist.length}
                </span>
              </div>
              <button
                onClick={() => setWishlistDrawerOpen(false)}
                className="text-stone-400 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto py-4 space-y-4">
              {wishlist.length === 0 ? (
                <div className="text-center py-16 space-y-3">
                  <Heart className="w-12 h-12 text-stone-700 mx-auto" />
                  <p className="text-sm text-stone-400">Your wishlist is currently empty.</p>
                </div>
              ) : (
                FASHION_PRODUCTS.filter(p => wishlist.includes(p.id)).map(product => (
                  <div
                    key={product.id}
                    className="flex gap-3 bg-stone-900/50 border border-stone-800/80 rounded-2xl p-3"
                  >
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-18 h-24 object-cover rounded-xl bg-stone-900"
                    />
                    <div className="flex-1 flex flex-col justify-between">
                      <div>
                        <div className="flex justify-between items-start">
                          <h4 className="text-xs font-bold text-white line-clamp-1">{product.name}</h4>
                          <button
                            onClick={() => toggleWishlist(product.id)}
                            className="text-stone-500 hover:text-rose-400"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        </div>
                        <span className="text-xs font-bold text-white mt-1 block">
                          ₹{product.price}
                        </span>
                      </div>

                      <button
                        onClick={() => {
                          handleQuickAdd(product);
                          toggleWishlist(product.id);
                        }}
                        className="py-1.5 px-3 rounded-lg bg-white text-black text-[11px] font-bold uppercase tracking-wider flex items-center justify-center gap-1 w-full"
                      >
                        <ShoppingBag className="w-3 h-3" />
                        <span>Move to Bag</span>
                      </button>
                    </div>
                  </div>
                ))
              )}
            </div>

            <button
              onClick={() => setWishlistDrawerOpen(false)}
              className="w-full py-3 rounded-full bg-stone-900 border border-stone-800 text-white text-xs font-bold uppercase"
            >
              Continue Browsing
            </button>
          </div>
        </div>
      )}

      {/* 14. 5-STEP CHECKOUT DEMO MODAL & TRACKING SIMULATOR */}
      {checkoutOpen && (
        <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto animate-fadeIn">
          <div className="bg-stone-950 border border-stone-800 rounded-3xl max-w-2xl w-full p-6 sm:p-8 space-y-6 shadow-2xl relative my-auto">
            <button
              onClick={() => {
                setCheckoutOpen(false);
                setOrderComplete(false);
              }}
              className="absolute top-4 right-4 text-stone-400 hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>

            {!orderComplete ? (
              <div className="space-y-6">
                <div>
                  <span className="text-[10px] font-mono uppercase text-amber-400 tracking-widest">
                    STEP {checkoutStep} OF 4 • SECURE 256-BIT ENCRYPTION
                  </span>
                  <h3 className="font-serif text-2xl font-bold text-white">
                    {checkoutStep === 1 && 'Contact & Personal Details'}
                    {checkoutStep === 2 && 'Delivery Address'}
                    {checkoutStep === 3 && 'Shipping Option'}
                    {checkoutStep === 4 && 'Payment Method'}
                  </h3>
                </div>

                {/* Step 1: Contact Info */}
                {checkoutStep === 1 && (
                  <div className="space-y-4 text-xs">
                    <div>
                      <label className="block text-stone-400 mb-1">Full Name</label>
                      <input
                        type="text"
                        value={checkoutForm.name}
                        onChange={e => setCheckoutForm({ ...checkoutForm, name: e.target.value })}
                        className="w-full bg-stone-900 border border-stone-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-stone-500"
                      />
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-stone-400 mb-1">Email Address</label>
                        <input
                          type="email"
                          value={checkoutForm.email}
                          onChange={e => setCheckoutForm({ ...checkoutForm, email: e.target.value })}
                          className="w-full bg-stone-900 border border-stone-800 rounded-xl px-4 py-3 text-white focus:outline-none"
                        />
                      </div>
                      <div>
                        <label className="block text-stone-400 mb-1">Mobile Number</label>
                        <input
                          type="tel"
                          value={checkoutForm.phone}
                          onChange={e => setCheckoutForm({ ...checkoutForm, phone: e.target.value })}
                          className="w-full bg-stone-900 border border-stone-800 rounded-xl px-4 py-3 text-white focus:outline-none"
                        />
                      </div>
                    </div>
                  </div>
                )}

                {/* Step 2: Address */}
                {checkoutStep === 2 && (
                  <div className="space-y-4 text-xs">
                    <div>
                      <label className="block text-stone-400 mb-1">Street Address</label>
                      <input
                        type="text"
                        value={checkoutForm.address}
                        onChange={e => setCheckoutForm({ ...checkoutForm, address: e.target.value })}
                        className="w-full bg-stone-900 border border-stone-800 rounded-xl px-4 py-3 text-white focus:outline-none"
                      />
                    </div>
                    <div className="grid grid-cols-3 gap-3">
                      <div>
                        <label className="block text-stone-400 mb-1">City</label>
                        <input
                          type="text"
                          value={checkoutForm.city}
                          onChange={e => setCheckoutForm({ ...checkoutForm, city: e.target.value })}
                          className="w-full bg-stone-900 border border-stone-800 rounded-xl px-3 py-3 text-white focus:outline-none"
                        />
                      </div>
                      <div>
                        <label className="block text-stone-400 mb-1">State</label>
                        <input
                          type="text"
                          value={checkoutForm.state}
                          onChange={e => setCheckoutForm({ ...checkoutForm, state: e.target.value })}
                          className="w-full bg-stone-900 border border-stone-800 rounded-xl px-3 py-3 text-white focus:outline-none"
                        />
                      </div>
                      <div>
                        <label className="block text-stone-400 mb-1">PIN Code</label>
                        <input
                          type="text"
                          value={checkoutForm.pincode}
                          onChange={e => setCheckoutForm({ ...checkoutForm, pincode: e.target.value })}
                          className="w-full bg-stone-900 border border-stone-800 rounded-xl px-3 py-3 text-white focus:outline-none"
                        />
                      </div>
                    </div>
                  </div>
                )}

                {/* Step 3: Shipping */}
                {checkoutStep === 3 && (
                  <div className="space-y-3 text-xs">
                    <label
                      onClick={() => setCheckoutForm({ ...checkoutForm, shippingMethod: 'free' })}
                      className={`flex items-center justify-between p-4 rounded-2xl border cursor-pointer ${
                        checkoutForm.shippingMethod === 'free'
                          ? 'border-white bg-stone-900'
                          : 'border-stone-800 bg-stone-950'
                      }`}
                    >
                      <div className="space-y-0.5">
                        <span className="font-bold text-white block">Standard Express Delivery</span>
                        <span className="text-stone-400">Delivered within 2-4 business days</span>
                      </div>
                      <span className="font-bold text-emerald-400">FREE</span>
                    </label>

                    <label
                      onClick={() => setCheckoutForm({ ...checkoutForm, shippingMethod: 'priority' })}
                      className={`flex items-center justify-between p-4 rounded-2xl border cursor-pointer ${
                        checkoutForm.shippingMethod === 'priority'
                          ? 'border-white bg-stone-900'
                          : 'border-stone-800 bg-stone-950'
                      }`}
                    >
                      <div className="space-y-0.5">
                        <span className="font-bold text-white block">VIP Next-Day Air Dispatch</span>
                        <span className="text-stone-400">Guaranteed next-morning delivery</span>
                      </div>
                      <span className="font-bold text-white">₹199</span>
                    </label>
                  </div>
                )}

                {/* Step 4: Payment */}
                {checkoutStep === 4 && (
                  <div className="space-y-3 text-xs">
                    {[
                      { id: 'upi', label: 'Instant UPI (Google Pay, PhonePe, Paytm, BHIM)' },
                      { id: 'card', label: 'Credit / Debit Card (Visa, Mastercard, RuPay)' },
                      { id: 'netbanking', label: 'Net Banking (All Major Indian Banks)' },
                      { id: 'cod', label: 'Cash on Delivery (Pay at Doorstep)' }
                    ].map(pay => (
                      <label
                        key={pay.id}
                        onClick={() => setCheckoutForm({ ...checkoutForm, paymentMethod: pay.id })}
                        className={`flex items-center justify-between p-4 rounded-2xl border cursor-pointer ${
                          checkoutForm.paymentMethod === pay.id
                            ? 'border-white bg-stone-900'
                            : 'border-stone-800 bg-stone-950'
                        }`}
                      >
                        <span className="font-bold text-white">{pay.label}</span>
                        <span className="w-4 h-4 rounded-full border border-stone-500 flex items-center justify-center">
                          {checkoutForm.paymentMethod === pay.id && (
                            <span className="w-2 h-2 rounded-full bg-white"></span>
                          )}
                        </span>
                      </label>
                    ))}
                  </div>
                )}

                {/* Order Summary Strip */}
                <div className="bg-stone-900/60 p-4 rounded-2xl border border-stone-800 text-xs flex justify-between items-center">
                  <span className="text-stone-400">Total Payable Amount:</span>
                  <span className="text-lg font-bold text-white">₹{cartTotal}</span>
                </div>

                {/* Navigation Buttons */}
                <div className="flex gap-3 pt-2">
                  {checkoutStep > 1 && (
                    <button
                      onClick={() => setCheckoutStep(checkoutStep - 1)}
                      className="px-6 py-3 rounded-full bg-stone-900 border border-stone-800 text-white text-xs font-bold uppercase"
                    >
                      Back
                    </button>
                  )}

                  {checkoutStep < 4 ? (
                    <button
                      onClick={() => setCheckoutStep(checkoutStep + 1)}
                      className="flex-1 py-3.5 rounded-full bg-white text-black hover:bg-stone-200 text-xs font-extrabold uppercase tracking-wider"
                    >
                      Continue
                    </button>
                  ) : (
                    <button
                      onClick={() => {
                        const randomId = 'NOVA-' + Math.floor(100000 + Math.random() * 900000);
                        setOrderId(randomId);
                        setOrderComplete(true);
                        setCart([]);
                      }}
                      className="flex-1 py-3.5 rounded-full bg-emerald-500 hover:bg-emerald-400 text-black text-xs font-black uppercase tracking-wider shadow-xl"
                    >
                      Place Order & Confirm
                    </button>
                  )}
                </div>
              </div>
            ) : (
              /* Order Confirmation with Live Tracker Simulator */
              <div className="text-center py-8 space-y-6 animate-fadeIn">
                <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>

                <div className="space-y-1">
                  <span className="text-xs font-mono uppercase text-emerald-400">Order Confirmed!</span>
                  <h3 className="font-serif text-3xl font-bold text-white">Thank you, {checkoutForm.name}!</h3>
                  <p className="text-xs text-stone-400">
                    Order ID: <strong className="text-white font-mono">{orderId}</strong>
                  </p>
                </div>

                {/* Live Tracking Simulator Step Bar */}
                <div className="bg-stone-900/60 p-6 rounded-2xl border border-stone-800 text-left space-y-4">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-stone-400">
                    Live Dispatch Telemetry
                  </span>
                  <div className="grid grid-cols-4 gap-2 text-center text-[10px]">
                    <div className="space-y-1.5">
                      <div className="w-6 h-6 rounded-full bg-emerald-500 text-black font-bold flex items-center justify-center mx-auto">
                        ✓
                      </div>
                      <span className="font-bold text-white block">Placed</span>
                      <span className="text-stone-500">Today</span>
                    </div>
                    <div className="space-y-1.5">
                      <div className="w-6 h-6 rounded-full bg-amber-400 text-black font-bold flex items-center justify-center mx-auto animate-pulse">
                        2
                      </div>
                      <span className="font-bold text-white block">Processing</span>
                      <span className="text-stone-500">In Atelier</span>
                    </div>
                    <div className="space-y-1.5 opacity-50">
                      <div className="w-6 h-6 rounded-full bg-stone-800 text-stone-400 font-bold flex items-center justify-center mx-auto">
                        3
                      </div>
                      <span className="text-stone-400 block">Dispatched</span>
                      <span className="text-stone-600">Bluedart</span>
                    </div>
                    <div className="space-y-1.5 opacity-50">
                      <div className="w-6 h-6 rounded-full bg-stone-800 text-stone-400 font-bold flex items-center justify-center mx-auto">
                        4
                      </div>
                      <span className="text-stone-400 block">Delivered</span>
                      <span className="text-stone-600">Estimated 3 Days</span>
                    </div>
                  </div>
                </div>

                <button
                  onClick={() => {
                    setCheckoutOpen(false);
                    setOrderComplete(false);
                    setCheckoutStep(1);
                  }}
                  className="w-full py-3.5 rounded-full bg-white text-black text-xs font-bold uppercase tracking-wider"
                >
                  Return to Storefront
                </button>
              </div>
            )}
          </div>
        </div>
      )}

      {/* 10. FLOATING "NOVA STYLE ASSIST" CHAT */}
      <div className="fixed bottom-6 right-6 z-40">
        {!chatOpen ? (
          <button
            onClick={() => setChatOpen(true)}
            className="p-4 rounded-full bg-white text-black hover:bg-stone-200 transition-all shadow-2xl flex items-center gap-2 font-bold text-xs tracking-wider active:scale-95 group border border-stone-300"
            title="NOVA Style Assist"
          >
            <MessageCircle className="w-5 h-5 text-black" />
            <span className="hidden sm:inline">NOVA Style Assist</span>
          </button>
        ) : (
          <div className="bg-stone-950 border border-stone-800 rounded-3xl w-[320px] sm:w-[360px] shadow-2xl overflow-hidden flex flex-col h-[440px] animate-fadeIn">
            {/* Header */}
            <div className="p-4 bg-stone-900 border-b border-stone-800 flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-full bg-white text-black flex items-center justify-center font-serif font-black text-xs">
                  N
                </div>
                <div>
                  <h4 className="text-xs font-bold text-white">NOVA Style Assist</h4>
                  <span className="text-[10px] text-emerald-400 font-mono">● Online & Ready</span>
                </div>
              </div>
              <button onClick={() => setChatOpen(false)} className="text-stone-400 hover:text-white">
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Chat Body */}
            <div className="flex-1 p-4 overflow-y-auto space-y-3 text-xs">
              {chatMessages.map((msg, i) => (
                <div
                  key={i}
                  className={`flex flex-col ${msg.sender === 'user' ? 'items-end' : 'items-start'}`}
                >
                  <div
                    className={`p-3 rounded-2xl max-w-[85%] leading-relaxed ${
                      msg.sender === 'user'
                        ? 'bg-white text-black rounded-br-none font-medium'
                        : 'bg-stone-900 text-stone-200 border border-stone-800 rounded-bl-none'
                    }`}
                  >
                    {msg.text}
                  </div>
                  {msg.actionButtons && (
                    <div className="flex flex-wrap gap-1.5 mt-2">
                      {msg.actionButtons.map(btn => (
                        <button
                          key={btn}
                          onClick={() => handleSendChatMessage(btn)}
                          className="px-2.5 py-1 rounded-full bg-stone-800 text-[10px] text-stone-300 hover:bg-stone-700 hover:text-white border border-stone-700"
                        >
                          {btn}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Input Footer */}
            <div className="p-3 border-t border-stone-800 bg-stone-900/60 flex items-center gap-2">
              <input
                type="text"
                placeholder="Ask about size, fabrics, drops..."
                value={chatInput}
                onChange={e => setChatInput(e.target.value)}
                onKeyDown={e => e.key === 'Enter' && handleSendChatMessage()}
                className="flex-1 bg-stone-900 border border-stone-800 rounded-xl px-3 py-2 text-xs text-white placeholder-stone-500 focus:outline-none"
              />
              <button
                onClick={() => handleSendChatMessage()}
                className="p-2 rounded-xl bg-white text-black hover:bg-stone-200"
              >
                <Send className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}
      </div>

      {/* 18. PREMIUM FOOTER */}
      <footer className="bg-black border-t border-stone-900 pt-16 pb-12 text-stone-400 text-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {/* Newsletter Box */}
          <div className="bg-gradient-to-r from-stone-950 via-stone-900 to-stone-950 p-8 sm:p-10 rounded-3xl border border-stone-800 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-2 text-center md:text-left">
              <span className="text-[10px] font-mono uppercase tracking-widest text-amber-400">
                VIP MEMBERSHIP
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white">
                Join The NOVA World
              </h3>
              <p className="text-stone-400 text-xs max-w-md">
                Get first access to new seasonal drops, exclusive runway collections, and private
                invites.
              </p>
            </div>
            <div className="flex w-full md:w-auto max-w-md gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="bg-stone-900 border border-stone-800 rounded-full px-4 py-3 text-white placeholder-stone-500 text-xs focus:outline-none flex-1"
              />
              <button
                onClick={() => showToast('Subscribed to NOVA VIP drops! 🥂')}
                className="px-6 py-3 rounded-full bg-white text-black hover:bg-stone-200 text-xs font-bold uppercase tracking-wider whitespace-nowrap"
              >
                Subscribe
              </button>
            </div>
          </div>

          {/* Links Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="space-y-3">
              <h4 className="font-bold text-white text-xs tracking-widest uppercase">SHOP</h4>
              <ul className="space-y-2 text-stone-400">
                {['Men', 'Women', 'Streetwear', 'New Arrivals', 'Sale'].map(link => (
                  <li key={link}>
                    <button
                      onClick={() => {
                        setActiveCategory(link === 'New Arrivals' ? 'New In' : link);
                        const el = document.getElementById('catalog-section');
                        if (el) el.scrollIntoView({ behavior: 'smooth' });
                      }}
                      className="hover:text-white transition-colors"
                    >
                      {link}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-3">
              <h4 className="font-bold text-white text-xs tracking-widest uppercase">HELP</h4>
              <ul className="space-y-2 text-stone-400">
                {['Contact Support', 'Shipping Information', '15-Day Returns', 'Size Guide', 'FAQ'].map(
                  link => (
                    <li key={link}>
                      <button
                        onClick={() => {
                          if (link === 'Size Guide') setSizeGuideOpen(true);
                          else setChatOpen(true);
                        }}
                        className="hover:text-white transition-colors"
                      >
                        {link}
                      </button>
                    </li>
                  )
                )}
              </ul>
            </div>

            <div className="space-y-3">
              <h4 className="font-bold text-white text-xs tracking-widest uppercase">NOVA</h4>
              <ul className="space-y-2 text-stone-400">
                <li>
                  <span className="hover:text-white cursor-pointer">About The Atelier</span>
                </li>
                <li>
                  <span className="hover:text-white cursor-pointer">Careers</span>
                </li>
                <li>
                  <span className="hover:text-white cursor-pointer">Lookbook Journal</span>
                </li>
                <li>
                  <span className="hover:text-white cursor-pointer">Flagship Stores</span>
                </li>
              </ul>
            </div>

            <div className="space-y-3">
              <h4 className="font-bold text-white text-xs tracking-widest uppercase">FOLLOW</h4>
              <p className="text-stone-400 text-xs">@novaofficial</p>
              <div className="flex items-center gap-3 pt-2">
                <span className="p-2 rounded-full bg-stone-900 border border-stone-800 text-stone-300 hover:text-white cursor-pointer">
                  <Instagram className="w-4 h-4" />
                </span>
                <span className="p-2 rounded-full bg-stone-900 border border-stone-800 text-stone-300 hover:text-white cursor-pointer">
                  <Facebook className="w-4 h-4" />
                </span>
                <span className="p-2 rounded-full bg-stone-900 border border-stone-800 text-stone-300 hover:text-white cursor-pointer">
                  <Compass className="w-4 h-4" />
                </span>
              </div>
            </div>
          </div>

          {/* Bottom Copyright */}
          <div className="border-t border-stone-900 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-stone-500 font-mono">
            <span>© 2026 NOVA APPAREL INC. ALL RIGHTS RESERVED.</span>
            <div className="flex items-center gap-4">
              <span>PRIVACY POLICY</span>
              <span>TERMS OF SERVICE</span>
              <span>SUSTAINABILITY CHARTER</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};
