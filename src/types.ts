export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
  color: string;
  category?: string;
}

export interface IndustryItem {
  id: string;
  title: string;
  iconName: string;
}

export interface ProductItem {
  id: string;
  title: string;
  description: string;
  customization: string[];
  badgeColor: string;
  iconName: string;
  image: string;
}

export interface PricingPlan {
  id: string;
  name: string;
  price: string;
  originalPrice?: string;
  monthlyPrice?: string;
  originalMonthlyPrice?: string;
  isPopular?: boolean;
  features: string[];
  ctaText: string;
}

export interface Testimonial {
  id: string;
  name: string;
  company: string;
  initials: string;
  initialsBg: string;
  text: string;
  rating: number;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface ProcessStep {
  stepNumber: string;
  title: string;
  description: string;
}

export interface QuoteFormData {
  name: string;
  businessName: string;
  email: string;
  phone: string;
  service: string;
  details: string;
}
