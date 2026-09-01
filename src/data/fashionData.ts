export interface FashionProduct {
  id: string;
  name: string;
  category: 'Men' | 'Women' | 'Streetwear' | 'Accessories';
  subcategory: string;
  price: number;
  originalPrice: number;
  discountBadge?: string;
  rating: number;
  reviewCount: number;
  image: string;
  thumbnails: string[];
  colors: { name: string; hex: string; image?: string }[];
  sizes: string[];
  badge?: 'Trending' | 'Bestseller' | 'New' | 'Limited Drop' | 'Sale';
  description: string;
  materials: string;
  careInstructions: string;
  isNewArrival?: boolean;
  isTrending?: boolean;
  isSale?: boolean;
}

export const FASHION_PRODUCTS: FashionProduct[] = [
  // ==========================================
  // MEN'S FASHION (1-14)
  // ==========================================
  {
    id: 'nova-men-01',
    name: 'Heavyweight Oversized Boxy Tee',
    category: 'Men',
    subcategory: 'Oversized T-Shirts',
    price: 1899,
    originalPrice: 2999,
    discountBadge: '36% OFF',
    rating: 4.9,
    reviewCount: 142,
    image: 'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=800&q=75',
    thumbnails: [
      'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=800&q=75',
      'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?auto=format&fit=crop&w=800&q=75',
      'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=800&q=75'
    ],
    colors: [
      { name: 'Onyx Black', hex: '#111827' },
      { name: 'Pure White', hex: '#F9FAFB' },
      { name: 'Vintage Taupe', hex: '#9CA3AF' }
    ],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    badge: 'Bestseller',
    description: 'Crafted from 280 GSM ultra-combed organic cotton. Features dropped shoulders, a structured rib collar, and relaxed boxy drape designed to maintain silhouette throughout all-day wear.',
    materials: '100% Combed Heavyweight Cotton (280 GSM)',
    careInstructions: 'Machine wash cold inside out, tumble dry low, do not iron over print.',
    isTrending: true,
    isNewArrival: false
  },
  {
    id: 'nova-men-02',
    name: 'Raw Edge French Terry Hoodie',
    category: 'Men',
    subcategory: 'Hoodies',
    price: 3499,
    originalPrice: 4999,
    discountBadge: '30% OFF',
    rating: 4.8,
    reviewCount: 98,
    image: 'https://images.unsplash.com/photo-1556905055-8f358a7a47b2?auto=format&fit=crop&w=800&q=75',
    thumbnails: [
      'https://images.unsplash.com/photo-1556905055-8f358a7a47b2?auto=format&fit=crop&w=800&q=75',
      'https://images.unsplash.com/photo-1578587018452-892bacefd3f2?auto=format&fit=crop&w=800&q=75'
    ],
    colors: [
      { name: 'Charcoal Grey', hex: '#374151' },
      { name: 'Bone White', hex: '#F3F4F6' },
      { name: 'Faded Olive', hex: '#4B5563' }
    ],
    sizes: ['M', 'L', 'XL', 'XXL'],
    badge: 'Trending',
    description: 'Minimalist double-layered hood with kangaroo pocket and raw distressed hem accents. Dense French terry fleece delivers superior comfort and architectural fit.',
    materials: '80% Organic Cotton, 20% Recycled Poly Fleece (420 GSM)',
    careInstructions: 'Gentle cycle with like colors. Hang dry recommended.',
    isTrending: true,
    isNewArrival: true
  },
  {
    id: 'nova-men-03',
    name: 'Structured Utility Flight Jacket',
    category: 'Men',
    subcategory: 'Jackets',
    price: 4999,
    originalPrice: 7999,
    discountBadge: '38% OFF',
    rating: 5.0,
    reviewCount: 64,
    image: 'https://images.unsplash.com/photo-1548883354-7622d03aca27?auto=format&fit=crop&w=800&q=75',
    thumbnails: [
      'https://images.unsplash.com/photo-1548883354-7622d03aca27?auto=format&fit=crop&w=800&q=75',
      'https://images.unsplash.com/photo-1544441893-675973e31985?auto=format&fit=crop&w=800&q=75'
    ],
    colors: [
      { name: 'Midnight Jet', hex: '#0F172A' },
      { name: 'Military Sage', hex: '#334155' }
    ],
    sizes: ['S', 'M', 'L', 'XL'],
    badge: 'Limited Drop',
    description: 'Weather-resistant technical ripstop outer shell with matte black gunmetal zippers, modular tactical chest pockets, and thermal quilted inner lining.',
    materials: 'High-density matte nylon with breathable satin inner lining',
    careInstructions: 'Dry clean only or wipe clean with damp cloth.',
    isTrending: true
  },
  {
    id: 'nova-men-04',
    name: 'Camp Collar Relaxed Linen Shirt',
    category: 'Men',
    subcategory: 'Premium Shirts',
    price: 2499,
    originalPrice: 3499,
    discountBadge: '28% OFF',
    rating: 4.7,
    reviewCount: 82,
    image: 'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&w=800&q=75',
    thumbnails: [
      'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&w=800&q=75',
      'https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format&fit=crop&w=800&q=75'
    ],
    colors: [
      { name: 'Natural Sand', hex: '#E5E7EB' },
      { name: 'Ocean Sage', hex: '#64748B' },
      { name: 'Deep Black', hex: '#1E293B' }
    ],
    sizes: ['S', 'M', 'L', 'XL'],
    badge: 'New',
    description: 'Breezy European flax linen blended with modal for wrinkle resistance. Cut in a modern relaxed silhouette with an open Cuban camp collar.',
    materials: '65% European Linen, 35% Rayon Modal',
    careInstructions: 'Hand or gentle machine wash cold. Iron slightly damp.',
    isNewArrival: true
  },
  {
    id: 'nova-men-05',
    name: 'Wide-Leg Modular Cargo Trousers',
    category: 'Men',
    subcategory: 'Cargo Pants',
    price: 3199,
    originalPrice: 4499,
    discountBadge: '29% OFF',
    rating: 4.9,
    reviewCount: 110,
    image: 'https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?auto=format&fit=crop&w=800&q=75',
    thumbnails: [
      'https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?auto=format&fit=crop&w=800&q=75',
      'https://images.unsplash.com/photo-1517445312882-bc9910d016b7?auto=format&fit=crop&w=800&q=75'
    ],
    colors: [
      { name: 'Cargo Olive', hex: '#3F4A3C' },
      { name: 'Stealth Black', hex: '#1F2937' },
      { name: 'Desert Sand', hex: '#D1D5DB' }
    ],
    sizes: ['30', '32', '34', '36'],
    badge: 'Trending',
    description: 'Ergonomic 8-pocket cargo trousers featuring deep utility bellows, adjustable hem drawcords, and reinforced knee articulation.',
    materials: '100% Cotton Twill (310 GSM)',
    careInstructions: 'Machine wash warm, do not bleach.',
    isTrending: true
  },
  {
    id: 'nova-men-06',
    name: 'Vintage Wash Baggy Denim Jeans',
    category: 'Men',
    subcategory: 'Denim',
    price: 3699,
    originalPrice: 5299,
    discountBadge: '30% OFF',
    rating: 4.8,
    reviewCount: 76,
    image: 'https://images.unsplash.com/photo-1542272604-780c96856592?auto=format&fit=crop&w=800&q=75',
    thumbnails: [
      'https://images.unsplash.com/photo-1542272604-780c96856592?auto=format&fit=crop&w=800&q=75',
      'https://images.unsplash.com/photo-1582552938357-32b906df40cb?auto=format&fit=crop&w=800&q=75'
    ],
    colors: [
      { name: 'Faded Stonewash', hex: '#93C5FD' },
      { name: 'Dark Indigo', hex: '#1E3A8A' }
    ],
    sizes: ['30', '32', '34', '36', '38'],
    badge: 'Bestseller',
    description: 'Heavy 14oz non-stretch Japanese selvedge-inspired denim with custom fading, whiskering, and relaxed stacking at the cuffs.',
    materials: '100% Ring-Spun Cotton Denim (14 oz)',
    careInstructions: 'Wash inside out in cold water. Air dry.',
    isTrending: true
  },
  {
    id: 'nova-men-07',
    name: 'Minimalist Monolith Low-Top Sneakers',
    category: 'Men',
    subcategory: 'Sneakers',
    price: 4599,
    originalPrice: 6999,
    discountBadge: '34% OFF',
    rating: 4.9,
    reviewCount: 135,
    image: 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&w=800&q=75',
    thumbnails: [
      'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&w=800&q=75',
      'https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&w=800&q=75'
    ],
    colors: [
      { name: 'Triple White', hex: '#FFFFFF' },
      { name: 'Shadow Black', hex: '#111827' }
    ],
    sizes: ['UK 7', 'UK 8', 'UK 9', 'UK 10', 'UK 11'],
    badge: 'Trending',
    description: 'Full-grain Italian nappa leather upper resting atop a lightweight vulcanized rubber platform with memory foam cushioning.',
    materials: 'Genuine Nappa Leather & Anti-Slip Rubber Sole',
    careInstructions: 'Clean with specialized leather balm and soft cloth.',
    isTrending: true
  },
  {
    id: 'nova-men-08',
    name: 'Waffle Knit Thermal Quarter-Zip',
    category: 'Men',
    subcategory: 'Hoodies',
    price: 2799,
    originalPrice: 3999,
    discountBadge: '30% OFF',
    rating: 4.6,
    reviewCount: 45,
    image: 'https://images.unsplash.com/photo-1614676471928-2ed0ad1061a4?auto=format&fit=crop&w=800&q=75',
    thumbnails: [
      'https://images.unsplash.com/photo-1614676471928-2ed0ad1061a4?auto=format&fit=crop&w=800&q=75'
    ],
    colors: [
      { name: 'Oatmeal Heather', hex: '#E5E5E5' },
      { name: 'Forest Night', hex: '#1C3125' }
    ],
    sizes: ['M', 'L', 'XL'],
    badge: 'New',
    description: 'Textured honey-comb waffle knit offering natural heat retention and breathability with an antiqued brass metal zipper.',
    materials: '100% Breathable Combed Cotton Waffle Knit',
    careInstructions: 'Machine wash delicate, lay flat to dry.',
    isNewArrival: true
  },
  {
    id: 'nova-men-09',
    name: 'Overdyed Heavy Flannel Overshirt',
    category: 'Men',
    subcategory: 'Premium Shirts',
    price: 2899,
    originalPrice: 4299,
    discountBadge: '32% OFF',
    rating: 4.8,
    reviewCount: 52,
    image: 'https://images.unsplash.com/photo-1589310243389-96a5483213a8?auto=format&fit=crop&w=800&q=75',
    thumbnails: [
      'https://images.unsplash.com/photo-1589310243389-96a5483213a8?auto=format&fit=crop&w=800&q=75'
    ],
    colors: [
      { name: 'Burgundy Plaid', hex: '#7F1D1D' },
      { name: 'Earth Ochre', hex: '#B45309' }
    ],
    sizes: ['S', 'M', 'L', 'XL'],
    badge: 'Sale',
    description: 'Heavy brushed flannel overshirt designed for autumn layering with dual flap chest pockets and tortoiseshell buttons.',
    materials: '100% Brushed Cotton Flannel (300 GSM)',
    careInstructions: 'Machine wash cold, tumble dry gentle.',
    isSale: true
  },
  {
    id: 'nova-men-10',
    name: 'Tailored Relaxed Pleated Chino',
    category: 'Men',
    subcategory: 'Cargo Pants',
    price: 2999,
    originalPrice: 4199,
    discountBadge: '28% OFF',
    rating: 4.9,
    reviewCount: 68,
    image: 'https://images.unsplash.com/photo-1479064555552-3ef4979f8908?auto=format&fit=crop&w=800&q=75',
    thumbnails: [
      'https://images.unsplash.com/photo-1479064555552-3ef4979f8908?auto=format&fit=crop&w=800&q=75'
    ],
    colors: [
      { name: 'Camel Tan', hex: '#D97706' },
      { name: 'Dark Navy', hex: '#1E293B' }
    ],
    sizes: ['30', '32', '34', '36'],
    badge: 'Bestseller',
    description: 'Japanese style single-pleated front with a gently tapered leg and concealed elastic waistband for all-day comfort.',
    materials: '98% Cotton Twill, 2% Spandex',
    careInstructions: 'Machine wash warm with like colors.'
  },

  // ==========================================
  // WOMEN'S FASHION (11-25)
  // ==========================================
  {
    id: 'nova-women-01',
    name: 'Sculpted Ribbed Midi Column Dress',
    category: 'Women',
    subcategory: 'Dresses',
    price: 2899,
    originalPrice: 4299,
    discountBadge: '32% OFF',
    rating: 4.9,
    reviewCount: 168,
    image: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&w=800&q=75',
    thumbnails: [
      'https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&w=800&q=75',
      'https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&w=800&q=75'
    ],
    colors: [
      { name: 'Espresso Brown', hex: '#451A03' },
      { name: 'Chalk White', hex: '#FAFAFA' },
      { name: 'Noir Black', hex: '#0A0A0A' }
    ],
    sizes: ['XS', 'S', 'M', 'L'],
    badge: 'Bestseller',
    description: 'An elegant body-contouring column dress knit in thick ribbed modal. Features a high square neckline and subtle side thigh split.',
    materials: '92% Rayon Modal, 8% Elastane Knit',
    careInstructions: 'Hand wash cold, dry flat in shade.',
    isTrending: true,
    isNewArrival: true
  },
  {
    id: 'nova-women-02',
    name: 'Oversized Double-Breasted Tailored Blazer',
    category: 'Women',
    subcategory: 'Jackets',
    price: 4999,
    originalPrice: 7499,
    discountBadge: '33% OFF',
    rating: 5.0,
    reviewCount: 89,
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=75',
    thumbnails: [
      'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=75',
      'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=800&q=75'
    ],
    colors: [
      { name: 'Oatmeal Beige', hex: '#E5E7EB' },
      { name: 'Charcoal Pinstripe', hex: '#374151' },
      { name: 'Pitch Black', hex: '#111827' }
    ],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    badge: 'Trending',
    description: 'Power dressing reimagined with relaxed padded shoulders, peak lapels, horn buttons, and silky cupro lining.',
    materials: '70% Wool blend, 30% Polyester',
    careInstructions: 'Professional dry clean only.',
    isTrending: true
  },
  {
    id: 'nova-women-03',
    name: 'Silk Touch Asymmetrical Drape Top',
    category: 'Women',
    subcategory: 'Tops',
    price: 1999,
    originalPrice: 2999,
    discountBadge: '33% OFF',
    rating: 4.7,
    reviewCount: 73,
    image: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=800&q=75',
    thumbnails: [
      'https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=800&q=75'
    ],
    colors: [
      { name: 'Champagne Silk', hex: '#FEF3C7' },
      { name: 'Emerald Forest', hex: '#065F46' },
      { name: 'Midnight', hex: '#0F172A' }
    ],
    sizes: ['XS', 'S', 'M', 'L'],
    badge: 'New',
    description: 'Fluid satin drape top with a one-shoulder gather, bias cut hem, and lustrous light-catching sheen.',
    materials: '100% High-grade Poly Satin Silk',
    careInstructions: 'Delicate hand wash cold.',
    isNewArrival: true
  },
  {
    id: 'nova-women-04',
    name: 'High-Rise Wide Leg Palazzo Jeans',
    category: 'Women',
    subcategory: 'Jeans',
    price: 3299,
    originalPrice: 4799,
    discountBadge: '31% OFF',
    rating: 4.8,
    reviewCount: 124,
    image: 'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=800&q=75',
    thumbnails: [
      'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=800&q=75'
    ],
    colors: [
      { name: 'Vintage Sky Blue', hex: '#BAE6FD' },
      { name: 'Raw Ecru White', hex: '#F9FAFB' }
    ],
    sizes: ['26', '28', '30', '32'],
    badge: 'Bestseller',
    description: 'Fitted at the high waist and flowing into a relaxed dramatic wide flare. Premium comfort-stretch denim.',
    materials: '99% Organic Cotton, 1% Elastane',
    careInstructions: 'Machine wash cold, turn inside out.'
  },
  {
    id: 'nova-women-05',
    name: 'Linen Blend Vest & Trouser Co-ord Set',
    category: 'Women',
    subcategory: 'Co-ords',
    price: 4299,
    originalPrice: 6499,
    discountBadge: '34% OFF',
    rating: 4.9,
    reviewCount: 91,
    image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=800&q=75',
    thumbnails: [
      'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=800&q=75',
      'https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=800&q=75'
    ],
    colors: [
      { name: 'Warm Terracotta', hex: '#C2410C' },
      { name: 'Soft Cream', hex: '#FFFBEB' },
      { name: 'Slate Olive', hex: '#4B5563' }
    ],
    sizes: ['XS', 'S', 'M', 'L'],
    badge: 'Trending',
    description: 'Matching 2-piece set: tailored button-front waistcoat vest paired with high-waisted pleated wide-leg trousers.',
    materials: '55% Pure Linen, 45% Viscose',
    careInstructions: 'Dry clean recommended.',
    isTrending: true,
    isNewArrival: true
  },
  {
    id: 'nova-women-06',
    name: 'Pleated Satin A-Line Maxi Skirt',
    category: 'Women',
    subcategory: 'Skirts',
    price: 2499,
    originalPrice: 3599,
    discountBadge: '30% OFF',
    rating: 4.6,
    reviewCount: 56,
    image: 'https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?auto=format&fit=crop&w=800&q=75',
    thumbnails: [
      'https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?auto=format&fit=crop&w=800&q=75'
    ],
    colors: [
      { name: 'Gloss Champagne', hex: '#FEF08A' },
      { name: 'Jet Noir', hex: '#0A0A0A' }
    ],
    sizes: ['S', 'M', 'L'],
    badge: 'Sale',
    description: 'Accordian knife-pleated maxi skirt with a hidden elastic waistband that catches dynamic motion when walking.',
    materials: '100% Micro-Pleated Satin Polyester',
    careInstructions: 'Hand wash cool, hang dry.',
    isSale: true
  },
  {
    id: 'nova-women-07',
    name: 'Croissant Quilted Cloud Handbag',
    category: 'Women',
    subcategory: 'Handbags',
    price: 3499,
    originalPrice: 5199,
    discountBadge: '32% OFF',
    rating: 5.0,
    reviewCount: 145,
    image: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=800&q=75',
    thumbnails: [
      'https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=800&q=75',
      'https://images.unsplash.com/photo-1590874103328-eac38a683ce7?auto=format&fit=crop&w=800&q=75'
    ],
    colors: [
      { name: 'Cloud Cream', hex: '#FDF4E3' },
      { name: 'Matte Obsidian', hex: '#171717' },
      { name: 'Matcha Green', hex: '#65A30D' }
    ],
    sizes: ['One Size'],
    badge: 'Bestseller',
    description: 'Pillow-soft quilted vegan leather shoulder bag with magnetic snap closure and adjustable scrunchie strap.',
    materials: 'Ultra-soft vegan PU leather with satin lining',
    careInstructions: 'Wipe with microfiber damp cloth.',
    isTrending: true
  },
  {
    id: 'nova-women-08',
    name: 'Chunky Platform Leather Loafers',
    category: 'Women',
    subcategory: 'Sneakers',
    price: 3899,
    originalPrice: 5699,
    discountBadge: '31% OFF',
    rating: 4.8,
    reviewCount: 67,
    image: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&w=800&q=75',
    thumbnails: [
      'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&w=800&q=75'
    ],
    colors: [
      { name: 'Polished Black', hex: '#000000' },
      { name: 'Oxblood Red', hex: '#881337' }
    ],
    sizes: ['UK 4', 'UK 5', 'UK 6', 'UK 7', 'UK 8'],
    badge: 'Trending',
    description: 'Glossy penny loafers featuring a statement 5cm cleated platform sole and cushioned arch support.',
    materials: 'Microfiber Glazed Faux Leather & Lightweight EVA platform',
    careInstructions: 'Buff with shoe polish.',
    isTrending: true
  },

  // ==========================================
  // STREETWEAR & GRAPHIC DROPS (26-38)
  // ==========================================
  {
    id: 'nova-street-01',
    name: 'Cybernetic Tokyo Varsity Bomber Jacket',
    category: 'Streetwear',
    subcategory: 'Varsity Jackets',
    price: 5499,
    originalPrice: 8999,
    discountBadge: '39% OFF',
    rating: 5.0,
    reviewCount: 204,
    image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=800&q=75',
    thumbnails: [
      'https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=800&q=75',
      'https://images.unsplash.com/photo-1508746829417-e6f548d8d6ed?auto=format&fit=crop&w=800&q=75'
    ],
    colors: [
      { name: 'Forest Green & Cream', hex: '#14532D' },
      { name: 'Shadow Black & White', hex: '#18181B' }
    ],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    badge: 'Limited Drop',
    description: 'Heavy Melton wool body with vegan leather contrast sleeves, chenille embroidery patches, and ribbed striped trims.',
    materials: '70% Melton Wool, 30% Vegan Leather sleeves, Satin quilted interior',
    careInstructions: 'Specialist dry clean only.',
    isTrending: true,
    isNewArrival: true
  },
  {
    id: 'nova-street-02',
    name: 'Acid Wash Acid Rave Graphic Hoodie',
    category: 'Streetwear',
    subcategory: 'Hoodies',
    price: 3699,
    originalPrice: 5499,
    discountBadge: '33% OFF',
    rating: 4.9,
    reviewCount: 156,
    image: 'https://images.unsplash.com/photo-1509967419530-da38b4704bc6?auto=format&fit=crop&w=800&q=75',
    thumbnails: [
      'https://images.unsplash.com/photo-1509967419530-da38b4704bc6?auto=format&fit=crop&w=800&q=75'
    ],
    colors: [
      { name: 'Mineral Acid Grey', hex: '#4B5563' },
      { name: 'Washed Lilac', hex: '#C084FC' }
    ],
    sizes: ['M', 'L', 'XL', 'XXL'],
    badge: 'Bestseller',
    description: 'Vintage mineral washed 400 GSM heavyweight cotton with high-density puff print NOVA iconography across the back.',
    materials: '100% Combed Mineral-Washed Cotton (400 GSM)',
    careInstructions: 'Wash inside out in cold water.',
    isTrending: true
  },
  {
    id: 'nova-street-03',
    name: 'Parachute Tactical Flight Pants',
    category: 'Streetwear',
    subcategory: 'Cargo',
    price: 2999,
    originalPrice: 4299,
    discountBadge: '30% OFF',
    rating: 4.8,
    reviewCount: 88,
    image: 'https://images.unsplash.com/photo-1506629082955-511b1aa562c8?auto=format&fit=crop&w=800&q=75',
    thumbnails: [
      'https://images.unsplash.com/photo-1506629082955-511b1aa562c8?auto=format&fit=crop&w=800&q=75'
    ],
    colors: [
      { name: 'Tactical Black', hex: '#000000' },
      { name: 'Silver Smoke', hex: '#9CA3AF' }
    ],
    sizes: ['S', 'M', 'L', 'XL'],
    badge: 'Trending',
    description: 'Ultra-lightweight nylon parachute trousers featuring knee pleats, 3D cargo pockets, and adjustable bungee toggles.',
    materials: '100% Matte Technical Micro-Ripstop Nylon',
    careInstructions: 'Machine wash cold.',
    isTrending: true
  },
  {
    id: 'nova-street-04',
    name: 'NOVA Distressed Matrix Graphic Tee',
    category: 'Streetwear',
    subcategory: 'Graphic Tees',
    price: 1699,
    originalPrice: 2499,
    discountBadge: '32% OFF',
    rating: 4.7,
    reviewCount: 92,
    image: 'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=800&q=75',
    thumbnails: [
      'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=800&q=75'
    ],
    colors: [
      { name: 'Vintage Washed Black', hex: '#27272A' },
      { name: 'Off-White', hex: '#F4F4F5' }
    ],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    badge: 'New',
    description: 'Screen-printed cyber artwork with intentional grinded distressed collars and raw enzyme-washed cotton.',
    materials: '100% Combed Cotton (240 GSM)',
    careInstructions: 'Machine wash cold with similar colors.',
    isNewArrival: true
  },
  {
    id: 'nova-street-05',
    name: 'Retro Chunky Runner Sneakers',
    category: 'Streetwear',
    subcategory: 'Sneakers',
    price: 4999,
    originalPrice: 7999,
    discountBadge: '37% OFF',
    rating: 4.9,
    reviewCount: 178,
    image: 'https://images.unsplash.com/photo-1552346154-21d32810aba3?auto=format&fit=crop&w=800&q=75',
    thumbnails: [
      'https://images.unsplash.com/photo-1552346154-21d32810aba3?auto=format&fit=crop&w=800&q=75'
    ],
    colors: [
      { name: 'Silver / Cream / Cobalt', hex: '#CBD5E1' },
      { name: 'Triple Charcoal', hex: '#1F2937' }
    ],
    sizes: ['UK 7', 'UK 8', 'UK 9', 'UK 10'],
    badge: 'Bestseller',
    description: 'Y2K inspired running silhouette constructed with multi-layered breathable mesh, metallic overlays, and air-cushioned midsole.',
    materials: 'Mesh, Synthetic Leather & TPU Air Midsole',
    careInstructions: 'Spot clean with sneaker wipe.'
  },
  {
    id: 'nova-street-06',
    name: 'Washed Twill Embroidered Dad Cap',
    category: 'Streetwear',
    subcategory: 'Caps',
    price: 1199,
    originalPrice: 1799,
    discountBadge: '33% OFF',
    rating: 4.8,
    reviewCount: 84,
    image: 'https://images.unsplash.com/photo-1588850561407-ed78c282e89b?auto=format&fit=crop&w=800&q=75',
    thumbnails: [
      'https://images.unsplash.com/photo-1588850561407-ed78c282e89b?auto=format&fit=crop&w=800&q=75'
    ],
    colors: [
      { name: 'Faded Black', hex: '#18181B' },
      { name: 'Vintage Khaki', hex: '#D6D3D1' },
      { name: 'Forest Green', hex: '#14532D' }
    ],
    sizes: ['Adjustable Strap'],
    badge: 'New',
    description: 'Unstructured 6-panel silhouette with curved brim, brass buckle slider, and 3D tonal NOVA insignia embroidery.',
    materials: '100% Washed Heavy Cotton Twill',
    careInstructions: 'Spot clean only.'
  },

  // ==========================================
  // ACCESSORIES (39-48)
  // ==========================================
  {
    id: 'nova-acc-01',
    name: 'Chrono Minimalist Matte Black Watch',
    category: 'Accessories',
    subcategory: 'Watches',
    price: 5999,
    originalPrice: 8999,
    discountBadge: '33% OFF',
    rating: 5.0,
    reviewCount: 112,
    image: 'https://images.unsplash.com/photo-1524805444758-089113d48a6d?auto=format&fit=crop&w=800&q=75',
    thumbnails: [
      'https://images.unsplash.com/photo-1524805444758-089113d48a6d?auto=format&fit=crop&w=800&q=75',
      'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=800&q=75'
    ],
    colors: [
      { name: 'All Black DLC', hex: '#0A0A0A' },
      { name: 'Brushed Silver', hex: '#E5E7EB' }
    ],
    sizes: ['40mm Dial'],
    badge: 'Limited Drop',
    description: 'Japanese quartz chronograph movement encased in aerospace-grade 316L stainless steel with sapphire crystal glass.',
    materials: '316L Stainless Steel & Scratch-Proof Sapphire Crystal (5 ATM Waterproof)',
    careInstructions: 'Wipe with microfiber polishing cloth.',
    isTrending: true
  },
  {
    id: 'nova-acc-02',
    name: 'Polarized Architectural Acetate Sunglasses',
    category: 'Accessories',
    subcategory: 'Sunglasses',
    price: 2499,
    originalPrice: 3899,
    discountBadge: '36% OFF',
    rating: 4.9,
    reviewCount: 95,
    image: 'https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=800&q=75',
    thumbnails: [
      'https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=800&q=75'
    ],
    colors: [
      { name: 'Gloss Onyx Black', hex: '#000000' },
      { name: 'Amber Tortoiseshell', hex: '#78350F' }
    ],
    sizes: ['Universal Fit'],
    badge: 'Bestseller',
    description: 'Bold beveled rectangular frame handcrafted from premium Italian cellulose acetate with UV400 polarized dark green lenses.',
    materials: 'Handcrafted Italian Acetate & 100% UV400 Polarized Lenses',
    careInstructions: 'Store in hardcase, wash with mild lens solution.',
    isTrending: true
  },
  {
    id: 'nova-acc-03',
    name: 'Crossbody Modular Cordura Sling Bag',
    category: 'Accessories',
    subcategory: 'Bags',
    price: 2199,
    originalPrice: 3299,
    discountBadge: '33% OFF',
    rating: 4.8,
    reviewCount: 78,
    image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=800&q=75',
    thumbnails: [
      'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=800&q=75'
    ],
    colors: [
      { name: 'Stealth Black', hex: '#111827' },
      { name: 'Wolf Grey', hex: '#6B7280' }
    ],
    sizes: ['4L Capacity'],
    badge: 'Trending',
    description: 'Weatherproof 500D Cordura ballistic nylon with Fidlock magnetic buckle and interior padded sleeve for phone and cards.',
    materials: '500D Ballistic Cordura Nylon & YKK AquaGuard Zips',
    careInstructions: 'Hand wipe clean.'
  },
  {
    id: 'nova-acc-04',
    name: 'Full-Grain Italian Leather Reversible Belt',
    category: 'Accessories',
    subcategory: 'Belts',
    price: 1899,
    originalPrice: 2799,
    discountBadge: '32% OFF',
    rating: 4.7,
    reviewCount: 63,
    image: 'https://images.unsplash.com/photo-1624222247344-550fb60583dc?auto=format&fit=crop&w=800&q=75',
    thumbnails: [
      'https://images.unsplash.com/photo-1624222247344-550fb60583dc?auto=format&fit=crop&w=800&q=75'
    ],
    colors: [
      { name: 'Black / Tan Reversible', hex: '#1C1917' }
    ],
    sizes: ['32', '34', '36', '38'],
    badge: 'New',
    description: 'Dual-sided vegetable tanned leather featuring a rotating brushed gunmetal buckle that flips between Black and Cognac Brown.',
    materials: '100% Full-Grain Vegetable-Tanned Leather',
    careInstructions: 'Condition with natural leather wax.'
  },
  {
    id: 'nova-acc-05',
    name: 'RFID-Shielded Slim Bifold Cardholder',
    category: 'Accessories',
    subcategory: 'Wallets',
    price: 1499,
    originalPrice: 2299,
    discountBadge: '35% OFF',
    rating: 4.9,
    reviewCount: 148,
    image: 'https://images.unsplash.com/photo-1627123424574-724758594e93?auto=format&fit=crop&w=800&q=75',
    thumbnails: [
      'https://images.unsplash.com/photo-1627123424574-724758594e93?auto=format&fit=crop&w=800&q=75'
    ],
    colors: [
      { name: 'Matte Carbon', hex: '#262626' },
      { name: 'Cognac Saddle', hex: '#78350F' }
    ],
    sizes: ['Slim Pocket Fit'],
    badge: 'Bestseller',
    description: 'Ultra-thin profile holding up to 8 cards and cash bills with built-in aerospace aluminum electromagnetic RFID blocking layers.',
    materials: 'Top-Grain Leather & RFID Aluminum Mesh Lining',
    careInstructions: 'Wipe dry with clean cloth.'
  },
  {
    id: 'nova-acc-06',
    name: 'Solid 925 Sterling Silver Curb Chain',
    category: 'Accessories',
    subcategory: 'Watches',
    price: 3299,
    originalPrice: 4999,
    discountBadge: '34% OFF',
    rating: 4.9,
    reviewCount: 82,
    image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=800&q=75',
    thumbnails: [
      'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=800&q=75'
    ],
    colors: [
      { name: 'Polished 925 Silver', hex: '#E2E8F0' },
      { name: '18K Vermeil Gold', hex: '#FACC15' }
    ],
    sizes: ['50cm Length', '55cm Length'],
    badge: 'Trending',
    description: 'Diamond-cut 5mm solid sterling silver curb link chain finished with rhodium plating for permanent anti-tarnish luster.',
    materials: 'Solid 925 Sterling Silver with Rhodium Anti-Tarnish Finish',
    careInstructions: 'Store in airtight pouch provided.'
  }
];

export const FASHION_HERO_SLIDES = [
  {
    id: 'slide-1',
    badge: 'NEW SEASON 2026',
    categoryName: 'NEW ARRIVALS',
    title: 'New Season. New Energy.',
    subtitle: 'Redefining contemporary urban luxury with sculptural tailoring and heavyweight fabrications.',
    cta: 'Shop New Arrivals',
    targetCategory: 'All',
    image: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=1600&q=80'
  },
  {
    id: 'slide-2',
    badge: 'MEN’S EDIT',
    categoryName: 'MEN',
    title: 'Elevate Your Everyday',
    subtitle: 'From 280 GSM oversized boxy tees to technical ripstop flight jackets and selvedge baggy denim.',
    cta: 'Shop Men',
    targetCategory: 'Men',
    image: 'https://images.unsplash.com/photo-1516257984-b1b4d707412e?auto=format&fit=crop&w=1600&q=80'
  },
  {
    id: 'slide-3',
    badge: 'WOMEN’S COUTURE',
    categoryName: 'WOMEN',
    title: 'Made To Be Noticed',
    subtitle: 'Sculpted ribbed midi silhouettes, sharp double-breasted blazers, and pure fluid satin drapes.',
    cta: 'Shop Women',
    targetCategory: 'Women',
    image: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=1600&q=80'
  },
  {
    id: 'slide-4',
    badge: 'METROPOLITAN DROP',
    categoryName: 'STREETWEAR',
    title: 'Own The Street',
    subtitle: 'Heavyweight graphic varsity jackets, Tokyo acid rave fleece, and modular parachute tactical cargos.',
    cta: 'Explore Streetwear',
    targetCategory: 'Streetwear',
    image: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=1600&q=80'
  },
  {
    id: 'slide-5',
    badge: 'HAUTE ATELIER',
    categoryName: 'PREMIUM COLLECTION',
    title: 'Designed For The Bold',
    subtitle: 'Uncompromising craftsmanship built with Japanese denim, European linen, and Italian nappa leather.',
    cta: 'View Collection',
    targetCategory: 'All',
    image: 'https://images.unsplash.com/photo-1508746829417-e6f548d8d6ed?auto=format&fit=crop&w=1600&q=80'
  },
  {
    id: 'slide-6',
    badge: 'RESORT & CRUISE',
    categoryName: 'SUMMER EDIT',
    title: 'Your Summer Starts Here',
    subtitle: 'Breezy camp-collar linen shirts, lightweight co-ords, and sunglasses designed for effortless warmth.',
    cta: 'Shop Summer',
    targetCategory: 'Men',
    image: 'https://images.unsplash.com/photo-1469334031218-e382a71b716b?auto=format&fit=crop&w=1600&q=80'
  },
  {
    id: 'slide-7',
    badge: 'SIGNATURE DROP',
    categoryName: 'NOVA EXCLUSIVE',
    title: 'The NOVA Collection',
    subtitle: 'Limited run archival silhouettes engineered for the forward-thinking generation worldwide.',
    cta: 'Explore NOVA',
    targetCategory: 'All',
    image: 'https://images.unsplash.com/photo-1558769132-cb1aea458c5e?auto=format&fit=crop&w=1600&q=80'
  }
];

export const FASHION_CATEGORIES = [
  {
    id: 'men',
    title: 'MEN',
    subtitle: 'Tailored Streetwear & Modern Staples',
    image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=800&q=75',
    filterKey: 'Men'
  },
  {
    id: 'women',
    title: 'WOMEN',
    subtitle: 'Sculptural Silhouettes & Luxe Co-ords',
    image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=800&q=75',
    filterKey: 'Women'
  },
  {
    id: 'streetwear',
    title: 'STREETWEAR',
    subtitle: 'Heavyweight Hoodies & Varsity Drops',
    image: 'https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?auto=format&fit=crop&w=800&q=75',
    filterKey: 'Streetwear'
  },
  {
    id: 'new-arrivals',
    title: 'NEW ARRIVALS',
    subtitle: 'Fresh Runway Cuts Just Dropped',
    image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=800&q=75',
    filterKey: 'All'
  },
  {
    id: 'bestsellers',
    title: 'BEST SELLERS',
    subtitle: 'Most Coveted Community Favorites',
    image: 'https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=800&q=75',
    filterKey: 'All'
  },
  {
    id: 'sale',
    title: 'SALE',
    subtitle: 'Up To 50% Off Selected Styles',
    image: 'https://images.unsplash.com/photo-1445205170230-053b83016050?auto=format&fit=crop&w=800&q=75',
    filterKey: 'All'
  }
];

export const RECENT_SEARCHES = [
  'oversized t-shirt',
  'varsity jacket',
  'cargo pants',
  'summer dress',
  'chunky sneakers',
  'crossbody bag'
];

export const POPULAR_SEARCHES = [
  'Heavyweight Hoodie',
  'Linen Co-ord Set',
  'Parachute Pants',
  'Matte Watch',
  'Baggy Denim',
  'Sunglasses'
];
