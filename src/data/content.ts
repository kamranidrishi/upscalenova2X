import { ServiceItem, IndustryItem, ProductItem, PricingPlan, Testimonial, FAQItem, ProcessStep } from '../types';

import qrStandImage from '../assets/images/google_review_qr_stand_1786540148272.jpg';
import socialStandImage from '../assets/images/social_media_qr_stand_1786540162964.jpg';
import menuStandImage from '../assets/images/digital_menu_qr_stand_1786540175843.jpg';

export const COMPANY_PHONE = "9137283810";
export const COMPANY_PHONE_DISPLAY = "+91 91372 83810";
export const COMPANY_PHONE_RAW = "9137283810";
export const COMPANY_EMAIL = "hello@upscalenova.com";
export const COMPANY_LOCATION = "Titwala, Maharashtra (Serving Global Clients)";
export const WHATSAPP_NUMBER = "919137283810";
export const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Hello Upscale Nova, I am interested in your services. Please provide more information.")}`;
export const CALL_LINK = `tel:+919137283810`;
export const INSTAGRAM_LINK = "https://www.instagram.com/upscalenova/";
export const COMPANY_LOGO = "/logo.png";

export const INDUSTRIES: IndustryItem[] = [
  { id: 'cafes', title: 'Cafes', iconName: 'Coffee' },
  { id: 'restaurants', title: 'Restaurants', iconName: 'Utensils' },
  { id: 'gyms', title: 'Gyms', iconName: 'Dumbbell' },
  { id: 'institutes', title: 'Institutes', iconName: 'GraduationCap' },
  { id: 'small-biz', title: 'Small Businesses', iconName: 'Store' },
  { id: 'startups', title: 'Startups', iconName: 'Rocket' },
  { id: 'professionals', title: 'Professionals', iconName: 'User' },
  { id: 'service-biz', title: 'Service Businesses', iconName: 'Building2' }
];

export const SERVICES: ServiceItem[] = [
  {
    id: 'web-design',
    title: 'Website Design',
    description: 'Stunning, responsive UI/UX designs crafted to represent your unique brand identity.',
    iconName: 'Smartphone',
    color: 'bg-blue-500 text-white'
  },
  {
    id: 'custom-dev',
    title: 'Custom Web Development',
    description: 'Fully customized websites built from the ground up to meet your specific business requirements.',
    iconName: 'Globe',
    color: 'bg-indigo-600 text-white'
  },
  {
    id: 'google-maps',
    title: 'Google Maps Listing',
    description: 'Establish and optimize your local presence so customers can easily find you on maps.',
    iconName: 'MapPin',
    color: 'bg-rose-500 text-white'
  },
  {
    id: 'google-profile',
    title: 'Google Business Profile',
    description: 'Complete setup and management of your Google profile for maximum visibility and customer trust.',
    iconName: 'Star',
    color: 'bg-amber-500 text-white'
  },
  {
    id: 'qr-review',
    title: 'Google Review QR Solutions',
    description: 'Smart QR codes that direct customers directly to leave 5-star Google reviews seamlessly.',
    iconName: 'QrCode',
    color: 'bg-emerald-500 text-white'
  },
  {
    id: 'nfc-cards',
    title: 'NFC Review Cards',
    description: 'A simple tap opens your review page. No typing required for instant Google feedback.',
    iconName: 'CreditCard',
    color: 'bg-purple-600 text-white'
  },
  {
    id: 'digital-menu',
    title: 'Digital Menu Solutions',
    description: 'Mobile-friendly digital menus for cafes and restaurants with easy QR access and instant updates.',
    iconName: 'Menu',
    color: 'bg-pink-500 text-white'
  },
  {
    id: 'hosting-mgmt',
    title: 'Website Hosting & Management',
    description: 'Reliable hosting, ongoing maintenance, and security management to keep your site fast and safe.',
    iconName: 'Settings',
    color: 'bg-slate-700 text-white'
  }
];

export const PRODUCTS: ProductItem[] = [
  {
    id: 'nfc-review-card',
    title: 'Google Review NFC Card',
    description: 'Customers simply tap their phone to instantly open your Google review page. No typing required.',
    customization: ['Logo', 'Brand Colors', 'Custom URL', 'Custom Text'],
    badgeColor: 'bg-blue-500',
    iconName: 'Contactless',
    image: '/products/nfc-review-card.png'
  },
  {
    id: 'google-qr-stand',
    title: 'Google Review QR Stand',
    description: "Perfect for counters and tables. 'Loved Our Service? Leave Us a Review.' Tap or Scan.",
    customization: ['Logo', 'Brand Colors', 'Custom URL', 'Custom Text'],
    badgeColor: 'bg-emerald-500',
    iconName: 'QrCode',
    image: '/products/google-qr-stand.png'
  },
  {
    id: 'social-qr-stand',
    title: 'Social Media QR Stand',
    description: 'Scan to Connect. Direct customers to your Instagram, Facebook, WhatsApp, or Website.',
    customization: ['Logo', 'Brand Colors', 'Custom URL', 'Custom Text'],
    badgeColor: 'bg-pink-500',
    iconName: 'Share2',
    image: '/products/social-qr-stand.png'
  },
  {
    id: 'digital-menu-stand',
    title: 'Digital Menu QR Stand',
    description: 'Scan to View Our Menu. A seamless dining experience for cafes and restaurants.',
    customization: ['Logo', 'Brand Colors', 'Custom URL', 'Custom Text'],
    badgeColor: 'bg-amber-500',
    iconName: 'Utensils',
    image: '/products/digital-menu-stand.png'
  }
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    stepNumber: '01',
    title: 'Tell Us Your Requirements',
    description: 'Share your vision, goals, and business needs with us via call, form, or WhatsApp.'
  },
  {
    stepNumber: '02',
    title: 'We Plan Your Digital Solution',
    description: 'We map out the strategy, architecture, user flows, and modern design structure.'
  },
  {
    stepNumber: '03',
    title: 'We Design & Develop',
    description: 'Our expert engineering team builds your custom solution using modern technologies.'
  },
  {
    stepNumber: '04',
    title: 'You Review & Request Changes',
    description: 'We present the solution and iterate based on your feedback until it is 100% perfect.'
  },
  {
    stepNumber: '05',
    title: 'We Launch Your Solution',
    description: 'Your project goes live seamlessly and starts driving real customer results.'
  },
  {
    stepNumber: '06',
    title: 'We Provide Ongoing Support',
    description: 'Continuous site management, fast hosting, and dedicated technical support.'
  }
];

export const PRICING_PLANS: PricingPlan[] = [
  {
    id: 'base',
    name: 'NOVA BASE',
    price: '₹24,999',
    originalPrice: '₹40,500',
    features: [
      { name: 'Pages', value: '5' },
      { name: 'Custom UI/UX', value: true },
      { name: 'Responsive', value: true },
      { name: 'WhatsApp', value: true },
      { name: 'Forms', value: 'Basic' },
      { name: 'SEO', value: 'Basic' },
      { name: 'Analytics', value: false },
      { name: 'Backend', value: false },
      { name: 'Database', value: false },
      { name: 'API integrations', value: false },
      { name: 'Revisions', value: '2' },
      { name: 'Bug support', value: '15 days' },
      { name: 'Domain', value: 'Free' },
      { name: 'Hosting', value: 'Free' }
    ],
    ctaText: 'Get Started'
  },
  {
    id: 'pro',
    name: 'NOVA PRO',
    price: '₹34,999',
    originalPrice: '₹49,500',
    isPopular: true,
    features: [
      { name: 'Pages', value: '10' },
      { name: 'Custom UI/UX', value: true },
      { name: 'Responsive', value: true },
      { name: 'WhatsApp', value: true },
      { name: 'Forms', value: 'Advanced' },
      { name: 'SEO', value: 'Technical setup' },
      { name: 'Analytics', value: true },
      { name: 'Backend', value: 'Basic' },
      { name: 'Database', value: '—/Basic' },
      { name: 'API integrations', value: 'Up to 2' },
      { name: 'Revisions', value: '3' },
      { name: 'Bug support', value: '30 days' },
      { name: 'Domain', value: 'Free' },
      { name: 'Hosting', value: 'Free' }
    ],
    ctaText: 'ORDER VIA WHATSAPP'
  },
  {
    id: 'max',
    name: 'NOVA MAX',
    price: '₹54,999',
    originalPrice: '₹78,000',
    features: [
      { name: 'Pages', value: '15' },
      { name: 'Custom UI/UX', value: true },
      { name: 'Responsive', value: true },
      { name: 'WhatsApp', value: true },
      { name: 'Forms', value: 'Advanced' },
      { name: 'SEO', value: 'Advanced setup' },
      { name: 'Analytics', value: true },
      { name: 'Backend', value: true },
      { name: 'Database', value: true },
      { name: 'API integrations', value: 'Up to 3' },
      { name: 'Revisions', value: '4' },
      { name: 'Bug support', value: '60 days' },
      { name: 'Domain', value: 'Free' },
      { name: 'Hosting', value: 'Free' }
    ],
    ctaText: 'Get Max'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Rahul Sharma',
    company: 'The Chai Story',
    initials: 'R',
    initialsBg: 'bg-blue-100 text-blue-600',
    text: 'Upscale Nova helped us create a professional online presence and made the entire process simple. Highly recommended for startups.',
    rating: 4.3
  },
  {
    id: '2',
    name: 'Priya Patel',
    company: 'Spice & Grill',
    initials: 'P',
    initialsBg: 'bg-emerald-100 text-emerald-600',
    text: 'The digital menu and NFC cards completely changed how our restaurant operates. Customers love the seamless experience.',
    rating: 4.4
  },
  {
    id: '3',
    name: 'Vikram Singh',
    company: 'Singh Legal Associates',
    initials: 'V',
    initialsBg: 'bg-indigo-100 text-indigo-600',
    text: 'They understood exactly what our firm needed. A clean, premium website that actually drives new client inquiries.',
    rating: 4.2
  }
];

export const FAQS: FAQItem[] = [
  {
    id: '8',
    question: 'Why does my business need a website?',
    answer: 'A professional website acts as your digital storefront, open 24/7. It builds credibility, helps potential customers find you through search engines, and provides a centralized platform to showcase your services, capture leads, and grow your brand in a competitive market.'
  },
  {
    id: '1',
    question: 'How much does a website cost?',
    answer: 'Our pricing is flexible and depends entirely on your specific requirements. We offer solutions starting at ₹24,999 for startups, small businesses, and custom enterprise builds. Contact us at 91372 83810 for a free custom quote.'
  },
  {
    id: '2',
    question: 'Can I request a fully custom website?',
    answer: 'Yes! All our websites are 100% custom-built according to your business requirements, brand vision, and desired integrations.'
  },
  {
    id: '3',
    question: 'Do you provide hosting?',
    answer: 'Yes, we provide 1 year of free high-speed hosting and free SSL security certificates included with all our website packages.'
  },
  {
    id: '4',
    question: 'Do you manage the website after launch?',
    answer: 'Yes! We offer complete ongoing management, security monitoring, content updates, and server maintenance so you can focus on growing your business.'
  },
  {
    id: '5',
    question: 'Can you create a website for my cafe or restaurant?',
    answer: 'Absolutely. We specialize in digital solutions for dining establishments, including QR code digital menus, online reservation forms, and NFC review cards.'
  },
  {
    id: '6',
    question: 'Do you provide Google Maps listing services?',
    answer: 'Yes, we optimize Google Business Profiles and Google Maps listings to improve your local search ranking and drive customer footfall.'
  },
  {
    id: '7',
    question: 'How do NFC review cards work?',
    answer: 'Customers simply tap their smartphone on the NFC review card or scan the QR code. It instantly opens your Google Business Review link without typing.'
  }
];
