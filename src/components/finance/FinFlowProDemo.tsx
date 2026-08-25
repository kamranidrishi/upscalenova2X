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
  MessageSquare
} from 'lucide-react';
import { DemoItem } from '../../data/demos';

interface FinFlowProDemoProps {
  demo: DemoItem;
  isMobile: boolean;
  isTablet: boolean;
}

export const FinFlowProDemo: React.FC<FinFlowProDemoProps> = ({ demo, isMobile, isTablet }) => {
  const [activeTab, setActiveTab] = useState<
    'home' | 'dashboard' | 'accounts' | 'transactions' | 'analytics' | 'reports' | 'services' | 'pricing' | 'about' | 'contact'
  >('home');

  const [selectedAccountId, setSelectedAccountId] = useState('acc-1');
  const [copiedAccount, setCopiedAccount] = useState<string | null>(null);
  const [txSearch, setTxSearch] = useState('');
  const [selectedTxFilter, setSelectedTxFilter] = useState('All');
  const [isTransferModalOpen, setIsTransferModalOpen] = useState(false);
  const [transferStep, setTransferStep] = useState<'input' | 'success'>('input');
  const [transferData, setTransferData] = useState({ recipient: '', amount: '', note: '' });
  
  // Export Report Modal
  const [isExportModalOpen, setIsExportModalOpen] = useState(false);
  const [exportSuccess, setExportSuccess] = useState(false);
  const [exportFormat, setExportFormat] = useState<'PDF' | 'CSV'>('PDF');

  // FAQ Expand state
  const [expandedFaq, setExpandedFaq] = useState<number | null>(0);

  // Contact Form
  const [contactSubmitted, setContactSubmitted] = useState(false);
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    date: 'Tomorrow, 2:00 PM',
    message: ''
  });

  // Accounts Data
  const accounts = [
    { id: 'acc-1', name: 'Primary Operating Account', type: 'Current', balance: '₹42,85,400.00', num: '**** **** 9482', ifsc: 'HDFC0004921', change: '+8.4% this mo', color: 'from-blue-600 to-indigo-700' },
    { id: 'acc-2', name: 'Tax & GST Escrow Vault', type: 'Reserve', balance: '₹11,20,000.00', num: '**** **** 3109', ifsc: 'HDFC0004922', change: 'Locked for Q2', color: 'from-emerald-600 to-teal-700' },
    { id: 'acc-3', name: 'Payroll & Benefits Reserve', type: 'Payroll', balance: '₹18,50,000.00', num: '**** **** 7741', ifsc: 'HDFC0004923', change: 'Next cycle 1st Sept', color: 'from-amber-600 to-orange-700' },
    { id: 'acc-4', name: 'Global Wire USD Treasury', type: 'Foreign Currency', balance: '$34,200.00', num: 'SWIFT: HDFCINBB', ifsc: 'US-WIRE', change: 'FX Hedged @ 83.4', color: 'from-cyan-600 to-blue-700' },
  ];

  const currentAccount = accounts.find(a => a.id === selectedAccountId) || accounts[0];

  // Transactions Data
  const initialTransactions = [
    { id: 'TX-8921', name: 'Stripe Global Gateway Payout', category: 'Revenue', date: 'Today, 2:15 PM', amount: '+₹2,45,000', status: 'Cleared', type: 'inflow' },
    { id: 'TX-8920', name: 'AWS Cloud Infrastructure P99', category: 'Software', date: 'Today, 11:30 AM', amount: '-₹18,450', status: 'Cleared', type: 'outflow' },
    { id: 'TX-8919', name: 'Engineering Team August Stipends', category: 'Payroll', date: 'Yesterday, 6:00 PM', amount: '-₹3,80,000', status: 'Cleared', type: 'outflow' },
    { id: 'TX-8918', name: 'Nova Marketing Retainer Inward', category: 'Revenue', date: '20 Aug, 10:45 AM', amount: '+₹1,80,000', status: 'Cleared', type: 'inflow' },
    { id: 'TX-8917', name: 'Google Ads Performance Spend', category: 'Marketing', date: '19 Aug, 4:20 PM', amount: '-₹45,000', status: 'Cleared', type: 'outflow' },
    { id: 'TX-8916', name: 'Quarterly Advance Tax Payment', category: 'Tax', date: '18 Aug, 1:10 PM', amount: '-₹75,000', status: 'Cleared', type: 'outflow' },
    { id: 'TX-8915', name: 'SaaS Client Annual License (Apex)', category: 'Revenue', date: '17 Aug, 3:00 PM', amount: '+₹4,50,000', status: 'Cleared', type: 'inflow' }
  ];

  const filteredTransactions = initialTransactions.filter(tx => {
    const matchesSearch = tx.name.toLowerCase().includes(txSearch.toLowerCase()) || tx.id.toLowerCase().includes(txSearch.toLowerCase());
    const matchesFilter = selectedTxFilter === 'All' || tx.category === selectedTxFilter;
    return matchesSearch && matchesFilter;
  });

  const handleCopyAccount = (num: string) => {
    navigator.clipboard?.writeText(num);
    setCopiedAccount(num);
    setTimeout(() => setCopiedAccount(null), 2000);
  };

  const handleTransfer = (e: React.FormEvent) => {
    e.preventDefault();
    if (!transferData.amount || !transferData.recipient) return;
    setTransferStep('success');
    setTimeout(() => {
      setTransferStep('input');
      setIsTransferModalOpen(false);
      setTransferData({ recipient: '', amount: '', note: '' });
    }, 2000);
  };

  const handleExport = () => {
    setExportSuccess(true);
    setTimeout(() => {
      setExportSuccess(false);
      setIsExportModalOpen(false);
    }, 2000);
  };

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setContactSubmitted(true);
    setTimeout(() => {
      setContactSubmitted(false);
      setContactForm({
        name: '',
        email: '',
        phone: '',
        company: '',
        date: 'Tomorrow, 2:00 PM',
        message: ''
      });
    }, 3500);
  };

  return (
    <div className="w-full min-h-full bg-[#0b132b] text-slate-100 flex flex-col font-sans custom-scrollbar">
      {/* Top Header */}
      <header className="sticky top-0 z-30 bg-[#0b132b]/95 backdrop-blur-md border-b border-slate-800 px-4 sm:px-6 py-3 flex items-center justify-between shadow-lg shrink-0">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-blue-600 to-cyan-400 text-white flex items-center justify-center font-black text-lg shadow-md shadow-blue-500/20">
            <PieChart className="w-5 h-5 text-white" />
          </div>
          <div>
            <div className="font-extrabold text-base tracking-tight text-white flex items-center gap-2">
              FinFlow <span className="text-cyan-400 font-bold text-xs px-2 py-0.5 bg-cyan-950/80 rounded-md border border-cyan-800/60">PRO SaaS</span>
            </div>
            <p className="text-[10px] text-slate-400 font-medium">Business Finance & Treasury Platform</p>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-1 text-xs font-semibold text-slate-400">
          {(['home', 'dashboard', 'accounts', 'transactions', 'analytics', 'reports', 'services', 'pricing', 'about', 'contact'] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-3 py-1.5 rounded-lg capitalize transition-all ${
                activeTab === tab
                  ? 'bg-blue-600/30 text-cyan-300 font-bold border border-blue-500/40 shadow-xs'
                  : 'hover:text-white hover:bg-slate-800/60'
              }`}
            >
              {tab}
            </button>
          ))}
        </nav>

        {/* Action Buttons */}
        <div className="flex items-center gap-2">
          <button 
            onClick={() => setIsExportModalOpen(true)}
            className="hidden sm:flex items-center gap-1.5 bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 px-3 py-1.5 rounded-xl text-xs font-semibold transition-colors"
          >
            <Download className="w-3.5 h-3.5 text-cyan-400" /> Export Report
          </button>
          <button 
            onClick={() => setIsTransferModalOpen(true)}
            className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white px-3.5 py-1.5 rounded-xl text-xs font-bold flex items-center gap-1.5 shadow-md shadow-blue-600/20 transition-all"
          >
            <Send className="w-3.5 h-3.5" /> Transfer Funds
          </button>
        </div>
      </header>

      {/* Sub Nav for mobile/tablet */}
      <div className="lg:hidden flex items-center bg-[#0e1938] border-b border-slate-800 px-2 py-2 overflow-x-auto gap-1 text-xs">
        {(['home', 'dashboard', 'accounts', 'transactions', 'analytics', 'reports', 'services', 'pricing', 'about', 'contact'] as const).map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-2.5 py-1 rounded-lg capitalize whitespace-nowrap text-[11px] font-medium transition-all ${
              activeTab === tab ? 'bg-blue-600 text-white font-bold' : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* MAIN CONTAINER */}
      <main className="flex-1 p-4 sm:p-6 max-w-7xl mx-auto w-full space-y-6">

        {/* ===================== HOME VIEW ===================== */}
        {activeTab === 'home' && (
          <div className="space-y-8 pb-12">
            {/* Hero Section */}
            <div className="relative rounded-3xl bg-gradient-to-br from-[#0e1938] via-[#0d1730] to-[#0b132b] border border-blue-500/30 p-6 sm:p-10 shadow-2xl overflow-hidden">
              <div className="max-w-3xl space-y-4 relative z-10">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-950/80 border border-blue-700/60 text-cyan-300 text-xs font-mono">
                  <Sparkles className="w-3.5 h-3.5 text-cyan-400" /> ₹34,999 Pro Financial SaaS Platform
                </div>
                <h1 className="text-2xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
                  Next-Gen Treasury & Financial Operations for Growing SaaS
                </h1>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-2xl">
                  Centralize operating accounts, escrow reserves, and international wires into one dark-mode command center. Analyze real-time cash velocity, reconcile taxes, and export audit-ready reports.
                </p>

                <div className="flex flex-wrap items-center gap-3 pt-2">
                  <button 
                    onClick={() => setActiveTab('dashboard')}
                    className="bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-slate-950 font-black px-5 py-2.5 rounded-xl text-xs flex items-center gap-2 shadow-lg shadow-blue-600/30 transition-all"
                  >
                    Launch Pro Dashboard <ArrowRight className="w-4 h-4" />
                  </button>
                  <button 
                    onClick={() => setIsTransferModalOpen(true)}
                    className="bg-slate-900/80 hover:bg-slate-800 text-slate-200 border border-slate-700 font-bold px-5 py-2.5 rounded-xl text-xs flex items-center gap-1.5 transition-colors"
                  >
                    <Send className="w-3.5 h-3.5 text-cyan-400" /> Simulate Funds Transfer
                  </button>
                </div>
              </div>

              {/* Decorative Background Element */}
              <div className="absolute right-0 top-0 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
            </div>

            {/* Quick Metrics Bar */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { label: 'Active Treasury Balance', val: '₹72,55,400', sub: 'Across 4 Accounts', color: 'text-cyan-400' },
                { label: 'Monthly Net Velocity', val: '+₹6,26,550', sub: '22% Margin Surge', color: 'text-emerald-400' },
                { label: 'Runway Forecast', val: '18.4 Months', sub: 'Safe Operating Buffer', color: 'text-blue-400' },
                { label: 'TDS Input Credit', val: '₹84,500', sub: 'Form 26AS Matched', color: 'text-amber-400' },
              ].map((m, i) => (
                <div key={i} className="bg-slate-900/90 border border-slate-800 p-5 rounded-2xl space-y-1">
                  <div className="text-[11px] text-slate-400 font-semibold">{m.label}</div>
                  <div className={`text-xl sm:text-2xl font-black font-mono ${m.color}`}>{m.val}</div>
                  <div className="text-[10px] text-slate-500 font-medium">{m.sub}</div>
                </div>
              ))}
            </div>

            {/* Feature Spotlight Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-slate-900/90 border border-slate-800 p-6 rounded-3xl space-y-3">
                <div className="w-10 h-10 rounded-2xl bg-blue-600/20 text-cyan-400 border border-blue-500/30 flex items-center justify-center">
                  <Layers className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-white">Multi-Account Vaults</h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Isolate capital into Operating, Escrow, Payroll, and Global USD Wires with automated rule-based distribution.
                </p>
                <button onClick={() => setActiveTab('accounts')} className="text-xs text-cyan-400 font-bold flex items-center gap-1 pt-1">
                  Explore Accounts <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>

              <div className="bg-slate-900/90 border border-slate-800 p-6 rounded-3xl space-y-3">
                <div className="w-10 h-10 rounded-2xl bg-cyan-600/20 text-cyan-400 border border-cyan-500/30 flex items-center justify-center">
                  <BarChart3 className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-white">Live Cash Analytics</h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Interactive cash velocity charts, category-based expense distributions, and automated burn rate calculations.
                </p>
                <button onClick={() => setActiveTab('analytics')} className="text-xs text-cyan-400 font-bold flex items-center gap-1 pt-1">
                  View Analytics <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>

              <div className="bg-slate-900/90 border border-slate-800 p-6 rounded-3xl space-y-3">
                <div className="w-10 h-10 rounded-2xl bg-emerald-600/20 text-emerald-400 border border-emerald-500/30 flex items-center justify-center">
                  <FileText className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-white">Exportable Audit Reports</h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  One-click export of monthly GST summaries, profit & loss statements, and full-year transaction ledgers in PDF and CSV.
                </p>
                <button onClick={() => setActiveTab('reports')} className="text-xs text-emerald-400 font-bold flex items-center gap-1 pt-1">
                  View Reports <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        )}

        {/* ===================== DASHBOARD VIEW ===================== */}
        {activeTab === 'dashboard' && (
          <div className="space-y-6 pb-12">
            {/* Account Switcher Bar */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 bg-slate-900/80 border border-slate-800 p-4 rounded-2xl">
              <div>
                <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider">Active Treasury Account</span>
                <h2 className="text-xl font-extrabold text-white flex items-center gap-2 mt-0.5">
                  {currentAccount.name}
                  <span className="text-[10px] font-mono font-normal px-2 py-0.5 bg-slate-800 text-slate-300 rounded border border-slate-700">
                    {currentAccount.type}
                  </span>
                </h2>
              </div>

              {/* Selector Pills */}
              <div className="flex flex-wrap gap-2">
                {accounts.map((acc) => (
                  <button
                    key={acc.id}
                    onClick={() => setSelectedAccountId(acc.id)}
                    className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                      selectedAccountId === acc.id
                        ? 'bg-blue-600 text-white shadow-md shadow-blue-600/30'
                        : 'bg-slate-800/80 text-slate-400 hover:text-white hover:bg-slate-800'
                    }`}
                  >
                    {acc.name.split(' ')[0]}
                  </button>
                ))}
              </div>
            </div>

            {/* KPI Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {/* Primary Balance Widget */}
              <div className={`p-6 rounded-3xl bg-gradient-to-br ${currentAccount.color} text-white md:col-span-2 relative overflow-hidden shadow-xl shadow-blue-900/20`}>
                <div className="flex justify-between items-start">
                  <div>
                    <div className="text-xs font-medium text-white/80">Total Realized Liquidity</div>
                    <div className="text-3xl sm:text-4xl font-black tracking-tight mt-1">{currentAccount.balance}</div>
                  </div>
                  <div className="bg-white/15 backdrop-blur-md px-2.5 py-1 rounded-lg text-xs font-bold flex items-center gap-1 border border-white/20">
                    <TrendingUp className="w-3.5 h-3.5" /> {currentAccount.change}
                  </div>
                </div>

                <div className="mt-8 pt-4 border-t border-white/20 flex flex-wrap justify-between items-center text-xs gap-3 font-mono">
                  <div className="flex items-center gap-2">
                    <span>{currentAccount.num}</span>
                    <button 
                      onClick={() => handleCopyAccount(currentAccount.num)}
                      className="p-1 hover:bg-white/20 rounded transition-colors text-[10px]"
                      title="Copy Account Info"
                    >
                      {copiedAccount === currentAccount.num ? <Check className="w-3.5 h-3.5 text-emerald-300" /> : <Copy className="w-3.5 h-3.5" />}
                    </button>
                  </div>
                  <div className="text-white/80 font-sans text-[11px]">IFSC: <span className="font-mono font-bold">{currentAccount.ifsc}</span></div>
                </div>
              </div>

              {/* Monthly Velocity Card */}
              <div className="bg-slate-900/90 border border-slate-800 p-6 rounded-3xl flex flex-col justify-between space-y-4">
                <div>
                  <div className="text-xs text-slate-400 font-semibold flex items-center justify-between">
                    <span>Monthly Cash Inflow</span>
                    <span className="text-[10px] text-emerald-400 font-bold">+22%</span>
                  </div>
                  <div className="text-2xl font-extrabold text-emerald-400 mt-1">+₹8,75,000</div>
                </div>

                <div className="pt-3 border-t border-slate-800">
                  <div className="text-xs text-slate-400 font-semibold flex items-center justify-between">
                    <span>Monthly Burn & Outflow</span>
                    <span className="text-[10px] text-rose-400 font-bold">-₹2,48,450</span>
                  </div>
                  <div className="text-2xl font-extrabold text-rose-400 mt-1">₹6,26,550 Net</div>
                </div>

                <div className="bg-slate-950/80 p-2.5 rounded-xl border border-slate-800 text-[11px] text-slate-400 flex items-center justify-between">
                  <span>Runway Projection</span>
                  <span className="font-bold text-cyan-400">18.4 Months</span>
                </div>
              </div>
            </div>

            {/* Income vs Expense & Categories */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
              {/* Cash Flow Visualizer */}
              <div className="lg:col-span-7 bg-slate-900/90 border border-slate-800 p-5 rounded-3xl space-y-4">
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="font-bold text-base text-white">Cash Velocity & Inflow</h3>
                    <p className="text-xs text-slate-400">Net revenue vs operational expenses (Last 6 Months)</p>
                  </div>
                  <span className="text-xs text-cyan-400 bg-cyan-950/60 border border-cyan-800/60 px-2.5 py-1 rounded-lg font-semibold">
                    Q2 Verified
                  </span>
                </div>

                {/* Simulated Chart Bars */}
                <div className="space-y-3 pt-2">
                  {[
                    { month: 'Mar', in: 85, out: 30, inVal: '₹6.8L', outVal: '₹2.4L' },
                    { month: 'Apr', in: 95, out: 40, inVal: '₹7.6L', outVal: '₹3.2L' },
                    { month: 'May', in: 70, out: 25, inVal: '₹5.6L', outVal: '₹2.0L' },
                    { month: 'Jun', in: 90, out: 35, inVal: '₹7.2L', outVal: '₹2.8L' },
                    { month: 'Jul', in: 100, out: 32, inVal: '₹8.0L', outVal: '₹2.5L' },
                    { month: 'Aug (Current)', in: 110, out: 38, inVal: '₹8.8L', outVal: '₹3.0L' },
                  ].map((row, idx) => (
                    <div key={idx} className="space-y-1">
                      <div className="flex justify-between text-[11px]">
                        <span className="text-slate-300 font-semibold">{row.month}</span>
                        <span className="text-slate-400 font-mono text-[10px]">In: <b className="text-emerald-400">{row.inVal}</b> | Out: <b className="text-rose-400">{row.outVal}</b></span>
                      </div>
                      <div className="flex items-center gap-1.5 h-3 bg-slate-950 rounded-full overflow-hidden p-0.5 border border-slate-800">
                        <div className="h-full bg-emerald-500 rounded-full transition-all" style={{ width: `${(row.in / 150) * 100}%` }} />
                        <div className="h-full bg-rose-500 rounded-full transition-all" style={{ width: `${(row.out / 150) * 100}%` }} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Expense Category Breakdown & AI Insight */}
              <div className="lg:col-span-5 space-y-4">
                <div className="bg-slate-900/90 border border-slate-800 p-5 rounded-3xl space-y-3">
                  <h3 className="font-bold text-sm text-white">Expense Distribution</h3>
                  <div className="space-y-2.5">
                    {[
                      { label: 'Engineering & Payroll', pct: 44, amt: '₹1.10L', color: 'bg-blue-500' },
                      { label: 'Cloud Infrastructure & SaaS', pct: 24, amt: '₹60K', color: 'bg-cyan-500' },
                      { label: 'Paid Marketing & Growth', pct: 18, amt: '₹45K', color: 'bg-indigo-500' },
                      { label: 'Tax Reserves & GST', pct: 14, amt: '₹35K', color: 'bg-emerald-500' },
                    ].map((c, i) => (
                      <div key={i} className="space-y-1">
                        <div className="flex justify-between text-[11px] text-slate-300">
                          <span>{c.label}</span>
                          <span className="font-mono text-slate-400">{c.pct}% ({c.amt})</span>
                        </div>
                        <div className="h-2 bg-slate-950 rounded-full overflow-hidden">
                          <div className={`h-full ${c.color}`} style={{ width: `${c.pct}%` }} />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* AI Financial Insights Widget */}
                <div className="bg-gradient-to-br from-indigo-950/70 to-blue-950/70 border border-indigo-500/30 p-5 rounded-3xl space-y-2.5">
                  <div className="flex items-center gap-2 text-cyan-300 text-xs font-bold">
                    <Sparkles className="w-4 h-4 text-cyan-400" /> FinFlow Intelligent Advisory
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Automated tax scan detected ₹42,000 potential TDS input credit for August vendor payments.
                  </p>
                  <button 
                    onClick={() => setActiveTab('reports')}
                    className="text-[11px] text-cyan-400 hover:text-cyan-300 font-bold flex items-center gap-1 pt-1"
                  >
                    View Tax Reconciliation Report <ChevronRight className="w-3 h-3" />
                  </button>
                </div>
              </div>
            </div>

            {/* Transactions Section with Search & Filter */}
            <div className="bg-slate-900/90 border border-slate-800 rounded-3xl p-5 space-y-4">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <div>
                  <h3 className="font-bold text-base text-white">Live Transactions Activity</h3>
                  <p className="text-xs text-slate-400">Searchable ledger with instant status verification</p>
                </div>

                <div className="flex flex-wrap items-center gap-2 w-full sm:w-auto">
                  <div className="relative flex-1 sm:w-48">
                    <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                    <input 
                      type="text"
                      value={txSearch}
                      onChange={(e) => setTxSearch(e.target.value)}
                      placeholder="Search payee or ID..."
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl pl-8 pr-3 py-1.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-blue-500"
                    />
                  </div>

                  <select
                    value={selectedTxFilter}
                    onChange={(e) => setSelectedTxFilter(e.target.value)}
                    className="bg-slate-950 border border-slate-800 text-slate-300 text-xs rounded-xl px-2.5 py-1.5 focus:outline-none focus:border-blue-500"
                  >
                    <option>All</option>
                    <option>Revenue</option>
                    <option>Software</option>
                    <option>Payroll</option>
                    <option>Marketing</option>
                    <option>Tax</option>
                  </select>
                </div>
              </div>

              {/* Transactions List */}
              <div className="divide-y divide-slate-800/80">
                {filteredTransactions.length === 0 ? (
                  <div className="py-8 text-center text-xs text-slate-500">No transactions match your search filter.</div>
                ) : (
                  filteredTransactions.map((tx) => (
                    <div key={tx.id} className="py-3.5 flex items-center justify-between hover:bg-slate-800/30 px-2 rounded-xl transition-colors">
                      <div className="flex items-center gap-3">
                        <div className={`w-8 h-8 rounded-lg flex items-center justify-center text-xs font-bold ${
                          tx.type === 'inflow' ? 'bg-emerald-950/80 text-emerald-400 border border-emerald-800/50' : 'bg-rose-950/80 text-rose-400 border border-rose-800/50'
                        }`}>
                          {tx.type === 'inflow' ? <ArrowDownLeft className="w-4 h-4" /> : <ArrowUpRight className="w-4 h-4" />}
                        </div>
                        <div>
                          <div className="text-xs sm:text-sm font-bold text-white">{tx.name}</div>
                          <div className="text-[10px] text-slate-400 font-mono flex items-center gap-2">
                            <span>{tx.id}</span>
                            <span>•</span>
                            <span>{tx.date}</span>
                            <span className="px-1.5 py-0.5 rounded bg-slate-800 text-cyan-300 font-sans">{tx.category}</span>
                          </div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className={`text-xs sm:text-sm font-black font-mono ${tx.type === 'inflow' ? 'text-emerald-400' : 'text-slate-200'}`}>
                          {tx.amount}
                        </div>
                        <div className="text-[10px] text-emerald-500 font-medium flex items-center justify-end gap-1">
                          <CheckCircle2 className="w-3 h-3" /> {tx.status}
                        </div>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </div>
          </div>
        )}

        {/* ===================== ACCOUNTS VIEW ===================== */}
        {activeTab === 'accounts' && (
          <div className="space-y-6 pb-12">
            <div className="flex justify-between items-center">
              <div>
                <h1 className="text-2xl font-bold text-white">Multi-Account Portfolio</h1>
                <p className="text-xs text-slate-400">Manage all operating sub-accounts, tax escrow, and foreign currency wires</p>
              </div>
              <button 
                onClick={() => setIsTransferModalOpen(true)}
                className="bg-blue-600 hover:bg-blue-500 text-white font-bold px-4 py-2 rounded-xl text-xs flex items-center gap-1.5 transition-colors"
              >
                <Send className="w-3.5 h-3.5" /> Transfer Between Accounts
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {accounts.map((acc) => (
                <div key={acc.id} className="bg-slate-900/90 border border-slate-800 p-6 rounded-3xl space-y-4 hover:border-slate-700 transition-all">
                  <div className="flex justify-between items-start">
                    <div>
                      <span className="text-[10px] font-bold text-cyan-400 px-2 py-0.5 bg-cyan-950/70 border border-cyan-800/60 rounded">
                        {acc.type}
                      </span>
                      <h3 className="text-base font-bold text-white mt-1.5">{acc.name}</h3>
                    </div>
                    <div className="text-xl font-black text-white font-mono">{acc.balance}</div>
                  </div>

                  <div className="bg-slate-950 p-3 rounded-2xl border border-slate-800 text-xs font-mono flex justify-between items-center text-slate-300">
                    <div>
                      <div>Account: {acc.num}</div>
                      <div className="text-[10px] text-slate-500">IFSC/SWIFT: {acc.ifsc}</div>
                    </div>
                    <button 
                      onClick={() => handleCopyAccount(acc.num)}
                      className="px-2.5 py-1 bg-slate-800 hover:bg-slate-700 text-slate-200 rounded-lg text-[10px] font-sans font-semibold flex items-center gap-1"
                    >
                      {copiedAccount === acc.num ? 'Copied!' : 'Copy'}
                    </button>
                  </div>

                  <div className="flex justify-between text-xs text-slate-400 pt-1">
                    <span>Status: <b className="text-emerald-400">Active & Verified</b></span>
                    <span>{acc.change}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ===================== TRANSACTIONS VIEW ===================== */}
        {activeTab === 'transactions' && (
          <div className="space-y-6 pb-12">
            <div className="flex justify-between items-center">
              <div>
                <h1 className="text-2xl font-bold text-white">Full Transaction Ledger</h1>
                <p className="text-xs text-slate-400">Complete audit trail of inward client receivables and outbound vendor payouts</p>
              </div>
              <button 
                onClick={() => setIsExportModalOpen(true)}
                className="bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 px-3.5 py-2 rounded-xl text-xs font-semibold flex items-center gap-1.5"
              >
                <Download className="w-3.5 h-3.5 text-cyan-400" /> Export CSV
              </button>
            </div>

            <div className="bg-slate-900/90 border border-slate-800 rounded-3xl p-5 space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-12 gap-3">
                <div className="sm:col-span-8 relative">
                  <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                  <input 
                    type="text"
                    value={txSearch}
                    onChange={(e) => setTxSearch(e.target.value)}
                    placeholder="Search by vendor, reference ID, or amount..."
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl pl-9 pr-3 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-blue-500"
                  />
                </div>
                <div className="sm:col-span-4 flex gap-2">
                  <select 
                    value={selectedTxFilter}
                    onChange={(e) => setSelectedTxFilter(e.target.value)}
                    className="w-full bg-slate-950 border border-slate-800 text-slate-300 text-xs rounded-xl px-3 py-2 focus:outline-none focus:border-blue-500"
                  >
                    <option>All Categories</option>
                    <option>Revenue</option>
                    <option>Software</option>
                    <option>Payroll</option>
                    <option>Marketing</option>
                    <option>Tax</option>
                  </select>
                </div>
              </div>

              <div className="divide-y divide-slate-800/80">
                {filteredTransactions.map((tx) => (
                  <div key={tx.id} className="py-3.5 flex items-center justify-between hover:bg-slate-800/30 px-3 rounded-xl transition-colors">
                    <div className="flex items-center gap-3">
                      <div className={`w-8 h-8 rounded-lg flex items-center justify-center text-xs font-bold ${
                        tx.type === 'inflow' ? 'bg-emerald-950/80 text-emerald-400 border border-emerald-800/50' : 'bg-rose-950/80 text-rose-400 border border-rose-800/50'
                      }`}>
                        {tx.type === 'inflow' ? <ArrowDownLeft className="w-4 h-4" /> : <ArrowUpRight className="w-4 h-4" />}
                      </div>
                      <div>
                        <div className="text-xs sm:text-sm font-bold text-white">{tx.name}</div>
                        <div className="text-[10px] text-slate-400 font-mono flex items-center gap-2">
                          <span>{tx.id}</span>
                          <span>•</span>
                          <span>{tx.date}</span>
                          <span className="px-1.5 py-0.5 rounded bg-slate-800 text-cyan-300 font-sans">{tx.category}</span>
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className={`text-xs sm:text-sm font-black font-mono ${tx.type === 'inflow' ? 'text-emerald-400' : 'text-slate-200'}`}>
                        {tx.amount}
                      </div>
                      <div className="text-[10px] text-emerald-400 font-medium">Verified Cleared</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* ===================== ANALYTICS VIEW ===================== */}
        {activeTab === 'analytics' && (
          <div className="space-y-6 pb-12">
            <div className="space-y-1">
              <h1 className="text-2xl font-bold text-white">Financial Analytics & Intelligence</h1>
              <p className="text-xs text-slate-400">Granular insights into recurring SaaS commitments, margins, and operational runway</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="bg-slate-900/90 border border-slate-800 p-5 rounded-2xl space-y-1">
                <div className="text-xs text-slate-400">Net Gross Margin</div>
                <div className="text-2xl font-extrabold text-cyan-400">71.8%</div>
                <div className="text-[10px] text-emerald-400">+4.2% from last quarter</div>
              </div>
              <div className="bg-slate-900/90 border border-slate-800 p-5 rounded-2xl space-y-1">
                <div className="text-xs text-slate-400">Average Daily Burn</div>
                <div className="text-2xl font-extrabold text-white font-mono">₹11,400</div>
                <div className="text-[10px] text-slate-400">Optimized for growth</div>
              </div>
              <div className="bg-slate-900/90 border border-slate-800 p-5 rounded-2xl space-y-1">
                <div className="text-xs text-slate-400">Receivables Aging (DSO)</div>
                <div className="text-2xl font-extrabold text-emerald-400">14.2 Days</div>
                <div className="text-[10px] text-emerald-400">Industry leading speed</div>
              </div>
              <div className="bg-slate-900/90 border border-slate-800 p-5 rounded-2xl space-y-1">
                <div className="text-xs text-slate-400">TDS Recoverable</div>
                <div className="text-2xl font-extrabold text-amber-400 font-mono">₹84,500</div>
                <div className="text-[10px] text-slate-400">Form 26AS matched</div>
              </div>
            </div>

            {/* Deep Breakdown Card */}
            <div className="bg-slate-900/90 border border-slate-800 p-6 rounded-3xl space-y-4">
              <h3 className="font-bold text-base text-white">Projected 6-Month Cash Curve</h3>
              <div className="h-40 bg-slate-950 rounded-2xl p-4 flex items-end justify-between gap-3 border border-slate-800">
                {[
                  { month: 'Sep', val: '45L', height: '60%' },
                  { month: 'Oct', val: '52L', height: '70%' },
                  { month: 'Nov', val: '61L', height: '82%' },
                  { month: 'Dec', val: '58L', height: '78%' },
                  { month: 'Jan', val: '69L', height: '90%' },
                  { month: 'Feb', val: '78L', height: '100%' },
                ].map((item, idx) => (
                  <div key={idx} className="flex-1 flex flex-col items-center gap-2 h-full justify-end">
                    <span className="text-[10px] font-mono text-cyan-300 font-bold">{item.val}</span>
                    <div 
                      className="w-full bg-gradient-to-t from-blue-600 to-cyan-400 rounded-t-lg transition-all"
                      style={{ height: item.height }}
                    />
                    <span className="text-[11px] text-slate-400 font-semibold">{item.month}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* ===================== REPORTS VIEW ===================== */}
        {activeTab === 'reports' && (
          <div className="space-y-6 pb-12">
            <div className="flex justify-between items-center">
              <div>
                <h1 className="text-2xl font-bold text-white">Financial Reports & Statements</h1>
                <p className="text-xs text-slate-400">Audited P&L statements, monthly GST summaries, and ledger downloads</p>
              </div>
              <button 
                onClick={() => setIsExportModalOpen(true)}
                className="bg-blue-600 hover:bg-blue-500 text-white font-bold px-4 py-2 rounded-xl text-xs flex items-center gap-1.5 transition-colors"
              >
                <Download className="w-3.5 h-3.5" /> Download Tax Pack
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                { title: 'Profit & Loss Statement (Q2)', size: '2.4 MB', date: 'Generated 20 Aug', type: 'PDF' },
                { title: 'Monthly GST Output/Input Summary', size: '1.1 MB', date: 'Generated 15 Aug', type: 'Excel' },
                { title: 'Full Year Ledger Journal (FY 2025-26)', size: '5.8 MB', date: 'Generated 10 Aug', type: 'CSV' },
                { title: 'TDS Deduction & Reconciliation', size: '850 KB', date: 'Generated 05 Aug', type: 'PDF' },
                { title: 'Vendor Payout Disbursement Log', size: '3.2 MB', date: 'Generated 01 Aug', type: 'CSV' },
                { title: 'Bank Reconciliation Certificate', size: '640 KB', date: 'Generated 28 Jul', type: 'PDF' },
              ].map((rep, idx) => (
                <div key={idx} className="bg-slate-900/90 border border-slate-800 p-5 rounded-2xl space-y-3 hover:border-slate-700 transition-all">
                  <div className="flex justify-between items-start">
                    <div className="w-9 h-9 rounded-xl bg-blue-950 text-cyan-400 border border-blue-800/60 flex items-center justify-center font-bold text-xs">
                      <FileText className="w-4 h-4" />
                    </div>
                    <span className="text-[10px] font-mono px-2 py-0.5 bg-slate-800 text-slate-300 rounded">
                      {rep.type}
                    </span>
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-white">{rep.title}</h3>
                    <p className="text-[10px] text-slate-400 mt-0.5">{rep.date} • {rep.size}</p>
                  </div>
                  <button 
                    onClick={() => setIsExportModalOpen(true)}
                    className="w-full bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold py-1.5 rounded-xl text-xs flex items-center justify-center gap-1 transition-colors"
                  >
                    <Download className="w-3 h-3" /> Download Document
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ===================== SERVICES VIEW ===================== */}
        {activeTab === 'services' && (
          <div className="space-y-6 pb-12">
            <div className="space-y-1">
              <h1 className="text-2xl font-bold text-white">Pro SaaS Services Suite</h1>
              <p className="text-xs text-slate-400">Advanced treasury features tailored for multi-founder startups and scaling companies</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { title: 'Multi-Account Treasury', desc: 'Separate capital for operating expenses, tax escrow, and payroll with automated balancing rules.', icon: Layers },
                { title: 'Global USD Wire Rails', desc: 'Accept international payments via SWIFT and ACH with favorable FX hedge conversion rates.', icon: Globe },
                { title: 'Live Searchable Ledger', desc: 'Instant filtering by payee, category, and reference ID with exportable audit logs.', icon: Search },
                { title: 'Predictive Runway Engine', desc: 'AI-assisted cashflow projections modeling upcoming receivables vs burn rate.', icon: TrendingUp },
              ].map((s, idx) => {
                const Icon = s.icon;
                return (
                  <div key={idx} className="bg-slate-900/90 border border-slate-800 p-6 rounded-3xl space-y-3">
                    <div className="w-10 h-10 rounded-2xl bg-blue-600/20 text-cyan-400 border border-blue-500/30 flex items-center justify-center">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-base font-bold text-white">{s.title}</h3>
                    <p className="text-xs text-slate-300 leading-relaxed">{s.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* ===================== PRICING VIEW ===================== */}
        {activeTab === 'pricing' && (
          <div className="space-y-6 pb-12 max-w-4xl mx-auto">
            <div className="text-center space-y-2">
              <span className="px-3 py-1 bg-cyan-950 text-cyan-400 border border-cyan-800 text-xs font-bold rounded-full">
                Pro Plan Overview
              </span>
              <h1 className="text-3xl font-extrabold text-white">FinFlow Pro SaaS Package</h1>
              <p className="text-xs text-slate-400">Everything needed to run high-growth business finances with dedicated multi-account controls</p>
            </div>

            <div className="bg-gradient-to-b from-slate-900 to-[#0c1633] border-2 border-cyan-500/60 p-6 sm:p-8 rounded-3xl shadow-2xl shadow-cyan-500/10 space-y-6">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-b border-slate-800 pb-6">
                <div>
                  <div className="text-xs text-cyan-400 font-bold uppercase tracking-wider">Most Popular For Scaling SaaS</div>
                  <h3 className="text-2xl font-black text-white mt-1">₹34,999 All-Inclusive</h3>
                  <p className="text-xs text-slate-400">Complete multi-account dashboard, cashflow analytics, and report export engine</p>
                </div>
                <button 
                  onClick={() => setActiveTab('contact')}
                  className="bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-slate-950 font-black px-6 py-2.5 rounded-xl text-xs transition-all shadow-md"
                >
                  Schedule Pro Onboarding
                </button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-slate-300">
                {[
                  'Dark Navy Premium FinTech Theme',
                  'Multi-Account Switcher (Operating, Escrow, Payroll, USD)',
                  'Live Searchable & Filterable Transactions Ledger',
                  'Interactive Income vs Outflow Cash Velocity Charts',
                  'Category-Based Expense Distribution Visualizer',
                  'Exportable Audit Reports (PDF, Excel, CSV)',
                  'AI Anomaly & Tax Reconciliation Advisor',
                  'Simulated Funds Transfer Engine with Live Feedback',
                  'Interactive Schedule Consultation Desk'
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

        {/* ===================== ABOUT VIEW ===================== */}
        {activeTab === 'about' && (
          <div className="space-y-6 pb-12 max-w-4xl mx-auto">
            <div className="space-y-2">
              <h1 className="text-2xl sm:text-3xl font-bold text-white">About FinFlow Pro SaaS</h1>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Engineered for finance directors, founders, and enterprise treasurers who require high-velocity capital visibility without clunky legacy banking portals.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="bg-slate-900/90 border border-slate-800 p-5 rounded-2xl text-center space-y-1">
                <div className="text-2xl font-black text-cyan-400">₹1,200 Cr+</div>
                <div className="text-xs text-slate-300 font-semibold">Treasury Managed</div>
              </div>
              <div className="bg-slate-900/90 border border-slate-800 p-5 rounded-2xl text-center space-y-1">
                <div className="text-2xl font-black text-blue-400">99.99%</div>
                <div className="text-xs text-slate-300 font-semibold">API Availability</div>
              </div>
              <div className="bg-slate-900/90 border border-slate-800 p-5 rounded-2xl text-center space-y-1">
                <div className="text-2xl font-black text-emerald-400">ISO 27001</div>
                <div className="text-xs text-slate-300 font-semibold">Certified Security</div>
              </div>
            </div>

            {/* Testimonials */}
            <div className="bg-slate-900/90 border border-slate-800 p-6 rounded-3xl space-y-4">
              <h3 className="font-bold text-sm text-white">Client Feedback</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-slate-950 p-4 rounded-2xl border border-slate-800/80 space-y-2 text-xs">
                  <p className="text-slate-300 italic leading-relaxed">
                    "FinFlow transformed how our 40-person SaaS manages vendor disbursements. Having tax escrow and payroll sub-accounts separated in real-time has saved us countless hours."
                  </p>
                  <div className="font-bold text-white text-[11px]">— Rohan Mehta, CFO at CloudScale Inc.</div>
                </div>
                <div className="bg-slate-950 p-4 rounded-2xl border border-slate-800/80 space-y-2 text-xs">
                  <p className="text-slate-300 italic leading-relaxed">
                    "The automated GST report exports and search functionality made our quarterly CA audit completely seamless. Worth every rupee of the Pro Plan."
                  </p>
                  <div className="font-bold text-white text-[11px]">— Priya Iyer, Co-Founder at Apex Media</div>
                </div>
              </div>
            </div>

            {/* FAQ Accordion */}
            <div className="bg-slate-900/90 border border-slate-800 p-6 rounded-3xl space-y-4">
              <h3 className="font-bold text-sm text-white">Frequently Asked Questions</h3>
              <div className="space-y-2">
                {[
                  { q: 'Can I connect multiple bank accounts in the Pro Plan?', a: 'Yes, FinFlow Pro supports up to 5 operating sub-accounts including foreign currency wire buckets.' },
                  { q: 'How fast are vendor payouts processed?', a: 'All IMPS and NEFT transactions are settled in real-time with instant webhook notifications and receipts.' },
                  { q: 'Is our financial data encrypted?', a: 'Yes, FinFlow utilizes AES-256 bank-grade encryption with multi-tenant isolated database partitions.' }
                ].map((faq, idx) => (
                  <div key={idx} className="bg-slate-950 rounded-xl border border-slate-800 overflow-hidden">
                    <button
                      onClick={() => setExpandedFaq(expandedFaq === idx ? null : idx)}
                      className="w-full p-3.5 text-left text-xs font-bold text-white flex justify-between items-center"
                    >
                      <span>{faq.q}</span>
                      <ChevronDown className={`w-4 h-4 text-cyan-400 transition-transform ${expandedFaq === idx ? 'rotate-180' : ''}`} />
                    </button>
                    {expandedFaq === idx && (
                      <div className="px-3.5 pb-3.5 text-xs text-slate-300 border-t border-slate-800/60 pt-2 leading-relaxed">
                        {faq.a}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* ===================== CONTACT VIEW ===================== */}
        {activeTab === 'contact' && (
          <div className="space-y-6 pb-12 max-w-4xl mx-auto">
            <div className="space-y-2">
              <h1 className="text-2xl sm:text-3xl font-bold text-white">Schedule Pro Onboarding</h1>
              <p className="text-xs sm:text-sm text-slate-300">
                Book a customized 1-on-1 walkthrough with our senior treasury engineer.
              </p>
            </div>

            <div className="bg-slate-900/90 border border-slate-800 p-6 sm:p-8 rounded-3xl shadow-xl">
              {contactSubmitted ? (
                <div className="py-12 text-center space-y-3">
                  <div className="w-14 h-14 bg-cyan-950 text-cyan-400 border border-cyan-800 rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-lg font-bold text-white">Onboarding Session Scheduled!</h3>
                  <p className="text-xs text-slate-400 max-w-sm mx-auto">
                    Our team will send a calendar invite to {contactForm.email || 'your email'} along with the demo login credentials.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleContactSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-300 mb-1">Your Name *</label>
                      <input 
                        type="text"
                        required
                        value={contactForm.name}
                        onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
                        placeholder="e.g. Vikram Singhania"
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
                        placeholder="vikram@saascompany.com"
                        className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-2 text-xs text-white focus:outline-none focus:border-cyan-500"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-300 mb-1">Company / Startup Name *</label>
                      <input 
                        type="text"
                        required
                        value={contactForm.company}
                        onChange={(e) => setContactForm({ ...contactForm, company: e.target.value })}
                        placeholder="e.g. Nexus Tech Labs"
                        className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-2 text-xs text-white focus:outline-none focus:border-cyan-500"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-300 mb-1">Preferred Time Slot</label>
                      <select 
                        value={contactForm.date}
                        onChange={(e) => setContactForm({ ...contactForm, date: e.target.value })}
                        className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-cyan-500"
                      >
                        <option>Today, 4:00 PM IST</option>
                        <option>Tomorrow, 11:00 AM IST</option>
                        <option>Tomorrow, 2:00 PM IST</option>
                        <option>Friday, 5:00 PM IST</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-300 mb-1">Specific Requirements (Optional)</label>
                    <textarea 
                      rows={3}
                      value={contactForm.message}
                      onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
                      placeholder="Multi-currency handling, automated payroll, TDS reconciliation..."
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-2 text-xs text-white focus:outline-none focus:border-cyan-500 resize-none"
                    />
                  </div>

                  <button 
                    type="submit"
                    className="w-full bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-slate-950 font-black py-2.5 rounded-xl text-xs transition-all shadow-md"
                  >
                    Confirm Demo Booking
                  </button>
                </form>
              )}
            </div>
          </div>
        )}
      </main>

      {/* Transfer Funds Modal */}
      {isTransferModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/75 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-slate-900 border border-blue-500/40 p-6 rounded-3xl max-w-sm w-full shadow-2xl space-y-4 animate-in fade-in zoom-in duration-200">
            <div className="flex justify-between items-center border-b border-slate-800 pb-3">
              <h3 className="font-bold text-base text-white flex items-center gap-2">
                <Send className="w-4 h-4 text-cyan-400" /> Transfer Funds
              </h3>
              <button 
                onClick={() => setIsTransferModalOpen(false)}
                className="text-slate-400 hover:text-white text-xs font-bold"
              >
                ✕
              </button>
            </div>

            {transferStep === 'success' ? (
              <div className="py-6 text-center space-y-2">
                <div className="w-12 h-12 bg-emerald-950 text-emerald-400 border border-emerald-800 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-7 h-7" />
                </div>
                <h4 className="font-bold text-white text-sm">Disbursement Dispatched!</h4>
                <p className="text-xs text-slate-400">
                  ₹{Number(transferData.amount).toLocaleString('en-IN')} sent via IMPS to {transferData.recipient}.
                </p>
              </div>
            ) : (
              <form onSubmit={handleTransfer} className="space-y-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">Recipient Name / Account</label>
                  <input 
                    type="text"
                    required
                    value={transferData.recipient}
                    onChange={(e) => setTransferData({ ...transferData, recipient: e.target.value })}
                    placeholder="e.g. AWS Cloud / 9821039812"
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-cyan-500"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">Transfer Amount (₹)</label>
                  <input 
                    type="number"
                    required
                    min="1"
                    value={transferData.amount}
                    onChange={(e) => setTransferData({ ...transferData, amount: e.target.value })}
                    placeholder="e.g. 50000"
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-cyan-500"
                  />
                </div>
                <div className="text-[10px] text-slate-400 flex justify-between">
                  <span>Debiting from:</span>
                  <span className="text-cyan-300 font-bold">{currentAccount.name}</span>
                </div>
                <div className="flex gap-2 pt-2">
                  <button 
                    type="button"
                    onClick={() => setIsTransferModalOpen(false)}
                    className="flex-1 bg-slate-800 hover:bg-slate-700 text-slate-300 font-bold py-2 rounded-xl text-xs"
                  >
                    Cancel
                  </button>
                  <button 
                    type="submit"
                    className="flex-1 bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-slate-950 font-black py-2 rounded-xl text-xs"
                  >
                    Execute Payout
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}

      {/* Export Report Modal */}
      {isExportModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/75 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-slate-900 border border-slate-800 p-6 rounded-3xl max-w-sm w-full shadow-2xl space-y-4 animate-in fade-in zoom-in duration-200">
            <div className="flex justify-between items-center border-b border-slate-800 pb-3">
              <h3 className="font-bold text-base text-white flex items-center gap-2">
                <Download className="w-4 h-4 text-cyan-400" /> Export Financial Report
              </h3>
              <button 
                onClick={() => setIsExportModalOpen(false)}
                className="text-slate-400 hover:text-white text-xs font-bold"
              >
                ✕
              </button>
            </div>

            {exportSuccess ? (
              <div className="py-6 text-center space-y-2">
                <div className="w-12 h-12 bg-cyan-950 text-cyan-400 border border-cyan-800 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-7 h-7" />
                </div>
                <h4 className="font-bold text-white text-sm">Download Started!</h4>
                <p className="text-xs text-slate-400">
                  FinFlow_Statement_Q2_{exportFormat}.{exportFormat.toLowerCase()} has been prepared.
                </p>
              </div>
            ) : (
              <div className="space-y-4">
                <p className="text-xs text-slate-300">
                  Choose format to export all transactions, tax allocations, and account reconciliations for the selected period.
                </p>
                <div className="grid grid-cols-2 gap-2">
                  <button
                    onClick={() => setExportFormat('PDF')}
                    className={`py-2 rounded-xl text-xs font-bold border transition-all ${
                      exportFormat === 'PDF' ? 'bg-blue-600 text-white border-blue-400' : 'bg-slate-950 text-slate-400 border-slate-800'
                    }`}
                  >
                    PDF Statement
                  </button>
                  <button
                    onClick={() => setExportFormat('CSV')}
                    className={`py-2 rounded-xl text-xs font-bold border transition-all ${
                      exportFormat === 'CSV' ? 'bg-blue-600 text-white border-blue-400' : 'bg-slate-950 text-slate-400 border-slate-800'
                    }`}
                  >
                    CSV Spreadsheet
                  </button>
                </div>
                <div className="flex gap-2 pt-2">
                  <button 
                    onClick={() => setIsExportModalOpen(false)}
                    className="flex-1 bg-slate-800 hover:bg-slate-700 text-slate-300 font-bold py-2 rounded-xl text-xs"
                  >
                    Cancel
                  </button>
                  <button 
                    onClick={handleExport}
                    className="flex-1 bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-black py-2 rounded-xl text-xs"
                  >
                    Generate File
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
