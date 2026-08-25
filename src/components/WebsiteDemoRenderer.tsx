import React, { useState, useEffect } from "react";
import { DemoItem, PlanType } from "../data/demos";
import { CafeDemo } from "./CafeDemo";
import { RestaurantDemo } from "./RestaurantDemo";
import { RealEstateDemo } from "./RealEstateDemo";
import { GymDemo } from "./GymDemo";
import { SchoolDemo } from "./SchoolDemo";
import { LawFirmDemo } from './LawFirmDemo';
import { AgencyDemo } from './AgencyDemo';
import { RepairDemo } from './RepairDemo';
import { CognitaDemo } from './CognitaDemo';
import { FinFlowBaseDemo } from './finance/FinFlowBaseDemo';
import { FinFlowProDemo } from './finance/FinFlowProDemo';
import { FinFlowMaxDemo } from './finance/FinFlowMaxDemo';
import { PRICING_PLANS } from '../data/content';
const basePrice = PRICING_PLANS.find(p => p.id === 'base')?.price || '₹24,999';
const proPrice = PRICING_PLANS.find(p => p.id === 'pro')?.price || '₹34,999';
const maxPrice = PRICING_PLANS.find(p => p.id === 'max')?.price || '₹54,999';

import {
  Coffee,
  Utensils,
  Dumbbell,
  Scale,
  Sparkles,
  PieChart,
  Zap,
  Wrench,
  Menu,
  X,
  MapPin,
  Phone,
  Clock,
  Star,
  ChevronRight,
  Check,
  Plus,
  Minus,
  ShoppingBag,
  Calendar,
  User,
  Search,
  Bell,
  CreditCard,
  ArrowRight,
  TrendingUp,
  Activity,
  CheckCircle,
  Shield,
  FileText,
  Briefcase,
  Eye,
  Play,
  MessageSquare,
  Send,
  RefreshCw,
  Layers,
  Award,
  Users,
  Share2,
  DollarSign,
  BarChart3,
  AlertCircle,
  Smartphone,
  Lock,
  ChevronDown,
  CheckSquare,
  Instagram,
  Facebook,
  Flame,
  Bot,
  Heart,
  ThumbsUp,
  ShoppingCart,
  Filter,
  Sparkle,
  CornerDownRight,
  CheckCircle2,
  MessageCircle,
} from "lucide-react";

interface RendererProps {
  demo: DemoItem;
  device: "desktop" | "tablet" | "mobile";
  onPlanChange?: (plan: PlanType) => void;
}

export const WebsiteDemoRenderer: React.FC<RendererProps> = ({
  demo,
  device,
  onPlanChange,
}) => {
  const isMobile = device === "mobile";
  const isTablet = device === "tablet";

  switch (demo.businessType) {
    case "cafe":
      return (
        <CafeDemo
          demo={demo}
          isMobile={isMobile}
          isTablet={isTablet}
          onPlanChange={onPlanChange}
        />
      );
    case "restaurant":
      return (
        <RestaurantDemo
          demo={demo}
          isMobile={isMobile}
          isTablet={isTablet}
          onPlanChange={onPlanChange}
        />
      );
    case "real-estate":
      return (
        <RealEstateDemo
          demo={demo}
          isMobile={isMobile}
          isTablet={isTablet}
          onPlanChange={onPlanChange}
        />
      );
    case "gym":
      return (
        <GymDemo
          demo={demo}
          isMobile={isMobile}
          isTablet={isTablet}
          onPlanChange={onPlanChange}
        />
      );
    case "law-firm":
      return (
        <LawFirmDemo
          demo={demo}
          isMobile={isMobile}
          isTablet={isTablet}
          onPlanChange={onPlanChange}
        />
      );
    case "marketing":
      return (
        <AgencyDemo
          demo={demo}
          isMobile={isMobile}
          isTablet={isTablet}
        />
      );
    case "finance":
      if (demo.plan === "Base") {
        return (
          <FinFlowBaseDemo
            demo={demo}
            isMobile={isMobile}
            isTablet={isTablet}
          />
        );
      }
      if (demo.plan === "Pro") {
        return (
          <FinFlowProDemo
            demo={demo}
            isMobile={isMobile}
            isTablet={isTablet}
          />
        );
      }
      return (
        <FinFlowMaxDemo
          demo={demo}
          isMobile={isMobile}
          isTablet={isTablet}
        />
      );
    case "ai":
      return (
        <CognitaDemo
          demo={demo}
          isMobile={isMobile}
          isTablet={isTablet}
          onPlanChange={onPlanChange}
        />
      );
    case "form":
      return (
        <RepairDemo
          demo={demo}
          isMobile={isMobile}
          isTablet={isTablet}
          onPlanChange={onPlanChange}
        />
      );
    case "school":
      return (
        <SchoolDemo
          demo={demo}
          isMobile={isMobile}
          isTablet={isTablet}
          onPlanChange={onPlanChange}
        />
      );
    default:
      return (
        <CafeDemo
          demo={demo}
          isMobile={isMobile}
          isTablet={isTablet}
          onPlanChange={onPlanChange}
        />
      );
  }
};

