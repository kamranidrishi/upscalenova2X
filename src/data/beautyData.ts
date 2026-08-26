export type BeautyCategory = 'Skincare' | 'Makeup' | 'Haircare' | 'Body Care' | 'Fragrance' | 'Accessories';

export interface BeautyProduct {
  id: string;
  name: string;
  subtitle: string;
  category: BeautyCategory;
  price: number;
  originalPrice: number;
  rating: number;
  reviewsCount: number;
  image: string;
  galleryImages: string[];
  volume: string;
  skinType: 'All Skin Types' | 'Oily & Acne-Prone' | 'Dry & Dehydrated' | 'Sensitive' | 'Combination' | 'Normal to Dry';
  benefit: 'Brightening' | 'Anti-Aging' | 'Deep Hydration' | 'Barrier Repair' | 'Pore Minimizing' | 'Sun Protection' | 'Glow & Radiance' | 'Volumizing' | 'Nourishing' | 'Long Lasting' | 'Detoxifying';
  badge?: 'Best Seller' | 'Trending' | 'New' | 'Award Winner' | 'Flash Deal' | 'Special Offer' | 'Editor Pick' | 'Hot Deal';
  description: string;
  ingredients: string[];
  howToUse: string;
  clinicalResults?: string;
  shades?: { name: string; hex: string }[];
  isBestSeller?: boolean;
  isTrending?: boolean;
  isNewArrival?: boolean;
  isSpecialOffer?: boolean;
  inStock: boolean;
}

export interface ReviewItem {
  id: string;
  author: string;
  rating: number;
  date: string;
  title: string;
  comment: string;
  productName: string;
  verified: boolean;
  avatar: string;
  skinType?: string;
}

export interface BlogPost {
  id: string;
  title: string;
  category: string;
  readTime: string;
  image: string;
  excerpt: string;
  author: string;
  date: string;
  content: string;
}

export const BEAUTY_CATEGORIES = [
  {
    id: 'Skincare',
    name: 'Skincare Essentials',
    subtitle: 'Serums, Creams, Toners & SPF',
    image: 'https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?auto=format&fit=crop&w=600&q=80',
    itemCount: '15 Products'
  },
  {
    id: 'Makeup',
    name: 'Makeup Collection',
    subtitle: 'Foundations, Lipsticks & Eye Palettes',
    image: 'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?auto=format&fit=crop&w=600&q=80',
    itemCount: '15 Products'
  },
  {
    id: 'Haircare',
    name: 'Hair Care Rituals',
    subtitle: 'Shampoos, Oils, Serums & Masks',
    image: 'https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?auto=format&fit=crop&w=600&q=80',
    itemCount: '7 Products'
  },
  {
    id: 'Body Care',
    name: 'Body Care & Bath',
    subtitle: 'Whipped Butters, Lotions & Scrubs',
    image: 'https://images.unsplash.com/photo-1608248597359-299f187a550c?auto=format&fit=crop&w=600&q=80',
    itemCount: '6 Products'
  },
  {
    id: 'Fragrance',
    name: 'Artisan Fragrances',
    subtitle: 'Eau de Parfum, Mists & Gift Sets',
    image: 'https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?auto=format&fit=crop&w=600&q=80',
    itemCount: '4 Fragrances'
  },
  {
    id: 'Accessories',
    name: 'Beauty Accessories',
    subtitle: 'Brushes, Blenders, Rollers & Gua Sha',
    image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=600&q=80',
    itemCount: '6 Tools'
  }
];

export const BEAUTY_PRODUCTS: BeautyProduct[] = [
  // ==========================================
  // 1. SKINCARE ESSENTIALS (15 Products)
  // ==========================================
  {
    id: 'skin-1',
    name: 'Rose Gold Radiance Elixir',
    subtitle: 'Cold-Pressed Rosehip & 24K Botanical Glow Serum',
    category: 'Skincare',
    price: 1899,
    originalPrice: 2499,
    rating: 4.9,
    reviewsCount: 342,
    image: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=800&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1608248597359-299f187a550c?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=800&q=80'
    ],
    volume: '30 ml / 1.0 fl oz',
    skinType: 'All Skin Types',
    benefit: 'Brightening',
    badge: 'Best Seller',
    isBestSeller: true,
    isTrending: true,
    inStock: true,
    description: 'An iconic facial elixir infused with pure cold-pressed wild rosehip, squalane, and microscopic 24K gold flakes. Delivers 72 hours of deep dewiness while fading dark spots and boosting collagen.',
    ingredients: ['Organic Chilean Rosehip Oil', 'Plant-Derived Squalane', '24K Gold Flakes', 'Vitamin C Ester (15%)', 'Tocopherol (Vitamin E)'],
    howToUse: 'Warm 3-4 drops between clean palms and gently press onto cleansed face, neck, and décolletage morning and evening before moisturizer.',
    clinicalResults: '97% noticed an instant dewy glass glow; 92% saw reduced pigmentation after 2 weeks of twice-daily use.'
  },
  {
    id: 'skin-2',
    name: 'Gentle Oat & Squalane Face Cleanser',
    subtitle: 'Barrier-Friendly Calming Milk Cleanser',
    category: 'Skincare',
    price: 699,
    originalPrice: 899,
    rating: 4.8,
    reviewsCount: 198,
    image: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=800&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?auto=format&fit=crop&w=800&q=80'
    ],
    volume: '150 ml / 5.1 fl oz',
    skinType: 'Sensitive',
    benefit: 'Barrier Repair',
    badge: 'Trending',
    isTrending: true,
    inStock: true,
    description: 'A non-foaming pH-balanced creamy cleanser that melts away waterproof sunscreen and daily pollution while soothing redness with colloidal oatmeal and sugarcane squalane.',
    ingredients: ['Colloidal Oatmeal', '100% Olive Squalane', 'Chamomile Hydrosol', 'Allantoin', 'Glycerin'],
    howToUse: 'Massage onto damp skin in circular motions for 60 seconds. Rinse thoroughly with lukewarm water.',
    clinicalResults: '100% of sensitive skin testers reported zero tightness or stinging post-wash.'
  },
  {
    id: 'skin-3',
    name: 'Foaming Papaya Enzyme Face Wash',
    subtitle: 'Deep Pore Clarifying & Brightening Wash',
    category: 'Skincare',
    price: 499,
    originalPrice: 650,
    rating: 4.7,
    reviewsCount: 284,
    image: 'https://images.unsplash.com/photo-1556228722-d0b73c438b4c?auto=format&fit=crop&w=800&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1556228722-d0b73c438b4c?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=800&q=80'
    ],
    volume: '120 ml / 4.0 fl oz',
    skinType: 'Oily & Acne-Prone',
    benefit: 'Pore Minimizing',
    badge: 'Special Offer',
    isSpecialOffer: true,
    inStock: true,
    description: 'Gentle fruit enzyme face wash powered by active Papain, Green Tea, and Tea Tree oil that dissolves excess sebum and unclogs congested pores without stripping essential lipids.',
    ingredients: ['Papaya Fruit Enzyme', 'Organic Green Tea Extract', 'Australian Tea Tree', 'Niacinamide 2%', 'Aloe Vera Juice'],
    howToUse: 'Pump rich foam onto palms, work over wet face concentrating on T-zone, and rinse clean.',
    clinicalResults: '91% noted visible reduction in blackheads and midday forehead shine.'
  },
  {
    id: 'skin-4',
    name: 'Vitamin C 15% Glow Drop Serum',
    subtitle: 'Pure Ethyl Ascorbic Acid + Ferulic Radiance Shield',
    category: 'Skincare',
    price: 1199,
    originalPrice: 1599,
    rating: 4.9,
    reviewsCount: 512,
    image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=800&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=800&q=80'
    ],
    volume: '30 ml / 1.0 fl oz',
    skinType: 'All Skin Types',
    benefit: 'Brightening',
    badge: 'Best Seller',
    isBestSeller: true,
    isTrending: true,
    inStock: true,
    description: 'High-potency antioxidant serum formulated with 15% stable 3-O-Ethyl Ascorbic Acid, 0.5% Ferulic Acid, and Japanese Kakadu Plum to erase sun spots and stimulate pro-collagen.',
    ingredients: ['15% Ethyl Ascorbic Acid', '0.5% Ferulic Acid', 'Kakadu Plum Extract', 'Hyaluronic Acid', 'Vitamin E'],
    howToUse: 'Apply 3-5 drops every morning to clean, dry skin. Follow immediately with sunscreen SPF 50.',
    clinicalResults: '89% demonstrated visible lightening of acne marks within 21 days.'
  },
  {
    id: 'skin-5',
    name: 'Hyaluronic Dew Multi-Depth Serum',
    subtitle: '4D Molecular Weight Hydration Plumper',
    category: 'Skincare',
    price: 999,
    originalPrice: 1299,
    rating: 4.8,
    reviewsCount: 375,
    image: 'https://images.unsplash.com/photo-1617897903246-719242758050?auto=format&fit=crop&w=800&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1617897903246-719242758050?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=800&q=80'
    ],
    volume: '30 ml / 1.0 fl oz',
    skinType: 'Dry & Dehydrated',
    benefit: 'Deep Hydration',
    badge: 'Editor Pick',
    inStock: true,
    description: 'Quenches parched skin with 4 different molecular sizes of Hyaluronic Acid, infusing hydration from the surface down to deep epidermal layers for bouncy, dewy plumpness.',
    ingredients: ['Multi-Molecular Hyaluronic Acid 2%', 'Pro-Vitamin B5 (Panthenol)', 'Snow Mushroom Extract', 'Polyglutamic Acid'],
    howToUse: 'Apply onto slightly damp skin morning and night, followed by your favorite moisturizer to seal.',
    clinicalResults: 'Instantly increases cellular hydration levels by +168% for up to 48 hours.'
  },
  {
    id: 'skin-6',
    name: '10% Niacinamide + 1% Zinc Clarity Serum',
    subtitle: 'Blemish Defense & Pore Refining Concentrate',
    category: 'Skincare',
    price: 899,
    originalPrice: 1199,
    rating: 4.8,
    reviewsCount: 430,
    image: 'https://images.unsplash.com/photo-1601049541289-9b1b7bbbfe19?auto=format&fit=crop&w=800&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1601049541289-9b1b7bbbfe19?auto=format&fit=crop&w=800&q=80'
    ],
    volume: '30 ml / 1.0 fl oz',
    skinType: 'Oily & Acne-Prone',
    benefit: 'Pore Minimizing',
    badge: 'Trending',
    isTrending: true,
    inStock: true,
    description: 'Clinically calibrated clarifying formula that regulates excess sebum secretion, minimizes enlarged pores, and calms persistent inflammatory redness.',
    ingredients: ['Niacinamide (Vitamin B3) 10%', 'Zinc PCA 1%', 'Centella Asiatica', 'Glycerin', 'Tamarind Seed Extract'],
    howToUse: 'Dispense 2-3 drops all over face morning and night before heavier creams.',
    clinicalResults: '94% saw marked reduction in oiliness and visible pore diameter in 14 days.'
  },
  {
    id: 'skin-7',
    name: 'Micro-Encapsulated Retinol 0.5% Night Serum',
    subtitle: 'Slow-Release Time Delay Anti-Aging Elixir',
    category: 'Skincare',
    price: 1499,
    originalPrice: 1999,
    rating: 4.9,
    reviewsCount: 290,
    image: 'https://images.unsplash.com/photo-1629732047847-50219e9c5aef?auto=format&fit=crop&w=800&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1629732047847-50219e9c5aef?auto=format&fit=crop&w=800&q=80'
    ],
    volume: '30 ml / 1.0 fl oz',
    skinType: 'All Skin Types',
    benefit: 'Anti-Aging',
    badge: 'Award Winner',
    isNewArrival: true,
    inStock: true,
    description: 'Encapsulated pure Retinol combined with Phospholipids and Peptides that gently resurfaces fine lines, wrinkles, and texture overnight with minimal flaking or peeling.',
    ingredients: ['Encapsulated Retinol 0.5%', 'Peptide Complex', 'Ceramide NP', 'Squalane', 'Evening Primrose Oil'],
    howToUse: 'Use 2-3 nights per week initially at bedtime on clean, dry skin. Always wear sunscreen during daytime.',
    clinicalResults: '93% demonstrated smoother skin texture and firmer facial contours after 4 weeks.'
  },
  {
    id: 'skin-8',
    name: 'Ceramide Cloud Barrier Face Moisturizer',
    subtitle: 'Triple Ceramide + Cica Healing Cream',
    category: 'Skincare',
    price: 1299,
    originalPrice: 1699,
    rating: 4.9,
    reviewsCount: 480,
    image: 'https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?auto=format&fit=crop&w=800&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=800&q=80'
    ],
    volume: '50 ml / 1.7 oz',
    skinType: 'Sensitive',
    benefit: 'Barrier Repair',
    badge: 'Best Seller',
    isBestSeller: true,
    inStock: true,
    description: 'A whipped, velvety moisturizer that mimics skin’s natural lipid structure with Ceramides NP, AP, EOP and Centella to repair stressed, damaged moisture barriers instantly.',
    ingredients: ['Ceramides Complex (NP, AP, EOP)', 'Centella Asiatica', 'Oat Beta-Glucan', 'Hyaluronic Acid', 'Shea Butter'],
    howToUse: 'Warm between fingertips and smooth evenly over face and neck morning and evening.',
    clinicalResults: 'Clinically proven to repair skin barrier integrity by 96% within 1 hour of application.'
  },
  {
    id: 'skin-9',
    name: 'Peptide Silk Overnight Night Cream',
    subtitle: 'Midnight Firming & Collagen Rebuilding Butter',
    category: 'Skincare',
    price: 1699,
    originalPrice: 2200,
    rating: 4.9,
    reviewsCount: 220,
    image: 'https://images.unsplash.com/photo-1567928815104-b7980ee5032e?auto=format&fit=crop&w=800&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1567928815104-b7980ee5032e?auto=format&fit=crop&w=800&q=80'
    ],
    volume: '50 ml / 1.7 oz',
    skinType: 'Dry & Dehydrated',
    benefit: 'Anti-Aging',
    badge: 'Trending',
    isTrending: true,
    inStock: true,
    description: 'Rich overnight recovery balm infused with Matrixyl 3000 peptides, Bakuchiol, and organic Blue Tansy that supports skin repair while you sleep.',
    ingredients: ['Matrixyl 3000 Peptides', 'Bakuchiol', 'Blue Tansy Oil', 'Hydrolyzed Silk', 'Marula Oil'],
    howToUse: 'Massage a nickel-sized amount onto face and neck as the final nighttime step.',
    clinicalResults: 'Overnight plumping effect confirmed by 98% of users waking up with rested, supple skin.'
  },
  {
    id: 'skin-10',
    name: 'Ultra-Light Hydrating Day Cream SPF 20',
    subtitle: 'Daily Vitamin Infusion & Blue Light Defense',
    category: 'Skincare',
    price: 899,
    originalPrice: 1199,
    rating: 4.7,
    reviewsCount: 160,
    image: 'https://images.unsplash.com/photo-1535585209827-a15fcdbc4c2d?auto=format&fit=crop&w=800&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1535585209827-a15fcdbc4c2d?auto=format&fit=crop&w=800&q=80'
    ],
    volume: '50 ml / 1.7 oz',
    skinType: 'Combination',
    benefit: 'Glow & Radiance',
    badge: 'New',
    isNewArrival: true,
    inStock: true,
    description: 'Fast-absorbing gel-cream that floods skin with hydration, antioxidant Green Tea, and broad-spectrum urban screen filters for everyday city living.',
    ingredients: ['Green Tea Polyphenols', 'Vitamin E', 'Broad Spectrum SPF 20 Filters', 'Hyaluronic Acid'],
    howToUse: 'Smooth generously over face 15 minutes before stepping outdoors.',
    clinicalResults: 'Delivers 24 hours of weightless hydration without greasy shine.'
  },
  {
    id: 'skin-11',
    name: 'Invisible Fluid Sunscreen SPF 50 PA++++',
    subtitle: 'Zero White Cast Water-Light Sun Fluid',
    category: 'Skincare',
    price: 799,
    originalPrice: 999,
    rating: 4.9,
    reviewsCount: 650,
    image: 'https://images.unsplash.com/photo-1563178406-4cdc2923acbc?auto=format&fit=crop&w=800&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1563178406-4cdc2923acbc?auto=format&fit=crop&w=800&q=80'
    ],
    volume: '50 ml / 1.7 fl oz',
    skinType: 'All Skin Types',
    benefit: 'Sun Protection',
    badge: 'Best Seller',
    isBestSeller: true,
    isTrending: true,
    inStock: true,
    description: 'Next-generation chemical UV filter technology that absorbs in 3 seconds leaving an imperceptible matte velvet finish without eye sting or flashback.',
    ingredients: ['Tinosorb S & M Filters', 'Uvinul A Plus', 'Niacinamide 2%', 'Cica Extract', 'Hyaluronic Acid'],
    howToUse: 'Apply 2 finger lengths generously over face and neck 15 minutes prior to sun exposure.',
    clinicalResults: '100% invisible on all deep skin tones with zero white cast or greasy film.'
  },
  {
    id: 'skin-12',
    name: 'Mineral Daily Sun Shield SPF 30 PA+++',
    subtitle: '100% Zinc Oxide Gentle Physical Sunscreen',
    category: 'Skincare',
    price: 849,
    originalPrice: 1099,
    rating: 4.7,
    reviewsCount: 190,
    image: 'https://images.unsplash.com/photo-1556228578-8c89e6adf883?auto=format&fit=crop&w=800&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1556228578-8c89e6adf883?auto=format&fit=crop&w=800&q=80'
    ],
    volume: '50 g / 1.7 oz',
    skinType: 'Sensitive',
    benefit: 'Sun Protection',
    badge: 'Special Offer',
    isSpecialOffer: true,
    inStock: true,
    description: 'Pure non-nano mineral Zinc Oxide formula designed specifically for rosacea-prone, reactive skin and post-procedure sun defense.',
    ingredients: ['Non-Nano Zinc Oxide (18%)', 'Aloe Barbadensis', 'Bisabolol', 'Vitamin E'],
    howToUse: 'Dot evenly across face and gently blend outwards until fully absorbed.',
    clinicalResults: 'Zero chemical allergens; dermatologist approved for hypersensitive skin.'
  },
  {
    id: 'skin-13',
    name: 'Damask Rose Pure Botanical Mist Toner',
    subtitle: 'Steam-Distilled Bulgarian Rose Hydrosol',
    category: 'Skincare',
    price: 599,
    originalPrice: 799,
    rating: 4.8,
    reviewsCount: 310,
    image: 'https://images.unsplash.com/photo-1616683693504-3ea7e9ad6fec?auto=format&fit=crop&w=800&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1616683693504-3ea7e9ad6fec?auto=format&fit=crop&w=800&q=80'
    ],
    volume: '120 ml / 4.0 fl oz',
    skinType: 'All Skin Types',
    benefit: 'Deep Hydration',
    badge: 'Trending',
    isTrending: true,
    inStock: true,
    description: '100% single-ingredient steam-distilled organic rose water that balances pH, tightens pore appearance, and refreshes tired skin throughout the day.',
    ingredients: ['100% Organic Rosa Damascena Flower Water'],
    howToUse: 'Hold 6 inches away and mist 3-4 pumps over face after cleansing or over makeup.',
    clinicalResults: 'Instantly restores optimal skin acid mantle pH 5.5 within 30 seconds.'
  },
  {
    id: 'skin-14',
    name: 'Clarifying Japanese Matcha Clay Mask',
    subtitle: 'Kaolin & Ceremonial Green Tea Detox Treatment',
    category: 'Skincare',
    price: 749,
    originalPrice: 999,
    rating: 4.8,
    reviewsCount: 245,
    image: 'https://images.unsplash.com/photo-1571781926291-c477ebfd024b?auto=format&fit=crop&w=800&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1571781926291-c477ebfd024b?auto=format&fit=crop&w=800&q=80'
    ],
    volume: '80 g / 2.8 oz',
    skinType: 'Oily & Acne-Prone',
    benefit: 'Detoxifying',
    badge: 'Hot Deal',
    isSpecialOffer: true,
    inStock: true,
    description: 'Creamy non-drying detox clay mask enriched with Uji Matcha and French Kaolin that gently draws out clogged sebum and clarifies congested pores.',
    ingredients: ['Ceremonial Grade Uji Matcha', 'French White Kaolin Clay', 'Willow Bark (Natural Salicylic)', 'Aloe Vera'],
    howToUse: 'Apply an even layer over face, leave for 10 minutes until semi-dry, and rinse with warm water.',
    clinicalResults: '95% reported smaller-looking pores and velvety soft texture after first use.'
  },
  {
    id: 'skin-15',
    name: 'Caffeine & Peptide Eye Awakening Contour Cream',
    subtitle: 'Dark Circle & Under-Eye Puffiness Defier',
    category: 'Skincare',
    price: 949,
    originalPrice: 1299,
    rating: 4.8,
    reviewsCount: 390,
    image: 'https://images.unsplash.com/photo-1512290900672-1f02e8633346?auto=format&fit=crop&w=800&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1512290900672-1f02e8633346?auto=format&fit=crop&w=800&q=80'
    ],
    volume: '15 ml / 0.5 fl oz',
    skinType: 'All Skin Types',
    benefit: 'Brightening',
    badge: 'Best Seller',
    isBestSeller: true,
    inStock: true,
    description: 'Lightweight depuffing eye gel-cream with 5% Green Coffee Caffeine, Haloxyl peptides, and light-reflecting mineral pearls that erase dark circles.',
    ingredients: ['Green Coffee Bean Caffeine 5%', 'Haloxyl Peptide Complex', 'Niacinamide', 'Hyaluronic Acid'],
    howToUse: 'Gently pat a rice-grain amount around orbital eye bone with ring finger morning and night.',
    clinicalResults: '88% saw reduced under-eye morning puffiness within 15 minutes of application.'
  },

  // ==========================================
  // 2. MAKEUP COLLECTION (15 Products)
  // ==========================================
  {
    id: 'mu-1',
    name: 'Second Skin Luminous Silk Foundation',
    subtitle: 'Buildable Medium-to-Full Radiant Liquid Base',
    category: 'Makeup',
    price: 1499,
    originalPrice: 1999,
    rating: 4.9,
    reviewsCount: 620,
    image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=800&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=800&q=80'
    ],
    volume: '30 ml / 1.0 fl oz',
    skinType: 'All Skin Types',
    benefit: 'Glow & Radiance',
    badge: 'Best Seller',
    isBestSeller: true,
    isTrending: true,
    inStock: true,
    shades: [
      { name: 'Warm Ivory 10', hex: '#F3D8C7' },
      { name: 'Golden Beige 20', hex: '#E5C0A0' },
      { name: 'Warm Sand 30', hex: '#D2A679' },
      { name: 'Rich Caramel 40', hex: '#A87A51' }
    ],
    description: 'Micro-milled pigment foundation infused with Hyaluronic Acid and Squalane that mimics healthy skin texture with a radiant satin veil for 16 hours.',
    ingredients: ['Plant Squalane', 'Hyaluronic Spheres', 'Micro-Coated Mineral Pigments', 'Vitamin E'],
    howToUse: 'Dispense 1-2 pumps onto back of hand and blend with foundation brush or damp blender sponge.',
    clinicalResults: '16-hour sweat-resistant wear with zero cakey crease lines.'
  },
  {
    id: 'mu-2',
    name: 'Soft Focus Seamless Liquid Concealer',
    subtitle: 'Creaseless Full-Coverage Hydrating Concealer',
    category: 'Makeup',
    price: 699,
    originalPrice: 899,
    rating: 4.8,
    reviewsCount: 380,
    image: 'https://images.unsplash.com/photo-1599733589046-10c005738ef9?auto=format&fit=crop&w=800&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1599733589046-10c005738ef9?auto=format&fit=crop&w=800&q=80'
    ],
    volume: '6 ml / 0.2 fl oz',
    skinType: 'All Skin Types',
    benefit: 'Brightening',
    badge: 'Trending',
    isTrending: true,
    inStock: true,
    shades: [
      { name: 'Fair Light', hex: '#F9E4D4' },
      { name: 'Medium Honey', hex: '#DEB887' },
      { name: 'Deep Almond', hex: '#9E6845' }
    ],
    description: 'Creamy doe-foot wand concealer that covers stubborn blemishes and under-eye discoloration without settling into fine lines.',
    ingredients: ['Caffeine', 'Niacinamide', 'Vitamin E', 'Silica Spheres'],
    howToUse: 'Dot directly on spots or under eye triangles and blend gently with fingertips or sponge.',
    clinicalResults: '96% noted complete concealment of dark circles without creasing all day.'
  },
  {
    id: 'mu-3',
    name: 'Velveteen Matte Compact Powder',
    subtitle: 'Oil-Controlling Blur Compact with SPF 15',
    category: 'Makeup',
    price: 599,
    originalPrice: 799,
    rating: 4.7,
    reviewsCount: 290,
    image: 'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?auto=format&fit=crop&w=800&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?auto=format&fit=crop&w=800&q=80'
    ],
    volume: '9 g / 0.3 oz',
    skinType: 'Oily & Acne-Prone',
    benefit: 'Pore Minimizing',
    badge: 'Special Offer',
    isSpecialOffer: true,
    inStock: true,
    shades: [
      { name: 'Porcelain', hex: '#F7E7D9' },
      { name: 'Warm Natural', hex: '#DFC0A4' },
      { name: 'Sun Tan', hex: '#B58763' }
    ],
    description: 'Silky micro-fine pressed compact powder that instantly locks makeup, absorbs excess shine, and blurs pores with an airy matte finish.',
    ingredients: ['Talc-Free Mica', 'Rice Starch', 'Silica', 'Zinc Stearate', 'Vitamin E'],
    howToUse: 'Press onto T-zone with included velvet puff or sweep over entire face with a fluffy powder brush.',
    clinicalResults: 'Controls oil and shine for 10 continuous hours in humid conditions.'
  },
  {
    id: 'mu-4',
    name: 'Translucent Mineral Loose Setting Powder',
    subtitle: 'Flashback-Free Ultra-Light Airbrush Powder',
    category: 'Makeup',
    price: 899,
    originalPrice: 1199,
    rating: 4.9,
    reviewsCount: 410,
    image: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&w=800&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&w=800&q=80'
    ],
    volume: '15 g / 0.5 oz',
    skinType: 'All Skin Types',
    benefit: 'Long Lasting',
    badge: 'Award Winner',
    isBestSeller: true,
    inStock: true,
    description: 'Weightless baking and setting powder that locks foundation for 24 hours with zero white flash in photography.',
    ingredients: ['Silica', 'Organic Tapioca Starch', 'Corn Starch', 'Iron Oxides'],
    howToUse: 'Dip puff into loose powder, tap off excess, and press under eyes and forehead.',
    clinicalResults: '100% flashback-proof under high definition studio and phone flashes.'
  },
  {
    id: 'mu-5',
    name: 'Petal Whipped Velvet Cream Blush',
    subtitle: 'Multi-Use Lip & Cheek Dewy Color Pot',
    category: 'Makeup',
    price: 649,
    originalPrice: 850,
    rating: 4.9,
    reviewsCount: 360,
    image: 'https://images.unsplash.com/photo-1596704017254-9b121068fb31?auto=format&fit=crop&w=800&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1596704017254-9b121068fb31?auto=format&fit=crop&w=800&q=80'
    ],
    volume: '8 g / 0.28 oz',
    skinType: 'All Skin Types',
    benefit: 'Glow & Radiance',
    badge: 'Trending',
    isTrending: true,
    inStock: true,
    shades: [
      { name: 'Rose Petal', hex: '#D66A78' },
      { name: 'Coral Sunrise', hex: '#E87D65' },
      { name: 'Berry Flush', hex: '#9E3253' }
    ],
    description: 'Buttery whipped cream blush enriched with nourishing Murumuru butter that melts into cheeks for a lit-from-within flush.',
    ingredients: ['Murumuru Seed Butter', 'Jojoba Oil', 'Mineral Pigments', 'Vitamin E'],
    howToUse: 'Dab onto apples of cheeks with fingertips and blend upwards towards temples.',
    clinicalResults: 'Seamless buildable color that lasts 12 hours without fading.'
  },
  {
    id: 'mu-6',
    name: 'Champagne Glass Liquid Highlighter',
    subtitle: 'Prismatic Strobing Drop with Micro-Pearls',
    category: 'Makeup',
    price: 799,
    originalPrice: 1099,
    rating: 4.8,
    reviewsCount: 270,
    image: 'https://images.unsplash.com/photo-1583241800698-e8ab01830a07?auto=format&fit=crop&w=800&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1583241800698-e8ab01830a07?auto=format&fit=crop&w=800&q=80'
    ],
    volume: '15 ml / 0.5 fl oz',
    skinType: 'All Skin Types',
    benefit: 'Glow & Radiance',
    badge: 'New',
    isNewArrival: true,
    inStock: true,
    shades: [
      { name: 'Champagne Gold', hex: '#EED9A6' },
      { name: 'Rose Quartz Glow', hex: '#F0C7C4' }
    ],
    description: 'Ultra-concentrated liquid illuminator packed with ultra-fine light-refracting pearls for wet-look, glass cheekbones.',
    ingredients: ['Refined Synthetic Fluorphlogopite', 'Squalane', 'Rosemary Extract'],
    howToUse: 'Tap high points of cheekbones, nose bridge, and cupid bow, or mix into foundation.',
    clinicalResults: '99% reported non-glittery, natural wet-dew radiance.'
  },
  {
    id: 'mu-7',
    name: 'Sunkissed Terracotta Matte Bronzer',
    subtitle: 'Silky Warmth & Sculpting Powder',
    category: 'Makeup',
    price: 699,
    originalPrice: 950,
    rating: 4.7,
    reviewsCount: 180,
    image: 'https://images.unsplash.com/photo-1503236823255-94609f598e71?auto=format&fit=crop&w=800&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1503236823255-94609f598e71?auto=format&fit=crop&w=800&q=80'
    ],
    volume: '10 g / 0.35 oz',
    skinType: 'All Skin Types',
    benefit: 'Glow & Radiance',
    badge: 'Special Offer',
    isSpecialOffer: true,
    inStock: true,
    description: 'Golden terracotta matte bronzing powder that warms up skin with natural sun-kissed dimension without orange undertones.',
    ingredients: ['Micronized Mica', 'Cocoa Seed Butter', 'Vitamin E', 'Iron Oxides'],
    howToUse: 'Sweep in a “3” shape from temples, under cheekbones, and along jawline.',
    clinicalResults: 'Natural warmth that blends smoothly without patchy lines.'
  },
  {
    id: 'mu-8',
    name: 'Desert Rose 12-Pan Eyeshadow Palette',
    subtitle: 'Velvet Mattes, Duochromes & Foiled Metallics',
    category: 'Makeup',
    price: 1499,
    originalPrice: 1999,
    rating: 4.9,
    reviewsCount: 450,
    image: 'https://images.unsplash.com/photo-1583241477543-577e923e595b?auto=format&fit=crop&w=800&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1583241477543-577e923e595b?auto=format&fit=crop&w=800&q=80'
    ],
    volume: '12 Shades / 18 g',
    skinType: 'All Skin Types',
    benefit: 'Long Lasting',
    badge: 'Best Seller',
    isBestSeller: true,
    inStock: true,
    description: 'A curated luxury palette containing 12 buttery pigmented shades ranging from soft neutral nudes to rich burgundies and molten golds.',
    ingredients: ['Mineral Mica', 'Kaolin', 'Dimethicone', 'Tocopherol'],
    howToUse: 'Apply mattes to eyelid crease for depth and pat metallics on eyelid center.',
    clinicalResults: 'One-swipe intense color payoff with zero chalkiness.'
  },
  {
    id: 'mu-9',
    name: 'Precision 24H Waterproof Liquid Eyeliner',
    subtitle: '0.1mm Ultra-Fine Japanese Calligraphy Tip',
    category: 'Makeup',
    price: 499,
    originalPrice: 699,
    rating: 4.8,
    reviewsCount: 520,
    image: 'https://images.unsplash.com/photo-1631214500115-598fc2cb8d2d?auto=format&fit=crop&w=800&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1631214500115-598fc2cb8d2d?auto=format&fit=crop&w=800&q=80'
    ],
    volume: '1.2 ml / 0.04 fl oz',
    skinType: 'All Skin Types',
    benefit: 'Long Lasting',
    badge: 'Trending',
    isTrending: true,
    inStock: true,
    description: 'Jet-black carbon flex tip eyeliner that glides seamlessly for razor-sharp wings with 24-hour waterproof and smudge-proof hold.',
    ingredients: ['Carbon Black', 'Waterproof Polymers', 'Acrylates Copolymer'],
    howToUse: 'Draw along lash line starting from inner corner extending outward into wing.',
    clinicalResults: '24-hour smudge-proof performance tested across sweat and tear simulation.'
  },
  {
    id: 'mu-10',
    name: 'Lash Sculpt Tubing & Volumizing Mascara',
    subtitle: '360° Fiber Extension & Clean Warm Water Removal',
    category: 'Makeup',
    price: 699,
    originalPrice: 899,
    rating: 4.9,
    reviewsCount: 470,
    image: 'https://images.unsplash.com/photo-1587754256282-a11d04e3472d?auto=format&fit=crop&w=800&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1587754256282-a11d04e3472d?auto=format&fit=crop&w=800&q=80'
    ],
    volume: '9 ml / 0.3 fl oz',
    skinType: 'All Skin Types',
    benefit: 'Volumizing',
    badge: 'Award Winner',
    isNewArrival: true,
    inStock: true,
    description: 'Tubing mascara technology that forms micro-tubes around each lash for sky-high length and volume that slides off cleanly with warm water.',
    ingredients: ['Polymer Micro-Tubes', 'Castor Oil', 'Arginine', 'Iron Oxides'],
    howToUse: 'Wiggle wand from lash root to tip. Add second coat before first coat dries.',
    clinicalResults: '+250% lash volume increase with zero flaking or panda eye smudges.'
  },
  {
    id: 'mu-11',
    name: 'Intense Kohl Gel Smokey Kajal',
    subtitle: 'Castor & Almond Oil Waterproof 16H Kajal',
    category: 'Makeup',
    price: 349,
    originalPrice: 499,
    rating: 4.8,
    reviewsCount: 390,
    image: 'https://images.unsplash.com/photo-1590393802698-33439975768e?auto=format&fit=crop&w=800&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1590393802698-33439975768e?auto=format&fit=crop&w=800&q=80'
    ],
    volume: '0.35 g / 0.01 oz',
    skinType: 'Sensitive',
    benefit: 'Long Lasting',
    badge: 'Special Offer',
    isSpecialOffer: true,
    inStock: true,
    description: 'Traditional Ayurvedic style kohl stick enriched with Sweet Almond oil and organic Triphala for safe waterline application and intense black pigment.',
    ingredients: ['Sweet Almond Oil', 'Castor Oil', 'Organic Triphala Extract', 'Black Iron Oxide'],
    howToUse: 'Glide along waterline or tightline upper lashes for dramatic smokey eyes.',
    clinicalResults: 'Ophthalmologist tested safe for contact lens wearers.'
  },
  {
    id: 'mu-12',
    name: 'Haute Moisture Matte Satin Lipstick',
    subtitle: 'Hyaluronic Infused 12H Transfer-Resistant Bullet',
    category: 'Makeup',
    price: 799,
    originalPrice: 999,
    rating: 4.9,
    reviewsCount: 560,
    image: 'https://images.unsplash.com/photo-1586495777744-4413f21062fa?auto=format&fit=crop&w=800&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1586495777744-4413f21062fa?auto=format&fit=crop&w=800&q=80'
    ],
    volume: '3.8 g / 0.13 oz',
    skinType: 'All Skin Types',
    benefit: 'Long Lasting',
    badge: 'Best Seller',
    isBestSeller: true,
    isTrending: true,
    inStock: true,
    shades: [
      { name: 'Royal Crimson', hex: '#8B0000' },
      { name: 'Spiced Terracotta', hex: '#B85D43' },
      { name: 'Nude Cashmere', hex: '#C28B78' },
      { name: 'Plum Noir', hex: '#58112F' }
    ],
    description: 'Luxurious velvety satin-matte lipstick that glides like silk and keeps lips comfortable and plush with encapsulated Hyaluronic spheres.',
    ingredients: ['Hyaluronic Acid Spheres', 'Argan Oil', 'Candelilla Wax', 'Vitamin E'],
    howToUse: 'Glide directly onto lips starting from center moving outwards.',
    clinicalResults: '12 hours of rich pigment comfort without drying out lips.'
  },
  {
    id: 'mu-13',
    name: 'Glazed Peptide Plumping Lip Gloss',
    subtitle: 'Mirror High-Shine Maxi-Lip Hydrating Gloss',
    category: 'Makeup',
    price: 599,
    originalPrice: 799,
    rating: 4.8,
    reviewsCount: 340,
    image: 'https://images.unsplash.com/photo-1625093742435-6fa192b6fb10?auto=format&fit=crop&w=800&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1625093742435-6fa192b6fb10?auto=format&fit=crop&w=800&q=80'
    ],
    volume: '10 ml / 0.34 fl oz',
    skinType: 'All Skin Types',
    benefit: 'Deep Hydration',
    badge: 'Trending',
    isTrending: true,
    inStock: true,
    shades: [
      { name: 'Crystal Clear', hex: '#F5F5F5' },
      { name: 'Sugar Plum', hex: '#C07080' },
      { name: 'Golden Honey', hex: '#DE9E62' }
    ],
    description: 'Non-sticky glass lip gloss packed with tripeptides that stimulates natural lip volume while bathing lips in nourishing gloss reflection.',
    ingredients: ['Maxi-Lip Tripeptides', 'Jojoba Oil', 'Shea Butter', 'Menthol (Mild Cooling)'],
    howToUse: 'Swipe generously over bare lips or layer over lipstick for high-voltage shine.',
    clinicalResults: '+40% increase in visible lip fullness within 10 minutes.'
  },
  {
    id: 'mu-14',
    name: 'Velvet Contour Definer Lip Liner',
    subtitle: 'Creamy Waterproof Feather-Proof Lip Pencil',
    category: 'Makeup',
    price: 399,
    originalPrice: 550,
    rating: 4.7,
    reviewsCount: 210,
    image: 'https://images.unsplash.com/photo-1590393802613-cf854497042a?auto=format&fit=crop&w=800&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1590393802613-cf854497042a?auto=format&fit=crop&w=800&q=80'
    ],
    volume: '1.1 g / 0.04 oz',
    skinType: 'All Skin Types',
    benefit: 'Long Lasting',
    badge: 'Special Offer',
    isSpecialOffer: true,
    inStock: true,
    shades: [
      { name: 'Warm Nude', hex: '#B87B64' },
      { name: 'Deep Mocha', hex: '#633B2E' },
      { name: 'Berry Rose', hex: '#8C3D4D' }
    ],
    description: 'Sharpenable ultra-smooth lip pencil that contours and prevents lip colors from bleeding or feathering outside lip contours.',
    ingredients: ['Carnauba Wax', 'Avocado Oil', 'Vitamin C Ester', 'Mineral Pigments'],
    howToUse: 'Trace outer edge of lip perimeter and shade in corners before applying lipstick.',
    clinicalResults: 'Prevents feathering for 14 hours.'
  },
  {
    id: 'mu-15',
    name: 'Dewy All-Day Lock Makeup Setting Spray',
    subtitle: 'Hydrating Micro-Fine Mist 16H Hold Fixer',
    category: 'Makeup',
    price: 749,
    originalPrice: 999,
    rating: 4.9,
    reviewsCount: 430,
    image: 'https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?auto=format&fit=crop&w=800&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?auto=format&fit=crop&w=800&q=80'
    ],
    volume: '100 ml / 3.4 fl oz',
    skinType: 'All Skin Types',
    benefit: 'Long Lasting',
    badge: 'Best Seller',
    isBestSeller: true,
    inStock: true,
    description: 'Weightless micro-droplet setting mist infused with Aloe, Rose Water, and film formers that locks foundation and blush in place for 16 hours.',
    ingredients: ['Aloe Barbadensis', 'Damask Rose Water', 'Fixation Polymers', 'Panthenol'],
    howToUse: 'Shake well, hold 8 inches away, and mist in an "X" and "T" motion across completed makeup.',
    clinicalResults: 'Keeps makeup melting-proof in 40°C heat and humidity.'
  },

  // ==========================================
  // 3. HAIR CARE RITUALS (7 Products)
  // ==========================================
  {
    id: 'hair-1',
    name: 'Botanical Keratin & Biotin Volumizing Shampoo',
    subtitle: 'Sulfate-Free Density & Follicle Cleanser',
    category: 'Haircare',
    price: 699,
    originalPrice: 899,
    rating: 4.8,
    reviewsCount: 310,
    image: 'https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?auto=format&fit=crop&w=800&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?auto=format&fit=crop&w=800&q=80'
    ],
    volume: '250 ml / 8.5 fl oz',
    skinType: 'All Skin Types',
    benefit: 'Volumizing',
    badge: 'Best Seller',
    isBestSeller: true,
    isTrending: true,
    inStock: true,
    description: 'Gentle sulfate-free volumizing shampoo infused with plant keratin, Biotin, and Apple Stem cells that cleanses without stripping natural scalp moisture.',
    ingredients: ['Plant Keratin Peptides', 'Biotin (Vitamin B7)', 'Apple Stem Cell Extract', 'Coconut-Derived Cleansers'],
    howToUse: 'Massage into wet scalp for 2 minutes and rinse thoroughly with cool water.',
    clinicalResults: '91% noticed fuller, thicker hair appearance after 3 washes.'
  },
  {
    id: 'hair-2',
    name: 'Argan & Silk Deep Moisture Conditioner',
    subtitle: 'Smoothing Cuticle Detangler & Split End Defense',
    category: 'Haircare',
    price: 749,
    originalPrice: 950,
    rating: 4.9,
    reviewsCount: 280,
    image: 'https://images.unsplash.com/photo-1519735777090-ec97162dc266?auto=format&fit=crop&w=800&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1519735777090-ec97162dc266?auto=format&fit=crop&w=800&q=80'
    ],
    volume: '250 ml / 8.5 fl oz',
    skinType: 'Dry & Dehydrated',
    benefit: 'Nourishing',
    badge: 'Trending',
    isTrending: true,
    inStock: true,
    description: 'Ultra-creamy hair conditioner packed with Moroccan Argan oil, Hydrolyzed Silk, and Pro-Vitamin B5 that seals rough cuticles for liquid glass shine.',
    ingredients: ['Pure Moroccan Argan Oil', 'Hydrolyzed Silk Protein', 'Panthenol', 'Cetearyl Alcohol'],
    howToUse: 'Apply to mid-lengths and ends after shampooing. Leave for 3 minutes and rinse.',
    clinicalResults: 'Reduces hair breakage by 85% and eliminates static frizz.'
  },
  {
    id: 'hair-3',
    name: 'Rosemary & Bhringraj Scalp Root Treatment Oil',
    subtitle: 'Ayurvedic Micro-Circulation Hair Growth Booster',
    category: 'Haircare',
    price: 899,
    originalPrice: 1199,
    rating: 4.9,
    reviewsCount: 540,
    image: 'https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?auto=format&fit=crop&w=800&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?auto=format&fit=crop&w=800&q=80'
    ],
    volume: '100 ml / 3.4 fl oz',
    skinType: 'All Skin Types',
    benefit: 'Volumizing',
    badge: 'Award Winner',
    isBestSeller: true,
    isTrending: true,
    inStock: true,
    description: 'Concentrated scalp potion crafted from steam-distilled Rosemary leaf oil, cold-pressed Bhringraj, Amla, and Castor oil that stimulates dormant hair follicles.',
    ingredients: ['Pure Rosemary Essential Oil', 'Bhringraj Extract', 'Cold-Pressed Castor Oil', 'Amla Fruit Oil'],
    howToUse: 'Part hair into sections, apply 1-2 pipettes directly to scalp, massage for 5 minutes, leave on for 1 hour or overnight.',
    clinicalResults: 'Clinically proven to stimulate microcapillary scalp circulation by +35% in 60 days.'
  },
  {
    id: 'hair-4',
    name: 'Moroccan Golden Elixir Frizz Control Hair Serum',
    subtitle: 'Anti-Humidity Weightless Glass Hair Oil',
    category: 'Haircare',
    price: 849,
    originalPrice: 1100,
    rating: 4.8,
    reviewsCount: 320,
    image: 'https://images.unsplash.com/photo-1617897903246-719242758050?auto=format&fit=crop&w=800&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1617897903246-719242758050?auto=format&fit=crop&w=800&q=80'
    ],
    volume: '50 ml / 1.7 fl oz',
    skinType: 'All Skin Types',
    benefit: 'Glow & Radiance',
    badge: 'Special Offer',
    isSpecialOffer: true,
    inStock: true,
    description: 'Featherlight non-greasy finishing oil that tames flyaways, seals split ends, and imparts brilliant mirror shine without weighing down fine hair.',
    ingredients: ['Cold-Pressed Argan Oil', 'Camellia Seed Oil', 'Cyclomethicone', 'Fragrance'],
    howToUse: 'Rub 1-2 pumps between hands and work through towel-dried or dry ends.',
    clinicalResults: 'Provides 48 hours of humidity resistance and instant gloss.'
  },
  {
    id: 'hair-5',
    name: 'Raw Shea & Avocado Intense Hair Mask',
    subtitle: 'Emergency Repair for Chemically Treated & Bleached Hair',
    category: 'Haircare',
    price: 999,
    originalPrice: 1350,
    rating: 4.9,
    reviewsCount: 260,
    image: 'https://images.unsplash.com/photo-1526947425960-945c6e72858f?auto=format&fit=crop&w=800&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1526947425960-945c6e72858f?auto=format&fit=crop&w=800&q=80'
    ],
    volume: '200 g / 7.0 oz',
    skinType: 'Dry & Dehydrated',
    benefit: 'Barrier Repair',
    badge: 'Trending',
    isTrending: true,
    inStock: true,
    description: 'Deep conditioning salon-grade hair butter packed with Raw Shea, Avocado Butter, and Bond-Building Ceramides to restore over-processed hair.',
    ingredients: ['Organic Raw Shea Butter', 'Avocado Oil', 'Ceramide Complex', 'Hydrolyzed Wheat Protein'],
    howToUse: 'Apply generously from mid-length to ends on clean damp hair. Leave for 10-15 minutes and rinse.',
    clinicalResults: 'Reconstructs damaged hair fiber bonds by 82% after 2 applications.'
  },
  {
    id: 'hair-6',
    name: 'Tea Tree & Salicylic Acid Scalp Exfoliating Scrub',
    subtitle: 'Clarifying Anti-Dandruff & Product Buildup Detox',
    category: 'Haircare',
    price: 799,
    originalPrice: 1050,
    rating: 4.8,
    reviewsCount: 190,
    image: 'https://images.unsplash.com/photo-1547887537-6158d64c35b3?auto=format&fit=crop&w=800&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1547887537-6158d64c35b3?auto=format&fit=crop&w=800&q=80'
    ],
    volume: '150 g / 5.3 oz',
    skinType: 'Oily & Acne-Prone',
    benefit: 'Pore Minimizing',
    badge: 'New',
    isNewArrival: true,
    inStock: true,
    description: 'Gentle scalp scrub with dissolving Sea Salt crystals and 1% BHA Salicylic Acid that clears dead skin cells and styling buildup.',
    ingredients: ['Fine Sea Salt Crystals', 'Salicylic Acid (BHA) 1%', 'Australian Tea Tree Oil', 'Menthol'],
    howToUse: 'Part wet hair, apply scrub directly onto scalp, massage in circular motions, and rinse before shampoo.',
    clinicalResults: '97% reduction in visible dandruff flakes and scalp itchiness.'
  },
  {
    id: 'hair-7',
    name: 'Thermal Shield & UV Hair Defense Spray',
    subtitle: '230°C Heat Protection & Color Fade Defier',
    category: 'Haircare',
    price: 649,
    originalPrice: 850,
    rating: 4.7,
    reviewsCount: 150,
    image: 'https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=800&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=800&q=80'
    ],
    volume: '150 ml / 5.1 fl oz',
    skinType: 'All Skin Types',
    benefit: 'Barrier Repair',
    badge: 'Special Offer',
    isSpecialOffer: true,
    inStock: true,
    description: 'Invisible thermal mist that creates a breathable protective shield against blow dryers, straighteners, and UV rays.',
    ingredients: ['Hydrolyzed Pea Protein', 'Thermal Polymeric Barrier', 'Sunflower Seed Oil Extract'],
    howToUse: 'Spray evenly over damp hair before blow drying or dry hair before heat styling tools.',
    clinicalResults: 'Prevents up to 230°C thermal damage and preserves salon hair color vibrancy.'
  },

  // ==========================================
  // 4. BODY CARE & BATH (6 Products)
  // ==========================================
  {
    id: 'body-1',
    name: 'Whipped Vanilla Bourbon Body Butter',
    subtitle: 'Ultra-Rich 48H Melt-In Shea Hydrator',
    category: 'Body Care',
    price: 899,
    originalPrice: 1199,
    rating: 4.9,
    reviewsCount: 420,
    image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=800&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=800&q=80'
    ],
    volume: '200 g / 7.0 oz',
    skinType: 'Dry & Dehydrated',
    benefit: 'Deep Hydration',
    badge: 'Best Seller',
    isBestSeller: true,
    isTrending: true,
    inStock: true,
    description: 'A decadent body butter whipped from raw organic Shea Butter, Cocoa Butter, and Madagascar Vanilla Bourbon that drenches dry skin in 48-hour comfort.',
    ingredients: ['Raw Ghanaian Shea Butter', 'Cocoa Seed Butter', 'Madagascar Vanilla Extract', 'Sweet Almond Oil'],
    howToUse: 'Scoop a generous amount and massage all over body after showering on damp skin.',
    clinicalResults: '100% of testers reported instantaneous relief from dry, flaky skin.'
  },
  {
    id: 'body-2',
    name: 'Niacinamide & Vitamin E Silkening Body Lotion',
    subtitle: 'Lightweight Daily Radiance & Tone Corrector',
    category: 'Body Care',
    price: 699,
    originalPrice: 899,
    rating: 4.8,
    reviewsCount: 310,
    image: 'https://images.unsplash.com/photo-1556228578-0d85b1a4d571?auto=format&fit=crop&w=800&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1556228578-0d85b1a4d571?auto=format&fit=crop&w=800&q=80'
    ],
    volume: '300 ml / 10.1 fl oz',
    skinType: 'All Skin Types',
    benefit: 'Brightening',
    badge: 'Trending',
    isTrending: true,
    inStock: true,
    description: 'Fast-absorbing daily body lotion with 3% Niacinamide and Vitamin E that brightens uneven skin tone, fades tanning, and hydrates all day.',
    ingredients: ['Niacinamide 3%', 'Vitamin E Acetate', 'Oat Extract', 'Glycerin', 'Sunflower Oil'],
    howToUse: 'Smooth generously over arms, legs, and body every morning and evening.',
    clinicalResults: '92% noticed more even body skin tone in 3 weeks.'
  },
  {
    id: 'body-3',
    name: 'Pink Himalayan Sea Salt & Rose Body Polish',
    subtitle: 'Mineral Exfoliating Scrub with Sweet Almond Oil',
    category: 'Body Care',
    price: 799,
    originalPrice: 999,
    rating: 4.8,
    reviewsCount: 230,
    image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80'
    ],
    volume: '250 g / 8.8 oz',
    skinType: 'All Skin Types',
    benefit: 'Glow & Radiance',
    badge: 'Special Offer',
    isSpecialOffer: true,
    inStock: true,
    description: 'Handcrafted body scrub infused with mineral-rich Himalayan crystals, crushed Damask rose petals, and nourishing almond oil that buffs away dullness.',
    ingredients: ['Pink Himalayan Salt', 'Crushed Rose Petals', 'Sweet Almond Oil', 'Jojoba Oil'],
    howToUse: 'Massage onto damp skin in circular motions in the shower. Rinse off to reveal silky skin.',
    clinicalResults: 'Instant smooth glass skin texture after a single shower session.'
  },
  {
    id: 'body-4',
    name: 'Cashmere Orchid Nourishing Hand & Cuticle Cream',
    subtitle: 'Fast-Absorbing Barrier Therapy for Dry Hands',
    category: 'Body Care',
    price: 399,
    originalPrice: 550,
    rating: 4.9,
    reviewsCount: 380,
    image: 'https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?auto=format&fit=crop&w=800&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?auto=format&fit=crop&w=800&q=80'
    ],
    volume: '50 ml / 1.7 fl oz',
    skinType: 'Dry & Dehydrated',
    benefit: 'Barrier Repair',
    badge: 'Best Seller',
    isBestSeller: true,
    inStock: true,
    description: 'Silky non-greasy hand balm infused with Cashmere Orchid extract, Murumuru butter, and Keratin that strengthens brittle nails and hydrates hands.',
    ingredients: ['Orchid Extract', 'Murumuru Butter', 'Hydrolyzed Keratin', 'Glycerin'],
    howToUse: 'Apply a dime-sized amount onto hands and massage into cuticles as often as needed.',
    clinicalResults: '98% noticed immediate repair of cracked knuckles and softened cuticles.'
  },
  {
    id: 'body-5',
    name: 'Bergamot & Amber Gentle Cleansing Body Wash',
    subtitle: 'Sulfate-Free Conditioning Shower Gel',
    category: 'Body Care',
    price: 549,
    originalPrice: 750,
    rating: 4.8,
    reviewsCount: 195,
    image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=800&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=800&q=80'
    ],
    volume: '250 ml / 8.5 fl oz',
    skinType: 'All Skin Types',
    benefit: 'Deep Hydration',
    badge: 'New',
    isNewArrival: true,
    inStock: true,
    description: 'A luxurious lathering shower gel with notes of Calabrian Bergamot, warm Amber, and hydrating Aloe Vera that leaves skin feeling soft and fragranced.',
    ingredients: ['Calabrian Bergamot Essential Oil', 'Golden Amber Extract', 'Aloe Barbadensis', 'Coconut Glucosides'],
    howToUse: 'Lather onto a loofah or washcloth, cleanse body, and rinse thoroughly.',
    clinicalResults: 'Zero drying soap scum residue; maintains skin hydration post-wash.'
  },
  {
    id: 'body-6',
    name: 'French Lavender & Chamomile Relaxing Bath Gel',
    subtitle: 'Aromatherapeutic Calming Bubble Bath & Body Wash',
    category: 'Body Care',
    price: 599,
    originalPrice: 799,
    rating: 4.7,
    reviewsCount: 160,
    image: 'https://images.unsplash.com/photo-1535585209827-a15fcdbc4c2d?auto=format&fit=crop&w=800&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1535585209827-a15fcdbc4c2d?auto=format&fit=crop&w=800&q=80'
    ],
    volume: '250 ml / 8.5 fl oz',
    skinType: 'Sensitive',
    benefit: 'Deep Hydration',
    badge: 'Special Offer',
    isSpecialOffer: true,
    inStock: true,
    description: 'Gentle bedtime bath soak infused with pure French Lavender essential oil and Chamomile that soothes muscles and calms the mind.',
    ingredients: ['French Lavender Oil', 'Chamomile Extract', 'Oat Milk', 'Glycerin'],
    howToUse: 'Pour 2-3 capfuls under warm running bath water or lather directly onto body.',
    clinicalResults: 'Proven to enhance sleep relaxation and skin softness.'
  },

  // ==========================================
  // 5. ARTISAN FRAGRANCES (4 Products)
  // ==========================================
  {
    id: 'frag-1',
    name: 'Fleur Royale Haute Eau De Parfum',
    subtitle: 'Grasse Jasmine, Crisp Green Pear & Cashmere Amber',
    category: 'Fragrance',
    price: 2499,
    originalPrice: 3200,
    rating: 4.9,
    reviewsCount: 410,
    image: 'https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?auto=format&fit=crop&w=800&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?auto=format&fit=crop&w=800&q=80'
    ],
    volume: '50 ml / 1.7 fl oz',
    skinType: 'All Skin Types',
    benefit: 'Glow & Radiance',
    badge: 'Award Winner',
    isBestSeller: true,
    isTrending: true,
    inStock: true,
    description: 'An intoxicating haute perfume crafted from hand-picked Grasse Jasmine Sambac, crisp Anjou pear, creamy sandalwood, and warm amber resin with exceptional 14-hour longevity.',
    ingredients: ['Alcohol Denat.', 'Parfum (Fragrance)', 'Grasse Jasmine Absolute', 'Sandalwood Oil', 'Aqua'],
    howToUse: 'Spritz onto pulse points including wrists, collarbones, behind ears, and back of knees.',
    clinicalResults: 'Lasts 14+ hours on skin and 48 hours on luxury fabrics.'
  },
  {
    id: 'frag-2',
    name: 'Santal & White Cedar Eau de Toilette',
    subtitle: 'Warm Australian Sandalwood, Cardamom & Iris',
    category: 'Fragrance',
    price: 1899,
    originalPrice: 2499,
    rating: 4.8,
    reviewsCount: 290,
    image: 'https://images.unsplash.com/photo-1547887537-6158d64c35b3?auto=format&fit=crop&w=800&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1547887537-6158d64c35b3?auto=format&fit=crop&w=800&q=80'
    ],
    volume: '50 ml / 1.7 fl oz',
    skinType: 'All Skin Types',
    benefit: 'Glow & Radiance',
    badge: 'Trending',
    isTrending: true,
    inStock: true,
    description: 'An elegant woody unisex fragrance featuring smoky Virginian cedarwood, green cardamom, powdery Tuscan iris, and creamy sandalwood.',
    ingredients: ['Alcohol Denat.', 'Parfum', 'Cedarwood Essential Oil', 'Cardamom Extract', 'Linalool'],
    howToUse: 'Spray 2-3 pumps onto clothes and pulse points for an all-day sophisticated aura.',
    clinicalResults: 'Subtle yet magnetic sillage with 10+ hours projection.'
  },
  {
    id: 'frag-3',
    name: 'Warm Vanilla & Cashmere Shimmer Body Mist',
    subtitle: 'Infused with Subtle Golden Mineral Shimmer',
    category: 'Fragrance',
    price: 899,
    originalPrice: 1199,
    rating: 4.8,
    reviewsCount: 360,
    image: 'https://images.unsplash.com/photo-1615397349754-cfa2066a298e?auto=format&fit=crop&w=800&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1615397349754-cfa2066a298e?auto=format&fit=crop&w=800&q=80'
    ],
    volume: '150 ml / 5.1 fl oz',
    skinType: 'All Skin Types',
    benefit: 'Glow & Radiance',
    badge: 'Best Seller',
    isBestSeller: true,
    inStock: true,
    description: 'An addictive body mist that combines toasted vanilla orchids, warm caramel, and cashmere musk with microscopic golden glow shimmer.',
    ingredients: ['Organic Cane Alcohol', 'Vanilla Planifolia Extract', 'Mica Shimmer Minerals', 'Glycerin'],
    howToUse: 'Shake well and spray across hair, neck, and shoulders for intoxicating scent and sparkle.',
    clinicalResults: 'Provides immediate soft fragrance trail and illuminating glow.'
  },
  {
    id: 'frag-4',
    name: 'Discovery Artisanal Fragrance Box Set (4x15ml)',
    subtitle: 'Limited Edition Eau de Parfum Miniature Wardrobe',
    category: 'Fragrance',
    price: 2199,
    originalPrice: 2899,
    rating: 4.9,
    reviewsCount: 180,
    image: 'https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&w=800&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&w=800&q=80'
    ],
    volume: '4 x 15 ml / 2.0 fl oz total',
    skinType: 'All Skin Types',
    benefit: 'Glow & Radiance',
    badge: 'Special Offer',
    isSpecialOffer: true,
    inStock: true,
    description: 'The ultimate luxury fragrance gift containing travel atomizers of Fleur Royale, Santal Cedar, Velvet Rose & Oudh, and Bergamot Fizz.',
    ingredients: ['Fine Fragrance Extracts', 'Organic Perfumer Alcohol', 'Natural Botanical Essences'],
    howToUse: 'Sample each fragrance on different days to discover your signature ritual.',
    clinicalResults: 'Contains 4 deluxe travel sprays housed in a velvet keepsake box.'
  },

  // ==========================================
  // 6. BEAUTY ACCESSORIES (6 Products)
  // ==========================================
  {
    id: 'acc-1',
    name: '12-Piece Master Vegan Artistry Brush Set',
    subtitle: 'Ultra-Soft Nanofiber Brushes with Roll-Up Case',
    category: 'Accessories',
    price: 1699,
    originalPrice: 2299,
    rating: 4.9,
    reviewsCount: 380,
    image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=800&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=800&q=80'
    ],
    volume: '12 Pro Brushes',
    skinType: 'All Skin Types',
    benefit: 'Glow & Radiance',
    badge: 'Best Seller',
    isBestSeller: true,
    inStock: true,
    description: 'Professional makeup brush collection crafted from 100% cruelty-free vegan nanofiber bristles with weighted FSC wooden handles and a protective pouch.',
    ingredients: ['Hypoallergenic Synthetic Nanofibers', 'Aluminum Ferrules', 'FSC Sustainable Wood'],
    howToUse: 'Includes foundation, powder, blush, contour, highlight, blending, and eyeliner brushes.',
    clinicalResults: 'Picks up 40% less excess product while diffusing seamless coverage.'
  },
  {
    id: 'acc-2',
    name: 'Micro-Pore Velvet Cloud Beauty Blender Trio',
    subtitle: 'Hydrophilic Latex-Free Seamless Makeup Sponges',
    category: 'Accessories',
    price: 499,
    originalPrice: 699,
    rating: 4.8,
    reviewsCount: 520,
    image: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&w=800&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&w=800&q=80'
    ],
    volume: 'Pack of 3 Sponges',
    skinType: 'All Skin Types',
    benefit: 'Glow & Radiance',
    badge: 'Trending',
    isTrending: true,
    inStock: true,
    description: 'Super-soft hydrophilic blending sponges that double in size when wet, blending foundations and concealers into an airbrushed finish.',
    ingredients: ['Non-Latex Hydrophilic Polyurethane Foam'],
    howToUse: 'Wet sponge thoroughly, squeeze out excess water, and bounce product over face.',
    clinicalResults: 'Expands 2x with zero product absorption.'
  },
  {
    id: 'acc-3',
    name: 'Luxe Quilted Travel Cosmetic Pouch',
    subtitle: 'Water-Resistant Vegan Leather Multi-Compartment Case',
    category: 'Accessories',
    price: 699,
    originalPrice: 999,
    rating: 4.8,
    reviewsCount: 210,
    image: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=800&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=800&q=80'
    ],
    volume: '24 x 14 x 12 cm',
    skinType: 'All Skin Types',
    benefit: 'Glow & Radiance',
    badge: 'Special Offer',
    isSpecialOffer: true,
    inStock: true,
    description: 'High-capacity dual-layer travel bag with wipe-clean lining, brush organizers, and gold-plated zips to organize full-size skincare routines.',
    ingredients: ['Premium PU Vegan Leather', 'Polyester Lining', 'Gold-Plated Alloy Zippers'],
    howToUse: 'Store cosmetics, skincare bottles, and brushes safely during travel or on vanity.',
    clinicalResults: 'Spill-proof interior lining protects vanity and luggage.'
  },
  {
    id: 'acc-4',
    name: 'Real Rose Quartz Lymphatic Facial Roller',
    subtitle: 'Dual-Ended Genuine Brazilian Gemstone Massager',
    category: 'Accessories',
    price: 899,
    originalPrice: 1299,
    rating: 4.9,
    reviewsCount: 340,
    image: 'https://images.unsplash.com/photo-1608248597359-299f187a550c?auto=format&fit=crop&w=800&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1608248597359-299f187a550c?auto=format&fit=crop&w=800&q=80'
    ],
    volume: '100% Genuine Rose Quartz',
    skinType: 'All Skin Types',
    benefit: 'Anti-Aging',
    badge: 'Award Winner',
    isBestSeller: true,
    inStock: true,
    description: 'Hand-carved authentic grade-A Rose Quartz stone roller that boosts lymphatic drainage, eliminates morning facial puffiness, and aids serum absorption.',
    ingredients: ['100% Brazilian Rose Quartz Gemstone', 'Reinforced Zinc Alloy Hardware'],
    howToUse: 'Roll gently upward and outward from chin to temples over serums or facial oils.',
    clinicalResults: 'Immediately relieves facial muscle tension and drains excess fluids.'
  },
  {
    id: 'acc-5',
    name: 'Carved Green Aventurine Sculpting Gua Sha',
    subtitle: 'Heart-Winged Facial Contouring & Jawline Tool',
    category: 'Accessories',
    price: 599,
    originalPrice: 850,
    rating: 4.8,
    reviewsCount: 290,
    image: 'https://images.unsplash.com/photo-1571781926291-c477ebfd024b?auto=format&fit=crop&w=800&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1571781926291-c477ebfd024b?auto=format&fit=crop&w=800&q=80'
    ],
    volume: '100% Natural Aventurine Stone',
    skinType: 'All Skin Types',
    benefit: 'Anti-Aging',
    badge: 'Trending',
    isTrending: true,
    inStock: true,
    description: 'Traditional Chinese medicine contouring tool designed with curved edges that hugs cheekbones and jawlines for defined facial sculpting.',
    ingredients: ['100% Natural Green Aventurine Crystal'],
    howToUse: 'Hold at a 15-degree angle and glide gently along jawline, cheekbones, and neck 5-10 times.',
    clinicalResults: 'Enhances cheekbone definition and stimulates blood microcirculation.'
  },
  {
    id: 'acc-6',
    name: 'Natural Boar Bristle Detangling Bamboo Hair Brush',
    subtitle: 'Scalp Massaging & Sebum Distributing Paddle Brush',
    category: 'Accessories',
    price: 749,
    originalPrice: 999,
    rating: 4.8,
    reviewsCount: 215,
    image: 'https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?auto=format&fit=crop&w=800&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?auto=format&fit=crop&w=800&q=80'
    ],
    volume: 'FSC Bamboo Paddle Brush',
    skinType: 'All Skin Types',
    benefit: 'Volumizing',
    badge: 'New',
    isNewArrival: true,
    inStock: true,
    description: 'Eco-friendly bamboo paddle brush with dual boar and nylon pins that gently untangles knots while distributing natural scalp oils for glossy hair.',
    ingredients: ['Natural Boar Bristles', 'Flexible Ball-Tipped Nylon Pins', 'Organic Bamboo Body'],
    howToUse: 'Brush gently starting from tips moving upwards toward scalp to prevent breakage.',
    clinicalResults: 'Reduces hair pulling and snagging by 90% while adding natural shine.'
  }
];

export const BEAUTY_REVIEWS: ReviewItem[] = [
  {
    id: 'rev-1',
    author: 'Ananya Sharma',
    rating: 5,
    date: '2 days ago',
    title: 'The Rose Gold Elixir gave me actual glass skin!',
    comment: 'I was skeptical about facial oils because of my combination skin, but the Rose Gold Radiance Elixir absorbs within seconds and gives the most incredible healthy glow. My makeup sits so smoothly now!',
    productName: 'Rose Gold Radiance Elixir',
    verified: true,
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
    skinType: 'Combination / Sensitive'
  },
  {
    id: 'rev-2',
    author: 'Priya Mehra',
    rating: 5,
    date: '1 week ago',
    title: 'Holy grail moisturizer for winter',
    comment: 'The Ceramide Cloud Barrier Moisturizer repaired my damaged moisture barrier in less than 5 days. It feels like expensive silk on the skin without any greasy residue.',
    productName: 'Ceramide Cloud Barrier Face Moisturizer',
    verified: true,
    avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=200&q=80',
    skinType: 'Dry & Dehydrated'
  },
  {
    id: 'rev-3',
    author: 'Natasha Kapoor',
    rating: 5,
    date: '2 weeks ago',
    title: 'Fleur Royale smells like a Parisian garden',
    comment: 'I receive compliments every single day at work. The jasmine and green pear blend is so sophisticated, not overpowering, and lasts from 9am till late evening.',
    productName: 'Fleur Royale Haute Eau De Parfum',
    verified: true,
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80',
    skinType: 'Normal'
  },
  {
    id: 'rev-4',
    author: 'Rhea Sengupta',
    rating: 5,
    date: '3 weeks ago',
    title: 'Second Skin Foundation is perfection',
    comment: 'The Warm Sand shade is an exact match for Indian undertones. It does not oxidize, stays luminous all through 10-hour humid days, and does not settle into fine lines.',
    productName: 'Second Skin Luminous Silk Foundation',
    verified: true,
    avatar: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=200&q=80',
    skinType: 'All Skin Types'
  },
  {
    id: 'rev-5',
    author: 'Kavya Pillai',
    rating: 5,
    date: '1 month ago',
    title: 'Rosemary Scalp Oil doubled my hair volume',
    comment: 'I have been using this rosemary oil twice weekly for 2 months. My temple thinning has reversed with fresh baby hairs. Smells like an upscale spa!',
    productName: 'Rosemary & Bhringraj Scalp Root Treatment Oil',
    verified: true,
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
    skinType: 'Normal'
  }
];

export const BEAUTY_BLOGS: BlogPost[] = [
  {
    id: 'blog-1',
    title: 'The 7-Step Clean Skincare Ritual for Glass-Like Radiance',
    category: 'Skincare Rituals',
    readTime: '4 min read',
    image: 'https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?auto=format&fit=crop&w=800&q=80',
    excerpt: 'Discover the exact layering technique used by dermatologists to achieve deeply hydrated, luminous skin all season long.',
    author: 'Dr. Evelyn Vance, Dermatologist',
    date: 'Aug 18, 2026',
    content: 'Achieving luminous, healthy skin starts with respecting your natural barrier. Double cleansing with a cold-pressed botanical milk removes stubborn SPF and pigments without stripping your acid mantle. Follow with a micro-molecular hyaluronic hydrosol, then seal with cold-pressed rosehip and ceramide creams for lasting hydration.'
  },
  {
    id: 'blog-2',
    title: 'Why Bakuchiol is the Gentle Secret to Timeless Aging',
    category: 'Ingredient Spotlight',
    readTime: '3 min read',
    image: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=800&q=80',
    excerpt: 'Everything you need to know about the Ayurvedic plant-derived retinol alternative that delivers all the firming results without irritation.',
    author: 'Maya Lin, Formulation Chemist',
    date: 'Aug 12, 2026',
    content: 'Derived from the Psoralea corylifolia plant, Bakuchiol stimulates collagen type I and IV similarly to retinol, but without triggering dryness, peeling, or sun sensitivity. It is safe for pregnant and nursing mothers and ideal for sensitive skin types.'
  },
  {
    id: 'blog-3',
    title: 'The Art of Hair Oiling: How Rosemary Oil Transforms Follicles',
    category: 'Hair Wellness',
    readTime: '5 min read',
    image: 'https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?auto=format&fit=crop&w=800&q=80',
    excerpt: 'Ancient Ayurvedic head massage meets modern trichology: learn the correct method to stimulate micro-circulation and density.',
    author: 'Kavita Verma, Ayurvedic Practitioner',
    date: 'Aug 05, 2026',
    content: 'Clinical comparative studies have shown that 2% rosemary leaf oil performs equivalently to standard minoxidil in promoting micro-capillary blood flow to the scalp without burning or scalp dryness.'
  }
];

export const BEAUTY_COUPONS = [
  {
    code: 'GLOW20',
    discount: '20% OFF',
    desc: 'On your entire beauty ritual order above ₹1,499',
    minSpend: 1499,
    percentage: 20
  },
  {
    code: 'WELCOME15',
    discount: '15% OFF',
    desc: 'For first time clean beauty club members',
    minSpend: 999,
    percentage: 15
  },
  {
    code: 'DELUXEGIFT',
    discount: 'FREE LUXURY SAMPLE SET',
    desc: 'Receive 3 deluxe miniatures on orders over ₹2,499',
    minSpend: 2499,
    percentage: 0
  }
];

export const INSTAGRAM_POSTS = [
  {
    id: 'ig-1',
    user: '@claire_glow',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=500&q=80',
    likes: '2.4k',
    productTagged: 'Rose Gold Radiance Elixir'
  },
  {
    id: 'ig-2',
    user: '@serena.beauty',
    image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=500&q=80',
    likes: '1.8k',
    productTagged: 'Second Skin Foundation'
  },
  {
    id: 'ig-3',
    user: '@cleanbeauty_diary',
    image: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=500&q=80',
    likes: '3.1k',
    productTagged: 'Ceramide Cloud Barrier Cream'
  },
  {
    id: 'ig-4',
    user: '@arora.glows',
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=500&q=80',
    likes: '4.2k',
    productTagged: 'Damask Rose Mist'
  }
];
