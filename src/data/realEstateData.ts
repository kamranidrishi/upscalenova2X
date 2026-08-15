export interface RealEstateProperty {
  id: string;
  title: string;
  bhk: string;
  type: 'Apartment' | 'Penthouse' | 'Duplex' | 'Villa';
  tower: string;
  floorRange: string;
  carpetArea: string;
  superBuiltup: string;
  price: string;
  priceNumeric: number; // In Lakhs
  emiStarting: string;
  facing: 'East (Vastu)' | 'North-East' | 'Garden & Pool' | 'Skyline View';
  status: 'Available' | 'Fast Filling' | 'Few Units Left' | 'Sold Out';
  possession: string;
  image: string;
  gallery: string[];
  floorPlanImage: string;
  highlights: string[];
  specs: {
    livingRoom: string;
    masterBedroom: string;
    guestBedroom: string;
    kitchen: string;
    balconies: string;
    bathrooms: string;
  };
}

export interface RealEstateProject {
  name: string;
  developer: string;
  reraId: string;
  location: string;
  tagline: string;
  totalArea: string;
  openSpace: string;
  towers: string;
  totalUnits: string;
  possessionDate: string;
}

export interface RealEstateLead {
  id: string;
  name: string;
  phone: string;
  email: string;
  bhkInterest: string;
  budget: string;
  source: 'Website Form' | 'WhatsApp' | 'Site Visit Booking' | 'AI Assistant';
  stage: 'New Lead' | 'Site Visit Scheduled' | 'Visit Completed' | 'Token Booking' | 'Booked';
  assignedAgent: string;
  lastContact: string;
  notes: string;
}

export interface InventoryUnit {
  unitNo: string;
  floor: number;
  tower: 'Tower A' | 'Tower B' | 'Tower C';
  bhk: '2 BHK' | '3 BHK' | '4 BHK' | 'Penthouse';
  area: string;
  price: string;
  status: 'Available' | 'Blocked' | 'Booked';
}

export const PROJECT_DETAILS: RealEstateProject = {
  name: 'Nova Heights Residences',
  developer: 'Nova Infra & Developers Pvt. Ltd.',
  reraId: 'PRM/KA/RERA/1251/310/PR/240826/006198',
  location: 'Downtown Silicon Corridor, Prime Expressway Sector 42',
  tagline: 'Ultra-Luxury 2, 3 & 4 BHK Residences with 45+ Curated Lifestyle Amenities',
  totalArea: '5.2 Acres Master Planned',
  openSpace: '82% Lush Landscaped Greens',
  towers: '3 Iconic Sky Towers (G+32 Floors)',
  totalUnits: '384 Exclusive Residences',
  possessionDate: 'December 2026 (On Schedule)'
};

export const PROPERTIES_DATA: RealEstateProperty[] = [
  {
    id: 'prop-2bhk-luxury',
    title: 'The Solitaire 2 BHK Luxury',
    bhk: '2 BHK',
    type: 'Apartment',
    tower: 'Tower A (The Grandeur)',
    floorRange: 'Floors 4 to 22',
    carpetArea: '885 sq.ft',
    superBuiltup: '1,240 sq.ft',
    price: '₹92.5 Lakhs',
    priceNumeric: 92.5,
    emiStarting: '₹62,400 / mo',
    facing: 'East (Vastu)',
    status: 'Fast Filling',
    possession: 'Dec 2026',
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80'
    ],
    floorPlanImage: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=800&q=80',
    highlights: [
      'Zero dead-space layout with Italian marble flooring',
      '10-foot floor-to-ceiling clear height',
      'Spacious 60 sq.ft sunlit breakfast balcony',
      'Kohler premium sanitary ware & smart door lock'
    ],
    specs: {
      livingRoom: '19.6 ft x 12.0 ft',
      masterBedroom: '14.0 ft x 12.6 ft with en-suite bath',
      guestBedroom: '12.0 ft x 11.0 ft',
      kitchen: '10.6 ft x 8.0 ft with utility dry yard',
      balconies: '2 Wide Deck Balconies',
      bathrooms: '2 Luxury Bathrooms with glass partitions'
    }
  },
  {
    id: 'prop-3bhk-royale',
    title: 'The Imperial 3 BHK Royale',
    bhk: '3 BHK',
    type: 'Apartment',
    tower: 'Tower B (The Crest)',
    floorRange: 'Floors 2 to 28',
    carpetArea: '1,340 sq.ft',
    superBuiltup: '1,890 sq.ft',
    price: '₹1.48 Crore',
    priceNumeric: 148,
    emiStarting: '₹99,800 / mo',
    facing: 'Garden & Pool',
    status: 'Available',
    possession: 'Dec 2026',
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1200&q=80'
    ],
    floorPlanImage: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80',
    highlights: [
      'Panoramic 180° uninterrupted central park & pool view',
      'Master bedroom with dedicated walk-in wardrobe',
      'Separate maid room with attached toilet',
      'Centralized VRV air-conditioning ready conduits'
    ],
    specs: {
      livingRoom: '24.0 ft x 14.6 ft double-height feeling',
      masterBedroom: '16.0 ft x 13.6 ft with private balcony',
      guestBedroom: '13.6 ft x 12.0 ft with attached bath',
      kitchen: '12.6 ft x 9.0 ft modular German kitchen layout',
      balconies: '3 Large Balconies + Service Yard',
      bathrooms: '3 Master Bathrooms + 1 Powder Room'
    }
  },
  {
    id: 'prop-3bhk-grand-suite',
    title: 'The Presidential 3 BHK Grand Suite',
    bhk: '3 BHK',
    type: 'Apartment',
    tower: 'Tower B (The Crest)',
    floorRange: 'Floors 15 to 30',
    carpetArea: '1,560 sq.ft',
    superBuiltup: '2,180 sq.ft',
    price: '₹1.82 Crore',
    priceNumeric: 182,
    emiStarting: '₹1.22 Lakh / mo',
    facing: 'Skyline View',
    status: 'Few Units Left',
    possession: 'Dec 2026',
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1200&q=80'
    ],
    floorPlanImage: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=800&q=80',
    highlights: [
      'Private keycard elevator opening directly into private foyer',
      'Wraparound 110 sq.ft sunset lounge terrace',
      'Full home automation for lights, curtains, and climate',
      '2 Dedicated covered car parking slots with EV charger'
    ],
    specs: {
      livingRoom: '26.0 ft x 16.0 ft with dining enclave',
      masterBedroom: '17.6 ft x 14.0 ft with jacuzzi provision',
      guestBedroom: '14.0 ft x 13.0 ft with wooden flooring',
      kitchen: '14.0 ft x 10.0 ft with quartz countertops',
      balconies: '3 Expansive Sundeck Balconies',
      bathrooms: '3 Grand Bathrooms + Maid Bath'
    }
  },
  {
    id: 'prop-4bhk-penthouse',
    title: 'The Sky Mansions 4 BHK Duplex Penthouse',
    bhk: '4 BHK',
    type: 'Penthouse',
    tower: 'Tower C (The Sovereign)',
    floorRange: 'Top Floors 31 & 32',
    carpetArea: '2,680 sq.ft',
    superBuiltup: '3,750 sq.ft',
    price: '₹3.45 Crore',
    priceNumeric: 345,
    emiStarting: '₹2.32 Lakh / mo',
    facing: 'Skyline View',
    status: 'Few Units Left',
    possession: 'Dec 2026',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80'
    ],
    floorPlanImage: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=800&q=80',
    highlights: [
      'Exclusive rooftop private plunge pool & barbecue deck',
      'Double-height 22-foot grand ceiling living room',
      'Personal home theatre / library lounge room',
      '3 Dedicated basement car parkings'
    ],
    specs: {
      livingRoom: '32.0 ft x 18.0 ft with 22-ft clear glass facade',
      masterBedroom: '21.0 ft x 16.0 ft with private rooftop access',
      guestBedroom: '3 Guest Suites (each 15 ft x 13 ft)',
      kitchen: 'Chef-grade gourmet kitchen + butler pantry',
      balconies: '4 Panoramic Decks + Rooftop Terrace',
      bathrooms: '5 Designer Bathrooms with Hansgrohe fixtures'
    }
  }
];

export const AMENITIES_LIST = [
  { icon: 'Waves', name: 'Rooftop Infinity Pool', desc: 'Temperature-controlled Olympic lap pool on 32nd floor' },
  { icon: 'Building2', name: '25,000 sq.ft Clubhouse', desc: 'Private theatre, banquet hall, card room & cigar lounge' },
  { icon: 'Dumbbell', name: 'Technogym Fitness Hub', desc: 'State-of-the-art strength, cardio and CrossFit zone' },
  { icon: 'Trees', name: 'Zen Reflexology Park', desc: 'Aroma gardens, lotus pond, and shaded gazebo seating' },
  { icon: 'ShieldCheck', name: '5-Tier 24/7 Security', desc: 'Biometric access, AI perimeter cameras, CCTV surveillance' },
  { icon: 'Zap', name: '100% Power & Water Backup', desc: 'Dual diesel genset backup + dual rainwater harvesting plant' },
  { icon: 'Sparkles', name: 'Kids Play Zone & Creche', desc: 'Safe rubberised play turf, skating rink, indoor play arena' },
  { icon: 'Car', name: 'EV Charging Infrastructure', desc: 'Fast-charging docks dedicated for every residential tower' }
];

export const LOCATION_PROXIMITIES = [
  { place: 'Downtown Metro Station (Line 3)', time: '3 mins walk (300m)' },
  { place: 'International Tech Park / SEZ', time: '8 mins drive (3.2 km)' },
  { place: 'Oakridge International School', time: '5 mins drive (1.8 km)' },
  { place: 'Apollo Multi-Speciality Hospital', time: '7 mins drive (2.4 km)' },
  { place: 'Grand Orion Luxury Mall & PVR', time: '6 mins drive (2.1 km)' },
  { place: 'International Airport Expressway', time: '22 mins drive (18 km)' }
];

export const INITIAL_REAL_ESTATE_LEADS: RealEstateLead[] = [
  {
    id: 'LEAD-901',
    name: 'Vikram Malhotra',
    phone: '+91 98201 44521',
    email: 'vikram.m@tcs.com',
    bhkInterest: '3 BHK Royale',
    budget: '₹1.5 - ₹1.8 Cr',
    source: 'Site Visit Booking',
    stage: 'Site Visit Scheduled',
    assignedAgent: 'Rohit Deshmukh (Sr. Relationship Mgr)',
    lastContact: 'Today, 11:30 AM',
    notes: 'Requested Sunday 11 AM cab pickup for family site visit. Interested in Tower B higher floor.'
  },
  {
    id: 'LEAD-902',
    name: 'Dr. Ananya Sengupta',
    phone: '+91 99104 88723',
    email: 'ananya.s@fortis.org',
    bhkInterest: '4 BHK Penthouse',
    budget: '₹3.2 - ₹3.6 Cr',
    source: 'AI Assistant',
    stage: 'Token Booking',
    assignedAgent: 'Meera Nambiar (Luxury Sales Head)',
    lastContact: 'Yesterday, 04:15 PM',
    notes: 'Selected Unit C-3102. Token payment of ₹1,00,000 processed. KYC verification underway.'
  },
  {
    id: 'LEAD-903',
    name: 'Karan & Pooja Agarwal',
    phone: '+91 97112 33490',
    email: 'karan.agarwal@deloitte.com',
    bhkInterest: '2 BHK Luxury',
    budget: '₹90 - ₹95 Lakhs',
    source: 'WhatsApp',
    stage: 'New Lead',
    assignedAgent: 'Siddharth Rao',
    lastContact: 'Today, 02:45 PM',
    notes: 'Looking for fast possession by Dec 2026. Needs HDFC home loan pre-approval assistance.'
  },
  {
    id: 'LEAD-904',
    name: 'Brigadier S. K. Joshi (Retd.)',
    phone: '+91 94330 19821',
    email: 'skjoshi.retd@gmail.com',
    bhkInterest: '3 BHK Grand Suite',
    budget: '₹1.7 - ₹2.0 Cr',
    source: 'Website Form',
    stage: 'Visit Completed',
    assignedAgent: 'Rohit Deshmukh',
    lastContact: '2 days ago',
    notes: 'Visited show flat. Extremely pleased with construction quality and clubhouse. Awaiting daughter review.'
  },
  {
    id: 'LEAD-905',
    name: 'Rajesh & Swati Verma',
    phone: '+91 98860 77123',
    email: 'rajesh.verma@wipro.com',
    bhkInterest: '3 BHK Royale',
    budget: '₹1.4 - ₹1.6 Cr',
    source: 'Site Visit Booking',
    stage: 'Booked',
    assignedAgent: 'Meera Nambiar',
    lastContact: '3 days ago',
    notes: 'Allotted Flat B-1804. Agreement for sale signed. First milestone disbursed by SBI.'
  }
];

export const INVENTORY_UNITS_DATA: InventoryUnit[] = [
  { unitNo: 'A-401', floor: 4, tower: 'Tower A', bhk: '2 BHK', area: '1,240 sq.ft', price: '₹92.5 L', status: 'Available' },
  { unitNo: 'A-402', floor: 4, tower: 'Tower A', bhk: '2 BHK', area: '1,240 sq.ft', price: '₹92.5 L', status: 'Booked' },
  { unitNo: 'A-801', floor: 8, tower: 'Tower A', bhk: '2 BHK', area: '1,240 sq.ft', price: '₹94.0 L', status: 'Available' },
  { unitNo: 'A-802', floor: 8, tower: 'Tower A', bhk: '2 BHK', area: '1,240 sq.ft', price: '₹94.0 L', status: 'Blocked' },
  { unitNo: 'A-1401', floor: 14, tower: 'Tower A', bhk: '2 BHK', area: '1,240 sq.ft', price: '₹96.5 L', status: 'Available' },
  { unitNo: 'A-1402', floor: 14, tower: 'Tower A', bhk: '2 BHK', area: '1,240 sq.ft', price: '₹96.5 L', status: 'Booked' },
  { unitNo: 'B-601', floor: 6, tower: 'Tower B', bhk: '3 BHK', area: '1,890 sq.ft', price: '₹1.48 Cr', status: 'Available' },
  { unitNo: 'B-602', floor: 6, tower: 'Tower B', bhk: '3 BHK', area: '1,890 sq.ft', price: '₹1.48 Cr', status: 'Available' },
  { unitNo: 'B-1801', floor: 18, tower: 'Tower B', bhk: '3 BHK', area: '2,180 sq.ft', price: '₹1.82 Cr', status: 'Available' },
  { unitNo: 'B-1804', floor: 18, tower: 'Tower B', bhk: '3 BHK', area: '1,890 sq.ft', price: '₹1.52 Cr', status: 'Booked' },
  { unitNo: 'B-2401', floor: 24, tower: 'Tower B', bhk: '3 BHK', area: '2,180 sq.ft', price: '₹1.88 Cr', status: 'Blocked' },
  { unitNo: 'C-3101', floor: 31, tower: 'Tower C', bhk: 'Penthouse', area: '3,750 sq.ft', price: '₹3.45 Cr', status: 'Available' },
  { unitNo: 'C-3102', floor: 31, tower: 'Tower C', bhk: 'Penthouse', area: '3,750 sq.ft', price: '₹3.45 Cr', status: 'Booked' }
];

export const VIRTUAL_TOUR_ROOMS = [
  {
    id: 'living-room',
    name: 'Grand Living & Dining Room',
    bhk: '3 BHK Royale',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1400&q=80',
    description: 'Italian Statuario marble flooring with double-height acoustic glazing and panoramic sunrise deck.',
    hotspots: [
      { title: 'Italian Marble Finish', desc: 'Imported 800x1600mm Statuario Glazed Vitrified slabs' },
      { title: 'Smart Home Touch Panel', desc: 'Controls moods, lights, fans, and smart drapery' },
      { title: 'Wide Sundeck Balcony', desc: 'Toughened glass railing with unobstructed pool view' }
    ]
  },
  {
    id: 'master-bed',
    name: 'Presidential Master Bedroom',
    bhk: '3 BHK Royale',
    image: 'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1400&q=80',
    description: 'Engineered wooden flooring, walk-in wardrobe enclave, and expansive sound-insulated corner windows.',
    hotspots: [
      { title: 'Solid Wood Floor', desc: 'Pergo European engineered oak plank flooring' },
      { title: 'Walk-in Wardrobe', desc: '12-foot custom glass & wood wardrobe space' }
    ]
  },
  {
    id: 'infinity-pool',
    name: '32nd Floor Rooftop Infinity Pool',
    bhk: 'Lifestyle Amenity',
    image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1400&q=80',
    description: 'Temperature-controlled infinity pool offering endless panoramic city skyline horizons.',
    hotspots: [
      { title: 'Sky Deck Lounge', desc: 'Cabanas & sun-loungers overlooking downtown skyline' },
      { title: 'Jacuzzi Jets', desc: 'Heated hydrotherapy pool zone' }
    ]
  }
];
