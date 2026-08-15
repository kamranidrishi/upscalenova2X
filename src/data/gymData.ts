export interface GymProgram {
  id: string;
  title: string;
  category: string;
  intensity: 'High' | 'Medium' | 'Extreme';
  duration: string;
  calories: string;
  trainer: string;
  trainerRole: string;
  spots: string;
  desc: string;
  image: string;
  tags: string[];
}

export interface GymMembershipPlan {
  id: string;
  name: string;
  duration: string;
  price: number;
  originalPrice: number;
  periodText: string;
  badge?: string;
  popular?: boolean;
  megaExclusive?: boolean;
  desc: string;
  features: string[];
  cta: string;
}

export interface GymTrainer {
  id: string;
  name: string;
  role: string;
  experience: string;
  specialty: string;
  rating: number;
  reviewsCount: number;
  bio: string;
  certifications: string[];
  image: string;
  instagram: string;
}

export interface GymLead {
  id: string;
  name: string;
  phone: string;
  email: string;
  fitnessGoal: string;
  source: 'Instagram' | 'Google' | 'Walk-in' | 'Referral';
  status: 'New' | 'Contacted' | 'Trial Booked' | 'Converted';
  date: string;
  preferredSlot: string;
}

export interface WorkoutExercise {
  id: string;
  name: string;
  target: string;
  sets: number;
  reps: string;
  weight: string;
  rest: string;
  completed: boolean;
  videoThumb: string;
}

export interface GymDietMeal {
  name: string;
  time: string;
  items: string[];
  calories: number;
  protein: number;
  carbs: number;
  fats: number;
}

export const GYM_PROGRAMS: GymProgram[] = [
  {
    id: 'p1',
    title: 'Hypertrophy & Heavy Iron',
    category: 'Strength',
    intensity: 'Extreme',
    duration: '60 Mins',
    calories: '550 kcal',
    trainer: 'Alex Vance',
    trainerRole: 'Head Strength Coach',
    spots: '3 spots left',
    desc: 'Periodized barbell strength training, powerlifting compound lifts, and progressive overload hypertrophy routines.',
    image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=600&q=80',
    tags: ['Barbell', 'Deadlifts', 'Power']
  },
  {
    id: 'p2',
    title: 'High-Octane Athletic HIIT',
    category: 'Conditioning',
    intensity: 'High',
    duration: '45 Mins',
    calories: '680 kcal',
    trainer: 'Sarah Connor',
    trainerRole: 'Crossfit & HIIT Lead',
    spots: '5 spots left',
    desc: 'Fast-paced metabolic conditioning with kettlebells, battle ropes, ski-ergs, plyometrics, and functional sprints.',
    image: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=600&q=80',
    tags: ['Cardio', 'Agility', 'MetCon']
  },
  {
    id: 'p3',
    title: 'Combat Boxing & Striking',
    category: 'Combat',
    intensity: 'Extreme',
    duration: '50 Mins',
    calories: '720 kcal',
    trainer: 'Marcus Stone',
    trainerRole: 'Boxing & MMA Specialist',
    spots: 'Open',
    desc: 'Heavy bag power combinations, slip-and-counter defense drills, speed bag rhythm, and core conditioning.',
    image: 'https://images.unsplash.com/photo-1549060279-7e168fcee0c2?auto=format&fit=crop&w=600&q=80',
    tags: ['Boxing', 'Defense', 'Stamina']
  },
  {
    id: 'p4',
    title: 'Functional Mobility & Recovery',
    category: 'Recovery',
    intensity: 'Medium',
    duration: '45 Mins',
    calories: '320 kcal',
    trainer: 'Elena Rostova',
    trainerRole: 'Mobility & Physio Coach',
    spots: 'Open',
    desc: 'Joint decompression, myofascial foam rolling, dynamic hip openers, spinal decompression, and breathwork.',
    image: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=600&q=80',
    tags: ['Mobility', 'Flexibility', 'Zen']
  },
  {
    id: 'p5',
    title: 'CrossFit WOD & Olympic Lifting',
    category: 'Strength',
    intensity: 'Extreme',
    duration: '60 Mins',
    calories: '750 kcal',
    trainer: 'David Miller',
    trainerRole: 'Oly Lifting Specialist',
    spots: '2 spots left',
    desc: 'Snatch, clean & jerk mastery, gymnastics ring muscle-ups, rope climbs, and timed daily box WODs.',
    image: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=600&q=80',
    tags: ['CrossFit', 'Olympic Lifts', 'WOD']
  },
  {
    id: 'p6',
    title: 'Body Recomp & Fat Shredder',
    category: 'Conditioning',
    intensity: 'High',
    duration: '50 Mins',
    calories: '620 kcal',
    trainer: 'Riya Sen',
    trainerRole: 'Transformation Lead',
    spots: '4 spots left',
    desc: 'Targeted caloric incinerator combining incline treadmill rucks, dumbbell complexes, and core circuits.',
    image: 'https://images.unsplash.com/photo-1574680096145-d05b474e2155?auto=format&fit=crop&w=600&q=80',
    tags: ['Fat Loss', 'Tone', 'Core']
  }
];

export const GYM_PLANS: GymMembershipPlan[] = [
  {
    id: 'monthly',
    name: 'Monthly Standard',
    duration: '1 Month',
    price: 1999,
    originalPrice: 2499,
    periodText: '/month',
    desc: 'Perfect for beginners looking to build a consistent fitness foundation with full gym floor access.',
    features: [
      'Full 24/7 Gym Floor & Machine Access',
      'Locker Room, Steam & Hot Showers',
      'Free 1-on-1 Fitness Assessment',
      'Access to Free Weights & Cardio Deck',
      'Mobile App Basic Check-in'
    ],
    cta: 'Join Monthly'
  },
  {
    id: 'quarterly',
    name: 'Quarterly Pro',
    duration: '3 Months',
    price: 4999,
    originalPrice: 5999,
    periodText: '/quarter (₹1,666/mo)',
    popular: true,
    badge: 'Most Popular',
    desc: 'Our most sought-after plan for committed athletes wanting group classes and guided workout plans.',
    features: [
      'All Monthly Standard Features',
      'Unlimited Group Classes (HIIT, Boxing, Yoga)',
      '2 Complimentary Personal Training Sessions',
      'Personalized Macronutrient Diet Guide',
      'Digital Attendance & Streak Tracking Pass'
    ],
    cta: 'Start Pro 3-Months'
  },
  {
    id: 'half-yearly',
    name: 'Half-Yearly Elite',
    duration: '6 Months',
    price: 8999,
    originalPrice: 11999,
    periodText: '/6 months (₹1,499/mo)',
    badge: 'Save 25%',
    desc: 'Serious athletic progression with regular body composition scans and dedicated trainer check-ins.',
    features: [
      'All Quarterly Pro Features Included',
      'Bi-Weekly InBody 570 Composition Scans',
      '5 Personal Training Sessions Included',
      'Reserved VIP Day Locker Access',
      'Priority Booking for Elite Workshops'
    ],
    cta: 'Join Half-Yearly'
  },
  {
    id: 'yearly',
    name: 'Annual VIP Titanium',
    duration: '12 Months',
    price: 14999,
    originalPrice: 23999,
    periodText: '/year (₹1,249/mo)',
    badge: 'Best Value',
    desc: 'Ultimate 360° fitness ecosystem with custom AI coaching, nutrition delivery, and full VIP amenities.',
    features: [
      'Unlimited 365-Day 24/7 All-Access',
      '12 One-on-One PT Coaching Sessions',
      'Dedicated Nutritionist & AI Coach Access',
      'Free IronFit Performance Merch Pack',
      'Unlimited Guest Passes (2 per month)'
    ],
    cta: 'Unlock VIP Annual'
  }
];

export const GYM_TRAINERS: GymTrainer[] = [
  {
    id: 't1',
    name: 'Alex Vance',
    role: 'Head Strength & Conditioning Coach',
    experience: '9+ Years Experience',
    specialty: 'Powerlifting, Hypertrophy, Olympic Bars',
    rating: 4.9,
    reviewsCount: 142,
    bio: 'Former national level powerlifter specializing in biomechanics, spine longevity, and raw compound strength building.',
    certifications: ['CSCS Certified', 'Eleiko Strength Coach', 'Kettlebell Master'],
    image: 'https://images.unsplash.com/photo-1567013127542-490d757e51fc?auto=format&fit=crop&w=600&q=80',
    instagram: '@alexvance_iron'
  },
  {
    id: 't2',
    name: 'Sarah Connor',
    role: 'CrossFit & MetCon Master Trainer',
    experience: '7+ Years Experience',
    specialty: 'High-Octane HIIT, Fat Loss, Agility',
    rating: 4.9,
    reviewsCount: 118,
    bio: 'CrossFit Level-3 certified coach passionate about athletic conditioning, endurance thresholds, and cardiovascular peak performance.',
    certifications: ['CrossFit Level 3', 'ACE Master Trainer', 'TRX Specialist'],
    image: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&w=600&q=80',
    instagram: '@sarahconnor_fit'
  },
  {
    id: 't3',
    name: 'Marcus Stone',
    role: 'Boxing & Functional Combat Coach',
    experience: '11+ Years Experience',
    specialty: 'Boxing striking, Footwork, Core Power',
    rating: 4.8,
    reviewsCount: 95,
    bio: 'Golden Gloves champion trainer bringing authentic pugilistic training, hand-eye coordination, and mental grit to every round.',
    certifications: ['USA Boxing Certified', 'ISSA Combat Fitness', 'Krav Maga L2'],
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80',
    instagram: '@marcus_ironring'
  },
  {
    id: 't4',
    name: 'Elena Rostova',
    role: 'Mobility, Yoga & Physio Recovery Lead',
    experience: '8+ Years Experience',
    specialty: 'Joint Decompression, Fascia, Posture',
    rating: 5.0,
    reviewsCount: 160,
    bio: 'Master physiotherapist and yogi guiding athletes through bulletproof injury prevention, dynamic flexibility, and autonomic recovery.',
    certifications: ['RYT-500 Yoga Master', 'FMS Level 2', 'Dry Needling Cert'],
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=600&q=80',
    instagram: '@elena_recovery'
  }
];

export const GYM_GALLERY = [
  { title: 'Olympic Lifting Platforms', cat: 'Strength', img: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=800&q=80' },
  { title: 'Custom Dumbbell Rack (Up to 60kg)', cat: 'Free Weights', img: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=800&q=80' },
  { title: 'CrossFit Rig & Turf Sled Track', cat: 'Functional', img: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=800&q=80' },
  { title: 'Cardio Deck with Ski-Ergs & Rowers', cat: 'Cardio', img: 'https://images.unsplash.com/photo-1574680096145-d05b474e2155?auto=format&fit=crop&w=800&q=80' },
  { title: 'Boxing Ring & Combat Zone', cat: 'Combat', img: 'https://images.unsplash.com/photo-1549060279-7e168fcee0c2?auto=format&fit=crop&w=800&q=80' },
  { title: 'Scandinavian Cedarwood Sauna & Ice Bath', cat: 'Recovery', img: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80' }
];

export const GYM_TESTIMONIALS = [
  {
    name: 'Vikramaditya Rathore',
    role: 'Member since 2024',
    change: '-18kg Fat Loss & +8kg Muscle',
    comment: 'IronFit has completely transformed my lifestyle. The coaches don’t just watch; they correct every millimetre of form. Cleanest gym in the city with top-tier Eleiko plates.',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80'
  },
  {
    name: 'Ananya Deshmukh',
    role: 'CrossFit Athlete & Tech Executive',
    change: 'Deadlift PR: 60kg → 135kg',
    comment: 'The energy at 6 AM is unmatched! Having the mobile pass and automated attendance makes slipping in for morning workouts completely frictionless.',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80'
  },
  {
    name: 'Kabir Malhotra',
    role: 'Marathoner & Strength Club',
    change: 'Half-Marathon time dropped 22 mins',
    comment: 'The combination of heavy strength work and Elena’s mobility recovery sessions kept me completely injury-free for my entire race season. Worth every rupee.',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80'
  }
];

export const TODAY_WORKOUT_EXERCISES: WorkoutExercise[] = [
  { id: 'w1', name: 'Barbell Flat Bench Press', target: 'Chest (Mid / Sternal)', sets: 4, reps: '8-10 reps', weight: '85 kg', rest: '90s', completed: true, videoThumb: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=300&q=80' },
  { id: 'w2', name: 'Incline Dumbbell Press', target: 'Upper Chest (Clavicular)', sets: 3, reps: '10-12 reps', weight: '32 kg each', rest: '75s', completed: true, videoThumb: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=300&q=80' },
  { id: 'w3', name: 'Standing Cable Fly Crossover', target: 'Inner Chest Squeeze', sets: 3, reps: '12-15 reps', weight: '18 kg/side', rest: '60s', completed: false, videoThumb: 'https://images.unsplash.com/photo-1574680096145-d05b474e2155?auto=format&fit=crop&w=300&q=80' },
  { id: 'w4', name: 'Rope Tricep Cable Pushdown', target: 'Triceps (Lateral Head)', sets: 4, reps: '12 reps', weight: '27.5 kg', rest: '45s', completed: false, videoThumb: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=300&q=80' },
  { id: 'w5', name: 'Parallel Bar Bodyweight Dips', target: 'Lower Chest & Triceps', sets: 3, reps: 'To Failure (~15)', weight: 'Bodyweight', rest: '60s', completed: false, videoThumb: 'https://images.unsplash.com/photo-1549060279-7e168fcee0c2?auto=format&fit=crop&w=300&q=80' }
];

export const INITIAL_LEADS: GymLead[] = [
  { id: 'l1', name: 'Rahul Sharma', phone: '+91 98201 44521', email: 'rahul.s@gmail.com', fitnessGoal: 'Weight Loss & Toning', source: 'Instagram', status: 'Trial Booked', date: 'Today, 10:30 AM', preferredSlot: 'Evening (7 PM)' },
  { id: 'l2', name: 'Priya Nair', phone: '+91 98450 11239', email: 'priya.nair@corp.in', fitnessGoal: 'Strength & Deadlifts', source: 'Google', status: 'New', date: 'Today, 09:15 AM', preferredSlot: 'Morning (6:30 AM)' },
  { id: 'l3', name: 'Amit Verma', phone: '+91 97112 88402', email: 'amit.verma@tech.co', fitnessGoal: 'Muscle Hypertrophy', source: 'Walk-in', status: 'Contacted', date: 'Yesterday', preferredSlot: 'Evening (8 PM)' },
  { id: 'l4', name: 'Siddharth Roy', phone: '+91 99800 23140', email: 'sid.roy@yahoo.com', fitnessGoal: 'Boxing & Stamina', source: 'Referral', status: 'Converted', date: '2 days ago', preferredSlot: 'Morning (7 AM)' },
  { id: 'l5', name: 'Divya Kapoor', phone: '+91 98110 99421', email: 'divya.k@design.com', fitnessGoal: 'Post-Pregnancy Recovery', source: 'Instagram', status: 'Contacted', date: '3 days ago', preferredSlot: 'Morning (8:30 AM)' }
];

export const NUTRITION_MEALS: GymDietMeal[] = [
  { name: 'Power Breakfast (07:30 AM)', time: '07:30 AM', items: ['4 Whole Egg Omelette with spinach & peppers', '2 slices Multigrain Sourdough Toast', '1 cup Black Coffee / Green Tea', 'Handful Raw Almonds & Walnuts'], calories: 520, protein: 38, carbs: 45, fats: 20 },
  { name: 'Lean Fuel Lunch (01:00 PM)', time: '01:00 PM', items: ['200g Grilled Herb Chicken Breast / Paneer Tikka', '150g Steamed Brown Basmati Rice', '1 big bowl Steamed Broccoli & Zucchini', '1 cup Low-Fat Greek Curd (Dahi)'], calories: 680, protein: 55, carbs: 65, fats: 18 },
  { name: 'Pre-Workout Ignition (05:00 PM)', time: '05:00 PM', items: ['1 Large Banana with 1 tbsp Organic Peanut Butter', '1 Shot Espresso / Citrulline Complex', '2 Rice Cakes with Honey drizzle'], calories: 280, protein: 8, carbs: 52, fats: 7 },
  { name: 'Post-Workout Anabolic Shake (07:30 PM)', time: '07:30 PM', items: ['1 Scoop Hydrolyzed Whey Protein Isolate (30g)', '300ml Unsweetened Almond Milk', '5g Micronized Creapure Creatine', '1/2 cup Frozen Blueberries'], calories: 290, protein: 34, carbs: 24, fats: 4 },
  { name: 'Restorative Dinner (09:00 PM)', time: '09:00 PM', items: ['180g Pan-Seared Salmon Fillet / Sautéed Tofu', 'Large Avocado & Mixed Greens Salad', '100g Roasted Sweet Potato Wedges'], calories: 680, protein: 45, carbs: 54, fats: 26 }
];
