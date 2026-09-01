export interface BeautyReel {
  id: string;
  title: string;
  caption: string;
  creator: string;
  handle: string;
  avatar: string;
  videoUrl: string;
  fallbackPoster: string;
  duration: number; // in seconds
  likes: number;
  views: string;
  shares: number;
  productId: string;
  productName: string;
  productPrice: number;
  productOriginalPrice: number;
  productImage: string;
  category: string;
  tag: string;
}

export const BEAUTY_REELS: BeautyReel[] = [
  {
    id: 'reel-1',
    title: 'Morning Glass Skin Dew Routine in 60s ✨',
    caption: 'Layering our Triple Molecular Hyaluronic & Niacinamide Dew Drops for that lit-from-within glow without greasiness! #GlassSkin #CleanBeauty',
    creator: 'Ananya Sharma',
    handle: '@ananya_glows',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80',
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-applying-facial-cream-on-the-face-41130-large.mp4',
    fallbackPoster: 'https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?auto=format&fit=crop&w=800&q=80',
    duration: 14,
    likes: 14200,
    views: '84.5K',
    shares: 890,
    productId: 'sk-1',
    productName: 'Triple Molecular Hyaluronic Essence',
    productPrice: 1499,
    productOriginalPrice: 1899,
    productImage: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=400&q=80',
    category: 'Skincare',
    tag: 'Trending Viral'
  },
  {
    id: 'reel-2',
    title: 'Peptide Glaze Lip Oil Swatches on 3 Skin Tones 💋',
    caption: 'Zero stickiness, pure plump hydration! Infused with French wild berry seed oils and botanical squalane. #LipOilObsessed',
    creator: 'Rhea Sen',
    handle: '@rhea_artistry',
    avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=150&q=80',
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-woman-putting-on-pink-lipstick-41134-large.mp4',
    fallbackPoster: 'https://images.unsplash.com/photo-1586495777744-4413f21062fa?auto=format&fit=crop&w=800&q=80',
    duration: 12,
    likes: 22800,
    views: '128K',
    shares: 1640,
    productId: 'mk-1',
    productName: 'Hydra-Plump Peptide Lip Glaze Oil',
    productPrice: 899,
    productOriginalPrice: 1199,
    productImage: 'https://images.unsplash.com/photo-1586495777744-4413f21062fa?auto=format&fit=crop&w=400&q=80',
    category: 'Makeup',
    tag: 'Best Seller'
  },
  {
    id: 'reel-3',
    title: 'How I Repaired My Damaged Scalp & Reduced Hair Fall 🌿',
    caption: 'My weekly ritual with Cold-Pressed Rosemary & Biotin Scalp Elixir. Massage 10 mins before wash! Results in 4 weeks. #HairGrowthJourney',
    creator: 'Dr. Tanya Mehta',
    handle: '@dermat_tanya',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=150&q=80',
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-young-woman-touching-her-hair-41129-large.mp4',
    fallbackPoster: 'https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?auto=format&fit=crop&w=800&q=80',
    duration: 15,
    likes: 31400,
    views: '194K',
    shares: 2890,
    productId: 'hc-1',
    productName: 'Rosemary & Biotin Scalp Density Elixir',
    productPrice: 1299,
    productOriginalPrice: 1699,
    productImage: 'https://images.unsplash.com/photo-1608248597359-299f187a550c?auto=format&fit=crop&w=400&q=80',
    category: 'Haircare',
    tag: 'Clinical Tested'
  },
  {
    id: 'reel-4',
    title: 'Zero Whitecast Invisible Water Gel SPF 50+ ☀️',
    caption: 'Testing under UV camera! Absorbs in 3 seconds, leaves zero greasy film and sits flawlessly under everyday makeup. #SunscreenReview',
    creator: 'Pooja Hegde',
    handle: '@pooja_cleanbeauty',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=150&q=80',
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-woman-applying-sunscreen-cream-on-her-face-41131-large.mp4',
    fallbackPoster: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=800&q=80',
    duration: 11,
    likes: 18900,
    views: '112K',
    shares: 1150,
    productId: 'sk-4',
    productName: 'Invisible Shield Mineral UV Fluid SPF 50+',
    productPrice: 1199,
    productOriginalPrice: 1499,
    productImage: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=400&q=80',
    category: 'Sun Protection',
    tag: 'Editor Choice'
  },
  {
    id: 'reel-5',
    title: 'Lymphatic Drainage Sculpt with Rose Quartz Gua Sha 💆‍♀️',
    caption: 'Depuffing morning routine with cold-pressed rosehip oil. Follow these 4 upward strokes along the jawline and cheekbones! #GuaShaTutorial',
    creator: 'Mira Kapoor',
    handle: '@mira_holistic',
    avatar: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=150&q=80',
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-massage-on-the-face-of-a-woman-41133-large.mp4',
    fallbackPoster: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=800&q=80',
    duration: 16,
    likes: 27500,
    views: '168K',
    shares: 2420,
    productId: 'ac-1',
    productName: 'Handcrafted Brazilian Rose Quartz Gua Sha',
    productPrice: 849,
    productOriginalPrice: 1099,
    productImage: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=400&q=80',
    category: 'Accessories',
    tag: 'Viral Ritual'
  },
  {
    id: 'reel-6',
    title: 'Grasse Jasmine & Bergamot Scent That Lasts 12+ Hours 🌸',
    caption: 'The most complimented artisan scent I own. Warm amber base, crisp Italian bergamot, and hand-harvested Jasmine Sambac. #NicheFragrance',
    creator: 'Zoya Khan',
    handle: '@zoya_perfumes',
    avatar: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=150&q=80',
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-spraying-perfume-on-the-wrist-41132-large.mp4',
    fallbackPoster: 'https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?auto=format&fit=crop&w=800&q=80',
    duration: 13,
    likes: 19800,
    views: '96.2K',
    shares: 1320,
    productId: 'fr-1',
    productName: 'Jasmine & Amber Fleur Eau De Parfum',
    productPrice: 2899,
    productOriginalPrice: 3499,
    productImage: 'https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?auto=format&fit=crop&w=400&q=80',
    category: 'Fragrance',
    tag: 'Haute Luxury'
  }
];
