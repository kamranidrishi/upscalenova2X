import React, { useState } from 'react';
import { 
  Building2, 
  TrendingUp, 
  TrendingDown, 
  ArrowUpRight, 
  ArrowDownLeft, 
  CreditCard, 
  ShieldCheck, 
  Phone, 
  Mail, 
  CheckCircle2, 
  Send, 
  BarChart3, 
  FileText, 
  DollarSign, 
  Users, 
  HelpCircle,
  Clock,
  ChevronRight,
  ChevronDown,
  ArrowRight,
  Sparkles,
  Lock,
  Unlock,
  Wallet,
  Calendar,
  Layers,
  PieChart,
  Search,
  Filter,
  Download,
  Copy,
  Check,
  AlertTriangle,
  Lightbulb,
  Globe,
  Sliders,
  RefreshCw,
  ExternalLink,
  Plus,
  Zap,
  Activity,
  Server,
  Settings,
  Bell,
  Eye,
  EyeOff,
  Percent,
  CheckSquare
} from 'lucide-react';
import { DemoItem } from '../../data/demos';

interface FinFlowMaxDemoProps {
  demo: DemoItem;
  isMobile: boolean;
  isTablet: boolean;
}

export const FinFlowMaxDemo: React.FC<FinFlowMaxDemoProps> = ({ demo, isMobile, isTablet }) => {
  const [activeTab, setActiveTab] = useState<
    'overview' | 'dashboard' | 'accounts' | 'transactions' | 'cashflow' | 'invoices' | 'expenses' | 'budgets' | 'insights' | 'integrations' | 'workspace' | 'pricing' | 'about' | 'contact'
  >('overview');

  // Currency & Range State
  const [selectedCurrency, setSelectedCurrency] = useState<'INR' | 'USD' | 'EUR' | 'GBP'>('INR');
  const [timeRange, setTimeRange] = useState<'7D' | '30D' | '90D' | 'YTD'>('30D');

  // Currency Multipliers
  const currSymbol = selectedCurrency === 'INR' ? '₹' : selectedCurrency === 'USD' ? '$' : selectedCurrency === 'EUR' ? '€' : '£';
  const currMultiplier = selectedCurrency === 'INR' ? 1 : selectedCurrency === 'USD' ? 0.012 : selectedCurrency === 'EUR' ? 0.011 : 0.0094;

  const formatAmount = (inrVal: number) => {
    const val = inrVal * currMultiplier;
    if (selectedCurrency === 'INR') {
      return `₹${val.toLocaleString('en-IN', { maximumFractionDigits: 0 })}`;
    }
    return `${currSymbol}${val.toLocaleString('en-US', { maximumFractionDigits: 0 })}`;
  };

  // Transfer Modal
  const [isWireModalOpen, setIsWireModalOpen] = useState(false);
  const [wireRail, setWireRail] = useState<'IMPS' | 'RTGS' | 'NEFT' | 'SWIFT'>('IMPS');
  const [wireStep, setWireStep] = useState<'form' | 'otp' | 'success'>('form');
  const [wireRecipient, setWireRecipient] = useState('');
  const [wireAmount, setWireAmount] = useState('');
  const [wireOtp, setWireOtp] = useState('');

  // Invoice Modal
  const [isInvoiceModalOpen, setIsInvoiceModalOpen] = useState(false);
  const [invoiceSubmitted, setInvoiceSubmitted] = useState(false);
  const [newInvoice, setNewInvoice] = useState({ client: '', amount: '', dueDate: '', taxRate: '18%' });

  // Invoices List
  const [invoices, setInvoices] = useState([
    { id: 'INV-2025-089', client: 'Apex Media Corp', amount: 350000, date: '21 Aug 2025', status: 'Paid', due: 'Paid on 21 Aug' },
    { id: 'INV-2025-088', client: 'Nova AI Technologies', amount: 620000, date: '18 Aug 2025', status: 'Pending', due: 'Due in 4 days' },
    { id: 'INV-2025-087', client: 'Starlight Global LLC', amount: 1250000, date: '12 Aug 2025', status: 'Paid', due: 'Paid on 14 Aug' },
    { id: 'INV-2025-086', client: 'CyberGrid Systems', amount: 180000, date: '01 Aug 2025', status: 'Overdue', due: 'Overdue by 6 days' }
  ]);

  // Virtual Cards State
  const [cards, setCards] = useState([
    { id: 'card-1', name: 'AWS & Cloud Infrastructure', holder: 'FinFlow Devops', num: '4532 •••• •••• 9102', exp: '08/29', limit: 250000, spent: 114500, frozen: false },
    { id: 'card-2', name: 'Google Ads & Performance Growth', holder: 'FinFlow Growth', num: '4912 •••• •••• 3419', exp: '11/28', limit: 500000, spent: 340000, frozen: false },
    { id: 'card-3', name: 'Executive Travel & Airfare', holder: 'Aditya Sen (CEO)', num: '4111 •••• •••• 7820', exp: '03/30', limit: 200000, spent: 45000, frozen: true },
  ]);

  // Integrations State
  const [integrations, setIntegrations] = useState([
    { id: 'stripe', name: 'Stripe Gateway', category: 'Payment Processing', status: true, latency: '82ms' },
    { id: 'razorpay', name: 'Razorpay Enterprise', category: 'Domestic UPI & Cards', status: true, latency: '45ms' },
    { id: 'quickbooks', name: 'Intuit QuickBooks', category: 'General Ledger Sync', status: true, latency: '120ms' },
    { id: 'xero', name: 'Xero Accounting', category: 'Automated Invoicing', status: false, latency: 'Offline' },
    { id: 'plaid', name: 'Plaid Core Banking', category: 'Direct Bank Feeds', status: true, latency: '98ms' },
    { id: 'aws', name: 'AWS Cost Explorer', category: 'Cloud Infrastructure', status: true, latency: '210ms' },
  ]);

  // AI Insights State
  const [insights, setInsights] = useState([
    { id: 1, title: 'Duplicate Cloud Subscription Detected', desc: 'Identified overlapping Datadog and NewRelic instances costing ₹48,000/mo.', action: 'Decommission Duplicate', resolved: false },
    { id: 2, title: 'USD/INR Hedging Opportunity', desc: 'Forward rate for $34,200 foreign balance is peaking at 84.10. Lock in +₹38,500 surplus.', action: 'Execute Forward Lock', resolved: false },
    { id: 3, title: 'Quarterly Advance Tax Exemption', desc: 'TDS input credit of ₹84,200 can be offset before September 15 deadline.', action: 'Auto-Apply 26AS Offset', resolved: false }
  ]);

  // Contact Form
  const [contactSubmitted, setContactSubmitted] = useState(false);
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    company: '',
    turnover: '₹10 Cr - ₹50 Cr',
    slots: 'Immediate VP Call',
    requirements: ''
  });

  const toggleCardFreeze = (id: string) => {
    setCards(cards.map(c => c.id === id ? { ...c, frozen: !c.frozen } : c));
  };

  const toggleIntegration = (id: string) => {
    setIntegrations(integrations.map(i => i.id === id ? { ...i, status: !i.status } : i));
  };

  const handleResolveInsight = (id: number) => {
    setInsights(insights.map(i => i.id === id ? { ...i, resolved: true } : i));
  };

  const handleWireSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!wireRecipient || !wireAmount) return;
    setWireStep('otp');
  };

  const handleOtpSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setWireStep('success');
    setTimeout(() => {
      setWireStep('form');
      setIsWireModalOpen(false);
      setWireRecipient('');
      setWireAmount('');
      setWireOtp('');
    }, 2000);
  };

  const handleCreateInvoice = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newInvoice.client || !newInvoice.amount) return;
    const invObj = {
      id: `INV-2025-${Math.floor(100 + Math.random() * 900)}`,
      client: newInvoice.client,
      amount: Number(newInvoice.amount),
      date: 'Today',
      status: 'Pending',
      due: `Due in 15 days`
    };
    setInvoices([invObj, ...invoices]);
    setInvoiceSubmitted(true);
    setTimeout(() => {
      setInvoiceSubmitted(false);
      setIsInvoiceModalOpen(false);
      setNewInvoice({ client: '', amount: '', dueDate: '', taxRate: '18%' });
    }, 1500);
  };

  return (
    <div className="w-full h-full bg-[#070a12] text-slate-100 flex flex-col font-sans overflow-y-auto custom-scrollbar">
      {/* Enterprise Header Bar */}
      <header className="sticky top-0 z-30 bg-[#070a12]/95 backdrop-blur-md border-b border-cyan-900/40 px-4 sm:px-6 py-3 flex items-center justify-between shadow-2xl shrink-0">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-cyan-500 via-blue-600 to-indigo-600 text-white flex items-center justify-center font-black shadow-lg shadow-cyan-500/20 ring-1 ring-cyan-400/50">
            <Zap className="w-5 h-5 text-cyan-200" />
          </div>
          <div>
            <div className="font-black text-base tracking-tight text-white flex items-center gap-2">
              FinFlow <span className="text-cyan-400 font-extrabold text-[10px] uppercase px-2 py-0.5 bg-cyan-950/90 rounded-md border border-cyan-700/80 shadow-xs">Enterprise Max</span>
            </div>
            <div className="text-[10px] text-cyan-300/70 font-mono flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span>Multi-Currency Terminal • SOC2 Type II</span>
            </div>
          </div>
        </div>

        {/* Currency & Range Switchers */}
        <div className="hidden md:flex items-center gap-3">
          {/* Currency Switcher */}
          <div className="flex bg-slate-950 p-1 rounded-xl border border-cyan-900/50 text-[11px] font-bold">
            {(['INR', 'USD', 'EUR', 'GBP'] as const).map((curr) => (
              <button
                key={curr}
                onClick={() => setSelectedCurrency(curr)}
                className={`px-2.5 py-1 rounded-lg transition-all ${
                  selectedCurrency === curr ? 'bg-cyan-500 text-slate-950 font-black shadow-sm' : 'text-slate-400 hover:text-white'
                }`}
              >
                {curr}
              </button>
            ))}
          </div>

          {/* Timeframe */}
          <div className="flex bg-slate-950 p-1 rounded-xl border border-slate-800 text-[11px] font-semibold text-slate-400">
            {(['7D', '30D', '90D', 'YTD'] as const).map((t) => (
              <button
                key={t}
                onClick={() => setTimeRange(t)}
                className={`px-2.5 py-1 rounded-lg transition-all ${
                  timeRange === t ? 'bg-slate-800 text-white font-bold' : 'hover:text-slate-200'
                }`}
              >
                {t}
              </button>
            ))}
          </div>
        </div>

        {/* Wire & Action Triggers */}
        <div className="flex items-center gap-2">
          <button 
            onClick={() => setIsInvoiceModalOpen(true)}
            className="hidden sm:flex items-center gap-1.5 bg-slate-900 hover:bg-slate-800 text-cyan-300 border border-cyan-700/60 px-3 py-1.5 rounded-xl text-xs font-semibold transition-colors"
          >
            <Plus className="w-3.5 h-3.5" /> Issue Invoice
          </button>
          <button 
            onClick={() => setIsWireModalOpen(true)}
            className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-black px-4 py-1.5 rounded-xl text-xs flex items-center gap-1.5 shadow-lg shadow-cyan-500/20 transition-all"
          >
            <Send className="w-3.5 h-3.5" /> High-Value Wire
          </button>
        </div>
      </header>

      {/* Navigation Sub-Header */}
      <nav className="bg-[#0b101d] border-b border-slate-800/80 px-4 sm:px-6 py-2 overflow-x-auto flex items-center gap-1.5 text-xs shrink-0">
        {[
          { id: 'overview', label: 'Overview' },
          { id: 'dashboard', label: 'Treasury Dashboard' },
          { id: 'accounts', label: 'Accounts & Cards' },
          { id: 'transactions', label: 'Transactions' },
          { id: 'cashflow', label: 'Cash Forecasting' },
          { id: 'invoices', label: 'Invoicing' },
          { id: 'expenses', label: 'Expenses' },
          { id: 'budgets', label: 'Budgets' },
          { id: 'insights', label: 'AI Advisory' },
          { id: 'integrations', label: 'Integrations' },
          { id: 'workspace', label: 'Workspace RBAC' },
          { id: 'pricing', label: 'Pricing' },
          { id: 'about', label: 'About' },
          { id: 'contact', label: 'Contact' },
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id as any)}
            className={`px-3 py-1 rounded-lg capitalize whitespace-nowrap text-xs font-semibold transition-all ${
              activeTab === tab.id
                ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/50 shadow-xs'
                : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900/60'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </nav>

      {/* MAIN CONTENT AREA */}
      <main className="flex-1 p-4 sm:p-6 max-w-7xl mx-auto w-full space-y-6">

        {/* ===================== OVERVIEW / HERO ===================== */}
        {activeTab === 'overview' && (
          <div className="space-y-8 pb-16">
            {/* Hero Banner */}
            <div className="relative rounded-3xl bg-gradient-to-r from-slate-950 via-[#0d1730] to-[#071329] border border-cyan-500/30 p-6 sm:p-10 shadow-2xl overflow-hidden">
              <div className="max-w-3xl space-y-4 relative z-10">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/80 border border-cyan-800 text-cyan-300 text-xs font-mono">
                  <Activity className="w-3.5 h-3.5 text-cyan-400" /> ₹54,999 Max Tier Enterprise FinTech Platform
                </div>
                <h1 className="text-2xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
                  Autonomous Multi-Currency Treasury & Corporate FinTech
                </h1>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-2xl">
                  Unified enterprise liquidity management: Real-time multi-account tracking, AI-powered predictive 90-day cash forecasting, automated corporate virtual cards, and one-click global wire disbursements.
                </p>

                <div className="flex flex-wrap items-center gap-3 pt-2">
                  <button 
                    onClick={() => setActiveTab('dashboard')}
                    className="bg-cyan-400 hover:bg-cyan-300 text-slate-950 font-black px-5 py-2.5 rounded-xl text-xs flex items-center gap-2 shadow-lg shadow-cyan-400/20 transition-all"
                  >
                    Open Live Terminal <ArrowRight className="w-4 h-4" />
                  </button>
                  <button 
                    onClick={() => setIsWireModalOpen(true)}
                    className="bg-slate-900/90 hover:bg-slate-800 text-cyan-300 border border-cyan-700/60 font-bold px-5 py-2.5 rounded-xl text-xs flex items-center gap-1.5 transition-colors"
                  >
                    <Send className="w-3.5 h-3.5" /> High-Value Wire Simulator
                  </button>
                </div>
              </div>

              {/* Decorative Glow */}
              <div className="absolute right-0 top-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
            </div>

            {/* Quick KPI Stat Highlights */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { label: 'Total Managed Liquidity', val: formatAmount(184500000), change: '+14.8% YoY', color: 'text-cyan-400' },
                { label: 'Calculated Net Runway', val: '22.4 Months', change: 'Zero Debt Load', color: 'text-emerald-400' },
                { label: 'P99 Wire Settlement Speed', val: '1.2 Seconds', change: 'Direct IMPS/SWIFT', color: 'text-blue-400' },
                { label: 'AI Tax Optimization Yield', val: formatAmount(420000), change: 'Offset applied', color: 'text-amber-400' },
              ].map((kpi, idx) => (
                <div key={idx} className="bg-slate-900/90 border border-slate-800/90 p-5 rounded-2xl space-y-1">
                  <div className="text-[11px] text-slate-400 font-semibold">{kpi.label}</div>
                  <div className={`text-xl sm:text-2xl font-black font-mono ${kpi.color}`}>{kpi.val}</div>
                  <div className="text-[10px] text-slate-500 font-medium">{kpi.change}</div>
                </div>
              ))}
            </div>

            {/* Quick Action Widgets Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Virtual Cards Snapshot */}
              <div className="bg-slate-900/90 border border-slate-800 p-6 rounded-3xl space-y-4">
                <div className="flex justify-between items-center">
                  <h3 className="font-bold text-base text-white">Active Corporate Cards</h3>
                  <button onClick={() => setActiveTab('accounts')} className="text-xs text-cyan-400 hover:text-cyan-300 font-semibold">View All ({cards.length})</button>
                </div>
                <div className="space-y-3">
                  {cards.slice(0, 2).map((c) => (
                    <div key={c.id} className="p-3.5 rounded-2xl bg-slate-950 border border-slate-800 text-xs space-y-2">
                      <div className="flex justify-between items-start">
                        <div>
                          <div className="font-bold text-white">{c.name}</div>
                          <div className="text-[10px] text-slate-400 font-mono">{c.num}</div>
                        </div>
                        <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${c.frozen ? 'bg-rose-950 text-rose-400' : 'bg-emerald-950 text-emerald-400'}`}>
                          {c.frozen ? 'Frozen' : 'Active'}
                        </span>
                      </div>
                      <div className="flex justify-between text-[10px] text-slate-400 pt-1">
                        <span>Spent: <b className="text-white">{formatAmount(c.spent)}</b></span>
                        <span>Limit: {formatAmount(c.limit)}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Invoicing Pipeline Snapshot */}
              <div className="bg-slate-900/90 border border-slate-800 p-6 rounded-3xl space-y-4">
                <div className="flex justify-between items-center">
                  <h3 className="font-bold text-base text-white">Receivables Pipeline</h3>
                  <button onClick={() => setActiveTab('invoices')} className="text-xs text-cyan-400 hover:text-cyan-300 font-semibold">Manage</button>
                </div>
                <div className="space-y-2.5">
                  {invoices.slice(0, 3).map((inv) => (
                    <div key={inv.id} className="p-3 rounded-xl bg-slate-950 border border-slate-800/80 flex items-center justify-between text-xs">
                      <div>
                        <div className="font-bold text-white">{inv.client}</div>
                        <div className="text-[10px] text-slate-400">{inv.id} • {inv.due}</div>
                      </div>
                      <div className="text-right">
                        <div className="font-bold font-mono text-white">{formatAmount(inv.amount)}</div>
                        <span className={`text-[10px] font-bold ${inv.status === 'Paid' ? 'text-emerald-400' : inv.status === 'Pending' ? 'text-amber-400' : 'text-rose-400'}`}>
                          {inv.status}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* AI Autonomous Alerts */}
              <div className="bg-gradient-to-br from-indigo-950/70 via-slate-900 to-blue-950/70 border border-indigo-500/40 p-6 rounded-3xl space-y-3">
                <div className="flex items-center gap-2 text-cyan-300 font-bold text-xs">
                  <Sparkles className="w-4 h-4 text-cyan-400" /> AI Anomaly Detection
                </div>
                <div className="space-y-2.5 text-xs">
                  {insights.map((ins) => (
                    <div key={ins.id} className="p-2.5 bg-slate-950/80 rounded-xl border border-slate-800 space-y-1">
                      <div className="font-bold text-white text-[11px] flex justify-between">
                        <span>{ins.title}</span>
                        {ins.resolved && <span className="text-emerald-400 text-[10px]">Resolved</span>}
                      </div>
                      <p className="text-[10px] text-slate-400">{ins.desc}</p>
                      {!ins.resolved && (
                        <button 
                          onClick={() => handleResolveInsight(ins.id)}
                          className="mt-1 px-2 py-0.5 bg-cyan-950 hover:bg-cyan-900 text-cyan-300 border border-cyan-700/60 rounded text-[10px] font-bold"
                        >
                          {ins.action}
                        </button>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ===================== TREASURY DASHBOARD ===================== */}
        {activeTab === 'dashboard' && (
          <div className="space-y-6 pb-12">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 bg-slate-900/90 border border-slate-800 p-5 rounded-3xl">
              <div>
                <span className="text-[11px] font-mono text-cyan-400 font-bold uppercase">Enterprise Treasury Hub</span>
                <h2 className="text-2xl font-black text-white mt-0.5">Primary Global Liquidity Ledger</h2>
              </div>
              <div className="flex items-center gap-2">
                <button 
                  onClick={() => setIsWireModalOpen(true)}
                  className="bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-black px-4 py-2 rounded-xl text-xs flex items-center gap-1.5 transition-all"
                >
                  <Send className="w-3.5 h-3.5" /> High-Value Wire
                </button>
              </div>
            </div>

            {/* Total Treasury Metrics Banner */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-6 rounded-3xl bg-gradient-to-br from-blue-900 via-indigo-950 to-slate-950 border border-cyan-500/40 text-white md:col-span-2 space-y-4">
                <div className="flex justify-between items-start">
                  <div>
                    <div className="text-xs font-semibold text-cyan-300">Total Liquid Reserves Across All Hubs</div>
                    <div className="text-3xl sm:text-5xl font-black font-mono tracking-tight mt-1 text-white">
                      {formatAmount(184500000)}
                    </div>
                  </div>
                  <div className="bg-cyan-950/80 border border-cyan-600/50 px-3 py-1 rounded-lg text-xs font-mono text-cyan-300 font-bold">
                    +18.4% Q2 Net
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-2 pt-4 border-t border-slate-800/80 text-xs font-mono">
                  <div>
                    <div className="text-[10px] text-slate-400">Domestic Operating</div>
                    <div className="font-bold text-white">{formatAmount(92000000)}</div>
                  </div>
                  <div>
                    <div className="text-[10px] text-slate-400">Foreign USD Wire</div>
                    <div className="font-bold text-cyan-300">{formatAmount(58000000)}</div>
                  </div>
                  <div>
                    <div className="text-[10px] text-slate-400">Tax Escrow Vault</div>
                    <div className="font-bold text-emerald-400">{formatAmount(34500000)}</div>
                  </div>
                </div>
              </div>

              {/* 24-Hour Velocity Gauge */}
              <div className="bg-slate-900/90 border border-slate-800 p-6 rounded-3xl flex flex-col justify-between space-y-4">
                <div>
                  <div className="text-xs text-slate-400 font-semibold flex justify-between">
                    <span>24H Real-Time Inflow</span>
                    <span className="text-emerald-400 font-bold">+₹14.2L</span>
                  </div>
                  <div className="text-2xl font-black text-emerald-400 font-mono mt-1">
                    {formatAmount(1420000)}
                  </div>
                </div>

                <div className="pt-3 border-t border-slate-800">
                  <div className="text-xs text-slate-400 font-semibold flex justify-between">
                    <span>24H Vendor Outflow</span>
                    <span className="text-rose-400 font-bold">-₹3.8L</span>
                  </div>
                  <div className="text-2xl font-black text-rose-400 font-mono mt-1">
                    {formatAmount(380000)}
                  </div>
                </div>

                <div className="bg-slate-950 p-2.5 rounded-xl border border-slate-800 text-[11px] text-slate-400 flex justify-between font-mono">
                  <span>API Uptime:</span>
                  <span className="text-cyan-400 font-bold">99.999% P99</span>
                </div>
              </div>
            </div>

            {/* Department Budgets & Live Stream */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
              {/* Department Limits */}
              <div className="lg:col-span-6 bg-slate-900/90 border border-slate-800 p-5 rounded-3xl space-y-4">
                <h3 className="font-bold text-base text-white">Department Spending Limits</h3>
                <div className="space-y-3">
                  {[
                    { dept: 'Engineering & R&D', spent: 4800000, cap: 6000000, pct: 80, color: 'bg-cyan-500' },
                    { dept: 'Growth & Performance Ads', spent: 3200000, cap: 4000000, pct: 80, color: 'bg-blue-500' },
                    { dept: 'Operations & Legal Audit', spent: 1400000, cap: 2500000, pct: 56, color: 'bg-indigo-500' },
                    { dept: 'Executive & Travel', spent: 920000, cap: 1000000, pct: 92, color: 'bg-rose-500' },
                  ].map((d, i) => (
                    <div key={i} className="space-y-1 text-xs">
                      <div className="flex justify-between">
                        <span className="font-semibold text-slate-300">{d.dept}</span>
                        <span className="font-mono text-slate-400">{formatAmount(d.spent)} / {formatAmount(d.cap)} ({d.pct}%)</span>
                      </div>
                      <div className="h-2 bg-slate-950 rounded-full overflow-hidden border border-slate-800">
                        <div className={`h-full ${d.color}`} style={{ width: `${d.pct}%` }} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Integrations Health */}
              <div className="lg:col-span-6 bg-slate-900/90 border border-slate-800 p-5 rounded-3xl space-y-4">
                <div className="flex justify-between items-center">
                  <h3 className="font-bold text-base text-white">Banking Gateway Rails</h3>
                  <span className="text-xs text-emerald-400 font-mono">All Systems Operational</span>
                </div>
                <div className="grid grid-cols-2 gap-2.5">
                  {integrations.slice(0, 4).map((it) => (
                    <div key={it.id} className="p-3 bg-slate-950 rounded-2xl border border-slate-800 text-xs space-y-1">
                      <div className="flex justify-between items-center">
                        <span className="font-bold text-white">{it.name}</span>
                        <span className={`w-2 h-2 rounded-full ${it.status ? 'bg-emerald-400' : 'bg-rose-500'}`} />
                      </div>
                      <div className="text-[10px] text-slate-400">{it.category}</div>
                      <div className="text-[10px] font-mono text-cyan-300">Ping: {it.latency}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ===================== ACCOUNTS & CARDS ===================== */}
        {activeTab === 'accounts' && (
          <div className="space-y-6 pb-12">
            <div className="flex justify-between items-center">
              <div>
                <h1 className="text-2xl font-bold text-white">Accounts & Corporate Virtual Cards</h1>
                <p className="text-xs text-slate-400">Issue custom per-department virtual cards with instant spending caps</p>
              </div>
              <button 
                onClick={() => setIsWireModalOpen(true)}
                className="bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-black px-4 py-2 rounded-xl text-xs transition-colors"
              >
                + Issue Virtual Card
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {cards.map((c) => (
                <div key={c.id} className="bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 border border-slate-800 p-6 rounded-3xl space-y-4 relative overflow-hidden shadow-xl">
                  <div className="flex justify-between items-start">
                    <div>
                      <div className="text-xs font-bold text-cyan-400">{c.name}</div>
                      <div className="text-[10px] text-slate-400">{c.holder}</div>
                    </div>
                    <button 
                      onClick={() => toggleCardFreeze(c.id)}
                      className={`p-1.5 rounded-lg text-xs font-bold transition-colors ${
                        c.frozen ? 'bg-rose-950 text-rose-400 border border-rose-800' : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                      }`}
                      title={c.frozen ? 'Unfreeze Card' : 'Freeze Card'}
                    >
                      {c.frozen ? <Lock className="w-3.5 h-3.5" /> : <Unlock className="w-3.5 h-3.5" />}
                    </button>
                  </div>

                  <div className="bg-slate-950/90 p-4 rounded-2xl border border-slate-800/80 font-mono text-xs text-white space-y-2">
                    <div className="tracking-widest text-sm">{c.num}</div>
                    <div className="flex justify-between text-[10px] text-slate-400">
                      <span>EXP: {c.exp}</span>
                      <span>CVV: •••</span>
                    </div>
                  </div>

                  <div className="space-y-1.5 text-xs">
                    <div className="flex justify-between text-slate-300">
                      <span>Monthly Spend</span>
                      <span className="font-mono text-white font-bold">{formatAmount(c.spent)} / {formatAmount(c.limit)}</span>
                    </div>
                    <div className="h-2 bg-slate-950 rounded-full overflow-hidden border border-slate-800">
                      <div className={`h-full ${c.frozen ? 'bg-slate-600' : 'bg-cyan-500'}`} style={{ width: `${(c.spent / c.limit) * 100}%` }} />
                    </div>
                  </div>

                  <div className="pt-2 flex justify-between items-center text-[10px] text-slate-400">
                    <span>Status: <b className={c.frozen ? 'text-rose-400' : 'text-emerald-400'}>{c.frozen ? 'Temporarily Frozen' : 'Live & Active'}</b></span>
                    <button onClick={() => toggleCardFreeze(c.id)} className="text-cyan-400 hover:underline font-semibold">
                      {c.frozen ? 'Unfreeze' : 'Freeze'}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ===================== CASH FORECASTING ===================== */}
        {activeTab === 'cashflow' && (
          <div className="space-y-6 pb-12">
            <div className="space-y-1">
              <h1 className="text-2xl font-bold text-white">90-Day Predictive Cash Runway</h1>
              <p className="text-xs text-slate-400">Monte Carlo simulation modeling expected customer contract renewals vs forecasted cloud burn</p>
            </div>

            <div className="bg-slate-900/90 border border-slate-800 p-6 rounded-3xl space-y-6">
              <div className="flex justify-between items-center">
                <div>
                  <div className="text-xs font-mono text-cyan-400 font-bold">Predictive AI Model: High Confidence (96.4%)</div>
                  <h3 className="text-xl font-bold text-white mt-0.5">Projected Liquidity Trajectory</h3>
                </div>
                <span className="px-3 py-1 bg-emerald-950 text-emerald-400 border border-emerald-800 text-xs font-bold rounded-lg font-mono">
                  Runway: 22.4 Mo
                </span>
              </div>

              {/* Forecast Simulation Visualizer */}
              <div className="h-52 bg-slate-950 rounded-2xl p-4 flex items-end justify-between gap-3 border border-slate-800 relative">
                {[
                  { month: 'Current', val: formatAmount(184500000), h: '60%', baseline: true },
                  { month: '+15 Days', val: formatAmount(192000000), h: '64%' },
                  { month: '+30 Days', val: formatAmount(208000000), h: '72%' },
                  { month: '+45 Days', val: formatAmount(214000000), h: '76%' },
                  { month: '+60 Days', val: formatAmount(229000000), h: '84%' },
                  { month: '+75 Days', val: formatAmount(241000000), h: '91%' },
                  { month: '+90 Days', val: formatAmount(255000000), h: '100%' },
                ].map((step, idx) => (
                  <div key={idx} className="flex-1 flex flex-col items-center gap-2 h-full justify-end">
                    <span className="text-[10px] font-mono text-cyan-300 font-bold">{step.val}</span>
                    <div 
                      className={`w-full rounded-t-lg transition-all ${
                        step.baseline ? 'bg-blue-600' : 'bg-gradient-to-t from-cyan-600 to-cyan-400'
                      }`}
                      style={{ height: step.h }}
                    />
                    <span className="text-[10px] text-slate-400 font-semibold">{step.month}</span>
                  </div>
                ))}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
                <div className="p-4 bg-slate-950 rounded-2xl border border-slate-800 space-y-1">
                  <div className="text-slate-400 font-semibold">Expected Receivables Inward</div>
                  <div className="text-base font-bold text-emerald-400 font-mono">{formatAmount(82000000)}</div>
                  <p className="text-[10px] text-slate-500">From 14 enterprise recurring contracts</p>
                </div>
                <div className="p-4 bg-slate-950 rounded-2xl border border-slate-800 space-y-1">
                  <div className="text-slate-400 font-semibold">Forecasted Operational Burn</div>
                  <div className="text-base font-bold text-rose-400 font-mono">{formatAmount(24000000)}</div>
                  <p className="text-[10px] text-slate-500">Payroll, infrastructure, and marketing</p>
                </div>
                <div className="p-4 bg-slate-950 rounded-2xl border border-slate-800 space-y-1">
                  <div className="text-slate-400 font-semibold">Net Expected Cash Growth</div>
                  <div className="text-base font-bold text-cyan-400 font-mono">+{formatAmount(58000000)}</div>
                  <p className="text-[10px] text-slate-500">Positive operating cash surplus</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ===================== INVOICING & BILLING ===================== */}
        {activeTab === 'invoices' && (
          <div className="space-y-6 pb-12">
            <div className="flex justify-between items-center">
              <div>
                <h1 className="text-2xl font-bold text-white">Invoicing & Receivables Engine</h1>
                <p className="text-xs text-slate-400">Generate GST-compliant invoices and track multi-rail payments</p>
              </div>
              <button 
                onClick={() => setIsInvoiceModalOpen(true)}
                className="bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-black px-4 py-2 rounded-xl text-xs flex items-center gap-1.5 transition-colors"
              >
                <Plus className="w-3.5 h-3.5" /> Create New Invoice
              </button>
            </div>

            <div className="bg-slate-900/90 border border-slate-800 rounded-3xl p-5 space-y-4">
              <div className="divide-y divide-slate-800/80">
                {invoices.map((inv) => (
                  <div key={inv.id} className="py-4 flex items-center justify-between hover:bg-slate-800/30 px-3 rounded-2xl transition-colors">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-xl bg-blue-950 text-cyan-400 border border-blue-800/60 flex items-center justify-center font-bold text-xs">
                        <FileText className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-xs sm:text-sm font-bold text-white">{inv.client}</div>
                        <div className="text-[10px] text-slate-400 font-mono flex items-center gap-2">
                          <span>{inv.id}</span>
                          <span>•</span>
                          <span>{inv.date}</span>
                          <span>•</span>
                          <span className="text-slate-300">{inv.due}</span>
                        </div>
                      </div>
                    </div>
                    <div className="text-right flex items-center gap-3">
                      <div>
                        <div className="text-xs sm:text-sm font-black font-mono text-white">{formatAmount(inv.amount)}</div>
                        <span className={`text-[10px] font-bold ${
                          inv.status === 'Paid' ? 'text-emerald-400' : inv.status === 'Pending' ? 'text-amber-400' : 'text-rose-400'
                        }`}>
                          {inv.status}
                        </span>
                      </div>
                      <button 
                        onClick={() => alert(`Simulated payment link sent to ${inv.client}`)}
                        className="hidden sm:inline-block px-3 py-1 bg-slate-800 hover:bg-slate-700 text-slate-200 text-[11px] font-semibold rounded-lg"
                      >
                        Send Link
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* ===================== INTEGRATIONS HUB ===================== */}
        {activeTab === 'integrations' && (
          <div className="space-y-6 pb-12">
            <div className="space-y-1">
              <h1 className="text-2xl font-bold text-white">Banking & Accounting Integrations Hub</h1>
              <p className="text-xs text-slate-400">Pre-built high-throughput connectors for enterprise GL, ERP, and payment processors</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {integrations.map((it) => (
                <div key={it.id} className="bg-slate-900/90 border border-slate-800 p-5 rounded-3xl space-y-3">
                  <div className="flex justify-between items-start">
                    <div className="w-10 h-10 rounded-2xl bg-cyan-950/80 border border-cyan-800/60 text-cyan-400 flex items-center justify-center font-bold">
                      <Server className="w-5 h-5" />
                    </div>
                    <button
                      onClick={() => toggleIntegration(it.id)}
                      className={`px-3 py-1 rounded-xl text-xs font-bold transition-colors ${
                        it.status ? 'bg-emerald-950 text-emerald-400 border border-emerald-800' : 'bg-slate-800 text-slate-400'
                      }`}
                    >
                      {it.status ? 'Connected' : 'Connect'}
                    </button>
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-white">{it.name}</h3>
                    <p className="text-xs text-slate-400 mt-0.5">{it.category}</p>
                  </div>
                  <div className="pt-2 border-t border-slate-800 flex justify-between text-[11px] text-slate-400 font-mono">
                    <span>Sync Status:</span>
                    <span className={it.status ? 'text-cyan-300' : 'text-slate-500'}>{it.latency}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ===================== WORKSPACE RBAC ===================== */}
        {activeTab === 'workspace' && (
          <div className="space-y-6 pb-12 max-w-4xl mx-auto">
            <div className="space-y-1">
              <h1 className="text-2xl font-bold text-white">Role-Based Access Control (RBAC)</h1>
              <p className="text-xs text-slate-400">Manage multi-signature approval rules for wire disbursements & audit permissions</p>
            </div>

            <div className="bg-slate-900/90 border border-slate-800 rounded-3xl p-6 space-y-4">
              <h3 className="font-bold text-base text-white">Authorized Treasury Officers</h3>
              <div className="divide-y divide-slate-800/80">
                {[
                  { name: 'Aditya Sen', role: 'Super Admin / CEO', email: 'aditya@finflow.io', wires: 'Unlimited Approval', active: true },
                  { name: 'Kavita Chawla', role: 'VP of Finance / CFO', email: 'kavita@finflow.io', wires: 'Up to ₹1 Cr Dual Auth', active: true },
                  { name: 'Rohan Deshmukh', role: 'Lead Treasury Accountant', email: 'rohan@finflow.io', wires: 'Up to ₹25 Lakhs', active: true },
                  { name: 'PwC India Audit Desk', role: 'External Auditor', email: 'audit@pwc-desk.in', wires: 'Read-Only Audit Trail', active: true },
                ].map((user, idx) => (
                  <div key={idx} className="py-3.5 flex items-center justify-between text-xs">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-cyan-950 border border-cyan-700/60 text-cyan-300 flex items-center justify-center font-bold">
                        {user.name.split(' ').map(n => n[0]).join('')}
                      </div>
                      <div>
                        <div className="font-bold text-white">{user.name}</div>
                        <div className="text-[10px] text-slate-400">{user.email} • {user.role}</div>
                      </div>
                    </div>
                    <div className="text-right">
                      <span className="px-2 py-0.5 bg-slate-950 text-cyan-300 rounded border border-slate-800 text-[10px] font-mono">
                        {user.wires}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* ===================== PRICING ===================== */}
        {activeTab === 'pricing' && (
          <div className="space-y-6 pb-12 max-w-4xl mx-auto">
            <div className="text-center space-y-2">
              <span className="px-3 py-1 bg-cyan-950 text-cyan-400 border border-cyan-800 text-xs font-bold rounded-full">
                Flagship Enterprise Tier
              </span>
              <h1 className="text-3xl sm:text-4xl font-extrabold text-white">FinFlow Max Enterprise</h1>
              <p className="text-xs sm:text-sm text-slate-400">
                The ultimate institutional-grade FinTech platform for scaling enterprises and high-velocity commerce.
              </p>
            </div>

            <div className="bg-gradient-to-b from-slate-950 via-[#0a142c] to-slate-950 border-2 border-cyan-400 p-6 sm:p-8 rounded-3xl shadow-2xl shadow-cyan-500/20 space-y-6">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-b border-slate-800 pb-6">
                <div>
                  <div className="text-xs text-cyan-400 font-bold uppercase tracking-wider">Complete Ecosystem Solution</div>
                  <h3 className="text-3xl font-black text-white mt-1">₹54,999 Max Tier</h3>
                  <p className="text-xs text-slate-400">All features unlocked: Multi-currency treasury, 90-day predictive runway, RBAC & integrations</p>
                </div>
                <button 
                  onClick={() => setActiveTab('contact')}
                  className="bg-cyan-400 hover:bg-cyan-300 text-slate-950 font-black px-6 py-2.5 rounded-xl text-xs transition-all shadow-md"
                >
                  Book Enterprise SLA
                </button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 text-xs text-slate-200">
                {[
                  'Enterprise Cyber-Obsidian & Electric Cyan Visual Architecture',
                  'Multi-Currency Switcher (INR ₹, USD $, EUR €, GBP £) with Live Rates',
                  'High-Value Wire Rail Simulator (IMPS, RTGS, NEFT, SWIFT OTP)',
                  'Corporate Virtual Cards Manager with Freeze/Limit Sliders',
                  '90-Day Predictive AI Cash Runway & Monte Carlo Engine',
                  'GST-Compliant Invoicing & Multi-Rail Receivables Pipeline',
                  'Banking & ERP Integrations Hub (Stripe, Razorpay, QuickBooks, Plaid)',
                  'Team Role-Based Access Control (RBAC) & Audit Logs Vault',
                  'Autonomous AI Financial Advisory & Anomaly Detection',
                  'Dedicated 24x7 Relationship Manager & Priority White-Glove SLA'
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* ===================== ABOUT ===================== */}
        {activeTab === 'about' && (
          <div className="space-y-6 pb-12 max-w-4xl mx-auto">
            <div className="space-y-2">
              <h1 className="text-2xl sm:text-3xl font-bold text-white">About FinFlow Enterprise Max</h1>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Institutional-grade financial infrastructure built for commercial giants, unicorn startups, and high-volume exporters.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="bg-slate-900/90 border border-slate-800 p-5 rounded-2xl text-center space-y-1">
                <div className="text-3xl font-black text-cyan-400 font-mono">₹8,500 Cr+</div>
                <div className="text-xs text-slate-300 font-semibold">Institutional Volume</div>
              </div>
              <div className="bg-slate-900/90 border border-slate-800 p-5 rounded-2xl text-center space-y-1">
                <div className="text-3xl font-black text-emerald-400 font-mono">99.999%</div>
                <div className="text-xs text-slate-300 font-semibold">Guaranteed SLA Uptime</div>
              </div>
              <div className="bg-slate-900/90 border border-slate-800 p-5 rounded-2xl text-center space-y-1">
                <div className="text-3xl font-black text-blue-400 font-mono">SOC2 Type II</div>
                <div className="text-xs text-slate-300 font-semibold">Continuous Compliance</div>
              </div>
            </div>
          </div>
        )}

        {/* ===================== CONTACT ===================== */}
        {activeTab === 'contact' && (
          <div className="space-y-6 pb-12 max-w-4xl mx-auto">
            <div className="space-y-2">
              <h1 className="text-2xl sm:text-3xl font-bold text-white">Priority Enterprise Inquiry</h1>
              <p className="text-xs sm:text-sm text-slate-300">
                Connect directly with a Senior VP of Treasury Solutions.
              </p>
            </div>

            <div className="bg-slate-900/90 border border-slate-800 p-6 sm:p-8 rounded-3xl shadow-2xl">
              {contactSubmitted ? (
                <div className="py-12 text-center space-y-3">
                  <div className="w-14 h-14 bg-cyan-950 text-cyan-400 border border-cyan-800 rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-lg font-bold text-white">Enterprise Priority Scheduled!</h3>
                  <p className="text-xs text-slate-400 max-w-sm mx-auto">
                    A dedicated VP of Treasury Solutions has been assigned to {contactForm.company || 'your organization'} and will initiate contact immediately.
                  </p>
                </div>
              ) : (
                <form onSubmit={(e) => { e.preventDefault(); setContactSubmitted(true); }} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-300 mb-1">Full Name *</label>
                      <input 
                        type="text"
                        required
                        value={contactForm.name}
                        onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
                        placeholder="e.g. Siddharth Mallya"
                        className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-2 text-xs text-white focus:outline-none focus:border-cyan-500"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-300 mb-1">Corporate Email *</label>
                      <input 
                        type="email"
                        required
                        value={contactForm.email}
                        onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
                        placeholder="siddharth@enterprise.com"
                        className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-2 text-xs text-white focus:outline-none focus:border-cyan-500"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-300 mb-1">Organization Name *</label>
                      <input 
                        type="text"
                        required
                        value={contactForm.company}
                        onChange={(e) => setContactForm({ ...contactForm, company: e.target.value })}
                        placeholder="e.g. Apex Global Logistics"
                        className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-2 text-xs text-white focus:outline-none focus:border-cyan-500"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-300 mb-1">Annual Turnover</label>
                      <select 
                        value={contactForm.turnover}
                        onChange={(e) => setContactForm({ ...contactForm, turnover: e.target.value })}
                        className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-cyan-500"
                      >
                        <option>₹10 Cr - ₹50 Cr</option>
                        <option>₹50 Cr - ₹200 Cr</option>
                        <option>₹200 Cr+</option>
                      </select>
                    </div>
                  </div>

                  <button 
                    type="submit"
                    className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-black py-2.5 rounded-xl text-xs transition-all shadow-lg shadow-cyan-500/20"
                  >
                    Request Enterprise Priority Setup
                  </button>
                </form>
              )}
            </div>
          </div>
        )}
      </main>

      {/* High-Value Wire Rail Modal */}
      {isWireModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-slate-900 border border-cyan-500/50 p-6 rounded-3xl max-w-sm w-full shadow-2xl space-y-4 animate-in fade-in zoom-in duration-200">
            <div className="flex justify-between items-center border-b border-slate-800 pb-3">
              <h3 className="font-bold text-base text-white flex items-center gap-2">
                <Zap className="w-4 h-4 text-cyan-400" /> High-Value Wire Dispatch
              </h3>
              <button 
                onClick={() => setIsWireModalOpen(false)}
                className="text-slate-400 hover:text-white text-xs font-bold"
              >
                ✕
              </button>
            </div>

            {wireStep === 'success' ? (
              <div className="py-6 text-center space-y-2">
                <div className="w-12 h-12 bg-cyan-950 text-cyan-400 border border-cyan-800 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-7 h-7" />
                </div>
                <h4 className="font-bold text-white text-sm">Wire Successfully Settled!</h4>
                <p className="text-xs text-slate-400">
                  {formatAmount(Number(wireAmount))} dispatched via {wireRail} rail to {wireRecipient}.
                </p>
              </div>
            ) : wireStep === 'otp' ? (
              <form onSubmit={handleOtpSubmit} className="space-y-3">
                <div className="p-3 bg-cyan-950/70 border border-cyan-800/60 rounded-xl text-xs text-cyan-200">
                  Dual-Auth Token generated for {formatAmount(Number(wireAmount))}. Enter 6-digit corporate token:
                </div>
                <div>
                  <input 
                    type="text"
                    required
                    maxLength={6}
                    value={wireOtp}
                    onChange={(e) => setWireOtp(e.target.value)}
                    placeholder="Enter OTP (e.g. 749201)"
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-center text-sm font-mono tracking-widest text-white focus:outline-none focus:border-cyan-500"
                  />
                </div>
                <button 
                  type="submit"
                  className="w-full bg-cyan-400 hover:bg-cyan-300 text-slate-950 font-black py-2 rounded-xl text-xs"
                >
                  Verify & Execute Wire
                </button>
              </form>
            ) : (
              <form onSubmit={handleWireSubmit} className="space-y-3">
                <div className="flex bg-slate-950 p-1 rounded-xl border border-slate-800 text-[11px] font-bold">
                  {(['IMPS', 'RTGS', 'NEFT', 'SWIFT'] as const).map((r) => (
                    <button
                      type="button"
                      key={r}
                      onClick={() => setWireRail(r)}
                      className={`flex-1 py-1 rounded-lg transition-all ${
                        wireRail === r ? 'bg-cyan-500 text-slate-950 font-black' : 'text-slate-400'
                      }`}
                    >
                      {r}
                    </button>
                  ))}
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">Beneficiary Legal Entity</label>
                  <input 
                    type="text"
                    required
                    value={wireRecipient}
                    onChange={(e) => setWireRecipient(e.target.value)}
                    placeholder="e.g. Amazon AWS Cloud Inc"
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-cyan-500"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">Disbursement Amount (INR ₹)</label>
                  <input 
                    type="number"
                    required
                    min="1"
                    value={wireAmount}
                    onChange={(e) => setWireAmount(e.target.value)}
                    placeholder="e.g. 2500000"
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-cyan-500"
                  />
                </div>
                <div className="flex gap-2 pt-2">
                  <button 
                    type="button"
                    onClick={() => setIsWireModalOpen(false)}
                    className="flex-1 bg-slate-800 text-slate-300 font-bold py-2 rounded-xl text-xs"
                  >
                    Cancel
                  </button>
                  <button 
                    type="submit"
                    className="flex-1 bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-black py-2 rounded-xl text-xs"
                  >
                    Authorize Wire
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}

      {/* Invoice Modal */}
      {isInvoiceModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-slate-900 border border-slate-800 p-6 rounded-3xl max-w-sm w-full shadow-2xl space-y-4 animate-in fade-in zoom-in duration-200">
            <div className="flex justify-between items-center border-b border-slate-800 pb-3">
              <h3 className="font-bold text-base text-white flex items-center gap-2">
                <Plus className="w-4 h-4 text-cyan-400" /> Generate Enterprise Invoice
              </h3>
              <button 
                onClick={() => setIsInvoiceModalOpen(false)}
                className="text-slate-400 hover:text-white text-xs font-bold"
              >
                ✕
              </button>
            </div>

            {invoiceSubmitted ? (
              <div className="py-6 text-center space-y-2">
                <div className="w-12 h-12 bg-cyan-950 text-cyan-400 border border-cyan-800 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-7 h-7" />
                </div>
                <h4 className="font-bold text-white text-sm">Invoice Created & Dispatched!</h4>
                <p className="text-xs text-slate-400">
                  GST invoice with embedded UPI & wire rails dispatched to client.
                </p>
              </div>
            ) : (
              <form onSubmit={handleCreateInvoice} className="space-y-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">Client Legal Name</label>
                  <input 
                    type="text"
                    required
                    value={newInvoice.client}
                    onChange={(e) => setNewInvoice({ ...newInvoice, client: e.target.value })}
                    placeholder="e.g. Acme Corporation"
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-cyan-500"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">Invoice Value (₹)</label>
                  <input 
                    type="number"
                    required
                    min="1"
                    value={newInvoice.amount}
                    onChange={(e) => setNewInvoice({ ...newInvoice, amount: e.target.value })}
                    placeholder="e.g. 750000"
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-cyan-500"
                  />
                </div>
                <div className="flex gap-2 pt-2">
                  <button 
                    type="button"
                    onClick={() => setIsInvoiceModalOpen(false)}
                    className="flex-1 bg-slate-800 text-slate-300 font-bold py-2 rounded-xl text-xs"
                  >
                    Cancel
                  </button>
                  <button 
                    type="submit"
                    className="flex-1 bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-black py-2 rounded-xl text-xs"
                  >
                    Issue Invoice
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
