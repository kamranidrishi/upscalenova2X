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
import { PRICING_PLANS } from '../data/content';
const basePrice = PRICING_PLANS.find(p => p.id === 'base')?.price || '₹24,999';
const proPrice = PRICING_PLANS.find(p => p.id === 'pro')?.price || '₹39,999';
const maxPrice = PRICING_PLANS.find(p => p.id === 'max')?.price || '₹59,999';

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
      return (
        <FinanceDemo
          demo={demo}
          isMobile={isMobile}
          isTablet={isTablet}
          onPlanChange={onPlanChange}
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

// ============================================================================
// (Removed MarketingDemo since it is now AgencyDemo in its own file)

// ============================================================================
// 6. FINANCE / FINTECH DEMO (FinFlow Capital)
// ============================================================================
const FinanceDemo: React.FC<{
  demo: DemoItem;
  isMobile: boolean;
  isTablet: boolean;
  onPlanChange?: (plan: PlanType) => void;
}> = ({ demo, isMobile }) => {
  const plan = demo.plan;
  const isBase = plan === "Base";
  const isMax = plan === "Max";

  const [activeAccount, setActiveAccount] = useState("Business Checking");
  const [isSendModal, setIsSendModal] = useState(false);

  return (
    <div className="w-full h-full bg-slate-950 text-slate-100 flex font-sans overflow-hidden">
      {/* Sidebar */}
      {!isMobile && (
        <div className="w-56 bg-slate-900 border-r border-slate-800 p-4 space-y-6 flex flex-col justify-between shrink-0">
          <div className="space-y-6">
            <div className="font-bold text-lg text-blue-400 flex items-center gap-2">
              <PieChart className="w-5 h-5" /> FinFlow Capital
            </div>
            <nav className="space-y-1 text-xs">
              <div className="bg-blue-600/20 text-blue-400 font-bold p-2.5 rounded-xl">
                Dashboard
              </div>
              <div className="text-slate-400 hover:text-white p-2.5 rounded-xl cursor-pointer">
                Transactions
              </div>
              <div className="text-slate-400 hover:text-white p-2.5 rounded-xl cursor-pointer">
                Accounts & Cards
              </div>
              {!isBase && (
                <div className="text-slate-400 hover:text-white p-2.5 rounded-xl cursor-pointer">
                  Analytics
                </div>
              )}
            </nav>
          </div>
          <div className="text-[10px] text-slate-500">
            FinFlow v2.4 Enterprise
          </div>
        </div>
      )}

      {/* Main Content */}
      <div className="flex-1 flex flex-col h-full overflow-y-auto custom-scrollbar p-6 space-y-6">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold text-white">
              Financial Dashboard
            </h1>
            <p className="text-xs text-slate-400">Account: {activeAccount}</p>
          </div>
          <button
            onClick={() => setIsSendModal(true)}
            className="bg-blue-600 hover:bg-blue-500 text-white font-bold px-4 py-2 rounded-xl text-xs flex items-center gap-2"
          >
            <Send className="w-3.5 h-3.5" /> Transfer Funds
          </button>
        </div>

        {/* Balance Card */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-blue-600 p-6 rounded-3xl text-white md:col-span-2 relative overflow-hidden">
            <div className="text-xs font-medium text-blue-100">
              Total Net Worth
            </div>
            <div className="text-3xl sm:text-4xl font-black mt-1">
              ₹12,45,800.00
            </div>
            <div className="mt-6 flex justify-between items-end text-xs">
              <div className="font-mono">**** **** **** 9482</div>
              <div className="bg-white/20 px-2 py-1 rounded">
                +3.2% this week
              </div>
            </div>
          </div>

          <div className="bg-slate-900 p-6 rounded-3xl border border-slate-800 flex flex-col justify-between">
            <div>
              <div className="text-xs text-slate-400">Monthly Cash Inflow</div>
              <div className="text-2xl font-bold text-emerald-400 mt-1">
                +₹3,40,000
              </div>
            </div>
            <div>
              <div className="text-xs text-slate-400">Monthly Outflow</div>
              <div className="text-2xl font-bold text-rose-400 mt-1">
                -₹1,12,400
              </div>
            </div>
          </div>
        </div>

        {/* Recent Transactions */}
        <div className="bg-slate-900 p-6 rounded-3xl border border-slate-800 space-y-4">
          <h3 className="font-bold text-base text-white">Recent Activity</h3>
          <div className="space-y-3">
            {[
              {
                name: "Stripe Settlement",
                date: "Today, 2:15 PM",
                amt: "+₹48,200",
                color: "text-emerald-400",
              },
              {
                name: "AWS Cloud Infrastructure",
                date: "Yesterday",
                amt: "-₹6,450",
                color: "text-rose-400",
              },
              {
                name: "Client Retainer (Apex Studio)",
                date: "12 Aug",
                amt: "+₹1,20,000",
                color: "text-emerald-400",
              },
            ].map((t, i) => (
              <div
                key={i}
                className="flex justify-between items-center p-3 rounded-xl bg-slate-950/60 border border-slate-800/60 text-xs"
              >
                <div>
                  <div className="font-bold text-white">{t.name}</div>
                  <div className="text-[10px] text-slate-400">{t.date}</div>
                </div>
                <div className={`font-black ${t.color}`}>{t.amt}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Send Modal */}
        {isSendModal && (
          <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4">
            <div className="bg-slate-900 border border-blue-500/40 p-6 rounded-3xl max-w-sm w-full text-center space-y-4">
              <h3 className="font-bold text-lg text-white">
                Simulated Money Transfer
              </h3>
              <p className="text-xs text-slate-400">
                Demo transfer of funds between virtual accounts completed
                instantly.
              </p>
              <button
                onClick={() => setIsSendModal(false)}
                className="bg-blue-600 text-white font-bold px-6 py-2 rounded-xl text-xs"
              >
                Done
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

