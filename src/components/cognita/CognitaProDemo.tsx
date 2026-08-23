import React, { useState } from 'react';
import { DemoItem } from '../../data/demos';
import {
  Zap,
  Sparkles,
  Sliders,
  FileUp,
  Copy,
  Check,
  RotateCcw,
  CheckCircle2,
  ArrowRight,
  ChevronDown,
  ChevronRight,
  Code2,
  Terminal,
  Cpu,
  Layers,
  Database,
  Users,
  ShieldCheck,
  Send,
  UploadCloud,
  FileText,
  Key,
  Plus,
  Trash2,
  ExternalLink,
  ThumbsUp,
  ThumbsDown,
  Calendar,
  Clock,
  HelpCircle,
  FolderOpen,
  Sparkle
} from 'lucide-react';

interface CognitaProDemoProps {
  demo: DemoItem;
  isMobile: boolean;
  isTablet: boolean;
}

interface Message {
  id: string;
  role: 'user' | 'assistant';
  text: string;
  codeSnippet?: string;
  codeLang?: string;
  model: string;
  tokens: number;
  latency: number;
  time: string;
}

export const CognitaProDemo: React.FC<CognitaProDemoProps> = ({ isMobile, isTablet }) => {
  const [activeTab, setActiveTab] = useState<'home' | 'playground' | 'library' | 'workspace' | 'pricing' | 'faq'>('playground');
  const [selectedModel, setSelectedModel] = useState('Cognita Ultra v3');
  const [temperature, setTemperature] = useState(0.7);
  const [maxTokens, setMaxTokens] = useState(2048);
  const [systemPersona, setSystemPersona] = useState('Senior Software Architect');
  const [inputPrompt, setInputPrompt] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [copiedCodeId, setCopiedCodeId] = useState<string | null>(null);
  const [selectedThread, setSelectedThread] = useState('thread-1');
  const [uploadedFile, setUploadedFile] = useState<{ name: string; size: string; pages: number } | null>(null);
  const [isUploadActive, setIsUploadActive] = useState(false);

  // Demo Booking Modal
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);
  const [bookingStep, setBookingStep] = useState<'form' | 'success'>('form');
  const [bookingData, setBookingData] = useState({ name: '', email: '', date: '2025-04-15', time: '02:00 PM', teamSize: '10-50 engineers' });

  // API Token generator
  const [apiKeys, setApiKeys] = useState<Array<{ id: string; name: string; key: string; created: string; lastUsed: string }>>([
    { id: 'k1', name: 'Production API Key', key: 'cog_pro_live_992f8a10e7b411d', created: '2 days ago', lastUsed: 'Just now' },
    { id: 'k2', name: 'Staging / QA Token', key: 'cog_pro_test_883a991c2b544e1', created: '1 week ago', lastUsed: '3 hours ago' }
  ]);
  const [newKeyName, setNewKeyName] = useState('');
  const [copiedKeyId, setCopiedKeyId] = useState<string | null>(null);

  // FAQ Accordion State
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  // Prompt Templates Library
  const PROMPT_TEMPLATES = [
    {
      title: 'Full-Stack Auth Middleware',
      category: 'Engineering',
      desc: 'Generates secure JWT bearer token validation with role-based access control in Node.js & TypeScript.',
      prompt: 'Write an enterprise-grade Express.js JWT authentication middleware in TypeScript with RBAC permissions checking and token expiry refresh.'
    },
    {
      title: 'PostgreSQL Index & Query Optimizer',
      category: 'Database',
      desc: 'Optimizes slow complex join queries, suggests composite indexes, and analyzes EXPLAIN ANALYZE plans.',
      prompt: 'Analyze this SQL query with multiple joins on orders, customers, and shipments. Provide optimized query rewrite and recommended B-tree indexes.'
    },
    {
      title: 'SaaS Go-To-Market Value Pitch',
      category: 'Marketing',
      desc: 'Creates a high-converting 3-pillar product positioning brief for B2B Enterprise decision makers.',
      prompt: 'Draft a compelling 3-pillar value proposition for a new developer-first AI infrastructure platform targeting CTOs and Engineering VPs.'
    },
    {
      title: 'REST to GraphQL Schema Converter',
      category: 'Architecture',
      desc: 'Converts legacy REST endpoints and JSON payloads into strongly typed GraphQL SDL schemas.',
      prompt: 'Convert a standard e-commerce REST API specification into a clean, strongly-typed GraphQL SDL schema with queries and mutations.'
    },
    {
      title: 'Automated Unit Test Suite (Jest)',
      category: 'Testing',
      desc: 'Writes 100% code-coverage unit tests with mocks, edge cases, and error boundary assertions.',
      prompt: 'Generate comprehensive Jest and React Testing Library unit tests for an async payment processing hook with edge cases.'
    }
  ];

  // Chat threads and messages
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 'm1',
      role: 'assistant',
      text: 'Cognita Ultra v3 is primed and loaded. System persona configured as **Senior Software Architect** with context window enabled (128k tokens).',
      codeSnippet: `// Cognita AI Engine Initialized\nconst config = {\n  model: "cognita-ultra-v3",\n  temperature: 0.7,\n  contextMemory: "128k",\n  embeddings: "neural-v4"\n};\nconsole.log("AI Ready for high-concurrency production synthesis.");`,
      codeLang: 'typescript',
      model: 'Cognita Ultra v3',
      tokens: 64,
      latency: 140,
      time: '11:20 AM'
    }
  ]);

  const handleSendMessage = (textToSend?: string) => {
    const prompt = (textToSend || inputPrompt).trim();
    if (!prompt || isGenerating) return;

    const userMsg: Message = {
      id: 'u-' + Date.now(),
      role: 'user',
      text: prompt,
      model: selectedModel,
      tokens: Math.round(prompt.length / 3.8),
      latency: 0,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages((prev) => [...prev, userMsg]);
    setInputPrompt('');
    setIsGenerating(true);

    setTimeout(() => {
      let replyText = '';
      let codeSnippet: string | undefined;
      let codeLang = 'typescript';

      if (prompt.toLowerCase().includes('jwt') || prompt.toLowerCase().includes('auth') || prompt.toLowerCase().includes('middleware')) {
        replyText = `### Enterprise JWT Authentication Middleware\nHere is a hardened JWT authentication & RBAC middleware for Express & TypeScript:\n- **Security:** Checks signed tokens, verifies tenant ID, and evaluates role permissions.\n- **Error Handling:** Returns structured \`401 Unauthorized\` and \`403 Forbidden\` RFC 7807 payloads.`;
        codeSnippet = `import { Request, Response, NextFunction } from 'express';\nimport jwt from 'jsonwebtoken';\n\ninterface UserPayload {\n  id: string;\n  role: 'admin' | 'developer' | 'analyst';\n  orgId: string;\n}\n\nexport const authenticateJWT = (requiredRole?: string) => {\n  return (req: Request, res: Response, next: NextFunction) => {\n    const authHeader = req.headers.authorization;\n    if (!authHeader?.startsWith('Bearer ')) {\n      return res.status(401).json({ error: 'Missing or malformed bearer token' });\n    }\n\n    const token = authHeader.split(' ')[1];\n    try {\n      const decoded = jwt.verify(token, process.env.JWT_SECRET!) as UserPayload;\n      (req as any).user = decoded;\n      \n      if (requiredRole && decoded.role !== requiredRole && decoded.role !== 'admin') {\n        return res.status(403).json({ error: 'Insufficient role permissions' });\n      }\n      \n      next();\n    } catch (err) {\n      return res.status(401).json({ error: 'Token expired or invalid signature' });\n    }\n  };\n};`;
      } else if (prompt.toLowerCase().includes('sql') || prompt.toLowerCase().includes('index') || prompt.toLowerCase().includes('database')) {
        replyText = `### Query Optimization & Indexing Plan\nTo eliminate sequential table scans across high-volume join tables:\n1. Re-architect multi-column B-tree indexes on foreign keys.\n2. Leverage partial indexes for active status flags.`;
        codeSnippet = `-- Composite Index for fast filtered joins\nCREATE INDEX CONCURRENTLY idx_orders_customer_created \nON orders (customer_id, created_at DESC) \nWHERE status = 'completed';\n\n-- Optimized Query using Index Only Scan\nEXPLAIN ANALYZE\nSELECT o.id, o.total_amount, c.company_name\nFROM orders o\nJOIN customers c ON c.id = o.customer_id\nWHERE o.created_at >= NOW() - INTERVAL '30 days'\nORDER BY o.created_at DESC\nLIMIT 50;`;
        codeLang = 'sql';
      } else if (prompt.toLowerCase().includes('pitch') || prompt.toLowerCase().includes('marketing') || prompt.toLowerCase().includes('saas')) {
        replyText = `### B2B Enterprise Go-To-Market Framework\n\n**1. Neural Speed & Deterministic Reliability**\nDeliver sub-200ms latency on complex multi-turn prompts with 99.9% uptime SLA.\n\n**2. Zero-Data Retention Security (SOC2 Compliance)**\nYour proprietary codebases and customer data are never used for model training.\n\n**3. 65% Direct Reduction in Engineering OpEx**\nEmpower dev teams to build and deploy complex autonomous pipelines without managing heavy infrastructure.`;
      } else {
        replyText = `### Analysis & Synthesis by ${selectedModel}\n\nProcessed query with **${systemPersona}** persona parameters:\n- **Input Analysis:** Synthesized "${prompt.slice(0, 70)}..." with multi-vector context.\n- **Precision Factor:** 99.8% verification confidence.\n- **Execution:** Zero hallucinations detected. Output verified against standard architecture best practices.`;
        codeSnippet = `// Execution Payload from ${selectedModel}\nexport interface SynthesisResponse {\n  status: "success";\n  modelUsed: "${selectedModel}";\n  latencyMs: 168;\n  temperature: ${temperature};\n  tokensProcessed: ${Math.round(prompt.length / 3.2) + 120};\n}`;
      }

      const assistantMsg: Message = {
        id: 'a-' + Date.now(),
        role: 'assistant',
        text: replyText,
        codeSnippet,
        codeLang,
        model: selectedModel,
        tokens: Math.round(replyText.length / 3.5) + (codeSnippet ? 140 : 0),
        latency: Math.floor(Math.random() * 80) + 140,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };

      setMessages((prev) => [...prev, assistantMsg]);
      setIsGenerating(false);
    }, 700);
  };

  const handleCopyCode = (code: string, id: string) => {
    navigator.clipboard?.writeText(code);
    setCopiedCodeId(id);
    setTimeout(() => setCopiedCodeId(null), 2000);
  };

  const handleGenerateApiKey = () => {
    const name = newKeyName.trim() || 'New Service Key';
    const rand = Math.random().toString(36).substring(2, 12);
    const newKey = {
      id: 'k-' + Date.now(),
      name,
      key: `cog_pro_live_${rand}`,
      created: 'Just now',
      lastUsed: 'Never'
    };
    setApiKeys([newKey, ...apiKeys]);
    setNewKeyName('');
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setUploadedFile({
        name: file.name,
        size: (file.size / 1024).toFixed(1) + ' KB',
        pages: Math.max(1, Math.round(file.size / 12000))
      });
      setIsUploadActive(false);
      // Auto trigger file analysis prompt
      handleSendMessage(`Analyze uploaded document: "${file.name}" and summarize key data points, token cost, and actionable insights.`);
    }
  };

  return (
    <div className="w-full h-full bg-slate-950 text-slate-100 font-sans flex flex-col overflow-y-auto custom-scrollbar select-text">
      {/* Top Pro SaaS Bar */}
      <header className="sticky top-0 z-40 bg-slate-950/90 backdrop-blur-md border-b border-slate-800/80 shrink-0 px-4 lg:px-8 py-3.5 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-violet-600 via-indigo-600 to-cyan-400 p-[1px] shadow-lg shadow-violet-950/50">
            <div className="w-full h-full bg-slate-950 rounded-[11px] flex items-center justify-center">
              <Zap className="w-5 h-5 text-cyan-400 fill-cyan-400/20" />
            </div>
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-black text-lg text-white tracking-tight">Cognita AI</span>
              <span className="text-[10px] uppercase font-extrabold tracking-wider px-2 py-0.5 rounded-md bg-violet-950/80 text-violet-300 border border-violet-700/50">
                PRO ₹39,999
              </span>
            </div>
            <p className="text-[11px] text-slate-400 hidden sm:block">Advanced Multi-Model AI Studio & Workspace</p>
          </div>
        </div>

        {/* Pro Navigation Tabs */}
        <nav className="hidden md:flex items-center gap-1 bg-slate-900/90 p-1 rounded-xl border border-slate-800 text-xs font-semibold text-slate-300">
          <button
            onClick={() => setActiveTab('home')}
            className={`px-3 py-1.5 rounded-lg transition-all ${
              activeTab === 'home' ? 'bg-violet-600 text-white shadow font-bold' : 'hover:text-white hover:bg-slate-800/60'
            }`}
          >
            Home
          </button>
          <button
            onClick={() => setActiveTab('playground')}
            className={`px-3 py-1.5 rounded-lg transition-all flex items-center gap-1.5 ${
              activeTab === 'playground' ? 'bg-violet-600 text-white shadow font-bold' : 'hover:text-white hover:bg-slate-800/60'
            }`}
          >
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            AI Studio
          </button>
          <button
            onClick={() => setActiveTab('library')}
            className={`px-3 py-1.5 rounded-lg transition-all ${
              activeTab === 'library' ? 'bg-violet-600 text-white shadow font-bold' : 'hover:text-white hover:bg-slate-800/60'
            }`}
          >
            Prompt Library
          </button>
          <button
            onClick={() => setActiveTab('workspace')}
            className={`px-3 py-1.5 rounded-lg transition-all ${
              activeTab === 'workspace' ? 'bg-violet-600 text-white shadow font-bold' : 'hover:text-white hover:bg-slate-800/60'
            }`}
          >
            Workspace & API
          </button>
          <button
            onClick={() => setActiveTab('pricing')}
            className={`px-3 py-1.5 rounded-lg transition-all ${
              activeTab === 'pricing' ? 'bg-violet-600 text-white shadow font-bold' : 'hover:text-white hover:bg-slate-800/60'
            }`}
          >
            Pricing
          </button>
          <button
            onClick={() => setActiveTab('faq')}
            className={`px-3 py-1.5 rounded-lg transition-all ${
              activeTab === 'faq' ? 'bg-violet-600 text-white shadow font-bold' : 'hover:text-white hover:bg-slate-800/60'
            }`}
          >
            FAQ
          </button>
        </nav>

        {/* Action Buttons */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => setIsDemoModalOpen(true)}
            className="px-3.5 py-1.5 bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 text-white rounded-lg text-xs font-bold shadow-md shadow-violet-900/40 flex items-center gap-1.5 transition-all"
          >
            <Calendar className="w-3.5 h-3.5" />
            <span>Book Live Demo</span>
          </button>
        </div>
      </header>

      {/* Mobile Nav Scroller */}
      <div className="md:hidden flex items-center gap-1.5 overflow-x-auto px-4 py-2 bg-slate-900 border-b border-slate-800 text-xs shrink-0 custom-scrollbar">
        {(['home', 'playground', 'library', 'workspace', 'pricing', 'faq'] as const).map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-3 py-1 rounded-full whitespace-nowrap font-medium capitalize ${
              activeTab === tab ? 'bg-violet-600 text-white font-bold' : 'bg-slate-800 text-slate-300 border border-slate-700'
            }`}
          >
            {tab === 'playground' ? 'AI Studio' : tab === 'library' ? 'Prompts' : tab}
          </button>
        ))}
      </div>

      {/* Main Content Area */}
      <main className="flex-1">
        {/* 1. HOME VIEW */}
        {activeTab === 'home' && (
          <div className="space-y-16 py-10 px-4 lg:px-12 max-w-6xl mx-auto">
            {/* Glowing Hero */}
            <div className="relative text-center space-y-6 max-w-3xl mx-auto pt-6">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-violet-600/15 rounded-full blur-3xl pointer-events-none" />

              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-violet-950/80 border border-violet-700/60 text-violet-300 text-xs font-semibold">
                <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
                Next-Gen Multi-Model AI Studio for Engineering & Product Teams
              </div>

              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight">
                Architect, Code & Deploy with <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-indigo-300 to-cyan-400">Cognita Ultra AI</span>
              </h1>

              <p className="text-sm sm:text-base text-slate-400 leading-relaxed max-w-2xl mx-auto">
                Switch seamlessly between GPT-4o, Claude 3.5 Sonnet, and Cognita Ultra v3. Equip your team with vector memory, prompt engineering libraries, and API keys.
              </p>

              <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
                <button
                  onClick={() => setActiveTab('playground')}
                  className="px-6 py-3.5 bg-gradient-to-r from-violet-600 via-indigo-600 to-cyan-500 hover:opacity-95 text-white rounded-xl text-sm font-bold shadow-lg shadow-violet-900/50 flex items-center gap-2 transition-all"
                >
                  <Sparkles className="w-4 h-4 text-cyan-200" />
                  Launch Multi-Model Studio
                  <ArrowRight className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setActiveTab('library')}
                  className="px-6 py-3.5 bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-700 rounded-xl text-sm font-semibold transition-all"
                >
                  Explore Prompt Library
                </button>
              </div>

              {/* Metrics Bar */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-8 max-w-3xl mx-auto text-left">
                <div className="bg-slate-900/80 backdrop-blur-sm p-4 rounded-2xl border border-slate-800 shadow-md">
                  <div className="text-2xl font-black text-violet-400">128k</div>
                  <div className="text-xs text-slate-400 font-medium">Context Window</div>
                </div>
                <div className="bg-slate-900/80 backdrop-blur-sm p-4 rounded-2xl border border-slate-800 shadow-md">
                  <div className="text-2xl font-black text-cyan-400">160ms</div>
                  <div className="text-xs text-slate-400 font-medium">Average Latency</div>
                </div>
                <div className="bg-slate-900/80 backdrop-blur-sm p-4 rounded-2xl border border-slate-800 shadow-md">
                  <div className="text-2xl font-black text-emerald-400">99.95%</div>
                  <div className="text-xs text-slate-400 font-medium">SLA Availability</div>
                </div>
                <div className="bg-slate-900/80 backdrop-blur-sm p-4 rounded-2xl border border-slate-800 shadow-md">
                  <div className="text-2xl font-black text-indigo-400">4 Top Models</div>
                  <div className="text-xs text-slate-400 font-medium">Instant Hot-Swap</div>
                </div>
              </div>
            </div>

            {/* Trusted Logos Strip */}
            <div className="border-y border-slate-800/80 py-6 text-center space-y-3">
              <span className="text-[11px] font-bold uppercase tracking-widest text-slate-500">Trusted by modern engineering teams</span>
              <div className="flex flex-wrap items-center justify-center gap-8 text-slate-400 font-bold text-sm">
                <span className="flex items-center gap-1.5"><Layers className="w-4 h-4 text-violet-400" /> Vercel Cloud</span>
                <span className="flex items-center gap-1.5"><Database className="w-4 h-4 text-cyan-400" /> Supabase DB</span>
                <span className="flex items-center gap-1.5"><Cpu className="w-4 h-4 text-indigo-400" /> Stripe API</span>
                <span className="flex items-center gap-1.5"><Terminal className="w-4 h-4 text-emerald-400" /> Linear Dev</span>
              </div>
            </div>

            {/* Pro Features Grid */}
            <div className="space-y-6">
              <div className="text-center space-y-2">
                <h2 className="text-2xl sm:text-3xl font-black text-white">Advanced Features in Pro Plan (₹39,999)</h2>
                <p className="text-xs text-slate-400">Engineered for technical agility, team collaboration, and deep customization</p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="bg-slate-900/70 p-6 rounded-2xl border border-slate-800/80 hover:border-violet-600/50 transition-all space-y-3">
                  <div className="w-10 h-10 rounded-xl bg-violet-950/80 text-violet-400 flex items-center justify-center border border-violet-800/50">
                    <Sliders className="w-5 h-5" />
                  </div>
                  <h3 className="font-bold text-white text-base">Model Tuning Controls</h3>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    Granular temperature sliders, max token caps, and system persona prompts (Architect, Analyst, Marketer).
                  </p>
                </div>
                <div className="bg-slate-900/70 p-6 rounded-2xl border border-slate-800/80 hover:border-cyan-600/50 transition-all space-y-3">
                  <div className="w-10 h-10 rounded-xl bg-cyan-950/80 text-cyan-400 flex items-center justify-center border border-cyan-800/50">
                    <FileUp className="w-5 h-5" />
                  </div>
                  <h3 className="font-bold text-white text-base">Document & PDF Parsing</h3>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    Upload CSVs, PDF manuals, and code repositories for in-context Q&A and vector-based summarization.
                  </p>
                </div>
                <div className="bg-slate-900/70 p-6 rounded-2xl border border-slate-800/80 hover:border-indigo-600/50 transition-all space-y-3">
                  <div className="w-10 h-10 rounded-xl bg-indigo-950/80 text-indigo-400 flex items-center justify-center border border-indigo-800/50">
                    <Key className="w-5 h-5" />
                  </div>
                  <h3 className="font-bold text-white text-base">API Keys & Workspace UI</h3>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    Manage secret API keys, invite team members with role-based permissions, and track active tokens.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* 2. ADVANCED PLAYGROUND STUDIO VIEW */}
        {activeTab === 'playground' && (
          <div className="p-3 sm:p-6 max-w-7xl mx-auto h-full flex flex-col space-y-3">
            {/* Top Studio Control Bar */}
            <div className="bg-slate-900/90 backdrop-blur-md p-3.5 rounded-2xl border border-slate-800 flex flex-wrap items-center justify-between gap-3 shadow-lg">
              {/* Model Switcher & System Persona */}
              <div className="flex flex-wrap items-center gap-2.5">
                <div className="flex items-center gap-1.5 bg-slate-950 px-3 py-1.5 rounded-xl border border-slate-800 text-xs">
                  <span className="text-slate-400 font-medium">Model:</span>
                  <select
                    value={selectedModel}
                    onChange={(e) => setSelectedModel(e.target.value)}
                    className="bg-transparent font-bold text-violet-400 focus:outline-none cursor-pointer"
                  >
                    <option value="Cognita Ultra v3">Cognita Ultra v3 (Fastest)</option>
                    <option value="GPT-4o (Omni)">GPT-4o (Omni Reasoning)</option>
                    <option value="Claude 3.5 Sonnet">Claude 3.5 Sonnet (Code Specialist)</option>
                    <option value="Llama 3.3 70B">Llama 3.3 70B (Open Source)</option>
                  </select>
                </div>

                <div className="flex items-center gap-1.5 bg-slate-950 px-3 py-1.5 rounded-xl border border-slate-800 text-xs">
                  <span className="text-slate-400 font-medium">Persona:</span>
                  <select
                    value={systemPersona}
                    onChange={(e) => setSystemPersona(e.target.value)}
                    className="bg-transparent font-bold text-cyan-400 focus:outline-none cursor-pointer"
                  >
                    <option value="Senior Software Architect">Senior Software Architect</option>
                    <option value="Data & Analytics Lead">Data & Analytics Lead</option>
                    <option value="Growth Marketer">Growth Marketer</option>
                    <option value="Technical Product Manager">Technical Product Manager</option>
                  </select>
                </div>
              </div>

              {/* Slider Controls */}
              <div className="flex flex-wrap items-center gap-4 text-xs text-slate-300">
                <div className="flex items-center gap-2 bg-slate-950 px-3 py-1.5 rounded-xl border border-slate-800">
                  <span className="text-slate-400">Temp:</span>
                  <input
                    type="range"
                    min="0.1"
                    max="1.0"
                    step="0.1"
                    value={temperature}
                    onChange={(e) => setTemperature(parseFloat(e.target.value))}
                    className="w-16 accent-violet-500 cursor-pointer"
                  />
                  <span className="font-bold text-violet-400 w-6">{temperature}</span>
                </div>

                <div className="flex items-center gap-2 bg-slate-950 px-3 py-1.5 rounded-xl border border-slate-800">
                  <span className="text-slate-400">Max Tokens:</span>
                  <span className="font-bold text-cyan-400">{maxTokens}</span>
                </div>

                <button
                  onClick={() => setMessages([messages[0]])}
                  className="px-2.5 py-1.5 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-lg text-xs font-semibold flex items-center gap-1 transition-all"
                  title="Reset conversation"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">Reset</span>
                </button>
              </div>
            </div>

            {/* Main Studio Body (Split Sidebar / Chat) */}
            <div className="flex-1 grid grid-cols-1 lg:grid-cols-12 gap-3 min-h-[460px]">
              {/* Left Sidebar: Session Threads & Document Upload */}
              <div className="lg:col-span-3 space-y-3 flex flex-col">
                {/* Document Upload Simulation */}
                <div className="bg-slate-900/80 p-4 rounded-2xl border border-slate-800 space-y-3">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-bold text-white flex items-center gap-1.5">
                      <FileUp className="w-4 h-4 text-cyan-400" />
                      Document Grounding
                    </span>
                    <span className="text-[10px] text-slate-500">PDF / CSV</span>
                  </div>

                  {uploadedFile ? (
                    <div className="bg-slate-950 p-2.5 rounded-xl border border-cyan-800/50 flex items-center justify-between text-xs">
                      <div className="flex items-center gap-2 truncate">
                        <FileText className="w-4 h-4 text-cyan-400 shrink-0" />
                        <div className="truncate">
                          <div className="font-bold text-white truncate">{uploadedFile.name}</div>
                          <div className="text-[10px] text-slate-400">{uploadedFile.size} • {uploadedFile.pages} pages</div>
                        </div>
                      </div>
                      <button
                        onClick={() => setUploadedFile(null)}
                        className="text-slate-500 hover:text-rose-400 p-1"
                        title="Remove file"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  ) : (
                    <label className="border border-dashed border-slate-700 hover:border-violet-500 rounded-xl p-3 flex flex-col items-center justify-center text-center cursor-pointer transition-all bg-slate-950/40">
                      <UploadCloud className="w-5 h-5 text-violet-400 mb-1" />
                      <span className="text-[11px] font-bold text-slate-300">Drop PDF or Click to Upload</span>
                      <span className="text-[10px] text-slate-500">Simulate vector parsing</span>
                      <input
                        type="file"
                        onChange={handleFileUpload}
                        accept=".pdf,.csv,.txt,.docx"
                        className="hidden"
                      />
                    </label>
                  )}
                </div>

                {/* Session Threads */}
                <div className="bg-slate-900/80 p-4 rounded-2xl border border-slate-800 flex-1 space-y-3 flex flex-col">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-bold text-white flex items-center gap-1.5">
                      <FolderOpen className="w-4 h-4 text-violet-400" />
                      Recent Threads
                    </span>
                    <button
                      onClick={() => handleSendMessage('Start a new session on cloud database migration.')}
                      className="p-1 hover:bg-slate-800 rounded text-slate-400 hover:text-white"
                      title="New Thread"
                    >
                      <Plus className="w-3.5 h-3.5" />
                    </button>
                  </div>

                  <div className="space-y-1.5 text-xs flex-1 overflow-y-auto custom-scrollbar">
                    {[
                      { id: 'thread-1', title: 'Refactor Auth Middleware', time: 'Active now', tokens: '2.4k' },
                      { id: 'thread-2', title: 'PostgreSQL Indexing Plan', time: '1 hour ago', tokens: '1.8k' },
                      { id: 'thread-3', title: 'B2B SaaS Go-To-Market', time: 'Yesterday', tokens: '3.1k' },
                      { id: 'thread-4', title: 'Vector Embeddings Schema', time: '2 days ago', tokens: '4.5k' }
                    ].map((th) => (
                      <button
                        key={th.id}
                        onClick={() => setSelectedThread(th.id)}
                        className={`w-full text-left p-2.5 rounded-xl transition-all flex flex-col gap-0.5 ${
                          selectedThread === th.id
                            ? 'bg-violet-950/80 border border-violet-700/60 text-white'
                            : 'bg-slate-950/60 hover:bg-slate-800/60 border border-slate-800 text-slate-400'
                        }`}
                      >
                        <span className="font-bold truncate text-xs">{th.title}</span>
                        <div className="flex items-center justify-between text-[10px] text-slate-500">
                          <span>{th.time}</span>
                          <span>{th.tokens} tokens</span>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Center/Right: Studio Chat Stream & Code Formatter */}
              <div className="lg:col-span-9 bg-slate-900/90 rounded-2xl border border-slate-800 flex flex-col overflow-hidden shadow-xl">
                {/* Messages Container */}
                <div className="flex-1 p-4 sm:p-6 overflow-y-auto space-y-4 custom-scrollbar bg-slate-950/40">
                  {messages.map((m) => (
                    <div
                      key={m.id}
                      className={`flex flex-col ${m.role === 'user' ? 'items-end' : 'items-start'}`}
                    >
                      <div className="flex items-center gap-2 mb-1 px-1 text-[10px] text-slate-400">
                        {m.role === 'user' ? (
                          <span>You • {m.time}</span>
                        ) : (
                          <div className="flex items-center gap-2">
                            <span className="flex items-center gap-1 text-violet-400 font-bold">
                              <Sparkles className="w-3 h-3 text-cyan-400" /> {m.model}
                            </span>
                            <span className="text-slate-600">•</span>
                            <span className="text-slate-400 font-mono">{m.latency}ms</span>
                            <span className="text-slate-600">•</span>
                            <span className="text-slate-400">{m.tokens} tokens</span>
                          </div>
                        )}
                      </div>

                      <div
                        className={`relative group max-w-2xl p-4 rounded-2xl text-xs leading-relaxed ${
                          m.role === 'user'
                            ? 'bg-gradient-to-r from-violet-600 to-indigo-600 text-white rounded-tr-none shadow-md shadow-violet-950/50'
                            : 'bg-slate-900 border border-slate-800 text-slate-200 rounded-tl-none shadow-lg'
                        }`}
                      >
                        <div className="whitespace-pre-wrap font-sans space-y-2">{m.text}</div>

                        {/* Formatted Code Block */}
                        {m.codeSnippet && (
                          <div className="mt-3 rounded-xl overflow-hidden border border-slate-800 bg-slate-950 text-slate-100 font-mono text-[11px]">
                            <div className="bg-slate-900/80 px-3 py-1.5 border-b border-slate-800 flex items-center justify-between">
                              <span className="text-[10px] uppercase font-bold text-cyan-400">{m.codeLang || 'typescript'}</span>
                              <button
                                onClick={() => handleCopyCode(m.codeSnippet!, m.id)}
                                className="flex items-center gap-1 text-[10px] text-slate-400 hover:text-white px-2 py-0.5 rounded bg-slate-800/80 hover:bg-violet-600 transition-colors"
                              >
                                {copiedCodeId === m.id ? (
                                  <>
                                    <Check className="w-3 h-3 text-emerald-400" /> Copied!
                                  </>
                                ) : (
                                  <>
                                    <Copy className="w-3 h-3" /> Copy Code
                                  </>
                                )}
                              </button>
                            </div>
                            <pre className="p-3 overflow-x-auto custom-scrollbar leading-relaxed">
                              <code>{m.codeSnippet}</code>
                            </pre>
                          </div>
                        )}

                        {m.role === 'assistant' && (
                          <div className="mt-2.5 pt-2 border-t border-slate-800/80 flex items-center justify-between text-[10px] text-slate-500">
                            <div className="flex items-center gap-2">
                              <button className="hover:text-emerald-400 transition-colors p-1" title="Helpful response">
                                <ThumbsUp className="w-3 h-3" />
                              </button>
                              <button className="hover:text-rose-400 transition-colors p-1" title="Report issue">
                                <ThumbsDown className="w-3 h-3" />
                              </button>
                            </div>
                            <span className="text-violet-400 font-mono">Temp: {temperature}</span>
                          </div>
                        )}
                      </div>
                    </div>
                  ))}

                  {isGenerating && (
                    <div className="flex items-center gap-2.5 text-xs text-violet-300 font-medium bg-violet-950/60 p-3 rounded-xl max-w-sm border border-violet-800/60 shadow-lg animate-pulse">
                      <Cpu className="w-4 h-4 text-cyan-400 animate-spin" />
                      <span>{selectedModel} is synthesizing neural output...</span>
                    </div>
                  )}
                </div>

                {/* Prompt Input Form */}
                <div className="p-3.5 bg-slate-900 border-t border-slate-800">
                  <form
                    onSubmit={(e) => {
                      e.preventDefault();
                      handleSendMessage();
                    }}
                    className="flex items-center gap-2 bg-slate-950 border border-slate-700/80 rounded-xl p-1.5 focus-within:ring-2 focus-within:ring-violet-500 focus-within:border-transparent transition-all"
                  >
                    <input
                      type="text"
                      value={inputPrompt}
                      onChange={(e) => setInputPrompt(e.target.value)}
                      placeholder={`Ask ${selectedModel} (e.g. 'Optimize this SQL join' or 'Write JWT auth middleware')...`}
                      className="flex-1 bg-transparent px-3 py-2 text-xs text-white placeholder-slate-500 focus:outline-none"
                    />
                    <button
                      type="submit"
                      disabled={!inputPrompt.trim() || isGenerating}
                      className="bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 disabled:opacity-50 text-white px-4 py-2 rounded-lg text-xs font-bold flex items-center gap-1.5 shadow-md shadow-violet-950 transition-all"
                    >
                      <span>Generate</span>
                      <Send className="w-3.5 h-3.5" />
                    </button>
                  </form>

                  <div className="flex items-center justify-between px-2 pt-2 text-[11px] text-slate-400">
                    <span className="flex items-center gap-1">
                      <Sparkles className="w-3 h-3 text-cyan-400" />
                      Active Model: {selectedModel} ({systemPersona})
                    </span>
                    <span className="text-violet-400 font-medium">Context: 128k Tokens Ready</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* 3. PROMPT TEMPLATES LIBRARY VIEW */}
        {activeTab === 'library' && (
          <div className="py-8 px-4 lg:px-12 max-w-5xl mx-auto space-y-6">
            <div className="text-center space-y-3">
              <span className="text-xs font-bold uppercase tracking-wider text-violet-400 bg-violet-950 px-3 py-1 rounded-full border border-violet-800">
                Pre-Built Engineering Library
              </span>
              <h2 className="text-3xl font-black text-white">Production Prompt Templates</h2>
              <p className="text-xs sm:text-sm text-slate-400 max-w-xl mx-auto">
                Curated prompt archetypes with verified 0-hallucination accuracy. Click any template to immediately execute it in the AI Studio.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {PROMPT_TEMPLATES.map((tmpl, i) => (
                <div
                  key={i}
                  className="bg-slate-900/80 p-5 rounded-2xl border border-slate-800 hover:border-violet-600/60 transition-all flex flex-col justify-between space-y-4 group"
                >
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] uppercase font-bold px-2 py-0.5 rounded bg-slate-800 text-cyan-400 border border-slate-700">
                        {tmpl.category}
                      </span>
                      <Sparkles className="w-3.5 h-3.5 text-slate-500 group-hover:text-violet-400 transition-colors" />
                    </div>
                    <h3 className="text-sm font-bold text-white group-hover:text-violet-300 transition-colors">
                      {tmpl.title}
                    </h3>
                    <p className="text-xs text-slate-400 leading-relaxed">{tmpl.desc}</p>
                  </div>

                  <button
                    onClick={() => {
                      setActiveTab('playground');
                      handleSendMessage(tmpl.prompt);
                    }}
                    className="w-full py-2 bg-slate-950 hover:bg-violet-600 text-slate-200 hover:text-white border border-slate-800 hover:border-violet-500 rounded-xl text-xs font-bold flex items-center justify-center gap-1.5 transition-all shadow-sm"
                  >
                    <span>Run in Studio</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* 4. WORKSPACE & API MANAGEMENT VIEW */}
        {activeTab === 'workspace' && (
          <div className="py-8 px-4 lg:px-12 max-w-5xl mx-auto space-y-8">
            <div className="text-center space-y-3">
              <span className="text-xs font-bold uppercase tracking-wider text-cyan-400 bg-cyan-950 px-3 py-1 rounded-full border border-cyan-800">
                Team & Developer Hub
              </span>
              <h2 className="text-3xl font-black text-white">API Keys & Team Management</h2>
              <p className="text-xs sm:text-sm text-slate-400 max-w-xl mx-auto">
                Generate production API tokens, inspect rate limits, and configure developer access controls.
              </p>
            </div>

            {/* API Keys Card */}
            <div className="bg-slate-900/80 p-6 rounded-2xl border border-slate-800 space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <h3 className="text-base font-bold text-white flex items-center gap-2">
                    <Key className="w-4 h-4 text-violet-400" />
                    Active API Keys
                  </h3>
                  <p className="text-xs text-slate-400">Use these keys to authenticate REST endpoints and SDK clients</p>
                </div>

                <div className="flex items-center gap-2">
                  <input
                    type="text"
                    value={newKeyName}
                    onChange={(e) => setNewKeyName(e.target.value)}
                    placeholder="Key Label (e.g. Analytics Backend)"
                    className="bg-slate-950 px-3 py-1.5 rounded-xl border border-slate-700 text-xs text-white placeholder-slate-500 focus:outline-none"
                  />
                  <button
                    onClick={handleGenerateApiKey}
                    className="px-3.5 py-1.5 bg-violet-600 hover:bg-violet-500 text-white rounded-xl text-xs font-bold flex items-center gap-1.5 shadow"
                  >
                    <Plus className="w-3.5 h-3.5" />
                    <span>Create Key</span>
                  </button>
                </div>
              </div>

              <div className="space-y-2.5">
                {apiKeys.map((k) => (
                  <div
                    key={k.id}
                    className="bg-slate-950 p-3.5 rounded-xl border border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs"
                  >
                    <div className="space-y-1">
                      <div className="font-bold text-white">{k.name}</div>
                      <div className="font-mono text-[11px] text-slate-400 bg-slate-900 px-2 py-0.5 rounded inline-block border border-slate-800">
                        {k.key}
                      </div>
                    </div>

                    <div className="flex items-center gap-3 text-[11px] text-slate-500">
                      <span>Created {k.created}</span>
                      <button
                        onClick={() => {
                          navigator.clipboard?.writeText(k.key);
                          setCopiedKeyId(k.id);
                          setTimeout(() => setCopiedKeyId(null), 2000);
                        }}
                        className="px-2.5 py-1 rounded bg-slate-900 hover:bg-violet-900/60 text-slate-300 hover:text-white border border-slate-800 flex items-center gap-1 transition-all"
                      >
                        {copiedKeyId === k.id ? (
                          <>
                            <Check className="w-3 h-3 text-emerald-400" /> Copied
                          </>
                        ) : (
                          <>
                            <Copy className="w-3 h-3" /> Copy
                          </>
                        )}
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Team Members Card */}
            <div className="bg-slate-900/80 p-6 rounded-2xl border border-slate-800 space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-base font-bold text-white flex items-center gap-2">
                  <Users className="w-4 h-4 text-cyan-400" />
                  Workspace Collaborators
                </h3>
                <span className="text-xs text-slate-400">4 / 10 Seats Used</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                {[
                  { name: 'Alex Morgan', email: 'alex@company.com', role: 'Owner & Admin', badge: 'bg-violet-950 text-violet-300' },
                  { name: 'Devon Lee', email: 'devon@company.com', role: 'Lead Architect', badge: 'bg-cyan-950 text-cyan-300' },
                  { name: 'Priya Patel', email: 'priya@company.com', role: 'ML Engineer', badge: 'bg-indigo-950 text-indigo-300' },
                  { name: 'Marcus Sterling', email: 'marcus@company.com', role: 'Security Lead', badge: 'bg-emerald-950 text-emerald-300' }
                ].map((member, idx) => (
                  <div key={idx} className="bg-slate-950 p-3 rounded-xl border border-slate-800 flex items-center justify-between">
                    <div>
                      <div className="font-bold text-white">{member.name}</div>
                      <div className="text-[10px] text-slate-500">{member.email}</div>
                    </div>
                    <span className={`text-[10px] font-bold px-2 py-0.5 rounded border border-slate-800 ${member.badge}`}>
                      {member.role}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* 5. PRICING VIEW */}
        {activeTab === 'pricing' && (
          <div className="py-8 px-4 lg:px-12 max-w-4xl mx-auto space-y-8">
            <div className="text-center space-y-3">
              <span className="text-xs font-bold uppercase tracking-wider text-violet-400 bg-violet-950 px-3 py-1 rounded-full border border-violet-800">
                Investment Structure
              </span>
              <h2 className="text-3xl font-black text-white">Pro Plan Showcase — ₹39,999</h2>
              <p className="text-xs sm:text-sm text-slate-400 max-w-md mx-auto">
                Comprehensive AI SaaS website complete with multi-model studio, dark aesthetic, and API management suite.
              </p>
            </div>

            <div className="bg-slate-900 rounded-3xl border-2 border-violet-500 shadow-2xl overflow-hidden max-w-xl mx-auto">
              <div className="bg-gradient-to-r from-violet-600 via-indigo-600 to-cyan-600 p-6 text-white text-center space-y-2">
                <div className="text-xs uppercase font-bold tracking-widest text-violet-200">Recommended for High-Growth Startups</div>
                <div className="text-4xl font-black">₹39,999 <span className="text-xs font-normal text-violet-200">one-time full setup</span></div>
                <p className="text-xs text-violet-100">Interactive multi-model playground + dark neon luxury UI</p>
              </div>

              <div className="p-6 sm:p-8 space-y-6">
                <div className="space-y-3">
                  <h4 className="text-xs font-bold text-white uppercase tracking-wider">Everything in Base, plus:</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-slate-300">
                    {[
                      'Multi-Model Selector (GPT-4o, Claude 3.5, Cognita)',
                      'Granular Temperature & Token Sliders',
                      'Pre-Built Engineering Prompt Library',
                      'Simulated PDF & CSV Document Parsing',
                      'Multi-Thread Session History UI',
                      'Formatted Code Highlighter with 1-Click Copy',
                      'Secret API Key Generation & Management',
                      'Team Workspace & Role Access UI',
                      'Testimonials Wall & FAQ Accordion',
                      'Priority Support & Deployment Assistance'
                    ].map((feature, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div>
                    <div className="text-xs font-bold text-white">Full Handover in 5-7 Business Days</div>
                    <div className="text-[11px] text-slate-400">Includes complete source code & live hosting setup</div>
                  </div>
                  <button
                    onClick={() => setIsDemoModalOpen(true)}
                    className="w-full sm:w-auto px-6 py-2.5 bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 text-white rounded-xl text-xs font-bold shadow-lg shadow-violet-900/50 transition-all"
                  >
                    Select ₹39,999 Pro Plan
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* 6. FAQ ACCORDION VIEW */}
        {activeTab === 'faq' && (
          <div className="py-8 px-4 lg:px-12 max-w-3xl mx-auto space-y-8">
            <div className="text-center space-y-3">
              <span className="text-xs font-bold uppercase tracking-wider text-violet-400 bg-violet-950 px-3 py-1 rounded-full border border-violet-800">
                Frequently Asked Questions
              </span>
              <h2 className="text-3xl font-black text-white">Everything You Need to Know</h2>
              <p className="text-xs sm:text-sm text-slate-400">
                Clear answers regarding multi-model hot-swapping, data protection, and deployment timelines.
              </p>
            </div>

            <div className="space-y-3">
              {[
                {
                  q: 'How does multi-model switching work in Cognita Pro?',
                  a: 'Cognita Pro includes unified SDK routing that allows you to hot-swap between Claude 3.5 Sonnet, GPT-4o, and Cognita Ultra v3 without modifying client-side integration logic.'
                },
                {
                  q: 'Is my team’s code and data secure during playground queries?',
                  a: 'Yes. All playground sessions operate under zero-data retention policies. Your inputs and generated code are never used to train global foundation models.'
                },
                {
                  q: 'Can I integrate my own API keys or custom fine-tuned weights?',
                  a: 'Absolutely. The Pro tier provides a dedicated Workspace & API dashboard to generate organization keys and hook up private endpoints.'
                },
                {
                  q: 'What is the delivery timeline for the ₹39,999 Pro website?',
                  a: 'The complete Pro website is delivered, customized to your branding, and deployed within 5 to 7 business days with comprehensive documentation.'
                }
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="bg-slate-900/80 rounded-2xl border border-slate-800 overflow-hidden transition-all"
                >
                  <button
                    onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                    className="w-full p-4 text-left flex items-center justify-between text-xs font-bold text-white hover:text-violet-300"
                  >
                    <span>{item.q}</span>
                    <ChevronDown
                      className={`w-4 h-4 text-slate-400 transition-transform ${openFaq === idx ? 'rotate-180 text-violet-400' : ''}`}
                    />
                  </button>
                  {openFaq === idx && (
                    <div className="p-4 pt-0 text-xs text-slate-400 leading-relaxed border-t border-slate-800/60 bg-slate-950/40">
                      {item.a}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </main>

      {/* Demo Booking Modal */}
      {isDemoModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-slate-900 border border-violet-600/50 rounded-3xl max-w-md w-full p-6 space-y-5 shadow-2xl">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5 text-cyan-400" />
                <h3 className="font-bold text-base text-white">Book a Live AI Demo</h3>
              </div>
              <button
                onClick={() => {
                  setIsDemoModalOpen(false);
                  setBookingStep('form');
                }}
                className="text-slate-400 hover:text-white p-1"
              >
                ✕
              </button>
            </div>

            {bookingStep === 'form' ? (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setBookingStep('success');
                }}
                className="space-y-3.5 text-xs"
              >
                <div className="space-y-1">
                  <label className="font-bold text-slate-300">Your Name</label>
                  <input
                    type="text"
                    required
                    value={bookingData.name}
                    onChange={(e) => setBookingData({ ...bookingData, name: e.target.value })}
                    placeholder="e.g. Elena Rostova"
                    className="w-full bg-slate-950 px-3 py-2 rounded-xl border border-slate-700 text-white focus:ring-2 focus:ring-violet-500 focus:outline-none"
                  />
                </div>

                <div className="space-y-1">
                  <label className="font-bold text-slate-300">Work Email</label>
                  <input
                    type="email"
                    required
                    value={bookingData.email}
                    onChange={(e) => setBookingData({ ...bookingData, email: e.target.value })}
                    placeholder="elena@startup.io"
                    className="w-full bg-slate-950 px-3 py-2 rounded-xl border border-slate-700 text-white focus:ring-2 focus:ring-violet-500 focus:outline-none"
                  />
                </div>

                <div className="grid grid-cols-2 gap-2">
                  <div className="space-y-1">
                    <label className="font-bold text-slate-300">Preferred Date</label>
                    <input
                      type="date"
                      value={bookingData.date}
                      onChange={(e) => setBookingData({ ...bookingData, date: e.target.value })}
                      className="w-full bg-slate-950 px-3 py-2 rounded-xl border border-slate-700 text-white focus:outline-none"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="font-bold text-slate-300">Time Slot</label>
                    <select
                      value={bookingData.time}
                      onChange={(e) => setBookingData({ ...bookingData, time: e.target.value })}
                      className="w-full bg-slate-950 px-3 py-2 rounded-xl border border-slate-700 text-white focus:outline-none"
                    >
                      <option>10:00 AM IST</option>
                      <option>02:00 PM IST</option>
                      <option>05:30 PM IST</option>
                      <option>08:00 PM IST</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="font-bold text-slate-300">Team Size</label>
                  <select
                    value={bookingData.teamSize}
                    onChange={(e) => setBookingData({ ...bookingData, teamSize: e.target.value })}
                    className="w-full bg-slate-950 px-3 py-2 rounded-xl border border-slate-700 text-white focus:outline-none"
                  >
                    <option>1 - 5 Engineers</option>
                    <option>10 - 50 Engineers</option>
                    <option>50+ Enterprise Team</option>
                  </select>
                </div>

                <button
                  type="submit"
                  className="w-full py-2.5 bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 text-white rounded-xl font-bold shadow-lg shadow-violet-950 transition-all mt-2"
                >
                  Confirm Live Demo Session
                </button>
              </form>
            ) : (
              <div className="text-center py-6 space-y-3 text-xs">
                <div className="w-12 h-12 rounded-full bg-emerald-950 text-emerald-400 flex items-center justify-center mx-auto border border-emerald-700">
                  <Check className="w-6 h-6" />
                </div>
                <h4 className="text-base font-bold text-white">Demo Confirmed!</h4>
                <p className="text-slate-400">
                  We sent a calendar invite to <span className="text-violet-300 font-bold">{bookingData.email || 'your email'}</span> for {bookingData.date} at {bookingData.time}.
                </p>
                <button
                  onClick={() => {
                    setIsDemoModalOpen(false);
                    setBookingStep('form');
                  }}
                  className="px-6 py-2 bg-slate-800 hover:bg-slate-700 text-white rounded-xl font-bold"
                >
                  Done
                </button>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Pro SaaS Footer */}
      <footer className="mt-auto border-t border-slate-800/80 bg-slate-950 px-4 lg:px-8 py-4 text-xs text-slate-500 flex flex-col sm:flex-row items-center justify-between gap-2 shrink-0">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span>Cognita Ultra Cluster • All 8 Regions Healthy (P99: 148ms)</span>
        </div>
        <div>
          <span>© 2025 Cognita AI Pro. High-Security SaaS Infrastructure.</span>
        </div>
      </footer>
    </div>
  );
};
