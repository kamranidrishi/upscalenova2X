export type PlanType = 'Base' | 'Pro' | 'Max';
export type BusinessType = 'cafe' | 'restaurant' | 'real-estate' | 'gym' | 'law-firm' | 'marketing' | 'finance' | 'ai' | 'form' | 'school';
export type CategoryType = 'Café' | 'Restaurant' | 'Flat / Real Estate' | 'Gym' | 'Law Firm' | 'Marketing' | 'Finance' | 'AI / SaaS' | 'Services' | 'School';

export interface DemoItem {
  id: string;
  businessId: string; // To link Base, Pro, Max versions of the same business
  title: string;
  category: CategoryType;
  plan: PlanType;
  businessType: BusinessType;
  description: string;
  tagline: string;
  isRealClient: boolean;
  clientName?: string;
  themeColor: string;
  heroImage: string;
  previewImages?: string[];
  features: string[];
}

export const BUSINESS_TYPES: { type: BusinessType; label: CategoryType; name: string; icon: string }[] = [
  { type: 'cafe', label: 'Café', name: 'Nova Café & Roasters', icon: 'Coffee' },
  { type: 'restaurant', label: 'Restaurant', name: 'La Maison Gourmet Bistro', icon: 'Utensils' },
  { type: 'real-estate', label: 'Flat / Real Estate', name: 'Nova Heights Residences', icon: 'Building2' },
  { type: 'gym', label: 'Gym', name: 'IronFit Athletic Club', icon: 'Dumbbell' },
  { type: 'law-firm', label: 'Law Firm', name: 'Sterling & Associates Law', icon: 'Scale' },
  { type: 'marketing', label: 'Marketing', name: 'Nova Digital Agency', icon: 'Sparkles' },
  { type: 'finance', label: 'Finance', name: 'FinFlow Capital & SaaS', icon: 'PieChart' },
  { type: 'ai', label: 'AI / SaaS', name: 'Cognita AI Platform', icon: 'Zap' },
  { type: 'form', label: 'Services', name: 'Apex Home & Repair Pro', icon: 'Wrench' }
];

export const DEMO_DATA: DemoItem[] = [
  // -------------------------------------------------------------
  // CAFÉ (Nova Café & Roasters)
  // -------------------------------------------------------------
  {
    id: 'cafe-base',
    businessId: 'cafe',
    title: 'Nova Café & Roasters',
    category: 'Café',
    plan: 'Base',
    businessType: 'cafe',
    tagline: 'Artisan Coffee & 18+ Fresh Handcrafted Menu Items',
    description: 'Clean, professional single-location café website featuring smooth rounded modern design, 18+ artisan menu items, veg/non-veg dietary tags, 8am-11pm daily timings, roastery story, and direct call order.',
    isRealClient: true,
    clientName: 'Nova Café',
    themeColor: 'amber',
    heroImage: 'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=1200&q=80',
    previewImages: [
      'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=1200&q=80'
    ],
    features: ['Smooth Rounded Aesthetic', '18+ Handcrafted Menu Items', 'Veg & Non-Veg Badges', 'Daily 8 AM - 11 PM Timings', 'Heritage Roastery Story', 'Direct Call Ordering']
  },
  {
    id: 'cafe-pro',
    businessId: 'cafe',
    title: 'Nova Café & Roasters',
    category: 'Café',
    plan: 'Pro',
    businessType: 'cafe',
    tagline: 'Warm Beige & Coffee Theme, Top-Right Basket & Direct WhatsApp Ordering',
    description: 'Upgraded interactive café experience in warm beige & rich coffee: Live Food Search, Top-Right Live Basket, Direct WhatsApp Order flow with customer name, phone & custom extras, in-basket table selection, and customer reviews.',
    isRealClient: true,
    clientName: 'Nova Café',
    themeColor: 'amber',
    heroImage: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=1200&q=80',
    previewImages: [
      'https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1447933601403-0c6688de566e?auto=format&fit=crop&w=1200&q=80'
    ],
    features: ['Warm Beige & Coffee Palette', 'Top-Right Live Basket Button', 'Direct WhatsApp Ordering with Receipt', 'In-Basket Table & Extra Notes Input', 'Food Search & Category Filters', 'Customer Reviews & Social Media']
  },
  {
    id: 'cafe-max',
    businessId: 'cafe',
    title: 'Nova Café & Roasters',
    category: 'Café',
    plan: 'Max',
    businessType: 'cafe',
    tagline: 'Interactive Food Touch FX, 3-Action Basket, Multi-UPI Pay & AI Barista',
    description: 'Complete luxury café ecosystem: Interactive touch animations (salt sprinkles, cheese melt, steam bubbles, chocolate drizzle), 3 distinct basket actions (Itemized Bill Details, Place Order to Kitchen, Dedicated Multi-UPI Payment), table QR ordering, embedded Nova AI Barista Chatbot, and Live Kitchen KDS.',
    isRealClient: true,
    clientName: 'Nova Café',
    themeColor: 'amber',
    heroImage: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=1200&q=80',
    previewImages: [
      'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1517256064527-09c73fc73e38?auto=format&fit=crop&w=1200&q=80'
    ],
    features: ['Interactive Food Touch FX (Salt/Cheese/Steam)', '3 Basket Options: Bill, Order & Payment', 'Simulated UPI (GPay/PhonePe/Paytm/BHIM)', 'Live Interactive Map & Apni Location Tracker', 'Embedded Nova AI Barista Assistant', 'Live Kitchen KDS & Sales Dashboard']
  },

  // -------------------------------------------------------------
  // RESTAURANT (La Maison Bistro)
  // -------------------------------------------------------------
  {
    id: 'restaurant-base',
    businessId: 'restaurant',
    title: 'La Maison Gourmet Bistro',
    category: 'Restaurant',
    plan: 'Base',
    businessType: 'restaurant',
    tagline: 'French-Italian Culinary Artistry & Tasting Collection',
    description: 'Champagne cream luxury bistro website with 22+ artisan gourmet courses, chef highlights, location details, and direct phone reservation.',
    isRealClient: false,
    themeColor: 'rose',
    heroImage: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80',
    previewImages: [
      'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1200&q=80'
    ],
    features: ['22+ Curated Gourmet Food Items', 'French Champagne Cream Luxury Layout', 'Live Kitchen Stock Manager', 'Location & VIP Table Hotline']
  },
  {
    id: 'restaurant-pro',
    businessId: 'restaurant',
    title: 'La Maison Gourmet Bistro',
    category: 'Restaurant',
    plan: 'Pro',
    businessType: 'restaurant',
    tagline: 'Michelin-Inspired Tasting Menus & Private Reservations',
    description: 'Bordeaux wine velvet luxury experience with 22+ gourmet dishes, vegetarian filters, 3 Basket Options (Bill/WhatsApp/UPI), and online table booking.',
    isRealClient: false,
    themeColor: 'rose',
    heroImage: 'https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&w=1200&q=80',
    previewImages: [
      'https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=1200&q=80'
    ],
    features: ['22+ Gourmet Food & Beverage Items', 'Bordeaux Wine & Antique Gold Theme', '3 Basket Options (Bill, WhatsApp, UPI)', 'Instant Table Reservation Engine', 'Live Stock & Sold-Out Manager']
  },
  {
    id: 'restaurant-max',
    businessId: 'restaurant',
    title: 'La Maison Gourmet Bistro',
    category: 'Restaurant',
    plan: 'Max',
    businessType: 'restaurant',
    tagline: 'Comprehensive Dining System with KDS & Live GPS Map',
    description: 'Haute Gastronomy cyber-bordeaux platform with 22+ dishes, 3 Basket Options, Live Interactive Map & Apni Location distance tracking, Sommelier AI, and KDS screen.',
    isRealClient: false,
    themeColor: 'rose',
    heroImage: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1200&q=80',
    previewImages: [
      'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1200&q=80'
    ],
    features: ['22+ Gourmet Food Items & Wine Pairings', '3 Basket Options (Bill, WhatsApp, UPI)', 'Live Interactive Map & Apni Location Tracker', 'Maison Sommelier AI Assistant', 'Live Kitchen KDS Chef Display']
  },

  // -------------------------------------------------------------
  // FLAT / REAL ESTATE (Nova Heights Residences)
  // -------------------------------------------------------------
  {
    id: 'real-estate-base',
    businessId: 'real-estate',
    title: 'Nova Heights Residences',
    category: 'Flat / Real Estate',
    plan: 'Base',
    businessType: 'real-estate',
    tagline: 'Premium Flats & Apartments',
    description: 'A professional website to showcase flats, apartments and residential projects with developer overview, BHK details, gallery, amenities, and WhatsApp inquiry.',
    isRealClient: false,
    themeColor: 'emerald',
    heroImage: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1200&q=80',
    previewImages: [
      'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf?auto=format&fit=crop&w=1200&q=80'
    ],
    features: ['Property Listings (2, 3 & 4 BHK)', 'BHK Details & Carpet Area', 'Amenities & Image Gallery', 'Location & Google Maps', 'Schedule Site Visit & WhatsApp Form']
  },
  {
    id: 'real-estate-pro',
    businessId: 'real-estate',
    title: 'Nova Heights Residences',
    category: 'Flat / Real Estate',
    plan: 'Pro',
    businessType: 'real-estate',
    tagline: 'Advanced Property Search, Floor Plans & Leads CRM',
    description: 'A complete property website with advanced BHK/price search, interactive 2D/3D floor plans, brochure downloads, appointment scheduler, and full leads CRM.',
    isRealClient: false,
    themeColor: 'emerald',
    heroImage: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
    previewImages: [
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80'
    ],
    features: ['Advanced BHK & Price Search Filter', 'Interactive Floor Plans & Room Specs', 'Download Project PDF Brochure', 'Schedule Site Visit & Cab Pickup', 'Leads Management CRM & EMI Calculator']
  },
  {
    id: 'real-estate-max',
    businessId: 'real-estate',
    title: 'Nova Heights Residences',
    category: 'Flat / Real Estate',
    plan: 'Max',
    businessType: 'real-estate',
    tagline: 'Complete AI-Powered Real Estate Platform & 360° Virtual Tours',
    description: 'A complete AI-powered real estate platform for property discovery, 360° virtual tours, online token booking payments, customer portal, and AI property assistant.',
    isRealClient: false,
    themeColor: 'emerald',
    heroImage: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80',
    previewImages: [
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1200&q=80'
    ],
    features: ['Property Listings & BHK Search', 'Floor Plans & 360° Virtual Tour', 'Online Token Booking & Payment UI', 'Buyer & Sales Executive Dashboards', 'Leads CRM & AI Property Assistant']
  },

  // -------------------------------------------------------------
  // GYM (IronFit Athletic Club)
  // -------------------------------------------------------------
  {
    id: 'gym-base',
    businessId: 'gym',
    title: 'IronFit Athletic Club',
    category: 'Gym',
    plan: 'Base',
    businessType: 'gym',
    tagline: 'Train Hard. Live Strong.',
    description: 'Professional gym website with Hero, About, 6 Training Programs, 4 Membership Tiers, Certified Coaches, Gallery, Testimonials & Free Trial Pass Form.',
    isRealClient: false,
    themeColor: 'blue',
    heroImage: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1200&q=80',
    previewImages: [
      'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1574680096145-d05b474e2155?auto=format&fit=crop&w=1200&q=80'
    ],
    features: ['Elite Training Programs Grid', 'Master Coaches Profiles', '4 Membership Tiers Matrix', '1-Day Free Trial Lead Form', 'Facility Gallery & Map']
  },
  {
    id: 'gym-pro',
    businessId: 'gym',
    title: 'IronFit Athletic Club',
    category: 'Gym',
    plan: 'Pro',
    businessType: 'gym',
    tagline: 'Website + Member Management & Lead CRM',
    description: 'Member Portal with Digital QR Pass, 12-Day Workout Streak, Live Exercise Tracker with sets & reps, Attendance Calendar, Lead CRM & Online Payment UI.',
    isRealClient: false,
    themeColor: 'blue',
    heroImage: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=1200&q=80',
    previewImages: [
      'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&w=1200&q=80'
    ],
    features: ['Member Login & Dashboard', 'Digital QR Membership Pass', 'Live Workout & Streak Tracker', 'Leads Management CRM', 'Simulated UPI Payment UI']
  },
  {
    id: 'gym-max',
    businessId: 'gym',
    title: 'IronFit Athletic Club',
    category: 'Gym',
    plan: 'Max',
    businessType: 'gym',
    tagline: 'Complete Gym Management Ecosystem + AI Coach',
    description: 'Complete gym automation ecosystem: Executive Owner BI Dashboard, Multi-Role Access (Owner/Trainer/Member), Diet & Macro Meal Engine, Automated WhatsApp Flows & IronFit AI Coach.',
    isRealClient: false,
    themeColor: 'cyan',
    heroImage: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=1200&q=80',
    previewImages: [
      'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1540497077202-7c8a3999166f?auto=format&fit=crop&w=1200&q=80'
    ],
    features: ['Executive Owner BI Analytics', 'Multi-Role Access (Owner/Admin/PT)', 'Diet & Nutrition Meal Engine', 'IronFit AI Fitness Coach Assistant', 'Automated WhatsApp Workflow Center']
  },

  // -------------------------------------------------------------
  // LAW FIRM (Sterling & Associates)
  // -------------------------------------------------------------
  {
    id: 'law-base',
    businessId: 'law-firm',
    title: 'Sterling & Associates Law',
    category: 'Law Firm',
    plan: 'Base',
    businessType: 'law-firm',
    tagline: 'Relentless Advocacy. Trusted Legal Counsel.',
    description: 'Authoritative, elegant law firm website showcasing corporate, civil, and criminal practice areas, managing partner credentials, and quick consultation request.',
    isRealClient: false,
    themeColor: 'slate',
    heroImage: 'https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&w=1200&q=80',
    previewImages: [
      'https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&w=1200&q=80'
    ],
    features: ['Practice Areas Showcase', 'Attorney Profile Cards', 'Confidential Consultation Form', 'Office Location & Emergency Line']
  },
  {
    id: 'law-pro',
    businessId: 'law-firm',
    title: 'Sterling & Associates Law',
    category: 'Law Firm',
    plan: 'Pro',
    businessType: 'law-firm',
    tagline: 'Multi-Disciplinary Legal Team, Case Track Record & Online Scheduling',
    description: 'Advanced legal platform with interactive practice filter, multi-attorney directory with education and bar admissions, landmark case settlements, and calendar appointment scheduler.',
    isRealClient: false,
    themeColor: 'slate',
    heroImage: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80',
    previewImages: [
      'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1505664194779-8beaceb93744?auto=format&fit=crop&w=1200&q=80'
    ],
    features: ['Practice Area Deep-Dives', 'Attorney Directory with Credentials', 'Verified Case Verdicts & Settlements', 'Interactive Consultation Booking', 'Client Testimonial Vault']
  },
  {
    id: 'law-max',
    businessId: 'law-firm',
    title: 'Sterling & Associates Law',
    category: 'Law Firm',
    plan: 'Max',
    businessType: 'law-firm',
    tagline: 'Client Case Portal, Retainer Billing & Partner Intake CRM',
    description: 'Enterprise legal management system: Client Case Tracker with document vault & court date milestones, paired with Law Partner Lead CRM with conflict check automation.',
    isRealClient: false,
    themeColor: 'slate',
    heroImage: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80',
    previewImages: [
      'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=1200&q=80'
    ],
    features: ['Secure Client Case Tracker', 'Document Vault & Hearing Timeline', 'Automated Conflict Check Workflow', 'Partner Intake Pipeline CRM', 'Retainer & Invoicing Status']
  },

  // -------------------------------------------------------------
  // MARKETING AGENCY (Nova Digital)
  // -------------------------------------------------------------
  {
    id: 'marketing-base',
    businessId: 'marketing',
    title: 'Nova Digital Agency',
    category: 'Marketing',
    plan: 'Base',
    businessType: 'marketing',
    tagline: 'We Build High-Growth Digital Experiences',
    description: 'Bold, modern agency landing page with core services (Performance Marketing, SEO, Web Design), selected work highlights, and project inquiry form.',
    isRealClient: true,
    clientName: 'Nova Studio',
    themeColor: 'indigo',
    heroImage: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80',
    previewImages: [
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=1200&q=80'
    ],
    features: ['Services Grid', 'Featured Project Cards', 'Client Testimonials', 'Project Scope Form']
  },
  {
    id: 'marketing-pro',
    businessId: 'marketing',
    title: 'Nova Digital Agency',
    category: 'Marketing',
    plan: 'Pro',
    businessType: 'marketing',
    tagline: 'Filterable Case Studies, ROI Metrics & Scope Cost Calculator',
    description: 'Creative agency portfolio with filterable projects (Branding, Paid Ads, Web, Growth), case studies with quantified ROI metrics (+340% ROAS), interactive budget calculator, and team spotlight.',
    isRealClient: true,
    clientName: 'Nova Studio',
    themeColor: 'indigo',
    heroImage: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=1200&q=80',
    previewImages: [
      'https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80'
    ],
    features: ['Filterable Portfolio Showcase', 'In-Depth Case Study Drawers', 'Interactive Budget & ROI Calculator', 'Client Logos & Video Reviews', 'Our 4-Step Agile Process']
  },
  {
    id: 'marketing-max',
    businessId: 'marketing',
    title: 'Nova Digital Agency',
    category: 'Marketing',
    plan: 'Max',
    businessType: 'marketing',
    tagline: 'Real-Time Client Ad Analytics & Deal Pipeline CRM',
    description: 'Complete agency ecosystem: Live Client Ad Performance Dashboard (Spend, ROAS, CPA, Leads), plus Agency Sales Pipeline Kanban (Discovery -> Proposal -> Closed-Won).',
    isRealClient: true,
    clientName: 'Nova Studio',
    themeColor: 'indigo',
    heroImage: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80',
    previewImages: [
      'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=1200&q=80'
    ],
    features: ['Client Live Campaign Analytics', 'Real-time ROAS & Spend Charts', 'Agency Deal Flow Kanban CRM', 'Automated Onboarding Workflow', 'A/B Creative Testing Matrix']
  },

  // -------------------------------------------------------------
  // FINANCE / FINTECH (FinFlow)
  // -------------------------------------------------------------
  {
    id: 'finance-base',
    businessId: 'finance',
    title: 'FinFlow Capital & SaaS',
    category: 'Finance',
    plan: 'Base',
    businessType: 'finance',
    tagline: 'Smart Money Management for Modern Businesses',
    description: 'Sleek financial web application interface featuring live account balance, recent transactions feed, income/expense breakdown, and quick transfer trigger.',
    isRealClient: false,
    themeColor: 'blue',
    heroImage: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80',
    previewImages: [
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80'
    ],
    features: ['Total Balance Overview', 'Recent Transactions Log', 'Monthly Income/Expense Tracker', 'Clean Web Dashboard Layout']
  },
  {
    id: 'finance-pro',
    businessId: 'finance',
    title: 'FinFlow Capital & SaaS',
    category: 'Finance',
    plan: 'Pro',
    businessType: 'finance',
    tagline: 'Multi-Account Switcher, Interactive Cash Flow & Virtual Cards',
    description: 'Comprehensive financial dashboard with multi-account switching (Business, Checking, Crypto), interactive cash flow charts (Weekly/Monthly), virtual card controls, and Send Money demo.',
    isRealClient: false,
    themeColor: 'blue',
    heroImage: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1200&q=80',
    previewImages: [
      'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&w=1200&q=80'
    ],
    features: ['Multi-Account Switcher', 'Interactive Cash Flow Charts', 'Virtual Cards & Limit Sliders', 'Send Money Simulated Modal', 'Expense Categorization Graph']
  },
  {
    id: 'finance-max',
    businessId: 'finance',
    title: 'FinFlow Capital & SaaS',
    category: 'Finance',
    plan: 'Max',
    businessType: 'finance',
    tagline: 'Wealth Portfolio Terminal, Automated Payroll & Invoicing Engine',
    description: 'Advanced financial terminal with asset allocation pie charts, live stock/crypto watchlists, automated round-up savings rules builder, and one-click invoice generator.',
    isRealClient: false,
    themeColor: 'blue',
    heroImage: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=1200&q=80',
    previewImages: [
      'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?auto=format&fit=crop&w=1200&q=80'
    ],
    features: ['Investment Portfolio Terminal', 'Realtime Asset Allocation', 'Automated Recurring Rules Engine', 'Instant Invoicing & Payroll UI', 'AI Fraud Alert Anomaly Tracker']
  },

  // -------------------------------------------------------------
  // AI / SAAS (Cognita AI)
  // -------------------------------------------------------------
  {
    id: 'ai-base',
    businessId: 'ai',
    title: 'Cognita AI Platform',
    category: 'AI / SaaS',
    plan: 'Base',
    businessType: 'ai',
    tagline: 'Next-Generation Generative Intelligence for Work',
    description: 'Modern AI SaaS product landing page with live prompt teaser, model capabilities breakdown, integration badges, and early access signup.',
    isRealClient: false,
    themeColor: 'violet',
    heroImage: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80',
    previewImages: [
      'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1200&q=80'
    ],
    features: ['AI Model Capabilities Grid', 'Interactive Prompt Preview', 'Enterprise Integrations List', 'Waitlist & Pricing CTA']
  },
  {
    id: 'ai-pro',
    businessId: 'ai',
    title: 'Cognita AI Platform',
    category: 'AI / SaaS',
    plan: 'Pro',
    businessType: 'ai',
    tagline: 'Interactive AI Chat Playground with Multi-Model Selector',
    description: 'Fully interactive AI web workspace with live prompt input, simulated generative response, model selector (GPT-4o, Claude 3.5, Gemini Pro), prompt templates, and chat history.',
    isRealClient: false,
    themeColor: 'violet',
    heroImage: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=1200&q=80',
    previewImages: [
      'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80'
    ],
    features: ['Interactive Chat Playground', 'Multi-Model Switcher', 'Pre-Built Prompt Library', 'Live Markdown & Code Formatter', 'Chat History Management']
  },
  {
    id: 'ai-max',
    businessId: 'ai',
    title: 'Cognita AI Platform',
    category: 'AI / SaaS',
    plan: 'Max',
    businessType: 'ai',
    tagline: 'Enterprise AI Control Center, Token Analytics & Agent Automation',
    description: 'Enterprise AI suite: Real-time Token Usage & Latency telemetry monitor, API key management with rate-limiting controls, and visual Drag-and-Drop Autonomous Agent workflow builder.',
    isRealClient: false,
    themeColor: 'violet',
    heroImage: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&w=1200&q=80',
    previewImages: [
      'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1676299081847-824916de030a?auto=format&fit=crop&w=1200&q=80'
    ],
    features: ['Token Usage & Latency Telemetry', 'API Key & Rate Limit Controls', 'Autonomous Agent Workflow Canvas', 'Fine-Tuning Dataset Manager', 'Enterprise Security & Audit Logs']
  },

  // -------------------------------------------------------------
  // HOME / LOCAL SERVICES (Apex Pro)
  // -------------------------------------------------------------
  {
    id: 'form-base',
    businessId: 'form',
    title: 'Apex Home & Repair Pro',
    category: 'Services',
    plan: 'Base',
    businessType: 'form',
    tagline: 'Fast, Certified Local Repair & Maintenance',
    description: 'High-converting local service landing page with emergency call banner, services checklist, upfront pricing guarantee, and quick estimate request form.',
    isRealClient: true,
    clientName: 'Apex Services',
    themeColor: 'emerald',
    heroImage: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=1200&q=80',
    previewImages: [
      'https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=80'
    ],
    features: ['24/7 Emergency Call CTA', 'Service Offerings Grid', 'Instant Quote Request Form', 'Customer Trust Badges']
  },
  {
    id: 'form-pro',
    businessId: 'form',
    title: 'Apex Home & Repair Pro',
    category: 'Services',
    plan: 'Pro',
    businessType: 'form',
    tagline: 'Interactive Service Cost Calculator & Scheduled Booking',
    description: 'Upgraded contractor platform with multi-step interactive repair cost estimator, zip code service availability checker, technician certifications, and reviews.',
    isRealClient: true,
    clientName: 'Apex Services',
    themeColor: 'emerald',
    heroImage: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=1200&q=80',
    previewImages: [
      'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=1200&q=80'
    ],
    features: ['Multi-Step Cost Estimator', 'Zip Code Service Checker', 'Technician Credentials & Badges', 'Verified Homeowner Reviews', 'Emergency Dispatch System']
  },
  {
    id: 'form-max',
    businessId: 'form',
    title: 'Apex Home & Repair Pro',
    category: 'Services',
    plan: 'Max',
    businessType: 'form',
    tagline: 'Live Technician GPS Tracking & Dispatch Management CRM',
    description: 'Complete field service management system: Customer Live Technician En-Route Tracker with ETA, paired with Dispatcher Job Management Board and automated SMS updates.',
    isRealClient: true,
    clientName: 'Apex Services',
    themeColor: 'emerald',
    heroImage: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1200&q=80',
    previewImages: [
      'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&w=1200&q=80'
    ],
    features: ['Technician Live GPS Tracker', 'Customer Real-Time ETA Status', 'Dispatcher Job Dispatch Board', 'Automated Invoice & SMS Dispatch', 'Fleet Telematics & Revenue CRM']
  },
  // -------------------------------------------------------------
  // SCHOOL (BrightFuture School)
  // -------------------------------------------------------------
  {
    id: 'school-base',
    businessId: 'school',
    title: 'BrightFuture School',
    category: 'School',
    plan: 'Base',
    businessType: 'school',
    tagline: 'Modern Education & Complete School Management',
    description: 'A professional school website tailored for the Nova Base plan. Includes up to 5 responsive pages, WhatsApp integration, basic contact form, courses info, basic gallery, and basic SEO. (Domain & Hosting: Not Free)',
    isRealClient: false,
    themeColor: 'blue',
    heroImage: 'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=1200&q=80',
    previewImages: [
      'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1541829070764-84a7d30dd3f3?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1200&q=80'
    ],
    features: ['Up to 5 pages', 'Responsive design', 'WhatsApp integration', 'Basic enquiry form', 'Basic SEO', 'Domain/Hosting: Not Free']
  },
  {
    id: 'school-pro',
    businessId: 'school',
    title: 'BrightFuture School',
    category: 'School',
    plan: 'Pro',
    businessType: 'school',
    tagline: 'Modern Education & Complete School Management',
    description: 'Upgraded school presence tailored for the Nova Pro plan. Features up to 10 pages, custom UI/UX, advanced admission forms, events & notice board, analytics, basic backend, and technical SEO. (Domain & Hosting: Free)',
    isRealClient: false,
    themeColor: 'indigo',
    heroImage: 'https://images.unsplash.com/photo-1541829070764-84a7d30dd3f3?auto=format&fit=crop&w=1200&q=80',
    previewImages: [
      'https://images.unsplash.com/photo-1541829070764-84a7d30dd3f3?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?auto=format&fit=crop&w=1200&q=80'
    ],
    features: ['Up to 10 pages', 'Custom UI/UX', 'Advanced admission form', 'Events & Notice Board', 'Analytics & Basic Backend', 'Domain/Hosting: Free']
  },
  {
    id: 'school-max',
    businessId: 'school',
    title: 'BrightFuture School',
    category: 'School',
    plan: 'Max',
    businessType: 'school',
    tagline: 'Modern Education & Complete School Management',
    description: 'The ultimate digital school ecosystem tailored for the Nova Max plan. Includes up to 15 pages, advanced custom UI, student/parent portals, faculty management, online admissions, database, and advanced SEO. (Domain & Hosting: Free)',
    isRealClient: false,
    themeColor: 'slate',
    heroImage: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1200&q=80',
    previewImages: [
      'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1541829070764-84a7d30dd3f3?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=1200&q=80'
    ],
    features: ['Up to 15 pages', 'Student & Parent Portal', 'Advanced online admission', 'Database & Backend', 'Advanced SEO', 'Domain/Hosting: Free']
  }
];
