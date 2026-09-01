import React, { useState, useRef, useEffect } from 'react';
import { 
  Play, 
  Pause, 
  Volume2, 
  VolumeX, 
  ShoppingBag, 
  Heart, 
  Share2, 
  ChevronUp, 
  ChevronDown, 
  X, 
  Sparkles, 
  Eye, 
  ChevronRight,
  Check,
  Zap,
  ArrowRight
} from 'lucide-react';
import { BeautyReel, BEAUTY_REELS } from '../../data/beautyReelsData';
import { BeautyProduct, BEAUTY_PRODUCTS } from '../../data/beautyData';

interface BeautyReelsSectionProps {
  onAddToCart: (product: BeautyProduct, quantity?: number) => void;
  onQuickView?: (product: BeautyProduct) => void;
  className?: string;
}

export const BeautyReelsSection: React.FC<BeautyReelsSectionProps> = ({
  onAddToCart,
  onQuickView,
  className = ''
}) => {
  const [activeReelIndex, setActiveReelIndex] = useState<number | null>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [progress, setProgress] = useState(0);
  const [likedReels, setLikedReels] = useState<Record<string, boolean>>({});
  const [likeCounts, setLikeCounts] = useState<Record<string, number>>(() => {
    const counts: Record<string, number> = {};
    BEAUTY_REELS.forEach((r) => {
      counts[r.id] = r.likes;
    });
    return counts;
  });
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [hoveredCardId, setHoveredCardId] = useState<string | null>(null);

  const videoRef = useRef<HTMLVideoElement | null>(null);
  const rowContainerRef = useRef<HTMLDivElement | null>(null);
  const touchStartY = useRef<number | null>(null);

  const currentReel = activeReelIndex !== null ? BEAUTY_REELS[activeReelIndex] : null;

  // Handle auto-progress & loop in full-screen modal
  useEffect(() => {
    if (activeReelIndex === null || !isPlaying) return;

    const interval = setInterval(() => {
      if (videoRef.current) {
        const currentTime = videoRef.current.currentTime;
        const duration = videoRef.current.duration || currentReel?.duration || 15;
        const pct = (currentTime / duration) * 100;
        setProgress(pct >= 100 ? 100 : pct);

        if (videoRef.current.ended || currentTime >= duration - 0.1) {
          // Loop or automatically step next
          videoRef.current.currentTime = 0;
          setProgress(0);
        }
      }
    }, 100);

    return () => clearInterval(interval);
  }, [activeReelIndex, isPlaying, currentReel]);

  // Sync video play/pause
  useEffect(() => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.play().catch(() => {
          // Fallback if browser blocks autoplay
          setIsPlaying(false);
        });
      } else {
        videoRef.current.pause();
      }
    }
  }, [isPlaying, activeReelIndex]);

  // Keyboard navigation inside modal
  useEffect(() => {
    if (activeReelIndex === null) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setActiveReelIndex(null);
      } else if (e.key === 'ArrowDown') {
        e.preventDefault();
        handleNextReel();
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        handlePrevReel();
      } else if (e.key === ' ') {
        e.preventDefault();
        setIsPlaying((prev) => !prev);
      } else if (e.key === 'm' || e.key === 'M') {
        setIsMuted((prev) => !prev);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeReelIndex]);

  const handleNextReel = () => {
    if (activeReelIndex === null) return;
    const nextIdx = (activeReelIndex + 1) % BEAUTY_REELS.length;
    setActiveReelIndex(nextIdx);
    setProgress(0);
    setIsPlaying(true);
  };

  const handlePrevReel = () => {
    if (activeReelIndex === null) return;
    const prevIdx = (activeReelIndex - 1 + BEAUTY_REELS.length) % BEAUTY_REELS.length;
    setActiveReelIndex(prevIdx);
    setProgress(0);
    setIsPlaying(true);
  };

  // Touch swipe support for vertical reel switching
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartY.current = e.touches[0].clientY;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartY.current === null) return;
    const touchEndY = e.changedTouches[0].clientY;
    const diff = touchStartY.current - touchEndY;

    if (diff > 50) {
      // Swiped UP -> Next reel
      handleNextReel();
    } else if (diff < -50) {
      // Swiped DOWN -> Previous reel
      handlePrevReel();
    }
    touchStartY.current = null;
  };

  const toggleLike = (reelId: string) => {
    const isLiked = likedReels[reelId];
    setLikedReels((prev) => ({ ...prev, [reelId]: !isLiked }));
    setLikeCounts((prev) => ({
      ...prev,
      [reelId]: (prev[reelId] || 0) + (isLiked ? -1 : 1)
    }));
  };

  const handleShare = (reel: BeautyReel) => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
    }
    setToastMessage(`Link to "${reel.title}" copied!`);
    setTimeout(() => setToastMessage(null), 3000);
  };

  const handleQuickAdd = (reel: BeautyReel, e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    const product = BEAUTY_PRODUCTS.find((p) => p.id === reel.productId) || {
      id: reel.productId,
      name: reel.productName,
      subtitle: reel.category,
      category: (reel.category as any) || 'Skincare',
      price: reel.productPrice,
      originalPrice: reel.productOriginalPrice,
      rating: 4.9,
      reviewsCount: 142,
      image: reel.productImage,
      galleryImages: [reel.productImage],
      volume: 'Full Size',
      skinType: 'All Skin Types',
      benefit: 'Glow & Radiance',
      description: reel.caption,
      ingredients: ['Cold-pressed Botanicals', 'Hyaluronic Acid'],
      howToUse: 'Apply 2-3 drops onto clean skin morning and evening.',
      inStock: true
    };

    onAddToCart(product, 1);
    setToastMessage(`Added "${reel.productName}" to your bag! 🛍️`);
    setTimeout(() => setToastMessage(null), 3000);
  };

  const handleProductDetail = (reel: BeautyReel, e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    const product = BEAUTY_PRODUCTS.find((p) => p.id === reel.productId);
    if (product && onQuickView) {
      setActiveReelIndex(null);
      onQuickView(product);
    }
  };

  const scrollRow = (direction: 'left' | 'right') => {
    if (rowContainerRef.current) {
      const scrollAmount = direction === 'left' ? -340 : 340;
      rowContainerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section className={`py-14 sm:py-20 bg-gradient-to-b from-[#FFF9F8] via-[#FAF7F5] to-white border-y border-rose-100/90 relative overflow-hidden ${className}`}>
      
      {/* Background Ambience */}
      <div className="absolute top-0 right-10 w-96 h-96 bg-rose-200/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-96 h-96 bg-amber-100/30 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 relative">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-100/80 border border-rose-200 text-rose-800 text-[11px] font-bold tracking-wider uppercase">
              <Sparkles className="w-3.5 h-3.5 text-rose-600 animate-pulse" />
              <span>Watch & Shop • Video Showcase</span>
              <span className="bg-rose-600 text-white text-[9px] px-2 py-0.5 rounded-full font-black uppercase tracking-wider ml-1">
                MAX Plan Feature
              </span>
            </div>
            <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-stone-900 leading-tight">
              Shop the Reels & Routine Demos
            </h2>
            <p className="text-stone-600 text-xs sm:text-sm max-w-2xl leading-relaxed">
              Watch authentic skincare rituals, shade swatches, and application tutorials. Tap any vertical reel to watch in full-screen and add products directly to your cart in one click.
            </p>
          </div>

          {/* Row Navigation Arrows */}
          <div className="flex items-center gap-2 self-start md:self-end">
            <button
              onClick={() => scrollRow('left')}
              className="w-10 h-10 rounded-full bg-white border border-rose-200 text-stone-700 hover:bg-rose-50 hover:text-rose-700 hover:border-rose-300 flex items-center justify-center transition-all shadow-xs active:scale-95 cursor-pointer"
              aria-label="Scroll reels left"
            >
              <ChevronRight className="w-5 h-5 rotate-180" />
            </button>
            <button
              onClick={() => scrollRow('right')}
              className="w-10 h-10 rounded-full bg-white border border-rose-200 text-stone-700 hover:bg-rose-50 hover:text-rose-700 hover:border-rose-300 flex items-center justify-center transition-all shadow-xs active:scale-95 cursor-pointer"
              aria-label="Scroll reels right"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scrollable Horizontal Row of 9:16 Portrait Reel Cards */}
        <div
          ref={rowContainerRef}
          className="flex gap-4 sm:gap-5 overflow-x-auto pb-4 pt-1 snap-x snap-mandatory scrollbar-none select-none scroll-smooth"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {BEAUTY_REELS.map((reel, idx) => {
            const isHovered = hoveredCardId === reel.id;
            const isLiked = likedReels[reel.id];

            return (
              <div
                key={reel.id}
                onMouseEnter={() => setHoveredCardId(reel.id)}
                onMouseLeave={() => setHoveredCardId(null)}
                onClick={() => {
                  setActiveReelIndex(idx);
                  setProgress(0);
                  setIsPlaying(true);
                }}
                className="group relative flex-shrink-0 w-[240px] sm:w-[270px] aspect-[9/16] rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1.5 cursor-pointer border border-rose-200/80 snap-start bg-stone-900"
              >
                {/* Reel Video or Fallback Poster */}
                <div className="absolute inset-0 w-full h-full bg-stone-950 overflow-hidden">
                  <video
                    src={reel.videoUrl}
                    poster={reel.fallbackPoster}
                    muted
                    loop
                    playsInline
                    autoPlay
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>

                {/* Dark Vignette Overlay for Crisp Readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950/90 via-stone-950/25 to-stone-950/40 group-hover:via-stone-950/35 transition-all" />

                {/* Top Badges: Tag & Views */}
                <div className="absolute top-3 inset-x-3 flex items-center justify-between pointer-events-none z-10">
                  <span className="text-[10px] font-black uppercase tracking-wider px-2.5 py-1 rounded-full bg-rose-600/90 text-white shadow-xs backdrop-blur-xs flex items-center gap-1">
                    <Zap className="w-3 h-3 fill-white" />
                    {reel.tag}
                  </span>
                  <span className="text-[11px] font-bold text-white/95 bg-black/50 backdrop-blur-md px-2.5 py-0.5 rounded-full flex items-center gap-1 border border-white/10">
                    <Eye className="w-3 h-3 text-rose-300" />
                    {reel.views}
                  </span>
                </div>

                {/* Center Hover Play Pulsing Icon */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <div className="w-14 h-14 rounded-full bg-white/25 backdrop-blur-md border border-white/40 flex items-center justify-center text-white shadow-xl opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300">
                    <Play className="w-6 h-6 fill-white ml-0.5" />
                  </div>
                </div>

                {/* Bottom Overlay: Creator info + Product Details + Quick Add Button */}
                <div className="absolute bottom-0 inset-x-0 p-4 space-y-3 z-10 bg-gradient-to-t from-stone-950 via-stone-950/90 to-transparent pt-8">
                  
                  {/* Creator info */}
                  <div className="flex items-center gap-2">
                    <img loading="lazy"
                      src={reel.avatar}
                      alt={reel.creator}
                      className="w-6 h-6 rounded-full border border-rose-300 object-cover"
                    />
                    <span className="text-xs font-semibold text-white/90 truncate">
                      {reel.creator}
                    </span>
                  </div>

                  {/* Reel Title */}
                  <h3 className="text-xs sm:text-sm font-bold text-white leading-snug line-clamp-2 drop-shadow-xs">
                    {reel.title}
                  </h3>

                  {/* Product Card Pill */}
                  <div className="p-2.5 rounded-2xl bg-white/95 backdrop-blur-md border border-rose-200/90 flex items-center justify-between gap-2 shadow-lg">
                    <div className="flex items-center gap-2 min-w-0">
                      <img loading="lazy"
                        src={reel.productImage}
                        alt={reel.productName}
                        className="w-9 h-9 rounded-xl object-cover border border-rose-100 bg-rose-50 shrink-0"
                      />
                      <div className="min-w-0 flex-1">
                        <h4 className="text-[11px] font-bold text-stone-900 truncate leading-tight">
                          {reel.productName}
                        </h4>
                        <div className="flex items-center gap-1.5 mt-0.5">
                          <span className="text-xs font-black text-rose-700">
                            ₹{reel.productPrice.toLocaleString()}
                          </span>
                          <span className="text-[10px] text-stone-400 line-through">
                            ₹{reel.productOriginalPrice.toLocaleString()}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Quick Add Button */}
                    <button
                      onClick={(e) => handleQuickAdd(reel, e)}
                      className="w-8 h-8 rounded-xl bg-rose-600 hover:bg-rose-700 text-white flex items-center justify-center shadow-xs shrink-0 transition-transform active:scale-90 cursor-pointer"
                      title="Quick Add to Bag"
                      aria-label="Add to cart"
                    >
                      <ShoppingBag className="w-3.5 h-3.5" />
                    </button>
                  </div>

                </div>

              </div>
            );
          })}
        </div>

      </div>

      {/* ========================================================================= */}
      {/* FULL-SCREEN VERTICAL REEL VIEWER MODAL (Instagram / TikTok / Shorts UX)    */}
      {/* ========================================================================= */}
      {currentReel && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-stone-950/90 backdrop-blur-md p-0 sm:p-4 animate-in fade-in duration-200"
          onClick={() => setActiveReelIndex(null)}
        >
          {/* Main Reel View Container (Fixed 9:16 vertical smartphone frame) */}
          <div
            onClick={(e) => e.stopPropagation()}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
            className="relative w-full h-full sm:h-[92vh] sm:max-w-[420px] sm:rounded-3xl bg-stone-950 overflow-hidden shadow-2xl flex flex-col justify-between border sm:border-stone-800"
          >
            
            {/* Top Instagram-Style Animated Progress Bar */}
            <div className="absolute top-0 inset-x-0 z-30 p-2 sm:p-3 flex gap-1.5 bg-gradient-to-b from-stone-950/80 to-transparent">
              {BEAUTY_REELS.map((r, idx) => {
                let barWidth = 0;
                if (idx < activeReelIndex!) barWidth = 100;
                else if (idx === activeReelIndex!) barWidth = progress;
                return (
                  <div key={r.id} className="h-1 flex-1 bg-white/30 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-white transition-all duration-100 ease-linear rounded-full"
                      style={{ width: `${barWidth}%` }}
                    />
                  </div>
                );
              })}
            </div>

            {/* Top Controls Bar: Creator Info, Mute, Close */}
            <div className="absolute top-4 sm:top-5 inset-x-3 sm:inset-x-4 z-30 flex items-center justify-between text-white">
              <div className="flex items-center gap-2.5 bg-stone-950/40 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10">
                <img loading="lazy"
                  src={currentReel.avatar}
                  alt={currentReel.creator}
                  className="w-7 h-7 rounded-full object-cover border border-rose-400"
                />
                <div className="leading-tight">
                  <div className="text-xs font-bold">{currentReel.creator}</div>
                  <div className="text-[10px] text-rose-300">{currentReel.handle}</div>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => setIsMuted(!isMuted)}
                  className="w-9 h-9 rounded-full bg-stone-950/60 backdrop-blur-md border border-white/20 text-white flex items-center justify-center hover:bg-white/20 transition-colors cursor-pointer"
                  title={isMuted ? 'Unmute video' : 'Mute video'}
                  aria-label="Toggle mute"
                >
                  {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                </button>

                <button
                  onClick={() => setActiveReelIndex(null)}
                  className="w-9 h-9 rounded-full bg-stone-950/60 backdrop-blur-md border border-white/20 text-white flex items-center justify-center hover:bg-white/20 transition-colors cursor-pointer"
                  title="Close Reel Viewer"
                  aria-label="Close"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Video Player Canvas (Tap to play/pause) */}
            <div
              onClick={() => setIsPlaying(!isPlaying)}
              className="relative flex-1 w-full h-full flex items-center justify-center cursor-pointer bg-stone-950 select-none overflow-hidden"
            >
              <video
                ref={videoRef}
                src={currentReel.videoUrl}
                poster={currentReel.fallbackPoster}
                muted={isMuted}
                loop
                playsInline
                autoPlay
                className="w-full h-full object-cover"
              />

              {/* Big Play / Pause icon indicator on click */}
              {!isPlaying && (
                <div className="absolute inset-0 flex items-center justify-center bg-black/40 backdrop-blur-xs">
                  <div className="w-16 h-16 rounded-full bg-white/30 backdrop-blur-md border border-white/40 flex items-center justify-center text-white shadow-2xl animate-in zoom-in-75 duration-200">
                    <Play className="w-8 h-8 fill-white ml-1" />
                  </div>
                </div>
              )}
            </div>

            {/* Right-Side Interactive Actions (Like, Share, Next/Prev) */}
            <div className="absolute right-3 bottom-32 z-30 flex flex-col items-center gap-4 text-white">
              
              {/* Like Button */}
              <button
                onClick={() => toggleLike(currentReel.id)}
                className="flex flex-col items-center gap-1 group cursor-pointer"
                title="Like Reel"
              >
                <div className={`w-11 h-11 rounded-full flex items-center justify-center backdrop-blur-md transition-all ${
                  likedReels[currentReel.id] 
                    ? 'bg-rose-600 text-white scale-110 shadow-lg shadow-rose-600/50' 
                    : 'bg-stone-900/60 text-white border border-white/20 hover:bg-stone-800'
                }`}>
                  <Heart className={`w-5 h-5 ${likedReels[currentReel.id] ? 'fill-white' : ''}`} />
                </div>
                <span className="text-[11px] font-bold drop-shadow-md">
                  {(likeCounts[currentReel.id] || 0).toLocaleString()}
                </span>
              </button>

              {/* Share Button */}
              <button
                onClick={() => handleShare(currentReel)}
                className="flex flex-col items-center gap-1 group cursor-pointer"
                title="Share Reel"
              >
                <div className="w-11 h-11 rounded-full bg-stone-900/60 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-stone-800 transition-all">
                  <Share2 className="w-5 h-5" />
                </div>
                <span className="text-[11px] font-bold drop-shadow-md">
                  {currentReel.shares}
                </span>
              </button>

              {/* Next / Previous Reel Navigation Buttons */}
              <div className="pt-2 flex flex-col gap-2">
                <button
                  onClick={handlePrevReel}
                  className="w-9 h-9 rounded-full bg-stone-900/60 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-rose-600 transition-colors cursor-pointer"
                  title="Previous Reel (Up Arrow)"
                >
                  <ChevronUp className="w-5 h-5" />
                </button>
                <button
                  onClick={handleNextReel}
                  className="w-9 h-9 rounded-full bg-stone-900/60 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-rose-600 transition-colors cursor-pointer"
                  title="Next Reel (Down Arrow)"
                >
                  <ChevronDown className="w-5 h-5" />
                </button>
              </div>

            </div>

            {/* Bottom Shoppable Product Banner Card */}
            <div className="relative z-30 p-3 sm:p-4 bg-gradient-to-t from-stone-950 via-stone-950/95 to-transparent pt-6 space-y-3">
              
              {/* Caption */}
              <div className="space-y-1 pr-14">
                <h3 className="text-sm font-bold text-white leading-snug drop-shadow-md">
                  {currentReel.title}
                </h3>
                <p className="text-xs text-white/80 line-clamp-2 drop-shadow-xs">
                  {currentReel.caption}
                </p>
              </div>

              {/* Shoppable Product Card Drawer */}
              <div className="p-3 rounded-2xl bg-white text-stone-900 shadow-2xl border border-rose-200 flex items-center justify-between gap-3">
                
                <div 
                  onClick={(e) => handleProductDetail(currentReel, e)}
                  className="flex items-center gap-2.5 min-w-0 cursor-pointer group/item flex-1"
                >
                  <img loading="lazy"
                    src={currentReel.productImage}
                    alt={currentReel.productName}
                    className="w-12 h-12 rounded-xl object-cover border border-rose-100 bg-rose-50 shrink-0 group-hover/item:scale-105 transition-transform"
                  />
                  <div className="min-w-0">
                    <span className="text-[9px] font-black uppercase tracking-wider text-rose-600 block">
                      {currentReel.category}
                    </span>
                    <h4 className="text-xs font-bold text-stone-900 truncate leading-tight group-hover/item:text-rose-700">
                      {currentReel.productName}
                    </h4>
                    <div className="flex items-baseline gap-2 mt-0.5">
                      <span className="text-sm font-black text-rose-700">
                        ₹{currentReel.productPrice.toLocaleString()}
                      </span>
                      <span className="text-[10px] text-stone-400 line-through">
                        ₹{currentReel.productOriginalPrice.toLocaleString()}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex items-center gap-1.5 shrink-0">
                  <button
                    onClick={(e) => handleQuickAdd(currentReel, e)}
                    className="px-3.5 py-2 rounded-xl bg-rose-600 hover:bg-rose-700 text-white text-xs font-bold flex items-center gap-1.5 shadow-sm transition-all active:scale-95 cursor-pointer"
                  >
                    <ShoppingBag className="w-3.5 h-3.5" />
                    <span>Add</span>
                  </button>
                </div>

              </div>

            </div>

          </div>

          {/* Desktop Next / Prev floating side controls */}
          <div className="hidden lg:flex flex-col gap-4 ml-6 text-white">
            <button
              onClick={handlePrevReel}
              className="w-12 h-12 rounded-full bg-white/10 hover:bg-white/25 backdrop-blur-md border border-white/20 flex items-center justify-center transition-all cursor-pointer"
              title="Previous Reel (Arrow Up)"
            >
              <ChevronUp className="w-6 h-6" />
            </button>
            <button
              onClick={handleNextReel}
              className="w-12 h-12 rounded-full bg-white/10 hover:bg-white/25 backdrop-blur-md border border-white/20 flex items-center justify-center transition-all cursor-pointer"
              title="Next Reel (Arrow Down)"
            >
              <ChevronDown className="w-6 h-6" />
            </button>
          </div>

        </div>
      )}

      {/* Floating Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 bg-stone-900 text-white px-4 py-3 rounded-2xl shadow-2xl border border-rose-500/40 flex items-center gap-2.5 text-xs font-semibold animate-in slide-in-from-bottom-4 duration-300">
          <div className="w-5 h-5 rounded-full bg-emerald-500 text-white flex items-center justify-center shrink-0">
            <Check className="w-3 h-3" />
          </div>
          <span>{toastMessage}</span>
        </div>
      )}

    </section>
  );
};
