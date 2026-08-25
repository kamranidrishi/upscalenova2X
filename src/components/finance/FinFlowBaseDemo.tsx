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
  ArrowRight,
  Sparkles,
  Lock,
  Wallet,
  Calendar,
  Layers,
  PieChart
} from 'lucide-react';
import { DemoItem } from '../../data/demos';

interface FinFlowBaseDemoProps {
  demo: DemoItem;
  isMobile: boolean;
  isTablet: boolean;
}

export const FinFlowBaseDemo: React.FC<FinFlowBaseDemoProps> = ({ demo, isMobile, isTablet }) => {
  const [activeTab, setActiveTab] = useState<'home' | 'services' | 'products' | 'pricing' | 'about' | 'contact'>('home');
  const [isTransferModalOpen, setIsTransferModalOpen] = useState(false);
  const [transferSuccess, setTransferSuccess] = useState(false);
  const [recipient, setRecipient] = useState('');
  const [amount, setAmount] = useState('');
  const [contactSubmitted, setContactSubmitted] = useState(false);

  // Form State
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    turnover: '₹10L - ₹50L',
    message: ''
  });

  const handleTransferSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!amount || !recipient) return;
    setTransferSuccess(true);
    setTimeout(() => {
      setTransferSuccess(false);
      setIsTransferModalOpen(false);
      setRecipient('');
      setAmount('');
    }, 1800);
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
        turnover: '₹10L - ₹50L',
        message: ''
      });
    }, 3500);
  };

  const transactions = [
    { id: 'TX-1092', name: 'Apex Client Retainer', date: 'Today, 11:30 AM', category: 'Revenue', amount: '+₹1,45,000', type: 'inflow' },
    { id: 'TX-1091', name: 'AWS Cloud Server Billing', date: 'Yesterday, 4:15 PM', category: 'Infrastructure', amount: '-₹8,450', type: 'outflow' },
    { id: 'TX-1090', name: 'Stripe Merchant Payout', date: '21 Aug, 9:00 AM', category: 'Revenue', amount: '+₹74,200', type: 'inflow' },
    { id: 'TX-1089', name: 'Workspace Office Lease', date: '19 Aug, 2:00 PM', category: 'Operations', amount: '-₹35,000', type: 'outflow' },
  ];

  return (
    <div className="w-full min-h-full bg-slate-50 text-slate-800 flex flex-col font-sans custom-scrollbar">
      {/* Top Header / Navigation Bar */}
      <header className="sticky top-0 z-30 bg-white/95 backdrop-blur-md border-b border-slate-200 px-4 sm:px-6 py-3.5 flex items-center justify-between shadow-xs shrink-0">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-blue-600 text-white flex items-center justify-center font-black text-lg shadow-sm shadow-blue-500/30">
            <PieChart className="w-5 h-5 text-white" />
          </div>
          <div>
            <div className="font-extrabold text-base tracking-tight text-slate-900 flex items-center gap-1.5">
              FinFlow <span className="text-blue-600 font-semibold text-xs px-2 py-0.5 bg-blue-50 rounded-md border border-blue-100">Capital</span>
            </div>
            <p className="text-[10px] text-slate-500 font-medium leading-none">Smart Business Finance</p>
          </div>
        </div>

        {/* Nav Links */}
        <nav className="hidden md:flex items-center gap-1 lg:gap-2 text-xs font-semibold text-slate-600">
          {(['home', 'services', 'products', 'pricing', 'about', 'contact'] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-3 py-1.5 rounded-lg capitalize transition-all ${
                activeTab === tab
                  ? 'bg-blue-50 text-blue-700 font-bold'
                  : 'hover:text-slate-900 hover:bg-slate-100'
              }`}
            >
              {tab}
            </button>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <button 
            onClick={() => setActiveTab('contact')}
            className="hidden sm:flex items-center gap-1.5 bg-blue-600 hover:bg-blue-700 text-white px-3.5 py-1.5 rounded-lg text-xs font-semibold shadow-xs transition-colors"
          >
            Get Started <ArrowRight className="w-3.5 h-3.5" />
          </button>
          <button 
            onClick={() => setIsTransferModalOpen(true)}
            className="bg-emerald-600 hover:bg-emerald-700 text-white px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1 shadow-xs transition-colors"
          >
            <Send className="w-3 h-3" /> Quick Pay
          </button>
        </div>
      </header>

      {/* Mobile Nav Bar */}
      <div className="md:hidden flex items-center justify-around bg-white border-b border-slate-200 px-2 py-2 text-xs font-medium text-slate-600 overflow-x-auto">
        {(['home', 'services', 'products', 'pricing', 'about', 'contact'] as const).map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-2.5 py-1 rounded-md capitalize whitespace-nowrap text-[11px] ${
              activeTab === tab ? 'bg-blue-600 text-white font-bold' : 'text-slate-600'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* MAIN CONTENT AREA */}
      <main className="flex-1">
        {/* ======================= HOME TAB ======================= */}
        {activeTab === 'home' && (
          <div className="space-y-10 pb-16">
            {/* Hero Section */}
            <section className="bg-gradient-to-b from-blue-50/70 via-white to-slate-50 px-4 sm:px-8 pt-8 pb-10 border-b border-slate-200">
              <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-7 space-y-4">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-100/80 text-blue-800 text-[11px] font-semibold">
                    <Sparkles className="w-3.5 h-3.5 text-blue-600" /> ₹24,999 Base Business Finance Solution
                  </div>
                  <h1 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
                    Smart Money Management for Modern Businesses
                  </h1>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-xl">
                    Streamline your business current accounts, track customer receivables, monitor monthly operating cashflow, and process instant payouts with zero clutter.
                  </p>
                  
                  <div className="flex flex-wrap items-center gap-3 pt-2">
                    <button 
                      onClick={() => setIsTransferModalOpen(true)}
                      className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-4 py-2.5 rounded-xl text-xs flex items-center gap-2 shadow-sm shadow-blue-600/30 transition-all"
                    >
                      <Wallet className="w-4 h-4" /> Open Account Preview
                    </button>
                    <button 
                      onClick={() => setActiveTab('pricing')}
                      className="bg-white hover:bg-slate-100 text-slate-700 border border-slate-300 font-semibold px-4 py-2.5 rounded-xl text-xs flex items-center gap-1.5 transition-colors"
                    >
                      View Base Plan (₹24,999)
                    </button>
                  </div>

                  {/* Trust Highlights */}
                  <div className="grid grid-cols-3 gap-2 pt-4 border-t border-slate-200/80 text-slate-600">
                    <div className="flex items-center gap-1.5 text-[11px] font-medium">
                      <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" /> 256-Bit SSL
                    </div>
                    <div className="flex items-center gap-1.5 text-[11px] font-medium">
                      <Clock className="w-4 h-4 text-blue-600 shrink-0" /> 24/7 Fast Payouts
                    </div>
                    <div className="flex items-center gap-1.5 text-[11px] font-medium">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" /> RBI Compliant
                    </div>
                  </div>
                </div>

                {/* Dashboard Widget Preview */}
                <div className="lg:col-span-5 bg-white rounded-2xl border border-slate-200 p-5 shadow-lg shadow-slate-200/50 space-y-4">
                  <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                    <div>
                      <div className="text-[11px] font-medium text-slate-500 uppercase tracking-wider">Primary Business Account</div>
                      <div className="text-xl sm:text-2xl font-black text-slate-900 mt-0.5">₹14,82,500.00</div>
                    </div>
                    <div className="px-2 py-1 bg-emerald-50 text-emerald-700 text-[10px] font-bold rounded-md flex items-center gap-1 border border-emerald-200">
                      <TrendingUp className="w-3 h-3" /> +12.4% MoM
                    </div>
                  </div>

                  {/* Income vs Outflow Summary Cards */}
                  <div className="grid grid-cols-2 gap-2.5">
                    <div className="bg-slate-50 p-3 rounded-xl border border-slate-100">
                      <div className="text-[10px] text-slate-500 font-semibold flex items-center gap-1">
                        <ArrowDownLeft className="w-3 h-3 text-emerald-600" /> Monthly Inflow
                      </div>
                      <div className="text-sm font-extrabold text-emerald-600 mt-1">+₹3,40,000</div>
                    </div>
                    <div className="bg-slate-50 p-3 rounded-xl border border-slate-100">
                      <div className="text-[10px] text-slate-500 font-semibold flex items-center gap-1">
                        <ArrowUpRight className="w-3 h-3 text-rose-600" /> Monthly Outflow
                      </div>
                      <div className="text-sm font-extrabold text-rose-600 mt-1">-₹1,12,400</div>
                    </div>
                  </div>

                  {/* Simple Cashflow Bar preview */}
                  <div className="space-y-1.5 pt-1">
                    <div className="flex justify-between text-[10px] text-slate-500 font-medium">
                      <span>Weekly Cash Velocity</span>
                      <span className="text-blue-600 font-bold">Net Surplus: +₹2,27,600</span>
                    </div>
                    <div className="flex items-end gap-1.5 h-14 bg-slate-50 p-2 rounded-lg border border-slate-100">
                      {[40, 65, 30, 85, 55, 90, 70].map((h, i) => (
                        <div key={i} className="flex-1 flex flex-col items-center gap-1">
                          <div 
                            className={`w-full rounded-t transition-all ${i === 5 ? 'bg-blue-600' : 'bg-blue-300'}`} 
                            style={{ height: `${h}%` }}
                          />
                        </div>
                      ))}
                    </div>
                    <div className="flex justify-between text-[9px] text-slate-400 font-mono">
                      <span>Mon</span><span>Tue</span><span>Wed</span><span>Thu</span><span>Fri</span><span>Sat</span><span>Sun</span>
                    </div>
                  </div>

                  <button 
                    onClick={() => setIsTransferModalOpen(true)}
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 rounded-xl text-xs flex items-center justify-center gap-1.5 transition-colors"
                  >
                    <Send className="w-3.5 h-3.5" /> Transfer Funds to Vendor
                  </button>
                </div>
              </div>
            </section>

            {/* Recent Activity Table */}
            <section className="max-w-5xl mx-auto px-4 sm:px-8 space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-lg font-bold text-slate-900">Recent Transactions</h2>
                  <p className="text-xs text-slate-500">Live ledger of real-time account settlements</p>
                </div>
                <button 
                  onClick={() => setActiveTab('services')}
                  className="text-xs text-blue-600 hover:text-blue-800 font-semibold flex items-center gap-1"
                >
                  View All Services <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>

              <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs">
                <div className="divide-y divide-slate-100">
                  {transactions.map((tx) => (
                    <div key={tx.id} className="p-3.5 sm:p-4 flex items-center justify-between hover:bg-slate-50/80 transition-colors">
                      <div className="flex items-center gap-3">
                        <div className={`w-8 h-8 rounded-lg flex items-center justify-center text-xs font-bold ${
                          tx.type === 'inflow' ? 'bg-emerald-100 text-emerald-700' : 'bg-rose-100 text-rose-700'
                        }`}>
                          {tx.type === 'inflow' ? <ArrowDownLeft className="w-4 h-4" /> : <ArrowUpRight className="w-4 h-4" />}
                        </div>
                        <div>
                          <div className="text-xs sm:text-sm font-bold text-slate-900">{tx.name}</div>
                          <div className="text-[10px] text-slate-400 font-medium flex items-center gap-2">
                            <span>{tx.id}</span>
                            <span>•</span>
                            <span>{tx.date}</span>
                            <span className="hidden sm:inline px-1.5 py-0.5 rounded bg-slate-100 text-slate-600 font-semibold">{tx.category}</span>
                          </div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className={`text-xs sm:text-sm font-black ${tx.type === 'inflow' ? 'text-emerald-600' : 'text-slate-900'}`}>
                          {tx.amount}
                        </div>
                        <div className="text-[10px] text-slate-400 font-medium">Settled (IMPS)</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Core Services Grid */}
            <section className="max-w-5xl mx-auto px-4 sm:px-8 space-y-4">
              <div className="text-center max-w-xl mx-auto space-y-1">
                <h2 className="text-xl font-bold text-slate-900">Tailored For Growing Enterprises</h2>
                <p className="text-xs text-slate-500">Everything needed to manage business liquidity without accounting overhead.</p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-2">
                {[
                  { title: 'Business Accounts', desc: 'Zero-balance friendly current accounts with automated reconciliation.', icon: Building2, color: 'text-blue-600 bg-blue-50' },
                  { title: 'Instant Invoicing', desc: 'Generate GST-compliant invoices and collect via UPI, cards & NEFT.', icon: FileText, color: 'text-emerald-600 bg-emerald-50' },
                  { title: 'Vendor Payouts', desc: 'Bulk batch disbursements directly to bank accounts 24x7 with OTP security.', icon: Send, color: 'text-indigo-600 bg-indigo-50' },
                  { title: 'Tax & Compliance', desc: 'TDS calculations, GST report downloads, and exportable P&L summaries.', icon: ShieldCheck, color: 'text-amber-600 bg-amber-50' },
                ].map((s, idx) => {
                  const Icon = s.icon;
                  return (
                    <div key={idx} className="bg-white p-5 rounded-2xl border border-slate-200 hover:border-blue-300 shadow-xs hover:shadow-md transition-all space-y-2.5">
                      <div className={`w-10 h-10 rounded-xl ${s.color} flex items-center justify-center font-bold`}>
                        <Icon className="w-5 h-5" />
                      </div>
                      <h3 className="text-sm font-bold text-slate-900">{s.title}</h3>
                      <p className="text-xs text-slate-600 leading-relaxed">{s.desc}</p>
                    </div>
                  );
                })}
              </div>
            </section>

            {/* Simple Contact / Consultation Banner */}
            <section className="max-w-5xl mx-auto px-4 sm:px-8">
              <div className="bg-blue-600 text-white rounded-3xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-md shadow-blue-600/20">
                <div className="space-y-1.5 text-center sm:text-left">
                  <h3 className="text-lg sm:text-xl font-bold">Ready to modernize your company's finances?</h3>
                  <p className="text-xs text-blue-100 max-w-lg">Get onboarded within 24 hours with dedicated phone support and zero paperwork.</p>
                </div>
                <button 
                  onClick={() => setActiveTab('contact')}
                  className="bg-white hover:bg-slate-100 text-blue-700 font-bold px-5 py-2.5 rounded-xl text-xs shrink-0 shadow-sm transition-colors"
                >
                  Contact FinFlow Team
                </button>
              </div>
            </section>
          </div>
        )}

        {/* ======================= SERVICES TAB ======================= */}
        {activeTab === 'services' && (
          <div className="max-w-5xl mx-auto px-4 sm:px-8 py-8 space-y-8 pb-16">
            <div className="space-y-2">
              <div className="text-xs font-bold text-blue-600 uppercase tracking-wider">Our Financial Capabilities</div>
              <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900">Comprehensive Business Finance Services</h1>
              <p className="text-xs sm:text-sm text-slate-600 max-w-2xl">
                Designed for founders, finance managers, and sole proprietors who want complete oversight of company cash flows with maximum efficiency.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  title: 'Corporate Current Accounts',
                  desc: 'High-speed business banking with multi-user access permissions, unlimited monthly transactions, and automated daily balances.',
                  benefits: ['Zero minimum balance penalties', 'Unlimited IMPS/NEFT transfers', 'Instant statement downloads'],
                  icon: Building2
                },
                {
                  title: 'Automated Vendor Disbursements',
                  desc: 'Pay your vendors, contractors, and team members with one-click batch processing and auto-generated payment receipts.',
                  benefits: ['24x7 Real-time payouts', 'Custom approval workflows', 'Bulk Excel/CSV upload support'],
                  icon: Send
                },
                {
                  title: 'Smart Invoicing & Payment Links',
                  desc: 'Create professional branded invoices in under 60 seconds with QR codes and integrated payment gateways.',
                  benefits: ['Automated WhatsApp/Email reminders', 'Partial payment collection', 'Real-time payment webhook alerts'],
                  icon: FileText
                },
                {
                  title: 'Tax Reconciliation & GST Support',
                  desc: 'Automatically categorize expenses, separate GST collected vs paid, and simplify end-of-month accountant filing.',
                  benefits: ['TDS calculation tags', 'One-click CA exportable zip', 'Audit-ready transaction records'],
                  icon: ShieldCheck
                }
              ].map((srv, idx) => {
                const Icon = srv.icon;
                return (
                  <div key={idx} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs space-y-4">
                    <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-slate-900">{srv.title}</h3>
                      <p className="text-xs text-slate-600 mt-1 leading-relaxed">{srv.desc}</p>
                    </div>
                    <div className="space-y-1.5 pt-2 border-t border-slate-100">
                      {srv.benefits.map((b, i) => (
                        <div key={i} className="flex items-center gap-2 text-xs text-slate-700">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                          <span>{b}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="bg-slate-100 p-6 rounded-2xl border border-slate-200 text-center space-y-3">
              <h4 className="text-sm font-bold text-slate-800">Need a custom enterprise integration?</h4>
              <p className="text-xs text-slate-600">Our financial solutions team can build customized API flows for high-volume businesses.</p>
              <button 
                onClick={() => setActiveTab('contact')}
                className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-4 py-2 rounded-xl text-xs transition-colors"
              >
                Inquire With Relationship Manager
              </button>
            </div>
          </div>
        )}

        {/* ======================= PRODUCTS TAB ======================= */}
        {activeTab === 'products' && (
          <div className="max-w-5xl mx-auto px-4 sm:px-8 py-8 space-y-8 pb-16">
            <div className="space-y-2">
              <div className="text-xs font-bold text-blue-600 uppercase tracking-wider">Product Suite</div>
              <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900">Financial Tools Built For Velocity</h1>
              <p className="text-xs sm:text-sm text-slate-600 max-w-2xl">
                Simple, reliable, and accessible banking interfaces that eliminate tedious paperwork.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-blue-600 text-white flex items-center justify-center font-bold">
                  <CreditCard className="w-6 h-6" />
                </div>
                <h3 className="text-base font-bold text-slate-900">FinFlow Corporate Card</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Physical and digital cards for company expenditure with custom per-employee spending limits and instant freeze controls.
                </p>
                <div className="bg-slate-50 p-3 rounded-xl border border-slate-100 text-[11px] text-slate-600 space-y-1">
                  <div className="font-semibold text-slate-800">Key Features:</div>
                  <div>• 1% cashback on SaaS & Ad spend</div>
                  <div>• Unlimited virtual cards</div>
                  <div>• Auto-receipt matching via SMS</div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-emerald-600 text-white flex items-center justify-center font-bold">
                  <Wallet className="w-6 h-6" />
                </div>
                <h3 className="text-base font-bold text-slate-900">Smart Liquidity Vaults</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Automatically set aside money for quarterly taxes, staff payroll, and emergency buffers into separated interest-bearing sub-vaults.
                </p>
                <div className="bg-slate-50 p-3 rounded-xl border border-slate-100 text-[11px] text-slate-600 space-y-1">
                  <div className="font-semibold text-slate-800">Key Features:</div>
                  <div>• Automated percentage allocations</div>
                  <div>• Instant liquidity with zero lock-in</div>
                  <div>• Dedicated GST tax hold bucket</div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-indigo-600 text-white flex items-center justify-center font-bold">
                  <BarChart3 className="w-6 h-6" />
                </div>
                <h3 className="text-base font-bold text-slate-900">Ledger Insights Engine</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Real-time visualization of weekly burn rate, recurring subscription expenditures, and upcoming vendor obligations.
                </p>
                <div className="bg-slate-50 p-3 rounded-xl border border-slate-100 text-[11px] text-slate-600 space-y-1">
                  <div className="font-semibold text-slate-800">Key Features:</div>
                  <div>• Weekly email digest summaries</div>
                  <div>• Category breakdown pie charts</div>
                  <div>• Overdue invoice tracker</div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ======================= PRICING TAB ======================= */}
        {activeTab === 'pricing' && (
          <div className="max-w-4xl mx-auto px-4 sm:px-8 py-8 space-y-8 pb-16">
            <div className="text-center space-y-2 max-w-xl mx-auto">
              <div className="text-xs font-bold text-blue-600 uppercase tracking-wider">Transparent Investment</div>
              <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900">Affordable Base Business Package</h1>
              <p className="text-xs sm:text-sm text-slate-600">
                A complete financial website & dashboard solution built to establish immediate credibility.
              </p>
            </div>

            <div className="bg-white rounded-3xl border-2 border-blue-600 p-6 sm:p-8 shadow-xl shadow-blue-500/10 space-y-6">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-b border-slate-100 pb-6">
                <div>
                  <span className="px-3 py-1 bg-blue-100 text-blue-700 text-xs font-extrabold rounded-full">Base Plan</span>
                  <h3 className="text-2xl font-black text-slate-900 mt-2">FinFlow Starter Platform</h3>
                  <p className="text-xs text-slate-500">Perfect for service businesses, agencies, and small merchants</p>
                </div>
                <div className="text-left sm:text-right">
                  <div className="text-3xl sm:text-4xl font-black text-blue-600">₹24,999</div>
                  <div className="text-xs text-slate-400 font-medium">One-time setup & deployment</div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 text-xs text-slate-700">
                {[
                  'Clean Light Modern UI Financial Interface',
                  'Live Dashboard Preview with Inflow/Outflow Cards',
                  'Recent Transactions Ledger with Category Tags',
                  'Simulated Quick Funds Transfer Modal',
                  'Responsive Mobile, Tablet & Desktop Views',
                  'Contact & Consultation Inquiry Engine',
                  'Services, Products, About & Pricing Pages',
                  '256-Bit SSL Security Compliant Layout'
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="text-xs text-slate-500 text-center sm:text-left">
                  Need advanced multi-account analytics or cashflow forecasting? Check our <span className="font-semibold text-slate-800">Pro (₹39,999)</span> or <span className="font-semibold text-slate-800">Max (₹59,999)</span> plans in the top selector.
                </div>
                <button 
                  onClick={() => setActiveTab('contact')}
                  className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white font-bold px-6 py-2.5 rounded-xl text-xs shrink-0 transition-colors shadow-sm"
                >
                  Choose ₹24,999 Base Plan
                </button>
              </div>
            </div>
          </div>
        )}

        {/* ======================= ABOUT TAB ======================= */}
        {activeTab === 'about' && (
          <div className="max-w-4xl mx-auto px-4 sm:px-8 py-8 space-y-8 pb-16">
            <div className="space-y-2">
              <div className="text-xs font-bold text-blue-600 uppercase tracking-wider">About FinFlow Capital</div>
              <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900">Democratizing Modern Financial Technology</h1>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Founded with a simple mission: remove the friction of business banking for commercial ventures, MSMEs, and fast-growing startups across India.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="bg-white p-5 rounded-2xl border border-slate-200 text-center space-y-1">
                <div className="text-2xl sm:text-3xl font-black text-blue-600">₹450 Cr+</div>
                <div className="text-xs font-semibold text-slate-700">Disbursed Annually</div>
                <p className="text-[10px] text-slate-400">Processed across 12,000+ businesses</p>
              </div>
              <div className="bg-white p-5 rounded-2xl border border-slate-200 text-center space-y-1">
                <div className="text-2xl sm:text-3xl font-black text-emerald-600">99.98%</div>
                <div className="text-xs font-semibold text-slate-700">Platform Uptime</div>
                <p className="text-[10px] text-slate-400">Reliable zero-downtime ledger</p>
              </div>
              <div className="bg-white p-5 rounded-2xl border border-slate-200 text-center space-y-1">
                <div className="text-2xl sm:text-3xl font-black text-indigo-600">&lt; 2 Mins</div>
                <div className="text-xs font-semibold text-slate-700">Instant Support Response</div>
                <p className="text-[10px] text-slate-400">Dedicated relationship desk</p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200 space-y-4">
              <h3 className="text-base font-bold text-slate-900">Our Core Principles</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs text-slate-600">
                <div className="space-y-1">
                  <div className="font-bold text-slate-800 flex items-center gap-1.5">
                    <ShieldCheck className="w-4 h-4 text-blue-600" /> Bank-Grade Security First
                  </div>
                  <p className="leading-relaxed">All data transmissions use AES-256 encryption with multi-factor biometric authentication safeguards.</p>
                </div>
                <div className="space-y-1">
                  <div className="font-bold text-slate-800 flex items-center gap-1.5">
                    <Layers className="w-4 h-4 text-blue-600" /> Zero Hidden Fees
                  </div>
                  <p className="leading-relaxed">Transparent pricing with no surprise maintenance deductions or hidden transaction penalties.</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ======================= CONTACT TAB ======================= */}
        {activeTab === 'contact' && (
          <div className="max-w-4xl mx-auto px-4 sm:px-8 py-8 space-y-8 pb-16">
            <div className="space-y-2">
              <div className="text-xs font-bold text-blue-600 uppercase tracking-wider">Get In Touch</div>
              <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900">Speak With A Financial Advisor</h1>
              <p className="text-xs sm:text-sm text-slate-600">
                Have questions about onboarding, vendor payouts, or our ₹24,999 Base setup? Fill out the form below.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
              {/* Form Column */}
              <div className="md:col-span-7 bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-xs">
                {contactSubmitted ? (
                  <div className="py-12 text-center space-y-3">
                    <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>
                    <h3 className="text-lg font-bold text-slate-900">Inquiry Received!</h3>
                    <p className="text-xs text-slate-600 max-w-sm mx-auto">
                      Thank you for contacting FinFlow Capital. Our senior business finance specialist will connect with you via email and phone within 2 hours.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleContactSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1">Full Name *</label>
                        <input 
                          type="text"
                          required
                          value={contactForm.name}
                          onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
                          placeholder="e.g. Ramesh Sharma"
                          className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2 text-xs text-slate-900 focus:outline-none focus:border-blue-500"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1">Business Email *</label>
                        <input 
                          type="email"
                          required
                          value={contactForm.email}
                          onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
                          placeholder="ramesh@company.in"
                          className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2 text-xs text-slate-900 focus:outline-none focus:border-blue-500"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1">Phone Number *</label>
                        <input 
                          type="tel"
                          required
                          value={contactForm.phone}
                          onChange={(e) => setContactForm({ ...contactForm, phone: e.target.value })}
                          placeholder="+91 98765 43210"
                          className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2 text-xs text-slate-900 focus:outline-none focus:border-blue-500"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1">Monthly Turnover</label>
                        <select 
                          value={contactForm.turnover}
                          onChange={(e) => setContactForm({ ...contactForm, turnover: e.target.value })}
                          className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-xs text-slate-900 focus:outline-none focus:border-blue-500"
                        >
                          <option>Under ₹10 Lakhs</option>
                          <option>₹10L - ₹50L</option>
                          <option>₹50L - ₹2 Cr</option>
                          <option>₹2 Cr+</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">Message / Requirements</label>
                      <textarea 
                        rows={3}
                        value={contactForm.message}
                        onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
                        placeholder="Tell us about your business banking requirements..."
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2 text-xs text-slate-900 focus:outline-none focus:border-blue-500 resize-none"
                      />
                    </div>

                    <button 
                      type="submit"
                      className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2.5 rounded-xl text-xs transition-colors shadow-sm"
                    >
                      Submit Consultation Request
                    </button>
                  </form>
                )}
              </div>

              {/* Info Column */}
              <div className="md:col-span-5 space-y-4">
                <div className="bg-white p-6 rounded-2xl border border-slate-200 space-y-4">
                  <h3 className="text-sm font-bold text-slate-900">Direct Contact Details</h3>
                  <div className="space-y-3 text-xs text-slate-600">
                    <div className="flex items-start gap-3">
                      <Phone className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                      <div>
                        <div className="font-semibold text-slate-800">Support Desk</div>
                        <div>+91 93071 83335 (Mon-Sat, 9AM - 7PM)</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Mail className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                      <div>
                        <div className="font-semibold text-slate-800">Email Inquiries</div>
                        <div>capital@finflow.io</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Building2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                      <div>
                        <div className="font-semibold text-slate-800">Corporate HQ</div>
                        <div>Tower 4, Cyber City, Phase 2, Gurugram, India</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-emerald-50 border border-emerald-200 p-5 rounded-2xl text-xs text-emerald-800 space-y-1.5">
                  <div className="font-bold flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" /> Fast Digital KYC
                  </div>
                  <p className="text-[11px] leading-relaxed">
                    Paperless instant verification using Aadhaar & GSTIN. Get your virtual operating account live within 2 hours.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-slate-200 px-4 sm:px-8 py-6 text-xs text-slate-500 shrink-0">
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <PieChart className="w-4 h-4 text-blue-600" />
            <span className="font-bold text-slate-800">FinFlow Capital & SaaS</span>
            <span>• Base Edition</span>
          </div>
          <div className="text-[11px]">
            © {new Date().getFullYear()} FinFlow Technologies Pvt. Ltd. All rights reserved.
          </div>
        </div>
      </footer>

      {/* Simulated Quick Transfer Modal */}
      {isTransferModalOpen && (
        <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl p-6 max-w-sm w-full shadow-2xl border border-slate-200 space-y-4 animate-in fade-in zoom-in duration-200">
            <div className="flex justify-between items-center border-b border-slate-100 pb-3">
              <h3 className="font-bold text-base text-slate-900 flex items-center gap-2">
                <Send className="w-4 h-4 text-blue-600" /> Quick Transfer Funds
              </h3>
              <button 
                onClick={() => setIsTransferModalOpen(false)}
                className="text-slate-400 hover:text-slate-600 text-xs font-bold"
              >
                ✕
              </button>
            </div>

            {transferSuccess ? (
              <div className="py-6 text-center space-y-2">
                <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-7 h-7" />
                </div>
                <h4 className="font-bold text-slate-900 text-sm">Transfer Initiated!</h4>
                <p className="text-xs text-slate-500">₹{Number(amount).toLocaleString('en-IN')} successfully queued to {recipient}.</p>
              </div>
            ) : (
              <form onSubmit={handleTransferSubmit} className="space-y-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Beneficiary Name / UPI</label>
                  <input 
                    type="text"
                    required
                    value={recipient}
                    onChange={(e) => setRecipient(e.target.value)}
                    placeholder="e.g. Apex Hardware / apex@upi"
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-xs focus:outline-none focus:border-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Amount (₹)</label>
                  <input 
                    type="number"
                    required
                    min="1"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    placeholder="e.g. 25000"
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-xs focus:outline-none focus:border-blue-500"
                  />
                </div>
                <div className="text-[10px] text-slate-400">Available Balance: ₹14,82,500.00</div>
                <div className="flex gap-2 pt-2">
                  <button 
                    type="button"
                    onClick={() => setIsTransferModalOpen(false)}
                    className="flex-1 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold py-2 rounded-xl text-xs"
                  >
                    Cancel
                  </button>
                  <button 
                    type="submit"
                    className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 rounded-xl text-xs"
                  >
                    Send Now
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
